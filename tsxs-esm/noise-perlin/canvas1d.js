System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
        }],
        execute: (function () {

            exports('RenderNoiseCanvas1d', RenderNoiseCanvas1d);

            function renderNoise1dCanvas(canvas, noise) {
                const g = canvas.getContext('2d');
                canvas.width = window.devicePixelRatio * canvas.width;
                canvas.height = window.devicePixelRatio * canvas.height;
                g.strokeStyle = `#000000`;
                for (let x = 0; x < canvas.width; x++) {
                    const n = noise(x) * canvas.height;
                    if (x === 0)
                        g.moveTo(x, n);
                    else {
                        g.lineTo(x, n);
                    }
                }
                g.lineWidth = 1;
                g.stroke();
            }
            function RenderNoiseCanvas1d(props) {
                const ref = React.createRef();
                React.useEffect(() => {
                    renderNoise1dCanvas(ref.current, props.noise1d);
                }, [props.widthEm, props.heightEm, props.noise1d]);
                return React.createElement(P, { center: true },
                    React.createElement("canvas", { ref: ref, style: { width: `${props.widthEm}em`, height: `${props.heightEm}em`, } }),
                    React.createElement("div", { style: { display: 'block' } }, props.label));
            }

        })
    };
}));
