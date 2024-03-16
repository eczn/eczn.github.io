System.register(['react', 'rally/@@', './gravity.js'], (function (exports) {
    'use strict';
    var React, P, WindowApp, H1Block, Code, H1, metaBeauty, Gravity;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            WindowApp = module.WindowApp;
            H1Block = module.H1Block;
            Code = module.Code;
            H1 = module.H1;
            metaBeauty = module.metaBeauty;
        }, function (module) {
            Gravity = module.Gravity;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'three-body-emulator',
                title: '三体运动模拟器',
                time: new Date('2021-06-16 18:33'),
                author: 'eczn',
            }));
            async function initialProps(context) {
                return {
                    codePointStatic: await context.readText('./point-static.ts'),
                    codePoint: await context.readText('./point.ts'),
                    codeGravity: await context.readText('./gravity.ts'),
                };
            }
            const W = 320;
            const H = 300;
            const initialPoints = () => [
                {
                    x: 150.0, y: 80.0, m: 100,
                    dx: 6, dy: 0,
                },
                {
                    x: 150.0, y: 150.0, m: 100,
                    dx: -6, dy: 0,
                },
                {
                    x: 150.0, y: 200.0, m: 100,
                    dx: 0, dy: 0,
                },
            ];
            const globalGravity = new Gravity({
                g: 30,
                points: initialPoints(),
            });
            const playgroundGravity = new Gravity({
                g: 30,
                points: initialPoints(),
            });
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "\u4E09\u4F53\u8FD0\u52A8\u6CA1\u6709\u89E3\u6790\u89E3\uFF0C\u8FD9\u79CD\u9075\u5FAA\u7269\u7406\u5B9A\u5F8B\u7684\u6DF7\u6C8C\u8FD0\u52A8\u5F88\u9002\u5408\u7528\u6765\u505A\u5C4F\u4FDD\uFF0C\u5982:"),
                    React.createElement(WindowApp, { height: H }, React.createElement("canvas", { style: { display: 'block', margin: '0 auto' }, width: W, height: H, ref: node => {
                            if (!node)
                                return;
                            globalGravity.setDom(node);
                            globalGravity.start();
                        } })),
                    React.createElement(H1Block, { id: "point", title: "\u8D28\u70B9" },
                        React.createElement(P, null, "\u5C06\u661F\u7403\u8FD0\u52A8\u7B80\u5316\u4E3A\u8D28\u70B9\uFF0C\u6709\u4E8C\u7EF4\u5750\u6807\u53CA\u901F\u5EA6\u5411\u91CF\uFF0C\u6700\u540E\u52A0\u4E0A\u5176\u8D28\u91CF:"),
                        React.createElement(Code, { lang: "tsx", source: props.codePointStatic }),
                        React.createElement(H1, { id: "position" }, "\u901F\u5EA6\u5BF9\u5750\u6807, \u5F15\u529B\u5BF9\u901F\u5EA6"),
                        React.createElement(P, null, "\u901F\u5EA6\u5BF9\u5750\u6807\u7684\u5F71\u54CD\u6BD4\u8F83\u5BB9\u6613\u5904\u7406\u5C06\u4E0A\u9762\u7684\u5B9A\u4E49\u7684 PointStatic \u7ED3\u6784\u8FDB\u884C (p.x += p.dx) \u5373\u53EF, \u800C\u5F15\u529B\u5BF9\u901F\u5EA6\u7684\u5F71\u54CD, \u5219\u8981\u8BA1\u7B97\u52A0\u901F\u5EA6 (f = ma) \u4EE5\u53CA\u5C55\u5F00\u540E\u5728\u4E8C\u7EF4\u4E0A\u7684\u5206\u91CF\u8FDB\u884C\u7D2F\u52A0\u624D\u884C"),
                        React.createElement(P, null, "\u8FD9\u91CC\u6709\u4E2A\u60C5\u51B5\u9700\u8981\u6CE8\u610F\uFF0C\u56E0\u4E3A\u662F\u8D28\u70B9\uFF0C\u6240\u4EE5\u8DDD\u79BB\u8FD1\u7684\u65F6\u5019\u529B\u4F1A\u77AC\u95F4\u589E\u5927\u5230\u65E0\u7A77\u5BFC\u81F4 number \u6EA2\u51FA\u6216\u8005\u9664 0 \u51FA\u73B0\u7684 NaN, \u6240\u4EE5\u8981\u505A\u6700\u5C0F\u8DDD\u79BB\u5904\u7406"),
                        React.createElement(P, null, "\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B"),
                        React.createElement(Code, { lang: "tsx", source: props.codePoint })),
                    React.createElement(H1Block, { id: "draw-and-multi-points", title: "\u7ED8\u56FE\u63A7\u5236 & \u591A\u8D28\u70B9" },
                        React.createElement(Code, { lang: "tsx", source: props.codeGravity })),
                    React.createElement(H1Block, { id: "playground", title: "playground" },
                        React.createElement(P, null, "\u8C03\u6574\u53C2\u6570\u63A7\u5236, \u5EFA\u8BAE\u4FDD\u6301\u52A8\u91CF\u548C\u4E3A 0, \u4E0D\u7136\u4F1A\u8DD1\u5230\u753B\u5E03\u4E4B\u5916"),
                        React.createElement("div", null,
                            React.createElement("textarea", { style: {
                                    fontFamily: `consolas, Menlo`,
                                    width: `100%`,
                                    height: 300,
                                }, defaultValue: JSON.stringify(initialPoints(), null, '  '), onChange: e => {
                                    try {
                                        const points = JSON.parse(e.target.value.trim());
                                        playgroundGravity.initFromPoints(points);
                                        console.log('设置成功');
                                    }
                                    catch (error) {
                                        console.error('参数有问题?', error);
                                    }
                                } })),
                        React.createElement(WindowApp, { height: H }, React.createElement("canvas", { style: { display: 'block', margin: '0 auto' }, width: W, height: H, ref: node => {
                                if (!node)
                                    return;
                                playgroundGravity.setDom(node);
                                playgroundGravity.start();
                            } }))));
            });

        })
    };
}));
