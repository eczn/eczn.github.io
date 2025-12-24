System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('RenderMatrix', RenderMatrix);

            function RenderMatrix(props) {
                const { matrix } = props;
                if (matrix.length === 0)
                    return React.createElement(React.Fragment, null, "\u7A7A\u77E9\u9635 (\u8BF7\u68C0\u67E5\u5165\u53C2)");
                return (React.createElement("div", { className: "matrix-main" },
                    React.createElement("div", { className: "matrix-bracket matrix-bracket-left" }),
                    matrix.map((line, x) => (React.createElement("div", { className: "matrix-line", key: `line-${x}` }, line.map((item, y) => (React.createElement("div", { key: `col-${y}`, className: "matrix-item", style: props.hightlightStyle?.(x, y) }, `${item}`
                        .replaceAll('+', '＋')
                        .replaceAll('-', '－'))))))),
                    React.createElement("div", { className: "matrix-bracket matrix-bracket-right" })));
            }

        })
    };
}));
//# sourceMappingURL=index.js.map
