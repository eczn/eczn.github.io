System.register(['react', 'rally/@@', './01.png.js', './02.webp.js', './03.webp.js', './04.webp.js', './05.webp.js', './06.webp.js', './07.webp.js', './08.webp.js', './09.webp.js', './10.webp.js', './11.webp.js', './12.webp.js', './k1.png.js'], (function (exports) {
    'use strict';
    var React, P, Link, ImgDynamic, H1Block, Code, Numbering, metaBeauty, image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, image12, imagek1;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Link = module.Link;
            ImgDynamic = module.ImgDynamic;
            H1Block = module.H1Block;
            Code = module.Code;
            Numbering = module.Numbering;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            image01 = module.default;
        }, function (module) {
            image02 = module.default;
        }, function (module) {
            image03 = module.default;
        }, function (module) {
            image04 = module.default;
        }, function (module) {
            image05 = module.default;
        }, function (module) {
            image06 = module.default;
        }, function (module) {
            image07 = module.default;
        }, function (module) {
            image08 = module.default;
        }, function (module) {
            image09 = module.default;
        }, function (module) {
            image10 = module.default;
        }, function (module) {
            image11 = module.default;
        }, function (module) {
            image12 = module.default;
        }, function (module) {
            imagek1 = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'typescript-52000-checker.ts',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'TypeScript 52000+ 行的 checker.ts',
                author: 'eczn',
                // category: '分类',
                time: new Date('2024-09-01 08:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "TypeScript \u6E90\u7801\u7684 checker.ts \u8FD9\u4E2A\u6587\u4EF6\u76F8\u5F53\u66B4\u529B\uFF0C\u5B83\u5C06 TS \u5B8C\u6574\u7C7B\u578B\u7CFB\u7EDF\u5168\u90E8\u903B\u8F91 5.2 \u4E07\u884C\u5168\u90E8\u5199\u5728\u4E00\u4E2A ts \u6587\u4EF6\u91CC\uFF0C\u800C\u6587\u4EF6\u5927\u5C0F\u5219\u8FBE\u5230\u4E86\u60CA\u4EBA\u7684 2.92 MB \u2014\u2014 \u8FD9\u76F8\u5F53\u6709\u8DA3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts" }, "Github - checker.ts")),
                        React.createElement(ImgDynamic, { file: image01 }),
                        React.createElement(P, null, "\u597D, VSCode, \u542F\u52A8 !"),
                        React.createElement(ImgDynamic, { file: image02 })),
                    React.createElement(H1Block, { id: "50000lines-checker-ts", title: "\u4E94\u4E07\u884C all-in-one \u7684 checker.ts" },
                        React.createElement(P, null, "\u8FD9\u4E2A\u6587\u4EF6\u5F88\u66B4\u529B\uFF0C\u7C7B\u578B\u7CFB\u7EDF\u5168\u90E8\u903B\u8F91 5 \u4E07\u884C all-in-one file \uFF0C\u662F ts \u6E90\u7801\u7EF4\u62A4\u8005\u4E0D\u4F1A\u5199\u4EE3\u7801\u5417\uFF1F\u663E\u7136\u5E76\u4E0D\u662F\uFF0C\u6211\u7FFB\u4E86\u4E00\u4E9B\u8D44\u6599\u548C\u8BFB\u4E86\u4E0B\u5176\u4E2D\u7684\u5B9E\u73B0\uFF0C\u7A0D\u5FAE\u9707\u64BC\u4E86\u4E00\u4E0B\uFF0C\u5C06\u76F8\u5173\u601D\u8003\u7EC6\u8282\u8BB0\u5F55\u5728\u672C\u6587\u3002"),
                        React.createElement(ImgDynamic, { file: imagek1 })),
                    React.createElement(H1Block, { id: "comment-named-parameters", title: "\u4F4E\u914D\u7248 named parameters" },
                        React.createElement(P, null, "\u4F17\u6240\u5468\u77E5\uFF0Cjs \u5404\u79CD\u89C4\u8303\u90FD\u63A8\u8350\u4F60\u7528\u4E00\u4E2A\u5BF9\u8C61\u6765\u4F20\u9012\u591A\u4E2A\u53C2\u6570\uFF0C\u7136\u540E\u5728\u51FD\u6570\u91CC\u89E3\u6784 \u2014\u2014 \u591A\u6570\u65F6\u5019\u8FD9\u6CA1\u4EC0\u4E48\uFF0C\u4F46\u662F\u5728 ts compiler \u91CC\uFF0C\u4EFB\u4F55\u6D6A\u8D39\u90FD\u4F1A\u88AB\u6781\u9650\u653E\u5927\uFF0C\u56E0\u6B64\u4ED6\u4EEC\u7528\u4E86\u8FD9\u79CD\u4F4E\u914D\u7248\u7528\u6CE8\u91CA\u7684\u65B9\u5F0F\u6765\u8868\u793A named parameters (\u8FD9\u884C\u8FD8\u662F anders \u8001\u7237\u5B50\u5199\u7684\uFF0CC# \u4E4B\u7236)"),
                        React.createElement(ImgDynamic, { file: image03 }),
                        React.createElement(P, null, "\u4F55\u4E3A named parameter \u5462\uFF1F\u5176\u5B9E\u5C31\u662F\u5E26\u540D\u5B57\u6807\u7B7E\u7684\u51FD\u6570\uFF0C\u8C03\u7528\u7684\u65F6\u5019\u53EF\u4EE5\u6307\u5B9A\u6807\u7B7E\u6765\u4F20\u53C2\u6570\uFF0C\u8FD9\u4E2A\u5728\u5176\u4ED6\u8BED\u8A00\u91CC\u662F\u57FA\u64CD\uFF0C\u6BD4\u5982 moonbit or swift \u91CC\u7684\u6807\u7B7E\u51FD\u6570\uFF1A"),
                        React.createElement(Code, { lang: 'rust', source: `
        fn add(~left: Int, ~right: Int) -> Int {
          return left + right;
        }

        add(left: 1, right: 44); // 🉑 
        add(right: 44, left: 1); // 🉑 
        add(1, 2);               // 🉑 此时会自动匹配到 left 和 right
      ` }),
                        React.createElement(P, null, "\u4E3A\u4EC0\u4E48 ts \u9700\u8981 named parameter \u7279\u6027\uFF1A"),
                        React.createElement(P, null, "\u5728 ts \u8FD9\u79CD\u9AD8\u9891\u8C03\u7528\u573A\u666F\u91CC\u901A\u8FC7\u89E3\u6784 options \u5BF9\u8C61\u7684\u65B9\u5F0F\u4F20\u53C2\u4F1A\u5BFC\u81F4\u5927\u91CF\u65E0\u8C13\u7684\u5185\u5B58\u5F00\u9500 \u2014\u2014 \u8FD9\u901A\u5E38\u4F1A\u5BFC\u81F4 type checking \u8FC7\u7A0B\u4E2D\u7684\u5185\u5B58\u5CF0\u503C\u800C\u9020\u6210\u9891\u7E41 gc & mem_copy \u66F4\u91CD\u8981\u7684\u662F\u5B57\u9762\u91CF key \u7684\u987A\u5E8F\u8FD8\u4F1A\u5F71\u54CD v8 \u7684 inline caches \u4F18\u5316\uFF0C\u5199\u7684\u4E0D\u597D\u53EF\u80FD\u4F1A\u5BF9\u51FD\u6570\u8C03\u7528 feedback \u9020\u6210\u4E25\u91CD\u8D1F\u9762\u53CD\u9988\u8FDB\u800C\u5F71\u54CD TurboFan \u7684\u8FDB\u4E00\u6B65\u4F18\u5316\u6700\u540E\u9020\u6210\u975E\u5E38\u5927\u7684\u6027\u80FD\u635F\u5931 ..."),
                        React.createElement(P, null, "\u5F53 V8 \u51FD\u6570\u8C03\u7528\u7684 feedback slot \u4ECE SMI \u53D8\u6210 Any \u65F6\uFF0CTurboFan codegen \u7684\u6C47\u7F16\u5C06\u4F1A\u6162\u4E09\u500D\uFF0C\u5173\u4E8E\u8FD9\u4E2A\u95EE\u9898\u7684\u7EC6\u8282\u53EF\u4EE5\u770B\u770B\u672C\u7AD9\u7684\u8FD9\u7BC7\u6587\u7AE0"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "/b/v8-asm-detail-of-inline-caches/" }, "V8 Inline Caches \u4F18\u5316\u53CA\u5176\u6C47\u7F16\u7EC6\u8282")),
                        React.createElement(P, null, "\u603B\u4E4B\uFF0C\u5B57\u9762\u91CF\u4E00\u65F6\u723D... OOM \u5C31\u6B32\u54ED\u65E0\u6CEA\u4E86\u3002")),
                    React.createElement(H1Block, { id: "always-number", title: "\u80FD\u7528 number \u5C3D\u91CF number" },
                        React.createElement(P, null, "\u6BD4\u5982 switch\u3001\u6BD4\u5982 const enum\u3001\u6BD4\u5982\u5404\u79CD enum bitmap flags \u7B49\u7B49\u8BBE\u8BA1\uFF0C\u539F\u56E0\u662F object \u548C string \u7684\u5F00\u9500\u592A\u5927\u4E86\uFF0C\u800C\u5C0F\u4E00\u70B9\u7684\u6574\u6570\u5728 v8 \u91CC\u751A\u81F3\u662F\u65E0\u5F00\u9500\u7684\uFF08\u5982\u679C SMI tagged pointer \u6307\u9488\u81EA\u8EAB\u6570\u503C\u4E0D\u7B97\u5F00\u9500\u7684\u8BDD")),
                    React.createElement(H1Block, { id: "unrestricted-usage-of-const-enum", title: "\u65E0\u9650\u5236\u4F7F\u7528 const enum" },
                        React.createElement(P, null, "const enum \u6709\u4E2A\u7279\u6027\u53EF\u4EE5\u76F4\u63A5 inline \u679A\u4E3E\u503C\u5230\u51FD\u6570\u91CC\u53D8\u6210\u7ACB\u5373\u6570\uFF0C\u80FD\u4EAB\u53D7\u6781\u81F4\u4F18\u5316:"),
                        React.createElement(ImgDynamic, { file: image04 }),
                        React.createElement(P, null, "\u4F46\u76EE\u524D\u793E\u533A\u5BF9\u4E8E const enum \u7684\u4E3B\u6D41\u610F\u89C1\u662F `\u4E0D\u63A8\u8350\u4F7F\u7528`\uFF0C\u800C\u4E14 ts \u7684\u90E8\u5206\u7EF4\u62A4\u8005\u4E5F\u8BA4\u4E3A\u8FD9\u4E2A\u662F mistake:"),
                        React.createElement(ImgDynamic, { file: image05 }),
                        React.createElement(P, null, "\u4F46\u662F\u8FD9\u8BF4\u6CD5\u5176\u5B9E\u76F8\u5F53\u5C34\u5C2C\uFF1A\u662F\u7684\u867D\u7136\u8FD9\u662F mistake \u6211\u4EEC\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u4F46\u6211\u4EEC ts \u6E90\u7801\u91CC\u5168\u90FD\u662F const enum \u5230\u5904\u98DE ... \uFF08800+ \u4E2A const enum\uFF0C\u6CA1\u8FD9\u4E2A\u7279\u6027\u4F30\u8BA1 tsc \u8981\u6162\u4E0D\u5C11\uFF09")),
                    React.createElement(H1Block, { id: "performance-of-esm-cjs", title: "ESM/CJS \u7684\u6027\u80FD\u95EE\u9898\uFF1A\u5C24\u5176\u662F export \u5BFC\u51FA\u7279\u522B\u591A\u7684\u65F6\u5019" },
                        React.createElement(P, null, "\u5F53 `export` \u5BFC\u51FA\u592A\u591A\u6210\u5458\u7684\u60C5\u51B5\u4E0B\uFF0CV8 \u5185\u90E8\u5904\u7406\u8FD9\u7C7B\u5BF9\u8C61\u4F1A\u5C06\u5176\u53D8\u6210 `Slow Properties` \u5B57\u5178\u6A21\u5F0F\uFF0C\u5728\u591A\u6570\u65F6\u5019\u8FD9\u6CA1\u5565\uFF0C\u4F46\u5982\u679C\u9047\u5230\u67D0\u9AD8\u9891\u6A21\u5757\u5185\u7684\u5E38\u91CF\u88AB\u5F15\u7528\u5927\u51E0\u767E\u4E07\u6B21\u7684\u60C5\u51B5\u4E0B\uFF0C\u6B64\u65F6 `export.xxxxx` \u7684\u70B9\u8BFB\u67E5\u8BE2\u5F00\u9500\u5C31\u4E0D\u80FD\u5FFD\u89C6\u4E86\uFF0C\u5C24\u5176\u662F\u5F53 `export` \u4E0A\u6709\u51E0\u767E\u4E2A\u5BFC\u51FA\u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u70B9\u8BFB\u5F00\u9500\u4E0D\u53EF\u5FFD\u89C6\uFF0C\u6BD4\u5982\uFF1A"),
                        React.createElement(Code, { source: `
        const constant = require(\`./constant\`);
        module.export = function getXXConfig() {
          return constant.xxx + constant.bbb;
        }
        // 由于 constant 上有几百个常量，
        // 即使是 constant.xxx 这样简单的语句
        // 在百万次调用的时候，其耗时将不可忽略 ( 几百 ms 以上 )
      `, lang: 'js' }),
                        React.createElement(P, null, "\u800C checker.ts \u5219\u662F\u5C06\u6240\u6709\u4E1C\u897F all-in-one \u5C31\u6CA1\u8FD9\u95EE\u9898\u4E86\uFF0C\u5168\u90FD\u5728\u51FD\u6570\u4F5C\u7528\u57DF\u5185\uFF0C\u67E5\u8BE2\u65F6\u95F4\u662F `O(1)`")),
                    React.createElement(H1Block, { id: "esm-no-private-export", title: "ESM \u6CA1\u6709 private \u5BFC\u51FA" },
                        React.createElement(P, null, "\u6709\u79CD export \u662F\u53EA\u60F3\u5728\u9879\u76EE\u5185\u65E0\u9650\u5236\u4F7F\u7528\uFF0C\u4F46\u662F\u53C8\u4E0D\u671F\u671B\u5BFC\u51FA\u80FD\u88AB\u5916\u90E8\u7684 npm \u770B\u5230 \u2014\u2014 \u4E5F\u5C31\u662F esm \u6CA1\u6709\u63D0\u4F9B private export \u8FD9\u79CD\u7279\u6027:"),
                        React.createElement(Code, { source: `
        import D from '@tencent/xxx/a/b/c/d';
        // ⬆️ 我不期望别人能这样 import 我内部的东西
      `, lang: 'js' }),
                        React.createElement(P, null, "\u800C ts \u53C8\u6070\u6070\u8981\u8FD9\u79CD\u7279\u6027\uFF0C\u90A3\u4E48\u5B83\u4EEC\u600E\u4E48\u5B9E\u73B0\u7684\u5462\uFF1F\u901A\u8FC7 `/** @internal */` \u6CE8\u89E3\uFF1A"),
                        React.createElement(ImgDynamic, { file: image06 }),
                        React.createElement(P, null, "\u6807\u8BB0\u4E3A `@internal` \u7684\u4E1C\u897F\u5728\u751F\u6210 `d.ts` \u7684\u65F6\u5019\u4F1A\u88AB\u62B9\u53BB\uFF0C\u53D8\u76F8\u5B9E\u73B0\u5916\u90E8\u65E0\u6CD5 import \u800C ts \u4ED3\u5E93\u5185\u968F\u4FBF import \u3002")),
                    React.createElement(H1Block, { id: "it-even-use-var-instead-of-let-or-const", title: "ts \u751A\u81F3\u5927\u91CF\u4F7F\u7528 var\uFF0C\u800C\u4E0D\u662F\u7528 let \u548C const" },
                        React.createElement(P, null, "\u53C8\u6BD4\u5982\uFF0C\u6709\u90E8\u5206\u51FD\u6570\u4E3A\u4E86\u6027\u80FD\u5168\u7528 var\uFF0C\u6123\u662F\u6CA1\u7528 const / let \u8FD9\u4E9B\uFF0C\u4F60\u770B ts \u600E\u4E48\u5199\u7684\uFF1A"),
                        React.createElement(ImgDynamic, { file: image07 }),
                        React.createElement(P, null, "\u5177\u4F53\u89C1 https://github.com/microsoft/TypeScript/issues/52924"),
                        React.createElement(P, null, "\u5927\u610F\u662F ts \u7684\u573A\u666F\u4E0B\uFF0Cv8 \u8FD9\u7C7B js runtime \u7684 TDZ \u68C0\u67E5\u751A\u81F3\u4F1A\u76F8\u5F53\u5F71\u54CD\u8FD0\u884C\u6027\u80FD\u3002\u3002\u3002 \u6BD5\u7ADF\u4E94\u4E07\u884C\u5462\u3002\u3002\u3002 \uFF08production build \u4F1A\u6BD4 dev build \u8981\u5FEB\u4E0D\u5C11\u7684\u539F\u56E0\u4E4B\u4E00\uFF09")),
                    React.createElement(H1Block, { id: "set-property-to-string-prototype", title: "\u5F80 String.prototype.xxx \u4E0A\u6CE8\u5165\u4E1C\u897F" },
                        React.createElement(ImgDynamic, { file: image08 }),
                        React.createElement(P, null, "\u8FD9\u7C7B\u64CD\u4F5C\u5728\u666E\u901A js/ts \u9879\u76EE\u91CC\u662F\u4E00\u5B9A\u4F1A\u88AB\u9119\u89C6\u7684\uFF0C\u4F46\u4E00\u4E2A\u9759\u6001\u7C7B\u578B\u8BED\u8A00\u600E\u4E48\u6CA1\u529E\u6CD5\u81EA\u5DF1\u62D3\u5C55\u57FA\u7840\u7C7B\u578B\u6765\u4F7F\u7528\u5462\uFF1F \uFF08\u8FD9\u5728 swift / go \u4E4B\u7C7B\u7684\u8BED\u8A00\u91CC\u57FA\u4E8E string / int \u6765\u641E\u51FA\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\u51FA\u6765\u662F\u57FA\u64CD\u3002\u3002\u3002\u3002\uFF09")),
                    React.createElement(H1Block, { id: "classless-programming", title: "\u65E0\u7C7B\u7F16\u7A0B\uFF0C\u63A8\u5D07\u7EC4\u5408\u7F16\u7A0B" },
                        React.createElement(P, null, "checker.ts \u51E0\u4E07\u884C\u6838\u5FC3\u903B\u8F91\u51E0\u4E4E\u6CA1\u6709 class \u548C\u7EE7\u627F\uFF0C\u5B8C\u5168\u901A\u8FC7\u51FD\u6570\u7EC4\u5408\u7684\u65B9\u5F0F\u6765\u67B6\u6784\u4EE3\u7801\uFF0C\u6574\u4F53\u770B\u7740\u50CF\u662F\u6709 rust impl \u5173\u952E\u5B57\u7684 ts \u90A3\u6837\uFF1A"),
                        React.createElement(ImgDynamic, { file: image09 }),
                        React.createElement(P, null, "\u4EE3\u7801\u91CC\u5927\u90E8\u5206\u51FD\u6570\u90FD\u662F\u4E0A\u9762\u8FD9\u79CD\u98CE\u683C\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u300C\u6838\u5FC3\u63A5\u53E3\u300D\u5176\u4ED6\u53C2\u6570\u5219\u662F\u5BF9\u5E94\u7684\u53C2\u6570\uFF0C\u5F53\u7136\uFF0C\u7EC4\u5408\u4F18\u4E8E\u7EE7\u627F\u4E5F\u7B97\u662F\u8FD1\u5E74\u6765\u4E1A\u754C\u8FBE\u6210\u7684\u5171\u8BC6\u4E86\u3002"),
                        React.createElement(P, null, "\u5F53\u7136\u6BD4\u8D77\u67B6\u6784\uFF0C\u6211\u66F4\u613F\u610F\u76F8\u4FE1 ts \u662F\u8003\u8651\u5230 class \u7EE7\u627F\u53EF\u80FD\u5B58\u5728\u6F5C\u5728\u7684\u6027\u80FD\u95EE\u9898\u5BFC\u81F4\u7684\uFF1A"),
                        React.createElement(P, null, "\u6BD4\u5982 V8 \u5F15\u64CE\u4E0B\u7684 `A extends B` \u573A\u666F\uFF0CB \u4E0A\u9762\u6709\u4E2A\u65B9\u6CD5 fn\uFF0C\u5F53 `A.fn();` `B.fn();` \u90FD\u8C03\u7528\u4E86\u4E4B\u540E\uFF0C\u5982\u679C A \u548C B \u7684 shapes \u4E0D\u4E00\u6837\uFF0C\u6B64\u65F6 fn \u8C03\u7528 feedback slot \u4F1A\u4ECE `monomorphic` \u7684\u53D8\u6210 `polymorphic` \u7684\uFF0C\u5F53\u7EE7\u627F\u4E09\u4E2A\u4EE5\u4E0A\u7684\u65F6\u5019\u5C31\u4F1A\u53D8\u6210 `megamorphic` \u4E86\uFF0C\u8FD9\u4F1A\u5F71\u54CD\u5F15\u64CE ICs \u7684\u4F18\u5316\u6548\u679C\uFF0C\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\uFF0C\u800C\u5173\u4E8E\u8FD9\u4E2A\u95EE\u9898\u7684\u7EC6\u8282\u53EF\u4EE5\u770B\u770B\u672C\u7AD9\u7684\u8FD9\u7BC7\u6587\u7AE0: "),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "/b/v8-asm-detail-of-inline-caches/" }, "V8 Inline Caches \u4F18\u5316\u53CA\u5176\u6C47\u7F16\u7EC6\u8282"))),
                    React.createElement(H1Block, { id: "no-table-driven", title: "\u600E\u4E48\u6CA1\u6709\u7528\u300C\u8868\u9A71\u52A8\u300D\u8FD9\u79CD\u6240\u8C13\u7684\u5E38\u7528\u300C\u524D\u7AEF\u8BBE\u8BA1\u6A21\u5F0F\u300D\uFF1F" },
                        React.createElement(P, null, "\u6E90\u7801\u91CC\u5F88\u591A\u8FD9\u79CD\u6839\u636E ast node kind \u53BB\u8D70\u4E0D\u540C\u903B\u8F91\uFF0C\u7136\u540E\u8FD9\u4E9B\u903B\u8F91\u90FD\u5199\u6210 `if else` \u6216\u8005 `switch` \u8BED\u53E5 \u2014\u2014 \u4E3A\u4F55\u4E0D\u4F7F\u7528\u4E00\u4E2A `Record<Kind, Fn>` \u7684\u65B9\u5F0F\u53BB\u8868\u9A71\u52A8\u5462\uFF1F"),
                        React.createElement(P, null, "\u539F\u56E0\u5F88\u7B80\u5355\uFF1A\u8868\u9A71\u52A8\u65E0\u6CD5\u88AB v8 \u8FD9\u7C7B `runtime` \u9759\u6001\u5206\u6790\u4F18\u5316\uFF0C\u800C\u4E14\u8868\u9A71\u52A8\u8FD9\u7C7B\u5199\u6CD5\u4F1A\u6162\u4E2A\u51E0\u5341\u500D\u5BF9\u4E8E\u57FA\u7840\u8BBE\u65BD\u6765\u8BF4\u8FD9\u662F\u4E0D\u53EF\u63A5\u53D7\u7684\u3002\uFF08\u65E0\u8D2C\u4E49\uFF0Cjs \u7684\u8868\u9A71\u52A8\u5199\u6CD5\u770B\u573A\u666F\uFF0C\u9AD8\u9891\u8C03\u7528\u8FD8\u662F\u522B\u4E86\u5427\uFF0C\u5199 event selector \u4E4B\u7C7B\u7684\u5012\u662F\u4E00\u7C7B\u6BD4\u8F83\u5408\u9002\u7684\u573A\u666F\uFF09"),
                        React.createElement(P, null, "\u4ECE\u8BED\u8A00\u7279\u6027\u7684\u5C42\u9762\u6765\u8BF4\uFF0Cts \u771F\u7684\u7F3A\u4E00\u4E2A `\u6EE1\u8840\u7248\u6A21\u5F0F\u5339\u914D` + `enum adt` \u4E86\uFF0C\u4F46\u76EE\u524D ts \u539F\u5219\u4E0A\u662F\u4E0D\u4F1A\u518D\u5408\u5165\u65B0\u7684 `runtime` \u7279\u6027\u4E86 \u2014\u2014 \u8FD9\u5C31\u5F88\u96BE\u53D7\u4E86\uFF0C\u53C8\u4E0D\u80FD\u8868\u9A71\u52A8\uFF0C\u53C8\u4E0D\u80FD\u6A21\u5F0F\u5339\u914D\uFF0C\u6700\u540E\u4EE3\u7801\u5F88 C style \u4E86\uFF0C\u800C\u4E14\u8981\u5199\u975E\u5E38\u591A\u7684 `x is X` \u8C13\u8BED \u3002\u3002\u3002")),
                    React.createElement(H1Block, { id: "no-try-catch", title: "\u57FA\u672C\u6CA1\u6709 try-catch" },
                        React.createElement(P, null, "\u4E0E go \u6709\u7C7B\u4F3C\u7684\u60F3\u6CD5\uFF0Cchecker.ts \u91CC\u901A\u8FC7\u8FD4\u56DE\u503C + \u5F80 context.xxx \u4E0A\u5199\u4E1C\u897F\u7684\u65B9\u5F0F\u6765\u6307\u793A\u5F02\u5E38\uFF0C\u4E00\u65B9\u9762\u662F\u4E3A\u4E86\u6027\u80FD\uFF0C\u53E6\u5916\u4E00\u65B9\u9762\u6211\u751A\u81F3\u53EF\u4EE5\u5408\u7406\u6000\u7591\u4E3A\u662F\u6CA1\u6709 checked exception \u5BFC\u81F4\u53EA\u80FD\u8FD9\u6837\u624D\u80FD type checked ... (\u5F53\u7136 anders \u8001\u7237\u5B50\u5E94\u8BE5\u662F uncheck \u515A\uFF0C\u53C2\u8003 C# \u7684\u8BBE\u8BA1)")),
                    React.createElement(H1Block, { id: "the-half-finished-namespace-modules", title: "\u6587\u4EF6\u591A\u624D\u662F\u5927\u95EE\u9898 \u2014\u2014 \u53EF\u60DC\u4E86\u534A\u6210\u54C1\u7684 ts namespace" },
                        React.createElement(P, null, "\u5982\u679C\u6709\u63A5\u89E6\u8FC7\u5927\u578B js/ts \u9879\u76EE\u7684\u540C\u5B66\u80AF\u5B9A\u77E5\u9053\uFF0C\u6587\u4EF6\u4E00\u591A\u5C31\u4E0D\u77E5\u9053\u4E1C\u897F\u5728\u54EA\u4E86\uFF0C\u627E\u4E2A import \u4F60\u751A\u81F3\u8981\u57AE\u5341\u51E0\u4E2A\u6587\u4EF6 \u3002\u3002\u3002"),
                        React.createElement(P, null, "\u2014\u2014 \u4ECE\u8FD9\u4E5F\u53EF\u770B\u5230\uFF0C\u4E1C\u897F\u4E3A\u4EC0\u4E48\u8981 import \u624D\u8BA9\u7528\u5462\uFF1F\u80FD\u5426\u6709 moonbit\u3001rust \u90A3\u6837\u597D\u7528\u7684\u6A21\u5757\u7CFB\u7EDF\u5462\uFF1F \u2B05\uFE0F \u4F46\u8FD9\u4F9D\u7136\u6D89\u53CA runtime \u6539\u9020\uFF0C\u73B0\u9636\u6BB5 ts \u5C31\u522B\u60F3\u4E86\uFF0C\u5F53\u7136 tc39 \u4E5F\u4E0D\u4F1A\u518D\u8003\u8651\u8FD9\u7C7B\u7279\u6027\u5C31\u662F\u4E86\uFF0C\u7B49\u4E00\u4E2A TypeScript Pro Max \u5427\u3002      "),
                        React.createElement(P, null, "\u5173\u4E8E namespace\uFF1A\u6709\u63A5\u89E6\u8FC7 go Rust C++ \u7684\u540C\u5B66\u5E94\u8BE5\u90FD\u6709\u4E86\u89E3\u4E86\uFF0C\u662F\u7528\u6765\u7BA1\u7406\u5305\u53CA\u8BED\u8A00\u7B26\u53F7\u7684\u7279\u6027\uFF0C\u662F\u4E1A\u5185\u6BD4\u8F83\u901A\u7528\u7684\u89E3\u51B3\u65B9\u6848\u3002"),
                        React.createElement(P, null, "\u5728 ESM \u843D\u5730\u4E4B\u524D\uFF0Cts \u6709\u5C1D\u8BD5\u53BB\u505A\u6EE1\u8840\u7248\u7684 namespace \u7279\u6027\uFF0C\u4F46\u662F\u7531\u4E8E\u91CD\u65B0\u786E\u5B9A\u4E86\u4E0D\u505A\u8FD0\u884C\u65F6\u7684\u60F3\u6CD5\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u7279\u6027\u5728\u6210\u719F\u4E4B\u524D\u5C31\u653E\u5F03\u8FED\u4EE3\u800C\u5168\u9762\u8F6C\u5411 ESM \u4E86\uFF0C\u81F3\u4ECA ts \u6E90\u7801\u91CC\u8FD8\u5927\u91CF\u4F7F\u7528 namespace \u6216\u8005\u7528 ESM \u6A21\u62DF\u51FA namesapce \u7279\u6027:"),
                        React.createElement(ImgDynamic, { file: image10 })),
                    React.createElement(H1Block, { id: "fxxk-js", title: "\u66B4\u8BBA\uFF1A\u5783\u573E JS \u5DF2\u7ECF\u4E25\u91CD\u5F71\u54CD TS \u7684\u6F14\u8FDB\u4E86" },
                        React.createElement(P, null, "\u4E0D\u5F97\u4E0D\u8BF4\uFF0Cts \u5982\u679C\u7EE7\u7EED\u6B7B\u78D5 js/tc39 \u800C\u653E\u5F03\u505A runtime feature\uFF0C\u6050\u6015\u73B0\u5728\u5DF2\u7ECF\u662F\u6700\u7EC8\u5F62\u6001\u4E86 ... \u4EE5\u540E\u4E0D\u4F1A\u6709\u66F4\u8FDB\u4E00\u6B65\u7684\u6F14\u8FDB\u4E86\uFF0C\u56E0\u4E3A\u76EE\u524D ts \u7C7B\u578B\u7CFB\u7EDF\u5DF2\u7ECF\u76F8\u5F53\u5B8C\u5584\u4E86\uFF0C\u751A\u81F3\u90E8\u5206\u80FD\u529B\u5176\u4ED6\u8BED\u8A00\u90FD\u6CA1\u6709\uFF0C\u6BD4\u5982 Union Types \u4EE5\u53CA\u9886\u5148\u5404\u5927\u53CB\u5546\u7684\u63A7\u5236\u6D41\u5206\u6790\u6280\u672F\uFF08\u7136\u800C\uFF0C2024 \u4E86 ts \u8FD8\u6CA1\u6709\u6EE1\u8840\u7248 ADT + \u6A21\u5F0F\u5339\u914D\uFF0C\u56E0\u4E3A\u8FD9\u5C5E\u4E8E runtime \u7279\u6027\uFF0C\u4E0D\u662F\u7B80\u5355\u64E6\u6389\u7C7B\u578B\u5C31\u80FD\u641E\u5B9A\u7684\uFF09"),
                        React.createElement(P, null, "\u5F53\u7136\uFF0C\u8FD1\u671F tc39 \u867D\u7136\u4E5F\u63D0\u4E86\u4E0D\u5C11\u65B0\u4E1C\u897F\u4F46\u662F\u6CA1\u6709\u9759\u6001\u7C7B\u578B\u7CFB\u7EDF\u5C31\u663E\u5F97\u8FD9\u4E9B\u7279\u6027\u76F8\u5F53\u9E21\u808B\u4EE5\u81F3\u4E8E\u5B83\u4EEC\u770B\u8D77\u6765\u5C31\u50CF\u662F ts39 \u4E00\u6837\uFF0C\u6BD4\u5982\u5907\u53D7\u5173\u6CE8\u7684 Record & Tuple \u5DF2\u7ECF\u5230 Stage 2 \u4E86\uFF1A"),
                        React.createElement(P, null,
                            React.createElement(Link, { href: 'https://github.com/tc39/proposal-record-tuple', block: true }, "tc39 - Record & Tuple")),
                        React.createElement(P, null, "\u4F46\u61C2\u5F97\u90FD\u61C2\u8FD9\u7279\u6027\u4E00\u770B\u5C31\u77E5\u9053\u660E\u663E\u5C31\u662F\u7ED9 ts \u8BBE\u8BA1\u7684\uFF0C\u7ED9 js \u7528\u8FD9\u4E2A\u7279\u6027\u8DDF\u5230\u5904\u4F20 void* \u4E00\u6837\u6CA1\u4EC0\u4E48\u533A\u522B\uFF0C\u56E0\u4E3A\u8FD9\u4E1C\u897F\u662F\u8FD0\u884C\u65F6\u5F3A\u7C7B\u578B\u7684\uFF0C\u4E5F\u5C31\u662F\u8BBF\u95EE one_record.x \u5982\u679C\u771F\u7684\u6CA1\u6709\u5B9A\u4E49 x \u90A3\u4E48\u4F1A\u76F4\u63A5\u629B\u51FA error \u7684\u800C\u4E0D\u662F\u8FD4\u56DE undefined"),
                        React.createElement(P, null, "\u6B64\u5916\u8FD9\u4E1C\u897F\u592A\u731B\u4E86\uFF0C\u51E0\u4E4E\u5C31\u662F\u4E00\u4E2A C \u8BED\u8A00\u7248\u7684 \u533F\u540D struct \u5B9A\u4E49\u5BF9\u8C61+\u5185\u5B58\u7ED3\u6784\u7684\u65B9\u6848\u4E86\uFF0C\u6211\u4F30\u8BA1\u5404\u5927\u6D4F\u89C8\u5668\u4F30\u8BA1\u90FD\u4E0D\u592A\u60F3\u641E\u8FD9\u4E2A \u2014\u2014 \u8FD9\u4E2A\u8981\u5927\u6539\u5F15\u64CE\u7684 js \u5BF9\u8C61\u6A21\u578B\u4E86\uFF0C\u5982\u679C\u771F\u80FD\u5B9E\u88C5\u6211\u5F88\u671F\u5F85\u5B83\u7684\u6027\u80FD\u8868\u73B0\u3002")),
                    React.createElement(H1Block, { id: "eof", title: "EOF" },
                        React.createElement(ImgDynamic, { width: "15em", file: image11 }),
                        React.createElement(P, null, "\u5C31\u76EE\u524D ts \u6E90\u7801\u4ED3\u5E93\u6765\u770B\uFF0Cjs \u81EA\u8EAB\u7684\u8BED\u8A00\u7279\u6027\u5DF2\u7ECF\u6781\u5176\u9650\u5236 ts \u5BF9\u5176\u81EA\u8EAB\u7684\u5B9E\u73B0\u4E86\uFF0C\u4F46\u662F ts \u53C8\u627F\u8BFA\u4E0D\u518D\u505A\u65B0\u7684 runtime \u7279\u6027\uFF0C\u53EA\u505A\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u8FD9\u5C31\u76F8\u5F53\u62E7\u5DF4\u4E86\uFF0C\u5C24\u5176\u662F\u4F53\u73B0\u5728 ts \u6E90\u7801\u91CC\uFF0C\u5305\u542B\u5927\u91CF\u975E\u4E3B\u6D41\u5B9E\u8DF5\uFF0C\u6709\u4E9B\u751A\u81F3\u53EF\u4EE5\u5F62\u5BB9\u4E3A\u9F8C\u9F8A: "),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "5 \u4E07\u884C\u66B4\u529B checkert.ts \u5305\u542B\u4E86\u5B8C\u6574\u5168\u90E8\u7684\u7C7B\u578B\u68C0\u67E5\u903B\u8F91"),
                            React.createElement(P, null, "\u5927\u91CF if-else \u7A7F\u63D2\uFF0C\u6CA1\u6709\u6A21\u5F0F\u5339\u914D\u76F8\u5F53\u4E0D\u723D"),
                            React.createElement(P, null, "\u4F4E\u914D\u6CE8\u91CA\u7248 named parameters (\u60B2)"),
                            React.createElement(P, null, "\u534A\u6210\u54C1\u7684 namespace \u6A21\u5757\u5316\u65B9\u6848 (\u81F3\u5C11 ESM \u662F\u4E0D\u6EE1\u8DB3 ts \u7684\u5DE5\u7A0B\u9700\u6C42\u7684, \u5F88\u591A\u4E1C\u897F\u90FD\u662F\u51D1\u4E0A\u53BB\u7684, \u4ECE\u6E90\u7801\u4E5F\u80FD\u770B\u51FA\u5904\u5904\u90FD\u5728\u9119\u89C6 esm)"),
                            React.createElement(P, null, "\u7F3A\u5C11\u9AD8\u6027\u80FD\u7F16\u8BD1\u540E\u7AEF, \u76EE\u524D ts \u7684\u7F16\u8BD1\u540E\u7AEF\u505A\u7684\u5F88\u8584, \u4E0D\u4F1A\u5BF9\u4EE3\u7801\u505A\u4E8C\u6B21\u4F18\u5316\u548C\u526A\u679D ... \u4F46 ts \u81EA\u8EAB\u5BF9\u6027\u80FD\u7684\u8981\u6C42\u76F8\u5F53\u9AD8, \u8FD9\u5757\u4E0D\u505A\u7684\u8BDD\u4EE3\u7801\u5C31\u4E0D\u5F97\u4E0D\u5230\u5904\u98DE var \u800C\u4E0D\u662F const \u548C let \u4E86"),
                            React.createElement(P, null, "\u65E0\u7C7B\u7F16\u7A0B\u4F46\u662F\u6CA1\u6709 impl ... js: \u7CDF\u4E86\u6211\u6210 C \u8BED\u8A00\u4E86"),
                            React.createElement(P, null, "\u7C7B\u578B\u7CFB\u7EDF\u6CA1\u6709\u53CD\u54FA\u4EE3\u7801\u751F\u6210\uFF0C\u6BD4\u5982\u9488\u5BF9 `for item of items` \u8FD9\u6837\u7684\u8BED\u53E5\u53EF\u4EE5\u57FA\u4E8E\u7C7B\u578B\u6765\u751F\u6210\u6700\u5408\u9002\u6700\u5FEB\u7684\u8FED\u4EE3\u4EE3\u7801\uFF0C\u4F46\u8FD9\u5757\u76EE\u524D\u4E5F\u662F\u6CA1\u6709\u505A\u7684 \u2014\u2014 \u4E3A\u4EC0\u4E48\u8981\u63D0\u8FD9\u4E00\u70B9\u56E0\u4E3A for-of \u6216\u8005 `... \u5C55\u5F00` \u8F6C\u6210 ES5 \u540E\u4F1A\u5E26\u4E0A generator \u90A3\u5957\u91CD\u578B\u65E0\u6808\u534F\u7A0B runtime\uFF0C\u5361\u5230\u98DE\u8D77")),
                        React.createElement(P, null, "\u4F46\u662F\uFF0C\u6E90\u7801\u5B9E\u73B0\u867D\u7136\u76F8\u5F53\u62E7\u5DF4\uFF0C\u800C ts \u6574\u4F53\u7684 compiler pipeline \u67B6\u6784\u8BBE\u8BA1\u5374\u76F8\u5F53\u6F02\u4EAE\u548C\u7B80\u6D01\uFF0C\u5C24\u5176\u662F transfomers \u548C anders \u8001\u7237\u5B50\u4E3B\u63A8\u7684 LSP \u6240\u5E26\u6765\u7684 IDE \u9769\u547D\uFF0C\u6709\u673A\u4F1A\u6211\u5355\u5F00\u4E00\u7BC7\u8C08\u8C08\u8FD9\u4E2A\uFF08\u6316\u5751"),
                        React.createElement(ImgDynamic, { width: "10em", file: image12 })));
            });

        })
    };
}));
