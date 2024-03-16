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
                id: 'ai-2023',
                title: 'AI 2023',
                author: 'eczn',
                time: new Date('2023-03-14 00:00'),
                isDraft: true,
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "2023 GPT4 \u53D1\u5E03\u540E\u53C8\u662F\u6280\u60CA\u56DB\u5EA7, \u591A\u5C11\u4EBA\u60CA\u547C\uFF1A\u5927\u7684\uFF01\u9A6C\u4E0A\uFF01\u5C31\u8981\uFF01\u6765\u4E86\uFF01"),
                    React.createElement(P, null, "GPT \u4E0D\u7528\u591A\u8BF4\uFF0C\u5927\u5BB6\u6216\u591A\u6216\u5C11\u90FD\u770B\u8FC7\u4E0D\u5C11\u6897\u6216\u8005\u4EB2\u81EA\u4F7F\u7528\u8FC7\u4E86\u3002\u5BA2\u89C2\u6765\u8BF4\uFF0CGPT \u4E0D\u662F\u4EE5\u524D\u90A3\u79CD\u4EBA\u5DE5\u667A\u969C\u4E86\uFF0C\u800C\u8868\u73B0\u51FA\u4E00\u5B9A\u7684 \u201C\u667A\u6167\u201D\uFF0C\u5177\u4F53\u6765\u8BF4\u5B83\u80FD\u4E00\u5B9A\u7A0B\u5EA6\u7406\u89E3\u8BED\u4E49\u5E76\u505A\u51FA\u7B26\u5408\u8BED\u4E49\u7684\u56DE\u7B54\uFF0C\u6BD4\u5982\u505A\u6587\u6BB5\u6982\u62EC\u3001\u98CE\u683C\u6539\u5199\u3001\u4EE3\u7801\u6CE8\u91CA\u7B49\u7B49\uFF0C\u672C\u6B21 GPT \u6700\u8BA9\u4EBA\u60CA\u559C\u7684\u4E00\u70B9\u662F\u5B83\u652F\u6301\u804A\u5929\u4E0A\u4E0B\u6587\uFF0C\u5728\u4EA4\u4E92\u4F53\u9A8C\u4E0A\u8DDF\u4EE5\u524D\u7684 AI \u5B8C\u5168\u4E0D\u540C\u3002"),
                    React.createElement(P, null, "\u4F60\u53EF\u4EE5\u5728\u804A\u5929\u4E0A\u4E0B\u6587\u4E2D\u6307\u51FA\u5E76\u7EA0\u6B63 GPT \u7684\u9519\u8BEF\uFF1B\u4E5F\u53EF\u4EE5\u5C06\u590D\u6742\u95EE\u9898\u62C6\u89E3\u8BA9 GPT \u4E00\u6B65\u6B65\u6C42\u89E3 \u2014\u2014 \u50CF\u4EBA\u4E00\u6837\u5206\u5272\u95EE\u9898\u5E76\u5F97\u5230\u6700\u7EC8\u7B54\u6848\uFF1B\u751A\u81F3\u53EF\u4EE5\u901A\u8FC7\u5DE7\u5999\u7684\u8BBE\u95EE\u9A97\u8FC7 OpenAI \u5BF9 GPT \u8BBE\u7F6E\u7684\u5B89\u5168\u4FDD\u62A4\uFF0C\u8BA9\u5B83\u65E0\u6240\u987E\u8651\u7684\u56DE\u7B54\u63D0\u95EE\u7B49\u7B49"),
                    React.createElement(P, null, "\u4E0E\u6B64\u540C\u65F6\uFF0Cstable diffusion \u4E4B\u7C7B\u7684 AI \u4F5C\u56FE\u5DE5\u5177\u5F00\u59CB\u6D41\u884C"));
            });

        })
    };
}));
