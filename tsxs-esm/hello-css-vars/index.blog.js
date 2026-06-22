System.register(['react', 'rally/@@', './user-cssvars.js'], (function (exports) {
    'use strict';
    var React, P, Link, H1Block, Col, Code, H2, metaBeauty, UserCssVars;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Link = module.Link;
            H1Block = module.H1Block;
            Col = module.Col;
            Code = module.Code;
            H2 = module.H2;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            UserCssVars = module.UserCssVars;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'hello-css-vars',
                title: 'Hello CSS 变量',
                author: 'eczn',
                // category: '分类',
                time: new Date('2023-08-12 18:32:11'),
            }));
            async function initialProps(context) {
                return {
                    fileCssVars: await context.readText('./css-vars.tsx'),
                    fileRenderCssVars: await context.readText('./render-css-vars.tsx'),
                    fileStorageCssVars: await context.readText('./storage-css-vars.tsx'),
                    fileUserCssVars: await context.readText('./user-cssvars.tsx'),
                };
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u5F88\u65E9\u5C31\u542C\u8FC7\u548C\u7B80\u5355\u770B\u8FC7 CSS \u53D8\u91CF\u4E86\uFF0C\u4F46\u662F\u4E00\u76F4\u6CA1\u6709\u6B63\u5F0F\u627E\u573A\u666F\u4F7F\u7528\u8FC7\uFF0C\u8FD9\u4E24\u5929\u5B9E\u88C5\u4E86\u4E00\u4E0B\u672C\u7AD9\u7684 Setting \u9875\uFF0C\u91CC\u9762\u7528\u4E86 CSS \u53D8\u91CF\uFF0C\u672C\u6587\u603B\u7ED3\u4E00\u4E0B\u7ECF\u9A8C:"),
                        React.createElement(Link, { block: true, href: "/setting/" }, "Setting | \u7CFB\u7EDF\u8BBE\u7F6E")),
                    React.createElement(H1Block, { id: "define", title: "\u58F0\u660E\u548C\u4F7F\u7528\u53D8\u91CF" },
                        React.createElement(P, null, "\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u58F0\u660E\u548C\u4F7F\u7528\u4E00\u4E2A CSS \u53D8\u91CF"),
                        React.createElement(Col, null,
                            React.createElement(Code, { lang: "css", source: `
          :root {
            --REM: 14px;
          }
        ` }),
                            React.createElement(Code, { lang: "css", source: `
          html {
            font-site: var(--REM);
          }
        ` })),
                        React.createElement(P, null, "\u5728\u4E0A\u8FF0\u4E24\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u58F0\u660E\u4E86\u4E00\u4E2A\u53EB\u505A `--REM` \u7684\u53D8\u91CF\uFF0C\u5176\u503C\u4E3A 14px, \u7136\u540E\u901A\u8FC7 `var()` \u7684\u65B9\u5F0F\u5C06\u5176\u7ED1\u5B9A\u5230 html \u7684 fontSizte \u5C5E\u6027\u4E0A")),
                    React.createElement(H1Block, { id: "waht-is-root", title: ":root \u662F\u4EC0\u4E48" },
                        React.createElement(P, null, "\u901A\u8FC7 :root \u53EF\u4EE5\u6307\u5B9A\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u4E3A\u5168\u5C40\u3002\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u6211\u4EEC\u53EA\u9700\u8981\u58F0\u660E\u5230 `:root` \u5168\u5C40\u4E2D\u5373\u53EF, \u6211\u6682\u65F6\u6CA1\u6709\u78B0\u5230\u9700\u8981\u5355\u72EC\u5B9A\u4E49\u4F5C\u7528\u57DF\u7684\u60C5\u51B5, \u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5355\u72EC\u6307\u5B9A\u53D8\u91CF\u4F5C\u7528\u57DF:"),
                        React.createElement(Code, { lang: "css", source: `
        div {
          --PRIMARY-COLOR: #BBB;
        }
      ` }),
                        React.createElement(P, null, "\u53D9\u8FF0 CSS \u53D8\u91CF\u7684\u7528\u6CD5\u4E0D\u662F\u672C\u6587\u91CD\u70B9\uFF0C\u76F8\u5173\u7EC6\u8282\u53EF\u4EE5\u53C2\u8003 MDN:"),
                        React.createElement(Link, { block: true, href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties" }, "MDN - \u4F7F\u7528 CSS \u81EA\u5B9A\u4E49\u5C5E\u6027\uFF08\u53D8\u91CF\uFF09")),
                    React.createElement(H1Block, { id: "site-theme-practice", title: "\u7AD9\u70B9\u4E3B\u9898\u5B9E\u8DF5" },
                        React.createElement(P, null, "CSS \u53D8\u91CF\u4E00\u4E2A\u6700\u5E38\u89C1\u7684\u7528\u6CD5\u5C31\u662F\u5B9E\u73B0\u7AD9\u70B9\u4E3B\u9898\u7684\u914D\u7F6E\u5316\u3001\u52A8\u6001\u5316 \u2014\u2014 \u4EE5\u5F80 less / sass \u90A3\u79CD\u9884\u5904\u7406\u5668\u7684\u4E3B\u9898\u662F\u8981\u8FC7\u9759\u6001\u7F16\u8BD1\u624D\u51FA\u6765\u7684\uFF0C\u5F88\u591A\u65F6\u5019\u6709\u5404\u79CD\u9650\u5236\uFF0C\u4E0D\u597D\u7528, \u73B0\u5728\u501F\u52A9 CSS \u53D8\u91CF, \u914D\u5408 js \u5C31\u80FD\u505A\u66F4\u5B8C\u5584\u7684\u7528\u6237\u4E3B\u9898\u5B9E\u8DF5"),
                        React.createElement(H2, { id: "define-types" }, "\u5B9A\u4E49\u7C7B\u578B"),
                        React.createElement(P, null, "\u5B9E\u73B0\u7AD9\u70B9\u4E3B\u9898\u914D\u7F6E\uFF0C\u9700\u8981\u5148\u8BBE\u8BA1\u76F8\u5173\u7C7B\u578B\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u5B9E\u73B0\u6309\u94AE\u989C\u8272\u7684\u914D\u7F6E"),
                        React.createElement(Code, { lang: "tsx", source: props.fileCssVars }),
                        React.createElement(H2, { id: "render-cssvars" }, "CSSVars \u6E32\u67D3\u5230 <style>"),
                        React.createElement(P, null, "\u8FD8\u9700\u8981\u5C06\u8FD9\u4E2A CSSVars \u7C7B\u578B\u8F6C\u6210\u4E00\u6BB5 CSS \u5185\u5BB9\u5E76\u6CE8\u5165\u5230 style \u6807\u7B7E\u4E2D\u624D\u80FD\u4F7F\u5176\u4F5C\u4E3A CSS \u53D8\u91CF\u4F7F\u7528:"),
                        React.createElement(Code, { lang: "tsx", source: props.fileRenderCssVars }),
                        React.createElement(H2, { id: "storage-cssvars" }, "\u8003\u8651\u6301\u4E45\u5316"),
                        React.createElement(P, null, "\u5728\u6B63\u5F0F\u8C03\u7528 renderCSSVars \u4E4B\u524D\u6211\u4EEC\u8FD8\u9700\u8981\u8003\u8651\u600E\u4E48\u4FDD\u5B58\u7528\u6237\u914D\u7F6E\u7684 CSSVars, \u5373\u6301\u4E45\u5316, \u53EF\u4EE5\u4F7F\u7528 localStorage \u8FDB\u884C\u5B58\u50A8:"),
                        React.createElement(Code, { lang: "tsx", source: props.fileStorageCssVars }),
                        React.createElement(H2, { id: "user-cssvars-demo" }, "\u7528\u6237\u914D\u7F6E\u754C\u9762 (demo)"),
                        React.createElement(P, null, "\u6700\u540E\u4E00\u6B65\u662F\u5199\u7EC4\u4EF6\u8BA9\u7528\u6237\u53EF\u4EE5\u914D\u7F6E\u5E76\u6301\u4E45\u5316\u5B58\u50A8\u81EA\u5DF1\u7684 CSSVars, \u4EE5\u4E0B\u662F\u6211\u5B9E\u73B0\u7684\u4E00\u4E2A\u7B80\u5355\u7684\u7EC4\u4EF6 DEMO:"),
                        React.createElement(UserCssVars, null),
                        React.createElement("details", null,
                            React.createElement("summary", null,
                                React.createElement(P, { style: { display: 'inline-block' } }, "\u5B8C\u6574\u5B9E\u73B0\u5982\u4E0B\uFF0C\u5DF2\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),
                            React.createElement(Code, { lang: "tsx", source: props.fileUserCssVars }))),
                    React.createElement(H1Block, { id: "end-of-file", title: "EOF" },
                        React.createElement(P, null, "\u81F3\u6B64\u4E00\u4E2A\u57FA\u4E8E CSS \u53D8\u91CF\u7684\u4E3B\u9898\u5316\u573A\u666F\u914D\u7F6E\u5B9E\u8DF5\u5C31\u7B97\u5B8C\u6210\u4E86 \u2014\u2014 \u5728\u8BBE\u7F6E\u989C\u8272\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u6700\u65B0\u7684\u8272\u503C\u91CD\u65B0\u6301\u4E45\u5316\u5B58\u50A8\uFF0C\u540E\u7EED\u7528\u6237\u518D\u5237\u65B0\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u62FF\u51FA\u6765\u5E76\u4E14\u5E94\u7528\u5230 CSS \u53D8\u91CF\u4E2D\u4ECE\u800C\u4E3B\u9898\u5316\u7AD9\u70B9\u6837\u5F0F, \u540E\u7EED\u53EA\u9700\u8981\u6A2A\u5411\u62D3\u5C55\u66F4\u591A\u7684\u6837\u5F0F\u9009\u9879\u5373\u53EF"),
                        React.createElement(P, null, "\u4F46\u662F\u8FD9\u91CC\u8FD8\u6709\u4E9B\u53EF\u4EE5\u4F18\u5316\u7684\u70B9\uFF0C\u80FD\u60F3\u5230\u7684\u6BD4\u5982\u8BF4\u6301\u4E45\u5316\u5B58\u50A8\u5199\u5230\u540E\u53F0\u6570\u636E\u5E93\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u591A\u7AEF\u4FDD\u6301\u4E3B\u9898\u540C\u6B65\u3002\u53E6\u5916\u53EF\u4EE5\u8003\u8651\u5F04\u4E00\u4E2A style CSS \u53D8\u91CF\u76F4\u51FA\u670D\u52A1, \u8BA9\u9875\u9762\u6253\u5F00\u7684\u4E00\u77AC\u95F4\u5C31\u4E3B\u9898\u5316\u800C\u4E0D\u662F\u7B49 js \u548C ajax \u52A0\u8F7D\u5B8C:"),
                        React.createElement(Code, { lang: "html", source: `
        <style href="/api/cssvars"></style>
      ` }),
                        React.createElement(P, null, "\u7136\u540E\u5BF9\u5E94\u7684\u8FD9\u4E2A\u670D\u52A1\u5176\u5B9E\u5C31\u662F\u53BB\u8BFB\u7528\u6237\u914D\u7F6E\u7684 css \u53D8\u91CF\u5E76\u6E32\u67D3\u76F4\u51FA\u5230\u7528\u6237\u4FA7:"),
                        React.createElement(Code, { lang: "tsx", source: `
        app.get('/api/cssvars', async (ctx, next) => {
          await next()
          const cssvars = await loadUserCssVarsFromDB(ctx)
          const styleContent = renderCssVars(cssvars)
          ctx.sendFile(
            contentType: '.css',
            content: \`
              :root {
                buttonColor: \${cssvars.buttonColor};
              }
            \`,
          )
        })
      ` }),
                        React.createElement(P, null, "* \u6CE8\u610F\u8FD9\u91CC\u53EF\u80FD\u6709\u5404\u79CD\u6CE8\u5165\u6216\u8005\u5176\u4ED6 Web \u5B89\u5168\u95EE\u9898, \u5982\u679C\u4F60\u771F\u7684\u8981\u641E\u4E00\u4E2A\u8FD9\u6837\u7684\u65B9\u6848\u5EFA\u8BAE\u8981\u597D\u597D review \u4E00\u4E0B\u53EF\u80FD\u7684\u5B89\u5168\u6F0F\u6D1E")));
            });

        })
    };
}));
