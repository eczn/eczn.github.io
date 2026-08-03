System.register(['react', '../../audio-player.js'], (function (exports) {
    'use strict';
    var React, hashString, AudioPlayer;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            hashString = module.hashString;
            AudioPlayer = module.AudioPlayer;
        }],
        execute: (function () {

            exports('AudioGuessCard', AudioGuessCard);

            function AudioGuessCard(props) {
                // 初始用 props 的确定性 hash 决定 A/B 分配，保证 SSR 水合一致
                // 后续点击「重新打乱」时才走 Math.random 重新随机
                const [origIsA, setOrigIsA] = React.useState(() => {
                    return hashString(`${props.origSrc}::${props.aiSrc}`) % 2 === 0;
                });
                // 用户选择: 'none' | 'A' | 'B'
                const [selectedChoice, setSelectedChoice] = React.useState('none');
                // 是否已揭晓答案
                const [isRevealed, setIsRevealed] = React.useState(false);
                // 根据随机结果计算 A 和 B 对应的音频源
                const audioASrc = origIsA ? props.origSrc : props.aiSrc;
                const audioBSrc = origIsA ? props.aiSrc : props.origSrc;
                // 处理提交猜测
                const handleSelect = React.useCallback((choice) => {
                    setSelectedChoice(choice);
                    setIsRevealed(true);
                }, []);
                // 重置盲测
                const handleReset = React.useCallback(() => {
                    setSelectedChoice('none');
                    setIsRevealed(false);
                    setOrigIsA(Math.random() < 0.5);
                }, []);
                // 判断用户是否猜对
                const isCorrect = (selectedChoice === 'A' && origIsA) || (selectedChoice === 'B' && !origIsA);
                // 获取播放器显示的 LCD 标题
                const getPlayerTitle = (label) => {
                    if (!isRevealed) {
                        return `盲测样本 ${label}`;
                    }
                    const isOrig = (label === 'A' && origIsA) || (label === 'B' && !origIsA);
                    return isOrig ? `真人原声` : `AI 生成`;
                };
                return (React.createElement("div", { className: "main-audio-guess-card", style: {
                        boxSizing: 'border-box',
                        width: '100%',
                        margin: '2rem auto',
                        padding: '1.25rem 0.5rem',
                        borderRadius: '1rem',
                        background: 'linear-gradient(180deg, #f3f1e8 0%, #e6e2d3 100%)',
                        border: '1px solid #c4beaf',
                        boxShadow: `
          0 0.75rem 1.75rem rgba(0, 0, 0, 0.12),
          inset 0 1px 0 #ffffff,
          inset 0 -1px 2px rgba(0, 0, 0, 0.08)
        `,
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        display: 'flex',
                        flexDirection: 'column',
                    } },
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottom: '1px dashed #b8b1a0',
                            paddingBottom: '0.75rem',
                        } },
                        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '0.5rem' } },
                            React.createElement("span", { style: { fontSize: '1.125rem' } }, "\uD83C\uDFA7"),
                            React.createElement("span", { style: {
                                    fontSize: '0.9375rem',
                                    fontWeight: 700,
                                    color: '#383227',
                                    letterSpacing: '0.5px',
                                    textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)',
                                } }, props.title ?? '声音盲测')),
                        React.createElement("div", { style: {
                                fontSize: '0.75rem',
                                color: isRevealed ? (isCorrect ? '#2e6b30' : '#a83232') : '#666053',
                                fontWeight: 600,
                                padding: '0.1875rem 0.625rem',
                                borderRadius: '0.75rem',
                                background: isRevealed
                                    ? isCorrect
                                        ? '#e2f3e4'
                                        : '#fbe4e4'
                                    : '#e2ddcf',
                                border: `1px solid ${isRevealed
                        ? isCorrect
                            ? '#a3d4a7'
                            : '#e4a8a8'
                        : '#c8c2b3'}`,
                            } }, isRevealed
                            ? isCorrect
                                ? '🎉 猜对了'
                                : '🤖 猜错了'
                            : '❓ 哪一个是原声？')),
                    React.createElement("div", { style: {
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            alignItems: 'flex-start',
                            marginTop: '2rem',
                        } },
                        React.createElement("div", { style: { position: 'relative' } },
                            React.createElement(AudioPlayer, { src: audioASrc, text: props.text, title: getPlayerTitle('A'), noCenter: true, width: "15rem" }),
                            isRevealed && (React.createElement("div", { style: {
                                    position: 'absolute',
                                    bottom: '0.625rem',
                                    right: '0.75rem',
                                    zIndex: 10,
                                    padding: '0.25rem 0.625rem',
                                    borderRadius: '0.375rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '1px',
                                    transform: 'rotate(-12deg)',
                                    textTransform: 'uppercase',
                                    border: origIsA ? '2px solid #b82e2e' : '2px solid #2e5cb8',
                                    color: origIsA ? '#b82e2e' : '#2e5cb8',
                                    background: origIsA ? 'rgba(255, 240, 240, 0.92)' : 'rgba(240, 244, 255, 0.92)',
                                    boxShadow: '0 2px 0.375rem rgba(0, 0, 0, 0.15)',
                                    userSelect: 'none',
                                    pointerEvents: 'none',
                                } }, origIsA ? '🎙️ 真人原声' : '🤖 GPT-SoVITS'))),
                        React.createElement("div", { style: { position: 'relative' } },
                            React.createElement(AudioPlayer, { text: props.text, src: audioBSrc, title: getPlayerTitle('B'), noCenter: true, width: "15rem" }),
                            isRevealed && (React.createElement("div", { style: {
                                    position: 'absolute',
                                    bottom: '0.625rem',
                                    right: '0.75rem',
                                    zIndex: 10,
                                    padding: '0.25rem 0.625rem',
                                    borderRadius: '0.375rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '1px',
                                    transform: 'rotate(-12deg)',
                                    textTransform: 'uppercase',
                                    border: !origIsA ? '2px solid #b82e2e' : '2px solid #2e5cb8',
                                    color: !origIsA ? '#b82e2e' : '#2e5cb8',
                                    background: !origIsA ? 'rgba(255, 240, 240, 0.92)' : 'rgba(240, 244, 255, 0.92)',
                                    boxShadow: '0 2px 0.375rem rgba(0, 0, 0, 0.15)',
                                    userSelect: 'none',
                                    pointerEvents: 'none',
                                } }, !origIsA ? '🎙️ 真人原声' : '🤖 GPT-SoVITS')))),
                    React.createElement("div", { style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginTop: '0.5rem',
                            borderTop: '1px dashed #b8b1a0',
                            paddingTop: '1rem',
                        } }, !isRevealed ? (React.createElement("div", { style: { display: 'flex', gap: '1rem', width: '100%', maxWidth: '28rem' } },
                        React.createElement("button", { type: "button", onClick: () => handleSelect('A'), style: {
                                flex: 1,
                                padding: '0.625rem 1rem',
                                borderRadius: '0.625rem',
                                background: 'linear-gradient(180deg, #ffffff 0%, #eae5d8 100%)',
                                border: '1px solid #a39c8e',
                                boxShadow: '0 3px 0.375rem rgba(0,0,0,0.12), inset 0 1px 0 #ffffff',
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                color: '#3a342a',
                                cursor: 'pointer',
                                outline: 'none',
                                transition: 'all 0.15s ease',
                            } }, "\u3010\u6837\u672C A\u3011\u662F\u539F\u58F0"),
                        React.createElement("button", { type: "button", onClick: () => handleSelect('B'), style: {
                                flex: 1,
                                padding: '0.625rem 1rem',
                                borderRadius: '0.625rem',
                                background: 'linear-gradient(180deg, #ffffff 0%, #eae5d8 100%)',
                                border: '1px solid #a39c8e',
                                boxShadow: '0 3px 0.375rem rgba(0,0,0,0.12), inset 0 1px 0 #ffffff',
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                color: '#3a342a',
                                cursor: 'pointer',
                                outline: 'none',
                                transition: 'all 0.15s ease',
                            } }, "\u3010\u6837\u672C B\u3011\u662F\u539F\u58F0"))) : (React.createElement("div", { style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                            width: '100%',
                        } },
                        React.createElement("button", { type: "button", onClick: handleReset, style: {
                                padding: '0.5rem 1.25rem',
                                borderRadius: '1.25rem',
                                background: 'linear-gradient(180deg, #ffffff 0%, #e0dacd 100%)',
                                border: '1px solid #a8a294',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 #ffffff',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#524b3e',
                                cursor: 'pointer',
                                outline: 'none',
                            } }, "\uD83D\uDD04 \u91CD\u65B0\u6253\u4E71\u518D\u6D4B\u4E00\u6B21"))))));
            }

        })
    };
}));
