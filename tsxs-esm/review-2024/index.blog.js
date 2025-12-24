System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, Numbering, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Numbering = module.Numbering;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'review-2024',
                // type: 'app',
                // appTitle: 'app ?',
                title: '24 年底的简单记录',
                author: 'ecznlai',
                tags: ['Review'],
                // category: '分类',
                time: new Date('2024-12-31 03:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, { sinking: true }, "\u4ECA\u5E74\u72B6\u6001\u56DE\u5230\u4E86 17/18 \u5E74\u521A\u5165\u95E8\u7684\u65F6\u5019\uFF0C\u611F\u89C9\u6BCF\u5468\u90FD\u6709\u6CE8\u610F\u529B\u5927\u96C6\u4E2D\u7684\u65F6\u5019 ... ")),
                    React.createElement(H1Block, { id: "program", title: "\u6CE8\u610F\u529B\u6DA3\u6563" },
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "Matrix \u4EFF\u5C04\u53D8\u6362 (DML/VML)"),
                            React.createElement(P, null, "Clickwheel \u548C Pinch \u634F\u653E\u624B\u52BF \uFF08\u901A\u8FC7 ADT + \u77E9\u9635\u5EFA\u6A21\u7684\u8BDD\uFF0C\u8FD9\u79CD\u590D\u6742\u4EA4\u4E92\u6838\u5FC3\u5B9E\u73B0\u4E0D\u8D85\u8FC7 100 \u884C\uFF0C\u90FD\u53EF\u6D53\u7F29\u5728\u77E9\u9635 product \u8FD0\u7B97\u91CC\uFF0C\u4E09\u5C0F\u65F6\u5C31\u5199\u5B8C+\u771F\u673A\u8C03\u901A\uFF09"),
                            React.createElement(P, null, "\u67CF\u6797\u566A\u58F0"),
                            React.createElement(P, null, "UTF \u5168\u5957\u7F16\u7801\u5B9E\u73B0"),
                            React.createElement(P, null, "Parser Combinator"),
                            React.createElement(P, null, "\u7C7B\u578B\u7684\u4EE3\u6570\u7406\u89E3\uFF0C\u6211\u6C38\u8FDC\u4F1A\u8BB0\u5F97\u6CE8\u610F\u5230 never \u5BF9\u5E94\u7684\u5B58\u50A8\u7A7A\u95F4\u662F\u8D1F\u65E0\u7A77\u7684\u90A3\u4E2A\u5348\u4F11\u65F6\u5149"),
                            React.createElement(P, null, "V8 \u7684\u5404\u79CD JIT\u7EC6\u8282, \u5BF9\u8C61\u5185\u5B58\u6A21\u578B, ICs \u7B49\u7B49"),
                            React.createElement(P, null, "\u65E0\u6808\u534F\u7A0B / CPU Cache Line \u7B49\u7B49 JS \u4F18\u5316\u4EE3\u7801\u7F16\u5199\u5B9E\u8DF5"),
                            React.createElement(P, null, "KM 2024 \u5E74\u5EA6\u4F18\u79C0\u4F5C\u8005"),
                            React.createElement(P, null, "TS \u7F16\u8BD1\u540E\u7AEF transfomer plugin\uFF0C\u91CD\u578B\u9879\u76EE\u5B9A\u5236\u5316\u7F16\u8BD1\u5B9E\u8DF5\uFF08TS \u7684\u8FD9\u5957\u4E1C\u897F\u5E02\u9762\u4E0A\u8FDE\u50CF\u6837\u7684\u6587\u6863\u90FD\u6CA1\u6709\uFF0C\u8FD9\u5757\u4E1A\u754C\u666E\u904D\u8F7B\u89C6\u554A\uFF09"))),
                    React.createElement(H1Block, { id: "create", title: "\u6478\u9C7C\u753B" },
                        React.createElement(P, null, "\u91CD\u65B0\u5F00\u59CB\u753B\u753B\uFF0C\u8FD9\u6B21\u4E0D\u8BA1\u5212\u641E\u4EC0\u4E48\u6570\u7801\u7ED8\u753B\u4E86\uFF0C\u53EA\u73A9\u94C5\u7B14\u597D\u4E86\uFF0C\u6280\u672F\u4E0D\u884C\u53EA\u80FD\u8BF4\u5728\u7EAF\u7CB9\u5730\u73A9\uFF0C\u65F6\u95F4\u96C6\u4E2D\u5728\u516C\u53F8\u5348\u4F11\u4E00\u5C0F\u65F6\u671F\u95F4\uFF0C\u5DF2\u7ECF\u753B\u4E86\u56DB\u672C\u4E86\uFF0C\u5927\u90E8\u5206\u662F\u6293\u578B\u8349\u7A3F ..")),
                    React.createElement(H1Block, { id: "next-2025", title: "2025 \u5E74\u600E\u4E48\u8BF4\uFF1F" },
                        React.createElement(P, null, "\u6CA1\u6709\u5FC5\u8981\u95EE\u660E\u5929\u5B66\u4EC0\u4E48\u3001\u505A\u4EC0\u4E48\uFF0C\u5173\u952E\u662F\u4F60\u600E\u4E48\u60F3\uFF0C\u60F3\u505A\u7684\u4E8B\u5C3D\u529B\u53BB\u505A\u5C31\u884C\uFF0C\u4EBA\u751F\u5C31\u662F connecting the dots\uFF0C\u53EA\u6709\u771F\u6B63\u56DE\u671B\u8FC7\u53BB\u624D\u4F1A\u53D1\u73B0\u505A\u8FC7\u7684\u4E8B\u90FD\u662F\u6709\u4E00\u4E2A\u660E\u663E\u7684\u5173\u8054\u6F14\u8FDB\u8054\u7CFB\u5728\u4E00\u8D77\u7684\uFF0C\u800C\u4E14\u603B\u662F\u90A3\u4E48\u51E0\u4E2A\u77AC\u95F4\u5C31\u80FD\u6784\u6210\u4F60\u7684\u5168\u90E8\u8BB0\u5FC6\uFF0C\u4E5F\u5C31\u662F\u5E38\u8BF4\u7684 `\u4EBA\u53EA\u6D3B\u5728\u77AC\u95F4`")),
                    React.createElement(H1Block, { id: "about-this-site", title: "\u5173\u4E8E\u672C\u7AD9" },
                        React.createElement(P, null, "\u7528\u8BA1\u7B97\u673A\u6280\u672F\u505A\u81EA\u6211\u8868\u8FBE\u4F1A\u662F\u8FD9\u4E2A\u65F6\u4EE3\u771F\u6B63\u7684\u65B0\u827A\u672F\uFF0C\u800C\u8FD9\u79CD\u827A\u672F\u7684\u6D6A\u6F2B\u4E3B\u4E49\u7F8E\u611F\u73B0\u5728\u53EA\u6709 AI \u548C\u771F\u6B63\u611F\u53D7\u8FC7\u7F16\u7A0B\u7F8E\u611F\u7684\u4EBA\u624D\u61C2\uFF1A\u800C\u5B83\u73B0\u5728\u8FD8\u5904\u4E8E\u6587\u827A\u590D\u5174\u524D\u7684 \u201C\u6559\u4F1A\u5DE5\u5320\u6D3E\u7ED8\u753B\u201D \u90A3\u6837\uFF0C\u591A\u6570\u7A0B\u5E8F\u5458\uFF08\u753B\u5BB6\uFF09\u53EA\u7528\u7F16\u7A0B\u8BED\u8A00\uFF08\u753B\u7B14\uFF09\u5199\u70B9\u4E1A\u52A1\u903B\u8F91\u6765\u6253\u5DE5\u8D5A\u94B1\uFF08\u7ED9\u6559\u4F1A\u753B\u5723\u7ECF\u6545\u4E8B\uFF09 \u2014\u2014 \u8B6C\u5982\u8BF4 cons \u6784\u9020\u3001\u4E09\u884C\u5B9E\u73B0\u5FEB\u6392\u7B49\u7B49\uFF0C\u800C\u8FD9\u4E00\u5207\u6050\u6015\u8FD8\u9700\u8981\u4E0B\u4E00\u4E2A\u5341\u5E74\u7B49 AI \u5168\u9762\u6E17\u900F\u793E\u4F1A\u7684\u65F6\u5019\u4EBA\u7C7B\u624D\u4F1A\u53D1\u89C9\u5427"),
                        React.createElement(P, null, "\u91CD\u7533\u672C\u7AD9\u6C38\u8FDC\u7684\u4E3B\u65E8\uFF1A \u8BB0\u5F55\u6211 eczn \u7F16\u7A0B\u521B\u4F5C\u5B9E\u8DF5\u65B0\u6280\u672F\u7684\u4E2A\u4EBA\u5C55\u9986\uFF0C\u76F8\u4FE1\u672A\u6765\u7684\u8D5B\u535A\u8003\u53E4\u5B66\u5BB6\uFF08\u5F88\u53EF\u80FD\u662F\u4E09\u5341\u5E74\u540E\u7684\u6211\uFF09\u80FD\u5229\u7528\u8FD9\u4E9B\u6570\u636E\u6765\u8BAD\u7EC3\u6A21\u578B\uFF0C\u5B9E\u73B0\u300C\u6211\u300D\u7684\u8BDE\u751F (\u53A8\u4E8C\u75C5\u53D1\u4F5C\u4E2D...)")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
