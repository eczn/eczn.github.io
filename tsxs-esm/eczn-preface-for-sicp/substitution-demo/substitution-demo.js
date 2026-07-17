System.register(['react', './demo-code.js', './demo-controls.js', './demo-intro.js', './sexp.js'], (function (exports) {
    'use strict';
    var React, DemoCode, DemoControls, DemoIntro, compile, render2jsx, SexpCell;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            DemoCode = module.DemoCode;
        }, function (module) {
            DemoControls = module.DemoControls;
        }, function (module) {
            DemoIntro = module.DemoIntro;
        }, function (module) {
            compile = module.compile;
            render2jsx = module.render2jsx;
            SexpCell = module.SexpCell;
        }],
        execute: (function () {

            exports('SubstitutionDemo', SubstitutionDemo);

            // ── 推导步骤数据 ──────────────────────────────────────────
            const SNAPSHOTS = [
                {
                    title: '第一步：尝试展开代换',
                    sexp: compile('((@focus car) _123)'),
                    intro: '从 (car _123) 开始，依据前面提到的代换 (Substitution) 化简这个式子。建议你最好纸笔试过、或者跟着这里一步一步推导。',
                },
                {
                    title: '第二步：找到和展开 car 的定义',
                    sexp: compile('((lambda (z) (@nobreak (z (lambda (p q) p)))) (@inlayHint z _123))'),
                    intro: '根据 car 的定义 (define (car z) (z (lambda (p q) p)))，将 car 替换为它的 lambda 形式。_123 作为实参传入，形参 z 绑定到 _123。',
                },
                {
                    title: '第三步：参数代入展开',
                    sexp: compile('((@inlayHint z _123) (@nobreak (@inlayHint 给定pq返回p (lambda (p q) p))))'),
                    intro: '将形式参数 z 替换为实际参数 _123，原式化简为 (_123 (lambda (p q) p))。接下来处理 _123 就行',
                },
                {
                    title: '第四步：展开代换 _123',
                    sexp: compile('((@nobreak (@inlayHint _123 (cons 1 (cons 2 (cons 3 nil))))) (@nobreak (lambda (p q) p)) )'),
                    intro: '回顾定义：(define _123 (cons 1 (cons 2 (cons 3 nil))))。将 _123 展开为 cons 嵌套调用，链表的 1→2→3→nil 结构一目了然。',
                },
                {
                    title: '第五步：展开最外层 cons 为 lambda',
                    sexp: compile(`
      (
        (
          (@focus (@nobreak (lambda (x y) (lambda (m) (m x y)))))
          (@inlayHint x 1)
          (@nobreak (@inlayHint y (cons 2 (cons 3 nil))))
        )
        (@inlayHint m (@nobreak (lambda (p q) p)))
      )
    `),
                    intro: '回到 cons 底层：(define (cons x y) (lambda (m) (m x y)))。最外层 cons 转换为嵌套 lambda。Inlay Hint 标注了形参 x→1、y→(cons 2 …)、m→选择子 的绑定关系。',
                },
                {
                    title: '第六步：把 x y 带入',
                    sexp: compile('((@focus (@nobreak (lambda (m) (m (@inlayHint x 1) (@inlayHint y (cons 2 (cons 3 nil))))))) (@nobreak (lambda (p q) p)))'),
                    intro: '实参 1 绑定到形参 x，子链表 (cons 2 …) 绑定到形参 y。cons 化简为单参数 lambda：(lambda (m) (m 1 (cons 2 …)))。',
                },
                {
                    title: '第七步：把 m 带入, 选择 p 和 q',
                    sexp: compile(`
      (
        (@inlayHint m (@nobreak (lambda (p q) p)))
        (@inlayHint p 1)
        (@inlayHint q (@nobreak (cons 2 (cons 3 nil))))
      )  
    `),
                    intro: 'm 的含义是给定 p q 返回左边的 p，因此最终结果就是 1',
                },
                {
                    title: '同理可得',
                    sexp: compile(`
      (
        (@inlayHint m (@nobreak (lambda (p q) q)))
        (@inlayHint p 1)
        (@inlayHint q (@nobreak (cons 2 (cons 3 nil))))
      )  
    `),
                    intro: '给定 p q，car 返回 p，而 cdr 返回 q，因此 (cdr _123) 的结果就是 2→3→nil',
                },
            ];
            // ── 主组件 ────────────────────────────────────────────────
            /**
             * SubstitutionDemo — 交互式求值分步推导。
             * 通过 Sexp 数据驱动 + render2jsx 自动渲染，彻底消除手写缩进。
             */
            function SubstitutionDemo() {
                const [step, setStep] = React.useState(0);
                const total = SNAPSHOTS.length;
                const cur = SNAPSHOTS[step];
                const handlePrev = () => { if (step > 0)
                    setStep(step - 1); };
                const handleNext = () => { if (step < total - 1)
                    setStep(step + 1); };
                const handleJump = (i) => { if (i >= 0 && i < total)
                    setStep(i); };
                return (React.createElement("div", { className: "main-substitution-demo", style: {
                        margin: '24px 0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                        border: '1px solid #e0e0e0',
                        overflow: 'hidden',
                        boxSizing: 'border-box',
                    } },
                    React.createElement("style", { dangerouslySetInnerHTML: { __html: `
        .main-substitution-demo {
          --cp: #808080;
          --ck: #c678dd;
          --cs: #61afef;
          --cv: #abb2bf;
          --cn: #d19a66;
          --fbg: rgba(97,175,239,0.15);
          --fbd: #56b6c2;
        }
        .scheme-paren    { color: var(--cp); }
        .scheme-keyword  { color: var(--ck); font-weight: bold; }
        .scheme-symbol   { color: var(--cs); }
        .scheme-var      { color: var(--cv); }
        .scheme-num      { color: var(--cn); }

        .scheme-focus {
          background: var(--fbg);
          border-bottom: 2px solid var(--fbd);
          border-radius: 3px;
          padding: 2px 4px;
          margin: 0 -2px;
          transition: background 0.2s, border-color 0.2s;
        }

        .scheme-inlay-hint {
          position: relative;
          display: inline-block;
          white-space: nowrap;
        }
        .scheme-inlay-hint::after {
          content: attr(data-hint);
          font-size: 0.8em;
          color: #555;
          background: #f0f0f0;
          padding: 1px 4px;
          margin: 0px 8px;
          margin-bottom: 2px;
          border-radius: 3px;
          border: 1px solid #ddd;
          font-weight: 600;
          white-space: nowrap;
        }
      ` } }),
                    React.createElement(DemoCode, { code: render2jsx(cur.sexp) }),
                    React.createElement("div", { style: {
                            padding: '1.5rem 0rem',
                            backgroundColor: '#fafbfc',
                            borderLeft: '1px solid #e0e0e0',
                            borderRight: '1px solid #e0e0e0',
                            overflowX: 'scroll',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'safe center',
                            minHeight: '80px',
                            boxSizing: 'border-box',
                            fontSize: '12px',
                        } },
                        React.createElement(SexpCell, { sexp: cur.sexp })),
                    React.createElement(DemoControls, { currentStep: step, totalSteps: total, onPrev: handlePrev, onNext: handleNext, onJumpTo: handleJump }),
                    React.createElement(DemoIntro, { currentStep: step, totalSteps: total, title: cur.title, intro: cur.intro })));
            }

        })
    };
}));
