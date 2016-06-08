/**
 * @fileoverview 此文件实现了一个倒计时类
 * @author  gaojun
 * @version v1.0 15-7-28 下午2:41
 * @class 倒计时类
 * @constructor
 * @description 实现了一个倒计时类，应用于类似于发送手机验证码后显示距下次可以发送的秒数的情景
 * @param options {Json} 初始化参数
 * @example
 _countDown = new countDown({time: 120});
 $(_countDown).on('onStart',function(){
                    alert(123)
                });
 _countDown.start();
 */
define(function () {
    var countDown = function (options) {
        this._eventEnum = {
            onStart: 'onStart',
            onProgress: 'onProgress',
            onEnd: 'onEnd'
        };
        this.options = $.extend({
            time: 60//秒
        }, options);

        this.leftTime = this.options.time;
        //倒计时是否在运行
        this.isOnRun = false;
        this.interval = null;
        this._init();
    }

    countDown.prototype = {
        /**
         * 初始化函数
         * @private
         */
        _init: function () {
            this.stop();
            this._attachEvent();
        },
        /**
         * 运行 setInterval
         * @private
         */
        _interval: function () {
            var that = this;
            that._watch();
            that.interval = setInterval(function () {
                that._watch();
            }, 1000);
        },
        /**
         * 监控倒计时进行状态
         * @private
         */
        _watch: function () {
            var that = this;
            --that.leftTime;
            if (that.leftTime === 0) {
                $(that).trigger(that._eventEnum.onEnd);
                that.isOnRun = false;
                clearInterval(that.interval);
            } else {
                $(that).trigger(that._eventEnum.onProgress, that.leftTime);
            }
        },
        /**
         * 绑定事件
         * @private
         */
        _attachEvent: function () {
            var that = this;

            $(that).on(that._eventEnum.onStart, that._interval);

            $(that).on(that._eventEnum.onEnd, function () {
                that.leftTime = that.options.time;
            });
        },
        /** 运行倒计时
         * @method 运行倒计时
         * @public
         * @example
         * _countDown.start();
         */
        start: function () {
            if (this.isOnRun === true) {
                return;
            }
            $(this).trigger(this._eventEnum.onStart);
        },

        //暂停
        pause: function () {

        },

        stop: function () {
            if (this.interval != null) {
                clearInterval(this.interval);
            }
        },
        /**
         * @method 倒计时是否在运行
         * @public
         * @return {Boolean}
         * @example
         * _countDown.isRun();
         */
        isRun: function () {
            return this.isOnRun;
        },
        /**
         * @method 获取countDown类绑定的自定义事件类型
         * @public
         * @return {Object}
         * @example
         *  this._eventEnum = {
            //倒计时开始
            onStart: 'onStart',
            //倒计时运行中
            onProgress: 'onProgress',
            //倒计时结束
            onEnd: 'onEnd'
            };
         */
        getEvents: function () {
            return this._eventEnum;
        }
    }

    return countDown;
});