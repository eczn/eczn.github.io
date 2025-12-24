System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, H1Block, Quote, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            H1Block = module.H1Block;
            Quote = module.Quote;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'create-game-map',
                title: '来创建地图吧',
                author: 'eczn',
                isDraft: true,
                // category: '分类',
                time: new Date('2023-12-26 00:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null,
                        React.createElement(P, null, "\u4E4B\u524D\u4E4B\u6240\u4EE5\u641E\u67CF\u6797\u566A\u58F0\u5C31\u662F\u4E3A\u4E86\u6C34\u8FD9\u7BC7\u6587\u7AE0\uFF01\u6765\u6784\u9020\u4E00\u5F20\u968F\u673A\u5730\u56FE\u5427\uFF01")),
                    React.createElement(H1Block, { id: "id", title: "hello,world" },
                        React.createElement(Quote, null,
                            React.createElement(P, null, "hello, contents"),
                            React.createElement(P, null, "hello, contents"),
                            React.createElement(P, null, "hello, contents"),
                            React.createElement(P, null, "hello, contents"))));
            });

        })
    };
}));
//# sourceMappingURL=index.blog.js.map
