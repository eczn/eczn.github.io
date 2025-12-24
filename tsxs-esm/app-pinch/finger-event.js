System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports({
                getElementOffsetPoint: getElementOffsetPoint,
                getElementOffsetPoints: getElementOffsetPoints,
                getFingerEventPoint: getFingerEventPoint,
                getFingerEventPoints: getFingerEventPoints
            });

            const isTouchEvent = (e) => !!e?.touches;
            /**
             * 抹平 touch 和 mouse 事件
             * 统一返回事件发生的 Point2D 坐标点
             */
            function getFingerEventPoint(e) {
                e.preventDefault();
                if (e instanceof TouchEvent) {
                    return {
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY,
                    };
                }
                return {
                    x: e.clientX,
                    y: e.clientY,
                };
            }
            /**
             * 从 touch 或者 mouse 事件中解析出 Point2D 出来
             * 这个 Point2D 是以 div 的中心点为原点的
             */
            function getElementOffsetPoint(div, ep) {
                const rect = div.getBoundingClientRect();
                // 算出相对位置
                const offsetX = ep.x - rect.x;
                const offsetY = ep.y - rect.y;
                // 需要以 div 的中心点为原点, 这样才方便调用 toPolarPoint
                const x = offsetX - (rect.width / 2);
                // 为什么是负数呢, 因为浏览器坐标系左上角是原点
                const y = -(offsetY - (rect.height / 2));
                return { x, y };
            }
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
//# sourceMappingURL=finger-event.js.map
