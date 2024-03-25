System.register(['react', 'rally/@@', './picexample.jpg.js'], (function (exports) {
    'use strict';
    var React, P, H1Block, H2, H3, ImgDynamic, Code, Col, Numbering, Quote, Formula, WindowApp, WindowAppIframe, metaBeauty, filePicExample;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            H2 = module.H2;
            H3 = module.H3;
            ImgDynamic = module.ImgDynamic;
            Code = module.Code;
            Col = module.Col;
            Numbering = module.Numbering;
            Quote = module.Quote;
            Formula = module.Formula;
            WindowApp = module.WindowApp;
            WindowAppIframe = module.WindowAppIframe;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            filePicExample = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'test-tsx-article-for-new-version',
                title: '新版博客测试文章 (.tsx)',
                author: 'eczn',
                time: new Date('2000-01-01 00:00:02'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u4F60\u597D\uFF0C\u6B22\u8FCE\u6765\u5230\u672C\u7AD9\uFF0C\u672C\u6587\u4ECB\u7ECD `\u52A8\u6001\u535A\u6587` \u7684\u63D0\u4F9B\u7684\u7EC4\u4EF6\u5E93\uFF0C\u4E5F\u540C\u65F6\u4F5C\u4E3A\u7AD9\u70B9\u7684\u6837\u5F0F\u6D4B\u8BD5\u7528\u4F8B\u3002")),
                    React.createElement(H1Block, { id: "h1-title", title: "\u6807\u9898 <H1 />" },
                        React.createElement(P, null, "\u80FD\u652F\u6301\u652F\u6301\u591A\u7EA7\u6807\u9898, \u9664\u4E86\u4E0A\u9762\u7684 H1 \u5916\uFF0C\u8FD8\u6709 H2 H3"),
                        React.createElement(H2, null, "\u8FD9\u662F H2"),
                        React.createElement(H3, null, "\u8FD9\u662F H3")),
                    React.createElement(H1Block, { id: "image", title: "\u56FE\u7247 <ImgDynamic />" },
                        React.createElement(ImgDynamic, { file: filePicExample }),
                        React.createElement(Code, { lang: 'tsx', source: `
        import filePicExample from './pic-example.png';
        <ImgDynamic file={filePicExample} />
      ` })),
                    React.createElement(H1Block, { id: "list", title: "\u624B\u52A8\u591A\u680F\u5E03\u5C40 <Col>" },
                        React.createElement(P, null, "\u5229\u7528\u8FD9\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u4E0B\u9762\u7684\u5E03\u5C40"),
                        React.createElement(Col, { units: [1, 2, 1] },
                            React.createElement(P, { style: { background: '#f49292' } }, "\u82F9\u679C"),
                            React.createElement(P, { style: { background: '#f3ec8e', height: '3em' } }, "\u9999\u8549"),
                            React.createElement(P, { style: { background: '#e6eff3' } }, "\u725B\u5976")),
                        React.createElement(P, null, "\u4F46\u662F\u9700\u8981\u6CE8\u610F\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u8C03\u6574\u5BBD\u5EA6\uFF0C\u53EA\u662F\u901A\u8FC7 units \u6765\u5BF9 childs \u5B9E\u73B0\u5747\u7B49\u5206\uFF0C\u4E0A\u8FF0\u6548\u679C\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: `
        <Col units={[1, 2, 1]}>
          <P style={{ background: '#f49292' }}>苹果</P>
          <P style={{ background: '#f3ec8e', height: '4em' }}>香蕉</P>
          <P style={{ background: '#e6eff3' }}>牛奶</P>
        </Col>
      ` })),
                    React.createElement(H1Block, { id: "paragraph", title: "\u6BB5\u843D <P />" },
                        React.createElement(P, null, "\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u7EC4\u4EF6\u6765\u5C55\u793A\u6BB5\u843D\u3002"),
                        React.createElement(H2, null, "\u957F\u6587\u672C\u793A\u8303"),
                        React.createElement(P, null,
                            "\u5B54\u4E59\u5DF1\u662F\u7AD9\u7740\u559D\u9152\u800C\u7A7F\u957F\u886B\u7684\u552F\u4E00\u7684\u4EBA\u3002\u4ED6\u8EAB\u6750\u5F88\u9AD8\u5927\uFF1B\u9752\u767D\u8138\u8272\uFF0C\u76B1\u7EB9\u95F4\u65F6\u5E38\u5939\u4E9B\u4F24\u75D5\uFF1B\u4E00\u90E8\u4E71\u84EC\u84EC\u7684\u82B1\u767D\u7684\u80E1\u5B50\u3002\u7A7F\u7684\u867D\u7136\u662F\u957F\u886B\uFF0C\u53EF\u662F\u53C8\u810F\u53C8\u7834\uFF0C\u4F3C\u4E4E\u5341\u591A\u5E74\u6CA1\u6709\u8865\uFF0C\u4E5F\u6CA1\u6709\u6D17\u3002\u4ED6\u5BF9\u4EBA\u8BF4\u8BDD\uFF0C\u603B\u662F\u6EE1\u53E3\u4E4B\u4E4E\u8005\u4E5F\uFF0C\u6559\u4EBA\u534A\u61C2\u4E0D\u61C2\u7684\u3002\u56E0\u4E3A\u4ED6\u59D3\u5B54\uFF0C\u522B\u4EBA\u4FBF\u4ECE\u63CF\u7EA2\u7EB8\u4E0A\u7684\u201C\u4E0A\u5927\u4EBA\u5B54\u4E59\u5DF1\u201D\u8FD9\u534A\u61C2\u4E0D\u61C2\u7684\u8BDD\u91CC\uFF0C\u66FF\u4ED6\u53D6\u4E0B\u4E00\u4E2A\u7EF0\u53F7\uFF0C\u53EB\u4F5C\u5B54\u4E59\u5DF1\u3002  ",
                            React.createElement("br", null),
                            "\u5B54\u4E59\u5DF1\u4E00\u5230\u5E97\uFF0C\u6240\u6709\u559D\u9152\u7684\u4EBA\u4FBF\u90FD\u770B\u7740\u4ED6\u7B11\uFF0C\u6709\u7684\u53EB\u9053\uFF0C\u201C\u5B54\u4E59\u5DF1\uFF0C\u4F60\u8138\u4E0A\u53C8\u6DFB\u4E0A\u65B0\u4F24\u75A4\u4E86\uFF01\u201D\u4ED6\u4E0D\u56DE\u7B54\uFF0C\u5BF9\u67DC\u91CC\u8BF4\uFF0C\u201C\u6E29\u4E24\u7897\u9152\uFF0C\u8981\u4E00\u789F\u8334\u9999\u8C46\u3002\u201D\u4FBF\u6392\u51FA\u4E5D\u6587\u5927\u94B1\u3002\u4ED6\u4EEC\u53C8\u6545\u610F\u7684\u9AD8\u58F0\u56B7\u9053\uFF0C\u201C\u4F60\u4E00\u5B9A\u53C8\u5077\u4E86\u4EBA\u5BB6\u7684\u4E1C\u897F\u4E86\uFF01\u201D\u5B54\u4E59\u5DF1\u7741\u5927\u773C\u775B\u8BF4\uFF0C\u201C\u4F60\u600E\u4E48\u8FD9\u6837\u51ED\u7A7A\u6C61\u4EBA\u6E05\u767D\u2026\u2026\u201D\u201C\u4EC0\u4E48\u6E05\u767D\uFF1F\u6211\u524D\u5929\u4EB2\u773C\u89C1\u4F60\u5077\u4E86\u4F55\u5BB6\u7684\u4E66\uFF0C\u540A\u7740\u6253\u3002\u201D\u5B54\u4E59\u5DF1\u4FBF\u6DA8\u7EA2\u4E86\u8138\uFF0C\u989D\u4E0A\u7684\u9752\u7B4B\u6761\u6761\u7EFD\u51FA\uFF0C\u4E89\u8FA9\u9053\uFF0C\u201C\u7A83\u4E66\u4E0D\u80FD\u7B97\u5077\u2026\u2026\u7A83\u4E66\uFF01\u2026\u2026\u8BFB\u4E66\u4EBA\u7684\u4E8B\uFF0C\u80FD\u7B97\u5077\u4E48\uFF1F\u201D\u63A5\u8FDE\u4FBF\u662F\u96BE\u61C2\u7684\u8BDD\uFF0C\u4EC0\u4E48\u201C\u541B\u5B50\u56FA\u7A77\u201D\uFF0C\u4EC0\u4E48\u201C\u8005\u4E4E\u201D\u4E4B\u7C7B\uFF0C\u5F15\u5F97\u4F17\u4EBA\u90FD\u54C4\u7B11\u8D77\u6765\uFF1A\u5E97\u5185\u5916\u5145\u6EE1\u4E86\u5FEB\u6D3B\u7684\u7A7A\u6C14\u3002"),
                        React.createElement(H2, null, "\u884C\u5185\u5143\u7D20"),
                        React.createElement(P, null, "\u6BB5\u843D\u5185\u652F\u6301\u4E00\u4E9B\u884C\u5185\u5143\u7D20\u7684\u7279\u6027\u3002"),
                        React.createElement(Col, { units: [2, 1] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, { sinking: true }, "\u652F\u6301\u9996\u884C\u7F29\u8FDB, \u4E5F\u652F\u6301\u53F3\u8FB9\u8FD9\u4E9B Markdown \u7684\u6700\u4F73\u5B9E\u8DF5"),
                                React.createElement(P, null, "\u8FD9\u4E9B\u884C\u5185\u5143\u7D20\u7684\u5177\u4F53\u8C03\u7528\u65B9\u5F0F\u5982\u4E0B\u6240\u793A")),
                            React.createElement(Numbering, null,
                                React.createElement(P, null, "`\u9AD8\u4EAE`"),
                                React.createElement(P, null, "_\u659C\u4F53_"),
                                React.createElement(P, null, "**\u52A0\u7C97**"),
                                React.createElement(P, null, "_**`\u659C\u4F53\u52A0\u7C97\u9AD8\u4EAE`**_"))),
                        React.createElement(Code, { lang: 'tsx', source: `
        <Col units={[2, 1]}>
          <>
            <P sinking>支持首行缩进, 也支持右边这些 Markdown 的最佳实践</P>
            <P>这些行内元素的具体调用方式如下所示</P>
          </>
          <Numbering> // 这是列表组件, 后面会提到
            <P>\`高亮\`</P>
            <P>_斜体_</P>
            <P>**加粗**</P>
            <P>_**\`斜体加粗高亮\`**_</P>
          </Numbering>
        </Col>
      ` })),
                    React.createElement(H1Block, { id: "quote", title: "\u5F15\u7528 <Quote />" },
                        React.createElement(Quote, { from: "\u5362\u68AD" }, "\u4EBA\u751F\u800C\u81EA\u7531\uFF0C\u5374\u53C8\u65E0\u5F80\u4E0D\u5728\u67B7\u9501\u4E4B\u4E2D")),
                    React.createElement(H1Block, { id: "numbering-list", title: "\u7F16\u53F7\u5217\u8868 <Numbering />" },
                        React.createElement(P, null, "\u4E0B\u9762\u6F14\u793A\u5982\u4F55\u6784\u9020\u7F16\u53F7\u5217\u8868: `Numbering`, \u901A\u8FC7\u4F20 props.template \u53C2\u6570\u53EF\u4EE5\u652F\u6301\u6709\u5E8F/\u65E0\u5E8F\u4EE5\u53CA\u6784\u9020\u5176\u4ED6\u5404\u79CD\u4E0D\u540C\u7684\u5217\u8868\u6837\u5F0F\u98CE\u683C: "),
                        React.createElement(Code, { lang: 'tsx', source: `
        // template 有多个编号模板取值, 具体看类型
        <Numbering template='123'>
          <P>苹果</P>
          <P>香蕉</P>
          <P>牛奶</P>
        </Numbering>
      ` }),
                        React.createElement(Col, { units: [1, 1, 1] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "`template=123`"),
                                React.createElement(Numbering, { template: '123' },
                                    React.createElement(P, null, "\u82F9\u679C"),
                                    React.createElement(P, null, "\u9999\u8549"),
                                    React.createElement(P, null, "\u725B\u5976"))),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "`template=abc`"),
                                React.createElement(Numbering, { template: 'abc' },
                                    React.createElement(P, null, "\u82F9\u679C"),
                                    React.createElement(P, null, "\u9999\u8549"),
                                    React.createElement(P, null, "\u725B\u5976"))),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "`template=iii`"),
                                React.createElement(Numbering, { template: 'iii' },
                                    React.createElement(P, null, "\u82F9\u679C"),
                                    React.createElement(P, null, "\u9999\u8549"),
                                    React.createElement(P, null, "\u725B\u5976")))),
                        React.createElement(Col, { units: [1, 1, 1] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "`template=katakana`"),
                                React.createElement(Numbering, { template: 'katakana' },
                                    React.createElement(P, null, "\u82F9\u679C"),
                                    React.createElement(P, null, "\u9999\u8549"),
                                    React.createElement(P, null, "\u725B\u5976"))),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "`template=rect`"),
                                React.createElement(Numbering, { template: 'rect' },
                                    React.createElement(P, null, "\u82F9\u679C"),
                                    React.createElement(P, null, "\u9999\u8549"),
                                    React.createElement(P, null, "\u725B\u5976"))),
                            React.createElement(React.Fragment, null)),
                        React.createElement(H2, null, "\u5D4C\u5957"),
                        React.createElement(P, null, "\u7F16\u53F7\u6837\u5F0F\u9ED8\u8BA4\u7EE7\u627F\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u663E\u5F0F\u6307\u5B9A"),
                        React.createElement(Col, { units: [2, 1] },
                            React.createElement(Code, { lang: "tsx", source: `
          <Numbering template='123'>
            <P>苹果</P>
            <P>香蕉</P>
            <P>牛奶</P>
            <Numbering>
              <P>苹果</P>
              <P>香蕉</P>
              <P>牛奶</P>
              <Numbering template='iii' start={10}>
                <P>苹果</P>
                <P>香蕉</P>
                <P>牛奶</P>
              </Numbering></Numbering></Numbering>
        ` }),
                            React.createElement(Numbering, { template: '123' },
                                React.createElement(P, null, "\u82F9\u679C"),
                                React.createElement(P, null, "\u9999\u8549"),
                                React.createElement(P, null, "\u725B\u5976"),
                                React.createElement(Numbering, null,
                                    React.createElement(P, null, "\u82F9\u679C"),
                                    React.createElement(P, null, "\u9999\u8549"),
                                    React.createElement(P, null, "\u725B\u5976"),
                                    React.createElement(Numbering, { template: 'iii', start: 10 },
                                        React.createElement(P, null, "\u82F9\u679C"),
                                        React.createElement(P, null, "\u9999\u8549"),
                                        React.createElement(P, null, "\u725B\u5976")))))),
                    React.createElement(H1Block, { id: "code", title: "\u4EE3\u7801\u5757 <Code />" },
                        React.createElement(Code, { lang: "tsx", source: `
        // hello-world.tsx
        console.log('hello, world!')
      ` }),
                        React.createElement(P, null, "\u4E0A\u8FF0\u8FD9\u4E2A\u4EE3\u7801\u5757\u53EF\u4EE5\u8FD9\u6837\u8C03\u51FA: "),
                        React.createElement(Code, { lang: "tsx", source: `
        <Code lang="tsx" source={\`
          // hello-world.tsx
          export default () => console.log('hello, world!')
        \`} />
      ` }),
                        React.createElement(P, null, "\u6700\u4F73\u5B9E\u8DF5\u662F\u4F7F\u7528 query-import \u6765\u505A\u5230\u53EA\u5BFC\u5165\u4EE3\u7801\u6587\u672C\uFF0C\u4E0D\u6267\u884C:"),
                        React.createElement(Code, { lang: "tsx", source: `
        import sayHelloWorld from './hello-world';
        import CodeHelloWorld from './hello-world?code';
        <div onClick={sayHelloWorld}>
          <CodeHelloWorld />
        </div>
      ` })),
                    React.createElement(H1Block, { id: "Formulas", title: "LaTex \u516C\u5F0F <Formulas />" },
                        (() => {
                            const c = `
          Hello, \\\\
          \\LaTeX \\\\
        `;
                            return React.createElement(Col, { style: { alignItems: 'center' } },
                                React.createElement(Code, { lang: 'latex', source: `
            <Formula source={\`
              Hello, \\\\\\\\
              \\\\LaTex \\\\\\\\
            \`} />
          ` }),
                                React.createElement(Formula, { source: c }));
                        })(),
                        React.createElement(P, null, "\u7531\u4E8E `\\` \u88AB\u6A21\u7248\u5B57\u7B26\u4E32\u5360\u7528\u4E86\uFF0C\u76EE\u524D\u4F7F\u7528\u4F53\u9A8C\u6BD4\u8F83\u7CDF\u7CD5\uFF0C\u5F85\u4F18\u5316")),
                    React.createElement(H1Block, { id: "WindowApp", title: "\u5E94\u7528\u7A97\u683C <WindowApp />" },
                        React.createElement(WindowApp, { height: "auto", initialRun: false, title: "My App" },
                            React.createElement("div", { style: { textAlign: 'center', padding: '2em' } }, "hello, world!")),
                        React.createElement(Code, { lang: 'tsx', source: `
        <WindowApp height="auto" initialRun={false} title="My App">
          <div style={{ textAlign: 'center', padding: '2em' }}>
            hello, world!
          </div>
        </WindowApp>
      ` }),
                        React.createElement(P, null, "\u652F\u6301\u4EE5\u7A97\u683C\u65B9\u5F0F\u5C55\u793A\u4E00\u6BB5 JSX \u5B9E\u4F8B, \u7A97\u683C\u53F3\u4E0A\u89D2\u652F\u6301\u82E5\u5E72\u529F\u80FD, \u5982\u542F\u52A8/\u6682\u505C/\u5168\u5C4F/\u7A97\u53E3\u5316, \u5176\u4ED6\u53C2\u6570\u542B\u4E49\u5982\u4E0B:"),
                        React.createElement(Numbering, { template: "rect" },
                            React.createElement(P, null, "`height?` \u4F20\u5165 `auto` \u7684\u65F6\u5019\u7A97\u683C\u9AD8\u5EA6\u7531\u4F20\u5165\u7684 JSX \u6491\u5F00\uFF0C\u5176\u4ED6\u4F20\u5165\u60C5\u51B5\u5219\u5B9A\u9AD8\uFF0C\u9ED8\u8BA4\u503C\u4E3A `30rem`"),
                            React.createElement(P, null, "`title?` \u7A97\u53E3 title \u4FE1\u606F"),
                            React.createElement(P, null, "`initialRun?` \u662F\u5426\u9ED8\u8BA4\u6267\u884C\uFF0C\u5982\u679C\u4F20 `false` \u5219\u9996\u6B21\u52A0\u8F7D\u540E\u4E0D\u6267\u884C\u6E32\u67D3")),
                        React.createElement(H2, null, `<WindowAppIframe />`),
                        React.createElement(WindowAppIframe, { src: "/?\u8FD9\u662F\u4E00\u6BB5\u94FE\u63A5", height: "30rem" }),
                        React.createElement(Code, { lang: 'tsx', source: `
        <WindowAppIframe
          src="/?这是一段链接"
          height="30rem"
        />
      ` }),
                        React.createElement(P, null, "\u652F\u6301\u4EE5\u7A97\u683C\u65B9\u5F0F\u5C55\u793A iframe \u9875\u9762, \u9700\u8981\u4F20 src \u53C2\u6570\u6307\u5B9A\u94FE\u63A5")));
            });

        })
    };
}));
