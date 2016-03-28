/**
 * @author  gaojun-pd on 2016/3/2
 *
 * @descript    个人中心义诊详情
 * @version 1.0
 * @example:
 */

//add by jinlong | 2016-03-23
//逻辑交给APP处理
window.apiready = function(){
    //义诊详情页 -> 点击“+ 发现更多义诊”，关闭页面
    $('.js-infobox a.add').on('click', function(e){
        if($(this).attr('href') === '/yizhen'){
            e.preventDefault();

            api.closeWin();
        }
    });
}

require(['Panel', 'js/common/pagePlugins/lyRating'], function (Panel, lyRating) {
    var $infobox = $('.js-infobox')

    var UcenterDetails = {
        init: function () {
            this.bindToggleFold();
            this.bindCancelOrder();
            this.bindShowWeiXin();

            //良医评价插件
            new lyRating({
                txtLen: 20,
                sucCallback: function () {
                    Panel.confirm({
                        title: '评价成功',
                        msg: "评价操作成功",
                        yesBtnText: "<a href='/yizhen/Rss' style='color:#66b8e5'>订阅其它义诊</a>",
                        noBtnText: "返回"
                    })
                }
            });
                
        },

        //绑定展开与收起个人资料
        bindToggleFold: function () {
            $infobox.on('click', '.js-fold', function () {
                var _this = $(this),
                    $parentBox = _this.parents('.item');

                _this.hide();
                $parentBox.removeClass('fold').addClass('unfold');
                $parentBox.find('.js-unfold').show();
            }).on('click', '.js-unfold', function () {
                var _this = $(this),
                    $parentBox = _this.parents('.item');

                _this.hide();
                $parentBox.removeClass('unfold').addClass('fold');
                $parentBox.find('.js-fold').show();
            });
        },

        bindCancelOrder: function () {
            $infobox.on('click', '.js-concel-order', function () {
                var $this = $(this);

                Panel.confirm({
                    title: '是否确定取消预约',
                    msg: '若取消预约，则无法参加本次义诊',
                    yesBtnText: "确定取消",
                    noBtnText: "稍后再说",
                    yesFun: function () {
                        $.post($this.data('url'), $this.data('post')).done(function (retData) {
                            if (retData.errno == 0) {
                                Panel.success({msg: retData.msg});
                                Panel.alert({
                                    msg: retData.msg,
                                    yesFun: function () {
                                        location.reload();
                                    }
                                });
                            } else {
                                Panel.steam({msg: retData.msg});
                            }
                        });
                    }
                })
            });
        },

        bindShowWeiXin: function () {
            var that = this;

            var ua = navigator.userAgent.toLowerCase();
            if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
                $('.btn-order:contains("立即支付")').click(function (evt) {
                    $(this).attr('href', "#")
                    evt.stopPropagation();
                    evt.preventDefault();

                    that.isShowWeiXin();

                    return false;
                });
            }
        },

        //绑定微信
        isShowWeiXin: function () {
            if (isWeixin()) {
                showWeiXinTip();
                return true;
            }
            return false;

            function isWeixin() {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                } else {
                    return false;
                }
            }

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
        }
    };

    UcenterDetails.init();
});
