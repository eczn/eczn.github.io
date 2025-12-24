System.register(['react', './polar-point.js', './get-event-point.js'], (function (exports) {
    'use strict';
    var React, toPolarPoint, getEventPoint, getDivPoint;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            toPolarPoint = module.toPolarPoint;
        }, function (module) {
            getEventPoint = module.getEventPoint;
            getDivPoint = module.getDivPoint;
        }],
        execute: (function () {

            exports('useClickWheel', useClickWheel);

            // use-clickwheel.tsx
            /**
             * 为 elemRef 处理 clickWheel 相关事件状态
             * @param elemRef 比如一个正方形 div ref
             * @param onSubmit 当 touchend/mouseup 结束事件的时候传出最后一次状态
             * @returns
             */
            function useClickWheel(elemRef, onSubmit) {
                const [state, setState] = React.useState(null);
                React.useEffect(() => {
                    const elem = elemRef.current;
                    if (!elem)
                        return;
                    // 记录当前转了多少圈
                    let circle = 0;
                    const onStart = (e) => {
                        const ep = getEventPoint(e);
                        const p = getDivPoint(elem, ep);
                        const pp = toPolarPoint(p);
                        // 重置状态
                        circle = 0;
                        setState({
                            type: 'dragging',
                            start: pp,
                            current: pp,
                        });
                    };
                    const onMove = (e) => {
                        const ep = getEventPoint(e);
                        const p = getDivPoint(elem, ep);
                        const pp = toPolarPoint(p);
                        setState(prev => {
                            if (!prev)
                                return null;
                            // 圈数多的时候 prev.current.angle 将会大于 360
                            // 需要划定在 [0,360) 之间
                            let prevCurrentAngle = prev.current.angle % 360;
                            if (prevCurrentAngle < 0)
                                prevCurrentAngle += 360;
                            // 经过极坐标系 0 度的时候会突变, 此时需要记录圈数
                            let dangle = pp.angle - prevCurrentAngle;
                            let dcircle = 0;
                            // 说明是顺时针过 0 点
                            if (dangle <= -330) {
                                dcircle = 1;
                                console.log('+1'); // 方便调试
                            }
                            // 说明是逆时针过 0 点
                            if (dangle >= 330) {
                                dcircle = -1;
                                console.log('-1'); // 方便调试
                            }
                            const nextCircle = circle + dcircle;
                            circle = nextCircle;
                            // 最新值写入, 下次 onMove 会用
                            pp.angle = nextCircle * 360 + pp.angle;
                            return {
                                type: 'dragging',
                                start: prev.start,
                                current: pp,
                            };
                        });
                    };
                    const onEnd = (e) => {
                        setState((prev) => {
                            // 将最后一次状态提交出去
                            onSubmit(prev);
                            return null;
                        });
                    };
                    // 需要禁用 passive
                    const options = { passive: false };
                    elem.addEventListener('touchstart', onStart, options);
                    elem.addEventListener('touchmove', onMove, options);
                    elem.addEventListener('touchend', onEnd, options);
                    elem.addEventListener('touchcancel', onEnd, options);
                    // mouse 事件组
                    elem.addEventListener('mousedown', onStart, options);
                    elem.addEventListener('mousemove', onMove, options);
                    elem.addEventListener('mouseup', onEnd, options);
                    elem.addEventListener('mouseleave', onEnd, options);
                    // 取消副作用
                    return () => {
                        elem.removeEventListener('mousedown', onStart);
                        elem.removeEventListener('mousemove', onMove);
                        elem.removeEventListener('mouseup', onEnd);
                        elem.removeEventListener('touchstart', onStart);
                        elem.removeEventListener('touchmove', onMove);
                        elem.removeEventListener('touchend', onEnd);
                    };
                }, [elemRef.current]);
                return {
                    state,
                };
            }

        })
    };
}));
//# sourceMappingURL=use-clickwheel.js.map
