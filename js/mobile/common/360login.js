/**
 * @author jinlong on 2015/12/01
 *
 * @descript    360账号登录
 * 调用了“移动版通用JS（http://add.corp.qihoo.net/pages/viewpage.action?pageId=8036880）”接口
 * @version 1.0
 * @example:
 */
var destUrl = 'http://www.liangyi.com/';
QHPass.setConfig('src', 'mpc_liangyi');
QHPass.setConfig('domainList', ['liangyi.com']);

var errTimeout;
//登录
function initLogin() {
    QHPass.mShowLogin(function(userInfo){
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
            account:'qt_account',
            password:'qt_password',
            phrase:'qt_phrase',
            phraseWrapper: 'qt_phrase_wrapper',
            isAutologin:'qtis_autologin',
            globalTips:'qt_global_text',
            phraseImg: 'qt_phrasecode'
        },
        extFun:{
            init: function(){
                //提交
                $("#qt_btn").on('click', function(){
                    $(this).val('提交中...');
                    QHPass.loginUtils.submit();
                });
                 //验证码刷新绑定
                $('.adaptive img').on('click',function() {
                    QHPass.loginUtils.setPhrase();
                });
                $('.btn-reg').on('click', function(e) {
                    e.preventDefault();
                    var href = $(this).attr('href');
                    location.href = href + '?destUrl='+href+'&src='+src;
                });
            },
            phrase:function(){
                $(".adaptive").show();
                $('#qt_phrase').focus();
                QHPass.loginUtils.setPhrase();
                $("#qt_btn").val('登录');
            },
            error:function(){
                $('#qt_global_text').css('top','45%');
                QHPass.loginUtils.setPhrase();
                if(errTimeout) clearTimeout(errTimeout);
                errTimeout = setTimeout(function(){
                    $('#qt_global_text').css('top','-40px');
                }, 3000);
                $("#qt_btn").val('登录');
            }
        },
        phraseTime:'center'
    });
}

$(function(){
    initLogin();
});