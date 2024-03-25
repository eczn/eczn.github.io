System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P, metaBeauty;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
            metaBeauty = module.metaBeauty;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'i-dont-know-js',
                title: 'i don\'t know js',
                author: 'eczn',
                isDraft: true,
                // category: '分类',
                time: new Date('2024-03-25 20:00'),
            }));
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                return React.createElement(React.Fragment, null,
                    React.createElement(P, null, "\u6CE8\u610F\u529B\u6DA3\u6563\u8B66\u544A"));
            });

        })
    };
}));
