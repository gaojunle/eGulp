/**
 * @author  liuling-pd on 2016/2/26
 *
 * @descript
 * @version 1.0
 * @example:
 */
require(['js/common/pagePlugins/lyTeamSwiper', 'js/mobile/common/app/appOpenLink'], function (LyTeamSwiper, LinkToWindow) {
    var landing = {
        init: function () {
            //APP拦截链接
            var linkToWin;
            if(window.api){
                if(!linkToWin){
                    linkToWin = new LinkToWindow({
                        container: 'section',
                        eventName: 'yizhenLinkData'
                    });
                }
                
            }
            window.apiready = function(){
                if(!linkToWin){
                    linkToWin = new LinkToWindow({
                        container: 'section',
                        eventName: 'yizhenLinkData'
                    });
                }
                
            };


            new LyTeamSwiper({
                initialSlide: 0
            });

            setTimeout(function () {
                //var h = $(window).height() - $('header').height() - $('nav').height() - $('h1').outerHeight() - 80;
                var h = $(window).height() - $('header').height()  - $('.cl-blue').height() -$('.t-hdimg').height() - 90;
                $('.swiper-slide').height(h);
            }, 10)
        }
    };
    landing.init();

});