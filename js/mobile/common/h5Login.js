/**
 * @author jinlong on 2015/12/04
 *
 * @descript    移动版用户快速登录（精简版）
 * @version 1.0
 * @example:
 * H5Login.init({
    loginBox: '.js-login-box',
    sucCallback: function(retData){},
    failCallback: function(retData){}
});
 */
require(['js/common/pagePlugins/lyLoginCommon'], function (LyLoginCommon) {
    var options = {
        loginBox: $('.js-login-box'),
        imgCodeBox: $('<p class="js-field-img" data-url="/user/isShowImgCode">\
                        <label for="">验证码</label><input type="text" class="need js-imgcode" name="imgcode" placeholder="请输入图片码">\
                        <img class="js-change-img js-change-a" src="/user/getImgCode?_t=' + new Date().getTime() + '" data-url="/user/getImgCode?" style="height: 4rem;margin-top: -1rem;">\
                        <a class="cl-blue js-change-a" href="javascript:;" data-url="/user/getImgCode?">换一张</a>\
                    </p>'),
        sucCallback: function (retData) {
            //登录成功数据返回给客户端
            if (window.api) {
                api.sendEvent({
                    name: 'loginSuccess',
                    extra: retData.data
                });
            }
            if (retData.data.redirect) {
                window.location.href = retData.data.redirect;
            } else {
                location.reload();
            }
        }
    };
    if(window.api){
        //打开登录页面时，清除APP登录状态
        api.execScript({
            name: 'win_fixed',
            script: 'clearAppLogin();'
        });
    }
    window.apiready = function(){
        //打开登录页面时，清除APP登录状态
        api.execScript({
            name: 'win_fixed',
            script: 'clearAppLogin();'
        });
    }
        
    new LyLoginCommon(options);
});