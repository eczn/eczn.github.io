System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('ecznSub', ecznSub);

            // 推荐位运算相关都使用 bigint 来实现，
            // bigint 有更好的整数特性, 比 number 的浮点数特性好得多
            /** 转补码, 并将结果对齐到 uint16 */
            function complement(v) {
                return ((~v) + 1n) & 0xffffn;
            }
            function ecznSub(a, b) {
                const an = BigInt(a); // 转成 bigint
                const bn = BigInt(b); // 转成 bigint
                // 计算结果
                const result = (an + complement(bn)) & 0xffffn;
                // 判断符号位, 转成字符串返回
                if (result & 0x8000n)
                    return `-${complement(result)}`;
                return `${result}`;
            }
            console.group('开始 sub 测试用例');
            console.log(`sub(1000, 2) ==> ${ecznSub(1000, 2)}`);
            console.log(`sub(2, 1000) ==> ${ecznSub(2, 1000)}`);
            console.log(`sub(100, 100) ==> ${ecznSub(100, 100)}`);
            console.log(`sub(0, 0) ==> ${ecznSub(0, 0)}`);
            console.log(`sub(0, 2) ==> ${ecznSub(0, 2)}`);
            console.log(`sub(-32768, 1) ==> ${ecznSub(-32768, 1)}`);
            console.groupEnd();

        })
    };
}));
