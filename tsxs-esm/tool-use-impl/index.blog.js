System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, Quote, Link, H1Block, Numbering, Code, H2, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Quote = module.Quote;
            Link = module.Link;
            H1Block = module.H1Block;
            Numbering = module.Numbering;
            Code = module.Code;
            H2 = module.H2;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            // import fileMathEditor from './math-edtior.png';
            const meta = exports('meta', metaBeauty({
                id: 'tool-use-impl',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'Tool Use 具体是如何实现的 ?',
                author: 'eczn',
                // category: '分类',
                time: new Date('2026-04-17 10:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            const linke4b = React.createElement(Link, { href: "https://huggingface.co/google/gemma-4-E4B-it" }, "gemma-4-E4B-it");
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u8FD9\u6BB5\u65F6\u95F4\u6295\u5165\u5728 Agent / SKILL \u76F8\u5173\u7684\u5F00\u53D1\u4E2D\uFF0C\u4F46\u5BF9\u5E95\u5C42\u7684\u5177\u4F53\u7EC6\u8282\u5E76\u4E0D\u5341\u5206\u6E05\u6670\uFF0C\u8D81\u7740\u8FD9\u6CE2 Gemma 4 \u5F00\u6E90\uFF0C\u672C\u5730\u90E8\u7F72\u4E00\u4E2A\u8BE6\u7EC6\u770B\u770B\u5E95\u4E0B\u5728\u505A\u4EC0\u4E48\uFF0C\u96C6\u4E2D\u6CE8\u610F\u529B\u7406\u6E05\u695A\u8FD9\u4EF6\u4E8B\uFF1A"),
                        React.createElement(Quote, null, "\u6A21\u578B\u4E0E Agent \u2014\u2014 Tool Use \u5177\u4F53\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F"),
                        React.createElement(P, null,
                            "\u672C\u6587\u76EE\u6807\u8BF4\u660E: \u672C\u6587\u9002\u5408\u5BF9\u6A21\u578B\u6709\u4E00\u5B9A\u4E86\u89E3\u7684\u4EBA\uFF0C\u5982\u679C\u4E0D\u751A\u4E86\u89E3\u53EF\u4EE5\u770B\u770B\u8FD9\u7BC7\u7406\u89E3\u4E00\u4E0B\u6A21\u578B\u7684\u63A8\u7406\u6307\u7684\u662F\u81EA\u56DE\u5F52 token \u751F\u6210\u7684\u8FC7\u7A0B\uFF1A ",
                            React.createElement(Link, { href: "/b/what-is-llm-inference", target: "_blank" }, "\u4EC0\u4E48\u662F\u5927\u6A21\u578B\u7684\u300C\u63A8\u7406\u300D\uFF1F"),
                            " \uFF0C\u7136\u540E\u6211\u4F1A\u5728\u8C37\u6B4C\u7684 ",
                            linke4b,
                            " \u7684\u57FA\u7840\u4E0A\uFF0C\u4ECE\u5177\u4F53 prompt \u51FA\u53D1\u89E3\u6790\u6A21\u578B\u548C Agent \u7684\u4EA4\u4E92\u7EC6\u8282\u3002")),
                    React.createElement(H1Block, { id: "build-env", title: "\u73AF\u5883\u642D\u5EFA" },
                        React.createElement(P, null,
                            "\u672C\u5730\u7528 ",
                            React.createElement(Link, { href: "https://ollama.com/" }, "ollama"),
                            " \u90E8\u7F72\u6A21\u578B\u670D\u52A1\u5C31\u884C\u4E86\uFF0C\u6B64\u5904\u4E0D\u6D89\u53CA\u5230\u5177\u4F53\u7684\u6A21\u578B\u63A8\u7406\u524D\u5411\u4F20\u64AD\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u53EA\u89C2\u6D4B\u8F93\u5165\u548C\u8F93\u51FA\uFF0C\u7528\u53F8\u5185\u53D1\u7684 MacBook 32G \u5E94\u8BE5\u90FD\u80FD\u8FD0\u884C\uFF0C\u4EE5\u4E0B\u662F\u6B65\u9AA4\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u70B9\u51FB\u5B89\u88C5 ollama\uFF0C\u6309\u7167\u5B98\u7F51\u63CF\u8FF0\u5B89\u88C5\u5373\u53EF\u3002"),
                            React.createElement(P, null,
                                "\u914D\u5408 ollama \u5B89\u88C5\u5E76\u542F\u52A8\u6A21\u578B\u670D\u52A1 ",
                                linke4b,
                                " \uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A")),
                        React.createElement(Code, { lang: "bash", source: String.raw `
        # 如果没装过会去下载然后启动服务
        $ ollama run gemma4:e4b

        # 如果上一步成功，这里应该能拿到版本号
        $ curl http://localhost:11434/api/version
        {"version":"0.20.7"}

        # 发一个请求试试，验证模型服务正常
        # 其中 stream:false 代表关闭流式返回, context 为上下文, 初始为空
        $ curl -X POST http://localhost:11434/api/generate \
            -H "Content-Type: application/json" \
            -d '{
              "model": "gemma4:e4b",
              "system": "你是一个猫娘",
              "prompt": "你是谁",
              "context": [],
              "stream": false
            }'
      ` }),
                        React.createElement(P, null, "\u4E0D\u51FA\u610F\u5916\uFF0C\u4F60\u5C06\u5F97\u5230\u4E00\u6BB5\u7ED3\u6784\u5316\u7684 JSON \u8FD4\u56DE\uFF0C\u91CC\u9762\u65E2\u5305\u542B\u6A21\u578B\u56DE\u590D\u6B63\u6587\uFF0C\u4E5F\u5305\u542B\u672C\u6B21\u63A8\u7406\u7684\u4E00\u4E9B\u8FD0\u884C\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u4F8B\u5982\u8017\u65F6\u3001\u4E0A\u4E0B\u6587\u548C token \u8BA1\u6570\uFF1A"),
                        React.createElement(Code, { lang: "json", source: String.raw `
      {
        "model": "gemma4:e4b",
        "created_at": "2026-04-16 20:20:20",
        "response": "Mew~ 🐱🐾\n\n呼噜呼噜…… 你问我，我是谁呢？\n\n唔…… 我呀，就是一个喜欢待在你身边，能陪你聊天、陪你玩耍的、超级可爱的小猫咪，一只"猫娘"啦！🐈💕\n\n我没有固定的名字，但我会叫你"最喜欢的"，因为你总是第一个出现在我的视线里呢。\n\n我就像是一团温暖的阳光，或者一个最柔软的午后小憩。我不会说话，只会用我的尾巴尖蹭蹭你，用我的呼噜声哄你入睡哦~\n\n🌟 **你觉得呢？** 你想让我扮演什么样的猫咪呢？让我知道，我就可以更努力地做你的小助手啦！💖",
        "done": true,
        "done_reason": "stop",
        // ⬇️ 本文重点：一段较长的 number[] 代表整段文字的 token 序列
        "context": [ 2, 105, 9731, 107, 98, 107, 237408, 33813, 239959, 240013, 106, 107, 105, 2364, 107, ......, 242364, 238463, 237536, 78747, 14103, 236900, 237169, 35134, 237611, 41876, 237307, 237893, 22276, 237369, 179916, 240354, 237354, 242513 ],
        "total_duration": 14333171584,
        "load_duration": 229611042,
        "prompt_eval_count": 22,
        "prompt_eval_duration": 51571459,
        "eval_count": 470,
        "eval_duration": 13881334841
      }  
      ` }),
                        React.createElement(Quote, null, "\u9605\u8BFB\u63D0\u793A\uFF1Aresponse \u662F\u6A21\u578B\u8FD4\u56DE\u7684\u6587\u672C\u6B63\u6587\uFF0Ccontext \u53EF\u7528\u4E8E\u7EED\u63A5\u591A\u8F6E\u4E0A\u4E0B\u6587\uFF0C\u5373\u6240\u8C13\u81EA\u56DE\u5F52\u751F\u6210\uFF0C\u800C\u82E5\u5E72 duration / count \u5B57\u6BB5\u5219\u53EF\u7528\u6765\u505A\u6027\u80FD\u65E5\u5FD7\u4E0A\u62A5\u3002"),
                        React.createElement(P, null, "\u5230\u8FD9\u4E00\u6B65\u4E3A\u6B62\u4F60\u5DF2\u7ECF\u642D\u597D\u4E86\u672C\u5730\u7684\u6A21\u578B\u670D\u52A1\u4E86\uFF0C\u63A5\u4E0B\u6765\u8FDB\u5165\u6B63\u6587\u3002\u672C\u6587\u5C06\u56F4\u7ED5\u4E0A\u9762\u8FD4\u56DE\u91CC\u7684 context \u8FD9\u4E2A Token \u5E8F\u5217\u5B57\u6BB5\uFF0C\u91CD\u70B9\u56F4\u7ED5\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "**context \u662F\u4EC0\u4E48\uFF1F**\u4EE5\u53CA\u66F4\u57FA\u7840\u7684\uFF0C\u4EC0\u4E48\u662F Token"),
                            React.createElement(P, null, "**\u5927\u6A21\u578B\u7684\"\u6587\u5B57\u63A5\u9F99\"\u6E38\u620F**\uFF0C\u5177\u4F53\u6765\u8BF4\u5C31\u662F\u6BCF\u6B21 resp \u7684context\u9644\u5E26\u5230\u4E0B\u4E00\u6B21\u7684 req \u4E2D\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D tool use \u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F"))),
                    React.createElement(H1Block, { id: "token-is-first", title: "Token \u662F\u4E00\u5207\u7684\u8D77\u70B9" },
                        React.createElement(P, null,
                            "\u6587\u5B57\u4FE1\u606F\u53D1\u7ED9\u6A21\u578B\u670D\u52A1\u540E\uFF0Collama \u4F1A\u901A\u8FC7 Tokenizer \u5C06\u6587\u672C\u5207\u5206\u4E3A\u4E00\u4E32 Token\uFF0C\u5177\u4F53\u6765\u8BF4\u662F\u4E00\u7EC4\u6570\u5B57\uFF0C\u76F4\u63A5\u4F20\u9012\u7ED9\u6A21\u578B\u3002\u8FD9\u91CC\u7684 Tokenizer \u662F\u6A21\u578B\u53D1\u5E03\u65B9\u968F\u6A21\u578B\u4E00\u8D77\u63D0\u4F9B\u7684\u2014\u2014\u6BCF\u4E2A\u5F00\u6E90\u6A21\u578B\u4ED3\u5E93\uFF08\u5982 HuggingFace \u4E0A\u7684 ",
                            linke4b,
                            "\uFF09\u90FD\u4F1A\u9644\u5E26\u4E00\u4EFD tokenizer.json\uFF0Collama \u5728\u4E0B\u8F7D\u6A21\u578B\u65F6\u4F1A\u81EA\u52A8\u628A\u5B83\u62C9\u4E0B\u6765\uFF0C\u63A8\u7406\u65F6\u7528\u8FD9\u4EFD\u914D\u7F6E\u505A\u6587\u672C \u2194 Token ID \u7684\u53CC\u5411\u8F6C\u6362\u3002\u8FD9\u4E9B\u6570\u5B57\u662F\u8BCD\u8868\u4E2D\u7684\u6574\u6570 ID\uFF0C\u6BCF\u4E2A ID \u5BF9\u5E94\u4E00\u4E2A\u5B50\u8BCD\u7247\u6BB5\uFF08subword\uFF09\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u8BCD\u3001\u8BCD\u7684\u4E00\u90E8\u5206\u3001\u751A\u81F3\u5355\u4E2A\u5B57\u7B26\uFF0C\u6BD4\u5982 \"unhappiness\" \u53EF\u80FD\u62C6\u6210 un happi ness \u4E09\u4E2A Token\u3002"),
                        React.createElement(P, null,
                            "\u4F8B\u5982\u8FD9\u91CC\u7684 ",
                            linke4b,
                            " \u7684\u914D\u7F6E\u5982\u4E0B\u4EE3\u7801\u5757\u6240\u793A\uFF0C\u6709\u6240\u7B80\u5316\uFF1A"),
                        React.createElement(Code, { lang: "json", source: String.raw `
      {
        "version": "1.0",
        "truncation": null,
        "padding": null,

        // ⬇️ 本文的重点
        "added_tokens": [
          {
            "id": 0,
            "content": "<pad>",
            "single_word": false,
            "lstrip": false,
            "rstrip": false,
            "normalized": false,
            "special": true
          },
          ... // 大概几十个
        ],

        "model": {
          // 这里就是词表，极其长 Gemma 4 词表有 262,143 项, 这些数字跟前面的 context 序列数组是对应的
          "vocab": {
            "<pad>": 0,
            "<eos>": 1,
            "<bos>": 2,
            "<unk>": 3,
            "<mask>": 4,
            "[multimodal]": 5,
            "<unused0>": 6,
            "<unused1>": 7,
            "<unused2>": 8,
            ...
            "<unused6225>": 262142,
            "<unused6226>": 262143
          },
          ... // 其他字段略
        }
      }
      ` }),
                        React.createElement(P, null, "\u6211\u4EEC\u4F1A\u4EE5\u8FD9\u4EFD json \u4E3A\u6848\u4F8B\uFF0C\u5728\u672C\u5730\u6A21\u578B\u670D\u52A1\u91CC\u51FA\u53D1\u62C6\u89E3\u5927\u6A21\u578B\u5E94\u7528\u7684\u5177\u4F53\u7EC6\u8282\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "Token \u5316\u7684\u57FA\u672C\u539F\u7406\u4E0E\u8BCD\u5D4C\u5165\u6982\u5FF5"),
                            React.createElement(P, null, "Gemma 4 \u4E2D\u5168\u90E8 24 \u4E2A Special Token \u7684\u542B\u4E49\u4E0E\u5206\u7C7B"),
                            React.createElement(P, null, "\u5178\u578B LLM \u5E94\u7528\u573A\u666F\u7684 Token \u7F16\u6392\u7EC6\u8282"),
                            React.createElement(P, null, "\u5B66\u672F/\u5DE5\u7A0B\u6311\u6218\u4E0E\u8BC4\u6D4B\u57FA\u51C6\u4ECB\u7ECD"))),
                    React.createElement(H1Block, { id: "token-and-word-embed", title: "Token \u4E0E\u8BCD\u5D4C\u5165(Word Embedding)" },
                        React.createElement(P, null, "\u6A21\u578B\u65E0\u6CD5\u76F4\u63A5\u5904\u7406\u4EBA\u7C7B\u7684\u81EA\u7136\u8BED\u8A00\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u795E\u7ECF\u7F51\u7EDC\u53EA\u8BA4\u6570\u5B57\uFF0C \u56E0\u6B64\u5728\u6587\u672C\u8FDB\u5165\u6A21\u578B\u4E4B\u524D\uFF0C\u5FC5\u987B\u7ECF\u8FC7\u4E00\u4E2A\u5173\u952E\u7684\u9884\u5904\u7406\u6B65\u9AA4\uFF1AToken \u5316\uFF08Tokenization\uFF09\u2014\u2014\u5C06\u8FDE\u7EED\u7684\u6587\u672C\u5B57\u7B26\u4E32\u5207\u5206\u4E3A\u79BB\u6563\u7684\u7B26\u53F7\u5355\u5143\uFF08Token\uFF09\uFF0C\u5E76\u6620\u5C04\u4E3A\u6574\u6570 ID \u5E8F\u5217\u3002"),
                        React.createElement(H2, null, "Token \u5316\u57FA\u672C\u539F\u7406"),
                        React.createElement(P, null, "Token \u5316\u7684\u6838\u5FC3\u95EE\u9898\u662F\uFF1A\u5982\u4F55\u5C06\u6587\u672C\u5207\u5206\u4E3A\u5408\u9002\u7C92\u5EA6\u7684\u5355\u5143\uFF1F\u5386\u53F2\u4E0A\u7ECF\u5386\u4E86\u4E09\u4E2A\u9636\u6BB5\u7684\u6F14\u8FDB\uFF1A"),
                        React.createElement("table", { className: "w-full border-collapse my-6 text-sm" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 w-28 text-center" }, "\u7C92\u5EA6"),
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 text-left" }, "\u65B9\u6CD5"),
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 text-left" }, "\u4F18\u70B9"),
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 text-left" }, "\u7F3A\u70B9"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-3" }, "\u5B57\u7B26\u7EA7"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u9010\u5B57\u7B26\u5207\u5206"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u8BCD\u8868\u6781\u5C0F\uFF0C\u65E0 OOV \u95EE\u9898"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u5E8F\u5217\u8FC7\u957F\uFF0C\u8BED\u4E49\u4FE1\u606F\u7A00\u758F")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-3" }, "\u8BCD\u7EA7"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u6309\u7A7A\u683C/\u8BCD\u5178\u5207\u5206"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u8BED\u4E49\u6E05\u6670"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u8BCD\u8868\u5DE8\u5927\uFF0C\u65E0\u6CD5\u5904\u7406\u65B0\u8BCD")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-3" }, "\u5B50\u8BCD\u7EA7 \u2713"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "BPE / SentencePiece"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u5E73\u8861\u8BCD\u8868\u5927\u5C0F\u4E0E\u5E8F\u5217\u957F\u5EA6"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-3 align-middle" }, "\u9700\u8981\u8BAD\u7EC3\u5206\u8BCD\u5668"))),
                            React.createElement("caption", { className: "caption-bottom text-center px-3 py-2 text-stone-700" }, "Token \u5316\u4E09\u79CD\u7C92\u5EA6\u5BF9\u6BD4\uFF1A\u73B0\u4EE3 LLM \u51E0\u4E4E\u5168\u90E8\u91C7\u7528\u5B50\u8BCD\u7EA7\u65B9\u6848")),
                        React.createElement(P, null, "\u73B0\u4EE3 LLM \u51E0\u4E4E\u5168\u90E8\u91C7\u7528\u5B50\u8BCD\u7EA7\uFF08Subword\uFF09\u5206\u8BCD\u65B9\u6848\u3002\u5176\u6838\u5FC3\u601D\u60F3\u662F\uFF1A\u9AD8\u9891\u8BCD\u4FDD\u7559\u4E3A\u5B8C\u6574 Token\uFF0C\u4F4E\u9891\u8BCD\u62C6\u5206\u4E3A\u66F4\u5C0F\u7684\u5B50\u8BCD\u7247\u6BB5\uFF0C\u6781\u7AEF\u60C5\u51B5\u4E0B\u53EF\u4EE5\u9000\u5316\u5230\u5B57\u8282\u7EA7\u522B\u3002"),
                        React.createElement("figure", { className: "mt-4" },
                            React.createElement("svg", { viewBox: "0 0 720 130", role: "img", className: "w-full h-auto border border-stone-200 rounded bg-white", fontFamily: "Georgia, serif" },
                                React.createElement("title", null, "Token \u5316\u6D41\u7A0B\uFF1A\u4ECE\u539F\u59CB\u6587\u672C\u5230 Token ID \u5E8F\u5217"),
                                React.createElement("defs", null,
                                    React.createElement("path", { id: "tok-chevron", d: "M0,0 H108 L122,40 L108,80 H0 L14,40 Z" }),
                                    React.createElement("path", { id: "tok-chevron-first", d: "M0,0 H108 L122,40 L108,80 H0 Z" }),
                                    React.createElement("marker", { id: "tok-arrow", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" },
                                        React.createElement("path", { d: "M0,0 L10,5 L0,10 Z", fill: "#d6d3d1" }))),
                                React.createElement("text", { x: "360", y: "20", textAnchor: "middle", fontSize: "13", fill: "#78716c", fontStyle: "italic" }, "Tokenizer \u5C06\u539F\u59CB\u6587\u672C\u8F6C\u6362\u4E3A Token ID \u5E8F\u5217\u7684\u5B8C\u6574\u6D41\u7A0B"),
                                React.createElement("g", { fill: "none", stroke: "#d6d3d1", strokeWidth: "1.1", strokeLinejoin: "round" },
                                    React.createElement("use", { href: "#tok-chevron-first", x: "16", y: "32" }),
                                    React.createElement("use", { href: "#tok-chevron", x: "156", y: "32" }),
                                    React.createElement("use", { href: "#tok-chevron", x: "296", y: "32" }),
                                    React.createElement("use", { href: "#tok-chevron", x: "436", y: "32" }),
                                    React.createElement("use", { href: "#tok-chevron", x: "576", y: "32" })),
                                React.createElement("g", null,
                                    React.createElement("text", { x: "34", y: "62", fontSize: "16", fontWeight: "700", fill: "#b45309", fontFamily: "Georgia, serif" }, "\""),
                                    React.createElement("text", { x: "44", y: "62", fontSize: "12", fontWeight: "600", fill: "#b45309", fontFamily: "monospace" }, "Aa"),
                                    React.createElement("text", { x: "64", y: "62", fontSize: "16", fontWeight: "700", fill: "#b45309", fontFamily: "Georgia, serif" }, "\""),
                                    React.createElement("text", { x: "34", y: "80", fontSize: "13", fontWeight: "600", fill: "#1c1917" }, "\u539F\u59CB\u6587\u672C"),
                                    React.createElement("text", { x: "34", y: "96", fontSize: "10", fill: "#57534e" }, "\"Hello World\"")),
                                React.createElement("g", null,
                                    React.createElement("g", { fill: "none", stroke: "#57534e", strokeWidth: "1.2" },
                                        React.createElement("line", { x1: "178", y1: "52", x2: "192", y2: "52" }),
                                        React.createElement("line", { x1: "192", y1: "48", x2: "192", y2: "56" }),
                                        React.createElement("line", { x1: "200", y1: "52", x2: "214", y2: "52" })),
                                    React.createElement("text", { x: "178", y: "80", fontSize: "13", fontWeight: "600", fill: "#1c1917" }, "\u9884\u5206\u8BCD"),
                                    React.createElement("text", { x: "178", y: "96", fontSize: "10", fill: "#57534e" }, "\u6309\u7A7A\u683C/\u6807\u70B9\u62C6\u5206")),
                                React.createElement("g", null,
                                    React.createElement("text", { x: "330", y: "58", fontSize: "16", fontWeight: "700", fill: "#1e3a8a", fontFamily: "Georgia, serif", fontStyle: "italic" }, "N"),
                                    React.createElement("text", { x: "318", y: "80", fontSize: "13", fontWeight: "600", fill: "#1c1917" }, "\u5F52\u4E00\u5316"),
                                    React.createElement("text", { x: "318", y: "96", fontSize: "10", fill: "#57534e" }, "\u5927\u5C0F\u5199/Unicode")),
                                React.createElement("g", null,
                                    React.createElement("g", { fill: "none", stroke: "#9d174d", strokeWidth: "1.2" },
                                        React.createElement("rect", { x: "460", y: "44", width: "16", height: "16", rx: "2" }),
                                        React.createElement("rect", { x: "478", y: "44", width: "16", height: "16", rx: "2" })),
                                    React.createElement("line", { x1: "468", y1: "54", x2: "486", y2: "54", stroke: "#9d174d", strokeWidth: "1.8", strokeDasharray: "2,2" }),
                                    React.createElement("text", { x: "458", y: "80", fontSize: "13", fontWeight: "600", fill: "#1c1917" }, "BPE"),
                                    React.createElement("text", { x: "458", y: "96", fontSize: "10", fill: "#57534e" }, "\u9AD8\u9891\u5BF9\u5408\u5E76\u5B50\u8BCD")),
                                React.createElement("g", null,
                                    React.createElement("g", { fontFamily: "monospace", fontSize: "10", fontWeight: "700", textAnchor: "middle" },
                                        React.createElement("rect", { x: "598", y: "44", width: "24", height: "16", rx: "2", fill: "#b45309", stroke: "#b45309" }),
                                        React.createElement("text", { x: "610", y: "56", fill: "#fff" }, "42"),
                                        React.createElement("rect", { x: "624", y: "44", width: "24", height: "16", rx: "2", fill: "none", stroke: "#57534e" }),
                                        React.createElement("text", { x: "636", y: "56", fill: "#57534e" }, "17"),
                                        React.createElement("rect", { x: "650", y: "44", width: "24", height: "16", rx: "2", fill: "none", stroke: "#57534e" }),
                                        React.createElement("text", { x: "662", y: "56", fill: "#57534e" }, "89")),
                                    React.createElement("text", { x: "598", y: "80", fontSize: "13", fontWeight: "600", fill: "#1c1917" }, "Token \u5E8F\u5217"),
                                    React.createElement("text", { x: "598", y: "96", fontSize: "10", fill: "#57534e" }, "\u6574\u6570 ID \u6570\u7EC4")),
                                React.createElement("text", { x: "360", y: "124", textAnchor: "middle", fontSize: "10", fill: "#78716c" }, "\u6BCF\u4E00\u6B65\u90FD\u662F\u786E\u5B9A\u6027\u7684\uFF0C\u7531 tokenizer.json \u914D\u7F6E\u5B8C\u5168\u51B3\u5B9A")),
                            React.createElement("figcaption", { className: "mt-2 text-sm text-stone-500 text-center italic" }, "Token \u5316\u6D41\u7A0B\uFF1A\u539F\u59CB\u6587\u672C \u2192 \u9884\u5206\u8BCD \u2192 \u5F52\u4E00\u5316 \u2192 BPE \u5B50\u8BCD\u5408\u5E76 \u2192 Token ID \u5E8F\u5217")),
                        React.createElement(H2, null, "BPE \u4E0E SentencePiece"),
                        React.createElement(P, null, "**Byte Pair Encoding\uFF08BPE\uFF09**\u662F\u5F53\u524D\u6700\u4E3B\u6D41\u7684\u5B50\u8BCD\u5206\u8BCD\u7B97\u6CD5\u3002\u5176\u6838\u5FC3\u601D\u60F3\u975E\u5E38\u76F4\u89C2\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u4ECE\u5B57\u7B26\u7EA7\u8BCD\u8868\u5F00\u59CB (\u957F\u5EA6\u4E3A 1 \u7684\u5B57\u7B26)"),
                            React.createElement(P, null, "\u7EDF\u8BA1\u8BAD\u7EC3\u8BED\u6599\u4E2D\u6240\u6709\u76F8\u90BB\u7B26\u53F7\u5BF9\u7684\u51FA\u73B0\u9891\u7387"),
                            React.createElement(P, null, "\u5C06\u9891\u7387\u6700\u9AD8\u7684\u7B26\u53F7\u5BF9\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7B26\u53F7\uFF0C\u52A0\u5165\u8BCD\u8868"),
                            React.createElement(P, null, "\u91CD\u590D\u6B65\u9AA4 2-3\uFF0C\u76F4\u5230\u8BCD\u8868\u8FBE\u5230\u9884\u8BBE\u5927\u5C0F")),
                        React.createElement(P, null, "\u6240\u4EE5\u6700\u540E\u7684\u7ED3\u679C\u53EF\u80FD\u5C31\u662F unhappiness \u62C6\u5206\u4E3A un happi ness \u4E09\u4E2A token \u4E86\uFF0C\u56E0\u4E3A un happi ness \u8FD9\u4E9B\u8BCD\u6839\u8BCD\u7F00\u7ECF\u5E38\u5728\u522B\u7684\u8BCD\u91CC\u51FA\u73B0\uFF0C\u975E\u5E38\u9002\u5408\u82F1\u8BED\u3002 \u7136\u540E SentencePiece \u5219\u662F Google \u5F00\u53D1\u7684\u5206\u8BCD\u6846\u67B6\uFF0C\u5B83\u5728\u524D\u9762 BPE \u7684\u57FA\u7840\u4E0A\u505A\u4E86\u4E00\u4E2A\u5173\u952E\u6539\u8FDB\uFF1A**\u5C06\u7A7A\u683C\u89C6\u4E3A\u666E\u901A\u5B57\u7B26\u5904\u7406**\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5B83\u4F1A\u5C06\u7A7A\u683C\u66FF\u6362\u4E3A\u7279\u6B8A\u7B26\u53F7 `\u2581 (U+2581)`\uFF0C\u4F7F\u5F97\u5206\u8BCD\u8FC7\u7A0B\u5B8C\u5168\u5728\u5B57\u7B26\u5E8F\u5217\u4E0A\u8FDB\u884C\uFF0C\u4E0D\u4F9D\u8D56\u9884\u5206\u8BCD\u89C4\u5219\u3002"),
                        React.createElement(P, null, "\u9884\u5206\u8BCD\u89C4\u5219\u662F\u5565\u5462\uFF1F\u2014\u2014 \u4F20\u7EDF BPE \u5728\u5408\u5E76\u5B57\u8282\u5BF9\u4E4B\u524D\uFF0C\u901A\u5E38\u4F1A\u5148\u6309\u7A7A\u683C\u548C\u6807\u70B9\u628A\u6587\u672C\u7C97\u5207\u6210\"\u8BCD\"\uFF0C\u5373\u5BF9\u6574\u7BC7\u6587\u5B57\u505A\u4E00\u6B21 text.split(' ') \u7136\u540E\u518D\u5BF9\u5176\u4E2D\u6BCF\u4E2A\u8BCD\u5185\u90E8\u505A\u5B50\u8BCD\u62C6\u5206\u3002\u8FD9\u79CD\u505A\u6CD5\u5F88\u660E\u663E\u5C31\u4F1A\u6709\u51E0\u4E2A\u95EE\u9898\uFF1A"),
                        React.createElement(Numbering, { template: 'rect' },
                            React.createElement(P, null, "**\u8DE8\u8BCD\u5408\u5E76\u88AB\u963B\u65AD**\uFF1A\u56E0\u4E3A\u9884\u5206\u8BCD\u5DF2\u7ECF\u5728\u7A7A\u683C\u5904\u5207\u5F00\u4E86\uFF0CBPE \u6C38\u8FDC\u4E0D\u53EF\u80FD\u628A\u4E00\u4E2A\u8BCD\u672B\u5C3E\u548C\u4E0B\u4E00\u4E2A\u8BCD\u5F00\u5934\u7684\u5B57\u8282\u5408\u5E76\u6210\u540C\u4E00\u4E2A Token\uFF0C\u8FD9\u5BF9\u4E2D\u6587\u3001\u65E5\u6587\u7B49\u4E0D\u4EE5\u7A7A\u683C\u5206\u9694\u7684\u8BED\u8A00\u6781\u4E0D\u53CB\u597D\uFF0C\u6BD4\u5982 `\u4F60 \u597D` \u6709\u65F6\u5019\u591A\u6253\u4E86\u7A7A\u683C\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E2A\u5C31\u53D8\u6210\u4E24\u4E2A Token \u4E86"),
                            React.createElement(P, null, "**\u7A7A\u683C\u4FE1\u606F\u4E22\u5931**\uFF1A\u9884\u5206\u8BCD\u901A\u5E38\u76F4\u63A5\u4E22\u5F03\u7A7A\u683C\uFF0C\u4F46\u5728\u4EE3\u7801\u3001\u6392\u7248\u683C\u5F0F\u5316\u6587\u672C\u4E2D\uFF0C\u7A7A\u683C\u672C\u8EAB\u5C31\u662F\u6709\u610F\u4E49\u7684, \u6BD4\u5982\u7F16\u7A0B\u8BED\u8A00\u91CC\u7A7A\u683C\u7F29\u8FDB\uFF0C\u8FDE\u7EED\u7684\u7A7A\u683C\u4E0D\u5E94\u8BE5\u88AB\u5F53\u6210\u4E00\u4E2A\u7A7A\u683C\u3002"),
                            React.createElement(P, null, "**\u4F9D\u8D56\u8BED\u8A00\u7279\u5B9A\u89C4\u5219**\uFF1A\u4E0D\u540C\u8BED\u8A00\u7684\"\u8BCD\"\u8FB9\u754C\u89C4\u5219\u4E0D\u540C\uFF0C\u8FD9\u79CD\u7C97\u66B4\u7684\u9884\u5206\u8BCD\u5668\u5F88\u96BE\u505A\u5230\u771F\u6B63\u7684\u8BED\u8A00\u65E0\u5173\uFF0C\u524D\u9762\u4E5F\u63D0\u8FC7\u4E86\u6C49\u5B57\u7684\u7279\u6027\u3001\u53E6\u5916\u8FD8\u6709\u5404\u79CD\u963F\u62C9\u4F2F\u3001\u85CF\u8BED\u3001\u5929\u57CE\u6587\u7B49\u7B49\u5404\u7C7B\u795E\u5947\u7684\u8BED\u8A00\u3002\u3002\u3002\u3002")),
                        React.createElement(P, null, "SentencePiece \u89E3\u51B3\u65B9\u6848\u975E\u5E38\u76F4\u63A5\uFF1A\u628A\u7A7A\u683C\u66FF\u6362\u4E3A\u4E00\u4E2A\u7279\u6B8A\u9AD8\u4F4D Unicode \u5B57\u7B26 `\u2581 (U+2581)`\uFF0C\u7136\u540E\u8BA9 BPE \u76F4\u63A5\u5728\u6574\u4E2A\u5B57\u7B26\u5E8F\u5217\u4E0A\u8FDB\u884C\u5408\u5E76\u64CD\u4F5C\uFF0C\u4E0D\u505A\u4EFB\u4F55\u9884\u5207\u5206\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u7A7A\u683C\u53D8\u6210\u4E86\u548C\u5176\u4ED6\u5B57\u7B26\u4E00\u6837\u7684\u666E\u901A\u8F93\u5165\uFF0CBPE \u53EF\u4EE5\u81EA\u7531\u5730\u8DE8\u8D8A\u539F\u6765\u7684\"\u8BCD\u8FB9\u754C\"\u505A\u5408\u5E76\uFF0C\u4E5F\u4FDD\u7559\u4E86\u7A7A\u683C\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u6574\u4E2A\u6D41\u7A0B\u5B8C\u5168\u8BED\u8A00\u65E0\u5173\uFF08language-agnostic\uFF09\uFF0C\u4E2D\u82F1\u65E5\u97E9\u4EE3\u7801\u7EDF\u4E00\u5904\u7406\u3002"),
                        React.createElement(P, null, "Gemma 4 \u7684 tokenizer \u7528\u7684\u5C31\u662F SentencePiece\uFF0C\u5B9E\u9645\u8FC7\u7A0B\u4E2D\u6A21\u578B\u4E0D\u4F1A\u8F93\u51FA\u7A7A\u683C\u4E86\uFF0C\u800C\u662F\u7528 `U+2581` \u6765\u8868\u8FBE\u7A7A\u683C\u4E86, \u4ECE\u5176 `tokenizer.json` \u914D\u7F6E\u4E2D\u53EF\u4EE5\u6E05\u6670\u770B\u5230\u8FD9\u4E2A\u89C4\u5219\uFF1A"),
                        React.createElement(Code, { lang: "json", source: String.raw `
      {
        ...
        "normalizer": {
          "type": "Replace",
          "pattern": {
            "String": " "          // 普通空格
          },
          "content": "▁"          // 替换为 U+2581
        },
        ...
      }  
      ` }),
                        React.createElement(P, null, "\u540C\u65F6\uFF0CSentencePiece \u8FD8\u652F\u6301 Byte Fallback \u673A\u5236\uFF1A\u5373\u5F53\u9047\u5230\u8BCD\u8868\u4E2D\u4E0D\u5B58\u5728\u7684\u5B57\u7B26\u65F6\uFF0C\u4E0D\u4F1A\u76F4\u63A5\u6620\u5C04\u4E3A\u8BCD\u8868\u91CC\u7684 `<unk>`\uFF0C\u800C\u662F\u5C06\u5176\u62C6\u89E3\u4E3A UTF-8 \u5B57\u8282\u5E8F\u5217\uFF0C\u7528\u5B57\u8282\u7EA7 Token \u8868\u793A\uFF0C\u8FD9\u4F7F\u5F97 tokenizer \u7406\u8BBA\u4E0A\u53EF\u4EE5\u7F16\u7801\u4EFB\u610F\u6587\u672C\uFF0C\u6781\u5927\u964D\u4F4E\u4E86 OOV\uFF08Out-of-Vocabulary\uFF09\u95EE\u9898\u3002"),
                        React.createElement(H2, null, "\u8BCD\u5D4C\u5165\u4E0E\u5411\u91CF\u7A7A\u95F4"),
                        React.createElement(P, null, "Token ID \u5E8F\u5217\u53EA\u662F\u6574\u6570\uFF0C\u6A21\u578B\u662F\u795E\u7ECF\u7F51\u7EDC\u5904\u7406\u7684\u662F\u5411\u91CF\u8F93\u5165\uFF0C\u65E0\u6CD5\u76F4\u63A5\u4ECE\u6574\u6570\u91CC\u63D0\u53D6\u8BED\u4E49\u4FE1\u606F\u3002\u56E0\u6B64\u9700\u8981\u901A\u8FC7\u8BCD\u5D4C\u5165\uFF08Word Embedding\uFF09\u5C06\u6BCF\u4E2A Token ID \u6620\u5C04\u4E3A\u4E00\u4E2A\u7A20\u5BC6\u7684\u5B9E\u6570\u5411\u91CF\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u901A\u5E38\u7531\u6A21\u578B\u7684\u7B2C\u4E00\u5C42\u6743\u91CD\u77E9\u9635\u5B8C\u6210\u3002"),
                        React.createElement("figure", { className: "my-6" },
                            React.createElement("svg", { viewBox: "0 0 720 340", role: "img", className: "w-full h-auto border border-stone-200 rounded bg-white", fontFamily: "Georgia, serif" },
                                React.createElement("title", null, "\u8BCD\u5D4C\u5165\u5411\u91CF\u7A7A\u95F4\uFF1A\u8BED\u4E49\u76F8\u8FD1\u7684\u8BCD\u8DDD\u79BB\u66F4\u8FD1"),
                                React.createElement("text", { x: "360", y: "24", textAnchor: "middle", fontSize: "16", fill: "#1c1917", fontWeight: "600" }, "\u8BCD\u5D4C\u5165\u5411\u91CF\u7A7A\u95F4\u793A\u610F\uFF082D \u6295\u5F71\uFF09"),
                                React.createElement("text", { x: "360", y: "42", textAnchor: "middle", fontSize: "11", fill: "#78716c", fontStyle: "italic" }, "Token ID \u2192 \u5D4C\u5165\u77E9\u9635\u67E5\u8868 \u2192 \u9AD8\u7EF4\u5411\u91CF\uFF0C\u8BED\u4E49\u76F8\u8FD1\u7684\u8BCD\u81EA\u7136\u805A\u7C7B"),
                                React.createElement("line", { x1: "60", y1: "300", x2: "690", y2: "300", stroke: "#d6d3d1", strokeWidth: "1.2" }),
                                React.createElement("line", { x1: "60", y1: "300", x2: "60", y2: "60", stroke: "#d6d3d1", strokeWidth: "1.2" }),
                                React.createElement("text", { x: "375", y: "328", textAnchor: "middle", fontSize: "11", fill: "#78716c", fontStyle: "italic" }, "\u7EF4\u5EA6 1"),
                                React.createElement("text", { x: "38", y: "180", textAnchor: "middle", fontSize: "11", fill: "#78716c", fontStyle: "italic", transform: "rotate(-90, 38, 180)" }, "\u7EF4\u5EA6 2"),
                                React.createElement("g", null,
                                    React.createElement("ellipse", { cx: "200", cy: "140", rx: "100", ry: "70", fill: "#dbeafe", fillOpacity: "0.4", stroke: "#93c5fd", strokeWidth: "1", strokeDasharray: "4,3" }),
                                    React.createElement("text", { x: "200", y: "80", textAnchor: "middle", fontSize: "11", fill: "#1e3a8a", fontWeight: "600" }, "\u52A8\u7269\u8BED\u4E49\u533A"),
                                    React.createElement("circle", { cx: "170", cy: "130", r: "5", fill: "#1e3a8a" }),
                                    React.createElement("text", { x: "170", y: "122", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u732B"),
                                    React.createElement("circle", { cx: "210", cy: "145", r: "5", fill: "#1e3a8a" }),
                                    React.createElement("text", { x: "210", y: "137", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u72D7"),
                                    React.createElement("circle", { cx: "240", cy: "120", r: "5", fill: "#1e3a8a" }),
                                    React.createElement("text", { x: "240", y: "112", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u5154"),
                                    React.createElement("circle", { cx: "185", cy: "165", r: "4", fill: "#3b82f6" }),
                                    React.createElement("text", { x: "185", y: "182", textAnchor: "middle", fontSize: "11", fill: "#57534e" }, "\u9C7C")),
                                React.createElement("g", null,
                                    React.createElement("ellipse", { cx: "520", cy: "220", rx: "110", ry: "60", fill: "#fef3c7", fillOpacity: "0.4", stroke: "#fbbf24", strokeWidth: "1", strokeDasharray: "4,3" }),
                                    React.createElement("text", { x: "520", y: "170", textAnchor: "middle", fontSize: "11", fill: "#b45309", fontWeight: "600" }, "\u4EA4\u901A\u5DE5\u5177\u8BED\u4E49\u533A"),
                                    React.createElement("circle", { cx: "490", cy: "215", r: "5", fill: "#b45309" }),
                                    React.createElement("text", { x: "490", y: "207", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u6C7D\u8F66"),
                                    React.createElement("circle", { cx: "540", cy: "230", r: "5", fill: "#b45309" }),
                                    React.createElement("text", { x: "540", y: "248", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u706B\u8F66"),
                                    React.createElement("circle", { cx: "560", cy: "200", r: "5", fill: "#b45309" }),
                                    React.createElement("text", { x: "560", y: "192", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u98DE\u673A"),
                                    React.createElement("circle", { cx: "480", cy: "245", r: "4", fill: "#d97706" }),
                                    React.createElement("text", { x: "480", y: "263", textAnchor: "middle", fontSize: "11", fill: "#57534e" }, "\u81EA\u884C\u8F66")),
                                React.createElement("g", null,
                                    React.createElement("ellipse", { cx: "380", cy: "270", rx: "80", ry: "40", fill: "#fce7f3", fillOpacity: "0.4", stroke: "#f9a8d4", strokeWidth: "1", strokeDasharray: "4,3" }),
                                    React.createElement("text", { x: "380", y: "240", textAnchor: "middle", fontSize: "11", fill: "#9d174d", fontWeight: "600" }, "\u60C5\u611F\u8BED\u4E49\u533A"),
                                    React.createElement("circle", { cx: "355", cy: "268", r: "4", fill: "#9d174d" }),
                                    React.createElement("text", { x: "355", y: "286", textAnchor: "middle", fontSize: "11", fill: "#1c1917" }, "\u5F00\u5FC3"),
                                    React.createElement("circle", { cx: "390", cy: "275", r: "4", fill: "#9d174d" }),
                                    React.createElement("text", { x: "390", y: "293", textAnchor: "middle", fontSize: "11", fill: "#1c1917" }, "\u5FEB\u4E50"),
                                    React.createElement("circle", { cx: "420", cy: "258", r: "4", fill: "#ec4899" }),
                                    React.createElement("text", { x: "435", y: "255", textAnchor: "start", fontSize: "11", fill: "#57534e" }, "\u60B2\u4F24")),
                                React.createElement("line", { x1: "175", y1: "130", x2: "205", y2: "145", stroke: "#1e3a8a", strokeWidth: "1", strokeDasharray: "3,2" }),
                                React.createElement("text", { x: "195", y: "155", textAnchor: "middle", fontSize: "9", fill: "#1e3a8a" }, "\u8FD1"),
                                React.createElement("line", { x1: "175", y1: "133", x2: "485", y2: "213", stroke: "#78716c", strokeWidth: "0.8", strokeDasharray: "6,4" }),
                                React.createElement("text", { x: "340", y: "168", textAnchor: "middle", fontSize: "9", fill: "#78716c", fontStyle: "italic" }, "\u8FDC\uFF08\u8BED\u4E49\u5DEE\u5F02\u5927\uFF09")),
                            React.createElement("figcaption", { className: "mt-2 text-sm text-stone-500 text-center italic" }, "\u8BCD\u5D4C\u5165\u7A7A\u95F4\uFF1A\u7ECF\u8FC7\u8BAD\u7EC3\u540E\uFF0C\u8BED\u4E49\u76F8\u8FD1\u7684\u8BCD\u5411\u91CF\u81EA\u7136\u805A\u7C7B\uFF0C\u8DDD\u79BB\u53CD\u6620\u8BED\u4E49\u76F8\u4F3C\u5EA6")),
                        React.createElement(P, null, "\u8BCD\u5D4C\u5165\u7684\u6838\u5FC3\u76F4\u89C9\u662F\uFF1A\u8BED\u4E49\u76F8\u8FD1\u7684\u8BCD\uFF0C\u5728\u5411\u91CF\u7A7A\u95F4\u4E2D\u7684\u8DDD\u79BB\u4E5F\u76F8\u8FD1\u3002\u7ECF\u8FC7\u8BAD\u7EC3\u540E\uFF0C\u5D4C\u5165\u7A7A\u95F4\u4F1A\u81EA\u7136\u5F62\u6210\u8BED\u4E49\u805A\u7C7B\u2014\u2014\u4F8B\u5982\"\u732B\"\u548C\"\u72D7\"\u7684\u5411\u91CF\u4F1A\u6BD4\"\u732B\"\u548C\"\u6C7D\u8F66\"\u66F4\u63A5\u8FD1\uFF0C\u7528\u6570\u5B66\u4E00\u70B9\u7684\u8BDD\u6765\u8BF4\u5C31\u662F\u4F59\u5F26\u76F8\u4F3C\u5EA6\u66F4\u63A5\u8FD1 1"),
                        React.createElement(P, null, "\u6700\u540E\uFF0C\u4ECE Gemma-e4b \u7684\u914D\u7F6E\u4E2D\u53EF\u4EE5\u770B\u5230\uFF1A\u8BCD\u8868\u5BB9\u91CF\u4E3A 262144\uFF0C\u8BCD\u5D4C\u5165\u7EF4\u5EA6\u4E3A 3072\u3002")),
                    React.createElement(H1Block, { id: "special-token", title: "Special Token \u8BE6\u89E3 (\u4EE5 Gemma4 \u4E3A\u4F8B)" },
                        React.createElement(P, null, "\u6211\u4EEC\u524D\u9762\u4ECB\u7ECD\u4E86\u666E\u901A\u6587\u672C\u7684 Token\uFF0C\u4F46\u5982\u679C\u8981\u5B9E\u73B0\u6A21\u578B\u7684\u5E94\u7528\u529F\u80FD\uFF0C\u90A3\u5FC5\u987B\u8981\u8BA9\u6A21\u578B\u80FD\u66F4\u6DF1\u523B\u7684\u611F\u77E5\u5230\u7ED9\u5B9A\u6587\u5B57\u5E8F\u5217\u91CC\u7684\u7ED3\u6784\u5316\u4FE1\u606F\uFF0C\u8FD9\u7C7B\u7ED3\u6784\u5316\u4FE1\u606F\u901A\u5E38\u901A\u8FC7 Special Token \u6765\u6807\u8BB0\uFF0C\u5176\u6587\u6CD5\u50CF\u4E00\u7C7B\u6807\u8BB0\u8BED\u8A00\u3002 \u8FD9\u4E9B\u7279\u6B8A Token \u662F\u4EBA\u5DE5\u9884\u7559\u7684\u7ED3\u6784\u5316\u63A7\u5236\u7B26\u53F7 \u2014\u2014 \u7528\u4E8E\u6807\u8BB0\u5E8F\u5217\u8FB9\u754C\u3001\u5BF9\u8BDD\u8F6E\u6B21\u3001\u5DE5\u5177\u8C03\u7528\u534F\u8BAE\u3001\u591A\u6A21\u6001\u5185\u5BB9\u5360\u4F4D\u7B49\u3002"),
                        React.createElement(P, null, "Gemma 4 \u7684 tokenizer.json \u4E2D\u5B9A\u4E49\u4E86 24 \u4E2A added_tokens\uFF0C\u5168\u90E8\u6807\u8BB0\u4E3A special: true\u3002\u8FD9\u610F\u5473\u7740 tokenizer \u4F1A\u5C06\u5B83\u4EEC\u89C6\u4E3A\u4E0D\u53EF\u518D\u62C6\u5206\u7684\u539F\u5B50\u7B26\u53F7\uFF0C\u5B83\u4EEC\u7684\u7F16\u53F7\u4FE1\u606F\u4E5F\u662F\u6700\u7279\u6B8A\u7684\uFF0C\u5176\u5BF9\u5E94\u7684 Token \u7F16\u7801\u4E5F\u90FD\u9009\u7528\u7279\u6B8A\u533A\u95F4\u8DDF\u6B63\u6587\u505A\u4E25\u683C\u533A\u5206\uFF1A"),
                        React.createElement("table", { className: "w-full border-collapse my-6 text-sm" },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 w-12 text-center" }, "#"),
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 w-64 text-left" }, "Token"),
                                    React.createElement("th", { className: "border border-gray-300 bg-gray-100 font-semibold px-4 py-3 text-left" }, "\u8BF4\u660E"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { colSpan: 3, className: "border border-gray-300 bg-indigo-50 px-4 py-2 font-semibold text-indigo-800 text-sm" }, "\u7B2C\u4E00\u7C7B\uFF1A\u57FA\u7840\u63A7\u5236")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "1"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<pad>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u586B\u5145\u7B26\uFF0C\u7528\u4E8E\u5C06\u4E0D\u7B49\u957F\u5E8F\u5217\u8865\u9F50\u5230\u7EDF\u4E00\u957F\u5EA6\uFF08batch \u8BAD\u7EC3\u65F6\uFF09")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "2"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<eos>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u5E8F\u5217\u7ED3\u675F\u7B26\uFF08End of Sequence\uFF09\uFF0C\u6A21\u578B\u751F\u6210\u5230\u6B64\u505C\u6B62")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "3"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<bos>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u5E8F\u5217\u5F00\u59CB\u7B26\uFF08Beginning of Sequence\uFF09\uFF0C\u6807\u8BB0\u8F93\u5165\u7684\u8D77\u59CB\u4F4D\u7F6E")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "4"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<unk>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u672A\u77E5\u7B26\uFF08Unknown\uFF09\uFF0C\u7406\u8BBA\u515C\u5E95\uFF0CSentencePiece Byte Fallback \u4F7F\u5F97\u51E0\u4E4E\u4E0D\u4F1A\u89E6\u53D1")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "5"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<mask>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u63A9\u7801\u7B26\uFF0C\u7528\u4E8E MLM\uFF08Masked Language Modeling\uFF09\u8BAD\u7EC3\u4EFB\u52A1")),
                                React.createElement("tr", null,
                                    React.createElement("td", { colSpan: 3, className: "border border-gray-300 bg-amber-50 px-4 py-2 font-semibold text-amber-800 text-sm" }, "\u7B2C\u4E8C\u7C7B\uFF1A\u5BF9\u8BDD\u8F6E\u6B21\u4E0E\u901A\u9053 Token")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "6"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|turn> / <turn|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u5BF9\u8BDD\u8F6E\u6B21\u8FB9\u754C\uFF1A\u6807\u8BB0 system / user / model \u6BCF\u4E00\u8F6E\u7684\u5F00\u59CB\u548C\u7ED3\u675F")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "7"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|channel> / <channel|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u901A\u9053\u6807\u8BB0\uFF1A\u5728\u8F6E\u6B21\u5185\u533A\u5206\u89D2\u8272\u901A\u9053\uFF08\u5982 system\u3001user\u3001model\uFF09")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "8"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|think|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u601D\u8003\u6807\u8BB0\uFF1A\u6807\u8BB0\u6A21\u578B\u7684\u5185\u90E8\u63A8\u7406 / Chain-of-Thought \u533A\u57DF")),
                                React.createElement("tr", null,
                                    React.createElement("td", { colSpan: 3, className: "border border-gray-300 bg-emerald-50 px-4 py-2 font-semibold text-emerald-800 text-sm" }, "\u7B2C\u4E09\u7C7B\uFF1A\u5DE5\u5177\u8C03\u7528 Token\uFF08\u672C\u6587\u91CD\u70B9\uFF09")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "9"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|tool> / <tool|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u5DE5\u5177\u5B9A\u4E49\u8FB9\u754C\uFF1A\u5305\u88F9 system prompt \u4E2D\u7684\u5DE5\u5177 schema \u58F0\u660E")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "10"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|tool_call> / <tool_call|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u5DE5\u5177\u8C03\u7528\u8FB9\u754C\uFF1A\u5305\u88F9\u6A21\u578B\u8F93\u51FA\u7684\u51FD\u6570\u8C03\u7528\uFF08function name + arguments JSON\uFF09")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "11"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|tool_response> / <tool_response|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u5DE5\u5177\u8FD4\u56DE\u8FB9\u754C\uFF1A\u5305\u88F9\u5916\u90E8\u7CFB\u7EDF\u6267\u884C\u5DE5\u5177\u540E\u8FD4\u56DE\u7684\u7ED3\u679C")),
                                React.createElement("tr", null,
                                    React.createElement("td", { colSpan: 3, className: "border border-gray-300 bg-pink-50 px-4 py-2 font-semibold text-pink-800 text-sm" }, "\u7B2C\u56DB\u7C7B\uFF1A\u591A\u6A21\u6001 Token")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "12"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|image> / <image|> / <|image|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u56FE\u50CF\u5360\u4F4D\u7B26\uFF1A\u6807\u8BB0\u56FE\u50CF embedding \u7684\u63D2\u5165\u4F4D\u7F6E")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "13"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|video> / <video|> / <|video|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u89C6\u9891\u5360\u4F4D\u7B26\uFF1A\u6807\u8BB0\u89C6\u9891\u5E27\u5E8F\u5217 embedding \u7684\u63D2\u5165\u4F4D\u7F6E")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border border-gray-300 bg-gray-50 font-semibold text-center align-middle px-4 py-2" }, "14"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle font-mono text-xs" }, "<|audio> / <audio|> / <|audio|>"),
                                    React.createElement("td", { className: "border border-gray-300 px-4 py-2 align-middle" }, "\u97F3\u9891\u5360\u4F4D\u7B26\uFF1A\u6807\u8BB0\u97F3\u9891 embedding \u7684\u63D2\u5165\u4F4D\u7F6E"))),
                            React.createElement("caption", { className: "caption-bottom text-center px-3 py-2 text-stone-700" }, "Gemma 4 \u7684 24 \u4E2A Special Token\uFF08\u542B\u5F00\u95ED\u6807\u7B7E\u5BF9\uFF09\uFF0C\u6309\u529F\u80FD\u5206\u4E3A 4 \u5927\u7C7B")),
                        React.createElement(P, null, "\u4F46\u662F\u8FD9\u4E9B Special Token \u600E\u6837\u53D1\u6325\u4F5C\u7528\u5462 ?"),
                        React.createElement(P, null, "\u8FD9\u4E9B Special Token \u5C31\u8DDF\u7F16\u7A0B\u8BED\u8A00\u91CC\u7684 token \u5173\u952E\u5B57\u4E00\u6837\uFF0C\u63A5\u6536\u65B9\u53EF\u4EE5\u914D\u5408\u8FD9\u4E9B\u89C4\u5219\u5199 parser \u8FDB\u884C\u89E3\u6790\uFF0C\u8BA9\u6A21\u578B\u771F\u6B63\u7406\u89E3\u5230\u4E0A\u4E0B\u6587\u5185\u7684\u7ED3\u6784\u5316\u4FE1\u606F\u3002"),
                        React.createElement(P, null, "\u8FD9\u91CC\u4E3E\u4E00\u4E9B\u4F8B\u5B50\u6784\u9020\u5C55\u5F00\u5176\u4E2D\u7684\u8C03\u7528\u7EC6\u8282\uFF0C\u5E2E\u52A9\u8BFB\u8005\u66F4\u76F4\u89C2\u5730\u7406\u89E3 LLM \u7684\u5DE5\u4F5C\u539F\u7406\u548C\u6A21\u578B\u5982\u4F55\u9760 Special Token \u5B9E\u73B0 agentic \u7684\u673A\u5236\u7EC6\u8282\uFF0C\u603B\u7684\u6765\u8BF4\uFF0C\u5E38\u89C1\u7684\u5927\u6A21\u578B\u5E94\u7528\u90FD\u662F\u914D\u5408\u8FD9\u4E9B Special Token \u8FDB\u884C\u7ED3\u6784\u5316\u8F93\u51FA\u7684\uFF0C\u7531\u8C03\u7528\u65B9\u8D1F\u8D23\u89E3\u6790\u6A21\u578B\u53D1\u8D77\u7684 tool use \u8BF7\u6C42\uFF0C\u5E76\u5C06\u7ED3\u679C\u914D\u5408 special token \u6CE8\u5165\u5230\u4E0A\u4E0B\u6587\u5185\u5B9E\u73B0 agentic\u3002")),
                    React.createElement(H1Block, { id: "llm-chat", title: "\u6700\u57FA\u7840\u7684 Chat \u591A\u8F6E\u5BF9\u8BDD" },
                        React.createElement(P, null, "Gemma \u591A\u8F6E\u5BF9\u8BDD\u7684 Token \u5E8F\u5217\u662F\u7C7B\u4F3C\u4E0B\u9762\u8FD9\u6837\u7684\uFF0C\u5C06\u591A\u4E2A\u89D2\u8272\u7684\u6D88\u606F\uFF0C\u914D\u5408 Special Token \u6807\u8BB0\u6BCF\u8F6E\u6D88\u606F\u7684\u8FB9\u754C\u548C\u89D2\u8272\u5F52\u5C5E\uFF1A"),
                        React.createElement(Code, { lang: "html", source: String.raw `
        <bos>
        <|turn>system
        // 这是正文 token，
        {system_prompt}
        <turn|>
        <|turn>user
        // 这是正文 token
        {user_message}
        <turn|>
        ...
      ` }),
                        React.createElement(P, null, "\u8FD9\u6837\u63A5\u6536\u65B9\u5C31\u53EF\u4EE5\u901A\u8FC7 Special Token \u6765\u5199 parser \u89E3\u6790 token \u5E8F\u5217\u4E86"),
                        React.createElement(P, null, `另外还需注意整个序列以 \`<bos>\` 开头，由于这些 prompt 被特殊的 Token 包裹着，所以模型能够准确认识到文本之间的结构关系，这种认知不同于正文里的结构化认知，是一种 "强" 的多的认知，下面给个更具体的图例，以前面的猫娘例子，我们将其中的 context token 反序列化后是这样的，来自真实调用日志：`),
                        React.createElement(Code, { lang: 'html', source: String.raw `
        <bos><|turn>system
        <|think|>
        你是一只猫娘,▁你叫▁e▁酱<turn|>
        <|turn>user
        你是谁<turn|>
        <|turn>model
        <|channel>thought
        Thinking▁Process:
        1.▁▁Identify▁the▁persona:▁cat▁girl▁named▁e-chan
        2.▁▁Determine▁the▁core▁task:▁"Who▁are▁you?"
        3.▁▁Adopt▁the▁persona's▁voice...
        <channel|>Meow~▁♡
        我呀？我叫▁e▁酱！✨
        我是超级活泼、超级可爱的猫娘！ฅ^•ﻌ•^ฅ
      ` }),
                        React.createElement(P, null, "\u800C\u5355\u72EC\u7684\u7279\u6B8A Token \u505A\u7ED3\u6784\u5316\u6807\u8BB0\u80FD\u8BA9\u6A21\u578B\u663E\u8457\u7684\u7406\u89E3\u5230\u5176\u4E2D\u7684\u7ED3\u6784\u5316\u5173\u7CFB\uFF0C\u8FD9\u79CD\u7ED3\u6784\u5316\u6A21\u7248\u79F0\u4E3A Chat Templates:"),
                        React.createElement("figure", { className: "my-6" },
                            React.createElement("svg", { viewBox: "0 0 720 420", role: "img", className: "w-full h-auto border border-stone-200 rounded bg-white", fontFamily: "Georgia, serif" },
                                React.createElement("title", null, "Chat Template \u7ED3\u6784\u5316\u793A\u610F\uFF1A\u732B\u5A18\u5BF9\u8BDD\u7684 Token \u5E8F\u5217\u62C6\u89E3"),
                                React.createElement("text", { x: "360", y: "24", textAnchor: "middle", fontSize: "16", fill: "#1c1917", fontWeight: "600" }, "Chat Template \u7ED3\u6784\u5316\u793A\u610F"),
                                React.createElement("text", { x: "360", y: "42", textAnchor: "middle", fontSize: "11", fill: "#78716c", fontStyle: "italic" }, "Special Token \u4E3A\u6A21\u578B\u63D0\u4F9B\"\u5F3A\u7ED3\u6784\u5316\"\u8BA4\u77E5\uFF0C\u8FDC\u8D85\u6B63\u6587\u4E2D\u7684\u9690\u5F0F\u7ED3\u6784"),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "30", y: "58", width: "50", height: "24", rx: "4", fill: "#b45309", stroke: "#b45309" }),
                                    React.createElement("text", { x: "55", y: "74", textAnchor: "middle", fontSize: "10", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<bos>"),
                                    React.createElement("line", { x1: "55", y1: "82", x2: "55", y2: "96", stroke: "#b45309", strokeWidth: "1.5" }),
                                    React.createElement("circle", { cx: "55", cy: "96", r: "2", fill: "#b45309" })),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "30", y: "100", width: "660", height: "72", rx: "6", fill: "none", stroke: "#6366f1", strokeWidth: "1.5", strokeDasharray: "6,3" }),
                                    React.createElement("rect", { x: "30", y: "100", width: "120", height: "22", rx: "4", fill: "#6366f1" }),
                                    React.createElement("text", { x: "90", y: "115", textAnchor: "middle", fontSize: "10", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<|turn>system"),
                                    React.createElement("rect", { x: "160", y: "104", width: "72", height: "18", rx: "3", fill: "#f59e0b", stroke: "#f59e0b" }),
                                    React.createElement("text", { x: "196", y: "117", textAnchor: "middle", fontSize: "9", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<|think|>"),
                                    React.createElement("rect", { x: "50", y: "130", width: "560", height: "28", rx: "4", fill: "#eef2ff", stroke: "#c7d2fe" }),
                                    React.createElement("text", { x: "330", y: "148", textAnchor: "middle", fontSize: "12", fill: "#4338ca" }, "\u4F60\u662F\u4E00\u53EA\u732B\u5A18, \u4F60\u53EB e \u9171"),
                                    React.createElement("text", { x: "60", y: "168", fontSize: "8", fill: "#78716c", dx: "-2", dy: "-22" }, "\u6B63\u6587 Token"),
                                    React.createElement("rect", { x: "620", y: "148", width: "60", height: "18", rx: "3", fill: "#6366f1" }),
                                    React.createElement("text", { x: "650", y: "161", textAnchor: "middle", fontSize: "9", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<turn|>")),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "30", y: "186", width: "660", height: "60", rx: "6", fill: "none", stroke: "#059669", strokeWidth: "1.5", strokeDasharray: "6,3" }),
                                    React.createElement("rect", { x: "30", y: "186", width: "106", height: "22", rx: "4", fill: "#059669" }),
                                    React.createElement("text", { x: "83", y: "201", textAnchor: "middle", fontSize: "10", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<|turn>user"),
                                    React.createElement("rect", { x: "50", y: "216", width: "160", height: "24", rx: "4", fill: "#ecfdf5", stroke: "#a7f3d0" }),
                                    React.createElement("text", { x: "130", y: "232", textAnchor: "middle", fontSize: "12", fill: "#065f46" }, "\u4F60\u662F\u8C01"),
                                    React.createElement("text", { x: "60", y: "237", fontSize: "8", fill: "#78716c", dx: "-2", dy: "-6" }, "\u6B63\u6587 Token"),
                                    React.createElement("rect", { x: "620", y: "222", width: "60", height: "18", rx: "3", fill: "#059669" }),
                                    React.createElement("text", { x: "650", y: "235", textAnchor: "middle", fontSize: "9", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<turn|>")),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "30", y: "260", width: "660", height: "140", rx: "6", fill: "none", stroke: "#9d174d", strokeWidth: "1.5", strokeDasharray: "6,3" }),
                                    React.createElement("rect", { x: "30", y: "260", width: "116", height: "22", rx: "4", fill: "#9d174d" }),
                                    React.createElement("text", { x: "88", y: "275", textAnchor: "middle", fontSize: "10", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<|turn>model"),
                                    React.createElement("rect", { x: "50", y: "290", width: "400", height: "56", rx: "5", fill: "none", stroke: "#d97706", strokeWidth: "1.2", strokeDasharray: "4,2" }),
                                    React.createElement("rect", { x: "50", y: "290", width: "130", height: "18", rx: "3", fill: "#d97706" }),
                                    React.createElement("text", { x: "115", y: "302", textAnchor: "middle", fontSize: "9", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<|channel>thought"),
                                    React.createElement("rect", { x: "60", y: "314", width: "380", height: "24", rx: "4", fill: "#fffbeb", stroke: "#fde68a" }),
                                    React.createElement("text", { x: "250", y: "330", textAnchor: "middle", fontSize: "11", fill: "#92400e" }, "Thinking Process: 1. Identify the persona..."),
                                    React.createElement("rect", { x: "390", y: "348", width: "54", height: "16", rx: "3", fill: "#d97706" }),
                                    React.createElement("text", { x: "417", y: "360", textAnchor: "middle", fontSize: "8", fill: "#fff", fontWeight: "700", fontFamily: "monospace" }, "<channel|>"),
                                    React.createElement("rect", { x: "50", y: "370", width: "500", height: "24", rx: "4", fill: "#fdf2f8", stroke: "#fbcfe8" }),
                                    React.createElement("text", { x: "300", y: "386", textAnchor: "middle", fontSize: "12", fill: "#9d174d" }, "Meow~ \u2661  \u6211\u5440\uFF1F\u6211\u53EB e \u9171\uFF01\u2728 \u6211\u662F\u8D85\u7EA7\u53EF\u7231\u7684\u732B\u5A18\uFF01"),
                                    React.createElement("text", { x: "50", y: "370", fontSize: "9", fill: "#78716c", dx: "-2", dy: "-6" }, "\u6B63\u6587 Token\uFF08\u6A21\u578B\u56DE\u590D\uFF09")),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "560", y: "290", width: "10", height: "10", rx: "2", fill: "#6366f1" }),
                                    React.createElement("text", { x: "576", y: "299", fontSize: "9", fill: "#57534e" }, "system turn"),
                                    React.createElement("rect", { x: "560", y: "306", width: "10", height: "10", rx: "2", fill: "#059669" }),
                                    React.createElement("text", { x: "576", y: "315", fontSize: "9", fill: "#57534e" }, "user turn"),
                                    React.createElement("rect", { x: "560", y: "322", width: "10", height: "10", rx: "2", fill: "#9d174d" }),
                                    React.createElement("text", { x: "576", y: "331", fontSize: "9", fill: "#57534e" }, "model turn"),
                                    React.createElement("rect", { x: "560", y: "338", width: "10", height: "10", rx: "2", fill: "#d97706" }),
                                    React.createElement("text", { x: "576", y: "347", fontSize: "9", fill: "#57534e" }, "thought channel"))),
                            React.createElement("figcaption", { className: "mt-2 text-sm text-stone-500 text-center italic" }, "Chat Template \u7ED3\u6784\u5316\u793A\u610F\uFF1ASpecial Token \u5305\u88F9\u6BCF\u8F6E\u5BF9\u8BDD\u901A\u8FC7\u5B83\u4EEC\u611F\u77E5\u7ED3\u6784")),
                        React.createElement(P, null, "\u603B\u7ED3\u4E00\u4E0B\uFF0C\u76EE\u524D Chat \u8FD9\u5757\u6709\u4EE5\u4E0B\u51E0\u7C7B\u6311\u6218\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u957F\u4E0A\u4E0B\u6587\u7BA1\u7406\uFF1A\u591A\u8F6E\u5BF9\u8BDD\u7D2F\u79EF\u7684 Token \u6570\u91CF\u53EF\u80FD\u8FDC\u8D85\u6A21\u578B\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u3002\u5982\u4F55\u9AD8\u6548\u538B\u7F29\u5386\u53F2\u8F6E\u6B21\u3001\u4FDD\u7559\u5173\u952E\u4FE1\u606F\uFF0C\u662F\u6D3B\u8DC3\u7684\u7814\u7A76\u65B9\u5411\u3002"),
                            React.createElement(P, null, "\u5BF9\u8BDD\u4E00\u81F4\u6027\uFF1A\u6A21\u578B\u5728\u957F\u5BF9\u8BDD\u4E2D\u5BB9\u6613\u51FA\u73B0\u81EA\u76F8\u77DB\u76FE\u3001\u9057\u5FD8\u65E9\u671F\u8BBE\u5B9A\u7B49\u95EE\u9898\u3002\u5982\u4F55\u901A\u8FC7 Token \u7F16\u6392\u6216\u6CE8\u610F\u529B\u673A\u5236\u4FDD\u6301\u4EBA\u8BBE\u548C\u4E8B\u5B9E\u4E00\u81F4\u6027\uFF0C\u4ECD\u662F\u5F00\u653E\u95EE\u9898\u3002"),
                            React.createElement(P, null, "\u6A21\u677F\u6807\u51C6\u5316\uFF1A\u76EE\u524D\u5404\u5BB6\u90FD\u6709\u81EA\u5DF1\u7684 Special Token \u5B9A\u4E49\uFF0C\u683C\u5F0F\u90FD\u4E0D\u4E00\u6837\uFF0C\u5982\u4F55\u7EDF\u4E00\uFF1F"))),
                    React.createElement(H1Block, { id: "llm-agent-tool-use", title: "Tool Use \u5DE5\u5177\u8C03\u7528" },
                        React.createElement(P, null, "Tool Use \u5C31\u662F\u5728\u591A\u8F6E\u5BF9\u8BDD\u804A\u5929\u6A21\u677F\u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u5DE5\u5177\u4EA4\u4E92\u5FAA\u73AF\uFF0C\u6A21\u578B\u4E0D\u518D\u53EA\u662F\"\u63A5\u6536\u95EE\u9898\u2192\u8F93\u51FA\u56DE\u7B54\"\uFF0C\u800C\u662F\u53EF\u4EE5\uFF1A\u518D\u8C03\u7528\u5DE5\u5177\u5E76\u83B7\u53D6\u7ED3\u679C\u53C2\u8003\u8F93\u51FA\uFF0C\u5728 Gemma 4 \u4E2D\uFF0CAgent \u534F\u8BAE\u7684\u6838\u5FC3\u7F16\u6392\u6A21\u5F0F\u5982\u4E0B\uFF0C\u6CE8\u610F\u5176\u4E2D\u7684 \u2B06\uFE0F \u548C \u2B07\uFE0F"),
                        React.createElement(Code, { lang: 'html', source: String.raw `
      <|turn>system
      你是一个有用的助手，你可以使用以下工具：

      <|tool>
      {
        "name": "get_weather",
        "description": "查询指定城市的天气",
        "parameters": {
          "type": "object",
          "properties": {
            "city": { "type": "string" }
          },
          "required": ["city"]
        }
      }
      <tool|>
      <turn|>

      <|turn>user
      帮我查一下北京今天的天气
      <turn|>

      <|turn>model
      <|channel>thought
      用户要查询实时天气，我需要调用天气工具。
      <channel|>
      <|tool_call>{"name":"get_weather","arguments":{"city":"北京"}}<tool_call|>
      <turn|>

      <|turn>tool
      <|tool_response>{"city":"北京","weather":"晴","temp":"26°C"}<tool_response|>
      ⬆️ 注意上面这段由调用方直接 append 进来，调用方需要写个 parser 发现进入到 tool call 块里的时候开始调用 tool 干活
      ⬆️ 并把工具调用的结果用 tool_response 的形式包裹直接 append 到 context 中持续自回归调用即可实现完整调用链路

      <turn|>

      <|turn>model
      北京今天晴，气温 26°C。
      <turn|>  
      ` }),
                        React.createElement("figure", { className: "mt-6" },
                            React.createElement("svg", { viewBox: "0 0 720 340", role: "img", className: "w-full h-auto border border-stone-200 rounded bg-white", fontFamily: "Georgia, serif" },
                                React.createElement("title", null, "Tool Use \u4EA4\u4E92\u5FAA\u73AF\uFF1ALLM \u2194 Agent \u8C03\u7528\u65B9"),
                                React.createElement("text", { x: "360", y: "24", textAnchor: "middle", fontSize: "16", fill: "#1c1917", fontWeight: "600" }, "Tool Use \u4EA4\u4E92\u5FAA\u73AF"),
                                React.createElement("text", { x: "360", y: "42", textAnchor: "middle", fontSize: "11", fill: "#78716c", fontStyle: "italic" }, "\u6A21\u578B\u751F\u6210 tool_call \u2192 \u8C03\u7528\u65B9\u89E3\u6790\u6267\u884C \u2192 tool_response \u6CE8\u5165\u4E0A\u4E0B\u6587 \u2192 \u6A21\u578B\u7EE7\u7EED\u751F\u6210"),
                                React.createElement("rect", { x: "40", y: "70", width: "240", height: "180", rx: "10", fill: "none", stroke: "#6366f1", strokeWidth: "2" }),
                                React.createElement("rect", { x: "40", y: "70", width: "240", height: "30", rx: "10", fill: "#6366f1" }),
                                React.createElement("rect", { x: "40", y: "90", width: "240", height: "10", fill: "#6366f1" }),
                                React.createElement("text", { x: "160", y: "90", textAnchor: "middle", fontSize: "14", fill: "#fff", fontWeight: "700" }, "LLM \u6A21\u578B"),
                                React.createElement("text", { x: "160", y: "122", textAnchor: "middle", fontSize: "11", fill: "#57534e" }, "\u81EA\u56DE\u5F52\u751F\u6210 Token \u5E8F\u5217"),
                                React.createElement("rect", { x: "60", y: "136", width: "200", height: "40", rx: "5", fill: "#eef2ff", stroke: "#a5b4fc" }),
                                React.createElement("text", { x: "160", y: "152", textAnchor: "middle", fontSize: "10", fill: "#4338ca", fontWeight: "600", fontFamily: "monospace" }, "<|tool_call>"),
                                React.createElement("text", { x: "160", y: "168", textAnchor: "middle", fontSize: "9", fill: "#4338ca", fontFamily: "monospace" }, `{"name":"get_weather",...}`),
                                React.createElement("rect", { x: "60", y: "190", width: "200", height: "40", rx: "5", fill: "#ecfdf5", stroke: "#6ee7b7" }),
                                React.createElement("text", { x: "160", y: "206", textAnchor: "middle", fontSize: "10", fill: "#065f46", fontWeight: "600", fontFamily: "monospace" }, "<|tool_response>"),
                                React.createElement("text", { x: "160", y: "222", textAnchor: "middle", fontSize: "9", fill: "#065f46", fontFamily: "monospace" }, `{"weather":"晴","temp":"26°C"}`),
                                React.createElement("rect", { x: "440", y: "70", width: "240", height: "180", rx: "10", fill: "none", stroke: "#b45309", strokeWidth: "2" }),
                                React.createElement("rect", { x: "440", y: "70", width: "240", height: "30", rx: "10", fill: "#b45309" }),
                                React.createElement("rect", { x: "440", y: "90", width: "240", height: "10", fill: "#b45309" }),
                                React.createElement("text", { x: "560", y: "90", textAnchor: "middle", fontSize: "14", fill: "#fff", fontWeight: "700" }, "Agent \u8C03\u7528\u65B9"),
                                React.createElement("text", { x: "560", y: "122", textAnchor: "middle", fontSize: "11", fill: "#57534e" }, "\u7ED3\u6784\u5316 Parser \u89E3\u6790"),
                                React.createElement("rect", { x: "460", y: "136", width: "200", height: "24", rx: "4", fill: "#fffbeb", stroke: "#fde68a" }),
                                React.createElement("text", { x: "560", y: "152", textAnchor: "middle", fontSize: "10", fill: "#92400e" }, "1. \u68C0\u6D4B\u5230 tool_call Token"),
                                React.createElement("rect", { x: "460", y: "166", width: "200", height: "24", rx: "4", fill: "#fffbeb", stroke: "#fde68a" }),
                                React.createElement("text", { x: "560", y: "182", textAnchor: "middle", fontSize: "10", fill: "#92400e" }, "2. \u89E3\u6790 JSON \u53C2\u6570"),
                                React.createElement("rect", { x: "460", y: "196", width: "200", height: "24", rx: "4", fill: "#fffbeb", stroke: "#fde68a" }),
                                React.createElement("text", { x: "560", y: "212", textAnchor: "middle", fontSize: "10", fill: "#92400e" }, "3. \u8C03\u7528\u5916\u90E8 API \u83B7\u53D6\u7ED3\u679C"),
                                React.createElement("rect", { x: "460", y: "226", width: "200", height: "18", rx: "4", fill: "#fef3c7", stroke: "#f59e0b" }),
                                React.createElement("text", { x: "560", y: "239", textAnchor: "middle", fontSize: "9", fill: "#b45309", fontWeight: "600" }, "4. \u5305\u88F9\u4E3A tool_response append \u5230 context"),
                                React.createElement("defs", null,
                                    React.createElement("marker", { id: "arrowR", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto" },
                                        React.createElement("path", { d: "M0,1 L9,5 L0,9 Z", fill: "#6366f1" })),
                                    React.createElement("marker", { id: "arrowL", viewBox: "0 0 10 10", refX: "1", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto" },
                                        React.createElement("path", { d: "M10,1 L1,5 L10,9 Z", fill: "#059669" }))),
                                React.createElement("line", { x1: "262", y1: "152", x2: "456", y2: "148", stroke: "#6366f1", strokeWidth: "2", markerEnd: "url(#arrowR)" }),
                                React.createElement("rect", { x: "310", y: "134", width: "100", height: "18", rx: "3", fill: "#6366f1" }),
                                React.createElement("text", { x: "360", y: "147", textAnchor: "middle", fontSize: "9", fill: "#fff", fontWeight: "700" }, "tool_call \u2192"),
                                React.createElement("line", { x1: "456", y1: "230", x2: "262", y2: "214", stroke: "#059669", strokeWidth: "2", markerEnd: "url(#arrowL)" }),
                                React.createElement("rect", { x: "300", y: "218", width: "120", height: "18", rx: "3", fill: "#059669" }),
                                React.createElement("text", { x: "360", y: "231", textAnchor: "middle", fontSize: "9", fill: "#fff", fontWeight: "700" }, "\u2190 tool_response"),
                                React.createElement("rect", { x: "40", y: "270", width: "640", height: "54", rx: "8", fill: "#fafaf9", stroke: "#d6d3d1" }),
                                React.createElement("text", { x: "360", y: "290", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u540E\u7EED\u6A21\u578B\u7EE7\u7EED\u81EA\u56DE\u5F52\u751F\u6210\u65F6\uFF0C\u4E0A\u4E0B\u6587\u4E2D\u5DF2\u5305\u542B tool_response"),
                                React.createElement("text", { x: "360", y: "310", textAnchor: "middle", fontSize: "11", fill: "#57534e" }, "\u6A21\u578B\u636E\u6B64\u751F\u6210\u6700\u7EC8\u56DE\u590D\uFF1A\u300C\u5317\u4EAC\u4ECA\u5929\u6674\uFF0C\u6C14\u6E29 26\u00B0C\u3002\u300D")),
                            React.createElement("figcaption", { className: "mt-2 text-sm text-stone-500 text-center italic" }, "Tool Use \u6838\u5FC3\u5FAA\u73AF\uFF1A\u6A21\u578B\u751F\u6210 tool_call \u2192 \u8C03\u7528\u65B9\u89E3\u6790\u6267\u884C \u2192 tool_response \u6CE8\u5165 \u2192 \u6A21\u578B\u7EE7\u7EED\u751F\u6210")),
                        React.createElement(P, null, "\u603B\u7ED3\u4E00\u4E0B\uFF0CTool Use \u8FD9\u5757\u662F Agent \u6700\u5173\u6CE8\u7684\u80FD\u529B\u4E86\uFF1A"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u89C4\u5212\u80FD\u529B\uFF08Planning\uFF09\uFF1A\u9700\u8981\u5C06\u590D\u6742\u4EFB\u52A1\u5206\u89E3\u4E3A\u591A\u6B65\u8BA1\u5212\u5E76\u6309\u5E8F\u6267\u884C\uFF0C\u6A21\u578B\u5728\u957F\u94FE\u89C4\u5212\u3001\u9519\u8BEF\u6062\u590D\u3001\u52A8\u6001\u91CD\u89C4\u5212\u65B9\u9762\u4ECD\u6709\u4E0D\u8DB3"),
                            React.createElement(P, null, "\u5E7B\u89C9\u4E0E\u5DE5\u5177\u6EE5\u7528\uFF1A\u6A21\u578B\u53EF\u80FD\u5728\u4E0D\u9700\u8981\u5DE5\u5177\u65F6\u5F3A\u884C\u8C03\u7528\uFF0C\u6216\u7F16\u9020\u4E0D\u5B58\u5728\u7684\u5DE5\u5177\u540D\u79F0\u548C\u53C2\u6570"),
                            React.createElement(P, null, "\u591A Agent \u534F\u4F5C\uFF1A\u591A\u4E2A Agent \u4E4B\u95F4\u5982\u4F55\u914D\u5408\u8FD9\u5957 Token \u534F\u8BAE\u8FDB\u884C\u901A\u4FE1\u3001\u5206\u5DE5\u548C\u534F\u8C03\u5462\uFF1F\u8FD9\u662F\u4E00\u4E2A\u65B0\u5174\u7684\u7814\u7A76\u65B9\u5411\uFF0C\u4EE3\u8868\u6846\u67B6\u5305\u62EC AutoGen\u3001CrewAI \u7B49\u3002"),
                            React.createElement(P, null, "\u53C2\u6570\u6821\u9A8C\uFF1A\u6A21\u578B\u9700\u8981\u6839\u636E\u5DE5\u5177 json schema \u751F\u6210\u4E25\u683C\u7B26\u5408\u683C\u5F0F\u7684 JSON \u53C2\u6570\uFF0C\u6A21\u578B\u8F93\u51FA\u7684\u7C7B\u578B\u9519\u8BEF\u3001\u7F3A\u5931\u5FC5\u586B\u5B57\u6BB5\u3001\u53C2\u6570\u503C\u5E7B\u89C9\u7B49\u95EE\u9898\u4ECD\u7136\u5E38\u89C1\u3002"),
                            React.createElement(P, null, "\u5E76\u884C\u4E0E\u5D4C\u5957\u8C03\u7528\uFF1A\u590D\u6742\u573A\u666F\u53EF\u80FD\u9700\u8981\u540C\u65F6\u8C03\u7528\u591A\u4E2A\u5DE5\u5177\uFF08\u5E76\u884C\uFF09\uFF0C\u6216\u4E00\u4E2A\u5DE5\u5177\u7684\u8F93\u51FA\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u5DE5\u5177\u7684\u8F93\u5165\uFF08\u5D4C\u5957\uFF09\uFF0C\u76EE\u524D\u5F88\u96BE\u8BF4\u5728\u8FD9\u6761\u7EBF\u6027\u4E0A\u4E0B\u6587\u4E2D\u5408\u7406\u7684\u8FDB\u884C\u8868\u793A"),
                            React.createElement(P, null, "\u5DE5\u5177\u9009\u62E9\uFF1A\u6A21\u578B\u9700\u8981\u6839\u636E\u4EFB\u52A1\u9009\u62E9\u5408\u9002\u7684\u5DE5\u5177\uFF0C\u8FD9\u9700\u8981\u6A21\u578B\u5BF9\u5DE5\u5177\u7684\u4F7F\u7528\u60C5\u51B5\u6709\u66F4\u6DF1\u5165\u7684\u7406\u89E3\uFF0C\u76EE\u524D\u96BE\u4EE5\u5B9E\u73B0\u3002")),
                        React.createElement(P, null, "\u8FD9\u91CC\u5FC5\u987B\u518D\u6B21\u5F3A\u8C03\u5DE5\u5177\u5B9A\u4E49\u901A\u5E38\u5728 system prompt \u4E2D\u901A\u8FC7 `<|tool>...<tool|>` \u5305\u88F9\u63D0\u4F9B\u7ED9\u6A21\u578B\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u8DDF `SKILL.md` \u901A\u8FC7 prompt \u5B9A\u4E49\u7684\u5DE5\u5177\u662F\u6709\u672C\u8D28\u533A\u522B\u7684\uFF0C\u8FD9\u662F\u7EAF prompt \u505A harness \u65E0\u6CD5\u8D85\u8D8A\u7684\u5730\u65B9\uFF1A"),
                        React.createElement(Code, { lang: 'html', source: String.raw `
      <|tool>
      {
        "name": "get_weather",
        "description": "查询指定城市的天气",
        "parameters": {
          "type": "object",
          "properties": {
            "city": { "type": "string", "description": "城市名称" }
          },
          "required": ["city"]
        }
      }
      <tool|>  
      ` })),
                    React.createElement(H1Block, { id: "structural-output", title: "\u7ED3\u6784\u5316\u8F93\u51FA" },
                        React.createElement(P, null, "\u7ED3\u6784\u5316\u8F93\u51FA\u662F\u6307\u8BA9\u6A21\u578B\u751F\u6210\u7B26\u5408\u7279\u5B9A\u683C\u5F0F\u7684\u5185\u5BB9\uFF0C\u6700\u5E38\u89C1\u7684\u662F JSON\uFF0C\u8FD9\u770B\u4F3C\u7B80\u5355\uFF0C\u4F46\u5728 Token \u5C42\u9762\u5374\u5145\u6EE1\u6311\u6218\uFF1A\u6A21\u578B\u662F\u9010 Token \u751F\u6210\u7684\uFF0C\u901A\u5E38\u5355\u4E2A\u53CC\u5F15\u53F7 \" \u540E\u603B\u662F\u4F1A\u8DDF\u70B9\u4EC0\u4E48\u4E1C\u897F\uFF0C\u5206\u8BCD\u4E0A\u5F88\u5BB9\u6613\u51FA\u73B0\u5F15\u53F7\u8DDF\u5176\u4ED6\u8BCD\u5408\u5E76\u7684\u60C5\u51B5\uFF0C\u5BFC\u81F4\u5F15\u53F7\u88AB\u62C6\u6563\u6216\u4E0E\u5176\u4ED6\u5B57\u7B26\u6DF7\u6DC6\u3002"),
                        React.createElement(P, null, `Gemma 4 词表中的 \`<|"|>\`（id: 52）就是为此设计的。它将 JSON 中的双引号 " 提升为一个不可拆分的原子 Token，避免引号在子词切分中被拆散或与其他字符混淆：`),
                        React.createElement(Code, { lang: 'html', source: String.raw `
      // 模型输出结构化 JSON（Token 层面视角）
      <|turn>model
      {
        <|"|>title<|"|>: <|"|>Gemma 4<|"|>,
        <|"|>type<|"|>: <|"|>multimodal model<|"|>,
        <|"|>supports_tools<|"|>: true
      }
      <turn|>

      // 解码后用户看到的文本
      {
        "title": "Gemma 4",
        "type": "multimodal model",
        "supports_tools": true
      }
      // 花括号的 token 也是单独的: { ==> 27658; } ==> 112999,  
      ` })),
                    React.createElement(H1Block, { id: "multi-modal", title: "\u591A\u6A21\u6001\u8F93\u5165" },
                        React.createElement(P, null, "\u591A\u6A21\u6001\u8F93\u5165\u7684\u4E00\u4E2A\u6839\u672C\u95EE\u9898\uFF1A\u56FE\u50CF\u3001\u97F3\u9891\u3001\u89C6\u9891\u4E0D\u662F\u6587\u672C\uFF0C\u65E0\u6CD5\u76F4\u63A5\u88AB tokenizer \u5207\u5206\uFF0C\u89E3\u51B3\u65B9\u6848\u662F\u5728\u6587\u672C\u5E8F\u5217\u4E2D\u7528 Special Token \u6807\u8BB0 \"\u8FD9\u91CC\u6709\u4E00\u6BB5\u975E\u6587\u672C\u6A21\u6001\u5185\u5BB9\"\uFF0C\u7136\u540E\u5728\u6A21\u578B\u8BA1\u7B97\u5C42\u9762\u5C06\u5BF9\u5E94\u7684\u6A21\u6001\u7279\u5F81\u6CE8\u5165\u5230\u8BE5\u4F4D\u7F6E\u3002"),
                        React.createElement(Code, { lang: 'html', source: String.raw `
      // 图像输入示例
      <|turn>user
      请描述这张图片：
      <|image>[视觉特征注入位置]<image|>
      <turn|>

      // 音频输入示例
      <|turn>user
      请转写这段音频：
      <|audio>[音频特征注入位置]<audio|>
      <turn|>

      // 单 Token 占位式（更紧凑）
      <|turn>user
      这张图是什么？<|image|>
      <turn|>  
      ` }),
                        React.createElement(H2, null, "\u7EDF\u4E00\u8868\u5F81"),
                        React.createElement(P, null, "\u591A\u6A21\u6001 Token \u5305\u88F9\u7684\u4E2D\u95F4\u4E0D\u653E\u56FE\u7247\u7684 base64 \u6570\u636E\uFF0C\u800C\u662F\u7ECF\u8FC7 Vision Encoder \u5D4C\u5165\u7684 embedding\uFF1A"),
                        React.createElement("figure", { className: "mt-6" },
                            React.createElement("svg", { viewBox: "0 0 720 300", role: "img", className: "w-full h-auto border border-stone-200 rounded bg-white", fontFamily: "Georgia, serif" },
                                React.createElement("title", null, "\u591A\u6A21\u6001\u7EDF\u4E00\u8868\u5F81\uFF1A\u56FE\u7247\u5982\u4F55\u6CE8\u5165 LLM \u4E0A\u4E0B\u6587"),
                                React.createElement("text", { x: "360", y: "24", textAnchor: "middle", fontSize: "16", fill: "#1c1917", fontWeight: "600" }, "\u591A\u6A21\u6001\u7EDF\u4E00\u8868\u5F81\u6D41\u7A0B"),
                                React.createElement("text", { x: "360", y: "42", textAnchor: "middle", fontSize: "11", fill: "#78716c", fontStyle: "italic" }, "\u56FE\u50CF\u7ECF Vision Encoder + Projector \u8F6C\u4E3A embedding \u5E8F\u5217\uFF0C\u6CE8\u5165\u6587\u672C Token \u5E8F\u5217\u4E2D"),
                                React.createElement("defs", null,
                                    React.createElement("marker", { id: "mm-arrow", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto" },
                                        React.createElement("path", { d: "M0,1 L9,5 L0,9 Z", fill: "#78716c" }))),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "30", y: "70", width: "110", height: "90", rx: "6", fill: "#f5f5f4", stroke: "#d6d3d1", strokeWidth: "1.5" }),
                                    React.createElement("rect", { x: "48", y: "82", width: "74", height: "52", rx: "3", fill: "#e7e5e4", stroke: "#a8a29e" }),
                                    React.createElement("circle", { cx: "98", cy: "96", r: "8", fill: "#fbbf24", stroke: "#f59e0b", strokeWidth: "1" }),
                                    React.createElement("polygon", { points: "60,130 82,102 100,120 108,110 122,130", fill: "#059669", opacity: "0.6" }),
                                    React.createElement("text", { x: "85", y: "152", textAnchor: "middle", fontSize: "12", fill: "#1c1917", fontWeight: "600" }, "\u539F\u59CB\u56FE\u7247")),
                                React.createElement("line", { x1: "144", y1: "115", x2: "184", y2: "115", stroke: "#78716c", strokeWidth: "1.5", markerEnd: "url(#mm-arrow)" }),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "188", y: "74", width: "140", height: "82", rx: "8", fill: "none", stroke: "#6366f1", strokeWidth: "2" }),
                                    React.createElement("rect", { x: "188", y: "74", width: "140", height: "24", rx: "8", fill: "#6366f1" }),
                                    React.createElement("rect", { x: "188", y: "90", width: "140", height: "8", fill: "#6366f1" }),
                                    React.createElement("text", { x: "258", y: "92", textAnchor: "middle", fontSize: "11", fill: "#fff", fontWeight: "700" }, "Vision Encoder"),
                                    React.createElement("text", { x: "258", y: "116", textAnchor: "middle", fontSize: "10", fill: "#4338ca" }, "ViT / SigLIP"),
                                    React.createElement("text", { x: "258", y: "132", textAnchor: "middle", fontSize: "9", fill: "#57534e" }, "\u63D0\u53D6\u89C6\u89C9\u7279\u5F81\u5D4C\u5165 embeddings")),
                                React.createElement("line", { x1: "332", y1: "115", x2: "372", y2: "115", stroke: "#78716c", strokeWidth: "1.5", markerEnd: "url(#mm-arrow)" }),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "376", y: "80", width: "100", height: "70", rx: "8", fill: "none", stroke: "#b45309", strokeWidth: "2" }),
                                    React.createElement("rect", { x: "376", y: "80", width: "100", height: "22", rx: "8", fill: "#b45309" }),
                                    React.createElement("rect", { x: "376", y: "94", width: "100", height: "8", fill: "#b45309" }),
                                    React.createElement("text", { x: "426", y: "96", textAnchor: "middle", fontSize: "11", fill: "#fff", fontWeight: "700" }, "Projector"),
                                    React.createElement("text", { x: "426", y: "120", textAnchor: "middle", fontSize: "9", fill: "#92400e" }, "\u7EBF\u6027\u6295\u5F71\u5C42"),
                                    React.createElement("text", { x: "426", y: "134", textAnchor: "middle", fontSize: "9", fill: "#57534e" }, "\u5BF9\u9F50\u7EF4\u5EA6")),
                                React.createElement("line", { x1: "480", y1: "115", x2: "514", y2: "115", stroke: "#78716c", strokeWidth: "1.5", markerEnd: "url(#mm-arrow)" }),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "518", y: "62", width: "180", height: "130", rx: "8", fill: "none", stroke: "#9d174d", strokeWidth: "2" }),
                                    React.createElement("rect", { x: "518", y: "62", width: "180", height: "24", rx: "8", fill: "#9d174d" }),
                                    React.createElement("rect", { x: "518", y: "78", width: "180", height: "8", fill: "#9d174d" }),
                                    React.createElement("text", { x: "608", y: "80", textAnchor: "middle", fontSize: "11", fill: "#fff", fontWeight: "700" }, "LLM \u4E0A\u4E0B\u6587\u5E8F\u5217"),
                                    React.createElement("g", { fontFamily: "monospace", fontSize: "8", textAnchor: "middle" },
                                        React.createElement("rect", { x: "528", y: "96", width: "36", height: "18", rx: "3", fill: "#e7e5e4", stroke: "#a8a29e" }),
                                        React.createElement("text", { x: "546", y: "108", fill: "#57534e" }, "\u8BF7\u63CF\u8FF0"),
                                        React.createElement("rect", { x: "568", y: "96", width: "46", height: "18", rx: "3", fill: "#e7e5e4", stroke: "#a8a29e" }),
                                        React.createElement("text", { x: "591", y: "108", fill: "#57534e" }, "\u8FD9\u5F20\u56FE:"),
                                        React.createElement("rect", { x: "528", y: "120", width: "24", height: "18", rx: "3", fill: "#6366f1", stroke: "#6366f1" }),
                                        React.createElement("text", { x: "540", y: "132", fill: "#fff", fontSize: "7" }, "<|img>"),
                                        React.createElement("rect", { x: "556", y: "120", width: "20", height: "18", rx: "3", fill: "#fbbf24", stroke: "#f59e0b" }),
                                        React.createElement("text", { x: "566", y: "132", fill: "#fff", fontSize: "7" }, "v\u2081"),
                                        React.createElement("rect", { x: "580", y: "120", width: "20", height: "18", rx: "3", fill: "#fbbf24", stroke: "#f59e0b" }),
                                        React.createElement("text", { x: "590", y: "132", fill: "#fff", fontSize: "7" }, "v\u2082"),
                                        React.createElement("rect", { x: "604", y: "120", width: "20", height: "18", rx: "3", fill: "#fbbf24", stroke: "#f59e0b" }),
                                        React.createElement("text", { x: "614", y: "132", fill: "#fff", fontSize: "7" }, "..."),
                                        React.createElement("rect", { x: "628", y: "120", width: "20", height: "18", rx: "3", fill: "#fbbf24", stroke: "#f59e0b" }),
                                        React.createElement("text", { x: "638", y: "132", fill: "#fff", fontSize: "7" }, "v\u2099"),
                                        React.createElement("rect", { x: "652", y: "120", width: "28", height: "18", rx: "3", fill: "#6366f1", stroke: "#6366f1" }),
                                        React.createElement("text", { x: "666", y: "132", fill: "#fff", fontSize: "7" }, "<img|>"),
                                        React.createElement("rect", { x: "528", y: "144", width: "50", height: "18", rx: "3", fill: "#e7e5e4", stroke: "#a8a29e" }),
                                        React.createElement("text", { x: "553", y: "156", fill: "#57534e" }, "\u540E\u7EED\u6587\u672C"),
                                        React.createElement("rect", { x: "582", y: "144", width: "20", height: "18", rx: "3", fill: "#e7e5e4", stroke: "#a8a29e" }),
                                        React.createElement("text", { x: "592", y: "156", fill: "#57534e" }, "...")),
                                    React.createElement("text", { x: "608", y: "182", textAnchor: "middle", fontSize: "9", fill: "#78716c" }, "\u89C6\u89C9 embedding \u66FF\u6362\u5360\u4F4D\u533A\u95F4")),
                                React.createElement("g", null,
                                    React.createElement("rect", { x: "120", y: "210", width: "480", height: "76", rx: "8", fill: "#fafaf9", stroke: "#d6d3d1" }),
                                    React.createElement("rect", { x: "140", y: "222", width: "14", height: "14", rx: "2", fill: "#e7e5e4", stroke: "#a8a29e" }),
                                    React.createElement("text", { x: "162", y: "233", fontSize: "10", fill: "#57534e" }, "\u6587\u672C Token\uFF08tokenizer \u751F\u6210\uFF09"),
                                    React.createElement("rect", { x: "140", y: "242", width: "14", height: "14", rx: "2", fill: "#fbbf24", stroke: "#f59e0b" }),
                                    React.createElement("text", { x: "162", y: "253", fontSize: "10", fill: "#57534e" }, "\u89C6\u89C9 embedding\uFF08Vision Encoder + Projector \u751F\u6210\uFF09"),
                                    React.createElement("rect", { x: "140", y: "262", width: "14", height: "14", rx: "2", fill: "#6366f1" }),
                                    React.createElement("text", { x: "162", y: "273", fontSize: "10", fill: "#57534e" }, "\u591A\u6A21\u6001 Special Token\uFF08<|image> / <image|>\uFF09"))),
                            React.createElement("figcaption", { className: "mt-2 text-sm text-stone-500 text-center italic" }, "\u56FE\u50CF\u7ECF Vision Encoder + Projector \u8F6C\u5316\u4E3A\u4E0E\u6587\u672C\u540C\u7EF4\u5EA6\u7684 embedding\uFF0C\u5728 Special Token \u6807\u8BB0\u7684\u4F4D\u7F6E\u6CE8\u5165 LLM \u4E0A\u4E0B\u6587")),
                        React.createElement(P, null, "\u5C06\u56FE\u50CF\u7ECF\u89C6\u89C9\u7F16\u7801\u5668\u63D0\u53D6\u7684\u7279\u5F81\uFF0C\u901A\u8FC7\u6295\u5F71\u5C42\u6620\u5C04/\u5BF9\u9F50\u5230 LLM \u7684\u8BCD\u5D4C\u5165\u7A7A\u95F4\u4E2D\uFF0C\u4F7F\u89C6\u89C9 token \u548C\u6587\u672C token \u5728\u540C\u4E00\u8868\u793A\u7A7A\u95F4\u4E2D\u88AB Transformer \u7EDF\u4E00\u5904\u7406\uFF0C\u4E5F\u5C31\u662F VLM \u7684\u6838\u5FC3\u7279\u5F81\uFF1A\u7EDF\u4E00\u4E86\u591A\u6A21\u6001\u6570\u636E\u7684\u8868\u5F81\u7A7A\u95F4\u3002"),
                        React.createElement(P, null, `而此处 <|image|> 只是用来标记模态边界，真正的图片处理发生在 tokenizer 之外通过 Vision Encoder 进行。这也解释了为什么多模态 Token 的 ID 位于词表高位区间——它们是后加的模态扩展，与原始文本词表分离。 在具体实现上，推理框架会将用户传入的图片送入 Vision Encoder 提取视觉特征向量，再经 Projector 对齐维度后，在 embedding 层面注入到 <|image>...<image|> 标记的对应位置即可`),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u591A\u6A21\u6001 Token \u6570\u91CF\u4E0E\u6548\u7387\uFF1A\u4E00\u5F20\u9AD8\u6E05\u56FE\u53EF\u4EE5\u4EA7\u751F\u6210\u5343\u4E0A\u4E07\u7684\u89C6\u89C9 Token\uFF0C\u4F1A\u5927\u91CF\u6D88\u8017\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF0C\u6548\u7387\u5F88\u91CD\u8981"),
                            React.createElement(P, null, "\u6A21\u6001\u5BF9\u9F50\uFF1A\u7EDF\u4E00\u7684\u8868\u5F81\u7A7A\u95F4\u5185\u8868\u8FBE\u6587\u5B57/\u56FE\u50CF/\u89C6\u9891\uFF0C\u5982\u4F55\u8BA9\u5B83\u4EEC\u5728\u540C\u4E00\u4E2A\u5411\u91CF\u8868\u793A\u7A7A\u95F4\u5185\u6709\u6548\u4EA4\u4E92\uFF0C\u662F\u76EE\u524D\u4E1A\u754C\u7684\u4E3B\u8981\u95EE\u9898"),
                            React.createElement(P, null, "\u5E7B\u89C9\u95EE\u9898\uFF1A\u540C\u6837\u7684\uFF0C\u7167\u6837\u4F1A\u9047\u5230\u5E7B\u89C9\u95EE\u9898"))),
                    React.createElement(H1Block, { id: "endoftext", title: "<|endoftext|>" },
                        React.createElement(P, null, "\u5C3D\u7BA1\u4E1A\u754C\u5F53\u524D\u7684\u751F\u6001\u5DF2\u5927\u5E45\u5EA6\u524D\u8FDB\u6A21\u578B\u80FD\u529B\u4E5F\u6BD4\u4E24\u5E74\u524D\u6709\u6781\u5927\u7684\u63D0\u5347\uFF0C\u4F46\u5927\u6A21\u578B\u7B2C\u4E00\u6027\u539F\u7406\u8FD8\u662F\u6587\u5B57\u63A5\u9F99\u7684\u65B9\u5F0F\uFF0C\u914D\u5408 Special Token \u7F16\u6392\u5E76\u751F\u6210\u51FA\u7ED3\u6784\u5316\u6587\u672C\u6D41\u3002"),
                        React.createElement(P, null, "\u5404\u7C7B\u5927\u6A21\u578B\u5E94\u7528\u7684\u90FD\u662F\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u5B9E\u73B0\u7684\uFF0C\u5177\u4F53\u4EE3\u7801\u4E0A\u5219\u5BF9\u5E94\u7740\u5BF9\u5B57\u7B26\u4E32\u5E8F\u5217\u7684 parser \u72B6\u6001\u673A + \u5B57\u7B26\u4E32\u62FC\u63A5\u3001\u4EE5\u53CA\u6574\u4E2A\u5B57\u7B26\u4E32 (prompt) \u7684\u957F\u5EA6\u7BA1\u7406\uFF0C\u6240\u8C13\u7684\u8BB0\u5FC6\u673A\u5236\u8BF4\u5230\u5E95\u5C31\u662F\u628A\u5904\u7406\u8FC7\u7684\u4E0A\u4E0B\u6587\u4EE5\u7279\u5B9A\u7684\u65B9\u5F0F\u5B58\u50A8\u5E76\u5728\u5408\u9002\u7684\u65F6\u5019\u6254\u56DE\u4E0A\u4E0B\u6587\u7A97\u53E3\u4E2D ...")));
            });

        })
    };
}));
