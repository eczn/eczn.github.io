System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports({
                AudioPlayer: AudioPlayer,
                hashString: hashString
            });

            /** 从 URL 路径中提取文件名 */
            function getFilename(src) {
                try {
                    const url = new URL(src);
                    const segments = url.pathname.split('/').filter(Boolean);
                    return segments.length > 0 ? segments[segments.length - 1] : '未知文件';
                }
                catch {
                    const segments = src.split('/').filter(Boolean);
                    return segments.length > 0 ? segments[segments.length - 1] : '未知文件';
                }
            }
            /** 格式化秒数为 mm:ss 字符串 */
            function formatTime(seconds) {
                if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) {
                    return '0:00';
                }
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            }
            /** 计算字符串的数值哈希 (djb2 算法) */
            function hashString(str) {
                let hash = 5381;
                for (let i = 0; i < str.length; i++) {
                    hash = (hash * 33) ^ str.charCodeAt(i);
                }
                return Math.abs(hash);
            }
            /** 根据哈希值计算便签贴与胶带的伪随机偏移样式参数 */
            function getStickyNoteOffset(hashInput) {
                const hash = hashString(hashInput);
                const noteRotate = 2 * (((hash % 2001) / 1000) - 1); // 2 * (-1° ~ 1°) 区间按 hash 均匀分布
                const noteTranslateX = (((hash >> 3) % 17) / 16) * 8 - 4;
                const noteTranslateY = (((hash >> 5) % 13) / 12) * 4 - 2;
                const tapeWidthVal = 2 + (((hash >> 7) % 21) / 20) * 2; // 2rem ~ 4rem
                const tapeOffsetX = (((hash >> 11) % 23) / 22) * 12 - 6;
                return {
                    noteRotate: Number(noteRotate.toFixed(2)),
                    noteTranslateX: Number(noteTranslateX.toFixed(1)),
                    noteTranslateY: Number(noteTranslateY.toFixed(1)),
                    tapeWidth: `${tapeWidthVal.toFixed(2)}rem`,
                    tapeOffsetX: Number(tapeOffsetX.toFixed(1)),
                };
            }
            function AudioPlayer(props) {
                const audioRef = React.useRef(null);
                const [isPlaying, setIsPlaying] = React.useState(false);
                const [currentTime, setCurrentTime] = React.useState(0);
                const [duration, setDuration] = React.useState(0);
                const [isMuted, setIsMuted] = React.useState(false);
                const [isLooping, setIsLooping] = React.useState(false);
                const [isPlayPressed, setIsPlayPressed] = React.useState(false);
                // get note offset by hashing the combination of src, title, and text
                const noteOffset = getStickyNoteOffset(`${props.src ?? 'unknown'}`);
                // 兜底：SSR 水合后 loadedmetadata 可能已触发，直接从 DOM 读取 duration
                React.useEffect(() => {
                    const el = audioRef.current;
                    if (el && el.duration && !isNaN(el.duration) && isFinite(el.duration)) {
                        setDuration(el.duration);
                    }
                }, [props.src]);
                // 同步静音状态
                React.useEffect(() => {
                    if (audioRef.current) {
                        audioRef.current.muted = isMuted;
                    }
                }, [isMuted]);
                // 同步循环状态
                React.useEffect(() => {
                    if (audioRef.current) {
                        audioRef.current.loop = isLooping;
                    }
                }, [isLooping]);
                const togglePlay = React.useCallback(() => {
                    if (!audioRef.current)
                        return;
                    if (isPlaying) {
                        audioRef.current.pause();
                    }
                    else {
                        audioRef.current.play().catch(() => {
                            setIsPlaying(false);
                        });
                    }
                }, [isPlaying]);
                const handleSkip = React.useCallback((seconds) => {
                    if (!audioRef.current)
                        return;
                    const newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
                    audioRef.current.currentTime = newTime;
                    setCurrentTime(newTime);
                }, [duration]);
                const handleDownload = React.useCallback(() => {
                    window.open(props.src, '_blank');
                }, [props.src]);
                const toggleMute = React.useCallback(() => {
                    setIsMuted((prev) => !prev);
                }, []);
                const toggleLoop = React.useCallback(() => {
                    setIsLooping((prev) => !prev);
                }, []);
                const handleProgressClick = React.useCallback((e) => {
                    if (!audioRef.current || duration <= 0)
                        return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                    const newTime = ratio * duration;
                    audioRef.current.currentTime = newTime;
                    setCurrentTime(newTime);
                }, [duration]);
                const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;
                return (React.createElement("div", { 
                    // className 方便浏览器调试，不要删
                    className: "main-audio-player", style: {
                        position: 'relative',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: props.width ?? '18rem',
                        ...(!props.noCenter ? { margin: '0 auto', display: 'flex' } : {}),
                        ...(props.text ? { marginBottom: '2rem' } : {}),
                    } },
                    React.createElement("div", { style: {
                            position: 'relative',
                            zIndex: 1,
                            width: '100%',
                            padding: props.text ? '0.875rem 1rem 1.5rem 1rem' : '0.875rem 1rem',
                            boxSizing: 'border-box',
                            borderRadius: '0.875rem',
                            background: `
            repeating-linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.45) 0px,
              rgba(255, 255, 255, 0.45) 1px,
              rgba(0, 0, 0, 0.04) 1px,
              rgba(0, 0, 0, 0.04) 2px
            ),
            linear-gradient(180deg, #f7f6f0 0%, #eae6db 50%, #dad4c5 100%)
          `,
                            border: '1px solid #b2ac9f',
                            boxShadow: `
            0 10px 24px rgba(0, 0, 0, 0.12),
            0 2px 4px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 #ffffff,
            inset 0 -1px 2px rgba(0, 0, 0, 0.12)
          `,
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            userSelect: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem',
                        } },
                        React.createElement("audio", { ref: audioRef, src: props.src, preload: "auto", onTimeUpdate: () => {
                                if (audioRef.current) {
                                    setCurrentTime(audioRef.current.currentTime);
                                }
                            }, onLoadedMetadata: () => {
                                if (audioRef.current) {
                                    setDuration(audioRef.current.duration);
                                }
                            }, onEnded: () => setIsPlaying(false), onPlay: (e) => {
                                setIsPlaying(true);
                                const currentAudio = e.currentTarget;
                                if (typeof document !== 'undefined') {
                                    document.querySelectorAll('audio').forEach((aud) => {
                                        if (aud !== currentAudio) {
                                            aud.pause();
                                        }
                                    });
                                }
                                props.onPlay?.();
                            }, onPause: () => setIsPlaying(false) }),
                        React.createElement("div", { style: {
                                background: 'linear-gradient(180deg, #d2dbcf 0%, #c0ccc0 100%)',
                                border: '1px solid #99a597',
                                borderRadius: '0.4375rem',
                                padding: '0.5rem 0.75rem',
                                boxShadow: 'inset 0 1.5px 3.5px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.85)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                            } },
                            React.createElement("div", null,
                                React.createElement("img", { style: { width: '0.875rem', height: '0.875rem', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }, src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2d3b2c"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>')}`, alt: "" }),
                                React.createElement("span", { style: {
                                        display: 'inline-block',
                                        verticalAlign: 'middle',
                                        fontSize: '0.6875rem',
                                        fontWeight: 700,
                                        color: '#2d3b2c',
                                        letterSpacing: '0.5px',
                                        textShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
                                    } }, props.title ?? getFilename(props.src))),
                            React.createElement("div", { style: {
                                    fontFamily: '"Courier New", Courier, monospace',
                                    fontSize: '0.6rem',
                                    fontWeight: 700,
                                    color: '#283627',
                                    textShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
                                    lineHeight: '1rem',
                                } }, `${formatTime(currentTime)} / ${formatTime(duration)}`)),
                        React.createElement("div", { onClick: handleProgressClick, style: {
                                position: 'relative',
                                width: '100%',
                                height: '0.625rem',
                                borderRadius: '0.3125rem',
                                background: 'linear-gradient(180deg, #a19b8f 0%, #c0baad 100%)',
                                boxShadow: 'inset 0 1.5px 3px rgba(0, 0, 0, 0.35), 0 1px 0 #ffffff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                            } },
                            React.createElement("div", { style: {
                                    height: '100%',
                                    width: `${progressPercent}%`,
                                    borderRadius: '0.3125rem',
                                    background: 'linear-gradient(180deg, #f3a436 0%, #d47e18 100%)',
                                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.2)',
                                } }),
                            React.createElement("div", { style: {
                                    position: 'absolute',
                                    left: `calc(${progressPercent}% - 0.4375rem)`,
                                    width: '0.875rem',
                                    height: '0.875rem',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #e0dbce 60%, #b3ac9b 100%)',
                                    border: '1px solid #7c7568',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.28), inset 0 1px 0 #ffffff',
                                    pointerEvents: 'none',
                                } })),
                        React.createElement("div", { style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: '2px',
                            } },
                            React.createElement("button", { type: "button", onClick: toggleLoop, title: isLooping ? '关闭循环' : '循环播放', style: {
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '50%',
                                    background: isLooping
                                        ? 'linear-gradient(180deg, #e8d5b0 0%, #d4b87a 100%)'
                                        : 'linear-gradient(180deg, #ffffff 0%, #e5e0d3 100%)',
                                    border: '1px solid #a39c8e',
                                    boxShadow: isLooping
                                        ? 'inset 0 2px 4px rgba(0,0,0,0.22), 0 1px 0 #ffffff'
                                        : '0 2.5px 4px rgba(0,0,0,0.14), inset 0 1px 0 #ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    outline: 'none',
                                } },
                                React.createElement("img", { style: { width: '0.875rem', height: '0.875rem', display: 'block' }, src: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isLooping ? '#8b6914' : '#4a4439'}"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`)}`, alt: "" })),
                            React.createElement("button", { type: "button", onClick: handleDownload, title: "\u4E0B\u8F7D\u97F3\u9891", style: {
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #e5e0d3 100%)',
                                    border: '1px solid #a39c8e',
                                    boxShadow: '0 2.5px 4px rgba(0,0,0,0.14), inset 0 1px 0 #ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    outline: 'none',
                                } },
                                React.createElement("img", { style: { width: '0.875rem', height: '0.875rem', display: 'block' }, src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4a4439"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>')}`, alt: "" })),
                            React.createElement("button", { type: "button", onClick: togglePlay, onMouseDown: () => setIsPlayPressed(true), onMouseUp: () => setIsPlayPressed(false), onMouseLeave: () => setIsPlayPressed(false), title: isPlaying ? '暂停' : '播放', style: {
                                    width: '2.75rem',
                                    height: '2.75rem',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #ece6da 50%, #d2cbba 100%)',
                                    border: '1px solid #918a7a',
                                    boxShadow: isPlayPressed
                                        ? 'inset 0 2.5px 5px rgba(0,0,0,0.32), 0 1px 0 #ffffff'
                                        : '0 4px 8px rgba(0,0,0,0.18), inset 0 1px 0 #ffffff, inset 0 -1.5px 2px rgba(0,0,0,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    outline: 'none',
                                } }, isPlaying ? (React.createElement("img", { style: { width: '1rem', height: '1rem', display: 'block' }, src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3d372e"><rect x="5" y="4" width="5" height="16" rx="1"/><rect x="14" y="4" width="5" height="16" rx="1"/></svg>')}`, alt: "" })) : (React.createElement("img", { style: { width: '1.125rem', height: '1.125rem', display: 'block', marginLeft: '2px' }, src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3d372e"><path d="M8 5v14l11-7z"/></svg>')}`, alt: "" }))),
                            React.createElement("button", { type: "button", onClick: toggleMute, title: isMuted ? '取消静音' : '静音', style: {
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(180deg, #ffffff 0%, #e5e0d3 100%)',
                                    border: '1px solid #a39c8e',
                                    boxShadow: isMuted
                                        ? 'inset 0 2px 4px rgba(0,0,0,0.25), 0 1px 0 #ffffff'
                                        : '0 2.5px 4px rgba(0,0,0,0.14), inset 0 1px 0 #ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    outline: 'none',
                                } }, isMuted ? (React.createElement("img", { style: { width: '0.875rem', height: '0.875rem', display: 'block' }, src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7a7265"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>')}`, alt: "" })) : (React.createElement("img", { style: { width: '0.875rem', height: '0.875rem', display: 'block' }, src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4a4439"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>')}`, alt: "" }))))),
                    props.text && (React.createElement("div", { style: {
                            position: 'relative',
                            zIndex: 3,
                            marginTop: '-1em',
                            width: '90%',
                            boxSizing: 'border-box',
                            padding: '1.25rem 0.875rem 0.75rem 0.875rem',
                            borderRadius: '2px 2px 0.375rem 0.375rem',
                            background: `
            repeating-linear-gradient(
              transparent,
              transparent 1.25rem,
              rgba(210, 198, 155, 0.35) 1.25rem,
              rgba(210, 198, 155, 0.35) 1.3125rem
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.18) 0px,
              rgba(255, 255, 255, 0.18) 1px,
              transparent 1px,
              transparent 0.25rem
            ),
            linear-gradient(180deg, #fffde8 0%, #f5eebe 100%)
          `,
                            border: '1px solid #e3d9a2',
                            boxShadow: `
            0.375rem 0.625rem 1.25rem rgba(0, 0, 0, 0.18),
            2px 3px 6px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8)
          `,
                            transform: `translate(${noteOffset.noteTranslateX}px, ${noteOffset.noteTranslateY}px) rotate(${noteOffset.noteRotate}deg)`,
                        } },
                        React.createElement("div", { style: {
                                position: 'absolute',
                                top: '-0.5rem',
                                left: `calc(50% + ${noteOffset.tapeOffsetX}px)`,
                                transform: 'translateX(-50%) rotate(2deg)',
                                width: noteOffset.tapeWidth,
                                height: '0.875rem',
                                background: `
              repeating-linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.4) 0px,
                rgba(255, 255, 255, 0.4) 2px,
                rgba(230, 220, 190, 0.25) 2px,
                rgba(230, 220, 190, 0.25) 4px
              ),
              rgba(255, 255, 255, 0.6)
            `,
                                border: '1px solid rgba(190, 180, 140, 0.45)',
                                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.12)',
                                zIndex: 4,
                            } }),
                        React.createElement("div", { className: "--fontTitle", style: {
                                fontSize: '0.8125rem',
                                lineHeight: '1.3125rem',
                                color: '#2b2314',
                                letterSpacing: '0.3px',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)',
                            } }, props.text)))));
            }

        })
    };
}));
