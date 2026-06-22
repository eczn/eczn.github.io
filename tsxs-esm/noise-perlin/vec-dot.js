System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('vecDot', vecDot);

            function vecDot(v1, v2) {
                return v1.x * v2.x + v1.y * v2.y;
            }

        })
    };
}));
