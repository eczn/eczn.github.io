System.register(['react', '../matrix-demo/matrix-demo.js', '../matrix/matrix-product.js'], (function (exports) {
    'use strict';
    var React, matrixToCSS, getRotateMatrix, getTranslateMatrix, matrixProduct;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            matrixToCSS = module.matrixToCSS;
            getRotateMatrix = module.getRotateMatrix;
            getTranslateMatrix = module.getTranslateMatrix;
        }, function (module) {
            matrixProduct = module.matrixProduct;
        }],
        execute: (function () {

            exports({
                Line: Line,
                LinePP: LinePP,
                toDegree: toDegree,
                toRadian: toRadian
            });

            function Line(props) {
                const { k, b } = props;
                const rad = Math.atan(k);
                const deg = toDegree(rad);
                const rm = getRotateMatrix(0, 0, -deg);
                const tm = getTranslateMatrix(0, b, 0);
                matrixToCSS(matrixProduct(rm, tm));
                return (React.createElement("div", { style: {
                        width: '100%',
                        height: '1px',
                        background: props.color || '#000',
                        top: '100%',
                        left: '-50%',
                        transform: `
      translate(0, ${-b}em)
      rotate(${-deg}deg)
      `,
                    } }));
            }
            function LinePP(props) {
                const { p1, p2 } = props;
                const [x1, y1] = p1;
                const [x2, y2] = p2;
                const dx = x1 - x2;
                const dy = y1 - y2;
                // 分母为 0 兜底
                if (dx === 0)
                    return React.createElement(Line, { k: 99999, b: 0, color: props.color });
                const k = (dy / dx);
                const b = y2 - k * x2;
                return React.createElement(Line, { k: k, b: b, color: props.color });
            }
            function toDegree(rad) {
                return rad / (Math.PI / 180);
            }
            function toRadian(deg) {
                return deg * (Math.PI / 180);
            }

        })
    };
}));
