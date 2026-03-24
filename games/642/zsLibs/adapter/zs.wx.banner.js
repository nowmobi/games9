var _classCallCheck2 = babel_require("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = babel_require("../../@babel/runtime/helpers/createClass");

"undefined" != typeof wx && (window.zs = window.zs || {}, window.zs.wx = window.zs.wx || {}, 
window.zs.wx.banner = window.zs.wx.banner || {}, function(e, n) {
    "use strict";
    var t = /* */ function() {
        function t(e, n, _t, i, s) {
            _classCallCheck2(this, t);
            this.adUnitId = e, this.isLoad = !1, this.isShow = !1, this.pos = n, this.size = _t, 
            this.realSize = null, this.mgr = s, this.showLong = 0, this.empty = i, this.initBanner();
            var r = this;
            this.loadTime = setTimeout(function() {
                console.log("加载超时"), r.mgr.clearBanner(r.bannerIndex, r.permanentIndex), r.inErr = !0;
            }, 1e4), this.showTime = new Date().getTime(), this.birthTime = 0, this.inErr = !1;
        }
        _createClass2(t, [ {
            key: "liveTime",
            get: function get() {
                return this.birthTime ? new Date().getTime() - this.birthTime : 0;
            }
        }, {
            key: "showEd",
            get: function get() {
                var e = Number(zs.product.get("zs_banner_show_number")), n = e || 0;
                return n = Math.max(n, 5e3), this.showLong > n;
            }
        }, {
            key: "initBanner",
            value: function initBanner() {
                if (window.wx && window.wx.createBannerAd) {
                    zs.configs.gameCfg.debug && console.log("进入banner初始化" + this.adUnitId);
                    var e = this;
                    if (null == this.bannerAd) {
                        var n = s(this.pos, this.realSize ? this.realSize.w : window.screen.availWidth, this.realSize ? this.realSize.h : 104, this.empty);
                        this.bannerAd = wx.createBannerAd({
                            adUnitId: e.adUnitId,
                            adIntervals: 30,
                            style: {
                                left: n.left,
                                top: n.top,
                                width: window.screen.availWidth
                            }
                        });
                    }
                    this.bannerAd ? (this.bannerAd.onLoad(function() {
                        e.mgr.noBanner = !1, e.isLoad = !0, e.loadTime && clearTimeout(e.loadTime), e.birthTime = new Date().getTime();
                    }), this.bannerAd.onError(function(n) {
                        console.error("Banner err: " + e.bannerIndex, n), e.loadTime && clearTimeout(e.loadTime), 
                        e.mgr.clearBanner(e.bannerIndex, e.permanentIndex), e.inErr = !0;
                    }), this.bannerAd.onResize(this.onResize.bind(this))) : console.error("Banner 创建失败???环境？");
                } else console.log("环境异常,无法创建");
            }
        }, {
            key: "onResize",
            value: function onResize(e) {
                this.realSize = {
                    w: e.width,
                    h: e.height
                };
            }
        }, {
            key: "show",
            value: function show() {
                if (null != this.bannerAd && !this.inErr) {
                    var e = this;
                    this.isShow = !0, this.updateSize(), this.updatePosition(), this.bannerAd.show().then(function() {
                        zs.configs.gameCfg.debug && console.warn("banner标号" + e.bannerIndex + "展示成功,当前已展示时间" + e.showLong), 
                        e.showTime = new Date().getTime();
                    });
                }
            }
        }, {
            key: "updatePosition",
            value: function updatePosition() {
                if (this.bannerAd && this.realSize) {
                    var e = s(this.pos, this.realSize ? this.realSize.w : window.screen.availWidth, this.realSize ? this.realSize.h : 104, this.empty);
                    this.bannerAd.style.left = e.left, this.bannerAd.style.top = e.top;
                }
            }
        }, {
            key: "updateSize",
            value: function updateSize() {
                this.bannerAd && this.size && (null != this.size.width && (this.bannerAd.style.width = this.size.width), 
                null != this.size.height && (this.bannerAd.style.height = this.size.height));
            }
        }, {
            key: "hide",
            value: function hide() {
                this.bannerAd && this.bannerAd.hide(), this.showTime && (this.showLong += new Date().getTime() - this.showTime), 
                this.showTime = null, this.isShow && zs.log.warn("banner标号" + this.bannerIndex + "调用隐藏,当前已展示时间" + this.showLong), 
                this.isShow = !1;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.bannerAd && this.bannerAd.destroy(), this.bannerAd = null, this.adUnitId = null, 
                this.isLoad = null, this.isShow = null, this.loadTimer && clearTimeout(this.loadTimer), 
                this.pos = null, this.showLong = null, this.birthTime = null, this.loadTimer = null, 
                this.showTime = null, this.inErr = null;
            }
        } ]);
        return t;
    }();
    var i = /* */ function() {
        function i() {
            _classCallCheck2(this, i);
            this.wxbanner, this.permanentBannerList = [], this.permanentIndex = 0, this.emptyBanner, 
            this.bannerIds = [], this.pos = {}, this.refreshTimer = null, this.bannerRefreshTimer = null, 
            this.bannerTime = 0, this.bannerRefreshTimer = null, this.bannerTime = 0, this.inErrTime = !1, 
            this.noBanner = !1, this.errTimer = null, this.idIndex = 0;
        }
        _createClass2(i, [ {
            key: "setAdUnitId",
            value: function setAdUnitId(e) {
                var n = [];
                for (;e.length > 0; ) {
                    var _t2 = e.shift();
                    null != _t2 && "" != _t2 && n.push(_t2);
                }
                n.sort(function(e, n) {
                    return Math.random() > .5;
                }), this.bannerIds = n, this.initBanner();
            }
        }, {
            key: "getBannerId",
            value: function getBannerId() {
                var e, n = this.bannerIds.length;
                return n > 0 && (e = this.bannerIds[this.idIndex], this.idIndex += 1, this.idIndex >= n && (this.idIndex = 0)), 
                e;
            }
        }, {
            key: "clearBanner",
            value: function clearBanner(e, n) {
                var _this = this;
                if (0 == e) this.wxbanner && (this.wxbanner.destroy(), this.wxbanner = null); else if (2 == e) {
                    if (this.permanentBannerList.length > 0) {
                        var _e = this.permanentBannerList[n];
                        if (_e) {
                            _e.adUnitId;
                            _e.destroy(), _e = null;
                        }
                    }
                } else this.emptyBanner && (this.emptyBanner.destroy(), this.emptyBanner = null, 
                this.inErrTime = !0, setTimeout(function() {
                    _this.inErrTime = !1;
                }, 3e4));
            }
        }, {
            key: "timeCheckBanner",
            value: function timeCheckBanner() {
                if (!this.wxbanner) return;
                var e = this.wxbanner.isShow;
                this.wxbanner && this.wxbanner.destroy(), this.wxbanner = null;
                var n = this.getBannerId();
                n && (this.wxbanner = new t(n, this.pos, this.size, !1, this), this.wxbanner.bannerIndex = 0, 
                e && (this.wxbanner.pos = this.pos, this.wxbanner.show()));
            }
        }, {
            key: "checkBanner",
            value: function checkBanner() {}
        }, {
            key: "initBanner",
            value: function initBanner() {
                var _this2 = this;
                if (!this.bannerIds) return void console.log("未设置bannerID");
                if (!this.bannerIds.length || this.bannerIds.length <= 1) return void console.log("bannerID呢？？？");
                this.wxbanner && this.wxbanner.destroy();
                var e = this.getBannerId();
                e && (this.wxbanner = new t(e, this.pos, this.size, !1, this), this.wxbanner.bannerIndex = 0), 
                this.emptyBanner && this.emptyBanner.destroy();
                var n = this.getBannerId();
                n && (this.emptyBanner = new t(n, this.pos, this.size, !0, this), this.emptyBanner.bannerIndex = 1, 
                this.emptyBanner.show());
                var _i = Number(zs.product.get("zs_banner_refresh_time")), s = _i || 1e4;
                var r = this;
                this.refreshTimer = setInterval(function() {
                    r.refreshBanner();
                }, s);
                var h = Number(zs.product.get("zs_banner_game_time")), a = h || 6e4;
                a /= 1e3, this.bannerRefreshTimer = setInterval(function() {
                    _this2.wxbanner && _this2.wxbanner.isShow && (_this2.bannerTime++, _this2.bannerTime >= a && (_this2.bannerTime = 0, 
                    _this2.timeCheckBanner()));
                }, 1e3);
            }
        }, {
            key: "initPermanentBanner",
            value: function initPermanentBanner(e) {
                var _this3 = this;
                if (0 == e.length) return void console.log("没有bannerId？");
                for (var _e2 = 0; _e2 < this.permanentBannerList.length; _e2++) {
                    var _n = this.permanentBannerList[_e2];
                    _n && (_n.destroy(), _n = null);
                }
                this.permanentBannerList = [];
                var n = this;
                var _loop = function _loop(_i4) {
                    var s = e[_i4], r = new t(s, _this3.pos, _this3.size, !1, _this3);
                    r.bannerIndex = 2, r.permanentIndex = _i4, r.timeCount = 0, r.adUnitId = s, r.permanentTimer = setInterval(function() {
                        n.refreshPermanentBannerInterval(r, _i4, s);
                    }, 1e3), _this3.permanentBannerList.push(r);
                };
                for (var _i4 = 0; _i4 < e.length; _i4++) {
                    _loop(_i4);
                }
                this.permanentIndex = 0, console.log(" this.permanentBannerList=", this.permanentBannerList);
            }
        }, {
            key: "refreshPermanentBannerInterval",
            value: function refreshPermanentBannerInterval(e, n, _i3) {
                var _this4 = this;
                if (e.isShow) {
                    e.timeCount++, console.log("展示时间" + n + "  " + e.timeCount);
                    var s = Number(zs.product.get("zs_banner_game_time")) / 1e3;
                    if (0 == s && (s = 10), e.timeCount >= s) {
                        console.log("销毁banner" + n), e.destroy(), clearInterval(e.permanentTimer), e = null;
                        var _s = new t(_i3, this.pos, this.size, !1, this);
                        _s.permanentIndex = n, _s.timeCount = 0, _s.adUnitId = _i3, this.permanentBannerList[n] = _s, 
                        _s.permanentTimer = setInterval(function() {
                            _this4.refreshPermanentBannerInterval(_s, n, _i3);
                        }, 1e3);
                    }
                }
            }
        }, {
            key: "refreshBanner",
            value: function refreshBanner() {
                if (this.inErrTime) console.log("出现banner报错, 暂停刷新"); else {
                    this.emptyBanner && this.emptyBanner.destroy(), this.emptyBanner = null;
                    var e = this.getBannerId();
                    if (e) {
                        var n = new t(e, this.pos, this.size, !0, this);
                        this.emptyBanner = n, this.emptyBanner.bannerIndex = 1, this.emptyBanner.show();
                    }
                }
            }
        }, {
            key: "hasPermanentBanner",
            value: function hasPermanentBanner() {
                if (0 == this.permanentBannerList.length) return console.log("没有banner"), !1;
                for (var _e3 = 0; _e3 < this.permanentBannerList.length; _e3++) {
                    if (this.permanentBannerList[_e3]) return !0;
                }
                return !1;
            }
        }, {
            key: "getPermanentBanner",
            value: function getPermanentBanner() {
                var e = this.permanentBannerList[this.permanentIndex];
                return e ? (this.permanentIndex++, this.permanentIndex >= this.permanentBannerList.length && (this.permanentIndex = 0), 
                e) : null;
            }
        }, {
            key: "getRandomBanner",
            value: function getRandomBanner(e) {
                var n = Math.round(Math.random() * (this.permanentBannerList.length - 0) + 0);
                console.log("随机id" + n);
                var t = this.permanentBannerList[n];
                return t ? (console.warn("随机一个banner显示成功"), t) : null;
            }
        }, {
            key: "otherInterfaceBanner",
            value: function otherInterfaceBanner(e) {
                for (var _e4 = 0; _e4 < this.permanentBannerList.length; _e4++) {
                    var _n2 = this.permanentBannerList[_e4];
                    _n2 && _n2.hide();
                }
                var n = this.getPermanentBanner();
                n && (e && e.pos ? (n.pos = e.pos, this.pos = e.pos) : (n.pos = null, this.pos = null), 
                n.show());
            }
        }, {
            key: "showBanner",
            value: function showBanner(e) {
                if (this.hasPermanentBanner()) {
                    if (e && (e.isFull || e.isClick)) {
                        for (var _e5 = 0; _e5 < this.permanentBannerList.length; _e5++) {
                            var _n4 = this.permanentBannerList[_e5];
                            _n4 && _n4.hide();
                        }
                        var _n3 = this.getRandomBanner(e);
                        _n3 && (e && e.pos ? (_n3.pos = e.pos, this.pos = e.pos) : (_n3.pos = null, this.pos = null), 
                        _n3.show(), console.warn("全屏循环banner显示成功"));
                    } else this.permanentIndex = 0, this.otherInterfaceBanner(), zs.Timer.inst.loop(5e3, this, this.otherInterfaceBanner), 
                    console.warn("其他界面banner显示");
                } else console.log("没有banner");
            }
        }, {
            key: "hideAll",
            value: function hideAll() {
                console.log("hideAll");
                var e = this.wxbanner;
                e && e.isShow && (e.hide(), console.log("隐藏banner")), zs.Timer.inst.clear(this, this.otherInterfaceBanner);
                for (var _e6 = 0; _e6 < this.permanentBannerList.length; _e6++) {
                    var _n5 = this.permanentBannerList[_e6];
                    _n5 && (_n5.hide(), console.log("隐藏常驻banner"));
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return null == this._inst && (this._inst = new i()), this._inst;
            }
        } ]);
        return i;
    }();
    var s = function s(e, t, i, _s3) {
        if (!t || !i) return {
            left: 0,
            top: 0
        };
        var r = -t + (zs.configs.gameCfg.debug ? 10 : 1), h = -i + (zs.configs.gameCfg.debug ? 10 : 1);
        if (!_s3) {
            var _s2 = window.screen.availWidth / n.stage.width, a = window.screen.availHeight / n.stage.height;
            r = e ? null != e.left ? e.left * _s2 : null != e.right ? (n.stage.width - e.right) * _s2 - t : null != e.centerX ? (n.stage.width / 2 + e.centerX) * _s2 - t / 2 : (window.screen.availWidth - t) / 2 : (window.screen.availWidth - t) / 2, 
            h = e ? null != e.top ? e.top * a : null != e.bottom ? (n.stage.height - e.bottom) * a - i : null != e.centerY ? (n.stage.height / 2 + e.centerY) * a - i / 2 : window.screen.availHeight - i : window.screen.availHeight - i;
        }
        return {
            left: r,
            top: h
        };
    };
    e.WxBanner = t, e.WxBannerMgr = i;
}(window.zs.wx.banner = window.zs.wx.banner || {}, Laya));