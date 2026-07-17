System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('DemoControls', DemoControls);

            /**
             * 代换模型控制器组件
             * 中间部分的控制条，含上一步/下一步按钮、极具学术感的步骤进度条与点击跳转
             */
            function DemoControls(props) {
                return (React.createElement("div", { className: "main-demo-controls", style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 24px',
                        backgroundColor: '#f8f9fa',
                        borderLeft: '1px solid #e0e0e0',
                        borderRight: '1px solid #e0e0e0',
                        borderBottom: '1px solid #e0e0e0',
                        userSelect: 'none',
                        flexWrap: 'wrap',
                        gap: '12px',
                        boxSizing: 'border-box',
                    } },
                    React.createElement("button", { onClick: props.onPrev, disabled: props.currentStep === 0, type: "button", style: {
                            padding: '6px 14px',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: props.currentStep === 0 ? '#b5b7bb' : '#333333',
                            backgroundColor: props.currentStep === 0 ? '#f1f3f5' : '#ffffff',
                            border: '1px solid #cccccc',
                            borderRadius: '4px',
                            cursor: props.currentStep === 0 ? 'not-allowed' : 'pointer',
                            fontFamily: 'inherit',
                            transition: 'all 0.2s',
                            outline: 'none',
                        } }, "Prev"),
                    React.createElement("div", { style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        } }, Array.from({ length: props.totalSteps }).map((_, idx) => {
                        const isActive = idx === props.currentStep;
                        return (React.createElement("div", { key: idx, onClick: () => props.onJumpTo(idx), style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '24px',
                                height: '24px',
                                borderRadius: '4px',
                                fontSize: '11px',
                                fontFamily: 'Consolas, Monaco, monospace',
                                fontWeight: isActive ? '700' : 'normal',
                                color: isActive ? '#ffffff' : '#666666',
                                background: isActive ? '#050505' : '#eaebed',
                                cursor: 'pointer',
                                border: isActive ? '1px solid #000' : '1px solid transparent',
                                transition: 'all 0.2s ease',
                            }, title: `跳转到第 ${idx + 1} 步` }, idx + 1));
                    })),
                    React.createElement("button", { onClick: props.onNext, disabled: props.currentStep === props.totalSteps - 1, type: "button", style: {
                            padding: '6px 14px',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: props.currentStep === props.totalSteps - 1 ? '#b5b7bb' : '#ffffff',
                            backgroundColor: props.currentStep === props.totalSteps - 1 ? '#f1f3f5' : '#0f0f12',
                            border: props.currentStep === props.totalSteps - 1 ? '1px solid #cccccc' : '1px solid #0f0f12',
                            borderRadius: '4px',
                            cursor: props.currentStep === props.totalSteps - 1 ? 'not-allowed' : 'pointer',
                            fontFamily: 'inherit',
                            transition: 'all 0.2s',
                            outline: 'none',
                        } }, "Next")));
            }

        })
    };
}));
