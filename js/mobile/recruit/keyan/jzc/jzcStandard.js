/**
 * @author  jinlong on 2016/01/11
 *
 * @description 晚期结直肠癌患者招募筛选标准
 * @version 1.0
 * @example:
 */
require(['Panel'], function(panel){
	var $section = $('section'), $radios = $('section .radio'), 
		$submit = $section.find('.submit'), $selected = $('.selected'), $exclude = $('.exclude');
	var maxLen = $('section li').length;
	var isOk = true;

	var standard = {
		//排除不符合条件的
		exclude: function(){
			var notSel = $selected.find('.radio[value="0"]:checked').length,
				exclusion = $exclude.find('.radio[value="1"]:checked').length;
			if(notSel || exclusion){
				isOk = false;
				panel.alert({
					title: '温馨提示',
					msg: '您不满足入选条件，谢谢您的关注，祝您健康。<div class="contact"><a href="tel:400-669-1388">联系电话：400-669-1388</a></div>',
					yesFun: function(){
						location.href = document.referrer;
					}
				});
			}else{
				isOk = true;
			}
		},
		init: function(){
			var that = this;
			$radios.on('change', function(){
				var chkedLen = $section.find('.radio:checked').length;
				if(chkedLen === maxLen){
					$submit.removeAttr('disabled');
				}else{
					$submit.attr('disabled');
				}
			});

			$submit.on('click', function(){
				that.exclude();
				if(isOk){
					var redirectUrl = $(this).data('redirect');
					if(redirectUrl){
						location.href = redirectUrl;
					}
				}
				
				return false;
			});
		}
	};
	standard.init();

});