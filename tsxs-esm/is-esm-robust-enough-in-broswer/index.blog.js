System.register(['react', 'rally/@@', './end-txt.js', './caniuse-esm.png.js', './resolve-path-by-bundler.png.js'], (function (exports) {
    'use strict';
    var React, Col, P, Code, H1Block, ImgDynamic, Quote, Float, metaBeauty, EndText, fileCaniuse, fileResolvePathByBundler;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            Col = module.Col;
            P = module.P;
            Code = module.Code;
            H1Block = module.H1Block;
            ImgDynamic = module.ImgDynamic;
            Quote = module.Quote;
            Float = module.Float;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            EndText = module.default;
        }, function (module) {
            fileCaniuse = module.default;
        }, function (module) {
            fileResolvePathByBundler = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'is-esm-robust-enough-in-broswer',
                title: '浏览器内的 ESM 是否已足够强大',
                author: 'eczn',
                time: new Date('2022-01-04 23:33'),
            }));
            async function initialProps(context) {
                return {
                    codeEndText: await context.readText('./end-txt.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                const [counter, setCounter] = React.useState(0);
                const inc = () => setCounter(n => n + 1);
                return React.createElement(React.Fragment, null,
                    React.createElement(Col, { units: [5, 10] },
                        React.createElement(P, null, "\u6D4F\u89C8\u5668\u5185\u8FD0\u884C\u539F\u751F ESM \u4E00\u76F4\u662F\u4F17\u591A Web \u4F6C\u6240\u8FFD\u6C42\u7684\uFF0C\u5C24\u5176\u4ECE\u53BB\u5E74 vite \u7684\u6D41\u884C\u5F00\u59CB\uFF0C\u8D8A\u6765\u8D8A\u591A\u4EBA\u5728\u6D4F\u89C8\u5668\u5185\u76F4\u63A5\u7528 ESM \u8FDB\u884C\u5F00\u53D1\uFF0C\u800C\u7EA6\u83AB\u4E00\u5E74\u540E\u7684\u73B0\u5728\uFF0C2022 \u5E74\uFF0C\u6211\u4EEC\u80FD\u5426\u6709\u628A\u63E1\u76F4\u63A5\u5C06 ESM \u7279\u6027\u7528\u4E8E\u751F\u4EA7\u73AF\u5883 ?"),
                        React.createElement(Code, { lang: "tsx", source: `
        import React from 'react';
        import ReactDOM from 'react-dom';

        function App() {
          return (
            <div>生产环境上 ESM</div>
          )
        }

        ReactDOM.render(<App />, $('#app')!);
      ` })),
                    React.createElement(H1Block, { id: "esm-compatibility", title: "ESM \u517C\u5BB9\u6027\u600E\u4E48\u6837" },
                        React.createElement(P, null, "\u5F88\u591A\u4EBA\u89C9\u5F97\u517C\u5BB9\u6027\u662F\u6700\u5927\u7684\u95EE\u9898\uFF0C\u4F46\u5B9E\u9645\u4E0A\u65F6\u95F4\u95EE\u9898\u5176\u5B9E\u5E76\u4E0D\u662F\u95EE\u9898\u3002\u5177\u4F53\u67E5\u9605\u4E86 caniuse \u770B\u4E86\u4E0B\uFF0C\u6574\u4F53\u8FD8\u7B97\u53EF\u4EE5\uFF0C\u4F46\u8FD8\u4E0D\u591F\uFF0C\u5E94\u8BE5\u8981 99%+ \u624D\u6BD4\u8F83\u9002\u5408\u4E0A\u3002"),
                        React.createElement(P, null, "\u770B\u6837\u5B50 ESM \u5168\u9762\u6D41\u884C\u4F3C\u4E4E\u53EA\u662F\u65F6\u95F4\u95EE\u9898\u4E86\uFF0C\u5404\u5927\u5382\u5546\u90FD\u652F\u6301\u4E86\u597D\u4E00\u6BB5\u65F6\u95F4\u4E86\u3002"),
                        React.createElement(ImgDynamic, { file: fileCaniuse, style: {
                                width: '100%',
                                display: 'block',
                                columnSpan: 'all',
                                marginTop: '1em',
                                marginBottom: '1em',
                            } }),
                        React.createElement(P, null, "\u6BD4\u8D77\u517C\u5BB9\u6027\uFF0C\u66F4\u9EBB\u70E6\u7684\u662F\u5F88\u591A\u6A21\u5757\u5E76\u6CA1\u6709 ESM \u5BFC\u51FA\uFF0C\u76F4\u63A5\u8D70\u7684 CJS \u6253\u5305\uFF0C\u6839\u672C\u6CA1\u6CD5\u7528 \u2014\u2014 \u867D\u7136\u8FD9\u4E5F\u662F\u65F6\u95F4\u95EE\u9898\uFF0C\u56E0\u4E3A\u73B0\u5728\u793E\u533A\u5F88\u591A\u4EBA\u5728\u641E pure-esm-package \u4E86\uFF0C\u4E5F\u5C31\u662F\u7EAF ESM \u5BFC\u51FA\u7684\u6A21\u5757\uFF0C\u4E0D\u641E CJS \u4E86\uFF0C\u800C\u5176\u4E2D\u6709\u7684\u4EBA\u751A\u81F3\u662F\u76F4\u63A5\u641E pure-typescript-package \u4E86 \u2014\u2014 \u4E0D\u7F16\u8BD1\u76F4\u63A5\u5BFC\u51FA TS \u6E90\u7801")),
                    React.createElement(H1Block, { id: "esm-path-resolve", title: "ESM \u8DEF\u5F84\u89E3\u6790\u95EE\u9898" },
                        React.createElement(Col, { units: [7, 10] },
                            React.createElement(P, null, "ESM \u5728\u8DEF\u5F84\u89E3\u6790 (resolve) \u7684\u65F6\u5019\u5FC5\u987B\u8981\u6709\u53C2\u7167\uFF0C\u5426\u5219\u65E0\u6CD5\u89E3\u6790\uFF0C\u6BD4\u5982\u53F3\u8FB9\u7684 `./add.js`"),
                            React.createElement(Code, { lang: "js", source: `
          import add from './add.js';
          const result = add(1, 2, 3);
          console.log(result);
        ` })),
                        React.createElement(P, null, "\u6D4F\u89C8\u5668\u5FC5\u987B\u8981\u77E5\u9053\u5176\u4E2D\u7684 `.` \u662F\u4EC0\u4E48\u624D\u80FD\u6B63\u786E\u89E3\u6790\u51FA\u8FD9\u4E2A `./add.js` \u7684\u771F\u5B9E url \u94FE\u63A5\uFF0C\u6BD4\u65B9\u8BF4\u8FD9\u4E2A\u70B9\u53D6\u503C\u4E3A `example.com/js/` \u90A3\u4E48\u6700\u7EC8\u53EF\u4EE5\u89E3\u6790\u4E3A `example.com/js/add.js`"),
                        React.createElement(P, null, "\u5BF9\u4E8E\u6D4F\u89C8\u5668\u6765\u8BF4\u5F97\u5230\u53C2\u7167\u70B9\u5E76\u6700\u7EC8\u5F97\u5230\u8FD9\u6837\u7684\u5B8C\u6574 URL \u624D\u662F fetchable \u7684\u3001executable \u7684"),
                        React.createElement(Col, { units: [5.5, 5] },
                            React.createElement(Code, { lang: "jsx", source: `
          import React from 'react';
          import App from './app.js';

          const result = <App />;

          console.log(
            'res:', result
          );
        ` }),
                            React.createElement(P, null,
                                "\u7136\u800C\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC react \u7684\u5F15\u5165\u5E76\u6CA1\u6709\u70B9\uFF0C\u5B83\u4E0D\u662F\u4E00\u4E2A\u76F8\u5BF9\u8DEF\u5F84; \u50CF\u8FD9\u6837\u7684\u6A21\u5757\u79F0\u4E3A `\u88F8\u6A21\u5757 (bare module)` ",
                                React.createElement("br", null),
                                "\u5728 nodejs \u91CC\u88F8\u6A21\u5757\u901A\u5E38\u89E3\u6790\u5230 package.json \u76EE\u5F55\u6240\u5728\u7684 `node_modules/` \u4E0B ",
                                React.createElement("br", null),
                                "\u800C\u8FD9\u5E76\u4E0D\u662F\u6D4F\u89C8\u5668\u6807\u51C6\uFF0C\u800C\u662F npm \u6807\u51C6\uFF0C\u6211\u4EEC\u603B\u4E0D\u80FD\u89E3\u6790\u5230 `example.com/node_modules/react.js` \u5427?")),
                        React.createElement(Col, { units: [5, 10] },
                            React.createElement(P, null,
                                "\u4E3A\u4E86\u89E3\u51B3\u88F8\u6A21\u5757\u7684\u52A0\u8F7D\u95EE\u9898\uFF0CWeb \u5DE5\u4F5C\u7EC4\u63D0\u51FA\u4E86 import-maps \u7279\u6027\u4EE5\u5141\u8BB8\u5F00\u53D1\u8005\u5B9A\u4E49\u6A21\u5757\u548C URL \u7684\u6620\u5C04\u5173\u7CFB\u3002",
                                React.createElement("br", null),
                                "\u6BD4\u5982\u8FD9\u91CC\u8FD9\u4E2A\u5B9A\u4E49\u4E86 react \u89E3\u6790\u4E3A `HOST/node_modules/react`"),
                            React.createElement(Code, { lang: "html", source: `
          <script type="importmap">
          {
            "imports": {
              "react": "/node_modules/react",
              "lodash": "/node_modules/lodash",
            }
          }
          </script>
        ` })),
                        React.createElement(P, null, "import-map \u80FD\u641E\u5B9A\u5168\u90E8\u95EE\u9898\u5417\uFF1F\u5E76\u4E0D\u80FD\uFF0C\u6BD4\u5982\u89E3\u51B3\u4E0D\u4E86 ./add \u5230\u5E95\u662F add.js \u8FD8\u662F add/index.js \u7684\u95EE\u9898?"),
                        React.createElement(P, null, "\u957F\u4E45\u4EE5\u6765\uFF0C\u6211\u4EEC\u592A\u4E60\u60EF\u4E8E nodejs \u7684\u9988\u8D60\u4E86\uFF0CESM \u5728\u7F16\u8BD1\u6210 ES5 require \u7684\u60C5\u51B5\u4E0B\uFF0C\u4ECE\u6765\u90FD\u4E0D\u662F\u4E00\u4E2A\u9759\u6001\u8FC7\u7A0B\uFF0C\u5B83\u662F\u4E00\u4E2A\u52A8\u6001\u7684\u9012\u5F52\u8FC7\u7A0B\u3002\u66F4\u91CD\u8981\u7684\u662F\u975E js \u6A21\u5757\u7684 ESM \u5BFC\u5165\u7279\u5B9A\u540E\u7F00\u7684\u8FC7\u7A0B\u6BD4\u60F3\u8C61\u4E2D\u7684\u590D\u6742 \u2014\u2014 \u867D\u7136\u8FD9\u4E5F\u662F\u4E60\u4EE5\u4E3A\u5E38\u7684\u6280\u672F\u9988\u8D60 (webpack)"),
                        React.createElement(Code, { lang: "js", center: true, source: `
        import a from'./add';
        import aa from './add.js';
        import aaa from './add/index';
        import aaaa from './add/index.js';
        import aaaaa from './style.module.css';
        import aaaaaa from './style.module.css.js';
      ` }),
                        React.createElement(P, null, "\u9664\u6B64\u4E4B\u5916\u8FD8\u6709\u66F4\u52A0\u4E25\u8083\u7684\u95EE\u9898\uFF0C\u6807\u51C6\u5E76\u6CA1\u6709\u5B9A\u4E49 importmap \u662F\u624B\u5199\u7684\u8FD8\u662F auto-generated \u7684\uFF0C\u96BE\u9053\u8981\u624B\u5199 importmap ?"),
                        React.createElement(P, null, "\u5982\u679C\u662F\u624B\u5199\uFF0C\u6211\u5B81\u53EF\u4E0D\u7528\uFF1B\u5982\u679C\u662F\u751F\u6210\u7684\uFF0C\u8C01\u6765\u751F\u6210\uFF0Cwebpack \u5417\uFF1F\u4E00\u4E2A Web \u6807\u51C6\u663E\u7136\u4E0D\u5E94\u8BE5\u53CD\u5411\u4F9D\u8D56 webpack \u7B49\u6253\u5305\u5DE5\u5177")),
                    React.createElement(H1Block, { id: "non-js-module-import", title: "\u975E JS \u6A21\u5757\u5BFC\u5165" },
                        React.createElement(P, null, "\u4E5F\u5C31\u662F\u8BF4\u5982\u4F55\u5BFC\u5165 png \u540E\u7F00\u7684\u6587\u4EF6, \u8FD9\u4E5F\u662F webpack \u7684\u6280\u672F\u9988\u8D60"),
                        React.createElement(Code, { lang: "tsx", source: `
        import image from './image.png';
        console.log(image); // ?
      ` })),
                    React.createElement(H1Block, { id: "esm-is-not-very-good-for-production", title: "\u8FD8\u6CA1\u6709\u5F3A\u5927\u5230\u8DB3\u4EE5\u652F\u6491\u751F\u4EA7\u73AF\u5883" },
                        React.createElement(EndText, null),
                        React.createElement(Code, { lang: "tsx", source: props.codeEndText }),
                        React.createElement(P, null, "\u5728\u5177\u4F53\u5B9E\u73B0\u7684\u65F6\u5019\u4E0D\u53EF\u907F\u514D\u5730\u9047\u5230\u4E86\u524D\u6587\u6240\u8BF4\u7684\u95EE\u9898\uFF0C\u5927\u6982\u89E3\u51B3\u4E86\u4E00\u6CE2\uFF0C\u6838\u5FC3\u8FD8\u662F\u5728\u4E8E\u5982\u4F55\u5904\u7406\u52A8\u6001\u89E3\u6790"),
                        React.createElement(Quote, null, "resolve \u4ECE\u6765\u90FD\u4E0D\u662F\u4E00\u4E2A\u9759\u6001\u8FC7\u7A0B, \u8BFB\u53D6\u7279\u5B9A\u8DEF\u5F84\u7684\u8FC7\u7A0B\u6BD4\u60F3\u8C61\u4E2D\u7684\u590D\u6742")),
                    React.createElement(H1Block, { id: "resolve-path-by-bundler", title: "\u6784\u5EFA\u5668\u8865\u5168 resolve \u7ED3\u679C" },
                        React.createElement(P, null, "\u6784\u5EFA\u671F\u95F4\u8865\u5168\u76F8\u5173 extension (\u8FD9\u91CC\u6709\u4E2A\u5751 tsc \u4E0D\u652F\u6301\u8865\u5168\u8FD9\u4E2A extension\uFF0C\u6240\u4EE5\u6211\u6362 rollup \u4E86\uFF09"),
                        React.createElement(ImgDynamic, { file: fileResolvePathByBundler })),
                    React.createElement(H1Block, { id: "systemjs", title: "\u4F7F\u7528 System.js" },
                        React.createElement(P, null, "System.js \u662F\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE\uFF0C\u7528\u4E8E polyfill ESM\uFF0C\u8BA9\u8001\u6D4F\u89C8\u5668\u4E5F\u80FD\u652F\u6301 ESM \u6A21\u5757\u52A0\u8F7D, TypeScript/Rollup \u5728\u7F16\u8BD1\u6253\u5305\u7684\u65F6\u5019\u53EF\u4EE5\u914D\u7F6E\u8F93\u51FA\u4E3A System.js \u6A21\u5757\uFF0C\u6BD4\u5982\uFF1A"),
                        React.createElement(Code, { lang: "ts", source: `
        // ./src/test.ts
        import React from 'react';
        export function Hello() {
          return <div>hello</div>;
        }

        //// 编译后变为 ////

        // ./dist/test.js
        System.register(["react"], (exports_1, context_1) => {
          "use strict";
          var react_1;
          var __moduleName = context_1 && context_1.id;
          function Hello() {
            return react_1.default.createElement(
              "div", null, "hello"
            );
          }
          exports_1("Hello", Hello);
          return {
            setters: [
              function (react_1_1) {
                react_1 = react_1_1;
              }
            ],
            execute: function () {
            }
          };
        });
      ` }),
                        React.createElement(P, null, "\u7136\u540E\u5728\u6D4F\u89C8\u5668\u6216\u8005 nodejs \u73AF\u5883\u4E0B\u5C31\u53EF\u4EE5\u901A\u8FC7 systemjs \u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757\u4E86"),
                        React.createElement(Code, { lang: "tsx", filename: "browser.tsx", source: `
        const { Hello } = await System.import('./dist/test.js');
        // import { Hello } from './dist/test';
        console.log(<Hello />);
      ` })),
                    React.createElement(H1Block, { id: "dynamic-inject", title: "\u88F8\u6A21\u5757\u8FD0\u884C\u65F6\u6CE8\u5165" },
                        React.createElement(Float, { lr: "right", width: "55" },
                            React.createElement(Code, { lang: "tsx", source: `
          // my-blog.tsx
          import { Hello } from 'rally/@@';
          export default () => (
            // 运行时注入
            <Hello />
          );
        ` })),
                        React.createElement(P, null,
                            "\u901A\u8FC7 systemjs \u786C\u70B9 'rally/@@' \u5BF9\u5E94\u6A21\u5757\uFF0C\u4EE5\u6B64\u6765\u6CE8\u5165\u7EC4\u4EF6\u5E2E\u52A9\u7F16\u5199\u5185\u5BB9\u3002 ",
                            React.createElement("br", null),
                            "\u800C\u501F\u52A9\u4E8E\u5B8C\u5168\u7684 js \u8FD0\u884C\u65F6\uFF0C\u5199\u6587\u7AE0\u7684\u8868\u73B0\u529B\u5927\u5927\u63D0\u9AD8\u4E86\uFF1A",
                            React.createElement("span", { onClick: inc },
                                "\u300C\u70B9\u51FB\u8BA1\u6570\u5668 n=",
                                counter,
                                "\u300D"))),
                    React.createElement(H1Block, { id: "ssr-and-hotreload", title: "\u76F4\u51FA\u548C hotreload" },
                        React.createElement(P, null, "\u76F4\u51FA\u7684\u8BDD\u7528 system.js \u5C06\u7F16\u8BD1\u540E\u7684\u7EC4\u4EF6\u8BFB\u53D6\u5E76\u6E32\u67D3\u5373\u53EF\uFF0C\u540C\u65F6\u6CE8\u610F\u540C\u6784\u7684\u95EE\u9898\uFF0C\u4F46\u8FD9\u91CC\u901A\u8FC7 system.js \u5F15\u5165 js \u7684\u8BDD\u4F1A\u8BA9 system.js cache \u4F4F\u6587\u4EF6\u5BFC\u81F4\u4E0D\u80FD hot reload"),
                        React.createElement(Col, { units: [5, 8] },
                            React.createElement(P, null, "\u5BF9\u6BD4 .md \u6587\u4EF6\uFF0C\u5728 md \u88AB\u6539\u5199\u7684\u65F6\u5019\u91CD\u65B0\u8DD1\u7F16\u8BD1\u5C31\u53EF\u4EE5\u5B9E\u73B0 hotreload\uFF0C\u4F46\u8FD9\u4E2A\u529E\u6CD5\u5BF9 tsx \u535A\u6587\u4E0D\u592A\u9002\u7528\uFF0C\u6267\u884C\u8FC7\u7684\u6A21\u5757\u4F1A cached , \u4E0D\u4F1A\u91CD\u65B0\u6267\u884C\u3002"),
                            React.createElement(Code, { lang: "tsx", source: `
          const a = await import('./add');
          // 改了 add.tsx 后, 再次 import
          const b = await import('./add');
          console.log(
            a === b // true
          );
        ` })),
                        React.createElement(Col, null,
                            React.createElement(Code, { lang: "bash", source: `
          # 起子进程并收集 stdout
          # 并用 JSON.parse 解析它
          $ node relax-esm-node.js
          [{略}, "<div>略</div>"]
        ` }),
                            React.createElement(P, null, "\u5728\u67E5\u9605\u4E86 Systemjs \u6E90\u7801\u540E\u53D1\u73B0\u5B83\u7684 cache \u662F\u5185\u7F6E\u7684\uFF0C\u6CA1\u6709\u66B4\u9732\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6CA1\u529E\u6CD5\u505A\u5230\u5220\u6389 cache \u7684\u65B9\u5F0F\u91CD\u65B0 reload\uFF0C\u6700\u540E\u7684\u89E3\u51B3\u529E\u6CD5\u662F\u8D77\u5B50\u8FDB\u7A0B\u6765\u5B9E\u73B0\u52A0\u8F7D\u548C\u505A html \u76F4\u51FA\u4EE5\u6B64\u5B9E\u73B0 hotreload"))),
                    React.createElement(H1Block, { id: "ending", title: "\u672B\u5C3E" },
                        React.createElement(P, null, "\u603B\u7684\u6765\u8BF4\uFF0C\u73B0\u9636\u6BB5 ESM \u8FD8\u4E0D\u591F\u5F3A\u5927\u5230\u8DB3\u4EE5\u652F\u6491\u751F\u4EA7\u73AF\u5883\uFF0C\u5982\u679C\u771F\u7684\u60F3\u4E0A\uFF0C\u5EFA\u8BAE\u914D\u5408 systemjs \u6765\u505A\uFF0C\u5C24\u5176\u9700\u8981\u6CE8\u610F\u4ECB\u5165\u52A8\u6001\u7684 resolve \u8FC7\u7A0B\u3002")));
            });

        })
    };
}));
