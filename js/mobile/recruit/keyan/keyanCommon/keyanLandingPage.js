/**
 * @author  jinlong on 2015/12/25
 *
 * @description 通用科研招募 landing page
 * @version 1.0
 * @example:
 */
require([], function(){
	var $section = $('section');
	var landing = {
		//栏目显示/隐藏
		toggleShow: function(){
			$section.on('click', 'h2', function(){
				$(this).toggleClass('shrink');
				$(this).next('.content').toggle();
			});
		},
		//抽取摘要
		extractSummary: function(el){
			//入选标准抽取摘要
			if(el === '.election .content'){
				var $detail = $(el).find('.detail');
				var text, sum = 0;
				var summary = '<div class="summary">';
				$detail.find('p').each(function(i, el){
					text = $(el).text().trim();
					sum += text.length;
					if(sum > 76){
						text = text.slice(0,36) + '...';
						summary += '<p>'+ text +'</p><span class="more">更多</span></div>';
						$detail.before(summary);

						return false;
					}else{
						summary += '<p>'+ text +'</p>';
					}
				});
			}else{
				var $detail = $(el).find('.detail');
				var detail = $detail.text().trim();
				var summary = detail.slice(0,76) + '...';
				$detail.before('<div class="summary">'+ summary +'<span class="more">更多</span></div>');
			}
		},
		//显示更多
		showMore: function(){
			$section.on('click', '.more', function(){
				var $summary = $(this).closest('.summary');
				$summary.hide();
				$summary.next('.detail').show();
			});
		},
		init: function(){
			$('.contact h2').addClass('shrink');
			this.toggleShow();
			this.showMore();
		}
	};
	landing.init();
});