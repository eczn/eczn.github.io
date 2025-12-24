System.register(['react', 'rally/@@', './1.jpg.js', './2.jpg.js', './3.jpg.js'], (function (exports) {
    'use strict';
    var React, P, Numbering, ImgDynamic, metaBeauty, image1, image2, image3;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            Numbering = module.Numbering;
            ImgDynamic = module.ImgDynamic;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            image1 = module.default;
        }, function (module) {
            image2 = module.default;
        }, function (module) {
            image3 = module.default;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'drawing-250101',
                // type: 'app',
                // appTitle: 'app ?',
                title: 'AI 绘画管线实践 250101',
                author: 'eczn',
                category: '艺术',
                tags: ['摸鱼', 'AI'],
                time: new Date('2025-01-01 03:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, { sinking: true }, "\u5BF9\u4E8E\u6CA1\u6709\u7CFB\u7EDF\u5B66\u8FC7\u753B\u753B\u4E14\u57FA\u672C\u6CA1\u6709\u5565\u5929\u5206\u7684\u6211\u6765\u8BF4\u80FD\u6293\u597D\u5F62\u5C31\u4E0D\u9519\u4E86 ... \u4F46\u8FD9\u4E2A\u65F6\u4EE3\u6709 AI\uFF0C\u5728\u4E24\u5E74\u524D\u6211\u5C31\u73A9\u8FC7 webui\uFF0C\u4E0D\u8FC7\u5F53\u65F6\u4E5F\u4E0D\u662F\u5F88\u61C2\u8FD9\u5757\uFF0C\u4F46\u8FD9\u6BB5\u65F6\u95F4\u7B80\u5355\u6211\u53C8\u5C1D\u8BD5\u4E86\u4E00\u4E0B\u73B0\u5728 AI \u76F8\u5173\u7684\u7ED8\u753B\u7BA1\u7EBF\uFF0C\u611F\u89C9\u5B83\u975E\u5E38\u9002\u5408\u4E00\u4E9B \u201C\u98CE\u683C\u201D \u5316\u7684\u6E32\u67D3\u548C\u4E0A\u8272\uFF0C\u80FD\u6253\u5F00\u5F88\u591A\u521B\u610F\u601D\u7EF4\uFF0C\u611F\u89C9\u5982\u679C\u6784\u9020+\u8C03\u6559\u5408\u9002\u7684\u8BDD\uFF0C\u786E\u5B9E\u80FD\u4F5C\u4E3A\u751F\u4EA7\u529B\u4F7F\u7528\u4E86\uFF0C\u603B\u4E4B webui \u542F\u52A8\uFF01 \u672C\u6587\u505A\u7B80\u5355\u8BB0\u5F55"),
                        React.createElement(Numbering, { template: 'iii' },
                            React.createElement(ImgDynamic, { file: image1, alt: "\u914D\u5408\u626B\u63CF\u4EEA\u548C ControlNet \u5B9E\u73B0\u7EBF\u7A3F\u6846\u5B9A [\u6700\u5DE6\u662F\u4ECE\u7EB8\u4E0A\u626B\u63CF\u5230\u7535\u8111\u91CC\u7684]" }),
                            React.createElement(ImgDynamic, { file: image2, alt: "\u914D\u5408 LoRA \u5B9E\u73B0\u4E00\u4E9B\u98CE\u683C\u5316\u6548\u679C" }),
                            React.createElement(ImgDynamic, { file: image3, alt: "\u8C03\u6574\u53C2\u6570\u4EE5\u53CA in-paint \u6765\u505A\u66F4\u590D\u6742\u6548\u679C\uFF0C\u901A\u5E38\u8981\u8DD1\u4E0A\u5343\u5F20\u7136\u540E\u6311\u9009\u5E76\u4E8C\u6B21\u5904\u7406" })),
                        React.createElement(P, null, "\u641E\u7684\u65F6\u5019\u53D1\u73B0 AI \u751F\u6210\u7684\u56FE\u50CF\u7279\u522B\u9002\u5408 \u201C\u50CF\u7D20\u753B\u201D "),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u5206\u8FA8\u7387\u4F4E\u4E0D\u9700\u8981\u592A\u591A\u7EC6\u8282\uFF0C\u4E5F\u610F\u5473\u7740 \u201C\u641C\u7D22\u7A7A\u95F4\u201D \u66F4\u5C0F\uFF0C\u66F4\u5173\u6CE8\u5F62\u4F3C\uFF0C\u800C\u8FD9\u4E2A AI \u975E\u5E38\u64C5\u957F"),
                            React.createElement(P, null, "\u50CF\u7D20\u753B\u50CF\u7D20\u5C11\uFF0C\u901A\u8FC7 PS + \u6570\u4F4D\u677F\u6765\u505A\u4E8C\u6B21\u6539\u56FE\u4E5F\u4E0D\u7B97\u7279\u522B\u9EBB\u70E6"),
                            React.createElement(P, null, "\u6700\u7EC8\u56FE\u50CF\u7684\u6548\u679C\u8FD8\u662F\u53D6\u51B3\u4E8E\u5F00\u53D1\u8005\u7684 \u201C\u54C1\u5473\u201D\uFF0C\u4E0A\u9762\u8FD9\u51E0\u5F20\u56FE\u8DD1\u4E86\u51E0\u4E2A\u5C0F\u65F6\uFF0C\u6311\u4E86\u5C0F\u4E00\u5343\u5F20 ... ")),
                        React.createElement(P, null, "\u4F30\u8BA1\u5E02\u9762\u4E0A\u7684\u6E38\u620F/\u5E73\u9762\u8BBE\u8BA1\u5E94\u8BE5\u5927\u91CF\u5E94\u7528\u4E86\uFF0C\u8FD9\u4EF6\u4E8B\u7684\u95E8\u69DB\u5C31\u5728\u4E8E\u518D\u672C\u5730\u642D\u4E00\u5957 webui \u7CFB\u7EDF\uFF0C\u5E02\u9762\u4E0A\u7684\u90A3\u4E9B AI \u7ED8\u753B\u5E73\u53F0\u8FD8\u662F\u4E0D\u5982 webui \u597D\u554A\u3002 "),
                        React.createElement(P, null, "EOF")));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
