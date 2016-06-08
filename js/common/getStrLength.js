/**
 * @fileoverview Sohu  获得字符串长度（中文*2）
 * @author  gaojun
 * @version 1.0 | 2015-08-05
 * @example
 */
define(function(require, exports, module) {
	exports.getStrLength = function(str){
		if (!str) {
			return 0;
		}
		var aMatch = str.match(/[^\x00-\xff]/g);
		return (str.length + (!aMatch ? 0 : aMatch.length));
	};


	//中英文的长度，
	exports.countCharacters = function(targetStr){
		var totalCount = 0;
		var str = $.trim(targetStr);

		for (var i=0; i<str.length; i++) {
			var c = str.charCodeAt(i);
			if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
				totalCount += 0.5;
			}else {
				totalCount +=1;
			}
		}
		return Math.ceil(totalCount);
	};
	
});
