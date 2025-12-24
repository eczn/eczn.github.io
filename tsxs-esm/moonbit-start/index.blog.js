System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, Code, Link, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Code = module.Code;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'moonbit-start',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'Moonbit, 启动',
                author: 'eczn',
                // category: '分类',
                time: new Date('2024-05-01 11:33'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u5DEE\u4E0D\u591A\u5DE5\u4F5C\u4E86 5 \u5E74\uFF0C\u73B0\u5728\u5BF9 JS/TS \u8BED\u8A00\u6784\u9020\u6108\u53D1\u611F\u5230\u4E0D\u5FEB\u4E86\uFF0C\u6240\u4EE5\u6700\u8FD1\u90FD\u5728\u5B66\u70B9\u5176\u4ED6\u7684\u8BED\u8A00\u8C03\u5242\u4E00\u4E0B\uFF0C\u4E0D\u7136\u771F\u7684\u8981\u5E9F\u5185\u529F\u4E86\u3002"),
                        React.createElement(P, null, "\u8FD1\u671F\u770B\u4E86\u4E0B\u7531\u5F20\u5B8F\u6CE2\u56E2\u961F\u5F00\u53D1\u7684\u56FD\u4EA7\u7F16\u7A0B\u8BED\u8A00 MoonBit\uFF0C\u4E00\u773C\u5C31\u7231\u4E0A\u4E86\uFF0C\u662F OCaml like \u7684\u8BED\u8A00\uFF0C\u6709\u80A1 rust \u5473\uFF0C\u4F46\u662F\u6CA1\u6709 rust \u751F\u547D\u5468\u671F\u90A3\u4E9B\u70E7\u8111\u7684\u7279\u6027\uFF0C\u8BED\u8A00\u81EA\u5E26 GC\u3002"),
                        React.createElement(P, null, "\u672C\u6587\u4ECB\u7ECD\u4E00\u4E0B\u6211\u611F\u89C9\u5F88\u597D\u7684\u5730\u65B9 (rust with gc \u7B11)")),
                    React.createElement(H1Block, { title: "\u975E\u5E38\u597D\u5B89\u88C5\u4F53\u9A8C" },
                        React.createElement(P, null, "\u67E5\u770B\u5B98\u7F51 https://www.moonbitlang.cn/download/ \u6709\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u57FA\u672C\u662F\u50BB\u74DC\u5F0F\u64CD\u4F5C\uFF0C\u800C\u4E14\u7531\u4E8E\u662F\u56FD\u4EA7\u7684\u4E0B\u8F7D\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u6211\u4F30\u8BA1\u4E0D\u4F1A\u6709\u4EBA\u5361\u5728\u8FD9\u4E00\u6B65\u7684\uFF0C\u5728\u5B89\u88C5\u5B8C\u4E4B\u540E\u5C31\u53EF\u4EE5\u7528 `moon` \u547D\u4EE4\u6765\u4F7F\u7528\u76F8\u5173\u5DE5\u5177\u94FE\u4E86\uFF0C\u6BD4\u5982\u8FD9\u6837\u65B0\u5EFA\u9879\u76EE\u8FDB\u884C\u5F00\u53D1\uFF1A"),
                        React.createElement(Code, { lang: "bash", source: `
        $ moon new myfirst  # 创建一个叫做 myfirst 的项目
        $ cd myfirst        # chdir 到项目里
        $ moon run main     # 编译运行
      ` })),
                    React.createElement(H1Block, { id: "function", title: "\u4E00\u7B49\u516C\u6C11\u51FD\u6570" },
                        React.createElement(P, null, "\u5728 moonbit \u91CC\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11\uFF0C\u4F7F\u7528\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u56E0\u6B64\u4F1A\u6709\u8DDF js \u4E00\u6837\u7684\u95ED\u5305\u6548\u679C\uFF1A"),
                        React.createElement(Code, { lang: 'moonbit', source: `
        // 写在最外面的叫做「顶层函数」
        fn counter() -> () -> Int {
          let mut i = 0 // 可变值需要带上 mut 标记
        
          // 嵌套在内的叫做「局部函数」
          // 局部函数的签名可以比较简略，编译器会自动推导
          fn inc() {
            // 函数走的是跟 js 一样的词法作用域
            let r = i
            i = i + 1
            return r
          }

          return inc
        }
        
        fn main {
          // 因此也会有一模一样的闭包效果
          let count = counter()
          println(count()) // 0
          println(count()) // 1
        }
      ` })),
                    React.createElement(H1Block, { id: "tag-parameter", title: "\u5E26\u6807\u7B7E\u7684\u51FD\u6570\u53C2\u6570" },
                        React.createElement(P, null, "\u652F\u6301\u6807\u7B7E\u53C2\u6570\u3001\u53EF\u9009\u53C2\u6570\u7B49\u9AD8\u7EA7\u7279\u6027\uFF1A"),
                        React.createElement(Code, { lang: 'moonbit', source: `
        // 此处的内置类型 Ref 可以理解为 ts: type Ref<T> = { val: T }
        // 1. 用 ~counter 的方式来给参数加标签
        // 2. 用 = 来给参数带一个默认值使其变成可选参数
        // 3. 默认值每次执行都会给一个「新的」
        fn incr(~counter : Ref[Int] = { val: 0 }) -> Ref[Int] {
          counter.val = counter.val + 1
          counter
        }

        fn main {
          println(incr()) // 1
          println(incr()) // 依然是 1，因为重新求值了默认表达式，产生了一个新的 Ref
          let counter : Ref[Int] = { val: 0 }
          println(incr(~counter)) // 1
          println(incr(~counter)) // 2，因为两次调用使用了同一个 Ref
        }
      ` }),
                        React.createElement(P, null, "\u53C2\u6570\u9ED8\u8BA4\u503C\u6BCF\u6B21\u6267\u884C\u90FD\u4F1A\u6267\u884C\u65B0\u7684\uFF0C\u4E0D\u4F1A\u590D\u7528\uFF0C\u5982\u679C\u60F3\u4E00\u76F4\u590D\u7528\u540C\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5C06\u5176\u63D0\u5347\u5230\u5168\u5C40"),
                        React.createElement(Code, { lang: 'moonbit', source: `
        let default_counter : Ref[Int] = { val: 0 }

        fn incr(~conuter : Ref[Int] = default_counter) -> Int {
          counter.val = counter.val + 1
          counter.val
        }
        
        fn main {
          println(incr()) // 1
          println(incr()) // 2
        }
      ` })),
                    React.createElement(H1Block, { id: "adt-style-loop", title: "\u51FD\u6570\u5F0F\u5FAA\u73AF" },
                        React.createElement(P, null, "\u770B\u4E86\u771F\u8FC7\u763E\uFF0C\u4E13\u95E8\u7ED9 ADT \u8BBE\u8BA1\u7684 reduce \u5FAA\u73AF\uFF1A"),
                        React.createElement(Code, { lang: 'moonbit', source: `
        fn sum(xs: List[Int]) -> Int {
          loop xs, 0 {
            Nil, acc => break acc // break 可以省略
            Cons(x, rest), acc => continue rest, x + acc
          }
        }
        
        fn init {
          println(sum(Cons(1, Cons(2, Cons(3, Nil))))) // 6
        }
      ` })),
                    React.createElement(H1Block, { id: "multi-line-string", title: "\u591A\u884C\u5B57\u7B26\u4E32" },
                        React.createElement(P, null, "\u5B57\u7B26\u4E32\u5E95\u4E0B\u7528 UTF-16 \u8FDB\u884C\u7F16\u7801\uFF0C\u9664\u4E86\u5E38\u7528\u7684\u5B57\u7B26\u4E32\u4F18\u79C0\u5B9E\u8DF5\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u591A\u884C\u5B57\u7B26\u4E32\uFF08js \u7684\u6A21\u677F\u5B57\u7B26\u4E32\u5728\u591A\u884C\u7684\u60C5\u51B5\u4E0B\u4F1A\u628A\u7F29\u8FDB\u4E5F\u4E00\u8D77\u7F16\u8FDB\u53BB\uFF0C\u5B9E\u9645\u4F7F\u7528\u5F88\u86CB\u75BC\uFF09"),
                        React.createElement(Code, { lang: "moonbit", source: `
      fn main {
        let str = 
          #| Hello
          #| World
        println(str)
      }
      ` })),
                    React.createElement(H1Block, { id: "enum-adt", title: "enum adt" },
                        React.createElement(P, null, "\u7237\u6700\u7231\u7684 adt"),
                        React.createElement(Code, { lang: "moonbit", source: `
        enum DragState {
          Invalid
          Active(Int, Int)
        }
        
        fn printDragState(s: DragState) -> Unit {
          match s {
            Invalid => println("未激活拖拽")
            Active(dx, dy) => {
              println("拖拽中 ... dx=\(dx) dy=\(dy)")
            }
          }
        }
        
        fn init {
          printDragState(Invalid)      // 未激活拖拽
          printDragState(Active(1, 2)) // 拖拽中 ... dx=1 dy=2
        }
      ` })),
                    React.createElement(H1Block, { id: "no-null", title: "\u6CA1\u6709\u7A7A\u503C" },
                        React.createElement(P, null, "\u7531\u4E8E\u63D0\u4F9B\u4E86\u57FA\u4E8E ADT \u6784\u9020\u7684 Option \u548C Result, moonbit \u6CA1\u6709\u989D\u5916\u63D0\u4F9B null \u8FD9\u4E9B\u7A7A\u503C\u4E86\uFF0C\u914D\u5408 `?.` \u95EE\u53F7\u64CD\u4F5C\u7B26\u80FD\u5199\u51FA\u66F4\u5065\u58EE\u7684\u4EE3\u7801\uFF1A"),
                        React.createElement(Code, { lang: 'moonbit', source: `
        fn may_fail() -> Option[Int] { ... }

        fn f() -> Option[Int] {
          let x = may_fail()?
          let y = may_fail()?.lsr(1) + 1
          if y == 0 { return None }
          Some(x / y)
        }
        
        fn may_error() -> Result[Int, String] { ... }
        
        fn g() -> Result[Int, String] {
          let x = may_error()?
          let y = may_error()? * 2
          if y == 0 { return Err("divide by zero") }
          Ok(x / y)
        }
      ` })),
                    React.createElement(H1Block, { id: "mooncakes", title: "moonckes \u5305\u7BA1\u7406" },
                        React.createElement(P, null, "moonbit \u63D0\u4F9B\u4E86 mooncakes.io \u4F5C\u4E3A\u5305\u7BA1\u7406\u5E73\u53F0\uFF0C\u8DDF\u8BED\u8A00\u6DF1\u5EA6\u7ED3\u5408\uFF0C\u6BD4 npm \u9AD8\u5230\u4E0D\u77E5\u9053\u54EA\u91CC\u53BB, \u4E0B\u9762\u662F\u6211\u53D1\u7684\u4E00\u4E2A\u6D4B\u8BD5\u5305\uFF0C\u81EA\u5E26\u6587\u6863\u5DE5\u5177"),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://mooncakes.io/docs/#/eczn/eczn-utils/" }, "mooncakes - eczn/eczn-utils"))),
                    React.createElement(H1Block, { id: "eof", title: "EOF" },
                        React.createElement(P, null, "\u8FD9\u95E8\u8BED\u8A00\u662F\u65B0\u5F00\u53D1\u7684\uFF0C\u76EE\u524D\u4ECD\u5728\u5FEB\u901F\u8FED\u4EE3\u4E2D\uFF0C\u4ECE\u6211\u53BB\u5E74\u7B2C\u4E00\u6B21\u5173\u6CE8\u4EE5\u6765\u5DF2\u7ECF\u591A\u4E86\u975E\u5E38\u591A\u529F\u80FD\u4E86\uFF0C\u524D\u4E24\u5929\u8FD8\u53D1\u5E03\u4E86\u65B0\u7684 js \u540E\u7AEF \u2014\u2014 \u4E5F\u5C31\u662F\u53EF\u4EE5\u7F16\u8BD1\u6210 js \u4F7F\u7528\uFF0C\u8BD5\u4E86\u4E0B\u975E\u5E38\u597D\uFF0C\u53EF\u4EE5\u5145\u5206\u4EAB\u53D7\u5199\u9AD8\u7EA7\u8BED\u8A00\u7684\u4E50\u8DA3\u3002")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
