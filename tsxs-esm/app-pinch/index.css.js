System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      var css = exports('default', ".rapp-pinch {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid #BBB;\n  overflow: hidden;\n}\n\n.rapp-pinch-file-label {\n  position: absolute;\n  bottom: 2em;\n  width: 80%;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  background-color: #1f61a9;\n  border-radius: 4px;\n  padding: 0.75em 0;\n  color: #FFF;\n  max-width: 300px;\n}\n\n.rapp-pinch-file-label:active {\n  background-color: #0b3969;\n}\n\n.rapp-pinch-preview {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: grab;\n}\n.rapp-pinch-preview ._canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 0% 0%;\n  border: 1px solid #555;\n  box-sizing: border-box;\n}\n.rapp-pinch-preview:active {\n  cursor: grabbing;\n}\n\n.rapp-pinch-preview-bg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n");

    })
  };
}));
