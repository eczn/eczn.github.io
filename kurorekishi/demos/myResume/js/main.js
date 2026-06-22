// main.js
 
    var $styContent = document.getElementById('sty-input')
      , $content = document.getElementsByClassName('content')[0]
      , $sty = document.getElementById('sty'); 

    var myStyle = `/**
 *  你好 我叫 xxx (自称 eczn )
 *  这是一份在线的自我介绍，也算是简历 
 *  受 https://github.com/jirengu-inc/animating-resume 的启发而做的 
 */ 

* { /* 惯用四格缩进 */
    margin: 0; 
    padding: 0; 
    /* 最喜欢用的编程字体 */
    font-family: consolas, Menlo; 
    /* 加特技 */
    transition: all .4s;
}

body { background-color: #333; color: #CCC; }
pre { padding: .25em .5em; margin: .5em 1em; }

/** 
 *  高亮 
 */ 
.hljs-comment { color: #888; }
.hljs-string { color: #9C9; }
.hljs-value { color: rgb(240, 153, 64); }
.hljs-attribute { color: rgb(240, 204, 120); }
.hljs-tag, .hljs-class { color: rgb(230, 93, 64); }

/** 
 *  编辑器 
 */ 
.resume {
    position: absolute;
    padding: 2% 2%;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    right: 0;
    top: 0;
    background-color: white;
}

`

    var resumeText = `
# xxx
\`前端开发\` \`0v0\` \`求职中\` \`广州\` \`自称eczn\` \`同装会\`
1. QQ: [见首页](/)
2. e-mail: [见首页](/)


# 技能树
Vue, Angular2, node/Express, gulp/webpack, Linux, ES6, 微信开发 

# 自我介绍 
1. 广东工业大学计算机学院网络工程在读生, 作为 Night's Watch 工作室成员学习前端 
2. 曾做过的、有趣的事：
   * 自己写了静态博客生成器 Vally 用来来写博客 
   * JavaScript 函数式编程 
   * left.js (类似 jQuery) 
   * [More ... ](https://github.com/eczn?tab=repositories)

# 链接
* [Github - eczn](https://github.com/eczn) 
* [SegmentFault - eczn](https://segmentfault.com/u/eczn) 
* [Vally - My Blog](/) 

> Stay Hungry, Stay Foolish. 


`
    hljs.configure({
        tabReplace: '    ',
    }); 

    function write($doms, word, cb, echo, speed){
        speed = speed || 1; 
        if (!cb || !echo) {
            console.error('no cb and echo')
            return ; 
        }
        var wordAcc = $doms[$doms.length-1].innerHTML || ''; 
        var wordWs = new Ws(word); 

        var timer4echo = setInterval(function(){
            echo($doms, wordAcc); 
        }, 300); 

        var timer4frame = setInterval(function(){
            var e = wordWs.get(); 

            if (e) {
                wordAcc += e; 
                $doms.forEach(function(dom){
                    dom.innerHTML += e; 
                    $(dom).scrollTop(dom.scrollHeight);
                });
            } else {
                clearInterval(timer4frame);
                clearInterval(timer4echo);
                echo($doms, wordAcc); 

                cb && cb(wordAcc); 
            }
        }, speed);
    }

    function hlCSS($doms, initStr){
        var $pres = $doms.slice(0, $doms.length -1); 
        var sty = $doms[$doms.length - 1];

        // console.log($pres)
        $pres.forEach(function(dom){
            var css = hljs.highlight('css', initStr);
            dom.innerHTML = css.value; 
        })
    }

    var parser = new HyperDown; 
    // 第一层 css 
    write([$styContent, $sty], myStyle, function(){
        // 第二层 简历 
        write([$('.resume')[0]], resumeText, function(){
            // 第三层 
            write([$styContent, $sty], styContent2, function(fullText){
                console.log('FINISH'); 

                var html = parser.makeHtml(resumeText);
                console.log(html); 

                $('.resume')[0].innerHTML = html; 


                // 第四层 
                write([$styContent, $sty], mdStyle, function(acc){
                    console.log('FINISH'); 
                    var img = '<img src="img/bg.png" alt="bg -eczn" />'; 
                    $('.resume blockquote').before(img); 
                }, hlCSS); 
            }, hlCSS); 
        }, function(acc){ }); 
    }, hlCSS, 0); 


var styContent2 = `
/** 
 *  接下来把 Markdown 转换成 html
 *  再写一下样式 
 */
.css {
    position: fixed; display: block;
    height: 100%; width: 50%; left: 0; top: 0;
    padding: .75em 1.5em;
    box-sizing: border-box;
    overflow-y: hidden;
}
`
var mdStyle = `
.resume {
    line-height: 1.5; 
    color: #444; 
}

.resume * {
    transition: all .2s; 
    font-weight: normal; 
}

p { margin-bottom: 1em; }
a { color: #833; }

h1 {
    font-size: 1.8em;
    position: relative;
    margin: .6em 0;
}

h1:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #DDD;
    background-image: repeating-linear-gradient(
        -45deg,
        #FFF,
        #FFF 4px,
        transparent 4px,
        transparent 8px
    ); 
}

h1:before {
    content: "#"; 
    padding-right: .5em;
    color: #464; 
}

ul, ol {
    line-height: 1.0;
    margin-bottom: 1.5em;
}

ol {
    list-style-type: katakana-iroha; 
    margin-left: 2em;
}

ul { 
    list-style-type: none;
}

ul li:before {
    content: ">"; 
    padding-right: .8em; 
    float: left; 
}

.resume code {
    font-family: "Consolas", "Menlo";
    padding: .2em .5em;
    border: 1px dashed #BBB;
    border-radius: 4px;
}

blockquote {
    max-width: 80%; display: block;
    padding: 1.6em 5em;
    margin: 3em 0;
    position: relative;
    vertical-align: top;
    border-bottom: 1px dashed #DDD;
}

blockquote:before {
    content: "“";
    opacity: .45;
    left: 0;
    font-size: 4.5em;
    top: -0.5em;
    position: absolute;
    display: inline-block;
}

.resume img {
    position: absolute;
    max-width: 233px;
    right: 8em;
}

`
