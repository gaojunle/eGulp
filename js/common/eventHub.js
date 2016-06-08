/**
 * @author  gaojun-pd on 2015/8/10
 *
 * @descript    订阅和发布事件
 * @version 1.0
 * @example:
 *  	$.subscribe('resize');
 *		$.publish('resize');
 */
define(function(require, exports, module) {
	var windowOp = require('./windowOp').windowOp,
		o = $({});

	//接收
	$.subscribe = function() {
		o.on.apply(o, arguments);
	};

	//发布
	$.publish = function(etype) {
		var i = etype.indexOf('/'),
			args = Array.prototype.slice.call(arguments, 1);

		while (i != -1) {
			var target = etype.substring(0, i+1);
			i = etype.indexOf('/', i+1);

			var newArgs = [target].concat(args);

			o.trigger.apply(o, newArgs);
		}

		o.trigger.apply(o, arguments);
	};

	//window的事件，如：resize,scroll
	$.winEvent = function(){
		windowOp.bindEvent.apply(windowOp, arguments);
	};
});
