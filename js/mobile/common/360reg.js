/**
 * @author jinlong on 2015/12/01
 *
 * @descript    360账号注册
 * 调用了“移动版通用JS（http://add.corp.qihoo.net/pages/viewpage.action?pageId=8036880）”接口
 * @version 1.0
 * @example:
 */
var destUrl = 'http://www.liangyi.com/';
QHPass.setConfig('src', 'mpc_liangyi');
QHPass.setConfig('domainList', ['liangyi.com']);

var errTimeout;
//手机注册
function initMobileReg() {
    QHPass.mShowReg(function(info){
        console.log('-----------',info);
        
        //来源信息
        var sourceInfo = localStorage.getItem('sourceInfo') || '{}';
        sourceInfo = JSON.parse(sourceInfo);
        var redirectUrl = sourceInfo.redirectUrl;   //跳转URL
        //360用户信息传给良医
        $.post('user/dologin?appsrc=wap_zm').done(function (data) {
            if (data.errno >= 0) {
                if(redirectUrl){
                    location.href = redirectUrl;
                }
            } else {
                alert(data.msg);
            }
        });
        
    },{
        doms:{
            globalTips: "qt_global_text",
            smsCode:'qt_smscode',
            phone:'qt_phone',
            password:'qt_mobile_password',
            isAgree:'qt_mobile_agree'
        },
        extFun: {
            init: function(){
                //手机号实时检测
                $("#qt_phone").blur(function(){
                    QHPass.regUtils.checkPhone(true);
                });
                //提交
                $("#qt_mobile_reg").click(function(){
                    $(this).val('提交中...');
                    QHPass.regUtils.submit();
                });
                $(".get-sms-token").on('click', function() {
                    var $el = $(this),
                        disabled = "disabled";
                        $el.hasClass(disabled) || QHPass.regUtils.getSmsCode(function (t) {
                        if (t.errno == 0) {
                            $el.addClass(disabled);
                            var r = 120,
                                i = null;
                            i = setInterval(function () {
                                $el.text(r + "\u79d2\u540e\u91cd\u53d1"), r--, r < 1 && (clearInterval(i), e.text("\u83b7\u53d6\u6821\u8bc1\u7801").removeClass(n))
                            }, 1e3)
                        }
                    });
                });
                $('.reg-email').on('click', function(e) {
                    e.preventDefault();
                    $('.mobile-reg-wrapper').hide();
                    $('.email-reg-wrapper').show();
                    initEmailReg();
                });
                $('.btn-login').on('click', function(e) {
                    e.preventDefault();
                    var href = $(this).attr('href');
                    location.href = href + '?destUrl='+href+'&src='+src;
                });
                $('body').delegate('.clk-quc-login', 'click', function(e) {
                    e.preventDefault();
                    $('.btn-login').trigger('click');
                });
            },
            error:function(){
                $('#qt_global_text').css('top','45%');
                if(errTimeout) clearTimeout(errTimeout);
                errTimeout = setTimeout(function(){
                    $('#qt_global_text').css('top','-40px');
                }, 3000);
                $("#qt_mobile_reg").val('注册');
            },
            correct:function(){
                $('#qt_global_text').css('top','-40px');
            },
            before: function(){},
            loading: function(){},
            after: function(){}
        },
        regway:'phone'
    });
}

$(function(){
    initMobileReg();
});