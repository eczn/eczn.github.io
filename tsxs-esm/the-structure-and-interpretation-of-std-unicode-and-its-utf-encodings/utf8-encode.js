System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('utf8EncodeCodePoint', utf8EncodeCodePoint);

            /** 将单个码点转为 utf-8 编码 */
            function utf8EncodeCodePoint(codePoint) {
                // 0b01111111 及以下的情况跟 ASCII 保持一致，直接返回即可
                if (codePoint <= 0b01111111) {
                    return [codePoint];
                }
                // 先将 codePoint 按 0b10 + 6 位的方式隔开成 number[]
                const result = [];
                for (;;) {
                    const _6bit = codePoint & 0b111111;
                    const _8bit = 0b10000000 | _6bit;
                    result.unshift(_8bit);
                    codePoint = codePoint >> 6;
                    if (codePoint === 0)
                        break;
                }
                // 处理 `utf 头`
                const header = ((1 << result.length) - 1) << 1;
                const restBits = 8 - 1 - result.length;
                // 判断第一位放不得下 header
                if ((1 << restBits) > (result[0] & 0b111111)) {
                    const headerByte = (header << restBits);
                    result[0] = (result[0] & 0b111111) | headerByte;
                }
                else {
                    // 放不下则单独开一个字节塞到最前面
                    result.unshift(((header + 1) << 1) << (restBits - 1));
                }
                return result;
            }

        })
    };
}));
