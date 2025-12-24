System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('CoordinateAxis', CoordinateAxis);

            function CoordinateAxis(props) {
                const { width, height, zero, subview, hiddenAxis, } = props;
                // const realZeroX = 
                return (React.createElement("div", { className: "coordinate-axis-main", style: {
                        width: `${width}em`,
                        height: `${height}em`,
                    } },
                    hiddenAxis
                        ? null
                        : React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "axis-x", style: { height: 1, width: '100%', left: 0, top: `${height - zero[1]}em` } }),
                            React.createElement("div", { className: "axis-y", style: { width: 1, height: '100%', top: 0, left: `${zero[0]}em` } })),
                    React.createElement("div", { className: "coordinate-zero", style: {
                            transform: `translate(${zero[0]}em, -${zero[1]}em)`
                        } }, subview)));
            }

        })
    };
}));
//# sourceMappingURL=index.js.map
