# eGulp
轻松使用gulp构造前端脚手架，实现前端工程化、流程化，让工程师从重复劳动解除出来

header 1 | header 2 | h3
---:|---:|:---:|
1 | row 1 col 2   | row1 col 3
row 2 col 1 | row 2 col 2   | row2 col 3

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

#### 以下是代码框
```
<div class="image-package imagebubble" widget="ImageBubble">
    <img src="">
    <br>
    <div class="image-caption">URL 与图片</div>
</div>
```
```
var modalOpt = $.extend(defaultOpt, opt),
    contentHtml = template(tpls.modal, modalOpt),
    $content = $(contentHtml), $mask = $(tpls.mask);

var openModal = function(){
	$(document.body).append($content);
	$(document.body).append($mask);
};

var closeModal = function(){
	$content.remove();
	$mask.remove();
};
```

```
/**
 * nth element in the fibonacci series.
 * @param n >= 0
 * @return the nth element, >= 0.
 */
function fib(n) {
    var a = 1, b = 1;
    var tmp;
    while (--n >= 0) {
        tmp = a;
        a += b;
       b = tmp;
    }
    return a;
}

document.write(fib(10));
```