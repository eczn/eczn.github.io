System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            // adt-drag-define.tsx
            // 左右拖拽组件定义左和右
            var Direction; exports('Direction', Direction);
            (function (Direction) {
                Direction[Direction["Center"] = 0] = "Center";
                Direction[Direction["Left"] = 1] = "Left";
                Direction[Direction["Right"] = 2] = "Right";
                Direction[Direction["Up"] = 3] = "Up";
                Direction[Direction["Down"] = 4] = "Down";
            })(Direction || (exports('Direction', Direction = {})));

        })
    };
}));
