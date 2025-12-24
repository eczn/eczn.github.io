System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('bigIntAdd', bigIntAdd);

            function addDecimal(a, b) {
                return Number(a) + Number(b);
            }
            function bigIntAdd(a, b) {
                const lastA = a[a.length - 1];
                const lastB = b[b.length - 1];
                if (typeof lastA === 'undefined')
                    return b;
                if (typeof lastB === 'undefined')
                    return a;
                const res = addDecimal(lastA, lastB);
                const carry = res >= 10 ? '1' : '0';
                // 将进位 carry 加到 half 上就好了
                const half = bigIntAdd(a.slice(0, -1), b.slice(0, -1));
                const full = bigIntAdd(half, carry);
                // 0 开头就不输出 full 了
                if (full === '0')
                    return (res % 10).toString();
                return full + (res % 10).toString();
            }
            console.group('bigIntAdd');
            console.time('bigIntAdd');
            console.log(bigIntAdd('0', '0'));
            console.log(bigIntAdd('4', '0'));
            console.log(bigIntAdd('1', '8'));
            console.log(bigIntAdd('9', '11'));
            console.log(bigIntAdd('88', '12'));
            console.log(bigIntAdd('99', '999999'));
            console.log(bigIntAdd('99999999999', '99999'));
            console.log(bigIntAdd('2', '9'.repeat(999)));
            console.timeEnd('bigIntAdd');
            console.groupEnd();

        })
    };
}));
//# sourceMappingURL=bigint-add.js.map
