/**
 * @author  jinlong on 2015/12/10
 *
 * @description 移动版landing page通用功能
 * @version 1.0
 * @example:
 * require(['js/mobile/recruit/ztcCommon/commonLandingPage'], function(commonLanding){
 *      CommonLandingPage.init({checkWeiXin: false});
	    CommonLandingPage.bindShortcut();
 * });
 */
define(['js/mobile/common/swipe', 'js/common/pagePlugins/lyMeiQiaChat'], function (Swipe, LyMeiQiaChat) {
    var commonLandingPage = {
        init: function (opt) {
            var opt = $.extend({
                checkWeiXin: true
            }, opt);

            this._bindSwipe();
            this._initMeiQiaChat();

            if (opt.checkWeiXin && this._isWeixin()) {
                this._bindWeiXin();
            } else {
                this._redirectBtn();
            }
        },
        //区域滑动轮播图
        _bindSwipe: function () {
            $('.swipe').each(function (i, el) {
                var $this = $(el);
                var $pointer = $this.next('.pointer');
                if (!$pointer[0]) {
                    var len = $this.find('li').length,
                        pointerHTML = '<div class="pointer">';
                    for (var i = 0; i < len; i++) {
                        if (i === 0) {
                            pointerHTML += '<em class="active"></em>';
                        } else {
                            pointerHTML += '<em></em>';
                        }
                    }
                    pointerHTML += '</div>';
                    $this.after(pointerHTML);

                    $pointer = $this.next('.pointer')
                }

                new Swipe(el, {
                    continuous: false,
                    // disableScroll: true,
                    stopPropagation: true,
                    transitionEnd: function (index, el) {
                        $pointer.find('.active').removeClass('active');
                        $pointer.find('em').eq(index).addClass('active');
                    }
                });
            });
        },
        //直通车服务切换
        bindShortcut: function () {
            var $container = $('.js-shortcut .js-steps');
            var $crumbs = $('.js-crumbs');
            $crumbs.find('span').each(function (i, el) {
                var $this = $(el);
                $this.on('click', function () {
                    $crumbs.find('.active').removeClass('active');
                    $this.addClass('active');
                    $container.find('li.show').removeClass('show');
                    $container.find('li').eq(i).addClass('show');
                });
            });
        },
        //常见问题模块
        initFAQ: function () {
            var $faqbox = $('.js-faqbox'),
                $goback = $('.js-goback'),
                $iframebox = $('.js-inner-iframe'),
                $prev = $('.js-faq-prev'),
                $next = $('.js-faq-next'),
                listLen = $faqbox.find('li').length,
                curIndex;

            //初始化容器宽度
            var boxWid = $faqbox.width(), boxH = $faqbox.height();
            $faqbox.parent().width(boxWid * 2);
            $faqbox.width(boxWid);
            $iframebox.width(boxWid);

            //设置iframebox的高度；
            $iframebox.height(boxH);

            //链接点击展开iframe
            $faqbox.on('click', 'li a', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                curIndex = $(this).data('index');
                showIframe($(this).data('faqsrc'));

                return false;
            });

            //返回按钮
            $goback.click(function () {
                $(this).parent().hide();
                $faqbox.animate({
                    marginLeft: 0,
                    opacity: 1
                });
                $iframebox.fadeOut();
                $faqbox.fadeIn();
                toggleNP(false);
            });

            //上一篇
            $prev.click(function () {
                $faqbox.find('[data-index="' + (curIndex - 1) + '"]').trigger('click');
            });

            //下一篇
            $next.click(function () {
                $faqbox.find('[data-index="' + (curIndex + 1) + '"]').trigger('click');
            });

            //根据地址栏faqsrc属性来加载对应的内容
            if (qs('faqsrc')) {
                $('html,body').scrollTop($('#faq').offset().top);
                curIndex = parseInt(/\d+/.exec(qs('faqsrc')));
                if (LY_INFO.ident) {
                    showIframe('/ztc/' + LY_INFO.ident + '?act=subreq&faq=' + qs('faqsrc'));
                }

                return false;
            }
            //切换上下篇显示
            function toggleNP(isShow) {
                isShow = isShow || false;
                $next.toggle(isShow);
                $prev.toggle(isShow);
            }

            //querysearch
            function qs(key, url) {
                var query,
                    params = {};

                query = window.location.search || url;

                if (!key) {
                    return '';
                }

                if (!query) {
                    return '';
                }

                query.replace(
                    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                    function ($0, $1, $2, $3) {
                        params[$1] = $3;
                    }
                );

                return params[key] || undefined;
            }

            //显示FAQ的iframe对应具体内容
            function showIframe(faqsrc) {
                if (!faqsrc) {
                    alert('链接地址错误，请刷新重试');
                    return false;
                }

                var boxWid = $faqbox.width();
                $faqbox.animate({
                    marginLeft: -boxWid,
                    opacity: 0
                }, 400);

                $iframebox.find('iframe').attr('src', faqsrc);
                $iframebox.fadeIn(300);
                $goback.parent().fadeIn();

                toggleNP(true);
                listLen == curIndex ? $next.hide() : '';
                curIndex == 1 ? $prev.hide() : '';
            }
        },
        //需要登录或跳转的按钮事件绑定
        _redirectBtn: function () {
            $('.js-order').on('click', function () {
                var redirectUrl = $(this).data('redirect') || '/user/login';	//重定向URL
                location.href = redirectUrl;

                return false;
            });
        },

        //绑定微信
        _bindWeiXin: function () {
            $('.js-order').attr('href', 'javascript:;').click(function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                showWeiXinTip();
                return false;
            });

            function showWeiXinTip() {
                var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
                var weixinTip = $('<div id="weixinTip"><p><img style="width: 100%" src="http://p4.qhimg.com/t0151689ab62456804a.png" alt="浏览器打开"/></p></div>');

                $("body").append(weixinTip);
                $("#weixinTip").css({
                    "position": "fixed",
                    "left": "0",
                    "top": "0",
                    "height": winHeight,
                    "width": "100%",
                    "z-index": "1000",
                    "background-color": "rgba(0,0,0,0.8)"
                }).click(function () {
                    $('#weixinTip').remove();
                });

                $("#weixinTip p").css({
                    "text-align": "center",
                    "margin-top": "-15%"
                });
            }
        },
        _isWeixin: function () {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        },
        //初始化美洽，美洽ID从页面中LY_Info中获取
        _initMeiQiaChat: function () {
            if (typeof LY_INFO != 'undefined' && LY_INFO.hasOwnProperty('meiqiaID')) {
                new LyMeiQiaChat({
                    projectId: LY_INFO.meiqiaID,
                    handleEle: '.js-online-chat',
                    withoutBtn: false
                });
            } else {
                try {
                    console.error('缺失美洽ID，无法初始化');
                } catch (e) {

                }
            }
        }
    };

    return commonLandingPage;
});