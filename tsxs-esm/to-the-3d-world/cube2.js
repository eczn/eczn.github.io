System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const VERTEX_LABELS = exports('VERTEX_LABELS', [
                'A', 'B', 'C', 'D',
                'E', 'F', 'G', 'H',
            ]);
            const CUBE_VERTICES = exports('CUBE_VERTICES', [
                [-1, -1, -1],
                [1, -1, -1],
                [1, -1, 1],
                [-1, -1, 1],
                [-1, 1, -1],
                [1, 1, -1],
                [1, 1, 1],
                [-1, 1, 1],
            ]);
            // 奇数项连接偶数项
            const CUBE_LINES = exports('CUBE_LINES', [
                0, 1, // v0-v1
                1, 2, // v1-v2
                2, 3, // v2-v3
                3, 0, // v3-v0
                4, 5, // ...
                5, 6,
                6, 7,
                7, 4,
                0, 4,
                1, 5,
                2, 6,
                3, 7
            ]);

        })
    };
}));
