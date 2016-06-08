/**
 * @author  gaojun-pd on 2015/8/10
 *
 * @descript    扩展新版jQuery版本号
 *
 * @version 1.0
 * @example:
 */
define(function(require, exports, module){
	$.extend({
		browser : {
			//是否为IE
			msie : (function(){
				var userAgent = navigator.userAgent.toLowerCase();

				if(/msie | rv:11\./.test(userAgent)){
					return true;
				}
				return false;
			}()),

			//获取浏览器版本号
			version : (function(){
				var userAgent = navigator.userAgent.toLowerCase();
				var browserArr = ['msie ', 'firefox/', 'chrome/', 'opera/', 'safari/'];

				for(var i=0; i<browserArr.length; i++){
					var reg = new RegExp(browserArr[i]+'([\\d.]+)');

					if(new RegExp(browserArr[i]).test(userAgent)){
						return userAgent.match(reg)[1];
					}
				}
			}())
		}
	});
});
