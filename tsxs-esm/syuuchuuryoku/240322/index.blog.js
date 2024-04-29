System.register(['react', 'rally/@@', './base64-alphabet-defined.png.js', './eczn_btoa_v1.js', './eczn_btoa_v2.js', './eczn_atob.js'], (function (exports) {
    'use strict';
    var React, Numbering, P, Code, ImgDynamic, H1Block, metaBeauty, WindowApp, imageBase64AlphabetDefined, eczn_btoa_v1, eczn_btoa_v2, eczn_atob;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            Numbering = module.Numbering;
            P = module.P;
            Code = module.Code;
            ImgDynamic = module.ImgDynamic;
            H1Block = module.H1Block;
            metaBeauty = module.metaBeauty;
            WindowApp = module.WindowApp;
        }, function (module) {
            imageBase64AlphabetDefined = module.default;
        }, function (module) {
            eczn_btoa_v1 = module.eczn_btoa_v1;
        }, function (module) {
            eczn_btoa_v2 = module.eczn_btoa_v2;
        }, function (module) {
            eczn_atob = module.eczn_atob;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'syuuchuuryoku-240322',
                // type: 'app',
                // appTitle: 'app ?',
                title: '注意力训练 btoa atob',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-03-22 23:44'),
            }));
            async function initialProps(context) {
                return {
                    fileBase64Alphabet: await context.readText('./base64-alphabet.tsx'),
                    fileEcznBtoaV1: await context.readText('./eczn_btoa_v1.tsx'),
                    fileEcznBtoaV2: await context.readText('./eczn_btoa_v2.tsx'),
                    fileEcznAtob: await context.readText('./eczn_atob.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u5B9E\u73B0 `btoa(b: string): string` \u652F\u6301\u5C06\u4F20\u5165\u7684 \"\u5B57\u7B26\u4E32\" \u4EE5 buffer \u5F62\u5F0F\u5BF9\u5F85\u8F6C\u5316\u6210 base64 \u7F16\u7801"),
                            React.createElement(P, null, "\u5B9E\u73B0 `atob(a: string): string` \u652F\u6301\u5C06\u4F20\u5165\u7684 \"\u5B57\u7B26\u4E32\" \u5F53\u6210 base64 \u5E76\u5C06\u5176\u8FD8\u539F\u6210 buffer \u5F62\u5F0F (\u5373\u4E71\u7801\u4E32)")),
                        React.createElement(Code, { lang: 'tsx' }, `
        btoa('\\x00\\x00')  // => 'AAA='
        atob('AAA=') // => '\\x00\\x00'
      `),
                        React.createElement(P, null, "\u8BE6\u7EC6\u5B57\u5178\u5BF9\u7167\u53C2\u8003\u8FD9\u5F20\u56FE:"),
                        React.createElement(ImgDynamic, { file: imageBase64AlphabetDefined })),
                    React.createElement(H1Block, { id: "alphabet-query", title: "\u5B57\u6BCD\u8868\u67E5\u8BE2" },
                        React.createElement(P, null, "\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u5B57\u6BCD\u8868\u7684\u4E24\u79CD\u67E5\u8BE2:"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "\u6839\u636E Binary \u67E5\u51FA Char, \u6BD4\u5982 0b000001 => 'B'"),
                            React.createElement(P, null, "\u6839\u636E Char \u53CD\u67E5\u51FA Binary, \u6BD4\u5982 'B' => 0b000001")),
                        React.createElement(P, null, "\u4EE5\u4E0B\u662F\u5B9E\u73B0"),
                        React.createElement(Code, { lang: 'tsx' }, props.fileBase64Alphabet)),
                    React.createElement(H1Block, { id: "4to3", title: "4 \u4E2A base64 \u5B57\u6BCD\u5BF9\u5E94 3 \u5B57\u8282" },
                        React.createElement(P, null, "\u4E00\u65E6\u6CE8\u610F\u5230 4 \u4E2A base64 \u5B57\u6BCD\u5BF9\u5E94 3 \u5B57\u8282\uFF0C\u8FD9\u95EE\u9898\u5C31\u76F4\u89C2\u4E86, \u4E0D\u8FC7\u5177\u4F53\u5904\u7406\u8D77\u6765\u5927\u90E8\u5206\u65F6\u95F4\u5728\u7EA0\u7ED3\u5DE6\u79FB\u53F3\u79FB:"),
                        React.createElement(Code, { lang: "tsx", source: props.fileEcznBtoaV1 }),
                        React.createElement(P, null, "\u6211\u4EEC\u624B\u52A8\u5BF9\u9F50\u4E86 4 \u548C 3 \u7684 bits \u4F4D\u5DEE\uFF0C\u56E0\u6B64\u4EE3\u7801\u770B\u8D77\u6765\u7279\u522B\u7CDF\u7CD5, \u5982\u4E0A\u5404\u79CD << \u548C >>, \u6700\u5173\u952E\u662F = \u7B49\u4E8E\u53F7\u7684\u586B\u5145\u5199\u7684\u5F88\u6076\u5FC3\uFF0C\u56E0\u4E3A `i += 3` \u7684\u539F\u56E0\u5C31\u4F1A\u5BFC\u81F4\u51FA\u73B0 undefined \u7684\u95EE\u9898\uFF0C\u56E0\u6B64\u8981\u7279\u522B\u5C0F\u5FC3\u51FA\u95EE\u9898\uFF0C\u5B9E\u73B0\u540E\u7684\u6548\u679C\u5982\u4E0B\uFF1A"),
                        React.createElement(InputOutputApp, { label: "eczn_btoa_v1", fn: eczn_btoa_v1 })),
                    React.createElement(H1Block, { id: "syuuuuuchuuuuuu", title: "\u4F46\u662F, \u6CE8\u610F\u5230 ..." },
                        React.createElement(P, null,
                            "\u6CE8\u610F\u5230 int32 \u672C\u8EAB\u5C31\u53EF\u4EE5\u5F53\u6210 4 \u5B57\u8282 buffer \u6765\u7528, \u7C7B\u6BD4\u5230 ts \u7684 `number` \u5B83\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C\u529F\u7528\uFF0C\u90A3\u4E48\u57FA\u4E8E\u8FD9\u6837\u7684\u60F3\u6CD5\u5C31\u53EF\u4EE5\u907F\u514D\u524D\u9762\u7248\u672C\u7684 `i += 3` \u7684\u590D\u6742\u5904\u7406\u4E86, \u56E0\u6B64\u5199\u51FA\u7B2C\u4E8C\u4E2A\u7248\u672C ",
                            React.createElement(React.Fragment, null, "eczn_btoa_v2")),
                        React.createElement(Code, { lang: 'tsx' }, props.fileEcznBtoaV2),
                        React.createElement(InputOutputApp, { label: "eczn_btoa_v2", fn: eczn_btoa_v2 })),
                    React.createElement(H1Block, { id: "atob", title: "atob \u5462?" },
                        React.createElement(P, null, "btoa \u524D\u9762\u5DF2\u7ECF\u5199\u5B8C\u4E86\uFF0C\u8FD9\u91CC\u8865\u4E00\u4E0B\u53CD\u5411\u64CD\u4F5C\u7684 atob \u5B9E\u73B0"),
                        React.createElement(Code, { lang: "tsx" }, props.fileEcznAtob),
                        React.createElement(P, null,
                            React.createElement(React.Fragment, null, "\u597D\u4E86\uFF0C\u672C\u6587\u5DEE\u4E0D\u591A\u7ED3\u675F\u4E86\uFF0C\u8FD9\u91CC\u91CD\u65B0\u8D34\u4E00\u4E0B\u4E4B\u524D\u7684 eczn_atob eczn_btoa demo:")),
                        React.createElement(InputOutputApp, { label: "eczn_atob", fn: eczn_atob, initial: "AABA" }),
                        React.createElement(InputOutputApp, { label: "eczn_btoa_v2", fn: eczn_btoa_v2 }),
                        React.createElement(P, null, "\u4E0B\u9762\u9644\u4E0A\u539F\u751F\u7684 atob \u548C btoa \u53C2\u8003\u5BF9\u6BD4"),
                        React.createElement(InputOutputApp, { label: "globalThis.atob", fn: globalThis.atob, initial: "AABA" }),
                        React.createElement(InputOutputApp, { label: "globalThis.btoa", fn: globalThis.btoa })));
            });
            function InputOutputApp(props) {
                const { fn } = props;
                const [input, setInput] = React.useState(JSON.stringify(props.initial ?? `\x00\x00@`));
                const b = (() => {
                    try {
                        return JSON.parse(input);
                    }
                    catch (err) {
                        return null;
                    }
                })();
                try {
                    JSON.stringify(`${fn(b)}`);
                }
                catch (err) {
                    debugger;
                }
                const output = (typeof b === 'string'
                    ? JSON.stringify(`${fn(b)}`)
                    : 'ERROR: 请检查输入是否是合法 json 字符串');
                const labelText = `${props.label}(${input}) ===>`;
                return (React.createElement(WindowApp, { height: "auto" },
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: `
        .input-outp-demo > * {
          box-sizing: border-box;
          margin-bottom: .8em;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .input-outp-demo {
          padding: 1em 2em;
          box-sizing: border-box;
          font-family: var(--fontCode);
        }

        .input-outp-demo input {
          display: block;
          padding: .2em .5em;
          width: 100%;
        }
      ` } }),
                    React.createElement("div", { className: "input-outp-demo" },
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: labelText } }),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: output } }),
                        React.createElement("input", { placeholder: "\u8F93\u5165 json string (\u4E71\u7801\u4E32)", value: input, onChange: e => {
                                setInput(e.target.value || `""`);
                            } }))));
            }

        })
    };
}));
