System.register(['react', 'rally/@@', './test_x86_asm.png.js', './add_benchmark.png.js', './slot_smi.png.js', './slot_any.png.js', './union_return.png.js', './turbofan_cost.png.js', './ShouldOptimize.png.js', './maglevBenchmark.svg.js', './c-point-read.png.js', './memStructPoint.png.js', './memMaybe1.png.js', './memMaybe2.png.js', './rt1.png.js', './rt2.png.js', './rt3.png.js', './rt4.png.js', './rt5.png.js', './v8-ics-03.svg.js', './v8-ics-04.svg.js', './v8-ics-11.svg.js', './v8-ics-05.svg.js', './v8-ics-06.svg.js', './v8-ics-06-2.svg.js', './v8-ics-04-2.svg.js', './serviceMap1.png.js', './serviceMap2.png.js', './serviceMap3.png.js', './v8-ics-12.svg.js', './delete.png.js', './v8-ics-09.svg.js'], (function (exports) {
    'use strict';
    var React, P, H1Block, Code, H2, ImgDynamic, Numbering, Col, Link, metaBeauty, fileTestX86ASM, fileAddBenchmark, fileSlotSMI, fileSlotANY, fileUnionReturn, fileTurboFanCost, fileShouldOptimize, fileMaglevBenchmark, fileCPointRead, fileMemStructPoint, fileMemMaybe1, fileMemMaybe2, fileRt1, fileRt2, fileRt3, fileRt4, fileRt5, fileV8ICs03, fileV8ICs04, fileV8ICs11, fileV8ICs05, fileV8ICs06, fileV8ICs062, fileV8ICs042, fileServiceMap1, fileServiceMap2, fileServiceMap3, fileV8ICs12, fileDelete, fileV8ICs09;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Code = module.Code;
            H2 = module.H2;
            ImgDynamic = module.ImgDynamic;
            Numbering = module.Numbering;
            Col = module.Col;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            fileTestX86ASM = module.default;
        }, function (module) {
            fileAddBenchmark = module.default;
        }, function (module) {
            fileSlotSMI = module.default;
        }, function (module) {
            fileSlotANY = module.default;
        }, function (module) {
            fileUnionReturn = module.default;
        }, function (module) {
            fileTurboFanCost = module.default;
        }, function (module) {
            fileShouldOptimize = module.default;
        }, function (module) {
            fileMaglevBenchmark = module.default;
        }, function (module) {
            fileCPointRead = module.default;
        }, function (module) {
            fileMemStructPoint = module.default;
        }, function (module) {
            fileMemMaybe1 = module.default;
        }, function (module) {
            fileMemMaybe2 = module.default;
        }, function (module) {
            fileRt1 = module.default;
        }, function (module) {
            fileRt2 = module.default;
        }, function (module) {
            fileRt3 = module.default;
        }, function (module) {
            fileRt4 = module.default;
        }, function (module) {
            fileRt5 = module.default;
        }, function (module) {
            fileV8ICs03 = module.default;
        }, function (module) {
            fileV8ICs04 = module.default;
        }, function (module) {
            fileV8ICs11 = module.default;
        }, function (module) {
            fileV8ICs05 = module.default;
        }, function (module) {
            fileV8ICs06 = module.default;
        }, function (module) {
            fileV8ICs062 = module.default;
        }, function (module) {
            fileV8ICs042 = module.default;
        }, function (module) {
            fileServiceMap1 = module.default;
        }, function (module) {
            fileServiceMap2 = module.default;
        }, function (module) {
            fileServiceMap3 = module.default;
        }, function (module) {
            fileV8ICs12 = module.default;
        }, function (module) {
            fileDelete = module.default;
        }, function (module) {
            fileV8ICs09 = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'v8-asm-detail-of-inline-caches',
                title: 'V8 Inline Caches 优化及其汇编细节',
                author: 'eczn',
                // category: '分类',
                time: new Date('2024-06-30 07:49'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u5199\u5728\u524D\u9762\uFF1A\u524D\u6BB5\u65F6\u95F4\u5DE5\u4F5C\u91CD\u5FC3\u5728\u6027\u80FD\u4F18\u5316\uFF0C\u7740\u91CD\u770B\u4E86 V8 \u76F8\u5173\u7684\u4F18\u5316\u7EC6\u8282\uFF0C\u5C24\u5176\u662F Inline Caches (ICs) \u6280\u672F\uFF0C\u540E\u9762\u4F9D\u636E\u8FD9\u9879\u6280\u672F\u5C06\u6838\u5FC3\u6307\u6807\u6027\u80FD\u4F18\u5316\u5230\u539F\u6765\u7684\u5341\u500D\uFF0C\u8FD9\u91CC\u8BB0\u5F55\u4E00\u4E0B ICs \u76F8\u5173\u7EC6\u8282\uFF0C\u4EC5\u4F9B\u53C2\u8003"),
                        React.createElement(P, null, "_\u8D85\u957F\u6587\u8B66\u544A_")),
                    React.createElement(H1Block, { id: "jit-performance", title: "\u89E3\u91CA\u5668 + JIT \u7684\u6027\u80FD\u6BD4\u60F3\u8C61\u4E2D\u7684\u8981\u597D" },
                        React.createElement(P, null, "\u89E3\u91CA\u5668\u624B\u5199\u7684 line-by-line \u865A\u62DF\u673A\u6267\u884C\u6D41\u6C34\u7EBF\u5B8C\u5168\u6BD4\u4E0D\u4E0A CPU \u5185\u90E8\u7684\u6307\u4EE4\u6D41\u6C34\u7EBF\u4EE5\u53CA\u66F4\u4E3A\u5938\u5F20\u7684\u5206\u652F\u9884\u6D4B\u624B\u6BB5\uFF0C\u56E0\u6B64\u6211\u4E2A\u4EBA\u8FC7\u53BB\u8BA4\u4E3A C \u81F3\u5C11\u6BD4 JS \u5FEB 10 \u500D+\uFF0C\u76F4\u5230\u6700\u8FD1\u770B\u4E86\u4E0D\u5C11\u7684 v8 benchmark \u4E4B\u540E\u624D\u5BF9\u8FD9\u5757\u6709\u6240\u6539\u89C2\uFF0C\u76EE\u524D\u7684\u89C2\u70B9\u662F\uFF1A\u53EA\u8981\u6784\u9020\u5408\u9002\uFF0CV8 JIT \u53EF\u4EE5\u6709\u5AB2\u7F8E\u539F\u751F AOT \u7684\u6027\u80FD\uFF0C\u5F53\u7136\u4E5F\u5BB9\u6613\u51FA\u73B0\u975E\u5E38\u5938\u5F20\u7684\u6027\u80FD\u52A3\u5316\u3002\uFF08\u8FD9\u91CC\u5F53\u7136\u662F\u6307 CPU \u6027\u80FD\uFF0C\u5185\u5B58\u6027\u80FD\u80AF\u5B9A\u6C38\u8FDC\u6BD4\u4E0D\u4E0A\u88F8\u673A\u7684\uFF09"),
                        React.createElement(P, null, "\u56DE\u5230 V8 \u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u5B83\u9996\u5148\u5C06\u4EE3\u7801\u7F16\u8BD1\u4E3A AST\uFF0C\u7136\u540E\u5C06 AST \u7F16\u8BD1\u4E3A bytecode \u5B57\u8282\u7801\u5E76\u4EA4\u7ED9\u53EB\u505A ignition \u7684\u89E3\u91CA\u5668\u8FDB\u884C\u89E3\u91CA\u6267\u884C\uFF0C\u5E76\u5728\u300C\u5408\u9002\u300D\u7684\u65F6\u5019\u5C06\u8FD9\u4E9B\u5B57\u8282\u7801\u7ECF\u7531 TurboFan \u7F16\u8BD1\u4E3A\u88F8\u673A\u80FD\u76F4\u63A5\u8FD0\u884C\u7684\u673A\u5668\u6C47\u7F16\u6307\u4EE4\uFF0C\u8FD9\u79CD\u8FB9\u6267\u884C\u8FB9\u7F16\u8BD1\u7684\u8FC7\u7A0B\u53EB\u505A JIT\u3002"),
                        React.createElement(P, null, "\u9664\u6B64\u4E4B\u5916\uFF0C\u5F15\u64CE\u5728\u8FD0\u884C\u671F\u95F4\u8FD8\u4F1A\u6301\u7EED\u6536\u96C6\u8C03\u7528\u53CD\u9988 feedback\uFF0C\u5E76\u4F9D\u636E\u8FD9\u4E9B feedback \u8FDB\u4E00\u6B65\u4F18\u5316 JIT \u7684\u6548\u679C\u3002"),
                        React.createElement(P, null, "\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u4E0B\u56FE\u7684 add \u51FD\u6570\uFF0C\u5728\u540E\u9762\u8C03\u7528\u4E86\u975E\u5E38\u591A\u6B21\u540E\uFF0C\u5F15\u64CE\u5C31\u53EF\u4EE5\u5408\u7406\u7684\u5047\u8BBE (assumption) \u2014\u2014\u300Cadd \u63A5\u53D7\u7684\u4E24\u4E2A\u53C2\u6570 \u201C\u5927\u6982\u7387\u201D \u90FD\u662F\u6574\u6570\u300D"),
                        React.createElement(Code, { lang: "tsx", source: `
        function add(a, b) {
          return a + b;
        }

        for (let i = 0; i < 1_000_000; i++) {
          // 调用了非常多次后，引擎就可以得到一条重要信息：
          // add 接受的两个参数 “大概率” 是整数
          add(i, i);
        }
      ` }),
                        React.createElement(P, null, "\u90A3\u4E48\u6839\u636E\u8FD9\u6837\u7684\u5047\u8BBE\u5C31\u53EF\u4EE5\u6309\u8FD9\u6837\u7684\u65B9\u5F0F\u8FDB\u884C JIT \u4F18\u5316 (\u4F2A\u4EE3\u7801): "),
                        React.createElement(Code, { lang: "tsx", source: `
        // 依据这个假设「add 接受的两个参数 “大概率” 都是整数」
        // 来将前面的 js add 优化编译为一个原生的函数实现: 
        fn add_jit(a: unknown, b: unknown): int {
          if (a 不是整数) goto 回滚到解释器运行;
          if (b 不是整数) goto 回滚到解释器运行;
          // 执行汇编级别原生整数加法
          return X86_ASM_ADD(a, b);
        }
      ` })),
                    React.createElement(H1Block, { id: "v8-runtime-call", title: "V8 \u5185\u7F6E runtime \u6307\u4EE4 --allow-natives-syntax" },
                        React.createElement(P, null, "\u5229\u7528\u8FD9\u4E2A\u53C2\u6570\u5F00\u542F v8 \u6CE8\u5165\u7684 runtime call\uFF0C\u5E2E\u52A9\u5206\u6790\u548C\u8C03\u8BD5 v8"),
                        React.createElement(Code, { lang: 'bash', source: `
        # node 下开启
        $ node --allow-natives-syntax
        # chrome 下开启
        $ open -a Chromium --args --js-flags="--allow-natives-syntax"
      ` }),
                        React.createElement(P, null, "\u5F00\u542F\u540E\u53EF\u4EE5\u5728 js \u7528 % \u5F00\u5934\u7684\u5185\u7F6E runtime \u8C03\u7528\u6765\u8F93\u51FA\u4E00\u4E9B\u5185\u5BB9"),
                        React.createElement(Code, { lang: 'js', source: `
        %DebugPrint(1234);
        // node --allow-natives-syntax ./test.js
        // 会输出很多东西 ...
      ` }),
                        React.createElement(P, null, "\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u6307\u4EE4"),
                        React.createElement(H2, null, "%DebugPrint(something);"),
                        React.createElement(P, null, "\u53EF\u4EE5\u6253\u5370\u5BF9\u8C61\u5728 v8 \u7684\u5185\u90E8\u4FE1\u606F\uFF0C\u6BD4\u5982\u6253\u5370\u4E00\u4E2A\u51FD\u6570:"),
                        React.createElement(ImgDynamic, { file: fileRt1 }),
                        React.createElement(H2, null, "%GetOptimizationStatus(fn);"),
                        React.createElement(P, null, "\u83B7\u53D6\u51FD\u6570\u5F53\u524D\u7684\u4F18\u5316 status\uFF0C\u540E\u6587\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD:"),
                        React.createElement(ImgDynamic, { file: fileRt2 }),
                        React.createElement(P, null, "\u5BF9\u5E94\u7684\u662F V8 \u6E90\u7801\u91CC\u7684\u8FD9\u4E2A\u679A\u4E3E:"),
                        React.createElement(ImgDynamic, { file: fileRt3 }),
                        React.createElement(ImgDynamic, { file: fileRt4 }),
                        React.createElement(P, null, "\u4ECE\u5F00\u53D1\u89C6\u89D2\u6765\u770B\uFF0C\u4E00\u4E2A\u51FD\u6570\u6700\u4F73\u7684 status \u5E94\u8BE5\u662F 81 \u4E5F\u5C31\u662F `00000000000001010001`:"),
                        React.createElement(ImgDynamic, { file: fileRt5 }),
                        React.createElement(H2, null, "%OptimizeFunctionOnNextCall(fn);"),
                        React.createElement(P, null, "\u544A\u8BC9 v8 \u4E0B\u6B21\u8C03\u7528\u4E3B\u52A8\u89E6\u53D1\u4F18\u5316\u51FD\u6570 fn"),
                        React.createElement(H2, null, "%HasFastProperties(obj);"),
                        React.createElement(P, null, "%HasFastProperties \u53EF\u4EE5\u7528\u6765\u6253\u5370\u5BF9\u8C61\u662F\u5426\u662F Fast Properties \u6A21\u5F0F"),
                        React.createElement(ImgDynamic, { file: fileDelete }),
                        React.createElement(P, null, "\u540E\u6587\u4F1A\u4ECB\u7ECD\u8FD9\u4E2A Fast Properties \u548C\u4E0E\u4E4B\u5BF9\u7ACB\u7684 Slow Properties")),
                    React.createElement(H1Block, { id: "v8-structure", title: "V8 \u57FA\u4E8E assumption \u7684\u6C47\u7F16\u4F18\u5316\u7EC6\u8282" },
                        React.createElement(P, null, "\u90A3\u4E48\uFF0CV8 \u662F\u5982\u4F55\u5229\u7528\u300C\u5408\u7406\u7684\u5047\u8BBE\u300D\u6765\u901A\u8FC7 TurboFan \u5C06\u4EE3\u7801\u7F16\u8BD1\u4E3A\u6C47\u7F16\u673A\u5668\u7801\u7684\u5462\uFF1F\u6211\u4EEC\u5148\u6765\u770B\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u4E00\u4E2A add(x,y) \u51FD\u6570\uFF0C\u5982\u679C\u8FD0\u884C\u671F\u95F4\u51FA\u73B0\u4E86\u591A\u79CD\u7C7B\u578B\u7684\u4F20\u53C2\uFF0C\u90A3\u4E48\u4F1A\u5BFC\u81F4\u4EE3\u7801\u53D8\u6162\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileAddBenchmark }),
                        React.createElement(P, null, "\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0CL15 \u901F\u5EA6\u6162\u4E86\u975E\u5E38\u591A\uFF0C\u6BD4\u4E00\u5F00\u59CB\u7684 66ms \u6162\u4E86\u51E0\u500D\uFF0C\u63A8\u6D4B\u539F\u56E0\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u4E00\u5F00\u59CB\u53EA\u4F1A\u4F20\u6570\u5B57\u7684\u65F6\u5019\uFF0CV8 \u4F1A\u5047\u8BBE\u8FD9\u662F\u6570\u5B57\u52A0\u6CD5\uFF0C\u53EF\u4EE5\u6781\u81F4\u4F18\u5316\u3002\uFF0866 \u6BEB\u79D2\u53EF\u4EE5\u8DD1\u5B8C\uFF09"),
                            React.createElement(P, null, "L13 \u4F20\u5165\u5176\u4ED6\u53C2\u6570\uFF0C\u4E0A\u8FF0\u5047\u8BBE\u4F1A\u88AB\u63A8\u7FFB\uFF0C\u6B64\u65F6\u6253\u5370\u4E00\u6B21\u4F18\u5316\u72B6\u6001\u53EF\u4EE5\u770B\u770B\u51FA\u73B0\u4E86\u53CD\u4F18\u5316\uFF0C\u5728 L13 \u6267\u884C\u7684\u65F6\u5019\u5B9E\u9645\u8D70\u7684\u662F ignition \u89E3\u91CA\u5668\u53BB\u8DD1\u7684\u3002"),
                            React.createElement(P, null, "\u6267\u884C L15 for \u5FAA\u73AF\u8D70\u4E86\u8DB3\u591F\u591A\u6B21\u540E\uFF0Cturbofan \u6536\u96C6\u5230\u8DB3\u591F\u7684\u4FE1\u606F\u540E\u4F1A\u91CD\u65B0\u5EFA\u7ACB\u5047\u8BBE\u6765\u505A\u4F18\u5316\uFF0C\u4E0D\u8FC7\u8FD9\u6B21\u7684\u5047\u8BBE\u662F\u300C\u5165\u53C2\u53EF\u80FD\u662F number \u4E5F\u53EF\u80FD\u662F string\u300D\u2014\u2014 \u8FD9\u610F\u5473\u7740\u8C03\u7528\u7684\u65F6\u5019\u8981\u591A\u5224\u65AD\u5165\u53C2\u7C7B\u578B\u662F string \u8FD8\u662F number \u4ECE\u800C\u5BFC\u81F4\u4E86\u6700\u7EC8\u7684\u6027\u80FD\u52A3\u5316 \uFF08\u4E00\u6A21\u4E00\u6837\u7684\u4EE3\u7801\u8981 243 \u6BEB\u79D2\u624D\u8DD1\u5B8C\uFF0C\u6162\u4E86\u6709\u4E09\u500D\u5427\uFF09")),
                        React.createElement(P, null, "\u90A3\u4E48\uFF0C\u5728\u6C47\u7F16\u5C42\u9762\u4E0A\uFF0CV8 \u5982\u4F55\u533A\u5206 0xXXXX \u662F\u6570\u5B57\u8FD8\u662F\u5BF9\u8C61\uFF1F\u2014\u2014 V8 \u4F7F\u7528 Tagged Pointer \u6765\u8868\u793A JS \u91CC\u7684\u503C\u548C\u5F15\u7528\uFF0C\u5177\u4F53\u89C1\u4E0B\u4E00\u8282"),
                        React.createElement(H2, null, "Tagged Pointer"),
                        React.createElement(P, null, "\u5BF9\u4E8E V8 \u91CC\u7684 Tagged Pointer\uFF0C\u9996\u5148\u5B83\u662F C/C++ \u91CC\u901A\u7528\u7684\u4F18\u5316\u6280\u672F\uFF0C\u4E0D\u53EA\u5728 V8 \u91CC\u6709\u7528\uFF0C\u5177\u4F53\u6765\u8BF4\u5C31\u662F\u4F9D\u636E pointer \u81EA\u8EAB\u7684\u6570\u503C\u7684\u67D0\u4E9B\u4F4D\u6765\u51B3\u5B9A pointer \u7684\u884C\u4E3A\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD9\u7C7B\u6307\u9488\u7684\u7279\u70B9\u662F\u300C\u5176\u6307\u9488\u6570\u503C\u4E0A\u7684\u67D0\u4E9B\u4F4D\u6709\u7279\u6B8A\u542B\u4E49\u300D\uFF0C\u6BD4\u5982\u5728 v8 \u91CC\uFF0Cjs \u5806\u6307\u9488\u548C SMI \u5C0F\u6574\u6570\u7C7B\u578B\uFF08small intergers\uFF09\u662F\u901A\u8FC7 Tagged Pointer \u6765\u8868\u8FBE\u548C\u5F15\u7528\u7684\uFF0C\u533A\u522B\u5C31\u5728\u4E8E\u6700\u4F4E\u4E00\u4F4D\u662F\u4E0D\u662F 0 \u6765\u51B3\u5B9A\u5176\u6307\u9488\u7C7B\u578B\uFF1A"),
                        React.createElement(Code, { lang: "bash", source: `
        # 对象指针（32 位）：
        xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxx1

        # SMI 小整数（32 位）其中 xxx 部分为数值部分：
        xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxx0
      ` }),
                        React.createElement(P, null, "\u7528 C \u8868\u8FBE\u5C31\u662F\u8FD9\u6837\uFF1A"),
                        React.createElement(Code, { lang: "c", source: `
        #include <stdio.h>

        void printTaggedPointer(void * p) {
          // 强转一下, 关注 p 本身的数值
          unsigned int tp = ((unsigned int) p);

          if ((tp & 0b1) == 0b0) {
            printf("p 是 SMI, 数值大小为 0x%x \n", tp >> 1);
            return;
          }

          printf("p 是堆对象指针, Object<0x%x> \n", tp);
          // printObject(*p); // 假设有个方法可以打印堆对象
        }

        int main() {
          printTaggedPointer(0x1234 << 1); // smi
          printTaggedPointer(17); // object
          return 0;
        }
      ` }),
                        React.createElement(H2, null, "\u5229\u7528 Tagged Pointer \u6765\u9A8C\u8BC1\u5047\u8BBE"),
                        React.createElement(P, null, "\u6211\u4E3A\u4F55\u8981\u63D0\u5230 Tagged Pointer ? \u56E0\u4E3A\u8FD9\u8DDF\u5E95\u5C42\u6C47\u7F16 codegen \u5BC6\u5207\u76F8\u5173\uFF0C\u6BD4\u5982\u524D\u9762\u7684 add_jit \u91CC\uFF0CV8 \u5C31\u662F\u5229\u7528 Tagged Pointer \u7EC6\u8282\u6765\u505A codegen \u6765\u5B9E\u73B0 JIT \u4F18\u5316\u7684\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: `
        // 依据这个假设「add 接受的两个参数 “大概率” 都是整数」
        // 来将前面的 js add JIT 优化编译为一个原生的函数实现: 
        fn add_jit(a: unknown, b: unknown): int {
          if (a 最低位不是 0) goto 回滚到解释器运行; // 不是 0 则代表不是 SMI 整数
          if (b 最低位不是 0) goto 回滚到解释器运行; // 不是 0 则代表不是 SMI 整数
          // 执行汇编级别原生整数加法
          return X86_ASM_ADD(a, b);
        }
      ` }),
                        React.createElement(H2, null, "assumption \u88AB\u6253\u7834\u7684\u65F6\u5019\u4E0D\u4F1A crash / \u786C\u4EF6\u9519\u8BEF / \u6BB5\u9519\u8BEF\u5417\uFF1F"),
                        React.createElement(P, null, "\u524D\u9762\u5DF2\u7ECF\u63D0\u8FC7\u4E86\uFF0C\u662F\u53EF\u4EE5\u901A\u8FC7\u5408\u7406\u7684\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1\u6765\u5728\u6C47\u7F16\u7684\u5C42\u9762\u4E0A\u533A\u5206\u5165\u53C2\u7684\u7C7B\u578B\u7684\uFF0C\u6BD4\u5982\u5229\u7528 Tagged Pointer \u6765\u533A\u5206\u6574\u6570 / \u5BF9\u8C61\u7C7B\u578B \u2014\u2014"),
                        React.createElement(P, null, "\u4E0A\u8FF0\u8BF4\u6CD5\u53EF\u80FD\u4F1A\u6BD4\u8F83\u542B\u7CCA\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5177\u4F53\u770B\u770B\u6253\u51FA\u6765\u7684\u6C47\u7F16\u662F\u548B\u6837\u7684\u6765\u9A8C\u8BC1\u6211\u4EEC\u521A\u5B66\u7684 Tagged Pointer\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6253\u5370\u51FA\u4F18\u5316\u540E\u7684 x86 \u6C47\u7F16\uFF08m1 \u82AF\u7247\u7684\u82F9\u679C\u7535\u8111\u5E94\u8BE5\u662F arm \u6C47\u7F16\uFF09"),
                        React.createElement(Code, { lang: 'bash', source: `
        $ node --print-opt-code \\
               --allow-natives-syntax \\
               --trace-opt \\
               --trace-deopt \\
               ./a.js
      ` }),
                        React.createElement(P, null, "\u5982\u4E0B\u56FE\u6240\u793A\uFF0CL19 ~ L22 \u5176\u5B9E\u5C31\u662F\u5728\u6839\u636E Tagged Pointer \u7684\u6027\u8D28\u6765\u5224\u65AD\u5165\u53C2\u662F\u4E0D\u662F SMI\uFF0C\u5177\u4F53\u6765\u8BF4\u662F `[rbx+0xf]` \u4E0E 0x1 \u505A\u6309\u4F4D\u4E0E\u64CD\u4F5C\uFF08`[rbx+0xf]` \u662F\u901A\u8FC7\u6808\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u662F v8 \u91CC js \u7684\u8C03\u7528\u7EA6\u5B9A\uFF09\u5982\u679C\u7ED3\u679C\u662F 0 \u5219\u8DF3\u8F6C 0x10b7cc34f \u5373\u540E\u7EED\u7684\u6B63\u5E38\u6D41\u7A0B\uFF0C\u5426\u5219\u8D70\u5230 `CompileLazyDeoptimizedCode` \u8D70\u53CD\u4F18\u5316\u6D41\u7A0B\uFF0C\u56DE\u6EDA\u7528 ignition \u5B57\u8282\u7801\u89E3\u91CA\u5668\u53BB\u6267\u884C\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileTestX86ASM }),
                        React.createElement(P, null, "\u53E6\u5916\u6211\u4EEC\u4E5F\u53EF\u4EE5\u770B\u5230\uFF0C\u6838\u5FC3\u903B\u8F91\u5BF9\u5E94\u5230\u6C47\u7F16\u4E5F\u5C31\u4E00\u884C\uFF0C\u5269\u4F59\u7684\u6307\u4EE4\u8981\u4E48\u662F checkpoint \u8981\u4E48\u662F v8/js \u7684\u8C03\u7528\u7EA6\u5B9A\uFF0C\u5728\u8FD9\u4E48\u591A\u5197\u4F59\u6307\u4EE4\u7684\u60C5\u51B5\u4E0B\u6267\u884C\u6027\u80FD\u4F9D\u7136\u5F88\u5FEB\uFF0C\u53EF\u89C1 CPU \u6307\u4EE4\u6D41\u6C34\u7EBF\u6548\u7387\u6BD4\u8D77 line-by-line \u7684\u89E3\u91CA\u5668\u6D41\u6C34\u7EBF\u8981\u9AD8\u5F97\u591A\u4E86\u3002"),
                        React.createElement(P, null, "\u800C\u4E14\uFF0C\u4ECE\u6C47\u7F16\u548C\u4F2A\u7801\u6765\u770B\u4E5F\u80FD\u77E5\u9053\uFF0C\u5982\u679C assumption \u7ECF\u5E38\u88AB\u6253\u7834\uFF0C\u6027\u80FD\u4F1A\u53D8\u5DEE\uFF0C\u800C\u4E14\u5982\u679C\u5165\u53C2\u7684\u7C7B\u578B\u592A\u591A\u4E5F\u4F1A\u5BFC\u81F4 checkpoint / type-guard \u7684\u903B\u8F91\u53D8\u590D\u6742\uFF0C\u56E0\u6B64\u4E5F\u80FD\u89E3\u91CA\u524D\u9762 add(a, b) \u4E3A\u4EC0\u4E48\u6253\u7834\u4E00\u6B21\u4E4B\u540E\u6027\u80FD\u5C31\u4E0D\u5982\u4E00\u5F00\u59CB\u7684\u6027\u80FD\u4E86 \u2014\u2014 \u7C7B\u578B\u68C0\u67E5 checkpoint \u903B\u8F91\u4F1A\u53D8\u5F97\u66F4\u590D\u6742\u5BFC\u81F4\u4F18\u5316\u6548\u7387\u4E0B\u964D\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: `
        // 依据这个假设「add 接受的两个参数 “大概率” 都是整数」
        // 来将前面的 js add JIT 优化编译为一个原生的函数实现: 
        fn add_jit_2(a: unknown, b: unknown): int {
          if (a 最低位不是 0) goto 回滚到解释器运行; // 不是 0 则代表不是 SMI 整数
          if (b 最低位不是 0) goto 回滚到解释器运行; // 不是 0 则代表不是 SMI 整数

          // 如果出现过 add('', '') 打破了先前的假设，那么后续就会多一条这样的检查了
          if (a 是字符串 && b 是字符串) return X86_ASM_STRING_CONCAT(a, b);

          // ... 其他 checkpoint 比如, boolean + boolean
          // ... 总之传的类型越杂这里行数就越多 ...
          // 而对于过于复杂的函数, V8 就不会开启 TurboFan 汇编优化了

          // 执行汇编级别原生整数加法
          return X86_ASM_ADD(a, b);
        }
      ` }),
                        React.createElement(H2, null, "\u54EA\u91CC\u53EF\u4EE5\u6253\u5370\u6240\u8C13 feedback \uFF1F"),
                        React.createElement(P, null, "\u901A\u8FC7 %DebugPrint \u53EF\u4EE5\u770B\u5230"),
                        React.createElement(ImgDynamic, { file: fileSlotSMI }),
                        React.createElement(P, null, "\u5F53\u6253\u7834\u8FD9\u4E2A assumption \u540E\uFF0C\u4F1A\u53D8\u6210 Any"),
                        React.createElement(ImgDynamic, { file: fileSlotANY }),
                        React.createElement(H2, null, "\u591A\u6001 return \u4F1A\u5BFC\u81F4\u4F18\u5316\u6548\u679C\u6253\u6298\u5417\uFF1F"),
                        React.createElement(P, null, "\u4E0D\u4F1A, \u5982\u56FE:"),
                        React.createElement(ImgDynamic, { file: fileUnionReturn }),
                        React.createElement(H2, null, "feedback slot \u91CC\u7684 monomorphic \u662F\uFF1F"),
                        React.createElement(P, null, "\u4E00\u5171\u6709\u4E09\u79CD\uFF0C\u4EE3\u8868\u53C2\u6570\u7C7B\u578B\u7684\u590D\u6742\u5EA6: "),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "Monomorphic \u5355\u6001\uFF1A\u6307\u53C2\u6570\u7684\u7C7B\u578B\u53EA\u6709\u4E00\u79CD\uFF0C\u4E0D\u4F1A\u53D8"),
                            React.createElement(P, null, "Polymorphic \u591A\u6001\uFF1A\u6307\u53C2\u6570\u7684\u7C7B\u578B\u6709\u591A\u79CD (\u6BD4\u8F83\u77ED\u7684 union type)"),
                            React.createElement(P, null, "Megamorphic \u5DE8\u6001\uFF1A\u6307\u53C2\u6570\u7684\u7C7B\u578B\u975E\u5E38\u590D\u6742 (\u975E\u5E38\u957F\u7684 union type) ")),
                        React.createElement(P, null, "\u6839\u636E\u524D\u9762\u63D0\u5230\u7684 checkpoint\uFF0C\u4E0A\u9762\u4E09\u4E2A mono \u7684 checkpoint \u6700\u5C11\uFF0C\u800C\u6700\u540E\u7684 mega \u5C06\u4F1A\u975E\u5E38\u591A\uFF0C\u4F18\u5316\u6027\u80FD\u6700\u5DEE\uFF0C\u6216\u8005 V8 \u5E72\u8106\u5C31\u4E0D\u4F1A\u5BF9\u8FD9\u7C7B\u51FD\u6570\u505A\u66F4\u6DF1\u5EA6\u7684\u673A\u5668\u7801\u4F18\u5316\u4E86\uFF08\u6BD4\u5982\u540E\u6587\u4F1A\u63D0\u5230\u7684 ICs\uFF09 "),
                        React.createElement(H2, null, "TurboFan \u8FC7\u7A0B\u672C\u8EAB\u8017\u65F6\u600E\u4E48\u6837\uFF1F"),
                        React.createElement(P, null, "\u4ECE JS AST \u7F16\u8BD1\u5230\u673A\u5668\u7801\u4E5F\u9700\u8981\u5F00\u9500\uFF0C\u6BEB\u79D2\u7EA7:"),
                        React.createElement(ImgDynamic, { file: fileTurboFanCost }),
                        React.createElement(H2, null, "\u53CD\u4F18\u5316\u592A\u591A\u6B21\u600E\u4E48\u529E\uFF1F"),
                        React.createElement(P, null, "\u6839\u636E\u8FD9\u7BC7\u6587\u7AE0 https://erdem.pl/2019/08/v-8-function-optimization \u5982\u679C\u67D0\u4E2A\u51FD\u6570\u300C\u53CD\u4F18\u5316\u300D\u8D85\u8FC7 5 \u6B21\u540E\uFF0Cv8 \u4EE5\u540E\u5C31\u4E0D\u518D\u4F1A\u5BF9\u8FD9\u4E2A\u51FD\u6570\u505A\u4F18\u5316\u4E86\uFF0C\u4E0D\u8FC7\u6211\u65E0\u6CD5\u590D\u73B0\u4ED6\u8BF4\u7684\u8FD9\u4E2A\u60C5\u51B5\uFF0C\u53EF\u80FD\u662F\u8001\u7248\u672C\u7684 v8 \u7684\u8868\u73B0\uFF0Cnode16 \u4E0D\u4F1A\u8FD9\u6837\uFF0C\u4E0D\u7BA1\u600E\u6837\u53EA\u8981 run \u4E86\u8DB3\u591F\u591A\u6B21\u90FD\u4F1A turbofanned\uFF0C\u53EA\u662F\u5982\u679C\u300C\u66FE\u7ECF\u4F20\u7684\u53C2\u6570\u7C7B\u578B\u592A union typed\u300D\u4F1A\u5BFC\u81F4\u4F18\u5316\u6548\u679C\u51FA\u73B0\u975E\u5E38\u5927\u7684\u6298\u635F"),
                        React.createElement(H2, null, "\u4EC0\u4E48\u65F6\u5019\u4F1A\u542F\u52A8 TutboFan \uFF1F"),
                        React.createElement(P, null, "\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86\u300C\u8FD0\u884C\u8DB3\u591F\u591A\u6B21\u300D\u4F1A\u89E6\u53D1\u4F18\u5316\uFF0C\u800C\u8FD9\u53EA\u662F\u5176\u4E2D\u4E00\u79CD\u60C5\u51B5\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 v8 \u91CC ShouldOptimize \u7684\u5B9E\u73B0\uFF0C\u91CC\u9762\u6709\u8BE6\u7EC6\u5B9A\u4E49\u4F55\u65F6\u542F\u52A8\u4F18\u5316\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileShouldOptimize }),
                        React.createElement(P, null, "\u4F5C\u4E3A\u5F00\u53D1\u89C6\u89D2\u6765\u770B\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "L371 \u5DF2\u7ECF\u4F18\u5316\u8FC7\u7684\u4EE3\u7801\u4E0D\u4F1A\u518D\u4F18\u5316"),
                            React.createElement(P, null, "L375 \u8FD9\u6BB5\u903B\u8F91\u51B3\u5B9A\u662F\u5426\u542F\u7528 maglev*"),
                            React.createElement(P, null, "L386 \u901A\u8FC7\u53C2\u6570\u4E3B\u52A8\u7981\u7528/\u6216\u8005\u7701\u7535\u6A21\u5F0F\u7B49\u8FD9\u7C7B\u4E0D\u4F1A\u4F18\u5316 ( \u6BD4\u5982 node --v8-options=\"--turbo_filter=xxxxx\" )"),
                            React.createElement(P, null, "L394 \u8FD0\u884C\u8DB3\u591F\u591A\u6B21\u624D\u4F1A\u4F18\u5316 (\u8FD8\u6709\u4E2A\u914D\u7F6E\u9879 efficiency_mode_delay_turbofan \u914D\u7F6E\u5EF6\u8FDF\u591A\u4E45\u542F\u52A8 turbofan\uFF09"),
                            React.createElement(P, null, "L402 \u592A\u957F\u7684\u51FD\u6570\u4E0D\u4F1A\u4F18\u5316")),
                        React.createElement(P, null, "\u5907\u6CE8\uFF1Amaglev \u662F\u53BB\u5E74 chrome v8 \u56E2\u961F\u641E\u7684\u65B0\u7279\u6027\uFF1A\u7F16\u8BD1\u5C42\u6B21\u4F18\u5316\uFF0C\u603B\u7684\u6765\u8BF4\u5C31\u662F\u6839\u636E feekback \u5BF9\u673A\u5668\u7801\u7684\u7F16\u8BD1\u5C42\u6B21\u505A\u7CBE\u7EC6\u63A7\u5236\u6765\u8FBE\u5230\u66F4\u597D\u7684\u4F18\u5316\u6548\u679C\uFF0C\u4E0B\u56FE\u662F v8 \u56E2\u961F\u53D1\u5E03\u7684 benchmark \u5BF9\u6BD4\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileMaglevBenchmark })),
                    React.createElement(H1Block, { id: "v8-object-model", title: "V8 \u5BF9\u8C61\u6A21\u578B" },
                        React.createElement(P, null, "\u672C\u8282\u5F00\u59CB\u662F\u672C\u6587\u7684\u91CD\u70B9\u90E8\u5206\uFF0C\u56E0\u4E3A\u53EA\u6709\u4E86\u89E3 V8 \u5BF9\u8C61\u7684\u5185\u5B58\u6784\u9020\uFF0C\u624D\u80FD\u771F\u6B63\u7406\u89E3 V8 \u8BF8\u591A\u4F18\u5316\u7684\u7406\u7531\u3002"),
                        React.createElement(H2, null, "C \u8BED\u8A00\u7684 struct \u662F\u600E\u4E48\u5B9E\u73B0\u300C\u70B9\u8BFB\u300D\u7684 ?"),
                        React.createElement(P, null, "\u5728\u6B63\u5F0F\u8FDB\u5165\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u770B\u770B C \u91CC\u9762 struct \u7684\u300C\u70B9\u8BFB\u300D\u662F\u600E\u4E48\u505A\u7684:"),
                        React.createElement(ImgDynamic, { file: fileCPointRead }),
                        React.createElement(P, null, "_C \u4F1A\u5C06 struct \u7406\u89E3\u4E3A\u4E00\u6BB5\u8FDE\u7EED\u7684\u7EBF\u6027 buffer \u7ED3\u6784_\uFF0C\u5E76\u5728\u4E0A\u9762\u6839\u636E\u5B57\u6BB5\u7684\u7C7B\u578B\u6765\u5212\u5206\u597D\u4ECE\u4E0B\u6807\u7684\u54EA\u91CC\u5230\u54EA\u91CC\u662F\u54EA\u4E2A\u5B57\u6BB5\uFF08\u5BF9\u9F50\uFF09\uFF0C\u56E0\u6B64\u5728\u7F16\u8BD1 `point.x` \u7684\u65F6\u5019\u4F1A\u6539\u6210 `base+4` \u7684\u65B9\u5F0F\u8FDB\u884C\u5C5E\u6027\u8BBF\u95EE\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662F `O(1)` \u7684\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileMemStructPoint }),
                        React.createElement(P, null, "\u4E5F\u56E0\u6B64 C \u91CC\u9762\u6CA1\u63D0\u4F9B\u4ECE\u5B57\u6BB5 key \u540D\u7684\u65B9\u5F0F\u53BB\u53D6 struct value \u7684\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u4E0D\u652F\u6301 `point['x']` \u8FD9\u6837\uFF0C\u9700\u8981\u4F60\u81EA\u5DF1\u5199 getter \u624D\u80FD\u5B9E\u73B0\u7C7B\u4F3C\u64CD\u4F5C \u2014\u2014"),
                        React.createElement(P, null, "\u8FD9\u7C7B\u6839\u636E string value \u6765\u4ECE\u5BF9\u8C61\u53D6\u503C\u7684\u6280\u672F\u901A\u5E38\u5728\u73B0\u4EE3\u7F16\u7A0B\u8BED\u8A00\u91CC\u90FD\u662F\u81EA\u5E26\u4E86\u7684\uFF0C\u901A\u5E38\u79F0\u4E3A\u53CD\u5C04\uFF0C\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u8BBF\u95EE\u6E90\u7801\u4FE1\u606F\u3002"),
                        React.createElement(P, null, "\u4F46\u5728 JS \u91CC\uFF0C\u5BF9\u8C61\u662F\u52A8\u6001\u7684\uFF0C\u53EF\u4EE5\u6709\u4EFB\u610F\u591A\u7684 key-values\uFF0C\u800C\u4E14\u8FD9\u4E9B kv \u952E\u503C\u5BF9\u8FD8\u53EF\u80FD\u5728\u8FD0\u884C\u65F6\u671F\u95F4\u52A8\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u6BD4\u5982\u6211\u53EF\u4EE5\u968F\u65F6 p.xxx =123 \u53C8\u6216\u8005 delete p.xxx \u53BB\u5220\u6389\u5B83\uFF0C\u8FD9\u610F\u5473\u7740\u4E00\u4E2A object \u7684 \u201Cshapes\u201D \u53CA\u5176\u300C\u5185\u5B58\u7ED3\u6784\u300D\u662F\u65E0\u6CD5\u88AB\u9759\u6001\u5206\u6790\u51FA\u6765\u7684\uFF0C\u800C\u4E14\u8FD9\u79CD\u5185\u5B58\u7ED3\u6784\u5FC5\u7136\u4E0D\u662F\u300C\u5B9A\u957F\u56FA\u5B9A\u300D\u7684\uFF0C\u662F\u9700\u8981\u52A8\u6001 malloc \u53D8\u957F\u7684\u3002"),
                        React.createElement(P, null, "\u5047\u8BBE\u73B0\u5728\u662F 2008 \u5E74\uFF0C\u4F60\u662F google \u7684\u5DE5\u7A0B\u5E08\uFF0C\u6B63\u5728 chrome v8 \u9879\u76EE\u7EC4\u5F00\u53D1\uFF0C\u4F60\u4F1A\u600E\u6837\u8BBE\u8BA1 JS \u7684\u5BF9\u8C61\u7684\u5185\u5B58\u7ED3\u6784\uFF1F"),
                        React.createElement(Code, { lang: 'tsx', source: `
        // obj 的内存结构可以设计成怎样？
        const obj = { x: 3, y: 5 }
      ` }),
                        React.createElement(P, null, "\u4E00\u773C\u4E01\u771F\uFF0C\u5F00\u641E\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileMemMaybe1 }),
                        React.createElement(P, null, "\u4E00\u4E2A key \u5B9A\u4E49\u52A0\u4E00\u4E2A\u503C\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u7ED3\u6784\u6570\u7EC4\u5316\u5C31\u53EF\u4EE5\u8868\u8FBE\u5BF9\u8C61\u7684 kv \u7ED3\u6784\uFF0C\u589E\u52A0\u5C5E\u6027\u5C31\u5728\u540E\u9762\u7EE7\u7EED\u6269\u589E\uFF0C\u67E5\u627E\u7B97\u6CD5\u5219\u662F\u4ECE\u5934\u67E5\u5230\u5C3E\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n), \u5982\u4E0B\u56FE\u6240\u793A\u8FD9\u822C\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileMemMaybe2 }),
                        React.createElement(P, null, "\u4F46\u662F\u5982\u679C\u6309\u8FD9\u4E2A\u8BBE\u8BA1\uFF0C\u4E0B\u9762\u4E24\u4E2A obj \u5C31\u4F1A\u6709\u91CD\u590D\u7684 key \u5B9A\u4E49\u5185\u5B58\u6D88\u8017\u4E86\uFF1A"),
                        React.createElement(Code, { lang: 'ts', source: `
        const o1 = { x: 11, y: 22 } // "x" 11 "y" 22
        const o2 = { x: 33, y: 44 } // "x" 33 "y" 44
                                    // 会重复 "x" 和 "y"
      ` }),
                        React.createElement(P, null, "\u597D\u4E86\u5C31\u4E0A\u9762\u8FD9\u6837\u7B80\u5355\u5F04\u4E00\u4E0B\u5C31\u641E\u51FA\u4E86\u597D\u591A\u95EE\u9898\u4E86\uFF0C\u4ECE\u4E0B\u9762\u5F00\u59CB\u6B63\u5F0F\u8FDB\u5165\uFF0CV8 \u662F\u600E\u4E48\u63CF\u8FF0\u5BF9\u8C61\u7684\uFF0C\u53C2\u89C1\u4E0B\u6587"),
                        React.createElement(H2, null, "JSObject \u4E0E named-properties & indexed-elements"),
                        React.createElement(P, null, "\u5728 js \u6807\u51C6\u91CC Array \u662F\u4E00\u7C7B\u7279\u6B8A\u7684 Object\uFF0C\u4F46\u51FA\u4E8E\u6027\u80FD\u8003\u8651 V8 \u5E95\u5C42\u9488\u5BF9\u5BF9\u8C61\u548C\u6570\u7EC4\u7684\u5904\u7406\u662F\u4E0D\u540C\u7684\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "\u6240\u8C13 indexed-elements \u6307\u7684\u662F\u6570\u7EC4\u5143\u7D20\uFF08\u4EE5\u6570\u5B57\u4E0B\u6807\u4F5C\u4E3A key\uFF09\u5B58\u50A8\u4E8E `*elements`\uFF0C\u662F\u4E00\u6BB5\u7EBF\u6027\u5185\u5B58\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u4E0B\u6807\u76F4\u63A5\u8BBF\u95EE\uFF0C\u67E5\u627E\u901F\u5EA6\u975E\u5E38\u5FEB"),
                            React.createElement(P, null, "\u800C\u5176\u4ED6\u7684\u666E\u901A\u6210\u5458\u6240\u8C13 named-properties \u5219\u5B58\u50A8\u4E8E `*properties` \u67E5\u627E\u901F\u5EA6\u6BD4\u8F83\u6162\uFF0C\u9700\u8981\u904D\u5386\u5BF9\u6BD4")),
                        React.createElement(P, null, "\u5982\u4E0B\u56FE\u6240\u793A\uFF0CJSObject\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileV8ICs03 }),
                        React.createElement(P, null, "\u5728 V8 \u91CC\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "Array-indexed \u7684\u5C5E\u6027\u5B58\u50A8\u5728 `*elements` \u91CC\uFF0C\u67E5\u627E\u901F\u5EA6\u5FEB\uFF1BNamed Properties \u5219\u5B58\u50A8\u5728 `*properties` \u91CC\uFF0C\u67E5\u627E\u901F\u5EA6\u6162"),
                            React.createElement(P, null, "Properties / Elements \u8FD9\u4E24\u4E2A\u7ED3\u6784\u53EF\u4EE5\u662F\u6570\u7EC4\uFF0C\u4F46\u6709\u65F6\u5019\u4E5F\u4F1A\u53D8\u6210\u5B57\u5178\uFF08\u6BD4\u5982\u7A00\u758F\u6570\u7EC4\u573A\u666F\uFF0C\u7EBF\u6027\u5185\u5B58\u7A7A\u95F4\u5C31\u4E0D\u591F\u6027\u80FD\u4E86\uFF09"),
                            React.createElement(P, null, "\u6BCF\u4E2A JSObject \u90FD\u6709\u4E00\u4E2A `*hiddenClass`, \u7528\u4E8E\u4FDD\u5B58\u5BF9\u8C61\u7684 Shapes")),
                        React.createElement(P, null, "\u55EF\uFF1F\u5BF9\u8C61\u7684 Shapes\uFF1F\u90A3\u662F\u4EC0\u4E48\uFF1F"),
                        React.createElement(H2, null, "\u5BF9\u8C61\u7684 Shapes"),
                        React.createElement(P, null, "\u6240\u8C13\u5BF9\u8C61\u7684 shapes\uFF0C\u5176\u5B9E\u5C31\u662F\u5BF9\u8C61\u4E0A\u6709\u4EC0\u4E48 key\uFF0C\u524D\u9762\u63D0\u5230\u8FC7 V8 \u7684\u4F18\u5316\u9700\u8981\u5728\u8FD0\u884C\u65F6\u4E0D\u65AD\u6536\u96C6 feedback\uFF0C\u6BD4\u5982\u5F53\u6267\u884C\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5F15\u64CE\u5C31\u53EF\u4EE5\u77E5\u9053\u300Cobj \u6709\u4E24\u4E2A key\uFF0C\u4E00\u4E2A\u662F a \u4E00\u4E2A\u662F b\u300D\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        const obj = {}
        obj.a = 123;
        obj.b = 124;
        doSomething(obj);
      ` }),
                        React.createElement(P, null, "V8 \u901A\u8FC7 Hidden Class \u7ED3\u6784\u6765\u8BB0\u5F55 JSObject \u5728\u8FD0\u884C\u65F6\u7684\u65F6\u5019\u6709\u54EA\u4E9B key\uFF0C\u4E5F\u5C31\u662F\u8BB0\u5F55\u5BF9\u8C61\u7684 shapes\uFF0C\u7531\u4E8E JSObject \u662F\u52A8\u6001\u7684\uFF0C\u540E\u7EED\u4E5F\u53EF\u4EE5\u968F\u610F\u8BBE\u7F6E obj.xxx = 123\uFF0C\u4E5F\u5C31\u662F\u5BF9\u8C61\u7684 shapes \u4F1A\u53D8\uFF0C\u4E5F\u56E0\u6B64\u5BF9\u8C61\u6301\u6709\u7684 Hidden Class \u4F1A\u968F\u7740\u7279\u5B9A\u4EE3\u7801\u7684\u8FD0\u884C\u800C\u53D8\u5316"),
                        React.createElement(P, null, "Hidden Class \u662F\u6BD4\u8F83\u5B66\u672F\u7684\u8BF4\u6CD5\uFF0C\u5728 V8 \u6E90\u7801\u91CC\u7684\u300C\u5DE5\u7A0B\u547D\u540D\u300D\u662F Map\uFF0C\u5728\u5FAE\u8F6F Edge Chakra (edge) \u91CC\u53EB\u505A Types\uFF0C\u5728 JavaScriptCore (WebKit Safari) \u91CC\u53EB\u505A Structure\uFF0C\u5728 SpiderMonkey (FireFox) \u91CC\u53EB\u505A Shapes .... \u603B\u4E4B\u5404\u4E2A\u4E3B\u6D41\u5F15\u64CE\u90FD\u6709\u5B9E\u73B0\u8FFD\u8E2A\u300C\u5BF9\u8C61 shapes \u53D8\u5316\u300D"),
                        React.createElement(P, null, "\u540E\u6587\u53EF\u80FD\u4F1A\u6DF7\u6DC6\u4E0A\u9762\u51E0\u4E2A\u7528\u8BED\uFF0C\u5B83\u4EEC\u90FD\u662F\u6307 Hidden Class\uFF0C\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684 shapes\u3002"),
                        React.createElement(H2, null, "Hidden Class DescriptorArrays \u4E0E in-object properties"),
                        React.createElement(P, null, "\u524D\u9762\u63D0\u5230\u9664\u4E86 `*properties` \u548C `*elements` \u53EF\u4EE5\u7528\u6765\u5B58\u50A8\u5BF9\u8C61\u6210\u5458\u4E4B\u5916\uFF0CJSObject \u8FD8\u63D0\u4F9B\u4E86\u6240\u8C13 `in-object properties` \u7684\u65B9\u5F0F\u6765\u5B58\u50A8\u5BF9\u8C61\u6210\u5458\uFF0C\u4E5F\u5C31\u662F\u5C06\u5BF9\u8C61\u6210\u5458\u4FDD\u5B58\u5728 JSObject \u81EA\u8EAB\u4E0A\uFF0C\u5E76\u914D\u5408 Hidden Class \u8FDB\u884C\u952E\u503C\u63CF\u8FF0\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileV8ICs04 }),
                        React.createElement(P, null, "\u4E0A\u56FE\u91CC Hidden Class \u91CC\u5E95\u4E0B\u6709\u4E2A\u53EB\u505A DescriptorArrays \u7684\u5B50\u7ED3\u6784\uFF0C\u8FD9\u4E2A\u7ED3\u6784\u4F1A\u8BB0\u5F55\u5BF9\u8C61\u6210\u5458 key \u4EE5\u53CA\u5176\u5BF9\u5E94\u5B58\u50A8\u7684 in-object \u4E0B\u6807\uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u7D2B\u6846\u3002"),
                        React.createElement(P, null, "\u8BFB\u5230\u8FD9\u91CC\uFF0C\u6216\u8BB8\u4F60\u4F1A\u95EE\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\uFF0C\u8FD9\u6837\u505A\u80FD\u5E2E\u52A9\u63D0\u5347\u6027\u80FD\u4E48\uFF1F\u522B\u6025\uFF0C\u540E\u6587\u4F1A\u6263\u56DE\u6765\u3002"),
                            React.createElement(P, null, "\u4EC0\u4E48\u65F6\u5019\u7528 in-object \u4EC0\u4E48\u65F6\u5019\u7528 *properties \u5B58\u50A8\uFF0C\u4E24\u8005\u505A\u7684\u662F\u540C\u4E00\u4EF6\u4E8B\uFF0C\u4E0D\u4F1A\u51B2\u7A81\u5417\uFF1F\u522B\u6025\uFF0C\u540E\u6587\u4F1A\u63D0\u3002")),
                        React.createElement(H2, null, "\u53D8\u5316\u4E2D\u7684 Hidden Class"),
                        React.createElement(P, null, "\u5982\u679C Hidden Class \u662F\u9759\u6001\u7684\uFF0C\u90A3\u4E48\u8FD9\u56FE\u5C31\u8DB3\u591F\u63CF\u8FF0 Hidden Class \u4E86\uFF1A"),
                        React.createElement(ImgDynamic, { width: "50%", file: fileV8ICs11 }),
                        React.createElement(P, null, "\u4F46\u662F\u5BF9\u8C61\u7684 shapes \u4F1A\u53D8\uFF0C\u4E5F\u56E0\u6B64\u5BF9\u8C61\u6301\u6709\u7684 Hidden Class \u4F1A\u968F\u7740\u7279\u5B9A\u4EE3\u7801\u7684\u8FD0\u884C\u800C\u53D8\u5316\uFF0CV8 \u4F7F\u7528\u4E86 Transition Chain\uFF0C\u4E00\u79CD\u57FA\u4E8E\u94FE\u8868\u6784\u9020\u7684\u65B9\u5F0F\u6765\u63CF\u8FF0\u300C\u53D8\u5316\u4E2D\u7684 Hidden Class\u300D\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileV8ICs05 }),
                        React.createElement(P, null, "\u5907\u6CE8\uFF1A\u4E3A\u4E86\u65B9\u4FBF\u8BA8\u8BBA\uFF0C\u540E\u6587\u53EF\u80FD\u4E0D\u4F1A\u5C06 Hidden Class \u753B\u6210\u94FE\u8868\uFF0C\u800C\u662F\u753B\u6210\u4E00\u8D77\u5E76\u4E14\u7701\u7565\u7A7A\u5BF9\u8C61\u7684 shapes\uFF0C\u53E6\u5916 Hidden Class Node \u4E0A\u8FD8\u6709\u5176\u4ED6\u5B57\u6BB5\uFF0C\u76F8\u5BF9\u4E0D\u90A3\u4E48\u91CD\u8981\uFF0C\u5C31\u5FFD\u7565\u4E86"),
                        React.createElement(P, null, "\u7531\u4E8E\u94FE\u8868\u7684\u7279\u6027\uFF0C\u663E\u7136\u53EF\u4EE5\u6BD4\u8F83\u5BB9\u6613\u5730\u8BA9\u5177\u6709\u76F8\u540C shapes \u7684\u5BF9\u8C61\u80FD\u590D\u7528\u540C\u4E00\u4E2A Hidden Class \uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A case\uFF0Co1 o2 \u5747\u590D\u7528\u4E86\u5730\u5740\u4E3A `0xABCD` \u7684 Hidden Class \u8282\u70B9\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileV8ICs06 }),
                        React.createElement(P, null, "\u5F53\u51FA\u73B0\u4E0D\u540C\u8D70\u5411\u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u4F1A\u5355\u72EC\u5F00\u4E00\u4E2A branch \u6765\u63CF\u8FF0\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6B64\u65F6 o1 \u548C o2 \u5C31\u4E0D\u518D\u4E00\u6837\u4E86\uFF1A"),
                        React.createElement(ImgDynamic, { width: "94%", file: fileV8ICs062 }),
                        React.createElement(H2, null, "V8 \u5BF9\u8C61\u6A21\u578B\u603B\u7ED3"),
                        React.createElement(P, null, "**\u4ECE\u524D\u6587\u7684\u8BA8\u8BBA\uFF0C\u53EF\u4EE5\u5F97\u5230\u7684\u7ED3\u8BBA\uFF1A**"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "V8 \u4F7F\u7528 JSObject \u6765\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u4E0A\u9762\u6709\u82E5\u5E72\u4E2A\u5B57\u6BB5\uFF08\u9664\u4E86\u4E0A\u9762\u90A3\u4E9B\u8FD8\u6709 prototype \u539F\u578B\u94FE\u90A3\u4E9B\uFF0C\u76F8\u5BF9\u4E0D\u90A3\u4E48\u91CD\u8981\uFF0C\u5C31\u6CA1\u753B\u51FA\uFF09"),
                            React.createElement(P, null, "V8 \u8FD8\u4F7F\u7528 Tagged Pointer \u6765\u63CF\u8FF0\u5BF9\u8C61\u6307\u9488\uFF08\u524D\u6587\u6709\u63D0\uFF09"),
                            React.createElement(P, null, "named properties \u6210\u5458\u5B58\u50A8\u5728 *properties \u91CC\uFF0C\u53EF\u4EE5\u4E3A\u6570\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u5B57\u5178"),
                            React.createElement(P, null, "named properties \u4E5F\u53EF\u4EE5\u5B58\u50A8\u5728 in-object properties \u91CC\uFF0C\u53EF\u4EE5\u52A8\u6001\u589E\u957F\u3002"),
                            React.createElement(P, null, "\u6570\u5B57\u4E0B\u6807\u6210\u5458\u5B58\u50A8\u5728 *elements \u91CC\uFF0C\u53EF\u4EE5\u4E3A\u6570\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u5B57\u5178\uFF08\u7A00\u758F\u6570\u7EC4\u573A\u666F\uFF09")),
                        React.createElement(P, null, "**\u60AC\u800C\u672A\u51B3\u7684\u95EE\u9898\uFF1A**"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u4F55\u65F6\u7528 in-object properties \u4F55\u65F6\u7528 *properties ?"),
                            React.createElement(P, null, "\u4E3A\u4EC0\u4E48\u770B\u8D77\u6765 Hidden Class \u8FD9\u5957\u673A\u5236\u4E0B\u5C5E\u6027\u67E5\u627E\u4F9D\u7136\u662F O(n) \u7684\u64CD\u4F5C\uFF1F\u8FFD\u8E2A\u5BF9\u8C61\u7684 shapes \u610F\u4E49\u5728\u54EA\uFF1F")),
                        React.createElement(P, null, "\u8BF7\u5E26\u7740\u8FD9\u4E24\u4E2A\u95EE\u9898\u5230\u4E0B\u4E00\u7AE0 Inline Caches \u7EE7\u7EED\u9605\u8BFB\u3002")),
                    React.createElement(H1Block, { id: "v8-inline-caches", title: "V8 Inline Caches (ICs) \u4F18\u5316\u539F\u7406" },
                        React.createElement(P, null, "\u5F15\u5165 Hidden Class \u540E\uFF0C\u4E3A\u4E86\u8BFB\u53D6\u67D0\u4E2A\u6210\u5458\uFF0C\u90A3\u4E0D\u8FD8\u5F97\u67E5\u4E00\u6B21 Hidden Class \u62FF\u5230 in-object \u7684\u4E0B\u6807\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u8FD8\u662F O(n) \u5417\uFF1F"),
                        React.createElement(P, null, "\u662F\u7684\uFF0C\u5982\u679C\u4E8B\u5148\u4E0D\u77E5\u9053 JSObject \u7684 shapes \u7684\u60C5\u51B5\u4E0B\u53BB\u8BFB\u53D6\u6210\u5458\u786E\u5B9E\u662F O(n) \u7684\uFF0C\u4F46\u524D\u9762\u6211\u5DF2\u7ECF\u63D0\u8FC7\u4E86\uFF1A"),
                        React.createElement(P, null, "V8 \u7684\u8BF8\u591A\u4F18\u5316\u662F\u57FA\u4E8E assumption \u7684\uFF0C\u90A3\u4E48\u5728\u5DF2\u77E5 obj \u7684 Shapes \u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u4F1A\u600E\u4E48\u4F18\u5316\u4E0B\u9762\u8FD9\u4E2A distance \u51FD\u6570\uFF1F"),
                        React.createElement(ImgDynamic, { file: fileV8ICs042 }),
                        React.createElement(P, null, "\u5982\u6B64\u4F18\u5316\u5C31\u5C06\u901A\u8FC7 key \u8BBF\u95EE\u6210\u5458\u7684 O(n) \u8FC7\u7A0B\u4F18\u5316\u4E3A O(1) \u6309\u4E0B\u6807\u504F\u79FB\u76F4\u63A5\u8BFB\u53D6\u4E86\uFF0C\u8FD9\u79CD\u4F18\u5316\u624B\u6BB5\u5C31\u53EB\u505A Inline Caches (ICs)\uFF0C\u6709\u70B9\u50CF C \u8BED\u8A00\u7684 struct \u5C06\u5B57\u6BB5\u70B9\u8BFB\u7F16\u8BD1\u4E3A\u504F\u79FB\u8BBF\u95EE\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u7F16\u8BD1\u662F JIT \u7684\uFF0C\u4E0D\u662F C \u90A3\u6837 AOT \u9759\u6001\u7F16\u8BD1\u786E\u5B9A\u7684\uFF0C\u662F V8 \u5728\u51FD\u6570\u6267\u884C\u591A\u6B21\u6536\u96C6\u4E86\u8DB3\u591F\u591A\u7684 feedback \u540E\u5B9E\u73B0\u7684\u3002"),
                        React.createElement(P, null, "\u4F60\u53EF\u80FD\u8FD8\u4F1A\u95EE\uFF1A\u5728\u8C03\u7528\u4F18\u5316\u540E\u7684 distance2 \u7684\u65F6\u5019\u5177\u4F53\u8981\u600E\u4E48\u786E\u5B9A\u4F20\u5165\u7684 p1 p2 \u7684 shapes \u662F\u5426\u6709\u53D8\u5316\uFF1F\u8FD8\u8BB0\u5F97\u524D\u9762\u90A3\u4E2A 0xABCD \u5417\uFF1F\u6CA1\u9519\uFF0C\u7F16\u8BD1\u540E\u7684\u6C47\u7F16 checkpoint \u5C31\u662F\u76F4\u63A5\u5224\u65AD\u4F20\u5165\u5BF9\u8C61\u7684 hidden classs \u6307\u9488\u6570\u503C\u662F\u4E0D\u662F 0xABCD\uFF0C\u5982\u679C\u4E0D\u662F\u5C31\u89E6\u53D1\u300C\u53CD\u4F18\u5316\u300D\u515C\u5E95\u89E3\u91CA\u5668\u6A21\u5F0F\u8FD0\u884C\u5373\u53EF\u3002"),
                        React.createElement(P, null, "\u2014\u2014 \u600E\u4E48\uFF1F\u611F\u89C9\u6709\u70B9\u8FF7\u60D1\uFF1F \u4E0B\u9762\u8FD9\u4E2A\u5B9E\u4F8B\u5C06\u624B\u628A\u624B\u5C55\u5F00 ICs \u7684\u771F\u5B9E\u573A\u666F\u4EE5\u53CA\u6C47\u7F16\u7EC6\u8282"),
                        React.createElement(H2, null, "\u6C47\u7F16\u5B9E\u4F8B\uFF1A\u4E3A\u4EC0\u4E48\u9759\u6001\u7684\u6BD4\u52A8\u6001\u7684\u8981\u597D ?"),
                        React.createElement(P, null, "\u4ECE\u524D\u9762 Inline Cache \u7684\u8BA8\u8BBA\u4E2D\u53EF\u4EE5\u5F97\u77E5\uFF0C\u5FC5\u987B\u8981\u786E\u5B9A\u4E86\u8BBF\u95EE\u7684 key \u624D\u80FD\u505A ICs \u4F18\u5316\uFF0C\u56E0\u6B64\u5199\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u6709\u53EF\u80FD\u8BF7\u5C3D\u91CF\u907F\u514D\u4E0B\u9762\u8FD9\u6837\u901A\u8FC7 key string \u52A8\u6001\u67E5\u627E\u5BF9\u8C61\u5C5E\u6027\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        function test(obj: any, key: string) {
          return obj[key]; 
        }
      ` }),
                        React.createElement(P, null, "\u5982\u679C\u80FD\u660E\u786E\u77E5\u9053 key \u7684\u5177\u4F53\u503C\uFF0C\u6B64\u65F6\u5EFA\u8BAE\u5199\u4E3A\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        function test(obj: any, key: 'a' | 'b') {
          if (key === 'a') return obj.a;
          if (key === 'b') return obj.b;
        }
      ` }),
                        React.createElement(P, null, "\u5373\u4F7F\u786E\u5B9E\u4E0D\u5F97\u4E0D\u52A8\u6001\u67E5\u8BE2\uFF0C\u4F46\u662F\u4F60\u77E5\u9053\u67D0\u4E2A\u5B50 case \u5360\u4E86 99% \u7684\u8C03\u7528\u6B21\u6570\uFF0C\u6B64\u65F6\u4E5F\u53EF\u4EE5\u8FD9\u6837\u4F18\u5316\uFF1A"),
                        React.createElement(Code, { lang: 'tsx', source: `
        function test(obj, key: 'a' | 'b') {
          // 为 'a' 的调用次数占了 99% 可以这样提前优化
          if (key === 'a') return obj.a;
          return obj[key];
        }
      ` }),
                        React.createElement(P, null, "\u9759\u6001\u548C\u52A8\u6001\u4E24\u79CD\u5199\u6CD5\u98CE\u683C\u53EF\u80FD\u4F1A\u6709\u51E0\u500D\u751A\u81F3\u4E0A\u767E\u500D\u7684\u5DEE\u8DDD\uFF0C\u5982\u679C\u4E1A\u52A1\u91CC\u6709\u5927\u51E0\u767E\u4E07\u6B21\u7684\u8C03\u7528 test\uFF0C\u4F18\u5316\u540E\u80FD\u7701\u4E0D\u5C11\u6BEB\u79D2\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u300C\u7B80\u5316\u7684\u670D\u52A1\u53D1\u73B0\u300D\u4F8B\u5B50\u6709\u8FD1\u767E\u500D\u7684\u5DEE\u8DDD\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileServiceMap1 }),
                        React.createElement(P, null, "\u539F\u56E0\u662F s2.js \u91CC\u90A3\u4E9B\u5C5E\u6027\u8BBF\u95EE\u90FD\u88AB ICs \u6280\u672F\u4F18\u5316\u6210 O(1) \u8BBF\u95EE\u4E86\uFF0C\u901F\u5EA6\u5F88\u5FEB \u2014\u2014 \u4E3A\u4E86\u63A2\u7A76\u5185\u90E8\u7684 ICs \u76F8\u5173\u6C47\u7F16\u903B\u8F91\uFF0C\u5C1D\u8BD5\u8F93\u51FA serviecMap \u7684 Hidden Class (V8 \u91CC hidden class \u522B\u540D\u662F Map) \u4EE5\u53CA\u6C47\u7F16\u6E90\u7801\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileServiceMap2 }),
                        React.createElement(P, null, "\u9996\u5148 `%DebugPrint` \u51FA `serviceMap` \u7684 Hidden Class \u7684\u7269\u7406\u5730\u5740\uFF0C\u53EF\u4EE5\u770B\u5230\u662F `0x3a8d76b74971` \u7136\u540E\u770B\u540E\u7EED\u7F16\u8BD1\u4F18\u5316\u7684 arm machine code \u662F\u600E\u4E48\u5229\u7528\u8FD9\u4E2A\u5730\u5740\u5B9E\u73B0 ICs \u6280\u672F\u4F18\u5316\u7684\uFF1A\uFF08\u6211\u8FD9\u4F1A\u7684\u7535\u8111\u662F mac m1 \u56E0\u6B64\u662F arm \u6C47\u7F16\uFF0C\u4E0D\u662F x86 \u6C47\u7F16\uFF09"),
                        React.createElement(ImgDynamic, { file: fileServiceMap3 }),
                        React.createElement(P, null, "\u53EF\u4EE5\u770B\u5230\uFF0CICs \u7684 checkpoint \u5176\u5B9E\u5C31\u662F\u5C06 Hidden Map \u7684\u6307\u9488\u7269\u7406\u5730\u5740 inline cached \u5230\u6C47\u7F16\u91CC\u4E86\uFF0C\u5982\u679C check \u901A\u8FC7\u90A3\u4E48\u5C31\u53EF\u4EE5\u57FA\u4E8E\u8FD9\u4E2A\u5047\u8BBE\u76F4\u63A5\u5C06\u5C5E\u6027\u8BBF\u95EE\u4F18\u5316\u4E3A O(1) \u7684 in-object properties \u8BBF\u95EE\u4E86\uFF0C\u8FD9\u4E5F\u662F\u8FD9\u4E2A\u6280\u672F\u4E3A\u4EC0\u4E48\u53EB\u505A Inline Cahce (ICs) \u4E86"),
                        React.createElement(P, null, "\uFF08\u8FD9\u51E0\u4E4E\u662F V8 \u91CC\u6548\u679C\u6700\u597D\u7684\u4F18\u5316\u4E86\uFF0C\u4E5F\u56E0\u6B64\u90E8\u5206 benchmark \u91CC nodejs \u5BF9\u8C61\u53EF\u80FD\u6BD4 Java \u5BF9\u8C61\u8FD8\u5FEB\uFF0C\u56E0\u4E3A Java \u91CC\u6709\u53EF\u80FD\u6EE5\u7528\u53CD\u5C04\u5BFC\u81F4\u5BF9\u8C61\u6027\u80FD\u975E\u5E38\u5DEE\uFF09"),
                        React.createElement(H2, null, "Fast Properties \u548C Slow Properties "),
                        React.createElement(Col, { units: [10, 3] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "\u5982\u679C\u77E5\u9053 ICs \u6280\u672F\u5185\u6DB5\u7684\u8BDD\uFF0C\u7406\u89E3 Fast Properties \u548C Slow Properties (\u6216\u8005\u79F0\u5B57\u5178\u6A21\u5F0F) \u5C31\u4E0D\u4F1A\u6709\u56F0\u96BE\u4E86\u3002"),
                                React.createElement(P, null, "\u53F3\u56FE\u63CF\u8FF0\u4E86 JSObject \u7684\u4E3B\u8981\u6784\u9020\uFF1A\u5F53\u628A\u5BF9\u8C61\u6210\u5458\u5B58\u50A8\u5230 in-object properties \u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u79F0\u5BF9\u8C61\u662F Fast Properties \u6A21\u5F0F\uFF0C\u8FD9\u610F\u5473\u7740\u5BF9\u8C61\u8BBF\u95EE V8 \u4F1A\u5728\u5408\u9002\u7684\u65F6\u5019\u5C06\u5176 Inline Cache \u5230\u4F18\u5316\u540E\u7684\u6C47\u7F16\u91CC\uFF1B "),
                                React.createElement(P, null, "\u53CD\u4E4B\uFF0C\u5F53\u6210\u5458\u5B58\u50A8\u5230 `*properties` \u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u79F0\u4E3A Slow Properties\uFF0C\u6B64\u65F6\u5C31\u4E0D\u4F1A\u5BF9\u8FD9\u7C7B\u5BF9\u8C61\u505A inline cache \u4F18\u5316\u4E86\uFF0C\u6B64\u65F6\u5BF9\u8C61\u8BBF\u95EE\u6027\u80FD\u6700\u5DEE\uFF08\u56E0\u4E3A\u8981\u904D\u5386 `*properties` \u5B57\u5178\uFF0C\u901A\u5E38\u6162\u51E0\u5341\u5230\u51E0\u767E\u500D\uFF0C\u53D6\u51B3\u4E8E\u5BF9\u8C61\u6210\u5458\u6570\u91CF\uFF09"),
                                React.createElement(P, null, "\u6211\u4EEC\u53EF\u4EE5\u7528 `%HasFastProperties` \u6765\u6253\u5370\u5BF9\u8C61\u662F\u5426\u662F Fast Properties \u6A21\u5F0F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A")),
                            React.createElement(ImgDynamic, { file: fileV8ICs12 })),
                        React.createElement(ImgDynamic, { file: fileDelete }),
                        React.createElement(P, null, "delete \u4F1A\u5C06\u5BF9\u8C61\u8F6C\u4E3A slow properties \u6A21\u5F0F\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F\u56E0\u4E3A delete \u5E26\u6765\u7684\u95EE\u9898\u53EF\u592A\u591A\u4E86\uFF0C\u7F13\u5B58\u6280\u672F\u6700\u6015\u7684\u5C31\u662F delete\uFF0C\u5982\u56FE\u6240\u793A\uFF1A"),
                        React.createElement(ImgDynamic, { file: fileV8ICs09 }),
                        React.createElement(P, null, "\u6211\u62CD\u8111\u5B50\u5C31\u80FD\u60F3\u5230\u4E0A\u9762\u56DB\u4E2A\u95EE\u9898\uFF0C\u8981\u5B8C\u6574\u7684\u786E\u4FDD delete \u7684\u5B89\u5168\u6027\u53EF\u592A\u96BE\u4E86\uFF0C\u56E0\u6B64\u7EF4\u62A4 delete \u540E\u7684 hidden class \u975E\u5E38\u9EBB\u70E6\uFF0CV8 \u91C7\u53D6\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u5C06 in-object \u91CA\u653E\u6389\uFF0C\u7136\u540E\u5C06\u5BF9\u8C61\u5C5E\u6027\u90FD\u590D\u5236\u5B58\u50A8\u5230 `*properties` \u91CC\u4E86\uFF0C\u4EE5\u540E\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u4E0D\u518D\u5F00\u542F ICs \u4F18\u5316\u4E86\uFF0C\u6B64\u65F6\u8FD9\u79CD\u9000\u5316\u540E\u7684\u5BF9\u8C61\u5C31\u79F0\u4E3A slow properties (\u6216\u8005\u79F0\u5B57\u5178\u6A21\u5F0F)")),
                    React.createElement(H1Block, { id: "eof", title: "EOF" },
                        React.createElement(P, null, "\u4E0B\u9762\u8FD9\u4E9B\u5185\u5BB9\u6BD4\u8F83\u6563\uFF0C\u6211\u7B80\u5355\u5217\u4E00\u4E0B\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "\u628A V8 ICs \u8FD9\u5957\u641E\u61C2\u8BA9\u6211\u723D\u4E86\u5FEB\u4E00\u4E2A\u6708 ... "),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "\u6108\u53D1\u9119\u89C6\u52A8\u6001\u5199\u6CD5\u4E86\uFF0C\u6BD4\u5982\u6211\u66FE\u7ECF\u55B7\u8FC7\u7528 array.includes \u6765\u505A\u8FD9\u79CD\u8BED\u6CD5\u7CD6\uFF0C\u8FD9\u79CD\u5199\u6CD5\u4F1A\u8BA9 ICs \u5931\u6548\u7684\uFF0C\u6027\u80FD\u6211\u7B80\u5355\u6D4B\u4E86\u4E00\u4E0B\u81F3\u5C11\u6162\u4E86\u4E94\u5341\u500D\uFF1A"),
                                React.createElement(Code, { lang: "tsx", source: `
            if (key === 'aa' ||
              key === 'bb' ||
              key === 'cc') { }
            // => 改写为: 
            if (['aa', 'bb', 'cc'].includes(key)) { }
          ` }),
                                React.createElement(P, null,
                                    "\u8FD9\u7BC7\u6587\u7AE0\u4F4D\u4E8E\uFF1A",
                                    React.createElement(Link, { href: "/b/should-we-use-array-includes-for-condition-connection/" }, "\u53EF\u5426\u7528\u6570\u7EC4 includes \u6765\u53D6\u4EE3\u6761\u4EF6\u96C6\u8054\u5224\u65AD"))),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "\u5B57\u9762\u91CF\u7533\u8BF7\u7684\u7A7A\u5BF9\u8C61 V8 \u4F1A\u989D\u5916\u9884\u5148\u5206\u914D\u4E00\u4E9B\u7A7A\u7684 in-object\uFF0C\u7136\u540E\u901A\u8FC7 `Slack Tracking \u677E\u5F1B\u8FFD\u8E2A` \u6280\u672F\u5728\u5408\u9002\u7684\u65F6\u5019\u91CA\u653E\u6CA1\u6709\u7528\u5230\u7684\u7A7A\u95F4 \u2014\u2014 \u4E3A\u4EC0\u4E48\u8981\u9884\u5148\u5206\u914D\uFF1F\u56E0\u4E3A V8 \u5047\u8BBE\u7A7A\u5BF9\u8C61\u540E\u9762\u90FD\u4F1A\u589E\u52A0\u5C5E\u6027\u4E0A\u53BB"),
                                React.createElement(Code, { lang: "tsx", source: `
            const o1 = {};  // o1 shallow size 为 28 
            const o2 = { ggg: undefined }  // o2 为 16
            const o3 = Object.create(null) // o3 为 12
          ` })),
                            React.createElement(P, null, "\u8F93\u51FA\u4E00\u4E2A\u66B4\u8BBA\uFF1A\u4F9D\u636E\u524D\u6587\u63D0\u5230\u7684 ICs \u4F18\u5316\uFF0C\u539F\u578B\u94FE\u7EE7\u627F\u5C06\u4F1A\u5927\u5927\u5F71\u54CD prototype \u4E0A\u51FD\u6570\u7684 JIT \u6548\u7387\uFF0C\u5C24\u5176\u662F\u5B50\u7C7B\u6709\u5F88\u591A\u81EA\u5DF1\u7684\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u800C\u4ECE\u524D\u9762\u7684 add \u51FD\u6570\u53EF\u77E5\uFF0C\u8FD9\u79CD case \u4E0B\u6027\u80FD\u53EF\u80FD\u4F1A\u6162\u597D\u51E0\u500D \uD83D\uDC22"),
                            React.createElement(P, null, "Safari \u4E5F\u6709 JIT \u4E5F\u6709 ICs \u6280\u672F, \u6839\u636E ICs \u4F18\u5316\u539F\u7406\u5199\u7684\u4EE3\u7801\u5F88\u591A\u7A0B\u5EA6\u4E0A\u5168\u5E73\u53F0\u901A\u7528 \uFF08\u5176\u5B9E\u4E3B\u6D41 JS \u5F15\u64CE\u90FD\u5B9E\u73B0\u4E86 ICs, \u5305\u62EC FireFox\uFF09"),
                            React.createElement(P, null,
                                "\u5176\u4ED6\u4EE3\u7801\u5EFA\u8BAE\u770B\u6211\u6388\u6743\u53D1\u8868\u5728\u516C\u53F8\u5B98\u53F7\u4E0A\u7684\u5185\u5BB9\uFF0C\u90A3\u91CC\u8BE6\u7EC6\u4E00\u70B9 (\u8FD9\u7BC7\u6587\u7AE0\u9996\u53D1\u4E8E\u516C\u53F8\u5185\u7F51): ",
                                React.createElement(Link, { block: true, href: "https://mp.weixin.qq.com/s/k3O8dkzT6zpoURg_6ny2ZQ" }, "\u6781\u901F\u4F18\u5316\uFF1A\u5341\u500D\u63D0\u5347JS\u4EE3\u7801\u8FD0\u884C\u6548\u7387\u7684\u6280\u5DE7"))),
                        React.createElement(P, null, "\u6700\u540E\u7684\u6700\u540E\uFF0C\u603B\u4E4B\u53C2\u8003\u4E86\u5927\u91CF\u8D44\u6599\uFF0C\u611F\u8C22\u4E92\u8054\u7F51\u4EE5\u53CA GPT, \u8BA9\u6211\u5F97\u4EE5\u7AD9\u5728\u5DE8\u4EBA\u7684\u80A9\u8180\u4E0A\u7814\u7A76 V8 \u53CA\u5176 JIT \u4F18\u5316\u7EC6\u8282\uFF0C\u4E0D\u6562\u8BF4 100% \u7CBE\u901A\uFF0C\u4F46\u73B0\u5728\u5982\u679C\u8BA9\u6211\u4ECE\u5934\u5199\u4E00\u4E2A js jit \u7F16\u8BD1\u5668\u6211\u5927\u6982\u662F\u80FD\u77E5\u9053\u8981\u600E\u4E48\u5199\u4E86: "),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://v8.dev/docs/hidden-classes" }, "Maps (Hidden Classes) in V8 \u00B7 V8")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://v8.dev/blog/fast-properties" }, "Fast properties in V8 \u00B7 V8")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://docs.google.com/presentation/d/1sOEF4MlF7LeO7uq-uThJSulJlTh--wgLeaVibsbb3tc/edit#slide=id.g5499b9c42_01170" }, "Google Docs - TurboFan TechTalk presentation")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://github.com/v8blink/v8-JavaScript-Documents" }, "GitHub - v8blink/v8-JavaScript-Documents")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://v8.dev/blog/pointer-compression" }, "Pointer Compression in V8 \u00B7 V8")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://blog.towavephone.com/browser-working-principle-v8/" }, "V8\u5DE5\u4F5C\u539F\u7406 - \u5973\u738B\u63A7\u7684\u535A\u5BA2")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://www.zhihu.com/zvideo/1408790742785916928" }, "Google\u5F00\u6E90\u7684JavaScript\u5F15\u64CE\u2014\u2014V8 - \u77E5\u4E4E")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://www.jfokus.se/jfokus18/preso/Escape-Analysis-in-V8.pdf" }, "Escape Analysis in V8")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://webkit.org/blog/10308/speculation-in-javascriptcore/" }, "Speculation in JavaScriptCore | WebKit")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://v8.dev/blog/slack-tracking" }, "Slack tracking in V8 \u00B7 V8")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://docs.google.com/document/d/11T2CRex9hXxoJwbYqVQ32yIPMh0uouUZLdyrtmMoL44/edit#heading=h.6jz9dj3bnr8t" }, "Ignition Design Doc - Google Docs"))));
            });

        })
    };
}));
