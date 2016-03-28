/**
 * @author  jinlong on 2016/02/29
 *
 * @description 义诊订阅页面
 * @version 1.0
 * @example:
 */
require([], function () {
    var $choice = $('.js-choice'),
        $selected = $('.js-selected');
    var API = '/yizhen/Rss';

    var subPage = {
        //搜索框
        initSearchBox: function () {
            var that = this;
            var $add = $('.js-add'),
                $searchInput = $('.js-search');

            $searchInput[0].focus();

            var oldVal = '',
                newVal = '';

            $searchInput.on('input', function (evt) {
                var $this = $(this);

                newVal = $this.val();

                if (newVal.length == 0) {
                    $add.hide();
                } else {
                    $add.show();
                    that.updateRecomm(newVal);
                    oldVal = newVal;
                }
            });

            //点击添加按钮
            $add.on('click', function () {
                var txt = $searchInput.val().trim();
                if (txt !== '') {
                    that.ajaxAddSub(txt, function (rssId) {
                        var html = '<li data-id="' + rssId + '">' + txt + '</li>';
                        $selected.append(html);
                    });
                }
            });
        },
        //更新推荐列表
        updateRecomm: function (word) {
            $.post(API, {
                act: 'Sug',
                kw: word
            }, function (result) {
                if (result.errno === 0) {
                    var list = result.data.list;
                    var htmlStr = '', thisTag;

                    for (var k in list) {
                        thisTag = list[k];
                        htmlStr += '<li>' + thisTag.disease_name + '</li>';
                    }
                    $choice.html(htmlStr);
                } else {
                    if (result.msg) {
                        alert(result.msg);
                    }
                }
            });
        },
        //ajax添加标签
        ajaxAddSub: function (word, succCallBack) {
            if (!word) {
                return;
            }
            $.post(API, {
                act: 'Add',
                kw: word
            }, function (result) {
                if (result.errno === 0) {
                    var rssId = result.data.rss_id || '';
                    succCallBack && succCallBack(rssId);
                } else {
                    if (result.msg) {
                        alert(result.msg);
                    }
                }
            });
        },
        //添加订阅标签
        addSub: function () {
            var that = this;
            var $this, $clone;
            $choice.on('click', 'li', function () {
                $this = $(this);
                rssTxt = $this.text();

                that.ajaxAddSub(rssTxt, function (rssId) {
                    var html = '<li data-id="' + rssId + '">' + rssTxt + '</li>';
                    $selected.append(html);
                    $this.remove();
                });
            });
        },
        //删除订阅标签
        rmSub: function () {
            var $this;
            $selected.on('click', 'li', function () {
                $this = $(this);
                $.post(API, {
                    act: 'Del',
                    rss_id: $this.data('id')
                }, function (result) {
                    if (result.errno === 0) {
                        $this.remove();
                    } else {
                        if (result.msg) {
                            alert(result.msg);
                        }
                    }
                });

            });
        },
        init: function () {
            this.initSearchBox();
            this.addSub();
            this.rmSub();
        }
    };
    subPage.init();
});