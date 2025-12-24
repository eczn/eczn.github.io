System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('renderCSSVars', renderCSSVars);

            // 将 vars 的内容渲染到 style 中
            // 以此处的 CSSVars 来说，渲染结果类似这样：
            // <style>
            // :root { --buttonColor: #BBB; }
            // <\/style>
            function renderCSSVars(vars, style) {
                const allDefine = Object.keys(vars).map(k => {
                    const v = vars[k];
                    const cssValue = typeof v === 'number' ? `${v}px` : v;
                    return `--${k}:${cssValue};`;
                }).join('\n');
                if (style) {
                    style.innerHTML = `:root { ${allDefine} }`;
                }
                else {
                    console.error(`style#CSS_VARS NotFound !`);
                }
            }

        })
    };
}));
//# sourceMappingURL=render-css-vars.js.map
