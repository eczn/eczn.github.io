System.register(['react', 'rally/@@', '../coordinate-axis/line.js', '../matrix/matrix-product.js', '../matrix/matrix-equal.js', '../coordinate-axis/index.js', '../coordinate-axis/rect.js', '../coordinate-axis/point.js', '../formula/index.js'], (function (exports) {
  'use strict';
  var React, ItemGroup, Item, Button, ProgressBarNumber, toRadian, matrixProduct, MatrixEqual, CoordinateAxis, Rect, PointPx, Formula;
  return {
    setters: [function (module) {
      React = module.default;
    }, function (module) {
      ItemGroup = module.ItemGroup;
      Item = module.Item;
      Button = module.Button;
      ProgressBarNumber = module.ProgressBarNumber;
    }, function (module) {
      toRadian = module.toRadian;
    }, function (module) {
      matrixProduct = module.matrixProduct;
    }, function (module) {
      MatrixEqual = module.MatrixEqual;
    }, function (module) {
      CoordinateAxis = module.CoordinateAxis;
    }, function (module) {
      Rect = module.Rect;
    }, function (module) {
      PointPx = module.PointPx;
    }, function (module) {
      Formula = module.Formula;
    }],
    execute: (function () {

      exports({
        MatrixDemo: MatrixDemo,
        getRotateMatrix: getRotateMatrix,
        getTranslateMatrix: getTranslateMatrix,
        matrixToCSS: matrixToCSS
      });

      function matrixToCSS(matrix) {
          return `
    matrix3d(
      ${matrix.map(line => line.join(', ')).join(',\n')}
    )
  `;
      }
      function getRotateMatrix(x0, y0, deg) {
          const rad = toRadian(deg);
          const sin = Math.sin(rad);
          const cos = Math.cos(rad);
          const CX = x0 * (1 - cos) + y0 * sin;
          const CY = y0 * (cos - 1) + x0 * sin;
          return [
              [cos, -sin, 0, 0],
              [sin, cos, 0, 0],
              [0, 0, 1, 0],
              [CX, CY, 0, 1],
          ];
      }
      function getTranslateMatrix(dx, dy, dz) {
          return [
              [1, 0, 0, 0],
              [0, 1, 0, 0],
              [0, 0, 1, 0],
              [dx, dy, dz, 1],
          ];
      }
      function MatrixDemo(props) {
          const barDeg = useContollerBar({ min: -180, max: 180 });
          const barDx = useContollerBar({ min: -200, max: 200 });
          const barDy = useContollerBar({ min: -200, max: 200 });
          const barDz = useContollerBar({ min: -200, max: 200 });
          const barX0 = useContollerBar({ min: -200, max: 200 });
          const barY0 = useContollerBar({ min: -200, max: 200 });
          // const x0 = 0;
          // const y0 = 0;
          const rotateMatrix = getRotateMatrix(barX0.value, barY0.value, -barDeg.value);
          const rotateDxDy = getTranslateMatrix(barDx.value, barDy.value, barDz.value);
          const finalMatrix = matrixProduct(rotateMatrix, rotateDxDy);
          const result = matrixToCSS(finalMatrix);
          return (React.createElement("div", null,
              React.createElement("div", { style: { margin: '0 auto', textAlign: 'center', overflow: 'hidden' } },
                  React.createElement(CoordinateAxis, { width: 24, height: 24, zero: [12, 12], subview: React.createElement(React.Fragment, null,
                          React.createElement(Rect, { width: 16, height: 16, left: -8, bottom: -8, color: 'rgba(245, 0, 0, .6)', style: {
                                  transform: `perspective(15em) ${result}`,
                                  transition: 'all .5s',
                                  zIndex: -9999,
                              } }),
                          React.createElement(PointPx, { x: barX0.value, y: barY0.value, name: `(${barX0.value.toFixed(1)}, ${barY0.value.toFixed(1)})`, style: {
                                  transition: 'all .5s',
                                  zIndex: -9999,
                              } })) })),
              React.createElement(ItemGroup, null,
                  React.createElement(ItemGroup, null,
                      React.createElement(Item, { name: "Z \u8F74\u65CB\u8F6C", introduction: "\u8D1F\u6570\u4EE3\u8868\u65CB\u8F6C\u65B9\u5411\u4E3A\u9006\u65F6\u9488" }, barDeg.component),
                      React.createElement(Item, { name: "\u65CB\u8F6C\u4E2D\u5FC3 x0", introduction: "\u8D1F\u6570\u4EE3\u8868\u5411\u5DE6\u79FB\u52A8" }, barX0.component),
                      React.createElement(Item, { name: "\u65CB\u8F6C\u4E2D\u5FC3 y0", introduction: "\u8D1F\u6570\u4EE3\u8868\u5411\u5DE6\u79FB\u52A8" }, barY0.component)),
                  React.createElement(ItemGroup, null,
                      React.createElement(Item, { name: "X \u8F74\u4F4D\u79FB", introduction: "\u8D1F\u6570\u4EE3\u8868\u5411\u5DE6\u79FB\u52A8" }, barDx.component),
                      React.createElement(Item, { name: "Y \u8F74\u4F4D\u79FB", introduction: "\u8D1F\u6570\u4EE3\u8868\u5411\u4E0A\u79FB\u52A8" }, barDy.component),
                      React.createElement(Item, { name: "Z \u8F74\u4F4D\u79FB", introduction: "\u8D1F\u6570\u4EE3\u8868\u5411\u4E0A\u79FB\u52A8" }, barDz.component)),
                  React.createElement(Item, { style: { textAlign: 'center' } },
                      React.createElement(MatrixEqual, { left: "DemoMatrix", right: finalMatrix.map(l => l.map(e => Number(e).toFixed(2))) }),
                      React.createElement(Formula, null,
                          React.createElement(Button, { size: 'small', onClick: () => {
                                  barDeg.setValue(0);
                                  barDx.setValue(0);
                                  barDy.setValue(0);
                                  barDz.setValue(0);
                              } }, "\u77E9\u9635\u590D\u4F4D"),
                          React.createElement(Button, { size: 'small', onClick: () => {
                                  barX0.setValue(0);
                                  barY0.setValue(0);
                              } }, "\u4E2D\u5FC3\u590D\u4F4D"))))));
      }
      function useContollerBar(props) {
          const [value, setValue] = React.useState(0);
          const component = (React.createElement(ProgressBarNumber, { min: props.min, max: props.max, input: value, inc: 0.5, renderOutter: (p) => React.createElement(React.Fragment, null, p.toFixed(0)), current: p => React.createElement(React.Fragment, null, p.toFixed(1)), onChange: next => {
                  setValue(next);
              } }));
          return {
              component,
              value,
              setValue,
          };
      }

    })
  };
}));
//# sourceMappingURL=matrix-demo.js.map
