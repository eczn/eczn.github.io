System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            class WhiteNoiseCanvas {
                canvas = null;
                g = null;
                stop = true;
                inited = false;
                init = (canvas) => {
                    this.canvas = canvas;
                    this.g = canvas.getContext('2d');
                    this.inited = true;
                    // 先绘制一帧, 绘制后暂停
                    this.stop = false;
                    this.render();
                    this.stop = true;
                    const animate = () => {
                        // deinit 后结束动画
                        if (!this.inited)
                            return;
                        this.render();
                        requestAnimationFrame(animate);
                    };
                    animate();
                };
                play = () => {
                    this.stop = !this.stop;
                };
                deinit = () => {
                    this.inited = false;
                    this.g = null;
                    this.canvas = null;
                };
                render = () => {
                    const { g, canvas, stop } = this;
                    if (stop)
                        return; // 说明暂停
                    if (!this.inited
                        || !g
                        || !canvas)
                        return console.warn('no init');
                    // 建一张空白图像
                    const image = g.createImageData(canvas.width, canvas.height);
                    // 遍历图像的每一个像素
                    const pixcels = canvas.width * canvas.height;
                    for (let i = 0; i < pixcels; i += 1) {
                        const noise = Math.random() * 255;
                        const d = noise > 127 ? 255 : 0;
                        image.data[i * 4] = d;
                        image.data[i * 4 + 1] = d;
                        image.data[i * 4 + 2] = d;
                        image.data[i * 4 + 3] = 255;
                    }
                    // 吧图像绘制到 canvas 上
                    g.putImageData(image, 0, 0);
                };
            } exports('WhiteNoiseCanvas', WhiteNoiseCanvas);

        })
    };
}));
//# sourceMappingURL=white-noise-canvas.js.map
