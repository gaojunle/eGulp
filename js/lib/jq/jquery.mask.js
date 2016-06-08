/*
 * 基于jQueryr的遮罩插件
 * @author gaojun
 * @desc
    //设置遮罩
    $.mask({
        message: '<h1><img src="busy.gif" /> Just a moment...</h1>',    //弹出框中内容
        //弹出框样式
        css: {
            border: 'none',
            padding: '20px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .6,
            color: '#fff',
            cursor: 'wait'
        },
        fadeIn: 700,
        fadeOut: 700,
        timeout: 2000,      //2秒后自动退出遮罩
        showOverlay: true,  //是否显示遮罩
        overlayCSS: {       //遮罩层样式
            cursor: 'wait'
        },
        onBlock: function () {//弹框显示后事件
            alert('Page is now blocked; fadeIn complete');
        },
        onOverlayClick: function () {//遮罩层被点击的事件
            alert('遮罩被点击');
        }
    });

    //取消遮罩
    $.unmask({
        //取消的回调事件
        onUnblock: function () {
            alert('onUnblock');
        }
    });

 $.mask({message: '<h1><img src="/img/loading.gif" /> Just a moment...</h1>'})
 */
(function () {
    $.extend($.fn, {
        mask: function (msg, opt) {
            if (this.find('#_maskid_').length > 0) {
                return;
            }
            this.unmask();
            // 参数
            var opt = {
                opacity: 0.8,
                z: 1000,
                bgcolor: '#ccc',
                maskClickHide: true,
                escHide: true
            };
            opt = $.extend(opt, opt);
            var $win = $(window),
                original = $(document.body),
                position = {top: 0, left: 0};

            if (this[0] && this[0] !== window.document) {
                original = this;
                position = original.position();
            }

            // 创建一个 Mask 层，追加到对象中
            var maskDiv = $('<div id="_maskid_" class="maskdivgen">&nbsp;</div>');
            maskDiv.appendTo(original);

            var maskWidth = original.outerWidth();
            if (!maskWidth) {
                maskWidth = original.width();
            }

            var maskHeight = original.outerHeight() > $win.height() ? $win.height() : original.outerHeight();
            if (!maskHeight) {
                maskHeight = original.height() > $win.height() ? $win.height() : original.height();
            }

            maskDiv.css({
                position: 'fixed',
                top: position.top,
                left: position.left,
                'z-index': opt.z,
                width: maskWidth,
                height: maskHeight,
                'background-color': opt.bgcolor,
                opacity: 0
            });

            if (opt && opt.maskDivClass) {
                maskDiv.addClass(opt.maskDivClass);
            }

            var that = this;
            if (opt && opt.maskClickHide) {
                maskDiv.click(function () {
                    that.unmask();
                });
            }
            if (opt && opt.escHide) {
                this.on('keyup', function (evt) {
                    if (evt.keyCode == '27') {
                        that.unmask();
                    }
                });
            }
            if (msg) {
                var msgDiv = $('<div class="smaskmsg" style="z-index:1001;position:fixed;border:#c0c0c0 1px solid;background: white;opacity: 0;"></div>');
                msgDiv.append(msg);
                msgDiv.appendTo('body');
                var widthspace = (maskDiv.width() - msgDiv.width());
                var heightspace = (maskDiv.height() - msgDiv.height());
                msgDiv.css({
                    cursor: 'default',
                    top: (heightspace / 2 - 2),
                    left: (widthspace / 2 - 2)
                });
            }

            maskDiv.fadeTo(400, opt.opacity);
            msgDiv.fadeTo(400, 1);
            return maskDiv;
        },
        unmask: function () {
            var original = $(document.body);
            if (this[0] && this[0] !== window.document) {
                original = $(this[0]);
            }
            original.find("> div.maskdivgen, div.smaskmsg").fadeOut(400, 0, function () {
                $(this).remove();
            });
        }
    });
})();