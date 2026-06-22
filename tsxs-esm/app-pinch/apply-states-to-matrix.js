System.register(['./matrix.js'], (function (exports) {
    'use strict';
    var matrixProducts;
    return {
        setters: [function (module) {
            matrixProducts = module.matrixProducts;
        }],
        execute: (function () {

            exports('applyStatesToMatrix', applyStatesToMatrix);

            /** 将 states 应用到 matrix 上并返回新的矩阵 */
            function applyStatesToMatrix(matrix, states) {
                const [s1, s2] = states;
                if (s1 && s2) {
                    const centerStart = {
                        x: (s1.start.x + s2.start.x) / 2,
                        y: (s1.start.y + s2.start.y) / 2
                    };
                    const centerCurrent = {
                        x: (s1.current.x + s2.current.x) / 2,
                        y: (s1.current.y + s2.current.y) / 2
                    };
                    const d1 = Math.sqrt((s1.start.x - s2.start.x) * (s1.start.x - s2.start.x) +
                        (s1.start.y - s2.start.y) * (s1.start.y - s2.start.y));
                    const d2 = Math.sqrt((s1.current.x - s2.current.x) * (s1.current.x - s2.current.x) +
                        (s1.current.y - s2.current.y) * (s1.current.y - s2.current.y));
                    const ds = (d2 / d1);
                    return matrixProducts(matrix, [
                        [1, 0, 0],
                        [0, 1, 0],
                        [-centerStart.x, -centerStart.y, 1],
                    ], [
                        [ds, 0, 0],
                        [0, ds, 0],
                        [0, 0, 1],
                    ], [
                        [1, 0, 0],
                        [0, 1, 0],
                        [centerCurrent.x, centerCurrent.y, 1],
                    ]);
                }
                if (s1) {
                    return matrixProducts(matrix, [
                        [1, 0, 0],
                        [0, 1, 0],
                        [s1.translation.x, s1.translation.y, 1],
                    ]);
                }
                return matrixProducts(matrix, [
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1],
                ]);
            }

        })
    };
}));
