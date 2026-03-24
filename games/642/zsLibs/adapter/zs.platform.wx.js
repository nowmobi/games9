"undefined" != typeof wx && (window.platform = function() {
    function platform() {}
    return platform.loginCount = 0, platform.launchOptions = null, platform.systemInfo = null, 
    platform.delayBanner = null, platform.customAdList = {}, platform.hideCustom = !1, 
    platform.handlerTimeout = 3e3, platform.insertHanlder = null, platform.bannerCount = 0, 
    platform.hideCount = 0, platform.videoCount = 0, platform.videoInfo = null, platform.videoIds = null, 
    platform.videoIdx = 0, platform.videoWait = null, platform.videoLoaded = !1, platform.init = function() {
        if (wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), platform.systemInfo = wx.getSystemInfoSync(), "function" == typeof wx.getUpdateManager) {
            var t = wx.getUpdateManager();
            t.onCheckForUpdate(function(t) {
                zs.log.debug("微信系统更新检测" + (t.hasUpdate ? "成功" : "失败"), "Platform");
            }), t.onUpdateReady(function() {
                t.applyUpdate();
            });
        }
        console.log("微信平台初始化...");
    }, platform.initAds = function() {
        platform.initBanner(), platform.initVideo(), platform.setDefaultShare(), platform.initInsert({
            id: zs.product.get("zs_full_screen_adunit")
        }), 2 == Number(zs.product.get("zs_adtype_switch")) && platform.initBannerCustom(zs.product.get("zs_home_adunit")), 
        2 == Number(zs.product.get("zs_egg_adtype_switch2")) && platform.initFullBannerCustom(zs.product.get("zs_single_grid1"), zs.product.get("zs_single_grid2"));
    }, platform.login = function() {
        return new Promise(function(t, o) {
            wx.login({
                success: function success(o) {
                    t(o);
                },
                fail: function fail(t) {
                    o(t);
                },
                complete: function complete(t) {}
            });
        });
    }, platform.getLaunchOptions = function() {
        return platform.launchOptions || (platform.launchOptions = wx.getLaunchOptionsSync()), 
        platform.launchOptions;
    }, platform.getScene = function() {
        return platform.launchOptions || (platform.launchOptions = wx.getLaunchOptionsSync()), 
        platform.launchOptions && platform.launchOptions.scene ? platform.launchOptions.scene.toString() : null;
    }, platform.getLoginParams = function() {
        return new Promise(function(t, o) {
            wx.login({
                success: function success(o) {
                    t({
                        code: o.code,
                        scene: platform.getLaunchOptions().scene
                    });
                },
                fail: function fail(o) {
                    t({
                        uid: 1
                    });
                },
                complete: function complete(t) {}
            });
        });
    }, platform.setFrameRate = function(t) {
        t || "number" == typeof t ? wx.setPreferredFramesPerSecond(t) : zs.log.warn("方法（ setFrameRate ）缺少必要参数（ frame ）", "Platform");
    }, platform.share = function(t) {
        wx.shareAppMessage({
            title: t && t.title ? t.title : zs.product.get("zs_share_title"),
            imageUrl: t && t.imgUrl ? t.imgUrl : zs.product.get("zs_share_img"),
            query: t ? t.query : null,
            imageUrlId: t ? t.imageUrlId : null,
            toCurrentGroup: t ? t.toCurrentGroup : null,
            path: t ? t.path : null
        });
    }, platform.setDefaultShare = function(t) {
        var o = {
            title: t && t.title ? t.title : zs.product.get("zs_share_title"),
            imageUrl: t && t.imgUrl ? t.imgUrl : zs.product.get("zs_share_img"),
            query: t ? t.query : null,
            imageUrlId: t ? t.imageUrlId : null,
            toCurrentGroup: t ? t.toCurrentGroup : null,
            path: t ? t.path : null
        };
        wx.onShareAppMessage(function() {
            return o;
        });
    }, platform.setCloudStorage = function(t) {
        return new Promise(function(o, e) {
            if (null == t.kvPair) return zs.log.warn("方法（ setCloudStorage ）缺少必要参数（ kvPair ）", "Platform"), 
            e();
            wx.setUserCloudStorage({
                KVDataList: t.kvPair,
                success: function success(t) {
                    zs.log.debug("setCloudStorage success: " + JSON.stringify(t), "Platform"), o(t);
                },
                fail: function fail(t) {
                    zs.log.debug("setCloudStorage fail: " + JSON.stringify(t), "Platform"), e(t);
                },
                complete: function complete(t) {}
            });
        });
    }, platform.getCloudStorage = function(t) {
        return new Promise(function(t, o) {
            return zs.log.warn("getCloudStorage接口只可在开放数据域下使用,直接调用无效"), o();
        });
    }, platform.userInfoCreate = function(t) {
        return new Promise(function(o, e) {
            if (null == t.rect) return zs.log.warn("方法（ userInfoCreate ）缺少必要参数（ rect ）", "Platform"), 
            e();
            var r = platform.systemInfo, n = t.rect;
            platform.userInfoButton = wx.createUserInfoButton({
                type: "image",
                text: "",
                image: t.image,
                style: {
                    left: r.windowWidth * n.x,
                    top: r.windowHeight * n.y,
                    width: r.windowWidth * n.width,
                    height: r.windowHeight * n.height,
                    opacity: 1
                }
            }), platform.userInfoButton.onTap(function(t) {
                o(t);
            });
        });
    }, platform.userInfoHide = function() {
        platform.userInfoButton && platform.userInfoButton.hide();
    }, platform.userInfoShow = function() {
        platform.userInfoButton && platform.userInfoButton.show();
    }, platform.userInfoDestroy = function() {
        platform.userInfoButton && platform.userInfoButton.destroy(), platform.userInfoButton = null;
    }, platform.loadSubpackage = function(t) {
        return new Promise(function(o, e) {
            if (null == t.pkgName) return zs.log.warn("方法（ loadSubpackage ）缺少必要参数（ pkgName ）", "Platform"), 
            e();
            var r = wx.loadSubpackage({
                name: t.pkgName,
                success: function success(t) {
                    o(t);
                },
                fail: function fail(t) {
                    e(t);
                }
            });
            r ? t.progressHandler && r.onProgressUpdate(function(t) {
                progressHandler.runWith(t.progress);
            }) : e();
        });
    }, platform.onVideoErrorHandler = function(t) {
        console.log("视频展示错误", t), platform.videoErrorHandler && platform.videoErrorHandler(t), 
        platform.videoInfo = null;
    }, platform.onVideoCloseHandler = function(t) {
        t && t.isEnded || null == t ? (platform.videoCloseHandler && platform.videoCloseHandler(!0), 
        platform.videoInfo && zs.network.video(platform.videoInfo.id, platform.videoInfo.key, 3)) : platform.videoCloseHandler && platform.videoCloseHandler(!1), 
        platform.videoInfo = null;
    }, platform.initVideo = function() {
        if (null == platform.videoIds) {
            platform.videoIds = [];
            var _t = [ zs.product.get("zs_video_adunit"), zs.product.get("zs_video_adunit1"), zs.product.get("zs_video_adunit2") ];
            for (;_t.length > 0; ) {
                var o = _t.shift();
                null != o && "" != o && platform.videoIds.push(o);
            }
        }
        if (null == platform.videoIds || platform.videoIds.length <= 0) return void console.error("不存在有效视频ID");
        platform.videoWait = null;
        var t = platform.videoIds[platform.videoIdx % platform.videoIds.length];
        if (null == t || t.length <= 0) return zs.log.warn("方法（ initVideo ）缺少必要参数（ id ）", "Platform"), 
        void (platform.videoAd = null);
        platform.videoId = t, platform.videoAd = wx.createRewardedVideoAd({
            adUnitId: t
        }), platform.videoAd && (platform.videoAd.offError(platform.onVideoErrorHandler), 
        platform.videoAd.offClose(platform.onVideoCloseHandler), platform.videoAd.onError(platform.onVideoErrorHandler), 
        platform.videoAd.onClose(platform.onVideoCloseHandler)), platform.loadVideo();
    }, platform.loadVideo = function() {
        if (!platform.videoAd) return platform.videoErrorHandler && platform.videoErrorHandler(), 
        void (platform.videoErrorHandler = null);
        var t = !1;
        platform.videoInLoad = !0, platform.videoAd.load().then(function() {
            platform.videoInLoad = !1, platform.videoTimeOut && clearTimeout(platform.videoTimeOut), 
            t || (console.log("加载视频成功"), platform.videoLoaded = !0, platform.videoLoadFunc && platform.videoLoadFunc(), 
            platform.videoLoadFunc = null);
        }).catch(function() {
            t = !0, platform.videoInLoad = !1, console.log("加载视频失败"), platform.videoAd = null, 
            platform.videoLoaded = !1, platform.videoTimeOut && clearTimeout(platform.videoTimeOut);
        }), platform.videoTimeOut = setTimeout(function() {
            platform.videoErrorHandler && platform.videoErrorHandler(), platform.videoLoadFunc = null, 
            platform.videoErrorHandler = null, platform.videoInLoad = !1, platform.videoInShow = !1;
        }, 3e3);
    }, platform.resetVideo = function() {
        platform.videoErrorHandler = null, platform.videoCloseHandler = null, platform.videoAd && (platform.videoAd.destroy(), 
        platform.videoAd = null), platform.videoLoaded = !1, platform.videoIdx++, platform.videoWait = new Date().getTime(), 
        platform.initVideo();
    }, platform.playVideo = function(t, o) {
        return console.log("播放激励视频"), t && t.video_id && t.video_name && (console.warn("点击视频上报"), 
        zs.network.videoReport(t.video_id, t.video_name, 2)), new Promise(function(o, e) {
            if (platform.videoInShow) return e(null);
            if (null == platform.videoAd && platform.initVideo(), null == platform.videoAd) return e(null);
            platform.videoCloseHandler = function(e) {
                platform.videoInShow = !1, o(e), platform.loadVideo(), e && t && t.video_id && t.video_name && (console.warn("播放完视频上报"), 
                zs.network.videoReport(t.video_id, t.video_name, 3), zs.core.workflow.applyEvent("event_video_play_finish"));
            }, platform.videoErrorHandler = function(t) {
                platform.videoInShow = !1, e(t);
            };
            var r = !1, n = function n() {
                platform.videoAd.show().catch(function(t) {
                    r = !0, platform.videoAd = null, platform.resetVideo(), e(t), platform.videoInShow = !1;
                }).then(function() {
                    platform.videoInShow = !0, platform.videoLoaded = !1, r || (console.log("视频广告展示成功！"), 
                    t && t.video_id && t.video_name && (console.warn("播放视频上报"), zs.network.videoReport(t.video_id, t.video_name, 1)));
                });
            };
            platform.videoInLoad ? platform.videoLoadFunc = n : platform.videoLoaded ? (n(), 
            n = null) : (platform.videoLoadFunc = n, platform.loadVideo());
        });
    }, platform.isVideoEnable = function() {
        return null != platform.videoAd;
    }, platform.getVideoId = function() {
        return platform.videoId;
    }, platform.initInsert = function(t) {
        if (null == t.id || t.id.length <= 0) return zs.log.warn("方法（ initInsert ）缺少必要参数（ id ）", "Platform"), 
        void (platform.insertId = null);
        platform.insertId = t.id, platform.insertAd = wx.createInterstitialAd({
            adUnitId: t.id
        }), platform.insertAd && (platform.insertAd.onLoad(function() {
            console.log("插屏广告加载成功!");
        }), platform.insertAd.onError(function(t) {
            null != platform.insertAd && (platform.insertAd.destroy(), platform.insertAd = null), 
            platform.insertErrorHandler && platform.insertErrorHandler(t);
        }), platform.insertAd.onClose(function() {
            platform.insertCloseHandler && platform.insertCloseHandler();
        }));
    }, platform.loadInsert = function(t) {
        null != t.closeHandler ? null != t.errorHandler ? (platform.insertErrorHandler = t.errorHandler, 
        null != platform.insertAd || (platform.initInsert({
            id: platform.insertId
        }), null != platform.insertAd) ? (platform.insertCloseHandler = t.closeHandler, 
        platform.insertAd.show().catch(function(t) {
            console.log("插屏广告播放失败！", t), platform.insertErrorHandler && platform.insertErrorHandler("插屏广告展示失败!");
        }).then(function(t) {
            console.log("插屏广告展示成功！", t), platform.insertHanlder && (clearTimeout(platform.insertHanlder), 
            platform.insertHanlder = null);
        }), platform.insertHanlder = setTimeout(function() {
            console.error("插屏广告展示超时!"), null != platform.insertAd && (platform.insertAd.destroy(), 
            platform.insertAd = null), platform.insertHanlder = null, platform.insertErrorHandler && platform.insertErrorHandler("插屏广告展示超时!");
        }, platform.handlerTimeout)) : platform.insertErrorHandler && platform.insertErrorHandler("插屏广告创建失败!")) : zs.log.warn("方法（ loadInsert ）缺少必要参数（ errorHandler ）", "Platform") : zs.log.warn("方法（ loadInsert ）缺少必要参数（ closeHandler ）", "Platform");
    }, platform.request = function(t) {
        if (null == t) return void zs.log.warn("原生网络请求没有参数传输错误");
        if (null == t.url || t.url.length <= 0) return void zs.log.warn("方法（ request ）缺少必要参数（ url ）", "Platform");
        if (null == t.data) return void zs.log.warn("方法（ request ）缺少必要参数（ data ）", "Platform");
        if (null == t.method) return void zs.log.warn("方法（ request ）缺少必要参数（ method ）", "Platform");
        var o = {
            "content-type": "application/json"
        };
        return t.header && (o = t.header), new Promise(function(e, r) {
            wx.request({
                url: t.url,
                data: t.data,
                timeout: t.timeout || 2e3,
                header: o,
                method: t.method,
                success: function success(t) {
                    e(t);
                },
                fail: function fail(t) {
                    r(t);
                },
                complete: function complete() {}
            });
        });
    }, platform.hasBanner = function() {
        return !!zs.wx.banner.WxBannerMgr.Instance.wxbanner;
    }, platform.checkBannerAdunit = function() {
        var t = "", o = [], e = zs.product.get("zs_banner_adunit"), r = (zs.product.get("zs_banner_adunit2"), 
        zs.product.get("zs_banner_adunit3"), []);
        e && (t += e), o = t.split(";");
        for (var _t2 = 0; _t2 < o.length; _t2++) {
            var _e = o[_t2];
            "" != _e && r.push(_e);
        }
        console.log("bannerid=", r);
        var n = [];
        r.sort(function(t, o) {
            return Math.random() > .5 ? 1 : -1;
        });
        for (var _t3 = 0; _t3 < r.length; _t3++) {
            n.push(r[_t3]);
        }
        return {
            permanentBannerIdList: n
        };
    }, platform.initBanner = function() {
        var t = platform.checkBannerAdunit();
        zs.wx.banner.WxBannerMgr.Instance.initPermanentBanner(t.permanentBannerIdList);
    }, platform.showBanner = function(t) {
        platform.checkCustomOrBanner(t);
    }, platform.updateBanner = function(t) {}, platform.checkCustomOrBanner = function(t) {
        platform.isClick = null, platform.isFull = null, t && t.isClick && (platform.isClick = t.isClick), 
        t && t.isFull && (platform.isFull = t.isFull), 2 != Number(zs.product.get("zs_adtype_switch")) || platform.isFull || platform.isClick ? platform.isClick ? zs.wx.banner.WxBannerMgr.Instance.showBanner(t) : platform.isFull && 2 == Number(zs.product.get("zs_egg_adtype_switch2")) ? platform.showFullBannerCustom() : zs.wx.banner.WxBannerMgr.Instance.showBanner(t) : platform.showBannerCustom();
    }, platform.checkBanner = function(t) {
        if (2 != Number(zs.product.get("zs_adtype_switch")) || platform.isFull || platform.isClick ? platform.isClick || (platform.isFull && 2 == Number(zs.product.get("zs_egg_adtype_switch2")) ? platform.hideFullBannerCustom() : zs.wx.banner.WxBannerMgr.Instance.hideAll()) : platform.hideBannerCustom(), 
        !t || !t.data || !t.data.banner) return;
        var o = t.data.banner;
        o && (o.delay && zs.product.get("zs_banner_banner_time") ? platform.delayBanner = setTimeout(function() {
            platform.checkCustomOrBanner(o);
        }, zs.product.get("zs_banner_banner_time")) : platform.checkCustomOrBanner(o));
    }, platform.hideBanner = function() {
        2 != Number(zs.product.get("zs_adtype_switch")) || platform.isFull || platform.isClick ? platform.isClick ? zs.wx.banner.WxBannerMgr.Instance.hideAll() : platform.isFull && 2 == Number(zs.product.get("zs_egg_adtype_switch2")) ? platform.hideFullBannerCustom() : zs.wx.banner.WxBannerMgr.Instance.hideAll() : platform.hideBannerCustom();
    }, platform.clearDelayBanner = function() {
        platform.delayBanner && clearTimeout(platform.delayBanner), platform.delayBanner = null;
    }, platform.navigateToOther = function(t) {
        return new Promise(function(o, e) {
            null == t.appInfo && (zs.log.warn("方法（ navigateToOther ）缺少必要参数（ appInfo ）", "Platform"), 
            e());
            var r = t.appInfo;
            var n = null;
            r.link_path ? n = r.link_path : r.imgs && r.imgs[r.img_index] && (n = r.imgs[r.img_index].link), 
            null != n && "" != n || (n = "pages/index/index"), wx.navigateToMiniProgram({
                appId: r.appid,
                path: n,
                extraData: r.extraData || {},
                success: function success(t) {
                    o(t);
                },
                fail: function fail(t) {
                    e(t);
                },
                complete: function complete(t) {}
            });
        });
    }, platform.recorderStart = function() {
        if ("function" == typeof wx.getGameRecorder) {
            var t = wx.getGameRecorder();
            var o = t.isFrameSupported();
            zs.log.debug("是否支持录制游戏画面", o), o && (platform.initRecorder || (platform.initRecorder = !0, 
            t.on("start", function() {
                platform.recoding = !0, platform.recorderTime = Date.now();
            }), t.on("stop", function(t) {
                platform.recoding = !1, platform.recorderTime = Date.now() - platform.recorderTime;
            })), t.start());
        }
    }, platform.recorderStop = function() {
        if (wx && platform.recoding || reject(), "function" == typeof wx.getGameRecorder) {
            wx.getGameRecorder().stop();
        }
    }, platform.recorderPause = function() {
        if (wx && platform.recoding || reject(), "function" == typeof wx.getGameRecorder) {
            wx.getGameRecorder().pause();
        }
    }, platform.recorderResume = function() {
        if (wx && platform.recoding || reject(), "function" == typeof wx.getGameRecorder) {
            wx.getGameRecorder().resume();
        }
    }, platform.recorderCreate = function(t) {
        if (null == t.data) return void zs.log.warn("方法（ recorderCreate ）缺少必要参数（ data ）", "Platform");
        if (!wx || "function" != typeof wx.createGameRecorderShareButton) return void zs.load.warn("该设备不支持分享录屏功能");
        platform.stopRecorder();
        var o = wx.getSystemInfoSync(), e = t.data;
        platform.shareRecorderButton = wx.createGameRecorderShareButton({
            style: {
                left: .5 * o.windowWidth - 65,
                top: o.windowHeight * (e.percentY || .7) - 20,
                height: 40
            },
            text: e.btnText || "分享录屏",
            share: {
                query: e.query || "",
                bgm: e.bgm || "",
                timeRange: [ [ 0, 15e3 ] ],
                button: {
                    template: e.buttonType || "challenge"
                },
                title: {
                    template: e.titleType || "default.level",
                    data: e.score
                }
            }
        }), platform.shareRecorderButton.show(), platform.shareRecorderButton.onTap(function(t) {
            e.successHandler && e.successHandler.runWith(t);
        });
    }, platform.recorderHide = function() {
        platform.shareRecorderButton && platform.shareRecorderButton.hide();
    }, platform.canShareRecorder = function() {
        return platform.recorderTime > 0;
    }, platform.statusBarHeight = function() {
        return platform.systemInfo ? platform.systemInfo.statusBarHeight : 0;
    }, platform.screenWidth = function() {
        return platform.systemInfo ? platform.systemInfo.screenWidth : 1;
    }, platform.screenHeight = function() {
        return platform.systemInfo ? platform.systemInfo.screenHeight : 1;
    }, platform.vibrate = function(t) {
        t && t.isLong ? wx.vibrateLong({
            fail: function fail() {
                zs.log.debug("Vibrate Long failed");
            }
        }) : wx.vibrateShort({
            fail: function fail() {
                zs.log.debug("vibrate Short failed");
            }
        });
    }, platform.isNetValid = function() {
        return !0;
    }, platform.addEventShow = function(t) {
        wx.onShow(function(o) {
            t.showHandler && t.showHandler(o);
        });
    }, platform.addEventHide = function(t) {
        wx.onHide(function(o) {
            var e = null, r = 0, n = "";
            if (9 == o.targetAction) {
                if (zs.exporter.utils.behaviorExport) {
                    var _t4 = zs.exporter.utils.readyExport;
                    _t4 && zs.exporter.dataMgr.collectExport(_t4.target, _t4.icon, _t4.group, _t4.img), 
                    e = zs.exporter.utils.behaviorExport.event_id, zs.exporter.utils.behaviorExport = null, 
                    zs.exporter.utils.readyExport = null, r = "1";
                } else platform.bannerCount++, e = zs.utils.getEventCode("banner-" + platform.bannerCount), 
                r = "2";
            } else platform.hideCount++, e = zs.utils.getEventCode("hide-" + platform.hideCount), 
            r = "4";
            null != e && (n = o.targetPagePath, zs.network.behavior(e, r, n)), t.hideHandler && t.hideHandler(o), 
            console.log("调用了app隐藏事件~~~~~~~", JSON.stringify(o)), 0 != o.targetAction && 8 != o.targetAction && 9 != o.targetAction && 10 != o.targetAction || zs.exporter.utils.behaviorExport || (platform.videoInfo ? (!platform.videoInfo.clicked && zs.network.video(platform.videoInfo.id, platform.videoInfo.key, 2), 
            platform.videoInfo.clicked = !0) : console.log("派发刷新banner事件"));
        });
    }, platform.showCustomAd = function(t) {
        if (null == t.id) return void zs.log.warn("方法（ showCustomAd ）缺少必要参数（ id ）", "Platform");
        if (platform.customAdList[t.id] && platform.customAdList[t.id].ad && platform.customAdList[t.id].adLoaded) {
            if (!t.createNew) return platform.customAdList[t.id].ad.isShow() ? (platform.customAdList[t.id].isHide = !1, 
            void console.log("🐢原生正在展示中")) : (platform.customAdList[t.id].isHide = !1, void (!t.unAutoShow && platform.customAdList[t.id].ad.show().then(function() {
                console.log("🐢原生调用了展示", platform.customAdList[t.id].isHide), platform.customAdList[t.id].isHide && platform.customAdList[t.id].ad.hide(), 
                t.showFunc && t.showFunc();
            }).catch(function(t) {
                console.log("🐢原生展示失败", t), platform.showToast("暂时没有广告!", 2e3);
            })));
            platform.customAdList[t.id].ad.destroy(), platform.customAdList[t.id] = null;
        }
        if (!wx || !wx.createCustomAd || !t.id) return void (t.loadFunc && t.loadFunc(!1));
        var o = zs.product.get(t.id);
        if (!o || "" == o) return void (t.loadFunc && t.loadFunc(!1));
        null == t.width && (t.width = 72), null == t.height && (t.height = 72);
        var e = wx.getSystemInfoSync();
        var r = 0;
        null != t.left ? r = t.left * e.windowWidth / Laya.stage.width : null != t.right ? r = (Laya.stage.width - t.right) * e.windowWidth / Laya.stage.width - t.width : null != t.centerX && (r = (Laya.stage.width / 2 + t.centerX) * e.windowWidth / Laya.stage.width - t.width / 2);
        var n = 0;
        null != t.top ? n = t.top * e.windowHeight / Laya.stage.height : null != t.bottom ? n = (Laya.stage.height - t.bottom) * e.windowHeight / Laya.stage.height - t.height : null != t.centerY && (n = (Laya.stage.height / 2 + t.centerY) * e.windowHeight / Laya.stage.height - t.height / 2);
        var l = 300;
        t && t.interval && (l = t.interval);
        var a = wx.createCustomAd({
            adUnitId: o,
            adIntervals: l,
            style: {
                left: r,
                top: n,
                width: t.width,
                fixed: !0
            }
        });
        a ? (platform.customAdList[t.id] = {}, platform.customAdList[t.id].ad = a, a.onLoad(function() {
            platform.customAdList[t.id].adLoaded = !0, t.loadFunc && t.loadFunc(!0), t.loadFunc = null;
        }), a.onHide(function() {
            t.closeFunc && t.closeFunc();
        }), a.onError(function() {
            platform.customAdList[t.id] && platform.customAdList[t.id].ad && platform.customAdList[t.id].ad.destroy(), 
            platform.customAdList[t.id] = null, t.loadFunc && t.loadFunc(!1), t.loadFunc = null;
        }), platform.customAdList[t.id].isHide = !1, !t.unAutoShow && a.show().then(function() {
            console.log("🐢原生调用了展示", platform.customAdList[t.id].isHide), platform.customAdList[t.id].isHide && a.hide(), 
            t.showFunc && t.showFunc();
        }).catch(function(t) {
            console.log("🐢原生展示失败", t), platform.showToast("暂时没有广告!", 2e3);
        })) : console.log("🐢???哦豁,咋没得对象了");
    }, platform.hideCustomAd = function(t) {
        if (t) platform.customAdList[t] && (platform.customAdList[t].ad && platform.customAdList[t].ad.hide(), 
        platform.customAdList[t].ad && platform.customAdList[t].ad.offHide(), platform.customAdList[t].isHide = !0); else for (var _t5 in platform.customAdList) {
            platform.customAdList[_t5] && (platform.customAdList[_t5].ad && platform.customAdList[_t5].ad.hide(), 
            platform.customAdList[_t5].ad && platform.customAdList[_t5].ad.offHide(), platform.customAdList[_t5].isHide = !0);
        }
        console.log("🐢原生调用了隐藏");
    }, platform.bannerCustomIds = [], platform.bannerCustom = null, platform.initBannerCustom = function() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
            t[_key] = arguments[_key];
        }
        for (;t.length > 0; ) {
            var o = t.shift();
            null != o && "" != o && this.bannerCustomIds.push(o);
        }
        this.creatBannerCustom();
    }, platform.creatBannerCustom = function() {
        if (!this.bannerCustomIds.length || this.bannerCustomIds.length <= 0) console.log("banner原生广告id呢"); else {
            var t = this.bannerCustomIds[Math.floor(Math.random() * this.bannerCustomIds.length)], o = wx.getSystemInfoSync(), e = (o.windowWidth - 360) / 2, r = o.windowHeight - 106;
            this.bannerCustom = wx.createCustomAd({
                adUnitId: t,
                adIntervals: 30,
                style: {
                    left: e,
                    top: r,
                    fixed: !1,
                    width: 330
                }
            }), this.bannerCustom.onLoad(function() {
                console.log("banner原生加载成功");
            }), this.bannerCustom.onError(function() {
                console.log("banner原生加载失败");
            });
        }
    }, platform.showBannerCustom = function() {
        this.bannerCustom ? this.bannerCustom && !this.bannerCustom.isShow() && this.bannerCustom.show() : this.creatBannerCustom();
    }, platform.hideBannerCustom = function() {
        this.bannerCustom ? this.bannerCustom && this.bannerCustom.isShow() && this.bannerCustom.hide() : this.creatBannerCustom();
    }, platform.fullBannerCustomIds = [], platform.fullBannerCustom = [], platform.initFullBannerCustom = function() {
        for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            t[_key2] = arguments[_key2];
        }
        for (;t.length > 0; ) {
            var o = t.shift();
            null != o && "" != o && this.fullBannerCustomIds.push(o);
        }
        this.creatFullBannerCustom();
    }, platform.creatFullBannerCustom = function() {
        if (!this.fullBannerCustomIds.length || this.fullBannerCustomIds.length <= 0) console.log("banner原生广告id呢"); else {
            var t = wx.getSystemInfoSync();
            for (var l = 0; l < this.fullBannerCustomIds.length; l++) {
                var o = this.fullBannerCustomIds[l], e = t.windowWidth / 2 - 60 * l, r = t.windowHeight - 106, n = wx.createCustomAd({
                    adUnitId: o,
                    adIntervals: 30,
                    style: {
                        left: e,
                        top: r,
                        fixed: !1,
                        width: 330
                    }
                });
                n.onLoad(function() {
                    console.log("banner原生加载成功");
                }), n.onError(function() {
                    console.log("banner原生加载失败");
                }), this.fullBannerCustom.push(n);
            }
        }
    }, platform.showFullBannerCustom = function() {
        if (0 != this.fullBannerCustom.length) {
            if (this.fullBannerCustom.length > 0) for (var t = 0; t < this.fullBannerCustom.length; t++) {
                var o = this.fullBannerCustom[t];
                o && !o.isShow() && o.show();
            }
        } else this.creatFullBannerCustom();
    }, platform.hideFullBannerCustom = function() {
        if (0 != this.fullBannerCustom.length) {
            if (this.fullBannerCustom.length > 0) for (var t = 0; t < this.fullBannerCustom.length; t++) {
                var o = this.fullBannerCustom[t];
                o && o.isShow() && o.hide();
            }
        } else this.creatFullBannerCustom();
    }, platform.showToast = function(t) {
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
        var e = arguments.length > 2 ? arguments[2] : undefined;
        wx.showToast({
            title: t,
            icon: e || "none",
            duration: o
        });
    }, platform;
}());