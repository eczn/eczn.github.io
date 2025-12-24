System.register(['react', 'rally/@@', './ipod6g.png.js', './file-clickwheel-p1p2.svg.js', './file-clickwheel-over-360.svg.js', './file-clickwheel-circle.svg.js', './clickwheel-demo.js', './clickwheel.css.js'], (function (exports) {
    'use strict';
    var React, ImgDynamic, P, H1Block, Code, Col, metaBeauty, fileIPod6G, fileClickWheelP2P2, fileClickWheelOver360, fileClickWheelCircle, ClickWheelDemo, cssClickWheel;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            ImgDynamic = module.ImgDynamic;
            P = module.P;
            H1Block = module.H1Block;
            Code = module.Code;
            Col = module.Col;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            fileIPod6G = module.default;
        }, function (module) {
            fileClickWheelP2P2 = module.default;
        }, function (module) {
            fileClickWheelOver360 = module.default;
        }, function (module) {
            fileClickWheelCircle = module.default;
        }, function (module) {
            ClickWheelDemo = module.ClickWheelDemo;
        }, function (module) {
            cssClickWheel = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'ipod-spin-gesture',
                title: 'iPod 转盘手势',
                author: 'eczn',
                // category: '分类',
                time: new Date('2023-11-20 01:20'),
            }));
            async function initialProps(context) {
                return {
                    codePolarPoint: await context.readText('./polar-point.ts'),
                    codeGetEventPoint: await context.readText('./get-event-point.ts'),
                    codeClickWHeelState: await context.readText('./clickwheel-state.tsx'),
                    codeRenderClickWheelState: await context.readText('./render-clickwheel-state.tsx'),
                    codeUseClickWheel: await context.readText('./use-clickwheel.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: cssClickWheel } }),
                    React.createElement(React.Fragment, null,
                        React.createElement(ImgDynamic, { width: "28%", file: fileIPod6G, style: {
                                float: 'left', marginRight: '1.5em', marginBottom: '1em'
                            } }),
                        React.createElement(P, { sinking: true },
                            "iPod \u6700\u4F1F\u5927\u7684\u8BBE\u8BA1\u5373\u662F\u5B83\u63D0\u4F9B\u7684 ClickWheel \u8F6C\u76D8\u4EA4\u4E92\uFF0C\u5B83\u662F iPod \u7684\u6838\u5FC3\u7ADE\u4E89\u529B\u3002",
                            React.createElement("br", null),
                            "\u5728\u8FD1\u5E74\u667A\u80FD\u624B\u673A\u6D41\u884C\u540E, iPod \u5C31\u9010\u6E10\u6DE1\u51FA\u5927\u4F17\u4E86, \u4F46\u662F\u5B83\u6240\u4EE3\u8868\u7684\u4EA7\u54C1\u7CBE\u795E / \u4F53\u9A8C\u8BA9\u6211\u7740\u8FF7\uFF0C\u56E0\u6B64\u6211\u51B3\u5B9A\u5728\u5C4F\u5E55\u4E0A\u4E5F\u5B9E\u73B0\u4E00\u4E2A ClickWheel \u4EA4\u4E92\u624B\u52BF\u3002")),
                    React.createElement(H1Block, { id: "polar-coordinate-system", title: "\u6781\u5750\u6807\u7CFB" },
                        React.createElement(P, null, "\u5F88\u663E\u7136\uFF0C\u5C4F\u5E55\u4E0A\u7684\u9F20\u6807/\u624B\u6307\u64CD\u4F5C\u662F ClickWheel \u7684\u8D85\u96C6, \u4E5F\u5C31\u662F\u8BF4 touch \u548C mouse \u4E8B\u4EF6\u7EC4\u5B8C\u5168\u80FD\u6A21\u62DF\u51FA\u8F6C\u76D8\u624B\u52BF\uFF0C\u4E3A\u4E86\u540E\u7EED\u65B9\u4FBF\u5904\u7406\uFF0C\u9996\u5148\u6211\u4EEC\u9700\u8981\u62B9\u5E73\u4E24\u4E2A\u4E8B\u4EF6\u7EC4\u7684\u5DEE\u5F02 \u2014\u2014 \u9700\u8981\u6570\u62B9\u5E73 `MouseEvent` \u548C `TouchEvent` \u7684\u5DEE\u5F02\u5E76\u4ECE\u4E2D\u53D6\u51FA\u70B9\u51FB\u7684\u4F4D\u7F6E\u5750\u6807\uFF1A"),
                        React.createElement(Code, { lang: "ts", source: props.codeGetEventPoint }),
                        React.createElement(P, null, "\u8003\u8651\u5230\u8F6C\u76D8\u624B\u52BF\u6838\u5FC3\u53C2\u6570\u662F `\u8F6C\u52A8\u89D2\u5EA6`, \u6B64\u6982\u5FF5\u5728\u4E8C\u7EF4\u5750\u6807\u7CFB\u4E2D\u4E0D\u80FD\u76F4\u63A5\u63CF\u8FF0, \u9700\u8981\u53D6\u51FA x y \u8FDB\u884C\u8BA1\u7B97\u5F97\u5230\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u7684\u7B80\u6D01\u548C\u5916\u90E8\u4F7F\u7528\u65B9\u4FBF\uFF0C\u6700\u597D\u4F7F\u7528 `\u6781\u5750\u6807\u7CFB` \u6765\u5B9E\u73B0\u548C\u6784\u9020 ClickWheel \u624B\u52BF\u3002"),
                        React.createElement(P, null, "\u6781\u5750\u6807\u7CFB\u5982\u4E0B\u5DE6\u56FE\u6240\u793A, \u4ECE P1 \u8F6C\u52A8\u5230 P2, \u5982\u4E0B\u5DE6\u56FE\u6240\u793A\uFF0C\u5176\u4E2D `(\u2220A, r1)` \u4EE3\u8868 P1 \u70B9\u76F8\u5BF9\u4E8E\u5706\u5FC3 x \u8F74\u7684\u89D2\u5EA6, r1 \u4EE3\u8868\u79BB\u5706\u5FC3\u7684\u8DDD\u79BB\u3002"),
                        React.createElement(Col, { units: [1, 1] },
                            React.createElement(ImgDynamic, { file: fileClickWheelP2P2 }),
                            React.createElement(ImgDynamic, { file: fileClickWheelOver360 })),
                        React.createElement(P, null, "\u4E0A\u53F3\u56FE\u4E5F\u8868\u660E\u4E86\uFF0C\u7531\u4E8E\u5706\u7684\u5468\u671F\u6027\u8D28\uFF0C\u4ECE P1 \u5230 P2 \u53EF\u4EE5\u6709\u65E0\u6570\u79CD\u65B9\u5F0F\uFF0C\u6BD4\u5982\u8F6C\u4E09\u5708\u540E\u518D\u8F6C\u4E00\u4E2A\u9510\u89D2\u8FD9\u6837\uFF0C\u6216\u8005\u9006\u65F6\u9488\u8F6C\u4E00\u4E2A\u949D\u89D2\uFF0C\u8FD9\u6837\u7684\u5468\u671F\u6027\u8D28\u8FD8\u4F1A\u5BFC\u81F4\u53CD\u4E09\u89D2\u51FD\u6570\u6C42\u4E0D\u51FA\u5927\u4E8E 180 \u5EA6\u7684\u89D2\uFF0C\u9700\u8981\u624B\u52A8\u53BB\u52A0\u4E00\u4E2A\u534A\u5706"),
                        React.createElement(P, null, "\u4E0B\u56FE\u63CF\u8FF0\u4E86\u4ECE P0 \u8F6C\u5230 P1 \u518D\u5230 P2 \u7684\u8FC7\u7A0B, \u7531\u4E8E\u5468\u671F\u6027\u7684\u539F\u56E0\uFF0C\u7528\u53CD\u4E09\u89D2\u51FD\u6570\u8BA1\u7B97 P2 \u7684\u6781\u5750\u6807\u89D2\u5EA6\u7684\u65F6\u5019 `\u22201+\u22202` \u7684\u8BA1\u7B97\u7ED3\u679C\u8DDF `\u22201` \u4E00\u6837 (\u5176\u5B9E\u7B97\u51FA\u6765\u7684\u7ED3\u679C\u5C31\u662F \u22203)\uFF0C\u56E0\u6B64\u9700\u8981\u5728\u4EE3\u7801\u91CC\u989D\u5916\u5224\u65AD\u5F53 `y<0` \u7684\u65F6\u5019\u8BA1\u7B97 \u22203 \u7684\u8865\u89D2\u3002"),
                        React.createElement(Col, { units: [0.5, 1, 0.5] },
                            React.createElement(P, null),
                            React.createElement(ImgDynamic, { file: fileClickWheelCircle }),
                            React.createElement(P, null)),
                        React.createElement(P, null, "\u4ECE\u4E0A\u9762\u7684\u8BA8\u8BBA\u4E2D\uFF0C\u53EF\u4EE5\u5F97\u5230\u6781\u5750\u6807\u7CFB\u7684\u7C7B\u578B\u5B9A\u4E49 `PolarPoint` \u4EE5\u53CA\u8F6C\u6362\uFF1A"),
                        React.createElement(Code, { lang: "ts", source: props.codePolarPoint })),
                    React.createElement(H1Block, { id: "jotai", title: "\u72B6\u6001\u5B9A\u4E49" },
                        React.createElement(P, null, "\u5148\u8BBE\u8BA1\u7C7B\u578B\uFF0C\u7531\u4E0A\u9762\u7684\u5206\u6790\u51B3\u5B9A\u4F7F\u7528\u6781\u5750\u6807\u7CFB\u6765\u63CF\u8FF0 ClickWheel \u624B\u52BF\uFF0C\u57FA\u4E8E ADT \u7684\u601D\u60F3\u8FDB\u884C\u8BBE\u8BA1\u53EF\u5F97\uFF1A"),
                        React.createElement(Code, { lang: "ts", source: props.codeClickWHeelState }),
                        React.createElement(P, null, "\u4E3A\u4E86\u65B9\u4FBF\u8C03\u8BD5, \u8FD8\u9700\u8981\u6709\u4E00\u4E2A\u6253\u5370 `ClickWheelState` \u7684\u7EC4\u4EF6:"),
                        React.createElement(Code, { lang: "ts", source: props.codeRenderClickWheelState }),
                        React.createElement(P, null, "\u5728\u4E0A\u8FF0 `RenderClickWheelState` \u4E2D, \u5F53\u72B6\u6001\u53D8\u5316, current \u79FB\u52A8\u89D2\u5EA6\u589E\u5927\u540E, \u5BF9\u4E8E\u6E32\u67D3\u4F1A\u987A\u5E8F\u5FAA\u73AF\u9009\u62E9 `DICT` \u4E2D\u7684\u5143\u7D20\u6765\u5C55\u793A")),
                    React.createElement(H1Block, { id: "demo", title: "\u5B8C\u6574\u5B9E\u73B0 & Demo" },
                        React.createElement(P, null,
                            React.createElement(ClickWheelDemo, null)),
                        React.createElement(P, null, "\u5B8C\u6574\u5B9E\u73B0\u5982\u4E0B, \u6CE8\u610F\u5176\u4E2D\u6362\u5708\u7684\u903B\u8F91 (\u4E0D\u8FC7\u6211\u611F\u89C9\u6709\u66F4\u597D\u7684\u529E\u6CD5, \u76EE\u524D\u8FD8\u4E0D\u591F\u7B80\u6D01)"),
                        React.createElement(Code, { lang: "tsx", source: props.codeUseClickWheel })),
                    React.createElement(H1Block, { id: "end", title: "\u7ED3\u5C3E" },
                        React.createElement(P, null, "\u81F3\u6B64\u5B9E\u73B0\u4E86\u4E00\u4E2A\u57FA\u672C\u7684 `ClickWheel` \u8F6C\u76D8\u67B6\u5B50, \u5C31\u5B8C\u6210\u5EA6\u6765\u8BF4\u8FD8\u5DEE\u4E00\u70B9, \u8FD8\u7F3A\u4E00\u4E9B\u80FD\u529B, \u6BD4\u5982\u63D0\u4F9B `onClick`\u3001`\u9632\u8BEF\u89E6` \u7B49\u7B49\uFF0C\u4E0D\u8FC7\u8FD9\u4E9B\u5012\u4E0D\u662F\u6700\u6838\u5FC3\u7684\u5C31\u662F\u4E86\u3002")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
