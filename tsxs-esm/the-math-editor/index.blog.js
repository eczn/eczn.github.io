System.register(['react', 'rally/@@', './math-edtior.png.js', './umaru-cola.gif.js', './tea.gif.js'], (function (exports) {
    'use strict';
    var React, P, ImgDynamic, Float, metaBeauty, fileMathEditor, fileUMaruCola, fileTea;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            ImgDynamic = module.ImgDynamic;
            Float = module.Float;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            fileMathEditor = module.default;
        }, function (module) {
            fileUMaruCola = module.default;
        }, function (module) {
            fileTea = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'the-math-editor',
                // type: 'app',
                // appTitle: 'app ?',
                title: '公式编辑器 ?',
                author: 'eczn',
                // category: '分类',
                time: new Date('2025-06-29 10:25'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "\u8FC7\u53BB\u7684\u534A\u5E74\u91CC\uFF0C\u4E00\u76F4\u5728\u7ED9 Web \u5F00\u53D1\u5168\u529F\u80FD\u7684\u516C\u5F0F\u7F16\u8F91\u5668\uFF0C\u5BF9\u6807 Office Word / \u91D1\u5C71 WPS \u6765\u505A\u7684:"),
                    React.createElement(ImgDynamic, { file: fileMathEditor }),
                    React.createElement(Float, { lr: 'left', width: "20" },
                        React.createElement(ImgDynamic, { file: fileUMaruCola })),
                    React.createElement(React.Fragment, null),
                    React.createElement(P, null, "\u5DF2\u63D0\u6D4B\uFF0C\u9884\u8BA1\u4E0D\u4E45\u540E\u80FD\u4E0A\u7EBF\uFF08\u96F7\u59C6\uFF09"),
                    React.createElement(P, null, "\u5177\u4F53\u5B9E\u73B0\u6781\u5177\u6311\u6218\u3002\u3002 \u5DF2\u7ECF\u82B1\u5149\u4E86\u6211 200% \u7684\u6CE8\u610F\u529B\u4E86\uFF0C\u76EE\u524D\u6301\u7EED\u6CE8\u610F\u529B\u6DA3\u6563\u4E2D\uFF0C\u53EA\u80FD\u8BF4\u6574\u5B8C\u8FD9\u5957\u540E\u771F\u6210\u5B57\u5904\u7406\u9886\u57DF\u4E13\u5BB6\u4E86"),
                    React.createElement(P, null, "\u7531\u4E8E\u662F\u53F8\u5185\u7684\u5546\u4E1A\u9879\u76EE\uFF0C\u5728\u8FD9\u91CC\u4E0D\u80FD\u8C08\u592A\u591A\u5B9E\u73B0\u4E0A\u7684\u7EC6\u8282\uFF0C\u5982\u679C\u4F60\u6070\u597D\u5728\u817E\u8BAF\uFF0C\u4E0D\u59A8\u5173\u6CE8\u6211 KM \u4EE5\u53CA\u5B66\u5802\u91CC\u7684\u5206\u4EAB\u3002"),
                    React.createElement(Float, { lr: 'right', width: "20" },
                        React.createElement(ImgDynamic, { file: fileTea })),
                    React.createElement(P, null, "\u53E6\u5916\u5BA3\u5E03\u4E00\u4E0B\uFF0CEcznScript \u6682\u65F6\u5F03\u5751\u4E86\uFF0C\u8FD1\u671F\u53CA\u672A\u6765\u4E00\u6BB5\u65F6\u95F4\u5E94\u8BE5\u90FD\u6CA1\u6709\u5927\u6BB5\u7A7A\u95F2\u65F6\u95F4\u4E86"),
                    React.createElement(P, null, "\u4E5F\u8BB8\u7B49 tc39 \u7684 fixed-struct \u89C4\u8303\u843D\u5730\u540E\uFF0C\u518D\u6765\u770B\u770B\u8FD9\u5757\u7684\u53EF\u884C\u6027\u3002"));
            });

        })
    };
}));
