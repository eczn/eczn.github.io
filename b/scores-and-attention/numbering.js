(() => {
  makeNumbering();

  function makeNumbering() {
    let chapterNum = 0;
    let h2Num = 0;
    let h3Num = 0;
    let figNum = 0;
    let tableNum = 0;
    const chapterNames = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十'];

    document.querySelectorAll('main h1, main h2, main h3, main figcaption, main caption').forEach((el) => {
      // 忽略标记了 data-no-numbering 的元素
      if (el.hasAttribute('data-no-numbering')) return;

      if (el.tagName === 'H1') {
        chapterNum++;
        h2Num = 0; h3Num = 0; figNum = 0; tableNum = 0;
        el.innerHTML = `<span class="text-sm uppercase tracking-widest text-stone-500 block mb-1">第${chapterNames[chapterNum]}章</span>${el.innerHTML}`;
        el.className = `font-serif text-3xl font-semibold tracking-tight text-stone-900 leading-tight ${el.className}`;
      } else if (el.tagName === 'H2') {
        h2Num++; h3Num = 0;
        el.innerHTML = `<span class="text-stone-500 font-normal">${chapterNum}.${h2Num}</span> ${el.innerHTML}`;
        el.className = `font-serif text-xl font-semibold text-stone-900 mt-10 ${el.className}`;
      } else if (el.tagName === 'H3') {
        h3Num++;
        el.innerHTML = `<span class="text-stone-500 font-normal">${chapterNum}.${h2Num}.${h3Num}</span> ${el.innerHTML}`;
        el.className = `font-serif text-lg font-semibold text-stone-900 mt-8 ${el.className}`;
      } else if (el.tagName === 'FIGCAPTION') {
        figNum++;
        el.innerHTML = `图 ${chapterNum}.${figNum} — ${el.innerHTML} `;
      } else if (el.tagName === 'CAPTION') {
        tableNum++;
        el.innerHTML = `表 ${chapterNum}.${tableNum} — ${el.innerHTML} `;
      }
    });
  }

})();