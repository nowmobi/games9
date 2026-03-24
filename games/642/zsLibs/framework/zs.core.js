var _interopRequireDefault = babel_require("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = babel_require("../../@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(babel_require("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = babel_require("../../@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck2 = babel_require("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = babel_require("../../@babel/runtime/helpers/createClass");

window.zs = window.zs || {}, function (e) {
    "use strict";
    var t = /* */ function () {
        function t() {
            _classCallCheck2(this, t);
        }
        _createClass2(t, null, [{
            key: "save",
            value: function save() {
                var e = {}, _t = {};
                if (!this.data) return void zs.log.warn("无存档数据！", "SaveData");
                for (var _e in this.data) {
                    var _s = this.data[_e];
                    _t[_e] = _s;
                }
                if (this.info) for (var _t4 in this.info) {
                    var _s2 = this.info[_t4];
                    "string" == typeof _s2 && (e[_t4] = _s2);
                }
                var s = {
                    head: e,
                    data: _t
                };
                zs.network.dataEdit("game_data", JSON.stringify(s));
            }
        }, {
            key: "clear",
            value: function clear() {
                zs.network.dataEdit("game_data", "");
            }
        }, {
            key: "load",
            value: function () {
                var _load = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee() {
                    var e, _t5;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return zs.network.dataGet("game_data");

                                case 2:
                                    e = _context.sent;
                                    if (e) for (_t5 in e) {
                                        console.log(_t5 + " : " + e[_t5]), this.data[_t5] = e[_t5];
                                    }
                                    return _context.abrupt("return", this.data);

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function load() {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }]);
        return t;
    }();
    t.info = null, t.data = null;
    var s = /* */ function () {
        function s() {
            _classCallCheck2(this, s);
            this.switchExporter = "zs_jump_switch", this.exporterPack = null;
        }
        _createClass2(s, [{
            key: "exportWindow",
            get: function get() {
                return null == this._exportWindow && (this._exportWindow = zs.fgui.window.create().show()),
                    this._exportWindow;
            }
        }, {
            key: "bannerWindow",
            get: function get() {
                return null == this._bannerWindow && (this._bannerWindow = zs.fgui.window.create().show()),
                    this._bannerWindow;
            }
        }, {
            key: "fsmList",
            get: function get() {
                return null == this._fsmList && (this._fsmList = {}), this._fsmList;
            }
        }, {
            key: "state",
            get: function get() {
                return this.fsm ? this.fsm.current : null;
            }
        }, {
            key: "childState",
            get: function get() {
                return this.fsm && this.fsmList[this.fsm.current] ? this.fsmList[this.fsm.current].current : null;
            }
        }, {
            key: "eventList",
            get: function get() {
                return null == this._eventList && (this._eventList = {}), this._eventList;
            }
        }, {
            key: "registe",
            value: function registe() {
                var _this = this;
                // this.fsm = new zs.fsm().registe(s.PRODUCT_START, s.PRODUCT_BEGIN).registe(s.PRODUCT_BEGIN, s.GAME_HOME).registe(s.GAME_HOME, s.PRODUCT_HOME_PLAY).registe(s.PRODUCT_HOME_PLAY, s.GAME_PLAY).registe(s.GAME_PLAY, s.PRODUCT_PLAY_END).registe(s.PRODUCT_PLAY_END, s.GAME_END).registe(s.GAME_END, s.PRODUCT_FINISH).registe(s.PRODUCT_FINISH, s.PRODUCT_BEGIN).setDefault(s.PRODUCT_START), 
                this.fsm = new zs.fsm().registe(s.PRODUCT_START,
                    s.PRODUCT_BEGIN).registe(s.PRODUCT_BEGIN,
                        s.GAME_HOME).registe(s.GAME_HOME,
                            s.PRODUCT_HOME_PLAY).registe(s.PRODUCT_HOME_PLAY,
                                s.GAME_PLAY).registe(s.GAME_PLAY,
                                    s.PRODUCT_PLAY_END).registe(s.PRODUCT_PLAY_END,
                                        s.GAME_END).registe(s.GAME_END,
                                            s.PRODUCT_FINISH).registe(s.PRODUCT_FINISH,
                                                s.PRODUCT_BEGIN).setDefault(s.PRODUCT_START),
                    this.registeEvent(s.eventNext, this, function (e) {
                        _this.next(e);
                    }), this.registeEvent(s.eventChildNext, this, function (e) {
                        _this.childNext(e);
                    }), this.registeEvent(s.eventCreateBase, this, function (e) {
                        _this.createBase(e);
                    }), this.registeEvent(s.eventCloseBase, this, function (e) {
                        _this.exportWindow.detach(e);
                    });
            }
        }, {
            key: "start",
            value: function start() {
                this.fsm && (this.fsm.onBeforeChange = zs.Handler.create(this, this.onBeforeChange, null, !1),
                    this.fsm.onChanged = zs.Handler.create(this, this.onChanged, null, !1)), zs.fgui.configs.registeBase(s.exporterList, zs.exporter.list),
                    zs.fgui.configs.registeBase(s.exporterCard, zs.exporter.card), zs.fgui.configs.registeBase(s.exporterBackground, zs.exporter.background),
                    zs.fgui.configs.registeBase(s.exporterLoader, zs.exporter.loader), zs.fgui.configs.registeBase(s.exporterButton, zs.exporter.button),
                    i.addAppShow(zs.Handler.create(this, zs.platform.sync.clearDelayBanner, null, !1)),
                    this.fsm.init();
            }
        }, {
            key: "setFSM",
            value: function setFSM(e, t) {
                this.fsmList[e.trim()] = t;
            }
        }, {
            key: "registeEvent",
            value: function registeEvent(e, t, _s3) {
                for (var _len = arguments.length, i = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                    i[_key - 3] = arguments[_key];
                }
                this.eventList[e.trim()] = {
                    caller: t,
                    func: _s3,
                    args: i
                };
            }
        }, {
            key: "applyEvent",
            value: function applyEvent(e, t) {
                var _s4 = this.eventList[e.trim()];
                _s4 && _s4.func && _s4.func.apply(_s4.caller, t && t.length > 0 ? t : _s4.args);
            }
        }, {
            key: "applyEventReturn",
            value: function applyEventReturn(e, t) {
                var _s5 = this.eventList[e.trim()];
                return _s5 && _s5.func ? _s5.func.apply(_s5.caller, t && t.length > 0 ? t : _s5.args) : null;
            }
        }, {
            key: "callEvent",
            value: function callEvent(e) {
                for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    t[_key2 - 1] = arguments[_key2];
                }
                this.applyEvent(e, t);
            }
        }, {
            key: "callEventReturn",
            value: function callEventReturn(e) {
                for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    t[_key3 - 1] = arguments[_key3];
                }
                return this.applyEventReturn(e, t);
            }
        }, {
            key: "readConfigReturn",
            value: function readConfigReturn(e) {
                if (null == e || null == e) return null;
                var t = null, _s6 = _typeof2(e);
                if ("number" === _s6 || "boolean" === _s6 || Array.isArray(e)) t = e; else if ("object" === _s6) for (var _s57 in e) {
                    var _i = e[_s57];
                    null == _i || null == _i || Array.isArray(_i) || (_i = [_i]), t = this.applyEventReturn(_s57, _i);
                    break;
                } else "string" === _s6 && (t = this.applyEventReturn(e));
                return t;
            }
        }, {
            key: "runEventConfig",
            value: function runEventConfig(e) {
                if (null == e || null == e) return;
                var t = _typeof2(e);
                if ("string" === t) this.callEvent(e); else if (Array.isArray(e)) for (var _t6 = 0, _s58 = e.length; _t6 < _s58; _t6++) {
                    this.runEventConfig(e[_t6]);
                } else if ("object" == t) for (var _t7 in e) {
                    var _s59 = e[_t7];
                    Array.isArray(_s59) || null == _s59 || null == _s59 || (_s59 = [_s59]), this.applyEvent(_t7, _s59);
                }
            }
        }, {
            key: "registeChildFSM",
            value: function registeChildFSM() {
                var e = zs.configs.productCfg;
                for (var _t8 in e) {
                    if (_t8 = _t8.trim(), this.fsmList[_t8]) continue;
                    var _s60 = e[_t8].states;
                    if (!_s60 || _s60.length <= 0) continue;
                    var _i2 = null, r = null, n = new zs.fsm();
                    for (var _e2 = 0, _t9 = _s60.length; _e2 < _t9; _e2++) {
                        var _t10 = _s60[_e2];
                        null != _t10 && "string" == typeof _t10 && ((_t10 = _t10.trim()).length <= 0 || (_i2 ? (n.registe(r, _t10),
                            r = _t10) : (_i2 = _t10, r = _t10)));
                    }
                    if (_i2) {
                        n.setDefault(_i2);
                        var _s61 = e[_t8].substates;
                        if (_s61 && Array.isArray(_s61)) for (var _e3 = 0, _t11 = _s61.length; _e3 < _t11; _e3++) {
                            var _t12 = _s61[_e3];
                            if (null == _t12 || !Array.isArray(_t12) || _t12.length <= 1) continue;
                            var _i3 = null;
                            for (var _e4 = 0, _s62 = _t12.length; _e4 < _s62; _e4++) {
                                var _s63 = _t12[_e4];
                                null != _s63 && "string" == typeof _s63 && ((_s63 = _s63.trim()).length <= 0 || n.getState(_i3, _s63) || (_i3 && n.registe(_i3, _s63, null != n.list[_i3] ? -1 : 0),
                                    _i3 = _s63));
                            }
                        }
                        this.fsmList[_t8] = n;
                    }
                }
            }
        }, {
            key: "on",
            value: function on(e, t, _s14, i) {
                if (null == e || e.trim().length <= 0 || null == t) return;
                e = e.trim(), t.once = !1, i = i || 0, t.priority = i;
                var r = -1, n = null;
                if (_s14 ? (null == this.preListeners && (this.preListeners = {}), null == this.preListeners[e] && (this.preListeners[e] = []),
                    n = this.preListeners[e]) : (null == this.listeners && (this.listeners = {}), null == this.listeners[e] && (this.listeners[e] = []),
                        n = this.listeners[e]), n) {
                    for (var _e5 = 0, _s64 = n.length; _e5 < _s64; _e5++) {
                        if (n[_e5]._id == t._id) return;
                        var _s65 = n[_e5].priority || 0;
                        if (r < 0 && i > _s65) {
                            r = _e5;
                            break;
                        }
                    }
                    r < 0 ? n.push(t) : n.splice(r, 0, t);
                }
            }
        }, {
            key: "onLater",
            value: function onLater(e, t, _s17, i) {
                if (null == e || e.trim().length <= 0 || null == t) return;
                e = e.trim(), t.once = !1, i = i || 0, t.priority = i;
                var r = -1, n = null;
                if (_s17 ? (null == this.laterPreListeners && (this.laterPreListeners = {}), null == this.laterPreListeners[e] && (this.laterPreListeners[e] = []),
                    n = this.laterPreListeners[e]) : (null == this.laterListeners && (this.laterListeners = {}),
                        null == this.laterListeners[e] && (this.laterListeners[e] = []), n = this.laterListeners[e]),
                    n) {
                    for (var _e6 = 0, _s66 = n.length; _e6 < _s66; _e6++) {
                        if (n[_e6]._id == t._id) return;
                        var _s67 = n[_e6].priority || 0;
                        if (r < 0 && i > _s67) {
                            r = _e6;
                            break;
                        }
                    }
                    r < 0 ? n.push(t) : n.splice(r, 0, t);
                }
            }
        }, {
            key: "once",
            value: function once(e, t, _s20, i) {
                this.on(e, t, _s20, i), t && (t.once = !0);
            }
        }, {
            key: "onceLater",
            value: function onceLater(e, t, _s21, i) {
                this.onLater(e, t, _s21, i), t && (t.once = !0);
            }
        }, {
            key: "off",
            value: function off(e, t, _s22) {
                if (!(null == e || e.trim().length <= 0 || null == t)) if (e = e.trim(), _s22) {
                    if (null == this.preListeners) return;
                    if (null == this.preListeners[e]) return;
                    var _s68 = this.preListeners[e];
                    for (var _e7 = 0, _i4 = _s68.length; _e7 < _i4; _e7++) {
                        if (_s68[_e7]._id == t._id) return void _s68.splice(_e7, 1);
                    }
                } else {
                    if (null == this.listeners) return;
                    if (null == this.listeners[e]) return;
                    var _s69 = this.listeners[e];
                    for (var _e8 = 0, _i5 = _s69.length; _e8 < _i5; _e8++) {
                        if (_s69[_e8]._id == t._id) return void _s69.splice(_e8, 1);
                    }
                }
            }
        }, {
            key: "offLater",
            value: function offLater(e, t, _s25) {
                if (!(null == e || e.trim().length <= 0 || null == t)) if (e = e.trim(), _s25) {
                    if (null == this.laterPreListeners) return;
                    if (null == this.laterPreListeners[e]) return;
                    var _s70 = this.laterPreListeners[e];
                    for (var _e9 = 0, _i6 = _s70.length; _e9 < _i6; _e9++) {
                        if (_s70[_e9]._id == t._id) return void _s70.splice(_e9, 1);
                    }
                } else {
                    if (null == this.laterListeners) return;
                    if (null == this.laterListeners[e]) return;
                    var _s71 = this.laterListeners[e];
                    for (var _e10 = 0, _i7 = _s71.length; _e10 < _i7; _e10++) {
                        if (_s71[_e10]._id == t._id) return void _s71.splice(_e10, 1);
                    }
                }
            }
        }, {
            key: "offAll",
            value: function offAll(e, t) {
                if (!(null == e || e.trim().length <= 0)) if (e = e.trim(), t) {
                    if (null == this.preListeners) return;
                    if (null == this.preListeners[e]) return;
                    delete this.preListeners[e];
                } else {
                    if (null == this.listeners) return;
                    if (null == this.listeners[e]) return;
                    delete this.listeners[e];
                }
            }
        }, {
            key: "offAllLater",
            value: function offAllLater(e, t) {
                if (!(null == e || e.trim().length <= 0)) if (e = e.trim(), t) {
                    if (null == this.laterPreListeners) return;
                    if (null == this.laterPreListeners[e]) return;
                    delete this.laterPreListeners[e];
                } else {
                    if (null == this.laterListeners) return;
                    if (null == this.laterListeners[e]) return;
                    delete this.laterListeners[e];
                }
            }
        }, {
            key: "offAllCaller",
            value: function offAllCaller(e, t, _s28) {
                if (null != e) if (null == t || t.trim().length <= 0) {
                    if (_s28) for (var _t13 in this.preListeners) {
                        var _s72 = this.preListeners[_t13];
                        for (var _t14 = 0, _i8 = _s72.length; _t14 < _i8; _t14++) {
                            _s72[_t14].caller == e && (_s72.splice(_t14, 1), _t14--, _i8--);
                        }
                    } else for (var _t15 in this.listeners) {
                        var _s73 = this.listeners[_t15];
                        for (var _t16 = 0, _i9 = _s73.length; _t16 < _i9; _t16++) {
                            _s73[_t16].caller == e && (_s73.splice(_t16, 1), _t16--, _i9--);
                        }
                    }
                } else if (t = t.trim(), _s28) {
                    var _s74 = this.preListeners[t];
                    if (_s74) for (var _t17 = 0, _i10 = _s74.length; _t17 < _i10; _t17++) {
                        _s74[_t17].caller == e && (_s74.splice(_t17, 1), _t17--, _i10--);
                    }
                } else {
                    var _s75 = this.listeners[t];
                    if (_s75) for (var _t18 = 0, _i11 = _s75.length; _t18 < _i11; _t18++) {
                        _s75[_t18].caller == e && (_s75.splice(_t18, 1), _t18--, _i11--);
                    }
                }
            }
        }, {
            key: "offAllCallerLater",
            value: function offAllCallerLater(e, t, _s33) {
                if (null != e) if (null == t || t.trim().length <= 0) {
                    if (_s33) for (var _t19 in this.laterPreListeners) {
                        var _s76 = this.laterPreListeners[_t19];
                        for (var _t20 = 0, _i12 = _s76.length; _t20 < _i12; _t20++) {
                            _s76[_t20].caller == e && (_s76.splice(_t20, 1), _t20--, _i12--);
                        }
                    } else for (var _t21 in this.laterListeners) {
                        var _s77 = this.laterListeners[_t21];
                        for (var _t22 = 0, _i13 = _s77.length; _t22 < _i13; _t22++) {
                            _s77[_t22].caller == e && (_s77.splice(_t22, 1), _t22--, _i13--);
                        }
                    }
                } else if (t = t.trim(), _s33) {
                    var _s78 = this.laterPreListeners[t];
                    if (_s78) for (var _t23 = 0, _i14 = _s78.length; _t23 < _i14; _t23++) {
                        _s78[_t23].caller == e && (_s78.splice(_t23, 1), _t23--, _i14--);
                    }
                } else {
                    var _s79 = this.laterListeners[t];
                    if (_s79) for (var _t24 = 0, _i15 = _s79.length; _t24 < _i15; _t24++) {
                        _s79[_t24].caller == e && (_s79.splice(_t24, 1), _t24--, _i15--);
                    }
                }
            }
        }, {
            key: "clear",
            value: function clear(e) {
                e ? this.preListeners = null : this.listeners = null;
            }
        }, {
            key: "clearLater",
            value: function clearLater(e) {
                e ? this.laterPreListeners = null : this.laterListeners = null;
            }
        }, {
            key: "next",
            value: function next(e) {
                this.wantNext = 1, this.nextTarget = e, this.step();
            }
        }, {
            key: "childNext",
            value: function childNext(e) {
                this.wantNext || (this.wantNext = 2, this.nextTarget = e, this.step());
            }
        }, {
            key: "step",
            value: function step() {
                if (this.lockStep) return;
                var e = this.nextTarget, t = this.wantNext;
                switch (this.wantNext = 0, this.nextTarget = null, t) {
                    case 1:
                        if (null != this.fsm) {
                            var _t25 = this.fsm.current;
                            e ? this.fsm.runTransition(e) || zs.log.error("无法执行从 " + _t25 + " 到 " + e + " 的工作流，请检查是否完整注册流程!", "Core") : this.fsm.runNext() || zs.log.error("无法执行 " + _t25 + " 的后续工作流，请检查是否完整注册流程!", "Core");
                        }
                        break;

                    case 2:
                        if (null != this.fsm) {
                            var _t26 = this.fsmList[this.fsm.current], _s80 = !1;
                            if (_t26 && (e && !_t26.runTransition(e) || !e && !_t26.runNext()) && (this.onChildFSMBeforeChanged(null, _t26.current),
                                _s80 = !0), !_t26 || _s80) {
                                var _e11 = this.fsm.current;
                                this.fsm.runNext() || zs.log.error("无法执行 " + _e11 + " 的后续工作流，请检查是否完整注册流程!", "Core");
                            }
                        }
                }
            }
        }, {
            key: "onBeforeChange",
            value: function onBeforeChange(e, i) {
                if (zs.product.synced || zs.network.config(!0).catch(function (e) {
                    return e;
                }).then(function (e) {
                    null == e || e.length <= 0 ? zs.td.justTrack("请求配置数据失败", "请求配置数据失败") : (zs.td.justTrack("请求配置数据成功", "请求配置数据成功"),
                        zs.product.sync(e), zs.fgui.msgtext.hide());
                }), "wx_" == zs.platform.config.platformMark && zs.exporter.dataMgr.load(), this.lockStep = !0,
                    e == s.GAME_END && t.save(), null != this.preListeners && null != this.preListeners[e]) {
                    var _t27 = this.preListeners[e];
                    for (var _e12 = 0, _s81 = _t27.length; _e12 < _s81; _e12++) {
                        var _i16 = _t27[_e12].once;
                        _t27[_e12].run(), _i16 && (_t27.splice(_e12, 1), _e12--, _s81--);
                    }
                }
                if (this.checkExitEvent(i), this.exportWindow.clear(), zs.platform.sync.hideBanner(),
                    zs.platform.sync.clearDelayBanner(), null != this.laterPreListeners && null != this.laterPreListeners[e]) {
                    var _t28 = this.laterPreListeners[e];
                    for (var _e13 = 0, _s82 = _t28.length; _e13 < _s82; _e13++) {
                        var _i17 = _t28[_e13].once;
                        _t28[_e13].run(), _i17 && (_t28.splice(_e13, 1), _e13--, _s82--);
                    }
                }
                this.lockStep = !1, this.step();
            }
        }, {
            key: "checkSwitch",
            value: function checkSwitch(e, t) {
                var _s41 = !0;
                if (e) if ("boolean" == typeof e) _s41 = e; else if (Array.isArray(e)) for (var _t29 = 0, _i18 = e.length; _t29 < _i18; _t29++) {
                    var _i19 = e[_t29];
                    if (_i19 && !(_i19.length <= 0)) if ("!" == _i19[0] || "！" == _i19[0]) {
                        if (!(_i19.length > 1)) {
                            _s41 = !1;
                            break;
                        }
                        if (_i19 = _i19.slice(1, _i19.length), zs.product.get(_i19)) {
                            _s41 = !1;
                            break;
                        }
                    } else if (!zs.product.get(_i19)) {
                        _s41 = !1;
                        break;
                    }
                } else if ("string" == typeof _typeof2(e)) {
                    var _t30 = e;
                    _t30 && _t30.length > 0 && ("!" == _t30[0] || "！" == _t30[0] ? _t30.length > 1 ? (_t30 = _t30.slice(1, _t30.length),
                        zs.product.get(_t30) && (_s41 = !1)) : _s41 = !1 : zs.product.get(_t30) || (_s41 = !1));
                }
                return !!_s41 && (t && (_s41 = this.readConfigReturn(t)), _s41);
            }
        }, {
            key: "onChanged",
            value: function onChanged(e) {
                this.lockStep = !0;
                var t = zs.td.descMap[e];
                null == t && (t = e), zs.td.justTrack(t, t);
                var _s42 = zs.configs.productCfg[e], i = !1;
                _s42 && (_s42.switch || _s42.check) && (i = !this.checkSwitch(_s42.switch, _s42.check));
                var r = this.fsmList[e];
                if (i) this.next(); else {
                    if (null != this.listeners && null != this.listeners[e]) {
                        var _t31 = this.listeners[e];
                        for (var _e14 = 0, _s83 = _t31.length; _e14 < _s83; _e14++) {
                            var _i20 = _t31[_e14].once;
                            _t31[_e14].run(), _i20 && (_t31.splice(_e14, 1), _e14--, _s83--);
                        }
                    }
                    if (this.checkEvent(e), r) {
                        r.onBeforeChange = zs.Handler.create(this, this.onChildFSMBeforeChanged, null, !1),
                            r.onChanged = zs.Handler.create(this, this.onChildFSMChanged, null, !1), r.init(),
                            zs.configs.productCfg[e] && zs.log.info(e + " 状态存在子状态机，无法自动创建应用运营配置，请使用子状态进行配置!", "Workflow", r.list);
                    } else this.checkBase(e), zs.product.get(this.switchExporter) && this.checkExporter(e),
                        this.checkBanner(e);
                    if (this.checkLaterEvent(e), null != this.laterListeners && null != this.laterListeners[e]) {
                        var _t32 = this.laterListeners[e];
                        for (var _e15 = 0, _s84 = _t32.length; _e15 < _s84; _e15++) {
                            var _i21 = _t32[_e15].once;
                            _t32[_e15].run(), _i21 && (_t32.splice(_e15, 1), _e15--, _s84--);
                        }
                    }
                }
                this.lockStep = !1, this.step();
            }
        }, {
            key: "onChildFSMBeforeChanged",
            value: function onChildFSMBeforeChanged(e, t) {
                if (null == this.fsm) return;
                this.lockStep = !0;
                var _s45 = this.fsm.current + "." + e;
                if (null != this.preListeners && null != this.preListeners[_s45]) {
                    var _e16 = this.preListeners[_s45];
                    for (var _t33 = 0, _s85 = _e16.length; _t33 < _s85; _t33++) {
                        var _i22 = _e16[_t33].once;
                        _e16[_t33].run(), _i22 && (_e16.splice(_t33, 1), _t33--, _s85--);
                    }
                }
                if (this.checkExitEvent(this.fsm.current + "." + t), this.exportWindow.clear(),
                    zs.platform.sync.hideBanner(), zs.platform.sync.clearDelayBanner(), null != this.laterPreListeners && null != this.laterPreListeners[_s45]) {
                    var _e17 = this.laterPreListeners[_s45];
                    for (var _t34 = 0, _s86 = _e17.length; _t34 < _s86; _t34++) {
                        var _i23 = _e17[_t34].once;
                        _e17[_t34].run(), _i23 && (_e17.splice(_t34, 1), _t34--, _s86--);
                    }
                }
                this.lockStep = !1, this.step();
            }
        }, {
            key: "onChildFSMChanged",
            value: function onChildFSMChanged(e) {
                if (null == this.fsm) return;
                this.lockStep = !0;
                var t = this.fsm.current + "." + e, _s48 = zs.td.descMap[this.fsm.current];
                null == _s48 && (_s48 = this.fsm.current), _s48 = _s48 + "." + e, zs.td.justTrack(_s48, _s48);
                var i = zs.configs.productCfg[t], r = !1;
                if (i && (i.switch || i.check) && (r = !this.checkSwitch(i.switch, i.check)), r) this.childNext(); else {
                    if (null != this.listeners && null != this.listeners[t]) {
                        var _e18 = this.listeners[t];
                        for (var _t35 = 0, _s87 = _e18.length; _t35 < _s87; _t35++) {
                            var _i24 = _e18[_t35].once;
                            _e18[_t35].run(), _i24 && (_e18.splice(_t35, 1), _t35--, _s87--);
                        }
                    }
                    if (this.checkEvent(t), this.checkBase(t), zs.product.get(this.switchExporter) && this.checkExporter(t),
                        this.checkBanner(t), this.checkLaterEvent(t), null != this.laterListeners && null != this.laterListeners[t]) {
                        var _e19 = this.laterListeners[t];
                        for (var _t36 = 0, _s88 = _e19.length; _t36 < _s88; _t36++) {
                            var _i25 = _e19[_t36].once;
                            _e19[_t36].run(), _i25 && (_e19.splice(_t36, 1), _t36--, _s88--);
                        }
                    }
                }
                this.lockStep = !1, this.step();
            }
        }, {
            key: "checkEvent",
            value: function checkEvent(e) {
                var t = zs.configs.productCfg[e];
                t && t.event && this.runEventConfig(t.event);
            }
        }, {
            key: "checkLaterEvent",
            value: function checkLaterEvent(e) {
                var t = zs.configs.productCfg[e];
                t && t.laterevent && this.runEventConfig(t.laterevent);
            }
        }, {
            key: "checkExitEvent",
            value: function checkExitEvent(e) {
                var t = zs.configs.productCfg[e];
                t && t.exitevent && this.runEventConfig(t.exitevent);
            }
        }, {
            key: "showPreviewBanner",
            value: function showPreviewBanner(e) {
                var _this2 = this;
                var t = e ? e.pos : null, _s51 = e ? e.size : null, i = e ? e.checkInit : null, r = e && null != e.isWait ? e.isWait : null, n = t && t.right ? t.right : null, l = t && t.bottom ? t.bottom : null;
                t && t.left && (n = -t.left), t && t.top && (l = -t.top), e && e.empty ? _s51 = {
                    width: zs.configs.gameCfg.debug ? 10 : 1,
                    height: zs.configs.gameCfg.debug ? 10 : 1
                } : null == _s51 && (_s51 = {
                    width: zs.platform.config.bannerWidth || 600,
                    height: zs.platform.config.bannerHeight || 200
                }), i ? this.banner || (this.bannerWindow.attach(zs.exporter.banner).update(zs.exporter.banner, function (e) {
                    _this2.banner = e, _s51 && (_s51.width && e.setWidth(_s51.width), _s51.height && e.setHeight(_s51.height)),
                        _this2.banner.view.visible = !r;
                }, this), e && e.empty ? this.bannerWindow.align(zs.fgui.AlignType.TopLeft) : this.bannerWindow.align(zs.fgui.AlignType.Bottom, n, l),
                    this.bannerWindow.show().front()) : this.banner && (_s51 && (_s51.width && this.banner.setWidth(_s51.width),
                        _s51.height && this.banner.setHeight(_s51.height)), this.bannerWindow.setBase(this.banner),
                        e && e.empty ? this.bannerWindow.align(zs.fgui.AlignType.TopLeft) : this.bannerWindow.align(zs.fgui.AlignType.Bottom, n, l),
                        this.bannerWindow.show().front(), this.banner.view.visible = !0);
            }
        }, {
            key: "hidePreviewBanner",
            value: function hidePreviewBanner() {
                this.banner && (this.bannerWindow.detach(this.banner), this.banner = null);
            }
        }, {
            key: "checkBanner",
            value: function checkBanner(e) {
                var t = Number(zs.product.get("zs_adtype_switch"));
                0 != t && (1 == t || 2 == t ? this.checkOldBanner(e) : 3 == t && this.checkVideoBanner(e));
            }
        }, {
            key: "checkOldBanner",
            value: function checkOldBanner(e) {
                var t = zs.configs.productCfg[e], _s52 = zs.product.get("zs_skip_empty_banner") || "wx_" != zs.platform.config.platformMark;
                if (t && t.banner) {
                    if (this.bannerIgnoreList && this.bannerIgnoreList.indexOf(e) >= 0) return zs.log.info("状态 " + e + " 在横幅广告忽略列表中，无法自动生成，请自主管理横幅广告展示或将该状态移出忽略列表", "Workflow"),
                        void (!_s52 && zs.platform.sync.updateBanner({
                            empty: !0,
                            checkInit: !0
                        }));
                    if ((t.banner.switch || t.banner.check) && !this.checkSwitch(t.banner.switch, t.banner.check)) return void (!_s52 && zs.platform.sync.updateBanner({
                        empty: !0,
                        checkInit: !0
                    }));
                    zs.platform.sync.checkBanner({
                        data: t
                    });
                } else !_s52 && zs.platform.sync.updateBanner({
                    empty: !0,
                    checkInit: !0
                });
            }
        }, {
            key: "checkVideoBanner",
            value: function checkVideoBanner(e) {
                var t = zs.configs.productCfg[e];
                t && t.banner && this.checkSwitch(t.banner.switch, t.banner.check) && zs.core.workflow.runEventConfig({
                    event_show_video_banner: null
                });
            }
        }, {
            key: "checkExporter",
            value: function checkExporter(e) {
                var t = zs.configs.productCfg[e];
                if (this.exporterIgnoreList && this.exporterIgnoreList.indexOf(e) >= 0) t && t.exporter && t.exporter.length > 0 && zs.log.info("状态 " + e + " 在导出忽略列表中，无法自动生成，请自主管理导出展示或将该状态移出忽略列表", "Workflow"); else if (t && t.exporter) {
                    var _e20 = t.exporter;
                    if (Array.isArray(_e20) && _e20.length > 0) for (var _e21 = 0, _s89 = t.exporter.length; _e21 < _s89; _e21++) {
                        var _s90 = t.exporter[_e21];
                        _s90 && (!_s90.switch && !_s90.check || this.checkSwitch(_s90.switch, _s90.check)) && this.exportWindow.applyConfig(_s90).front();
                    } else "object" == _typeof2(_e20) && (!_e20.switch && !_e20.check || this.checkSwitch(_e20.switch, _e20.check)) && this.exportWindow.applyConfig(_e20).front();
                }
            }
        }, {
            key: "checkBase",
            value: function checkBase(e) {
                var t = zs.configs.productCfg[e];
                if (t && t.base) {
                    var _e22 = t.base;
                    if (Array.isArray(_e22) && _e22.length > 0) for (var _e23 = 0, _s91 = t.base.length; _e23 < _s91; _e23++) {
                        var _s92 = t.base[_e23];
                        _s92 && (!_s92.switch && !_s92.check || this.checkSwitch(_s92.switch, _s92.check)) && this.exportWindow.applyConfig(_s92).front();
                    } else "object" == _typeof2(_e22) && (!_e22.switch && !_e22.check || this.checkSwitch(_e22.switch, _e22.check)) && this.exportWindow.applyConfig(_e22).front();
                }
            }
        }, {
            key: "createBase",
            value: function createBase(e) {
                var t = zs.configs.uiCfg.base[e];
                return t && this.checkSwitch(t.switch, t.check) ? this.exportWindow.applyConfig(t).front().getBase() : null;
            }
        }]);
        return s;
    }();
    s.exporterList = "export_list", s.exporterCard = "export_card", s.exporterBackground = "export_background",
        s.exporterLoader = "export_loader", s.exporterButton = "export_button", s.eventNext = "event_next",
        s.eventChildNext = "event_childnext", s.eventCreateBase = "event_createbase", s.eventCloseBase = "event_closebase",
        s.PRODUCT_START = "PRODUCT_START", s.PRODUCT_BEGIN = "PRODUCT_BEGIN", s.GAME_HOME = "GAME_HOME",
        s.PRODUCT_HOME_PLAY = "PRODUCT_HOME_PLAY", s.GAME_PLAY = "GAME_PLAY", s.PRODUCT_PLAY_END = "PRODUCT_PLAY_END",
        s.GAME_END = "GAME_END", s.PRODUCT_FINISH = "PRODUCT_FINISH";
    var i = /* */ function () {
        function i() {
            _classCallCheck2(this, i);
        }
        _createClass2(i, null, [{
            key: "registeBase",
            value: function registeBase(e, t) {
                zs.fgui.configs.registeBase(e, t);
            }
        }, {
            key: "unregisteBase",
            value: function unregisteBase(e) {
                zs.fgui.configs.unregisteBase(e);
            }
        }, {
            key: "registeItem",
            value: function registeItem(e, t) {
                zs.fgui.configs.registeItem(e, t);
            }
        }, {
            key: "unregisteItem",
            value: function unregisteItem(e) {
                zs.fgui.configs.unregisteItem(e);
            }
        }, {
            key: "init",
            value: function () {
                var _init = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee2(e, s) {
                    var r;
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    t.data = s || {};
                                    i.productDef = e;
                                    zs.proxy.init();
                                    zs.Timer.gTimer = new zs.Timer();
                                    window.requestAnimationFrame(function timerLoop(e) {
                                        zs.Timer.gTimer._update();
                                        zs.Timer.inst._update();
                                        window.requestAnimationFrame(timerLoop);
                                    });
                                    zs.platform.init();
                                    zs.platform.sync.addEventShow({
                                        showHandler: function showHandler(e) {
                                            i.onAppShow(e);
                                        }
                                    });
                                    zs.platform.sync.addEventHide({
                                        hideHandler: function hideHandler(e) {
                                            i.onAppHide(e);
                                        }
                                    });
                                    _context2.next = 10;
                                    return zs.configs.init().catch(function (e) {
                                        return e;
                                    });

                                case 10:
                                    zs.configs.gameCfg.debug && (zs.log.Configs.logLevel = zs.log.Level.DEBUG);
                                    zs.platform.proxy && "wx_" == zs.platform.config.platformMark && "undefined" != typeof wx && zs.exporter.dataMgr.collectSource();
                                    this.tdKey && this.tdKey != zs.td.defaultKey ? zs.td.appKey = this.tdKey : (zs.td.appKey = zs.td.defaultKey,
                                        zs.td.appName = zs.configs.gameCfg.appName);
                                    zs.td.channel = zs.platform.proxy ? zs.platform.config.channel : "TEST";
                                    zs.configs.gameCfg.tdVersion && (zs.td.versionName = zs.configs.gameCfg.tdVersion);
                                    // zs.td.init();
                                    zs.td.justTrack(zs.td.startupDesc, zs.td.startupDesc);
                                    zs.resource.init();
                                    this.onConfigInit && this.onConfigInit.run();
                                    this._readyStart = !1;
                                    zs.fgui.init();
                                    r = this.entry ? this.entry : zs.base.entry;
                                    if (!this.loadingPage) {
                                        _context2.next = 28;
                                        break;
                                    }
                                    _context2.next = 25;
                                    return this.loadingPage.preload().catch(function (e) {
                                        return e;
                                    });

                                case 25:
                                    this.entryInst = r.init(this.loadingPage, this, this.ready);
                                    _context2.next = 35;
                                    break;

                                case 28:
                                    if (!this.nativeLoadingPage) {
                                        _context2.next = 34;
                                        break;
                                    }
                                    _context2.next = 31;
                                    return this.nativeLoadingPage.preload().catch(function (e) {
                                        return e;
                                    });

                                case 31:
                                    this.entryInst = r.init(this.nativeLoadingPage, this, this.ready);
                                    _context2.next = 35;
                                    break;

                                case 34:
                                    this.entryInst = null, this.ready();

                                case 35:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));
                function init(_x, _x2) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "appName",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.appName : null;
            }
        }, {
            key: "appId",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.appId : null;
            }
        }, {
            key: "tdKey",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.tdKey : null;
            }
        }, {
            key: "readyStart",
            get: function get() {
                return this.entryInst ? this.entryInst && this.entryInst.progress >= 100 && this._readyStart : this._readyStart;
            }
        }, {
            key: "ready",
            value: function () {
                var _ready = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee3() {
                    var _this3 = this;
                    var e, s, _e24, r, _e25, _t37, _s93, _e26, _t38, _s94, n, _e27, _t39, _t40;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    zs.log.debug("web 设置", "Core");
                                    _context3.next = 3;
                                    return zs.network.init().catch(function (e) {
                                        return e;
                                    });

                                case 3:
                                    i.userInfo = _context3.sent;
                                    i.userId = i.userInfo.user_id;
                                    _context3.t0 = "wx_" == zs.platform.config.platformMark;
                                    if (!_context3.t0) {
                                        _context3.next = 9;
                                        break;
                                    }
                                    _context3.next = 9;
                                    return zs.exporter.dataMgr.load();

                                case 9:
                                    this.progress = 10;
                                    zs.log.debug("运营设置", "Core");
                                    zs.td.justTrack("请求配置数据", "请求配置数据");
                                    _context3.next = 14;
                                    return zs.network.config(!0).catch(function (e) {
                                        return e;
                                    });

                                case 14:
                                    e = _context3.sent;
                                    null == e || e.length <= 0 ? zs.td.justTrack("请求配置数据失败", "请求配置数据失败") : zs.td.justTrack("请求配置数据成功", "请求配置数据成功"),
                                        zs.product.init(i.productDef), zs.product.sync(e);
                                    s = zs.product.get("zs_sync_product");
                                    if (!(s && "0" != s)) {
                                        _context3.next = 22;
                                        break;
                                    }
                                    _context3.next = 20;
                                    return zs.network.jsonConfig("productCfg,uiCfg").catch(function (e) {
                                        return e;
                                    });

                                case 20:
                                    _e24 = _context3.sent;
                                    _e24 && _e24.productCfg && (zs.configs.productCfg = _e24.productCfg), _e24 && _e24.uiCfg && (zs.configs.uiCfg = _e24.uiCfg);

                                case 22:
                                    this.progress = 20, zs.log.debug("初始化广告与导出组件", "Core");
                                    _context3.next = 25;
                                    return zs.fgui.loadPack(zs.fgui.configs.pack_basic).catch(function (e) {
                                        return e;
                                    });

                                case 25:
                                    r = _context3.sent;
                                    zs.ui.FGUI_msgbox.bind(r);
                                    zs.ui.FGUI_list.bind(r);
                                    this.progress = 30;
                                    zs.log.debug("加载必要分包", "Core");
                                    _context3.next = 32;
                                    return zs.resource.preload().catch(function (e) {
                                        return e;
                                    });

                                case 32:
                                    this.progress = 40;
                                    zs.log.debug("加载 main", "Core");
                                    _context3.next = 36;
                                    return zs.fgui.loadPacks(zs.configs.gameCfg.fguiPacks, !0).catch(function (e) {
                                        return e;
                                    });

                                case 36:
                                    this.onFGUIBind && this.onFGUIBind.run();
                                    this.progress = 50;
                                    zs.log.debug("初始化数据统计", "Core");
                                    _context3.next = 41;
                                    return t.load();

                                case 41:
                                    zs.EggKnock && (zs.EggKnock.init(), zs.core.onWorkflow(zs.workflow.PRODUCT_PLAY_END, zs.Handler.create(this, function () {
                                        zs.EggKnock.markGameNum(!0);
                                    }), !0));
                                    this.progress = 60;
                                    zs.log.debug("加载基础配置", "Core");
                                    if (!(zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.configs)) {
                                        _context3.next = 65;
                                        break;
                                    }
                                    _e25 = zs.configs.gameCfg.resources.configs;
                                    _context3.t1 = _regenerator.default.keys(_e25);

                                case 47:
                                    if ((_context3.t2 = _context3.t1()).done) {
                                        _context3.next = 65;
                                        break;
                                    }
                                    _t37 = _context3.t2.value;
                                    _s93 = _e25[_t37];
                                    _context3.t3 = _s93;
                                    if (!_context3.t3) {
                                        _context3.next = 63;
                                        break;
                                    }
                                    if (!Array.isArray(_s93)) {
                                        _context3.next = 59;
                                        break;
                                    }
                                    _context3.t4 = _s93.length > 0 && null != _s93[0] && _s93[0].trim().length > 0;
                                    if (!_context3.t4) {
                                        _context3.next = 57;
                                        break;
                                    }
                                    _context3.next = 57;
                                    return zs.configs.load(_t37, _s93[0], _s93.length > 1 ? _s93[1] : null, !(_s93.length > 2) || _s93[2]).catch(function (e) {
                                        return e;
                                    });

                                case 57:
                                    _context3.next = 63;
                                    break;

                                case 59:
                                    _context3.t5 = "string" == typeof _s93;
                                    if (!_context3.t5) {
                                        _context3.next = 63;
                                        break;
                                    }
                                    _context3.next = 63;
                                    return zs.configs.load(_t37, _s93, null, !0).catch(function (e) {
                                        return e;
                                    });

                                case 63:
                                    _context3.next = 47;
                                    break;

                                case 65:
                                    if (!(this.progress = 70, zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.prefabs)) {
                                        _context3.next = 86;
                                        break;
                                    }
                                    _e26 = zs.configs.gameCfg.resources.prefabs;
                                    _context3.t6 = _regenerator.default.keys(_e26);

                                case 68:
                                    if ((_context3.t7 = _context3.t6()).done) {
                                        _context3.next = 86;
                                        break;
                                    }
                                    _t38 = _context3.t7.value;
                                    _s94 = _e26[_t38];
                                    _context3.t8 = _s94;
                                    if (!_context3.t8) {
                                        _context3.next = 84;
                                        break;
                                    }
                                    if (!Array.isArray(_s94)) {
                                        _context3.next = 80;
                                        break;
                                    }
                                    _context3.t9 = _s94.length > 0 && null != _s94[0] && _s94[0].trim().length > 0;
                                    if (!_context3.t9) {
                                        _context3.next = 78;
                                        break;
                                    }
                                    _context3.next = 78;
                                    return zs.prefabs.load(_t38, _s94[0], _s94.length > 1 ? _s94[1] : null, !(_s94.length > 2) || _s94[2]).catch(function (e) {
                                        return e;
                                    });

                                case 78:
                                    _context3.next = 84;
                                    break;

                                case 80:
                                    _context3.t10 = "string" == typeof _s94;
                                    if (!_context3.t10) {
                                        _context3.next = 84;
                                        break;
                                    }
                                    _context3.next = 84;
                                    return zs.prefabs.load(_t38, _s94, null, !0).catch(function (e) {
                                        return e;
                                    });

                                case 84:
                                    _context3.next = 68;
                                    break;

                                case 86:
                                    this.progress = 80, zs.log.debug("广告组件初始化", "Core");
                                    n = i.userId % zs.configs.gameCfg.adsGroup * 2;
                                    zs.platform.initAds({
                                        num: zs.configs.gameCfg.adsNum,
                                        idx: n
                                    });
                                    this.progress = 85;
                                    zs.log.debug("业务流程拼装", "Core");
                                    this.progress = 95;
                                    null == this.workflow && (this.workflow = new zs.workflow());
                                    _context3.t11 = this.workflow.exporterPack;
                                    if (!_context3.t11) {
                                        _context3.next = 102;
                                        break;
                                    }
                                    if (!Array.isArray(this.workflow.exporterPack)) {
                                        _context3.next = 100;
                                        break;
                                    }
                                    _context3.next = 98;
                                    return zs.fgui.loadPacks(this.workflow.exporterPack).catch(function (e) {
                                        return e;
                                    });

                                case 98:
                                    _context3.next = 102;
                                    break;

                                case 100:
                                    _context3.next = 102;
                                    return zs.fgui.loadPack(this.workflow.exporterPack).catch(function (e) {
                                        return e;
                                    });

                                case 102:
                                    this.workflow.registe();
                                    this.workflow.registeChildFSM();
                                    if (!this.workListeners) {
                                        _context3.next = 107;
                                        break;
                                    }
                                    for (_e27 = 0, _t39 = this.workListeners.length; _e27 < _t39; _e27++) {
                                        _t40 = this.workListeners[_e27];
                                        _t40.handler.once ? _t40.later ? this.workflow.onceLater(_t40.key, _t40.handler, _t40.isBefore) : this.workflow.once(_t40.key, _t40.handler, _t40.isBefore) : _t40.later ? this.workflow.onLater(_t40.key, _t40.handler, _t40.isBefore) : this.workflow.on(_t40.key, _t40.handler, _t40.isBefore);
                                    }
                                    this.workListeners = null;

                                case 107:
                                    this.checkGameCfg(e);
                                    if (!Laya.Browser.onWeiXin) {
                                        _context3.next = 113;
                                        break;
                                    }
                                    _context3.next = 111;
                                    return this.preloadCustomAd().then(function () {
                                        console.log("原生预加载结束"), _this3.onPrepare ? _this3.onPrepare.run() : _this3.readyFinish();
                                    });

                                case 111:
                                    _context3.next = 114;
                                    break;

                                case 113:
                                    this.onPrepare ? this.onPrepare.run() : this.readyFinish();

                                case 114:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));
                function ready() {
                    return _ready.apply(this, arguments);
                }
                return ready;
            }()
        }, {
            key: "preloadCustomAd",
            value: function () {
                var _preloadCustomAd = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee5() {
                    var _this4 = this;
                    return _regenerator.default.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    return _context5.abrupt("return", new zs.Coop(/* */ function () {
                                        var _ref = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee4(e, t) {
                                            var s;
                                            return _regenerator.default.wrap(function _callee4$(_context4) {
                                                while (1) {
                                                    switch (_context4.prev = _context4.next) {
                                                        case 0:
                                                            console.log("原生预加载开始");
                                                            s = zs.configs.productCfg.PRE_CUSTOMAD_LIST;
                                                            _this4.workflow.preShowCustom(s, e);

                                                        case 3:
                                                        case "end":
                                                            return _context4.stop();
                                                    }
                                                }
                                            }, _callee4);
                                        }));
                                        return function (_x3, _x4) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()));

                                case 1:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5);
                }));
                function preloadCustomAd() {
                    return _preloadCustomAd.apply(this, arguments);
                }
                return preloadCustomAd;
            }()
        }, {
            key: "readyFinish",
            value: function readyFinish() {
                this.checkPanelSort(), zs.Timer.inst.frameLoop(1, this, this.step), this.progress = 100,
                    this._readyStart = !0, this.loadingPage || this.nativeLoadingPage || this.start();
            }
        }, {
            key: "step",
            value: function step() {
                this.checkPanelSort();
            }
        }, {
            key: "start",
            value: function start() {
                zs.log.debug("启动业务", "Core"), this.readyStart && (zs.td.justTrack(zs.td.gameStartDesc, zs.td.gameStartDesc, {
                    uid: i.userId
                }), this.workflow.start(), this.onStart && this.onStart.run());
            }
        }, {
            key: "onWorkflow",
            value: function onWorkflow(e, t, s, _i26) {
                null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                    this.workflow ? this.workflow.on(e, t, s, _i26) : (t.once = !1, this.workListeners.push({
                        key: e,
                        handler: t,
                        priority: _i26,
                        isBefore: s
                    })));
            }
        }, {
            key: "onWorkflowLater",
            value: function onWorkflowLater(e, t, s, _i27) {
                null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                    this.workflow ? this.workflow.onLater(e, t, s, _i27) : (t.once = !1, this.workListeners.push({
                        key: e,
                        handler: t,
                        priority: _i27,
                        isBefore: s,
                        later: !0
                    })));
            }
        }, {
            key: "onceWorkflow",
            value: function onceWorkflow(e, t, s, _i28) {
                null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                    this.workflow ? this.workflow.once(e, t, s, _i28) : (t.once = !0, this.workListeners.push({
                        key: e,
                        handler: t,
                        priority: _i28,
                        isBefore: s
                    })));
            }
        }, {
            key: "onceWorkflowLater",
            value: function onceWorkflowLater(e, t, s, _i29) {
                null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                    this.workflow ? this.workflow.onceLater(e, t, s, _i29) : (t.once = !0, this.workListeners.push({
                        key: e,
                        handler: t,
                        priority: _i29,
                        isBefore: s,
                        later: !0
                    })));
            }
        }, {
            key: "onAppShow",
            value: function onAppShow(e) {
                if (!(null == this.appShowListeners || this.appShowListeners.length <= 0)) for (var _t41 = 0, _s95 = this.appShowListeners.length; _t41 < _s95; _t41++) {
                    var _i34 = this.appShowListeners[_t41];
                    _i34 && _i34.runWith(e), _i34 && !_i34.once || (this.appShowListeners.splice(_t41, 1),
                        _t41--, _s95--);
                }
            }
        }, {
            key: "onAppHide",
            value: function onAppHide(e) {
                if (!(null == this.appHideListeners || this.appHideListeners.length <= 0)) for (var _t42 = 0, _s96 = this.appHideListeners.length; _t42 < _s96; _t42++) {
                    var _i35 = this.appHideListeners[_t42];
                    _i35 && _i35.runWith(e), _i35 && !_i35.once || (this.appHideListeners.splice(_t42, 1),
                        _t42--, _s96--);
                }
            }
        }, {
            key: "addAppShow",
            value: function addAppShow(e) {
                null != e && (null == this.appShowListeners && (this.appShowListeners = []), this.appShowListeners.push(e));
            }
        }, {
            key: "removeAppShow",
            value: function removeAppShow(e) {
                if (null == e || null == this.appShowListeners || this.appShowListeners.length <= 0) return;
                var t = e.caller, s = e.method, _i32 = e.once;
                for (var _e28 = 0, r = this.appShowListeners.length; _e28 < r; _e28++) {
                    var n = this.appShowListeners[_e28];
                    !n || t && n.caller !== t || null != s && n.method !== s || _i32 && !n.once || (this.appShowListeners.splice(_e28, 1),
                        _e28--, r--, n.recover());
                }
            }
        }, {
            key: "addAppHide",
            value: function addAppHide(e) {
                null != e && (null == this.appHideListeners && (this.appHideListeners = []), this.appHideListeners.push(e));
            }
        }, {
            key: "removeAppHide",
            value: function removeAppHide(e) {
                if (null == e || null == this.appHideListeners || this.appHideListeners.length <= 0) return;
                var t = e.caller, s = e.method, _i33 = e.once;
                for (var _e29 = 0, r = this.appHideListeners.length; _e29 < r; _e29++) {
                    var n = this.appHideListeners[_e29];
                    !n || t && n.caller !== t || null != s && n.method !== s || _i33 && !n.once || (this.appHideListeners.splice(_e29, 1),
                        _e29--, r--, n.recover());
                }
            }
        }, {
            key: "checkPanelSort",
            value: function checkPanelSort() {
                zs.proxy.sortScene(this.entryInst);
            }
        }, {
            key: "checkGameCfg",
            value: function checkGameCfg(e) {
                var t = zs.configs.gameCfg;
                if (!t.skipCheck && !zs.fgui.msgtext.isShow()) return null == t.gameId || t.gameId.trim().length <= 0 ? zs.fgui.msgtext.show("未填写gameId") : null == t.appId || t.appId.trim().length <= 0 ? zs.fgui.msgtext.show("未填写appId") : 1 == i.userId && zs.platform.proxy ? zs.fgui.msgtext.show("用户登录失败") : null == t.version || t.version.trim().length <= 0 ? zs.fgui.msgtext.show("未填写版本号version") : null == e || e.length < 0 ? zs.fgui.msgtext.show("配置数据同步失败") : t.pure && zs.platform.proxy ? zs.fgui.msgtext.show("当前处于纯净模式") : t.debug && zs.platform.proxy ? zs.fgui.msgtext.show("当前处于测试模式") : void 0;
            }
        }]);
        return i;
    }();
    i.userInfo = null, i.userId = null, i.entry = null, i.onConfigInit = null, i.onFGUIBind = null,
        i.onPrepare = null, i.onStart = null, i.overrideWorkflow = null, i.workflow = null,
        i.loadingPage = null, i.nativeLoadingPage = null, e.showMsgBox = function (e) {
            zs.fgui.msgbox.show(e);
        }, e.hideMsgBox = function (e) {
            e && zs.fgui.msgbox.clear(), zs.fgui.msgbox.hide();
        }, e.SaveData = t, e.workflow = s, e.core = i;
}(window.zs = window.zs || {});