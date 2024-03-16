System.register(['react', './finger-event.js'], (function (exports) {
    'use strict';
    var React, getElementOffsetPoints, getFingerEventPoints;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            getElementOffsetPoints = module.getElementOffsetPoints;
            getFingerEventPoints = module.getFingerEventPoints;
        }],
        execute: (function () {

            exports('useDragStates', useDragStates);

            function useDragStates(elemRef, onSubmit) {
                const [dragStates, setDragStates] = React.useState([]);
                React.useEffect(() => {
                    const elem = elemRef.current;
                    if (!elem)
                        return;
                    let cached = {};
                    const cachedToDragStates = () => {
                        return Object.keys(cached).map(id => {
                            return {
                                type: 'dragging',
                                translation: {
                                    x: cached[id].current.x - cached[id].start.x,
                                    y: cached[id].current.y - cached[id].start.y,
                                },
                                start: cached[id].start,
                                current: cached[id].current,
                            };
                        });
                    };
                    const whenStart = (p, id = -1) => {
                        if (cached[id])
                            return;
                        cached[id] = {
                            id,
                            start: p,
                            current: p
                        };
                    };
                    const whenMove = (p, id = -1) => {
                        cached[id] = {
                            id,
                            start: cached[id]?.start ?? p,
                            current: p,
                        };
                    };
                    const touchEvents = {
                        onStart(_e) {
                            const e = preprocessTouch(_e);
                            const lastDragStates = cachedToDragStates();
                            if (lastDragStates.length) {
                                onSubmit(lastDragStates);
                                cached = {};
                                setDragStates([]);
                            }
                            const epoints = getElementOffsetPoints(elem, getFingerEventPoints(e));
                            for (let i = 0; i < e.touches.length; i++) {
                                const p = epoints[i];
                                whenStart(p, e.touches[i].identifier);
                            }
                            setDragStates(cachedToDragStates());
                        },
                        onMove(_e) {
                            const e = preprocessTouch(_e);
                            const epoints = getElementOffsetPoints(elem, getFingerEventPoints(e));
                            for (let i = 0; i < e.touches.length; i++) {
                                const p = epoints[i];
                                whenMove(p, e.touches[i].identifier);
                            }
                            setDragStates(cachedToDragStates());
                        },
                        onEnd(_e) {
                            const e = preprocessTouch(_e);
                            const lastDragStates = cachedToDragStates();
                            onSubmit(lastDragStates);
                            cached = {};
                            setDragStates([]);
                            // 此时还有触控点, 需要更新 start
                            if (e.touches.length !== 0)
                                touchEvents.onStart(e);
                        },
                    };
                    const mouseEvents = {
                        onStart(e) {
                            touchEvents.onStart({
                                touches: [{
                                        identifier: -1,
                                        clientX: e.clientX,
                                        clientY: e.clientY,
                                    }],
                            });
                        },
                        onMove(e) {
                            if (Object.keys(cached).length === 0)
                                return;
                            touchEvents.onMove({
                                touches: [{
                                        identifier: -1,
                                        clientX: e.clientX,
                                        clientY: e.clientY,
                                    }],
                            });
                        },
                        onEnd(e) {
                            touchEvents.onEnd({
                                touches: [],
                                changedTouches: [{
                                        identifier: -1,
                                        clientX: e.clientX,
                                        clientY: e.clientY,
                                    }],
                            });
                        },
                    };
                    {
                        // 需要禁用 passive
                        const evOptions = { passive: false };
                        elem.addEventListener('touchstart', touchEvents.onStart, evOptions);
                        elem.addEventListener('touchmove', touchEvents.onMove, evOptions);
                        elem.addEventListener('touchend', touchEvents.onEnd, evOptions);
                        elem.addEventListener('touchcancel', touchEvents.onEnd, evOptions);
                        // mouse 事件组
                        elem.addEventListener('mousedown', mouseEvents.onStart, evOptions);
                        elem.addEventListener('mousemove', mouseEvents.onMove, evOptions);
                        elem.addEventListener('mouseup', mouseEvents.onEnd, evOptions);
                        elem.addEventListener('mouseleave', mouseEvents.onEnd, evOptions);
                    }
                    return () => {
                        elem.removeEventListener('touchstart', touchEvents.onStart);
                        elem.removeEventListener('touchmove', touchEvents.onMove);
                        elem.removeEventListener('touchend', touchEvents.onEnd);
                        elem.removeEventListener('touchcancel', touchEvents.onEnd);
                        elem.removeEventListener('mousedown', mouseEvents.onStart);
                        elem.removeEventListener('mousemove', mouseEvents.onMove);
                        elem.removeEventListener('mouseup', mouseEvents.onEnd);
                        elem.removeEventListener('mouseleave', mouseEvents.onEnd);
                    };
                }, []);
                return {
                    dragStates,
                };
            }
            function preprocessTouch(e) {
                e.preventDefault?.();
                return e;
            }

        })
    };
}));
