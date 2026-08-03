System.register(['react', 'rally/@@', './ghidra.png.js', './re-file.png.js', './re-text.png.js', './icon_256x256.png.js', './webui.png.js', './player.png.js', './ciallo.png.js', './nen.wav.js', './audio-player.js', './tts-test/card/audio-guess-card.js', './tts-test/card/01_orig.wav.js', './tts-test/card/01_ai.wav.js', './tts-test/card/02_orig.wav.js', './tts-test/card/02_ai.wav.js', './tts-test/card/03_orig.wav.js', './tts-test/card/03_ai.wav.js', './tts-test/card/04_orig.wav.js', './tts-test/card/04_ai.wav.js', './tts-test/card/05_orig.wav.js', './tts-test/card/05_ai.wav.js', './tts-test/card/06_orig.wav.js', './tts-test/card/06_ai.wav.js', './tts-test/card/07_orig.wav.js', './tts-test/card/07_ai.wav.js', './tts-test/normal/please-input-jp.wav.js', './tts-test/normal/please-input-cn.wav.js', './tts-test/normal/iam-jp.wav.js', './tts-test/normal/iam-cn.wav.js', './tts-test/normal/asm-jp.wav.js', './tts-test/normal/asm-cn.wav.js', './tts-test/text/nen_01.wav.js', './tts-test/text/nen_02.wav.js', './tts-test/text/nen_03.wav.js', './tts-test/text/nen_04.wav.js', './tts-test/text/nen_05.wav.js', './tts-test/text/nen_06.wav.js', './tts-test/text/nen_07.wav.js', './tts-test/text/nen_01_jp.wav.js', './tts-test/text/nen_02_jp.wav.js', './tts-test/text/nen_07_jp.wav.js'], (function (exports) {
    'use strict';
    var React, P, Footnote, Link, Numbering, ImgDynamic, metaBeauty, imageGhidra, imageReFile, imageReText, imageIcon256, imageWebui, imagePlayer, imageCiallo, audioNen, AudioPlayer, AudioGuessCard, wavOrig01, wavAi01, wavOrig02, wavAi02, wavOrig03, wavAi03, wavOrig04, wavAi04, wavOrig05, wavAi05, wavOrig06, wavAi06, wavOrig07, wavAi07, wavPleaseInputJp, wavPleaseInputCn, wavIamJp, wavIamCn, wavAsmJp, wavAsmCn, wavTextNen01, wavTextNen02, wavTextNen03, wavTextNen04, wavTextNen05, wavTextNen06, wavTextNen07, wavTextNen01Jp, wavTextNen02Jp, wavTextNen07Jp;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Footnote = module.Footnote;
            Link = module.Link;
            Numbering = module.Numbering;
            ImgDynamic = module.ImgDynamic;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            imageGhidra = module.default;
        }, function (module) {
            imageReFile = module.default;
        }, function (module) {
            imageReText = module.default;
        }, function (module) {
            imageIcon256 = module.default;
        }, function (module) {
            imageWebui = module.default;
        }, function (module) {
            imagePlayer = module.default;
        }, function (module) {
            imageCiallo = module.default;
        }, function (module) {
            audioNen = module.default;
        }, function (module) {
            AudioPlayer = module.AudioPlayer;
        }, function (module) {
            AudioGuessCard = module.AudioGuessCard;
        }, function (module) {
            wavOrig01 = module.default;
        }, function (module) {
            wavAi01 = module.default;
        }, function (module) {
            wavOrig02 = module.default;
        }, function (module) {
            wavAi02 = module.default;
        }, function (module) {
            wavOrig03 = module.default;
        }, function (module) {
            wavAi03 = module.default;
        }, function (module) {
            wavOrig04 = module.default;
        }, function (module) {
            wavAi04 = module.default;
        }, function (module) {
            wavOrig05 = module.default;
        }, function (module) {
            wavAi05 = module.default;
        }, function (module) {
            wavOrig06 = module.default;
        }, function (module) {
            wavAi06 = module.default;
        }, function (module) {
            wavOrig07 = module.default;
        }, function (module) {
            wavAi07 = module.default;
        }, function (module) {
            wavPleaseInputJp = module.default;
        }, function (module) {
            wavPleaseInputCn = module.default;
        }, function (module) {
            wavIamJp = module.default;
        }, function (module) {
            wavIamCn = module.default;
        }, function (module) {
            wavAsmJp = module.default;
        }, function (module) {
            wavAsmCn = module.default;
        }, function (module) {
            wavTextNen01 = module.default;
        }, function (module) {
            wavTextNen02 = module.default;
        }, function (module) {
            wavTextNen03 = module.default;
        }, function (module) {
            wavTextNen04 = module.default;
        }, function (module) {
            wavTextNen05 = module.default;
        }, function (module) {
            wavTextNen06 = module.default;
        }, function (module) {
            wavTextNen07 = module.default;
        }, function (module) {
            wavTextNen01Jp = module.default;
        }, function (module) {
            wavTextNen02Jp = module.default;
        }, function (module) {
            wavTextNen07Jp = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'tts-please-input',
                // type: 'app',
                // appTitle: 'app ?',
                title: '请输入文本？谈谈 TTS 的生成效果',
                author: 'eczn',
                // category: '分类',
                intro: intro(),
                time: new Date('2026-08-01 22:00'),
                bookLayout: 'full',
            }));
            function intro() {
                return `这几天配合 GPT-SoVITS 微调了 TTS 模型，效果超出预期，可能不久的将来 AI 语音就能达到人类水平(?)，特别是经过深度调教的。本文基于柚子社的解包数据给出步骤参考，并介绍这样训出来的 TTS 语音效果【建议使用耳机/推荐配代理访问本文(大内容)/宅向内容警告 ⚠️】`;
            }
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement("img", { src: imageCiallo.src, className: "r-link", style: {
                            display: 'block', margin: '0 auto', width: '22rem',
                            // marginRight: '-2rem',
                            float: 'right',
                            shapeOutside: `
          polygon(
             1% 64%,
             5% 55%,
            17% 45%,
            28% 36%,
            32% 25%,
            40% 13%,
            52% 5%,
            63% 4%,
            72% 12%,
            80% 25%,
            88% 40%,
            96% 55%,
            100% 71%,
            93% 84%,
            84% 88%,
            78% 96%,
            69% 100%,
            30% 100%,
            17% 96%,
            12% 86%,
             3% 80%
          )
        `,
                        }, "data-width": imageCiallo.width, "data-height": imageCiallo.height }),
                    React.createElement(P, { sinking: true }, intro()),
                    React.createElement(P, null, "\u5148\u7ED9\u51E0\u4E2A\u6548\u679C\u53C2\u8003\uFF0C\u6574\u4F53\u6765\u8BF4\u914D\u5408\u7CBE\u6311\u7684\u53C2\u8003\u548C\u624B K \u7684\u505C\u987F\u548C\u5347\u964D\u8C03\u53EF\u4EE5\u8FBE\u5230\u5F88\u4E0D\u9519\u7684\u6548\u679C\uFF0C\u4E0D\u4ED4\u7EC6\u542C\u53EF\u80FD\u5206\u8FA8\u4E0D\u51FA\u6765\uFF0C\u4E2D\u6587\u548C\u65E5\u8BED\u3010\u6CE8\uFF1A\u4EC5\u4F9B\u6280\u672F\u4EA4\u6D41\u5B66\u4E60\uFF0C\u4E0D\u53D1\u5E03\u548C\u516C\u5F00\u6743\u91CD\u548C\u89E3\u5305\u6570\u636E\u3011"),
                    React.createElement(LeafRightContainer, null,
                        React.createElement(AudioPlayer, { src: wavPleaseInputJp, text: '\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002', title: "\u65E5\u6587\u751F\u6210\u6548\u679C", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavPleaseInputCn, text: '\u8BF7\u8F93\u5165\u6587\u672C\u3002', title: "\u4E2D\u6587\u8FC1\u79FB\u6548\u679C", noCenter: true })),
                    React.createElement(IntroAudios, null),
                    React.createElement(P, null,
                        "\u5206\u4E24\u6761\u7EBF\uFF0C\u4E00\u6761\u662F\u8BED\u97F3\u6570\u636E\u6E05\u6D17\uFF0C\u7136\u540E\u662F\u914D\u7F6E GPT-SoVITS",
                        React.createElement(Footnote, { content: React.createElement(React.Fragment, null,
                                "\u5F00\u6E90\u6A21\u578B ",
                                React.createElement(Link, { href: "https://github.com/RVC-Boss/GPT-SoVITS" }, "GPT-SoVITS")) }),
                        " \u548C\u8BAD\u7EC3\u3002\u8BED\u97F3\u6570\u636E\u7528\u7684\u662F YUZU-SOFT (\u67DA\u5B50\u793E) \u300A\u9B54\u5973\u7684\u591C\u5BB4\u300B\u4E2D\u7DBE\u5730\u5BE7\u3005\u7684\u8BED\u97F3\u6570\u636E\uFF0C\u6211\u7528\u7684\u662F\u65E5\u6587\u539F\u7248\u5149\u789F\u505A\u7684\u89E3\u5305\uFF0CSteam \u7684\u9AD8\u6E05\u7248\u89E3\u5305\u96BE\u5EA6\u4F1A\u66F4\u5927"),
                    React.createElement(Numbering, null,
                        React.createElement(P, null, "\u6E38\u620F\u662F\u57FA\u4E8E kirikiri \u5F15\u64CE\u7684\uFF0C\u8FD9\u5F15\u64CE\u5E02\u9762\u4E0A\u6709\u4E00\u4E9B\u7834\u89E3\u5DE5\u5177\u4E86\uFF0C\u4F46\u90FD\u6CA1\u6709\u6700\u4F73\u5B9E\u8DF5\uFF0C\u5382\u5546\u6709\u5B9A\u5236\u5316\u7684\u79C1\u6709\u4FEE\u6539\u3002"),
                        React.createElement(P, null, "\u8BE5\u5F15\u64CE\u6700\u5927\u7684\u7279\u70B9\u662F\uFF0C\u6E38\u620F\u5185\u7684\u811A\u672C\u548C\u8D44\u6E90\u6587\u4EF6\u5B58\u50A8\u5728\u5B89\u88C5\u76EE\u5F55\u7684 .xp3 \u6587\u4EF6\u5185\uFF0C\u53EF\u4EE5\u914D\u5408\u5E02\u9762\u4E0A\u7684\u5F00\u6E90\u5DE5\u5177\u6253\u5F00\u548C\u89E3\u5305"),
                        React.createElement(P, null, "\u6BD4\u5982 https://github.com/morkt/garbro \u53EF\u4EE5\u5904\u7406 .xp3 \u6587\u4EF6"),
                        React.createElement(P, null, "\u4F46\u67DA\u5B50\u793E\u6709\u5BF9\u5F15\u64CE\u505A\u4E8C\u6B21\u9B54\u6539\uFF0C\u867D\u7136 GARBro \u80FD\u89E3\u5305 xp3 \u62FF\u5230\u6E38\u620F\u5185\u7684\u6587\u4EF6\u540D\uFF0C\u4F46\u662F\u6587\u4EF6\u672C\u8EAB\u5185\u5BB9\u662F\u52A0\u5BC6\u7684\uFF0C\u6BD4\u5982\u5176\u4E2D\u7684 .txt \u6216\u8005 .ks \u5267\u672C\u662F\u52A0\u5BC6\u7684\u5185\u5BB9\u3002")),
                    React.createElement(P, null, "\u600E\u4E48\u89E3\uFF1A\u7528 LLM \u72E0\u72E0\u8E6C (DeepSeek \u5904\u7406\u4E0D\u4E86\u7684\u6362 GPT Sol)\uFF0C\u8BA9\u6A21\u578B\u66B4\u529B\u7834\u89E3\uFF0C\u800C\u4E14\u9700\u8981\u914D\u5408 ghidra-mcp \u81EA\u52A8\u5316\u9006\u5411\u5F15\u64CE dll \u5BF9\u5E94\u7684\u62C6\u5305\u548C parser \u903B\u8F91\uFF0C\u6210\u529F\u7834\u89E3:"),
                    React.createElement(ImgDynamic, { file: imageGhidra, alt: "\u914D\u5408 ghidra mcp \u6A21\u578B\u53CD\u7F16\u8BD1\u770B\u9006\u5411\u5DE5\u7A0B\u6293\u52A0\u5BC6\u903B\u8F91 (\u8FD9\u4E00\u6B65\u5F88\u70E7 token)" }),
                    React.createElement(ImgDynamic, { file: imageReFile, alt: "\u6210\u529F\u53D1\u73B0 XOR \u52A0\u5BC6\u3001\u4EE5\u53CA\u914D\u5408 ghidra \u8FDB\u4E00\u6B65\u63A2\u7D22 XOR \u5BC6\u94A5\u8BA1\u7B97" }),
                    React.createElement(P, null, "\u5176\u4E2D\u5173\u4E8E voiceFile \u7684\u89E3\u5BC6\u82B1\u4E86\u5F88\u5927\u529F\u592B\uFF0CDeepSeek \u627E\u4E86\u5F88\u4E45\u641E\u4E0D\u5B9A\uFF085\u5C0F\u65F6\uFF09\u6362 GPT-6 Sol \u534A\u5C0F\u65F6\u6210\u529F\u5904\u7406\u5E76\u89E3\u5BC6\uFF0C\u603B\u5171\u89E3\u538B\u51FA\u6765\u5DEE\u4E0D\u591A 23,000 \u4E2A\u97F3\u9891\u6587\u4EF6\uFF0C\u6279\u91CF\u8FC7\u4E86\u4E00\u4E0B ffmpeg \u6821\u9A8C\u5408\u6CD5\u6027\uFF0C\u5927\u6982\u6709 1% \u662F\u62A5\u9519\u7684\uFF0C\u7531\u4E8E Copilot \u989D\u5EA6\u5FEB\u6CA1\u4E86\uFF0C\u8FD9\u90E8\u5206\u975E\u6CD5\u6587\u4EF6\u505A\u4E86\u8E22\u51FA\u3002\uFF08\u8BA9 GPT \u7EE7\u7EED\u8DD1\u4F30\u8BA1\u80FD\u9006\u5411\u51FA\u5168\u90E8\u7EC6\u8282\uFF09"),
                    React.createElement(P, null, "\u603B\u4E4B\u7ECF\u8FC7\u6F2B\u957F\u7684\u5904\u7406\uFF0C\u6700\u540E\u5F62\u6210\u7C7B\u4F3C\u8FD9\u6837\u5E26 meta \u7684\u5168\u91CF jsonl \u6570\u636E:"),
                    React.createElement(ImgDynamic, { file: imageReText, alt: "\u6700\u7EC8\u628A\u5267\u672C\u548C voiceFile \u90FD\u89E3\u5BC6\u4E86\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u53E5\u6765\u81EA\u6E38\u620F\u539F\u6587" }),
                    React.createElement(AudioPlayer, { src: audioNen, title: "nen018_029.wav", text: "\u3044\u3048\u3001\u5384\u4ECB\u3068\u8A00\u3063\u3066\u3044\u308B\u308F\u308A\u306B\u306F\u3001\u697D\u3057\u305D\u3046\u3060\u306A\u3041\u3001\u3068\u601D\u3063\u3066\u3002" }),
                    React.createElement(ImgDynamic, { file: imageWebui, alt: "\u6700\u540E\u8BAD\u5B8C\uFF0C\u63A8\u7406\u7684\u65F6\u5019\u5728 webui \u8FD9\u91CC\u6307\u5B9A\u53C2\u8003\u97F3\u9891\u548C text \u5373\u53EF\u63A8\u7406" }),
                    React.createElement(Hr, null),
                    React.createElement(P, { sinking: true }, "\u63A5\u4E0B\u6765\u5C31\u662F\u505A TTS \u5FAE\u8C03\u4E86\u3002GPT-SoVITS \u662F\u4E00\u4E2A few-shot \u97F3\u8272\u514B\u9686 TTS \u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u4EC5\u63D0\u4F9B\u51E0\u53E5\u8BDD\u5C31\u80FD\u514B\u9686\u97F3\u8272\uFF0C\u4F46\u9700\u8981\u8FBE\u5230\u6700\u4F73\u6548\u679C\u6700\u597D\u505A\u5FAE\u8C03\u3002"),
                    React.createElement(P, null, "\u5FAE\u8C03\u9700\u8981\u5173\u6CE8\u4E24\u4E2A\u6743\u91CD\uFF0C\u540C\u65F6\u4E5F\u662F\u7CFB\u7EDF\u7684\u4E24\u4E2A\u4E3B\u8981\u6A21\u5757\uFF1AGPT \u548C SoVITS\u3002"),
                    React.createElement(Numbering, null,
                        React.createElement(P, null, "\u6B64\u5904\u7684 GPT \u662F\u4E00\u4E2A\u7279\u5236\u7684\u81EA\u56DE\u5F52 Transformer\uFF0C\u5B83\u540C\u65F6\u63A5\u6536\u76EE\u6807\u6587\u672C\u548C\u53C2\u8003\u97F3\u9891\u7684\u8BED\u4E49 token \u4F5C\u4E3A\u8F93\u5165\uFF0C\u4EE5\u53C2\u8003\u97F3\u9891\u7684 token \u5E8F\u5217\u4E3A prompt \u524D\u7F00\uFF0C\u81EA\u56DE\u5F52\u5730\u9884\u6D4B\u540E\u7EED\u7684\u8BED\u4E49 token\uFF0C\u8FD9\u4E9B\u8BED\u4E49 token \u65E2\u627F\u8F7D\u4E86\u6587\u672C\u7684\u5185\u5BB9\uFF0C\u4E5F\u5EF6\u7EED\u4E86\u53C2\u8003\u97F3\u9891\u7684\u97F5\u5F8B\u98CE\u683C"),
                        React.createElement(P, null, "SoVITS \u540C\u6837\u4E5F\u4F1A\u4F9D\u636E\u53C2\u8003\u97F3\u9891\u91CC\u518D\u72EC\u7ACB\u63D0\u53D6\u97F3\u8272\u7279\u5F81\uFF0C\u914D\u5408 GPT \u9884\u6D4B\uFF0C\u6700\u7EC8\u751F\u6210\u8BED\u97F3\u6CE2\u5F62\uFF08\u4E2D\u95F4\u6BD4\u8F83\u590D\u6742...\uFF09")),
                    React.createElement(P, null, "\u6574\u4E2A TTS \u4EFB\u52A1\u9700\u8981\u8FD9\u4E24\u4E2A\u57FA\u6A21\u5171\u540C\u5B8C\u6210\u8BED\u97F3\u751F\u6210\u4EFB\u52A1\uFF0C\u5177\u4F53\u7EC6\u8282\u5B98\u7F51\u6587\u6863\u548C WebUI \u505A\u7684\u5F88\u50BB\u74DC\u5F0F\uFF0C\u53EA\u9700\u8981\u914D\u597D\u5168\u5C40\u4EE3\u7406\u7B49\u5B8C py \u811A\u672C\u8DD1\u5B8C\uFF0C\u5E76\u6309\u683C\u5F0F\u51C6\u5907\u597D\u6570\u636E\u96C6\u5C31\u53EF\u4EE5\u5F00\u59CB\u8DD1\u68AF\u5EA6\u4E0B\u964D\u5FAE\u8C03\u6A21\u578B\u4E86\uFF08\u914D\u5408 LLM \u4F30\u8BA1\u6CA1\u6709\u96BE\u5EA6\uFF09"),
                    React.createElement(P, null, "\u6211\u8FD9\u6CE2\u6574\u4E2A\u5FAE\u8C03\u5728\u53CC\u5361 3080 \u4E0A 2 \u5C0F\u65F6\u8DD1\u5B8C\u9ED8\u8BA4\u8BAD\u7EC3\u914D\u7F6E: v2proplus / GPT 15 epoch, SoVITS 8 epoch\uFF0C\u6CE8\u610F\u8FD9\u91CC\u4E0D\u8981\u7528 mac \u505A\u8BAD\u7EC3\uFF0C\u5B98\u65B9\u6CA1\u6709\u505A\u9002\u914D\u7528\u7684 CPU \u505A\u68AF\u5EA6\uFF0C\u6781\u6162\uFF0C\u4F46\u662F\u63A8\u7406\u53EF\u4EE5\u7528 mac \u6CA1\u6709\u5927\u95EE\u9898\uFF08\u56E0\u4E3A\u63A8\u7406\u8D70\u7684\u53E6\u5916\u4E00\u4E2A\u6846\u67B6...\uFF09"),
                    React.createElement(P, null, "\u8FD8\u6709\u4E00\u4E2A\u7EC6\u8282\u9700\u8981\u6CE8\u610F\uFF0C\u7531\u4E8E\u5F15\u5165\u4E86 GPT\uFF0C\u6240\u4EE5 Transformer \u90A3\u80A1\u5473\u4E00\u8D77\u5E26\u8FDB\u6765\u4E86\uFF1A\u5E7B\u89C9\u3001\u8BCD\u91CD\u590D\u3001\u91C7\u6837\u4E0D\u7A33\u5B9A\u3001\u63A8\u7406\u5F00\u9500\u91CD\u7B49\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF1A\u751F\u6210\u8BED\u97F3\u9700\u8981\u5F00\u5956\u591A\u6B21"),
                    React.createElement(P, null, "\u6700\u540E\u5C31\u662F\u6D4B\u8BD5\u4E86\uFF0C\u8FD9\u5957\u67B6\u6784\u914D\u5408\u5FAE\u8C03\u540E\u53EF\u4EE5\u751F\u6210\u76F8\u5BF9\u5F88\u903C\u771F\u7684\u8BED\u97F3\uFF0C\u975E\u6BCD\u8BED\u5B66\u4E60\u8005\u53EF\u80FD\u65E0\u6CD5\u5206\u8FA8\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u6613\u7684 benchmark \u76F2\u6D4B\uFF0C\u539F\u58F0\u6765\u81EA\u9A8C\u8BC1\u96C6\u4E0D\u4F1A\u88AB\u8BAD\u7EC3\u5230\uFF0C\u53EF\u4EE5\u5BF9\u6BD4 AI \u6CDB\u5316\u6548\u679C\u8DDF\u771F\u4EBA\u5DEE\u8DDD\uFF0C\u4F9B\u53C2\u8003\u3002"),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 1", text: "\u79C1\u3082\u3044\u305F\u3060\u3044\u3066\u3044\u3044\u3093\u3067\u3059\u304B", origSrc: wavOrig01, aiSrc: wavAi01 }),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 2", text: "\u305D\u308C\u3067\u3067\u3059\u306D\u3001\u3053\u308C\u304B\u3089\u306A\u3093\u3067\u3059\u304C......", origSrc: wavOrig02, aiSrc: wavAi02 }),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 3", text: "\u3044\u3048\u3001\u529B\u306B\u306A\u308C\u305F\u306A\u3089\u3088\u304B\u3063\u305F\u3067\u3059\u3002", origSrc: wavOrig03, aiSrc: wavAi03 }),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 4", text: "\uFF08\u306F\u3044\uFF09\u79C1\u306E\u5BB6\u3067\u3059\u304B\uFF1F", origSrc: wavOrig04, aiSrc: wavAi04 }),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 5", text: "\u5973\u306E\u5B50\u540C\u58EB\u3067\u3082\u3067\u3059\u304B\uFF1F", origSrc: wavOrig05, aiSrc: wavAi05 }),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 6", text: "\u3042\u3068\u306F\u5360\u3044\u306E\u5EF6\u9577\u3067\u3001\u6700\u8FD1\u306F\u8272\u3093\u306A\u4EBA\u306E\u76F8\u8AC7\u3092\u53D7\u3051\u305F\u308A\u3001\u305D\u306E\u89E3\u6C7A\u3092\u624B\u4F1D\u3063\u305F\u308A\u3057\u3066\u3044\u307E\u3059\u306D\u3002", origSrc: wavOrig06, aiSrc: wavAi06 }),
                    React.createElement(AudioGuessCard, { title: "\u76F2\u6D4B, \u9009\u51FA\u539F\u58F0 - Round 7", text: "\u6761\u4EF6\u304C\u8D64\u70B9\u306A\u3093\u3067\u3057\u305F\u3089\u3001\u78BA\u304B\u306B\u305D\u308C\u307B\u3069\u5FC3\u914D\u306F\u306A\u3055\u305D\u3046\u3067\u3059\u306D\u3002", origSrc: wavOrig07, aiSrc: wavAi07 }),
                    React.createElement(Hr, null),
                    React.createElement(P, { sinking: true }, "\u4E2D\u6587\u8FC1\u79FB\u6D4B\u8BD5\uFF0CGPT-SoVITS \u652F\u6301\u4E2D\u6587\u8FC1\u79FB\uFF0C\u8FD9\u91CC\u5217\u4E00\u4E9B\u6548\u679C\uFF0C\u4F9B\u53C2\u8003\uFF08\u8FC1\u79FB\u540E\u6548\u679C\u5DEE\u7684\u6BD4\u8F83\u591A\u4E86\uFF0C\u539F\u6765\u7684\u8BAD\u7EC3\u96C6\u91CC\u53EA\u6709\u65E5\u6587\u914D\u97F3\uFF0C\u6240\u4EE5\uFF09"),
                    React.createElement(IntroAudios, null),
                    React.createElement(LeafRightContainer, null,
                        React.createElement(AudioPlayer, { src: wavAsmJp, text: "\u30A2\u30BB\u30F3\u30D6\u30EA\u306E\u6027\u80FD\u9B54\u8853\u306B\u306F\u3001\u78BA\u304B\u306B\u72EC\u81EA\u306E\u4FA1\u5024\u304C\u3042\u308A\u307E\u3059\u3002\u3051\u308C\u3069\u3001\u305D\u308C\u306F \u30D7\u30ED\u30B0\u30E9\u30E0 \u306E\u672C\u8CEA\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002", title: "\u65E5\u6587\u751F\u6210\u6548\u679C", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavAsmCn, text: "\u6C47\u7F16\u7684\u6027\u80FD\u9B54\u6CD5\uFF0C\u786E\u5B9E\u662F\u6709\u72EC\u5230\u7684\u4EF7\u503C\u3002\u4F46\u662F\u5BF9\u4E8E\u7A0B\u5E8F\u6765\u8BF4\uFF0C\u8FD9\u4E0D\u662F\u5176\u672C\u8D28", title: "\u4E2D\u6587\u8FC1\u79FB\u6548\u679C", noCenter: true })),
                    React.createElement(Hr, null),
                    React.createElement(P, { sinking: true },
                        "\u957F\u6587\u6D4B\u8BD5\u7247\u6BB5",
                        React.createElement(Footnote, { content: React.createElement(React.Fragment, null,
                                "\u8FD9\u91CC\u9009\u4E86\u4E4B\u524D\u5199\u7684\u4E00\u7BC7\u6587\u7AE0 ",
                                React.createElement(Link, { href: "/b/eczn-preface-for-sicp/" }, "ECZN \u7ED9 SICP \u4F5C\u5E8F"),
                                " \u6458\u5F55\u4E86\u4E00\u4E9B\u5185\u5BB9") }),
                        "\uFF0C\u4F9B\u53C2\u8003\uFF0C\u627E\u4E86\u4E00\u4E9B\u6587\u672C\uFF0C\u4F7F\u7528\u4E2D\u6587/\u65E5\u6587\u751F\u6210\uFF0C\u5E26\u4E0D\u540C\u60C5\u7EEA\u98CE\u683C\u8BD5\u8BD5\u6548\u679C\u4F9B\u53C2\u8003\uFF0C\u6CE8\u610F\u5176\u4E2D\u51E0\u6BB5\u914D\u5408\u4E86\u4E0D\u540C\u7684\u53C2\u8003\u548C\u624B K \u7684\u505C\u987F/\u5347\u964D\u8C03\uFF0C\u53EF\u4EE5\u9884\u89C1\u8FD9\u7C7B\u6A21\u578B\u7684\u73A9\u6CD5\u7684\u4E0A\u9650\u4F1A\u6781\u9AD8\uFF0C\u4EC5\u505A\u6F14\u793A\u548C\u53C2\u8003\u3002"),
                    React.createElement(LeafRightContainer, null,
                        React.createElement(AudioPlayer, { src: wavTextNen01, text: React.createElement(React.Fragment, null, "\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7684\u6784\u9020\u548C\u89E3\u91CA\uFF0C\u5168\u79F0\u4E3A\u300C\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30FB\u30A2\u30F3\u30C9\u30FB\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30C6\u30FC\u30B7\u30E7\u30F3\u30FB\u30AA\u30D6\u30FB\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FB\u30D7\u30ED\u30B0\u30E9\u30E0\u30BA\u300D"), title: "\u7B2C\u4E00\u6BB5 cn", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen01Jp, text: React.createElement(React.Fragment, null, "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u69CB\u9020\u3068\u89E3\u91C8\u3001\u6B63\u5F0F\u540D\u79F0\u306F\u300C\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30FB\u30A2\u30F3\u30C9\u30FB\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30C6\u30FC\u30B7\u30E7\u30F3\u30FB\u30AA\u30D6\u30FB\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FB\u30D7\u30ED\u30B0\u30E9\u30E0\u30BA\u300D"), title: "\u7B2C\u4E00\u6BB5 jp", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen02, text: '\u5B83\u4EE5 "\u30B9\u30AD\u30FC\u30E0" \u8BED\u8A00\u4E3A\u57FA\u7840\uFF0C\u8BB2\u89E3\u4E86\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7684\u6784\u9020\u548C\u89E3\u91CA\uFF0C\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u4E86\u6211\u5BF9\u7F16\u7A0B\u8BED\u8A00\u7684\u7406\u89E3\u548C\u8BA4\u77E5', title: "\u7B2C\u4E8C\u6BB5 cn", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen02Jp, text: '\u305D\u308C\u306F\u30B9\u30AD\u30FC\u30E0\u3068\u3044\u3046\u8A00\u8A9E\u3092\u3082\u3068\u306B\u3057\u3066\u3001\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u69CB\u9020\u3068\u89E3\u91C8\u3092\u89E3\u8AAC\u3057\u3066\u3044\u308B\u3093\u3060\u3002\u3053\u306E\u672C\u306E\u304A\u304B\u3052\u3067\u3001\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u8A00\u8A9E\u306B\u5BFE\u3059\u308B\u79C1\u306E\u7406\u89E3\u3082\u8003\u3048\u65B9\u3082\u3001\u305A\u3044\u3076\u3093\u5909\u308F\u3063\u305F\u3093\u3060\u3088\u3002', title: "\u7B2C\u4E8C\u6BB5 jp", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen03, text: '\u5982\u679C\u80FD\u770B\u4E0B\u6765\u5E76\u611F\u5230\u6709\u610F\u601D\uFF0C\u90A3\u4E48\u4F60\u5F88\u53EF\u80FD\u662F\u8FD9\u672C\u4E66\u6700\u9002\u5408\u9605\u8BFB\u7684\u4EBA\u7FA4\uFF1B\u53CD\u4E4B\u5982\u679C\u4F60\u8BA4\u4E3A\u6CA1\u610F\u601D\uFF0C\u6B64\u4E66\u53EF\u80FD\u4E0D\u9002\u5408\u4F60\uFF0C\u4F5C\u5E8F\u7684\u76EE\u6807\u5C31\u5728\u4E8E\u6B64\uFF1A', title: "\u7B2C\u4E09\u6BB5", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen04, text: '\u7528\u5341\u4E94\u5206\u949F\u770B\u5B8C\u5E8F\u6765\u5224\u65AD\u8FD9\u672C\u4E66\u9002\u4E0D\u9002\u5408\u4F60\uFF0C\u503C\u4E0D\u503C\u5F97\u82B1\u8D39\u51E0\u5341\u751A\u81F3\u6570\u767E\u4E2A\u5C0F\u65F6\u7684\u6295\u5165', title: "\u7B2C\u56DB\u6BB5", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen07, text: '\u5509\uFF0C\u771F\u662F\u62FF\u4F60\u6CA1\u529E\u6CD5\u2026\u2026\u771F\u662F\u591F\u8BA9\u4EBA\u64CD\u5FC3\u7684\u3002', title: "\u62B1\u6028 cn", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen07Jp, text: '\u3082\u3046\u3001\u3057\u3087\u3046\u304C\u306A\u3044\u4EBA\u3060\u306A\u3042\u2026\u2026\u672C\u5F53\u306B\u624B\u304C\u304B\u304B\u308B\u3093\u3060\u304B\u3089\u3002', title: "\u62B1\u6028 jp", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen05, text: React.createElement(React.Fragment, null,
                                "\u3053\u3093\u306A\u306B\u9577\u3044\u6587\u7AE0\u306B\u4ED8\u304D\u5408\u3063\u3066\u304F\u308C\u308B\u306A\u3093\u3066\u3001\u541B\u306F\u304D\u3063\u3068\u3001\u3059\u3054\u30FC\u304F\u512A\u3057\u3044\u4EBA\u306A\u3093\u3060\u308D\u3046\u306A\u3063\u3066\u601D\u3063\u305F\u3088\u3002",
                                React.createElement("br", null),
                                React.createElement("br", null),
                                "\u8FD9\u4E48\u957F\u7684\u4E1C\u897F\u4F60\u90FD\u966A\u6211\u8BFB\u5B8C\u4E86\uFF0C\u6211\u5C31\u5728\u60F3\u554A\uFF0C\u4F60\u80AF\u5B9A\u662F\u4E2A\u5F88\u6E29\u67D4\u7684\u4EBA\u3002"), title: "\u7B2C\u4E94\u6BB5 \u5E73\u9759/\u9648\u8FF0", noCenter: true }),
                        React.createElement(AudioPlayer, { src: wavTextNen06, text: React.createElement(React.Fragment, null,
                                "\u3053\u3093\u306A\u306B\u9577\u3044\u6587\u7AE0\u306B\u4ED8\u304D\u5408\u3063\u3066\u304F\u308C\u308B\u306A\u3093\u3066\u3001\u541B\u306F\u304D\u3063\u3068\u3001\u3059\u3054\u30FC\u304F\u512A\u3057\u3044\u4EBA\u306A\u3093\u3060\u308D\u3046\u306A\u3063\u3066\u601D\u3063\u305F\u3088\u3002",
                                React.createElement("br", null),
                                React.createElement("br", null),
                                "\u8FD9\u4E48\u957F\u7684\u4E1C\u897F\u4F60\u90FD\u966A\u6211\u8BFB\u5B8C\u4E86\uFF0C\u6211\u5C31\u5728\u60F3\u554A\uFF0C\u4F60\u80AF\u5B9A\u662F\u4E2A\u5F88\u6E29\u67D4\u7684\u4EBA\u3002"), title: "\u7B2C\u516D\u6BB5 \u9AD8\u5174/\u611F\u52A8", noCenter: true })),
                    React.createElement("div", { style: { textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' } },
                        React.createElement(P, null, "EOF")),
                    React.createElement("img", { src: imageIcon256.src, 
                        // className="r-link"
                        style: { display: 'block', margin: '0 auto', width: '128px', height: '128px' } }),
                    React.createElement("img", { src: imagePlayer.src, className: "r-link", style: { display: 'none' }, "data-width": imagePlayer.width, "data-height": imagePlayer.height }));
            });
            function Hr() {
                return (React.createElement("div", { style: {
                        height: 0,
                        border: 'none',
                        borderTop: '1px solid var(--colorBorder, #e0e0e0)',
                        margin: '2em 0',
                    } }));
            }
            function LeafRightContainer(props) {
                return (React.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                    } }, props.children));
            }
            function IntroAudios() {
                return (React.createElement(LeafRightContainer, null,
                    React.createElement(AudioPlayer, { src: wavIamJp, text: '\u79C1\u306F\u30A4\u30FC\u541B\u304C\u8A13\u7DF4\u3057\u3066\u304F\u308C\u305F\u3001\u7DBE\u5730\u5BE7\u3005\u306E\u300C\u97F3\u58F0\u30E2\u30C7\u30EB\u300D\u306A\u3093\u3067\u3059', title: "\u65E5\u6587\u751F\u6210\u6548\u679C", noCenter: true }),
                    React.createElement(AudioPlayer, { src: wavIamCn, text: '\u6211\u662F E \u541B\u8BAD\u7EC3\u51FA\u6765\u7684\u7DBE\u5730\u5BE7\u3005\u7684\u300C\u97F3\u58F0\u6A21\u578B\u300D', title: "\u4E2D\u6587\u8FC1\u79FB\u6548\u679C", noCenter: true })));
            }

        })
    };
}));
