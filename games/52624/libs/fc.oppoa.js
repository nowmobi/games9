window.fc = window.fc || {},
window.fc.platform = window.fc.platform || {},
function(e, t) {
    "use strict";
    var i = fc.define.Event
      , o = fc.define.SceneId
      , s = fc.framework.Audio
      , a = fc.framework.GameFrame
      , n = fc.framework.Channel
      , r = fc.plugin.BannerCtrl
      , c = fc.plugin.BlockAdCtrl
      , d = fc.plugin.AdditiveUICtrl
      , l = fc.view.ActivityCenter;
    t.ClassUtils.regClass("fc.oppo.UserPrivacyPage", class extends fc.plugin.BaseView {
        constructor() {
            super(),
            this.agreement = null,
            this.okBtn = null,
            this.noBtn = null,
            this.privacyBtn = null,
            this.txt = null,
            this.prevX = 0,
            this.prevY = 0,
            this.middleUI = null,
            this.isLoading = !0
        }
        initView(e) {
            e && null != e.isLoading && (this.isLoading = e.isLoading)
        }
        onAwake() {
            super.onAwake(),
            fc.view.linkView2Script(this, this.owner, ["okBtn", "agreement", "noBtn", "privacyBtn", "middleUI"]),
            this.okBtn.on(t.Event.CLICK, this, this.onAgreeAd),
            this.noBtn.on(t.Event.CLICK, this, this.onCloseView),
            this.privacyBtn.on(t.Event.CLICK, this, this.openPrivacy)
        }
        onStart() {
            super.onStart();
            let e = this.agreement.text;
            e = e.replace("", a.pluginCfg.pg_company_name || ""),
            this.agreement.text = e,
            this.isLoading ? this.noBtn.text = "不同意" : this.noBtn.text = "关  闭",
            this.isLoading && a.playerInfo.isAgreeAd && 1 == a.playerInfo.isAgreeAd && a.closeView(this.owner)
        }
        onDestroy() {
            super.onDestroy(),
            this.okBtn.off(t.Event.CLICK, this, this.onAgreeAd),
            this.noBtn.off(t.Event.CLICK, this, this.onCloseView),
            this.privacyBtn.off(t.Event.CLICK, this, this.openPrivacy)
        }
        onCloseView() {
            a.playClickSound(),
            this.isLoading ? window.fc.adapter.Channel.exitApplication() : a.closeView(this.owner)
        }
        onAgreeAd() {
            a.playClickSound(),
            a.savePlayerInfo({
                isAgreeAd: 1
            }),
            console.log(a.playerInfo.isAgreeAd, "===========保存用户选择=================="),
            a.closeView(this.owner)
        }
        openPrivacy() {
            a.playClickSound(),
            this.createText()
        }
        createText() {
            this.txt = new t.Text,
            this.txt.overflow = t.Text.SCROLL;
            let e = "";
            e = e.replace("", a.pluginCfg.pg_company_name || ""),
            this.txt.text = e,
            this.txt.size(this.middleUI.getChildAt(0).width - 60, this.okBtn.y - this.middleUI.getChildAt(0).y - 60),
            this.txt.x = this.middleUI.width - this.txt.width >> 1,
            this.txt.y = this.middleUI.getChildAt(0).y + 40,
            this.txt.borderColor = "#FFFF00",
            this.txt.bgColor = "#FFFFFF",
            this.txt.fontSize = 25,
            this.txt.color = "#000000",
            this.middleUI.addChild(this.txt),
            this.txt.wordWrap = !0,
            this.txt.zOrder = 10,
            this.txt.on(t.Event.MOUSE_DOWN, this, this.startScrollText)
        }
        startScrollText(e) {
            this.prevX = this.txt.mouseX,
            this.prevY = this.txt.mouseY,
            t.stage.on(t.Event.MOUSE_MOVE, this, this.scrollText),
            t.stage.on(t.Event.MOUSE_UP, this, this.finishScrollText)
        }
        finishScrollText(e) {
            t.stage.off(t.Event.MOUSE_MOVE, this, this.scrollText),
            t.stage.off(t.Event.MOUSE_UP, this, this.finishScrollText)
        }
        scrollText(e) {
            var t = this.txt.mouseX
              , i = this.txt.mouseY;
            this.txt.scrollX += this.prevX - t,
            this.txt.scrollY += this.prevY - i,
            this.prevX = t,
            this.prevY = i
        }
    }
    );
    t.ClassUtils.regClass("fc.view.UserPrivacyBtn", class extends t.Script {
        constructor() {
            super(),
            this.clickTime = 0
        }
        onAwake() {
            this.owner.mouseEnabled = !0
        }
        onStart() {}
        onClick() {
            a.playClickSound(),
            a.openView("UserPrivacy", {
                isLoading: !1
            })
        }
    }
    );
    t.ClassUtils.regClass("fc.view.CustomAdPage", class extends fc.plugin.BaseView {
        constructor() {
            super(),
            this.outTime = !1
        }
        onAwake() {
            super.onAwake(),
            this.owner.visible = !1,
            console.log("CustomAdPage loaded"),
            n.createCustomAd(t.Handler.create(this, this.closeView), a.pluginCfg.pg_custom_adunit, 0, 0, 0),
            n.loadCustomAd(t.Handler.create(this, this.onAdLoaded), t.Handler.create(this, this.closeView)),
            this.owner.timerOnce(5e3, this, this.onLoadOutTime),
            t.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed)
        }
        onLoadOutTime() {
            this.outTime = !0,
            this.closeView()
        }
        onAdLoaded() {
            console.log("customad ready"),
            this.outTime ? console.log("customad load out time") : (this.owner.visible = !0,
            this.owner.clearTimer(this, this.onLoadOutTime))
        }
        onViewClosed(e, t) {
            "CustomAd" != t && (this.outTime = !0,
            this.owner.frameOnce(1, this, this.closeView))
        }
        onDestroy() {
            console.log("customad onDestroy"),
            t.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed),
            n.destroyCustomAd(),
            super.onDestroy()
        }
        closeView() {
            console.log("原生模板插屏广告关闭----------------"),
            t.MouseManager.enabled = !0,
            n.destroyCustomAd(),
            a.closeView(this.owner)
        }
    }
    );
    t.ClassUtils.regClass("fc.view.CustomBannerAdPage", class extends fc.plugin.BaseView {
        constructor() {
            super(),
            this.outTime = !1,
            this.switch = 0
        }
        onAwake() {
            super.onAwake(),
            l.isNativeActive() ? (t.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed),
            t.stage.on(i.DEVICE_SHOW, this, this.onAppShow),
            t.stage.on(i.HIDE_NATIVEBANNER, this, this.hideNativeBanner),
            t.stage.on(i.SHOW_NATIVEBANNER, this, this.showNativeBanner),
            this.switch = a.pluginCfg.pg_custom_change_switch || 0,
            0 == this.switch && this.loadAd(),
            this.owner.timerLoop(a.pluginCfg.pg_banner_refresh_time, this, this.loadAd, null, !1)) : (n.showBannerAd(),
            this.owner.frameOnce(1, this, this.closeView))
        }
        loadAd() {
            this.owner.visible = !1,
            console.log("CustomBannerAdPage loaded"),
            n.createCustomAd(t.Handler.create(this, this.onAdLoadedFailed), 0 == this.switch ? a.pluginCfg.pg_leftright_adunit : a.pluginCfg.pg_custom_adunit, 0, 0, 1),
            n.loadCustomAd(t.Handler.create(this, this.onAdLoaded), t.Handler.create(this, this.onAdLoadedFailed))
        }
        onAdLoaded() {
            console.log("customad ready"),
            this.outTime ? console.log("customad load out time") : this.owner.visible = !0
        }
        onAdLoadedFailed() {
            this.owner.clearTimer(this, this.loadAd),
            this.owner.timerLoop(a.pluginCfg.pg_banner_refresh_time, this, this.loadAd, null, !1)
        }
        closeView() {
            console.log("原生模板插屏广告关闭----------------"),
            n.destroyCustomAd(),
            a.closeView(this.owner)
        }
        onDestroy() {
            n.destroyCustomAd(),
            super.onDestroy(),
            t.stage.off(i.DEVICE_SHOW, this, this.onAppShow),
            t.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed),
            t.stage.off(i.HIDE_NATIVEBANNER, this, this.hideNativeBanner),
            t.stage.off(i.SHOW_NATIVEBANNER, this, this.showNativeBanner),
            this.owner.clearTimer(this, this.loadAd)
        }
        hideNativeBanner() {
            this.owner.visible = !1,
            this.owner.clearTimer(this, this.loadAd),
            n.destroyCustomAd()
        }
        showNativeBanner() {
            this.owner.visible = !0,
            this.onAppShow()
        }
        onAppShow() {
            this.owner.clearTimer(this, this.loadAd),
            0 == this.switch && this.loadAd(),
            this.owner.timerLoop(a.pluginCfg.pg_banner_refresh_time, this, this.loadAd, null, !1)
        }
        onViewClosed(e, t) {
            t != fc.view.ViewId.NativeAdb && t != fc.view.ViewId.NativeAdm && t != fc.view.ViewId.NativeAdn && t != fc.view.ViewId.Sign && t != fc.view.ViewId.Turntable && t != fc.view.ViewId.Store && t != fc.view.ViewId.NativeBannerAd && t != fc.view.ViewId.NativeAdbOppo && t != fc.view.ViewId.NativeAdi && (this.isAdReady = !0,
            this.owner.frameOnce(1, this, this.closeView))
        }
    }
    );
    var h = {
        Award: {
            url: "fc-layout/view/AwardPage.scene",
            script: "fc.view.AwardPage"
        },
        Loading: {
            url: "fc-layout/view/LoadingPage.scene",
            script: "fc.view.LoadingPage"
        },
        Home: {
            url: "fc-layout/view/HomePage.scene",
            script: "fc.view.HomePage"
        },
        Game: {
            url: "fc-layout/view/GamePage.scene",
            script: "fc.view.GamePage"
        },
        Success: {
            url: "fc-layout/view/SuccessPage.scene",
            script: "fc.view.SuccessPage"
        },
        Failed: {
            url: "fc-layout/view/FailedPage.scene",
            script: "fc.view.FailedPage"
        },
        AdHome: {
            url: "fc-layout/view/AdHomePage.scene",
            script: "fc.view.AdHomePage"
        },
        MoreInfo: {
            url: "fc-layout/view/MoreInfoPage.scene",
            script: "fc.view.MoreInfoPage"
        },
        Knock: {
            url: "fc-layout/view/KnockPage.scene",
            script: "fc.view.KnockPage"
        },
        Sign: {
            url: "fc-layout/view/SignPage.scene",
            script: "fc.view.SignPage"
        },
        Store: {
            url: "fc-layout/view/StorePage.scene",
            script: "fc.view.StorePage"
        },
        Strength: {
            url: "fc-layout/view/StrengthPage.scene",
            script: "fc.view.StrengthPage"
        },
        SecretBox: {
            url: "fc-layout/view/SecretBoxPage.scene",
            script: "fc.view.SecretBoxPage"
        },
        SecretAward: {
            url: "fc-layout/view/SecretAwardPage.scene",
            script: "fc.view.SecretAwardPage"
        },
        ShareRec: {
            url: "fc-layout/view/ShareRecPage.scene",
            script: "fc.view.ShareRecPage"
        },
        Trial: {
            url: "fc-layout/view/TrialPage.scene",
            script: "fc.view.TrialPage"
        },
        Turntable: {
            url: "fc-layout/view/TurntablePage.scene",
            script: "fc.view.TurntablePage"
        },
        InsertAd: {
            url: "fc-layout/view/VideoPage.scene",
            script: "fc.view.InsertAdPage"
        },
        FullScreenAd: {
            url: "fc-layout/view/VideoPage.scene",
            script: "fc.view.FullScreenAdPage"
        },
        NativeAdbOppo: {
            url: "fc-layout/view/NativeAdbPageOppo.scene",
            script: "fc.view.NativeAdPage"
        },
        NativeAdb: {
            url: "fc-layout/view/NativeAdbPage.scene",
            script: "fc.view.NativeAdPage"
        },
        NativeAdm: {
            url: "fc-layout/view/NativeAdmPage.scene",
            script: "fc.view.NativeAdPage"
        },
        NativeAdn: {
            url: "fc-layout/view/NativeAdnPage.scene",
            script: "fc.view.NativeAdPage"
        },
        NativeAdi: {
            url: "fc-layout/view/NativeAdiPage.scene",
            script: "fc.view.NativeAdPage"
        },
        NativeBannerAd: {
            url: "fc-layout/view/NativeAdBannerPage.scene",
            script: "fc.view.NativeBannerAdPage"
        },
        UserPrivacy: {
            url: "fc-layout/view/UserPrivacyPage.scene",
            script: "fc.view.UserPrivacyPage"
        },
        ChooseSkillAd: {
            url: "fc-layout/view/ChooseSkillPage.scene",
            script: "fc.view.ChooseSkillPage"
        },
        CustomBannerAd: {
            url: "fc-layout/view/EmptyPage.scene",
            script: "fc.view.CustomBannerAdPage"
        },
        CustomAd: {
            url: "fc-layout/view/NativeCustomAdPage.scene",
            script: "fc.view.CustomAdPage"
        },
        HomeSetting: {
            url: "fc-layout/view/HomeSettingPage.scene",
            script: "fc.view.HomeSettingPage"
        },
        GameSetting: {
            url: "fc-layout/view/GameSettingPage.scene",
            script: "fc.view.GameSettingPage"
        }
    }
      , p = {
        loading: {
            type: "sequence",
            array: [{
                viewId: "Loading"
            }]
        },
        home: {
            type: "sync",
            array: [{
                viewId: "Home",
                zOrder: 1
            }, {
                viewId: "Sign",
                checkCode: 1,
                zOrder: 2
            }, {
                viewId: "Store",
                checkCode: 2,
                zOrder: 2,
                delay: 200
            }]
        },
        prepare: {
            type: "sync",
            array: [{
                viewId: "CustomAd",
                checkCode: 9,
                zOrder: 1
            }, {
                viewId: "Trial",
                checkCode: 3,
                zOrder: 0
            }]
        },
        game: {
            type: "sync",
            array: [{
                viewId: "Game"
            }]
        },
        showSuccess: {
            type: "sync",
            array: [{
                viewId: "CustomAd",
                checkCode: 10,
                zOrder: 1
            }, {
                viewId: "SecretAward",
                checkCode: 7,
                zOrder: 0,
                delay: 1e3
            }]
        },
        showFailed: {
            type: "sync",
            array: [{
                viewId: "CustomAd",
                checkCode: 7,
                zOrder: 1
            }, {
                viewId: "SecretBox",
                checkCode: 7,
                zOrder: 0,
                delay: 1e3
            }]
        },
        success: {
            type: "sequence",
            array: [{
                viewId: "Success"
            }]
        },
        failed: {
            type: "sequence",
            array: [{
                viewId: "Failed"
            }]
        },
        over: {
            type: "sequence",
            array: []
        }
    }
      , w = {
        Failed: {
            x: 0,
            y: 270,
            size: 5,
            delay: 10
        },
        Success: {
            x: 0,
            y: 270,
            size: 5,
            delay: 10
        }
    }
      , g = {
        Home: {
            delay: 10
        }
    }
      , v = {
        Loading: [{
            viewUrl: "fc-layout/prefab/additive/Agerating8.json",
            parentRoot: "middleUI",
            x: 0,
            y: 500
        }],
        Home: [{
            viewUrl: "fc-layout/prefab/additive/GoldShowAdd.json",
            parentRoot: "topUI",
            x: 32,
            y: 60,
            scriptType: "fc.view.GoldShowAdd"
        }, {
            viewUrl: "fc-layout/prefab/additive/StrengthShowAdd.json",
            parentRoot: "topUI",
            x: 32,
            y: 150,
            scriptType: "fc.view.StrengthShowAdd",
            checkCode: 2
        }, {
            viewUrl: "fc-layout/prefab/additive/MoreRecommendBtn.json",
            parentRoot: "middleUI",
            x: 42,
            y: 331,
            scriptType: "fc.view.MoreGameBoxBtn"
        }, {
            viewUrl: "fc-layout/prefab/additive/StartGame.json",
            parentRoot: "bottomUI",
            x: 375,
            y: 359,
            scriptType: "fc.view.AniLoopPlay"
        }, {
            viewUrl: "fc-layout/prefab/additive/UserPrivacyBtn.json",
            parentRoot: "topUI",
            x: 0,
            y: 331,
            scriptType: "fc.view.UserPrivacyBtn"
        }, {
            viewUrl: "fc-layout/prefab/additive/SettingBtn.json",
            parentRoot: "topUI",
            x: 700,
            y: 100,
            scriptType: "fc.view.HomeSettingBtn"
        }],
        HomeSetting: [{
            viewUrl: "fc-layout/prefab/additive/UserPrivacyTextBtn.json",
            parentRoot: "middleUI",
            x: 375,
            y: 330,
            scriptType: "fc.view.UserPrivacyBtn"
        }],
        Game: [{
            viewUrl: "fc-layout/prefab/additive/GoldShow.json",
            parentRoot: "topUI",
            x: 32,
            y: 60,
            scriptType: "fc.view.GoldShow"
        }, {
            viewUrl: "fc-layout/prefab/additive/StrengthShow.json",
            parentRoot: "topUI",
            x: 32,
            y: 150,
            scriptType: "fc.view.StrengthShow",
            checkCode: 2
        }, {
            viewUrl: "fc-layout/prefab/additive/ResetBtn.json",
            parentRoot: "topUI",
            x: 30,
            y: 420,
            scriptType: "fc.view.ResetBtn",
            checkCode: 3
        }, {
            viewUrl: "fc-layout/prefab/additive/NativeIconAd.json",
            parentRoot: "middleUI",
            checkCode: 4,
            x: 650,
            y: 0,
            scriptType: "fc.view.NativeIconAd"
        }, {
            viewUrl: "fc-layout/prefab/additive/SettingBtn.json",
            parentRoot: "topUI",
            x: 700,
            y: 100,
            scriptType: "fc.view.GameSettingBtn"
        }],
        Failed: [{
            viewUrl: "fc-layout/prefab/additive/FailEmoji.json",
            parentRoot: "topUI",
            x: 375,
            y: 520,
            scriptType: "fc.view.AniLoopPlay"
        }],
        Success: [{
            viewUrl: "fc-layout/prefab/additive/SuccessEmoji.json",
            parentRoot: "topUI",
            x: 375,
            y: 520,
            scriptType: "fc.view.AniLoopPlay"
        }]
    }
      , f = {
        userId: "1",
        isNew: 1,
        isInGuide: 1,
        signedDays: 0,
        signTime: 0,
        levelId: 1,
        gold: 0,
        strength: 5,
        sound: 1,
        music: 1,
        vibrate: 1,
        goodsInUse: [0],
        goodsInBag: [[0]]
    };
    function isAdditiveUIVisible(e) {
        return !e || (1 == e ? l.isEnableExportAd() : 2 == e ? l.isStrengthOpened() : 3 == e ? l.isResetGameOpened() : 4 == e && l.isNativeActive())
    }
    function isViewValid(e) {
        console.error("======-----");
        return !e || (1 == e ? l.isEnablePopSign() : 2 == e ? l.isEnablePopStore() : 3 == e ? l.isEnablePopTrial() : 4 == e ? l.isEnablePopHomeAd() : 5 == e ? l.isEnablePopNativeAd() && l.isNativeActive() : 6 == e ? l.isEnablePopNativeAd() : 7 == e ? l.isEnablePopSecretAward() : 8 == e ? l.isNativeActive() : 9 == e ? l.isEnablePopTrial() && l.isNativeActive() : 10 == e ? l.isEnablePopSecretAward() && l.isNativeActive() : 104 == e ? l.isEnablePopVip() : 100 == e && (console.log(a.playerInfo.isAgreeAd, "================用户协议=============", JSON.stringify(a.playerInfo)),
        0 == l.gameTime && (!a.playerInfo.isAgreeAd || 0 == a.playerInfo.isAgreeAd)))
    }
    class u extends t.Script {
        static get playerInfo() {
            return a.playerInfo
        }
        static set playerInfo(e) {
            if (e) {
                for (var t = Object.keys(e), i = 0; i < t.length; i++)
                    a.playerInfo[t[i]] = e[t[i]];
                t.length > 0 && a.savePlayerInfo(e)
            }
        }
        static init(e) {
            t.stage.addComponent(u),
            t.stage.addComponent(r),
            t.stage.addComponent(c),
            t.stage.addComponent(d),
            t.stage.addComponent(l),
            a.startUp(e || `config/${this.platformTag}/appConfig.${this.platformTag}.json`, u.platformTag, h, p, f)
        }
        constructor() {
            super(),
            this.NativeAdmPopTime = -1
        }
        onAwake() {
            a.setViewValidCheckFun(isViewValid),
            r.bannerConfig = g,
            c.blockConfig = w,
            d.additiveUIConfig = v,
            d.checkFun = isAdditiveUIVisible,
            t.stage.once(i.LAUNCH_COMPLETED, this, this.onLaunchResReady),
            t.stage.on(i.UI_SCENE_LOADED, this, this.onSceneLoaded),
            t.stage.on(i.UI_SCENE_UNLOADED, this, this.onSceneUnloaded),
            t.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed),
            t.stage.on(i.UI_VIEW_OPENED, this, this.onViewOpened),
            t.stage.on(i.GAME_START, this, this.onGameStart)
        }
        onDestroy() {
            t.stage.off(i.UI_SCENE_LOADED, this, this.onSceneLoaded),
            t.stage.off(i.UI_SCENE_UNLOADED, this, this.onSceneUnloaded),
            t.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed),
            t.stage.off(i.UI_VIEW_OPENED, this, this.onViewOpened),
            t.stage.off(i.GAME_START, this, this.onGameStart)
        }
        onLaunchResReady(e) {
            var t = a.pluginCfg;
            t && (null == t.pg_share_opened && (t.pg_share_opened = 0),
            a.pluginCfg.pg_video_style = t.pg_video_style || [0, 3, 4],
            a.pluginCfg.pg_ad_img_switch = t.pg_ad_img_switch || 0)
        }
        onUpdate() {
            a.gameSceneId != fc.define.SceneId.Game || 0 == l.isMistakenActive() || a.isGamePaused || !a.pluginCfg.pg_native_gap_time || a.pluginCfg.pg_native_gap_time <= 0 || this.NativeAdmPopTime <= 0 || Date.now() - this.NativeAdmPopTime > a.pluginCfg.pg_native_gap_time && (this.NativeAdmPopTime = -1,
            a.pause(),
            1 == a.pluginCfg.pg_choose_skill_switch ? a.openView("ChooseSkillAd") : a.openView("NativeAdi"))
        }
        onGameStart() {
            this.NativeAdmPopTime = Date.now()
        }
        onSceneUnloaded(e) {
            e == o.Game && s.stopMusic()
        }
        onSceneLoaded(e) {
            e == o.Game && a.appInfo.bgm && s.playMusic(a.appInfo.bgm)
        }
        onViewClosed(e, t) {
            "Failed" != t && "Success" != t || l.isHomeAutoShowGameBox(),
            "NativeAdi" != t && "ChooseSkillAd" != t || a.gameSceneId == fc.define.SceneId.Game && (this.NativeAdmPopTime = Date.now(),
            a.resume())
        }
        onViewOpened(e, i) {
            if (("Success" == i || "Failed" == i) && fc.view.ActivityCenter.isMistakenActive() && 3 == fc.view.ActivityCenter.gameTime) {
                var o = t.Handler.create(this, function(e) {
                    e && 0 == e.hasIcon && fc.framework.Channel.createDesktopIcon(null)
                });
                fc.framework.Channel.hasDesktopIcon(o)
            }
        }
    }
    u.platformTag = "oppo",
    e.PlatformConfig = u
}(window.fc.platform, Laya);
