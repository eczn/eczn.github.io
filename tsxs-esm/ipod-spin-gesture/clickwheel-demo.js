System.register(['react', './render-clickwheel-state.js', './use-clickwheel.js'], (function (exports) {
    'use strict';
    var React, RenderClickWheelState, useClickWheel;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            RenderClickWheelState = module.RenderClickWheelState;
        }, function (module) {
            useClickWheel = module.useClickWheel;
        }],
        execute: (function () {

            exports('ClickWheelDemo', ClickWheelDemo);

            function ClickWheelDemo() {
                const divRef = React.createRef();
                const clickWheel = useClickWheel(divRef, () => { });
                return (React.createElement("div", { className: "clickwheel-demo" },
                    React.createElement("div", { ref: divRef, className: "clickwheel-circle" }),
                    React.createElement(RenderClickWheelState, { state: clickWheel.state })));
            }

        })
    };
}));
//# sourceMappingURL=clickwheel-demo.js.map
