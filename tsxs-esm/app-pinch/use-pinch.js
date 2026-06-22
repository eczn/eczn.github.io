System.register(['react', './matrix.js', './use-drag-states.js', './apply-states-to-matrix.js', './finger-event.js'], (function (exports) {
    'use strict';
    var React, matrixProducts, useDragStates, applyStatesToMatrix, getElementOffsetPoints;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            matrixProducts = module.matrixProducts;
        }, function (module) {
            useDragStates = module.useDragStates;
        }, function (module) {
            applyStatesToMatrix = module.applyStatesToMatrix;
        }, function (module) {
            getElementOffsetPoints = module.getElementOffsetPoints;
        }],
        execute: (function () {

            exports('usePinch', usePinch);

            const unitMatrix = () => [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ];
            function usePinch(elemRef) {
                const [currentMatrix, setCurrentMatrix] = React.useState(unitMatrix);
                const { dragStates } = useDragStates(elemRef, (finalDragStates) => {
                    setCurrentMatrix(m => {
                        return applyStatesToMatrix(m, finalDragStates);
                    });
                });
                React.useEffect(() => {
                    const elem = elemRef.current;
                    if (!elem)
                        return;
                    const handler = (ev) => {
                        ev.preventDefault();
                        const p = getElementOffsetPoints(elem, [{ x: ev.clientX, y: ev.clientY }])[0];
                        const ds = -(ev.deltaY / window.innerHeight);
                        setCurrentMatrix(m => {
                            return matrixProducts(m, [
                                [1, 0, 0],
                                [0, 1, 0],
                                [-p.x, -p.y, 1],
                            ], [
                                [1 + ds, 0, 0],
                                [0, 1 + ds, 0],
                                [0, 0, 1],
                            ], [
                                [1, 0, 0],
                                [0, 1, 0],
                                [p.x, p.y, 1],
                            ]);
                        });
                    };
                    elem.addEventListener('wheel', handler);
                    return () => {
                        elem.removeEventListener('wheel', handler);
                    };
                }, []);
                const matrix = applyStatesToMatrix(currentMatrix, dragStates);
                const descriptor = genMatrixDescriptor(matrix);
                return {
                    matrix,
                    descriptor,
                };
            }
            function genMatrixDescriptor(matrix) {
                const sx = matrix[0][0];
                const sy = matrix[1][1];
                const dx = matrix[2][0];
                const dy = matrix[2][1];
                // return `matrix(${s1}, 0, 0, ${s2}, ${dx}, ${dy})`;
                return {
                    sx, sy, dx, dy,
                };
            }

        })
    };
}));
