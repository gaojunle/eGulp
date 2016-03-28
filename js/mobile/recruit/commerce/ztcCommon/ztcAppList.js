//add by jinlong | 2016-03-18
//用于良医APP，新开详情页面，不做跳转
require(['js/mobile/common/app/appOpenLink'], function (LinkToWindow) {
    if (window.api) {
        _apiReady();
    }

    window.apiready = function () {
        _apiReady();
    };

    function _apiReady() {
        new LinkToWindow({
            container: 'section',
            eventName: 'ztcLinkData'
        });

        try {
            api.refreshHeaderLoadDone();
        } catch (e) {
        }
        //下拉刷新
        api.setRefreshHeaderInfo({
            visible: true,
            bgColor: '#ccc',
            textColor: '#fff',
            textDown: '下拉刷新...',
            textUp: '松开刷新...',
            showTime: true
        }, function (ret, err) {
            location.reload();
        });
    }
});