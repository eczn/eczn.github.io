System.register(['react', 'rally/@@', './images/title.png.js', './images/frustum.png.js', './images/the-same-point.png.js', './images/rebasis2d.png.js', './images/camera-basis.png.js', './images/camera-world.png.js', './images/eof.png.js', './cube.js', './vec.js', './render-cube.js', './lazy-render.js', './gaming-cube.js'], (function (exports) {
  'use strict';
  var React, P, Link, ImgDynamic, H1Block, Formula, Code, metaBeauty, fileTitle, fileFrustum, fileTheSamePoint, fileRebasis2d, fileCameraRebasis, fileCameraWorld, fileEof, CodeCube, CodeVec, RenderCube, LazyRender, GamingCube;
  return {
    setters: [function (module) {
      React = module.default;
    }, function (module) {
      P = module.P;
      Link = module.Link;
      ImgDynamic = module.ImgDynamic;
      H1Block = module.H1Block;
      Formula = module.Formula;
      Code = module.Code;
      metaBeauty = module.metaBeauty;
    }, function (module) {
      fileTitle = module.default;
    }, function (module) {
      fileFrustum = module.default;
    }, function (module) {
      fileTheSamePoint = module.default;
    }, function (module) {
      fileRebasis2d = module.default;
    }, function (module) {
      fileCameraRebasis = module.default;
    }, function (module) {
      fileCameraWorld = module.default;
    }, function (module) {
      fileEof = module.default;
    }, function (module) {
      CodeCube = module.default;
    }, function (module) {
      CodeVec = module.default;
    }, function (module) {
      RenderCube = module.RenderCube;
    }, function (module) {
      LazyRender = module.LazyRender;
    }, function (module) {
      GamingCube = module.GamingCube;
    }],
    execute: (function () {

      exports('initialProps', initialProps);

      const meta = exports('meta', metaBeauty({
          id: 'to-the-3d-world',
          // type: 'app',
          // appTitle: 'app ?',
          title: '来到 3D 世界',
          author: 'ecznlai',
          intro: '在 23 年的时候，我曾写过一篇文章，记录了关于 matrix 变换的原理，在那篇文章最后曾提到 “到这里能明显感到我已站在 3D 世界大门前, 只差临门一脚, 意犹未尽”，今天就来完成这最后的临门一脚，开始玩下图形学，本文目标：用 React SVG 实现一个 Cube 方块的绘制。将 3D 的东西搬到 2D 其实就是找到一个矩阵，使 3D 的 Cube 的 8 个顶点映射到 2D 的屏幕空间内，实现了这个之后在对应的 2D 位置绘制线条和圆圈其实就完成了 3D 的渲染绘制了，在此之前先回顾一下基础概念：常用向量计算、矩阵如何表达变换，以及常用矩阵变换',
          // category: '分类',
          time: new Date('2026-09-09 22:06'),
          bookLayout: 'full',
      }));
      async function initialProps(context) {
          return {};
      }
      const xy0 = `
\{\\color\{gray\}
\\begin{bmatrix}
  x \\\\
  y \\\\
  0 \\\\
\\end{bmatrix}
\}
`;
      var index_blog = exports('default', (props) => {
          return React.createElement(React.Fragment, null,
              React.createElement(React.Fragment, null,
                  React.createElement(P, null,
                      "\u5728 23 \u5E74\u7684\u65F6\u5019\uFF0C\u6211\u66FE\u5199\u8FC7\u4E00\u7BC7\u6587\u7AE0 ",
                      React.createElement(Link, { href: "/b/css-matrix3d-calc/" }, "CSS Matrix3D \u4E2D\u7684\u77E9\u9635\u8FD0\u7B97"),
                      " \u8BB0\u5F55\u4E86\u5173\u4E8E matrix \u53D8\u6362\u7684\u539F\u7406 \uFF0C\u5728\u90A3\u7BC7\u6587\u7AE0\u6700\u540E\u66FE\u63D0\u5230 \u201C\u5230\u8FD9\u91CC\u80FD\u660E\u663E\u611F\u5230\u6211\u5DF2\u7AD9\u5728 3D \u4E16\u754C\u5927\u95E8\u524D, \u53EA\u5DEE\u4E34\u95E8\u4E00\u811A, \u610F\u72B9\u672A\u5C3D\u201D\uFF0C\u4ECA\u5929\u5C31\u6765\u5B8C\u6210\u8FD9\u6700\u540E\u7684\u4E34\u95E8\u4E00\u811A\uFF0C\u5F00\u59CB\u73A9\u4E0B\u56FE\u5F62\u5B66\uFF0C\u672C\u6587\u76EE\u6807\uFF1A\u7528 React SVG \u5B9E\u73B0\u4E00\u4E2A Cube \u65B9\u5757\u7684\u7ED8\u5236\u3002"),
                  React.createElement(ImgDynamic, { file: fileTitle, style: { marginLeft: '2rem' } }),
                  React.createElement(P, null, "\u6CE8\uFF1A\u8BF7\u4F7F\u7528 PC/Mac/iPad \u9605\u8BFB\u672C\u6587\uFF0C\u79FB\u52A8\u7AEF\u4E0D\u4FDD\u8BC1\u6392\u7248\u6548\u679C\uFF0C\u5148\u4E0A\u6700\u7EC8\u6548\u679C\uFF1A"),
                  React.createElement(P, null,
                      React.createElement(GamingCube, null))),
              React.createElement(H1Block, { id: "how-to-draw-3d-content", title: "\u5982\u4F55\u7ED8\u5236 3D \u5185\u5BB9" },
                  React.createElement(P, null, "\u5C06 3D \u7684\u4E1C\u897F\u642C\u5230 2D \u5176\u5B9E\u5C31\u662F\u627E\u5230\u4E00\u4E2A\u77E9\u9635\uFF0C\u4F7F 3D \u7684 Cube \u7684 8 \u4E2A\u9876\u70B9\u6620\u5C04\u5230 2D \u7684\u5C4F\u5E55\u7A7A\u95F4\u5185\uFF0C\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u4E4B\u540E\u5728\u5BF9\u5E94\u7684 2D \u4F4D\u7F6E\u7ED8\u5236\u7EBF\u6761\u548C\u5706\u5708\u5176\u5B9E\u5C31\u5B8C\u6210\u4E86 3D \u7684\u6E32\u67D3\u7ED8\u5236\u4E86\uFF0C\u5728\u6B64\u4E4B\u524D\u5148\u56DE\u987E\u4E00\u4E0B\u57FA\u7840\u6982\u5FF5\uFF1A\u5E38\u7528\u5411\u91CF\u8BA1\u7B97\u3001\u77E9\u9635\u5982\u4F55\u8868\u8FBE\u53D8\u6362\uFF0C\u4EE5\u53CA\u5E38\u7528\u77E9\u9635\u53D8\u6362")),
              React.createElement(H1Block, { id: "common-vector-calc", title: "\u5E38\u7528\u5411\u91CF\u8BA1\u7B97" },
                  React.createElement(P, null, "\u4EE5\u4E0B\u4EE3\u7801\u7ED9\u51FA\u4E86\u5E38\u7528\u7684\u5411\u91CF\u8BA1\u7B97\uFF0C\u548C\u7C7B\u578B\u5EFA\u6A21"),
                  React.createElement(CodeVec, null),
                  React.createElement("svg", { className: "std-para", viewBox: "0 0 760 225", style: {
                          width: '100%',
                          maxWidth: '760px',
                          height: 'auto',
                          display: 'block',
                      }, xmlns: "http://www.w3.org/2000/svg" },
                      React.createElement("defs", null,
                          React.createElement("marker", { id: "vec-arrow-blue", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#1d4ed8" })),
                          React.createElement("marker", { id: "vec-arrow-red", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#b91c1c" })),
                          React.createElement("marker", { id: "vec-arrow-green", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#059669" })),
                          React.createElement("marker", { id: "vec-arrow-slate", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#64748b" })),
                          React.createElement("marker", { id: "vec-arrow-light-slate", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#94a3b8" }))),
                      React.createElement("g", null,
                          React.createElement("rect", { x: "20", y: "15", width: "226", height: "195", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("text", { x: "36", y: "42", fontFamily: "monospace", fontSize: "13", fontWeight: "bold", fill: "#1d4ed8" }, "dot3(a, b)"),
                          React.createElement("path", { d: "M 85 150 A 30 30 0 0 0 74 128", fill: "none", stroke: "#94a3b8", strokeWidth: "1.2" }),
                          React.createElement("text", { x: "90", y: "140", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "12", fill: "#64748b" }, "\u03B8"),
                          React.createElement("line", { x1: "55", y1: "150", x2: "215", y2: "150", stroke: "#64748b", strokeWidth: "1.8", markerEnd: "url(#vec-arrow-slate)" }),
                          React.createElement("text", { x: "222", y: "154", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "14", fill: "#0f172a" }, "b"),
                          React.createElement("line", { x1: "130", y1: "82", x2: "130", y2: "150", stroke: "#3b82f6", strokeWidth: "1.2", strokeDasharray: "3 3" }),
                          React.createElement("polyline", { points: "122,150 122,142 130,142", fill: "none", stroke: "#94a3b8", strokeWidth: "1" }),
                          React.createElement("line", { x1: "55", y1: "150", x2: "130", y2: "82", stroke: "#1d4ed8", strokeWidth: "2", markerEnd: "url(#vec-arrow-blue)" }),
                          React.createElement("text", { x: "133", y: "76", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "14", fill: "#1d4ed8" }, "a"),
                          React.createElement("line", { x1: "55", y1: "160", x2: "130", y2: "160", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                          React.createElement("line", { x1: "55", y1: "157", x2: "55", y2: "163", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                          React.createElement("line", { x1: "130", y1: "157", x2: "130", y2: "163", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "55", cy: "150", r: "2.5", fill: "#0f172a" }),
                          React.createElement("text", { x: "44", y: "154", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "12", fill: "#0f172a" }, "O")),
                      React.createElement("g", null,
                          React.createElement("rect", { x: "266", y: "15", width: "226", height: "195", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("text", { x: "282", y: "42", fontFamily: "monospace", fontSize: "13", fontWeight: "bold", fill: "#b91c1c" }, "cross3(a, b)"),
                          React.createElement("polygon", { points: "345,150 425,165 480,135 400,120", fill: "#1d4ed8", fillOpacity: "0.04", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "3 2" }),
                          React.createElement("line", { x1: "345", y1: "150", x2: "425", y2: "165", stroke: "#1d4ed8", strokeWidth: "2", markerEnd: "url(#vec-arrow-blue)" }),
                          React.createElement("text", { x: "433", y: "170", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "14", fill: "#1d4ed8" }, "a"),
                          React.createElement("line", { x1: "345", y1: "150", x2: "400", y2: "120", stroke: "#64748b", strokeWidth: "1.8", markerEnd: "url(#vec-arrow-slate)" }),
                          React.createElement("text", { x: "406", y: "117", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "14", fill: "#475569" }, "b"),
                          React.createElement("line", { x1: "345", y1: "150", x2: "345", y2: "75", stroke: "#b91c1c", strokeWidth: "2.2", markerEnd: "url(#vec-arrow-red)" }),
                          React.createElement("text", { x: "345", y: "65", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontWeight: "bold", fontSize: "13", fill: "#b91c1c" }, "a \u00D7 b"),
                          React.createElement("polyline", { points: "345,140 355,142 355,152", fill: "none", stroke: "#b91c1c", strokeWidth: "1" }),
                          React.createElement("path", { d: "M 390 157 C 398 149, 394 138, 380 130", fill: "none", stroke: "#94a3b8", strokeWidth: "1", strokeDasharray: "2 2", markerEnd: "url(#vec-arrow-light-slate)" }),
                          React.createElement("circle", { cx: "345", cy: "150", r: "2.5", fill: "#0f172a" }),
                          React.createElement("text", { x: "334", y: "154", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "12", fill: "#0f172a" }, "O")),
                      React.createElement("g", null,
                          React.createElement("rect", { x: "512", y: "15", width: "228", height: "195", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("text", { x: "528", y: "42", fontFamily: "monospace", fontSize: "13", fontWeight: "bold", fill: "#059669" }, "normalize3(v)"),
                          React.createElement("line", { x1: "545", y1: "130", x2: "698", y2: "130", stroke: "#cbd5e1", strokeWidth: "1", markerEnd: "url(#vec-arrow-light-slate)" }),
                          React.createElement("text", { x: "706", y: "134", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "12", fill: "#94a3b8" }, "x"),
                          React.createElement("line", { x1: "620", y1: "190", x2: "620", y2: "64", stroke: "#cbd5e1", strokeWidth: "1", markerEnd: "url(#vec-arrow-light-slate)" }),
                          React.createElement("text", { x: "620", y: "57", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "12", fill: "#94a3b8" }, "y"),
                          React.createElement("circle", { cx: "620", cy: "130", r: "48", fill: "#059669", fillOpacity: "0.04", stroke: "#059669", strokeWidth: "1.2", strokeDasharray: "3 3" }),
                          React.createElement("line", { x1: "668", y1: "127", x2: "668", y2: "133", stroke: "#94a3b8", strokeWidth: "1" }),
                          React.createElement("text", { x: "668", y: "144", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fill: "#64748b" }, "1"),
                          React.createElement("line", { x1: "617", y1: "82", x2: "623", y2: "82", stroke: "#94a3b8", strokeWidth: "1" }),
                          React.createElement("text", { x: "612", y: "86", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fill: "#64748b" }, "1"),
                          React.createElement("line", { x1: "656", y1: "98", x2: "682", y2: "74", stroke: "#94a3b8", strokeWidth: "1.6", strokeDasharray: "3 3", markerEnd: "url(#vec-arrow-light-slate)" }),
                          React.createElement("text", { x: "690", y: "72", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "14", fill: "#64748b" }, "v"),
                          React.createElement("line", { x1: "620", y1: "130", x2: "656", y2: "98", stroke: "#059669", strokeWidth: "2.4", markerEnd: "url(#vec-arrow-green)" }),
                          React.createElement("circle", { cx: "656", cy: "98", r: "3", fill: "#059669" }),
                          React.createElement("text", { x: "642", y: "90", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontWeight: "bold", fontSize: "13", fill: "#059669" }, "v\u0302"),
                          React.createElement("circle", { cx: "620", cy: "130", r: "2.5", fill: "#0f172a" }),
                          React.createElement("text", { x: "609", y: "144", fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontSize: "12", fill: "#0f172a" }, "O")))),
              React.createElement(H1Block, { id: "transform-by-the-cases-of-equation", title: "\u7528\u65B9\u7A0B\u7EC4\u8868\u8FBE\u53D8\u6362" },
                  React.createElement(P, null,
                      "\u7EC6\u8282\u5728\u524D\u6587\u90FD\u6709\u63D0\u5230\uFF0C\u8FD9\u91CC\u590D\u4E60\u4E00\u4E0B\uFF0C\u77E9\u9635\u4EE3\u8868\u4E86\u4E00\u4E2A\u53D8\u6362\u65B9\u7A0B\u7EC4\uFF0C\u6BD4\u5982\u6211\u4EEC\u6709\u4E00\u4E2A\u77E9\u9635 ",
                      React.createElement(Formula, { source: "A", inline: true }),
                      " \u4E14\u4EE5\u53CA\u4E00\u4E2A\u70B9 ",
                      React.createElement(Formula, { source: "P", inline: true }),
                      "\uFF1A"),
                  React.createElement(Formula, { source: `
        A = \\begin{bmatrix}
        a & b & c \\\\
        d & e & f \\\\
        g & h & i
        \\end{bmatrix}, \\quad

        P = \\begin{bmatrix}
        x \\\\
        y \\\\
        z
        \\end{bmatrix}
      ` }),
                  React.createElement(P, null,
                      "\u6B64\u65F6 ",
                      React.createElement(Formula, { source: "A \\cdot P", inline: true }),
                      " \u70B9\u4E58\u7684\u8BA1\u7B97\u5219\u4EE3\u8868\u5C06 x y z \u505A\u4E00\u4E2A\u53D8\u6362\u5F97\u5230 x' y' z'\uFF0C\u5177\u4F53\u5C55\u5F00\u5982\u4E0B\uFF0C\u610F\u601D\u662F\u7ECF\u8FC7\u70B9\u4E58\u8BA1\u7B97\u5F97\u5230\u53E6\u5916\u4E00\u4E2A\u70B9\u7684\u5750\u6807 ",
                      React.createElement(Formula, { source: "(x',y',z')", inline: true })),
                  React.createElement(Formula, { source: `
        \\begin{bmatrix}
        a & b & c \\\\
        d & e & f \\\\
        g & h & i
        \\end{bmatrix} \\cdot
        \\begin{bmatrix}
        x \\\\
        y \\\\
        z
        \\end{bmatrix} = 
        \\begin{bmatrix}
        ax + by + cz \\\\
        dx + ey + fz \\\\
        gx + hy + iz
        \\end{bmatrix} = 
        \\begin{bmatrix}
        x' \\\\
        y' \\\\
        z'
        \\end{bmatrix}
      ` }),
                  React.createElement(P, null,
                      "\u56E0\u6B64\uFF0C\u5728\u8FD9\u4E2A\u89D2\u5EA6\u6765\u770B\u70B9\u4E58\u64CD\u4F5C\uFF0C\u5176\u5B9E\u662F\u628A\u70B9\u5E26\u5165\u5230\u5BF9\u5E94\u7684\u7EBF\u6027\u65B9\u7A0B\u7EC4\uFF0C\u8BA1\u7B97\u51FA ",
                      React.createElement(Formula, { source: " xyz \\rightarrow x'y'z' ", inline: true }),
                      " \u7684\u53D8\u6362\u8BA1\u7B97\uFF0C\u4ECE\u800C\u7CBE\u786E\u63CF\u8FF0 \u201C\u5982\u4F55\u505A\u70B9\u7684\u53D8\u6362\u201D\uFF0C\u70B9\u4E58\u5373\u53D8\u6362\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{bmatrix}
        a & b & c \\\\
        d & e & f \\\\
        g & h & i
        \\end{bmatrix}

        \\xrightarrow{可视作一个线性方程组}  

        \\begin{cases}
        x' = a \\cdot x + b \\cdot y + c \\cdot z \\\\
        y' = d \\cdot x + e \\cdot y + f \\cdot z \\\\
        z' = g \\cdot x + h \\cdot y + i \\cdot z
        \\end{cases} 
      ` }),
                  React.createElement(P, null,
                      "\u4E8E\u662F\uFF0C\u5BF9\u4E8E 2D \u70B9\u6765\u8BF4\uFF0C\u4E0D\u59A8\u4EE4 ",
                      React.createElement(Formula, { source: "z = 0", inline: true }),
                      "\uFF0C\u4E8E\u662F\u5E73\u79FB\u3001\u7F29\u653E\u3001\u65CB\u8F6C\u90FD\u53EF\u4EE5\u5199\u51FA\u6765\u5BF9\u5E94\u7684\u77E9\u9635\u5F0F\u5B50\u4E86\uFF0C\u7279\u522B\u5730 ",
                      React.createElement(Formula, { source: "I", inline: true }),
                      " \u5219\u4EE3\u8868\u4E0D\u505A\u4EFB\u4F55\u53D8\u6362\uFF0C\u76F8\u5F53\u4E8E\u70B9\u4E58\u8FD0\u7B97\u7684 \"1\" :"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}

          translate(tx, ty) \\cdot ${xy0} &= \\begin{bmatrix}
          1 & 0 & tx \\\\
          0 & 1 & ty \\\\
          0 & 0 & 1
          \\end{bmatrix} \\cdot ${xy0} =
          \\begin{bmatrix}
            1 \\cdot x + 0 \\cdot y + tx \\\\
            0 \\cdot x + 1 \\cdot y + ty \\\\
            0 \\cdot x + 0 \\cdot y + 1
          \\end{bmatrix} = 
          \\begin{bmatrix}
            x + tx \\\\
            y + ty \\\\
            1
          \\end{bmatrix}

          \\\\ \\\\

          scale(a, b) \\cdot ${xy0} &= \\begin{bmatrix}
          a & 0 & 0 \\\\
          0 & b & 0 \\\\
          0 & 0 & 1
          \\end{bmatrix} \\cdot ${xy0} =
          \\begin{bmatrix}
            a \\cdot x + 0 \\cdot y + 0 \\\\
            0 \\cdot x + b \\cdot y + 0 \\\\
            0 \\cdot x + 0 \\cdot y + 1
          \\end{bmatrix} = 
          \\begin{bmatrix}
            a \\cdot x \\\\
            b \\cdot y \\\\
            1
          \\end{bmatrix}  

          \\\\ \\\\

          I \\cdot ${xy0} &= \\begin{bmatrix}
          1 & 0 & 0 \\\\
          0 & 1 & 0 \\\\
          0 & 0 & 1
          \\end{bmatrix} \\cdot ${xy0} =
          \\begin{bmatrix}
            1 \\cdot x + 0 \\cdot y + 0 \\\\
            0 \\cdot x + 1 \\cdot y + 0 \\\\
            0 \\cdot x + 0 \\cdot y + 1
          \\end{bmatrix} = 
          \\begin{bmatrix}
            x \\\\
            y \\\\
            1
          \\end{bmatrix}

          \\\\ \\\\

          rotate(θ) \\cdot ${xy0} &= \\begin{bmatrix}
          cosθ & -sinθ & 0 \\\\
          sinθ & cosθ & 0 \\\\
          0 & 0 & 1
          \\end{bmatrix} \\cdot ${xy0} \\qquad (备注: 推导见前文)
        \\end{aligned}
      ` })),
              React.createElement(H1Block, { id: "common-matrix-operation", title: "\u5E38\u7528\u77E9\u9635\u64CD\u4F5C" },
                  React.createElement(P, null, "\u4EE5\u4E0B\u5B9E\u73B0\u4E86\u5E38\u7528\u7684\u77E9\u9635\u64CD\u4F5C\uFF0C\u9996\u5148\u662F\u7406\u89E3\u8FD9\u4E2A \"\u884C\u4E3B\u5E8F\" \u7684 Mat4:"),
                  React.createElement(Code, { lang: "typescript", source: `
        export type Mat4 = [
          a00: number, a01: number, a02: number, a03: number,
          a10: number, a11: number, a12: number, a13: number,
          a20: number, a21: number, a22: number, a23: number,
          a30: number, a31: number, a32: number, a33: number,
        ];
      ` }),
                  React.createElement(P, null, "\u5B8C\u5168\u5BF9\u5E94\u6570\u5B66\u8868\u8FBE\uFF1A"),
                  React.createElement(Formula, { source: `
        \\operatorname{any\\_mat\\_4x4} = \\begin{bmatrix}  
          a00 & a01 & a02 & a03 \\\\
          a10 & a11 & a12 & a13 \\\\
          a20 & a21 & a22 & a23 \\\\
          a30 & a31 & a32 & a33 \\\\
        \\end{bmatrix}
      ` }),
                  React.createElement(P, null, "\u5176\u4ED6\u64CD\u4F5C:"),
                  React.createElement(Code, { lang: 'typescript', source: `
/** 计算矩阵乘法 a * b，直接展开，字面量一次求出 */
export function multiply(a: Mat4, b: Mat4): Mat4 {
  const [
    a00, a01, a02, a03,
    a10, a11, a12, a13,
    a20, a21, a22, a23,
    a30, a31, a32, a33,
  ] = a;

  const [
    b00, b01, b02, b03,
    b10, b11, b12, b13,
    b20, b21, b22, b23,
    b30, b31, b32, b33,
  ] = b;

  return [
    // 第 0 行
    a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
    a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31,
    a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32,
    a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33,
    // 第 1 行
    a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30,
    a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31,
    a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32,
    a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33,
    // 第 2 行
    a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30,
    a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31,
    a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32,
    a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33,
    // 第 3 行
    a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30,
    a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31,
    a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32,
    a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33,
  ];
}

/** 位移，类似 css translate3d */
export function translate(v: Vec3): Mat4 {
  const [x, y, z] = v;
  return [
    1.0, 0.0, 0.0,   x,
    0.0, 1.0, 0.0,   y,
    0.0, 0.0, 1.0,   z,
    0.0, 0.0, 0.0, 1.0,
  ];
}

/** 放大，类似 css scale3d */
export function scale(sx: number, sy: number, sz: number): Mat4 {
  return [
     sx, 0.0, 0.0, 0.0,
    0.0,  sy, 0.0, 0.0,
    0.0, 0.0,  sz, 0.0,
    0.0, 0.0, 0.0, 1.0,
  ]
}

/** 绕 x 轴转，类似 css rotateX */
export function rotateX(theta: number): Mat4 {
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  return [
    1.0, 0.0, 0.0, 0.0,
    0.0,   c,  -s, 0.0,
    0.0,   s,   c, 0.0,
    0.0, 0.0, 0.0, 1.0,
  ];
}

/** 绕 y 轴转，类似 css rotateY */
export function rotateY(theta: number): Mat4 {
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  return [
      c, 0.0,   s, 0.0,
    0.0, 1.0, 0.0, 0.0,
     -s, 0.0,   c, 0.0,
    0.0, 0.0, 0.0, 1.0,
  ];
}

/** 绕 z 轴转，类似 css rotateZ */
export function rotateZ(theta: number): Mat4 {
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  return [
      c,  -s, 0.0, 0.0,
      s,   c, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0,
  ];
}

/** 返回点乘 m * v */
export function transformVec4(m: Mat4, v: Vec4): Vec4 {
  const x = v[0], y = v[1], z = v[2], w = v[3];
  return [
    m[0] * x + m[1] * y + m[2]  * z + m[3]  * w,
    m[4] * x + m[5] * y + m[6]  * z + m[7]  * w,
    m[8] * x + m[9] * y + m[10] * z + m[11] * w,
    m[12] * x + m[13] * y + m[14] * z + m[15] * w,
  ];
}
      ` })),
              React.createElement(H1Block, { id: "transform-and-inverse-transform", title: "\u7406\u89E3\u8FDE\u7EED\u53D8\u6362\u4E0E\u9006\u53D8\u6362" },
                  React.createElement(P, null, "\u591A\u6B21\u53D8\u6362\u5BF9\u5E94\u4E3A\u591A\u4E2A\u77E9\u9635\u7684\u4F9D\u6B21\u70B9\u4E58\uFF0C\u6BD4\u5982\u5148\u4F4D\u79FB\u518D\u653E\u5927\u53EF\u4EE5\u8868\u793A\u4E3A: "),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
        P' &= translate(tx, ty) \\cdot P  \\\\
        P'' &= scale(a, b) \\cdot P'
        \\end{aligned}
      ` }),
                  React.createElement(P, null, "\u9006\u53D8\u6362\u5219\u662F\u628A\u53D8\u6362 undo \u6389\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
        P' &= scale(1/a, 1/b) \\cdot P'' \\\\
        P &= translate(-tx, -ty) \\cdot P'
        \\end{aligned}
      ` }),
                  React.createElement(P, null,
                      "\u4E5F\u5C31\u662F P \u5230 P' \u5230 P'' \u7136\u540E\u7ECF\u8FC7\u9006\u77E9\u9635\u53D8\u6210 P' \u6700\u540E\u53D8\u6210\u4E00\u5F00\u59CB\u7684 P\uFF0C\u505A\u4E86\u90A3\u4E48\u591A\u53D8\u6362\u6700\u540E\u56DE\u5230 ",
                      React.createElement(Formula, { source: "I", inline: true }),
                      ": "),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          逆平移 \\cdot 逆旋转 \\cdot 旋转 \\cdot 平移 \\cdot P &= I \\cdot P
        \\end{aligned}
      ` }),
                  React.createElement(P, null, "\u663E\u7136\u8FD9\u6EE1\u8DB3\u9006\u77E9\u9635\u7684\u5B9A\u4E49\uFF0C\u7ECF\u8FC7\u4E86\u53D8\u6362 A' \u548C A \u540E\u5F97\u5230\u7684\u662F I \u4EE3\u8868\u4E0D\u505A\u4EFB\u4F55\u53D8\u6362\uFF0CA \u548C A' \u4E92\u76F8\u62B5\u6D88\u4E86\uFF1A"),
                  React.createElement(Formula, { source: `
        A \\cdot A^{-1} = I
      ` }),
                  React.createElement("svg", { className: "std-para", viewBox: "0 0 760 210", style: {
                          width: '100%',
                          maxWidth: '760px',
                          height: 'auto',
                          display: 'block',
                      }, xmlns: "http://www.w3.org/2000/svg" },
                      React.createElement("defs", null,
                          React.createElement("marker", { id: "pipe-arrow-blue", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#1d4ed8" })),
                          React.createElement("marker", { id: "pipe-arrow-red", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#b91c1c" }))),
                      React.createElement("g", { transform: "translate(45, 30)" },
                          React.createElement("rect", { x: "0", y: "0", width: "165", height: "145", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("text", { x: "82", y: "26", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fontWeight: "bold", fill: "#0f172a" }, "P (\u521D\u59CB\u72B6\u6001)"),
                          React.createElement("line", { x1: "25", y1: "110", x2: "140", y2: "110", stroke: "#cbd5e1", strokeWidth: "1" }),
                          React.createElement("line", { x1: "45", y1: "130", x2: "45", y2: "45", stroke: "#cbd5e1", strokeWidth: "1" }),
                          React.createElement("rect", { x: "45", y: "80", width: "30", height: "30", fill: "#1d4ed8", fillOpacity: "0.08", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "75", cy: "80", r: "3", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "82", y: "78", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#1d4ed8" }, "P")),
                      React.createElement("line", { x1: "220", y1: "72", x2: "285", y2: "72", stroke: "#1d4ed8", strokeWidth: "2", markerEnd: "url(#pipe-arrow-blue)" }),
                      React.createElement("text", { x: "252", y: "62", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#1d4ed8" }, "translate"),
                      React.createElement("line", { x1: "285", y1: "132", x2: "220", y2: "132", stroke: "#b91c1c", strokeWidth: "1.6", strokeDasharray: "4 2", markerEnd: "url(#pipe-arrow-red)" }),
                      React.createElement("text", { x: "252", y: "148", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#b91c1c" }, "translate"),
                      React.createElement("g", { transform: "translate(295, 30)" },
                          React.createElement("rect", { x: "0", y: "0", width: "165", height: "145", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("text", { x: "82", y: "26", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fontWeight: "bold", fill: "#0f172a" }, "P' = translate \u00B7 P"),
                          React.createElement("line", { x1: "25", y1: "110", x2: "140", y2: "110", stroke: "#cbd5e1", strokeWidth: "1" }),
                          React.createElement("line", { x1: "45", y1: "130", x2: "45", y2: "45", stroke: "#cbd5e1", strokeWidth: "1" }),
                          React.createElement("rect", { x: "45", y: "90", width: "30", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                          React.createElement("rect", { x: "75", y: "60", width: "30", height: "30", fill: "#1d4ed8", fillOpacity: "0.08", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "105", cy: "60", r: "3", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "112", y: "58", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#1d4ed8" }, "P'")),
                      React.createElement("line", { x1: "470", y1: "72", x2: "535", y2: "72", stroke: "#1d4ed8", strokeWidth: "2", markerEnd: "url(#pipe-arrow-blue)" }),
                      React.createElement("text", { x: "502", y: "62", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#1d4ed8" }, "scale"),
                      React.createElement("line", { x1: "535", y1: "132", x2: "470", y2: "132", stroke: "#b91c1c", strokeWidth: "1.6", strokeDasharray: "4 2", markerEnd: "url(#pipe-arrow-red)" }),
                      React.createElement("text", { x: "502", y: "148", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#b91c1c" }, "scale"),
                      React.createElement("g", { transform: "translate(545, 30)" },
                          React.createElement("rect", { x: "0", y: "0", width: "165", height: "145", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("text", { x: "82", y: "26", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fontWeight: "bold", fill: "#0f172a" }, "P'' = scale \u00B7 P'"),
                          React.createElement("line", { x1: "25", y1: "110", x2: "140", y2: "110", stroke: "#cbd5e1", strokeWidth: "1" }),
                          React.createElement("line", { x1: "45", y1: "130", x2: "45", y2: "45", stroke: "#cbd5e1", strokeWidth: "1" }),
                          React.createElement("rect", { x: "45", y: "100", width: "20", height: "10", fill: "none", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                          React.createElement("rect", { x: "65", y: "48", width: "55", height: "52", fill: "#1d4ed8", fillOpacity: "0.08", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "120", cy: "48", r: "3", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "127", y: "46", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#1d4ed8" }, "P''"))),
                  React.createElement(P, null, "\u603B\u4E4B\uFF1A\u591A\u4E2A\u77E9\u9635\u8FDE\u7EED\u53F3\u4E58\u5219\u4EE3\u8868\u4E86\u53D8\u6362\u7684\u4F9D\u6B21\u53E0\u52A0\uFF0C\u800C\u53D8\u6362\u7684\u9006\u77E9\u9635\u5219\u4EE3\u8868\u4E86\u53D8\u6362\u7684 undo \u64CD\u4F5C\uFF0C\u53EF\u4EE5\u6D88\u53BB\u53E0\u52A0\u7684\u53D8\u6362\u3002")),
              React.createElement(H1Block, { id: "cube-coordinate-system-and-vertices", title: "Cube \u7684\u5750\u6807\u7CFB\u548C 8 \u4E2A\u9876\u70B9" },
                  React.createElement("div", { style: {
                          width: '100%', float: 'left',
                          shapeOutside: `
          polygon(
              0% 0%,
              0% 100%,
             20% 100%,
             82%  25%,
             50%   0%
          )
        `,
                      } },
                      React.createElement(CodeCube, { overflow: "visible" })),
                  React.createElement(P, null, "\u6B63\u65B9\u4F53\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528\u5DE6\u8FB9\u7684 8 \u4E2A\u9876\u70B9\u548C\u8FB9\u6765\u5B9A\u4E49\u5B83\uFF0C\u8FD9\u5B9E\u9645\u4E0A\u5C31\u662F cube \u7684 \u201C\u6A21\u578B\u201D\u3002"),
                  React.createElement(P, null, "\u6B64\u5904\u7684\u5750\u6807\u7CFB\u79F0\u4E3A\u6A21\u578B\u5750\u6807\u7CFB\uFF0C\u5982\u679C\u9700\u8981\u5C06\u5176\u6446\u653E\u51FA\u6765\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5BF9\u6BCF\u4E00\u4E2A\u9876\u70B9\u505A\u53D8\u6362\u5C06\u5176\u653E\u7F6E\u5728\u4E16\u754C\u5750\u6807\u4E2D\u7684\u67D0\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u6BD4\u5982\u53EF\u4EE5\u653E\u5927\u7F29\u5C0F\uFF0C\u4F4D\u79FB\u5E73\u79FB\u65CB\u8F6C\u7B49\u3002"),
                  React.createElement("svg", { className: "std-para", viewBox: "50 30 330 260", style: {
                          width: '100%',
                          maxWidth: '14rem',
                          height: 'auto',
                          display: 'inline-block',
                      }, xmlns: "http://www.w3.org/2000/svg" },
                      React.createElement("defs", null,
                          React.createElement("marker", { id: "cube-arrow-slate", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#64748b" }))),
                      React.createElement("g", null,
                          React.createElement("circle", { cx: "207", cy: "168", r: "4", fill: "#000" }),
                          React.createElement("line", { x1: "180", y1: "200", x2: "320", y2: "200", stroke: "#b91c1c", strokeWidth: "1.2", strokeDasharray: "4 3" }),
                          React.createElement("line", { x1: "180", y1: "60", x2: "180", y2: "200", stroke: "#b91c1c", strokeWidth: "1.2", strokeDasharray: "4 3" }),
                          React.createElement("line", { x1: "110", y1: "250", x2: "180", y2: "200", stroke: "#64748b", strokeWidth: "1.2", strokeDasharray: "4 3" }),
                          React.createElement("line", { x1: "180", y1: "60", x2: "320", y2: "60", stroke: "#b91c1c", strokeWidth: "1.6" }),
                          React.createElement("line", { x1: "320", y1: "60", x2: "320", y2: "200", stroke: "#b91c1c", strokeWidth: "1.6" }),
                          React.createElement("line", { x1: "110", y1: "110", x2: "180", y2: "60", stroke: "#64748b", strokeWidth: "1.6" }),
                          React.createElement("line", { x1: "250", y1: "110", x2: "320", y2: "60", stroke: "#64748b", strokeWidth: "1.6" }),
                          React.createElement("line", { x1: "250", y1: "250", x2: "320", y2: "200", stroke: "#64748b", strokeWidth: "1.6" }),
                          React.createElement("rect", { x: "110", y: "110", width: "140", height: "140", fill: "#1d4ed8", fillOpacity: "0.05", stroke: "#1d4ed8", strokeWidth: "2" }),
                          React.createElement("circle", { cx: "180", cy: "60", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "175", y: "52", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "4")),
                          React.createElement("circle", { cx: "320", cy: "60", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "328", y: "52", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "5")),
                          React.createElement("circle", { cx: "320", cy: "200", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "328", y: "208", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "6")),
                          React.createElement("circle", { cx: "180", cy: "200", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "173", y: "196", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "7")),
                          React.createElement("circle", { cx: "110", cy: "110", r: "4.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "100", y: "104", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "3" }, "0")),
                          React.createElement("circle", { cx: "250", cy: "110", r: "4.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "258", y: "104", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "3" }, "1")),
                          React.createElement("circle", { cx: "250", cy: "250", r: "4.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "258", y: "262", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "3" }, "2")),
                          React.createElement("circle", { cx: "110", cy: "250", r: "4.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "100", y: "262", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "3" }, "3")))),
                  React.createElement(P, null, "\u6211\u4EEC\u7684\u7EC8\u6781\u76EE\u6807\u662F\u5C06 3D \u573A\u666F\u6E32\u67D3\u5230 2D \u5C4F\u5E55\u4E0A\uFF0C\u610F\u5473\u7740\u6211\u4EEC\u5FC5\u987B\u7ECF\u8FC7\u4E00\u7CFB\u5217\u53D8\u6362\u5C06\u6A21\u578B\u5750\u6807\u7CFB\u5185\u7684 8 \u4E2A\u9876\u70B9\u7ECF\u8FC7\u5404\u79CD\u53D8\u6362\u540E\u62B5\u8FBE 2D \u7684\u5C4F\u5E55\u5750\u6807\u7CFB\u4E0A\uFF0C\u5E76\u901A\u8FC7 lineTo \u5C06\u8FD9\u4E9B\u9876\u70B9\u8FDE\u63A5\u8D77\u6765\u5B9E\u73B0\u5C06 3D \u7684 cube \u7ED8\u5236\u5230 2D \u7684\u5C4F\u5E55\u4E0A\u3002")),
              React.createElement("div", { style: { clear: 'both' } }),
              React.createElement(H1Block, { id: "m-matrix-from-cube-to-world", title: "M \u77E9\u9635\uFF1A\u4ECE\u6A21\u578B\u5750\u6807\u5230\u4E16\u754C\u5750\u6807" },
                  React.createElement(P, null, "\u4E3A\u4E86\u5C06\u6A21\u578B\u653E\u7F6E\u5230\u4E16\u754C\uFF0C\u9700\u8981\u5BF9\u4E16\u754C\u5EFA\u7ACB\u5750\u6807\u7CFB\uFF0C\u79F0\u4E3A\u4E16\u754C\u5750\u6807\uFF0C\u6B64\u65F6\u628A cube \u7684\u9876\u70B9\u653E\u7F6E\u5230\u4E16\u754C\u91CC\u5176\u5B9E\u5C31\u662F\u5BF9\u6BCF\u4E00\u4E2A\u9876\u70B9\u505A\u4E00\u4E2A\u53D8\u6362\uFF0C\u6BD4\u5982\u653E\u7F6E\u5728 (1,2,3) \u5904\uFF0C\u5219\u5BF9\u5E94\u8FD9\u4E2A\u53D8\u6362\u77E9\u9635\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
        M = translate(1, 2, 3) &=
          \\begin{bmatrix}
          1 & 0 & 0 & 1 \\\\
          0 & 1 & 0 & 2 \\\\
          0 & 0 & 1 & 3 \\\\
          0 & 0 & 0 & 1
          \\end{bmatrix}
        \\end{aligned}
      ` }),
                  React.createElement(P, null,
                      "\u6B64\u65F6\u6A21\u578B\u9876\u70B9 (-1, -1, -1) \u5728\u4E16\u754C\u5750\u6807\u7684\u5750\u6807 ",
                      React.createElement(Formula, { source: `V_0`, inline: true }),
                      " \u53EF\u4EE5\u8FD9\u6837\u8BA1\u7B97 (\u7B2C\u56DB\u884C\u4E0D\u5728\u672C\u6587\u5C55\u5F00)\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
        V_0 = translate(1, 2, 3) \\cdot \\begin{bmatrix}
          -1 \\\\
          -1 \\\\
          -1 \\\\
          0
          \\end{bmatrix} =
          \\begin{bmatrix}
          -1 + 1 \\\\
          -1 + 2 \\\\
          -1 + 3 \\\\
           0 + 1
          \\end{bmatrix} = 
          \\begin{bmatrix}
          0 \\\\
          1 \\\\
          2 \\\\
          1
          \\end{bmatrix}
        \\end{aligned}
      ` })),
              React.createElement(H1Block, { id: "cube-and-perspective-division", title: "Camera \u4E0E\u900F\u89C6\u9664\u6CD5" },
                  React.createElement("img", { src: fileFrustum.src, className: "r-link", style: {
                          display: 'block', margin: '0 auto', width: '79%',
                          marginRight: '-4rem',
                          float: 'right',
                          shapeOutside: `url(${fileFrustum.src})`,
                          shapeMargin: '0.5rem',
                      }, "data-width": fileFrustum.width, "data-height": fileFrustum.height }),
                  React.createElement(P, null, "\u6211\u4EEC\u7684\u7EC8\u6781\u76EE\u6807\u662F\u5C06 3D \u573A\u666F\u6E32\u67D3\u5230 2D \u5C4F\u5E55\u4E0A\uFF0C\u610F\u5473\u7740\u6211\u4EEC\u5FC5\u987B\u7ECF\u8FC7\u67D0\u79CD\u53D8\u6362\u5C06 8 \u4E2A\u9876\u70B9\u7CBE\u51C6\u7684\u5BF9\u5E94\u5230\u5C4F\u5E55\u5750\u6807\u7CFB\u4E0A\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u5C31\u662F\u62CD\u7167\u7684\u8FC7\u7A0B\uFF0C\u5F62\u6210\u4E86\u4E0B\u56FE\u8FD9\u6837\u7684\u79F0\u4E3A\u89C6\u9525\u4F53\u7684\u7ED3\u6784\uFF0C\u5176\u4E2D FOV \u4EE3\u8868\u4E86\u4E00\u4E2A\u5939\u89D2\uFF08\u8FD9\u5BF9\u5E94\u6E38\u620F\u91CC\u7684\u89C6\u573A\u89D2\u540E\u6587\u4F1A\u5C55\u5F00\uFF09NEAR PLANE \u4E0A\u7ECF\u8FC7\u7684\u5149\u7EBF\u6210\u50CF\u540E\u5C31\u662F\u6211\u4EEC\u60F3\u8981\u7684\u4E86\uFF0C\u53EF\u4EE5\u5148\u601D\u8003\u4E00\u4E0B Nnear Plane \u4E0A\u80FD\u6295\u5F71\u51FA\u4EC0\u4E48\u4E1C\u897F\uFF1F"),
                  React.createElement("br", null),
                  React.createElement(P, null, "\u4E3A\u4E86\u80FD\u5206\u6790 Nnear Plane \u4E0A\u7684\u6570\u503C\uFF0C\u6211\u4EEC\u6700\u597D\u5F15\u5165\u4E00\u4E2A\u65B9\u4FBF\u7684\u5750\u6807\u7CFB\uFF0C\u8003\u8651\u5230\u6295\u5F71\uFF0C\u6211\u4EEC\u4E0D\u59A8\u4EE5\u6444\u50CF\u673A\u81EA\u5DF1\u4F5C\u4E3A\u53C2\u8003\u7CFB\u6765\u5EFA\u7CFB\uFF0C\u4EE4\u6444\u50CF\u673A\u59CB\u7EC8\u671B\u5411 -z \u65B9\u5411\uFF0C\u90A3\u4E48\u6B64\u65F6\u7684 8 \u4E2A\u9876\u70B9\u53EF\u4EE5\u76F4\u63A5\u5230\u6295\u5F71 xy \u5E73\u9762\u4E0A\uFF0C\u5373\u4E0B\u56FE\u7684\u5DE6\u90E8\uFF1B \u800C\u53F3\u90E8\u5219\u662F\u8003\u8651\u5230\u8FD1\u5927\u8FDC\u5C0F\u540E\u7684\u900F\u89C6\u6548\u679C\uFF0C\u5373 Near Plane \u4E0A\u6295\u5F71\u5C55\u793A\u7684\u5F71\u50CF\uFF0C\u6B64\u65F6\u539F\u70B9\u662F\u900F\u89C6\u6D88\u5931\u70B9\uFF0C\u5728\u6700\u540E\u7406\u89E3\u6B64\u5904\u84DD\u8272\u548C\u7EA2\u8272\u77E9\u5F62\u7684\u6570\u503C\u51E0\u4F55\u5173\u7CFB\u5C31\u662F\u7406\u89E3\u900F\u89C6\u7684\u6570\u5B66\u672C\u8D28\u7684\u5173\u952E\uFF1A"),
                  React.createElement("svg", { className: "std-para", viewBox: "0 0 760 360", style: {
                          width: '100%',
                          maxWidth: '760px',
                          height: 'auto',
                          display: 'block',
                      }, xmlns: "http://www.w3.org/2000/svg" },
                      React.createElement("defs", null,
                          React.createElement("marker", { id: "axis-arrow", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#64748b" }))),
                      React.createElement("g", null,
                          React.createElement("rect", { x: "35", y: "30", width: "330", height: "300", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("line", { x1: "50", y1: "180", x2: "348", y2: "180", stroke: "#94a3b8", strokeWidth: "1", markerEnd: "url(#axis-arrow)" }),
                          React.createElement("line", { x1: "200", y1: "310", x2: "200", y2: "52", stroke: "#94a3b8", strokeWidth: "1", markerEnd: "url(#axis-arrow)" }),
                          React.createElement("circle", { cx: "200", cy: "180", r: "2", fill: "#64748b" }),
                          React.createElement("text", { x: "355", y: "184", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#64748b" }, "x"),
                          React.createElement("text", { x: "200", y: "44", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#64748b" }, "y"),
                          React.createElement("text", { x: "192", y: "196", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#64748b" }, "O"),
                          React.createElement("text", { x: "208", y: "196", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fill: "#94a3b8" },
                              React.createElement("tspan", { fontStyle: "normal" }, "\u2297"),
                              React.createElement("tspan", { fontStyle: "italic" }, " -z")),
                          React.createElement("rect", { x: "135", y: "115", width: "130", height: "130", fill: "#1d4ed8", fillOpacity: "0.04", stroke: "#1d4ed8", strokeWidth: "2" }),
                          React.createElement("rect", { x: "135", y: "115", width: "130", height: "130", fill: "none", stroke: "#b91c1c", strokeWidth: "1.5", strokeDasharray: "5 3" }),
                          React.createElement("circle", { cx: "135", cy: "115", r: "5.5", fill: "none", stroke: "#b91c1c", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "135", cy: "115", r: "3.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "123", y: "110", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#0f172a" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "0"),
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "13", dy: "-3" }, ", "),
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "4")),
                          React.createElement("circle", { cx: "265", cy: "115", r: "5.5", fill: "none", stroke: "#b91c1c", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "265", cy: "115", r: "3.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "277", y: "110", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#0f172a" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "1"),
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "13", dy: "-3" }, ", "),
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "5")),
                          React.createElement("circle", { cx: "265", cy: "245", r: "5.5", fill: "none", stroke: "#b91c1c", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "265", cy: "245", r: "3.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "277", y: "258", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#0f172a" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "2"),
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "13", dy: "-3" }, ", "),
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "6")),
                          React.createElement("circle", { cx: "135", cy: "245", r: "5.5", fill: "none", stroke: "#b91c1c", strokeWidth: "1.5" }),
                          React.createElement("circle", { cx: "135", cy: "245", r: "3.2", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "123", y: "258", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#0f172a" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "3"),
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "13", dy: "-3" }, ", "),
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "7"))),
                      React.createElement("g", null,
                          React.createElement("rect", { x: "395", y: "30", width: "330", height: "300", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                          React.createElement("line", { x1: "410", y1: "180", x2: "708", y2: "180", stroke: "#94a3b8", strokeWidth: "1", markerEnd: "url(#axis-arrow)" }),
                          React.createElement("line", { x1: "560", y1: "310", x2: "560", y2: "52", stroke: "#94a3b8", strokeWidth: "1", markerEnd: "url(#axis-arrow)" }),
                          React.createElement("circle", { cx: "560", cy: "180", r: "2", fill: "#64748b" }),
                          React.createElement("text", { x: "715", y: "184", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#64748b" }, "x"),
                          React.createElement("text", { x: "560", y: "44", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#64748b" }, "y"),
                          React.createElement("text", { x: "552", y: "196", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#64748b" }, "O"),
                          React.createElement("text", { x: "568", y: "196", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fill: "#94a3b8" },
                              React.createElement("tspan", { fontStyle: "normal" }, "\u2297"),
                              React.createElement("tspan", { fontStyle: "italic" }, " -z")),
                          React.createElement("line", { x1: "527", y1: "147", x2: "560", y2: "180", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                          React.createElement("line", { x1: "593", y1: "147", x2: "560", y2: "180", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                          React.createElement("line", { x1: "593", y1: "213", x2: "560", y2: "180", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                          React.createElement("line", { x1: "527", y1: "213", x2: "560", y2: "180", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                          React.createElement("line", { x1: "495", y1: "115", x2: "527", y2: "147", stroke: "#64748b", strokeWidth: "1.5" }),
                          React.createElement("line", { x1: "625", y1: "115", x2: "593", y2: "147", stroke: "#64748b", strokeWidth: "1.5" }),
                          React.createElement("line", { x1: "625", y1: "245", x2: "593", y2: "213", stroke: "#64748b", strokeWidth: "1.5" }),
                          React.createElement("line", { x1: "495", y1: "245", x2: "527", y2: "213", stroke: "#64748b", strokeWidth: "1.5" }),
                          React.createElement("rect", { x: "527", y: "147", width: "66", height: "66", fill: "#b91c1c", fillOpacity: "0.04", stroke: "#b91c1c", strokeWidth: "1.5", strokeDasharray: "4 3" }),
                          React.createElement("rect", { x: "495", y: "115", width: "130", height: "130", fill: "#1d4ed8", fillOpacity: "0.04", stroke: "#1d4ed8", strokeWidth: "2" }),
                          React.createElement("circle", { cx: "527", cy: "147", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "536", y: "141", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "4")),
                          React.createElement("circle", { cx: "593", cy: "147", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "584", y: "141", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "5")),
                          React.createElement("circle", { cx: "593", cy: "213", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "584", y: "226", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "6")),
                          React.createElement("circle", { cx: "527", cy: "213", r: "3.5", fill: "#b91c1c" }),
                          React.createElement("text", { x: "536", y: "226", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "14", fontStyle: "italic", fill: "#b91c1c" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "10", dy: "2.5" }, "7")),
                          React.createElement("circle", { cx: "495", cy: "115", r: "4", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "483", y: "110", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "0")),
                          React.createElement("circle", { cx: "625", cy: "115", r: "4", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "637", y: "110", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "1")),
                          React.createElement("circle", { cx: "625", cy: "245", r: "4", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "637", y: "258", textAnchor: "start", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "2")),
                          React.createElement("circle", { cx: "495", cy: "245", r: "4", fill: "#1d4ed8" }),
                          React.createElement("text", { x: "483", y: "258", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "15", fontStyle: "italic", fill: "#1d4ed8" },
                              "V",
                              React.createElement("tspan", { fontStyle: "normal", fontSize: "11", dy: "3" }, "3")))),
                  React.createElement(P, null, "\u5DE6\u4FA7\u662F\u5355\u7EAF\u7684 xy \u6295\u5F71\uFF0C\u4E22\u5F03\u4E86 z \u503C\uFF0C\u56E0\u6B64\u4F1A\u91CD\u53E0\uFF1B \u800C\u53F3\u4FA7\u5219\u5E26\u4E0A\u4E86\u8FD1\u5927\u8FDC\u5C0F\u7684\u900F\u89C6\u6548\u679C\uFF0C\u8FD9\u6B63\u662F\u6211\u4EEC\u8981\u7684 3D \u6295\u5F71\u5230 2D \u7684\u6548\u679C\uFF0C\u5982\u4F55\u8BA1\u7B97\u5462\uFF1F\u4E0B\u56FE\u662F\u5176\u53E6\u5916\u4E00\u4E2A\u89C6\u89D2\uFF0C\u8003\u5BDF y' \u8DDF\u539F\u59CB y \u7684\u51E0\u4F55\u5173\u7CFB\uFF1A"),
                  React.createElement("svg", { className: "std-para", viewBox: "0 0 760 270", style: {
                          width: '100%',
                          maxWidth: '760px',
                          height: 'auto',
                          display: 'block',
                      }, xmlns: "http://www.w3.org/2000/svg" },
                      React.createElement("defs", null,
                          React.createElement("marker", { id: "persp-arrow-slate", viewBox: "0 0 6 6", refX: "5", refY: "3", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                              React.createElement("path", { d: "M 0 1 L 5 3 L 0 5 z", fill: "#64748b" }))),
                      React.createElement("rect", { x: "25", y: "20", width: "710", height: "230", rx: "6", fill: "#fafafa", stroke: "#e2e8f0", strokeWidth: "1" }),
                      React.createElement("polygon", { points: "80,190 360,190 360,100", fill: "#1d4ed8", fillOpacity: "0.05" }),
                      React.createElement("polygon", { points: "80,190 220,190 220,145", fill: "#1d4ed8", fillOpacity: "0.1" }),
                      React.createElement("line", { x1: "80", y1: "190", x2: "695", y2: "190", stroke: "#64748b", strokeWidth: "1.5", markerEnd: "url(#persp-arrow-slate)" }),
                      React.createElement("line", { x1: "80", y1: "245", x2: "80", y2: "45", stroke: "#64748b", strokeWidth: "1.5", markerEnd: "url(#persp-arrow-slate)" }),
                      React.createElement("circle", { cx: "80", cy: "190", r: "3", fill: "#0f172a" }),
                      React.createElement("text", { x: "675", y: "208", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#64748b" }, "-z \u65B9\u5411"),
                      React.createElement("text", { x: "80", y: "38", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#64748b" }, "y"),
                      React.createElement("text", { x: "70", y: "204", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "12", fontStyle: "italic", fill: "#0f172a" }, "O"),
                      React.createElement("line", { x1: "220", y1: "65", x2: "220", y2: "215", stroke: "#1d4ed8", strokeWidth: "2" }),
                      React.createElement("text", { x: "220", y: "55", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontWeight: "600", fill: "#1d4ed8" }, "Near Plane (z = d)"),
                      React.createElement("line", { x1: "80", y1: "190", x2: "360", y2: "100", stroke: "#1d4ed8", strokeWidth: "1.6" }),
                      React.createElement("circle", { cx: "360", cy: "100", r: "3.5", fill: "#1d4ed8" }),
                      React.createElement("text", { x: "368", y: "96", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#1d4ed8" }, "P\u2081(y, z\u2081)"),
                      React.createElement("line", { x1: "360", y1: "100", x2: "360", y2: "230", stroke: "#94a3b8", strokeDasharray: "3 2", strokeWidth: "1" }),
                      React.createElement("text", { x: "365", y: "160", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#64748b" }, "y"),
                      React.createElement("line", { x1: "80", y1: "190", x2: "640", y2: "100", stroke: "#b91c1c", strokeWidth: "1.4", strokeDasharray: "5 2" }),
                      React.createElement("circle", { cx: "640", cy: "100", r: "3.5", fill: "#b91c1c" }),
                      React.createElement("text", { x: "648", y: "96", fontFamily: "'Times New Roman', Times, serif", fontSize: "13", fontStyle: "italic", fill: "#b91c1c" }, "P\u2082(y, z\u2082)"),
                      React.createElement("line", { x1: "640", y1: "100", x2: "640", y2: "245", stroke: "#94a3b8", strokeDasharray: "3 2", strokeWidth: "1" }),
                      React.createElement("text", { x: "645", y: "160", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#64748b" }, "y"),
                      React.createElement("circle", { cx: "220", cy: "145", r: "3.5", fill: "#1d4ed8" }),
                      React.createElement("text", { x: "220", y: "138", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "12", fontStyle: "italic", fill: "#1d4ed8" }, "y'\u2081"),
                      React.createElement("circle", { cx: "220", cy: "167.5", r: "3.5", fill: "#b91c1c" }),
                      React.createElement("text", { x: "220", y: "163", textAnchor: "end", fontFamily: "'Times New Roman', Times, serif", fontSize: "12", fontStyle: "italic", fill: "#b91c1c" }, "y'\u2082"),
                      React.createElement("line", { x1: "80", y1: "210", x2: "220", y2: "210", stroke: "#64748b", strokeWidth: "1" }),
                      React.createElement("text", { x: "150", y: "222", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#64748b" }, "d"),
                      React.createElement("line", { x1: "80", y1: "230", x2: "360", y2: "230", stroke: "#64748b", strokeWidth: "1" }),
                      React.createElement("text", { x: "290", y: "242", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#64748b" }, "z\u2081"),
                      React.createElement("line", { x1: "80", y1: "245", x2: "640", y2: "245", stroke: "#64748b", strokeWidth: "1" }),
                      React.createElement("text", { x: "500", y: "244", textAnchor: "middle", fontFamily: "'Times New Roman', Times, serif", fontSize: "11", fontStyle: "italic", fill: "#64748b" }, "z\u2082 (\u66F4\u8FDC)")),
                  React.createElement(P, null, "\u663E\u7136\u6CE8\u610F\u5230\u56FE\u4E2D\u7684\u76F8\u4F3C\u4E09\u89D2\u5F62\u7684\u5173\u7CFB\uFF0C\u4E0D\u96BE\u5F97\u5230\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          \\frac{y'_1}{d} = \\frac{y}{z_1} \\quad \\qquad
          \\frac{y'_2}{d} = \\frac{y}{z_2}
        \\end{aligned}
      ` }),
                  React.createElement(P, null, "\u7279\u522B\u5730\u3001\u5C06 Near Plane \u653E\u7F6E\u5728\u79BB\u76F8\u673A 1 \u5355\u4F4D\u8DDD\u79BB\u7684\u5E73\u9762\u4E0A\uFF0C\u5373\u4EE4 d=1 \u65F6\uFF0C\u5C31\u80FD\u62FF\u5230 3D \u7269\u4F53\u6295\u5F71\u5230 Near Plane \u65F6\uFF0C\u5BF9\u5E94\u5750\u6807 x' y' \u7684\u8BA1\u7B97\u516C\u5F0F\uFF0C\u6CE8\u610F\u76F8\u673A\u671B\u5411 -z \u65B9\u5411\uFF0C\u6240\u4EE5\u53D6 -z \u4F5C\u4E3A\u7EDD\u5BF9\u503C\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          (x', \\: y') = (\\frac{x}{-z}, \\: \\frac{y}{-z})
        \\end{aligned}
      ` }),
                  React.createElement(P, null, "\u5BF9\u7684\uFF0C\u4E5F\u5C31\u662F\u9876\u70B9\u7684 z \u503C\u4EE3\u8868\u8DDD\u79BB\u6444\u50CF\u673A\u7684\u8DDD\u79BB\uFF0C\u79BB\u76F8\u673A\u8D8A\u8FDC\u7684 z \u503C\u81EA\u7136\u5C31\u8D8A\u5C0F\uFF0C\u6444\u50CF\u673A\u770B\u5411 -z\uFF0C\u6211\u4EEC\u62FF\u5B83\u4F9D\u636E\u51E0\u4F55\u5173\u7CFB\u7528\u6765\u505A\u4E00\u4E2A\u9664\u6CD5\u5373\u53EF\u5B9E\u73B0\u900F\u89C6\u6295\u5F71\u8BA1\u7B97\uFF0C\u6B64\u65F6\u79BB\u76F8\u673A\u8D8A\u8FDC\u7684 z \u7684\u7EDD\u5BF9\u503C\u8D8A\u5927\uFF0C\u5C31\u5B9E\u73B0\u4E86\u8FD1\u5927\u8FDC\u5C0F\u7684\u900F\u89C6\u6548\u679C\uFF0C\u66F4\u91CD\u8981\u7684\u662F\u5F53 z \u503C\u8D8B\u4E8E\u65E0\u7A77\u5927\u65F6\uFF0C\u6295\u5F71\u70B9\u4F1A\u8D8B\u8FD1\u4E8E\u539F\u70B9\uFF0C\u5373\u5B9E\u73B0\u4E86\u900F\u89C6\u6D88\u5931\u70B9\uFF0C\u8FD9\u79CD\u9664\u6CD5\u79F0\u4E3A \u201C\u900F\u89C6\u9664\u6CD5\u201D\uFF0C\u6B64\u5904\u7528 uv \u8868\u8FBE Near Plane \u4E0A\u7684\u5750\u6807\u7CFB\uFF0C\u5199\u4F5C\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          (u, \\: v) = (\\frac{x}{-z}, \\: \\frac{y}{-z})
        \\end{aligned}
      ` }),
                  React.createElement(P, null, "\u5269\u4E0B\u6700\u5173\u952E\u7684\u95EE\u9898\u662F\uFF1A\u5982\u4F55\u5C06\u4E16\u754C\u5750\u6807\u53D8\u6362\u5230\u6444\u50CF\u673A\u5750\u6807\u7CFB\uFF1F\u641E\u5B9A\u4E86\u8FD9\u4E2A\u6211\u4EEC\u5C31\u80FD\u6B63\u786E\u5B9E\u73B0 3D \u7ED8\u5236\u4E86\uFF01")),
              React.createElement(H1Block, { id: "camera-in-the-world", title: "\u4E16\u754C\u5750\u6807\u7CFB\u4E2D\u7684\u6444\u50CF\u673A" },
                  React.createElement("img", { src: fileCameraWorld.src, className: "r-link", style: {
                          display: 'block', margin: '0 auto', width: '80%',
                          marginRight: '-2rem',
                          float: 'right',
                          shapeOutside: `url(${fileCameraWorld.src})`,
                          shapeMargin: '0.5rem',
                      }, "data-width": fileCameraWorld.width, "data-height": fileCameraWorld.height }),
                  React.createElement(P, null,
                      "\u9996\u5148\u6444\u50CF\u673A\u80AF\u5B9A\u6709\u81EA\u5DF1\u7684\u4E16\u754C\u5750\u6807 ",
                      React.createElement(Formula, { source: "P", inline: true }),
                      " \u4F5C\u4E3A\u773C\u775B\uFF0C\u4EE5\u53CA\u5B83\u6B63\u5728\u770B\u5411\u7684\u70B9 ",
                      React.createElement(Formula, { source: "T", inline: true }),
                      "\uFF0C\u60F3\u8C61\u4E00\u4E0B\u6444\u50CF\u673A\u6302\u5728 ",
                      React.createElement(Formula, { source: "\\overrightarrow{PT}", inline: true }),
                      " \u4E0A\uFF0C\u6B64\u65F6\u6444\u50CF\u673A\u53EF\u4EE5\u5728 PT \u8FD9\u6839\u76F4\u7EBF\u4E0A\u65CB\u8F6C\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u53E6\u5916\u4E00\u4E2A\u5411\u91CF\u63A7\u5236\u5176\u65CB\u8F6C\uFF0C\u79F0\u4E3A ",
                      React.createElement(Formula, { source: "\\overrightarrow{U}", inline: true }),
                      "\uFF0C\u7279\u522B\u5730\u5F53 U \u7B14\u76F4\u671D\u4E0A\u65F6\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u6444\u50CF\u673A\u6B64\u65F6\u4E0D\u4F1A\u6B6A\uFF0C\u4E5F\u5C31\u662F U \u548C PT \u6784\u6210\u7684\u5E73\u9762\u5782\u76F4\u4E8E\u5927\u5730\uFF1A"),
                  React.createElement(P, { style: { clear: 'both' } }, "\u56E0\u6B64\uFF0CCamera \u7531\u4E09\u4E2A Vec3 \u53C2\u6570\u552F\u4E00\u786E\u5B9A\uFF1A"),
                  React.createElement(Code, { lang: "typescript", source: `
        type Vec3 = [number, number, number];
        export interface Camera {
          eye: Vec3;
          target: Vec3;
          up: Vec3;
        }
      ` }),
                  React.createElement(P, null, "\u4E3A\u4E86\u5C06\u4E16\u754C\u5750\u6807\u53D8\u6362\u5230\u6444\u50CF\u673A\u5750\u6807\u7CFB\uFF0C\u6211\u4EEC\u5FC5\u987B\u8981\u7ED9\u51FA\u8FD9\u6837\u4E00\u4E2A lookAt \u51FD\u6570\uFF0C\u5B83\u4F9D\u636E\u76F8\u673A\u53C2\u6570\u751F\u6210\u53D8\u6362\u77E9\u9635\uFF0C\u5C06\u4E16\u754C\u5750\u6807\u8F6C\u79FB\u5230\u6444\u50CF\u673A\u5750\u6807\u7CFB\uFF1A"),
                  React.createElement(Formula, { source: `
        \\operatorname{lookAt}\\,(eye, \\: target, \\: up) \\: = \\: \\begin{bmatrix}
          ? & ? & ? & ? \\\\
          ? & ? & ? & ? \\\\
          ? & ? & ? & ? \\\\
          ? & ? & ? & ? \\\\
        \\end{bmatrix}
      ` }),
                  React.createElement(P, null, "\u5982\u679C\u4F60\u6CE8\u610F\u529B\u591F\u597D\u7684\u8BDD\u53EF\u4EE5\u5C1D\u8BD5\u5E94\u7528\u591A\u6B21\u7684\u57FA\u7840\u53D8\u6362\u6765\u9010\u6B65\u6784\u9020 lookUp\uFF0C\u901A\u8FC7\u591A\u6B21\u53D8\u6362\u8FD8\u539F\u51FA\u5C06\u6444\u50CF\u673A\u6446\u653E\u5230\u4E16\u754C\u5750\u6807\u7CFB\u5185\uFF0C\u6BD4\u5982\u5148\u79FB\u52A8 eye\uFF0C\u7136\u540E\u4E24\u6B21\u7ED5\u8F74\u65CB\u8F6C\u786E\u5B9A target \u65B9\u5411\uFF0C\u6700\u540E\u518D\u6765\u4E00\u6B21\u65CB\u8F6C\u786E\u5B9A up\uFF0C\u901A\u8FC7\u8FD9\u79CD\u591A\u6B21\u53D8\u6362\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0 lookUp\uFF0C\u4F46\u662F\u4E09\u7EF4\u7684\u62BD\u8C61\u548C\u7E41\u590D\uFF0C\u4E00\u4E0B\u5B50\u5C31\u6CE8\u610F\u529B\u6DA3\u6563\u4E86\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          V = R_z(-roll) \\cdot R_x (-pi & tch)  \\cdot R_y(-yaw) \\cdot translate(-eye) \\\\
          yaw &= \\operatorname{atan2}(d.x, d.z) \\\\
          pitch &= \\operatorname{asin}(d.y, length(d)) \\\\
          roll &= ... 注意力涣散... 
        \\end{aligned}
      ` }),
                  React.createElement(P, null, "\u6CA1\u9519\uFF0C\u6CE8\u610F\u529B\u6DA3\u6563\uFF01\u6700\u540E\u6574\u6761\u516C\u5F0F\u5F88\u53EF\u80FD\u4F1A\u53D8\u5F97\u5F02\u5E38\u590D\u6742\u548C\u4F4E\u6548")),
              React.createElement(H1Block, { id: "basis-vector-is-all-you-need", title: "\u66F4\u597D\u7684\u6570\u5B66\u601D\u60F3: Basis Vector is all you nned" },
                  React.createElement("img", { src: fileTheSamePoint.src, className: "r-link", style: {
                          display: 'block', margin: '0 auto', width: '53%',
                          marginRight: '-2rem',
                          float: 'right',
                          shapeOutside: `url(${fileTheSamePoint.src})`,
                          shapeMargin: '0.5rem',
                      }, "data-width": fileTheSamePoint.width, "data-height": fileTheSamePoint.height }),
                  React.createElement(P, null, "\u5982\u679C\u8FD8\u7528\u4F20\u7EDF\u51E0\u4F55\u7684\u89C2\u70B9\u53BB\u5904\u7406 3D \u95EE\u9898\u5F88\u5BB9\u6613\u9047\u5230\u6CE8\u610F\u529B\u6DA3\u6563\u7684\u95EE\u9898\uFF0C\u9700\u8981\u6362\u4E00\u79CD\u6570\u5B66\u601D\u60F3\u53BB\u8003\u8651\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8003\u8651\u4E00\u4E0B\uFF0C\u5F53\u6211\u4EEC\u7ED9\u5B9A\u4E00\u4E2A\u70B9 (x,y,z) \u65F6\uFF0C\u5176\u4E09\u4E2A\u5206\u91CF\u662F\u4EC0\u4E48\uFF1F "),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          \\begin{bmatrix}
            x \\\\
            y \\\\
            z
          \\end{bmatrix} =
          \\begin{bmatrix}
            x \\\\
            0 \\\\
            0
          \\end{bmatrix} + 
          \\begin{bmatrix}
            0 \\\\
            y \\\\
            0
          \\end{bmatrix} +
          \\begin{bmatrix}
            0 \\\\
            0 \\\\
            z
          \\end{bmatrix}
        \\end{aligned}
      ` }),
                  React.createElement("img", { src: fileRebasis2d.src, className: "r-link", style: {
                          display: 'block', margin: '0 auto', width: '45%',
                          // marginLeft: '-1rem',
                          float: 'left',
                      }, "data-width": fileRebasis2d.width, "data-height": fileRebasis2d.height }),
                  React.createElement(P, null, "\u6240\u4EE5\u5E94\u8BE5\u628A\u5750\u6807\u7406\u89E3\u4E3A\u67D0\u4E00\u4E2A\u70B9 P \u5728\u5176\u4E09\u4E2A\u57FA\u5411\u91CF\u4E0A\u7684\u6709\u7B26\u53F7\u6295\u5F71\u957F\u5EA6\u3002"),
                  React.createElement(P, null, "\u6362\u5750\u6807\u7CFB\u65F6\uFF0C\u70B9\u662F\u8FD8\u662F\u90A3\u4E2A\u70B9\uFF0C\u53EA\u662F\u5176\u57FA\u5411\u91CF\u53D8\u4E86\uFF0C\u6B64\u65F6\u53D8\u6362\u5750\u6807\u7CFB\u8FD9\u4E2A\u95EE\u9898\u88AB\u8F6C\u6362\u6210\uFF1A\u5728\u8C03\u6574\u4E86 basis-vector \u540E\uFF0C\u53EA\u9700\u8981\u6C42\u5728\u65B0\u7684\u57FA\u5411\u91CF\u4E0A\u7684\u6295\u5F71\uFF0C\u6BD4\u5982 v2(new) \u7684\u957F\u5EA6\u5176\u5B9E\u5C31\u662F\u65B0\u5750\u6807\u7CFB\u4E0B P \u7684 y \u503C\uFF0C\u6C42 P \u5728 v2(new) \u65B9\u5411\u4E0A\u7684\u6295\u5F71\u5373\u53EF\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
        x' = \\frac{\\overrightarrow{P} \\cdot \\overrightarrow{v1_{new}}}{ |\\overrightarrow{v1_{new}}| }  \\qquad
        y' = \\frac{\\overrightarrow{P} \\cdot \\overrightarrow{v2_{new}}}{ |\\overrightarrow{v2_{new}}| }
        \\end{aligned}
      ` }),
                  React.createElement("img", { src: fileCameraRebasis.src, className: "r-link", style: {
                          display: 'block', margin: '0 auto', width: '55%',
                          marginRight: '-2rem',
                          shapeOutside: `url(${fileCameraRebasis.src})`,
                          shapeMargin: '0.5rem',
                          float: 'right',
                      }, "data-width": fileCameraRebasis.width, "data-height": fileCameraRebasis.height }),
                  React.createElement(P, null,
                      "\u63A8\u5E7F\u5230\u4E09\u4E2A\u7EF4\u5EA6\uFF0C\u5C06\u4E16\u754C\u5750\u6807\u8F6C\u6362 Camera \u5750\u6807\u7684\u5173\u952E\u5728\u4E8E\u627E\u5230\u5728\u4E16\u754C\u5750\u6807\u7CFB\u91CC\u627E\u5230 Camera \u5750\u6807\u7CFB\u7684\u4E09\u4E2A\u57FA\u5411\u91CF\uFF0C\u53EF\u4EE5\u80AF\u5B9A\u7684\u662F\u5176\u4E2D\u7684 Up PT(Forward) \u5DF2\u7ECF\u786E\u5B9A\u4E86\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u627E\u5230 Right \u5373\u53EF\uFF0C\u914D\u5408\u53C9\u4E58\u6C42\u51FA ",
                      React.createElement(Formula, { source: "PT \\times Up", inline: true }),
                      " \u6240\u786E\u5B9A\u7684\u5E73\u9762\u7684\u6CD5\u5411\u91CF\u5C31\u884C, \u6CE8\u610F PT(Forward) \u671D\u5411 -z:"),
                  React.createElement(Formula, { source: `
        \\overrightarrow{Right} = \\overrightarrow{Forward} \\times \\overrightarrow{Up}
      ` }),
                  React.createElement("div", { style: { clear: 'both' } }),
                  React.createElement(P, null, "\u6700\u540E\u5BF9 Right / Forward / Up \u505A length=1 \u7684 normalize \u5904\u7406\uFF0C\u5373\u53EF\u5F97\u5230 lookAt \u7684\u4E09\u4E2A\u57FA\u5411\u91CF\uFF0C\u6CE8\u610F Forward \u671D\u5411\u7684\u662F -z \u65B9\u5411\uFF0C\u6211\u4EEC\u9700\u8981\u57FA\u5411\u91CF\u5E94\u8BE5\u6307\u5411 +z \u6240\u4EE5\u662F Eye - Target\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          \\overrightarrow{Forward} &= \\operatorname{normalize}(\\overrightarrow{Eye} - \\overrightarrow{Target}) \\\\[6pt]
          \\overrightarrow{Right} &= \\operatorname{normalize}(\\overrightarrow{Forward} \\times \\overrightarrow{Up}) \\\\[6pt]
          \\overrightarrow{Up} &= \\operatorname{normalize}(\\overrightarrow{Right} \\times \\overrightarrow{Forward}) \\\\[6pt]
        \\end{aligned}  
      ` })),
              React.createElement("div", { style: { clear: 'both' } }),
              React.createElement(H1Block, { id: "v-matrix-from-world-to-camera", title: "V \u77E9\u9635\uFF1A\u4ECE\u4E16\u754C\u5750\u6807\u5230\u6444\u50CF\u673A\u5750\u6807" },
                  React.createElement(P, null, "\u6709\u4E86\u57FA\u5411\u91CF\uFF0C\u5C31\u80FD\u5B9E\u73B0\u5C06\u4E16\u754C\u5750\u6807\u8F6C\u5230\u6444\u50CF\u673A\u5750\u6807\u4E86\uFF0C\u6574\u7406\u63A8\u5E7F\u4E4B\u524D\u7684\u4E8C\u7EF4\u7ED3\u8BBA\uFF1A"),
                  React.createElement(Formula, { source: `
        \\begin{aligned}
          V &= lookAt(Eye, Forward, Up) = \\begin{bmatrix}
            r_x & r_y & r_z & -\\vec r \\cdot \\vec e \\\\
            u_x & u_y & u_z & -\\vec u \\cdot \\vec e \\\\
            f_x & f_y & f_z & -\\vec f \\cdot \\vec e \\\\
            0 & 0 & 0 & 1
          \\end{bmatrix}
        \\end{aligned}  
      ` }),
                  React.createElement(Code, { lang: 'typescript', source: `
      export function lookAt(eye: Vec3, target: Vec3, up: Vec3): Mat4 {
        const f = normalize3(sub3(eye, target));
        const r = normalize3(cross3(up, f));
        const u = cross3(f, r);
      
        const [fx, fy, fz] = f;
        const [ux, uy, uz] = u;
        const [rx, ry, rz] = r;
      
        return [
           rx,  ry,  rz, -dot3(r, eye),
           ux,  uy,  uz, -dot3(u, eye),
           fx,  fy,  fz, -dot3(f, eye),
            0,   0,  0,              1,
        ];
      }  
      ` })),
              React.createElement(H1Block, { id: "svg-render-3d-cube", title: "\u7528 SVG \u6E32\u67D3\u4E00\u4E2A 3D Cube" },
                  React.createElement(P, null, "\u6211\u4EEC\u73B0\u5728\u5DF2\u7ECF\u638C\u63E1\u4E86\u6700\u6838\u5FC3\u7684\u53D8\u6362\u77E9\u9635 M \u548C V \u4E86\uFF0C\u73B0\u5728\u5C1D\u8BD5\u7528 SVG \u7ED8\u5236\u4E00\u4E2A 3D Cube, \u6211\u4EEC\u5148\u5B9A\u4E49\u753B\u5E03\u7A7A\u95F4\uFF0C\u548C svg render wrapper:"),
                  React.createElement(Code, { lang: 'tsx', source: `
        const VIEWBOX_WIDTH = 600;
        const VIEWBOX_HEIGHT = 600;
        const VIEWBOX = \`0 0 \${VIEWBOX_WIDTH} \${VIEWBOX_HEIGHT}\`;
        export function RenderCube(props: { style?: React.CSSProperties }) {
          // Camera 望向原点，up 垂直于大地
          const [eye, setEye] = React.useState<Vec3>([1.75, 2.5, 3]);
          const [target, setTarget] = React.useState<Vec3>([0, 0, 0]);
          const [up, setUp] = React.useState<Vec3>([0, 1, 0]);
          // 合成 V 矩阵
          const V = lookAt(eye, target, up);
          
          // position 代表 cube 的中心点，初始放置在原点
          const [position, setPosition] = React.useState<Vec3>([0, 0, 0]);
          // 合成 M 矩阵
          const M: Mat4 = [
            1.0, 0.0, 0.0, position[0],
            0.0, 1.0, 0.0, position[1],
            0.0, 0.0, 1.0, position[2],
            0.0, 0.0, 0.0, 1.0,
          ]

          // 用 svg 作为渲染后端，计算顶点并绘制 cube
          const commands: React.JSX.Element[] = [];
          renderCube(commands, M, V);

          return (
            <svg viewBox={VIEWBOX}
              style={{
                border: '1px solid #000',
                margin: '1em auto',
                display: 'block',
                ...props.style,
              }}>
              {commands}
            </svg>
          );
        }
      ` }),
                  React.createElement(P, null, "\u7136\u540E\u5B9E\u73B0 renderCube, \u6838\u5FC3\u5B9E\u73B0\u662F\u4F9D\u636E M \u548C V \u786E\u5B9A\u9876\u70B9\u5728\u753B\u5E03\u4E2D\u7684 2D \u4F4D\u7F6E\uFF0C\u5E76\u4F9D\u636E viewBox \u505A\u597D\u7F29\u653E\u548C\u5C45\u4E2D\uFF1A"),
                  React.createElement(Code, { lang: "tsx", source: `
export function renderCube(
  commands: React.JSX.Element[],
  M: Mat4,
  V: Mat4,
) {
  const final = multiply(V, M);
  
  // 模型本身是 1 单位的大小，这里做一个放大和居中，使其适合显示到 VIEWBOX 内
  // 此外 cube 建模的时候，左下角是 xy 原点，所以要做一个负数转换
  const transformToScreen = (v: Vec3 | Vec4): Vec3 => [
    v[0] * VIEWBOX_WIDTH + VIEWBOX_WIDTH / 2,
    (-v[1]) * VIEWBOX_HEIGHT + VIEWBOX_HEIGHT / 2,
    v[2]
  ];
  
  // 顶点坐标转画布坐标
  const points: Vec3[] = CUBE_VERTICES.map((v1, idx) => {
    const v4 = transformVec4(final, [v1[0], v1[1], v1[2], 1]);
    console.log(VERTEX_LABELS[idx]!, v4);
    const w = -v4[2]; // -z
    const x = v4[0] / w;
    const y = v4[1] / w;

    return transformToScreen([x, y, w])
  });

  // 查表划线
  for (let i = 0; i < CUBE_LINES.length; i += 2) {
    const a = points[CUBE_LINES[i]];
    const b = points[CUBE_LINES[i + 1]];
    if (!a || !b) continue;

    commands.push(
      <line key={commands.length} stroke="black"
        x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
    );
  }

  // 画顶点和标签
  points.forEach((p, idx) => {
    if (!p) return;
    commands.push(
      <circle key={commands.length}
        cx={p[0]} cy={p[1]}
        r={6} fill="#f87171" />
    );

    commands.push(
      <text
        key={commands.length}
        x={p[0] + 10} y={p[1] + 0}
        // 离得近的顶点标注的更大
        fontSize={Math.max(10, (300 / p[2]) - 10)}
        fontWeight="bold" fontFamily="monospace" fill="#2424ff"
      >
        {VERTEX_LABELS[idx]!}
      </text>
    );
  });

  // 最后绘制一下 green 原点
  const o = transformToScreen(transformVec4(final, [0, 0, 0, 1]));
  commands.push(
    <circle
      key={commands.length}
      cx={o[0]} cy={o[1]}
      r={6} fill="#0F0" // green
    />
  );
}

      ` }),
                  React.createElement(P, null, "\u6700\u540E\uFF0C\u6548\u679C\u5982\u4E0B:"),
                  React.createElement(P, null,
                      React.createElement(RenderCube, { style: { width: '100%', height: '25rem' } }))),
              React.createElement(H1Block, { id: "gaming-cube", title: "Gaming Cube" },
                  React.createElement(P, null, "\u7528\u9F20\u6807\u64CD\u4F5C\u4ECE\u4E0D\u540C\u89D2\u5EA6\u67E5\u770B 3D Cube \u5176\u5B9E\u5C31\u662F\u7528\u4E0D\u540C\u7684 M \u548C V \u77E9\u9635\uFF0C\u56E0\u6B64\u6211\u4EEC\u5E94\u8BE5\u5C06\u6E32\u67D3\u6574\u6210\u4E00\u4E2A\u53D7\u63A7\u7EC4\u4EF6\uFF1A"),
                  React.createElement(Code, { lang: 'tsx', source: `
function RenderCube(props: { M: Mat4, V: Mat4 }) {
  const commands: React.JSX.Element[] = [];
  renderCube(commands, props.M, props.V);
  return <>{commands}</>
}
      ` }),
                  React.createElement(P, null, "\u7136\u540E\u7ED1\u4E00\u4E0B DOM \u64CD\u4F5C\uFF0C\u4F9D\u636E\u64CD\u4F5C\u4FEE\u6539 Camera \u8BBE\u5B9A\uFF0C\u7B80\u5355\u5199\u4E00\u4E0B\u9876\u70B9\u53EF\u89C1\u6027\u68C0\u67E5\uFF0C\u4F7F\u5176\u770B\u8D77\u6765\u66F4\u50CF\u6E38\u620F\uFF1A"),
                  React.createElement(LazyRender, null,
                      React.createElement(P, null,
                          React.createElement(GamingCube, null))),
                  React.createElement(P, null, "\u5907\u6CE8: React \u8868\u793A \u201C\u4EC0\u4E48\uFF1F\u505C\u4E0B\uFF01\u4F60\u8BA9\u6211\u6765\u6E32\u67D3 3D \u5417 \uFF1F\u201D")),
              React.createElement(H1Block, { id: "eof", title: "EOF" },
                  React.createElement(P, null, "\u5C06 3D \u573A\u666F\u6E32\u67D3\u5230 2D \u5C4F\u5E55\u4E0A\u6CA1\u6709\u60F3\u8C61\u4E2D\u7684\u590D\u6742\uFF0C\u7406\u89E3 MV \u53D8\u6362\u7684\u539F\u7406\u5373\u53EF\u5B9E\u73B0\u4E0A\u5C4F\u7ED8\u5236\uFF0C\u672C\u6587\u7ED9\u51FA\u4E86\u4E00\u4E2A\u7C97\u7CD9\u7684\u5B9E\u73B0\u3002"),
                  React.createElement(P, null, "\u4F46\u5B9E\u9645\u4E0A\u8FD8\u6709\u5F88\u591A\u7EC6\u8282\u95EE\u9898\u9700\u8981\u8003\u8651\uFF0C\u6BD4\u5982\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u6EDA\u8F6E\u653E\u5927\u5230\u6700\u5927\u6216\u64CD\u4F5C WASD \u8D70\u51FA cube\uFF0C\u7136\u540E\u80CC\u5BF9\u7740 cube \u770B\u770B\uFF0C\u80FD\u770B\u5230\u5F88\u591A\u8C8C\u4F3C\u662F\u6E32\u67D3\u7684\u95EE\u9898\uFF0C\u5B9E\u9645\u4E0A\u8981\u89E3\u51B3\u8FD9\u4E9B\u5FC5\u987B\u91CD\u65B0\u5BA1\u89C6\u89C6\u9525\u4F53\u548C\u900F\u89C6\u6210\u50CF P \u77E9\u9635\u7684\u5177\u4F53\u7EC6\u8282\uFF0C\u672C\u6587\u9650\u4E8E\u7BC7\u5E45\u548C\u4E2A\u4EBA\u7CBE\u529B\u5C31\u4E0D\u5C55\u5F00\u4E86 \uFF08\u4F30\u8BA1\u8FD8\u662F\u4F1A\u5199233\uFF0C\u7B49\u6211\u6709\u7A7A\uFF09"),
                  React.createElement(ImgDynamic, { file: fileEof })));
      });

    })
  };
}));
