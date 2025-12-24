System.register(['react', 'rally/@@', './perlin2d_v1.js'], (function (exports) {
    'use strict';
    var React, P, perlin2d_v1;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
        }, function (module) {
            perlin2d_v1 = module.perlin2d_v1;
        }],
        execute: (function () {

            exports('RenderMap', RenderMap);

            const colorMountain = [248, 248, 252, 255];
            const colorForest = [58, 213, 77, 255];
            const colorLand = [251, 223, 144, 255];
            const colorLake = [64, 84, 235, 255];
            function renderNoise2dCanvas(image, g, noise) {
                for (let y = 0; y < image.height; y++) {
                    for (let x = 0; x < image.width; x++) {
                        const n = noise(x, y) * 255;
                        if (n > 190) {
                            drawPixel(image, x, y, colorMountain);
                        }
                        else if (n > 135) {
                            drawPixel(image, x, y, colorForest);
                        }
                        else if (n > 70) {
                            drawPixel(image, x, y, colorLand);
                        }
                        else {
                            drawPixel(image, x, y, colorLake);
                        }
                    }
                }
                g.putImageData(image, 0, 0);
            }
            function drawPixel(image, x, y, color) {
                const i = y * image.width + x;
                image.data[i * 4] = color[0];
                image.data[i * 4 + 1] = color[1];
                image.data[i * 4 + 2] = color[2];
                image.data[i * 4 + 3] = color[3];
            }
            function RenderMap(props) {
                const ref = React.createRef();
                const [animating, setAnimating] = React.useState(false);
                React.useEffect(() => {
                    let dx = 10;
                    let dy = 0;
                    let stopped = false;
                    const noise2d = (x, y) => perlin2d_v1((x + dx) / 400, (y + dy) / 400);
                    const canvas = ref.current;
                    const g = canvas.getContext('2d');
                    const canvasRect = canvas.getBoundingClientRect();
                    canvas.width = window.devicePixelRatio * canvasRect.width;
                    canvas.height = window.devicePixelRatio * canvasRect.height;
                    const image = g.createImageData(canvas.width, canvas.height);
                    const render = () => {
                        if (stopped)
                            return;
                        renderNoise2dCanvas(image, g, noise2d);
                        if (animating)
                            return;
                        // dx += 4;
                        // setTimeout(render, 64);
                    };
                    console.log('animating', animating);
                    render();
                    return () => {
                        stopped = true;
                    };
                }, [props.widthEm, props.heightEm, animating]);
                return React.createElement(P, null,
                    React.createElement("canvas", { ref: ref, style: { width: `${props.widthEm}em`, height: `${props.heightEm}em`, } }),
                    React.createElement("div", { style: { display: 'block', marginTop: '.5em', paddingLeft: '1em' } },
                        React.createElement("div", { style: {
                                fontSize: '1.5em',
                                marginBottom: '0.5em',
                                fontWeight: '1000',
                                fontFamily: 'var(--fontTitle)',
                            } }, "\u610F\u897F\u6CFD\u6069\u5927\u9646"),
                        React.createElement(ColorBlock, { color: colorMountain, text: "\u5C71\u5CF0" }),
                        React.createElement(ColorBlock, { color: colorForest, text: "\u68EE\u6797" }),
                        React.createElement(ColorBlock, { color: colorLand, text: "\u9646\u5730" }),
                        React.createElement(ColorBlock, { color: colorLake, text: "\u6E56\u6CCA" })));
            }
            function ColorBlock(props) {
                return (React.createElement("div", { style: { lineHeight: '1.75em', display: 'inline-block', marginRight: '1em' } },
                    React.createElement("div", { style: {
                            width: '1.5em',
                            height: '1.5em',
                            display: 'inline-block',
                            border: '1px solid  #000',
                            background: `rgba(${props.color.join(',')})`,
                            verticalAlign: 'middle',
                            marginRight: '.5em',
                        } }),
                    React.createElement("span", { style: { display: 'inline-block', verticalAlign: 'middle', } }, props.text)));
            }

        })
    };
}));
//# sourceMappingURL=render-map.js.map
