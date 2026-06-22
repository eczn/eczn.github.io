System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('RenderClickWheelState', RenderClickWheelState);

            function RenderClickWheelState(props) {
                const { state } = props;
                const dangle = state
                    ? state.current.angle - state.start.angle
                    : 0;
                const t1 = `移动角度: ${dangle}`;
                const t2 = `当前选中: ${renderSelect(dangle)}`;
                return (React.createElement("div", null,
                    React.createElement("div", null, t1),
                    React.createElement("div", { style: { fontSize: '2rem' } }, t2)));
            }
            const DICT = `ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890`;
            function renderSelect(angle) {
                const n = Math.floor(angle / 30);
                const idx = n % DICT.length;
                if (idx < 0)
                    return DICT[DICT.length + idx];
                return DICT[idx];
            }

        })
    };
}));
