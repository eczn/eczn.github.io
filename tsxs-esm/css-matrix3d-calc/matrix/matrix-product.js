System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('matrixProduct', matrixProduct);

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
                            //
                            // 这段比较乱, 你只需要记住下面这个是核心逻辑
                            // sum += matrix1[i][k] * matrix2[k][j]
                            // 
                            // 其他的部分是为了实现字符串的 Matrix 加法最后能得到像
                            // 1*10+2*12+3*14=76 这样的带过程的结果
                            // 
                            if (typeof matrix1[i][k] === 'number'
                                && typeof matrix2[k][j] === 'number') {
                                // @ts-ignore matrix 会用于 react 渲染
                                // 所以这里可能存在 string 计算, 可忽略
                                sum += matrix1[i][k] * matrix2[k][j];
                            }
                            else {
                                const temp = `${matrix1[i][k]}∙${matrix2[k][j]}`;
                                if (sum === 0) {
                                    // @ts-ignore 用于 react 渲染
                                    sum = temp;
                                }
                                else {
                                    // @ts-ignore 用于 react 渲染
                                    sum += ` + ${temp}`;
                                }
                            }
                        }
                        result[i][j] = sum;
                    }
                }
                return result;
            }

        })
    };
}));
//# sourceMappingURL=matrix-product.js.map
