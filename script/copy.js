 

// setTimeout(function() {
//     var div = document.createElement('div');
//     div.setAttribute('onclick', ' return window;');
//     var unsafeWindow = div.onclick();
//     console.log(unsafeWindow.document.title);
// }, 1000);


//直接注入的脚本无法修改原始网页脚本,而是有自己单独的运行环境 只能访问 DOM 所以要这样子迂回一下
setTimeout(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = '$("body").attr("onmousemove","");$("body").attr("onmouseup","");$("body").attr("onclick","");$("body").attr("oncopy","");document.onclick="" ;document.body.setAttribute("data-fp", asw); ';
    document.head.appendChild(script);
    document.head.removeChild(script);
    console.log(document.body.getAttribute('data-fp'));
}, 100);