System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('rgb2luminosity', rgb2luminosity);

            class ImageSample {
                config;
                constructor(config) {
                    this.config = config;
                }
                calc() {
                    const { width, height, pixels } = this.config;
                    let { outputWidth, outputHeight } = this.config;
                    // 最大只能 1:1 输出
                    if (width < outputWidth) {
                        const m = width / outputWidth;
                        outputWidth = Math.round(m * outputWidth);
                        outputHeight = Math.round(m * outputHeight);
                    }
                    if (height < outputHeight) {
                        const m = height / outputHeight;
                        outputWidth = Math.round(m * outputWidth);
                        outputHeight = Math.round(m * outputHeight);
                    }
                    // 缩放比例
                    let scaleX = width / outputWidth;
                    let scaleY = height / outputHeight;
                    // if (scaleY < 1) scaleY = 1;
                    if (width * height * 4 !== pixels.length) {
                        throw new Error('pixels width/height unmatch');
                    }
                    // rgba 4 通道
                    const outputPixels = new Uint8Array(outputWidth * outputHeight * 4);
                    // 遍历 (outputWidth, outputHeight) 空间内的所有点 (x, y)
                    // 依据点信息在原图片上作采样，并写入 chars
                    for (let y = 0; y < outputHeight; y++) {
                        for (let x = 0; x < outputWidth; x++) {
                            const sampled = this.sampleRGB(Math.round(scaleX * x), Math.round(scaleY * y), Math.round(scaleX * (x + 1)), Math.round(scaleY * (y + 1)));
                            const pos = (y * outputWidth + x) * 4;
                            outputPixels[pos + 0] = sampled.r;
                            outputPixels[pos + 1] = sampled.g;
                            outputPixels[pos + 2] = sampled.b;
                            outputPixels[pos + 3] = 255;
                        }
                    }
                    return {
                        width: outputWidth,
                        height: outputHeight,
                        pixels: outputPixels,
                    };
                }
                /** 在 (x1, y1) (x2, y2) 框定的 frame 内做取样, 这里直接算框内 rgb 色值的几何平均即可 */
                sampleRGB(x1, y1, x2, y2) {
                    const { pixels, width, } = this.config;
                    let r = 0;
                    let g = 0;
                    let b = 0;
                    let count = 0;
                    for (let y = y1; y < y2; y++) {
                        const base = width * y;
                        for (let x = x1; x < x2; x++) {
                            const pos = (base + x) * 4;
                            const data0 = pixels[pos + 0];
                            const data1 = pixels[pos + 1];
                            const data2 = pixels[pos + 2];
                            // const data3 = pixels[pos + 3]; // 不处理透明通道
                            r += data0;
                            g += data1;
                            b += data2;
                            count++;
                        }
                    }
                    if (count === 0)
                        throw new Error('传入的框没有选定任何像素');
                    // 几何平均，并做 round
                    r = Math.round(r / count);
                    g = Math.round(g / count);
                    b = Math.round(b / count);
                    // 断言一下
                    if (r > 255 || g > 255 || b > 255) {
                        debugger;
                        throw new Error('有问题，请断点看看');
                    }
                    return {
                        r, g, b
                    };
                }
            } exports('ImageSample', ImageSample);
            // rgb 色值转灰度, 这条公式来自 ​​ITU-R BT.601​​
            function rgb2luminosity(r, g, b) {
                return (0.2126 * r +
                    0.7152 * g +
                    0.0722 * b);
            }

        })
    };
}));
//# sourceMappingURL=image_sample.js.map
