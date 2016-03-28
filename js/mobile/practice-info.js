/**
 * @author  jinlong on 2015/11/12
 *
 * @descript 	手机版登录-补充执业信息
 * @version 1.0
 * @example:
 */
$(function(){
	var addInfo = {
		popLayer: $('.pop-layer'),
		//显示弹层
		showPop: function(){
			this.popLayer.show();
		},
		hidePop: function(){
			this.popLayer.hide();
		},
		init: function(){
			var that = this;
			var $activeBtn = $('.js-active'),
			$name = $('input[name="uname"]'),
			$department = $('input[name="department"]'),
			$specialty = $('input[name="specialty"]'),
			$direction = $('input[name="direction"]');
			var $hospital = $('select[name="hospital"]');
			var phone = localStorage.getItem('phone') || '',
				signature = localStorage.getItem('signature') || '';
			//请求接口
			var postUrl = $activeBtn.attr('data-url');
			//表单验证
			$activeBtn.on('click', function(){
				var name = $name.val().trim(),
				department = $department.val().trim(),
				specialty = $specialty.val().trim(),
				direction = $direction.val().trim();
				if(name === ''){
					alert('您的姓名不能为空！');
					return false;
				}
				if(department.trim() === ''){
					alert('所在科室不能为空！');
					return false;
				}
				//医院固定
				var postData = {
					name: name,
					department: department,
					hospital: 10,	//安贞医院
					specialty: specialty,
					direction: direction,
					phone: phone,
					signature: signature
				};
				//医院可选
				if($hospital[0]){
					var hospital = $hospital.val();
					postData.hospital = hospital;
				}
				$.post(postUrl, postData, function(data){
					if(data.errno == 0){
						that.showPop();
						var result = data.data;
						var user = result.uname || '',
							pwd = result.pwd || '';
						$('.js-user').text(user);
						$('.js-pwd').text(pwd);
					}else{
						data.msg && alert(data.msg);
					}
				});
			});
			//弹层事件
			var $ok = $('.pop-layer .js-ok');
			$ok.on('click', function(){
				that.hidePop();
				location.href = 'http://www.liangyi.com'
			});
			
		}
	};
	addInfo.init();
});