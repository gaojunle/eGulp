/**
 * @author jinlong on 2016/02/02
 *
 * @descript	读图服务支付成功
 * @version 1.0
 * @example:
 */
apiready = function(){
    LY_INFO = LY_INFO || {};
	api.sendEvent({
	    name: 'paySuccess',
	    extra: LY_INFO
	});
}