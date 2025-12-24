System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('Rect', Rect);

            function Rect(props) {
                return (React.createElement("div", { style: {
                        width: `${props.width}em`,
                        height: `${props.height}em`,
                        left: `${props.left}em`,
                        bottom: `${props.bottom}em`,
                        background: props.color,
                        ...props.style,
                    } }));
            }

        })
    };
}));
//# sourceMappingURL=rect.js.map
