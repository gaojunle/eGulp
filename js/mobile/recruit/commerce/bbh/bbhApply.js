/**
 * @author  jinlong on 2015/12/11
 *
 * @description 宝宝呼购买
 * @version 1.0
 * @example:
 */
require(['js/recruit/commerce/ztcCommon/ztcApplyCommon'], function (ZtcApplyCommon) {
    var bd = $('#bd'),
        oldMobile = bd.find('.js-mobile').val();
    /********** 基本信息部分*************/
    var BbhApply = {

        init: function () {
            var that = this;

            ZtcApplyCommon.init({isMobile: true})
            ZtcApplyCommon.selectCommonTaoCan();
        }
    }

    BbhApply.init();
});
