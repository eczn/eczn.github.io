System.register(['./lerp.js', './vec-dot.js', './hashes-vec.js'], (function (exports) {
    'use strict';
    var lerp, vecDot, randVecs;
    return {
        setters: [function (module) {
            lerp = module.lerp;
        }, function (module) {
            vecDot = module.vecDot;
        }, function (module) {
            randVecs = module.randVecs;
        }],
        execute: (function () {

            exports('perlin2d_v1', perlin2d_v1);

            // perlin2d_v1.tsx
            // 2d 第一版
            function perlin2d_v1(x, y) {
                // 对 x y 取整拿到晶格顶点的坐标
                const x0 = Math.floor(x);
                const x1 = x0 + 1;
                const y0 = Math.floor(y);
                const y1 = y0 + 1;
                // 四个晶格顶点的坐标
                const P1 = { x: x0, y: y0 };
                const P2 = { x: x1, y: y0 };
                const P3 = { x: x0, y: y1 };
                const P4 = { x: x1, y: y1 };
                // 四个晶格顶点对应的伪随机向量
                const vec_P1 = randVecs(P1);
                const vec_P2 = randVecs(P2);
                const vec_P3 = randVecs(P3);
                const vec_P4 = randVecs(P4);
                // 计算四个晶格的随机向量和相对位置的点积
                const value_P1 = vecDot(vec_P1, { x: x - x0, y: y - y0 });
                const value_P2 = vecDot(vec_P2, { x: x - x1, y: y - y0 });
                const value_P3 = vecDot(vec_P3, { x: x - x0, y: y - y1 });
                const value_P4 = vecDot(vec_P4, { x: x - x1, y: y - y1 });
                // O 点在 x, y 方向上的相对位置
                const dx = x - x0;
                const dy = y - y0;
                const rateX = blending(dx);
                const rateY = blending(dy);
                const noise = lerp(rateY, lerp(rateX, value_P1, value_P2), lerp(rateX, value_P3, value_P4));
                // 最后归一化处理, noise 的范围是 [-1, 1] 这里需要调整为 [0, 1]
                return (noise + 1) / 2;
            }
            // 6t^5 -15t^4 + 10t^3
            function blending(t) {
                return t * (t * (t * (10 + t * (-15 + 6 * t))));
            }

        })
    };
}));
