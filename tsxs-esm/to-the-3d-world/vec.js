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

      exports('default', CodeVec);

      // loaded by rollup-plugin-rally-query-resolve
      const lang = 'ts';
      const source = "// vec.ts\nexport type Vec2 = [number, number];\nexport type Vec3 = [number, number, number];\nexport type Vec4 = [number, number, number, number];\n// 通常也可以用来表示 \"点\"\nexport type Point3 = Vec3;\n\n/** 计算 a + b */\nexport function add3(a: Vec3, b: Vec3): Vec3 {\n  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];\n}\n\n/** 计算 a - b */\nexport function sub3(a: Vec3, b: Vec3): Vec3 {\n  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];\n}\n\n/** 放大 a */\nexport function scale3(a: Vec3, s: number): Vec3 {\n  return [a[0] * s, a[1] * s, a[2] * s];\n}\n\n/** 点乘 a \\cdot b */\nexport function dot3(a: Vec3, b: Vec3): number {\n  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];\n}\n\n/** 叉乘 a \\times b */\nexport function cross3(a: Vec3, b: Vec3): Vec3 {\n  return [\n    a[1] * b[2] - a[2] * b[1],\n    a[2] * b[0] - a[0] * b[2],\n    a[0] * b[1] - a[1] * b[0],\n  ];\n}\n\n/** 计算 a 的模 (长度) */\nexport function len3(a: Vec3): number {\n  return Math.hypot(a[0], a[1], a[2]);\n}\n\n/** 将 a 向量的长度设置为 1 (归一化) */\nexport function normalize3(a: Vec3): Vec3 {\n  const l = len3(a);\n  // 避免除 0 错误，兜一下\n  if (l < 1e-10) return [0, 0, 0];\n  return [a[0] / l, a[1] / l, a[2] / l];\n}\n";
      function CodeVec(props) {
        return React.createElement(Code, { lang, source, ...props, });
      };

    })
  };
}));
