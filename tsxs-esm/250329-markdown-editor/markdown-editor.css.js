System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      var css = exports('default', ".meditor {\n  padding: .5em 1em;\n  box-sizing: border-box;\n  white-space: pre;\n  line-height: 1.5;\n  border: 1px solid #DDD;\n  border-radius: 4px;\n  appearance: none;\n}\n\n.meditor-block {}\n\n.meditor-block-header {\n  font-weight: bolder;\n  &::before {\n    display: inline-block;\n    margin-right: .5em;\n    color: #40baba;\n  }\n\n  &._level-1 { &::before { content: \"#\"; }      font-size: 200%;   }\n  &._level-2 { &::before { content: \"##\"; }     font-size: 175%;   }\n  &._level-3 { &::before { content: \"###\"; }    font-size: 150%;   }\n  &._level-4 { &::before { content: \"####\"; }   font-size: 125%;   }\n  &._level-5 { &::before { content: \"#####\"; }  font-size: 100%;   }\n  &._level-6 { &::before { content: \"######\"; } font-size: 100%;   }\n}\n\n.meditor-block-paragraph {\n  min-height: 1.5rem;\n  &::before {\n    content: \"\";\n  }\n}\n\n");

    })
  };
}));
//# sourceMappingURL=markdown-editor.css.js.map
