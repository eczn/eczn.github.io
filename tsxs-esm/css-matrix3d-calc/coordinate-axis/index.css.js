System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      var cssCoordinateAxis = exports('default', ":root {\n  --colorAxisX: rgb(204, 28, 28);\n  --colorAxisY: rgb(19, 145, 29);\n}\n\n.coordinate-axis-main {\n  display: inline-block;\n  position: relative;\n  z-index: -999;\n}\n\n.coordinate-axis-main > * {\n  position: absolute;\n}\n\n.axis-x { background-color: var(--colorAxisX); font-family: serif; }\n.axis-x::before {\n  content: \"x\";\n  display: inline-block;\n  position: absolute;\n  right: 0.5em;\n  top: 0.5em;\n  color: var(--colorAxisX);\n  line-height: 0;\n}\n.axis-x::after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  /* right: -1px; */\n  /* right: 0; */\n  left: 100%;\n  top: 0;\n  width: 0;\n  height: 0;\n  transform: translateY(-50%);\n\tborder-style: solid;\n  border-color: transparent;\n  border-width: 6px 0 6px 6px;\n  border-left-color: var(--colorAxisX);\n}\n\n.axis-y { background-color: var(--colorAxisY); font-family: serif; }\n.axis-y::before {\n  content: \"y\";\n  display: inline-block;\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  color: var(--colorAxisY);\n  line-height: 0;\n}\n.axis-y::after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  left: -6px;\n  /* top: -1px; */\n  top: -6px;\n  width: 0;\n  height: 0;\n  transform: translateX(.5px);\n  border-bottom: 6px solid var(--colorAxisY);\n  border-right: 6px solid transparent;\n  border-left: 6px solid transparent;\n}\n\n\n.coordinate-point {\n  width: 0;\n  height: 0;\n  border: .25em solid #000;\n  border-radius: 1em;\n  transform: translate(-.25em, .25em);\n}\n.coordinate-point-name {\n  font-size: 80%;\n  display: inline-block;\n  line-height: 0;\n  margin-left: .5em;\n  transform: translate(0, -0.5em);\n  white-space: nowrap;\n}\n\n.coordinate-zero {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.coordinate-zero > * { position: absolute; }\n\n");

    })
  };
}));
//# sourceMappingURL=index.css.js.map
