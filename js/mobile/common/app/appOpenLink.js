/**
 * @author  jinlong on 2016/03/18
 *
 * @description 用于良医APP，拦截A链接，新开详情页面，不做跳转
 * @version 1.0
 * @example:
 */
define([], function(){
	var LinkToWindow = function(options){
		this.container = options.container;		//区域容器
		this.eventName = options.eventName;		//自定义事件名

		var container = this.container,
			eventName = this.eventName;

		var $linkList = $(container);
		$linkList.on('click', 'a', function(e){
		    //阻止跳转
		    e.preventDefault();

		    var $this = $(this),
		        linkTitle = $this.attr('title') || '', linkUrl;
		        if($this.attr('href').indexOf('javascript:') > -1){
		        	return false;
		        }
		        if($this.attr('href').indexOf('http://') > -1){
		        	linkUrl = $this.attr('href');
		        }else{
			        linkUrl = 'http://'+ location.hostname + $this.attr('href');
		        }

		    //信息发给客户端处理
		    api.sendEvent({
		        name: eventName,
		        extra: {
		            title: linkTitle,
		            frameUrl: linkUrl
		        }
		    });

		});
	};

	return LinkToWindow;

});