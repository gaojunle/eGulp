/**
 * @author  jinlong on 2016/02/26
 *
 * @description 个人中心列表页
 * @version 1.0
 * @example:
 */
require(['js/mobile/common/swipe', 'js/mobile/common/template7'], function (Swipe) {
    var mySwipe;
    var uCenter = {
        activeNav: function (index) {
            var $nav = $('.js-nav'), $pointer = $nav.find('.pointer'),
                $item = $nav.find('.item').eq(index).find('span');
            $nav.find('.cur').removeClass('cur');
            $item.addClass('cur');
            var w = $item.outerWidth(),
                l = $item.position().left;
            $pointer.css({
                'width': w + 'px',
                'left': l + 'px'
            })
        },
        //滑动切换
        initSwipe: function () {
            var that = this;
            var $nav = $('.js-nav'), $pointer = $nav.find('.pointer'), $item = $nav.find('.cur span');
            var w = $item.outerWidth(),
                l = $item.position().left;
            $pointer.css({
                'width': w + 'px',
                'left': l + 'px'
            })

            mySwipe = new Swipe(document.querySelector('.js-swipe'), {
                continuous: false,
                callback: function (index, elem) {
                    that.activeNav(index);
                },
                transitionEnd: function (index, elem) {
                }
            });
        },

        //点击切换
        clickToToggle: function () {
            var that = this;
            var $items = $('.js-nav').find('.items'), $item, index;
            $items.on('click', 'span', function () {
                $item = $(this).parent('.item');
                index = $item.index();
                that.activeNav(index);
                mySwipe.slide(index);

                $('.go-home').attr('href', index == 0 ? '/yizhen' : '/')
            });
        },

        //异步加载Tab数据
        initData: function () {
            var that = this;
            var yzTpl = $('#yizhen-tpl').html(), ztcTpl = $('#ztc-tpl').html();
            var yzTemplate = Template7.compile(yzTpl), ztcTemplate = Template7.compile(ztcTpl);
            var yzHtml, ztcHtml;
            var $content = $('.js-content');

            var getZtcData = function () {
                //直通车列表
                $.get('/ZtcUser/UserApplyZtcList', function (result) {
                    if (result.errno === 0) {
                        var data = result.data;
                        ztcHtml = ztcTemplate(data);
                        $content.append(ztcHtml);
                        $content.find('ul').show();

                        that.initSwipe();
                        that.clickToToggle();

                        //根据location默认显示直通车Tag
                        if (location.search.indexOf('tab=yizhen') > -1) {
                            $('.js-nav').find('.item').eq(0).find('span').trigger('click');
                        } else if (location.search.indexOf('tab=ztc') > -1) {
                            $('.js-nav').find('.item').eq(1).find('span').trigger('click');
                        }
                    } else {
                        if (result.msg) {
                            alert(result.msg);
                        }
                    }
                });
            };

            //义诊列表
            $.get('/yizhen/UCenter', function (result) {
                if (result.errno === 0) {
                    var data = result.data;
                    yzHtml = yzTemplate(data);
                    $content.append(yzHtml);

                    getZtcData();
                } else {
                    if (result.msg) {
                        alert(result.msg);
                    }
                }
            });

        },
        init: function () {
            this.initData();
        }
    };
    uCenter.init();
});