System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      var cssMatrix = exports('default', "/* 矩阵容器 */\n.matrix-main {\n  vertical-align: middle;\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  line-height: 1;\n  padding: 0 .4em;\n  box-sizing: border-box;\n}\n\n/* 矩阵括号 */\n.matrix-bracket-left  { left: 0;  border-left: 1px solid #000; }\n.matrix-bracket-right { right: 0; border-right: 1px solid #000; }\n.matrix-bracket {\n  position: absolute;\n  top: 5%;\n  width: 4px;\n  height: 87%;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n}\n\n/* 矩阵行 */\n.matrix-line {\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n}\n\n/* 矩阵项 */\n.matrix-item {\n  display: inline-block;\n  min-width: 1em;\n  width: auto;\n  height: 1em;\n  line-height: 1;\n  padding: .4em;\n  text-align: center;\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 1em;\n  font-family: math, monospace, consolas;\n}\n\n.matrix-calc-progress {\n  white-space: nowrap;\n}\n.matrix-calc-progress > * { margin-right: .4em; }\n\n");

    })
  };
}));
