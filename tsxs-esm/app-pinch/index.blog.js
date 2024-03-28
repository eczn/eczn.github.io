System.register(['react', 'rally/@@', './index.css.js', './index.js', './pinch.svg.js'], (function (exports) {
    'use strict';
    var React, WindowApp, H1Block, P, Numbering, metaBeauty, css, AppPinch, svgPinch;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            WindowApp = module.WindowApp;
            H1Block = module.H1Block;
            P = module.P;
            Numbering = module.Numbering;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            css = module.default;
        }, function (module) {
            AppPinch = module.AppPinch;
        }, function (module) {
            svgPinch = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                type: 'app',
                id: 'app-pinch',
                title: 'Pinch 捏放手势',
                appTitle: 'Pinch 捏放手势',
                appIcon: svgPinch.src,
                author: 'eczn',
                // category: '分类',
                time: new Date('2024-01-01 23:33'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: css } }),
                    React.createElement(WindowApp, { title: "Pinch", icon: svgPinch.src },
                        React.createElement(AppPinch, null)),
                    React.createElement(H1Block, { id: "introduction", title: "\u8BF4\u660E" },
                        React.createElement(P, null, "\u6211\u8FD9\u4E2A\u5B9E\u73B0\u903C\u8FD1 iOS \u76F8\u518C\u7684\u90A3\u79CD\u6781\u81F4\u7F29\u653E\u4F53\u9A8C\uFF0C\u652F\u6301\u53CC\u6307\u7F29\u653E\uFF0C\u800C\u4E14\u53CC\u6307\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u62AC\u8D77\u4E00\u6839\u624B\u6307\u7136\u540E\u518D\u653E\u4E0A\u53BB\uFF0C\u600E\u4E48\u641E\u90FD\u4E0D\u4F1A\u6302\u7684\u90A3\u79CD"),
                        React.createElement(P, null, "\u5177\u4F53\u5B9E\u73B0\u6253\u5F00 devtools \u770B\u5427\uFF0C\u4E3B\u8981\u6B65\u9AA4\u662F\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u591A\u89E6\u70B9\u7BA1\u7406, \u6838\u5FC3\u662F `e.changedTouches` \u548C `e.touches` \u4EE5\u53CA `Touch.identifier`"),
                            React.createElement(P, null, "\u624B\u52BF\u72B6\u6001\u7684\u5411\u91CF\u5316"),
                            React.createElement(P, null, "\u5728\u79FB\u52A8\u7AEF touch \u4E8B\u4EF6\u7EC4\u7684\u57FA\u7840\u4E0A\u517C\u5BB9\u652F\u6301 pc \u7684\u9F20\u6807\u548C\u6EDA\u8F6E"),
                            React.createElement(P, null, "\u5C06\u5411\u91CF\u5316\u7684\u624B\u52BF\u72B6\u6001\u8F6C\u6210\u53D8\u6362\u77E9\u9635\uFF0C\u5E94\u7528\u5230 css matrix \u4E0A"),
                            React.createElement(P, null, "\u5C06\u7528\u6237\u9009\u62E9\u7684\u672C\u5730\u56FE\u7247\u8BFB\u53D6\u6210 blob url \u5E76\u7528 backage-image \u663E\u793A\u5B83"))));
            });

        })
    };
}));
