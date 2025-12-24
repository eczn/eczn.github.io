System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports({
                matrixProduct: matrixProduct,
                matrixProducts: matrixProducts
            });

            function matrixProduct(matrix1, matrix2) {
                const rows1 = matrix1.length;
                const columns1 = matrix1[0].length;
                const rows2 = matrix2.length;
                const columns2 = matrix2[0].length;
                if (columns1 !== rows2) {
                    throw new Error('row col error');
                }
                const result = [];
                for (let i = 0; i < rows1; i++) {
                    result[i] = [];
                    for (let j = 0; j < columns2; j++) {
                        let sum = 0;
                        for (let k = 0; k < columns1; k++) {
                            sum += matrix1[i][k] * matrix2[k][j];
                        }
                        result[i][j] = sum;
                    }
                }
                return result;
            }
            function matrixProducts(m, ...ms) {
                let acc = m;
                for (let i = 0; i < ms.length; i++) {
                    acc = matrixProduct(acc, ms[i]);
                }
                return acc;
            }

        })
    };
}));
//# sourceMappingURL=matrix.js.map
