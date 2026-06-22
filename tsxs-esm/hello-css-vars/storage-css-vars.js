System.register(['./css-vars.js'], (function (exports) {
    'use strict';
    var initialCSSVars;
    return {
        setters: [function (module) {
            initialCSSVars = module.initialCSSVars;
        }],
        execute: (function () {

            exports({
                loadCSSVars: loadCSSVars,
                saveCSSVars: saveCSSVars
            });

            /** 保存 CSS Vars */
            function saveCSSVars(cssVars) {
                const j = JSON.stringify(cssVars);
                localStorage.setItem('EXAMPLE_CSS_VARS', j);
            }
            /** 读取 CSSVars */
            function loadCSSVars() {
                // 服务端渲染场景直接返回初始 CSS 变量即可
                if (typeof window === 'undefined') {
                    return initialCSSVars();
                }
                const j = localStorage.getItem('EXAMPLE_CSS_VARS');
                const initialVars = initialCSSVars();
                // 如果之前没存过, 直接返回
                if (!j)
                    return initialVars;
                try {
                    // 注意这里是覆盖的
                    return {
                        ...initialVars,
                        ...JSON.parse(j)
                    };
                }
                catch (error) {
                    console.error('load css vars with error', error);
                    // 出错后直接返回 initialVars
                    return initialVars;
                }
            }

        })
    };
}));
