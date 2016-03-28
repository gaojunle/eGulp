/**
 * @author jinlong on 2015/12/01
 *
 * @descript    良医心电APP，手机支付功能
 * @version 1.0
 * @example:
 */
$(function(){
	var $banks = $('.pay-banks'),
		$debitcard = $('.debitcard-banks'),
		$creditcard = $('.creditcard-banks');
	var $succPay = $('.succ-pay');

	var payOrder = {
		//展开银行
		expandBank: function(){
			$('.pay-type').on('click', function(){
				var $this = $(this);
				if($this.hasClass('alipay')){
					$this.addClass('selected');
				}else{
					$banks.hide();
					$this.siblings('.popped').removeClass('popped');
					if($this.hasClass('popped')){
						$this.removeClass('popped');
					}else{
						$this.addClass('popped');
						$this.next('.pay-banks').show();
					}
				}
				$this.siblings('.pay-type').each(function(){
					var $this = $(this);
					$this.removeClass('selected');
					var $payCon = $this.find('.pay-content'),
					payType = $payCon.data('text');
					if(payType){
						$payCon.text(payType);	
					}
				});
				return false;
			});
		},
		//选择银行
		selectBank: function(){
			$banks.on('click', 'a', function(){
				var $this = $(this), suffix = '';
				var bank = $this.text(),
					bankCode = $this.data('code');
				var $payType = $this.closest('.pay-banks').prev('.pay-type'),
				$payCon = $payType.find('.pay-content');
				$payType.attr('data-code', bankCode);
				if($payType.data('pop') === 'CREDITCARD'){
					suffix = '信用卡';
				}else if($payType.data('pop') === 'DEBITCARD'){
					suffix = '储蓄卡';
				}
				$payCon.text(bank + suffix);
				$this.closest('.pay-banks').hide();
				$('.pay-type').removeClass('selected');
				$payType.removeClass('popped').addClass('selected');
			});
		},
		//立即支付
		pay: function(){
			var that = this;
			var doPay = false;	//等待支付
			$('a.js-pay-btn').on('click', function(){
				var $this = $(this);
				if(doPay){
					return false;
				}

				var $selectedPay = $succPay.find('a.selected');
				if(!$selectedPay[0]){
					alert('请选择支付方式');
					doPay = false;
					return;
				}
				var bankCode = $selectedPay.data('code') || '',
					payType = $selectedPay.data('type') || 'coop';

	            var payUrl = '/pay/pay?applicant_id=' + (LY_INFO.applicant_id || 'null') + '&product_id=' + (LY_INFO.product_id || 'null') + '&pay_type=' + payType + '&bank_code=' + bankCode + '&_=' + new Date().getTime();

	            //禁用按钮
	            $this.text('支付中...').addClass('disabled');
				doPay = true;

				location.href = payUrl;
				return false;
			});
		},
		init: function(){
			var that = this;
			that.expandBank();
			that.selectBank();
			that.pay();

			//返回
			$('.js-back').on('click', function(){
				history.back();
			});
		}
	};

	payOrder.init();
});