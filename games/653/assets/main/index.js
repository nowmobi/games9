window.__require = function t(e, i, n) {
    function o(s, a) {
        if (!i[s]) {
            if (!e[s]) {
                var r = s.split("/");
                if (r = r[r.length - 1],
                !e[r]) {
                    var c = "function" == typeof __require && __require;
                    if (!a && c)
                        return c(r, !0);
                    if (_)
                        return _(r, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = r
            }
            var l = i[s] = {
                exports: {}
            };
            e[s][0].call(l.exports, function(t) {
                return o(e[s][1][t] || t)
            }, l, l.exports, t, e, i, n)
        }
        return i[s].exports
    }
    for (var _ = "function" == typeof __require && __require, s = 0; s < n.length; s++)
        o(n[s]);
    return o
}({
    ADCreator: [function(t, e) {
        "use strict";
        cc._RF.push(e, "6f388zBU4tJ1a3zQn+VD3u1", "ADCreator");
        var i = function() {
            function t() {
                this._flowList = []
            }
            return t.prototype.init = function() {}
            ,
            t.prototype.closeAll = function() {
                this._flowList && this._flowList.length > 0 && (this._flowList.forEach(function(t) {
                    lwsdk.destroyFlow(t)
                }),
                this._flowList.length = 0),
                this.closeBanner()
            }
            ,
            t.prototype.showCBCT = function() {
                var t = lwsdk.createFlow({
                    positionId: "TTJT-CBCT",
                    parentNode: this.parentNode,
                    onDestroy: function() {
                        console.log(222222)
                    },
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    }
                });
                t && this._flowList.push(t),
                console.warn(2222, t)
            }
            ,
            t.prototype.showHYRWGD = function(t, e) {
                var i = lwsdk.createFlow({
                    positionId: "XJJHG-ICON",
                    parentNode: t,
                    y: e,
                    zIndex: t.childrenCount,
                    onDestroy: function() {
                        console.log(222222)
                    },
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    }
                });
                i && this._flowList.push(i),
                console.warn(2222, i)
            }
            ,
            t.prototype.showBKTC = function() {
                var t = this;
                if (!lwsdk.getButtonVisible("XJJHG-SYBKTC"))
                    return this.closeBanner(),
                    void (lwsdk.getButtonVisible("XJJHG-QLSP") && lwsdk.shareOrVideo({
                        buttonKey: "XJJHG-QLSP",
                        success: function() {
                            utils.resumeMusic()
                        },
                        fail: function() {
                            utils.resumeMusic()
                        }
                    }));
                var e = lwsdk.createFlow({
                    positionId: "XJJHG-SYBKTC",
                    parentNode: this.parentNode,
                    onDestroy: function() {
                        console.log(222222)
                    },
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    },
                    onCloseButtonInit: function() {},
                    onCloseButtonClick: function() {
                        lwsdk.destroyFlow(e),
                        t.closeBanner(),
                        lwsdk.getButtonVisible("XJJHG-QLSP") && lwsdk.shareOrVideo({
                            buttonKey: "XJJHG-QLSP",
                            success: function() {
                                utils.resumeMusic()
                            },
                            fail: function() {
                                utils.resumeMusic()
                            }
                        })
                    },
                    onContinueButtonClick: function() {
                        t.closeBanner(),
                        lwsdk.destroyFlow(e),
                        lwsdk.getButtonVisible("XJJHG-QLSP") && lwsdk.shareOrVideo({
                            buttonKey: "XJJHG-QLSP",
                            success: function() {
                                utils.resumeMusic()
                            },
                            fail: function() {
                                utils.resumeMusic()
                            }
                        })
                    }
                });
                e && this._flowList.push(e),
                console.warn(2222, e)
            }
            ,
            t.prototype.showSGG = function() {
                var t = 0;
                Math.random() > .5 && (t = 1);
                var e = lwsdk.createFlow({
                    positionId: "TTJT-SGGJS",
                    parentNode: this.parentNode,
                    slideIn: !0,
                    resultWinOrFail: t,
                    interval: 5,
                    onDestroy: function() {
                        console.log(222222)
                    },
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    },
                    onCloseButtonInit: function(t) {
                        t.runAction(cc.sequence(cc.delayTime(.8), cc.moveTo(.2, cc.v2(t.x, t.y + 50))))
                    },
                    onCloseButtonClick: function() {
                        "undefined" != typeof wx && wx.showToast({
                            title: "\u5173\u95ed/\u8fd4\u56de\u6309\u94ae\u56de\u8c03"
                        }),
                        lwsdk.destroyFlow(e)
                    },
                    onContinueButtonClick: function() {
                        "undefined" != typeof wx && wx.showToast({
                            title: "\u7ee7\u7eed/\u4e0b\u4e00\u5173\u6309\u94ae\u56de\u8c03"
                        }),
                        lwsdk.destroyFlow(e)
                    }
                });
                e && this._flowList.push(e),
                console.warn(2222, e)
            }
            ,
            t.prototype.showLLTGY = function() {
                var t = this;
                if (!lwsdk.getButtonVisible("XJJHG-SYLLTJ")) {
                    if (this.closeBanner(),
                    lwsdk.getButtonVisible("XJJHG-SYBKTC"))
                        return this.showBKTC();
                    if (lwsdk.getButtonVisible("XJJHG-QLSP"))
                        return lwsdk.shareOrVideo({
                            buttonKey: "XJJHG-QLSP",
                            success: function() {
                                utils.resumeMusic()
                            },
                            fail: function() {
                                utils.resumeMusic()
                            }
                        })
                }
                var e = lwsdk.createFlow({
                    positionId: "XJJHG-SYLLTJ",
                    parentNode: this.parentNode,
                    showCount: 0,
                    slideIn: !0,
                    autoScroll: !0,
                    onDestroy: function() {
                        console.log(222222)
                    },
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    },
                    onContinueButtonInit: function(t) {
                        t.y = -(utils.phoneSize.height / 2 - 270)
                    },
                    onContinueButtonClick: function() {
                        lwsdk.clickRandomGame(e, function() {
                            console.log("\u6210\u529f\u56de\u8c03\u6267\u884c\u3002")
                        }, function() {
                            console.log("\u5931\u8d25\u56de\u8c03\u6267\u884c\u3002")
                        })
                    },
                    onCloseButtonClick: function() {
                        lwsdk.destroyFlow(e),
                        t.showBKTC()
                    }
                });
                e && this._flowList.push(e),
                console.warn(2222, e)
            }
            ,
            t.prototype.showRMTJLL = function() {
                var t = this;
                if (!lwsdk.getButtonVisible("XJJHG-SYRMQP")) {
                    if (this.closeBanner(),
                    lwsdk.getButtonVisible("XJJHG-SYBKTC"))
                        return this.showLLTGY();
                    if (lwsdk.getButtonVisible("XJJHG-QLSP"))
                        return lwsdk.shareOrVideo({
                            buttonKey: "XJJHG-QLSP",
                            success: function() {
                                utils.resumeMusic()
                            },
                            fail: function() {
                                utils.resumeMusic()
                            }
                        })
                }
                var e = lwsdk.createFlow({
                    positionId: "XJJHG-RMHZ",
                    parentNode: this.parentNode,
                    showCount: 0,
                    slideIn: !0,
                    autoScroll: !0,
                    onDestroy: function() {},
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    },
                    onContinueButtonInit: function(t) {
                        t.y = -(utils.phoneSize.height / 2 - 270),
                        lwsdk.showBanner()
                    },
                    onContinueButtonClick: function() {
                        lwsdk.clickRandomGame(e, function() {
                            console.log("\u6210\u529f\u56de\u8c03\u6267\u884c\u3002")
                        }, function() {
                            console.log("\u5931\u8d25\u56de\u8c03\u6267\u884c\u3002")
                        })
                    },
                    onCloseButtonClick: function() {
                        lwsdk.destroyFlow(e),
                        t.showLLTGY()
                    }
                });
                e && this._flowList.push(e),
                console.warn(2222, e)
            }
            ,
            t.prototype.showXFDD = function(t, e, i) {
                var n = lwsdk.createFlow({
                    positionId: "XJJHG-DDIC",
                    parentNode: i,
                    showCount: 0,
                    slideIn: !0,
                    x: t,
                    y: e,
                    iconShake: !0,
                    interval: 5,
                    autoScroll: !0,
                    zIndex: i.childrenCount,
                    onDestroy: function() {
                        console.log(222222)
                    },
                    onTryPlaySuccess: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u6210\u529f\uff0c\u5e94\u8be5\u5956\u52b1\u91d1\u5e01\uff1a" + t)
                    },
                    onTryPlayFail: function(t) {
                        console.log(222222, "\u8bd5\u73a9\u5931\u8d25\u3002", t)
                    },
                    onNavigateToFail: function(t) {
                        console.log(222222, "\u8df3\u8f6c\u5931\u8d25\u3002", t)
                    },
                    onError: function(t) {
                        console.log(222222, "\u521b\u5efa\u5e7f\u544a\u62a5\u9519\u4e86", t)
                    }
                });
                n && this._flowList.push(n),
                console.warn(2222, n)
            }
            ,
            t.prototype.showBXOrHz = function(t) {
                var e, i = this;
                switch (t) {
                case 0:
                    e = "LW-resource/prefabs/modules/bxwd/bxwd_1";
                    break;
                case 1:
                    e = "LW-resource/prefabs/modules/bxwd/bxwd";
                    break;
                case 2:
                    e = "LW-resource/prefabs/modules/qphz/qphz";
                    break;
                case 3:
                    e = "LW-resource/prefabs/modules/rmhz/rmhz";
                    break;
                case 4:
                    e = "syyx_prefab/ad/cpym";
                    break;
                case 5:
                    e = "LW-resource/prefabs/modules/cdjm/cdjm"
                }
                cc.resources.load(e, cc.Prefab, function(t, e) {
                    var n = cc.instantiate(e);
                    i.parentNode.addChild(n)
                })
            }
            ,
            t.prototype.showBanner = function() {
                cc.sys.platform != cc.sys.WECHAT_GAME && cc.sys.platform != cc.sys.BYTEDANCE_GAME || lwsdk.showBanner({
                    bottomOffset: 0
                })
            }
            ,
            t.prototype.closeBanner = function() {
                cc.sys.platform != cc.sys.WECHAT_GAME && cc.sys.platform != cc.sys.BYTEDANCE_GAME || lwsdk.hideBanner()
            }
            ,
            t.prototype.createInterstitialAd = function() {
                cc.sys.platform == cc.sys.BYTEDANCE_GAME && (this.interstitiaAd = tt.createInterstitialAd({
                    adUnitId: "b14f0cg7056058dl2g"
                }),
                console.log("\u63d2\u5c4f\u7ec4\u4ef6=", this.interstitiaAd),
                this.interstitiaAd.load())
            }
            ,
            t.prototype.showInterstitialAd = function() {
                cc.sys.platform == cc.sys.BYTEDANCE_GAME && (this.interstitiaAd.show(),
                console.log("\u663e\u793a\u5934\u6761\u63d2\u5c4f\u5e7f\u544a"))
            }
            ,
            t
        }();
        window.adc || (window.adc = new i),
        cc._RF.pop()
    }
    , {}],
    Helloworld: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b9267O5gAVByrmhzg3a4maf", "Helloworld");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../syyx_sdk/syyx_sdk_api")
          , a = t("../syyx_sdk/configs/syyx_sdk_enum")
          , r = cc._decorator
          , c = r.ccclass
          , l = r.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn_super_power = null,
                e.btn_unit_game = null,
                e.btn_unit_icon = null,
                e.btn_guess_like = null,
                e.btn_game_box = null,
                e.btn_left_more_game = null,
                e.btn_right_more_game = null,
                e.btn_bannerbox = null,
                e.btn_portalbox = null,
                e.btn_close_box = null,
                e.btn_native_inter = null,
                e.btn_close_native_inter = null,
                e.btn_load_native = null,
                e.btn_inner_native_inter = null,
                e.btn_inner_check = null,
                e.btn_banenr = null,
                e.btn_close_banner = null,
                e.btn_normal_inter = null,
                e.btn_video = null,
                e.btn_appbox = null,
                e.btn_show_block = null,
                e.btn_hide_block = null,
                e.btn_start_record = null,
                e.btn_stop_record = null,
                e.btn_share_record = null,
                e.btn_share_card = null,
                e.btn_show_native_icon = null,
                e.btn_hide_native_icon = null,
                e.inner_interstitial_parent = null,
                e.btn_common_box = null,
                e.btn_activities = null,
                e.msg = null,
                e
            }
            return o(e, t),
            e.prototype.onLoad = function() {
                var t = this;
                s.syyx_sdk_api.init("syyx_configs/syyx_game_init.json", function(e, i) {
                    !0 === e && (console.log("mijia ----- 1"),
                    i.load_init_complete && (s.syyx_sdk_api.init_param("user_account", "user_id"),
                    console.log("mijia ----- 2"),
                    s.syyx_sdk_api.send_hall_event(a.e_hall_stat_type.enter_hall),
                    s.syyx_sdk_api.send_chapter_event(1),
                    s.syyx_sdk_api.send_chapter_event(1, !1),
                    s.syyx_sdk_api.send_chapter_event(2, !0),
                    s.syyx_sdk_api.send_settlement_event(a.e_settlement_stat_type.enter_settlement)),
                    i.load_local_complete,
                    i.load_remote_complete && (console.log("mijia ----- 3"),
                    console.log("igc-----business_config data:" + JSON.stringify(i.business_config)),
                    t.btn_unit_game.on("click", t.show_unit, t),
                    t.btn_super_power.on("click", t.show_super_iocon, t),
                    t.btn_unit_icon.on("click", t.show_unit_icon, t),
                    t.btn_guess_like.on("click", t.show_guesslike, t),
                    t.btn_game_box.on("click", t.show_gamebox, t),
                    t.btn_left_more_game.on("click", t.show_leftmoregame, t),
                    t.btn_right_more_game.on("click", t.show_rightmoregame, t),
                    t.btn_bannerbox.on("click", t.show_bannerbox, t),
                    t.btn_portalbox.on("click", t.show_portalbox, t),
                    t.btn_close_box.on("click", t.close_oppo_box, t),
                    t.btn_native_inter.on("click", t.show_interstitial_native, t),
                    t.btn_inner_check.on("click", t.click_native_inner_interstitial, t),
                    t.btn_close_native_inter.on("click", t.close_native_interstitial, t),
                    t.btn_load_native.on("click", t.pre_load_native, t),
                    t.btn_inner_native_inter.on("click", t.show_inner_interstitial_native, t),
                    t.btn_banenr.on("click", t.show_banner_native, t),
                    t.btn_close_banner.on("click", t.close_native_banner, t),
                    t.btn_normal_inter.on("click", t.show_normal_inter, t),
                    t.btn_video.on("click", t.show_video, t),
                    t.btn_appbox.on("click", t.show_appbox, t),
                    t.btn_show_block.on("click", t.show_block, t),
                    t.btn_hide_block.on("click", t.hide_block, t),
                    t.btn_start_record.on("click", t.start_record, t),
                    t.btn_stop_record.on("click", t.stop_record, t),
                    t.btn_share_record.on("click", t.share_record, t),
                    t.btn_share_card.on("click", t.share_card, t),
                    t.btn_show_native_icon.on("click", t.show_native_icon, t),
                    t.btn_hide_native_icon.on("click", t.hide_native_icon, t),
                    t.btn_common_box.on("click", t.show_chest, t),
                    t.btn_activities.on("click", t.show_activity, t)),
                    s.syyx_sdk_api.add_game_num(10))
                }
                .bind(this));
                var e = 0;
                setInterval(function() {
                    t.msg.string = ++e + ""
                }, 1e3)
            }
            ,
            e.prototype.close_native_interstitial = function() {
                s.syyx_sdk_api.hide_native_interstitial(),
                s.syyx_sdk_api.hide_native_inner_interstitial()
            }
            ,
            e.prototype.show_normal_inter = function() {
                s.syyx_sdk_api.show_interstitial(a.e_ad_id.interstitial_hall, function(t, e) {
                    console.log("igc-----show show_interstitial on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_interstitial onShow")
                }, function(t, e) {
                    console.log("igc-----show show_interstitial onClose:" + JSON.stringify(e))
                }, function(t, e) {
                    console.log("igc-----show show_interstitial onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.pre_load_native = function() {
                this.load_inner_interstitial_native()
            }
            ,
            e.prototype.show_video = function() {
                s.syyx_sdk_api.show_video(a.e_ad_id.video_add_diamond, function() {
                    console.log("igc-----show show_video on_load")
                }, function() {
                    console.log("igc-----show show_video onShow")
                }, function(t, e) {
                    console.log("igc-----show show_video onClose:" + JSON.stringify(e))
                }, function(t, e) {
                    console.log("igc-----show show_video onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.show_banner_native = function() {
                s.syyx_sdk_api.show_banner(a.e_ad_id.banner_hall, function() {
                    console.log("igc-----show banner on_load")
                }, function() {
                    console.log("igc-----show banner onShow")
                }, function() {
                    console.log("igc-----show banner onClose")
                }, function() {
                    console.log("igc-----show banner onError")
                })
            }
            ,
            e.prototype.close_native_banner = function() {
                s.syyx_sdk_api.hide_banner()
            }
            ,
            e.prototype.show_native_icon = function() {
                s.syyx_sdk_api.show_native_icon(this.inner_interstitial_parent, a.e_ad_id.native_icon, function(t, e) {
                    console.log("igc-----show show_native_icon on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_native_icon onShow")
                }, function() {}, function(t, e) {
                    console.log("igc-----show show_native_icon onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.hide_native_icon = function() {
                s.syyx_sdk_api.hide_native_icon()
            }
            ,
            e.prototype.show_interstitial_native = function() {
                s.syyx_sdk_api.show_native_interstitial(a.e_ad_id.native_interstitial_hall, function(t, e) {
                    console.log("igc-----show show_native on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_native onShow")
                }, function() {}, function(t, e) {
                    console.log("igc-----show show_native onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.load_inner_interstitial_native = function() {
                s.syyx_sdk_api.preload_native_inner_interstitial(a.e_ad_id.native_inner_interstitial_success, function(t, e) {
                    console.log("igc-----show show_native on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_native onShow")
                }, function() {}, function(t, e) {
                    console.log("igc-----show show_native onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.show_inner_interstitial_native = function() {
                var t = this;
                s.syyx_sdk_api.get_local_native_data(a.e_ad_id.native_inner_interstitial_success) ? (console.log("igc-----\u52a0\u8f7d\u5230\u539f\u751f\u6570\u636e  \u53ef\u4ee5\u5c55\u793a"),
                s.syyx_sdk_api.show_native_inner_interstitial(a.e_ad_id.native_inner_interstitial_success, this.inner_interstitial_parent, function() {
                    var t = a.e_stat_event_id.win_click_native_adv;
                    s.syyx_sdk_api.send_other_event(t, a.e_stat_event_type.result)
                }, function() {
                    t.btn_inner_check.active = !0,
                    console.log("igc----- \u7ed3\u7b97\u539f\u751f\u5df2\u663e\u793a")
                }, function() {
                    t.btn_inner_check.active = !1,
                    console.log("igc----- \u7ed3\u7b97\u539f\u751f\u9690\u85cf")
                }, !0)) : console.log("igc-----\u672a\u52a0\u8f7d\u5230\u539f\u751f\u6570\u636e \u4e0d\u5c55\u793a\u7ed3\u7b97\u539f\u751f")
            }
            ,
            e.prototype.click_native_inner_interstitial = function() {
                s.syyx_sdk_api.click_native_inner_interstitial()
            }
            ,
            e.prototype.show_appbox = function() {
                s.syyx_sdk_api.show_app_box(a.e_ad_id.appbox_hall, function() {
                    console.log("igc-----show show_app_box on_load")
                }, function() {
                    console.log("igc-----show show_app_box onShow")
                }, function() {
                    console.log("igc-----show show_app_box onClose")
                }, function(t, e) {
                    console.log("igc-----show show_app_box onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.show_block = function() {
                s.syyx_sdk_api.show_block({
                    size: 5,
                    orientation: "vertical",
                    left: 0,
                    top: 100,
                    vertical_center_y: 0,
                    vertical_right: 100,
                    auto_update: !1
                }, a.e_ad_id.right_block, function() {
                    console.log("igc-----show block on_load")
                }, function() {
                    console.log("igc-----show block onShow")
                }, function() {
                    console.log("igc-----show block onClose")
                }, function() {
                    console.log("igc-----show block onError")
                })
            }
            ,
            e.prototype.hide_block = function() {
                s.syyx_sdk_api.hide_block(a.e_ad_id.right_block)
            }
            ,
            e.prototype.share_card = function() {
                s.syyx_sdk_api.share("title", "https://imageUrl", "", "", function() {
                    console.log("igc-----share success")
                }, function() {
                    console.log("igc-----share fail")
                })
            }
            ,
            e.prototype.get_system_info = function() {
                var t = s.syyx_sdk_api.get_system_info_sync();
                console.log("igc-----system_info", t)
            }
            ,
            e.prototype.start_record = function() {
                s.syyx_sdk_api.start_record_screen(300, !0, 30)
            }
            ,
            e.prototype.stop_record = function() {
                s.syyx_sdk_api.stop_record_screen()
            }
            ,
            e.prototype.share_record = function() {
                s.syyx_sdk_api.share_record_screen(["\u753b\u7ebf\u5927\u4f5c\u6218", "\u6709\u4eba@\u4f60\uff0c\u5c31\u559c\u6b22\u770b\u4f60\u8ffd\u4e0a\u6211\u53c8\u6740\u4e0d\u4e86\u6211\uff0c\u6211\u7684\u753b\u7ebf\u79d8\u7c4d\u5c31\u662f..", "\u6296\u97f3\u5c0f\u6e38\u620f"], "\u753b\u7ebf\u5927\u4f5c\u6218", "\u5c31\u559c\u6b22\u770b\u4f60\u8ffd\u4e0a\u6211\u53c8\u6740\u4e0d\u4e86\u6211\uff0c\u6211\u7684\u753b\u7ebf\u79d8\u7c4d\u5c31\u662f..", "", "", function() {
                    console.log("igc-----share screeb recording fail ")
                }, function() {
                    console.log("igc-----share screeb recording success")
                })
            }
            ,
            e.prototype.show_gamebox = function() {
                var t = this;
                s.syyx_sdk_api.create_gamebox(function(e) {
                    e.node.parent ? e.hide() : e.show(t.inner_interstitial_parent)
                })
            }
            ,
            e.prototype.show_guesslike = function() {
                s.syyx_sdk_api.create_guess_like(function(t) {
                    t.node.parent ? t.hide() : t.show()
                })
            }
            ,
            e.prototype.show_leftmoregame = function() {
                s.syyx_sdk_api.create_leftmoregame(function(t) {
                    t.show(),
                    t.set_style_pos && t.set_style_pos(0, 200)
                })
            }
            ,
            e.prototype.show_rightmoregame = function() {
                s.syyx_sdk_api.create_rightmoregame(function(t) {
                    t.show()
                })
            }
            ,
            e.prototype.show_super_iocon = function() {
                var t = this;
                s.syyx_sdk_api.create_super_power_icon(function(e) {
                    e.node.parent ? e.hide() : e.show(t.inner_interstitial_parent)
                })
            }
            ,
            e.prototype.show_unit = function() {
                var t = this;
                s.syyx_sdk_api.create_unitgame(function(e) {
                    e.node.parent ? e.hide() : e.show(t.inner_interstitial_parent)
                })
            }
            ,
            e.prototype.show_unit_icon = function() {
                var t = this;
                s.syyx_sdk_api.create_uniticon(function(e) {
                    e.node.parent ? e.hide() : e.show(t.inner_interstitial_parent)
                })
            }
            ,
            e.prototype.show_bannerbox = function() {
                s.syyx_sdk_api.show_game_banner_box(a.e_ad_id.game_banner_box, function(t, e) {
                    console.log("igc-----show show_game_banner_box on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_game_banner_box onShow")
                }, function() {
                    console.log("igc-----show show_game_banner_box onClose")
                }, function(t, e) {
                    console.log("igc-----show show_game_banner_box onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.close_oppo_box = function() {
                s.syyx_sdk_api.hide_game_banner_box(a.e_ad_id.game_banner_box)
            }
            ,
            e.prototype.show_portalbox = function() {
                s.syyx_sdk_api.show_game_portal_box(a.e_ad_id.game_portal_box, function(t, e) {
                    console.log("igc-----show show_portal_box on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_portal_box onShow")
                }, function() {
                    console.log("igc-----show show_portal_box onClose")
                }, function(t, e) {
                    console.log("igc-----show show_portal_box onError:" + JSON.stringify(e))
                })
            }
            ,
            e.prototype.show_chest = function() {
                s.syyx_sdk_api.create_activity_box(function(t) {
                    t.node.parent ? t.hide() : t.show(function(t) {
                        console.log("igc -----this box's reward is ", t)
                    })
                })
            }
            ,
            e.prototype.show_turntable = function() {
                s.syyx_sdk_api.create_activity_turntable(function(t) {
                    t.node.parent ? t.hide() : t.show(function(t) {
                        console.log("igc -----this turntable'reward is ", t)
                    })
                })
            }
            ,
            e.prototype.show_activity = function() {
                s.syyx_sdk_api.create_activity_icon(function(t) {
                    t && !t.node.parent ? t.show(!0, function(t, e) {
                        t.type == a.e_item_type.gold ? console.log("igc-----\u83b7\u5f97\u91d1\u5e01X", e) : t.type == a.e_item_type.equip ? console.log("igc-----\u83b7\u5f97\u88c5\u5907", t.name, t.item_id) : t.type == a.e_item_type.skin && console.log("igc-----\u83b7\u5f97\u76ae\u80a4", t.name, t.item_id)
                    }) : t.hide()
                })
            }
            ,
            e.prototype.show_activity_enter = function() {
                s.syyx_sdk_api.create_activity_enter(function(t) {
                    t && !t.node.parent && t.show(function(t, e) {
                        t.type == a.e_item_type.gold ? console.log("igc-----\u83b7\u5f97\u91d1\u5e01X", e) : t.type == a.e_item_type.equip ? console.log("igc-----\u83b7\u5f97\u88c5\u5907", t.name, t.item_id) : t.type == a.e_item_type.skin && console.log("igc-----\u83b7\u5f97\u76ae\u80a4", t.name, t.item_id)
                    })
                })
            }
            ,
            _([l(cc.Node)], e.prototype, "btn_super_power", void 0),
            _([l(cc.Node)], e.prototype, "btn_unit_game", void 0),
            _([l(cc.Node)], e.prototype, "btn_unit_icon", void 0),
            _([l(cc.Node)], e.prototype, "btn_guess_like", void 0),
            _([l(cc.Node)], e.prototype, "btn_game_box", void 0),
            _([l(cc.Node)], e.prototype, "btn_left_more_game", void 0),
            _([l(cc.Node)], e.prototype, "btn_right_more_game", void 0),
            _([l(cc.Node)], e.prototype, "btn_bannerbox", void 0),
            _([l(cc.Node)], e.prototype, "btn_portalbox", void 0),
            _([l(cc.Node)], e.prototype, "btn_close_box", void 0),
            _([l(cc.Node)], e.prototype, "btn_native_inter", void 0),
            _([l(cc.Node)], e.prototype, "btn_close_native_inter", void 0),
            _([l(cc.Node)], e.prototype, "btn_load_native", void 0),
            _([l(cc.Node)], e.prototype, "btn_inner_native_inter", void 0),
            _([l(cc.Node)], e.prototype, "btn_inner_check", void 0),
            _([l(cc.Node)], e.prototype, "btn_banenr", void 0),
            _([l(cc.Node)], e.prototype, "btn_close_banner", void 0),
            _([l(cc.Node)], e.prototype, "btn_normal_inter", void 0),
            _([l(cc.Node)], e.prototype, "btn_video", void 0),
            _([l(cc.Node)], e.prototype, "btn_appbox", void 0),
            _([l(cc.Node)], e.prototype, "btn_show_block", void 0),
            _([l(cc.Node)], e.prototype, "btn_hide_block", void 0),
            _([l(cc.Node)], e.prototype, "btn_start_record", void 0),
            _([l(cc.Node)], e.prototype, "btn_stop_record", void 0),
            _([l(cc.Node)], e.prototype, "btn_share_record", void 0),
            _([l(cc.Node)], e.prototype, "btn_share_card", void 0),
            _([l(cc.Node)], e.prototype, "btn_show_native_icon", void 0),
            _([l(cc.Node)], e.prototype, "btn_hide_native_icon", void 0),
            _([l(cc.Node)], e.prototype, "inner_interstitial_parent", void 0),
            _([l(cc.Node)], e.prototype, "btn_common_box", void 0),
            _([l(cc.Node)], e.prototype, "btn_activities", void 0),
            _([l(cc.Label)], e.prototype, "msg", void 0),
            _([c], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../syyx_sdk/configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../syyx_sdk/syyx_sdk_api": "syyx_sdk_api"
    }],
    LWBaseMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7b346MqzjVAP7NBRI9uy8gw", "LWBaseMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../../plugins/LWEventConst")
          , l = t("../../effects/LWEffects")
          , d = t("../moduleBase/LWcommonMain")
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._index = 0,
                e.container = null,
                e.item = null,
                e.scrollView = null,
                e._flowId = null,
                e._onTouching = !1,
                e._moveOffset = 100,
                e._scrollReverseX = !1,
                e._scrollReverseY = !1,
                e.adData = null,
                e.adData2 = null,
                e._autoScrollX = !1,
                e._autoScrollY = !0,
                e._splitLines = 1,
                e._initParam = null,
                e.closeButton = null,
                e.continueButton = null,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {}
            ,
            e.prototype.init = function(t) {
                this._flowId = t.flowId,
                this._initParam = t,
                d.default.setProperty(t, this),
                this.reset(),
                this.getAdDataToShow(t.positionId)
            }
            ,
            e.prototype.onLoad = function() {
                var t = this._initParam;
                t.onCloseButtonInit && this.closeButton && t.onCloseButtonInit(this.closeButton),
                t.interval && t.interval > 0 && this.schedule(this.autoRefresh, t.interval),
                t.onContinueButtonInit && this.continueButton && t.onContinueButtonInit(this.continueButton)
            }
            ,
            e.prototype.autoRefresh = function() {
                this.container.removeAllChildren(),
                this.getAdDataToShow(this._initParam.positionId)
            }
            ,
            e.prototype.getAdDataToShow = function(t) {
                if (this.adData = lwsdk.getAdDataToShow({
                    positionKey: t,
                    showCount: this._initParam.showCount,
                    index: this._index
                }),
                this.adData)
                    for (var e in this._index = this.adData.index,
                    this.adData.data) {
                        var i = d.default.getItemNode(this);
                        i.getComponent("LWitem").init({
                            itemData: this.adData.data[e],
                            flowId: this._flowId,
                            touchStart: this.touchStart.bind(this),
                            touchUp: this.touchUp,
                            iconShake: this._initParam.iconShake
                        }),
                        this.container.addChild(i)
                    }
            }
            ,
            e.prototype.onCloseButton = function() {
                this._initParam.onCloseButtonClick ? this._initParam.onCloseButtonClick(this.closeButton) : this.destroyMyself()
            }
            ,
            e.prototype.destroyMyself = function() {
                this.node.destroy(),
                this.node.removeFromParent()
            }
            ,
            e.prototype.onDestroy = function() {
                this.unscheduleAllCallbacks(),
                cc.director.emit(c.default.FlowEvent.onDestroy + this._flowId)
            }
            ,
            e.prototype.touchUp = function() {
                this._onTouching = !1
            }
            ,
            e.prototype.touchStart = function() {
                this._onTouching = !0
            }
            ,
            e.prototype.scrollToLeft = function() {
                this._scrollReverseX = !1
            }
            ,
            e.prototype.scrollToRight = function() {
                this._scrollReverseX = !0
            }
            ,
            e.prototype.scrollToTop = function() {
                this._scrollReverseY = !1
            }
            ,
            e.prototype.scrollToBottom = function() {
                this._scrollReverseY = !0
            }
            ,
            e.prototype.onScrolling = function() {
                var t = this.adData.data
                  , e = this.scrollView.node.getChildByName("view").children[0];
                if (this._autoScrollX) {
                    var i = e.children[0].width
                      , n = Math.ceil(t.length) * i + (Math.ceil(t.length) - 1) * this.spacingX - this.contenty;
                    console.log(e.x, e.width, i, n)
                }
                if (this._autoScrollY) {
                    var o = e.children[0].height
                      , _ = Math.ceil(t.length / 3) * o + (Math.ceil(t.length / 3) - 1) * this.spacingY - this.contenty + this._containerTop;
                    console.log(e.y, e.height, o, _)
                }
            }
            ,
            e.prototype.update = function(t) {
                this._autoScrollX && l.default.autoScrollX(t, this),
                this._autoScrollY && l.default.autoScrollY(t, this)
            }
            ,
            e.prototype.onContinue = function() {
                this._initParam.onContinueButtonClick && this.continueButton ? this._initParam.onContinueButtonClick(this.continueButton) : this.destroyMyself()
            }
            ,
            _([r], e.prototype, "_index", void 0),
            _([r(cc.Node)], e.prototype, "container", void 0),
            _([r(cc.Prefab)], e.prototype, "item", void 0),
            _([r(cc.ScrollView)], e.prototype, "scrollView", void 0),
            _([r], e.prototype, "_flowId", void 0),
            _([r({
                serializable: !1
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1
            })], e.prototype, "_splitLines", void 0),
            _([r(cc.Node)], e.prototype, "closeButton", void 0),
            _([r(cc.Node)], e.prototype, "continueButton", void 0),
            _([a], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../effects/LWEffects": "LWEffects",
        "../../plugins/LWEventConst": "LWEventConst",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWEffects: [function(t, e, i) {
        "use strict";
        var n;
        cc._RF.push(e, "5869b6BbnxMSYpLDBmxWHF3", "LWEffects"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {
                if (n)
                    return n;
                n = this
            }
            return t.getEffectType = function() {
                var e = Math.floor(Math.random() * t._effectTypes.length);
                return t._effectTypes[e]
            }
            ,
            t.runEffect = function(e, i, n) {
                if (void 0 === i && (i = !1),
                void 0 === n && (n = "swingInLeft"),
                e) {
                    n = i ? t.getEffectType() : n;
                    var o = cc.v2(e.x, e.y);
                    switch (n) {
                    case "swingInLeft":
                        t[n](e, o)
                    }
                }
            }
            ,
            t.swingInLeft = function(t, e) {
                t.x = -750,
                cc.tween ? cc.tween(t).to(.2, {
                    position: e
                }).start() : t.runAction(cc.moveTo(.2, e))
            }
            ,
            t.autoScrollY = function(t, e) {
                if (e.adData) {
                    e._moveOffset = 65;
                    var i = e.scrollView.node.getChildByName("view")
                      , n = i.children[0]
                      , o = n.children[0].height
                      , _ = Math.ceil(e.adData.data.length / e._splitLines) * o + (Math.ceil(e.adData.data.length / e._splitLines) - 1) * e.spacingY + e._containerTop;
                    _ < i.height + e._moveOffset ? e._autoScrollY = !1 : (e._scrollReverseY || (n.y += t * e._moveOffset,
                    Math.abs(n.y) > _ - e.contenty && (e._scrollReverseY = !0)),
                    e._scrollReverseY && (n.y -= t * e._moveOffset,
                    Math.abs(n.y) < e.contenty && (e._scrollReverseY = !1)))
                }
            }
            ,
            t.autoScrollX = function(t, e) {
                if (e.adData) {
                    e._moveOffset = 65;
                    var i = e.scrollView.node.getChildByName("view")
                      , n = i.children[0]
                      , o = n.children[0].width
                      , _ = Math.ceil(e.adData.data.length / e._splitLines) * o + (Math.ceil(e.adData.data.length / e._splitLines) - 1) * e.spacingX;
                    _ < i.width + e._moveOffset ? e._autoScrollX = !1 : (e._scrollReverseX && (n.x += t * e._moveOffset,
                    Math.abs(n.x) < e.contenty && (e._scrollReverseX = !1)),
                    e._scrollReverseX || (n.x -= t * e._moveOffset,
                    Math.abs(n.x) > _ - e.contenty && (e._scrollReverseX = !0)))
                }
            }
            ,
            t._effectTypes = ["swingInLeft"],
            t
        }();
        i.default = o,
        cc._RF.pop()
    }
    , {}],
    LWEventConst: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0cbd3WcJoNFnrqhuaXpYsS2", "LWEventConst"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = {
            FlowEvent: {
                onDestroy: "onDestroy",
                onTryPlaySuccess: "onTryPlaySuccess",
                onTryPlayFail: "onTryPlayFail",
                onNavigateToFail: "onNavigateToFail",
                offDestroy: "offDestroy",
                offTryPlaySuccess: "offTryPlaySuccess",
                offTryPlayFail: "offTryPlayFail",
                offNavigateToFail: "offNavigateToFail",
                onError: "onError",
                offError: "offError"
            }
        },
        cc._RF.pop()
    }
    , {}],
    LWccUtils: [function(t, e, i) {
        "use strict";
        var n;
        cc._RF.push(e, "337ccAIGn1L3b9yp0iXoqzr", "LWccUtils"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {
                if (n)
                    return n;
                n = this
            }
            return t.prototype.getRoot = function() {
                return cc.director.getScene().getChildByName("Canvas") || cc.find("Canvas")
            }
            ,
            t.prototype.getCanvasInfo = function() {
                var t = this.getRoot();
                if (!t)
                    return {
                        designResolution: {
                            with: 750,
                            height: 1334
                        },
                        fitWidth: !0,
                        fitHeight: !0
                    };
                var e = t.getComponent(cc.Canvas);
                return {
                    designResolution: {
                        with: e.designResolution.width,
                        height: e.designResolution.height
                    },
                    fitHeight: e.fitHeight,
                    fitWidth: e.fitWidth
                }
            }
            ,
            t.prototype.loadIcon = function(t, e, i) {
                return new Promise(function(n, o) {
                    var _ = function(t, _) {
                        if (!t && _) {
                            var s = new cc.SpriteFrame(_);
                            n(s),
                            e && e(s)
                        } else
                            o(t),
                            i && i(t)
                    };
                    cc.assetManager ? cc.assetManager.loadRemote(t, _) : cc.loader.load(t, _)
                }
                )
            }
            ,
            t.prototype.renderIcon = function(t, e) {
                var i = this;
                return new Promise(function(n, o) {
                    i.loadIcon(e).then(function(e) {
                        t.spriteFrame = e,
                        n(!0)
                    }).catch(function(t) {
                        o(t)
                    })
                }
                )
            }
            ,
            t.prototype.loadPrefab = function(t, e, i) {
                return new Promise(function(n, o) {
                    var _ = function(t, _) {
                        if (!t && _) {
                            var s = new cc.instantiate(_);
                            n(s),
                            e && e(s)
                        } else
                            o(t),
                            i && i(t)
                    };
                    cc.resources ? cc.resources.load(t, cc.Prefab, _) : cc.loader.loadRes(t, cc.Prefab, _)
                }
                )
            }
            ,
            t.prototype.getScale = function() {
                return this.getCanvasInfo(),
                cc.winSize.width / 750
            }
            ,
            t.prototype.getHeightOffset = function() {
                var t = this.getScale()
                  , e = cc.sys.windowPixelResolution
                  , i = this.getCanvasInfo()
                  , n = i.designResolution.with
                  , o = i.designResolution.height
                  , _ = n / e.width;
                return (e.height * _ - o) * t
            }
            ,
            t
        }();
        i.default = new o,
        cc._RF.pop()
    }
    , {}],
    LWcommonMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ea9d2PiePFGRaIFPaxCxsi2", "LWcommonMain"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n, o = t("../../utils/LWccUtils"), _ = function() {
            function t() {
                if (n)
                    return n;
                n = this
            }
            return t.setProperty = function(t, e) {
                var i = o.default.getScale();
                switch (e.node.setScale(i),
                t.flowType) {
                case 1:
                    t.showCount = 1;
                    break;
                case 2:
                    "boolean" == typeof t.autoScroll && (e._autoScrollY = t.autoScroll);
                    break;
                case 3:
                    "boolean" == typeof t.autoScroll && (e._autoScrollX = t.autoScroll);
                    break;
                case 4:
                    "boolean" == typeof t.autoScroll && (e._autoScrollY = t.autoScroll);
                    break;
                case 5:
                    "boolean" == typeof t.autoScroll && (e._autoScrollX = t.autoScroll,
                    e._autoScrollY = t.autoScroll);
                    break;
                case 6:
                    "boolean" == typeof t.autoScroll && (e._autoScrollY = t.autoScroll);
                    break;
                case 7:
                    t.showCount = 4,
                    e._autoScrollY = !1,
                    e._autoScrollX = !1
                }
                t.x && (e.node.x = t.x * i),
                t.y && (e.node.y = t.y * i),
                t.zIndex && (e.node.zIndex = t.zIndex);
                var n = 1 === t.resultWinOrFail;
                e.winTitle && (e.winTitle.active = n),
                e.failTitle && (e.failTitle.active = !n);
                var _ = n ? e.nextSpriteFrame : e.continueSpriteFrame;
                e.continueButton && (e.continueButton.getComponent(cc.Sprite).spriteFrame = _)
            }
            ,
            t.addListener = function(t) {
                var e = t.scrollView.node;
                t._autoScrollX && (e && e.on("scroll-to-right", t.scrollToRight, t),
                e && e.on("scroll-to-left", t.scrollToLeft, t)),
                t._autoScrollY && (e && e.on("scroll-to-bottom", t.scrollToBottom, t),
                e && e.on("scroll-to-top", t.scrollToTop, t))
            }
            ,
            t.removeListener = function(t) {
                var e = t.scrollView.node;
                t._autoScrollX && (e && e.off("scroll-to-right", t.scrollToRight, t),
                e && e.off("scroll-to-left", t.scrollToLeft, t)),
                t._autoScrollY && (e && e.off("scroll-to-bottom", t.scrollToBottom, t),
                e && e.off("scroll-to-top", t.scrollToTop, t))
            }
            ,
            t.getItemNode = function(t) {
                return cc.instantiate(t.item)
            }
            ,
            t.clickRandomGame = function(t, e, i) {
                if (t.adData) {
                    var n = Math.floor(Math.random() * t.adData.data.length)
                      , o = t.adData.data[n];
                    lwsdk.onAdTouch({
                        adItem: o,
                        navigateToFail: i,
                        navigateToSuccess: e
                    })
                } else
                    console.log("\u6ca1\u6709\u5e7f\u544a\u6e38\u620f\u6570\u636e\u3002")
            }
            ,
            t
        }();
        i.default = _,
        cc._RF.pop()
    }
    , {
        "../../utils/LWccUtils": "LWccUtils"
    }],
    LWhotRecomendMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "38a46dUqqlMaJVetOoNsUvt", "LWhotRecomendMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../moduleBase/LWcommonMain")
          , l = t("../../utils/LWccUtils")
          , d = t("../../effects/LWEffects")
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._autoScrollX = !1,
                e._autoScrollY = !0,
                e._splitLines = 1,
                e._splitLines2 = 3,
                e.scrollView2 = null,
                e.container2 = null,
                e.item2 = null,
                e.handFocus = null,
                e.hotTitle = null,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {
                this._index = 0
            }
            ,
            e.prototype.init = function(e) {
                this.screenAdapted(),
                t.prototype.init.call(this, e),
                this.getAdDataToShow2(e.positionId),
                this.addListener(this)
            }
            ,
            e.prototype.addListener = function(t) {
                if (t._autoScrollX && t._autoScrollY) {
                    (i = t.scrollView.node) && (i.on("scroll-to-right", t.scrollToRight, t),
                    i.on("scroll-to-left", t.scrollToLeft, t));
                    var e = t.scrollView2.node;
                    e && (e.on("scroll-to-bottom", t.scrollToBottom, t),
                    e.on("scroll-to-top", t.scrollToTop, t))
                } else if (t._autoScrollX)
                    (i = t.scrollView.node) && (i.on("scroll-to-right", t.scrollToRight, t),
                    i.on("scroll-to-left", t.scrollToLeft, t));
                else if (t._autoScrollY) {
                    var i;
                    (i = t.scrollView.node) && (i.on("scroll-to-bottom", t.scrollToBottom, t),
                    i.on("scroll-to-top", t.scrollToTop, t))
                }
            }
            ,
            e.prototype.removeListener = function(t) {
                if (t._autoScrollX && t._autoScrollY) {
                    (i = t.scrollView.node) && (i.off("scroll-to-right", t.scrollToRight, t),
                    i.off("scroll-to-left", t.scrollToLeft, t));
                    var e = t.scrollView2.node;
                    e && (e.off("scroll-to-bottom", t.scrollToBottom, t),
                    e.off("scroll-to-top", t.scrollToTop, t))
                } else if (t._autoScrollX)
                    (i = t.scrollView.node) && (i.off("scroll-to-right", t.scrollToRight, t),
                    i.off("scroll-to-left", t.scrollToLeft, t));
                else if (t._autoScrollY) {
                    var i;
                    (i = t.scrollView.node) && (i.off("scroll-to-bottom", t.scrollToBottom, t),
                    i.off("scroll-to-top", t.scrollToTop, t))
                }
            }
            ,
            e.prototype.onLoad = function() {
                var e = this.scrollView.node.getChildByName("view");
                this.spacingX = e.children[0].getComponent(cc.Layout).spacingX,
                this.contenty = e.width / 2;
                var i = this.scrollView2.node.getChildByName("view")
                  , n = i.children[0];
                this.contenty2 = i.height / 2,
                n.y = this.contenty2;
                var o = n.getComponent(cc.Layout);
                this.spacingY = o.spacingY,
                this._containerTop = o.paddingTop,
                t.prototype.onLoad.call(this),
                this.playHandFocus()
            }
            ,
            e.prototype.screenAdapted = function() {
                var t = l.default.getHeightOffset();
                this.scrollView.node.y += t / 2,
                this.hotTitle.y += t / 2,
                this.scrollView2.node.height = this.scrollView.node.height + t;
                var e = this.scrollView2.node.getChildByName("view");
                e.height = e.height + t,
                this.continueButton && (this.continueButton.y -= t / 2),
                this.closeButton && (this.closeButton.y += t / 2)
            }
            ,
            e.prototype.autoRefresh = function() {
                t.prototype.autoRefresh.call(this),
                this.getAdDataToShow2(this._initParam.positionId)
            }
            ,
            e.prototype.getAdDataToShow2 = function(t) {
                if (this.adData2 = lwsdk.getAdDataToShow({
                    positionKey: t,
                    showCount: this._initParam.showCount,
                    index: this._index
                }),
                this.adData2)
                    for (var e in this._index = this.adData2.index,
                    this.adData2.data) {
                        var i = cc.instantiate(this.item2);
                        i.getComponent("LWitem").init({
                            itemData: this.adData2.data[e],
                            flowId: this._flowId,
                            touchStart: this.touchStart.bind(this),
                            touchUp: this.touchUp,
                            iconShake: this._initParam.iconShake
                        }),
                        this.container2.addChild(i)
                    }
            }
            ,
            e.prototype.onDestroy = function() {
                this.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            e.prototype.onScrolling = function() {
                var t = this.adData.data
                  , e = this.scrollView.node.getChildByName("view").children[0]
                  , i = this.scrollView2.node.getChildByName("view").children[0];
                if (this._autoScrollX) {
                    var n = e.children[0].width
                      , o = Math.ceil(t.length) * n + (Math.ceil(t.length) - 1) * this.spacingX - this.contenty;
                    console.log(e.x, e.width, n, o)
                }
                if (this._autoScrollY) {
                    var _ = i.children[0].height
                      , s = Math.ceil(t.length / 3) * _ + (Math.ceil(t.length / 3) - 1) * this.spacingY - this.contenty + this._containerTop;
                    console.log(i.y, i.height, _, s)
                }
            }
            ,
            e.prototype.clickRandomGame = function(t, e) {
                c.default.clickRandomGame(this, t, e)
            }
            ,
            e.prototype.update = function(t) {
                this._autoScrollX && d.default.autoScrollX(t, this),
                this._autoScrollY && this.autoScrollY(t)
            }
            ,
            e.prototype.autoScrollY = function(t) {
                if (this.adData2) {
                    this._moveOffset = 65;
                    var e = this.scrollView2.node.getChildByName("view")
                      , i = e.children[0]
                      , n = this.adData2.data
                      , o = i.children[0].height
                      , _ = Math.ceil(n.length / this._splitLines2) * o + (Math.ceil(n.length / this._splitLines2) - 1) * this.spacingY + this._containerTop;
                    _ < e.height + this._moveOffset ? this._autoScrollY = !1 : (this._scrollReverseY || (i.y += t * this._moveOffset,
                    Math.abs(i.y) > _ - this.contenty2 && (this._scrollReverseY = !0)),
                    this._scrollReverseY && (i.y -= t * this._moveOffset,
                    Math.abs(i.y) < this.contenty2 && (this._scrollReverseY = !1)))
                }
            }
            ,
            e.prototype.playHandFocus = function() {
                var t = .35;
                this.handFocus.getChildByName("circle").runAction(cc.sequence(cc.scaleTo(0, 2), cc.scaleTo(t, 1), cc.scaleTo(t, 2), cc.scaleTo(0, 2), cc.scaleTo(t, 1), cc.scaleTo(t, 2)).repeatForever()),
                this.handFocus.getChildByName("hand").runAction(cc.sequence(cc.rotateTo(0, 30), cc.rotateTo(t, 0), cc.rotateTo(t, 30), cc.rotateTo(0, 30), cc.rotateTo(t, 0), cc.rotateTo(t, 30)).repeatForever())
            }
            ,
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([r({
                serializable: !1
            })], e.prototype, "_splitLines2", void 0),
            _([r(cc.ScrollView)], e.prototype, "scrollView2", void 0),
            _([r(cc.Node)], e.prototype, "container2", void 0),
            _([r(cc.Prefab)], e.prototype, "item2", void 0),
            _([r(cc.Node)], e.prototype, "handFocus", void 0),
            _([r(cc.Node)], e.prototype, "hotTitle", void 0),
            _([a], e)
        }(t("../moduleBase/LWBaseMain").default);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../effects/LWEffects": "LWEffects",
        "../../utils/LWccUtils": "LWccUtils",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWhotWindowMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ff37fNDHPZPwrF5ueqAsS/c", "LWhotWindowMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../../effects/LWEffects")
          , l = t("../moduleBase/LWcommonMain")
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._autoScrollX = !1,
                e._autoScrollY = !0,
                e._splitLines = 3,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {
                this._index = 0
            }
            ,
            e.prototype.init = function(e) {
                t.prototype.init.call(this, e),
                l.default.addListener(this)
            }
            ,
            e.prototype.onLoad = function() {
                var e = this.scrollView.node.getChildByName("view").children[0]
                  , i = e.getComponent(cc.Layout);
                this.spacingX = i.spacingX,
                this.contenty = this._autoScrollX ? e.x : e.y,
                this.spacingY = i.spacingY,
                this._containerTop = i.paddingTop,
                this._initParam.slideIn && c.default.runEffect(this.node.getChildByName("box"), !0),
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.onDestroy = function() {
                l.default.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([a], e)
        }(t("../moduleBase/LWBaseMain").default);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../effects/LWEffects": "LWEffects",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWiconScrollMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "02c1fNrw8ROkqHOFxfJUS3H", "LWiconScrollMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../../effects/LWEffects")
          , l = t("../moduleBase/LWcommonMain")
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._autoScrollX = !0,
                e._autoScrollY = !1,
                e._splitLines = 1,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {
                this._index = 0
            }
            ,
            e.prototype.init = function(e) {
                t.prototype.init.call(this, e),
                l.default.addListener(this)
            }
            ,
            e.prototype.onLoad = function() {
                var e = this.scrollView.node.getChildByName("view").children[0]
                  , i = e.getComponent(cc.Layout);
                this.spacingX = i.spacingX,
                this.contenty = this._autoScrollX ? e.x : e.y,
                this.spacingY = i.spacingY,
                this._containerTop = i.paddingTop,
                this._initParam.slideIn && c.default.runEffect(this.node.getChildByName("box"), !0),
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.onDestroy = function() {
                l.default.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([a], e)
        }(t("../moduleBase/LWBaseMain").default);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../effects/LWEffects": "LWEffects",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWitem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "dc67cA0EoRDVZbWPFHvTT0q", "LWitem");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../plugins/LWEventConst")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = t("../../utils/LWccUtils")
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.iconName = null,
                e.icon = null,
                e.hot = null,
                e._itemData = null,
                e._flowId = null,
                e
            }
            return o(e, t),
            e.prototype.init = function(t) {
                var e = t.itemData
                  , i = t.flowId
                  , n = (t.touchStart,
                t.touchUp,
                t.iconShake)
                  , o = void 0 !== n && n;
                e && i ? (this._itemData = e,
                this._flowId = i,
                l.default.renderIcon(this.icon, e.icon),
                this.iconName.string = e.name,
                this.hot.active = Boolean(e.label_switch),
                o && this.playShakeAnimation()) : console.warn("itemData\u6216flowId \u4e0d\u80fd\u4e3a\u7a7a\u3002")
            }
            ,
            e.prototype.playShakeAnimation = function(t) {
                void 0 === t && (t = !0),
                t ? this.node.runAction(cc.sequence(cc.delayTime(1), cc.rotateTo(.1, 10), cc.rotateTo(.2, -10), cc.rotateTo(.1, 0), cc.rotateTo(.1, 10), cc.rotateTo(.2, -10), cc.rotateTo(.1, 0), cc.rotateTo(.1, 10), cc.rotateTo(.2, -10), cc.rotateTo(.1, 0), cc.delayTime(3)).repeatForever()) : this.node.runAction(cc.sequence(cc.delayTime(.2), cc.rotateTo(.1, 10), cc.rotateTo(.2, -10), cc.rotateTo(.1, 0), cc.rotateTo(.1, 10), cc.rotateTo(.2, -10), cc.rotateTo(.1, 0)))
            }
            ,
            e.prototype.rotateOnce = function(t) {
                void 0 === t && (t = .3),
                this.node.runAction(cc.rotateBy(t, 360))
            }
            ,
            e.prototype.onItemClick = function() {
                var t = this
                  , e = function(e) {
                    cc.director.emit(s.default.FlowEvent.onNavigateToFail + t._flowId, e)
                };
                1 != this._itemData.gc_status || this._itemData.try_status ? lwsdk.onAdTouch({
                    adItem: this._itemData,
                    navigateToFail: e
                }) : lwsdk.onAdTouch({
                    adItem: this._itemData,
                    tryPlaySuccess: function(e) {
                        cc.director.emit(s.default.FlowEvent.onTryPlaySuccess + t._flowId, e)
                    },
                    tryPlayFail: function(e) {
                        cc.director.emit(s.default.FlowEvent.onTryPlayFail + t._flowId, e)
                    },
                    navigateToFail: e
                })
            }
            ,
            e.prototype.onDestroy = function() {
                this.node.stopAllActions()
            }
            ,
            _([c(cc.Label)], e.prototype, "iconName", void 0),
            _([c(cc.Sprite)], e.prototype, "icon", void 0),
            _([c(cc.Node)], e.prototype, "hot", void 0),
            _([c], e.prototype, "_itemData", void 0),
            _([c], e.prototype, "_flowId", void 0),
            _([r], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../plugins/LWEventConst": "LWEventConst",
        "../../utils/LWccUtils": "LWccUtils"
    }],
    LWresultPageMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e4962ZW52lNA5KCez/qMR85", "LWresultPageMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../moduleBase/LWcommonMain")
          , l = t("../../utils/LWccUtils")
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._autoScrollX = !1,
                e._autoScrollY = !0,
                e._splitLines = 3,
                e.winTitle = null,
                e.failTitle = null,
                e.continueSpriteFrame = null,
                e.nextSpriteFrame = null,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {
                this._index = 0
            }
            ,
            e.prototype.init = function(e) {
                t.prototype.init.call(this, e),
                c.default.addListener(this)
            }
            ,
            e.prototype.onLoad = function() {
                var e = this.scrollView.node.getChildByName("view").children[0]
                  , i = e.getComponent(cc.Layout);
                this.spacingX = i.spacingX,
                this.contenty = this._autoScrollX ? e.x : e.y,
                this.spacingY = i.spacingY,
                this._containerTop = i.paddingTop,
                this.iconRotateIn(this.container.position),
                t.prototype.onLoad.call(this),
                this.randomItemShake()
            }
            ,
            e.prototype.randomItemShake = function() {
                var t = this;
                this.schedule(function() {
                    var e = Math.floor(t.container.children.length * Math.random());
                    t.container.children[e].getComponent("LWitem").playShakeAnimation(!1)
                }, 2)
            }
            ,
            e.prototype.iconRotateIn = function(t) {
                this.container.x = -750 * l.default.getScale(),
                cc.tween ? cc.tween(this.container).to(.4, {
                    position: t
                }).start() : this.container.runAction(cc.moveTo(.4, t)),
                this.container.children.forEach(function(t) {
                    t.getComponent("LWitem").rotateOnce(.4)
                })
            }
            ,
            e.prototype.onDestroy = function() {
                c.default.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([r(cc.Node)], e.prototype, "winTitle", void 0),
            _([r(cc.Node)], e.prototype, "failTitle", void 0),
            _([r(cc.SpriteFrame)], e.prototype, "continueSpriteFrame", void 0),
            _([r(cc.SpriteFrame)], e.prototype, "nextSpriteFrame", void 0),
            _([a], e)
        }(t("../moduleBase/LWBaseMain").default);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../utils/LWccUtils": "LWccUtils",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWsellFlow: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "77f3dm/vc5LJbmpdH+eGNcX", "LWsellFlow"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../utils/LWccUtils")
          , o = t("./LWEventConst");
        (function() {
            var t, e;
            (function(t) {
                t[t["LW-resource/prefabs/modules/shakeIcon/main"] = 1] = "LW-resource/prefabs/modules/shakeIcon/main",
                t[t["LW-resource/prefabs/modules/sidebarDrawer/main"] = 2] = "LW-resource/prefabs/modules/sidebarDrawer/main",
                t[t["LW-resource/prefabs/modules/iconScroll/main"] = 3] = "LW-resource/prefabs/modules/iconScroll/main",
                t[t["LW-resource/prefabs/modules/hotWindow/main"] = 4] = "LW-resource/prefabs/modules/hotWindow/main",
                t[t["LW-resource/prefabs/modules/hotRecomend/main"] = 5] = "LW-resource/prefabs/modules/hotRecomend/main",
                t[t["LW-resource/prefabs/modules/twoLineRecomend/main"] = 6] = "LW-resource/prefabs/modules/twoLineRecomend/main",
                t[t["LW-resource/prefabs/modules/resultPage/main"] = 7] = "LW-resource/prefabs/modules/resultPage/main"
            }
            )(t || (t = {})),
            function(t) {
                t[t.LWshakeIconMain = 1] = "LWshakeIconMain",
                t[t.LWsidebarDrawerMain = 2] = "LWsidebarDrawerMain",
                t[t.LWiconScrollMain = 3] = "LWiconScrollMain",
                t[t.LWhotWindowMain = 4] = "LWhotWindowMain",
                t[t.LWhotRecomendMain = 5] = "LWhotRecomendMain",
                t[t.LWtwoLineRecomendMain = 6] = "LWtwoLineRecomendMain",
                t[t.LWresultPageMain = 7] = "LWresultPageMain"
            }(e || (e = {}));
            var i = function() {
                function t(t, e) {
                    var i = this;
                    this._destroyed = !1,
                    this._onDestroyList = [],
                    this._onTryPlaySuccessList = [],
                    this._onTryPlayFailList = [],
                    this._onNavigateToFailList = [],
                    this._onErrorList = [],
                    this._flowId = t,
                    this._flowType = e,
                    this.onDestroy(function() {
                        i.offAllEvent(),
                        i._destroyed = !0
                    }),
                    this.onError(function() {
                        i.offAllEvent()
                    })
                }
                return t.prototype.onDestroy = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.onDestroy + this._flowId;
                        cc.director.on(e, t),
                        this._onDestroyList.push(t)
                    }
                }
                ,
                t.prototype.onTryPlaySuccess = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.onTryPlaySuccess + this._flowId;
                        cc.director.on(e, t),
                        this._onTryPlaySuccessList.push(t)
                    }
                }
                ,
                t.prototype.onTryPlayFail = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.onTryPlayFail + this._flowId;
                        cc.director.on(e, t),
                        this._onTryPlayFailList.push(t)
                    }
                }
                ,
                t.prototype.onNavigateToFail = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.onNavigateToFail + this._flowId;
                        cc.director.on(e, t),
                        this._onNavigateToFailList.push(t)
                    }
                }
                ,
                t.prototype.onError = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.onError + this._flowId;
                        cc.director.on(e, t),
                        this._onErrorList.push(t)
                    }
                }
                ,
                t.prototype.offDestroy = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.offDestroy + this._flowId;
                        cc.director.off(e, t)
                    }
                }
                ,
                t.prototype.offTryPlaySuccess = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.offTryPlaySuccess + this._flowId;
                        cc.director.off(e, t)
                    }
                }
                ,
                t.prototype.offTryPlayFail = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.offTryPlayFail + this._flowId;
                        cc.director.off(e, t)
                    }
                }
                ,
                t.prototype.offNavigateToFail = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.offNavigateToFail + this._flowId;
                        cc.director.off(e, t)
                    }
                }
                ,
                t.prototype.offError = function(t) {
                    if (t) {
                        var e = o.default.FlowEvent.offError + this._flowId;
                        cc.director.off(e, t)
                    }
                }
                ,
                Object.defineProperty(t.prototype, "node", {
                    get: function() {
                        return this._node
                    },
                    set: function(t) {
                        this._node = t
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                t.prototype.destroy = function() {
                    this._destroyed || (this._destroyed = !0,
                    this._node ? this._node.getComponent(e[this._flowType]).destroyMyself() : cc.director.emit(o.default.FlowEvent.onDestroy + this._flowId))
                }
                ,
                t.prototype.clickRandomGame = function(t, i) {
                    this._destroyed || this._node.getComponent(e[this._flowType]).clickRandomGame(t, i)
                }
                ,
                t.prototype.offAllEvent = function() {
                    var t = this;
                    this._onDestroyList.forEach(function(e) {
                        t.offDestroy(e)
                    }),
                    this._onTryPlaySuccessList.forEach(function(e) {
                        t.offTryPlaySuccess(e)
                    }),
                    this._onTryPlayFailList.forEach(function(e) {
                        t.offTryPlayFail(e)
                    }),
                    this._onNavigateToFailList.forEach(function(e) {
                        t.offNavigateToFail(e)
                    }),
                    this._onErrorList.forEach(function(e) {
                        t.offError(e)
                    })
                }
                ,
                t
            }()
              , _ = {
                flowList: [],
                currentFlowIdMax: 0,
                createFlow: function(_) {
                    var s = this
                      , a = _.positionId
                      , r = _.parentNode
                      , c = _.x
                      , l = _.y
                      , d = _.zIndex
                      , u = void 0 === d ? 99 : d
                      , p = _.showCount
                      , y = void 0 === p ? 0 : p
                      , h = _.autoScroll
                      , f = _.iconShake
                      , g = _.slideIn
                      , v = _.resultWinOrFail
                      , m = _.interval
                      , b = _.extraData
                      , x = _.success
                      , w = _.fail
                      , k = _.onCloseButtonInit
                      , O = _.onContinueButtonInit
                      , C = _.onContinueButtonClick
                      , P = _.onCloseButtonClick
                      , T = _.onDestroy
                      , j = _.onTryPlaySuccess
                      , S = _.onTryPlayFail
                      , N = _.onNavigateToFail
                      , E = _.onError;
                    if (r = r || n.default.getRoot(),
                    !this.isInit())
                        return null;
                    var R = this.getDiversionDataByKey(a);
                    if (!R || !R.data || 0 === R.data.length)
                        return this.error(a + " error in getAdShowType"),
                        null;
                    var M = R.show_type;
                    if (null === M)
                        return this.error("\u672a\u627e\u5230\u4f4d\u7f6e\u201c" + a + "\u201d\u5bf9\u5e94\u7684\u5c55\u793a\u5e7f\u544a\u7c7b\u578b\uff0c\u8bf7\u627e\u8fd0\u8425\u786e\u8ba4\u662f\u5426\u914d\u7f6e\u9519\u8bef\u3002"),
                        null;
                    if (0 === M)
                        return this.log("\u4f4d\u7f6e" + a + "\u5bf9\u5e94\u7684\u7c7b\u578b\u662f\u2018\u4e0d\u63a7\u5236\u2019\uff0c\u8bf7\u627e\u8fd0\u8425\u786e\u8ba4\u662f\u5426\u914d\u7f6e\u9519\u8bef\uff0c\u6216\u8005\u8981\u6c42\u7279\u6b8a\u5c55\u793a\u800c\u4e0d\u4f7f\u7528\u6a21\u677f\u7ec4\u4ef6\uff08\u53ef\u4ee5\u901a\u8fc7lwsdk.getAdDataToShow\u83b7\u53d6\u539f\u59cb\u6570\u636e\uff09\u3002"),
                        null;
                    var L = t[M];
                    if (!L)
                        return this.error("error in lwsdk.createFlow\uff0c\u672a\u77e5\u7684\u5c55\u793a\u6a21\u677f\u7c7b\u578b\uff1a" + M + "\u3002"),
                        null;
                    this.currentFlowIdMax += 1;
                    var D = this.currentFlowIdMax
                      , I = new i(D,M)
                      , A = e[M];
                    return n.default.loadPrefab(L).then(function(t) {
                        if (s.log("\u521b\u5efaID\u4e3a\u2018" + a + "\u2019\u7684\u5e7f\u544a\u4f4d", t.name, t.uuid),
                        !t)
                            return s.error("\u521b\u5efa\u5e7f\u544a\u4f4d\u5931\u8d25\u3002"),
                            I.onError = w,
                            void cc.director.emit(o.default.FlowEvent.onError);
                        I._destroyed ? t.getComponent(A).destroyMyself() : (I.onDestroy(T),
                        I.onTryPlaySuccess(j),
                        I.onTryPlayFail(S),
                        I.onNavigateToFail(N),
                        I.onError(E),
                        t.getComponent(A).init({
                            flowId: D,
                            positionId: a,
                            parentNode: r,
                            x: c,
                            y: l,
                            zIndex: u,
                            showCount: y,
                            autoScroll: h,
                            iconShake: f,
                            slideIn: g,
                            resultWinOrFail: v,
                            interval: m,
                            flowType: M,
                            extraData: b,
                            success: x,
                            fail: w,
                            onCloseButtonInit: k,
                            onContinueButtonInit: O,
                            onContinueButtonClick: C,
                            onCloseButtonClick: P,
                            onDestroy: T,
                            onTryPlaySuccess: j,
                            onTryPlayFail: S,
                            onNavigateToFail: N,
                            onError: E
                        }),
                        r.addChild(t),
                        t.zIndex = u,
                        I.node = t,
                        x && x())
                    }),
                    I
                },
                destroyFlow: function(t) {
                    t ? t.destroy && t.destroy() : this.error("\u8bf7\u4f20\u5165\u5df2\u521b\u5efa\u7684\u5e7f\u544a\u4f4d\u3002")
                },
                clickRandomGame: function(t, e, i) {
                    t ? t.clickRandomGame && t.clickRandomGame(e, i) : this.error("\u8bf7\u4f20\u5165\u5df2\u521b\u5efa\u7684\u5e7f\u544a\u4f4d\u3002")
                }
            };
            setTimeout(function() {
                if (!lwsdk)
                    throw new Error("\u7f3a\u5c11\u6587\u4ef6\uff0c\u8bf7\u5148\u5f15\u5165\u201clwsdk.js\u201d\u3002");
                Object.assign(lwsdk, _)
            }, 10)
        }
        )(),
        cc._RF.pop()
    }
    , {
        "../utils/LWccUtils": "LWccUtils",
        "./LWEventConst": "LWEventConst"
    }],
    LWshakeIconMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "16069HcudFP0LKIXH+BuoqS", "LWshakeIconMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../../effects/LWEffects")
          , l = t("../moduleBase/LWcommonMain")
          , d = t("../moduleBase/LWBaseMain")
          , u = {}
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._autoScrollX = !0,
                e._autoScrollY = !1,
                e._splitLines = 1,
                e
            }
            return o(e, t),
            e.prototype.onLoad = function() {
                this._initParam.slideIn && c.default.runEffect(this.node.getChildByName("box"), !0),
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.getAdDataToShow = function(t) {
                if (this.adData = lwsdk.getAdDataToShow({
                    positionKey: t,
                    showCount: this._initParam.showCount,
                    index: this._index
                }),
                this.adData) {
                    this.adData.index;
                    var e = this.adData.data[0].appid
                      , i = Object.values(u)
                      , n = this.differentAppidsCount(t);
                    if (i.length >= n)
                        console.warn("\u8be5\u4f4d\u7f6ekey\u521b\u5efa\u7684\u5e7f\u544a\u5b9e\u4f8b\u6570\u5927\u4e8e\u7b49\u4e8e\u53bb\u91cd\u540e\u7684icon\u603b\u6570\uff0c\u5fc5\u7136\u4f1a\u51fa\u73b0\u91cd\u590d\u7684icon\uff0c\u8ddf\u8fd0\u8425\u6c9f\u901a\u662f\u5426\u9700\u8981\u51cf\u5c11\u521b\u5efa\u7684\u6570\u91cf\u6216\u540e\u53f0\u914d\u7f6e\u66f4\u591a\u7684icon\u6570\u91cf");
                    else if (i.length > 1)
                        for (var o in u)
                            if (u[o] === e)
                                return void this.getAdDataToShow(t);
                    for (var _ in u[this._flowId] = e,
                    this.adData.data) {
                        var s = l.default.getItemNode(this);
                        s.getComponent("LWitem").init({
                            itemData: this.adData.data[_],
                            flowId: this._flowId,
                            touchStart: this.touchStart.bind(this),
                            touchUp: this.touchUp,
                            iconShake: this._initParam.iconShake
                        }),
                        this.container.addChild(s)
                    }
                }
            }
            ,
            e.prototype.differentAppidsCount = function(t) {
                var e = lwsdk.getDiversionDataByKey(t);
                if (!e || !e.data || 0 === e.data.length)
                    return 0;
                var i = {}
                  , n = e.data;
                for (var o in n)
                    if (n[o].appid)
                        i[n[o].appid] = 1;
                    else if (n[o].icondata && n[o].icondata.length > 0)
                        for (var _ = n[o].icondata, s = 0; s < _.length; s++)
                            i[_[s].appid] = 1;
                return Object.keys(i).length
            }
            ,
            e.prototype.onDestroy = function() {
                delete u[this._flowId],
                l.default.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            e.prototype.update = function() {}
            ,
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([a], e)
        }(d.default);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../effects/LWEffects": "LWEffects",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWsidebarDrawerMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1079fIQcQ9HxbsSYKpdyr0N", "LWsidebarDrawerMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../../effects/LWEffects")
          , l = t("../moduleBase/LWcommonMain")
          , d = t("../../utils/LWccUtils")
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btnHide = null,
                e.btnShow = null,
                e._autoScrollX = !1,
                e._autoScrollY = !0,
                e._splitLines = 4,
                e._isShow = !1,
                e._sourcePos = null,
                e._hidePositionX = -670,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {
                var t = d.default.getScale();
                this._index = 0,
                this._hidePositionX = -670 * t,
                this.node.x = this._hidePositionX,
                this.btnHide.active = !1,
                this.btnShow.active = !0,
                this._isShow = !1
            }
            ,
            e.prototype.init = function(e) {
                t.prototype.init.call(this, e),
                l.default.addListener(this)
            }
            ,
            e.prototype.onLoad = function() {
                var e = this.scrollView.node.getChildByName("view").children[0]
                  , i = e.getComponent(cc.Layout);
                this.spacingX = i.spacingX,
                this.contenty = this._autoScrollX ? e.x : e.y,
                this.spacingY = i.spacingY,
                this._containerTop = i.paddingTop,
                this._initParam.slideIn && c.default.runEffect(this.node.getChildByName("box"), !0),
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.onDestroy = function() {
                l.default.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            e.prototype.triggerShow = function(t, e) {
                "1" === e ? (cc.tween ? cc.tween(this.node).to(.2, {
                    position: cc.v2(0, 0)
                }).start() : this.node.runAction(cc.moveTo(.2, cc.v2(0, 0))),
                this.btnHide.active = !0,
                this.btnShow.active = !1) : (cc.tween ? cc.tween(this.node).to(.2, {
                    position: cc.v2(this._hidePositionX, 0)
                }).start() : this.node.runAction(cc.moveTo(.2, cc.v2(this._hidePositionX, 0))),
                this.btnHide.active = !1,
                this.btnShow.active = !0)
            }
            ,
            _([r(cc.Node)], e.prototype, "btnHide", void 0),
            _([r(cc.Node)], e.prototype, "btnShow", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([a], e)
        }(t("../moduleBase/LWBaseMain").default);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../effects/LWEffects": "LWEffects",
        "../../utils/LWccUtils": "LWccUtils",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    LWtwoLineRecomendMain: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "eb9d4ojiRhDXIUdDy3gV2Cl", "LWtwoLineRecomendMain");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../moduleBase/LWcommonMain")
          , l = t("../../utils/LWccUtils")
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._autoScrollX = !1,
                e._autoScrollY = !0,
                e._splitLines = 2,
                e.winTitle = null,
                e.failTitle = null,
                e.continueSpriteFrame = null,
                e.nextSpriteFrame = null,
                e
            }
            return o(e, t),
            e.prototype.reset = function() {
                this._index = 0
            }
            ,
            e.prototype.init = function(e) {
                this.screenAdapted(),
                t.prototype.init.call(this, e),
                c.default.addListener(this)
            }
            ,
            e.prototype.onLoad = function() {
                var e = this.scrollView.node.getChildByName("view")
                  , i = e.children[0]
                  , n = i.getComponent(cc.Layout);
                this.spacingX = n.spacingX,
                this.contenty = this._autoScrollX ? e.width / 2 : e.height / 2,
                i.y = this.contenty,
                this.spacingY = n.spacingY,
                this._containerTop = n.paddingTop,
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.screenAdapted = function() {
                var t = l.default.getHeightOffset();
                this.scrollView.node.height = this.scrollView.node.height + t,
                this.scrollView.node.getChildByName("view").height = this.scrollView.node.getChildByName("view").height + t,
                this.continueButton && (this.continueButton.y = this.continueButton.y - t / 2),
                this.closeButton && (this.closeButton.y = this.closeButton.y + t / 2)
            }
            ,
            e.prototype.onDestroy = function() {
                c.default.removeListener(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            e.prototype.clickRandomGame = function(t, e) {
                c.default.clickRandomGame(this, t, e)
            }
            ,
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollX", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_autoScrollY", void 0),
            _([r({
                serializable: !1,
                override: !0
            })], e.prototype, "_splitLines", void 0),
            _([r(cc.Node)], e.prototype, "winTitle", void 0),
            _([r(cc.Node)], e.prototype, "failTitle", void 0),
            _([r(cc.SpriteFrame)], e.prototype, "continueSpriteFrame", void 0),
            _([r(cc.SpriteFrame)], e.prototype, "nextSpriteFrame", void 0),
            _([a], e)
        }(t("../moduleBase/LWBaseMain").default);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../utils/LWccUtils": "LWccUtils",
        "../moduleBase/LWBaseMain": "LWBaseMain",
        "../moduleBase/LWcommonMain": "LWcommonMain"
    }],
    MainScene: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "5d2aeT7ZPlCLYaeTlif4BeD", "MainScene");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("./oppoSdk")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.sound = [],
                e.view = null,
                e.sp_win = null,
                e
            }
            return o(e, t),
            e.prototype.onLoad = function() {
                var t = (new Date).getTime() - utils.loadTime;
                lpComp.iniTape(),
                s.oppoSdk.lobbyEvent(5, t / 1e3),
                utils.spTip_win = this.sp_win,
                utils.view[0] = this.view,
                this.loadView(),
                s.oppoSdk.create_banner_box(),
                utils.sound = this.sound,
                utils.exportParent = this.node.children[2],
                adc.parentNode = this.node.children[2],
                utils.viewLayer = this.node.children[1];
                var e = lwsdk.getShareByWeight(1);
                console.log("shareInfo==", e),
                cc.sys.platform == cc.sys.BYTEDANCE_GAME && adc.showBanner(),
                adc.createInterstitialAd()
            }
            ,
            e.prototype.start = function() {
                utils.viewLayer.addChild(cc.instantiate(utils.view[0])),
                utils.playMusic(),
                s.oppoSdk.showBanner(),
                cc.sys.platform == cc.sys.WECHAT_GAME && wx.onShow(function(t) {
                    console.log("\u573a\u666f\u503c", t.scene),
                    utils.resumeMusic()
                })
            }
            ,
            e.prototype.loadView = function() {
                for (var t = function(t) {
                    utils.passPre.load("pass" + t, cc.Prefab, function(e, i) {
                        utils.pass[t - 1] = i
                    })
                }, e = 1; e <= 24; ++e)
                    t(e);
                utils.viewPre.load("gameView", cc.Prefab, function(t, e) {
                    utils.view[1] = e,
                    utils.isLoadGameView ? (utils.viewLayer.children[0].destroy(),
                    utils.viewLayer.addChild(cc.instantiate(utils.view[1]))) : utils.isLoadGameView = !0
                }),
                utils.viewPre.load("endView_1", cc.Prefab, function(t, e) {
                    utils.view[2] = e
                }),
                utils.viewPre.load("endView_2", cc.Prefab, function(t, e) {
                    utils.view[3] = e
                }),
                utils.viewPre.load("OppoEndView_1", cc.Prefab, function(t, e) {
                    utils.view[4] = e
                }),
                utils.viewPre.load("OppoEndView_2", cc.Prefab, function(t, e) {
                    utils.view[5] = e
                }),
                cc.resources.load("LW-resource/prefabs/modules/ggsk/ggsk", cc.Prefab, function(t, e) {
                    utils.view[6] = e
                })
            }
            ,
            _([c({
                type: [cc.AudioClip]
            })], e.prototype, "sound", void 0),
            _([c(cc.Prefab)], e.prototype, "view", void 0),
            _([c(cc.Prefab)], e.prototype, "sp_win", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "./oppoSdk": "oppoSdk"
    }],
    MyPhysicsCollider: [function(t, e) {
        "use strict";
        cc._RF.push(e, "d6be2q5LO9Nn4RTwGX6mRPe", "MyPhysicsCollider"),
        cc.PhysicsManager.PTM_RATIO;
        var i = cc.Class({
            name: "MyPhysicsCollider",
            extends: cc.PhysicsCollider,
            mixins: [cc.Collider.Polygon],
            properties: {
                lineWidth: 5
            },
            editor: {
                menu: !1,
                requireComponent: cc.RigidBody
            },
            _createShape: function(t) {
                for (var e = [], i = this.points, n = (this.offset,
                0); n < i.length - 1; n++) {
                    var o = i[n]
                      , _ = i[n + 1]
                      , s = o.sub(_).mag()
                      , a = Math.atan2(_.y - o.y, _.x - o.x) - Math.PI / 2
                      , r = o.add(_).mul(.5)
                      , c = new b2.PolygonShape;
                    c && (c.SetAsBox(this.lineWidth / 2 / 32 * t.x, s / 2 / 32 * t.y, new b2.Vec2(r.x / 32 * t.x,r.y / 32 * t.y), a),
                    e.push(c))
                }
                return e
            }
        });
        e.exports = i,
        cc._RF.pop()
    }
    , {}],
    YYGamesUtil: [function(t, e) {
        "use strict";
        cc._RF.push(e, "ab4799aAchPxIHNJsjtCl0s", "YYGamesUtil"),
        window.ADFlag = !1,
        window.SOUNDFlag = !0,
        window.BOOT = null,
        window.YYGamesUtil = new (function() {
            function t() {
                return this.YYGforgames = [],
                this.canScroll = !0,
                this.BannerScrollid = null,
                this.initLogFlag = !1,
                this
            }
            return t.prototype.init = function(t, e, i, n) {
                var o = this;
                o.initSDK("https://h5gamessdk.yyggames.com/sdk/YYGGames.js", function() {
                    var _ = this;
                    YYGGames.init({
                        appName: t.appID,
                        channel: t.channel || 0,
                        config: {
                            gamedistributionId: t.gamedistributionId,
                            gamemonetizeId: t.gamemonetizeId
                        },
                        complete: function() {
                            YYGGames.addEventListener(YYGGames.events.beforeShowAd, _, i),
                            YYGGames.addEventListener(YYGGames.events.afterShowAd, _, n),
                            YYGGames.addEventListener(YYGGames.events.adDismissed, _, function() {
                                YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward")
                            });
                            var t = YYGGames.forgames.slice()
                              , s = t && t.map(function(t) {
                                return t.thumb
                            });
                            cc.loader.load(s, function(i, n) {
                                i ? console.log("error: ", i) : (t.forEach(function(t) {
                                    o.YYGforgames.push({
                                        id: t.id,
                                        url: n._map[t.thumb]
                                    })
                                }),
                                e())
                            })
                        }
                    })
                })
            }
            ,
            t.prototype.initAd = function(t, e) {
                this.YYGforgames.length > 1 && (this.NodeHandle(t, this.YYGforgames[0], !1),
                this.NodeHandle(e, this.YYGforgames[1], !1))
            }
            ,
            t.prototype.loading = function() {
                var t = document.getElementById("GameDiv") || document.getElementById("Game")
                  , e = document.createElement("div");
                e.setAttribute("id", "loadDiv"),
                e.setAttribute("class", "loadDiv"),
                e.setAttribute("style", "position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: #000000;opacity: 30% zindex: 10000;"),
                t.appendChild(e)
            }
            ,
            t.prototype.initGameBanner = function(t) {
                this.removeBanner();
                for (var e = this, i = 0; i < 20; i++) {
                    var n = cc.find("view/content/item", t)
                      , o = cc.find("view/content", t)
                      , _ = cc.instantiate(n);
                    _.x = 175 * i - 1307.493;
                    var s = cc.find("Mask", _);
                    e.NodeHandle(s, e.YYGforgames[i], !0),
                    o.addChild(_)
                }
                this.BannerScrollid = window.setInterval(function() {
                    e.BannerScroll(o)
                }, 10)
            }
            ,
            t.prototype.removeBanner = function() {
                this.BannerScrollid && window.clearInterval(this.BannerScrollid)
            }
            ,
            t.prototype.bodyStyle = function(t, e) {
                var i = document.createElement("style");
                i.innerText = "#Game,#GameDiv {position: absolute;margin: 0;overflow: hidden;width: " + t + "px;height: " + e + "px;left: 50%;top: 50%;transform: translate(-50%, -50%);}",
                document.head.appendChild(i)
            }
            ,
            t.prototype.initSDK = function(t, e) {
                var i = document.createElement("script");
                i.setAttribute("type", "text/javascript"),
                i.setAttribute("src", t),
                document.getElementsByTagName("body")[0].appendChild(i),
                e && (i.onload = e)
            }
            ,
            t.prototype.BannerScroll = function(t) {
                t && this.canScroll && (t.x <= 720 && t.x > -720 ? t.x -= 1 : t.x = 720)
            }
            ,
            t.prototype.gameLogo = function() {
                var t = this;
                this.initLogFlag || cc.loader.loadRes("yad.png", function(e, i) {
                    if (e)
                        console.log("err:", e);
                    else {
                        t.initLogFlag = !0;
                        var n = new cc.Node;
                        n.name = "gameLogo";
                        var o = n.addComponent(cc.Sprite);
                        cc.find("Canvas").parent.addChild(n),
                        o.spriteFrame = new cc.SpriteFrame(i),
                        n.setScale(1),
                        n.x = 670,
                        n.y = 1250,
                        n.zIndex = 1e3,
                        window.gameLogo = n,
                        n.addComponent(cc.Button),
                        n.on("click", function() {
                            YYGGames.navigate("Game", "LOGO")
                        }),
                        window.gameLogo = n
                    }
                })
            }
            ,
            t.prototype.logoMove = function(t, e, i) {
                document.getElementById("divImage").setAttribute("style", "position:absolute; z-index:99999; width:" + t + "; top:" + e + "; right:" + i + ";")
            }
            ,
            t.prototype.NodeHandle = function(t, e, i) {
                // var n = this
                //   , o = new cc.Node;
                // if (t.addChild(o),
                // i) {
                //     var _ = o.addComponent(cc.Sprite);
                //     _.sizeMode = 0,
                //     _.spriteFrame = new cc.SpriteFrame(e.url),
                //     o.scale = 1,
                //     o.width = 160,
                //     o.height = 160,
                //     o.addComponent(cc.Button),
                //     o.on("click", function() {
                //         YYGGames.navigate("MainMenu", "MORE", e.id)
                //     }),
                //     o.on("mouseenter", function() {
                //         n.canScroll = !1,
                //         t.scaleX = 1.1,
                //         t.scaleY = 1.1
                //     }),
                //     o.on("mouseleave", function() {
                //         n.canScroll = !0,
                //         t.scaleX = 1,
                //         t.scaleY = 1
                //     })
                // } else {
                //     var s = o.addComponent(cc.Sprite);
                //     s.sizeMode = 0,
                //     s.spriteFrame = new cc.SpriteFrame(e.url),
                //     o.width = 160,
                //     o.height = 160,
                //     o.addComponent(cc.Button),
                //     o.on("click", function() {
                //         YYGGames.navigate("MainMenu", "MORE", e.id)
                //     })
                // }
            }
            ,
            t
        }()),
        window.showMetheAuthor = function() {
            var t = document.createElement("iframe");
            t.style.display = "none",
            document.head.appendChild(t),
            t.contentWindow.console.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103".split(",").map(function(t) {
                return String.fromCharCode(~~t)
            }).join(""), "background: #d44a52", "background: #fb8cb3"])
        }
        ,
        cc._RF.pop()
    }
    , {}],
    activity_model: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6efa1gov2xJY7sHG0shX3C+", "activity_model"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_box_reward_info = i.syyx_box_info = i.syyx_turntable_reward_info = i.syyx_turntable_info = i.syyx_rob_reward_item = i.syyx_rob_bomb_info = i.syyx_rob_treasure_info = i.syyx_rare_treasure_info = void 0;
        i.syyx_rare_treasure_info = function() {
            this.item_id = -1,
            this.start_forging_time = -1,
            this.forging_time = -1,
            this.get_over_time = -1,
            this.cur_index = -1,
            this.compelete_list = [],
            this.config = void 0,
            this.state = 0,
            this.is_first = !0
        }
        ;
        i.syyx_rob_treasure_info = function() {
            this.open_view_num = 0,
            this.need_wait_num = 3,
            this.is_guide_inlaid = !1,
            this.wait_compelete_time = -1,
            this.cur_reward_num = 0,
            this.grid_data = [],
            this.get_list = [],
            this.use_bomb_count = 0,
            this.bomb_data = [],
            this.last_timestamp = 0,
            this.state = 0
        }
        ;
        i.syyx_rob_bomb_info = function() {
            this.index = 0,
            this.can_use = !0,
            this.is_video = !1,
            this.is_resume = !1,
            this.resume_timestamp = 0
        }
        ;
        i.syyx_rob_reward_item = function() {
            this.is_reward = !1,
            this.is_miss_bg = !1,
            this.item_id = void 0,
            this.state = 0,
            this.config = void 0
        }
        ;
        i.syyx_turntable_info = function() {
            this.play_count = 0,
            this.max_today_count = 6,
            this.today_count = 0,
            this.need_count = 3,
            this.get_reward_list = [],
            this.reward_info = {},
            this.growth_coefficient = 1,
            this.need_congratulations = 1,
            this.last_timestamp = 0
        }
        ;
        i.syyx_turntable_reward_info = function() {
            this.index = 1,
            this.get_count = 0,
            this.is_first = !1,
            this.is_video = !1,
            this.tag_icon = "",
            this.pro = .1,
            this.item_id = 1,
            this.item_count = 1,
            this.item_type = 1,
            this.icon = 0,
            this.item_config = {}
        }
        ;
        i.syyx_box_info = function() {
            this.show_count = 0,
            this.first_reward_count = 0,
            this.opened_box_num = 0,
            this.growth_coefficient = 1,
            this.free_reward_id_list = [],
            this.video_reward_id_list = [],
            this.reward_info = {}
        }
        ;
        i.syyx_box_reward_info = function() {
            this.get_count = 0,
            this.reward_level = 1,
            this.need_congratulations = 1,
            this.reward_list = []
        }
        ,
        cc._RF.pop()
    }
    , {}],
    ad_banner: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "de732s+YGFKppfyJao75Dux", "ad_banner"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ad_banner = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("./ad_oppo_banner")
          , r = t("./syyx_adv_manager")
          , c = t("./syyx_manager")
          , l = function() {
            function t() {}
            return t.get_reprot_data = function() {
                return r.syyx_adv_manager.check_is_open_oppo_rule() ? a.ad_oppo_banner.report_data : this.report_data
            }
            ,
            t.init_first_banner_cd = function() {
                var t = this;
                if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg) {
                    var e = 0;
                    this._business_config_data = c.syyx_manager.get_business_config(),
                    this._business_config_data && this._business_config_data.adv_banner_cd && (e = this._business_config_data.adv_banner_cd.value[0],
                    this.can_show_first = e <= 0,
                    console.log("igc----- the banner's cd in oppo is", e)),
                    this.first_banner_timer_id && clearTimeout(this.first_banner_timer_id),
                    this.first_banner_timer_id = setTimeout(function() {
                        t.can_show_first = !0,
                        t.need_show && t._ad_param && t.show_banner(t._ad_param.ad_type, t._ad_param.ad_pos_id, t._ad_param.onLoad, t._ad_param.onShow, t._ad_param.onClose, t._ad_param.onError)
                    }, 1e3 * e)
                }
            }
            ,
            t.run_timer = function() {
                this.is_run_timer || (this.is_run_timer = !0,
                this.timer_func())
            }
            ,
            t.timer_func = function() {
                var t = this;
                this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.banner_cool_time && (this.auto_update_cd = this._business_config_data.banner_cool_time.value),
                this.load_native_banner();
                var e = s.syyx_sdk_utils.get_random_number(this.auto_update_cd);
                console.log("igc------ next time to refresh banner is", e),
                this.timer_id && clearTimeout(this.timer_id),
                this.timer_id = setTimeout(function() {
                    t.timer_func()
                }, 1e3 * e)
            }
            ,
            t.show_banner = function(t, e, i, n, o, _) {
                if (this.need_show = !0,
                this._normal_banner_id = e,
                this._native_banner_id = r.syyx_adv_manager._adv_config_data[e].backup_id,
                this._ad_param = {
                    ad_type: t,
                    ad_pos_id: e,
                    onLoad: i,
                    onShow: n,
                    onClose: o,
                    onError: _
                },
                this.can_show_first)
                    if (r.syyx_adv_manager.check_is_open_oppo_rule())
                        a.ad_oppo_banner.show_banner(t, e, i, n, o, _);
                    else {
                        var s = r.syyx_adv_manager.get_channel_ad_id(e);
                        s && "1" != s && "0" != s ? this.run_timer() : console.log("igc----- ad_banner normal_banner_id no configure in adv.csv")
                    }
                else
                    console.log("igc----- banner is in cooling time ")
            }
            ,
            t.check_need_show_banner = function() {
                return this.need_show
            }
            ,
            t.auto_show_banner = function() {
                this._ad_param && this._ad_param.ad_type && this._ad_param.ad_pos_id ? this.show_banner(this._ad_param.ad_type, this._ad_param.ad_pos_id, this._ad_param.onLoad, this._ad_param.onShow, this._ad_param.onClose, this._ad_param.onError) : this.show_banner(igc.e_ad_type.banner, o.e_ad_id.banner_hall, void 0, void 0, void 0, void 0)
            }
            ,
            t.hide_banner = function() {
                this.need_show = !1,
                r.syyx_adv_manager.check_is_open_oppo_rule() ? a.ad_oppo_banner.hide_banner() : this.can_show_first ? (this.is_run_timer = !1,
                this.hide_native_banner_ui(),
                this.hide_normal_banner(),
                this.timer_id && clearTimeout(this.timer_id),
                this.timer_id = void 0) : console.log("igc----- banner is in cooling time ")
            }
            ,
            t.load_native_banner = function() {
                var t = this;
                if (this.need_show) {
                    if (r.syyx_adv_manager.check_is_click_limit(o.e_ad_native_type.native_banner, this.report_data))
                        return this.hide_native_banner_ui(),
                        void this.hide_normal_banner();
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web) {
                        var e = new _.native_ad_data;
                        return e.adPosId = t._native_banner_id,
                        e.adId = "1",
                        e.adUnitId = s.syyx_sdk_utils.get_random_number([0, 1e5]),
                        e.imgUrlList = "https://h5-lg.syyx.com/coolbattle/share/share_img.jpg",
                        e.title = "banner\u6d4b\u8bd5\u6807\u9898" + s.syyx_sdk_utils.get_random_number([0, 100]),
                        e.desc = "banner\u6d4b\u8bd5\u63cf\u8ff0" + s.syyx_sdk_utils.get_random_number([0, 100]),
                        e.state = o.e_ad_native_state.need_show,
                        e.native_type = o.e_ad_native_type.native_banner,
                        this.add_native_data(e),
                        console.log("igc------syyx_adv_manager-------native_banner on_load web", e),
                        t.hide_normal_banner(),
                        t.hide_native_banner_ui(),
                        t.show_native_banner_ui(),
                        void (t._ad_param.onLoad && t._ad_param.onLoad())
                    }
                    if (t._native_banner_id && this.is_oppo_vivo_hw())
                        if (this._business_config_data && this._business_config_data.native_banner_open_switch && 0 == this._business_config_data.native_banner_open_switch.value[0])
                            t.show_normal_banner();
                        else {
                            t.hide_native_banner_ui();
                            var i = this.get_native_data();
                            i && i.state == o.e_ad_native_state.need_show ? t.show_native_banner_ui() : c.syyx_manager.create_ad(igc.e_ad_type.native, t._native_banner_id, function(e, i) {
                                if (console.log("igc------syyx_adv_manager-------native_banner on_load", i),
                                null != i && i[0]) {
                                    var a = 0;
                                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (a = i.length - 1);
                                    var c = new _.native_ad_data;
                                    c.adPosId = t._native_banner_id,
                                    c.adId = r.syyx_adv_manager.get_channel_ad_id(t._native_banner_id),
                                    c.adUnitId = i[a].adUnitId,
                                    c.imgUrlList = s.syyx_sdk_utils.format_remote_texture_url(i[a].imgUrlList[0]),
                                    c.title = i[a].title,
                                    c.desc = i[a].desc,
                                    c.state = o.e_ad_native_state.need_show,
                                    c.native_type = o.e_ad_native_type.native_banner,
                                    t.add_native_data(c),
                                    t.hide_normal_banner(),
                                    t.show_native_banner_ui(),
                                    t._ad_param.onLoad && t._ad_param.onLoad()
                                } else
                                    t.show_normal_banner()
                            }, function() {}, function() {}, function(e, i) {
                                console.error("igc-----syyx_adv_manager-------native_banner onError", i),
                                t.show_normal_banner()
                            })
                        }
                    else
                        t.show_normal_banner()
                } else
                    t.hide_banner()
            }
            ,
            t.report_ad_click = function(t, e) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule())
                    a.ad_oppo_banner.report_ad_click(t, e);
                else if (this._native_banner_id == t) {
                    console.log("igc ----- has in banner's report click "),
                    this.report_data.click_count = Math.min(++this.report_data.click_count, this.report_data.show_count);
                    var i = e.adUnitId
                      , n = r.syyx_adv_manager.get_channel_ad_id(t)
                      , o = {
                        ad_id: n,
                        ad_unit_id: i,
                        ad_type: igc.e_ad_type.native,
                        ad_pos_id: t,
                        ad_event: n,
                        ad_scene: n,
                        sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                    };
                    igc.igc_main.instance.report_ad_click(o),
                    this.remove_native_data(e),
                    this._business_config_data && this._business_config_data.native_banner_report_click_update_switch && 1 == this._business_config_data.native_banner_report_click_update_switch.value[0] && this.show_banner(this._ad_param.ad_type, this._ad_param.ad_pos_id, this._ad_param.onLoad, this._ad_param.onShow, this._ad_param.onClose, this._ad_param.onError)
                }
            }
            ,
            t.report_ad_show = function(t, e) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule())
                    a.ad_oppo_banner.report_ad_show(t, e);
                else if (this._native_banner_id == t) {
                    var i = r.syyx_adv_manager.get_native_data_list_max_order(this._native_data_list);
                    if (e.order = i + 1,
                    e.state == o.e_ad_native_state.need_show || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg) {
                        e.state == o.e_ad_native_state.need_show && (this.report_data.show_count++,
                        this.report_data.start_count++);
                        var _ = r.syyx_adv_manager.get_channel_ad_id(t)
                          , s = {
                            ad_id: _,
                            ad_unit_id: e.adUnitId,
                            ad_type: igc.e_ad_type.native,
                            ad_pos_id: t,
                            ad_event: _,
                            ad_scene: _,
                            sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                        };
                        igc.igc_main.instance.report_ad_show(s),
                        e.state = o.e_ad_native_state.show
                    }
                }
            }
            ,
            t.get_easy_click_protect_count = function() {
                var t = 0;
                return this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.native_banner_click_protect && (t = this._business_config_data.native_banner_click_protect.value[0]),
                t
            }
            ,
            t.set_banenr_protect_model = function() {
                this.cur_protect_count = 0
            }
            ,
            t.get_is_easy_click_model = function() {
                var t = this.get_easy_click_protect_count();
                if (t > 0 && this.cur_protect_count >= 0 && (this.cur_protect_count++,
                this.cur_protect_count <= t))
                    return !1;
                if (this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.native_banner_click_switch && 1 == this._business_config_data.native_banner_click_switch.value[0]) {
                    var e = this._business_config_data.native_banner_click_pro.value[0];
                    return console.log("igc------bottom banner's rate about easy_click is ", e),
                    Math.random() <= e
                }
                return !1
            }
            ,
            t.show_native_banner_ui = function() {
                var t = this;
                this.need_show && c.syyx_manager.create_native_banner(function(e) {
                    t._ad_param.onShow && t._ad_param.onShow(),
                    e.show && e.show(t.get_native_data())
                })
            }
            ,
            t.hide_native_banner_ui = function() {
                this.is_oppo_vivo_hw() && c.syyx_manager.load_view(_.syyx_view.native_banner, function(t) {
                    t && t.hide && t.hide()
                })
            }
            ,
            t.show_normal_banner = function() {
                if (this._business_config_data && this._business_config_data.show_normal_banner_switch && 0 == this._business_config_data.show_normal_banner_switch.value[0])
                    console.log("igc ----- normal banner switch is close");
                else if (this.can_show_vivo_banner || n.syyx_const.syyx_sdk_channel !== igc.e_channel_type.vivo_qg) {
                    var t = this;
                    c.syyx_manager.create_ad(igc.e_ad_type.banner, t._normal_banner_id, function() {
                        t._ad_param.onLoad && t._ad_param.onLoad()
                    }, function() {
                        t.normal_banner_showing = !0,
                        t.hide_native_banner_ui(),
                        t.need_show ? t._ad_param.onShow && t._ad_param.onShow() : t.hide_normal_banner()
                    }, function() {
                        t._ad_param.onClose && t._ad_param.onClose()
                    }, function(e, i) {
                        console.log("igc------syyx_adv_manager show_normal_banner onError", i),
                        t._ad_param.onError && t._ad_param.onError(e, i),
                        t.is_oppo_vivo_hw() && (console.log("igc----- fail to show normal banner so that use native banner's data"),
                        t.get_native_data() && t.show_native_banner_ui())
                    })
                } else
                    console.log("igc----- vivo ad_banner show_normal_banner create too often!!!")
            }
            ,
            t.hide_normal_banner = function() {
                var t = this;
                t._normal_banner_id && (t.normal_banner_showing && n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (t.can_show_vivo_banner = !1,
                this.banner_timer_id && clearTimeout(this.banner_timer_id),
                this.banner_timer_id = setTimeout(function() {
                    t.can_show_vivo_banner = !0
                }, 11e3)),
                t.normal_banner_showing = !1,
                c.syyx_manager.destroy_ad(igc.e_ad_type.banner, t._normal_banner_id))
            }
            ,
            t.finger_close_banner = function() {
                var t = this;
                if (this.is_oppo_vivo_hw() && this._business_config_data && this._business_config_data.finger_close_banner_switch) {
                    if (r.syyx_adv_manager.check_is_open_oppo_rule())
                        return void a.ad_oppo_banner.finger_close_banner();
                    if (1 == this._business_config_data.finger_close_banner_switch.value[0]) {
                        var e = this._business_config_data.finger_close_banner_switch.value[1] || 60;
                        this.hide_banner(),
                        this.can_show_first = !1,
                        setTimeout(function() {
                            t.can_show_first = !0
                        }, 1e3 * e)
                    }
                }
            }
            ,
            t.is_oppo_vivo_hw = function() {
                return n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg
            }
            ,
            t.get_native_data = function() {
                return r.syyx_adv_manager.check_is_open_oppo_rule() ? a.ad_oppo_banner.get_native_data() : this._native_data_list[0]
            }
            ,
            t.add_native_data = function(t) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule())
                    return a.ad_oppo_banner.add_native_data(t);
                this._native_data_list[0] = t
            }
            ,
            t.remove_native_data = function(t) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule())
                    return a.ad_oppo_banner.remove_native_data(t);
                this.hide_banner(),
                this._native_data_list[0] = void 0
            }
            ,
            t._native_data_list = [],
            t._business_config_data = {},
            t._native_banner_id = void 0,
            t._normal_banner_id = void 0,
            t.auto_update_cd = [20, 20],
            t.is_run_timer = !1,
            t.need_show = !0,
            t.can_show_first = !0,
            t.first_banner_timer_id = void 0,
            t.normal_banner_showing = !1,
            t.can_show_vivo_banner = !0,
            t.cur_protect_count = -1,
            t.report_data = {
                start_count: 0,
                show_count: 0,
                click_count: 0
            },
            t
        }();
        i.ad_banner = l,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_oppo_banner": "ad_oppo_banner",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_manager": "syyx_manager"
    }],
    ad_block: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "87fb1jg33lK/oc2JM5X4HqD", "ad_block"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../configs/syyx_sdk_config")
          , o = t("../utils/syyx_sdk_utils")
          , _ = t("./syyx_adv_manager")
          , s = t("./syyx_manager")
          , a = function() {
            function t() {
                this._business_config_data = {},
                this.auto_update_cd = [20, 20],
                this.is_run_timer = !1,
                this.need_show = !0
            }
            return t.prototype.run_timer = function() {
                var t = n.syyx_const.syyx_sdk_channel === igc.e_channel_type.qq || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web;
                !this.is_run_timer && t && (this.is_run_timer = !0,
                this.timer_func())
            }
            ,
            t.prototype.timer_func = function() {
                var t = this;
                if (this._business_config_data = s.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.banner_cool_time && (this.auto_update_cd = this._business_config_data.banner_cool_time.value),
                this.hide_block(),
                this.need_show = !0,
                this.load_block(),
                this._ad_param && this._ad_param.style && this._ad_param.style.auto_update) {
                    var e = o.syyx_sdk_utils.get_random_number(this.auto_update_cd);
                    console.log("igc------syyx_ui_block next time to refresh right side block's  cd", e),
                    this.timer_id && clearTimeout(this.timer_id),
                    this.timer_id = setTimeout(function() {
                        t.timer_func()
                    }, 1e3 * e)
                }
            }
            ,
            t.prototype.show_block = function(t, e, i, n, o, s, a) {
                this._ad_pos_id = i,
                this._ad_param = {
                    style: t,
                    ad_type: e,
                    ad_pos_id: i,
                    onLoad: n,
                    onShow: o,
                    onClose: s,
                    onError: a
                };
                var r = _.syyx_adv_manager.get_channel_ad_id(i);
                r && "1" != r && "0" != r ? this.run_timer() : console.log("igc----- ad_block native_interstitial_id no configure in adv.csv")
            }
            ,
            t.prototype.hide_block = function() {
                this.need_show = !1,
                this.destroy_timer(),
                s.syyx_manager.hide_ad(igc.e_ad_type.block, this._ad_pos_id)
            }
            ,
            t.prototype.destroy_timer = function() {
                this.is_run_timer = !1,
                this.timer_id && clearTimeout(this.timer_id),
                this.timer_id = void 0
            }
            ,
            t.prototype.load_block = function() {
                var t = this;
                if (this.need_show) {
                    var e = 5;
                    this._business_config_data && this._business_config_data.block_bottom_offset && this._business_config_data.block_bottom_offset.value[0] > 0 && (e = this._business_config_data.block_bottom_offset);
                    var i = void 0;
                    this._ad_param.style.vertical_center_y >= -888888 && (i = this._ad_param.style.vertical_center_y);
                    var n = void 0;
                    this._ad_param.style.vertical_right >= 0 && (n = this._ad_param.style.vertical_right);
                    var o = {
                        ad_type: igc.e_ad_type.block,
                        ad_id: _.syyx_adv_manager.get_channel_ad_id(this._ad_pos_id),
                        ad_pos_id: this._ad_pos_id,
                        ad_event: this._ad_pos_id,
                        ad_scene: this._ad_pos_id,
                        style: {
                            left: this._ad_param.style.left >= 20 ? this._ad_param.style.left : 20,
                            top: this._ad_param.style.top >= 50 ? this._ad_param.style.top : 50
                        },
                        vertical_center_y: i,
                        vertical_right: n,
                        bottom_offset: e,
                        size: this._ad_param.style.size || 5,
                        orientation: this._ad_param.style.orientation || "landscape",
                        onShow: function() {
                            console.error("igc-----syyx_adv_manager-------load_block onShow"),
                            t.need_show || t.hide_block()
                        },
                        onError: function(e, i) {
                            console.error("igc-----syyx_adv_manager-------load_block onError", i),
                            t._ad_param.onError && t._ad_param.onError(e, i)
                        }
                    };
                    igc.igc_main.instance.create_ad(o)
                } else
                    this.hide_block()
            }
            ,
            t
        }();
        i.default = a,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_manager": "syyx_manager"
    }],
    ad_native_icon: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c2737mG/b9JyYpftCgARg2c", "ad_native_icon"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ad_native_icon = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("./ad_banner")
          , r = t("./syyx_adv_manager")
          , c = t("./syyx_manager")
          , l = function() {
            function t() {}
            return t.run_timer = function() {
                !this.is_run_timer && this.is_oppo_vivo() && (this.is_run_timer = !0,
                this.timer_func())
            }
            ,
            t.timer_func = function() {
                var t = this;
                this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.native_icon_cool_time && (this.auto_update_cd = this._business_config_data.native_icon_cool_time.value),
                this.load_native_icon();
                var e = s.syyx_sdk_utils.get_random_number(this.auto_update_cd);
                console.log("igc-----syyx_ui_native_icon next time to refresh native icon is ", e),
                this.timer_id && clearTimeout(this.timer_id),
                this.timer_id = setTimeout(function() {
                    t.timer_func()
                }, 1e3 * e)
            }
            ,
            t.report_ad_click = function(t, e) {
                if (this._ad_pos_id == t) {
                    var i = r.syyx_adv_manager.get_channel_ad_id(t)
                      , n = {
                        ad_id: i,
                        ad_unit_id: e.adUnitId,
                        ad_type: igc.e_ad_type.native,
                        ad_pos_id: t,
                        ad_event: i,
                        ad_scene: i,
                        sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                    };
                    igc.igc_main.instance.report_ad_click(n),
                    this.remove_native_data(e),
                    this._business_config_data = c.syyx_manager.get_business_config(),
                    this._business_config_data && this._business_config_data.native_icon_report_click_update_switch && 1 == this._business_config_data.native_icon_report_click_update_switch.value[0] && (this.destroy_timer(),
                    this.icon_parent && this.show_native_icon(this.icon_parent, this._ad_param.ad_type, this._ad_param.ad_pos_id, this._ad_param.onLoad, this._ad_param.onShow, this._ad_param.onClose, this._ad_param.onError))
                }
            }
            ,
            t.report_ad_show = function(t, e) {
                if (this._ad_pos_id == t) {
                    var i = r.syyx_adv_manager.get_native_data_list_max_order(this._native_data_list);
                    if (e.order = i + 1,
                    e.state == o.e_ad_native_state.need_show || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg) {
                        e.order = i;
                        var _ = r.syyx_adv_manager.get_channel_ad_id(t)
                          , s = {
                            ad_id: _,
                            ad_unit_id: e.adUnitId,
                            ad_type: igc.e_ad_type.native,
                            ad_pos_id: t,
                            ad_event: _,
                            ad_scene: _,
                            sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                        };
                        igc.igc_main.instance.report_ad_show(s),
                        e.state = o.e_ad_native_state.show
                    }
                }
            }
            ,
            t.show_native_icon = function(t, e, i, n, o, _, s) {
                this._ad_pos_id = i,
                this._ad_param = {
                    ad_type: e,
                    ad_pos_id: i,
                    onLoad: n,
                    onShow: o,
                    onClose: _,
                    onError: s
                },
                this.need_show = !0,
                this.icon_parent = t;
                var a = r.syyx_adv_manager.get_channel_ad_id(i);
                a && "1" != a && "0" != a ? (this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.native_icon_switch && (1 == this._business_config_data.native_icon_switch.value[0] ? this.run_timer() : console.log("igc----- the remote switch of native icon is close"))) : console.log("igc----- ad_block ad_native_icon no configure in adv.csv")
            }
            ,
            t.hide_native_icon = function() {
                this.need_show = !1,
                this.icon_parent = void 0,
                this.hide_native_icon_ui(),
                this.destroy_timer()
            }
            ,
            t.destroy_timer = function() {
                this.is_run_timer = !1,
                this.timer_id && clearTimeout(this.timer_id),
                this.timer_id = void 0
            }
            ,
            t.load_native_icon = function(t) {
                var e = this;
                if (a.ad_banner.can_show_first)
                    if (this.need_show) {
                        var i = this.get_native_data();
                        if (i && i.state == o.e_ad_native_state.need_show)
                            this.show_native_icon_ui();
                        else {
                            if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web) {
                                var l = new _.native_ad_data;
                                return l.adPosId = this._ad_pos_id,
                                l.adId = s.syyx_sdk_utils.get_random_number([100, 200]),
                                l.adUnitId = s.syyx_sdk_utils.get_random_number([0, 1e5]),
                                l.imgUrlList = "https://h5-lg.syyx.com/coolbattle/share/share_img.jpg",
                                l.title = "\u539f\u751ficon\u6807\u9898" + s.syyx_sdk_utils.get_random_number([100, 200]),
                                l.desc = "\u539f\u751ficon\u63cf\u8ff0" + s.syyx_sdk_utils.get_random_number([100, 200]),
                                l.state = o.e_ad_native_state.need_show,
                                l.native_type = o.e_ad_native_type.native_icon,
                                this.add_native_data(l),
                                this._ad_param.onLoad && this._ad_param.onLoad({}, l),
                                this.show_native_icon_ui(),
                                void (t && t())
                            }
                            c.syyx_manager.create_ad(igc.e_ad_type.native, this._ad_pos_id, function(t, i) {
                                if (console.log("igc-----syyx_adv_manager-------load_native_icon on_load", i),
                                null != i && i[0]) {
                                    var a = 0;
                                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (a = i.length - 1);
                                    var c;
                                    c = n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg ? s.syyx_sdk_utils.format_remote_texture_url(i[a].iconUrlList[0]) : s.syyx_sdk_utils.format_remote_texture_url(i[a].imgUrlList[0]);
                                    var l = new _.native_ad_data;
                                    l.adPosId = e._ad_pos_id,
                                    l.adId = r.syyx_adv_manager.get_channel_ad_id(e._ad_pos_id),
                                    l.adUnitId = i[a].adUnitId,
                                    l.imgUrlList = c,
                                    l.title = i[a].title,
                                    l.desc = i[a].desc,
                                    l.state = o.e_ad_native_state.need_show,
                                    l.native_type = o.e_ad_native_type.native_icon,
                                    e.add_native_data(l),
                                    e._ad_param.onLoad && e._ad_param.onLoad({}, l),
                                    e.show_native_icon_ui()
                                }
                            }, function() {}, function() {}, function(t, i) {
                                console.error("igc-----syyx_adv_manager-------load_native_icon onError", i),
                                e.get_native_data() && (console.log("igc----- ad_native_icon load error so that use old native data"),
                                e.show_native_icon_ui()),
                                e._ad_param.onError && e._ad_param.onError()
                            })
                        }
                    } else
                        this.hide_native_icon_ui();
                else
                    console.log("igc----- is in oppo first ad cd")
            }
            ,
            t.show_native_icon_ui = function() {
                var t = this;
                if (t.hide_native_icon_ui(),
                this.need_show)
                    if (this.icon_parent) {
                        if (this.is_oppo_vivo()) {
                            var e = this.get_native_data();
                            this.need_show && e && c.syyx_manager.create_native_icon(function(i) {
                                i.show && i.show(t.icon_parent, e)
                            })
                        }
                    } else
                        console.log("igc----- the native icon's parent node is not exist");
                else
                    console.log("igc----- the current interface doesn't need to show native icon so that do not refresh native data")
            }
            ,
            t.hide_native_icon_ui = function() {
                this.is_oppo_vivo() && c.syyx_manager.create_native_icon(function(t) {
                    t.hide && t.hide()
                })
            }
            ,
            t.is_oppo_vivo = function() {
                return n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web
            }
            ,
            t.get_native_data = function() {
                return r.syyx_adv_manager.check_is_open_oppo_rule() ? r.syyx_adv_manager.check_native_data_list_is_reprot(this._native_data_list) ? (console.log("igc----- ad_native_icon use old load native data"),
                r.syyx_adv_manager.get_min_order_native_data(this._native_data_list)) : (console.log("igc----- ad_native_icon use new load native data"),
                r.syyx_adv_manager.get_latest_native_data(this._native_data_list)) : this._native_data_list[0]
            }
            ,
            t.add_native_data = function(t) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule()) {
                    for (var e in this._native_data_list)
                        if (this._native_data_list[e].adUnitId == t.adUnitId)
                            return;
                    var i = r.syyx_adv_manager.get_oppo_native_cache_max_length();
                    this._native_data_list.length >= i && this._native_data_list.splice(0, 1),
                    this._native_data_list.push(t)
                } else
                    this._native_data_list[0] = t
            }
            ,
            t.remove_native_data = function(t) {
                if (this.hide_native_icon_ui(),
                r.syyx_adv_manager.check_is_open_oppo_rule()) {
                    for (var e in this._native_data_list)
                        if (this._native_data_list[e].adUnitId == t.adUnitId)
                            return void this._native_data_list.splice(parseInt(e), 1)
                } else
                    this._native_data_list[0] = void 0
            }
            ,
            t._native_data_list = [],
            t._business_config_data = {},
            t.auto_update_cd = [20, 20],
            t.is_run_timer = !1,
            t.need_show = !0,
            t
        }();
        i.ad_native_icon = l,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_banner": "ad_banner",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_manager": "syyx_manager"
    }],
    ad_native_inner_interstitial: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ec3152OluNOw6ItcGaWINHm", "ad_native_inner_interstitial"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ad_native_inner_interstitial = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("./ad_banner")
          , r = t("./syyx_adv_manager")
          , c = t("./syyx_manager")
          , l = function() {
            function t() {}
            return t.get_is_use_native_banner_data = function() {
                return this.is_use_native_banner_data
            }
            ,
            t.set_is_use_native_banner_data = function(t) {
                this.is_use_native_banner_data = t
            }
            ,
            t.report_ad_click = function(t, e) {
                var i = this;
                if (this._ad_pos_id || (console.log("igc----- ad_native_inner_interstitial  report_ad_click this.ad_pos_id is null!!"),
                this._ad_pos_id = o.e_ad_id.native_inner_interstitial_success),
                this._ad_pos_id == t) {
                    console.log("igc ----- has in inner interstitial's report click ");
                    var _ = e.adUnitId
                      , s = r.syyx_adv_manager.get_channel_ad_id(e.adPosId)
                      , l = {
                        ad_id: s,
                        ad_unit_id: _,
                        ad_type: igc.e_ad_type.native,
                        ad_pos_id: t,
                        ad_event: s,
                        ad_scene: s,
                        sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                    };
                    igc.igc_main.instance.report_ad_click(l),
                    e.native_type == o.e_ad_native_type.native_inner_interstitial ? (this.report_data.click_count = Math.min(++this.report_data.click_count, this.report_data.show_count),
                    this.remove_native_data(e)) : e.native_type == o.e_ad_native_type.native_banner && a.ad_banner.remove_native_data(e),
                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg && (console.log("igc ------ hw hide inner interstitial"),
                    c.syyx_manager.hide_native_inner_interstitial()),
                    this._business_config_data = c.syyx_manager.get_business_config(),
                    this._business_config_data && this._business_config_data.native_inner_report_click_update_switch && (1 == this._business_config_data.native_inner_report_click_update_switch.value[0] ? this.preload_native_inner_interstitial(igc.e_ad_type.native, t, function(t, e) {
                        console.log("igc----- ad_native_inner_interstitial click update success", e),
                        i.update_native_inner_interstitial_ui(e)
                    }, function() {}, function() {}, function() {
                        var t = i.get_native_data();
                        t ? i.update_native_inner_interstitial_ui(t) : c.syyx_manager.hide_native_inner_interstitial()
                    }) : c.syyx_manager.hide_native_inner_interstitial())
                }
            }
            ,
            t.report_ad_show = function(t, e) {
                if (this._ad_pos_id || (console.log("igc----- ad_native_inner_interstitial  report_ad_click this.ad_pos_id is null!!"),
                this._ad_pos_id = o.e_ad_id.native_inner_interstitial_success),
                this._ad_pos_id == t)
                    if (e.native_type == o.e_ad_native_type.native_inner_interstitial) {
                        var i = r.syyx_adv_manager.get_native_data_list_max_order(this._native_data_list);
                        if (e.order = i + 1,
                        e.state == o.e_ad_native_state.need_show || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg) {
                            e.state == o.e_ad_native_state.need_show && (this.report_data.show_count++,
                            this.report_data.start_count++);
                            var _ = r.syyx_adv_manager.get_channel_ad_id(t)
                              , s = {
                                ad_id: _,
                                ad_unit_id: e.adUnitId,
                                ad_type: igc.e_ad_type.native,
                                ad_pos_id: t,
                                ad_event: _,
                                ad_scene: _,
                                sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                            };
                            igc.igc_main.instance.report_ad_show(s),
                            e.state = o.e_ad_native_state.show
                        }
                    } else
                        e.native_type == o.e_ad_native_type.native_banner && (this.set_is_use_native_banner_data(!0),
                        a.ad_banner.report_ad_show(e.adPosId, e),
                        a.ad_banner.hide_banner(),
                        console.log("igc----- ad_native_inner_interstitial use native_banner data so that hide_banner"))
            }
            ,
            t.preload_native_inner_interstitial = function(t, e, i, a, l, d) {
                var u = this;
                if (this._ad_pos_id = e,
                this._ad_param = {
                    ad_type: t,
                    ad_pos_id: e,
                    onLoad: i,
                    onShow: a,
                    onClose: l,
                    onError: d
                },
                r.syyx_adv_manager.check_is_click_limit(o.e_ad_native_type.native_inner_interstitial, this.report_data)) {
                    var p = this.get_native_data();
                    p ? i && i({}, p) : d && d()
                } else if (this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.native_inner_interstitial_switch && 0 == this._business_config_data.native_inner_interstitial_switch.value[0])
                    console.log("igc----- ad_native_inner_interstitial native_inner_interstitial_switch is close!!!");
                else {
                    var y = r.syyx_adv_manager.get_channel_ad_id(e);
                    if (y && "1" != y && "0" != y) {
                        var h = r.syyx_adv_manager.get_latest_native_data(this._native_data_list);
                        if (h && h.state == o.e_ad_native_state.need_show)
                            i && i({}, h);
                        else if (r.syyx_adv_manager.check_is_show_count_limit()) {
                            console.log("igc----- ad_native_inner_interstitial preload_native_inner_interstitial is show limit!!");
                            var f = this.get_native_data();
                            f ? i && i({}, f) : c.syyx_manager.hide_native_inner_interstitial()
                        } else {
                            if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web) {
                                var g = new _.native_ad_data;
                                return g.adPosId = e,
                                g.adId = s.syyx_sdk_utils.get_random_number([100, 200]) + "",
                                g.adUnitId = s.syyx_sdk_utils.get_random_number([0, 1e5]) + "",
                                g.imgUrlList = "https://h5-lg.syyx.com/coolbattle/share/share_img.jpg",
                                g.title = "\u7ed3\u7b97\u539f\u751f\u6807\u9898" + s.syyx_sdk_utils.get_random_number([100, 200]),
                                g.desc = "\u7ed3\u7b97\u539f\u751f\u63cf\u8ff0" + s.syyx_sdk_utils.get_random_number([100, 200]),
                                g.state = o.e_ad_native_state.need_show,
                                g.native_type = o.e_ad_native_type.native_inner_interstitial,
                                this.add_native_data(g),
                                i && i({}, g),
                                r.syyx_adv_manager.add_native_show_count(),
                                this.update_native_inner_interstitial_ui(g),
                                void console.log("igc-----syyx_adv_manager-------load_native_inner_interstitial on_load", g)
                            }
                            c.syyx_manager.create_ad(igc.e_ad_type.native, e, function(t, a) {
                                if (console.log("igc-----syyx_adv_manager-------load_native_inner_interstitial on_load", a),
                                null != a && a[0]) {
                                    var c = 0;
                                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (c = a.length - 1);
                                    var l = new _.native_ad_data;
                                    l.adPosId = e,
                                    l.adId = r.syyx_adv_manager.get_channel_ad_id(e),
                                    l.adUnitId = a[c].adUnitId,
                                    l.imgUrlList = s.syyx_sdk_utils.format_remote_texture_url(a[c].imgUrlList[0]),
                                    l.title = a[c].title,
                                    l.desc = a[c].desc,
                                    l.state = o.e_ad_native_state.need_show,
                                    l.native_type = o.e_ad_native_type.native_inner_interstitial,
                                    u.add_native_data(l),
                                    i && i({}, l),
                                    r.syyx_adv_manager.add_native_show_count(),
                                    s.syyx_sdk_utils.preload_native_texture(l.imgUrlList),
                                    u.update_native_inner_interstitial_ui(l)
                                } else
                                    d && d()
                            }, function() {}, function() {}, function(t, e) {
                                console.error("igc-----syyx_adv_manager-------load_native_inner_interstitial onError", e),
                                d && d()
                            })
                        }
                    } else
                        console.log("igc----- ad_native_inner_interstitial normal_banner_id no configure in adv.csv")
                }
            }
            ,
            t.update_native_inner_interstitial_ui = function(t) {
                c.syyx_manager.load_view(_.syyx_view.inner_interstitial, function(e) {
                    t && e.report_click_update_view(t)
                })
            }
            ,
            t.get_native_data_by_limit_model = function() {
                return r.syyx_adv_manager.check_native_data_list_is_reprot(this._native_data_list) ? (console.log("igc----- ad_native_inner_interstitial use old load native data"),
                r.syyx_adv_manager.get_min_order_native_data(this._native_data_list)) : (console.log("igc----- ad_native_inner_interstitial use new load native data"),
                r.syyx_adv_manager.get_latest_native_data(this._native_data_list))
            }
            ,
            t.get_native_data = function() {
                if (a.ad_banner.can_show_first) {
                    if (!r.syyx_adv_manager.check_is_click_limit(o.e_ad_native_type.native_inner_interstitial, this.report_data)) {
                        if (r.syyx_adv_manager.check_is_open_oppo_rule()) {
                            if (e = this.get_native_data_by_limit_model())
                                return e;
                            var t = a.ad_banner.get_native_data();
                            return t ? (console.log("igc----- ad_native_inner_interstitial limit !! use old native banner data"),
                            t) : void 0
                        }
                        return this._native_data_list[0]
                    }
                    var e, i = a.ad_banner.get_reprot_data(), n = .3, _ = c.syyx_manager.get_business_config();
                    if (_ && _.native_banner_click_pro_limit.value && (n = _.native_banner_click_pro_limit.value[1]),
                    i.click_count / i.show_count <= n && (e = a.ad_banner.get_native_data()))
                        return e
                } else
                    console.log("igc ----- oppo's first native ad is in cd")
            }
            ,
            t.add_native_data = function(t) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule()) {
                    for (var e in this._native_data_list)
                        if (this._native_data_list[e].adUnitId == t.adUnitId)
                            return;
                    var i = r.syyx_adv_manager.get_oppo_native_cache_max_length();
                    this._native_data_list.length >= i && this._native_data_list.splice(0, 1),
                    this._native_data_list.push(t)
                } else
                    this._native_data_list[0] = t
            }
            ,
            t.remove_native_data = function(t) {
                if (r.syyx_adv_manager.check_is_open_oppo_rule()) {
                    for (var e in this._native_data_list)
                        if (this._native_data_list[e].adUnitId == t.adUnitId)
                            return void this._native_data_list.splice(parseInt(e), 1)
                } else
                    this._native_data_list[0] = void 0
            }
            ,
            t._native_data_list = [],
            t._business_config_data = {},
            t.is_use_native_banner_data = !1,
            t.report_data = {
                start_count: 0,
                show_count: 0,
                click_count: 0
            },
            t
        }();
        i.ad_native_inner_interstitial = l,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_banner": "ad_banner",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_manager": "syyx_manager"
    }],
    ad_native_interstitial: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "71f08iXq55LMriOhuTUZugu", "ad_native_interstitial"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ad_native_interstitial = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../syyx_sdk_api")
          , a = t("../utils/syyx_sdk_utils")
          , r = t("./ad_banner")
          , c = t("./ad_native_inner_interstitial")
          , l = t("./syyx_adv_manager")
          , d = t("./syyx_manager")
          , u = function() {
            function t() {}
            return t.report_ad_click = function(t, e) {
                if (this._ad_pos_id || (console.log("igc----- ad_native_interstitial  report_ad_click this.ad_pos_id is null!!"),
                this._ad_pos_id = o.e_ad_id.native_interstitial_hall),
                this._ad_pos_id == t) {
                    var i = l.syyx_adv_manager.get_channel_ad_id(e.adPosId)
                      , _ = {
                        ad_id: i,
                        ad_unit_id: e.adUnitId,
                        ad_type: igc.e_ad_type.native,
                        ad_pos_id: t,
                        ad_event: i,
                        ad_scene: i,
                        sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                    };
                    if (igc.igc_main.instance.report_ad_click(_),
                    e.native_type == o.e_ad_native_type.native_interstitial ? (this.report_data.click_count = Math.min(++this.report_data.click_count, this.report_data.show_count),
                    this.remove_native_data(e)) : e.native_type == o.e_ad_native_type.native_banner && r.ad_banner.remove_native_data(e),
                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg)
                        return console.log("igc ------ hw hide native interstitial"),
                        void this.hide_native_interstitial_ui();
                    this.hide_native_interstitial_ui(),
                    this._business_config_data = d.syyx_manager.get_business_config(),
                    this._business_config_data && this._business_config_data.native_interstitial_report_click_update_switch && 1 == this._business_config_data.native_interstitial_report_click_update_switch.value[0] && this.load_native_interstitial(this._ad_param.ad_type, this._ad_param.ad_pos_id, this._ad_param.onLoad, this._ad_param.onShow, this._ad_param.onClose, this._ad_param.onError)
                }
            }
            ,
            t.report_ad_show = function(t, e) {
                if (this._ad_pos_id || (console.log("igc----- ad_native_interstitial  report_ad_click this.ad_pos_id is null!!"),
                this._ad_pos_id = o.e_ad_id.native_interstitial_hall),
                this._ad_pos_id == t)
                    if (e.native_type == o.e_ad_native_type.native_interstitial) {
                        var i = l.syyx_adv_manager.get_native_data_list_max_order(this._native_data_list);
                        if (e.order = i + 1,
                        e.state == o.e_ad_native_state.need_show || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg) {
                            e.state == o.e_ad_native_state.need_show && (this.report_data.show_count++,
                            this.report_data.start_count++);
                            var _ = l.syyx_adv_manager.get_channel_ad_id(t)
                              , s = {
                                ad_id: _,
                                ad_unit_id: e.adUnitId,
                                ad_type: igc.e_ad_type.native,
                                ad_pos_id: t,
                                ad_event: _,
                                ad_scene: _,
                                sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                            };
                            igc.igc_main.instance.report_ad_show(s),
                            e.state = o.e_ad_native_state.show
                        }
                    } else
                        e.native_type == o.e_ad_native_type.native_banner && (r.ad_banner.report_ad_show(e.adPosId, e),
                        r.ad_banner.hide_banner(),
                        console.log("igc----- ad_native_interstitial use native_banner data so that hide_banner"))
            }
            ,
            t.load_native_interstitial = function(t, e, i, s, c, u) {
                var p = this;
                if (r.ad_banner.can_show_first)
                    if (l.syyx_adv_manager.check_is_click_limit(o.e_ad_native_type.native_interstitial, this.report_data))
                        this.hide_native_interstitial_ui();
                    else {
                        this._ad_pos_id = e,
                        this._ad_param = {
                            ad_type: t,
                            ad_pos_id: e,
                            onLoad: i,
                            onShow: s,
                            onClose: c,
                            onError: u
                        };
                        var y = l.syyx_adv_manager.get_channel_ad_id(e);
                        if (y && "1" != y && "0" != y) {
                            var h = l.syyx_adv_manager.get_latest_native_data(this._native_data_list);
                            if (h && h.state == o.e_ad_native_state.need_show)
                                return p.show_native_interstitial_ui(h),
                                i && i({}, h),
                                void (s && s());
                            if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web) {
                                var f = new _.native_ad_data;
                                return f.adPosId = e,
                                f.adId = "1",
                                f.adUnitId = a.syyx_sdk_utils.get_random_number([0, 1e5]),
                                f.imgUrlList = "https://h5-lg.syyx.com/coolbattle/share/share_img.jpg",
                                f.title = "\u539f\u751f\u63d2\u5c4f\u6807\u9898" + a.syyx_sdk_utils.get_random_number([200, 300]),
                                f.desc = "\u539f\u751f\u63d2\u5c4f\u63cf\u8ff0" + a.syyx_sdk_utils.get_random_number([200, 300]),
                                f.state = o.e_ad_native_state.need_show,
                                f.native_type = o.e_ad_native_type.native_interstitial,
                                this.add_native_data(f),
                                p.show_native_interstitial_ui(f),
                                i && i({}, f),
                                void (s && s())
                            }
                            d.syyx_manager.create_ad(igc.e_ad_type.native, e, function(t, r) {
                                if (console.log("igc-----syyx_adv_manager-------load_native_interstitial on_load", r),
                                null != r && r[0]) {
                                    var c = 0;
                                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (c = r.length - 1);
                                    var d = new _.native_ad_data;
                                    d.adPosId = e,
                                    d.adId = l.syyx_adv_manager.get_channel_ad_id(e),
                                    d.adUnitId = r[c].adUnitId,
                                    d.imgUrlList = a.syyx_sdk_utils.format_remote_texture_url(r[c].imgUrlList[0]),
                                    d.title = r[c].title,
                                    d.desc = r[c].desc,
                                    d.state = o.e_ad_native_state.need_show,
                                    d.native_type = o.e_ad_native_type.native_interstitial,
                                    p.add_native_data(d),
                                    p.show_native_interstitial_ui(d),
                                    i && i({}, d),
                                    s && s()
                                } else
                                    u && u()
                            }, function() {}, function() {}, function(t, i) {
                                u && u(),
                                console.error("igc-----syyx_adv_manager-------load_native_interstitial onError", i),
                                p._normal_ad_pos_id = l.syyx_adv_manager._adv_config_data[e].backup_id || void 0,
                                n.syyx_const.syyx_sdk_channel == igc.e_channel_type.vivo_qg && p._normal_ad_pos_id && d.syyx_manager.create_ad(igc.e_ad_type.interstitial, p._normal_ad_pos_id, function() {}, function() {}, function() {}, function() {
                                    var t = p.get_native_data();
                                    t && p.show_native_interstitial_ui(t)
                                })
                            })
                        } else
                            console.log("igc----- ad_native_interstitial native_interstitial_id no configure in adv.csv")
                    }
                else
                    console.log("igc----- is in oppo first ad cd")
            }
            ,
            t.show_native_interstitial_ui = function(t) {
                s.syyx_sdk_api.create_interstitial(function(e) {
                    e.show && e.show(t)
                })
            }
            ,
            t.hide_native_interstitial_ui = function() {
                s.syyx_sdk_api.load_view(_.syyx_view.interstitial, function(t) {
                    t.hide && t.hide()
                })
            }
            ,
            t.get_native_data = function() {
                if (!l.syyx_adv_manager.check_is_open_oppo_rule())
                    return this._native_data_list[0];
                if (this._native_data_list.length > 0)
                    return l.syyx_adv_manager.check_native_data_list_is_reprot(this._native_data_list) ? (console.log("igc----- ad_native_interstitial use old load native data"),
                    l.syyx_adv_manager.get_min_order_native_data(this._native_data_list)) : (console.log("igc----- ad_native_interstitial use new load native data"),
                    l.syyx_adv_manager.get_latest_native_data(this._native_data_list));
                var t = c.ad_native_inner_interstitial.get_is_use_native_banner_data()
                  , e = r.ad_banner.get_reprot_data()
                  , i = .3
                  , n = d.syyx_manager.get_business_config();
                if (n && n.native_banner_click_pro_limit.value && (i = n.native_banner_click_pro_limit.value[1]),
                e.click_count / e.show_count <= i) {
                    var o = r.ad_banner.get_native_data();
                    !t && o && 0 == this._native_data_list.length ? this.show_native_interstitial_ui(o) : console.log("igc----- ad_native_interstitial normal_interstitial_error no have native_data use!")
                }
            }
            ,
            t.add_native_data = function(t) {
                if (l.syyx_adv_manager.check_is_open_oppo_rule()) {
                    for (var e in this._native_data_list)
                        if (this._native_data_list[e].adUnitId == t.adUnitId)
                            return;
                    var i = l.syyx_adv_manager.get_oppo_native_cache_max_length();
                    this._native_data_list.length >= i && this._native_data_list.splice(0, 1),
                    this._native_data_list.push(t)
                } else
                    this._native_data_list[0] = t
            }
            ,
            t.remove_native_data = function(t) {
                if (l.syyx_adv_manager.check_is_open_oppo_rule()) {
                    for (var e in this._native_data_list)
                        if (this._native_data_list[e].adUnitId == t.adUnitId)
                            return void this._native_data_list.splice(parseInt(e), 1)
                } else
                    this._native_data_list[0] = void 0
            }
            ,
            t._native_data_list = [],
            t._business_config_data = {},
            t.report_data = {
                start_count: 0,
                show_count: 0,
                click_count: 0
            },
            t
        }();
        i.ad_native_interstitial = u,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../syyx_sdk_api": "syyx_sdk_api",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_banner": "ad_banner",
        "./ad_native_inner_interstitial": "ad_native_inner_interstitial",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_manager": "syyx_manager"
    }],
    ad_oppo_banner: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "16d85o3I9BPNqcAE0YwUFWU", "ad_oppo_banner"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.ad_oppo_banner = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("./ad_banner")
          , r = t("./syyx_adv_manager")
          , c = t("./syyx_manager")
          , l = function() {
            function t() {}
            return t.get_oppo_banner_show_update_time = function() {
                var t = r.syyx_adv_manager.get_play_game_time()
                  , e = void 0;
                if (this._business_config_data = c.syyx_manager.get_business_config(),
                this._business_config_data && this._business_config_data.oppo_banner_cool_time && (e = this._business_config_data.oppo_banner_cool_time.value),
                !e || e.length <= 0)
                    return 10;
                var i = 0
                  , n = [];
                for (var o in e)
                    if (n = e[o],
                    e[o][0] <= t && e[o][1] >= t) {
                        i = e[o][2];
                        break
                    }
                return i || n[2]
            }
            ,
            t.run_timer = function() {
                var t = this;
                this.is_run_timer ? this._cur_native_data ? this.show_native_banner_ui() : this.load_native_banner() : (console.log("igc----- ad_oppo_banner open oppo new rule model!!!"),
                this.is_run_timer = !0,
                this._business_config_data = c.syyx_manager.get_business_config(),
                t.update_cur_native_data(),
                t.load_native_banner(),
                setInterval(function() {
                    t.banner_showing && t.banner_show_time++,
                    t.banner_show_time > 0 && t.banner_show_time % t.update_cd == 0 && (console.log("igc----- update_native_banner"),
                    t.update_cur_native_data(),
                    t.load_native_banner())
                }, 1e3))
            }
            ,
            t.show_banner = function(t, e, i, n, o, _) {
                if (this.need_show = !0,
                this._normal_banner_id = e,
                this._native_banner_id = r.syyx_adv_manager._adv_config_data[e].backup_id,
                this._ad_param = {
                    ad_type: t,
                    ad_pos_id: e,
                    onLoad: i,
                    onShow: n,
                    onClose: o,
                    onError: _
                },
                a.ad_banner.can_show_first) {
                    var s = r.syyx_adv_manager.get_channel_ad_id(e);
                    s && "1" != s && "0" != s ? this.run_timer() : console.log("igc----- ad_oppo_banner normal_banner_id no configure in adv.csv")
                } else
                    console.log("igc----- banner is in cooling time ")
            }
            ,
            t.hide_banner = function() {
                this.need_show = !1,
                this.banner_showing = !1,
                a.ad_banner.can_show_first ? (this.hide_native_banner_ui(),
                this.hide_normal_banner()) : console.log("igc----- banner is in cooling time ")
            }
            ,
            t.load_native_banner = function() {
                var t = this;
                if (this.banner_timer_id && clearTimeout(this.banner_timer_id),
                this.update_cd = this.get_oppo_banner_show_update_time(),
                this.hide_native_banner_ui(),
                this.need_show) {
                    if (r.syyx_adv_manager.check_is_click_limit(o.e_ad_native_type.native_banner, this.report_data))
                        return this.hide_native_banner_ui(),
                        this.hide_normal_banner(),
                        void this.set_show_error_model();
                    if (r.syyx_adv_manager.check_is_show_count_limit())
                        return console.log("igc----- ad_oppo_banner show native is show limit !!!"),
                        void (this._cur_native_data ? (console.log("igc----- ad_oppo_banner use old native data"),
                        t.show_native_banner_ui()) : t.set_show_error_model());
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web) {
                        var e = new _.native_ad_data;
                        return e.adPosId = t._native_banner_id,
                        e.adId = "1",
                        e.adUnitId = s.syyx_sdk_utils.get_random_number([0, 1e5]),
                        e.imgUrlList = "https://h5-lg.syyx.com/coolbattle/share/share_img.jpg",
                        e.title = "banner\u6d4b\u8bd5\u6807\u9898" + s.syyx_sdk_utils.get_random_number([0, 100]),
                        e.desc = "banner\u6d4b\u8bd5\u63cf\u8ff0" + s.syyx_sdk_utils.get_random_number([0, 100]),
                        e.state = o.e_ad_native_state.need_show,
                        e.native_type = o.e_ad_native_type.native_banner,
                        this.add_native_data(e),
                        console.log("igc------syyx_adv_manager-------native_banner on_load web", e),
                        t.show_native_banner_ui(),
                        t._ad_param.onLoad && t._ad_param.onLoad(),
                        void r.syyx_adv_manager.add_native_show_count()
                    }
                    t._native_banner_id && this.is_oppo_vivo() ? this._business_config_data && this._business_config_data.native_banner_open_switch && 0 == this._business_config_data.native_banner_open_switch.value[0] ? t.show_normal_banner() : this._cur_native_data && this._cur_native_data.state == o.e_ad_native_state.need_show ? t.show_native_banner_ui() : c.syyx_manager.create_ad(igc.e_ad_type.native, t._native_banner_id, function(e, i) {
                        if (console.log("igc------syyx_adv_manager-------native_banner on_load", i),
                        null != i && i[0]) {
                            var a = 0;
                            n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (a = i.length - 1);
                            var c = new _.native_ad_data;
                            c.adPosId = t._native_banner_id,
                            c.adId = r.syyx_adv_manager.get_channel_ad_id(t._native_banner_id),
                            c.adUnitId = i[a].adUnitId,
                            c.imgUrlList = s.syyx_sdk_utils.format_remote_texture_url(i[a].imgUrlList[0]),
                            c.title = i[a].title,
                            c.desc = i[a].desc,
                            c.state = o.e_ad_native_state.need_show,
                            c.native_type = o.e_ad_native_type.native_banner,
                            t.add_native_data(c),
                            t.show_native_banner_ui(),
                            t._ad_param.onLoad && t._ad_param.onLoad(),
                            r.syyx_adv_manager.add_native_show_count()
                        } else
                            t.show_normal_banner()
                    }, function() {}, function() {}, function(e, i) {
                        console.error("igc-----syyx_adv_manager-------native_banner onError", i),
                        t.show_normal_banner()
                    }) : t.show_normal_banner()
                } else
                    t.hide_banner()
            }
            ,
            t.report_ad_click = function(t, e) {
                if (this._native_banner_id == t) {
                    this.report_data.click_count = Math.min(++this.report_data.click_count, this.report_data.show_count);
                    var i = e.adUnitId
                      , n = r.syyx_adv_manager.get_channel_ad_id(t)
                      , o = {
                        ad_id: n,
                        ad_unit_id: i,
                        ad_type: igc.e_ad_type.native,
                        ad_pos_id: t,
                        ad_event: n,
                        ad_scene: n,
                        sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                    };
                    igc.igc_main.instance.report_ad_click(o),
                    this.remove_native_data(e),
                    this.update_cur_native_data(),
                    this._business_config_data && this._business_config_data.native_banner_report_click_update_switch && 1 == this._business_config_data.native_banner_report_click_update_switch.value[0] && (this.need_show = !0,
                    this.load_native_banner())
                }
            }
            ,
            t.report_ad_show = function(t, e) {
                if (this._native_banner_id == t) {
                    var i = r.syyx_adv_manager.get_native_data_list_max_order(this._native_data_list);
                    if (e.order = i + 1,
                    e.state == o.e_ad_native_state.need_show || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg) {
                        e.state == o.e_ad_native_state.need_show && (this.report_data.show_count++,
                        this.report_data.start_count++);
                        var _ = r.syyx_adv_manager.get_channel_ad_id(t)
                          , s = {
                            ad_id: _,
                            ad_unit_id: e.adUnitId,
                            ad_type: igc.e_ad_type.native,
                            ad_pos_id: t,
                            ad_event: _,
                            ad_scene: _,
                            sub_ad_type: igc.e_ad_native_type.native_banner_dialog
                        };
                        igc.igc_main.instance.report_ad_show(s),
                        e.state = o.e_ad_native_state.show
                    }
                }
            }
            ,
            t.show_native_banner_ui = function() {
                var t = this;
                this.hide_normal_banner(),
                this.need_show && c.syyx_manager.create_native_banner(function(e) {
                    t.banner_showing = !0,
                    t._ad_param.onShow && t._ad_param.onShow(),
                    e.show && e.show(t._cur_native_data)
                })
            }
            ,
            t.hide_native_banner_ui = function() {
                this.is_oppo_vivo() && c.syyx_manager.load_view(_.syyx_view.native_banner, function(t) {
                    t && t.hide && t.hide()
                })
            }
            ,
            t.show_normal_banner = function() {
                if (this._business_config_data && this._business_config_data.show_normal_banner_switch && 0 == this._business_config_data.show_normal_banner_switch.value[0])
                    console.log("igc ----- normal banner switch is close");
                else {
                    var t = this;
                    if (!this.can_show_vivo_banner && n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg)
                        return console.log("igc----- vivo ad_banner show_normal_banner create too often!!!"),
                        console.log("igc----- vivo ad_banner show_normal_banner so that use old native banner data!!!"),
                        t.banner_showing = !1,
                        t.update_cur_native_data(),
                        void (t.need_show && (t._cur_native_data ? t.show_native_banner_ui() : t.set_show_error_model()));
                    c.syyx_manager.create_ad(igc.e_ad_type.banner, t._normal_banner_id, function() {
                        t._ad_param.onLoad && t._ad_param.onLoad()
                    }, function() {
                        t.normal_banner_showing = !0,
                        console.log("igc----- show_normal_banner success"),
                        t.hide_native_banner_ui(),
                        t.banner_showing = t.need_show,
                        t.need_show ? (t._ad_param.onShow && t._ad_param.onShow(),
                        r.syyx_adv_manager.add_native_show_count()) : t.hide_normal_banner()
                    }, function() {
                        t._ad_param.onClose && t._ad_param.onClose()
                    }, function(e, i) {
                        t.banner_showing = !1,
                        console.error("igc------syyx_adv_manager show_normal_banner onError", i),
                        t._ad_param.onError && t._ad_param.onError(e, i),
                        console.log("igc----- fail to show normal banner so that use native banner's data"),
                        t.update_cur_native_data(),
                        t.need_show && (t._cur_native_data ? t.show_native_banner_ui() : t.set_show_error_model())
                    })
                }
            }
            ,
            t.set_show_error_model = function() {
                var t = this;
                r.syyx_adv_manager.check_is_open_oppo_rule() && (this.banner_timer_id && clearTimeout(this.banner_timer_id),
                this.banner_timer_id = setTimeout(function() {
                    var e = t.get_native_data();
                    t.need_show && !e && (console.log("igc----- ad_oppo_banner set_show_error_model auto load_native_banner"),
                    t.load_native_banner())
                }, 1e3 * this.update_cd))
            }
            ,
            t.hide_normal_banner = function() {
                var t = this;
                t._normal_banner_id && (t.normal_banner_showing && n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg && (t.can_show_vivo_banner = !1,
                this.normal_banner_timer_id && clearTimeout(this.normal_banner_timer_id),
                this.normal_banner_timer_id = setTimeout(function() {
                    t.can_show_vivo_banner = !0
                }, 11e3)),
                t.normal_banner_showing = !1,
                c.syyx_manager.destroy_ad(igc.e_ad_type.banner, t._normal_banner_id))
            }
            ,
            t.finger_close_banner = function() {
                if (this.is_oppo_vivo() && this._business_config_data && this._business_config_data.finger_close_banner_switch && 1 == this._business_config_data.finger_close_banner_switch.value[0]) {
                    var t = this._business_config_data.finger_close_banner_switch.value[1] || 60;
                    this.hide_banner(),
                    a.ad_banner.can_show_first = !1,
                    setTimeout(function() {
                        a.ad_banner.can_show_first = !0
                    }, 1e3 * t)
                }
            }
            ,
            t.update_cur_native_data = function() {
                this.banner_show_time = 0,
                this._cur_native_data = this.get_native_data()
            }
            ,
            t.get_native_data = function() {
                return r.syyx_adv_manager.check_native_data_list_is_reprot(this._native_data_list) ? (console.log("igc----- ad_oppo_banner use old load native data"),
                r.syyx_adv_manager.get_min_order_native_data(this._native_data_list)) : (console.log("igc----- ad_oppo_banner use new load native data"),
                r.syyx_adv_manager.get_latest_native_data(this._native_data_list))
            }
            ,
            t.add_native_data = function(t) {
                for (var e in this._native_data_list)
                    if (this._native_data_list[e].adUnitId == t.adUnitId)
                        return;
                var i = r.syyx_adv_manager.get_oppo_native_cache_max_length();
                this._native_data_list.length >= i && this._native_data_list.splice(0, 1),
                this._native_data_list.push(t),
                this.update_cur_native_data()
            }
            ,
            t.remove_native_data = function(t) {
                for (var e in this.banner_show_time = 0,
                this.hide_native_banner_ui(),
                this.hide_normal_banner(),
                this._cur_native_data && t.adUnitId == this._cur_native_data.adUnitId && (this._cur_native_data = void 0),
                this._native_data_list)
                    if (this._native_data_list[e].adUnitId == t.adUnitId)
                        return console.log("igc----- ad_oppo_banner remove one native_banner data", t.adUnitId),
                        void this._native_data_list.splice(parseInt(e), 1)
            }
            ,
            t.is_oppo_vivo = function() {
                return n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web
            }
            ,
            t._native_data_list = [],
            t._business_config_data = {},
            t._native_banner_id = void 0,
            t._normal_banner_id = void 0,
            t.update_cd = 5,
            t.is_run_timer = !1,
            t.need_show = !0,
            t.banner_showing = !1,
            t.banner_show_time = 0,
            t._cur_native_data = void 0,
            t.normal_banner_showing = !1,
            t.can_show_vivo_banner = !0,
            t.report_data = {
                start_count: 0,
                show_count: 0,
                click_count: 0
            },
            t
        }();
        i.ad_oppo_banner = l,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_banner": "ad_banner",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_manager": "syyx_manager"
    }],
    air_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cd0d2ooBe1KaJLmqtoW5Gdw", "air_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isCollider = !1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {}
            ,
            e.prototype.onBeginContact = function(t, e, i) {
                if (!this.isCollider) {
                    this.isCollider = !0,
                    this.node.destroy();
                    var n = i.node
                      , o = n.getComponent(cc.RigidBody);
                    switch (this.node.parent.angle) {
                    case 0:
                        o.gravityScale = o.getMass() < 2.5 ? 0 : 1,
                        "player" != n.name ? o.applyForceToCenter(cc.v2(-4e5), !1) : o.applyForceToCenter(cc.v2(-4e4, 0), !1);
                        break;
                    case 90:
                        o.applyForceToCenter(cc.v2(0, -4e4), !0);
                        break;
                    case -90:
                        "player" != n.name ? (o.applyForceToCenter(cc.v2(0, 2e5), !1),
                        cc.log(n.name)) : 2 == i.tag && (o.applyForceToCenter(cc.v2(0, 5e5), !1),
                        cc.log("aaa"));
                        break;
                    case 180:
                        o.gravityScale = o.getMass() < 2.5 ? 0 : 1,
                        o.applyForceToCenter(cc.v2(4e4, 0), !0)
                    }
                }
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    air: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "577e2JtXzNDXKqaZNh044Yk", "air");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.item = null,
                e.distance = 1e3,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                var t = this;
                this.time = this.distance / 1500,
                this.schedule(function() {
                    t.creatorItem()
                }, .05)
            }
            ,
            e.prototype.creatorItem = function() {
                var t = cc.instantiate(this.item);
                this.node.addChild(t),
                t.position = cc.v3(160, Math.random() * this.node.height - this.node.height / 2),
                t.scaleY = (2 * Math.random() + 2) / 10,
                t.scaleX = (4 * Math.random() + 10) / 10,
                cc.tween(t).by(this.time, {
                    opacity: -t.opacity,
                    x: -this.distance,
                    y: t.y > 0 ? -150 * Math.random() : 150 * Math.random(),
                    angle: t.y > 0 ? 4 * Math.random() : -4 * Math.random()
                }).call(function() {
                    t.destroy()
                }).start()
            }
            ,
            _([r(cc.Prefab)], e.prototype, "item", void 0),
            _([r], e.prototype, "distance", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    bctl_win: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c11cb+5rdFMSbnAhBs8gAlo", "bctl_win");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.start = function() {
                this.startViewComp = this.node.parent.getComponent("startView")
            }
            ,
            e.prototype.btn_tap = function(t) {
                var e = this;
                if ("close_btn" == t.currentTarget.name)
                    if ("startView" == this.node.parent.name)
                        this.node.destroy();
                    else {
                        for (var i = 0; i < utils.viewLayer.childrenCount; i++)
                            utils.viewLayer.children[i].destroy();
                        utils.viewLayer.addChild(cc.instantiate(utils.view[0]))
                    }
                else
                    "mflq_btn" == t.currentTarget.name && YYGGames.showReward(function() {
                        e.shareOrView()
                    })
            }
            ,
            e.prototype.shareOrView = function() {
                this.success()
            }
            ,
            e.prototype.success = function() {
                utils.setData("tl", utils.getData("tl") + 5),
                "startView" == this.node.parent.name ? (this.startViewComp.initTl(),
                this.node.destroy()) : this.node.dispatchEvent(new cc.Event.EventCustom("startGame",!0))
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    bee: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "37664XOIUVGdZRYTuVClDPx", "bee");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.movePos = cc.v2(0, 0),
                e.collNum = 0,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                this.beeMove()
            }
            ,
            e.prototype.beeMove = function() {
                if (0 != this.movePos.x || 0 != this.movePos.y) {
                    var t = (0 == this.movePos.x ? Math.abs(this.movePos.y) : Math.abs(this.movePos.x)) / 200;
                    cc.tween(this.node).repeatForever(cc.tween().by(t, {
                        position: cc.v3(this.movePos.x, this.movePos.y)
                    }).by(t, {
                        position: cc.v3(-this.movePos.x, -this.movePos.y)
                    })).start()
                }
            }
            ,
            e.prototype.onBeginContact = function(t, e, i) {
                var n = i.node;
                this.collNum++,
                "pen" == n.group && cc.director.getActionManager().pauseTarget(this.node)
            }
            ,
            e.prototype.onEndContact = function(t, e, i) {
                "pen" == i.node.group && (this.collNum--,
                cc.log("aaaaaaaaaaa=", this.collNum),
                this.collNum || cc.director.getActionManager().resumeTarget(this.node))
            }
            ,
            _([r], e.prototype, "movePos", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    bxwd: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c5ad7MUoOJHOLgzxYgMS/RZ", "bxwd");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.box = null,
                e.jdt = null,
                e.img = null,
                e.isShow = !1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                var t = this;
                adc.closeBanner(),
                "bxwd" == this.node.name ? this.box.setCompleteListener(function() {
                    t.box.setAnimation(0, "daiji", !1)
                }) : this.box.paused = !0
            }
            ,
            e.prototype.clickBtn1 = function() {
                this.box.setAnimation(0, "play", !1),
                utils.playEffect(utils.sound[4]),
                this.addJdt()
            }
            ,
            e.prototype.clickBtn2 = function() {
                this.box.paused = !1,
                this.box.setAnimation(0, "animation", !1),
                utils.playEffect(utils.sound[4]),
                this.addJdt()
            }
            ,
            e.prototype.addJdt = function() {
                this.jdt.fillRange += .3,
                this.jdt.fillRange > .5 && !this.isShow && (this.node.children[2].y += 350,
                adc.showBanner(),
                this.isShow = !0),
                this.jdt.fillRange >= 1 && this.node.destroy()
            }
            ,
            e.prototype.update = function() {
                this.jdt.fillRange > 0 && (this.jdt.fillRange -= .01)
            }
            ,
            _([r(sp.Skeleton)], e.prototype, "box", void 0),
            _([r(cc.Sprite)], e.prototype, "jdt", void 0),
            _([r(cc.Animation)], e.prototype, "img", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    cdjm: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "96ab6eJiFtAL7EUToP3MDk/", "cdjm");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.zkcd_btn = null,
                e.lqjl_btn = null,
                e.jdt = null,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                "startView" == this.node.parent.parent.children[1].children[0].name && (this.startComp = this.node.parent.parent.children[1].children[0].getComponent("startView")),
                100 * Math.random() >= lwsdk.getCustomConfigByKey("boxProbability") && this.jdt_fulfill()
            }
            ,
            e.prototype.btn_tap = function(t) {
                "zkcd_btn" == t.currentTarget.name ? t.currentTarget.children[1].active ? this.showViedo() : this.zkcd() : "lqjl_btn" == t.currentTarget.name ? this.getJb() : "close_btn" == t.currentTarget.name && this.node.destroy()
            }
            ,
            e.prototype.zkcd = function() {
                this.jdt.fillRange += .3,
                this.jdt.fillRange >= .8 && this.jdt_fulfill()
            }
            ,
            e.prototype.jdt_fulfill = function() {
                this.zkcd_btn.children[1].active = !0,
                this.node.children[9].active = !0,
                this.jdt.node.parent.active = !1
            }
            ,
            e.prototype.showViedo = function() {
                var t = this;
                lwsdk.shareOrVideo({
                    buttonKey: "XJJHG-TY",
                    success: function() {
                        t.showLQJL(),
                        utils.resumeMusic()
                    },
                    fail: function() {
                        utils.resumeMusic()
                    }
                })
            }
            ,
            e.prototype.showLQJL = function() {
                this.zkcd_btn.active = !1,
                this.node.children[3].active = !1,
                this.lqjl_btn.active = !0,
                this.node.children[4].active = !0
            }
            ,
            e.prototype.getJb = function() {
                utils.setData("jb", utils.getData("jb") + 50),
                this.startComp && this.startComp.initJb(),
                this.node.destroy()
            }
            ,
            e.prototype.update = function() {
                this.node.children[2].angle += 3,
                this.jdt.fillRange > 0 && this.jdt.fillRange < .8 && (this.jdt.fillRange -= .01)
            }
            ,
            _([r(cc.Node)], e.prototype, "zkcd_btn", void 0),
            _([r(cc.Node)], e.prototype, "lqjl_btn", void 0),
            _([r(cc.Sprite)], e.prototype, "jdt", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    cj_win: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "83059e7Vt1APKs1VCJiaHMq", "cj_win");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemPar = null,
                e.award = null,
                e.btn = null,
                e.cjStr = null,
                e.isChickCj = !1,
                e.isCj = !1,
                e.itemNum = 1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                this.startViewComp = this.node.parent.getComponent("startView"),
                cc.sys.platform == cc.sys.WECHAT_GAME && adc.showBanner(),
                this.cjStr.string = utils.getData("cj"),
                utils.getData("cjsb") && (this.btn.children[1].active = !0),
                utils.getData("cj") || (this.btn.children[2].active = !0),
                this.node.zIndex = 99
            }
            ,
            e.prototype.btn_tap = function(t) {
                if (!this.isCj)
                    if ("close_btn" == t.currentTarget.name)
                        this.node.destroy();
                    else if ("cj_btn" == t.currentTarget.name)
                        this.judgeCj();
                    else if ("tip_btn" == t.currentTarget.name)
                        ;
                    else if ("gbjl_btn" == t.currentTarget.name) {
                        for (var e = 0; e < 3; e++)
                            this.award.children[2].children[e].active = !1;
                        this.award.active = !1
                    }
            }
            ,
            e.prototype.judgeCj = function() {
                var t = this;
                utils.getData("cj") ? (utils.setData("cj", utils.getData("cj") - 1),
                this.cjStr.string = utils.getData("cj"),
                this.cj(utils.getData("cjsb")),
                utils.getData("cj") || (this.btn.children[2].active = !0)) : YYGGames.showReward(function() {
                    t.cj(utils.getData("cjsb"))
                })
            }
            ,
            e.prototype.cj = function(t) {
                var e = this;
                void 0 === t && (t = !1),
                this.isCj = !0,
                this.isChickCj = !0;
                var i = 250 * this.itemNum - Math.abs(this.itemPar.x)
                  , n = Math.floor(4 * Math.random());
                (this.itemNum + 20 + n) % 4 == 3 ? i += t ? 5e3 + 250 * (n + 1) : 5e3 + 250 * n : i += 5e3 + 250 * n,
                cc.tween(this.itemPar).by(2, {
                    x: -i
                }).call(function() {
                    e.getAward(t),
                    e.isCj = !1
                }).start()
            }
            ,
            e.prototype.getAward = function(t) {
                var e;
                switch (void 0 === t && (t = !1),
                utils.getData("cjsb") && (this.btn.children[1].active = !1,
                utils.setData("cjsb", 0)),
                this.award.active = !0,
                this.itemNum % 4) {
                case 0:
                    e = this.award.children[2].children[1],
                    t ? (e.children[0].getComponent(cc.Label).string = "+40",
                    utils.setData("jb", utils.getData("jb") + 40)) : (e.children[0].getComponent(cc.Label).string = "+20",
                    utils.setData("jb", utils.getData("jb") + 20)),
                    this.startViewComp.initJb();
                    break;
                case 1:
                    e = this.award.children[2].children[2],
                    t ? (e.children[0].getComponent(cc.Label).string = "+2",
                    utils.setData("tl", utils.getData("tl") + 2)) : (e.children[0].getComponent(cc.Label).string = "+1",
                    utils.setData("tl", utils.getData("tl") + 1)),
                    this.startViewComp.initTl();
                    break;
                case 2:
                    e = this.award.children[2].children[1],
                    t ? (e.children[0].getComponent(cc.Label).string = "+20",
                    utils.setData("jb", utils.getData("jb") + 20)) : (e.children[0].getComponent(cc.Label).string = "+10",
                    utils.setData("jb", utils.getData("jb") + 10)),
                    this.startViewComp.initJb();
                    break;
                case 3:
                    e = this.award.children[2].children[0],
                    utils.setData("cjsb", 1),
                    this.btn.children[1].active = !0
                }
                e.active = !0
            }
            ,
            e.prototype.update = function() {
                this.isChickCj || (this.itemPar.x -= 5),
                Math.abs(this.itemPar.x) / 250 >= this.itemNum && (this.itemPar.children[(this.itemNum - 1) % 4].x = this.itemPar.children[(this.itemNum + 2) % 4].x + 250,
                this.itemNum++),
                this.award.children[1].angle += 2
            }
            ,
            e.prototype.onDestroy = function() {
                cc.sys.platform == cc.sys.WECHAT_GAME && adc.closeBanner()
            }
            ,
            _([r(cc.Node)], e.prototype, "itemPar", void 0),
            _([r(cc.Node)], e.prototype, "award", void 0),
            _([r(cc.Node)], e.prototype, "btn", void 0),
            _([r(cc.Label)], e.prototype, "cjStr", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    drawWire: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "275e9yiUbxMIp4NZ0iwxztS", "drawWire");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("./MyPhysicsCollider")
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.linePrefab = null,
                e.wireParent = null,
                e.mouse = null,
                e.linePhysics = null,
                e.physicsLinePoints = [],
                e.isColl = !1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                var t = this;
                this.addGraphicsNode(),
                this.onEvent(),
                this.gameViewComp = this.node.getComponent("gameView"),
                this.node.on("isColl", function(e) {
                    e.stopPropagation(),
                    t.isColl = !0
                }, this)
            }
            ,
            e.prototype.onEvent = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback.bind(this)),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoveCallback.bind(this)),
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback.bind(this)),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndCallback.bind(this))
            }
            ,
            e.prototype.onTouchStartCallback = function(t) {
                this.mouse.active = !0;
                var e = this.node.convertToNodeSpaceAR(t.getLocation());
                this.mouse.position = e,
                this.linePhysics.moveTo(e.x, e.y),
                this.recordPos = cc.v2(e.x, e.y),
                this.physicsLinePoints.push(cc.v2(e.x, e.y - .5)),
                this.currentPos = e
            }
            ,
            e.prototype.onTouchMoveCallback = function(t) {
                var e = this.node.convertToNodeSpaceAR(t.getLocation());
                this.mouse.position = e,
                this.linePhysics.lineTo(e.x, e.y),
                this.linePhysics.stroke(),
                this.linePhysics.moveTo(e.x, e.y),
                this.currentPos.sub(e).mag() > 5 && (this.physicsLinePoints.push(cc.v2(e.x, e.y - .5)),
                this.currentPos = e)
            }
            ,
            e.prototype.onTouchEndCallback = function() {
                if (this.mouse.active = !1,
                this.physicsLinePoints.length <= 1 || this.isColl)
                    return this.isColl = !1,
                    cc.log("\u957f\u5ea6\u4e0d\u6ee1\u8db3"),
                    this.linePhysics.clear(),
                    void (this.physicsLinePoints.length = 0);
                this.createMyBigibody(),
                this.addGraphicsNode(),
                cc.director.getScene().emit("gameStart"),
                cc.log("this.gameViewComp.tipMag=", this.gameViewComp.tipMag),
                this.gameViewComp.tipMag && (this.gameViewComp.tipMag.active = !1)
            }
            ,
            e.prototype.createMyBigibody = function() {
                var t = this.wireParent.children[this.wireParent.childrenCount - 1]
                  , e = t.addComponent(cc.RigidBody);
                e.bullet = !0,
                e.allowSleep = !1,
                e.gravityScale = 1.5;
                var i = t.addComponent(c);
                i.lineWidth = 5,
                i.points = this.physicsLinePoints,
                i.apply(),
                i.density = 2,
                i.restitution = 1,
                this.physicsLinePoints.length = 0,
                console.log("getMass=", e.getMass())
            }
            ,
            e.prototype.addGraphicsNode = function() {
                var t = cc.instantiate(this.linePrefab);
                this.linePhysics = t.getComponent(cc.Graphics),
                this.linePhysics.lineWidth = 8,
                this.linePhysics.strokeColor = cc.Color.BLACK,
                this.linePhysics.fillColor = cc.Color.BLACK,
                this.linePhysics.lineJoin = 0,
                this.linePhysics.lineCap = 2,
                this.wireParent.addChild(t),
                t.position = cc.v3(0, 0, 0)
            }
            ,
            _([r(cc.Prefab)], e.prototype, "linePrefab", void 0),
            _([r(cc.Node)], e.prototype, "wireParent", void 0),
            _([r(cc.Node)], e.prototype, "mouse", void 0),
            _([a], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "./MyPhysicsCollider": "MyPhysicsCollider"
    }],
    endView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "39b7eKzgA5OBL/iUdRa0DLg", "endView");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../oppoSdk")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.jbStr = null,
                e.hqtl_win = null,
                e.bannerNode = null,
                e.jbNum = 20,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                s.oppoSdk.event_dd_tc(),
                s.oppoSdk.show_banner_box(),
                cc.sys.platform == cc.sys.OPPO_GAME && s.oppoSdk.closeBanner()
                this.bannerNode.active = !1
                // YYGamesUtil.initGameBanner(this.bannerNode.getChildByName("BannerScrollView"))
            }
            ,
            e.prototype.btn_tap = function(t) {
                
                var e = this;
                "xyg_btn" == t.currentTarget.name ?  YYGGames.showInterstitial(function() {
                    // YYGamesUtil.removeBanner(),
                    utils.setData("jb", utils.getData("jb") + e.jbNum),
                    e.xyg_btn()
                }) : "zlyc_btn" == t.currentTarget.name ?  YYGGames.showInterstitial(function() {
                    // YYGamesUtil.removeBanner(),
                    cc.sys.platform == cc.sys.WECHAT_GAME ? e.isJX() : e.xyg_btn()
                }) : "mffh_btn" == t.currentTarget.name ? YYGGames.showReward(function() {
                    // YYGamesUtil.removeBanner(),
                    e.mffh_btn_wx()
                }) : "sblq_btn" == t.currentTarget.name && YYGGames.showReward(function() {
                    // YYGamesUtil.removeBanner(),
                    e.sblq_btn_wx()
                })
            }
            ,
            e.prototype.isJX = function() {
                if (utils.getData("tl") <= 0)
                    return this.node.addChild(cc.instantiate(this.hqtl_win));
                utils.isZLYC = !0,
                this.hdzy()
            }
            ,
            e.prototype.hdzy = function() {
                for (var t = 0; t < utils.viewLayer.childrenCount; t++)
                    utils.viewLayer.children[t].destroy();
                utils.viewLayer.addChild(cc.instantiate(utils.view[1]))
            }
            ,
            e.prototype.xyg_btn = function() {
                s.oppoSdk.event_dd_zy();
                for (var t = 0; t < utils.viewLayer.childrenCount; t++)
                    utils.viewLayer.children[t].destroy();
                utils.viewLayer.addChild(cc.instantiate(utils.view[0]))
            }
            ,
            e.prototype.mffh_btn_wx = function() {
                this.hdzy()
            }
            ,
            e.prototype.sblq_btn_wx = function() {
                this.jbNum = 40,
                this.jbStr.string = "+40",
                this.node.children[3].active = !1
            }
            ,
            e.prototype.onDestroy = function() {
                s.oppoSdk.close_oppo_box(),
                s.oppoSdk.showBanner(),
                cc.sys.platform == cc.sys.VIVO_GAME && adc.showBXOrHz(4)
            }
            ,
            _([c(cc.Label)], e.prototype, "jbStr", void 0),
            _([c(cc.Prefab)], e.prototype, "hqtl_win", void 0),
            _([c(cc.Node)], e.prototype, "bannerNode", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../oppoSdk": "oppoSdk"
    }],
    exportParent: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "283eaqAfXhOfJ5ahavV0fqi", "exportParent");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.start = function() {}
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    furniture_win: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bfc1aTEOkZHjon7uwps+RBV", "furniture_win");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../oppoSdk")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemPar = null,
                e.jjPar = null,
                e.td = null,
                e.dt = null,
                e.dm = null,
                e.qz = null,
                e.sf = null,
                e.cl = null,
                e.cj = null,
                e.nowJjName = "cl",
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                this.node.zIndex = 9,
                this.startViewComp = this.node.parent.getComponent("startView"),
                this.jjData = JSON.parse(utils.getData("jj")),
                this.init(),
                this.initJj(this.nowJjName)
            }
            ,
            e.prototype.init = function() {
                this.td = this.node.parent.children[0].children[3],
                this.dt = this.node.parent.children[0].children[5],
                this.qz = this.node.parent.children[0].children[1],
                this.dm = this.node.parent.children[0].children[0],
                this.sf = this.node.parent.children[0].children[4],
                this.cl = this.node.parent.children[0].children[1].children[0],
                this.cj = this.node.parent.children[0].children[2]
            }
            ,
            e.prototype.initItem = function(t) {
                cc.log("initItem", t);
                for (var e = !1, i = !1, n = 0; n < this.jjPar.childrenCount && (this.jjPar.children[n].name == t ? (this.jjPar.children[n].children[0].active = !0,
                e = !0) : this.jjPar.children[n].children[0].active && (this.jjPar.children[n].children[0].active = !1,
                i = !0),
                !i || !e); n++)
                    ;
                this.initJj(t)
            }
            ,
            e.prototype.initJj = function(t) {
                var e = this;
                this.jjData.forEach(function(i) {
                    i.name == t && (e.date = i)
                }),
                console.log(!this.date.use),
                this.date.use ? this.itemPar.children[0].children[0].active = !1 : this.itemPar.children[0].children[0].active = !0;
                for (var i = function(e) {
                    var i = n.itemPar.children[e]
                      , o = !1;
                    if (e < n.date.quantity) {
                        i.active = !0,
                        n.date.use == e ? i.children[0].active = !0 : i.children[0].active = !1;
                        for (var _ = 0; _ < n.date.unlock.length; _++)
                            if (e == n.date.unlock[_]) {
                                o = !0;
                                break
                            }
                        o ? i.children[2].active = !1 : (i.children[2].active = !0,
                        1 == e ? i.children[2].children[1].active = !0 : i.children[2].children[0].active = !0),
                        utils.decorateBd.load(t + "/item" + e, cc.SpriteFrame, function(t, e) {
                            if(i){
                                if(i.children[1]){

                                    i.children[1].getComponent(cc.Sprite).spriteFrame = e
                                }
                            }
                        })
                    } else
                        i.active = !1
                }, n = this, o = 2; o < this.itemPar.childrenCount; o++)
                    i(o)
            }
            ,
            e.prototype.btn_tap = function(t) {
                var e = t.currentTarget.name;
                this.nowJjName = e,
                this.initItem(e)
            }
            ,
            e.prototype.itemCilick = function(t) {
                var e = this;
                cc.log("itemCilick", t);
                var i = t.currentTarget
                  , n = Number(i.name)
                  , o = function() {
                    i.children[2].active = !1,
                    e.date.unlock.push(n);
                    for (var t = 0; t < e.itemPar.childrenCount; t++)
                        if (e.itemPar.children[t].active && e.itemPar.children[t].children[0].active) {
                            e.itemPar.children[t].children[0].active = !1;
                            break
                        }
                    utils.decorateBd.load(e.nowJjName + "/" + n, cc.SpriteFrame, function(t, o) {
                        e[e.nowJjName].getComponent(cc.Sprite).spriteFrame = o,
                        i.children[0].active = !0,
                        e.date.use = n
                    }),
                    utils.setData("jj", JSON.stringify(e.jjData)),
                    cc.log("\u66f4\u6362jj:", JSON.stringify(e.jjData))
                };
                i.children[2].active ? i.children[2].children[0].active ? utils.getData("jb") >= 200 ? (utils.setData("jb", utils.getData("jb") - 200),
                this.startViewComp.initJb(),
                o()) : cc.resources.load("win/jblb_win", cc.Prefab, function(t, i) {
                    e.node.addChild(cc.instantiate(i))
                }) : cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME ? lwsdk.shareOrVideo({
                    buttonKey: "XJJHG-TY",
                    success: function() {
                        o(),
                        utils.resumeMusic()
                    },
                    fail: function() {
                        utils.resumeMusic()
                    }
                }) : cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || s.oppoSdk.showVideo(function(t) {
                    t.isEnded && o()
                }) : o()
            }
            ,
            e.prototype.onDisable = function() {}
            ,
            e.prototype.closeBtn = function() {
                this.node.destroy()
            }
            ,
            e.prototype.onDestroy = function() {}
            ,
            _([c(cc.Node)], e.prototype, "itemPar", void 0),
            _([c(cc.Node)], e.prototype, "jjPar", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../oppoSdk": "oppoSdk"
    }],
    gameView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b9028T+xXVL/IIHTz8veyLj", "gameView");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../syyx_sdk/controller/ad_banner")
          , a = t("../../syyx_sdk/syyx_sdk_api")
          , r = t("../oppoSdk")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.passParent = null,
                e.mask = null,
                e.player = null,
                e.wireParent = null,
                e.uiParent = null,
                e.passStr = null,
                e.set_win = null,
                e.jbhq_win = null,
                e.num = 0,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                cc.sys.platform == cc.sys.WECHAT_GAME && (lwsdk.getButtonVisible("XJJHG-BX1") && !utils.isZLYC ? adc.showBXOrHz(0) : adc.showBanner()),
                utils.isZLYC = !1,
                this.passStr.string = utils.getData("pass") + 1 + "",
                this.passNum = utils.getData("pass") % utils.pass.length,
                utils.overPassNum = this.passNum + 1,
                this.passParent.addChild(cc.instantiate(utils.pass[this.passNum])),
                a.syyx_sdk_api.send_chapter_event(this.passNum + 1),
                r.oppoSdk.load_jsys(),
                this.passComp = this.passParent.children[0].getComponent("pass"),
                this.player.position = this.passComp.pos[this.passComp.passNum],
                this.node.width = utils.phoneSize.width,
                this.node.height = utils.phoneSize.height,
                this.node.on("winner", this.showWinView, this),
                this.node.on("lose", this.showLoseView, this),
                this.node.on("next", this.nextPass, this),
                lpComp.startTape()
            }
            ,
            e.prototype.showEndView = function(t) {
                lpComp.stopTape(),
                utils.isWinner = t,
                a.syyx_sdk_api.send_chapter_event(this.passNum + 1, t),
                this.scheduleOnce(function() {
                    if (cc.sys.platform == cc.sys.WECHAT_GAME)
                        lwsdk.getButtonVisible("XJJHG-QPHZ") ? adc.showBXOrHz(2) : lwsdk.getButtonVisible("XJJHG-BX2") && adc.showBXOrHz(1);
                    else {
                        if (!(cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || utils.isJSYSErr) && s.ad_banner.can_show_first)
                            return void (t ? utils.viewLayer.addChild(cc.instantiate(utils.view[5])) : utils.viewLayer.addChild(cc.instantiate(utils.view[4])));
                        if (cc.sys.platform == cc.sys.BYTEDANCE_GAME && t)
                            return utils.viewLayer.addChild(cc.instantiate(utils.view[6]))
                    }
                    t ? utils.viewLayer.addChild(cc.instantiate(utils.view[3])) : utils.viewLayer.addChild(cc.instantiate(utils.view[2]))
                }, 2),
                cc.director.getScene().off("gameStart"),
                this.offEvent()
            }
            ,
            e.prototype.showLoseView = function(t) {
                cc.log("\u63a5\u53d7lose"),
                utils.playEffect(utils.sound[3]),
                t.stopPropagation(),
                this.showEndView(!1)
            }
            ,
            e.prototype.showWinView = function(t) {
                cc.log("\u63a5\u53d7win"),
                utils.playEffect(utils.sound[2]),
                t.stopPropagation(),
                this.showEndView(!0),
                utils.setData("pass", (utils.getData("pass") + 1) % utils.pass.length),
                utils.getData("pass") > utils.getData("MaxPass") && utils.setData("MaxPass", utils.getData("pass"))
            }
            ,
            e.prototype.nextPass = function(t) {
                var e = this;
                cc.log("\u5c0f\u5173\u5361\uff01\uff01\uff01", this.passNum),
                t.stopPropagation(),
                cc.tween(this.mask).to(.3, {
                    opacity: 255
                }).call(function() {
                    e.offEvent(),
                    e.passComp.nextPass(),
                    e.player.position = e.passComp.pos[e.passComp.passNum],
                    e.wireParent.destroyAllChildren(),
                    e.player.scaleX = 1,
                    e.player.getComponent("player").speed = 3,
                    e.scheduleOnce(function() {
                        e.node.getComponent("drawWire").addGraphicsNode()
                    })
                }).to(.3, {
                    opacity: 0
                }).call(function() {
                    e.node.getComponent("drawWire").onEvent(),
                    e.uiParent.children[1].active = !0
                }).start()
            }
            ,
            e.prototype.offEvent = function() {
                this.node.off(cc.Node.EventType.TOUCH_START),
                this.node.off(cc.Node.EventType.TOUCH_MOVE),
                this.node.off(cc.Node.EventType.TOUCH_END),
                this.node.off(cc.Node.EventType.TOUCH_CANCEL)
            }
            ,
            e.prototype.btn_tap = function(t) {
                "setWin" == t.currentTarget.name ? this.node.addChild(cc.instantiate(this.set_win)) : "tipBtn" == t.currentTarget.name && (utils.playEffect(utils.sound[1]),
                this.isTip(t.currentTarget))
            }
            ,
            e.prototype.tipBtn = function() {
                for (var t = this.passParent.children[0], e = 0; e < t.childrenCount; e++)
                    if (t.children[e].active) {
                        this.tipMag = t.children[e].children[t.children[e].childrenCount - 1],
                        this.tipMag.active = !0;
                        break
                    }
            }
            ,
            e.prototype.isTip = function(t) {
                utils.getData("jb") >= 20 ? (this.tipBtn(),
                utils.setData("jb", utils.getData("jb") - 20),
                t.active = !1) : this.node.addChild(cc.instantiate(this.jbhq_win))
            }
            ,
            _([d(cc.Node)], e.prototype, "passParent", void 0),
            _([d(cc.Node)], e.prototype, "mask", void 0),
            _([d(cc.Node)], e.prototype, "player", void 0),
            _([d(cc.Node)], e.prototype, "wireParent", void 0),
            _([d(cc.Node)], e.prototype, "uiParent", void 0),
            _([d(cc.Label)], e.prototype, "passStr", void 0),
            _([d(cc.Prefab)], e.prototype, "set_win", void 0),
            _([d(cc.Prefab)], e.prototype, "jbhq_win", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../syyx_sdk/controller/ad_banner": "ad_banner",
        "../../syyx_sdk/syyx_sdk_api": "syyx_sdk_api",
        "../oppoSdk": "oppoSdk"
    }],
    gate: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b6c48BmiuFE2rCT42oeD/gW", "gate");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.door = null,
                e.isColl = !1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {}
            ,
            e.prototype.onBeginContact = function() {
                this.isColl || (this.isColl = !0,
                cc.tween(this.door).by(.3, {
                    y: -400
                }).start(),
                cc.tween(this.node).by(.2, {
                    y: -25
                }).start())
            }
            ,
            _([r(cc.Node)], e.prototype, "door", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    gear: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d5183NekZFAQq9S5qlIR6Qr", "gear");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.start = function() {}
            ,
            e.prototype.update = function() {
                this.node.children[0].angle -= 8
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    getTl: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b70082lhZROoasFiXpjqUxo", "getTl");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.tlStr = null,
                e.timeStr = null,
                e.maxTl = 6,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (this.maxTl = 15),
                this.mydate = new Date,
                utils.getData("tlTime") || utils.setData("tlTime", this.mydate.getTime()),
                this.init()
            }
            ,
            e.prototype.init = function() {
                var t = this;
                if (Number(this.tlStr.string) >= this.maxTl)
                    this.timeStr.string = "MAX";
                else {
                    var e = Math.floor((this.mydate.getTime() - utils.getData("tlTime")) / 1e3)
                      , i = Math.floor(e / 300)
                      , n = utils.getData("tl") + i >= this.maxTl ? this.maxTl : utils.getData("tl") + i;
                    if (utils.setData("tl", n),
                    this.tlStr.string = utils.getData("tl"),
                    i && utils.setData("tlTime", this.mydate.getTime()),
                    console.log("tlnum=", i, e, this.mydate.getTime(), utils.getData("tlTime")),
                    utils.getData("tl") >= this.maxTl)
                        this.timeStr.string = "MAX";
                    else {
                        var o = 300 - (e - 300 * i);
                        console.log("tamp=", o),
                        this.timeStr.string = Math.floor(o / 60) + ":" + o % 60,
                        this.schedule(function() {
                            if (--o % 60 < 10 ? t.timeStr.string = Math.floor(o / 60) + ":0" + o % 60 : (cc.log("timeStr:", o % 60),
                            t.timeStr.string = Math.floor(o / 60) + ":" + o % 60),
                            0 == Math.floor(o / 60) && o % 60 == 0) {
                                utils.setData("tl", utils.getData("tl") + 1),
                                t.tlStr.string = utils.getData("tl");
                                var e = new Date;
                                utils.setData("tlTime", e.getTime()),
                                utils.getData("tl") >= t.maxTl ? (t.timeStr.string = "MAX",
                                t.unscheduleAllCallbacks()) : o = 300
                            }
                        }, 1)
                    }
                }
            }
            ,
            e.prototype.onDestroy = function() {}
            ,
            _([r(cc.Label)], e.prototype, "tlStr", void 0),
            _([r(cc.Label)], e.prototype, "timeStr", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    ggsk: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e62c67EtFJIyolhTO9wAXqM", "ggsk");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isSB = !1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {}
            ,
            e.prototype.btn_tap = function(t) {
                "sjbf_btn" == t.currentTarget.name ? this.shareViedo() : "sblq_btn" == t.currentTarget.name ? this.shareViedo() : "close_btn" == t.currentTarget.name ? this.close_win() : "xyyx_btn" == t.currentTarget.name ? (this.shareViedo(),
                this.close_win()) : "get_btn" == t.currentTarget.name && (t.currentTarget.children[0].active ? (this.node.children[6].active = !0,
                t.currentTarget.children[0].active = !1) : (this.node.children[6].active = !1,
                t.currentTarget.children[0].active = !0))
            }
            ,
            e.prototype.shareViedo = function() {
                var t = this;
                lpComp.tapeShare(function() {
                    t.close_win()
                })
            }
            ,
            e.prototype.sblq = function() {
                var t = this;
                lwsdk.shareOrVideo({
                    buttonKey: "XJJHG-TY",
                    success: function() {
                        t.node.children[4].getComponent(cc.Label).string = "\u83b7\u5f97\u91d1\u5e0160",
                        t.node.children[5].active = !1,
                        t.isSB = !0,
                        utils.resumeMusic()
                    },
                    fail: function() {
                        utils.resumeMusic()
                    }
                })
            }
            ,
            e.prototype.close_win = function() {
                this.node.destroy(),
                utils.viewLayer.addChild(cc.instantiate(utils.view[3])),
                utils.setData("jb", utils.getData("jb") + 60)
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    httputils: [function(t, e) {
        "use strict";
        cc._RF.push(e, "c606dYj5MlEIIf1EFZ8BrCH", "httputils");
        var i = {
            http_request_wx: function(t, e, i, n, o, _, s) {
                wx.request({
                    url: e,
                    method: t,
                    data: n,
                    header: i,
                    success: function(t) {
                        console.log(" console.log(res.header);"),
                        console.log(t.s),
                        console.log(t.data),
                        s ? _.call(s, t.statusCode, t.data) : _(t.statusCode, t.data)
                    },
                    fail: function(t) {
                        console.log("http_request_wx fail", t),
                        t && t.statusCode && 304 === t.statusCode ? s ? _.call(s, t.statusCode, t.data) : _(t.statusCode, t.data) : s ? _.call(s, -1, null) : _(-1, null)
                    }
                })
            },
            http_request_qq_new: function(t, e, i, n, o, _, s) {
                qq.request({
                    url: e,
                    method: t,
                    data: n,
                    header: i,
                    success: function(t) {
                        console.log(" console.log(res.header);"),
                        console.log(t.s),
                        console.log(t.data),
                        s ? _.call(s, t.statusCode, t.data) : _(t.statusCode, t.data)
                    },
                    fail: function(t) {
                        console.log("http_request_qq fail", t),
                        t && t.statusCode && 304 === t.statusCode ? s ? _.call(s, t.statusCode, t.data) : _(t.statusCode, t.data) : s ? _.call(s, -1, null) : _(-1, null)
                    }
                })
            },
            http_request_qq: function(t, e, i, n, o, _, s) {
                console.log("http_request_qq:", t, e, i, n),
                BK.Http.request({
                    url: e,
                    method: t,
                    headers: i,
                    body: n,
                    success: function(t) {
                        console.log("statusCode", JSON.stringify(t), t.statusCode),
                        s ? _.call(s, t.statusCode, t.jsonObject()) : _(t.statusCode, t.jsonObject())
                    },
                    fail: function(t) {
                        console.log("http_request_qq fail", t.msg),
                        res && res.statusCode && 304 === res.statusCode ? s ? _.call(s, res.statusCode, res.data) : _(res.statusCode, res.data) : s ? _.call(s, -1, null) : _(-1, null)
                    },
                    complete: function() {
                        console.log("http_request_qq complete")
                    },
                    uploadProgress: function(t, e) {
                        console.log("http_request_qq upload progress", t / e)
                    },
                    downloadProgress: function(t, e) {
                        console.log("http_request_qq download progress", t / e)
                    }
                }),
                console.log("http_request_qq finished:", s)
            },
            http_request: function(t, e, i, n, o, _, s) {
                if (_) {
                    var a = new XMLHttpRequest;
                    if (a.onreadystatechange = function() {
                        var t;
                        4 == a.readyState && (o ? 200 == this.status && ((t = new ByteBuffer(a.response.length,!1)).writeBytes(a.response, "binary"),
                        t = t.view) : t = a.responseText,
                        s ? _.call(s, a.status, t) : _(a.status, t))
                    }
                    ,
                    a.open(t, e, !0),
                    null != i)
                        for (var r in i)
                            a.setRequestHeader(r, i[r]);
                    if (null != o && o && (a.responseType = "arraybuffer"),
                    n) {
                        var c = n;
                        a.send(c)
                    } else
                        a.send()
                }
            },
            decode: function(t) {
                var e, i, n, o, _, s, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r = new Array, c = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length; )
                    (e = a.indexOf(t.charAt(c++)) << 2 | (o = a.indexOf(t.charAt(c++))) >> 4) > 128 && (e -= 256),
                    (i = (15 & o) << 4 | (_ = a.indexOf(t.charAt(c++))) >> 2) > 128 && (i -= 256),
                    (n = (3 & _) << 6 | (s = a.indexOf(t.charAt(c++)))) > 128 && (n -= 256),
                    r.push(e),
                    64 != _ && r.push(i),
                    64 != s && r.push(n);
                return r
            }
        };
        window.HttpUtils = i,
        cc._RF.pop()
    }
    , {}],
    jblb_win: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bf961ZYv01BF67RX10jjCgo", "jblb_win");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.start = function() {
                this.node.zIndex = 10,
                this.startViewComp = this.node.parent.getComponent("startView")
            }
            ,
            e.prototype.btn_tap = function(t) {
                var e = this;
                "close_btn" == t.currentTarget.name ? this.node.destroy() : "mflq_btn" == t.currentTarget.name && YYGGames.showReward(function() {
                    e.shareOrView()
                })
            }
            ,
            e.prototype.shareOrView = function() {
                this.success()
            }
            ,
            e.prototype.success = function() {
                utils.setData("jb", utils.getData("jb") + 100),
                this.startViewComp && this.startViewComp.initJb(),
                this.node.destroy()
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    load: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "10990SphFJCybPi1yz6XrN1", "load");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../syyx_sdk/syyx_sdk_api")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.pro = null,
                e._loadSceneOk = !1,
                e._sdkInitOk = !1,
                e.sceneName = "game",
                e
            }
            return o(e, t),
            e.prototype.onLoad = function() {
                console.log("\u9032\u5165loading\u5834\u666f");
                var t = new Date;
                utils.loadTime = t.getTime(),
                this.initSDKStr(),
                this.loadFb(),
                cc.director.getPhysicsManager().enabled = !0,
                utils.init(),
                cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.platform == cc.sys.BYTEDANCE_GAME ? this.initLWsdk() : cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME ? this.oppoInitSdk() : (cc.sys.platform,
                this._sdkInitOk = !0)
            }
            ,
            e.prototype.start = function() {}
            ,
            e.prototype.initSDKStr = function() {
                cc.sys.platform == cc.sys.WECHAT_GAME ? (this.sdkGame = "xiaojiejiehaige-weixin",
                this.sdkVersion = "1.0.1",
                this.sdkDev_platform = "weixin",
                this.isGameAdIsNeed = !0) : cc.sys.platform == cc.sys.BYTEDANCE_GAME && (this.sdkGame = "bengongnenghuo-toutiao",
                this.sdkVersion = "1.0.0",
                this.sdkDev_platform = "toutiao",
                this.isGameAdIsNeed = !1)
            }
            ,
            e.prototype.initLWsdk = function() {
                var t = this;
                lwsdk.init({
                    debug: !1,
                    game: this.sdkGame,
                    version: this.sdkVersion,
                    dev_platform: this.sdkDev_platform,
                    changeHost: !1,
                    gameAdIsNeed: this.isGameAdIsNeed,
                    preloadBanner: !0,
                    BANNERAD_MAX_COUNT: 3,
                    loginIsNeed: !0,
                    success: function(e) {
                        console.log(e),
                        console.log("\u521d\u59cb\u5316\u6210\u529f"),
                        t._sdkInitOk = !0,
                        lwsdk.onShareAppMessage(),
                        t.openMainScene()
                    },
                    fail: function(e) {
                        console.warn("sdk\u521d\u59cb\u5316\u5931\u8d25\uff0c\u91cd\u8bd5", e),
                        setTimeout(function() {
                            t.initLWsdk()
                        }, 1e3)
                    }
                })
            }
            ,
            e.prototype.oppoInitSdk = function() {
                var t = this;
                s.syyx_sdk_api.init("syyx_configs/syyx_game_init.json", function(e, i) {
                    !0 === e && (console.log("mijia ----- 1"),
                    i.load_init_complete && (console.log("mijia ----- 2"),
                    t._sdkInitOk = !0,
                    t.openMainScene(),
                    s.syyx_sdk_api.login_channel(function(t) {
                        console.log("mijia ----- aaaaaa", t)
                    })),
                    i.load_local_complete,
                    i.load_remote_complete)
                }
                .bind(this))
            }
            ,
            e.prototype.preloadScene = function() {
                var t = this;
                cc.director.preloadScene(t.sceneName, function(e, i) {
                    var n = Number((e / i).toFixed(2));
                    t.pro.fillRange = n,
                    t.pro.node.children[0].x = 600 * n
                }, function(e) {
                    e ? cc.log("=========\u8fdb\u5165\u573a\u666f=\u5931\u8d25=============") : (t._loadSceneOk = !0,
                    t.openMainScene())
                })
            }
            ,
            e.prototype.openMainScene = function() {
                console.log(this._loadSceneOk, this._sdkInitOk),
                this._loadSceneOk && this._sdkInitOk && (cc.log("=========\u8fdb\u5165\u573a\u666f=============="),
                cc.director.loadScene(this.sceneName))
            }
            ,
            e.prototype.loadFb = function() {
                var t = this
                  , e = !1
                  , i = !1
                  , n = !1
                  , o = !1
                  , _ = !1
                  , s = !1;
                console.log("\u5f00\u59cb\u52a0\u8f7d\u5206\u5305"),
                cc.assetManager.loadBundle("res", function(a) {
                    a && console.log("\u52a0\u8f7d\u5206\u5305\u5931\u8d25res", a),
                    console.log("\u52a0\u8f7d\u5206\u5305\u6210\u529f"),
                    (e = !0) && i && n && o && _ && s && t.preloadScene()
                }),
                cc.assetManager.loadBundle("decorate", function(a, r) {
                    a && console.log("\u52a0\u8f7d\u5206\u5305\u5931\u8d25decorate"),
                    console.log("\u52a0\u8f7d\u5206\u5305\u6210\u529f"),
                    utils.decorateBd = r,
                    i = !0,
                    e && i && n && o && _ && s && t.preloadScene()
                }),
                cc.assetManager.loadBundle("Texture", function(a) {
                    a && console.log("\u52a0\u8f7d\u5206\u5305\u5931\u8d25Texture"),
                    console.log("\u52a0\u8f7d\u5206\u5305\u6210\u529f"),
                    n = !0,
                    e && i && n && o && _ && s && t.preloadScene()
                }),
                cc.assetManager.loadBundle("prefab", function(a) {
                    a && console.log("\u52a0\u8f7d\u5206\u5305\u5931\u8d25prefab"),
                    console.log("\u52a0\u8f7d\u5206\u5305\u6210\u529f"),
                    o = !0,
                    e && i && n && o && _ && s && t.preloadScene()
                }),
                cc.assetManager.loadBundle("pass", function(a, r) {
                    a && console.log("\u52a0\u8f7d\u5206\u5305\u5931\u8d25pass", a),
                    utils.passPre = r,
                    _ = !0,
                    e && i && n && o && _ && s && t.preloadScene()
                }),
                cc.assetManager.loadBundle("view", function(a, r) {
                    a && console.log("\u52a0\u8f7d\u5206\u5305\u5931\u8d25view", a),
                    utils.viewPre = r,
                    s = !0,
                    e && i && n && o && _ && s && t.preloadScene()
                })
            }
            ,
            _([c(cc.Sprite)], e.prototype, "pro", void 0),
            _([c], e.prototype, "_loadSceneOk", void 0),
            _([c], e.prototype, "_sdkInitOk", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../../syyx_sdk/syyx_sdk_api": "syyx_sdk_api"
    }],
    md5: [function(t, e) {
        "use strict";
        cc._RF.push(e, "f24edcNJ/RFR63miKZCkVWa", "md5"),
        window.md5 = function(t) {
            function e(t, e, i) {
                return t & e | ~t & i
            }
            function i(t, e, i) {
                return i & t | ~i & e
            }
            function n(t, e, i) {
                return t ^ e ^ i
            }
            function o(t, e, i) {
                return e ^ (t | ~i)
            }
            function _(t, e) {
                return t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]
            }
            function s(t) {
                for (var e = [], i = 0; i < t.length; i++)
                    if (t.charCodeAt(i) <= 127)
                        e.push(t.charCodeAt(i));
                    else
                        for (var n = encodeURIComponent(t.charAt(i)).substr(1).split("%"), o = 0; o < n.length; o++)
                            e.push(parseInt(n[o], 16));
                return e
            }
            function a(t) {
                for (var e = new Array(t.length), i = 0; i < t.length; i++)
                    e[i] = t[i];
                return e
            }
            var r = null
              , c = null;
            function l(t, e) {
                return 4294967295 & t + e
            }
            return "string" == typeof t ? r = s(t) : t.constructor == Array ? 0 === t.length ? r = t : "string" == typeof t[0] ? r = function(t) {
                for (var e = [], i = 0; i < t.length; i++)
                    e = e.concat(s(t[i]));
                return e
            }(t) : "number" == typeof t[0] ? r = t : c = typeof t[0] : "undefined" != typeof ArrayBuffer ? t instanceof ArrayBuffer ? r = a(new Uint8Array(t)) : t instanceof Uint8Array || t instanceof Int8Array ? r = a(t) : t instanceof Uint32Array || t instanceof Int32Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Float32Array || t instanceof Float64Array ? r = a(new Uint8Array(t.buffer)) : c = typeof t : c = typeof t,
            c && alert("MD5 type mismatch, cannot process " + c),
            function() {
                function t(t, e, i, n) {
                    var o = v;
                    v = g,
                    f = l(g = f, function(t) {
                        return t << n & 4294967295 | t >>> 32 - n
                    }(l(h, l(t, l(e, i))))),
                    h = o
                }
                var s = r.length;
                r.push(128);
                var a = r.length % 64;
                if (56 < a) {
                    for (var c = 0; c < 64 - a; c++)
                        r.push(0);
                    a = r.length % 64
                }
                for (c = 0; c < 56 - a; c++)
                    r.push(0);
                r = r.concat(function(t) {
                    for (var e = [], i = 0; i < 8; i++)
                        e.push(255 & t),
                        t >>>= 8;
                    return e
                }(8 * s));
                var d = 1732584193
                  , u = 4023233417
                  , p = 2562383102
                  , y = 271733878
                  , h = 0
                  , f = 0
                  , g = 0
                  , v = 0;
                for (c = 0; c < r.length / 64; c++) {
                    h = d;
                    var m = 64 * c;
                    t(e(f = u, g = p, v = y), 3614090360, _(r, m), 7),
                    t(e(f, g, v), 3905402710, _(r, 4 + m), 12),
                    t(e(f, g, v), 606105819, _(r, 8 + m), 17),
                    t(e(f, g, v), 3250441966, _(r, 12 + m), 22),
                    t(e(f, g, v), 4118548399, _(r, 16 + m), 7),
                    t(e(f, g, v), 1200080426, _(r, 20 + m), 12),
                    t(e(f, g, v), 2821735955, _(r, 24 + m), 17),
                    t(e(f, g, v), 4249261313, _(r, 28 + m), 22),
                    t(e(f, g, v), 1770035416, _(r, 32 + m), 7),
                    t(e(f, g, v), 2336552879, _(r, 36 + m), 12),
                    t(e(f, g, v), 4294925233, _(r, 40 + m), 17),
                    t(e(f, g, v), 2304563134, _(r, 44 + m), 22),
                    t(e(f, g, v), 1804603682, _(r, 48 + m), 7),
                    t(e(f, g, v), 4254626195, _(r, 52 + m), 12),
                    t(e(f, g, v), 2792965006, _(r, 56 + m), 17),
                    t(e(f, g, v), 1236535329, _(r, 60 + m), 22),
                    t(i(f, g, v), 4129170786, _(r, 4 + m), 5),
                    t(i(f, g, v), 3225465664, _(r, 24 + m), 9),
                    t(i(f, g, v), 643717713, _(r, 44 + m), 14),
                    t(i(f, g, v), 3921069994, _(r, m), 20),
                    t(i(f, g, v), 3593408605, _(r, 20 + m), 5),
                    t(i(f, g, v), 38016083, _(r, 40 + m), 9),
                    t(i(f, g, v), 3634488961, _(r, 60 + m), 14),
                    t(i(f, g, v), 3889429448, _(r, 16 + m), 20),
                    t(i(f, g, v), 568446438, _(r, 36 + m), 5),
                    t(i(f, g, v), 3275163606, _(r, 56 + m), 9),
                    t(i(f, g, v), 4107603335, _(r, 12 + m), 14),
                    t(i(f, g, v), 1163531501, _(r, 32 + m), 20),
                    t(i(f, g, v), 2850285829, _(r, 52 + m), 5),
                    t(i(f, g, v), 4243563512, _(r, 8 + m), 9),
                    t(i(f, g, v), 1735328473, _(r, 28 + m), 14),
                    t(i(f, g, v), 2368359562, _(r, 48 + m), 20),
                    t(n(f, g, v), 4294588738, _(r, 20 + m), 4),
                    t(n(f, g, v), 2272392833, _(r, 32 + m), 11),
                    t(n(f, g, v), 1839030562, _(r, 44 + m), 16),
                    t(n(f, g, v), 4259657740, _(r, 56 + m), 23),
                    t(n(f, g, v), 2763975236, _(r, 4 + m), 4),
                    t(n(f, g, v), 1272893353, _(r, 16 + m), 11),
                    t(n(f, g, v), 4139469664, _(r, 28 + m), 16),
                    t(n(f, g, v), 3200236656, _(r, 40 + m), 23),
                    t(n(f, g, v), 681279174, _(r, 52 + m), 4),
                    t(n(f, g, v), 3936430074, _(r, m), 11),
                    t(n(f, g, v), 3572445317, _(r, 12 + m), 16),
                    t(n(f, g, v), 76029189, _(r, 24 + m), 23),
                    t(n(f, g, v), 3654602809, _(r, 36 + m), 4),
                    t(n(f, g, v), 3873151461, _(r, 48 + m), 11),
                    t(n(f, g, v), 530742520, _(r, 60 + m), 16),
                    t(n(f, g, v), 3299628645, _(r, 8 + m), 23),
                    t(o(f, g, v), 4096336452, _(r, m), 6),
                    t(o(f, g, v), 1126891415, _(r, 28 + m), 10),
                    t(o(f, g, v), 2878612391, _(r, 56 + m), 15),
                    t(o(f, g, v), 4237533241, _(r, 20 + m), 21),
                    t(o(f, g, v), 1700485571, _(r, 48 + m), 6),
                    t(o(f, g, v), 2399980690, _(r, 12 + m), 10),
                    t(o(f, g, v), 4293915773, _(r, 40 + m), 15),
                    t(o(f, g, v), 2240044497, _(r, 4 + m), 21),
                    t(o(f, g, v), 1873313359, _(r, 32 + m), 6),
                    t(o(f, g, v), 4264355552, _(r, 60 + m), 10),
                    t(o(f, g, v), 2734768916, _(r, 24 + m), 15),
                    t(o(f, g, v), 1309151649, _(r, 52 + m), 21),
                    t(o(f, g, v), 4149444226, _(r, 16 + m), 6),
                    t(o(f, g, v), 3174756917, _(r, 44 + m), 10),
                    t(o(f, g, v), 718787259, _(r, 8 + m), 15),
                    t(o(f, g, v), 3951481745, _(r, 36 + m), 21),
                    d = l(d, h),
                    u = l(u, f),
                    p = l(p, g),
                    y = l(y, v)
                }
                return function(t, e, i, n) {
                    for (var o, _ = "", s = 0, a = 0, r = 3; 0 <= r; r--)
                        s = 255 & (a = arguments[r]),
                        s <<= 8,
                        s |= 255 & (a >>>= 8),
                        s <<= 8,
                        s |= 255 & (a >>>= 8),
                        s <<= 8,
                        _ += (o = ((s |= a >>>= 8) >>> 0).toString(16),
                        "00000000".substr(0, 8 - o.length) + o);
                    return _
                }(y, p, u, d).toUpperCase()
            }()
        }
        ,
        cc._RF.pop()
    }
    , {}],
    model: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "22f98UduLZP4ogQj7etrn5S", "model");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        );
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.launch_options = i.push_param = i.native_ad_data = i.syyx_app_data = i.syyx_app_data_info = i.syyx_cell = i.syyx_size = i.syyx_view = i.syyx_style = i.syyx_more_game_app_info = i.syyx_app_info = void 0;
        var _ = function() {};
        i.syyx_app_info = _;
        var s = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e
        }(_);
        i.syyx_more_game_app_info = s;
        i.syyx_style = function() {}
        ,
        function(t) {
            t[t.unit = 0] = "unit",
            t[t.left_more_game = 1] = "left_more_game",
            t[t.game_box = 2] = "game_box",
            t[t.guess_like = 3] = "guess_like",
            t[t.right_more_game = 4] = "right_more_game",
            t[t.unit_icon = 5] = "unit_icon",
            t[t.native_banner = 6] = "native_banner",
            t[t.inner_interstitial = 7] = "inner_interstitial",
            t[t.interstitial = 8] = "interstitial",
            t[t.native_icon = 9] = "native_icon",
            t[t.toast = 10] = "toast",
            t[t.activity_turntable = 11] = "activity_turntable",
            t[t.activity_get_reward = 12] = "activity_get_reward",
            t[t.activity_box = 13] = "activity_box",
            t[t.activity_icon = 14] = "activity_icon",
            t[t.activity_enter = 15] = "activity_enter",
            t[t.activity_rare = 16] = "activity_rare",
            t[t.activity_rob = 17] = "activity_rob",
            t[t.activity_bag = 18] = "activity_bag",
            t[t.congratulations = 19] = "congratulations",
            t[t.super_power_icon = 20] = "super_power_icon",
            t[t.super_power = 21] = "super_power"
        }(i.syyx_view || (i.syyx_view = {}));
        i.syyx_size = function() {}
        ;
        i.syyx_cell = function() {}
        ;
        i.syyx_app_data_info = function() {}
        ;
        i.syyx_app_data = function() {}
        ;
        i.native_ad_data = function() {
            this.order = 0
        }
        ;
        i.push_param = function() {}
        ;
        i.launch_options = function() {}
        ,
        cc._RF.pop()
    }
    , {}],
    oppoCPYM: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b511fj1rWhKY62rXvU7dJs/", "oppoCPYM");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../syyx_sdk/configs/syyx_sdk_enum")
          , a = t("../../syyx_sdk/syyx_sdk_api")
          , r = cc._decorator
          , c = r.ccclass
          , l = (r.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.start = function() {
                "startView" == this.node.parent.parent.children[1].children[0].name && (this.startComp = this.node.parent.parent.children[1].children[0].getComponent("startView")),
                this.showCpym()
            }
            ,
            e.prototype.onClick = function() {
                utils.setData("jb", utils.getData("jb") + 20),
                this.startComp && this.startComp.initJb(),
                this.node.destroy()
            }
            ,
            e.prototype.showCpym = function() {
                this.scheduleOnce(function() {
                    a.syyx_sdk_api.show_native_interstitial(s.e_ad_id.native_interstitial_hall, function(t, e) {
                        console.log("igc-----show show_native on_load:" + JSON.stringify(e))
                    }, function() {
                        console.log("igc-----show show_native onShow")
                    }, function() {}, function(t, e) {
                        console.log("igc-----show show_native onError:" + JSON.stringify(e))
                    })
                }, 1)
            }
            ,
            _([c], e)
        }(cc.Component));
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../../syyx_sdk/configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../syyx_sdk/syyx_sdk_api": "syyx_sdk_api"
    }],
    oppoEndView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a5dd7twQNpOi4+oq3Q2wb3Z", "oppoEndView");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../syyx_sdk/configs/syyx_sdk_enum")
          , a = t("../../syyx_sdk/syyx_sdk_api")
          , r = t("../oppoSdk")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.jbStr = null,
                e.hqtl_win = null,
                e.jbNum = 20,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                r.oppoSdk.event_dd_tc(),
                r.oppoSdk.closeBanner(),
                this.show_ysjs()
            }
            ,
            e.prototype.btn_tap = function(t) {
                "fhzy_btn" == t.currentTarget.name ? (this.isAddJb(),
                this.fhzy_btn()) : "cl_btn" == t.currentTarget.name ? this.isJX() : "xyg_btn" == t.currentTarget.name ? (this.isAddJb(),
                this.isJX()) : "djck_btn" == t.currentTarget.name && (a.syyx_sdk_api.click_native_inner_interstitial(),
                a.syyx_sdk_api.send_other_event(1, 10021))
            }
            ,
            e.prototype.isJX = function() {
                if (utils.getData("tl") <= 0)
                    return this.node.addChild(cc.instantiate(this.hqtl_win));
                this.xyg_btn(),
                r.oppoSdk.event_dd_cw()
            }
            ,
            e.prototype.fhzy_btn = function() {
                r.oppoSdk.event_dd_zy();
                for (var t = 0; t < utils.viewLayer.childrenCount; t++)
                    utils.viewLayer.children[t].destroy();
                utils.viewLayer.addChild(cc.instantiate(utils.view[0]))
            }
            ,
            e.prototype.xyg_btn = function() {
                utils.setData("tl", utils.getData("tl") - 1);
                for (var t = 0; t < utils.viewLayer.childrenCount; t++)
                    utils.viewLayer.children[t].destroy();
                utils.viewLayer.addChild(cc.instantiate(utils.view[1]))
            }
            ,
            e.prototype.mffh_btn_wx = function() {
                var t = this;
                r.oppoSdk.showVideo(function(e) {
                    e.isEnded && t.xyg_btn()
                })
            }
            ,
            e.prototype.show_ysjs = function() {
                var t = this;
                if (a.syyx_sdk_api.get_local_native_data(s.e_ad_id.native_inner_interstitial_success)) {
                    console.log("igc-----\u52a0\u8f7d\u5230\u539f\u751f\u6570\u636e  \u53ef\u4ee5\u5c55\u793a");
                    var e = utils.isWinner;
                    a.syyx_sdk_api.show_native_inner_interstitial(s.e_ad_id.native_inner_interstitial_success, this.node.children[4], function() {
                        var t = 1 == e ? s.e_stat_event_id.win_click_native_adv : 0 == e ? s.e_stat_event_id.lose_click_native_adv : s.e_stat_event_id.none;
                        a.syyx_sdk_api.send_other_event(t, s.e_stat_event_type.result)
                    }, function() {
                        t.node.children[1].active = !0,
                        console.log("igc----- \u7ed3\u7b97\u539f\u751f\u5df2\u663e\u793a")
                    }, function() {
                        t.node.children[1].active = !1,
                        console.log("igc----- \u7ed3\u7b97\u539f\u751f\u9690\u85cf")
                    }, !0)
                }
            }
            ,
            e.prototype.onDestroy = function() {
                r.oppoSdk.showBanner(),
                cc.sys.platform == cc.sys.VIVO_GAME && adc.showBXOrHz(4)
            }
            ,
            e.prototype.isAddJb = function() {
                utils.isWinner && utils.setData("jb", utils.getData("jb") + this.jbNum)
            }
            ,
            _([d(cc.Label)], e.prototype, "jbStr", void 0),
            _([d(cc.Prefab)], e.prototype, "hqtl_win", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../syyx_sdk/configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../syyx_sdk/syyx_sdk_api": "syyx_sdk_api",
        "../oppoSdk": "oppoSdk"
    }],
    oppoSdk: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "11b5bGJUStI869JN5tF4wBE", "oppoSdk"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.oppoSdk = void 0;
        var n = t("../syyx_sdk/configs/syyx_sdk_enum")
          , o = t("../syyx_sdk/controller/syyx_adv_manager")
          , _ = t("../syyx_sdk/syyx_sdk_api")
          , s = function() {
            function t() {}
            return t.showVideo = function(e) {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || _.syyx_sdk_api.show_video(n.e_ad_id.video_add_diamond, function() {
                    console.log("igc-----show show_video on_load")
                }, function() {
                    cc.sys.platform == cc.sys.VIVO_GAME && utils.pauseMusic(),
                    console.log("igc-----show show_video onShow")
                }, function(t, i) {
                    utils.resumeMusic(),
                    e(i)
                }, function(e, i) {
                    console.log("igc-----show show_video onError:" + JSON.stringify(i)),
                    t.sp_tip()
                })
            }
            ,
            t.sp_tip = function() {
                var t = cc.instantiate(utils.spTip_win);
                t.parent = utils.exportParent,
                cc.tween(t).by(1, {
                    y: 100
                }).call(function() {
                    t.destroy()
                }).start()
            }
            ,
            t.showBanner = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (console.log("\u6253\u5f00banner"),
                _.syyx_sdk_api.show_banner(n.e_ad_id.banner_hall, function() {}, function() {}, function() {}, function() {}))
            }
            ,
            t.closeBanner = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (console.log("\u5173\u95edbanner"),
                _.syyx_sdk_api.hide_banner())
            }
            ,
            t.lobbyEvent = function(t, e, i) {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || _.syyx_sdk_api.send_hall_event(t, e, i)
            }
            ,
            t.show_load_yscp = function() {
                _.syyx_sdk_api.show_native_interstitial(n.e_ad_id.native_interstitial_hall, function(t, e) {
                    console.log("igc-----show show_native on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_native onShow")
                }, function() {}, function(t, e) {
                    console.log("igc-----show show_native onError:" + JSON.stringify(e))
                })
            }
            ,
            t.load_jsys = function() {
                utils.isJSYSErr = !1,
                _.syyx_sdk_api.preload_native_inner_interstitial(n.e_ad_id.native_inner_interstitial_success, function(t, e) {
                    console.log("igc-----show show_native on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("igc-----show show_native onShow")
                }, function() {}, function(t, e) {
                    utils.isJSYSErr = !0,
                    console.log("igc-----show show_native onError:" + JSON.stringify(e))
                })
            }
            ,
            t.close_native_interstitial = function() {
                _.syyx_sdk_api.hide_native_interstitial(),
                _.syyx_sdk_api.hide_native_inner_interstitial()
            }
            ,
            t.event_dd_tc = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (utils.isWinner ? _.syyx_sdk_api.send_settlement_event(1, utils.overPassNum) : _.syyx_sdk_api.send_settlement_event(6, utils.overPassNum))
            }
            ,
            t.event_dd_zy = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (utils.isWinner ? _.syyx_sdk_api.send_settlement_event(2, utils.overPassNum) : _.syyx_sdk_api.send_settlement_event(7, utils.overPassNum))
            }
            ,
            t.event_dd_cw = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (utils.isWinner ? _.syyx_sdk_api.send_settlement_event(3, utils.overPassNum) : _.syyx_sdk_api.send_settlement_event(8, utils.overPassNum))
            }
            ,
            t.show_banner_box = function() {
                cc.sys.platform != cc.sys.OPPO_GAME || qg.getSystemInfoSync().platformVersionCode < 1076 || (utils.banner_box || t.create_banner_box(!0),
                utils.banner_box.show())
            }
            ,
            t.close_oppo_box = function() {
                cc.sys.platform != cc.sys.OPPO_GAME || qg.getSystemInfoSync().platformVersionCode < 1076 || utils.banner_box.hide()
            }
            ,
            t.create_banner_box = function(t) {
                void 0 === t && (t = !1),
                cc.sys.platform == cc.sys.OPPO_GAME && (qg.getSystemInfoSync().platformVersionCode >= 1076 ? (utils.banner_box = qg.createGameBannerAd({
                    adUnitId: o.syyx_adv_manager.get_channel_ad_id(n.e_ad_id.game_banner_box)
                }),
                t && utils.banner_box.show()) : console.log("\u5feb\u5e94\u7528\u5e73\u53f0\u7248\u672c\u53f7\u4f4e\u4e8e1076\uff0c\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API"))
            }
            ,
            t.create_sudoku_box = function(e) {
                void 0 === e && (e = !1),
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || (qg.getSystemInfoSync().platformVersionCode >= 1076 ? (utils.sudoku_box = qg.createGamePortalAd({
                    adUnitId: o.syyx_adv_manager.get_channel_ad_id(n.e_ad_id.game_portal_box)
                }),
                utils.sudoku_box.load().then(function() {
                    e && utils.sudoku_box.show(),
                    console.log("\u52a0\u8f7d\u4e5d\u5bab\u683c\u6210\u529f")
                }).catch(function(t) {
                    console.log("\u52a0\u8f7d\u4e5d\u5bab\u683c\u5931\u8d25:" + t.errCode + "," + t.errMsg)
                }),
                utils.sudoku_box.onClose(function() {
                    t.showBanner(),
                    console.log("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u5173\u95ed")
                })) : console.log("\u5feb\u5e94\u7528\u5e73\u53f0\u7248\u672c\u53f7\u4f4e\u4e8e1076\uff0c\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API"))
            }
            ,
            t.show_sudoku_box = function() {
                if (cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME) {
                    if (!utils.sudoku_box)
                        return t.create_sudoku_box(!0);
                    console.log("utils.sudoku_box=", utils.sudoku_box),
                    utils.sudoku_box.show().then(function() {
                        t.closeBanner(),
                        console.log("\u663e\u793a\u6210\u529f")
                    }).catch(function(e) {
                        console.log("\u663e\u793a\u5931\u8d25:" + e.errCode + "," + e.errMsg),
                        t.sp_tip()
                    })
                }
            }
            ,
            t.close_sudoku_box = function() {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || utils.sudoku_box.hide()
            }
            ,
            t.isWinLogo = function(e) {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || qg.hasShortcutInstalled({
                    success: function(i) {
                        0 == i && (e.active = !0,
                        cc.sys.platform == cc.sys.OPPO_GAME && (utils.isOnceOpenStartView ? (t.create_win_logo(e),
                        _.syyx_sdk_api.send_other_event(1, 10020)) : utils.isOnceOpenStartView = !0))
                    },
                    fail: function() {},
                    complete: function() {}
                })
            }
            ,
            t.create_win_logo = function(t) {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || qg.installShortcut({
                    success: function() {
                        t.active = !1,
                        _.syyx_sdk_api.send_other_event(3, 10020)
                    },
                    fail: function() {
                        _.syyx_sdk_api.send_other_event(4, 10020)
                    },
                    complete: function() {}
                })
            }
            ,
            t.show_portal_box = function() {
                _.syyx_sdk_api.show_game_portal_box(n.e_ad_id.game_portal_box, function(t, e) {
                    console.log("igc-----show\xa0show_portal_box\xa0on_load:" + JSON.stringify(e))
                }, function() {
                    console.log("\u5173\u95edbanner"),
                    _.syyx_sdk_api.hide_banner(),
                    console.log("igc-----show\xa0show_portal_box\xa0onShow")
                }, function() {
                    console.log("\u663e\u793abanner"),
                    _.syyx_sdk_api.show_banner(n.e_ad_id.banner_hall, function() {}, function() {}, function() {}, function() {})
                }, function(e, i) {
                    t.sp_tip(),
                    console.log("igc-----show\xa0show_portal_box\xa0onError:" + JSON.stringify(i))
                })
            }
            ,
            t
        }();
        i.oppoSdk = s,
        cc._RF.pop()
    }
    , {
        "../syyx_sdk/configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../syyx_sdk/controller/syyx_adv_manager": "syyx_adv_manager",
        "../syyx_sdk/syyx_sdk_api": "syyx_sdk_api"
    }],
    pass: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f8237a1lnFJ5IyMr1+4FoN1", "pass");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.pos = [],
                e.passNum = 0,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                this.passNum = 0
            }
            ,
            e.prototype.nextPass = function() {
                this.node.children[this.passNum].active = !1,
                this.passNum++,
                this.node.children[this.passNum].active = !0
            }
            ,
            _([r([cc.Vec3])], e.prototype, "pos", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    pen: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9decf85hQ9BpJf6wfZ/IJo4", "pen");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            e.prototype.start = function() {}
            ,
            e.prototype.onBeginContact = function() {
                this.node.dispatchEvent(new cc.Event.EventCustom("isColl",!0))
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    player: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d9fadc6TLROKJ9fNxbnjNCs", "player");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.rb = null,
                e.ation = null,
                e.isMove = !1,
                e.collObj = null,
                e.collNum = 0,
                e.speed = 3,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                cc.director.getScene().on("gameStart", this.gameStart, this)
            }
            ,
            e.prototype.gameStart = function() {
                var t = this;
                this.isOver(),
                this.isMove || (this.scheduleOnce(function() {
                    t.openComp(),
                    t.rb.type = 2,
                    t.isMove = !0,
                    t.ation.play("walk")
                }),
                this.unschedule(this.over),
                this.scheduleOnce(this.over, 10))
            }
            ,
            e.prototype.onBeginContact = function(t, e, i) {
                var n = this
                  , o = i.node;
                3 == e.tag && "pen" == o.group && this.collObj != o && this.scheduleOnce(function() {
                    n.node.y += 4,
                    n.collObj = o
                }),
                "mkf_1" == o.name && this.isMove ? (o.destroy(),
                this.closeComp(),
                this.isMove = !1,
                this.node.dispatchEvent(new cc.Event.EventCustom("winner",!0)),
                this.scheduleOnce(function() {
                    n.rb.type = 0
                }),
                this.ation.play("\u62ff\u8bdd\u7b52"),
                this.unschedule(this.over)) : "mkf_2" == o.name && this.isMove && (this.closeComp(),
                this.isMove = !1,
                this.scheduleOnce(function() {
                    n.rb.type = 0,
                    n.node.dispatchEvent(new cc.Event.EventCustom("next",!0)),
                    n.ation.play("\u5f85\u673a", .4)
                }),
                this.unschedule(this.over)),
                "barrier" == o.group && (cc.log(t.getManifold()),
                this.isMove = !1,
                this.closeComp(),
                this.scheduleOnce(function() {
                    n.rb.type = 0,
                    n.over(),
                    n.ation.play("\u7838\u6b7b")
                }),
                this.unschedule(this.over))
            }
            ,
            e.prototype.closeComp = function() {
                this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1,
                this.node.getComponent(cc.PhysicsPolygonCollider).enabled = !1,
                this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1
            }
            ,
            e.prototype.openComp = function() {
                this.node.getComponent(cc.PhysicsBoxCollider).enabled = !0,
                this.node.getComponent(cc.PhysicsPolygonCollider).enabled = !0,
                this.node.getComponent(cc.PhysicsCircleCollider).enabled = !0
            }
            ,
            e.prototype.over = function() {
                this.node.dispatchEvent(new cc.Event.EventCustom("lose",!0))
            }
            ,
            e.prototype.isOver = function() {
                this.unschedule(this.over),
                this.scheduleOnce(this.over, 5)
            }
            ,
            e.prototype.update = function() {
                this.isMove && (this.node.x += this.speed)
            }
            ,
            _([r(cc.RigidBody)], e.prototype, "rb", void 0),
            _([r(cc.Animation)], e.prototype, "ation", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    qd_win: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "21f6eFg2AtD6pYe/FwhN1fU", "qd_win");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemPar = null,
                e.btn_ui = null,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                cc.sys.platform == cc.sys.WECHAT_GAME && adc.showBanner(),
                this.startViewComp = this.node.parent.getComponent("startView"),
                console.log(utils.date, utils.getData("qdDate"), utils.date != utils.getData("qdDate")),
                utils.date != utils.getData("qdDate") && (this.btn_ui.active = !0),
                this.init(),
                this.node.zIndex = 99
            }
            ,
            e.prototype.init = function() {
                for (var t = 0; t < utils.getData("qd") % 7; t++) {
                    var e = this.itemPar.children[t];
                    e.children[0].active = !0,
                    e.children[1].active = !0,
                    e.children[5].active = !0
                }
                if (this.btn_ui.active) {
                    var i = this.itemPar.children[utils.getData("qd") % 7];
                    i.children[0].active = !0,
                    i.children[1].active = !0,
                    cc.tween(i.children[1]).repeatForever(cc.tween().by(2.5, {
                        angle: 360
                    })).start(),
                    cc.tween(i.children[2]).repeatForever(cc.tween().by(.5, {
                        scale: .2
                    }).by(.5, {
                        scale: -.2
                    })).start()
                }
            }
            ,
            e.prototype.btn_tap = function(t) {
                var e = this;
                "sblq_btn" == t.currentTarget.name ? YYGGames.showReward(function() {
                    e.getGold(!0)
                }) : "zjlq_btn" == t.currentTarget.name ?  YYGGames.showInterstitial(function() {
                    e.getGold()
                }) : "close_btn" == t.currentTarget.name && this.node.destroy()
            }
            ,
            e.prototype.getGold = function(t) {
                void 0 === t && (t = !1);
                var e = utils.getData("qd") % 7
                  , i = this.itemPar.children[e]
                  , n = i.children[4].getComponent(cc.Label);
                t ? utils.setData("jb", utils.getData("jb") + 2 * Number(n.string)) : utils.setData("jb", utils.getData("jb") + Number(n.string)),
                this.btn_ui.active = !1,
                this.startViewComp.initJb(),
                utils.setData("qd", utils.getData("qd") + 1),
                utils.setData("qdDate", utils.date),
                i.children[5].active = !0,
                i.children[1].stopAllActions(),
                i.children[2].stopAllActions(),
                i.children[2].scale = 1
            }
            ,
            e.prototype.onDestroy = function() {
                utils.date != utils.getData("today") && (utils.setData("today", utils.date),
                cc.sys.platform == cc.sys.WECHAT_GAME && lwsdk.getButtonVisible("XJJHG-QLSP") && lwsdk.shareOrVideo({
                    buttonKey: "XJJHG-QLSP",
                    success: function() {
                        utils.resumeMusic()
                    },
                    fail: function() {
                        utils.resumeMusic()
                    }
                })),
                cc.sys.platform == cc.sys.WECHAT_GAME && adc.closeBanner()
            }
            ,
            _([r(cc.Node)], e.prototype, "itemPar", void 0),
            _([r(cc.Node)], e.prototype, "btn_ui", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    qiu: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "50bec5kWelAI6IzOZTdboX0", "qiu");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.movePos = cc.v2(0, 0),
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                cc.director.getScene().once("gameStart", this.playMoveBy, this)
            }
            ,
            e.prototype.playMoveBy = function() {
                var t = this;
                this.scheduleOnce(function() {
                    if ("qiu_1" == t.node.name)
                        for (var e = 0; e < t.node.childrenCount; e++)
                            t.node.children[e].getComponent(cc.RigidBody).type = 2;
                    else
                        t.node.getComponent(cc.RigidBody).type = 2
                })
            }
            ,
            e.prototype.update = function() {
                this.movePos.y && 2 == this.node.children[0].getComponent(cc.RigidBody).type && this.node.children[0].y <= this.movePos.y && (this.node.children[0].getComponent(cc.RigidBody).type = 0,
                console.log("aaaaa"))
            }
            ,
            _([r], e.prototype, "movePos", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    qphz: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f1070TU4AFBFomIk2Q1vcWd", "qphz");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = t("../../LW-Plugins/scripts/effects/LWEffects")
          , l = t("../../LW-Plugins/scripts/modules/moduleBase/LWcommonMain")
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.topPar = null,
                e.item1 = null,
                e.item = null,
                e.container = null,
                e.scrollView = null,
                e._splitLines = 3,
                e._scrollReverseY = !1,
                e._index = 0,
                e._flowId = 4,
                e.topItemNum = 0,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                var t = this;
                this.scheduleOnce(function() {
                    t.init(),
                    t.initTop(),
                    t.schedule(function() {
                        return t.refreshTopItem()
                    }, 3),
                    t.initBelow(),
                    adc.showBanner(),
                    t.container.children[0].getComponent("LWitem").onItemClick(),
                    t.scheduleOnce(function() {
                        t.node.children[4].active = !0
                    }, 3)
                })
            }
            ,
            e.prototype.init = function() {
                this.contenty = this._autoScrollX ? this.scrollView.node.getChildByName("view").children[0].x : this.scrollView.node.getChildByName("view").children[0].y,
                this.spacingY = this.scrollView.node.getChildByName("view").children[0].getComponent(cc.Layout).spacingY,
                this._containerTop = this.scrollView.node.getChildByName("view").children[0].getComponent(cc.Layout).paddingTop,
                adc.showHYRWGD(this.node, cc.winSize.height / 2 - 90 - 88),
                this.adData = lwsdk.getAdDataToShow({
                    positionKey: "XJJHG-QPHZ",
                    showCount: 0,
                    index: this._index
                }),
                console.log(this.adData),
                this._index = this.adData.index
            }
            ,
            e.prototype.initTop = function() {
                for (var t = 0; t < 8; t++) {
                    var e = cc.instantiate(this.item1);
                    this.topPar.addChild(e);
                    var i = e.getComponent("LWitem");
                    i.init({
                        itemData: this.adData.data[this.topItemNum % this.adData.data.length],
                        flowId: this._flowId
                    }),
                    i.playShakeAnimation(),
                    this.topItemNum++
                }
            }
            ,
            e.prototype.refreshTopItem = function() {
                for (var t = 0; t < 8; t++)
                    this.topPar.children[t].getComponent("LWitem").init({
                        itemData: this.adData.data[this.topItemNum % this.adData.data.length],
                        flowId: this._flowId
                    }),
                    this.topItemNum++
            }
            ,
            e.prototype.initBelow = function() {
                for (var t in this.adData.data) {
                    var e = l.default.getItemNode(this);
                    e.getComponent("LWitem").init({
                        itemData: this.adData.data[t],
                        flowId: this._flowId
                    }),
                    this.container.addChild(e)
                }
            }
            ,
            e.prototype.scrollToTop = function() {
                this._scrollReverseY = !1
            }
            ,
            e.prototype.scrollToBottom = function() {
                this._scrollReverseY = !0
            }
            ,
            e.prototype.onScrolling = function() {
                var t = this.scrollView.node.getChildByName("view").children[0].children[0].height
                  , e = Math.ceil(this.adData.data.length / 3) * t + (Math.ceil(this.adData.data.length / 3) - 1) * this.spacingY - this.contenty + this._containerTop;
                console.log(this.scrollView.node.getChildByName("view").children[0].y, this.scrollView.node.getChildByName("view").children[0].height, t, e)
            }
            ,
            e.prototype.update = function(t) {
                c.default.autoScrollY(t, this)
            }
            ,
            e.prototype.btn_tap = function(t) {
                "close_btn" != t.currentTarget.name && "jxyx_btn" != t.currentTarget.name || (this.node.destroy(),
                lwsdk.getButtonVisible("XJJHG-RMHZ") ? adc.showBXOrHz(3) : lwsdk.getButtonVisible("XJJHG-BX2") && adc.showBXOrHz(1))
            }
            ,
            _([r(cc.Node)], e.prototype, "topPar", void 0),
            _([r(cc.Prefab)], e.prototype, "item1", void 0),
            _([r(cc.Prefab)], e.prototype, "item", void 0),
            _([r(cc.Node)], e.prototype, "container", void 0),
            _([r(cc.ScrollView)], e.prototype, "scrollView", void 0),
            _([r({
                serializable: !1
            })], e.prototype, "_splitLines", void 0),
            _([a], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../LW-Plugins/scripts/effects/LWEffects": "LWEffects",
        "../../LW-Plugins/scripts/modules/moduleBase/LWcommonMain": "LWcommonMain"
    }],
    rmhz: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f41da4TIARAepNWNalWNilW", "rmhz");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../LW-Plugins/scripts/effects/LWEffects")
          , a = t("../../LW-Plugins/scripts/modules/moduleBase/LWcommonMain")
          , r = cc._decorator
          , c = r.ccclass
          , l = r.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.topPar = null,
                e.item = null,
                e.container = null,
                e.scrollView = null,
                e._splitLines = 1,
                e._scrollReverseY = !1,
                e._index = 0,
                e._flowId = 4,
                e.topItemNum = 0,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                var t = this;
                this.scheduleOnce(function() {
                    t.init(),
                    t.schedule(function() {
                        return t.initTop()
                    }, 3),
                    t.initTop(!0),
                    t.initBelow(),
                    adc.showBanner(),
                    t.container.children[0].getComponent("LWitem").onItemClick(),
                    t.scheduleOnce(function() {
                        t.node.children[4].active = !0
                    }, 3)
                })
            }
            ,
            e.prototype.init = function() {
                this.contenty = this._autoScrollX ? this.scrollView.node.getChildByName("view").children[0].x : this.scrollView.node.getChildByName("view").children[0].y,
                this.spacingY = this.scrollView.node.getChildByName("view").children[0].getComponent(cc.Layout).spacingY,
                this._containerTop = this.scrollView.node.getChildByName("view").children[0].getComponent(cc.Layout).paddingTop,
                this.adData = lwsdk.getAdDataToShow({
                    positionKey: "XJJHG-RMHZ",
                    showCount: 0,
                    index: this._index
                }),
                console.log(this.adData),
                this._index = this.adData.index
            }
            ,
            e.prototype.initTop = function(t) {
                void 0 === t && (t = !1);
                for (var e = 0; e < 3; e++) {
                    var i = this.topPar.children[e].getComponent("LWitem");
                    i.init({
                        itemData: this.adData.data[this.topItemNum % this.adData.data.length],
                        flowId: this._flowId
                    }),
                    t && i.playShakeAnimation(),
                    this.topItemNum++
                }
            }
            ,
            e.prototype.initBelow = function() {
                for (var t in this.adData.data) {
                    var e = a.default.getItemNode(this);
                    e.getComponent("LWitem").init({
                        itemData: this.adData.data[t],
                        flowId: this._flowId
                    }),
                    e.children[0].getComponent(cc.Label).string = Number(t) + 1,
                    this.container.addChild(e)
                }
            }
            ,
            e.prototype.scrollToTop = function() {
                this._scrollReverseY = !1
            }
            ,
            e.prototype.scrollToBottom = function() {
                this._scrollReverseY = !0
            }
            ,
            e.prototype.onScrolling = function() {
                var t = this.scrollView.node.getChildByName("view").children[0].children[0].height
                  , e = Math.ceil(this.adData.data.length / 3) * t + (Math.ceil(this.adData.data.length / 3) - 1) * this.spacingY - this.contenty + this._containerTop;
                console.log(this.scrollView.node.getChildByName("view").children[0].y, this.scrollView.node.getChildByName("view").children[0].height, t, e)
            }
            ,
            e.prototype.update = function(t) {
                s.default.autoScrollY(t, this)
            }
            ,
            e.prototype.btn_tap = function(t) {
                var e = this;
                "jxyx_btn" == t.currentTarget.name ? a.default.clickRandomGame(this, function() {
                    console.log("\u6210\u529f\u56de\u8c03\u6267\u884c\u3002")
                }, function() {
                    console.log("\u5931\u8d25\u56de\u8c03\u6267\u884c\u3002"),
                    e.node.destroy(),
                    adc.showBXOrHz(2)
                }) : "close_btn" == t.currentTarget.name && (this.node.destroy(),
                lwsdk.getButtonVisible("XJJHG-BX2") && adc.showBXOrHz(1))
            }
            ,
            _([l(cc.Node)], e.prototype, "topPar", void 0),
            _([l(cc.Prefab)], e.prototype, "item", void 0),
            _([l(cc.Node)], e.prototype, "container", void 0),
            _([l(cc.ScrollView)], e.prototype, "scrollView", void 0),
            _([l({
                serializable: !1
            })], e.prototype, "_splitLines", void 0),
            _([c], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../LW-Plugins/scripts/effects/LWEffects": "LWEffects",
        "../../LW-Plugins/scripts/modules/moduleBase/LWcommonMain": "LWcommonMain"
    }],
    setWin: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a88f3jdlp1GR6T+5lRMfaGi", "setWin");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.switchSF = [],
                e.switchBtn = [],
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                this.initYx(),
                this.initYy()
            }
            ,
            e.prototype.btn_tap = function(t) {
                var e = this;
                "kaiguan_yx" == t.currentTarget.name ? (this.negationData("yx"),
                this.initYx()) : "kaiguan_yy" == t.currentTarget.name ? (this.negationData("yy"),
                this.initYy(),
                this.isPlayer()) : "colse_btn" == t.currentTarget.name ? this.node.destroy() : "jxyx_btn" == t.currentTarget.name ?  YYGGames.showInterstitial(function() {
                    e.node.destroy()
                }) : "fhsy_btn" == t.currentTarget.name &&  YYGGames.showInterstitial(function() {
                    e.node.parent.destroy(),
                    utils.viewLayer.addChild(cc.instantiate(utils.view[0]))
                })
            }
            ,
            e.prototype.initYx = function() {
                1 == utils.getData("yx") ? this.switchBtn[0].spriteFrame = this.switchSF[0] : this.switchBtn[0].spriteFrame = this.switchSF[1]
            }
            ,
            e.prototype.initYy = function() {
                1 == utils.getData("yy") ? this.switchBtn[1].spriteFrame = this.switchSF[0] : this.switchBtn[1].spriteFrame = this.switchSF[1]
            }
            ,
            e.prototype.negationData = function(t) {
                1 == utils.getData(t) ? utils.setData(t, 2) : utils.setData(t, 1)
            }
            ,
            e.prototype.isPlayer = function() {
                1 == utils.getData("yy") ? utils.resumeMusic() : utils.pauseMusic()
            }
            ,
            _([r([cc.SpriteFrame])], e.prototype, "switchSF", void 0),
            _([r([cc.Sprite])], e.prototype, "switchBtn", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    spring: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7f315haR8RJrYBuP2N37xjw", "spring");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isColl = !1,
                e
            }
            return o(e, t),
            e.prototype.start = function() {}
            ,
            e.prototype.onBeginContact = function(t, e, i) {
                if (!this.isColl) {
                    this.isColl = !0,
                    cc.tween(this.node).by(.1, {
                        x: 15
                    }).by(.1, {
                        x: -15
                    }).start();
                    var n = i.node;
                    n.getComponent("player").speed = -n.getComponent("player").speed,
                    n.scaleX = -n.scaleX
                }
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    startView: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a9661OjqP9POY9A5Ohk7UU7", "startView");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../syyx_sdk/syyx_sdk_api")
          , a = t("../oppoSdk")
          , r = cc._decorator
          , c = r.ccclass
          , l = r.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.tl = null,
                e.jb = null,
                e.btn_parent = null,
                e.add1 = null,
                e.add2 = null,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                var t = this;
                YYGamesUtil.bodyStyle(720, 1280),
                YYGamesUtil.init({
                    appID: "Draw-2-Save-Puzzle",
                    channel: 5,
                    gamedistributionId: "1cd0fcfa14a24ff294e584575cbae74f",
                    gamemonetizeId: ""
                },
                 function() {
                    utils.openStartViewNum++,
                    t.init(),
                    adc.showInterstitialAd(),
                    a.oppoSdk.lobbyEvent(1),
                    a.oppoSdk.isWinLogo(t.btn_parent.children[5]),
                    cc.sys.platform == cc.sys.OPPO_GAME && qg.getSystemInfoSync().platformVersionCode >= 1076 && (t.btn_parent.children[4].active = !0),
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME && (t.btn_parent.children[6].active = !0),
                    YYGamesUtil.initAd(t.add1.getChildByName("Mask"), t.add2.getChildByName("Mask")),
                    t.add1.active = !1
                    t.add2.active = !1
               
                }, function() {
                    cc.game.pause()
                }, function() {
                    cc.game.resume()
                });
                // YYGamesUtil.init({
                //     appName: "Draw-2-Save-Puzzle", 
                //     cb: function() {


                //         YYGamesUtil.addEventListener(YYGamesUtil.events.beforeShowAd, this, ()=>{ 
                //             1 == Number(cc.sys.localStorage.getItem("yy")) ? cc.audioEngine.pauseMusic() : console.log("--");
                //             cc.audioEngine.stopAllEffects();
                //         });
                //         YYGamesUtil.addEventListener(YYGamesUtil.events.afterShowAd ,this, ()=>{ 
                //             1 == Number(cc.sys.localStorage.getItem("yy")) ? cc.audioEngine.resumeMusic() : console.log("--");
                //         });




                //         //这里主要this指向
                //         YYGamesUtil.addEventListener(YYGamesUtil.events.rewardDismissed, this, () => { YYGamesUtil.showToast("Pls watch the ad completely, so that you can claim your reward"); });

                //         utils.openStartViewNum++,
                //         t.init(),
                //         adc.showInterstitialAd(),
                //         a.oppoSdk.lobbyEvent(1),
                //         a.oppoSdk.isWinLogo(t.btn_parent.children[5]),
                //         cc.sys.platform == cc.sys.OPPO_GAME && qg.getSystemInfoSync().platformVersionCode >= 1076 && (t.btn_parent.children[4].active = !0),
                //         cc.sys.platform == cc.sys.BYTEDANCE_GAME && (t.btn_parent.children[6].active = !0)
                //         t.add1.active = !1
                //         t.add2.active = !1
                //         window.add1 = t.add1
                //         // YYGamesUtil.initAd(t.add1.getChildByName("Mask"), t.add2.getChildByName("Mask")),
                //         // YYGamesUtil.gameLogo()
                //     }
                // });
                // if(window.btn_i){

                //     window.btn_i.active = !0
                // }

                var e = JSON.parse(utils.getData("jj"));
                cc.log("\u5c55\u793ajj:", JSON.stringify(e))
            }
            ,
            e.prototype.init = function() {
                var t = this;
                setTimeout(function() {
                    if (document.createEvent) {
                        var t = document.createEvent("HTMLEvents");
                        t.initEvent("resize", !0, !0),
                        window.dispatchEvent(t)
                    } else
                        document.createEventObject && window.fireEvent("onresize");




                    h5splash.hideLoading()



                }, 1e3)

                // cc.loader.load("6.png", (err, res) => {
                //     if (err) {
                //         console.log('err:', err);
                //         return;
                //     }
                //     const btn_i = new cc.Node();
                //     window.btn_i = btn_i
                //     const sprite = btn_i.addComponent(cc.Sprite);
                //     let canvas = cc.find("Canvas");
                //     canvas.addChild(btn_i);
                //     sprite.spriteFrame = new cc.SpriteFrame(res);
                //     btn_i.setScale(0.7);
                //     btn_i.x = 300;//横屏
                //     btn_i.y = 600;
                //     window["Btn_i"] = btn_i;
                //     btn_i.addComponent(cc.Button);
                //     btn_i.on("click", function () {
                //         YYGamesUtil.navigate();
                //     })
                //     // "MainScene" == cc.director.getScene().name ? btn_i.setScale(0.7) : btn_i.setScale(0);
                // })



                this.initTl(),
                this.initJb(),
                utils.date != utils.getData("today") && cc.resources.load("win/qd_win", cc.Prefab, function(e, i) {
                    t.node.addChild(cc.instantiate(i))
                }),
                cc.sys.platform == cc.sys.WECHAT_GAME && (lwsdk.getButtonVisible("XJJHG-ICON") && (adc.showHYRWGD(this.node, -cc.winSize.height / 2 + 90),
                adc.showXFDD(-300, cc.winSize.height / 2 - 350, this.node),
                adc.showXFDD(300, cc.winSize.height / 2 - 350, this.node)),
                utils.openStartViewNum > 1 ? adc.showRMTJLL() : lwsdk.getButtonVisible("XJJHG-QLSP") && utils.date == utils.getData("today") && lwsdk.shareOrVideo({
                    buttonKey: "XJJHG-QLSP",
                    success: function() {
                        utils.resumeMusic()
                    },
                    fail: function() {
                        utils.resumeMusic()
                    }
                }))
            }
            ,
            e.prototype.btn_tap = function(t) {


                
                var e = this;
                "xg_btn" == t.currentTarget.name ? cc.resources.load("win/switchPass_win", cc.Prefab, function(t, i) {
                    e.node.addChild(cc.instantiate(i))
                }) : "setWin" == t.currentTarget.name ? cc.resources.load("win/ksjmsz_win", cc.Prefab, function(t, i) {
                    e.node.addChild(cc.instantiate(i))
                }) : "tl_btn" == t.currentTarget.name ? cc.resources.load("win/bctl_win", cc.Prefab, function(t, i) {
                    e.node.addChild(cc.instantiate(i))
                }) : "jb_btn" == t.currentTarget.name ? cc.resources.load("win/jblb_win", cc.Prefab, function(t, i) {
                    e.node.addChild(cc.instantiate(i))
                }) :  YYGGames.showInterstitial(function() {
                    
                    "ksyx_btn" == t.currentTarget.name ? e.ksyx_btn() : "jj_btn" == t.currentTarget.name ? cc.resources.load("win/furniture_win", cc.Prefab, function(t, i) {
                        e.node.addChild(cc.instantiate(i))
                    }) : "qd_btn" == t.currentTarget.name ? cc.resources.load("win/qd_win", cc.Prefab, function(t, i) {
                        e.node.addChild(cc.instantiate(i))
                    }) : "cj_btn" == t.currentTarget.name ? cc.resources.load("win/cj_win", cc.Prefab, function(t, i) {
                        e.node.addChild(cc.instantiate(i))
                    }) : "gdhw_btn" == t.currentTarget.name ? a.oppoSdk.show_portal_box() : "tjzm_btn" == t.currentTarget.name ? (s.syyx_sdk_api.send_other_event(2, 10020),
                    a.oppoSdk.create_win_logo(t.currentTarget)) : "cd_btn" == t.currentTarget.name && adc.showBXOrHz(5)
                })
            }
            ,
            e.prototype.ksyx_btn = function() {
                // window.btn_i.active = !1
                var t = this;
                utils.getData("tl") <= 0 ? cc.resources.load("win/bctl_win", cc.Prefab, function(e, i) {
                    t.node.addChild(cc.instantiate(i))
                }) : (a.oppoSdk.lobbyEvent(3, utils.getData("pass") + 1),
                utils.setData("tl", utils.getData("tl") - 1),
                utils.view[1] ? (this.node.destroy(),
                utils.viewLayer.addChild(cc.instantiate(utils.view[1]))) : utils.isLoadGameView = !0)
            }
            ,
            e.prototype.initTl = function() {
                this.tl.string = utils.getData("tl")
            }
            ,
            e.prototype.initJb = function() {
                this.jb.string = utils.getData("jb")
            }
            ,
            e.prototype.onDestroy = function() {}
            ,
            e.prototype.update = function() {
                this.jb.string = utils.getData("jb")
            }
            ,
            _([l(cc.Label)], e.prototype, "tl", void 0),
            _([l(cc.Label)], e.prototype, "jb", void 0),
            _([l(cc.Node)], e.prototype, "btn_parent", void 0),
            _([l(cc.Node)], e.prototype, "add1", void 0),
            _([l(cc.Node)], e.prototype, "add2", void 0),
            _([c], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../syyx_sdk/syyx_sdk_api": "syyx_sdk_api",
        "../oppoSdk": "oppoSdk"
    }],
    switchPass_win: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "aa4dbcbS9BOX6q9MO/780RN", "switchPass_win");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../oppoSdk")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.passParent = null,
                e.passItem = null,
                e.btnItem = null,
                e.yuandian = null,
                e.mag = [],
                e.LevelTxt = null,
                e.itemNum = 0,
                e.nowPage = 0,
                e
            }
            return o(e, t),
            e.prototype.start = function() {
                this.init(),
                this.initBtn(),
                cc.sys.platform == cc.sys.WECHAT_GAME && adc.showBanner(),
                this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this),
                this.node.zIndex = 99
            }
            ,
            e.prototype.init = function() {
                for (var t = 0; t < 3; t++)
                    this.initPassItem(t);
                this.passParent.x = this.node.width / -2
            }
            ,
            e.prototype.btn_tap = function(t) {
                "zuofanye" == t.currentTarget.name ? (this.nowPage--,
                this.move()) : "youfanye" == t.currentTarget.name ? (this.nowPage++,
                this.move()) : "closeBtn" == t.currentTarget.name && this.node.destroy(),
                0 == this.nowPage && (this.LevelTxt.string = "1 - 10"),
                1 == this.nowPage && (this.LevelTxt.string = "11 - 20"),
                2 == this.nowPage && (this.LevelTxt.string = "21 - 30")
            }
            ,
            e.prototype.touchstart = function(t) {
                this.moveStartPos = t.getLocation()
            }
            ,
            e.prototype.touchMove = function(t) {
                var e = t.getLocation().sub(t.getPreviousLocation())
                  , i = this.passParent.x + e.x;
                i < -(this.passParent.width - this.node.width / 2) || i > -375 || (this.passParent.x = i)
            }
            ,
            e.prototype.touchEnd = function(t) {
                var e = t.getLocation().sub(this.moveStartPos);
                e.x <= 300 && e.x >= -300 ? this.move() : e.x >= 300 && 0 != this.nowPage ? (console.log("aaaaaaaaaaaaaaaaaaa"),
                this.nowPage--,
                this.move()) : e.x <= -300 && this.nowPage != this.passParent.childrenCount - 1 && (this.nowPage++,
                this.move())
                0 == this.nowPage && (this.LevelTxt.string = "1 - 10"),
                1 == this.nowPage && (this.LevelTxt.string = "11 - 20"),
                2 == this.nowPage && (this.LevelTxt.string = "21 - 30")
            }
            ,
            e.prototype.initPassItem = function(t) {
                var e = this
                  , i = cc.instantiate(this.passItem);
                this.passParent.addChild(i),
                i.width = this.node.width,
                i.height = this.node.height,
                i.y = 0,
                i.children[1].getComponent(cc.Sprite).spriteFrame = this.mag[this.passParent.childrenCount - 1];
                var n = 0;
                2 == t && (n = 6),
                console.log(t, n);
                for (var o = function() {
                    var t = cc.instantiate(_.btnItem);
                    i.children[0].addChild(t),
                    t.children[2].getComponent(cc.Label).string = _.itemNum + 1 + "";
                    var n = _.itemNum;
                    _.itemNum <= utils.getData("MaxPass") && (_.itemNum <= utils.getData("MaxPass") && (t.children[1].active = !0),
                    t.children[0].active = !0,
                    t.children[0].on(cc.Node.EventType.TOUCH_END, function() {
                         YYGGames.showInterstitial(function() {
                            e.node.parent.destroy(),
                            utils.setData("pass", n),
                            console.log("temp=", n),
                            utils.viewLayer.addChild(cc.instantiate(utils.view[1])),
                            s.oppoSdk.lobbyEvent(2, utils.getData("pass") + 1, "\u9009\u5173\u754c\u9762\u70b9\u51fb")
                        })
                    }, _)),
                    _.itemNum++
                }, _ = this; this.itemNum < 10 * this.passParent.childrenCount; )
                    o()
            }
            ,
            e.prototype.move = function() {
                var t = Math.abs((this.passParent.x + (750 * this.nowPage + 375)) / 5e3);
                cc.tween(this.passParent).to(t, {
                    x: -(750 * this.nowPage + 375)
                }).start(),
                this.initBtn()
            }
            ,
            e.prototype.initBtn = function() {
                0 == this.nowPage ? (this.node.children[2].active = !1,
                this.node.children[3].active = !0) : this.nowPage == this.passParent.childrenCount - 1 ? (this.node.children[2].active = !0,
                this.node.children[3].active = !1) : (this.node.children[2].active = !0,
                this.node.children[3].active = !0)
            }
            ,
            e.prototype.initys = function() {
                for (var t = 0; t < this.yuandian.childrenCount; t++)
                    if (this.yuandian.children[t].children[0].active) {
                        this.yuandian.children[t].children[0].active = !1;
                        break
                    }
                this.yuandian.children[this.nowPage].children[0].active = !0
            }
            ,
            e.prototype.onDestroy = function() {
                cc.sys.platform == cc.sys.WECHAT_GAME && adc.closeBanner()
            }
            ,
            _([c(cc.Node)], e.prototype, "passParent", void 0),
            _([c(cc.Prefab)], e.prototype, "passItem", void 0),
            _([c(cc.Prefab)], e.prototype, "btnItem", void 0),
            _([c(cc.Node)], e.prototype, "yuandian", void 0),
            _([c([cc.SpriteFrame])], e.prototype, "mag", void 0),
            _([c(cc.Label)], e.prototype, "LevelTxt", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../oppoSdk": "oppoSdk"
    }],
    syyx_activity_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d52ddxe5LBCypT01yUPoEbo", "syyx_activity_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_activity_manager = void 0;
        var n = t("../configs/syyx_sdk_enum")
          , o = t("../utils/syyx_sdk_utils")
          , _ = t("./common/syyx_box_manager")
          , s = t("./common/syyx_turntable_manager")
          , a = t("./syyx_manager")
          , r = t("./syyx_rare_treasure_manager")
          , c = t("./syyx_rob_treasure_manager")
          , l = function() {
            function t() {}
            return t.remote_activity_open = function() {
                var t = this.check_activity_open(n.e_activity_type.rare_treasure)
                  , e = this.check_activity_open(n.e_activity_type.rob_treasure)
                  , i = this.check_activity_open(n.e_activity_type.red_packet_rain);
                return t || i || e
            }
            ,
            t.check_activity_open = function(t) {
                var e = a.syyx_manager.get_business_config()
                  , i = !1;
                switch (t) {
                case n.e_activity_type.rare_treasure:
                    e && e.open_rare_treasure && (i = 1 == e.open_rare_treasure.value[0]);
                    break;
                case n.e_activity_type.rob_treasure:
                    e && e.open_rob_treasure && (i = 1 == e.open_rob_treasure.value[0]);
                    break;
                case n.e_activity_type.rob_turntable:
                    e && e.open_turntable_activity && (i = 1 == e.open_turntable_activity.value[0]);
                    break;
                case n.e_activity_type.common_box:
                    e && e.open_box_activity && (i = 1 == e.open_box_activity.value[0]);
                    break;
                case n.e_activity_type.red_packet_rain:
                    e && e.open_red_paper_rain && (i = 1 == e.open_red_paper_rain.value[0])
                }
                return i
            }
            ,
            t.load_activity_config = function() {
                var t = this;
                this.__inited = !0;
                var e = o.syyx_sdk_utils.get_item("syyx_game_num");
                this._game_num = e || 0,
                this.check_activity_open(n.e_activity_type.rare_treasure) ? this._rare_treasure_instance.load_activity_config() : console.log("igc ----- rare treasure activity is close"),
                this.check_activity_open(n.e_activity_type.rob_treasure) ? this._rob_treasure_instance.load_activity_config() : console.log("igc ----- rob treasure activity is close"),
                this.check_activity_open(n.e_activity_type.rob_turntable) ? this._common_item_config || o.syyx_sdk_utils.load_resource(a.syyx_manager.__activity_item_config_path, function(e) {
                    t._common_item_config = igc.igc_resources_utils.parse_csv(e, "item_id"),
                    t._turntable_instance.load_activity_config()
                }) : console.log("igc ----- turntable activity is close"),
                this.check_activity_open(n.e_activity_type.common_box) ? this._common_item_config || o.syyx_sdk_utils.load_resource(a.syyx_manager.__activity_item_config_path, function(e) {
                    t._common_item_config = igc.igc_resources_utils.parse_csv(e, "item_id"),
                    t._box_instance.load_activity_box_config()
                }) : console.log("igc ----- common box activity is close")
            }
            ,
            t.add_game_num = function(t) {
                void 0 === t && (t = void 0);
                var e = o.syyx_sdk_utils.get_item("syyx_game_num");
                0 == this._game_num && (this._game_num = e),
                this._game_num = t || ++this._game_num,
                this._rare_treasure_instance.active_activity(this._game_num),
                this._rob_treasure_instance.active_activity(this._game_num),
                this.save()
            }
            ,
            t.get_active_game_num = function(t) {
                return t == n.e_activity_type.rare_treasure ? this._rare_treasure_instance.get_active_game_num() : t == n.e_activity_type.rob_treasure ? this._rob_treasure_instance.get_active_game_num() : -1
            }
            ,
            t.get_cur_game_num = function() {
                return this._game_num
            }
            ,
            t.get_activity_open = function() {
                return this._func_open[n.e_activity_type.rare_treasure] = this._rare_treasure_instance.check_open(),
                this._func_open[n.e_activity_type.rob_treasure] = this._rob_treasure_instance.check_open(),
                this._func_open[n.e_activity_type.rob_turntable] = this._turntable_instance.check_open(),
                this._func_open[n.e_activity_type.common_box] = this._box_instance.check_open(),
                this._func_open
            }
            ,
            t.show_treasure_congratulations = function(t, e) {
                a.syyx_manager.create_congratulations(function(i) {
                    i.show(t, e)
                })
            }
            ,
            t.show_get_reward = function(t, e) {
                a.syyx_manager.create_activity_get_reward(function(i) {
                    i.show(t, e)
                })
            }
            ,
            t.send_activity_event = function(t, e) {
                void 0 === e && (e = ""),
                a.syyx_manager.send_user_event(t, n.e_activity_event_type.activity, "", "", e + "", "", "", "", "")
            }
            ,
            t.save = function() {
                o.syyx_sdk_utils.set_item("syyx_game_num", this._game_num)
            }
            ,
            t.is_inited = function() {
                return this.__inited
            }
            ,
            t._func_open = {},
            t._game_num = 0,
            t._common_item_config = null,
            t._rare_treasure_instance = new r.syyx_rare_treasure_manager,
            t._rob_treasure_instance = new c.syyx_rob_treasure_manager,
            t._turntable_instance = new s.default,
            t._box_instance = new _.default,
            t.__inited = !1,
            t
        }();
        i.syyx_activity_manager = l,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./common/syyx_box_manager": "syyx_box_manager",
        "./common/syyx_turntable_manager": "syyx_turntable_manager",
        "./syyx_manager": "syyx_manager",
        "./syyx_rare_treasure_manager": "syyx_rare_treasure_manager",
        "./syyx_rob_treasure_manager": "syyx_rob_treasure_manager"
    }],
    syyx_adv_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "391d8UuJb9BBLbfuQ+wHgTj", "syyx_adv_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_adv_manager = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../utils/syyx_sdk_utils")
          , s = t("./ad_banner")
          , a = t("./ad_block")
          , r = t("./ad_native_icon")
          , c = t("./ad_native_inner_interstitial")
          , l = t("./ad_native_interstitial")
          , d = t("./syyx_manager")
          , u = function() {
            function t() {}
            return t.load_adv_config = function() {
                var t = this;
                this.__inited || (this.__inited = !0,
                this.login_timestamp = (new Date).getTime(),
                _.syyx_sdk_utils.load_resource(d.syyx_manager.__adv_config_file_path, function(e) {
                    n.syyx_const.syyx_sdk_publish === n.e_syyx_sdk_publish_type.in ? t._adv_config_data = e : t._adv_config_data = igc.igc_resources_utils.parse_csv(e, "id"),
                    t.__adv_config_inited = !0,
                    console.log("igc----- adv config has loaded", t._adv_config_data),
                    d.syyx_manager.pre_load_game_portal_box(o.e_ad_id.game_portal_box, null, null, null, null),
                    d.syyx_manager.preload_video()
                }, this))
            }
            ,
            t.init_first_banner_cd = function() {
                s.ad_banner.init_first_banner_cd()
            }
            ,
            t.show_banner = function(t, e, i, n, o, _) {
                this.__adv_config_inited && s.ad_banner.show_banner(t, e, i, n, o, _)
            }
            ,
            t.hide_banner = function() {
                this.__adv_config_inited && s.ad_banner.hide_banner()
            }
            ,
            t.show_native_icon = function(t, e, i, n, o, _, s) {
                this.__adv_config_inited && r.ad_native_icon.show_native_icon(t, e, i, n, o, _, s)
            }
            ,
            t.hide_native_icon = function() {
                this.__adv_config_inited && r.ad_native_icon.hide_native_icon()
            }
            ,
            t.show_native_interstitial = function(t, e, i, n, o, _) {
                this.__adv_config_inited && l.ad_native_interstitial.load_native_interstitial(t, e, i, n, o, _)
            }
            ,
            t.preload_native_inner_interstitial = function(t, e, i, n, o, _) {
                this.__adv_config_inited && c.ad_native_inner_interstitial.preload_native_inner_interstitial(t, e, i, n, o, _)
            }
            ,
            t.get_local_native_data = function(t) {
                return t == o.e_ad_id.native_banner ? s.ad_banner.get_native_data() : t == o.e_ad_id.native_inner_interstitial_success ? c.ad_native_inner_interstitial.get_native_data() : t == o.e_ad_id.native_interstitial_hall ? l.ad_native_interstitial.get_native_data() : t == o.e_ad_id.native_icon ? r.ad_native_icon.get_native_data() : void 0
            }
            ,
            t.report_ad_click = function(e, i) {
                var n = t.get_channel_ad_id(e);
                n && "1" != n && "0" != n ? i ? i.state == o.e_ad_native_state.show ? (s.ad_banner.report_ad_click(e, i),
                r.ad_native_icon.report_ad_click(e, i),
                l.ad_native_interstitial.report_ad_click(e, i),
                c.ad_native_inner_interstitial.report_ad_click(e, i)) : console.log("igc----- syyx_adv_mamager report_ad_click native_data state is not e_ad_native_state.show") : console.log("igc----- syyx_adv_mamager report_ad_click native_data is null") : console.log("igc----- syyx_manager report_ad_click ad_id no configure in adv.csv")
            }
            ,
            t.report_ad_show = function(e, i) {
                var n = t.get_channel_ad_id(e);
                n && "1" != n && "0" != n ? i ? (s.ad_banner.report_ad_show(e, i),
                r.ad_native_icon.report_ad_show(e, i),
                l.ad_native_interstitial.report_ad_show(e, i),
                c.ad_native_inner_interstitial.report_ad_show(e, i)) : console.log("igc----- syyx_adv_mamager report_ad_show native_data is null") : console.log("igc----- syyx_manager report_ad_show ad_id no configure in adv.csv")
            }
            ,
            t.get_qq_banner_top_offset = function() {
                var t = d.syyx_manager.get_business_config();
                if (t && t.banner_top_offset && t.banner_top_offset.value) {
                    var e = t.banner_top_offset.value;
                    return e[0] + Math.floor(Math.random() * (e[1] - e[0]))
                }
                return 0
            }
            ,
            t.show_block = function(t, e, i, n, o, _, s) {
                this._block_instance[i] || (this._block_instance[i] = new a.default),
                this.__adv_config_inited && this._block_instance[i].show_block(t, e, i, n, o, _, s)
            }
            ,
            t.hide_block = function(t) {
                this.__adv_config_inited && this._block_instance[t] && this._block_instance[t].hide_block()
            }
            ,
            t.hide_all_block = function() {
                if (this.__adv_config_inited)
                    for (var t in this._adv_config_data)
                        if (this._adv_config_data[t].adv_type == igc.e_ad_type.block) {
                            var e = this._adv_config_data[t].id;
                            this._block_instance[e] && this._block_instance[e].hide_block()
                        }
            }
            ,
            t.check_is_open_oppo_rule = function() {
                var t = d.syyx_manager.get_business_config();
                return !(n.syyx_const.syyx_sdk_channel !== igc.e_channel_type.oppo_qg && n.syyx_const.syyx_sdk_channel !== igc.e_channel_type.vivo_qg || !t || !t.open_oppo_new_rule || 1 != t.open_oppo_new_rule.value[0])
            }
            ,
            t.add_native_show_count = function() {
                this.check_is_open_oppo_rule() && this.cur_native_show_count++
            }
            ,
            t.get_play_game_time = function() {
                return ((new Date).getTime() - this.login_timestamp) / 1e3
            }
            ,
            t.check_is_show_count_limit = function() {
                if (!this.check_is_open_oppo_rule())
                    return !1;
                var e = [60, 2]
                  , i = d.syyx_manager.get_business_config();
                i && i.oppo_native_show_limit && i.oppo_native_show_limit.value && (e = i.oppo_native_show_limit.value);
                var n = this.get_play_game_time()
                  , o = 2;
                return n >= 0 && (o = (Math.floor(n / e[0]) + 1) * e[1]),
                t.cur_native_show_count >= o
            }
            ,
            t.get_oppo_native_cache_max_length = function() {
                var t = 4
                  , e = d.syyx_manager.get_business_config();
                return e && e.oppo_native_cache_length && e.oppo_native_cache_length.value && (t = e.oppo_native_cache_length.value[0]),
                t || 4
            }
            ,
            t.check_native_data_list_is_reprot = function(t) {
                if (t.length > 0)
                    for (var e in t)
                        if (t[e].state != o.e_ad_native_state.show)
                            return !1;
                return !0
            }
            ,
            t.get_latest_native_data = function(t) {
                if (t.length > 0)
                    return t[t.length - 1]
            }
            ,
            t.get_native_data_list_max_order = function(t) {
                var e = 0;
                if (t.length > 0)
                    for (var i in t)
                        t[i].order > e && (e = t[i].order);
                return e || 0
            }
            ,
            t.get_min_order_native_data = function(t) {
                var e = void 0;
                if (t.length > 0)
                    for (var i in t)
                        (!e || t[i].order <= e.order) && (e = t[i]);
                return e
            }
            ,
            t.check_is_click_limit = function(t, e) {
                var i = this
                  , n = !1;
                if (this.native_click_state[t] == o.e_ad_native_click_pro_type.cooling)
                    return console.log("igc----- syyx_adv_manager native_type", t, "is click limit? true!"),
                    !0;
                var _ = e.click_count / e.show_count
                  , s = 10
                  , a = 1
                  , r = 60
                  , c = d.syyx_manager.get_business_config();
                return c && (t == o.e_ad_native_type.native_banner ? (s = c.native_banner_click_pro_limit.value[0],
                a = c.native_banner_click_pro_limit.value[1],
                r = c.native_banner_click_pro_limit.value[2]) : t == o.e_ad_native_type.native_inner_interstitial ? (s = c.native_inner_click_pro_limit.value[0],
                a = c.native_inner_click_pro_limit.value[1],
                r = c.native_inner_click_pro_limit.value[2]) : t == o.e_ad_native_type.native_interstitial && (s = c.native_interstitial_click_pro_limit.value[0],
                a = c.native_interstitial_click_pro_limit.value[1],
                r = c.native_interstitial_click_pro_limit.value[2]),
                e.start_count > 0 && e.start_count % s == 0 && (n = _ >= a)),
                this.native_click_state[t] || (this.native_click_state[t] = o.e_ad_native_click_pro_type.active),
                n && this.native_click_state[t] == o.e_ad_native_click_pro_type.active && (this.native_click_state[t] = o.e_ad_native_click_pro_type.cooling,
                console.log("igc----- syyx_adv_manager run native click limit cool timer!!!", r),
                setTimeout(function() {
                    i.native_click_state[t] = o.e_ad_native_click_pro_type.active,
                    e.start_count = 0
                }, 1e3 * r)),
                console.log("igc----- syyx_adv_manager native_type", t, "is click limit?", n),
                n
            }
            ,
            t.get_channel_ad_id = function(t) {
                if (!this.__adv_config_inited)
                    return "";
                try {
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg)
                        return this._adv_config_data[t].oppo_adv_id;
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg)
                        return this._adv_config_data[t].vivo_adv_id;
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.tt)
                        return this._adv_config_data[t].tt_adv_id;
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.qq)
                        return this._adv_config_data[t].qq_adv_id;
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.wx)
                        return this._adv_config_data[t].wx_adv_id;
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.apk)
                        return this._adv_config_data[t].apk_adv_id;
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web)
                        return "web_ad_id";
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg)
                        return console.log("mijia ----- " + this._adv_config_data[t].hw_adv_id),
                        this._adv_config_data[t].hw_adv_id
                } catch (e) {
                    console.error("adv.csv do not have the ad_id of the ad_pos_id: " + t)
                }
            }
            ,
            t.is_inited = function() {
                return this.__inited
            }
            ,
            t.__adv_config_inited = !1,
            t._block_instance = {},
            t.cur_native_show_count = 0,
            t.login_timestamp = 0,
            t.__inited = !1,
            t.native_click_state = {},
            t
        }();
        i.syyx_adv_manager = u,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_banner": "ad_banner",
        "./ad_block": "ad_block",
        "./ad_native_icon": "ad_native_icon",
        "./ad_native_inner_interstitial": "ad_native_inner_interstitial",
        "./ad_native_interstitial": "ad_native_interstitial",
        "./syyx_manager": "syyx_manager"
    }],
    syyx_box_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "5ffc7r78gBL0or8vF6161zR", "syyx_box_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../../model/activity_model")
          , o = t("../../utils/syyx_sdk_utils")
          , _ = t("../syyx_activity_manager")
          , s = t("../syyx_manager")
          , a = function() {
            function t() {
                this._box_info = void 0,
                this._business_config_data = void 0,
                this.free_box_list = [],
                this.last_free_box_num = 3,
                this.free_reward_id_list = [],
                this.video_reward_id_list = [],
                this.first_reward_id_list = [],
                this.first_reward_id_pos_list = [],
                this.show_num = 0
            }
            return t.prototype.load_activity_box_config = function() {
                var t = this
                  , e = s.syyx_manager.get_business_config()
                  , i = !1;
                e && e.open_box_activity && (i = 1 == e.open_box_activity.value[0]),
                i ? (this._item_config = _.syyx_activity_manager._common_item_config,
                o.syyx_sdk_utils.load_resource(s.syyx_manager.__activity_box_reward_config_path, function(e) {
                    t._box_config = igc.igc_resources_utils.parse_csv(e, "id"),
                    console.log("igc-----box config is loaded ", t._box_config),
                    o.syyx_sdk_utils.load_resource(s.syyx_manager.__activity_box_first_reward_config_path, function(e) {
                        t._box_first_reward_config = igc.igc_resources_utils.parse_csv(e, "id"),
                        console.log("igc-----box first reward is loaded", t._box_first_reward_config),
                        t._business_config_data = s.syyx_manager.get_business_config(),
                        t.init_activity()
                    }, t)
                }, t)) : console.log("igc----- box activity is close")
            }
            ,
            t.prototype.check_open = function() {
                if (!this._item_config)
                    return !1;
                var t = s.syyx_manager.get_business_config()
                  , e = !1;
                return t && t.open_box_activity && (e = 1 == t.open_box_activity.value[0]),
                e
            }
            ,
            t.prototype.init_activity = function() {
                var t = o.syyx_sdk_utils.get_item("syyx_box_info");
                t && 0 != Object.keys(t).length ? this._box_info = t : (this._box_info = new n.syyx_box_info,
                this.reset_box_info()),
                this.init_reward_info(),
                this.init_reward_id_list(),
                this.save()
            }
            ,
            t.prototype.reset_box_info = function() {
                this._box_info.show_count = 0,
                this._box_info.opened_box_num = 0,
                this._box_info.growth_coefficient = 1,
                this._box_info.first_reward_count = 0
            }
            ,
            t.prototype.init_free_box_list = function() {
                var t = this._box_first_reward_config[this._box_info.first_reward_count + 1];
                if (t && t.free_box_pos)
                    this.free_box_list = t.free_box_pos;
                else {
                    var e = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    this.free_box_list = [];
                    var i = e.splice(Math.floor(Math.random() * e.length), 1)[0];
                    this.free_box_list.push(i + 1);
                    var n = e.splice(Math.floor(Math.random() * e.length), 1)[0];
                    this.free_box_list.push(n + 1);
                    for (var o = 0; o < 7; o++) {
                        var _ = e.splice(Math.floor(Math.random() * e.length), 1)[0];
                        if ((Math.floor(i / 3) != Math.floor(n / 3) || Math.floor(i / 3) != Math.floor(_ / 3)) && !(i % 3 == n % 3 && i % 3 == _ % 3 || Math.floor(i / 3) != Math.floor(n / 3) && Math.floor(i / 3) != Math.floor(_ / 3) && Math.floor(n / 3) != Math.floor(_ / 3) && i % 3 != n % 3 && i % 3 != _ % 3 && n % 3 != _ % 3)) {
                            this.free_box_list.push(_ + 1);
                            break
                        }
                    }
                    this.last_free_box_num = this.free_box_list.length,
                    this._box_info.show_count++,
                    this.save()
                }
            }
            ,
            t.prototype.get_free_box_list = function() {
                return this.free_box_list
            }
            ,
            t.prototype.init_reward_info = function() {
                for (var t in this._box_config) {
                    this._box_info.reward_info[t] || (this._box_info.reward_info[t] = new n.syyx_box_reward_info);
                    var e = this._box_config[t]
                      , i = this._box_info.reward_info[t];
                    i.reward_level = e.reward_level,
                    i.need_congratulations = e.need_congratulation
                }
            }
            ,
            t.prototype.init_reward_id_list = function() {
                for (var t in this._box_info,
                this._box_config)
                    this._box_config[t].free_pro && this._box_config[t].free_pro > 0 && !this.is_up_limit(t) && this.free_reward_id_list.push(this._box_config[t].id),
                    this._box_config[t].video_pro && this._box_config[t].video_pro > 0 && !this.is_up_limit(t) && this.video_reward_id_list.push(this._box_config[t].id)
            }
            ,
            t.prototype.init_first_reward_id_list = function() {
                var t;
                this.first_reward_id_list = [];
                var e = this._box_first_reward_config[this._box_info.first_reward_count + 1];
                if (e) {
                    for (var i = 0; i < 20; i++) {
                        var n;
                        (n = e["important_reward_" + i]) && !this.is_up_limit(n) && (!t && (t = this._box_info.reward_info[n].get_count),
                        (!this._box_config[n].up_limit || t < this._box_config[n].up_limit) && this.first_reward_id_list.push(n),
                        t++)
                    }
                    e.free_box_pos && this.first_reward_id_list.length > 0 ? this.init_first_reward_id_pos_list() : (this._box_info.first_reward_count++,
                    this.save())
                }
            }
            ,
            t.prototype.init_first_reward_id_pos_list = function() {
                this.first_reward_id_pos_list = [];
                var t = this.free_box_list.slice();
                if (!(this.first_reward_id_list.length > this.free_box_list.length))
                    for (var e in this.first_reward_id_list) {
                        var i = o.syyx_sdk_utils.random_get(t, !0);
                        i && this.first_reward_id_pos_list.push([this.first_reward_id_list[e], i])
                    }
            }
            ,
            t.prototype.is_up_limit = function(t) {
                var e = this._box_info.reward_info[t];
                return !(!this._box_config[t].up_limit || e.get_count < this._box_config[t].up_limit)
            }
            ,
            t.prototype.set_growth_coefficient = function(t) {
                t > 0 && (this._box_info.growth_coefficient = t,
                this.save())
            }
            ,
            t.prototype.get_reward_id = function(t, e) {
                var i = 0;
                for (var n in t)
                    i += e ? this._box_config[t[n]].free_pro : this._box_config[t[n]].video_pro;
                var o = i * Math.random()
                  , _ = 0;
                for (var n in t)
                    if (o <= (_ += e ? this._box_config[t[n]].free_pro : this._box_config[t[n]].video_pro))
                        return t[n];
                return 1
            }
            ,
            t.prototype.get_reward = function(t) {
                for (var e = this._box_config[t], i = [], n = 1; n < 20; n++) {
                    var o;
                    (o = e["reward_" + n]) && i.push(o)
                }
                var _ = this._box_info.reward_info[t];
                return _.reward_list = i,
                this.save(),
                _
            }
            ,
            t.prototype.do_get_reward = function(t) {
                var e, i, n = this._box_info;
                i = -1 != this.free_box_list.indexOf(t);
                var o = this._box_first_reward_config[this._box_info.first_reward_count + 1];
                if (i) {
                    var _ = this.first_reward_id_pos_list;
                    if (this.first_reward_id_list.length > 0 && o.free_box_pos) {
                        for (var s in _)
                            if (t != _[s][1])
                                ;
                            else {
                                e = _[s][0];
                                var a = this.first_reward_id_list.indexOf(e);
                                null != a && this.first_reward_id_list.splice(a, 1),
                                0 === this.first_reward_id_list.length && n.first_reward_count++
                            }
                        !e && (e = this.get_reward_id(this.free_reward_id_list, i))
                    } else
                        e = this.get_reward_id(this.free_reward_id_list, i)
                } else
                    e = this.get_reward_id(this.video_reward_id_list, i);
                this.do_has_get_reward(e);
                var r = this.get_reward(e);
                return this.save(),
                r
            }
            ,
            t.prototype.do_has_get_reward = function(t) {
                var e = this._box_info;
                e.opened_box_num++,
                e.reward_info[t].get_count++,
                1 == this._box_config[t].is_weed_out && this.delete_reward_id(t),
                this.is_up_limit(t) && this.delete_reward_id(t)
            }
            ,
            t.prototype.delete_reward_id = function(t) {
                var e = this.free_reward_id_list.indexOf(t)
                  , i = this.video_reward_id_list.indexOf(t);
                null != e && this.free_reward_id_list.splice(e, 1),
                null != i && this.video_reward_id_list.splice(i, 1)
            }
            ,
            t.prototype.show_congradulations = function(t, e) {
                this.show_item_congratulations(t),
                e && e()
            }
            ,
            t.prototype.show_item_congratulations = function(t) {
                if (!(this.show_num >= t.reward_list.length)) {
                    var e = {
                        icon: this._item_config[t.reward_list[this.show_num].item_id].skin,
                        count: t.reward_list[this.show_num].count,
                        item_id: t.reward_list[this.show_num].item_id,
                        desc: this._item_config[t.reward_list[this.show_num].item_id].desc
                    };
                    this.show_num < t.reward_list.length && (_.syyx_activity_manager.show_get_reward(e, this.show_item_congratulations.bind(this, t)),
                    this.show_num++)
                }
            }
            ,
            t.prototype.reset_show_num = function() {
                this.show_num = 0
            }
            ,
            t.prototype.save = function() {
                o.syyx_sdk_utils.set_item("syyx_box_info", this._box_info)
            }
            ,
            t
        }();
        i.default = a,
        cc._RF.pop()
    }
    , {
        "../../model/activity_model": "activity_model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "../syyx_activity_manager": "syyx_activity_manager",
        "../syyx_manager": "syyx_manager"
    }],
    syyx_cc_ui_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bb705sFh0pOW7QLeqXqVo9W", "syyx_cc_ui_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_cc_ui_manager = void 0;
        var n = t("../model/model")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("./syyx_manager")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("../syyx_ui/multual_push/syyx_ui_unit_game")
          , r = t("../syyx_ui/multual_push/syyx_ui_game_box")
          , c = t("../syyx_ui/multual_push/syyx_ui_left_more_game")
          , l = t("../syyx_ui/multual_push/syyx_ui_right_more_game")
          , d = t("../syyx_ui/multual_push/syyx_ui_guess_like")
          , u = t("../syyx_ui/ad/syyx_ui_banner")
          , p = t("../syyx_ui/ad/syyx_ui_interstitial")
          , y = t("../syyx_ui/ad/syyx_ui_inner_interstitial")
          , h = t("../syyx_ui/ad/syyx_ui_native_icon")
          , f = t("../syyx_ui/multual_push/syyx_ui_unit_icon")
          , g = t("../syyx_ui/common/syyx_ui_common_box")
          , v = t("../syyx_ui/common/syyx_ui_turntable")
          , m = t("../syyx_ui/common/syyx_ui_get_reward")
          , b = t("../syyx_ui/ad/syyx_ui_toast")
          , x = t("../syyx_ui/activity/syyx_ui_activity_icon")
          , w = t("../syyx_ui/activity/syyx_ui_activity_enter")
          , k = t("../syyx_ui/activity/syyx_ui_activity_rare")
          , O = t("../syyx_ui/activity/syyx_ui_activity_rob")
          , C = t("../syyx_ui/activity/syyx_ui_congratulations")
          , P = t("../syyx_ui/activity/syyx_ui_activity_bag")
          , T = t("../syyx_ui/super_power/syyx_ui_super_power")
          , j = t("../syyx_ui/super_power/syyx_ui_super_icon")
          , S = t("../syyx_ui/super_power/syyx_ui_super_power_h")
          , N = function() {
            function t() {}
            return t.load_ui_prefabs = function(t, e) {
                var i = this
                  , n = this._prefab_view[t];
                if (n && n.node)
                    e && e(this._prefab_view[t]);
                else {
                    var o = _.syyx_manager._ui_prefab_config
                      , a = this.get_prefab_path(t);
                    if (a) {
                        if (this._load_call_back_list[t] || (this._load_call_back_list[t] = []),
                        this._load_call_back_list[t].push(e),
                        this._prefab_loading_state[t])
                            return void console.log("igc----- syyx_cc_ui_manager prefab is loading , please wait", a);
                        this._prefab_loading_state[t] = !0,
                        s.syyx_sdk_utils.load_resource(a, function(e) {
                            i._prefab_loading_state[t] = !1;
                            var n = cc.instantiate(e).getComponent(i.get_prefab_class(t));
                            for (var _ in i._prefab_view[t] = n,
                            o && o[t].cocos_auto_scale && (s.syyx_sdk_utils.set_default_scale(n),
                            console.log("igc----- syyx_cc_ui_manager view is auto scale", a)),
                            i._load_call_back_list[t])
                                i._load_call_back_list[t][_] && i._load_call_back_list[t][_](n);
                            i._load_call_back_list[t] = [],
                            console.log("igc----- syyx_cc_ui_manmager load prefab", a)
                        }, i, function() {
                            i._prefab_loading_state[t] = !1,
                            console.log("igc----- syyx_cc_ui_manmager load prefab failed!!", a),
                            i._load_call_back_list[t] = []
                        })
                    }
                }
            }
            ,
            t.get_prefab_path = function(t) {
                switch (t) {
                case n.syyx_view.unit:
                    return o.syyx_prefab_path.unit;
                case n.syyx_view.game_box:
                    return o.syyx_prefab_path.game_box;
                case n.syyx_view.left_more_game:
                    return o.syyx_prefab_path.left_more_game;
                case n.syyx_view.right_more_game:
                    return o.syyx_prefab_path.right_more_game;
                case n.syyx_view.guess_like:
                    return o.syyx_prefab_path.guess_like;
                case n.syyx_view.native_banner:
                    return o.syyx_prefab_path.native_banner;
                case n.syyx_view.interstitial:
                    return cc.view.getVisibleSize().height > cc.view.getVisibleSize().width ? o.syyx_prefab_path.interstitial : o.syyx_prefab_path.interstitial_h;
                case n.syyx_view.inner_interstitial:
                    return o.syyx_prefab_path.inner_interstitial;
                case n.syyx_view.native_icon:
                    return o.syyx_prefab_path.native_icon;
                case n.syyx_view.unit_icon:
                    return o.syyx_prefab_path.unit_icon;
                case n.syyx_view.toast:
                    return o.syyx_prefab_path.toast;
                case n.syyx_view.activity_turntable:
                    return o.syyx_prefab_path.common_turntable;
                case n.syyx_view.activity_get_reward:
                    return o.syyx_prefab_path.get_reward;
                case n.syyx_view.activity_box:
                    return o.syyx_prefab_path.common_box;
                case n.syyx_view.activity_icon:
                    return o.syyx_prefab_path.activity_icon;
                case n.syyx_view.activity_enter:
                    return o.syyx_prefab_path.activity_enter;
                case n.syyx_view.activity_rare:
                    return o.syyx_prefab_path.activity_rare;
                case n.syyx_view.activity_rob:
                    return o.syyx_prefab_path.activity_rob;
                case n.syyx_view.activity_bag:
                    return o.syyx_prefab_path.activity_bag;
                case n.syyx_view.congratulations:
                    return o.syyx_prefab_path.congratulations;
                case n.syyx_view.super_power_icon:
                    return o.syyx_prefab_path.super_power_icon;
                case n.syyx_view.super_power:
                    return cc.view.getVisibleSize().height > cc.view.getVisibleSize().width ? o.syyx_prefab_path.super_power : o.syyx_prefab_path.super_power_h;
                default:
                    return void console.log("igc-----get_prefab_path fail", t)
                }
            }
            ,
            t.get_prefab_class = function(t) {
                switch (t) {
                case n.syyx_view.unit:
                    return a.default;
                case n.syyx_view.game_box:
                    return r.default;
                case n.syyx_view.left_more_game:
                    return c.default;
                case n.syyx_view.right_more_game:
                    return l.default;
                case n.syyx_view.guess_like:
                    return d.default;
                case n.syyx_view.native_banner:
                    return u.default;
                case n.syyx_view.interstitial:
                    return p.default;
                case n.syyx_view.inner_interstitial:
                    return y.default;
                case n.syyx_view.native_icon:
                    return h.default;
                case n.syyx_view.unit_icon:
                    return f.default;
                case n.syyx_view.toast:
                    return b.default;
                case n.syyx_view.activity_turntable:
                    return v.default;
                case n.syyx_view.activity_get_reward:
                    return m.default;
                case n.syyx_view.activity_box:
                    return g.default;
                case n.syyx_view.activity_icon:
                    return x.default;
                case n.syyx_view.activity_enter:
                    return w.default;
                case n.syyx_view.activity_rare:
                    return k.default;
                case n.syyx_view.activity_rob:
                    return O.default;
                case n.syyx_view.activity_bag:
                    return P.default;
                case n.syyx_view.congratulations:
                    return C.default;
                case n.syyx_view.super_power_icon:
                    return j.default;
                case n.syyx_view.super_power:
                    return cc.view.getVisibleSize().height > cc.view.getVisibleSize().width ? T.default : S.default;
                default:
                    return void console.log("igc-----get_prefab_path fail", t)
                }
            }
            ,
            t._prefab_view = {},
            t._prefab_loading_state = {},
            t._load_call_back_list = {},
            t
        }();
        i.syyx_cc_ui_manager = N,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../syyx_ui/activity/syyx_ui_activity_bag": "syyx_ui_activity_bag",
        "../syyx_ui/activity/syyx_ui_activity_enter": "syyx_ui_activity_enter",
        "../syyx_ui/activity/syyx_ui_activity_icon": "syyx_ui_activity_icon",
        "../syyx_ui/activity/syyx_ui_activity_rare": "syyx_ui_activity_rare",
        "../syyx_ui/activity/syyx_ui_activity_rob": "syyx_ui_activity_rob",
        "../syyx_ui/activity/syyx_ui_congratulations": "syyx_ui_congratulations",
        "../syyx_ui/ad/syyx_ui_banner": "syyx_ui_banner",
        "../syyx_ui/ad/syyx_ui_inner_interstitial": "syyx_ui_inner_interstitial",
        "../syyx_ui/ad/syyx_ui_interstitial": "syyx_ui_interstitial",
        "../syyx_ui/ad/syyx_ui_native_icon": "syyx_ui_native_icon",
        "../syyx_ui/ad/syyx_ui_toast": "syyx_ui_toast",
        "../syyx_ui/common/syyx_ui_common_box": "syyx_ui_common_box",
        "../syyx_ui/common/syyx_ui_get_reward": "syyx_ui_get_reward",
        "../syyx_ui/common/syyx_ui_turntable": "syyx_ui_turntable",
        "../syyx_ui/multual_push/syyx_ui_game_box": "syyx_ui_game_box",
        "../syyx_ui/multual_push/syyx_ui_guess_like": "syyx_ui_guess_like",
        "../syyx_ui/multual_push/syyx_ui_left_more_game": "syyx_ui_left_more_game",
        "../syyx_ui/multual_push/syyx_ui_right_more_game": "syyx_ui_right_more_game",
        "../syyx_ui/multual_push/syyx_ui_unit_game": "syyx_ui_unit_game",
        "../syyx_ui/multual_push/syyx_ui_unit_icon": "syyx_ui_unit_icon",
        "../syyx_ui/super_power/syyx_ui_super_icon": "syyx_ui_super_icon",
        "../syyx_ui/super_power/syyx_ui_super_power": "syyx_ui_super_power",
        "../syyx_ui/super_power/syyx_ui_super_power_h": "syyx_ui_super_power_h",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_manager": "syyx_manager"
    }],
    syyx_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f45d9w9PTpJYqKH+oHpCxSM", "syyx_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_manager = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../syyx_sdk_api")
          , a = t("../utils/syyx_sdk_utils")
          , r = t("./ad_banner")
          , c = t("./syyx_activity_manager")
          , l = t("./syyx_adv_manager")
          , d = t("./syyx_cc_ui_manager")
          , u = t("./syyx_super_power_manager")
          , p = function() {
            function t() {}
            return t.init = function(t, e) {
                void 0 === t && (t = null);
                var i, o = this, _ = t;
                if (t || (_ = this.__game_init_file_path),
                window.qq)
                    i = igc.e_channel_type.qq;
                else if (window.hbs)
                    i = igc.e_channel_type.hw_qg;
                else if (window.tt)
                    i = igc.e_channel_type.tt;
                else if (window.qg && !window.hbs) {
                    var r = window.qg.getProvider();
                    "OPPO" == r ? i = igc.e_channel_type.oppo_qg : "vivo" == r && (i = igc.e_channel_type.vivo_qg)
                } else
                    i = window.wx ? igc.e_channel_type.wx : window.loadingView ? igc.e_channel_type.apk : igc.e_channel_type.web;
                console.log("igc-----channel type 1.web 2.oppo 4.vivo 5.qq 7.apk  8.tt  10:hw_qg  -------\x3echannel \uff1a", i),
                n.syyx_const.syyx_sdk_channel = i,
                s.syyx_sdk_api.syyx_sdk_channel_type = i,
                a.syyx_sdk_utils.load_resource(_, function(t) {
                    console.log("igc-----syyx_game_init.json", t),
                    n.syyx_const.syyx_sdk_publish === n.e_syyx_sdk_publish_type.out && (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg ? (n.init_config.oppo_qg.app_id = t.syyx_app_id,
                    n.init_config.oppo_qg.app_version = t.channel[i].app_version,
                    n.init_config.oppo_qg.pkg_name = t.channel[i].pkg_name,
                    n.init_config.oppo_qg.stat_key = t.stat_key,
                    n.init_config.oppo_qg.configAppSecKey = t.config_key) : n.syyx_const.syyx_sdk_channel === igc.e_channel_type.vivo_qg ? (n.init_config.vivo_qg.app_id = t.syyx_app_id,
                    n.init_config.vivo_qg.app_version = t.channel[i].app_version,
                    n.init_config.vivo_qg.pkg_name = t.channel[i].pkg_name,
                    n.init_config.vivo_qg.stat_key = t.stat_key,
                    n.init_config.vivo_qg.configAppSecKey = t.config_key) : n.syyx_const.syyx_sdk_channel === igc.e_channel_type.tt ? (n.init_config.tt.app_id = t.syyx_app_id,
                    n.init_config.tt.app_version = t.channel[i].app_version,
                    n.init_config.tt.pkg_name = t.channel[i].pkg_name,
                    n.init_config.tt.stat_key = t.stat_key,
                    n.init_config.tt.configAppSecKey = t.config_key) : n.syyx_const.syyx_sdk_channel === igc.e_channel_type.qq ? (n.init_config.qq.app_id = t.syyx_app_id,
                    n.init_config.qq.app_version = t.channel[i].app_version,
                    n.init_config.qq.pkg_name = t.channel[i].pkg_name,
                    n.init_config.qq.stat_key = t.stat_key,
                    n.init_config.qq.configAppSecKey = t.config_key) : n.syyx_const.syyx_sdk_channel === igc.e_channel_type.wx ? (n.init_config.wx.app_id = t.syyx_app_id,
                    n.init_config.wx.app_version = t.channel[i].app_version,
                    n.init_config.wx.pkg_name = t.channel[i].pkg_name,
                    n.init_config.wx.stat_key = t.stat_key,
                    n.init_config.wx.configAppSecKey = t.config_key) : n.syyx_const.syyx_sdk_channel === igc.e_channel_type.apk ? (n.init_config.apk.app_id = t.syyx_app_id,
                    n.init_config.apk.app_version = t.channel[i].app_version,
                    n.init_config.apk.pkg_name = t.channel[i].pkg_name,
                    n.init_config.apk.stat_key = t.stat_key,
                    n.init_config.apk.configAppSecKey = t.config_key) : n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg ? (console.log("igc ----- access in hw_qg info"),
                    n.init_config.hw_qg.app_id = t.syyx_app_id,
                    n.init_config.hw_qg.app_version = t.channel[i].app_version,
                    n.init_config.hw_qg.pkg_name = t.channel[i].pkg_name,
                    n.init_config.hw_qg.stat_key = t.stat_key,
                    n.init_config.hw_qg.configAppSecKey = t.config_key) : (n.init_config.web.app_id = t.syyx_app_id,
                    n.init_config.web.app_version = "123",
                    n.init_config.web.pkg_name = "123",
                    n.init_config.web.stat_key = t.stat_key,
                    n.init_config.web.configAppSecKey = t.config_key),
                    igc.igc_main.instance.init_wrap(n.syyx_const.syyx_sdk_channel, n.init_config)),
                    o.__syyx_app_id = t.syyx_app_id,
                    o.__game_init_data = t,
                    o.__multual_push_file_path = t.multual_push_file_path,
                    o.__business_config_file_path = t.business_config_file_path,
                    o.__adv_config_file_path = t.adv_config_file_path,
                    o.__rob_treasure_config_path = t.rob_treasure_config_path,
                    o.__rob_treasure_reward_config_path = t.rob_treasure_reward_config_path,
                    o.__rare_treasure_config_path = t.rare_treasure_config_path,
                    o.__activity_item_config_path = t.activity_item_config_path,
                    o.__activity_turntable_config_path = t.activity_turntable_config_path,
                    o.__activity_box_reward_config_path = t.activity_box_reward_config_path,
                    o.__activity_box_first_reward_config_path = t.activity_box_first_reward_config_path,
                    o.__ui_prefab_config_path = t.ui_prefab_config_path,
                    o.__init_callback = e,
                    console.log("mijia ----- \u521d\u59cb\u5316\u5b8c\u6210"),
                    o.__init_callback && o.__init_callback(!0, {
                        business_config: null,
                        load_init_complete: !0,
                        load_local_complete: !1,
                        load_remote_complete: !1
                    }),
                    o.load_config()
                }, this)
            }
            ,
            t.get_app_version = function() {
                var t = n.syyx_const.syyx_sdk_channel + ""
                  , e = "";
                return this.__game_init_data && this.__game_init_data.channel[t] ? e = this.__game_init_data.channel[t].app_version : (e = "0.0.0.0",
                console.error("igc----- can not find app_version in syyx_game_init.json"),
                console.error("igc----- channel_type  ", t)),
                e
            }
            ,
            t.get_app_pkg_name = function() {
                var t = n.syyx_const.syyx_sdk_channel + ""
                  , e = "";
                return this.__game_init_data && this.__game_init_data.channel[t] ? e = this.__game_init_data.channel[t].pkg_name : (console.error("igc----- can not find pkg_name in syyx_game_init.json"),
                console.error("igc----- channel_type  ", t)),
                e
            }
            ,
            t.get_syyx_app_id = function() {
                return this.__syyx_app_id || ""
            }
            ,
            t.get_is_new_player = function() {
                return this.__is_new_player || 0
            }
            ,
            t.get_user_id = function() {
                return this.__user_id || ""
            }
            ,
            t.init_remote_config_compelete = function() {
                1 != this.__local_multual_push_inited || 1 != this.__local_business_config_inited || this.init_completed_tag ? this.__remote_business_config_inited && this.__remote_multual_push_inited && !this.refresh_completed_tag && (l.syyx_adv_manager.load_adv_config(),
                this.check_unit_icon_protect_cd(),
                l.syyx_adv_manager.init_first_banner_cd(),
                this.__inited = !0,
                this.__init_callback && (this.refresh_completed_tag = !0,
                console.log("igc ----- remote data has been back"),
                this.__init_callback(!0, {
                    business_config: this.__business_config_data,
                    load_init_complete: !1,
                    load_local_complete: !1,
                    load_remote_complete: !0
                }))) : (l.syyx_adv_manager.load_adv_config(),
                this.check_unit_icon_protect_cd(),
                l.syyx_adv_manager.init_first_banner_cd(),
                this.__inited = !0,
                this.__init_callback && (this.init_completed_tag = !0,
                console.log("igc ----- local data has been back"),
                this.__init_callback(!0, {
                    business_config: this.__business_config_data,
                    load_init_complete: !1,
                    load_local_complete: !0,
                    load_remote_complete: !1
                })))
            }
            ,
            t.use_local_business_config = function() {
                this.use_local_business_config_tag = !0
            }
            ,
            t.check_user_start_game_type = function() {
                var t = localStorage.getItem("is_old_player");
                if (this.__is_new_player = "1" != t,
                "1" == t ? console.log("igc----- old bird--------------") : (console.log("igc----- new fish--------------"),
                localStorage.setItem("is_old_player", "1")),
                n.syyx_const.syyx_sdk_channel !== igc.e_channel_type.web) {
                    var e = this.get_launch_options_sync();
                    if (e && e.query && (e.query.type == igc.e_share_type.card || e.query.type == igc.e_share_type.record)) {
                        var i = "1" == t ? igc.e_share_event_id.old_player : igc.e_share_event_id.new_player;
                        this.send_user_event(i, igc.e_share_event_type.share, 0, 0, e.query.type + "")
                    }
                    if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg && e && e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.userId) {
                        var _ = e.referrerInfo.extraData.userId
                          , s = e.referrerInfo.extraData.pushView || "1"
                          , a = e.referrerInfo.package
                          , r = e.referrerInfo.extraData.syyxAppId
                          , c = this.__is_new_player ? 1 : 0;
                        this.send_user_event(s, o.e_syyx_sdk_point_type.multual_push_game_enter_game, "", a, "", r + "", "", c, _ + "")
                    }
                }
            }
            ,
            t.check_unit_icon_protect_cd = function() {
                var t = this;
                if (this.__is_new_player && this.__business_config_data.unit_icon_protect_cd && this.__business_config_data.unit_icon_protect_cd.value[0] > 0) {
                    this.__unit_icon_protect = !0;
                    var e = this.__business_config_data.unit_icon_protect_cd.value[0];
                    this.unit_icon_timer_id && clearTimeout(this.unit_icon_timer_id),
                    this.unit_icon_timer_id = setTimeout(function() {
                        t.__unit_icon_protect = !1,
                        t.create_uniticon(function(t) {
                            t.node.parent || t.auto_show()
                        })
                    }, 1e3 * e)
                }
            }
            ,
            t.init_param = function(t, e) {
                if ("" != t && null != t && "" != e && null != e) {
                    if (!this.has_init_param) {
                        this.has_init_param = !0,
                        this.__user_id = e + "",
                        igc.stat_manager.instance.set_uid(t, e, "1"),
                        this.send_stat_event_cache();
                        var i = localStorage.getItem("syyx_igc_uid" + igc.igc_main.instance.app_config.game_param.app_id);
                        i && "" != i ? this.send_user_login() : (this.send_user_register(),
                        setTimeout(this.send_user_login, 1e3),
                        localStorage.setItem("syyx_igc_uid" + igc.igc_main.instance.app_config.game_param.app_id, e)),
                        this.check_user_start_game_type()
                    }
                } else
                    console.error("igc----- init_param user_id is undefined!")
            }
            ,
            t.is_inited = function() {
                return this.__inited
            }
            ,
            t.is_ready = function() {
                return null != this.appData
            }
            ,
            t.is_open = function(t) {
                return n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web || !this.is_push(t) || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg && this.func_open[t]
            }
            ,
            t.is_push = function(t) {
                switch (t) {
                case _.syyx_view.game_box:
                case _.syyx_view.unit:
                case _.syyx_view.unit_icon:
                case _.syyx_view.guess_like:
                case _.syyx_view.left_more_game:
                case _.syyx_view.right_more_game:
                    return !0;
                default:
                    return !1
                }
            }
            ,
            t.send_user_register = function() {
                igc.stat_manager.instance.send_user_register()
            }
            ,
            t.send_user_event = function(t, e, i, n, o, _, s, a, r) {
                if (!this.__stat_inited)
                    return this.__stat_data_cache.unshift({
                        event_id: t,
                        event_type: e,
                        place_id: i,
                        place_type: n,
                        extra: o,
                        str1: _,
                        str2: s,
                        extra2: a,
                        str3: r
                    }),
                    console.error("igc----- stat manager is not init or init fail!"),
                    void console.error("igc----- please use syyx_sdk_api.init_param  or  wait syyx_sdk_api.login_channel call_back");
                console.log("\u81ea\u5b9a\u4e49\u6253\u70b9"),
                igc.stat_manager.instance.send_user_event(t, e, i, n, o, _, s, a, r)
            }
            ,
            t.send_stat_event_cache = function() {
                var t = this;
                if (this.__stat_inited = !0,
                this.__stat_data_cache && this.__stat_data_cache.length > 0) {
                    var e = this.__stat_data_cache.pop();
                    igc.stat_manager.instance.send_user_event(e.event_id, e.event_type, e.place_id, e.place_type, e.extra, e.str1, e.str2, e.extra2, e.str3),
                    setTimeout(function() {
                        t.send_stat_event_cache()
                    }, 100)
                }
            }
            ,
            t.hide = function(t) {
                this.load_view(t, function(t) {
                    t.hide && t.hide()
                })
            }
            ,
            t.hide_all_push_view = function() {}
            ,
            t.hide_all_sdk_view = function() {}
            ,
            t.show = function(t, e, i, n) {
                void 0 === e && (e = -1),
                void 0 === n && (n = 0),
                this.load_view(t, function(t) {
                    t.show(e, i, n)
                })
            }
            ,
            t.send_user_login = function() {
                igc.stat_manager.instance.send_user_login()
            }
            ,
            t.on_load_mutual = function(t, e, i, o) {
                !0 === t ? (this.appData = JSON.parse(o),
                localStorage.setItem(n.syyx_const.local_multual_push_version, i),
                localStorage.setItem(n.syyx_const.local_multual_push_data, o)) : localStorage.getItem(n.syyx_const.local_multual_push_data) && console.log("\u6709\u7248\u672c\u4e92\u63a8\u6570\u636e\u7f13\u5b58"),
                this.__remote_multual_push_inited = !0,
                this.init_remote_config_compelete()
            }
            ,
            t.set_auto_scale = function(t, e) {
                this.need_auto_scale[t] = e,
                console.log("igc----- " + this._ui_prefab_config[t].name + "auto scale has been set" + e)
            }
            ,
            t.parse_fun_open = function(t) {
                var e = this.support_game_box()
                  , i = !0;
                this.__business_config_data && this.__business_config_data.is_use_multual_push_in_1076 && (i = 1 == this.__business_config_data.is_use_multual_push_in_1076.value[0],
                console.log("igc-----the switch of  quickapp use old multual push in 1076 or not is ", i));
                var n = !e || e && i;
                t.multual_push_open_guess && (this.func_open[_.syyx_view.guess_like] = Boolean(t.multual_push_open_guess.value[0]) && n),
                t.multual_push_open_side && (this.func_open[_.syyx_view.left_more_game] = Boolean(t.multual_push_open_side.value[0]) && n),
                t.multual_push_open_side && (this.func_open[_.syyx_view.right_more_game] = Boolean(t.multual_push_open_side.value[0]) && n),
                t.multual_push_open_button && (this.func_open[_.syyx_view.unit] = Boolean(t.multual_push_open_button.value[0]) && n),
                t.multual_push_open_icon && (this.func_open[_.syyx_view.unit_icon] = Boolean(t.multual_push_open_icon.value[0])),
                t.multual_push_open_popular && (this.func_open[_.syyx_view.game_box] = Boolean(t.multual_push_open_popular.value[0]) && n)
            }
            ,
            t.on_load_game_configs = function(t, e, i, o) {
                if (this.use_local_business_config_tag && (t = !1),
                1 == t) {
                    this.remote_business_config_data = igc.igc_resources_utils.parse_csv(o, "id"),
                    console.log("remote config data is " + this.remote_business_config_data),
                    localStorage.setItem(n.syyx_const.local_business_config_version, i),
                    a.syyx_sdk_utils.replace_data(this.__business_config_data, this.remote_business_config_data);
                    var _ = JSON.stringify(this.__business_config_data);
                    localStorage.setItem(n.syyx_const.local_business_config_data, _),
                    this.parse_fun_open(this.__business_config_data),
                    this.__remote_business_config_inited = !0,
                    c.syyx_activity_manager.load_activity_config()
                } else
                    localStorage.getItem(n.syyx_const.local_business_config_data) && (this.__remote_business_config_inited = !0);
                this.init_remote_config_compelete()
            }
            ,
            t.load_config = function() {
                this.load_ui_config()
            }
            ,
            t.load_ui_config = function() {
                var e = this;
                a.syyx_sdk_utils.load_resource(t.__ui_prefab_config_path, function(t) {
                    if (e._ui_prefab_config = igc.igc_resources_utils.parse_csv(t, "id"),
                    console.log("igc-----ui prefabs have loaded", e._ui_prefab_config),
                    e.load_multual_push_config(),
                    e.load_business_config(),
                    u.syyx_super_power_manager.load_super_power_config(),
                    e._ui_prefab_config)
                        for (var i in e._ui_prefab_config)
                            window.Laya ? e.need_auto_scale[e._ui_prefab_config[i].id] = e._ui_prefab_config[i].laya_auto_scale : e.need_auto_scale[e._ui_prefab_config[i].id] = e._ui_prefab_config[i].cocos_auto_scale
                }, this, function() {
                    console.log("igc-----ui prefabs loading failed"),
                    e.load_multual_push_config(),
                    e.load_business_config(),
                    u.syyx_super_power_manager.load_super_power_config()
                })
            }
            ,
            t.load_multual_push_config = function() {
                var t = this;
                if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg)
                    if (0 == s.syyx_sdk_api.syyx_sdk_multual_push_open)
                        this.__local_multual_push_inited = !0,
                        this.__remote_multual_push_inited = !0;
                    else {
                        var e = this.get_app_version()
                          , i = this.get_syyx_app_id() + this.__multual_push_version
                          , o = localStorage.getItem(i);
                        e != o && (localStorage.removeItem(n.syyx_const.local_multual_push_data),
                        localStorage.setItem(n.syyx_const.local_multual_push_version, null),
                        localStorage.setItem(i, e),
                        console.log("igc----- app_version change clear multual_push localStorage"));
                        var _ = void 0;
                        e == o && (_ = localStorage.getItem(n.syyx_const.local_multual_push_data)) ? (this.appData = JSON.parse(_),
                        this.__local_multual_push_inited = !0,
                        this.init_remote_config_compelete()) : a.syyx_sdk_utils.load_resource(this.__multual_push_file_path, function(e) {
                            t.appData || (t.appData = e),
                            t.__local_multual_push_inited = !0,
                            t.init_remote_config_compelete()
                        }, this);
                        var r = localStorage.getItem(n.syyx_const.local_multual_push_version);
                        igc.igc_main.instance.tpf_sdk.getTpfConfig().httpGetconfig(n.syyx_const.remote_multual_push_key, r, Date.now(), this.on_load_mutual.bind(this))
                    }
                else
                    n.syyx_const.syyx_sdk_channel === igc.e_channel_type.web ? a.syyx_sdk_utils.load_resource(this.__multual_push_file_path, function(e) {
                        t.appData || (t.appData = e),
                        t.__local_multual_push_inited = !0,
                        t.__remote_multual_push_inited = !0,
                        t.init_remote_config_compelete()
                    }, this) : (t.__local_multual_push_inited = !0,
                    t.__remote_multual_push_inited = !0)
            }
            ,
            t.load_business_config = function() {
                var t, e = this.get_app_version(), i = this.get_syyx_app_id() + this.__business_version, o = localStorage.getItem(i);
                e != o && (localStorage.removeItem(n.syyx_const.local_business_config_data),
                localStorage.setItem(n.syyx_const.local_business_config_version, null),
                localStorage.setItem(i, e),
                console.log("igc----- app_version change clear business_config localStorage")),
                e == o && !this.use_local_business_config_tag && (t = localStorage.getItem(n.syyx_const.local_business_config_data)) ? (console.log("igc----- on_load_game_configs -----use the config  in localstorage"),
                this.__business_config_data = JSON.parse(t),
                this.parse_fun_open(this.__business_config_data),
                this.__local_business_config_inited = !0,
                this.init_remote_config_compelete(),
                c.syyx_activity_manager.load_activity_config()) : this.on_load_local_business_config();
                var _ = localStorage.getItem(n.syyx_const.local_business_config_version);
                n.syyx_const.syyx_sdk_channel === igc.e_channel_type.tt || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.wx || n.syyx_const.syyx_sdk_channel === igc.e_channel_type.qq ? (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.qq && (_ = null),
                igc.igc_main.instance.tpf_sdk.getTpfConfig().httpGetconfigWx(n.syyx_const.remote_business_config_key, _, Date.now(), this.on_load_game_configs.bind(this))) : igc.igc_main.instance.tpf_sdk.getTpfConfig().httpGetconfig(n.syyx_const.remote_business_config_key, _, Date.now(), this.on_load_game_configs.bind(this))
            }
            ,
            t.create_guess_like = function(t) {
                return this.get_multual_push_info(_.syyx_view.guess_like) ? this.create_view(_.syyx_view.guess_like, t) : (console.log("igc----- guess like's data is empty   multual push data is not initialized  do not call interface too early"),
                null)
            }
            ,
            t.create_gamebox = function(t) {
                return this.get_multual_push_info(_.syyx_view.game_box) ? this.create_view(_.syyx_view.game_box, t) : (console.log("igc----- game box's data is empty  multual push data is not initialized  do not call interface too early"),
                null)
            }
            ,
            t.create_leftmoregame = function(t) {
                return this.get_multual_push_info(_.syyx_view.left_more_game) ? this.create_view(_.syyx_view.left_more_game, t) : (console.log("igc----- more_game data is null  multual push data has not been initialized"),
                null)
            }
            ,
            t.create_rightmoregame = function(t) {
                return this.get_multual_push_info(_.syyx_view.right_more_game) ? this.create_view(_.syyx_view.right_more_game, t) : (console.log("igc----- more_game data is null  multual push data has not been initialized"),
                null)
            }
            ,
            t.create_super_power_icon = function(t) {
                u.syyx_super_power_manager.create_super_power_icon(t)
            }
            ,
            t.create_super_power = function(t) {
                u.syyx_super_power_manager.create_super_power(t)
            }
            ,
            t.create_unitgame = function(t) {
                return this.get_multual_push_info(_.syyx_view.unit) ? this.create_view(_.syyx_view.unit, t) : (console.log("igc----- unit game'data is empty  multual push data is not initialized  do not call interface too early"),
                null)
            }
            ,
            t.create_uniticon = function(t) {
                return this.get_multual_push_info(_.syyx_view.unit) ? this.create_view(_.syyx_view.unit_icon, t) : (console.log("igc----- unit icon'data is empty   multual push data is not initialized  do not call interface too early"),
                null)
            }
            ,
            t.create_native_banner = function(t) {
                return l.syyx_adv_manager.__adv_config_inited ? this.create_view(_.syyx_view.native_banner, t) : (console.log("igc----- ad initialization is not achieve---\x3edo not call interface too early  :create_native_banner"),
                null)
            }
            ,
            t.create_inner_interstitial = function(t) {
                return l.syyx_adv_manager.__adv_config_inited ? this.create_view(_.syyx_view.inner_interstitial, t) : (console.log("igc----- ad initialization is not achieve---\x3edo not call interface too early  :create_inner_interstitial"),
                null)
            }
            ,
            t.create_interstitial = function(t) {
                return l.syyx_adv_manager.__adv_config_inited ? this.create_view(_.syyx_view.interstitial, t) : (console.log("igc----- ad initialization is not achieve---\x3edo not call interface too early  :create_interstitial"),
                null)
            }
            ,
            t.create_native_icon = function(t) {
                return l.syyx_adv_manager.__adv_config_inited ? this.create_view(_.syyx_view.native_icon, t) : (console.log("igc----- ad initialization is not achieve---\x3edo not call interface too early  :create_native_icon"),
                null)
            }
            ,
            t.create_congratulations = function(t) {
                return this.create_view(_.syyx_view.congratulations, t)
            }
            ,
            t.create_activity_icon = function(t) {
                return c.syyx_activity_manager._rob_treasure_instance._init_compelete && c.syyx_activity_manager._rare_treasure_instance._init_compelete ? c.syyx_activity_manager.remote_activity_open() ? this.create_view(_.syyx_view.activity_icon, t) : (console.log("igc-----sdk common activity remote config is close"),
                null) : (console.log("igc----- activity is not initialized  do not call interface too earlycreate_activity_icon"),
                null)
            }
            ,
            t.create_activity_enter = function(t) {
                return c.syyx_activity_manager._rob_treasure_instance._init_compelete && c.syyx_activity_manager._rare_treasure_instance._init_compelete ? c.syyx_activity_manager.remote_activity_open() ? this.create_view(_.syyx_view.activity_enter, t) : (console.log("igc-----sdk activity remote config is close"),
                null) : (console.log("igc----- activity is not initialized  do not call interface too early: create_activity_icon"),
                null)
            }
            ,
            t.create_activity_rare = function(t) {
                return c.syyx_activity_manager._rob_treasure_instance._init_compelete && c.syyx_activity_manager._rare_treasure_instance._init_compelete ? c.syyx_activity_manager.remote_activity_open() ? this.create_view(_.syyx_view.activity_rare, t) : (console.log("igc-----sdk activity remote config is close"),
                null) : (console.log("igc----- activity is not initialized  do not call interface too early: create_activity_enter"),
                null)
            }
            ,
            t.create_activity_rob = function(t) {
                return c.syyx_activity_manager._rob_treasure_instance._init_compelete && c.syyx_activity_manager._rare_treasure_instance._init_compelete ? c.syyx_activity_manager.remote_activity_open() ? this.create_view(_.syyx_view.activity_rob, t) : (console.log("igc-----sdk activity remote config is close"),
                null) : (console.log("igc----- activity is not initialized  do not call interface too earlycreate_activity_icon"),
                null)
            }
            ,
            t.create_activity_bag = function(t) {
                return c.syyx_activity_manager.remote_activity_open() ? this.create_view(_.syyx_view.activity_bag, t) : (console.log("igc-----sdk activity remote config is close"),
                null)
            }
            ,
            t.create_activity_turntable = function(t) {
                return this.create_view(_.syyx_view.activity_turntable, t)
            }
            ,
            t.create_activity_get_reward = function(t) {
                return this.create_view(_.syyx_view.activity_get_reward, t)
            }
            ,
            t.create_toast = function(t) {
                this.create_view(_.syyx_view.toast, function(e) {
                    e && e.show && e.show(t)
                })
            }
            ,
            t.create_activity_box = function(t) {
                return this.create_view(_.syyx_view.activity_box, t)
            }
            ,
            t.create_view = function(t, e) {
                if (!this.is_open(t))
                    return console.log("igc-----now this function is cloce : viewType", t),
                    null;
                this.load_view(t, e)
            }
            ,
            t.load_view = function(t, e) {
                window.Laya || d.syyx_cc_ui_manager.load_ui_prefabs(t, e)
            }
            ,
            t.get_multual_push_info = function() {
                return null
            }
            ,
            t.get_business_config = function() {
                if (this.__local_business_config_inited)
                    return this.__business_config_data
            }
            ,
            t.login_channel = function(t) {
                var e = this;
                this.has_login_channel || (this.has_login_channel = !0,
                igc.igc_main.instance.only_login_channel(function(i) {
                    if (i && i.channel_user_info && i.channel_user_info.uid) {
                        e.send_stat_event_cache();
                        var n = localStorage.getItem("syyx_igc_uid" + igc.igc_main.instance.app_config.game_param.app_id);
                        n && "" != n ? e.send_user_login() : (e.send_user_register(),
                        setTimeout(e.send_user_login, 1e3),
                        e.__user_id = i.channel_user_info.uid,
                        localStorage.setItem("syyx_igc_uid" + igc.igc_main.instance.app_config.game_param.app_id, i.channel_user_info.uid))
                    }
                    t && t(i),
                    e.check_user_start_game_type()
                }))
            }
            ,
            t.get_business_data_by_key = function(e) {
                var i = t.get_business_config();
                if (i && i[e])
                    return i[e].value
            }
            ,
            t.create_ad = function(t, e, i, o, _, s, a) {
                var r = 0;
                n.syyx_const.syyx_sdk_channel === igc.e_channel_type.qq && (r = l.syyx_adv_manager.get_qq_banner_top_offset());
                var c = l.syyx_adv_manager.get_channel_ad_id(e);
                if (c && "1" != c && "0" != c) {
                    var d = {
                        ad_type: t,
                        ad_id: c,
                        ad_pos_id: e,
                        ad_event: c,
                        ad_scene: c,
                        top_offset: r,
                        sub_ad_type: a || igc.e_ad_native_type.native_banner_normal,
                        onLoad: i,
                        onShow: o,
                        onClose: _,
                        onError: s
                    };
                    return igc.igc_main.instance.create_ad(d)
                }
                console.log("igc----- syyx_manager create_ad ad_id no configure in adv.csv")
            }
            ,
            t.show_ad = function(t, e, i, n, o, _, s) {
                var a = l.syyx_adv_manager.get_channel_ad_id(e);
                if (a && "1" != a && "0" != a) {
                    var r = {
                        ad_type: t,
                        ad_id: a,
                        ad_pos_id: e,
                        ad_event: a,
                        ad_scene: a,
                        sub_ad_type: s || igc.e_ad_native_type.native_banner_normal,
                        onLoad: i,
                        onShow: n,
                        onClose: o,
                        onError: _
                    };
                    return igc.igc_main.instance.show_ad(r)
                }
                console.log("igc----- syyx_manager show_ad ad_id no configure in adv.csv")
            }
            ,
            t.destroy_ad = function(t, e, i) {
                var n = l.syyx_adv_manager.get_channel_ad_id(e);
                if (n && "1" != n && "0" != n) {
                    var o = {
                        ad_type: t,
                        ad_id: n,
                        ad_pos_id: e,
                        sub_ad_type: i || igc.e_ad_native_type.native_banner_normal,
                        ad_event: n,
                        ad_scene: n
                    };
                    return igc.igc_main.instance.destroy_ad(o)
                }
                console.log("igc----- syyx_manager destroy_ad ad_id no configure in adv.csv")
            }
            ,
            t.hide_ad = function(t, e) {
                var i = l.syyx_adv_manager.get_channel_ad_id(e);
                if (i && "1" != i && "0" != i) {
                    var n = {
                        ad_type: t,
                        ad_id: i,
                        ad_pos_id: e,
                        ad_event: i,
                        ad_scene: i
                    };
                    return igc.igc_main.instance.hide_ad(n)
                }
                console.log("igc----- syyx_manager hide_ad ad_id no configure in adv.csv")
            }
            ,
            t.report_ad_show = function(t, e) {
                return l.syyx_adv_manager.report_ad_show(t, e)
            }
            ,
            t.report_ad_click = function(t, e) {
                return l.syyx_adv_manager.report_ad_click(t, e)
            }
            ,
            t.preload_video = function() {
                n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg && t.create_ad(igc.e_ad_type.video, o.e_ad_id.video_add_gold, function() {}, function() {}, function() {}, function() {})
            }
            ,
            t.show_native_inner_interstitial = function(t, e, i, n, o, _) {
                if (void 0 === _ && (_ = !0),
                r.ad_banner.can_show_first) {
                    var s = this.get_local_native_data(t);
                    this.create_inner_interstitial(function(t) {
                        s && t.show(e, s, i, n, o, _)
                    })
                } else
                    console.log("igc----- is in oppo first ad cd ")
            }
            ,
            t.click_native_inner_interstitial = function() {
                this.create_inner_interstitial(function(t) {
                    t && t.node.parent && t.report_click()
                })
            }
            ,
            t.get_local_native_data = function(t) {
                return l.syyx_adv_manager.get_local_native_data(t)
            }
            ,
            t.report_native_inner_interstitial_click = function(t) {
                if (r.ad_banner.can_show_first) {
                    var e = this.get_local_native_data(t);
                    this.create_inner_interstitial(function(t) {
                        e && t.report_click()
                    })
                } else
                    console.log("igc----- is in oppo first ad cd ")
            }
            ,
            t.hide_native_inner_interstitial = function() {
                this.load_view(_.syyx_view.inner_interstitial, function(t) {
                    t.node.parent && t.hide && t.hide()
                })
            }
            ,
            t.show_video = function(e, i, o, _, s, a) {
                void 0 === a && (a = !1),
                n.syyx_const.syyx_sdk_channel !== igc.e_channel_type.web ? n.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg ? t.show_ad(igc.e_ad_type.video, e, i, o, _, function() {
                    a && t.create_toast("\u76ee\u524d\u6682\u65f6\u65e0\u5e7f\u544a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"),
                    s && s()
                }) : t.create_ad(igc.e_ad_type.video, e, i, o, _, function() {
                    a && t.create_toast("\u76ee\u524d\u6682\u65f6\u65e0\u5e7f\u544a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"),
                    s && s()
                }) : _ && _(null, {
                    isEnded: !0
                })
            }
            ,
            t.support_game_box = function() {
                if (n.syyx_const.syyx_sdk_channel === igc.e_channel_type.oppo_qg) {
                    var e = t.get_system_info_sync();
                    if (e && e.platformVersion)
                        return e.platformVersion >= 1076
                }
                return !1
            }
            ,
            t.check_can_add_desktop = function() {
                return igc.igc_main.instance.check_can_add_desktop({})
            }
            ,
            t.check_is_add_desktop = function(t, e) {
                var i = {
                    can_add: t,
                    has_add: e
                };
                return igc.igc_main.instance.check_is_add_desktop(i)
            }
            ,
            t.add_desktop = function(t, e, i, n) {
                var o = {
                    on_success: t,
                    on_failed: e,
                    on_failed_back: i,
                    has_create: n
                };
                return igc.igc_main.instance.add_desktop(o)
            }
            ,
            t.on_show = function(t) {
                return igc.igc_main.instance.on_show({
                    on_show: t
                })
            }
            ,
            t.on_hide = function(t) {
                return igc.igc_main.instance.on_hide({
                    on_hide: t
                })
            }
            ,
            t.get_system_info_sync = function() {
                return igc.igc_main.instance.get_system_info_sync()
            }
            ,
            t.get_launch_options_sync = function() {
                return igc.igc_main.instance.get_launch_options_sync()
            }
            ,
            t.exit_mini_program = function() {
                return igc.igc_main.instance.exit_mini_program()
            }
            ,
            t.navigate_to_mini_program = function(t, e) {
                var i = {
                    app_id: t,
                    success: e
                };
                return igc.igc_main.instance.navigate_to_mini_program(i)
            }
            ,
            t.share = function(t, e, i, n, o, _) {
                var s = {
                    title: t,
                    imageUrl: e,
                    query: i,
                    desc: n,
                    success: o,
                    fail: _
                };
                return igc.igc_main.instance.share(s)
            }
            ,
            t.on_share_app_message = function(t, e) {
                var i = {
                    title: t,
                    imageUrl: e
                };
                return igc.igc_main.instance.on_share_app_message(i)
            }
            ,
            t.start_record_screen = function(t, e, i) {
                var n = {
                    time: t,
                    is_clip_end: e,
                    clip_time: i
                };
                return igc.igc_main.instance.start_record_screen(n)
            }
            ,
            t.stop_record_screen = function() {
                return igc.igc_main.instance.stop_record_screen()
            }
            ,
            t.pause_record_screen = function() {
                return igc.igc_main.instance.pause_record_screen()
            }
            ,
            t.resume_record_screen = function() {
                return igc.igc_main.instance.resume_record_screen()
            }
            ,
            t.share_record_screen = function(t, e, i, n, o, _, s) {
                var a = {
                    videoTopics: t,
                    title: e,
                    desc: i,
                    imageUrl: n,
                    query: o,
                    fail: _,
                    success: s
                };
                return igc.igc_main.instance.share_record_screen(a)
            }
            ,
            t.get_record_video = function() {
                return igc.igc_main.instance.get_record_video()
            }
            ,
            t.on_load_local_business_config = function() {
                var t = this;
                a.syyx_sdk_utils.load_resource(this.__business_config_file_path, function(e) {
                    var i = igc.igc_resources_utils.parse_csv(e, "id");
                    if (i.delat_time_normal = {
                        desc: "\u6309\u94ae\u5ef6\u8fdf",
                        id: "delat_time_normal",
                        value: [10]
                    },
                    i.native_icon_switch = {
                        desc: "\u539f\u751ficon\u5f00\u5173",
                        id: "native_icon_switch",
                        value: [1]
                    },
                    i.native_icon_trap_pro = {
                        desc: "\u539f\u751ficon\u6613\u70b9\u51fb\u6982\u7387",
                        id: "native_icon_trap_pro",
                        value: [1]
                    },
                    i.is_use_multual_push_in_1076 = {
                        desc: "oppo\u5feb\u5e94\u75281076\u662f\u5426\u663e\u793a\u4e92\u63a8",
                        id: "is_use_multual_push_in_1076",
                        value: [0]
                    },
                    i.banner_cool_time = {
                        desc: "banner\u81ea\u52a8\u5237\u65b0\u65f6\u95f4",
                        id: "banner_cool_time",
                        value: [20, 20]
                    },
                    i.native_icon_cool_time = {
                        desc: " ",
                        id: "native_icon_cool_time",
                        value: [20, 20]
                    },
                    i.adv_banner_cd = {
                        desc: "\u539f\u751f\u53cabanner\u5e7f\u544a\u51b7\u5374\uff08\u79d2\uff09",
                        id: "adv_banner_cd",
                        value: [0]
                    },
                    i.banner_top_offset = {
                        desc: "\u624bQ\u6e20\u9053\u666e\u901abanner\u4e0a\u79fb\u8ddd\u79bb",
                        id: "banner_top_offset",
                        value: [0, 0]
                    },
                    i.native_banner_open_switch = {
                        desc: "\u662f\u5426\u542f\u7528\u539f\u751fbanner\u5e7f\u544a",
                        id: "native_banner_open_switch",
                        value: [1]
                    },
                    i.native_banner_click_switch = {
                        desc: "\u662f\u5426\u542f\u7528\u539f\u751fbanner\u6613\u70b9\u51fb\u5904\u7406",
                        id: "native_banner_click_switch",
                        value: [0]
                    },
                    i.native_banner_click_pro = {
                        desc: "\u539f\u751fbanner\u6613\u70b9\u51fb\u89e6\u53d1\u6982\u7387",
                        id: "native_banner_click_pro",
                        value: [0]
                    },
                    i.native_banner_click_protect = {
                        desc: "\u539f\u751fbanner\u6613\u70b9\u51fb\u4fdd\u62a4",
                        id: "native_banner_click_protect",
                        value: [3]
                    },
                    i.native_institial_white_easy_click = {
                        desc: "\u539f\u751f\u63d2\u5c4f\u70b9\u51fb\u7a7a\u767d\u8df3\u8f6c",
                        id: "native_institial_white_easy_click",
                        value: [0]
                    },
                    i.native_banner_report_click_update_switch = {
                        desc: "\u539f\u751fBanner\u70b9\u51fb\u4e0a\u62a5\u540e\u7acb\u5373\u5237\u65b0",
                        id: "native_banner_report_click_update_switch",
                        value: [1]
                    },
                    i.native_icon_report_click_update_switch = {
                        desc: "\u539f\u751ficon\u70b9\u51fb\u4e0a\u62a5\u540e\u7acb\u5373\u5237\u65b0",
                        id: "native_icon_report_click_update_switch",
                        value: [1]
                    },
                    i.native_inner_report_click_update_switch = {
                        desc: "\u7ed3\u7b97\u539f\u751f\u70b9\u51fb\u4e0a\u62a5\u540e\u7acb\u5373\u5237\u65b0",
                        id: "native_inner_report_click_update_switch",
                        value: [1]
                    },
                    i.native_interstitial_report_click_update_switch = {
                        desc: "\u539f\u751f\u63d2\u5c4f\u70b9\u51fb\u4e0a\u62a5\u540e\u7acb\u5373\u5237\u65b0",
                        id: "native_interstitial_report_click_update_switch",
                        value: [1]
                    },
                    i.multual_push_open_side = {
                        desc: "\u4e92\u63a8\u4fa7\u8fb9\u5f00\u542f",
                        id: "multual_push_open_side",
                        value: [1]
                    },
                    i.multual_push_open_gif = {
                        desc: "\u4e92\u63a8gif\u5f00\u542f",
                        id: "multual_push_open_gif",
                        value: [1]
                    },
                    i.multual_push_open_guess = {
                        desc: "\u4e92\u63a8\u5e95\u90e8\u5f00\u542f",
                        id: "multual_push_open_guess",
                        value: [1]
                    },
                    i.multual_push_open_popular = {
                        desc: "\u4e92\u63a8\u5c45\u4e2d\u5f00\u542f",
                        id: "multual_push_open_popular",
                        value: [1]
                    },
                    i.multual_push_open_button = {
                        desc: "\u5355\u4e2a\u4e92\u5f00\u542f\u94ae",
                        id: "multual_push_open_button",
                        value: [1]
                    },
                    i.multual_push_open_icon = {
                        desc: "\u4e92\u63a8icon\u8f6e\u64ad\u5f00\u542f",
                        id: "multual_push_open_icon",
                        value: [1]
                    },
                    i.unit_icon_protect_cd = {
                        desc: "icon\u8f6e\u64ad\u65b0\u624b\u7981\u6b62\u5c55\u793a\u65f6\u95f4",
                        id: "unit_icon_protect_cd",
                        value: [60]
                    },
                    i.show_normal_banner_switch = {
                        desc: "\u662f\u5426\u5f00\u542f\u5c55\u793a\u666e\u901abanner",
                        id: "show_normal_banner_switch",
                        value: [1]
                    },
                    i.native_icon_trap_pro = {
                        desc: "\u539f\u751ficon\u6613\u70b9\u51fb\u6982\u7387",
                        id: "native_icon_trap_pro",
                        value: [0]
                    },
                    i.open_rare_treasure = {
                        desc: "\u5f00\u542f\u7a00\u4e16\u73cd\u5b9d\u6d3b\u52a8",
                        id: "open_rare_treasure",
                        value: [0]
                    },
                    i.active_rare_treasure_chapter = {
                        desc: "\u6fc0\u6d3b\u7a00\u4e16\u73cd\u5b9d\u6240\u9700\u5c40\u6570",
                        id: "active_rare_treasure_chapter",
                        value: [5]
                    },
                    i.rare_treasure_forging_time = {
                        desc: "\u7a00\u4e16\u73cd\u5b9d\u94f8\u9020\u65f6\u957f\uff08\u6beb\u79d2\uff09",
                        id: "rare_treasure_forging_time",
                        value: [18e4]
                    },
                    i.rare_treasure_get_over_time = {
                        desc: "\u7a00\u4e16\u73cd\u5b9d\u9886\u53d6\u65f6\u957f\uff08\u6beb\u79d2\uff09",
                        id: "rare_treasure_get_over_time",
                        value: [864e5]
                    },
                    i.open_rob_treasure = {
                        desc: "\u5f00\u542f\u593a\u5b9d\u5947\u5175\u6d3b\u52a8",
                        id: "open_rob_treasure",
                        value: [0]
                    },
                    i.active_rob_treasure_chapter = {
                        desc: "\u6fc0\u6d3b\u593a\u5b9d\u5947\u5175\u6240\u9700\u5c40\u6570",
                        id: "active_rob_treasure_chapter",
                        value: [3]
                    },
                    i.active_rob_treasure_enter_wait_num = {
                        desc: "\u593a\u5b9d\u5947\u5175\u593a\u5b9d\u6bcfN\u6b21\u8fdb\u5165\u4f11\u606f\u72b6\u6001",
                        id: "active_rob_treasure_enter_wait_num",
                        value: [3]
                    },
                    i.active_rob_treasure_resume_time = {
                        desc: "\u593a\u5b9d\u5947\u5175\u4f11\u606f\u65f6\u957f",
                        id: "active_rob_treasure_resume_time",
                        value: [3e4]
                    },
                    i.active_rob_treasure_bomb_time = {
                        desc: "\u593a\u5b9d\u5947\u5175\u70b8\u5f39\u6062\u590d\u65f6\u95f4(\u6beb\u79d2)",
                        id: "active_rob_treasure_bomb_time",
                        value: [45e3, 9e4, 12e4]
                    },
                    i.active_rob_treasure_gold_num = {
                        desc: "\u593a\u5b9d\u5947\u5175\u83b7\u5f97\u91d1\u5e01\u968f\u673a\u8303\u56f4",
                        id: "active_rob_treasure_gold_num",
                        value: [100, 200]
                    },
                    i.open_turntable_activity = {
                        desc: "\u662f\u5426\u5f00\u542f\u5e78\u8fd0\u8f6c\u76d8",
                        id: "open_turntable_activity",
                        value: [0]
                    },
                    i.turntable_today_max_count = {
                        desc: "\u5e78\u8fd0\u8f6c\u76d8\u6bcf\u65e5\u6700\u5927\u62bd\u5956\u6b21\u6570",
                        id: "turntable_today_max_count",
                        value: [12]
                    },
                    i.turntable_reset_count = {
                        desc: "\u5e78\u8fd0\u8f6c\u76d8\u6bcfX\u6b21\u83b7\u5f97\u6700\u4f73\u5956\u52b1",
                        id: "turntable_reset_count",
                        value: [4]
                    },
                    i.open_box_activity = {
                        desc: "\u662f\u5426\u5f00\u542f\u5e78\u8fd0\u5b9d\u7bb1",
                        id: "open_box_activity",
                        value: [0]
                    },
                    i.finger_close_banner_switch = {
                        desc: "\u5173\u95edBanner\u540e\u4e0d\u518d\u5c55\u793a",
                        id: "finger_close_banner_switch",
                        value: [0, 60]
                    },
                    i.native_inner_institial_click_close_pro = {
                        desc: "\u5173\u95ed\u7ed3\u7b97\u539f\u751f\u6613\u8df3\u8f6c\u6982\u7387",
                        id: "native_inner_institial_click_close_pro",
                        value: [0]
                    },
                    i.native_institial_click_close_pro = {
                        desc: "\u5173\u95ed\u539f\u751f\u63d2\u5c4f\u6613\u8df3\u8f6c\u6982\u7387",
                        id: "native_institial_click_close_pro",
                        value: [0]
                    },
                    i.more_game_repeat_num = {
                        desc: "\u5de6\u53f3\u4fa7\u66f4\u591a\u6e38\u620f\u91cd\u590d\u500d\u6570",
                        id: "more_game_repeat_num",
                        value: [1]
                    },
                    i.more_game_three_item_switch = {
                        desc: "\u66f4\u591a\u6e38\u620f\u663e\u793a\u4e09\u5217\u5f00\u5173",
                        id: "more_game_three_item_switch",
                        value: [0]
                    },
                    i.open_red_paper_rain = {
                        desc: "\u7ea2\u5305\u96e8\u6d3b\u52a8\u5f00\u5173",
                        id: "open_red_paper_rain",
                        value: [1]
                    },
                    i.red_paper_rain_cd = {
                        desc: "\u7ea2\u5305\u96e8\u6d3b\u52a8cd\uff0c\u5355\u4f4d\u5c0f\u65f6",
                        id: "red_paper_rain_cd",
                        value: [.01]
                    },
                    i.red_paper_rain_online_cd = {
                        desc: "\u7ea2\u5305\u96e8\u6d3b\u52a8\u5728\u7ebf\u5f00\u542f\u6240\u9700cd",
                        id: "red_paper_rain_online_cd",
                        value: [0]
                    },
                    i.red_paper_rain_play_time = {
                        desc: "\u7ea2\u5305\u96e8\u6d3b\u52a8\u4e00\u6b21\u65f6\u957f",
                        id: "red_paper_rain_play_time",
                        value: [10]
                    },
                    i.open_oppo_new_rule = {
                        desc: "\u662f\u5426\u5f00\u542foppo\u65b0\u89c4",
                        id: "open_oppo_new_rule",
                        value: [1]
                    },
                    i.oppo_banner_cool_time = {
                        desc: "oppoBanner\u7d2f\u8ba1\u5c55\u793a\u5237\u65b0\u65f6\u95f4",
                        id: "oppo_banner_cool_time",
                        value: [[0, 120, 10], [121, 180, 11], [181, 240, 12]]
                    },
                    i.oppo_native_show_limit = {
                        desc: "oppo\u539f\u751f\u5c55\u793a\u9650\u5236",
                        id: "oppo_native_show_limit",
                        value: [60, 2]
                    },
                    i.oppo_native_cache_length = {
                        desc: "oppo\u539f\u751f\u6570\u636e\u7f13\u5b58\u6570\u7ec4\u957f\u5ea6",
                        id: "oppo_native_cache_length",
                        value: [5]
                    },
                    i.red_paper_rain_video_order_number = {
                        desc: "\u7ea2\u5305\u96e8\u6d3b\u52a8\u89c6\u9891\u5e7f\u544a\u5e8f\u53f7",
                        id: "red_paper_rain_video_order_number",
                        value: [3, 4, 6]
                    },
                    i.red_paper_rain_gold_order_number = {
                        desc: "\u7ea2\u5305\u96e8\u6d3b\u52a8\u9ec4\u91d1\u7ea2\u5305\u5e8f\u53f7",
                        id: "red_paper_rain_gold_order_number",
                        value: [5, 9]
                    },
                    i.native_inner_interstitial_switch = {
                        desc: "\u7ed3\u7b97\u539f\u751f\u5f00\u5173",
                        id: "native_inner_interstitial_switch",
                        value: [1]
                    },
                    i.native_banner_click_pro_limit = {
                        desc: "\u539f\u751fbanner\u70b9\u51fb\u7387\u9650\u5236",
                        id: "native_banner_click_pro_limit",
                        value: [100, .4, 60]
                    },
                    i.native_inner_click_pro_limit = {
                        desc: "\u7ed3\u7b97\u539f\u751f\u70b9\u51fb\u7387\u9650\u5236",
                        id: "native_inner_click_pro_limit",
                        value: [100, .4, 60]
                    },
                    i.native_interstitial_click_pro_limit = {
                        desc: "\u539f\u751f\u63d2\u5c4f\u70b9\u51fb\u7387\u9650\u5236",
                        id: "native_interstitial_click_pro_limit",
                        value: [100, .4, 60]
                    },
                    t.__remote_business_config_inited) {
                        a.syyx_sdk_utils.replace_data(i, t.__business_config_data),
                        t.__business_config_data = i,
                        console.log("igc-----local bussiness config is ", i);
                        var o = JSON.stringify(t.__business_config_data);
                        localStorage.setItem(n.syyx_const.local_business_config_data, o),
                        t.parse_fun_open(t.__business_config_data)
                    } else
                        t.__business_config_data = i,
                        t.parse_fun_open(i),
                        console.log("igc-----local bussiness config is ", i);
                    t.__local_business_config_inited = !0,
                    t.init_remote_config_compelete()
                }, this)
            }
            ,
            t.pre_load_game_portal_box = function(e, i, n, o) {
                var _ = this;
                this.support_game_box() && t.create_ad(igc.e_ad_type.app_box, e, null, null, function() {
                    o && o(),
                    setTimeout(function() {
                        _.pre_load_game_portal_box(e, null, null, null, null)
                    }, 500)
                }, null, igc.e_ad_app_box_type.portal_box)
            }
            ,
            t.show_game_portal_box = function(e, i, n, o, _, s) {
                void 0 === s && (s = !1);
                var a = this;
                t.show_ad(igc.e_ad_type.app_box, e, i, n, function() {
                    o && o(),
                    setTimeout(function() {
                        a.pre_load_game_portal_box(e, null, null, null, null)
                    }, 500)
                }, function() {
                    s && t.create_toast("\u52aa\u529b\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"),
                    _ && _()
                }, igc.e_ad_app_box_type.portal_box)
            }
            ,
            t.send_multual_push_show_event = function(e) {
                var i = t.get_syyx_app_id()
                  , n = t.get_user_id();
                this.send_user_event(e, o.e_syyx_sdk_point_type.multual_push_show, "", "", "", i + "", "", "", n + "")
            }
            ,
            t.send_multual_push_item_show_event = function(e, i, n, _) {
                var s = t.get_syyx_app_id()
                  , a = t.get_user_id();
                this.send_user_event(e, o.e_syyx_sdk_point_type.multual_push_game_show, i + "", "", n, s + "", _ + "", "", a + "")
            }
            ,
            t.send_multual_push_click_event = function(e, i, n, _, s) {
                var a = t.get_syyx_app_id()
                  , r = t.get_user_id();
                this.send_user_event(e, o.e_syyx_sdk_point_type.multual_push_game_click, i + "", s, n, a + "", _ + "", "", r + "")
            }
            ,
            t.viewMap = {},
            t.func_open = {},
            t.need_auto_scale = {},
            t.__is_mutual_ready = !1,
            t.__multual_push_file_path = "",
            t.__game_init_file_path = "",
            t.__business_config_file_path = "",
            t.__adv_config_file_path = "",
            t.__rob_treasure_config_path = "",
            t.__rob_treasure_reward_config_path = "",
            t.__rare_treasure_config_path = "",
            t.__activity_item_config_path = "",
            t.__activity_turntable_config_path = "",
            t.__activity_box_reward_config_path = "",
            t.__activity_box_first_reward_config_path = "",
            t.__multual_push_version = "__multual_push_version",
            t.__business_version = "__business_version",
            t.has_init_param = !1,
            t.has_login_channel = !1,
            t.__init_callback = void 0,
            t.__game_init_data = void 0,
            t.__multual_push_data = {},
            t.__local_multual_push_inited = !1,
            t.__remote_multual_push_inited = !1,
            t.__business_config_data = {},
            t.__local_business_config_inited = !1,
            t.__remote_business_config_inited = !1,
            t.remote_business_config_data = null,
            t.__is_new_player = !1,
            t.__unit_icon_protect = !1,
            t.use_local_business_config_tag = !1,
            t.init_completed_tag = !1,
            t.refresh_completed_tag = !1,
            t.__stat_inited = !1,
            t.__stat_data_cache = [],
            t.unit_icon_timer_id = void 0,
            t.__user_id = "",
            t
        }();
        i.syyx_manager = p,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../syyx_sdk_api": "syyx_sdk_api",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./ad_banner": "ad_banner",
        "./syyx_activity_manager": "syyx_activity_manager",
        "./syyx_adv_manager": "syyx_adv_manager",
        "./syyx_cc_ui_manager": "syyx_cc_ui_manager",
        "./syyx_super_power_manager": "syyx_super_power_manager"
    }],
    syyx_rare_treasure_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "8285a9uzvxA8IWSO2nziRXS", "syyx_rare_treasure_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_rare_treasure_manager = void 0;
        var n = t("../configs/syyx_sdk_enum")
          , o = t("../model/activity_model")
          , _ = t("../syyx_sdk_api")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("./syyx_activity_manager")
          , r = t("./syyx_manager")
          , c = function() {
            function t() {
                this._rare_info = void 0,
                this._init_compelete = !1
            }
            return t.prototype.load_activity_config = function() {
                var t = this;
                s.syyx_sdk_utils.load_resource(r.syyx_manager.__rare_treasure_config_path, function(e) {
                    t._treasure_config_data = igc.igc_resources_utils.parse_csv(e, "id"),
                    t.init_activity(),
                    t.active_activity(),
                    t._init_compelete = !0,
                    console.log("igc-----rare config is loaded", t._treasure_config_data)
                }, this)
            }
            ,
            t.prototype.init_activity = function() {
                var t = s.syyx_sdk_utils.get_item("syyx_rare_treasure_info");
                this._rare_info = t || new o.syyx_rare_treasure_info,
                this.check_state(),
                this.save()
            }
            ,
            t.prototype.set_next_item = function() {
                if (this._rare_info.state == n.e_activity_rare_state.active) {
                    var t = Object.keys(this._treasure_config_data).length;
                    if (!this.check_open())
                        return;
                    this._rare_info.state = n.e_activity_rare_state.wait_forging;
                    var e = void 0;
                    if (-1 == this._rare_info.cur_index)
                        e = Math.floor(Math.random() * t),
                        this._rare_info.cur_index = e,
                        this._rare_info.config = this._treasure_config_data[e],
                        this._rare_info.item_id = this._rare_info.config.item_id;
                    else
                        for (var i = 0; i < t; i++) {
                            e = ++this._rare_info.cur_index % t;
                            var o = !1;
                            for (var _ in this._rare_info.compelete_list)
                                if (this._treasure_config_data[e].item_id == this._rare_info.compelete_list[_]) {
                                    o = !0;
                                    break
                                }
                            if (!o)
                                return this._rare_info.cur_index = e,
                                this._rare_info.config = this._treasure_config_data[e],
                                void (this._rare_info.item_id = this._rare_info.config.item_id)
                        }
                }
            }
            ,
            t.prototype.start_forging_item = function() {
                if (this.check_open() && this._rare_info.state == n.e_activity_rare_state.wait_forging) {
                    a.syyx_activity_manager.send_activity_event(n.e_activity_event_id.click_rare_start_forging);
                    var t = r.syyx_manager.get_business_config()
                      , e = this._rare_info.config.forging_time;
                    t && t.rare_treasure_forging_time && (e = t.rare_treasure_forging_time.value[0]);
                    var i = this._rare_info.config.get_over_time;
                    t && t.rare_treasure_get_over_time && (i = t.rare_treasure_get_over_time.value[0]),
                    this._rare_info.forging_time = s.syyx_sdk_utils.get_date_timestamp() + e,
                    this._rare_info.get_over_time = s.syyx_sdk_utils.get_date_timestamp() + e + i,
                    this._rare_info.start_forging_time = s.syyx_sdk_utils.get_date_timestamp(),
                    this.check_state(),
                    this.save()
                }
            }
            ,
            t.prototype.video_forging_item = function() {
                var t = r.syyx_manager.get_business_config();
                this._rare_info.config.forging_time,
                t && t.rare_treasure_forging_time && t.rare_treasure_forging_time.value[0];
                var e = this._rare_info.config.get_over_time;
                t && t.rare_treasure_get_over_time && (e = t.rare_treasure_get_over_time.value[0]),
                this._rare_info.forging_time = s.syyx_sdk_utils.get_date_timestamp(),
                this._rare_info.get_over_time = s.syyx_sdk_utils.get_date_timestamp() + e,
                this.check_state(),
                this.save()
            }
            ,
            t.prototype.get_item_reward = function(t) {
                if (this.check_open() && (a.syyx_activity_manager.send_activity_event(n.e_activity_event_id.click_get_rare_reward),
                this.check_state(),
                this._rare_info.state == n.e_activity_rare_state.available)) {
                    var e = this._treasure_config_data[this._rare_info.cur_index].item_id;
                    this._rare_info.compelete_list.push(e);
                    var i = this._treasure_config_data[this._rare_info.cur_index];
                    this.clear_timestamp(),
                    this.check_state(),
                    this.save(),
                    a.syyx_activity_manager.show_treasure_congratulations(i),
                    t && t([{
                        item_id: i.item_id,
                        count: i.num
                    }])
                }
            }
            ,
            t.prototype.check_state = function() {
                if (this.check_open() && this._rare_info)
                    if (this._rare_info.state != n.e_activity_rare_state.active) {
                        if (-1 != this._rare_info.forging_time && -1 != this._rare_info.get_over_time && this._rare_info.state != n.e_activity_rare_state.no_active) {
                            var t = s.syyx_sdk_utils.get_date_timestamp();
                            t <= this._rare_info.forging_time ? this._rare_info.state = n.e_activity_rare_state.forging : t > this._rare_info.forging_time && t <= this._rare_info.get_over_time ? (this._rare_info.state != n.e_activity_rare_state.available && a.syyx_activity_manager.send_activity_event(n.e_activity_event_id.rare_forging_compelete),
                            this._rare_info.state = n.e_activity_rare_state.available) : t > this._rare_info.get_over_time && (this.clear_timestamp(),
                            this.set_next_item())
                        }
                    } else
                        this.set_next_item()
            }
            ,
            t.prototype.clear_timestamp = function() {
                this._rare_info.forging_time = -1,
                this._rare_info.get_over_time = -1,
                this._rare_info.state = n.e_activity_rare_state.active
            }
            ,
            t.prototype.get_data = function() {
                return this.check_state(),
                this._rare_info
            }
            ,
            t.prototype.get_active_game_num = function() {
                var t = r.syyx_manager.get_business_config();
                return t && t.active_rare_treasure_chapter ? t.active_rare_treasure_chapter.value[0] : 0
            }
            ,
            t.prototype.active_activity = function(t) {
                this._rare_info && this._rare_info.state == n.e_activity_rare_state.no_active && (t || (t = a.syyx_activity_manager._game_num),
                t >= this.get_active_game_num() && (this._rare_info.state = n.e_activity_rare_state.active,
                this.check_state(),
                this.save()))
            }
            ,
            t.prototype.check_open = function() {
                var t = Object.keys(this._treasure_config_data).length;
                if (this._rare_info.compelete_list.length == t)
                    return this._rare_info.state = n.e_activity_rare_state.end,
                    !1;
                var e = r.syyx_manager.get_business_config()
                  , i = !1;
                return e && e.open_rare_treasure && (i = 1 == e.open_rare_treasure.value[0]),
                i
            }
            ,
            t.prototype.show_rare_treasure_view = function(t) {
                var e = this;
                if (this.check_open())
                    if (this._rare_info.state != n.e_activity_rare_state.no_active) {
                        if (this._rare_info.is_first) {
                            this._rare_info.is_first = !1,
                            this.save();
                            var i = this._treasure_config_data[0].type
                              , o = {
                                skin: i == n.e_item_type.equip ? "syyx_texture/rare_treasure/icon_xszc_ys" : "syyx_texture/rare_treasure/icon_xszc_yf",
                                desc: i == n.e_item_type.equip ? "syyx_texture/rare_treasure/tet_sxzb_03" : "syyx_texture/rare_treasure/tet_sxzb_04"
                            };
                            return a.syyx_activity_manager.send_activity_event(n.e_activity_event_id.show_congratulations_init_rare),
                            void a.syyx_activity_manager.show_treasure_congratulations(o, function() {
                                a.syyx_activity_manager.send_activity_event(n.e_activity_event_id.close_congratulations_rare),
                                e.show_rare_treasure_view(t)
                            })
                        }
                        _.syyx_sdk_api.create_activity_rare(function(e) {
                            e.show(t)
                        })
                    } else
                        console.log("igc-----rare activity is not available")
            }
            ,
            t.prototype.save = function() {
                s.syyx_sdk_utils.set_item("syyx_rare_treasure_info", this._rare_info)
            }
            ,
            t
        }();
        i.syyx_rare_treasure_manager = c,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/activity_model": "activity_model",
        "../syyx_sdk_api": "syyx_sdk_api",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_activity_manager": "syyx_activity_manager",
        "./syyx_manager": "syyx_manager"
    }],
    syyx_rob_treasure_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ba3d9/zRCJNS54dv5lwmPgd", "syyx_rob_treasure_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_rob_treasure_manager = void 0;
        var n = t("../configs/syyx_sdk_enum")
          , o = t("../model/activity_model")
          , _ = t("../model/model")
          , s = t("../syyx_sdk_api")
          , a = t("../utils/syyx_sdk_utils")
          , r = t("./syyx_activity_manager")
          , c = t("./syyx_manager")
          , l = function() {
            function t() {
                this._rob_info = void 0,
                this._init_compelete = !1,
                this.eight_reward_list = [],
                this.fragment_reward_list = {}
            }
            return t.prototype.load_activity_config = function() {
                var t = this;
                a.syyx_sdk_utils.load_resource(c.syyx_manager.__rob_treasure_config_path, function(e) {
                    t._treasure_config_data = igc.igc_resources_utils.parse_csv(e, "id"),
                    console.log("igc-----rob config is loaded", t._treasure_config_data),
                    a.syyx_sdk_utils.load_resource(c.syyx_manager.__rob_treasure_reward_config_path, function(e) {
                        t._treasure_reward_config_data = igc.igc_resources_utils.parse_csv(e, "id"),
                        t.init_activity(),
                        t.active_activity(),
                        t._init_compelete = !0,
                        console.log("igc-----rob's reward config is loaded", t._treasure_reward_config_data)
                    }, this)
                }, this)
            }
            ,
            t.prototype.init_activity = function() {
                var t = a.syyx_sdk_utils.get_item("syyx_rob_treasure_info");
                t ? this._rob_info = t : (this._rob_info = new o.syyx_rob_treasure_info,
                this._rob_info.need_wait_num = this.get_enter_wait_need_num()),
                this.check_is_same_day(),
                this.save()
            }
            ,
            t.prototype.check_is_same_day = function() {
                var t = this._rob_info.last_timestamp
                  , e = a.syyx_sdk_utils.get_date_timestamp();
                a.syyx_sdk_utils.check_is_same_day(t, e) || (this._rob_info.last_timestamp = e,
                this._rob_info.bomb_data = [],
                this.init_bomb(),
                this.save())
            }
            ,
            t.prototype.use_bomb = function(t) {
                var e = this._rob_info.bomb_data[t];
                if (e.can_use && (e.can_use = !1,
                !e.is_resume)) {
                    var i = this.get_bomb_resume_time();
                    this._rob_info.use_bomb_count <= 2 ? e.resume_timestamp = a.syyx_sdk_utils.get_date_timestamp() + i[this._rob_info.use_bomb_count] : e.resume_timestamp = a.syyx_sdk_utils.get_date_timestamp() + this.get_bomb_resume_jg(this._rob_info.use_bomb_count),
                    this._rob_info.use_bomb_count++,
                    this.save()
                }
            }
            ,
            t.prototype.get_bomb_resume_jg = function(t) {
                var e = this.get_bomb_resume_time()
                  , i = e[1] - e[0]
                  , n = e[2] - e[1];
                return e[0] + Math.ceil(t / 2) * i + Math.floor(t / 2) * n
            }
            ,
            t.prototype.check_bomb_resume = function() {
                var t = this._rob_info.bomb_data;
                for (var e in t)
                    t[e].is_resume || t[e].can_use || a.syyx_sdk_utils.get_date_timestamp() > t[e].resume_timestamp && (t[e].can_use = !0)
            }
            ,
            t.prototype.bomb_box = function(t) {
                t.is_reward && t.state == n.e_rob_grid_reward_state.wait_bomb && (t.state = n.e_rob_grid_reward_state.has_bomb)
            }
            ,
            t.prototype.video_add_bomb = function() {
                var t = this._rob_info.bomb_data;
                for (var e in t)
                    t[e].can_use = !0;
                this._rob_info.use_bomb_count > 3 && (this._rob_info.use_bomb_count -= 3),
                this.save()
            }
            ,
            t.prototype.init_bomb = function() {
                if (0 == this._rob_info.bomb_data.length) {
                    this._rob_info.bomb_data = [];
                    for (var t = 0; t < 3; t++) {
                        var e = new o.syyx_rob_bomb_info;
                        e.index = 0,
                        this._rob_info.bomb_data.push(e)
                    }
                }
            }
            ,
            t.prototype.init_grid = function() {
                this.eight_reward_list = [];
                for (var t = !1, e = [], i = 0; i < 6; i++)
                    for (var _ = 0; _ < 6; _++)
                        this._rob_info.grid_data[i] || (this._rob_info.grid_data[i] = []),
                        this._rob_info.grid_data[i][_] = new o.syyx_rob_reward_item,
                        e.push({
                            i: i,
                            j: _
                        });
                var s = 0;
                for (i = 0; i < 36; i++) {
                    var a = Math.floor(Math.random() * e.length)
                      , r = e[a];
                    if (!(this.check_around_reward(r.i, r.j) >= 2)) {
                        var c = this.check_around_reward(r.i - 1, r.j)
                          , l = this.check_around_reward(r.i + 1, r.j)
                          , d = this.check_around_reward(r.i, r.j - 1)
                          , u = this.check_around_reward(r.i, r.j + 1);
                        if (!(c >= 2 || l >= 2 || d >= 2 || u >= 2)) {
                            this._rob_info.grid_data[r.i][r.j].is_reward = !0,
                            e.splice(a, 1),
                            s++,
                            this.random_reward(s, this._rob_info.grid_data[r.i][r.j]);
                            var p = this._rob_info.grid_data[r.i][r.j].config.type;
                            if (p != n.e_item_type.skin && p != n.e_item_type.equip || t || (t = !0,
                            this._rob_info.grid_data[r.i][r.j].is_miss_bg = !0),
                            8 == s)
                                break
                        }
                    }
                }
            }
            ,
            t.prototype.check_around_reward = function(t, e) {
                var i = 0;
                return this._rob_info.grid_data[t - 1] && this._rob_info.grid_data[t - 1][e] && this._rob_info.grid_data[t - 1][e].is_reward && i++,
                this._rob_info.grid_data[t + 1] && this._rob_info.grid_data[t + 1][e] && this._rob_info.grid_data[t + 1][e].is_reward && i++,
                this._rob_info.grid_data[t] && this._rob_info.grid_data[t][e - 1] && this._rob_info.grid_data[t][e - 1].is_reward && i++,
                this._rob_info.grid_data[t] && this._rob_info.grid_data[t][e + 1] && this._rob_info.grid_data[t][e + 1].is_reward && i++,
                i
            }
            ,
            t.prototype.has_item = function(t) {
                for (var e in this._rob_info.get_list)
                    if (this._rob_info.get_list[e].id == t)
                        return !0;
                return !1
            }
            ,
            t.prototype.has_fragment = function(t) {
                for (var e in this.eight_reward_list)
                    if (this.eight_reward_list[e] == t)
                        return !0;
                for (var i in this._rob_info.get_list)
                    if (this._rob_info.get_list[i].id == t)
                        return !0;
                return !1
            }
            ,
            t.prototype.get_item = function(t) {
                t.state == n.e_rob_grid_reward_state.has_bomb && t.config.type != n.e_item_type.none && (t.state = n.e_rob_grid_reward_state.has_get,
                t.config.type != n.e_item_type.skin && t.config.type != n.e_item_type.equip || (this._rob_info.get_list.push({
                    id: t.item_id,
                    state: n.e_rob_fragment_state.no_inlaid
                }),
                this.save()))
            }
            ,
            t.prototype.check_get_all_item = function() {
                if (15 == this._rob_info.get_list.length) {
                    for (var t in this._rob_info.get_list)
                        if (this._rob_info.get_list[t].state != n.e_rob_fragment_state.inlaid)
                            return !1;
                    return !0
                }
                return !1
            }
            ,
            t.prototype.check_bag_red_point = function() {
                if (0 < this._rob_info.get_list.length && this._rob_info.get_list.length <= 15) {
                    for (var t in this._rob_info.get_list)
                        if (this._rob_info.get_list[t].state != n.e_rob_fragment_state.inlaid)
                            return !0;
                    return !1
                }
                return !1
            }
            ,
            t.prototype.inlaid_fragment = function(t, e) {
                if (this.has_item(t.id)) {
                    for (var i in this._rob_info.get_list)
                        if (this._rob_info.get_list[i].id == t.id && this._rob_info.get_list[i].state == n.e_rob_fragment_state.no_inlaid) {
                            this._rob_info.get_list[i].state = n.e_rob_fragment_state.inlaid;
                            var o = !0
                              , a = this.get_reward_data_list()[t.item_id];
                            for (var c in a)
                                if (!this.check_fragment_is_inlaid(a[c].id)) {
                                    o = !1;
                                    break
                                }
                            o && (r.syyx_activity_manager.show_treasure_congratulations(t),
                            e && e([{
                                item_id: t.item_id,
                                count: t.num
                            }]),
                            s.syyx_sdk_api.load_view(_.syyx_view.activity_bag, function(t) {
                                t.hide && t.hide()
                            }));
                            break
                        }
                    this.save()
                }
            }
            ,
            t.prototype.check_fragment_is_inlaid = function(t) {
                for (var e in this._rob_info.get_list)
                    if (this._rob_info.get_list[e].id == t)
                        return this._rob_info.get_list[e].state == n.e_rob_fragment_state.inlaid;
                return !1
            }
            ,
            t.prototype.get_un_inlaid_tab_index = function() {
                var t = this.get_reward_data_list()
                  , e = 0;
                for (var i in t) {
                    e++;
                    var n = t[i];
                    for (var o in n)
                        if (!this.check_fragment_is_inlaid(n[o].id))
                            return e
                }
                return 1
            }
            ,
            t.prototype.get_random_fragment = function(t) {
                var e = this.get_reward_data_list();
                if (t) {
                    var i = e[t];
                    for (var n in i)
                        if (!this.has_fragment(i[n].id))
                            return i[n].id
                } else {
                    var o = [];
                    for (var n in e)
                        for (var _ in i = e[n])
                            this.has_fragment(i[_].id) || o.push(i[_]);
                    if (o.length > 0)
                        return o[Math.floor(Math.random() * o.length)].id
                }
            }
            ,
            t.prototype.get_pos_id = function(t) {
                for (var e in this._treasure_reward_config_data)
                    if (this._treasure_reward_config_data[e].item_id == t)
                        return this._treasure_reward_config_data[e].id
            }
            ,
            t.prototype.random_reward = function(t, e) {
                if (null == e.item_id) {
                    var i = Math.min(this._rob_info.open_view_num, 4)
                      , o = this._treasure_config_data[i]["box_" + t];
                    e.state = t <= 1 ? n.e_rob_grid_reward_state.has_bomb : n.e_rob_grid_reward_state.wait_bomb;
                    var _ = this.get_reward_data_list()
                      , s = Object.keys(_)[0]
                      , a = Object.keys(_)[1]
                      , r = void 0;
                    if (0 == o.length)
                        if (2 == this._rob_info.open_view_num)
                            (c = this.get_random_fragment(s)) && (r = c);
                        else if (3 == this._rob_info.open_view_num) {
                            var c = this.get_random_fragment(s)
                              , l = this.get_random_fragment(a);
                            c ? r = c : l && (r = l)
                        } else {
                            var d = this.get_random_fragment()
                              , u = Math.random();
                            r = d ? u < .8 ? d : u < .1 ? this.get_pos_id(n.e_item_type.gold) : this.get_pos_id(n.e_item_type.none) : u > .5 ? this.get_pos_id(n.e_item_type.gold) : this.get_pos_id(n.e_item_type.none)
                        }
                    else
                        r = o[0];
                    !r && (r = this.get_pos_id(n.e_item_type.gold)),
                    e.item_id = this._treasure_reward_config_data[r].id,
                    e.config = this._treasure_reward_config_data[r],
                    this.eight_reward_list.push(r)
                }
            }
            ,
            t.prototype.get_reward_data_list = function() {
                if (0 == Object.keys(this.fragment_reward_list).length)
                    for (var t in this._treasure_reward_config_data)
                        if (this._treasure_reward_config_data[t].type == n.e_item_type.skin || this._treasure_reward_config_data[t].type == n.e_item_type.equip) {
                            var e = this._treasure_reward_config_data[t].item_id;
                            this.fragment_reward_list[e] || (this.fragment_reward_list[e] = []),
                            this.fragment_reward_list[e].push(this._treasure_reward_config_data[t])
                        }
                return this.fragment_reward_list
            }
            ,
            t.prototype.get_data = function() {
                return this._rob_info
            }
            ,
            t.prototype.check_is_guide_inlaid = function() {
                return this._rob_info.is_guide_inlaid
            }
            ,
            t.prototype.set_is_guide_inlaid = function() {
                r.syyx_activity_manager.send_activity_event(n.e_activity_event_id.first_click_bag),
                this._rob_info.is_guide_inlaid = !0,
                this.save()
            }
            ,
            t.prototype.show_bag_view = function(t) {
                c.syyx_manager.create_activity_bag(function(e) {
                    e.show(t)
                })
            }
            ,
            t.prototype.show_rob_treasure_view = function(t) {
                var e = this;
                this._rob_info.state != n.e_activity_rare_state.no_active ? c.syyx_manager.create_activity_rob(function(i) {
                    e.add_open_rob_view_num(),
                    e.init_grid(),
                    e.init_bomb(),
                    i.show(t)
                }) : console.log("igc-----rob activity is not available")
            }
            ,
            t.prototype.add_open_rob_view_num = function() {
                this._rob_info.open_view_num++,
                this._rob_info.need_wait_num--,
                this.get_enter_wait_need_num(),
                0 == this._rob_info.need_wait_num && (this._rob_info.wait_compelete_time = a.syyx_sdk_utils.get_date_timestamp() + this.get_wait_time()),
                this.save()
            }
            ,
            t.prototype.get_enter_wait_need_num = function() {
                var t = c.syyx_manager.get_business_config();
                return t && t.active_rob_treasure_enter_wait_num ? t.active_rob_treasure_enter_wait_num.value[0] : 3
            }
            ,
            t.prototype.get_wait_time = function() {
                var t = c.syyx_manager.get_business_config();
                return t && t.active_rob_treasure_resume_time ? t.active_rob_treasure_resume_time.value[0] : 1e4
            }
            ,
            t.prototype.get_active_game_num = function() {
                var t = c.syyx_manager.get_business_config();
                return t && t.active_rob_treasure_chapter ? t.active_rob_treasure_chapter.value[0] : 0
            }
            ,
            t.prototype.active_activity = function(t) {
                this._rob_info && this._rob_info.state == n.e_activity_rare_state.no_active && (t || (t = r.syyx_activity_manager._game_num),
                t >= this.get_active_game_num() && (this._rob_info.state = n.e_activity_rare_state.active))
            }
            ,
            t.prototype.check_open = function() {
                var t = c.syyx_manager.get_business_config();
                return !t || !t.open_rob_treasure || (-1 != this._rob_info.wait_compelete_time && this._rob_info.wait_compelete_time < a.syyx_sdk_utils.get_date_timestamp() && (this._rob_info.need_wait_num = this.get_enter_wait_need_num(),
                this._rob_info.wait_compelete_time = -1),
                this.check_get_all_item() && this._rob_info.state != n.e_activity_rob_state.end && (this._rob_info.state = n.e_activity_rob_state.end,
                this.save()),
                this._rob_info.state != n.e_activity_rob_state.end && 1 == t.open_rob_treasure.value[0])
            }
            ,
            t.prototype.get_bomb_resume_time = function() {
                var t = c.syyx_manager.get_business_config();
                return t && t.active_rob_treasure_bomb_time ? t.active_rob_treasure_bomb_time.value : [45e3, 9e4, 12e4]
            }
            ,
            t.prototype.get_random_gold = function() {
                var t = 100
                  , e = c.syyx_manager.get_business_config();
                if (e && e.active_rob_treasure_gold_num) {
                    var i = e.active_rob_treasure_gold_num.value;
                    t = i[0] + Math.ceil(Math.random() * (i[1] - i[0]))
                }
                return t
            }
            ,
            t.prototype.save = function() {
                a.syyx_sdk_utils.set_item("syyx_rob_treasure_info", this._rob_info)
            }
            ,
            t
        }();
        i.syyx_rob_treasure_manager = l,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/activity_model": "activity_model",
        "../model/model": "model",
        "../syyx_sdk_api": "syyx_sdk_api",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_activity_manager": "syyx_activity_manager",
        "./syyx_manager": "syyx_manager"
    }],
    syyx_sdk_api: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "43f24/rXFNOy5rvA7uQxzfv", "syyx_sdk_api"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_sdk_api = void 0;
        var n = t("./controller/syyx_manager")
          , o = t("./model/model")
          , _ = t("./controller/syyx_adv_manager")
          , s = t("./controller/ad_native_interstitial")
          , a = t("./configs/syyx_sdk_enum")
          , r = t("./configs/syyx_sdk_config")
          , c = t("./controller/syyx_activity_manager")
          , l = function() {
            function t() {}
            return t.init = function(t, e) {
                void 0 === t && (t = null),
                console.log("igc--------------------syyx_apk version" + r.syyx_const.syyx_sdk_version),
                n.syyx_manager.init(t, e)
            }
            ,
            t.login_channel = function(t) {
                n.syyx_manager.login_channel(t)
            }
            ,
            t.init_param = function(t, e) {
                n.syyx_manager.init_param(t, e)
            }
            ,
            t.get_business_data_by_key = function(t) {
                return n.syyx_manager.get_business_data_by_key(t)
            }
            ,
            t.send_user_register = function() {
                n.syyx_manager.send_user_register()
            }
            ,
            t.send_user_login = function() {
                n.syyx_manager.send_user_login()
            }
            ,
            t.send_hall_event = function(t, e, i) {
                void 0 === e && (e = 0),
                void 0 === i && (i = ""),
                n.syyx_manager.send_user_event(t, a.e_stat_event_type.hall, "", "", "", i, "", e, "")
            }
            ,
            t.send_chapter_event = function(t, e, i) {
                if (void 0 === e && (e = void 0),
                void 0 === i && (i = ""),
                cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME) {
                    var o = e ? a.e_chapter_result_type.win : a.e_chapter_result_type.lose;
                    o = 1 == e ? a.e_chapter_result_type.win : 0 == e ? a.e_chapter_result_type.lose : a.e_chapter_result_type.enter_chapter,
                    n.syyx_manager.send_user_event(t, a.e_stat_event_type.chapter, "", "", o, i, "", "", "")
                }
            }
            ,
            t.send_settlement_event = function(t, e, i) {
                void 0 === e && (e = ""),
                void 0 === i && (i = ""),
                n.syyx_manager.send_user_event(t, a.e_stat_event_type.result, "", "", e, i, "", "", "")
            }
            ,
            t.send_other_event = function(t, e, i, o, _, s, a) {
                void 0 === i && (i = ""),
                void 0 === o && (o = ""),
                void 0 === _ && (_ = ""),
                void 0 === s && (s = ""),
                void 0 === a && (a = ""),
                n.syyx_manager.send_user_event(t, e, "", "", i, _, s, o, a)
            }
            ,
            t.is_inited = function() {
                return n.syyx_manager.is_inited()
            }
            ,
            t.is_open = function(t) {
                return n.syyx_manager.is_open(t)
            }
            ,
            t.create_super_power_icon = function(t) {
                return n.syyx_manager.create_super_power_icon(t)
            }
            ,
            t.create_super_power = function(t) {
                return n.syyx_manager.create_super_power(t)
            }
            ,
            t.create_unitgame = function(t) {
                return n.syyx_manager.create_unitgame(t)
            }
            ,
            t.create_uniticon = function(t) {
                return n.syyx_manager.create_uniticon(t)
            }
            ,
            t.create_guess_like = function(t) {
                return n.syyx_manager.create_guess_like(t)
            }
            ,
            t.create_gamebox = function(t) {
                return n.syyx_manager.create_gamebox(t)
            }
            ,
            t.create_leftmoregame = function(t) {
                return n.syyx_manager.create_leftmoregame(t)
            }
            ,
            t.create_rightmoregame = function(t) {
                return n.syyx_manager.create_rightmoregame(t)
            }
            ,
            t.create_native_banner = function(t) {
                return n.syyx_manager.create_native_banner(t)
            }
            ,
            t.create_interstitial = function(t) {
                return n.syyx_manager.create_interstitial(t)
            }
            ,
            t.create_inner_interstitial = function(t) {
                return n.syyx_manager.create_inner_interstitial(t)
            }
            ,
            t.create_native_icon = function(t) {
                return n.syyx_manager.create_native_icon(t)
            }
            ,
            t.create_toast = function(t) {
                return n.syyx_manager.create_toast(t)
            }
            ,
            t.create_activity_turntable = function(t) {
                return n.syyx_manager.create_activity_turntable(t)
            }
            ,
            t.set_turntable_growth_coefficient = function(t) {
                c.syyx_activity_manager._turntable_instance.set_growth_coefficient(t)
            }
            ,
            t.create_activity_box = function(t) {
                return n.syyx_manager.create_activity_box(t)
            }
            ,
            t.hide = function(t) {
                n.syyx_manager.hide(t)
            }
            ,
            t.hide_all_push_view = function() {
                n.syyx_manager.hide_all_push_view()
            }
            ,
            t.hide_all_sdk_view = function() {
                n.syyx_manager.hide_all_sdk_view()
            }
            ,
            t.show = function(t, e, i, o) {
                void 0 === e && (e = -1),
                void 0 === o && (o = 0),
                n.syyx_manager.show(t, e, i, o)
            }
            ,
            t.load_view = function(t, e) {
                return n.syyx_manager.load_view(t, e)
            }
            ,
            t.create_ad = function() {
                return !1
            }
            ,
            t.destroy_ad = function(t, e) {
                return n.syyx_manager.destroy_ad(t, e)
            }
            ,
            t.hide_ad = function(t, e) {
                return n.syyx_manager.hide_ad(t, e)
            }
            ,
            t.report_ad_show = function(t, e) {
                return n.syyx_manager.report_ad_show(t, e)
            }
            ,
            t.report_ad_click = function(t, e) {
                return n.syyx_manager.report_ad_click(t, e)
            }
            ,
            t.get_local_native_data = function(t) {
                return _.syyx_adv_manager.get_local_native_data(t)
            }
            ,
            t.get_channel_ad_id = function(t) {
                return _.syyx_adv_manager.get_channel_ad_id(t)
            }
            ,
            t.show_banner = function(t, e, i, n, o) {
                _.syyx_adv_manager.show_banner(igc.e_ad_type.banner, t, e, i, n, o)
            }
            ,
            t.hide_banner = function() {
                _.syyx_adv_manager.hide_banner()
            }
            ,
            t.show_video = function(t, e, i, o, _, s) {
                r.syyx_const.syyx_sdk_channel !== igc.e_channel_type.web ? n.syyx_manager.show_video(t, e, i, o, _, s) : o && o(null, {
                    isEnded: !0
                })
            }
            ,
            t.show_interstitial = function(t, e, i, o, _) {
                n.syyx_manager.create_ad(igc.e_ad_type.interstitial, t, e, i, o, _)
            }
            ,
            t.show_native_interstitial = function(t, e, i, n, o) {
                cc.sys.platform != cc.sys.OPPO_GAME && cc.sys.platform != cc.sys.VIVO_GAME || _.syyx_adv_manager.show_native_interstitial(igc.e_ad_type.native, t, e, i, n, o)
            }
            ,
            t.hide_native_interstitial = function() {
                s.ad_native_interstitial.hide_native_interstitial_ui()
            }
            ,
            t.preload_native_inner_interstitial = function(t, e, i, n, o) {
                _.syyx_adv_manager.preload_native_inner_interstitial(igc.e_ad_type.native, t, e, i, n, o)
            }
            ,
            t.show_native_inner_interstitial = function(t, e, i, o, _, s) {
                void 0 === s && (s = !0),
                n.syyx_manager.show_native_inner_interstitial(t, e, i, o, _, s)
            }
            ,
            t.click_native_inner_interstitial = function() {
                n.syyx_manager.click_native_inner_interstitial()
            }
            ,
            t.hide_native_inner_interstitial = function() {
                n.syyx_manager.hide_native_inner_interstitial()
            }
            ,
            t.show_native_icon = function(t, e, i, n, o, s) {
                _.syyx_adv_manager.show_native_icon(t, igc.e_ad_type.native, e, i, n, o, s)
            }
            ,
            t.hide_native_icon = function() {
                _.syyx_adv_manager.hide_native_icon()
            }
            ,
            t.support_game_box = function() {
                return n.syyx_manager.support_game_box()
            }
            ,
            t.show_game_banner_box = function(t, e, i, o, _) {
                n.syyx_manager.create_ad(igc.e_ad_type.app_box, t, e, i, o, _, igc.e_ad_app_box_type.banner_box)
            }
            ,
            t.hide_game_banner_box = function(t) {
                n.syyx_manager.destroy_ad(igc.e_ad_type.app_box, t, igc.e_ad_app_box_type.banner_box)
            }
            ,
            t.show_game_portal_box = function(t, e, i, o, _, s) {
                n.syyx_manager.show_game_portal_box(t, e, i, o, _, s)
            }
            ,
            t.show_app_box = function(t, e, i, o, _) {
                n.syyx_manager.create_ad(igc.e_ad_type.app_box, t, e, i, o, _)
            }
            ,
            t.show_block = function(t, e, i, n, o, s) {
                _.syyx_adv_manager.show_block(t, igc.e_ad_type.block, e, i, n, o, s)
            }
            ,
            t.hide_block = function(t) {
                _.syyx_adv_manager.hide_block(t)
            }
            ,
            t.hide_all_block = function() {
                _.syyx_adv_manager.hide_all_block()
            }
            ,
            t.check_can_add_desktop = function() {
                return n.syyx_manager.check_can_add_desktop()
            }
            ,
            t.check_is_add_desktop = function(t, e) {
                return n.syyx_manager.check_is_add_desktop(t, e)
            }
            ,
            t.add_desktop = function(t, e, i, o) {
                return n.syyx_manager.add_desktop(t, e, i, o)
            }
            ,
            t.on_show = function(t) {
                return n.syyx_manager.on_show(t)
            }
            ,
            t.on_hide = function(t) {
                return n.syyx_manager.on_hide(t)
            }
            ,
            t.get_system_info_sync = function() {
                return n.syyx_manager.get_system_info_sync()
            }
            ,
            t.get_launch_options_sync = function() {
                var t = n.syyx_manager.get_launch_options_sync()
                  , e = new o.launch_options;
                return e.scene = t.scene || "",
                e.query = t.query || {},
                e.referrerInfo = t.referrerInfo || {},
                e.entryDataHash = t.entryDataHash || {},
                e.extra = t.extra || {},
                e
            }
            ,
            t.exit_mini_program = function() {
                return n.syyx_manager.exit_mini_program()
            }
            ,
            t.navigate_to_mini_program = function(t, e) {
                return n.syyx_manager.navigate_to_mini_program(t, e)
            }
            ,
            t.share = function(t, e, i, o, _, s) {
                return n.syyx_manager.share(t, e, i, o, _, s)
            }
            ,
            t.on_share_app_message = function(t, e) {
                return n.syyx_manager.on_share_app_message(t, e)
            }
            ,
            t.start_record_screen = function(t, e, i) {
                return n.syyx_manager.start_record_screen(t, e, i)
            }
            ,
            t.stop_record_screen = function() {
                return n.syyx_manager.stop_record_screen()
            }
            ,
            t.pause_record_screen = function() {
                return n.syyx_manager.pause_record_screen()
            }
            ,
            t.resume_record_screen = function() {
                return n.syyx_manager.resume_record_screen()
            }
            ,
            t.share_record_screen = function(t, e, i, o, _, s, a) {
                return n.syyx_manager.share_record_screen(t, e, i, o, _, s, a)
            }
            ,
            t.get_record_video = function() {
                return n.syyx_manager.get_record_video()
            }
            ,
            t.set_auto_scale = function(t, e) {
                n.syyx_manager.set_auto_scale(t, e)
            }
            ,
            t.create_congratulations = function(t) {
                return n.syyx_manager.create_congratulations(t)
            }
            ,
            t.create_activity_icon = function(t) {
                return n.syyx_manager.create_activity_icon(t)
            }
            ,
            t.create_activity_enter = function(t) {
                return n.syyx_manager.create_activity_enter(t)
            }
            ,
            t.create_activity_rare = function(t) {
                return n.syyx_manager.create_activity_rare(t)
            }
            ,
            t.create_activity_rob = function(t) {
                return n.syyx_manager.create_activity_rob(t)
            }
            ,
            t.create_activity_bag = function(t) {
                return n.syyx_manager.create_activity_bag(t)
            }
            ,
            t.add_game_num = function(t) {
                return c.syyx_activity_manager.add_game_num(t)
            }
            ,
            t.get_is_new_player = function() {
                return n.syyx_manager.get_is_new_player()
            }
            ,
            t.get_syyx_app_id = function() {
                return n.syyx_manager.get_syyx_app_id()
            }
            ,
            t.syyx_sdk_channel_type = 2,
            t.syyx_sdk_multual_push_open = !0,
            t
        }();
        i.syyx_sdk_api = l,
        cc._RF.pop()
    }
    , {
        "./configs/syyx_sdk_config": "syyx_sdk_config",
        "./configs/syyx_sdk_enum": "syyx_sdk_enum",
        "./controller/ad_native_interstitial": "ad_native_interstitial",
        "./controller/syyx_activity_manager": "syyx_activity_manager",
        "./controller/syyx_adv_manager": "syyx_adv_manager",
        "./controller/syyx_manager": "syyx_manager",
        "./model/model": "model"
    }],
    syyx_sdk_config: [function(t, e, i) {
        "use strict";
        var n;
        cc._RF.push(e, "6a660kouH9LHJs5I4q8x25q", "syyx_sdk_config"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_const = i.e_syyx_sdk_publish_type = i.init_config = void 0,
        i.init_config = {
            web: {
                app_id: 6e5,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 1,
                channel_id: 0,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1
            },
            oppo_qg: {
                app_id: 6e5,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 2,
                channel_id: 1,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1
            },
            vivo_qg: {
                app_id: 6e5,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 4,
                channel_id: 2,
                engin_type: 1,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1,
                needAuth: !1
            },
            tt: {
                app_id: 6e5,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 8,
                channel_id: 10,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1,
                needAuth: !1
            },
            qq: {
                app_id: 6e5,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 5,
                channel_id: 8,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1,
                needAuth: !1
            },
            apk: {
                app_id: 6e5,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 7,
                channel_id: 11,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1
            },
            wx: {
                app_id: 6e5,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 5,
                channel_id: 8,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1,
                needAuth: !1
            },
            hw_qg: {
                app_id: 103490213,
                ad_app_id: 0,
                app_version: "1.0.0.0",
                pkg_name: "",
                channel_type: 10,
                channel_id: 14,
                engin_type: 2,
                engin_version: "2.0.10",
                log_level: 0,
                pay_key: "",
                login_key: "",
                plat_key: "123",
                stat_key: "",
                pay_url: "",
                pay_query_url: "",
                pay_last_query_url: "",
                login_url: "",
                ws_url: "",
                ws_cert_url: "",
                stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/gameEvent",
                batch_stat_event_url: "https://tpfdata.syyx.com:35002/bigdata/record/batchGameEvent",
                configUrl: "https://tpf-common-config-api.syyx.com:37110/api/config",
                configAppSecKey: "",
                retry_connect: !1,
                basic_config_version: "",
                is_login_soon: !1,
                is_auto_relogin_full: !1,
                has_red_envelop: !1,
                has_multual_push: !1,
                needAuth: !1
            },
            _debug: !0
        },
        function(t) {
            t[t.in = 1] = "in",
            t[t.out = 2] = "out"
        }(n = i.e_syyx_sdk_publish_type || (i.e_syyx_sdk_publish_type = {})),
        i.syyx_const = {
            syyx_sdk_version: "2.0.0.13",
            syyx_sdk_publish: n.out,
            syyx_sdk_channel: igc.e_channel_type.oppo_qg,
            syyx_sdk_tag: "2021_03_17_10_30",
            remote_multual_push_key: "multual_push_v3",
            remote_super_power_key: "multual_push_v4",
            local_multual_push_version: "syyx_multual_push_version",
            local_super_power_version: "local_super_power_version",
            local_super_power_data: "syyx_super_power_data",
            local_multual_push_data: "syyx_multual_push_data",
            remote_business_config_key: "business_config",
            local_business_config_version: "syyx_business_config_version",
            local_business_config_data: "syyx_business_config_data"
        },
        cc._RF.pop()
    }
    , {}],
    syyx_sdk_enum: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "fc2a6XHmnJK65cXBf0IwQF/", "syyx_sdk_enum"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.e_activity_event_id = i.e_ui_type = i.e_item_type = i.e_rob_fragment_state = i.e_rob_grid_reward_state = i.e_activity_rob_state = i.e_rare_skeleton_action = i.e_activity_rare_state = i.e_activity_type = i.e_active_type = i.e_activity_event_type = i.e_ad_id = i.syyx_prefab_path = i.e_settlement_stat_type = i.e_hall_stat_type = i.e_chapter_result_type = i.e_stat_event_id = i.e_stat_event_type = i.e_ad_native_click_pro_type = i.e_ad_native_state = i.e_ad_native_type = i.e_syyx_sdk_push_ui_place = i.e_syyx_sdk_multual_push_type = i.e_super_power_event_id = i.e_syyx_sdk_point_type = void 0,
        function(t) {
            t[t.multual_push_show = 300] = "multual_push_show",
            t[t.multual_push_game_show = 302] = "multual_push_game_show",
            t[t.multual_push_game_click = 303] = "multual_push_game_click",
            t[t.multual_push_side_button_click = 311] = "multual_push_side_button_click",
            t[t.multual_push_game_enter_game = 306] = "multual_push_game_enter_game",
            t[t.super_power = 20001] = "super_power"
        }(i.e_syyx_sdk_point_type || (i.e_syyx_sdk_point_type = {})),
        function(t) {
            t[t.click_enter_icon = 1] = "click_enter_icon",
            t[t.click_start_test_btn = 2] = "click_start_test_btn",
            t[t.show_icon = 3] = "show_icon",
            t[t.click_select_icon_btn = 4] = "click_select_icon_btn",
            t[t.click_left_close_btn = 5] = "click_left_close_btn",
            t[t.show_name = 6] = "show_name",
            t[t.click_select_name_btn = 7] = "click_select_name_btn",
            t[t.show_result_view = 8] = "show_result_view",
            t[t.close_result_view = 9] = "close_result_view"
        }(i.e_super_power_event_id || (i.e_super_power_event_id = {})),
        function(t) {
            t[t.gif = 1] = "gif",
            t[t.side = 2] = "side",
            t[t.guess = 3] = "guess",
            t[t.popular = 4] = "popular",
            t[t.button = 5] = "button",
            t[t.banner_box = 6] = "banner_box",
            t[t.portal_box = 7] = "portal_box",
            t[t.icon = 8] = "icon"
        }(i.e_syyx_sdk_multual_push_type || (i.e_syyx_sdk_multual_push_type = {})),
        function(t) {
            t[t.main_city = 1] = "main_city",
            t[t.revive = 2] = "revive",
            t[t.success = 3] = "success",
            t[t.fail = 4] = "fail"
        }(i.e_syyx_sdk_push_ui_place || (i.e_syyx_sdk_push_ui_place = {})),
        function(t) {
            t[t.native_banner = 1] = "native_banner",
            t[t.native_inner_interstitial = 2] = "native_inner_interstitial",
            t[t.native_interstitial = 3] = "native_interstitial",
            t[t.native_icon = 4] = "native_icon"
        }(i.e_ad_native_type || (i.e_ad_native_type = {})),
        function(t) {
            t[t.none = 0] = "none",
            t[t.need_show = 1] = "need_show",
            t[t.show = 2] = "show",
            t[t.click = 3] = "click"
        }(i.e_ad_native_state || (i.e_ad_native_state = {})),
        function(t) {
            t[t.none = 1] = "none",
            t[t.cooling = 2] = "cooling",
            t[t.active = 3] = "active"
        }(i.e_ad_native_click_pro_type || (i.e_ad_native_click_pro_type = {})),
        function(t) {
            t.hall = "10001",
            t.chapter = "10002",
            t.result = "10003"
        }(i.e_stat_event_type || (i.e_stat_event_type = {})),
        function(t) {
            t.none = "0",
            t.win_click_native_adv = "10001",
            t.lose_click_native_adv = "10002"
        }(i.e_stat_event_id || (i.e_stat_event_id = {})),
        function(t) {
            t.enter_chapter = "1000000",
            t.win = "1000001",
            t.lose = "1000002"
        }(i.e_chapter_result_type || (i.e_chapter_result_type = {})),
        (i.e_hall_stat_type || (i.e_hall_stat_type = {})).enter_hall = "1",
        (i.e_settlement_stat_type || (i.e_settlement_stat_type = {})).enter_settlement = "1",
        function(t) {
            t.unit = "syyx_prefab/multual_push/ui_unit_game",
            t.left_more_game = "syyx_prefab/multual_push/ui_left_more_game",
            t.game_box = "syyx_prefab/multual_push/ui_game_box",
            t.guess_like = "syyx_prefab/multual_push/ui_guess_like",
            t.right_more_game = "syyx_prefab/multual_push/ui_right_more_game",
            t.native_banner = "syyx_prefab/ad/ui_banner",
            t.inner_interstitial = "syyx_prefab/ad/ui_inner_interstitial",
            t.interstitial = "syyx_prefab/ad/ui_interstitial",
            t.interstitial_h = "syyx_prefab/ad/ui_interstitial_h",
            t.native_icon = "syyx_prefab/ad/ui_native_icon",
            t.unit_icon = "syyx_prefab/multual_push/ui_unit_icon",
            t.common_box = "syyx_prefab/common/ui_common_box",
            t.get_reward = "syyx_prefab/common/ui_get_reward",
            t.common_turntable = "syyx_prefab/common/ui_turntable",
            t.toast = "syyx_prefab/ad/ui_toast",
            t.activity_icon = "syyx_prefab/activity/ui_activity_icon",
            t.activity_enter = "syyx_prefab/activity/ui_activity_enter",
            t.activity_rare = "syyx_prefab/activity/ui_activity_rare",
            t.activity_rob = "syyx_prefab/activity/ui_activity_rob",
            t.activity_bag = "syyx_prefab/activity/ui_activity_bag",
            t.congratulations = "syyx_prefab/activity/ui_congratulations",
            t.super_power_icon = "syyx_prefab/super_power/ui_super_icon",
            t.super_power = "syyx_prefab/super_power/ui_super_power",
            t.super_power_h = "syyx_prefab/super_power/ui_super_power_h"
        }(i.syyx_prefab_path || (i.syyx_prefab_path = {})),
        function(t) {
            t.interstitial_hall = "10100001",
            t.video_add_gold = "10200001",
            t.video_add_diamond = "10200001",
            t.video_forging = "10200001",
            t.video_luck_draw = "10200001",
            t.native_interstitial_hall = "10301001",
            t.native_inner_interstitial_success = "10302001",
            t.native_banner = "10304001",
            t.native_icon = "10304002",
            t.banner_hall = "10400001",
            t.appbox_hall = "10600001",
            t.game_banner_box = "10600002",
            t.game_portal_box = "10600003",
            t.bottom_block = "10900001",
            t.left_block = "10900002",
            t.right_block = "10900003"
        }(i.e_ad_id || (i.e_ad_id = {})),
        (i.e_activity_event_type || (i.e_activity_event_type = {})).activity = "20000",
        function(t) {
            t[t.level = 1] = "level",
            t[t.chapter = 2] = "chapter"
        }(i.e_active_type || (i.e_active_type = {})),
        function(t) {
            t[t.rare_treasure = 0] = "rare_treasure",
            t[t.rob_treasure = 1] = "rob_treasure",
            t[t.rob_turntable = 2] = "rob_turntable",
            t[t.common_box = 3] = "common_box",
            t[t.red_packet_rain = 4] = "red_packet_rain"
        }(i.e_activity_type || (i.e_activity_type = {})),
        function(t) {
            t[t.no_active = 0] = "no_active",
            t[t.active = 1] = "active",
            t[t.wait_forging = 2] = "wait_forging",
            t[t.forging = 3] = "forging",
            t[t.available = 4] = "available",
            t[t.end = 5] = "end"
        }(i.e_activity_rare_state || (i.e_activity_rare_state = {})),
        function(t) {
            t.wait_forging = "idle_01",
            t.forging = "idle_02",
            t.wait_customized = "idle_03",
            t.customized = "idle_04"
        }(i.e_rare_skeleton_action || (i.e_rare_skeleton_action = {})),
        function(t) {
            t[t.no_active = 0] = "no_active",
            t[t.active = 1] = "active",
            t[t.end = 5] = "end"
        }(i.e_activity_rob_state || (i.e_activity_rob_state = {})),
        function(t) {
            t[t.wait_bomb = 0] = "wait_bomb",
            t[t.has_bomb = 1] = "has_bomb",
            t[t.has_get = 2] = "has_get"
        }(i.e_rob_grid_reward_state || (i.e_rob_grid_reward_state = {})),
        function(t) {
            t[t.no_inlaid = 0] = "no_inlaid",
            t[t.inlaid = 1] = "inlaid"
        }(i.e_rob_fragment_state || (i.e_rob_fragment_state = {})),
        function(t) {
            t[t.none = 0] = "none",
            t[t.gold = 1] = "gold",
            t[t.diamond = 2] = "diamond",
            t[t.skin = 3] = "skin",
            t[t.equip = 4] = "equip"
        }(i.e_item_type || (i.e_item_type = {})),
        function(t) {
            t[t.ad = 1] = "ad",
            t[t.multual_push = 2] = "multual_push",
            t[t.activity = 3] = "activity"
        }(i.e_ui_type || (i.e_ui_type = {})),
        function(t) {
            t.click_hall_enter_icon = "1",
            t.show_enter_view = "2",
            t.click_enter_rare = "3",
            t.click_enter_rob = "4",
            t.show_congratulations_init_rare = "5",
            t.close_congratulations_rare = "6",
            t.click_rare_start_forging = "7",
            t.rare_forging_compelete = "8",
            t.click_get_rare_reward = "9",
            t.close_rare_reward_view = "10",
            t.show_rob_view = "11",
            t.this_time_first_bomb = "12",
            t.this_time_resume_bomb = "13",
            t.first_click_bag = "14",
            t.show_congratulations_rob_reward = "15",
            t.show_rare_view = "16"
        }(i.e_activity_event_id || (i.e_activity_event_id = {})),
        cc._RF.pop()
    }
    , {}],
    syyx_sdk_utils: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "abeaaOecZpIHIRvM5TgixKt", "syyx_sdk_utils"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_sdk_utils = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../model/model")
          , _ = t("../configs/syyx_sdk_enum")
          , s = function() {
            function t() {}
            return t.log = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                console.log("syyx_sdk: ", JSON.stringify(t))
            }
            ,
            t.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                n.init_config._debug && console.error("syyx_sdk: ", JSON.stringify(t))
            }
            ,
            t.randomByWeight = function(t) {
                for (var e = 0, i = t.length - 1; i >= 0; --i)
                    e += (o = t[i]).weight;
                var n = Math.random() * e;
                for (i = t.length - 1; i >= 0; --i) {
                    var o, _ = (o = t[i]).weight;
                    if (n <= _)
                        return o;
                    n -= _
                }
            }
            ,
            t.get_app_info = function(t, e) {
                var i = t.displayMode
                  , n = 1 == i ? t.gameList1 : t.gameList2;
                return 1 == i ? n[e %= n.length] : this.randomByWeight(n)
            }
            ,
            t.get_random_number = function(t) {
                return t[0] + Math.floor(Math.random() * (t[1] - t[0]))
            }
            ,
            t.set_default_scale = function(t) {
                var e = this.get_screen_ratio();
                e *= t.node.scaleX,
                t.node.setScale(e, e),
                console.log("igc-----screen ratio is ", e)
            }
            ,
            t.set_scale_with_height = function(t, e) {
                if (window.Laya) {
                    var i = e / t.height;
                    t.scale(i, i)
                }
            }
            ,
            t.set_scale_with_width = function(t, e) {
                if (window.Laya) {
                    var i = e / t.width;
                    t.scale(i, i)
                }
            }
            ,
            t.get_screen_ratio = function() {
                if (window.cc) {
                    if (cc.view.getVisibleSize().width > cc.view.getVisibleSize().height)
                        return cc.view.getVisibleSize().height / 1080;
                    if (cc.view.getVisibleSize().width <= cc.view.getVisibleSize().height)
                        return cc.view.getVisibleSize().width / 1080
                }
                return 1
            }
            ,
            t.get_largest_zorder = function() {
                return 32767
            }
            ,
            t.convert_view_to_push = function(t) {
                switch (t) {
                case o.syyx_view.unit:
                    return _.e_syyx_sdk_multual_push_type.button;
                case o.syyx_view.left_more_game:
                case o.syyx_view.right_more_game:
                    return _.e_syyx_sdk_multual_push_type.side;
                case o.syyx_view.guess_like:
                    return _.e_syyx_sdk_multual_push_type.guess;
                case o.syyx_view.game_box:
                    return _.e_syyx_sdk_multual_push_type.popular;
                case o.syyx_view.unit_icon:
                    return _.e_syyx_sdk_multual_push_type.icon
                }
            }
            ,
            t.get_size = function(t) {
                return window.Laya ? {
                    width: t.width * t.scaleX,
                    height: t.height * t.scaleY
                } : {}
            }
            ,
            t.get_stage = function() {
                if (!window.Laya)
                    return window.cc.director.getScene();
                window.Laya.stage
            }
            ,
            t.load_resource = function(t, e, i, n) {
                void 0 === i && (i = void 0),
                window.Laya ? window.Laya.loader.load(t, window.Laya.Handler.create(i, function(i) {
                    i ? e && e(i) : console.error("igc-----load_resource fail", t)
                })) : window.cc.loader.loadRes(t, function(i, o) {
                    var _ = o;
                    -1 != t.indexOf("json") && (_ = o.json),
                    i ? n && n() : o ? e && e(_) : (console.error("igc-----load_resource fail", t),
                    n && n())
                })
            }
            ,
            t.load_resource_texture = function(t, e) {
                window.cc && cc.loader.loadRes(t, cc.SpriteFrame, function(i, n) {
                    null == i && cc.isValid(e) && cc.isValid(e.node) ? e.spriteFrame = n : console.error(t + " is not find", i)
                })
            }
            ,
            t.set_texture_url = function(t, e, i) {
                if (n.syyx_const.syyx_sdk_channel !== igc.e_channel_type.web && window.cc) {
                    var o = e
                      , _ = "jpg";
                    -1 != e.indexOf(".png") && (_ = "png");
                    try {
                        window.cc.assetManager && window.cc.assetManager.loadRemote ? window.cc.assetManager.loadRemote(o, function(e, n) {
                            if (e)
                                console.error("igc-----load texture fail1111", e),
                                i && i();
                            else if (window.cc.isValid(t) && n) {
                                var o = new window.cc.SpriteFrame(n);
                                t.spriteFrame = o
                            }
                        }) : window.cc.loader.load({
                            url: o,
                            type: _
                        }, function(e, n) {
                            if (e)
                                console.error("igc-----load texture fail", e),
                                i && i();
                            else if (window.cc.isValid(t) && n) {
                                var o = new window.cc.SpriteFrame(n);
                                t.spriteFrame = o
                            }
                        })
                    } catch (s) {
                        i && i()
                    }
                }
            }
            ,
            t.format_remote_texture_url = function(t) {
                if (t) {
                    var e = t.indexOf(".jpg")
                      , i = t.indexOf(".png");
                    return -1 != e ? t.substring(0, e + 4) : -1 != i ? t.substring(0, i + 4) : t
                }
                return t
            }
            ,
            t.is_texture_url = function(t) {
                return -1 != t.indexOf(".bmp") || -1 != t.indexOf(".jpg") || -1 != t.indexOf(".jpeg") || -1 != t.indexOf(".flic") || -1 != t.indexOf(".emf") || -1 != t.indexOf(".ico") || -1 != t.indexOf(".png") || -1 != t.indexOf(".tif") || -1 != t.indexOf(".gif") || -1 != t.indexOf(".pcx") || -1 != t.indexOf(".tga") || -1 != t.indexOf(".exif") || -1 != t.indexOf(".fpx") || -1 != t.indexOf(".svg") || -1 != t.indexOf(".psd") || -1 != t.indexOf(".cdr") || -1 != t.indexOf(".pcd") || -1 != t.indexOf(".dxf") || -1 != t.indexOf(".ufo") || -1 != t.indexOf(".eps") || -1 != t.indexOf(".ai") || -1 != t.indexOf(".raw") || -1 != t.indexOf(".WMF") || -1 != t.indexOf(".webp") || -1 != t.indexOf(".avif")
            }
            ,
            t.replace_data = function(t, e) {
                if (t || e) {
                    for (var i in e)
                        e[i] && (t[i] = e[i]);
                    console.log("-------"),
                    console.log(e)
                } else
                    console.log("the object is wrong")
            }
            ,
            t.set_item = function(t, e) {
                var i = JSON.stringify(e);
                localStorage.setItem(t, i)
            }
            ,
            t.get_item = function(t) {
                var e = localStorage.getItem(t);
                return "" != e ? JSON.parse(e) : null
            }
            ,
            t.random_get = function(t, e) {
                void 0 === e && (e = !1);
                var i = t.length;
                if (0 == i)
                    throw console.error("try to get a member from an empty array"),
                    new Error;
                var n = Math.floor(Math.random() * i)
                  , o = t[n];
                return e && t.splice(n, 1),
                o
            }
            ,
            t.check_is_same_day = function(t, e) {
                var i = new Date(t)
                  , n = new Date(e);
                return i.getDay() == n.getDay() && i.getMonth() == n.getMonth() && i.getFullYear() == n.getFullYear()
            }
            ,
            t.get_date_timestamp = function() {
                return (new Date).getTime()
            }
            ,
            t.changeToMb = function(t, e) {
                if (void 0 === e && (e = 1),
                t < 1e4)
                    return t + "";
                var i = parseInt(t);
                return i < 1e3 ? Math.floor(i) + "" : i < 1e6 ? (i / 1e3).toFixed(e) + "k" : i < 1e9 ? (i / 1e6).toFixed(e) + "m" : i < 1e12 ? (i / 1e9).toFixed(e) + "b" : (i / 1e12).toFixed(e) + "t"
            }
            ,
            t.formatTime = function(t) {
                if (t <= 0)
                    return "00:00:00";
                var e = Math.floor(t / 3600)
                  , i = Math.floor(t / 60 % 60)
                  , n = Math.floor(t % 60)
                  , o = e + ""
                  , _ = i + ""
                  , s = n + "";
                return e < 10 && (o = "0" + e),
                i < 10 && (_ = "0" + i),
                n < 10 && (s = "0" + n),
                o + ":" + _ + ":" + s
            }
            ,
            t.formatTime_mmss = function(t) {
                if (t <= 0)
                    return "00:00";
                var e = Math.floor(t / 60 % 60)
                  , i = Math.floor(t % 60)
                  , n = e + ""
                  , o = i + "";
                return e < 10 && (n = "0" + e),
                i < 10 && (o = "0" + i),
                n + ":" + o
            }
            ,
            t.set_grey = function(t, e) {
                for (var i = t.getComponentsInChildren(cc.Sprite), n = 0; n < i.length; n++)
                    i[n].setState(e)
            }
            ,
            t.get_random_int = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }
            ,
            t.shuffle = function(t) {
                for (var e = t.slice(), i = 0; i < e.length; i++) {
                    var n = this.get_random_int(0, i)
                      , o = e[i];
                    e[i] = e[n],
                    e[n] = o
                }
                return e
            }
            ,
            t.preload_native_texture = function(t) {
                if (window.Laya)
                    window.Laya.loader.load(t, window.Laya.Handler.create(this, function(e) {
                        e && console.log("igc----- preload native_texture success----\x3e", t)
                    }));
                else {
                    var e = "jpg";
                    -1 != t.indexOf(".png") && (e = "png"),
                    window.cc.assetManager && window.cc.assetManager.loadRemote ? window.cc.assetManager.loadRemote(t, function(e, i) {
                        i && console.log("igc----- preload native_texture success----\x3e", t)
                    }) : window.cc.loader.load({
                        url: t,
                        type: e
                    }, function(e, i) {
                        i && console.log("igc----- preload native_texture success----\x3e", t)
                    })
                }
            }
            ,
            t
        }();
        i.syyx_sdk_utils = s,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model"
    }],
    syyx_super_power_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e5acbgs02dEnLjmAgcmthh5", "syyx_super_power_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.syyx_super_power_manager = void 0;
        var n = t("../configs/syyx_sdk_config")
          , o = t("../configs/syyx_sdk_enum")
          , _ = t("../model/model")
          , s = t("../utils/syyx_sdk_utils")
          , a = t("./syyx_manager")
          , r = function() {
            function t() {}
            return t.load_super_power_config = function() {
                var t, e = a.syyx_manager.get_app_version(), i = a.syyx_manager.get_syyx_app_id() + this.__super_power_version, o = localStorage.getItem(i);
                e != o && (localStorage.removeItem(n.syyx_const.local_super_power_data),
                localStorage.setItem(n.syyx_const.local_super_power_version, null),
                localStorage.setItem(i, e),
                console.log("igc----- app_version change clear super_power localStorage")),
                e == o && (t = localStorage.getItem(n.syyx_const.local_super_power_data)) && (this.super_power_data = JSON.parse(t),
                console.log("igc----- load_super_power_config use old super_power_config 1"));
                var _ = localStorage.getItem(n.syyx_const.local_super_power_version);
                igc.igc_main.instance.tpf_sdk.getTpfConfig().httpGetconfig(n.syyx_const.remote_super_power_key, _, Date.now(), this.on_load_super_power.bind(this))
            }
            ,
            t.on_load_super_power = function(t, e, i, o) {
                !0 === t ? (this.super_power_data = JSON.parse(o),
                localStorage.setItem(n.syyx_const.local_super_power_version, i),
                localStorage.setItem(n.syyx_const.local_super_power_data, o),
                this.__remote_super_power_inited = !0,
                this.power_test_compelete = !1,
                localStorage.setItem("power_test_compelete", "0")) : localStorage.getItem(n.syyx_const.local_super_power_data) && (this.__remote_super_power_inited = !0,
                console.log("igc----- load_super_power_config use old super_power_config 2")),
                this.super_power_data && 1 == this.super_power_data.test_switch || (this.power_test_compelete = "1" == localStorage.getItem("power_test_compelete"))
            }
            ,
            t.set_power_test_compelete = function() {
                this.super_power_data && 1 == this.super_power_data.test_switch || (this.create_super_power_icon(function(t) {
                    t && t.hide && t.hide()
                }),
                this.create_super_power(function(t) {
                    t && t.hide && t.hide()
                }),
                this.power_test_compelete = !0,
                localStorage.setItem("power_test_compelete", "1"))
            }
            ,
            t.create_super_power_icon = function(t) {
                this.power_test_compelete || a.syyx_manager.create_view(_.syyx_view.super_power_icon, t)
            }
            ,
            t.create_super_power = function(t) {
                this.power_test_compelete || a.syyx_manager.create_view(_.syyx_view.super_power, t)
            }
            ,
            t.get_icon_role_list = function() {
                var t = this.super_power_data.role_icon;
                return t && t.length > 0 ? t : []
            }
            ,
            t.get_icon_list = function() {
                var t = []
                  , e = this.super_power_data.icon_list;
                for (var i in e)
                    t.push(e[i]);
                if (t && t.length > 0) {
                    var n = t;
                    return this.is_open_six_icon_model() || (n = t.splice(0, 3)),
                    this.is_order_list() ? n : s.syyx_sdk_utils.shuffle(n)
                }
                return []
            }
            ,
            t.get_name_list = function() {
                var t = this.super_power_data.name_list;
                return t && t.length > 0 ? this.is_order_list() ? t : s.syyx_sdk_utils.shuffle(t) : []
            }
            ,
            t.get_name_icon = function() {
                return this.super_power_data.name_icon
            }
            ,
            t.get_start_icon = function() {
                var t = this.super_power_data.start_icon;
                return t && t.length > 0 ? t[Math.floor(Math.random() * t.length)] : {}
            }
            ,
            t.get_select_result = function(t, e) {
                void 0 === t && (t = void 0),
                void 0 === e && (e = void 0);
                var i = this.super_power_data.icon_name_result;
                for (var n in i)
                    if (t && e) {
                        if (i[n].selection[0] == t)
                            return i[n]
                    } else if (t) {
                        if (i[n].selection[0] == t)
                            return i[n]
                    } else if (i[n].selection[1] == e)
                        return i[n];
                return i[i.length - 1]
            }
            ,
            t.is_open = function() {
                if (!this.super_power_data)
                    return !1;
                var t = this.super_power_data;
                return !(!t || 1 != t.open_switch)
            }
            ,
            t.is_open_icon_test = function() {
                var t = this.super_power_data;
                return !(!t || 1 != t.icon_switch)
            }
            ,
            t.is_order_list = function() {
                var t = this.super_power_data;
                return !(!t || 1 != t.is_order)
            }
            ,
            t.is_open_name_test = function() {
                var t = this.super_power_data;
                return !(!t || 1 != t.name_switch)
            }
            ,
            t.is_open_six_icon_model = function() {
                var t = this.super_power_data;
                return !(!t || 1 != t.six_model_switch)
            }
            ,
            t.is_show_close_btn = function() {
                var t = this.super_power_data;
                return !(!t || 1 != t.show_close_btn)
            }
            ,
            t.is_test_model = function() {
                var t = this.super_power_data;
                return !(!t || 1 != t.test_switch)
            }
            ,
            t.get_super_power_config = function() {
                return this.super_power_data
            }
            ,
            t.send_super_power_event = function(t, e) {
                void 0 === e && (e = ""),
                a.syyx_manager.send_user_event(t, o.e_syyx_sdk_point_type.super_power, "", "", e + "", "", "", "", "")
            }
            ,
            t.__super_power_version = "__super_power_version",
            t.__remote_super_power_inited = !1,
            t.super_power_data = null,
            t.power_test_compelete = !1,
            t
        }();
        i.syyx_super_power_manager = r,
        cc._RF.pop()
    }
    , {
        "../configs/syyx_sdk_config": "syyx_sdk_config",
        "../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../model/model": "model",
        "../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_manager": "syyx_manager"
    }],
    syyx_turntable_manager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ecbfeq1O9BAWLm/R2rBD0Mz", "syyx_turntable_manager"),
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = t("../../configs/syyx_sdk_enum")
          , o = t("../../model/activity_model")
          , _ = t("../../utils/syyx_sdk_utils")
          , s = t("../syyx_activity_manager")
          , a = t("../syyx_manager")
          , r = function() {
            function t() {
                this._first_reward = void 0,
                this._random_reward_list = [],
                this._best_reward_list = [],
                this._turntable_info = new o.syyx_turntable_info,
                this._business_config_data = void 0
            }
            return t.prototype.load_activity_config = function() {
                var t = this
                  , e = a.syyx_manager.get_business_config()
                  , i = !1;
                e && e.open_turntable_activity && (i = 1 == e.open_turntable_activity.value[0]),
                i ? (this._item_config = s.syyx_activity_manager._common_item_config,
                _.syyx_sdk_utils.load_resource(a.syyx_manager.__activity_turntable_config_path, function(e) {
                    t._turntable_config = igc.igc_resources_utils.parse_csv(e, "id"),
                    console.log("igc-----\u8f6c\u76d8\u914d\u7f6e\u8868\u52a0\u8f7d\u6210\u529f", t._turntable_config),
                    t._business_config_data = a.syyx_manager.get_business_config(),
                    t.init_activity()
                }, t)) : console.log("igc----- turntable activity is close")
            }
            ,
            t.prototype.check_open = function() {
                if (!this._item_config)
                    return !1;
                var t = a.syyx_manager.get_business_config()
                  , e = !1;
                return t && t.open_turntable_activity && (e = 1 == t.open_turntable_activity.value[0]),
                e
            }
            ,
            t.prototype.init_activity = function() {
                var t = _.syyx_sdk_utils.get_item("syyx_turntable_info");
                t ? (this._turntable_info = t,
                this.check_is_same_day()) : (this._turntable_info = new o.syyx_turntable_info,
                this.reset_turntable_info()),
                this.init_reward_list(),
                this.save()
            }
            ,
            t.prototype.check_is_same_day = function() {
                var t = this._turntable_info.last_timestamp
                  , e = _.syyx_sdk_utils.get_date_timestamp();
                _.syyx_sdk_utils.check_is_same_day(t, e) || (this.reset_turntable_info(),
                this.save())
            }
            ,
            t.prototype.reset_turntable_info = function() {
                this._turntable_info.max_today_count = this.get_today_max_count(),
                this._turntable_info.today_count = 0,
                this._turntable_info.need_count = this.get_need_count(),
                this._turntable_info.last_timestamp = _.syyx_sdk_utils.get_date_timestamp()
            }
            ,
            t.prototype.is_has_reward = function(t) {
                for (var e in this._turntable_info.get_reward_list)
                    if (t == this._turntable_info.get_reward_list[e])
                        return !0;
                return !1
            }
            ,
            t.prototype.get_best_reward_info = function() {
                this.init_reward_list();
                var t = void 0;
                if (this._best_reward_list.length > 0) {
                    for (var e in t = this._best_reward_list[0],
                    this._best_reward_list)
                        t.get_count > this._best_reward_list[e].get_count && (t = this._best_reward_list[e]);
                    return t
                }
                console.log("igc-----\u6700\u4f73\u5956\u52b1\u4e3a\u7a7a \u8bf7\u68c0\u67e5\u76f8\u5173\u914d\u7f6e\u8868\u914d\u7f6e")
            }
            ,
            t.prototype.get_reward = function() {
                if (this.check_can_play() || !(this._turntable_info.max_today_count <= this._turntable_info.today_count)) {
                    var t = void 0;
                    if (this.init_reward_list(),
                    0 == this._turntable_info.play_count)
                        t = this._first_reward;
                    else if (1 == this.get_need_count())
                        t = this.get_best_reward_info();
                    else {
                        var e = 0;
                        for (var i in this._random_reward_list)
                            e += this._random_reward_list[i].pro;
                        var n = e * Math.random()
                          , o = 0;
                        for (var i in this._random_reward_list)
                            if (n <= (o += this._random_reward_list[i].pro)) {
                                t = this._random_reward_list[i];
                                break
                            }
                    }
                    return console.log("igc-----\u672c\u6b21\u8f6c\u76d8\u968f\u673a\u7684\u5956\u52b1\u4e3a", t),
                    t
                }
                console.log("igc----- \u4eca\u65e5\u8f6c\u76d8\u6b21\u6570\u5df2\u7528\u5c3d")
            }
            ,
            t.prototype.update_turntable_info = function(t) {
                this.save_has_get_reward_list(t.item_id),
                t.get_count++,
                this._turntable_info.play_count++,
                this._turntable_info.today_count++,
                this.save()
            }
            ,
            t.prototype.show_congradulations = function(t, e) {
                if (t.need_congratulations) {
                    var i = {
                        icon: t.icon,
                        count: t.item_count,
                        item_id: t.item_id,
                        desc: t.item_config.desc
                    };
                    s.syyx_activity_manager.show_get_reward(i)
                }
                e && e()
            }
            ,
            t.prototype.save_has_get_reward_list = function(t) {
                for (var e in this._turntable_info.get_reward_list)
                    if (this._turntable_info.get_reward_list[e] == t)
                        return;
                this._turntable_info.get_reward_list.push(t)
            }
            ,
            t.prototype.get_reward_list = function() {
                var t = 1;
                for (var e in this._turntable_config) {
                    this._turntable_info.reward_info[e] || (this._turntable_info.reward_info[e] = new o.syyx_turntable_reward_info);
                    var i = this._turntable_config[e]
                      , _ = this._turntable_info.reward_info[e]
                      , s = i.normal_reward;
                    0 == _.get_count && i.first_reward && (s = i.first_reward),
                    _.index = t++,
                    _.is_first = 1 == this._turntable_config[e].is_first,
                    _.is_video = 1 == this._turntable_config[e].is_video,
                    _.item_config = this._item_config[s.item_id],
                    _.pro = i.pro,
                    _.item_id = s.item_id,
                    _.item_type = this._item_config[s.item_id].type,
                    _.item_type == n.e_item_type.gold || _.item_type == n.e_item_type.diamond ? _.item_count = s.count * this._turntable_info.growth_coefficient : _.item_count = s.count,
                    _.icon = this._item_config[s.item_id].skin,
                    _.tag_icon = this._item_config[s.item_id].tag_icon || "",
                    _.need_congratulations = this._item_config[s.item_id].need_congratulations
                }
                return this._turntable_info.reward_info
            }
            ,
            t.prototype.init_reward_list = function() {
                this._random_reward_list = [],
                this._best_reward_list = [];
                var t = this.get_reward_list();
                for (var e in t)
                    1 == t[e].is_video ? this._best_reward_list.push(t[e]) : this._random_reward_list.push(t[e]),
                    1 == t[e].is_first && (this._first_reward = t[e])
            }
            ,
            t.prototype.get_today_max_count = function() {
                var t = 12;
                return this._business_config_data && this._business_config_data.turntable_today_max_count && (t = this._business_config_data.turntable_today_max_count.value[0]),
                t
            }
            ,
            t.prototype.get_today_surplus_count = function() {
                return this.get_today_max_count() - this._turntable_info.today_count
            }
            ,
            t.prototype.get_need_count = function() {
                var t = 3;
                return this._business_config_data && this._business_config_data.turntable_reset_count && (t = this._business_config_data.turntable_reset_count.value[0]),
                this._turntable_info.today_count % t > 0 ? t - this._turntable_info.today_count % t : t
            }
            ,
            t.prototype.get_reset_count = function() {
                var t = 3;
                return this._business_config_data && this._business_config_data.turntable_reset_count && (t = this._business_config_data.turntable_reset_count.value[0]),
                t
            }
            ,
            t.prototype.set_growth_coefficient = function(t) {
                t > 0 && (this._turntable_info.growth_coefficient = t,
                this.save())
            }
            ,
            t.prototype.check_is_first_play = function() {
                return 0 == this._turntable_info.play_count
            }
            ,
            t.prototype.check_can_play = function() {
                return !(this._turntable_info.max_today_count <= this._turntable_info.today_count && (console.log("igc----- \u4eca\u65e5\u8f6c\u76d8\u6b21\u6570\u5df2\u7528\u5c3d"),
                1))
            }
            ,
            t.prototype.save = function() {
                _.syyx_sdk_utils.set_item("syyx_turntable_info", this._turntable_info)
            }
            ,
            t
        }();
        i.default = r,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../model/activity_model": "activity_model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "../syyx_activity_manager": "syyx_activity_manager",
        "../syyx_manager": "syyx_manager"
    }],
    syyx_ui_activity_bag: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6760ckgo1JC3ZnE3GoRXWEN", "syyx_ui_activity_bag");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../controller/syyx_activity_manager")
          , a = t("../../utils/syyx_sdk_utils")
          , r = t("./syyx_ui_activity_fragment_item")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.fragment_item = null,
                e.txt_name = null,
                e.btn_close = null,
                e.frag_1 = null,
                e.frag_2 = null,
                e.frag_3 = null,
                e.frag_4 = null,
                e.frag_5 = null,
                e.btn_right = null,
                e.btn_left = null,
                e.game_box = null,
                e.shouzhi = null,
                e.fragmeng_list = null,
                e.icon_fragment = null,
                e.fragment_box = null,
                e.cur_index = 1,
                e.box_item_list = [],
                e.box_item_view_list = [],
                e.is_move_fragment = !1,
                e
            }
            return o(e, t),
            e.prototype.onEnable = function() {}
            ,
            e.prototype.show = function(t) {
                if (this.node && !this.node.parent) {
                    this.call_back = t || void 0;
                    var e = a.syyx_sdk_utils.get_largest_zorder();
                    this.node.parent = a.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = Math.max(0, e - 1),
                    this.on_show(t)
                }
            }
            ,
            e.prototype.on_show = function(t) {
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_right.on(cc.Node.EventType.TOUCH_END, this.on_click_right, this),
                this.btn_left.on(cc.Node.EventType.TOUCH_END, this.on_click_left, this),
                this.game_box.on(cc.Node.EventType.TOUCH_MOVE, this.on_box_move, this),
                this.game_box.on(cc.Node.EventType.TOUCH_END, this.on_box_up, this),
                this.game_box.on(cc.Node.EventType.TOUCH_CANCEL, this.on_box_up, this),
                this.shouzhi.active = !1,
                this.call_back = t,
                this.cur_index = s.syyx_activity_manager._rob_treasure_instance.get_un_inlaid_tab_index(),
                this.update_veiw(),
                this.game_box.getComponent(cc.Animation).play("beibao_jiantou")
            }
            ,
            e.prototype.update_veiw = function() {
                var t = this;
                this.is_move_fragment = !1;
                var e = s.syyx_activity_manager._rob_treasure_instance.get_reward_data_list()
                  , i = Object.keys(e);
                this.cur_fragment_list = e[i[this.cur_index - 1]];
                for (var n = 0; n < 5; n++) {
                    a.syyx_sdk_utils.load_resource_texture(this.cur_fragment_list[n].fragment_skin, this["frag_" + (n + 1)].getComponent(cc.Sprite));
                    var o = s.syyx_activity_manager._rob_treasure_instance.check_fragment_is_inlaid(this.cur_fragment_list[n].id);
                    this["frag_" + (n + 1)].active = o
                }
                this.btn_left.active = 1 != this.cur_index,
                this.btn_right.active = 3 != this.cur_index,
                this.txt_name.string = this.cur_fragment_list[0].name;
                for (var _ = function(e) {
                    var i = void 0;
                    c.box_item_list[e] ? i = c.box_item_list[e] : (i = cc.instantiate(c.fragment_item),
                    c.fragmeng_list.addChild(i));
                    var n = i.getComponent(r.default);
                    n.update_view(c.cur_fragment_list[e], c.call_back),
                    4 != e || s.syyx_activity_manager._rob_treasure_instance.check_is_guide_inlaid() || setTimeout(function() {
                        t.check_need_guide()
                    }, 1e3),
                    c.box_item_list[e] || (c.box_item_list.push(i),
                    c.box_item_view_list.push(n),
                    i.on(cc.Node.EventType.TOUCH_START, function() {
                        t.on_choose_frgament_item(e)
                    }, c))
                }, c = this, l = 0; l < 5; l++)
                    _(l)
            }
            ,
            e.prototype.on_choose_frgament_item = function(t) {
                var e = s.syyx_activity_manager._rob_treasure_instance.check_fragment_is_inlaid(this.cur_fragment_list[t].id)
                  , i = s.syyx_activity_manager._rob_treasure_instance.has_item(this.cur_fragment_list[t].id);
                !e && i && this.box_item_list[t] && (this.is_move_fragment = !0,
                this.cur_fragment_index = t,
                a.syyx_sdk_utils.load_resource_texture(this.cur_fragment_list[t].fragment_skin, this.icon_fragment),
                this.box_item_view_list[t].set_alpha(.5))
            }
            ,
            e.prototype.on_click_right = function() {
                this.cur_index = Math.min(3, ++this.cur_index),
                this.update_veiw()
            }
            ,
            e.prototype.on_click_left = function() {
                this.cur_index = Math.max(1, --this.cur_index),
                this.update_veiw()
            }
            ,
            e.prototype.on_box_move = function(t) {
                if (this.is_move_fragment) {
                    var e = {
                        x: t.touch.getLocationX(),
                        y: t.touch.getLocationY()
                    };
                    this.icon_fragment.node.active = !0,
                    this.icon_fragment.node.setPosition(e.x, e.y),
                    e.x < this.node.width / 2 + this.game_box.width / 2 && e.x > (this.node.width - this.game_box.width) / 2 && e.y < this.node.height / 2 + this.game_box.height / 2 && e.y > (cc.view.getVisibleSize().height - this.game_box.height) / 2 || this.recovery_view()
                }
            }
            ,
            e.prototype.on_box_up = function(t) {
                var e = t.touch.getLocationX()
                  , i = t.touch.getLocationY();
                e < this.node.width / 2 + this.game_box.width / 2 && e > (this.node.width - this.game_box.width) / 2 && i < this.node.height / 2 + this.game_box.height / 2 && i > (cc.view.getVisibleSize().height - this.game_box.height) / 2 && e < this.node.width / 2 + this.fragment_box.width / 2 && e > (this.node.width - this.fragment_box.width) / 2 && i < this.node.height / 2 + this.fragment_box.height / 2 && i > (cc.view.getVisibleSize().height - this.fragment_box.height) / 2 && (this.box_item_view_list[this.cur_fragment_index] && this.box_item_view_list[this.cur_fragment_index].inlaid_fragment(),
                this.update_veiw()),
                this.recovery_view()
            }
            ,
            e.prototype.recovery_view = function() {
                this.box_item_view_list[this.cur_fragment_index] && this.box_item_view_list[this.cur_fragment_index].set_alpha(1),
                this.is_move_fragment = !1,
                this.icon_fragment.node.active = !1
            }
            ,
            e.prototype.check_need_guide = function() {
                var t, e = this, i = function(i) {
                    if (n.box_item_view_list[i].can_inlaid()) {
                        var o = n.box_item_list[i];
                        t = o.convertToWorldSpaceAR(new cc.Vec2(0,0)),
                        n.shouzhi.active = !0,
                        n.shouzhi.setPosition(t.x, t.y),
                        s.syyx_activity_manager._rob_treasure_instance.set_is_guide_inlaid(),
                        e.shouzhi.getComponent(cc.Animation).play("beibaoshou_dian");
                        var _ = n.fragment_box.convertToWorldSpaceAR(new cc.Vec2(0,0));
                        return setTimeout(function() {
                            var t = cc.moveTo(1, cc.v2(_.x, _.y))
                              , i = cc.sequence(t, cc.callFunc(function() {
                                e.shouzhi.getComponent(cc.Animation).play("beibaoshou_fang"),
                                setTimeout(function() {
                                    e.shouzhi.active = !1
                                }, 1e3)
                            }));
                            e.shouzhi.runAction(i)
                        }, 1e3),
                        {
                            value: void 0
                        }
                    }
                }, n = this;
                for (var o in this.box_item_list) {
                    var _ = i(o);
                    if ("object" == typeof _)
                        return _.value
                }
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide()
            }
            ,
            e.prototype.on_hide = function() {
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_right.off(cc.Node.EventType.TOUCH_END, this.on_click_right, this),
                this.btn_left.off(cc.Node.EventType.TOUCH_END, this.on_click_left, this),
                this.game_box.off(cc.Node.EventType.TOUCH_MOVE, this.on_box_move, this),
                this.game_box.off(cc.Node.EventType.TOUCH_END, this.on_box_up, this),
                this.game_box.off(cc.Node.EventType.TOUCH_CANCEL, this.on_box_up, this),
                this.game_box.getComponent(cc.Animation).stop("beibao_jiantou")
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([d(cc.Prefab)], e.prototype, "fragment_item", void 0),
            _([d(cc.Label)], e.prototype, "txt_name", void 0),
            _([d(cc.Node)], e.prototype, "btn_close", void 0),
            _([d(cc.Node)], e.prototype, "frag_1", void 0),
            _([d(cc.Node)], e.prototype, "frag_2", void 0),
            _([d(cc.Node)], e.prototype, "frag_3", void 0),
            _([d(cc.Node)], e.prototype, "frag_4", void 0),
            _([d(cc.Node)], e.prototype, "frag_5", void 0),
            _([d(cc.Node)], e.prototype, "btn_right", void 0),
            _([d(cc.Node)], e.prototype, "btn_left", void 0),
            _([d(cc.Node)], e.prototype, "game_box", void 0),
            _([d(cc.Node)], e.prototype, "shouzhi", void 0),
            _([d(cc.Node)], e.prototype, "fragmeng_list", void 0),
            _([d(cc.Sprite)], e.prototype, "icon_fragment", void 0),
            _([d(cc.Node)], e.prototype, "fragment_box", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_ui_activity_fragment_item": "syyx_ui_activity_fragment_item"
    }],
    syyx_ui_activity_bomb_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c1fe2NfymhEZZObvfOh42h3", "syyx_ui_activity_bomb_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../controller/syyx_activity_manager")
          , a = t("../../utils/syyx_sdk_utils")
          , r = cc._decorator
          , c = r.ccclass
          , l = r.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon_bomb = null,
                e.time_node = null,
                e.txt_time = null,
                e
            }
            return o(e, t),
            e.prototype.update_view = function(t) {
                var e = t.can_use ? "syyx_texture/rob_treasure/icon_dbqb_zd" : "syyx_texture/rob_treasure/icon_dbqb_hzd";
                if (a.syyx_sdk_utils.load_resource_texture(e, this.icon_bomb),
                this.time_node.active = !1,
                t.is_resume || t.can_use)
                    this.txt_time.string = "";
                else {
                    this.time_node.active = !0,
                    s.syyx_activity_manager._rob_treasure_instance.check_bomb_resume();
                    var i = t.resume_timestamp - a.syyx_sdk_utils.get_date_timestamp();
                    this.txt_time.string = a.syyx_sdk_utils.formatTime_mmss(i / 1e3)
                }
            }
            ,
            e.prototype.set_alpha = function(t) {
                this.icon_bomb.node.opacity = t
            }
            ,
            _([l(cc.Sprite)], e.prototype, "icon_bomb", void 0),
            _([l(cc.Node)], e.prototype, "time_node", void 0),
            _([l(cc.Label)], e.prototype, "txt_time", void 0),
            _([c], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_activity_enter_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d7609+m/q5HlK6gMjIUVBIB", "syyx_ui_activity_enter_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(e, t),
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    syyx_ui_activity_enter: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "32f2aJEwS1JeJBcVbkJxEoT", "syyx_ui_activity_enter");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../syyx_sdk_api")
          , c = t("../../utils/syyx_sdk_utils")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn_close = null,
                e.activity_list = null,
                e.item_prefab = null,
                e.item_num = 3,
                e.enter_list = [],
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                if (a.syyx_activity_manager.is_inited()) {
                    if (this.node && !this.node.parent) {
                        this.node.width = cc.view.getVisibleSize().width,
                        this.node.height = cc.view.getVisibleSize().height,
                        this.call_back = t || void 0;
                        var e = c.syyx_sdk_utils.get_largest_zorder();
                        this.node.parent = c.syyx_sdk_utils.get_stage(),
                        this.node.zIndex = Math.max(0, e - 1),
                        this.call_back = t,
                        this.on_show()
                    }
                } else
                    console.log("igc----- syyx_ui_activity_enter: sdk's activity mananger is not initialized so that can not show")
            }
            ,
            e.prototype.on_show = function() {
                for (var t = this, e = 1; e <= this.item_num; e++) {
                    var i = window.cc.instantiate(this.item_prefab);
                    i.name = "box" + e,
                    this.activity_list.addChild(i)
                }
                var n = a.syyx_activity_manager.get_active_game_num(s.e_activity_type.rob_treasure)
                  , o = a.syyx_activity_manager.get_active_game_num(s.e_activity_type.rob_treasure);
                this.enter_list = [],
                n < o ? (this.enter_list.push(s.e_activity_type.rare_treasure),
                this.enter_list.push(s.e_activity_type.rob_treasure),
                this.enter_list.push(-1)) : (this.enter_list.push(s.e_activity_type.rob_treasure),
                this.enter_list.push(s.e_activity_type.rare_treasure),
                this.enter_list.push(-1)),
                this.update_list(),
                this.update_func = setInterval(function() {
                    t.update_list()
                }, 1e3),
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.show_enter_view)
            }
            ,
            e.prototype.update_list = function() {
                this.refresh()
            }
            ,
            e.prototype.refresh = function() {
                for (var t = 1; t <= this.item_num; t++)
                    this.render_item(t)
            }
            ,
            e.prototype.contact_items = function() {
                for (var t = 1; t < this.item_num; t++) {
                    var e = "box" + t;
                    this.activity_list.getChildByName(e).off("click", function() {}, this)
                }
            }
            ,
            e.prototype.render_item = function(t) {
                var e = this
                  , i = "box" + t
                  , n = this.activity_list.getChildByName(i)
                  , o = n.getChildByName("icon_bg")
                  , _ = n.getChildByName("desc_box")
                  , r = _.getChildByName("txt_desc").getComponent(cc.Label)
                  , l = n.getChildByName("icon_red")
                  , d = n.getChildByName("icon_tab")
                  , u = n.getComponent(cc.Button)
                  , p = this.enter_list[t - 1] == s.e_activity_type.rare_treasure;
                if (!(t <= 2))
                    return c.syyx_sdk_utils.load_resource_texture("syyx_texture/activity_enter/box_rk_jqqd", o.getComponent(cc.Sprite)),
                    r.string = "",
                    _.active = !1,
                    l.active = !1,
                    void (d.active = !1);
                var y = p ? "syyx_texture/activity_enter/box_rk_xszb" : "syyx_texture/activity_enter/box_rk_dbqb";
                if (c.syyx_sdk_utils.load_resource_texture(y, o.getComponent(cc.Sprite)),
                _.active = !1,
                p) {
                    var h = a.syyx_activity_manager._rare_treasure_instance.get_data();
                    if (a.syyx_activity_manager._rare_treasure_instance.check_open()) {
                        if (h.state == s.e_activity_rare_state.no_active) {
                            var f = a.syyx_activity_manager._rare_treasure_instance._treasure_config_data[0].active_type
                              , g = a.syyx_activity_manager.get_active_game_num(s.e_activity_type.rare_treasure)
                              , v = a.syyx_activity_manager.get_cur_game_num();
                            _.active = !0,
                            r.string = f == s.e_active_type.chapter ? g - v + "\u5c40\u89e3\u9501" : g + "\u7ea7\u89e3\u9501",
                            u.interactable && (u.interactable = !1,
                            c.syyx_sdk_utils.set_grey(n, 1))
                        } else if (h.state == s.e_activity_rare_state.wait_forging)
                            r.string = "",
                            u.interactable || (u.interactable = !0,
                            c.syyx_sdk_utils.set_grey(n, 0));
                        else if (h.state == s.e_activity_rare_state.forging || h.state == s.e_activity_rare_state.available) {
                            var m = h.get_over_time - c.syyx_sdk_utils.get_date_timestamp();
                            _.active = !0,
                            r.string = "\u91cd\u7f6e" + c.syyx_sdk_utils.formatTime(m / 1e3),
                            u.interactable || (u.interactable = !0,
                            c.syyx_sdk_utils.set_grey(n, 0))
                        } else
                            h.state == s.e_activity_rare_state.end && (_.active = !0,
                            r.string = "\u6d3b\u52a8\u5df2\u7ed3\u675f",
                            u.interactable && (u.interactable = !1,
                            c.syyx_sdk_utils.set_grey(n, 1)));
                        l.active = h.state > s.e_activity_rare_state.no_active && h.state < s.e_activity_rare_state.end,
                        d.active = h.state > s.e_activity_rare_state.no_active && h.state < s.e_activity_rare_state.end
                    } else
                        _.active = !0,
                        r.string = "\u6d3b\u52a8\u5df2\u7ed3\u675f",
                        l.active = !1,
                        d.active = !1
                } else if (_.active = !0,
                a.syyx_activity_manager._rob_treasure_instance.check_open()) {
                    var b = a.syyx_activity_manager._rob_treasure_instance.get_data();
                    b.need_wait_num,
                    b.state == s.e_activity_rob_state.no_active ? (f = a.syyx_activity_manager._rob_treasure_instance._treasure_reward_config_data[1].active_type,
                    g = a.syyx_activity_manager.get_active_game_num(s.e_activity_type.rob_treasure),
                    v = a.syyx_activity_manager.get_cur_game_num(),
                    r.string = f == s.e_active_type.chapter ? g - v + "\u5c40\u89e3\u9501" : g + "\u7ea7\u89e3\u9501",
                    u.interactable = !1,
                    c.syyx_sdk_utils.set_grey(n, 1)) : b.state == s.e_activity_rob_state.active ? (_.active = !1,
                    u.interactable = !0,
                    c.syyx_sdk_utils.set_grey(n, 0),
                    r.string = "") : (u.interactable = !0,
                    c.syyx_sdk_utils.set_grey(n, 0),
                    l.active = !1,
                    d.active = !1,
                    r.string = "\u6d3b\u52a8\u5df2\u7ed3\u675f")
                } else
                    r.string = "\u6d3b\u52a8\u5df2\u7ed3\u675f",
                    u.interactable = !1,
                    c.syyx_sdk_utils.set_grey(n, 1),
                    l.active = !1,
                    d.active = !1;
                n.on("click", function() {
                    e.on_click_item(t)
                }, this)
            }
            ,
            e.prototype.on_click_item = function(t) {
                if (this.enter_list[t - 1] == s.e_activity_type.rare_treasure) {
                    var e = a.syyx_activity_manager._rare_treasure_instance.get_data();
                    e.state == s.e_activity_rare_state.no_active ? r.syyx_sdk_api.create_toast("\u6d3b\u52a8\u672a\u89e3\u9501") : e.state == s.e_activity_rare_state.end ? r.syyx_sdk_api.create_toast("\u6d3b\u52a8\u5df2\u7ed3\u675f") : (a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.click_enter_rare),
                    a.syyx_activity_manager._rare_treasure_instance.show_rare_treasure_view(this.call_back))
                } else {
                    var i = a.syyx_activity_manager._rob_treasure_instance.get_data();
                    i.state == s.e_activity_rob_state.no_active ? r.syyx_sdk_api.create_toast("\u6d3b\u52a8\u672a\u89e3\u9501") : i.state == s.e_activity_rob_state.active ? (a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.click_enter_rob),
                    a.syyx_activity_manager._rob_treasure_instance.show_rob_treasure_view(this.call_back)) : r.syyx_sdk_api.create_toast("\u6d3b\u52a8\u5df2\u7ed3\u675f")
                }
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide()
            }
            ,
            e.prototype.on_hide = function() {
                this.update_func && clearInterval(this.update_func),
                this.contact_items(),
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([u(cc.Node)], e.prototype, "btn_close", void 0),
            _([u(cc.Node)], e.prototype, "activity_list", void 0),
            _([u(cc.Prefab)], e.prototype, "item_prefab", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_activity_fragment_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e47e0qL8Z1DJJt3q21BVYiM", "syyx_ui_activity_fragment_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../controller/syyx_activity_manager")
          , a = t("../../utils/syyx_sdk_utils")
          , r = cc._decorator
          , c = r.ccclass
          , l = r.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.txt_index = null,
                e.icon_fragment = null,
                e.bg = null,
                e
            }
            return o(e, t),
            e.prototype.update_view = function(t, e) {
                this.config = t,
                this.call_back = e;
                var i = s.syyx_activity_manager._rob_treasure_instance.has_item(t.id)
                  , n = s.syyx_activity_manager._rob_treasure_instance.check_fragment_is_inlaid(t.id);
                !i || n ? a.syyx_sdk_utils.set_grey(this.bg, 1) : a.syyx_sdk_utils.set_grey(this.bg, 0),
                this.set_alpha(1),
                this.txt_index.string = i ? "1" : "0",
                a.syyx_sdk_utils.load_resource_texture(t.fragment_skin, this.icon_fragment)
            }
            ,
            e.prototype.can_inlaid = function() {
                var t = s.syyx_activity_manager._rob_treasure_instance.has_item(this.config.id)
                  , e = s.syyx_activity_manager._rob_treasure_instance.check_fragment_is_inlaid(this.config.id);
                return t && !e
            }
            ,
            e.prototype.set_alpha = function(t) {
                this.bg.opacity = 255 / (1 / t)
            }
            ,
            e.prototype.inlaid_fragment = function() {
                s.syyx_activity_manager._rob_treasure_instance.inlaid_fragment(this.config, this.call_back)
            }
            ,
            _([l(cc.Label)], e.prototype, "txt_index", void 0),
            _([l(cc.Sprite)], e.prototype, "icon_fragment", void 0),
            _([l(cc.Node)], e.prototype, "bg", void 0),
            _([c], e)
        }(cc.Component);
        i.default = d,
        cc._RF.pop()
    }
    , {
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_activity_icon: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "d09b1SKb8VEYqrbXwq/bxoN", "syyx_ui_activity_icon");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../controller/syyx_manager")
          , c = t("../../utils/syyx_sdk_utils")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn_activity = null,
                e.btn_rare_treasure = null,
                e.icon_rate_activity_red = null,
                e.icon_activity_red = null,
                e.active_desc_box = null,
                e.time_box = null,
                e.txt_active = null,
                e.txt_timestamp = null,
                e
            }
            return o(e, t),
            e.prototype.onEnable = function() {
                this.btn_activity.on(cc.Node.EventType.TOUCH_END, this.on_click_activity, this),
                this.btn_rare_treasure.on(cc.Node.EventType.TOUCH_END, this.on_click_treasure, this)
            }
            ,
            e.prototype.onDisable = function() {
                this.btn_activity.off(cc.Node.EventType.TOUCH_END, this.on_click_activity, this),
                this.btn_rare_treasure.off(cc.Node.EventType.TOUCH_END, this.on_click_treasure, this)
            }
            ,
            e.prototype.show = function(t, e) {
                if (this.node && !this.node.parent) {
                    this.node.width = cc.view.getVisibleSize().width,
                    this.node.height = cc.view.getVisibleSize().height;
                    var i = c.syyx_sdk_utils.get_largest_zorder();
                    this.node.parent = c.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = Math.max(0, i - 1),
                    this.show_rare = t || !0,
                    this.call_back = e || void 0,
                    this.on_show()
                }
            }
            ,
            e.prototype.on_show = function() {
                var t = this;
                if (this.open_info = a.syyx_activity_manager.get_activity_open(),
                this.open_info[s.e_activity_type.rare_treasure] || this.open_info[s.e_activity_type.rob_treasure]) {
                    this.icon_activity_red.active = !0,
                    this.check();
                    var e = this;
                    this.check_func = setInterval(function() {
                        e.check()
                    }, 1e3)
                } else
                    this.icon_activity_red.active = !1,
                    this.btn_rare_treasure.active = !1,
                    this.active_desc_box.active = !1,
                    this.time_box.active = !1;
                this.scale_func = setInterval(function() {
                    var e = (new Date).getTime() % .4;
                    t.icon_rate_activity_red.setScale(1 + e),
                    t.icon_activity_red.setScale(1 + e)
                }, 200)
            }
            ,
            e.prototype.check = function() {
                var t = a.syyx_activity_manager._rare_treasure_instance.get_data();
                if (a.syyx_activity_manager._rare_treasure_instance.check_open() && t.state == s.e_activity_rare_state.forging && this.show_rare) {
                    var e = a.syyx_activity_manager._rare_treasure_instance._treasure_config_data[1].type == s.e_item_type.equip ? "syyx_texture/activity_enter/icon_rk_dz1" : "syyx_texture/activity_enter/icon_rk_dz";
                    if (c.syyx_sdk_utils.load_resource_texture(e, this.btn_rare_treasure.getComponent(cc.Sprite)),
                    this.btn_rare_treasure.active = !0,
                    this.time_box.active = !1,
                    this.txt_timestamp.string = "",
                    t.state == s.e_activity_rare_state.forging) {
                        this.time_box.active = !0;
                        var i = t.forging_time - c.syyx_sdk_utils.get_date_timestamp();
                        i > 0 && (this.txt_timestamp.string = c.syyx_sdk_utils.formatTime(i / 1e3))
                    }
                } else
                    this.btn_rare_treasure.active = !1;
                var n = a.syyx_activity_manager.get_active_game_num(s.e_activity_type.rob_treasure)
                  , o = a.syyx_activity_manager.get_active_game_num(s.e_activity_type.rob_treasure)
                  , _ = Math.min(n, o);
                this.active_desc_box.active = a.syyx_activity_manager.get_cur_game_num() < _;
                var r = a.syyx_activity_manager._rare_treasure_instance._treasure_config_data[0].active_type;
                this.txt_active.string = r == s.e_active_type.chapter ? _ - a.syyx_activity_manager.get_cur_game_num() + "\u5c40\u89e3\u9501" : _ + "\u7ea7\u89e3\u9501"
            }
            ,
            e.prototype.on_click_activity = function() {
                var t = this;
                a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.click_hall_enter_icon),
                r.syyx_manager.create_activity_enter(function(e) {
                    e.node.parent || e.show(t.call_back)
                })
            }
            ,
            e.prototype.update = function() {}
            ,
            e.prototype.on_click_treasure = function() {
                a.syyx_activity_manager._rare_treasure_instance.show_rare_treasure_view(this.call_back)
            }
            ,
            e.prototype.on_hide = function() {
                this.check_func && clearInterval(this.check_func),
                this.scale_func && clearInterval(this.scale_func)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([u(cc.Node)], e.prototype, "btn_activity", void 0),
            _([u(cc.Node)], e.prototype, "btn_rare_treasure", void 0),
            _([u(cc.Node)], e.prototype, "icon_rate_activity_red", void 0),
            _([u(cc.Node)], e.prototype, "icon_activity_red", void 0),
            _([u(cc.Node)], e.prototype, "active_desc_box", void 0),
            _([u(cc.Node)], e.prototype, "time_box", void 0),
            _([u(cc.Label)], e.prototype, "txt_active", void 0),
            _([u(cc.Label)], e.prototype, "txt_timestamp", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_activity_rare: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a772eXMVVFAVrQopkcwqxCa", "syyx_ui_activity_rare");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../controller/syyx_manager")
          , c = t("../../utils/syyx_sdk_utils")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn_close = null,
                e.btn_start_forging = null,
                e.btn_video_forging = null,
                e.btn_get = null,
                e.icon_get = null,
                e.game_box = null,
                e.icon_start_forging = null,
                e.icon_desc = null,
                e.icon_forging = null,
                e.txt_count_time = null,
                e.sprine = null,
                e
            }
            return o(e, t),
            e.prototype.onEnable = function() {
                var t = this;
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_start_forging.on(cc.Node.EventType.TOUCH_END, this.on_click_forging, this),
                this.btn_video_forging.on(cc.Node.EventType.TOUCH_END, this.on_click_video_forging, this),
                this.btn_get.on(cc.Node.EventType.TOUCH_END, this.on_click_get, this),
                this.ske = this.sprine.getComponent(sp.Skeleton),
                this.ske.setStartListener(function() {
                    t.play_skeleton()
                }),
                this.ske.setInterruptListener(this.onError)
            }
            ,
            e.prototype.onError = function() {}
            ,
            e.prototype.show = function() {
                if (a.syyx_activity_manager.is_inited()) {
                    if (this.node && !this.node.parent) {
                        this.node.parent = c.syyx_sdk_utils.get_stage(),
                        this.node.width = cc.view.getVisibleSize().width,
                        this.node.height = cc.view.getVisibleSize().height;
                        var t = c.syyx_sdk_utils.get_largest_zorder();
                        this.node.zIndex = Math.max(0, t - 1),
                        this.on_show()
                    }
                } else
                    console.log("igc----- syyx_ui_activity_rare: sdk's activity mananger is not initialized so that can not show")
            }
            ,
            e.prototype.on_show = function() {
                var t = this;
                a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.show_rare_view),
                this.refresh(),
                this.refresh_id = setInterval(function() {
                    t.refresh()
                }, 1e3)
            }
            ,
            e.prototype.refresh = function() {
                var t = a.syyx_activity_manager._rare_treasure_instance.get_data()
                  , e = t.forging_time - c.syyx_sdk_utils.get_date_timestamp()
                  , i = t.get_over_time - c.syyx_sdk_utils.get_date_timestamp();
                this.btn_start_forging.active = t.state == s.e_activity_rare_state.wait_forging,
                this.btn_video_forging.active = t.state == s.e_activity_rare_state.forging,
                this.btn_get.active = t.state == s.e_activity_rare_state.available;
                var n = a.syyx_activity_manager._rare_treasure_instance._treasure_config_data[1].type;
                n == s.e_item_type.equip ? (c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_hx", this.icon_get.getComponent(cc.Sprite)),
                c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_ksdz", this.icon_start_forging.getComponent(cc.Sprite)),
                c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_05", this.icon_desc.getComponent(cc.Sprite))) : (c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_rl", this.icon_get.getComponent(cc.Sprite)),
                c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_dz", this.icon_start_forging.getComponent(cc.Sprite)),
                c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_06", this.icon_desc.getComponent(cc.Sprite))),
                this.icon_forging.active = t.state != s.e_activity_rare_state.wait_forging,
                t.state == s.e_activity_rare_state.forging || t.state == s.e_activity_rare_state.available || (this.txt_count_time.string = ""),
                t.state == s.e_activity_rare_state.wait_forging ? n == s.e_item_type.equip ? this.play_skeleton(s.e_rare_skeleton_action.wait_forging) : this.play_skeleton(s.e_rare_skeleton_action.wait_customized) : t.state == s.e_activity_rare_state.forging ? (this.txt_count_time.string = c.syyx_sdk_utils.formatTime(e / 1e3),
                n == s.e_item_type.equip ? (c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_dzz", this.icon_forging.getComponent(cc.Sprite)),
                this.play_skeleton(s.e_rare_skeleton_action.forging)) : (c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_dzz1", this.icon_forging.getComponent(cc.Sprite)),
                this.play_skeleton(s.e_rare_skeleton_action.customized))) : t.state == s.e_activity_rare_state.available && (this.txt_count_time.string = c.syyx_sdk_utils.formatTime(i / 1e3),
                c.syyx_sdk_utils.load_resource_texture("syyx_texture/rare_treasure/tet_sxzb_klq", this.icon_forging.getComponent(cc.Sprite)),
                n == s.e_item_type.equip ? this.play_skeleton(s.e_rare_skeleton_action.wait_forging) : this.play_skeleton(s.e_rare_skeleton_action.wait_customized))
            }
            ,
            e.prototype.play_skeleton = function(t) {
                this.action_type = t,
                t && this.ske && this.ske.setAnimation(0, t, !1)
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide()
            }
            ,
            e.prototype.on_click_forging = function() {
                a.syyx_activity_manager._rare_treasure_instance.start_forging_item()
            }
            ,
            e.prototype.on_click_video_forging = function() {
                var t = this;
                r.syyx_manager.show_video(s.e_ad_id.video_forging, function() {}, function() {}, function(e, i) {
                    i.isEnded ? (a.syyx_activity_manager._rare_treasure_instance.video_forging_item(),
                    t.refresh()) : r.syyx_manager.create_toast("\u5e7f\u544a\u6ca1\u770b\u5b8c\uff0c\u65e0\u6cd5\u9886\u53d6\u5956\u52b1")
                }, function() {})
            }
            ,
            e.prototype.on_click_get = function() {
                a.syyx_activity_manager._rare_treasure_instance.get_item_reward(this.call_back),
                a.syyx_activity_manager._rare_treasure_instance.check_open() || this.hide()
            }
            ,
            e.prototype.on_hide = function() {
                this.refresh_id && clearInterval(this.refresh_id),
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_start_forging.off(cc.Node.EventType.TOUCH_END, this.on_click_forging, this),
                this.btn_video_forging.off(cc.Node.EventType.TOUCH_END, this.on_click_video_forging, this),
                this.btn_get.off(cc.Node.EventType.TOUCH_END, this.on_click_get, this)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([u(cc.Node)], e.prototype, "btn_close", void 0),
            _([u(cc.Node)], e.prototype, "btn_start_forging", void 0),
            _([u(cc.Node)], e.prototype, "btn_video_forging", void 0),
            _([u(cc.Node)], e.prototype, "btn_get", void 0),
            _([u(cc.Node)], e.prototype, "icon_get", void 0),
            _([u(cc.Node)], e.prototype, "game_box", void 0),
            _([u(cc.Node)], e.prototype, "icon_start_forging", void 0),
            _([u(cc.Node)], e.prototype, "icon_desc", void 0),
            _([u(cc.Node)], e.prototype, "icon_forging", void 0),
            _([u(cc.Label)], e.prototype, "txt_count_time", void 0),
            _([u(cc.Node)], e.prototype, "sprine", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_activity_rob_box_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bcaa3Pc+XFPkrwGqLLy7Eme", "syyx_ui_activity_rob_box_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../utils/syyx_sdk_utils")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.txt_gold_num = null,
                e.ef = null,
                e.dian_jinbi = null,
                e.normal_bg = null,
                e.mask_bg = null,
                e.miss_bg = null,
                e.icon_item = null,
                e.tips_bg = null,
                e.gold_num = void 0,
                e.bg_list = {
                    0: {
                        normal_bg: "syyx_texture/rob_treasure/icon_dbqb_06",
                        mask_bg: "syyx_texture/rob_treasure/icon_dbqb_03",
                        miss_bg: "syyx_texture/rob_treasure/icon_dbqb_09"
                    },
                    1: {
                        normal_bg: "syyx_texture/rob_treasure/icon_dbqb_05",
                        mask_bg: "syyx_texture/rob_treasure/icon_dbqb_02",
                        miss_bg: "syyx_texture/rob_treasure/icon_dbqb_09"
                    },
                    2: {
                        normal_bg: "syyx_texture/rob_treasure/icon_dbqb_04",
                        mask_bg: "syyx_texture/rob_treasure/icon_dbqb_01",
                        miss_bg: "syyx_texture/rob_treasure/icon_dbqb_09"
                    }
                },
                e
            }
            return o(e, t),
            e.prototype.update_view = function(t, e, i, n) {
                this.grid_data = t,
                this.call_back = e,
                this.fly_call_back = i,
                this.hide_guide_hand = n,
                this.hide_tips(),
                this.txt_gold_num.node.active = !1,
                this.ef.active = !1,
                this.dian_jinbi.active = !1,
                this.update_item_skin(t),
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.on_click, this)
            }
            ,
            e.prototype.update_item_skin = function(t) {
                this.select_bg_index && !t.is_miss_bg || (this.select_bg_index = t.is_miss_bg ? 0 : Math.floor(3 * Math.random()),
                r.syyx_sdk_utils.load_resource_texture(this.bg_list[this.select_bg_index % 3].normal_bg, this.normal_bg),
                r.syyx_sdk_utils.load_resource_texture(this.bg_list[this.select_bg_index % 3].mask_bg, this.mask_bg),
                r.syyx_sdk_utils.load_resource_texture(this.bg_list[this.select_bg_index % 3].miss_bg, this.miss_bg)),
                t.is_reward && t.config.type == s.e_item_type.gold && !this.gold_num && (this.gold_num = a.syyx_activity_manager._rob_treasure_instance.get_random_gold()),
                this.normal_bg.node.active = t.is_reward,
                this.miss_bg.node.active = t.is_miss_bg && (t.config.type == s.e_item_type.skin || t.config.type == s.e_item_type.equip) && t.state == s.e_rob_grid_reward_state.wait_bomb,
                this.mask_bg.node.active = !this.miss_bg.node.active && t.is_reward && t.state == s.e_rob_grid_reward_state.wait_bomb,
                this.icon_item.node.active = t.is_reward && t.state != s.e_rob_grid_reward_state.has_get && !this.mask_bg.node.active,
                t.is_reward && ("" != t.config.fragment_skin ? r.syyx_sdk_utils.load_resource_texture(t.config.fragment_skin, this.icon_item) : this.icon_item.node.active = !1);
                var e = t.is_reward && t.config.type == s.e_item_type.gold ? 1 : .7;
                this.icon_item.node.setScale(e, e)
            }
            ,
            e.prototype.bomb_box = function() {
                this.grid_data.is_reward && this.grid_data.state == s.e_rob_grid_reward_state.wait_bomb ? (this.ef.active = !0,
                this.ef.getComponent(cc.Animation).play("shitou"),
                a.syyx_activity_manager._rob_treasure_instance.bomb_box(this.grid_data),
                this.update_item_skin(this.grid_data)) : this.ef.active = !1
            }
            ,
            e.prototype.can_bomb = function() {
                return !(!this.grid_data.is_reward || this.grid_data.state != s.e_rob_grid_reward_state.wait_bomb)
            }
            ,
            e.prototype.can_click_fragment = function() {
                return !(!this.grid_data.is_reward || this.grid_data.state != s.e_rob_grid_reward_state.has_bomb)
            }
            ,
            e.prototype.is_empty = function() {
                return !this.grid_data.is_reward
            }
            ,
            e.prototype.show_tips = function() {
                this.hide_tips(),
                this.tips_bg.active = !0
            }
            ,
            e.prototype.hide_tips = function() {
                this.tips_bg.active = !1
            }
            ,
            e.prototype.on_click = function() {
                this.grid_data.state == s.e_rob_grid_reward_state.has_bomb && this.grid_data.config.type != s.e_item_type.none && (this.icon_item.node.active = !1,
                a.syyx_activity_manager._rob_treasure_instance.get_item(this.grid_data),
                this.grid_data.config.type != s.e_item_type.gold ? (this.fly_call_back && this.fly_call_back(this.grid_data.config, this.normal_bg),
                this.hide_guide_hand && this.hide_guide_hand()) : (this.dian_jinbi.active = !0,
                this.txt_gold_num.node.active = !0,
                this.txt_gold_num.string = "+" + this.gold_num,
                this.dian_jinbi.getComponent(cc.Animation).play("jinbi"),
                this.call_back && this.call_back(this.grid_data.config, this.gold_num),
                this.hide_guide_hand && this.hide_guide_hand()))
            }
            ,
            _([d(cc.Label)], e.prototype, "txt_gold_num", void 0),
            _([d(cc.Node)], e.prototype, "ef", void 0),
            _([d(cc.Node)], e.prototype, "dian_jinbi", void 0),
            _([d(cc.Sprite)], e.prototype, "normal_bg", void 0),
            _([d(cc.Sprite)], e.prototype, "mask_bg", void 0),
            _([d(cc.Sprite)], e.prototype, "miss_bg", void 0),
            _([d(cc.Sprite)], e.prototype, "icon_item", void 0),
            _([d(cc.Node)], e.prototype, "tips_bg", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_activity_rob: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b3506fHcy5PRrtBdvDlkG4b", "syyx_ui_activity_rob");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../controller/syyx_manager")
          , c = t("../../utils/syyx_sdk_utils")
          , l = t("./syyx_ui_activity_bomb_item")
          , d = t("./syyx_ui_activity_rob_box_item")
          , u = cc._decorator
          , p = u.ccclass
          , y = u.property
          , h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.bomb_prefab_item = null,
                e.box_prefab_item = null,
                e.btn_close = null,
                e.btn_bag = null,
                e.btn_video = null,
                e.game_box = null,
                e.box_list = null,
                e.bomb_list = null,
                e.shouzhi = null,
                e.shouzhi1 = null,
                e.ef = null,
                e.icon_bag_red = null,
                e.icon_grid_tips = null,
                e.icon_bomb = null,
                e.icon_fragment = null,
                e.select_bomb_index = void 0,
                e.box_width = 172,
                e.box_height = 172,
                e.box_item_list = [],
                e.box_item_view_list = [],
                e.bomb_item_list = [],
                e.bomb_item_view_list = [],
                e.fly_item_list = [],
                e.point_temp = new cc.Vec2(0,0),
                e.point_temp3 = new cc.Vec2,
                e.point_temp4 = new cc.Vec2,
                e.bomb_box_list = [],
                e.is_use_bomb = !1,
                e.is_click_fragement = !1,
                e.use_normal_bomb = !1,
                e.use_resume_bomb = !1,
                e
            }
            return o(e, t),
            e.prototype.onEnable = function() {
                this.game_box.height = cc.view.getVisibleSize().height
            }
            ,
            e.prototype.onDisable = function() {}
            ,
            e.prototype.show = function(t) {
                if (a.syyx_activity_manager.is_inited()) {
                    if (this.node && !this.node.parent) {
                        this.call_back = t || void 0;
                        var e = c.syyx_sdk_utils.get_largest_zorder();
                        this.node.parent = c.syyx_sdk_utils.get_stage(),
                        this.node.zIndex = Math.max(0, e - 1),
                        this.on_show()
                    }
                } else
                    console.log("igc----- syyx_ui_activity_rob: sdk's activity mananger is not initialized so that can not show")
            }
            ,
            e.prototype.on_show = function() {
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_bag.on(cc.Node.EventType.TOUCH_END, this.on_click_bag, this),
                this.btn_video.on(cc.Node.EventType.TOUCH_END, this.on_click_video, this),
                this.game_box.on(cc.Node.EventType.TOUCH_MOVE, this.on_box_move, this),
                this.game_box.on(cc.Node.EventType.TOUCH_END, this.on_box_up, this),
                this.game_box.on(cc.Node.EventType.TOUCH_CANCEL, this.on_box_up, this),
                this.is_click_fragement = !1,
                this.use_normal_bomb = !1,
                this.use_resume_bomb = !1,
                this.select_bomb_index = void 0,
                this.shouzhi.active = !1,
                this.shouzhi.opacity = 255,
                this.shouzhi1.active = !1,
                this.ef.active = !1,
                a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.show_rob_view),
                this.rob_data = a.syyx_activity_manager._rob_treasure_instance.get_data(),
                this.update_bomb_list(),
                this.update_box_list(),
                this.icon_bag_red.active = a.syyx_activity_manager._rob_treasure_instance.check_bag_red_point();
                var t = this;
                this.timer_id && clearInterval(this.timer_id),
                this.timer_id = setInterval(function() {
                    t.update_bomb_list()
                }, 1e3)
            }
            ,
            e.prototype.update_box_list = function() {
                this.icon_grid_tips.active = !1;
                for (var t = 0; t < 36; t++) {
                    var e = void 0;
                    this.box_item_list[t] ? e = this.box_item_list[t] : (e = cc.instantiate(this.box_prefab_item),
                    this.box_list.addChild(e));
                    var i = e.getComponent(d.default)
                      , n = this.rob_data.grid_data[Math.floor(t / 6)][Math.floor(t % 6)];
                    i.update_view(n, this.call_back, this.fly_item_ani.bind(this), this.hide_guide_hand.bind(this)),
                    this.box_item_list[t] || (this.box_item_list.push(e),
                    this.box_item_view_list.push(i),
                    35 == t && this.check_need_guide())
                }
            }
            ,
            e.prototype.destroy_bomb_item = function() {
                for (var t in this.bomb_item_list)
                    this.bomb_item_list[t].destroy();
                this.bomb_item_list = [],
                this.bomb_item_view_list = []
            }
            ,
            e.prototype.update_bomb_list = function() {
                for (var t = this, e = function(e) {
                    var n = void 0;
                    i.bomb_item_list[e] ? n = i.bomb_item_list[e] : (n = cc.instantiate(i.bomb_prefab_item),
                    i.bomb_list.addChild(n));
                    var o = n.getComponent(l.default);
                    o.update_view(i.rob_data.bomb_data[e]),
                    i.bomb_item_list[e] || (i.bomb_item_list.push(n),
                    i.bomb_item_view_list.push(o),
                    n.on(cc.Node.EventType.TOUCH_START, function() {
                        t.on_click_bomb(e)
                    }, i))
                }, i = this, n = 0; n < 3; n++)
                    e(n)
            }
            ,
            e.prototype.hide_guide_hand = function() {
                this.shouzhi1.active = !1,
                this.shouzhi1.opacity = 0
            }
            ,
            e.prototype.fly_item_ani = function(t, e) {
                if (t.type != s.e_item_type.none) {
                    var i;
                    0 == this.fly_item_list.length ? (i = cc.instantiate(this.icon_fragment)).parent = this.game_box : i = this.fly_item_list.pop(),
                    i.active = !0,
                    i.setScale(1, 1);
                    var n = e.node.convertToWorldSpaceAR(new cc.Vec2(0,0));
                    i.setPosition(n.x, n.y),
                    c.syyx_sdk_utils.load_resource_texture(t.fragment_skin, i.getComponent(cc.Sprite));
                    var o = this
                      , _ = this.btn_bag.convertToWorldSpaceAR(new cc.Vec2(0,0))
                      , r = cc.spawn(cc.moveTo(.8, cc.v2(_.x, _.y)), cc.scaleTo(.8, .5, .5))
                      , l = cc.sequence(r, cc.callFunc(function() {
                        i.active = !1,
                        o.fly_item_list.push(i),
                        o.play_bag_scale_animation()
                    }));
                    i.runAction(l),
                    this.icon_bag_red.active = a.syyx_activity_manager._rob_treasure_instance.check_bag_red_point()
                }
            }
            ,
            e.prototype.play_bag_scale_animation = function() {
                var t = this;
                this.btn_bag.getComponent(cc.Animation).stop("xiangzi_dong"),
                this.btn_bag.getComponent(cc.Animation).play("xiangzi"),
                this.bag_scale_timer && clearTimeout(this.bag_scale_timer),
                this.bag_scale_timer = setTimeout(function() {
                    t.play_bag_shake_animation()
                }, 375)
            }
            ,
            e.prototype.play_bag_shake_animation = function() {
                this.btn_bag.setScale(1),
                this.btn_bag.getComponent(cc.Animation).play("xiangzi_dong")
            }
            ,
            e.prototype.on_box_move = function(t) {
                if (null != this.select_bomb_index) {
                    this.icon_bomb.active = !0,
                    this.icon_bomb.setPosition(t.touch.getLocationX(), t.touch.getLocationY());
                    var e = t.touch.getLocationX()
                      , i = t.touch.getLocationY();
                    if (e < this.box_list.width && e > 0 && i < this.box_list.y && i > this.box_list.y - this.box_list.height) {
                        this.icon_grid_tips.active = !0;
                        var n = Math.floor(e / this.box_width)
                          , o = 6 * Math.floor((this.box_list.y - i) / this.box_height) + n
                          , _ = this.rob_data.grid_data[Math.floor(o / 6)][Math.floor(o % 6)];
                        if (_.is_reward && _.state == s.e_rob_grid_reward_state.wait_bomb)
                            return void this.recovery_all_item();
                        o != this.select_box_index && (this.select_box_index = o,
                        this.change_select_index())
                    }
                }
            }
            ,
            e.prototype.on_box_up = function(t) {
                var e = t.touch.getLocationX()
                  , i = t.touch.getLocationY();
                if (e < this.box_list.width && e > 0 && i < this.box_list.y && i > this.box_list.y - this.box_list.height && null != this.select_box_index && null != this.select_bomb_index) {
                    this.ef.active = !0;
                    var n = {
                        x: t.touch.getLocationX(),
                        y: t.touch.getLocationY()
                    };
                    this.ef.setPosition(n.x, n.y),
                    this.send_use_bomb_event(this.select_bomb_index),
                    a.syyx_activity_manager._rob_treasure_instance.use_bomb(this.select_bomb_index),
                    this.is_use_bomb = !0,
                    this.update_bomb_list(),
                    this.check_guide_click_fragment(),
                    this.ef.getComponent(cc.Animation).play("baozha");
                    var o = this.rob_data.grid_data[Math.floor(this.select_box_index / 6)][Math.floor(this.select_box_index % 6)];
                    if (this.bomb_box_list.length > 0 && (o.state != s.e_rob_grid_reward_state.wait_bomb || !o.is_reward))
                        for (var _ in this.bomb_box_list)
                            this.bomb_box_list[_].bomb_box()
                }
                this.recovery_all_item(!0)
            }
            ,
            e.prototype.recovery_all_item = function(t) {
                if (void 0 === t && (t = !1),
                this.bomb_box_list = [],
                this.box_item_view_list && this.box_item_view_list.length > 0)
                    for (var e in this.box_item_view_list)
                        this.box_item_view_list[e].hide_tips();
                this.select_box_index = void 0,
                this.bomb_item_list[this.select_bomb_index] && (this.bomb_item_list[this.select_bomb_index].opacity = 255),
                t && (this.icon_grid_tips.active = !1,
                this.icon_bomb.active = !1,
                this.select_bomb_index = void 0)
            }
            ,
            e.prototype.change_select_index = function() {
                if (this.box_list && this.box_item_view_list.length > 0) {
                    for (var t in this.box_item_view_list)
                        this.box_item_view_list[t].hide_tips();
                    this.bomb_box_list = [],
                    this.box_item_view_list[this.select_box_index - 6] && (this.box_item_view_list[this.select_box_index - 6].show_tips(),
                    this.bomb_box_list.push(this.box_item_view_list[this.select_box_index - 6])),
                    this.box_item_view_list[this.select_box_index + 6] && (this.box_item_view_list[this.select_box_index + 6].show_tips(),
                    this.bomb_box_list.push(this.box_item_view_list[this.select_box_index + 6])),
                    this.select_box_index % 6 != 0 && this.box_item_view_list[this.select_box_index - 1] && (this.box_item_view_list[this.select_box_index - 1].show_tips(),
                    this.bomb_box_list.push(this.box_item_view_list[this.select_box_index - 1])),
                    this.select_box_index % 6 != 5 && this.box_item_view_list[this.select_box_index + 1] && (this.box_item_view_list[this.select_box_index + 1].show_tips(),
                    this.bomb_box_list.push(this.box_item_view_list[this.select_box_index + 1]))
                }
            }
            ,
            e.prototype.check_need_guide = function() {
                if (1 == this.rob_data.open_view_num)
                    if (this.is_use_bomb)
                        this.shouzhi.opacity = 0;
                    else {
                        var t = {};
                        for (var e in this.box_item_view_list) {
                            var i = parseInt(e)
                              , n = 0;
                            this.box_item_view_list[i - 6] && this.box_item_view_list[i - 6].can_bomb() && n++,
                            this.box_item_view_list[i + 6] && this.box_item_view_list[i + 6].can_bomb() && n++,
                            i % 6 != 0 && this.box_item_view_list[i - 1] && this.box_item_view_list[i - 1].can_bomb() && n++,
                            i % 6 != 5 && this.box_item_view_list[i + 1] && this.box_item_view_list[i + 1].can_bomb() && n++,
                            this.box_item_view_list[i] && !this.box_item_view_list[i].is_empty() && (n = 0),
                            t[n] || (t[n] = []),
                            t[n].push(this.box_item_list[i])
                        }
                        this.play_guide_animation(t)
                    }
            }
            ,
            e.prototype.play_guide_animation = function(t) {
                var e = this;
                setTimeout(function() {
                    if (e.shouzhi.active = !0,
                    e.shouzhi.getComponent(cc.Animation).play("shou_dian"),
                    e.bomb_item_list && e.bomb_item_list.length > 0) {
                        var i = e.bomb_item_list[0].convertToWorldSpaceAR(new cc.Vec2(0,0));
                        console.log("the bomb's initial position ", i),
                        e.shouzhi.setPosition(i.x, i.y),
                        setTimeout(function() {
                            if (!e.guide_end_pos) {
                                var i = void 0;
                                if (t[2] && t[2].length > 0)
                                    i = t[2];
                                else {
                                    if (!(t[1] && t[1].length > 0))
                                        return;
                                    i = t[1]
                                }
                                if (i.length > 0) {
                                    var n = i[Math.floor(i.length * Math.random())].convertToWorldSpaceAR(new cc.Vec2(0,0));
                                    e.guide_end_pos = {
                                        x: n.x,
                                        y: n.y
                                    }
                                }
                            }
                            var o = cc.sequence(cc.moveTo(1, cc.v2(e.guide_end_pos.x, e.guide_end_pos.y)), cc.callFunc(function() {
                                e.shouzhi.getComponent(cc.Animation).play("shou_fang"),
                                setTimeout(function() {
                                    e.shouzhi.active = !1,
                                    e.check_need_guide()
                                }, 1e3)
                            }));
                            e.shouzhi.runAction(o)
                        }, 1e3)
                    }
                }, 1e3)
            }
            ,
            e.prototype.check_guide_click_fragment = function() {
                var t = this;
                this.rob_data.open_view_num <= 1 && !this.is_click_fragement && (this.is_click_fragement = !0,
                setTimeout(function() {
                    for (var e in t.box_item_list)
                        if (t.box_item_view_list[e].can_click_fragment()) {
                            var i = t.box_item_list[e].convertToWorldSpaceAR(new cc.Vec2(0,0));
                            return t.shouzhi.active = !1,
                            t.shouzhi1.active = !0,
                            t.shouzhi1.getComponent(cc.Animation).play("shou_scsale"),
                            void t.shouzhi1.setPosition(i.x, i.y)
                        }
                }, 2e3))
            }
            ,
            e.prototype.send_use_bomb_event = function(t) {
                this.rob_data.bomb_data[t].can_use && (this.rob_data.bomb_data[t].is_resume || this.use_normal_bomb || (this.use_normal_bomb = !0,
                a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.this_time_first_bomb, this.rob_data.open_view_num)),
                this.rob_data.bomb_data[t].is_resume && !this.use_resume_bomb && (this.use_resume_bomb = !0,
                a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.this_time_resume_bomb, this.rob_data.open_view_num)))
            }
            ,
            e.prototype.on_click_bomb = function(t) {
                this.rob_data.bomb_data[t].can_use && (this.select_bomb_index = t,
                this.bomb_item_list[t].opacity = 127.5)
            }
            ,
            e.prototype.on_click_video = function() {
                var t = this;
                r.syyx_manager.show_video(s.e_ad_id.video_add_diamond, function() {}, function() {}, function(e, i) {
                    i.isEnded ? (a.syyx_activity_manager._rob_treasure_instance.video_add_bomb(),
                    t.update_box_list()) : r.syyx_manager.create_toast("\u5e7f\u544a\u6ca1\u770b\u5b8c\uff0c\u65e0\u6cd5\u9886\u53d6\u5956\u52b1")
                }, function() {}, !0)
            }
            ,
            e.prototype.on_click_bag = function() {
                a.syyx_activity_manager._rob_treasure_instance.show_bag_view(this.call_back)
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide()
            }
            ,
            e.prototype.on_hide = function() {
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_bag.off(cc.Node.EventType.TOUCH_END, this.on_click_bag, this),
                this.btn_video.off(cc.Node.EventType.TOUCH_END, this.on_click_video, this),
                this.game_box.off(cc.Node.EventType.TOUCH_MOVE, this.on_box_move, this),
                this.game_box.off(cc.Node.EventType.TOUCH_END, this.on_box_up, this),
                this.game_box.off(cc.Node.EventType.TOUCH_CANCEL, this.on_box_up, this),
                this.destroy_bomb_item(),
                clearInterval(this.timer_id),
                clearTimeout(this.bag_scale_timer)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([y(cc.Prefab)], e.prototype, "bomb_prefab_item", void 0),
            _([y(cc.Prefab)], e.prototype, "box_prefab_item", void 0),
            _([y(cc.Node)], e.prototype, "btn_close", void 0),
            _([y(cc.Node)], e.prototype, "btn_bag", void 0),
            _([y(cc.Node)], e.prototype, "btn_video", void 0),
            _([y(cc.Node)], e.prototype, "game_box", void 0),
            _([y(cc.Node)], e.prototype, "box_list", void 0),
            _([y(cc.Node)], e.prototype, "bomb_list", void 0),
            _([y(cc.Node)], e.prototype, "shouzhi", void 0),
            _([y(cc.Node)], e.prototype, "shouzhi1", void 0),
            _([y(cc.Node)], e.prototype, "ef", void 0),
            _([y(cc.Node)], e.prototype, "icon_bag_red", void 0),
            _([y(cc.Node)], e.prototype, "icon_grid_tips", void 0),
            _([y(cc.Node)], e.prototype, "icon_bomb", void 0),
            _([y(cc.Node)], e.prototype, "icon_fragment", void 0),
            _([p], e)
        }(cc.Component);
        i.default = h,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_ui_activity_bomb_item": "syyx_ui_activity_bomb_item",
        "./syyx_ui_activity_rob_box_item": "syyx_ui_activity_rob_box_item"
    }],
    syyx_ui_banner: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "43be3ENcplHsJ3dgWKcnSxe", "syyx_ui_banner");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_config")
          , a = t("../../controller/ad_banner")
          , r = t("../../controller/syyx_adv_manager")
          , c = t("../../syyx_sdk_api")
          , l = t("../../utils/syyx_sdk_utils")
          , d = cc._decorator
          , u = d.ccclass
          , p = d.property
          , y = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.game_node = null,
                e.icon_close = null,
                e.native_bg = null,
                e.lb_title = null,
                e.lb_desc = null,
                e.img_icon = null,
                e.is_reprot_click = !1,
                e.easy_click_model = !1,
                e.set_background_on_show(),
                e
            }
            return o(e, t),
            e.prototype.onEnable = function() {
                this.easy_click_model = a.ad_banner.get_is_easy_click_model(),
                this.easy_click_model && (this.stage = window.cc.director.getScene().getChildByName("Canvas"),
                cc.isValid(this.stage) && this.stage.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this))
            }
            ,
            e.prototype.onDisable = function() {
                this.easy_click_model && cc.isValid(this.stage) && this.stage.off(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this)
            }
            ,
            e.prototype.show = function(t) {
                if (this.node && !this.node.parent && (this.node.parent = l.syyx_sdk_utils.get_stage(),
                cc.game.addPersistRootNode(this.node),
                this.node.zIndex = 1000001,
                this.node.active = !1),
                cc.isValid(this.node) && !this.node.active) {
                    var e = l.syyx_sdk_utils.get_screen_ratio();
                    this.node.width = cc.view.getVisibleSize().width / e,
                    this.node.height = cc.view.getVisibleSize().height / e,
                    this.game_node.x = 0,
                    this.game_node.y = -this.node.height / 2,
                    this.node.x = cc.view.getVisibleSize().width / 2,
                    this.node.y = cc.view.getVisibleSize().height / 2,
                    this.on_show(t)
                }
            }
            ,
            e.prototype.on_show = function(t) {
                this.node.active = !0,
                this.icon_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.is_reprot_click = !1,
                this.native_bg.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.native_data = t || c.syyx_sdk_api.get_local_native_data(a.ad_banner._native_banner_id),
                this.refresh()
            }
            ,
            e.prototype.refresh = function() {
                this.lb_desc.string = this.native_data.desc + "",
                this.lb_title.string = this.native_data.title + "",
                l.syyx_sdk_utils.set_texture_url(this.img_icon, this.native_data.imgUrlList),
                this.report_show()
            }
            ,
            e.prototype.touch_move = function(t) {
                this.easy_click_model && this.node && this.node.active && (console.log("touch move"),
                t.touch.getLocationY() <= this.game_node.height * this.game_node.scaleY * this.node.scaleY && t.touch.getLocationX() >= (cc.view.getVisibleSize().width - this.game_node.width * this.game_node.scaleX * this.node.scaleX) / 2 && t.touch.getLocationX() < (cc.view.getVisibleSize().width + this.game_node.width * this.game_node.scaleX * this.node.scaleX) / 2 && this.on_click_adv2())
            }
            ,
            e.prototype.on_click_adv2 = function() {
                a.ad_banner.set_banenr_protect_model(),
                this.on_click_adv()
            }
            ,
            e.prototype.on_click_adv = function() {
                this.is_reprot_click || (this.easy_click_model && cc.isValid(this.stage) && this.stage.off(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this),
                this.native_bg.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.is_reprot_click = !0,
                this.report_click())
            }
            ,
            e.prototype.on_click_close = function() {
                a.ad_banner.finger_close_banner(),
                this.hide()
            }
            ,
            e.prototype.report_click = function() {
                this.native_data && this.native_data.adPosId && r.syyx_adv_manager.report_ad_click(this.native_data.adPosId, this.native_data)
            }
            ,
            e.prototype.report_show = function() {
                this.native_data && this.native_data.adPosId && r.syyx_adv_manager.report_ad_show(this.native_data.adPosId, this.native_data)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.active && (this.node.active = !1,
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.icon_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.native_bg.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                t > -1e4 && (this.game_node.x = t),
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            e.prototype.set_background_on_show = function() {
                var t = this;
                s.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg && c.syyx_sdk_api.on_show(function() {
                    t && cc.isValid(t.node) && (console.log("igc----- native_banner set_background_on_show"),
                    t.report_show())
                })
            }
            ,
            _([p(cc.Node)], e.prototype, "game_node", void 0),
            _([p(cc.Node)], e.prototype, "icon_close", void 0),
            _([p(cc.Node)], e.prototype, "native_bg", void 0),
            _([p(cc.Label)], e.prototype, "lb_title", void 0),
            _([p(cc.Label)], e.prototype, "lb_desc", void 0),
            _([p(cc.Sprite)], e.prototype, "img_icon", void 0),
            _([u], e)
        }(cc.Component);
        i.default = y,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_config": "syyx_sdk_config",
        "../../controller/ad_banner": "ad_banner",
        "../../controller/syyx_adv_manager": "syyx_adv_manager",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_box_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e65ef4zSL5Lk5DbcHbZZgHx", "syyx_ui_box_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../controller/syyx_manager")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.opened_box = null,
                e.locked_box = null,
                e.bg = null,
                e.video_icon = null,
                e.free_tag = !1,
                e.box_state = 0,
                e
            }
            return o(e, t),
            e.prototype.on_click_box = function() {
                if (1 != this.box_state) {
                    var t, e = this;
                    a.syyx_activity_manager._box_instance.reset_show_num(),
                    this.free_tag ? t = this.get_reward(this.box_pos) : r.syyx_manager.show_video(s.e_ad_id.video_luck_draw, function() {}, function() {}, function(i, n) {
                        n.isEnded ? (console.log("igc ----- has watched video to get reward"),
                        t = e.get_reward(e.box_pos)) : r.syyx_manager.create_toast("\u5e7f\u544a\u6ca1\u770b\u5b8c\uff0c\u65e0\u6cd5\u9886\u53d6\u5956\u52b1")
                    }, function() {}),
                    t && (this.reward = t,
                    this.locked_box.active = !1,
                    this.opened_box.active = !0,
                    this.video_icon.active = !1,
                    this.box_state = 1,
                    a.syyx_activity_manager._box_instance.show_congradulations(t, e.congradulations_call_back.bind(e)))
                } else
                    console.log("igc ----- this box has opened")
            }
            ,
            e.prototype.get_reward = function(t) {
                return a.syyx_activity_manager._box_instance.do_get_reward(t)
            }
            ,
            e.prototype.congradulations_call_back = function() {
                this.call_back && this.call_back(this.reward)
            }
            ,
            e.prototype.update_item = function(t, e) {
                this.bg.off(cc.Node.EventType.TOUCH_END, this.on_click_box, this),
                this.bg.on(cc.Node.EventType.TOUCH_END, this.on_click_box, this),
                this.reward = null,
                this.call_back = t,
                this.locked_box.active = !0,
                this.opened_box.active = !1,
                this.box_state = 0,
                this.video_icon.active = !0,
                this.box_pos = e + 1;
                var i = a.syyx_activity_manager._box_instance.get_free_box_list();
                for (var n in i)
                    i[n] - 1 == e && (this.free_tag = !0,
                    this.video_icon.active = !1)
            }
            ,
            _([d(cc.Node)], e.prototype, "opened_box", void 0),
            _([d(cc.Node)], e.prototype, "locked_box", void 0),
            _([d(cc.Node)], e.prototype, "bg", void 0),
            _([d(cc.Node)], e.prototype, "video_icon", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../controller/syyx_manager": "syyx_manager"
    }],
    syyx_ui_common_box: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "0354cBifYFOR58MRv215rZY", "syyx_ui_common_box");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../controller/syyx_activity_manager")
          , a = t("../../controller/syyx_manager")
          , r = t("../../utils/syyx_sdk_utils")
          , c = t("./syyx_ui_box_item")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon_close = null,
                e.box_container = null,
                e.box_item = null,
                e
            }
            return o(e, t),
            e.prototype.show = function() {
                if (s.syyx_activity_manager.is_inited()) {
                    if (this.node && !this.node.parent) {
                        var t = r.syyx_sdk_utils.get_largest_zorder();
                        this.node.parent = r.syyx_sdk_utils.get_stage(),
                        this.node.zIndex = t,
                        this.on_show()
                    }
                } else
                    console.log("igc----- syyx_ui_turntable sdk common activity is not initialized so that do not show ")
            }
            ,
            e.prototype.on_show = function(t) {
                this.icon_close.on(cc.Node.EventType.TOUCH_START, this.on_click_close, this),
                this.call_back = t,
                s.syyx_activity_manager._box_instance.init_free_box_list(),
                s.syyx_activity_manager._box_instance.init_first_reward_id_list();
                var e = 0
                  , i = a.syyx_manager.get_business_config();
                i && i.delat_time_normal && (e = i.delat_time_normal.value[0]);
                var n = this;
                this.icon_close.active = !1,
                setTimeout(function() {
                    n.icon_close.active = !0
                }, 1e3 * e),
                this.refresh()
            }
            ,
            e.prototype.refresh = function() {
                for (var t = 1; t <= 9; t++) {
                    var e = cc.instantiate(this.box_item);
                    e && this.box_container.node.addChild(e),
                    e.getComponent(c.default).update_item(this.call_back, t)
                }
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide()
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.icon_close.off(cc.Node.EventType.TOUCH_START, this.on_click_close, this),
                this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.box_container.node.removeAllChildren()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            _([u(cc.Node)], e.prototype, "icon_close", void 0),
            _([u(cc.Layout)], e.prototype, "box_container", void 0),
            _([u(cc.Prefab)], e.prototype, "box_item", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_ui_box_item": "syyx_ui_box_item"
    }],
    syyx_ui_congratulations: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "ae49b72675GPa9Lmlk6o17w", "syyx_ui_congratulations");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../utils/syyx_sdk_utils")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn_close = null,
                e.icon_item = null,
                e.icon_desc = null,
                e.ef = null,
                e
            }
            return o(e, t),
            e.prototype.onEnable = function() {
                this.btn_close.on("click", this.on_click_close, this)
            }
            ,
            e.prototype.show = function(t, e) {
                if (a.syyx_activity_manager.is_inited()) {
                    if (this.node && !this.node.parent) {
                        this.node.parent = r.syyx_sdk_utils.get_stage(),
                        this.config = t,
                        this.node.width = cc.view.getVisibleSize().width,
                        this.node.height = cc.view.getVisibleSize().height;
                        var i = r.syyx_sdk_utils.get_largest_zorder();
                        this.node.zIndex = Math.max(0, i - 1),
                        this.on_show(),
                        this.call_back = e || void 0
                    }
                } else
                    console.log("igc----- syyx_ui_turntable: sdk's activity mananger is not initialized so that can not show ")
            }
            ,
            e.prototype.on_show = function() {
                r.syyx_sdk_utils.load_resource_texture(this.config.skin, this.icon_item.getComponent(cc.Sprite)),
                r.syyx_sdk_utils.load_resource_texture(this.config.desc, this.icon_desc.getComponent(cc.Sprite)),
                this.config.activity == s.e_activity_type.rob_treasure && a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.show_congratulations_rob_reward)
            }
            ,
            e.prototype.update = function() {
                var t = new Date;
                this.ef.rotation = t.getTime() % 360 / 10
            }
            ,
            e.prototype.on_click_close = function() {
                this.call_back && this.call_back(this.config, 1),
                this.config.activity == s.e_activity_type.rare_treasure && a.syyx_activity_manager.send_activity_event(s.e_activity_event_id.close_rare_reward_view),
                this.hide()
            }
            ,
            e.prototype.on_hide = function() {}
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([d(cc.Node)], e.prototype, "btn_close", void 0),
            _([d(cc.Node)], e.prototype, "icon_item", void 0),
            _([d(cc.Node)], e.prototype, "icon_desc", void 0),
            _([d(cc.Node)], e.prototype, "ef", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_game_box: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a60a7jpOP9DgK7Pbb42gglu", "syyx_ui_game_box");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../utils/syyx_sdk_utils")
          , l = t("./syyx_ui_game_item")
          , d = cc._decorator
          , u = d.ccclass
          , p = d.property
          , y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.vertical_game_node = null,
                e.vertical_content = null,
                e.horizon_game_node = null,
                e.horizon_content = null,
                e.game_item = null,
                e.show_count = 0,
                e.scene_name = "",
                e.chapter = 0,
                e.item_list = [],
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                this.node && !this.node.parent && (cc.Canvas.instance.designResolution.height > cc.Canvas.instance.designResolution.width ? (this.game_node = this.vertical_game_node,
                this.content = this.vertical_content,
                this.item_num = 6,
                this.horizon_game_node.active = !1) : (this.game_node = this.horizon_game_node,
                this.content = this.horizon_content,
                this.item_num = 8,
                this.vertical_game_node.active = !1),
                this.node.parent = t,
                this.on_show())
            }
            ,
            e.prototype.on_show = function() {
                this.report_show();
                for (var t = a.syyx_manager.get_multual_push_info(r.syyx_view.game_box), e = [], i = 0; i < t.cellList.length; i++) {
                    var n = t.cellList[i];
                    e.push(c.syyx_sdk_utils.get_app_info(n, this.show_count))
                }
                e.length > this.item_num && e.splice(this.item_num),
                this.refresh(e)
            }
            ,
            e.prototype.refresh = function(t) {
                null != t && (this.apps = t);
                for (var e = 0; e < this.item_num; e++) {
                    var i = void 0;
                    this.item_list[e] ? i = this.item_list[e] : (i = cc.instantiate(this.game_item),
                    this.item_list.push(i),
                    this.content.addChild(i)),
                    t[e] ? (i.active = !0,
                    i.getComponent(l.default).refresh(t[e], e),
                    i.getComponent(l.default).set_push_param(this.scene_name, s.e_syyx_sdk_multual_push_type.popular, this.chapter, e + 1)) : i.active = !1
                }
                for (var n = 0; n < Math.min(this.item_num, t.length); n++) {
                    var o = t[n];
                    a.syyx_manager.send_multual_push_item_show_event(s.e_syyx_sdk_multual_push_type.popular, n + 1, o.name, o.appId)
                }
            }
            ,
            e.prototype.report_show = function() {
                var t = this.get_view_type()
                  , e = c.syyx_sdk_utils.convert_view_to_push(t);
                a.syyx_manager.send_multual_push_show_event(e)
            }
            ,
            e.prototype.get_view_type = function() {
                return r.syyx_view.game_box
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {}
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                t > -1e4 && (this.game_node.x = t),
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            _([p(cc.Node)], e.prototype, "vertical_game_node", void 0),
            _([p(cc.Node)], e.prototype, "vertical_content", void 0),
            _([p(cc.Node)], e.prototype, "horizon_game_node", void 0),
            _([p(cc.Node)], e.prototype, "horizon_content", void 0),
            _([p(cc.Prefab)], e.prototype, "game_item", void 0),
            _([u], e)
        }(cc.Component);
        i.default = y,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_ui_game_item": "syyx_ui_game_item"
    }],
    syyx_ui_game_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "747f76pSdBBOYdtg4ajDon1", "syyx_ui_game_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../controller/syyx_manager")
          , a = t("../../model/model")
          , r = t("../../utils/syyx_sdk_utils")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_icon = null,
                e.label_bg1 = null,
                e.label_bg2 = null,
                e.label_bg3 = null,
                e.label_bg4 = null,
                e.label_bg5 = null,
                e.game_name = null,
                e.push_param = new a.push_param,
                e
            }
            return o(e, t),
            e.prototype.refresh = function(t, e) {
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.label_bg1.active = !1,
                this.label_bg2.active = !1,
                this.label_bg3.active = !1,
                this.label_bg4.active = !1,
                this.label_bg5.active = !1,
                this.app = t,
                r.syyx_sdk_utils.set_texture_url(this.game_icon, this.app.icon),
                this.set_label_bg_skin(e),
                this.game_name.string = this.app.name
            }
            ,
            e.prototype.set_label_bg_skin = function(t) {
                switch (t) {
                case 0:
                case 3:
                    this.label_bg5.active = !0;
                    break;
                case 1:
                    this.label_bg4.active = !0;
                    break;
                case 2:
                    this.label_bg3.active = !0;
                    break;
                case 4:
                    this.label_bg2.active = !0;
                    break;
                case 5:
                    this.label_bg1.active = !0;
                    break;
                case 6:
                    this.label_bg2.active = !0;
                    break;
                case 7:
                    this.label_bg5.active = !0
                }
            }
            ,
            e.prototype.set_push_param = function(t, e, i, n) {
                void 0 === i && (i = 0),
                void 0 === n && (n = 0),
                this.push_param.scene_name = t,
                this.push_param.chapter = i,
                this.push_param.push_view = e,
                this.push_param.position = n
            }
            ,
            e.prototype.on_click = function() {
                if (this.app) {
                    console.log("igc-----click", this.app.appId);
                    var t = {
                        app_id: this.app.pkgName,
                        targetAppId: this.app.appId,
                        eventId: this.push_param.push_view,
                        placeId: this.push_param.position,
                        chapterId: this.push_param.chapter,
                        placeType: this.push_param.scene_name,
                        name: this.app.name,
                        userId: s.syyx_manager.get_user_id(),
                        syyxAppId: s.syyx_manager.get_syyx_app_id(),
                        on_succeed: function() {}
                    };
                    s.syyx_manager.send_multual_push_click_event(t.eventId, this.push_param.position, this.app.name, this.app.appId, this.app.pkgName),
                    igc.igc_main.instance.navigate_to_mini_program(t)
                }
            }
            ,
            _([d(cc.Sprite)], e.prototype, "game_icon", void 0),
            _([d(cc.Node)], e.prototype, "label_bg1", void 0),
            _([d(cc.Node)], e.prototype, "label_bg2", void 0),
            _([d(cc.Node)], e.prototype, "label_bg3", void 0),
            _([d(cc.Node)], e.prototype, "label_bg4", void 0),
            _([d(cc.Node)], e.prototype, "label_bg5", void 0),
            _([d(cc.Label)], e.prototype, "game_name", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_get_reward: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "166db7IYLlHYrg3kf7b7ZHv", "syyx_ui_get_reward");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../utils/syyx_sdk_utils")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.btn_close = null,
                e.text = null,
                e.text_count = null,
                e.icon = null,
                e.effect = null,
                e
            }
            return o(e, t),
            e.prototype.show = function(t, e) {
                if (this.node && !this.node.parent) {
                    this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                    this.call_back = e || void 0,
                    this.config = t;
                    var i = s.syyx_sdk_utils.get_largest_zorder();
                    this.node.parent = s.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = i,
                    this.on_show()
                }
            }
            ,
            e.prototype.on_show = function() {
                s.syyx_sdk_utils.load_resource_texture(this.config.icon, this.icon),
                this.text.string = "",
                this.config.desc && "" != this.config.desc && (this.text.string = this.config.desc),
                this.text_count.string = "",
                this.config.count && (this.text_count.string = "x" + this.config.count)
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide(),
                this.call_back && this.call_back()
            }
            ,
            e.prototype.update = function() {
                var t = new Date;
                this.effect.node.rotation = t.getTime() % 360 / 10
            }
            ,
            e.prototype.on_hide = function() {}
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([c(cc.Node)], e.prototype, "btn_close", void 0),
            _([c(cc.Label)], e.prototype, "text", void 0),
            _([c(cc.Label)], e.prototype, "text_count", void 0),
            _([c(cc.Sprite)], e.prototype, "icon", void 0),
            _([c(cc.Sprite)], e.prototype, "effect", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_guess_like: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a1397TlJitMDLTljgYinXb7", "syyx_ui_guess_like");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../utils/syyx_sdk_utils")
          , l = t("./syyx_ui_game_item")
          , d = cc._decorator
          , u = d.ccclass
          , p = d.property
          , y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_node = null,
                e.scroll_view = null,
                e.game_item = null,
                e.show_count = 0,
                e.chapter = 0,
                e.item_list = [],
                e.auto_move_flag = !1,
                e.is_right = !0,
                e
            }
            return o(e, t),
            e.prototype.show = function(t, e, i) {
                if (void 0 === t && (t = -1),
                void 0 === e && (e = ""),
                void 0 === i && (i = 1),
                this.node && !this.node.parent) {
                    this.scene_name = e,
                    this.chapter = i;
                    var n = -1 == t ? c.syyx_sdk_utils.get_largest_zorder() : t;
                    this.node.parent = c.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = n,
                    this.on_show()
                }
            }
            ,
            e.prototype.on_show = function() {
                this.scroll_view.node.on(cc.Node.EventType.MOUSE_DOWN, this.mouse_down, this),
                this.scroll_view.node.on(cc.Node.EventType.MOUSE_UP, this.mouse_up, this),
                this.report_show();
                for (var t = [], e = a.syyx_manager.get_multual_push_info(r.syyx_view.guess_like), i = 0; i < e.cellList.length; i++) {
                    var n = e.cellList[i];
                    t.push(c.syyx_sdk_utils.get_app_info(n, this.show_count))
                }
                this.refresh(t),
                this.auto_move_flag = !1,
                this.scheduleOnce(this.auto_move, 2)
            }
            ,
            e.prototype.refresh = function(t) {
                if (this.apps = t,
                this.scroll_view.content.removeAllChildren(),
                t && t.length > 0)
                    for (var e = this.scroll_view.content, i = 0; i < t.length; i++) {
                        var n = void 0;
                        this.item_list[i] ? n = this.item_list[i] : (n = cc.instantiate(this.game_item),
                        this.item_list.push(n)),
                        e.addChild(n),
                        n.getComponent(l.default).refresh(t[i], i),
                        n.getComponent(l.default).set_push_param(this.scene_name, s.e_syyx_sdk_multual_push_type.guess, this.chapter, i + 1);
                        var o = n.getComponent(l.default);
                        a.syyx_manager.send_multual_push_item_show_event(s.e_syyx_sdk_multual_push_type.guess, o.push_param.position, o.app.name, t[i].appId)
                    }
                this.on_view_init()
            }
            ,
            e.prototype.on_view_init = function() {
                this.scroll_view.content.x = 0,
                this.is_right = !0
            }
            ,
            e.prototype.auto_move = function() {
                this.auto_move_flag = !0
            }
            ,
            e.prototype.mouse_down = function() {
                this.auto_move_flag = !1
            }
            ,
            e.prototype.mouse_up = function() {
                this.auto_move_flag = !0
            }
            ,
            e.prototype.report_show = function() {
                var t = this.get_view_type()
                  , e = c.syyx_sdk_utils.convert_view_to_push(t);
                a.syyx_manager.send_multual_push_show_event(e)
            }
            ,
            e.prototype.get_view_type = function() {
                return r.syyx_view.guess_like
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.scroll_view.node.off(cc.Node.EventType.MOUSE_DOWN, this.mouse_down, this),
                this.scroll_view.node.off(cc.Node.EventType.MOUSE_UP, this.mouse_up, this),
                this.unscheduleAllCallbacks()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                t > -1e4 && (this.game_node.x = t),
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            e.prototype.update = function() {
                if (this.node && this.auto_move_flag && this.node.parent && this.apps.length > 0) {
                    var t = -(this.apps.length - 4) * (10 + this.item_list[0].width);
                    this.is_right ? --this.scroll_view.content.x : ++this.scroll_view.content.x,
                    this.scroll_view.content.x = Math.max(this.scroll_view.content.x, t),
                    this.scroll_view.content.x = Math.min(this.scroll_view.content.x, 0),
                    this.scroll_view.content.x <= t ? this.is_right = !1 : this.scroll_view.content.x >= 0 && (this.is_right = !0)
                }
            }
            ,
            _([p(cc.Node)], e.prototype, "game_node", void 0),
            _([p(cc.ScrollView)], e.prototype, "scroll_view", void 0),
            _([p(cc.Prefab)], e.prototype, "game_item", void 0),
            _([u], e)
        }(cc.Component);
        i.default = y,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_ui_game_item": "syyx_ui_game_item"
    }],
    syyx_ui_inner_interstitial: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b3228ltiBFCqqBz3Ily2DFg", "syyx_ui_inner_interstitial");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_config")
          , a = t("../../configs/syyx_sdk_enum")
          , r = t("../../controller/ad_native_inner_interstitial")
          , c = t("../../controller/syyx_adv_manager")
          , l = t("../../controller/syyx_manager")
          , d = t("../../syyx_sdk_api")
          , u = t("../../utils/syyx_sdk_utils")
          , p = cc._decorator
          , y = p.ccclass
          , h = p.property
          , f = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.icon_close = null,
                e.native_node = null,
                e.lb_title = null,
                e.lb_desc = null,
                e.img_icon = null,
                e.click_back = void 0,
                e.set_background_on_show(),
                e
            }
            return o(e, t),
            e.prototype.on_click_adv = function() {
                this.report_click()
            }
            ,
            e.prototype.on_click_close = function() {
                var t = l.syyx_manager.get_business_config();
                if (t && t.native_inner_institial_click_close_pro) {
                    var e = t.native_inner_institial_click_close_pro.value[0];
                    e >= 0 && Math.random() <= e && this.report_click()
                }
                this.hide()
            }
            ,
            e.prototype.report_click = function() {
                this.native_data ? (this.click_back && this.click_back(),
                l.syyx_manager.report_ad_click(a.e_ad_id.native_inner_interstitial_success, this.native_data),
                console.log("igc----- has clicked native inner interstitial")) : console.log("igc----- syyx_ui_inner_interstitial report_click native_data is null!")
            }
            ,
            e.prototype.report_show = function() {
                this.native_data ? c.syyx_adv_manager.report_ad_show(a.e_ad_id.native_inner_interstitial_success, this.native_data) : console.log("igc----- syyx_ui_inner_interstitial report_show native_data is null!")
            }
            ,
            e.prototype.show = function(t, e, i, n, o) {
                this.node && !this.node.parent && (this.native_data = e,
                this.show_back = n || void 0,
                this.hide_back = o || void 0,
                this.click_back = i || void 0,
                this.node.parent = t,
                this.on_show())
            }
            ,
            e.prototype.report_click_update_view = function(t) {
                this.node && this.node.parent && (this.native_data = t,
                this.refresh())
            }
            ,
            e.prototype.on_show = function() {
                this.icon_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.img_icon.node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.refresh(),
                this.show_back && this.show_back()
            }
            ,
            e.prototype.refresh = function() {
                u.syyx_sdk_utils.set_texture_url(this.img_icon, this.native_data.imgUrlList, this.hide.bind(this)),
                this.lb_title.string = this.native_data.title + "",
                this.lb_desc.string = this.native_data.desc + "",
                this.report_show()
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.icon_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.img_icon.node.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                r.ad_native_inner_interstitial.set_is_use_native_banner_data(!1),
                this.hide_back && this.hide_back()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            e.prototype.set_background_on_show = function() {
                var t = this;
                s.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg && d.syyx_sdk_api.on_show(function() {
                    t && cc.isValid(t.node) && (console.log("igc----- native_inner_interstitial set_background_on_show"),
                    t.report_show())
                })
            }
            ,
            _([h(cc.Node)], e.prototype, "icon_close", void 0),
            _([h(cc.Node)], e.prototype, "native_node", void 0),
            _([h(cc.Label)], e.prototype, "lb_title", void 0),
            _([h(cc.Label)], e.prototype, "lb_desc", void 0),
            _([h(cc.Sprite)], e.prototype, "img_icon", void 0),
            _([y], e)
        }(cc.Component);
        i.default = f,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_config": "syyx_sdk_config",
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/ad_native_inner_interstitial": "ad_native_inner_interstitial",
        "../../controller/syyx_adv_manager": "syyx_adv_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_interstitial: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f2742523sVO662SYa0J5ix1", "syyx_ui_interstitial");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_config")
          , a = t("../../configs/syyx_sdk_enum")
          , r = t("../../controller/syyx_adv_manager")
          , c = t("../../controller/syyx_manager")
          , l = t("../../syyx_sdk_api")
          , d = t("../../utils/syyx_sdk_utils")
          , u = cc._decorator
          , p = u.ccclass
          , y = u.property
          , h = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.game_node = null,
                e.icon_close = null,
                e.native_click = null,
                e.lb_title = null,
                e.lb_desc = null,
                e.img_icon = null,
                e.btn_check = null,
                e.set_background_on_show(),
                e
            }
            return o(e, t),
            e.prototype.on_click_adv2 = function() {
                this.easy_click && this.report_click()
            }
            ,
            e.prototype.on_click_adv = function() {
                this.report_click()
            }
            ,
            e.prototype.on_click_close = function() {
                var t = c.syyx_manager.get_business_config();
                if (t && t.native_institial_click_close_pro) {
                    var e = t.native_institial_click_close_pro.value[0];
                    e >= 0 && Math.random() <= e && this.report_click()
                }
                this.hide()
            }
            ,
            e.prototype.report_click = function() {
                this.native_data && this.native_data.adPosId && r.syyx_adv_manager.report_ad_click(a.e_ad_id.native_interstitial_hall, this.native_data)
            }
            ,
            e.prototype.report_show = function() {
                this.native_data && this.native_data.adPosId && r.syyx_adv_manager.report_ad_show(a.e_ad_id.native_interstitial_hall, this.native_data)
            }
            ,
            e.prototype.show = function(t) {
                if (this.node && !this.node.parent) {
                    this.native_data = t;
                    var e = d.syyx_sdk_utils.get_largest_zorder();
                    this.node.parent = d.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = e,
                    this.on_show()
                }
            }
            ,
            e.prototype.on_show = function() {
                this.icon_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.img_icon.node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.btn_check.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.native_click.on(cc.Node.EventType.TOUCH_END, this.on_click_adv2, this),
                this.refresh(),
                this.easy_click = !1;
                var t = c.syyx_manager.get_business_config();
                if (t && t.native_institial_white_easy_click) {
                    var e = t.native_institial_white_easy_click.value[0];
                    e > 0 && Math.random() <= e && (this.easy_click = !0)
                }
            }
            ,
            e.prototype.refresh = function() {
                d.syyx_sdk_utils.set_texture_url(this.img_icon, this.native_data.imgUrlList),
                this.lb_title.string = this.native_data.title + "",
                this.lb_desc.string = this.native_data.desc + "",
                this.report_show()
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.icon_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.img_icon.node.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.btn_check.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.native_click.off(cc.Node.EventType.TOUCH_END, this.on_click_adv2, this)
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                t > -1e4 && (this.game_node.x = t),
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            e.prototype.set_background_on_show = function() {
                var t = this;
                s.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg && l.syyx_sdk_api.on_show(function() {
                    t && cc.isValid(t.node) && (console.log("igc----- native_interstitial set_background_on_show"),
                    t.report_show())
                })
            }
            ,
            _([y(cc.Node)], e.prototype, "game_node", void 0),
            _([y(cc.Node)], e.prototype, "icon_close", void 0),
            _([y(cc.Node)], e.prototype, "native_click", void 0),
            _([y(cc.Label)], e.prototype, "lb_title", void 0),
            _([y(cc.Label)], e.prototype, "lb_desc", void 0),
            _([y(cc.Sprite)], e.prototype, "img_icon", void 0),
            _([y(cc.Node)], e.prototype, "btn_check", void 0),
            _([p], e)
        }(cc.Component);
        i.default = h,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_config": "syyx_sdk_config",
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_adv_manager": "syyx_adv_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_left_more_game: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "954bekTwgBBS7LwUCQIzuE9", "syyx_ui_left_more_game");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../syyx_sdk_api")
          , l = t("../../utils/syyx_sdk_utils")
          , d = t("../table_view")
          , u = cc._decorator
          , p = u.ccclass
          , y = u.property
          , h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_node = null,
                e.more_game_node = null,
                e.btn_show = null,
                e.btn_hide = null,
                e.icon_role = null,
                e.scroll_view = null,
                e.table_view = null,
                e.show_count = 0,
                e.chapter = 0,
                e.need_report = !0,
                e.item_list = [],
                e._dts = 0,
                e.is_down = !0,
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                void 0 === t && (t = -1),
                this.node && !this.node.parent && (this.node.parent = l.syyx_sdk_utils.get_stage(),
                cc.game.addPersistRootNode(this.node),
                this.node.zIndex = -1 == t ? 1e6 : t,
                this.node.active = !1),
                cc.isValid(this.node) && !this.node.active && this.on_show()
            }
            ,
            e.prototype.on_show = function() {
                this.more_game_node.stopAllActions(),
                this.node.width = cc.view.getVisibleSize().width,
                this.node.height = cc.view.getVisibleSize().height,
                this.node.y = cc.view.getVisibleSize().height / 2,
                this.node.x = cc.view.getVisibleSize().width / 2;
                var t = c.syyx_sdk_api.get_business_data_by_key("more_game_repeat_num")
                  , e = c.syyx_sdk_api.get_business_data_by_key("more_game_three_item_switch")
                  , i = 1 == e ? 3 : 2;
                this.node.active = !0,
                this.btn_show.on(cc.Node.EventType.TOUCH_END, this.tween_out, this),
                this.btn_hide.on(cc.Node.EventType.TOUCH_END, this.tween_in, this),
                this.more_game_node.width = 1 == e ? 840 : 550,
                this.more_game_node.x = -this.node.width / this.node.scaleX / 2,
                this.need_report = !0;
                for (var n = a.syyx_manager.get_multual_push_info(r.syyx_view.left_more_game), o = [], _ = 0; _ < n.cellList.length * parseInt(t); _++) {
                    var s = n.cellList[_ % n.cellList.length];
                    o && o.push(l.syyx_sdk_utils.get_app_info(s, this.show_count))
                }
                this.table_view.init(Math.ceil(o.length / i)),
                this.content = this.scroll_view.content,
                this.min_y = this.scroll_view.node.height / 2,
                this.max_y = this.content.height - this.min_y,
                this.can_show_style()
            }
            ,
            e.prototype.tween_out = function() {
                var t = this;
                if (!t.isMove) {
                    t.isMove = !0;
                    var e = cc.moveBy(.7, cc.v2(this.more_game_node.width * this.more_game_node.scaleX, 0)).easing(cc.easeBackOut())
                      , i = cc.callFunc(function() {
                        cc.isValid(t) && (t.can_hide_style(),
                        t.need_report && t.report_show())
                    });
                    t.more_game_node.runAction(cc.sequence(e, i))
                }
            }
            ,
            e.prototype.get_view_type = function() {
                return r.syyx_view.left_more_game
            }
            ,
            e.prototype.report_show = function() {
                var t = this.get_view_type()
                  , e = l.syyx_sdk_utils.convert_view_to_push(t);
                a.syyx_manager.send_multual_push_show_event(e);
                for (var i = a.syyx_manager.get_multual_push_info(r.syyx_view.left_more_game), n = 0; n < i.cellList.length; n++) {
                    var o = i.cellList[n % i.cellList.length]
                      , _ = l.syyx_sdk_utils.get_app_info(o, this.show_count);
                    a.syyx_manager.send_multual_push_item_show_event(s.e_syyx_sdk_multual_push_type.side, n + 1, _.name, _.appId)
                }
                this.need_report = !1
            }
            ,
            e.prototype.tween_in = function() {
                var t = this;
                if (!t.isMove) {
                    t.isMove = !0;
                    var e = cc.moveBy(.7, cc.v2(-this.more_game_node.width * this.more_game_node.scaleX, 0)).easing(cc.easeBackOut())
                      , i = cc.callFunc(function() {
                        cc.isValid(t) && t.can_show_style()
                    });
                    t.more_game_node.runAction(cc.sequence(e, i))
                }
            }
            ,
            e.prototype.can_show_style = function() {
                this.isMove = !1,
                this.btn_show.active = !0,
                this.btn_hide.active = !1,
                this.play_icon_animation()
            }
            ,
            e.prototype.can_hide_style = function() {
                this.isMove = !1,
                this.btn_show.active = !1,
                this.btn_hide.active = !0,
                this.stop_icon_animation()
            }
            ,
            e.prototype.play_icon_animation = function() {
                this.stop_icon_animation(),
                this.icon_role.rotation = 20;
                var t = cc.rotateTo(.7, -20)
                  , e = cc.rotateTo(.7, 20);
                this.icon_ani = this.icon_role.runAction(cc.repeatForever(cc.sequence(t, e)))
            }
            ,
            e.prototype.stop_icon_animation = function() {
                this.icon_ani && (this.icon_role.stopAction(this.icon_ani),
                this.icon_ani = null)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.active && (this.node.active = !1,
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.btn_show.off(cc.Node.EventType.TOUCH_END, this.tween_out, this),
                this.btn_hide.off(cc.Node.EventType.TOUCH_END, this.tween_in, this),
                this.stop_icon_animation()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            e.prototype.update = function(t) {
                this._dts += t,
                this._dts >= .1 && (this._dts -= .1,
                this.onFixedUpdate())
            }
            ,
            e.prototype.onFixedUpdate = function() {
                (cc.isValid(this.node) || this.node.active) && this.content.height > 0 && (this.is_down ? this.content.y -= 5 : this.content.y += 5,
                this.content.y <= this.min_y ? this.is_down = !1 : this.content.y >= this.max_y && (this.is_down = !0))
            }
            ,
            _([y(cc.Node)], e.prototype, "game_node", void 0),
            _([y(cc.Node)], e.prototype, "more_game_node", void 0),
            _([y(cc.Node)], e.prototype, "btn_show", void 0),
            _([y(cc.Node)], e.prototype, "btn_hide", void 0),
            _([y(cc.Node)], e.prototype, "icon_role", void 0),
            _([y(cc.ScrollView)], e.prototype, "scroll_view", void 0),
            _([y(d.default)], e.prototype, "table_view", void 0),
            _([p], e)
        }(cc.Component);
        i.default = h,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "../table_view": "table_view"
    }],
    syyx_ui_more_game_item_list: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "952a0qjcUpIK4r/lkH2NtWN", "syyx_ui_more_game_item_list");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../syyx_sdk_api")
          , l = t("../../utils/syyx_sdk_utils")
          , d = t("../table_view_item")
          , u = t("./syyx_ui_more_game_item")
          , p = cc._decorator
          , y = p.ccclass
          , h = p.property
          , f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_item = null,
                e.view_list = [],
                e.item_list = [],
                e
            }
            return o(e, t),
            e.prototype.update_item = function(t) {
                for (var e = a.syyx_manager.get_multual_push_info(r.syyx_view.left_more_game), i = c.syyx_sdk_api.get_business_data_by_key("more_game_repeat_num"), n = 1 == c.syyx_sdk_api.get_business_data_by_key("more_game_three_item_switch") ? 3 : 2, o = [], _ = 0; _ < e.cellList.length * parseInt(i); _++) {
                    var d = e.cellList[_ % e.cellList.length];
                    o && o.push(l.syyx_sdk_utils.get_app_info(d, 0))
                }
                for (var p = 0; p < n; p++) {
                    var y = void 0;
                    this.item_list[p] || (y = cc.instantiate(this.game_item),
                    this.item_list.push(y),
                    this.node.addChild(y)),
                    y = this.item_list[p],
                    this.view_list[p] || this.view_list.push(y.getComponent(u.default));
                    var h = p + t * n;
                    o[h] ? (y.opacity = 255,
                    this.view_list[p].refresh(o[h]),
                    this.view_list[p].set_push_param("", s.e_syyx_sdk_multual_push_type.side, "", p + 1),
                    this.view_list[p].set_can_click(!0)) : (y.opacity = 0,
                    this.view_list[p].set_can_click(!1))
                }
            }
            ,
            _([h(cc.Prefab)], e.prototype, "game_item", void 0),
            _([y], e)
        }(d.default);
        i.default = f,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "../table_view_item": "table_view_item",
        "./syyx_ui_more_game_item": "syyx_ui_more_game_item"
    }],
    syyx_ui_more_game_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "463030ognBK4awGFWgCUkD0", "syyx_ui_more_game_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../controller/syyx_manager")
          , a = t("../../model/model")
          , r = t("../../utils/syyx_sdk_utils")
          , c = cc._decorator
          , l = c.ccclass
          , d = c.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_icon = null,
                e.game_name = null,
                e.app_tag = null,
                e.lab_tag = null,
                e.app_playing = null,
                e.push_param = new a.push_param,
                e.can_click = !0,
                e
            }
            return o(e, t),
            e.prototype.refresh = function(t) {
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.app = t,
                this.init_data(),
                r.syyx_sdk_utils.set_texture_url(this.game_icon, this.app.icon),
                this.game_name.string = this.app.name,
                this.app_playing.string = this.app.random_playing + "\u4e07\u4eba\u5728\u73a9",
                this.lab_tag.string = this.app.tag,
                this.app_tag.active = "" != this.app.tag && null != this.app.tag
            }
            ,
            e.prototype.init_data = function() {
                if (!this.app.random_playing) {
                    var t = this.app.playing.split("-")
                      , e = [parseInt(t[0]), parseInt(t[1])]
                      , i = e[0] + Math.random() * (e[1] - e[0]);
                    this.app.random_playing = i.toFixed(1)
                }
            }
            ,
            e.prototype.set_push_param = function(t, e, i, n) {
                void 0 === i && (i = 0),
                void 0 === n && (n = 0),
                this.push_param.scene_name = t,
                this.push_param.chapter = i,
                this.push_param.push_view = e,
                this.push_param.position = n
            }
            ,
            e.prototype.set_can_click = function(t) {
                void 0 === t && (t = !0),
                this.can_click = t
            }
            ,
            e.prototype.on_click = function() {
                if (this.app && this.can_click) {
                    console.log("igc-----\u70b9\u51fb", this.app.appId);
                    var t = {
                        app_id: this.app.pkgName,
                        targetAppId: this.app.appId,
                        eventId: this.push_param.push_view,
                        placeId: this.push_param.position,
                        chapterId: this.push_param.chapter,
                        placeType: this.push_param.scene_name,
                        name: this.app.name,
                        userId: s.syyx_manager.get_user_id(),
                        syyxAppId: s.syyx_manager.get_syyx_app_id(),
                        on_succeed: function() {}
                    };
                    s.syyx_manager.send_multual_push_click_event(t.eventId, this.push_param.position, this.app.name, this.app.appId, this.app.pkgName),
                    igc.igc_main.instance.navigate_to_mini_program(t)
                }
            }
            ,
            _([d(cc.Sprite)], e.prototype, "game_icon", void 0),
            _([d(cc.Label)], e.prototype, "game_name", void 0),
            _([d(cc.Node)], e.prototype, "app_tag", void 0),
            _([d(cc.Label)], e.prototype, "lab_tag", void 0),
            _([d(cc.Label)], e.prototype, "app_playing", void 0),
            _([l], e)
        }(cc.Component);
        i.default = u,
        cc._RF.pop()
    }
    , {
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_native_icon: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c7c1ddA8fdBNo6gfRknrvxY", "syyx_ui_native_icon");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_config")
          , a = t("../../controller/syyx_adv_manager")
          , r = t("../../controller/syyx_manager")
          , c = t("../../syyx_sdk_api")
          , l = t("../../utils/syyx_sdk_utils")
          , d = cc._decorator
          , u = d.ccclass
          , p = d.property
          , y = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.icon_close = null,
                e.native_node = null,
                e.img_icon = null,
                e.set_background_on_show(),
                e
            }
            return o(e, t),
            e.prototype.on_click_adv = function() {
                this.report_click()
            }
            ,
            e.prototype.on_click_close = function() {
                var t = r.syyx_manager.get_business_config();
                if (t && t.native_icon_trap_pro) {
                    var e = t.native_icon_trap_pro.value[0];
                    e >= 0 && Math.random() <= e && this.report_click()
                }
                this.hide()
            }
            ,
            e.prototype.report_click = function() {
                this.native_data && this.native_data.adPosId && a.syyx_adv_manager.report_ad_click(this.native_data.adPosId, this.native_data)
            }
            ,
            e.prototype.report_show = function() {
                this.native_data && this.native_data.adPosId && a.syyx_adv_manager.report_ad_show(this.native_data.adPosId, this.native_data)
            }
            ,
            e.prototype.show = function(t, e) {
                this.node && !this.node.parent && t && (this.native_data = e,
                this.node.parent = t,
                this.on_show())
            }
            ,
            e.prototype.report_click_update_view = function(t) {
                this.node && this.node.parent && (this.native_data = t,
                this.refresh())
            }
            ,
            e.prototype.on_show = function() {
                this.icon_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.img_icon.node.on(cc.Node.EventType.TOUCH_END, this.on_click_adv, this),
                this.refresh()
            }
            ,
            e.prototype.refresh = function() {
                l.syyx_sdk_utils.set_texture_url(this.img_icon, this.native_data.imgUrlList, this.hide.bind(this)),
                this.report_show(),
                this.play_icon_animation()
            }
            ,
            e.prototype.play_icon_animation = function() {
                this.stop_icon_animation(),
                this.native_node.rotation = 0;
                var t = cc.rotateTo(.2, -5)
                  , e = cc.rotateTo(.4, 5)
                  , i = cc.rotateTo(.2, 0);
                this.icon_ani = this.native_node.runAction(cc.sequence(t, e, i))
            }
            ,
            e.prototype.stop_icon_animation = function() {
                this.icon_ani && (this.native_node.stopAction(this.icon_ani),
                this.icon_ani = null)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.icon_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.img_icon.node.off(cc.Node.EventType.TOUCH_END, this.on_click_adv, this)
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            e.prototype.set_background_on_show = function() {
                var t = this;
                s.syyx_const.syyx_sdk_channel === igc.e_channel_type.hw_qg && c.syyx_sdk_api.on_show(function() {
                    t && cc.isValid(t.node) && (console.log("igc----- native_icon set_background_on_show"),
                    t.report_show())
                })
            }
            ,
            _([p(cc.Node)], e.prototype, "icon_close", void 0),
            _([p(cc.Node)], e.prototype, "native_node", void 0),
            _([p(cc.Sprite)], e.prototype, "img_icon", void 0),
            _([u], e)
        }(cc.Component);
        i.default = y,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_config": "syyx_sdk_config",
        "../../controller/syyx_adv_manager": "syyx_adv_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_right_more_game: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "8f9d6IOTqhAqpyjdcnCYAFy", "syyx_ui_right_more_game");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../syyx_sdk_api")
          , l = t("../../utils/syyx_sdk_utils")
          , d = t("../table_view")
          , u = cc._decorator
          , p = u.ccclass
          , y = u.property
          , h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_node = null,
                e.more_game_node = null,
                e.btn_show = null,
                e.btn_hide = null,
                e.icon_role = null,
                e.scroll_view = null,
                e.table_view = null,
                e.show_count = 0,
                e.chapter = 0,
                e.need_report = !0,
                e.item_list = [],
                e._dts = 0,
                e.is_down = !0,
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                void 0 === t && (t = -1),
                this.node && !this.node.parent && (this.node.parent = l.syyx_sdk_utils.get_stage(),
                cc.game.addPersistRootNode(this.node),
                this.node.zIndex = -1 == t ? 1e6 : t,
                this.node.active = !1),
                cc.isValid(this.node) && !this.node.active && this.on_show()
            }
            ,
            e.prototype.on_show = function() {
                this.more_game_node.stopAllActions(),
                this.node.width = cc.view.getVisibleSize().width,
                this.node.height = cc.view.getVisibleSize().height,
                this.node.y = cc.view.getVisibleSize().height / 2,
                this.node.x = cc.view.getVisibleSize().width / 2;
                var t = c.syyx_sdk_api.get_business_data_by_key("more_game_repeat_num")
                  , e = c.syyx_sdk_api.get_business_data_by_key("more_game_three_item_switch")
                  , i = 1 == e ? 3 : 2;
                this.node.active = !0,
                this.btn_show.on(cc.Node.EventType.TOUCH_END, this.tween_out, this),
                this.btn_hide.on(cc.Node.EventType.TOUCH_END, this.tween_in, this),
                this.more_game_node.width = 1 == e ? 840 : 550,
                this.more_game_node.x = this.node.width / this.node.scaleX / 2,
                this.need_report = !0;
                for (var n = a.syyx_manager.get_multual_push_info(r.syyx_view.left_more_game), o = [], _ = 0; _ < n.cellList.length * t; _++) {
                    var s = n.cellList[_ % n.cellList.length];
                    o && o.push(l.syyx_sdk_utils.get_app_info(s, this.show_count))
                }
                this.table_view.init(Math.ceil(o.length / i)),
                this.content = this.scroll_view.content,
                this.min_y = this.scroll_view.node.height / 2,
                this.max_y = this.content.height - this.min_y,
                this.can_show_style()
            }
            ,
            e.prototype.tween_out = function() {
                var t = this;
                if (!t.isMove) {
                    t.isMove = !0;
                    var e = cc.moveBy(.7, cc.v2(-this.game_node.width * this.game_node.scaleX, 0)).easing(cc.easeBackOut())
                      , i = cc.callFunc(function() {
                        cc.isValid(t) && (t.can_hide_style(),
                        t.need_report && t.report_show())
                    });
                    t.game_node.runAction(cc.sequence(e, i))
                }
            }
            ,
            e.prototype.get_view_type = function() {
                return r.syyx_view.left_more_game
            }
            ,
            e.prototype.report_show = function() {
                var t = this.get_view_type()
                  , e = l.syyx_sdk_utils.convert_view_to_push(t);
                a.syyx_manager.send_multual_push_show_event(e);
                for (var i = a.syyx_manager.get_multual_push_info(r.syyx_view.left_more_game), n = 0; n < i.cellList.length; n++) {
                    var o = i.cellList[n % i.cellList.length]
                      , _ = l.syyx_sdk_utils.get_app_info(o, this.show_count);
                    a.syyx_manager.send_multual_push_item_show_event(s.e_syyx_sdk_multual_push_type.side, n + 1, _.name, _.appId)
                }
                this.need_report = !1
            }
            ,
            e.prototype.tween_in = function() {
                var t = this;
                if (!t.isMove) {
                    t.isMove = !0;
                    var e = cc.moveBy(.7, cc.v2(this.game_node.width * this.game_node.scaleX, 0)).easing(cc.easeBackOut())
                      , i = cc.callFunc(function() {
                        cc.isValid(t) && t.can_show_style()
                    });
                    t.game_node.runAction(cc.sequence(e, i))
                }
            }
            ,
            e.prototype.can_show_style = function() {
                this.isMove = !1,
                this.btn_show.active = !0,
                this.btn_hide.active = !1,
                this.play_icon_animation()
            }
            ,
            e.prototype.can_hide_style = function() {
                this.isMove = !1,
                this.btn_show.active = !1,
                this.btn_hide.active = !0,
                this.stop_icon_animation()
            }
            ,
            e.prototype.play_icon_animation = function() {
                this.stop_icon_animation(),
                this.icon_role.rotation = 20;
                var t = cc.rotateTo(.7, -20)
                  , e = cc.rotateTo(.7, 20);
                this.icon_ani = this.icon_role.runAction(cc.repeatForever(cc.sequence(t, e)))
            }
            ,
            e.prototype.stop_icon_animation = function() {
                this.icon_ani && (this.icon_role.stopAction(this.icon_ani),
                this.icon_ani = null)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.active && (this.node.active = !1,
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.btn_show.off(cc.Node.EventType.TOUCH_END, this.tween_out, this),
                this.btn_hide.off(cc.Node.EventType.TOUCH_END, this.tween_in, this),
                this.stop_icon_animation()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            e.prototype.update = function(t) {
                this._dts += t,
                this._dts >= .1 && (this._dts -= .1,
                this.onFixedUpdate())
            }
            ,
            e.prototype.onFixedUpdate = function() {
                (cc.isValid(this.node) || this.node.active) && this.content.height > 0 && (this.is_down ? this.content.y -= 5 : this.content.y += 5,
                this.content.y <= this.min_y ? this.is_down = !1 : this.content.y >= this.max_y && (this.is_down = !0))
            }
            ,
            _([y(cc.Node)], e.prototype, "game_node", void 0),
            _([y(cc.Node)], e.prototype, "more_game_node", void 0),
            _([y(cc.Node)], e.prototype, "btn_show", void 0),
            _([y(cc.Node)], e.prototype, "btn_hide", void 0),
            _([y(cc.Node)], e.prototype, "icon_role", void 0),
            _([y(cc.ScrollView)], e.prototype, "scroll_view", void 0),
            _([y(d.default)], e.prototype, "table_view", void 0),
            _([p], e)
        }(cc.Component);
        i.default = h,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "../table_view": "table_view"
    }],
    syyx_ui_super_icon_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "cd34b00111F1rCS33kntPj/", "syyx_ui_super_icon_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../utils/syyx_sdk_utils")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon = null,
                e.bg = null,
                e.select_bg = null,
                e.call_back = void 0,
                e.select_id = void 0,
                e.data = void 0,
                e
            }
            return o(e, t),
            e.prototype.update_view = function(t, e, i) {
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.data = t,
                this.select_id = e,
                this.call_back = i,
                this.select_bg.active = this.select_id == this.data.id,
                s.syyx_sdk_utils.set_texture_url(this.icon, t.icon),
                this.select_id == this.data.id ? (this.node.scaleX = 1.1,
                this.node.scaleY = 1.1) : (this.node.scaleX = 1,
                this.node.scaleY = 1)
            }
            ,
            e.prototype.on_click = function() {
                this.select_bg.active = !0,
                this.call_back && this.call_back(this.data.id)
            }
            ,
            _([c(cc.Sprite)], e.prototype, "icon", void 0),
            _([c(cc.Node)], e.prototype, "bg", void 0),
            _([c(cc.Node)], e.prototype, "select_bg", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_super_icon: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b7661jWN7RBi6zDV/Msr8GO", "syyx_ui_super_icon");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("./../../utils/syyx_sdk_utils")
          , a = t("../../configs/syyx_sdk_enum")
          , r = t("../../controller/syyx_super_power_manager")
          , c = t("../../syyx_sdk_api")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon_role = null,
                e.timer_id = void 0,
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                this.node && !this.node.parent && r.syyx_super_power_manager.is_open() ? (this.node.parent = t,
                this.on_show()) : this.hide()
            }
            ,
            e.prototype.on_show = function() {
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click_btn, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.on_click_btn, this),
                this.node.getComponent(cc.Animation).play("b");
                var t = this
                  , e = r.syyx_super_power_manager.get_icon_role_list();
                this.index = Math.floor(Math.random() * e.length),
                s.syyx_sdk_utils.set_texture_url(this.icon_role, e[this.index]),
                this.timer_id && clearInterval(this.timer_id),
                this.timer_id = setInterval(function() {
                    t.index = (t.index + 1) % e.length,
                    s.syyx_sdk_utils.set_texture_url(t.icon_role, e[t.index])
                }, 800)
            }
            ,
            e.prototype.on_click_btn = function() {
                r.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.click_enter_icon),
                c.syyx_sdk_api.create_super_power(function(t) {
                    t.show()
                })
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.timer_id && clearInterval(this.timer_id),
                this.node.getComponent(cc.Animation).stop("b"),
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click_btn, this)
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([u(cc.Sprite)], e.prototype, "icon_role", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_super_power_manager": "syyx_super_power_manager",
        "../../syyx_sdk_api": "syyx_sdk_api",
        "./../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_super_name_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bca85aTZjdCO7uib9MBwBoR", "syyx_ui_super_name_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = s.property
          , c = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.txt_name = null,
                e.bg = null,
                e.select_bg = null,
                e.call_back = void 0,
                e.select_id = void 0,
                e.data = void 0,
                e
            }
            return o(e, t),
            e.prototype.update_view = function(t, e, i) {
                this.node.off(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.node.on(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.data = t,
                this.select_id = e,
                this.call_back = i,
                this.select_bg.active = this.select_id == this.data.id,
                this.txt_name.node.color = this.select_id == this.data.id ? cc.color(42, 129, 18) : cc.color(190, 89, 13),
                this.txt_name.node.getComponent(cc.LabelOutline).color = this.data.id ? cc.color(42, 129, 18) : cc.color(190, 89, 13),
                this.txt_name.string = t.name + "",
                this.select_id == this.data.id ? (this.node.scaleX = 1.1,
                this.node.scaleY = 1.1) : (this.node.scaleX = 1,
                this.node.scaleY = 1)
            }
            ,
            e.prototype.on_click = function() {
                this.select_bg.active = !0,
                this.call_back && this.call_back(this.data.id)
            }
            ,
            _([r(cc.Label)], e.prototype, "txt_name", void 0),
            _([r(cc.Node)], e.prototype, "bg", void 0),
            _([r(cc.Node)], e.prototype, "select_bg", void 0),
            _([a], e)
        }(cc.Component);
        i.default = c,
        cc._RF.pop()
    }
    , {}],
    syyx_ui_super_power_h: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "019ecnnuHtEv4IHTg4un5dJ", "syyx_ui_super_power_h");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/ad_banner")
          , r = t("../../controller/syyx_manager")
          , c = t("../../controller/syyx_super_power_manager")
          , l = t("../../utils/syyx_sdk_utils")
          , d = t("./syyx_ui_super_icon_item")
          , u = t("./syyx_ui_super_name_item")
          , p = cc._decorator
          , y = p.ccclass
          , h = p.property
          , f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon_item = null,
                e.name_item = null,
                e.start_box = null,
                e.icon_box = null,
                e.name_box = null,
                e.result_box = null,
                e.icon_start = null,
                e.btn_start = null,
                e.icon_content = null,
                e.btn_select_icon = null,
                e.name_content = null,
                e.name_icon = null,
                e.btn_select_name = null,
                e.result_title = null,
                e.result_icon = null,
                e.img_result_desc = null,
                e.btn_close = null,
                e.btn_close2 = null,
                e.icon_item_list = [],
                e.name_item_list = [],
                e.icon_data_list = [],
                e.name_data_list = [],
                e.select_icon_id = void 0,
                e.select_name_id = void 0,
                e.start_data = {},
                e.need_banner = !0,
                e
            }
            return o(e, t),
            e.prototype.show = function() {
                if (!this.node.parent) {
                    var t = l.syyx_sdk_utils.get_largest_zorder() - 1;
                    this.node.parent = l.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = t,
                    this.on_show()
                }
            }
            ,
            e.prototype.on_show = function() {
                this.need_banner = a.ad_banner.check_need_show_banner(),
                this.need_banner && a.ad_banner.hide_banner(),
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_close2.on(cc.Node.EventType.TOUCH_END, this.on_click_close2, this),
                this.btn_start.on(cc.Node.EventType.TOUCH_END, this.on_click_start, this),
                this.btn_select_icon.on(cc.Node.EventType.TOUCH_END, this.on_click_select_icon, this),
                this.btn_select_name.on(cc.Node.EventType.TOUCH_END, this.on_click_select_name, this),
                this.select_icon_id = void 0,
                this.select_name_id = void 0,
                this.icon_data_list = c.syyx_super_power_manager.get_icon_list(),
                this.name_data_list = c.syyx_super_power_manager.get_name_list(),
                this.show_start_box()
            }
            ,
            e.prototype.show_start_box = function() {
                this.start_box.getComponent(cc.Animation).play("a1"),
                this.btn_close.active = c.syyx_super_power_manager.is_show_close_btn(),
                this.start_box.active = !0,
                this.icon_box.active = !1,
                this.name_box.active = !1,
                this.result_box.active = !1,
                this.start_data = c.syyx_super_power_manager.get_start_icon(),
                l.syyx_sdk_utils.set_texture_url(this.icon_start, this.start_data.h_icon)
            }
            ,
            e.prototype.show_icon_box = function() {
                if (this.start_box.active = !1,
                this.btn_close.active = c.syyx_super_power_manager.is_show_close_btn(),
                c.syyx_super_power_manager.is_open_icon_test())
                    for (var t in this.icon_box.getComponent(cc.Animation).play("a2"),
                    this.icon_box.active = !0,
                    this.icon_data_list.length > 3 ? this.icon_content.height = 540 : this.icon_content.height = 260,
                    this.update_icon_list(),
                    this.icon_data_list)
                        c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.show_icon, this.icon_data_list[t].id);
                else
                    this.show_name_box()
            }
            ,
            e.prototype.update_icon_list = function() {
                for (var t = 0; t < this.icon_data_list.length; t++) {
                    var e = void 0;
                    this.icon_item_list[t] ? e = this.icon_item_list[t] : (e = cc.instantiate(this.icon_item),
                    this.icon_item_list.push(e),
                    this.icon_content.addChild(e)),
                    e.getComponent(d.default).update_view(this.icon_data_list[t], this.select_icon_id, this.on_click_icon.bind(this))
                }
            }
            ,
            e.prototype.show_name_box = function() {
                if (this.btn_close.active = !1,
                this.icon_box.active = !1,
                c.syyx_super_power_manager.is_open_name_test()) {
                    this.name_box.getComponent(cc.Animation).play("a3"),
                    this.name_box.active = !0;
                    var t = c.syyx_super_power_manager.get_name_icon();
                    for (var e in l.syyx_sdk_utils.set_texture_url(this.name_icon, t.h_icon),
                    1 == t.is_icon ? (this.name_icon.node.width = t.h_icon_size.width,
                    this.name_icon.node.height = t.h_icon_size.height) : (this.name_icon.node.width = t.h_img_size.width,
                    this.name_icon.node.height = t.h_img_size.height),
                    this.update_name_list(),
                    this.name_data_list)
                        c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.show_name, this.name_data_list[e].id)
                } else
                    this.show_result_box()
            }
            ,
            e.prototype.update_name_list = function() {
                for (var t = 0; t < this.name_data_list.length; t++) {
                    var e = void 0;
                    this.name_item_list[t] ? e = this.name_item_list[t] : (e = cc.instantiate(this.name_item),
                    this.name_item_list.push(e),
                    this.name_content.addChild(e)),
                    e.getComponent(u.default).update_view(this.name_data_list[t], this.select_name_id, this.on_click_name.bind(this))
                }
            }
            ,
            e.prototype.show_result_box = function() {
                this.result_box.getComponent(cc.Animation).play("a4"),
                this.name_box.active = !1,
                this.result_box.active = !0;
                var t = c.syyx_super_power_manager.get_select_result(this.select_icon_id, this.select_name_id);
                l.syyx_sdk_utils.set_texture_url(this.result_icon, t.h_icon),
                l.syyx_sdk_utils.set_texture_url(this.result_title, t.h_title),
                l.syyx_sdk_utils.set_texture_url(this.img_result_desc, t.h_desc),
                c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.show_result_view, t.id)
            }
            ,
            e.prototype.on_click_icon = function(t) {
                this.select_icon_id = t,
                this.update_icon_list()
            }
            ,
            e.prototype.on_click_name = function(t) {
                this.select_name_id = t,
                this.update_name_list()
            }
            ,
            e.prototype.on_click_start = function() {
                c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.click_start_test_btn, this.start_data.id),
                this.show_icon_box()
            }
            ,
            e.prototype.on_click_select_icon = function() {
                null != this.select_icon_id ? (c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.click_select_icon_btn, this.select_icon_id),
                this.show_name_box()) : r.syyx_manager.create_toast("\u60a8\u8fd8\u672a\u9009\u62e9\u56fe\u7247\u54e6~")
            }
            ,
            e.prototype.on_click_select_name = function() {
                null != this.select_name_id ? (c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.click_select_name_btn, this.select_name_id),
                this.show_result_box()) : r.syyx_manager.create_toast("\u60a8\u8fd8\u672a\u9009\u62e9\u540d\u5b57\u54e6~")
            }
            ,
            e.prototype.on_click_close2 = function() {
                c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.close_result_view),
                c.syyx_super_power_manager.set_power_test_compelete(),
                this.hide()
            }
            ,
            e.prototype.on_click_close = function() {
                c.syyx_super_power_manager.send_super_power_event(s.e_super_power_event_id.click_left_close_btn),
                this.hide()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            e.prototype.on_hide = function() {
                this.need_banner && a.ad_banner.auto_show_banner(),
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_close2.off(cc.Node.EventType.TOUCH_END, this.on_click_close2, this),
                this.btn_start.off(cc.Node.EventType.TOUCH_END, this.on_click_start, this),
                this.btn_select_icon.off(cc.Node.EventType.TOUCH_END, this.on_click_select_icon, this),
                this.btn_select_name.off(cc.Node.EventType.TOUCH_END, this.on_click_select_name, this)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            _([h(cc.Prefab)], e.prototype, "icon_item", void 0),
            _([h(cc.Prefab)], e.prototype, "name_item", void 0),
            _([h(cc.Node)], e.prototype, "start_box", void 0),
            _([h(cc.Node)], e.prototype, "icon_box", void 0),
            _([h(cc.Node)], e.prototype, "name_box", void 0),
            _([h(cc.Node)], e.prototype, "result_box", void 0),
            _([h(cc.Sprite)], e.prototype, "icon_start", void 0),
            _([h(cc.Node)], e.prototype, "btn_start", void 0),
            _([h(cc.Node)], e.prototype, "icon_content", void 0),
            _([h(cc.Node)], e.prototype, "btn_select_icon", void 0),
            _([h(cc.Node)], e.prototype, "name_content", void 0),
            _([h(cc.Sprite)], e.prototype, "name_icon", void 0),
            _([h(cc.Node)], e.prototype, "btn_select_name", void 0),
            _([h(cc.Sprite)], e.prototype, "result_title", void 0),
            _([h(cc.Sprite)], e.prototype, "result_icon", void 0),
            _([h(cc.Sprite)], e.prototype, "img_result_desc", void 0),
            _([h(cc.Node)], e.prototype, "btn_close", void 0),
            _([h(cc.Node)], e.prototype, "btn_close2", void 0),
            _([y], e)
        }(cc.Component);
        i.default = f,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/ad_banner": "ad_banner",
        "../../controller/syyx_manager": "syyx_manager",
        "../../controller/syyx_super_power_manager": "syyx_super_power_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./syyx_ui_super_icon_item": "syyx_ui_super_icon_item",
        "./syyx_ui_super_name_item": "syyx_ui_super_name_item"
    }],
    syyx_ui_super_power: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "a9e7e/tw1tEEqggiFF7Trsg", "syyx_ui_super_power");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("./../../syyx_sdk_api")
          , a = t("../../configs/syyx_sdk_enum")
          , r = t("../../controller/ad_banner")
          , c = t("../../controller/syyx_manager")
          , l = t("../../controller/syyx_super_power_manager")
          , d = t("../../utils/syyx_sdk_utils")
          , u = t("./syyx_ui_super_icon_item")
          , p = t("./syyx_ui_super_name_item")
          , y = cc._decorator
          , h = y.ccclass
          , f = y.property
          , g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon_item = null,
                e.name_item = null,
                e.start_box = null,
                e.icon_box = null,
                e.name_box = null,
                e.result_box = null,
                e.icon_start = null,
                e.btn_start = null,
                e.icon_content = null,
                e.btn_select_icon = null,
                e.name_content = null,
                e.name_icon = null,
                e.btn_select_name = null,
                e.result_title = null,
                e.result_icon = null,
                e.img_result_desc = null,
                e.btn_close = null,
                e.btn_close2 = null,
                e.icon_item_list = [],
                e.name_item_list = [],
                e.icon_data_list = [],
                e.name_data_list = [],
                e.select_icon_id = void 0,
                e.select_name_id = void 0,
                e.start_data = {},
                e.need_banner = !0,
                e
            }
            return o(e, t),
            e.prototype.show = function() {
                if (!this.node.parent) {
                    var t = d.syyx_sdk_utils.get_largest_zorder() - 1;
                    this.node.parent = d.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = t,
                    this.on_show()
                }
            }
            ,
            e.prototype.on_show = function() {
                this.need_banner = r.ad_banner.check_need_show_banner(),
                this.need_banner || r.ad_banner.auto_show_banner(),
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_close2.on(cc.Node.EventType.TOUCH_END, this.on_click_close2, this),
                this.btn_start.on(cc.Node.EventType.TOUCH_END, this.on_click_start, this),
                this.btn_select_icon.on(cc.Node.EventType.TOUCH_END, this.on_click_select_icon, this),
                this.btn_select_name.on(cc.Node.EventType.TOUCH_END, this.on_click_select_name, this),
                this.select_icon_id = void 0,
                this.select_name_id = void 0,
                this.icon_data_list = l.syyx_super_power_manager.get_icon_list(),
                this.name_data_list = l.syyx_super_power_manager.get_name_list(),
                this.show_start_box()
            }
            ,
            e.prototype.show_start_box = function() {
                this.start_box.getComponent(cc.Animation).play("a1"),
                this.btn_close.active = l.syyx_super_power_manager.is_show_close_btn(),
                this.start_box.active = !0,
                this.icon_box.active = !1,
                this.name_box.active = !1,
                this.result_box.active = !1,
                this.start_data = l.syyx_super_power_manager.get_start_icon(),
                d.syyx_sdk_utils.set_texture_url(this.icon_start, this.start_data.icon)
            }
            ,
            e.prototype.show_icon_box = function() {
                if (this.start_box.active = !1,
                this.btn_close.active = l.syyx_super_power_manager.is_show_close_btn(),
                l.syyx_super_power_manager.is_open_icon_test())
                    for (var t in this.icon_box.getComponent(cc.Animation).play("a2"),
                    this.icon_box.active = !0,
                    this.icon_data_list.length > 3 ? this.icon_content.height = 540 : this.icon_content.height = 260,
                    this.update_icon_list(),
                    this.icon_data_list)
                        l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.show_icon, this.icon_data_list[t].id);
                else
                    this.show_name_box()
            }
            ,
            e.prototype.update_icon_list = function() {
                for (var t = 0; t < this.icon_data_list.length; t++) {
                    var e = void 0;
                    this.icon_item_list[t] ? e = this.icon_item_list[t] : (e = cc.instantiate(this.icon_item),
                    this.icon_item_list.push(e),
                    this.icon_content.addChild(e)),
                    e.getComponent(u.default).update_view(this.icon_data_list[t], this.select_icon_id, this.on_click_icon.bind(this))
                }
            }
            ,
            e.prototype.show_name_box = function() {
                if (this.btn_close.active = !1,
                this.icon_box.active = !1,
                l.syyx_super_power_manager.is_open_name_test()) {
                    this.name_box.getComponent(cc.Animation).play("a3"),
                    this.name_box.active = !0;
                    var t = l.syyx_super_power_manager.get_name_icon();
                    for (var e in d.syyx_sdk_utils.set_texture_url(this.name_icon, t.icon),
                    1 == t.is_icon ? (this.name_icon.node.width = t.icon_size.width,
                    this.name_icon.node.height = t.icon_size.height) : (this.name_icon.node.width = t.img_size.width,
                    this.name_icon.node.height = t.img_size.height),
                    this.update_name_list(),
                    this.name_data_list)
                        l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.show_name, this.name_data_list[e].id)
                } else
                    this.show_result_box()
            }
            ,
            e.prototype.update_name_list = function() {
                for (var t = 0; t < this.name_data_list.length; t++) {
                    var e = void 0;
                    this.name_item_list[t] ? e = this.name_item_list[t] : (e = cc.instantiate(this.name_item),
                    this.name_item_list.push(e),
                    this.name_content.addChild(e)),
                    e.getComponent(p.default).update_view(this.name_data_list[t], this.select_name_id, this.on_click_name.bind(this))
                }
            }
            ,
            e.prototype.show_result_box = function() {
                this.result_box.getComponent(cc.Animation).play("a4"),
                this.name_box.active = !1,
                this.result_box.active = !0;
                var t = l.syyx_super_power_manager.get_select_result(this.select_icon_id, this.select_name_id);
                d.syyx_sdk_utils.set_texture_url(this.result_icon, t.icon),
                d.syyx_sdk_utils.set_texture_url(this.result_title, t.title),
                d.syyx_sdk_utils.set_texture_url(this.img_result_desc, t.desc),
                l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.show_result_view, t.id)
            }
            ,
            e.prototype.on_click_icon = function(t) {
                this.select_icon_id = t,
                this.update_icon_list()
            }
            ,
            e.prototype.on_click_name = function(t) {
                this.select_name_id = t,
                this.update_name_list()
            }
            ,
            e.prototype.on_click_start = function() {
                l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.click_start_test_btn, this.start_data.id),
                this.show_icon_box()
            }
            ,
            e.prototype.on_click_select_icon = function() {
                null != this.select_icon_id ? (l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.click_select_icon_btn, this.select_icon_id),
                this.show_name_box()) : c.syyx_manager.create_toast("\u60a8\u8fd8\u672a\u9009\u62e9\u56fe\u7247\u54e6~")
            }
            ,
            e.prototype.on_click_select_name = function() {
                null != this.select_name_id ? (l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.click_select_name_btn, this.select_name_id),
                this.show_result_box()) : c.syyx_manager.create_toast("\u60a8\u8fd8\u672a\u9009\u62e9\u540d\u5b57\u54e6~")
            }
            ,
            e.prototype.on_click_close2 = function() {
                l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.close_result_view),
                l.syyx_super_power_manager.set_power_test_compelete(),
                this.hide()
            }
            ,
            e.prototype.on_click_close = function() {
                l.syyx_super_power_manager.send_super_power_event(a.e_super_power_event_id.click_left_close_btn),
                this.hide()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            e.prototype.on_hide = function() {
                this.need_banner || s.syyx_sdk_api.hide_banner(),
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_close2.off(cc.Node.EventType.TOUCH_END, this.on_click_close2, this),
                this.btn_start.off(cc.Node.EventType.TOUCH_END, this.on_click_start, this),
                this.btn_select_icon.off(cc.Node.EventType.TOUCH_END, this.on_click_select_icon, this),
                this.btn_select_name.off(cc.Node.EventType.TOUCH_END, this.on_click_select_name, this)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            _([f(cc.Prefab)], e.prototype, "icon_item", void 0),
            _([f(cc.Prefab)], e.prototype, "name_item", void 0),
            _([f(cc.Node)], e.prototype, "start_box", void 0),
            _([f(cc.Node)], e.prototype, "icon_box", void 0),
            _([f(cc.Node)], e.prototype, "name_box", void 0),
            _([f(cc.Node)], e.prototype, "result_box", void 0),
            _([f(cc.Sprite)], e.prototype, "icon_start", void 0),
            _([f(cc.Node)], e.prototype, "btn_start", void 0),
            _([f(cc.Node)], e.prototype, "icon_content", void 0),
            _([f(cc.Node)], e.prototype, "btn_select_icon", void 0),
            _([f(cc.Node)], e.prototype, "name_content", void 0),
            _([f(cc.Sprite)], e.prototype, "name_icon", void 0),
            _([f(cc.Node)], e.prototype, "btn_select_name", void 0),
            _([f(cc.Sprite)], e.prototype, "result_title", void 0),
            _([f(cc.Sprite)], e.prototype, "result_icon", void 0),
            _([f(cc.Sprite)], e.prototype, "img_result_desc", void 0),
            _([f(cc.Node)], e.prototype, "btn_close", void 0),
            _([f(cc.Node)], e.prototype, "btn_close2", void 0),
            _([h], e)
        }(cc.Component);
        i.default = g,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/ad_banner": "ad_banner",
        "../../controller/syyx_manager": "syyx_manager",
        "../../controller/syyx_super_power_manager": "syyx_super_power_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils",
        "./../../syyx_sdk_api": "syyx_sdk_api",
        "./syyx_ui_super_icon_item": "syyx_ui_super_icon_item",
        "./syyx_ui_super_name_item": "syyx_ui_super_name_item"
    }],
    syyx_ui_toast: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "1331aW+1BxN97IWTXDMeSk3", "syyx_ui_toast");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../utils/syyx_sdk_utils")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.label = null,
                e.tips_box = null,
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                if (this.node && !this.node.parent) {
                    var e = s.syyx_sdk_utils.get_largest_zorder();
                    this.node.parent = s.syyx_sdk_utils.get_stage(),
                    this.node.zIndex = e,
                    this.on_show(t)
                }
            }
            ,
            e.prototype.on_hide = function() {}
            ,
            e.prototype.on_show = function(t) {
                this.show_tips(t)
            }
            ,
            e.prototype.show_tips = function(t) {
                var e = this;
                this.label.string = t,
                this.tips_tween = null,
                this.tips_tween = cc.moveBy(1.5, cc.v2(0, 150)).easing(cc.easeSineIn());
                var i = cc.callFunc(function() {
                    cc.isValid(e) && e.hide()
                });
                this.tips_box.runAction(cc.sequence(this.tips_tween, i))
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.tips_box.y = 0,
                this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            _([c(cc.Label)], e.prototype, "label", void 0),
            _([c(cc.Node)], e.prototype, "tips_box", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_turntable: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "6585fyzH0NCLKFvjHoVhl07", "syyx_ui_turntable");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_activity_manager")
          , r = t("../../controller/syyx_manager")
          , c = t("../../utils/syyx_sdk_utils")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.turntable = null,
                e.btn_close = null,
                e.btn_click = null,
                e.icon_video = null,
                e.reward_node = null,
                e.cur_progress = null,
                e.txt_surplus_count = null,
                e.txt_progress = null,
                e.txt_reset_num = null,
                e.best_icon = null,
                e.best_num = null,
                e.best_tag = null,
                e.icon_light = null,
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                if (a.syyx_activity_manager.is_inited()) {
                    if (this.node && !this.node.parent) {
                        var e = c.syyx_sdk_utils.get_largest_zorder();
                        this.node.parent = c.syyx_sdk_utils.get_stage(),
                        this.node.zIndex = e,
                        this.on_show(t)
                    }
                } else
                    console.log("igc----- syyx_ui_turntable sdk\u6d3b\u52a8\u6ca1\u6709\u521d\u59cb\u5316 \u4e0d\u5c55\u793a\u8f6c\u76d8")
            }
            ,
            e.prototype.on_show = function(t) {
                this.btn_close.on(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_click.on(cc.Node.EventType.TOUCH_END, this.on_click_turntable, this),
                this.call_back = t,
                this.update_turntable_view();
                var e = 0
                  , i = r.syyx_manager.get_business_config();
                i && i.delat_time_normal && (e = i.delat_time_normal.value[0]);
                var n = this;
                this.btn_close.active = !1,
                this.scheduleOnce(function() {
                    n.btn_close.active = !0
                }, e)
            }
            ,
            e.prototype.update_turntable_view = function() {
                this.turntable.rotation = 0;
                for (var t = a.syyx_activity_manager._turntable_instance.get_reward_list(), e = 1; e <= 6; e++) {
                    var i = this.turntable.getChildByName("reward" + e)
                      , n = i.getChildByName("icon" + e).getComponent(cc.Sprite)
                      , o = i.getChildByName("txt_num" + e).getComponent(cc.Label)
                      , _ = i.getChildByName("tag" + e).getComponent(cc.Sprite);
                    c.syyx_sdk_utils.load_resource_texture(t[e].icon, n),
                    o.node.active = "" == t[e].tag_icon && t[e].item_count >= 1,
                    o.string = "x" + c.syyx_sdk_utils.changeToMb(t[e].item_count),
                    _.node.active = "" != t[e].tag_icon,
                    "" != t[e].tag_icon && c.syyx_sdk_utils.load_resource_texture(t[e].tag_icon, _)
                }
                var s = a.syyx_activity_manager._turntable_instance.get_best_reward_info();
                c.syyx_sdk_utils.load_resource_texture(s.icon, this.best_icon),
                this.best_num.node.active = "" == s.tag_icon && s.item_count >= 1,
                this.best_num.string = "x" + c.syyx_sdk_utils.changeToMb(s.item_count),
                this.best_tag.node.active = "" != s.tag_icon,
                "" != s.tag_icon && c.syyx_sdk_utils.load_resource_texture(s.tag_icon, this.best_tag),
                this.txt_surplus_count.string = a.syyx_activity_manager._turntable_instance.get_today_surplus_count() + "",
                this.txt_reset_num.string = a.syyx_activity_manager._turntable_instance.get_reset_count() + "";
                var r = a.syyx_activity_manager._turntable_instance.get_reset_count()
                  , l = a.syyx_activity_manager._turntable_instance.get_need_count();
                this.txt_progress.string = r - l + "/" + r,
                this.cur_progress.width = 488 * (r - l) / r,
                this.icon_video.active = !a.syyx_activity_manager._turntable_instance.check_is_first_play()
            }
            ,
            e.prototype.move_turntable = function() {
                this.btn_click.active = !1,
                this.btn_close.active = !1;
                var t = a.syyx_activity_manager._turntable_instance.get_reward();
                this.item_id = t.item_id,
                this.item_count = t.item_count,
                this.item_config = t.item_config;
                var e = 60 * (t.index - 1) - 30 + 1800
                  , i = cc.sequence(cc.rotateTo(2, e), cc.callFunc(this.stop_turntable.bind(this)));
                i.easing(cc.easeInOut(2)),
                this.turntable.runAction(i)
            }
            ,
            e.prototype.stop_turntable = function() {
                var t = this;
                this.scheduleOnce(function() {
                    t.btn_click.active = !0,
                    t.btn_close.active = !0;
                    var e = a.syyx_activity_manager._turntable_instance.get_reward();
                    a.syyx_activity_manager._turntable_instance.show_congradulations(e, t.congradulations_call_back.bind(t)),
                    a.syyx_activity_manager._turntable_instance.update_turntable_info(e),
                    t.update_turntable_view()
                }, 1)
            }
            ,
            e.prototype.congradulations_call_back = function() {
                this.call_back && this.call_back({
                    item_id: this.item_id,
                    count: this.item_count,
                    config: this.item_config
                })
            }
            ,
            e.prototype.on_click_turntable = function() {
                if (a.syyx_activity_manager._turntable_instance.check_can_play())
                    if (a.syyx_activity_manager._turntable_instance.check_is_first_play())
                        this.move_turntable();
                    else {
                        var t = this;
                        r.syyx_manager.show_video(s.e_ad_id.video_luck_draw, function() {}, function() {}, function(e, i) {
                            i.isEnded ? (console.log("igc -----has watched video to get reward"),
                            t.move_turntable()) : r.syyx_manager.create_toast("\u5e7f\u544a\u6ca1\u770b\u5b8c\uff0c\u65e0\u6cd5\u9886\u53d6\u5956\u52b1")
                        }, function() {})
                    }
                else
                    r.syyx_manager.create_toast("\u4eca\u65e5\u8f6c\u76d8\u6b21\u6570\u5df2\u7528\u5b8c\uff0c\u660e\u65e5\u5237\u65b0\uff01")
            }
            ,
            e.prototype.on_click_close = function() {
                this.hide()
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.btn_close.off(cc.Node.EventType.TOUCH_END, this.on_click_close, this),
                this.btn_click.off(cc.Node.EventType.TOUCH_END, this.on_click_turntable, this),
                this.unscheduleAllCallbacks()
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            _([u(cc.Node)], e.prototype, "turntable", void 0),
            _([u(cc.Node)], e.prototype, "btn_close", void 0),
            _([u(cc.Node)], e.prototype, "btn_click", void 0),
            _([u(cc.Node)], e.prototype, "icon_video", void 0),
            _([u(cc.Node)], e.prototype, "reward_node", void 0),
            _([u(cc.Node)], e.prototype, "cur_progress", void 0),
            _([u(cc.Label)], e.prototype, "txt_surplus_count", void 0),
            _([u(cc.Label)], e.prototype, "txt_progress", void 0),
            _([u(cc.Label)], e.prototype, "txt_reset_num", void 0),
            _([u(cc.Sprite)], e.prototype, "best_icon", void 0),
            _([u(cc.Label)], e.prototype, "best_num", void 0),
            _([u(cc.Sprite)], e.prototype, "best_tag", void 0),
            _([u(cc.Node)], e.prototype, "icon_light", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_activity_manager": "syyx_activity_manager",
        "../../controller/syyx_manager": "syyx_manager",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_unit_game: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b5da9PZcJ9ASKrmm9HTl2/b", "syyx_ui_unit_game");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../utils/syyx_sdk_utils")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.game_node = null,
                e.game_name = null,
                e.game_icon = null,
                e.show_count = 0,
                e.scene_name = "",
                e.chapter = 0,
                e
            }
            return o(e, t),
            e.prototype.show = function(t) {
                a.syyx_manager.is_ready() ? this.node && !this.node.parent && (this.node.parent = t,
                this.on_show()) : console.log("igc----- config initialization has not achieved")
            }
            ,
            e.prototype.on_show = function() {
                this.game_node.on(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.report_show();
                var t = a.syyx_manager.get_multual_push_info(r.syyx_view.unit);
                this.app = c.syyx_sdk_utils.get_app_info(t.cellList[0], this.show_count),
                this.refresh(),
                a.syyx_manager.send_multual_push_item_show_event(s.e_syyx_sdk_multual_push_type.button, 1, this.app.name, this.app.appId)
            }
            ,
            e.prototype.refresh = function() {
                this.game_name.string = this.app.name,
                c.syyx_sdk_utils.set_texture_url(this.game_icon, this.app.icon)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            e.prototype.on_hide = function() {
                this.game_node.off(cc.Node.EventType.TOUCH_END, this.on_click, this)
            }
            ,
            e.prototype.report_show = function() {
                var t = this.get_view_type()
                  , e = c.syyx_sdk_utils.convert_view_to_push(t);
                a.syyx_manager.send_multual_push_show_event(e)
            }
            ,
            e.prototype.on_click = function() {
                if (this.app) {
                    console.log("igc-----click", this.app.appId);
                    var t = {
                        app_id: this.app.pkgName,
                        targetAppId: this.app.appId,
                        eventId: s.e_syyx_sdk_multual_push_type.button,
                        placeId: 0,
                        chapterId: this.chapter,
                        placeType: this.scene_name,
                        name: this.app.name,
                        userId: a.syyx_manager.get_user_id(),
                        syyxAppId: a.syyx_manager.get_syyx_app_id(),
                        on_succeed: function() {}
                    };
                    a.syyx_manager.send_multual_push_click_event(t.eventId, "0", this.app.name, this.app.appId, this.app.pkgName),
                    igc.igc_main.instance.navigate_to_mini_program(t)
                }
            }
            ,
            e.prototype.get_view_type = function() {
                return r.syyx_view.unit
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function(t, e) {
                t > -1e4 && (this.game_node.x = t),
                e > -1e4 && (this.game_node.y = e)
            }
            ,
            _([u(cc.Node)], e.prototype, "game_node", void 0),
            _([u(cc.Label)], e.prototype, "game_name", void 0),
            _([u(cc.Sprite)], e.prototype, "game_icon", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    syyx_ui_unit_icon: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "073a326HTNHsoq7TnHjw3Cx", "syyx_ui_unit_icon");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../configs/syyx_sdk_enum")
          , a = t("../../controller/syyx_manager")
          , r = t("../../model/model")
          , c = t("../../utils/syyx_sdk_utils")
          , l = cc._decorator
          , d = l.ccclass
          , u = l.property
          , p = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.game_node = null,
                e.game_icon = null,
                e.show_count = 0,
                e.scene_name = "",
                e.node_parent = void 0,
                e.chapter = 0,
                e.index = -1,
                e.items = [],
                e
            }
            return o(e, t),
            e.prototype.refresh = function() {
                this.app = this.items[this.index],
                this.play_icon_animation(),
                c.syyx_sdk_utils.set_texture_url(this.game_icon, this.app.icon),
                a.syyx_manager.send_multual_push_item_show_event(s.e_syyx_sdk_multual_push_type.icon, 1, this.app.name, this.app.appId)
            }
            ,
            e.prototype.on_show = function() {
                this.game_node.on(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.report_show();
                var t = a.syyx_manager.get_multual_push_info(r.syyx_view.unit_icon);
                if (-1 == this.index && 0 == this.items.length) {
                    this.items = [];
                    for (var e = 0; e < t.cellList.length; e++) {
                        var i = t.cellList[e];
                        this.items.push(c.syyx_sdk_utils.get_app_info(i, this.show_count))
                    }
                    this.index = Math.floor(Math.random() * this.items.length)
                }
                this.refresh_cb()
            }
            ,
            e.prototype.refresh_cb = function() {
                var t = this;
                t.index = ++t.index % this.items.length,
                t.refresh(),
                this.timer_id && clearTimeout(this.timer_id),
                this.timer_id = setTimeout(function() {
                    t.refresh_cb()
                }, 3e3)
            }
            ,
            e.prototype.play_icon_animation = function() {
                this.stop_icon_animation(),
                this.game_node.rotation = 0;
                var t = cc.rotateTo(.25, -15)
                  , e = cc.rotateTo(.5, 15)
                  , i = cc.rotateTo(.25, 0);
                this.icon_ani = this.game_node.runAction(cc.sequence(t, e, i))
            }
            ,
            e.prototype.stop_icon_animation = function() {
                this.icon_ani && (this.game_node.stopAction(this.icon_ani),
                this.icon_ani = null)
            }
            ,
            e.prototype.get_view_type = function() {
                return r.syyx_view.unit_icon
            }
            ,
            e.prototype.set_default_pos = function() {}
            ,
            e.prototype.set_style_pos = function() {}
            ,
            e.prototype.show = function(t) {
                if (a.syyx_manager.__unit_icon_protect)
                    return console.log("igc----- unit icon is in new fish protect cd "),
                    this.node_parent = t,
                    null;
                this.node && !this.node.parent && (this.node.parent = t,
                this.on_show())
            }
            ,
            e.prototype.auto_show = function() {
                if (a.syyx_manager.is_ready() && this.node_parent && !this.node.parent) {
                    if (!this.node_parent.isValid)
                        return void console.log("igc----- unit_icon's parent has been destroyed");
                    this.show(this.node_parent),
                    console.log("igc----- syyx_ui_unit_icon timer out auto show view")
                }
            }
            ,
            e.prototype.report_show = function() {
                var t = this.get_view_type()
                  , e = c.syyx_sdk_utils.convert_view_to_push(t);
                a.syyx_manager.send_multual_push_show_event(e)
            }
            ,
            e.prototype.on_click = function() {
                if (this.app) {
                    console.log("igc----- click one time ", this.app.appId);
                    var t = {
                        app_id: this.app.pkgName,
                        targetAppId: this.app.appId,
                        eventId: s.e_syyx_sdk_multual_push_type.icon,
                        placeId: 0,
                        chapterId: this.chapter,
                        placeType: this.scene_name,
                        name: this.app.name,
                        userId: a.syyx_manager.get_user_id(),
                        syyxAppId: a.syyx_manager.get_syyx_app_id(),
                        on_succeed: function() {}
                    };
                    a.syyx_manager.send_multual_push_click_event(t.eventId, "0", this.app.name, this.app.appId, this.app.pkgName),
                    igc.igc_main.instance.navigate_to_mini_program(t)
                }
            }
            ,
            e.prototype.on_hide = function() {
                this.game_node.off(cc.Node.EventType.TOUCH_END, this.on_click, this),
                this.stop_icon_animation(),
                this.timer_id && clearTimeout(this.timer_id)
            }
            ,
            e.prototype.hide = function() {
                this.node && this.node.parent && (this.node.parent.removeChild(this.node),
                this.on_hide())
            }
            ,
            _([u(cc.Node)], e.prototype, "game_node", void 0),
            _([u(cc.Sprite)], e.prototype, "game_icon", void 0),
            _([d], e)
        }(cc.Component);
        i.default = p,
        cc._RF.pop()
    }
    , {
        "../../configs/syyx_sdk_enum": "syyx_sdk_enum",
        "../../controller/syyx_manager": "syyx_manager",
        "../../model/model": "model",
        "../../utils/syyx_sdk_utils": "syyx_sdk_utils"
    }],
    table_view_item: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "e1ccdou++lMw4SZzJmgp9Mp", "table_view_item");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = cc._decorator
          , a = s.ccclass
          , r = (s.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemID = 1,
                e
            }
            return o(e, t),
            e.prototype.update_item_id = function(t) {
                this.itemID = t
            }
            ,
            e.prototype.update_item = function(t) {
                this.itemID = t
            }
            ,
            _([a], e)
        }(cc.Component));
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    table_view: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "425fauzeLJJppzdP3mIkfR6", "table_view");
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
        }
        ), _ = this && this.__decorate || function(t, e, i, n) {
            var o, _ = arguments.length, s = _ < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(t, e, i, n);
            else
                for (var a = t.length - 1; a >= 0; a--)
                    (o = t[a]) && (s = (_ < 3 ? o(s) : _ > 3 ? o(e, i, s) : o(e, i)) || s);
            return _ > 3 && s && Object.defineProperty(e, i, s),
            s
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("./table_view_item")
          , a = cc._decorator
          , r = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemTemplate = null,
                e.scrollView = null,
                e.spawnCount = 0,
                e.spacing = 0,
                e._dts = 0,
                e._hasInit = !1,
                e.maxPosY = 0,
                e.content = null,
                e.items = [],
                e.totalCount = 0,
                e.updateTimer = 0,
                e.updateInterval = .05,
                e.lastContentPosY = 0,
                e.bufferZone = 0,
                e
            }
            return o(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.init = function(t) {
                this._dts = 0,
                this._hasInit = !1,
                this.maxPosY = 0,
                this.content = this.scrollView.content,
                this.items = [],
                this.totalCount = t,
                this.initialize(),
                this.updateTimer = 0,
                this.updateInterval = .05,
                this.lastContentPosY = 0,
                this.bufferZone = this.spawnCount * (this.itemTemplate.data.height + this.spacing) / 2
            }
            ,
            e.prototype.initialize = function() {
                this.content.height = this.totalCount * (this.itemTemplate.data.height + this.spacing) + this.spacing;
                for (var t = Math.min(this.spawnCount, this.totalCount), e = 0; e < t; ++e) {
                    var i = cc.instantiate(this.itemTemplate);
                    this.content.addChild(i),
                    i.setPosition(0, -i.height * (.5 + e) - this.spacing * (e + 1)),
                    i.getComponent(s.default).update_item(0 + e),
                    i.getComponent(s.default).update_item_id(0 + e),
                    this.items.push(i)
                }
                this._hasInit = !0
            }
            ,
            e.prototype.getPositionInView = function(t) {
                var e = t.parent.convertToWorldSpaceAR(t.position);
                return this.scrollView.node.convertToNodeSpaceAR(e)
            }
            ,
            e.prototype.setFirstItemId = function() {}
            ,
            e.prototype.onFixedUpdate = function(t) {
                if (this.updateTimer += t,
                !(this.updateTimer < this.updateInterval)) {
                    this.updateTimer = 0;
                    for (var e = this.items, i = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.data.height + this.spacing) * e.length, o = 0, _ = 0; _ < e.length; ++_) {
                        var a = this.getPositionInView(e[_]);
                        if (i) {
                            if (o = e[_].y + n,
                            a.y < -this.bufferZone && o < 0) {
                                e[_].y = o;
                                var r = (c = e[_].getComponent(s.default)).itemID - e.length;
                                c.update_item(r),
                                c.update_item_id(r),
                                this.setFirstItemId(r, _, a.y)
                            }
                        } else if (o = e[_].y - n,
                        a.y > this.bufferZone && o > -this.content.height) {
                            var c;
                            e[_].y = o,
                            r = (c = e[_].getComponent(s.default)).itemID + e.length,
                            c.update_item(r),
                            c.update_item_id(r),
                            this.setFirstItemId(r, _, a.y)
                        }
                    }
                    this.lastContentPosY = this.scrollView.content.y
                }
            }
            ,
            e.prototype.update = function(t) {
                this._hasInit && (this._dts += t,
                this._dts >= .1 && (this._dts -= .1,
                this.onFixedUpdate(.1)))
            }
            ,
            e.prototype.addItem = function() {
                this.content.height = (this.totalCount + 1) * (this.itemTemplate.data.height + this.spacing) + this.spacing,
                this.totalCount = this.totalCount + 1
            }
            ,
            e.prototype.removeItem = function() {
                this.content.height = (this.totalCount - 1) * (this.itemTemplate.data.height + this.spacing) + this.spacing,
                this.totalCount = this.totalCount - 1
            }
            ,
            e.prototype.scrollToFixedPosition = function(t) {
                this.scrollView.scrollToOffset(cc.v2(0, t), 0)
            }
            ,
            e.prototype.jumpToIndex = function(t) {
                this.scrollView.scrollToPercentVertical(1 - t / this.totalCount, 0),
                t > 25 && (t = 25);
                for (var e = this.items, i = 0; i < e.length; i++) {
                    var n = e[i].getComponent(s.default)
                      , o = t + i;
                    n.update_item(o),
                    n.update_item_id(o)
                }
            }
            ,
            e.prototype.resetData = function(t, e) {
                t > 20 && (t = 20);
                for (var i = this.items, n = 0; n < i.length; n++) {
                    var o = i[n].getComponent(s.default)
                      , _ = t + n;
                    o.update_item(_),
                    o.update_item_id(_)
                }
                this.scrollToFixedPosition(e),
                this.lastContentPosY = e,
                this.scrollView.content.y = e
            }
            ,
            e.prototype.clear = function() {
                for (var t = 0; t < this.items.length; t++)
                    this.items[t].destroy();
                this.items = []
            }
            ,
            _([c(cc.Prefab)], e.prototype, "itemTemplate", void 0),
            _([c(cc.ScrollView)], e.prototype, "scrollView", void 0),
            _([c(Int16Array)], e.prototype, "spawnCount", void 0),
            _([c(Int16Array)], e.prototype, "spacing", void 0),
            _([r], e)
        }(cc.Component);
        i.default = l,
        cc._RF.pop()
    }
    , {
        "./table_view_item": "table_view_item"
    }],
    tpfclientsdk: [function(t, e) {
        "use strict";
        cc._RF.push(e, "0e718fPbY5Mzq9MmbHL2JTx", "tpfclientsdk");
        var i = function t() {
            function e(t) {
                return null != t ? String(t) : t
            }
            this.appId = 0,
            this.channelId = 0,
            this.statAppKey = "",
            this.configAppSecKey = "",
            this.account = "",
            this.stat = null,
            this._tpfconfig = null,
            this.version = null,
            t.prototype.setEventHandler = function(t, e) {
                this.eventHandler[t] = e
            }
            ,
            t.prototype.init = function() {
                return this.stat = new tpfstat({
                    appId: e(this.appId),
                    appKey: e(this.statAppKey),
                    version: e(this.version),
                    sversion: e(this.sversion),
                    channelId: e(this.channelId),
                    eventUrl: e(this.statEventUrl),
                    batchEventUrl: e(this.batchStatEventUrl)
                }),
                this._tpfconfig = new tpfconfig({
                    appId: e(this.appId),
                    appKey: e(this.configAppSecKey),
                    channelId: e(this.channelId),
                    configUrl: e(this.configUrl)
                }),
                0
            }
            ,
            t.prototype.getClientVersion = function() {
                return this.version
            }
            ,
            t.prototype.uninit = function() {
                this.stat = null,
                this._tpfconfig = null
            }
            ,
            t.prototype.setEventHandler = function(t, e) {
                this.eventHandler[t] = e
            }
            ,
            t.prototype.getTpfConfig = function() {
                return this._tpfconfig
            }
            ,
            t.prototype.getStat = function() {
                return this.stat
            }
        }
          , n = function t() {
            this.param = {},
            t.prototype.setParam = function(t, e) {
                return this.param[t] = e,
                this
            }
            ,
            t.prototype.build = function() {
                var t = new i;
                return null == this.param.appId && console.error("appId is null!"),
                t.appId = this.param.appId,
                null == this.param.channelId && console.error("channelId is null!"),
                t.channelId = this.param.channelId,
                null == this.param.appKey && console.error("appKey is null!"),
                t.appKey = this.param.appKey,
                null == this.param.platType && console.error("platType is null"),
                t.platType = this.param.platType,
                this.param.version ? t.version = this.param.version : console.error("version is null"),
                this.param.sversion ? t.sversion = this.param.sversion : console.info("sversion is null"),
                this.param.statAppKey ? t.statAppKey = this.param.statAppKey : console.error("statAppKey is null"),
                this.param.statEventUrl ? t.statEventUrl = this.param.statEventUrl : console.error("statEventUrl is null"),
                this.param.batchStatEventUrl ? t.batchStatEventUrl = this.param.batchStatEventUrl : console.error("batchStatEventUrl is null"),
                this.param.subChannelId ? t.subChannelId = this.param.subChannelId : t.subChannelId = "",
                this.param.configAppSecKey ? t.configAppSecKey = this.param.configAppSecKey : (console.error("configAppSecKey is null"),
                t.configAppSecKey = "0164619900d242b59e59f474e0294e4e"),
                this.param.configUrl ? t.configUrl = this.param.configUrl : (console.error("configUrl is null"),
                t.configUrl = ""),
                t
            }
        }
          , o = {
            getBuilder: function() {
                return new n
            }
        };
        window.tpfclientsdk = o,
        cc._RF.pop()
    }
    , {}],
    tpfconfig: [function(t, e) {
        "use strict";
        cc._RF.push(e, "88b612jW7FE8YNjGjTEQ72h", "tpfconfig"),
        window.tpfconfig = function t(e) {
            function i(t, e) {
                return t = Math.ceil(t),
                e = Math.floor(e),
                Math.floor(Math.random() * (e - t)) + t
            }
            function n(t, e, i, n, o) {
                return md5("appId=" + t + "&json=" + o + "&random=" + i + "&timestamp=" + n + "&appKey=" + e).toUpperCase()
            }
            this.appId = e.appId,
            this.appKey = e.appKey,
            this.channelId = e.channelId,
            this.configUrl = e.configUrl,
            tpfstat.prototype.CONFIG_API_VERSION = "2.2",
            tpfstat.prototype.CONFIG_CLIENT_SOURCE = "client",
            t.prototype.httpGetconfig = function(t, e, o, _) {
                var s, a, r, c, l = i(0, 4294967295), d = {
                    appId: this.appId,
                    channelId: this.channelId,
                    version: e,
                    configKey: t,
                    userId: ""
                }, u = JSON.stringify(d), p = {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: (s = this.appId,
                    a = this.appKey,
                    "appId=" + s + "&random=" + (r = l + "") + "&timestamp=" + (c = o) + "&sign=" + n(s, a, r, c, u))
                }, y = this.configUrl;
                HttpUtils.http_request("POST", y, p, u, !1, function(e, i) {
                    var n, o;
                    console.log("test111111111111"),
                    200 == e ? (o = (n = JSON.parse(i)).version,
                    _(!0, t, o, n.configValue)) : 304 == e ? _(!1, t, o, null) : _(!1, null, null, null)
                })
            }
            ,
            t.prototype.httpGetconfigWx = function(t, e, o, _) {
                var s = i(0, 4294967295)
                  , a = {
                    appId: this.appId,
                    channelId: this.channelId,
                    version: e,
                    configKey: t,
                    userId: ""
                }
                  , r = JSON.stringify(a)
                  , c = {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: n(this.appId, this.appKey, s + "", o, r)
                }
                  , l = this.configUrl;
                HttpUtils.http_request_wx("POST", l, c, r, !1, function(e, i) {
                    var n;
                    console.log("test111111111111", e, i),
                    200 == e ? (n = i.version,
                    _(!0, t, n, i.configValue)) : 304 == e ? _(!1, t, !0, null) : _(!1, null, null, null)
                })
            }
            ,
            t.prototype.parse_csv = function(t, e) {
                if ("" == t)
                    return {};
                for (var i = new RegExp('(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\,\\r\\n]*))',"gi"), n = [[]], o = null; o = i.exec(t); ) {
                    var _, s = o[1];
                    s.length && "," !== s && n.push([]),
                    _ = o[2] ? o[2].replace(new RegExp('""',"g"), '"') : o[3],
                    n[n.length - 1].push(_)
                }
                var a = {};
                if (3 < n.length) {
                    for (var r = n[1], c = -1, l = 0; l < r.length; ++l)
                        if (r[l] == e) {
                            c = l;
                            break
                        }
                    var d = n[2];
                    for (l = 3; l < n.length; ++l)
                        if (1 !== n[l].length || "" !== n[l][0]) {
                            var u;
                            a[u = -1 != c ? n[l][c] : l - 3] = {};
                            for (var p = 0; p < r.length; ++p)
                                "string" == d[p] ? a[u][r[p]] = n[l][p] || "" : "int" == d[p] ? a[u][r[p]] = parseInt(n[l][p] || 0) : "float" == d[p] ? a[u][r[p]] = parseFloat(n[l][p] || 0) : "boolean" == d[p] ? a[u][r[p]] = "TRUE" == n[l][p] : "json" == d[p] && "" != n[l][p] && (a[u][r[p]] = JSON.parse(n[l][p]))
                        }
                }
                return a
            }
        }
        ,
        cc._RF.pop()
    }
    , {}],
    tpfstat: [function(t, e) {
        "use strict";
        cc._RF.push(e, "5eddbbHuPhEUa02MMZZqmux", "tpfstat"),
        window.tpfstat = function t(e) {
            function i(t, e, i, n, o) {
                return "appId=" + t + "&random=" + i + "&timestamp=" + n + "&sign=" + md5("appId=" + t + "&json=" + o + "&random=" + i + "&timestamp=" + n + "&appKey=" + e).toUpperCase()
            }
            this.appId = e.appId,
            this.appKey = e.appKey,
            this.version = e.version,
            this.sversion = e.sversion,
            this.channelId = e.channelId,
            this.eventUrl = e.eventUrl,
            this.batchEventUrl = e.batchEventUrl,
            this.debug = e.debug,
            t.prototype.GAME_EVENT_API_VERSION = "2.2",
            t.prototype.GAME_EVENT_CLIENT_SOURCE = "client",
            t.prototype.EventType = {
                APP_START: "app_start",
                USER_REGISTER: "register",
                USER_LOGIN: "login",
                HEART_BEAT: "heart",
                COIN_PAY: "coin_pay",
                COIN_TRADE: "coin_trade",
                COIN_BROKEN: "coin_broken",
                ITEM_TRADE: "item_trade",
                GAME_QUEST: "game_quest",
                GAME_LEVEL: "game_level",
                AD: "ad",
                USER_CUSTOM: "user_event"
            },
            t.prototype.GenderType = {
                UNKNOWN: 0,
                MALE: 1,
                FEMALE: 2
            },
            t.prototype.LoginType = {
                USER_LOGIN: 0,
                USER_LOGOUT: 1,
                USER_SUB_ACCOUNT_LOGIN: 2,
                USER_SUB_ACCOUNT_LOGOUT: 3
            },
            t.prototype.AccountType = {
                USER_ACCOUNT: 0,
                SUB_USER_ACCOUNT: 1
            },
            t.prototype.QuestStatus = {
                START: "A",
                WIN: "S",
                FAIL: "F"
            },
            t.prototype.FreeType = {
                NOT_FREE: 0,
                SYSTEM_FREE: 1
            },
            t.prototype.setUrl = function() {}
            ,
            t.prototype.onEvent = function() {}
            ,
            t.prototype.sendAppStart = function(t, e) {
                this._sendGameEvent(this.EventType.APP_START, t, e)
            }
            ,
            t.prototype.sendUserRegister = function(t, e) {
                this._sendGameEvent(this.EventType.USER_REGISTER, t, e)
            }
            ,
            t.prototype.sendUserLogin = function(t, e) {
                this._sendGameEvent(this.EventType.USER_LOGIN, t, e)
            }
            ,
            t.prototype.sendHeartBeat = function(t, e) {
                this._sendGameEvent(this.EventType.HEART_BEAT, t, e)
            }
            ,
            t.prototype.sendCoinPay = function(t, e) {
                this._sendGameEvent(this.EventType.COIN_PAY, t, e)
            }
            ,
            t.prototype.sendCoinTrade = function(t, e) {
                this._sendGameEvent(this.EventType.COIN_TRADE, t, e)
            }
            ,
            t.prototype.sendCoinBroken = function(t, e) {
                this._sendGameEvent(this.EventType.COIN_BROKEN, t, e)
            }
            ,
            t.prototype.sendItemTrade = function(t, e) {
                this._sendGameEvent(this.EventType.ITEM_TRADE, t, e)
            }
            ,
            t.prototype.sendGameQuest = function(t, e) {
                this._sendGameEvent(this.EventType.GAME_QUEST, t, e)
            }
            ,
            t.prototype.sendGameLevel = function(t, e) {
                this._sendGameEvent(this.EventType.GAME_LEVEL, t, e)
            }
            ,
            t.prototype.sendAd = function(t, e) {
                this._sendGameEvent(this.EventType.AD, t, e)
            }
            ,
            t.prototype.sendUserCustom = function(t, e) {
                this._sendGameEvent(this.EventType.USER_CUSTOM, t, e)
            }
            ,
            t.prototype._post = function(t, e, i) {
                this.debug || HttpUtils.http_request("POST", t, e, i, !1, function(t, e) {
                    200 == t ? console.log("Stat: post request success, respBody=", e) : console.warn("Stat: post return httpCode=" + t + ", respBody=" + e)
                })
            }
            ,
            t.prototype._sendGameEvent = function(t, e, n) {
                var o, _, s = (o = 0,
                _ = 4294967295,
                o = Math.ceil(o),
                _ = Math.floor(_),
                Math.floor(Math.random() * (_ - o)) + o), a = {
                    appId: this.appId,
                    version: this.version,
                    sversion: this.sversion,
                    source: this.GAME_EVENT_CLIENT_SOURCE,
                    ettime: n,
                    channelId: this.channelId,
                    event: t,
                    context: e
                }, r = JSON.stringify(a), c = {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: i(this.appId, this.appKey, s + "", n, r)
                };
                this._post(this.eventUrl, c, r)
            }
        }
        ,
        cc._RF.pop()
    }
    , {}],
    tt_lp: [function(t, e) {
        "use strict";
        cc._RF.push(e, "804c7YWUKZFyr4XBJaIuNtu", "tt_lp");
        var i = function() {
            function t() {}
            return t.prototype.start = function() {}
            ,
            t.prototype.iniTape = function() {
                cc.sys.platform == cc.sys.BYTEDANCE_GAME && (this.tapePath = null,
                this.tapeStartTime = 0,
                this.tapeMaxTime = 90,
                this.recorder = tt.getGameRecorderManager())
            }
            ,
            t.prototype.onTapeButtonClick = function() {
                (new Date).getTime() - this.tapeStartTime < 3e3 ? cc.log("\u5f55\u5c4f\u65f6\u95f4\u5c0f\u4e8e3\u79d2") : this.stopTape()
            }
            ,
            t.prototype.tapeTimeControl = function() {}
            ,
            t.prototype.startTape = function() {
                var t = this;
                cc.sys.platform == cc.sys.BYTEDANCE_GAME && (this.tapeStartTime = (new Date).getTime(),
                "undefined" != typeof tt && (this.recorder.onStart(function() {
                    console.log("\u5f55\u5c4f\u5f00\u59cb"),
                    t.tapeTimeControl()
                }),
                this.recorder.start({
                    duration: this.tapeMaxTime
                })))
            }
            ,
            t.prototype.stopTape = function() {
                var t = this;
                cc.sys.platform == cc.sys.BYTEDANCE_GAME && "undefined" != typeof tt && (this.recorder.onStop(function(e) {
                    console.log(e.videoPath, "\u5f55\u5c4f\u7ed3\u675f"),
                    t.tapePath = e.videoPath
                }),
                this.recorder.stop())
            }
            ,
            t.prototype.tapeShare = function(t) {
                var e = this;
                if (cc.sys.platform == cc.sys.BYTEDANCE_GAME && "undefined" != typeof tt) {
                    if (null == this.tapePath)
                        return;
                    var i = lwsdk.getShareByWeight(1);
                    tt.shareAppMessage({
                        channel: "video",
                        title: i.title,
                        extra: {
                            videoPath: this.tapePath
                        },
                        success: function() {
                            console.log("\u5f55\u5c4f\u5206\u4eab\u6210\u529f"),
                            t(),
                            e.tapeShareSucces()
                        },
                        fail: function() {
                            console.log("\u5f55\u5c4f\u5206\u4eab\u5931\u8d25", e.tapePath),
                            e.tapeShareFail()
                        }
                    })
                }
            }
            ,
            t.prototype.tapeShareSucces = function() {}
            ,
            t.prototype.tapeShareFail = function() {}
            ,
            t
        }();
        window.lpComp || (window.lpComp = new i),
        cc._RF.pop()
    }
    , {}],
    utils: [function(t, e) {
        "use strict";
        cc._RF.push(e, "d5953AJThRDYKnoHKfeZsa1", "utils");
        var i = function() {
            function t() {
                this.view = [],
                this.pass = [],
                this.export = [],
                this.viewLayer = null,
                this.exportParent = null,
                this.sound = [],
                this.isPlayMusic = !1,
                this.phoneSize = cc.winSize,
                this.openStartViewNum = 0,
                this.furnitureMsg = [],
                this.isLoadGameView = !1,
                this.isOnceOpenStartView = !1,
                this.isJSYSErr = !1,
                this.isZLYC = !1
            }
            return t.prototype.init = function() {
                var t = new Date;
                this.date = t.toLocaleDateString(),
                this.getData("jj") || (this.furnitureMsg = [{
                    name: "td",
                    use: 0,
                    quantity: 4,
                    unlock: [0]
                }, {
                    name: "dt",
                    use: 0,
                    quantity: 5,
                    unlock: [0]
                }, {
                    name: "dm",
                    use: 0,
                    quantity: 6,
                    unlock: [0]
                }, {
                    name: "qz",
                    use: 0,
                    quantity: 5,
                    unlock: [0]
                }, {
                    name: "sf",
                    use: 0,
                    quantity: 4,
                    unlock: [0]
                }, {
                    name: "cl",
                    use: 0,
                    quantity: 5,
                    unlock: [0]
                }, {
                    name: "cj",
                    use: 0,
                    quantity: 4,
                    unlock: [0]
                }],
                this.setData("jj", JSON.stringify(this.furnitureMsg))),
                this.getData("qd") || this.setData("qd", 0),
                this.getData("qdDate") || this.setData("qdDate", 0),
                this.getData("pass") || this.setData("pass", 0),
                this.getData("MaxPass") || this.setData("MaxPass", 0),
                this.getData("jb") || this.setData("jb", 0),
                this.getData("yy") || this.setData("yy", 1),
                this.getData("yx") || this.setData("yx", 1),
                this.getData("cjsb") || this.setData("cjsb", 0),
                this.getData("cj") || this.setData("cj", 2),
                this.getData("init") || (this.setData("init", 1),
                this.getData("tl") || (cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME ? this.setData("tl", 15) : this.setData("tl", 10)))
            }
            ,
            t.prototype.getData = function(t) {
                var e = cc.sys.localStorage.getItem(t);
                return isNaN(Number(e)) ? e : Number(e)
            }
            ,
            t.prototype.setData = function(t, e) {
                return cc.sys.localStorage.setItem(t, e)
            }
            ,
            t.prototype.playMusic = function(t) {
                if (void 0 === t && (t = !0),
                1 == this.getData("yy"))
                    return this.isPlayMusic = !0,
                    cc.audioEngine.playMusic(this.sound[0], t)
            }
            ,
            t.prototype.pauseMusic = function() {
                cc.audioEngine.pauseMusic()
            }
            ,
            t.prototype.resumeMusic = function() {
                if (this.pauseMusic(),
                1 == this.getData("yy")) {
                    if (!this.isPlayMusic)
                        return this.playMusic();
                    cc.audioEngine.resumeMusic(),
                    console.log("\u7ee7\u7eed\u64ad\u653e\u97f3\u4e50")
                }
            }
            ,
            t.prototype.playEffect = function(t, e, i) {
                if (void 0 === e && (e = !1),
                1 == this.getData("yx")) {
                    var n = cc.audioEngine.playEffect(t, e);
                    i && cc.audioEngine.setFinishCallback(n, i)
                }
            }
            ,
            t
        }();
        window.utils || (window.utils = new i),
        cc._RF.pop()
    }
    , {}]
}, {}, ["LWEffects", "LWhotRecomendMain", "LWhotWindowMain", "LWiconScrollMain", "LWBaseMain", "LWcommonMain", "LWitem", "LWresultPageMain", "LWshakeIconMain", "LWsidebarDrawerMain", "LWtwoLineRecomendMain", "LWEventConst", "LWsellFlow", "LWccUtils", "YYGamesUtil", "endView", "oppoEndView", "MyPhysicsCollider", "air", "air_item", "bee", "gate", "gear", "qiu", "spring", "drawWire", "gameView", "pass", "pen", "player", "setWin", "Helloworld", "load", "MainScene", "bctl_win", "cj_win", "furniture_win", "getTl", "jblb_win", "qd_win", "startView", "switchPass_win", "ADCreator", "bxwd", "cdjm", "exportParent", "ggsk", "oppoCPYM", "qphz", "rmhz", "tt_lp", "oppoSdk", "utils", "md5", "httputils", "tpfclientsdk", "tpfconfig", "tpfstat", "syyx_sdk_config", "syyx_sdk_enum", "ad_banner", "ad_block", "ad_native_icon", "ad_native_inner_interstitial", "ad_native_interstitial", "ad_oppo_banner", "syyx_box_manager", "syyx_turntable_manager", "syyx_activity_manager", "syyx_adv_manager", "syyx_cc_ui_manager", "syyx_manager", "syyx_rare_treasure_manager", "syyx_rob_treasure_manager", "syyx_super_power_manager", "activity_model", "model", "syyx_sdk_api", "syyx_ui_activity_bag", "syyx_ui_activity_bomb_item", "syyx_ui_activity_enter", "syyx_ui_activity_enter_item", "syyx_ui_activity_fragment_item", "syyx_ui_activity_icon", "syyx_ui_activity_rare", "syyx_ui_activity_rob", "syyx_ui_activity_rob_box_item", "syyx_ui_congratulations", "syyx_ui_banner", "syyx_ui_inner_interstitial", "syyx_ui_interstitial", "syyx_ui_native_icon", "syyx_ui_toast", "syyx_ui_box_item", "syyx_ui_common_box", "syyx_ui_get_reward", "syyx_ui_turntable", "syyx_ui_game_box", "syyx_ui_game_item", "syyx_ui_guess_like", "syyx_ui_left_more_game", "syyx_ui_more_game_item", "syyx_ui_more_game_item_list", "syyx_ui_right_more_game", "syyx_ui_unit_game", "syyx_ui_unit_icon", "syyx_ui_super_icon", "syyx_ui_super_icon_item", "syyx_ui_super_name_item", "syyx_ui_super_power", "syyx_ui_super_power_h", "table_view", "table_view_item", "syyx_sdk_utils"]);
