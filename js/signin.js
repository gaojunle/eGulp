/**
 * @author  jinlong on 2015/11/12
 *
 * @descript 	手机版登录
 * @version 1.0
 * @example:
 */
$(function(){
	var signinPage = {
		timer: null,
		//校验手机号
		checkPhone: function(phone){
			phone = phone || '';
			var phoneReg = /^1[3|4|5|8|7]\d{9}$/;
			return phoneReg.test(phone);
		},
		//倒计时
		startTimer: function(){
			var that = this;
			var $countdown = $('.js-countdown'),
			countdown = parseInt($countdown.text()),
			duration = countdown;
			$countdown.closest('.js-getCode').attr('disabled', 'disabled');
			$countdown.show();
			timer = setInterval(function(){
				if(countdown <= 1){
					that.stopTimer(duration);
					return false;
				}
				countdown--;
				$countdown.text(countdown);
			}, 1000);
		},
		stopTimer: function(duration){
			duration = duration || 120;
			var $countdown = $('.js-countdown');
			$countdown.text(duration);
			$countdown.closest('.js-getCode').removeAttr('disabled');
			clearInterval(timer);
			this.timer = null;
		},
		//获取验证码
		getCode: function(){
			var that = this;
			var $getCode = $('.js-getCode');
			$getCode.on('click', function(){
				var phone = $('input[name="phone"]').val().trim();
				if(!that.checkPhone(phone)){
					alert('请输入正确的手机号码！');
					return;
				}
				$.post('/CodeRegister/GetCode', {
					phone: phone
				}, function(data){
					if(data.errno == 0){
						that.startTimer();
					}else{
						data.msg && alert(data.msg);
						that.stopTimer();
					}
				});
			});
		},
		init: function(){
			var that = this;
			var $phone = $('input[name="phone"]'),
			$verCode = $('input[name="verCode"]'),
			$reqCode = $('input[name="reqCode"]'),
			$signin = $('.js-signin'),
			//请求接口
			postUrl = $signin.attr('data-url');
			$signin.on('click', function(){
				var phone = $phone.val().trim(),
				verCode = $verCode.val().trim(),
				reqCode = $reqCode.val().trim();
				if(!that.checkPhone(phone)){
					alert('请输入正确的手机号码！');
					return;
				}
				if(verCode == ''){
					alert('请输入验证码！');
					return;
				}
				if(reqCode == ''){
					alert('请输入邀请码！');
					return;
				}
				$.post(postUrl, {
					phone: phone,
					verCode: verCode,
					reqCode: reqCode
				}, function(data){
					if(data.errno == 0){
						alert('登录成功');
						var signature = data.data.sign || '';
						var gotoUrl = data.data.goto;
						localStorage.setItem('signature', signature);
						localStorage.setItem('phone', phone);
						setTimeout(function(){
							location.href = gotoUrl;
						},100);
					}else{
						data.msg && alert(data.msg);
					}
				});
			});

			that.getCode();
		}
	};
	signinPage.init();
});