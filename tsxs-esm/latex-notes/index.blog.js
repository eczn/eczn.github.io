System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, metaBeauty, Col, Code, Formula, H1Block;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            metaBeauty = module.metaBeauty;
            Col = module.Col;
            Code = module.Code;
            Formula = module.Formula;
            H1Block = module.H1Block;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'latex-notes',
                title: 'LaTeX 笔记',
                author: 'eczn',
                // category: '分类',
                // isDraft: true,
                time: new Date('2023-10-21 00:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            function RenderLaTeXes(props) {
                const res = props.codes.map((c, idx) => React.createElement(Col, { style: { alignItems: 'center' } },
                    React.createElement(Code, { lang: 'latex', source: c }),
                    React.createElement(Formula, { source: c })));
                return (React.createElement(H1Block, { id: props.id, title: props.title },
                    props.children ?? null,
                    res));
            }
            function PlayGround() {
                const [input, setInput] = React.useState(`Hello, \\\\\n\\LaTeX \\\\`);
                return React.createElement(P, null,
                    React.createElement("textarea", { style: {
                            display: 'block',
                            padding: '.5em 1em',
                            boxSizing: 'border-box',
                            fontFamily: 'menlo, consolas, monospace',
                            width: '100%',
                            height: '12em',
                        }, value: input, onChange: e => {
                            setInput(e.target?.value ?? '');
                        } }),
                    React.createElement("div", { style: { fontSize: '2rem' } },
                        React.createElement(Formula, { source: input })));
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u524D\u6BB5\u65F6\u95F4\u63A5\u4E86 $\\KaTeX$, \u5E76\u4E14\u5927\u91CF\u7528\u4E86 $\\LaTeX$ \u6765\u5199\u516C\u5F0F\uFF0C\u8FD9\u91CC\u505A\u4E0B\u8BB0\u5F55\u5907\u5FD8 & \u6784\u9020\u4E00\u4E2A latex \u5728\u7EBF\u6E32\u67D3:"),
                        React.createElement(PlayGround, null)),
                    React.createElement(RenderLaTeXes, { id: "equations", title: "\u7B49\u5F0F\u7EC4 & \u7B49\u53F7\u5BF9\u9F50", codes: [
                            `
      % 下面用 aligned 可以关掉编号
      \\begin{align}
        A &= 3  \\\\
        B &= 4  \\\\
        C &= 5  \\\\
          &= A^2 + B^2
      \\end{align}
      `,
                            `
      \\begin{cases}
        ax + by + c = 0    \\\\
        ax^2 + bx + c = 0  \\\\
      \\end{cases}
      `
                        ] }),
                    React.createElement(RenderLaTeXes, { id: "equations", title: "\u7B26\u53F7", codes: [
                            `
      \\xcancel{ECZN} \\\\
      \\Box \\\\
      \\$ \\\\
      \\P \\\\
      A^a = B_b \\\\ % 上下标
      `,
                        ] }),
                    React.createElement(RenderLaTeXes, { id: "matrix", title: "\u77E9\u9635", codes: [
                            `
      \\begin{bmatrix}
        1 & 0 & 0 \\\\
        0 & 1 & 0 \\\\
        0 & 0 & 1 \\\\
      \\end{bmatrix}
      `,
                            `
      \\def\\arraystretch{1.5}
        \\begin{array}{c:c:c}
        a & b & c \\\\
        \\hline     % 实线
        d & e & f \\\\
        \\hdashline % 虚线
        g & h & i
      \\end{array}
      `,
                        ] }),
                    React.createElement(RenderLaTeXes, { id: "macro", title: "\u5B8F", codes: [
                            `
      \\def\\circle{x^2+y^2}
      \\circle = 25
      \\circle = 36
      `,
                            `
      % 参数宏
      \\def\\fullCircle#1#2#3{
        #1x^2 + #2y^2 = #3
      }
      \\fullCircle{a}{b}{25}
      `,
                        ] },
                        React.createElement(P, null, "\u5143\u8BED\u8A00\u7F16\u7A0B\uFF01")));
            });

        })
    };
}));
