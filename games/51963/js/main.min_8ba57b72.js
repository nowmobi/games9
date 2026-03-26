var __reflect = this && this.__reflect || function(t, e, i) {
        t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i
    },
    __extends = this && this.__extends || function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        i.prototype = e.prototype, t.prototype = new i
    },
    __awaiter = this && this.__awaiter || function(t, e, i, n) {
        return new(i || (i = Promise))(function(a, s) {
            function r(t) {
                try {
                    o(n.next(t))
                } catch (e) {
                    s(e)
                }
            }

            function h(t) {
                try {
                    o(n["throw"](t))
                } catch (e) {
                    s(e)
                }
            }

            function o(t) {
                t.done ? a(t.value) : new i(function(e) {
                    e(t.value)
                }).then(r, h)
            }
            o((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        function i(t) {
            return function(e) {
                return n([t, e])
            }
        }

        function n(i) {
            if (a) throw new TypeError("Generator is already executing.");
            for (; o;) try {
                if (a = 1, s && (r = s[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(s, i[1])).done) return r;
                switch (s = 0, r && (i = [0, r.value]), i[0]) {
                    case 0:
                    case 1:
                        r = i;
                        break;
                    case 4:
                        return o.label++, {
                            value: i[1],
                            done: !1
                        };
                    case 5:
                        o.label++, s = i[1], i = [0];
                        continue;
                    case 7:
                        i = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (r = o.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            o = 0;
                            continue
                        }
                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                            o.label = i[1];
                            break
                        }
                        if (6 === i[0] && o.label < r[1]) {
                            o.label = r[1], r = i;
                            break
                        }
                        if (r && o.label < r[2]) {
                            o.label = r[2], o.ops.push(i);
                            break
                        }
                        r[2] && o.ops.pop(), o.trys.pop();
                        continue
                }
                i = e.call(t, o)
            } catch (n) {
                i = [6, n], s = 0
            } finally {
                a = r = 0
            }
            if (5 & i[0]) throw i[1];
            return {
                value: i[0] ? i[1] : void 0,
                done: !0
            }

        }
        var a, s, r, h, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return h = {
            next: i(0),
            "throw": i(1),
            "return": i(2)
        }, "function" == typeof Symbol && (h[Symbol.iterator] = function() {
            return this
        }), h
    },
    GameBegin = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.init(), e
        }
        return __extends(e, t), e.prototype.init = function() {
            this.AddComponent()
        }, e.prototype.AddComponent = function() {
            var t = new egret.TextField;
            t.size = 90, t.textColor = 6617973, t.textAlign = egret.HorizontalAlign.CENTER, t.text = GameData.GAME_NAME, t.width = 750, t.x = GameData.WIDTH / 2 - t.width / 2, t.y = GameData.HEIGHT / 8, this.addChild(t), this.startBtn = new egret.Bitmap, this.startBtn.texture = RES.getRes("startBtn"), this.addChild(this.startBtn), this.startBtn.x = GameData.WIDTH / 2 - this.startBtn.width / 2, this.startBtn.y = GameData.HEIGHT / 2, this.startBtn.touchEnabled = !0, this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.StartBtnHandle, this), this.guideBtn = new egret.Bitmap, this.guideBtn.texture = RES.getRes("guideBtn"), this.addChild(this.guideBtn), this.guideBtn.anchorOffsetX = .5, this.guideBtn.anchorOffsetY = .5, this.guideBtn.scaleX = this.guideBtn.scaleY = 1.55, this.guideBtn.x = GameData.WIDTH / 2 - 90, this.guideBtn.y = this.startBtn.y + 130, this.guideBtn.touchEnabled = !0, this.guideBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFun, this)
        }, e.prototype.StartBtnHandle = function(t) {
            SceneManager.toScene(GameData.GAME_MAIN_UI)
			console.log("rererff")
			if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
        }, e.prototype.touchFun = function(t) {
            window.open("https://vodogame.com/?utm_source=www.gamemonetize.com&utm_medium=MainScene-logo&utm_campaign=game-yummy-link/", "blank");
            
		}, e.prototype.closeGuidePageUI = function(t) {
            this.contains(this._guidePage) && this.removeChild(this._guidePage)
        }, e
    }(egret.Sprite);
