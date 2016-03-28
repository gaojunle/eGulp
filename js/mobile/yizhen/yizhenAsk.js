/**
 * @author  jinlong on 2016/02/29
 *
 * @description 义诊我要提问
 * @version 1.0
 * @example:
 */
require(['js/mobile/yizhen/yizhenCommon', 'js/common/pagePlugins/lyUploadFile', 'Panel'], function(yizhenCommon, LyUploadFile, panel){
	var askPage = {
		//上传病历等资料
        initUploadWgt: function () {
        	var $uploadBox = $('.js-upload-pic'), $uploadLabel = $('.js-upload-label');
        	var $uploadForm = $('.js-up-pic');
            
            new LyUploadFile({
    			wrapObj: $uploadForm,
    			maxLen: 5,
    			exceedMaxLen: function(){
    				panel.steam({msg: '上传的病例资料不多于5张'});
    			}
    		});

    		$('.js-upload-label').on('click', function(){
    			$uploadLabel.hide();
            	$uploadBox.show();

            	$('.js-upload-pic .J-upload-paper').trigger('click');
    		})
        },
		init: function(){
			this.initUploadWgt();

			yizhenCommon.init({
				beforeValid: function(){
					var $question = $('.js-question');
					var $uploaPic = $('.js-pic-box'), $uploadBox = $('.js-up-box');
					if($question.val().trim() === ''){
						panel.steam({
							msg: '咨询问题不能为空！'
						});
						//滚动到该位置
		    			$('body').animate({scrollTop: $question.offset().top - 80}, 300, function () {
		    	            $question.focus();  
		    	        });

						return false;
					}
					//资料未上传
					// if($uploaPic.find('input[type="hidden"]').length <= 0){
					// 	panel.steam({
					// 		msg: '请上传病历等资料！'
					// 	});
					// 	//滚动到该位置
		   //  			$('body').animate({scrollTop: $uploadBox.offset().top - 80}, 300);

					// 	return false;
					// }

					return true;
				},
				submitExtraData: function(){
					var data = {};
					var $question = $('.js-question'), $picInput = $('.js-pic-box input[type="hidden"]');
					var qKey = $question.attr('name'), pKey = $picInput.eq(0).attr('name');
					var pVal = [];
					$picInput.each(function(i, el){
						pVal.push(el.value);
					});

					data[qKey] = $question.val();

					if($picInput.length){
						data[pKey] = pVal;
					}

					return data;
				}
			});
		}
	};
	askPage.init();

	
});