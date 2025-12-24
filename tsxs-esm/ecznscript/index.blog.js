System.register(['react', 'rally/@@', './heavy-runtime.png.js'], (function (exports) {
    'use strict';
    var React, P, Footnote, H1Block, Link, Numbering, H2, Col, Code, ImgDynamic, metaBeauty, fileHeavyRuntiePng;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Footnote = module.Footnote;
            H1Block = module.H1Block;
            Link = module.Link;
            Numbering = module.Numbering;
            H2 = module.H2;
            Col = module.Col;
            Code = module.Code;
            ImgDynamic = module.ImgDynamic;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            fileHeavyRuntiePng = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'ecznscript',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'EcznScript ?',
                author: 'eczn',
                tags: ['TypeScript', '编程语言'],
                category: 'EcznScript',
                time: new Date('2025-03-19 22:55'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, { sinking: true },
                            "\u81EA 18 \u5E74\u6765\u5199 TS \u7B97\u6709 7 \u5E74\u4E86\uFF0C\u8FD1\u671F\u4E00\u4E2A\u5927\u6D88\u606F\uFF1A",
                            React.createElement("br", null),
                            "ts \u5B98\u65B9\u5BA3\u5E03\u51B3\u5B9A\u8FC1\u79FB\u5230 tsgo\uFF0C\u7528 go \u79FB\u690D\u4E86 tsc\uFF0C\u6027\u80FD\u63D0\u9AD8\u7EA6 10 \u500D"),
                        React.createElement(P, null,
                            "\u8001\u5B9E\u8BF4\u4E00\u70B9\u4E5F\u4E0D\u60CA\u8BB6",
                            React.createElement(Footnote, { content: "\u6211\u5929\u5929\u55B7 ts/js\uFF0C\u53EF\u4EE5\u770B\u770B\u5F80\u5E74\u7684\u535A\u6587" }),
                            "\uFF0C\u4F46\u4ECE\u53E6\u5916\u4E00\u4E2A\u89D2\u5EA6\u51FB\u788E\u4E86\u6211\uFF1Ats \u53EA\u662F js \u7684\u5B59\u5B50",
                            React.createElement(Footnote, { content: "\u8BF4\u597D\u542C\u70B9\u53EB\u8D85\u96C6" }),
                            "\uFF0C\u4E0D\u505A\u4E00\u95E8\u4E25\u8083\u7684\u7F16\u7A0B\u8BED\u8A00 \u2014\u2014 \u66F4\u6DF1\u5EA6\u7684 codegen \u4EE5\u53CA all-in-one \u6253\u5305\u7B49\u51E0\u4E4E\u90FD\u6CA1\u548B\u505A\uFF0C\u8BF4\u96BE\u542C\u70B9\u5C31\u662F\u64CD\u7740\u7C7B\u578B\u4F53\u64CD\u6700\u540E\u5199\u51FA\u6765 php \u7684\u6027\u80FD\uFF1A\u9759\u6001\u7C7B\u578B\u6CA1\u6709\u4EFB\u4F55\u6027\u80FD\u4E0A\u7684\u52A0\u6210\uFF0C\u6700\u540E\u6211\u4E0D\u5F97\u4E0D\u9762\u5BF9\u8FD9\u4E2A\u4E8B\u5B9E\uFF1Atsgo \u4E4B\u540E\u518D\u5199 ts \u53EA\u80FD\u6E21\u8FC7\u4E00\u4E2A\u76F8\u5BF9\u5931\u8D25\u7684\u4EBA\u751F\uFF0C\u5B98\u65B9\u81EA\u5DF1\u90FD\u653E\u5F03 ts \u81EA\u4E3E\uFF0C\u8BED\u8A00\u5176\u5B9E\u6709\u91CD\u5927\u7F3A\u9677\uFF0C\u4F5C\u4E3A\u7528\u6237\u8FD8\u662F\u5C3D\u65E9\u653E\u5F03\u6BD4\u8F83\u597D")),
                    React.createElement(H1Block, { id: "the-problem-wtih-ts", title: "ts \u6700\u5927\u7684\u95EE\u9898 \u2014\u2014 \u505A js \u7684\u5B59\u5B50" },
                        React.createElement(P, null, "TS \u7531\u4E8E\u53EA\u505A js \u7684\u5B59\u5B50 \u2014\u2014 \u597D\u542C\u70B9\u53EB\u8D85\u96C6\uFF0C\u56E0\u6B64\u5404\u79CD\u4E25\u8083\u7684\u7F16\u7A0B\u8BED\u8A00\u8BE5\u505A\u7684\u6CA1\u505A\uFF0C\u6216\u53EA\u505A\u4E86\u534A\u6210\u54C1\uFF0C\u5C24\u5176\u662F\u5DE5\u7A0B\u5316/\u6253\u5305\u76F8\u5173\u7684\uFF0C\u800C\u8FD9\u4E9B\u532E\u4E4F\u53C8\u6700\u7EC8\u5BFC\u81F4\u6E90\u7801 ts \u4ED3\u5E93\u53D8\u5F97\u6781\u5176\u626D\u66F2\uFF0C\u6211\u5728\u4E0B\u9762\u8FD9\u7BC7\u6587\u7AE0\u6709\u5177\u4F53\u7EC6\u8282\u5206\u6790\uFF1A"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "/b/typescript-52000-checker.ts/" }, "TypeScript 52000+ \u884C\u7684 checker.ts")),
                        React.createElement(P, null, "\u603B\u7684\u6765\u8BF4\u6700\u4E3B\u8981\u7684\u95EE\u9898\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "namespace \u653E\u5F03\u4E86\uFF0C\u4E5F\u4E0D\u6253\u7B97\u81EA\u5DF1\u505A\u6253\u5305\uFF0C\u4F46\u662F\u5E02\u9762\u4E0A\u7684\u6253\u5305\u90FD\u6CA1\u6709\u60F3\u8FC7 `obj.xxx` \u7684\u70B9\u8BFB\u5F00\u9500\u548C jit \u4F18\u5316\u5F00\u9500\uFF0C\u8FD9\u662F ts \u4ED3\u5E93\u53D8\u5F97\u626D\u66F2\u7684\u6838\u5FC3\u539F\u56E0"),
                            React.createElement(P, null, "\u6CA1\u6709\u505A\u9759\u6001\u7F16\u8BD1\u4F18\u5316\uFF0C\u6BD4\u5982\u8BF4 `const a = 1 + 1` \u5E94\u8BE5\u5728\u7F16\u8BD1\u671F\u8BA1\u7B97\u6210 `const a = 2` \u76EE\u524D\u662F\u6CA1\u6709\u7684"),
                            React.createElement(P, null, "\u9759\u6001\u7C7B\u578B\u88AB\u64E6\u6389\u4E86\uFF0C\u6CA1\u6709\u53C2\u4E0E\u4EE3\u7801\u4F18\u5316\uFF0C\u4F46\u4EFB\u4F55\u4E00\u95E8\u5E02\u9762\u4E0A\u6D41\u884C\u7684\u8BED\u8A00\u91CC\u4F9D\u636E\u9759\u6001\u7C7B\u578B\u505A codegen \u4F18\u5316\u662F\u57FA\u7840\u64CD\u4F5C")),
                        React.createElement(P, null, "\u4E0A\u8FF0\u7B2C\u4E8C\u70B9\u6211\u5728\u516C\u53F8\u5185\u5DF2\u7ECF\u901A\u8FC7\u81EA\u884C\u7F16\u5199 ts \u7684 custom transformer \u63D2\u4EF6\u65B9\u5F0F\u5C31\u80FD\u5B9E\u73B0\u57FA\u7840\u7684\u5E38\u91CF\u5408\u5E76\u4E86\uFF08\u4E0D\u8D85\u8FC7 400 \u884C\u5C31\u80FD\u5B9E\u73B0\uFF09\uFF0C\u66F4\u9AD8\u7EA7\u7684\u4F18\u5316\u7B56\u7565\u5176\u5B9E\u5E76\u6CA1\u6709\u7CFB\u7EDF\u6027\u7684\u963B\u788D \u2014\u2014 \u53EA\u8981\u5B98\u65B9\u60F3\u641E\u5206\u5206\u949F\u5C31\u80FD\u4E0A"),
                        React.createElement(P, null,
                            "\u4E8B\u5B9E\u4E0A codegen \u4F18\u5316 ts \u4E00\u76F4\u6709\u505A\uFF0C\u6BD4\u5982\u8BF4 downleveliterator\u3001const-enum\u3001\u548C decorator \u7684 meta \u5143\u4FE1\u606F\u8F93\u51FA",
                            React.createElement(Footnote, { content: "\u4F46\u662F\u914D\u5408 webpack + ts-loader/esbuild \u65F6\uFF0C\u901A\u5E38\u90FD\u5F00\u7740 transpileOnly:true \u548C isolatedModule:true \u79CD\u79CD\u539F\u56E0\u90FD\u4F1A\u5BFC\u81F4\u8FD9\u4E9B codegen \u4F18\u5316\u7684\u80FD\u529B\u5931\u6548 \u2014\u2014 \u8FD9\u5176\u4E2D\u6709\u5F88\u5927\u539F\u56E0\u662F TC39 \u7684 ESM \u65B9\u6848\u6CA1\u6709\u8003\u8651\u8FD9\u79CD JIT \u4F18\u5316\u573A\u666F\uFF0C\u5F53\u7136\u4E5F\u8DDF ts-loader \u7684\u6027\u80FD\u6709\u5173\u7CFB" }),
                            "\uFF0C\u8FD9\u4E9B\u90FD\u6D89\u53CA codegen \u548C\u8FD0\u884C\u65F6\u7684\u4FEE\u6539")),
                    React.createElement(H1Block, { id: "js-runtime-where-slow", title: "JS runtime \u6162\u5728\u54EA\u91CC\uFF1F" },
                        React.createElement(P, null, "\u9996\u5148\u4F9D\u636E\u4E4B\u524D\u5199\u7684 v8 \u7684\u7814\u7A76\uFF0C\u91CC\u9762\u6709\u6761\u7ED3\u8BBA\uFF1A\u53EA\u8981\u6784\u9020\u5408\u9002\uFF0CV8 JIT \u53EF\u4EE5\u6709\u5AB2\u7F8E\u539F\u751F AOT \u7684\u6027\u80FD\uFF0C\u5F53\u7136\u4E5F\u5BB9\u6613\u51FA\u73B0\u975E\u5E38\u5938\u5F20\u7684\u6027\u80FD\u52A3\u5316\u3002(\u8FD9\u91CC\u7684\u5AB2\u7F8E\u6307\u7684\u662F\u6CA1\u6709\u6570\u91CF\u7EA7\u5DEE\u8DDD)"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "/b/v8-asm-detail-of-inline-caches/" }, "V8 Inline Caches \u4F18\u5316\u53CA\u5176\u6C47\u7F16\u7EC6\u8282")),
                        React.createElement(P, null, "\u603B\u7684\u6765\u8BF4, js \u9047\u5230\u4E0B\u8FF0\u60C5\u51B5\u7684\u65F6\u5019\u4F1A\u53D8\u6162"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u952E\u503C\u987A\u5E8F \u2014\u2014 \u7EAF\u9760\u4EBA\u8089\u4E0D\u53EF\u80FD\u4FDD\u8BC1\u6BCF\u6B21\u6784\u9020\u5BF9\u8C61\u7684\u65F6\u5019\u90FD\u4FDD\u8BC1\u4E00\u6837\u7684 key \u987A\u5E8F\u7684\uFF0C\u8FD9\u4F1A\u8BA9 runtime \u7684 ICs \u5931\u6548"),
                            React.createElement(P, null, "\u57FA\u4E8E\u539F\u578B\u94FE\u7684 class \u5B9E\u9645\u4E0A\u662F\u52A8\u6001\u7684 \u2014\u2014 \u8FD9\u5BFC\u81F4\u5F88\u591A\u65F6\u5019 runtime \u90FD\u4F18\u5316\u4E0D\u4E86"),
                            React.createElement(P, null, "\u8BED\u8A00\u6807\u51C6\u7684\u6027\u80FD \u2014\u2014 \u8FD9\u91CC\u7279\u6307 js string \u7684\u6027\u80FD\uFF0C\u76F8\u5F53\u7CDF\u7CD5"),
                            React.createElement(P, null, "TC39 \u7279\u6027\u4EE5\u53CA\u793E\u533A\u5B9E\u8DF5\u4E0D\u4E00\u5B9A\u9AD8\u6027\u80FD \u2014\u2014 \u6BD4\u5982 `...` `for-of` \u8FD9\u4E9B\uFF0C\u53EF\u4EE5\u770B\u770B\u7F16\u8BD1\u6210 es5 \u540E\u8FD9\u4E9B\u7279\u6027\u4F1A\u53D8\u6210\u4EC0\u4E48\u9B3C\u6837"),
                            React.createElement(P, null, "\u6253\u5305\u4E0E\u6027\u80FD \u2014\u2014 \u8BFB\u53D6\u6A21\u5757\u5185\u66B4\u9732\u7684\u65B9\u6CD5\u5E26\u7684\u70B9\u8BFB\u64CD\u4F5C\u662F\u6709\u5F00\u9500\u7684\uFF0C\u5BF9\u8C61 key \u591A\u7684\u65F6\u5019\uFF0C\u70B9\u8BFB\u5F00\u9500\u4E0D\u53EF\u5FFD\u7565"))),
                    React.createElement(H1Block, { id: "EcznScript", title: "EcznScript" },
                        React.createElement(P, null, "\u6211\u4ECE\u804C\u4E1A\u751F\u6DAF\u7684\u4E00\u5F00\u59CB\u5C31\u5BF9\u7F16\u7A0B\u8BED\u8A00\u7684\u6784\u9020\u76F8\u5F53\u611F\u5174\u8DA3\u5E76\u4E14\u6709\u4E00\u4E9B\u5B66\u4E60 & \u5F00\u53D1\u7ECF\u9A8C\uFF0C\u8D81\u7740\u8FD9\u6B21 tsgo \u53D1\u5E03\u4E4B\u9645\uFF0C\u6211\u8BA1\u5212\u4E1A\u4F59\u5F00\u53D1\u4E00\u95E8\u7F16\u8BD1\u4E3A js \u7684\u8BED\u8A00\uFF0C\u76EE\u7684\u662F\u89E3\u51B3\u4E0A\u9762\u63D0\u5230\u7684\u95EE\u9898\uFF0C\u53EB\u505A EcznScript\uFF0C\u9996\u5148\u5B83\u4E0D\u662F js \u8D85\u96C6 (\u5B59\u5B50)\uFF0C\u662F\u5B8C\u5168\u4E0D\u540C\u4E8E js \u7684\u8BED\u8A00\uFF0C\u800C\u4E14\u6211\u5C06\u76F4\u63A5\u6284\u6765\u81EA rust / golang / ts \u7684\u4F18\u79C0\u7684\u8BBE\u8BA1\uFF0C\u5E76\u4E14\u6452\u5F03\u5176\u4E2D js \u7684\u4E00\u4E9B\u5783\u573E\u9E21\u808B\u7279\u6027"),
                        React.createElement(H2, null, "\u5982\u4F55\u4FDD\u8BC1\u952E\u503C\u987A\u5E8F"),
                        React.createElement(P, null, "\u952E\u503C\u987A\u5E8F\u5BF9\u4E8E JIT \u6027\u80FD\u6765\u8BF4\u76F8\u5F53\u91CD\u8981\uFF0C\u8BED\u8A00\u8BBE\u8BA1\u4E4B\u5904\u5C31\u8981\u8003\u8651\u8FD9\u4E2A\uFF0C\u56E0\u6B64\u6211\u51B3\u5B9A\u7528 struct \u58F0\u660E\u7C7B\u578B\uFF0C\u5E76\u7528 struct \u6765\u505A\u5B57\u9762\u91CF\u6784\u9020: "),
                        React.createElement(Col, { units: [1, 1] },
                            React.createElement(Code, { lang: 'rust', source: `
          //
          // EcznScript
          // 


          struct UserInfo {
            uid: string,
            name: string,
          }


          let user = UserInfo {
            uid: '001',
            name: 'eczn',
          }

          console.log(user)
        ` }),
                            React.createElement(Code, { overflow: 'visible', lang: 'javascript', source: `
          //
          // 编译输出 JS
          //

          // 自带构造器 & 类型 tag
          const UserInfo$$Tag = {};
          const UserInfo = (uid, name) => ({
            tag: UserInfo$$Tag,
            uid, name,
          })

          let user = UserInfo(
            /* uid  */ '001',
            /* name */ 'eczn',
          );

          console.log(user);
        ` })),
                        React.createElement(P, null, "struct \u7F16\u8BD1\u671F\u5373\u53EF\u786E\u5B9A\u952E\u503C\u987A\u5E8F\uFF0C\u56E0\u6B64\u5373\u4FBF\u662F\u987A\u5E8F\u4E0D\u4E00\u6837\u4E86\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\u4FEE\u6B63"),
                        React.createElement(Col, { units: [1, 1] },
                            React.createElement(Code, { lang: 'rust', source: `
          //
          // EcznScript
          // 


          struct UserInfo {
            uid: string,
            name: string,
          }




          let user = UserInfo {
            name: 'eczn', // 顺序不一样
            uid: '001',
          }

          console.log(user)
        ` }),
                            React.createElement(Code, { overflow: 'visible', lang: 'javascript', source: `
          //
          // 编译输出 JS
          //

          // 自带构造器 & 类型 tag
          const UserInfo$$Tag = {};
          const UserInfo = (uid, name) => ({
            tag: UserInfo$$Tag,
            uid, name,
          })

          const __$0 = 'eczn';
          const __$1 = '001';
          let user = UserInfo(
            /* uid  */ __$1,
            /* name */ __$0,
          );

          console.log(user);
        ` })),
                        React.createElement(H2, null, "\u7528 trait \u89E3\u51B3 class \u7684\u95EE\u9898"),
                        React.createElement(P, null, "class \u6700\u5927\u7684\u95EE\u9898\uFF1A\u4E3A\u4E86\u590D\u7528\u4EE3\u7801\uFF0C\u4F46\u662F\u5BF9\u4E8E js \u8FD9\u79CD\u52A8\u6001\u8BED\u8A00\u6765\u8BF4 class \u53CD\u800C\u662F\u4E00\u79CD\u675F\u7F1A\uFF0C\u800C\u4E14\u590D\u6742\u7684 class \u51E0\u4E4E\u65E0\u6CD5\u505A\u9AD8\u6027\u80FD JIT \uFF08\u56E0\u4E3A\u5BF9\u8C61\u662F\u591A\u6001\u7684\u3001\u751A\u81F3\u662F\u5DE8\u6001\u7684\uFF09\uFF0C\u56E0\u6B64\u4E0D\u8BBA\u662F\u5BF9\u6027\u80FD\u8FD8\u662F\u53EF\u8BFB\u6027\uFF0C\u5FC5\u987B\u8981\u5207\u5272 class"),
                        React.createElement(P, null,
                            "\u5BF9\u4E8E class \u7684\u95EE\u9898\u4E1A\u754C\u5DF2\u6709\u88AB\u5E7F\u6CDB\u63A5\u53D7\u7684\u65B9\u5F0F\uFF0C\u90A3\u5C31\u662F\u57FA\u4E8E interface / trait \u6765\u505A\u7EC4\u5408\u5F0F\u7F16\u7A0B\uFF0C\u5BF9\u5E94\u7684\u4EE3\u8868\u662F golang \u548C rust\uFF0C\u4E24\u8005\u90FD\u6709\u5F88\u4E0D\u9519\u7684\u751F\u6001\u548C\u63A5\u53D7\u5EA6\uFF0C\u56E0\u6B64\u6211\u8BA4\u4E3A\u629B\u5F03 class \u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u4E0B\u9762\u662F\u4E00\u6BB5\u4F8B\u5B50\uFF0C\u5176\u4E2D\u6211\u501F\u9274\u4E86 rust \u91CC\u5BF9 dyn trait \u5904\u7406\u7684\u4F18\u79C0\u7ECF\u9A8C\uFF0C\u8FD9\u4F7F\u5F97\u52A8\u6001\u6D3E\u53D1\u5B9E\u73B0\u6210\u4E3A\u53EF\u80FD\uFF0C\u800C\u4E14\u5C06\u8C03\u7528\u5F00\u9500\u964D\u5230\u4E86\u6700\u4F4E",
                            React.createElement(Footnote, { content: "\u52A8\u6001\u5206\u53D1\u90A3\u6BB5 JIT \u540E\u4F1A\u76F8\u5F53\u9AD8\u6548\uFF0C\u7B80\u5355\u8BD5\u4E86\u4E0B\uFF0Cm4 pro \u8DD1\u4E00\u4EBF\u6B21\u5206\u53D1\u53EA\u9700\u8981 30ms" })),
                        React.createElement(Col, { units: [1, 1] },
                            React.createElement(Code, { lang: 'swift', source: `
          //
          // EcznScript
          // 

          struct UserInfo {
            uid: string,
            name: string,
          }




          trait Printable {
            print(arg: i32): void
          }








          impl Printable for UserInfo {
            print(arg) {
              print(self, arg)
            }
          }
          // 这里还有用很多细节没想好
          func gg(): impl Printable {
            return UserInfo {
              uid: '001',
              name: 'eczn'
            }
          }

          let r = gg()

          r.print(2025)
        ` }),
                            React.createElement(Code, { overflow: "visible", lang: 'javascript', source: `
          //
          // 编译输出 JS
          // 

          const UserInfo$$Tag = {};
          // 自带构造器
          const UserInfo =
            (uid, name) => ({
              tag: UserInfo$$Tag,
              uid, name,
            });

          const Printable$$Print$$Tag = {};
          // 此处实现了跟 rust 一样的动态分发 (dynamic dispatch)
          // https://doc.rust-lang.org/std/keyword.dyn.html
          function impl$$Printable$$query(objTag, traitTag) {
            if (objTag === UserInfo$$Tag) {
              switch (traitTag) {
                case Printable$$Print$$Tag: return UserInfo$$impl$$Printable$$print
              }
            }
          }

          function UserInfo$$impl$$Printable$$print(self, arg) {

            console.log(self, arg);

          }

          function gg() {
            return UserInfo (
              /* uid  */ '001',
              /* name */ 'eczn'
            )
          }

          const r = gg()
          // 有静态类型，因此可以实现动态分发
          impl$$Printable$$query(r.tag, Printable$$Print$$Tag)(r, 2025)
        ` })),
                        React.createElement(H2, null, "\u8BED\u8A00\u6807\u51C6\u7684\u6027\u80FD"),
                        React.createElement(P, null, "js \u91CC\u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u53D8\u7684\uFF0Cv8 \u91CC\u5BF9\u4E2D\u6587\u5B57\u7B26\u4E32\u7684\u64CD\u4F5C\u51E0\u4E4E\u90FD\u662F\u4F1A\u4EA7\u751F\u65B0\u7684\uFF0C\u6BD4\u5982\u8BF4 `\"\u4F60\"[0]` \u8FD9\u6837\u5C31\u4F1A\u590D\u5236\u4E00\u6B21 index=0 \u7684\u5730\u65B9\uFF0C\u53EA\u6709\u82F1\u6587\u624D\u4E0D\u4F1A\u6709\u590D\u5236 \u2014\u2014 \u800C\u4E00\u4E2A\u957F\u5EA6\u4E3A 1 \u7684\u5B57\u7B26\u4E32\u88C5\u7BB1\u540E\u5360\u7528 12 \u5B57\u8282\uFF0C\u8FD9\u4F1A\u9020\u6210\u4E00\u5B9A\u7684\u6027\u80FD\u6298\u635F \u2014\u2014 \u5F53\u7136\u591A\u6570\u60C5\u51B5\u4E0B\u5E76\u4E0D\u9700\u8981\u7279\u522B\u5173\u5FC3\uFF0C\u9664\u975E\u8FD9\u7C7B\u64CD\u4F5C\u53D8\u6210\u9AD8\u9891\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6B63\u5728\u5B9E\u73B0\u7F16\u8BD1\u5668\u7684\u65F6\u5019\u5C31\u6D89\u53CA\u5927\u91CF\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C\uFF0C\u6B64\u65F6\u4F1A\u6709\u5927\u91CF\u5B57\u7B26\u4E32\u64CD\u4F5C\uFF0C\u4F1A\u76F8\u5F53\u5F71\u54CD\u6027\u80FD"),
                        React.createElement(P, null, "golang \u91CC\u5BF9\u6570\u7EC4 / \u5B57\u7B26\u4E32\u5F15\u5165\u4E86\u5207\u7247\u8FD9\u79CD\u6784\u9020\u6765\u4F18\u5316\u4F7F\u7528\u6548\u679C\uFF0C\u6211\u8BA1\u5212\u4E5F\u6574\u4E00\u4E2A\u57FA\u4E8E js \u7684\u770B\u770B\u6548\u679C"),
                        React.createElement(Col, { units: [1, 1] },
                            React.createElement(Code, { lang: 'rust', source: `
          //
          // EcznScript
          // 
          let str = "你好，世界！"
          let str2 = str[:]
          let str3 = str[0]
        ` }),
                            React.createElement(Code, { overflow: 'visible', lang: 'javascript', source: `
          //
          // 编译输出 JS
          //
          let str = '你好，世界！'
          let str2 = _$$slice(str, 0, str.length)
          let str3 = _$$slice(str, 0, 0 + 1)

          const Slice$$Tag = {};
          function __$$slice(obj, start, end) {
            // 这个构造在 v8 下是 12~16 字节，不会复制原字符串
            return { tag: Slice$$Tag, obj, start, end }
          }
        ` })),
                        React.createElement(H2, null, "TC39 \u7279\u6027\u4EE5\u53CA\u793E\u533A\u5B9E\u8DF5\u4E0D\u4E00\u5B9A\u9AD8\u6027\u80FD"),
                        React.createElement(P, null, "js0 \u662F\u8FD1\u671F\u793E\u533A\u63D0\u7684\u6982\u5FF5\uFF0C\u6765\u81EA\u4E8E tc39 \u7684\u7279\u6027\u5206\u4E3A\u4E24\u7C7B\uFF1A\u4E00\u79CD\u662F\u8BED\u6CD5\u7CD6\uFF0C\u6BD4\u5982\u53EF\u9009\u94FE\u8FD9\u4E9B\uFF0C\u8FD8\u6709\u4E00\u79CD\u662F runtime \u673A\u5236\uFF0C\u6BD4\u5982 generator \u8FD9\u79CD\uFF0C\u56E0\u6B64\u57FA\u4E8E\u8FD9\u4E2A\u5206\u7C7B\u53EF\u4EE5\u5427 js \u6807\u51C6\u62C6\u6210\u4E24\u4EFD\uFF0C\u4E00\u4EFD\u662F\u7C7B\u4F3C\u7EAF ES5 \u7684 js\uFF0C\u53EA\u6709\u6838\u5FC3\u7279\u6027\uFF0C\u8FD8\u6709\u4E00\u4EFD\u662F\u5404\u79CD\u8BED\u6CD5\u7CD6\u7B49\u7B49\uFF1B \u663E\u7136\u4E00\u4E2A\u9759\u6001\u7684 js0 \u6027\u80FD\u4E0D\u4F1A\u5DEE\u5230\u8DDF native \u6709\u6570\u91CF\u7EA7\u5DEE\u8DDD\u7684\uFF0C\u800C\u52A0\u5165\u4E86\u52A8\u6001\u6027\u8D28\u540E\u7684 js \u624D\u662F\u771F\u6B63\u6162\u7684\u6839\u6E90 \uFF08\u6BD4\u5982 proxy\u3001getter/setter\u3001delete \u7B49\u7B49\uFF0Cproxy \u6211\u5728\u51E0\u5E74\u524D\u624B\u52A8\u6D4B\u8FC7\uFF1A\u6BEB\u79D2\u7EA7\u7684\u64CD\u4F5C\u53EF\u4EE5\u52A3\u5316\u5230\u79D2\u7EA7"),
                        React.createElement(P, null, "for-of \u5B9E\u9645\u4E0A\u4F1A\u5F15\u5165\u91CD\u578B\u65E0\u6808\u534F\u7A0B\uFF0C\u5B9E\u9645\u6027\u80FD\u53EF\u80FD\u76F8\u5F53\u7CDF\u7CD5\uFF0C\u5C24\u5176\u662F\u7F16\u8BD1\u6210 es5 \u540E\u4F1A\u6162\u597D\u51E0\u500D\uFF0C\u518D\u6BD4\u5982 `fn(...args)` \u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5B9E\u9645\u4E0A\u4F1A\u904D\u5386\u4E00\u6B21 args\uFF0C\u6027\u80FD\u6781\u5176\u7CDF\u7CD5\uFF0C\u518D\u6BD4\u5982 `function fn(options)` \u7136\u540E options \u4E0A\u653E\u4E00\u5806\u4E1C\u897F\uFF0C\u7136\u540E\u5230\u5904 `...options` \u590D\u5236 & \u5408\u5E76\uFF0C\u5B9E\u9645\u6027\u80FD\u76F8\u5F53\u7CDF\u7CD5: "),
                        React.createElement(ImgDynamic, { file: fileHeavyRuntiePng }),
                        React.createElement(P, null, "\u4F46\u662F\u4E0A\u9762\u8FD9\u4E9B\u95EE\u9898\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53EF\u4EE5\u901A\u8FC7\u73B0\u4EE3\u7684\u7F16\u8BD1\u6280\u672F\u89E3\u51B3\uFF0C\u6BD4\u5982 named parameters \u4EE5\u53CA\u8C03\u7528\u53C2\u6570\u8C03\u6574\u53EF\u4EE5\u6700\u5927\u7A0B\u5EA6\u51CF\u5C11\u8C03\u7528\u5F00\u9500\u3001\u9759\u6001 struct \u548C trait \u5206\u53D1\u89E3\u51B3\u65B9\u6CD5\u70B9\u8BFB\u7684\u5F00\u9500\u7B49\u7B49"),
                        React.createElement(H2, null, "\u6700\u540E\u4E00\u4E2A\uFF0C\u6253\u5305\u95EE\u9898"),
                        React.createElement(P, null, "\u524D\u7AEF\u6253\u5305\u8FD9\u4E2A\u6982\u5FF5\u63A5\u8FD1\u4E8E native \u8BED\u8A00\u7684\u94FE\u63A5\u64CD\u4F5C \u2014\u2014 \u5C06\u6240\u6709\u7B26\u53F7\u548C\u7F16\u8BD1\u540E\u7684\u76EE\u6807\u6587\u4EF6 all-in-one \u5728\u4E00\u4E2A\u6587\u4EF6\u5185\u3002\u76EE\u524D\u793E\u533A\u5185\u6D41\u884C\u7684 js \u6253\u5305\u65B9\u6848\u5747\u6CA1\u6709\u8003\u8651\u70B9\u8BFB\u6027\u80FD\u95EE\u9898\uFF0CEzcnScript \u6700\u540E\u8FD8\u662F\u4F1A\u6253\u5305\u4E3A\u5355\u6587\u4EF6\u7684\uFF0C\u8FD9\u4E2A\u4E5F\u662F\u5FC5\u987B\u8981\u89E3\u51B3\u7684\u4E00\u4E2A\u95EE\u9898"),
                        React.createElement(P, null, "\u5176\u5B9E\u66FE\u7ECF ts \u4E5F\u662F\u53EF\u4EE5\u505A\u6253\u5305\u7684\uFF1A\u914D\u5408 namespace \u548C outFile \u586B\u4E3A\u4E00\u4E2A\u6587\u4EF6\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u867D\u7136\u505A\u5F97\u5F88\u8584\uFF0C\u4F46\u5728 4.x \u65F6\u4EE3\u7684 ts \u6E90\u7801\u4E00\u76F4\u90FD\u662F\u8FD9\u6837\u505A\u7684\uFF0C\u6548\u679C\u4E5F\u8FD8\u53EF\u4EE5\uFF0CEcznScript \u4E5F\u8981\u4ECB\u5165\u6253\u5305\u6210 js \u7684\u5904\u7406\uFF0C\u5E76\u4E14\u63D0\u4F9B .d.ts \u6587\u4EF6\u4F9B\u5916\u90E8 js \u505A ffi \u4F7F\u7528\u3002")),
                    React.createElement(H1Block, { id: "when-it-could-be-done", title: "\u51E0\u65F6\u5B8C\u6210\uFF1F" },
                        React.createElement(P, null,
                            "\u6CE8\u610F\uFF0CEcznScript \u53EA\u662F\u4E00\u4E2A\u521D\u6B65\u7684\u60F3\u6CD5",
                            React.createElement(Footnote, { content: React.createElement(React.Fragment, null,
                                    "\uD83D\uDCA1 \u8865\u5145\u4E0B: ",
                                    React.createElement("br", null),
                                    "\u53EA\u80FD\u8BF4\u786E\u5B9E\u662F\u5F88\u7A1A\u5AE9\u7684\u60F3\u6CD5\uFF0C\u672C\u6587\u5199\u5B8C\u540E\u6211\u53C8\u770B\u4E86\u4E00\u4E9B C / moonbit / wasm \u7684\u5904\u7406\u7EC6\u8282\uFF0C\u53D1\u73B0\u5982\u679C\u6709\u6CDB\u578B\u7684\u8BDD trait \u7684\u7C7B\u578B\u53EF\u4EE5\u5728\u7F16\u8BD1\u671F\u786E\u5B9A\uFF0C\u6B64\u5904\u5BF9 trait \u7684\u5904\u7406\u66F4\u63A5\u8FD1 golang \u7684\u5904\u7406\uFF0C\u5373\u5305\u88C5\u6210\u4E00\u4E2A go interface \u5BF9\u8C61\u6765\u505A \u2014\u2014 \u53EA\u80FD\u8BF4\u6709\u5404\u6709\u597D\u6709\u574F\u5427\uFF0C\u5F53\u7136\u66F4\u91CD\u8981\u7684\u662F\uFF1A\u5982\u679C\u6211\u771F\u7684\u8981\u5B9E\u73B0\u8FD9\u4E2A\u8BED\u8A00\uFF0C\u90A3\u6211\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u7528 moonbit \u5462\uFF1F\u90A3\u53EF\u662F Rust with GC ? \u6240\u4EE5\u6211\u9884\u611F\u5230\u540E\u9762\u5927\u6982\u7387\u4F1A\u5F03\u5751\u8FD9\u4E2A 233") }),
                            "\uFF0C\u8FD9\u91CC\u8FD8\u662F\u7B80\u5355\u5217\u51E0\u4E2A\u9636\u6BB5\u6027\u7684\u76EE\u6807\uFF0C\u540E\u7EED\u6211\u4E5F\u4F1A\u5728\u672C\u7AD9\u6301\u7EED\u66F4\u65B0\u5F00\u53D1\u8FDB\u5EA6\uFF0C\u5F53\u7136\u4E5F\u53EF\u80FD\u968F\u65F6\u5F03\u5751\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u5B9E\u73B0 lexing & parsing\uFF0C\u8BED\u6CD5\u4E0A\u8BA1\u5212\u76F4\u63A5\u6284 rust\u3001go\u3001ts \u8FD9\u4E09\u4E2A\uFF0Cruntime \u4E0A\u4F1A\u53C2\u8003 rust \u548C go \u7684\u4E00\u4E9B\u5904\u7406\uFF0C\u6BD4\u5982 trait\uFF0C\u6CDB\u578B\u8D70\u64E6\u9664\u8DEF\u7EBF(? \u76EE\u524D\u8FD8\u4E0D\u77E5\u9053\u914D\u5408 trait \u53EF\u4E0D\u53EF\u884C)"),
                            React.createElement(P, null, "\u5B9E\u73B0\u57FA\u7840\u7C7B\u578B\u68C0\u67E5 (struct \u5F15\u7528\u548C\u539F\u59CB\u7C7B\u578B)"),
                            React.createElement(P, null, "\u5B8C\u6210 js codegen \u7BA1\u7EBF, \u8F93\u51FA\u7684 js \u9700\u8981\u5C3D\u53EF\u80FD\u7684\u9759\u6001"),
                            React.createElement(P, null, "\u57FA\u7840 LSP + VSCode \u9002\u914D"),
                            React.createElement(P, null, "\u5B8C\u6210 trait \u7CFB\u7EDF: \u58F0\u660E\u3001\u5B9E\u73B0\u3001\u52A8\u6001\u5206\u53D1"),
                            React.createElement(P, null, "\u9AD8\u7EA7\u7C7B\u578B\u7CFB\u7EDF\uFF1Aenum-adt\u3001\u7C7B\u578B\u63A8\u5BFC\u3001\u6CDB\u578B\u7B49"),
                            React.createElement(P, null, "..."))));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
