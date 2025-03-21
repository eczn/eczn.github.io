{"code":0,"data":{"type":"tsx","meta":{"id":"typescript-52000-checker.ts","title":"TypeScript 52000+ 行的 checker.ts","author":"eczn","time":"2024-09-01T00:00:00.000Z","type":"article","appTitle":"","appIcon":"","intro":"未定义 intro","category":"未分类标题","cateIntro":"该分类暂无介绍 ~","imgs":[],"tags":[],"isDraft":false,"fileDeps":[],"wordCount":0},"tsxDistPath":"./typescript-52000-checker-ts/index.blog.js","ssrContent":"<div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">TypeScript 源码的 checker.ts 这个文件相当暴力，它将 TS 完整类型系统全部逻辑 5.2 万行全部写在一个 ts 文件里，而文件大小则达到了惊人的 2.92 MB —— 这相当有趣，为什么？</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\"><a href=\"https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts\" target=\"_blank\" style=\"background-color:#f9dff4\" class=\"std-link --fontSansSerif  _block\" data-minimap-color=\"#f9dff4\"><span class=\"std-link-icon r-link\" data-src=\"/get-favicon/github.com?h=1187979770\" style=\"background-image:url(&quot;/get-favicon/github.com?h=1187979770&quot;)\"></span><span class=\"std-link-txt\">Github - checker.ts</span></a></div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:38.52%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/01.3fb5f43ce466ea0c.png.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/01.3fb5f43ce466ea0c.png\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">好, VSCode, 启动 !</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:40.33%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/02.5db711c0a33155bc.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/02.5db711c0a33155bc.webp\"/></div></div><h1 id=\"50000lines-checker-ts\" class=\"std-title --fontTitle\"><a href=\"#50000lines-checker-ts\" class=\"markdownIt-Anchor\">#</a> 五万行 all-in-one 的 checker.ts<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">这个文件很暴力，类型系统全部逻辑 5 万行 all-in-one file ，是 ts 源码维护者不会写代码吗？显然并不是，我翻了一些资料和读了下其中的实现，稍微震撼了一下，将相关思考细节记录在本文。</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:46.83%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/k1.7e79ea186c1510c1.png.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/k1.7e79ea186c1510c1.png\"/></div></div><h1 id=\"comment-named-parameters\" class=\"std-title --fontTitle\"><a href=\"#comment-named-parameters\" class=\"markdownIt-Anchor\">#</a> 低配版 named parameters<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">众所周知，js 各种规范都推荐你用一个对象来传递多个参数，然后在函数里解构 —— 多数时候这没什么，但是在 ts compiler 里，任何浪费都会被极限放大，因此他们用了这种低配版用注释的方式来表示 named parameters (这行还是 anders 老爷子写的，C# 之父)</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:7.69%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/03.f3516f14caac1c61.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/03.f3516f14caac1c61.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">何为 named parameter 呢？其实就是带名字标签的函数，调用的时候可以指定标签来传参数，这个在其他语言里是基操，比如 moonbit or swift 里的标签函数：</div><div class=\"std-code\"><pre  class=\"prismjs rust rally-runner  \" ><span class=\"line-numbers-rows\" style=\"user-select: none;\">00</span><span class=\"token keyword\">fn</span> <span class=\"token function-definition function\">add</span><span class=\"token punctuation\">(</span>~left<span class=\"token punctuation\">:</span> <span class=\"token class-name\">Int</span><span class=\"token punctuation\">,</span> ~right<span class=\"token punctuation\">:</span> <span class=\"token class-name\">Int</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">-></span> <span class=\"token class-name\">Int</span> <span class=\"token punctuation\">{</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">01</span>  <span class=\"token keyword\">return</span> left <span class=\"token operator\">+</span> right<span class=\"token punctuation\">;</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">02</span><span class=\"token punctuation\">}</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">03</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">04</span><span class=\"token function\">add</span><span class=\"token punctuation\">(</span>left<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> right<span class=\"token punctuation\">:</span> <span class=\"token number\">44</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 🉑 </span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">05</span><span class=\"token function\">add</span><span class=\"token punctuation\">(</span>right<span class=\"token punctuation\">:</span> <span class=\"token number\">44</span><span class=\"token punctuation\">,</span> left<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 🉑 </span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">06</span><span class=\"token function\">add</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>               <span class=\"token comment\">// 🉑 此时会自动匹配到 left 和 right</span></pre></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">为什么 ts 需要 named parameter 特性：</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">在 ts 这种高频调用场景里通过解构 options 对象的方式传参会导致大量无谓的内存开销 —— 这通常会导致 type checking 过程中的内存峰值而造成频繁 gc &amp; mem_copy 更重要的是字面量 key 的顺序还会影响 v8 的 inline caches 优化，写的不好可能会对函数调用 feedback 造成严重负面反馈进而影响 TurboFan 的进一步优化最后造成非常大的性能损失 ...</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">当 V8 函数调用的 feedback slot 从 SMI 变成 Any 时，TurboFan codegen 的汇编将会慢三倍，关于这个问题的细节可以看看本站的这篇文章</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\"><a href=\"/b/v8-asm-detail-of-inline-caches/\" target=\"_blank\" style=\"background-color:#eff4e6\" class=\"std-link --fontSansSerif  _block\" data-minimap-color=\"#eff4e6\"><span class=\"std-link-icon r-link\" data-src=\"/get-favicon/eczn.github.io?h=5005563045\" style=\"background-image:url(&quot;/get-favicon/eczn.github.io?h=5005563045&quot;)\"></span><span class=\"std-link-txt\">V8 Inline Caches 优化及其汇编细节</span></a></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">总之，字面量一时爽... OOM 就欲哭无泪了。</div><h1 id=\"always-number\" class=\"std-title --fontTitle\"><a href=\"#always-number\" class=\"markdownIt-Anchor\">#</a> 能用 number 尽量 number<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">比如 switch、比如 const enum、比如各种 enum bitmap flags 等等设计，原因是 object 和 string 的开销太大了，而小一点的整数在 v8 里甚至是无开销的（如果 SMI tagged pointer 指针自身数值不算开销的话</div><h1 id=\"unrestricted-usage-of-const-enum\" class=\"std-title --fontTitle\"><a href=\"#unrestricted-usage-of-const-enum\" class=\"markdownIt-Anchor\">#</a> 无限制使用 const enum<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">const enum 有个特性可以直接 inline 枚举值到函数里变成立即数，能享受极致优化:</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:29.51%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/04.21ab9742f6d2c6f9.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/04.21ab9742f6d2c6f9.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">但目前社区对于 const enum 的主流意见是 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">不推荐使用</div>，而且 ts 的部分维护者也认为这个是 mistake:</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:50.26%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/05.1f0bdf62ddd40cee.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/05.1f0bdf62ddd40cee.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">但是这说法其实相当尴尬：是的虽然这是 mistake 我们不推荐使用，但我们 ts 源码里全都是 const enum 到处飞 ... （800+ 个 const enum，没这个特性估计 tsc 要慢不少）</div><h1 id=\"performance-of-esm-cjs\" class=\"std-title --fontTitle\"><a href=\"#performance-of-esm-cjs\" class=\"markdownIt-Anchor\">#</a> ESM/CJS 的性能问题：尤其是 export 导出特别多的时候<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">当 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">export</div> 导出太多成员的情况下，V8 内部处理这类对象会将其变成 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">Slow Properties</div> 字典模式，在多数时候这没啥，但如果遇到某高频模块内的常量被引用大几百万次的情况下，此时 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">export.xxxxx</div> 的点读查询开销就不能忽视了，尤其是当 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">export</div> 上有几百个导出的时候，此时点读开销不可忽视，比如：</div><div class=\"std-code\"><pre  class=\"prismjs js rally-runner  \" ><span class=\"line-numbers-rows\" style=\"user-select: none;\">00</span><span class=\"token keyword\">const</span> constant <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">./constant</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">01</span>module<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">export</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token function\">getXXConfig</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">02</span>  <span class=\"token keyword\">return</span> constant<span class=\"token punctuation\">.</span>xxx <span class=\"token operator\">+</span> constant<span class=\"token punctuation\">.</span>bbb<span class=\"token punctuation\">;</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">03</span><span class=\"token punctuation\">}</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">04</span><span class=\"token comment\">// 由于 constant 上有几百个常量，</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">05</span><span class=\"token comment\">// 即使是 constant.xxx 这样简单的语句</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">06</span><span class=\"token comment\">// 在百万次调用的时候，其耗时将不可忽略 ( 几百 ms 以上 )</span></pre></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">而 checker.ts 则是将所有东西 all-in-one 就没这问题了，全都在函数作用域内，查询时间是 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">O(1)</div></div><h1 id=\"esm-no-private-export\" class=\"std-title --fontTitle\"><a href=\"#esm-no-private-export\" class=\"markdownIt-Anchor\">#</a> ESM 没有 private 导出<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">有种 export 是只想在项目内无限制使用，但是又不期望导出能被外部的 npm 看到 —— 也就是 esm 没有提供 private export 这种特性:</div><div class=\"std-code\"><pre  class=\"prismjs js rally-runner  \" ><span class=\"line-numbers-rows\" style=\"user-select: none;\">00</span><span class=\"token keyword\">import</span> <span class=\"token constant\">D</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@tencent/xxx/a/b/c/d'</span><span class=\"token punctuation\">;</span>\n<span class=\"line-numbers-rows\" style=\"user-select: none;\">01</span><span class=\"token comment\">// ⬆️ 我不期望别人能这样 import 我内部的东西</span></pre></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">而 ts 又恰恰要这种特性，那么它们怎么实现的呢？通过 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">/** @internal */</div> 注解：</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:31.26%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/06.2de31b8f60f68f45.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/06.2de31b8f60f68f45.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">标记为 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">@internal</div> 的东西在生成 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">d.ts</div> 的时候会被抹去，变相实现外部无法 import 而 ts 仓库内随便 import 。</div><h1 id=\"it-even-use-var-instead-of-let-or-const\" class=\"std-title --fontTitle\"><a href=\"#it-even-use-var-instead-of-let-or-const\" class=\"markdownIt-Anchor\">#</a> ts 甚至大量使用 var，而不是用 let 和 const<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">又比如，有部分函数为了性能全用 var，愣是没用 const / let 这些，你看 ts 怎么写的：</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:18.39%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/07.6c623539826b2aae.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/07.6c623539826b2aae.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">具体见 https://github.com/microsoft/TypeScript/issues/52924</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">大意是 ts 的场景下，v8 这类 js runtime 的 TDZ 检查甚至会相当影响运行性能。。。 毕竟五万行呢。。。 （production build 会比 dev build 要快不少的原因之一）</div><h1 id=\"set-property-to-string-prototype\" class=\"std-title --fontTitle\"><a href=\"#set-property-to-string-prototype\" class=\"markdownIt-Anchor\">#</a> 往 String.prototype.xxx 上注入东西<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:17.22%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/08.5d20ec730d78431b.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/08.5d20ec730d78431b.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">这类操作在普通 js/ts 项目里是一定会被鄙视的，但一个静态类型语言怎么没办法自己拓展基础类型来使用呢？ （这在 swift / go 之类的语言里基于 string / int 来搞出一个新的类型出来是基操。。。。）</div><h1 id=\"classless-programming\" class=\"std-title --fontTitle\"><a href=\"#classless-programming\" class=\"markdownIt-Anchor\">#</a> 无类编程，推崇组合编程<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">checker.ts 几万行核心逻辑几乎没有 class 和继承，完全通过函数组合的方式来架构代码，整体看着像是有 rust impl 关键字的 ts 那样：</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:29.49%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/09.7572019f131de5fe.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/09.7572019f131de5fe.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">代码里大部分函数都是上面这种风格，第一个参数是「核心接口」其他参数则是对应的参数，当然，组合优于继承也算是近年来业界达成的共识了。</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">当然比起架构，我更愿意相信 ts 是考虑到 class 继承可能存在潜在的性能问题导致的：</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">比如 V8 引擎下的 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">A extends B</div> 场景，B 上面有个方法 fn，当 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">A.fn();</div> <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">B.fn();</div> 都调用了之后，如果 A 和 B 的 shapes 不一样，此时 fn 调用 feedback slot 会从 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">monomorphic</div> 的变成 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">polymorphic</div> 的，当继承三个以上的时候就会变成 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">megamorphic</div> 了，这会影响引擎 ICs 的优化效果，导致性能下降，而关于这个问题的细节可以看看本站的这篇文章: </div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\"><a href=\"/b/v8-asm-detail-of-inline-caches/\" target=\"_blank\" style=\"background-color:#eff4e6\" class=\"std-link --fontSansSerif  _block\" data-minimap-color=\"#eff4e6\"><span class=\"std-link-icon r-link\" data-src=\"/get-favicon/eczn.github.io?h=5005563045\" style=\"background-image:url(&quot;/get-favicon/eczn.github.io?h=5005563045&quot;)\"></span><span class=\"std-link-txt\">V8 Inline Caches 优化及其汇编细节</span></a></div><h1 id=\"no-table-driven\" class=\"std-title --fontTitle\"><a href=\"#no-table-driven\" class=\"markdownIt-Anchor\">#</a> 怎么没有用「表驱动」这种所谓的常用「前端设计模式」？<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">源码里很多这种根据 ast node kind 去走不同逻辑，然后这些逻辑都写成 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">if else</div> 或者 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">switch</div> 语句 —— 为何不使用一个 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">Record&lt;Kind, Fn&gt;</div> 的方式去表驱动呢？</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">原因很简单：表驱动无法被 v8 这类 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">runtime</div> 静态分析优化，而且表驱动这类写法会慢个几十倍对于基础设施来说这是不可接受的。（无贬义，js 的表驱动写法看场景，高频调用还是别了吧，写 event selector 之类的倒是一类比较合适的场景）</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">从语言特性的层面来说，ts 真的缺一个 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">满血版模式匹配</div> + <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">enum adt</div> 了，但目前 ts 原则上是不会再合入新的 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">runtime</div> 特性了 —— 这就很难受了，又不能表驱动，又不能模式匹配，最后代码很 C style 了，而且要写非常多的 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">x is X</div> 谓语 。。。</div><h1 id=\"no-try-catch\" class=\"std-title --fontTitle\"><a href=\"#no-try-catch\" class=\"markdownIt-Anchor\">#</a> 基本没有 try-catch<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">与 go 有类似的想法，checker.ts 里通过返回值 + 往 context.xxx 上写东西的方式来指示异常，一方面是为了性能，另外一方面我甚至可以合理怀疑为是没有 checked exception 导致只能这样才能 type checked ... (当然 anders 老爷子应该是 uncheck 党，参考 C# 的设计)</div><h1 id=\"the-half-finished-namespace-modules\" class=\"std-title --fontTitle\"><a href=\"#the-half-finished-namespace-modules\" class=\"markdownIt-Anchor\">#</a> 文件多才是大问题 —— 可惜了半成品的 ts namespace<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">如果有接触过大型 js/ts 项目的同学肯定知道，文件一多就不知道东西在哪了，找个 import 你甚至要垮十几个文件 。。。</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">—— 从这也可看到，东西为什么要 import 才让用呢？能否有 moonbit、rust 那样好用的模块系统呢？ ⬅️ 但这依然涉及 runtime 改造，现阶段 ts 就别想了，当然 tc39 也不会再考虑这类特性就是了，等一个 TypeScript Pro Max 吧。      </div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">关于 namespace：有接触过 go Rust C++ 的同学应该都有了解了，是用来管理包及语言符号的特性，是业内比较通用的解决方案。</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">在 ESM 落地之前，ts 有尝试去做满血版的 namespace 特性，但是由于重新确定了不做运行时的想法，因此这个特性在成熟之前就放弃迭代而全面转向 ESM 了，至今 ts 源码里还大量使用 namespace 或者用 ESM 模拟出 namesapce 特性:</div><div class=\"std-img-dynamic-wrapper --fontArticle\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:36.10%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/10.2022c8b10ea4971f.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/10.2022c8b10ea4971f.webp\"/></div></div><h1 id=\"fxxk-js\" class=\"std-title --fontTitle\"><a href=\"#fxxk-js\" class=\"markdownIt-Anchor\">#</a> 暴论：垃圾 JS 已经严重影响 TS 的演进了<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">不得不说，ts 如果继续死磕 js/tc39 而放弃做 runtime feature，恐怕现在已经是最终形态了 ... 以后不会有更进一步的演进了，因为目前 ts 类型系统已经相当完善了，甚至部分能力其他语言都没有，比如 Union Types 以及领先各大友商的控制流分析技术（然而，2024 了 ts 还没有满血版 ADT + 模式匹配，因为这属于 runtime 特性，不是简单擦掉类型就能搞定的）</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">当然，近期 tc39 虽然也提了不少新东西但是没有静态类型系统就显得这些特性相当鸡肋以至于它们看起来就像是 ts39 一样，比如备受关注的 Record &amp; Tuple 已经到 Stage 2 了：</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\"><a href=\"https://github.com/tc39/proposal-record-tuple\" target=\"_blank\" style=\"background-color:#def0f6\" class=\"std-link --fontSansSerif  _block\" data-minimap-color=\"#def0f6\"><span class=\"std-link-icon r-link\" data-src=\"/get-favicon/github.com?h=-6209623017\" style=\"background-image:url(&quot;/get-favicon/github.com?h=-6209623017&quot;)\"></span><span class=\"std-link-txt\">tc39 - Record &amp; Tuple</span></a></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">但懂得都懂这特性一看就知道明显就是给 ts 设计的，给 js 用这个特性跟到处传 void* 一样没什么区别，因为这东西是运行时强类型的，也就是访问 one_record.x 如果真的没有定义 x 那么会直接抛出 error 的而不是返回 undefined</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">此外这东西太猛了，几乎就是一个 C 语言版的 匿名 struct 定义对象+内存结构的方案了，我估计各大浏览器估计都不太想搞这个 —— 这个要大改引擎的 js 对象模型了，如果真能实装我很期待它的性能表现。</div><h1 id=\"eof\" class=\"std-title --fontTitle\"><a href=\"#eof\" class=\"markdownIt-Anchor\">#</a> EOF<i data-minimap=\"Ignore\"> ↵ </i></h1><div class=\"std-img-dynamic-wrapper --fontArticle\" style=\"width:15em\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:68.28%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/11.9e7bb40172b4ca46.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/11.9e7bb40172b4ca46.webp\"/></div></div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">就目前 ts 源码仓库来看，js 自身的语言特性已经极其限制 ts 对其自身的实现了，但是 ts 又承诺不再做新的 runtime 特性，只做类型系统，这就相当拧巴了，尤其是体现在 ts 源码里，包含大量非主流实践，有些甚至可以形容为龌龊: </div><ol class=\"numbering-main\" data-minimap-color=\"#DDDDDD\"><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">1.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">5 万行暴力 checkert.ts 包含了完整全部的类型检查逻辑</div></li><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">2.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">大量 if-else 穿插，没有模式匹配相当不爽</div></li><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">3.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">低配注释版 named parameters (悲)</div></li><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">4.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">半成品的 namespace 模块化方案 (至少 ESM 是不满足 ts 的工程需求的, 很多东西都是凑上去的, 从源码也能看出处处都在鄙视 esm)</div></li><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">5.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">缺少高性能编译后端, 目前 ts 的编译后端做的很薄, 不会对代码做二次优化和剪枝 ... 但 ts 自身对性能的要求相当高, 这块不做的话代码就不得不到处飞 var 而不是 const 和 let 了</div></li><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">6.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">无类编程但是没有 impl ... js: 糟了我成 C 语言了</div></li><li class=\"numbering-item\"><div class=\"numbering-marker numbering-marker-decimal\">7.</div><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">类型系统没有反哺代码生成，比如针对 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">for item of items</div> 这样的语句可以基于类型来生成最合适最快的迭代代码，但这块目前也是没有做的 —— 为什么要提这一点因为 for-of 或者 <div class=\"std-inline-code\" data-minimap-color=\"#f5e9e9\">... 展开</div> 转成 ES5 后会带上 generator 那套重型无栈协程 runtime，卡到飞起</div></li></ol><div class=\"std-para --fontArticle\" data-minimap-color=\"#CCCCCC\">但是，源码实现虽然相当拧巴，而 ts 整体的 compiler pipeline 架构设计却相当漂亮和简洁，尤其是 transfomers 和 anders 老爷子主推的 LSP 所带来的 IDE 革命，有机会我单开一篇谈谈这个（挖坑</div><div class=\"std-img-dynamic-wrapper --fontArticle\" style=\"width:10em\"><div class=\"std-img-dynamic\" data-minimap=\"Rect\" style=\"padding-bottom:89.83%\"><img class=\"std-img-dymanic-main r-link __mosaic __loading\" src=\"/tsxs-esm/12.36810d546679f838.webp.mosaic.png\"/><img class=\"std-img-dymanic-main\" src=\"/tsxs-esm/12.36810d546679f838.webp\"/></div></div>","props":{},"tocStack":[{"id":"50000lines-checker-ts","level":1,"text":"五万行 all-in-one 的 checker.ts"},{"id":"comment-named-parameters","level":1,"text":"低配版 named parameters"},{"id":"always-number","level":1,"text":"能用 number 尽量 number"},{"id":"unrestricted-usage-of-const-enum","level":1,"text":"无限制使用 const enum"},{"id":"performance-of-esm-cjs","level":1,"text":"ESM/CJS 的性能问题：尤其是 export 导出特别多的时候"},{"id":"esm-no-private-export","level":1,"text":"ESM 没有 private 导出"},{"id":"it-even-use-var-instead-of-let-or-const","level":1,"text":"ts 甚至大量使用 var，而不是用 let 和 const"},{"id":"set-property-to-string-prototype","level":1,"text":"往 String.prototype.xxx 上注入东西"},{"id":"classless-programming","level":1,"text":"无类编程，推崇组合编程"},{"id":"no-table-driven","level":1,"text":"怎么没有用「表驱动」这种所谓的常用「前端设计模式」？"},{"id":"no-try-catch","level":1,"text":"基本没有 try-catch"},{"id":"the-half-finished-namespace-modules","level":1,"text":"文件多才是大问题 —— 可惜了半成品的 ts namespace"},{"id":"fxxk-js","level":1,"text":"暴论：垃圾 JS 已经严重影响 TS 的演进了"},{"id":"eof","level":1,"text":"EOF"}]}}