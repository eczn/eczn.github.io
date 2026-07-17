System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports({
                R: R,
                SexpCell: SexpCell,
                compile: compile
            });

            const CTX0 = { isFuncPos: false, isLambdaParam: false };
            // ── 分类 ──────────────────────────────────────────────────
            function clsOf(tok, c) {
                if (tok === 'lambda')
                    return 'scheme-keyword';
                if (/^-?\d+$/.test(tok))
                    return 'scheme-num';
                if (c.isLambdaParam)
                    return 'scheme-var';
                if (c.isFuncPos)
                    return 'scheme-symbol';
                return 'scheme-var';
            }
            function isDirective(s) { return s.startsWith('@'); }
            // ── SSR hydration 辅助 ────────────────────────────────────
            /**
             * 将 kids 中连续的 string 节点合并为单个 string，
             * 避免 SSR hydration 时连续纯文本兄弟节点匹配失败。
             *
             * 输入: ['\n', '  ', <span/>, '\n', '  ']
             * 输出: ['\n  ', <span/>, '\n  ']
             */
            function mergeConsecutiveStrings(nodes) {
                const out = [];
                let buf = '';
                const flush = () => {
                    if (buf.length > 0) {
                        out.push(buf);
                        buf = '';
                    }
                };
                for (const node of nodes) {
                    if (typeof node === 'string') {
                        buf += node;
                    }
                    else {
                        flush();
                        out.push(node);
                    }
                }
                flush();
                return out;
            }
            // ── 叶节点 ────────────────────────────────────────────────
            function Leaf({ tok, ctx }) {
                return React.createElement("span", { className: clsOf(tok, ctx) }, tok);
            }
            // ── 指令渲染 ──────────────────────────────────────────────
            function Directive({ sexp, tab, lb, ctx, }) {
                const d = sexp[0];
                switch (d) {
                    case '@focus':
                        return React.createElement("span", { className: "scheme-focus" }, R(sexp[1], tab, lb, ctx));
                    case '@inlayHint':
                        return (React.createElement("span", { className: "scheme-inlay-hint", "data-hint": String(sexp[1]) }, R(sexp[2], tab, lb, ctx)));
                    case '@nobreak':
                        return React.createElement(React.Fragment, null, R(sexp[1], tab, false, ctx));
                    default:
                        return null;
                }
            }
            // ── 核心 ──────────────────────────────────────────────────
            /**
             * 将 Sexp 渲染为带语法高亮 + 树形缩进的 JSX。
             *
             * @param sexp  S 表达式
             * @param tab   缩进层级（每级 2 空格）
             * @param lb    是否多行展开
             * @param ctx   词法上下文
             */
            function R(sexp, tab = 0, lb = true, ctx = CTX0) {
                // 叶节点
                if (typeof sexp === 'string')
                    return React.createElement(Leaf, { tok: sexp, ctx: ctx });
                // 空列表
                if (sexp.length === 0)
                    return React.createElement("span", { className: "scheme-paren" }, "()");
                const head = sexp[0];
                // 指令
                if (typeof head === 'string' && isDirective(head)) {
                    return React.createElement(Directive, { sexp: sexp, tab: tab, lb: lb, ctx: ctx });
                }
                // ── 常规 S 表达式 ──
                const isLambda = typeof head === 'string' && head === 'lambda';
                const n = sexp.length;
                const indent = '  '.repeat(tab);
                const ci = '  '.repeat(tab + 1); // child indent
                const doBreak = lb && n > 1;
                const kids = [];
                // 开括号
                kids.push(React.createElement("span", { key: "op", className: "scheme-paren" }, "("));
                const childCtx = (i) => ({
                    isFuncPos: i === 0,
                    isLambdaParam: isLambda && i === 1,
                });
                if (doBreak) {
                    kids.push('\n');
                    for (let i = 0; i < n; i++) {
                        kids.push(ci);
                        kids.push(React.createElement(React.Fragment, { key: i }, R(sexp[i], tab + 1, lb, childCtx(i))));
                        if (i < n - 1)
                            kids.push('\n');
                    }
                    kids.push('\n');
                    kids.push(indent);
                }
                else {
                    for (let i = 0; i < n; i++) {
                        if (i > 0)
                            kids.push(' ');
                        kids.push(React.createElement(React.Fragment, { key: i }, R(sexp[i], tab, false, childCtx(i))));
                    }
                }
                // 闭括号
                kids.push(React.createElement("span", { key: "cl", className: "scheme-paren" }, ")"));
                return React.createElement(React.Fragment, null, mergeConsecutiveStrings(kids));
            }
            /** 别名，便于阅读 */
            const render2jsx = exports('render2jsx', R);
            // ── 字符串解析器 ──────────────────────────────────────────
            /**
             * 将字符串形式的 S 表达式解析为 Sexp 树。
             *
             * @example
             *   compile('(@focus car _123)')          // → ['@focus', 'car', '_123']
             *   compile('(lambda (p q) p)')           // → ['lambda', ['p', 'q'], 'p']
             *   compile('(cons 1 (cons 2 nil))')      // → ['cons', '1', ['cons', '2', 'nil']]
             */
            function compile(str) {
                // 1. 词法：在括号两侧加空格后按空白切分
                const tokens = str
                    .replace(/\(/g, ' ( ')
                    .replace(/\)/g, ' ) ')
                    .trim()
                    .split(/\s+/)
                    .filter(t => t.length > 0);
                if (tokens.length === 0)
                    return [];
                let i = 0;
                // 2. 递归下降解析
                function parse() {
                    if (i >= tokens.length) {
                        throw new Error('compile: 意外的输入结尾，可能缺少 )');
                    }
                    const tok = tokens[i++];
                    if (tok === '(') {
                        const list = [];
                        while (i < tokens.length && tokens[i] !== ')') {
                            list.push(parse());
                        }
                        if (i >= tokens.length) {
                            throw new Error('compile: 缺少匹配的 )');
                        }
                        i++; // 跳过 ')'
                        return list;
                    }
                    if (tok === ')') {
                        throw new Error('compile: 多余的 )');
                    }
                    return tok; // 原子
                }
                const result = parse();
                if (i < tokens.length) {
                    throw new Error(`compile: 顶层存在多余 token "${tokens[i]}"（缺少外层括号？）`);
                }
                return result;
            }
            // ── Cons 盒子图 ──────────────────────────────────────────
            const CONS_CELL_BORDER = '#3a3a4a';
            /** cons 单元盒子：左右双槽 [ car | cdr ]，嵌套自然撑大 */
            function SexpCell({ sexp }) {
                if (typeof sexp === 'string')
                    return React.createElement("span", null, sexp);
                switch (sexp?.[0]) {
                    case '@focus':
                        return React.createElement(SexpCell, { sexp: sexp[1] });
                    case '@inlayHint':
                        return (React.createElement("span", { className: "scheme-inlay-hint", "data-hint": String(sexp[1]) },
                            React.createElement(SexpCell, { sexp: sexp[2] })));
                    case '@nobreak':
                        return React.createElement(SexpCell, { sexp: sexp[1] });
                    // (lambda (x y) (+ x y)) 展示成 (x, y) → (+ x y) 看着更美观
                    case 'lambda':
                        return (React.createElement("div", { style: {
                                display: 'inline-flex',
                                flexDirection: 'row',
                                border: `2px solid #d17307`,
                                borderRadius: '2px',
                                overflow: 'hidden',
                                fontFamily: 'Consolas, Monaco, Menlo, monospace',
                                lineHeight: 1.6,
                            } },
                            React.createElement("div", { style: {
                                    padding: '0.2rem',
                                    backgroundColor: '#ffffff',
                                    // color: '#1a1a2e',
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                } }, Array.isArray(sexp[1]) ? `(${sexp[1].join(' ')})` : 'ERROR'),
                            React.createElement("div", { style: {
                                    padding: '0.2rem',
                                    backgroundColor: '#ffffff',
                                    color: '#d17307',
                                    fontFamily: 'Consolas, Monaco, monospace',
                                    display: 'flex',
                                    alignItems: 'center',
                                } }, "\u2192"),
                            React.createElement("div", { style: {
                                    padding: '0.2rem',
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                } }, SexpCell({ sexp: sexp[2] }))));
                    default:
                        break;
                }
                const jsxs = sexp.map(($0, i) => (React.createElement("div", { key: i, style: {
                        padding: '0.2rem 0.3rem',
                        borderLeft: i === 0 ? 'none' : `2px solid ${CONS_CELL_BORDER}`,
                        backgroundColor: i === 0 ? '#e8ecf1' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                    } },
                    React.createElement(SexpCell, { sexp: $0 }))));
                return (React.createElement("div", { className: "main-cell", style: {
                        display: 'inline-flex',
                        flexDirection: 'row',
                        border: `2px solid ${CONS_CELL_BORDER}`,
                        borderRadius: '2px',
                        overflow: 'hidden',
                        fontFamily: 'Consolas, Monaco, Menlo, monospace',
                        lineHeight: 1.6,
                    } }, jsxs));
            }
            // 废案
            // return (
            //   <div className="main-cell" style={{
            //     display: 'inline-flex',
            //     flexDirection: 'row',
            //     border: `2px solid ${CONS_CELL_BORDER}`,
            //     borderRadius: '4px',
            //     overflow: 'hidden',
            //     fontFamily: 'Consolas, Monaco, Menlo, monospace',
            //     fontSize: '14px',
            //     lineHeight: 1.6,
            //   }}>
            //     <div style={{
            //       padding: '4px 10px',
            //       backgroundColor: '#e8ecf1',
            //       color: '#1a1a2e',
            //       whiteSpace: 'nowrap',
            //       display: 'flex',
            //       alignItems: 'center',
            //     }}>{car}</div>
            //     {cdr && <div style={{
            //       padding: '4px 10px',
            //       borderLeft: `2px solid ${CONS_CELL_BORDER}`,
            //       backgroundColor: '#ffffff',
            //       display: 'flex',
            //       alignItems: 'center',
            //     }}>{cdr}</div>}
            //   </div>
            // );

        })
    };
}));
