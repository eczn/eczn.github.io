/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// index.js 
window.HyperDown = __webpack_require__(3);
window.Ws = __webpack_require__(2);
__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// main.js

var $styContent = document.getElementById('sty-input'),
    $content = document.getElementsByClassName('content')[0],
    $sty = document.getElementById('sty');

var myStyle = '/**\n *  \u4F60\u597D \u6211\u53EB xxx (\u81EA\u79F0 eczn )\n *  \u8FD9\u662F\u4E00\u4EFD\u5728\u7EBF\u7684\u81EA\u6211\u4ECB\u7ECD\uFF0C\u4E5F\u7B97\u662F\u7B80\u5386 \n *  \u53D7 https://github.com/jirengu-inc/animating-resume \u7684\u542F\u53D1\u800C\u505A\u7684 \n */ \n\n* { /* \u60EF\u7528\u56DB\u683C\u7F29\u8FDB */\n    margin: 0; \n    padding: 0; \n    /* \u6700\u559C\u6B22\u7528\u7684\u7F16\u7A0B\u5B57\u4F53 */\n    font-family: consolas, Menlo; \n    /* \u52A0\u7279\u6280 */\n    transition: all .5s; \n}\n\nbody { \n    background-color: #333;\n    color: #CCC;\n    overflow-x: hidden; \n}\n/** \n *  \u6539\u4E00\u4E0B\u8FD9\u4E2A\u6846\n */ \n.css {\n    position: fixed; display: block;\n    height: 100%; width: 50%; left: 0; top: 0;\n    padding: .75em 1.5em;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\npre { padding: .25em .5em; margin: .5em 1em; }\n\n/** \n *  \u9AD8\u4EAE \n */ \n.hljs-comment { color: #888; }\n.hljs-string { color: #9C9; }\n.hljs-value { color: rgb(240, 153, 64); }\n.hljs-attribute { color: rgb(240, 204, 120); }\n.hljs-tag, .hljs-class { color: rgb(230, 93, 64); }\n\n/** \n *  \u51C6\u5907\u4E00\u4E2A\u7F16\u8F91\u5668\u6765\u5199\u7B80\u5386\n */ \n.resume {\n    position: absolute;\n    width: 50%; height: 100%;\n    right: 0; top: 0;\n    padding: 2% 2%;\n    box-sizing: border-box;\n    color: #444; background-color: white;\n    overflow-y: scroll;\n}\n\n/* \u597D\u4E86 \u6211\u53EF\u4EE5\u5F00\u59CB\u5199\u4E86.. 0v0 */ \n';

var resumeText = '\n# xxx\n`\u524D\u7AEF\u5F00\u53D1` `0v0` `\u6C42\u804C\u4E2D` `\u5E7F\u5DDE` `\u81EA\u79F0eczn` `\u540C\u88C5\u4F1A`\n1. QQ: [\u89C1\u9996\u9875](/)\n2. e-mail: [\u89C1\u9996\u9875](/)\n\n\n# \u6280\u80FD\u6811\n`Vue` `Angular2` `node/Express` `gulp/webpack` `Linux` `ES6`\n\n# \u81EA\u6211\u4ECB\u7ECD \n1. \u5E7F\u4E1C\u5DE5\u4E1A\u5927\u5B66\u8BA1\u7B97\u673A\u5B66\u9662\u7F51\u7EDC\u5DE5\u7A0B\u5728\u8BFB\u751F, \u4F5C\u4E3A Night\'s Watch \u5DE5\u4F5C\u5BA4\u6210\u5458\u5B66\u4E60\u524D\u7AEF \n2. \u66FE\u505A\u8FC7\u7684\u3001\u6709\u8DA3\u7684\u4E8B\uFF1A\n   * \u81EA\u5DF1\u5199\u4E86\u9759\u6001\u535A\u5BA2\u751F\u6210\u5668 Vally \u7528\u6765\u6765\u5199\u535A\u5BA2 \n   * JavaScript \u51FD\u6570\u5F0F\u7F16\u7A0B \n   * left.js (\u7C7B\u4F3C jQuery) \n   * [More ... ](https://github.com/eczn?tab=repositories)\n\n# \u94FE\u63A5\n* [Github - eczn](https://github.com/eczn) \n* [SegmentFault - eczn](https://segmentfault.com/u/eczn) \n* [Vally - My Blog](/) \n* [stackshare - MyStack](https://stackshare.io/eczn/stack-number-0x00)\n\n> Stay Hungry, Stay Foolish. \n\n\n';

hljs.configure({
    tabReplace: '    '
});

function write($doms, word, cb, echo, speed) {
    speed = speed || 1;
    if (!cb || !echo) {
        console.error('no cb and echo');
        return;
    }
    var wordAcc = '';
    $('.sty-acc').each(function (idx, dom) {
        wordAcc += dom.innerHTML || '';
    });

    var wordWs = new Ws(word);

    var timer4echo = setInterval(function () {
        echo($doms, wordAcc);
    }, 300);

    var timer4frame = setInterval(function () {
        var e = wordWs.get();

        if (e) {
            wordAcc += e;
            $doms.forEach(function (dom) {
                dom.innerHTML += e;
                setTimeout(function () {
                    $(dom).scrollTop(dom.scrollHeight);
                });
            });
        } else {
            clearInterval(timer4frame);
            clearInterval(timer4echo);
            echo($doms, wordAcc);

            cb && cb(wordAcc);
        }
    }, speed);
}

