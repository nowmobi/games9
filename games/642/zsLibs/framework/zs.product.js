var _typeof2 = babel_require("../../@babel/runtime/helpers/typeof");

var _classCallCheck2 = babel_require("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = babel_require("../../@babel/runtime/helpers/createClass");

window.zs = window.zs || {}, function(e) {
    "use strict";
    var t = /* */ function() {
        function t() {
            _classCallCheck2(this, t);
        }
        _createClass2(t, null, [ {
            key: "keys",
            get: function get() {
                return null == this._keys && (this._keys = {}), this._keys;
            }
        }, {
            key: "cleanProductKey",
            value: function cleanProductKey(e) {
                return e.replace(/\s/g, "").replace("（", "(").replace("）", ")");
            }
        }, {
            key: "init",
            value: function init(e) {
                if (zs.core.userInfo && zs.core.userInfo.scene ? this.scene = zs.core.userInfo.scene : this.scene = null, 
                null != e) {
                    this._defines = e;
                    for (var _t9 in e) {
                        _t9 = this.cleanProductKey(_t9), zs.configs.gameCfg.pure ? (this.keys[_t9] = null, 
                        this._defines[_t9] = null) : this.keys[_t9] = e[_t9];
                    }
                }
            }
        }, {
            key: "sync",
            value: function sync(e) {
                if (!(null == e || e.length <= 0 || zs.configs.gameCfg.pure)) {
                    e.zs_country_white_list && (this.country = e.zs_country_white_list);
                    for (var _t10 in e) {
                        this.registe(_t10, e[_t10]);
                    }
                    if (zs.configs.gameCfg.debug) zs.network.dataEdit("is_shielded", "0").catch(function(e) {
                        return e;
                    }); else {
                        var _e = !1, s = !1, i = !1, n = this.countryCheck(), c = zs.product.get("zs_block_switchs"), h = !1;
                        if (this.scene && "" != this.scene) {
                            this.hasSceneCheck(this.keys[t.firstSceneSwitch]) && (this.scene = zs.platform.sync.getScene(), 
                            h = this.hasSceneCheck(this.keys[t.oldSceneSwitch]));
                        } else this.scene = zs.platform.sync.getScene(), h = this.hasSceneCheck(this.keys[t.firstSceneSwitch]);
                        for (var _t11 in this.keys) {
                            if (!this.keys[_t11]) continue;
                            var l = this.blockCheck(_t11, c);
                            if (!h && l) {
                                this.keys[_t11] = null, this._defines && (this._defines[_t11] = null), _e = !0;
                                continue;
                            }
                            if (!n && l) {
                                this.keys[_t11] = null, this._defines && (this._defines[_t11] = null);
                                continue;
                            }
                            var r = _t11 + "(" + this.sceneMark + ")", u = this.keys[r];
                            if (this.scene && u && u.length > 0) {
                                var _s = this.sceneCheck(u);
                                if (!_s) {
                                    this.keys[_t11] = _s, this._defines && (this._defines[_t11] = _s), _e = !0;
                                    continue;
                                }
                            }
                            var f = _t11 + "(" + this.cityMark + ")", o = this.keys[f];
                            if (this.city && o && o.length > 0) {
                                var _e2 = this.cityCheck(o);
                                if (!_e2) {
                                    this.keys[_t11] = _e2, this._defines && (this._defines[_t11] = _e2), s = !0;
                                    continue;
                                }
                            }
                            var a = _t11 + "(" + this.timeMark + ")", y = this.keys[a];
                            if (this.timestamp && y && y.length > 0) {
                                var _e3 = y.split(/[|｜]/), _s2 = 1;
                                if (_e3.length > 1) {
                                    for (var _t12 = 0, _i = _e3.length; _t12 < _i; _t12++) {
                                        if (!this.timeCheck(_e3[_t12])) {
                                            _s2 = 0;
                                            break;
                                        }
                                    }
                                } else _s2 = this.timeCheck(y);
                                _s2 || (this.keys[_t11] = _s2, this._defines && (this._defines[_t11] = _s2), i = !0);
                            }
                        }
                        n || zs.network.dataEdit("is_shielded", "1").catch(function(e) {
                            return e;
                        }), _e ? (console.log("场景值屏蔽生效", this.scene), zs.fgui.msgtext.show("场景值屏蔽生效:" + this.scene), 
                        zs.td.justTrack("场景值屏蔽生效", "场景值屏蔽生效", {
                            scene: this.scene
                        })) : s ? (console.log("地区屏蔽生效", this.city), zs.fgui.msgtext.show("地区屏蔽生效:" + this.city), 
                        zs.td.justTrack("地区屏蔽生效", "地区屏蔽生效", {
                            city: this.city
                        })) : i && (console.log("时间屏蔽生效", this.timestamp), zs.fgui.msgtext.show("时间屏蔽生效:" + this.timestamp), 
                        zs.td.justTrack("时间屏蔽生效", "时间屏蔽生效", {
                            timestamp: this.timestamp
                        }));
                    }
                    this.synced = !0;
                }
            }
        }, {
            key: "blockCheck",
            value: function blockCheck(e, _t5) {
                return e && _t5 && "" !== _t5 ? _t5.replace(/\s/g, "").split(/[|｜]/).indexOf(e) < 0 ? null : 1 : null;
            }
        }, {
            key: "countryCheck",
            value: function countryCheck() {
                return zs.core.userInfo.is_shielded ? (zs.td.justTrack("黑名单屏蔽生效", "黑名单屏蔽生效"), zs.fgui.msgtext.show("黑名单屏蔽生效"), 
                null) : this.country && this.countryWhiteList && "" != this.countryWhiteList && this.countryWhiteList.replace(/\s/g, "").split(/[|｜]/).indexOf(this.country) < 0 ? (zs.fgui.msgtext.show("国家屏蔽生效:" + this.country), 
                zs.td.justTrack("国家屏蔽生效", "国家屏蔽生效", {
                    country: this.country
                }), null) : 1;
            }
        }, {
            key: "cityCheck",
            value: function cityCheck(e) {
                return this.city && e && "" !== e ? e.replace(/\s/g, "").split(/[|｜]/).indexOf(this.city) < 0 ? 1 : null : 1;
            }
        }, {
            key: "sceneCheck",
            value: function sceneCheck(e) {
                return this.scene && e && "" !== e ? e.replace(/\s/g, "").split(/[|｜]/).indexOf(this.scene) < 0 ? 1 : null : 1;
            }
        }, {
            key: "hasSceneCheck",
            value: function hasSceneCheck(e) {
                return this.scene && e && "" !== e ? e.replace(/\s/g, "").split(/[|｜]/).indexOf(this.scene) < 0 ? null : 1 : null;
            }
        }, {
            key: "timeCheck",
            value: function timeCheck(e) {
                if (!this.timestamp || !e || "" === e) return 1;
                var _t6 = e.split("-");
                if (_t6.length < 2) return 1;
                var s = _t6[0].split(/[:：]/), i = _t6[1].split(/[:：]/), n = new Date(this.timestamp), c = n.getHours(), h = n.getMinutes();
                if (s.length > 0) {
                    var _e4 = parseInt(s[0]);
                    if (isNaN(_e4) && (_e4 = 0), c < _e4) return 1;
                    if (c == _e4 && s.length > 1) {
                        var _e5 = parseInt(s[1]);
                        if (isNaN(_e5) && (_e5 = 0), h < _e5) return 1;
                    }
                }
                if (i.length > 0) {
                    var _e6 = parseInt(i[0]);
                    if (isNaN(_e6) && (_e6 = 0), c > _e6) return 1;
                    if (c == _e6 && i.length > 1) {
                        var _e7 = parseInt(i[1]);
                        if (isNaN(_e7) && (_e7 = 0), h > _e7) return 1;
                    }
                }
                return null;
            }
        }, {
            key: "registe",
            value: function registe(e, _t7) {
                if (null == _t7) return;
                e = this.cleanProductKey(e);
                var s = this.keys[e];
                if (null == s || _typeof2(s) == _typeof2(_t7)) this.keys[e] = _t7, this._defines && (this._defines[e] = _t7); else if ("number" == typeof s && "string" == typeof _t7) {
                    var _s3 = parseFloat(_t7);
                    isNaN(_s3) && (_s3 = 0), this.keys[e] = _s3, this._defines && (this._defines[e] = _s3);
                } else zs.log.warn("关键词类型不匹配，无法注册产品关键词：" + e, "Product");
            }
        }, {
            key: "get",
            value: function get(e) {
                e = this.cleanProductKey(e);
                var _t8 = this.keys[e];
                return "function" == typeof _t8 ? _t8.call(this) : (null == _t8 && zs.log.debug("产品开关 " + e + " 不存在"), 
                _t8);
            }
        } ]);
        return t;
    }();
    t.synced = !1, t.scene = null, t.city = null, t.country = null, t.timestamp = null, 
    t.firstSceneCache = "first_enter_scene", t.switchScene = "zs_scene_value", t.sceneMark = "scene", 
    t.cityMark = "city", t.timeMark = "time", t.countryWhiteList = "中国", t.firstSceneSwitch = "zs_new_scene_value", 
    t.oldSceneSwitch = "zs_old_scene_value", e.product = t;
}(window.zs = window.zs || {});