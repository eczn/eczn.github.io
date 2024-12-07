System.register(['react', 'rally/@@', './canvas1d.js', './perlin1d_v1.js', './hashes.js', './perlin-noise-example.png.js', './white-noise-example.png.js', './perlin-imageLinearInterpolation.svg.js', './perlin-imageLinearInterpolationBlending.svg.js', './perlin-imagePerlinGrid.svg.js', './perlin-imagePerlinRandVecs.svg.js', './perlin-imagePerlin2DRate.svg.js', './perlin-imagePerlinLerp1.svg.js', './desmos-fade.svg.js', './perlin1d_v2.js', './perlin1d_v3.js', './canvas2d.js', './perlin2d_v1.js', './render-map.js'], (function (exports) {
    'use strict';
    var React, P, H1Block, Col, ImgDynamic, Numbering, Code, H2, Formula, Link, metaBeauty, RenderNoiseCanvas1d, perlin1d_v1, rand, imagePerlinNoiseExample, imageWhiteNoiseExample, imageLinearInterpolation, imageLinearInterpolationBlending, imagePerlinGrid, imagePerlinRandVecs, imagePerlin2DRate, imagePerlinLerp1, imageDemosFade, perlin1d_v2, perlin1d_v3, RenderNoiseCanvas2d, perlin2d_v1, RenderMap;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Col = module.Col;
            ImgDynamic = module.ImgDynamic;
            Numbering = module.Numbering;
            Code = module.Code;
            H2 = module.H2;
            Formula = module.Formula;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            RenderNoiseCanvas1d = module.RenderNoiseCanvas1d;
        }, function (module) {
            perlin1d_v1 = module.perlin1d_v1;
        }, function (module) {
            rand = module.rand;
        }, function (module) {
            imagePerlinNoiseExample = module.default;
        }, function (module) {
            imageWhiteNoiseExample = module.default;
        }, function (module) {
            imageLinearInterpolation = module.default;
        }, function (module) {
            imageLinearInterpolationBlending = module.default;
        }, function (module) {
            imagePerlinGrid = module.default;
        }, function (module) {
            imagePerlinRandVecs = module.default;
        }, function (module) {
            imagePerlin2DRate = module.default;
        }, function (module) {
            imagePerlinLerp1 = module.default;
        }, function (module) {
            imageDemosFade = module.default;
        }, function (module) {
            perlin1d_v2 = module.perlin1d_v2;
        }, function (module) {
            perlin1d_v3 = module.perlin1d_v3;
        }, function (module) {
            RenderNoiseCanvas2d = module.RenderNoiseCanvas2d;
        }, function (module) {
            perlin2d_v1 = module.perlin2d_v1;
        }, function (module) {
            RenderMap = module.RenderMap;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'perlin-noise',
                title: '柏林噪声的原理和实现',
                author: 'eczn',
                // category: '分类',
                // isDraft: true,
                // time: new Date('2023-12-10 17:03'),
                time: new Date('2024-12-02 12:03'),
            }));
            async function initialProps(context) {
                return {
                    codeHashes: await context.readText('./hashes.tsx'),
                    codePerlin1d_v1: await context.readText('./perlin1d_v1.tsx'),
                    codePerlin1d_v2: await context.readText('./perlin1d_v2.tsx'),
                    codeHashesVec: await context.readText('./hashes-vec.tsx'),
                    codeLerp: await context.readText('./lerp.tsx'),
                    codeVecDot: await context.readText('./vec-dot.tsx'),
                    codePerlin2d_v1: await context.readText('./perlin2d_v1.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u8FD9\u662F\u4E00\u7BC7\u53BB\u5E74 12 \u6708\u5199\u5B8C\u7684\u6587\u7AE0\uFF0C\u4E0D\u8FC7\u4E00\u76F4\u611F\u89C9\u5BF9\u4E8C\u7EF4\u63A8\u5E7F\u91CC\u7684\u68AF\u5EA6\u7684\u6570\u5B66\u7406\u89E3\u4E0D\u591F\u900F\u5F7B\u5C31\u5FD8\u53D1\u4E86\uFF0C\u8FD9\u4E24\u5929\u60F3\u67E5\u70B9\u8D44\u6599\u53C8\u627E\u5230\u4E86\u8FD9\u7BC7\u53D1\u73B0\u8FD8\u6CA1\u53D1 ... \u7B97\u4E86\u8FD8\u662F\u5148\u53D1\u5427")),
                    React.createElement(H1Block, { id: "map-demo", title: "\u5730\u56FE\u751F\u6210\u5668 demo" },
                        React.createElement(P, null, "\u5199\u8FD9\u7BC7\u7684\u539F\u56E0\u662F\u6709\u770B\u4E00\u4E9B\u5730\u56FE\u751F\u6210\u7B97\u6CD5\uFF0C\u91CC\u9762\u662F\u5229\u7528\u67CF\u6797\u566A\u58F0\u6765\u5B9E\u73B0\u7684\uFF0C\u6BD4\u5982\u5C06\u5176\u8F93\u51FA\u770B\u6210\u662F\u6D77\u62D4\uFF0C\u7136\u540E\u5C06\u4E0D\u540C\u6D77\u62D4\u5212\u5206\u4E3A\u4E0D\u540C\u5730\u5F62\uFF0C\u636E\u6B64\u53EF\u4EE5\u753B\u51FA\u4E0B\u9762\u7684\u5730\u56FE: "),
                        React.createElement(RenderMap, { widthEm: 40, heightEm: 30 })),
                    React.createElement(H1Block, { id: "problem-of-white-noise", title: "\u767D\u566A\u58F0\u7684\u95EE\u9898" },
                        React.createElement(P, null, "\u4E0B\u9762\u5DE6\u56FE\u662F\u4E00\u5F20\u5178\u578B\u7684\u767D\u566A\u58F0\u6E32\u67D3\u6548\u679C\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u76F8\u5F53\u79BB\u6563\uFF0C\u6CA1\u6709\u4E00\u70B9\u89C4\u5F8B"),
                        React.createElement(Col, { units: [1, 0.1, 1], style: { textAlign: 'center' } },
                            React.createElement(ImgDynamic, { style: { margin: '0 auto' }, file: imageWhiteNoiseExample }),
                            React.createElement(React.Fragment, null),
                            React.createElement(ImgDynamic, { style: { margin: '0 auto' }, file: imagePerlinNoiseExample })),
                        React.createElement(P, null, "\u4F46\u662F\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u6709\u65F6\u9700\u8981\u6709\u4E00\u5B9A\u89C4\u5F8B\u7684\u968F\u673A\u566A\u58F0\uFF0C\u5982 Minecraft \u7684\u5730\u56FE\u751F\u6210\uFF0C\u8FD9\u7C7B\u573A\u666F\u5C31\u4E0D\u80FD\u4F7F\u7528\u767D\u566A\u58F0\u4E86\uFF0C\u9700\u8981\u5355\u72EC\u4E00\u79CD\u66F4\u5E73\u6ED1\u7684\u566A\u58F0\u4E86\uFF0C\u4E00\u822C\u6765\u8BF4\u884C\u4E1A\u5185\u901A\u5E38\u4F7F\u7528\u67CF\u6797\u566A\u58F0\u6765\u5B9E\u73B0\u8FD9\u79CD\u5E26\u6709\u4E00\u5B9A\u5E73\u6ED1\u89C4\u5F8B\u7684\u566A\u58F0\u6765\u751F\u6210\u5730\u5F62\uFF0C\u4E0A\u9762\u53F3\u56FE\u5C31\u662F\u67CF\u6797\u566A\u58F0\u7B97\u6CD5\u751F\u6210\u7684\u6548\u679C\u56FE\uFF0C\u53EF\u4EE5\u611F\u53D7\u4E0B\u8DDF\u767D\u566A\u58F0\u7684\u4E0D\u540C\u3002")),
                    React.createElement(H1Block, { id: "priciple-of-perlin-noise", title: "\u67CF\u6797\u566A\u58F0\u7684\u539F\u7406" },
                        React.createElement(P, null, "`\u67CF\u6797\u566A\u58F0 (Perlin Noise)` \u662F\u7531 `\u80AF\u00B7\u67CF\u6797 (Ken Perlin)` \u53D1\u660E\u7684\u81EA\u7136\u566A\u58F0\u751F\u6210\u7B97\u6CD5\uFF0C\u7B97\u6CD5\u7684\u540D\u5B57\u4E5F\u662F\u4F5C\u8005\u81EA\u5DF1\u7684\u540D\u5B57\uFF0C\u8FD9\u4E2A\u7B97\u6CD5\u5F88\u6709\u610F\u601D\uFF0C\u6B64\u5904\u4EE5 x \u8F74\u4E0A\u7684\u70B9\u4F5C\u4E3A\u53C2\u6570\u8BA1\u7B97\u51FA\u4E00\u7EF4\u67CF\u6797\u566A\u58F0\u4F5C\u4E3A y \u8F74\u7ED8\u5236\u4E00\u4E2A\u4E8C\u7EF4\u5750\u6807\u7CFB\u6765\u4ECB\u7ECD\u67CF\u6797\u566A\u58F0\u7684\u539F\u7406\uFF0C\u5177\u4F53\u5373\u4E0B\u56FE\u6240\u793A\u8FD9\u822C\uFF0C\u5176\u4E2D\u7684 P0\u3001P\u3001P1 \u4E09\u4E2A\u70B9\u7684\u67CF\u6797\u566A\u58F0\u5206\u522B\u662F r0\u3001N\u3001r1\uFF1A"),
                        React.createElement(ImgDynamic, { file: imageLinearInterpolation }),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "P \u5411\u4E0B\u53D6\u6574\u5F97\u5230 P0\u3001\u5411\u4E0A\u53D6\u6574\u5F97\u5230 P1\u3002P0 \u5230 P1\u7684\u8DDD\u79BB\u4E3A `\u5355\u4F4D\u8DDD\u79BB`, \u901A\u5E38\u53D6 1"),
                            React.createElement(P, null, "\u7136\u540E\u5C06 P0 \u548C P1 \u5206\u522B\u5F53\u4F5C\u79CD\u5B50\u53BB\u751F\u6210\u4E24\u4E2A\u4F2A\u968F\u673A\u6570, \u5C06\u8FD9\u4E24\u4E2A\u4F2A\u968F\u673A\u6570\u8BB0\u4E3A `r0` \u548C `r1`"),
                            React.createElement(P, null, "\u968F\u7740 P \u70B9\u79FB\u52A8\u5230 P1 \u70B9\uFF0C\u5BF9\u5E94\u7684 N \u5373\u5176\u67CF\u6797\u566A\u58F0\u4F1A\u5747\u5300\u4ECE r0 \u8FC7\u6E21\u5230 r1"),
                            React.createElement(P, null, "\u6839\u636E\u4E0A\u4E00\u6B65\u7684\u8BF4\u660E, N \u7684\u4F4D\u7F6E\u53EF\u4EE5\u8FD9\u6837\u6C42\u5F97\uFF1AP \u70B9\u5728 `\u7EBF\u6BB5 P0P1` \u4E0A\u7684\u4F4D\u7F6E\u767E\u5206\u6BD4\u662F 40%, \u4ECE r0 \u5230 r1 \u4E4B\u95F4\u5212\u4E00\u6761\u7EBF\u6BB5\uFF0C\u5728\u5176 40% \u7684\u4F4D\u7F6E\u5C31\u662F P \u70B9\u5BF9\u5E94\u7684\u67CF\u6797\u566A\u58F0\u4E86\uFF0C\u8FD9\u4E2A\u503C\u4E3A `r0 + 40% * (r1 - r0)`, \u8FD9\u79CD\u5904\u7406\u65B9\u5F0F\u79F0\u4E3A\u7EBF\u6027\u63D2\u503C")),
                        React.createElement(P, null, "\u5173\u4E8E\u4E0A\u9762\u63D0\u5230\u7684\u4F2A\u968F\u673A\uFF0C\u67CF\u6797\u5B83\u4F7F\u7528\u4E86\u4E00\u4E2A\u54C8\u5E0C\u6570\u7EC4\u6765\u5B9E\u73B0\u7684\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: props.codeHashes }),
                        React.createElement(P, null, "\u603B\u7ED3\u4E00\u4E0B\u524D\u9762\u7684\u7ED3\u8BBA\uFF1A\u9996\u5148\u53D6\u6574\u5F97\u5230\u4E24\u4E2A\u70B9\u5E76\u6C42\u51FA\u4E24\u4E2A\u968F\u673A\u6570\uFF0C\u6700\u540E\u6839\u636E P \u7684\u76F8\u5BF9\u4F4D\u7F6E\u5BF9\u968F\u673A\u6570\u505A\u7EBF\u6027\u63D2\u503C\u5C31\u5F97\u5230\u67CF\u6797\u566A\u58F0\u4E86\uFF0C\u4E0B\u9762\u5B9E\u73B0\u4E86\u4E00\u7EF4\u67CF\u6797\u566A\u58F0\u7B2C\u4E00\u7248 `perlin1d_v1`"),
                        React.createElement(Code, { lang: "tsx", source: props.codePerlin1d_v1 }),
                        React.createElement(P, null, "\u6CE8\u610F, perlin1d_v1(x: number) \u4E2D x \u4E00\u5B9A\u662F\u8981\u4E00\u4E2A\u8FDE\u7EED\u7684\u5B9E\u6570\u7B97\u6CD5\u624D\u6709\u610F\u4E49\uFF0C\u5982\u679C x \u90FD\u662F\u6574\u6570\u90A3\u4E48\u5B83\u672C\u8D28\u4E0A\u8DDF\u4ECE `hashes` \u53D6\u968F\u673A\u6570\u4E00\u6837\u6CA1\u6709\u533A\u522B, \u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u60F3\u62FF canvas \u7ED8\u5236\u4E00\u7EF4\u67CF\u6797\u566A\u58F0\u66F2\u7EBF\u90A3\u4E48\u9700\u8981\u6CE8\u610F\u5C06\u5750\u6807\u9664\u4EE5 `\u5355\u4F4D\u6570\u503C n` \u6765\u5C06\u6574\u6570\u5750\u6807\u7CFB\u53D8\u6210\u5E26\u5C0F\u6570\u7684\u6D6E\u70B9\u6570\u3002"),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "\u767D\u566A\u58F0", noise1d: x => rand(x) / 255 }),
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: React.createElement(React.Fragment, null,
                                    "\u67CF\u6797\u566A\u58F0 n=1",
                                    React.createElement("br", null),
                                    "(\u6CE8\u610F: \u8DDF\u5DE6\u8FB9\u767D\u566A\u58F0\u4E00\u6A21\u4E00\u6837\u4E86)"), noise1d: x => perlin1d_v1(x / 1) })),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "\u67CF\u6797\u566A\u58F0 n=8", noise1d: x => perlin1d_v1(x / 8) }),
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "\u67CF\u6797\u566A\u58F0 n=32", noise1d: x => perlin1d_v1(x / 32) })),
                        React.createElement(P, null, "\u5F53 n \u53D8\u5927\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6298\u7EBF\u8F6C\u89D2\u53D8\u5C11\u4E86\uFF0C\u800C\u4E14\u7EBF\u4E5F\u6CA1\u90A3\u4E48 `\u79BB\u6563` \u4E86\uFF0C\u4F46\u662F\u6298\u7EBF\u8F6C\u89D2\u5904\u4F9D\u7136\u975E\u5E38\u9661\u5CED\uFF0C\u4E0D\u591F\u5E73\u6ED1\u89C4\u6574\uFF0C\u662F\u54EA\u91CC\u6709\u95EE\u9898\u4E48\uFF1F\u6B64\u65F6\u9700\u8981\u518D\u6B21\u5BA1\u89C6 `\u7EBF\u6027\u63D2\u503C`\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u968F\u7740 x \u589E\u52A0\uFF0CN \u4E5F\u4F1A\u4ECE r0 \u5747\u5300\u53D8\u5927\u5230 r1, \u5BF9\u5E94\u7684\u67CF\u6797\u566A\u58F0\u8F93\u51FA\u4E5F\u4F1A `\u5747\u5300\u7EBF\u6027\u53D8\u5927`:"),
                        React.createElement(ImgDynamic, { file: imageLinearInterpolation }),
                        React.createElement(P, null, "\u5F53 P \u8DE8\u8FC7 P1 \u7684\u65F6\u5019\uFF0C\u5BF9\u5E94\u7684\u7EBF\u6027\u63D2\u503C\u7531\u4E8E\u7AEF\u70B9\u53D8\u5316\u5C31\u4F1A\u9020\u6210\u7A81\u53D8\uFF0C\u4ECE\u800C\u6700\u7EC8\u7ED8\u5236\u7684\u65F6\u5019\u90FD\u662F\u4E0D\u5149\u6ED1\u7684\u6298\u89D2\u4E86\uFF0C\u5373\u6298\u7EBF\u8FDE\u63A5\u5904\u4E0D\u8FDE\u7EED"),
                        React.createElement(P, null, "\u82E5\u662F\u6211\u4EEC\u80FD\u8BA9\u8FD9\u4E2A `\u6298\u7EBF` \u53D8\u6210\u66F2\u7EBF\uFF0C\u90A3\u4E48\u5C31\u80FD\u5B9E\u73B0\u566A\u58F0\u7684\u5E73\u6ED1\u5904\u7406\u4E86 \u2014\u2014 \u5982\u4E0B\u7EA2\u7EBF\u6240\u793A\u8FD9\u6837\u5F97\u5230\u7684 `N'` \u5C31\u5F62\u6210\u4E86\u4E00\u6761\u5149\u6ED1\u7684\u66F2\u7EBF\uFF0C\u4E0D\u518D\u662F\u6298\u89D2\u4E86\u3002"),
                        React.createElement(ImgDynamic, { file: imageLinearInterpolationBlending }),
                        React.createElement(P, null, "\u660E\u767D\u4E86\u5173\u952E\u8FD8\u662F\u7EBF\u6027\u63D2\u503C\u540E\uFF0C\u5C31\u77E5\u9053\u600E\u4E48\u6539\u4E86\uFF0C\u53EF\u4EE5\u7B80\u5355\u6309 $ f(x)=x^2 $ \u4F5C\u4E3A\u5E73\u6ED1\u51FD\u6570\u6765\u5904\u7406\u7EBF\u6027\u63D2\u503C\uFF0C\u5F97\u5230\u7B2C 2 \u7248\u5B9E\u73B0 `perlin1d_v2` \u4EE5\u53CA\u7ED8\u5236\u6548\u679C:"),
                        React.createElement(Code, { lang: 'tsx', source: props.codePerlin1d_v2 }),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "f(x)=x, n=8", noise1d: x => perlin1d_v1(x / 8) }),
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "f(x)=x, n=32", noise1d: x => perlin1d_v1(x / 32) })),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "f(x)=x^2, n=8", noise1d: x => perlin1d_v2(x / 8) }),
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "f(x)=x^2, n=32", noise1d: x => perlin1d_v2(x / 32) })),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "f(x)=6x^5-15x^4+10x^3, n=8", noise1d: x => perlin1d_v3(x / 8) }),
                            React.createElement(RenderNoiseCanvas1d, { widthEm: 16, heightEm: 16, label: "f(x)=6x^5-15x^4+10x^3, n=32", noise1d: x => perlin1d_v3(x / 32) })),
                        React.createElement(P, null, "\u6548\u679C\u8D8A\u6765\u8D8A\u597D\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F `6x^5-15x^4+10x^3` \u662F\u67CF\u6797\u63D0\u51FA\u7684\uFF0C\u8FD9\u4E2A\u6548\u679C\u975E\u5E38\u597D\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u66F2\u7EBF\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u53EF\u4EE5\u770B\u5230\u7C7B\u4F3C\u8D1D\u585E\u5C14\u66F2\u7EBF\uFF0C\u5B83\u7684\u4E00\u9636\u5BFC\u6570\u548C\u4E8C\u9636\u5BFC\u6570\u5728 x=0 \u548C x=1 \u7684\u5730\u65B9\u90FD\u4E3A 0\uFF0C\u8FD9\u4F7F\u5F97\u5176\u770B\u8D77\u6765\u975E\u5E38\u5149\u6ED1\uFF08\u4E00\u822C\u6765\u8BF4\u51FD\u6570\u8D8A\u9AD8\u6B21\u5C31\u8D8A\u5149\u6ED1\uFF09"),
                        React.createElement(ImgDynamic, { file: imageDemosFade }),
                        React.createElement(P, null, "\u81F3\u6B64\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u7B97\u662F\u638C\u63E1\u4E86\u67CF\u6797\u566A\u58F0\u7684\u57FA\u672C\u539F\u7406\u548C\u8FC7\u7A0B\u4E86\uFF0C\u5173\u952E\u662F\u5206\u5272\u6574\u6570\u533A\u95F4\u7136\u540E\u53D6\u7AEF\u70B9\u5BF9\u5E94\u7684\u968F\u673A\u6570\uFF0C\u518D\u6839\u636E `\u6BD4\u4F8B` \u6765\u505A\u7EBF\u6027\u63D2\u503C\u5F97\u5230\u566A\u58F0\u6570\u503C\uFF0C\u800C\u5177\u4F53\u7684\u63D2\u503C\u51FD\u6570\u662F\u4EFB\u610F\u7684\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u67CF\u6797\u63D0\u51FA\u6765\u7684\u90A3\u4E2A `f(x)=6x^5-15x^4+10x^3`, \u6548\u679C\u975E\u5E38\u597D\u3002")),
                    React.createElement(H1Block, { id: "priciple-of-perlin-noise", title: "\u67CF\u6797\u566A\u58F0\u7684 2D \u63A8\u5E7F" },
                        React.createElement(P, null, "\u524D\u9762\u8BA8\u8BBA\u4E86\u4E00\u7EF4\u7684\u67CF\u6797\u566A\u58F0\u5904\u7406\uFF0C\u8FD9\u91CC\u5C06\u5176\u4ECE\u4E00\u7EF4\u6570\u8F74\u63A8\u5E7F\u5230\u4E8C\u7EF4\u5E73\u9762\u4E0A"),
                        React.createElement(H2, null, "\u53D6\u6574\u7684\u63A8\u5E7F\uFF1A\u6676\u683C"),
                        React.createElement(P, null, "\u5BF9\u4E8E\u67D0\u4E2A\u70B9 `O(x, y)` \u7684\u4E24\u4E2A\u5750\u6807\u5206\u91CF\u505A\u5411\u4E0A/\u5411\u4E0B\u53D6\u6574\uFF0C\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u6B63\u65B9\u5F62\u683C\u5B50\uFF0C\u8FD9\u4E2A\u683C\u5B50\u79F0\u4E3A `\u6676\u683C (grid)`, \u5982\u4E0B\u56FE\u6240\u793A, O \u70B9\u5728 P1,P2,P3,P4 \u6240\u56F4\u6210\u7684\u6676\u683C\u4E4B\u4E2D\uFF1A"),
                        React.createElement(ImgDynamic, { file: imagePerlinGrid }),
                        React.createElement(P, null, "\u540E\u7EED\u7684\u8BA1\u7B97\u90FD\u56F4\u7ED5\u7740\u8FD9\u4E2A\u6676\u683C\u8FDB\u884C\u3002"),
                        React.createElement(H2, null, "\u4F2A\u968F\u673A\u6570\u7684\u63A8\u5E7F\uFF1A\u4F2A\u968F\u673A\u5411\u91CF (\u68AF\u5EA6)"),
                        React.createElement(P, null, "\u5728\u524D\u9762\u4E00\u7EF4\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u6570\u8F74\u4E0A\u7684\u70B9\u901A\u8FC7 `hashes[n % 256]` \u7684\u65B9\u5F0F\u6765\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\uFF0C\u7C7B\u6BD4\u5230\u4E8C\u7EF4\u573A\u666F\uFF0C\u5219\u9700\u8981\u6839\u636E x \u548C y \u6765\u751F\u6210\u4E00\u4E2A\u4F2A\u968F\u673A\u5411\u91CF\uFF0C\u4E0B\u9762\u7684 `randVecs` \u5B9E\u73B0\u4E86\u8FD9\u4E2A\u529F\u80FD\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: props.codeHashesVec }),
                        React.createElement(P, null, "\u83B7\u53D6\u4F60\u4F1A\u6CE8\u610F\u5230\u5176\u4E2D\u7684 `\u5411\u91CF\u7EC4 vecs`, \u5B83\u5185\u90E8\u5176\u5B9E\u53EF\u4EE5\u653E\u5176\u4ED6\u7684\u53D8\u91CF\u6765\u6539\u53D8\u566A\u58F0\u6548\u679C\uFF0C\u8FD9\u91CC\u9009\u7684\u8FD9\u56DB\u4E2A\u662F\u4E3A\u4E86\u540E\u9762\u65B9\u4FBF\u5904\u7406\uFF08\u540E\u9762\u4F1A\u63D0\u5230\uFF09"),
                        React.createElement(P, null, "\u56E0\u6B64\u5728\u4E8C\u7EF4\u5E73\u9762\u7684\u67CF\u6797\u566A\u58F0\u5904\u7406\u4E2D\uFF0C\u6676\u683C\u7684\u6BCF\u4E2A\u9876\u70B9\u90FD\u4F1A\u4F2A\u968F\u673A\u5230\u4E00\u4E2A\u5411\u91CF\u4E0A\uFF0C\u56E0\u6B64\u4F1A\u751F\u6210\u56DB\u6761\u5411\u91CF\uFF08\u84DD\u8272\u7BAD\u5934\uFF09\uFF1A"),
                        React.createElement(ImgDynamic, { file: imagePerlinRandVecs }),
                        React.createElement(H2, null, "\u6676\u683C\u9876\u70B9\u7684\u566A\u58F0\u6807\u91CF"),
                        React.createElement(P, null, "\u5728\u4E00\u7EF4\u573A\u666F\u7684\u8BA8\u8BBA\u4E2D\u6211\u4EEC\u77E5\u9053\u7EBF\u6027\u63D2\u503C\u9700\u8981\u77E5\u9053\u4E24\u4E2A\u7AEF\u70B9\u548C\u300C\u6BD4\u4F8B\u300D\u624D\u80FD\u63D2\u503C\uFF0C\u6839\u636E\u8FD9\u4E2A\u89C4\u5219\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u7EBF\u6027\u63D2\u503C\u7684\u51FD\u6570\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: props.codeLerp }),
                        React.createElement(P, null, "O \u70B9\u5728\u6676\u683C\u5185\u7684\u76F8\u5BF9\u4F4D\u7F6E\u53EF\u4EE5\u7531\u5176\u5230\u5176\u4E2D\u4E00\u4E2A\u6676\u683C\u9876\u70B9\u7684\u5411\u91CF\u8868\u793A\uFF0C\u5373\u4E0B\u56FE\u4E2D\u6DF1\u7EFF\u8272\u7684\u5411\u91CF\uFF0C\u5176\u4ED6\u4E09\u4E2A\u90FD\u53EF\u4EE5\u7531\u8FD9\u4E2A\u6DF1\u7EFF\u8272\u5411\u91CF\u552F\u4E00\u786E\u5B9A\uFF1A"),
                        React.createElement(ImgDynamic, { file: imagePerlin2DRate }),
                        React.createElement(P, null, "\u53EF\u662F\uFF0C\u7EBF\u6027\u63D2\u503C\u8981\u6C42\u7684\u662F\u6807\u91CF\uFF0C\u5411\u91CF\u4E0D\u80FD\u4F5C\u4E3A `lerp` \u7684\u53C2\u6570\u8FDB\u884C\u8C03\u7528\uFF0C\u8981\u600E\u4E48\u529E\u5462\uFF1F\u2014\u2014 \u65E2\u8981\u8003\u8651\u5230\u76F8\u5BF9\u4F4D\u7F6E\u7684\u6A21\u7684\u5927\u5C0F\u5BF9\u6807\u91CF\u7684\u5F71\u54CD\uFF0C\u53C8\u8981\u8003\u8651\u968F\u673A\u5411\u91CF\u7684\u5F71\u54CD\uFF0C\u56E0\u6B64\u5C06\u6676\u683C\u9876\u70B9\u7684\u4F2A\u968F\u673A\u5411\u91CF\u6295\u5F71\u5230 `\u76F8\u5BF9\u4F4D\u7F6E` \u4E0A\u76F8\u4E58\u5F97\u5230\u4E00\u4E2A\u6807\u91CF\u4F5C\u4E3A\u8868\u5F81\u8FD9\u4E2A\u6676\u683C\u9876\u70B9\u7684\u566A\u58F0\u6807\u91CF\uFF1A"),
                        React.createElement(ImgDynamic, { file: imagePerlinLerp1 }),
                        React.createElement(P, null, "\u5B9E\u9645\u4E0A\uFF0C\u4E0A\u9762\u8FD9\u6837\u6295\u5F71\u8BA1\u7B97\u6807\u91CF\u7684\u65B9\u5F0F\u5176\u5B9E\u5C31\u662F\u5411\u91CF\u7684\u70B9\u4E58\u8FD0\u7B97\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: props.codeVecDot }),
                        React.createElement(P, null, "\u5230\u6B64\u4E3A\u6B62\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6C42\u51FA\u56DB\u4E2A\u6676\u683C\u9876\u70B9\u7684\u566A\u58F0\u6807\u91CF\uFF0C\u6700\u540E\u4E00\u6B65\u5C31\u662F\u5C06\u8FD9\u56DB\u4E2A\u566A\u58F0\u6807\u91CF\u8FDB\u884C\u7EBF\u6027\u63D2\u503C\u4E86\u3002"),
                        React.createElement(H2, null, "\u7EBF\u6027\u63D2\u503C"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u62FF P1 P2 \u7684\u566A\u58F0\u6807\u91CF\u505A\u4E00\u6B21\u63D2\u503C\u5F97\u5230 V1\uFF0C\u6743\u91CD\u53D6 O \u70B9\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u7684\u76F8\u5BF9\u4F4D\u7F6E"),
                            React.createElement(P, null, "\u62FF P3 P4 \u7684\u566A\u58F0\u6807\u91CF\u505A\u4E00\u6B21\u63D2\u503C\u5F97\u5230 V2\uFF0C\u6743\u91CD\u53D6 O \u70B9\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u7684\u76F8\u5BF9\u4F4D\u7F6E"),
                            React.createElement(P, null, "\u5C06 V1 V2 \u518D\u505A\u4E00\u6B21\u63D2\u503C\uFF0C\u6743\u91CD\u53D6 O \u70B9\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u7684\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u6700\u540E\u7684\u63D2\u503C\u7ED3\u679C\u5373\u4E3A\u8FD9\u4E2A\u70B9\u7684\u4E8C\u7EF4\u67CF\u6797\u566A\u58F0\u503C\u4E86")),
                        React.createElement(H2, null, "\u5F52\u4E00\u5316\u5904\u7406"),
                        React.createElement(P, null, "\u5F52\u4E00\u5316\u6307\u7684\u662F\u5C06\u8F93\u51FA\u9650\u5B9A\u5728 [-1,1] \u6216\u8005 [0,1] \u7684\u533A\u95F4\u5185\uFF0C\u65B9\u4FBF\u5916\u90E8\u8C03\u7528\u4F7F\u7528\uFF0C\u800C\u4E0A\u8FF0\u7684\u4E8C\u7EF4\u67CF\u6797\u566A\u58F0\u7684\u53D6\u503C\u8303\u56F4\u7531\u56DB\u4E2A\u6676\u683C\u4EE3\u8868\u7684\u566A\u58F0\u6807\u91CF\u6765\u786E\u5B9A\uFF0C\u90A3\u4E48\u5B83\u4EEC\u63D2\u503C\u7684\u7ED3\u679C\u80FD\u843D\u5728 0 \u5230 1 \u5417\uFF1F"),
                        React.createElement(P, null, "\u6211\u4EEC\u7279\u610F\u9009\u62E9\u7684\u56DB\u4E2A\u5411\u91CF\u5728\u5F52\u4E00\u5316\u5904\u7406\u8FD9\u91CC\u5C31\u53D1\u6325\u4F5C\u7528\u4E86\uFF0C\u7528\u7B26\u53F7 $A$ \u8868\u793A:"),
                        React.createElement(Formula, { source: `
        \\begin{align}
          \\vec{A} &= \\{ (1, 1) (-1, 1) (-1, -1) (1, -1) \\} \\\\
        \\end{align}
      ` }),
                        React.createElement(P, null, "\u7531\u4E8E\u8FD9\u56DB\u4E2A\u5411\u91CF\u4E0D\u662F $+1$ \u5C31\u662F $-1$, \u56E0\u6B64\u5BF9\u4E8E\u4EFB\u610F\u5411\u91CF (x, y) \u8BA1\u7B97\u70B9\u4E58\u6709:"),
                        React.createElement(Formula, { source: `
        \\begin{align}
          A \\cdot (x, y) &= \\pm x \\pm y
        \\end{align}
      ` }),
                        React.createElement(P, null, "\u6211\u4EEC\u7279\u610F\u9009\u62E9\u7684\u56DB\u4E2A\u5411\u91CF\u5728\u5F52\u4E00\u5316\u5904\u7406\u8FD9\u91CC\u5C31\u53D1\u6325\u4F5C\u7528\u4E86\uFF0C\u4E0A\u56FE\u4E2D\u6709\u51E0\u4E2A\u5DF2\u77E5\u7684\u7B49\u4EF7\u5173\u7CFB"),
                        React.createElement(Formula, { source: `
        \\begin{align}
          dx &= x - x0 \\\\
          dy &= y - y0 \\\\
          \\vec{P1O} &= (x - x0, y - y0) \\\\
                     &= (dx, dy) \\\\
          \\vec{P2O} &= (x - (x0 + 1), y0) \\\\
                     &= (dx - 1, dy) \\\\
        \\end{align}
      ` }),
                        React.createElement(P, null, "\u7531\u6B64\u8BA1\u7B97\u70B9\u79EF\u5F97\u5230 P1 \u548C P2 \u5BF9\u5E94\u7684\u566A\u58F0\u6807\u91CF V1 \u548C V2"),
                        React.createElement(Formula, { source: `
        \\begin{align}
          V1 &= A \\cdot (dx, dy) \\\\
          V2 &= A \\cdot (dx - 1, dy)
        \\end{align}
      ` }),
                        React.createElement(P, null, "\u5C55\u5F00\u53EF\u4EE5\u5F97\u5230:"),
                        React.createElement(Formula, { source: `
        \\begin{align}
          V1 &= \\pm dx \\pm dy \\\\
          V2 &= \\pm (dx - 1) \\pm dy \\\\
        \\end{align}
      ` }),
                        React.createElement(P, null, "\u6700\u540E\u8981\u5C06 V1 \u548C V2 \u901A\u8FC7\u4E0B\u9762\u7684 lerp \u505A\u4E00\u6B21\u7EBF\u6027\u63D2\u503C\u5F97\u5230\u6700\u7EC8\u7ED3\u679C:"),
                        React.createElement(Formula, { source: `
        \\begin{align}
          lerp(t, a, b) &= a + t*(b - a)  \\\\
          最终结果 &= lerp(t, V1, V2)
        \\end{align}
      ` }),
                        React.createElement(P, null, "\u90A3\u4E48\u6700\u7EC8\u7ED3\u679C\u7684\u53D6\u503C\u8303\u56F4\u662F\u591A\u5C11\u5462\uFF1F\u663E\u7136\uFF0C\u53D6\u503C\u8303\u56F4\u5C31\u662F lerp \u7684 `[a, b]`, \u5373 `[V1, V2]`"),
                        React.createElement(H2, null, "\u5B8C\u6574\u5B9E\u73B0"),
                        React.createElement(Code, { lang: 'tsx', source: props.codePerlin2d_v1 }),
                        React.createElement(H2, null, "\u6548\u679C"),
                        React.createElement(P, null, "\u62FF\u4E0A\u9762\u5B9E\u73B0\u7684 `perlin2d_v1` \u6765\u753B\u4E00\u4E0B\uFF1A"),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas2d, { widthEm: 16, heightEm: 16, label: "n = 16", noise2d: (x, y) => perlin2d_v1(x / 16, y / 16) }),
                            React.createElement(RenderNoiseCanvas2d, { widthEm: 16, heightEm: 16, label: "n = 32", noise2d: (x, y) => perlin2d_v1(x / 32, y / 32) })),
                        React.createElement(Col, null,
                            React.createElement(RenderNoiseCanvas2d, { widthEm: 16, heightEm: 16, label: "n = 64", noise2d: (x, y) => perlin2d_v1(x / 64, y / 64) }),
                            React.createElement(RenderNoiseCanvas2d, { widthEm: 16, heightEm: 16, label: "n = 128", noise2d: (x, y) => perlin2d_v1(x / 128, y / 128) }))),
                    React.createElement(H1Block, { id: "reference", title: "\u53C2\u8003" },
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://zh.m.wikipedia.org/wiki/Perlin%E5%99%AA%E5%A3%B0" }, "Wiki - Perlin Noise")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://www.bilibili.com/video/BV11V4y1M7N6" }, "Minecraft\u5730\u5F62\u751F\u6210\u4E0E\u67CF\u6797\u566A\u58F0 (\u4E00) \u8BE6\u89E3\u566A\u58F0")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://juejin.cn/post/7148448472205639687" }, "\u56FE\u5F62\u5B66\u7684\u6570\u5B66\u57FA\u7840\uFF08\u56DB\u5341\u56DB\uFF09\uFF1A\u67CF\u6797\u566A\u58F0")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://rtouti.github.io/graphics/perlin-noise-algorithm" }, "Perlin Noise: A Procedural Generation Algorithm")),
                        React.createElement(P, null)));
            });

        })
    };
}));
