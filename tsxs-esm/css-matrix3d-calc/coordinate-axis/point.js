System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports({
                Point: Point,
                PointPx: PointPx
            });

            function Point(props) {
                return (React.createElement("div", { className: "coordinate-point", style: {
                        left: `${props.x.toFixed(2)}em`,
                        bottom: `${props.y.toFixed(2)}em`,
                        ...props.style,
                    } },
                    React.createElement("span", { className: "coordinate-point-name" }, props.name)));
            }
            function PointPx(props) {
                return (React.createElement("div", { className: "coordinate-point", style: {
                        left: props.x,
                        bottom: props.y,
                        ...props.style,
                    } },
                    React.createElement("span", { className: "coordinate-point-name" }, props.name)));
            }

        })
    };
}));
