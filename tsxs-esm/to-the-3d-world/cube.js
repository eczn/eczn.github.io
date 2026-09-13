System.register(['react', 'rally/@@'], (function (exports) {
  'use strict';
  var React, Code;
  return {
    setters: [function (module) {
      React = module.default;
    }, function (module) {
      Code = module.Code;
    }],
    execute: (function () {

      exports('default', CodeCube);

      // loaded by rollup-plugin-rally-query-resolve
      const lang = 'ts';
      const source = "// cube.ts\nimport { Vec3 } from './vec';\n\nexport const VERTEX_LABELS = [\n  'A', 'B', 'C', 'D',\n  'E', 'F', 'G', 'H',\n] as const;\n\nexport const CUBE_VERTICES: Vec3[] = [\n  [ -1, -1, -1 ],\n  [  1, -1, -1 ],\n  [  1, -1,  1 ],\n  [ -1, -1,  1 ],\n  [ -1,  1, -1 ],\n  [  1,  1, -1 ],\n  [  1,  1,  1 ],\n  [ -1,  1,  1 ],\n];\n\n// 奇数项连接偶数项\nexport const CUBE_LINES = [\n  0, 1,   // v0-v1\n  1, 2,   // v1-v2\n  2, 3,   // v2-v3\n  3, 0,   // v3-v0\n  4, 5,   // ...\n  5, 6,\n  6, 7,\n  7, 4,\n  0, 4,\n  1, 5,\n  2, 6,\n  3, 7\n];\n\n";
      function CodeCube(props) {
        return React.createElement(Code, { lang, source, ...props, });
      };

    })
  };
}));
