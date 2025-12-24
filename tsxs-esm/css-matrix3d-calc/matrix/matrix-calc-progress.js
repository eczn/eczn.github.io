System.register(['react', './index.js', 'rally/@@', './matrix-product.js', '../formula/index.js'], (function (exports) {
    'use strict';
    var React, RenderMatrix, P, Button, matrixProduct, SymbolProduct, SymbolCharacter;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            RenderMatrix = module.RenderMatrix;
        }, function (module) {
            P = module.P;
            Button = module.Button;
        }, function (module) {
            matrixProduct = module.matrixProduct;
        }, function (module) {
            SymbolProduct = module.SymbolProduct;
            SymbolCharacter = module.SymbolCharacter;
        }],
        execute: (function () {

            exports('MatrixCalcProgress', MatrixCalcProgress);

            function MatrixCalcProgress(props) {
                const { points = [] } = props;
                const [running, setRunning] = React.useState(false);
                const [pointIdx, setPointIdx] = React.useState(0);
                const [timeGap, setTimeGap] = React.useState(1200);
                const activePoint = points[pointIdx % points.length];
                const style = { backgroundColor: '#f6f5b6' };
                const matrixResult = props.matrixC || matrixProduct(props.matrixA, props.matrixB);
                React.useEffect(() => {
                    if (props.disable)
                        return;
                    const timer = setInterval(() => {
                        if (!running)
                            return;
                        setPointIdx(p => p + 1);
                    }, timeGap);
                    return () => {
                        clearInterval(timer);
                    };
                }, [timeGap, running, props.disable]);
                // 加速是 setInterval 频率更快
                const speedUp = () => setTimeGap(t => {
                    if (t - 100 <= 0)
                        return 100;
                    return t - 100;
                });
                // 减速是 setInterval 频率更慢
                const speedDown = () => setTimeGap(t => t + 100);
                // 变换
                const toggleRunning = () => {
                    setRunning(r => !r);
                };
                return React.createElement(P, { className: "matrix-calc-progress", style: { textAlign: 'center' } },
                    React.createElement(RenderMatrix, { hightlightStyle: (x, y) => {
                            if (props.disable)
                                return {};
                            if (props.hightlightA?.(activePoint, [x, y]))
                                return style;
                            return {};
                        }, matrix: props.matrixA }),
                    React.createElement(SymbolProduct, null),
                    React.createElement(RenderMatrix, { hightlightStyle: (x, y) => {
                            if (props.disable)
                                return {};
                            if (props.hightlightB?.(activePoint, [x, y]))
                                return style;
                            return {};
                        }, matrix: props.matrixB }),
                    React.createElement(SymbolCharacter, null),
                    React.createElement(RenderMatrix, { hightlightStyle: (x, y) => {
                            if (props.disable)
                                return {};
                            if (props.hightlightC?.(activePoint, [x, y]))
                                return style;
                            return {};
                        }, matrix: matrixResult }),
                    props.matrixFinal
                        ? React.createElement(React.Fragment, null,
                            React.createElement(SymbolCharacter, null),
                            React.createElement(RenderMatrix, { matrix: props.matrixFinal }))
                        : null,
                    props.disable
                        ? null
                        : React.createElement("div", { style: { marginTop: '1em' } },
                            running && React.createElement(Button, { size: 'small', style: { margin: '0 1em' }, onClick: speedDown }, "\u51CF\u901F"),
                            React.createElement(Button, { size: 'small', style: { margin: '0 1em' }, onClick: toggleRunning }, running ? `t=${timeGap}` : '启动轮播'),
                            running && React.createElement(Button, { size: 'small', style: { margin: '0 1em' }, onClick: speedUp }, "\u52A0\u901F")));
            }

        })
    };
}));
//# sourceMappingURL=matrix-calc-progress.js.map
