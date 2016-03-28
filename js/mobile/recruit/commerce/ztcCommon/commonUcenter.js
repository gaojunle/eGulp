/**
 * @author  gaojun-pd on 2016/1/5
 *
 * @descript    商业化招募通用个人中心
 * @version 1.0
 * @example:
 */
define(['base', 'mask'], function (Base) {
    var CommonUcenter = {
        init: function () {
            this.bindFreqFaq(); //绑定常见问题
            this.bindDel();     //绑定删除订单
            this.bindWeiXin();  //绑定微信form mobile

            this.bindReplay();  //用户回复信息
            this.lyProtocal();  //良医协议点击
        },

        //绑定删除订单
        bindDel: function () {
            var that = this;

            $('.js-del, .btn-del').click(function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var $this = $(this),
                    applicant_id = $this.parents('.js-reportbox').data('reportid');

                Base.P.confirm({
                    title: '操作提示',
                    msg: "删除订单后无法恢复，确定执行吗？",
                    yesFun: function () {
                        var params = {act: 'delete', applicant_id: applicant_id}
                        that._doRequest(params, function (retData) {
                            setTimeout(function () {
                                location.href = retData.data.redirect
                            }, 300)
                        });
                    }
                });

                return false;
            });
        },

        //绑定微信
        bindWeiXin: function () {
            function isWeixin() {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                } else {
                    return false;
                }
            }

            if (isWeixin()) {
                $('.js-btn-pay').attr('href', 'javascript:;').click(function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();

                    showWeiXinTip();
                    return false;
                })
            }

            function showWeiXinTip() {
                var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
                var weixinTip = $('<div id="weixinTip"><p><img style="width: 100%" src="http://p4.qhimg.com/t0151689ab62456804a.png" alt="浏览器打开"/></p></div>');

                $("body").append(weixinTip);
                $("#weixinTip").css({
                    "position": "fixed",
                    "left": "0",
                    "top": "0",
                    "height": winHeight,
                    "width": "100%",
                    "z-index": "1000",
                    "background-color": "rgba(0,0,0,0.8)",
                    "filter": "alpha(opacity=80)",
                }).click(function () {
                    $('#weixinTip').remove();
                });

                $("#weixinTip p").css({
                    "text-align": "center",
                    "margin-top": "-15%"
                });
            }
        },

        //绑定常见问题
        bindFreqFaq: function () {
            var that = this;

            $('.js-bbh-faq').off('click').click(function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var $ucenterFaq = $('.js-ucenter-faq');
                if ($ucenterFaq.length > 0) {
                    that._showFaqBox($ucenterFaq.html());
                } else {
                    $.post($(this).data('url')).done(function (retData) {
                        if (retData.errno == 0) {
                            that._showFaqBox(retData.data.content)
                            $('<div class="js-ucenter-faq"></div>').hide().html(retData.data.content).appendTo('body');
                        } else {
                            Base.P.steam({msg: retData.msg});
                        }
                    });
                }
            });
        },

        //用户回复信息
        bindReplay: function () {
            $('.js-replay').click(function () {
                var reportbox = $(this).parents('.js-reportbox'),
                    applicantid = reportbox.data('reportid'),
                    replayBox = reportbox.find('.list-reply'),
                    replayText = reportbox.find('textarea');

                if (replayText.val() == '') {
                    Base.P.steam({msg: '回复内容不能为空'});
                    return false;
                }

                $.post($('.tabmenu .cur a').attr('href'), {
                    act: 'feedback',
                    applicant_id: applicantid,
                    note: replayText.val()
                }, function (retData) {
                    if (retData.errno == 0) {
                        var tpl = '<li class="patient clearfix">\
                            <i class="icon icon-patient"></i>\
                            <p class="txt"><span class="time">' + retData.data.create_time + '</span>' + retData.data.note + '</p>\
                        </li>'
                        replayBox.append(tpl);

                        replayText.val('');
                        Base.P.success({msg: '回复成功'})
                    } else {
                        Base.P.steam({msg: retData.msg})
                    }
                })
            });
        },

        //取消报名
        bindCaneclReport: function () {
            $('.js-cancel-report').click(function () {
                var applicantid = $(this).parents('.report').data('reportid');

                Base.P.confirm({
                    msg: '确认执行取消操作吗？',
                    yesFun: function () {
                        $.post('/ZMUser/UCenter', {
                            act: 'cancel',
                            applicant_id: applicantid
                        }).done(function (retData) {
                            if (retData.errno == 0) {
                                location.reload()
                            } else {
                                Base.P.alert({msg: '<span style="color: red;font-size: 22px;">' + retData.msg + '</span>'})
                            }
                        })
                    }
                })
            })
        },

        //修改申请
        bindResetReport: function () {
            $('.js-reset-report').click(function () {
                var applicantid = $(this).parents('.report').data('reportid');

                $.post('/ZMUser/UCenter', {
                    act: 'reset',
                    applicant_id: applicantid
                }).done(function (retData) {
                    if (retData.errno == 0) {
                        location.reload()
                    } else {
                        Base.P.alert({msg: '<span style="color: red;font-size: 22px;">' + retData.msg + '</span>'})
                    }
                })
            })
        },

        //良医协议点击
        lyProtocal: function () {
            $('.js-help-protocal').click(function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var html = '<div class="agreementpage" style="height: 350px; overflow-y: scroll; text-align: left; padding-top: 15px;">\
                        <h2>1、协议的确认和接受</h2>\
                    <p>良医用户在使用良医招募平台提供的服务前应当仔细阅读本协议。用户应确认在使用良医提供的各项服务时应当同意本协议的全部内容并遵守与该项服务相关的所有规则。良医有权随时修改本协议条款内容，并根据本协议不时发布的规则提供服务。若不同意本协议的内容或不同意良医随时修改本协议，用户有权不使用良医提供的服务。但是，一旦使用良医提供的服务或者在良医修改本协议后继续使用其服务，则视为用户完全理解和认可本协议的全部内容及其修改条款。</p>\
                    <h2>2、用户使用须知</h2>\
                    <p><b>2.1 良医希望更多地帮助到疑难重症患者，为此良医招募平台为符合要求的患者与医疗机构之间提供平台服务，避免让真正需要的重症患者无法进行医治。患者在提交病情描述等相关基本信息后，良医招募平台上的医疗机构会为您匹配适合的医生专家团队。患者通过平台获得的医生答复、医学文章、医疗保健信息、药品信息等，均不代表良医赞同其观点或证实内容的真实性，以上信息不能作为患者采取治疗方案的直接依据。如确有必要，您应当联系医生进行面对面的诊疗；</b></p>\
                    <p><b>2.2 良医在提供网络服务时，可能会对部分服务收取一定费用，良医将会对收费服务给予明确的提示，如您拒绝支付此类费用，良医有权不提供相关服务；</b></p>\
                    <p><b>2.3</b> 良医招募平台仅提供医生与患者之间进行合法交流的技术平台，并提供必要的网络技术帮助。良医负责向您提供良医招募平台服务，但对良医招募平台服务不作任何明示或暗示的保证，不参与医患交流，不对医患交流的结果承担任何责任。</p>\
                    <h2>3、隐私声明：</h2>\
                    <p>3.1 保护用户隐私是良医的一项基本政策，良医保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在良医中的非公开内容，但下列情况除外：</p>\
                    <p>3.1.1 事先获得用户的明确授权；</p>\
                    <p>3.1.2 根据有关的法律法规要求；</p>\
                    <p>3.1.3 按照相关政府主管部门的要求；</p>\
                    <p>3.1.4 为维护社会公众的利益；</p>\
                    <p>3.1.5 为维护良医平台的合法权益。</p>\
                    <p>3.2 良医可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与良医同等的保护用户隐私的责任，则良医有权将您的注册资料等提供给该第三方。</p>\
                    <p>3.3 信息使用：</p>\
                    <p>3.3.1 在不透露您的保密信息的前提下，良医有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>\
                    <p>3.3.2 医患之间的咨询问题内容在隐去姓名、单位、地址等信息后，良医可以不经过您的授权，进行公开、编辑、出版、发行。</p>\
                    <p>3.3.3 为服务用户的目的，良医可能通过使用您的个人信息向您提供服务，包括但不限于向您发出活动和服务信息等。</p>\
                    <h2>4、免责声明：</h2>\
                    <p>4.1 良医作为技术平台支撑方，无法对您通过良医平台指向的实际医疗服务承担责任，您通过良医就诊的医疗风险由您自己承担。</p>\
                    <p>4.2 良医尽最大努力满足您的网络服务要求，但基于不可抗力或良医不能控制的原因，良医不承诺网络服务不会中断，对网络服务的及时性、安全性、准确性不作承诺，但将尽力减少因此而给您造成的损失和影响。</p>\
                    <p>4.3 良医不承诺网页上设置的外部链接的准确性和完整性，同时对于该等外部链接指向的不由良医实际控制的任何网页上的内容，良医不承担任何责任。</p>\
                    <h2>5、法律及争议解决</h2>\
                    <p>5.1 本协议适用中华人民共和国法律。</p>\
                    <p>5.2 因本协议引起的或与本协议有关的任何争议，各方应友好协商解决；协商不成的，任何一方均可将有关争议向被告住所地法院提起诉讼。</p>\
                    <h2>6、其他规定</h2>\
                    <p>良医在法律允许的最大范围内对本协议拥有解释权与修改权。</p>\
                    </div>'
                Base.P.alert({title: '良医协议', msg: html, 'yesBtnText': '我知道了'});

                return false;
            });

            //SIMC增值服务说明
            $('.js-service').click(function (evt) {
                evt.stopPropagation();
                evt.preventDefault();

                var html = '<p style="font-size: 16px;margin-top: 15px;font-weight: bold;">SIMC家属休息室</p>\
                    <p>位于上海医学中心院内，提供生活服务设施（淋浴、盥洗室）、无线网络、吹风机等完善的住宿设施，方便家属在就诊期间陪同和照顾患者，确认就诊时间后可联络工作人员进行预定。</p><br/>\
                    <p style="text-indent: 2em;">房型：单人间（含双早）</p>\
                    <p style="text-indent: 2em;">价格：188元/晚</p><br>\
                    <p>由于航班延误、取消等不可预见的情况，会给机场接送安排造成不便，所以前期暂不提供机场接送服务，请亲谅解，谢谢！</p><br/>'
                Base.P.alert({title: '增值服务信息', msg: html, 'yesBtnText': '我知道了'});

                return false;
            });
        },

        //显示常见问题
        _showFaqBox: function (msg) {
            Base.P.alert({title: '常见问题', msg: '<div class="freq-problem">' + msg + '</div>', 'yesBtnText': '我知道了'});
            $('.alert-wrap').css({top: '25%'})
        },

        //统一处理请求处理
        _doRequest: function (data, sucCallback, failCallback) {
            $.post('/ZtcUser/UCenter', $.extend({
                    applicant_id: $('.js-applicantid').val()
                }, data)
            ).done(function (retData) {
                if (retData.errno == 0) {
                    Base.P.success({msg: retData.msg});
                    if (sucCallback && $.isFunction(sucCallback)) {
                        sucCallback(retData);
                    }
                } else {
                    Base.P.steam({msg: retData.msg});
                    if (failCallback && $.isFunction(failCallback)) {
                        failCallback(retData);
                    }
                }
            });
        }
    };

    return CommonUcenter;
});