/**
 * @author jinlong on 2015/12/21
 *
 * @descript	购买读图服务
 * @version 1.0
 * @example:
 */
require([], function(){
	var $plan = $('.js-plan');
//兼容的APP和mobile web的弹框
var lyAlert = function(msg){
    msg = msg || '';
    if(window.api){
        api.alert({msg: msg});
    }else{
        alert(msg);
    }
};
	var payOrder = {
		//减少数量
		decrease: function(){
			var that = this;
			$plan.on('click', '.js-decrease', function(){
				var $this = $(this),
				$count = $this.next('.js-num');
				var count = $count.text();
				--count;
				if(count >= 0){
					$count.text(count);
				}
				if(count <= 0){
					$this.addClass('disabled');
				}
				that.sum();

				return false;
			});
		},
		//增加数量
		increase: function(){
			var that = this;
			$plan.on('click', '.js-increase', function(){
				var $this = $(this), 
				$count = $this.prev('.js-num'),
				$decrease = $this.siblings('.js-decrease');
				var count = $count.text();
				$count.text(++count);
				$decrease.removeClass('disabled');
				that.sum();

				return false;
			});
		},
		//计算总额
		sum: function(){
			var sum = 0,
				$sum = $('.js-sum');
			$plan.find('li').each(function(i, el){
				var $this = $(el),
					$price = $this.find('.js-price'),
					$num = $this.find('.js-num');
				var price = $price.text(),
					num = $num.text();
				sum += price * num;
			});
			$sum.text(sum);
		},
		//立即购买
		buy: function(){
		    $('.js-buy').on('click', function(){
		    	var postData = [], serId, num, $item;
		    	$('.js-choice').each(function(i, el){
		    		$item = $(el);
		    		serId = $item.attr('data-serId');
		    		num = $item.find('.js-num').text();
		    		num = parseInt(num, 10);
		    		if(num && serId){
		    			postData.push({
		    				serviceId: serId,
		    				num: num
		    			});
		    		}
		    	});
		    	if(postData.length <= 0){
		    		lyAlert('请选择要购买的服务');
		    		return false;
		    	}

			    $.post('/xdApp/order?act=submit', {
			    	buy: postData
			    }, function(data){
			    	var result = data.data;
			    	if(data.errno === 0){
			    		if(result.redirect){
			    			location.href = result.redirect;
			    		}
			    	}else{
			    		lyAlert(data.msg);
			    	}
			    });

			    return false;
		    });
		},
		init: function(){
			this.increase();
			this.decrease();
			this.buy();
		}
	};

	payOrder.init();
});