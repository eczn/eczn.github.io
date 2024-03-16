System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      var cssClickWheel = exports('default', ".clickwheel-demo {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1em;\n  text-align: center;\n}\n\n/* .clickwheel-demo > * {\n  display: inline-block;\n  margin: 0 1em;\n  vertical-align: middle;\n} */\n\n.clickwheel-circle {\n  position: relative;\n  display: inline-block;\n  width: 20em;\n  height: 20em;\n  background-color: #DDD;\n  border-radius: 100%;\n  touch-action: none;\n}\n\n.clickwheel-circle::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 0.5em;\n  width: 0.5em;\n  background: #B66;\n  border-radius: 100%;\n}\n");

    })
  };
}));
