System.register(['react', 'rally/@@'], (function (exports) {
    'use strict';
    var React, P;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            P = module.P;
        }],
        execute: (function () {

            // end-txt.tsx
            var EndText = exports('default', () => {
                const [rand, setRand] = React.useState(Math.random());
                const update = () => setRand(Math.random());
                React.useEffect(() => {
                    const timer = setInterval(update, 500);
                    return () => {
                        clearInterval(timer);
                    };
                }, []);
                return React.createElement(P, { onClick: update },
                    "\u672C\u6587\u5B8C \u2014\u2014 \u5C41\u54A7\uFF0C\u5199\u672C\u6587\u66F4\u60F3\u5206\u4EAB\u8BB0\u5F55\u7684\u662F: \u672C\u6587\u662F\u57FA\u4E8E ESM \u5B9E\u73B0\u7684 \u2014\u2014 \u4E5F\u5C31\u662F\u8BF4\u901A\u8FC7\u5199 .tsx \u6765\u5199\u535A\u5BA2\u3002",
                    React.createElement("br", null),
                    "\u70B9\u51FB\u7ACB\u5373\u66F4\u65B0\u968F\u673A\u6570: ",
                    React.createElement("span", null, rand));
            });

        })
    };
}));
