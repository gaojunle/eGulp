/**
 * @author  gaojun-pd on 2015/12/29
 *
 * @descript
 * @version 1.0
 * @example:
 */

require(['base',
    'js/common/pagePlugins/lyRadioChecked',
    'js/common/pagePlugins/lyCheckBox',
    'js/common/cpt/countDown',
    'js/common/mod/modTemp',
    'js/jq/chosen.jquery',
    'js/jq/jQuery.FillOptions',
    'js/jquery.form'], function (Base, LyRadioChecked, LyCheckBox, countDown, ModTemp) {
    var bd = $('body');
    /********** 基本信息部分*************/
    var loadingModal;   //loading弹层
    var Go = {
        base_info: {
            formObj: bd.find('.js-form'),
            _checkMobile: function (mobile) {
                return /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i.test(mobile);
            },
            //免责申明
            bindStatement: function () {
                var obj = bd.find('.disclaimer');
                if(obj.data('show')){
                    //popbox($('.disclaimer'));
                }
                bd.find('.js-statement').on('click', function(){
                    var name = $(this).data('name');
                    popbox($('.' + name));
                });
                //bd.find('.js-state-close').on('click', function(){
                //});
            },
            //验证码
            bindGetCode: function () {
                var that = this,
                    code = $('.js-get-code'),
                    seconds = $('.js-seconds'),
                    secDown = $('.js-sec-down')

                code.click(function () {
                    var _this = $(this),
                        mobileTxt = bd.find('.js-mobile').val();

                    //验证手机号；
                    if (!that._checkMobile(mobileTxt)) {
                        Base.P.steam({'msg': '手机号码不正确，请修改'});
                        bd.find('.js-mobile').focus();
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
                                Base.P.success({'msg': '获取验证码成功，请您查看手机'});

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
                                Base.P.steam({'msg': retData.msg});
                            }
                        });

                        seconds.show();
                        _this.hide();
                    }
                });
            },
            //处理弹出层省市关联
            initMenuProvinceCity: function () {
                var selProvince = $('#sel_province'),
                    selCity = $('#sel_city');

                selProvince.chosen({
                    inherit_select_classes: true,
                    max_selected_options: 10
                }).change(function (evt, params) {
                    var selVal = $(this).find('option:selected').val();
                    selCity.FillOptions(
                        '/outer/AjProvCities?province_id=' + selVal,
                        {datatype: "json"}
                    );
                    selCity.trigger("chosen:updated");
                });

                selCity.chosen();
            },
            //联系人填写
            bindContactInput: function () {
                contactName = bd.find('.js-contact_name'),
                    applyName = bd.find('.js-apply-name'),
                    applyOtherCheck = bd.find('.js-apply-other');
                contactName.on('keyup', function (evt) {
                    if (applyOtherCheck.hasClass('checked')) {
                        return;
                    } else {
                        applyName.val(contactName.val());
                    }
                });

                applyOtherCheck.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();

                    $(this).toggleClass('checked-c');

                    if ($(this).hasClass('checked-c')) {
                        if (applyName.val() == contactName.val()) {
                            applyName.val('').focus();
                        }
                    } else {
                        applyName.val(contactName.val()).focus();
                    }
                });
            },
            init: function () {
                this.initMenuProvinceCity();
                this.bindGetCode();
                selectDate();
                this.bindContactInput();
                this.bindStatement();
                new LyRadioChecked(this.formObj);
                new LyCheckBox(this.formObj, function (val) {
                    if (val) {
                        $('.js-frm-submit').removeClass('btn-grey');
                    } else $('.js-frm-submit').addClass('btn-grey');
                });
                bindNextForm();
            }
        },

        /********************本次就诊部分**************/
        booking_info: {
            formObj: bd.find('.js-form'),
            init: function () {
                form = this.formObj;
                selectDate(undefined, 1, function (dateText, inst) {
                    var visit = form.find('input[name=visit_type]');
                    visit.prop('checked', false);
                    visit.parent().removeClass('checked-c');
                });
                new LyCheckBox(this.formObj, function (val) {
                    if (val) {
                        form.find('.js-datepicker').val('');
                    }
                });
                bindNextForm();
            }
        },
        /********************确诊部分**************/
        diagnosis_info: {
            bufHtml: bd.find('.js-block').eq(0).clone(),
            //上传图片部分
            bindUploadImg: function (blockObj) {
                if (blockObj == undefined) blockObj = bd;
                blockObj.find('.J-upload-paper').on('change', function () {
                    var $this = $(this);
                    var curForm = $(this).closest('form');
                    var filePath = $(this).val(),
                        fileName = filePath.substring(filePath.lastIndexOf('\\') + 1),
                        fileSuffix = filePath.split('.'),
                        suffix = fileSuffix[fileSuffix.length - 1],
                        allowSuffixReg = /jpg|png|jpeg|gif|bmp/i,
                        fileSize = $(this)[0].files[0].size;
                    //文件大小检查
                    if ($(this)[0].files) {
                        if (fileSize >= 5 * 1024 * 1024) {
                            Base.P.steam({'msg': '文件太大，请确认文件小于5M'});
                            return false;
                        }
                    }
                    //文件格式检查
                    if (!allowSuffixReg.test(suffix)) {
                        Base.P.steam({'msg': '请上传图片文件'});
                        $(this).val('');
                        return false;
                    }
                    //文件重复上传检查
                    var flag = true;
                    blockObj.find('.uploadimg').each(function (i, v) {
                        if (fileName == $(this).data('filename') && fileSize == $(this).data('filesize')) {
                            flag = false;
                        }
                    });
                    if (!flag) {
                        Base.P.steam({'msg': '不能上传相同文件'});
                        return false;
                    }
                    //开始上传
                    curForm.ajaxSubmit({
                        url: curForm.attr('action'),
                        data: {
                            act: 'up',      //上传action
                            ajaxform: 1,    //ajaxform
                        },
                        beforeSubmit: function () {
                            loadingModal = Base.P.loading($this.next('a').text() + '中，请稍后...');
                        },
                        error: function () {
                            //关闭loading
                            loadingModal && loadingModal.remove();
                        },
                        success: function (retData) {
                            retData = retData.errno ? retData : $.parseJSON(retData);
                            retData.data.file_size = fileSize;

                            //关闭loading
                            loadingModal && loadingModal.remove();
                            if (retData.errno == 0) {
                                Base.P.success({'msg': '文件上传成功'});
                                var pname = curForm.data('pname');
                                var imgHtml = '<span class="uploadimg" data-filename="#{file_name}" data-filesize="#{file_size}">';
                                imgHtml += '<a href="/ZMUser/ApplyFile?act=view&file_id=#{file_id}" target="_blank" title="#{file_name}">';
                                imgHtml += '<img src="#{file_icon}" width="34" height="34" alt="#{file_name}">';
                                imgHtml += '</a>';
                                imgHtml += '<input type="hidden" name="' + pname + '" value="#{file_id}"/>';
                                imgHtml += '<a class="icon icon-cancel ico-imgdel" href="javascript:;" data-fileid="#{file_id}"></a>';
                                imgHtml += '</span>';
                                curForm.find('.upload-paper-wrap').before(ModTemp(imgHtml, retData.data));
                                curForm.resetForm();
                            } else {
                                Base.P.steam({'msg': retData.msg});
                            }
                        }
                    }); //end ajax

                }); //end change
            },
            //删除文件
            bindDeleteFile: function (blockObj) {
                if (blockObj == undefined) blockObj = bd;
                blockObj.on('click', '.ico-imgdel', function () {
                    var curForm = $(this).closest('form');
                    var _this = $(this),
                        fileId = _this.data('fileid');
                    $.post(curForm.attr('action'), {
                        act: 'del',      //上传action
                        ajaxform: 1,    //ajaxform
                        file_id: fileId,   //文件ID
                    }, function (retData) {
                        if (retData.errno == 0) {
                            _this.parents('span').remove();
                            Base.P.success({msg: '删除成功'});
                        } else {
                            Base.P.steam({msg: retData.msg});
                        }
                    }); //end post
                }); //end on
            },
            init: function () {
                selectDate();
                this.bindUploadImg();
                this.bindDeleteFile();
                bindDeleteInfo();
                bindAddNew(this.bufHtml, function (block) {
                    block.find('.uploadimg').remove();
                    selectDate(block);
                    Go.diagnosis_info.bindUploadImg(block);
                    Go.diagnosis_info.bindDeleteFile(block);
                    bindDeleteInfo(block);
                });
                bindMultiNextForm('fimg', 'js-form-ext');
            }
        },
        /********************药物部分**************/
        medication_info: {
            init: function () {
                bindNextForm();
            }
        },
        /********************疾病部分**************/
        disease_history: {
            formObj: bd.find('.js-form'),
            init: function () {
                new LyRadioChecked(this.formObj, function (val) {
                });
                bindNextForm();
            }
        },
        /********************手术部分**************/
        operation_info: {
            bufHtml: bd.find('.js-block').eq(0).clone(),
            init: function () {
                selectMonth();
                bindDeleteInfo();
                bindMultiNextForm();
                bindAddNew(this.bufHtml, function (block) {
                    selectMonth(block);
                    bindDeleteInfo(block);
                });
            }
        }
    }

    /********************全局部分**************/
    //新增部分
    function bindAddNew(bufhtml, func) {
        bd.find('.js-frm-new').on('click', function () {
            //为空判断
            if (!pageEmpetyValid()) return;
            var html = bufhtml.clone();
            html.find('input').val('');
            html.find('textarea').val('');
            if (func != undefined) {
                func(html);
            }
            html.show();
            bd.find('.js-cont-bom').before(html);
        });
    };
    //页面空验证
    function pageEmpetyValid() {
        var empty = false;
        bd.find('.need').each(function () {
            if ($.trim($(this).val()) == '') {
                empty = true;
                return;
            }
        });
        if (empty) {
            Base.P.steam({'msg': '请填写必要信息'});
            return false;
        }
        return true;
    }

    //单个提交到下一步的事件绑定
    function bindNextForm() {
        bd.on('click', '.js-frm-submit,.js-frm-change', function (e) {
            if ($(this).hasClass('btn-grey')) return;
            if (!pageEmpetyValid()) return;
            var form = $(this).closest('form');
            var postdata = form.serializeJSON();
            //var params = {'info': postdata};
            $.post(form.attr('action'), postdata).done(function (data) {
                if (data.errno != 0) {
                    Base.P.steam({'msg': data.msg});
                } else {
                    window.location.href = data.data.redirect;
                }
            });
        });
    }

    //多个form提交到下一步事件绑定
    function bindMultiNextForm(otherform, extern) {
        bd.on('click', '.js-frm-submit,.js-frm-change', function (e) {
            //获取页面所有form
            var postdata = {};
            if (!pageEmpetyValid()) return;
            bd.find('.js-form').each(function (i, v) {
                var s = $(this).serializeJSON();
                var block = $(this).closest('.js-block');
                if(extern != undefined){
                    var ext = block.find('.'+extern).serializeJSON();
                    for(var k in ext){
                        s[k] = ext[k];
                    }
                }
                //如果有其他需要获取的form数据
                if (otherform != undefined) {
                    block.find('.' + otherform).each(function () {
                        var pname = $(this).data('pname');
                        var pvalue = $(this).serializeJSON();
                        if (pvalue && $.isArray(pvalue[pname])) {
                            s[pname] = pvalue[pname];
                        } else {
                            s[pname] = [pvalue[pname]];
                        }
                    });
                }
                postdata[i] = s;
            });
            var action = bd.find('#formaction').data('action');
            var params = {'info': postdata, 'multi': '1'};
            //如果有是和否
            var yesno = bd.find('.c-yes-no');
            if (yesno.length > 0) {
                var pname = yesno.data('pname');
                var pvalue = yesno.data('pyvalue');
                params['otherinfo'] = {};
                params['otherinfo'][pname] = pvalue;
            }
            $.post(action, params).done(function (data) {
                if (data.errno != 0) {
                    Base.P.steam({'msg': data.msg});
                } else {
                    window.location.href = getNextUrl(data);
                }
            });

        });
    }

    //选择月份的
    function selectMonth(form) {
        var obj = null;
        if (form != undefined) obj = form.find(".js-datepicker");
        else obj = bd.find(".js-datepicker");
        obj.monthpicker({
            changeMonth: true,
            changeYear: true,
            yearRange: 'c-100,c+1',
            maxDate: new Date()
        });
    }

    //选择年月日
    function selectDate(form, after, func) {
        var obj = null;
        if (form != undefined) obj = form.find(".js-datepicker");
        else obj = bd.find(".js-datepicker");
        if (after != undefined) {
            obj.datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: 'c-100,c+1',
                onSelect: func,
                minDate: new Date()
            });
        } else {
            obj.datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: 'c-100,c+1',
                onSelect: func,
                maxDate: new Date()
            });
        }
    }

    //删除块信息
    function bindDeleteInfo(blockObj) {
        if (blockObj == undefined) blockObj = bd;
        blockObj.on('click', '.btn-del', function () {
            if (bd.find('.js-block').length <= 1) {
                Base.P.steam({msg: '只剩一项不能删除'});
                return;
            }
            $(this).closest('.js-block').remove();
        }); //end on
    }

    //yes no 选择
    function bindYesNo() {
        if (bd.find('.c-yes-no').is(':visible')) {
            bd.find('.js-cont-bom .add').hide();
        } else {
            bd.find('.js-cont-bom .add').show();
        }
        bd.find('.js-yes').on('click', function () {
            bd.find('.c-after-yes').show();
            bd.find('.c-yes-no').hide();
            bd.find('.js-cont-bom .add').show();
        });
        bd.find('.js-no,.js-jump').on('click', function () {
            var action = '';
            var faction = bd.find('#formaction');
            if (faction.length > 0) {
                action = faction.data('action');
            } else {
                action = bd.find('.js-form').attr('action');
            }
            var yesno = bd.find('.c-yes-no');
            var pname = yesno.data('pname');
            var pvalue = yesno.data('pnvalue');
            var params = {};
            if (pname != null && pvalue != null) {
                params['otherinfo'] = {};
                params['otherinfo'][pname] = pvalue;
            }
            $.post(action, params).done(function (data) {
                if (data.errno != 0) {
                    Base.P.steam({'msg': data.msg});
                } else {
                    window.location.href = getNextUrl(data);
                }
            });

        });
    }

    //获取下一步参数
    function getNextUrl(data) {
        return data.data.url +
            (data.data.next != undefined ? '&step=' + data.data.next : '') +
            (data.data.src != undefined ? '&src=' + data.data.src : '');
    }

    //协议弹层处理
    function popbox(boxObj, height) {
        var $boxObj = $(boxObj);
        var $popbd = $boxObj.find('.popbd');
        Base.P.alert({title: $boxObj.find('.title').html(), msg: $popbd.html(),'yesBtnText':'我知道了'});
        $('.alert-ctn-box div').height(height || 350).css({
            'overflowY': 'scroll',
            'text-align': 'left',
            'padding-top':'15px'
        })
    }

    //初始化
    function init() {
        var step = bd.find('#i-curStep').html();
        Go[step].init();
        bindYesNo();
    }

    init();
});
