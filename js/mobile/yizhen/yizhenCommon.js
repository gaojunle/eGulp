/**
 * @author  jinlong on 2016/03/02
 *
 * @description 义诊通用功能
 * @version 1.0
 * @example:
 * require(['js/mobile/yizhen/yizhenCommon'], function(yizhenCommon){
		yizhenCommon.init({
			beforeValid: function(){return true;},		//在病人表单之前增加额外的验证
			submitExtraData: function(){return {};}		//提交额外的数据
		});
	});
 */

define(['Panel', 'js/jq/chosen.jquery', 'js/jq/jQuery.FillOptions', 'js/jquery.form'], function (panel) {
    var $patientFrm = $('.js-patient-frm'),
        isAjaxLoading = false;

    var yizhenCommon = {
        //验证患者表单
        validPatient: function () {
            var that = this;
            var isValid = true;
            var $required = $patientFrm.find('.js-required');

            //在病人表单之前增加额外的验证
            if (!that.opts.beforeValid()) {
                isValid = false;
                return false;
            }

            $required.each(function (i, el) {
                var $this = $(el), msg = $this.prev('label').text();
                //验证数字
                if ($this.attr('type') === 'tel') {
                    var thisVal = $this.val().trim(), reg = /\d+/;
                    if (!reg.test(thisVal)) {
                        panel.steam({
                            msg: msg + '必须是数字！'
                        });

                        //滚动到该位置
                        $('body').animate({scrollTop: $this.offset().top - 80}, 600, function () {
                            $this.focus();
                        });

                        isValid = false;
                        return false;
                    }
                }
                //验证空
                if ($this.val().trim() === '') {
                    panel.steam({
                        msg: msg + '不能为空！'
                    });

                    //滚动到该位置
                    $('body').animate({scrollTop: $this.offset().top - 80}, 600, function () {
                        $this.focus();
                    });

                    isValid = false;
                    return false;
                }
            });

            return isValid;
        },
        //同意协议
        agree: function () {
            var $submit = $('.js-submit');
            $('.js-agreement [type="checkbox"]').on('change', function () {
                var $this = $(this);
                if (this.checked) {
                    $submit.removeAttr('disabled');
                } else {
                    $submit.attr('disabled', 'disabled');
                }
            });
        },
        //提交患者表单
        submitPatientForm: function () {
            var that = this;
            var $submit = $('.js-submit');
            $submit.on('click', function () {
                if (that.validPatient()) {
                    if (isAjaxLoading) {
                        return;
                    }
                    isAjaxLoading = true;

                    $patientFrm.ajaxSubmit({
                        data: that.opts.submitExtraData(),
                        beforeSubmit: function (formData, jqForm, options) {
                            // debugger
                        },
                        success: function (responseText, statusText, xhr, $form) {
                            if (responseText.errno === 0) {
                                panel.success({
                                    msg: responseText.msg
                                });
                                var redirectUrl = responseText.data.redirect;
                                if (redirectUrl) {
                                    setTimeout(function () {
                                        location.href = redirectUrl;
                                    }, 1000);
                                }

                            } else {
                                if (responseText.msg) {
                                    panel.steam({
                                        msg: responseText.msg
                                    });
                                }
                                isAjaxLoading = false;
                            }
                        },
                        error: function () {
                            isAjaxLoading = false;
                        }
                    });
                }

                return false;
            });
        },
        //省市级联菜单
        initProvinceCity: function () {
            var $selProvince = $('.js-province'),
                $selCity = $('.js-city');

            $selProvince.chosen({
                inherit_select_classes: true,
                max_selected_options: 10
            }).change(function (evt, params) {
                var selVal = $(this).find('option:selected').val();
                $selCity.FillOptions(
                    '/outer/AjProvCities?province_id=' + selVal,
                    {datatype: "json"}
                );
                $selCity.trigger("chosen:updated");
            });

            $selCity.chosen();
        },
        init: function (opts) {
            this.opts = $.extend({
                beforeValid: function () {
                    return true;
                },		//在病人表单之前增加额外的验证
                submitExtraData: function () {
                    return {};
                }		//提交额外的数据
            }, opts);

            this.initProvinceCity();
            this.submitPatientForm();
            this.agree();
        }
    };

    return yizhenCommon;
});