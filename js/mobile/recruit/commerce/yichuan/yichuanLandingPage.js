/**
 * @author  liuling-pd on 2016/2/2
 *
 * @descript
 * @version 1.0
 * @example:
 */
require(['js/common/pagePlugins/lyTeamSwiper',
    'js/mobile/recruit/commerce/ztcCommon/commonLandingPage', 'js/mobile/common/swipe'], function (LyTeamSwiper, CommonLandingPage, Swipe) {
    var landing = {
    	//Tab切换 + Swipe
    	initTabSwipe: function(){
    		var $pointer = $('.tabSwipe').prev('.pointer');
    		var tabSwipe = new Swipe(document.querySelector('.tabSwipe'), {
    		    continuous: false,
    		    stopPropagation: true,
    		    transitionEnd: function (index, el) {
    		        $pointer.find('.active').removeClass('active');
    		        $pointer.find('em').eq(index).addClass('active');
    		    }
    		});
    		$pointer.on('click', 'em', function(){
    			var index = $(this).index();
    			$pointer.find('.active').removeClass('active');
		        $pointer.find('em').eq(index).addClass('active');
    			tabSwipe.slide(index);
    		});
    	},
    	init: function(){
			CommonLandingPage.init();
			CommonLandingPage.bindShortcut();
			CommonLandingPage.initFAQ();
    		new LyTeamSwiper({
                initialSlide: 1
            });
    		this.initTabSwipe();
    	}
    };
    landing.init();

});