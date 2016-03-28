/**
 * @author  jinlong on 2015/12/31
 *
 * @description 赛德阳光 landing page
 * @version 1.0
 * @example:
 */
require(['js/common/pagePlugins/lyTeamSwiper',
    'js/mobile/recruit/commerce/ztcCommon/commonLandingPage'], function (LyTeamSwiper, CommonLandingPage) {
    CommonLandingPage.init();
    CommonLandingPage.bindShortcut();
    CommonLandingPage.initFAQ();
    new LyTeamSwiper();
});