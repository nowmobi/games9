window.__require = (function t(e, o, n) {
  function i(r, s) {
    if (!o[r]) {
      if (!e[r]) {
        var c = r.split("/");
        if (((c = c[c.length - 1]), !e[c])) {
          var l = "function" == typeof __require && __require;
          if (!s && l) return l(c, !0);
          if (a) return a(c, !0);
          throw new Error("Cannot find module '" + r + "'");
        }
        r = c;
      }
      var u = (o[r] = { exports: {} });
      e[r][0].call(
        u.exports,
        function (t) {
          return i(e[r][1][t] || t);
        },
        u,
        u.exports,
        t,
        e,
        o,
        n
      );
    }
    return o[r].exports;
  }
  for (
    var a = "function" == typeof __require && __require, r = 0;
    r < n.length;
    r++
  )
    i(n[r]);
  return i;
})(
  {
    GameData: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fe9da2D4a9C8aaZcUfyH+6F", "GameData");
        var n =
          (this && this.__decorate) ||
          function (t, e, o, n) {
            var i,
              a = arguments.length,
              r =
                a < 3
                  ? e
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(e, o))
                  : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              r = Reflect.decorate(t, e, o, n);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (i = t[s]) &&
                  (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
            return a > 3 && r && Object.defineProperty(e, o, r), r;
          };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var i,
          a = t("./PlatformCont"),
          r = cc._decorator,
          s = r.ccclass;
        r.property;
        (o.AssetUrl = {
          water: "./other/water",
          stageLevel: "./prbLevel/levelPrb",
        }),
          (function (t) {
            (t[(t.none = 0)] = "none"),
              (t[(t.water = 1)] = "water"),
              (t[(t.magma = 2)] = "magma");
          })(o.FulidType || (o.FulidType = {})),
          (function (t) {
            (t[(t.none = 0)] = "none"),
              (t[(t.jewel = 1)] = "jewel"),
              (t[(t.coin = 2)] = "coin"),
              (t[(t.chest = 3)] = "chest"),
              (t[(t.keylevel = 4)] = "keylevel"),
              (t[(t.rock = 5)] = "rock"),
              (t[(t.clothes = 6)] = "clothes"),
              (t[(t.weapon = 7)] = "weapon"),
              (t[(t.collection = 8)] = "collection"),
              (t[(t.quiver = 9)] = "quiver");
          })(o.GameGoods || (o.GameGoods = {})),
          (function (t) {
            (t[(t.none = 0)] = "none"),
              (t[(t.getTips = 1)] = "getTips"),
              (t[(t.getMoneyFive = 2)] = "getMoneyFive"),
              (t[(t.passGame = 3)] = "passGame");
          })((i = o.GameReward || (o.GameReward = {}))),
          (o.ViewName = {
            loading: "Loading",
            home: "HomeGame",
            main: "MainGame",
          }),
          (o.StorageKeys = { player: "bendi" });
        var c = (function () {
          function t() {}
          return (
            (t.getChatGoodStatus = function (t) {
              var e = this.playerData.goodInfo[t];
              return e || (e = this.playerData.goodInfo[t] = [-1, -1, -1]), e;
            }),
            (t.setChatGoodStatus = function (t, e) {
              this.playerData.goodInfo[t] ||
                (this.playerData.goodInfo[t] = [-1, -1, -1]),
                1 != this.playerData.goodInfo[t][e] &&
                  ((this.playerData.goodInfo[t][e] = 1), this.savePlayerData());
            }),
            (t.getLevelStatus = function (t) {
              return t < this.playerData.currLevelIndex;
            }),
            (t.checkIsCurrLevel = function (t) {
              return this.playerData.currLevelIndex == t;
            }),
            (t.ToNextLevel = function () {
              this.currLevel++,
                (this.isTipsMode = !1),
                this.currLevel <= this.playerData.currLevelIndex ||
                  (this.currLevel > this.levelMax - 1 &&
                    (this.currLevel = this.levelMax - 1),
                  this.currLevel > this.playerData.currLevelIndex &&
                    ((this.playerData.currLevelIndex = this.currLevel),
                    this.savePlayerData()),
                  cc.log("\u4e0b\u4e00\u5173", this.currLevel));
            }),
            (t.savePlayerData = function () {
              cc.log("\u4fdd\u5b58\u6570\u636e\u5230\u672c\u5730"),
                a.default.setItemStorage(o.StorageKeys.player, this.playerData);
            }),
            (t.getPlayerdata = function (t) {
              var e = a.default.getItemStorage(
                o.StorageKeys.player,
                this.playerData
              ).key;
              null != e && (this.playerData = e),
                this.playerData.currLevelIndex >= this.levelMax &&
                  (this.playerData.currLevelIndex = this.levelMax - 1),
                t();
            }),
            (t.currLevel = 0),
            (t.levelMax = 36),
            (t.gameCost = -100),
            (t.isTipsMode = !1),
            (t.rewardStatus = i.none),
            (t.MainHome = null),
            (t.playerData = {
              currLevelIndex: 0,
              money: 100,
              goodInfo: [[-1, -1, -1]],
              isNewPlayer: !0,
              musicStatus: !0,
              soundStatus: !0,
            }),
            (t.chapterInfo = [
              {
                nameChat: "Chapter 1",
                arrItemPos: [
                  [-126, 131],
                  [60, 131],
                  [234.724, 96],
                  [133, -9],
                  [-50, -9],
                  [-235, -49],
                  [-144, -155],
                  [40, -155],
                  [212, -155],
                ],
              },
              {
                nameChat: "Chapter 2",
                arrItemPos: [
                  [-183, 165],
                  [-19, 165],
                  [145, 165],
                  [145, -1],
                  [-19, -1],
                  [-183, -1],
                  [-183, -165],
                  [-19, -165],
                  [145, -165],
                ],
              },
              {
                nameChat: "Chapter 3",
                arrItemPos: [
                  [-150, 143],
                  [44, 143],
                  [219, 112],
                  [133, 0],
                  [-50, 0],
                  [-227, -40],
                  [-144, -147],
                  [40, -147],
                  [212, -147],
                ],
              },
              {
                nameChat: "Chapter 4",
                arrItemPos: [
                  [-150, 143],
                  [44, 143],
                  [219, 112],
                  [133, 0],
                  [-50, 0],
                  [-227, -40],
                  [-144, -147],
                  [40, -147],
                  [212, -147],
                ],
              },
            ]),
            (t = n([s], t))
          );
        })();
        (o.default = c), cc._RF.pop();
      },
      { "./PlatformCont": "PlatformCont" },
    ],
    GameOverView: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "73393HWS3dHzLxoBMV0Us+1", "GameOverView");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../common/SoundManager"),
          r = t("../GameData"),
          s = t("../GlobalManager"),
          c = t("../PlatformCont"),
          l = t("./GamingManager"),
          u = cc._decorator,
          d = u.ccclass,
          p = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.viewSuccess = null),
                (e.unlockLab = null),
                (e.btnNextL = null),
                (e.btnGetFive = null),
                (e.btnShare = null),
                (e.getNumLab = null),
                (e.viewFail = null),
                (e.btnAgain = null),
                (e.btnGetTips = null),
                (e.btnNotTip = null),
                (e.btnPass = null),
                (e.barBountdown = null),
                (e.bountdownLab = null),
                (e.banner = null),
                (e.barEff = null),
                (e.labEff = null),
                (e.numbountdown = 5),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.resetView = function () {
                this.barEff && this.barEff.stop(),
                  this.labEff && this.labEff.stop(),
                  this.unscheduleAllCallbacks(),
                  this.btnNextL.targetOff(this),
                  this.btnGetFive.targetOff(this),
                  this.btnShare.targetOff(this),
                  this.btnAgain.targetOff(this),
                  this.btnGetTips.targetOff(this),
                  this.btnNotTip.targetOff(this),
                  this.btnPass.targetOff(this),
                  this.btnGetFive.stopAllActions();
              }),
              (e.prototype.againGame = function () {
                var t = this;
                YYGGamesUtil.showChapingAD(function () {
                  t.node.children.forEach(function (t) {
                    t.pauseSystemEvents(!0);
                  }),
                    s.default.ins.toolPersist.updateMoney(
                      r.default.gameCost,
                      t.btnAgain.getPosition(),
                      function (e) {
                        t.node.children.forEach(function (t) {
                          t.resumeSystemEvents(!0);
                        }),
                          e &&
                            (l.default.inst.resetGame(),
                            cc.director.loadScene(r.ViewName.main),
                            s.default.ins.toolPersist.showHideItemMony(!1));
                      },
                      t
                    );
                });
              }),
              (e.prototype.enterNext = function () {
                var t = this;
                YYGGamesUtil.showChapingAD(function () {
                  t.node.children.forEach(function (t) {
                    t.pauseSystemEvents(!0);
                  }),
                    s.default.ins.toolPersist.updateMoney(
                      r.default.gameCost,
                      t.btnNextL.getPosition(),
                      function (e) {
                        if (
                          (t.node.children.forEach(function (t) {
                            t.resumeSystemEvents(!0);
                          }),
                          e)
                        ) {
                          if (
                            (l.default.inst.resetGame(),
                            l.default.inst.isEditor)
                          )
                            return void cc.director.loadScene(r.ViewName.main);
                          s.default.ins.loadingShow(),
                            s.default.ins.checkStage(r.default.currLevel),
                            s.default.ins.toolPersist.showHideItemMony(!1),
                            c.default.bannerControl(!1);
                        }
                      },
                      t
                    );
                });
              }),
              (e.prototype.havingGetFive = function () {
                this.btnGetFive.targetOff(this),
                  this.btnGetFive.stopAllActions(),
                  (this.btnGetFive.scale = 1),
                  (this.getNumLab.string = "+250"),
                  (this.btnGetFive.getComponent(cc.Button).interactable = !1),
                  s.default.ins.toolPersist.updateMoney(
                    250,
                    this.btnGetFive.getPosition()
                  );
              }),
              (e.prototype.openView = function (t) {
                var e = this;
                if (
                  ((this.viewSuccess.active = t),
                  (this.viewFail.active = !t),
                  (this.node.active = !0),
                  s.default.ins.toolPersist.showHideItemMony(!0),
                  t)
                ) {
                  this.viewSuccess.scale = 0;
                  var o = 8 - (r.default.currLevel % 9);
                  0 == o
                    ? (this.unlockLab.node.parent.active = !1)
                    : (this.unlockLab.string = o + ""),
                    (this.getNumLab.string = "+50"),
                    cc
                      .tween(this.viewSuccess)
                      .to(0.3, { scale: 1 }, { easing: "backOut" })
                      .call(function () {
                        s.default.ins.toolPersist.updateMoney(
                          50,
                          e.getNumLab.node.parent.getPosition()
                        ),
                          e.addSuccEvent();
                      })
                      .delay(0.5)
                      .call(function () {
                        c.default.recordControl(1);
                      })
                      .start(),
                    cc
                      .tween(this.btnGetFive)
                      .delay(0.3)
                      .repeatForever(
                        cc
                          .tween()
                          .to(0.2, { scale: 1.3 })
                          .to(0.2, { scale: 1.1 })
                          .to(0.2, { scale: 1.3 })
                          .to(0.2, { scale: 1.1 })
                          .to(0.2, { scale: 1.3 })
                          .to(0.2, { scale: 1 })
                          .delay(1)
                      )
                      .start(),
                    l.default.inst.isEditor || r.default.ToNextLevel(),
                    a.default.ins.playSoundEff(a.SoundId.success);
                } else
                  (this.viewFail.scale = 0),
                    (this.btnAgain.scale = this.btnPass.scale = 1),
                    (this.btnGetTips.parent.active = !0),
                    cc
                      .tween(this.viewFail)
                      .to(0.3, { scale: 1 }, { easing: "backOut" })
                      .call(function () {
                        e.addFailEvent();
                      })
                      .start(),
                    cc
                      .tween(this.btnGetTips)
                      .delay(0.3)
                      .repeatForever(
                        cc
                          .tween()
                          .to(0.3, { scale: 1.1 })
                          .to(0.3, { scale: 1 })
                          .delay(1)
                      )
                      .start(),
                    a.default.ins.playSoundEff(a.SoundId.fail);
              }),
              (e.prototype.addFailEvent = function () {
                var t = this;
                this.btnAgain.on(
                  cc.Node.EventType.TOUCH_END,
                  this.againGame,
                  this
                ),
                  this.btnAgain.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  this.btnGetTips.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      YYGGamesUtil.showshipinAD(function () {
                        (r.default.rewardStatus = r.GameReward.getTips),
                          l.default.inst.awardCallback();
                      });
                    },
                    this
                  ),
                  this.btnGetTips.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  this.btnNotTip.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      t.btnGetTips.stopAllActions(),
                        t.labEff.stop(),
                        t.barEff.stop(),
                        t.btnGetTips.targetOff(t),
                        t.btnNotTip.targetOff(t),
                        (t.btnGetTips.parent.active = !1),
                        cc
                          .tween(t.btnAgain)
                          .to(0.3, { scale: 1 }, { easing: "backOut" })
                          .start(),
                        cc
                          .tween(t.btnPass)
                          .to(0.3, { scale: 1 }, { easing: "backOut" })
                          .start();
                    },
                    this
                  ),
                  this.btnNotTip.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  this.btnPass.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      YYGGamesUtil.showshipinAD(function () {
                        (r.default.rewardStatus = r.GameReward.passGame),
                          l.default.inst.awardCallback();
                      });
                    },
                    this
                  ),
                  this.btnPass.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  );
              }),
              (e.prototype.addSuccEvent = function () {
                this.btnNextL.on(
                  cc.Node.EventType.TOUCH_END,
                  this.enterNext,
                  this
                ),
                  this.btnNextL.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  this.btnGetFive.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      YYGGamesUtil.showshipinAD(function () {
                        (r.default.rewardStatus = r.GameReward.getMoneyFive),
                          l.default.inst.awardCallback();
                      });
                    },
                    this
                  ),
                  this.btnGetFive.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  );
              }),
              (e.prototype.onDestroy = function () {}),
              i([p(cc.Node)], e.prototype, "viewSuccess", void 0),
              i([p(cc.Label)], e.prototype, "unlockLab", void 0),
              i([p(cc.Node)], e.prototype, "btnNextL", void 0),
              i([p(cc.Node)], e.prototype, "btnGetFive", void 0),
              i([p(cc.Node)], e.prototype, "btnShare", void 0),
              i([p(cc.Label)], e.prototype, "getNumLab", void 0),
              i([p(cc.Node)], e.prototype, "viewFail", void 0),
              i([p(cc.Node)], e.prototype, "btnAgain", void 0),
              i([p(cc.Node)], e.prototype, "btnGetTips", void 0),
              i([p(cc.Node)], e.prototype, "btnNotTip", void 0),
              i([p(cc.Node)], e.prototype, "btnPass", void 0),
              i([p(cc.Sprite)], e.prototype, "barBountdown", void 0),
              i([p(cc.Label)], e.prototype, "bountdownLab", void 0),
              i([p(cc.Node)], e.prototype, "banner", void 0),
              (e = i([d], e))
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {
        "../GameData": "GameData",
        "../GlobalManager": "GlobalManager",
        "../PlatformCont": "PlatformCont",
        "../common/SoundManager": "SoundManager",
        "./GamingManager": "GamingManager",
      },
    ],
    GamingManager: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "109cdM/SvpILrO7ceBkYnw2", "GamingManager");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a,
          r = t("../common/SoundManager"),
          s = t("../GameData"),
          c = t("../GlobalManager"),
          l = t("../PlatformCont"),
          u = t("./GameOverView"),
          d = t("./prbScr/LevelGood"),
          p = t("./prbScr/LevelKey"),
          h = t("./prbScr/LevelMonster"),
          f = t("./prbScr/LevelPlayer"),
          y = t("./RewardPop"),
          g = t("./StageLevel"),
          v = cc._decorator,
          m = v.ccclass,
          b = v.property;
        (function (t) {
          (t[(t.none = 0)] = "none"),
            (t[(t.start = 1)] = "start"),
            (t[(t.end = 2)] = "end"),
            (t[(t.succes = 3)] = "succes"),
            (t[(t.fail = 4)] = "fail");
        })((a = o.GameStatus || (o.GameStatus = {})));
        var w = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.isEditor = !1),
              (e.currBg = null),
              (e.chapterBgArr = []),
              (e.arrSkindbPrb = []),
              (e.gameCamera = null),
              (e.stageRB = null),
              (e.nameLevel = null),
              (e.handTip = null),
              (e.btnTips = null),
              (e.btnReturn = null),
              (e.viewResult = null),
              (e.popReward = null),
              (e.statusGame = a.none),
              (e.currLevelStage = null),
              (e.player = null),
              (e.ispickUp = !1),
              (e.posPlayer = null),
              (e.isShowHand = !1),
              (e.numRing = 0),
              (e.hasChallGood = !0),
              e
            );
          }
          var o;
          return (
            n(e, t),
            (o = e),
            (e.prototype.awardCallback = function () {
              switch (s.default.rewardStatus) {
                case s.GameReward.getTips:
                  c.default.ins.showTooltips("Enable prompt success!"),
                    this.openTipMode();
                  break;
                case s.GameReward.getMoneyFive:
                  c.default.ins.showTooltips("5 times reward has been earned!"),
                    this.viewResult.havingGetFive();
                  break;
                case s.GameReward.passGame:
                  c.default.ins.showTooltips("Successfully skip this level"),
                    this.viewResult.openView(!0);
              }
              s.default.rewardStatus = s.GameReward.none;
            }),
            (e.prototype.onLoad = function () {
              (o.inst = this),
                (this.viewResult.node.active = !1),
                c.default.ins.PhysicsInit();
              var t = s.default.currLevel,
                e = Math.floor(t / 9) + 1;
              if (((this.btnTips.active = !1), this.isEditor))
                (this.currLevelStage = this.node.getComponentInChildren(
                  g.default
                )),
                  (this.player =
                    this.currLevelStage.node.getComponentInChildren(f.default));
              else {
                var n = c.default.ins.getCurrStage(s.default.currLevel);
                this.node.insertChild(n, 2),
                  (this.currLevelStage = n.getComponent(g.default)),
                  (this.player = n.getComponentInChildren(f.default));
                var i = this.chapterBgArr[e - 1];
                (this.currBg.spriteFrame = this.currBg.getComponentInChildren(
                  cc.Sprite
                ).spriteFrame =
                  i),
                  (this.viewResult.node.children[0].getComponent(
                    cc.Sprite
                  ).spriteFrame = i);
              }
              var a = c.default.ins.getSkinDB(0, 0, this.arrSkindbPrb[0]);
              this.player.initSkin(a),
                this.currLevelStage.setElement(this.arrSkindbPrb[1]);
              var r = 840 - cc.winSize.height / 1.5 / 2;
              (this.gameCamera.zoomRatio = 1.5),
                (this.posPlayer = this.player.node.getPosition()),
                (this.gameCamera.node.x = -720);
              var l =
                this.posPlayer.y -
                this.currLevelStage.beginY +
                (this.player.node.height * this.player.node.scaleY) / 2;
              l > r && (l = r),
                l < -r && (l = -r),
                (this.gameCamera.node.y = l),
                this.player.node.setPosition(
                  cc.v2(
                    this.posPlayer.x - 450,
                    this.posPlayer.y - this.currLevelStage.beginY
                  )
                ),
                0 != this.currLevelStage.beginY &&
                  (this.player.node.angle = 10),
                (this.nameLevel.string = "Level " + e + " - " + ((t % 9) + 1)),
                0 != s.default.currLevel ||
                  this.isEditor ||
                  (this.btnTips.active = !1);
            }),
            (e.prototype.start = function () {
              var t = this;
              c.default.ins.loadingHide(),
                this.btnReturn.on(
                  cc.Node.EventType.TOUCH_END,
                  function () {
                    YYGGamesUtil.showChapingAD(function () {
                      c.default.ins.toolPersist.showHideItemMony(!0),
                        (cc.director.getPhysicsManager().enabled = !1),
                        t.resetGame(),
                        cc.director.loadScene(s.ViewName.home),
                        l.default.insertControl(0, 0, !0);
                    });
                  },
                  this
                ),
                this.btnReturn.on(
                  cc.Node.EventType.TOUCH_START,
                  r.default.ins.playClickEff,
                  this
                ),
                this.btnTips.active &&
                  (this.btnTips.on(
                    cc.Node.EventType.TOUCH_END,
                    function () {
                      (s.default.rewardStatus = s.GameReward.getTips),
                        o.inst.awardCallback();
                    },
                    this
                  ),
                  this.btnTips.on(
                    cc.Node.EventType.TOUCH_START,
                    r.default.ins.playClickEff,
                    this
                  )),
                this.playStartAni(),
                this.setStage(),
                (this.numRing = this.currLevelStage.ringNum),
                l.default.recordControl(0);
            }),
            (e.prototype.openTipMode = function () {
              var t = this;
              (this.btnTips.active = !1),
                (s.default.isTipsMode = !0),
                cc
                  .tween(this.node)
                  .to(0.3, { opacity: 0 })
                  .call(function () {
                    t.resetGame();
                  })
                  .start(),
                this.scheduleOnce(function () {
                  cc.director.loadScene(s.ViewName.main),
                    c.default.ins.toolPersist.showHideItemMony(!1);
                }, 0.5);
            }),
            (e.prototype.showTipMode = function () {
              if (this.isEditor) {
                if (!s.default.isTipsMode) return;
              } else if (!s.default.isTipsMode && 0 != s.default.currLevel)
                return;
              this.currLevelStage.passTipEff(), (s.default.isTipsMode = !1);
            }),
            (e.prototype.playStartAni = function () {
              var t = this;
              cc
                .tween(this.gameCamera.node)
                .delay(0.5)
                .to(2, { position: cc.v2(0, 0) })
                .call(function () {
                  (t.statusGame = a.start),
                    t.showTipMode(),
                    cc.log("\u5230\u4f4d");
                })
                .start(),
                cc
                  .tween(this.gameCamera)
                  .delay(0.5)
                  .to(2, { zoomRatio: 1 })
                  .start(),
                0 == this.currLevelStage.beginY
                  ? cc
                      .tween(this.player.node)
                      .delay(0.5)
                      .call(function () {
                        t.player.actionUpdate(1);
                      })
                      .by(2, { position: cc.v2(450, 0) })
                      .call(function () {
                        (t.player.playerRB.type = cc.RigidBodyType.Dynamic),
                          cc.log(t.player.playerRB.type),
                          t.player.actionUpdate(0);
                      })
                      .start()
                  : cc
                      .tween(this.player.node)
                      .delay(0.5)
                      .call(function () {
                        t.player.actionUpdate(1);
                      })
                      .by(1.8, {
                        position: cc.v2(422, this.currLevelStage.beginY),
                      })
                      .by(0.2, { position: cc.v2(28, 0), angle: -10 })
                      .call(function () {
                        (t.player.playerRB.type = cc.RigidBodyType.Dynamic),
                          cc.log(t.player.playerRB.type),
                          t.player.actionUpdate(0);
                      })
                      .start();
            }),
            (e.prototype.setStage = function () {
              var t = this;
              this.stageRB.onEndContact = function (e, o, n) {
                switch (n.node.group) {
                  case "player":
                    n.body.type == cc.RigidBodyType.Dynamic &&
                      0 == n.tag &&
                      t.scheduleOnce(function () {
                        n.node.destroy(), t.resultGame(!1);
                      }, 0);
                    break;
                  case "magma":
                  case "water":
                    t.scheduleOnce(function () {
                      c.default.ins.recycleWater(n.node);
                    }, 0);
                    break;
                  default:
                    t.scheduleOnce(function () {
                      n.node.destroy();
                    }, 0);
                }
              };
            }),
            (e.prototype.resetGame = function () {
              c.default.ins.recoveryDB(this.player.playerDB),
                this.currLevelStage.resetLevel(),
                this.viewResult.resetView(),
                this.btnTips.targetOff(this),
                this.btnReturn.targetOff(this),
                this.statusGame == a.start &&
                  (cc.director.getPhysicsManager().enabled = !1);
            }),
            (e.prototype.showHandtipEff = function (t) {
              var e = this;
              this.isShowHand && this.handTip.stopAllActions();
              var o = this.handTip.parent.convertToNodeSpaceAR(t);
              (this.handTip.opacity = 0),
                this.handTip.setPosition(cc.v2(o.x + 100, o.y - 100)),
                cc
                  .tween(this.handTip)
                  .by(0.3, { position: cc.v2(-100, 100), opacity: 255 })
                  .by(0.25, { position: cc.v2(100, -100) })
                  .by(0.25, { position: cc.v2(-100, 100) })
                  .by(0.25, { position: cc.v2(100, -100) })
                  .by(0.25, { position: cc.v2(-100, 100) })
                  .by(0.3, { position: cc.v2(100, -100), opacity: -255 })
                  .call(function () {
                    (e.handTip.x = 500),
                      (e.handTip.y = 800),
                      (e.isShowHand = !1);
                  })
                  .start();
            }),
            (e.prototype.hideHandtipEff = function () {
              0 != this.handTip.opacity &&
                ((this.handTip.opacity = 0),
                this.handTip.stopAllActions(),
                (this.handTip.x = 500),
                (this.handTip.y = 800),
                (this.isShowHand = !1));
            }),
            (e.prototype.toPicking = function () {
              this.ispickUp || ((this.ispickUp = !0), this.player.startMove());
            }),
            (e.prototype.toUnlocking = function () {
              this.currLevelStage.exitRing &&
                (this.currLevelStage.exitRing.unlock(),
                this.ispickUp ||
                  ((this.ispickUp = !0), this.player.startMove()));
            }),
            (e.prototype.statisticsRing = function () {
              this.numRing--, this.numRing <= 0 && this.player.startMove();
            }),
            (e.prototype.playerRuning = function () {
              this.player.startMove(), this.currLevelStage.monsterMove();
            }),
            (e.prototype.monsterRuning = function () {
              console.log("run!!"), this.currLevelStage.monsterMove();
            }),
            (e.prototype.resultGame = function (t) {
              var e = this;
              if ((console.log("resultGame=="), this.statusGame == a.start)) {
                (t = !!this.hasChallGood && t),
                  (this.statusGame = t ? a.succes : a.fail),
                  this.scheduleOnce(function () {
                    (cc.director.getPhysicsManager().enabled = !1),
                      t && e.player.actionUpdate(0, 1),
                      e.viewResult.openView(t);
                  }, 1);
                (c.default.loadNum = 0),
                  (c.default.loadCallback = function () {
                    !c.default.ins.isShowLoad ||
                      c.default.loadNum < 1 ||
                      (cc.director.loadScene(s.ViewName.main),
                      (c.default.loadCallback = null));
                  }.bind(this));
              }
            }),
            (e.prototype.getGoods = function (t, e) {
              var o = this;
              r.default.ins.playSoundEff(r.SoundId.pickGood);
              var n = t.getComponent(d.default).atPickup(e);
              -1 != n.chatid &&
                this.scheduleOnce(function () {
                  (cc.director.getPhysicsManager().enabled = !1),
                    0 == n.chatid && -1 == n.goodid
                      ? o.popReward.showNewReward()
                      : ((o.hasChallGood = !0), o.popReward.showGetGood(n));
                }, 0.2);
            }),
            (e.prototype.burnDown = function (t, e, o) {
              switch (e) {
                case 11:
                  o && t.getComponent(d.default).atPickup(cc.v2(0, 0), !0);
                  break;
                case 10:
                  o && t.getComponent(p.default).atPickup(cc.v2(0, 0), !0);
                  break;
                case 13:
                  t.getComponent(h.default).deathMonster(!0, 1, o);
              }
            }),
            (e.prototype.onDestroy = function () {
              o.inst = null;
            }),
            (e.inst = null),
            i(
              [
                b({
                  displayName: "\u5f00\u542f\u7f16\u8f91\u5668\u6a21\u5f0f",
                }),
              ],
              e.prototype,
              "isEditor",
              void 0
            ),
            i([b(cc.Sprite)], e.prototype, "currBg", void 0),
            i([b([cc.SpriteFrame])], e.prototype, "chapterBgArr", void 0),
            i(
              [
                b({
                  type: [cc.Prefab],
                  tooltip:
                    "prefab:0-manDB,1-fluidCamera,2-Monster2,3-Monster1,4-ArrowNode",
                }),
              ],
              e.prototype,
              "arrSkindbPrb",
              void 0
            ),
            i([b(cc.Camera)], e.prototype, "gameCamera", void 0),
            i([b(cc.RigidBody)], e.prototype, "stageRB", void 0),
            i([b(cc.Label)], e.prototype, "nameLevel", void 0),
            i([b(cc.Node)], e.prototype, "handTip", void 0),
            i([b(cc.Node)], e.prototype, "btnTips", void 0),
            i([b(cc.Node)], e.prototype, "btnReturn", void 0),
            i([b(u.default)], e.prototype, "viewResult", void 0),
            i([b(y.default)], e.prototype, "popReward", void 0),
            (e = o = i([m], e))
          );
        })(cc.Component);
        (o.default = w), cc._RF.pop();
      },
      {
        "../GameData": "GameData",
        "../GlobalManager": "GlobalManager",
        "../PlatformCont": "PlatformCont",
        "../common/SoundManager": "SoundManager",
        "./GameOverView": "GameOverView",
        "./RewardPop": "RewardPop",
        "./StageLevel": "StageLevel",
        "./prbScr/LevelGood": "LevelGood",
        "./prbScr/LevelKey": "LevelKey",
        "./prbScr/LevelMonster": "LevelMonster",
        "./prbScr/LevelPlayer": "LevelPlayer",
      },
    ],
    GlobalManager: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "54f70Mc6E9DvIvVlH1A36x8", "GlobalManager");
        var n =
          (this && this.__decorate) ||
          function (t, e, o, n) {
            var i,
              a = arguments.length,
              r =
                a < 3
                  ? e
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(e, o))
                  : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              r = Reflect.decorate(t, e, o, n);
            else
              for (var s = t.length - 1; s >= 0; s--)
                (i = t[s]) &&
                  (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
            return a > 3 && r && Object.defineProperty(e, o, r), r;
          };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var i = t("./GameData"),
          a = t("./gamescr/prbScr/Water"),
          r = t("./common/WaterCamera"),
          s = cc._decorator,
          c = s.ccclass,
          l =
            (s.property,
            (function () {
              function t() {
                (this.isOpenPY = !1),
                  (this.arrdragonBones = [[], [], []]),
                  (this.fluidAmbient = null),
                  (this.toolPersist = null),
                  (this.isShowLoad = !1),
                  (this.isFluidInit = -1),
                  (this.allWaters = null),
                  (this.usedWaters = null),
                  (this.oneCup_needNum = 36);
              }
              var e;
              return (
                (e = t),
                Object.defineProperty(t, "ins", {
                  get: function () {
                    return (
                      e._instance ||
                        ((e._instance = new e()), (e._instance.stageArr = [])),
                      this._instance
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.PhysicsInit = function () {
                  var t = cc.director.getPhysicsManager();
                  this.isOpenPY ||
                    ((this.isOpenPY = !0),
                    (t.enabledAccumulator = !0),
                    (cc.PhysicsManager.FIXED_TIME_STEP = 1 / 30),
                    (cc.PhysicsManager.VELOCITY_ITERATIONS = 8),
                    (cc.PhysicsManager.POSITION_ITERATIONS = 8),
                    (t.gravity = cc.v2(0, -320))),
                    (t.enabled = !0);
                }),
                (t.prototype.getFluidAmbient = function (t) {
                  if (!this.fluidAmbient) {
                    var e = cc.instantiate(t);
                    (this.fluidAmbient = e.getComponent(r.default)),
                      this.fluidAmbient.init();
                  }
                  return this.fluidAmbient;
                }),
                (t.prototype.getSkinDB = function (t, e, o) {
                  if (!this.arrdragonBones[t][e]) {
                    var n = cc.instantiate(o);
                    this.arrdragonBones[t][e] = n.getComponent(
                      dragonBones.ArmatureDisplay
                    );
                  }
                  return this.arrdragonBones[t][e];
                }),
                (t.prototype.recoveryDB = function (t) {
                  (t.node.parent = null),
                    t.off(dragonBones.EventObject.FRAME_EVENT);
                }),
                (t.prototype.checkStage = function (t) {
                  if (((t += 1), this.stageArr[t]))
                    return e.loadNum++, e.loadCallback(), !0;
                  var o = i.AssetUrl.stageLevel + t,
                    n = "Loading" + t + ":" + o;
                  return this.loadLevelStage(t, o, n), !1;
                }),
                (t.prototype.getCurrStage = function (t) {
                  t += 1;
                  var e = null;
                  return (
                    this.stageArr[t] && (e = cc.instantiate(this.stageArr[t])),
                    e
                  );
                }),
                (t.prototype.loadLevelStage = function (t, o, n) {
                  var i = this;
                  cc.loader.loadRes(
                    o,
                    cc.Prefab,
                    function (t, e, o) {},
                    function (o, a) {
                      console.log(n, o),
                        (i.stageArr[t] = a),
                        e.loadNum++,
                        e.loadCallback();
                    }
                  );
                }),
                (t.prototype.loadingShow = function () {
                  this.toolPersist
                    ? (this.toolPersist.showView(), (this.isShowLoad = !0))
                    : cc.log("\u6ca1\u52a0\u8f7dload\u754c\u9762");
                }),
                (t.prototype.loadingHide = function () {
                  this.toolPersist
                    ? (this.toolPersist.hideView(), (this.isShowLoad = !1))
                    : cc.log("\u6ca1\u52a0\u8f7dload\u754c\u9762");
                }),
                (t.prototype.showTooltips = function (t) {
                  this.toolPersist
                    ? this.toolPersist.showPop(t)
                    : cc.log(
                        "\u6ca1\u52a0\u8f7d\u6d88\u606f\u63d0\u793a\u5f39\u7a97"
                      );
                }),
                (t.prototype.initFluid = function () {
                  var t = this;
                  -1 == this.isFluidInit
                    ? ((this.isFluidInit = 0),
                      (this.allWaters = []),
                      (this.usedWaters = []),
                      (this.waterPool = new cc.NodePool()),
                      cc.loader.loadRes(
                        i.AssetUrl.water,
                        cc.Prefab,
                        function (e, o) {
                          e || ((t.waterPrefab = o), t.asynCreateWater());
                        }
                      ))
                    : 1 == this.isFluidInit && (e.loadNum++, e.loadCallback());
                }),
                (t.prototype.asynCreateWater = function () {
                  var t = this;
                  this.toolPersist &&
                    cc
                      .tween(this.toolPersist.node)
                      .repeat(
                        2,
                        cc.tween().call(this.createWater.bind(this)).delay(0.1)
                      )
                      .call(function () {
                        (t.isFluidInit = 1),
                          console.log(
                            "\u6c34\u6ef4\u6c60\u521d\u59cb\u5316\u5b8c\u6210"
                          ),
                          e.loadNum++,
                          e.loadCallback();
                      })
                      .start();
                }),
                (t.prototype.createWater = function () {
                  for (var t = 0; t < this.oneCup_needNum; t++) {
                    var e = cc
                      .instantiate(this.waterPrefab)
                      .getComponent(a.default);
                    e.init(),
                      this.allWaters.push(e),
                      this.waterPool.put(e.node);
                  }
                  cc.log(this.waterPool.size());
                }),
                (t.prototype.getWater = function () {
                  var t = null;
                  return (
                    this.waterPool.size() > 0
                      ? (t = this.waterPool.get().getComponent(a.default))
                      : ((t = cc
                          .instantiate(this.waterPrefab)
                          .getComponent(a.default)).init(),
                        t.setSF(this.waterSF),
                        this.allWaters.push(t)),
                    this.usedWaters.push(t),
                    t
                  );
                }),
                (t.prototype.recycleWater = function (t) {
                  if (t) {
                    t.getComponent(a.default).sleep(), this.waterPool.put(t);
                    var e = this.usedWaters.findIndex(function (e) {
                      return e.node == t;
                    });
                    -1 != e && this.usedWaters.splice(e, 1);
                  }
                }),
                (t.prototype.recycleWaters = function () {
                  if (
                    (console.log(
                      "\u56de\u6536\u5168\u90e8\u6c34\u6ef4",
                      this.usedWaters.length
                    ),
                    !(this.usedWaters.length < 1))
                  ) {
                    for (var t = this.usedWaters.length - 1; t >= 0; t--) {
                      var e = this.usedWaters[t];
                      e.sleep(), this.waterPool.put(e.node);
                    }
                    this.usedWaters = [];
                  }
                }),
                (t._instance = null),
                (t.loadNum = 0),
                (t = e = n([c], t))
              );
            })());
        (o.default = l), cc._RF.pop();
      },
      {
        "./GameData": "GameData",
        "./common/WaterCamera": "WaterCamera",
        "./gamescr/prbScr/Water": "Water",
      },
    ],
    GoodsManager: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "84809y+HXlIpL4uWZGA/q5w", "GoodsManager");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../GamingManager"),
          r = t("../prbScr/LevelMonster"),
          s = t("../prbScr/LevelPlayer"),
          c = cc._decorator,
          l = c.ccclass,
          u =
            (c.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.arrowArr = null), e;
              }
              var o;
              return (
                n(e, t),
                (o = e),
                Object.defineProperty(e, "ins", {
                  get: function () {
                    return (
                      o._instance ||
                        ((o._instance = new o()),
                        (o._instance.arrowArr = new cc.NodePool())),
                      this._instance
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.resetQulver = function (t) {
                  t.unscheduleAllCallbacks(),
                    (t.arrowRB.onBeginContact = function () {}),
                    this.arrowArr.put(t.arrowRB.node),
                    (t.qulverRB.onBeginContact = function () {}),
                    (t.qulverRB.onEndContact = function () {}),
                    (t.arrowStatus = 0),
                    (t.collideData = null),
                    (t.latelyId = -1),
                    t.node.destroy();
                }),
                (e.prototype.addQulverControl = function (t) {
                  var e,
                    o = this;
                  (e =
                    0 == this.arrowArr.size()
                      ? cc.instantiate(a.default.inst.arrSkindbPrb[4])
                      : this.arrowArr.get()),
                    (t.arrowRB = e.getComponent(cc.RigidBody)),
                    (t.arrowRB.type = cc.RigidBodyType.Static),
                    (t.arrowRB.linearVelocity = cc.v2(0, 0)),
                    (e.y = -65),
                    (e.x = 0),
                    (e.angle = 0),
                    t.node.insertChild(e, 0);
                  (t.qulverRB.onBeginContact = function (e, n, i) {
                    var a = i.node.group;
                    if ("monsters" == a || "player" == a || "ring" == a) {
                      var r = i.getAABB(),
                        s = t.arrowWpos.sub(r.center).mag();
                      t.collideData.push([s, i.node]),
                        (t.latelyId = -1),
                        o.checkShoot(t);
                    }
                  }),
                    (t.qulverRB.onEndContact = function (e, n, i) {
                      var a = i.node.group;
                      if ("monsters" == a || "player" == a || "ring" == a) {
                        var r = t.collideData.findIndex(function (t) {
                          return t[1] == i.node;
                        });
                        t.collideData.splice(r, 1),
                          (t.latelyId = -1),
                          o.checkShoot(t);
                      }
                    });
                }),
                (e.prototype.checkShoot = function (t) {
                  var e = this;
                  if (0 != t.collideData.length) {
                    if (
                      1 == t.collideData.length &&
                      "monsters" == t.collideData[0][1].group
                    )
                      if (
                        t.collideData[0][1].getComponent(r.default)
                          .monsterStatus > 2
                      )
                        return;
                    var o = t.collideData[0][0];
                    if (((t.latelyId = 0), t.collideData.length > 1))
                      for (var n = 1; n < t.collideData.length; n++) {
                        var i;
                        if ("monsters" == (i = t.collideData[n][1]).group)
                          i.getComponent(r.default).monsterStatus <= 2 &&
                            o > t.collideData[n][0] &&
                            ((o = t.collideData[n][0]), (t.latelyId = n));
                        else
                          o > t.collideData[n][0] &&
                            ((o = t.collideData[n][0]), (t.latelyId = n));
                      }
                    if (
                      -1 != t.latelyId &&
                      a.default.inst.statusGame == a.GameStatus.start
                    )
                      ("monsters" != (i = t.collideData[t.latelyId][1]).group &&
                        "player" != i.group) ||
                        ((t.qulverRB.onBeginContact = null),
                        (t.qulverRB.onEndContact = null),
                        t.scheduleOnce(function () {
                          console.log("\u5c04\u51fa\u7bad\uff01"),
                            e.shootArrow(t);
                        }, 0));
                  }
                }),
                (e.prototype.shootArrow = function (t) {
                  t.qulverRB.active = t.qulverPC.enabled = !1;
                  (t.arrowRB.onBeginContact = function (e, o, n) {
                    switch (n.node.group) {
                      case "monsters":
                        if (((e.disabled = !0), 2 != t.arrowStatus)) {
                          t.arrowStatus = 1;
                          var i = n.getComponent(r.default);
                          i.monsterStatus <= 2 &&
                            t.scheduleOnce(function () {
                              console.log("\u602a\u6b7b"),
                                i.deathMonster(!1, 2);
                            }, 0);
                        }
                        break;
                      case "player":
                        if (((e.disabled = !0), 2 != t.arrowStatus)) {
                          t.arrowStatus = 1;
                          var a = n.getComponent(s.default);
                          t.scheduleOnce(function () {
                            console.log("\u4e3b\u89d2\u6b7b"), a.deathPlayer();
                          }, 0.1);
                        }
                        break;
                      case "wall":
                        0 == t.arrowStatus
                          ? (t.arrowStatus = 1)
                          : 1 == t.arrowStatus
                          ? ((t.arrowStatus = 2),
                            t.scheduleOnce(function () {
                              console.log("\u6539\u7bad\u72b6\u6001"),
                                (t.arrowRB.type = cc.RigidBodyType.Dynamic);
                            }, 0))
                          : t.arrowRB.linearVelocity.mag() < 50 &&
                            t.scheduleOnce(function () {
                              console.log("\u6539\u7bad\u72b6\u6001"),
                                (t.arrowRB.type = cc.RigidBodyType.Static),
                                (t.arrowRB.linearVelocity = cc.v2(0, 0));
                            }, 0);
                        break;
                      case "ring":
                        2 != t.arrowStatus &&
                          ((t.arrowStatus = 2),
                          t.scheduleOnce(function () {
                            console.log("\u6539\u7bad\u72b6\u6001"),
                              (t.arrowRB.type = cc.RigidBodyType.Dynamic);
                          }, 0));
                        break;
                      default:
                        e.disabled = !0;
                    }
                  }),
                    (t.arrowRB.type = cc.RigidBodyType.Kinematic),
                    (t.arrowRB.linearVelocity = t.arrowDir.mul(1e3));
                }),
                (e._instance = null),
                (e = o = i([l], e))
              );
            })(cc.Component));
        (o.default = u), cc._RF.pop();
      },
      {
        "../GamingManager": "GamingManager",
        "../prbScr/LevelMonster": "LevelMonster",
        "../prbScr/LevelPlayer": "LevelPlayer",
      },
    ],
    HomeView: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "14976EDjQZHpKm1062Jx9eA", "HomeView");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("./common/SoundManager"),
          r = t("./GameData"),
          s = t("./GlobalManager"),
          c = t("./levelSelect/LevelSelectView"),
          l = t("./PlatformCont"),
          u = cc._decorator,
          d = u.ccclass,
          p = u.property,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.btnStart = null),
                (e.btnMusic = null),
                (e.btnSound = null),
                (e.popSellevel = null),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                h5splash.hideLoading();
                (r.default.MainHome = this),
                  this.popSellevel.initPop(),
                  (r.default.currLevel = r.default.playerData.currLevelIndex),
                  cc
                    .tween(this.btnStart)
                    .repeatForever(
                      cc.tween(0).to(0.5, { scale: 1.1 }).to(1, { scale: 1 })
                    )
                    .start();
              }),
              (e.prototype.start = function () {
                (s.default.loadNum = 0),
                  (s.default.loadCallback = function () {
                    !s.default.ins.isShowLoad ||
                      s.default.loadNum < 2 ||
                      (cc.director.loadScene(r.ViewName.main),
                      (s.default.loadCallback = null));
                  }.bind(this)),
                  s.default.ins.initFluid(),
                  l.default.bannerControl(!0),
                  (this.btnMusic.children[1].active =
                    !r.default.playerData.musicStatus),
                  (this.btnSound.children[1].active =
                    !r.default.playerData.soundStatus),
                  this.btnSound.on(
                    cc.Node.EventType.TOUCH_END,
                    this.tapUpSound,
                    this
                  );
              }),
              (e.prototype.tapUpSound = function () {
                (r.default.playerData.musicStatus =
                  !r.default.playerData.musicStatus),
                  (this.btnMusic.children[1].active =
                    !r.default.playerData.musicStatus),
                  console.error(
                    "GameData.playerData.musicStatus====" +
                      r.default.playerData.musicStatus
                  ),
                  r.default.playerData.musicStatus
                    ? a.default.ins.playBgMusic()
                    : a.default.ins.stopBgMusic(),
                  (r.default.playerData.soundStatus =
                    !r.default.playerData.soundStatus),
                  (this.btnSound.children[1].active =
                    !r.default.playerData.soundStatus),
                  r.default.savePlayerData();
              }),
              (e.prototype.tapStartGame = function () {
                var t = this;
                this.node.pauseSystemEvents(!0),
                  s.default.ins.toolPersist.updateMoney(
                    r.default.gameCost,
                    this.btnStart.getPosition(),
                    function (e) {
                      t.node.resumeSystemEvents(!0),
                        e &&
                          (s.default.ins.loadingShow(),
                          s.default.ins.checkStage(r.default.currLevel),
                          s.default.ins.toolPersist.showHideItemMony(!1));
                    },
                    this
                  );
              }),
              (e.prototype.tapClickSound = function () {
                a.default.ins.playClickEff();
              }),
              i([p(cc.Node)], e.prototype, "btnStart", void 0),
              i([p(cc.Node)], e.prototype, "btnMusic", void 0),
              i([p(cc.Node)], e.prototype, "btnSound", void 0),
              i([p(c.default)], e.prototype, "popSellevel", void 0),
              (e = i([d], e))
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {
        "./GameData": "GameData",
        "./GlobalManager": "GlobalManager",
        "./PlatformCont": "PlatformCont",
        "./common/SoundManager": "SoundManager",
        "./levelSelect/LevelSelectView": "LevelSelectView",
      },
    ],
    LevelElebox: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "178d1SeKKNBdrPsE+n5EQHZ", "LevelElebox");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("./LevelFluid"),
          r = cc._decorator,
          s = r.ccclass,
          c = r.property,
          l = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.boxRB = null), (e.isShowElectric = !1), (e.waterNum = 0), e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.setElectric = function (t) {
                this.isShowElectric != t &&
                  ((this.isShowElectric = t),
                  (this.node.children[0].opacity = t ? 255 : 0));
              }),
              (e.prototype.onBeginContact = function (t, e, o) {
                "water" == o.node.group &&
                  (this.waterNum++,
                  this.waterNum > 0 &&
                    (this.setElectric(!0),
                    o.node.parent.getComponent(a.default).setEctricWater(!0)));
              }),
              (e.prototype.onEndContact = function (t, e, o) {
                "water" == o.node.group &&
                  (this.waterNum--,
                  this.waterNum < 1 &&
                    (this.setElectric(!1),
                    o.node.parent.getComponent(a.default).setEctricWater(!1)));
              }),
              i([c(cc.RigidBody)], e.prototype, "boxRB", void 0),
              (e = i([s], e))
            );
          })(cc.Component);
        (o.default = l), cc._RF.pop();
      },
      { "./LevelFluid": "LevelFluid" },
    ],
    LevelFluid: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "092beQYRjdHsYpF990P3e9C", "LevelFluid");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../GlobalManager"),
          r = t("../../GameData"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          u = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.typeFulid = r.FulidType.none),
                (e.skinFulid = null),
                (e.isEectric = !1),
                (e.firePrefab = null),
                (e.dropInterval = 0.07),
                (e.numFulid = 32),
                (e.isEnough = !1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.releaseWaters();
              }),
              (e.prototype.reset = function () {
                this.stop(), a.default.ins.recycleWaters();
              }),
              (e.prototype.setEctricWater = function (t) {
                this.placeWaters.forEach(function (e) {
                  e.HasEectric = t;
                });
              }),
              (e.prototype.consumeFulid = function (t) {
                if (0 != this.placeWaters.length) {
                  var e = this.placeWaters.findIndex(function (e) {
                    return e.node == t;
                  });
                  -1 != e && this.placeWaters.splice(e, 1),
                    a.default.ins.recycleWater(t),
                    this.placeWaters.length < 6 && this.reset();
                }
              }),
              (e.prototype.releaseWaters = function () {
                var t = this;
                this.placeWaters = [];
                var e = Math.floor(this.numFulid / 2);
                cc.tween(this.node)
                  .repeat(
                    e,
                    cc
                      .tween()
                      .call(function () {
                        t.createWater();
                      })
                      .delay(this.dropInterval)
                  )
                  .call(function () {
                    t.stop();
                  })
                  .start();
              }),
              (e.prototype.createWater = function () {
                if (!this.isEnough)
                  for (var t = 0; t < 2; t++) {
                    var e = this.placeWaters.length,
                      o = a.default.ins.getWater(),
                      n = this.getFluidPos(e);
                    n.y + 13 >= this.node.height && (this.isEnough = !0),
                      o.reset(
                        this.typeFulid,
                        this.node,
                        n,
                        this.skinFulid,
                        this.firePrefab
                      ),
                      this.placeWaters.push(o);
                  }
              }),
              (e.prototype.stop = function () {
                this.node.stopAllActions(), cc.log(this.placeWaters.length);
              }),
              (e.prototype.getFluidPos = function (t) {
                var e = cc.v2(13, 13),
                  o = Math.floor(this.node.width / 26);
                return (e.x = (t % o) * 26), (e.y = 26 * Math.floor(t / o)), e;
              }),
              (e.prototype.onDestroy = function () {
                this.stop();
              }),
              i(
                [
                  l({
                    type: cc.Enum(r.FulidType),
                    displayName: "\u6d41\u4f53\u7c7b\u578b",
                  }),
                ],
                e.prototype,
                "typeFulid",
                void 0
              ),
              i([l(cc.SpriteFrame)], e.prototype, "skinFulid", void 0),
              i(
                [l({ displayName: "\u662f\u5426\u53ef\u5bfc\u7535" })],
                e.prototype,
                "isEectric",
                void 0
              ),
              i(
                [
                  l({
                    type: cc.Prefab,
                    displayName:
                      "\u7c7b\u578b\u4e3amagma\u65f6\u9700\u5f97\u6dfb\u52a0\u7279\u6548prb",
                  }),
                ],
                e.prototype,
                "firePrefab",
                void 0
              ),
              (e = i([c], e))
            );
          })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      { "../../GameData": "GameData", "../../GlobalManager": "GlobalManager" },
    ],
    LevelGood: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a5f8cxUvIJKL5KP71tQoMYa", "LevelGood");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../GameData"),
          r = cc._decorator,
          s = r.ccclass,
          c = r.property,
          l = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.typeGood = a.GameGoods.none),
                (e.hasFindPic = null),
                (e.selfPic = null),
                (e.goodsId = cc.v2(-1, -1)),
                (e.goodRB = null),
                (e.HasPickUp = !1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.goodRB = this.node.getComponent(cc.RigidBody);
              }),
              (e.prototype.onDestroy = function () {
                this.node.stopAllActions();
              }),
              (e.prototype.atPickup = function (t, e) {
                var o = this;
                if ((void 0 === e && (e = !1), !this.HasPickUp))
                  return (
                    (this.HasPickUp = !0),
                    cc.log("\u6361\u5230\u7269\u54c1\uff1a", this.typeGood),
                    (this.goodRB.type = cc.RigidBodyType.Static),
                    (this.goodRB.active = !1),
                    this.node
                      .getComponents(cc.PhysicsCollider)
                      .forEach(function (t) {
                        t.enabled = !1;
                      }),
                    e
                      ? cc
                          .tween(this.node)
                          .to(0.2, { color: new cc.Color(0, 0, 0, 255) })
                          .call(function () {
                            o.node.opacity = 0;
                          })
                          .start()
                      : cc
                          .tween(this.node)
                          .to(0.2, {
                            scale: 0,
                            position: this.node.parent.convertToNodeSpaceAR(t),
                          })
                          .start(),
                    this.typeGood == a.GameGoods.chest &&
                      (this.selfPic.spriteFrame = this.hasFindPic),
                    {
                      chatid: this.goodsId.x,
                      goodid: this.goodsId.y,
                      goodimg: this.selfPic.spriteFrame,
                    }
                  );
              }),
              i(
                [
                  c({
                    displayName: "\u7269\u54c1\u7c7b\u578b",
                    type: cc.Enum(a.GameGoods),
                  }),
                ],
                e.prototype,
                "typeGood",
                void 0
              ),
              i([c(cc.SpriteFrame)], e.prototype, "hasFindPic", void 0),
              i([c(cc.Sprite)], e.prototype, "selfPic", void 0),
              i(
                [c({ displayName: "\u6536\u96c6\u7269\u54c1id" })],
                e.prototype,
                "goodsId",
                void 0
              ),
              (e = i([s], e))
            );
          })(cc.Component);
        (o.default = l), cc._RF.pop();
      },
      { "../../GameData": "GameData" },
    ],
    LevelKey: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "c0c55JsFKJAvINtkWVn2HTo", "LevelKey");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../GameData"),
          r = t("../GamingManager"),
          s = t("./LevelMonster"),
          c = cc._decorator,
          l = c.ccclass,
          u = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.typeGood = a.GameGoods.none),
                (e.keyRB = null),
                (e.isAtground = !1),
                (e.HasPickUp = !1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.onDestroy = function () {
                this.node.stopAllActions(), this.unscheduleAllCallbacks();
              }),
              (e.prototype.atPickup = function (t, e) {
                var o = this;
                void 0 === e && (e = !1),
                  this.HasPickUp ||
                    ((this.HasPickUp = !0),
                    cc.log("\u94a5\u5319\u88ab\u68c0\u5230\u4e86"),
                    (this.keyRB.type = cc.RigidBodyType.Static),
                    (this.keyRB.active = !1),
                    this.node
                      .getComponents(cc.PhysicsCollider)
                      .forEach(function (t) {
                        t.enabled = !1;
                      }),
                    e
                      ? cc
                          .tween(this.node)
                          .to(0.2, { color: new cc.Color(0, 0, 0, 255) })
                          .call(function () {
                            (o.node.opacity = 0), r.default.inst.resultGame(!1);
                          })
                          .start()
                      : cc
                          .tween(this.node)
                          .to(0.2, {
                            scale: 0,
                            position: this.node.parent.convertToNodeSpaceAR(t),
                          })
                          .start());
              }),
              (e.prototype.onBeginContact = function (t, e, o) {
                switch (this.typeGood) {
                  case a.GameGoods.keylevel:
                    this.isAtground ||
                      -1 == o.name.indexOf("levelmap") ||
                      1 != o.tag ||
                      ((this.isAtground = !0),
                      cc.log("\u94a5\u5319\u6389\u5230\u5730\u9762\u4e86"),
                      r.default.inst.toPicking());
                    break;
                  case a.GameGoods.rock:
                    if (13 == o.tag) {
                      t.disabled = !0;
                      var n = o.getComponent(s.default);
                      this.scheduleOnce(function () {
                        n.deathMonster(!1, 2);
                      }, 0);
                    }
                }
              }),
              i(
                [
                  u({
                    displayName: "\u7269\u54c1\u7c7b\u578b",
                    type: cc.Enum(a.GameGoods),
                  }),
                ],
                e.prototype,
                "typeGood",
                void 0
              ),
              i([u(cc.RigidBody)], e.prototype, "keyRB", void 0),
              (e = i([l], e))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "../../GameData": "GameData",
        "../GamingManager": "GamingManager",
        "./LevelMonster": "LevelMonster",
      },
    ],
    LevelMonster: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "801fclJDTxHnaL4jYWitEvJ", "LevelMonster");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../common/SoundManager"),
          r = t("../GamingManager"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          u = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.typeMonster = 0),
                (e.runMove = !1),
                (e.mdeathPrun = !1),
                (e.startPos = cc.v2(0, 0)),
                (e.endPos = cc.v2(0, 0)),
                (e.runtime = 0.5),
                (e.monsterRB = null),
                (e.bobyMonster = null),
                (e.isMove = !1),
                (e.actaniArr = []),
                (e.monsterStatus = 2),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.initMonster = function (t) {
                (t.node.color = new cc.Color(255, 255, 255, 255)),
                  this.node.addChild(t.node),
                  (this.bobyMonster = t),
                  (this.actaniArr = this.bobyMonster.getAnimationNames(
                    this.bobyMonster.getArmatureNames()[0]
                  )),
                  (this.bobyMonster.timeScale = 1),
                  this.bobyMonster.playAnimation(this.actaniArr[2], 0);
              }),
              (e.prototype.startRun = function () {
                if (this.runMove) {
                  if (this.isMove) return;
                  this.bobyMonster.playAnimation(this.actaniArr[0], 0),
                    (this.isMove = !0),
                    this.schedule(this.runMonster, 0.5),
                    this.runMonster(),
                    (this.monsterStatus = 0);
                }
              }),
              (e.prototype.onDestroy = function () {
                (this.monsterStatus = 3),
                  this.node.stopAllActions(),
                  this.unscheduleAllCallbacks();
              }),
              (e.prototype.runMonster = function () {
                if (
                  this.monsterRB &&
                  r.default.inst.statusGame == r.GameStatus.start
                ) {
                  var t = this.node.scaleX >= 0 ? 1 : -1,
                    e = cc.v2(-100 * t, 0);
                  this.monsterRB.linearVelocity = e;
                } else this.unscheduleAllCallbacks();
              }),
              (e.prototype.deathMonster = function (t, e, o) {
                var n = this;
                if (
                  (void 0 === t && (t = !0),
                  void 0 === e && (e = 1),
                  void 0 === o && (o = !1),
                  1 != this.monsterStatus && 4 != this.monsterStatus)
                )
                  if (3 != this.monsterStatus) {
                    (this.monsterStatus = o ? 4 : 3),
                      a.default.ins.playSoundEff(a.SoundId.death),
                      this.unscheduleAllCallbacks();
                    var i = cc.tween(this.node);
                    t &&
                      i.delay(0.2).call(function () {
                        cc.tween(n.bobyMonster.node)
                          .to(0.2, { color: new cc.Color(0, 0, 0, 255) })
                          .start();
                      }),
                      i.call(function () {
                        (n.bobyMonster.timeScale = e),
                          n.bobyMonster.playAnimation(n.actaniArr[3], 1);
                      }),
                      0 == this.typeMonster &&
                        i.by(0.2, { position: cc.v2(-120, -10) }),
                      o &&
                        i.delay(0.5).call(function () {
                          n.cleanMonster();
                        }),
                      i
                        .call(function () {
                          n.mdeathPrun && r.default.inst.playerRuning();
                        })
                        .start();
                  } else o && ((this.monsterStatus = 4), this.cleanMonster());
              }),
              (e.prototype.cleanMonster = function () {
                console.log("cleanMonster"),
                  (this.node.opacity = 0),
                  (this.monsterRB.type = cc.RigidBodyType.Static),
                  (this.monsterRB.active = !1),
                  this.monsterRB.node
                    .getComponents(cc.PhysicsCollider)
                    .forEach(function (t) {
                      t.enabled = !1;
                    });
              }),
              (e.prototype.attackEff = function () {
                1 != this.monsterStatus &&
                  3 != this.monsterStatus &&
                  4 != this.monsterStatus &&
                  ((this.monsterStatus = 1),
                  this.unschedule(this.runMonster),
                  this.bobyMonster.once(
                    dragonBones.EventObject.FRAME_EVENT,
                    function () {
                      r.default.inst.player.deathPlayer(1);
                    },
                    this
                  ),
                  (this.monsterRB.linearVelocity = cc.v2(0, 0)),
                  this.bobyMonster.playAnimation(this.actaniArr[1], 1));
              }),
              i(
                [
                  l({
                    displayName: "\u602a\u7269\u7c7b\u578b",
                    tooltip: "0-\u50f5\u5c38,1-\u8718\u86db",
                  }),
                ],
                e.prototype,
                "typeMonster",
                void 0
              ),
              i(
                [l({ displayName: "\u662f\u5426\u8d70\u52a8" })],
                e.prototype,
                "runMove",
                void 0
              ),
              i(
                [
                  l({
                    displayName: "\u662f\u5426\u602a\u6b7b\u4e3b\u89d2\u8d70",
                  }),
                ],
                e.prototype,
                "mdeathPrun",
                void 0
              ),
              i(
                [l({ displayName: "\u8d77\u59cb\u70b9" })],
                e.prototype,
                "startPos",
                void 0
              ),
              i(
                [l({ displayName: "\u7ec8\u70b9" })],
                e.prototype,
                "endPos",
                void 0
              ),
              i(
                [l({ displayName: "\u4e00\u8d9f\u65f6\u95f4" })],
                e.prototype,
                "runtime",
                void 0
              ),
              i([l(cc.RigidBody)], e.prototype, "monsterRB", void 0),
              (e = i([c], e))
            );
          })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      {
        "../../common/SoundManager": "SoundManager",
        "../GamingManager": "GamingManager",
      },
    ],
    LevelPlayer: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5a9cfGZ/u5PK51dxXvO3AoG", "LevelPlayer");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../GameData"),
          r = t("../GamingManager"),
          s = t("./LevelGood"),
          c = t("./LevelKey"),
          l = t("./LevelMonster"),
          u = t("./Water"),
          d = cc._decorator,
          p = d.ccclass,
          h = d.property,
          f = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.gameType = 0),
                (e.playerRB = null),
                (e.playerDB = null),
                (e.isMove = !1),
                (e.HasWeapon = !1),
                (e.actaniArr = []),
                (e.playerArmat = null),
                (e.isAttacking = !1),
                (e.statusPlayer = 0),
                (e.attackTarget = null),
                (e.arrTag = []),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.initSkin = function (t) {
                this.node.addChild(t.node),
                  (this.playerDB = t),
                  (this.playerArmat = this.playerDB.armature()),
                  (this.actaniArr = this.playerDB.getAnimationNames(
                    this.playerDB.getArmatureNames()[0]
                  )),
                  (this.playerDB.node.scaleX = Math.abs(
                    this.playerDB.node.scaleX
                  )),
                  (this.playerArmat.getSlot("\u68cd\u5b50").displayIndex = -1),
                  (this.playerDB.timeScale = 1),
                  this.actionUpdate(0, -1),
                  this.setWeapon(!1);
              }),
              (e.prototype.onDestroy = function () {
                this.node.stopAllActions(), this.unscheduleAllCallbacks();
              }),
              (e.prototype.actionUpdate = function (t, e) {
                void 0 === e && (e = -1),
                  this.playerDB &&
                    this.actaniArr[t] &&
                    this.playerDB.playAnimation(this.actaniArr[t], e);
              }),
              (e.prototype.setWeapon = function (t) {
                t != this.HasWeapon &&
                  ((this.HasWeapon = t),
                  (this.playerArmat.getSlot("\u68cd\u5b50").displayIndex = this
                    .HasWeapon
                    ? 0
                    : -1),
                  this.playerDB.on(
                    dragonBones.EventObject.FRAME_EVENT,
                    this.acctendEnd,
                    this
                  ));
              }),
              (e.prototype.acctendEnd = function (t) {
                var e = this;
                "attack" == t.actionData.name &&
                  this.attackTarget &&
                  (this.playerDB.off(dragonBones.EventObject.FRAME_EVENT),
                  (this.playerDB.timeScale = 1),
                  this.attackTarget.deathMonster(!1, 1),
                  this.scheduleOnce(function () {
                    (e.statusPlayer = 1), (e.isAttacking = !1), e.runPlayer();
                  }, 0.5));
              }),
              (e.prototype.startMove = function () {
                this.isMove ||
                  ((this.isMove = !0),
                  (this.statusPlayer = 1),
                  this.runPlayer(),
                  this.schedule(this.runPlayer, 0.5));
              }),
              (e.prototype.runPlayer = function () {
                if (
                  this.playerRB &&
                  r.default.inst.statusGame == r.GameStatus.start
                ) {
                  if (!this.isAttacking) {
                    var t = cc.v2(0, -200);
                    switch (this.statusPlayer) {
                      case 0:
                        (t = cc.v2(0, -200)),
                          this.playerDB.animationName != this.actaniArr[0] &&
                            this.actionUpdate(0, 0);
                        break;
                      case 1:
                        (t = cc.v2(185, 0)),
                          this.playerDB.animationName != this.actaniArr[1] &&
                            this.actionUpdate(1, 0);
                        break;
                      case 2:
                        (t = cc.v2(0, -200)), this.actionUpdate(2, 1);
                        break;
                      case 3:
                        (this.isAttacking = !0),
                          (t = cc.v2(0, -200)),
                          this.actionUpdate(3, 1);
                        break;
                      case 4:
                        (t = cc.v2(285, 180)),
                          (this.statusPlayer = 1),
                          this.actionUpdate(1, 0);
                        break;
                      case 5:
                        (t = cc.v2(0, -400)),
                          this.playerDB.animationName != this.actaniArr[0] &&
                            this.actionUpdate(0, 0);
                    }
                    this.playerRB.linearVelocity = t;
                  }
                } else this.unscheduleAllCallbacks();
              }),
              (e.prototype.deathPlayer = function (t) {
                var e = this;
                void 0 === t && (t = 2),
                  this.unschedule(this.runPlayer),
                  (this.statusPlayer = 2),
                  (this.playerDB.timeScale = t),
                  this.runPlayer(),
                  r.default.inst.resultGame(!1),
                  this.scheduleOnce(function () {
                    (e.playerRB.linearVelocity = cc.v2(0, 0)),
                      (e.playerRB.type = cc.RigidBodyType.Static),
                      (e.playerRB.active = e.node.getComponent(
                        cc.PhysicsCollider
                      ).enabled =
                        !1);
                  }, 0);
              }),
              (e.prototype.onEndContact = function (t, e, o) {
                var n = this;
                if (0 == e.tag) {
                  var i = this.arrTag.indexOf(o.tag);
                  -1 != i && this.arrTag.splice(i, 1),
                    o.tag <= 5 &&
                      this.scheduleOnce(function () {
                        n.isMove &&
                          5 != n.statusPlayer &&
                          4 != n.statusPlayer &&
                          -1 == n.arrTag.indexOf(1) &&
                          -1 == n.arrTag.indexOf(5) &&
                          ((n.statusPlayer = 5), n.runPlayer());
                      }, 0.3);
                }
              }),
              (e.prototype.onBeginContact = function (t, e, o) {
                var n,
                  i = this;
                if (1 != e.tag)
                  switch ((this.arrTag.push(o.tag), o.tag)) {
                    case 10:
                      var d = o.getComponent(c.default);
                      cc.log(o.body.linearVelocity.mag()),
                        d.typeGood == a.GameGoods.keylevel
                          ? ((n = this.node.parent.convertToWorldSpaceAR(
                              cc.v2(
                                this.node.x + 30,
                                this.node.y + this.node.height / 2
                              )
                            )),
                            this.scheduleOnce(function () {
                              d.atPickup(n), r.default.inst.toUnlocking();
                            }, 0))
                          : d.typeGood == a.GameGoods.rock &&
                            (o.body.linearVelocity.mag() > 200
                              ? ((t.disabled = !1),
                                (this.playerRB.linearVelocity = cc.v2(0, 0)),
                                this.scheduleOnce(function () {
                                  i.deathPlayer(),
                                    (o.body.linearVelocity = cc.v2(0, 0));
                                }, 0))
                              : this.isMove &&
                                4 != this.statusPlayer &&
                                ((this.statusPlayer = 4), this.runPlayer()));
                      break;
                    case 11:
                      (t.disabled = !0), (o.body.linearVelocity = cc.v2(0, 0));
                      var p = o.node.getComponent(s.default);
                      (n = this.node.parent.convertToWorldSpaceAR(
                        cc.v2(
                          this.node.x + 30,
                          this.node.y + this.node.height / 2
                        )
                      )),
                        this.HasWeapon ||
                          p.typeGood != a.GameGoods.weapon ||
                          cc
                            .tween(this)
                            .delay(0.2)
                            .call(function () {
                              i.setWeapon(!0);
                            })
                            .start(),
                        this.scheduleOnce(function () {
                          r.default.inst.getGoods(o.node, n);
                        }, 0);
                      break;
                    case 12:
                      r.default.inst.resultGame(!0);
                      break;
                    case 13:
                      f = o.getComponent(l.default);
                      (t.disabled = !0),
                        2 != this.statusPlayer && f.attackEff();
                      break;
                    case 14:
                      t.disabled = !0;
                      var h = o.node.getComponent(u.default);
                      2 != this.statusPlayer &&
                        (h.typeFluid == a.FulidType.magma || h.HasEectric) &&
                        this.deathPlayer(1);
                      break;
                    case 15:
                      this.statusPlayer;
                      break;
                    case 5:
                      o.sensor
                        ? r.default.inst.resultGame(!0)
                        : 5 == this.statusPlayer &&
                          ((this.statusPlayer = 1), this.runPlayer());
                      break;
                    case 0:
                      this.isMove &&
                        4 != this.statusPlayer &&
                        (this.statusPlayer = 4);
                      break;
                    case 2:
                      this.isMove &&
                        5 != this.statusPlayer &&
                        ((this.statusPlayer = 5), this.runPlayer());
                      break;
                    case 1:
                      this.isMove &&
                        1 != this.statusPlayer &&
                        ((this.statusPlayer = 1), this.runPlayer());
                  }
                else if (13 == o.tag) {
                  var f;
                  if (
                    1 == (f = o.getComponent(l.default)).monsterStatus ||
                    3 == f.monsterStatus
                  )
                    return;
                  this.HasWeapon
                    ? ((this.playerDB.timeScale = 2),
                      (this.statusPlayer = 3),
                      this.runPlayer(),
                      (this.attackTarget = f))
                    : 2 != this.statusPlayer && f.attackEff();
                }
              }),
              i([h], e.prototype, "gameType", void 0),
              i([h(cc.RigidBody)], e.prototype, "playerRB", void 0),
              (e = i([p], e))
            );
          })(cc.Component);
        (o.default = f), cc._RF.pop();
      },
      {
        "../../GameData": "GameData",
        "../GamingManager": "GamingManager",
        "./LevelGood": "LevelGood",
        "./LevelKey": "LevelKey",
        "./LevelMonster": "LevelMonster",
        "./Water": "Water",
      },
    ],
    LevelQulver: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "65fb1T2uptPOqALr7nHoNQ0", "LevelQulver");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../GameData"),
          r = t("../managers/GoodsManager"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          u = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.typeGood = a.GameGoods.quiver),
                (e.qulverRB = null),
                (e.qulverPC = null),
                (e.arrowRB = null),
                (e.arrowStatus = 0),
                (e.latelyId = -1),
                (e.collideData = []),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                (this.qulverPC = this.node.getComponent(cc.PhysicsCollider)),
                  (this.arrowStatus = 0),
                  (this.collideData = []),
                  (this.latelyId = -1),
                  (this.arrowWpos = this.node.convertToWorldSpaceAR(
                    cc.v2(0, -65)
                  )),
                  (this.arrowDir = this.node.parent
                    .convertToWorldSpaceAR(this.node.getPosition())
                    .sub(this.arrowWpos)),
                  this.arrowDir.normalizeSelf(),
                  this.arrowDir.negSelf(),
                  r.default.ins.addQulverControl(this);
              }),
              (e.prototype.start = function () {}),
              (e.prototype.onDestroy = function () {
                console.log("xiaohui!!!!!!!!!!");
              }),
              i(
                [
                  l({
                    displayName: "\u7269\u54c1\u7c7b\u578b",
                    type: cc.Enum(a.GameGoods),
                  }),
                ],
                e.prototype,
                "typeGood",
                void 0
              ),
              i([l(cc.RigidBody)], e.prototype, "qulverRB", void 0),
              (e = i([c], e))
            );
          })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      {
        "../../GameData": "GameData",
        "../managers/GoodsManager": "GoodsManager",
      },
    ],
    LevelRingMove: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "40addVYZk5JL6ZdtPLm6phs", "LevelRingMove");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../common/SoundManager"),
          r = t("../GamingManager"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          u = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.moveRingRB = null),
                (e.moveSpeed = 0.6),
                (e.ringStatus = 0),
                (e.wallSite = -1),
                (e.pMoveData = cc.v2(0, -1)),
                (e.moving = !1),
                (e.ringStartPos = null),
                (e.ringEndPos = null),
                (e.isBack = !1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                (this.ringStartPos = cc.v2(0, 25)),
                  (this.ringEndPos = cc.v2(0, this.node.height - 25)),
                  this.moveRingRB.node.setPosition(
                    0 == this.ringStatus ? this.ringStartPos : this.ringEndPos
                  );
              }),
              (e.prototype.onDestroy = function () {
                this.node.targetOff(this), this.unscheduleAllCallbacks();
              }),
              (e.prototype.start = function () {
                this.moveRingRB.node.on(
                  cc.Node.EventType.TOUCH_END,
                  this.tapMove,
                  this
                ),
                  this.moveRingRB.node.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  this.node.on(cc.Node.EventType.TOUCH_END, this.tapMove, this),
                  this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  -1 != this.wallSite && this.openEvent();
              }),
              (e.prototype.getTipsPos = function () {
                return this.node.convertToWorldSpaceAR(
                  cc.v2(0, this.node.height / 2)
                );
              }),
              (e.prototype.tapMove = function () {
                var t = this;
                if (
                  r.default.inst.statusGame == r.GameStatus.start &&
                  !this.moving
                ) {
                  this.moving = !0;
                  var e =
                    0 == this.ringStatus ? this.ringEndPos : this.ringStartPos;
                  (this.ringStatus = 0 == this.ringStatus ? 1 : 0),
                    cc
                      .tween(this.moveRingRB.node)
                      .to(this.moveSpeed, { position: e })
                      .call(function () {
                        (t.moving = !1),
                          1 == t.pMoveData.x &&
                            t.pMoveData.y == t.ringStatus &&
                            r.default.inst.playerRuning();
                      })
                      .start();
                }
              }),
              (e.prototype.openEvent = function () {
                var t = this;
                this.moveRingRB.onBeginContact = function (e, o, n) {
                  if (
                    t.moving &&
                    t.ringStatus == t.wallSite &&
                    n.body.type == cc.RigidBodyType.Dynamic
                  ) {
                    var i =
                        n.node.width > n.node.height
                          ? n.node.width
                          : n.node.height,
                      a = t.moveRingRB.node.y;
                    0 == t.ringStatus && a - i < 10
                      ? t.scheduleOnce(t.moveBack, 0)
                      : 1 == t.ringStatus &&
                        a + i > t.ringEndPos.y - 10 &&
                        t.scheduleOnce(t.moveBack, 0);
                  }
                };
              }),
              (e.prototype.moveBack = function () {
                var t = this;
                this.moveRingRB.node.stopAllActions(),
                  (this.moveRingRB.linearVelocity = cc.v2(0, 0));
                var e =
                  0 == this.ringStatus ? this.ringEndPos : this.ringStartPos;
                (this.ringStatus = 0 == this.ringStatus ? 1 : 0),
                  cc
                    .tween(this.moveRingRB.node)
                    .to(this.moveSpeed, { position: e })
                    .call(function () {
                      (t.moving = !1),
                        1 == t.pMoveData.x &&
                          t.pMoveData.y == t.ringStatus &&
                          r.default.inst.playerRuning();
                    })
                    .start();
              }),
              i([l(cc.RigidBody)], e.prototype, "moveRingRB", void 0),
              i(
                [l({ displayName: "\u79fb\u52a8\u901f\u5ea6" })],
                e.prototype,
                "moveSpeed",
                void 0
              ),
              i(
                [
                  l({
                    displayName: "\u79fb\u6746Y\u503c",
                    tooltip:
                      "0:25\u5f00\u7aef\uff0c1:\u8f68\u9053\u957f-25\u5c3e\u7aef",
                  }),
                ],
                e.prototype,
                "ringStatus",
                void 0
              ),
              i(
                [
                  l({
                    displayName: "\u5899\u4f4d\u7f6e",
                    tooltip:
                      "-1:\u6ca1\u5899,0:\u5899\u5728\u5f00\u7aef,1:\u5899\u5728\u5c3e\u7aef",
                  }),
                ],
                e.prototype,
                "wallSite",
                void 0
              ),
              i(
                [
                  l({
                    displayName:
                      "\u662f\u5426\u80fd\u8ba9\u4eba\u52a8,x:1-\u80fd,y:\u54ea\u7aef",
                  }),
                ],
                e.prototype,
                "pMoveData",
                void 0
              ),
              (e = i([c], e))
            );
          })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      {
        "../../common/SoundManager": "SoundManager",
        "../GamingManager": "GamingManager",
      },
    ],
    LevelSelectView: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e9718SHW65CZqRK8DN2snMk", "LevelSelectView");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../GameData"),
          r = t("../GlobalManager"),
          s = t("../PlatformCont"),
          c = cc._decorator,
          l = c.ccclass,
          u = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.popCont = null),
                (e.btnClose = null),
                (e.btnStart = null),
                (e.btnChatTurns = []),
                (e.chatName = null),
                (e.mapBg = null),
                (e.mapBgImgs = []),
                (e.mapItemImgs = []),
                (e.challGoods = []),
                (e.goodImgs = []),
                (e.currMapId = 0),
                (e.mapMax = 0),
                (e.mapItemBgs = []),
                (e.currGoodStatus = null),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.initPop = function () {
                var t = this;
                (this.mapMax = this.mapBgImgs.length),
                  this.mapBg.node.children.forEach(function (e, o) {
                    (t.mapItemBgs[o] = e.getComponent(cc.Sprite)),
                      e.on(
                        cc.Node.EventType.TOUCH_END,
                        t.tapItem.bind(t, o),
                        t
                      );
                  });
              }),
              (e.prototype.tapShowPop = function () {
                var t = this;
                YYGGamesUtil.showChapingAD(function () {
                  var e;
                  (t.popCont.scale = t.btnClose.scale = 0),
                    (e =
                      a.default.playerData.currLevelIndex >= a.default.levelMax
                        ? 0
                        : Math.floor(a.default.playerData.currLevelIndex / 9)),
                    t.showChatInfo(e),
                    t.setPageBtn(),
                    (t.node.active = !0),
                    t.showHideUI(t.popCont, !0, 0),
                    t.showHideUI(t.btnClose, !0, 0);
                });
              }),
              (e.prototype.tapHidePop = function () {
                var t = this;
                YYGGamesUtil.showChapingAD(function () {
                  t.node.children.forEach(function (t) {
                    t.pauseSystemEvents(!0);
                  }),
                    t.showHideUI(t.popCont, !1, 0, function () {
                      (t.node.active = !1),
                        t.node.children.forEach(function (t) {
                          t.resumeSystemEvents(!0);
                        });
                    });
                });
              }),
              (e.prototype.tapTurnPage = function (t, e) {
                var o = this,
                  n = !1,
                  i = this.currMapId,
                  a = !0;
                if (
                  (0 == e
                    ? i > 0 && (i--, (n = !0))
                    : (i < this.mapMax - 1 && (i++, (n = !0)),
                      this.currGoodStatus.forEach(function (t) {
                        -1 == t && (a = !1);
                      })),
                  n)
                )
                  if (1 != e || a) {
                    this.node.children.forEach(function (t) {
                      t.pauseSystemEvents(!0);
                    });
                    var s = function () {
                      o.node.children.forEach(function (t) {
                        t.resumeSystemEvents(!0);
                      });
                    };
                    this.showHideUI(this.popCont, !1, 0, function () {
                      o.showChatInfo(i), o.showHideUI(o.popCont, !0, 0, s);
                    });
                  } else
                    r.default.ins.showTooltips(
                      "Please collect the appropriate items to unlock the next chapter!"
                    );
              }),
              (e.prototype.showHideUI = function (t, e, o, n) {
                void 0 === o && (o = 0), void 0 === n && (n = null);
                var i = e ? 1 : 0,
                  a = e ? "backOut" : "backIn";
                cc.tween(t)
                  .delay(o)
                  .to(0.3, { scale: i }, { easing: a })
                  .call(function () {
                    n && n();
                  })
                  .start();
              }),
              (e.prototype.showChatInfo = function (t) {
                var e = this,
                  o = null;
                if (this.currMapId != t) {
                  (this.mapBg.spriteFrame = this.mapBgImgs[t]),
                    (this.currMapId = t);
                  var n = a.default.chapterInfo[t];
                  (this.chatName.string = n.nameChat),
                    (o = n.arrItemPos),
                    this.setPageBtn();
                }
                var i = 3 * t;
                (this.currGoodStatus = a.default.getChatGoodStatus(
                  this.currMapId
                )),
                  this.challGoods.forEach(function (t, o) {
                    var n = e.goodImgs[i + o],
                      a = n.getOriginalSize(),
                      r = a.width > a.height ? a.width : a.height;
                    (t.spriteFrame = n),
                      (t.node.scale = Math.floor((70 / r) * 100) / 100);
                    var s = 1 == e.currGoodStatus[o] ? "#FFFFFF" : "#000000";
                    t.node.color = new cc.Color().fromHEX(s);
                  }),
                  this.mapItemBgs.forEach(function (t, n) {
                    var i = n + 9 * e.currMapId,
                      r = a.default.getLevelStatus(i) ? 1 : 0;
                    a.default.checkIsCurrLevel(i) && (r = 2),
                      (t.spriteFrame = e.mapItemImgs[r]),
                      o && ((t.node.x = o[n][0]), (t.node.y = o[n][1]));
                  });
              }),
              (e.prototype.setPageBtn = function () {
                0 == this.currMapId && this.btnChatTurns[0].active
                  ? (this.btnChatTurns[0].active = !1)
                  : this.currMapId > 0 &&
                    !this.btnChatTurns[0].active &&
                    (this.btnChatTurns[0].active = !0),
                  this.currMapId == this.mapMax - 1 &&
                  this.btnChatTurns[1].active
                    ? (this.btnChatTurns[1].active = !1)
                    : this.currMapId < this.mapMax - 1 &&
                      !this.btnChatTurns[1].active &&
                      (this.btnChatTurns[1].active = !0);
              }),
              (e.prototype.tapItem = function (t) {
                var e = t + 9 * this.currMapId;
                a.default.getLevelStatus(e) || a.default.checkIsCurrLevel(e)
                  ? this.tapEnterGame(e)
                  : r.default.ins.showTooltips("This level is not cleared!");
              }),
              (e.prototype.tapEnterGame = function (t) {
                var e = this;
                YYGGamesUtil.showChapingAD(function () {
                  e.node.children.forEach(function (t) {
                    t.pauseSystemEvents(!0);
                  }),
                    r.default.ins.toolPersist.updateMoney(
                      a.default.gameCost,
                      cc.v2(0, 50),
                      function (o) {
                        e.node.children.forEach(function (t) {
                          t.resumeSystemEvents(!0);
                        }),
                          o &&
                            ((a.default.currLevel = t),
                            r.default.ins.loadingShow(),
                            r.default.ins.checkStage(a.default.currLevel),
                            r.default.ins.toolPersist.showHideItemMony(!1),
                            s.default.bannerControl(!1));
                      },
                      e
                    );
                });
              }),
              (e.prototype.tapStartGame = function () {
                var t = this;
                YYGGamesUtil.showChapingAD(function () {
                  t.node.children.forEach(function (t) {
                    t.pauseSystemEvents(!0);
                  }),
                    r.default.ins.toolPersist.updateMoney(
                      a.default.gameCost,
                      t.btnStart.getPosition(),
                      function (e) {
                        t.node.children.forEach(function (t) {
                          t.resumeSystemEvents(!0);
                        }),
                          e &&
                            ((a.default.currLevel =
                              a.default.playerData.currLevelIndex),
                            r.default.ins.loadingShow(),
                            r.default.ins.checkStage(a.default.currLevel),
                            r.default.ins.toolPersist.showHideItemMony(!1),
                            s.default.bannerControl(!1));
                      },
                      t
                    );
                });
              }),
              i([u(cc.Node)], e.prototype, "popCont", void 0),
              i([u(cc.Node)], e.prototype, "btnClose", void 0),
              i([u(cc.Node)], e.prototype, "btnStart", void 0),
              i([u([cc.Node])], e.prototype, "btnChatTurns", void 0),
              i([u(cc.Label)], e.prototype, "chatName", void 0),
              i([u(cc.Sprite)], e.prototype, "mapBg", void 0),
              i([u([cc.SpriteFrame])], e.prototype, "mapBgImgs", void 0),
              i([u([cc.SpriteFrame])], e.prototype, "mapItemImgs", void 0),
              i([u([cc.Sprite])], e.prototype, "challGoods", void 0),
              i([u([cc.SpriteFrame])], e.prototype, "goodImgs", void 0),
              (e = i([l], e))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "../GameData": "GameData",
        "../GlobalManager": "GlobalManager",
        "../PlatformCont": "PlatformCont",
      },
    ],
    LoadingBar: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "1a3e4BAcW9HXI8xVBoEzZIZ", "LoadingBar");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = cc._decorator,
          r = a.ccclass,
          s =
            (a.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return n(e, t), (e = i([r], e));
            })(cc.Component));
        (o.default = s), cc._RF.pop();
      },
      {},
    ],
    LoadingView: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f0411AivGdJZZe4GdEECQBI", "LoadingView");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("./GameData"),
          r = t("./PlatformCont"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          u = {
            appID: "Dungeon-Pin-Puzzle",
            channel: 5,
            gamedistributionId: "539bdceb0822464695d1ca3c14f7fcff",
            gamemonetizeId: "p9b1wpkh1xnv8ef33fu9smaltcvddner",
          },
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.platform = r.GamePlatform.none),
                (e.isOpenVideo = !0),
                (e.goldbar = null),
                (e.chest = null),
                (e.chestopen = null),
                (e.loadWidth = 300),
                (e.loadNum = 0),
                (e.loadPagNameArr = ["levelPic"]),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.goldbar.width = 60;
              }),
              (e.prototype.start = function () {
                var t = this;
                this.scheduleOnce(function () {
                  (r.default.gamePlatform = t.platform),
                    (t.loadNum = 1),
                    (t.goldbar.width = 360),
                    a.default.getPlayerdata(t.enterHome.bind(t));
                }, 0);
              }),
              (e.prototype.toLoadPackage = function (t) {
                var e = this;
                cc.loader.downloader.loadSubpackage(
                  t,
                  function (t) {
                    e.goldbar.width =
                      (t.progress / 100) *
                        (e.loadWidth + e.loadNum * e.loadWidth) +
                      60;
                  },
                  function (o) {
                    if (o) return console.error(o);
                    console.log(
                      "\u52a0\u8f7d" + t + "\u5206\u5305\u6210\u529f"
                    ),
                      e.loadNum++,
                      e.loadNum == e.loadPagNameArr.length
                        ? e.enterHome()
                        : e.toLoadPackage(e.loadPagNameArr[e.loadNum]);
                  }
                );
              }),
              (e.prototype.enterHome = function () {
                this.loadNum--,
                  console.log(this.loadNum),
                  0 == this.loadNum &&
                    ((this.chest.spriteFrame = this.chestopen),
                    YYGGamesUtil.bodyStyle(720, 1280),
                    YYGGamesUtil.init(
                      u,
                      function () {
                        cc.director.loadScene(a.ViewName.home);
                      },
                      function () {
                        cc.game.pause(), (YYGGames.audioEngine.pause = !0);
                      },
                      function () {
                        cc.game.resume(), (YYGGames.audioEngine.pause = !1);
                      }
                    ));
              }),
              i(
                [
                  l({
                    type: cc.Enum(r.GamePlatform),
                    displayName: "\u53d1\u5e03\u5e73\u53f0",
                  }),
                ],
                e.prototype,
                "platform",
                void 0
              ),
              i(
                [l({ displayName: "\u662f\u5426\u5f00\u89c6\u9891" })],
                e.prototype,
                "isOpenVideo",
                void 0
              ),
              i([l(cc.Node)], e.prototype, "goldbar", void 0),
              i([l(cc.Sprite)], e.prototype, "chest", void 0),
              i([l(cc.SpriteFrame)], e.prototype, "chestopen", void 0),
              (e = i([c], e))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      { "./GameData": "GameData", "./PlatformCont": "PlatformCont" },
    ],
    PlatformCont: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "2b062ex8b1IKKurQql2Njes", "PlatformCont");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a,
          r = t("./GameData");
        (function (t) {
          (t[(t.none = 0)] = "none"),
            (t[(t.wx = 1)] = "wx"),
            (t[(t.tt = 2)] = "tt"),
            (t[(t.qq = 3)] = "qq"),
            (t[(t.huawei = 4)] = "huawei"),
            (t[(t.vivo = 5)] = "vivo"),
            (t[(t.app = 6)] = "app");
        })((a = o.GamePlatform || (o.GamePlatform = {})));
        var s = cc._decorator,
          c = s.ccclass,
          l =
            (s.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              var o;
              return (
                n(e, t),
                (o = e),
                Object.defineProperty(e, "currSDK", {
                  get: function () {
                    if (!this._currsdk)
                      switch (this.gamePlatform) {
                        case a.wx:
                          this._currsdk = window.wx;
                          break;
                        case a.tt:
                          this._currsdk = window.tt;
                          break;
                        case a.qq:
                          this._currsdk = window.qq;
                          break;
                        case a.huawei:
                          this._currsdk = window.hbs;
                          break;
                        case a.vivo:
                          this._currsdk = window.qg;
                          break;
                        default:
                          this._currsdk = null;
                      }
                    return this._currsdk;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.platformInit = function (t, e) {
                  void 0 === e && (e = null),
                    (this.playVideo = t),
                    this.gamePlatform,
                    e && e();
                }),
                (e.getTimeToday = function () {}),
                (e.insertControl = function (t, e, o) {
                  void 0 === e && (e = 0), void 0 === o && (o = !1);
                }),
                (e.bannerControl = function (t) {}),
                (e.shareGame = function (t, e, o, n, i, a, r, s) {
                  void 0 === t && (t = 0),
                    void 0 === e && (e = ""),
                    void 0 === o && (o = null),
                    void 0 === n && (n = null),
                    void 0 === i && (i = !1),
                    void 0 === a && (a = !1),
                    void 0 === r && (r = !1),
                    void 0 === s && (s = -1),
                    this.gamePlatform,
                    cc.log(e),
                    n && o && o.call(n, !0);
                }),
                (e.openRewardVideo = function (t, e, o, n, i, a) {
                  if (
                    (void 0 === o && (o = null),
                    void 0 === n && (n = null),
                    void 0 === i && (i = 0),
                    void 0 === a && (a = -1),
                    this.playVideo)
                  ) {
                    this.gamePlatform,
                      o && (o(), console.log("\u6210\u529f\u83b7\u5f97" + e));
                  } else o && o();
                }),
                (e.sendSubscribeNews = function (t, e) {
                  console.log(
                    "\u6253\u5f00\u6d88\u606f\u8ba2\u9605\u754c\u9762"
                  ),
                    this.gamePlatform;
                }),
                Object.defineProperty(e, "groupRankData", {
                  set: function (t) {},
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.sendSubviewMess = function (t, e, o, n, i) {
                  void 0 === n && (n = ""), void 0 === i && (i = null);
                  o.node.getBoundingBoxToWorld();
                  return this.gamePlatform, !1;
                }),
                (e.getNetworkData = function (t, e, o) {
                  void 0 === o && (o = !0),
                    console.log("\u83b7\u53d6\u670d\u52a1\u5668\u6570\u636e");
                  this.gamePlatform, t.call(e, null, null);
                }),
                (e.saveNetworkData = function (t, e, o, n) {
                  void 0 === o && (o = -1),
                    void 0 === n && (n = -1),
                    this.isOpenCloud && this.gamePlatform;
                }),
                (e.setItemStorage = function (t, e) {
                  void 0 === e && (e = "");
                  var o = { key: e },
                    n = JSON.stringify(o);
                  this.gamePlatform, cc.sys.localStorage.setItem(t, n);
                }),
                (e.getItemStorage = function (t, e) {
                  var o;
                  return (
                    void 0 === e && (e = null),
                    (o = cc.sys.localStorage.getItem(t)),
                    console.error(o),
                    o && "" != o && null != o
                      ? JSON.parse(o, function (t, e) {
                          return e;
                        })
                      : e
                  );
                }),
                (e.removeItemStorage = function (t) {
                  this.gamePlatform, a.none, 0;
                }),
                (e.showWXToast = function (t, e) {
                  void 0 === e && (e = 0);
                }),
                (e.showModalInfo = function (t, e, o, n, i, r, s) {
                  switch (
                    (void 0 === o && (o = null),
                    void 0 === n && (n = null),
                    void 0 === i && (i = "\u786e\u5b9a"),
                    void 0 === r && (r = !0),
                    void 0 === s && (s = "\u53d6\u6d88"),
                    this.gamePlatform)
                  ) {
                    case a.none:
                    case a.app:
                      break;
                    default:
                      this.currSDK.showModal({
                        title: t,
                        content: e,
                        showCancel: r,
                        cancelText: s,
                        cancelColor: "#D3D0D0",
                        confirmText: i,
                        success: function (t) {
                          console.log("\u7528\u6237\u70b9\u51fb\u540e", t),
                            o &&
                              n &&
                              (t.confirm
                                ? o.call(n, !0)
                                : t.cancel && o.call(n, !1));
                        },
                      });
                  }
                }),
                (e.phoneVibrate = function (t) {
                  var e = this;
                  if (
                    this.isVibrate &&
                    this.gamePlatform != a.app &&
                    this.gamePlatform != a.none
                  ) {
                    var o = 15;
                    if (
                      this.gamePlatform == a.tt &&
                      ((o = 30), "devtools" == this.systemInfo.appName)
                    )
                      return;
                    var n = t / o;
                    this.currSDK.vibrateShort();
                    for (var i = cc.tween(this), r = 0; r < n; r++)
                      i.delay(0.016).call(function () {
                        e.currSDK.vibrateShort();
                      });
                    i.start();
                  }
                }),
                (e.compareVersion = function (t, e) {
                  (t = t.split(".")), (e = e.split("."));
                  for (var o = Math.max(t.length, e.length); t.length < o; )
                    t.push("0");
                  for (; e.length < o; ) e.push("0");
                  for (var n = 0; n < o; n++) {
                    var i = parseInt(t[n]),
                      a = parseInt(e[n]);
                    if (i > a) return 1;
                    if (i < a) return -1;
                  }
                  return 0;
                }),
                (e.sendHttpsNet = function (t, e, o) {
                  void 0 === o && (o = null);
                  var n = new XMLHttpRequest(),
                    i = !1,
                    a = new Promise(function (a, s) {
                      n.open(t, e),
                        (n.responseType = "json"),
                        (n.onreadystatechange = function () {
                          4 == this.readyState &&
                            (i
                              ? s(new Error("\u8bf7\u6c42\u8d85\u65f6"))
                              : (clearTimeout(r),
                                this.status >= 200 && this.status < 400
                                  ? a(this.response)
                                  : s(new Error(this.statusText))));
                        }),
                        "get" == t
                          ? n.send()
                          : (n.setRequestHeader(
                              "Content-Type",
                              "application/json"
                            ),
                            n.send(JSON.stringify(o)));
                    }),
                    r = setTimeout(function () {
                      (i = !0), n.abort();
                    }, this.timeout);
                  return a;
                }),
                (e.customAdControl = function (t, e) {
                  void 0 === e && (e = !1);
                }),
                (e.recordControl = function (t, e, o) {
                  void 0 === e && (e = null), void 0 === o && (o = null);
                }),
                (e.againGetData = function () {
                  (o.isAgainGetData = !0),
                    r.default.getPlayerdata(function () {
                      cc.director.loadScene(r.ViewName.home);
                    });
                }),
                (e.gamePlatform = a.wx),
                (e._currsdk = null),
                (e.systemInfo = null),
                (e.sdkVersion = null),
                (e.isIphoneX = !1),
                (e.playVideo = !0),
                (e.isLongSize = !1),
                (e.getMenuBtnLayt = { top: 120, right: 100 }),
                (e.shareData = [["", "", ""]]),
                (e.insertCount = 2),
                (e.showGroupRankFun = null),
                (e.rankEvent = {
                  showFriendRank: "showFriendRank",
                  shareToFriend: "shareToFriend",
                  close: "close",
                  showGroupRank: "showGroupRank",
                  beyonedFriend: "beyonedFriend",
                  clickShowOff: "clickShowOff",
                }),
                (e.isOpenCloud = !1),
                (e.isLoginSever = !1),
                (e.severUid = ""),
                (e.usedCloudData = !1),
                (e.gameSwitchs = {
                  againShare: !0,
                  energy: !0,
                  beyonedFriend: 1,
                  shareToFriend: 1,
                }),
                (e.isVibrate = !0),
                (e.timeout = 5e3),
                (e.isAgainGetData = !1),
                (e = o = i([c], e))
              );
            })(cc.Component));
        (o.default = l), cc._RF.pop();
      },
      { "./GameData": "GameData" },
    ],
    Random: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "b0a30xqbwdLrYQc55Wrhuzr", "Random"),
          Object.defineProperty(o, "__esModule", { value: !0 });
        var n = (function () {
          function t() {}
          return (
            (t.getRanNum = function (t, e) {
              return t + Math.random() * (e - t);
            }),
            (t.getIntegerRanNum = function (t, e) {
              return Math.floor(this.getRanNum(t, e));
            }),
            (t.getPlusOrMinus = function () {
              return Math.random() < 0.5 ? -1 : 1;
            }),
            t
          );
        })();
        (o.default = n), cc._RF.pop();
      },
      {},
    ],
    RewardPop: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "6fcceop8AJHfJWrsfuxg/WR", "RewardPop");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../common/SoundManager"),
          r = t("../GameData"),
          s = t("../GlobalManager"),
          c = cc._decorator,
          l = c.ccclass,
          u = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.popNewReward = null),
                (e.btnGetTwo = null),
                (e.btnGetOne = null),
                (e.rewardAni = null),
                (e.popGetGood = null),
                (e.goodImg = null),
                (e.btnCloseGood = null),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.showGetGood = function (t) {
                var e = this;
                (this.goodImg.spriteFrame = t.goodimg),
                  1 == t.chatid &&
                    1 == t.goodid &&
                    (this.goodImg.node.angle = -45),
                  (this.popNewReward.active = !1),
                  (this.popGetGood.scale = 0),
                  (this.popGetGood.active = this.node.active = !0),
                  r.default.setChatGoodStatus(t.chatid, t.goodid),
                  cc
                    .tween(this.popGetGood)
                    .to(0.3, { scale: 1 }, { easing: "backOut" })
                    .call(function () {
                      e.btnCloseGood.on(
                        cc.Node.EventType.TOUCH_END,
                        e.hidePop,
                        e
                      ),
                        e.btnCloseGood.on(
                          cc.Node.EventType.TOUCH_START,
                          a.default.ins.playClickEff,
                          e
                        );
                    })
                    .start();
              }),
              (e.prototype.showNewReward = function () {
                var t = this;
                (this.rewardAni.angle = 0),
                  (this.popGetGood.active = !1),
                  (this.popNewReward.scale = 0),
                  (this.popNewReward.active = this.node.active = !0),
                  s.default.ins.toolPersist.showHideItemMony(!1),
                  (r.default.playerData.isNewPlayer = !1),
                  cc
                    .tween(this.popNewReward)
                    .to(0.3, { scale: 1 }, { easing: "backOut" })
                    .call(function () {
                      t.btnGetOne.on(
                        cc.Node.EventType.TOUCH_END,
                        t.tapGetOne,
                        t
                      ),
                        t.btnGetTwo.on(
                          cc.Node.EventType.TOUCH_END,
                          t.tapGetTwo,
                          t
                        ),
                        t.btnGetOne.on(
                          cc.Node.EventType.TOUCH_START,
                          a.default.ins.playClickEff,
                          t
                        ),
                        t.btnGetTwo.on(
                          cc.Node.EventType.TOUCH_START,
                          a.default.ins.playClickEff,
                          t
                        );
                    })
                    .start(),
                  cc
                    .tween(this.rewardAni)
                    .delay(0.3)
                    .repeatForever(
                      cc
                        .tween()
                        .to(36, { angle: -360 })
                        .call(function () {
                          t.rewardAni.angle = 0;
                        })
                    )
                    .start(),
                  cc
                    .tween(this.btnGetTwo)
                    .delay(0.3)
                    .repeatForever(
                      cc
                        .tween()
                        .to(0.2, { scale: 1.3 })
                        .to(0.2, { scale: 1.1 })
                        .to(0.2, { scale: 1.3 })
                        .to(0.2, { scale: 1.1 })
                        .to(0.2, { scale: 1.3 })
                        .to(0.2, { scale: 1 })
                        .delay(1)
                    )
                    .start();
              }),
              (e.prototype.tapGetOne = function () {
                (this.btnGetTwo.active = this.btnGetOne.active = !1),
                  s.default.ins.toolPersist.updateMoney(
                    300,
                    this.btnGetOne.getPosition(),
                    this.hidePop,
                    this
                  ),
                  s.default.ins.showTooltips("Successfully get 300 Coins!");
              }),
              (e.prototype.tapGetTwo = function () {
                var t = this;
                YYGGamesUtil.showshipinAD(function () {
                  (t.btnGetTwo.active = t.btnGetOne.active = !1),
                    s.default.ins.toolPersist.updateMoney(
                      600,
                      t.btnGetTwo.getPosition(),
                      t.hidePop,
                      t
                    ),
                    s.default.ins.showTooltips("Successfully get 600 Coins!");
                });
              }),
              (e.prototype.hidePop = function () {
                var t = this;
                this.popNewReward.active &&
                  (this.rewardAni.stopAllActions(),
                  this.btnGetTwo.stopAllActions(),
                  this.btnGetOne.targetOff(this),
                  this.btnGetTwo.targetOff(this),
                  cc
                    .tween(this.popNewReward)
                    .to(0.3, { scale: 0 }, { easing: "backIn" })
                    .call(function () {
                      t.popNewReward.active = t.node.active = !1;
                    })
                    .start()),
                  this.popGetGood.active &&
                    (this.btnCloseGood.targetOff(this),
                    cc
                      .tween(this.popGetGood)
                      .to(0.3, { scale: 0 }, { easing: "backIn" })
                      .call(function () {
                        t.popGetGood.active = t.node.active = !1;
                      })
                      .start()),
                  (cc.director.getPhysicsManager().enabled = !0);
              }),
              i([u(cc.Node)], e.prototype, "popNewReward", void 0),
              i([u(cc.Node)], e.prototype, "btnGetTwo", void 0),
              i([u(cc.Node)], e.prototype, "btnGetOne", void 0),
              i([u(cc.Node)], e.prototype, "rewardAni", void 0),
              i([u(cc.Node)], e.prototype, "popGetGood", void 0),
              i([u(cc.Sprite)], e.prototype, "goodImg", void 0),
              i([u(cc.Node)], e.prototype, "btnCloseGood", void 0),
              (e = i([l], e))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "../GameData": "GameData",
        "../GlobalManager": "GlobalManager",
        "../common/SoundManager": "SoundManager",
      },
    ],
    RingBar: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "b574fR/1MRLCbPOgYFJHQ1J", "RingBar");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../common/SoundManager"),
          r = t("../GamingManager"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property,
          u = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.isLock = !1),
                (e.isExit = !1),
                (e.isMeet = !1),
                (e.isMove = !1),
                (e.isMoveMonster = !1),
                (e.pullRingRB = null),
                (e.lockHand = null),
                (e.picUnlock = null),
                (e.arrRing = null),
                (e.meetRing = !1),
                (e.isOpen = !1),
                e
              );
            }
            var o;
            return (
              n(e, t),
              (o = e),
              (e.prototype.onLoad = function () {
                this.arrRing = this.node.parent.children;
              }),
              (e.prototype.onDestroy = function () {
                this.node.stopAllActions(), this.unscheduleAllCallbacks();
              }),
              (e.prototype.start = function () {
                (this.pullRingRB.node.opacity = 255),
                  this.pullRingRB.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.tapPullOpen,
                    this
                  ),
                  this.pullRingRB.node.on(
                    cc.Node.EventType.TOUCH_START,
                    a.default.ins.playClickEff,
                    this
                  ),
                  (this.pullRingRB.node.getComponent(cc.Widget).enabled = !1);
              }),
              (e.prototype.unlock = function () {
                var t = this;
                this.isLock &&
                  ((this.lockHand.spriteFrame = this.picUnlock),
                  cc
                    .tween(this.lockHand.node)
                    .delay(0.3)
                    .by(0.5, { position: cc.v2(0, -100), opacity: -255 })
                    .call(function () {
                      t.isLock = !1;
                    })
                    .start());
              }),
              (e.prototype.tapPullOpen = function (t) {
                var e = this;
                if ((void 0 === t && (t = null), this.isLock && this.lockHand))
                  cc.tween(this.lockHand.node)
                    .by(0.2, { position: cc.v2(0, 20) })
                    .by(0.2, { position: cc.v2(0, -20) })
                    .by(0.2, { position: cc.v2(0, 20) })
                    .by(0.2, { position: cc.v2(0, -20) })
                    .start();
                else {
                  this.pullRingRB.node.targetOff(this);
                  var o = this.isMeet ? this.checkHasCollide() : 0;
                  0 == o
                    ? ((this.isOpen = !0),
                      r.default.inst.hideHandtipEff(),
                      cc
                        .tween(this.pullRingRB.node)
                        .to(0.5, { position: cc.v2(0, this.node.height - 80) })
                        .call(function () {
                          e.fallgoods();
                        })
                        .to(0.3, { opacity: 0 })
                        .call(function () {
                          r.default.inst.statisticsRing(),
                            e.isExit &&
                              ((e.pullRingRB.node.y = 0),
                              (e.pullRingRB.node.x = 0)),
                            e.isMove && r.default.inst.playerRuning(),
                            e.isMoveMonster && r.default.inst.monsterRuning();
                        })
                        .start())
                    : ((this.meetRing = !0),
                      cc
                        .tween(this.pullRingRB.node)
                        .to(0.2, { position: cc.v2(0, o) })
                        .by(0.2, { position: cc.v2(0, -40) })
                        .by(0.2, { position: cc.v2(0, 40) })
                        .by(0.2, { position: cc.v2(0, -40) })
                        .by(0.2, { position: cc.v2(0, 40) })
                        .to(0.2, { position: cc.v2(0, 0) })
                        .call(function () {
                          (e.meetRing = !1),
                            e.pullRingRB.node.on(
                              cc.Node.EventType.TOUCH_END,
                              e.tapPullOpen,
                              e
                            ),
                            e.pullRingRB.node.on(
                              cc.Node.EventType.TOUCH_START,
                              a.default.ins.playClickEff,
                              e
                            );
                        })
                        .start());
                }
              }),
              (e.prototype.checkHasCollide = function () {
                var t = this,
                  e = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                  n = this.node.convertToWorldSpaceAR(
                    cc.v2(0, this.node.height)
                  ),
                  i = 0;
                return (
                  this.arrRing.find(function (a, r) {
                    if (!a.getComponent(o).isOpen && a != t.node) {
                      var s = a.convertToWorldSpaceAR(cc.v2(0, 0)),
                        c = a.convertToWorldSpaceAR(cc.v2(0, -a.height)),
                        l = t.segmentsIntr(s, c, e, n);
                      if (l) return (i = t.node.convertToNodeSpaceAR(l).y), a;
                    }
                  }),
                  i
                );
              }),
              (e.prototype.segmentsIntr = function (t, e, o, n) {
                var i = (t.x - o.x) * (e.y - o.y) - (t.y - o.y) * (e.x - o.x),
                  a = (t.x - n.x) * (e.y - n.y) - (t.y - n.y) * (e.x - n.x);
                if (i * a >= 0) return !1;
                var r = (o.x - t.x) * (n.y - t.y) - (o.y - t.y) * (n.x - t.x);
                if (r * (r + i - a) >= 0) return !1;
                var s = r / (a - i),
                  c = s * (e.x - t.x),
                  l = s * (e.y - t.y);
                return cc.v2(t.x + c, t.y + l);
              }),
              (e.prototype.fallgoods = function () {
                this.isExit
                  ? this.pullRingRB.node
                      .getComponents(cc.PhysicsCollider)
                      .forEach(function (t) {
                        (t.sensor = !0), t.apply();
                      })
                  : ((this.pullRingRB.active = !1),
                    this.pullRingRB.node
                      .getComponents(cc.PhysicsCollider)
                      .forEach(function (t) {
                        t.enabled = !1;
                      }));
              }),
              i(
                [
                  l({
                    displayName:
                      "\u5728\u81ea\u52a8\u5f00\u542f\u72b6\u6001\u662f\u5426\u4e0a\u9501",
                  }),
                ],
                e.prototype,
                "isLock",
                void 0
              ),
              i(
                [l({ displayName: "\u662f\u5426\u662f\u51fa\u53e3" })],
                e.prototype,
                "isExit",
                void 0
              ),
              i(
                [l({ displayName: "\u662f\u5426\u80fd\u649e\u4e0a" })],
                e.prototype,
                "isMeet",
                void 0
              ),
              i(
                [
                  l({
                    displayName: "\u662f\u5426\u8ba9\u4eba\u548c\u602a\u52a8",
                  }),
                ],
                e.prototype,
                "isMove",
                void 0
              ),
              i(
                [l({ displayName: "\u662f\u5426\u53ea\u8ba9\u602a\u52a8" })],
                e.prototype,
                "isMoveMonster",
                void 0
              ),
              i([l(cc.RigidBody)], e.prototype, "pullRingRB", void 0),
              i([l(cc.Sprite)], e.prototype, "lockHand", void 0),
              i([l(cc.SpriteFrame)], e.prototype, "picUnlock", void 0),
              (e = o = i([c], e))
            );
          })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      {
        "../../common/SoundManager": "SoundManager",
        "../GamingManager": "GamingManager",
      },
    ],
    ShaderTime: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "671013Pg4FFapquIGTPPqt7", "ShaderTime");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = cc._decorator,
          r = a.ccclass,
          s = a.property,
          c = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e._material = null), (e._max = 1), (e._start = 0), e;
            }
            return (
              n(e, t),
              Object.defineProperty(e.prototype, "max", {
                get: function () {
                  return this._max;
                },
                set: function (t) {
                  this._max = t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.update = function (t) {
                (this._material = this.node
                  .getComponent(cc.Sprite)
                  .getMaterial(0)),
                  this.node.active && this._material && this._setShaderTime(t);
              }),
              (e.prototype._setShaderTime = function (t) {
                var e = this._start;
                e > this.max && (e = 0),
                  (e += 0.015),
                  this._material.setProperty("timeTest", e),
                  (this._start = e);
              }),
              i([s], e.prototype, "_max", void 0),
              i([s], e.prototype, "max", null),
              (e = i([r], e))
            );
          })(cc.Component);
        (o.default = c), cc._RF.pop();
      },
      {},
    ],
    SoundManager: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e8e41BlNRJGoIl3C1eE7Y8d", "SoundManager");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a,
          r = t("../GameData"),
          s = cc._decorator,
          c = s.ccclass,
          l = s.property;
        (function (t) {
          (t[(t.click = 0)] = "click"),
            (t[(t.death = 1)] = "death"),
            (t[(t.success = 2)] = "success"),
            (t[(t.fail = 3)] = "fail"),
            (t[(t.pickGood = 4)] = "pickGood"),
            (t[(t.getReward = 5)] = "getReward");
        })((a = o.SoundId || (o.SoundId = {})));
        var u = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.bgMusic = null), (e.musicArr = []), (e.bgAudioId = -1), e;
          }
          var o;
          return (
            n(e, t),
            (o = e),
            Object.defineProperty(e, "ins", {
              get: function () {
                return (
                  null == this._instance && (this._instance = new o()),
                  this._instance
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.onLoad = function () {
              (o._instance = this),
                cc.audioEngine.setMaxAudioInstance(24),
                "boolean" != typeof r.default.playerData.musicStatus &&
                  (r.default.playerData.musicStatus = !0),
                "boolean" != typeof r.default.playerData.soundStatus &&
                  (r.default.playerData.soundStatus = !0);
            }),
            (e.prototype.start = function () {
              this.playBgMusic(1);
            }),
            (e.prototype.playSoundEff = function (t, e) {
              void 0 === e && (e = 1),
                r.default.playerData.soundStatus &&
                  YYGGames.audioEngine.playSound(this.musicArr[t].url);
            }),
            (e.prototype.playBgMusic = function (t) {
              void 0 === t && (t = 1),
                r.default.playerData.musicStatus &&
                  YYGGames.audioEngine.playMusic(this.bgMusic.url);
            }),
            (e.prototype.stopBgMusic = function () {
              YYGGames.audioEngine.stopMusic();
            }),
            (e.prototype.playClickEff = function () {
              o.ins.playSoundEff(a.click);
            }),
            (e._instance = null),
            i([l({ type: cc.AudioClip })], e.prototype, "bgMusic", void 0),
            i([l({ type: [cc.AudioClip] })], e.prototype, "musicArr", void 0),
            (e = o = i([c], e))
          );
        })(cc.Component);
        (o.default = u), cc._RF.pop();
      },
      { "../GameData": "GameData" },
    ],
    StageLevel: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "27db14VNgFBPb2Z8hteattu", "StageLevel");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../GameData"),
          r = t("../GlobalManager"),
          s = t("./GamingManager"),
          c = t("./managers/GoodsManager"),
          l = t("./prbScr/LevelFluid"),
          u = t("./prbScr/LevelGood"),
          d = t("./prbScr/LevelMonster"),
          p = t("./prbScr/LevelQulver"),
          h = t("./prbScr/LevelRingMove"),
          f = t("./prbScr/RingBar"),
          y = cc._decorator,
          g = y.ccclass,
          v = y.property,
          m = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.isFluid = !1),
                (e.beginY = 0),
                (e.ringCont = null),
                (e.goodCont = null),
                (e.behindCont = null),
                (e.tipPassArr = []),
                (e.fluidCam = null),
                (e.nodeFluidArr = null),
                (e.exitRing = null),
                (e.ringArr = []),
                (e.monsterArr = []),
                (e.qulverArr = []),
                (e.ringNum = 0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                var t = this;
                this.ringCont.children.forEach(function (e, o) {
                  t.ringArr[o] = e;
                  var n = e.getComponent(f.default);
                  n && (t.ringNum++, n.isLock && (t.exitRing = n));
                });
                var e = !a.default.playerData.isNewPlayer;
                this.goodCont.children.forEach(function (o, n) {
                  var i = o.getComponent(d.default);
                  if (i) {
                    t.monsterArr.push(i);
                    var c = i.typeMonster + 1,
                      l = r.default.ins.getSkinDB(
                        c,
                        n,
                        s.default.inst.arrSkindbPrb[c + 1]
                      );
                    i.initMonster(l);
                  }
                  var p = o.getComponent(u.default);
                  p &&
                    (p.typeGood == a.GameGoods.chest && e
                      ? (o.active = !1)
                      : p.typeGood == a.GameGoods.collection &&
                        (s.default.inst.hasChallGood = !1));
                }),
                  this.behindCont &&
                    this.behindCont.children.forEach(function (e, o) {
                      t.qulverArr[o] = e.getComponent(p.default);
                    });
              }),
              (e.prototype.start = function () {}),
              (e.prototype.setElement = function (t) {
                this.isFluid &&
                  ((this.fluidCam = r.default.ins.getFluidAmbient(t)),
                  this.node.insertChild(
                    this.fluidCam.node,
                    this.node.children.indexOf(this.ringCont)
                  ),
                  (this.fluidCam.node.active = !0),
                  (this.nodeFluidArr = this.node.getComponentsInChildren(
                    l.default
                  )));
              }),
              (e.prototype.resetLevel = function () {
                this.nodeFluidArr &&
                  0 != this.nodeFluidArr.length &&
                  this.nodeFluidArr.forEach(function (t) {
                    t.reset();
                  }),
                  this.isFluid && this.fluidCam && this.fluidCam.closeCam(),
                  this.monsterArr.forEach(function (t) {
                    r.default.ins.recoveryDB(t.bobyMonster);
                  }),
                  0 != this.qulverArr.length &&
                    this.qulverArr.forEach(function (t) {
                      c.default.ins.resetQulver(t);
                    });
              }),
              (e.prototype.monsterMove = function () {
                this.monsterArr.forEach(function (t) {
                  t && 2 == t.monsterStatus && t.startRun();
                });
              }),
              (e.prototype.passTipEff = function () {
                if (0 != this.tipPassArr.length) {
                  for (
                    var t = cc.tween(this), e = 0;
                    e < this.tipPassArr.length;
                    e++
                  ) {
                    var o = this.tipPassArr[e],
                      n = this.ringArr[o.x].getComponent(f.default);
                    if (n) this.ringEff(e, n, o, t);
                    else {
                      var i = this.ringArr[o.x].getComponent(h.default);
                      this.ringMoveEff(e, i, o, t);
                    }
                  }
                  t.start();
                }
              }),
              (e.prototype.ringEff = function (t, e, o, n) {
                if (t == this.tipPassArr.length - 1) {
                  var i = e.node.convertToWorldSpaceAR(
                    cc.v2(0, (e.node.height / 2) * -1)
                  );
                  n.then(
                    cc
                      .tween()
                      .call(function () {
                        e.isOpen || s.default.inst.showHandtipEff(i),
                          cc.log("\u7b2c" + o.x);
                      })
                      .delay(o.y)
                  );
                } else
                  n.then(
                    cc
                      .tween()
                      .call(function () {
                        e.tapPullOpen(), cc.log("\u7b2c" + o.x);
                      })
                      .delay(o.y)
                  );
              }),
              (e.prototype.ringMoveEff = function (t, e, o, n) {
                if (t == this.tipPassArr.length - 1) {
                  var i = e.getTipsPos();
                  n.then(
                    cc
                      .tween()
                      .call(function () {
                        s.default.inst.showHandtipEff(i),
                          cc.log("\u7b2c" + o.x);
                      })
                      .delay(o.y + e.moveSpeed)
                  );
                } else
                  n.then(
                    cc
                      .tween()
                      .call(function () {
                        e.tapMove(), cc.log("\u7b2c" + o.x);
                      })
                      .delay(o.y + e.moveSpeed)
                  );
              }),
              i(
                [
                  v({
                    displayName:
                      "\u662f\u5426\u5f00\u542f\u6d41\u4f53\u73af\u5883",
                  }),
                ],
                e.prototype,
                "isFluid",
                void 0
              ),
              i(
                [
                  v({
                    displayName:
                      "\u4e3b\u89d2\u5f00\u573a\u524d\u540e\u7ad9\u4f4dY\u503c\u5dee",
                  }),
                ],
                e.prototype,
                "beginY",
                void 0
              ),
              i([v(cc.Node)], e.prototype, "ringCont", void 0),
              i([v(cc.Node)], e.prototype, "goodCont", void 0),
              i([v(cc.Node)], e.prototype, "behindCont", void 0),
              i(
                [
                  v({
                    type: [cc.Vec2],
                    tooltip:
                      "\u8fc7\u5173\u63d0\u793a\uff0c\u6309\u987a\u5e8f\u81ea\u52a8\u62c9\u5f00\uff0cx\u8868\u7b2c\u51e0\u6746\uff0cy\u8868\u5230\u62c9\u4e0b\u4e00\u6746\u7684\u79d2\u6570",
                  }),
                ],
                e.prototype,
                "tipPassArr",
                void 0
              ),
              (e = i([g], e))
            );
          })(cc.Component);
        (o.default = m), cc._RF.pop();
      },
      {
        "../GameData": "GameData",
        "../GlobalManager": "GlobalManager",
        "./GamingManager": "GamingManager",
        "./managers/GoodsManager": "GoodsManager",
        "./prbScr/LevelFluid": "LevelFluid",
        "./prbScr/LevelGood": "LevelGood",
        "./prbScr/LevelMonster": "LevelMonster",
        "./prbScr/LevelQulver": "LevelQulver",
        "./prbScr/LevelRingMove": "LevelRingMove",
        "./prbScr/RingBar": "RingBar",
      },
    ],
    ToolPersist: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "67c027avehKQJ/QPT94E5y7", "ToolPersist");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../GameData"),
          r = t("../GlobalManager"),
          s = t("../PlatformCont"),
          c = t("./SoundManager"),
          l = cc._decorator,
          u = l.ccclass,
          d = l.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.tipsCont = null),
                (e.tipsPrb = null),
                (e.barLoading = null),
                (e.loadtxt = null),
                (e.moneyItem = null),
                (e.moneyItemTxt = null),
                (e.popAddMoney = null),
                (e.popAMcont = null),
                (e.btnAMget = null),
                (e.btnAMnot = null),
                (e.aniUsedMoney = null),
                (e.usedMonylab = null),
                (e.addMonyCont = null),
                (e.spotNum = 0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                cc.game.addPersistRootNode(this.node),
                  (r.default.ins.toolPersist = this),
                  (this.poolTips = new cc.NodePool()),
                  (this.barLoading.active = !1),
                  (this.popAddMoney.active =
                    this.aniUsedMoney.active =
                    this.addMonyCont.active =
                      !1),
                  this.showHideItemMony(!0),
                  (this.moneyItem.getComponent(cc.Widget).top =
                    s.default.getMenuBtnLayt.top);
                for (var t = this.addMonyCont.children[0], e = 0; e < 9; e++) {
                  var o = cc.instantiate(t);
                  this.addMonyCont.addChild(o);
                }
                this.arrMoney = this.addMonyCont.children;
              }),
              (e.prototype.showHideItemMony = function (t) {
                (this.moneyItem.active = t),
                  t &&
                    (this.moneyItemTxt.string =
                      a.default.playerData.money + "");
              }),
              (e.prototype.updateMoney = function (t, e, o, n) {
                var i = this;
                if (
                  (void 0 === o && (o = null),
                  void 0 === n && (n = null),
                  t >= 0)
                ) {
                  this.addMoney(t);
                  var r = this.moneyItem.getPosition(),
                    s = Math.ceil(t / 20);
                  s > this.arrMoney.length && (s = this.arrMoney.length),
                    (this.addMonyCont.active = !0),
                    c.default.ins.playSoundEff(c.SoundId.getReward),
                    this.arrMoney.forEach(function (t, c) {
                      (t.scale = 0),
                        c < s &&
                          ((t.x = e.x),
                          (t.y = e.y),
                          cc
                            .tween(t)
                            .delay(0.1 * c)
                            .to(0.2, { scale: 1 }, { easing: "backOut" })
                            .to(0.3, { position: r })
                            .to(0.2, { scale: 0 }, { easing: "backIn" })
                            .call(function () {
                              c == s - 1 &&
                                ((i.moneyItemTxt.string =
                                  a.default.playerData.money + ""),
                                (i.addMonyCont.active = !1),
                                o && o.call(n, !0));
                            })
                            .start());
                    });
                } else {
                  var l = -1 * t;
                  a.default.playerData.money < l
                    ? (o && o.call(n, !1),
                      this.showAddMoneyPop(),
                      this.showPop("Coins less than " + l))
                    : (this.addMoney(t),
                      (this.moneyItemTxt.string =
                        a.default.playerData.money + ""),
                      (this.aniUsedMoney.x = e.x),
                      (this.aniUsedMoney.y = e.y),
                      (this.aniUsedMoney.opacity = 255),
                      (this.usedMonylab.string = "- " + l),
                      (this.aniUsedMoney.active = !0),
                      cc
                        .tween(this.aniUsedMoney)
                        .by(0.5, { position: cc.v2(0, 100), opacity: 255 })
                        .call(function () {
                          (i.aniUsedMoney.active = !1), o && o.call(n, !0);
                        })
                        .start());
                }
              }),
              (e.prototype.addMoney = function (t) {
                (a.default.playerData.money += t),
                  a.default.playerData.money < 0 &&
                    (a.default.playerData.money = 0),
                  a.default.savePlayerData();
              }),
              (e.prototype.showAddMoneyPop = function () {
                var t = this;
                this.popAddMoney.active ||
                  ((this.popAddMoney.active = !0),
                  (this.popAMcont.scale = 0),
                  cc
                    .tween(this.popAMcont)
                    .to(0.3, { scale: 1 }, { easing: "backOut" })
                    .call(function () {
                      t.btnAMnot.on(
                        cc.Node.EventType.TOUCH_END,
                        t.hideAddMoneyPop,
                        t
                      ),
                        t.btnAMnot.on(
                          cc.Node.EventType.TOUCH_START,
                          c.default.ins.playClickEff,
                          t
                        ),
                        t.btnAMget.on(
                          cc.Node.EventType.TOUCH_END,
                          t.tapGetMoney,
                          t
                        ),
                        t.btnAMget.on(
                          cc.Node.EventType.TOUCH_START,
                          c.default.ins.playClickEff,
                          t
                        );
                    })
                    .start(),
                  cc
                    .tween(this.btnAMget)
                    .delay(0.3)
                    .repeatForever(
                      cc
                        .tween()
                        .to(0.2, { scale: 1.3 })
                        .to(0.2, { scale: 1.1 })
                        .to(0.2, { scale: 1.3 })
                        .to(0.2, { scale: 1.1 })
                        .to(0.2, { scale: 1.3 })
                        .to(0.2, { scale: 1 })
                        .delay(1)
                    )
                    .start());
              }),
              (e.prototype.hideAddMoneyPop = function () {
                var t = this;
                YYGGamesUtil.showChapingAD(function () {
                  t.btnAMget.stopAllActions(),
                    t.btnAMget.targetOff(t),
                    t.btnAMnot.targetOff(t),
                    cc
                      .tween(t.popAMcont)
                      .to(0.3, { scale: 0 }, { easing: "backIn" })
                      .call(function () {
                        t.popAddMoney.active = !1;
                      })
                      .start();
                });
              }),
              (e.prototype.tapGetMoney = function () {
                var t = this;
                YYGGamesUtil.showshipinAD(function () {
                  t.updateMoney(300, cc.v2(0, 80)),
                    t.showPop("Successfully get 300 Coins!"),
                    t.btnAMget.stopAllActions(),
                    t.btnAMget.targetOff(t),
                    t.btnAMnot.targetOff(t),
                    cc
                      .tween(t.popAMcont)
                      .to(0.3, { scale: 0 }, { easing: "backIn" })
                      .call(function () {
                        t.popAddMoney.active = !1;
                      })
                      .start();
                });
              }),
              (e.prototype.showPop = function (t) {
                var e,
                  o = this;
                0 == this.poolTips.size()
                  ? ((e = cc.instantiate(this.tipsPrb)).active = !0)
                  : (e = this.poolTips.get()),
                  (e.y = 0),
                  (e.opacity = 0),
                  this.tipsCont.addChild(e);
                var n = e.getComponentInChildren(cc.Label);
                (n.string = t),
                  n._forceUpdateRenderData(),
                  (e.height = n.node.height / 0.8 + 30),
                  cc
                    .tween(e)
                    .to(0.3, { opacity: 255, position: cc.v2(0, 200) })
                    .delay(1)
                    .to(0.2, { opacity: 0 })
                    .call(function () {
                      o.poolTips.put(e);
                    })
                    .start();
              }),
              (e.prototype.showView = function () {
                console.log("\u663e\u793a\u52a0\u8f7d\u754c\u9762"),
                  (this.loadtxt.string = "Loading"),
                  (this.spotNum = 0),
                  (this.barLoading.opacity = 0),
                  (this.barLoading.active = !0),
                  this.schedule(this.addSpotEff, 0.8),
                  cc.tween(this.barLoading).to(0.3, { opacity: 255 }).start();
              }),
              (e.prototype.hideView = function () {
                var t = this;
                console.log("\u9690\u85cf\u52a0\u8f7d\u754c\u9762"),
                  this.unschedule(this.addSpotEff),
                  (this.loadtxt.string = "Entering..."),
                  cc
                    .tween(this.barLoading)
                    .to(0.3, { opacity: 0 })
                    .call(function () {
                      t.barLoading.active = !1;
                    })
                    .start();
              }),
              (e.prototype.addSpotEff = function () {
                this.spotNum++,
                  this.spotNum >= 4
                    ? ((this.spotNum = 0), (this.loadtxt.string = "Loading"))
                    : (this.loadtxt.string += " .");
              }),
              i([d(cc.Node)], e.prototype, "tipsCont", void 0),
              i([d(cc.Prefab)], e.prototype, "tipsPrb", void 0),
              i([d(cc.Node)], e.prototype, "barLoading", void 0),
              i([d(cc.Label)], e.prototype, "loadtxt", void 0),
              i([d(cc.Node)], e.prototype, "moneyItem", void 0),
              i([d(cc.Label)], e.prototype, "moneyItemTxt", void 0),
              i([d(cc.Node)], e.prototype, "popAddMoney", void 0),
              i([d(cc.Node)], e.prototype, "popAMcont", void 0),
              i([d(cc.Node)], e.prototype, "btnAMget", void 0),
              i([d(cc.Node)], e.prototype, "btnAMnot", void 0),
              i([d(cc.Node)], e.prototype, "aniUsedMoney", void 0),
              i([d(cc.Label)], e.prototype, "usedMonylab", void 0),
              i([d(cc.Node)], e.prototype, "addMonyCont", void 0),
              (e = i([u], e))
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {
        "../GameData": "GameData",
        "../GlobalManager": "GlobalManager",
        "../PlatformCont": "PlatformCont",
        "./SoundManager": "SoundManager",
      },
    ],
    Tooltips: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "1cbdfJemSFAhbsJu8nBfqbj", "Tooltips");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = cc._decorator,
          r = a.ccclass,
          s =
            (a.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return n(e, t), (e = i([r], e));
            })(cc.Component));
        (o.default = s), cc._RF.pop();
      },
      {},
    ],
    Toutiao: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "672d8fKAc1O+poOJDY2X7Sq", "Toutiao");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../PlatformCont"),
          r = cc._decorator,
          s = r.ccclass,
          c =
            (r.property,
            (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.systemInfo = null),
                  (e.SdkVersion = ""),
                  (e._tt = null),
                  (e.aloneScene = [""]),
                  (e.aloneQuery = [""]),
                  (e.iphoneArr = ["iPhone X", "iPhone 11"]),
                  (e.ttAppId = "ttf93f8f826607fdec02"),
                  (e.bannerAdunit = "3neo2nepj1t1095ji2"),
                  (e.videoAdunit = "4mi72ll0d2m76otb6m"),
                  (e.interstitialAdunit = "3ff01akgc5k67c27cd"),
                  (e.hasLogin = !1),
                  (e.loginCode = ""),
                  (e.ttanocode = ""),
                  (e.openId = ""),
                  (e.ttOpenId = ""),
                  (e.keySession = ""),
                  (e._scopeUserInfo = -1),
                  (e.rankCall = null),
                  (e.rankOpen = null),
                  (e.userInfo = null),
                  (e.interstitialAd = null),
                  (e.bannerAd = null),
                  (e.bannerStatus = !1),
                  (e.isPlayVideo = !1),
                  (e.videoAwardAd = null),
                  (e._recorder = null),
                  (e.recordStatus = 0),
                  (e.recordTimeArr = [0, 0]),
                  (e.videoPath = null),
                  (e.boxArr = [
                    { appId: "ttd873aece4749bdec", query: "", extraData: {} },
                    { appId: "tt7b860d3be4bdf26b", query: "", extraData: {} },
                    { appId: "tt49463ffbd67df2fa", query: "", extraData: {} },
                    { appId: "tt131a65a78c218151", query: "", extraData: {} },
                  ]),
                  e
                );
              }
              var o;
              return (
                n(e, t),
                (o = e),
                Object.defineProperty(e, "ins", {
                  get: function () {
                    return this._ins || (this._ins = new o()), this._ins;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.initTT = function (t) {
                  var e = this;
                  void 0 === t && (t = null),
                    (this._tt = a.default.currSDK),
                    (a.default.systemInfo = this.systemInfo =
                      this._tt.getSystemInfoSync()),
                    (a.default.sdkVersion = this.SdkVersion =
                      this.systemInfo.SDKVersion),
                    (a.default.isLongSize =
                      this.systemInfo.windowHeight /
                        this.systemInfo.windowWidth >
                      2);
                  var n = this.systemInfo.model;
                  this.iphoneArr.forEach(function (t) {
                    -1 != n.search(t) && (a.default.isIphoneX = !0);
                  });
                  var i = this._tt.getLaunchOptionsSync();
                  console.log("denglu", i),
                    this.aloneQuery.indexOf(i.query.save) > -1
                      ? (o.loginScene = i.query.save + "_" + i.scene)
                      : (o.loginScene = i.scene),
                    console.log("denglu ToutiaoSDK.loginScene ", o.loginScene),
                    this._tt.onShow(function (t) {
                      console.log("onShow", t), a.default.getTimeToday();
                    }),
                    this._tt.showShareMenu({}),
                    this._tt.onShareAppMessage(function (t) {
                      return {
                        title: a.default.shareData[0][0],
                        imageUrl: a.default.shareData[0][1],
                      };
                    });
                  var r = this._tt.getMenuButtonLayout(),
                    s = 720 / this.systemInfo.screenWidth;
                  (a.default.getMenuBtnLayt.top = r.bottom * s),
                    (a.default.getMenuBtnLayt.right =
                      (this.systemInfo.screenWidth - r.left) * s - 80),
                    this.toSignIn(
                      !1,
                      function (o) {
                        o ||
                          a.default.showWXToast(
                            "\u5f53\u524d\u4e3a\u6e38\u5ba2\u6a21\u5f0f"
                          ),
                          e.loginSever(t);
                      },
                      this
                    );
                }),
                (e.prototype.toSignIn = function (t, e, o) {
                  var n = this;
                  this._tt.login({
                    force: t,
                    success: function (t) {
                      console.log("\u767b\u5f55\u6210\u529f", t),
                        t.code && (n.loginCode = t.code),
                        t.anonymousCode && (n.ttanocode = t.anonymousCode),
                        (n.hasLogin = t.isLogin),
                        e.call(o, !0);
                    },
                    fail: function (t) {
                      console.log("\u767b\u5f55\u5931\u8d25", t), e.call(o, !1);
                    },
                  });
                }),
                (e.prototype.loginSever = function (t, e) {
                  if ((void 0 === e && (e = !0), a.default.isOpenCloud)) {
                    if ("" == this.ttAppId)
                      return (
                        console.log("\u53c2\u6570ttAppId\u4e3a\u7a7a"), void t()
                      );
                    if ("" == this.loginCode && "" == this.ttanocode)
                      return (
                        console.log(
                          "\u53c2\u6570loginCode\u548cttOpenId\u90fd\u4e3a\u7a7a"
                        ),
                        void t()
                      );
                    var o = this;
                    this._tt.request({
                      method: "POST",
                      data: {
                        cmd: "tt_login",
                        appid: o.ttAppId,
                        device_id: o.ttanocode,
                        code: o.loginCode,
                      },
                      success: function (n) {
                        200 == n.data.code
                          ? (console.log("tt_login\u6210\u529f", n),
                            (a.default.isLoginSever = !0),
                            (o.openId = n.data.data.openid),
                            (o.ttOpenId = n.data.data.device_openid),
                            (o.keySession = n.data.data.session_key))
                          : (console.log("tt_login\u5931\u8d25-1", n),
                            e &&
                              a.default.showWXToast(
                                "\u767b\u5f55\u5931\u8d25-1"
                              )),
                          t();
                      },
                      fail: function (o) {
                        console.log("tt_login\u5931\u8d25-2", o),
                          t(),
                          e &&
                            a.default.showWXToast("\u767b\u5f55\u5931\u8d25-1");
                      },
                    });
                  } else t();
                }),
                (e.prototype.loginAccount = function (t, e, n) {
                  if ((void 0 === n && (n = !0), "" == this.ttAppId))
                    return (
                      console.log("\u53c2\u6570ttAppId\u4e3a\u7a7a"),
                      void t.call(e, null)
                    );
                  if ("" == this.openId && "" == this.ttOpenId)
                    return (
                      console.log(
                        "\u53c2\u6570openId\u548cdevice_openid\u90fd\u4e3a\u7a7a"
                      ),
                      void t.call(e, null)
                    );
                  console.log("loginAccount------");
                  this._tt.request({
                    method: "POST",
                    data: {
                      cmd: "login_account",
                      appid: this.ttAppId,
                      openid: this.openId,
                      device_openid: this.ttOpenId,
                      scene: o.loginScene,
                      foo: this.systemInfo.appName,
                      session_key: this.keySession,
                    },
                    success: function (o) {
                      if (200 == o.data.code) {
                        console.log("login_account\u6210\u529f", o),
                          (a.default.severUid = o.data.data.uid);
                        var i = o.data.data.user_data;
                        t.call(e, i);
                      } else
                        console.log("login_account\u5931\u8d25-1", o),
                          t.call(e, null),
                          n &&
                            a.default.showWXToast("\u767b\u5f55\u5931\u8d25-2");
                    },
                    fail: function (o) {
                      console.log("login_account\u5931\u8d25-2", o),
                        t.call(e, null),
                        n &&
                          a.default.showWXToast("\u767b\u5f55\u5931\u8d25-2");
                    },
                  });
                }),
                (e.prototype.severSaveData = function (t, e) {
                  if ((void 0 === e && (e = null), "" != a.default.severUid)) {
                    this._tt.request({
                      method: "POST",
                      data: {
                        cmd: "save_user_data",
                        uid: a.default.severUid,
                        user_data: t,
                        appid: this.ttAppId,
                        scene: o.loginScene,
                      },
                      success: function (t) {
                        console.log(
                          "\u4fdd\u5b58\u4fe1\u606f\u5230\u670d\u52a1\u5668\u6210\u529f",
                          t.data
                        ),
                          200 != t.data.code && e && e();
                      },
                      fail: function (t) {
                        console.log(
                          "\u4fdd\u5b58\u4fe1\u606f\u5230\u670d\u52a1\u5668\u5931\u8d25",
                          t
                        ),
                          e && e();
                      },
                    });
                  } else
                    console.log(
                      "severUid\u4e3a\u7a7a\uff0c\u4e0d\u80fd\u4e0a\u62a5"
                    );
                }),
                (e.prototype.openSubNews = function () {
                  -1 !== a.default.compareVersion(this.SdkVersion, "1.73.0") &&
                    this._tt.requestSubscribeMessage &&
                    this._tt.requestSubscribeMessage({
                      tmplIds: [o.newsTemplateId],
                      success: function (t) {
                        console.log("success", JSON.stringify(t)),
                          "accept" == t[o.newsTemplateId] &&
                            (console.log("\u540c\u610f\u8ba2\u9605"),
                            o.ins.sendSubscribe());
                      },
                      fail: function (t) {
                        console.log("fail", t);
                      },
                    });
                }),
                (e.prototype.sendSubscribe = function () {
                  if ("" != this.openId || "" != this.ttOpenId) {
                    var t = "" != this.openId ? this.openId : this.ttOpenId,
                      e = Date.now();
                    this._tt.request({
                      method: "POST",
                      data: {
                        cmd: "subscribe_msg",
                        openid: t,
                        platform: "tt",
                        appid: this.ttAppId,
                        template_id: o.newsTemplateId,
                        time_stamp: e,
                      },
                      success: function (t) {
                        console.log(
                          "\u4e0a\u62a5\u8ba2\u9605\u65f6\u95f4\u6210\u529f",
                          JSON.stringify(t.data)
                        );
                      },
                      fail: function (t) {
                        console.log(
                          "\u4e0a\u62a5\u8ba2\u9605\u65f6\u95f4\u5931\u8d25",
                          JSON.stringify(t)
                        );
                      },
                    });
                  } else
                    console.log(
                      "\u53c2\u6570openId\u548cdevice_openid\u90fd\u4e3a\u7a7a"
                    );
                }),
                (e.prototype.sendAdTrack = function (t) {
                  if ("" != a.default.severUid) {
                    this._tt.request({
                      method: "POST",
                      data: {
                        type: "track_ad",
                        appid: this.ttAppId,
                        uid: a.default.severUid,
                        foo: this.systemInfo.appName,
                        ad_name: t,
                      },
                      success: function (t) {
                        console.log(
                          "\u5e7f\u544a\u6253\u70b9\u6210\u529f",
                          t.data
                        );
                      },
                      fail: function (t) {
                        console.log("\u5e7f\u544a\u6253\u70b9\u5931\u8d25", t);
                      },
                    });
                  } else
                    console.log(
                      "severUid\u4e3a\u7a7a\uff0c\u4e0d\u80fd\u4e0a\u62a5"
                    );
                }),
                (e.prototype.checkLogin = function () {
                  this.hasLogin
                    ? this.getUserSetting()
                    : this.toSignIn(
                        !0,
                        function (t) {
                          t
                            ? o.ins.loginSever(function () {
                                a.default.againGetData();
                              })
                            : a.default.showWXToast(
                                "\u6392\u884c\u5f00\u542f\u5931\u8d25,\u8bf7\u91cd\u8bd5"
                              );
                        },
                        this
                      );
                }),
                (e.prototype.getUserSetting = function () {
                  var t = this;
                  this._tt.getSetting({
                    success: function (e) {
                      console.log("\u6388\u6743\u60c5\u51b5", e.authSetting),
                        null != e.authSetting["scope.userInfo"] &&
                          (t._scopeUserInfo =
                            !0 === e.authSetting["scope.userInfo"] ? 1 : 2),
                        t.getScopeUser();
                    },
                  });
                }),
                (e.prototype.getScopeUser = function () {
                  var t = this;
                  t._tt.setUserGroup({ groupId: "star_group" }),
                    console.log(this._scopeUserInfo),
                    -1 == this._scopeUserInfo
                      ? this._tt.authorize({
                          scope: "scope.userInfo",
                          success: function () {
                            (t._scopeUserInfo = 1), t.getUserInfo();
                          },
                          fail: function (t) {
                            console.log(
                              "\u6388\u6743\u5f39\u7a97\u5931\u8d25",
                              t
                            ),
                              a.default.showWXToast(
                                "\u6392\u884c\u5f00\u542f\u5931\u8d25,\u8bf7\u5230\u8bbe\u7f6e\u540c\u610f\u4fe1\u606f\u6388\u6743"
                              );
                          },
                        })
                      : 2 == this._scopeUserInfo
                      ? this._tt.showModal({
                          title: "\u6388\u6743\u63d0\u793a",
                          content:
                            "\u662f\u5426\u6253\u5f00\u8bbe\u7f6e\uff0c\u5f00\u542f\u7528\u6237\u4fe1\u606f\u540c\u610f\u6388\u6743\uff1f",
                          success: function (e) {
                            e.confirm
                              ? (console.log("confirm, continued"),
                                t._tt.openSetting({}))
                              : e.cancel
                              ? (console.log("cancel, cold"),
                                a.default.showWXToast(
                                  "\u6392\u884c\u5f00\u542f\u5931\u8d25,\u8bf7\u5230\u8bbe\u7f6e\u540c\u610f\u4fe1\u606f\u6388\u6743"
                                ))
                              : a.default.showWXToast(
                                  "\u6392\u884c\u5f00\u542f\u5931\u8d25,\u8bf7\u5230\u8bbe\u7f6e\u540c\u610f\u4fe1\u606f\u6388\u6743"
                                );
                          },
                          fail: function (t) {
                            console.log("showModal\u8c03\u7528\u5931\u8d25", t),
                              a.default.showWXToast(
                                "\u6392\u884c\u5f00\u542f\u5931\u8d25,\u91cd\u8bd5\u4e00\u4e0b"
                              );
                          },
                        })
                      : t.getUserInfo();
                }),
                (e.prototype.getUserInfo = function () {
                  var t = this;
                  this._tt.getUserInfo({
                    success: function (e) {
                      console.log(
                        "getUserInfo \u8c03\u7528\u6210\u529f",
                        e.userInfo
                      ),
                        (t.userInfo = e.userInfo),
                        t.rankOpen && t.rankOpen.call(t.rankCall);
                    },
                    fail: function (t) {
                      console.log(
                        "getUserInfo \u8c03\u7528\u5931\u8d25",
                        t.errMsg
                      ),
                        a.default.showWXToast(
                          "\u6392\u884c\u5f00\u542f\u5931\u8d25,\u8bf7\u5230\u8bbe\u7f6e\u540c\u610f\u4fe1\u606f\u6388\u6743"
                        );
                    },
                  });
                }),
                (e.prototype.openDataPostMess = function (t, e, o, n, i) {
                  if (
                    (void 0 === i && (i = ""),
                    -1 ==
                      a.default.compareVersion(a.default.sdkVersion, "1.9.92"))
                  )
                    return !1;
                  return (
                    this._tt
                      .getOpenDataContext()
                      .postMessage({
                        event: t,
                        levelIndex: e,
                        box: o,
                        winSize: n,
                        ticketShare: i,
                        switchs: { beyonedFriend: !1, shareToFriend: !1 },
                        infoUser: this.userInfo,
                      }),
                    !0
                  );
                }),
                (e.prototype.showOfficialHomepage = function () {
                  this._tt.openAwemeUserProfile(),
                    console.log("\u6253\u5f00\u4e2a\u4eba\u4e3b\u9875");
                }),
                (e.prototype.ShareTT = function (t, e, o, n) {
                  var i, r;
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === e && (e = ""),
                    void 0 === o && (o = null),
                    void 0 === n && (n = null),
                    -1 == t && a.default.shareData.length > 1)
                  ) {
                    var s = Math.floor(
                      Math.random() * a.default.shareData.length
                    );
                    (i = a.default.shareData[s][0]),
                      (r = a.default.shareData[s][1]);
                  } else
                    (i = "" == e ? a.default.shareData[t][0] : e),
                      (r = a.default.shareData[t][1]);
                  this._tt.shareAppMessage({
                    title: i,
                    imageUrl: r,
                    query: "",
                    success: function () {
                      console.log("\u5206\u4eab\u6210\u529f"),
                        o && o.call(n, !0);
                    },
                    fail: function (t) {
                      console.log("\u5206\u4eab\u5931\u8d25"),
                        o && o.call(n, !1);
                    },
                  });
                }),
                (e.prototype.showInterstitialAd = function () {
                  if (
                    "" != this.interstitialAdunit &&
                    null != this.interstitialAdunit
                  )
                    if (
                      -1 !==
                        a.default.compareVersion(this.SdkVersion, "1.71.0") &&
                      "devtools" != this.systemInfo.appName
                    ) {
                      this.interstitialAd &&
                        (this.interstitialAd.destroy(),
                        (this.interstitialAd = null));
                      (this.interstitialAd = this._tt.createInterstitialAd({
                        adUnitId: this.interstitialAdunit,
                      })),
                        this.interstitialAd.show().catch(function (t) {
                          console.log(" \u63d2\u5c4ferr", t);
                        });
                    } else
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793a\u63d2\u5c4f"
                      );
                  else
                    console.log(
                      "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793a\u63d2\u5c4f"
                    );
                }),
                (e.prototype.showBannerAd = function () {
                  if (null != this.bannerAdunit && "" != this.bannerAdunit)
                    if (
                      -1 !== a.default.compareVersion(this.SdkVersion, "1.3.0")
                    )
                      if (
                        (console.log("\u663e\u793abanner\u5e7f\u544a"),
                        null == this.bannerAd)
                      ) {
                        var t = this,
                          e = this.systemInfo.windowWidth,
                          o = this.systemInfo.windowHeight,
                          n = !1;
                        (this.bannerAd = this._tt.createBannerAd({
                          adUnitId: t.bannerAdunit,
                          style: { top: 0, width: 620 },
                        })),
                          this.bannerAd.onResize(function (i) {
                            !n &&
                              i.height > 0 &&
                              ((n = !0),
                              (t.bannerAd.style.top = a.default.isIphoneX
                                ? o - i.height - 10
                                : o - i.height),
                              (t.bannerAd.style.left = (e - i.width) >> 1));
                          }),
                          this.bannerAd.onError(function (e) {
                            console.log("banner\u52a0\u8f7derror", e),
                              t.bannerAd.destroy(),
                              (t.bannerAd = null);
                          }),
                          this.bannerAd.onLoad(function () {
                            (t.bannerStatus = !0),
                              t.bannerAd.show().catch(function (e) {
                                console.log("banner\u663e\u793aerror", e),
                                  t.bannerAd.destroy(),
                                  (t.bannerAd = null),
                                  (t.bannerStatus = !1);
                              });
                          });
                      } else
                        this.bannerStatus ||
                          (this.bannerAd.show(), (this.bannerStatus = !0));
                    else
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793abanner"
                      );
                  else
                    console.log(
                      "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793abanner"
                    );
                }),
                (e.prototype.hideBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    this.bannerAd &&
                      (this.bannerAd.hide(),
                      (this.bannerStatus = !1),
                      console.log("\u9690\u85cfbanner\u5e7f\u544a", t),
                      t && (this.bannerAd.destroy(), (this.bannerAd = null)));
                }),
                (e.prototype.playAwardVideo = function (t, e, n, i) {
                  if (
                    (void 0 === e && (e = null),
                    void 0 === n && (n = null),
                    void 0 === i && (i = ""),
                    null == this.videoAdunit || "" == this.videoAdunit)
                  )
                    return (
                      console.log(
                        "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793abanner"
                      ),
                      void n.call(e, !1)
                    );
                  if (-1 === a.default.compareVersion(this.SdkVersion, "1.3.0"))
                    return (
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793abanner"
                      ),
                      void n.call(e, !1)
                    );
                  if (!this.isPlayVideo) {
                    (this.isPlayVideo = !0),
                      e && (o.videoCall = e),
                      n && (o.videoCallfun = n),
                      (o.videoInfo = i),
                      (o.tipShow = t);
                    var r = this,
                      s = !1,
                      c = this._tt.createRewardedVideoAd({
                        adUnitId: r.videoAdunit,
                      });
                    c.load()
                      .then(function () {
                        1 == o.ins.recordStatus &&
                          (o.ins.pauseRecord(), (s = !0)),
                          c.show(),
                          console.log(c);
                      })
                      .catch(function (t) {
                        (r.isPlayVideo = !1),
                          console.log(
                            "\u89c6\u9891\u52a0\u8f7d\u663e\u793a\u5931\u8d25",
                            t
                          ),
                          c.offClose(u),
                          o.videoCallfun &&
                            o.videoCallfun.call(o.videoCall, !1);
                      });
                    var l = function (e) {
                        e
                          ? o.ins.playAwardVideo(t, null, null, i)
                          : o.videoCallfun &&
                            o.videoCallfun.call(o.videoCall, !1);
                      },
                      u = function (t) {
                        (r.isPlayVideo = !1),
                          c &&
                            (c.offClose(u),
                            s && o.ins.resumeRecord(),
                            t && t.isEnded
                              ? (console.log(
                                  "\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"
                                ),
                                o.videoCallfun &&
                                  o.videoCallfun.call(o.videoCall, !0))
                              : (console.log(
                                  "\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"
                                ),
                                o.tipShow
                                  ? a.default.showModalInfo(
                                      "\u5b8c\u6574\u89c2\u770b\u89c6\u9891\u53ef\u83b7\u5f97",
                                      o.videoInfo,
                                      l,
                                      o.videoCall,
                                      "\u7ee7\u7eed\u9886\u53d6",
                                      !0,
                                      "\u653e\u5f03\u5956\u52b1"
                                    )
                                  : o.videoCallfun &&
                                    o.videoCallfun.call(o.videoCall, !1)));
                      };
                    c.onClose(u),
                      c.onError(function (t) {
                        (r.isPlayVideo = !1),
                          c.offClose(u),
                          a.default.showWXToast(
                            "\u6682\u65f6\u6ca1\u6709\u89c6\u9891\uff01"
                          ),
                          o.videoCallfun &&
                            o.videoCallfun.call(o.videoCall, !1);
                      });
                  }
                }),
                (e.prototype.recordInit = function () {
                  (this._recorder = this._tt.getGameRecorderManager()),
                    this._recorder.onError(function (t) {
                      console.log("\u5f55\u5c4f\u9519\u8bef");
                    }),
                    this._recorder.onInterruptionBegin(function (t) {
                      console.log(
                        "\u76d1\u542c\u5f55\u5c4f\u4e2d\u65ad\u5f00\u59cb"
                      );
                    }),
                    this._recorder.onInterruptionEnd(function (t) {
                      console.log(
                        "\u76d1\u542c\u5f55\u5c4f\u4e2d\u65ad\u7ed3\u675f"
                      );
                    });
                }),
                (e.prototype.startRecord = function (t) {}),
                (e.prototype.stopRecord = function (t, e) {
                  var o = this;
                  void 0 === t && (t = null),
                    void 0 === e && (e = null),
                    this._recorder &&
                      1 == this.recordStatus &&
                      ((this.recordStatus = 2),
                      (this.recordTimeArr[1] = Date.now()),
                      this._recorder.onStop(function (n) {
                        console.log(
                          "\u83b7\u53d6\u89c6\u9891\u5730\u5740",
                          n.videoPath
                        ),
                          (o.videoPath = n.videoPath),
                          (o.recordStatus = 3),
                          null != t && t(o.videoPath, o.recordTimeArr),
                          o._recorder.clipVideo({
                            path: n.videoPath,
                            success: function (t) {
                              null != e && e(t.videoPath);
                            },
                          });
                      }),
                      this._recorder.stop(),
                      console.log("\u505c\u6b62\u5f55\u5c4f"));
                }),
                (e.prototype.pauseRecord = function () {
                  var t = this;
                  console.log("\u6682\u505c", this.recordStatus),
                    this._recorder &&
                      2 != this.recordStatus &&
                      3 != this.recordStatus &&
                      (this._recorder.onPause(function (e) {
                        (t.recordStatus = 4),
                          console.log("\u5f55\u5c4f\u6682\u505c");
                      }),
                      this._recorder.pause());
                }),
                (e.prototype.resumeRecord = function () {
                  var t = this;
                  console.log("\u7ee7\u7eed", this.recordStatus),
                    this._recorder &&
                      4 == this.recordStatus &&
                      (this._recorder.onResume(function (e) {
                        (t.recordStatus = 1),
                          console.log("\u5f55\u5c4f\u7ee7\u7eed");
                      }),
                      this._recorder.resume());
                }),
                (e.prototype.shareAppVid = function (t, e, o, n, i) {
                  if (
                    (void 0 === t && (t = ""),
                    void 0 === o && (o = !1),
                    void 0 === n && (n = null),
                    void 0 === i && (i = null),
                    0 != e[0] && 0 != e[1])
                  ) {
                    var r = (e[1] - e[0]) / 1e3;
                    if ((console.log("\u5f55\u5c4f\u65f6\u957f", r), r < 5))
                      return void a.default.showWXToast(
                        "\u65f6\u957f\u4e0d\u8db35\u79d2,\u65e0\u6cd5\u5206\u4eab"
                      );
                  }
                  this._tt.shareAppMessage({
                    channel: "video",
                    title:
                      "\u7279\u5de5\u89e3\u5bc6\uff0c\u8d62\u5728\u601d\u7ef4\uff0c\u89e3\u9501\u95ef\u5173\uff01",
                    desc: "\u89e3\u8c1c\u9003\u8131\u5927\u4f5c\u6218\uff0c\u963b\u6b62\u4e27\u5c38\uff0c\u963b\u6b62\u53d8\u5f02\u3002",
                    extra: {
                      videoPath: t,
                      createChallenge: o,
                      videoTopics: [
                        "\u7279\u5de5\u89e3\u8c1c",
                        "\u6296\u97f3\u5c0f\u6e38\u620f",
                      ],
                      hashtag_list: [
                        "\u7279\u5de5\u89e3\u8c1c",
                        "\u6296\u97f3\u5c0f\u6e38\u620f",
                      ],
                      video_title:
                        "\u8d62\u5728\u601d\u7ef4\uff0c\u89e3\u8c1c\u5927\u6311\u6218\uff01",
                    },
                    fail: function (t) {
                      console.log("\u5206\u4eab\u5f55\u5c4f\u5931\u8d25", t),
                        -1 != t.errMsg.indexOf("cancel") && n && i
                          ? i.call(n, 1)
                          : i.call(n, 2);
                    },
                    success: function (t) {
                      n && i && i.call(n, 0);
                    },
                  });
                }),
                (e.prototype.isSdkVersion = function (t) {
                  return a.default.compareVersion(this.SdkVersion, t) >= 0;
                }),
                (e.prototype.checkShowMoreBox = function () {
                  return !(
                    "ios" == this.systemInfo.platform ||
                    !this.isSdkVersion("1.33.0") ||
                    "Toutiao" !== this.systemInfo.appName
                  );
                }),
                (e.prototype.showMoreBox = function () {
                  this._tt.showMoreGamesModal({
                    appLaunchOptions: this.boxArr,
                    success: function (t) {
                      console.log("success", t.errMsg);
                    },
                    fail: function (t) {
                      console.log("fail", t.errMsg);
                    },
                  });
                }),
                (e.newsTemplateId = ""),
                (e.loginScene = ""),
                (e.videoCall = null),
                (e.videoCallfun = null),
                (e.videoInfo = ""),
                (e.tipShow = !1),
                (e = o = i([s], e))
              );
            })(cc.Component));
        (o.default = c), cc._RF.pop();
      },
      { "../PlatformCont": "PlatformCont" },
    ],
    WaterCamera: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fcf81QaIe5Oy6Rg9lW1hVDX", "WaterCamera");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = cc._decorator,
          r = a.ccclass,
          s = a.property,
          c = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.waterCam = null),
                (e.water_show = null),
                (e.magmaCam = null),
                (e.magma_show = null),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.init = function () {
                var t = new cc.RenderTexture();
                t.initWithSize(cc.winSize.width, cc.winSize.height),
                  (this.water_show.node.width = cc.winSize.width),
                  (this.water_show.node.height = cc.winSize.height);
                var e = new cc.SpriteFrame();
                e.setTexture(t),
                  (this.waterCam.targetTexture = t),
                  (this.water_show.spriteFrame = e);
                var o = new cc.RenderTexture();
                o.initWithSize(cc.winSize.width, cc.winSize.height),
                  (this.magma_show.node.width = cc.winSize.width),
                  (this.magma_show.node.height = cc.winSize.height);
                var n = new cc.SpriteFrame();
                n.setTexture(o),
                  (this.magmaCam.targetTexture = o),
                  (this.magma_show.spriteFrame = n);
              }),
              (e.prototype.closeCam = function () {
                (this.node.active = !1), (this.node.parent = null);
              }),
              i([s(cc.Camera)], e.prototype, "waterCam", void 0),
              i([s(cc.Mask)], e.prototype, "water_show", void 0),
              i([s(cc.Camera)], e.prototype, "magmaCam", void 0),
              i([s(cc.Mask)], e.prototype, "magma_show", void 0),
              (e = i([r], e))
            );
          })(cc.Component);
        (o.default = c), cc._RF.pop();
      },
      {},
    ],
    Water: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "39d040Bh0NEdKTMO2T4viGJ", "Water");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../../GameData"),
          r = t("../GamingManager"),
          s = t("./LevelFluid"),
          c = cc._decorator,
          l = c.ccclass,
          u = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.sp = null),
                (e.rigidBody = null),
                (e.typeFluid = a.FulidType.none),
                (e.HasEectric = !1),
                (e.areaFulid = null),
                (e.firePrb = null),
                e
              );
            }
            var o;
            return (
              n(e, t),
              (o = e),
              (e.prototype.init = function () {}),
              (e.prototype.setSF = function (t) {
                t && (this.sp.spriteFrame = t);
              }),
              (e.prototype.sleep = function () {
                this.node.setPosition(cc.v2(-720, 1280)),
                  this.unscheduleAllCallbacks(),
                  (this.firePrb = null),
                  (this.typeFluid = a.FulidType.none),
                  (this.HasEectric = !1),
                  (this.rigidBody.linearVelocity = cc.v2(0, 0)),
                  (this.rigidBody.type = cc.RigidBodyType.Static),
                  (this.rigidBody.enabledContactListener = !1);
              }),
              (e.prototype.reset = function (t, e, o, n, i) {
                (this.typeFluid = t),
                  (this.node.group = e.group),
                  (this.areaFulid = e.getComponent(s.default)),
                  t == a.FulidType.magma || this.areaFulid.isEectric
                    ? (this.rigidBody.enabledContactListener = !0)
                    : (this.rigidBody.enabledContactListener = !1),
                  (this.firePrb = i),
                  (this.sp.spriteFrame = n),
                  e.addChild(this.node),
                  this.node.setPosition(o),
                  (this.rigidBody.type = cc.RigidBodyType.Dynamic),
                  (this.rigidBody.linearVelocity = cc.v2(0, -320));
              }),
              (e.prototype.onBeginContact = function (t, e, n) {
                var i = this;
                if (r.default.inst.statusGame == r.GameStatus.start)
                  switch (n.tag) {
                    case 10:
                    case 11:
                    case 13:
                      if (
                        ((t.disabled = !0),
                        this.typeFluid == a.FulidType.water && !this.HasEectric)
                      )
                        return;
                      var s = this.typeFluid == a.FulidType.magma;
                      this.scheduleOnce(function () {
                        r.default.inst.burnDown(n.node, n.tag, s);
                      }, 0);
                      break;
                    case 14:
                      if (this.typeFluid == a.FulidType.water) return;
                      if (
                        n.node.getComponent(o).typeFluid == a.FulidType.water
                      ) {
                        var c = e.node.getPosition(),
                          l = cc.instantiate(this.firePrb);
                        (l.parent = this.areaFulid.node),
                          l.setPosition(c),
                          (l.opacity = 255);
                        cc
                          .tween(l)
                          .to(0.35, { opacity: 0 })
                          .call(function () {
                            l.destroy();
                          })
                          .start(),
                          (t.disabled = !0),
                          this.scheduleOnce(function () {
                            n.node
                              .getComponent(o)
                              .areaFulid.consumeFulid(n.node),
                              i.areaFulid.consumeFulid(e.node);
                          }, 0);
                      }
                  }
              }),
              i([u(cc.Sprite)], e.prototype, "sp", void 0),
              i([u(cc.RigidBody)], e.prototype, "rigidBody", void 0),
              (e = o = i([l], e))
            );
          })(cc.Component);
        (o.default = d), cc._RF.pop();
      },
      {
        "../../GameData": "GameData",
        "../GamingManager": "GamingManager",
        "./LevelFluid": "LevelFluid",
      },
    ],
    WxSdk: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "7e5a0a35ulLl5J5v33+v9G/", "WxSdk");
        var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, o) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                  })(e, o);
              };
              return function (e, o) {
                function n() {
                  this.constructor = e;
                }
                t(e, o),
                  (e.prototype =
                    null === o
                      ? Object.create(o)
                      : ((n.prototype = o.prototype), new n()));
              };
            })(),
          i =
            (this && this.__decorate) ||
            function (t, e, o, n) {
              var i,
                a = arguments.length,
                r =
                  a < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, o))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                r = Reflect.decorate(t, e, o, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (i = t[s]) &&
                    (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
              return a > 3 && r && Object.defineProperty(e, o, r), r;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var a = t("../PlatformCont"),
          r = cc._decorator,
          s = r.ccclass,
          c =
            (r.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              var o;
              return (
                n(e, t),
                (o = e),
                (e.openDataPostMess = function (t, e, o, n, i) {
                  return (
                    void 0 === i && (i = ""),
                    -1 !=
                      a.default.compareVersion(this.SdkVersionWX, "1.9.92") &&
                      (this._wx
                        .getOpenDataContext()
                        .postMessage({
                          event: t,
                          levelIndex: e,
                          box: o,
                          winSize: n,
                          ticketShare: i,
                          switchs: {
                            beyonedFriend: a.default.gameSwitchs.beyonedFriend,
                            shareToFriend: a.default.gameSwitchs.shareToFriend,
                          },
                        }),
                      !0)
                  );
                }),
                (e.initWX = function (t) {
                  var e = this;
                  void 0 === t && (t = null),
                    (this._wx = a.default.currSDK),
                    (a.default.systemInfo = this.infoWXsystem =
                      this._wx.getSystemInfoSync()),
                    (a.default.sdkVersion = this.SdkVersionWX =
                      this.infoWXsystem.SDKVersion),
                    (a.default.isLongSize =
                      this.infoWXsystem.windowHeight /
                        this.infoWXsystem.windowWidth >
                      2);
                  var n = this.infoWXsystem.model;
                  if (
                    (this.iphoneArr.forEach(function (t) {
                      -1 != n.search(t) && (a.default.isIphoneX = !0);
                    }),
                    this._wx.showShareMenu({
                      withShareTicket: !1,
                      menus: ["shareAppMessage", "shareTimeline"],
                    }),
                    this._wx.onShareAppMessage(function () {
                      var t = a.default.shareData[0][0],
                        o = a.default.shareData[0][1],
                        n = a.default.shareData[0][2];
                      return (
                        (e.shareStatus = !0),
                        { imageUrlId: n, title: t, imageUrl: o }
                      );
                    }),
                    a.default.isOpenCloud)
                  ) {
                    var i = this._wx.cloud;
                    this._wx.cloud.init({ env: i.DYNAMIC_CURRENT_ENV }),
                      (a.default.isLoginSever = !0),
                      console.log("\u5f00\u542f\u4e91\u5f00\u53d1");
                  }
                  this._wx.setMessageToFriendQuery({
                    shareMessageToFriendScene: 1,
                  }),
                    this._wx.onShareMessageToFriend &&
                      this._wx.onShareMessageToFriend(function (t) {
                        console.log("wx.shareMessageToFriend", t);
                        var e = t.success
                          ? "\u5206\u4eab\u6210\u529f"
                          : "\u5206\u4eab\u5931\u8d25";
                        a.default.showWXToast(e),
                          t.success && o.shareFriCall && o.shareFriCall();
                      });
                  var r = this._wx.getLaunchOptionsSync();
                  console.log("denglu", r),
                    r && this.checkData(r, !1),
                    this._wx.onShow(function (t) {
                      console.log("onShow", t),
                        o.checkData(t, !0),
                        a.default.getTimeToday();
                    }),
                    this._wx.onHide(function () {
                      console.log("onhide");
                    }),
                    t && t();
                }),
                (e.checkData = function (t, e) {
                  if (this.shareStatus)
                    return (
                      (this.shareStatus = !1),
                      void (this.shareUpdate
                        ? (a.default.showModalInfo(
                            "\u63d0\u793a",
                            "\u70b9\u51fb\u7fa4\u91cc\u5206\u4eab\u94fe\u63a5\u5373\u53ef\u67e5\u770b\u7fa4\u6392\u884c",
                            null,
                            null,
                            "\u786e\u5b9a",
                            !1
                          ),
                          (this.shareUpdate = !1))
                        : this.shareHandle())
                    );
                  if (t.query.showGroupRank) {
                    if (1008 == t.scene || 1044 == t.scene) {
                      if (t.shareTicket)
                        return (
                          (o.groupRankData[1] = t.shareTicket),
                          (o.groupRankData[0] = 1),
                          console.log(
                            "\u83b7\u53d6shareTicket\u503c\uff1a",
                            t.scene,
                            t.shareTicket
                          ),
                          void (
                            e &&
                            a.default.showGroupRankFun &&
                            a.default.showGroupRankFun()
                          )
                        );
                    } else
                      1007 == t.scene &&
                        a.default.showModalInfo(
                          "\u63d0\u793a",
                          "\u9009\u62e9\u5206\u4eab\u5230\u7fa4\u624d\u80fd\u67e5\u770b\u6392\u884c\u699c\u54e6!",
                          null,
                          null,
                          "\u786e\u5b9a",
                          !1
                        );
                    (o.groupRankData[0] = -1), (o.groupRankData[1] = "");
                  }
                }),
                Object.defineProperty(e, "shareUpdate", {
                  get: function () {
                    return this._toSeeGroupRank;
                  },
                  set: function (t) {
                    (this._toSeeGroupRank = t),
                      this._wx.updateShareMenu({
                        withShareTicket: t,
                        success: function (e) {
                          console.log(
                            "\u8f6c\u53d1\u5c5e\u6027\u53d8\u66f4",
                            t,
                            e
                          );
                        },
                      });
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.getCloudData = function (t, e) {
                  this._wx.cloud
                    .callFunction({ name: "cloudDataGet" })
                    .then(function (n) {
                      console.log("!!!!!!", n),
                        t.call(e, n.result),
                        n.result.openid &&
                          (o.usedOpenId = a.default.severUid = n.result.openid);
                    })
                    .catch(function (o) {
                      console.log("!!!!!!errr", o), t.call(e, null);
                    });
                }),
                (e.saveCloudData = function (t) {
                  console.log("\u540c\u6b65\u6570\u636e\u5230\u4e91\u7aef"),
                    this._wx.cloud
                      .callFunction({ name: "cloudDataSet", data: t })
                      .then(function (t) {
                        console.log("saveCloudData res", t);
                      })
                      .catch(function (t) {
                        console.log("saveCloudDataErr", t);
                      });
                }),
                (e.getShareBranchdim = function (t) {
                  var e = this,
                    o = 16;
                  return (
                    this.shareBraDimArr.forEach(function (n, i) {
                      n > t &&
                        (0 == i
                          ? (o = i + 1)
                          : e.shareBraDimArr[i - 1] <= t && (o = i + 1));
                    }),
                    o.toString()
                  );
                }),
                (e.shareApp = function (t, e, o, n, i, r, s, c, l) {
                  void 0 === t && (t = !1),
                    void 0 === e && (e = 0),
                    void 0 === o && (o = ""),
                    void 0 === n && (n = null),
                    void 0 === i && (i = null),
                    void 0 === r && (r = !1),
                    void 0 === s && (s = !1),
                    void 0 === c && (c = -1),
                    void 0 === l && (l = -1);
                  var u,
                    d,
                    p,
                    h = "";
                  if (
                    (t &&
                      ((this.shareUpdate = !0), (h += "&showGroupRank=true")),
                    s &&
                      "" != this.usedOpenId &&
                      (h = h + "&inviteFriend=" + this.usedOpenId),
                    console.log("\u5206\u4eabquery:" + h),
                    -1 == e && a.default.shareData.length > 1)
                  ) {
                    console.log("rrrrrrrrrrrrr");
                    var f = Math.round(
                      Math.random() * (a.default.shareData.length - 1)
                    );
                    (u = a.default.shareData[f][0]),
                      (d = a.default.shareData[f][1]),
                      (p = a.default.shareData[f][2]);
                  } else
                    console.log("tttttttttttt"),
                      (u = "" == o ? a.default.shareData[e][0] : o),
                      (d = a.default.shareData[e][1]),
                      (p = a.default.shareData[e][2]);
                  (this.shareStatus = !0),
                    (this.shareInfo.graySwitch = r),
                    (this.shareInfo.shareTimer[0] = Date.now()),
                    (this.shareInfo.braid = c),
                    (this.shareInfo.level = l),
                    (this.shareInfo.type = e),
                    (this.shareInfo.title = o),
                    (this.shareFun = n),
                    (this.shareCall = i),
                    this._wx.shareAppMessage({
                      imageUrlId: p,
                      title: u,
                      imageUrl: d,
                      query: h,
                    });
                }),
                (e.againShare = function () {
                  var t = this,
                    e =
                      this.failShareArr[
                        Math.round(
                          Math.random() * (this.failShareArr.length - 1)
                        )
                      ];
                  a.default.showModalInfo(
                    "\u63d0\u793a",
                    e,
                    function (e) {
                      e
                        ? ((t.shareInfo.twoShare = !0),
                          t.shareApp(
                            !1,
                            t.shareInfo.type,
                            t.shareInfo.title,
                            t.shareFun,
                            t.shareCall,
                            !1,
                            !1,
                            t.shareInfo.braid,
                            t.shareInfo.level
                          ))
                        : t.shareFun.call(t.shareCall, !1);
                    },
                    this,
                    "\u53bb\u5206\u4eab"
                  );
                }),
                (e.shareHandle = function () {
                  if (this.shareFun && this.shareCall)
                    if (this.shareInfo.twoShare)
                      a.default.showWXToast("\u5206\u4eab\u6210\u529f"),
                        this.shareFun.call(this.shareCall, !0),
                        (this.shareInfo.twoShare = !1);
                    else if (this.shareInfo.graySwitch) this.againShare();
                    else {
                      this.shareInfo.shareTimer[1] = Date.now();
                      var t =
                        (this.shareInfo.shareTimer[1] -
                          this.shareInfo.shareTimer[0]) /
                        1e3;
                      console.log("\u6fc0\u52b1\u5206\u4eab" + t),
                        t >= 3
                          ? (a.default.showWXToast("\u5206\u4eab\u6210\u529f"),
                            this.shareFun.call(this.shareCall, !0))
                          : this.againShare();
                    }
                }),
                (e.navigateAction = function (t) {
                  if (a.default.gamePlatform == a.GamePlatform.wx) {
                    var e = this.navigateData[t][0],
                      o = this.navigateData[t][1];
                    this._wx.navigateToMiniProgram({
                      appId: e,
                      path: o,
                      success: function (n) {
                        console.log(t, e, o);
                      },
                      fail: function (t) {},
                    });
                  }
                }),
                (e.checkNewsSubscr = function (t, e) {
                  var n = this.newsTemplateId;
                  this._wx.getSetting({
                    withSubscriptions: !0,
                    success: function (i) {
                      if (
                        (console.log(
                          "\u7528\u6237\u8ba2\u9605\u6d88\u606f\u8bbe\u7f6e",
                          i.subscriptionsSetting
                        ),
                        i.subscriptionsSetting[n])
                      )
                        if ("accept" == i.subscriptionsSetting[n])
                          console.log("\u540c\u610f\u8ba2\u9605"),
                            o.getAcceptRemind(t, e);
                        else {
                          a.default.showModalInfo(
                            "\u6e29\u99a8\u63d0\u793a",
                            "\u4f60\u5df2\u62d2\u7edd\u8ba2\u9605\u7b7e\u5230\u63d0\u9192\uff0c\u662f\u5426\u53bb\u5f80\u8bbe\u7f6e\u5f00\u542f\uff1f",
                            function (t) {
                              t
                                ? a.default.currSDK.openSetting({})
                                : a.default.showWXToast(
                                    "\u8ba2\u9605\u7b7e\u5230\u63d0\u9192\u6d88\u606f\u5931\u8d25,\u8bf7\u5230\u8bbe\u7f6e\u91cc\u5f00\u542f\u8ba2\u9605\u6743\u9650\uff01"
                                  );
                            },
                            this
                          );
                        }
                    },
                  });
                }),
                (e.getAcceptRemind = function (t, e) {
                  console.log(t),
                    a.default.currSDK.cloud
                      .callFunction({
                        name: "acceptRemind",
                        data: {
                          signinTmplId: o.newsTemplateId,
                          isAccept: !0,
                          isAlways: !1,
                          signedinDate: t,
                          whatDay: e,
                        },
                      })
                      .then(function (t) {
                        console.log("cloud res", t);
                      })
                      .catch(function (t) {
                        console.log("cloudErr", t);
                      });
                }),
                (e.showCustomAd = function (t, e) {
                  var o = this;
                  if ("" != this.customAdunit && null != this.customAdunit)
                    if (
                      -1 !==
                      a.default.compareVersion(this.SdkVersionWX, "2.11.1")
                    ) {
                      var n = this;
                      if (t) {
                        if (null == this.customAd) {
                          var i = a.default.isLongSize ? 80 : 45,
                            r = this.infoWXsystem.windowWidth - 65;
                          (this.customAd = this._wx.createCustomAd({
                            adUnitId: n.customAdunit,
                            style: { left: r, top: i },
                          })),
                            this.customAd.onLoad(function () {
                              console.log("\u539f\u751fLoad succes");
                            }),
                            this.customAd.onError(function (t) {
                              console.log("\u539f\u751fLoad err", t),
                                n.customDestroy();
                            });
                          this.customAd.onClose(function () {
                            console.log("\u5173\u95ed\u539f\u751f"),
                              (n.customAdStatus = 1);
                          });
                        }
                        0 != this.customAdStatus &&
                          this.customAd
                            .show()
                            .then(function () {
                              o.customAdStatus = 0;
                            })
                            .catch(function (t) {
                              console.log("\u539f\u751fshow err", t);
                            });
                      } else
                        this.customAd &&
                          this.customAd
                            .hide()
                            .then(function () {
                              (o.customAdStatus = 1), e && o.customDestroy();
                            })
                            .catch(function (t) {
                              console.log("\u539f\u751fhide err", t),
                                o.customDestroy();
                            });
                    } else
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793a\u539f\u751f\u6a21\u677f"
                      );
                  else
                    console.log(
                      "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793a\u539f\u751f\u6a21\u677f"
                    );
                }),
                (e.customDestroy = function () {
                  this.customAd &&
                    (this.customAd.offLoad(),
                    this.customAd.offError(),
                    this.customAd.offClose(),
                    this.customAd.destroy(),
                    (this.customAd = null),
                    (this.customAdStatus = -1));
                }),
                (e.showInterstitialAd = function () {
                  if (
                    "" != this.interstitialAdunit &&
                    null != this.interstitialAdunit
                  )
                    if (
                      -1 !==
                      a.default.compareVersion(this.SdkVersionWX, "2.9.2")
                    ) {
                      this.interstitialAd &&
                        (this.interstitialAd.destroy(),
                        (this.interstitialAd = null));
                      var t = this;
                      (this.interstitialAd = this._wx.createInterstitialAd({
                        adUnitId: t.interstitialAdunit,
                      })),
                        this.interstitialAd.show().catch(function (t) {
                          console.log(" wx\u63d2\u5c4ferr", t);
                        }),
                        this.interstitialAd.onClose(function (e) {
                          console.log("onClose event emit", e),
                            t.interstitialAd.offClose(),
                            t.interstitialAd.destroy(),
                            (t.interstitialAd = null);
                        });
                    } else
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793a\u63d2\u5c4f"
                      );
                  else
                    console.log(
                      "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793a\u63d2\u5c4f"
                    );
                }),
                (e.showBannerAd = function () {
                  if (null != this.bannerAdunit && "" != this.bannerAdunit)
                    if (
                      -1 !==
                      a.default.compareVersion(this.SdkVersionWX, "2.0.4")
                    ) {
                      if (
                        (console.log("\u663e\u793abanner\u5e7f\u544a"),
                        null != this.bannerAd)
                      )
                        return (
                          this.bannerAd.show(), void (this.bannerStatus = !0)
                        );
                      var t = this,
                        e = this.infoWXsystem.windowWidth,
                        o = this.infoWXsystem.windowHeight,
                        n = !1;
                      (this.bannerAd = this._wx.createBannerAd({
                        adUnitId: t.bannerAdunit,
                        style: { top: 0, width: 0.8 * e, left: 0 },
                      })),
                        this.bannerAd.onResize(function (i) {
                          !n &&
                            i.height > 0 &&
                            ((n = !0),
                            (t.bannerAd.style.top = a.default.isIphoneX
                              ? o - i.height - 10
                              : o - i.height),
                            (t.bannerAd.style.left =
                              Math.floor(e - i.width) / 2));
                        }),
                        this.bannerAd.onError(function (e) {
                          console.log("banner\u52a0\u8f7derror", e),
                            t.bannerAd.destroy(),
                            (t.bannerAd = null);
                        }),
                        this.bannerAd.onLoad(function () {
                          (t.bannerStatus = !0),
                            t.bannerAd.show().catch(function (e) {
                              console.log("banner\u663e\u793aerror", e),
                                t.bannerAd.destroy(),
                                (t.bannerAd = null),
                                (t.bannerStatus = !1);
                            });
                        });
                    } else
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793abanner"
                      );
                  else
                    console.log(
                      "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793abanner"
                    );
                }),
                (e.hideBannerAd = function (t) {
                  void 0 === t && (t = !1),
                    this.bannerAd &&
                      (this.bannerAd.hide(),
                      (this.bannerStatus = !1),
                      console.log("\u9690\u85cfbanner\u5e7f\u544a", t),
                      t && (this.bannerAd.destroy(), (this.bannerAd = null)));
                }),
                (e.playAwardVideo = function (t, e, n, i, r, s, c) {
                  if (
                    (void 0 === i && (i = null),
                    void 0 === r && (r = null),
                    void 0 === s && (s = ""),
                    void 0 === c && (c = 0),
                    null == this.videoAdunitArr[c] ||
                      "" == this.videoAdunitArr[c])
                  )
                    return (
                      console.log(
                        "\u6ca1\u6709\u5e7f\u544aID\u4e0d\u80fd\u663e\u793abanner"
                      ),
                      void r.call(i, !1)
                    );
                  if (
                    -1 === a.default.compareVersion(this.SdkVersionWX, "2.0.4")
                  )
                    return (
                      console.log(
                        "\u7248\u672c\u4f4e\u4e0d\u80fd\u663e\u793abanner"
                      ),
                      void r.call(i, !1)
                    );
                  if (!this.isPlayVideo) {
                    (this.isPlayVideo = !0),
                      i && (this.videoCall = i),
                      r && (this.videoCallfun = r),
                      (this.videoInfo = s);
                    var l = this,
                      u =
                        (this.getShareBranchdim(e),
                        this._wx.createRewardedVideoAd({
                          adUnitId: l.videoAdunitArr[c],
                        }));
                    u.load().then(function () {
                      console.log(
                        "\u89c6\u9891\u663e\u793a",
                        c,
                        l.videoAdunitArr[c]
                      ),
                        u.show();
                    }),
                      u.onError(function (t) {
                        (l.isPlayVideo = !1),
                          a.default.showWXToast(
                            "\u6682\u65f6\u6ca1\u6709\u89c6\u9891\uff01"
                          ),
                          o.videoCallfun &&
                            o.videoCallfun.call(o.videoCall, !1);
                      });
                    var d = function (i) {
                      i
                        ? o.playAwardVideo(t, e, n, null, null, s)
                        : o.videoCallfun &&
                          o.videoCallfun.call(o.videoCall, !1);
                    };
                    u.onClose(function (t) {
                      (l.isPlayVideo = !1),
                        u &&
                          (u.offClose(),
                          (t && t.isEnded) || void 0 === t
                            ? (console.log(
                                "\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"
                              ),
                              o.videoCallfun &&
                                o.videoCallfun.call(o.videoCall, !0))
                            : (console.log(
                                "\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"
                              ),
                              n
                                ? a.default.showModalInfo(
                                    "\u5b8c\u6574\u89c2\u770b\u89c6\u9891\u53ef\u83b7\u5f97",
                                    o.videoInfo,
                                    d,
                                    o.videoCall,
                                    "\u7ee7\u7eed\u9886\u53d6",
                                    !0,
                                    "\u653e\u5f03\u5956\u52b1"
                                  )
                                : o.videoCallfun &&
                                  o.videoCallfun.call(o.videoCall, !1)));
                    });
                  }
                }),
                (e._wx = null),
                (e.infoWXsystem = null),
                (e.SdkVersionWX = ""),
                (e.wxAppId = "wxebad95326a4a7f12"),
                (e.iphoneArr = ["iPhone X", "iPhone 11"]),
                (e.groupRankData = [-1, ""]),
                (e.newsTemplateId =
                  " EztCs73GBab7dn7xRX2Nu7rgnm7cbuThBOY5laf4uwA"),
                (e.bannerAdunit = "adunit-a09b24ad812c917a"),
                (e.videoAdunitArr = [
                  "adunit-5791996a88a944f9",
                  "adunit-9ff45e9cc1a4179c",
                ]),
                (e.interstitialAdunit = "adunit-bd4c9363b832a0e4"),
                (e.customAdunit = "adunit-caa886d557842b51"),
                (e.navigateData = []),
                (e.shareFriCall = null),
                (e._toSeeGroupRank = !1),
                (e.shareStatus = !1),
                (e.shareFun = null),
                (e.shareCall = null),
                (e.shareBraDimArr = [
                  20, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900,
                  1e3, 2e3,
                ]),
                (e.shareInfo = {
                  shareTimer: [0, 0],
                  graySwitch: !1,
                  twoShare: !1,
                  braid: -1,
                  level: 0,
                  type: 0,
                  title: "",
                }),
                (e.usedOpenId = ""),
                (e.failShareArr = [
                  "\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u5206\u4eab\u5230\u5176\u4ed6\u7fa4",
                  "\u8be5\u7fa4\u5df2\u5206\u4eab\u8fc7\uff0c\u8bf7\u6362\u4e2a\u7fa4",
                  "\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u5206\u4eab\u81f3\u5927\u4e8e30\u4eba\u7684\u7fa4",
                ]),
                (e.customAd = null),
                (e.customAdStatus = -1),
                (e.interstitialAd = null),
                (e.bannerAd = null),
                (e.bannerStatus = !1),
                (e.isPlayVideo = !1),
                (e.videoCall = null),
                (e.videoCallfun = null),
                (e.videoInfo = ""),
                (e = o = i([s], e))
              );
            })(cc.Component));
        (o.default = c), cc._RF.pop();
      },
      { "../PlatformCont": "PlatformCont" },
    ],
    YYGGamesUtil: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ab4799aAchPxIHNJsjtCl0s", "YYGGamesUtil"),
          (window.ADFlag = !1),
          (window.SOUNDFlag = !0),
          (window.BOOT = null),
          (window.YYGGamesUtil = new ((function () {
            function t() {
              return (
                (this.YYGforgames = []),
                (this.canScroll = !0),
                (this.BannerScrollid = null),
                (this.initLogFlag = !1),
                this
              );
            }
            return (
              (t.prototype.init = function (t, e, o, n) {
                var i = this;
                i.initSDK(
                  "https://h5gamessdk.yyggames.com/sdk/YYGGames.js",
                  function () {
                    var a = this;
                    YYGGames.init({
                      appName: t.appID,
                      channel: t.channel || 0,
                      config: {
                        gamedistributionId: t.gamedistributionId,
                        gamemonetizeId: t.gamemonetizeId,
                      },
                      complete: function () {
                        YYGGames.addEventListener(
                          YYGGames.events.beforeShowAd,
                          a,
                          o
                        ),
                          YYGGames.addEventListener(
                            YYGGames.events.afterShowAd,
                            a,
                            n
                          ),
                          YYGGames.addEventListener(
                            YYGGames.events.adBreakDone,
                            a,
                            function () {}
                          ),
                          YYGGames.addEventListener(
                            YYGGames.events.adDismissed,
                            a,
                            function () {
                              YYGGames.showTip(
                                "Pls watch the ad completely, so that you can claim your reward"
                              );
                            }
                          );
                        // var t = YYGGames.forgames.slice(),
                        //   r =
                        //     t &&
                        //     t.map(function (t) {
                        //       return t.thumb;
                        //     });
                        // cc.loader.load(r, function (o, n) {
                        //   o
                        //     ? console.log("error: ", o)
                        //     : (t.forEach(function (t) {
                        //         i.YYGforgames.push({ id: t.id, url: t.thumb });
                        //       }),
                              e()
                            //   );
                        // });
                      },
                    });
                  }
                );
              }),
              (t.prototype.initnatv = function () {
                YYGGames.navigate("Game", "LOGO");
              }),
              (t.prototype.showChapingAD = function (t) {
                YYGGames.showInterstitial(t);
              }),
              (t.prototype.showshipinAD = function (t) {
                YYGGames.showReward(t);
              }),
              (t.prototype.initAd = function (t, e) {
                this.YYGforgames.length > 1 &&
                  (this.NodeHandle(t, this.YYGforgames[0], !1),
                  this.NodeHandle(e, this.YYGforgames[1], !1));
              }),
              (t.prototype.loading = function (t) {
                var e =
                    document.getElementById("GameDiv") ||
                    document.getElementById("Game"),
                  o = document.createElement("div");
                o.setAttribute("id", "loadDiv"),
                  o.setAttribute("class", "loadDiv"),
                  o.setAttribute(
                    "style",
                    "position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: #000000;opacity: 30% zindex: 10000;"
                  ),
                  e.appendChild(o);
              }),
              (t.prototype.initGameBanner = function (t) {
                this.removeBanner();
                for (var e = this, o = 0; o < 20; o++) {
                  var n = cc.find("view/content/item", t),
                    i = cc.find("view/content", t),
                    a = cc.instantiate(n);
                  a.x = 190 * o - 1307.493;
                  var r = cc.find("Mask", a);
                  e.NodeHandle(r, e.YYGforgames[o], !0), i.addChild(a);
                }
                this.BannerScrollid = window.setInterval(function () {
                  e.BannerScroll(i);
                }, 10);
              }),
              (t.prototype.removeBanner = function () {
                this.BannerScrollid &&
                  window.clearInterval(this.BannerScrollid);
              }),
              (t.prototype.bodyStyle = function (t, e) {
                var o = document.createElement("style");
                (o.innerText =
                  "#Game,#GameDiv {position: absolute;margin: 0;overflow: hidden;width: "
                    .concat(t, "px;height: ")
                    .concat(
                      e,
                      "px;left: 50%;top: 50%;transform: translate(-50%, -50%);}"
                    )),
                  document.head.appendChild(o);
              }),
              (t.prototype.initSDK = function (t, e) {
                var o = document.createElement("script");
                o.setAttribute("type", "text/javascript"),
                  o.setAttribute("src", t),
                  document.getElementsByTagName("body")[0].appendChild(o),
                  e && (o.onload = e);
              }),
              (t.prototype.BannerScroll = function (t) {
                t &&
                  this.canScroll &&
                  (t.x <= 720 && t.x > -720 ? (t.x -= 1) : (t.x = 720));
              }),
              (t.prototype.gameLogo = function () {
                var t = this;
                cc.loader.loadRes("yad", function (e, o) {
                  if (e) console.log("err:", e);
                  else {
                    t.initLogFlag = !0;
                    var n = new cc.Node();
                    n.name = "gameLogo";
                    var i = n.addComponent(cc.Sprite);
                    cc.find("Canvas").parent.addChild(n),
                      (i.spriteFrame = new cc.SpriteFrame(o)),
                      n.setScale(0.9),
                      (n.x = 650),
                      (n.y = 1220),
                      (n.zIndex = 1e3),
                      (n.active = !0),
                      (window.gameLogo = n),
                      n.addComponent(cc.Button),
                      n.on("click", function () {
                        YYGGames.navigate("Game", "LOGO");
                      }),
                      (window.gameLogo = n);
                  }
                });
              }),
              (t.prototype.logoMove = function (t, e, o) {
                console.error(o),
                  document
                    .getElementById("divImage")
                    .setAttribute(
                      "style",
                      "position:absolute; z-index:99999; width:" +
                        t +
                        "; top:" +
                        e +
                        "; right:" +
                        o +
                        ";"
                    );
              }),
              (t.prototype.NodeHandle = function (t, e, o) {
                var n = this,
                  i = new cc.Node();
                if ((t.addChild(i), o)) {
                  var a = i.addComponent(cc.Sprite);
                  (a.sizeMode = 0),
                    (a.spriteFrame = new cc.SpriteFrame(e.url)),
                    (i.scale = 1),
                    (i.width = 180),
                    (i.height = 170),
                    i.addComponent(cc.Button),
                    i.on("click", function () {
                      YYGGames.navigate("MainMenu", "MORE", e.id);
                    }),
                    i.on("mouseenter", function () {
                      (n.canScroll = !1), (t.scaleX = 1.1), (t.scaleY = 1.1);
                    }),
                    i.on("mouseleave", function () {
                      (n.canScroll = !0), (t.scaleX = 1), (t.scaleY = 1);
                    });
                } else {
                  var r = i.addComponent(cc.Sprite);
                  (r.sizeMode = 0),
                    (r.spriteFrame = new cc.SpriteFrame(e.url)),
                    (i.width = 165),
                    (i.height = 165),
                    i.addComponent(cc.Button),
                    i.on("click", function () {
                      YYGGames.navigate("MainMenu", "MORE", e.id);
                    });
                }
              }),
              t
            );
          })())()),
          (window.showMetheAuthor = function () {
            var t = document.createElement("iframe");
            (t.style.display = "none"),
              document.head.appendChild(t),
              t.contentWindow.console.log.apply(this, [
                "%c %c %c YYGGAMES %c%s %c %c ",
                "background: #fb8cb3",
                "background: #d44a52",
                "color: #ffffff; background: #871905",
                "color: #ffffff;background: #871905;",
                "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103"
                  .split(",")
                  .map(function (t) {
                    return String.fromCharCode(~~t);
                  })
                  .join(""),
                "background: #d44a52",
                "background: #fb8cb3",
              ]);
          }),
          cc._RF.pop();
      },
      {},
    ],
  },
  {},
  [
    "YYGGamesUtil",
    "GameData",
    "GlobalManager",
    "HomeView",
    "LoadingView",
    "PlatformCont",
    "Toutiao",
    "WxSdk",
    "LoadingBar",
    "Random",
    "ShaderTime",
    "SoundManager",
    "ToolPersist",
    "Tooltips",
    "WaterCamera",
    "GameOverView",
    "GamingManager",
    "RewardPop",
    "StageLevel",
    "GoodsManager",
    "LevelElebox",
    "LevelFluid",
    "LevelGood",
    "LevelKey",
    "LevelMonster",
    "LevelPlayer",
    "LevelQulver",
    "LevelRingMove",
    "RingBar",
    "Water",
    "LevelSelectView",
  ]
);
