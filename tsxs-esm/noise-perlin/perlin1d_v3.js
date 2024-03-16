System.register(['./hashes.js'], (function (exports) {
    'use strict';
    var rand;
    return {
        setters: [function (module) {
            rand = module.rand;
        }],
        execute: (function () {

            exports('perlin1d_v3', perlin1d_v3);

            // perlin1d_v3.tsx
            // 第三版，官方实现，缓动函数不一样
            function perlin1d_v3(x) {
                // 向下/向上取整
                const x0 = Math.floor(x);
                const x1 = x0 + 1;
                // 通过这种方式来实现伪随机
                const r0 = rand(x0);
                const r1 = rand(x1);
                // 拿到相对位置
                const dx = x - x0;
                // 拿到相对位置占的百分比,
                // 因为取整是 1 因此除 1 就行, 可省略提升性能
                let rate = (dx / 1);
                // 对 rate 做平滑处理
                rate = blending(rate);
                // 最后拿到 rate 给 r0 r1 做线性插值
                const noise = r0 + rate * (r1 - r0);
                // r0 和 r1 是 0-255 的数, 我们需要返回 0-1 的范围
                return noise / 255;
            }
            // 6t^5 -15t^4 + 10t^3
            function blending(t) {
                return t * (t * (t * (10 + t * (-15 + 6 * t))));
            }

        })
    };
}));
