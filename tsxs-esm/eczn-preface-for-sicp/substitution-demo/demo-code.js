System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('DemoCode', DemoCode);

            /**
             * 代换模型代码演示组件
             * 上半部分的黑底代码展示，带自定义高亮
             */
            function DemoCode(props) {
                return (React.createElement("div", { className: "main-demo-code", style: {
                        backgroundColor: '#16161a',
                        borderRadius: '0.5rem 0.5rem 0 0',
                        padding: '1.5rem',
                        border: '1px solid #2d2d34',
                        borderBottom: 'none',
                        overflowX: 'auto',
                        fontFamily: 'Consolas, Monaco, Menlo, Consolas, "PingFang SC", "Microsoft YaHei", monospace',
                        fontSize: '0.8rem',
                        lineHeight: '1.5',
                        color: '#e1e1e6',
                        minHeight: '12rem',
                        display: 'flex',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                    } },
                    React.createElement("pre", { style: { margin: 0, width: '100%' } },
                        React.createElement("code", { style: { fontFamily: 'inherit' } }, props.code))));
            }

        })
    };
}));