function hlCSS($doms, initStr) {
    var $pres = $doms.slice(0, $doms.length - 1);
    var sty = $doms[$doms.length - 1];

    // console.log($pres)
    $pres.forEach(function (dom) {
        var css = hljs.highlight('css', initStr);
        dom.innerHTML = css.value;
    });
}

var parser = new HyperDown();
// 第一层 css 
write([$styContent, $sty], myStyle, function () {
    // 第二层 简历 
    setTimeout(function () {
        write([$('.resume')[0]], resumeText, function () {
            // 第三层 
            write([$styContent, $('#sty2')[0]], styContent2, function (fullText) {
                console.log('FINISH');

                var html = parser.makeHtml(resumeText);
                console.log(html);

                $('.resume')[0].innerHTML = html;

                // 第四层 
                write([$styContent, $('#sty3')[0]], mdStyle, function (acc) {
                    console.log('FINISH');
                    var img = '<img style="opacity: 0;" id="eczn" src="img/bg.png" alt="bg -eczn" />';
                    $('.resume blockquote').before(img);

                    var $temp = $('.resume');
                    $temp.scrollTop($temp[0].scrollHeight);

                    setTimeout(function () {
                        $('#eczn').css('opacity', '1');
                    }, 300);
                }, hlCSS);
            }, hlCSS);
        }, function (acc) {}, 30);
    }, 2000);
}, hlCSS, 50);

var styContent2 = '\n/** \n *  \u63A5\u4E0B\u6765\u628A Markdown \u8F6C\u6362\u6210 html\n *  \u7136\u540E\u518D\u5199\u4E00\u4E0B\u6837\u5F0F\n */\n.resume * {\n    line-height: 1.5; \n    transition: all .7s; \n    font-weight: normal; \n}\na { color: #833; }\n\np {\n    margin-bottom: 1em;\n    word-wrap:break-word;\n    white-space:normal;\n    word-break:normal;\n}\n';
var mdStyle = '\nh1 {\n    font-size: 1.8em;\n    position: relative;\n    margin: .6em 0;\n}\n\nh1:after {\n    content: "";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 3px;\n    background-color: #DDD;\n    background-image: repeating-linear-gradient(\n        -45deg,\n        #FFF,\n        #FFF 4px,\n        transparent 4px,\n        transparent 8px\n    ); \n}\n\nh1:before {\n    content: "#"; \n    padding-right: .5em;\n    color: #464; \n}\n\nul, ol {\n    line-height: 1.0;\n    margin-bottom: 1.5em;\n}\n\nol {\n    list-style-type: katakana-iroha; \n    margin-left: 2em;\n}\n\nul { \n    list-style-type: none;\n}\n\nul li:before {\n    content: ">"; \n    padding-right: .8em; \n    float: left; \n}\n\n.resume code {\n    font-family: "Consolas", "Menlo";\n    padding: .2em .5em;\n    border: 1px dashed #BBB;\n    border-radius: 4px;\n}\n\nblockquote {\n    max-width: 80%; display: block;\n    padding: 4.6% 10%;\n    margin: 3em 0;\n    position: relative;\n    vertical-align: top;\n    border-bottom: 1px dashed #DDD;\n}\n\nblockquote:before {\n    content: "\u201C";\n    position: absolute;\n    display: inline-block;\n    left: 0;\n    top: -0.5em;\n    opacity: .45;\n    font-size: 4.5em;\n}\n\n.resume img {\n    position: absolute;\n    max-width: 233px;\n    right: 10%;\n}\n\n/* \u8BF7\u591A\u6307\u6559 ^_^ */\n\n\n';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// wordstream
var Ws = function () {
	function Ws(str) {
		this.fullContent = str;
		this.tos = str.split('');
		this.get = this.tos.shift.bind(this.tos);
	}

	return Ws;
}();