__reflect(GameBegin.prototype, "GameBegin");
var Main = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e
    }
    return __extends(e, t), e.prototype.onAddToStage = function(t) {
        egret.lifecycle.addLifecycleListener(function(t) {
            t.onUpdate = function() {}
        }), egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume()
        }, this.runGame()["catch"](function(t) {})
    }, e.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, this.loadResource()];
                    case 1:
                        return t.sent(), SceneManager.getInstance().setStage(this), this.createGameScene(), [2]
                }
            })
        })
    }, e.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 3, , 4]), t = new LoadingUI, this.stage.addChild(t), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return i.sent(), [4, RES.loadGroup("preload", 0, t)];
                    case 2:
                        return i.sent(), this.stage.removeChild(t), [3, 4];
                    case 3:
                        return e = i.sent(), console.error(e), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.createGameScene = function() {
        GameData.WIDTH = this.stage.stageWidth, GameData.HEIGHT = this.stage.stageHeight, this.addChildAt(GameBG.getInstance(), 0), 1334 !== this.stage.stageHeight && (GameBG.getInstance().y = GameData.HEIGHT - 1334), SceneManager.toScene(GameData.GAME_BEGIN_UI)
    }, e
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var Check = function() {
    function t() {
        this.pointArr = [], this.lineList = [], this.mapData = []
    }
    return t.prototype.checkConnect = function(t, e, i) {
        for (this.mapData = t, t = this.pointArr.length - 1; t >= 0; t--) this.pointArr.splice(t, 1);
        return t = !0, this.judgeHorizontal(e, i) ? t : this.judgeVertical(e, i) ? t : this.judgeOneCorner(e, i) ? t : t = this.judgeTwoCorner(e, i)
    }, t.prototype.judgeHorizontal = function(t, e) {
        var i = !0;
        if (t.y != e.y) return !1;
        var n, a = Math.abs(e.x - t.x),
            s = e.x > t.x ? t : e;
        for (n = 1; a > n; n++)
            if (0 != this.mapData[s.x + n][t.y]) {
                i = !1;
                break
            }
        return this.pointArr = [t, e], i
    }, t.prototype.judgeVertical = function(t, e) {
        var i = !0;
        if (t.x != e.x) return !1;
        var n, a = Math.abs(e.y - t.y),
            s = e.y > t.y ? t : e;
        for (n = 1; a > n; n++)
            if (0 != this.mapData[t.x][s.y + n]) {
                i = !1;
                break
            }
        return this.pointArr = [t, e], i
    }, t.prototype.judgeOneCorner = function(t, e) {
        var i = !1,
            n = new egret.Point(e.x, t.y),
            a = new egret.Point(t.x, e.y);
        return 0 == this.mapData[n.x][n.y] ? (i = this.judgeHorizontal(t, n) && this.judgeVertical(e, n), this.pointArr = [t, n, e], i) : (0 == this.mapData[a.x][a.y] && (i = this.judgeHorizontal(e, a) && this.judgeVertical(t, a), this.pointArr = [t, a, e]), i)
    }, t.prototype.judgeTwoCorner = function(t, e) {
        var i, n = !1,
            a = this.SearchLine(t, e);
        if (0 == a.length) return n;
        for (var s = 0; s < a.length; s++)
            if (i = a[s], 1 == i.dir) {
                if (this.judgeVertical(t, i.c) && this.judgeVertical(e, i.d)) {
                    n = !0, this.pointArr = [t, i.c, i.d, e];
                    break
                }
            } else if (0 == i.dir && this.judgeHorizontal(t, i.c) && this.judgeHorizontal(e, i.d)) {
            n = !0, this.pointArr = [t, i.c, i.d, e];
            break
        }
        return n
    }, t.prototype.SearchLine = function(t, e) {
        this.lineList = [];
        var i, n, a;
        for (i = t.x; i >= 0; i--) n = new egret.Point(i, t.y), a = new egret.Point(i, e.y), 0 == this.mapData[i][t.y] && 0 == this.mapData[i][e.y] && this.judgeVertical(n, a) && this.lineList.push(new Line(n, a, 0));
        for (i = t.x; i < GameData._w; i++) n = new egret.Point(i, t.y), a = new egret.Point(i, e.y), 0 == this.mapData[i][t.y] && 0 == this.mapData[i][e.y] && this.judgeVertical(n, a) && this.lineList.push(new Line(n, a, 0));
        for (i = t.x; i >= 0; i--) n = new egret.Point(t.x, i), a = new egret.Point(e.x, i), 0 == this.mapData[t.x][i] && 0 == this.mapData[e.x][i] && this.judgeHorizontal(n, a) && this.lineList.push(new Line(n, a, 1));
        for (i = t.x; i < GameData._h; i++) n = new egret.Point(t.x, i), a = new egret.Point(e.x, i), 0 == this.mapData[t.x][i] && 0 == this.mapData[e.x][i] && this.judgeHorizontal(n, a) && this.lineList.push(new Line(n, a, 1));
        return this.lineList
    }, t
}();
__reflect(Check.prototype, "Check");
var Line = function(t) {
    function e(e, i, n) {
        var a = t.call(this) || this;
        return a.dir = 0, a.c = e, a.d = i, a.dir = n, a
    }
    return __extends(e, t), e
}(egret.Sprite);
__reflect(Line.prototype, "Line");
var PControl = function(t) {
    function e() {
        var i = t.call(this) || this;
        if (i._mapArr = [], i._picArr = [], i._index = 0, i._randomType = 0, i._num = 2, i._checkArr = [], i._delArr = [], e.instance) throw "单例异常";
        return i.init(), i
    }
    return __extends(e, t), e.getInstance = function() {
        return e.instance || (e.instance = new e), e.instance
    }, e.prototype.startGame = function() {
        this.inItMap(), this.createAllPic(), this.setPicPosition()
    }, e.prototype.init = function() {
        for (var t = 0; t < GameData._w; t++) {
            this._mapArr[t] = [];
            for (var e = 0; e < GameData._h; e++) this._mapArr[t][e] = 0
        }
        this._check = new Check
    }, e.prototype.inItMap = function() {
        for (var t = 0, e = function() {
                return Math.random() > Math.min(GameData._probability, 1)
            }, i = function(t, e) {
                return 0 == e || e == GameData._w - 1 || 0 == t || t == GameData._h - 1
            }, n = 0; n < GameData._w; n++)
            for (var a = 0; a < GameData._h; a++) this._mapArr[n][a] = i(a, n) ? 0 : e() ? 0 : 1, 1 == this._mapArr[n][a] && t++;
        this._mapArr;
        if (t % 2 != 0)
            for (var n = 0; n < GameData._w; n++)
                for (var a = 0; a < GameData._h; a++)
                    if (1 == this._mapArr[n][a]) return this._mapArr[n][a] = 0, void t--;
        this._mapArr
    }, e.prototype.createAllPic = function() {
        for (var t = 0; t < GameData._w; t++)
            for (var e = 0; e < GameData._h; e++) this._mapArr[t][e] && this.createPic()
    }, e.prototype.createPic = function() {
        if (0 == GameData._typeArr.length)
            for (var t = 1; t <= GameData._type; t++) GameData._typeArr.push(t);
        2 == this._num && (this._num = 0, this._index = Math.floor(GameData._typeArr.length * Math.random()), this._randomType = GameData._typeArr[this._index], GameData._typeArr.splice(this._index, 1)), this._pic = new Pic(this._randomType), this._pic.touchChildren = !1, this._pic.touchEnabled = !0, this._pic.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.picTouch, this), this._num++, this.addChild(this._pic), this._picArr.push(this._pic)
    }, e.prototype.setPicPosition = function() {
        var t = [];
        if (this._picArr.length > 0) {
            t = t.concat(this._picArr), this._picArr = [];
            for (var e = 0; e < GameData._w; e++)
                for (var i = 0; i < GameData._h; i++) this._mapArr[e][i] && (this._index = Math.floor(t.length * Math.random()), this._randomType = t[this._index], t[this._index].setPosition(e, i), this._picArr.push(t[this._index]), t.splice(this._index, 1))
        }
    }, e.prototype.picTouch = function(t) {
        t.target.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.picTouch, this), t.target.showChose(), this._checkArr.push(t.target), 2 == this._checkArr.length && (this._checkArr[0]._type == this._checkArr[1]._type && this._check.checkConnect(this._mapArr, this._checkArr[0]._point, this._checkArr[1]._point) ? (this._mapArr[this._checkArr[0]._w][this._checkArr[0]._h] = 0, this._mapArr[this._checkArr[1]._w][this._checkArr[1]._h] = 0, this._delArr.push(this._checkArr[0], this._checkArr[1]), this._checkArr = [], this.drawLine(), egret.setTimeout(this.delPic, this, 200), GameData._score = Number(GameData._score) + 2, GameData._currentTime += GameData._addTime, GameData._currentTime > GameData._totalTime ? GameData._totalTime : GameData._currentTime, this.upGameLevelAndScore(), 2 >= this._picArr.length && (GameData._gameIng = !1)) : (this._checkArr[0].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.picTouch, this), this._checkArr[0].hideChose(), this._checkArr.splice(0, 1)))
    }, e.prototype.upGameLevelAndScore = function() {
        this.dispatchEvent(new egret.Event(GameEventData.UPDATEGAMELEVELANDSCORE_EVENT))
    }, e.prototype.drawLine = function() {
        this._line || (this._line = new egret.Sprite, this.addChild(this._line)), this._line.graphics.clear(), this._line.graphics.lineStyle(6, 16742231);
        for (var t = 0; t < this._check.pointArr.length; t++) 0 == t ? this._line.graphics.moveTo(GameData._pWidth / 2 + GameData._startX + this._check.pointArr[t].x * GameData._pWidth, GameData._pHeight / 2 + GameData._startY + this._check.pointArr[t].y * GameData._pHeight) : this._line.graphics.lineTo(GameData._pWidth / 2 + GameData._startX + this._check.pointArr[t].x * GameData._pWidth, GameData._pHeight / 2 + GameData._startY + this._check.pointArr[t].y * GameData._pHeight)
    }, e.prototype.delPic = function() {
        this._line.graphics.clear();
        for (var t = this._delArr.length - 1; t >= 0; t--) this.removePic(this._delArr[t]);
        this._delArr = [], this._picArr.length > 0 && egret.setTimeout(this.restPic, this, 800), 0 >= this._picArr.length && (GameData._level < GameData._totalLevel ? (GameData._isPassGame = !1, e.getInstance().removeAll(), SceneManager.getInstance().switchGameTipUI(GameData.MESSAGE_NAME_ARRAY[1])) : (GameData._isPassGame = !0, e.getInstance().removeAll(), SceneManager.toScene(GameData.GAME_END_UI)))
    }, e.prototype.removePic = function(t) {
        for (var e = this._picArr.length - 1; e >= 0; e--)
            if (t == this._picArr[e]) {
                this.removeChild(t), this._picArr[e] = null, this._picArr.splice(e, 1);
                break
            }
    }, e.prototype.removeAll = function() {
        for (var t = this._picArr.length - 1; t >= 0; t--) this._picArr[t].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.picTouch, this), this.removeChild(this._picArr[t]), this._picArr[t] = null;
        this._picArr = [], this._num = 2, this._delArr = [], this._line && (this.removeChild(this._line), this._line = null)
    }, e.prototype.restPic = function() {
        var t = !1,
            e = 0;
        for (e = 0; e < this._picArr.length; e++) {
            for (var i = 0; i < this._picArr.length; i++)
                if (this._picArr[e] != this._picArr[i] && this._picArr[e]._type == this._picArr[i]._type && this._check.checkConnect(this._mapArr, this._picArr[e]._point, this._picArr[i]._point)) {
                    t = !0;
                    break
                }
            if (t) break
        }
        t || (this.setPicPosition(), this._picArr.length > 0 && this.restPic())
    }, e.prototype.showTip = function() {
        for (var t = !1, e = 0; e < this._picArr.length; e++) this._picArr[e].hideChose();
        for (e = 0; e < this._picArr.length; e++) {
            for (var i = 0; i < this._picArr.length; i++)
                if (this._picArr[e] != this._picArr[i] && this._picArr[e]._type == this._picArr[i]._type && this._check.checkConnect(this._mapArr, this._picArr[e]._point, this._picArr[i]._point)) {
                    this._picArr[e].showChose(), this._picArr[i].showChose(), t = !0;
                    break
                }
            if (t) break
        }
        0 == t && (this.setPicPosition(), this.showTip())
    }, e.prototype.resetGame = function() {
        for (var t = 0; t < this._picArr.length; t++) this._picArr[t].hideChose();
        this.setPicPosition()
    }, e
}(egret.Sprite);
__reflect(PControl.prototype, "PControl");
var Pic = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.hideChose = function() {
            this._maskBg && (this._maskBg.visible = !1)
        }, i.removeDisplay = function() {
            this._bg && (this.removeChild(this._bg), this._bg = null), this._maskBg && (this.removeChild(this._maskBg), this._maskBg = null)
        }, i._type = i._h = i._w = 0, i._type = e, i._bg = new egret.Bitmap, e = RES.getRes("icon_json." + String("icon" + e)), i._bg.texture = e, i.addChild(i._bg), i._bg.width = i._bg.height = 110, i
    }
    return __extends(e, t), e.prototype.setPosition = function(t, e) {
        this.x = GameData._startX + t * GameData._pWidth, this.y = GameData._startY + e * GameData._pHeight, this._w = t, this._h = e, this._point = new egret.Point(t, e)
    }, e.prototype.showChose = function() {
        if (!this._maskBg) {
            this._maskBg = new egret.Bitmap;
            var t = RES.getRes("selected");
            this._maskBg.texture = t, this.addChild(this._maskBg), this._maskBg.scaleX = 1, this._maskBg.scaleY = .95, this._maskBg.x = -6, this._maskBg.y = -18
        }
        this._maskBg.visible = !0
    }, e
}(egret.Sprite);
__reflect(Pic.prototype, "Pic");
var GameData = function() {
    function t() {}
    return t._level = 1, t._currentTime = 0, t._totalTime = 200, t._score = 0, t._w = 8, t._h = 9, t._startX = -83, t._startY = 270, t._pWidth = 115, t._pHeight = 115, t._type = 5, t._typeTotal = 15, t._typeArr = [], t._addTime = 5, t._totalLevel = 50, t._isPassGame = !1, t._pause = !1, t._times = 5, t._resttimes = 5, t._gameIng = !1, t.WIDTH = 750, t.HEIGHT = 1334, t.isFirst = 0, t.RESTFUNBTN_TIME = 1500, t.GAME_NAME = "YUMMY LINK", t._probability = .5, t.GAME_BEGIN_UI = "1", t.GAME_MAIN_UI = "2", t.GAME_END_UI = "3", t.MESSAGE_NAME_ARRAY = ["pause", "next", "home"], t.MESSAGE_TITLE_ARRAY = ["paused", "You win!", "MENU"], t.MESSAGE_CONT_ARRAY = ["", "Congratulations", "Do you want to quit the game?"], t
}();
__reflect(GameData.prototype, "GameData");
var GameEventData = function() {
    function t() {}
    return t.STARTBTN_EVENT = "startbtn_event", t.BACKHOMEBTN_EVENT = "backhomebtn_event", t.GUIDEPAGECLOSE_EVENT = "guidepageclose_event", t.TIPUICONTINUEBTN_EVENT = "tipuicontinuebtn_event", t.TIPUINEXTLEVELBTN_EVENT = "tipuinextlevelbtn_event", t.UPDATEGAMELEVELANDSCORE_EVENT = "updategamelevelandscore_event", t
}();
__reflect(GameEventData.prototype, "GameEventData");
var SceneManager = function() {
    function t() {
        if (this._scence = "", t.instance) throw "单例异常";
        this.addMaskAndBG()
    }
    return t.getInstance = function() {
        return t.instance || (this.instance = new t), t.instance
    }, t.prototype.addMaskAndBG = function() {
        this.img_stageMask = new egret.Sprite, this.img_stageMask.graphics.beginFill(1709368, 1), this.img_stageMask.graphics.drawRect(0, 0, 750, 1334), this.img_stageMask.graphics.endFill()
    }, t.prototype.setStage = function(t) {
        this._stage = t
    }, t.toScene = function(e) {
        t.getInstance()._scence = e, t.instance.startGame(), t.instance._stage.addChild(TipUI.getInstance()), TipUI.getInstance().visible = !1
    }, t.prototype.startGame = function() {
        switch (t.instance._stage.contains(this.cutScence) && t.instance._stage.removeChild(this.cutScence), t.getInstance()._scence) {
            case GameData.GAME_BEGIN_UI:
                this.cutScence = new GameBegin;
                break;
            case GameData.GAME_MAIN_UI:
                this.cutScence = new GameMain;
                break;
            case GameData.GAME_END_UI:
                this.cutScence = new GameEnd
        }
        t.getInstance()._stage.addChild(this.img_stageMask);
        var e = GameData.HEIGHT;
        e > 1334 ? this.cutScence.y = (e - 1334) / 2 : 1334 > e && (this.cutScence.y = e - 1334), this.img_stageMask.y = this.cutScence.y, this.cutScence.mask = this.img_stageMask, this.cutScence.parent || t.instance._stage.addChild(this.cutScence)
    }, t.prototype.switchGameTipUI = function(t) {
        var e = this;
        TipUI.getInstance().visible = !0, TipUI.getInstance().switchGameBtnTipUI(t), t == GameData.MESSAGE_NAME_ARRAY[1] ? this.cutScence.stopGameTime() : null, TipUI.getInstance().addEventListener(GameEventData.TIPUICONTINUEBTN_EVENT, function() {
            e.cutScence.continueGame(), TipUI.getInstance().visible = !1
        }, this), TipUI.getInstance().addEventListener(GameEventData.TIPUINEXTLEVELBTN_EVENT, function() {}, this)
    }, t
}();
__reflect(SceneManager.prototype, "SceneManager");
var GameEnd = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.init(), e
    }
    return __extends(e, t), e.prototype.init = function() {
        this.AddComponent()
    }, e.prototype.AddComponent = function() {
        var t = new egret.TextField;
        t.size = 80, GameData._isPassGame ? t.text = "Game Cleared" : t.text = "Game Over", t.textAlign = egret.HorizontalAlign.CENTER, t.textColor = 9917973, t.width = 750, t.x = GameData.WIDTH / 2 - t.width / 2, t.y = GameData.HEIGHT / 4, this.addChild(t), this._scoreTxt = new egret.TextField, this._scoreTxt.size = 40, this._scoreTxt.textColor = 9917973, this._scoreTxt.width = 750, this._scoreTxt.textAlign = egret.HorizontalAlign.CENTER, this._scoreTxt.x = GameData.WIDTH / 2 - this._scoreTxt.width / 2, this._scoreTxt.y = t.y + 120, this.addChild(this._scoreTxt), this._scoreTxt.text = "score: " + GameData._score.toString() + "  level:" + GameData._level, this._Btn = new egret.Bitmap, this._Btn.texture = RES.getRes("contiueBtn"), this.addChild(this._Btn), this._Btn.x = GameData.WIDTH / 2 - this._Btn.width / 2, this._Btn.y = this._scoreTxt.y + 120, this._Btn.touchEnabled = !0, this._Btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClickHandle, this)

    }, e.prototype.btnClickHandle = function(t) {
        SceneManager.toScene(GameData.GAME_BEGIN_UI)
    }, e
}(egret.Sprite);
__reflect(GameEnd.prototype, "GameEnd");
var GameMain = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._p = 0, e._lt = 0, e._ct = 0, e.btnY = 200, e.txtY = 120, e.init(), e
    }
    return __extends(e, t), e.prototype.init = function() {
        this.AddComponent(), this.addChild(PControl.getInstance()), this.startGame()
    }, e.prototype.AddComponent = function() {
        this._levelText = new egret.TextField, this._levelText.size = 30, this._levelText.textColor = 9917973, this._levelText.x = 200, this._levelText.y = this.txtY, this.addChild(this._levelText);
        var t = new egret.Bitmap;
        t.texture = RES.getRes("daojishi"), this.addChild(t), t.x = GameData.WIDTH / 2 - t.width / 2, t.y = 54;
        var e = new egret.Bitmap;
        e.texture = RES.getRes("countdown"), this.addChild(e), e.x = GameData.WIDTH / 2 - e.width / 2, e.y = 50.5, this.loading = new egret.Bitmap, this.loading.texture = RES.getRes("countdown"), this.addChild(this.loading), this.loading.mask = e, this.loading.dx = GameData.WIDTH / 2 - this.loading.width / 2, this.loading.x = GameData.WIDTH / 2 - this.loading.width / 2, this.loading.y = 50.5, this._date = new Date, this._lt = this._ct = this._date.getTime(), this._scoreText = new egret.TextField, this._scoreText.size = 30, this._scoreText.textColor = 9917973, this._scoreText.x = 450, this._scoreText.y = this.txtY, this.addChild(this._scoreText), this._pauseText = new egret.Bitmap, this._pauseText.texture = RES.getRes("pauseBtn"), this.addChild(this._pauseText), this._pauseText.x = 150, this._pauseText.y = this.btnY, this._pauseText.touchEnabled = !0, this._pauseText.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pauseGameHandle, this), this._tipText = new egret.Bitmap, this._tipText.texture = RES.getRes("pointOutBtn"), this.addChild(this._tipText), this._tipText.x = 490, this._tipText.y = this.btnY, this.addChild(this._tipText), this._tipText.touchEnabled = !0, this._tipText.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showTipHandle, this);
        var i = new egret.Bitmap;
        this.addChild(i), i.texture = RES.getRes("numTime"), i.x = this._tipText.x + i.width, i.y = this._tipText.y - i.height, this.tipTxt = new egret.TextField, this.addChild(this.tipTxt), this.tipTxt.size = 25, this.tipTxt.y = i.y + 5, this.tipTxt.x = i.x, this.tipTxt.textColor = 16777215, this.tipTxt.textAlign = "center", this.tipTxt.width = i.width, this.tipTxt.text = String(GameData._times), this._chongzhiButton = new egret.Bitmap, this._chongzhiButton.texture = RES.getRes("resetBtn"), this.addChild(this._chongzhiButton), this._chongzhiButton.x = 320, this._chongzhiButton.y = this.btnY, this._chongzhiButton.touchEnabled = !0, this._chongzhiButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.passTouchchongzhiButtonHandle, this);
        var n = new egret.Bitmap;
        this.addChild(n), n.texture = RES.getRes("numTime"), n.x = this._chongzhiButton.x + n.width, n.y = this._chongzhiButton.y - n.height, this.restTxt = new egret.TextField, this.addChild(this.restTxt), this.restTxt.size = 25, this.restTxt.y = n.y + 5, this.restTxt.x = n.x, this.restTxt.textColor = 16777215, this.restTxt.textAlign = "center", this.restTxt.width = n.width, this.restTxt.text = String(GameData._resttimes), this.backBtn = new egret.Bitmap, this.backBtn.texture = RES.getRes("backBtn"), this.addChild(this.backBtn), this.backBtn.x = 30, this.backBtn.y = 30, this.backBtn.touchEnabled = !0, this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFunbackBtnHandle, this)
    }, e.prototype.touchFunbackBtnHandle = function(t) {
        this.pauseGame(), SceneManager.getInstance().switchGameTipUI(GameData.MESSAGE_NAME_ARRAY[2])
    }, e.prototype.passTouchchongzhiButtonHandle = function(t) {
        var e = this;
        this._chongzhiButton.touchEnabled = !1, setTimeout(function() {
            e._chongzhiButton.touchEnabled = !0
        }, GameData.RESTFUNBTN_TIME), 0 < GameData._resttimes && 0 == GameData._pause && GameData._gameIng && (GameData._resttimes--, this.upDateTimes(), PControl.getInstance().resetGame())
    }, e.prototype.pauseGameHandle = function(t) {
        this.pauseGame(), SceneManager.getInstance().switchGameTipUI(GameData.MESSAGE_NAME_ARRAY[0])
    }, e.prototype.showTipHandle = function(t) {
        var e = this;
        this._tipText.touchEnabled = !1, setTimeout(function() {
            e._tipText.touchEnabled = !0
        }, GameData.RESTFUNBTN_TIME), 0 < GameData._times && 0 == GameData._pause && GameData._gameIng && (GameData._times--, this.upDateTimes(), PControl.getInstance().showTip())
    }, e.prototype.upDateTimes = function() {
        this.tipTxt.text = String(GameData._times), this.restTxt.text = String(GameData._resttimes)
    }, e.prototype.upDateLevel = function() {
        this._levelText.text = "level " + String(GameData._level)
    }, e.prototype.upDateTime = function() {
        GameData._currentTime > GameData._totalTime && (GameData._currentTime = GameData._totalTime), this._p = GameData._currentTime / GameData._totalTime, 0 >= this._p && (this._p = 0, this.stopTime(), this.timeOver()), this.loading.x = this.loading.dx - (1 - this._p) * this.loading.width
    }, e.prototype.upDateScore = function() {
        this._scoreText.text = "score " + GameData._score.toString()
    }, e.prototype.startTime = function() {
        GameData._currentTime = GameData._totalTime, this.upDateTime(), this.addEventListener(egret.Event.ENTER_FRAME, this.frameIng, this)
    }, e.prototype.continueTime = function() {
        this.addEventListener(egret.Event.ENTER_FRAME, this.frameIng, this)
    }, e.prototype.stopTime = function() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.frameIng, this)
    }, e.prototype.frameIng = function(t) {
        this._date = new Date, this._ct = this._date.getTime(), 200 < this._ct - this._lt && (GameData._currentTime--, this.upDateTime(), this._lt = this._ct)
    }, e.prototype.startGame = function() {
        PControl.getInstance().removeAll(), PControl.getInstance().addEventListener(GameEventData.UPDATEGAMELEVELANDSCORE_EVENT, this.updateLevelAndScore, this), this.nextLevel(0)
    }, e.prototype.pauseGame = function() {
        GameData._pause = !0, this.stopTime()
    }, e.prototype.timeOver = function() {
        SceneManager.toScene(GameData.GAME_END_UI), PControl.getInstance().removeAll(), GameData._gameIng = !1
        console.log("lose")
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
        }
    }, e.prototype.updateLevelAndScore = function() {
        this.upDateScore(), this.upDateLevel()

    }, e.prototype.continueGame = function() {
        GameData._pause = !1, this.continueTime()
        console.log("con")
    }, e.prototype.nextLevel = function(t) {
        PControl.getInstance().removeAll(), 0 != t && (GameData._level++, GameData._probability >= 1 ? 1 : GameData._probability += .1), GameData._type >= GameData._typeTotal ? GameData._typeTotal : GameData._type++, this.upDateLevel(), this.startTime(), this.upDateTimes(), this.upDateScore(), PControl.getInstance().startGame(), GameData._gameIng = !0
        console.log("next")
    }, e.prototype.stopGameTime = function() {
        this.stopTime()
    }, e

}(egret.Sprite);
__reflect(GameMain.prototype, "GameMain");
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.createView(), e

    }
    return __extends(e, t), e.prototype.createView = function() {
        this.textField = new egret.TextField, this.addChild(this.textField), this.textField.y = 300, this.textField.width = GameData.WIDTH, this.textField.height = 100, this.textField.textAlign = "center"
    }, e.prototype.onProgress = function(t, e) {
        this.textField.text = "Loading..." + t + "/" + e
    }, e
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var DebugPlatform = function() {
    function t() {}
    return t.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }, t.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, t
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new DebugPlatform);
var MyConsole = function() {
    function t() {}
    return t.lg = function(t) {}, t
}();
__reflect(MyConsole.prototype, "MyConsole");
var GameBG = function(t) {
    function e() {
        var i = t.call(this) || this;
        if (e.instance) throw "单例异常！";
        return i.init(), i
    }
    return __extends(e, t), e.getInstance = function() {
        return e.instance || (e.instance = new e), e.instance
    }, e.prototype.init = function() {
        this.$gameBg = new egret.Bitmap, this.$gameBg.texture = RES.getRes("gamebg-1_png"), this.addChild(this.$gameBg), this.$gameBg.x = 0, this.$gameBg.y = 0
    }, e
}(egret.Sprite);
__reflect(GameBG.prototype, "GameBG");
var GuidePage = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.touchNum = 1, e.init(), e
    }
    return __extends(e, t), e.prototype.init = function() {
        var t = new egret.Sprite;
        this.addChild(t), t.graphics.beginFill(0, .7), t.graphics.drawRect(0, 0, GameData.WIDTH, GameData.HEIGHT), t.graphics.endFill(), 1334 !== GameData.HEIGHT && (t.y = 1334 - GameData.HEIGHT), this.guidePage = new egret.Bitmap, this.guidePage.texture = RES.getRes("y4"), this.addChild(this.guidePage), this.guidePage.x = t.width / 2 - this.guidePage.width / 2, this.guidePage.y = 250, this.certainBtn = new egret.Bitmap, this.certainBtn.texture = RES.getRes("certainBtn"), this.addChild(this.certainBtn), this.certainBtn.x = t.width / 2 - this.certainBtn.width / 2, this.certainBtn.y = 920, this.closeBtn = new egret.Bitmap, this.closeBtn.texture = RES.getRes("closeBtn"), this.addChild(this.closeBtn), this.closeBtn.x = 630, this.closeBtn.y = 220, this.guidePage.texture = RES.getRes("y1"), this.certainBtn.visible = !1, this.guidePage.touchEnabled = !0, this.guidePage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFunGuide, this), this.closeBtn.touchEnabled = !0, this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchCloseFun, this), this.certainBtn.touchEnabled = !0, this.certainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchCloseFun, this), this.touchEnabled = !0
    }, e.prototype.touchFunGuide = function(t) {
        this.touchNum++ >= 4 ? 4 : this.touchNum, this.guidePage.texture = RES.getRes("y" + this.touchNum), 4 == this.touchNum && (this.guidePage.touchEnabled = !1, this.certainBtn.visible = !0, this.certainBtn.touchEnabled = !0)
    }, e.prototype.touchCloseFun = function(t) {
        this.touchNum = 1, this.guidePage.touchEnabled = !0, this.certainBtn.visible = !1, this.guidePage.texture = RES.getRes("y1"), this.dispatchEvent(new egret.Event(GameEventData.GUIDEPAGECLOSE_EVENT))
    }, e
}(egret.Sprite);
__reflect(GuidePage.prototype, "GuidePage");
var TipUI = function(t) {
    function e() {
        var i = t.call(this) || this;
        if (e.instance) throw "单例异常";
        return i.init(), i
    }
    return __extends(e, t), e.getInstance = function() {
        return e.instance || (e.instance = new e), e.instance
    }, e.prototype.init = function() {
        var t = new egret.Sprite;
        this.addChild(t), t.graphics.beginFill(0, .7), t.graphics.drawRect(0, 0, GameData.WIDTH, GameData.HEIGHT), t.graphics.endFill(), 1334 !== GameData.HEIGHT && (t.y = 1334 - GameData.HEIGHT), this._bg = new egret.Bitmap, this.addChild(this._bg), this._bg.texture = RES.getRes("tip_png"), this._bg.x = 0, this._bg.y = 0, this._msgTitleText = new egret.TextField, this._msgTitleText.size = 48, this._msgTitleText.textColor = 16777215, this._msgTitleText.textAlign = egret.HorizontalAlign.CENTER, this._msgTitleText.text = GameData.MESSAGE_TITLE_ARRAY[0], this._msgTitleText.x = 285, this._msgTitleText.y = 180, this.addChild(this._msgTitleText), this._msgText = new egret.TextField, this._msgText.size = 42, this._msgText.width = 580, this._msgText.border = !1, this._msgText.borderColor = 0, this._msgText.textColor = 9917973, this._msgText.textAlign = egret.HorizontalAlign.CENTER, this._msgText.text = GameData.MESSAGE_CONT_ARRAY[0], this._msgText.x = 85, this._msgText.y = 450, this.addChild(this._msgText), this._certainBtn = new egret.Bitmap, this.addChild(this._certainBtn), this._certainBtn.texture = RES.getRes("certainBtn"), this._certainBtn.x = GameData.WIDTH / 2 - this._certainBtn.width / 2, this._certainBtn.y = GameData.HEIGHT / 2, this._certainBtn.touchEnabled = !0, this._certainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.certainBtnClickHome, this), this._nextLevelBtn = new egret.Bitmap, this.addChild(this._nextLevelBtn), this._nextLevelBtn.texture = RES.getRes("nextlevelBtn"), this._nextLevelBtn.x = this._certainBtn.x, this._nextLevelBtn.y = this._certainBtn.y, this._nextLevelBtn.touchEnabled = !0, this._nextLevelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextLevelBtnHandle, this), this._contiueBtn = new egret.Bitmap, this.addChild(this._contiueBtn), this._contiueBtn.texture = RES.getRes("contiueBtn"), this._contiueBtn.x = this._certainBtn.x, this._contiueBtn.y = this._certainBtn.y, this._contiueBtn.touchEnabled = !0, this._contiueBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.contiueBtnHandle, this)
        console.log("waw")
        
    }, e.prototype.certainBtnClickHome = function(t) {
        SceneManager.toScene(GameData.GAME_BEGIN_UI)
    }, e.prototype.nextLevelBtnHandle = function(t) {
        e.getInstance().visible = !1, SceneManager.instance.cutScence.nextLevel(1)
        console.log("dsdsds")
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
        }
    }, e.prototype.contiueBtnHandle = function(t) {
        this.dispatchEvent(new egret.Event(GameEventData.TIPUICONTINUEBTN_EVENT))
    }, e.prototype.switchTipBtn = function(t) {
        switch (void 0 === t && (t = GameData.MESSAGE_NAME_ARRAY[0]), t) {
            case GameData.MESSAGE_NAME_ARRAY[0]:
                this._msgText.text = GameData.MESSAGE_CONT_ARRAY[0], this._msgTitleText.text = GameData.MESSAGE_TITLE_ARRAY[0], this._contiueBtn.visible = !0, this._contiueBtn.touchEnabled = !0, this._certainBtn.visible = !1, this._certainBtn.touchEnabled = !1, this._nextLevelBtn.visible = !1, this._nextLevelBtn.touchEnabled = !1;
                break;
            case GameData.MESSAGE_NAME_ARRAY[1]:
                this._msgText.text = GameData.MESSAGE_CONT_ARRAY[1], this._msgTitleText.text = GameData.MESSAGE_TITLE_ARRAY[1], this._contiueBtn.visible = !1, this._contiueBtn.touchEnabled = !1, this._certainBtn.visible = !1, this._certainBtn.touchEnabled = !1, this._nextLevelBtn.visible = !0, this._nextLevelBtn.touchEnabled = !0;
                break;
            case GameData.MESSAGE_NAME_ARRAY[2]:
                this._msgText.text = GameData.MESSAGE_CONT_ARRAY[2], this._msgTitleText.text = GameData.MESSAGE_TITLE_ARRAY[2], this._contiueBtn.visible = !1, this._contiueBtn.touchEnabled = !1, this._certainBtn.visible = !0, this._certainBtn.touchEnabled = !0, this._nextLevelBtn.visible = !1, this._nextLevelBtn.touchEnabled = !1
        }
		
    }, e.prototype.switchGameBtnTipUI = function(t) {
        this.switchTipBtn(t)
		console.log("popiing")
    }, e
}(egret.Sprite);
__reflect(TipUI.prototype, "TipUI");