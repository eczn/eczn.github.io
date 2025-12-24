System.register(['./base64-alphabet.js'], (function (exports) {
    'use strict';
    var _6bitsToa;
    return {
        setters: [function (module) {
            _6bitsToa = module._6bitsToa;
        }],
        execute: (function () {

            exports('eczn_btoa_v2', eczn_btoa_v2);

            // eczn_btoa_v2.tsx
            function eczn_btoa_v2(str) {
                let result = '';
                let buf = 0;
                let bitCount = 0;
                for (let i = 0; i < str.length; i++) {
                    const b0 = str.charCodeAt(i);
                    buf = (buf << 8) + b0;
                    bitCount += 8;
                    while (bitCount >= 6) { // 111111xx
                        result += _6bitsToa(buf >> (bitCount - 6));
                        buf = buf & ((0b1 << (bitCount - 6)) - 1);
                        bitCount -= 6;
                    }
                }
                // 最后剩下一点处理一下
                if (bitCount !== 0) {
                    result += _6bitsToa(buf << (6 - bitCount));
                }
                // 填等于号
                if ((result.length % 4) !== 0) {
                    result += '='.repeat(result.length % 4);
                }
                return result;
            }

        })
    };
}));
//# sourceMappingURL=eczn_btoa_v2.js.map
