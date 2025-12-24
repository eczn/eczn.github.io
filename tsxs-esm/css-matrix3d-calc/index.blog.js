System.register(['react', 'rally/@@', './matrix/matrix-calc-progress.js', './matrix/matrix-product.js', './matrix/matrix-equal.js', './coordinate-axis/index.js', './matrix/index.css.js', './coordinate-axis/index.css.js', './formula/index.css.js', './coordinate-axis/rect.js', './coordinate-axis/point.js', './coordinate-axis/line.js', './formula/index.js', './matrix-demo/matrix-demo.js', './matrix-calc.jpg.js', './matrix2x2.svg.js'], (function (exports) {
    'use strict';
    var React, Col, P, Code, H1Block, H2, WindowApp, ImgDynamic, Link, metaBeauty, MatrixCalcProgress, matrixProduct, MatrixEqual, CoordinateAxis, cssMatrix, cssCoordinateAxis, cssFormula, Rect, Point, LinePP, Formula, SymbolCharacter, MatrixDemo, fileMatrixCalc, svgMatrix2x2;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            Col = module.Col;
            P = module.P;
            Code = module.Code;
            H1Block = module.H1Block;
            H2 = module.H2;
            WindowApp = module.WindowApp;
            ImgDynamic = module.ImgDynamic;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            MatrixCalcProgress = module.MatrixCalcProgress;
        }, function (module) {
            matrixProduct = module.matrixProduct;
        }, function (module) {
            MatrixEqual = module.MatrixEqual;
        }, function (module) {
            CoordinateAxis = module.CoordinateAxis;
        }, function (module) {
            cssMatrix = module.default;
        }, function (module) {
            cssCoordinateAxis = module.default;
        }, function (module) {
            cssFormula = module.default;
        }, function (module) {
            Rect = module.Rect;
        }, function (module) {
            Point = module.Point;
        }, function (module) {
            LinePP = module.LinePP;
        }, function (module) {
            Formula = module.Formula;
            SymbolCharacter = module.SymbolCharacter;
        }, function (module) {
            MatrixDemo = module.MatrixDemo;
        }, function (module) {
            fileMatrixCalc = module.default;
        }, function (module) {
            svgMatrix2x2 = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                type: 'app',
                id: 'css-matrix3d-calc',
                title: 'CSS Matrix3D 中的矩阵运算',
                appTitle: 'CSS Matrix',
                appIcon: svgMatrix2x2.src,
                author: 'eczn',
                // category: '分类',
                time: new Date('2023-08-18 00:00'),
            }));
            async function initialProps(context) {
                return {
                    fileMatrixProduct: await context.readText('./matrix/matrix-product.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                const 矩阵的一般形式 = {
                    translate3d: (React.createElement(MatrixEqual, { left: "translate3d(dx, dy, dz)", right: [
                            ['1', '0', '0', 'dx'],
                            ['0', '1', '0', 'dy'],
                            ['0', '0', '1', 'dz'],
                            ['0', '0', '0', '1'],
                        ] })),
                    scale3d: (React.createElement(MatrixEqual, { left: "scale3d(ma, mb, mc)", right: [
                            ['ma', '0', '0', '0'],
                            ['0', 'mb', '0', '0'],
                            ['0', '0', 'mc', '0'],
                            ['0', '0', '0', '1'],
                        ] })),
                    roateZ: (React.createElement(React.Fragment, null,
                        React.createElement(Formula, { nth: 1 },
                            React.createElement(MatrixEqual, { left: "rotateZ(x0, y0, deg)", right: [
                                    ['cosθ', 'sinθ', '0', 'CX'],
                                    ['-sinθ', 'cosθ', '0', 'CY'],
                                    ['0', '0', '1', '0'],
                                    ['0', '0', '0', '1'],
                                ] }),
                            React.createElement(Formula, { nth: 2 },
                                React.createElement(SymbolCharacter, { value: "CX = (1-cos\u03B8)\u2219x0 + sin\u03B8\u2219y0" })),
                            React.createElement(Formula, { nth: 3 },
                                React.createElement(SymbolCharacter, { value: "CY = (cos\u03B8-1)\u2219y0 + sin\u03B8\u2219x0" }))))),
                };
                return React.createElement(React.Fragment, null,
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: cssMatrix } }),
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: cssCoordinateAxis } }),
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: cssFormula } }),
                    React.createElement(React.Fragment, null,
                        React.createElement(Col, null,
                            React.createElement(P, { sinking: true }, "CSS \u4E2D\u7684 Transform \u5C5E\u6027\u7ED9\u5927\u591A\u6570\u4F7F\u7528\u8005\u7559\u4E0B\u4E86\u6DF1\u523B\u7684\u5370\u8C61 \u2014\u2014 \u51E0\u4E2A\u5355\u8BCD\u5C31\u80FD\u5B9E\u73B0\u5404\u79CD\u7E41\u590D\u7684\u56FE\u5F62\u53D8\u6362, \u518D\u914D\u5408 transition \u5C5E\u6027\u6216\u8005 keyframe \u5373\u53EF\u53C8\u5FEB\u53C8\u597D\u7684\u5B9E\u73B0\u51FA\u5173\u952E\u5E27\u52A8\u753B, \u5982\u679C\u518D\u8FDB\u9636\u4E00\u70B9\u5B66\u4E60\u4E00\u4E0B\u8D1D\u585E\u5C14\u66F2\u7EBF\u73A9\u4E00\u6CE2 timing-function \u5C31\u53EF\u4EE5\u505A\u51FA\u975E\u5E38\u751F\u52A8\u534E\u4E3D\u7684\u52A8\u753B\u6548\u679C\u4E86\u3002"),
                            React.createElement(React.Fragment, null,
                                React.createElement(Code, { lang: "css", source: `
            #transform-example {
              width: 2em;
              height: 2em;
              background: red;
              transform: skewX(-15deg);
            }
          ` }),
                                React.createElement("div", { className: "clickable", style: {
                                        width: '2em', height: '2em',
                                        background: 'red', transform: 'skewX(-15deg)',
                                        margin: `1em auto`
                                    }, onClick: () => alert('Magic') }))),
                        React.createElement(P, null, "\u540E\u6765\u8FDB\u4E00\u6B65\u5B66\u4E60\u4E86\u89E3\u5230, transform \u5E95\u4E0B\u8D70\u7684\u662F css matrix3d, \u5176\u5165\u53C2\u662F\u4E00\u4E2A 4x4 \u7684\u77E9\u9635, \u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u8FD9\u4E2A\u77E9\u9635\u6765\u8BA1\u7B97\u5E76\u5B9E\u73B0\u56FE\u5F62\u53D8\u6362\uFF0C\u5176\u4E2D\u6D89\u53CA\u7684\u7EBF\u6027\u4EE3\u6570\u539F\u7406\u5F53\u65F6\u6211\u6CA1\u6709\u7EC6\u7A76, \u6700\u8FD1\u7A7A\u4E86\u53C8\u6DF1\u5165\u7814\u7A76\u4E86\u4E00\u4E0B\u7B97\u662F\u61C2\u4E86, \u6545\u4F5C\u6B64\u96C4\u6587\u5C06\u6211\u5BF9 transform \u5E95\u5C42\u7684\u77E9\u9635\u539F\u7406\u7684\u7406\u89E3\u6574\u7406\u6210\u535A\u6587\uFF0C\u7EFC\u5408\u53D1\u8868\u5230\u8FD9\u4E2A\u7834\u7AD9\u3002")),
                    React.createElement(H1Block, { id: "matrix", title: "\u77E9\u9635\u7684\u8BA1\u7B97" },
                        React.createElement(P, null, "\u77E9\u9635\u7684\u8BA1\u7B97\u89C4\u5219\u662F\u91CD\u590D\u800C\u673A\u68B0\u5316\u7684, \u5982\u679C\u4EBA\u8089\u53BB\u7B97\u4F1A\u5F88\u86CB\u75BC, \u56E0\u6B64\u672C\u6587\u4E0D\u4F1A\u82B1\u592A\u591A\u7BC7\u5E45\u53BB\u4ECB\u7ECD\u77E9\u9635\u4E58\u6CD5, \u53EA\u9700\u8981\u770B\u8FD9\u4E2A demo \u5C31\u884C\u3002 (\u70B9\u51FB\u542F\u52A8\u5373\u53EF)"),
                        React.createElement(P, null, "\u6CE8\u610F\u89C2\u5BDF\u5176\u4E2D\u8F6E\u64AD\u7684\u884C\u5217\u9AD8\u4EAE, \u5DE6\u8FB9\u5404\u884C\u5BF9\u5E94\u53F3\u8FB9\u5404\u5217, \u76F8\u4E58\u76F8\u52A0\u8BA1\u7B97\u5316\u7B80\u5F97\u5230\u6700\u7EC8\u7ED3\u679C \u2014\u2014 \u8FD9\u4E5F\u610F\u5473\u7740\u5DE6\u53F3\u4EA4\u6362\u4F4D\u7F6E\u7684\u8BDD\u4F1A\u5BFC\u81F4\u4E0D\u540C\u7ED3\u679C, \u77E9\u9635\u4E58\u6CD5\u4E0D\u6EE1\u8DB3\u4EA4\u6362\u5F8B\u3002"),
                        React.createElement(MatrixCalcProgress, { matrixA: [
                                [1, 2, 3],
                                [4, 5, 6],
                                [7, 8, 9],
                            ], matrixB: [
                                [10, 11],
                                [12, 13],
                                [14, 15],
                            ], matrixC: [
                                ['1∙10 + 2∙12 + 3∙14 = 76', '1∙11 + 2∙13 + 3∙15 = 82'],
                                ['4∙10 + 5∙12 + 6∙14 = 184', '4∙11 + 5∙13 + 6∙15 = 199'],
                                ['7∙10 + 8∙12 + 9∙14 = 292', '7∙11 + 8∙13 + 9∙15 = 316'],
                            ], 
                            // matrixFinal={[
                            //   [76, 82],
                            //   [184, 199],
                            //   [292, 316],
                            // ]}
                            points: [
                                [0, 0], [0, 1],
                                [1, 0], [1, 1],
                                [2, 0], [2, 1],
                            ], hightlightA: (activePoint, otherPoint) => (otherPoint[0] === activePoint[0]), hightlightB: (activePoint, otherPoint) => (otherPoint[1] === activePoint[1]), hightlightC: (activePoint, otherPoint) => (otherPoint[0] === activePoint[0] &&
                                otherPoint[1] === activePoint[1]) }),
                        React.createElement(P, null, "\u6211\u4F7F\u7528\u7684\u77E9\u9635\u8868\u793A\u5F88\u7ECF\u5178: \u4E8C\u7EF4\u6570\u7EC4 `Array<Array<number>>` \u2014\u2014 \u56E0\u4E3A\u672C\u6587\u6D89\u53CA\u7684\u77E9\u9635\u8FD0\u7B97\u4E3B\u8981\u662F\u52A0\u6CD5 / \u4E58\u6CD5, \u4E0D\u6D89\u53CA\u5176\u4ED6\u9AD8\u7EA7\u64CD\u4F5C, \u56E0\u6B64\u53EF\u4EE5\u7B80\u5355\u8868\u793A, \u5373:"),
                        React.createElement(Code, { lang: 'tsx', source: `
        // 为了写 demo 渲染 jsx 方便, 因此额外加了 string
        type Matrix = Array<Array<number | string>>

        // 例子: 手动构造一个 3x3 矩阵
        const oneMatrix: Matrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]
      ` }),
                        React.createElement("details", null,
                            React.createElement("summary", null,
                                React.createElement(P, { style: { display: 'inline-block' } }, "\u77E9\u9635\u4E58\u6CD5\u5B8C\u6574\u5B9E\u73B0\u5982\u4E0B, \u5DF2\u6298\u53E0, \u70B9\u51FB\u5C55\u5F00")),
                            React.createElement(Code, { lang: "tsx", source: props.fileMatrixProduct })),
                        React.createElement(P, null, "\u719F\u6089\u4E86\u77E9\u9635\u7684\u4E58\u6CD5\u8BA1\u7B97\u89C4\u5219, matrix3d \u7684\u77E9\u9635\u539F\u7406\u5C31\u7B97\u61C2\u4E86\u4E00\u534A, \u6211\u4EEC\u7EE7\u7EED\u3002")),
                    React.createElement(H1Block, { id: "matrix-and-coordinate-system-translate", title: "\u901A\u8FC7\u77E9\u9635\u4E58\u6CD5\u8868\u8FBE\u4F4D\u79FB\u53D8\u6362" },
                        React.createElement(P, null, "transform \u56FE\u5F62\u8BA1\u7B97\u5C31\u662F\u5C06\u56FE\u50CF\u4E2D\u7684\u6BCF\u4E00\u4E2A\u50CF\u7D20\u70B9\u6839\u636E\u67D0\u79CD\u53D8\u6362\u653E\u5230\u65B0\u7684\u70B9\u4E0A, \u6BD4\u5982\u4ECE\u539F\u70B9 (0,0) \u4F4D\u79FB (3,4) \u5176\u5B9E\u5C31\u662F\u671D\u7740\u53F3\u8FB9\u79FB\u52A8 3 \u518D\u5411\u4E0A\u79FB\u52A8 4 \u5B9E\u73B0\u3002"),
                        React.createElement(P, null, "\u663E\u7136, \u8FD9\u4E2A\u5E73\u79FB\u53EF\u4EE5\u5411\u91CF\u53BB\u8868\u8FBE \u2014\u2014 \u5373\u6BCF\u4E2A\u70B9\u90FD\u5E94\u7528\u5230\u5411\u91CF OP(3,4) \u4E0A, \u800C\u5411\u91CF\u53EF\u4EE5\u89C6\u4F5C\u4E3A 2x1 \u77E9\u9635, \u8FD9\u662F\u5426\u8BF4\u660E\u53EF\u4EE5\u6784\u9020\u4E00\u79CD\u7279\u6B8A\u7684\u77E9\u9635\u4F7F\u5F97\u4E0B\u5217\u8BA1\u7B97\u6210\u7ACB\u5462 ?"),
                        React.createElement(MatrixCalcProgress, { disable: true, matrixA: [
                                ['?']
                            ], matrixB: [
                                ['x'],
                                ['y'],
                            ], matrixC: [
                                ['x + a'],
                                ['y + b'],
                            ] }),
                        React.createElement(P, null, "\u7422\u78E8\u4E86\u4E00\u4E0B, \u5F53\u5BF9\u89D2\u7EBF\u5168\u662F 1 \u7684\u60C5\u51B5 (\u5373\u5355\u4F4D\u77E9\u9635) \u5F88\u663E\u7136\u8BA1\u7B97\u7ED3\u679C\u7B49\u4E8E\u81EA\u8EAB:"),
                        React.createElement(MatrixCalcProgress, { disable: true, matrixA: [
                                ['1', '0'],
                                ['0', '1'],
                            ], matrixB: [
                                ['x'],
                                ['y'],
                            ], matrixFinal: [
                                ['x'],
                                ['y'],
                            ] }),
                        React.createElement(P, null, "\u8FD9\u91CC\u5F88\u6709\u610F\u601D\uFF0C\u901A\u8FC7 0 \u6D88\u9664\u4E86 x y \u4F7F\u5176\u4E0D\u8026\u5408\uFF0C\u5982\u679C\u5F04\u6210 3x3 \u7684\u5355\u4F4D\u77E9\u9635\uFF0C\u4E5F\u5C31\u662F\u66F4\u8FDB\u4E00\u6B65:"),
                        React.createElement(MatrixCalcProgress, { disable: true, matrixA: [
                                ['1', '0', '?'],
                                ['0', '1', '?'],
                                ['?', '?', '1'],
                            ], matrixB: [
                                ['x'],
                                ['y'],
                                ['?'],
                            ], matrixC: [
                                [`1∙x + 0∙y + Q`],
                                [`0∙x + 1∙y + W`],
                                ['?∙x + ?∙y + 1∙?'],
                            ], matrixFinal: [
                                ['x + Q'],
                                ['y + W'],
                                ['1'],
                            ] }),
                        React.createElement(P, null, "\u7B54\u6848\u547C\u4E4B\u6B32\u51FA\uFF0C\u9700\u8981\u60F3\u529E\u6CD5\u8BA9 Q \u7B49\u4E8E a, W \u7B49\u4E8E b \u5373\u53EF, \u5E76\u4E14\u7B2C\u4E09\u884C\u7684 ?\u2219x \u548C ?\u2219y \u4E2D\u7684\u95EE\u53F7\u4E3A 0 \u5373\u53EF\uFF0C\u4EE3\u5165\u4E00\u4E0B\u8BA1\u7B97\uFF0C\u5C31\u80FD\u5F97\u5230\u6211\u4EEC\u60F3\u8981\u7684\u90A3\u4E2A\u7279\u6B8A\u77E9\u9635\u4E86:"),
                        React.createElement(MatrixCalcProgress, { matrixA: [
                                [1, 0, 'a'],
                                [0, 1, 'b'],
                                [0, 0, 1],
                            ], matrixB: [
                                ['x'],
                                ['y'],
                                ['1'],
                            ], matrixC: matrixProduct([
                                ['1', '0', 'a'],
                                ['0', '1', 'b'],
                                ['0', '0', '1'],
                            ], [
                                ['x'],
                                ['y'],
                                ['1'],
                            ]), points: [
                                [0, 0],
                                [1, 0],
                                [2, 0],
                            ], hightlightA: (activePoint, otherPoint) => (otherPoint[0] === activePoint[0]), hightlightB: (activePoint, otherPoint) => (otherPoint[1] === activePoint[1]), hightlightC: (activePoint, otherPoint) => (otherPoint[0] === activePoint[0] &&
                                otherPoint[1] === activePoint[1]), matrixFinal: [
                                ['x + a'],
                                ['y + b'],
                                ['1'],
                            ] }),
                        React.createElement(H2, { id: "transform-translate3d" }, "translate3d(dx, dy, dz) \u77E9\u9635\u7684\u4E00\u822C\u5F62\u5F0F"),
                        React.createElement(P, null, "\u7ECF\u8FC7\u524D\u9762\u7684\u8BA8\u8BBA\u6211\u4EEC\u5F88\u5BB9\u6613\u5C31\u80FD\u5F97\u5230\u5728\u4E09\u7EF4\u5750\u6807\u7CFB\u4E0B, translate3d \u5E73\u79FB\u53D8\u6362\u77E9\u9635\u7684\u4E00\u822C\u5F62\u5F0F, \u5176\u4E2D dx dy dz \u5206\u522B\u662F\u5404\u4E2A\u5750\u6807\u8F74\u7684\u4F4D\u79FB:"),
                        矩阵的一般形式.translate3d,
                        React.createElement(H2, { id: "transform-scale3d" }, "scale3d(ma, mb, mc) \u77E9\u9635\u7684\u4E00\u822C\u5F62\u5F0F"),
                        React.createElement(P, null, "\u5373\u5404\u4E2A\u8F74\u7684\u653E\u5927, \u663E\u7136\u6613\u5F97, \u5176\u4E2D ma mb mc \u6307\u7684\u662F\u653E\u5927\u500D\u6570: "),
                        React.createElement(MatrixCalcProgress, { disable: true, matrixA: [
                                ['ma', '0', '0', '0'],
                                ['0', 'mb', '0', '0'],
                                ['0', '0', 'mc', '0'],
                                ['0', '0', '0', '1'],
                            ], matrixB: [
                                ['x'],
                                ['y'],
                                ['z'],
                                ['1'],
                            ], matrixFinal: [
                                ['ma ∙ x'],
                                ['mb ∙ y'],
                                ['mc ∙ z'],
                                [1],
                            ] }),
                        矩阵的一般形式.scale3d),
                    React.createElement(H1Block, { id: "how-about-rotating", title: "\u90A3\u4E48\u65CB\u8F6C\u5462 ?" },
                        React.createElement(P, null, "\u65CB\u8F6C\u9996\u5148\u8981\u5B9A\u4E00\u4E2A\u65CB\u8F6C\u7684\u4E2D\u5FC3\u70B9, \u8FD9\u91CC\u6211\u6784\u9020\u4E86\u4E00\u4E2A 10x10 \u7684\u65B9\u5757, \u5E76\u5C06\u5176\u653E\u5728\u5750\u6807\u7CFB\u4E2D\u5FC3, \u5E76\u4EE5\u539F\u70B9 (0,0) \u4E3A\u4E2D\u5FC3\u987A\u65F6\u9488\u65CB\u8F6C 30deg, \u65CB\u8F6C\u53E0\u5728\u4E00\u8D77\u5F97\u5230\u4E0B\u9762\u5DE6\u56FE, \u5176\u4E2D P \u7ECF\u8FC7\u65CB\u8F6C\u540E\u79FB\u52A8\u5230\u4E86 P'"),
                        React.createElement(Col, { units: [11, 10] },
                            React.createElement(CoordinateAxis, { width: 20, height: 18, zero: [8, 8], subview: React.createElement(React.Fragment, null,
                                    React.createElement(Rect, { width: 10, height: 10, left: -5, bottom: -5, color: 'rgba(245, 0, 0, .3)' }),
                                    React.createElement(Rect, { width: 10, height: 10, left: -5, bottom: -5, color: 'rgba(245, 0, 0, .3)', style: { transform: `rotate(30deg)` } }),
                                    React.createElement(Point, { x: 5, y: 5, name: 'P (5, 5)' }),
                                    React.createElement(Point, { x: calc(5, 15).x, y: calc(5, 15).y, name: "P' (?, ?)" })) }),
                            React.createElement(CoordinateAxis, { width: 20, height: 17, zero: [6, 6], subview: (() => {
                                    // dx dy 是为了做位移
                                    let dx = -3;
                                    let dy = -1;
                                    return React.createElement(React.Fragment, null,
                                        React.createElement(Point, { x: dx + 0, y: dy + 0, name: 'O (x0, y0)' }),
                                        React.createElement(Point, { x: dx + 5, y: dy + 5, name: 'A (xa, ya)' }),
                                        React.createElement(Point, { x: dx + 6.8, y: dy + 1.8, name: "B (xb, yb)" }),
                                        React.createElement(LinePP, { p1: [dx + 0, dy + 0], p2: [dx + 5, dy + 5] }),
                                        React.createElement(LinePP, { p1: [dx + 0, dy + 0], p2: [dx + 6.8, dy + 1.8] }),
                                        React.createElement(LinePP, { p1: [dx + 0, dy + 0], p2: [dx + 6.8, dy + 0], color: "rgba(0, 0, 0, .3)" }));
                                })() })),
                        React.createElement(P, null,
                            "\u8FD9\u4E2A\u8BA1\u7B97\u662F\u663E\u800C\u6613\u89C1\u7684\uFF0C\u6839\u636E\u52FE\u80A1\u5B9A\u7406\u8BA1\u7B97\u5C31\u80FD\u5F97\u5230 P' \u7684\u5750\u6807\u7EA6\u4E3A: (",
                            React.createElement("i", null, calc(5, 15).x.toFixed(2) + ',' + calc(5, 15).y.toFixed(2)),
                            ") ",
                            React.createElement("br", null),
                            "\u6839\u636E\u6B64\u4F8B\u6211\u4EEC\u53EF\u4EE5\u6784\u9020\u4E00\u4E2A\u66F4\u4E00\u822C\u7684\u60C5\u51B5, \u5373\u53F3\u56FE\u6240\u793A: A \u4EE5 O \u4E3A\u4E2D\u5FC3\u987A\u65F6\u9488\u65CB\u8F6C \u03B8 \u81F3 B, \u6839\u636E\u5DF2\u6709\u7684\u4FE1\u606F, \u53EF\u4EE5\u5F97\u51FA\u4E0B\u9762 6 \u6761\u65B9\u7A0B, \u5176\u4E2D r \u6307\u7684\u662F\u4ECE A \u5230 O \u70B9\u7684\u8DDD\u79BB, \u800C sinA sinB \u4E2D\u7684 A \u548C B \u6307\u7684\u662F AO \u548C BO \u8DDF X \u8F74\u7684\u89D2\u5EA6\u3002"),
                        React.createElement(Formula, { nth: 1 },
                            React.createElement(SymbolCharacter, { value: "A = \u03B8 + B" })),
                        React.createElement(Formula, { nth: 2 },
                            React.createElement(SymbolCharacter, { value: "ya - y0 = r\u2219sinA" })),
                        React.createElement(Formula, { nth: 3 },
                            React.createElement(SymbolCharacter, { value: "yb - y0 = r\u2219sinB" })),
                        React.createElement(Formula, { nth: 4 },
                            React.createElement(SymbolCharacter, { value: "xa - x0 = r\u2219cosA" })),
                        React.createElement(Formula, { nth: 5 },
                            React.createElement(SymbolCharacter, { value: "xb - x0 = r\u2219cosB" })),
                        React.createElement(P, null, "\u8054\u7ACB\u8FD9\u4E94\u4E2A\u65B9\u7A0B\u914D\u5408\u4E09\u89D2\u51FD\u6570\u5B8C\u5168\u5C55\u5F00\u5E76\u5316\u7B80\u53EF\u4EE5\u5F97\u5230 xb yb \u89E3\u6790\u89E3: "),
                        React.createElement(Formula, { nth: 1 },
                            React.createElement(SymbolCharacter, { value: "xb = (1-cos\u03B8)\u2219x0 + sin\u03B8\u2219y0 + cos\u03B8\u2219xa + sin\u03B8\u2219ya" })),
                        React.createElement(Formula, { nth: 2 },
                            React.createElement(SymbolCharacter, { value: "yb = (cos\u03B8-1)\u2219y0 + sin\u03B8\u2219x0 - sin\u03B8\u2219xa + cos\u03B8\u2219ya" })),
                        React.createElement(P, null, "\u4E0A\u8FF0\u8868\u8FBE\u6BD4\u8F83\u957F, \u4E0D\u59A8\u5C06\u5176\u4E2D\u7684\u5E38\u6570\u9879\u5265\u79BB\u4E3A CX \u548C CY, \u5F97\u5230: "),
                        React.createElement(React.Fragment, null,
                            React.createElement(Formula, { nth: 1 },
                                React.createElement(SymbolCharacter, { value: "CX = (1-cos\u03B8)\u2219x0 + sin\u03B8\u2219y0" })),
                            React.createElement(Formula, { nth: 2 },
                                React.createElement(SymbolCharacter, { value: "xb = cos\u03B8\u2219xa + sin\u03B8\u2219ya + CX" })),
                            React.createElement(Formula, { nth: 3 },
                                React.createElement(SymbolCharacter, { value: "CY = (cos\u03B8-1)\u2219y0 + sin\u03B8\u2219x0" })),
                            React.createElement(Formula, { nth: 4 },
                                React.createElement(SymbolCharacter, { value: "yb = -sin\u03B8\u2219xa + cos\u03B8\u2219ya + CY" }))),
                        React.createElement(P, null, "\u6839\u636E\u5176\u4E2D\u7684 \u278B \u548C \u278D \u7684\u8FD9\u4E24\u4E2A\u65B9\u7A0B\u5373\u53EF\u6784\u9020\u51FA\u7279\u5F81\u77E9\u9635:"),
                        React.createElement(MatrixCalcProgress, { disable: true, matrixA: [
                                ['cosθ', 'sinθ', 'CX'],
                                ['-sinθ', 'cosθ', 'CY'],
                                ['0', '0', '1'],
                            ], matrixB: [
                                ['xa'],
                                ['ya'],
                                ['1'],
                            ], matrixFinal: [
                                ['xb'],
                                ['yb'],
                                ['1'],
                            ] }),
                        React.createElement(P, null, "\u6839\u636E \u278A \u278C \u6211\u4EEC\u4E5F\u53EF\u4EE5\u77E5\u9053\uFF0C\u5982\u679C\u65CB\u8F6C\u7684\u4E2D\u5FC3\u6070\u597D\u5728\u539F\u70B9\u7684\u8BDD, \u4E0A\u8FF0 CX \u548C CY \u7684\u503C\u4E3A 0, \u7279\u5F81\u77E9\u9635\u4F1A\u53D8\u7684\u76F8\u5F53\u7B80\u5355: "),
                        React.createElement(MatrixEqual, { left: "M", right: [
                                ['cosθ', 'sinθ', '0'],
                                ['-sinθ', 'cosθ', '0'],
                                ['0', '0', '1'],
                            ] }),
                        React.createElement(P, null, "\u53EF\u80FD\u4F60\u4F1A\u95EE\u6211\u4F60\u4E3A\u4EC0\u4E48\u4E0D\u6311\u539F\u70B9\u505A\u4E2D\u5FC3 \u2014\u2014 \u56E0\u4E3A CSS \u6709 transform-origin \u7684\u7279\u6027\u53EF\u4EE5\u81EA\u884C\u51B3\u5B9A\u4E2D\u5FC3\u70B9, \u56E0\u6B64\u8981\u8003\u8651\u4E00\u4E2A\u66F4 general \u7684\u60C5\u51B5\u3002"),
                        React.createElement(H2, { id: "transform-rotate" }, "rotateZ(x0, y0, deg) \u77E9\u9635\u7684\u4E00\u822C\u5F62\u5F0F"),
                        React.createElement(P, null, "\u5728\u4E0A\u8FF0\u4F8B\u5B50\u91CC\u5176\u5B9E\u662F\u56FA\u5B9A Z \u8F74\u65CB\u8F6C XY \u5E73\u9762\u5B9E\u73B0\u7684\u65CB\u8F6C, \u5728\u65CB\u8F6C\u7684\u8FC7\u7A0B\u4E2D, z \u662F\u4E0D\u53D8\u7684, \u56E0\u6B64\u5176\u4E00\u822C\u5F62\u5F0F\u5982\u4E0B, \u5176\u4E2D x0 y0 \u662F\u65CB\u8F6C\u4E2D\u5FC3\u70B9, deg \u4E3A\u65CB\u8F6C\u89D2\u5EA6:"),
                        矩阵的一般形式.roateZ,
                        React.createElement(P, null, "\u7279\u522B\u5730\uFF0C\u5F53\u65CB\u8F6C\u4E2D\u5FC3\u5728\u539F\u70B9 (0, 0) \u7684\u65F6\u5019 CX \u548C CY \u7684\u503C\u4E3A 0")),
                    React.createElement(H1Block, { id: "why-matrix-product-correspond-to-coordinate-transform", title: "\u4E3A\u4EC0\u4E48\u662F\u77E9\u9635\u4E58\u6CD5 ?" },
                        React.createElement(P, null, "\u77E9\u9635\u7684\u9B54\u529B\u5728\u4E8E\u5B83\u7684\u4E58\u6CD5\u64CD\u4F5C\u5BF9\u5E94\u4E86\u5411\u91CF\u7A7A\u95F4\u7684\u53D8\u6362 \u2014\u2014 \u5E94\u7528\u5230\u56FE\u5F62\u5B66\u5C31\u662F\u56FE\u50CF\u53D8\u6362"),
                        React.createElement(P, null, "\u4EFB\u610F\u590D\u6742\u7684\u53D8\u6362\u90FD\u53EF\u4EE5\u62C6\u4E3A\u82E5\u5E72\u4E2A\u5B50\u53D8\u6362, \u800C\u6BCF\u4E00\u4E2A\u53D8\u6362\u610F\u5473\u7740\u4E00\u6B21\u77E9\u9635\u4E58\u6CD5 \u2014\u2014 \u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u591A\u6B21\u5E94\u7528\u77E9\u9635\u53D8\u6362\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u5BF9\u4EFB\u610F\u590D\u6742\u7684\u53D8\u6362\u6216\u8FD0\u52A8\u7684\u7ED8\u5236\uFF0C\u66F4\u5177\u4F53\u4E00\u70B9\u6765\u8BF4\u6BCF\u6B21\u4E58\u4E0A\u4E00\u6B21\u7279\u5F81\u77E9\u9635\u5C31\u662F\u505A\u4E00\u6B21\u53D8\u6362\uFF0C\u6BD4\u65B9\u65CB\u8F6C 45 \u5EA6\u540E\u5411\u53F3\u8D70 5px \u90A3\u5C31\u5206\u4E24\u4E2A\u77E9\u9635\u4F9D\u6B21\u4E58\u4E0A\u53BB")),
                    React.createElement(H1Block, { id: "let-the-game-begin", title: "\u3055\u3042\u3001\u30B2\u30FC\u30E0\u3092\u59CB\u3081\u3088\u3046" },
                        React.createElement(WindowApp, { height: "auto", icon: svgMatrix2x2.src, title: "CSS Matrix" },
                            React.createElement(MatrixDemo, null))),
                    React.createElement(H1Block, { id: "motto", title: "\u610F\u72B9\u672A\u5C3D ..." },
                        React.createElement(P, null, "\u73A9\u4E86\u4E0A\u9762\u7684 demo \u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u6211\u4F7F\u7528\u7684\u4F4D\u79FB\u77E9\u9635\u5E76\u4E0D\u662F\u50CF\u4E0B\u9762\u7684 \u278A \u8FD9\u6837, \u800C\u662F \u278B \u8FD9\u6837\u5728\u6700\u540E\u4E00\u884C\u6DFB\u52A0\u5206\u91CF:"),
                        React.createElement(Formula, { nth: 1 }, 矩阵的一般形式.translate3d),
                        React.createElement(Formula, { nth: 2 },
                            React.createElement(MatrixEqual, { left: "translate3d(dx, dy, dz)", right: [
                                    ['1', '0', '0', '0'],
                                    ['0', '1', '0', '0'],
                                    ['0', '0', '1', '0'],
                                    ['dx', 'dy', 'dz', '1'],
                                ] })),
                        React.createElement(P, null, "\u5177\u4F53\u539F\u56E0\u662F\u6D4F\u89C8\u5668\u5B9E\u73B0\u7528\u7684\u77E9\u9635\u8BA1\u7B97\u4E2D\u5750\u6807\u662F\u653E\u5728\u5DE6\u8FB9\u800C\u4E0D\u662F\u5728\u53F3\u8FB9, \u56E0\u6B64\u77E9\u9635\u6309\u5BF9\u89D2\u7EBF\u5BF9\u79F0\u53D8\u6362\u4E86 (\u5199 DEMO \u88AB\u5751\u5230\u4E86 233):"),
                        React.createElement(MatrixCalcProgress, { disable: true, matrixA: [
                                ['x', 'y', 'z', '1'],
                                // ['x'],
                                // ['y'],
                                // ['z'],
                                // ['1'],
                            ], matrixB: [
                                ['1', '0', '0', '0'],
                                ['0', '1', '0', '0'],
                                ['0', '0', '1', '0'],
                                ['dx', 'dy', 'dz', '1'],
                            ], matrixC: [
                                ['x+dx', 'y+dy', 'z+dz', '1'],
                            ] }),
                        React.createElement(P, null, "\u5F53\u672C\u6587\u5199\u5230\u8FD9\u91CC\u7684\u65F6\u5019\u6211\u4F9D\u7136\u5BF9\u8FD9\u5957\u53D8\u6362\u8FD8\u5B58\u6709\u56F0\u60D1\uFF0C\u6BD4\u5982\u4F60\u4E00\u5B9A\u4F1A\u6CE8\u610F\u5230\u6211\u6BCF\u4E00\u4E2A\u7684\u77E9\u9635\u53D8\u6362\u91CC\u6700\u540E\u4E00\u4E2A\u662F 1, \u800C\u4E14\u90FD\u662F 4x4 \u7684\uFF0C\u5982\u679C\u8BF4\u7B2C\u4E00\u4E8C\u4E09\u884C\u5BF9\u5E94 x y z \u4E09\u4E2A\u8F74, \u90A3\u4E48\u7B2C\u56DB\u884C\u53C8\u5BF9\u5E94\u4EC0\u4E48\u5462? \u800C\u8FD9\u4E00\u5207\u90FD\u4F1A\u6307\u5411\u6700\u540E\u4E00\u4E2A\u7EBF\u7D22 \u300C\u900F\u89C6 (perspective)\u300D"),
                        React.createElement(P, null, "\u5230\u8FD9\u91CC\u80FD\u660E\u663E\u611F\u5230\u6211\u5DF2\u7AD9\u5728 3D \u4E16\u754C\u5927\u95E8\u524D, \u53EA\u5DEE\u4E34\u95E8\u4E00\u811A, \u610F\u72B9\u672A\u5C3D ..."),
                        React.createElement(ImgDynamic, { file: fileMatrixCalc }),
                        React.createElement(P, null,
                            React.createElement("s", null, "\u671F\u95F4\u8FD8\u7B97\u4E86\u534A\u5929\u7B97\u9519\u4E86, \u6211\u592A\u83DC\u4E86.jpg"))),
                    React.createElement(H1Block, { id: "ref", title: "Links" },
                        React.createElement(P, null, "\u64B0\u5199\u6B64\u6587\u53C2\u8003\u4E86\u5927\u91CF\u8D44\u6599, \u611F\u8C22\u4E92\u8054\u7F51, \u4E5F\u611F\u8C22\u8FC7\u7A0B\u4E2D\u8DDF\u6211\u8BA8\u8BBA\u8FC7\u7684\u670B\u53CB\u4EEC"),
                        [
                            React.createElement(Link, { block: true, href: "https://matrixcalc.org/zh" }, "\u77E9\u9635\u8BA1\u7B97\u5668 Matrix Calculator"),
                            React.createElement(Link, { block: true, href: "https://zh.wikipedia.org/wiki/%E7%9F%A9%E9%99%A3%E4%B9%98%E6%B3%95" }, "Wiki - \u77E9\u9635\u4E58\u6CD5"),
                            React.createElement(Link, { block: true, href: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform" }, "MDN - CSS Transform"),
                            React.createElement(Link, { block: true, href: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d" }, "MDN - Matrix3d"),
                            React.createElement(Link, { block: true, href: "https://zhuanlan.zhihu.com/p/50066691" }, "\u77E5\u4E4E - \u7EBF\u6027\u4EE3\u6570\u4E4B\u5411\u91CF\u7A7A\u95F4"),
                            React.createElement(Link, { block: true, href: "https://zhuanlan.zhihu.com/p/81418332" }, "\u77E5\u4E4E - \u4E09\u89D2\u548C\u5DEE\u516C\u5F0F"),
                            React.createElement(Link, { block: true, href: "https://zhuanlan.zhihu.com/p/392354853" }, "\u77E5\u4E4E - \u5728 WebGL \u4E2D\u5B9E\u73B0 matrix3d"),
                            React.createElement(Link, { block: true, href: "https://en.wikipedia.org/wiki/Affine_transformation" }, "Wiki - Affine Transformation"),
                            React.createElement(Link, { block: true, href: "https://blog.csdn.net/shenquanyue/article/details/103262512" }, "CSDN - \u4EFF\u5C04\u53D8\u6362"),
                            React.createElement(Link, { block: true, href: "https://zh.wikipedia.org/zh-cn/%E6%97%8B%E8%BD%AC%E7%9F%A9%E9%98%B5" }, "Wiki - \u65CB\u8F6C\u77E9\u9635"),
                        ].map((l, k) => React.createElement(P, { key: k }, l))));
            });
            function calc(size, deg) {
                const line = Math.sqrt((size * size) + (size * size));
                const degp = deg * (Math.PI / 180); // 弧度制
                const x = Math.cos(degp) * line;
                const y = Math.sin(degp) * line;
                return { x, y };
            }

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
