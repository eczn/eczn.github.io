System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('toPolarPoint', toPolarPoint);

            /** 将二维坐标 Point2D 转为以原点 (0,0) 为中心的极坐标系 */
            function toPolarPoint(p) {
                const { x, y } = p;
                // 三角函数计算构造极坐标点
                const radius = Math.sqrt(x * x + y * y);
                const pp = {
                    angle: (Math.acos(x / radius) * 180 / Math.PI),
                    radius,
                };
                // 圆的周期性质会导致在第三第四象限计算的角度始终在 0,180 度内
                // 这种情况应该计算补角
                if (y < 0)
                    pp.angle = 360 - pp.angle;
                // 保证顺时针方向为正
                pp.angle = 360 - pp.angle;
                return pp;
            }

        })
    };
}));
//# sourceMappingURL=polar-point.js.map
