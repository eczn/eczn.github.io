System.register(['react', 'rally/@@', './float-center.js'], (function (exports) {
    'use strict';
    var React, metaBeauty, floatCenter;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            metaBeauty = module.metaBeauty;
        }, function (module) {
            floatCenter = module.floatCenter;
        }],
        execute: (function () {

            exports('initialProps', initialProps);

            const meta = exports('meta', metaBeauty({
                id: 'float-center',
                // type: 'app',
                // appTitle: 'app ?',
                title: '「float: center」的一个实现',
                author: 'eczn',
                // category: '分类',
                time: new Date('2026-08-15 23:00'),
                isDraft: true,
            }));
            const P1 = exports('P1', '这是一段用于验证 float:center 效果的示例文字。浏览器原生只有 float:left/right，文字永远无法从一个元素的两侧同时环绕流过，此处的目标是补上传说中不存在的 float:center，实现能排开文字的 Exclusion Zone');
            const P2 = exports('P2', '实现思路：把浮动元素 absolute 化脱离文本流，再用 Range API 逐字符测量布局，在排除区域原本占据的每一行插入宽度相同的零高占位符，文字便会在区域两侧分流。布局与锚点互相依赖，所以必须迭代到收敛。');
            const P3 = exports('P3', '所有占位符一经插入即保留，不会在重扫时清理。前面的占位符会挤动后面浮动元素的锚点位置，每一轮重扫时锚点都在更接近最终布局的状态下测得，最终收敛到不动点。');
            const P4 = exports('P4', '病态输入可能导致震荡不收敛，例如排除区域恰好卡在行边界附近来回跳动。此时由 MAX_ITER 兜底，用最后算出的状态收场：两种震荡结果通常都视觉合理。');
            async function initialProps(context) {
                return {};
            }
            var index_blog = exports('default', (props) => {
                const ref = React.useRef(null);
                React.useEffect(() => {
                    const el = ref.current;
                    if (!el)
                        return;
                    console.time('@@ floatCenter');
                    floatCenter(el);
                    console.timeEnd('@@ floatCenter');
                }, []);
                return React.createElement(React.Fragment, null,
                    React.createElement("div", { ref: ref, style: {} },
                        P1,
                        React.createElement("span", { "data-float": true, style: { display: 'inline-block', width: 160, height: 240, background: 'rgba(255,0,0,.18)', border: '1px solid rgba(255,0,0,.5)' } }),
                        P2));
            });

        })
    };
}));
