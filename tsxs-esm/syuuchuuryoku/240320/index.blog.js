System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, Code, Formula, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Code = module.Code;
            Formula = module.Formula;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'syuuchuuryoku-240320',
                // type: 'app',
                // appTitle: 'app ?',
                title: '注意力训练 mul',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-03-20 23:44'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u5728\u4E0D\u4F7F\u7528 `*` \u64CD\u4F5C\u7B26\u7684\u60C5\u51B5\u4E0B\u5B9E\u73B0\u4E58\u6CD5:"),
                        React.createElement(P, null, "`mul(a: number, b: number): number`"),
                        React.createElement(P, null, "\u6BD4\u5982\u6267\u884C `mul(3, 5)` \u7ED3\u679C\u4E3A `15`"),
                        React.createElement(P, null, " (\u8981\u6C42\u6267\u884C\u901F\u5EA6\u5C3D\u53EF\u80FD\u5FEB)")),
                    React.createElement(H1Block, { id: "h1", title: "\u89E3\u6790" },
                        React.createElement(P, null, "\u4E00\u773C\u4E01\u771F\uFF0C\u76F4\u63A5\u6309\u7167\u4E58\u6CD5\u7684\u52A0\u6CD5\u5B9A\u4E49\u6765\u505A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        const mul = (a: number, b: number): number => {
          if (b === 0) return 0;
          return a + mul(a, b - 1);
        }
      ` }),
                        React.createElement(P, null, "\u4F46\u662F\uFF0C\u8FD9\u6837\u8BA1\u7B97\u590D\u6742\u5EA6\u662F $O(n)$ \u800C\u4E14\uFF0C\u6570\u91CF\u7EA7\u7A0D\u5FAE\u5927\u4E00\u70B9\u5C31\u6808\u6EA2\u51FA\u4E86\uFF0C\u5982\u4F55\u4F18\u5316\uFF1F "),
                        React.createElement(P, null, "\u6CE8\u610F\u5230\u6309\u52A0\u6CD5\u5B9A\u4E49\u8BA1\u7B97 3 * 14 \u7684\u8BA1\u7B97\u8981\u8DD1 14 \u6B21"),
                        React.createElement(Formula, { source: `
        \\begin{aligned}
          3 * 14 &= \\underbrace{3 + 3 + \\cdots + 3}_{\\text{一共 14 次}} \\\\
        \\end{aligned}
      ` }),
                        React.createElement(P, null, "\u800C\u901A\u8FC7\u9664 2 \u4E58 2 \u7684\u65F6\u5019:"),
                        React.createElement(Formula, { source: `
        \\begin{aligned}
          3 * 14 &= 3 * (14 / 2) * 2  \\\\
                 &= 3 * 7 * 2         \\\\
                 &= \\underbrace{3 * 7 + 3 * 7}_{\\text{仅需计算 3*7}}  \\\\
          3 * 7  &= \\underbrace{3 + 3 + \\cdots + 3}_{\\text{一共 7 次}}  \\\\
        \\end{aligned}
      ` }),
                        React.createElement(P, null, "\u4E5F\u5C31\u662F\u8BF4 `3 * 14` \u5B9E\u9645\u5C31\u662F\u8BA1\u7B97 `3 * 7` + `3 * 7`, \u6700\u540E\u5176\u5B9E\u5C31\u53EA\u9700\u8981 7 \u6B65, \u5B9E\u73B0\u4E86\u6B65\u9AA4\u89C4\u6A21\u7684\u7F29\u5C0F, \u65F6\u95F4\u590D\u6742\u5EA6\u53EF\u4EE5\u8FBE\u5230\u9006\u5929\u7684 $O(log_n)$ \u5B9E\u9645\u6267\u884C\u901F\u5EA6\u76F8\u5F53\u5FEB"),
                        React.createElement(Code, { lang: 'tsx', source: `
        const mul = (a, b) => {
          if (b === 0) return 0;
          if (b % 2 === 1) return a + mul(a, b - 1);
          const temp = mul(a, b / 2);
          return temp + temp; // 或者 temp * 2 或者 temp << 2
        }
      ` }),
                        React.createElement(P, null, "\u6211\u662F\u5728 SICP \u8FD9\u672C\u4E66\u770B\u5230\u7684\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u4F60\u6B63\u5728\u624B\u6413 CPU \u521A\u597D\u9700\u8981\u5B9E\u73B0\u4E58\u6CD5\uFF0C\u4E0D\u59A8\u8BD5\u8BD5\u4E0A\u9762\u7684\u601D\u8DEF\u53BB\u4F18\u5316\uFF0C\u6CE8\u610F\u91CC\u9762\u7684 *2 /2 \u5176\u5B9E\u90FD\u662F\u4F4D\u8FD0\u7B97\uFF0C\u5305\u62EC\u5224\u65AD\u5947\u5076\u6570\u4E5F\u53EF\u4EE5\u8D70\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u3002"),
                        React.createElement(P, null, "\u66F4\u6DF1\u4E00\u6B65\u7684\u601D\u8003\uFF1A\u9012\u5F52\u5C55\u5F00\u540E\u5176\u5B9E\u5448\u73B0\u4E86\u4E00\u79CD\u6811\u72B6\u7ED3\u6784\uFF0C\u4E5F\u8BB8\u8FD9\u6837\u7684\u6811\u7ED3\u6784\u91CC\u4F1A\u8574\u542B\u7740\u4F18\u5316\u601D\u8DEF")));
            });

        })
    };
}));
