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

            exports('RenderNoiseCanvas2d', RenderNoiseCanvas2d);

            function renderNoise2dCanvas(canvas, noise) {
                const g = canvas.getContext('2d');
                const canvasRect = canvas.getBoundingClientRect();
                canvas.width = window.devicePixelRatio * canvasRect.width;
                canvas.height = window.devicePixelRatio * canvasRect.height;
                const image = g.createImageData(canvas.width, canvas.height);
                for (let y = 0; y < canvas.height; y++) {
                    for (let x = 0; x < canvas.width; x++) {
                        const i = y * canvas.width + x;
                        const n = noise(x, y) * 255;
                        image.data[i * 4] = n;
                        image.data[i * 4 + 1] = n;
                        image.data[i * 4 + 2] = n;
                        image.data[i * 4 + 3] = 255;
                    }
                }
                g.putImageData(image, 0, 0);
            }
            function RenderNoiseCanvas2d(props) {
                const ref = React.createRef();
                React.useEffect(() => {
                    renderNoise2dCanvas(ref.current, props.noise2d);
                }, [props.widthEm, props.heightEm, props.noise2d]);
                return React.createElement(P, { center: true },
                    React.createElement("canvas", { ref: ref, style: { width: `${props.widthEm}em`, height: `${props.heightEm}em`, } }),
                    React.createElement("div", { style: { display: 'block' } }, props.label));
            }

        })
    };
}));
