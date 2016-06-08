/**
 * @author      高军
 * @descript    字符串操作类
 * @example
 *      stringUtil.subStr('hello world', 3); //hel
 *      stringUtil.getBytesLength('下午a');   //5
 */
define(function () {
    var stringUtil = {
        /**
         * @method
         * @param str {String} 字符串
         * @param len {Number} 截取长度
         * @return {String}
         */
        subStr: function (str, len) {
            var r = '',
                n = str.length,
                i,
                j = 0;

            for (i = 0; i < n; i++) {
                j += (str.charCodeAt(i) > 0xff) ? 2 : 1;

                if (j <= len)
                    r += str.charAt(i);
                else
                    break;
            }

            return r;
        },
        /**
         * 获取字节长度（一个全角字符、中文算两个字节，ASCII字符为一个字节）
         */
        getBytesLength: function (str) {
            var len = str.length,
                mth = str.match(/[^\x00-\xFF]/g);

            if (mth)
                len += mth.length;

            return len;
        },

        /**
         * 按字节长度截取字符串
         */
        cutBytesLength: function (str, len) {
            var r = '',
                n = str.length,
                i,
                j = 0;

            for (i = 0; i < n; i++) {
                j += (str.charCodeAt(i) > 0xff) ? 2 : 1;

                if (j <= len)
                    r += str.charAt(i);
                else
                    break;
            }

            return r;
        },

        /**
         * 检查输入字符长度（以字节长度计算），超出则自动截断并返回flash
         * @param {number} len 长度上限
         * @param {string} afx 截断后加到后面的字符串（目前未用到，预留）
         * @return {boolean|number} 实际长度或false
         * @example
         * checkCutValue.call(this, 20); // 必须用call/apply方法，因为函数的scope需为输入框等
         */
        checkCutValue: function (len, afx) {
            var v = $.trim(this.value),
                l = exports.getBytesLength(v);
            if (l > len) {
                this.value = exports.cutBytesLength(v, len) + (afx || '');
                return false;
            }
            return l;
        },

        /**
         * 获取url参数
         * @param param name of params
         * @return {String}
         */
        getParam: function (param) {
            var reg = new RegExp(param + "=([^&$]+)", "ig");
            mat = reg.exec(location.href);
            if (mat && mat.length >= 1) {
                return mat[1].toString();
            }
            var aaa = "adf";
            return "";
        },

        /**
         * 转换字符串
         * @param int param
         * @return {String}
         */
        switchCapitalNum: function (param) {
            var obj = new Array('零', "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十");
            return obj[param];
        }
    }
    return stringUtil;
});