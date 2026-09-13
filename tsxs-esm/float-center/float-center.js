System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('floatCenter', floatCenter);

            class ExclusionZone {
                container;
                rects = []; // 暂时只支持矩形排开
                get width() { return this.container.offsetWidth; }
                add(floatEl) {
                    const parentRect = this.container.getBoundingClientRect();
                    const floatRect = floatEl.getBoundingClientRect();
                    this.rects.push({
                        x: floatRect.left - parentRect.left,
                        y: floatRect.top - parentRect.top,
                        w: floatRect.width,
                        h: floatRect.height,
                    });
                }
                constructor(container) {
                    this.container = container;
                }
                /** 交集判定：AABB（轴对齐矩形）碰撞检测，贴边不算相交 */
                intersects(rect) {
                    for (const r of this.rects) {
                        if (r.y < rect.bottom && r.y + r.h > rect.top && r.x < rect.right && r.x + r.w > rect.left) {
                            return true;
                        }
                    }
                    return false;
                }
            }
            /**
             * el 形如:
             * <div ref={ref} style={{}}>
             *   {P1}<span
             *     data-float
             *     style={{ display: 'inline-block', width: 160, height: 240, background: 'rgba(255,0,0,.18)', border: '1px solid rgba(255,0,0,.5)' }}
             *   />{P2}
             * </div>
             * @param el
             * @param sel
             */
            function floatCenter(el, sel = '[data-float]') {
                el.style.position = 'relative'; // 否则内部的绝对定位元素会相对于 body 定位，导致测量不准
                console.log('@@ start floatCenter', el, sel);
                const zone = new ExclusionZone(el); // content + padding + border
                const floatEls = [...el.querySelectorAll(sel)];
                let isOK = false;
                let iter = 0;
                const MAX_ITER = 1;
                while (!isOK) {
                    if (iter++ >= MAX_ITER) {
                        console.error('@@ floatCenter: MAX_ITER, 跳出');
                        break;
                    }
                    isOK = layoutReflow(el, zone);
                }
            }
            /** 跑一次排版 */
            function layoutReflow(el, exclusionZone) {
                forEachChildText(el);
                return false;
            }
            function forEachChildText(el) {
                const range = document.createRange();
                for (const child of el.childNodes) {
                    if (child.nodeType !== Node.TEXT_NODE)
                        continue;
                    ;
                    const textNode = child;
                    for (let i = 0; i < textNode.length; i++) {
                        range.setStart(textNode, i);
                        range.setEnd(textNode, i + 1);
                        console.log('@@ 遍历每个字盒', textNode.data, i, range.getBoundingClientRect());
                    }
                }
            }
            /** 创建零高 inline-block spacer，只做水平前进，不做垂直占位 */
            function createSpacer(advanceWidth) {
                const spacer = document.createElement('span');
                spacer.style.display = 'inline-block';
                spacer.style.width = advanceWidth + 'px';
                spacer.style.height = '0';
                return spacer;
            }
            /**
             * 把 spacer 插到文本节点 node 的 charOffset 处（该字符之前）
             * ⚠️ 插入后原 node 引用即失效：splitText 把它劈成两半（前半段留在原引用，后半段是返回值），
             * 遍历中持有的 Text 引用和 offset 全部作废，下一轮必须重新收集文本节点
             */
            function addSpacerToText(parent, node, charOffset, spacer) {
                const tail = node.splitText(charOffset);
                parent.insertBefore(spacer, tail);
            }

        })
    };
}));
