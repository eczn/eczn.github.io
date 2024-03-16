System.register([], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports({
        disableTouchScroll: disableTouchScroll,
        enableTouchScroll: enableTouchScroll
      });

      // hooks/disable-touch-scroll.tsx
      // 插入这段 style 即可禁用滚动, 是解决滚动穿透的一种方式
      const styleContent = `
  html {
    overflow: hidden !important;
  }
`;
      const styleId = 'eczn-blog-disableTouchScroll';
      let styleElem = null;
      /** 禁用滚动, 解决滚动穿透的一种方式 */
      function disableTouchScroll() {
          // 没有则创建
          if (!styleElem) {
              styleElem = document.createElement('style');
              styleElem.innerHTML = styleContent;
              styleElem.id = styleId;
          }
          // 如果不在 document 中, 则插入
          if (!document.querySelector(`#${styleId}`)) {
              document.head.appendChild(styleElem);
          }
      }
      /** 恢复滚动 */
      function enableTouchScroll() {
          // 如果在 document 中, 则移除
          if (styleElem && document.querySelector(`#${styleId}`)) {
              document.head.removeChild(styleElem);
          }
      }

    })
  };
}));
