System.register(['react', './index.js', '../formula/index.js'], (function (exports) {
    'use strict';
    var React, RenderMatrix, Formula, SymbolCharacter;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            RenderMatrix = module.RenderMatrix;
        }, function (module) {
            Formula = module.Formula;
            SymbolCharacter = module.SymbolCharacter;
        }],
        execute: (function () {

            exports('MatrixEqual', MatrixEqual);

            function MatrixEqual(props) {
                return (React.createElement(Formula, { style: {
                    // marginLeft: `calc(${props.left.length} * -0.2em)`,
                    } },
                    React.createElement(SymbolCharacter, { value: props.left }),
                    React.createElement(SymbolCharacter, { value: "=" }),
                    React.createElement(RenderMatrix, { matrix: props.right })));
            }

        })
    };
}));
//# sourceMappingURL=matrix-equal.js.map
