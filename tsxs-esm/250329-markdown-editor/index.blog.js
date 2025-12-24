System.register(['react', 'rally/@@', './markdown-editor.js', './markdown-editor.css.js', './markdown-editor2.js'], (function (exports) {
    'use strict';
    var React, H1Block, P, Numbering, Footnote, Link, metaBeauty, MarkdownEditor, css, SourceMarkdownEditor;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            H1Block = module.H1Block;
            P = module.P;
            Numbering = module.Numbering;
            Footnote = module.Footnote;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            MarkdownEditor = module.MarkdownEditor;
        }, function (module) {
            css = module.default;
        }, function (module) {
            SourceMarkdownEditor = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'markdown-editor',
                // type: 'app',
                // appTitle: 'app ?',
                title: '实现一个 Markdown 编辑器 ?',
                author: 'eczn',
                // category: '分类',
                time: new Date('2025-04-06 16:21'),
                isDraft: true,
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: css } }),
                    React.createElement(MarkdownEditor, null),
                    React.createElement(H1Block, { title: "\u5C1D\u8BD5\u5199\u4E0B" },
                        React.createElement(P, null, "\u957F\u4E45\u4EE5\u6765\u6CA1\u6709\u8BD5\u7740\u53BB\u4ECE\u5934\u5199\u4E00\u4E2A\u5BCC\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u5199\u4E86\u4E00\u4E0B\uFF0C\u628A\u5927\u6982\u6846\u67B6\u52FE\u52D2\u51FA\u6765\u4E86\uFF0C\u6709\u51E0\u4E2A\u5173\u952E\u7EC6\u8282\u9700\u8981\u6CE8\u610F: "),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "contentEditable: \u5404\u4E2A\u6D4F\u89C8\u5668\u7684\u5BF9\u8FD9\u4E2A\u7684\u5B9E\u73B0\u90FD\u6709\u5404\u79CD\u5FAE\u5999\u7684\u4E0D\u540C\uFF0C\u5BFC\u81F4\u5F88\u96BE\u53EA\u7528\u8FD9\u4E2A\u505A\u4E00\u4E2A\u5B8C\u7F8E\u7684\u7F16\u8F91\u5668"),
                            React.createElement(P, null, "\u7F16\u8F91\u5668\u72B6\u6001\u9A71\u52A8: \u7F16\u8F91\u5668\u5185\u90E8\u4E00\u5B9A\u9700\u8981\u6709\u4E00\u4E2A \"\u7EAF js\" \u7684\u5BF9\u6587\u6863\u5185\u5BB9\u7684 json \u63CF\u8FF0\uFF0C\u5229\u7528\u8FD9\u4E2A\u6570\u636E\u80FD\u76F4\u63A5\u751F\u6210 dom \u7ED3\u6784"),
                            React.createElement(P, null, "\u5149\u6807\u9009\u533A\u72B6\u6001\uFF1A\u4E5F\u8981\u6709\u4E00\u4E2A\u7EAF js \u7684\u8868\u793A\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5957\u7528\u6D4F\u89C8\u5668\u7684 selection \u5BF9\u8C61\uFF0C\u9700\u8981\u8F6C\u6362"),
                            React.createElement(P, null,
                                "\u6D41\u5F0F\u6570\u636E: \u6D41\u5F0F\u6570\u636E\u662F\u6700\u7ECF\u5178\u7684\uFF0C\u4EE3\u8868\u4F5C\u662F\u5FAE\u8F6F\u7684 Office \u2014\u2014 \u5C3D\u7BA1\u5176\u53EF\u4EE5\u4FDD\u5B58\u4E3A\u5757\u5F0F\u7684 OOXML",
                                React.createElement(Footnote, { content: React.createElement(Link, { href: "https://en.wikipedia.org/wiki/Office_Open_XML" }) }),
                                " \u7ED3\u6784"),
                            React.createElement(P, null, "\u5757\u5F0F\u6570\u636E: \u4EE3\u8868\u4F5C\u662F notion\uFF0C\u8FD9\u7C7B\u7F16\u8F91\u5668\u7684\u7279\u70B9\u662F \u201C\u6587\u7AE0\u662F\u82E5\u5E72 block \u6784\u6210\u7684\u201D")),
                        React.createElement(P, null, "\u5177\u4F53\u8FD8\u662F\u770B\u6E90\u7801\uFF0C\u4E0D\u591A\u89E3\u91CA\u4E86"),
                        React.createElement(SourceMarkdownEditor, { overflow: "visible" })));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
