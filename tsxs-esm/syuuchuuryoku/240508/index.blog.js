System.register(['react', 'rally/@@', './bigint-add.js'], (function (exports) {
    'use strict';
    var React, P, WindowApp, Numbering, Code, metaBeauty, bigIntAdd;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            WindowApp = module.WindowApp;
            Numbering = module.Numbering;
            Code = module.Code;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            bigIntAdd = module.bigIntAdd;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'syuuchuuryoku-240508',
                title: '注意力训练 大数相加',
                author: 'eczn',
                category: '注意力训练',
                time: new Date('2024-05-08 22:20'),
            }));
            async function initialProps(context) {
                return {
                    codeBigIntAdd: await context.readText('./bigint-add.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                React.useEffect(() => {
                    window.bigIntAdd = bigIntAdd;
                    return () => {
                        delete window.bigIntAdd;
                    };
                }, []);
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "\u7ECF\u5178\u95EE\u9898\uFF0C\u5B9A\u957F\u4E8C\u8FDB\u5236\u6570\u8BA1\u7B97\u4F1A\u6709\u6EA2\u51FA\u7684\u95EE\u9898\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u7528 string \u6765\u8868\u793A\u6570\u5B57\uFF0C\u5E76\u5728\u8FD9\u6837\u7684\u5B57\u7B26\u4E32\u6784\u9020\u4E0A\u5B9E\u73B0\u52A0\u6CD5\u8FC7\u7A0B\uFF0C\u5DF2\u5B9E\u73B0\uFF0C\u6548\u679C\u5982\u4E0B\u6240\u793A\uFF1A\uFF08\u5DF2\u7ECF\u6302\u5230 window.bigIntAdd \u4E86\uFF09"),
                    React.createElement(WindowApp, { height: "auto" },
                        React.createElement(BitIntDemo, null)),
                    React.createElement(P, null, "\u6CE8\u610F\u5230\uFF1A"),
                    React.createElement(Numbering, { template: 'rect' },
                        React.createElement(P, null, "'0' + '1' === '1'"),
                        React.createElement(P, null, "'11' + '2' === '10' + ('1' + '2') === '13'"),
                        React.createElement(P, null, "'29' + '3' === '20' + ('9' + '3') === ('20' + \u8FDB\u4F4D1) + '2' === 22")),
                    React.createElement(P, null, "\u53EF\u4EE5\u770B\u5230\u7B2C\u4E09\u6B65\u7684\u8FDB\u4F4D\u5904\u7406\u662F\u4E00\u79CD\u4ECE\u4F4E\u4F4D\u5230\u9AD8\u4F4D\u4E0D\u65AD\u8FDB\u4F4D\u7684\u9012\u63A8\u5173\u7CFB\uFF0C\u56E0\u6B64\u6709:"),
                    React.createElement(Code, { lang: 'tsx', source: props.codeBigIntAdd }));
            });
            function BitIntDemo() {
                const a = useInput('a');
                const b = useInput('b');
                const res = (() => {
                    if (a.input.type === 'error')
                        return a.input;
                    if (b.input.type === 'error')
                        return b.input;
                    return { type: 'success', result: bigIntAdd(a.input.result, b.input.result) };
                })();
                const resPrint = (res.type === 'error'
                    ? `a + b = ## ${res.message} ##`
                    : `a + b = ${res.result}`);
                return (React.createElement("div", { style: { lineHeight: 2, padding: '1em', fontFamily: 'var(--fontCode)' } },
                    React.createElement("div", null,
                        "\u8F93\u5165 a: ",
                        a.jsx),
                    React.createElement("div", null,
                        "\u8F93\u5165 b: ",
                        b.jsx),
                    React.createElement("div", null, resPrint)));
            }
            function useInput(label) {
                const [state, setState] = React.useState('');
                const input = React.useMemo(() => {
                    if (state.length === 0)
                        return { type: 'error', message: `${label} 是无效输入 (请输入正整数)` };
                    if (/^[0-9]\d*$/.test(state))
                        return { type: 'success', result: state };
                    return { type: 'error', message: `${label} 是无效输入 (请输入正整数)` };
                }, [state]);
                const jsx = (React.createElement("input", { style: { padding: '.2em .5em', width: '10em', height: '1.5em', fontFamily: 'var(--fontCode)' }, value: state, onChange: e => {
                        setState(e.target?.value ?? '');
                    } }));
                return { input, state, setState, jsx };
            }

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