module.exports = Ws;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 1.12.1
(function() {
  var Parser,
    slice = [].slice;

  Parser = (function() {
    var array_keys, array_values, htmlspecialchars, preg_quote, str_replace, trim, ucfirst;

    ucfirst = function(str) {
      return (str.charAt(0)).toUpperCase() + str.substring(1);
    };

    preg_quote = function(str) {
      return str.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };

    str_replace = function(search, replace, str) {
      var i, j, l, len, len1, val;
      if (search instanceof Array) {
        if (replace instanceof Array) {
          for (i = j = 0, len = search.length; j < len; i = ++j) {
            val = search[i];
            str = str_replace(val, replace[i], str);
          }
        } else {
          for (l = 0, len1 = search.length; l < len1; l++) {
            val = search[l];
            str = str_replace(val, replace, str);
          }
        }
      } else {
        search = preg_quote(search);
        str = str.replace(new RegExp(search, 'g'), replace);
      }
      return str;
    };

    htmlspecialchars = function(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };

    trim = function(str, ch) {
      var c, i, j, ref, search;
      if (ch == null) {
        ch = null;
      }
      if (ch != null) {
        search = '';
        for (i = j = 0, ref = ch.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          c = ch[i];
          c = preg_quote(c);
          search += c;
        }
        search = '[' + search + ']*';
        return str.replace(new RegExp('^' + search), '').replace(new RegExp(search + '$'), '');
      } else {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
      }
    };

    array_keys = function(arr) {
      var _, j, k, len, result;
      result = [];
      if (arr instanceof Array) {
        for (k = j = 0, len = arr.length; j < len; k = ++j) {
          _ = arr[k];
          result.push(k);
        }
      } else {
        for (k in arr) {
          result.push(k);
        }
      }
      return result;
    };

    array_values = function(arr) {
      var _, j, len, result, v;
      result = [];
      if (arr instanceof Array) {
        for (j = 0, len = arr.length; j < len; j++) {
          v = arr[j];
          result.push(v);
        }
      } else {
        for (_ in arr) {
          v = arr[_];
          result.push(v);
        }
      }
      return result;
    };

    function Parser() {
      this.commonWhiteList = 'kbd|b|i|strong|em|sup|sub|br|code|del|a|hr|small';
      this.specialWhiteList = {
        table: 'table|tbody|thead|tfoot|tr|td|th'
      };
      this.hooks = {};
    }

    Parser.prototype.makeHtml = function(text) {
      var html;
      this.footnotes = [];
      this.definitions = {};
      this.holders = {};
      this.uniqid = (Math.ceil(Math.random() * 10000000)) + (Math.ceil(Math.random() * 10000000));
      this.id = 0;
      text = this.initText(text);
      html = this.parse(text);
      html = this.makeFootnotes(html);
      return this.call('makeHtml', html);
    };

    Parser.prototype.hook = function(type, cb) {
      if (this.hooks[type] == null) {
        this.hooks[type] = [];
      }
      return this.hooks[type].push(cb);
    };

    Parser.prototype.makeHolder = function(str) {
      var key;
      key = "|\r" + this.uniqid + this.id + "\r|";
      this.id += 1;
      this.holders[key] = str;
      return key;
    };

    Parser.prototype.initText = function(text) {
      return text.replace(/\t/g, '    ').replace(/\r/g, '');
    };

    Parser.prototype.makeFootnotes = function(html) {
      var index, val;
      if (this.footnotes.length > 0) {
        html += '<div class="footnotes"><hr><ol>';
        index = 1;
        while (val = this.footnotes.shift()) {
          if (typeof val === 'string') {
            val += " <a href=\"#fnref-" + index + "\" class=\"footnote-backref\">&#8617;</a>";
          } else {
            val[val.length - 1] += " <a href=\"#fnref-" + index + "\" class=\"footnote-backref\">&#8617;</a>";
            val = val.length > 1 ? this.parse(val.join("\n")) : this.parseInline(val[0]);
          }
          html += "<li id=\"fn-" + index + "\">" + val + "</li>";
          index += 1;
        }
        html += '</ol></div>';
      }
      return html;
    };

    Parser.prototype.parse = function(text) {
      var block, blocks, end, extract, html, j, len, lines, method, result, start, type, value;
      lines = [];
      blocks = this.parseBlock(text, lines);
      html = '';
      for (j = 0, len = blocks.length; j < len; j++) {
        block = blocks[j];
        type = block[0], start = block[1], end = block[2], value = block[3];
        extract = lines.slice(start, end + 1);
        method = 'parse' + ucfirst(type);
        extract = this.call('before' + ucfirst(method), extract, value);
        result = this[method](extract, value);
        result = this.call('after' + ucfirst(method), result, value);
        html += result;
      }
      return html;
    };

    Parser.prototype.call = function() {
      var args, callback, j, len, ref, type, value;
      type = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      value = args[0];
      if (this.hooks[type] == null) {
        return value;
      }
      ref = this.hooks[type];
      for (j = 0, len = ref.length; j < len; j++) {
        callback = ref[j];
        value = callback.apply(this, args);
        args[0] = value;
      }
      return value;
    };

    Parser.prototype.releaseHolder = function(text, clearHolders) {
      var deep;
      if (clearHolders == null) {
        clearHolders = true;
      }
      deep = 0;
      while ((text.indexOf("\r")) >= 0 && deep < 10) {
        text = str_replace(array_keys(this.holders), array_values(this.holders), text);
        deep += 1;
      }
      if (clearHolders) {
        this.holders = {};
      }
      return text;
    };

    Parser.prototype.parseInline = function(text, whiteList, clearHolders, enableAutoLink) {
      if (whiteList == null) {
        whiteList = '';
      }
      if (clearHolders == null) {
        clearHolders = true;
      }
      if (enableAutoLink == null) {
        enableAutoLink = true;
      }
      text = this.call('beforeParseInline', text);
      text = text.replace(/(^|[^\\])(`+)(.+?)\2/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return matches[1] + _this.makeHolder('<code>' + (htmlspecialchars(matches[3])) + '</code>');
        };
      })(this));
      text = text.replace(/\\(.)/g, (function(_this) {
        return function() {
          var escaped, matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          escaped = htmlspecialchars(matches[1]);
          escaped = escaped.replace(/\$/g, '&dollar;');
          return _this.makeHolder(escaped);
        };
      })(this));
      text = text.replace(/<(https?:\/\/.+)>/ig, (function(_this) {
        return function() {
          var link, matches, url;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          url = _this.cleanUrl(matches[1]);
          link = _this.call('parseLink', matches[1]);
          return _this.makeHolder("<a href=\"" + url + "\">" + link + "</a>");
        };
      })(this));
      text = text.replace(/<(\/?)([a-z0-9-]+)(\s+[^>]*)?>/ig, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if ((('|' + _this.commonWhiteList + '|' + whiteList + '|').indexOf('|' + matches[2].toLowerCase() + '|')) >= 0) {
            return _this.makeHolder(matches[0]);
          } else {
            return htmlspecialchars(matches[0]);
          }
        };
      })(this));
      text = str_replace(['<', '>'], ['&lt;', '&gt;'], text);
      text = text.replace(/\[\^((?:[^\]]|\\\]|\\\[)+?)\]/g, (function(_this) {
        return function() {
          var id, matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          id = _this.footnotes.indexOf(matches[1]);
          if (id < 0) {
            id = _this.footnotes.length + 1;
            _this.footnotes.push(_this.parseInline(matches[1], '', false));
          }
          return _this.makeHolder("<sup id=\"fnref-" + id + "\"><a href=\"#fn-" + id + "\" class=\"footnote-ref\">" + id + "</a></sup>");
        };
      })(this));
      text = text.replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g, (function(_this) {
        return function() {
          var escaped, matches, url;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          escaped = _this.escapeBracket(matches[1]);
          url = _this.escapeBracket(matches[2]);
          url = _this.cleanUrl(url);
          return _this.makeHolder("<img src=\"" + url + "\" alt=\"" + escaped + "\" title=\"" + escaped + "\">");
        };
      })(this));
      text = text.replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g, (function(_this) {
        return function() {
          var escaped, matches, result;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          escaped = _this.escapeBracket(matches[1]);
          result = _this.definitions[matches[2]] != null ? "<img src=\"" + _this.definitions[matches[2]] + "\" alt=\"" + escaped + "\" title=\"" + escaped + "\">" : escaped;
          return _this.makeHolder(result);
        };
      })(this));
      text = text.replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g, (function(_this) {
        return function() {
          var escaped, matches, url;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          escaped = _this.parseInline(_this.escapeBracket(matches[1]), '', false, false);
          url = _this.escapeBracket(matches[2]);
          url = _this.cleanUrl(url);
          return _this.makeHolder("<a href=\"" + url + "\">" + escaped + "</a>");
        };
      })(this));
      text = text.replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g, (function(_this) {
        return function() {
          var escaped, matches, result;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          escaped = _this.parseInline(_this.escapeBracket(matches[1]), '', false, false);
          result = _this.definitions[matches[2]] != null ? "<a href=\"" + _this.definitions[matches[2]] + "\">" + escaped + "</a>" : escaped;
          return _this.makeHolder(result);
        };
      })(this));
      text = this.parseInlineCallback(text);
      text = text.replace(/<([_a-z0-9-\.\+]+@[^@]+\.[a-z]{2,})>/ig, '<a href="mailto:$1">$1</a>');
      if (enableAutoLink) {
        text = text.replace(/(^|[^"])((https?):[x80-xff_a-z0-9-\.\/%#!@\?\+=~\|\,&\(\)]+)($|[^"])/ig, (function(_this) {
          return function() {
            var link, matches;
            matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            link = _this.call('parseLink', matches[2]);
            return matches[1] + "<a href=\"" + matches[2] + "\">" + link + "</a>" + matches[4];
          };
        })(this));
      }
      text = this.call('afterParseInlineBeforeRelease', text);
      text = this.releaseHolder(text, clearHolders);
      text = this.call('afterParseInline', text);
      return text;
    };

    Parser.prototype.parseInlineCallback = function(text) {
      text = text.replace(/(\*{3})((?:.|\r)+?)\1/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return '<strong><em>' + (_this.parseInlineCallback(matches[2])) + '</em></strong>';
        };
      })(this));
      text = text.replace(/(\*{2})((?:.|\r)+?)\1/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return '<strong>' + (_this.parseInlineCallback(matches[2])) + '</strong>';
        };
      })(this));
      text = text.replace(/(\*)((?:.|\r)+?)\1/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return '<em>' + (_this.parseInlineCallback(matches[2])) + '</em>';
        };
      })(this));
      text = text.replace(/(\s+|^)(_{3})((?:.|\r)+?)\2(\s+|$)/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return matches[1] + '<strong><em>' + (_this.parseInlineCallback(matches[3])) + '</em></strong>' + matches[4];
        };
      })(this));
      text = text.replace(/(\s+|^)(_{2})((?:.|\r)+?)\2(\s+|$)/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return matches[1] + '<strong>' + (_this.parseInlineCallback(matches[3])) + '</strong>' + matches[4];
        };
      })(this));
      text = text.replace(/(\s+|^)(_)((?:.|\r)+?)\2(\s+|$)/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return matches[1] + '<em>' + (_this.parseInlineCallback(matches[3])) + '</em>' + matches[4];
        };
      })(this));
      text = text.replace(/(~{2})((?:.|\r)+?)\1/mg, (function(_this) {
        return function() {
          var matches;
          matches = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return '<del>' + (_this.parseInlineCallback(matches[2])) + '</del>';
        };
      })(this));
      return text;
    };

    Parser.prototype.parseBlock = function(text, lines) {
      var align, aligns, block, emptyCount, head, isAfterList, j, key, l, len, len1, len2, line, m, matches, num, ref, row, rows, space, special, tag;
      ref = text.split("\n");
      for (j = 0, len = ref.length; j < len; j++) {
        line = ref[j];
        lines.push(line);
      }
      this.blocks = [];
      this.current = 'normal';
      this.pos = -1;
      special = (array_keys(this.specialWhiteList)).join('|');
      emptyCount = 0;
      for (key = l = 0, len1 = lines.length; l < len1; key = ++l) {
        line = lines[key];
        block = this.getBlock();
        if (block != null) {
          block = block.slice(0);
        }
        if (!!(matches = line.match(/^(\s*)(~|`){3,}([^`~]*)$/i))) {
          if (this.isBlock('code')) {
            isAfterList = block[3][2];
            if (isAfterList) {
              this.combineBlock().setBlock(key);
            } else {
              (this.setBlock(key)).endBlock();
            }
          } else {
            isAfterList = false;
            if (this.isBlock('list')) {
              space = block[3];
              isAfterList = (space > 0 && matches[1].length >= space) || matches[1].length > space;
            }
            this.startBlock('code', key, [matches[1], matches[3], isAfterList]);
          }
          continue;
        } else if (this.isBlock('code')) {
          this.setBlock(key);
          continue;
        }
        if (!!(matches = line.match(new RegExp("^\\s*<(" + special + ")(\\s+[^>]*)?>", 'i')))) {
          tag = matches[1].toLowerCase();
          if (!(this.isBlock('html', tag)) && !(this.isBlock('pre'))) {
            this.startBlock('html', key, tag);
          }
          continue;
        } else if (!!(matches = line.match(new RegExp("</(" + special + ")>\\s*$", 'i')))) {
          tag = matches[1].toLowerCase();
          if (this.isBlock('html', tag)) {
            this.setBlock(key).endBlock();
          }
          continue;
        } else if (this.isBlock('html')) {
          this.setBlock(key);
          continue;
        }
        switch (true) {
          case !!(line.match(/^ {4}/)):
            emptyCount = 0;
            if ((this.isBlock('pre')) || this.isBlock('list')) {
              this.setBlock(key);
            } else {
              this.startBlock('pre', key);
            }
            break;
          case !!(matches = line.match(/^(\s*)((?:[0-9a-z]+\.)|\-|\+|\*)\s+/)):
            space = matches[1].length;
            emptyCount = 0;
            if (this.isBlock('list')) {
              this.setBlock(key, space);
            } else {
              this.startBlock('list', key, space);
            }
            break;
          case !!(matches = line.match(/^\[\^((?:[^\]]|\]|\[)+?)\]:/)):
            space = matches[0].length - 1;
            this.startBlock('footnote', key, [space, matches[1]]);
            break;
          case !!(matches = line.match(/^\s*\[((?:[^\]]|\]|\[)+?)\]:\s*(.+)$/)):
            this.definitions[matches[1]] = this.cleanUrl(matches[2]);
            this.startBlock('definition', key).endBlock();
            break;
          case !!(line.match(/^\s*>/)):
            if (this.isBlock('quote')) {
              this.setBlock(key);
            } else {
              this.startBlock('quote', key);
            }
            break;
          case !!(matches = line.match(/^((?:(?:(?:[ :]*\-[ :]*)+(?:\||\+))|(?:(?:\||\+)(?:[ :]*\-[ :]*)+)|(?:(?:[ :]*\-[ :]*)+(?:\||\+)(?:[ :]*\-[ :]*)+))+)$/)):
            if (this.isBlock('table')) {
              block[3][0].push(block[3][2]);
              block[3][2] += 1;
              this.setBlock(key, block[3]);
            } else {
              head = 0;
              if ((block == null) || block[0] !== 'normal' || lines[block[2]].match(/^\s*$/)) {
                this.startBlock('table', key);
              } else {
                head = 1;
                this.backBlock(1, 'table');
              }
              if (matches[1][0] === '|') {
                matches[1] = matches[1].substring(1);
                if (matches[1][matches[1].length - 1] === '|') {
                  matches[1] = matches[1].substring(0, matches[1].length - 1);
                }
              }
              rows = matches[1].split(/\+|\|/);
              aligns = [];
              for (m = 0, len2 = rows.length; m < len2; m++) {
                row = rows[m];
                align = 'none';
                if (!!(matches = row.match(/^\s*(:?)\-+(:?)\s*$/))) {
                  if (!!matches[1] && !!matches[2]) {
                    align = 'center';
                  } else if (!!matches[1]) {
                    align = 'left';
                  } else if (!!matches[2]) {
                    align = 'right';
                  }
                }
                aligns.push(align);
              }
              this.setBlock(key, [[head], aligns, head + 1]);
            }
            break;
          case !!(matches = line.match(/^(#+)(.*)$/)):
            num = Math.min(matches[1].length, 6);
            this.startBlock('sh', key, num).endBlock();
            break;
          case !!(matches = line.match(/^\s*((=|-){2,})\s*$/)) && ((block != null) && block[0] === 'normal' && !lines[block[2]].match(/^\s*$/)):
            if (this.isBlock('normal')) {
              this.backBlock(1, 'mh', matches[1][0] === '=' ? 1 : 2).setBlock(key).endBlock();
            } else {
              this.startBlock('normal', key);
            }
            break;
          case !!(line.match(/^[-\*]{3,}\s*$/)):
            this.startBlock('hr', key).endBlock();
            break;
          default:
            if (this.isBlock('list')) {
              if (line.match(/^(\s*)/)) {
                if (emptyCount > 0) {
                  this.startBlock('normal', key);
                } else {
                  this.setBlock(key);
                }
                emptyCount += 1;
              } else if (emptyCount === 0) {
                this.setBlock(key);
              } else {
                this.startBlock('normal', key);
              }
            } else if (this.isBlock('footnote')) {
              matches = line.match(/^(\s*)/);
              if (matches[1].length >= block[3][0]) {
                this.setBlock(key);
              } else {
                this.startBlock('normal', key);
              }
            } else if (this.isBlock('table')) {
              if (0 <= line.indexOf('|')) {
                block[3][2] += 1;
                this.setBlock(key, block[3]);
              } else {
                this.startBlock('normal', key);
              }
            } else if (this.isBlock('pre')) {
              if (line.match(/^\s*$/)) {
                if (emptyCount > 0) {
                  this.startBlock('normal', key);
                } else {
                  this.setBlock(key);
                }
                emptyCount += 1;
              } else {
                this.startBlock('normal', key);
              }
            } else if (this.isBlock('quote')) {
              if (line.match(/^(\s*)/)) {
                if (emptyCount > 0) {
                  this.startBlock('normal', key);
                } else {
                  this.setBlock(key);
                }
                emptyCount += 1;
              } else if (emptyCount === 0) {
                this.setBlock(key);
              } else {
                this.startBlock('normal', key);
              }
            } else {
              if ((block == null) || block[0] !== 'normal') {
                this.startBlock('normal', key);
              } else {
                this.setBlock(key);
              }
            }
        }
      }
      return this.optimizeBlocks(this.blocks, lines);
    };

    Parser.prototype.optimizeBlocks = function(_blocks, _lines) {
      var block, blocks, from, isEmpty, key, lines, moved, nextBlock, prevBlock, to, type, types;
      blocks = _blocks.slice(0);
      lines = _lines.slice(0);
      blocks = this.call('beforeOptimizeBlocks', blocks, lines);
      key = 0;
      while (blocks[key] != null) {
        moved = false;
        block = blocks[key];
        prevBlock = blocks[key - 1] != null ? blocks[key - 1] : null;
        nextBlock = blocks[key + 1] != null ? blocks[key + 1] : null;
        type = block[0], from = block[1], to = block[2];
        if ('pre' === type) {
          isEmpty = lines.reduce(function(result, line) {
            return (line.match(/^\s*$/)) && result;
          }, true);
          if (isEmpty) {
            block[0] = type = 'normal';
          }
        }
        if ('normal' === type) {
          types = ['list', 'quote'];
          if (from === to && (lines[from].match(/^\s*$/)) && (prevBlock != null) && (nextBlock != null)) {
            if (prevBlock[0] === nextBlock[0] && (types.indexOf(prevBlock[0])) >= 0) {
              blocks[key - 1] = [prevBlock[0], prevBlock[1], nextBlock[2], null];
              blocks.splice(key, 2);
              moved = true;
            }
          }
        }
        if (!moved) {
          key += 1;
        }
      }
      return this.call('afterOptimizeBlocks', blocks, lines);
    };

    Parser.prototype.parseCode = function(lines, parts) {
      var blank, count, lang, rel, str;
      blank = parts[0], lang = parts[1];
      lang = trim(lang);
      count = blank.length;
      if (!lang.match(/^[_a-z0-9-\+\#\:\.]+$/i)) {
        lang = null;
      } else {
        parts = lang.split(':');
        if (parts.length > 1) {
          lang = parts[0], rel = parts[1];
          lang = trim(lang);
          rel = trim(rel);
        }
      }
      lines = lines.slice(1, -1).map(function(line) {
        return line.replace(new RegExp("/^[ ]{" + count + "}/"), '');
      });
      str = lines.join("\n");
      if (str.match(/^\s*$/)) {
        return '';
      } else {
        return '<pre><code' + (!!lang ? " class=\"" + lang + "\"" : '') + (!!rel ? " rel=\"" + rel + "\"" : '') + '>' + (htmlspecialchars(str)) + '</code></pre>';
      }
    };

    Parser.prototype.parsePre = function(lines) {
      var str;
      lines = lines.map(function(line) {
        return htmlspecialchars(line.substring(4));
      });
      str = lines.join("\n");
      if (str.match(/^\s*$/)) {
        return '';
      } else {
        return '<pre><code>' + str + '</code></pre>';
      }
    };

    Parser.prototype.parseSh = function(lines, num) {
      var line;
      line = this.parseInline(trim(lines[0], '# '));
      if (line.match(/^\s*$/)) {
        return '';
      } else {
        return "<h" + num + ">" + line + "</h" + num + ">";
      }
    };

    Parser.prototype.parseMh = function(lines, num) {
      return this.parseSh(lines, num);
    };

    Parser.prototype.parseQuote = function(lines) {
      var str;
      lines = lines.map(function(line) {
        return line.replace(/^\s*> ?/, '');
      });
      str = lines.join("\n");
      if (str.match(/^\s*$/)) {
        return '';
      } else {
        return '<blockquote>' + (this.parse(str)) + '</blockquote>';
      }
    };

    Parser.prototype.parseList = function(lines) {
      var found, html, j, key, l, lastType, leftLines, len, len1, len2, line, m, matches, minSpace, row, rows, secondMinSpace, space, text, type;
      html = '';
      minSpace = 99999;
      rows = [];
      for (key = j = 0, len = lines.length; j < len; key = ++j) {
        line = lines[key];
        if (matches = line.match(/^(\s*)((?:[0-9a-z]+\.?)|\-|\+|\*)(\s+)(.*)$/)) {
          space = matches[1].length;
          type = 0 <= '+-*'.indexOf(matches[2]) ? 'ul' : 'ol';
          minSpace = Math.min(space, minSpace);
          rows.push([space, type, line, matches[4]]);
        } else {
          rows.push(line);
        }
      }
      found = false;
      secondMinSpace = 99999;
      for (l = 0, len1 = rows.length; l < len1; l++) {
        row = rows[l];
        if (row instanceof Array && row[0] !== minSpace) {
          secondMinSpace = Math.min(secondMinSpace, row[0]);
          found = true;
        }
      }
      secondMinSpace = found ? secondMinSpace : minSpace;
      lastType = '';
      leftLines = [];
      for (m = 0, len2 = rows.length; m < len2; m++) {
        row = rows[m];
        if (row instanceof Array) {
          space = row[0], type = row[1], line = row[2], text = row[3];
          if (space !== minSpace) {
            leftLines.push(line.replace(new RegExp("^\\s{" + secondMinSpace + "}"), ''));
          } else {
            if (leftLines.length > 0) {
              html += '<li>' + (this.parse(leftLines.join("\n"))) + '</li>';
            }
            if (lastType !== type) {
              if (!!lastType) {
                html += "</" + lastType + ">";
              }
              html += "<" + type + ">";
            }
            leftLines = [text];
            lastType = type;
          }
        } else {
          leftLines.push(row.replace(new RegExp("^\\s{" + secondMinSpace + "}"), ''));
        }
      }
      if (leftLines.length > 0) {
        html += '<li>' + (this.parse(leftLines.join("\n"))) + ("</li></" + lastType + ">");
      }
      return html;
    };

    Parser.prototype.parseTable = function(lines, value) {
      var aligns, body, column, columns, head, html, ignores, j, key, l, last, len, len1, line, num, output, row, rows, tag, text;
      ignores = value[0], aligns = value[1];
      head = ignores.length > 0 && (ignores.reduce(function(prev, curr) {
        return curr + prev;
      })) > 0;
      html = '<table>';
      body = head ? null : true;
      output = false;
      for (key = j = 0, len = lines.length; j < len; key = ++j) {
        line = lines[key];
        if (0 <= ignores.indexOf(key)) {
          if (head && output) {
            head = false;
            body = true;
          }
          continue;
        }
        line = trim(line);
        output = true;
        if (line[0] === '|') {
          line = line.substring(1);
          if (line[line.length - 1] === '|') {
            line = line.substring(0, line.length - 1);
          }
        }
        rows = line.split('|').map(function(row) {
          if (row.match(/^\s+$/)) {
            return '';
          } else {
            return trim(row);
          }
        });
        columns = {};
        last = -1;
        for (l = 0, len1 = rows.length; l < len1; l++) {
          row = rows[l];
          if (row.length > 0) {
            last += 1;
            columns[last] = [(columns[last] != null ? columns[last][0] + 1 : 1), row];
          } else if (columns[last] != null) {
            columns[last][0] += 1;
          } else {
            columns[0] = [1, row];
          }
        }
        if (head) {
          html += '<thead>';
        } else if (body) {
          html += '<tbody>';
        }
        html += '<tr>';
        for (key in columns) {
          column = columns[key];
          num = column[0], text = column[1];
          tag = head ? 'th' : 'td';
          html += "<" + tag;
          if (num > 1) {
            html += " colspan=\"" + num + "\"";
          }
          if ((aligns[key] != null) && aligns[key] !== 'none') {
            html += " align=\"" + aligns[key] + "\"";
          }
          html += '>' + (this.parseInline(text)) + ("</" + tag + ">");
        }
        html += '</tr>';
        if (head) {
          html += '</thead>';
        } else if (body) {
          body = false;
        }
      }
      if (body !== null) {
        html += '</tbody>';
      }
      return html += '</table>';
    };

    Parser.prototype.parseHr = function() {
      return '<hr>';
    };

    Parser.prototype.parseNormal = function(lines) {
      var str;
      lines = lines.map((function(_this) {
        return function(line) {
          return _this.parseInline(line);
        };
      })(this));
      str = trim(lines.join("\n"));
      str = str.replace(/(\n\s*){2,}/g, '</p><p>');
      str = str.replace(/\n/g, '<br>');
      if (str.match(/^\s*$/)) {
        return '';
      } else {
        return "<p>" + str + "</p>";
      }
    };

    Parser.prototype.parseFootnote = function(lines, value) {
      var index, note, space;
      space = value[0], note = value[1];
      index = this.footnotes.indexOf(note);
      if (index >= 0) {
        lines = lines.slice(0);
        lines[0] = lines[0].replace(/^\[\^((?:[^\]]|\]|\[)+?)\]:/, '');
        this.footnotes[index] = lines;
      }
      return '';
    };

    Parser.prototype.parseDefinition = function() {
      return '';
    };

    Parser.prototype.parseHtml = function(lines, type) {
      lines = lines.map((function(_this) {
        return function(line) {
          return _this.parseInline(line, _this.specialWhiteList[type] != null ? _this.specialWhiteList[type] : '');
        };
      })(this));
      return lines.join("\n");
    };

    Parser.prototype.cleanUrl = function(url) {
      var matches;
      if (!!(matches = url.match(/^\s*((http|https|ftp|mailto):[x80-xff_a-z0-9-\.\/%#@\?\+=~\|\,&\(\)]+)/i))) {
        matches[1];
      }
      if (!!(matches = url.match(/^\s*([x80-xff_a-z0-9-\.\/%#@\?\+=~\|\,&]+)/i))) {
        return matches[1];
      } else {
        return '#';
      }
    };

    Parser.prototype.escapeBracket = function(str) {
      return str_replace(['\\[', '\\]', '\\(', '\\)'], ['[', ']', '(', ')'], str);
    };

    Parser.prototype.startBlock = function(type, start, value) {
      if (value == null) {
        value = null;
      }
      this.pos += 1;
      this.current = type;
      this.blocks.push([type, start, start, value]);
      return this;
    };

    Parser.prototype.endBlock = function() {
      this.current = 'normal';
      return this;
    };

    Parser.prototype.isBlock = function(type, value) {
      if (value == null) {
        value = null;
      }
      return this.current === type && (null === value ? true : this.blocks[this.pos][3] === value);
    };

    Parser.prototype.getBlock = function() {
      if (this.blocks[this.pos] != null) {
        return this.blocks[this.pos];
      } else {
        return null;
      }
    };

    Parser.prototype.setBlock = function(to, value) {
      if (to == null) {
        to = null;
      }
      if (value == null) {
        value = null;
      }
      if (to !== null) {
        this.blocks[this.pos][2] = to;
      }
      if (value !== null) {
        this.blocks[this.pos][3] = value;
      }
      return this;
    };

    Parser.prototype.backBlock = function(step, type, value) {
      var item, last;
      if (value == null) {
        value = null;
      }
      if (this.pos < 0) {
        return this.startBlock(type, 0, value);
      }
      last = this.blocks[this.pos][2];
      this.blocks[this.pos][2] = last - step;
      item = [type, last - step + 1, last, value];
      if (this.blocks[this.pos][1] <= this.blocks[this.pos][2]) {
        this.pos += 1;
        this.blocks.push(item);
      } else {
        this.blocks[this.pos] = item;
      }
      this.current = type;
      return this;
    };

    Parser.prototype.combineBlock = function() {
      var current, prev;
      if (this.pos < 1) {
        return this;
      }
      prev = this.blocks[this.pos - 1].slice(0);
      current = this.blocks[this.pos].slice(0);
      prev[2] = current[2];
      this.blocks[this.pos - 1] = prev;
      this.current = prev[0];
      this.blocks = this.blocks.slice(0, -1);
      this.pos -= 1;
      return this;
    };

    return Parser;

  })();

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Parser;
  } else if (typeof window !== "undefined" && window !== null) {
    window.HyperDown = Parser;
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);