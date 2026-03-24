var webuzzSDK = {
    init() {
        console.log("webuzz sdk version:", webuzzCommon.SDK_VERSION), webuzzCommon.systemInfo = wx.getSystemInfoSync(), 
        webuzzUtils.Defalut.log(webuzzCommon.systemInfo), webuzzCommon.scaleX = webuzzCommon.systemInfo.screenWidth / webuzzCommon.stageWidth, 
        webuzzCommon.stageHeight = webuzzCommon.systemInfo.screenHeight / webuzzCommon.scaleX, 
        webuzzUtils.Defalut.log("获取游戏缓存信息"), webuzzUtils.Defalut.getWxStorageData(), webuzzUtils.Defalut.log("用户登录"), 
        webuzzUtils.Defalut.getUserInfo(), this.onHide();
    },
    onHide() {
        wx.onHide(e => {
            console.log("onhide"), webuzzUtils.Defalut.sendEvent("事件计数");
        });
    },
    pay(e) {
        WxAdManager.Default.showVideoAd(e);
    },
    loadSquareCustomAd(e) {
        WxAdManager.Default.loadSquareCustomAd(e);
    },
    showSquareCustomAd(e) {
        WxAdManager.Default.showSquareCustomAd(e);
    },
    loadTwoSquareAds(e, o, a, d) {
        WxAdManager.Default.loadTwoSquareAds(e, o, a, d);
    },
    showTwoSquareAds(e, o, a, d) {
        WxAdManager.Default.showTwoSquareAds(e, o, a, d);
    },
    hideSquareCustomAd() {
        WxAdManager.Default.hideSquareCustomAd();
    },
    showBottomAd() {
        WxAdManager.Default.showBottomAd();
    },
    hideBottomAd() {
        WxAdManager.Default.hideBottomAd();
    },
    showTwoGridAds(e, o, a, d) {
        WxAdManager.Default.showTwoGridAds(e, o, a, d);
    },
    hideTwoGridAds() {
        WxAdManager.Default.hideTwoGridAds();
    },
    showOneGridAd(e, o) {
        WxAdManager.Default.showOneGridAd(e, o);
    },
    hideOneGridAd() {
        WxAdManager.Default.hideOneGridAd();
    },
    showListCustomAds(e, o, a, d) {
        WxAdManager.Default.showListCustomAds(e, o, a, d);
    },
    loadListCustomAds(e, o, a, d) {
        WxAdManager.Default.loadListCustomAds(e, o, a, d);
    },
    hideListCustomAds() {
        WxAdManager.Default.hideListCustomAds();
    },
    showInterstitialAd() {
        WxAdManager.Default.showInterstitialAd();
    },
    endLevelGame(e) {
        webuzzUtils.Defalut.sendEvent("下一关展示", {
            level: e
        });
    }
};

window.webuzzSDK = webuzzSDK;