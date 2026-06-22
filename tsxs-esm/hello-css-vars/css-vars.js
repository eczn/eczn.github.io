System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('initialCSSVars', initialCSSVars);

            // 获取默认变量配置
            function initialCSSVars() {
                return {
                    buttonColor: '#e3e3e3'
                };
            }

        })
    };
}));
