System.register(['react', './use-pinch.js'], (function (exports) {
    'use strict';
    var React, usePinch;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            usePinch = module.usePinch;
        }],
        execute: (function () {

            exports({
                AppPinch: AppPinch,
                Preview: Preview
            });

            function AppPinch() {
                const [blobUrl, setBlobUrl] = React.useState(null);
                React.useEffect(() => {
                    return () => {
                        if (blobUrl)
                            URL.revokeObjectURL(blobUrl);
                    };
                }, [blobUrl]);
                return React.createElement("div", { className: "rapp-pinch" },
                    React.createElement("input", { id: "rapp-pinch-file", hidden: true, type: "file", onChange: e => {
                            const file = e.target.files?.[0];
                            e.target.value = '';
                            if (!file)
                                return;
                            console.log('@@ select file', file);
                            const fileBlobUrl = URL.createObjectURL(file);
                            setBlobUrl(fileBlobUrl);
                        } }),
                    React.createElement(Preview, { src: blobUrl }),
                    React.createElement("label", { htmlFor: "rapp-pinch-file", className: "rapp-pinch-file-label" }, "\u9009\u62E9\u672C\u5730\u56FE\u7247"));
            }
            function Preview(props) {
                const elemRef = React.createRef();
                const pinch = usePinch(elemRef);
                const 缩放text = `缩放: ${(pinch.descriptor.sx * 100).toFixed(1)}%`;
                const 位移text = `(${pinch.descriptor.dx.toFixed(1)},${pinch.descriptor.dy.toFixed(1)})`;
                return (React.createElement("div", { className: "rapp-pinch-preview", ref: elemRef },
                    React.createElement("div", { className: "rapp-pinch-preview-bg", id: "grid", style: {
                            backgroundSize: `40px 40px`,
                            backgroundPosition: '0% 0%',
                            backgroundImage: `radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px)`,
                        } }),
                    React.createElement("div", { className: "_canvas_descriptor" },
                        React.createElement("div", null, 缩放text),
                        React.createElement("div", null, 位移text)),
                    React.createElement("div", { className: "_canvas", style: {
                            backgroundImage: props.src ? `url("${props.src}")` : undefined,
                            transform: `matrix(${pinch.descriptor.sx}, 0, 0, ${pinch.descriptor.sy}, ${pinch.descriptor.dx}, ${pinch.descriptor.dy})`,
                            transformOrigin: '0% 0%',
                            backgroundPosition: 'center center',
                        } }, props.src ? null : React.createElement("div", { style: {
                            fontSize: '2rem',
                            textAlign: 'center',
                            maxWidth: 300,
                            padding: '3em 0',
                            margin: '0 auto',
                            userSelect: 'none',
                        } },
                        React.createElement("div", { style: { marginBottom: '1em' } },
                            "\u70B9\u51FB\u4E0B\u65B9\u9009\u62E9\u56FE\u7247\u8FDB\u884C\u9884\u89C8, \u8981\u4E0D\u7136\u5C31\u53EA\u80FD\u9884\u89C8\u6211\u8FD9\u6BB5\u6587\u5B57\u4E86",
                            React.createElement("br", null)),
                        React.createElement("div", { style: { fontSize: '50%', color: '#BBB' } },
                            React.createElement("div", null, "\u5BF9\u9F50 iOS \u76F8\u518C\u7F29\u653E\u4F53\u9A8C"),
                            React.createElement("div", null, "\u9F20\u6807\u62D6\u62FD / \u9F20\u6807\u6EDA\u8F6E"),
                            React.createElement("div", null, "\u5355\u6307\u62D6\u62FD / \u591A\u6307\u634F\u653E"))))));
            }

        })
    };
}));
//# sourceMappingURL=index.js.map
