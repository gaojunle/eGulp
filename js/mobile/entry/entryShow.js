/**
 * @author  jinlong on 2016/03/12
 *
 * @description 文章展示页
 * @version 1.0
 * @example:
 */
require(['Panel', 'js/mobile/common/jquery.hammer.min'], function (Panel, Hammer) {
    var $collectUp = $('.js-collect-up'),
        $upBtn = $collectUp.find('.js-up'),
        $collectBtn = $collectUp.find('.js-collect'),
        timer,
        inited,
        deviceId;	//设备ID

    var articlePage = function () {
        this.postParams = {
            pj_src: LY_INFO.pj_src
        }

        if (inited) {
            return;
        }
        inited = true;
        this.init();
    }

    articlePage.prototype = {
        init: function () {
            var that = this;

            this.initData();
            this.showBtn();
            this.bindPanAnimate();  //页面移动（按钮显隐效果）
            this._fadeOut();
        },

        //初始化点赞和收藏数
        initData: function () {
            var that = this,
                _postParam = $.extend({act: 'amount', deviceId: api.deviceId}, that.postParams);

            //初始化点赞
            $.get('/LyApp/updown', _postParam, function (retData) {
                if (retData.errno == 0) {
                    $upBtn.find('span').text(retData.data.amount);
                    //如果点过赞
                    if (!!retData.data.isup) {
                        $upBtn.attr('disabled', 'disabled');
                    }
                    that.bindUp();          //绑定点赞
                } else {
                    Panel.steam({msg: retData.msg})
                }
            });

            //初始化收藏
            _postParam = $.extend({act: 'btnFavInfo'}, that.postParams);
            $.get('/lyApp/fav', _postParam, function (retData) {
                if (retData.errno == 0) {
                    $collectBtn.find('span').text(retData.data.amount);
                    //如果收藏过
                    if (!!retData.data.is_fav) {
                        $collectBtn.attr('disabled', 'disabled');
                    }
                    that.bindCollect();     //绑定收藏[已经收藏的点击就是取消收藏]
                } else {
                    Panel.steam({msg: retData.msg})
                }
            });
        },

        //显示点赞和收藏
        showBtn: function () {
            $collectUp.fadeIn();
        },

        //页面移动（按钮显隐效果）
        bindPanAnimate: function () {
            var that = this,
                hammertime = new Hammer(document.body, {touchAction: 'auto'});
            hammertime.on('pan', function (ev) {
                if ($collectUp.css('display') === 'none') {
                    //滚屏时出现
                    $collectUp.fadeIn();
                }
            });
            hammertime.get('pan').set({direction: Hammer.DIRECTION_VERTICAL});
            hammertime.on('panend', function (ev) {
                that._fadeOut();
            });
        },

        //收藏(需要验证登录)
        bindCollect: function () {
            var that = this;
            $collectBtn.hammer().on('tap', function () {
                var $this = $(this);

                var extParam = {
                    act: 'doFav'
                }
                if ($this.attr('disabled') == 'disabled') {
                    extParam.opt = 'cancel'
                }

                $.post($this.data('url'), $.extend(extParam, that.postParams), function (retData) {
                    if (retData.errno == 0) {
                        if ($this.attr('disabled') == 'disabled') {
                            $this.removeAttr('disabled');
                        } else {
                            $this.attr('disabled', 'disabled');
                            $this.prev('.add').addClass('fade');
                        }

                        //服务端返回收藏个数
                        $this.find('span').text(retData.data.fav_num);

                        Panel.success({msg: retData.msg});
                    } else if (retData.errno == -2) {
                        location.href = '/user/login';
                    } else {
                        Panel.steam({msg: retData.msg})
                    }
                });

                return false;
            });
        },

        //点赞(需要传递deviceId,c_type类型,c_id标识)
        bindUp: function () {
            var that = this;

            $upBtn.hammer().on('tap', function () {
                var $this = $(this);

                //已点赞，提示已经点赞
                if ($this.attr('disabled') == 'disabled') {
                    Panel.warn({msg: '您已点赞'});
                    return false;
                }

                $.post($this.data('url'), $.extend({
                        deviceId: api.deviceId//传入的设备ID
                    }, that.postParams),
                    function (retData) {
                        if (retData.errno == 0) {
                            $this.attr('disabled', 'disabled');
                            $this.prev('.add').addClass('fade');

                            //服务端返回点赞个数
                            $this.find('span').text(retData.data.amount);

                            Panel.success({msg: retData.msg});
                        } else {
                            Panel.steam({msg: retData.msg})
                        }
                    }).error(function () {
                    Panel.steam({msg: retData.msg})
                });

                return false;
            });
        },

        bindShare: function () {
            //传数据给APP
            var shareData = {
                title: '良医测试',          //分享的标题
                description: '我是良医良医是我，我是良医良医是我',    //分享的摘要
                thumb: 'widget://image/logo-liangyi.png',          //分享的缩略图
                contentUrl: 'http://www.liangyi.com/yizhen'      //分享的URL
            };

            api.sendEvent({
                name: 'shareData',
                extra: shareData
            });
        },

        //5s后消失
        _fadeOut: function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                $collectUp.fadeOut();
            }, 5000);
        }
    };

    /*api = {
     deviceId = '100001'
     }
     new articlePage();*/
    if (window.api) {
        new articlePage();
    }

    window.apiready = function () {
        new articlePage();
    }
});