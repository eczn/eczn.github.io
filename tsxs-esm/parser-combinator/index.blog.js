System.register(['react', 'rally/@@', './parser-combinator.png.js'], (function (exports) {
  'use strict';
  var React, P, Link, H1Block, ImgDynamic, WindowAppIframe, Code, metaBeauty, fileParserCombinator;
  return {
    setters: [function (module) {
      React = module.default;
    }, function (module) {
      P = module.P;
      Link = module.Link;
      H1Block = module.H1Block;
      ImgDynamic = module.ImgDynamic;
      WindowAppIframe = module.WindowAppIframe;
      Code = module.Code;
      metaBeauty = module.metaBeauty;
    }, function (module) {
      fileParserCombinator = module.default;
    }],
    execute: (function () {

      exports('initialProps', initialProps);

      const meta = exports('meta', metaBeauty({
          id: 'parser-combinator',
          // type: 'app',
          // appTitle: 'app ?',
          title: 'Parser Combinator',
          author: 'eczn',
          // category: '分类',
          time: new Date('2024-05-02 07:00'),
      }));
      async function initialProps(context) {
          return {};
      }
      const code = `
enum Token {
  Value(Int)
  LParen;
  RParen;
  Plus;
  Minus;
  Multiply;
  Divide;
} derive(Debug)

type Lexer[V] (String) -> Option[(V, String)]

fn parse[V](self: Lexer[V], str: String) -> Option[(V, String)] {
  (self.0)(str)
}

fn pchar(predicate: (Char) -> Bool) -> Lexer[Char] {
  Lexer(fn (input) {
    if input.length() > 0 && predicate(input[0]) {
      let start = 1
      Some((input[0], input.substring(~start)))
    } else {
      None
    }
  })
}

let symbol: Lexer[Token] = pchar(fn (input) {
  match input {
    '+' | '-' | '*' | '/' | '(' | ')' => true
    _ => false
  }
}).map(fn {
  '+' => Plus
  '-' => Minus
  '*' => Multiply
  '/' => Divide
  '(' => LParen
  ')' => RParen
})

let whitespace: Lexer[Char] = pchar(fn (input) {
  match input {
    ' ' => true
    _ => false
  }
})

fn map[I, O](self: Lexer[I], f: (I) -> O) -> Lexer[O] {
  Lexer(fn(input) {
    let (value, rest) = self.parse(input)?
    Some((f(value), rest))
  })
}

fn and[V1, V2](self: Lexer[V1], parser2: Lexer[V2]) -> Lexer[(V1, V2)] {
  Lexer(fn (input) {
    let (value, rest) = self.parse(input)?
    let (value2, rest2) = parser2.parse(rest)?
    Some(((value, value2), rest2))
  })
}

fn or[Value](self: Lexer[Value], parser2: Lexer[Value]) -> Lexer[Value] {
  Lexer(fn (input) {
    match self.parse(input) {
      None => parser2.parse(input)
      Some(_) as result => result
    }
  })
}

fn many[Value](self: Lexer[Value]) -> Lexer[List[Value]] {
  Lexer(fn (input) {
    let mut rest = input
    let mut cumul = List::Nil
    while true {
      match self.parse(rest) {
        None => break
        Some((value, new_rest)) => {
          rest = new_rest
          cumul = Cons(value, cumul)
        }
      }
    }
    Some((cumul.reverse(), rest))
  })
}

let zero: Lexer[Int] = pchar(fn { ch => ch == '0' })
  .map(fn { _ => 0 })

let one_to_nine: Lexer[Int] =
  pchar(fn { ch => ch.to_int() >= 0x31 && ch.to_int() <= 0x39 })
  .map(fn { ch => ch.to_int() - 0x30 })

let zero_to_nine: Lexer[Int] =
  pchar(fn { ch => ch.to_int() >= 0x30 && ch.to_int() <= 0x39 })
  .map(fn { ch => ch.to_int() - 0x30 })

// number = %x30 / (%x31-39) *(%30-39)
let value: Lexer[Token] =
  zero.or(
    one_to_nine.and(
      zero_to_nine.many()
    ).map(fn {
      ((i, ls)) => ls.fold_left(fn (acc, cur) {
        acc * 10 + cur
      }, init=i)
    })
  ).map(Token::Value)


// 注意到输入流里有各种空格，因此完整 tokens 可以定义为下面这样:
pub let tokens: Lexer[List[Token]] =
  whitespace.many().and(value.or(symbol).and(whitespace.many()))
    .map(fn { (_, (symbols, _)) => symbols })
    .many()

fn init {
  let input = "  + 123 313 +- /*22"
  let Some((result, _)) = tokens.parse(input)
  debug(result.to_array())
}
`.trim();
      var index_blog = exports('default', (props) => {
          return React.createElement(React.Fragment, null,
              React.createElement(React.Fragment, null,
                  React.createElement(P, null, "\u5B66 moonbit \u7684\u8FC7\u7A0B\u4E2D\u627E\u5230\u5B98\u7F51\u5199\u7684\u4E00\u4E2A\u6559\u7A0B\u300A\u73B0\u4EE3\u7F16\u7A0B\u601D\u60F3\u300B\uFF0C\u5199\u5F97\u975E\u5E38\u597D\uFF1A"),
                  React.createElement(P, null,
                      React.createElement(Link, { href: "https://www.bilibili.com/video/BV1jg4y1d7FA" }, "Bilibili - \u73B0\u4EE3\u7F16\u7A0B\u601D\u60F3")),
                  React.createElement(P, null, "\u5C24\u5176\u662F\u5176\u4E2D\u7684 parser combinator \u53C8\u4E00\u6B21\u5237\u65B0\u4E86\u6211\u5BF9\u7A0B\u5E8F\u8868\u8FBE\u529B\u7684\u770B\u6CD5")),
              React.createElement(H1Block, { id: "id", title: "Parser Combinator \u662F\u4EC0\u4E48\u5462\uFF1F" },
                  React.createElement(P, null, "\u6240\u8C13\u300C\u8BCD\u6CD5\u89E3\u6790\u300D\u5C31\u662F\u5C06\u6241\u5E73\u7684\u5B57\u7B26\u4E32\u8F6C\u4E3A\u67D0\u79CD\u5E26\u7ED3\u6784\u7684\u6784\u9020\uFF0C\u6BD4\u5982\u89E3\u6790\u5B57\u7B26\u4E32\u7684 `\"[1,23]\"` \u4F7F\u5176\u53D8\u6210 JS Array \u5BF9\u8C61 `[1, 23]`\uFF0C\u800C parser combinator \u662F\u4E00\u79CD\u5199\u300C\u8BCD\u6CD5\u89E3\u6790\u300D\u7684\u901A\u7528\u8303\u5F0F\uFF0C\u5B83\u5C06 parser \u6982\u62EC\u4E3A\u5224\u65AD\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u6EE1\u8DB3\u300C\u89C4\u5219\u300D\u7136\u540E\u901A\u8FC7\u7EC4\u5408\u5B50\u7684\u65B9\u5F0F\u5C06\u8FD9\u4E9B\u300C\u89C4\u5219\u300D\u6784\u9020\u6210\u66F4\u590D\u6742\u7684\u300C\u89C4\u5219\u300D\u6700\u7EC8\u5F97\u5230\u5B8C\u6574\u7684\u300C\u8BCD\u6CD5\u89E3\u6790\u300D \u2014\u2014 \u603B\u4E4B\uFF0C\u5229\u7528\u8FD9\u6837\u7684\u65B9\u5F0F\u6211\u4EEC\u53EF\u4EE5\u5C06\u4E0B\u56FE\u91CC\u8FD9\u6837\u7684\u8868\u8FBE\u5F0F\u5B57\u7B26\u4E32\u8F6C\u4E3A\u67D0\u79CD\u63CF\u8FF0\u8868\u8FBE\u5F0F\u7684 ADT\uFF1A"),
                  React.createElement(ImgDynamic, { file: fileParserCombinator }),
                  React.createElement(P, null, "\u57FA\u4E8E\u8FD9\u6837\u7684\u6A21\u5F0F\u6765\u5199\u8BCD\u6CD5\u5206\u6790\u723D\u7684\u4E0D\u884C\uFF08\u2B05\uFE0F \u521A\u901A\u5BB5\u5B8C\u73B0\u5728\u723D\u5230\u6839\u672C\u6CA1\u6709\u56F0\u610F\uFF09"),
                  React.createElement(P, null, "\u5177\u4F53\u76F4\u63A5\u770B\u4EE3\u7801\u5427\uFF0C\u66FC\u5999\u65E0\u9700\u591A\u8A00\uFF08\u4E0A\u6B21\u8FD9\u4E48\u723D\u8FD8\u662F\u4E0A\u6B21\u5199 lisp \u89E3\u91CA\u5668\u7684\u65F6\u5019\uFF09"),
                  React.createElement(P, null, "\u4E0B\u9762\u8FD9\u4E2A\u94FE\u63A5\u662F Moonbit \u5728\u7EBF VSCode Playground \u5206\u4EAB\u4EE3\u7801\uFF0C\u5EFA\u8BAE\u53F3\u4FA7\u8FD0\u884C\u5E76\u5168\u5C4F\u4F7F\u7528\uFF08\u6587\u4EF6\u53F3\u952E\u53EF\u4EE5\u6267\u884C\u6211\u4E0A\u9762\u7684\u4EE3\u7801\uFF09"),
                  React.createElement(WindowAppIframe, { src: "https://try.moonbitlang.cn/#dbe28e82" }),
                  React.createElement(P, null, "\u770B\u5B8C\u771F\u7684\u918D\u9190\u704C\u9876\uFF0C\u6DF1\u523B\u9886\u6559\u4E86 `Combinator` \u4F53\u73B0\u7684\u51FD\u6570\u5F0F\u601D\u60F3\uFF0C\u518D\u914D\u5408 ADT \u5E26\u4E0A\u6EE1\u8840\u7248\u6A21\u5F0F\u5339\u914D\u5199 parser \u723D\u5230\u98DE\u8D77\uFF0C\u73B0\u5728\u518D\u770B\u5927\u5B66\u7F16\u8BD1\u539F\u7406\u7528 C \u5199\u7684\u5404\u79CD for \u5FAA\u73AF\u7136\u540E getChar \u98CE\u683C\u7684\u8BCD\u6CD5\u89E3\u6790\u5C31\u4F1A\u611F\u89C9\u4E11\u5230\u65E0\u6CD5\u5165\u773C\u4E86\u3002\uFF08\u4EE5\u4E0B\u662F\u5B8C\u6574\u4EE3\u7801\uFF0C\u518D\u8D34\u4E00\u904D233\uFF09"),
                  React.createElement(Code, { lang: "moonbit", source: code }),
                  React.createElement(P, null, "\u4EBA\u53EA\u6D3B\u5728\u77AC\u95F4\u554A ~")));
      });

    })
  };
}));
