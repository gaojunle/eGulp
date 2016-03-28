/**
 * @author  liuling-pd on 2016/1/8
 *
 * @descript
 * @version 1.0
 * @example:
 */

require(['base',
    'js/mobile/common/swipe',
    'js/common/mod/querySearch',
    'js/common/mod/modTemp'], function (Base, Swipe, Qs, ModTemp) {

    var isLoading = false,
        $section = $('section');

    var landing = {
        //栏目显示/隐藏
        toggleShow: function () {
            var that = this;

            $section.one('click', '.menu-swipe', function () {
                that.bindSwipe();
            });
            $section.on('click', 'h2', function () {
                var $this = $(this),
                    $content = $this.next();
                if($this.hasClass('shrink')){
                    $content.slideUp();
                }else{
                    $content.slideDown();
                }

                $this.toggleClass('shrink');
                that.bindSwipe();
            });

            //默认基本信息展示
            $section.find('h2').eq(0).trigger('click');
        },

        //区域滑动轮播图
        bindSwipe: function () {
            $('.js-swipe').each(function (i, el) {
                var $this = $(el);
                var $pointer = $this.find('.pointer');
                if (!$pointer[0]) {
                    var len = $this.find('li.js-box').length,
                        pointerHTML = '<div class="pointer">';
                    for (var i = 0; i < len; i++) {
                        if (i === 0) {
                            pointerHTML += '<em class="active"></em>';
                        } else {
                            pointerHTML += '<em></em>';
                        }
                    }
                    pointerHTML += '</div>';
                    $this.append(pointerHTML);

                    $pointer = $this.find('.pointer')
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

        //显示更多
        showMore: function () {
            $section.on('click', '.btn-more', function () {
                var fold = $('.more-fold').clone();
                fold.removeClass().css({
                    position: 'absolute',
                    fontSize: $('.more-fold').css('font-size'),
                    lineHeight: $('.more-fold').css('lineHeight'),
                    padding: $('.more-fold').css('padding'),
                    margin: '0 1rem',
                    boxSizing: 'border-box',
                    /*left: -9999,
                     top: -99999,*/
                    width: '95%'
                }).appendTo('body');
                var h = fold.height();
                fold.remove();
                $('.btn-more').hide();
                $('p.more-fold').animate({'height': h}, 400, function () {
                    $(this).css({
                        'min-height': h,
                        'height': 'auto'
                    });
                })
                $('p.more-fold').removeClass('more-fold').addClass('more-unfold');
            });
        },

        //初始化科学贡献数据
        initContributeData: function () {
            var that = this,
                $totalNum = $('.js-total-num'),
                totalNum = 0,
                types = ['news', 'entry', 'question'],
                tpl = '';

            this._request('/doctor/AjaxGetArticle', {uid: Qs('uid')}, function (retData) {
                //每种文章类型处理
                $.each(types, function (i, v) {
                    var data = retData.data[v],
                        $box = $('.js-' + types[i] + '-ul');

                    totalNum += parseInt(data.count);
                    $('.js-' + types[i] + '-num').html(data.count);
                    tpl = '';

                    $.each(data.list, function (idx, val) {
                        tpl += that._createAritcleTpl(types[i], val);
                    });

                    //换一换上数据
                    $box.parent().find('.js-exchange').data('count', data.count).data('page', data.pages).data('start', 1).data('type', types[i]);

                    //移除原来li，添加新内容
                    $box.html(tpl);
                });

                $totalNum.html(totalNum);
            }, 'post');
        },

        //绑定换一换事件
        bindExchange: function () {
            var that = this,
                $box = null,
                tpl = '';

            $('.js-exchange').on('click', function (evt) {
                evt.preventDefault();

                var $this = $(this),
                    start = $this.data('start'),
                    page = $this.data('page'),
                    nextStart = (start == page ? 1 : start + 1),
                    type = $this.data('type'),
                    $box = $('.js-' + type + '-ul');

                that._request('/doctor/AjaxGetArticle', {
                    uid: Qs('uid'),
                    start: nextStart,
                    type: type
                }, function (retData) {
                    $this.data('start', nextStart);

                    $.each(retData.data[type].list, function (i, v) {
                        tpl += that._createAritcleTpl(type, v);
                    });

                    //移除原来li，添加新内容
                    $box.html(tpl);
                    tpl = ''
                }, 'post');
            });
        },

        //创建文章列表的模板
        _createAritcleTpl: function (type, data) {
            var tpl = '';
            switch (type) {
                case 'news':
                    tpl += '<li>•<a href="/hpNews/View?id=' + data.id + '">' + data.title + '</a></li>'
                    break;
                case 'entry':
                    tpl += '<li>•<a href="/entry/view?eid=' + data.eid + '">' + data.ename + '</a></li>';
                    break;
                case 'question':
                    tpl += '<li>•<a href="/entry/view?eid=' + data.eid + '&loc=questionb">' + data.qtitle + '</a></li>'
                    break
            }
            return tpl;
        },

        /**
         * 发送请求，isLoading加判断，返回前再次请求不成功
         * @param url       url地址
         * @param reqParam  参数JSON对象
         * @param callback  成功的回调函数
         * @param reqType   请求类型，默认get
         * @returns {boolean}
         * @private 对象内使用的私有函数
         */
        _request: function (url, reqParam, callback, reqType, isShowTip) {
            if (!url) {
                alert('URL地址为必要参数');
                return false;
            }

            //接口未返回时，不再执行ajax调用；
            if (isLoading) {
                return false;
            }
            isLoading = true;

            $.ajax({
                type: reqType || "GET",
                url: url,
                data: reqParam,
                dataType: "json",
                success: function (retData) {
                    isLoading = false;

                    //返回数据成功
                    if (retData.errno == 0 && $.isFunction(callback)) {
                        callback(retData);
                    } else {
                        if (Base && Base.P) {
                            Base.P.steam({msg: retData.msg});
                        }
                    }
                },
                error: function () {
                    Base.P.steam({msg: '系统加载错误，请刷新重试!'});
                    isLoading = false;
                }
            });
        },
        init: function () {
            this.toggleShow();
            this.showMore();
            this.initContributeData();
            this.bindExchange();
        }
    };

    landing.init();
});