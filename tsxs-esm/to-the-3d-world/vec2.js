System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports({
                add3: add3,
                cross3: cross3,
                dot3: dot3,
                len3: len3,
                normalize3: normalize3,
                scale3: scale3,
                sub3: sub3
            });

            /** 计算 a + b */
            function add3(a, b) {
                return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
            }
            /** 计算 a - b */
            function sub3(a, b) {
                return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
            }
            /** 放大 a */
            function scale3(a, s) {
                return [a[0] * s, a[1] * s, a[2] * s];
            }
            /** 点乘 a \cdot b */
            function dot3(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
            }
            /** 叉乘 a \times b */
            function cross3(a, b) {
                return [
                    a[1] * b[2] - a[2] * b[1],
                    a[2] * b[0] - a[0] * b[2],
                    a[0] * b[1] - a[1] * b[0],
                ];
            }
            /** 计算 a 的模 (长度) */
            function len3(a) {
                return Math.hypot(a[0], a[1], a[2]);
            }
            /** 将 a 向量的长度设置为 1 (归一化) */
            function normalize3(a) {
                const l = len3(a);
                // 避免除 0 错误，兜一下
                if (l < 1e-10)
                    return [0, 0, 0];
                return [a[0] / l, a[1] / l, a[2] / l];
            }

        })
    };
}));
