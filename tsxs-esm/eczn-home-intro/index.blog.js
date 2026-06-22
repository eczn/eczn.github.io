System.register(['react', 'rally/@@', './dongle.png.js'], (function (exports) {
    'use strict';
    var React, P, Numbering, Link, ImgDynamic, H1Block, Code, metaBeauty, imageDynamicBlog;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Numbering = module.Numbering;
            Link = module.Link;
            ImgDynamic = module.ImgDynamic;
            H1Block = module.H1Block;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            imageDynamicBlog = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'eczn-home-intro',
                title: "👏 欢迎来到本站",
                date: new Date('2021-07-22 02:45:00'),
                category: 'system',
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u4F60\u597D\uFF0C\u6211\u662F eczn\uFF0C\u5982\u679C\u60F3\u8054\u7CFB\u6211\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u8054\u7CFB\u5230\u6211"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null,
                                React.createElement(Link, { block: true, href: "https://github.com/eczn" })),
                            React.createElement(P, null, "ZWN6biAjIyBtb2ViYWthLmNvbQ==")),
                        React.createElement(ImgDynamic, { direct: true, file: {
                                src: 'https://moe-counter.glitch.me/get/@1680241635160?theme=gelbooru',
                                size: 0,
                                width: 600,
                                height: 208,
                                aspectRatio: 2.8846153846153846,
                            } })),
                    React.createElement(H1Block, { id: "about", title: "\u5173\u4E8E\u672C\u7AD9" },
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "`\u5C55\u9986`: \u6211\u4F1A\u5C06\u6B63\u5728\u73A9\u7684\u3001\u6709\u610F\u601D\u7684\u4E1C\u897F\u8BB0\u5F55\u4E0B\u6765\uFF0C\u5C24\u5176\u662F\u76EE\u524D\u4E3B\u8981\u505A\u7684\u8BA1\u7B97\u673A/\u6570\u7801\u76F8\u5173\u7684\uFF0C\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u6765\u8BF4\uFF0C\u8FD9\u91CC\u662F\u6211\u5F00\u8BBE\u7684\u6570\u5B57\u5C55\u9986\u3002"),
                            React.createElement(P, null, "`\u5B66\u4E60`: \u7AD9\u4E0A\u5927\u90E8\u5206\u4E1C\u897F\u90FD\u662F\u5B8C\u5168\u4E2A\u4EBA\u624B\u5199\u7684\u3001\u53E6\u5916\u8FD8\u5B9E\u8DF5\u4E86\u5404\u79CD\u4E1A\u754C\u7684\u65B0\u6280\u672F\uFF0C\u6700\u91CD\u8981\u7684\u662F\u5728\u4E92\u8054\u7F51\u65F6\u4EE3\u505A\u4E00\u4E2A\u9A84\u50B2\u7684\u7AD9\u957F\u3002"),
                            React.createElement(P, null, "`\u521B\u4F5C`: 2023 \u5E74\u7684\u67D0\u4E00\u5929, \u7528\u7740 GPT \u7684\u65F6\u5019\u53D1\u89C9\u5230\u5728\u672A\u6765\u4E16\u754C\u4EBA\u6700\u91CD\u8981\u7684\u4E8B\u60C5\u662F\u521B\u9020, \u56E0\u6B64\u6211\u5F00\u59CB\u8FDB\u884C\u6CE8\u610F\u529B\u8BAD\u7EC3"),
                            React.createElement(P, null, "`\u8BA8\u8BBA`: \u63A5\u5165\u4E86 giscus \u8BC4\u8BBA, \u6B22\u8FCE\u8BA8\u8BBA")),
                        React.createElement(P, null, "\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u56DE\u6765\u518D\u770B\u81EA\u5DF1\u67D0\u4E9B\u89C2\u70B9\u4F1A\u53D1\u73B0\u5F88\u53EF\u7B11 \u2014\u2014 \u5982\u679C\u6BCF\u6B21\u80FD\u9119\u89C6\u8FC7\u53BB\u7684\u81EA\u5DF1\uFF0C\u4E5F\u5C31\u7B97\u662F\u6709\u6240\u8FDB\u6B65\u4E86\u3002"),
                        React.createElement(P, null),
                        React.createElement(P, null, "\u53E6\u5916\uFF0C\u7531\u4E8E `\u4F17\u6240\u5468\u77E5\u7684\u539F\u56E0` \u6253\u5F00\u672C\u7AD9\u53EF\u80FD\u4F1A\u76F8\u5F53\u6162\uFF0C\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\u4F60\u61C2\u7684\u3002"),
                        React.createElement(Code, { lang: "ts", source: `
        console.log(\`Hello, World\`);
      ` })),
                    React.createElement(H1Block, { id: "www", title: "\u7AD9\u70B9\u6837\u5F0F" },
                        React.createElement(P, null, "\u672C\u7AD9\u7531 eczn/rally \u5F3A\u529B\u9A71\u52A8\uFF0C\u552F\u4E00\u6307\u5B9A\u5E73\u53F0 Mac \u6216\u5176\u4ED6\u80FD\u5F88\u597D\u7684\u505A\u886C\u7EBF\u5B57\u4F53\u6E32\u67D3\u7684\u5E73\u53F0 (\u4E2D\u6587\u82F1\u6587\u90FD\u8981, \u76EE\u524D\u53EA\u6709 Mac \u505A\u7684\u6700\u597D)"),
                        React.createElement(P, null, "\u672C\u7AD9\u5199\u4F5C\u8DDF\u666E\u901A\u7684 Markdown \u4E0D\u540C, \u5B9E\u73B0\u4E86\u4E00\u79CD\u52A8\u6001\u6267\u884C\u6E32\u67D3\u7684\u673A\u5236, \u5728\u8FD9\u79CD\u673A\u5236\u4E0B, \u6587\u7AE0\u5185\u5BB9\u662F\u53EF\u7F16\u7A0B\u7684, \u901A\u8FC7 React \u8868\u8FBE\u7684, \u8868\u73B0\u529B\u6BD4\u7EAF Markdown \u9AD8\u7684\u591A, \u968F\u624B\u5C31\u80FD\u5728\u6587\u7AE0\u4E2D\u5199 Demo \u8DD1\u60F3\u6CD5\u3002"),
                        React.createElement(P, null, "\u5982\u679C\u4F60\u5BF9 `\u52A8\u6001\u535A\u6587` \u5B58\u6709\u56F0\u60D1, \u770B\u4E86\u8FD9\u56FE\u4F60\u5E94\u8BE5\u5C31 dong le:"),
                        React.createElement(ImgDynamic, { file: imageDynamicBlog })),
                    React.createElement(H1Block, { id: "copyright", title: "\u7248\u6743\u95EE\u9898\u8BF4\u660E" },
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u7F51\u7AD9\u4E0A\u7684\u6709\u4E00\u90E8\u5206\u5A92\u4F53\u8D44\u6E90\u662F\u4ECE\u7F51\u7EDC\u4E0A\u83B7\u53D6\u7684, \u82E5\u6709\u4FB5\u6743\u53EF\u8054\u7CFB\u6211\u5220\u9664"),
                            React.createElement(P, null, "\u7F51\u7AD9\u4E0A\u5185\u5BB9\u9075\u5B88\u521B\u610F 4.0 \u534F\u8BAE, \u53EF\u4EE5\u968F\u4FBF\u8F6C\u8F7D\u4F46\u8BF7\u6CE8\u660E\u51FA\u5904 (\u4E0D\u8FC7\u52A8\u6001\u535A\u6587\u8FD9\u4E2A\u673A\u5236\u4E0B\u7684\u8F6C\u8F7D\u6548\u679C\u8981\u6B8B\u5FF5\u4E86)"))));
            });

        })
    };
}));
