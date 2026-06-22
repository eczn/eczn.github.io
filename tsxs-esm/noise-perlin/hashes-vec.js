System.register(['./hashes.js'], (function (exports) {
    'use strict';
    var rand;
    return {
        setters: [function (module) {
            rand = module.rand;
        }],
        execute: (function () {

            exports('randVecs', randVecs);

            // hashes-vec.tsx
            /** 一个向量组 */
            const vecs = [
                { x: 1, y: 1 },
                { x: -1, y: 1 },
                { x: -1, y: -1 },
                { x: 1, y: -1 },
            ];
            function randVecs(vec) {
                // 将 x 和 y 坐标输入到 rand 生成一个合成的随机数
                const r = rand(rand(vec.x) + vec.y);
                // 因为 r 是随机的，因此可以这样随机从 vecs 中选择一个向量
                return vecs[r % vecs.length];
            }

        })
    };
}));
