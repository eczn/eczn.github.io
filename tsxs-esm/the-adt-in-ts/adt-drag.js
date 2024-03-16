System.register(['react', './adt-drag-define.js', '../hooks/disable-touch-scroll.js'], (function (exports) {
    'use strict';
    var React, Direction, disableTouchScroll, enableTouchScroll;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            Direction = module.Direction;
        }, function (module) {
            disableTouchScroll = module.disableTouchScroll;
            enableTouchScroll = module.enableTouchScroll;
        }],
        execute: (function () {

            exports('ADTDrag', ADTDrag);

            // what-is-adt-so-called-in-pl/adt-drag.tex
            function ADTDrag() {
                const [dragState, setDragState] = React.useState({ type: 'inactive' });
                const [dx, dy] = getTranslation2D(dragState);
                const [directionX, directionY] = getDirection2D(dragState);
                const [lastDragResult, setLastDragReuslt] = React.useState('');
                const onStart = (e) => {
                    setDragState({
                        type: 'dragging',
                        start: { x: e.pageX, y: e.pageY },
                        translation: [0, 0],
                        direction: [Direction.Center, Direction.Center],
                    });
                };
                // 根据 start 计算位移和 Direction
                const onMove = (e) => {
                    setDragState(prevState => {
                        if (prevState.type === 'inactive')
                            return prevState;
                        // 末减初 得到两个坐标轴的位移
                        const translation = [
                            e.pageX - prevState.start.x,
                            e.pageY - prevState.start.y,
                        ];
                        return {
                            ...prevState,
                            translation: translation,
                            direction: [
                                // 根据两个轴位移得到 direction
                                translation[0] > 0 ? Direction.Right : Direction.Left,
                                translation[1] > 0 ? Direction.Down : Direction.Up,
                            ]
                        };
                    });
                };
                // 设置为不活跃
                const onEnd = (e) => {
                    setDragState(prev => {
                        // 只有在 dragging 的时候才记录
                        if (prev.type === 'dragging') {
                            setLastDragReuslt(`${dx}, ${dy}`);
                        }
                        return { type: 'inactive' };
                    });
                };
                return React.createElement(React.Fragment, null,
                    React.createElement("div", { style: {
                            position: 'relative', height: '300px',
                            width: '100%', background: '#EEE',
                            cursor: 'pointer', userSelect: 'none',
                        }, onMouseDown: (e) => onStart(e), onMouseMove: e => onMove(e), onMouseUp: e => onEnd(), 
                        // 兼容 move 到浏览器外部的情况
                        onMouseLeave: e => onEnd(), onTouchStart: e => {
                            disableTouchScroll(); // 禁用滚动, 解决滚动穿透
                            onStart(e.touches[0]);
                        }, onTouchMove: e => {
                            disableTouchScroll(); // 禁用滚动, 解决滚动穿透
                            onMove(e.touches[0]);
                        }, 
                        // 移动端实际没有 e
                        onTouchEnd: e => {
                            enableTouchScroll(); // 恢复滚动
                            onEnd(e?.touches?.[0]);
                        } },
                        React.createElement("div", null,
                            "\u4E0A\u4E00\u6B21\u62D6\u62FD\u7ED3\u679C: ",
                            lastDragResult),
                        React.createElement("div", { style: {
                                position: 'absolute', textAlign: 'center',
                                background: '#FEE', left: '50%',
                                top: '50%', display: 'inline-block',
                                whiteSpace: 'nowrap',
                                // 根据 dragState 拿到的 dx dy 设置位移
                                transform: `
          translate(
            calc(-50% + ${dx}px),
            calc(-50% + ${dy}px)
          )
        `,
                            } },
                            React.createElement("div", null,
                                "(",
                                dx,
                                ", ",
                                dy,
                                ")"),
                            React.createElement("div", null,
                                "(",
                                Direction[directionX],
                                ", ",
                                Direction[directionY],
                                ")"))));
            }
            /** 获取 state 当前的位移 */
            function getTranslation2D(state) {
                if (state.type === 'inactive') {
                    return [0, 0];
                }
                if (state.type === 'dragging') {
                    return state.translation;
                }
                return [0, 0];
            }
            /** 获取 state 当前的方向 */
            function getDirection2D(state) {
                if (state.type === 'inactive') {
                    return [Direction.Center, Direction.Center];
                }
                if (state.type === 'dragging') {
                    return state.direction;
                }
                return [Direction.Center, Direction.Center];
            }

        })
    };
}));
