var webuzzUtils = {
    Defalut: {
        banner_count: 0,
        video_count: 0,
        chapin_count: 0,
        custom_count: 0,
        next_count: 0,
        navi_count: 0,
        is_count_uploading: !1,
        event_upload_mode: 0,
        log(e, n) {
            webuzzCommon.DEBUG && (n ? console.log(e, n) : console.log(e));
        },
        resetCountValue() {
            this.banner_count = 0, this.video_count = 0, this.chapin_count = 0, this.custom_count = 0, 
            this.next_count = 0, this.navi_count = 0, this.is_count_uploading = !1;
        },
        sendEvent(e, n) {
            wx && ((n = void 0 === n ? {} : n).channel = webuzzCommon.userChannel, n.version = webuzzCommon.GAME_VERSION, 
            this.sendWebuzzEvent(e, n));
        },
        sendWebuzzEvent(e, n) {
            if (wx) switch (e) {
              case "首页显示":
                let u = 0, s = 0, a = "";
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18), 
                u = 1);
                let z = wx.getLaunchOptionsSync();
                z.query && z.query.channel && (s = 1), z.referrerInfo && z.referrerInfo.appId && (a = z.referrerInfo.appId).length > 18 && (a = "unknown"), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/login",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        is_new: webuzzCommon.newUser ? 1 : 0,
                        channel: webuzzCommon.userChannel,
                        scene: z.scene,
                        is_channel: s,
                        channel_appid: a,
                        is_random: u,
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("login event done."), webuzzUtils.Defalut.log(e), webuzzUtils.Defalut.event_upload_mode = e.data.code;
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "事件计数":
                var o = this.banner_count + this.video_count + this.custom_count + this.chapin_count;
                0 == this.is_count_uploading && this.event_upload_mode <= 1 && o > 0 && (webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                this.is_count_uploading = !0, wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/count",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        scene: webuzzCommon.userScene,
                        banner: this.banner_count,
                        video: this.video_count,
                        chapin: this.chapin_count,
                        custom: this.custom_count,
                        next: this.next_count,
                        navi: this.navi_count
                    },
                    method: "POST",
                    success: function(e) {
                        console.log("count event done."), webuzzUtils.Defalut.log(e), webuzzUtils.Defalut.resetCountValue();
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e), webuzzUtils.Defalut.is_count_uploading = !1;
                    }
                }));
                break;

              case "下一关展示":
                if (this.next_count += 1, this.event_upload_mode < 1) break;
                var t = "n";
                if (3 == this.event_upload_mode) if (t = "y", new Date().getSeconds() % 6 != 0) break;
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/next",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        level: "level" in n ? n.level : webuzzCommon.userLevel,
                        random: t
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("next event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "Banner广告展示":
                if (this.banner_count += 1, this.event_upload_mode < 1) break;
                t = "n";
                if (3 == this.event_upload_mode) if (t = "y", new Date().getSeconds() % 6 != 0) break;
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "banner",
                        random: t
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("banner event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "看完视频":
                if (this.video_count += 1, this.event_upload_mode < 1) break;
                t = "n";
                if (3 == this.event_upload_mode) if (t = "y", new Date().getSeconds() % 6 != 0) break;
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "video",
                        random: t
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("video event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "插屏广告显示":
                if (this.chapin_count += 1, this.event_upload_mode < 1) break;
                t = "n";
                if (3 == this.event_upload_mode) if (t = "y", new Date().getSeconds() % 6 != 0) break;
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "chapin",
                        random: t
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("chapin event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "格子广告显示":
                if (this.custom_count += 1, this.event_upload_mode < 1) break;
                t = "n";
                if (3 == this.event_upload_mode) if (t = "y", new Date().getSeconds() % 6 != 0) break;
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "custom",
                        random: t
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("custom event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "跳转到其他游戏":
                if (this.navi_count += 1, this.event_upload_mode < 1) break;
                t = "n";
                if (3 == this.event_upload_mode) if (t = "y", new Date().getSeconds() % 6 != 0) break;
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/navi",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        c_appid: n.appid,
                        showname: n.name,
                        type: 1,
                        from: n.from,
                        skin: n.skin,
                        strategy: webuzzCommon.userStrategy,
                        random: t
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("navi event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
            }
        },
        getWxStorageData() {
            if (wx) {
                var e = wx.getStorageSync(webuzzCommon.USER_ID_KEY);
                e && (webuzzCommon.userID = e), webuzzCommon.userID && webuzzCommon.userID.length > 8 ? webuzzCommon.newUser = !1 : webuzzCommon.newUser = !0;
                var n = wx.getStorageSync(webuzzCommon.USER_LEVEL_KEY);
                webuzzCommon.userLevel = n || 0;
                var o = wx.getLaunchOptionsSync();
                if (o.query && o.query.channel) webuzzCommon.userChannel = o.query.channel; else {
                    var t = wx.getStorageSync(webuzzCommon.USER_CHANNEL_KEY);
                    webuzzCommon.userChannel = t || "null";
                }
                wx.setStorageSync(webuzzCommon.USER_CHANNEL_KEY, webuzzCommon.userChannel), webuzzCommon.userScene = o.scene;
            }
        },
        getUserInfo() {
            var e = this;
            webuzzCommon.userID && webuzzCommon.userID.length > 8 ? this.sendEvent("首页显示") : wx.login({
                success(n) {
                    n.code ? wx.request({
                        url: "https://www.webuzz.com.cn/wxevent/openid",
                        data: {
                            code: n.code,
                            appid: webuzzCommon.APPID
                        },
                        method: "POST",
                        success: function(n) {
                            webuzzUtils.Defalut.log("openid done."), webuzzUtils.Defalut.log(n), webuzzCommon.userID = n.data.data, 
                            wx.setStorageSync(webuzzCommon.USER_ID_KEY, webuzzCommon.userID), e.sendEvent("首页显示");
                        },
                        fail: function(n) {
                            webuzzUtils.Defalut.log("登录失败！" + n.errMsg), e.sendEvent("首页显示");
                        }
                    }) : (webuzzUtils.Defalut.log("登录失败！" + n.errMsg), e.sendEvent("首页显示"));
                },
                fail(n) {
                    webuzzUtils.Defalut.log("登录失败！" + n.errMsg), e.sendEvent("首页显示");
                }
            });
        },
        currentDateString() {
            var e = new Date();
            return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
        }
    }
};

window.webuzzUtils = webuzzUtils;