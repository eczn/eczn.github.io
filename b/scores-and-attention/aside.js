
/**
 * 收集 contentContainer 中的标题，生成目录到 asideContainer 中
 * @param {HTMLElement} contentContainer 
 * @param {HTMLElement} asideContainer 
 */
function createAside(contentContainer, asideContainer) {
  const headings = contentContainer.querySelectorAll('h1, h2, h3');
  if (headings.length === 0) return;

  // 插入样式
  const style = document.createElement('style');
  style.textContent = `
    .aside-nav {
      position: sticky;
      top: 24px;
      font-size: 14px;
      line-height: 1.6;
    }
    .aside-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .aside-nav li {
      border-left: 2px solid transparent;
      transition: border-color 0.2s;
    }
    .aside-nav li.active {
      border-left-color: #b45309;
    }
    .aside-nav li[data-level="1"] { padding-left: 0; }
    .aside-nav li[data-level="2"] { padding-left: 12px; }
    .aside-nav li[data-level="3"] { padding-left: 24px; }
    .aside-nav a {
      text-decoration: none;
      color: #555;
      display: block;
      padding: 4px 8px;
      border-radius: 4px;
      transition: color 0.2s, background-color 0.2s;
    }
    .aside-nav a:hover {
      color: #b45309;
      background-color: #f0f0f0;
    }
    .aside-nav li.active a {
      color: #b45309;
      font-weight: 500;
    }
  `;
  document.head.appendChild(style);

  // 生成目录
  const nav = document.createElement('nav');
  nav.className = 'aside-nav';
  const ul = document.createElement('ul');

  for (const heading of headings) {
    if (!heading.id) {
      heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
    }

    const li = document.createElement('li');
    const level = heading.tagName[1];
    li.dataset.level = level;

    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  asideContainer.appendChild(nav);

  // 滚动高亮当前标题
  const lis = ul.querySelectorAll('li');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          lis.forEach(li => li.classList.remove('active'));
          const id = entry.target.id;
          const activeLi = ul.querySelector(`a[href="#${id}"]`)?.parentElement;
          if (activeLi) activeLi.classList.add('active');
        }
      }
    },
    { rootMargin: '0px 0px -80% 0px', threshold: 0 }
  );

  for (const heading of headings) {
    observer.observe(heading);
  }
}
