System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            // base64-alphabet.tsx
            // 长度为 64, 下标就是其二进制编码 binary
            const base64Alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz' +
                '0123456789' +
                '+/');
            // base64Alphabet 正查 map
            const btoaMap = new Map(base64Alphabet.split('').map((ch, idx) => [idx, ch]));
            // base64Alphabet 反查 map
            const atobMap = new Map(base64Alphabet.split('').map((ch, idx) => [ch, idx]) // 注意这里跟上面是反过来的
            );
            // 6bits 数字转 base64 字母
            const _6bitsToa = exports('_6bitsToa', (_6bit) => btoaMap.get(_6bit));
            // base64 字母转 6bits 数字
            const aTo6bits = exports('aTo6bits', (ch) => atobMap.get(ch));

        })
    };
}));
