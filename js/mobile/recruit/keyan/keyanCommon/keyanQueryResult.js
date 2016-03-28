/**
 * @author  gaojun-pd on 2015/10/12
 *
 * @descript
 * @version 1.0
 * @example:
 */
require(['Panel', 'js/common/cpt/countDown'], function (Panel, countDown) {
    var formObj = $('.js-form');

    var recruitApply = {
        init: function () {
            this.bindGetCode();
            this.formSubmit();
        },

        //验证码
        bindGetCode: function () {
            var code = $('.js-get-code'),
                seconds = $('.js-seconds'),
                secDown = $('.js-sec-down')

            code.click(function () {
                var _this = $(this),
                    mobileTxt = formObj.find('.js-mobile').val();

                //验证手机号；
                if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i.test(mobileTxt)) {
                    Panel.steam({'msg': '手机号码不正确'});
                    formObj.find('.js-mobile').focus();
                } else {
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

                    $.post('/userRecruit/ApplyValidMobile', {mobile: mobileTxt}, function (retData) {
                        if (retData.errno == 0) {
                            Panel.success({'msg': '获取验证码成功'});

                            _countDown.start();
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
                            }
                            Panel.steam({'msg': retData.msg});
                        }
                    });

                    seconds.show();
                    _this.hide();
                }
            });
        },

        //表单提交处理
        formSubmit: function () {
            formObj.find('.js-frm-submit').click(function () {
                recruitApply.sendQuery();
            });

            formObj.find('[name="code"]').eq(0).keyup(function (evt) {
                if (evt.keyCode == 13) {
                    recruitApply.sendQuery();
                }
            });
        },

        sendQuery: function () {
            var actionUrl = formObj.attr('action');

            if (actionUrl) {
                $.ajax({
                    url: actionUrl,
                    type: "post",
                    cache: false,
                    data: formObj.serialize(),
                    success: function (data) {
                        if (data.errno == 0) {
                            if (data.data.redirect) {
                                window.location.href = data.data.redirect;
                            } else {
                                Panel.success({'msg': data.msg});
                            }
                        } else {
                            Panel.steam({'msg': data.msg});
                        }
                    },
                    error: function () {
                        Panel.steam({'msg': '出异常了'});
                    }
                });
            }
        }
    }

    recruitApply.init();
});