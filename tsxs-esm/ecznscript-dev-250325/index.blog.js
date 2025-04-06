System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, Numbering, Code, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Numbering = module.Numbering;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'EcznScript 开发日志 250330',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'EcznScript 开发日志 250330',
                author: 'eczn',
                // category: '分类',
                time: new Date('2025-03-30 00:00'),
                isDraft: true,
            }));
            async function initialProps(context) {
                return {};
            }
            // 考虑到如下几个原因，我决定还是强制分号比较好，
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "\u6211\u5FC5\u987B\u8981\u5728\u8BED\u8A00\u7684\u4E00\u5F00\u59CB\u5C31\u601D\u8003\u8981\u4E0D\u8981\u5206\u53F7\u7684\u95EE\u9898\u3002\u9996\u5148\u5148\u5206\u7C7B\u8BA8\u8BBA\u4E00\u4E0B\u5E02\u9762\u4E0A\u5E38\u89C1\u7684\u51E0\u79CD\u8BED\u8A00\u8E29\u8FC7\u7684\u5751\uFF1A "),
                    React.createElement(H1Block, { id: "semicolon-ornot", title: "\u5F3A\u5236\u5206\u53F7\u4EE5\u53CA ASI" },
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "Rust: \u8BBE\u8BA1\u7684\u5F88\u597D\uFF0C\u6709\u5206\u53F7\u7684\u5F53\u4F5C\u8BED\u53E5\uFF0C\u65E0\u5206\u53F7\u7684\u5F53\u4F5C\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u9700\u8981 parser \u5B9E\u73B0 ASI \u673A\u5236\u53BB\u731C\u54EA\u91CC\u53EF\u4EE5\u585E\u4E0B\u5206\u53F7"),
                            React.createElement(P, null, "JavaScript: \u8FD9\u5757\u8BBE\u8BA1\u7684\u5F88\u7CDF\u7CD5, js \u662F\u4E2A\u5927\u6742\u70E9\uFF0C\u9664\u4E86\u9759\u6001\u7C7B\u578B\u4E4B\u5916\u5565\u90FD\u6709\uFF0C\u56E0\u6B64\u8BED\u8A00\u672C\u8EAB\u76F8\u5F53\u590D\u6742\uFF0C\u8FD9\u5BFC\u81F4\u89C4\u8303\u91CC\u7684 ASI \u89C4\u5219\u5E76\u4E0D\u80FD\u8986\u76D6\u5168\u90E8\u5E38\u89C1\uFF1A\u8FD9\u5C31\u5BFC\u81F4\u5F88\u591A\u65F6\u5019\u4F1A\u51FA\u4E8B\uFF0C\u800C\u6CA1\u6709\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u4F60\u751A\u81F3\u53D1\u73B0\u4E0D\u4E86"),
                            React.createElement(P, null, "golang: \u4F1A\u505A ASI \u81EA\u52A8\u5206\u53F7\u63D2\u5165\uFF0C\u6574\u4F53\u8BBE\u8BA1\u7684\u8FD8\u884C\uFF0C\u914D\u5408 gofmt \u548C\u7C7B\u578B\u68C0\u67E5\u4E0B\uFF0C\u6CA1\u6709\u660E\u663E\u95EE\u9898\uFF08\u6211\u6CA1\u9047\u5230\u8FC7 go \u7684 asi \u95EE\u9898\u3001\u53EF\u80FD\u5199\u7684\u4E0D\u591Ahhh\uFF09"),
                            React.createElement(P, null, "Lisp \u7CFB: \u8FD9\u7C7B\u8BED\u8A00\u5199\u51FA\u6765\u5C31\u662F AST \u65E0\u9700\u8003\u8651\u5206\u53F7\u7684\u95EE\u9898"),
                            React.createElement(P, null, "Pyhton: \u53EF\u52A0\u53EF\u4E0D\u52A0\uFF0C\u4F46\u7F29\u8FDB\u5E26\u8BED\u4E49\u7684\u505A\u6CD5\u6211\u4E0D\u63A5\u53D7"),
                            React.createElement(P, null, "C/C++: \u5FC5\u987B\u52A0\uFF0C\u5DE5\u7A0B\u548C\u5B9E\u8DF5\u4E0A\u6CA1\u5565\u95EE\u9898")),
                        React.createElement(P, null, "EcznScript \u76EE\u524D\u4E3B\u8981\u7684\u60F3\u6CD5\u8FD8\u662F \u201C\u82E5\u80FD\u914D\u5408 V8 \u7684 JIT \u7B56\u7565\u914D\u5408\u4ECE Rust \u548C go \u90A3\u91CC\u8D85\u6765\u7684\u7EC4\u5408\u5F0F\u7F16\u7A0B\u601D\u60F3\uFF0C\u4F1A\u6709\u8FD8\u7B97\u53EF\u4EE5\u7684\u5E94\u7528\u6027\u80FD\u4EE5\u53CA\u5F00\u53D1\u4F53\u9A8C\u201D\uFF0C\u56E0\u6B64\u66F4\u9700\u8981\u5173\u6CE8\u5979\u7684\u7F16\u8BD1\u540E\u7AEF\u524D\u7AEF\u90E8\u5206\u6211\u6700\u8FD1\u4E5F\u5C1D\u8BD5\u5199\u8FC7\u65E0\u5206\u53F7\u7684 parser\uFF0C\u9884\u8BA1\u4F1A\u6709\u6BD4\u8F83\u591A\u7684\u8BBE\u8BA1/\u5F00\u53D1\u6210\u672C\uFF0C\u8003\u8651\u5230\u8FD9\u4E2A\u6700\u540E\u8FD8\u662F\u51B3\u5B9A\uFF1A\u5F3A\u5236\u5206\u53F7\uFF0C\u5F53\u7136\u4E0D\u6392\u9664\u540E\u7EED\u7248\u672C\u91CC\u5F15\u5165 ASI \u673A\u5236\u3002")),
                    React.createElement(H1Block, { id: "new-ui-programming-style", title: "\u65B0\u7684 UI \u7F16\u7A0B\u98CE\u683C ?" },
                        React.createElement(P, null,
                            "\u8FD9\u91CC\u7545\u60F3",
                            React.createElement("s", null, "\u610F\u6DEB"),
                            "\u4E00\u4E0B The New React \u662F\u548B\u6837\u7684 :"),
                        React.createElement(Code, { lang: 'js', source: `
        import React from 'react';

        struct InputModel {
          value: string,
          onChange(e: MouseEvent): void,
        }

        export function useInputModel(): InputModel {
          const [value, setValue] = React.useState('');
          const onChange = (e: MouseEvent) => setValue(e.target.value!);
          return InputModel { value, onChange }
        }
        
        export function Input(props: { model: InputModel }) {
          return <input {...props} />
        }

        function App() {
          const model = useInputModel();
          return <Input model={model} />
        }
      ` })));
            });

        })
    };
}));
