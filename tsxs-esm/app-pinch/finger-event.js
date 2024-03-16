System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports({
                getElementOffsetPoints: getElementOffsetPoints,
                getFingerEventPoints: getFingerEventPoints
            });

            const isTouchEvent = (e) => !!e?.touches;
            /**
             * 抹平 touch 和 mouse 事件
             * 统一返回事件发生的 CGPoint 坐标点
             */
            function getFingerEventPoints(e) {
                if (isTouchEvent(e)) {
                    // 实测没有问题, 忽略
                    return [...e.touches].map(t => ({ x: t.clientX, y: t.clientY }));
                }
                return [
                    {
                        x: e.clientX,
                        y: e.clientY,
                    },
                ];
            }
            /**
             * 从 touch 或者 mouse 事件中解析出 CGPoint 出来
             * 这个 CGPoint 是以 div 的中心点为原点的
             */
            function getElementOffsetPoints(div, eps) {
                return eps.map(ep => {
                    const rect = div.getBoundingClientRect();
                    const x = ep.x - rect.x;
                    const y = ep.y - rect.y;
                    return { x, y };
                });
            }

        })
    };
}));
