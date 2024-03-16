System.register(['react', 'rally/@@', './render-css-vars.js', './storage-css-vars.js'], (function (exports) {
    'use strict';
    var React, Col, Button, renderCSSVars, loadCSSVars, saveCSSVars;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            Col = module.Col;
            Button = module.Button;
        }, function (module) {
            renderCSSVars = module.renderCSSVars;
        }, function (module) {
            loadCSSVars = module.loadCSSVars;
            saveCSSVars = module.saveCSSVars;
        }],
        execute: (function () {

            exports('UserCssVars', UserCssVars);

            // user-cssvars.tsx
            function getStyleElement() {
                const styleId = 'example-style';
                let style = document.querySelector(`#${styleId}`);
                if (style)
                    return style;
                // 如果没有则构造一个并插入到 body 中
                style = document.createElement('style');
                style.id = styleId;
                document.body.appendChild(style);
                return style;
            }
            function UserCssVars() {
                // 读取变量并作为 react state 使用
                const [cssvars, setCssVars] = React.useState(() => loadCSSVars());
                React.useEffect(() => {
                    // 每次状态变化后渲染并存储
                    // 这里刷新比较频繁, 写个 timer 优化一下
                    const timer = setTimeout(() => {
                        renderCSSVars(cssvars, getStyleElement());
                        saveCSSVars(cssvars);
                    }, 32);
                    return () => {
                        clearTimeout(timer);
                    };
                }, [cssvars.buttonColor]);
                return (React.createElement(Col, null,
                    React.createElement("div", null,
                        React.createElement("div", null,
                            "\u8BF7\u70B9\u51FB\u4E0B\u9762\u8272\u6846\u9009\u53D6\u989C\u8272, ",
                            React.createElement("br", null),
                            "\u5F53\u524D\u8272\u503C: ",
                            cssvars.buttonColor),
                        React.createElement("input", { type: "color", value: cssvars.buttonColor, onChange: e => {
                                setCssVars({
                                    buttonColor: e.target.value
                                });
                            } })),
                    React.createElement(Button, { icon: "play", style: {
                            backgroundColor: cssvars.buttonColor,
                        } }, "\u8FD9\u662F\u4E00\u4E2A\u7A7A\u6309\u94AE")));
            }

        })
    };
}));
