System.register(['./base64-alphabet.js'], (function (exports) {
    'use strict';
    var _6bitsToa;
    return {
        setters: [function (module) {
            _6bitsToa = module._6bitsToa;
        }],
        execute: (function () {

            exports('eczn_btoa_v1', eczn_btoa_v1);

            // eczn_btoa_v1.tsx
            /**
             * 注意到：
             * 3 个字节共 3 * 8 = 24 位
             * 4 个 base64 字母共 4 * 6 = 24 位
             * 因此可以三个字节三个字节的去处理,
             * 三个字节每个位跟 base64 字母的对应关系:
             *
             *    000000000000000000000000  (共 24 位)
             *    !!!!!!
             *          @@@@@@
             *                $$$$$$
             *                      %%%%%%  (每行对应一个字母, 各占6位)
             */
            function eczn_btoa_v1(buf) {
                let result = '';
                for (let i = 0; i < buf.length; i += 3) {
                    const b0 = buf[i + 0].charCodeAt(0);
                    // 传了 = 或者空了就当成 0 看待
                    const b1 = buf[i + 1]?.charCodeAt(0) ?? 0;
                    const b2 = buf[i + 2]?.charCodeAt(0) ?? 0;
                    // 111001 111001 101000 000000
                    // !!!!!! !!==== ====xx xxxxxx
                    const _1 = _6bitsToa(
                    // 取出 b0 的高 6 位
                    (b0 & 0b11111100) >> 2);
                    result = result.concat(_1);
                    const _2 = _6bitsToa(
                    // 取出 b0 的低 2 位,
                    // 然后再拼接 b1 的高 4 位
                    ((b0 & 0b00000011) << 4) + ((b1 & 0b11110000) >> 4));
                    result = result.concat(_2);
                    // 填 = 等于号处理，然后 break 掉
                    if (buf[i + 1] === undefined) {
                        result = result.concat('=');
                        result = result.concat('=');
                        break;
                    }
                    const _3 = _6bitsToa(
                    // 取 b1 的低四位，
                    // 然后再拼接 b2 的高 2 位
                    ((b1 & 0b00001111) << 2) + ((b2 & 0b11000000) >> 6));
                    result = result.concat(_3);
                    // 填 = 等于号处理，然后 break 掉
                    if (buf[i + 2] === undefined) {
                        result = result.concat('=');
                        break;
                    }
                    // 取 b2 的低 6 位
                    const _4 = _6bitsToa(b2 & 0b00111111);
                    result = result.concat(_4);
                }
                return result;
            }

        })
    };
}));
