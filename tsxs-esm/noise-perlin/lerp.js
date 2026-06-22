System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('lerp', lerp);

            // lerp.tsx
            // 线性插值
            function lerp(t, v1, v2) {
                return v1 + t * (v2 - v1);
            }

        })
    };
}));
