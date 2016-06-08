/**
 * @author  gaojun-pd on 2015/9/21
 *
 * @descript    消息系统
 * @version 1.0
 * @example:
 */

require(['base', 'handlebars'], function (Base, Handlebars, StringUtil, qs) {
    var message = {
        init: function () {

        },
        //jQuery序列化成JSON
        _serializeJson: function () {
            (function ($) {
                $.fn.serializeJson = function () {
                    var serializeObj = {};
                    var array = this.serializeArray();
                    var str = this.serialize();
                    $(array).each(function () {
                        if (serializeObj[this.name]) {
                            if ($.isArray(serializeObj[this.name])) {
                                serializeObj[this.name].push(this.value);
                            } else {
                                serializeObj[this.name] = [serializeObj[this.name], this.value];
                            }
                        } else {
                            serializeObj[this.name] = [];
                            serializeObj[this.name].push(this.value);
                        }
                    });
                    return serializeObj;
                };
            })(jQuery);
        }
    }
    message.init();
});