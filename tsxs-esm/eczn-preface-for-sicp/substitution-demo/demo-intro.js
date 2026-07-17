System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('DemoIntro', DemoIntro);

            /**
             * 代换模型步骤说明组件
             * 下半部分的白底文字描述
             */
            function DemoIntro(props) {
                return (React.createElement("div", { className: "main-demo-intro", style: {
                        padding: '24px',
                        backgroundColor: '#ffffff',
                        borderRadius: '0 0 8px 8px',
                        border: '1px solid #e0e0e0',
                        borderTop: 'none',
                        boxSizing: 'border-box',
                        minHeight: '120px',
                    } },
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                        } },
                        React.createElement("span", { style: {
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: '#111111',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                            } }, props.title),
                        React.createElement("span", { style: {
                                fontSize: '12px',
                                fontFamily: 'Consolas, Monaco, monospace',
                                color: '#666666',
                                backgroundColor: '#eaebed',
                                padding: '2px 8px',
                                borderRadius: '12px',
                            } }, `Step ${props.currentStep + 1} / ${props.totalSteps}`)),
                    React.createElement("p", { style: {
                            margin: 0,
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#444444',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                        } }, props.intro)));
            }

        })
    };
}));
