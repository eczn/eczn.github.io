System.register(['react', 'rally/@@', './white-noise-audio.js', './white-noise-webgl.js', './white-noise-canvas.js', './webgl-render-pipeline.svg.js', './webgl-assembly-mode.svg.js', './webgl-vertex-shader.svg.js', './webgl-wh-render-ideas.svg.js', './shader-vertex-source.glsl.js', './shader-fragment-source.glsl.js'], (function (exports) {
    'use strict';
    var React, P, Button, H1Block, Code, ImgDynamic, H2, Numbering, Link, metaBeauty, WhiteNoiseAudio, WhiteNoiseWebgl, WhiteNoiseCanvas, fileWebglRenderPipeline, fileWebglAssemblyMode, fileWebglVertexShader, fileWebglWhRenderIdeas, shaderVertexSource, shaderFragmentSource;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Button = module.Button;
            H1Block = module.H1Block;
            Code = module.Code;
            ImgDynamic = module.ImgDynamic;
            H2 = module.H2;
            Numbering = module.Numbering;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            WhiteNoiseAudio = module.WhiteNoiseAudio;
        }, function (module) {
            WhiteNoiseWebgl = module.WhiteNoiseWebgl;
        }, function (module) {
            WhiteNoiseCanvas = module.WhiteNoiseCanvas;
        }, function (module) {
            fileWebglRenderPipeline = module.default;
        }, function (module) {
            fileWebglAssemblyMode = module.default;
        }, function (module) {
            fileWebglVertexShader = module.default;
        }, function (module) {
            fileWebglWhRenderIdeas = module.default;
        }, function (module) {
            shaderVertexSource = module.default;
        }, function (module) {
            shaderFragmentSource = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'white-noise-webgl',
                title: '从白噪声开始学习 WebGL',
                author: 'eczn',
                time: new Date('2023-03-29 00:34'),
            }));
            async function initialProps(context) {
                return {
                    fileWhiteNoiseWebgl: await context.readText('./white-noise-webgl.tsx'),
                    fileWhiteNoiseCanvas: await context.readText('./white-noise-canvas.tsx'),
                };
            }
            const whiteNoiseWebgl = new WhiteNoiseWebgl();
            const whiteNoiseCanvas = new WhiteNoiseCanvas();
            const whiteNoiseWebglEnd = new WhiteNoiseWebgl();
            var index_blog = exports('default', (props) => {
                const ref = React.createRef();
                const ref2 = React.createRef();
                const refEnd = React.createRef();
                const initialHeight = 240;
                React.useEffect(() => {
                    const canvas = ref.current;
                    const canvas2 = ref2.current;
                    const canvasEnd = refEnd.current;
                    canvas.width = canvas.parentElement.clientWidth;
                    canvas.height = initialHeight;
                    whiteNoiseWebgl.init(canvas);
                    canvas2.width = canvas2.parentElement.clientWidth;
                    canvas2.height = initialHeight;
                    whiteNoiseCanvas.init(canvas2);
                    canvasEnd.width = canvasEnd.parentElement.clientWidth;
                    canvasEnd.height = initialHeight;
                    whiteNoiseWebglEnd.init(canvasEnd);
                    return () => {
                        whiteNoiseWebgl.deinit();
                        whiteNoiseCanvas.deinit();
                        whiteNoiseWebglEnd.deinit();
                        WhiteNoiseAudio.shared().stop();
                    };
                }, []);
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u672C\u6587\u4ECB\u7ECD\u767D\u566A\u58F0\u751F\u6210, Audio \u548C Pixel: "),
                        React.createElement(P, { center: true },
                            React.createElement("canvas", { ref: ref, width: 50, height: initialHeight })),
                        React.createElement(Button, { icon: "play", onClick: () => {
                                WhiteNoiseAudio.shared().play();
                                whiteNoiseWebgl.play();
                            } }, "\u64AD\u653E")),
                    React.createElement(H1Block, { id: "white-noise-audio", title: "\u58F0\u97F3\u600E\u4E48\u5B9E\u73B0" },
                        React.createElement(P, null, "\u5229\u7528 WebAudio \u64AD\u653E\u5373\u53EF\uFF0C\u4E0D\u662F\u672C\u6587\u91CD\u70B9")),
                    React.createElement(H1Block, { id: "implementation-idea", title: "Canvas \u7ED8\u5236\u601D\u8DEF" },
                        React.createElement(P, null, "\u753B\u767D\u566A\u58F0\u5355\u4E2A\u50CF\u7D20\u70B9\u5F88\u5BB9\u6613, \u5229\u7528 Math.random() \u751F\u6210\u968F\u673A\u6570\u5373\u53EF\u3002"),
                        React.createElement(P, null, "\u7136\u540E\u5C06\u8FD9\u4E2A\u51FD\u6570\u5E94\u7528\u5230 canvas \u753B\u5E03\u5168\u90E8\u70B9\u4E0A\u5373\u53EF\u7ED8\u5236\u51FA\u6765\u4E00\u5E27\uFF0C\u6700\u540E\u8BA9\u5176\u52A8\u8D77\u6765\u5373\u53EF\uFF0C\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B:"),
                        React.createElement(Code, { lang: "tsx", source: props.fileWhiteNoiseCanvas }),
                        React.createElement(P, null, "\u6700\u540E\u5728\u5408\u9002\u7684\u5730\u65B9 new WhiteNoiseCanvas() \u5E76 init() \u5373\u53EF"),
                        React.createElement(P, { center: true },
                            React.createElement("canvas", { ref: ref2, width: 50, height: initialHeight })),
                        React.createElement(Button, { icon: "play", onClick: whiteNoiseCanvas.play }, "\u64AD\u653E (\u79FB\u52A8\u7AEF\u614E\u70B9, \u5361)")),
                    React.createElement(H1Block, { id: "webgl-vs-canvas", title: "WebGL \u8FD8\u662F Canvas" },
                        React.createElement(P, null, "\u4E0A\u6BB5\u5185\u5BB9\u5927\u81F4\u63CF\u8FF0\u4E86\u7ED8\u5236\u8FC7\u7A0B, \u5F88\u660E\u663E\u4E0A\u8FF0\u8FC7\u7A0B\u6D89\u53CA\u5230\u904D\u5386\u5168\u90E8\u70B9\u7684\u8FC7\u7A0B, \u5178\u578B\u7684\u8BA1\u7B97\u5BC6\u96C6\u578B\u5E94\u7528\u3002\u8FD9\u79CD\u573A\u666F\u5C0F\u5C3A\u5BF8\u56FE\u7247\u753B\u5E03\u8FD8\u597D\uFF0C\u5982\u679C\u9700\u8981\u7ED8\u5236 4K \u753B\u5E03\u7684\u65F6\u5019\u5C31\u5361\u7684\u4E0D\u884C\u4E86\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u66F4\u9AD8\u6027\u80FD\u7684\u65B9\u6848 \u2014\u2014 webgl, \u501F\u52A9\u663E\u5361\u52A0\u901F\u6765\u7ED8\u5236")),
                    React.createElement(H1Block, { id: "webgl-render-pipeline", title: "WebGL \u6E32\u67D3\u7BA1\u7EBF" },
                        React.createElement(P, null, "\u5927\u81F4\u8BF4\u6765\u8BF4\uFF0C\u6E32\u67D3\u7BA1\u7EBF\u662F\u6E32\u67D3\u50CF\u7D20\u7684\u6574\u4E2A\u6D41\u7A0B\uFF0C\u5982\u56FE\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileWebglRenderPipeline }),
                        React.createElement(H2, { id: "vertex-shader" }, "\u9876\u70B9\u7740\u8272\u5668 (Vertex shader)"),
                        React.createElement(P, null, "\u901A\u8FC7\u7F16\u5199\u9876\u70B9\u7740\u8272\u5668\u53EF\u4EE5\u8BA9 GPU \u5E2E\u4F60\u505A\u9876\u70B9\u7684\u5750\u6807\u53D8\u6362\uFF0C\u5728 3D \u91CC\u9762\u53EF\u4EE5\u636E\u6B64\u5B9E\u73B0\u6444\u50CF\u673A (Camara)\uFF0C\u5B9E\u73B0\u955C\u5934\u8DDF\u8E2A\u7B49\u7279\u6027\u3002"),
                        React.createElement(ImgDynamic, { file: fileWebglVertexShader }),
                        React.createElement(P, null, "\u5728 2D \u573A\u666F\u4E0B\uFF0C\u8FD9\u91CC\u53D8\u6362\u4E3B\u8981\u662F\u653E\u5927\u7F29\u5C0F\u7B49\u5E38\u7528\u53D8\u6362"),
                        React.createElement(H2, { id: "primitive-assembly" }, "\u56FE\u5143\u88C5\u914D (Primitive assembly)"),
                        React.createElement(P, null, "\u56FE\u5143\u88C5\u914D\u662F\u5C06\u9876\u70B9\u7740\u8272\u5668\u4E2D\u8F93\u51FA\u7684\u9876\u70B9\u7EC4\u88C5\u6210\u6307\u5B9A\u7684\u56FE\u5143\uFF0C\u76F4\u89C9\u4E0A\u5BF9\u5E94\u7269\u4F53\u7684 \u201C\u9762\u201D:"),
                        React.createElement(ImgDynamic, { file: fileWebglAssemblyMode }),
                        React.createElement(P, null, "\u4E0A\u56FE\u6CA1\u6709\u5217\u51FA\u5168\u90E8\u7684\u56FE\u5143\u88C5\u914D\u6A21\u5F0F\uFF0C\u5728\u672C\u4F8B\u91CC\u53EA\u9700\u8981\u4E09\u89D2\u5F62 TRIANGLES \u5373\u53EF"),
                        React.createElement(H2, { id: "rasterization" }, "\u5149\u6805\u5316 (Rasterization)"),
                        React.createElement(P, null, "\u5C06\u88C5\u914D\u597D\u7684\u77E2\u91CF\u7684\u56FE\u5143\u79BB\u6563\u5316/\u50CF\u7D20\u5316\uFF0C\u53D8\u6210\u7531\u50CF\u7D20\u7EC4\u6210\u7684\u56FE\u5143\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u5149\u6805\u5316\uFF0C\u5177\u4F53\u6765\u8BF4\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "\u7BA1\u7EBF\u5728\u5149\u6805\u5316\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u4E86\u4E00\u4E9B\u5149\u6805\u5316\u7684\u7B97\u6CD5\uFF0C\u9009\u62E9\u51FA\u5728\u56FE\u5143\u8FB9\u754C\u6240\u5305\u56F4\u7684\u50CF\u7D20\u70B9\uFF0C\u6700\u7EC8\u7EC4\u6210\u7247\u5143\u3002\u5E38\u7528\u7684\u5149\u6805\u5316\u7B97\u6CD5\u5982Bresenham\u5149\u6805\u5316\u7B97\u6CD5\u7B49\u3002"),
                            React.createElement(P, null, "\u5982\u679C\u5728\u9876\u70B9\u7740\u8272\u5668\u4E2D\u7684\u9876\u70B9\u4E2D\u8BBE\u7F6E\u4F8B\u5982\u989C\u8272\uFF0C\u6CD5\u7EBF\u7B49\u5C5E\u6027\uFF0C\u5728\u5149\u6805\u5316\u8FC7\u7A0B\u5BF9\u57FA\u4E8E\u9876\u70B9\u5BF9\u5404\u4E2A\u50CF\u7D20\u70B9\u505A\u7EBF\u6027\u63D2\u503C\u3002")),
                        React.createElement(H2, { id: "fragment-shader" }, "\u7247\u6BB5\u7740\u8272\u5668 (Fragment shader)"),
                        React.createElement(P, null, "\u8FDB\u4E00\u6B65\u5904\u7406\u4E0A\u4E00\u6B65\u5149\u6805\u5316\u5F97\u5230\u7684\u56FE\u7247\u50CF\u7D20\u7247\u6BB5"),
                        React.createElement(H2, { id: "testing-and-blending" }, "\u6DF7\u5408\u548C\u6D4B\u8BD5 (Testing and blending)"),
                        React.createElement(P, null, "\u8FD9\u4E00\u6B65\u4F1A\u5C06\u7247\u6BB5\u7740\u8272\u5668\u4F20\u8FC7\u6765\u7684\u7247\u6BB5\u505A\u6D4B\u8BD5\uFF0C\u6D4B\u8BD5\u5931\u8D25\u7684\u50CF\u7D20\u76F4\u63A5\u5220\u9664\uFF0C\u6D4B\u8BD5\u6210\u529F\u7684\u70B9\u53BB\u4FDD\u7559\uFF0C\u5E76\u6700\u7EC8\u6E32\u67D3\u5230\u5C4F\u5E55\u4E0A\u3002"),
                        React.createElement(P, null, "\u5E38\u89C1\u7684\u6D4B\u8BD5\u4E3B\u8981\u5305\u62EC\u6A21\u7248\u6D4B\u8BD5\u548C\u6DF1\u5EA6\u6D4B\u8BD5\uFF0C\u901A\u8FC7\u6DF1\u5EA6\u6D4B\u8BD5\u53EF\u4EE5\u5B9E\u73B0\u7269\u4F53\u9762\u7684\u524D\u540E\u987A\u5E8F\uFF0C\u5177\u4F53\u4E0D\u5C55\u5F00\u4E86\uFF0C\u6211\u8FD9\u91CC\u7684\u767D\u566A\u58F0\u4E0D\u9700\u8981\u8FD9\u4E2A\u3002")),
                    React.createElement(H1Block, { id: "tutorial-coding-glsl-shader", title: "\u5FEB\u901F\u5165\u95E8 GLSL \u7F16\u5199\u7740\u8272\u5668" },
                        React.createElement(P, null, "\u7740\u8272\u5668 (shader) \u662F\u4E00\u79CD GPU \u7A0B\u5E8F, \u7531 GPU \u8D1F\u8D23\u6267\u884C\u3002GLSL \u5373 OpenGL Shading Language, \u53EF\u4EE5\u7528\u6765\u7F16\u5199\u7740\u8272\u5668\u3002"),
                        React.createElement(P, null, "GLSL \u91C7\u7528\u4E86\u7C7B C \u7684\u8BED\u6CD5\uFF0C\u5E76\u63D0\u4F9B\u4E86\u82E5\u5E72\u65B9\u4FBF\u7684\u6570\u636E\u7ED3\u6784\u548C\u9009\u62E9\u5668\uFF0C\u901A\u8FC7 uniform \u5168\u5C40\u53D8\u91CF\u5C06\u76F8\u5173\u53C2\u6570\u4F20\u5165 GLSL \u4E0A\u4E0B\u6587\u4E2D\u3002"),
                        React.createElement(P, null, "\u8FD9\u91CC\u4EE5\u672C\u4F8B\u5B50\u91CC\u7528\u5230\u7684\u9876\u70B9\u7740\u8272\u5668\u4E3A\u4F8B\u8BF4\u660E"),
                        React.createElement(Code, { lang: "glsl", source: `
        attribute vec4 position;
        void main() {
          gl_Position = position;
        }
      ` }),
                        React.createElement(H2, { id: "glsl-main" }, "main \u51FD\u6570"),
                        React.createElement(P, null, "\u4F60\u61C2\u7684, \u6267\u884C\u5165\u53E3"),
                        React.createElement(H2, { id: "glsl-vec4" }, "vec4 \u662F\u4EC0\u4E48"),
                        React.createElement(P, null, "vec4 \u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u8868\u793A\u4E00\u4E2A\u56DB\u7EF4\u5411\u91CF, \u4F60\u53EF\u4EE5\u5C06\u5B83\u60F3\u8C61\u4E3A\u8FD9\u4E2A\u7ED3\u6784:"),
                        React.createElement(Code, { lang: 'ts', source: `
        interface vec4 {
          x: number;
          y: number;
          z: number;
          w: number; // 远近
        }
      ` }),
                        React.createElement(P, null, "\u6B64\u5916\u8FD8\u6709 vec3, vec2, \u8FD9\u4E24\u4E2A\u662F\u5728 vec4 \u4E0A\u51CF\u53BB w \u548C z \u5F97\u5230\u3002"),
                        React.createElement(P, null, "\u8FD9\u91CC\u63D0\u4E00\u4E0B\u9009\u62E9\u5668\u8FD9\u4E2A\u6982\u5FF5: (\u8BED\u6CD5\u7CD6)"),
                        React.createElement(Code, { lang: "glsl", source: `
        // 构造一个 vec4 存储在 a 变量中
        vec4 a = vec4(1.0, 2.0, 3.0, 4.0);
        vec3 b = a.xyz; // (1, 2, 3)
        vec2 c = a.xy; // (1, 2)
        vec2 d = a.yz; // (2, 1) 选择 y z 维并作为 vec2 返回
      ` }),
                        React.createElement(P, null, "\u53EF\u4EE5\u901A\u8FC7\u5728\u53D8\u91CF\u540D\u540E\u9762\u63A5 .xyz \u7684\u65B9\u5F0F\u5FEB\u901F\u9009\u62E9\u5176\u4E2D\u7684\u51E0\u4E2A\u7EF4\u5EA6\u51FA\u6765"),
                        React.createElement(H2, { id: "glsl-attribute" }, "attribute \u5C5E\u6027"),
                        React.createElement(P, null, "attribute \u6807\u8BB0\u7684\u53D8\u91CF\u8BF4\u660E\u8FD9\u4E2A\u53D8\u91CF\u7684\u53D6\u503C\u662F\u4ECE \"\u7F13\u51B2\" \u53D6\u7684"),
                        React.createElement(P, null, "\u5177\u4F53\u6765\u8BF4\uFF0C\u7F13\u51B2\u662F\u662F js \u8FD9\u8FB9\u53D1\u9001\u5230 GPU \u7684\u4E00\u6BB5\u4E8C\u8FDB\u5236\u6570\u636E\u5E8F\u5217\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u7F13\u51B2\u6570\u636E\u5305\u62EC\u4F4D\u7F6E\uFF0C\u6CD5\u5411\u91CF\uFF0C\u7EB9\u7406\u5750\u6807\uFF0C\u9876\u70B9\u989C\u8272\u503C\u7B49\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u7F13\u51B2\u8FD8\u53EF\u4EE5\u5B58\u50A8\u4EFB\u4F55\u6570\u636E\uFF0C\u56E0\u4E3A\u5B83\u672C\u8D28\u5C31\u662F\u4E00\u6BB5 buffer"),
                        React.createElement(P, null, "\u800C\u5177\u4F53\u5230\u5982\u4F55\u4ECE \"\u7F13\u51B2\" \u5F97\u5230 \"vec4\" \u8FD9\u4EF6\u4E8B\uFF0C\u5219\u9700\u8981\u901A\u8FC7 js \u8FDB\u884C\u5B9A\u4E49\uFF1A"),
                        React.createElement(Code, { lang: "glsl", source: `
        const canvas = document.createElement('canvas')!;
        const gl = canvas.getContext('webgl')!;

        // 开辟一块缓冲
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // 取得访问到 position 变量的 location
        const positionAttributeLocation = gl.getAttribLocation(
          program, // program 为 glsl 编译后的实例, 这里先忽略
          'position' // 对应 glsl 程序里的 position 变量名
        );

        // 用 ts 定义顶点数据 (x,y,z) 一共 3 个点, 数组长度为 9 
        const vertices: number[] = [
          -1,  1,  0,
          -1, -1,  0,
           1, -1,  0,
        ];

        // 写入到缓冲 buffer 中
        gl.bufferData(
          gl.ARRAY_BUFFER,            // 表明是 ARRAY_BUFFER
          new Float32Array(vertices), // 构造为 Float32Array 格式
          gl.STATIC_DRAW,             // 我们不会经常改这个顶点数据
        );

        // 启用 position 属性
        gl.enableVertexAttribArray(positionAttributeLocation);

        // 告诉如何从缓冲中取值并写到 position 变量上
        gl.vertexAttribPointer(
          positionAttributeLocation,
          3, // vertices 数组中每三个赋值到 vec4 position 上
             // 因此会少一个 w, glsl 会补一个默认值 0
          gl.FLOAT, // 浮点类型
          false,    // 不需要归一化数据
          0,        // 每次迭代运行运动多少内存到下一个数据开始点
                    // 这里 0 代表 单位数量 * 每个单位占用内存 sizeof(type)
          0         // 从缓冲起始位置开始读取
        );
      ` }),
                        React.createElement(P, null, "\u53EF\u4EE5\u770B\u89C1\uFF0C\u4E00\u822C\u7684\u505A\u6CD5\u662F\u5229\u7528 js \u5B9A\u4E49\u9876\u70B9\u6570\u636E\u4F20\u5165\u7F13\u51B2\uFF0C\u5E76\u5B9A\u4E49\u5C5E\u6027\u83B7\u53D6\u65B9\u5F0F\uFF0C\u901A\u5E38\u5B9A\u4E49\u4E3A\u4E09\u4E2A\u4E09\u4E2A\u7684\u83B7\u53D6\uFF0C\u6700\u540E\u5728\u9876\u70B9\u7740\u8272\u5668\u4E2D\u5C31\u53EF\u4EE5\u4F7F\u7528 position \u53D8\u91CF\u4E86"),
                        React.createElement(H2, { id: "glsl-gl_Position" }, "gl_Position"),
                        React.createElement(P, null, "\u901A\u8FC7\u8D4B\u503C\u5185\u7F6E\u53D8\u91CF gl_Position \u6765\u544A\u8BC9\u5916\u90E8\u672C\u6B21\u9876\u70B9\u53D8\u6362\u540E\u7684\u7ED3\u679C, \u5728\u8FD9\u91CC\u53EF\u4EE5\u770B\u89C1\u6211\u4EEC\u6CA1\u6709\u505A\u4EFB\u4F55\u9876\u70B9\u53D8\u6362\uFF0C\u76F4\u63A5\u5C06\u4ECE\u7F13\u51B2\u5F97\u5230\u7684\u9876\u70B9\u900F\u4F20\u51FA\u53BB\u4E86\u3002")),
                    React.createElement(H1Block, { id: "webgl-wh-render-ideas", title: "WenGL \u7ED8\u5236\u601D\u8DEF" },
                        React.createElement(P, null, "\u6839\u636E\u524D\u6587\u63D0\u5230\u7684\u6E32\u67D3\u7BA1\u7EBF\u8FDB\u884C\u601D\u8003\uFF0C\u7528\u4E09\u4E2A\u9876\u70B9\u7ED8\u5236\u51FA\u4E09\u89D2\u5F62\uFF0C\u7136\u540E\u5229\u7528\u7247\u6BB5\u7740\u8272\u5668\u968F\u673A\u586B\u5145\u4E09\u89D2\u5F62\u5373\u53EF"),
                        React.createElement(ImgDynamic, { file: fileWebglWhRenderIdeas }),
                        React.createElement(P, null, "\u4F60\u53EF\u80FD\u4F1A\u95EE\u4E09\u89D2\u5F62\u4E0D\u5BF9\uFF0C\u90A3\u4E48\u53EF\u4EE5\u518D\u52A0\u4E00\u4E2A\u4E09\u89D2\u5F62\u6784\u6210\u4E00\u4E2A\u6B63\u65B9\u5F62\u3002")),
                    React.createElement(H1Block, { id: "white-noise-vertex-shader", title: "\u767D\u566A\u58F0\u9876\u70B9\u7740\u8272\u5668" },
                        React.createElement(P, null, "\u56E0\u4E3A\u4E0D\u9700\u8981\u4EC0\u4E48\u7279\u6B8A\u7684\u9876\u70B9\u5904\u7406\uFF0C\u6240\u4EE5\u9876\u70B9\u7740\u8272\u5668\u53EA\u9700\u8981\u4ECE\u7F13\u51B2\u4E2D\u53D6\u5F97\u5BF9\u5E94\u70B9\u5373\u53EF"),
                        React.createElement(Code, { lang: "glsl", source: shaderVertexSource })),
                    React.createElement(H1Block, { id: "white-noise-fragment-shader", title: "\u767D\u566A\u58F0\u7247\u6BB5\u7740\u8272\u5668" },
                        React.createElement(Code, { lang: "glsl", source: shaderFragmentSource })),
                    React.createElement(H1Block, { id: "ts-webgl-programming", title: "WebGL \u7F16\u7A0B" },
                        React.createElement(Code, { lang: "ts", source: props.fileWhiteNoiseWebgl }),
                        React.createElement(P, null, "\u6700\u540E new WhiteNoiseWebgl() \u5E76\u8C03\u7528 init \u5373\u53EF"),
                        React.createElement(Code, { lang: "ts", source: `
        import { whiteNoiseWebgl } from './white-noise-webgl';

        const canvas = document.createElement('canvas')!
        document.body.appendChild(canvas);
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight / 2;

        const instance = new whiteNoiseWebgl();
        instance.init(canvas);
      ` }),
                        React.createElement(P, { center: true },
                            React.createElement("canvas", { ref: refEnd, height: initialHeight })),
                        React.createElement(Button, { icon: "play", onClick: whiteNoiseWebglEnd.play }, "\u64AD\u653E")),
                    React.createElement(H1Block, { id: "links", title: "\u53C2\u8003" },
                        React.createElement(P, null),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://webglfundamentals.org/webgl/lessons/zh_cn/" }, "WebGL \u7406\u8BBA\u57FA\u7840 - \u4E2D\u6587\u7248")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://zhuanlan.zhihu.com/p/465212097" }, "WebGL - \u624B\u6293\u624B\u68B3\u7406\u6E32\u67D3\u7BA1\u7EBF\u6D41\u7A0B")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://zhuanlan.zhihu.com/p/438742595" }, "\u521D\u8BC6 WebGL \uFF1A\u6E32\u67D3\u7BA1\u7EBF"))));
            });
            // https://webglfundamentals.org/webgl/lessons/zh_cn/
            // https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-shaders-and-glsl.html

        })
    };
}));
