System.register(['react', 'rally/@@', './bool_x_uint8.png.js', './go-return-err.jpg.js', './adt-drag.js'], (function (exports) {
    'use strict';
    var React, P, H1Block, Numbering, H2, Col, Code, ImgDynamic, Link, metaBeauty, fileBoolXUint8, fileGoReturnErr, ADTDrag;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Numbering = module.Numbering;
            H2 = module.H2;
            Col = module.Col;
            Code = module.Code;
            ImgDynamic = module.ImgDynamic;
            Link = module.Link;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            fileBoolXUint8 = module.default;
        }, function (module) {
            fileGoReturnErr = module.default;
        }, function (module) {
            ADTDrag = module.ADTDrag;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'the-adt-in-ts',
                title: 'TypeScript 里的 ADT',
                author: 'eczn',
                time: new Date('2023-07-25 21:38'),
            }));
            async function initialProps(context) {
                return {
                    fileAdtDrag: await context.readText('./adt-drag.tsx'),
                    fileAdtDragDefine: await context.readText('./adt-drag-define.tsx'),
                };
            }
            const sumTypes = 'Sum Types';
            const proTypes = 'Product Types';
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, { sinking: true }, "\u5982\u679C\u4F60\u662F\u4E00\u4E2A\u5B66\u7F16\u7A0B\u7684\u90A3\u4E48\u51E0\u4E4E\u6BCF\u4E00\u4E2A\u8BED\u8A00\u90FD\u4F1A\u8DDF\u4F60\u63D0 \"\u4EE3\u6570\u6570\u636E\u7C7B\u578B\" (Algebraic Data Types, ADT). \u7F51\u4E0A\u5173\u4E8E ADT \u7684\u8BA8\u8BBA\u4E5F\u662F\u7ECF\u4E45\u4E0D\u8870, \u672C\u6587\u51C6\u5907\u4ECE\u5B9E\u9645\u5F00\u53D1\u4E2D\u63D0\u70BC\u51FA\u6211\u5BF9 ADT \u7684\u7406\u89E3\u4EE5\u53CA\u4E2A\u4EBA\u5B9E\u8DF5\u3002\u6CE8\u610F\u672C\u6587\u8BA8\u8BBA\u7684\u662F Algebraic Data Types \u4EE3\u6570\u6570\u636E\u7C7B\u578B, \u800C\u4E0D\u662F Abstract Data Types \u62BD\u8C61\u6570\u636E\u7C7B\u578B\uFF0C\u4E24\u8005\u90FD\u53EB\u505A ADT \u6CE8\u610F\u533A\u5206"),
                        React.createElement(P, null, "\u518D\u6CE8\u610F, typescript \u5F00\u53D1\u8BF7\u52A1\u5FC5\u5F00\u4E25\u683C\u6A21\u5F0F")),
                    React.createElement(H1Block, { id: "what-is-adt", title: "ADT \u662F\u4EC0\u4E48" },
                        React.createElement(P, null, "\u8BED\u8A00\u5BA3\u79F0\u81EA\u5DF1\u652F\u6301 ADT \u901A\u5E38\u662F\u8BF4\u5B83\u7684\u7C7B\u578B\u7CFB\u7EDF\u80FD\u63D0\u4F9B\u4E24\u79CD\u7C7B\u578B:"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null,
                                "\u548C\u7C7B\u578B, ",
                                sumTypes),
                            React.createElement(P, null,
                                "\u79EF\u7C7B\u578B, ",
                                proTypes)),
                        React.createElement(H2, { id: "ts-sumTypes" },
                            sumTypes,
                            " \u548C\u7C7B\u578B"),
                        React.createElement(Col, { units: [10, 10] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null,
                                    sumTypes,
                                    " \u8981\u6C42\u80FD\u6784\u9020\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B, \u6BD4\u5982\u5728 ts \u91CC enum \u662F ",
                                    sumTypes),
                                React.createElement(P, null, "\u8FD9\u91CC\u58F0\u660E\u7684 enum T1 T2 \u7684\u6210\u5458\u5E76\u4E0D\u662F\u771F\u6B63\u7684 number, \u5728 ts \u91CC\u4ED6\u4EEC\u88AB\u5F53\u505A\u65B0\u7684\u7C7B\u578B\u6765\u5904\u7406\u4E86, \u5C3D\u7BA1\u6700\u540E\u662F\u7F16\u8BD1\u6210 number")),
                            React.createElement(Code, { lang: "tsx", source: `
          // T1 这个类型有一个成员 (取值)
          enum T1 { A, B }
          // T2 这个类型有两个成员 (取值)
          enum T2 { C, D }

          // 会报错, 提示不能比较
          if (T1.A === 123) { }
        ` })),
                        React.createElement(Col, { units: [6, 10] },
                            React.createElement(Code, { lang: "tsx", source: `
          enum MyBoolean {
            _true,
            _false
          }

          enum UInt2 {
            _00,
            _01,
            _10,
            _11
          }
        ` }),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null,
                                    "\u5F88\u591A\u53F8\u7A7A\u89C1\u60EF\u7684\u7C7B\u578B\u672C\u8D28\u4E0A\u6765\u8BF4\u90FD\u53EF\u4EE5\u7528 ",
                                    sumTypes,
                                    " \u53BB\u63CF\u8FF0\u7684, \u5DE6\u4FA7 MyBoolean \u662F boolean \u7684\u4E00\u79CD\u7B49\u4EF7\u63CF\u8FF0\uFF0C\u53EA\u9700\u8981\u5C06\u8BED\u8A00\u5185 if \u5224\u65AD\u6539\u4E3A\u5224\u65AD\u8FD9\u4E2A\u5373\u53EF\u8BA4\u4E3A\u66FF\u4EE3\u4E86 \u201C\u81EA\u5E26\u7684\u5E03\u5C14\u7C7B\u578B\u201D"),
                                React.createElement(P, null, "\u800C\u4E0B\u9762\u8FD9\u4E2A UInt2 \u5219\u5B9A\u4E49\u4E86\u6709 4 \u79CD\u53D6\u503C\u5206\u522B\u4E3A 00 01 10 11 \u7684 enum, \u800C\u4E14\u5947\u5999\u7684\u662F enum \u6700\u540E\u7F16\u8BD1\u4E3A number \u8FD9\u91CC\u7684\u6570\u5B57\u521A\u597D\u548C\u5B9A\u4E49\u662F\u4E00\u6837\u7684, \u56E0\u6B64\u53EF\u4EE5\u5408\u7406\u8BA4\u4E3A\u8FD9\u4E2A\u7C7B\u578B\u53EF\u4EE5\u5B9E\u73B0\u548C\u63CF\u8FF0 Uint2 \u7684\u5404\u79CD\u6027\u8D28 (\u9700\u8981\u7F16\u5199\u5404\u79CD\u51FD\u6570\u6765\u5355\u72EC\u5B9E\u73B0)"))),
                        React.createElement(H2, { id: "ts-proTypes" },
                            proTypes,
                            " \u79EF\u7C7B\u578B"),
                        React.createElement(Col, { units: [10, 10] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null,
                                    proTypes,
                                    " \u8981\u6C42\u80FD\u7EC4\u5408\u5B58\u91CF\u7684\u7C7B\u578B\u6784\u9020\u65B0\u7C7B\u578B, \u5728 ts \u91CC interface \u662F\u4E00\u4E2A\u5178\u578B\u7684 ",
                                    proTypes),
                                React.createElement(P, null,
                                    "\u501F\u52A9\u4E8E ",
                                    proTypes,
                                    " \u80FD\u5C06\u5B58\u91CF\u7684\u7C7B\u578B\u53D6\u503C\u8303\u56F4\u76F8\u4E58\uFF0C\u5373\u53F3\u4FA7 T3 \u6709\u56DB\u79CD\u53D6\u503C\uFF0C\u5206\u522B\u5BF9\u5E94 T1 T2 \u4E24\u4E2A\u6210\u5458\u53D6\u503C\u8303\u56F4\u4E4B\u4E58\u79EF")),
                            React.createElement(Code, { lang: "tsx", source: `
          interface T3 {
            k1: T1
            k2: T2
          }
          // { k1: T1.A, K2: T2.C }
          // { k1: T1.A, K2: T2.D }
          // { k1: T1.B, K2: T2.C }
          // { k1: T1.B, K2: T2.D }
        ` })),
                        React.createElement(P, null,
                            sumTypes,
                            " \u5177\u6709 \u201C\u52A0\u6CD5\u201D \u6027\u8D28\uFF0C\u80FD\u6784\u9020\u65B0\u7C7B\u578B\uFF0C",
                            proTypes,
                            " \u5177\u6709 \u201C\u4E58\u6CD5\u201D \u6027\u8D28\uFF0C\u4E00\u6837\u80FD\u6784\u9020\u65B0\u7C7B\u578B\uFF0C\u8FD9\u4E9B\u4EE3\u6570\u6027\u8D28\u4F7F\u5176\u5F97\u540D \u201C\u4EE3\u6570\u6570\u636E\u7C7B\u578B ADT\u201D"),
                        React.createElement(P, null, "\u9700\u8981\u6CE8\u610F, ts \u7684 enum \u5E76\u4E0D\u7B97\u5B8C\u7F8E\u7684\u548C\u7C7B\u578B, \u5B83\u6709\u4E9B\u9650\u5236, \u6BD4\u5982\u65E0\u6CD5\u5D4C\u5957\uFF1B\u540C\u6837 interface \u4E5F\u4E0D\u662F\u5B8C\u7F8E\u7684\u79EF\u7C7B\u578B, \u56E0\u4E3A\u5728 ts \u91CC\u53EA\u8981\u957F\u5F97\u4E00\u6837\u7684\u5BF9\u8C61\u7C7B\u578B\u90FD\u5F53\u6210\u662F\u4E00\u6837\u7684, \u8FD9\u4E5F\u662F\u7F51\u4E0A\u5404\u79CD\u8BBA\u6218\u7684\u539F\u56E0, ADT \u662F\u597D\u4E1C\u897F, \u4F46\u662F\u5404\u79CD\u8BED\u8A00\u5BF9\u5176\u652F\u6301\u7A0B\u5EA6\u662F\u4E0D\u4E00\u6837\u7684")),
                    React.createElement(H1Block, { id: "sumTypes-and-proTypes", title: "\u901A\u8FC7 ADT \u6784\u5EFA\u590D\u6742\u4E16\u754C\u7684\u62BD\u8C61" },
                        React.createElement(P, null, "\u5BF9\u4E8E js/ts \u5F00\u53D1\u6765\u8BF4, \u5F88\u5C11\u9700\u8981\u81EA\u5DF1\u6784\u5EFA\u4E00\u79CD\u65B0\u7684\u7C7B\u578B, \u56E0\u4E3A\u81EA\u5E26\u7684 number / boolean \u8FD9\u4E9B\u5DF2\u7ECF\u80FD\u8986\u76D6\u5F88\u591A\u573A\u666F\u4E86, \u53CD\u8FC7\u6765\u79EF\u7C7B\u578B\u7528\u7684\u5F88\u591A, \u6BD4\u5982\u7528 interface \u53BB\u6784\u9020\u5BF9\u8C61\u63CF\u8FF0, \u5176\u5B9E\u5C31\u662F\u79EF\u7C7B\u578B\u7684\u4E00\u79CD\u5E94\u7528, \u4E0B\u9762\u4EE5\u4E00\u4E2A\u6574\u6570\u6EA2\u51FA\u7684\u4F8B\u5B50\u6765\u8BF4\u660E ADT \u600E\u6837\u7528\u6765\u6784\u9020\u590D\u6742\u62BD\u8C61"),
                        React.createElement(P, null, "\u9700\u8981\u5047\u8BBE\u672A\u6765 js/ts \u63D0\u4F9B\u4E86 Uint8 \u7C7B\u578B, \u5B83\u7684\u53D6\u503C\u8303\u56F4\u662F [0,255] \u7684\u6574\u6570, \u73B0\u5728\u6709\u4E2A\u95EE\u9898\u6C42\u89E3\u8FC7\u7A0B\u9700\u8981\u7528\u5230 [-255, 255] \u7684\u8303\u56F4, \u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u5408 interface \u7EC4\u5408 Uint8 \u6765\u5B9E\u73B0\u63CF\u8FF0 [-255,255] \u7684\u7C7B\u578B\u63CF\u8FF0 MyInt:"),
                        React.createElement(Col, { units: [8, 10] },
                            React.createElement(Code, { lang: "tsx", source: `
          interface MyInt {
            sign: boolean
            value: UInt8
          }
        ` }),
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "sign \u4EE3\u8868\u6B63\u8D1F\u7B26\u53F7, value \u4EE3\u8868 0-255 \u53D6\u503C"),
                                React.createElement(P, null,
                                    "\u6240\u4EE5 MyInt \u53D6\u503C\u8303\u56F4 2 * 256 - 1 = 511 ",
                                    React.createElement("br", null),
                                    "(\u4E24\u4E2A\u533A\u95F4\u4E00\u4E00\u5BF9\u5E94\u7684\u8BDD 0 \u4F1A\u591A\u7B97\u4E00\u6B21, \u6240\u4EE5-1)"))),
                        React.createElement(ImgDynamic, { file: fileBoolXUint8 }),
                        React.createElement(P, null, "\u6839\u636E interface \u7684\u79EF\u7C7B\u578B\u6027\u8D28, MyInt \u7684\u53D6\u503C\u8303\u56F4\u5F97\u5230\u4E86\u6269\u5927, \u4F7F\u5176\u80FD\u6EE1\u8DB3\u573A\u666F\u9700\u6C42\uFF0C\u63A5\u4E0B\u6765\u6839\u636E\u573A\u666F\u5B9E\u73B0\u5404\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u5C31\u80FD\u8FBE\u5230\u62BD\u8C61\u76EE\u7684\u3002"),
                        React.createElement(Code, { lang: "tsx", source: `
        class MyInt implement MyInt {
          // 加法
          add(val: number | MyInt): MyInt {}
          // 转字符串
          toString() {}
          // ... 其他实现
        }
      ` })),
                    React.createElement(H1Block, { id: "ts-sum-proTypes", title: "TS \u91CC ADT \u5B9E\u8DF5" },
                        React.createElement(P, null, "\u518D\u4E3E\u4E00\u4F8B\uFF0C\u5982\u679C\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u5DE6\u53F3\u62D6\u62FD Drag \u7EC4\u4EF6\uFF0C\u9996\u5148\u9700\u8981\u5B9A\u4E49\u62D6\u62FD touchStart \u7684\u521D\u59CB\u4F4D\u7F6E, \u518D\u7136\u540E\u662F\u5B9A\u4E49\u62D6\u62FD\u7684\u4F4D\u79FB\u4EE5\u53CA 2d \u7684\u4F4D\u79FB\u548C\u62D6\u62FD\u7684\u65B9\u5411\uFF0C\u4E00\u4E2A\u53EF\u80FD\u7684\u5B9A\u4E49\u662F\u8FD9\u6837\u7684\uFF1A"),
                        React.createElement(Code, { lang: "tsx", source: `
        interface DragState {
          // 描述当前是否在拖拽中 (比如 touchStart 的时候设置为 true)
          isInDragging: boolean
          // touchStart 的初始坐标轴位置
          start?: [number, number]
          // touchMove 计算两个坐标轴拖拽的位移
          translation2D?: [number, number]
          // 拖拽的方向 (string 为 Left Right Down Up 这些)
          direction2D?: [string, string]
        }
      ` }),
                        React.createElement(P, null, "\u8FD9\u4E2A\u5B9A\u4E49\u770B\u4E0A\u53BB\u597D\u50CF\u8FD8 OK \u80FD\u6B63\u786E\u63CF\u8FF0\u8FD9\u4E9B\u4E8B\uFF0C\u5B9E\u9645\u4E0A\u5B83\u662F\u4E0D\u9760\u8C31\u7684\uFF0C\u6BD4\u5982 isInDragging=true \u7684\u65F6\u5019, start \u5B57\u6BB5\u4F9D\u7136\u53EF\u80FD\u662F\u53EF\u9009\u7684, \u5176\u4ED6\u5B57\u6BB5\u4E5F\u662F\u7C7B\u4F3C, \u8FD9\u4F1A\u5BFC\u81F4\u4EE3\u7801\u91CC\u4E00\u5768\u4E00\u5768\u7684 if \u6216\u8005 ? \u53EF\u9009\u94FE\u6216\u8005 ! \u65AD\u8A00"),
                        React.createElement(P, null, "\u5BF9\u4E8E\u7C7B\u578B\u62BD\u8C61\uFF0C\u5B83\u7684\u53D6\u503C\u8303\u56F4\u5E94\u8BE5\u521A\u597D\u5BF9\u5E94\u4E1A\u52A1\u7684\u5168\u90E8\u53EF\u80FD\u6027\uFF0C\u4E0D\u80FD\u6709\u591A\u4E0D\u80FD\u6709\u5C11\uFF0C\u5426\u5219\u4E0D\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u8BDD\u5F88\u96BE\u8C03\u8BD5\u548C\u7EF4\u62A4\u3002"),
                        React.createElement(Col, { units: [10, 13] },
                            React.createElement(React.Fragment, null,
                                React.createElement(P, null, "ADT \u8D4B\u4E88\u4E86\u6211\u4EEC\u4ECE\u96F6\u6784\u9020\u65B0\u7C7B\u578B\u7684\u80FD\u529B\uFF0C\u57FA\u4E8E\u8FD9\u4E2A\u65B9\u5411\u91CD\u65B0\u8BBE\u8BA1\u7684\u7C7B\u578B\u62BD\u8C61\u5927\u6982\u957F\u6210\u53F3\u8FB9\u90A3\u4E2A\u6837\u5B50"),
                                React.createElement(P, null, "\u6309\u8FD9\u79CD\u601D\u8DEF\u53EF\u4EE5\u505A\u5230\u4E00\u4E00\u5BF9\u5E94, \u8FDB\u4E00\u6B65\u5B8C\u5584\u53EF\u4EE5\u5F97\u5230\u4E0B\u9762\u7684\u5B8C\u6574\u5B9A\u4E49")),
                            React.createElement(Code, { lang: "tsx", source: `
          type DragState = "不活跃" | {
            type: "活跃中"
            // 不是可选的 是确定的
            start: [number, number]
            ... 其他字段
          }
        ` })),
                        React.createElement(Code, { lang: "tsx", source: props.fileAdtDragDefine }),
                        React.createElement(P, null, "\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u9762\u8FD9\u4E2A\u7C7B\u578B\u5B9A\u4E49\u7684\u98CE\u683C\u5F88\u50CF React Redux Action \u7684\u7C7B\u578B\uFF0C\u8FD9\u79CD\u7C7B\u578B\u5B66\u672F\u4E0A\u79F0\u547C\u4E3A tagged-union-types, \u7B80\u5355\u7406\u89E3\u5C31\u662F\u5E26\u540D\u5B57\u7684 union-types, \u7CFB\u901A\u8FC7\u552F\u4E00 type \u5B57\u9762\u91CF\u6765\u4FDD\u8BC1\u662F\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B, \u662F\u4E00\u79CD\u5BF9\u7ED3\u6784\u5316\u7C7B\u578B\u7684\u59A5\u534F"),
                        React.createElement(P, null,
                            "\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5229\u7528 union-types \u5B9E\u73B0 ",
                            sumTypes,
                            " \u6784\u9020\u65B0\u7C7B\u578B\u7684\u7279\u6027\uFF0C\u5173\u952E\u5728\u4E8E\u5F15\u5165\u4E00\u4E2A\u5B57\u9762\u91CF type \u4F7F\u5F97 interface \u53D8\u5F97\u552F\u4E00"),
                        React.createElement(P, null, "\u4E0B\u9762\u662F\u57FA\u4E8E\u4E0A\u9762\u7684\u5B9A\u4E49\u5B9E\u73B0\u7684\u62D6\u62FD demo, \u53EF\u4EE5\u73A9\u4E0B (\u79FB\u52A8\u7AEF\u62D6\u62FD\u4F53\u9A8C\u53EF\u80FD\u5DEE\u4E00\u70B9, demo \u6027\u8D28\u61D2\u5F97\u5F04 passive event \u4E4B\u7C7B\u7684)"),
                        React.createElement(ADTDrag, null),
                        React.createElement("details", null,
                            React.createElement("summary", null,
                                React.createElement(P, { style: { display: 'inline-block' } }, "\u5B8C\u6574\u5B9E\u73B0\u5982\u4E0B\uFF0C\u5DF2\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00")),
                            React.createElement(Code, { lang: "tsx", source: props.fileAdtDrag })),
                        React.createElement(P, null, "\u770B\u5230\u8FD9\u91CC\u4F60\u4F1A\u55B7\u6211, md eczn \u8FD9\u5957\u5B9A\u4E49\u4EE3\u7801\u91CF\u53D8\u591A\u4E86\u4E0D\u5C11\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u8FD9\u4E2A DragState \u53EA\u6709\u4E24\u79CD\u53D6\u503C\uFF0C\u4E0D\u6D3B\u8DC3\u548C\u6D3B\u8DC3\uFF0C\u5BF9\u5E94\u7740\u4E24\u4E2A\u786E\u5B9A\u7684\u6CA1\u6709\u5E26\u95EE\u53F7\u7684\u53D6\u503C"),
                        React.createElement(P, null, "\u4F46\u662F\u5BF9\u4E8E\u4E00\u5F00\u59CB\u90A3\u4E2A\u4E0D\u5B8C\u5907\u7684\u5E26\u597D\u591A\u4E2A\u95EE\u53F7\u7684 interface, \u7531\u4E8E\u95EE\u53F7\u8F83\u591A\u5176\u53D6\u503C\u53EF\u80FD\u6027\u662F 2\\*2\\*2\\*2 \u5341\u516D\u79CD, \u800C\u771F\u5B9E\u7684\u4E1A\u52A1\u72B6\u6001\u4E5F\u53EA\u6709\u4E24\u79CD, \u4E8E\u662F\u5982\u679C\u4F60\u4F7F\u7528\u90A3\u4E2A\u4E0D\u5B8C\u5907\u7684\u5B9A\u4E49\u6765\u5199\u7EC4\u4EF6\u7684\u8BDD\u90A3\u4E48\u4F60\u5199\u4EE3\u7801\u5F97\u5904\u5904\u63D0\u9632\u903B\u8F91\u843D\u5165\u5230\u65E0\u6548\u72B6\u6001\u4E2D\uFF0C\u5177\u4F53\u4F60\u53EF\u4EE5\u770B\u6211\u8FD9\u4E2A\u5B9E\u73B0\u91CC\u5176\u5B9E\u6CA1\u6709\u5404\u79CD if \u515C\u5E95, \u5149\u770B\u4EE3\u7801\u5C31\u80FD\u9884\u6D4B\u8F6F\u4EF6\u8FD0\u884C\u7ED3\u679C\u4E86"),
                        React.createElement(P, null, "\u5B9E\u9645\u4E0A\uFF0C\u4E3B\u8981\u662F ts \u7684 ADT tagged-union-types \u6CA1\u6709\u7CD6, \u770B\u770B\u76F8\u540C\u7684\u7684\u5B9A\u4E49\u4E0B swift \u7684\u58F0\u660E\u548C\u5904\u7406\u662F\u600E\u6837\u7684\u5427"),
                        React.createElement(Code, { lang: "swift", source: `
        enum DragState {
          // 不活跃 
          case inactive
          // 活跃中, 关联两个值 start 和 translation
          // CGPoint, CGSize 是内置的坐标类型 可以用来描述点和位移
          case dragging(start: CGPoint, translation: CGSize)
        }

        func printState(state: DragState) {
          switch state {
            // 因为 state 类型是确定的所以这里可以缩写 .inative
            case .inative:
              print("不活跃")
            // 匹配到拖拽中, 并将关联的两个值存储到变量中 
            case .dragging(let myStart, let myTranslation)
              print("拖拽中", myStart, myTranslation)
          }
        }
      ` })),
                    React.createElement(H1Block, { id: "importantce-of-adt", title: "ADT \u7684\u91CD\u8981\u6027" },
                        React.createElement(P, null, "\u4E16\u754C\u4E0A\u5927\u591A\u6570\u8BED\u8A00\u90FD\u5BA3\u79F0\u81EA\u5DF1\u652F\u6301 ADT, \u4F46\u4ECE\u5B9E\u8DF5\u6765\u770B\u4E0D\u540C\u8BED\u8A00\u91CC\u5BF9 ADT \u7684\u652F\u6301\u7A0B\u5EA6\u5E76\u4E0D\u4E00\u6837, \u8FD9\u6700\u7EC8\u4F1A\u51B3\u5B9A\u5199\u4EE3\u7801\u7684\u62BD\u8C61\u7A0B\u5EA6\u548C\u6B63\u786E\u6027, ADT \u652F\u6301\u597D\u7684\u8BED\u8A00\u6700\u540E\u7684\u4EE3\u7801\u62BD\u8C61\u9AD8, \u7EF4\u62A4\u66F4\u65B9\u4FBF\u3002"),
                        React.createElement(P, null, "\u53CD\u8FC7\u6765\u5219\u53EF\u80FD\u9700\u8981\u4E0D\u65AD\u8DDF\u5E95\u5C42\u5B58\u50A8\u6253\u4EA4\u9053, \u6BD4\u5982 C \u8BED\u8A00\u4E2D\u7684 ADT \u652F\u6301\u5C31\u4E0D\u7B97\u975E\u5E38\u5B8C\u5584, \u5BFC\u81F4\u5F88\u591A\u65F6\u5019\u8981\u63BA\u5408\u7C7B\u578B\u7684\u5E95\u5C42\u5B58\u50A8\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u8BED\u8A00\u91CC\u5404\u79CD\u7279\u6027\u90FD\u7A7F\u63D2\u7740 ADT \u7684\u601D\u60F3\u5149\u8F89\uFF0C\u4E0B\u9762\u4EE5\u51E0\u4E2A\u7279\u6027\u4E3E\u4F8B"),
                        React.createElement(H2, { id: "ts-null-safty" }, "\u7A7A\u503C\u548C\u7A7A\u5B89\u5168"),
                        React.createElement(P, null, "\u7A7A\u5B89\u5168\u662F\u5178\u578B\u7684\u548C\u7C7B\u578B\u8BBE\u8BA1\uFF0C\u5728 ts \u91CC\u53EF\u9009\u7684\u503C\u5B9E\u9645\u4E0A\u7B49\u4EF7\u4E8E\u4E0B\u9762\u8FD9\u4E2A\u6CDB\u578B\u63CF\u8FF0"),
                        React.createElement(Code, { lang: "tsx", source: `
        type Maybe<T> = null | undefined | T
      ` }),
                        React.createElement(P, null,
                            "\u7136\u540E\u518D\u914D\u5408 ? \u53EF\u9009\u94FE\u8BED\u6CD5\u7CD6\u6765\u5904\u7406\u5F62\u5982 ",
                            "Maybe<T>",
                            " \u7684\u7C7B\u578B\u4ECE\u800C\u4F7F\u5F97\u5927\u90E8\u5206\u53EF\u9009\u573A\u666F\u53D8\u5F97\u7B80\u6D01\u6613\u61C2"),
                        React.createElement(H2, { id: "ts-object" }, "\u5BF9\u8C61"),
                        React.createElement(P, null, "\u5178\u578B\u7684\u79EF\u7C7B\u578B\u8BBE\u8BA1, \u589E\u52A0\u5B57\u6BB5\u6765\u63D0\u5347\u5BF9\u8C61\u7684\u53D6\u503C\u8303\u56F4\u6765\u5B9E\u73B0\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u590D\u6742\u62BD\u8C61"),
                        React.createElement(Code, { lang: "tsx", source: `
        interface Person {
          name: string
          age: number
        }
      ` }),
                        React.createElement(H2, { id: "ts-enum" }, "enum"),
                        React.createElement(P, null, "\u548C\u7C7B\u578B\u8BBE\u8BA1\uFF0C\u80FD\u5B9A\u4E49\u51FA\u65B0\u7684\u7C7B\u578B\u53CA\u5176\u6210\u5458"),
                        React.createElement(Code, { lang: "tsx", source: `
        enum AppColor {
          Primary,
          Black,
          Error,
        }
      ` }),
                        React.createElement(H2, { id: "union-types" }, "Union Types"),
                        React.createElement(P, null, "\u548C\u7C7B\u578B\u8BBE\u8BA1\uFF0C\u80FD\u5B9A\u4E49\u51FA\u65B0\u7684\u7C7B\u578B\u53CA\u5176\u6210\u5458, \u4F46\u662F\u9700\u8981\u6CE8\u610F ts \u7531\u4E8E\u5BF9\u8C61\u5316\u7C7B\u578B\u7684\u539F\u56E0\uFF0C\u8FD9\u4E2A\u8BBE\u8BA1\u4E0D\u80FD\u7B97\u4E25\u683C\u7684\u65B0\u7C7B\u578B\uFF0C\u9664\u975E\u4F60\u4F7F\u7528 tagged union types \u90A3\u6837\u52A0\u4E00\u4E2A\u552F\u4E00 type \u5B57\u9762\u91CF\u6807\u8BB0"),
                        React.createElement(Code, { lang: "tsx", source: `
        type Colors = "RED" | "GREEN" | "BLUE"
      ` }),
                        React.createElement(H2, { id: "go-return" }, "\u4E3A\u4EC0\u4E48\u8981\u55B7 Go"),
                        React.createElement(P, null, "\u6211\u4EEC\u90FD\u77E5\u9053 go \u6CA1\u6709\u63D0\u4F9B try-catch \u5176\u9519\u8BEF\u5904\u7406\u662F\u901A\u8FC7\u591A\u503C\u8FD4\u56DE\u7684\u5F62\u5F0F\u641E\u7684, \u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u9664\u6CD5\u7684\u4F8B\u5B50"),
                        React.createElement(Code, { lang: "go", source: `
        func divide(a float64, b float64) (float64, error) {
          if b == 0 {
            return 0, errors.New("除 0 错误")
          }
          return a / b, nil
        }

        func main() {
          result, err := divide(10, 2)
          if err != nil {
            fmt.Println("Error:", err)
          } else {
            fmt.Println("Result:", result)
          }
        }
      ` }),
                        React.createElement(P, null, "\u7531\u4E8E\u8FD9\u4E2A\u7ECF\u5178\u7279\u6027\uFF0C\u5BFC\u81F4\u62A5\u9519\u7684\u5730\u65B9\u8981\u5404\u79CD\u5224\u65AD err \u662F\u4E0D\u662F\u4E3A\u7A7A\u503C, \u4E8E\u662F\u6709\u4E86\u4E0B\u9762\u8FD9\u5F20\u7ECF\u5178\u8001\u6897"),
                        React.createElement(ImgDynamic, { file: fileGoReturnErr }),
                        React.createElement(P, null, "\u9664\u4E86 try-catch \u7684\u95EE\u9898\uFF0C\u6700\u8BE5\u55B7\u7684\u5E94\u8BE5\u662F go \u7684\u8FD9\u4E2A\u591A\u503C\u8FD4\u56DE\u662F\u4E00\u4E2A\u79EF\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD4\u56DE\u7684 (T, Err) \u8FD9\u4E2A\u591A\u503C\u6709\u56DB\u79CD\u53EF\u80FD\u6027\u5206\u522B\u662F"),
                        React.createElement(Numbering, null,
                            React.createElement(P, null, "\u6B63\u5E38\u8FD4\u56DE: (T, nil) "),
                            React.createElement(P, null, "\u5F02\u5E38\u8FD4\u56DE: (nil, Err)"),
                            React.createElement(P, null, "\u672A\u77E5\u8FD4\u56DE: (nil, nil)"),
                            React.createElement(P, null, "\u672A\u77E5\u8FD4\u56DE: (T, Err)")),
                        React.createElement(P, null, "\u6211\u4EEC\u5B9E\u9645\u671F\u671B\u8FD4\u56DE\u7684\u662F\u79EF\u7C7B\u578B\u7684\u4E24\u79CD, \u4E5F\u5C31\u662F \"null | T\", \u5199\u8FC7 ts \u7684\u4F60\u5E94\u8BE5\u61C2\u8FD9\u6BB5\u4EE3\u7801\u7684 result \u591A\u6076\u5FC3\u4EBA\u5427:"),
                        React.createElement(Code, { lang: "tsx", source: `
        function divide(a: number, b: number): [number?, Error?] {
          if (b === 0) return [undefined, new Error("除 0 错误")]
          return [a / b, undefined]
        }
        const result = divide(123, 0)
        // result 类型是 [number?, Error?] 有四种取值可能性 ...
      ` }),
                        React.createElement(P, null, "\u9664\u6CD5\u7684\u4F8B\u5B50\u867D\u7136\u4E0D\u592A\u53EF\u80FD\u5199\u51FA\u4E0A\u9762 3 \u548C 4 \u7684\u4E24\u79CD\u60C5\u51B5\uFF0C\u4F46\u662F\u8F6F\u4EF6\u662F\u590D\u6742\u7684\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u5199\u51FA\u4E1A\u52A1\u4E0D\u53EF\u80FD\u51FA\u73B0\u7684\u7C7B\u578B\uFF0C\u4E00\u65E6\u5199\u51FA\u6765\u8F6F\u4EF6\u8FD0\u884C\u5C31\u6709\u53EF\u80FD\u843D\u5165\u672A\u5B9A\u4E49\u7684\u9519\u8BEF\u72B6\u6001\u5BFC\u81F4\u5404\u79CD\u6076\u5FC3\u4EBA\u7684\u515C\u5E95\u5224\u65AD\u4E86\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u8981\u7206\u55B7 go \u7684\u539F\u56E0\u4E86"),
                        React.createElement(H2, { id: "ts-null-undefined" }, "null undefined"),
                        React.createElement(P, null, "js/ts \u7C7B\u4F3C go \u90A3\u6837\u503C\u5F97\u7206\u55B7\u7684 ADT \u8BBE\u8BA1\u9519\u8BEF\u5C31\u662F null undefined \u4E24\u4E2A\u7A7A\u503C\u7684\u95EE\u9898\uFF0C\u5B83\u4F1A\u5BFC\u81F4\u7C7B\u578B\u51FA\u73B0\u66F4\u5927\u7684\u53D6\u503C\u8303\u56F4\uFF0C\u5BFC\u81F4\u6709\u65F6\u5019\u4F60\u751A\u81F3\u8981\u4E25\u683C\u533A\u5206 undefined \u548C null \u3002\u3002\u3002\u5199\u8FC7\u524D\u7AEF\u7684\u4F60\u5E94\u8BE5\u61C2\u7684\u5427, \u4E0B\u9762 Obj \u5B9E\u9645\u4E0A\u76F8\u5F53\u590D\u6742:"),
                        React.createElement(Code, { lang: "tsx", source: `
        interface Obj {
          value?: number | null
        }
        // 1. { value: undefined }
        // 2. { value: null }
        // 3. { value: 3.1415926 }
        // 4. { value: 其他值 } 可能不是数字 ts 无法保证, 有的人喜欢 any

        // 有可能 1 和 2 两个对应的状态含义不是一样的... 于是:
        if (obj.value === undeinfed) {}
        else if (obj.value === null) {}
        else if (typeof obj.value === 'number' ) {}
        else {}
      ` })),
                    React.createElement(H1Block, { id: "pl-adt-supports", title: "\u8BC4\u4F30\u8BED\u8A00\u7684 ADT" },
                        React.createElement(P, null, "\u80FD\u575A\u6301\u770B\u5230\u8FD9\u91CC\u8BF4\u660E\u4F60\u5927\u6982\u4E5F\u660E\u767D\u4E86 ADT \u662F\u4EC0\u4E48\u4EE5\u53CA\u91CD\u8981\u6027\u4E86\u5427\uFF0C\u90A3\u4E48\u5982\u4F55\u8BC4\u4F30\u8BED\u8A00\u5BF9 ADT \u652F\u6301\u7A0B\u5EA6\u5462? \u53EF\u4EE5\u53C2\u8003\u4E0D\u540C\u8BED\u8A00\u91CC\u5BF9\u4E8C\u53C9\u6811\u7684\u5B9E\u73B0\uFF0C\u5B83\u53C8\u6709\u5B57\u6BB5\u53C8\u6709\u9012\u5F52\uFF0C\u8FD8\u6709\u7A7A\u6811\u7684\u60C5\u51B5\uFF0C\u8FD9\u79CD\u7ED3\u6784\u975E\u5E38\u9002\u5408\u4F5C\u4E3A\u8BC4\u4F30 ADT \u62BD\u8C61\u80FD\u529B\u7684\u624B\u6BB5\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u770B\u5927\u5BB6\u5982\u4F55\u7206\u55B7\u5404\u79CD\u8BED\u8A00\u6765\u8BC4\u4F30\u3002"),
                        React.createElement(H2, { id: "haskell-adt" }, "Haskell"),
                        React.createElement(P, null, "\u5B8C\u7F8E\uFF1A\u4F53\u73B0\u51FA\u7A7A\u6811\u3001\u5B50\u6811\u3001\u6CDB\u578B\u7B49\u7279\u5F81\uFF0C\u8D5E\u7F8E Haskell"),
                        React.createElement(Code, { lang: "haskell", source: `
        data Tree a =
            Empty
          | Node a (Tree a) (Tree a)
      ` }),
                        React.createElement(H2, { id: "swift-adt" }, "Swift"),
                        React.createElement(P, null, "\u5F88\u597D\uFF1A\u5F62\u5F0F\u4E0A\u8DDF Haskell \u50CF, \u4F53\u73B0\u51FA\u7A7A\u6811\u3001\u5B50\u6811\u3001\u6CDB\u578B\u7B49\u7279\u5F81, \u4F46\u662F\u9012\u5F52\u7684\u65F6\u5019\u8981\u5355\u72EC\u7ED9\u4E00\u4E2A indirect \u58F0\u660E\u5C31\u6709\u70B9\u5C0F\u6B8B\u5FF5"),
                        React.createElement(Code, { lang: "swift", source: `
        enum Tree<T> {
          case empty
          indirect case node(T, Tree, Tree)
        }
      ` }),
                        React.createElement(H2, { id: "kotlin-adt" }, "Kotlin"),
                        React.createElement(P, null, "\u8F83\u597D\uFF1A\u4F53\u73B0\u51FA\u7A7A\u6811\u3001\u5B50\u6811\u3001\u6CDB\u578B\u7B49\u7279\u5F81, \u4E0D\u8FC7\u503C\u5F97\u5410\u69FD\u7684\u662F kotlin \u7C7B\u578B\u8FD9\u5757\u611F\u89C9\u4E0D\u5982 Swift"),
                        React.createElement(P, null, "\u4ECE\u4E8C\u53C9\u6811\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA, \u8FD9\u662F class \u58F0\u660E, \u5E76\u4E0D\u662F\u4E00\u79CD\u62BD\u8C61\u7684\u903B\u8F91\u7ED3\u6784"),
                        React.createElement(Code, { lang: "kotlin", source: `
        sealed class Tree<T> {
          data class Node<T>(
            val value: T,
            val left: Tree<T>?,
            val right: Tree<T>?
          ) : Tree<T>()
        }
      ` }),
                        React.createElement(H2, { id: "ts-adt" }, "TypeScript"),
                        React.createElement(P, null, "\u8F83\u597D\uFF1A\u4F53\u73B0\u51FA\u7A7A\u6811\u3001\u5B50\u6811\u3001\u6CDB\u578B\u7B49\u7279\u5F81, \u770B\u7740\u867D\u7136\u597D\u5B9E\u9645\u4E0A\u957F\u5F97\u50CF\u8FD9\u4E2A\u7684\u5C31\u662F\u4E8C\u53C9\u6811, \u8FD9\u662F\u7ED3\u6784\u5316\u7C7B\u578B\u7684\u75DB, \u4E0D\u5F97\u4E0D\u54C1\u5C1D, \u5982\u679C\u52A0\u4E2A type:\"XXX_TREE\" \u7684\u5B57\u6BB5\u63CF\u8FF0\u5C31\u591F sum \u4E86\u4E0D\u8FC7\u6709\u70B9\u8822, \u53E6\u5916\u4E5F\u6709\u7C7B\u4F3C kotlin \u7684\u95EE\u9898\uFF0C\u9700\u8981\u4E00\u4E2A\u7C7B\u6216\u5BF9\u8C61\u6765\u627F\u8F7D\u6811\u7ED3\u6784\uFF0C\u800C\u4E0D\u662F\u50CF swift haskell \u90A3\u6837\u662F\u4E00\u4E2A\u903B\u8F91\u7ED3\u6784"),
                        React.createElement(Code, { lang: "ts", source: `
        type Tree<T> =
          | null
          | { value: T, left: Tree<T>, right: Tree<T> }
      ` }),
                        React.createElement(H2, { id: "golang-adt" }, "Go"),
                        React.createElement(P, null, "\u4E00\u822C \u6CA1\u6709\u7A7A\u6811, \u6CDB\u578B, \u4F7F\u7528\u4E0A\u5927\u6982\u7387\u5F88\u86CB\u75BC\u7684 (\u65B0\u7248 go \u7EC8\u4E8E\u6709\u6CDB\u578B\u4E86)"),
                        React.createElement(Code, { lang: "go", source: `
        type Tree struct {
            Value int
            Left  *Tree
            Right *Tree
        }
      ` }),
                        React.createElement(H2, { id: "java-adt" }, "Java"),
                        React.createElement(P, null, "\u4E00\u822C\uFF1A\u6CA1\u6709\u7A7A\u6811, \u6CDB\u578B, \u800C\u4E14\u4F3C\u4E4E\u6CA1\u6709\u529E\u6CD5\u5355\u72EC\u58F0\u660E\u7C7B\u578B\uFF0C\u5FC5\u987B\u5F97\u8DDF class \u8D70"),
                        React.createElement(Code, { lang: "java", source: `
        class TreeNode<T> {
            T val;
            TreeNode<T> left;
            TreeNode<T> right;
            TreeNode(T val) {
                this.val = val;
                this.left = null;
                this.right = null;
            }
        }
      ` }),
                        React.createElement(H2, { id: "brainfuck-adt" }, "Brainfuck"),
                        React.createElement(P, null, "\u7CDF\u7CD5: GPT \u624D\u80FD\u638C\u63E1\u7684\u8BED\u8A00"),
                        React.createElement(Code, { lang: "brainfuck", source: `
        +++++[>++++[>++++<-]<-] # 声明根节点的值为5

        >+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++. # 在根节点的右节点上存储9
        
        <+++++[-<++++++>]<. # 在根节点的左节点上存储7
        
        >>+++++++++++++++++++++++++++++++++++++++++. # 在右节点的左节点上存储17
        
        <<+++++++++++. # 在左节点的左节点上存储13
        
        >>+. # 在右节点的右节点上存储18

        # 上述这段代码描述了这颗树
              5 
            /   \\ 
           13    9 
                / \\ 
               17  18 
      ` })),
                    React.createElement(H1Block, { id: "links", title: "\u53C2\u8003" },
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://en.wikipedia.org/wiki/Algebraic_data_type" }, "Wiki: Algebraic data type, ADT")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://javascript.plainenglish.io/tagged-union-types-in-typescript-leveraging-type-safety-and-flexibility-be0e60145815" }, "Tagged Union Types in TypeScript")),
                        React.createElement(P, null,
                            React.createElement(Link, { block: true, href: "https://swiftgg.gitbook.io/swift/" }, "SwiftGG: \u4E2D\u6587\u7248 Apple \u5B98\u65B9 Swift \u6559\u7A0B"))));
            });

        })
    };
}));
