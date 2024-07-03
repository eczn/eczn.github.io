System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, Code, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'syuuchuuryoku-240703',
                title: '注意力训练 代数视角里的类型',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-07-03 12:20'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "... \u6CE8\u610F\u5230\u53EF\u4EE5\u901A\u8FC7\u679A\u4E3E\u6210\u5458\u7684\u65B9\u5F0F\u6765 `\u5B9A\u4E49` \u7C7B\u578B\uFF1A "),
                    React.createElement(Code, { lang: 'tsx', source: `
      // 共 256 个，可使用 8 bit = log2(256) 来存储表达, 即 0x00 到 0xFF 
      enum Uint8 { 0, 1, 2 ... 255 }

      // 共 2 个，可使用 1 bit = log2(2) 来存储表达, 即 0b0 和 0b1 
      enum bool { true, false }
    ` }),
                    React.createElement(P, null, "... \u96C6\u4E2D\u6CE8\u610F\u529B: "),
                    React.createElement(Code, { lang: 'tsx', source: `
      enum Uint { onlyOne }
      // 共 1 个成员，占用 0 bit = log2(1) 来存储表达 (没错，这就是 null)
    ` }),
                    React.createElement(P, null, "... \u8FDB\u4E00\u6B65\u96C6\u4E2D\u6CE8\u610F\u529B\uFF0C\u5199\u51FA never \u7684\u5B9A\u4E49: "),
                    React.createElement(Code, { lang: 'tsx', source: `
      // 占用 log2(0) 将会使用趋近于 -∞ 来存储表达，因此代码里出现这个的时候，
      // 程序就中断了, 表现上就是被 throw 了一样 (ts 里出现 never 的表现)
      enum never { }
    ` }),
                    React.createElement(P, null, "... \u6CE8\u610F\u529B\u6DA3\u6563\uFF1A "),
                    React.createElement(Code, { lang: 'tsx', source: `
      // 那么，需要占用多少 bit 可以存储表达 ? 
      enum unknown { 一切合法取值 }
    ` }),
                    React.createElement(P, null, `—— 是的，一个 unknown value 就是任意长度的 buffer，因此这类类型在任何语言里处理起来都很胃疼，比如 go 的 interface{}，C 的 void*，Swift 的 Any 等等`),
                    React.createElement(P, null, "\u2014\u2014 \u8FD9\u540C\u65F6\u4E5F\u662F unknown \u6BD4\u8F83\u96BE\u5904\u7406\u7684\u539F\u56E0\uFF0C\u603B\u662F\u9700\u8981\u5199\u4E00\u4E2A\u8C13\u8BED `(x: any): x is X` \u6765\u505A narrowing \u964D\u7EA7\u5230\u5177\u4F53\u7684\u7C7B\u578B\u624D\u80FD\u5B9E\u73B0\u5904\u7406\u3002 "),
                    React.createElement(P, null, "\uFF08\u5B9E\u9645 ip \u534F\u8BAE\u5C31\u662F\u7528 C \u7684 struct type \u5B9E\u73B0\u7684, \u66F4\u8FDB\u4E00\u6B65\u8BF4: C struct type \u5389\u5BB3\u7684\u5730\u65B9\u662F\u5C06\u51E0\u4E2A\u5B57\u6BB5\u62FC\u63A5\u5728\u4E00\u8D77\uFF0C\u5176\u70B9\u8BFB\u3001\u70B9\u5199\u7684\u5B9E\u73B0\u8D70 base + \u504F\u79FB\u7684\u65B9\u5F0F\u5728\u7F16\u8BD1\u5668\u5C42\u9762\u5B9E\u73B0, \u5BF9\u4E8E CPU \u6765\u8BF4\u8FD9\u5C31\u662F\u4EFB\u610F\u957F\u5EA6\u7684 buffer\uFF0C\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u5B9A\u4E49\u4E86 unknown \u56E0\u800C\u5B9E\u73B0\u4E86\u5B9A\u4E49\u79EF\u7C7B\u578B + \u590D\u6742\u4E16\u754C\u62BD\u8C61\u7684\u80FD\u529B\uFF09"),
                    React.createElement(P, null, "\uFF08\u53E6\u5916\uFF0C\u7528 0x00 \u4F5C\u4E3A null \u7684\u5E95\u5C42\u5B58\u50A8\u662F\u6709\u95EE\u9898\u7684\uFF0C\u5B9E\u9645\u4E0A\u7531\u4E8E\u53EF\u4EE5\u7528 0 \u5B57\u8282\u53BB\u5B58\u50A8 null \u5C31\u8BF4\u660E\u662F\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\u5668\u6784\u9020\u7684\u8BED\u6CD5\u53BB\u907F\u514D\u51FA\u73B0 null \u7684\uFF0C\u8FD9\u4E5F\u662F\u524D\u73B0\u4EE3\u8BED\u8A00\u8D70\u7684\u5F2F\u8DEF\u4E86\uFF0C\u800C\u5F53\u4EE3\u8BED\u8A00 Rust Moonbit Swift \u7B49\u90FD\u5E26\u4E86 enum adt \u4E86\uFF0C\u5C31\u4E0D\u4F1A\u6709 null \u7684\u95EE\u9898\u4E86\uFF09"));
            });

        })
    };
}));
