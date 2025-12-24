System.register(['./shader-vertex-source.glsl.js', './shader-fragment-source.glsl.js'], (function (exports) {
    'use strict';
    var shaderVertexSource, shaderFragmentSource;
    return {
        setters: [function (module) {
            shaderVertexSource = module.default;
        }, function (module) {
            shaderFragmentSource = module.default;
        }],
        execute: (function () {

            class WhiteNoiseWebgl {
                stop = true;
                inited = false;
                canvas = null;
                gl = null;
                uSize = 4;
                play = () => {
                    this.stop = !this.stop;
                };
                init = (canvas) => {
                    this.stop = true;
                    this.inited = true;
                    this.canvas = canvas;
                    const gl = canvas.getContext('webgl');
                    this.gl = gl;
                    // 视口
                    gl.viewport(0, 0, canvas.width, canvas.height);
                    // 创建并编译顶点着色器
                    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
                    gl.shaderSource(vertexShader, shaderVertexSource);
                    gl.compileShader(vertexShader); // 编译
                    // 编译错误的话打 log
                    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
                        console.error(gl.getShaderInfoLog(vertexShader));
                    }
                    // 创建并编译片段着色器
                    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                    gl.shaderSource(fragmentShader, shaderFragmentSource);
                    gl.compileShader(fragmentShader); // 编译
                    // 编译错误的话打 log
                    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
                        console.error(gl.getShaderInfoLog(fragmentShader));
                    }
                    // 创建程序, 并将两个着色器放上去, 最后跟 gl 上下文绑定
                    const program = gl.createProgram();
                    gl.attachShader(program, vertexShader);
                    gl.attachShader(program, fragmentShader);
                    gl.linkProgram(program);
                    // 错误处理
                    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                        console.error(gl.getProgramInfoLog(program));
                    }
                    // 启用 program
                    gl.useProgram(program);
                    // 获取顶点着色器的位置属性
                    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
                    const positionBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                    // 定义顶点数据
                    const vertices = [
                        -1, 1, 0, // 第一个三角形
                        -1, -1, 0,
                        1, -1, 0,
                        1, -1, 0, // 第二个三角形
                        1, 1, 0,
                        -1, 1, 0,
                    ];
                    // 写入到缓冲 buffer 中
                    gl.bufferData(gl.ARRAY_BUFFER, // 表明是 ARRAY_BUFFER
                    new Float32Array(vertices), // 构造为 Float32Array 格式
                    gl.STATIC_DRAW);
                    // 启用 position 属性
                    gl.enableVertexAttribArray(positionAttributeLocation);
                    // 告诉如何从缓冲中取值并写到 position 变量上
                    gl.vertexAttribPointer(positionAttributeLocation, 3, // vertices 数组中每三个赋值到 vec4 position 上
                    // 因此会少一个 w, glsl 会补一个默认值 0
                    gl.FLOAT, // 浮点类型
                    false, // 不需要归一化数据
                    0, // 每次迭代运行运动多少内存到下一个数据开始点
                    // 这里 0 代表 单位数量 * 每个单位占用内存 sizeof(type)
                    0 // 从缓冲起始位置开始读取
                    );
                    // 获取 uniform 变量的位置
                    // 通过这种方式可以访问到片段着色器里的
                    // u_rand 和 u_size 这两个全局变量
                    const randUniformLocation = gl.getUniformLocation(program, 'u_rand');
                    const sizeUniformLocation = gl.getUniformLocation(program, 'u_size');
                    // 绘制一帧
                    const render = () => {
                        // 传递 u_rand 参数到着色器
                        gl.uniform1f(randUniformLocation, Math.random());
                        // 传递 u_size 参数到着色器
                        gl.uniform1f(sizeUniformLocation, this.uSize);
                        // 清空画布
                        gl.clearColor(0, 0, 0, 1);
                        gl.clear(gl.COLOR_BUFFER_BIT);
                        gl.drawArrays(gl.TRIANGLES, // gl.TRIANGLES 方式进行图元组合
                        0, // 从 0 开始
                        6 // 6 个顶点
                        );
                    };
                    const animate = () => {
                        // deinit 结束后动画要暂停
                        if (!this.inited)
                            return;
                        if (this.stop) {
                            setTimeout(animate, 50);
                            return;
                        }
                        render();
                        requestAnimationFrame(animate);
                    };
                    render();
                    animate();
                };
                deinit = () => {
                    this.inited = true;
                    this.stop = true;
                    this.canvas = null;
                    this.gl = null;
                };
            } exports('WhiteNoiseWebgl', WhiteNoiseWebgl);

        })
    };
}));
//# sourceMappingURL=white-noise-webgl.js.map
