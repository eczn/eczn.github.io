System.register(['react', './mat.js', './cube2.js'], (function (exports) {
    'use strict';
    var React, lookAt, multiply, transformVec4, CUBE_VERTICES, VERTEX_LABELS, CUBE_LINES;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            lookAt = module.lookAt;
            multiply = module.multiply;
            transformVec4 = module.transformVec4;
        }, function (module) {
            CUBE_VERTICES = module.CUBE_VERTICES;
            VERTEX_LABELS = module.VERTEX_LABELS;
            CUBE_LINES = module.CUBE_LINES;
        }],
        execute: (function () {

            exports('RenderCube', RenderCube);

            const VIEWBOX_WIDTH = 600;
            const VIEWBOX_HEIGHT = 600;
            const VIEWBOX = `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`;
            function RenderCube(props) {
                const ref = React.createRef();
                // Camera 望向原点，up 垂直于大地
                const [eye, setEye] = React.useState([1.75, 2.5, 3]);
                const [target, setTarget] = React.useState([0, 0, 0]);
                const [up, setUp] = React.useState([0, 1, 0]);
                // 合成 V 矩阵
                const V = lookAt(eye, target, up);
                // position 代表 cube 的中心点，初始放置在原点
                const [position, setPosition] = React.useState([0, 0, 0]);
                // 合成 M 矩阵
                const M = [
                    1.0, 0.0, 0.0, position[0],
                    0.0, 1.0, 0.0, position[1],
                    0.0, 0.0, 1.0, position[2],
                    0.0, 0.0, 0.0, 1.0,
                ];
                // 用 svg 作为渲染后端，计算顶点并绘制 cube
                const commands = [];
                renderCube(commands, M, V);
                return (React.createElement("svg", { viewBox: VIEWBOX, "data-index-ignore": "1", ref: ref, style: {
                        border: '1px solid #000',
                        margin: '1em auto',
                        display: 'block',
                        ...props.style,
                    } }, commands));
            }
            function renderCube(commands, M, V) {
                const final = multiply(V, M);
                // 模型本身是 1 单位的大小，这里做一个放大和居中，使其适合显示到 VIEWBOX 内
                // 此外 cube 建模的时候，左下角是 xy 原点，所以要做一个负数转换
                const transformToScreen = (v) => [
                    v[0] * VIEWBOX_WIDTH + VIEWBOX_WIDTH / 2,
                    (-v[1]) * VIEWBOX_HEIGHT + VIEWBOX_HEIGHT / 2,
                    v[2]
                ];
                const points = CUBE_VERTICES.map((v1, idx) => {
                    const v4 = transformVec4(final, [v1[0], v1[1], v1[2], 1]);
                    console.log(VERTEX_LABELS[idx], v4);
                    const w = -v4[2]; // -z
                    const x = v4[0] / w;
                    const y = v4[1] / w;
                    return transformToScreen([x, y, w]);
                });
                // 查表划线
                for (let i = 0; i < CUBE_LINES.length; i += 2) {
                    const a = points[CUBE_LINES[i]];
                    const b = points[CUBE_LINES[i + 1]];
                    if (!a || !b)
                        continue;
                    commands.push(React.createElement("line", { key: commands.length, x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: "black" }));
                }
                // 画顶点和标签
                points.forEach((p, idx) => {
                    if (!p)
                        return;
                    commands.push(React.createElement("circle", { key: commands.length, cx: p[0], cy: p[1], r: 6, fill: "#f87171" }));
                    commands.push(React.createElement("text", { key: commands.length, x: p[0] + 10, y: p[1] + 0, fill: "#2424ff", 
                        // 离得近的顶点标注的更大
                        fontSize: Math.max(10, (300 / p[2]) - 10), fontWeight: "bold", fontFamily: "monospace" }, VERTEX_LABELS[idx]));
                });
                // 最后绘制一下 green 原点
                const o = transformToScreen(transformVec4(final, [0, 0, 0, 1]));
                commands.push(React.createElement("circle", { key: commands.length, cx: o[0], cy: o[1], r: 6, fill: "#0F0" // green
                 }));
            }

        })
    };
}));
