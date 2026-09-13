System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('LazyRender', LazyRender);

            function LazyRender(props) {
                const [r, s] = React.useState(null);
                React.useEffect(() => {
                    s(props.children);
                }, [props.children]);
                return r;
            }

        })
    };
}));
