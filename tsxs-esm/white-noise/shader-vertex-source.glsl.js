System.register([], (function (exports) {
	'use strict';
	return {
		execute: (function () {

			var shaderVertexSource = exports('default', "attribute vec4 position;\nvoid main() {\n  gl_Position = position;\n}\n");

		})
	};
}));
