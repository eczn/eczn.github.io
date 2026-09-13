System.register(['react', './mat.js', './cube2.js', './vec2.js', './drag-state/use-drag-states.js'], (function (exports) {
    'use strict';
    var React, lookAt, multiply, transformVec4, CUBE_VERTICES, CUBE_LINES, VERTEX_LABELS, sub3, add3, normalize3, cross3, useDragStates;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            lookAt = module.lookAt;
            multiply = module.multiply;
            transformVec4 = module.transformVec4;
        }, function (module) {
            CUBE_VERTICES = module.CUBE_VERTICES;
            CUBE_LINES = module.CUBE_LINES;
            VERTEX_LABELS = module.VERTEX_LABELS;
        }, function (module) {
            sub3 = module.sub3;
            add3 = module.add3;
            normalize3 = module.normalize3;
            cross3 = module.cross3;
        }, function (module) {
            useDragStates = module.useDragStates;
        }],
        execute: (function () {

            exports({
                GamingCube: GamingCube,
                useReset: useReset
            });

            const VIEWBOX_WIDTH = 600;
            const VIEWBOX_HEIGHT = 600;
            const VIEWBOX = `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`;
            const ZOOM_SPEED = 0.001;
            const MIN_DIST = 0.1;
            const MAX_DIST = 999;
            const INITIAL_EYE = () => [1.75, 2.5, 3];
            const INITIAL_TARGET = () => [0, 0, 0];
            // 模型本身是 1 单位的大小，这里做一个放大和居中，使其适合显示到 VIEWBOX 内
            // 此外 cube 建模的时候，左下角是 xy 原点，所以要做一个负数转换
            function transformToScreen(v) {
                return [
                    v[0] * VIEWBOX_WIDTH + VIEWBOX_WIDTH / 2,
                    (-v[1]) * VIEWBOX_HEIGHT + VIEWBOX_HEIGHT / 2,
                    v[2]
                ];
            }
            function GamingCube() {
                const ref = React.createRef();
                // Camera 望向原点，up 垂直于大地
                const [eye, setEye] = createSignal(INITIAL_EYE());
                const [target, setTarget] = createSignal(INITIAL_TARGET());
                const [up, setUp] = createSignal([0, 1, 0]);
                // 合成 M 矩阵，cube 放置在原点
                const M = [
                    1.0, 0.0, 0.0, 0,
                    0.0, 1.0, 0.0, 0,
                    0.0, 0.0, 1.0, 0,
                    0.0, 0.0, 0.0, 1.0,
                ];
                const resetEye = useReset(eye, INITIAL_EYE, setEye);
                const resetTarget = useReset(target, INITIAL_TARGET, setTarget);
                const { dragStates } = useDragStates(ref, finalDragStates => {
                    setEye(transformDragStatesToEye(finalDragStates, eye(), target()));
                });
                const finalEye = transformDragStatesToEye(dragStates, eye(), target());
                const V = lookAt(finalEye, target(), up());
                const final = multiply(V, M);
                React.useEffect(() => {
                    const elem = ref.current;
                    if (!elem)
                        return;
                    const handler = (ev) => {
                        ev.preventDefault();
                        resetEye.cancel();
                        const scale = Math.exp(ev.deltaY * ZOOM_SPEED);
                        const offset = sub3(eye(), target());
                        const dist = Math.hypot(offset[0], offset[1], offset[2]);
                        if (dist < 1e-6)
                            return;
                        const nextDist = Math.min(MAX_DIST, Math.max(MIN_DIST, dist * scale));
                        const k = nextDist / dist;
                        setEye(add3(target(), [offset[0] * k, offset[1] * k, offset[2] * k]));
                    };
                    elem.addEventListener('wheel', handler);
                    return () => {
                        elem.removeEventListener('wheel', handler);
                    };
                }, []);
                React.useEffect(() => {
                    function handler(e) {
                        const SPEED = e.shiftKey ? 0.4 : 0.05; // shift 加速
                        const f = sub3(target(), eye());
                        let forward = [f[0], 0, f[2]];
                        if (Math.hypot(forward[0], forward[2]) < 1e-6) {
                            forward = [0, 0, -1];
                        }
                        forward = normalize3(forward);
                        const right = normalize3(cross3(forward, [0, 1, 0]));
                        let delta = [0, 0, 0];
                        if (e.key.toLowerCase() === 'w')
                            delta = forward;
                        if (e.key.toLowerCase() === 's')
                            delta = [-forward[0], 0, -forward[2]];
                        if (e.key.toLowerCase() === 'a')
                            delta = [-right[0], 0, -right[2]];
                        if (e.key.toLowerCase() === 'd')
                            delta = [right[0], 0, right[2]];
                        if (delta[0] === 0 && delta[2] === 0)
                            return;
                        const move = [
                            delta[0] * SPEED,
                            0,
                            delta[2] * SPEED,
                        ];
                        setEye(add3(eye(), move));
                        setTarget(add3(target(), move));
                    }
                    window.addEventListener('keydown', handler);
                    return () => {
                        window.removeEventListener('keydown', handler);
                    };
                }, []);
                const reset = () => {
                    resetEye.trigger();
                    resetTarget.trigger();
                };
                return (React.createElement("div", { className: "gc-root" },
                    React.createElement("style", null, `
        .cube-ani {
          transition: opacity 200ms ease;
        }
        .gc-root {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .gc-stage {
          position: relative;
          width: 100%;
          height: 25rem;
          border: 1px solid #d0d0d0;
          border-radius: 8px;
          background: #fafafa;
          overflow: hidden;
          user-select: none;
        }
        .gc-stage svg {
          display: block;
          width: 100%;
          height: 100%;
          cursor: grab;
        }
        .gc-hud {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size: 11px;
          line-height: 1.5;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 6px 8px;
          color: #333;
          pointer-events: none;
          backdrop-filter: blur(2px);
        }
        .gc-hud .gc-hud-title {
          font-weight: bold;
          color: #0a0;
          margin-bottom: 2px;
        }
        .gc-hud .gc-hud-row {
          display: flex;
          gap: 6px;
        }
        .gc-hud .gc-hud-key {
          color: #888;
          min-width: 42px;
        }
        .gc-hint {
          text-align: center;
          font-size: 13px;
          color: #555;
          cursor: pointer;
          padding: 6px 0;
          user-select: none;
        }
        .gc-hint:hover {
          color: #0a0;
        }
      `),
                    React.createElement("div", { className: "gc-stage" },
                        React.createElement("svg", { ref: ref, viewBox: VIEWBOX, preserveAspectRatio: "xMidYMid meet" },
                            React.createElement(RenderCube, { final: final, eye: finalEye, M: M }),
                            renderTarget(final, target())),
                        React.createElement("div", { className: "gc-hud" },
                            React.createElement("div", { className: "gc-hud-title" }, "Camera"),
                            React.createElement("div", { className: "gc-hud-row" },
                                React.createElement("span", { className: "gc-hud-key" }, "eye"),
                                React.createElement("span", null, fmt(finalEye))),
                            React.createElement("div", { className: "gc-hud-row" },
                                React.createElement("span", { className: "gc-hud-key" }, "target"),
                                React.createElement("span", null, fmt(target()))),
                            React.createElement("div", { className: "gc-hud-row" },
                                React.createElement("span", { className: "gc-hud-key" }, "dist"),
                                React.createElement("span", null, dist3(finalEye, target()).toFixed(2))))),
                    React.createElement("div", { className: "gc-hint", onClick: reset }, "\u2B06\uFE0F \u9F20\u6807 / \u89E6\u63A7 / \u6EDA\u8F6E / \u634F\u5408 / WASD \u79FB\u52A8 / Shift \u52A0\u901F / \u70B9\u6B64\u590D\u4F4D")));
            }
            function renderTarget(final, target) {
                // target 投影到屏幕
                const o = transformToScreen(transformVec4(final, [target[0], target[1], target[2], 1]));
                const [cx, cy] = o;
                // 三角形顶点（等边，外接圆半径 r）
                const r = 8;
                const p1 = [cx, cy - r]; // 上
                const p2 = [cx - r * 0.866, cy + r * 0.5]; // 左下
                const p3 = [cx + r * 0.866, cy + r * 0.5]; // 右下
                return (React.createElement(React.Fragment, null,
                    React.createElement("polygon", { points: `${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]}`, fill: "#0F0" })));
            }
            function RenderCube(props) {
                const { final, eye, M } = props;
                const commands = [];
                // 屏幕坐标 + 可见性
                const points = CUBE_VERTICES.map((v) => {
                    const v4 = transformVec4(final, [v[0], v[1], v[2], 1]);
                    const w = -v4[2];
                    const x = v4[0] / w;
                    const y = v4[1] / w;
                    return {
                        screen: transformToScreen([x, y, w]),
                        visible: isVertexVisible(v, eye),
                    };
                });
                // 查表划线
                for (let i = 0; i < CUBE_LINES.length; i += 2) {
                    const a = points[CUBE_LINES[i]];
                    const b = points[CUBE_LINES[i + 1]];
                    if (!a || !b)
                        continue;
                    // 两端都可见 → 实线；否则 → 虚线
                    const hidden = !(a.visible && b.visible);
                    commands.push(React.createElement("line", { key: commands.length, x1: a.screen[0], y1: a.screen[1], x2: b.screen[0], y2: b.screen[1], stroke: "black", strokeWidth: hidden ? 1 : 1.5, strokeDasharray: hidden ? '4 4' : undefined, opacity: hidden ? 0.4 : 1 }));
                }
                // 顶点和标签照旧
                points.forEach((p, idx) => {
                    commands.push(React.createElement("circle", { key: commands.length, cx: p.screen[0], cy: p.screen[1], r: 6, 
                        // fill={p.visible ? '#f87171' : '#f8717155'}
                        fill: "#f87171", fillOpacity: p.visible ? 1 : 0.3 }));
                    commands.push(React.createElement("text", { key: commands.length, x: p.screen[0] + 10, y: p.screen[1], fill: "#2424ff", opacity: p.visible ? 1 : 0.3, fontSize: Math.max(10, 300 / p.screen[2] - 10), fontWeight: "bold", fontFamily: "monospace", className: "cube-ani" }, VERTEX_LABELS[idx]));
                });
                return React.createElement(React.Fragment, null, commands);
            }
            // Orbit 模式：拖拽让 eye 绕 target 旋转，返回新的 eye
            function transformDragStatesToEye(dragStates, eye, target) {
                // 代表双指缩放
                if (dragStates.length === 2) {
                    const [a, b] = dragStates;
                    if (!a || !b)
                        return eye;
                    // 当前双指间距
                    const curDist = distance2(a.current, b.current);
                    // 起始双指间距（手势开始时记录）
                    const startDist = distance2(a.start, b.start);
                    // 避免除零
                    if (startDist < 1e-6 || curDist < 1e-6)
                        return eye;
                    const scale = startDist / curDist;
                    // 沿视线推拉，和滚轮那段同一套 clamp
                    const offset = sub3(eye, target);
                    const dist = Math.hypot(offset[0], offset[1], offset[2]);
                    if (dist < 1e-6)
                        return eye;
                    const nextDist = Math.min(MAX_DIST, Math.max(MIN_DIST, dist * scale));
                    const k = nextDist / dist;
                    return add3(target, [offset[0] * k, offset[1] * k, offset[2] * k]);
                }
                // 只支持单点操控
                if (dragStates.length !== 1)
                    return eye;
                const [s] = dragStates;
                if (!s)
                    return eye; // 没激活
                const { x, y } = s.translation;
                // 1. 屏幕像素 → 归一化增量（沿用你原来的缩放基准）
                const dx = x / VIEWBOX_WIDTH / 2;
                const dy = -y / VIEWBOX_HEIGHT / 2;
                // 2. 归一化增量 → 角度增量
                const SENSITIVITY = Math.PI * 2; // 拖满整个 viewBox 约转一圈，按手感调
                const dTheta = -dx * SENSITIVITY; // 水平 → yaw
                const dPhi = dy * SENSITIVITY; // 垂直 → pitch
                // 3. 绕 target 旋转 offset
                const offset = sub3(eye, target);
                // 当前视线方向 & 当前 right 轴
                const forward = normalize3(sub3(target, eye));
                const right = normalize3(cross3(forward, [0, 1, 0]));
                // 先绕世界 up 转 yaw，再绕当前 right 转 pitch（避免滚转）
                const qYaw = quatFromAxisAngle([0, 1, 0], dTheta);
                const qPitch = quatFromAxisAngle(right, dPhi);
                const q = multiplyQuat(qYaw, qPitch);
                const rotated = applyQuat(q, offset);
                // 4. 新的 eye = target + 旋转后的 offset
                return add3(target, rotated);
            }
            function quatFromAxisAngle(axis, angle) {
                const [ax, ay, az] = normalize3(axis);
                const half = angle / 2;
                const s = Math.sin(half);
                return [ax * s, ay * s, az * s, Math.cos(half)];
            }
            function multiplyQuat(a, b) {
                const [ax, ay, az, aw] = a;
                const [bx, by, bz, bw] = b;
                return [
                    aw * bx + ax * bw + ay * bz - az * by,
                    aw * by - ax * bz + ay * bw + az * bx,
                    aw * bz + ax * by - ay * bx + az * bw,
                    aw * bw - ax * bx - ay * by - az * bz,
                ];
            }
            function applyQuat(q, v) {
                const [qx, qy, qz, qw] = q;
                const [vx, vy, vz] = v;
                // t = 2 * (q_vec × v)
                const tx = 2 * (qy * vz - qz * vy);
                const ty = 2 * (qz * vx - qx * vz);
                const tz = 2 * (qx * vy - qy * vx);
                // v' = v + qw * t + q_vec × t
                return [
                    vx + qw * tx + (qy * tz - qz * ty),
                    vy + qw * ty + (qz * tx - qx * tz),
                    vz + qw * tz + (qx * ty - qy * tx),
                ];
            }
            function createSignal(initialState) {
                const forceRender = useForceRender();
                const stateRef = React.useRef(initialState);
                const stateRefGetter = () => stateRef.current;
                const stateSetter = React.useCallback((nextState) => {
                    stateRef.current = nextState;
                    forceRender(); // need to rerender the react component
                }, []);
                return [stateRefGetter, stateSetter];
            }
            function useForceRender() {
                const [_, set] = React.useState({});
                // every runs gives a different object to renrender component (pointer)
                return () => set({});
            }
            function distance2(p, q) {
                return Math.hypot(p.x - q.x, p.y - q.y);
            }
            function useReset(getCurrent, getInitial, setValue, options = {}) {
                const { duration = 400, easing = easeOutCubic } = options;
                const rafRef = React.useRef(null);
                // 用 ref 存最新的 getter/setter，避免 trigger 因依赖变化而重建
                const getCurrentRef = React.useRef(getCurrent);
                const getInitialRef = React.useRef(getInitial);
                const setValueRef = React.useRef(setValue);
                getCurrentRef.current = getCurrent;
                getInitialRef.current = getInitial;
                setValueRef.current = setValue;
                const cancel = React.useCallback(() => {
                    if (rafRef.current !== null) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = null;
                    }
                }, []);
                const trigger = React.useCallback(() => {
                    cancel();
                    const from = getCurrentRef.current();
                    const to = getInitialRef.current();
                    const start = performance.now();
                    const tick = (now) => {
                        const t = Math.min(1, (now - start) / duration);
                        const k = easing(t);
                        setValueRef.current(lerp3(from, to, k));
                        if (t < 1) {
                            rafRef.current = requestAnimationFrame(tick);
                        }
                        else {
                            rafRef.current = null;
                        }
                    };
                    rafRef.current = requestAnimationFrame(tick);
                }, [cancel, duration, easing]);
                // 卸载时清理
                React.useEffect(() => cancel, [cancel]);
                return { cancel, trigger };
            }
            function easeOutCubic(t) {
                return 1 - Math.pow(1 - t, 3);
            }
            function lerp3(a, b, t) {
                return [
                    a[0] + (b[0] - a[0]) * t,
                    a[1] + (b[1] - a[1]) * t,
                    a[2] + (b[2] - a[2]) * t,
                ];
            }
            function fmt(v) {
                return `(${v[0].toFixed(2)}, ${v[1].toFixed(2)}, ${v[2].toFixed(2)})`;
            }
            function dist3(a, b) {
                return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
            }
            // —— 预计算立方体的轴对齐包围盒 ——
            const CUBE_MIN = [
                Math.min(...CUBE_VERTICES.map((v) => v[0])),
                Math.min(...CUBE_VERTICES.map((v) => v[1])),
                Math.min(...CUBE_VERTICES.map((v) => v[2])),
            ];
            const CUBE_MAX = [
                Math.max(...CUBE_VERTICES.map((v) => v[0])),
                Math.max(...CUBE_VERTICES.map((v) => v[1])),
                Math.max(...CUBE_VERTICES.map((v) => v[2])),
            ];
            const VERTEX_EPS = 1e-6;
            function isVertexVisible(vLocal, eye) {
                for (let i = 0; i < 3; i++) {
                    if (vLocal[i] >= CUBE_MAX[i] - VERTEX_EPS && eye[i] > CUBE_MAX[i]) {
                        return true;
                    }
                    if (vLocal[i] <= CUBE_MIN[i] + VERTEX_EPS && eye[i] < CUBE_MIN[i]) {
                        return true;
                    }
                }
                return false;
            }

        })
    };
}));
