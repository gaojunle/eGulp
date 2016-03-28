/**
 * @author  gaojun-pd on 2015/12/31
 *
 * @descript    商业招募－遗传
 * @version 1.0
 */
require(['js/recruit/commerce/ztcCommon/ztcApplyCommon'], function (ZtcApplyCommon) {
    var bd = $('#bd'),
        oldMobile = bd.find('.js-mobile').val();
    /********** 基本信息部分*************/
    var yichuanApply = {

        init: function () {
            var that = this;

            ZtcApplyCommon.init({isMobile: true})
            ZtcApplyCommon.selectCommonTaoCan();
        }
    }

    yichuanApply.init();
});