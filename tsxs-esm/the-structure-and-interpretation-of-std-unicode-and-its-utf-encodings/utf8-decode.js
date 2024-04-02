System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('utf8Decode', utf8Decode);

            /**
             * 将 arr 当作 utf-8 buffer 进行解码，将其解码位码点数组
             */
            function utf8Decode(arr) {
                let result = [];
                let i = 0;
                while (i < arr.length) {
                    const firstByte = arr[i];
                    // 先扫描 utf 头搞到总长度
                    let scanner = 0b10000000;
                    let utfLength = 0;
                    while (firstByte & scanner) {
                        utfLength++;
                        scanner = scanner >> 1;
                    }
                    // 第一位通过前面的 scanner 就能快速取出其有效的数据位
                    let buf = firstByte & (scanner - 1);
                    for (let offset = 1; offset < utfLength; offset++) {
                        buf = buf << 6;
                        buf = buf | (arr[i + offset] & 0b00111111);
                    }
                    result.push(buf);
                    i = i + utfLength;
                }
                return result;
            }

        })
    };
}));
