System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'what-is-syuuchuuryoku',
                // type: 'app',
                // appTitle: 'app ?',
                title: '「注意力训练」是?',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-03-10 21:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "\u6570\u5B66\u9898\u91CC\u7ECF\u5E38\u89C1\u5230 \u2014\u2014 \u201C\u6CE8\u610F\u5230 x=1 \u65F6\u5982\u4F55\u5982\u4F55\u201D \u201C\u4E0D\u59A8\u8BBE t = f(x) ...\u201D"),
                    React.createElement(P, null, "\u8FD9\u7C7B\u6CE8\u610F\u529B\u5728 AI \u65F6\u4EE3\u663E\u5F97\u6108\u53D1\u73CD\u8D35\uFF0C\u8FD9\u662F\u4EBA\u5929\u751F\u7684\u9A84\u50B2\uFF0C\u800C\u5728\u8FD9\u6837\u7684\u65F6\u4EE3\u4E0B\u91CD\u7533\u300C\u4F5C\u4E3A\u4EBA\u7684\u9A84\u50B2\u300D\u662F\u6211\u6301\u7EED\u66F4\u65B0\u672C\u7AD9\u7684\u52A8\u529B\uFF0C\u6B64\u5916\u6211\u8FD8\u575A\u4FE1\u8FD9\u6837\u7684\u6CE8\u610F\u529B\u9664\u4E86\u5929\u8D4B\u5916\uFF0C\u540E\u5929\u4E5F\u53EF\u4EE5\u9760\u300C\u6CE8\u610F\u529B\u8BAD\u7EC3\u300D\u6765\u63D0\u9AD8\u7684\uFF0C\u5C31\u50CF\u5199\u4EE3\u7801\u4E00\u6837\uFF0C\u5F00\u59CB\u7684\u65F6\u5019\u90FD\u662F\u83DC\u9E1F\u3002"),
                    React.createElement(P, null, "\u90A3\u4E48\u5728\u524D\u8FF0\u7684\u80CC\u666F\u4E4B\u4E0B\uFF0C\u6211\u63D0\u5230\u7684\u8FD9\u7C7B\u6CE8\u610F\u529B\u8BAD\u7EC3\u5C06\u4EE5\u300C\u535A\u6587\u300D\u7684\u5F62\u5F0F\u5728\u672C\u7AD9\u53D1\u8868\u3002"),
                    React.createElement(P, null, "\u5F53\u7136\u300C\u6CE8\u610F\u529B\u8BAD\u7EC3\u300D\u5728\u7AD9\u70B9\u91CC\u7684\u542B\u4E49\u9664\u4E86\u4E0A\u8FF0\u4E4B\u5916\u8FD8\u6709\u4E9B\u300C\u5A31\u4E50\u5316\u300D\u7684\u610F\u5473\u5728\u91CC\u9762\uFF0C\u603B\u4E4B\u53EF\u4EE5\u5BBD\u6CDB\u7684\u7406\u89E3\u4E3A\u300C\u4E2A\u4EBA\u521B\u4F5C\u8BAD\u7EC3\u300D"));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
