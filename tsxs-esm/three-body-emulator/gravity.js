System.register(['./point.js'], (function (exports) {
    'use strict';
    var Point;
    return {
        setters: [function (module) {
            Point = module.Point;
        }],
        execute: (function () {

            class Gravity {
                $dom;
                c2d;
                g;
                points = [];
                timer = null;
                drawLine = false;
                constructor(opts) {
                    const { points, g } = opts;
                    this.g = g || 1;
                    this.initFromPoints(points);
                }
                initFromPoints(points) {
                    this.points = points.map(p => new Point(p));
                }
                addPoint(p) {
                    this.points.push(new Point(p));
                }
                setDom($dom) {
                    this.$dom = $dom;
                    const c2d = $dom.getContext('2d');
                    if (!c2d)
                        throw new Error('no 2d context');
                    this.c2d = c2d;
                }
                updatePointsInfo() {
                    this.points.forEach(p => {
                        this.points.forEach(otherP => {
                            if (otherP === p)
                                return; // 排除自己
                            p.effect(otherP, this.g);
                        });
                    });
                    this.points.forEach(p => {
                        p.move();
                    });
                }
                drawPoints() {
                    this.c2d.clearRect(0, 0, this.$dom.width, this.$dom.height);
                    this.c2d.fillStyle = 'rgba(77, 77, 77, 1)';
                    this.points.forEach(p => {
                        this.c2d.beginPath();
                        const r = p.getPointRadius();
                        this.c2d.arc(p.x, p.y, r, 0, Math.PI * 2);
                        this.c2d.fill();
                    });
                    if (this.drawLine) {
                        this.points.forEach((p, idx) => {
                            this.c2d.lineTo(p.x, p.y);
                        });
                        this.c2d.lineTo(this.points[0].x, this.points[0].y);
                        this.c2d.fillStyle = 'rgba(77, 77, 77, 0.3)';
                        this.c2d.fill();
                    }
                }
                toggleDrawLine() {
                    this.drawLine = !this.drawLine;
                }
                start = () => {
                    if (this.timer)
                        return;
                    this.render();
                };
                stop = () => {
                    if (!this.timer)
                        return;
                    cancelAnimationFrame(this.timer);
                    this.timer = null;
                };
                render = () => {
                    this.updatePointsInfo();
                    this.drawPoints();
                    this.timer = requestAnimationFrame(this.render);
                };
            } exports('Gravity', Gravity);
            ;

        })
    };
}));
//# sourceMappingURL=gravity.js.map
