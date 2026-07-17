System.register(['react', './substitution-demo/substitution-demo.js', './substitution-demo/sexp.js', 'rally/@@', './sicp-cover.png.js', './sicp-eval.png.js', './pairs-lists-object.png.js', './state-vs-symbol.png.js', './sicp-book-1.png.js', './eval-apply-ouroboros.png.js', './cons.png.js'], (function (exports) {
  'use strict';
  var React, SubstitutionDemo, SexpCell, compile, P, Link, Code, ImgDynamic, Numbering, Footnote, Col, metaBeauty, imageSicpCover, imageSicpEval, imagePairsListsObject, imageStateVSSymbol, imageSicpBook1, imageEvalApplyOuroboros, imageCons;
  return {
    setters: [function (module) {
      React = module.default;
    }, function (module) {
      SubstitutionDemo = module.SubstitutionDemo;
    }, function (module) {
      SexpCell = module.SexpCell;
      compile = module.compile;
    }, function (module) {
      P = module.P;
      Link = module.Link;
      Code = module.Code;
      ImgDynamic = module.ImgDynamic;
      Numbering = module.Numbering;
      Footnote = module.Footnote;
      Col = module.Col;
      metaBeauty = module.metaBeauty;
    }, function (module) {
      imageSicpCover = module.default;
    }, function (module) {
      imageSicpEval = module.default;
    }, function (module) {
      imagePairsListsObject = module.default;
    }, function (module) {
      imageStateVSSymbol = module.default;
    }, function (module) {
      imageSicpBook1 = module.default;
    }, function (module) {
      imageEvalApplyOuroboros = module.default;
    }, function (module) {
      imageCons = module.default;
    }],
    execute: (function () {

      exports('initialProps', initialProps);

      const meta = exports('meta', metaBeauty({
          id: 'eczn-preface-for-sicp',
          title: 'ECZN 给 SICP 作序',
          author: 'eczn',
          category: '计算机科学',
          intro: genIntro(),
          time: new Date('2026-07-15 00:00'),
          bookLayout: 'full',
      }));
      async function initialProps(context) {
          return {};
      }
      function Hr() {
          return (React.createElement("div", { style: {
                  height: 0,
                  border: 'none',
                  borderTop: '1px solid var(--colorBorder, #e0e0e0)',
                  margin: '2em 0',
              } }));
      }
      function genIntro() {
          return `计算机程序的构造和解释，全称《Structure and Interpretation of Computer Programs》，简称 SICP，以 Scheme 语言为基础讲解了计算机程序的构造和解释，在很大程度上影响了我对编程语言的理解和认知，本文是我在看完 SICP 并工作了数年之后，出于喜好专门为其作的一篇序，如果能看下来并感到有意思，那么你很可能是这本书最适合阅读的人群；反之如果你认为没意思，此书可能不适合你，作序的目标就在于此：15 分钟看完序来判断这本书适不适合你，值不值得花费几十甚至数百个小时的投入 `;
      }
      var index_blog = exports('default', (props) => {
          return React.createElement(React.Fragment, null,
              React.createElement(P, { sinking: true },
                  genIntro(),
                  React.createElement(Link, { href: "https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs" }, "SICP Wikipedia")),
              React.createElement("style", null, `
      .sicp-hero-img {
        width: 140% !important;
        margin-left: -20% !important;
      }
      @media (max-width: 768px) {
        .sicp-hero-img {
          width: 100% !important;
          margin-left: 0 !important;
        }
      }
    `),
              React.createElement(Hr, null),
              React.createElement("img", { src: imageSicpCover.src, className: "sicp-hero-img r-link", "data-width": imageSicpCover.width, "data-height": imageSicpCover.height }),
              React.createElement("img", { src: imageCons.src, className: "r-link", style: { display: 'none' }, "data-width": imageCons.width, "data-height": imageCons.height }),
              React.createElement(Hr, null),
              React.createElement(P, { sinking: true }, "\u6C47\u7F16\u6BCF\u6761\u6307\u4EE4\u542B\u4E49\u662F\u673A\u68B0\u6027\u7684\uFF0C\u6267\u884C\u540E\u81EA\u52A0 PC \u5C31\u53EF\u4EE5\u7B97\u4F5C\u5FAE\u673A\u539F\u7406\u91CC\u6700\u5173\u952E\u7684 loop \u4E86\uFF0C\u4F46\u6C47\u7F16\u5206\u6790\u7ECF\u5E38\u9700\u8981\u4EBA\u8089\u63A8\u5BFC\u5BC4\u5B58\u5668\u72B6\u6001\uFF0C\u7279\u522B\u662F\u5404\u79CD jmp \u4E71\u98DE\u548C ret \u8FD4\u56DE\u4EE5\u53CA stack \u548C void*\uFF0C\u5F80\u5F80\u4F1A\u5F88\u75DB\u82E6\u5BB9\u6613\u8FF7\u5931\u5728\u5404\u79CD\u5BC4\u5B58\u5668\u548C\u786C\u4EF6/\u8C03\u7528\u6808\u7EC6\u8282\u91CC\uFF0C\u6BD4\u5982\u67D0\u4E9B\u573A\u666F\u4E3A\u4E86\u6027\u80FD\u751A\u81F3\u4F1A\u5229\u7528 \"\u6EA2\u51FA\" \u6216\u8005\u786C\u4EF6/\u4F4D\u64CD\u4F5C/\u7F16\u7801\u7279\u6027\u6765\u505A\u4F18\u5316\uFF0C\u6BD4\u5982\u521D\u59CB\u5316\u4E3A 0 \u5F88\u53EF\u80FD\u4E0D\u662F\u4E00\u4E2A mov ax 0 \u800C\u662F xor ax, ax"),
              React.createElement(P, null, "\u76F8\u6BD4\u4E4B\u4E0B Scheme \u5C31\u7EAF\u7CB9\u592A\u591A\uFF0C\u7ED9\u6211\u7684\u611F\u89C9\u50CF\u662F\u4E00\u5957\u5B8C\u5907\u7684\u5F62\u5F0F/\u903B\u8F91\u7CFB\u7EDF\uFF0C\u5BE5\u5BE5\u51E0\u884C\u53EF\u80FD\u8574\u542B\u7740\u7CBE\u5999\u7684\u903B\u8F91\u6784\u9020\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A `cons` \u7ED3\u6784\u4EE5\u53CA\u4E24\u4E2A\u64CD\u4F5C\u539F\u8BED\uFF1A"),
              React.createElement(Code, { lang: "scheme", source: `
(define (cons x y)
  (lambda (m) (m x y)) )

(define (car z)
  (z (lambda (p q) p)) )

(define (cdr z) 
  (z (lambda (p q) q)) )
; 本文会让你明白这段代码的精妙 ;
    `.trim() }),
              React.createElement(P, null, "\u6C47\u7F16\u7684\u6027\u80FD\u9B54\u6CD5\u786E\u5B9E\u6709\u72EC\u5230\u7684\u4EF7\u503C\uFF1A\u4F46\u662F\u8FD9\u4E0D\u662F\u7A0B\u5E8F\u7684\u672C\u8D28\uFF0C\u5373\u4F7F\u53BB\u6389\u8FD9\u4E9B\u4F18\u5316\uFF0C\u4EE3\u7801\u4F9D\u7136\u80FD\u8DD1\uFF0C\u4F60\u662F\u5426\u601D\u8003\u8FC7\uFF1A\u4E00\u4E2A\u6700\u5C0F\u7684\u7F16\u7A0B\u8BED\u8A00\u5230\u5E95\u80FD\u6709\u591A\u7CBE\u7B80\uFF1F\u8FD9\u662F\u672C\u4E66\u6700\u6838\u5FC3\u7684\u4E3B\u9898\uFF1A\u8BED\u8A00\u6700\u5C0F\u7684\u6784\u9020\u662F\u600E\u6837\u7684\uFF0C\u4EE5\u53CA\u5982\u4F55\u89E3\u91CA\u8FD9\u4E2A\u6700\u5C0F\u7684\u6784\u9020\uFF0C\u5B83\u80FD\u8FBE\u5230\u600E\u6837\u7684\u8868\u8FBE\u529B\uFF1F\u6B63\u5982\u4E66\u540D\uFF1A\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7684\u6784\u9020\u548C\u89E3\u91CA"),
              React.createElement("div", { style: { margin: '0 auto', maxWidth: '30rem' } },
                  React.createElement(ImgDynamic, { file: imageStateVSSymbol, alt: "\u6C47\u7F16 VS \u62EC\u53F7\u6811" })),
              React.createElement(P, null, "\u672C\u6587\u76EE\u6807\u662F\u8BA9\u4F60\u5E26\u4F60\u5FEB\u901F\u9886\u609F\u5230\u8FD9\u4E2A\u6700\u5C0F\u6784\u9020\u7CBE\u5999\u5728\u54EA\uFF0C\u4EE5\u53CA\u9610\u91CA\u5B83\u6240\u8574\u542B\u7684\u5F3A\u5927\u8868\u8FBE\u529B\uFF0C\u5982\u679C\u80FD\u8BFB\u61C2\u5E76\u63A5\u53D7\u672C\u6587\u5219\u8BF4\u660E\u4F60\u975E\u5E38\u9002\u5408\u9605\u8BFB\u6B64\u4E66\uFF0C\u8FBE\u6210\u6211\u4F5C\u5E8F\u7684\u76EE\u6807\uFF1A\u544A\u8BC9\u8BFB\u8005\u8FD9\u672C\u4E66\u9002\u4E0D\u9002\u5408\u4F60\u3002"),
              React.createElement(Hr, null),
              React.createElement(P, null, "\u9996\u5148\uFF0C\u4F60\u5FC5\u987B\u514B\u670D\u5E76\u63A5\u53D7 Scheme \u7684\u8FD9\u4E24\u4E2A\u6838\u5FC3\u8BED\u6CD5\u7279\u5F81\uFF0C\u8FD9\u662F\u7406\u89E3 \u201C\u6700\u5C0F\u7684\u7F16\u7A0B\u8BED\u8A00\u201D \u7684\u5173\u952E\u6240\u5728\uFF1A"),
              React.createElement(Numbering, null,
                  React.createElement(P, null, "\u524D\u7F00\u8868\u8FBE\u5F0F\u548C\u62EC\u53F7\u5730\u72F1: \u7528 `(+ 1 1)` \u800C\u4E0D\u662F `1 + 1`, \u7528 `(add 1 2)` \u800C\u4E0D\u662F `add(1, 2)`\uFF0C\u56E0\u6B64\u62EC\u53F7\u4F1A\u5F88\u591A\uFF0C\u4F46\u914D\u5408 IDE \u5F69\u8272\u62EC\u53F7\u53CA\u62EC\u53F7\u5339\u914D\u57FA\u672C\u6CA1\u5565\u95EE\u9898"),
                  React.createElement(P, null,
                      "\u4EE3\u6362\u5316\u7B80\u800C\u4E0D\u662F\u8D4B\u503C: (add 1 `(add 1 1)`) \u2192 (add 1 `2`) \u2192 (+ 1 2) \u2192 3 ",
                      React.createElement("br", null),
                      "\u6709\u4E14\u4EC5\u6709\u4E24\u6761\u4EE3\u6362\u89C4\u5219\uFF1A"),
                  React.createElement(Numbering, { template: 'iii' },
                      React.createElement(P, null, "\u5F15\u7528\u4EE3\u6362: \u6BD4\u5982\u6709 `(define a 1)` \u7684\u8BDD\uFF0C\u540E\u7EED `(+ a a)` \u53EF\u4EE5\u4EE3\u6362\u4E3A `(+ 1 1)`"),
                      React.createElement(P, null,
                          "\u8FC7\u7A0B\u4EE3\u6362: \u6BD4\u5982 (define add `( lambda (x y) (+ x y))` ) \u7684\u8BDD\uFF0C\u540E\u7EED `(add 1 2)` \u53EF\u4EE5\u4EE3\u6362\u4E3A `(+ 1 2)`",
                          React.createElement("br", null),
                          "\u7279\u522B\u5730\u3001lambda \u4E5F\u53EF\u4EE5\u7F29\u5199\u4E3A (define (add x y) (+ x y))"))),
              React.createElement(Hr, null),
              React.createElement(P, { sinking: true },
                  "\u4E2D\u6587\u5708\uFF0C\u751A\u81F3\u53EF\u4EE5\u8BF4\u6574\u4E2A\u4E1A\u754C\u5BF9\u73A9 Lisp/Scheme \u6216\u8005\u8BF4\u73A9 PL",
                  React.createElement(Footnote, { content: "Programming Language Theory, \u7F16\u7A0B\u8BED\u8A00\u7406\u8BBA, \u7B80\u79F0 PLT \u6216 PL" }),
                  " \u7684\u90FD\u6709\u4E00\u79CD\u5BF9\u7CBE\u82F1/geek/\u505A\u9898\u5BB6/\u7406\u8BBA\u5BB6\u7684\u5632\u5F04\u6216\u73A9\u6897\uFF0C\u8FD9\u66F4\u591A\u662F\u7F3A\u4E4F\u4E00\u4E2A\u73B0\u4EE3\u5316\u7684\u6559\u6750\u63A8\u5E7F\u5BFC\u81F4\u7684\uFF0C\u5F88\u591A\u4EBA\u4F5C\u5E8F\u4E0A\u6765\u5C31\u662F `\u5143\u8BED\u8A00\u7F16\u7A0B` `\u51FD\u6570\u5F0F \u03BB \u6F14\u7B97` \u8FD9\u7C7B\u5F88\u552C\u4EBA\u7684\u4E1C\u897F\uFF0C\u4EFB\u4F55\u521D\u5B66\u8005\u770B\u4E86\u4E00\u4E0B\u5B50\u5C31\u4F1A\u88AB\u5206\u6D41\u6210\u4E24\u7C7B\u4EBA\uFF1A\u4E2D\u4E8C\u75C5\u4F1A\u77AC\u95F4\u6765\u4E86\u5174\u81F4\uFF0C\u666E\u901A\u4EBA\u53EA\u4F1A\u611F\u5230\u5367\u69FD\uFF0C\u800C\u540E\u8005\u5728\u770B\u4E86\u7B2C\u4E00\u7AE0\u90A3\u4E9B\u82B1\u91CC\u80E1\u54E8\u7684\u62EC\u53F7\u8BED\u6CD5\u548C\u8FF7\u60D1\u7684\u524D\u7F00\u8868\u8FBE\u5F0F\u540E\u5927\u6982\u7387\u6F14\u53D8\u4E3A \"\u6211\u53EA\u8BB0\u5F97\u8FD9\u8BED\u8A00\u7684\u62EC\u53F7\u592A\u9006\u5929\u4E86\"\uFF0C\u867D\u7136\u8FD9\u786E\u5B9E\u5F88\u529D\u9000\uFF0C\u4F46\u914D\u5408 IDE \u5F69\u8272\u62EC\u53F7\u548C\u914D\u5BF9\u529F\u80FD\u95EE\u9898\u4E5F\u4E0D\u5927\u3002"),
              React.createElement(P, null, "\u5148\u53E0\u4E2A\u7532\uFF1A\u5B66\u4E60 SICP \u548C Scheme \u5E76\u4E0D\u80FD\u7ED9\u4F60\u627E\u5230\u5DE5\u4F5C\uFF0C\u5BF9\u4E8E\u6211\u800C\u8A00 Scheme \u4EE3\u8868\u7684\u662F\u4E00\u79CD\u770B\u5F85 \"\u4EE3\u7801\" \u7684\u5168\u65B0\u89C6\u89D2\uFF0C\u901A\u8FC7\u5B66\u4E60\u5B83\u53EF\u4EE5\u4ECE\u66F4\u9AD8\u9636\u7684\u89C6\u89D2\u770B\u5F85\u7F16\u7A0B\u8BED\u8A00\u548C\u8BA1\u7B97\u673A\u800C\u4E0D\u662F\u4ECE \"\u6C47\u7F16\" \u53BB\u7406\u89E3\uFF0C\u5B83\u66F4\u50CF\u662F\u7ED9\u51FA\u4E00\u79CD\u6700\u5C0F\u7684\u6784\u9020\u53BB\u89E3\u91CA\u4EC0\u4E48\u624D\u662F\u8BA1\u7B97\u673A\u8BED\u8A00\uFF08\u6784\u9020\uFF09\uFF0C\u4EE5\u53CA \"\u6267\u884C\u4EE3\u7801\" \u662F\u4EC0\u4E48\uFF08\u89E3\u91CA\uFF09"),
              React.createElement(P, null,
                  "\u56E0\u800C\u6211\u7684\u76EE\u7684\u5F88\u7B80\u5355\uFF0C\u4ECE\u4E00\u4E2A\u6D45\u663E\u7684\u89C6\u89D2\u51FA\u53D1\u4F5C \"\u5E8F\"\uFF0C\u65B9\u4FBF\u8BFB\u8005\u5FEB\u901F\u628A\u63E1\u5230\u8FD9\u95E8\u8BED\u8A00\u6700\u91CD\u8981\u7684\u8BBE\u8BA1\u5C31\u662F\u62EC\u53F7\uFF0C\u6B63\u5982\u4EFB\u4F55\u6D41\u884C\u8FC7\u7684\u8BED\u8A00\u90FD\u5FC5\u7136\u7559\u4E0B\u771F\u6B63\u5B9D\u8D35\u7684\u7CBE\u795E\u8D22\u5BCC",
                  React.createElement(Footnote, { content: React.createElement("table", { style: {
                              borderCollapse: 'collapse',
                              width: '100%',
                              marginTop: '0.5em',
                              fontSize: '0.9em',
                          } },
                          React.createElement("thead", null,
                              React.createElement("tr", { style: { borderBottom: '2px solid #e0e0e0' } },
                                  React.createElement("th", { style: { padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#888' } }, "\u8BED\u8A00"),
                                  React.createElement("th", { style: { padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#888' } }, "\u590D\u6742\u6311\u6218"),
                                  React.createElement("th", { style: { padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#888' } }, "\u6700\u4F73\u5B9E\u8DF5\uFF08\u7CBE\u795E\u8D22\u5BCC\uFF09"))),
                          React.createElement("tbody", null,
                              React.createElement("tr", { style: { borderBottom: '1px solid #f0f0f0' } },
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444', fontWeight: 600, whiteSpace: 'nowrap' } }, "Scheme"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "\u6700\u5C0F\u7684\u7F16\u7A0B\u8BED\u8A00\u5E94\u8BE5\u662F\u600E\u6837\u7684\uFF1F"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "\u7CBE\u7B80\u5230\u5C11\u91CF\u7B26\u53F7\uFF0C\u4E5F\u80FD\u505A\u5230\u8D85\u8D8A\u4E00\u5207\u7684\u590D\u6742\u62BD\u8C61\uFF0C\u4EE3\u7801\u5373\u6570\u636E\uFF0C\u8BED\u8A00\u53EF\u81EA\u4E3E")),
                              React.createElement("tr", { style: { borderBottom: '1px solid #f0f0f0' } },
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444', fontWeight: 600, whiteSpace: 'nowrap' } }, "JavaScript"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "\u4E0D\u540C\u7CFB\u7EDF\u95F4\u6570\u636E\u4EA4\u6362\u4E3A\u4F55\u5982\u6B64\u75DB\u82E6\uFF1F"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } },
                                      "\u6570\u636E\u4EA4\u6362\u5C31\u5E94\u8BE5\u662F\u6700\u7B80\u5355\u7684 ",
                                      React.createElement("code", null, "[]"),
                                      " \u548C ",
                                      React.createElement("code", null, "{}"),
                                      "\uFF0CXML \u771F\u8BE5\u6DD8\u6C70\u4E86\uFF0C\u5982\u679C\u4E00\u95E8\u8BED\u8A00\u4E0D\u652F\u6301 JSON \u53EF\u4EE5\u7B03\u5B9A\u5B83\u5FC5\u7136\u4F1A\u5931\u8D25")),
                              React.createElement("tr", { style: { borderBottom: '1px solid #f0f0f0' } },
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444', fontWeight: 600, whiteSpace: 'nowrap' } }, "Rust"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "\u5185\u5B58\u5B89\u5168\u95EE\u9898\u957F\u671F\u56F0\u6270\u4E1A\u754C"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "Rust \u6240\u6709\u6743\u7CFB\u7EDF\u7ED9\u51FA\u4E86\u5DE5\u4E1A\u7EA7\u89E3\u7B54\uFF1A\u4E0E C++ move semantics\u3001Swift ARC \u7B49\u540C\u65F6\u4EE3\u63A2\u7D22\u76F8\u6BD4\uFF0C\u6240\u6709\u6743+\u501F\u7528\u7684\u65B9\u6848\u6700\u4E3A\u5E72\u51C0\u5229\u843D")),
                              React.createElement("tr", null,
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444', fontWeight: 600, whiteSpace: 'nowrap' } }, "Go"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "\u591A\u6838\u65F6\u4EE3\uFF0C\u5E76\u53D1\u7F16\u7A0B\u5982\u4F55\u53D8\u7B80\u5355\uFF1F"),
                                  React.createElement("td", { style: { padding: '8px 12px', color: '#444' } }, "\u4F60\u4E0D\u8BE5\u7528\u9501\u7684\u65B9\u5F0F\u601D\u8003\u5E76\u53D1\uFF0C\u800C\u662F\u7528\u901A\u4FE1\u7684\u65B9\u5F0F\u601D\u8003\u5E76\u53D1: \"Don't communicate by sharing memory; share memory by communicating\"")))) }),
                  "\u4E00\u6837\uFF0CScheme \u5931\u53BB\u62EC\u53F7\u5C31\u8DDF JS \u6CA1\u6709 JSON\u3001Rust \u6CA1\u6709\u6240\u6709\u6743\u3001Go \u6CA1\u6709 goroutine \u4E00\u6837\uFF0C\u62EC\u53F7\u662F\u8FD9\u672C\u4E66\u3001lisp \u7CFB\u8BED\u8A00\u771F\u6B63\u7684\u7075\u9B42\u548C\u54C1\u5473\u3002"),
              React.createElement("img", { className: "r-link", src: imageSicpBook1.src, "data-width": imageSicpBook1.width, "data-height": imageSicpBook1.height, style: {
                      float: 'right', width: '45%', marginRight: '-2em',
                      shapeOutside: 'polygon(-4% 18%, 70% 1%, 100% 80%, 30% 105%)',
                  } }),
              React.createElement(P, null,
                  "\u771F\u5FC3\u5F3A\u63A8\u6BCF\u4E00\u4E2A\u5199\u4EE3\u7801\u7684\uFF0C\u4E0D\u8BBA\u662F\u521D\u5B66\u7684\u8FD8\u662F\u8D44\u6DF1\u4E13\u5BB6\u90FD\u5B66\u4E00\u4E0B Scheme\uFF0C\u7279\u522B\u662F\u63A8\u8350\u4ECE SICP \u5F00\u59CB\u4E0A\u624B\uFF0C\u5728\u5DE5\u4F5C\u51E0\u5E74\u540E\u4E00\u5B9A\u4F1A\u6709\u9F41\u9F41\u9F41\u7684\u56DE\u7518",
                  React.createElement(Footnote, { content: "\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u91CC\u9762\u4F1A\u7559\u4E60\u9898\uFF0C\u800C\u4E14\u4F1A\u7ED9\u6700\u96BE\u7684\u9898\u5355\u72EC\u6807\u6CE8\u661F\u53F7\uFF0C\u610F\u601D\u662F\u4E0D\u4F1A\u505A\u4E5F\u6CA1\u5173\u7CFB\u3002 \u5176\u4E2D\u6709\u4E00\u9898\u662F\uFF1A\u5199\u4E00\u4E2A\u7B26\u53F7\u6C42\u5BFC\u7684\u51FD\u6570\uFF0C\u6BD4\u5982 x^2 \u53D8\u6210 2x\uFF0C\u5927\u591A\u6570\u4EBA\u90FD\u80FD\u8FBE\u6210 80%+ \u7684\u7528\u4F8B\u901A\u8FC7\uFF0C\u80FD\u5B8C\u6574\u901A\u8FC7\u7684\u5E76\u4E0D\u591A\u6211\u4E5F\u6CA1\u505A\u5230\uFF0C\u4F46\u5728\u672A\u6765\u7684\u67D0\u4E00\u5929\u5982\u679C\u4F60\u6070\u597D\u8BFB\u4E86\u5927\u6A21\u578B\u7684\u7406\u8BBA\uFF0C\u53C8\u6070\u597D\u770B\u5230\u4F18\u5316\u5668\u91CC\u7684\u53CD\u5411\u4F20\u64AD\u548C\u68AF\u5EA6\u6C42\u5BFC\uFF0C\u4F60\u4E00\u5B9A\u4F1A\u60F3\u8D77\u6765\u8FD9\u9898\u7684\uFF1ASICP \u7279\u6709\u7684\u628A\u4E1A\u754C\u6700\u590D\u6742\u6700\u56F0\u96BE\u7684\u4E16\u754C\u6027\u96BE\u9898\u7ED9\u4F60\u7B80\u5316\u6210\u4E00\u9053\u9010\u5C42\u6DF1\u5165\u7684\u4E60\u989812345\uFF0C\u591A\u6570\u4EBA\u80FD\u641E\u5B9A 1234 \u5E76\u80FD\u6DF1\u523B\u7406\u89E3\u8FD9\u9053\u9898\u7684\u6311\u6218\u662F\u4EC0\u4E48\uFF0C\u4F46\u662F\u6700\u540E\u7684 4 \u6216\u8005\u6807\u661F\u7684 5 \u5219\u662F\u5730\u72F1\u7EA7\u96BE\u5EA6\u7684\u3002\u4F60\u5728\u672A\u6765\u5F88\u53EF\u80FD\u53C8\u4F1A callback \u60F3\u8D77\u6765\u8FD9\u7C7B\u66FE\u7ECF\u6807\u661F\u7684\u96BE\u9898\u7ED9\u4F60\u7684\u601D\u7EF4\u6311\u6218\u786E\u5B9E\u5C31\u662F\u6781\u96BE\u7684\uFF0C\u505A\u4E0D\u51FA\u6765\u53EF\u592A\u6B63\u5E38\u4E86\uFF0C\u4F46\u662F\u5F53\u65F6\u90A3\u79CD\u6DF1\u5EA6\u7684\u6C89\u6D78\u5F0F\u601D\u8003\u7684\u4F53\u9A8C\u4E5F\u8BB8\u4F1A\u4F34\u968F\u4E00\u751F\uFF0C\u79C1\u4EE5\u4E3A\u505A\u4E0D\u51FA\u6765\u624D\u662F\u6700\u503C\u5F97\u4F53\u9A8C\u7684\u4E00\u73AF\uFF0C\u771F\u5929\u624D\u53CD\u800C\u4E0D\u9700\u8981\u6B64\u4E66\u3002" }),
                  "\uFF0C\u5C24\u5176\u662F\u5728\u8FD9\u4E2A\u6D6E\u8E81\u7684 AI \u65F6\u4EE3\u5F88\u96BE\u6709\u5B66\u751F\u7684\u5FC3\u5883\u53BB\u6DF1\u5165\u601D\u8003\u7EAF\u7CB9\u7684\u903B\u8F91/\u6570\u5B66/\u5F62\u5F0F\u5316\u95EE\u9898\u4E86\uFF08\u4F46\u662F\u8BDD\u8BF4\u56DE\u6765 AI \u65F6\u4EE3\u9605\u8BFB SICP \u5E94\u8BE5\u6CA1\u6709\u4EFB\u4F55\u95E8\u69DB\u6027\u7684\u95EE\u9898\u4E86\uFF09"),
              React.createElement(P, null, "\u518D\u6B21\u53E0\u7532\uFF1A\u5B66\u4E60\u8FD9\u4E2A\u5E76\u4E0D\u80FD\u7ED9\u4F60\u627E\u5230\u5DE5\u4F5C\u6216\u8005\u7C7B\u4F3C\u7684\u4EC0\u4E48\u53EF\u4EE5\u91CF\u5316\u7684\u540D\u5229\u6536\u76CA\uFF0C\u4F46\u5982\u679C\u4F60\u5E0C\u671B\u4E86\u89E3\u5230\u8FD9\u7C7B\u95EE\u9898\u7684\u89E3\u7B54\u65F6\u975E\u5E38\u63A8\u8350\u4F60\u770B\u770B\uFF1A\u8BA1\u7B97\u673A\u7684\u8BA1\u7B97\u662F\u4EC0\u4E48\u3001\u6700\u5C0F\u7684\u7F16\u7A0B\u8BED\u8A00\u662F\u600E\u6837\u7684\u3001\u5199 Rust \u7684/\u5199 TS \u7684/\u6216\u8005\u8BF4 PL \u4F6C\u4EEC\u6240\u8FFD\u6C42\u7684\u54C1\u5473\u662F\u4EC0\u4E48\u3002"),
              React.createElement(Hr, null),
              React.createElement(P, { sinking: true }, "\u9996\u5148\u4F60\u9700\u8981\u5FD8\u8BB0\u4E00\u5207\uFF0C\u5047\u8BBE\u4F60\u53EA\u6709\u4E00\u5F20\u7EB8\u548C\u4E24\u6761\u4EE3\u6362\u89C4\u5219\u5C31\u884C\uFF0C\u628A\u4EE3\u7801\u7684\u6267\u884C\u7406\u89E3\u4E3A\uFF1A\u4F9D\u636E\u89C4\u5219\u505A\u4EE3\u6362\u3001\u5316\u7B80\u89C4\u7EA6\u5E76\u5F97\u5230\u7ED3\u679C\uFF0C\u7C7B\u4F3C\u6570\u5B66\u7684\u5316\u7B80\u4EE3\u6362\u8FC7\u7A0B\u3002\u6211\u4EEC\u8981\u5FD8\u8BB0\u6C47\u7F16\u7684\u5FC3\u667A\u6A21\u578B\u5BC4\u5B58\u5668\u548C\u72B6\u6001 (registers and state)\uFF0C\u8F6C\u5411\u62E5\u62B1 Scheme \u7684\u5FC3\u667A\u6A21\u578B\u7B26\u53F7\u548C\u4EE3\u6362 (symbol and substitution)\uFF1A"),
              React.createElement(Code, { lang: "scheme", overflow: "visible", source: `
; 这是一张草稿纸, 用冒号代表注释

(define a 123)
; 类似数学上经常写的 "令 a = 123"
; 特别写给 js 程序员: 这等价于 const a = 123

(+ a a)
; 运算符提前的前缀写法, 等价于 a + a，然后 a 可以代换为 123
; 所以最终是 (+ 123 123) 得到 246

(define (double x)
  (+ x x) )
; 等价于定义一个函数，"令 double(x) = x + x"
; 特别写给 js 程序员: 这等价于 function double(x) { return x + x }

(double a)
; 故而上述写法代表 double(a) 也就是 double(123)
; 最终就是 (+ 123 123) 得到 246

(define double
  (lambda (x) (+ x x) )
)
; double 还可以通过 lambda 的语法糖来表达, 跟前面那种写法几乎意思一样
; 这里意思是 令 double = (x) => x + x
; 视角是: 把 (x) = x + x 这件事本身单独拿出来叙述：有一个参数加自己
; 特别写给 js 程序员: 这等价于 const double = (x) => x + x

; 执行代码就是在做 "代换" 比如 (+ 1 1) 其实就是化简代换成 2
; 执行 (double a) 就是先找到 double 的定义, 带入得到:
; 第一步：double 就是 (lambda (x) (+ x x) )
; 第二步：带入到 (double a)
; 第三步：得到 ( (lambda (x) (+ x x)) a ) 也就是 "有一个参数加自己，参数是 a"
; 第四步：代换 a 得到 ( (lambda (x) (+ x x)) 123 )
; 第五步：把 123 代换到 (x) => x + x 中的 x 最终得到 (+ 123 123) 最后得到结果
; [备注：有所简化]
    `.trim() }),
              React.createElement(P, null, "\u5148\u8BF4 cons \u8FD9\u4E2A\u6784\u9020\u5230\u5E95\u5999\u5728\u54EA\uFF1A\u5B83\u4EC5\u4EC5\u901A\u8FC7\u7F16\u7A0B\u8BED\u8A00\u672C\u8EAB\u7684\u8BED\u6CD5\u5C31\u5B9A\u4E49\u4E86 \"\u5F15\u7528/\u6307\u9488\" \u8FD9\u4E2A\u6982\u5FF5\uFF0C\u4F60\u65E0\u9700\u7406\u89E3\u4EFB\u4F55\u8BA1\u7B97\u673A\u5E95\u5C42\u7684\u6307\u9488\u7EC6\u8282\u5C31\u53EF\u4EE5\u7406\u89E3\u8FD9\u4E2A\u6982\u5FF5\uFF1A"),
              React.createElement(Code, { lang: "scheme", source: `
(define (cons x y)
  (lambda (m) (m x y)) )

(define (car z)
  (z (lambda (p q) p)) )
; (lambda (p q) p) 代表有两个参数 p q, 代换成 p 返回 (返回左边的)

(define (cdr z)
  (z (lambda (p q) q)) )
; (lambda (p q) q) 代表有两个参数 p q, 代换成 q 返回 (返回右边的)
    `.trim() }),
              React.createElement(P, null, "\u8981\u7406\u89E3\u4E0A\u8FF0\u8FC7\u7A0B\uFF0C\u5173\u952E\u5728\u4E8E\u4EE3\u6362\uFF0C\u7ED9\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u53EF\u4EE5\u5B9A\u4E49\u8FD9\u79CD\u7ED3\u6784\uFF0C\u6BD4\u5982\u4E00\u4E2A\u94FE\u8868 `1 \u2192 2 \u2192 3 \u2192 nil`\uFF1A"),
              React.createElement(P, { center: true },
                  React.createElement(SexpCell, { sexp: compile('(cons 1 (cons 2 (cons 3 nil)))') })),
              React.createElement(Hr, null),
              React.createElement(Code, { lang: "scheme", source: `
; [1, [2, [3, nil]]]
(define _123
  (cons 1 (cons 2 (cons 3 nil))) )

(car _123)  ; 取出最外层的左边，返回 1
(cdr _123)  ; 取出最外层的右边，返回 (cons 2 (cons 3 nil))
            ; 注意上面两步，你一定要拿出纸笔一层层化简才能理解
            ; 再次强调，你一定要拿出纸笔一层层化简/代换
            ; 才能知道这里到底在做什么，否则后面文章不用看了
    `.trim() }),
              React.createElement("textarea", { placeholder: "\u8FD9\u91CC\u7ED9\u4F60\u51C6\u5907\u597D\u4E86\u8349\u7A3F\u7EB8\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u76F4\u63A5\u6572\u4F60\u7684\u63A8\u5BFC\uFF0C\u6216\u8DDF\u968F\u4E0B\u9762\u7684\u4EA4\u4E92\u5F0F\u4EE3\u6362\u6F14\u793A\u6765\u7406\u89E3 cons \u7684\u4EE3\u6362\u8FC7\u7A0B", style: {
                      width: '100%',
                      minHeight: '15rem',
                      boxSizing: 'border-box',
                      fontFamily: 'consolas, menlo, monospace',
                      fontSize: '0.9em',
                      padding: '1em',
                      border: '1px solid var(--colorBorder, #e0e0e0)',
                      borderRadius: '4px',
                      resize: 'vertical',
                  } }),
              React.createElement(P, null,
                  React.createElement(SubstitutionDemo, null)),
              React.createElement(Hr, null),
              React.createElement(P, { sinking: true }, "\u7136\u540E\u901A\u8FC7 cons \u7ED3\u6784\u7684\u5DE6/\u53F3\u4E24\u8FB9\u6765\u76F4\u63A5\u6784\u9020 \"\u5BF9\u8C61\" \u4E86\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u5C31\u662F\u4E00\u4E2A\u4EFB\u610F\u7684 `type Pair<L, R> = [L, R]`\uFF1A"),
              React.createElement(Code, { lang: "scheme", source: `
(define (create-user name age)
  (cons name age))

(define (get-username user)
  (car user) )

(define (get-userage user)
  (cdr user) )
    `.trim() }),
              React.createElement(P, null, "\u4F60\u6216\u8BB8\u4F1A\u8BA4\u4E3A\u8FD9\u7B97\u54EA\u95E8\u5B50\u5BF9\u8C61\u4E0D\u5C31\u662F\u7C7B\u6570\u7EC4\u7684 `[name: string, age: number]` \u5417\uFF0C\u4F46\u8FD9\u95E8\u8BED\u8A00\u6700\u8BA9\u4EBA\u611F\u5230\u7CBE\u5999\u7684\u5730\u65B9\u5728\u4E8E\uFF0C\u5B83\u7684\u6E90\u7801\u672C\u8EAB\u5C31\u662F `cons` \u2014\u2014 \u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u7ED9\u4E0A\u9762\u7684\u8FD9\u79CD\u4EE3\u7801\u98CE\u683C\u5957\u4E00\u5C42\u8BED\u6CD5\u7CD6\uFF0C\u4F7F\u5176\u5199\u8D77\u6765\u66F4\u50CF\u73B0\u4EE3\u8BED\u8A00\u3002"),
              React.createElement(P, null, "\u6765\uFF0C\u4ED4\u7EC6\u8003\u5BDF\u4E00\u4E0B\uFF1A"),
              React.createElement(Code, { lang: "scheme", source: `
; 这是 [1, [2, null]]
(cons 1 (cons 2 nil))

; 那么 (cons 1 2) 可以表达为:
(cons 'cons (cons 1 (cons 2 nil)))
; 对应 ['cons', [1, [2, null]]] 遍历这个链表就可以遍历语法树
    `.trim() }),
              React.createElement(P, null,
                  React.createElement(SexpCell, { sexp: compile('(cons 1 (cons 2 (cons 3 nil)))') })),
              React.createElement(P, null,
                  React.createElement(SexpCell, { sexp: compile(`(cons 'cons' (cons 1 (cons 2 nil)))`) })),
              React.createElement(Hr, null),
              React.createElement(P, { sinking: true }, "\u56E0\u800C\u8FD9\u95E8\u8BED\u8A00\u5929\u751F\u7684\u5BBF\u547D\u5C31\u662F\uFF1A\u5199\u4E00\u4E2A `eval` \u51FD\u6570\uFF0C\u5B83\u901A\u8FC7\u904D\u5386 cons \u8BED\u6CD5\u6811\uFF0C\u5C31\u53EF\u4EE5\u81EA\u5DF1\u904D\u5386\u81EA\u5DF1\u7684\u6E90\u7801\u5E76\u628A\u81EA\u5DF1\u4EE3\u6362\u6210\u5176\u4ED6\u6A21\u6837\uFF0C\u6BD4\u5982\u4EE3\u6362\u6210\u6C47\u7F16\u5C31\u6307\u7F16\u8BD1\uFF0C\u751A\u81F3\u8FD8\u53EF\u4EE5\u51ED\u7A7A\u9020\u51FA\u9759\u6001\u7C7B\u578B\u7CFB\u7EDF\u3002"),
              React.createElement(P, null, "\u800C\u5BF9\u4E8E\u524D\u9762\u90A3\u79CD\u9762\u5411\u5BF9\u8C61\u7684\u8BED\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u6784\u9020\u548C\u89E3\u91CA\u5982\u4E0B\u7684\u8FD9\u79CD\u8BED\u6CD5\u7CD6\u6765\u5B9E\u73B0\u8FD9\u79CD `Record<string, any>` \u7684\u5BF9\u8C61\u6A21\u5F0F\uFF0C\u6B63\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u4E00\u822C\uFF1A"),
              React.createElement(Col, { units: [1.8, 2] },
                  React.createElement(Code, { lang: "scheme", overflow: "visible", source: `
(struct User 'name 'age)
; struct 是一个你实现的函数代换

(define eczn (new User 'eczn '17) )
; new 也是一个你实现的函数代换

(print eczn.name)
(print eczn.age)
; 你还需要解释 . 的代换
      `.trim() }),
                  React.createElement(ImgDynamic, { file: imagePairsListsObject })),
              React.createElement(P, null, "\u8FD9\u4E9B\u65B0\u8BED\u6CD5\u5F88\u5927\u7A0B\u5EA6\u4E0A\u88AB\u62EC\u53F7\u548C\u524D\u7F00\u8868\u8FBE\u7EDF\u4E00\u5728\u4E00\u8D77\u4E86\uFF0C\u5B83\u4EEC\u8DDF define \u5730\u4F4D\u7C7B\u4F3C\u4E86\uFF0C\u662F\u5173\u952E\u5B57\uFF1B\u4E8B\u5B9E\u4E0A define \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\u4EE3\u6362... \u7279\u522B\u4F60\u771F\u7684\u5728\u505A\u81EA\u4E3E\u7684\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0 define \u5C31\u662F\u4E00\u4E2A\u4EE3\u6362\uFF0C\u751A\u81F3\u5F53\u4F60\u91CD\u65B0\u5BA1\u89C6 (+ 1 2) \u7684\u65F6: \u6709\u6CA1\u6709\u53EF\u80FD + \u53F7\u53EF\u4EE5\u4EE3\u6362\u5220\u6389? \u7F16\u7A0B\u8BED\u8A00\u751A\u81F3\u53EF\u4EE5\u6CA1\u6709 + \u53F7\uFF01\uFF1F\uFF1F"),
              React.createElement(P, null, "\u6700\u540E\uFF0C\u56DE\u5230\u5177\u4F53\u7684\u5B9E\u73B0\u4E0A\uFF0C\u5728\u8FD9\u4E2A\u89C6\u89D2\u4E0B `(struct User a b c)` \u4E0D\u8FC7\u662F\u4E00\u79CD cons \u6784\u9020\uFF0C\u4F60\u53EA\u9700\u904D\u5386\u5B83\u5E76\u5C06\u5176\u4EE3\u6362\u4E3A\u53E6\u5916\u4E00\u79CD cons \u6784\u9020\uFF1A`(define (create-user a b c) ... )`\u3001\u540C\u7406 `(new User a b c)` \u4E5F\u4EE3\u6362\u4E3A `(create-user a b c)` \u5C31\u884C\uFF0C\u6BD4\u5982\u4E0A\u8FF0\u7684\u4EE3\u7801\u7ECF\u8FC7\u4F60\u7684\u5B9A\u5236\u5316\u7684 `myEval` \u4EE3\u6362\u540E\u5E94\u8BE5\u4EA7\u751F\u5982\u4E0B\u7ED3\u679C\uFF08\u968F\u624B\u5199\u7684\uFF0C\u4E0D\u4FDD\u8BC1\u5BF9\uFF0C\u5F88\u4E45\u6CA1\u78B0\u4E86\uFF09\uFF1A"),
              React.createElement("style", null, `
      .intro-my-eval {
        position: relative;
      }
      .intro-my-eval img {
        position: absolute;
        right: -20%;
        top: 40%;
        transform: translateY(-50%);
        width: 50%;
      }
    `),
              React.createElement("div", { className: "intro-my-eval" },
                  React.createElement("img", { src: imageSicpEval.src, className: "r-link", "data-width": imageSicpEval.width, "data-height": imageSicpEval.height }),
                  React.createElement(Code, { lang: "scheme", source: `
myEval 处理这段 cons 结构：
  (struct User 'name 'age)
  (define eczn (new User 'eczn '17) )
  (print eczn.name)
  (print eczn.age)

得到这段最终的 cons 结构：
  (define (create-User name age)
    (cons name age) )
  (define eczn (create-User 'eczn '17) )
  (print (car eczn)) ; 需要把 .name 代换为 car
  (print (cdr eczn)) ; 需要把 .age  代换为 cdr
      `.trim() })),
              React.createElement("img", { className: "r-link", src: imageEvalApplyOuroboros.src, "data-width": imageEvalApplyOuroboros.width, "data-height": imageEvalApplyOuroboros.height, style: {
                      float: 'right', width: '50%', marginRight: '-8em',
                      // 一个圆
                      shapeOutside: 'circle(60% at 81% 54%)',
                  } }),
              React.createElement(P, null, "\u5F53\u7136\uFF0C\u8FC7\u7A0B\u4E2D\u4F1A\u6709\u76F8\u5F53\u591A\u6709\u8DA3\uFF08\u751A\u81F3\u662F\u7E41\u590D\uFF09\u7684\u7EC6\u8282\uFF0C\u5173\u952E\u5728\u4E8E\u7406\u89E3\u5E76\u6DF1\u523B\u5730\u770B\u5230 \u2014\u2014 \u4EFB\u4F55\u8BED\u8A00\u7684\u6E90\u7801\u90FD\u4E0D\u662F\u6241\u5E73\u7684\u7EBF\u6027\u5B57\u7B26\u4E32\uFF0C\u800C\u662F\u6709\u7ED3\u6784\u7684\u8BED\u6CD5\u6811\uFF1A\u4EE5\u7B26\u53F7\u4EE3\u6362\u4F5C\u4E3A\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7684\u6784\u9020\u548C\u89E3\u91CA\uFF0C\u6700\u7EC8\u4EA7\u751F\u5143\u8BED\u8A00\u5FAA\u73AF EVAL-APPLY"),
              React.createElement(P, null, "\u8FD9\u672C\u4E66\u8FD8\u4F1A\u8FDB\u4E00\u6B65\u544A\u8BC9\u4F60\uFF1A\"\u5982\u4F55\u901A\u8FC7\u64CD\u4F5C\u6811\u7684\u6784\u9020\u548C\u89E3\u91CA\u6765\u6784\u9020\u548C\u89E3\u91CA\u8FD9\u68F5\u6811\"\uFF0C\u4EE5\u53CA \"\u6700\u5C0F\u7684\u8BED\u8A00\u957F\u4EC0\u4E48\u6837\"\uFF0C\u5E76\u4ECE\u4E2D\u9886\u609F\u5230 PL \u7406\u8BBA\u7684\u54C1\u5473\u4EE5\u53CA PL \u4F6C\u4ED6\u4EEC\u5230\u5E95\u5728\u8FFD\u6C42\u4EC0\u4E48\u3002"),
              React.createElement(P, null,
                  "\u63A8\u8350\u5FC5\u987B\u8D2D\u4E70\u6700\u7ECF\u5178\u7684 Scheme \u7248\u7684 SICP",
                  React.createElement(Footnote, { content: "\u672C\u4EBA\u6301\u6709\u4E09\u672C SICP\uFF1A\u4E00\u672C\u7528\u4E8E\u7FFB\u9605\u3001\u4E00\u672C\u7528\u4E8E\u6536\u85CF\u3001\u4E00\u672C\u7528\u4E8E\u4F20\u6559/\u9001\u4EBA\uFF0C\u5982\u679C\u4F60\u7EBF\u4E0B\u8BA4\u8BC6\u6211\u53EF\u4EE5\u627E\u6211\u501F\u4E66\u770B\u770B" }),
                  "\uFF0C\u5F88\u591A\u4EBA\u63A8\u8350\u5728\u7EBF\u5F00\u6E90\u7684\u82F1\u6587\u539F\u7248\uFF0C\u4F46\u4E2D\u6587\u7248\u5176\u5B9E\u4E5F\u6CA1\u90A3\u4E48\u5DEE\uFF0C\u4F46\u5FC5\u987B\u8981\u6CE8\u610F\u5343\u4E07\u4E0D\u8981\u4E70\u8FD9\u51E0\u5E74\u65B0\u51FA\u7684 Python / JS \u7248\u7684\uFF0C\u62EC\u53F7\u624D\u662F SICP \u7684\u7CBE\u9AD3\uFF0C\u53EA\u6709\u62EC\u53F7\u80FD\u89E3\u7B54 \u201C\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7684\u6784\u9020\u548C\u89E3\u91CA\u201D \u7684\u6784\u9020\u548C\u89E3\u91CA\u3002"),
              React.createElement(P, null, "\u5982\u679C\u4F60\u80FD\u559C\u6B22\u672C\u6587\u90A3\u4E48\u6574\u672C\u4E66\u51E0\u4E4E\u5FC5\u7136\u662F\u4F60\u6700\u7231\u7684\u90A3\u7C7B\uFF0C\u672C\u6587\u7528\u4E86\u8DDF\u539F\u4E66\u7C7B\u4F3C\u7684\u7ED3\u6784\u548C\u5199\u4F5C\u624B\u6CD5\uFF0C\u795D\u4F60\u9605\u8BFB\u6109\u5FEB\u3002"),
              React.createElement(P, null, "\u6700\u540E\uFF0C\u672C\u5E8F\u7684\u7ED3\u6784\u4E25\u683C\u6309\u7167\u4E86 SICP \u5168\u4E66\u7684\u76EE\u5F55\u7ED3\u6784\u505A\u7684\u7F16\u6392\uFF0C\u5168\u4E66\u5206\u4E3A\u5982\u4E0B\u90E8\u5206\uFF1A"),
              React.createElement(P, null,
                  React.createElement("table", { style: {
                          borderCollapse: 'collapse',
                          width: '100%',
                          marginTop: '1em',
                          fontSize: '0.95em',
                      } },
                      React.createElement("thead", null,
                          React.createElement("tr", { style: { background: '#f5f5f5', borderBottom: '2px solid #e0e0e0' } },
                              React.createElement("th", { style: { padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#888' } }, "\u539F\u6587\u7AE0\u8282"),
                              React.createElement("th", { style: { padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#888' } }, "\u672C\u6587\u7ED3\u6784"))),
                      React.createElement("tbody", null,
                          React.createElement("tr", { style: { borderBottom: '1px solid #f0f0f0' } },
                              React.createElement("td", { style: { padding: '10px 14px', color: '#444' } }, "\u7B2C\u4E00\u7AE0\uFF1A\u6784\u9020\u8FC7\u7A0B\u62BD\u8C61"),
                              React.createElement("td", { style: { padding: '10px 14px', color: '#444' } }, "\u8349\u7A3F\u7EB8\uFF0C\u4EE3\u6362\u5316\u7B80")),
                          React.createElement("tr", { style: { borderBottom: '1px solid #f0f0f0', background: '#fafafa' } },
                              React.createElement("td", { style: { padding: '10px 14px', color: '#444' } }, "\u7B2C\u4E8C / \u7B2C\u4E09\u7AE0\uFF1A\u6784\u9020\u6570\u636E\u62BD\u8C61 / \u6A21\u5757\u5316\u3001\u5BF9\u8C61\u3001\u72B6\u6001"),
                              React.createElement("td", { style: { padding: '10px 14px', color: '#444' } }, "cons \u662F\u4EC0\u4E48\uFF0C\u4EE5\u53CA\u5982\u4F55\u6784\u9020\u5BF9\u8C61")),
                          React.createElement("tr", { style: { borderBottom: '1px solid #f0f0f0' } },
                              React.createElement("td", { style: { padding: '10px 14px', color: '#444' } }, "\u7B2C\u56DB / \u7B2C\u4E94\u7AE0\uFF1A\u5143\u8BED\u8A00\u7F16\u7A0B / \u5BC4\u5B58\u5668\u673A"),
                              React.createElement("td", { style: { padding: '10px 14px', color: '#444' } }, "\u6784\u9020\u548C\u89E3\u91CA\u7F16\u8BD1\u5668\u9B54\u6CD5\uFF0C\u4EE5\u53CA\u9762\u5BF9\u8FD9\u95E8\u8BED\u8A00\u7684\u7EC8\u6781\u5BBF\u547D\uFF1A\u6784\u9020\u548C\u89E3\u91CA\u81EA\u5DF1"))))));
      });

    })
  };
}));
