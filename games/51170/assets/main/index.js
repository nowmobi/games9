window.__require = function e(t, n, a) {
    function o(s, c) {
        if (!n[s]) {
            if (!t[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1],
                !t[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l)
                        return l(r, !0);
                    if (i)
                        return i(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = r
            }
            var d = n[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, function(e) {
                return o(t[s][1][e] || e)
            }, d, d.exports, e, t, n, a)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof __require && __require, s = 0; s < a.length; s++)
        o(a[s]);
    return o
}({
    AudioManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "301dfG1P2JOeqLZY8g11z5m", "AudioManager");
        var n = t
          , a = e("Dictionary")
          , o = {
            _pathList: new a,
            _playMusic: null,
            _playEffects: new a,
            _isMusicSilence: !1,
            _defaultMusicVolume: 1,
            loadAudio: function(e, t) {
                cc.loader.loadRes(e, function(e, n) {
                    if (e)
                        console.error(e.message || e);
                    else {
                        var a = n._name;
                        this._pathList.set(a, n),
                        t && t()
                    }
                }
                .bind(this))
            },
            playMusic: function(e, t, n) {
                var a = this._pathList.get(e);
                t = t || !1,
                this._defaultMusicVolume = n || 1;
                var o = this._isMusicSilence ? 0 : this._defaultMusicVolume;
                if (null == a)
                    return console.log("music " + e + " is not exit");
                this.stopMusic(),
                this._playMusic = cc.audioEngine.play(a, t, o)
            },
            stopMusic: function() {
                null != this._playMusic && (cc.audioEngine.stop(this._playMusic),
                this._playMusic = null)
            },
            playEffect: function(e, t, n, a) {
                if (!this._isSoundSilence) {
                    var o = this._pathList.get(e);
                    if (t = t || !1,
                    n = n || 1,
                    null == o)
                        return console.log("effect " + e + "is not exit");
                    this._isSoundSilence && (n = 0);
                    var i = cc.audioEngine.play(o, t, n);
                    this._playEffects.set(e, i),
                    cc.audioEngine.setFinishCallback(i, function() {
                        a && a()
                    })
                }
            },
            stopEffect: function(e) {
                var t = this._playEffects.get(e);
                null != t && (cc.audioEngine.stop(t),
                this._playEffects.remove(e))
            },
            stopAllEffects: function() {
                for (var e in this._playEffects.getIterator())
                    this.stopEffect(e)
            },
            stopAll: function() {
                cc.audioEngine.stopAll(),
                this._playMusic = null,
                this._playEffects.clear()
            },
            setMusicSilence: function(e) {
                this._isMusicSilence = e,
                e ? (console.log("setMusicSilence>>>>>>>>>>>"),
                this.setMusicVolume(0)) : this.setMusicVolume(this._defaultMusicVolume)
            },
            setSoundSilence: function(e) {
                this._isSoundSilence = e,
                e && this.stopAllEffects()
            },
            isMusicSilence: function() {
                return this._isMusicSilence
            },
            pauseAll: function() {
                this.setSilence(!0)
            },
            resumeAll: function() {
                this.setSilence(!1)
            },
            setMusicVolume: function(e) {
                null != this._playMusic && cc.audioEngine.setVolume(this._playMusic, e)
            },
            getMusicVolume: function() {
                return null != this._playMusic ? cc.audioEngine.getVolume(this._playMusic) : 0
            }
        };
        n.exports = o,
        cc._RF.pop()
    }
    , {}],
    BaiDuManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b267blO+JZE4aAE85CnkhB6", "BaiDuManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                bannerAd: null
            },
            getHaveVideo: function() {
                return "" != baiduVideoId
            },
            getSysPlatform: function() {
                return 10
            },
            init: function() {},
            showNativeBanner: function() {
                "" != baiduNativeId || this.showSpot()
            },
            hideNativeBanner: function() {},
            hideBanner: function() {
                this.bannerAd && (this.bannerAd.destroy(),
                this.bannerAd = null)
            },
            showBanner: function() {
                var e = this;
                if ("" != baiduBannerId) {
                    var t = (swan.getSystemInfoSync().windowWidth - 300) / 2
                      , n = swan.getSystemInfoSync().windowHeight - 75;
                    this.bannerAd = swan.createBannerAd({
                        adUnitId: baiduBannerId,
                        appSid: baiduId_SDK,
                        style: {
                            left: t,
                            top: n,
                            width: 300
                        }
                    }),
                    this.bannerAd.onLoad(function() {
                        e.bannerAd.show()
                    }),
                    this.bannerAd.onError(function(e) {
                        console.log("baidu log------show banner fail-----  " + JSON.stringify(e))
                    })
                }
            },
            showBannerCustom: function(e) {
                this.showBanner(e)
            },
            showBannerByTop: function() {
                this.showBanner({})
            },
            showBannerByBottom: function() {
                this.showBanner({})
            },
            showRewardedVideoAd: function(e, t) {
                if ("" != baiduVideoId) {
                    var n = swan.createRewardedVideoAd({
                        adUnitId: baiduVideoId,
                        appSid: baiduId_SDK
                    });
                    n.show(),
                    n.onError(function(e) {
                        t(!1),
                        console.log("baidu log------show video fail-----  " + JSON.stringify(e))
                    }),
                    n.onClose(function(e) {
                        console.log("baidu log------video close-----  " + e.isEnded),
                        e.isEnded ? t(!0) : t(!1),
                        n.offClose(null)
                    })
                } else
                    t(!1)
            },
            showSpot: function() {
                baiduSpotADId
            },
            showSpotByPause: function() {
                this.showNativeBanner()
            },
            showSpotByBegin: function() {},
            showSpotByFinish: function() {
                this.showNativeBanner()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    BaseManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b937bE7H7RGmJHDBTjfaupp", "BaseManager");
        var n = t
          , a = cc.Class({
            properties: {
                spotADId: "",
                videoId: ""
            },
            init: function() {},
            hasInstalled: function() {},
            install: function() {},
            getBaseData: function() {
                return {}
            },
            reload: function() {},
            showRedPack: function() {},
            showRedIcon: function() {},
            showRecommendIcon: function() {},
            showGameRecommend: function() {},
            onHide: function() {},
            onShow: function() {},
            getHelpLevel: function() {
                return -1
            },
            showBanner: function() {},
            showBannerCustom: function() {},
            showBannerByBottom: function() {},
            showBannerByTop: function() {},
            hideBanner: function() {},
            showRewardedVideoAd: function(e, t) {
                t(!1)
            },
            getAuthorize: function() {},
            login: function() {},
            addLocalResurr: function() {},
            useResurr: function() {},
            modifyInviteFriend: function() {},
            deleteInviteFriend: function() {},
            getInviteFriendData: function() {},
            showInviteFriend: function() {},
            showInviteFriendFailure: function() {},
            checkResurrNum: function() {
                return 0
            },
            checkResurrNum_2: function() {
                return 0
            },
            share: function() {},
            shareHelp: function() {},
            shareHelpSuccess: function() {},
            helpFriendSuccess: function() {},
            getIsHaveFriendHelpMe: function() {},
            showMoreGameByIcon: function() {},
            showMoreGameByBanner: function() {},
            showAllRankingLayer: function() {},
            showFailRankingLayer: function() {},
            setRankingData: function() {},
            setWorldRankData: function() {},
            showForum: function() {},
            closeForum: function() {},
            showMoreGame: function() {},
            jumpApp: function() {},
            newJumpApp: function() {},
            showSpotByBegin: function() {},
            showSpotByPause: function() {},
            showSpotByFinish: function() {},
            showPraise: function() {},
            getParamByOnline: function() {
                return null
            },
            getSDKVersionCanUse: function() {
                return !0
            },
            addToast: function() {},
            shareDialog: function() {},
            addGetLocakCardDialog: function() {},
            getOnlineSpriteFrame: function(e, t) {
                if ("" != e) {
                    var n = {
                        url: e,
                        type: "image"
                    };
                    cc.loader.load(n, function(e, n) {
                        e || t(new cc.SpriteFrame(n))
                    })
                }
            },
            showGuessYouLickOne: function() {},
            showGuessYouLickTow: function() {},
            showGuessYouLike_3: function() {},
            jumpRefreshBanner: function() {},
            returnHomeJumpGame: function() {},
            isOpen: function() {
                return !1
            },
            showNativeBanner: function() {},
            hideNativeBanner: function() {},
            callAndroid: function() {},
            callAndroid_2: function() {},
            callPay: function() {},
            backHome: function() {},
            showRate: function() {},
            gotoSmallGame: function() {},
            gameAction: function() {},
            jniLevel: function() {},
            getShareOrViedo: function() {
                return 0
            },
            getJumpBtnHaveMove: function() {
                return 0
            },
            addLuPingBtn: function() {},
            beginLuPing: function() {},
            pauseLuPing: function() {},
            resumeLuPing: function() {},
            stopLuPing: function() {},
            shareVd: function() {},
            addSmallGameReturnBtn: function() {},
            showRecommendBegin: function(e) {
                e.callBack && e.callBack()
            },
            showRecommendFinish: function(e) {
                e.callBack && e.callBack()
            },
            showArardGoldGrid: function(e) {
                e.callBack && e.callBack()
            },
            showArardGoldStrip: function(e) {
                e.callBack && e.callBack()
            },
            addInstallShortcut: function() {},
            showRecommendAwardIcon: function() {},
            setDataForHttp: function(e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    if (4 == n.readyState && n.status >= 200 && n.status < 400) {
                        var e = n.responseText;
                        "-1" == e || "-2" == e || t && t(e)
                    }
                }
                ,
                n.open("GET", e, !0),
                n.send()
            }
        });
        n.exports = a,
        cc._RF.pop()
    }
    , {}],
    BossKey_SDK: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f9639wPf0xGPbeT3J8qR5J/", "BossKey_SDK"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bossNode: cc.Node
            },
            onLoad: function() {
                cc.winSize,
                this.bossNode.x = -.5 * cc.winSize.width,
                this.bossNode.y = .5 * cc.winSize.height
            },
            start: function() {
                this.touchNum = 0,
                this.time = parseInt(getTime() / 1e3),
                this.bossNode.on(cc.Node.EventType.TOUCH_START, function() {
                    this.bossNode._touchListener && this.bossNode._touchListener.setSwallowTouches(!1),
                    this.touchNum++;
                    var e = parseInt(getTime() / 1e3);
                    e - this.time < 10 ? this.touchNum >= 7 && (wkCommonScript.addToast({
                        str: "\u7248\u672c\uff1a" + _SDKVersion
                    }),
                    this.touchNum = 0,
                    this.time = e) : (this.touchNum = 0,
                    this.time = e)
                }
                .bind(this))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Chinese: [function(e, t) {
        "use strict";
        cc._RF.push(t, "eebe9wx0rFICaWoifZX1zlD", "Chinese"),
        t.exports = {},
        cc._RF.pop()
    }
    , {}],
    DialogLoad: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30ed7n36rpFRLEB5vzW6kXb", "DialogLoad"),
        cc.Class({
            extends: cc.Component,
            properties: {
                mLabel: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                lieyou.Language_ch ? this.mLabel.getComponent(cc.Label).string = "\u52a0\u8f7d\u4e2d. . ." : this.mLabel.getComponent(cc.Label).string = "Loading. . ."
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    Dictionary: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30030XeP25L841ealGybQkG", "Dictionary");
        var n = t
          , a = cc.Class({
            name: "Dictionary",
            ctor: function() {
                this._data = {}
            },
            set: function(e, t) {
                this._data[e] = t
            },
            get: function(e) {
                return this._data[e]
            },
            remove: function(e) {
                this._data[e] = null
            },
            isEmpty: function() {
                return 0 === this.size()
            },
            size: function() {
                return Object.getOwnPropertyNames(this._data).length
            },
            clear: function() {
                this._data = {}
            },
            getIterator: function() {
                return this._data
            }
        });
        n.exports = a,
        cc._RF.pop()
    }
    , {}],
    English: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fa58fKXpotLFbR6XLOlzveZ", "English"),
        t.exports = {},
        cc._RF.pop()
    }
    , {}],
    FaceBookManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "20afduwcf1MXbHA1ejJDcxQ", "FaceBookManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                videoID: null
            },
            init: function() {
                this.loadVideo()
            },
            getHaveVideo: function() {
                return "" != FBVideoId
            },
            getSysPlatform: function() {
                return 2
            },
            shareHelp: function() {},
            share: function(e) {
                FBInstant.shareAsync({
                    intent: "SHARE",
                    image: this.getImgBase64(),
                    text: FBInstant.player.getName() + "is asking for your help!",
                    data: {
                        myReplayData: "..."
                    }
                }).then(function() {
                    e && e.success && e.success(1)
                })
            },
            getImgBase64: function() {
                var e = cc.find("Canvas")
                  , t = new cc.RenderTexture(960,1280);
                t.begin(),
                e._sgNode.visit(),
                t.end();
                var n = document.createElement("canvas")
                  , a = n.getContext("2d");
                if (n.width = 960,
                n.height = 1280,
                cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                    var o = t.getSprite().getTexture().getHtmlElementObj();
                    a.drawImage(o, 0, 0)
                } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                    var i = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, i);
                    var s = t.getSprite().getTexture()._glID;
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, s, 0);
                    var c = new Uint8Array(4915200);
                    gl.readPixels(0, 0, 960, 1280, gl.RGBA, gl.UNSIGNED_BYTE, c),
                    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    for (var r = 0; r < 1280; r++) {
                        var l = 1279 - r
                          , d = new Uint8ClampedArray(c.buffer,3840 * l,3840)
                          , h = new ImageData(d,960,1);
                        a.putImageData(h, 0, r)
                    }
                }
                return n.toDataURL("image/png")
            },
            loadVideo: function() {
                var e = this;
                FBInstant.getRewardedVideoAsync(FBVideoId).then(function(t) {
                    return e.videoID = t,
                    e.videoID.loadAsync()
                })
            },
            showRewardedVideoAd: function(e, t) {
                var n = this;
                this.videoID ? (e = this.videoID,
                this.videoID = null,
                e.showAsync().then(function() {
                    t(!0),
                    n.loadVideo()
                })) : n.loadVideo()
            },
            showSpotByBegin: function() {
                this.showMySpot()
            },
            showSpotByPause: function() {
                this.showMySpot()
            },
            showSpotByFinish: function() {
                this.showMySpot()
            },
            showMySpot: function() {
                var e = this;
                if (this.videoID) {
                    var t = this.videoID;
                    this.videoID = null,
                    t.showAsync().then(function() {
                        e.loadVideo()
                    })
                } else
                    e.loadVideo()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    GuessYouLike_3: [function(e, t) {
        "use strict";
        cc._RF.push(t, "33245re45xPvbJC9giJXnjO", "GuessYouLike_3"),
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Prefab
            },
            start: function() {
                for (var e = [], t = 0, n = 0; n < wxData.moreGameData.length; n++)
                    wxData.moreGameData[n].icon && (e[t] = wxData.moreGameData[n],
                    t++);
                if (e.length <= 0)
                    this.node.destroy();
                else {
                    var a = (e = this.shuffle(e)).length
                      , o = [cc.v2(-160, 0), cc.v2(0, 0), cc.v2(160, 0)];
                    for (n = 0; n < a && n < 3; n++) {
                        var i = cc.instantiate(this.icon);
                        this.node.addChild(i),
                        i.setPosition(o[n % 4]),
                        i.getChildByName("icon").getComponent("moreGame").setData(e[n].icon, e[n].image, e[n].jumpType, e[n].jumpData, 3, n + 1)
                    }
                }
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GuessYouLike_once: [function(e, t) {
        "use strict";
        cc._RF.push(t, "283ee6bp1JMIJDLYXmUDvrt", "GuessYouLike_once"),
        cc.Class({
            extends: cc.Component,
            properties: {
                contentChild: cc.Prefab,
                icon: cc.Prefab,
                pageView: cc.Node
            },
            start: function() {
                for (var e = [], t = 0, n = 0; n < wxData.moreGameData.length; n++)
                    wxData.moreGameData[n].iconX && (e[t] = wxData.moreGameData[n],
                    t++);
                if (e.length <= 0)
                    this.node.destroy();
                else {
                    var a = (e = this.shuffle(e)).length
                      , o = [cc.v2(-165, 0), cc.v2(-55, 0), cc.v2(55, 0), cc.v2(165, 0)];
                    for (n = 0; n < a && n < 4; n++) {
                        var i = cc.instantiate(this.icon);
                        this.pageView.addChild(i),
                        i.setPosition(o[n % 4]),
                        i.getChildByName("icon").getComponent("moreGame").setData(e[n].iconX, e[n].image, e[n].jumpType, e[n].jumpData, 5, n + 1)
                    }
                }
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    GuessYouLike_tow: [function(e, t) {
        "use strict";
        cc._RF.push(t, "70684pPgu5Ke5GzJ0DJIVkv", "GuessYouLike_tow"),
        cc.Class({
            extends: cc.Component,
            properties: {
                contentChild: cc.Prefab,
                icon: cc.Prefab,
                pageView: cc.Node
            },
            start: function() {
                for (var e = [], t = 0, n = 0; n < wxData.moreGameData.length; n++)
                    wxData.moreGameData[n].iconX && (e[t] = wxData.moreGameData[n],
                    t++);
                if (e.length <= 0)
                    this.node.destroy();
                else {
                    var a = (e = this.shuffle(e)).length
                      , o = [cc.v2(-165, 60), cc.v2(-55, 60), cc.v2(55, 60), cc.v2(165, 60), cc.v2(-165, -50), cc.v2(-55, -50), cc.v2(55, -50), cc.v2(165, -50)];
                    for (n = 0; n < a && n < 8; n++) {
                        var i = cc.instantiate(this.icon);
                        this.pageView.addChild(i),
                        i.setPosition(o[n % 8]),
                        i.getChildByName("icon").getComponent("moreGame").setData(e[n].iconX, e[n].image, e[n].jumpType, e[n].jumpData, 4, n + 1)
                    }
                }
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    HuaweiManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "66504ngimpFQaRQ1VfWdKU7", "HuaweiManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            init: function(e) {
                this.loginSuccess = -1;
                var t = this;
                hbs.gameLogin({
                    forceLogin: 1,
                    appid: huaWeiId_Sdk,
                    success: function() {
                        t.loginSuccess = 0,
                        t.showFloatingWin(),
                        console.log("Huawei>>>>>>>\u767b\u5f55\u6210\u529f")
                    },
                    fail: function(e, n) {
                        t.loginSuccess = -1,
                        console.log("Huawei>>>>>>>\u767b\u5f55\u5931\u8d25"),
                        console.log("on gameLogin fail: " + e + "," + n)
                    },
                    complete: function() {
                        console.log("Huawei>>>>>>>\u767b\u5f55\u5b8c\u6210"),
                        e.loadCall && e.loadCall()
                    }
                });
                var n = function() {
                    console.log("Huawei>>>>>>>onShow\u56de\u8c03>>>>>loginSuccess=:", this.loginSuccess),
                    0 === this.loginSuccess && this.showFloatingWin()
                }
                .bind(this)
                  , a = function() {
                    console.log("Huawei>>>>>>>onHide\u56de\u8c03>>>>>loginSuccess=:", this.loginSuccess),
                    this.hideFloatingWin()
                }
                .bind(this);
                hbs.onShow(n),
                hbs.onHide(a)
            },
            showFloatingWin: function() {
                hbs.showFloatWindow({
                    appid: huaWeiId_Sdk,
                    success: function() {
                        console.log("Huawei>>>>>>>\u663e\u793a\u6d6e\u6807\u7a97\u53e3\u6210\u529f")
                    },
                    fail: function(e, t) {
                        console.log("Huawei>>>>>>>\u663e\u793a\u6d6e\u6807\u7a97\u53e3\u5931\u8d25"),
                        console.log("show float window fail:" + e + ", code:" + t)
                    }
                })
            },
            hideFloatingWin: function() {
                hbs.hideFloatWindow({
                    appid: huaWeiId_Sdk,
                    success: function() {
                        console.log("Huawei>>>>>>>\u9690\u85cf\u6d6e\u6807\u7a97\u53e3\u6210\u529f")
                    },
                    fail: function(e, t) {
                        console.log("Huawei>>>>>>>\u9690\u85cf\u6d6e\u6807\u7a97\u53e3\u5931\u8d25"),
                        console.log("hide float window fail:" + e + ", code:" + t)
                    }
                })
            },
            getHaveVideo: function() {
                return !1
            },
            getSysPlatform: function() {
                return 6
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    JinRiTouTiaoManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "fb089SNV7BE6JYSfaaiY83d", "JinRiTouTiaoManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {},
            getHaveVideo: function() {
                return "" != jinRiTouTiao_VideoId
            },
            getSysPlatform: function() {
                return 8
            },
            antidirt: function() {
                var e = this;
                this.setDataForHttp(serverUrl + "token?ai=" + jinRiTouTiao_AppId + "&sct=" + jinRiTouTiao_AppKey + "&gt=client_credential", function(t) {
                    var n = JSON.parse(t);
                    console.log("------  jinritoutiao  ------ access_token = " + n),
                    e.setDataForHttp(serverUrl + "antidirt?at=" + n.access_token)
                })
            },
            init: function() {
                this.stopCanShare = !0,
                this.setShareData()
            },
            setShareData: function() {},
            login: function() {
                this.antidirt()
            },
            openShare: function() {},
            share: function() {},
            hideBanner: function() {
                this.bannerAd && (this.bannerAd.destroy(),
                this.bannerAd = null)
            },
            showBanner: function() {},
            showBannerCustom: function(e) {
                this.showBanner(e)
            },
            showBannerByTop: function() {
                this.showBanner({})
            },
            showBannerByBottom: function() {
                this.showBanner({})
            },
            showRewardedVideoAd: function(e, t) {
                t(!0)
            },
            showSpot: function() {},
            showSpotByPause: function() {
                this.showSpot()
            },
            showSpotByBegin: function() {},
            showSpotByFinish: function() {
                this.showSpot()
            },
            beginLuPing: function(e, t) {
                var n = this;
                this.stopCanShare = !0,
                this.shareCallBack = t;
                var a = this;
                this.recorderVD ? this.recorderVD.start({
                    duration: e
                }) : (this.recorderVD = tt.getGameRecorderManager(),
                this.recorderVD.start({
                    duration: e
                }),
                this.recorderVD.onError(function(e) {
                    console.log("------  jinritoutiao  ------ luping fail  " + e.errMsg)
                }),
                this.recorderVD.onInterruptionBegin(function() {
                    console.log("------  jinritoutiao  ------ begin luping   ")
                }),
                this.recorderVD.onInterruptionEnd(function() {
                    console.log("------  jinritoutiao  ------ end luping   ")
                }),
                this.recorderVD.onStop(function(e) {
                    n.luPingNode && n.luPingNode.isValid && n.luPingNode.getComponent("tt_luPing").stop();
                    try {
                        console.log("------  jinritoutiao  ------ mp4 path   " + e.videoPath + "   " + n.stopCanShare),
                        a.vdPath = e.videoPath,
                        n.stopCanShare && a.shareVd(a.shareCallBack, !1)
                    } catch (e) {}
                }))
            },
            shareVd: function(e) {
                e && e(0)
            },
            pauseLuPing: function() {},
            resumeLuPing: function() {},
            stopLuPing: function() {},
            addLuPingBtn: function(e) {
                var t = this
                  , n = e.node ? e.node : cc.find("Canvas");
                cc.loader.loadRes("SDK/module/tt_luPing/lipingBtn", function(a, o) {
                    if (n && n.isValid) {
                        var i = cc.instantiate(o);
                        t.luPingNode = i,
                        i.x = e.x ? e.x : 0,
                        i.y = e.y ? e.y : 0,
                        e.callBack && i.getComponent("tt_luPing").setData(e.callBack),
                        n.addChild(i)
                    }
                })
            },
            setDataForHttp: function(e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    if (4 == n.readyState && n.status >= 200 && n.status < 400) {
                        var e = n.responseText;
                        "-1" == e || "-2" == e || t && t(e)
                    }
                }
                ,
                n.open("GET", e, !0),
                n.send()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    LoadManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30bdcWmpAFFtIlTvOBfZwga", "LoadManager"),
        window.LoadManager = {
            _SceneFileNameStr: "LoadScene",
            _GamePrefabStr: "FruitLLK/prefab/",
            _loadPrefabStr: "ZhjCommonComponent/load/DialogLoad",
            mDialogLoad: void 0,
            loadDistribution: function(e) {
                var t = e.name
                  , n = e.type
                  , a = e.parentNode
                  , o = void 0;
                e.callfun && (o = e.callfun),
                "scene" == n ? this.addLoadSceneRes(a, t) : this.addLoadNodeAction(a, t, o)
            },
            addLoadSceneRes: function(e, t) {
                cc.loader.loadRes(this._loadPrefabStr, function(n, a) {
                    var o = cc.instantiate(a);
                    o.name = "dialog",
                    e.addChild(o, 20),
                    cc.director.preloadScene(t, function() {
                        cc.director.loadScene(t)
                    }
                    .bind(this))
                }
                .bind(this))
            },
            addLoadNodeAction: function(e, t, n) {
                cc.loader.loadRes(this._loadPrefabStr, function(a, o) {
                    var i = cc.instantiate(o);
                    i.name = "dialog",
                    e.addChild(i, 20),
                    cc.loader.loadRes(this._GamePrefabStr + t, function(t, a) {
                        var o = cc.instantiate(a);
                        o.name = "dialog",
                        e.addChild(o, 10),
                        i.removeFromParent(),
                        n && n(o)
                    }
                    .bind(this))
                }
                .bind(this))
            }
        },
        cc._RF.pop()
    }
    , {}],
    MyToast: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30fe9YCiTZPr49CXfnhCntj", "MyToast"),
        window.MyToast = {
            showToast: function(e, t, n, a) {
                cc.loader.loadRes("ZhjCommonComponent/toast/toastBg", function(o, i) {
                    var s = cc.director.getWinSize()
                      , c = cc.instantiate(i);
                    c.position = t;
                    var r = c.getChildByName("toastLabel");
                    r.getComponent(cc.Label).string = "" + n,
                    c.width = 40 * (n.length + 1),
                    c.height = 1.5 * r.height,
                    e.addChild(c, 15),
                    c.runAction(cc.sequence(cc.moveTo(1.5, cc.v2(t.x, t.y + .2 * s.height)), cc.fadeOut(a / 5), cc.removeSelf()))
                }
                .bind(this))
            }
        },
        cc._RF.pop()
    }
    , {}],
    NativeManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "70231PLVVxMd5Pc9mxttaKu", "NativeManager");
        var n = e
          , a = t;
        window.ACTION_SHARE = 1100,
        window.ACTION_SHARE_SUCCESS = 1101,
        window.ACTION_SHARE_FAIL = 1102,
        window.ACTION_RATE = 1201,
        window.ACTION_RATE_SYS = 1202,
        window.ACTION_EXIT = 1301,
        window.ACTION_EXIT_BACK = 1302,
        window.ACTION_AD_PAUSE = 2e3,
        window.ACTION_AD_RESULT = 2001,
        window.ACTION_MORE = 2002,
        window.ACTION_AD_WATCH = 2200,
        window.ACTION_RANKS = 3e3,
        window.ACTION_RANKS_LOGIN = 3001,
        window.ACTION_RANKS_SUBMIT = 3002,
        window.ACTION_RANKS_SUBMIT_ByName = 3003,
        window.ACTION_TO_APP = 2003,
        window.ACTION_TO_APP_RANDOM = 2008,
        window.ACTION_TO_WECHAT = 2004,
        window.ACTION_TO_WECHAT_AUTO = 2005,
        window.ACTION_ATTENTION_WECHAT = 2006,
        window.ACTION_EXCHANGE_CODE = 2007,
        window.KEY_EXCHANGE = "exchange_code",
        window.KEY_OPEN_VIDEO = "isOpenVideo",
        window.KEY_OPEN_FREE_GOLD = "show_free",
        window.KEY_OPEN_MOREGAME = "moreGame_code",
        window.KEY_OPEN_ABOUT = "about_code",
        window.KEY_IS_SHENHE = "isAudit",
        window.KEY_IS_OPENPAY = "isOpenPay",
        window.ACTION_BANNER_SHOW = 2102,
        window.ACTION_BANNER_HIDE = 2103,
        window.ACTION_RATE_COINS = 1997,
        window.ACTION_FEEDBACK = 1110,
        window.STATE_PAUSE = 10,
        window.STATE_RESUME = 20,
        window.cpp_CallByLost = function(e) {
            4001 == e ? addGold(2999) : 4002 == e ? addGold(6999) : 4003 == e ? addGold(14999) : 4004 == e ? addGold(23999) : 4005 == e ? addGold(35999) : 4006 == e ? addGold(49999) : 4007 == e ? addGold(129999) : 4008 == e ? addGold(13999) : 4009 == e ? addGold(51999) : 4010 == e && addGold(2999)
        }
        ,
        window.cpp_Calljs = function(e, t) {
            t ? (SdkManager.instance.payCallBack && SdkManager.instance.payCallBack(),
            SdkManager.instance.playVDCallBack && SdkManager.instance.playVDCallBack(1)) : SdkManager.instance.playVDCallBack && SdkManager.instance.playVDCallBack(0),
            SdkManager.instance.payCallBack = null,
            SdkManager.instance.playVDCallBack = null
        }
        ;
        var o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                payCallBack: null,
                playVDCallBack: null
            },
            getHaveVideo: function() {
                return !!this.isOpen(KEY_OPEN_VIDEO)
            },
            getSysPlatform: function() {
                return 1
            },
            init: function() {},
            showNativeBanner: function(e) {
                console.log("========native  show Native Banner =  top:" + e),
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showNativeView:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showNativeView", "(F)V", e)
            },
            hideNativeBanner: function() {
                console.log("========native  hide Native Banner = "),
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "closeNativeView:", 0) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "closeNativeView", "()V")
            },
            showPauseAd: function(e, t) {
                console.log("========native  show Native showPauseAd = isHaveNative:" + e + " top:" + t),
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showPauseAd:showPos:", e, t) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showPauseAd", "(ZF)V", e, t)
            },
            showResultAd: function(e, t) {
                console.log("========native  show Native showResultAd = isHaveNative:" + e + " top:" + t),
                this.showPraise() ? cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showResultAd:showPos:", !1, t) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showResultAd", "(ZF)V", !1, t) : cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "showResultAd:showPos:", e, t) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "showResultAd", "(ZF)V", e, t)
            },
            showSpotByBegin: function() {
                console.log("========native begin spot = ")
            },
            showSpotByPause: function(e, t) {
                this.showPauseAd(e, t)
            },
            showSpotByFinish: function(e, t) {
                this.showResultAd(e, t)
            },
            callPay: function(e, t) {
                console.log("======== native callPay action = " + e),
                this.payCallBack = t,
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callPay:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callPay", "(I)V", e)
            },
            callAndroid: function(e) {
                console.log("======== native callAndroid action = " + e),
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callAndroid:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callAndroid", "(I)V", e)
            },
            callAndroid_2: function(e, t) {
                console.log("======== native callAndroid_2 action = " + e),
                this.playVDCallBack = t,
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callPay:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callPay", "(I)V", e)
            },
            isOpen: function(e) {
                console.log("======== native isopen key = " + e);
                var t = 0;
                return cc.sys.os == cc.sys.OS_IOS ? t = jsb.reflection.callStaticMethod("MyManager", "getValue2:", e) : cc.sys.os == cc.sys.OS_ANDROID && (t = jsb.reflection.callStaticMethod("com/util/JsUtil", "getValue2", "(Ljava/lang/String;)I", e)),
                1 == parseInt(t)
            },
            isOpenInt: function(e) {
                console.log("======== native isopen key = " + e);
                var t = 0;
                return cc.sys.os == cc.sys.OS_IOS ? t = jsb.reflection.callStaticMethod("MyManager", "getValue2:", e) : cc.sys.os == cc.sys.OS_ANDROID && (t = jsb.reflection.callStaticMethod("com/util/JsUtil", "getValue2", "(Ljava/lang/String;)I", e)),
                parseInt(t)
            },
            backHome: function() {
                wkCommonScript.addLoadingTip(),
                setTimeout(function() {
                    cc.audioEngine.stopAll(),
                    mainScneeFromSmallGame = !0;
                    var e = ["assets/"];
                    console.log("---------------\x3esearchPaths" + JSON.stringify(e)),
                    jsb.fileUtils.setSearchPaths(e),
                    window.require("main.js")
                }, 200)
            },
            share: function() {
                this.callAndroid(ACTION_SHARE)
            },
            showRewardedVideoAd: function(e, t) {
                this.callAndroid_2(ACTION_AD_WATCH, t)
            },
            showBannerCustom: function() {
                this.callAndroid(ACTION_BANNER_SHOW)
            },
            showBannerByBottom: function() {
                this.callAndroid(ACTION_BANNER_SHOW)
            },
            showBannerByTop: function() {
                this.callAndroid(ACTION_BANNER_SHOW)
            },
            hideBanner: function() {
                this.callAndroid(ACTION_BANNER_HIDE)
            },
            showRate: function() {
                this.callAndroid(ACTION_RATE)
            },
            showPraise: function() {
                if (Userdefault.getIntForKey("SDKShowPraiseNum", 0) > 5)
                    return !1;
                if (Userdefault.getBoolForKey("alreadyPraise", !1))
                    return !1;
                if (!this.isOpen("isShowRate"))
                    return !1;
                var e = this.isOpenInt("rate_interval");
                e = e > 0 ? e : 3;
                var t = this.isOpenInt("rate_index");
                t = t > 0 ? t : 3;
                var n = Userdefault.getIntForKey("praise_game", 0);
                if (Userdefault.setDataForKey("praise_game", n + 1),
                n >= t - 1 && (n - t - 1) % e == 0) {
                    var a = Userdefault.getIntForKey("SDKShowPraiseNum", 0);
                    return Userdefault.setDataForKey("SDKShowPraiseNum", a + 1),
                    cc.loader.loadRes("SDK/module/praise/praiseDialog", function(e, t) {
                        var n = cc.find("Canvas")
                          , a = cc.instantiate(t);
                        n.addChild(a, 999999)
                    }),
                    !0
                }
                return !1
            },
            gotoSmallGame: function(e) {
                var t = this;
                wkCommonScript.addLoadingTip(),
                setTimeout(function() {
                    cc.audioEngine.stopAll(),
                    window.mainGameScene = cc.director.getScene().name,
                    cc.sys.localStorage.setItem("ly_LoadingScene", cc.director.getScene().name),
                    console.log("========native gameScene = " + e),
                    t.gameAction(e);
                    var n = ["assets/" + e + "/", "assets/"];
                    console.log("---------------\x3esearchPaths" + JSON.stringify(n)),
                    jsb.fileUtils.setSearchPaths(n),
                    window.require("main.js")
                }, 200)
            },
            gameAction: function(e) {
                console.log("========native gameName = " + e),
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "gameAction:", e) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "gameAction", "(Ljava/lang/String;)V", e)
            },
            jniLevel: function(e, t, n) {
                console.log("========native jniLevel =  mode = " + e + " level = " + t + " action = " + n),
                cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("MyManager", "callLevel:level:action:", e, t, n) : cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("com/util/JsUtil", "callLevel", "(Ljava/lang/String;II)V", e, t, n)
            },
            addSmallGameReturnBtn: function(e) {
                var t = e.node ? e.node : cc.find("Canvas")
                  , n = null != e.x ? e.x : -cc.winSize.width / 2 + 50
                  , a = null != e.y ? e.y : cc.winSize.height / 2 - 50
                  , o = null != e.image ? e.image : null;
                cc.loader.loadRes("SDK/SDK_tool/returnBtn/returnHome", function(e, i) {
                    if (t && t.isValid) {
                        var s = cc.instantiate(i);
                        cc.find("Canvas").addChild(s),
                        s.x = n,
                        s.y = a,
                        o && (s.getComponent(cc.Sprite).spriteFrame = o)
                    }
                })
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    OppoH5Manager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "013daqHchJCKqzTdQbw6R/x", "OppoH5Manager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {},
            getHaveVideo: function() {
                return !0
            },
            getSysPlatform: function() {
                return 5
            },
            init: function() {},
            hideBanner: function() {},
            showBanner: function() {
                wkCommonScript.addToast({
                    str: " show banner"
                }),
                opUnion.createBannerAd({
                    containerId: "GameCanvas",
                    posId: "28810",
                    mediaId: "101000141"
                }).onLoad(function() {
                    wkCommonScript.addToast({
                        str: "\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                    }),
                    console.log("\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                })
            },
            showBannerCustom: function() {
                this.showBanner()
            },
            showBannerByTop: function() {
                this.showBanner()
            },
            showBannerByBottom: function() {
                this.showBanner()
            },
            showRewardedVideoAd: function(e, t) {
                wkCommonScript.addToast({
                    str: " show vd"
                });
                var n = opUnion.createVideoAd({
                    posId: "28812",
                    mediaId: "101000141"
                });
                n.onLoad(function() {
                    wkCommonScript.addToast({
                        str: "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                    }),
                    n.show(),
                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                }),
                n.onError(function(e) {
                    t(!1),
                    console.log(e)
                }),
                n.onClose(function(e) {
                    e && e.isEnded ? t(!0) : t(!1)
                })
            },
            showSpot: function() {
                wkCommonScript.addToast({
                    str: " show spot"
                });
                var e = opUnion.createInterstitialAd({
                    posId: "28811",
                    mediaId: "101000141"
                });
                e.onLoad(function() {
                    wkCommonScript.addToast({
                        str: "\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                    }),
                    e.show(),
                    console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f")
                })
            },
            showSpotByPause: function() {
                this.showSpot()
            },
            showSpotByBegin: function() {},
            showSpotByFinish: function() {
                this.showSpot()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    OppoManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1c1bdZ2DetGmYkM4vyAUlOG", "OppoManager");
        var n = e
          , a = t;
        window.oppo_nativeArea = 1,
        window.oppo_waitT = 300;
        var o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                bannerAd: null
            },
            getHaveVideo: function() {
                return !(oppoVideoId.length <= 0)
            },
            getSysPlatform: function() {
                return 4
            },
            onShow: function(e) {
                qg.onShow(e)
            },
            onHide: function(e) {
                qg.onHide(e)
            },
            setOnlineData: function(e) {
                e.oppo && (e.oppo.showBannerType && (this.showBannerType = e.oppo.showBannerType),
                e.oppo.nativeDelayShowTime && (this.nativeDelayShowTime = Number(e.oppo.nativeDelayShowTime)),
                e.oppo.refreshBannerTime && (this.refreshBannerTime = Number(e.oppo.refreshBannerTime))),
                e.id_config && (e.id_config.appid && (oppoId_SDK = e.id_config.appid),
                e.id_config.bid && (oppoBannerId = e.id_config.bid),
                e.id_config.spoid && (oppoSpotADId = e.id_config.spoid),
                e.id_config.awardid && (oppoVideoId = e.id_config.awardid),
                e.id_config.nativeid && (oppoNativeId = e.id_config.nativeid)),
                e.ad_datas && (e.ad_datas.baseUrl && (quickGame.adBaseUrl = e.ad_datas.baseUrl),
                e.ad_datas.goldM && (quickGame.awardGoldDouble = parseInt(e.ad_datas.goldM)),
                e.ad_datas.playTime && (quickGame.awardGoldTime = parseInt(e.ad_datas.playTime)),
                e.ad_datas.dataAward && (quickGame.awardGoldData = e.ad_datas.dataAward),
                e.ad_datas.dataBanner && (quickGame.RecommendBannerData = e.ad_datas.dataBanner),
                e.ad_datas.dataPlay && (quickGame.RecommendIconData = e.ad_datas.dataPlay)),
                e.crossSwitch && (e.crossSwitch.mainSwitch && (this.CrossPromotion = parseInt(e.crossSwitch.mainSwitch)),
                e.crossSwitch.start && (this.CrossPromotionSplash = parseInt(e.crossSwitch.start)),
                e.crossSwitch.floatIcon && (this.CrossPromotionRecommend = parseInt(e.crossSwitch.floatIcon)),
                e.crossSwitch.playIcon && (this.CrossPromotionIcon = parseInt(e.crossSwitch.playIcon)),
                e.crossSwitch.awardIcon && (this.CrossPromotionAward = parseInt(e.crossSwitch.awardIcon)),
                e.crossSwitch.game && (this.CrossPromotionSpot = parseInt(e.crossSwitch.game)),
                e.crossSwitch.nativeArea && (oppo_nativeArea = Number(e.crossSwitch.nativeArea),
                oppo_nativeArea < 1 && (oppo_nativeArea = 1)),
                e.crossSwitch.waitT && (oppo_waitT = parseInt(e.crossSwitch.waitT)))
            },
            initOnlineData: function() {
                if ("" != oppoGetOnlineDataId) {
                    var e = this
                      , t = Userdefault.getIntForKey("sdk_oppo_online_version", 0)
                      , n = Userdefault.getIntForKey("sdk_oppo_online_time", 0)
                      , a = Userdefault.getIntForKey("sdk_oppo_online_sp", 0)
                      , o = getTime() / 1e3;
                    if (o - n < a) {
                        var i = Userdefault.getStringForKey("sdk_oppo_online_data", "")
                          , s = JSON.parse(i);
                        e.setOnlineData(s)
                    } else {
                        var c = "https://app.igame58.com/lieyou/client/parameterTest?umid=" + oppoGetOnlineDataId + "&client_data_version=" + t + "&channel=oppo";
                        this.setDataForHttp(c, function(n) {
                            if ("" != n)
                                try {
                                    var a = JSON.parse(n);
                                    if (a.server_data_version && Userdefault.setDataForKey("sdk_oppo_online_version", a.server_data_version),
                                    a.sp && Userdefault.setDataForKey("sdk_oppo_online_sp", a.sp),
                                    Userdefault.setDataForKey("sdk_oppo_online_time", o),
                                    a.server_data_version == t) {
                                        n = Userdefault.getStringForKey("sdk_oppo_online_data", "");
                                        var i = JSON.parse(n);
                                        return void e.setOnlineData(i)
                                    }
                                    if (!(i = JSON.parse(n).data))
                                        return;
                                    e.setOnlineData(i),
                                    Userdefault.setDataForKey("sdk_oppo_online_data", JSON.stringify(i))
                                } catch (e) {
                                    console.log("oppolog------error  initOnlineData + " + n)
                                }
                        })
                    }
                }
            },
            init: function() {
                var e = parseInt(getTime() / 1e3);
                Userdefault.getIntForKey("oppo_isNewPlayer", 1) && (Userdefault.setDataForKey("oppo_isNewPlayer", 0),
                Userdefault.setDataForKey("oppo_oncePlayGameTime", e)),
                this.nativeDelayShowTime = 1,
                this.showBannerType = ["B", "BN"],
                this.refreshBannerTime = 15,
                this.jumpOtherGameTime = 0,
                this.jumpOtherGameOnShowGetGold = !1,
                this.CrossPromotion = 0,
                this.CrossPromotionIcon = 0,
                this.CrossPromotionSplash = 0,
                this.CrossPromotionSpot = 0,
                this.CrossPromotionRecommend = 0,
                this.CrossPromotionAward = 0,
                this.minPlatformVersion = 0,
                qg.getSystemInfo({
                    success: function(e) {
                        this.minPlatformVersion = parseInt(e.platformVersion),
                        this.minPlatformVersion
                    }
                    .bind(this)
                }),
                qg.initAdService({
                    appId: oppoId_SDK,
                    success: function(e) {
                        console.log("oppolog------init success-----  " + e)
                    },
                    fail: function(e) {
                        console.log("oppolog------init fail-----  " + e)
                    },
                    complete: function(e) {
                        console.log("oppolog------init complete-----  " + e)
                    }
                }),
                this.onShow(function() {
                    if (this.jumpOtherGameOnShowGetGold && getTime() / 1e3 - this.jumpOtherGameTime > quickGame.awardGoldTime) {
                        var e = 10 * quickGame.awardGoldDouble
                          , t = Userdefault.getIntForKey(lieyou.Key_Gold, 0);
                        Userdefault.setDataForKey(lieyou.Key_Gold, t + e),
                        wkCommonScript.addToast({
                            str: "+" + e
                        })
                    }
                    this.jumpOtherGameOnShowGetGold = !1
                }
                .bind(this)),
                this.initOnlineData(),
                this.showAdBannerIndex = 0,
                this.showAdSpotIndex = 0,
                this.showAdAwardIndex = 0,
                this.showAdNativeIndex = 0,
                this.showBannerTypeIndex = 0,
                this.showAdBannerContinueFailNum = 0,
                this.showAdSpotContinueFailNum = 0,
                this.showAdAwardContinueFailNum = 0,
                this.showAdNativeContinueFailNum = 0
            },
            showNativeBanner: function() {
                var e = this
                  , t = this;
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || (t.showAdSpotContinueFailNum = 0),
                oppoNativeId.length <= 0)
                    t.showSpot();
                else {
                    var n = qg.createNativeAd({
                        posId: oppoNativeId[this.showAdSpotIndex]
                    });
                    this.showAdSpotIndex++,
                    this.showAdSpotIndex = this.showAdSpotIndex % oppoNativeId.length,
                    n.load(),
                    n.onLoad(function(a) {
                        t.showAdSpotContinueFailNum = 0;
                        var o = a.adList[0].adId
                          , i = a.adList[0].title
                          , s = a.adList[0].desc
                          , c = a.adList[0].clickBtnTxt
                          , r = a.adList[0].iconUrlList
                          , l = a.adList[0].imgUrlList
                          , d = a.adList[0].logoUrl;
                        n.reportAdShow({
                            adId: o
                        }),
                        console.log("oppolog------ show native success"),
                        cc.loader.loadRes("SDK/module/oppoNativeAd/nativeAd", function(e, t) {
                            n.offError(),
                            n.offLoad();
                            var a = cc.director.getRunningScene()
                              , h = cc.instantiate(t);
                            h.scale = 0,
                            h.runAction(cc.sequence(cc.delayTime(this.nativeDelayShowTime), cc.callFunc(function() {
                                h.scale = 1
                            }))),
                            a.addChild(h, 999),
                            cc.game.addPersistRootNode(h),
                            h.x = cc.winSize.width / 2,
                            h.y = cc.winSize.height / 2,
                            h.getComponent("oppoNativeAdSdk").setData({
                                touchCallBack: function() {
                                    n.reportAdClick({
                                        adId: o
                                    }),
                                    n.destroy(),
                                    h.runAction(cc.sequence(cc.delayTime(1), cc.removeSelf()))
                                }
                                .bind(this),
                                closeCallBack: function() {
                                    n.destroy()
                                }
                                .bind(this),
                                title: i,
                                desc: s,
                                clickBtnTxt: c,
                                iconUrlList: r,
                                imgUrlList: l,
                                logoUrl: d
                            })
                        }
                        .bind(e))
                    }),
                    n.onError(function(e) {
                        n.offError(),
                        n.offLoad(),
                        n.destroy(),
                        console.log("oppolog------ show native fail" + JSON.stringify(e)),
                        t.showAdSpotContinueFailNum++,
                        t.showAdSpotContinueFailNum < oppoNativeId.length ? t.showNativeBanner(0, !0) : t.showSpot()
                    })
                }
            },
            hideNativeBanner: function() {},
            hideBanner: function() {
                clearInterval(this.bannerTimeOut),
                this.bannerAd && this.bannerAd.hide(),
                this._BannerNativeADNode && this._BannerNativeADNode.isValid && (this._BannerNativeADNode.destroy(),
                this._BannerNativeADNode = null),
                this._BannerNativeAD && (this._BannerNativeAD.destroy(),
                this._BannerNativeAD = null)
            },
            showBanner: function() {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                clearInterval(this.bannerTimeOut);
                var e = this.showBannerType[this.showBannerTypeIndex];
                this.showBannerTypeIndex++,
                this.showBannerTypeIndex = this.showBannerTypeIndex % this.showBannerType.length;
                var t = this.refreshBannerTime;
                "B" == e ? (this.showBanner2(),
                this.bannerTimeOut = setInterval(this.showBanner2.bind(this), 1e3 * t)) : (this.showBannerNativeAD(),
                this.bannerTimeOut = setInterval(this.showBannerNativeAD.bind(this), 1e3 * t))
            },
            showBannerNativeAD: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = this;
                if (t.flag || (n.showAdSpotContinueFailNum = 0),
                oppoNativeId.length <= 0)
                    t.isEnd || n.showBanner2({
                        isEnd: !0
                    });
                else {
                    var a = qg.createNativeAd({
                        posId: oppoNativeId[this.showAdSpotIndex]
                    });
                    this.showAdSpotIndex++,
                    this.showAdSpotIndex = this.showAdSpotIndex % oppoNativeId.length,
                    a.load(),
                    a.onLoad(function(t) {
                        a.offError(),
                        a.offLoad(),
                        n.showAdSpotContinueFailNum = 0;
                        var o = t.adList[0].adId
                          , i = t.adList[0].title
                          , s = t.adList[0].desc
                          , c = t.adList[0].clickBtnTxt
                          , r = t.adList[0].iconUrlList
                          , l = t.adList[0].imgUrlList;
                        l = [];
                        var d = t.adList[0].logoUrl;
                        a.reportAdShow({
                            adId: o
                        }),
                        console.log("oppolog------ show native success"),
                        cc.loader.loadRes("SDK/module/oppoNativeAd/bannerNativeAd", function(e, t) {
                            n._BannerNativeADNode && n._BannerNativeADNode.isValid && (n._BannerNativeADNode.destroy(),
                            n._BannerNativeADNode = null),
                            n._BannerNativeAD && (n._BannerNativeAD.destroy(),
                            n._BannerNativeAD = null),
                            n._BannerNativeAD = a,
                            n.bannerAd && n.bannerAd.hide();
                            var h = cc.director.getRunningScene()
                              , u = cc.instantiate(t);
                            n._BannerNativeADNode = u,
                            u.x = cc.winSize.width / 2,
                            h.addChild(u, 999),
                            cc.game.addPersistRootNode(u),
                            u.getComponent("oppoNativeAdSdk").setData({
                                touchCallBack: function() {
                                    a.reportAdClick({
                                        adId: o
                                    })
                                }
                                .bind(this),
                                closeCallBack: function() {
                                    a.destroy()
                                }
                                .bind(this),
                                title: i,
                                desc: s,
                                clickBtnTxt: c,
                                iconUrlList: r,
                                imgUrlList: l,
                                logoUrl: d
                            })
                        }
                        .bind(e))
                    }),
                    a.onError(function(e) {
                        a.offError(),
                        a.offLoad(),
                        a.destroy(),
                        console.log("oppolog------ show native fail" + JSON.stringify(e)),
                        n.showAdSpotContinueFailNum++,
                        n.showAdSpotContinueFailNum < oppoNativeId.length ? n.showBannerNativeAD({
                            flag: !0,
                            isEnd: t.isEnd
                        }) : t.isEnd || n.showBanner2({
                            isEnd: !0
                        })
                    })
                }
            },
            showBanner2: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = this;
                e.flag || (t.showAdBannerContinueFailNum = 0),
                oppoBannerId.length <= 0 ? e.isEnd || t.showBannerNativeAD({
                    isEnd: !0
                }) : (this.bannerAd || (this.bannerAd = qg.createBannerAd({
                    posId: oppoBannerId[this.showAdBannerIndex]
                }),
                this.bannerAd.onShow(function() {
                    t._BannerNativeADNode && t._BannerNativeADNode.isValid && (t._BannerNativeADNode.destroy(),
                    t._BannerNativeADNode = null),
                    t._BannerNativeAD && (t._BannerNativeAD.destroy(),
                    t._BannerNativeAD = null)
                }),
                this.bannerAd.onError(function(n) {
                    t.bannerAd = null,
                    t.showAdBannerContinueFailNum++,
                    t.showAdBannerContinueFailNum < oppoBannerId.length ? t.showBanner2({
                        flag: !0,
                        isEnd: e.isEnd
                    }) : e.isEnd || t.showBannerNativeAD({
                        isEnd: !0
                    }),
                    console.log("oppolog------show banner fail-----  " + JSON.stringify(n))
                })),
                this.showAdBannerIndex++,
                this.showAdBannerIndex = this.showAdBannerIndex % oppoBannerId.length,
                this.bannerAd.show())
            },
            showBannerCustom: function(e) {
                this.showBanner(e)
            },
            showBannerByTop: function() {
                this.showBanner({})
            },
            showBannerByBottom: function() {
                this.showBanner({})
            },
            showRewardedVideoAd: function(e, t) {
                if (oppoVideoId.length <= 0)
                    t(!1);
                else {
                    var n = this
                      , a = qg.createRewardedVideoAd({
                        posId: oppoVideoId[this.showAdAwardIndex]
                    });
                    this.showAdAwardIndex++,
                    this.showAdAwardIndex = this.showAdAwardIndex % oppoVideoId.length,
                    a.load(),
                    a.onLoad(function() {
                        n.showAdAwardContinueFailNum = 0,
                        console.log("oppolog------ vd success"),
                        a.show()
                    }),
                    a.onError(function(e) {
                        a.offClose(),
                        a.offLoad(),
                        a.offError(),
                        console.log("oppolog------ vd fail" + JSON.stringify(e)),
                        n.showAdAwardContinueFailNum++,
                        n.showAdAwardContinueFailNum < oppoVideoId.length ? n.showRewardedVideoAd("", t) : t(!1)
                    }),
                    a.onClose(function(e) {
                        a.offClose(),
                        a.offLoad(),
                        a.offError(),
                        console.log("oppolog------ vd playSuccess"),
                        e.isEnded ? t(!0) : t(!1)
                    })
                }
            },
            showSpot: function() {
                var e = this;
                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (e.showAdSpotContinueFailNum = 0),
                !(oppoSpotADId.length <= 0)) {
                    var t = qg.createInsertAd({
                        posId: oppoSpotADId[this.showAdSpotIndex]
                    });
                    this.showAdSpotIndex++,
                    this.showAdSpotIndex = this.showAdSpotIndex % oppoSpotADId.length,
                    t.load(),
                    t.onLoad(function() {
                        e.showAdSpotContinueFailNum = 0,
                        console.log("oppolog------ spot load success"),
                        t.show(),
                        t.onShow(function() {
                            console.log("oppolog------ spot show success")
                        })
                    }),
                    t.onError(function(n) {
                        t.offLoad(),
                        t.offError(),
                        t.destroy(),
                        console.log("oppolog------ spot load fail" + JSON.stringify(n)),
                        e.showAdSpotContinueFailNum++,
                        e.showAdSpotContinueFailNum < oppoSpotADId.length && e.showSpot(!0)
                    })
                }
            },
            showSpotByPause: function() {
                this.showNativeBanner()
            },
            showSpotByBegin: function() {},
            showSpotByFinish: function() {
                this.showNativeBanner()
            },
            newJumpApp: function(e) {
                console.log("oppolog------ jump apk = " + e.data.appId),
                this.minPlatformVersion >= 1044 ? qg.navigateToMiniGame({
                    pkgName: e.data.appId,
                    success: function() {
                        e.getGold && (this.jumpOtherGameTime = getTime() / 1e3,
                        this.jumpOtherGameOnShowGetGold = !0)
                    }
                    .bind(this),
                    fail: function(e) {
                        console.log("oppolog------ jump apk fail" + JSON.stringify(e))
                    }
                }) : wkCommonScript.addToast({
                    str: "\u7248\u672c\u4e0d\u652f\u6301"
                })
            },
            showMoreGameByIcon: function(e) {
                if (this.CrossPromotion && this.CrossPromotionIcon && !(this.minPlatformVersion < 1044) && !(quickGame.RecommendIconData.length <= 0)) {
                    var t = e.node ? e.node : cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_Icon_one", function(n, a) {
                        if (t && t.isValid) {
                            var o = cc.instantiate(a);
                            o.scale = 1 / t.scale,
                            o.x = e.x ? e.x : 0,
                            o.y = e.y ? e.y : 0,
                            t.addChild(o)
                        }
                    })
                }
            },
            showRecommendIcon: function(e) {
                if (this.CrossPromotion && this.CrossPromotionRecommend && !(this.minPlatformVersion < 1044) && !(quickGame.RecommendIconData.length <= 0)) {
                    var t = e.node ? e.node : cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_show", function(n, a) {
                        if (t && t.isValid) {
                            var o = cc.instantiate(a);
                            o.scale = 1 / t.scale,
                            o.x = e.x ? e.x : 0,
                            o.y = e.y ? e.y : 0,
                            t.addChild(o)
                        }
                    })
                }
            },
            showRecommendBegin: function(e) {
                !this.CrossPromotion || !this.CrossPromotionSplash || this.minPlatformVersion < 1044 ? e.callBack && e.callBack() : quickGame.RecommendBannerData.length <= 0 ? e.callBack && e.callBack() : this.showRecommend(0, e)
            },
            showRecommendFinish: function(e) {
                !this.CrossPromotion || !this.CrossPromotionSpot || this.minPlatformVersion < 1044 ? e.callBack && e.callBack() : quickGame.RecommendBannerData.length <= 0 ? e.callBack && e.callBack() : this.showRecommend(1, e)
            },
            showRecommend: function(e, t) {
                var n = this
                  , a = cc.find("Canvas");
                cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_Spot", function(o, i) {
                    if (a && a.isValid) {
                        n.hideBanner();
                        var s = cc.instantiate(i);
                        s.scale = 1 / a.scale,
                        a.addChild(s),
                        s.getComponent("RecommendGame_Spot").setData(e, t)
                    }
                })
            },
            showArardGoldGrid: function(e) {
                if (this.CrossPromotion && this.CrossPromotionAward && !(this.minPlatformVersion < 1044) && !(quickGame.awardGoldData.length <= 0)) {
                    var t = this
                      , n = cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_award_grid", function(a, o) {
                        if (n && n.isValid) {
                            t.hideBanner();
                            var i = cc.instantiate(o);
                            i.scale = 1 / n.scale,
                            n.addChild(i),
                            i.getComponent("Recommend_award_grid").setData(e)
                        }
                    })
                }
            },
            showArardGoldStrip: function(e) {
                if (this.CrossPromotion && this.CrossPromotionAward && !(this.minPlatformVersion < 1044) && !(quickGame.awardGoldData.length <= 0)) {
                    var t = this
                      , n = cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_award_strip", function(a, o) {
                        if (n && n.isValid) {
                            t.hideBanner();
                            var i = cc.instantiate(o);
                            i.scale = 1 / n.scale,
                            n.addChild(i),
                            i.getComponent("Recommend_award_strip").setData(e)
                        }
                    })
                }
            },
            addInstallShortcut: function(e) {
                this.minPlatformVersion < 1044 || qg.hasShortcutInstalled({
                    success: function(t) {
                        if (0 == t) {
                            var n = e.node ? e.node : cc.find("Canvas");
                            cc.loader.loadRes("SDK/module/addInstallShortcut/installShortcut", function(t, a) {
                                if (n && n.isValid) {
                                    var o = cc.instantiate(a);
                                    o.scale = 1 / n.scale,
                                    o.x = e.x ? e.x : 0,
                                    o.y = e.y ? e.y : 0,
                                    n.addChild(o),
                                    o.getComponent("installShortcut").setData(e)
                                }
                            })
                        }
                    },
                    fail: function() {},
                    complete: function() {}
                })
            },
            showRecommendAwardIcon: function(e) {
                if (this.CrossPromotion && this.CrossPromotionAward && !(this.minPlatformVersion < 1044) && !(quickGame.awardGoldData.length <= 0)) {
                    var t = e.node ? e.node : cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_showAwardNode", function(n, a) {
                        if (t && t.isValid) {
                            var o = cc.instantiate(a);
                            o.scale = 1 / t.scale,
                            o.x = e.x ? e.x : 0,
                            o.y = e.y ? e.y : 0,
                            t.addChild(o),
                            o.getComponent("Recommend_showAwardNode").setData(e)
                        }
                    })
                }
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    PT_BlockLine: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30b71zx7qZMUKmiJp5j1hAH", "PT_BlockLine");
        var n = t
          , a = e("PT_ConfigGame")
          , o = {
            POINT_NONE: 0,
            POINT_LEFT: 1,
            POINT_RIGHT: 2,
            POINT_UP: 3,
            POINT_DOWN: 4,
            POINT_SIZE_ZERO: 2,
            POINT_SIZE_ONE: 3,
            POINT_SIZE_TWO: 4,
            CalculatePoint: function(e) {
                var t = [];
                switch (e.length) {
                case this.POINT_SIZE_ZERO:
                    this.addPointNotCorner(t, e[0], e[1]);
                    break;
                case this.POINT_SIZE_ONE:
                    this.addPointOneCorner(t, e[0], e[1], e[2]);
                    break;
                case this.POINT_SIZE_TWO:
                    this.addPointTwoCorner(t, e[0], e[1], e[2], e[3])
                }
                return t
            },
            addPointNotCorner: function(e, t, n) {
                return this.addDirectionPoint(e, t, n),
                e
            },
            addDirectionPoint: function(e, t, n) {
                switch (this.isPointDirection(t, n)) {
                case this.POINT_LEFT:
                    this.addLeftPoint(e, t, n);
                    break;
                case this.POINT_RIGHT:
                    this.addRightPoint(e, t, n);
                    break;
                case this.POINT_UP:
                    this.addUPPoint(e, t, n);
                    break;
                case this.POINT_DOWN:
                    this.addDownPoint(e, t, n)
                }
            },
            addPointOneCorner: function(e, t, n, a) {
                return this.addDirectionPoint(e, t, n),
                this.addDirectionPoint(e, n, a),
                e
            },
            addPointTwoCorner: function(e, t, n, a, o) {
                return this.addDirectionPoint(e, t, n),
                this.addDirectionPoint(e, n, a),
                this.addDirectionPoint(e, a, o),
                e
            },
            isPointDirection: function(e, t) {
                return e.m_idxJ == t.m_idxJ && e.m_idxI > t.m_idxI ? this.POINT_LEFT : e.m_idxJ == t.m_idxJ && e.m_idxI < t.m_idxI ? this.POINT_RIGHT : e.m_idxI == t.m_idxI && e.m_idxJ < t.m_idxJ ? this.POINT_UP : e.m_idxI == t.m_idxI && e.m_idxJ > t.m_idxJ ? this.POINT_DOWN : this.POINT_NONE
            },
            addLeftPoint: function(e, t, n) {
                for (var o = a.rGameBox.yMin + (t.m_idxJ + .5) * a.pieceH, i = t.m_idxI; i > n.m_idxI; i--) {
                    var s = a.rGameBox.xMin + (i + .5) * a.pieceW
                      , c = a.rGameBox.xMin + (i - .5) * a.pieceW
                      , r = cc.v2(s, o)
                      , l = cc.v2(c, o);
                    this.existMP(e, r) && e.push(r),
                    this.existMP(e, l) && e.push(l)
                }
            },
            addRightPoint: function(e, t, n) {
                for (var o = a.rGameBox.yMin + (t.m_idxJ + .5) * a.pieceH, i = t.m_idxI; i < n.m_idxI; i++) {
                    var s = a.rGameBox.xMin + (i + .5) * a.pieceW
                      , c = a.rGameBox.xMin + (i + 1.5) * a.pieceW
                      , r = cc.v2(s, o)
                      , l = cc.v2(c, o);
                    this.existMP(e, r) && e.push(r),
                    this.existMP(e, l) && e.push(l)
                }
            },
            addUPPoint: function(e, t, n) {
                for (var o = a.rGameBox.xMin + (t.m_idxI + .5) * a.pieceW, i = t.m_idxJ; i < n.m_idxJ; i++) {
                    var s = a.rGameBox.yMin + (i + .5) * a.pieceH
                      , c = a.rGameBox.yMin + (i + 1.5) * a.pieceH
                      , r = cc.v2(o, s)
                      , l = cc.v2(o, c);
                    this.existMP(e, r) && e.push(r),
                    this.existMP(e, l) && e.push(l)
                }
            },
            addDownPoint: function(e, t, n) {
                for (var o = a.rGameBox.xMin + (t.m_idxI + .5) * a.pieceW, i = t.m_idxJ; i > n.m_idxJ; i--) {
                    var s = a.rGameBox.yMin + (i + .5) * a.pieceH
                      , c = a.rGameBox.yMin + (i - .5) * a.pieceH
                      , r = cc.v2(o, s)
                      , l = cc.v2(o, c);
                    this.existMP(e, r) && e.push(r),
                    this.existMP(e, l) && e.push(l)
                }
            },
            existMP: function(e, t) {
                for (var n = t.x, a = t.y, o = 0; o < e.length; o++) {
                    var i = e[o]
                      , s = i.x
                      , c = i.y;
                    if (n == s && a == c)
                        return !1
                }
                return !0
            },
            getMyPoint: function(e, t) {
                return {
                    x: e,
                    y: t
                }
            }
        };
        n.exports = o,
        cc._RF.pop()
    }
    , {}],
    PT_BlockLink: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3084bNfTbZAu4qInaL2rwGl", "PT_BlockLink");
        var n = t
          , a = e("PT_ConfigGame")
          , o = {
            link: function(e, t) {
                var n = [];
                if (e.m_color != t.m_color)
                    return n;
                if (e.m_idxI == t.m_idxI && this.isYBlockMy(e, t))
                    return n.push(e),
                    n.push(t),
                    n;
                if (e.m_idxJ == t.m_idxJ && this.isXBlockMy(e, t))
                    return n.push(e),
                    n.push(t),
                    n;
                var a = this.getCornerPoint(e, t);
                if (null != a)
                    return n.push(e),
                    n.push(a),
                    n.push(t),
                    n;
                var o = this.getLinkPoints(e, t);
                if (o.length > 0) {
                    var i = this.getShortcut(o, e, t);
                    if (i.length > 0)
                        return this.addAllResult(i, e, t)
                }
                return !1
            },
            isXBlockMy: function(e, t) {
                if (1 == Math.abs(Math.abs(e.m_idxI) - Math.abs(t.m_idxI)))
                    return !0;
                if (t.m_idxI < e.m_idxI)
                    return this.isXBlockMy(t, e);
                for (var n = e.m_idxI + 1; n < t.m_idxI; n++)
                    if (this.hasPiece(n, e.m_idxJ))
                        return !1;
                return !0
            },
            isYBlockMy: function(e, t) {
                if (1 == Math.abs(Math.abs(e.m_idxJ) - Math.abs(t.m_idxJ)))
                    return !0;
                if (t.m_idxJ < e.m_idxJ)
                    return this.isYBlockMy(t, e);
                for (var n = e.m_idxJ + 1; n < t.m_idxJ; n++)
                    if (this.hasPiece(e.m_idxI, n))
                        return !1;
                return !0
            },
            hasPiece: function(e, t) {
                return t != a.col && -1 != t && -1 != e && e != a.row && 0 != a.blockColor[e][t]
            },
            addAllResult: function(e, t, n) {
                var a = [];
                if (a.push(t),
                e.length > 1) {
                    var o = e[0]
                      , i = e[1];
                    t.m_idxI == o.m_idxI || t.m_idxJ == o.m_idxJ ? (a.push(o),
                    a.push(i)) : (a.push(i),
                    a.push(o))
                } else
                    1 == e.length && (o = e[0],
                    a.push(o));
                return a.push(n),
                a
            },
            getLinkPoints: function(e, t) {
                var n = this.getRightChanel(e.m_idxI, e.m_idxJ, t.m_idxI)
                  , o = this.getUpChanel(e.m_idxI, e.m_idxJ, t.m_idxJ)
                  , i = this.getDownChanel(e.m_idxI, e.m_idxJ, t.m_idxJ)
                  , s = this.getLeftChanel(t.m_idxI, t.m_idxJ, e.m_idxI)
                  , c = this.getUpChanel(t.m_idxI, t.m_idxJ, e.m_idxJ)
                  , r = this.getDownChanel(t.m_idxI, t.m_idxJ, e.m_idxJ);
                if (this.isLeftUp(e, t) || this.isLeftDown(e, t))
                    return this.getLinkPoints(t, e);
                var l = [];
                if (e.m_idxJ == t.m_idxJ) {
                    o = this.getUpChanel(e.m_idxI, e.m_idxJ, -1),
                    c = this.getUpChanel(t.m_idxI, t.m_idxJ, -1);
                    var d = this.getXLinkPoints(o, c);
                    i = this.getDownChanel(e.m_idxI, e.m_idxJ, a.col),
                    r = this.getDownChanel(t.m_idxI, t.m_idxJ, a.col);
                    var h = this.getXLinkPoints(i, r);
                    this.vectorHeBing(l, d),
                    this.vectorHeBing(l, h)
                } else if (e.m_idxI == t.m_idxI) {
                    var u = this.getLeftChanel(e.m_idxI, e.m_idxJ, -1);
                    s = this.getLeftChanel(t.m_idxI, t.m_idxJ, -1);
                    var m = this.getYLinkPoints(u, s);
                    n = this.getRightChanel(e.m_idxI, e.m_idxJ, a.row);
                    var p = this.getRightChanel(t.m_idxI, t.m_idxJ, a.row)
                      , f = this.getYLinkPoints(n, p);
                    this.vectorHeBing(l, m),
                    this.vectorHeBing(l, f)
                } else if (this.isRightUp(e, t)) {
                    var g = this.getXLinkPoints(o, r)
                      , _ = this.getYLinkPoints(n, s);
                    o = this.getUpChanel(e.m_idxI, e.m_idxJ, -1),
                    c = this.getUpChanel(t.m_idxI, t.m_idxJ, -1);
                    var v = this.getXLinkPoints(o, c);
                    i = this.getDownChanel(e.m_idxI, e.m_idxJ, a.col),
                    r = this.getDownChanel(t.m_idxI, t.m_idxJ, a.col);
                    var w = this.getXLinkPoints(i, r);
                    n = this.getRightChanel(e.m_idxI, e.m_idxJ, a.row),
                    p = this.getRightChanel(t.m_idxI, t.m_idxJ, a.row);
                    var S = this.getYLinkPoints(n, p);
                    u = this.getLeftChanel(e.m_idxI, e.m_idxJ, -1),
                    s = this.getLeftChanel(t.m_idxI, t.m_idxJ, -1);
                    var y = this.getYLinkPoints(u, s);
                    this.vectorHeBing(l, g),
                    this.vectorHeBing(l, _),
                    this.vectorHeBing(l, v),
                    this.vectorHeBing(l, w),
                    this.vectorHeBing(l, S),
                    this.vectorHeBing(l, y)
                } else if (this.isRightDown(e, t)) {
                    var C = this.getXLinkPoints(i, c);
                    _ = this.getYLinkPoints(n, s),
                    o = this.getUpChanel(e.m_idxI, e.m_idxJ, -1),
                    c = this.getUpChanel(t.m_idxI, t.m_idxJ, -1),
                    v = this.getXLinkPoints(o, c),
                    i = this.getDownChanel(e.m_idxI, e.m_idxJ, a.col),
                    r = this.getDownChanel(t.m_idxI, t.m_idxJ, a.col),
                    w = this.getXLinkPoints(i, r),
                    u = this.getLeftChanel(e.m_idxI, e.m_idxJ, -1),
                    s = this.getLeftChanel(t.m_idxI, t.m_idxJ, -1),
                    y = this.getYLinkPoints(u, s),
                    n = this.getRightChanel(e.m_idxI, e.m_idxJ, a.row),
                    p = this.getRightChanel(t.m_idxI, t.m_idxJ, a.row),
                    S = this.getYLinkPoints(n, p),
                    this.vectorHeBing(l, C),
                    this.vectorHeBing(l, _),
                    this.vectorHeBing(l, v),
                    this.vectorHeBing(l, w),
                    this.vectorHeBing(l, y),
                    this.vectorHeBing(l, S)
                }
                return l
            },
            getCornerPoint: function(e, t) {
                if (this.isLeftUp(e, t) || this.isLeftDown(e, t))
                    return this.getCornerPoint(t, e);
                var n, a = this.getRightChanel(e.m_idxI, e.m_idxJ, t.m_idxI), o = this.getUpChanel(e.m_idxI, e.m_idxJ, t.m_idxJ), i = this.getDownChanel(e.m_idxI, e.m_idxJ, t.m_idxJ), s = this.getLeftChanel(t.m_idxI, t.m_idxJ, e.m_idxI), c = this.getUpChanel(t.m_idxI, t.m_idxJ, e.m_idxJ), r = this.getDownChanel(t.m_idxI, t.m_idxJ, e.m_idxJ);
                if (this.isRightUp(e, t)) {
                    var l = this.getWrapPoint(a, r);
                    return null == (n = this.getWrapPoint(o, s)) ? l : n
                }
                return this.isRightDown(e, t) ? (l = this.getWrapPoint(i, s),
                null == (n = this.getWrapPoint(a, c)) ? l : n) : null
            },
            getRightChanel: function(e, t, n) {
                for (var a = [], o = e + 1; o <= n; o++) {
                    if (this.hasPiece(o, t))
                        return a;
                    a.push(this.getPSInfo(o, t, 0))
                }
                return a
            },
            getLeftChanel: function(e, t, n) {
                for (var a = [], o = e - 1; o >= n; o--) {
                    if (this.hasPiece(o, t))
                        return a;
                    a.push(this.getPSInfo(o, t, 0))
                }
                return a
            },
            getUpChanel: function(e, t, n) {
                for (var a = [], o = t - 1; o >= n; o--) {
                    if (this.hasPiece(e, o))
                        return a;
                    a.push(this.getPSInfo(e, o, 0))
                }
                return a
            },
            getDownChanel: function(e, t, n) {
                for (var a = [], o = t + 1; o <= n; o++) {
                    if (this.hasPiece(e, o))
                        return a;
                    a.push(this.getPSInfo(e, o, 0))
                }
                return a
            },
            isRightUp: function(e, t) {
                return t.m_idxI > e.m_idxI && t.m_idxJ < e.m_idxJ
            },
            isLeftUp: function(e, t) {
                return t.m_idxI < e.m_idxI && t.m_idxJ < e.m_idxJ
            },
            isLeftDown: function(e, t) {
                return t.m_idxI < e.m_idxI && t.m_idxJ > e.m_idxJ
            },
            isRightDown: function(e, t) {
                return t.m_idxI > e.m_idxI && t.m_idxJ > e.m_idxJ
            },
            getWrapPoint: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    for (var a = e[n], o = 0; o < t.length; o++) {
                        var i = t[o];
                        if (a.m_idxI == i.m_idxI && a.m_idxJ == i.m_idxJ)
                            return a
                    }
                return null
            },
            getXLinkPoints: function(e, t) {
                for (var n = [], a = 0; a < e.length; a++)
                    for (var o = e[a], i = 0; i < t.length; i++) {
                        var s = t[i];
                        o.m_idxJ == s.m_idxJ && (this.isXBlock(o, s) || n.push(this.getPTInfo(o, s)))
                    }
                return n
            },
            getYLinkPoints: function(e, t) {
                for (var n = [], a = 0; a < e.length; a++)
                    for (var o = e[a], i = 0; i < t.length; i++) {
                        var s = t[i];
                        o.m_idxI == s.m_idxI && (this.isYBlock(o, s) || n.push(this.getPTInfo(o, s)))
                    }
                return n
            },
            isYBlock: function(e, t) {
                if (t.m_idxJ < e.m_idxJ)
                    return this.isYBlock(t, e);
                for (var n = e.m_idxJ + 1; n < t.m_idxJ; n++)
                    if (this.hasPiece(e.m_idxI, n))
                        return !0;
                return !1
            },
            isXBlock: function(e, t) {
                if (t.m_idxI < e.m_idxI)
                    return this.isXBlock(t, e);
                for (var n = e.m_idxI + 1; n < t.m_idxI; n++)
                    if (this.hasPiece(n, e.m_idxJ))
                        return !0;
                return !1
            },
            getShortcut: function(e, t, n) {
                for (var a, o = [], i = 1e3, s = 0; s < e.length; s++) {
                    var c = e[s]
                      , r = c.v1
                      , l = c.v2
                      , d = this.getShortcut1(r, l, t, n);
                    d < i && (i = d,
                    a = this.getPTInfo(r, l))
                }
                if (1e3 != i) {
                    var h = a.v1
                      , u = a.v2;
                    o.push(h),
                    o.push(u)
                }
                return o
            },
            getShortcut1: function(e, t, n, a) {
                var o = 0
                  , i = n.m_idxI
                  , s = n.m_idxJ
                  , c = a.m_idxI
                  , r = a.m_idxJ
                  , l = e.m_idxI
                  , d = e.m_idxJ
                  , h = t.m_idxI
                  , u = t.m_idxJ;
                return i == l || s == d ? s == d ? (o = Math.abs(Math.abs(i) - Math.abs(l)),
                o += Math.abs(Math.abs(d) - Math.abs(u)),
                o += Math.abs(Math.abs(h) - Math.abs(c))) : (o = Math.abs(Math.abs(s) - Math.abs(d)),
                o += Math.abs(Math.abs(l) - Math.abs(h)),
                o += Math.abs(Math.abs(u) - Math.abs(r))) : s == u ? (o = Math.abs(Math.abs(i) - Math.abs(h)),
                o += Math.abs(Math.abs(u) - Math.abs(d)),
                o += Math.abs(Math.abs(l) - Math.abs(c))) : (o = Math.abs(Math.abs(s) - Math.abs(u)),
                o += Math.abs(Math.abs(h) - Math.abs(l)),
                o += Math.abs(Math.abs(d) - Math.abs(r))),
                o
            },
            vectorHeBing: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    e.push(a)
                }
            },
            getPSInfo: function(e, t, n) {
                return {
                    m_idxI: e,
                    m_idxJ: t,
                    m_color: n
                }
            },
            getPTInfo: function(e, t) {
                return {
                    v1: e,
                    v2: t
                }
            }
        };
        n.exports = o,
        cc._RF.pop()
    }
    , {}],
    PT_BlockMove: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30042NUGftPyo4KOmiknKV9", "PT_BlockMove");
        var n = t
          , a = e("PT_ConfigGame")
          , o = {
            moveDirectionManage: function() {
                var e = [];
                return 21 == a.xgravityline ? this.moveDirectionManagelift(e) : 22 == a.xgravityline ? this.moveDirectionManageRight(e) : 23 == a.ygravityline ? this.moveDirectionManageUp(e) : 24 == a.ygravityline && this.moveDirectionManageDown(e),
                e
            },
            moveDirectionManagelift: function(e) {
                for (var t = 0, n = [], o = 0; o < a.row; o++)
                    for (var i = 0; i < a.col; i++) {
                        var s = a.blockColor[o][i];
                        n.push(s)
                    }
                for (var c = 0; c < a.row; c++)
                    for (var r = 0; r < a.col; r++) {
                        s = n[t];
                        var l = c - 1 < 0 ? a.row - 1 : c - 1;
                        a.blockColor[l][r] = s,
                        e.push(this.getMRInFo(c, r, l, r, l == a.row - 1 ? 7 : 1)),
                        t++
                    }
            },
            moveDirectionManageRight: function(e) {
                for (var t = 0, n = [], o = a.row - 1; o >= 0; o--)
                    for (var i = 0; i < a.col; i++) {
                        var s = a.blockColor[o][i];
                        n.push(s)
                    }
                for (var c = a.row - 1; c >= 0; c--)
                    for (var r = 0; r < a.col; r++) {
                        var l = c + 1 > a.row - 1 ? 0 : c + 1;
                        s = n[t],
                        a.blockColor[l][r] = s,
                        e.push(this.getMRInFo(c, r, l, r, 0 == l ? 7 : 1)),
                        t++
                    }
            },
            moveDirectionManageUp: function(e) {
                for (var t = 0, n = [], o = 0; o < a.row; o++)
                    for (var i = a.col - 1; i >= 0; i--) {
                        var s = a.blockColor[o][i];
                        n.push(s)
                    }
                for (var c = 0; c < a.row; c++)
                    for (var r = a.col - 1; r >= 0; r--) {
                        var l = r + 1 > a.col - 1 ? 0 : r + 1;
                        s = n[t],
                        a.blockColor[c][l] = s,
                        e.push(this.getMRInFo(c, r, c, l, 0 == l ? 7 : 1)),
                        t++
                    }
            },
            moveDirectionManageDown: function(e) {
                for (var t = 0, n = [], o = 0; o < a.row; o++)
                    for (var i = 0; i < a.col; i++) {
                        var s = a.blockColor[o][i];
                        n.push(s)
                    }
                for (var c = 0; c < a.row; c++)
                    for (var r = 0; r < a.col; r++) {
                        var l = r - 1 < 0 ? a.col - 1 : r - 1;
                        s = n[t],
                        a.blockColor[c][l] = s,
                        e.push(this.getMRInFo(c, r, c, l, l == a.col - 1 ? 7 : 1)),
                        t++
                    }
            },
            getMRInFo: function(e, t, n, a, o) {
                return {
                    m_srcI: e,
                    m_srcJ: t,
                    m_dscI: n,
                    m_dscJ: a,
                    m_dc: o
                }
            },
            separateDirectionManageLift_Right: function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var o = e[n]
                      , i = o.m_idxI
                      , s = o.m_idxJ;
                    -1 != a.xgravityline && (1 == a.xgravityline || i >= a.xgravityline) ? this.separateDirectionRight(i, s, 1 == a.xgravityline ? 0 : a.xgravityline, t) : -1 != a.xgravityline && i < a.xgravityline && this.separateDirectionLeft(i, s, a.xgravityline > a.row ? a.row : a.xgravityline, t)
                }
                return t
            },
            separateDirectionManageUp_Down: function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var o = e[n]
                      , i = o.m_idxI
                      , s = o.m_idxJ;
                    -1 != a.ygravityline && (1 == a.ygravityline || s >= a.ygravityline - 1) ? this.separateDirectionUp(i, s, 1 == a.ygravityline ? 0 : a.ygravityline - 1, t) : -1 != a.ygravityline && s < a.ygravityline - 1 && this.separateDirectionDown(i, s, a.ygravityline > a.col ? a.col : a.ygravityline - 1, t)
                }
                return t
            },
            separateDirectionManageEnd: function() {
                var e = [];
                return -1 != a.xgravityline && -1 != a.ygravityline && this.separateDirectionMove(e),
                e
            },
            separateDirectionMove: function(e) {
                a.xgravityline;
                for (var t = a.ygravityline, n = 0; n < a.row; n++)
                    1 == t ? this.separateDirectionUp(n, 0, 0, e) : t > a.col ? this.separateDirectionDown(n, 0, a.col, e) : (this.separateDirectionUp(n, 0, t - 1, e),
                    this.separateDirectionDown(n, 0, t - 1, e))
            },
            separateDirectionLeft: function(e, t, n, o) {
                for (var i = 0, s = n - 1; s >= 0; s--) {
                    var c = a.blockColor[s][t];
                    if (c > 0 && i > 0) {
                        if (!this.isExistIndexList(s, t, o)) {
                            var r = a.blockColor[s][t];
                            a.blockColor[s + i][t] = r,
                            a.blockColor[s][t] = 0,
                            o.push(this.getMRInFo(s, t, s + i, t, i))
                        }
                    } else
                        0 == c && i++
                }
            },
            separateDirectionRight: function(e, t, n, o) {
                for (var i = 0, s = n; s < a.row_d; s++) {
                    var c = a.blockColor[s][t];
                    if (c > 0 && i > 0) {
                        if (!this.isExistIndexList(s, t, o)) {
                            var r = a.blockColor[s][t];
                            a.blockColor[s - i][t] = r,
                            a.blockColor[s][t] = 0,
                            o.push(this.getMRInFo(s, t, s - i, t, i))
                        }
                    } else
                        0 == c && i++
                }
            },
            separateDirectionDown: function(e, t, n, o) {
                for (var i = 0, s = n - 1; s >= 0; s--) {
                    var c = a.blockColor[e][s];
                    if (c > 0 && i > 0) {
                        if (!this.isExistIndexList(e, s, o)) {
                            var r = a.blockColor[e][s];
                            a.blockColor[e][s + i] = r,
                            a.blockColor[e][s] = 0,
                            o.push(this.getMRInFo(e, s, e, s + i, i))
                        }
                    } else
                        0 == c && i++
                }
            },
            separateDirectionUp: function(e, t, n, o) {
                for (var i = 0, s = n; s < a.col; s++) {
                    var c = a.blockColor[e][s];
                    if (c > 0 && i > 0) {
                        if (!this.isExistIndexList(e, s, o)) {
                            var r = a.blockColor[e][s];
                            a.blockColor[e][s - i] = r,
                            a.blockColor[e][s] = 0,
                            o.push(this.getMRInFo(e, s, e, s - i, i))
                        }
                    } else
                        0 == c && i++
                }
            },
            isExistIndexList: function(e, t, n) {
                for (var a = 0; a < n.length; a++) {
                    var o = n[a];
                    if (e == o.m_srcI && t == o.m_srcJ)
                        return !0
                }
                return !1
            },
            getStrandPieSwpInfo: function(e, t, n) {
                var o, i, s, c;
                o = e,
                i = t,
                s = e == a.row - 1 ? 0 : a.row - 1,
                c = t == a.col - 1 ? 0 : a.col - 1;
                var r = 0
                  , l = [];
                if (o == a.row - 1 && i == a.col - 1)
                    if (n == PT_Constant.SD_HENG)
                        for (var d = i % 2, h = i; h >= c; h--)
                            for (var u = o; u >= s; u--) {
                                var m = u;
                                h % 2 != d && (m = a.row - 1 - u);
                                var p = a.blockColor[m][h];
                                l.push(this.getStrandInfo(m, h, r, p)),
                                r++
                            }
                    else
                        for (var f = o % 2, g = o; g >= s; g--)
                            for (var _ = i; _ >= c; _--) {
                                var v = _;
                                g % 2 != f && (v = a.col - 1 - _),
                                p = a.blockColor[g][v],
                                l.push(this.getStrandInfo(g, v, r, p)),
                                r++
                            }
                else if (o == a.row - 1 && 0 == i)
                    if (n == PT_Constant.SD_HENG) {
                        d = i % 2;
                        for (var w = i; w <= c; w++)
                            for (var S = o; S >= s; S--)
                                m = S,
                                w % 2 != d && (m = a.row - 1 - S),
                                p = a.blockColor[m][w],
                                l.push(this.getStrandInfo(m, w, r, p)),
                                r++
                    } else {
                        f = o % 2;
                        for (var y = o; y >= s; y--)
                            for (var C = i; C <= c; C++)
                                v = C,
                                y % 2 != f && (v = a.col - 1 - C),
                                p = a.blockColor[y][v],
                                l.push(this.getStrandInfo(y, v, r, p)),
                                r++
                    }
                else if (0 == o && i == a.col - 1)
                    if (n == PT_Constant.SD_HENG) {
                        d = i % 2;
                        for (var I = i; I >= c; I--)
                            for (var T = o; T <= s; T++)
                                m = T,
                                I % 2 != d && (m = a.row - 1 - T),
                                p = a.blockColor[m][I],
                                l.push(this.getStrandInfo(m, I, r, p)),
                                r++
                    } else {
                        f = o % 2;
                        for (var B = o; B <= s; B++)
                            for (var D = i; D >= c; D--)
                                v = D,
                                B % 2 != f && (v = a.col - 1 - D),
                                p = a.blockColor[B][v],
                                l.push(this.getStrandInfo(B, v, r, p)),
                                r++
                    }
                else if (n == PT_Constant.SD_HENG) {
                    d = i % 2;
                    for (var P = i; P <= c; P++)
                        for (var x = o; x <= s; x++)
                            m = x,
                            P % 2 != d && (m = a.row - 1 - x),
                            p = a.blockColor[m][P],
                            l.push(this.getStrandInfo(m, P, r, p)),
                            r++
                } else {
                    f = o % 2;
                    for (var b = o; b <= s; b++)
                        for (var N = i; N <= c; N++)
                            v = N,
                            b % 2 != f && (v = a.col - 1 - N),
                            p = a.blockColor[b][v],
                            l.push(this.getStrandInfo(b, v, r, p)),
                            r++
                }
                return l
            },
            getStrandNoneIndex: function(e) {
                for (var t = -1, n = 0; n < e.length; n++) {
                    var a = e[n]
                      , o = (a.m_srcI,
                    a.m_srcJ,
                    a.m_idex);
                    if (0 == a.m_color) {
                        t = o;
                        break
                    }
                }
                return t
            },
            isStrandNoneEnd: function(e, t) {
                for (var n = !1, a = 0; a < e.length; a++) {
                    var o = e[a]
                      , i = (o.m_srcI,
                    o.m_srcJ,
                    o.m_idex)
                      , s = o.m_color;
                    if (i > t && s > 0) {
                        n = !0;
                        break
                    }
                }
                return n
            },
            strandDirectionManage: function(e, t, n) {
                var o = [];
                return a.xgravityline > 24 && a.xgravityline < 29 && this.strandDirectionLift(o, e, t, n),
                o
            },
            strandDirectionLift: function(e, t, n, o) {
                if (-1 != n && o)
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i]
                          , c = s.m_srcI
                          , r = s.m_srcJ
                          , l = s.m_idex
                          , d = s.m_color;
                        if (l > n) {
                            var h = t[l - 1]
                              , u = h.m_srcI
                              , m = h.m_srcJ;
                            a.blockColor[u][m] = d,
                            a.blockColor[c][r] = 0,
                            e.push(this.getMRInFo(c, r, u, m, 1))
                        }
                    }
            },
            getStrandInfo: function(e, t, n, a) {
                return {
                    m_srcI: e,
                    m_srcJ: t,
                    m_idex: n,
                    m_color: a
                }
            }
        };
        n.exports = o,
        cc._RF.pop()
    }
    , {}],
    PT_Block: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3084a3cU3NCAL0OfhvLsenA", "PT_Block"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Node,
                boby: cc.Node,
                bobyTexture: {
                    type: cc.SpriteFrame,
                    default: []
                },
                bgTexture: {
                    type: cc.SpriteFrame,
                    default: []
                }
            },
            onLoad: function() {
                this.bInfo = {
                    m_idxI: 0,
                    m_idxJ: 0,
                    m_color: 0,
                    m_stage: PT_Constant.BLOCKDATA_STAGE_DEFAULT
                },
                this.m_curScale = this.node.scale
            },
            start: function() {
                this.boby.on("touchstart", this.callback, this)
            },
            setBInFo: function(e, t) {
                this.bInfo.m_idxI = e,
                this.bInfo.m_idxJ = t
            },
            setProperties: function(e, t, n) {
                this.bInfo.m_idxI = e,
                this.bInfo.m_idxJ = t,
                this.bInfo.m_color = n
            },
            setPattern: function() {
                this.boby.getComponent(cc.Sprite).spriteFrame = this.bobyTexture[this.bInfo.m_color],
                this.setSelectBlock(!1)
            },
            setTmpPattern: function(e) {
                this.boby.getComponent(cc.Sprite).spriteFrame = this.bobyTexture[e]
            },
            setSelectBlock: function(e) {
                e ? (this.bg.getComponent(cc.Sprite).spriteFrame = this.bgTexture[1],
                this.bInfo.m_select = !0) : (this.bg.getComponent(cc.Sprite).spriteFrame = this.bgTexture[0],
                this.bInfo.m_select = !1)
            },
            callback: function(e) {
                e.target,
                cc.find("Canvas").getComponent("PT_GamePage").touchBlockCall(this)
            },
            isBlockStage: function(e) {
                return this.bInfo.m_stage == e
            },
            changeStage: function(e) {
                e == PT_Constant.BLOCKDATA_STAGE_DEFAULT ? this.changeTexture() : e == PT_Constant.BLOCKDATA_STAGE_SELECT ? this.addSelectTexture() : e == PT_Constant.BLOCKDATA_STAGE_REFRESH ? this.changeTexture() : e == PT_Constant.BLOCKDATA_STAGE_DEL && (this.bInfo.m_color = PT_Constant.BLOCKDATA_COLOR_NONE,
                this.delBgDisplay(),
                this.changeTexture()),
                this.bInfo.m_stage = e
            },
            changeTexture: function() {
                this.bg.getComponent(cc.Sprite).spriteFrame = this.bgTexture[0],
                this.boby.getComponent(cc.Sprite).spriteFrame = this.bobyTexture[this.bInfo.m_color]
            },
            addSelectTexture: function() {
                this.bg.getComponent(cc.Sprite).spriteFrame = this.bgTexture[1],
                this.node.runAction(cc.sequence(cc.scaleTo(.04, .994 * this.m_curScale), cc.scaleTo(.04, 1.07 * this.m_curScale), cc.scaleTo(.04, 1.1 * this.m_curScale), cc.scaleTo(.04, 1.093 * this.m_curScale), cc.scaleTo(.04, 1.047 * this.m_curScale), cc.scaleTo(.04, .949 * this.m_curScale), cc.scaleTo(.04, .9 * this.m_curScale), cc.scaleTo(.04, .932 * this.m_curScale), cc.scaleTo(.04, .997 * this.m_curScale), cc.scaleTo(.04, 1.052 * this.m_curScale), cc.scaleTo(.04, 1.029 * this.m_curScale), cc.scaleTo(.04, 1 * this.m_curScale)))
            },
            delBgDisplay: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_Chinese: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3046dcUyTZC0oSzC/gCcH3O", "PT_Chinese"),
        t.exports = {
            GameName: "\u6eda\u52a8\u7403\u7403",
            getpropshare1: "\u5206\u4eab\u6b21\u6570:",
            getpropshare2: "\u6bcf\u5929\u603b\u5206\u4eab\u6b21\u6570:5",
            getpropshare3: "\u83b7\u5f97",
            getpropshare4: "\u4e2a\u67e5\u627e",
            getpropshare5: "\u4e2a\u5237\u65b0",
            getpropshare6: "\u4e2a\u70b8\u5f39",
            getpropshare7: "\u5206\u4eab\u6b21\u6570\u589e\u52a0\uff0c\u6e38\u620f\u96be\u5ea6\u964d\u4f4e!",
            getpropshare8: "\u4eca\u5929\u9886\u53d6\u9053\u5177\uff0c\u5df2\u8fbe\u5230\u4e0a\u9650!",
            getpropshare9: "\u8bf7\u5206\u4eab\u5230\u7fa4\uff0c\u624d\u80fd\u83b7\u5f97\u5956\u52b1!",
            goldStr: "\u91d1\u5e01",
            goldNotStr: "\u91d1\u5e01\u4e0d\u8db3",
            rankingModeTitle: "\u9009\u62e9\u67e5\u770b\u6a21\u5f0f",
            exchangeStr: "\u5151\u6362\u6210\u529f",
            exchangeNumStr: "\u5151\u6362\u6570\u91cf\u4e3a0",
            loadStr: "\u52a0\u8f7d\u4e2d...",
            videoStr1: "\u672a\u89c2\u770b\u5b8c\u6210!",
            videoStr2: "Resurrected successfully increased 30s!",
            videoStr3: "\u89c2\u770b\u5931\u8d25!"
        },
        cc._RF.pop()
    }
    , {}],
    PT_ConfigGame: [function(e, t) {
        "use strict";
        cc._RF.push(t, "301c95TWdhDMoi4VRDxroSr", "PT_ConfigGame");
        var n = t
          , a = {
            row: 8,
            col: 11,
            pieceW: 0,
            pieceH: 0,
            colorMaxCont: 10,
            addBlockIndex: 0,
            curLevelIndex: 0,
            nameLevelTotal: 0,
            curScore: 0,
            statImage: 0,
            blockArray: [],
            tmpColor: [],
            blockColor: [],
            selectArrays: [],
            blockMapArray: [],
            rGameBox: cc.rect(0, 0, 700, 875),
            curLevel: 1,
            mFindnum: 0,
            mRefreshnum: 0,
            mBombnum: 0,
            xgravityline: -1,
            ygravityline: -1,
            sbInFo: {
                m_srcI: 0,
                m_srcJ: 0,
                m_Direction: -1
            },
            m_modeType: 1,
            levelTotalNum: 0,
            isUseBomb: !1,
            curTime: 0,
            totalTime: 90,
            clealCont: 0,
            resLevel: 1,
            isGameStart: !1,
            isUseProp: !1,
            loadMap: function(e) {
                this.m_modeType = e
            },
            loadGame: function(e) {
                this.curLevel = e,
                this.blockArray.splice(0, this.blockArray.length),
                this.blockColor.splice(0, this.blockColor.length),
                this.blockMapArray.splice(0, this.blockMapArray.length),
                this.selectArrays.splice(0, this.selectArrays.length),
                this.tmpColor.splice(0, this.tmpColor.length);
                for (var t = 0; t < PT_Constant.ROW_D; t++)
                    this.blockArray[t] = [],
                    this.blockColor[t] = [],
                    this.blockMapArray[t] = [],
                    this.selectArrays[t] = {
                        Block1: null,
                        Block2: null
                    };
                for (var n = 0; n < PT_Constant.ROW_D; n++)
                    for (var a = 0; a < PT_Constant.COL_D; a++)
                        this.blockArray[n][a] = null,
                        this.blockColor[n][a] = 0,
                        this.blockMapArray[n][a] = 0
            },
            GameStart: function() {
                this.curScore = 0,
                this.curLevelIndex = 0,
                this.isUseBomb = !1,
                this.isGameStart = !1,
                this.isUseProp = !1,
                this.curTime = 0,
                this.clealCont = 0,
                this.m_modeType == PT_Constant.MODE_TIME && (this.totalTime = 15)
            },
            GameSmallNext: function() {
                this.isUseBomb = !1,
                this.isGameStart = !1,
                this.isUseProp = !1,
                this.curTime = 0,
                this.clealCont = 0
            },
            loadBlockData: function() {
                this.pieceW = this.rGameBox.size.width / this.row,
                this.pieceH = this.pieceW
            },
            loadRandomColor: function() {
                var e = this.getMapNormalNum()
                  , t = this.getImageCont(e, this.curLevel)
                  , n = parseInt(Math.random() * (PT_Constant.GAME_COLOR_MAX - t));
                this.statImage = n;
                for (var a = 0; a < e / 2; a++) {
                    var o = parseInt((n + a) % (t + n) + 1);
                    o < n && (o += n),
                    o > PT_Constant.GAME_COLOR_MAX ? this.tmpColor[a] = PT_Constant.GAME_COLOR_MAX : this.tmpColor[a] = o
                }
                for (a = 0; a < e / 2; a++)
                    this.tmpColor[a + e / 2] = this.tmpColor[a];
                cc.log("==============0======="),
                this.tmpColor.sort(function() {
                    return .5 - Math.random()
                });
                for (var i = 0, s = 0; s < this.row; s++)
                    for (var c = 0; c < this.col; c++)
                        1 == this.blockMapArray[s][c] ? (this.blockColor[s][c] = this.tmpColor[i],
                        i++) : this.blockColor[s][c] = 0;
                cc.log("=====================")
            },
            getIndexColor: function(e, t) {
                return this.blockColor[e][t]
            },
            getPieRandomColor: function() {
                var e = this.getMapNormalNum();
                return parseInt(Math.random() * this.getImageCont(e, this.curLevel) + this.statImage)
            },
            loadLevelName: function() {},
            getMapNormalNum: function() {
                for (var e = 0, t = -1, n = -1, a = 0; a < this.row; a++)
                    for (var o = 0; o < this.col; o++)
                        1 == this.blockMapArray[a][o] && (t = a,
                        n = o,
                        e++);
                if (e % 2 != 0 && (this.blockMapArray[t][n] = 0,
                e--),
                e / 2 <= 6) {
                    for (var i = 0; i < this.row; i++)
                        for (var s = 0; s < this.col; s++)
                            this.blockMapArray[i][s] = 1;
                    e = this.row * this.col
                }
                return e
            },
            getImageCont: function(e, t) {
                var n = 20;
                return t < 10 ? n = 20 : t < 30 ? n = parseInt(e / 1.8) : t < 50 ? n = parseInt(e / 1.7) : t < 70 ? n = parseInt(e / 1.6) : t < 90 ? n = parseInt(e / 1.5) : t < 120 ? n = parseInt(e / 1.45) : t < 150 ? n = parseInt(e / 1.4) : t < 180 ? n = parseInt(e / 1.35) : t < 190 && (n = parseInt(e / 1.3)),
                n > 34 && (n = 35 - parseInt(1 * n / t * 10)),
                t >= 190 && (n = 35),
                n < 20 && (n = 20),
                n >= 35 && t >= 300 && (n += (t - 300) / 10),
                n > PT_Constant.GAME_COLOR_MAX && (n = PT_Constant.GAME_COLOR_MAX),
                n
            },
            getGrade: function() {
                var e = this.curTime;
                return this.totalTime,
                e > .7 ? 3 : e > .5 ? 2 : 1
            },
            getModeFileName: function() {
                return this.m_modeType == PT_Constant.MODE_CLASSIC ? "PetLLK/data/mode/llk_classic_568h.json" : this.m_modeType == PT_Constant.MODE_TIME ? "PetLLK/data/mode/llk_time_568h.json" : this.m_modeType == PT_Constant.MODE_ENDLESS ? "PetLLK/data/mode/llk_endless_568h.json" : this.m_modeType == PT_Constant.MODE_NIGHT ? "PetLLK/data/mode/llk_night_568h.json" : this.m_modeType == PT_Constant.MODE_CASUAL ? "PetLLK/data/mode/llk_casual_568h.json" : void 0
            },
            sdkManagerGameAction: function() {
                return this.m_modeType == PT_Constant.MODE_CLASSIC ? "PetLLK_jd" : this.m_modeType == PT_Constant.MODE_TIME ? "PetLLK_js" : this.m_modeType == PT_Constant.MODE_ENDLESS ? "PetLLK_wj" : this.m_modeType == PT_Constant.MODE_NIGHT ? "PetLLK_dy" : "PetLLK_xx"
            }
        };
        n.exports = a,
        cc._RF.pop()
    }
    , {}],
    PT_Constant: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30cd6/VO99C2qtD61/9IDzR", "PT_Constant"),
        window.PT_Constant = {
            ROW_D: 8,
            COL_D: 11,
            MODE_CLASSIC: 1,
            MODE_TIME: 2,
            MODE_ENDLESS: 3,
            MODE_NIGHT: 4,
            MODE_CASUAL: 5,
            SD_SU: 1,
            SD_HENG: 2,
            SCENES_WIDTH: 720,
            PAGE_STAGE_NORMAL: 0,
            PAGE_STAGE_FULL: 1,
            GAME_COLOR_MAX: 44,
            BLOCKDATA_COLOR_NONE: 0,
            BLOCKDATA_STAGE_DEFAULT: -1,
            BLOCKDATA_STAGE_SELECT: 1,
            BLOCKDATA_STAGE_REFRESH: 2,
            BLOCKDATA_STAGE_DEL: 3,
            GAME_COMBO_ADD_TIME: 5,
            GAME_RESU_ADD_TIME: 30,
            PROP_SHARE_NUM: 5,
            PT_key_load: "PT_key_load",
            PT_key_sing_day_: "PT_key_sing_day_",
            PT_key_sing_record_: "PT_key_sing_record_",
            PT_key_sing_day_receive_: "PT_key_sing_day_receive_",
            PT_key_level_lock_: "PT_key_level_lock_",
            PT_key_level_star_: "PT_key_level_star_",
            PT_key_max_level_: "PT_key_max_level_",
            PT_key_max_score_: "PT_key_max_score_",
            PT_key_find_num_: "PT_key_find_num_",
            PT_key_refresh_num_: "PT_key_refresh_num_",
            PT_key_bomb_num_: "PT_key_bomb_num_",
            PT_key_resu_share_num_: "PT_key_resu_share_num_",
            PT_key_pass_two_gold_num_: "PT_key_pass_two_gold_num_",
            PT_key_prop_share_num_: "PT_key_prop_share_num_",
            PT_key_prop_share_record_: "PT_key_prop_share_record_"
        },
        cc._RF.pop()
    }
    , {}],
    PT_DialogFailure: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30a87nMdhFG4qyDWpBPShnp", "PT_DialogFailure");
        var n = e
          , a = n("PT_ConfigGame")
          , o = n("PT_MyShare")
          , i = n("PT_GameManag");
        cc.Class({
            extends: n("PT_MyDLayer"),
            properties: {
                mLevelLabel: cc.Node,
                avdShareNode: cc.Node,
                GameBanner: cc.Node,
                mScoreLabel: cc.Node,
                mHgLabel: cc.Node
            },
            onLoad: function() {
                this._super(this.node),
                this.mLevelLabel.getComponent(cc.Label).string = a.curLevel + "",
                this.mScoreLabel.getComponent(cc.Label).string = a.curScore + "",
                this.mHgLabel.getComponent(cc.Label).string = o.getMaxScore(a.m_modeType) + "",
                8 == SdkManager.getSysPlatform() ? this.avdShareNode = !0 : this.avdShareNode = !1,
                SdkManager.showSpotByFinish(),
                8 == SdkManager.getSysPlatform() && SdkManager.showBannerByBottom(wxBannerId)
            },
            onEnable: function() {
                this._super(this.node),
                this.GameBanner.active = !1
            },
            onDisable: function() {},
            onDestroy: function() {
                this._super(this.node),
                SdkManager.hideNativeBanner(),
                8 == SdkManager.getSysPlatform() && SdkManager.hideBanner()
            },
            btnRefreshCall: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        i.GameRefresh(a.curLevel, function() {
                            cc.director.loadScene("PT_GamePage")
                        })
                    }
                })
            },
            btnHomeCall: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        a.m_modeType == PT_Constant.MODE_ENDLESS ? cc.director.loadScene("PT_GameMain") : cc.director.loadScene("PT_GameMap")
                    }
                })
            },
            avdShareCall: function() {
                SdkManager.shareVd(function(e) {
                    if (2 == e)
                        wkCommonScript.addToast({
                            str: "\u6ca1\u6709\u5f55\u5236\u89c6\u9891!"
                        });
                    else if (1 == e) {
                        var t = parseInt(lieyou.Props_Base_Gold);
                        wkCommonScript.addToast({
                            str: "\u5206\u4eab\u6210\u529f"
                        }),
                        wkCommonScript.addToast({
                            str: "\u83b7\u5f97" + t + "\u91d1\u5e01",
                            y: -150
                        });
                        var n = PT_MyShare.getGoldNum();
                        PT_MyShare.setGoldNum(n + t),
                        GameData_DrawLine.addGold(t)
                    } else
                        0 == e && wkCommonScript.addToast({
                            str: "\u5206\u4eab\u89c6\u9891\u5931\u8d25"
                        })
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_DialogGetProp: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30038SuU9RMDL9Jx/ZzybBI", "PT_DialogGetProp");
        var n = e("PT_MyShare");
        cc.Class({
            extends: cc.Component,
            properties: {
                spFindIcon: {
                    default: null,
                    type: cc.Node
                },
                spRefreshIcon: {
                    default: null,
                    type: cc.Node
                },
                spBombIcon: {
                    default: null,
                    type: cc.Node
                },
                btnAvd: {
                    default: null,
                    type: cc.Node
                },
                m_index: 0
            },
            start: function() {
                this.btnAvd.active && this.btnAvd.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, .8), cc.scaleTo(.8, 1.1)))),
                SdkManager.pauseLuPing(),
                8 == SdkManager.getSysPlatform() && SdkManager.showBannerByBottom(wxBannerId)
            },
            onDestroy: function() {
                SdkManager.resumeLuPing(),
                8 == SdkManager.getSysPlatform() && SdkManager.hideBanner()
            },
            upPropUi: function(e) {
                this.m_index = e,
                0 == this.m_index ? this.spFindIcon.active = !0 : this.spFindIcon.active = !1,
                1 == this.m_index ? this.spRefreshIcon.active = !0 : this.spRefreshIcon.active = !1,
                2 == this.m_index ? this.spBombIcon.active = !0 : this.spBombIcon.active = !1
            },
            sharePassCall: function(e) {
                0 == this.m_index ? (n.setFindNum(n.getFindNum() + e),
                MyToast.showToast(cc.find("Canvas"), cc.v2(0, 0), "\u83b7\u5f97" + e + "\u4e2a\u67e5\u627e", 2)) : 1 == this.m_index ? (n.setRefreshNum(n.getRefreshNum() + e),
                MyToast.showToast(cc.find("Canvas"), cc.v2(0, 0), "\u83b7\u5f97" + e + "\u4e2a\u5237\u65b0", 2)) : 2 == this.m_index && (n.setBombNum(n.getBombNum() + e),
                MyToast.showToast(cc.find("Canvas"), cc.v2(0, 0), "\u83b7\u5f97" + e + "\u4e2a\u70b8\u5f39", 2)),
                cc.find("Canvas").getComponent("PT_GamePage").initView()
            },
            btnCloseCall: function() {
                this.node.destroy()
            },
            btnAvdCall: function() {
                SdkManager.showRewardedVideoAd(wxVideoId, function(e) {
                    e ? (this.sharePassCall(1),
                    this.node.destroy()) : MyToast.showToast(cc.find("Canvas"), cc.v2(0, 0), "\u672a\u83b7\u5f97", 2)
                }
                .bind(this))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_DialogPass: [function(e, t) {
        "use strict";
        cc._RF.push(t, "305f34A2hhCAZn9vwlpMrId", "PT_DialogPass");
        var n = e
          , a = n("PT_ConfigGame")
          , o = n("PT_GameManag")
          , i = n("PT_MyShare")
          , s = n("AudioManager");
        cc.Class({
            extends: n("PT_MyDLayer"),
            properties: {
                btnGetTwoGoldAvd: {
                    default: null,
                    type: cc.Node
                },
                mGoldLabel: cc.Node,
                mLevelLabel: cc.Node,
                mScoreLabel: cc.Node,
                mHgLabel: cc.Node,
                mStar1: cc.Node,
                mStar2: cc.Node,
                mStar3: cc.Node,
                mPassPar: cc.Prefab,
                mGoldWord: cc.Node,
                mGoldAc: cc.Node,
                GameBanner: cc.Node,
                avdShareNode: cc.Node
            },
            onLoad: function() {
                this._super(this.node),
                SdkManager.showSpotByFinish(!1, 0),
                8 == SdkManager.getSysPlatform() ? this.avdShareNode = !0 : this.avdShareNode = !1;
                var e = a.getGrade();
                this.addGoldValue = parseInt(10 * e),
                this.mLevelLabel.getComponent(cc.Label).string = a.curLevel + "",
                this.mScoreLabel.getComponent(cc.Label).string = a.curScore + "",
                this.mHgLabel.getComponent(cc.Label).string = i.getMaxScore(a.m_modeType) + "",
                i.getMaxLevel(PT_Constant.MODE_CLASSIC) > 4 && SdkManager.getHaveVideo() ? (this.mGoldWord.active = !0,
                this.mGoldAc.active = !0,
                this.mGoldLabel.active = !0,
                this.mGoldAc.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.25, 20, 0), cc.moveBy(.25, -20, 0)))),
                this.btnGetTwoGoldAvd.active = !0,
                this.btnGetTwoGoldAvd.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, .8), cc.scaleTo(.8, 1.05))))) : (this.mGoldWord.active = !1,
                this.mGoldAc.active = !1,
                this.mGoldLabel.active = !1,
                this.btnGetTwoGoldAvd.active = !1),
                this.mGoldLabel.getComponent(cc.Label).string = "x" + this.addGoldValue,
                this.passStarAction(),
                8 == SdkManager.getSysPlatform() && SdkManager.showBannerByBottom(wxBannerId)
            },
            onEnable: function() {
                this._super(this.node),
                this.GameBanner.active = !1
            },
            onDisable: function() {},
            onDestroy: function() {
                this._super(this.node),
                SdkManager.hideNativeBanner(),
                8 == SdkManager.getSysPlatform() && SdkManager.hideBanner()
            },
            passStarAction: function() {
                var e = a.getGrade();
                e > 2 && (this.mStar3.active = !0,
                this.mStar3.scale = 0),
                e > 1 && (this.mStar2.active = !0,
                this.mStar2.scale = 0),
                e > 0 && (this.mStar1.active = !0,
                this.mStar1.scale = 0),
                this.mStar1 && this.getStarAction(this.mStar1, 0, this.mStar1.position),
                this.mStar2 && this.getStarAction(this.mStar2, .25, this.mStar2.position),
                this.mStar3 && this.getStarAction(this.mStar3, .5, this.mStar3.position)
            },
            getStarAction: function(e, t, n) {
                var a = cc.delayTime(t)
                  , o = cc.scaleTo(.1, 3)
                  , i = cc.scaleTo(.1, 1)
                  , c = cc.callFunc(function() {
                    s.playEffect("sound_star");
                    var e = cc.instantiate(this.mPassPar);
                    e.position = n,
                    this.node.addChild(e),
                    e.getComponent(cc.ParticleSystem).resetSystem()
                }
                .bind(this))
                  , r = cc.sequence(a, o, i, c);
                e.runAction(r)
            },
            endStartSound: function() {},
            btnHomeCall: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        a.m_modeType == PT_Constant.MODE_ENDLESS ? cc.director.loadScene("PT_GameMain") : cc.director.loadScene("PT_GameMap")
                    }
                })
            },
            btnRefreshCall: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        o.GameRefresh(a.curLevel, function() {
                            cc.director.loadScene("PT_GamePage")
                        })
                    }
                })
            },
            btnNextCall: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        o.GameNext(a.curLevel + 1, function() {
                            cc.director.loadScene("PT_GamePage")
                        })
                    }
                })
            },
            btnGetTwoGoldAvdCall: function() {
                SdkManager.showRewardedVideoAd(wxVideoId, function(e) {
                    e && this.twoGoldFunc(2)
                }
                .bind(this))
            },
            twoGoldFunc: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                i.setGoldNum(i.getGoldNum() + parseInt(this.addGoldValue * e)),
                MyToast.showToast(this.node, cc.v2(0, 0), "\u83b7\u5f97" + parseInt(this.addGoldValue * e) + "\u91d1\u5e01", 2),
                this.mGoldWord.active = !1,
                this.mGoldAc.active = !1,
                this.mGoldLabel.active = !1,
                this.btnGetTwoGoldAvd.active = !1
            },
            avdShareCall: function() {
                SdkManager.shareVd(function(e) {
                    if (2 == e)
                        wkCommonScript.addToast({
                            str: "\u6ca1\u6709\u5f55\u5236\u89c6\u9891!"
                        });
                    else if (1 == e) {
                        var t = parseInt(lieyou.Props_Base_Gold);
                        wkCommonScript.addToast({
                            str: "\u5206\u4eab\u6210\u529f"
                        }),
                        wkCommonScript.addToast({
                            str: "\u83b7\u5f97" + t + "\u91d1\u5e01",
                            y: -150
                        });
                        var n = i.getGoldNum();
                        i.setGoldNum(n + t),
                        GameData_DrawLine.addGold(t)
                    } else
                        0 == e && wkCommonScript.addToast({
                            str: "\u5206\u4eab\u89c6\u9891\u5931\u8d25"
                        })
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_DialogPause: [function(e, t) {
        "use strict";
        cc._RF.push(t, "303093iiaNLkaTc4FlUbrp4", "PT_DialogPause");
        var n, a = e;
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var i = a("PT_ConfigGame")
          , s = a("PT_GameManag")
          , c = a("AudioManager")
          , r = a("PT_MyShare");
        cc.Class((o(n = {
            extends: cc.Component,
            properties: {
                btnMusic: cc.Node,
                btnSound: cc.Node,
                spLeft: {
                    default: null,
                    type: cc.Node
                },
                spBg: {
                    default: null,
                    type: cc.Node
                },
                btnMusicSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                btnSoundSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                SdkManager.pauseLuPing(),
                SdkManager.showSpotByPause(),
                "true" == r.getMusic() ? this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.btnMusicSpriteFrame[0] : this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.btnMusicSpriteFrame[1],
                "true" == r.getSound() ? this.btnSound.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[0] : this.btnSound.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[1],
                "true" == r.getSound() ? c.setSoundSilence(!1) : c.setSoundSilence(!0)
            },
            start: function() {
                this.loadScene()
            },
            onDestroy: function() {
                SdkManager.resumeLuPing()
            },
            loadScene: function() {
                var e = cc.winSize;
                if (parseInt(e.height / e.width) >= 2) {
                    var t = e.width / PT_Constant.SCENES_WIDTH;
                    this.spBg.scale = 1 / t
                }
                cc.winSize.width > PT_Constant.SCENES_WIDTH && (this.spLeft.x -= .5 * (cc.winSize.width - PT_Constant.SCENES_WIDTH))
            }
        }, "onDestroy", function() {
            i.isDialog = !1,
            SdkManager.hideNativeBanner()
        }),
        o(n, "btnContinueCall", function() {
            this.node.destroy()
        }),
        o(n, "btnHomeCall", function() {
            i.m_modeType == PT_Constant.MODE_ENDLESS ? cc.director.loadScene("PT_GameMain") : cc.director.loadScene("PT_GameMap")
        }),
        o(n, "btnRefreshCall", function() {
            s.GameRefresh(i.curLevel, function() {
                cc.director.loadScene("PT_GamePage")
            })
        }),
        o(n, "btnMusicCall", function(e) {
            var t = e.target;
            "true" == r.getMusic() ? (r.setMusic("false"),
            t.getComponent(cc.Sprite).spriteFrame = this.btnMusicSpriteFrame[1],
            c.stopMusic()) : (r.setMusic("true"),
            t.getComponent(cc.Sprite).spriteFrame = this.btnMusicSpriteFrame[0],
            c.playMusic("music_bg2", !0))
        }),
        o(n, "btnSoundCall", function(e) {
            var t = e.target;
            "true" == r.getSound() ? (r.setSound("false"),
            t.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[1],
            c.setSoundSilence(!0)) : (r.setSound("true"),
            t.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[0],
            c.setSoundSilence(!1))
        }),
        n)),
        cc._RF.pop()
    }
    , {}],
    PT_DialogResu: [function(e, t) {
        "use strict";
        cc._RF.push(t, "305efKE9A5NCrFc9Y8hpWlT", "PT_DialogResu");
        var n = e
          , a = n("PT_MyShare");
        cc.Class({
            extends: n("PT_MyDLayer"),
            properties: {
                mBtnAvd: {
                    default: null,
                    type: cc.Node
                },
                btnJump: {
                    default: null,
                    type: cc.Node
                },
                btnGold: {
                    default: null,
                    type: cc.Node
                },
                mGoldLabel: {
                    default: null,
                    type: cc.Node
                },
                mlabel: {
                    default: null,
                    type: cc.Node
                },
                mTopGoldLabel: cc.Label
            },
            onLoad: function() {
                this._super(this.node),
                this.m_TimeValue = 9,
                this.m_GoldResuValue = 3 * lieyou.Props_Base_Gold,
                this.mlabel.getComponent(cc.Label).string = "" + this.m_TimeValue,
                this.mGoldLabel.getComponent(cc.Label).string = "" + this.m_GoldResuValue,
                SdkManager.getHaveVideo() ? (this.mBtnAvd.active = !0,
                this.btnGold.active = !1) : (this.mBtnAvd.active = !0,
                this.btnGold.active = !1,
                this.btnGold.y = -167),
                this.schedule(this.upMlabel, 1),
                8 == SdkManager.getSysPlatform() && SdkManager.showBannerByBottom(wxBannerId)
            },
            start: function() {
                this.btnJump.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(1), cc.fadeIn(1))))
            },
            onEnable: function() {
                this._super(this.node)
            },
            onDestroy: function() {
                this._super(this.node),
                8 == SdkManager.getSysPlatform() && SdkManager.hideBanner()
            },
            upGoldLabel: function() {
                this.mTopGoldLabel.string = "" + FT_MyShare.getGoldNum()
            },
            upMlabel: function() {
                this.m_TimeValue--,
                this.mlabel.getComponent(cc.Label).string = "" + this.m_TimeValue,
                this.m_TimeValue <= 0 && (this.unschedule(this.upMlabel),
                cc.find("Canvas").getComponent("PT_GamePage").showDiaFailure(),
                this.node.destroy())
            },
            btnGoldCall: function() {
                a.getGoldNum() >= this.m_GoldResuValue ? (a.setGoldNum(a.getGoldNum() - this.m_GoldResuValue),
                cc.find("Canvas").getComponent("FT_GamePage").callVideo(1, 1)) : MyToast.showToast(this.node, cc.v2(0, 0), language.goldNotStr, 2)
            },
            btnAvdCall: function() {
                YYGGames.canShowReward() ? YYGGames.showReward({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll()
                    },
                    rewardComplete: function() {
                        cc.find("Canvas").getComponent("PT_GamePage").callVideo(1, 1)
                    },
                    rewardDismissed: function() {
                        YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward")
                    }
                }) : YYGGames.showTip("No Available Video")
            },
            btnJumpCall: function() {
                var e = this;
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        cc.find("Canvas").getComponent("PT_GamePage").showDiaFailure(),
                        e.node.destroy()
                    }
                })
            },
            btnCloseCall: function() {
                var e = this;
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        cc.find("Canvas").getComponent("PT_GamePage").showDiaFailure(),
                        e.node.destroy()
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_DialogSign: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30a0a1fbWNAqJ+85ZFWZcO6", "PT_DialogSign");
        var n = e
          , a = n("PT_MyShare");
        cc.Class({
            extends: n("PT_MyDLayer"),
            properties: {
                stageSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                spItem1: {
                    default: null,
                    type: cc.Node
                },
                spItem2: {
                    default: null,
                    type: cc.Node
                },
                spItem3: {
                    default: null,
                    type: cc.Node
                },
                spItem4: {
                    default: null,
                    type: cc.Node
                },
                spItem5: {
                    default: null,
                    type: cc.Node
                },
                spItem6: {
                    default: null,
                    type: cc.Node
                },
                spItem7: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this._super(this.node);
                var e = a.getTimeStr()
                  , t = a.getSingRecord()
                  , n = a.getSingDay()
                  , o = a.getSingDayReceive();
                if ("" == t)
                    a.setSingDay(1),
                    a.setSingRecord(e),
                    a.setSingDayReceive("false");
                else if (parseInt(e) != parseInt(t)) {
                    var i = parseInt(t) + 1;
                    n >= 7 || parseInt(e) != i || "false" == o ? a.setSingDay(1) : a.setSingDay(n + 1),
                    a.setSingRecord(e),
                    a.setSingDayReceive("false")
                }
                this.upItemUI(this.spItem1, 1, a.getSingDay(), a.getSingDayReceive()),
                this.upItemUI(this.spItem2, 2, a.getSingDay(), a.getSingDayReceive()),
                this.upItemUI(this.spItem3, 3, a.getSingDay(), a.getSingDayReceive()),
                this.upItemUI(this.spItem4, 4, a.getSingDay(), a.getSingDayReceive()),
                this.upItemUI(this.spItem5, 5, a.getSingDay(), a.getSingDayReceive()),
                this.upItemUI(this.spItem6, 6, a.getSingDay(), a.getSingDayReceive()),
                this.upItemUI(this.spItem7, 7, a.getSingDay(), a.getSingDayReceive())
            },
            start: function() {},
            onEnable: function() {
                this._super(this.node)
            },
            onDestroy: function() {
                this._super(this.node)
            },
            upItemUI: function(e, t, n, a) {
                var o = e.getChildByName("BtnOne")
                  , i = e.getChildByName("BtnTwo");
                if (t == n)
                    if ("true" == a) {
                        o.active = !1,
                        i.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[0],
                        i.getChildByName("sprec").active = !1,
                        o.off("click"),
                        i.off("click");
                        var s = i.getActionByTag(1001);
                        s && i.stopAction(s)
                    } else {
                        o.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[2],
                        i.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[4],
                        i.getChildByName("sprec").active = !0,
                        i.active = !0,
                        o.tag = t,
                        i.tag = t,
                        o.on("click", this.btnOneCall.bind(this), o),
                        i.on("click", this.btnTwoCall.bind(this), i);
                        var c = cc.repeatForever(cc.sequence(cc.scaleTo(1, .8), cc.scaleTo(.8, 1.05)));
                        c.tag = 1001,
                        i.runAction(c)
                    }
                else
                    t < n ? (o.active = !1,
                    i.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[0],
                    i.getChildByName("sprec").active = !1) : t > n && (o.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[1],
                    i.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[3],
                    i.getChildByName("sprec").active = !1,
                    i.active = !0);
                SdkManager.getHaveVideo() || (o.x = 135,
                o.active = !0,
                i.active = !1,
                i.getChildByName("sprec").active = !1,
                t == n ? "true" == a ? (o.scale = 1,
                o.stopAllActions(),
                o.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[0]) : o.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, .8), cc.scaleTo(.8, 1.05)))) : t < n ? o.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[0] : t > n && (o.getComponent(cc.Sprite).spriteFrame = this.stageSpriteFrame[1]))
            },
            getSpItemNode: function(e) {
                return 1 == e ? this.spItem1 : 2 == e ? this.spItem2 : 3 == e ? this.spItem3 : 4 == e ? this.spItem4 : 5 == e ? this.spItem5 : 6 == e ? this.spItem6 : this.spItem7
            },
            singReceiveNum: function(e, t) {
                a.setSingDayReceive("true"),
                this.upItemUI(this.getSpItemNode(e), e, e, "true"),
                t ? 1 == e ? (a.setGoldNum(a.getGoldNum() + 1e3),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1000" + language.goldStr, 2)) : 2 == e ? (a.setFindNum(a.getFindNum() + 2),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare4, 2)) : 3 == e ? (a.setRefreshNum(a.getRefreshNum() + 2),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare5, 2)) : 4 == e ? (a.setBombNum(a.getBombNum() + 2),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare6, 2)) : 5 == e ? (a.setBombNum(a.getBombNum() + 4),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "4" + language.getpropshare6, 2)) : 6 == e ? (a.setFindNum(a.getFindNum() + 2),
                a.setRefreshNum(a.getRefreshNum() + 2),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare5, 2),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare4, 2)
                }, this)))) : 7 == e && (a.setFindNum(a.getFindNum() + 2),
                a.setRefreshNum(a.getRefreshNum() + 2),
                a.setBombNum(a.getBombNum() + 2),
                a.setGoldNum(a.getGoldNum() + 4e3),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare6, 2),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare5, 2),
                    this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                        MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare4, 2),
                        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "4000" + language.goldStr, 2)
                        }, this)))
                    }, this)))
                }, this)))) : 1 == e ? (a.setGoldNum(a.getGoldNum() + 500),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "500" + language.goldStr, 2)) : 2 == e ? (a.setFindNum(a.getFindNum() + 1),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare4, 2)) : 3 == e ? (a.setRefreshNum(a.getRefreshNum() + 1),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare5, 2)) : 4 == e ? (a.setBombNum(a.getBombNum() + 1),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare6, 2)) : 5 == e ? (a.setBombNum(a.getBombNum() + 2),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2" + language.getpropshare6, 2)) : 6 == e ? (a.setFindNum(a.getFindNum() + 1),
                a.setRefreshNum(a.getRefreshNum() + 1),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare4, 2),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare5, 2)
                }, this)))) : 7 == e && (a.setFindNum(a.getFindNum() + 1),
                a.setRefreshNum(a.getRefreshNum() + 1),
                a.setBombNum(a.getBombNum() + 1),
                a.setGoldNum(a.getGoldNum() + 2e3),
                MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare6, 2),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare5, 2),
                    this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                        MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "1" + language.getpropshare4, 2),
                        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            MyToast.showToast(this.node, cc.v2(0, 0), language.getpropshare3 + "2000" + language.goldStr, 2)
                        }, this)))
                    }, this)))
                }, this))))
            },
            btnOneCall: function(e) {
                e.detail.node.off("click");
                var t = e.detail.node.tag;
                this.singReceiveNum(t, !1)
            },
            btnTwoCall: function(e) {
                var t = e.detail.node.tag
                  , n = e.detail.node;
                SdkManager.showRewardedVideoAd(wxVideoId, function(e) {
                    e && (n.off("click"),
                    this.singReceiveNum(t, !0))
                }
                .bind(this))
            },
            btnCloseCall: function() {
                this.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_DialogStore: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30860DiwYFD5qvnUHuOuBWW", "PT_DialogStore");
        var n = e
          , a = n("PT_MyShare");
        cc.Class({
            extends: n("PT_MyDLayer"),
            properties: {
                storeItemBtnFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                propItemBtnFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                storeConent: {
                    default: null,
                    type: cc.Node
                },
                propConent: {
                    default: null,
                    type: cc.Node
                },
                btnStore: {
                    default: null,
                    type: cc.Node
                },
                btnProp: {
                    default: null,
                    type: cc.Node
                },
                mGoldLabel: {
                    default: null,
                    type: cc.Node
                },
                mFindLabel: {
                    default: null,
                    type: cc.Node
                },
                mRefreshLabel: {
                    default: null,
                    type: cc.Node
                },
                mBombLabel: {
                    default: null,
                    type: cc.Node
                },
                mExchangeLabel: {
                    default: null,
                    type: cc.Node
                },
                mPiceLabel: {
                    default: null,
                    type: cc.Node
                },
                spFindIcon: {
                    default: null,
                    type: cc.Node
                },
                spRefreshIcon: {
                    default: null,
                    type: cc.Node
                },
                spBombIcon: {
                    default: null,
                    type: cc.Node
                },
                btnLeft: {
                    default: null,
                    type: cc.Node
                },
                btnReight: {
                    default: null,
                    type: cc.Node
                },
                btnExchange: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this._super(this.node),
                SdkManager.showMoreGameByIcon({
                    node: this.node,
                    x: -290,
                    y: 0
                }),
                SdkManager.showMoreGameByBanner({
                    node: this.node,
                    x: 0,
                    y: -590
                })
            },
            start: function() {
                this.m_Conent_Index = 0,
                this.m_Prop_Index = 0,
                this.m_ExchangeNum = 0,
                this.m_Prop_Pice = 500,
                this.mPiceLabel.getComponent(cc.Label).string = "x0",
                this.upItemUi()
            },
            onEnable: function() {
                this._super(this.node)
            },
            onDestroy: function() {
                this._super(this.node)
            },
            upItemUi: function() {
                0 == this.m_Conent_Index ? (this.storeConent.active = !0,
                this.propConent.active = !1,
                this.btnStore.getComponent(cc.Sprite).spriteFrame = this.storeItemBtnFrame[0],
                this.btnProp.getComponent(cc.Sprite).spriteFrame = this.propItemBtnFrame[1]) : (this.storeConent.active = !1,
                this.propConent.active = !0,
                this.btnStore.getComponent(cc.Sprite).spriteFrame = this.storeItemBtnFrame[1],
                this.btnProp.getComponent(cc.Sprite).spriteFrame = this.propItemBtnFrame[0],
                this.mExchangeLabel.getComponent(cc.Label).string = "x" + this.m_ExchangeNum,
                this.mPiceLabel.getComponent(cc.Label).string = "x" + parseInt(this.m_ExchangeNum * this.m_Prop_Pice),
                0 == this.m_Prop_Index ? (this.btnLeft.active = !1,
                this.btnReight.active = !0,
                this.spFindIcon.active = !0,
                this.spRefreshIcon.active = !1,
                this.spBombIcon.active = !1) : 1 == this.m_Prop_Index ? (this.btnLeft.active = !0,
                this.btnReight.active = !0,
                this.spFindIcon.active = !1,
                this.spRefreshIcon.active = !0,
                this.spBombIcon.active = !1) : (this.btnLeft.active = !0,
                this.btnReight.active = !1,
                this.spFindIcon.active = !1,
                this.spRefreshIcon.active = !1,
                this.spBombIcon.active = !0)),
                this.mGoldLabel.getComponent(cc.Label).string = "x" + a.getGoldNum(),
                this.mFindLabel.getComponent(cc.Label).string = "x" + a.getFindNum(),
                this.mRefreshLabel.getComponent(cc.Label).string = "x" + a.getRefreshNum(),
                this.mBombLabel.getComponent(cc.Label).string = "x" + a.getBombNum()
            },
            btnStoreCall: function() {
                this.m_Conent_Index = 0,
                this.upItemUi()
            },
            btnPropCall: function() {
                this.m_Conent_Index = 1,
                this.upItemUi()
            },
            btnLeftCall: function() {
                this.m_Prop_Index -= 1,
                this.upItemUi()
            },
            btnReightCall: function() {
                this.m_Prop_Index += 1,
                this.upItemUi()
            },
            btnDecreaseCall: function() {
                this.m_ExchangeNum > 0 && (this.m_ExchangeNum -= 1,
                this.mExchangeLabel.getComponent(cc.Label).string = "x" + this.m_ExchangeNum,
                this.mPiceLabel.getComponent(cc.Label).string = "x" + parseInt(this.m_ExchangeNum * this.m_Prop_Pice))
            },
            btnAddCall: function() {
                this.m_ExchangeNum += 1,
                this.mExchangeLabel.getComponent(cc.Label).string = "x" + this.m_ExchangeNum,
                this.mPiceLabel.getComponent(cc.Label).string = "x" + parseInt(this.m_ExchangeNum * this.m_Prop_Pice)
            },
            btnExchangeCall: function() {
                if (this.m_ExchangeNum > 0) {
                    var e = a.getGoldNum()
                      , t = parseInt(this.m_ExchangeNum * this.m_Prop_Pice);
                    e >= t ? (a.setGoldNum(a.getGoldNum() - t),
                    0 == this.m_Prop_Index ? a.setFindNum(a.getFindNum() + this.m_ExchangeNum) : 1 == this.m_Prop_Index ? a.setRefreshNum(a.getRefreshNum() + this.m_ExchangeNum) : a.setBombNum(a.getBombNum() + this.m_ExchangeNum),
                    this.m_ExchangeNum = 0,
                    this.upItemUi(),
                    MyToast.showToast(this.node, cc.v2(0, 0), "\u5151\u6362\u6210\u529f", 2)) : MyToast.showToast(this.node, cc.v2(0, 0), "\u91d1\u5e01\u4e0d\u8db3", 2)
                } else
                    MyToast.showToast(this.node, cc.v2(0, 0), "\u6570\u91cf\u4e3a0", 2)
            },
            btnBuy1Call: function() {},
            btnBuy2Call: function() {},
            btnBuy3Call: function() {},
            btnBuy4Call: function() {},
            btnCloseCall: function() {
                this.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_English: [function(e, t) {
        "use strict";
        cc._RF.push(t, "308ccZS+nhOyo2XDDRMtTbL", "PT_English"),
        t.exports = {
            GameName: "unroll",
            getpropshare1: "share num:",
            getpropshare2: "Share total num:5",
            getpropshare3: "get",
            getpropshare4: "find",
            getpropshare5: "refresh ",
            getpropshare6: "bomb",
            getpropshare7: "Sharing can reduce the difficulty of the game!",
            getpropshare8: "Receive props, reached the limit!",
            getpropshare9: "Share to the group and get rewards!",
            goldStr: "gold",
            goldNotStr: "not gold",
            rankingModeTitle: "Select mode",
            exchangeStr: "success",
            exchangeNumStr: "The number is 0",
            loadStr: "Loading...",
            videoStr1: "unfinished!",
            videoStr2: "Successful resurrection, get 30 seconds!",
            videoStr3: "Watch failure!"
        },
        cc._RF.pop()
    }
    , {}],
    PT_GameLoad: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f03bcbrWIlO2ZTWay/YHPSa", "PT_GameLoad"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                YYGGamesUtil.bodyStyle(750, 1334),
                YYGGamesUtil.init({
                    appID: "Pet-Connect-Match",
                    channel: 5,
                    gamedistributionId: "b4bbd6b806ef47fc990e8564014fae09",
                    gamemonetizeId: "x8x6yxamjfzf899ij1g5d5z3whb3ht5j"
                }, function() {
                    cc.director.loadScene("PT_GameMain")
                }, function() {
                    window.sound_flag = YYGGames.audioEngine.pause,
                    YYGGames.audioEngine.pause = !0,
                    cc.game.pause()
                }, function() {
                    YYGGames.audioEngine.pause = window.sound_flag,
                    cc.game.resume()
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_GameMain: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30f59rBiNxLRokuKOvx0aCL", "PT_GameMain");
        var n = e
          , a = n("PT_ConfigGame")
          , o = n("PT_MyShare")
          , i = n("PT_GameManag")
          , s = n("PT_JsonData")
          , c = n("AudioManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                spBg: cc.Node,
                spTitle: cc.Node,
                btnMusic: cc.Node,
                btnSound: cc.Node,
                btnAvd: cc.Node,
                GameBox1: cc.Node,
                GameBox2: cc.Node,
                mGoldLabel: cc.Label,
                btnMusicSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                },
                btnSoundSpriteFrame: {
                    default: [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                o.loadShare(),
                window.ISzhuye = !0,
                h5splash.hideLoading();
                var e = o.getTimeStr()
                  , t = o.getPropShareRecord();
                "" == t ? (o.setPropShareNum(0),
                o.setPropShareRecord(o.getTimeStr())) : parseInt(e) != parseInt(t) && (o.setPropShareNum(0),
                o.setPropShareRecord(o.getTimeStr())),
                SdkManager.getHaveVideo() ? this.btnAvd.active = !0 : this.btnAvd.active = !1,
                "true" == o.getMusic() ? this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.btnMusicSpriteFrame[0] : this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.btnMusicSpriteFrame[1],
                "true" == o.getSound() ? this.btnSound.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[0] : this.btnSound.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[1],
                "true" == o.getSound() ? c.setSoundSilence(!1) : c.setSoundSilence(!0),
                cc.sys.platform == cc.sys.OPPO_GAME || SdkManager.showBannerByBottom(wxBannerId),
                lieyou.Language_ch ? language = n("PT_Chinese") : language = n("PT_English")
            },
            start: function() {
                this.loadAction(),
                this.loadAudio(),
                this.loadScene(),
                this.upGoldLabel(),
                this.GameBox1.active = !1,
                this.GameBox2.active = !1,
                c.loadAudio("PetLLK/audio/sound_click"),
                cc.Button.prototype._onTouchBegan = function(e) {
                    this.interactable && this.enabledInHierarchy && ("mute" != this.music && c.playEffect(this.music || "sound_click"),
                    this._pressed = !0,
                    this._updateState(),
                    e.stopPropagation())
                }
                ,
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(e) {
                        console.error("t:   " + e),
                        27 != e && cc.macro.KEY.back
                    }
                }, this.node)
            },
            upGoldLabel: function() {
                this.mGoldLabel.string = "" + o.getGoldNum()
            },
            loadAudio: function() {
                c.loadAudio("PetLLK/audio/music_bg2", function() {
                    "true" == o.getMusic() && c.playMusic("music_bg2", !0)
                })
            },
            loadAction: function() {
                this.spTitle.runAction(cc.repeatForever(cc.jumpBy(1, cc.v2(0, 0), 5, 1)))
            },
            loadScene: function() {
                var e = cc.winSize;
                if (parseInt(e.height / e.width) >= 2) {
                    var t = e.width / PT_Constant.SCENES_WIDTH;
                    this.node.scale = t,
                    this.spBg.scale = 1 / t,
                    this.btnAvd.x += 30
                }
            },
            gotoGamePage: function() {
                s.loadResolveNames(a.getModeFileName(), function() {
                    1 == a.m_modeType || 2 == a.m_modeType || 5 == a.m_modeType ? a.levelTotalNum = 2 * s.getLevelSize() : a.levelTotalNum = s.getLevelSize();
                    var e = o.getMaxLevel(a.m_modeType);
                    i.GameStart(e, function() {
                        cc.director.loadScene("PT_GamePage", function() {
                            setTimeout(function() {
                                YYGGames.hideLoading()
                            }, 500)
                        })
                    })
                })
            },
            clickBtnPaly1: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        YYGGames.showLoading(),
                        cc.audioEngine.resumeAll(),
                        a.loadMap(PT_Constant.MODE_CLASSIC),
                        s.loadResolveNames(a.getModeFileName(), function() {
                            1 == a.m_modeType || 2 == a.m_modeType || 5 == a.m_modeType ? a.levelTotalNum = 2 * s.getLevelSize() : a.levelTotalNum = s.getLevelSize();
                            var e = o.getMaxLevel(a.m_modeType);
                            i.GameStart(e, function() {
                                cc.director.loadScene("PT_GameMap", function() {
                                    setTimeout(function() {
                                        YYGGames.hideLoading()
                                    }, 500)
                                })
                            })
                        })
                    }
                })
            },
            clickBtnPaly2: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        YYGGames.showLoading(),
                        cc.audioEngine.resumeAll(),
                        a.loadMap(PT_Constant.MODE_TIME),
                        s.loadResolveNames(a.getModeFileName(), function() {
                            1 == a.m_modeType || 2 == a.m_modeType || 5 == a.m_modeType ? a.levelTotalNum = 2 * s.getLevelSize() : a.levelTotalNum = s.getLevelSize();
                            var e = o.getMaxLevel(a.m_modeType);
                            i.GameStart(e, function() {
                                cc.director.loadScene("PT_GameMap", function() {
                                    setTimeout(function() {
                                        YYGGames.hideLoading()
                                    }, 500)
                                })
                            })
                        })
                    }
                })
            },
            clickBtnPaly3: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        YYGGames.showLoading(),
                        cc.audioEngine.resumeAll(),
                        a.loadMap(PT_Constant.MODE_ENDLESS),
                        s.loadResolveNames(a.getModeFileName(), function() {
                            var e = s.getLevelSize();
                            a.levelTotalNum = e,
                            i.GameStart(1, function() {
                                cc.director.loadScene("PT_GamePage", function() {
                                    setTimeout(function() {
                                        YYGGames.hideLoading()
                                    }, 500)
                                })
                            })
                        })
                    }
                })
            },
            clickBtnPaly4: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        YYGGames.showLoading(),
                        cc.audioEngine.resumeAll(),
                        a.loadMap(PT_Constant.MODE_NIGHT),
                        s.loadResolveNames(a.getModeFileName(), function() {
                            1 == a.m_modeType || 2 == a.m_modeType || 5 == a.m_modeType ? a.levelTotalNum = 2 * s.getLevelSize() : a.levelTotalNum = s.getLevelSize();
                            var e = o.getMaxLevel(a.m_modeType);
                            i.GameStart(e, function() {
                                cc.director.loadScene("PT_GameMap", function() {
                                    setTimeout(function() {
                                        YYGGames.hideLoading()
                                    }, 500)
                                })
                            })
                        })
                    }
                })
            },
            clickBtnPaly5: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        YYGGames.showLoading(),
                        cc.audioEngine.resumeAll(),
                        a.loadMap(PT_Constant.MODE_CASUAL),
                        s.loadResolveNames(a.getModeFileName(), function() {
                            1 == a.m_modeType || 2 == a.m_modeType || 5 == a.m_modeType ? a.levelTotalNum = 2 * s.getLevelSize() : a.levelTotalNum = s.getLevelSize();
                            var e = o.getMaxLevel(a.m_modeType);
                            i.GameStart(e, function() {
                                cc.director.loadScene("PT_GameMap", function() {
                                    setTimeout(function() {
                                        YYGGames.hideLoading()
                                    }, 500)
                                })
                            })
                        })
                    }
                })
            },
            clickBtnAvd: function() {
                SdkManager.showRewardedVideoAd(wxVideoId, function(e) {
                    if (e) {
                        var t = o.getGoldNum()
                          , n = parseInt(lieyou.Props_Base_Gold);
                        o.setGoldNum(t + n),
                        this.upGoldLabel(),
                        MyToast.showToast(cc.find("Canvas"), cc.v2(0, 0), "\u83b7\u5f97" + n + "\u91d1\u5e01", 2)
                    } else
                        MyToast.showToast(cc.find("Canvas"), cc.v2(0, 0), "\u672a\u83b7\u5f97", 2)
                }
                .bind(this))
            },
            clickBtnShare: function() {
                SdkManager.share({
                    name: GameName,
                    source: 2,
                    success: function() {}
                })
            },
            clickBtnRaking: function() {
                this.showDiaRanking()
            },
            clickBtnSound: function(e) {
                var t = e.target;
                "true" == o.getSound() ? (o.setSound("false"),
                t.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[1],
                c.setSoundSilence(!0)) : (o.setSound("true"),
                t.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[0],
                c.setSoundSilence(!1))
            },
            clickBtnMusic: function(e) {
                var t = e.target;
                "true" == o.getMusic() ? (o.setMusic("false"),
                t.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[1],
                c.stopMusic()) : (o.setMusic("true"),
                t.getComponent(cc.Sprite).spriteFrame = this.btnSoundSpriteFrame[0],
                c.playMusic("music_bg2", !0))
            },
            btnSingCall: function() {
                cc.loader.loadRes("PetLLK/prefab/DialogSign", function(e, t) {
                    var n = cc.instantiate(t);
                    n.name = "dialog",
                    this.node.addChild(n, 10)
                }
                .bind(this))
            },
            btnMoreCall: function() {
                SdkManager.showMoreGame()
            },
            btnBreakCall: function() {
                console.error("\u8fdb\u5165btnBreakCall"),
                c.stopMusic(),
                SdkManager.hideBanner(),
                SdkManager.backHome()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_GameManag: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30bc9NV/ChNYI9+2GtkevzM", "PT_GameManag");
        var n = e
          , a = t
          , o = n("PT_ConfigGame")
          , i = n("PT_JsonData")
          , s = {
            GameStart: function(e, t) {
                o.loadGame(e),
                i.addNamesArray(e),
                o.GameStart(),
                i.loadLevelIndex(o.curLevelIndex, function() {
                    o.loadBlockData(),
                    o.loadRandomColor(),
                    t && t()
                })
            },
            GameRefresh: function(e, t) {
                o.loadGame(e),
                i.addNamesArray(e),
                o.GameStart(),
                i.loadLevelIndex(o.curLevelIndex, function() {
                    o.loadBlockData(),
                    o.loadRandomColor(),
                    t && t()
                })
            },
            GameNext: function(e, t) {
                e > o.levelTotalNum ? o.m_modeType == PT_Constant.MODE_ENDLESS ? cc.director.loadScene("PT_GameMain") : cc.director.loadScene("PT_GameMap") : (o.loadGame(e),
                i.addNamesArray(e),
                o.GameStart(),
                i.loadLevelIndex(0, function() {
                    o.loadBlockData(),
                    o.loadRandomColor(),
                    t && t()
                }))
            },
            isGameSmallNext: function() {
                return o.curLevelIndex++,
                i.isSmallNext(o.curLevelIndex)
            },
            GameSmallNext: function(e, t) {
                o.loadGame(e),
                o.GameSmallNext(),
                i.loadLevelIndex(o.curLevelIndex, function() {
                    o.loadBlockData(),
                    o.loadRandomColor(),
                    t && t()
                })
            }
        };
        a.exports = s,
        cc._RF.pop()
    }
    , {}],
    PT_GameMap: [function(e, t) {
        "use strict";
        cc._RF.push(t, "305aalexa9PKppC6x3AuRS6", "PT_GameMap");
        var n = e
          , a = n("PT_ConfigGame")
          , o = n("PT_JsonData")
          , i = n("PT_MyShare")
          , s = n("PT_GameManag");
        cc.Class({
            extends: cc.Component,
            properties: {
                curNum: 1,
                totalNum: 160,
                curPage: 0,
                totalPage: 10,
                row_d: 4,
                col_d: 4,
                itemBtnWidth: 0,
                itemBtnHeight: 0,
                pageview: cc.PageView,
                pageLayer: cc.Prefab,
                levelBtn: cc.Prefab,
                titel: cc.Node,
                spBg: cc.Node,
                titelTextureName: {
                    type: cc.SpriteFrame,
                    default: []
                }
            },
            onLoad: function() {
                var e = this;
                this.pStags = [],
                this.pageStags = [],
                this.pStags.splice(0, this.pStags.length),
                this.pageStags.splice(0, this.pageStags.length),
                o.loadResolveNames(a.getModeFileName(), function() {
                    1 == a.m_modeType || 2 == a.m_modeType || 5 == a.m_modeType ? e.totalNum = 2 * o.getLevelSize() : e.totalNum = o.getLevelSize(),
                    a.levelTotalNum = e.totalNum,
                    e.curPage = parseInt((i.getMaxLevel(a.m_modeType) - 1) / (e.row_d * e.col_d)),
                    e.totalPage = parseInt(e.totalNum / (e.row_d * e.col_d)),
                    parseInt(e.totalPage * e.row_d * e.col_d) < e.totalNum && (e.totalPage += 1),
                    e.itemBtnWidth = e.pageview.node.width / e.row_d,
                    e.itemBtnHeight = e.pageview.node.height / e.col_d,
                    1 == a.m_modeType ? (e.titel.getComponent(cc.Sprite).spriteFrame = e.titelTextureName[parseInt(0)],
                    e.titel._contentSize.width = 345) : 2 == a.m_modeType ? (e.titel.getComponent(cc.Sprite).spriteFrame = e.titelTextureName[parseInt(1)],
                    e.titel._contentSize.width = 323) : 4 == a.m_modeType ? (e.titel.getComponent(cc.Sprite).spriteFrame = e.titelTextureName[parseInt(2)],
                    e.titel._contentSize.width = 275) : 5 == a.m_modeType && (e.titel.getComponent(cc.Sprite).spriteFrame = e.titelTextureName[parseInt(3)],
                    e.titel._contentSize.width = 258);
                    for (var t = 0; t < e.totalPage; t++)
                        e.pStags[t] = 0,
                        e.pageStags[t] = 0;
                    e.addPage1(),
                    e.addPageContainer(e.curPage - 1),
                    e.addPageContainer(e.curPage),
                    e.addPageContainer(e.curPage + 1),
                    e.pageview.scrollToPage(e.curPage)
                })
            },
            start: function() {
                this.loadScene(),
                window.ISzhuye = !1,
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(e) {
                        console.error("t1:   " + e),
                        27 != e && cc.macro.KEY.back
                    }
                }, this.node)
            },
            loadScene: function() {
                var e = cc.winSize;
                if (parseInt(e.height / e.width) >= 2) {
                    var t = e.width / PT_Constant.SCENES_WIDTH;
                    this.node.scale = t,
                    this.spBg.scale = 1 / t
                }
            },
            pageEvent: function() {
                var e = this.pageview.getCurrentPageIndex();
                this.addPageContainer(e - 1),
                this.addPageContainer(e + 1)
            },
            _createPage: function() {
                return cc.instantiate(this.pageLayer)
            },
            _createLevelBtn: function(e, t) {
                console.error("\u9009\u5173");
                var n = cc.instantiate(this.levelBtn);
                return n.position = e,
                n.getComponent("PT_LevelBtn").upLevelBtnUi(a.m_modeType, t),
                t <= i.getMaxLevel(a.m_modeType) && n.on("click", this.clickLevelCall, n),
                n
            },
            plusPage: function(e) {
                this.curPage > this.totalPage || (this.curPage++,
                e && e())
            },
            plusLevelBtn: function(e) {
                this.curNum > this.totalNum || (this.curNum++,
                e && e())
            },
            onAddLevelBtn: function(e) {
                for (var t = this, n = 0; n < this.col_d; n++)
                    for (var a = this.pageview.node.height - (this.itemBtnHeight * n + .5 * this.itemBtnHeight), o = 0; o < this.row_d; o++) {
                        var i = parseInt(e.name) * this.row_d * this.col_d + n * this.col_d + (o + 1)
                          , s = this.itemBtnWidth * o + .5 * this.itemBtnWidth;
                        this.plusLevelBtn(function() {
                            e.addChild(t._createLevelBtn(new cc.Vec2(s,a), i))
                        })
                    }
            },
            addPage1: function() {
                for (var e = 0; e < this.totalPage; e++) {
                    var t = this._createPage();
                    t && (t.name = e + "",
                    t.position = new cc.v2(-360,-400),
                    this.pageview.addPage(t),
                    this.pageStags[e] = t)
                }
            },
            addPageContainer: function(e) {
                if (!(e < 0 || e >= this.totalPage || 1 == this.pStags[e])) {
                    this.pStags[e] = 1;
                    var t = this.pageStags[e];
                    this.onAddLevelBtn(t),
                    cc.log("onLoad>>>>>1>>>" + e)
                }
            },
            clickLevelCall: function(e) {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        console.log("callback:" + parseInt(e.target.name)),
                        s.GameStart(parseInt(e.target.name), function() {
                            cc.director.loadScene("PT_GamePage")
                        })
                    }
                })
            },
            btnBackCall: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        cc.director.loadScene("PT_GameMain")
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_GamePage: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30b0dOx3HxC841Y6rRhg5Gc", "PT_GamePage");
        var n = e
          , a = n("PT_ConfigGame")
          , o = n("PT_BlockLink")
          , i = n("PT_BlockLine")
          , s = n("PT_BlockMove")
          , c = n("PT_MyShare")
          , r = n("PT_GameManag")
          , l = n("PT_PropsUse")
          , d = n("AudioManager");
        cc.Class({
            extends: cc.Component,
            properties: {
                spBg: cc.Node,
                contentNode: cc.Node,
                mBlock: cc.Prefab,
                mBlockBg: cc.Prefab,
                mAddScorLabel: cc.Prefab,
                mProgressBar: cc.ProgressBar,
                mLevelLabel: cc.Node,
                mScoreLabel: cc.Node,
                mFindBtn: cc.Node,
                mRefreshBtn: cc.Node,
                mBombBtn: cc.Node,
                spStart: cc.Node,
                mParLine: cc.Prefab,
                mSpAmin: cc.Prefab
            },
            onLoad: function() {
                d.loadAudio("PetLLK/audio/sound_readygo"),
                d.loadAudio("PetLLK/audio/sound_error"),
                d.loadAudio("PetLLK/audio/sound_select"),
                d.loadAudio("PetLLK/audio/sound_e_clean"),
                d.loadAudio("PetLLK/audio/sound_lose"),
                d.loadAudio("PetLLK/audio/sound_win"),
                d.loadAudio("PetLLK/audio/sound_refresh"),
                d.loadAudio("PetLLK/audio/sound_bomb"),
                d.loadAudio("PetLLK/audio/sound_star"),
                this.gameOver = 0,
                this.gameResu = 0
            },
            start: function() {
                this.loadScene(),
                this.initView(),
                this.startAction(),
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(e) {
                        console.error("t2:   " + e),
                        27 != e && cc.macro.KEY.back
                    }
                }, this.node);
                var e = a.sdkManagerGameAction();
                SdkManager.gameAction(e),
                SdkManager.gameBeginLevel(e, a.curLevel),
                SdkManager.addLuPingBtn({
                    node: cc.find("Canvas/luPing"),
                    callBack: function(e) {
                        if (2 == e)
                            wkCommonScript.addToast({
                                str: "\u5f55\u5c4f\u65f6\u95f4\u8fc7\u77ed!"
                            });
                        else if (1 == e) {
                            var t = parseInt(lieyou.Props_Base_Gold);
                            wkCommonScript.addToast({
                                str: "\u5206\u4eab\u6210\u529f"
                            }),
                            wkCommonScript.addToast({
                                str: "\u83b7\u5f97" + t + "\u91d1\u5e01",
                                y: -150
                            });
                            var n = c.getGoldNum();
                            c.setGoldNum(n + t),
                            GameData_DrawLine.addGold(t)
                        } else
                            0 == e && wkCommonScript.addToast({
                                str: "\u5206\u4eab\u89c6\u9891\u5931\u8d25"
                            })
                    }
                    .bind(this)
                }),
                8 == SdkManager.getSysPlatform() && SdkManager.hideBanner()
            },
            onDestroy: function() {
                SdkManager.stopLuPing(!1),
                8 == SdkManager.getSysPlatform() && SdkManager.showBannerByBottom(wxBannerId)
            },
            loadScene: function() {
                var e = cc.winSize;
                if (parseInt(e.height / e.width) >= 2) {
                    var t = e.width / PT_Constant.SCENES_WIDTH;
                    this.node.scale = t,
                    this.spBg.scale = 1 / t
                }
            },
            update: function() {
                !this.node.getChildByName("dialog") && a.isGameStart && (this.mProgressBar.progress -= 1 / 60 / a.totalTime,
                a.curTime = this.mProgressBar.progress,
                this.mProgressBar.progress <= 0 && this.showDiaResu())
            },
            initView: function() {
                this.mLevelLabel.getComponent(cc.Label).string = a.curLevel + "-" + (a.curLevelIndex + 1) + "-" + a.nameLevelTotal,
                this.mFindBtn.getChildByName("label").getComponent(cc.Label).string = c.getFindNum() + "",
                this.mRefreshBtn.getChildByName("label").getComponent(cc.Label).string = c.getRefreshNum() + "",
                this.mBombBtn.getChildByName("label").getComponent(cc.Label).string = c.getBombNum() + "",
                this.mScoreLabel.getComponent(cc.Label).string = a.curScore + "",
                this.upPropBtnStage()
            },
            upPropBtnStage: function() {
                c.getFindNum() > 0 ? this.mFindBtn.getChildByName("spadd").active && (this.mFindBtn.getChildByName("spadd").active = !1) : this.mFindBtn.getChildByName("spadd").active || (this.mFindBtn.getChildByName("spadd").active = !0),
                c.getRefreshNum() > 0 ? this.mRefreshBtn.getChildByName("spadd").active && (this.mRefreshBtn.getChildByName("spadd").active = !1) : this.mRefreshBtn.getChildByName("spadd").active || (this.mRefreshBtn.getChildByName("spadd").active = !0),
                c.getBombNum() > 0 ? this.mBombBtn.getChildByName("spadd").active && (this.mBombBtn.getChildByName("spadd").active = !1) : this.mBombBtn.getChildByName("spadd").active || (this.mBombBtn.getChildByName("spadd").active = !0)
            },
            startAction: function() {
                d.playEffect("sound_readygo");
                var e = cc.director.getWinSize();
                this.spStart.x = .8 * -e.width,
                this.spStart.active = !0;
                var t = cc.moveTo(.4, cc.v2(0, this.spStart.y))
                  , n = cc.delayTime(1)
                  , a = cc.moveTo(.3, cc.v2(.8 * e.width, this.spStart.y))
                  , o = cc.callFunc(this.startActionCall, this);
                this.spStart.runAction(cc.sequence(t, n, a, o))
            },
            startActionCall: function() {
                if (a.isGameStart = !0,
                this.spStart.active = !1,
                this.loadBlock(),
                SdkManager.getHaveVideo() && c.getMaxLevel(PT_Constant.MODE_CLASSIC) > 3 && 4 == parseInt(5 * Math.random() + 3)) {
                    var e = parseInt(3 * Math.random());
                    0 == e ? this.showDiaGetProp(0) : 1 == e ? this.showDiaGetProp(1) : 2 == e && this.showDiaGetProp(2)
                }
                this.isRefreshPie()
            },
            loadBlock: function() {
                for (var e = 0; e < a.row; e++)
                    for (var t = 0; t < a.col; t++) {
                        var n = this._createBlock(e, t);
                        n.getComponent("PT_Block").setProperties(e, t, a.getIndexColor(e, t)),
                        a.blockArray[e][t] = n,
                        a.getIndexColor(e, t) == PT_Constant.BLOCKDATA_COLOR_NONE ? n.getComponent("PT_Block").changeStage(PT_Constant.BLOCKDATA_STAGE_DEL) : n.getComponent("PT_Block").changeStage(PT_Constant.BLOCKDATA_STAGE_DEFAULT)
                    }
            },
            _createBlock: function(e, t) {
                var n = cc.instantiate(this.mBlock);
                return n.position = this.transformPos(e, t),
                n.scale = a.pieceW / n.width,
                this.contentNode.addChild(n),
                n
            },
            _createBlockBg: function(e, t) {
                var n = cc.instantiate(this.mBlockBg);
                return n.position = this.transformPos(e, t),
                this.contentNode.addChild(n),
                n
            },
            transformPos: function(e, t) {
                return cc.v2(a.pieceW * e + .5 * a.pieceW, a.pieceW * t + .5 * a.pieceW)
            },
            touchBlockCall: function(e) {
                var t = e.bInfo.m_color;
                console.error("\u70b9\u51fb\u70b8\u5f39:  " + a.isUseBomb),
                a.isUseBomb ? (a.isUseBomb = !1,
                this.propBombBox(t) && (d.playEffect("sound_bomb"),
                c.getBombNum() > 0 ? c.setBombNum(c.getBombNum() - 1) : c.setBombNum(0),
                this.mBombBtn.getChildByName("label").getComponent(cc.Label).string = c.getBombNum() + "",
                this.upPropBtnStage()),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    a.isUseProp = !1
                }
                .bind(this)))),
                console.error("\u70b9\u51fb\u70b8\u5f391:  " + c.getBombNum())) : (console.error("\u70b9\u51fb\u70b8\u5f392:  " + c.getBombNum()),
                this.touchDown(e))
            },
            touchDown: function(e) {
                if (console.error("\u6ca1\u70b8\u5f39"),
                !e.isBlockStage(PT_Constant.BLOCKDATA_STAGE_SELECT)) {
                    e.changeStage(PT_Constant.BLOCKDATA_STAGE_SELECT);
                    for (var t = !1, n = 0; n < a.selectArrays.length; n++)
                        if (null != (i = a.selectArrays[n]).Block1 && null == i.Block2) {
                            t = !0,
                            this.matchSelectArr(i, e);
                            break
                        }
                    if (!t)
                        for (var o = 0; o < a.selectArrays.length; o++) {
                            var i;
                            if (null == (i = a.selectArrays[o]).Block1 && null == i.Block2) {
                                this.matchSelectArr(i, e);
                                break
                            }
                        }
                }
            },
            matchSelectArr: function(e, t) {
                if (null == e.Block1)
                    return e.Block1 = t,
                    void d.playEffect("sound_select");
                if (null == e.Block2) {
                    e.Block2 = t;
                    var n = e.Block1.bInfo
                      , a = e.Block2.bInfo;
                    if (n.m_color == a.m_color) {
                        var s = {
                            m_idxI: n.m_idxI,
                            m_idxJ: n.m_idxJ,
                            m_color: n.m_color,
                            m_select: !0
                        }
                          , c = {
                            m_idxI: a.m_idxI,
                            m_idxJ: a.m_idxJ,
                            m_color: a.m_color,
                            m_select: !0
                        }
                          , r = o.link(s, c);
                        if (r.length > 0) {
                            d.playEffect("sound_e_clean");
                            var l = i.CalculatePoint(r);
                            this.lightLine(l, r.length, e)
                        } else
                            d.playEffect("sound_error"),
                            this.RestoreBlock(e)
                    } else
                        d.playEffect("sound_error"),
                        this.RestoreBlock(e)
                }
            },
            removeSelectArray: function() {
                for (var e = 0; e < a.selectArrays.length; e++) {
                    var t = a.selectArrays[e];
                    null != t.Block1 && (t.Block1.changeStage(PT_Constant.BLOCKDATA_STAGE_DEFAULT),
                    t.Block1 = null),
                    null != t.Block2 && (t.Block2.changeStage(PT_Constant.BLOCKDATA_STAGE_DEFAULT),
                    t.Block2 = null)
                }
            },
            RestoreSelectArray: function(e) {
                e.Block1 = null,
                e.Block2 = null
            },
            RestoreBlock: function(e) {
                e.Block1.changeStage(PT_Constant.BLOCKDATA_STAGE_DEFAULT),
                e.Block1 = e.Block2,
                e.Block2 = null
            },
            cleanBlock: function(e) {
                var t = e.Block1.bInfo
                  , n = e.Block2.bInfo;
                a.m_modeType == PT_Constant.MODE_TIME && this.addSecondAction(),
                this.addScore(e.Block2.node.position, 200),
                a.blockColor[t.m_idxI][t.m_idxJ] = PT_Constant.BLOCKDATA_COLOR_NONE,
                e.Block1.changeStage(PT_Constant.BLOCKDATA_STAGE_DEL),
                a.blockColor[n.m_idxI][n.m_idxJ] = PT_Constant.BLOCKDATA_COLOR_NONE,
                e.Block2.changeStage(PT_Constant.BLOCKDATA_STAGE_DEL)
            },
            lightLine: function(e, t, n) {
                var a = n.Block1.bInfo
                  , o = n.Block2.bInfo
                  , i = {
                    m_idxI: a.m_idxI,
                    m_idxJ: a.m_idxJ,
                    m_color: a.m_color,
                    m_select: !0
                }
                  , s = {
                    m_idxI: o.m_idxI,
                    m_idxJ: o.m_idxJ,
                    m_color: o.m_color,
                    m_select: !0
                }
                  , c = cc.instantiate(this.mBlockBg);
                this.contentNode.addChild(c);
                for (var r = 0; r < e.length; r++) {
                    var l = e[r];
                    if (r + 1 < e.length) {
                        var d = e[r + 1]
                          , h = parseInt(l.y) == parseInt(d.y)
                          , u = cc.instantiate(this.mParLine);
                        u.position = l.add(d).mul(.5),
                        u.rotation = h ? 90 : 0,
                        c.addChild(u)
                    }
                }
                var m = e[0]
                  , p = cc.instantiate(this.mSpAmin);
                p.position = cc.v2(m.x - 20, m.y),
                this.contentNode.addChild(p, 102),
                p.getComponent(cc.Animation).play("testamin"),
                p.runAction(cc.sequence(cc.delayTime(.45), cc.removeSelf()));
                var f = e[e.length - 1]
                  , g = cc.instantiate(this.mSpAmin);
                g.position = cc.v2(f.x - 20, f.y),
                this.contentNode.addChild(g, 102),
                g.getComponent(cc.Animation).play("testamin"),
                g.runAction(cc.sequence(cc.delayTime(.45), cc.removeSelf())),
                c.runAction(cc.sequence(cc.spawn(cc.delayTime(.25), cc.fadeTo(.25, 0)), cc.callFunc(function() {
                    var e = this.getVectorPie(i, s);
                    this.cleanBlock(n),
                    this.RestoreSelectArray(n),
                    this.movePieceAction(e)
                }, this), cc.removeSelf()))
            },
            getVectorPie: function(e, t) {
                var n = [];
                return n.push(e),
                n.push(t),
                n
            },
            movePieceAction: function(e) {
                var t = 0;
                if (a.xgravityline > 20 || a.ygravityline > 20)
                    if (a.xgravityline < 25 && a.ygravityline < 25)
                        (c = s.moveDirectionManage()).length > 0 && this.movePieceAction2(c, t);
                    else {
                        var n = s.getStrandPieSwpInfo(a.sbInFo.m_srcI, a.sbInFo.m_srcJ, a.sbInFo.m_Direction)
                          , o = s.getStrandNoneIndex(n)
                          , i = s.isStrandNoneEnd(n, o);
                        -1 != o && i && (c = s.strandDirectionManage(n, o, i)).length > 0 && (this.movePieceAction1(c, t),
                        t += .21)
                    }
                else {
                    var c;
                    t = 0,
                    (c = s.separateDirectionManageLift_Right(e)).length > 0 && (this.movePieceAction1(c, t),
                    t += .25);
                    var r = s.separateDirectionManageUp_Down(e);
                    r.length > 0 && (this.movePieceAction1(r, t),
                    t += .25);
                    var l = s.separateDirectionManageEnd();
                    l.length > 0 && (this.movePieceAction1(l, t),
                    t += .25)
                }
                this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(this.movePieceActionCall.bind(this))))
            },
            movePieceActionCall: function() {
                if (a.xgravityline >= 25 || a.ygravityline >= 25) {
                    var e = s.getStrandPieSwpInfo(a.sbInFo.m_srcI, a.sbInFo.m_srcJ, a.sbInFo.m_Direction)
                      , t = s.getStrandNoneIndex(e)
                      , n = s.isStrandNoneEnd(e, t);
                    if (-1 != t && n)
                        return void this.movePieceAction([])
                }
                this.boxEnd()
            },
            boxEnd: function() {
                if (this.isGameResult())
                    a.m_modeType == PT_Constant.MODE_NIGHT && (a.clealCont++,
                    a.clealCont % 4 == 0 && this.addPiece()),
                    this.isRefreshPie();
                else if (r.isGameSmallNext())
                    r.GameSmallNext(a.curLevel, function() {
                        cc.director.loadScene("PT_GamePage")
                    });
                else {
                    this.showDiaPass();
                    var e = a.curLevel + 1
                      , t = c.getLevelStar(a.m_modeType, a.curLevel)
                      , n = c.getLevelLock(a.m_modeType, e)
                      , o = a.getGrade();
                    !n && a.curLevel < a.levelTotalNum && (c.setLevelLock(a.m_modeType, e),
                    c.setMaxLevel(a.m_modeType, e)),
                    t < o && c.setLevelStar(a.m_modeType, a.curLevel, o),
                    c.getMaxScore(a.m_modeType) < a.curScore && c.setMaxScore(a.m_modeType, a.curScore)
                }
            },
            addPiece: function() {
                for (var e = l.addPieceindex(1), t = 0; t < e.length; t++) {
                    var n = e[t]
                      , o = n.m_idxI
                      , i = n.m_idxJ
                      , s = n.m_color;
                    a.blockColor[o][i] = s;
                    var c = a.blockArray[o][i];
                    c.getComponent("PT_Block").setProperties(o, i, s),
                    c.getComponent("PT_Block").changeStage(PT_Constant.BLOCKDATA_STAGE_DEFAULT),
                    c.active = !0
                }
                this.movePieceAction(e)
            },
            addSecondAction: function() {
                this.mProgressBar.progress += PT_Constant.GAME_COMBO_ADD_TIME * (5 / 60),
                this.mProgressBar.progress > 1 && (this.mProgressBar.progress = 1)
            },
            addScore: function(e, t) {
                a.curScore += t;
                var n = cc.instantiate(this.mAddScorLabel);
                n.position = e,
                this.contentNode.addChild(n, 5),
                n.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, a.pieceH)), cc.removeSelf())),
                this.mScoreLabel.getComponent(cc.Label).string = a.curScore + ""
            },
            isRefreshPie: function() {
                if (!l.isRefresh()) {
                    if (this.propRefreshBox())
                        return console.log("isRefreshPie>>>>>>>>>>>\u5237\u65b0\u6210\u529f"),
                        this.isRefreshPie();
                    console.log("isRefreshPie>>>>>>>>>>>\u5237\u65b0\u5931\u8d25")
                }
            },
            movePieceAction2: function(e, t) {
                if (e.length > 0) {
                    for (var n = [], o = [], i = 0; i < e.length; i++) {
                        var s = (D = e[i]).m_dc
                          , c = D.m_srcI
                          , r = D.m_srcJ;
                        7 == s && (n.push(a.blockArray[c][r]),
                        o.push(a.blockArray[c][r]))
                    }
                    for (var l = 0; l < e.length; l++) {
                        c = (D = e[l]).m_srcI,
                        r = D.m_srcJ;
                        var d = D.m_dscI
                          , h = D.m_dscJ
                          , u = a.blockArray[c][r]
                          , m = a.rGameBox.xMin + .5 * a.pieceW + d * a.pieceW
                          , p = a.rGameBox.yMin + .5 * a.pieceH + h * a.pieceH;
                        if (a.curLevel % 4 == 0) {
                            var f = cc.moveTo(.2, cc.v2(m, p))
                              , g = cc.delayTime(t);
                            u.runAction(cc.sequence(g, f))
                        } else if (7 != s)
                            f = cc.moveTo(.2, cc.v2(m, p)),
                            g = cc.delayTime(t),
                            u.runAction(cc.sequence(g, f));
                        else {
                            var _ = u.getScaleX()
                              , v = u.getScaleY()
                              , w = cc.scaleTo(.1, 0)
                              , S = (f = cc.moveTo(.02, cc.v2(m, p)),
                            cc.scaleTo(.13, _, v));
                            g = cc.delayTime(t),
                            u.runAction(cc.sequence(w, g, f, S))
                        }
                    }
                    for (var y = 0; y < e.length; y++)
                        if (s = (D = e[y]).m_dc,
                        c = D.m_srcI,
                        r = D.m_srcJ,
                        d = D.m_dscI,
                        h = D.m_dscJ,
                        7 != s) {
                            var C = a.blockArray[c][r]
                              , I = a.blockArray[d][h];
                            a.blockColor[c][r],
                            a.blockColor[d][h],
                            a.blockArray[c][r] = I,
                            a.blockArray[d][h] = C,
                            C.getComponent("PT_Block").setBInFo(d, h),
                            I.getComponent("PT_Block").setBInFo(c, r)
                        }
                    for (var T = 0, B = 0; B < e.length; B++) {
                        var D;
                        s = (D = e[B]).m_dc,
                        c = D.m_srcI,
                        r = D.m_srcJ,
                        d = D.m_dscI,
                        h = D.m_dscJ,
                        7 == s && T < n.length && (u = n[T],
                        a.blockArray[d][h] = u,
                        u.getComponent("PT_Block").setBInFo(d, h),
                        T++)
                    }
                }
            },
            movePieceAction1: function(e, t) {
                if (e.length > 0) {
                    for (var n = 0; n < e.length; n++) {
                        (m = e[n]).m_dc;
                        var o = m.m_srcI
                          , i = m.m_srcJ
                          , s = m.m_dscI
                          , c = m.m_dscJ
                          , r = a.blockArray[o][i]
                          , l = a.blockArray[s][c];
                        a.blockColor[o][i],
                        a.blockColor[s][c],
                        a.blockArray[o][i] = l,
                        a.blockArray[s][c] = r,
                        r.getComponent("PT_Block").setBInFo(s, c),
                        l.getComponent("PT_Block").setBInFo(o, i);
                        var d = a.rGameBox.xMin + .5 * a.pieceW + o * a.pieceW
                          , h = a.rGameBox.yMin + .5 * a.pieceH + i * a.pieceH;
                        l.position = cc.v2(d, h)
                    }
                    for (var u = 0; u < e.length; u++) {
                        (m = e[u]).m_dc,
                        o = m.m_srcI,
                        i = m.m_srcJ,
                        s = m.m_dscI,
                        c = m.m_dscJ,
                        l = a.blockArray[s][c],
                        d = a.rGameBox.xMin + .5 * a.pieceW + s * a.pieceW,
                        h = a.rGameBox.yMin + .5 * a.pieceH + c * a.pieceH;
                        var m, p = cc.moveTo(.2, cc.v2(d, h)), f = cc.delayTime(t);
                        l.runAction(cc.sequence(f, p))
                    }
                }
            },
            isGameResult: function() {
                for (var e = a.col - 1; e >= 0; e--)
                    for (var t = 0; t < a.row; t++)
                        if (!a.blockArray[t][e].getComponent("PT_Block").isBlockStage(PT_Constant.BLOCKDATA_STAGE_DEL))
                            return !0;
                return !1
            },
            MyRewardFuc: function() {
                var e = this;
                YYGGames.canShowReward() ? YYGGames.showReward({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll()
                    },
                    rewardComplete: function() {
                        a.isUseProp || (a.isUseProp = !0,
                        e.propFindBox() && (e.mFindBtn.getChildByName("label").getComponent(cc.Label).string = c.getFindNum() + "",
                        e.upPropBtnStage()),
                        e.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            a.isUseProp = !1
                        }
                        .bind(e)))))
                    },
                    rewardDismissed: function() {
                        YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward")
                    }
                }) : YYGGames.showTip("No Available Video")
            },
            FindPropUse: function() {
                c.getFindNum() > 0 ? a.isUseProp || (a.isUseProp = !0,
                this.propFindBox() && (c.setFindNum(c.getFindNum() - 1),
                this.mFindBtn.getChildByName("label").getComponent(cc.Label).string = c.getFindNum() + "",
                this.upPropBtnStage()),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    a.isUseProp = !1
                }
                .bind(this))))) : this.MyRewardFuc()
            },
            propFindBox: function() {
                this.removeSelectArray();
                var e = l.propsFind();
                if (e.length > 1) {
                    for (var t = a.selectArrays[0], n = 0; n < e.length; n++) {
                        var o = e[n]
                          , i = a.blockArray[o.m_idxI][o.m_idxJ].getComponent("PT_Block");
                        this.matchSelectArr(t, i)
                    }
                    return !0
                }
                return !1
            },
            MYRefreshPropUse: function() {
                var e = this;
                YYGGames.canShowReward() ? YYGGames.showReward({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll()
                    },
                    rewardComplete: function() {
                        a.isUseProp || (a.isUseProp = !0,
                        e.propRefreshBox() && (d.playEffect("sound_refresh"),
                        e.mRefreshBtn.getChildByName("label").getComponent(cc.Label).string = c.getRefreshNum() + "",
                        e.upPropBtnStage()),
                        e.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            a.isUseProp = !1
                        }
                        .bind(e)))))
                    },
                    rewardDismissed: function() {
                        YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward")
                    }
                }) : YYGGames.showTip("No Available Video")
            },
            RefreshPropUse: function() {
                c.getRefreshNum() > 0 ? a.isUseProp || (a.isUseProp = !0,
                this.propRefreshBox() && (d.playEffect("sound_refresh"),
                c.setRefreshNum(c.getRefreshNum() - 1),
                this.mRefreshBtn.getChildByName("label").getComponent(cc.Label).string = c.getRefreshNum() + "",
                this.upPropBtnStage()),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    a.isUseProp = !1
                }
                .bind(this))))) : this.MYRefreshPropUse()
            },
            propRefreshBox: function() {
                this.removeSelectArray();
                var e = l.getNormalPiece1()
                  , t = l.refreshPiece(e)
                  , n = e.length;
                if (n > 0) {
                    for (var o = 0; o < n; o++) {
                        var i = e[o]
                          , s = t[o]
                          , c = i.m_idxI
                          , r = i.m_idxJ
                          , d = (i.m_color,
                        s.m_color)
                          , h = a.blockArray[c][r];
                        a.blockColor[c][r] = d,
                        h.getComponent("PT_Block").setProperties(c, r, d),
                        h.getComponent("PT_Block").changeStage(PT_Constant.BLOCKDATA_STAGE_DEFAULT)
                    }
                    return !0
                }
                return !1
            },
            MYBombPropUse: function() {
                YYGGames.canShowReward() ? YYGGames.showReward({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll()
                    },
                    rewardComplete: function() {
                        a.isUseProp || (a.isUseProp = !0,
                        a.isUseBomb = !0)
                    },
                    rewardDismissed: function() {
                        YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward")
                    }
                }) : YYGGames.showTip("No Available Video")
            },
            BombPropUse: function() {
                c.getBombNum() > 0 ? a.isUseProp || (a.isUseProp = !0,
                a.isUseBomb = !0) : this.MYBombPropUse()
            },
            propBombBox: function(e) {
                this.removeSelectArray();
                var t = l.propsBomb(e);
                if (t.length > 1)
                    for (var n = 0, o = 0; o < a.selectArrays.length; o++) {
                        var i = a.selectArrays[o];
                        if (null == i.Block1 && null == i.Block2) {
                            if (t.length > n) {
                                var s = t[n]
                                  , c = a.blockArray[s.m_idxI][s.m_idxJ].getComponent("PT_Block");
                                i.Block1 = c,
                                n++
                            }
                            if (t.length > n) {
                                var r = t[n]
                                  , d = a.blockArray[r.m_idxI][r.m_idxJ].getComponent("PT_Block");
                                i.Block2 = d,
                                n++
                            }
                            var h = {
                                m_idxI: i.Block1.bInfo.m_idxI,
                                m_idxJ: i.Block1.bInfo.m_idxJ,
                                m_color: i.Block1.bInfo.m_color,
                                m_select: !0
                            }
                              , u = {
                                m_idxI: i.Block2.bInfo.m_idxI,
                                m_idxJ: i.Block2.bInfo.m_idxJ,
                                m_color: i.Block2.bInfo.m_color,
                                m_select: !0
                            }
                              , m = this.getVectorPie(h, u);
                            if (this.cleanBlock(i),
                            this.RestoreSelectArray(i),
                            n >= t.length - 1)
                                return this.movePieceAction(m),
                                !0
                        }
                    }
                return !1
            },
            clickBtnPause: function() {
                this.showDiaPause()
            },
            clickBtnHome: function() {
                YYGGames.showInterstitial({
                    beforeShowAd: function() {
                        cc.audioEngine.pauseAll()
                    },
                    afterShowAd: function() {
                        cc.audioEngine.resumeAll(),
                        a.m_modeType == PT_Constant.MODE_ENDLESS ? cc.director.loadScene("PT_GameMain") : cc.director.loadScene("PT_GameMap")
                    }
                })
            },
            clickBtnFind: function() {
                this.FindPropUse()
            },
            clickBtnRefresh: function() {
                this.RefreshPropUse()
            },
            clickBtnBomb: function() {
                this.BombPropUse()
            },
            callVideo: function() {
                this.node.getChildByName("dialog").destroy(),
                this.adveCallS(),
                MyToast.showToast(this.node, cc.v2(0, 0), "Revive success", 2)
            },
            adveCallS: function() {
                this.gameResu = 0,
                this.mProgressBar.progress += PT_Constant.GAME_RESU_ADD_TIME * (PT_Constant.GAME_RESU_ADD_TIME / 60),
                this.mProgressBar.progress > 1 && (this.mProgressBar.progress = 1)
            },
            showDiaPause: function() {
                console.error("\u8fdb\u5165showDiaPause"),
                cc.loader.loadRes("PetLLK/prefab/DialogPause", function(e, t) {
                    var n = cc.instantiate(t);
                    n.name = "dialog",
                    this.node.addChild(n, 10)
                }
                .bind(this))
            },
            showDiaResu: function() {
                1 != this.gameResu && (SdkManager.stopLuPing(!1),
                this.gameResu = 1,
                cc.loader.loadRes("PetLLK/prefab/DialogResu", function(e, t) {
                    var n = cc.instantiate(t);
                    n.name = "dialog",
                    this.node.addChild(n, 10)
                }
                .bind(this)))
            },
            showDiaFailure: function() {
                if (1 != this.gameOver) {
                    SdkManager.stopLuPing(!1);
                    var e = a.sdkManagerGameAction();
                    SdkManager.gameFailLevel(e, a.curLevel),
                    this.gameOver = 1,
                    d.playEffect("sound_lose"),
                    cc.loader.loadRes("PetLLK/prefab/DialogFailure", function(e, t) {
                        var n = cc.instantiate(t);
                        n.name = "dialog",
                        this.node.addChild(n, 10)
                    }
                    .bind(this)),
                    console.error("\u8fd9\u91cc?"),
                    c.getMaxScore(a.m_modeType) < a.curScore && c.setMaxScore(a.m_modeType, a.curScore),
                    console.error("\u8fd9\u91cc1? : " + i + "     " + a.curScore)
                }
            },
            showDiaPass: function() {
                if (1 != this.gameOver) {
                    SdkManager.stopLuPing(!1);
                    var e = a.sdkManagerGameAction();
                    SdkManager.gameFinishLevel(e, a.curLevel),
                    this.gameOver = 1,
                    d.playEffect("sound_win"),
                    cc.loader.loadRes("PetLLK/prefab/DialogPass", function(e, t) {
                        var n = cc.instantiate(t);
                        n.name = "dialog",
                        this.node.addChild(n, 10)
                    }
                    .bind(this))
                }
            },
            showDiaGetProp: function(e) {
                cc.loader.loadRes("PetLLK/prefab/DialogGetProp", function(t, n) {
                    var a = cc.instantiate(n);
                    a.name = "dialog",
                    this.node.addChild(a, 10),
                    a.getComponent("PT_DialogGetProp").upPropUi(e)
                }
                .bind(this))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_JsonData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30d2bwCqutMLpnhm7wez4Wv", "PT_JsonData");
        var n = e
          , a = t
          , o = n("PT_ConfigGame")
          , i = n("Dictionary")
          , s = n("PT_MyShare")
          , c = {
            _levelList: new i,
            _levelNames: [],
            getLevelSize: function() {
                return this._levelList.size()
            },
            loadResolveNames: function(e, t) {
                cc.loader.loadRes(e, function(e, n) {
                    if (e)
                        console.error(e.message || e);
                    else {
                        for (var a = 1; a < 500 && null != n.json[a]; a++)
                            this._levelList.set(a, n.json[a]);
                        t && t()
                    }
                }
                .bind(this))
            },
            addNamesArray: function(e) {
                var t = e;
                1 != o.m_modeType && 2 != o.m_modeType && 5 != o.m_modeType || (t = e % 2 == 0 ? parseInt(e / 2) : parseInt(e / 2) + 1),
                s.setResuShareNum(0),
                s.getFindNum() <= 1 && s.getRefreshNum() <= 1 && s.getBombNum() <= 1 && (s.setFindNum(1),
                s.setRefreshNum(1),
                s.setBombNum(1)),
                o.mFindnum = 1,
                o.mRefreshnum = 1,
                o.mBombnum = 1,
                this._levelNames.splice(0, this._levelNames.length);
                for (var n = this._levelList.get(t).filename.split(","), a = 0; a < n.length; a++)
                    this._levelNames.push(n[a]);
                o.nameLevelTotal = this._levelNames.length
            },
            isSmallNext: function(e) {
                return e < this._levelNames.length
            },
            loadLevelIndex: function(e, t) {
                if (this.isSmallNext(e)) {
                    var n = "PetLLK/data/level/" + this._levelNames[e] + ".json";
                    this.loadResolve(n, t)
                }
            },
            loadResolve: function(e, t) {
                cc.loader.loadRes(e, function(e, n) {
                    if (e)
                        console.error(e.message || e);
                    else {
                        var a = n.json;
                        o.totalTime = a.time,
                        o.xgravityline = a.xgravityline,
                        o.ygravityline = a.ygravityline,
                        o.row = a.col_d,
                        o.col = a.row_d;
                        var i = a.maps.split(",");
                        o.m_modeType == PT_Constant.MODE_TIME && (o.totalTime = 15);
                        for (var s = 0, c = 0, r = o.col - 1; r >= 0; r--)
                            for (var l = 0; l < o.row; l++)
                                o.blockMapArray[l][r] = i[s],
                                0 == i[s] && c++,
                                s++;
                        if (c > 0 && c % 2 != 0) {
                            var d = !1;
                            for (r = o.col - 1; r >= 0; r--) {
                                for (l = 0; l < o.row; l++) {
                                    if (0 == i[s]) {
                                        o.blockMapArray[l][r] = 1,
                                        d = !0;
                                        break
                                    }
                                    s++
                                }
                                if (d)
                                    break
                            }
                        }
                        if (o.m_modeType == PT_Constant.MODE_TIME ? o.totalTime = 15 : o.totalTime = parseInt((s - c) * (.5 * Math.random() + 1.5)),
                        o.curLevel % 2 == 0 && (o.m_modeType == PT_Constant.MODE_CLASSIC || o.m_modeType == PT_Constant.MODE_TIME || o.m_modeType == PT_Constant.MODE_CASUAL)) {
                            var h = c > 0 ? 4 : 8
                              , u = parseInt(Math.random() * h + 21);
                            if (u > 20 && u < 25)
                                u > 22 ? (o.xgravityline = -1,
                                o.ygravityline = u) : (o.xgravityline = u,
                                o.ygravityline = -1);
                            else {
                                var m = Math.random();
                                o.sbInFo.m_Direction = m > .5 ? PT_Constant.SD_SU : PT_Constant.SD_HENG,
                                u > 24 && u < 29 && (o.xgravityline = u,
                                o.ygravityline = -1,
                                25 == u ? (o.sbInFo.m_srcI = 0,
                                o.sbInFo.m_srcJ = 0) : 26 == u ? (o.sbInFo.m_srcI = o.row - 1,
                                o.sbInFo.m_srcJ = 0) : 27 == u ? (o.sbInFo.m_srcI = 0,
                                o.sbInFo.m_srcJ = o.col - 1) : (o.sbInFo.m_srcI = o.row - 1,
                                o.sbInFo.m_srcJ = o.col - 1))
                            }
                        }
                        t && t()
                    }
                }
                .bind(this))
            }
        };
        a.exports = c,
        cc._RF.pop()
    }
    , {}],
    PT_LevelBtn: [function(e, t) {
        "use strict";
        cc._RF.push(t, "300f9+fXD5EUp1jfg2CLuz2", "PT_LevelBtn");
        var n = e("PT_MyShare");
        cc.Class({
            extends: cc.Component,
            properties: {
                textureName: {
                    type: cc.SpriteFrame,
                    default: []
                },
                startureName: {
                    type: cc.SpriteFrame,
                    default: []
                }
            },
            onLoad: function() {},
            start: function() {},
            upLevelBtnUi: function(e, t) {
                if (t <= n.getMaxLevel(e)) {
                    var a = n.getLevelStar(e, t);
                    this.node.getComponent(cc.Sprite).spriteFrame = this.textureName[1],
                    this.node.getChildByName("Label").getComponent(cc.Label).string = t,
                    this.node.getChildByName("Label").active = !0,
                    this.node.name = "" + t,
                    this.node.getChildByName("spStar1").active = !0,
                    this.node.getChildByName("spStar2").active = !0,
                    this.node.getChildByName("spStar3").active = !0,
                    a > 0 && (this.node.getChildByName("spStar1").getComponent(cc.Sprite).spriteFrame = this.startureName[1]),
                    a > 1 && (this.node.getChildByName("spStar2").getComponent(cc.Sprite).spriteFrame = this.startureName[1]),
                    a > 2 && (this.node.getChildByName("spStar3").getComponent(cc.Sprite).spriteFrame = this.startureName[1])
                } else
                    this.node.getComponent(cc.Sprite).spriteFrame = this.textureName[0],
                    this.node.getChildByName("Label").active = !1,
                    this.node.getChildByName("spStar1").active = !1,
                    this.node.getChildByName("spStar2").active = !1,
                    this.node.getChildByName("spStar3").active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PT_MyDLayer: [function(e, t) {
        "use strict";
        cc._RF.push(t, "30b7bKLRJdH44KRh/GBP8OX", "PT_MyDLayer");
        var n = t
          , a = cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function(e) {
                e.setScale(0),
                this.layerPt = cc.v2(0, 0)
            },
            onDestroy: function(e) {
                this.exitDialogAction(e)
            },
            onEnable: function(e) {
                this.enterDialogAction(e)
            },
            enterDialogAction: function(e) {
                if (0 == e.getNumberOfRunningActions()) {
                    this.layerPt = e.position;
                    var t = cc.scaleTo(.04, .516)
                      , n = cc.scaleTo(.04, .84)
                      , a = cc.scaleTo(.04, .994)
                      , o = cc.scaleTo(.04, 1.07)
                      , i = cc.scaleTo(.04, 1.1)
                      , s = cc.scaleTo(.04, 1.093)
                      , c = cc.scaleTo(.04, 1.047)
                      , r = cc.scaleTo(.04, .949)
                      , l = cc.scaleTo(.04, .9)
                      , d = cc.scaleTo(.04, .932)
                      , h = cc.scaleTo(.04, .997)
                      , u = cc.scaleTo(.04, 1.052)
                      , m = cc.scaleTo(.04, 1.029)
                      , p = cc.scaleTo(.04, 1);
                    e.runAction(cc.sequence(t, n, a, o, i, s, c, r, l, d, h, u, m, p))
                }
            },
            exitDialogAction: function(e) {
                0 == e.getNumberOfRunningActions() && e.runAction(cc.sequence(cc.scaleTo(.1, 1.15, 1.1), cc.spawn(cc.scaleTo(.25, 0), cc.moveTo(.25, this.layerPt)), cc.removeSelf()))
            }
        });
        n.exports = a,
        cc._RF.pop()
    }
    , {}],
    PT_MyShare: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3072dPAJ5JMKrP1f2rVUAGv", "PT_MyShare");
        var n = {
            loadShare: function() {
                "" == Userdefault.getStringForKey(PT_Constant.PT_key_load) && (this.setMusic("true"),
                this.setSound("true"),
                this.setGoldNum(1e3),
                this.setLevelLock(PT_Constant.MODE_CLASSIC, 1),
                this.setLevelLock(PT_Constant.MODE_TIME, 1),
                this.setLevelLock(PT_Constant.MODE_ENDLESS, 1),
                this.setLevelLock(PT_Constant.MODE_NIGHT, 1),
                this.setLevelLock(PT_Constant.MODE_CASUAL, 1),
                this.setMaxLevel(PT_Constant.MODE_CLASSIC, 1),
                this.setMaxLevel(PT_Constant.MODE_TIME, 1),
                this.setMaxLevel(PT_Constant.MODE_ENDLESS, 1),
                this.setMaxLevel(PT_Constant.MODE_NIGHT, 1),
                this.setMaxLevel(PT_Constant.MODE_CASUAL, 1),
                Userdefault.setDataForKey(PT_Constant.PT_key_load, "true"))
            },
            getMusic: function() {
                return Userdefault.getStringForKey(lieyou.Key_Music, "false")
            },
            setMusic: function(e) {
                Userdefault.setDataForKey(lieyou.Key_Music, e)
            },
            getSound: function() {
                return Userdefault.getStringForKey(lieyou.Key_Sound, "false")
            },
            setSound: function(e) {
                Userdefault.setDataForKey(lieyou.Key_Sound, e)
            },
            isPayVisible: function() {
                return !1
            },
            isFreegoldVisible: function() {
                return !0
            },
            getGoldNum: function() {
                return Userdefault.getIntForKey(lieyou.Key_Gold)
            },
            setGoldNum: function(e) {
                Userdefault.setDataForKey(lieyou.Key_Gold, e)
            },
            getTimeStr: function() {
                var e = new Date
                  , t = e.getFullYear()
                  , n = e.getMonth() + 1
                  , a = e.getDate();
                return parseInt(n) < 10 && (n = "0" + n),
                parseInt(a) < 10 && (a = "0" + a),
                "" + t + n + a
            },
            getSingRecord: function() {
                return Userdefault.getStringForKey(PT_Constant.PT_key_sing_record_)
            },
            setSingRecord: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_sing_record_, e)
            },
            getSingDayReceive: function() {
                return Userdefault.getStringForKey(PT_Constant.PT_key_sing_day_receive_)
            },
            setSingDayReceive: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_sing_day_receive_, e)
            },
            getSingDay: function() {
                return Userdefault.getIntForKey(PT_Constant.PT_key_sing_day_)
            },
            setSingDay: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_sing_day_, e)
            },
            getLevelLock: function(e, t) {
                return Userdefault.getBoolForKey(PT_Constant.PT_key_level_lock_ + e + "mode_" + t)
            },
            setLevelLock: function(e, t) {
                Userdefault.setDataForKey(PT_Constant.PT_key_level_lock_ + e + "mode_" + t, "true")
            },
            getLevelStar: function(e, t) {
                return Userdefault.getIntForKey(PT_Constant.PT_key_level_star_ + e + "mode_" + t)
            },
            setLevelStar: function(e, t, n) {
                Userdefault.setDataForKey(PT_Constant.PT_key_level_star_ + e + "mode_" + t, n)
            },
            getMaxLevel: function(e) {
                return Userdefault.getIntForKey(PT_Constant.PT_key_max_level_ + e)
            },
            setMaxLevel: function(e, t) {
                Userdefault.setDataForKey(PT_Constant.PT_key_max_level_ + e, t)
            },
            getMaxScore: function(e) {
                return Userdefault.getIntForKey(PT_Constant.PT_key_max_score_ + e)
            },
            setMaxScore: function(e, t) {
                Userdefault.setDataForKey(PT_Constant.PT_key_max_score_ + e, t)
            },
            getFindNum: function() {
                return Userdefault.getIntForKey(PT_Constant.PT_key_find_num_)
            },
            setFindNum: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_find_num_, e)
            },
            getRefreshNum: function() {
                return Userdefault.getIntForKey(PT_Constant.PT_key_refresh_num_)
            },
            setRefreshNum: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_refresh_num_, e)
            },
            getBombNum: function() {
                return Userdefault.getIntForKey(PT_Constant.PT_key_bomb_num_)
            },
            setBombNum: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_bomb_num_, e)
            },
            getResuShareNum: function() {
                return Userdefault.getIntForKey(PT_Constant.PT_key_resu_share_num_)
            },
            setResuShareNum: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_resu_share_num_, e)
            },
            getPassTwoGoldNum: function(e, t) {
                return Userdefault.getIntForKey(PT_Constant.PT_key_pass_two_gold_num_ + e + "mode_" + t)
            },
            setPassTwoGoldNum: function(e, t, n) {
                Userdefault.setDataForKey(PT_Constant.PT_key_pass_two_gold_num_ + e + "mode_" + t, n)
            },
            getPropShareNum: function() {
                return Userdefault.getIntForKey(PT_Constant.PT_key_prop_share_num_)
            },
            setPropShareNum: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_prop_share_num_, e)
            },
            getPropShareRecord: function() {
                return Userdefault.getStringForKey(PT_Constant.PT_key_prop_share_record_)
            },
            setPropShareRecord: function(e) {
                Userdefault.setDataForKey(PT_Constant.PT_key_prop_share_record_, e)
            }
        };
        t.exports = n,
        cc._RF.pop()
    }
    , {}],
    PT_PropsUse: [function(e, t) {
        "use strict";
        cc._RF.push(t, "303d6IVQUVK+J7JaEy54hH2", "PT_PropsUse");
        var n = e
          , a = t
          , o = n("PT_ConfigGame")
          , i = n("PT_BlockLink")
          , s = {
            isHaveEliminate1: function(e) {
                for (var t = [], n = e, a = 0; a < e.length; a++)
                    for (var o = e[a], s = 0; s < n.length; s++) {
                        var c = n[s];
                        o.m_idxI == c.m_idxI && o.m_idxJ == c.m_idxJ || i.link(o, c).length > 0 && t.push(this.getPTInfo(o, c))
                    }
                return t
            },
            getNormalPiece1: function() {
                for (var e = [], t = 0; t < o.row; t++)
                    for (var n = 0; n < o.col; n++) {
                        var a = o.blockColor[t][n]
                          , i = o.blockArray[t][n];
                        a > 0 && i && e.push(this.getPSInfo(t, n, a))
                    }
                return e
            },
            getVector_ColorCont: function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var a = e[n].m_color;
                    0 != a && this.existIndex(t, a) && t.push(a)
                }
                return t
            },
            propsBomb: function(e) {
                var t = []
                  , n = this.getNormalPiece1();
                if (n.length > 0)
                    for (var a = 0; a < n.length; a++) {
                        var o = n[a];
                        e == o.m_color && t.push(o)
                    }
                return t
            },
            propsFind: function() {
                var e = []
                  , t = this.getNormalPiece1()
                  , n = this.isHaveEliminate1(t);
                if (n.length > 0) {
                    var a = n[parseInt(Math.random() * n.length)]
                      , o = a.v1
                      , i = a.v2;
                    e.push(o),
                    e.push(i)
                }
                return e
            },
            isHaveEliminate: function(e) {
                for (var t = [], n = e, a = 0; a < e.length; a++)
                    for (var o = e[a], s = 0; s < n.length; s++) {
                        var c = n[s];
                        if ((o.m_idxI != c.m_idxI || o.m_idxJ != c.m_idxJ) && i.link(o, c).length > 0)
                            return t.push(o),
                            t.push(c),
                            t
                    }
                return t
            },
            refreshPiece: function(e) {
                for (var t = [], n = [], a = e.length, o = 0; o < a; o++) {
                    var i = this.randomIndex(n, a);
                    t.push(e[i]),
                    n.push(i)
                }
                return t
            },
            isRefresh: function() {
                var e = this.getNormalPiece1();
                return e.length < 1 || this.isHaveEliminate(e).length > 0
            },
            addPieceindex: function(e) {
                var t = []
                  , n = this.getDelPiece();
                if (n.length > e)
                    for (var a = [], i = n.length, s = 0; s < e; s++) {
                        var c = this.randomIndex(a, i)
                          , r = n[c];
                        a.push(c);
                        var l = this.randomIndex(a, i)
                          , d = n[l];
                        a.push(l);
                        var h = o.getPieRandomColor();
                        r.m_color = h,
                        d.m_color = h,
                        t.push(r),
                        t.push(d)
                    }
                return t
            },
            getDelPiece: function() {
                for (var e = [], t = 0; t < o.row; t++)
                    for (var n = 0; n < o.col; n++)
                        0 == o.blockColor[t][n] && 1 == o.blockMapArray[t][n] && e.push(this.getPSInfo(t, n, 0));
                return e
            },
            randomIndex: function(e, t) {
                var n = parseInt(Math.random() * t);
                return this.existIndex(e, n) ? n : this.randomIndex(e, t)
            },
            existIndex: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] == t)
                        return !1;
                return !0
            },
            isNext: function() {
                for (var e = 0, t = 0; t < o.row; t++)
                    for (var n = 0; n < o.col; n++)
                        0 == o.blockColor[t][n] && e++;
                return e >= o.row * o.col
            },
            getPSInfo: function(e, t, n) {
                return {
                    m_idxI: e,
                    m_idxJ: t,
                    m_color: n
                }
            },
            getPTInfo: function(e, t) {
                return {
                    v1: e,
                    v2: t
                }
            }
        };
        a.exports = s,
        cc._RF.pop()
    }
    , {}],
    QQManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "26a68wC8RNKU5h3mfP+Ryiw", "QQManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                bannerAd: null
            },
            getHaveVideo: function() {
                return "" != qqVideoId
            },
            getSysPlatform: function() {
                return 11
            },
            onShow: function(e) {
                qq.onShow(e)
            },
            onHide: function(e) {
                qq.onHide(e)
            },
            init: function() {
                this.openShare(),
                this.setShareData(),
                this.initAD()
            },
            initAD: function() {
                var e = this;
                if ("" != qqVideoId) {
                    var t = qq.createRewardedVideoAd({
                        adUnitId: qqVideoId
                    });
                    this.videoAd = t,
                    t.onLoad(function() {
                        console.log("qq---------- vd success")
                    }),
                    t.onClose(function(t) {
                        console.log("qq------------ vd playSuccess"),
                        t.isEnded ? e.vdCallBack && e.vdCallBack(!0) : e.vdCallBack && e.vdCallBack(!1)
                    }),
                    t.onError(function(t) {
                        console.log("qq----------- vd fail" + JSON.stringify(t)),
                        e.vdCallBack && e.vdCallBack(!1)
                    })
                }
            },
            setShareData: function() {
                this.setDataForHttp(wxData.shareUrl, function(e) {
                    wxData.shareData = JSON.parse(e)
                })
            },
            login: function() {
                qq.login({
                    success: function() {}
                })
            },
            openShare: function() {
                qq.showShareMenu({
                    showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
                }),
                qq.onShareAppMessage(function() {
                    var e = "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427"
                      , t = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
                    if (wxData.shareData.length > 0) {
                        var n = parseInt(Math.random() * wxData.shareData.length)
                          , a = wxData.shareData[n].item
                          , o = parseInt(Math.random() * a.length);
                        a[o].id,
                        e = a[o].title,
                        t = a[o].img
                    }
                    return {
                        title: e,
                        imageUrl: t
                    }
                })
            },
            share: function() {
                var e = "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427"
                  , t = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
                if (wxData.shareData.length > 0) {
                    var n = parseInt(Math.random() * wxData.shareData.length)
                      , a = wxData.shareData[n].item
                      , o = parseInt(Math.random() * a.length);
                    a[o].id,
                    e = a[o].title,
                    t = a[o].img
                }
                qq.shareAppMessage({
                    title: e,
                    imageUrl: t
                })
            },
            hideBanner: function() {
                this.bannerAd && (this.bannerAd.destroy(),
                this.bannerAd = null)
            },
            showBanner: function() {
                if ("" != qqBannerId) {
                    var e = this
                      , t = cc.view.getFrameSize();
                    console.log("size  " + t);
                    var n = t.height - 90;
                    this.bannerAd || (this.bannerAd = qq.createBannerAd({
                        adUnitId: qqBannerId,
                        style: {
                            left: 0,
                            top: n,
                            width: t.width,
                            height: 90
                        }
                    })),
                    this.bannerAd.show(),
                    this.bannerAd.onLoad(function() {
                        e.bannerAd.offLoad(function() {}),
                        e.bannerAd.offError(function() {}),
                        console.log("qq--------------  banner show success")
                    }),
                    this.bannerAd.onError(function(t) {
                        e.bannerAd.offLoad(function() {}),
                        e.bannerAd.offError(function() {}),
                        console.log("qq--------------  banner show fail" + JSON.stringify(t))
                    })
                }
            },
            showBannerCustom: function(e) {
                this.showBanner(e)
            },
            showBannerByTop: function() {
                this.showBanner({})
            },
            showBannerByBottom: function() {
                this.showBanner({})
            },
            showRewardedVideoAd: function(e, t) {
                "" != qqVideoId ? (this.vdCallBack = t,
                this.videoAd && this.videoAd.show()) : t(!1)
            },
            showSpot: function() {
                qqSpotADId
            },
            showSpotByPause: function() {
                this.showSpot()
            },
            showSpotByBegin: function() {
                this.showSpot()
            },
            showSpotByFinish: function() {
                this.showSpot()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    RecommendGame_Spot: [function(e, t) {
        "use strict";
        cc._RF.push(t, "8e56dG3UihLrY7QhPEpQ17K", "RecommendGame_Spot"),
        cc.Class({
            extends: cc.Component,
            properties: {
                myNode: cc.Node,
                contentNode: cc.Node,
                icon: cc.Prefab,
                closeNode: cc.Node,
                beginGameSpriteFrame: cc.SpriteFrame
            },
            setData: function(e, t) {
                t.callBack && (this.callBack = t.callBack),
                0 == e && (this.closeNode.getComponent(cc.Sprite).spriteFrame = this.beginGameSpriteFrame)
            },
            start: function() {
                this.myNode.scale = lieyou._SceneScale,
                this.close = !1;
                for (var e = [], t = 0; t < quickGame.RecommendBannerData.length; t++)
                    e[t] = quickGame.RecommendBannerData[t];
                for (e = this.shuffle(e),
                t = 0; t < e.length; t++) {
                    var n, a = cc.instantiate(this.icon);
                    this.contentNode.addChild(a),
                    n = e[t].url && "" != e[t].url ? e[t].url : quickGame.adBaseUrl + e[t].uri,
                    a.getComponent("Recommend_Spot_Icon").setData({
                        jumpData: e[t].jumpData,
                        imageUrl: n,
                        gameName: e[t].gameName
                    })
                }
            },
            callBackClose: function() {
                this.close || (this.close = !0,
                this.callBack && this.callBack(),
                this.node.destroy())
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    RecommendGame_dialog: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2820fDMTntDwZ3GMnqqBQJP", "RecommendGame_dialog"),
        cc.Class({
            extends: cc.Component,
            properties: {
                myNode: cc.Node,
                contentNode: cc.Node,
                icon: cc.Prefab
            },
            start: function() {
                this.myNode.scale = lieyou._SceneScale,
                this.close = !1;
                for (var e = [], t = 0; t < quickGame.RecommendIconData.length; t++)
                    e[t] = quickGame.RecommendIconData[t];
                for (e = this.shuffle(e),
                t = 0; t < e.length; t++) {
                    var n, a = cc.instantiate(this.icon);
                    this.contentNode.addChild(a),
                    n = e[t].url && "" != e[t].url ? e[t].url : quickGame.adBaseUrl + e[t].uri,
                    a.getComponent("Recommend_Icon").setData({
                        jumpData: e[t].jumpData,
                        imageUrl: n,
                        gameName: e[t].gameName
                    })
                }
            },
            callBackClose: function() {
                this.close || (this.close = !0,
                this.node.destroy())
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    RecommendGame_show: [function(e, t) {
        "use strict";
        cc._RF.push(t, "63d87zW+7NNAqcUCwyoP/Wf", "RecommendGame_show"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            callBack: function() {
                cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_dialog", function(e, t) {
                    var n = cc.instantiate(t);
                    cc.find("Canvas").addChild(n, 999)
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_Icon_one: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c0b9c67kl5AEJvpQHCNCLf+", "Recommend_Icon_one"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            refreshData: function() {
                var e, t = quickGame.RecommendIconData[parseInt(Math.random() * quickGame.RecommendIconData.length)];
                e = t.url && "" != t.url ? t.url : quickGame.adBaseUrl + t.uri,
                this.jumpData = t.jumpData,
                this.loadSpriteFrame(e, cc.find("imageBg/image/image", this.node)),
                cc.find("wordBg/name", this.node).getComponent(cc.Label).string = this.getName(t.gameName)
            },
            getName: function(e) {
                if (e.length <= 5)
                    return e;
                for (var t = "", n = 0; n < 5; n++)
                    t += e[n];
                return t + "..."
            },
            loadSpriteFrame: function(e, t) {
                var n = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(n, function(e, n) {
                    e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                })
            },
            start: function() {
                this.refreshData(),
                this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.03, -15), cc.rotateBy(.03, 0), cc.rotateBy(.03, 15), cc.rotateBy(.03, 0), cc.rotateBy(.03, -10), cc.rotateBy(.03, 0), cc.rotateBy(.03, 10), cc.rotateBy(.03, 0), cc.rotateBy(.03, -5), cc.rotateBy(.03, 0), cc.rotateBy(.03, 5), cc.rotateBy(.03, 0), cc.delayTime(2 + 1 * Math.random())))),
                this.schedule(this.refreshData, 5)
            },
            callBack: function() {
                SdkManager.newJumpApp({
                    data: this.jumpData
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_Icon: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f5b9cWhQflFc7Y4o4Hl10i6", "Recommend_Icon"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            setData: function(e) {
                this.jumpData = e.jumpData,
                this.loadSpriteFrame(e.imageUrl, cc.find("image", this.node)),
                cc.find("name", this.node).getComponent(cc.Label).string = this.getName(e.gameName)
            },
            getName: function(e) {
                if (e.length <= 5)
                    return e;
                for (var t = "", n = 0; n < 5; n++)
                    t += e[n];
                return t + "..."
            },
            loadSpriteFrame: function(e, t) {
                var n = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(n, function(e, n) {
                    e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                })
            },
            start: function() {},
            callBack: function() {
                SdkManager.newJumpApp({
                    data: this.jumpData
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_Spot_Icon: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6d109TDiIxKx5FLQv27OdAs", "Recommend_Spot_Icon"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            setData: function(e) {
                this.jumpData = e.jumpData,
                this.loadSpriteFrame(e.imageUrl, cc.find("image", this.node))
            },
            loadSpriteFrame: function(e, t) {
                var n = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(n, function(e, n) {
                    e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                })
            },
            start: function() {},
            callBack: function() {
                SdkManager.newJumpApp({
                    data: this.jumpData
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_awardGridIcon: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f3dbfxc5OxD8qpc9syqkV7d", "Recommend_awardGridIcon"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            setData: function(e) {
                this.jumpData = e.jumpData,
                this.loadSpriteFrame(e.imageUrl, cc.find("image", this.node)),
                cc.find("name", this.node).getComponent(cc.Label).string = this.getName(e.gameName)
            },
            getName: function(e) {
                if (e.length <= 5)
                    return e;
                for (var t = "", n = 0; n < 5; n++)
                    t += e[n];
                return t + "..."
            },
            loadSpriteFrame: function(e, t) {
                var n = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(n, function(e, n) {
                    e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                })
            },
            start: function() {
                var e = 10 * quickGame.awardGoldDouble;
                cc.find("gold", this.node).getComponent(cc.Label).string = e + "\u91d1\u5e01"
            },
            callBack: function() {
                SdkManager.newJumpApp({
                    data: this.jumpData,
                    getGold: !0
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_awardStripIcon: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f9ed6WMgXNMap/A6APSJm5s", "Recommend_awardStripIcon"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            setData: function(e) {
                this.jumpData = e.jumpData,
                this.loadSpriteFrame(e.imageUrl, cc.find("image", this.node)),
                cc.find("name", this.node).getComponent(cc.Label).string = e.gameName
            },
            loadSpriteFrame: function(e, t) {
                var n = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(n, function(e, n) {
                    e || t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                })
            },
            start: function() {
                var e = 10 * quickGame.awardGoldDouble;
                cc.find("gold", this.node).getComponent(cc.Label).string = e + "\u91d1\u5e01"
            },
            callBack: function() {
                SdkManager.newJumpApp({
                    data: this.jumpData,
                    getGold: !0
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_award_grid: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2d17bVGuJ1P6Z2TuyROntOv", "Recommend_award_grid"),
        cc.Class({
            extends: cc.Component,
            properties: {
                myNode: cc.Node,
                contentNode: cc.Node,
                icon: cc.Prefab
            },
            setData: function(e) {
                e.callBack && (this.callBack = e.callBack)
            },
            start: function() {
                this.myNode.scale = lieyou._SceneScale,
                this.close = !1;
                for (var e = [], t = 0; t < quickGame.awardGoldData.length; t++)
                    e[t] = quickGame.awardGoldData[t];
                for (e = this.shuffle(e),
                t = 0; t < e.length; t++) {
                    var n, a = cc.instantiate(this.icon);
                    this.contentNode.addChild(a),
                    n = e[t].url && "" != e[t].url ? e[t].url : quickGame.adBaseUrl + e[t].uri,
                    a.getComponent("Recommend_awardGridIcon").setData({
                        jumpData: e[t].jumpData,
                        imageUrl: n,
                        gameName: e[t].gameName
                    })
                }
            },
            callBackClose: function() {
                this.close || (this.close = !0,
                this.callBack && this.callBack(),
                this.node.destroy())
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_award_strip: [function(e, t) {
        "use strict";
        cc._RF.push(t, "c21c35MAQBCvqCiEMbtDUMU", "Recommend_award_strip"),
        cc.Class({
            extends: cc.Component,
            properties: {
                myNode: cc.Node,
                contentNode: cc.Node,
                icon: cc.Prefab
            },
            setData: function(e) {
                e.callBack && (this.callBack = e.callBack)
            },
            start: function() {
                this.myNode.scale = lieyou._SceneScale,
                this.close = !1;
                for (var e = [], t = 0; t < quickGame.awardGoldData.length; t++)
                    e[t] = quickGame.awardGoldData[t];
                for (e = this.shuffle(e),
                t = 0; t < e.length; t++) {
                    var n, a = cc.instantiate(this.icon);
                    this.contentNode.addChild(a),
                    n = e[t].url && "" != e[t].url ? e[t].url : quickGame.adBaseUrl + e[t].uri,
                    a.getComponent("Recommend_awardStripIcon").setData({
                        jumpData: e[t].jumpData,
                        imageUrl: n,
                        gameName: e[t].gameName
                    })
                }
            },
            callBackClose: function() {
                this.close || (this.close = !0,
                this.callBack && this.callBack(),
                this.node.destroy())
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Recommend_showAwardNode: [function(e, t) {
        "use strict";
        cc._RF.push(t, "f2b58ai/NhM6qOuHspR7ssx", "Recommend_showAwardNode"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            setData: function(e) {
                if (e.url) {
                    var t = this.node;
                    cc.loader.loadRes(e.url, function(e, n) {
                        t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                    })
                }
            },
            callBack: function() {
                SdkManager.showArardGoldStrip({
                    callBack: function() {
                        SdkManager.showBannerByBottom(wxBannerId)
                    }
                    .bind(this)
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SdkData: [function(e, t) {
        "use strict";
        cc._RF.push(t, "3be807lVBFDTKxrE9EY13lG", "SdkData");
        var n = e;
        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = cc.sys.localStorage.getItem(e);
            return null === n || "" === n ? t + "" : n
        }
        window.spotData = [],
        window.pauseSpotInterval = 3,
        window.resultSpotInterval = 3,
        window.pauseSpotStartIndex = 3,
        window.resultSpotStartIndex = 3,
        window.pauseSpotTime = 10,
        window.resultSpotTime = 10,
        window.helpOpenId = "",
        window.getOpenid = function() {
            for (var e = "", t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], n = 0; n < 12; n++)
                e += t[parseInt(62 * Math.random())];
            return e
        }
        ,
        window.onHideHaveLoadScene = !0,
        window.openid = getOpenid(),
        window.wsurl || (window.wsurl = "wss://battle.igame58.com/battle/v2/726f6f6d?uid=" + openid),
        window.uinfo || (window.uinfo = {
            gameid: 100001,
            uid: openid,
            nick: "\u597d\u53cb",
            icon: "",
            sex: 0,
            city: "",
            country: "",
            province: "",
            from: "wechat"
        }),
        window.matchinfo = {
            nick: "\u597d\u53cb",
            icon: "",
            sex: 0,
            city: "",
            country: "",
            province: "",
            from: "wechat"
        },
        window.serverUrl = "https://app.igame58.com/",
        window.mainScneeFromSmallGame = !1,
        window.wxGameVersion = 1,
        window.mainGameScene = "",
        window.releasePlatform = "jinRiTouTiao",
        window.RankingKey = "",
        window.GameName = "onetpet",
        window.wxAppId = "",
        window.wxAppSecret = "",
        window.wxBannerId = "",
        window.wxVideoId = "",
        window.wxSpotId = "",
        window.FBSpotADId = "",
        window.FBVideoId = "",
        window.oppoId_SDK = "",
        window.oppoSpotADId = [],
        window.oppoBannerId = [],
        window.oppoVideoId = [],
        window.oppoNativeId = [],
        window.oppoGetOnlineDataId = "",
        window.vivoId_SDK = "67fd422a05ec43b6abb020d824feda3e",
        window.vivoSpotADId = "feb82a86f42f4b058fcbf9608c9ccb6c",
        window.vivoBannerId = "bef6c32d44b141f686bf64dc21dcc3bf",
        window.vivoVideoId = "0d76c9e6550c42a0afa60df5b0eba114",
        window.vivoNativeId = "",
        window.qqId_SDK = "",
        window.qqBannerId = "",
        window.qqVideoId = "",
        window.qqSpotADId = "",
        window.baiduId_SDK = "",
        window.baiduSpotADId = "",
        window.baiduBannerId = "",
        window.baiduVideoId = "",
        window.baiduNativeId = "",
        window.huaWeiId_Sdk = "",
        window.huaWeiSpotADId = "",
        window.huaWeiBannerId = "",
        window.huaWeiVideoId = "",
        window.jinRiTouTiao_AppId = "tt2b925d2fb4b8babc",
        window.jinRiTouTiao_AppKey = "9aa4362f46a72479b0153d14a7ebf0561def76d0",
        window.jinRiTouTiao_BannerId = "nn3709ie02pj1lq6ph",
        window.jinRiTouTiao_VideoId = "442df891d835u1end6",
        window.xiaomi_AppId = "",
        window.xiaomi_BannerId = "",
        window.xiaomi_VideoId = "",
        window.localCardKey = "localCardNum",
        window.netCardNum = 0,
        window.canGetNetCardNum = !0,
        window.getNetCardTime = 1e4,
        window.canGetLocalCard = !1,
        window.getLocalCareId = "",
        window.wxData = {
            WXforward: "",
            session_key: "",
            appId: wxAppId,
            appSecret: wxAppSecret,
            bannerID: "",
            params: null,
            checkShareSuccessNumIntervalTime: 10,
            getOpenIdUrl: serverUrl + "lieyou/wxdata/requstWxAPI",
            moreGameUrl: serverUrl + "lieyou/wxdata/moreGame?appName=" + GameName,
            shareUrl: serverUrl + "lieyou/wxdata/getShareImgText?appName=" + GameName,
            putShareDataUrl: serverUrl + "lieyou/wxdata/gamerShare",
            putTouchShareDataUrl: serverUrl + "lieyou/wxdata/userClickImgText",
            checkResurrDataUrl: serverUrl + "lieyou/wxdata/selReviveCard",
            useResurrDataUrl: serverUrl + "lieyou/wxdata/useReviveCard",
            putPlayerData: serverUrl + "lieyou/wxdata/addGamerLogin/" + GameName + "/" + wxAppId + "/",
            getOnlineData: serverUrl + "lieyou/wxdata/getGameParam/" + wxAppId,
            shareOnlineData: "",
            bannerOnlindDelayTime: 50,
            shareData: [],
            moreGameData: []
        },
        window.quickGame = {
            awardGoldDouble: 1,
            awardGoldTime: 30,
            RecommendIconData: [],
            RecommendBannerData: [],
            awardGoldData: [],
            adBaseUrl: ""
        },
        window.PI = 3.141592654,
        window.lieyou = {
            Props_Base_Gold: 800,
            Key_OncePlayerTime: "begingGameTime",
            Key_OncePlayerTimeDay: "begingGameTimeDay",
            Key_NewPlayer: "isNewPlayer",
            Key_Gold: "Key_Gold",
            Key_Music: "Key_BgMusic",
            Key_Sound: "Key_Sound",
            _SceneScale: 1,
            _offsetX: 0,
            _offsetY: 0,
            Language_ch: !0
        },
        window.language = n("Chinese"),
        cc.sys.language != cc.sys.LANGUAGE_CHINESE && (lieyou.Language_ch = !1,
        language = n("English")),
        window.Userdefault = {
            getBoolForKey: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "false";
                return "false" == t || (t = t ? "true" : "false"),
                "true" == a(e, t)
            },
            getIntForKey: function(e) {
                var t = a(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
                return parseInt(t)
            },
            getStringForKey: function(e) {
                return a(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "")
            },
            getFloatForKey: function(e) {
                var t = a(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
                return parseFloat(t)
            },
            setDataForKey: function(e, t) {
                cc.sys.localStorage.setItem(e, t)
            },
            setBoolForKey: function(e, t) {
                t = t ? "true" : "false",
                cc.sys.localStorage.setItem(e, t)
            }
        },
        window.getRandom = function(e, t) {
            var n = t - e;
            return parseInt(Math.random() * n) + e
        }
        ,
        window.getCanShare = function() {
            return cc.sys.platform === cc.sys.WECHAT_GAME && wxServerVersion >= wxGameVersion
        }
        ,
        window.getTime = function() {
            return (new Date).getTime()
        }
        ,
        window.getTimeDay = function() {
            var e = new Date;
            return 1e4 * (e.getYear() + 1900) + 100 * (e.getMonth() + 1) + e.getDate()
        }
        ,
        cc._RF.pop()
    }
    , {}],
    SdkManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "46f6eEKyN1P8ru7QKakGWyM", "SdkManager");
        var n = e
          , a = n("WxManager")
          , o = n("FaceBookManager")
          , i = n("NativeManager")
          , s = n("OppoH5Manager")
          , c = n("OppoManager")
          , r = n("VivoManager")
          , l = n("XiaoMiManagerH5")
          , d = n("XiaoMiManager")
          , h = n("JinRiTouTiaoManager")
          , u = n("HuaweiManager")
          , m = n("BaiDuManager")
          , p = n("QQManager");
        window._SDKVersion = "2019.8.19.0",
        window.SdkManager = {
            instance: null,
            platform: "",
            init: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                console.log("\u7248\u672c\uff1a" + _SDKVersion),
                this.platform = releasePlatform,
                this.instance || (console.log(">>>>>>>>>>>>         init sdk"),
                this.setNewPlayerData(),
                this.initGameData(),
                "oppoH5" == this.platform ? (this.instance = new s,
                this.instance.init(e)) : cc.sys.platform == cc.sys.OPPO_GAME ? (this.instance = new c,
                this.instance.init(e)) : cc.sys.platform == cc.sys.VIVO_GAME ? (this.instance = new r,
                this.instance.init(e)) : "qq" == this.platform ? (this.instance = new p,
                this.instance.init(e)) : cc.sys.platform == cc.sys.BAIDU_GAME ? (this.instance = new m,
                this.instance.init(e)) : cc.sys.platform == cc.sys.HUAWEI_GAME ? (this.instance = new u,
                this.instance.init(e)) : "xiaoMiH5" == this.platform ? (this.instance = new l,
                this.instance.init(e)) : cc.sys.platform == cc.sys.XIAOMI_GAME ? (this.instance = new d,
                this.instance.init(e)) : "jinRiTouTiao" == this.platform ? (this.instance = new h,
                this.instance.init(e)) : cc.sys.platform === cc.sys.WECHAT_GAME ? (this.instance = new a,
                this.instance.init(e)) : cc.sys.isNative ? (this.instance = new i,
                this.instance.init(e)) : window.FBInstant && FBInstant.getPlatform() && (this.instance = new o,
                this.instance.init(e)))
            },
            getHaveVideo: function() {
                return !!this.instance && this.instance.getHaveVideo()
            },
            getSysPlatform: function() {
                return this.instance ? this.instance.getSysPlatform() : -1
            },
            initGameData: function() {
                var e = cc.winSize
                  , t = .5625 * e.height;
                e.width < t && (lieyou._SceneScale = e.width / t,
                lieyou._offsetY = e.height * (1 - e.width / t) / 2,
                lieyou._offsetX = e.width * (1 - e.width / t) / 2)
            },
            onHide: function(e) {
                this.instance && this.instance.onHide(e)
            },
            onShow: function(e) {
                this.instance && this.instance.onShow(e)
            },
            getHelpLevel: function() {
                return this.instance ? this.instance.getHelpLevel() : -1
            },
            showBossKeyNode: function() {
                cc.loader.loadRes("SDK/module/BossKey/bossKey", function(e, t) {
                    e || cc.find("Canvas") && cc.find("Canvas").isValid && cc.find("Canvas").addChild(cc.instantiate(t))
                })
            },
            showBanner: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.showBossKeyNode(),
                this.instance && this.instance.showBanner(e)
            },
            showBannerCustom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.showBossKeyNode(),
                this.instance && this.instance.showBannerCustom(e)
            },
            showBannerByBottom: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                this.showBossKeyNode(),
                this.instance && this.instance.showBannerByBottom(e)
            },
            showBannerByTop: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                this.showBossKeyNode(),
                this.instance && this.instance.showBannerByTop(e)
            },
            hideBanner: function() {
                this.instance && this.instance.hideBanner()
            },
            showRewardedVideoAd: function(e, t) {
                this.instance && this.instance.showRewardedVideoAd(e, t)
            },
            getAuthorize: function() {
                this.instance && this.instance.getAuthorize()
            },
            login: function() {
                this.instance && this.instance.login()
            },
            addLocalResurr: function() {
                this.instance && this.instance.addLocalResurr()
            },
            useResurr: function() {
                this.instance && this.instance.useResurr()
            },
            deleteInviteFriend: function(e) {
                this.instance && this.instance.deleteInviteFriend(e)
            },
            modifyInviteFriend: function(e) {
                this.instance && this.instance.modifyInviteFriend(e)
            },
            getInviteFriendData: function(e, t) {
                this.instance && this.instance.getInviteFriendData(e, t)
            },
            showInviteFriend: function(e, t) {
                this.instance && this.instance.showInviteFriend(e, t)
            },
            showInviteFriendFailure: function(e) {
                this.instance && this.instance.showInviteFriendFailure(e)
            },
            checkResurrNum: function() {
                return this.instance ? this.instance.checkResurrNum() : 0
            },
            checkResurrNum_2: function() {
                return this.instance ? this.instance.checkResurrNum_2() : 0
            },
            share: function(e) {
                this.instance && this.instance.share(e)
            },
            shareHelp: function(e) {
                this.instance && this.instance.shareHelp(e)
            },
            shareHelpSuccess: function(e) {
                this.instance && this.instance.shareHelpSuccess(e)
            },
            helpFriendSuccess: function(e) {
                this.instance && this.instance.helpFriendSuccess(e)
            },
            getIsHaveFriendHelpMe: function(e, t) {
                this.instance && this.instance.getIsHaveFriendHelpMe(e, t)
            },
            showMoreGameByIcon: function(e) {
                this.instance && this.instance.showMoreGameByIcon(e)
            },
            showMoreGameByBanner: function(e) {
                this.instance && this.instance.showMoreGameByBanner(e)
            },
            showAllRankingLayer: function(e) {
                this.instance && this.instance.showAllRankingLayer(e)
            },
            showFailRankingLayer: function(e) {
                this.instance && this.instance.showFailRankingLayer(e)
            },
            setRankingData: function(e, t) {
                this.instance && this.instance.setRankingData(e, t)
            },
            showForum: function(e) {
                this.instance && this.instance.showForum(e)
            },
            closeForum: function() {
                this.instance && this.instance.closeForum()
            },
            showMoreGame: function() {
                this.instance && this.instance.showMoreGame()
            },
            jumpApp: function(e, t, n, a) {
                this.instance && this.instance.jumpApp(e, t, n, a)
            },
            newJumpApp: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.newJumpApp(e)
            },
            showSpotByBegin: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.instance && this.instance.showSpotByBegin(e, t)
            },
            showSpotByPause: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.instance && this.instance.showSpotByPause(e, t)
            },
            showSpotByFinish: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.instance && this.instance.showSpotByFinish(e, t)
            },
            getSDKVersionCanUse: function(e) {
                return !this.instance || this.instance.getSDKVersionCanUse(e)
            },
            setNewPlayerData: function() {
                var e = Userdefault.getIntForKey("comeGameNum", 0);
                if (Userdefault.setDataForKey("comeGameNum", e + 1),
                Userdefault.getBoolForKey(lieyou.Key_NewPlayer, !0)) {
                    var t = parseInt(getTime() / 1e3);
                    Userdefault.setDataForKey(lieyou.Key_OncePlayerTime, t),
                    Userdefault.setBoolForKey(lieyou.Key_NewPlayer, !1);
                    var n = getTimeDay();
                    Userdefault.setDataForKey(lieyou.Key_OncePlayerTimeDay, n)
                }
            },
            parseData: function(e, t) {
                for (var n = e.split(","), a = 0; a < n.length; a++)
                    if (n[a].split("wait:").length > 1) {
                        if (n[a].split("wait:")[1] == t)
                            return !0
                    } else if (n[a].split("waitL").length > 1) {
                        var o = n[a].split("waitL")[1].split(":")
                          , i = Userdefault.getIntForKey("SDKGameMaxLevel", 0);
                        if (o[1] == t && i > parseInt(o[0]))
                            return !0
                    } else if (n[a].split("waitS").length > 1) {
                        o = n[a].split("waitS")[1].split(":");
                        var s = Userdefault.getIntForKey("SDKGameMaxScore", 0);
                        if (o[1] == t && s > parseInt(o[0]))
                            return !0
                    } else if (n[a].split("waitT").length > 1) {
                        o = n[a].split("waitT")[1].split(":");
                        var c = Userdefault.getIntForKey(lieyou.Key_OncePlayerTime, 0)
                          , r = parseInt(getTime() / 1e3);
                        if (o[1] == t && r - c > parseInt(o[0]))
                            return !0
                    } else if (n[a].split("waitE").length > 1) {
                        o = n[a].split("waitE")[1].split(":");
                        var l = Userdefault.getIntForKey("comeGameNum", 0);
                        if (o[1] == t && l > parseInt(o[0]))
                            return !0
                    } else if (n[a].split("waitD").length > 1 && (o = n[a].split("waitD")[1].split(":"),
                    c = Userdefault.getIntForKey(lieyou.Key_OncePlayerTimeDay, 0),
                    r = getTimeDay(),
                    o[1] == t && r - c > parseInt(o[0])))
                        return !0;
                return !1
            },
            gameBeginLevel: function(e, t) {
                console.log("\u6a21\u5f0f   mode =====  " + e + "   \u6e38\u620f\u5f00\u59cb level = " + t),
                this.instance && this.instance.jniLevel(e, t, 0)
            },
            gameFailLevel: function(e, t) {
                console.log("\u6a21\u5f0f   mode =====  " + e + "   \u6e38\u620f\u5931\u8d25 level = " + t),
                this.instance && this.instance.jniLevel(e, t, 2)
            },
            gameFinishLevel: function(e, t) {
                console.log("\u6a21\u5f0f   mode =====  " + e + "   \u6e38\u620f\u8fc7\u5173 level = " + t),
                t > Userdefault.getIntForKey("SDKGameMaxLevel" + e, 0) && Userdefault.setDataForKey("SDKGameMaxLevel" + e, t),
                this.instance && this.instance.jniLevel(e, t, 1)
            },
            gameScore: function(e, t) {
                console.log("\u6a21\u5f0f   mode =====  " + e + "   \u5206\u6570 score = " + t),
                t > Userdefault.getIntForKey("SDKGameMaxScore" + e, 0) && Userdefault.setDataForKey("SDKGameMaxScore" + e, t)
            },
            addToast: function(e, t, n) {
                this.instance && this.instance.addToast(e, t, n)
            },
            shareDialog: function(e) {
                this.instance && this.instance.shareDialog(e)
            },
            addGetLocakCardDialog: function(e) {
                this.instance && this.instance.addGetLocakCardDialog(e)
            },
            getParamByOnline: function(e, t) {
                if (this.instance)
                    return this.instance.getParamByOnline(e, t)
            },
            getOnlineSpriteFrame: function(e, t) {
                this.instance && this.instance.getOnlineSpriteFrame(e, t)
            },
            showGuessYouLickOne: function(e) {
                this.instance && this.instance.showGuessYouLickOne(e)
            },
            showGuessYouLickTow: function(e) {
                this.instance && this.instance.showGuessYouLickTow(e)
            },
            returnHomeJumpGame: function() {
                this.instance && this.instance.returnHomeJumpGame()
            },
            shareToCrowd: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                this.instance && this.instance.share({
                    name: GameName,
                    source: 5,
                    success: function(o, i) {
                        if (1 == o)
                            if (i) {
                                var s = "ShareToCrowd" + i + a + "_" + n + t
                                  , c = Userdefault.getStringForKey(s, "0,0").split(",")
                                  , r = parseInt(c[0])
                                  , l = parseInt(c[1])
                                  , d = Math.floor((new Date).getTime() / 36e5);
                                d >= l + n ? (r = 1,
                                l = d) : r++,
                                Userdefault.setDataForKey(s, r + "," + l),
                                e(r <= a ? 1 : -1)
                            } else
                                e(1);
                        else
                            e(0)
                    }
                })
            },
            callAndroid: function(e) {
                this.instance && this.instance.callAndroid(e)
            },
            callAndroid_2: function(e, t) {
                this.instance && this.instance.callAndroid_2(e, t)
            },
            callPay: function(e, t) {
                this.instance && this.instance.callPay(e, t)
            },
            isOpen: function(e) {
                if (this.instance)
                    return this.instance.isOpen(e)
            },
            getIsNative: function() {
                return 1 == this.getSysPlatform()
            },
            backHome: function() {
                if (this.instance)
                    return this.instance.backHome()
            },
            addSmallGameReturnBtn: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.addSmallGameReturnBtn(e)
            },
            gotoSmallGame: function(e) {
                if (this.instance)
                    return this.instance.gotoSmallGame(e)
            },
            gameAction: function(e) {
                if (this.instance)
                    return this.instance.gameAction(e)
            },
            initPhysics: function(e) {
                var t = e;
                cc.game.config.groupList = t["group-list"],
                cc.game.config.collisionMatrix = t["collision-matrix"],
                cc.game._initConfig(cc.game.config)
            },
            showPraise: function() {
                this.instance && this.instance.showPraise()
            },
            showNativeBanner: function(e) {
                this.instance && this.instance.showNativeBanner(e)
            },
            hideNativeBanner: function() {
                this.instance && this.instance.hideNativeBanner()
            },
            showRedPack: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.showRedPack(e)
            },
            showRedIcon: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.showRedIcon(e)
            },
            showRecommendIcon: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.showRecommendIcon(e)
            },
            showGameRecommend: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.instance && this.instance.showGameRecommend(e)
            },
            showGameRecommendDialog: function() {},
            getShareOrViedo: function() {
                return this.instance ? this.instance.getShareOrViedo() : 0
            },
            getJumpBtnHaveMove: function() {
                return this.instance ? this.instance.getJumpBtnHaveMove() : 0
            },
            showGuessYouLike_3: function(e) {
                this.instance && this.instance.showGuessYouLike_3(e)
            },
            jumpRefreshBanner: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.jumpRefreshBanner(e)
            },
            setWorldRankData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RankingKey;
                this.instance && this.instance.setWorldRankData(t, e)
            },
            getBaseData: function() {
                return this.instance && this.instance.getBaseData(),
                {}
            },
            reload: function() {
                this.instance && this.instance.reload()
            },
            addLuPingBtn: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.addLuPingBtn(e)
            },
            shareVd: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.instance && this.instance.shareVd(e)
            },
            beginLuPing: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.instance && this.instance.beginLuPing(e, t)
            },
            pauseLuPing: function() {
                this.instance && this.instance.pauseLuPing()
            },
            resumeLuPing: function() {
                this.instance && this.instance.resumeLuPing()
            },
            stopLuPing: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.instance && this.instance.stopLuPing(e)
            },
            hasInstalled: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.instance && this.instance.hasInstalled(e)
            },
            install: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.install(e)
            },
            showRecommendBegin: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance ? this.instance.showRecommendBegin(e) : e.callBack && e.callBack()
            },
            showRecommendFinish: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance ? this.instance.showRecommendFinish(e) : e.callBack && e.callBack()
            },
            showArardGoldGrid: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance ? this.instance.showArardGoldGrid(e) : e.callBack && e.callBack()
            },
            showArardGoldStrip: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance ? this.instance.showArardGoldStrip(e) : e.callBack && e.callBack()
            },
            addInstallShortcut: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.addInstallShortcut(e)
            },
            showRecommendAwardIcon: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.instance && this.instance.showRecommendAwardIcon(e)
            },
            setDataForHttp: function(e, t) {
                this.instance && this.instance.setDataForHttp(e, t)
            }
        },
        cc._RF.pop()
    }
    , {}],
    VivoManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "80a26zNCZlHPpKODIIBFWiT", "VivoManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                bannerAd: null
            },
            getHaveVideo: function() {
                return !("" == vivoVideoId || !this._canShowAD || this.platformVersionCode < 1041)
            },
            getSysPlatform: function() {
                return 3
            },
            onShow: function(e) {
                qg.onShow(e)
            },
            onHide: function(e) {
                qg.onHide(e)
            },
            init: function() {
                this.platformVersionCode = qg.getSystemInfoSync().platformVersionCode,
                this._canShowAD = !0,
                this.platformVersionCode < 1031 && (this._canShowAD = !1),
                console.log("vivo-------------- init   " + this._canShowAD)
            },
            hideBanner: function() {
                this.bannerAd && this.bannerAd.hide()
            },
            showBanner: function() {
                "" != vivoBannerId && this._canShowAD && (this.bannerAd || (this.bannerAd = qg.createBannerAd({
                    posId: vivoBannerId,
                    style: {}
                })),
                this.bannerAd.show(),
                console.log("vivo--------------  banner show"),
                this.bannerAd.onLoad(function() {
                    console.log("vivo--------------  banner show success")
                }),
                this.bannerAd.onError(function(e) {
                    console.log("vivo--------------  banner show fail" + JSON.stringify(e))
                }))
            },
            showBannerCustom: function(e) {
                this.showBanner(e)
            },
            showBannerByTop: function() {
                this.showBanner({})
            },
            showBannerByBottom: function() {
                this.showBanner({})
            },
            showRewardedVideoAd: function(e, t) {
                if (this.platformVersionCode < 1041)
                    t(!1);
                else {
                    var n = qg.createRewardedVideoAd({
                        posId: vivoVideoId
                    });
                    n.load(),
                    n.onLoad(function() {
                        console.log("vivo---------- vd success"),
                        n.show(),
                        cc.game.pause()
                    }),
                    n.onClose(function(e) {
                        cc.game.resume(),
                        console.log("vivo------------ vd playSuccess"),
                        e.isEnded ? t(!0) : t(!1),
                        n.offClose(),
                        n.offLoad(),
                        n.offError()
                    }),
                    n.onError(function(e) {
                        n.offClose(),
                        n.offLoad(),
                        n.offError(),
                        console.log("vivo----------- vd fail" + JSON.stringify(e)),
                        t(!1)
                    })
                }
            },
            showSpot: function() {
                if ("" != vivoSpotADId && this._canShowAD) {
                    var e = qg.createInterstitialAd({
                        posId: vivoSpotADId
                    });
                    console.log("vivo--------------  spot show"),
                    e.show(),
                    e.onLoad(function() {
                        console.log("vivo--------------  spot load success")
                    }),
                    e.onError(function(t) {
                        console.log("vivo--------------  spot show fail" + JSON.stringify(t)),
                        e.offLoad(),
                        e.offError()
                    })
                }
            },
            showSpotByPause: function() {
                this.showSpot()
            },
            showSpotByBegin: function() {
                this.showSpot()
            },
            showSpotByFinish: function() {
                this.showSpot()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    WxManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a30ebwmq9VLnKP0qLADt+bB", "WxManager");
        var n = e
          , a = t;
        window.canExperienceGame = 1,
        window.wxServerVersion = 0,
        window.wxJumpBtnHaveMove = 1,
        window.wxShareFailTips = "\u901a\u8baf\u5931\u8d25",
        window.wxJumpShowBannerDelayTime = 1.5,
        window.videoFailJumpShare = 1,
        window.canShowBanner = 1;
        var o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                already: !1,
                haveGetAuthorize: !1,
                banner: null,
                gameClubButton: null,
                bannerTimeOut: -1,
                shareOnShow: !1,
                isOnceShare: !0,
                shareCallBack: null,
                shareBegTime: 0,
                _shareQuery: ""
            },
            isOpen: function(e) {
                return e == KEY_IS_SHENHE && !getCanShare()
            },
            init: function(e) {
                this.jumpOtherGameTime = 0,
                this.jumpOtherGameOnShowGetGold = !1,
                this.CrossPromotion = 1,
                this.CrossPromotionIcon = 1,
                this.CrossPromotionSplash = 0,
                this.CrossPromotionSpot = 0,
                this.CrossPromotionRecommend = 0,
                this.CrossPromotionAward = 0,
                wx.triggerGC(),
                this.shareAndVideoAllNum = 0,
                this.canShowRedPack = 1,
                this.showRedPackNum = 10,
                this.shareSuccessProbability = 100,
                this.shareOrVideoType = 4;
                try {
                    wx.aldSendEvent("initAld", {
                        "": ""
                    })
                } catch (e) {}
                if (SdkManager.onShow(function() {
                    var e;
                    if (this.shareOnShow && ((e = getTime() / 1e3) - this.shareBegTime > 5 ? (this.shareCallBack && this.shareCallBack(1),
                    this.setDataForHttp(this._shareQuery)) : e - this.shareBegTime > 2 ? this.isOnceShare ? Math.random() > .5 ? (this.shareCallBack && this.shareCallBack(1),
                    this.setDataForHttp(this._shareQuery)) : this.shareCallBack && this.shareCallBack(0) : 100 * Math.random() > this.shareSuccessProbability ? this.shareCallBack && this.shareCallBack(0) : (this.shareCallBack && this.shareCallBack(1),
                    this.setDataForHttp(this._shareQuery)) : this.shareCallBack && this.shareCallBack(0),
                    this.isOnceShare = !this.isOnceShare),
                    this.jumpOtherGameOnShowGetGold && (e = getTime() / 1e3) - this.jumpOtherGameTime > quickGame.awardGoldTime) {
                        var t = 10 * quickGame.awardGoldDouble
                          , n = Userdefault.getIntForKey(lieyou.Key_Gold, 0);
                        Userdefault.setDataForKey(lieyou.Key_Gold, n + t),
                        wkCommonScript.addToast({
                            str: "+" + t
                        })
                    }
                    this.jumpOtherGameOnShowGetGold = !1,
                    this.shareOnShow = !1
                }
                .bind(this)),
                e && e.getAuthorize && (this.haveGetAuthorize = e.getAuthorize),
                "function" == typeof wx.getUpdateManager) {
                    var t = wx.getUpdateManager();
                    t.onCheckForUpdate(function() {}),
                    t.onUpdateReady(function() {
                        t.applyUpdate()
                    }),
                    t.onUpdateFailed(function() {})
                }
                this.login(),
                this.setShareData(),
                this.setMoreGameData(),
                this.getOnlineData()
            },
            getHaveVideo: function() {
                return "" != wxVideoId
            },
            getSysPlatform: function() {
                return 0
            },
            getJumpBtnHaveMove: function() {
                return getCanShare() && "" != wxBannerId ? wxJumpBtnHaveMove : 0
            },
            getOnlineData: function() {
                var e = this;
                this.setDataForHttp(wxData.getOnlineData, function(t) {
                    if ("" != t) {
                        var n = JSON.parse(t).data;
                        n.videoFailJumpShare && (videoFailJumpShare = parseInt(n.videoFailJumpShare)),
                        n.canShowBanner && (canShowBanner = parseInt(n.canShowBanner)),
                        n.wxJumpShowBannerDelayTime && (wxJumpShowBannerDelayTime = parseFloat(n.wxJumpShowBannerDelayTime)),
                        n.wxShareFailTips && (wxShareFailTips = n.wxShareFailTips),
                        n.wxJumpBtnHaveMove && (wxJumpBtnHaveMove = parseInt(n.wxJumpBtnHaveMove)),
                        n.wxServerVersion && (wxServerVersion = parseInt(n.wxServerVersion)),
                        n.canShowRedPack && (e.canShowRedPack = parseInt(n.canShowRedPack)),
                        n.showRedPackNum && (e.showRedPackNum = parseInt(n.showRedPackNum)),
                        n.canExperienceGame && (canExperienceGame = parseInt(n.canExperienceGame)),
                        n.shareOrVideoType && (e.shareOrVideoType = parseInt(n.shareOrVideoType)),
                        n.shareSuccessProbability && (e.shareSuccessProbability = parseInt(n.shareSuccessProbability)),
                        n.bannerDelayTime && parseInt(n.bannerDelayTime) >= 5 && (wxData.bannerOnlindDelayTime = parseInt(n.bannerDelayTime)),
                        n.shareSwitch && (wxData.shareOnlineData = n.shareSwitch),
                        n.wxVideoId && "" != n.wxVideoId && (wxVideoId = n.wxVideoId),
                        n.wxBannerId && "" != n.wxBannerId && (wxBannerId = n.wxBannerId),
                        n.forward && (wxData.WXforward = JSON.parse(n.forward)),
                        n.spotControl && e.setSpotData(n.spotControl),
                        wxData.params = n
                    }
                })
            },
            returnHomeJumpGame: function() {
                "" != wxData.WXforward && this.getSDKVersionCanUse("2.2.0") && wx.navigateToMiniProgram(wxData.WXforward)
            },
            getParamByOnline: function(e, t) {
                return wxData.params && wxData.params[e] ? wxData.params[e] : t
            },
            setSpotData: function(e) {
                if (e.interval && (pauseSpotInterval = e.interval,
                resultSpotInterval = e.interval),
                e.intervalTime && (pauseSpotTime = e.intervalTime,
                resultSpotTime = e.intervalTime),
                e.startInterval && (pauseSpotStartIndex = e.startInterval,
                resultSpotStartIndex = e.startInterval),
                e.items)
                    for (var t = 0; t < e.items.length; t++)
                        e.items[t].type && "pause" == e.items[t].type && (e.items[t].interval && (pauseSpotInterval = e.items[t].interval),
                        e.items[t].intervalTime && (pauseSpotTime = e.items[t].intervalTime),
                        e.items[t].startInterval && (pauseSpotStartIndex = e.items[t].startInterval)),
                        e.items[t].type && "result" == e.items[t].type && (e.items[t].interval && (resultSpotInterval = e.items[t].interval),
                        e.items[t].intervalTime && (resultSpotTime = e.items[t].intervalTime),
                        e.items[t].startInterval && (resultSpotStartIndex = e.items[t].startInterval))
            },
            onHide: function(e) {
                wx.onHide(e)
            },
            onShow: function(e) {
                wx.onShow(e)
            },
            jumpRefreshBanner: function(e) {
                var t = this;
                e.x || (e.x = 0),
                e.y || (e.y = 0),
                this.getJumpBtnHaveMove() ? (this.hideBanner(),
                e.node ? e.node.runAction(cc.sequence(cc.delayTime(wxJumpShowBannerDelayTime), cc.callFunc(function() {
                    t.showBannerByBottom(wxBannerId)
                }), cc.delayTime(.5), cc.moveTo(.2, e.x, e.y))) : setTimeout(function() {
                    t.showBannerByBottom(wxBannerId)
                }, wxJumpShowBannerDelayTime)) : (this.showBannerByBottom(wxBannerId),
                e.node && (e.node.x = e.x,
                e.node.y = e.y))
            },
            showBanner: function(e) {
                if (canShowBanner) {
                    var t = this;
                    this.getSDKVersionCanUse("2.0.4") && (e.adUnitId = wxBannerId,
                    "" != e.adUnitId && (clearInterval(this.bannerTimeOut),
                    this.banner && this.banner.destroy(),
                    this.banner = wx.createBannerAd(e),
                    this.banner.show(),
                    this.banner.onError(function(e) {
                        var n = cc.director.getScene().name
                          , a = -1;
                        t.getSDKVersionCanUse("2.2.2") && (a = e.errCode);
                        var o = serverUrl + "lieyou/wxdata/addGameVideoAdvertis?ad_type=1&appid=" + wxAppId + "&openid=" + openid + "&page=" + n + "&type=" + a;
                        t.setDataForHttp(o)
                    }),
                    this.bannerTimeOut = setInterval(this.refreshBanner.bind(this, e), 1e3 * wxData.bannerOnlindDelayTime)))
                }
            },
            showBannerCustom: function(e) {
                if (this.getSDKVersionCanUse("2.0.4") && "" != e.adUnitId) {
                    clearInterval(this.bannerTimeOut),
                    this.banner && this.banner.destroy();
                    var t, n = 0, a = cc.view.getFrameSize();
                    n = a.width,
                    t = a.height,
                    console.log(a);
                    var o = n
                      , i = t - (n *= e.scale) / 3.5 - 0
                      , s = (o - n) / 2
                      , c = e.x ? e.x : s
                      , r = e.y ? e.y : i;
                    this.showBanner({
                        adUnitId: e.id,
                        style: {
                            left: c,
                            top: r - 20,
                            width: n
                        }
                    })
                }
            },
            refreshBanner: function(e) {
                canShowBanner && this.banner && (this.banner.destroy(),
                this.banner = wx.createBannerAd(e),
                this.banner.show(),
                this.banner.onError(function() {}))
            },
            showBannerByBottom: function(e) {
                var t, n, a = cc.view.getFrameSize();
                t = a.width,
                n = a.height,
                console.log(a);
                var o = n - t / 3.5 - 20
                  , i = (t - t) / 2;
                this.showBanner({
                    adUnitId: e,
                    style: {
                        left: i,
                        top: o,
                        width: t
                    }
                })
            },
            showBannerByTop: function(e) {
                var t, n = cc.view.getFrameSize();
                t = n.width,
                n.height,
                console.log(n);
                var a = (t - t) / 2;
                this.showBanner({
                    adUnitId: e,
                    style: {
                        left: a,
                        top: 0,
                        width: t
                    }
                })
            },
            hideBanner: function() {
                this.banner && (clearInterval(this.bannerTimeOut),
                this.banner.destroy(),
                this.banner = null)
            },
            showRewardedVideoAd: function(e, t) {
                if (this.shareAndVideoAllNum++,
                this.getSDKVersionCanUse("2.0.4") && "" != wxVideoId) {
                    var n = this;
                    try {
                        wx.aldSendEvent("playVideo", {
                            result: "playBegin"
                        })
                    } catch (e) {}
                    var a = wx.createRewardedVideoAd({
                        adUnitId: wxVideoId
                    });
                    a.load().then(function() {
                        return a.show()
                    }).catch(function() {
                        return console.log("s")
                    }),
                    a.offClose(),
                    a.onClose(function(e) {
                        if (n.getSDKVersionCanUse("2.1.0"))
                            if (e.isEnded)
                                try {
                                    t(e.isEnded),
                                    wx.aldSendEvent("playVideo", {
                                        result: "playSuccess"
                                    })
                                } catch (e) {}
                            else
                                try {
                                    videoFailJumpShare ? Math.random() > .5 && getCanShare() ? (this.shareAndVideoAllNum--,
                                    n.share({
                                        name: GameName,
                                        source: 10,
                                        success: t
                                    })) : n.showGameRecommend(t) : t(!1),
                                    wx.aldSendEvent("playVideo", {
                                        result: "playFail"
                                    })
                                } catch (e) {}
                        else {
                            try {
                                wx.aldSendEvent("playVideo", {
                                    result: "playSuccess"
                                })
                            } catch (e) {}
                            t(!0)
                        }
                    }),
                    a.offError(),
                    a.onError(function(e) {
                        var a = cc.director.getScene().name
                          , o = -1;
                        n.getSDKVersionCanUse("2.2.2") && (o = e.errCode);
                        var i = serverUrl + "lieyou/wxdata/addGameVideoAdvertis?ad_type=0&appid=" + wxAppId + "&openid=" + openid + "&page=" + a + "&type=" + o;
                        n.setDataForHttp(i);
                        try {
                            wx.aldSendEvent("playVideo", {
                                result: "getVideoFail"
                            })
                        } catch (e) {}
                        videoFailJumpShare ? Math.random() > .5 && getCanShare() ? (n.shareAndVideoAllNum--,
                        n.share({
                            name: GameName,
                            source: 10,
                            success: t
                        })) : n.showGameRecommend(t) : t(!1)
                    })
                } else
                    t(!1)
            },
            showForum: function(e) {
                var t = wx.getSystemInfoSync();
                this.getSDKVersionCanUse("2.0.3") && (t.screenWidth,
                t.screenHeight,
                this.gameClubButton ? this.gameClubButton.show() : this.gameClubButton = wx.createGameClubButton(e))
            },
            closeForum: function() {
                this.getSDKVersionCanUse("2.0.3") && this.gameClubButton && this.gameClubButton.hide()
            },
            getAuthorize: function() {
                var e = this;
                wx.authorize({
                    scope: "scope.userInfo",
                    success: function() {
                        wx.getUserInfo({
                            success: function(t) {
                                var n = t.userInfo;
                                uinfo.nick = n.nickName,
                                uinfo.icon = n.avatarUrl,
                                uinfo.sex = n.gender,
                                uinfo.province = n.province,
                                uinfo.city = n.city,
                                uinfo.country = n.country;
                                var a = wx.getLaunchOptionsSync().query
                                  , o = 0;
                                wx.getLaunchOptionsSync().referrerInfo && wx.getLaunchOptionsSync().referrerInfo.appId && (o = wx.getLaunchOptionsSync().referrerInfo.appId);
                                var i = wx.getLaunchOptionsSync().scene;
                                try {
                                    wx.aldSendEvent("starGame", {
                                        appid: o,
                                        scene: i
                                    })
                                } catch (e) {}
                                var s = serverUrl + "lieyou/wxdata/addGameSourceInfo?appid=" + wxAppId + "&openid=" + openid + "&scence=" + i + "&s_appid=" + o + "&s_path=" + JSON.stringify(a);
                                if (e.setDataForHttp(s),
                                a.source) {
                                    var c = wxData.putTouchShareDataUrl + "?appId=" + a.appId + "&principal_gamerId=" + a.gamerId + "&assistant_gamerId=" + openid + "&itemId=" + a.itemId + "&source=" + a.source;
                                    a.inviteFriend && (c += "&name=" + n.nickName + "&icon=" + n.avatarUrl + "&inviteFriend=" + a.inviteFriend),
                                    e.setDataForHttp(c),
                                    Userdefault.getBoolForKey(a.gamerId, !1) || (canGetLocalCard = !0,
                                    getLocalCareId = "" + a.gamerId)
                                }
                            }
                        })
                    }
                })
            },
            login: function() {
                var e = this;
                wx.login({
                    success: function(t) {
                        e.getOpenId(t.code)
                    }
                })
            },
            getOpenId: function(e) {
                var t = this;
                this.setDataForHttp(wxData.getOpenIdUrl + "?appid=" + wxData.appId + "&secret=" + wxData.appSecret + "&js_code=" + e + "&grant_type=authorization_code", function(e) {
                    var n = JSON.parse(e);
                    if (openid = n.openid,
                    wxData.session_key = n.session_key,
                    uinfo.uid = openid,
                    wsurl += openid,
                    !t.already) {
                        t.openShare(),
                        t.haveGetAuthorize && t.getAuthorize();
                        var a = wx.getLaunchOptionsSync().query
                          , o = 0;
                        wx.getLaunchOptionsSync().referrerInfo && wx.getLaunchOptionsSync().referrerInfo.appId && (o = wx.getLaunchOptionsSync().referrerInfo.appId);
                        var i = wx.getLaunchOptionsSync().scene;
                        try {
                            wx.aldSendEvent("starGame", {
                                appid: o,
                                scene: i
                            })
                        } catch (e) {}
                        var s = serverUrl + "lieyou/wxdata/addGameSourceInfo?appid=" + wxAppId + "&openid=" + openid + "&scence=" + i + "&s_appid=" + o + "&s_path=" + JSON.stringify(a);
                        t.setDataForHttp(s);
                        var c = "lieyou";
                        a.channel && (c = a.channel),
                        t.setDataForHttp(wxData.putPlayerData + openid + "/" + c),
                        t.checkResurrNum(),
                        t.already = !0
                    }
                })
            },
            setShareData: function() {
                this.setDataForHttp(wxData.shareUrl, function(e) {
                    wxData.shareData = JSON.parse(e)
                })
            },
            setMoreGameData: function() {
                var e = "android";
                cc.sys.os == cc.sys.OS_IOS && (e = "ios"),
                this.setDataForHttp(wxData.moreGameUrl + "&sysPlatForm=" + e, function(e) {
                    wxData.moreGameData = JSON.parse(e);
                    for (var t = 0; t < wxData.moreGameData.length; t++)
                        wxData.moreGameData[t].screen && wxData.moreGameData[t].screen.length > 0 && wxData.moreGameData[t].screen[0].length > 0 && spotData.push(wxData.moreGameData[t]),
                        quickGame.RecommendIconData[t] = {
                            jumpData: wxData.moreGameData[t].jumpType,
                            url: wxData.moreGameData[t].icon,
                            gameName: ""
                        }
                })
            },
            showGuessYouLickOne: function(e) {
                if (!this.isOpen(KEY_IS_SHENHE)) {
                    var t = this;
                    if (wxData.moreGameData.length <= 0)
                        setTimeout(function() {
                            e.node.isValid && t.showGuessYouLickOne(e)
                        }, 1e3);
                    else if (e.node) {
                        for (var n = [], a = 0, o = 0; o < wxData.moreGameData.length; o++)
                            wxData.moreGameData[o].iconX && wxData.moreGameData[o].jumpData && (n[a] = wxData.moreGameData[o],
                            a++);
                        n.length <= 2 ? cc.loader.loadRes("SDK/module/GuessYouLike/JKZG", function(t, n) {
                            if (e.node && e.node.isValid) {
                                var a = cc.instantiate(n);
                                e.node.addChild(a),
                                a.x = e.x ? e.x : 0;
                                var o = e.align ? e.align : 0;
                                a.y = (e.y ? e.y : 0) - 74 * o
                            }
                        }) : cc.loader.loadRes("SDK/module/GuessYouLike/GuessYouLike_once", function(t, n) {
                            if (e.node && e.node.isValid) {
                                var a = cc.instantiate(n);
                                e.node.addChild(a),
                                a.x = e.x ? e.x : 0;
                                var o = e.align ? e.align : 0;
                                a.y = (e.y ? e.y : 0) - 100 * o
                            }
                        })
                    }
                }
            },
            showGuessYouLickTow: function(e) {
                if (!this.isOpen(KEY_IS_SHENHE)) {
                    var t = this;
                    if (wxData.moreGameData.length <= 0)
                        setTimeout(function() {
                            e.node.isValid && t.showGuessYouLickTow(e)
                        }, 1e3);
                    else if (e.node) {
                        for (var n = [], a = 0, o = 0; o < wxData.moreGameData.length; o++)
                            wxData.moreGameData[o].iconX && wxData.moreGameData[o].jumpData && (n[a] = wxData.moreGameData[o],
                            a++);
                        n.length <= 2 ? cc.loader.loadRes("SDK/module/GuessYouLike/JKZG", function(t, n) {
                            if (e.node && e.node.isValid) {
                                var a = cc.instantiate(n);
                                e.node.addChild(a),
                                a.x = e.x ? e.x : 0;
                                var o = e.align ? e.align : 0;
                                a.y = (e.y ? e.y : 0) - 74 * o
                            }
                        }) : n.length <= 3 ? this.showGuessYouLickOne(e) : cc.loader.loadRes("SDK/module/GuessYouLike/GuessYouLike_tow", function(t, n) {
                            if (e.node && e.node.isValid) {
                                var a = cc.instantiate(n);
                                e.node.addChild(a),
                                a.x = e.x ? e.x : 0;
                                var o = e.align ? e.align : 0;
                                a.y = (e.y ? e.y : 0) - 160 * o
                            }
                        })
                    }
                }
            },
            showGuessYouLike_3: function(e) {
                if (!this.isOpen(KEY_IS_SHENHE)) {
                    var t = this;
                    wxData.moreGameData.length <= 0 ? setTimeout(function() {
                        e.node.isValid && t.showGuessYouLike_3(e)
                    }, 1e3) : cc.loader.loadRes("SDK/module/GuessYouLike/GuessYouLike_3", function(t, n) {
                        if (e.node && e.node.isValid) {
                            var a = cc.instantiate(n);
                            e.node.addChild(a),
                            a.x = e.x ? e.x : 0,
                            a.y = e.y ? e.y : 0
                        }
                    })
                }
            },
            showMoreGameByBanner: function(e) {
                if (!this.isOpen(KEY_IS_SHENHE)) {
                    e = {};
                    var t = this
                      , n = cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/moreGame/bannerMoreGame", function(a, o) {
                        if (wxData.moreGameData.length <= 0)
                            setTimeout(function() {
                                n.isValid && t.showMoreGameByBanner(e)
                            }, 1e3);
                        else {
                            var i = cc.instantiate(o);
                            n.addChild(i)
                        }
                    })
                }
            },
            showAllRankingLayer: function(e) {
                if (this.getSDKVersionCanUse("1.9.92")) {
                    var t = e.orderStr ? e.orderStr : "false";
                    cc.loader.loadRes("SDK/module/rank/allRanking", function(n, a) {
                        var o = cc.instantiate(a);
                        e.node.addChild(o, 9999),
                        o.setPosition(e.x ? e.x : 0, e.y ? e.y : 0),
                        o.getComponent("allRank").setData(e.rankKey, e.closeFun, t)
                    })
                }
            },
            showFailRankingLayer: function(e) {
                if (this.getSDKVersionCanUse("1.9.92")) {
                    var t = e.orderStr ? e.orderStr : "false";
                    cc.loader.loadRes("SDK/module/rank/failRanking", function(n, a) {
                        var o = cc.instantiate(a);
                        e.node.addChild(o, 9999),
                        o.setPosition(e.x ? e.x : 0, e.y ? e.y : 0),
                        o.getComponent("failRank").setData(e.rankKey, e.showAndHideNode, t)
                    })
                }
            },
            showSpotByBegin: function() {
                this.showMySpot()
            },
            showSpotByPause: function() {
                this.showMySpot()
            },
            showSpotByFinish: function() {
                this.showMySpot()
            },
            showMySpot: function() {
                if (this.getSDKVersionCanUse("2.6.0") && "" != wxSpotId) {
                    var e = wx.createInterstitialAd({
                        adUnitId: wxSpotId
                    });
                    this.getSDKVersionCanUse("2.8.0") && e.load(),
                    e.onLoad(function() {
                        e.show()
                    }),
                    e.onError(function(t) {
                        e.offError(),
                        e.offLoad(),
                        this.getSDKVersionCanUse("2.8.0") && e.destroy(),
                        console.log("show spot ad fail   " + JSON.stringify(t))
                    })
                }
            },
            setRankingData: function(e, t) {
                this.getSDKVersionCanUse("1.9.92") && wx.setUserCloudStorage({
                    KVDataList: [{
                        key: e,
                        value: "" + t
                    }],
                    success: function() {
                        console.log("success")
                    },
                    fail: function() {
                        console.log("fail")
                    },
                    complete: function() {
                        console.log("complete")
                    }
                })
            },
            showMoreGame: function() {
                if (!(wxData.moreGameData.length <= 0)) {
                    var e = parseInt(Math.random() * wxData.moreGameData.length)
                      , t = wxData.moreGameData[e];
                    this.jumpApp(t.jumpData, t.image, 1, 1);
                    try {
                        var n = t.icon.split("/")
                          , a = n[n.length - 2];
                        wx.aldSendEvent("moreGame", {
                            gameName: a
                        })
                    } catch (e) {}
                }
            },
            shareHelpSuccess: function(e) {
                if (this.shareOnShow = !0,
                this.shareBegTime = getTime() / 1e3,
                this.shareCallBack = null,
                wxData.shareData.length > 0 && getCanShare()) {
                    for (var t = 0, n = "", a = "", o = 0; o < wxData.shareData.length; o++)
                        if (wxData.shareData[o].mode == GameName) {
                            var i = wxData.shareData[o].item;
                            wxData.shareData[o].level && wxData.shareData[o].level.success && (i = wxData.shareData[o].level.success);
                            var s = parseInt(Math.random() * i.length);
                            t = i[s].id,
                            n = (n = i[s].title).replace(/%d/g, e + 1),
                            a = i[s].img
                        }
                    var c = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + t + "&source=9";
                    this._shareQuery = c,
                    wx.aldShareAppMessage({
                        title: n,
                        imageUrl: a,
                        query: c
                    })
                } else
                    c = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=9",
                    this._shareQuery = c,
                    wx.aldShareAppMessage({
                        title: "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427",
                        imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
                        query: c
                    })
            },
            shareHelp: function(e) {
                if (this.shareOnShow = !0,
                this.shareBegTime = getTime() / 1e3,
                this.shareCallBack = null,
                wxData.shareData.length > 0 && getCanShare()) {
                    for (var t = 0, n = "", a = "", o = 0; o < wxData.shareData.length; o++)
                        if (wxData.shareData[o].mode == GameName) {
                            var i = wxData.shareData[o].item;
                            wxData.shareData[o].level && wxData.shareData[o].level.help && (i = wxData.shareData[o].level.help);
                            var s = parseInt(Math.random() * i.length);
                            t = i[s].id,
                            n = (n = i[s].title).replace(/%d/g, e + 1),
                            a = i[s].img
                        }
                    var c = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + t + "&source=8&level=" + e;
                    this._shareQuery = c,
                    wx.aldShareAppMessage({
                        title: n,
                        imageUrl: a,
                        query: c
                    })
                } else
                    c = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=8&level=" + e,
                    this._shareQuery = c,
                    wx.aldShareAppMessage({
                        title: "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427",
                        imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
                        query: c
                    })
            },
            helpFriendSuccess: function(e) {
                var t = serverUrl + "lieyou/wxdata/addHelpRecord?wxGameId=" + wxAppId + "&gamerId=" + helpOpenId + "&level=" + e + "&icon=" + uinfo.icon + "&name=" + uinfo.nick;
                this.setDataForHttp(t)
            },
            getIsHaveFriendHelpMe: function(e, t) {
                var n = serverUrl + "lieyou/wxdata/getClickInfo/" + wxAppId + "/" + openid + "/" + e;
                this.setDataForHttp(n, function(n) {
                    var a = JSON.parse(n);
                    a.name && "" != a.name && t({
                        level: e,
                        name: a.name,
                        icon: a.icon
                    })
                })
            },
            share: function(e) {
                if (this.shareAndVideoAllNum++,
                this.shareOnShow = !0,
                this.shareBegTime = getTime() / 1e3,
                e.success ? this.shareCallBack = e.success : this.shareCallBack = null,
                !e.getGroupId || e.getGroupId,
                wxData.shareData.length <= 0 || !getCanShare()) {
                    var t = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=" + e.source;
                    return e.inviteFriend && (t += "&inviteFriend=" + e.inviteFriend),
                    this._shareQuery = t,
                    void wx.aldShareAppMessage({
                        title: "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427",
                        imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
                        query: t
                    })
                }
                for (var n = 0, a = "", o = "", i = 0; i < wxData.shareData.length; i++)
                    if (wxData.shareData[i].mode == e.name) {
                        var s = wxData.shareData[i].item
                          , c = parseInt(Math.random() * s.length);
                        n = s[c].id,
                        a = s[c].title,
                        o = s[c].img
                    }
                t = wxData.putShareDataUrl + "?dsadsa=dsdsd&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + n + "&source=" + e.source,
                e.inviteFriend && (t += "&inviteFriend=" + e.inviteFriend),
                this._shareQuery = t,
                wx.aldShareAppMessage({
                    title: a,
                    imageUrl: o,
                    query: t
                })
            },
            checkResurrNum_2: function() {
                if (canGetNetCardNum)
                    return canGetNetCardNum = !1,
                    setTimeout(function() {
                        canGetNetCardNum = !0
                    }, getNetCardTime),
                    this.checkResurrNum();
                var e = Userdefault.getIntForKey(localCardKey, 0);
                return e + netCardNum > 5 ? 5 : e + netCardNum
            },
            checkResurrNum: function() {
                this.setDataForHttp(wxData.checkResurrDataUrl + "?appId=" + wxData.appId + "&gamerId=" + openid, function(e) {
                    netCardNum = parseInt(e)
                });
                var e = Userdefault.getIntForKey(localCardKey, 0);
                return e + netCardNum > 5 ? 5 : e + netCardNum
            },
            useResurr: function() {
                var e = Userdefault.getIntForKey(localCardKey, 0);
                if (e > 0) {
                    var t = e + netCardNum
                      , n = 1;
                    return t >= 5 && (n = t - 4),
                    void Userdefault.setDataForKey(localCardKey, e - n)
                }
                netCardNum--;
                var a = wxData.useResurrDataUrl + "?appId=" + wxData.appId + "&gamerId=" + openid;
                this.setDataForHttp(a)
            },
            addLocalResurr: function() {
                var e = Userdefault.getIntForKey(localCardKey, 0);
                Userdefault.setDataForKey(localCardKey, e + 1)
            },
            getHelpLevel: function() {
                var e = wx.getLaunchOptionsSync().query;
                return e.level && 8 == e.source ? (helpOpenId = e.gamerId,
                parseInt(e.level)) : -1
            },
            openShare: function() {
                var e = this;
                if (!this.haveGetAuthorize) {
                    var t = wx.getLaunchOptionsSync().query;
                    if (t.source) {
                        var n = wxData.putTouchShareDataUrl + "?appId=" + t.appId + "&principal_gamerId=" + t.gamerId + "&assistant_gamerId=" + openid + "&itemId=" + t.itemId + "&source=" + t.source;
                        this.setDataForHttp(n),
                        Userdefault.getBoolForKey(t.gamerId, !1) || (canGetLocalCard = !0,
                        getLocalCareId = "" + t.gamerId)
                    }
                }
                wx.showShareMenu({
                    withShareTicket: !0
                }),
                wx.aldOnShareAppMessage(function() {
                    e.shareOnShow = !0,
                    e.shareBegTime = getTime() / 1e3,
                    e.shareCallBack = null;
                    for (var t = -1, n = "\u597d\u73a9\u7684\u6e38\u620f\uff0c\u5feb\u6765\u4e00\u8d77\u73a9\u5427", a = "https://res.igame58.com/wxxyx/commom/shareIcon.png", o = 0; o < wxData.shareData.length; o++)
                        if (wxData.shareData[o].mode == GameName) {
                            var i = wxData.shareData[o].item
                              , s = parseInt(Math.random() * i.length);
                            t = i[s].id,
                            n = i[s].title,
                            a = i[s].img
                        }
                    var c = wxData.putShareDataUrl + "?sdsdsds=dsds&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + t + "&source=1";
                    return e._shareQuery = c,
                    {
                        title: n,
                        imageUrl: a,
                        query: c
                    }
                })
            },
            jumpApp: function(e, t, n, a) {
                var o = this;
                this.getSDKVersionCanUse("2.2.0") ? wx.navigateToMiniProgram({
                    appId: e.appId,
                    path: e.path,
                    fail: function(i) {
                        var s = e.appId
                          , c = serverUrl + "lieyou/wxdata/addGamePromotion?page=" + n + "&appid=" + wxAppId + "&s_number=" + a + "&forward_appid=" + s + "&openid=" + openid + "&status=0";
                        o.setDataForHttp(c),
                        "navigateToMiniProgram:fail cancel" != i.errMsg && wx.previewImage({
                            current: t[0],
                            urls: t,
                            success: function() {}
                        })
                    },
                    success: function() {
                        var t = e.appId
                          , i = serverUrl + "lieyou/wxdata/addGamePromotion?page=" + n + "&appid=" + wxAppId + "&s_number=" + a + "&forward_appid=" + t + "&openid=" + openid + "&status=1";
                        o.setDataForHttp(i)
                    }
                }) : wx.previewImage({
                    current: t[0],
                    urls: t,
                    success: function() {}
                })
            },
            setDataForHttp: function(e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    if (4 == n.readyState && n.status >= 200 && n.status < 400) {
                        var e = n.responseText;
                        "-1" == e || "-2" == e || t && t(e)
                    }
                }
                ,
                n.open("GET", e, !0),
                n.send()
            },
            addToast: function() {},
            shareDialog: function() {},
            addGetLocakCardDialog: function() {},
            modifyInviteFriend: function(e) {
                var t = serverUrl + "lieyou/wxdata/modifyFlag/" + wxAppId + "/" + openid + "/" + e;
                this.setDataForHttp(t)
            },
            deleteInviteFriend: function(e) {
                var t = serverUrl + "lieyou/wxdata/delFriendInfo/" + e;
                this.setDataForHttp(t)
            },
            getInviteFriendData: function(e, t) {
                var n = serverUrl + "lieyou/wxdata/getFriendInfo/" + wxAppId + "/" + openid + "/" + e;
                this.setDataForHttp(n, function(e) {
                    var n = JSON.parse(e);
                    t(n)
                })
            },
            showInviteFriend: function() {},
            showInviteFriendFailure: function() {},
            getOnlineSpriteFrame: function(e, t) {
                if ("" != e) {
                    var n = {
                        url: e,
                        type: "image"
                    };
                    cc.loader.load(n, function(e, n) {
                        e || t(new cc.SpriteFrame(n))
                    })
                }
            },
            getSDKVersionCanUse: function(e) {
                for (var t = wx.getSystemInfoSync().SDKVersion, n = e.split("."), a = t.split("."), o = 0; o < 3; o++) {
                    if (a[o] < n[o])
                        return !1;
                    if (a[o] > n[o])
                        break
                }
                return !0
            },
            showRedPack: function(e) {
                if (this.canShowRedPack && !(this.isOpen(KEY_IS_SHENHE) || Userdefault.getIntForKey("SDK_redPackManeyNum", 0) >= 1900)) {
                    var t = getTimeDay()
                      , n = Userdefault.getIntForKey("SDK_redPackShowNum", 0);
                    Userdefault.getIntForKey("SDK_redPackShowDay", 0) != t && (n = 0),
                    n >= this.showRedPackNum || (Userdefault.setDataForKey("SDK_redPackShowDay", t),
                    Userdefault.setDataForKey("SDK_redPackShowNum", n + 1),
                    cc.loader.loadRes("SDK/module/redPacket/redPackGameOver", function(t, n) {
                        var a = cc.find("Canvas")
                          , o = cc.instantiate(n);
                        o.name = "dialog",
                        a.addChild(o, 999),
                        o.getComponent("receiveRedPack").setCallBack(e.callBack ? e.callBack : null)
                    }))
                }
            },
            showRedIcon: function(e) {
                this.canShowRedPack && !this.isOpen(KEY_IS_SHENHE) && cc.loader.loadRes("SDK/module/redPacket/redPack", function(t, n) {
                    var a = cc.instantiate(n)
                      , o = e.node ? e.node : cc.find("Canvas");
                    a.x = e.x ? e.x : 0,
                    a.y = e.y ? e.y : 0,
                    o.addChild(a)
                })
            },
            showGameRecommend: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (canExperienceGame)
                    if (this.isOpen(KEY_IS_SHENHE))
                        e && e(!1);
                    else {
                        var t = Userdefault.getIntForKey("SKD_showRecommendDialogTime", 0)
                          , n = parseInt(getTime() / 1e3);
                        n - t < 10 ? e && e(!1) : (Userdefault.setDataForKey("SKD_showRecommendDialogTime", n),
                        cc.loader.loadRes("SDK/module/RecommendGame/Recommend_playVD", function(t, n) {
                            var a = cc.instantiate(n);
                            cc.find("Canvas").addChild(a, 999),
                            a.getComponent("RecommendGame_playVD").setData(e)
                        }))
                    }
                else
                    e && e(!1)
            },
            getShareOrViedo: function() {
                if (this.isOpen(KEY_IS_SHENHE))
                    return 0;
                var e = this.shareAndVideoAllNum
                  , t = 0;
                if (1 == this.shareOrVideoType)
                    t = 0;
                else if (2 == this.shareOrVideoType)
                    t = 1;
                else if (3 == this.shareOrVideoType)
                    t = 2;
                else if (4 == this.shareOrVideoType)
                    t = e % 2 == 0 ? 1 : 2;
                else if (5 == this.shareOrVideoType)
                    t = e % 2 == 0 ? 2 : 1;
                else if (6 == this.shareOrVideoType) {
                    var n = (new Date).getHours();
                    n >= 0 && n < 10 && (t = 2),
                    t = e % 2 == 0 ? 2 : 1
                }
                return 2 == t ? "" == wxVideoId && (t = this.isOpen(KEY_IS_SHENHE) ? 0 : 1) : 1 == t && this.isOpen(KEY_IS_SHENHE) && (t = "" != wxVideoId ? 2 : 0),
                t
            },
            setWorldRankData: function(e, t) {
                var n = serverUrl + "lieyou/wxdata/addRankList?wxGameId=" + wxAppId + "&gamerId=" + openid + "&nikeName=" + uinfo.nick + "&headImagePath=" + uinfo.icon + "&score=" + t + "&rankKey=" + e;
                this.setDataForHttp(n)
            },
            newJumpApp: function(e) {
                this.getSDKVersionCanUse("2.2.0") ? wx.navigateToMiniProgram({
                    appId: e.data.appId,
                    path: e.data.path,
                    fail: function(e) {
                        e.errMsg
                    },
                    success: function() {
                        e.getGold && (this.jumpOtherGameTime = getTime() / 1e3,
                        this.jumpOtherGameOnShowGetGold = !0)
                    }
                    .bind(this)
                }) : wkCommonScript.addToast({
                    str: "\u7248\u672c\u4e0d\u652f\u6301"
                })
            },
            showMoreGameByIcon: function(e) {
                if (this.CrossPromotion && this.CrossPromotionIcon) {
                    var t = this;
                    cc.loader.loadRes("SDK/module/moreGame/iconMoreGame", function(n, a) {
                        if (wxData.moreGameData.length <= 0)
                            setTimeout(function() {
                                e.node.isValid && t.showMoreGameByIcon(e)
                            }, 1e3);
                        else {
                            var o = cc.instantiate(a);
                            e.node.addChild(o),
                            o.setPosition(e.x ? e.x : 0, e.y ? e.y : 0);
                            var i = parseInt(Math.random() * wxData.moreGameData.length)
                              , s = wxData.moreGameData[i];
                            o.getComponent("moreGame").setData(s.icon, s.image, s.jumpType, s.jumpData, 10, 1)
                        }
                    })
                }
            },
            showRecommendIcon: function(e) {
                !this.CrossPromotion || !this.CrossPromotionRecommend || quickGame.RecommendIconData.length <= 0 || cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_show", function(t, n) {
                    var a = cc.instantiate(n)
                      , o = e.node ? e.node : cc.find("Canvas");
                    a.x = e.x ? e.x : 0,
                    a.y = e.y ? e.y : 0,
                    o.addChild(a)
                })
            },
            showRecommendBegin: function(e) {
                this.CrossPromotion && this.CrossPromotionSplash ? quickGame.RecommendBannerData.length <= 0 ? e.callBack && e.callBack() : this.showRecommend(0, e) : e.callBack && e.callBack()
            },
            showRecommendFinish: function(e) {
                this.CrossPromotion && this.CrossPromotionSpot ? quickGame.RecommendBannerData.length <= 0 ? e.callBack && e.callBack() : this.showRecommend(1, e) : e.callBack && e.callBack()
            },
            showRecommend: function(e, t) {
                var n = this
                  , a = cc.find("Canvas");
                cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_Spot", function(o, i) {
                    if (a && a.isValid) {
                        n.hideBanner();
                        var s = cc.instantiate(i);
                        a.addChild(s),
                        s.getComponent("RecommendGame_Spot").setData(e, t)
                    }
                })
            },
            showArardGoldGrid: function(e) {
                if (this.CrossPromotion && this.CrossPromotionAward && !(quickGame.awardGoldData.length <= 0)) {
                    var t = this
                      , n = cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_award_grid", function(a, o) {
                        if (n && n.isValid) {
                            t.hideBanner();
                            var i = cc.instantiate(o);
                            n.addChild(i),
                            i.getComponent("Recommend_award_grid").setData(e)
                        }
                    })
                }
            },
            showArardGoldStrip: function(e) {
                if (this.CrossPromotion && this.CrossPromotionAward && !(quickGame.awardGoldData.length <= 0)) {
                    var t = this
                      , n = cc.find("Canvas");
                    cc.loader.loadRes("SDK/module/CrossPromotion/prefab/Recommend_award_strip", function(a, o) {
                        if (n && n.isValid) {
                            t.hideBanner();
                            var i = cc.instantiate(o);
                            n.addChild(i),
                            i.getComponent("Recommend_award_strip").setData(e)
                        }
                    })
                }
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    XiaoMiManagerH5: [function(e, t) {
        "use strict";
        cc._RF.push(t, "e8efa5qm05PZJwnd3h3jfc5", "XiaoMiManagerH5");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                bannerAd: null
            },
            getHaveVideo: function() {
                return !1
            },
            getSysPlatform: function() {
                return 7
            },
            init: function() {
                window.hy_dj_sdk.ready({
                    zIndex: 9999,
                    pin: 0
                }, function() {
                    console.log("xiaomi init over")
                })
            },
            getBaseData: function() {
                return hy_dj_sdk.getBaseData()
            },
            reload: function() {
                hy_dj_sdk.reload()
            }
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    XiaoMiManager: [function(e, t) {
        "use strict";
        cc._RF.push(t, "266b4aNftVFdZdvpDIT5PMs", "XiaoMiManager");
        var n = e
          , a = t
          , o = cc.Class({
            extends: n("BaseManager"),
            properties: {
                bannerAd: null
            },
            getHaveVideo: function() {
                return "" != xiaomi_VideoId
            },
            getSysPlatform: function() {
                return 9
            },
            init: function() {},
            showRewardedVideoAd: function(e, t) {
                if ("" != xiaomi_VideoId)
                    if (this.vaCallBack = t,
                    this.videoAd)
                        this.videoAd.show();
                    else {
                        var n = this;
                        this.videoAd = qg.createRewardedVideoAd({
                            adUnitId: xiaomi_VideoId
                        }),
                        this.videoAd.load(),
                        this.videoAd.onLoad(function() {
                            n.videoAd.show()
                        }),
                        this.videoAd.onError(function(e) {
                            n.vaCallBack(!1),
                            console.log(e)
                        }),
                        this.videoAd.onClose(function(e) {
                            console.log("xiaomi------play vd over-----  " + JSON.stringify(e)),
                            e && e.isEnded ? n.vaCallBack(!0) : n.vaCallBack(!1)
                        })
                    }
                else
                    t(!1)
            },
            hideBanner: function() {
                this.bannerAd && (this.bannerAd.destroy(),
                this.bannerAd = null)
            },
            showBanner: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("" != xiaomi_BannerId) {
                    var t = e.style ? e.style : {
                        left: 0,
                        top: 725,
                        width: 393
                    };
                    this.bannerAd || (this.bannerAd = qg.createBannerAd({
                        adUnitId: xiaomi_BannerId,
                        style: t
                    })),
                    this.bannerAd.show(),
                    this.bannerAd.onError(function(e) {
                        console.log("xiaomi------show banner fail-----  " + JSON.stringify(e))
                    })
                }
            },
            showBannerByBottom: function() {
                this.showBanner({})
            },
            addInstallShortcut: function() {}
        });
        a.exports = o,
        cc._RF.pop()
    }
    , {}],
    YYGGamesUtil: [function(e, t) {
        "use strict";
        cc._RF.push(t, "98fb3Sh6AZKFaxwynqqRzl2", "YYGGamesUtil"),
        window.ADFlag = !1,
        window.SOUNDFlag = !0,
        window.BOOT = null,
        window.YYGGamesUtil = new (function() {
            function e() {
                return this.YYGforgames = [],
                this.canScroll = !0,
                this.BannerScrollid = null,
                this.initLogFlag = !1,
                this
            }
            return e.prototype.init = function(e, t, n, a) {
                this.initSDK("https://h5gamessdk.yyggames.com/sdk/YYGGames.js", function() {
                    var o = this;
                    YYGGames.init({
                        appName: e.appID,
                        channel: e.channel || 0,
                        config: {
                            gamedistributionId: e.gamedistributionId,
                            gamemonetizeId: e.gamemonetizeId
                        },
                        complete: function() {
                            YYGGames.addEventListener(YYGGames.events.beforeShowAd, o, n),
                            YYGGames.addEventListener(YYGGames.events.afterShowAd, o, a),
                            YYGGames.addEventListener(YYGGames.events.adDismissed, o, function() {
                                YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward")
                            }),
                            t()
                        }
                    })
                })
            }
            ,
            e.prototype.initAd = function(e, t) {
                if (this.YYGforgames.length > 1) {
                    var n = Math.floor(19 * Math.random());
                    this.NodeHandle(e, this.YYGforgames[n], !1),
                    this.NodeHandle(t, this.YYGforgames[n + 1], !1)
                }
            }
            ,
            e.prototype.initGameBanner = function(e) {
                this.removeBanner();
                for (var t = this, n = 0; n < 15; n++) {
                    var a = cc.find("view/content/item", e)
                      , o = cc.find("view/content", e)
                      , i = cc.instantiate(a);
                    i.x = 5 + 175 * n;
                    var s = cc.find("Mask", i);
                    t.NodeHandle(s, t.YYGforgames[n], !0),
                    o.addChild(i)
                }
                this.BannerScrollid = window.setInterval(function() {
                    t.BannerScroll(o)
                }, 10)
            }
            ,
            e.prototype.removeBanner = function() {
                this.BannerScrollid && window.clearInterval(this.BannerScrollid)
            }
            ,
            e.prototype.bodyStyle = function(e, t) {
                var n = document.createElement("style");
                n.innerText = "#Game,#GameDiv {position: absolute;margin: 0;overflow: hidden;width: " + e + "px;height: " + t + "px;left: 50%;top: 50%;transform: translate(-50%, -50%);}",
                document.head.appendChild(n)
            }
            ,
            e.prototype.initSDK = function(e, t) {

                if(typeof YYGGames !== 'undefined'){
                    t();
                    return;
                }
        
            
                    var n = document.createElement("script");
                    n.setAttribute("type", "text/javascript"),
                    n.setAttribute("src", e),
                    document.getElementsByTagName("body")[0].appendChild(n),
                    t && (n.onload = t)
                          
            }
            ,
            e.prototype.BannerScroll = function(e) {
                e && this.canScroll && (e.x <= 0 && e.x > -720 ? e.x -= .5 : e.x = 0)
            }
            ,
            e.prototype.gameLogo = function() {
                var e = this;
                this.initLogFlag || cc.loader.loadRes("yad", function(t, n) {
                    if (t)
                        console.log("err:", t);
                    else {
                        console.log("GAMELOGO"),
                        e.initLogFlag = !1;
                        var a = new cc.Node;
                        a.name = "gameLogo";
                        var o = a.addComponent(cc.Sprite);
                        cc.find("Canvas").parent.addChild(a),
                        o.spriteFrame = new cc.SpriteFrame(n),
                        a.setScale(.8),
                        window.ISzhuye ? (a.x = 375,
                        a.y = 320,
                        console.error("\u662f\u4e3b\u9875")) : (a.x = 55,
                        a.y = 55,
                        console.error("\u4e0d\u662f\u4e3b\u9875")),
                        a.zIndex = 99999,
                        window.gameLogo = a,
                        a.addComponent(cc.Button),
                        a.on("click", function() {
                            YYGGames.navigate("Game", "LOGO")
                        }),
                        window.gameLogo = a
                    }
                })
            }
            ,
            e.prototype.logoMove = function(e, t, n) {
                console.error(n),
                document.getElementById("divImage").setAttribute("style", "position:absolute; z-index:99999; width:" + e + "; top:" + t + "; right:" + n + ";")
            }
            ,
            e.prototype.NodeHandle = function(e, t, n) {
                var a = this
                  , o = new cc.Node;
                if (e.addChild(o),
                n) {
                    var i = o.addComponent(cc.Sprite);
                    i.sizeMode = 0,
                    i.spriteFrame = new cc.SpriteFrame(t.url),
                    o.scale = 1,
                    o.width = 150,
                    o.height = 150,
                    o.addComponent(cc.Button),
                    o.on("click", function() {
                        YYGGames.navigate("GAME", "MORE", t.id)
                    }),
                    o.on("mouseenter", function() {
                        a.canScroll = !1,
                        e.scaleX = 1.1,
                        e.scaleY = 1.1
                    }),
                    o.on("mouseleave", function() {
                        a.canScroll = !0,
                        e.scaleX = 1,
                        e.scaleY = 1
                    })
                } else {
                    var s = o.addComponent(cc.Sprite);
                    s.sizeMode = 0,
                    s.spriteFrame = new cc.SpriteFrame(t.url),
                    o.width = 150,
                    o.height = 150,
                    o.addComponent(cc.Button),
                    o.on("click", function() {
                        YYGGames.navigate("MainMenu", "MORE", t.id)
                    })
                }
            }
            ,
            e
        }()),
        window.showMetheAuthor = function() {
            var e = document.createElement("iframe");
            e.style.display = "none",
            document.head.appendChild(e),
            e.contentWindow.console.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103".split(",").map(function(e) {
                return String.fromCharCode(~~e)
            }).join(""), "background: #d44a52", "background: #fb8cb3"])
        }
        ,
        cc._RF.pop()
    }
    , {}],
    allRank: [function(e, t) {
        "use strict";
        cc._RF.push(t, "e84952i5mNJ6ZAXsHZGZKAj", "allRank"),
        cc.Class({
            extends: cc.Component,
            properties: {
                rankingCanvas: cc.Node,
                moreGameBanner: cc.Node
            },
            start: function() {},
            setData: function(e, t) {
                this._closeCallBack = t,
                this.rankingCanvas.getComponent("rankingActiveShow").onClick(e)
            },
            closeCallBack: function() {
                this._closeCallBack(),
                this.node.destroy()
            },
            callBackGroupRanking: function() {
                SdkManager.share({
                    name: GameName,
                    source: 4,
                    success: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    bannerMoreGameBig: [function(e, t) {
        "use strict";
        cc._RF.push(t, "7702b6u59lNOIWVSxBjt3Hk", "bannerMoreGameBig"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bigNode: cc.Node,
                smallNode: cc.Node
            },
            start: function() {
                this.node.on("touchstart", function() {
                    this.callBack()
                }, this),
                this.node._touchListener && this.node._touchListener.setSwallowTouches(!1)
            },
            callBack: function() {
                console.log("big callback"),
                this.bigNode.active = !1,
                this.smallNode.active = !0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    bannerMoreGameSmall: [function(e, t) {
        "use strict";
        cc._RF.push(t, "53d78sG5ehNToOksWzBYz+Q", "bannerMoreGameSmall"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            setData: function(e) {
                this._callBack = e
            },
            callBack: function() {
                this._callBack && this._callBack(),
                this.node.getComponent("moreGame").callBack()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    bannerMoreGame: [function(e, t) {
        "use strict";
        cc._RF.push(t, "73e83u2W0lKwpP+LyOGKEWW", "bannerMoreGame"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bigNode: cc.Node,
                smallNode: cc.Node,
                icon: cc.Prefab
            },
            start: function() {
                this.bigNode.scale = lieyou._SceneScale,
                this.smallNode.scale = lieyou._SceneScale;
                var e = cc.find("Canvas").scale;
                this.node.scale = 1 / e,
                this.addIcon()
            },
            addIcon: function() {
                for (var e = [], t = 0, n = 0; n < wxData.moreGameData.length; n++)
                    wxData.moreGameData[n].iconX && (e[t] = wxData.moreGameData[n],
                    t++);
                if (e.length <= 0)
                    this.node.destroy();
                else {
                    var a = (e = this.shuffle(e)).length
                      , o = [cc.v2(-270, 90), cc.v2(-90, 90), cc.v2(90, 90), cc.v2(270, 90)];
                    for (n = 0; n < a && n < 4; n++) {
                        var i = cc.instantiate(this.icon);
                        this.bigNode.addChild(i),
                        i.setPosition(o[n % 4]),
                        i.getChildByName("icon").getComponent("bannerMoreGameSmall").setData(this.callBack.bind(this)),
                        i.getChildByName("icon").getComponent("moreGame").setData(e[n].iconX, e[n].image, e[n].jumpType, e[n].jumpData, 6, n + 1)
                    }
                    var s = [cc.v2(-315, 45), cc.v2(-225, 45), cc.v2(-135, 45), cc.v2(-45, 45), cc.v2(45, 45), cc.v2(135, 45), cc.v2(225, 45), cc.v2(315, 45)];
                    for (n = 0; n < a && n < 8; n++)
                        (i = cc.instantiate(this.icon)).scale = .5,
                        this.smallNode.addChild(i, 1),
                        i.setPosition(s[n % 8]),
                        i.getChildByName("icon").getComponent("bannerMoreGameSmall").setData(this.callBack.bind(this)),
                        i.getChildByName("icon").getComponent("moreGame").setData(e[n].iconX, e[n].image, e[n].jumpType, e[n].jumpData, 7, n + 1)
                }
            },
            shuffle: function(e) {
                for (var t = e, n = t.length - 1; n >= 0; n--) {
                    var a = Math.floor(Math.random() * (n + 1))
                      , o = t[a];
                    t[a] = t[n],
                    t[n] = o
                }
                return t
            },
            callBack: function() {
                this.bigNode.active = !0,
                this.smallNode.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    banner: [function(e, t) {
        "use strict";
        cc._RF.push(t, "6aacdkv1R1MvILA1mnnT+lJ", "banner"),
        cc.Class({
            extends: cc.Component,
            properties: {
                imgNode: cc.Node,
                myNode: cc.Node
            },
            start: function() {},
            setData: function(e, t, n, a) {
                this._jumpData = a;
                var o = this;
                SdkManager.getOnlineSpriteFrame(e, function(i) {
                    o.myNode.active = !0,
                    o.imgNode.getComponent(cc.Sprite).spriteFrame = i,
                    o.imgNode.getComponent("moreGame").setData(e, t, n, a, 2, 1)
                })
            },
            callBackJump: function() {},
            callBackClose: function() {
                this.node.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    failRank: [function(e, t) {
        "use strict";
        cc._RF.push(t, "7144826Dk9IU47jDvaYmCKm", "failRank"),
        cc.Class({
            extends: cc.Component,
            properties: {
                rankingCanvas: cc.Node
            },
            onDestroy: function() {},
            start: function() {},
            setData: function(e, t) {
                this._rankingKey = e,
                this._showAndHideNode = t,
                this.rankingCanvas.getComponent("rankingActiveShow").onClick(e)
            },
            setWXData: function(e, t) {
                wx.setUserCloudStorage({
                    KVDataList: [{
                        key: e,
                        value: t
                    }],
                    success: function() {
                        console.log("success")
                    },
                    fail: function() {
                        console.log("fail")
                    },
                    complete: function() {
                        console.log("complete")
                    }
                })
            },
            rankingCallBack: function() {
                this._showAndHideNode.active = !1,
                SdkManager.showAllRankingLayer({
                    rankKey: this._rankingKey,
                    node: this._showAndHideNode.parent,
                    closeFun: function() {
                        this._showAndHideNode.active = !0,
                        this.rankingCanvas.getComponent("rankingActiveShow").onClick(this._rankingKey)
                    }
                    .bind(this)
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    i18nSpriteFrame: [function(e, t) {
        "use strict";
        cc._RF.push(t, "e0337rqiZ1GIJUBfUOO+8UG", "i18nSpriteFrame"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.upSpriteTexture()
            },
            start: function() {},
            upSpriteTexture: function() {
                if (!lieyou.Language_ch) {
                    var e = this;
                    cc.loader.loadRes("en/en", cc.SpriteAtlas, function(t, n) {
                        var a = e.node.getComponent(cc.Sprite).spriteFrame._name
                          , o = n.getSpriteFrame(a);
                        e.node.getComponent(cc.Sprite).spriteFrame = o
                    })
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    iconTouch: [function(e, t) {
        "use strict";
        cc._RF.push(t, "7af1c039RxIJ6nJzUIjp225", "iconTouch"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            setData: function(e, t) {
                this._jumpData = t;
                var n = this;
                SdkManager.getOnlineSpriteFrame(e, function(e) {
                    n.node.getComponent(cc.Sprite).spriteFrame = e
                })
            },
            callBack: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    installShortcut: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d0d33JsrVFBxp/T6c/V/sKW", "installShortcut"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            setData: function(e) {
                if (e.callBack && (this.callBack = e.callBack),
                e.url) {
                    var t = this.node;
                    cc.loader.loadRes(e.url, function(e, n) {
                        t && t.isValid && (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                    })
                }
            },
            callBack2: function() {
                var e = this;
                qg.installShortcut({
                    success: function() {
                        e.callBack && e.callBack(!0),
                        console.log("oppotest----  1"),
                        e.node.destroy()
                    },
                    fail: function() {},
                    complete: function() {}
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    loadsPrefab_wk: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "37e6cA44etKJ7lKCXJl7B+O", "loadsPrefab_wk");
        var a = n;
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , i = (o.ccclass,
        o.property,
        void cc.Component);
        a.default = i,
        cc._RF.pop()
    }
    , {}],
    moreGame: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9522ci4Q4pKBrkReBz4qNH4", "moreGame"),
        cc.Class({
            extends: cc.Component,
            properties: {
                needRefresh: !1,
                type: 1,
                moreGameUrl: []
            },
            onLoad: function() {},
            start: function() {},
            setData: function(e, t, n, a, o, i) {
                this._gameNameUrl = e,
                this.moreGameUrl = t,
                this.jumpType = n,
                this.jumpData = a,
                this._page = o,
                this._num = i,
                this.loadSpriteFrame(e);
                var s = wxData.bannerOnlindDelayTime;
                this.needRefresh && this.schedule(this.resushImage, s)
            },
            loadSpriteFrame: function(e) {
                var t = this
                  , n = {
                    url: e,
                    type: "image"
                };
                cc.loader.load(n, function(e, n) {
                    e || (t.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                })
            },
            callBack: function() {
                if (!(this.moreGameUrl.length <= 0)) {
                    SdkManager.jumpApp(this.jumpData, this.moreGameUrl, this._page, this._num),
                    this.needRefresh && this.resushImage();
                    try {
                        var e = this._gameNameUrl.split("/")
                          , t = e[e.length - 2];
                        wx.aldSendEvent("moreGame", {
                            gameName: t
                        })
                    } catch (e) {}
                }
            },
            resushImage: function() {
                var e = parseInt(Math.random() * wxData.moreGameData.length)
                  , t = wxData.moreGameData[e];
                this.loadSpriteFrame(t.icon),
                this.moreGameUrl = t.image,
                this.jumpType = t.jumpType,
                this.jumpData = t.jumpData
            }
        }),
        cc._RF.pop()
    }
    , {}],
    oppoNativeAdSdk: [function(e, t) {
        "use strict";
        cc._RF.push(t, "9f507LYAWRFz4sjJJGlTpQS", "oppoNativeAdSdk"),
        cc.Class({
            extends: cc.Component,
            properties: {
                touchLabel: cc.Label,
                titleLabel: cc.Label,
                wordLabel: cc.Label,
                bgNode: cc.Node,
                iconNode: cc.Node,
                titleNode: cc.Node
            },
            onLoad: function() {
                var e = cc.winSize
                  , t = .5625 * e.height
                  , n = .5625 * e.width
                  , a = e.width / t
                  , o = e.height / n;
                cc.find("myNode", this.node).scale = a > o ? o : a;
                var i = parseInt(getTime() / 1e3);
                i - Userdefault.getIntForKey("oppo_oncePlayGameTime", i) > oppo_waitT ? (cc.find("myNode/touch", this.node).width *= oppo_nativeArea,
                cc.find("myNode/touch", this.node).height *= oppo_nativeArea) : cc.find("myNode/touch", this.node).active = !1
            },
            start: function() {},
            setData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.touchCallBack = e.touchCallBack,
                this.closeCallBack = e.closeCallBack,
                this.titleLabel.string = e.title,
                this.wordLabel.string = e.desc,
                this.touchLabel && (this.touchLabel.string = e.clickBtnTxt),
                e.imgUrlList.length > 0 ? this.getOnlineSpriteFrame(e.imgUrlList[parseInt(Math.random() * e.imgUrlList.length)], cc.find("myNode/image", this.node)) : e.iconUrlList.length > 0 && this.getOnlineSpriteFrame(e.iconUrlList[parseInt(Math.random() * e.iconUrlList.length)], this.iconNode),
                this.titleNode && this.getOnlineSpriteFrame(e.logoUrl, this.titleNode)
            },
            getOnlineSpriteFrame: function(e, t) {
                if ("" != e) {
                    var n = {
                        url: e,
                        type: "image"
                    };
                    cc.loader.load(n, function(e, n) {
                        e || (t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n))
                    })
                }
            },
            callBackTouch: function() {
                this.touchCallBack()
            },
            callBackClose: function() {
                this.closeCallBack(),
                this.node.destroy()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    praiseDialog: [function(e, t) {
        "use strict";
        cc._RF.push(t, "d54279FqNtESLtML3IrX3k2", "praiseDialog"),
        cc.Class({
            extends: cc.Component,
            properties: {
                titleLabel: cc.Label
            },
            start: function() {
                this.cantouch = !0,
                this.addGoldNum = 5 * lieyou.Props_Base_Gold,
                this.titleLabel.string = "\u559c\u6b22\u8fd9\u6b3e\u6e38\u620f\u5417\uff1f\u53bb\u7ed9\u6211\u4eec\u7559\u8a00\u5427\uff01\u4e94\u661f\u597d\u8bc4\u9001" + this.addGoldNum + "\u91d1\u5e01\u54e6\uff01"
            },
            closeCallBack: function() {
                this.cantouch && this.node.destroy()
            },
            praiseCallBack: function() {
                if (this.cantouch) {
                    this.cantouch = !1;
                    var e = this;
                    Userdefault.setBoolForKey("alreadyPraise", !0),
                    SdkManager.callAndroid(ACTION_RATE),
                    this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                        wkCommonScript.addToast({
                            str: e.addGoldNum
                        });
                        var t = Userdefault.getIntForKey(lieyou.Key_Gold) + e.addGoldNum;
                        Userdefault.setDataForKey(lieyou.Key_Gold, t),
                        e.node.destroy()
                    })))
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    rankingActiveShow: [function(e, t) {
        "use strict";
        cc._RF.push(t, "724abfmZOpNzblerttwgmuT", "rankingActiveShow"),
        cc.Class({
            extends: cc.Component,
            properties: {
                display: cc.Sprite,
                mydistype: "Horizontal"
            },
            onLoad: function() {},
            start: function() {},
            onClick: function(e) {
                this._isShow = !1,
                this.tex = new cc.Texture2D,
                this._isShow = !this._isShow,
                wx.postMessage({
                    disType: this.mydistype,
                    gameMode: e,
                    showStr: this._isShow ? "true" : "false"
                }),
                this.schedule(this.upDisPlay, 1 / 60)
            },
            _updaetSubDomainCanvas: function() {
                this.tex && (this.tex.initWithElement(sharedCanvas),
                this.tex.handleLoadedTexture(),
                this.display.spriteFrame = new cc.SpriteFrame(this.tex))
            },
            upDisPlay: function() {
                this._updaetSubDomainCanvas(),
                this._isShow || this.unschedule(this.upDisPlay)
            },
            MainSuccessCall: function() {},
            MainFailCall: function() {},
            MainCompleteCall: function() {},
            subBtnCloseCall: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    receiveRedPack: [function(e, t) {
        "use strict";
        cc._RF.push(t, "5612c9Q7H9HPYAxZORq8FjU", "receiveRedPack"),
        cc.Class({
            extends: cc.Component,
            properties: {
                word: cc.Label,
                gold_Label_1: cc.Label,
                gold_Label_2: cc.Label,
                node_1: cc.Node,
                node_2: cc.Node,
                bgNode: cc.Node,
                bgSpriteFrame: cc.SpriteFrame
            },
            start: function() {
                this.openType = 0,
                SdkManager.getHaveVideo() && Math.random() > .5 ? (this.word.string = "\u89c2\u770b\u89c6\u9891\u6253\u5f00\u7ea2\u5305",
                this.openType = 1) : this.word.string = "\u5206\u4eab\u5230\u6709\u6548\u7fa4\u6253\u5f00\u7ea2\u5305"
            },
            setCallBack: function(e) {
                this._callBack = e
            },
            callBackClose: function() {
                this._callBack && this._callBack(),
                this.node.destroy()
            },
            callBackOpen: function() {
                var e = this;
                1 == this.openType ? SdkManager.showRewardedVideoAd(wxVideoId, function(t) {
                    t ? e.openSuccess() : wkCommonScript.addToast({
                        str: "\u64ad\u653e\u5931\u8d25"
                    })
                }) : SdkManager.share({
                    name: GameName,
                    source: 2,
                    success: function(t) {
                        1 == t ? e.openSuccess() : wkCommonScript.addToast({
                            str: wxShareFailTips
                        })
                    }
                })
            },
            openSuccess: function() {
                var e, t = Userdefault.getIntForKey("SDK_redPackManeyNum", 0);
                t += e = t <= 500 ? parseInt(100 * Math.random()) + 300 : t <= 1e3 ? parseInt(100 * Math.random()) + 200 : t <= 1500 ? parseInt(100 * Math.random()) + 100 : t <= 1700 ? parseInt(50 * Math.random()) + 50 : t <= 1900 ? parseInt(20 * Math.random()) + 1 : 0,
                Userdefault.setDataForKey("SDK_redPackManeyNum", t),
                this.bgNode.getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame,
                this.node_1.active = !1,
                this.node_2.active = !0,
                this.gold_Label_1.string = t / 100,
                this.gold_Label_2.string = e / 100
            }
        }),
        cc._RF.pop()
    }
    , {}],
    redPackIcon: [function(e, t) {
        "use strict";
        cc._RF.push(t, "91fddf52p5Lk6RqFHP1LUrV", "redPackIcon"),
        cc.Class({
            extends: cc.Component,
            properties: {
                goldLabel: cc.Label
            },
            start: function() {
                var e = Userdefault.getIntForKey("SDK_redPackManeyNum", 0);
                this.goldLabel.string = e / 100
            },
            callBack: function() {
                cc.loader.loadRes("SDK/module/redPacket/redPackGameStart", function(e, t) {
                    var n = cc.find("Canvas")
                      , a = cc.instantiate(t);
                    n.addChild(a, 999)
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    returnHome_SDK: [function(e, t) {
        "use strict";
        cc._RF.push(t, "0b694qBG/lIoYo03ALJSXyg", "returnHome_SDK"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            callBack: function() {
                SdkManager.backHome()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    tiXianRedPack: [function(e, t) {
        "use strict";
        cc._RF.push(t, "b7600UFXO5MUqnoXsUgi3cy", "tiXianRedPack"),
        cc.Class({
            extends: cc.Component,
            properties: {
                goldLabel: cc.Label
            },
            start: function() {
                var e = Userdefault.getIntForKey("SDK_redPackManeyNum", 0);
                this.goldLabel.string = e / 100
            },
            callBackClose: function() {
                this.node.destroy()
            },
            callBackTiXian: function() {
                wkCommonScript.addToast({
                    str: "\u7ea2\u5305\u91d1\u989d\u8fbe\u523020\u5143\n\u624d\u53ef\u4ee5\u63d0\u53d6"
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    tslayer: [function(e, t) {
        "use strict";
        cc._RF.push(t, "cb258OWmbtHboYtcWQl+rw4", "tslayer"),
        cc.Class({
            extends: cc.Component,
            properties: {
                displayType: 0,
                SCENES_WIDTH: 720
            },
            onLoad: function() {
                this.loadLayer();
                var e = cc.find("label1", this.node);
                e ? e.getComponent(cc.Label).string = "\u5907\u6848\u6587\u53f7\uff1a\u6587\u7f51\u6e38\u5907\u5b57\u30142017\u3015\uff2d-CSG 1428 \u53f7" : console.log("tslayer labelTxt1 null");
                var t = cc.find("label2", this.node);
                t ? t.getComponent(cc.Label).string = "\u6279\u51c6\u6587\u53f7\uff1a\u65b0\u5e7f\u51fa\u5ba1[2017]3247 \u53f7  \u51fa\u7248\u5355\u4f4d\u540d\u79f0\uff1a\u70ab\u5f69\u4e92\u52a8\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8" : console.log("tslayer labelTxt2 null");
                var n = cc.find("label3", this.node);
                if (n ? n.getComponent(cc.Label).string = "\u51fa\u7248\u7269\u53f7\uff1aISBN 978-7-7979-6707-5   \u6e38\u620f\u8457\u4f5c\u6743\u4eba\uff1a\u6df1\u5733\u5e02\u730e\u6e38\u79d1\u6280\u6709\u9650\u516c\u53f8" : console.log("tslayer labelTxt3 null"),
                1 === this.displayType) {
                    var a = cc.find("layoutColor", this.node);
                    a && (a.active = !0),
                    e && (e.color = cc.color(255, 255, 255)),
                    t && (t.color = cc.color(255, 255, 255)),
                    n && (n.color = cc.color(255, 255, 255))
                }
            },
            loadLayer: function() {
                if (parseInt(cc.winSize.height / cc.winSize.width) >= 2) {
                    var e = cc.winSize.width / this.SCENES_WIDTH;
                    this.node.scale = e
                }
                this.node.x = .5 * cc.winSize.width
            }
        }),
        cc._RF.pop()
    }
    , {}],
    tt_luPing: [function(e, t) {
        "use strict";
        cc._RF.push(t, "70aa2tTD9JEYKnnRdCxm5Y+", "tt_luPing"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.bNode = cc.find("luPingBegin", this.node),
                this.eNode = cc.find("luPingEnd", this.node),
                this.luPing = !1,
                cc.find("luPingEnd/luPingEnd2", this.node).runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.4), cc.fadeIn(.4))))
            },
            setData: function(e) {
                this._callBack = e
            },
            callBack: function() {
                var e = this;
                this.luPing = !this.luPing,
                this.luPing ? (SdkManager.beginLuPing(30, function(t) {
                    e._callBack && e._callBack(t)
                }),
                this.bNode.active = !1,
                this.eNode.active = !0) : (SdkManager.stopLuPing(),
                this.bNode.active = !0,
                this.eNode.active = !1)
            },
            stop: function() {
                this.luPing = !1,
                this.bNode.active = !0,
                this.eNode.active = !1
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "use_v2.0.x_cc.Toggle_event": [function(e, t) {
        "use strict";
        cc._RF.push(t, "7760ciU0H9PL6pJgyt6Dj5/", "use_v2.0.x_cc.Toggle_event"),
        cc.Toggle && (cc.Toggle._triggerEventInScript_check = !0),
        cc._RF.pop()
    }
    , {}],
    wkCommonScript: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2e4e02TWJxHFIhANaaNV+gw", "wkCommonScript"),
        window.wkCommonScript = {
            addToast: function(e) {
                cc.loader.loadRes("wkCommon/toastWord/wkCommonToastNode", function(t, n) {
                    var a = cc.instantiate(n)
                      , o = e.color ? e.color : cc.color(255, 255, 255);
                    a.getComponent("wkCommonToastScript").setString(e.str, o),
                    cc.find("Canvas").addChild(a, 9999),
                    a.x = e.x ? e.x : 0,
                    a.y = e.y ? e.y : 0
                })
            },
            myLoadScene: function(e) {
                wkCommonScript.addLoadingTip(),
                cc.director.preloadScene(e, function() {
                    cc.director.loadScene(e)
                })
            },
            addLoadingTip: function() {
                var e = cc.find("Canvas");
                cc.loader.loadRes("wkCommon/loadNode/wkLoadScene", function(t, n) {
                    if (e && e.isValid) {
                        var a = cc.instantiate(n);
                        cc.find("Canvas").addChild(a, 999999)
                    }
                })
            },
            myAddPrefab: function(e) {
                cc.loader.loadRes("wkCommon/loadNode/wkLoadScene", function(t, n) {
                    var a = cc.instantiate(n);
                    cc.find("Canvas").addChild(a, 999999),
                    cc.loader.loadRes(e.url, function(t, n) {
                        a.destroy();
                        var o = cc.instantiate(n)
                          , i = e.node ? e.node : cc.find("Canvas");
                        i && i.isValid && (i.addChild(o),
                        o.x = e.x ? e.x : 0,
                        o.y = e.y ? e.y : 0,
                        e.zIndex && (o.zIndex = e.zIndex))
                    })
                })
            }
        },
        cc._RF.pop()
    }
    , {}],
    wkCommonToastScript: [function(e, t) {
        "use strict";
        cc._RF.push(t, "1641eAVDOtI7qPT5H2E+KQr", "wkCommonToastScript"),
        cc.Class({
            extends: cc.Component,
            properties: {
                bgNode: cc.Node,
                strLabel: cc.Node
            },
            start: function() {
                this.node.runAction(cc.sequence(cc.moveBy(2, 0, 200), cc.removeSelf()))
            },
            setString: function(e, t) {
                this.strLabel.getComponent(cc.Label).string = e,
                this.strLabel.color = t
            }
        }),
        cc._RF.pop()
    }
    , {}],
    wkLoadScene: [function(e, t) {
        "use strict";
        cc._RF.push(t, "2d640Ka0sVA9ZnTF/7TTPmt", "wkLoadScene"),
        cc.Class({
            extends: cc.Component,
            properties: {
                loading: cc.Label
            },
            start: function() {
                this.time = 0,
                this.schedule(this.updateLabel, .5)
            },
            updateLabel: function() {
                this.time++,
                this.loading.string = ["loading", "loading.", "loading..", "loading..."][this.time % 4]
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["YYGGamesUtil", "use_v2.0.x_cc.Toggle_event", "AudioManager", "BaiDuManager", "BaseManager", "BossKey_SDK", "Chinese", "DialogLoad", "Dictionary", "English", "FaceBookManager", "GuessYouLike_3", "GuessYouLike_once", "GuessYouLike_tow", "HuaweiManager", "JinRiTouTiaoManager", "LoadManager", "MyToast", "NativeManager", "OppoH5Manager", "OppoManager", "PT_Block", "PT_BlockLine", "PT_BlockLink", "PT_BlockMove", "PT_Chinese", "PT_ConfigGame", "PT_Constant", "PT_DialogFailure", "PT_DialogGetProp", "PT_DialogPass", "PT_DialogPause", "PT_DialogResu", "PT_DialogSign", "PT_DialogStore", "PT_English", "PT_GameLoad", "PT_GameMain", "PT_GameManag", "PT_GameMap", "PT_GamePage", "PT_JsonData", "PT_LevelBtn", "PT_MyDLayer", "PT_MyShare", "PT_PropsUse", "QQManager", "RecommendGame_Spot", "RecommendGame_dialog", "RecommendGame_show", "Recommend_Icon", "Recommend_Icon_one", "Recommend_Spot_Icon", "Recommend_awardGridIcon", "Recommend_awardStripIcon", "Recommend_award_grid", "Recommend_award_strip", "Recommend_showAwardNode", "SdkData", "SdkManager", "VivoManager", "WxManager", "XiaoMiManager", "XiaoMiManagerH5", "allRank", "banner", "bannerMoreGame", "bannerMoreGameBig", "bannerMoreGameSmall", "failRank", "i18nSpriteFrame", "iconTouch", "installShortcut", "loadsPrefab_wk", "moreGame", "oppoNativeAdSdk", "praiseDialog", "rankingActiveShow", "receiveRedPack", "redPackIcon", "returnHome_SDK", "tiXianRedPack", "tslayer", "tt_luPing", "wkCommonScript", "wkCommonToastScript", "wkLoadScene"]);
