System.register(['./hashes.js'], (function (exports) {
    'use strict';
    var rand;
    return {
        setters: [function (module) {
            rand = module.rand;
        }],
        execute: (function () {

            exports('perlin1d_v1', perlin1d_v1);

            // perlin1d_v1.tsx
            // 第一版
            function perlin1d_v1(x) {
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
                const rate = dx / 1;
                // 最后拿到 rate 给 r0 r1 做线性插值
                const noise = r0 + rate * (r1 - r0);
                // r0 和 r1 是 0-255 的数, 我们需要返回 0-1 的范围
                return noise / 255;
            }

        })
    };
}));
