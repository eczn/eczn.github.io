System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, Code, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'syuuchuuryoku-240310',
                // type: 'app',
                // appTitle: 'app ?',
                title: '注意力训练 toUpperCase',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-03-10 21:22'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u5B9E\u73B0\u4E00\u4E2A `toUpperCase(str: string): string` \u8981\u6C42\u80FD\u5C06 str \u4E2D\u51FA\u73B0\u7684 a-z \u5B57\u6BCD\u8F6C\u6210\u5927\u5199\u5F62\u5F0F\uFF0C\u6BD4\u5982 `'\u4F60\u597D hello'` \u53D8\u6210 `'\u4F60\u597D HELLO'`")),
                    React.createElement("div", null,
                        React.createElement(H1Block, { id: "h1", title: "\u89E3\u6790" },
                            React.createElement(P, null, "\u4E5F\u8BB8\u53EF\u4EE5\u8FD9\u6837\uFF0C\u91CD\u590D 26 \u6B21\u5224\u65AD\uFF0C\u6216\u8005\u5F04\u4E00\u4E2A map \u4E0A\u53BB"),
                            React.createElement(Code, { lang: 'tsx', source: `
        function charToUpperCase(ch: string): string | null {
          if (ch === 'a') return 'A';
          // 重复 26 次 a-z
          return null;
        }
      ` }),
                            React.createElement(P, null, "\u4F46\u662F\u6CE8\u610F\u5230 'a' \u548C 'A' \u7684 ASCII \u7F16\u7801\u5206\u522B\u4E3A 0x61 \u548C 0x41, \u5C55\u5F00\u6765\u770B\u5176\u5B9E\u53EA\u6709 1 bit \u7684\u533A\u522B:"),
                            React.createElement(Code, { lang: 'tsx', source: `
        'a' => 0x61 => 01100001
                         | 注意只有这一位不同
        'A' => 0x41 => 01000001
      ` }),
                            React.createElement(P, null, "\u56E0\u6B64\u53EF\u4EE5\u7528\u4F4D\u8FD0\u7B97\u6216\u8005\u76F4\u63A5 +- 0x20 \u53BB\u4F18\u5316\u4E86, \u8FD9\u91CC\u53EA\u8D34\u4E00\u90E8\u5206\u6838\u5FC3\u5B9E\u73B0"),
                            React.createElement(Code, { lang: 'tsx', source: `
        function charToUpperCase(ch: string): string | null {
          const code = ch.charCodeAt(0);
          if (code >= 0x41 && code <= 0x7a) { // a-z
            return code & 0b11011111;
          }
          return null;
        }
      ` }),
                            React.createElement(P, null, "\u5E94\u8BE5\u662F\u65E9\u671F\u8BA1\u7B97\u673A\u5927\u4F6C\u4EEC\u5728\u8BBE\u8BA1 ASCII \u7684\u65F6\u5019\u5C31\u8003\u8651\u5230\u4E3A\u4E86\u4F7F\u7528\u4F4D\u8FD0\u7B97\u800C\u7279\u610F\u8FD9\u6837\u8BBE\u8BA1\u7684\u7F16\u7801\u89C4\u5219\u3002"),
                            React.createElement(P, null, "\u6B64\u5916\uFF0C\u8FD9\u79CD\u8BBE\u8BA1\u5BF9\u4E8E\u952E\u76D8\u7684\u5E95\u5C42\u786C\u4EF6\u5B9E\u73B0\u4E5F\u5F88\u53CB\u597D\uFF0C\u5C06 Shift \u952E\u77ED\u63A5\u5230\u300C\u4E0D\u540C\u7684\u90A3\u4E2A\u4F4D\u300D\u4E0A\uFF0C\u6309\u4E0B\u53BB\u7684\u65F6\u5019\u5B9E\u9645\u5C31\u505A\u4E86\u4F4D\u8FD0\u7B97\u6765\u5B9E\u73B0\u8F6C\u5927\u5C0F\u5199\u4E86"))));
            });

        })
    };
}));
