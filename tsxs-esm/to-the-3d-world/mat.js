System.register(['./vec2.js'], (function (exports) {
    'use strict';
    var normalize3, sub3, cross3, dot3;
    return {
        setters: [function (module) {
            normalize3 = module.normalize3;
            sub3 = module.sub3;
            cross3 = module.cross3;
            dot3 = module.dot3;
        }],
        execute: (function () {

            exports({
                identity: identity,
                lookAt: lookAt,
                multiply: multiply,
                perspective: perspective,
                printMat: printMat,
                rotateX: rotateX,
                rotateY: rotateY,
                rotateZ: rotateZ,
                scale: scale,
                transformVec4: transformVec4,
                translate: translate
            });

            function identity() {
                return [
                    1.0, 0.0, 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0
                ];
            }
            function multiply(a, b) {
                const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33,] = a;
                const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33,] = b;
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
            function translate(v) {
                const [x, y, z] = v;
                return [
                    1.0, 0.0, 0.0, x,
                    0.0, 1.0, 0.0, y,
                    0.0, 0.0, 1.0, z,
                    0.0, 0.0, 0.0, 1.0,
                ];
            }
            function scale(sx, sy, sz) {
                return [
                    sx, 0.0, 0.0, 0.0,
                    0.0, sy, 0.0, 0.0,
                    0.0, 0.0, sz, 0.0,
                    0.0, 0.0, 0.0, 1.0,
                ];
            }
            function rotateX(theta) {
                const c = Math.cos(theta);
                const s = Math.sin(theta);
                return [
                    1.0, 0.0, 0.0, 0.0,
                    0.0, c, -s, 0.0,
                    0.0, s, c, 0.0,
                    0.0, 0.0, 0.0, 1.0,
                ];
            }
            function rotateY(theta) {
                const c = Math.cos(theta);
                const s = Math.sin(theta);
                return [
                    c, 0.0, s, 0.0,
                    0.0, 1.0, 0.0, 0.0,
                    -s, 0.0, c, 0.0,
                    0.0, 0.0, 0.0, 1.0,
                ];
            }
            function rotateZ(theta) {
                const c = Math.cos(theta);
                const s = Math.sin(theta);
                return [
                    c, -s, 0.0, 0.0,
                    s, c, 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0,
                ];
            }
            /** 返回点乘 m * v */
            function transformVec4(m, v) {
                const x = v[0], y = v[1], z = v[2], w = v[3];
                return [
                    m[0] * x + m[1] * y + m[2] * z + m[3] * w,
                    m[4] * x + m[5] * y + m[6] * z + m[7] * w,
                    m[8] * x + m[9] * y + m[10] * z + m[11] * w,
                    m[12] * x + m[13] * y + m[14] * z + m[15] * w,
                ];
            }
            function lookAt(eye, target, up) {
                const f = normalize3(sub3(eye, target));
                const r = normalize3(cross3(up, f));
                const u = cross3(f, r);
                const [fx, fy, fz] = f;
                const [ux, uy, uz] = u;
                const [rx, ry, rz] = r;
                return [
                    rx, ry, rz, -dot3(r, eye),
                    ux, uy, uz, -dot3(u, eye),
                    fx, fy, fz, -dot3(f, eye),
                    0, 0, 0, 1,
                ];
            }
            function perspective(fovy, aspect, near, far) {
                const f = 1 / Math.tan(fovy / 2);
                const nf = 1 / (near - far);
                return [
                    f / aspect, 0, 0, 0,
                    0, f, 0, 0,
                    0, 0, (far + near) * nf, 2 * far * near * nf,
                    0, 0, -1, 0,
                ];
            }
            function printMat(label, mat) {
                const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33,] = mat;
                const r0 = `${a00} ${a01} ${a02} ${a03}`;
                const r1 = `${a10} ${a11} ${a12} ${a13}`;
                const r2 = `${a20} ${a21} ${a22} ${a23}`;
                const r3 = `${a30} ${a31} ${a32} ${a33}`;
                console.log(label, 'row0', r0);
                console.log(label, 'row1', r1);
                console.log(label, 'row2', r2);
                console.log(label, 'row3', r3);
            }

        })
    };
}));
