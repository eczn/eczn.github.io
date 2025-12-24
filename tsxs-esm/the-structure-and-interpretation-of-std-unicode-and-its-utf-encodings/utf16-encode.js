System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('utf16EncodeCodePoint', utf16EncodeCodePoint);

            /**
             * high-half surrogates 0xD800 0xDBFF
             * low-half surrogates 0xDC00 0xDFFF
             * surrogates 0xD800-0xDFFFF
             * @param codePoint 给定码点
             * @returns 返回二字节或四字节 number[]
             */
            function utf16EncodeCodePoint(codePoint) {
                if (codePoint < 0x10000) { // 第一平面 (BMP)
                    const byte0 = (codePoint & 0b1111111100000000) >> 8;
                    const byte1 = codePoint & 0b0000000011111111;
                    return [byte0, byte1];
                }
                if (codePoint >= 0x100000) {
                    throw new Error('不支持大于 0x100000 的码点');
                }
                // 需要减去 0x10000 避免对第一平面重复编码
                const buf = (codePoint - 0x10000);
                const l10 = (buf & 0b00000000001111111111);
                const h10 = (buf & 0b11111111110000000000) >> 10;
                const h16 = h10 | 0b1101100000000000;
                const l16 = l10 | 0b1101110000000000;
                return [
                    (h16 & 0b1111111100000000) >> 8,
                    (h16 & 0b0000000011111111),
                    (l16 & 0b1111111100000000) >> 8,
                    (l16 & 0b0000000011111111),
                ];
            }

        })
    };
}));
//# sourceMappingURL=utf16-encode.js.map
