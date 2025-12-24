System.register(['react', 'rally/@@', './index.css.js'], (function (exports) {
    'use strict';
    var React, P, H1Block, WindowApp, Numbering, Formula, Code, metaBeauty, css;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            WindowApp = module.WindowApp;
            Numbering = module.Numbering;
            Formula = module.Formula;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            css = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'binary-complement-principle',
                // type: 'app',
                // appTitle: 'app ?',
                title: '二进制补码的数学原理',
                author: 'author',
                // category: '分类',
                time: new Date('2024-04-29 23:58'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement("style", { dangerouslySetInnerHTML: { __html: css } }),
                        React.createElement(P, null, "\u6700\u8FD1\u5728\u770B\u4E00\u4E9B\u865A\u62DF\u673A\u76F8\u5173\u7684\uFF0C\u91CC\u9762\u72B6\u6001\u5BC4\u5B58\u5668\u7684 Overflow \u7684\u89C4\u5219\u53D8\u5316\u770B\u7740\u975E\u5E38\u590D\u6742\uFF0C\u770B\u5B8C\u76F4\u63A5\u6CE8\u610F\u529B\u6DA3\u6563 ... \u91CD\u65B0\u60F3\u4E86\u4E0B\u5E94\u8BE5\u662F\u5BF9\u8865\u7801\u76F8\u5173\u539F\u7406\u7406\u89E3\u4E0D\u591F\u6DF1\u523B\uFF0C\u8FD9\u91CC\u624B\u5199\u4E2A\u300C\u8865\u7801 demo\u300D\u6765\u5B9E\u73B0\u5B8C\u5168\u540C\u6B65\u3002"),
                        React.createElement(P, null, "\u5907\u6CE8: \u5982\u65E0\u7279\u6B8A\u8BF4\u660E\uFF0C\u672C\u6587\u4E2D\u51FA\u73B0\u7684\u6574\u6570\u90FD\u662F 8 \u4F4D\u6574\u6570\u3002")),
                    React.createElement(H1Block, { id: "algebraic-relations-between-original-inverse-complement", title: "\u539F\u7801\u3001\u53CD\u7801\u3001\u8865\u7801\u7684\u89C4\u5219\u548C\u4EE3\u6570\u5173\u7CFB" },
                        React.createElement(P, null, "\u539F\u7801\u662F\u5C06\u6570\u5B57\u8868\u793A\u4E3A\u4E8C\u8FDB\u5236\u5F62\u5F0F\uFF0C\u53CD\u7801\u662F\u5C06\u5176\u6240\u6709\u4E8C\u8FDB\u5236\u4F4D\u7F6E\u53CD, \u8865\u7801\u5219\u662F\u5728\u53CD\u7801\u7684\u57FA\u7840\u4E0A\u52A0 1\u3002\u5177\u4F53\u8F6C\u6362\u53EF\u4EE5\u770B\u4E0B\u9762\u8FD9\u4E2A demo, \u5728\u4E0A\u9762\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF0C\u4E0B\u65B9\u4F1A\u5C06\u5176\u8F6C\u4E3A\u300C\u539F\u7801\u300D\u300C\u53CD\u7801\u300D\u300C\u8865\u7801\u300D\u4E09\u79CD\u5F62\u5F0F"),
                        React.createElement(WindowApp, { height: "auto" },
                            React.createElement(InputNum, null)),
                        React.createElement(P, null, "\u663E\u7136\u4E0A\u8FF0\u53D8\u6362\u7ACB\u9A6C\u5C31\u80FD\u6CE8\u610F\u5230\uFF0C\u4EFB\u610F\u6570\u503C N \u53CD\u7801\u540E\u5F97\u5230\u7684\u662F 255 - N\uFF0C\u800C\u8865\u7801\u662F\u5728\u53CD\u7801\u57FA\u7840\u4E0A\u52A0 1\uFF0C\u56E0\u6B64\u603B\u7ED3\u5982\u4E0B\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u539F\u7801: N"),
                            React.createElement(P, null, "\u53CD\u7801: 255 - N"),
                            React.createElement(P, null, "\u8865\u7801: 255 - N + 1, \u5373 256 - N")),
                        React.createElement(P, null, "* \u5176\u4E2D 255 \u4E3A 8 \u4F4D\u6574\u6570\u7684\u6700\u5927\u6570\u503C (2^n - 1)\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u4F4D\u5BBD\u7684\u6574\u6570\u4F9D\u6B21\u7C7B\u63A8")),
                    React.createElement(H1Block, { id: "A-B", title: "\u5B9E\u73B0\u51CF\u6CD5 A - B (\u5047\u8BBE A >= B)" },
                        React.createElement(P, null, "\u6CE8\u610F\u5230 N \u7684\u8865\u7801\u4E3A 256 - N, \u56E0\u6B64: "),
                        React.createElement(Formula, { source: `
        \\begin{aligned}
          A - B &= A + (-B) \\\\
                &= A + (-B) + 256 - 256 \\\\
                &= A + (256 - B) - 256 \\\\
                &= A + 补码(B) - 256 \\\\
        \\end{aligned}
      ` }),
                        React.createElement(P, null, "\u73B0\u5728\u6765\u9A8C\u8BC1\u4E00\u4E0B 87 - 8 = 79:"),
                        React.createElement(Formula, { source: `
        \\begin{aligned}
          87 - 8 &= 87 + 补码(8) - 256 \\\\
                 &= 87 + 248 - 256 \\\\
                 &= 335 - 256 \\\\
                 &= 79 \\\\
        \\end{aligned}
      ` }),
                        React.createElement(P, null, "\u5F53\u7136\u4F60\u53EF\u80FD\u8FD8\u4F1A\u95EE\u8FD9\u4E0D\u662F\u8FD8\u6709 `- 256` \u4E48\uFF0C\u8FD9\u4E2A\u6570\u5728\u4E8C\u8FDB\u5236\u4E0A\u6BD4\u8F83\u7279\u6B8A\uFF0C\u662F 0b100000000"),
                        React.createElement(P, null, "\u56E0\u6B64\u53EF\u4EE5\u8003\u8651 `335 & 0b11111111` \u6216\u8005 `335 % 256` \u7684\u65B9\u5F0F\u6765\u6C42\u51FA\u6700\u7EC8\u7ED3\u679C")),
                    React.createElement(H1Block, { id: "decimal-complement-extension", title: "\u5341\u8FDB\u5236\u4E0B\u7684\u8865\u7801\u63A8\u5E7F" },
                        React.createElement(P, null, "\u6CE8\u610F\u5230 8 \u4F4D\u4E8C\u8FDB\u5236\u6570 N \u7684\u8865\u7801\u662F 256 - N\uFF0C\u5C06\u8FD9\u4E2A\u7ED3\u8BBA\u63A8\u5E7F\u5230\u5341\u8FDB\u5236\u5219\u6709\uFF1A4 \u4F4D\u5341\u8FDB\u5236\u6570 N \u7684\u8865\u7801\u662F 1000 - N"),
                        React.createElement(Formula, { source: `
        \\begin{aligned}
          87 - 8 &= 87 + 补码(8) - 1000 \\\\
                 &= 87 + 992 - 1000 \\\\
                 &= 1079 - 1000 \\\\
                 &= 79 \\\\
        \\end{aligned}
      ` }),
                        React.createElement(P, null, "\u5BF9\u4E8E\u4EBA\u8111\u6765\u8BF4\uFF0C\u8BA1\u7B97 - 1000 \u975E\u5E38\u5BB9\u6613\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u8BA1\u7B97\u673A\u6765\u8BF4\u8BA1\u7B97 - 256 \u5176\u5B9E\u4E5F\u662F\u7C7B\u4F3C\u7684\uFF0C\u5F88\u597D\u5904\u7406\u3002\uFF08\u751A\u81F3\u90FD\u4E0D\u9700\u8981\u5904\u7406\uFF0C\u56E0\u4E3A\u524D\u9762\u90A3\u4E2A case \u91CC 335 \u5DF2\u7ECF\u6EA2\u51FA\u4E86\uFF0C\u5269\u4E0B\u7684\u4F4E 8 \u4F4D\u5C31\u662F\u6700\u7EC8\u7B54\u6848\u4E86\uFF09")),
                    React.createElement(H1Block, { id: "signed-number", title: "\u5F15\u5165\u6709\u7B26\u53F7\u6570" },
                        React.createElement(P, null, "\u524D\u9762\u8BA8\u8BBA\u7684\u90A3\u4E2A case \u662F\u6B63\u6570\u51CF\u53BB\u6B63\u6570\u540E\u8FD8\u662F\u6B63\u6570\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u8981\u8003\u8651\u4EFB\u610F\u52A0\u51CF\u6CD5\u7684\u65F6\u5019\u5C31\u5F97\u8003\u8651\u8D1F\u6570\u7684\u8868\u8FBE\u4E86\u3002"),
                        React.createElement(P, null, "\u6709\u7B26\u53F7\u6570\u6709\u4E24\u79CD\u7F16\u7801\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u76F4\u63A5\u7528\u6700\u9AD8\u4F4D\u4F5C\u4E3A\u7B26\u53F7\u4F4D\u7684\u8868\u8FBE\uFF0C\u5982\u4E0B\u5DE6\u8868\u6240\u793A\uFF1B\u4E00\u79CD\u5219\u662F\u300C\u8D1F\u6570\u7528\u8865\u7801\u3001\u6B63\u6570\u7528\u539F\u7801\u300D\u7684\u65B9\u5F0F\u8FDB\u884C\u7F16\u7801\uFF0C\u5982\u4E0B\u53F3\u8868\u6240\u793A\uFF1A"),
                        React.createElement(Table, { inline: true, style: { marginRight: '2em' }, fields: [
                                { key: 'positive', desc: '正数', },
                                { key: 'positiveD', desc: '十进制', },
                                { key: 'negative', desc: '负数', },
                                { key: 'negativeD', desc: '十进制', },
                            ], data: new Array(8).fill(0).map((_, index) => {
                                return {
                                    negative: toString4bit(index | 0b1000),
                                    negativeD: `-${index}`,
                                    positive: toString4bit(index),
                                    positiveD: `${index}`,
                                };
                            }) }),
                        React.createElement(Table, { inline: true, fields: [
                                { key: 'positive', desc: '原码', },
                                { key: 'positiveD', desc: '十进制', },
                                { key: 'negative', desc: '补码', },
                                { key: 'negativeD', desc: '十进制', },
                            ], data: new Array(8).fill(0).map((_, index) => {
                                return {
                                    negative: toString4bit((~(index + 1) & 0b1111) + 1),
                                    negativeD: `-${index + 1}`,
                                    positive: toString4bit(index),
                                    positiveD: `${index}`,
                                };
                            }) }),
                        React.createElement(P, null, "\u8FDB\u4E00\u6B65\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u300C1000\u300D\u5F53\u6210\u300C\u8D77\u59CB\u70B9\u300D\u7136\u540E\u8FDB\u4E00\u6B65\u505A\u5BF9\u6BD4\u5C31\u53EF\u4EE5\u5F97\u5230\u4E0B\u9762\u7684\u8FD9\u5F20\u8868\u3002"),
                        React.createElement(Table, { fields: [
                                { key: '0', desc: '补码有符号数', },
                                { key: '1', desc: '十进制', },
                                { key: '2', desc: '无符号数', },
                                { key: '3', desc: '十进制', },
                                { key: '4', desc: '经典有符号数', },
                                { key: '5', desc: '十进制', },
                            ], data: [
                                ['1000', '-8', '1000', '8', '1000', '-0'],
                                ['1001', '-7', '1001', '9', '1001', '-1'],
                                ['1010', '-6', '1010', '10', '1010', '-2'],
                                ['1011', '-5', '1011', '11', '1011', '-3'],
                                ['1100', '-4', '1100', '12', '1100', '-4'],
                                ['1101', '-3', '1101', '13', '1101', '-5'],
                                ['1110', '-2', '1110', '14', '1110', '-6'],
                                ['1111', '-1', '1111', '15', '1111', '-7'],
                                ['0000', '0', '0000', '0', '0000', '+0'],
                                ['0001', '1', '0001', '1', '0001', '1'],
                                ['0010', '2', '0010', '2', '0010', '2'],
                                ['0011', '3', '0011', '3', '0011', '3'],
                                ['0100', '4', '0100', '4', '0100', '4'],
                                ['0101', '5', '0101', '5', '0101', '5'],
                                ['0110', '6', '0110', '6', '0110', '6'],
                                ['0111', '7', '0111', '7', '0111', '7'],
                            ] }),
                        React.createElement(P, null, "\u53EF\u4EE5\u53D1\u73B0\u7ECF\u5178\u6709\u7B26\u53F7\u6570\u6709\u660E\u663E\u95EE\u9898\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "+0 \u548C -0 \u7684\u95EE\u9898\uFF0C\u91CD\u590D\u7F16\u7801"),
                            React.createElement(P, null, "\u505A\u51CF\u6CD5\u4E0D\u597D\u5F04"),
                            React.createElement(P, null, "\u968F\u7740\u4E8C\u8FDB\u5236\u6570\u7684\u9012\u589E\uFF0C\u7ECF\u5178\u6709\u7B26\u53F7\u6570\u662F\u9012\u51CF\u7684\uFF0C\u800C\u8865\u7801\u6709\u7B26\u53F7\u6570\u662F\u9012\u589E\u7684\u6EA2\u51FA\u540E\u521A\u597D\u662F 0, \u6362\u8A00\u4E4B\u6CA1\u6709\u505A\u5230\u300C\u6EA2\u51FA\u5FAA\u73AF\u300D")),
                        React.createElement(P, null, "\u7B2C\u4E09\u4E2A\u5C24\u4E3A\u91CD\u8981\uFF0C\u56E0\u4E3A\u5BF9\u67D0\u4E2A\u8D1F\u6570 N \u505A\u52A0 10 \u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u5C31\u662F\u52A0\u5341\u6B21 1 \u4E5F\u5C31\u662F\u987A\u7740\u8FD9\u5F20\u8868\u8D70\u5341\u6B21\uFF0C\u5982\u679C\u8DDF\u4E8C\u8FDB\u5236\u6570\u7684\u5355\u8C03\u6027\u5BF9\u4E0D\u4E0A\u7684\u8BDD\u5C31\u6CA1\u6CD5\u505A\u4E86\uFF0C\u800C\u521A\u597D\u8865\u7801\u5BF9\u4E0A\u4E86\u8FD9\u4E2A\u987A\u5E8F\u56E0\u6B64\u5BF9\u4E00\u4E2A\u8865\u7801\u7684\u6570\u5B57 +1 \u540E\u5F97\u5230\u7684\u4E8C\u8FDB\u5236\u6570\u4F9D\u7136\u662F\u5BF9\u5E94\u7684\u8865\u7801\uFF0C\u6BD4\u5982\u4E0A\u8868\u4E2D\uFF0C-6(1010) \u5BF9\u5176\u8FDB\u884C +1 \u5F97\u5230 1011 \u800C\u521A\u597D\u5C31\u662F -5(1011)")),
                    React.createElement(H1Block, { title: "\u5B9E\u73B0\u4EFB\u610F\u51CF\u6CD5 A - B" },
                        React.createElement(P, null, "\u524D\u9762\u8BA8\u8BBA\u7684 case \u662F A >= B \u7684\u60C5\u51B5\uFF0C\u73B0\u5728\u5F15\u5165\u4E86\u6709\u7B26\u53F7\u6570\u540E\u6211\u4EEC\u5C31\u80FD\u5B9E\u73B0\u4EFB\u610F\u51CF\u6CD5\u4E86"),
                        React.createElement(WindowApp, { height: "auto" },
                            React.createElement(InputNum, { initial: 17 })),
                        React.createElement(P, null, "\u4E0B\u9762\u662F\u8F93\u5165 A \u548C B \u5E76\u6C42\u51FA A + B \u548C A - B"),
                        React.createElement(WindowApp, { height: "auto" },
                            React.createElement(InputSignedNum, null))),
                    React.createElement(H1Block, { title: "\u6EA2\u51FA\u95EE\u9898" },
                        React.createElement(P, null, "\u4E5F\u8BB8\u4F60\u5DF2\u7ECF\u6CE8\u610F\u5230\u4E86\uFF0C\u5F53 A=127 B=1 \u7684\u65F6\u5019\uFF0C\u6B64\u65F6 A+B \u5C31\u4F1A\u51FA\u73B0\u6EA2\u51FA\u95EE\u9898\uFF0C\u6700\u7EC8\u5F97\u5230\u4E86\u9519\u8BEF\u7684 -128 \u4F5C\u4E3A\u7ED3\u679C\u3002"),
                        React.createElement(WindowApp, { height: "auto" },
                            React.createElement(InputSignedNum, { A: 127, B: 1 })),
                        React.createElement(P, null, "\u4E3A\u4E86\u5E94\u5BF9\u8FD9\u4E2A\u95EE\u9898, CPU \u5728\u72B6\u6001\u5BC4\u5B58\u5668\u91CC\u7528 Overflow Flag \u4F5C\u4E3A\u6709\u7B26\u53F7\u6570\u7B97\u672F\u8FD0\u7B97\u7684\u6EA2\u51FA\u6307\u793A"),
                        React.createElement(P, null, "\u4EE5\u52A0\u6CD5\u4E3A\u4F8B\uFF0C\u53EF\u4EE5\u6709\u679A\u4E3E\u51FA\u56DB\u79CD case:"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "A \u662F\u6B63\u6570\u3001B \u662F\u6B63\u6570\u3001\u7ED3\u679C\u662F\u8D1F\u6570"),
                            React.createElement(P, null, "A \u662F\u6B63\u6570\u3001B \u662F\u8D1F\u6570, \u6839\u636E\u7ED3\u679C\u7684\u6B63\u8D1F\u53EF\u7EC6\u5206\u4E3A\u4E24\u4E2A case: 8 + (-10) = -2 \u548C 8 + (-7) = 1 \u56E0\u6B64\u4E24\u8005\u90FD\u4E0D\u4F1A\u6EA2\u51FA"),
                            React.createElement(P, null, "A \u662F\u8D1F\u6570\u3001B \u662F\u6B63\u6570, \u52A0\u6CD5\u6EE1\u8DB3\u4EA4\u6362\u5F8B\uFF0C\u8DDF\u4E0A\u9762\u4E00\u6837"),
                            React.createElement(P, null, "A \u662F\u8D1F\u6570\u3001B \u662F\u8D1F\u6570\u3001\u7ED3\u679C\u662F\u6B63\u6570")),
                        React.createElement(P, null, "\u8BC4\u4F30\u4E0A\u8FF0\u6700\u540E\u53EF\u4EE5\u5F52\u7EB3\u51FA\uFF1A\u5F53 A \u548C B \u548C\u7ED3\u679C\u7684\u7B26\u53F7\u90FD\u4E0D\u76F8\u7B49\u7684\u65F6\u5019\u5C31\u662F\u6EA2\u51FA\u4E86: "),
                        React.createElement(Code, { lang: "tsx", source: `
        function isOverflow(a: number, b: number, result: number) {
          return !!(
            (a^result) & (b^result) & 0b10000000
          );
        }
      ` })));
            });
            function InputNum(props) {
                const [input, setInput] = React.useState(props.initial?.toString() ?? '24');
                const state = React.useMemo(() => {
                    if (input.length === 0)
                        return { type: 'error', message: '请输入一个 8 位整数 (0 ~ 255)' };
                    const value = Number(input);
                    if ((typeof value === 'number') && Number.isSafeInteger(value) && !Number.isNaN(value)) {
                        if (value < 0 || value > 255)
                            return { type: 'error', message: '请输入 0~256 的数值' };
                        return { type: 'success', value };
                    }
                    return { type: 'error', message: '非法输入' };
                }, [input]);
                const print = (value) => {
                    const b = toStringByte(value);
                    const h = value.toString(16);
                    const d = value.toString();
                    return `${b} ==> ${d} (0x${h})`;
                };
                return (React.createElement("div", { className: "input-num" },
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("span", null, "\u53F3\u4FA7\u8F93\u5165:"),
                        React.createElement("div", null,
                            React.createElement("input", { value: input, onChange: (e) => {
                                    setInput(e.target?.value ?? '');
                                } }))),
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("span", null, "\u539F\u7801"),
                        React.createElement("div", null, state.type === 'error' ? state.message : print((state.value)))),
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("span", null, "\u53CD\u7801"),
                        React.createElement("div", null, state.type === 'error' ? state.message : `${print(complementOne(state.value))} ==> 255 - ${state.value}`)),
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("span", null, "\u8865\u7801"),
                        React.createElement("div", null, state.type === 'error' ? state.message : `${print(complementTwo(state.value))} ==> 256 - ${state.value}`))));
            }
            function useSignedInput(initial) {
                const [input, setInput] = React.useState(initial.toString() ?? '24');
                const state = React.useMemo(() => {
                    if (input.length === 0)
                        return { type: 'error', message: '请输入一个 8 位整数 (0 ~ 255)' };
                    const value = Number(input);
                    if ((typeof value === 'number') && Number.isSafeInteger(value) && !Number.isNaN(value)) {
                        if (value < -128 || value > 127)
                            return { type: 'error', message: '请输入 -128 ~ 127 的数值' };
                        return { type: 'success', value: value < 0 ? complementTwo(-value) : value };
                    }
                    return { type: 'error', message: '非法输入' };
                }, [input]);
                return { input, setInput, state };
            }
            function InputSignedNum(props) {
                const A = useSignedInput(props.A ?? 2);
                const B = useSignedInput(props.B ?? 8);
                const print = (state) => {
                    if (state.type === 'error')
                        return state.message;
                    const b = toStringByte(state.value);
                    const h = state.value.toString(16);
                    const d = state.value.toString();
                    return `${b} ==> ${d} (0x${h})`;
                };
                const print2 = (state) => {
                    if (state.type === 'error')
                        return state.message;
                    const b = toStringByte(state.value);
                    return `${b}`;
                };
                const printSigned = (value) => {
                    if (value & 0b10000000)
                        return `-${complementTwo(value)}`;
                    return `${value}`;
                };
                return (React.createElement("div", { className: "input-num" },
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("div", null,
                            React.createElement("span", { style: { display: 'inline-block', width: '3em' } }, "A ="),
                            React.createElement("input", { style: { marginRight: '1em' }, value: A.input, onChange: (e) => {
                                    A.setInput(e.target?.value ?? '');
                                } }),
                            print(A.state))),
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("div", null,
                            React.createElement("span", { style: { display: 'inline-block', width: '3em' } }, "B ="),
                            React.createElement("input", { style: { marginRight: '1em' }, value: B.input, onChange: (e) => {
                                    B.setInput(e.target?.value ?? '');
                                } }),
                            print(B.state))),
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("div", null,
                            React.createElement("span", { style: { display: 'inline-block', width: '5em' } }, "A + B ="),
                            (A.state.type === 'success' && B.state.type === 'success')
                                ? (print2({ type: 'success', value: (A.state.value + B.state.value) & 0xff })
                                    + ' = '
                                    + printSigned((A.state.value + B.state.value) & 0xff))
                                : '非法输入')),
                    React.createElement("div", { className: "input-num-item" },
                        React.createElement("div", null,
                            React.createElement("span", { style: { display: 'inline-block', width: '17em' } }, "A - B = A + \u8865\u7801(B) - 256 ="),
                            (A.state.type === 'success' && B.state.type === 'success')
                                ? (print2({ type: 'success', value: (A.state.value + complementTwo(B.state.value)) & 0xff }) + ' - 256 = ' +
                                    printSigned((A.state.value + complementTwo(B.state.value)) & 0xff) + ' - 256')
                                : '非法输入'))));
            }
            function complementOne(value) {
                return (~value & 0xff);
            }
            function complementTwo(value) {
                return complementOne(value) + 1;
            }
            function toStringByte(value) {
                const str = value.toString(2);
                if (str.length > 8)
                    return str;
                return '0'.repeat(8 - str.length) + str;
            }
            function toString4bit(value) {
                const str = value.toString(2);
                if (str.length > 4)
                    return str;
                return '0'.repeat(4 - str.length) + str;
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
                        width: props.inline ? undefined : '100%',
                        display: props.inline ? 'inline-block' : 'block',
                        fontSize: '75%',
                        textAlign: 'center',
                        borderCollapse: 'collapse',
                        marginBottom: '1em',
                        fontFamily: 'var(--fontArticle)',
                        ...props.style,
                    } },
                    theadJsx,
                    tbodyJsx));
            }

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
