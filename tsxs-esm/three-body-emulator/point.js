System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            class Point {
                x;
                y;
                dx;
                dy;
                m;
                constructor(data) {
                    Object.assign(this, data);
                }
                /** 当前速度对坐标的影响 */
                move() {
                    this.x += this.dx;
                    this.y += this.dy;
                }
                /**
                 * p 和 this 间的引力对 this 速度影响
                 * @param p 其他点
                 * @param g 引力常数
                 */
                effect(p, g) {
                    const r = this.distance(p);
                    const distanceX = p.x - this.x;
                    const distanceY = p.y - this.y;
                    // f = ma 展开后可以得到 a = g * p.m / (r * r)
                    // 这个 a 是带方向的，它的方向跟 this -> p 练成的线的方向是一致的
                    // 根据这个来做 x y 方向的分量拆解得到 k 最后得到各分量 ax ay
                    const k = g * p.m / (r * r * r);
                    const ax = k * distanceX;
                    const ay = k * distanceY;
                    this.dx += ax;
                    this.dy += ay;
                }
                /** 求与 p1 的距离 */
                distance(p1) {
                    const y = this.y - p1.y;
                    const x = this.x - p1.x;
                    const yy = y * y;
                    const xx = x * x;
                    const rr = yy + xx;
                    // 最小距离
                    const min = 100;
                    if (rr <= (min * min))
                        return 100;
                    const r = Math.sqrt(rr);
                    return r;
                }
                /** 根据 m 给一个合适的半径 方便绘图 */
                getPointRadius() {
                    const r = Math.sqrt(this.m);
                    if (r <= 4)
                        return 2; // 最小值 免得太小了看不到了
                    if (r >= 24)
                        return 12; // 免得太大了
                    return r / 2;
                }
            } exports('Point', Point);

        })
    };
}));
//# sourceMappingURL=point.js.map
