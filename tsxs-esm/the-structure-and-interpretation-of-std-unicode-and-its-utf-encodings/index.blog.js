System.register(['react', 'rally/@@', './utf8.js', './utf8-encode.js', './D800-DFFF.png.js', './vscode-onsave.png.js', './U_FEFF.png.js', './utf8-decode-error.png.js', './apple.svg.js', './unicode-bmp.png.js', './bmp-private-use-area.png.js', './utf16-encode.js'], (function (exports) {
    'use strict';
    var React, ImgDynamic, P, H1Block, H2, WindowApp, Link, Code, BufferView, Numbering, Quote, H3, metaBeauty, utils, NsUtf, utf8EncodeCodePoint, fileD800_DFFF, fileVSCodeOnSave, fileFEFF, fileUtf8DecodeError, fileApple, fileUnicodeBMP, fileBmpPrivateUseArea, utf16EncodeCodePoint;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            ImgDynamic = module.ImgDynamic;
            P = module.P;
            H1Block = module.H1Block;
            H2 = module.H2;
            WindowApp = module.WindowApp;
            Link = module.Link;
            Code = module.Code;
            BufferView = module.BufferView;
            Numbering = module.Numbering;
            Quote = module.Quote;
            H3 = module.H3;
            metaBeauty = module.metaBeauty;
            utils = module.utils;
        }, function (module) {
            NsUtf = module.NsUtf;
        }, function (module) {
            utf8EncodeCodePoint = module.utf8EncodeCodePoint;
        }, function (module) {
            fileD800_DFFF = module.default;
        }, function (module) {
            fileVSCodeOnSave = module.default;
        }, function (module) {
            fileFEFF = module.default;
        }, function (module) {
            fileUtf8DecodeError = module.default;
        }, function (module) {
            fileApple = module.default;
        }, function (module) {
            fileUnicodeBMP = module.default;
        }, function (module) {
            fileBmpPrivateUseArea = module.default;
        }, function (module) {
            utf16EncodeCodePoint = module.utf16EncodeCodePoint;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'the-structure-and-interpretation-of-std-unicode-and-its-utf-encodings',
                title: 'Unicode 标准及其 UTF 编码的构造和解释',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-03-31 19:50'),
            }));
            async function initialProps(context) {
                return {
                    codeUtf8EncodeCodePoint: await context.readText('./utf8-encode.tsx'),
                    codeUtf8Decode: await context.readText('./utf8-decode.tsx'),
                    codeUtf16EncodeCodePoint: await context.readText('./utf16-encode.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                React.useEffect(() => {
                    window.NsUtf = NsUtf;
                }, []);
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(ImgDynamic, { style: { float: 'right', marginLeft: '1em' }, width: "5em", file: fileApple }),
                        React.createElement(P, { sinking: true }, "\u957F\u4E45\u4EE5\u6765\u5BF9 unicode \u7684\u4E00\u4E9B\u7EC6\u8282\u8FD8\u662F\u4E0D\u591F\u6E05\u6670\uFF0C\u56E0\u6B64\u4ECA\u5929\u96C6\u4E2D\u6CE8\u610F\u529B\u6DF1\u5165\u7814\u7A76\u5E76\u5B9E\u73B0 Unicode \u6700\u5E38\u7528\u7684\u4E09\u79CD\u7F16\u7801 UTF-32/16/8 \u6765\u83B7\u5F97\u5B8C\u5168\u540C\u6B65 (\u8D85\u957F\u6587\u8B66\u544A)")),
                    React.createElement(H1Block, { id: "what-is-unicode", title: "Unicode \u662F\u4EC0\u4E48 ?" },
                        React.createElement(P, null, "Unicode \u4E0E\u4F17\u6240\u5468\u77E5\u7684 ASCII \u662F\u540C\u4E00\u7C7B\u7684\u4E1C\u897F\uFF0C\u662F\u5B57\u7B26\u7F16\u7801\u7684\u4E00\u79CD\u65B9\u6848\uFF0C\u53EF\u4EE5\u7528\u6765\u5C06 `\u5B57\u7B26\u5B9E\u4F53` \u7F16\u7801\u5230\u67D0\u4E2A\u6574\u6570\u7A7A\u95F4\u4E2D\uFF0C\u6BD4\u5982 Unicode \u91CC\u7684\u6570\u5B57 `0x0041` \u5BF9\u5E94\u7684\u662F `'A'`\uFF0C\u8BB0\u4F5C `U+0041`\uFF0C\u79F0\u4F5C `\u7801\u70B9 Code Point`"),
                        React.createElement(P, null, "\u622A\u6B62\u5230 2024\uFF0C\u5DF2\u7ECF\u6709\u4E0A\u767E\u4EBF\u8BBE\u5907\u4E0A\u8DD1\u7740 Unicode \u4E86\uFF0C\u662F\u8FD9\u4E2A\u661F\u7403\u4E0A\u6700\u5E38\u89C1\u7684\u5B57\u7B26\u7F16\u7801\u65B9\u6848\u4E86\uFF0C\u5982\u679C\u54EA\u5929\u53D1\u73B0\u4E86\u5916\u661F\u4EBA\u9700\u8981\u4F20\u70B9\u4EC0\u4E48\u4E1C\u897F\u8DDF\u4ED6\u4EEC\u505A\u6587\u5316\u4EA4\u6D41\uFF0C\u5B8C\u5168\u53EF\u4EE5\u5C06 Unicode \u6807\u51C6\u53D1\u7ED9\u4ED6\u4EEC\u3002"),
                        React.createElement(React.Fragment, null,
                            React.createElement(H2, null, "Unicode \u7801\u70B9 (Code Point)"),
                            React.createElement(P, null, "\u6240\u8C13\u7801\u70B9\u5C31\u662F\u6211\u524D\u9762\u63D0\u5230\u7684\u90A3\u4E2A\u6570\u5B57\u4E86\uFF0CUnicode \u89C4\u8303\u91CC\u7684\u6BCF\u4E00\u4E2A\u5B57\u7B26\u5B9E\u4F53\u90FD\u6709\u552F\u4E00\u7684\u300C\u6574\u6570\u300D\u4F5C\u4E3A\u5176\u7801\u70B9\u3002"),
                            React.createElement(P, null, "\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0A\u90FD\u652F\u6301 Unicode \u7F16\u7801\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u5728\u7F51\u9875\u4E0A\u8F93\u5165\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\u90FD\u5BF9\u5E94\u4E00\u4E2A\u7801\u70B9\uFF0C\u5728\u4E0B\u9762\u8FD9\u4E2A Demo \u4E2D\u53EF\u4EE5\u8F93\u5165\u5B57\u7B26\u4E32\u5E76\u5C06\u5176\u8F6C\u4E3A\u5BF9\u5E94\u7801\u70B9\u4FE1\u606F, \u53EF\u4EE5\u8BD5\u8BD5"),
                            React.createElement(WindowApp, { height: "auto" },
                                React.createElement("div", { style: { padding: '2em' } },
                                    React.createElement(StringToCharCodeDemo, { initial: "ECZN" })))),
                        React.createElement(React.Fragment, null,
                            React.createElement(H2, null, "Unicode \u7F16\u7801\u7A7A\u95F4 (Encoding-Space)"),
                            React.createElement(P, null, "\u4ECE Unicode \u89C4\u8303\u6765\u770B\uFF0C\u5B57\u7B26\u6240\u5BF9\u5E94\u7684\u6574\u6570\u300C\u7801\u70B9\u300D\u5E94\u8BE5\u662F\u4E00\u4E2A 4 \u5B57\u8282\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u5176\u7F16\u7801\u7A7A\u95F4\u76F8\u5F53\u5927\uFF0C\u5373 2^32 \u8FD9\u4E48\u5927\uFF0C\u4F46\u662F\u5728\u8FD9\u4E48\u5927\u7684\u5BB9\u91CF\u76EE\u524D\u5176\u5B9E\u53EA\u7528\u4E86\u4E00\u767E\u4E00\u5341\u591A\u4E07\u800C\u5DF2\uFF0C\u800C\u4E14\u5728\u8FD9 100 \u591A\u4E07\u91CC\u9762\u8FD8\u6709\u5F88\u591A\u8FD8\u6CA1\u7528\u4E0A\u5462\uFF0C\u53EA\u662F\u9884\u5148\u5212\u5206\u51FA\u6765\u4E86\u3002"),
                            React.createElement(P, null, "Unicode \u6807\u51C6\u7EC4\u7EC7\u4E3A\u4E86\u7BA1\u7406\u4E0A\u7684\u65B9\u4FBF\uFF0C\u63D0\u51FA\u4E86\u4E24\u79CD\u5212\u5206\u8FD9\u4E2A\u6574\u6570\u7A7A\u95F4\u7684\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F Unicode \u5E73\u9762\u5212\u5206\uFF0C\u4E00\u79CD\u662F Unicode \u533A\u5757\u5212\u5206\u3002"),
                            React.createElement(H2, null, "Unicode \u5E73\u9762\u5212\u5206 (Plane)"),
                            React.createElement(P, null, "\u5C06\u7801\u70B9\u7684\u6574\u6570\u7A7A\u95F4\u4EE5 65536 (\u5373 0x0 \u5230 0xFFFF) \u7684\u957F\u5EA6\u6765\u5C06\u8FD9\u4E2A\u56DB\u5B57\u8282\u6574\u6570\u5206\u5272\u6210\u4E0D\u540C\u7684\u533A\u95F4\uFF0C\u5728\u89C4\u8303\u91CC\u8FD9\u4E9B\u533A\u95F4\u7684\u5B66\u540D\u53EB\u505A\u5E73\u9762"),
                            React.createElement(P, null, "\u800C\u8FD9 4 \u5B57\u8282\u8BC1\u4E66\u5BB9\u91CF\u4E3A 2^32 \u5373 4294967296\u3002\u82E5\u4EE5 65536 \u4E3A\u533A\u95F4\u5212\u5206\u7684\u8BDD\u521A\u597D\u4E5F\u80FD\u5212\u5206\u51FA 65536 \u4E2A\u5E73\u9762\uFF0C\u5373 `0x0000xxxx ~ 0xFFFFxxxx`\uFF08xxxx \u4E3A\u5E73\u9762\u5185\u7684\u504F\u79FB\uFF09"),
                            React.createElement(P, null, "\u6BD4\u5982\u6700\u5F00\u5934\u7684\u7B2C\u4E00\u4E2A\u533A\u95F4 `U+00000000` \u5230 `U+0000FFFF` \u662F\u7B2C\u4E00\u4E2A\u5E73\u9762\uFF0C\u53EB\u505A BMP\uFF0C\u82F1\u6587\u662F Basic Multilingual Plane, \u91CC\u9762\u5305\u542B\u4E86\u6700\u5E38\u7528\u7684 65536 \u4E2A\u5B57\u7B26\uFF0C\u800C\u5728\u5176\u4E2D\u6700\u524D\u9762\u7684 128 \u4E2A\u7801\u70B9\u542B\u4E49\u8DDF ASCII \u7F16\u7801\u4FDD\u6301\u4E00\u81F4\uFF0C\u4EE5\u6B64\u6765\u4FDD\u8BC1\u80FD\u5411\u4E0B\u517C\u5BB9 ASCII"),
                            React.createElement(P, null, "\u518D\u6BD4\u5982\uFF0C\u7B2C\u4E8C\u4E2A\u5E73\u9762\u662F `U+010000` \u5230 `U+01FFFF`, \u540D\u5B57\u662F SMP \u5E73\u9762\uFF0C\u82F1\u6587\u662F Supplementary Multilingual Plane, \u5B57\u9762\u610F\u601D\u662F\u591A\u8BED\u79CD\u8F85\u52A9\u5E73\u9762"),
                            React.createElement(P, null, "\u76EE\u524D Unicode \u5B98\u65B9\u5B9A\u4E49\u4E86 17 \u4E2A\u5E73\u9762, \u5373 `U+00xxxx` \u5230 `U+10xxxx`\uFF0C\u8FD9\u4E2A\u6570\u91CF\u5176\u5B9E\u76F8\u5F53\u5C0F\uFF0C\u56E0\u6B64\u4E66\u5199\u7801\u70B9\u7684\u65F6\u5019\u901A\u5E38\u4F1A\u5C06\u524D\u9762\u7684 0 \u7701\u7565\u6389\uFF0C\u6BD4\u5982\u7B2C\u4E00\u5E73\u9762 BMP \u7684\u8303\u56F4\u662F: `U+0000` \u5230 `U+FFFF`\uFF1B\u53C8\u6BD4\u5982\u86CB\u7CD5\u7684 emoji `\uD83C\uDF70` \u8FD9\u4E2A\u5B57\u7B26\u7684\u7801\u70B9\u662F `U+1F370` \u56E0\u6B64\u5B83\u4F4D\u4E8E\u7B2C\u4E8C\u5E73\u9762 `SMP`"),
                            React.createElement(P, null, "\u6216\u8BB8\u4F60\u5DF2\u7ECF\u53D1\u73B0\u4E86\uFF0C\u6309 65536 \u4E3A\u533A\u95F4\u5212\u5206\u7684\u597D\u5904\u4E86\uFF0C\u5C31\u662F\u4EE5 16 \u8FDB\u5236\u8868\u793A\u7684\u65F6\u5019\uFF0C\u6700\u4F4E 4 \u4F4D\u5C31\u662F\u5E73\u9762\u5185\u7684\u504F\u79FB\uFF0C\u9AD8\u4F4D\u5219\u662F\u5E73\u9762\u7684\u5E8F\u53F7\uFF0C\u6BD4\u5982 `U+00xxxx` \u662F\u7B2C\u4E00\u5E73\u9762 BMP\uFF1B `U+01xxxx` \u662F\u7B2C\u4E8C\u5E73\u9762 SMP \u4EE5\u6B64\u7C7B\u63A8\uFF0C\u4E0B\u9762\u662F\u5B98\u65B9\u5B9A\u4E49\u7684\u5341\u4E03\u4E2A\u5E73\u9762\u5B9A\u4E49\uFF0C\u5176\u4E2D 4 \u53F7 \u5230 13 \u53F7\u53EA\u662F\u5206\u914D\u4E86\u4F46\u8FD8\u6CA1\u7528\u5230\uFF1A"),
                            React.createElement(Table, { fields: [
                                    { key: 'nth', desc: '平面编号', style: { width: '5em' } },
                                    { key: 'range', desc: '码点区间', tdStyle: { fontFamily: 'var(--fontCode)' } },
                                    { key: 'en', desc: '英文名' },
                                    { key: 'cn', desc: '中文名' },
                                ], data: [
                                    {
                                        nth: '0 号平面',
                                        range: 'U+000000 - U+00FFFF',
                                        en: 'BMP: Basic Multilingual Plane',
                                        cn: '基本多文种平面',
                                    },
                                    {
                                        nth: '1 号平面',
                                        range: 'U+010000 - U+01FFFF',
                                        en: 'SMP: Supplementary Multilingual Plane',
                                        cn: '多文种补充平面',
                                    },
                                    {
                                        nth: '2 号平面',
                                        range: 'U+020000 - U+02FFFF',
                                        en: 'SIP: Supplementary Ideographic Plane',
                                        cn: '表意文字补充平面',
                                    },
                                    {
                                        nth: '3 号平面',
                                        range: 'U+030000 - U+03FFFF',
                                        en: 'TIP: Tertiary Ideographic Plane',
                                        cn: '表意文字第三平面',
                                    },
                                    {
                                        nth: '4 号平面 ~ 13 号平面',
                                        range: 'U+040000 - U+0DFFFF',
                                        en: '已分配，但尚未使用',
                                        cn: '/',
                                    },
                                    {
                                        nth: '14 号平面',
                                        range: 'U+0E0000 - U+0EFFFF',
                                        en: 'SSP: Supplementary Special-purpose Plane',
                                        cn: '特别用途补充平面',
                                    },
                                    {
                                        nth: '15 号平面',
                                        range: 'U+0F0000 - U+0FFFFF',
                                        en: 'PUA-A: Private Use Area-A',
                                        cn: '保留作为私人使用区 (A区)',
                                    },
                                    {
                                        nth: '16 号平面',
                                        range: 'U+100000 - U+10FFFF',
                                        en: 'PUA-B: Private Use Area-B',
                                        cn: '保留作为私人使用区 (B区)',
                                    },
                                ] }),
                            React.createElement(P, null, "\u66F4\u5177\u4F53\u5E73\u9762\u7684\u5B8C\u6574\u5206\u914D\u89C4\u5219\u53EF\u4EE5\u67E5\u770B\u89C4\u8303\u5B98\u7F51\uFF1A"),
                            React.createElement(P, null,
                                React.createElement(Link, { block: true, href: "https://www.unicode.org/roadmaps/index.html" }, "Unicode Roadmap Define"))),
                        React.createElement(React.Fragment, null,
                            React.createElement(H2, null, "Unicode \u533A\u5757 (block)"),
                            React.createElement(P, null, "Block \u662F\u5BF9 Plane \u8FDB\u4E00\u6B65\u7684\u5212\u5206\uFF0C\u6BD4\u5982\u5728 BMP 0x0000~0xFFFF \u8FD9\u4E2A\u5E73\u9762\u4E2D\uFF0C\u6700\u5F00\u59CB\u7684 128 \u4F4D\u662F ASCII \u7F16\u7801, \u4ECE\u5B98\u7F51\u7ED9\u51FA\u7684 Plane \u5212\u5206\u6765\u770B\uFF0C\u533A\u5757\u5C31\u662F\u8868\u683C\u4E0A\u7684\u8FD9\u4E9B\u683C\u5B50\uFF1A"),
                            React.createElement(ImgDynamic, { file: fileUnicodeBMP }),
                            React.createElement(P, null, "\u5176\u4E2D\u6700\u5F00\u5934\u7684 C0-Controls \u52A0\u4E0A Basic Latain \u5176\u5B9E\u5C31\u5BF9\u5E94\u4E86 ASCII \u7F16\u7801\uFF0C\u800C\u6C49\u5B57\u7F16\u7801\uFF0C\u4E3B\u8981\u5B58\u5230 CKJ \u533A\u5757\u4E2D\u7B49\u7B49 \u2014\u2014 \u603B\u4E4B\u533A\u5757\u662F\u5BF9\u5E73\u9762\u7684\u518D\u5212\u5206\uFF0C\u4E00\u4E2A\u5E73\u9762\u4E0A\u53EF\u4EE5\u6709\u5F88\u591A\u533A\u5757\uFF0C\u5177\u4F53\u533A\u5757\u53EF\u4EE5\u770B Unicode \u5B98\u7F51\u8BF4\u660E"),
                            React.createElement(P, null,
                                React.createElement(Link, { block: true, href: "https://www.unicode.org/roadmaps/index.html" }, "Unicode Roadmap Define")),
                            React.createElement(P, null, "\u524D\u9762 Unicode \u5E73\u9762\u91CC\u7684 15 \u548C 16 \u53F7\u5E73\u9762\u662F\u6240\u8C13\u7684 `A\u533A` \u548C `B\u533A` \u8FD9\u4E24\u4E2A\u533A\u95F4\u662F\u4FDD\u7559\u7ED9\u5F00\u53D1\u8005\u968F\u610F\u5B9A\u4E49\u7684\u3002\u800C\u9664\u4E86\u8FD9\u4E24\u4E2A\u5E73\u9762\u5916\uFF0C\u5728\u7B2C\u4E00\u5E73\u9762 BMP \u5185\u4E0B\u9762\u8FD9\u4E2A\u533A\u5757 0xE000 ~ 0xF8FF \u4E5F\u662F\u4E00\u6837\u7684\u529F\u80FD\uFF0C\u7528\u6765\u7528\u4F5C private use \u7684\uFF0C\u5171\u8BA1 6400 \u4E2A\uFF1A"),
                            React.createElement(ImgDynamic, { file: fileBmpPrivateUseArea }),
                            React.createElement(P, null, "\u6BD4\u5982\u82F9\u679C\u7CFB\u7EDF\u7684\u300C\uF8FF U+F8FF\u300D\u56FE\u6807\u5C31\u662F\u5728\u4E0A\u9762\u8FD9\u4E2A Block \u5185\u7684\uFF1A(\u6CE8\u610F\u5982\u679C\u4F60\u4E0D\u662F\u82F9\u679C\u7CFB\u7EDF\u770B\u4E0D\u5230\u8FD9\u4E2A \uD83C\uDF4E \u5B57\u7B26)"),
                            React.createElement(WindowApp, { height: "auto" },
                                React.createElement("div", { style: { padding: '2em' } },
                                    React.createElement(StringToCharCodeDemo, { initial: "\uF8FF\uD83C\uDF4E" }))))),
                    React.createElement(H1Block, { id: "UTF-8", title: "UTF-32" },
                        React.createElement(P, null, "\u4ECB\u7ECD\u5B8C\u524D\u9762\u7684\u7801\u70B9\u548C\u7801\u70B9\u7F16\u7801\u7A7A\u95F4\u7684\u5E73\u9762\u548C\u533A\u5757\u5206\u914D\u540E\uFF0C\u6211\u4EEC\u6765\u8BA8\u8BBA\u4E00\u4E0B\u5982\u4F55\u5C06\u7801\u70B9\u7F16\u7801\u6210\u5B57\u8282\u6D41 \u2014\u2014 \u8FD9\u4E2A\u5DE5\u4F5C\u51E0\u4E4E\u662F unicode \u76F8\u5173\u5F00\u53D1\u4E2D\u6700\u6838\u5FC3\u6700\u91CD\u8981\u7684\u90E8\u5206\uFF0C\u5373\u5C06\u7801\u70B9\u7F16\u7801\u6210\u5B57\u8282\u6D41\uFF0C\u6216\u8005\u53CD\u8FC7\u6765\u5C06\u5B57\u8282\u6D41\u89E3\u6790\u4E3A\u7801\u70B9"),
                        React.createElement(P, null, "\u524D\u9762\u63D0\u5230\uFF0C\u4E00\u4E2A\u7801\u70B9\u5C31\u662F\u4E00\u4E2A uint32\uFF0C\u56E0\u6B64\u4E00\u4E2A\u4E00\u773C\u4E01\u771F\u7684 unicode \u7F16\u7801\u529E\u6CD5\u5C31\u662F\u5C06\u6240\u6709\u7801\u70B9\u8F6C\u6210 4 \u5B57\u8282\u65E0\u7B26\u53F7\u6574\u6570 \u2014\u2014 \u800C\u8FD9\u6837\u7684\u7F16\u7801\u65B9\u5F0F\u5C31\u662F UTF-32\uFF0C\u5B83\u4E5F\u56E0\u6B64\u5F97\u540D 32"),
                        React.createElement(P, null, "\u6BD4\u5982\u8BF4\u5C06 `\"Hello, \u4E16\u754C\"` \u8868\u8FBE\u6210\u5BF9\u5E94\u7801\u70B9\u5E76\u5BF9\u9F50\u5230 4 \u5B57\u8282\u6574\u6570"),
                        React.createElement(Code, { lang: 'tsx', source: `
        字符    码点    对齐到 4 字节整数
        'H' => U+48 => 0x00000048
        'e' => U+65 => 0x00000065
        'l' => U+6C => 0x0000006C
        'l' => U+6C => 0x0000006C
        'o' => U+6F => 0x0000006F
        ',' => U+2C => 0x0000002C
        ' ' => U+20 => 0x00000020
        '世' => U+4E16 => 0x00004E16
        '界' => U+754C => 0x0000754C
      ` }),
                        React.createElement(P, null, "\u518D\u5C06\u4E0A\u8FF0\u5BF9\u9F50\u540E\u7684\u6574\u6570\u62FC\u63A5\u5728\u4E00\u8D77\u5F97\u5230\u8FD9\u6837\u4E00\u6BB5 Buffer \u4F5C\u4E3A UTF-32 \u5B57\u8282\u6D41\uFF1A"),
                        React.createElement(BufferView, { download: "UTF-32 \u4F8B\u5B50 (\u5927\u7AEF).txt", defaultIndex: 7, int8: [
                                0x00, 0x00, 0xFE, 0xFF,
                                0x00, 0x00, 0x00, 0x48,
                                0x00, 0x00, 0x00, 0x65,
                                0x00, 0x00, 0x00, 0x6C,
                                0x00, 0x00, 0x00, 0x6C,
                                0x00, 0x00, 0x00, 0x6F,
                                0x00, 0x00, 0x00, 0x2C,
                                0x00, 0x00, 0x00, 0x20,
                                0x00, 0x00, 0x4E, 0x16,
                                0x00, 0x00, 0x75, 0x4C,
                            ] }),
                        React.createElement(P, null, "\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u5F00\u5934\u7684\u56DB\u4E2A\u5B57\u8282 `0x0000FEFF` \u8C8C\u4F3C\u6CA1\u6709\u7528\u5230\uFF0C\u5B9E\u9645\u8FD9\u56DB\u4E2A\u5B57\u8282\u53EB\u505A UTF BOM (Byte Order Mark) \u662F\u7528\u6765\u6807\u8BB0\u5B57\u8282\u5E8F\u7684\uFF0C\u6B64\u5904\u8868\u660E\u662F\u5927\u7AEF\u5B57\u8282\u5E8F\uFF0C\u8868\u793A\u9AD8\u4F4D\u5B57\u8282\u5B58\u50A8\u5728\u5DE6\u8FB9\uFF0C\u800C\u5982\u679C\u662F `0xFEFF0000` \u5219\u4EE3\u8868\u662F\u5C0F\u7AEF\u5B58\u50A8\uFF0C\u6B64\u65F6\u9AD8 16 \u4F4D\u548C\u4F4E 16 \u4F4D\u987A\u5E8F\u8981\u8C03\u8F6C\u4E00\u4E0B\uFF0C\u5373\uFF1A"),
                        React.createElement(BufferView, { download: "UTF-32 \u4F8B\u5B50 (\u5C0F\u7AEF).txt", int8: [
                                0xFE, 0xFF, 0x00, 0x00,
                                0x00, 0x48, 0x00, 0x00,
                                0x00, 0x65, 0x00, 0x00,
                                0x00, 0x6C, 0x00, 0x00,
                                0x00, 0x6C, 0x00, 0x00,
                                0x00, 0x6F, 0x00, 0x00,
                                0x00, 0x2C, 0x00, 0x00,
                                0x00, 0x20, 0x00, 0x00,
                                0x4E, 0x16, 0x00, 0x00,
                                0x75, 0x4C, 0x00, 0x00,
                            ] }),
                        React.createElement(P, null, "\u4E0A\u8FF0\u4E24\u79CD\u5B57\u8282\u5E8F\u90FD\u53EF\u4EE5\u4E0B\u8F7D\u4E0B\u6765\u770B\u770B (\u6CE8\u610F VSCode \u76EE\u524D\u5E76\u4E0D\u652F\u6301 UTF-32 \u7F16\u7801, mac \u7684\u8BDD\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684\u7F16\u8F91\u5668\u5C31\u884C\u4E86, vim \u4E5F\u53EF\u4EE5)"),
                        React.createElement(P, null, "\u770B\u5230\u8FD9\u91CC\u53EF\u80FD\u5F88\u591A\u4EBA\u4F1A\u95EE\uFF1AFEFF \u662F\u968F\u4FBF\u5199\u7684\u5417\uFF1F\u2014\u2014 \u6D89\u53CA\u5230\u540E\u6587\u7684\u6982\u5FF5\uFF0C\u53EF\u4EE5\u5148\u5FFD\u7565\uFF0C\u540E\u6587\u4F1A\u89E3\u7B54")),
                    React.createElement(H1Block, { id: "UTF-16", title: "UTF-16" },
                        React.createElement(P, null, "\u7531\u4E8E UTF-32 \u662F\u4E00\u79CD\u5B9A\u957F\u7F16\u7801\uFF0C\u7F3A\u70B9\u5C31\u662F\u6BD4\u8F83\u5927\uFF0C\u5E76\u6CA1\u6709\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u5B9E\u9645\u573A\u666F\u4E2D\u7528\u7684\u6BD4\u8F83\u591A\u7684\u662F utf16 \u548C utf8\uFF0C\u73B0\u5728\u6765\u770B\u770B utf16 \u662F\u600E\u4E48\u7F16\u7801\u7684\u5427"),
                        React.createElement(P, null, "\u8003\u8651\u5230\u5927\u591A\u6570\u4EBA\u53EA\u4F7F\u7528\u7B2C\u4E00\u5E73\u9762\uFF0C\u5373 0x0000-0xFFFF, utf16 \u5C31\u662F\u9488\u5BF9\u8FD9\u79CD\u73B0\u8C61\u8FDB\u884C\u7F16\u7801\u8BBE\u8BA1"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "\u60C5\u51B5\u4E00\uFF1A\u7B2C\u4E00\u5E73\u9762 BMP \u5185\u7684\u5B57\u7B26\uFF0C\u5373 0x000000-0x00FFFF \u4E2D\u7684\u5B57\u7B26\u76F4\u63A5\u7528 2 \u5B57\u8282\u5B58\u50A8\uFF0C\u5373\u76F4\u63A5\u5B58\u50A8\u4F4E 16 \u4F4D\u5373\u53EF"),
                            React.createElement(P, null, "\u60C5\u51B5\u4E8C\uFF1A\u540E\u7EED 16 \u4E2A\u5E73\u9762\uFF0C\u5373 0x010000-0x10FFFF \u4E2D\u7684\u5B57\u7B26\u4F7F\u7528 4 \u5B57\u8282\u5B58\u50A8"),
                            React.createElement(P, null, "\u5176\u4ED6\u60C5\u51B5\uFF1A\u5927\u4E8E 0x10FFFF \u7684\u65E0\u6CD5\u4F7F\u7528 UTF-16 \u8FDB\u884C\u7F16\u7801")),
                        React.createElement(P, null, "\u90A3\u4E48\uFF0C\u5F53\u6211\u6B63\u5728\u5904\u7406\u4E00\u6BB5\u5B57\u8282\u6D41\u7684\u65F6\u5019\uFF0C\u6BD4\u5982\u6211\u8BFB\u53D6\u5230 0xABCD\uFF0C\u6B64\u65F6\u8981\u600E\u4E48\u5224\u65AD\u8BFB\u53D6\u7684\u8FD9\u4E24\u4E2A\u5B57\u8282\u662F\u5BF9\u5E94\u60C5\u51B5\u4E00\u8FD8\u662F\u60C5\u51B5\u4E8C\u7684\u56DB\u5B57\u8282\u7684\u524D\u534A\u90E8\u5206\u5462\uFF1F"),
                        React.createElement(P, null, "\u8FD9\u91CC\u770B\u4F3C\u65E0\u89E3\uFF0C\u4F46\u662F Unicode \u6807\u51C6\u5355\u72EC\u7ED9\u7B2C\u4E00\u5E73\u9762\u6316\u4E86\u4E00\u6BB5 Block \u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1A\u5728\u7B2C\u4E00\u5E73\u9762 0x0000 - 0xFFFF \u4E2D\u7684 0xD800 - 0xDFFF \u8FD9\u6BB5\u5E76\u6CA1\u6709\u7F16\u7801\u542B\u4E49\uFF0C\u800C\u662F\u4FDD\u7559\u7ED9 UTF-16 \u6765\u4F7F\u7528\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileD800_DFFF }),
                        React.createElement(P, null, "\u5229\u7528\u8FD9\u4E2A\u533A\u5757\uFF0C\u5177\u4F53\u4E00\u70B9\u6765\u8BF4\u5728\u5904\u7406\u5B57\u8282\u6D41\u4E24\u5B57\u8282\u4E24\u5B57\u8282\u8FDB\u884C\u8BFB\u53D6\u89E3\u6790\u7684\u65F6\u5019\uFF0C\u5982\u679C\u8BFB\u53D6\u7684\u4E24\u4E2A\u5B57\u8282\u4E0D\u5728\u8FD9\u4E2A\u533A\u95F4\uFF0C\u5C31\u662F\u60C5\u51B5\u4E00\uFF0C\u6BD4\u5982\u524D\u9762\u7684 0xABCD \u5C31\u4E0D\u5728\u8FD9\u4E2A\u533A\u95F4\uFF0C\u56E0\u6B64\u5E94\u8BE5\u5C06\u5176\u5F53\u4F5C\u60C5\u51B5\u4E00\u6765\u5904\u7406\uFF1B\u800C\u5982\u679C\u9047\u5230\u5728\u8FD9\u4E2A\u533A\u95F4\u5185\u7684\u65F6\u5019\uFF0C\u8BF4\u660E\u6B64\u65F6\u8BFB\u53D6\u7684\u4E0D\u662F\u7B2C\u4E00\u5E73\u9762\u5185\u7684\u7801\u70B9\uFF0C\u5E94\u8BE5\u6309\u60C5\u51B5\u4E8C\u6765\u5904\u7406\uFF0C\u6B64\u65F6\u989D\u5916\u8BFB\u53D6\u540E\u4E24\u4E2A\u5B57\u8282\u7EC4\u6210\u56DB\u4E2A\u5B57\u8282\u6765\u89E3\u6790\u3002"),
                        React.createElement(P, null, "\u518D\u8FDB\u4E00\u6B65\u6765\u770B\uFF0C\u60C5\u51B5\u4E8C\u4E2D\u63D0\u5230\u7528 4 \u4E2A\u5B57\u8282\u6765\u7F16\u7801\uFF0C\u8FD9 4 \u5B57\u8282\u53C8\u5206\u4E3A\u524D\u540E\u4E24\u4E2A\u90E8\u5206\uFF0C\u6BCF\u4E2A\u90E8\u5206\u5404 2 \u4E2A\u5B57\u8282\uFF0C\u5BF9\u4E8E\u8FD9\u300C2 \u4E2A\u5B57\u8282\u300D\u5982\u679C\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u4F4D\u4E8E high-half surrogates \u4E2D\uFF0C\u79F0\u4E3A\u9AD8\u4EE3\u7406\uFF1B\u8303\u56F4\u662F 0xD800 - 0xDBFF, \u6362\u6210\u4E8C\u8FDB\u5236\u4E3A 110110/0000000000 - 110110/1111111111\uFF0C\u5373\u4EE5 0b110110 \u5F00\u5934\u7684\u60C5\u51B5\u4E3A\u9AD8\u4EE3\u7406"),
                            React.createElement(P, null, "\u4F4D\u4E8E low-half surrogates \u4E2D\uFF0C\u79F0\u4E3A\u4F4E\u4EE3\u7406\uFF1B\u8303\u56F4\u662F 0xDC00 - 0xDFFF\uFF0C\u6362\u6210\u4E8C\u8FDB\u5236\u4E3A 110111/0000000000 - 110111/1111111111\uFF0C\u5373\u4EE5 0b110111 \u5F00\u5934\u7684\u60C5\u51B5\u4E3A\u4F4E\u4EE3\u7406"),
                            React.createElement(P, null, "\u9AD8\u4F4E\u4EE3\u7406\u4E2D\u7684\u4F4E 10 \u4F4D\u662F\u6709\u6548\u4F4D\uFF0C\u4E00\u5171 20 \u4F4D\u5C06\u5176\u53D6\u51FA\u62FC\u63A5\u5728\u4E00\u8D77\u5B58\u50A8\u4E3A TMP"),
                            React.createElement(P, null, "UTF-16 \u6807\u51C6\u89C4\u5B9A TMP = \u7801\u70B9 - 0x10000, \u6B64\u65F6\u5C06 TMP \u52A0\u4E0A 0x10000 \u5373\u53EF\u5F97\u5230\u7801\u70B9 (\u540E\u9762\u4F1A\u8BF4\u4E3A\u4EC0\u4E48\u8981\u51CF\u53BB 0x10000)")),
                        React.createElement(P, null, "\u60C5\u51B5\u4E8C\u7684 4 \u4E2A\u5B57\u8282\u5206\u6210\u524D\u540E\u4E24\u90E8\u5206\uFF0C\u5176\u4E2D\uFF0C\u524D\u9762\u4E24\u4E2A\u5B57\u8282\u7684\u524D 6 \u4F4D\u4E8C\u8FDB\u5236\u56FA\u5B9A\u4E3A 110110\uFF0C\u540E\u9762\u4E24\u4E2A\u5B57\u8282\u7684\u524D 6 \u4F4D\u4E8C\u8FDB\u5236\u56FA\u5B9A\u4E3A 110111, \u524D\u540E\u90E8\u5206\u5404\u5269\u4F59 10 \u4F4D\u4E8C\u8FDB\u5236\u662F\u7801\u70B9\u51CF\u53BB 0x10000 \u7684\u7ED3\u679C \u2014\u2014 \u4E5F\u5C31\u662F\u8BF4\u901A\u8FC7\u653E\u5F03 BMP \u7684\u4E00\u90E8\u5206\u7A7A\u95F4\uFF0C\u5C06\u4E24\u4E2A\u4EE3\u7406\u7684\u4F4E 10 \u4F4D\u62FC\u63A5\u6765\u7F16\u7801\u5176\u4ED6\u5E73\u9762\u7684\u7801\u70B9\u3002"),
                        React.createElement(P, null, "\u597D\u5427\uFF0C\u770B\u5230\u8FD9\u91CC\u4F30\u8BA1\u90FD\u88AB\u7ED5\u6655\u4E86\uFF0C\u6211\u4E0A\u9762\u5199\u7684\u89C4\u5219\u8C8C\u4F3C\u5F88\u590D\u6742\uFF0C\u5176\u5B9E\u5B9E\u9645\u5F88\u597D\u7406\u89E3\uFF0C\u5173\u952E\u5728\u4E8E\u300C\u653E\u5F03 BMP \u7684\u4E00\u90E8\u5206\u7A7A\u95F4\uFF0C\u7528\u4E24\u4E2A\u4EE3\u7406\u7684\u65B9\u5F0F\u51D1\u51FA 20 \u4F4D\u6765\u7F16\u7801\u5176\u4ED6\u5E73\u9762\u7684\u7801\u70B9\u300D"),
                        React.createElement(P, null, "\u8FD9\u91CC\u624B\u628A\u624B\u7ED9\u4E00\u4E2A\u4F8B\u5B50\uFF1A\u6211\u5C06\u4EE5\u4E0B\u9762 `\uD83C\uDF70 (U+1F370)` \u8FD9\u4E2A emoji \u6765\u8BF4\u660E\u5982\u4F55\u5C06\u5176\u7801\u70B9 0x1F370 \u7F16\u7801\u4E3A UTF-16 \u5B57\u8282\u6D41\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        // ⬇️ 🍰 的 unicode 码点 (0x1F370 的二进制形式)
        　  1 11110011 01110000   // ⬅️ 码点需要先减去 0x10000
        　- 1 00000000 00000000   //
        　----------------------- // ⬇️ 高代理（两字节） ⬇️ 低代理（两字节）
        　    11110011 01110000    1101100000111100  1101111101110000
        　    aaaaaabb bbbbbbbb    HHHHHH****aaaaaa  LLLLLLbbbbbbbbbb
        　                         将高低代理对写在一起就构成四字节的 utf16
        　                         0xD83C 0xDF70
        　// ⚠️ 注意:
        　// 1. HHHHHH 代表固定的高代理头, 110110 (0xD800 到 0xDBFF)
        　//    LLLLLL 代表固定的低代理头, 110111
        　// 2. 上述标 a 标 b 的部分其实就对应右边的标 a 标 b 部分,
        　//    从低位往左边填充，填完就就填 0 （也就是标星号 * 的那部分）
      ` }),
                        React.createElement(P, null, "\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\u6807 * \u7684\u90E8\u5206\u5B9E\u9645\u4E0A\u5C31\u662F\u5E73\u9762\u7684\u5E8F\u53F7\u51CF\u4E00\uFF0C\u8FD9\u4E5F\u8BF4\u660E\u4E86\u4E3A\u4EC0\u4E48\u8981\u51CF\u53BB 0x10000\uFF1A\u907F\u514D\u5728\u9AD8\u4F4E\u4EE3\u7406\u5BF9\u7684 20 \u4F4D\u6574\u6570\u7A7A\u95F4\u4E2D\u91CD\u590D\u7F16\u7801\u7B2C\u4E00\u5E73\u9762\uFF0C\u800C\u7531\u4E8E\u6700\u591A\u53EA\u80FD\u5E26 20 \u4F4D\uFF0C\u56E0\u6B64\u5927\u4E8E 0x100000 \u7684\u7801\u70B9\u662F\u4E0D\u80FD\u7528 UTF-16 \u8FDB\u884C\u7F16\u7801\u7684\u3002"),
                        React.createElement(H2, null, "\u5B9E\u73B0 utf16EncodeCodePoint"),
                        React.createElement(P, null, "\u6839\u636E\u524D\u9762\u7684\u8BA8\u8BBA\u6765\u5B9E\u73B0 UTF-16 \u7F16\u7801\u5668\u7684\u6838\u5FC3\u90E8\u5206: \u5C06\u7ED9\u5B9A\u7684\u4E00\u4E2A\u7801\u70B9\u8F6C\u4E3A\u5BF9\u5E94\u5B57\u8282 number[] \u6570\u7EC4, \u6BD4\u5982\u8BF4:"),
                        React.createElement(Code, { lang: 'tsx', source: `
        utf16EncodeCodePoint(0x6C38) // 永 (码点为 U+6C38)
        // => [0x6C, 0x38]
        utf16EncodeCodePoint(0x1F370) // 🍰 (码点为 U+1F370)
        // => [0xD8, 0x3C, 0xDF, 0x70]
      ` }),
                        React.createElement(P, null, "\u4E0B\u9762\u7ED9\u4E00\u4E2A\u6211\u7684\u5B9E\u73B0:"),
                        React.createElement(Code, { lang: 'tsx', source: props.codeUtf16EncodeCodePoint }),
                        React.createElement(H2, null, "UTF-16 Demo"),
                        React.createElement(P, null, "\u4E0B\u9762\u662F\u6839\u636E\u6211\u7684 UTF-16 \u7F16\u7801\u5668\u5199\u7684 Demo, \u53EF\u4EE5\u4E0B\u8F7D\u4E0B\u6765\u770B\u770B\u80FD\u4E0D\u80FD\u6253\u5F00"),
                        React.createElement(UtfDemo, { placeholder: '\uD83C\uDF70 \u5728\u8FD9\u8F93\u5165\u5B57\u7B26\u4E32\u5C06\u5176\u7F16\u7801\u4E3A UTF-16 \u6D41\u5E76\u5728\u4E0B\u9762\u7684 BufferView \u4E2D\u5C55\u793A', download: 'UTF-16 \u5927\u7AEF Demo.txt', prefixBuffer: [0xfe, 0xff], encoder: utf16EncodeCodePoint }),
                        React.createElement(P, null, "\u6CE8\u610F\uFF0C\u4E0E UTF-32 \u7C7B\u4F3C\uFF0CUTF-16 \u4E5F\u9700\u8981\u6307\u5B9A\u5F00\u5934\u7684 BOM\uFF0C\u6B64\u5904\u5F00\u5934\u7684 0xFEFF \u4EE3\u8868\u5927\u7AEF\u5B58\u50A8\uFF0C\u6B64\u65F6\u7684\u7F16\u7801\u53EB\u505A `UTF-16 BE` (big-endian) \u5982\u679C\u9700\u8981\u5C0F\u7AEF\u5B58\u50A8\u5219\u9700\u8981\u5C06 BOM \u8BBE\u7F6E\u4E3A `0xFFFE` \u5E76\u628A\u540E\u7EED\u9AD8\u4F4E\u5B57\u8282\u5E8F\u8C03\u8F6C\u4E00\u4E0B (\u6211\u7684\u5B9E\u73B0\u90FD\u662F\u5927\u7AEF\uFF0C\u6BD4\u8F83\u597D\u7406\u89E3\uFF09"),
                        React.createElement(P, null, "\u6BD4\u5982 `\u4E16\u754C` \u5BF9\u5E94\u7684\u5927\u7AEF\u7F16\u7801 `UTF-16 BE` \u4E3A 0xFE, 0xFF 0x4E, 0x16, 0x75, 0x4C \u6B64\u65F6\u5176\u5C0F\u7AEF\u7F16\u7801 `UTF-16 LE` (little-endian) \u7684\u7ED3\u679C\u4E3A:"),
                        React.createElement(BufferView, { download: 'UTF-16 \u5C0F\u7AEF Demo.txt', int8: [
                                0xFF, 0xFE, 0x16, 0x4e, 0x4c, 0x75
                            ] })),
                    React.createElement(H1Block, { id: "utf-16-in-js", title: "\u9898\u5916\u8BDD: JavaScript \u91CC\u7684 UTF-16" },
                        React.createElement(P, null, "JS \u91CC string \u5E95\u5C42\u662F\u7528 UTF-16 \u7F16\u7801\u7684\uFF0C\u56E0\u6B64\u53EF\u8FD9\u6837\u9A8C\u8BC1\u524D\u9762 `\uD83C\uDF70 U+1F370` \u7684\u7F16\u7801\u7ED3\u679C 0xD83C \u548C 0xDF70 :"),
                        React.createElement(Code, { lang: "tsx", source: `
        console.log('\\uD83C\\uDF70');
        // 将会输出 '🍰'
      ` }),
                        React.createElement(P, null, "\u4ECE\u8FD9\u4E5F\u53EF\u4EE5\u770B\u5230\uFF0CJS \u91CC\u53EF\u4EE5\u7528 \\uAAAA \u7684\u65B9\u5F0F\u6765\u901A\u8FC7 UTF-16 \u7F16\u7801\u6D41\u6765\u6784\u9020\u5B57\u7B26\u4E32\u3002"),
                        React.createElement(H2, null, "\u5982\u4F55\u76F4\u63A5\u7528 unicode \u7801\u70B9\u6765\u6784\u9020 string ?"),
                        React.createElement(P, null, "\u9664\u4E86\u76F4\u63A5\u7528 UTF-16 \u7F16\u7801\u6D41\uFF0CJS \u4E5F\u53EF\u4EE5\u76F4\u63A5\u7ED9\u5B9A\u7801\u70B9\u6765\u6784\u9020\u5B57\u7B26\u4E32:"),
                        React.createElement(Code, { lang: "tsx", source: `
        console.log('\\u{1F370}');
        // U+1F370 是 🍰 的码点, 将会输出 '🍰'
      ` }),
                        React.createElement(H2, null, "'\uD83C\uDF70'.length \u4E3A\u4EC0\u4E48\u662F 2 \u7684\u95EE\u9898"),
                        React.createElement(P, null, "\u5176\u5B9E\u5C31\u662F\u4E0B\u9762\u8FD9\u79CD\u73B0\u8C61\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        console.log('🍰'.length);
        // => 2
      ` }),
                        React.createElement(P, null, "\u539F\u56E0\uFF1Ajs string \u662F UTF-16 \u7F16\u7801\u7684\uFF0C\u800C \uD83C\uDF70 \u7684\u7F16\u7801\u9700\u8981\u8D70\u60C5\u51B5 2 \u6765\u7F16\u7801\uFF0C\u6700\u7EC8\u7ED3\u679C\u662F 0xD83C 0xDF70\uFF0C\u7EDF\u5171 4 \u5B57\u8282\uFF0C\u800C length \u662F\u4E24\u5B57\u8282\u7B97\u4E00\u4E2A\u5B57\u7B26\uFF08UTF-16\uFF09\u56E0\u6B64\u6700\u540E \uD83C\uDF70 \u8FD9\u7C7B\u4F4D\u4E8E\u7B2C\u4E8C\u5E73\u9762\u7684\u7801\u70B9\u5728 js string \u91CC length \u5C31\u662F 2 \u4E86"),
                        React.createElement(H2, null, ".split('') \u5E76\u4E0D\u80FD\u5F88\u597D\u7684\u8BC6\u522B UTF-16 \u5185\u7684\u5B57\u7B26"),
                        React.createElement(P, null, ".split \u5E76\u4E0D\u4F1A\u8BC6\u522B UTF-16 \u9AD8\u4F4E\u4EE3\u7406\u5BF9\uFF0C\u56E0\u6B64\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        '🍰 Hello'.split('');
        // => ['\\uD83C', '\\uDF70', ' ', 'H', 'e', 'l', 'l', 'o']
      ` }),
                        React.createElement(P, null, "\u53EF\u4EE5\u770B\u5230\uFF0C\uD83C\uDF70 \u7684\u9AD8/\u4F4E\u4EE3\u7406\u5BF9\u88AB\u5B8C\u5168\u62C6\u5F00\u4E86\uFF0C\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u4E86\uFF0C\u5F88\u591A\u573A\u666F\u4E0B\u4E0D\u7B26\u5408\u9884\u671F\uFF0C\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u8FD9\u4E24\u79CD\u65B9\u5F0F\u90FD\u5C06 string \u6309 UTF-16 \u5E8F\u8FDB\u884C\u5207\u5272\uFF0C\u907F\u514D\u8FD9\u7C7B\u95EE\u9898\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        Array.from('🍰 Hello');
        // => ['🍰', ' ', 'H', 'e', 'l', 'l', 'o']

        [...'🍰 Hello'];
        // => ['🍰', ' ', 'H', 'e', 'l', 'l', 'o']
      ` }),
                        React.createElement(P, null, "\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8 for \u5FAA\u73AF\u904D\u5386\u5B57\u7B26\u4E32\u6765\u81EA\u5DF1\u62C6\uFF08\u5224\u65AD\u5728\u4E0D\u5728\u9AD8\u4F4E\u4EE3\u7406\u533A\u5757\u5373\u53EF\uFF09"),
                        React.createElement(H2, null, "\u5982\u4F55\u5C06\u4E00\u6BB5 string \u8F6C\u4E3A\u7801\u70B9\u6570\u7EC4 ?"),
                        React.createElement(P, null, "\u7528\u524D\u9762\u63D0\u5230\u7684 Array.from \u5C06\u5B57\u7B26\u62C6\u5F00\u540E\u518D\u901A\u8FC7 codePointAt \u65B9\u6CD5\u53D6\u5230\u7801\u70B9:"),
                        React.createElement(Code, { lang: 'tsx', source: `
        Array.from('🍰 🍉').forEach(ch => {
          console.log(\`'\${ch}'=>U+\${ch.codePointAt(0).toString(16)}\`);
        });
        // 将会输出
        // '🍰'=>U+1f370
        // ' '=>U+20
        // '🍉'=>U+1f349
      ` }),
                        React.createElement(P, null, "\u4E0B\u9762\u662F\u6839\u636E\u4E0A\u9762\u8FD9\u6BB5\u5199\u7684\u4E00\u4E2A\u5C0F demo (\u8DDF\u5F00\u5934\u90A3\u4E2A\u662F\u540C\u4E00\u4E2A Demo \u7EC4\u4EF6)"),
                        React.createElement(StringToCharCodeDemo, { initial: '\uD83C\uDF70 \uD83C\uDF49' })),
                    React.createElement(H1Block, { id: "ucs2-utf16", title: "UCS-2 \u4E0E UTF-16 \u7684\u5173\u7CFB" },
                        React.createElement(P, null, "UCS-2 \u662F\u5728 UTF-16 \u51FA\u73B0\u4E4B\u524D\u5E38\u7528\u7684 Unicode \u7F16\u7801\u65B9\u5F0F\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "UCS-2 \u662F\u6210\u7ACB\u4E8E 1984 \u5E74\u7684 UCS \u7EC4\u7EC7\u4E8E 1990 \u5E74\u63D0\u51FA\u7684"),
                            React.createElement(P, null, "\u800C UTF-16 \u662F\u6210\u7ACB\u4E8E 1991 \u5E74\u7684 Unicode \u7EC4\u7EC7\u4E8E 1996 \u5E74\u63D0\u51FA")),
                        React.createElement(P, null, "UCS-2 \u65E9\u4E8E UTF-16 \u63D0\u51FA\uFF0C\u5176\u6838\u5FC3\u662F\u7528\u4E24\u5B57\u8282\u7F16\u7801\u7B2C\u4E00\u5E73\u9762 BMP 0x0000 \u5230 0xFFFF \u5171\u8BA1 65536 \u4E2A\u5B57\u7B26\uFF0C\u540E\u6765\u8BBE\u8BA1\u7684 UTF-16 \u4E5F\u8003\u8651\u5230\u8FD9\u4E00\u70B9\u8FDB\u884C\u8BBE\u8BA1\uFF0C\u5BF9\u5E94\u7684\u5C31\u662F\u524D\u9762\u63D0\u5230\u8FC7\u7684 UTF-16 \u60C5\u51B5\u4E00")),
                    React.createElement(H1Block, { id: "UTF-8", title: "UTF-8" },
                        React.createElement(P, null, "\u7EC8\u4E8E\u6765\u5230 UTF-8 \u4E86\uFF0C\u5B83\u662F\u4E00\u79CD\u53D8\u957F\u7F16\u7801\uFF0C\u7279\u70B9\u662F\u6700\u5C0F\u53EF\u4EE5\u4E00\u5B57\u8282\u4F7F\u7528\uFF0C\u5728\u4E00\u5B57\u8282\u7684\u65F6\u5019\u7F16\u7801\u89C4\u5219\u8DDF ASCII \u4E00\u6837\uFF0C\u5B9E\u73B0\u4E86\u517C\u5BB9\uFF0C\u5177\u4F53\u7684\u89C4\u5219\u5982\u4E0B"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u5BF9\u4E8E\u957F\u5EA6\u4E3A 1 \u5B57\u8282\u7684\u5B57\u7B26\uFF0C\u5C06\u6700\u9AD8\u4F4D\u8BBE\u7F6E\u4E3A 0, \u5176\u4F59 7 \u4F4D\u8BBE\u7F6E\u4E3A Unicode \u7801\u70B9\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F, ASCII \u5B57\u7B26\u5728 Unicode \u5B57\u7B26\u96C6\u4E2D\u5360\u636E\u4E86\u524D 128 \u4E2A\u7801\u70B9\u3002\u4E5F\u5C31\u662F\u8BF4, UTF-8 \u7F16\u7801\u53EF\u4EE5\u5411\u4E0B\u517C\u5BB9 ASCII \u7801, \u8FD9\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 UTF-8 \u6765\u6253\u5F00\u5E74\u4EE3\u4E45\u8FDC\u7684 ASCII \u6587\u672C\u6587\u4EF6\u3002"),
                            React.createElement(P, null, "\u5BF9\u4E8E\u957F\u5EA6\u4E3A n \u5B57\u8282\u7684\u5B57\u7B26 (n > 1), \u5C06\u9996\u4E2A\u5B57\u8282\u7684\u9AD8 n \u4F4D\u90FD\u8BBE\u7F6E\u4E3A 1\uFF0C\u7B2C n+1 \u4F4D\u8BBE\u7F6E\u4E3A 0\uFF1B\u4ECE\u7B2C\u4E8C\u4E2A\u5B57\u8282\u5F00\u59CB\uFF0C\u5C06\u6BCF\u4E2A\u5B57\u8282\u7684\u9AD8 2 \u4F4D\u90FD\u8BBE\u7F6E\u4E3A 10\uFF1B\u5176\u4F59\u6240\u6709\u4F4D\u7528\u4E8E\u586B\u5145\u5B57\u7B26\u7684 Unicode \u7801\u70B9\u3002")),
                        React.createElement(P, null, "\u4E0B\u9762\u4EE5\u300C\u6C38\u300D\u5B57\u4E3A\u4F8B\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        //　     unicode 码点               UTF-8
        永    11011000 0111000    11100110 10110000 10111000
        　                        ----     --       --
        　                                 10 开头   10 开头   
        　        第一个字节开头的 1110 代表总共 3 个字节
        　        其后每一个字节的开头都是 10,
        　        然后将码点按位填充到剩下的位得到最终结果
        　        (转 16 进制后为: 0xE6 0xB0 0xB8)
      ` }),
                        React.createElement(P, null, "\u6838\u5FC3\u662F\u786E\u5B9A utf \u5934\u603B\u5171\u591A\u5C11\u5B57\u8282\uFF0C\u7136\u540E\u5C06\u7801\u70B9\u4F4D\u586B\u5145\u4E0A\u53BB\u5373\u53EF\uFF0C\u4E0B\u9762\u7ED9\u4E00\u4E2A\u6211\u81EA\u5DF1\u7684\u7F16\u7801\u5B9E\u73B0\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: props.codeUtf8EncodeCodePoint }),
                        React.createElement(P, null, "\u4E0B\u9762\u662F\u89E3\u7801\u7684\u5B9E\u73B0\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: props.codeUtf8Decode }),
                        React.createElement(H2, null, "UTF-8 Demo"),
                        React.createElement(P, null, "\u6211\u7528\u4E0A\u9762\u7684\u5B9E\u73B0\u7684 utf-8 \u7F16\u89E3\u7801\u505A\u4E86\u4E00\u4E2A Demo: "),
                        React.createElement(UtfDemo, { placeholder: '\uD83C\uDF70 \u5728\u8FD9\u8F93\u5165\u5B57\u7B26\u4E32\u5C06\u5176\u7F16\u7801\u4E3A UTF-8 \u6D41\u5E76\u5728\u4E0B\u9762\u7684 BufferView \u4E2D\u5C55\u793A', download: 'UTF-8 Demo.txt', prefixBuffer: [], encoder: utf8EncodeCodePoint })),
                    React.createElement(H1Block, { id: "look-back-to-std-unicode", title: "\u56DE\u5934\u770B Unicode \u6807\u51C6" },
                        React.createElement(P, null, "\u524D\u9762\u4E3B\u8981\u8BA8\u8BBA\u4E86 Unicode \u7684\u7F16\u7801\uFF0C\u4F46\u662F\u7F16\u7801\u90E8\u5206\u53EA\u662F Unicode \u6807\u51C6\u7684\u4E00\u90E8\u5206\uFF0C\u6B64\u5904\u66F4\u5177\u4F53\u7684\u8BB0\u5F55\u4E00\u4E0B Unicode \u7684\u8BDE\u751F\u7EC6\u8282\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "Unicode 1987 \u5E74\u63D0\u51FA\uFF0C\u76EE\u7684\u662F\u63D0\u4F9B\u4E00\u79CD\u7EDF\u4E00\u7684\u5B57\u7B26\u7F16\u7801"),
                            React.createElement(P, null, "\u6807\u51C6\u7531 Unicode Consortium\uFF08Unicode \u7EC4\u7EC7/\u8054\u76DF\uFF09\u7EF4\u62A4\uFF0C\u8FD9\u4E2A\u8054\u76DF\u7684\u5B97\u65E8\u662F\u8BA9 Unicode \u53D6\u4EE3\u5176\u4ED6\u7684\u7F16\u7801\uFF0C\u6210\u4E3A\u552F\u4E00\u6807\u51C6")),
                        React.createElement(P, null, "\u6839\u636E Unicode \u7EC4\u7EC7\u7684\u7F51\u7AD9\u4E0A\u7684 `Unicode \u6280\u672F\u62A5\u544A #17` \u663E\u793A\uFF0C\u524D\u9762\u6211\u5199\u7684\u90A3\u4E9B\u7F16\u7801\u65B9\u5F0F\u53EA\u662F\u6574\u4E2A Unicode \u6807\u51C6\u4E00\u90E8\u5206\u800C\u5DF2\uFF1A"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://www.unicode.org/reports/tr17/tr17-3.html" }, "Unicode \u6280\u672F\u62A5\u544A UTR#17")),
                        React.createElement(P, null, "\u6839\u636E\u8FD9\u4EFD\u62A5\u544A\uFF0CUnicode \u6807\u51C6\u4E3B\u8981\u6709\u4E94\u4E2A\u90E8\u5206\u6784\u6210\uFF0C\u6216\u8005\u79F0\u4E3A `\u4E94\u5C42\u6A21\u578B`:"),
                        React.createElement(H2, null, "ACR: Abstract Character Repertoire (\u62BD\u8C61\u5B57\u7B26\u8868) "),
                        React.createElement(Quote, { from: "UTR#17 \u539F\u6587" }, "the set of characters to be encoded, e.g., some alphabet or symbol set"),
                        React.createElement(P, null, "\u5C31\u662F\u5B57\u7B26\u96C6\u6536\u5F55\uFF0C\u76F8\u5F53\u4E8E\u5B57\u5178\uFF0C\u6BD4\u5982 \uD83C\uDF70 \u5C31\u5728 ACR \u4E2D, \u6BD4\u5982\u6211\u4EEC\u7684\u6C49\u5B57\u4E5F\u90FD\u5728 Unicode \u5B57\u7B26\u96C6\u4E2D\uFF0C\u79F0\u4E3A ACR"),
                        React.createElement(H2, null, "CCS: Coded Character Set (\u7F16\u7801\u5B57\u7B26\u96C6) "),
                        React.createElement(Quote, { from: "UTR#17 \u539F\u6587" }, "a mapping from an abstract character repertoire to a set of non-negative integers"),
                        React.createElement(P, null, "ACR \u91CC\u6BCF\u4E00\u4E2A\u5B57\u7B26\u5230\u7801\u70B9\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u5C06\u8FD9\u4E9B\u6620\u5C04\u5173\u7CFB\u653E\u7F6E\u5728 CCS \u4E2D\uFF0C\u8FD9\u5176\u5B9E\u5C31\u662F \uD83C\uDF70 \u6620\u5C04\u5230\u5176\u7801\u70B9 U+1F370\uFF0C\u5B9A\u4E49\u4E86\u6240\u6709\u5B57\u7B26\u5230\u7801\u70B9\u7684\u6620\u5C04\u5173\u7CFB"),
                        React.createElement(H2, null, "CEF: Character Encoding Form (\u5B57\u7B26\u7F16\u7801\u65B9\u5F0F) "),
                        React.createElement(Quote, { from: "UTR#17 \u539F\u6587" }, "a mapping from a set of non-negative integers (from a CCS) to a set of sequences of particular code units of some specified width, such as bytes"),
                        React.createElement(P, null, "\u5B9A\u4E49\u4E86\u7801\u70B9\u5982\u4F55\u7F16\u7801\u4E3A\u7279\u5B9A\u7684 bit \u4F4D\u5BBD\u7684\u300C\u7801\u5143\u300D\uFF0C\u6BD4\u5982:"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "UTF-32 \u76F4\u63A5\u7528 4 \u5B57\u8282\u5C06\u7801\u70B9\u5F53\u6210 uint32 \u65E0\u7B26\u53F7\u6574\u6570\u8FDB\u884C\u7F16\u7801\uFF0C\u5176\u4E00\u4E2A\u7801\u5143\u662F 4 \u5B57\u8282"),
                            React.createElement(P, null, "UTF-16, \u4E00\u4E2A\u7801\u5143\u662F 2 \u5B57\u8282\uFF0C\u6839\u636E\u8BFB\u53D6\u5230\u7684\u7B2C\u4E00\u4E2A\u7801\u5143\u7684\u8303\u56F4\uFF0C\u5206\u4E24\u79CD\u60C5\u51B5:"),
                            React.createElement(Numbering, { template: '123' },
                                React.createElement(P, null, "\u7801\u70B9\u4F4D\u4E8E BMP \u5E73\u9762\u7684 0x0000 ~ 0xFFFF \u8FD9\u4E2A\u533A\u95F4\u7684\u65F6\u5019\u76F4\u63A5\u7528\u4E00\u4E2A\u7801\u5143\u5373\u4E24\u4E2A\u5B57\u8282\u8FDB\u884C\u7F16\u7801"),
                                React.createElement(P, null, "\u7801\u5143\u5728\u540E\u7EED\u5E73\u9762\uFF0C\u6B64\u65F6\u901A\u8FC7\u9AD8\u4F4E\u4EE3\u7406\u7684\u65B9\u5F0F\u5C06 20 \u4F4D\u7801\u70B9\u4FE1\u606F\u7F16\u7801\u5230 4 \u5B57\u8282 2 \u4E2A\u7801\u5143\u4E2D")),
                            React.createElement(P, null, "UTF-8 \u7528 1 \u5B57\u8282\u7684\u53D8\u957F\u7F16\u7801\u5F62\u5F0F\u8FDB\u884C\u7F16\u7801, \u5176\u7801\u5143\u4F4D\u5BBD\u5C31\u662F 1 \u5B57\u8282, \u800C\u4ECE\u5176\u7F16\u7801\u7EC6\u8282\u6765\u770B\u9996\u5B57\u8282\u6700\u5927\u53EF\u6307\u5B9A\u53D8\u957F\u7F16\u7801\u7684\u957F\u5EA6\u4E3A 7\uFF0C\u56E0\u6B64\u6700\u5927\u53EF\u4EE5\u6709 8 \u4E2A\u7801\u5143"),
                            React.createElement(Numbering, { template: '123' },
                                React.createElement(P, null, "0b0xxxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 7\uFF0C\u8DDF ASCII \u521A\u597D\u5BF9\u5E94"),
                                React.createElement(P, null, "0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 12 \u4F4D"),
                                React.createElement(P, null, "0b110xxxxx 0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 17 \u4F4D"),
                                React.createElement(P, null, "0b1110xxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 22 \u4F4D"),
                                React.createElement(P, null, "0b11110xxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 27 \u4F4D"),
                                React.createElement(P, null, "0b111110xx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 32 \u4F4D"),
                                React.createElement(P, null, "0b1111110x 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 37 \u4F4D, \u5DF2\u7ECF\u8D85\u8FC7 32 \u4F4D\u4E86\uFF0C\u5B9E\u9645\u4E0D\u53EF\u80FD\u51FA\u73B0"),
                                React.createElement(P, null, "0b11111110 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx 0b10xxxxxx: \u80FD\u7F16\u7801\u7684\u4F4D\u6570\u662F 42 \u4F4D\uFF0C\u5DF2\u7ECF\u8D85\u8FC7 32 \u4F4D\u4E86\uFF0C\u5B9E\u9645\u4E0D\u53EF\u80FD\u51FA\u73B0"))),
                        React.createElement(H2, null, "CES: Character Encoding Scheme (\u5B57\u7B26\u7F16\u7801\u65B9\u6848)"),
                        React.createElement(Quote, { from: "UTR#17 \u539F\u6587" }, "a mapping from a set of sequences of codes units (from one or more CEFs) to a serialized sequence of bytes"),
                        React.createElement(P, null, "\u8FD9\u5C42\u5176\u5B9E\u6BD4\u8F83\u8584\uFF0C\u5C31\u662F\u5C06\u7801\u70B9\u586B\u5145\u5230\u524D\u9762 CEF \u6240\u5141\u8BB8\u90A3\u4E9B\u4F4D\u91CC\u9762\u53BB\uFF0C\u6700\u540E\u8F93\u51FA\u4E3A byte \u6D41"),
                        React.createElement(H2, null, "TES: Transfer Encoding Syntax (\u4F20\u8F93\u7F16\u7801\u53E5\u6CD5)"),
                        React.createElement(Quote, { from: "UTR#17 \u539F\u6587" }, "a reversible transform of encoded data. This data may or may not contain textual data"),
                        React.createElement(P, null, "\u6211\u7406\u89E3\u662F\u5728\u4F20\u8F93\u7684\u8FC7\u7A0B\u4E2D\u68C0\u6D4B UTF \u7F16\u7801\u7684\u8BED\u6CD5\u673A\u5236\uFF0C\u6BD4\u5982\u4E24\u4E2A case\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "HTML \u91CC\u6307\u5B9A\u7F16\u7801: `<meta charset=\"utf-8\" />`"),
                            React.createElement(P, null, "Unicode UTF-32 \u548C UTF-16 \u91CC\u9762\u51FA\u73B0\u7684 BOM: FEFF0000 \u6765\u8868\u660E\u5927\u5C0F\u7AEF\u7684\u60C5\u51B5\u4E5F\u7B97\u662F"))),
                    React.createElement(H1Block, { title: "\u6CE8\u610F\u529B\u5927\u96C6\u4E2D" },
                        React.createElement(P, null, "\u8FD9\u91CC\u5199\u4E00\u4E0B\u6211\u5728\u5B9E\u73B0\u8FC7\u7A0B\u4E2D\u6CE8\u610F\u5230\u7684\u51E0\u4E2A\u95EE\u9898\uFF0C\u4E5F\u8BB8\u65E5\u540E\u6709\u673A\u4F1A\u53C2\u4E0E unicode \u7684\u5B8C\u5168\u91CD\u6784\u7684\u65F6\u5019\u518D\u8BA4\u771F\u8003\u8651\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u95EE\u9898\uFF08\u867D\u7136\u8FD9\u4E2A connecting the dots \u7EDD\u4E0D\u53EF\u80FD\u53D1\u751F ....\uFF09"),
                        React.createElement(H2, null, "\u4E2D\u6587\u5B57\u7B26\u7801\u70B9\u8FDE\u7EED\u6027\u95EE\u9898"),
                        React.createElement(P, null, "\u7F51\u4E0A\u4E00\u4E2A\u5173\u4E8E\u7801\u70B9\u7684\u8BBE\u8BA1\u95EE\u9898\uFF1A\uFF08\u7B97\u662F\u4E94\u5C42\u6A21\u578B\u91CC CCS \u7684\u95EE\u9898\uFF09"),
                        React.createElement(StringToCharCodeDemo, { initial: '\u4E00\u4E8C\u4E09\u56DB\u4E94\u7532\u4E59\u4E19\u4E01\u620AABCDE' }),
                        React.createElement(P, null, "\u53D1\u73B0\u4E86\u5417\uFF1F\u6C49\u5B57\u7684 `\u4E00\u4E8C\u4E09\u56DB\u7532\u4E59\u4E19\u4E01` \u5728\u7801\u70B9\u4E0A\u5E76\u4E0D\u662F\u8FDE\u7EED\u7684, \u800C ABCD \u8FD9\u4E9B\u5C31\u662F\u8FDE\u7EED\u7684\uFF0C\u4E0D\u8FC7\u8FD8\u597D\u6C49\u8BED\u62FC\u97F3\u58F0\u6BCD \u3105Bo \u3106Po \u3107Mo \u3108Fo \u3109De \u6216\u8005\u65E5\u8BED\u5047\u540D \u3042a \u3044i \u3046u \u3048e \u304Ao \u662F\u7B26\u5408\u6B63\u5E8F\u6392\u5217\u7684"),
                        React.createElement(StringToCharCodeDemo, { initial: '\u3105\u3106\u3107\u3108\u3109\u3042\u3044\u3046\u3048\u304A' }),
                        React.createElement(H2, null, "UTF-16 \u9AD8/\u4F4E\u4EE3\u7406\u6253\u6D1E\u7684\u95EE\u9898"),
                        React.createElement(P, null, "\u524D\u9762\u7684\u5177\u4F53\u8BA8\u8BBA\u4E2D\u5DF2\u7ECF\u6E05\u695A\uFF0C\u73B0\u5728\u7684 Unicode BMP \u5E73\u9762\u5B9A\u4E49\u91CC\u5355\u72EC\u7ED9 UTF-16 \u505A\u4E86\u9AD8\u4F4E\u4EE3\u7406\u533A\u95F4\u7684\u6253\u6D1E\u6765\u5B9E\u73B0 20 \u4F4D\u7801\u70B9\u7684\u7F16\u7801"),
                        React.createElement(P, null, "\u8FD9\u4E2A\u65B9\u5F0F\u592A hack \u4E86\uFF0C\u6211\u5176\u5B9E\u4E0D\u592A\u559C\u6B22\uFF0C\u4F46\u662F\u8FD9\u53C8\u662F trade-off \u7684\u827A\u672F\uFF0CUTF-16 \u5176\u5B9E\u975E\u5E38\u597D\u7684\u517C\u987E\u4E86\u7F16\u7801\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u548C\u7A7A\u95F4\u590D\u6742\u5EA6"),
                        React.createElement(H2, null, "UTF-24 \u53EF\u884C\u6027\uFF1F"),
                        React.createElement(P, null, "UTF-16 \u901A\u8FC7\u9AD8\u4F4E\u4EE3\u7406\u5BF9\u7684\u65B9\u5F0F\u7F16\u6392\u4E86 20 \u4F4D bits\uFF0C\u800C\u8FD9 20 \u4F4D\u4E2D\u9AD8 4 \u4F4D\u4EE3\u8868\u6240\u5728\u7684 unicode \u5E73\u9762\uFF0C\u4F4E 16 \u4F4D\u4EE3\u8868\u5176\u5E73\u9762\u7684\u504F\u79FB \u2014\u2014 \u603B\u4E4B 20 \u4F4D\u8DB3\u591F\u7F16\u6392 16 \u4E2A\u5E73\u9762\u4E86\uFF0C\u5982\u679C\u671F\u671B\u5305\u542B\u5168\u90E8\u7684 17 \u4E2A\u5E73\u9762\uFF0C\u7528 21 \u4F4D\u5C31\u884C\u4E86\uFF0C\u90A3\u4E48\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4E3A\u4EC0\u4E48\u6CA1\u6709 UTF-20 \u6216 21 \u6216 UTF-24 \u7684\u7F16\u7801\u65B9\u5F0F\u5462\uFF1F"),
                        React.createElement(P, null, "\u7406\u8BBA\u4E0A\u5E94\u8BE5\u53EF\u884C\uFF0C\u4E0D\u8FC7\u4F30\u8BA1\u4F1A\u88AB\u72C2\u55B7\uFF0C\u56E0\u4E3A\u6211\u5728 zhihu \u4E0A\u95EE\u8FC7"),
                        React.createElement(P, null,
                            React.createElement(Link, { href: "https://www.zhihu.com/question/651260057" }, "\u77E5\u4E4E - \u4E3A\u4EC0\u4E48\u6CA1\u6709 UTF-24 \uFF1F")),
                        React.createElement(H2, null, "\u5982\u4F55\u5728\u7B2C\u4E00\u4E2A\u5B57\u8282\u533A\u5206\u662F UTF-8 \u8FD8\u662F ASCII"),
                        React.createElement(P, null, "\u7531\u4E8E UTF-8 \u662F\u5355\u5B57\u8282\u7F16\u7801\uFF0C\u56E0\u6B64\u5B83\u6CA1\u6709 BOM\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5982\u679C\u662F\u7EAF\u82F1\u6587\u6587\u6863 UTF-8 \u5C06\u8DDF ASCII \u8F93\u51FA\u4E00\u6A21\u4E00\u6837\u7684\u7ED3\u679C\uFF0C\u800C\u5982\u679C\u5176\u4E2D\u6DF7\u5165\u4E00\u4E24\u4E2A\u4E2D\u6587 \u2014\u2014 \u8FD9\u79CD\u60C5\u51B5\u4E0B\u7F16\u8F91\u5668\u5C31\u4E0D\u597D\u5224\u65AD\u8BE5\u7528\u54EA\u4E2A\u7F16\u7801\u4E86, \u53EF\u80FD\u5C31\u4F1A\u51FA\u73B0\u4F60\u5728\u6D4F\u89C8\u7EAF\u82F1\u6587\u672C\u7684\u65F6\u5019\u78B0\u5230\u4E00\u4E24\u4E2A\u4E71\u7801\u8FD9\u79CD\u60C5\u51B5"),
                        React.createElement(P, null, "\u5F53\u7136\u73B0\u4EE3\u7F16\u8F91\u5668\u8C01\u4E0D\u652F\u6301 UTF-8 ?\uFF08\u6211\u8FD9\u91CC\u5176\u5B9E\u70B9\u8349\u4E86\u5FAE\u8F6F\u7CFB\u7EDF\u91CC\u7684\u8BB0\u4E8B\u672C\uFF09"),
                        React.createElement(P, null, "\u8FD9\u4E2A\u95EE\u9898\u5176\u5B9E\u89C1\u4EC1\u89C1\u667A\uFF0C\u4E0D\u8FC7 UTF-8 \u786E\u5B9E\u53EF\u4EE5\u5E26\u4E00\u4E2A BOM\uFF0C\u8FD9\u4E2A BOM \u5176\u5B9E\u5C31\u53EA\u662F\u6807\u8BB0\u4E86\u8FD9\u662F\u4E00\u4E2A UTF-8 \u6587\u6863\uFF0C\u6BD4\u5982 VSCode \u5C31\u652F\u6301\u8FD9\u79CD\u5E26 BOM \u7684 utf8 \u7F16\u7801:"),
                        React.createElement(ImgDynamic, { file: fileVSCodeOnSave }),
                        React.createElement(P, null, "\u4E0B\u9762\u6211\u6784\u9020\u4E86\u4E00\u4E2A\u5E26 BOM \u7684 UTF-8 \u4F8B\u5B50\uFF0C\u4E3A `0xEF 0xBB 0xBF` \u53EF\u4EE5\u4E0B\u8F7D\u770B\u770B\uFF1A"),
                        React.createElement(BufferView, { download: 'UTF-8 with BOM \u4F8B\u5B50.txt', int8: [
                                0xef, 0xbb, 0xbf,
                                0xF0, 0x9F, 0x8D, 0xB0,
                            ] }),
                        React.createElement(P, null, "\u4E3A\u4EC0\u4E48\u662F `0xEF 0xBB 0xBF` \u5462\uFF1F \u6211\u4EEC\u4E0D\u59A8\u5C06\u5176\u5F53\u6210\u6B63\u5E38 UTF-8 \u6D41\u8FDB\u884C\u89E3\u6790\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        0xEF => 11101111 (开头 1110 代表一共 3 字节, 低 4 位是有效位: 1111)
        0xBB => 10111011 (低 6 位是有效位: 111011)
        0xBF => 10111111 (低 6 位是有效位: 111111)
        有效位拼接后得到 0b1111111011111111
        转成十六进制恰好就是 0xFEFF 这恰好就是 UTF-16 的 BOM
      ` }),
                        React.createElement(P, null, "\u6362\u4E2A\u89D2\u5EA6\u6765\u8BF4\uFF0C0xEF 0xBB 0xBF \u6700\u540E\u4F1A\u88AB\u5F53\u6210\u7801\u70B9 0xFEFF \u88AB\u7F16\u8F91\u5668\u8BC6\u522B\uFF0C\u5B83\u5728\u7F16\u7801\u5C42\u9762\u662F\u6709\u610F\u4E49\u7684\u6BD4\u5982\u4F60\u53EF\u4EE5\u8FD9\u6837\u6784\u9020\u5B83:"),
                        React.createElement(Code, { lang: 'ts', source: `
        // Node REPL
        > str = Buffer.from([0xEF, 0xBB, 0xBF, 0x41]).toString()
        // => 显示为 'A'
        > console.log(str.length)
        // => 2 实际为 '\\uFEFFA', 只是显示不出 0xFEFF 了 
      ` }),
                        React.createElement(P, null, "\u5B9E\u9645\u4E0A 0xFEFF \u9664\u4E86\u7528\u4F5C BOM \u5916\uFF0C\u5B9E\u9645\u5B83\u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A\u5408\u6CD5\u7684\u7801\u70B9\uFF0C\u5373\u6240\u8C13\u7684\u96F6\u5BBD\u5EA6\u7A7A\u683C ZWNBSP:"),
                        React.createElement(ImgDynamic, { file: fileFEFF }),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://compart.com/en/unicode/U+FEFF" }, "U+FEFF - (BOM, ZWNBSP)")),
                        React.createElement(P, null, "\u8FD9\u4E0B\u61C2\u4E86\u5427\uFF0C\u5728\u9996\u5B57\u8282\u63D2\u5165 U+FEFF \u96F6\u5BBD\u5EA6\u7A7A\u683C\u5C31\u80FD\u533A\u5206 ASCII \u548C UTF-8 \u7F16\u7801\u5566\uFF0C\u8FD9\u5176\u5B9E\u4E5F\u662F\u4E00\u79CD trade-off \u7684\u827A\u672F\uFF0C\u5355\u72EC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7279\u6B8A\u7801\u70B9\u7528\u6765\u5B9E\u73B0\u7279\u6B8A\u529F\u80FD"),
                        React.createElement(P, null, "\u6B64\u5916\u8FD9\u4E2A\u96F6\u5BBD\u5EA6\u7A7A\u683C\u5728 Ctrl+A \u5168\u9009\u7684\u65F6\u5019\u4E5F\u4F1A\u9009\u4E2D\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u5728\u7C98\u8D34\u5230 SQL \u547D\u4EE4\u884C\u5199\u5165 UTF-8 \u7684\u65F6\u5019\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u95EE\u9898\uFF08\u5982\u679C DB \u4E0D\u652F\u6301\u5E26 BOM \u7684 UTF-8 \u5C31 GG \u4E86\uFF09"),
                        React.createElement(H2, null, "UTF-8 \u5B57\u8282\u6D41\u4F20\u8F93\u622A\u65AD\u95EE\u9898"),
                        React.createElement(P, null, "\u8FD8\u662F\u4EE5\u96F6\u5BBD\u5EA6\u7A7A\u683C\u7684 0xEF 0xBB 0xBF \u6765\u8BF4\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        0xEF => 11101111 (开头 1110 代表一共 3 字节, 低 4 位是有效位: 1111)
        0xBB => 10111011 (低 6 位是有效位: 111011)
        0cBF => 10111111 (低 6 位是有效位: 111111)
        有效位拼接后得到 0b1111111011111111
        转成十六进制恰好就是 0xFEFF 这恰好就是 UTF-16 的 BOM
      ` }),
                        React.createElement(P, null, "\u8BD5\u60F3\u5982\u679C\u53EA\u4F20\u8F93\u4E86 0xEF \u5C31 TCP \u65AD\u5F00\u6216\u8005\u670D\u52A1\u7AEF\u6389\u7EBF\u4E86, \u6211\u8FD9\u91CC\u5C31\u6784\u9020\u4E86\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u670D\u52A1\u8FD4\u56DE\u4E86\u4E00\u4E2A\u9519\u8BEF\u7684 utf-8 \u5B57\u8282\u6D41\u5BFC\u81F4\u6D4F\u89C8\u5668\u4E71\u7801\u7684\u60C5\u51B5:"),
                        React.createElement(Code, { lang: 'ts', source: `
        const http = require('http');
        http.createServer((req, res) => {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.write(Buffer.from([0xEF]));
          res.end();
        }).listen(3000);
      ` }),
                        React.createElement(ImgDynamic, { file: fileUtf8DecodeError }),
                        React.createElement(P, null, "\u8FD9\u79CD\u60C5\u51B5\u53EF\u80FD\u5230\u5904\u90FD\u6709\uFF0C\u53EA\u662F\u65E5\u5E38\u90FD\u4E0D\u600E\u4E48\u8003\u8651\u5230\u3002"),
                        React.createElement(H3, null, "\u8FDB\u7A0B stdout \u62FC\u63A5\u95EE\u9898"),
                        React.createElement(P, null, "stdout \u4E5F\u662F\u4E00\u6BB5\u4E00\u6BB5\u7684\u5B57\u8282\u6D41\uFF0C\u53EF\u80FD\u4E24\u6BB5\u8F93\u51FA\u5C31\u65AD\u5728 UTF-8 \u7684\u9996\u5B57\u8282\u4E86\uFF0C\u5177\u4F53\u6765\u8BF4\uFF0C'\u6C38' \u8FD9\u4E2A\u5B57\u53EF\u4EE5\u7528 UTF-8 \u7F16\u7801\u4E3A:"),
                        React.createElement(BufferView, { download: "UTF-8 \u6C38.txt", int8: [
                                0xe6, 0xb0, 0xb8
                            ] }),
                        React.createElement(P, null, "\u5F53\u6211\u4EEC\u76D1\u542C stdout \u5E76\u6536\u96C6 ondata \u8F93\u51FA\u7684\u65F6\u5019\uFF0C\u6709\u53EF\u80FD\u4E0D\u4F1A\u4E00\u6B65\u5230\u4F4D\uFF0C\u800C\u662F\u5728\u4E2D\u95F4\u622A\u65AD\u5F97\u5230\u4E24\u6BB5 buffer (\u77ED\u6587\u672C\u5F88\u96BE\u9047\u5230\uFF0C\u957F\u6587\u672C\u5C31\u7ECF\u5E38\u9047\u5230\u4E86)\uFF1A"),
                        React.createElement(Code, { lang: 'ts', source: `
        <Buffer E6>
        <Buffer B0 B8>
      ` }),
                        React.createElement(P, null, "\u5982\u679C\u6B64\u65F6\u8FD9\u6837\u5904\u7406\u5C31\u4F1A\u4E71\u7801\u4E86\uFF1A"),
                        React.createElement(Code, { lang: 'ts', source: `
        <Buffer E6>.toString()
        <Buffer B0 B8>.toString()
      ` }),
                        React.createElement(P, null, "\u6211\u4EEC\u9700\u8981\u5C06\u5176 concat \u6210\u5355\u4E2A buffer \u540E\u518D toString \u8FD9\u6837\u624D\u6CA1\u95EE\u9898\u3002"),
                        React.createElement(Code, { lang: 'ts', source: `
        Buffer.concat([
          <Buffer E6>,
          <Buffer B0 B8>,
        ]).toString()
      ` }),
                        React.createElement(P, null, "\u8FD9\u4E2A case \u6211\u662F\u9047\u5230\u8FC7\u7684\uFF0C\u5F53\u65F6\u662F\u8C03\u7528\u7684\u662F buffers.join('') \u6765\u62FC\u63A5\uFF0C\u5B9E\u9645\u8FD9\u6837\u5C31\u662F\u7ED9\u6BCF\u4E2A\u5B50\u5143\u7D20\u8DD1\u4E00\u6B21 toString \u5728\u5C06\u5176\u52A0\u8D77\u6765\uFF0C\u5BFC\u81F4\u6700\u540E\u51FA\u73B0\u4E71\u7801\u7684\u95EE\u9898\u3002")),
                    React.createElement(H1Block, { id: "EOF", title: "EOF" },
                        React.createElement(P, null, "\u597D\u4E86\uFF0C\u8FD9\u7BC7\u957F\u6587\u7EC8\u4E8E\u5199\u5B8C\u4E86\uFF0C\u8FD9\u91CC\u5199\u4E00\u4E0B\u603B\u7ED3\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "Unicode \u7F16\u7801\u7A7A\u95F4\u3001\u7801\u70B9\u3001\u5E73\u9762\u3001\u533A\u5757"),
                            React.createElement(P, null, "UTF-32: \u5C06\u7801\u70B9\u5F53\u6210 4 \u5B57\u8282 uint32 \u8FDB\u884C\u5B58\u50A8"),
                            React.createElement(P, null, "UTF-16: \u7B2C\u4E00\u5E73\u9762\u5185\u7684\u76F4\u63A5\u7528 2 \u5B57\u8282\u5B58\u50A8\uFF1B\u540E\u7EED\u5E73\u9762\u7684\u5219\u901A\u8FC7\u9AD8\u4F4E\u4EE3\u7406\u5BF9\u7684\u65B9\u5F0F\u586B\u5145 20 \u4F4D bits \u8FDB\u884C\u7801\u70B9\u7684\u7F16\u7801\uFF0C\u8FD9 20 \u4F4D\u91CC\u9AD8 4 \u4F4D\u662F\u5E73\u9762\u7F16\u53F7\uFF0C\u4F4E 16 \u4F4D\u662F\u5728\u5E73\u9762\u5185\u7684\u504F\u79FB \u2014\u2014 \u4E5F\u56E0\u6B64\u8981\u51CF\u53BB 0x10000 \u6765\u907F\u514D\u5BF9\u7B2C\u4E00\u5E73\u9762\u7684\u91CD\u590D\u7F16\u7801"),
                            React.createElement(P, null, "UTF-8: \u901A\u8FC7 UTF-8 \u5934\u7684\u65B9\u5F0F\u63A7\u5236\u7684\u53D8\u957F\u7F16\u7801\uFF0C\u5C06\u7F16\u7801\u4F4D\u63D0\u51FA\u540E\u63D0\u53D6\u5E76\u62FC\u63A5\u6709\u6548\u8F7D\u8377\u5373\u53EF\u5C06\u7801\u70B9\u7F16\u7801\u8FDB\u53BB"),
                            React.createElement(P, null, "UCS-2: \u5373\u7B2C\u4E00\u5E73\u9762\uFF0CUTF-16 \u53EF\u4EE5\u5B8C\u5168\u517C\u5BB9\u5B83"),
                            React.createElement(P, null, "ASCII: \u4F4E 128 \u4F4D\uFF0CUTF-8 \u80FD\u5B8C\u5168\u517C\u5BB9\u5B83"),
                            React.createElement(P, null, "JavaScript \u91CC\u7684 UTF-16: \u7531\u4E8E\u7F16\u7801\u7684\u539F\u56E0\u53EF\u80FD\u4F1A\u9020\u6210\u4E00\u4E9B\u6709\u8DA3\u7684 case"),
                            React.createElement(P, null, "Unicode \u4E94\u5C42\u6A21\u578B: ACR\u3001CCS\u3001CEF\u3001CES\u3001TES"),
                            React.createElement(P, null, "\u5BF9 Unicode \u7684\u4E2A\u4EBA\u601D\u8003")),
                        React.createElement(P, null, "\u4E0D\u597D\uFF0C\u524D\u9762\u592A\u96C6\u4E2D\u4E86\uFF0C\u73B0\u5728\u5F00\u59CB\u6CE8\u610F\u529B\u6DA3\u6563\u4E86 ...")));
            });
            function UtfDemo(props) {
                const [value, setValue] = React.useState(props.placeholder);
                const buffer = React.useMemo(() => {
                    let result = props.prefixBuffer.slice();
                    [...value].forEach(ch => {
                        const code = ch.codePointAt(0);
                        result = result.concat(props.encoder(code));
                    });
                    return result;
                }, [value]);
                return (React.createElement(P, null,
                    React.createElement("input", { value: value, style: {
                            fontSize: '1rem',
                            marginBottom: '1em',
                            display: 'block',
                            width: '100%',
                            padding: '.5em',
                            boxSizing: 'border-box',
                            border: '1px solid #BBB',
                        }, placeholder: props.placeholder, onChange: e => {
                            setValue(e.target?.value ?? '');
                        } }),
                    React.createElement(BufferView, { int8: buffer, download: props.download })));
            }
            function StringToCharCodeDemo(props) {
                const [value, setValue] = React.useState(props.initial);
                const chars = Array.from(value).map((ch, idx) => {
                    const text = 'U+' + ((ch.codePointAt(0) <= 0xFFFF)
                        ? ('0000' + ch.codePointAt(0).toString(16).toUpperCase()).slice(-4)
                        : ch.codePointAt(0).toString(16).toUpperCase());
                    const colorLight = utils.colorHash(text, 220, 244);
                    const colorDark = utils.colorHash(text, 175, 210);
                    return React.createElement("div", { key: idx, style: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '6em', height: '7em', textAlign: 'center',
                            backgroundColor: `${colorLight}`,
                            margin: '1em',
                        } },
                        React.createElement("div", { style: {
                                fontSize: '2em', backgroundColor: `${colorDark}`,
                                display: 'inline-block',
                                width: '2em',
                                height: '2em',
                                lineHeight: '2em',
                            } }, ch),
                        React.createElement("div", { style: {
                                height: '1em', lineHeight: '1em', marginTop: '.5em',
                            } }, text));
                });
                return (React.createElement(P, null,
                    React.createElement("input", { value: value, style: {
                            fontSize: '1rem',
                            marginBottom: '1em',
                            display: 'block',
                            width: '100%',
                            padding: '.5em',
                            boxSizing: 'border-box',
                            border: '1px solid #BBB',
                            textAlign: 'center',
                        }, placeholder: props.initial, onChange: e => {
                            setValue(e.target?.value ?? '');
                        } }),
                    React.createElement("div", { style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        } }, chars)));
            }
            function Table(props) {
                const theadJsx = (React.createElement("thead", null,
                    React.createElement("tr", null, props.fields.map((f, idx) => (React.createElement("th", { style: {
                            padding: '.5em',
                            border: '1px solid #BBB',
                            ...f.style,
                        }, key: idx }, f.desc || f.key))))));
                const tbodyJsx = (React.createElement("tbody", null, props.data.map((e, rIdx) => (React.createElement("tr", { key: rIdx }, props.fields.map((f, cIdx) => (React.createElement("td", { style: {
                        padding: '.5em',
                        border: '1px solid #BBB',
                        ...f.tdStyle,
                    }, key: cIdx }, e[f.key]))))))));
                return (React.createElement("table", { style: {
                        width: '100%',
                        display: 'block',
                        fontSize: '75%',
                        textAlign: 'center',
                        borderCollapse: 'collapse',
                        marginBottom: '1em',
                        fontFamily: 'var(--fontArticle)',
                    } },
                    theadJsx,
                    tbodyJsx));
            }

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
