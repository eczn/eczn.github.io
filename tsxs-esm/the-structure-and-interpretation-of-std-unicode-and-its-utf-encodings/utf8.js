System.register(['./utf16-encode.js', './utf8-decode.js', './utf8-encode.js'], (function (exports) {
    'use strict';
    var utf16EncodeCodePoint, utf8Decode, utf8EncodeCodePoint;
    return {
        setters: [function (module) {
            utf16EncodeCodePoint = module.utf16EncodeCodePoint;
        }, function (module) {
            utf8Decode = module.utf8Decode;
        }, function (module) {
            utf8EncodeCodePoint = module.utf8EncodeCodePoint;
        }],
        execute: (function () {

            const NsUtf = exports('NsUtf', {
                utf8Decode,
                utf8EncodeCodePoint,
                utf16EncodeCodePoint,
            });

        })
    };
}));
