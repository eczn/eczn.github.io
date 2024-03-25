System.register(['./base64-alphabet.js'], (function (exports) {
    'use strict';
    var aTo6bits;
    return {
        setters: [function (module) {
            aTo6bits = module.aTo6bits;
        }],
        execute: (function () {

            exports('eczn_atob', eczn_atob);

            function eczn_atob(str) {
                let result = '';
                let buf = 0;
                let bitCount = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === '=')
                        break; // 读到等于号不要了
                    const bits = aTo6bits(str[i]);
                    buf = (buf << 6) + bits;
                    bitCount += 6;
                    while (bitCount >= 8) { // 超了
                        let byte = buf;
                        result += String.fromCharCode(byte >> (bitCount - 8));
                        buf = buf & ((0b1 << (bitCount - 8)) - 1);
                        bitCount -= 8;
                    }
                }
                // 如果 buf 本身就是 0 的话直接不要了
                if (bitCount !== 0 && buf !== 0) {
                    result += String.fromCharCode(buf << (8 - bitCount));
                }
                return result;
            }

        })
    };
}));
