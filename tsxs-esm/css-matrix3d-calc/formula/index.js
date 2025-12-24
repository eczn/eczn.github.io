System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports({
                Formula: Formula,
                SymbolCharacter: SymbolCharacter,
                SymbolProduct: SymbolProduct
            });

            const nthMap = [
                '',
                ...`➊➋➌➍➎➏➐➑➒➓`.split(''),
            ];
            function Formula(props) {
                return (React.createElement("div", { className: "formula", style: props.style },
                    typeof props.nth === 'number' && React.createElement("div", { className: "formula-nth" }, nthMap[props.nth]),
                    props.children));
            }
            function SymbolProduct() {
                return React.createElement("div", { className: "formula-symbol formula-product" });
            }
            function SymbolCharacter(props) {
                return React.createElement("div", { className: "formula-symbol formula-character" }, `${props.value || '='}`
                    .replaceAll('+', '＋')
                    .replaceAll('-', '－'));
            }

        })
    };
}));
//# sourceMappingURL=index.js.map
