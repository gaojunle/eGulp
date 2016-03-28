/**
 * @author  gaojun-pd on 2016/3/12
 *
 * @descript
 * @version 1.0
 * @example:
 */
require(['Panel', 'js/mobile/common/jquery.hammer.min', 'js/mobile/common/app/appOpenLink'], function (Panel, Hammer, LinkToWindow) {
    var $cityList = $('.js-city-list'),
        $curCity = $cityList.eq(0);

    var GuahaoList = {
        init: function () {
            this.bindSwitchCity();
            this.bindSearch();
            this.bindClearSearch();

            //add by jinlong | 2016-03-17
            //用于良医APP，新开挂号详情页面，不做跳转
            window.apiready = function () {
                new LinkToWindow({
                    container: '.js-city-list',
                    eventName: 'regisLinkData'
                });
            };
        },

        //切换城市，使用hammer.tap去掉300毫秒延迟
        bindSwitchCity: function () {
            $('.js-item').hammer().on("tap", function () {
                var $this = $(this),
                    idx = $this.index();

                if ($this.is('span') && $this.hasClass('cur')) {
                    return;
                }

                $this.addClass('cur').siblings().removeClass('cur');
                $cityList.hide();
                $curCity = $cityList.eq(idx).show();

                //切换城市时激活一下搜索
                $('.js-search-ipt').trigger('input');
            });
        },

        //搜索输入事件
        bindSearch: function () {
            $('.js-search-ipt').on('input', function (evt) {
                var $lists = $curCity.find('p');
                var $this = $(this),
                    val = $this.val().toUpperCase();

                $lists.each(function (i, v) {
                    var $this = $(this);

                    if ($this.find('span:contains("' + val + '")').length > 0) {
                        $this.show();
                    } else {
                        $this.hide();
                    }
                });

                if (val == '') {
                    $curCity.find('p').show();
                }
            });
        },

        //清除搜索内容
        bindClearSearch: function () {
            $('.js-clear-search').click(function () {
                $('.js-search-ipt').val('').trigger('input');
            });
        }
    };

    GuahaoList.init();
});