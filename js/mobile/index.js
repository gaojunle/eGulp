/**
 * @author  jinlong on 2016/01/20
 *
 * @description 良医首页
 * @version 1.0
 * @example:
 */
require(['js/mobile/indexData', 'js/mobile/common/hammer', 'js/mobile/common/template7', 'js/mobile/common/swiper-3.2.4.min'], function(indexData, Hammer){
	var indexPage = {
		//搜索框 autocomplete
		autocomplete: function(){
			var $searchbar = $('.js-searchbar'), $searchInput = $searchbar.find('.js-search-input'),
				$suggest = $('.js-suggest'), $searchBtn = $searchbar.find('.js-search-btn'),
				$closeSug = $suggest.find('.js-sug-close');
			var api = '', word = '', sResult, sResultHtml;

			//跳转结果页面
			var redirectPage = function(word){
				if(!word){return;}
				var pUrl = 'http://s.liangyi.com/s?q='+ encodeURIComponent(word) +'&src=ly_home&search_type=on';
				location.href = pUrl;
			};
			$searchInput.on('input', function(){
				word = $(this).val().trim();
				if(!word){return;}
				api = 'http://sug.ly.so.com/suggest/word?callback=suggest_so&encodein=utf-8&encodeout=utf-8&word=' + encodeURIComponent(word);
				$.ajax({
					url: api,
					dataType: 'jsonp',
					success: function(result){
						if(result.p){
							sResult = result.s;
							var i = 0, len = sResult.length, sResultHtml = '';
							//显示6条结果
							len = (len >= 6 ? 6 : len);
							if(!len){return;}
							for(i; i<len; i++){
								sResultHtml += '<li class="suggest-item"><button class="suggest-item-title js-suggest-title">'+ sResult[i] +'</button><button class="suggest-item-add icon icon-arr-lt js-suggest-btn"></button></li>';
							}

							$suggest.find('ul').html(sResultHtml);
							$suggest.show();
						}
					}
				});
			});
			$searchInput.on('focus', function(){
				$(this).trigger('input');
			});

			//点击搜索按钮
			$searchBtn.on('click', function(){
				var sWord = $searchInput.val().trim();
				redirectPage(sWord);
				return false;
			});

			//点击提示词条
			$suggest.on('click', '.js-suggest-title', function(){
				var word = $(this).text();
				redirectPage(word);
			});
			//点击词条后面箭头
			$suggest.on('click', '.js-suggest-btn', function(){
				var word = $(this).prev('.js-suggest-title').text();
				$searchInput.val('').val(word);
				$suggest.hide();
				return false;
			});
			//关闭提示词条
			$closeSug.on('click', function(){
				$suggest.hide();
				return false;
			});
		},
		//banner轮播
		initBanner: function(){
			var banSwiper = new Swiper ('.swiper-container', {
				pagination: '.swiper-pagination'
			});
		},
		//渲染良医动态
		renderTrends: function(){
			var that = this;
			var $trends = $('.js-trends'),
				trendsTpl = $('#trends-tpl').html(),
				compiledTemplate = Template7.compile(trendsTpl);

			var data = {
				trends: indexData.trends
			};
			var htmlStr = compiledTemplate(data);
			$trends.append(htmlStr);
			 
			that.verticalConSlide({
				container: '.js-trends-swiper',
				content: '.js-trends',
				maxCount: indexData.trends.length,
				// tolerance: 1
			});
		},
		//渲染三甲医院医生
		renderDoctors: function(){
			var that = this;
			var $doctors = $('.js-doctors'),
				doctorsTpl = $('#doctors-tpl').html(),
				compiledTemplate = Template7.compile(doctorsTpl);

			var data = {
				doctors: indexData.doctors
			};
			var htmlStr = compiledTemplate(data);
			$doctors.append(htmlStr);
			 
			that.verticalConSlide({
				container: '.js-doctors-swiper',
				content: '.js-doctors',
				maxCount: indexData.doctors.length,
				// tolerance: 1
			});
		},
		//竖向内容分页滚动
		verticalConSlide: function(options){
			options = options || {};
			var container = options.container, 			//容器元素
				content = options.content, 				//内容元素
				viewCount = options.viewCount || 4,		//可视区域显示几条数据
				maxCount = options.maxCount || $(content).children().length, 
				page, 									//总页数
				curPage = 0;							//当前页数
			
			var tolerance = 0;							//容差
			if(options.tolerance !== undefined){
				tolerance = options.tolerance;
			}

			page = Math.floor(maxCount / viewCount);	
			if(maxCount % viewCount > 0){
				page = page + 1;
			}

			var $container = $(container), $content = $(content);

			var h = $content.children().eq(2).outerHeight();
			//避免每一项的高度误差
			// $content.children().css('height', h + 'px');

			var perPageH = h*viewCount + tolerance;
			$container.css('height', perPageH);
			var $page = $container.next('.page'),
				$next = $page.find('.swiper-button-next'),
				$prev = $page.find('.swiper-button-prev');
			var moveH;
				
			$next.on('click', function(){
				if(curPage + 1 < page){
					$prev.removeClass('disabled');

					++curPage;

					moveH = - (curPage * perPageH);
					$content.css({
						'-webkit-transform': 'translate3d(0, '+ moveH +'px, 0)',
						'transform': 'translate3d(0, '+ moveH +'px, 0)'
					});

					if(curPage + 1 === page){
						$next.addClass('disabled');
					}
				}
				
			});
			$prev.on('click', function(){
				if(curPage > 0){
					$next.removeClass('disabled');
					
					--curPage;

					moveH = - (curPage * perPageH);
					$content.css({
						'-webkit-transform': 'translate3d(0, '+ moveH +'px, 0)',
						'transform': 'translate3d(0, '+ moveH +'px, 0)'
					});

					if(curPage === 0){
						$prev.addClass('disabled');
					}
				}
				
			});

			// //支持手势拖动
			// $content.on('touchstart', function(ev){
			// 	ev.preventDefault();
			// });
			// var hammertime = new Hammer($content[0]);
			// hammertime.on('panup', function(ev) {
			//     var distance = - (curPage * perPageH) + parseInt(ev.deltaY);
			//     $content.css({
			// 		'-webkit-transform': 'translate3d(0, '+ distance +'px, 0)',
			// 		'transform': 'translate3d(0, '+ distance +'px, 0)',
			// 		'-webkit-transition': 'all linear 0s',
			// 		'transition': 'all linear 0s'
			// 	});

			// });
			// hammertime.on('pandown', function(ev) {
			//     var distance = - (curPage * perPageH) + parseInt(ev.deltaY);
			//     $content.css({
			// 		'-webkit-transform': 'translate3d(0, '+ distance +'px, 0)',
			// 		'transform': 'translate3d(0, '+ distance +'px, 0)',
			// 		'-webkit-transition': 'all linear 0s',
			// 		'transition': 'all linear 0s'
			// 	});

			// });
			// hammertime.on('panend', function(ev){
			// 	var distance = parseInt(ev.deltaY);

			// 	$content.css({
			// 		'-webkit-transition': 'all 0.3s',
			// 		'transition': 'all 0.3s'
			// 	});

			// 	//拖至上边缘
			// 	if(curPage === 0 && ev.deltaY > 0){
			// 		distance = - (curPage * perPageH);
			// 		$content.css({
			// 			'-webkit-transform': 'translate3d(0, '+ distance +'px, 0)',
			// 			'transform': 'translate3d(0, '+ distance +'px, 0)'
			// 		});
			// 		return;
			// 	}
			// 	//拖至下边缘
			// 	if(curPage + 1 === page && ev.deltaY < 0){
			// 		distance = - (curPage * perPageH);
			// 		$content.css({
			// 			'-webkit-transform': 'translate3d(0, '+ distance +'px, 0)',
			// 			'transform': 'translate3d(0, '+ distance +'px, 0)'
			// 		});
			// 		return;
			// 	}
			// 	//拖动距离小于高度的一半
			// 	if(Math.abs(distance) < perPageH / 2){
			// 		distance = - (curPage * perPageH);
			// 		$content.css({
			// 			'-webkit-transform': 'translate3d(0, '+ distance +'px, 0)',
			// 			'transform': 'translate3d(0, '+ distance +'px, 0)'
			// 		});
			// 	}else{
			// 		if(ev.deltaY > 0){
			// 			$prev.trigger('click');
			// 		}else{
			// 			$next.trigger('click');
			// 		}
			// 	}
			    
			// });

		},
		//良医百科随机筛选
		randomWiki: function(){
			var wiki = indexData.wiki, len = wiki.length - 1;
			var sum, i, resultArr;
			
			//词条随机
			var randomWord = function(){
				sum = 6, resultArr = [];
				//检查词条唯一性
				var isUnique = function(obj){
					var isOk = true;
					var w = 0, len = resultArr.length;
					resultArr.forEach( function(el, index) {
						if(el.word === obj.word){
							isOk = false;
							return isOk;
						}
					});
					return isOk;
				};
				while(sum--){
					i = Math.round(Math.random()*len);
					//词条不唯一，重随一次
					while(!isUnique(wiki[i])){
						i = Math.round(Math.random()*len);
					}
					resultArr.push(wiki[i]);
				}
			};

			//恢复样式表
			var wikiStyle = [], prefix = 'bgc';	//CSS样式数字
			var resetStyle = function(){
				var count = 6, index;
				while(count--){
					index = count + 1;
					wikiStyle.push(prefix + index);
				}
			};

			var $refresh = $('.js-refresh-wiki'),
				$wikiCon = $('.js-wiki .word');
			var rLen, rIndex, $thisEl, $thisWord, $thisDoctor;
			var thisItem;

			//刷新词条
			$refresh.on('click', function(){
				var $this = $(this);
				$this.addClass('refresh-wiki');
				setTimeout(function(){
					$this.removeClass('refresh-wiki');

					rLen = 6;
					resetStyle();
					randomWord();

					while(rLen--){
						rIndex = Math.round(Math.random()*rLen);

						$thisEl = $wikiCon.eq(rLen), $thisWord = $thisEl.find('a:nth-child(1)'),
						$thisDoctor = $thisEl.find('a:nth-child(2)');
						thisItem = resultArr[rLen];

						$thisWord.text(thisItem.word);
						$thisWord.attr('href', thisItem.wordLink);
						$thisDoctor.text(thisItem.name);
						$thisDoctor.attr('href', thisItem.doctorLink);

						//样式随机
						$thisEl.removeClass().addClass('word '+ wikiStyle[rIndex]);

						//防止样式重复
						wikiStyle.splice(rIndex, 1);

					}
				}, 300);
				
			});
			
		},
		init: function(){
			this.autocomplete();
			this.initBanner();
			this.renderTrends();
			this.renderDoctors();
			this.randomWiki();
		}
	};

	indexPage.init();
});