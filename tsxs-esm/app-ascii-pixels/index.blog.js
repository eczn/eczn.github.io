System.register(['react', 'rally/@@', './image_sample.js'], (function (exports) {
    'use strict';
    var React, H1Block, WindowApp, metaBeauty, ImageSample, rgb2luminosity;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            H1Block = module.H1Block;
            WindowApp = module.WindowApp;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            ImageSample = module.ImageSample;
            rgb2luminosity = module.rgb2luminosity;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            // import fileMathEditor from './math-edtior.png';
            const meta = exports('meta', metaBeauty({
                id: 'app-ascii-pixels',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'hello, world',
                author: 'author',
                // category: '分类',
                time: new Date('2222-01-01 00:00'),
                isDraft: true,
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(H1Block, { id: "id", title: "hello,world" },
                        React.createElement(WindowApp, null,
                            React.createElement(AsciiImage, null))));
            });
            async function readImagePixels(file) {
                const imageBitmap = await createImageBitmap(file);
                const { width, height } = imageBitmap;
                const canvas = new OffscreenCanvas(width, height);
                const ctx = canvas.getContext('2d');
                ctx.drawImage(imageBitmap, 0, 0);
                imageBitmap.close();
                const imageData = ctx.getImageData(0, 0, width, height);
                const uint8Array = imageData.data;
                return {
                    width,
                    height,
                    pixels: new Uint8Array(uint8Array.buffer),
                };
            }
            const SZ_W = 8;
            const SZ_H = 12;
            const SZ_B = 8;
            function AsciiImage() {
                const [image, setImage] = React.useState(null);
                return (React.createElement("div", null,
                    React.createElement("input", { type: "file", onChange: async (e) => {
                            const file = e.target.files?.[0];
                            if (!file)
                                return;
                            console.time('readImagePixels');
                            const { pixels, width, height } = await readImagePixels(file);
                            console.timeEnd('readImagePixels');
                            const outputWidth = 280;
                            const imageSample = new ImageSample({
                                width,
                                height,
                                outputWidth,
                                outputHeight: Math.round(height / (width / outputWidth) * (SZ_W / SZ_H)),
                                pixels,
                            });
                            for (let i = 0; i < pixels.length; i++)
                                pixels[i];
                            console.time('imageSample.calc()');
                            const result = imageSample.calc();
                            console.timeEnd('imageSample.calc()');
                            setImage(result);
                        } }),
                    image ? React.createElement(RenderImage, { image: image }) : null));
            }
            function RenderImage(props) {
                const { image } = props;
                const { width, height, pixels } = image;
                const ref = React.createRef();
                React.useEffect(() => {
                    const $canvas = ref.current;
                    if (!$canvas)
                        return;
                    const ctx = $canvas.getContext('2d');
                    ctx.save();
                    const em = 1024;
                    ctx.font = `${em}px "Menlo"`;
                    const metrics = ctx.measureText('x');
                    const ascentEm = metrics.fontBoundingBoxAscent / em;
                    ctx.restore();
                    ctx.save();
                    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                    const fsz = SZ_H;
                    const baseline = ascentEm * fsz;
                    ctx.font = `${fsz}px "Menlo"`;
                    ctx.fillStyle = `#000000`;
                    ctx.fillRect(0, 0, width * SZ_W, height * SZ_H);
                    for (let y = 0; y < height; y++) {
                        for (let x = 0; x < width; x++) {
                            const pos = (y * width + x) * 4;
                            const r = pixels[pos + 0];
                            const g = pixels[pos + 1];
                            const b = pixels[pos + 2];
                            const lu = rgb2luminosity(r, g, b);
                            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                            ctx.fillRect(x * SZ_W, y * SZ_H, SZ_W, SZ_H);
                            ctx.fillStyle = `rgb(44, 44, 44)`;
                            // ctx.fillStyle = `rgb(${lu}, ${lu}, ${lu})`;
                            // ctx.fillStyle = `rgb(${255 - lu}, ${255 - lu}, ${255 - lu})`;
                            ctx.fillText(
                            // '@',
                            '    .:l[/x*O0XK@$#'[Math.floor((255 - lu) / 16)], x * SZ_W, y * SZ_H + baseline);
                        }
                    }
                    ctx.restore();
                }, [width, height, pixels]);
                const cwidth = width * window.devicePixelRatio * SZ_W;
                const cheight = height * window.devicePixelRatio * SZ_H;
                const canvasStyle = {
                    width: width * SZ_W,
                    height: height * SZ_H,
                    display: 'block',
                };
                return (React.createElement("canvas", { style: canvasStyle, ref: ref, width: cwidth, height: cheight }));
            }

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
