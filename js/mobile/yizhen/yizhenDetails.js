/**
 * @author  gaojun-pd on 2016/2/29
 *
 * @descript    义诊详情页JS
 * @version 1.0
 * @example:
 */
require(['Panel', 'js/jq/jquery.countdown'], function (Panel) {
    var $yList = $('.js-yList'),
        $opBox = $('.js-opBox'),
        product_id = $yList.find('.active').data('project_id'); //产品ID（如内科义诊、骨科义诊等），一个义诊项目可能有多个产品

    var isAjaxLoading = false;

    var YZDetails = {
        init: function () {
            this.selectYiZhen();
            this.bindProject();
            this.countDown();
        },

        //选择义诊
        selectYiZhen: function () {
            var yTypes = [];
            $opBox.find('a').each(function () {
                yTypes.push($(this).data('ytype'));
            });

            $yList.on('click', 'li', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                var $this = $(this);

                $this.addClass('active').siblings().removeClass('active');
                $.each(yTypes, function (i, v) {
                    if ($this.data(v) == 0) {
                        $opBox.find('[data-ytype="' + v + '"]').addClass('grey');
                    } else {
                        $opBox.find('[data-ytype="' + v + '"]').removeClass('grey');
                    }
                });

                product_id = $this.data('product_id');
                $opBox.find('a').each(function (i, v) {
                    var $this = $(this),
                        url = $this.data('url');

                    //替换产品ID
                    url = url.replace(/(product_id]?=)\d+/g, function (i, v) {
                        return v + product_id
                    });
                    $this.attr('data-url', url);
                });
                return false;
            });

            $opBox.on('click', 'a', function () {
                var $this = $(this);

                //可点击操作；
                if (!$this.hasClass('grey')) {
                    location.href = $this.attr('data-url');
                }
            });

            //如果只有一个产品，直接选中
            if ($yList.find('li').length == 1){
                $yList.find('li').eq(0).trigger('click');
                $yList.parent().hide();
            }
        },

        //点击义诊项目
        bindProject: function () {
            $opBox.find('a').click(function (evt) {
                if ($yList.find('li.active').length == 0) {
                    evt.stopPropagation();
                    evt.preventDefault();

                    Panel.steam({msg: '请先选择义诊项目'});
                    $('html,body').animate({scrollTop: $yList.offset().top});
                    return false;
                }
            });
        },

        countDown: function () {
            var $countDown = $('.js-countdown'),
                count = parseInt($countDown.data('countdown'));

            if (count > 0) {
                $countDown.parent().show();
                $countDown.countdown({
                    timestamp: (new Date()).getTime() + count,
                    callback: function (days, hours, minutes, seconds) {
                        if (hours == 0 && minutes == 0 && seconds == 0) {
                            $countDown.parent().remove();
                            $opBox.find('a').removeClass('grey');
                        }
                    }
                });
            }
        },

        //暂时不检查 检查该项目是否还有号；（抢号原因）
        checkHasHao: function (goUrl) {
            if (isAjaxLoading = false) {
                return
            }
            isAjaxLoading = true;

            $.post('/yizhen/Apply', {
                page: 'detail',
                project_id: product_id
            }, function (retData) {
                if (retData.errno == 0) {
                    location.href = goUrl;
                } else {
                    Panel.steam({msg: retData.msg});
                    setTimeout(function () {
                        location.reload();
                    }, 400);
                }

                isAjaxLoading = false
            });
        }
    };
    YZDetails.init();
});