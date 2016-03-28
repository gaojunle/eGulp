/**
 * @author jinlong on 2015/12/01
 *
 * @descript	良医心电APP，用户快速登录（精简版）
 * 去掉了遮罩弹层的功能
 * @version 1.0
 * @example:
 */
require(['js/common/cpt/countDown'], function(countDown){

//jQuery的Form序列化成JSON对象
(function ($) {
    $.fn.serializeJSON = function () {
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
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
})(jQuery);

//兼容的APP和mobile web的弹框
var lyAlert = function(msg){
    msg = msg || '';
    if(window.api){
        api.alert({msg: msg});
    }else{
        alert(msg);
    }
};

var opt = {
	loginBox: null,                            //登录框对象，默认为空时使用JS内的登录框
    initCallback: function(formObj){},         //初始化表单执行
    beforeSubmit: function(){},                //提交之前
	sucCallback: null,                         //登录成功回调函数
	failCallback: null                         //登录失败回调函数
};
var formObj, code, seconds, secDown, codeUrl;
var quickLogin = {
    init: function (_opt) {
        opt = $.extend(opt, _opt);
        if(!opt.loginBox){return;}

        formObj = $(opt.loginBox).find('.js-quick-form');
        code = formObj.find('.js-get-code');
        seconds = formObj.find('.js-seconds');
        secDown = formObj.find('.js-sec-down');
        codeUrl = code.data('url') || '/user/mbCode';
        this.bindGetCode();
        this.formSubmit();

        opt.initCallback && opt.initCallback(formObj);
    },
    //验证码
    bindGetCode: function () {
        code.off('click').click(function (evt) {
            evt.preventDefault();
            var _this = $(this),
                mobileTxt = formObj.find('.js-mobile').val();

            if(mobileTxt.trim() === ''){
                lyAlert('请输入手机号码');
                formObj.find('.js-mobile').focus();
                return false;
            }

            //验证手机号；
            if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i.test(mobileTxt)) {
                lyAlert('手机号码不正确，请修改');
                
                formObj.find('.js-mobile').focus();
            } else {
                if(window.api){
                    if(api.connectionType === 'none'){
                        lyAlert('网络连接错误，请重试!');
                        return false;
                    }
                }

                var _countDown = new countDown({time: 120});

                $(_countDown).on({
                    'onProgress': function () {
                        secDown.html(_countDown.leftTime)
                    },
                    'onEnd': function () {
                        _this.show();
                        secDown.html(0);
                        seconds.hide();
                    }
                });

                $.post(codeUrl, {mobile: mobileTxt}, function (retData) {
                    if (retData.errno == 0) {
                        lyAlert('获取验证码成功，请您查看手机');

                        _countDown.start();

                        seconds.show();
                        _this.hide();
                    } else {
                        if (retData.data && retData.data.leftRegenTime) {
                            _countDown = new countDown({time: retData.data.leftRegenTime});
                            $(_countDown).on({
                                'onProgress': function () {
                                    secDown.html(_countDown.leftTime)
                                },
                                'onEnd': function () {
                                    _this.show();
                                    secDown.html(0);
                                    seconds.hide();
                                }
                            });

                            _countDown.start();

                            seconds.show();
                            _this.hide();
                        }

                        lyAlert(retData.msg);

                    }
                });

                seconds.show();
                _this.hide();
            }
        });
    },
    //表单提交处理
    formSubmit: function () {
        formObj.find('.js-frm-submit').click(function (evt) {
            evt.preventDefault();

            var readySubmit = opt.beforeSubmit();
            if(!readySubmit){
                return;
            }

            var actionUrl = formObj.attr('action').toString();

            if (actionUrl) {
                $.ajax({
                    url: actionUrl,
                    type: "post",
                    cache: false,
                    data: formObj.serializeJSON(),
                    success: function (data) {
                        if (data.errno == 0) {
                            if (opt.sucCallback && $.isFunction(opt.sucCallback)) {
                                opt.sucCallback(data);
                                return false;
                            }
                        } else {
                            if (opt.failCallback && $.isFunction(opt.failCallback)) {
                                opt.failCallback(data);
                                return false;
                            }

                            lyAlert(data.msg);
                        }
                    },
                    error: function () {
                        if(window.api){
                            if(api.connectionType === 'none'){
                                lyAlert('网络连接错误，请重试!');
                            }
                        }
                    }
                });
            }
        });
    }
};

quickLogin.init({
	loginBox: '.js-login-box',
    initCallback: function(formObj){
        var $inputTxt = formObj.find('input[type="tel"]'),
            $phone = formObj.find('.js-mobile'),
            $code = formObj.find('.js-code'),
            $submitBtn = formObj.find('.js-frm-submit'),
            $agreement = formObj.find('.agreement');

        var validFn = function(){
            var reg = /^(13|14|15|18|17)[0-9]\d{8}$/,
                mobileTxt = $phone.val().trim(),
                codeTxt = $code.val().trim();
            if(!reg.test(mobileTxt)){
                return false;
            }
            if(codeTxt === ''){
                return false;
            }
            // if($agreement){
                
            // }
            return true;
        };
        $inputTxt.on('input', function(){
            if(validFn()){
                $submitBtn.removeAttr('disabled');
            }else{
                $submitBtn.attr('disabled', 'disabled');
            }
        });
    },
    beforeSubmit: function(){
        var agreement = document.querySelector('.agreement .chk');
        if(!agreement.checked){
            lyAlert('请阅读并同意《良医心电服务条款》');
            return false;
        }else{
            return true;
        }
    },
	sucCallback: function(data){
		data = data || {};
        api.sendEvent({
            name: 'loginSuccess',
            extra: data
        });
	}
});

});