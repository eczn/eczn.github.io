System.register(['react', 'rally/@@', './demo-book.svg.js'], (function (exports) {
    'use strict';
    var React, P, ImgDynamic, H1Block, WindowAppIframe, Link, metaBeauty, svgDemoBook;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            ImgDynamic = module.ImgDynamic;
            H1Block = module.H1Block;
            WindowAppIframe = module.WindowAppIframe;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            svgDemoBook = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'old-demos',
                type: 'app',
                appTitle: '早期 DEMO 集',
                appIcon: svgDemoBook.src,
                title: '早期 DEMO 集',
                author: 'eczn',
                // category: '分类',
                time: new Date('2024-03-16 18:50'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null,
                            "\u6700\u8FD1\u4ECE\u8001\u786C\u76D8\u91CC\u641C\u51FA\u4E86\u4E4B\u524D\u8001\u7535\u8111\u7528\u4E86\u5F88\u591A\u5E74\u7684 www \u76EE\u5F55, \u5FC3\u8840\u6765\u6F6E\u6574\u7406\u4E86\u4E00\u4E0B\u91CC\u9762\u7684 demo \u4EE3\u7801, \u6536\u5F55\u5728\u8FD9\u91CC, \u65F6\u95F4\u96C6\u4E2D\u5728\u5927\u5B66\u9ED1\u5386\u53F2\u671F\u95F4\u3002",
                            React.createElement("s", null, "\u6211\u662F\u50BB\u903C")),
                        React.createElement(ImgDynamic, { file: svgDemoBook })),
                    React.createElement(H1Block, { id: "2016/04/14", title: "2016/04/14 randstr" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/randstr/index.html", height: "37rem" }),
                        React.createElement(P, null, "16 \u5E74\u5F53\u65F6\u521A\u521A\u63A5\u89E6\u524D\u7AEF\uFF0C\u8FD9\u53EF\u80FD\u662F\u6211\u5199\u7684\u524D 500 \u884C js, \u5F97\u76CA\u4E8E C \u7684\u57FA\u7840\u597D\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u5F53\u65F6\u5F88\u5FEB\u5C31\u5199\u5B8C\u4E86\uFF0C\u76F8\u6BD4\u5199 C \u7684\u90A3\u5957 stdout, \u8FD9\u91CC\u7684 UI \u6548\u679C\u8BA9\u6211\u6709\u5DE8\u5927\u6210\u5C31\u611F\uFF0C\u540E\u9762\u5C31\u5165\u5751\u4E86\u3002")),
                    React.createElement(H1Block, { id: "2016/05/11", title: "2016/05/11 BPlayer" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/BPlayer/index.html", height: "27rem" }),
                        React.createElement(P, null, "\u524D\u7AEF\u4ED4\u4E00\u5B9A\u4F1A\u5199\u7684\u64AD\u653E\u5668\u7CFB\u5217\uFF0C\u8FD9\u662F\u7B2C\u4E00\u7248, \u652F\u6301\u6EDA\u8F6E\u8C03\u6574\u97F3\u91CF\u3001\u9009\u62E9\u672C\u5730\u97F3\u9891\u3001\u97F3\u9891\u52A8\u753B")),
                    React.createElement(H1Block, { id: "2016/07/18", title: "2016/07/18 jPlayer" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/jPlayer/index.html", height: "20rem" }),
                        React.createElement(P, null, "\u524D\u7AEF\u4ED4\u4E00\u5B9A\u4F1A\u5199\u7684\u64AD\u653E\u5668\u7CFB\u5217\uFF0C\u8FD9\u662F\u5176\u4E2D\u4E00\u7248, \u6211\u540E\u7EED\u5370\u8C61\u91CC\u8FD8\u505A\u4E86\u597D\u51E0\u4E2A\u7248\u672C, \u8FD9\u4E2A\u7248\u672C\u662F\u5229\u7528\u300C\u9891\u57DF\u300D\u4FE1\u606F\u7ED8\u5236\u7684\uFF0C\u58F0\u97F3\u8D8A\u5927\u5708\u8D8A\u5927\uFF0C\u7ED3\u679C\u4EE5 canvas \u5448\u73B0")),
                    React.createElement(H1Block, { id: "2016/08/20", title: "2016/08/20 newTab" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/newTab/index.html", height: "40rem" }),
                        React.createElement(P, null, "\u5B9A\u5236\u5316\u6807\u7B7E\u9875\u7CFB\u5217, \u4F30\u6478\u7740\u662F\u5B66\u4E86 `:hover` \u914D\u5408 `transition` \u7684\u6548\u679C")),
                    React.createElement(H1Block, { id: "2016/09/17", title: "2016/09/17 vPlayer" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/vPlayer/index.html", height: "20rem" }),
                        React.createElement(P, null, "\u524D\u7AEF\u4ED4\u4E00\u5B9A\u4F1A\u5199\u7684\u64AD\u653E\u5668\u7CFB\u5217\uFF0C\u8FD9\u662F\u5176\u4E2D\u4E00\u7248, \u6211\u540E\u7EED\u5370\u8C61\u91CC\u8FD8\u505A\u4E86\u597D\u51E0\u4E2A\u7248\u672C, \u8FD9\u4E2A\u7248\u672C\u662F\u5229\u7528\u300C\u65F6\u57DF\u300D\u4FE1\u606F\u7ED8\u5236\u7684\uFF0C\u62FF\u5230\u65F6\u57DF\u4FE1\u606F\u753B\u5728 canvas \u4E0A\u5B9E\u73B0\u6548\u679C"),
                        React.createElement(P, null, "\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u8FD9\u4E2A demo \u662F\u7528 vue1.x \u5B9E\u73B0\u7684 \uFF08\u6CA1\u9519\u5C3D\u7BA1\u6211\u603B\u662F\u55B7 vue, \u5B9E\u9645\u6211\u662F vue1.x \u5C31\u5728\u7528\u7684\u8001\u73A9\u5BB6\u4E86\uFF09")),
                    React.createElement(H1Block, { id: "2016/11/28", title: "2016/11/28 vally-old" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/vally-old/index.html", height: "30rem" }),
                        React.createElement(P, null, "\u524D\u7AEF\u4ED4\u4E00\u5B9A\u4F1A\u5199\u7684\u535A\u5BA2\u7CFB\u5217\uFF0C\u8FD9\u4E2A Vally \u5C31\u662F\u76EE\u524D\u672C\u7AD9\u7528\u7684 Vally, \u4E0D\u8FC7\u7248\u672C\u5F88\u8001, \u5F53\u65F6\u8FD8\u662F\u8BF7\u6C42\u672C\u5730\u6570\u636E\u5E93\u7684\u670D\u52A1\uFF0C\u4E0D\u662F\u73B0\u5728\u7684\u9759\u6001\u535A\u5BA2\u67B6\u6784"),
                        React.createElement(P, null, "\u9ED1\u5386\u53F2: \u8FD9\u662F php \u5199\u7684\u540E\u7AEF\uFF0C\u524D\u7AEF\u662F vue zepto.js ajax \u53D1\u8BF7\u6C42\u53D6\u6570\u636E, \u63A5\u53E3\u6211 mock \u4E86\u5927\u90E8\u5206\uFF0C\u7B97\u662F\u80FD\u7528\u7528, admin \u5BC6\u7801\u968F\u4FBF\u8F93\u5373\u53EF\u8FDB\u5165, \u53E6\u5916\u4E0D\u8981\u5410\u69FD\u6211\u7528 1 \u5F53\u6210 success \u7684\u72B6\u6001\u7801\uFF0C\u5F53\u65F6\u5E74\u8F7B\u8FD8\u4E0D\u77E5\u9053\u4E1A\u754C\u7528\u7684\u662F 0 \u3002\u3002\u3002\u5E94\u8BE5\u662F\u60F3\u7740 1 \u662F true, 0 \u662F false \u89C9\u5F97 true \u8BF4\u660E\u6B63\u5E38\u5C31\u7528\u4E86 1")),
                    React.createElement(H1Block, { id: "2017/02/09", title: "2017/02/09 TrafLights" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/TrafLights/index.html", height: "41rem" }),
                        React.createElement(P, null, "\u5F53\u65F6\u5728\u4E0A\u5B66\u4E60\u6570\u7535\u8FD8\u662F\u7F16\u8BD1\u539F\u7406\u91CC\u7684\u6709\u9650\u72B6\u6001\u673A\u7406\u8BBA\uFF0C\u5C31\u53BB\u627E\u4E86\u4E0B js \u5B9E\u73B0\u6765\u73A9\u4E00\u4E0B"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://github.com/jakesgordon/javascript-state-machine" }, "Github - Javascript State Machine"))),
                    React.createElement(H1Block, { id: "2017/04/01", title: "2017/04/01 inline-block \u4E4B\u95F4\u7684\u7A7A\u767D\u95EE\u9898" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/3px/index.html", height: "28rem" }),
                        React.createElement(P, null, "\u5F53\u65F6\u8FD8\u60F3\u4E86\u4E00\u4E0B\u539F\u56E0\uFF0C\u56E0\u4E3A\u4F7F\u7528 font-size:0 \u5C31\u6709\u6548\uFF0C\u56E0\u6B64\u5F80\u5B57\u7B26\u76F8\u5173\u7684\u95EE\u9898\u53BB\u60F3\uFF0C\u60F3\u8D77\u6765 DOM \u91CC\u9762\u6709 `#text` \u7684\u5B58\u5728\uFF0C\u56E0\u6B64\u770B\u4E86\u4E0B container \u7684 `childNodes` \u5C5E\u6027\uFF0C\u679C\u7136\u91CC\u9762\u5305\u542B\u4E86 `\\t` `\\n` `\\32` \u8FD9\u4E9B\u5B57\u7B26\u6E32\u67D3\u51FA\u6765\u7684 `#text`, \u6700\u7EC8\u6548\u679C\u5C31\u662F inline-block \u4E4B\u95F4\u6709\u7A7A\u767D\u3002"),
                        React.createElement(P, null, "\u5728 2024 \u5E74\uFF0C\u8FD9\u7C7B\u95EE\u9898\u8FD8\u662F\u6CA1\u6709\u5B8C\u7F8E\u65B9\u5F0F\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u518D\u7528\u8001\u4E00\u5957\u76D2\u6A21\u578B\u5E03\u5C40\u4E86\uFF0C\u62E5\u62B1 flex \u8FD9\u7C7B CSS3 \u63A8\u8350\u7684\u65B0\u5E03\u5C40\u65B9\u5F0F\u3002")),
                    React.createElement(H1Block, { id: "2017/03/27", title: "2017/03/27 CSS Learn" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/css-learn/index.html", height: "40rem" }),
                        React.createElement(P, null, "\u8BB0\u5F97\u662F\u5728 NW \u5DE5\u4F5C\u5BA4\u6076\u8865 css \u5404\u4E2A\u5C5E\u6027\u4EE5\u53CA\u52A8\u753B\u76F8\u5173\u7684\u5B9E\u73B0")),
                    React.createElement(H1Block, { id: "2017/05/07", title: "2017/05/07 myResume" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/myResume/index.html", height: "30rem" }),
                        React.createElement(P, null, "\u5F00\u59CB\u627E\u5B9E\u4E60 ... ")),
                    React.createElement(H1Block, { id: "2017/07/29", title: "2017/07/29 iOS Switch Button" },
                        React.createElement(WindowAppIframe, { src: "/kurorekishi/demos/ios-btns/index.html", height: "30rem" }),
                        React.createElement(P, null, "\u5F88\u7ECF\u5178 \u300C\u524D\u7AEF\u4ED4\u7684\u7EC4\u4EF6\u5E93\u300D")),
                    React.createElement(H1Block, { id: "next", title: "\u540E\u9762\u5462\uFF1F" },
                        React.createElement(P, null, "\u9664\u4E86\u4E0A\u8FF0\u4E4B\u5916\u8FD8\u6709\u4E9B\u522B\u7684\uFF0C\u4E0D\u8FC7\u5404\u65B9\u9762\u6CA1\u4E0A\u9762\u51E0\u4E2A\u597D\uFF0C\u4E0A\u9762\u51E0\u4E2A\u5927\u6982\u8FD8\u6709\u70B9\u5370\u8C61\uFF0C\u5176\u4ED6\u5199\u7684\u57FA\u672C\u5C31\u6CA1\u5370\u8C61\u4E86")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
