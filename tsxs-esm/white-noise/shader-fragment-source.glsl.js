System.register([], (function (exports) {
	'use strict';
	return {
		execute: (function () {

			var shaderFragmentSource = exports('default', "// 定义片段着色器\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float u_rand;\nuniform float u_size;\n\n// 随机输出一个在 0 和 1 之间的数\n// 这是一个很有意思的随机数生成,\n// 具体原理可以 google 下\nfloat random2d(vec2 co) {\n  float a = 12.9898;\n  float b = 78.233;\n  float c = 43758.5453;\n  // dot 为点乘\n  // dt = (co.x * a) + (co.y * b)\n  float dt = dot(co.xy, vec2(a,b));\n  float sn = mod(dt, 3.14);\n  return fract(sin(sn) * c);\n}\n\n// 将 x 定在 x - (x % u_size) 区间内\nfloat round(float x) {\n  return x - mod(x, u_size);\n}\n\nvoid main(){\n  // gl_FragCoord 代表当前处理的片元坐标\n  // round函数为 四舍五入\n  vec2 coord = vec2(\n    round(gl_FragCoord.x),\n    round(gl_FragCoord.y)\n  );\n\n  float num = random2d(\n    vec2(\n      coord.x * u_rand,\n      coord.y * u_rand\n    )\n  );\n\n  // num 大于 0.5 的话归到 1.0 否则归到 0\n  float p = (num > 0.5) ? 1.0 : 0.0;\n\n  // 构成一个 vec4 并通过 gl_FragColor 输出 (rgba 四个值)\n  gl_FragColor = vec4(p, p, p, 1.0);\n}\n");

		})
	};
}));
