System.register(['react', 'rally/@@', './sub.js'], (function (exports) {
    'use strict';
    var React, P, Numbering, H1Block, Code, metaBeauty, ecznSub;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Numbering = module.Numbering;
            H1Block = module.H1Block;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            ecznSub = module.ecznSub;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'syuuchuuryoku-240430',
                // type: 'app',
                // appTitle: 'app ?',
                title: '注意力训练 sub',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-04-30 07:14'),
            }));
            async function initialProps(context) {
                return {
                    codeSub: await context.readText('./sub.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                React.useEffect(() => {
                    window.ecznSub = ecznSub;
                    return () => {
                        delete window.ecznSub;
                    };
                }, []);
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u8981\u6C42\u4E0D\u4F7F\u7528\u51CF\u53F7\u7684\u60C5\u51B5\u4E0B\u5B9E\u73B0\u51CF\u6CD5\u8FD0\u7B97 `sub(a:number, b:number): string`"),
                        React.createElement(P, null, "\u53EA\u9700\u8981\u8003\u8651 16 \u4F4D\u6574\u6570\u7684\u52A0\u51CF\u6CD5, \u6D4B\u8BD5\u7528\u4F8B\u5982\u4E0B:"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "sub(1000, 2) ==> '998'"),
                            React.createElement(P, null, "sub(2, 1000) ==> '-998'"),
                            React.createElement(P, null, "sub(100, 100) ==> '0'"),
                            React.createElement(P, null, "sub(0, 0) ==> '0'"),
                            React.createElement(P, null, "sub(0, 2) ==> '-2'"),
                            React.createElement(P, null, "sub(-32768, 1) ==> '32767' (\u6709\u7B26\u53F7\u6570\u8D1F\u6EA2\u51FA)"))),
                    React.createElement(H1Block, { id: "implement", title: "\u5B9E\u73B0" },
                        React.createElement(P, null, "\u4F9D\u636E\u4E8C\u8FDB\u5236\u8865\u7801\u7684\u6570\u5B66\u539F\u7406\u53EF\u4EE5\u5199\u51FA\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: props.codeSub }),
                        React.createElement(P, null, "\u5907\u6CE8: \u6211\u5DF2\u5C06 ecznSub \u6302\u5728 window \u4E0A\u4E86\uFF0C\u53EF\u4EE5\u81EA\u884C\u6253\u5F00 devtools \u8FDB\u884C\u8C03\u8BD5")),
                    React.createElement(H1Block, { id: "syuuchuu...", title: "\u6CE8\u610F\u5230..." },
                        React.createElement(P, null, "\u5F53\u7A0B\u5E8F\u6267\u884C\u8BFB\u53D6\u67D0\u4E2A\u8D1F\u6570\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u662F\u52A0\u8F7D\u4E86\u4E00\u4E2A\u5BF9\u5E94\u76F8\u53CD\u6570\u7684\u4E8C\u8FDB\u5236\u8865\u7801\uFF0C\u56E0\u6B64 -2 & 0xff \u7ED3\u679C\u662F 0b11111110 \u4E3A 254"),
                        React.createElement(P, null, "\u56E0\u6B64\u5982\u679C\u7ED9\u4F60\u4E00\u6BB5\u5185\u5B58\uFF0C\u4ECE\u5B57\u8282\u6D41\u79BB\u5F88\u96BE\u5224\u65AD\u8BF4\u8FD9\u4E2A\u5230\u5E95\u662F\u4E0D\u662F\u6B63\u6570\uFF0C\u56E0\u4E3A\u6709\u7B26\u53F7\u6570\u662F\u88AB\u5B9A\u4E49\u51FA\u6765\u7684\uFF0C\u4ECE\u5916\u8868\u4E0A\u770B\u8DDF\u4E00\u4E2A\u65E0\u7B26\u53F7\u6570\u4E00\u6A21\u4E00\u6837\u3002"),
                        React.createElement(P, null, "\u53E6\u5916\uFF0C\u5EFA\u8BAE\u4F4D\u8FD0\u7B97\u90FD\u7528 BigInt \u6765\u5B8C\u6210\uFF0C\u6709\u6BD4\u666E\u901A number \u66F4\u597D\u7684\u6574\u6570\u7279\u6027")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
