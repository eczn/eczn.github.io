System.register(['react'], (function (exports) {
    'use strict';
    var React;
    return {
        setters: [function (module) {
            React = module.default;
        }],
        execute: (function () {

            exports('MarkdownEditor', MarkdownEditor);

            function getSelectionForce() {
                const s = window.getSelection();
                if (s)
                    return s;
                throw new Error('get Selection Error !');
            }
            let MEditorCounter = 0;
            class MEditor {
                id;
                state = MEditor.State();
                selection = null;
                root;
                constructor() {
                    this.id = `meditor-${MEditorCounter++}`;
                    this.root = document.createElement('div');
                    this.root.id = this.id;
                    this.root.className = `meditor`;
                    this.root.contentEditable = 'true';
                    this.root.addEventListener('keydown', this.onKeyPress, { capture: true });
                }
                getEditorContainer = () => {
                    return document.getElementById(this.id);
                };
                onSelectionChange = () => {
                    console.log('@@@ onselection changed');
                    const browserSelection = getSelectionForce();
                    if (MEditor.Utils.hasChild(this.getEditorContainer(), browserSelection.anchorNode)) {
                        this.selection = MEditor.getSelection(browserSelection);
                    }
                };
                onKeyPress = (ev) => {
                    // if (!this.selection) return console.log('@@ onKeyPress on no selection');
                    console.log('@@ onKeyPress', ev.key, ev.keyCode);
                    switch (ev.key) {
                        case 'Backspace': {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            this.deleteText();
                            return;
                        }
                        case 'Ctrl':
                        case 'Control':
                        case 'Shift':
                        case 'Meta':
                        case 'CapsLock':
                        case 'Tab':
                        case 'Escape':
                        case 'Alt': {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            return;
                        }
                        case 'ArrowUp':
                        case 'ArrowDown':
                        case 'ArrowRight':
                        case 'ArrowLeft': {
                            // ev.preventDefault();
                            // ev.stopImmediatePropagation();
                            return;
                        }
                        case 'Enter': {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            this.pressEnter();
                            return;
                        }
                        case ' ': {
                            ev.preventDefault();
                            ev.stopImmediatePropagation();
                            this.pressSpace();
                            return;
                        }
                    }
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                    this.insertText(ev.key);
                };
                insertText = (text) => {
                    if (MEditor.Selection.isCaret(this.selection)) {
                        // insert text
                        const { blockIndex, offset } = this.selection;
                        const block = this.state.blocks[blockIndex];
                        const newContent = block.content.slice(0, offset) + text + block.content.slice(offset);
                        block.content = newContent;
                        this.selection.offset += text.length;
                        this.render();
                        this.restore();
                    }
                };
                deleteText = () => {
                    if (MEditor.Selection.isCaret(this.selection)) {
                        const { blockIndex, offset } = this.selection;
                        const block = this.state.blocks[blockIndex];
                        // 此时要删除行
                        if (block.content.length === 0 && blockIndex >= 1) {
                            this.selection.offset = this.state.blocks[blockIndex - 1].content.length + 1;
                            this.selection.blockIndex -= 1;
                            this.state.blocks.splice(blockIndex, 1);
                        }
                        const newContent = block.content.slice(0, offset - 1) + block.content.slice(offset);
                        block.content = newContent;
                        this.selection.offset -= 1;
                        if (this.selection.offset <= 0)
                            this.selection.offset = 0;
                        this.render();
                        this.restore();
                    }
                };
                pressEnter() {
                    if (MEditor.Selection.isCaret(this.selection)) {
                        const { blockIndex, offset } = this.selection;
                        const block = this.state.blocks[blockIndex];
                        const newBlock = MEditor.Block.Paragraph(block.content.slice(offset));
                        block.content = block.content.slice(0, offset);
                        this.state.blocks.splice(blockIndex + 1, 0, newBlock);
                        this.selection.offset = 0;
                        this.selection.blockIndex = blockIndex + 1;
                        this.render();
                        this.restore();
                    }
                }
                pressSpace() {
                    if (MEditor.Selection.isCaret(this.selection)) {
                        const block = this.state.blocks[this.selection.blockIndex];
                        let level = 0;
                        if (block.content[level] === '#') {
                            if (block.content.startsWith('#'))
                                level = 1;
                            if (block.content.startsWith('##'))
                                level = 2;
                            if (block.content.startsWith('###'))
                                level = 3;
                            if (block.content.startsWith('####'))
                                level = 4;
                            if (block.content.startsWith('#####'))
                                level = 5;
                            if (block.content.startsWith('######'))
                                level = 6;
                            const newBlock = MEditor.Block.Header(level, block.content.replace('#'.repeat(level), '').trimStart());
                            this.state.blocks[this.selection.blockIndex] = newBlock;
                            this.selection.offset = 0;
                            this.render();
                            this.restore();
                        }
                        else {
                            return this.insertText(' ');
                        }
                    }
                }
                render() {
                    if (!this.root)
                        return console.error('no root mounted');
                    const blockNodes = this.state.blocks.map((block, blockIndex) => {
                        const dom = document.createElement('div');
                        dom.dataset.blockIndex = `${blockIndex}`;
                        if (MEditor.Block.isHeader(block)) {
                            dom.className = `meditor-block meditor-block-header _level-${block.level}`;
                            dom.appendChild(new Text(block.content));
                        }
                        if (MEditor.Block.isParagraph(block)) {
                            dom.className = `meditor-block meditor-block-paragraph`;
                            dom.appendChild(new Text(block.content));
                        }
                        return dom;
                    }).filter(e => !!e);
                    this.root.replaceChildren(...blockNodes);
                }
                getBlockTextNode(blockIndex) {
                    const block = this.root.children[blockIndex];
                    return block.childNodes[0];
                }
                restore() {
                    const browerSelection = getSelectionForce();
                    browerSelection.removeAllRanges();
                    if (MEditor.Selection.isCaret(this.selection)) {
                        const range = document.createRange();
                        const blockTextNode = this.getBlockTextNode(this.selection.blockIndex);
                        range.setStart(blockTextNode, this.selection.offset);
                        range.setEnd(blockTextNode, this.selection.offset);
                        browerSelection.addRange(range);
                    }
                }
                mount(container) {
                    this.render();
                    container.appendChild(this.root);
                    document.addEventListener('selectionchange', this.onSelectionChange);
                }
                unmount() {
                    document.removeEventListener('selectionchange', this.onSelectionChange);
                    this.root.removeEventListener('keydown', this.onKeyPress, { capture: true });
                }
            } exports('MEditor', MEditor);
            (function (MEditor) {
                let Utils;
                (function (Utils) {
                    function findParentBlockNode(node) {
                        if (!node)
                            return null;
                        if (node instanceof HTMLElement) {
                            const blockIndex = Number(node.dataset.blockIndex);
                            if (typeof blockIndex === 'number' && !Number.isNaN(blockIndex)) {
                                return { blockIndex, node };
                            }
                        }
                        return findParentBlockNode(node.parentNode);
                    }
                    Utils.findParentBlockNode = findParentBlockNode;
                    function hasChild(parent, node) {
                        let current = node;
                        while (current) {
                            if (current === parent)
                                return true;
                            current = current.parentNode;
                        }
                        return false;
                    }
                    Utils.hasChild = hasChild;
                })(Utils = MEditor.Utils || (MEditor.Utils = {}));
                let Block;
                (function (Block) {
                    function isHeader(x) {
                        return x && x.type === 'Header';
                    }
                    Block.isHeader = isHeader;
                    function Header(level, content) {
                        return { type: 'Header', level, content, };
                    }
                    Block.Header = Header;
                    function isParagraph(x) {
                        return x && x.type === 'Paragraph';
                    }
                    Block.isParagraph = isParagraph;
                    function Paragraph(content) {
                        return { type: 'Paragraph', content };
                    }
                    Block.Paragraph = Paragraph;
                })(Block = MEditor.Block || (MEditor.Block = {}));
                let Selection;
                (function (Selection) {
                    function isCaret(selection) {
                        return !!(selection && selection.type === 'caret');
                    }
                    Selection.isCaret = isCaret;
                    function Caret(blockIndex, offset) {
                        return { type: 'caret', blockIndex, offset };
                    }
                    Selection.Caret = Caret;
                })(Selection = MEditor.Selection || (MEditor.Selection = {}));
                function getSelection(browserSelection) {
                    if (browserSelection.type === `Caret`) {
                        const result = Utils.findParentBlockNode(browserSelection.anchorNode);
                        if (result) {
                            return Selection.Caret(result.blockIndex, browserSelection.anchorOffset);
                        }
                    }
                    return null;
                }
                MEditor.getSelection = getSelection;
                function State() {
                    return {
                        blocks: [
                            Block.Header(1, 'hello,world'),
                            Block.Paragraph('你好世界'),
                        ],
                    };
                }
                MEditor.State = State;
            })(MEditor || (exports('MEditor', MEditor = {})));
            function MarkdownEditor() {
                const ref = React.createRef();
                React.useEffect(() => {
                    // for debug
                    if (!ref.current)
                        return;
                    const editor = new MEditor();
                    editor.mount(ref.current);
                    window.MEditor = MEditor;
                    window.editor = editor;
                    return () => {
                        editor.unmount();
                    };
                }, []);
                return React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "meditor-wrapper", ref: ref }));
            }

        })
    };
}));
