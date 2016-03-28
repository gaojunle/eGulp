require(['js/mobile/common/template7'], function(){
	var $section = $('section');
    var $map = $('.js-map'), $address = $('.js-address');
    var map;

	var hospInfo = {
		//栏目显示/隐藏
        toggleColumn: function () {
            var that = this;
            $section.on('click', '.js-h2-title', function () {
                var $this = $(this),
                    $content = $this.next('.js-content');
                if($this.hasClass('shrink')){
                    $content.slideUp();
                }else{
                    $content.slideDown();
                }

                $this.toggleClass('shrink');
            });
        },
        //标注地图位置
        markMap: function(lat, lng){
        	if(!lat || !lng){return;}
            var myLatlng = new so.maps.LatLng(lat, lng)
            var mapOptions = {
                zoom: 17,
                center: myLatlng,
                mapTypeId: so.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                __hideCopyRight__: true,
                __hideLogo__: true
            };
            map = new so.maps.Map($map[0], mapOptions);
            var marker = new so.maps.Marker({
                position: myLatlng,
                map: map
            });
        },
        //初始化地图
        initMap: function(){
        	var that = this;
        	var $firstLi = $address.find('li:first');
        	var lat = $firstLi.data('lat'), lng = $firstLi.data('lng');
        	that.markMap(lat, lng);
        	$address.on('click', 'li', function(){
        		var $this = $(this);
        		lat = $this.data('lat'), lng = $this.data('lng');
        		that.markMap(lat, lng);
        	});
        },
        //通用查看更多
        viewMore: function(moreBtnCls, moreConCls, cb){
        	$section.on('click', moreBtnCls, function(){
        		var $this = $(this);
        		$this.hide();
        		$this.prev(moreConCls).slideDown();
        		cb && cb($this);
        	});
        },
        //查看全部地址
        viewAllAddress: function(){
        	this.viewMore('.js-more-address', '.js-address');
        },
        //查看全部科室
        viewAllDept: function(){
        	this.viewMore('.js-more-dept', '.js-depts');
        },
        //查看更多基本信息
        viewMoreInfo: function(){
        	$('.basic-info').on('click', '.js-more-info', function(){
        		var $this = $(this), $content = $this.prev('p'),
        			$cloneCon = $content.clone().removeClass('more-fold');

        		$cloneCon.css({
        			'position': 'absolute',
        			'visibility': 'hidden'
        		});
        		$this.after($cloneCon);

        		var $ghostCon = $this.next('p');
        		var h = $ghostCon.outerHeight();
        		$ghostCon.remove();
        		$this.prev('p').removeClass('more-fold').css('height', h+'px');
        		$this.hide();

        	});
        },
        //前端渲染科室
        renderDept: function(){
        	var template = $('#template').html();
			var compiledTemplate = Template7.compile(template),
				$depts = $('.js-depts');
			var htmlStr, api = $depts.data('url');
			if(api){
				$.ajax({
					url: api,
					cache: false,
					success: function(result){
						if(result.errno !== -1){
							var deptData = result.data.departmentInfo,
								newData = [],	//处理返回数据
								len = deptData.length, thisItem, doctorNum;
							for(var i=0; i<len; i++){
								thisItem = deptData[i];
								doctorNum = parseInt(thisItem.dc_num, 10);
								if(!doctorNum){
									thisItem.hasDoctors = false;	//没有医师
								}else{
									thisItem.hasDoctors = true;
								}
								newData.push(thisItem);
							}
							var data = {
								depts: newData
							};

							htmlStr = compiledTemplate(data);
							$depts.html(htmlStr);
						}else{
							if(result.msg){
								alert(result.msg);
							}
						}
					}
				});
			}
        },
		init: function(){
			this.viewMoreInfo();
			this.toggleColumn();
			this.viewAllAddress();
			this.viewAllDept();
			this.renderDept();
            this.initMap();
		}
	};
	hospInfo.init();
});