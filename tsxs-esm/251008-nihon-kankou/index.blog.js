System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, H2, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            H2 = module.H2;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            // import fileMathEditor from './math-edtior.png';
            const meta = exports('meta', metaBeauty({
                id: '2025-nihon-kankou',
                // type: 'app',
                // appTitle: 'app ?',
                title: '2025 日本之旅',
                author: 'eczn',
                // category: '分类',
                time: new Date('2025-10-12 20:00'),
                isDraft: true,
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u8FD1\u671F\u56FD\u5E86\u957F\u5047\u53BB\u4E86\u8D9F\u65E5\u672C\u81EA\u7531\u884C\uFF0C\u4E24\u4E2A\u5B57\uFF1A\u9707\u64BC")),
                    React.createElement(H1Block, { id: "toukyo", title: "\u6771\u4EAC\u90FD" },
                        React.createElement(P, null, "\u6211\u7684\u9996\u7AD9\u662F\u5728\u4E1C\u4EAC\u6210\u7530\u673A\u573A\uFF0C\u4E58\u5750\u5730\u94C1\u5230\u58A8\u7530\u533A\u592A\u5E73"),
                        React.createElement(H1Block, { id: "akibahara", title: "\u79CB\u8449\u539F" },
                            React.createElement(P, null, "\u6211\u7684\u9996\u7AD9\u662F\u5728\u4E1C\u4EAC\u6210\u7530\u673A\u573A\uFF0C\u4E58\u5750\u5730\u94C1\u5230\u58A8\u7530\u533A\u592A\u5E73")),
                        React.createElement(H1Block, { id: "university-of-tokyo", title: "\u6771\u4EAC\u5927\u5B66" },
                            React.createElement(P, null, "\u6211\u7684\u9996\u7AD9\u662F\u5728\u4E1C\u4EAC\u6210\u7530\u673A\u573A\uFF0C\u4E58\u5750\u5730\u94C1\u5230\u58A8\u7530\u533A\u592A\u5E73")),
                        React.createElement(H1Block, { id: "shibuya-shinsyoku-ginza", title: "\u6E0B\u8C37 / \u65B0\u5BBF / \u9280\u5EA7" },
                            React.createElement(P, null, "\u6211\u7684\u9996\u7AD9\u662F\u5728\u4E1C\u4EAC\u6210\u7530\u673A\u573A\uFF0C\u4E58\u5750\u5730\u94C1\u5230\u58A8\u7530\u533A\u592A\u5E73"))),
                    React.createElement(H1Block, { id: "toukyo", title: "\u6771\u4EAC\u90FD" },
                        React.createElement(H2, null, "\u58A8\u7530\u533A"),
                        React.createElement(P, null, "\u6211\u7684\u9996\u7AD9\u662F\u5728\u4E1C\u4EAC\u6210\u7530\u673A\u573A\uFF0C\u4E58\u5750\u5730\u94C1\u5230\u58A8\u7530\u533A\u592A\u5E73")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
