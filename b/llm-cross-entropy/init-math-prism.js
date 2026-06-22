(() => {

// 使用 MathJax 3（SVG 输出）渲染 .math-content 节点内的 TeX 源码
function renderAllMath() {
  if (!window.MathJax || !window.MathJax.tex2svg) return false;
  document.querySelectorAll('.math-content').forEach(function (elem) {
    // 已渲染过则跳过（存在子节点 mjx-container 即视为已渲染）
    if (elem.querySelector('mjx-container')) return;

    var displayMode = elem.getAttribute('data-display') === '1';
    var tex = elem.textContent.trim();
    if (!tex) return;
    try {
      /** @type {HTMLElement} */
      var node = window.MathJax.tex2svg(tex, { display: displayMode });
      const svgNode = node.querySelector('svg');
      if (!svgNode) throw new Error('MathJax render error: no svg');

      if (displayMode) {
        elem.textContent = '';
        elem.appendChild(svgNode);
      } else {
        // node.childNodes[0].style.display = 'inline-block';
        svgNode.style.display = 'inline-block';
        elem.outerHTML = svgNode.outerHTML;
      }
    } catch (e) {
      console.warn('MathJax render error:', e, tex);
    }
  });
  return true;
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
    window.MathJax.startup.promise.then(renderAllMath);
  } else {
    // tex-svg.js 尚未加载完成，轮询等待
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      if (renderAllMath() || tries > 200) clearInterval(timer);
    }, 50);
  }

  // --------------------------------------------------------------
  // Prism 代码高亮：遍历所有 <pre>，取 .innerText 作为纯文本输入，
  // 依据内容启发式选择语言（shell 片段用 bash，其余用 typescript），
  // 再把高亮后的 HTML 写回 <code>。
  // --------------------------------------------------------------
  function highlightAllPre() {
    if (!window.Prism || !Prism.languages || !Prism.languages.typescript) return false;
    var preList = document.querySelectorAll('pre');
    preList.forEach(function (pre) {
      if (pre.dataset.prismDone === '1') return;
      // 按需求使用 .innerText 获取代码内容（会自动丢弃已有的 <span> 手工着色）
      var raw = pre.innerText;
      // 启发式判断语言：以 "$ " 开头视为 shell 片段
      var lang = /^\s*\$\s/.test(raw) ? 'bash' : 'typescript';
      var grammar = Prism.languages[lang];
      var highlighted = Prism.highlight(raw, grammar, lang);
      // 保留原有的 <pre> 外观样式；仅重建内部 <code>
      var code = pre.querySelector('code');
      if (!code) {
        code = document.createElement('code');
        pre.innerHTML = '';
        pre.appendChild(code);
      }
      code.className = 'language-' + lang;
      code.innerHTML = highlighted;
      pre.dataset.prismDone = '1';
    });
    return true;
  }

  // Prism 脚本使用 defer，理论上在 DOMContentLoaded 时已可用；
  // 做一层轮询兜底，避免 CDN 加载慢导致未定义。
  if (!highlightAllPre()) {
    var prismTries = 0;
    var prismTimer = setInterval(function () {
      prismTries++;
      if (highlightAllPre() || prismTries > 200) clearInterval(prismTimer);
    }, 50);
  }
});

})();
