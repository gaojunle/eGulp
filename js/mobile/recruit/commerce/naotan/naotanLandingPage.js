/**
 * @author  liuling-pd on 2016/3/21
 *
 * @descript
 * @version 1.0
 * @example:
 */
require(['js/common/pagePlugins/lyTeamSwiper',
    'js/mobile/recruit/commerce/ztcCommon/commonLandingPage'], function (LyTeamSwiper, CommonLandingPage) {

    var $fold = $('.js-fold');
    var NaoTanLandingPage = {
        init: function () {
            this.initCommmonLanding();
            this.toggleShow();
        },
        //栏目显示/隐藏
        toggleShow: function () {
            $fold.on('click', '.js-box-tit', function () {
                var $this = $(this),
                    $content = $this.next('.js-box-con');
                if ($this.hasClass('shrink')) {
                    $content.slideUp();
                } else {
                    $content.slideDown();
                }

                $this.toggleClass('shrink');
            });
        },

        //栏目显示/隐藏
        initCommmonLanding: function () {
            CommonLandingPage.init({checkWeiXin: false})
            CommonLandingPage.bindShortcut();
            new LyTeamSwiper({
                initialSlide: 1
            });
        }
    };

    NaoTanLandingPage.init();
});