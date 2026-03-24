window.__require = (function e(t, o, n) {
  function i(c, a) {
    if (!o[c]) {
      if (!t[c]) {
        var l = c.split("/");
        if (((l = l[l.length - 1]), !t[l])) {
          var u = "function" == typeof __require && __require;
          if (!a && u) return u(l, !0);
          if (r) return r(l, !0);
          throw new Error("Cannot find module '" + c + "'");
        }
        c = l;
      }
      var s = (o[c] = { exports: {} });
      t[c][0].call(
        s.exports,
        function (e) {
          return i(t[c][1][e] || e);
        },
        s,
        s.exports,
        e,
        t,
        o,
        n
      );
    }
    return o[c].exports;
  }
  for (
    var r = "function" == typeof __require && __require, c = 0;
    c < n.length;
    c++
  )
    i(n[c]);
  return i;
})(
  {
    AD_TouTiao: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "e36ec/0cr9OcKBifBSqHnPg", "AD_TouTiao"),
          (window.AD_TouTiao = {
            bannerID_TT: "1eoglb2q4qaad6g46f",
            videoID_TT: "2enimb58o2i46i2s3g",
            chaPing_TT: "1wjo77fh4le108kff6",
            shareID_TT: "blcan1bo5p42g5012m",
            appName: "\u63a8\u7406\u5927\u5e08",
            shareTitle_TT:
              "\u5b66\u751f\u515a\u90fd\u731c\u4e0d\u5230\u7b54\u6848",
            shareDESC_TT:
              "\u5b66\u751f\u515a\u90fd\u731c\u4e0d\u5230\u7b54\u6848",
            phone: "null",
            transcribeBoo: !1,
            fenXiangBoo: !1,
            bannerBoo: !1,
            rewardBoo: !1,
            autoVideoBoo: !1,
            levelNum: 0,
            getLaunchOptionsSync: function () {},
            chaPing: function () {},
            showTTVideo: function () {},
            initBanner: function () {},
            showTTBanner: function () {},
            hideTTBanner: function () {},
            luPingBegin: function () {},
            lupingOver: function () {},
            luPingShare: function () {},
            shareTTNormal: function () {},
            shareOver: function () {},
            moreGameTT: function () {},
            showMoreGame: function () {},
            onMoreGamesModalClose: function () {},
            addShowFavoriteGuide: function () {},
            openAwemeUserProfile: function () {},
            isDouYin: function () {},
            TDEvent: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    AD_UC: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "af66cv+muxHdJj0BhLfmYAa", "AD_UC"),
          (window.AD_UC = {
            ucBanner: null,
            showVideo: function (e, t, o) {
              for (
                var n = arguments.length,
                  i = new Array(n > 3 ? n - 3 : 0),
                  r = 3;
                r < n;
                r++
              )
                i[r - 3] = arguments[r];
              if (AD.chanelName == AD.chanelName1) {
                var c = uc.createRewardedVideoAd(),
                  a = function () {
                    console.log("sdk videoAd start ........"),
                      cc.audioEngine.pauseMusic(),
                      cc.director.pause();
                  };
                c.show();
                var l = function (e) {
                  console.log(
                    "UC\u89c6\u9891\u52a0\u8f7d\u5931\u8d25   " +
                      JSON.stringify(e)
                  );
                };
                c.onLoad(a),
                  c.onError(l),
                  c.onClose(function t(n) {
                    console.log(n),
                      n.isEnded && e.call(o, i[0]),
                      cc.director.resume(),
                      cc.audioEngine.resumeMusic(),
                      c.offLoad(a),
                      c.offClose(t),
                      c.offError(l);
                  });
              } else e.call(o, i[0]);
            },
            initUC: function () {
              AD.chanelName == AD.chanelName1 &&
                "UC" == AD.chanelName &&
                (uc.requestScreenOrientation({
                  orientaiton: 1,
                  success: function (e) {
                    console.log(e);
                  },
                  fail: function (e) {
                    console.error(e);
                  },
                }),
                uc.getSystemInfo({
                  success: function (e) {
                    (AD.SDKVersion = e.SDKVersion), console.log(AD.SDKVersion);
                  },
                  fail: function (e) {
                    console.error(e);
                  },
                }));
            },
            initBanner: function () {
              AD.chanelName, AD.chanelName1;
            },
            chaPing: function () {
              var e = AD_UC.strToArr(AD.SDKVersion, ".");
              if (e[2] >= 2 && e[1] >= 1 && e[0] >= 1) {
                var t = uc.createInterstitialAd();
                t
                  .load()
                  .then()
                  .catch(function (e) {
                    return console.log(
                      "UC\u5e7f\u544a\u52a0\u8f7d\u9519\u8bef " + e
                    );
                  }),
                  t.onLoad(function () {
                    console.log(
                      "\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                    );
                  }),
                  t
                    .show()
                    .then()
                    .catch(function (e) {
                      return console.log("UC\u5c55\u793a\u5931\u8d25 " + e);
                    }),
                  t.onError(function (e) {
                    console.log("UC\u5e7f\u544a\u9519\u8bef " + e);
                  }),
                  t.onClose(function () {
                    console.log("UC\u5e7f\u544a\u5173\u95ed ");
                  });
              }
            },
            showBanner: function () {
              if (AD.chanelName == AD.chanelName1) {
                AD_UC.ucBanner &&
                  (AD_UC.ucBanner.destroy(), (AD_UC.ucBanner = null)),
                  console.log("AD_UC.ucBanner \u5e7f\u544a\u52a0\u8f7d start ");
                var e = uc.getSystemInfoSync();
                if ("string" == typeof e)
                  try {
                    e = JSON.parse(e);
                  } catch (e) {}
                var t =
                    (e.screenWidth > e.screenHeight
                      ? e.screenHeight
                      : e.screenWidth) / 2,
                  o = (194 * t) / 345;
                (AD_UC.ucBanner = uc.createBannerAd({
                  style: { width: t, height: o, gravity: 7 },
                })),
                  AD_UC.ucBanner.onError(function (e) {
                    console.log(
                      "AD_UC.ucBanner \u5e7f\u544a\u52a0\u8f7d\u51fa\u9519",
                      e
                    );
                  }),
                  AD_UC.ucBanner.onLoad(function () {
                    console.log(
                      "AD_UC.ucBanner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
                    );
                  }),
                  AD_UC.ucBanner.show();
              }
            },
            hideBanner: function () {},
            share: function () {
              AD.chanelName == AD.chanelName1 &&
                uc.shareAppMessage({
                  query: "",
                  success: function (e) {
                    console.log(
                      "UC\u5206\u4eab\u6210\u529f ",
                      JSON.stringify(e)
                    );
                  },
                  fail: function (e) {
                    console.log(
                      "UC\u5206\u4eab\u5931\u8d25 ",
                      JSON.stringify(e)
                    );
                  },
                });
            },
            strToArr: function (e, t) {
              return e.split("" + t);
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    AD: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "9f186lG51lBFpVwD5ZVWkgc", "AD"),
          (window.AD = {
            chanelName: "",
            chanelName1: "web",
            wuDianRate: 0,
            btnDelayTime: 0,
            getLaunchOptionsSync: function () {},
            couldZJD: function () {},
            showTTVideo: function () {},
            initBanner: function () {},
            showBanner: function () {},
            hideBanner: function () {},
            chaPing: function () {},
            share: function () {},
            luPingShare: function () {},
            luPingBegin: function () {},
            lupingOver: function () {},
            TDEvent: function (e, t) {
              void 0 === t && (t = null);
            },
          }),
          cc._RF.pop();
      },
      {},
    ],
    AnimationManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2bd50RZslJO7ay8bJJj7nFg", "AnimationManager");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              var o;
              return (
                r(t, e),
                (o = t),
                Object.defineProperty(t, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new o()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (t.prototype.getKeelCurrentTime = function (e) {
                  return e.armature().animation.lastAnimationState
                    ? e.armature().animation.lastAnimationState.currentTime
                    : 0;
                }),
                (t.prototype.KeelTimePlayCall = function (e, t, o, n, i, r) {
                  void 0 === o && (o = 0),
                    void 0 === n && (n = -1),
                    void 0 === i && (i = null),
                    void 0 === r && (r = null);
                  for (var c = [], a = 6; a < arguments.length; a++)
                    c[a - 6] = arguments[a];
                  e.armature().animation.gotoAndPlayByTime(t, o, n),
                    null != i &&
                      e.once(
                        dragonBones.EventObject.COMPLETE,
                        function () {
                          i.call(r, c[0]);
                        },
                        r
                      );
                }),
                (t.prototype.animationTimePlayCall = function (e, t, o, n, i) {
                  void 0 === o && (o = 0),
                    void 0 === n && (n = null),
                    void 0 === i && (i = null);
                  for (var r = [], c = 5; c < arguments.length; c++)
                    r[c - 5] = arguments[c];
                  "" == t ? e.play() : e.play(t, o),
                    null != n &&
                      e.once(
                        cc.Animation.EventType.FINISHED,
                        function () {
                          n.call(i, r[0]);
                        },
                        i
                      );
                }),
                (o = c([l], t))
              );
            })(cc.Component));
        (i.default = u), cc._RF.pop();
      },
      {},
    ],
    AnswerPromptUI: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "30aaeDRK4lHeqpLlj7VawtC", "AnswerPromptUI");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("Tool"),
          u = cc._decorator,
          s = u.ccclass,
          d = u.property,
          p = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.currentNode = null), (t.textNode = null), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.init = function (e) {
                this.textNode.getComponent(cc.Label).string = e;
              }),
              (t.prototype.onEnable = function () {
                l.default.instace.minAndMaxAnimation(this.currentNode, this);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.touchHanler = function () {
                l.default.instace.maxAndMinAnimation(this.currentNode, this);
              }),
              a(
                [d({ type: cc.Node, displayName: "\u5f53\u524d\u8282\u70b9" })],
                t.prototype,
                "currentNode",
                void 0
              ),
              a(
                [d({ type: cc.Node, displayName: "\u6587\u672cnode" })],
                t.prototype,
                "textNode",
                void 0
              ),
              a([s], t)
            );
          })(cc.Component);
        (r.default = p), cc._RF.pop();
      },
      {},
    ],
    AudioManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9d1b7bDOX1Jjox+wVn7P98l", "AudioManager");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u =
            (a.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.musicBoo = !0),
                  (t.soundBoo = !0),
                  (t.shakeBoo = !0),
                  (t.audioClipAll = []),
                  t
                );
              }
              var o;
              return (
                r(t, e),
                (o = t),
                Object.defineProperty(t, "instace", {
                  get: function () {
                    return this._instace;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (t.prototype.getmusicBoo = function () {
                  return this.musicBoo;
                }),
                (t.prototype.setmusicBoo = function (e) {
                  this.musicBoo = e;
                }),
                (t.prototype.getsoundBoo = function () {
                  return this.soundBoo;
                }),
                (t.prototype.setsoundBoo = function (e) {
                  this.soundBoo = e;
                }),
                (t.prototype.getshakeBoo = function () {
                  return this.shakeBoo;
                }),
                (t.prototype.setshakeBoo = function (e) {
                  this.shakeBoo = e;
                }),
                (t.prototype.init = function () {
                  var e = cc.sys.localStorage.getItem("musicBoo");
                  e && (this.musicBoo = "true" == e);
                  var t = cc.sys.localStorage.getItem("soundBoo");
                  t && (this.soundBoo = "true" == t);
                  var o = cc.sys.localStorage.getItem("shakeBoo");
                  o && (this.shakeBoo = "true" == o);
                }),
                (t.prototype.localChanges = function () {
                  cc.sys.localStorage.setItem("musicBoo", this.musicBoo),
                    cc.sys.localStorage.setItem("soundBoo", this.soundBoo),
                    cc.sys.localStorage.setItem("shakeBoo", this.shakeBoo);
                }),
                (t.prototype.localDeletion = function () {
                  cc.sys.localStorage.removeItem("musicBoo"),
                    cc.sys.localStorage.removeItem("soundBoo"),
                    cc.sys.localStorage.removeItem("shakeBoo");
                }),
                (t.prototype.start = function () {
                  for (var e in ((this.audioAll = this.node.getComponents(
                    cc.AudioSource
                  )),
                  this.audioAll))
                    this.audioClipAll.push(this.audioAll[e].clip);
                  cc.game.addPersistRootNode(this.node),
                    (o._instace = this),
                    o.instace.playMusic("\u83dc\u5355\u80cc\u666f\u97f3\u4e50");
                }),
                (t.prototype.playMusic = function (e) {
                  if (window.isSoundMusic && this.musicBoo)
                    switch (e) {
                      case "\u6e38\u620f\u80cc\u666f\u97f3\u4e50":
                        break;
                      case "\u83dc\u5355\u80cc\u666f\u97f3\u4e50":
                        cc.audioEngine.stopAll(),
                          cc.audioEngine.playMusic(this.audioClipAll[0], !0);
                    }
                }),
                (t.prototype.playSound = function (e) {
                  if (window.isSoundMusic && this.soundBoo)
                    switch (e) {
                      case "\u6309\u94ae":
                        this.findAudio("sfx_Btn").play();
                        break;
                      case "\u9f13\u638c":
                        break;
                      case "\u72c2\u7b11":
                        this.findAudio("sfx_laugh").play();
                        break;
                      case "\u7537ouNo":
                        this.findAudio("sfx_ohNo_man").play();
                        break;
                      case "\u5973ouNo":
                        this.findAudio("sfx_ohNo_woman").play();
                        break;
                      case "\u5bf9":
                        this.findAudio("sfx_right").play();
                        break;
                      case "\u6d47\u6c34":
                        this.findAudio("sfx_water").play();
                        break;
                      case "\u6253\u55b7\u568f":
                        this.findAudio("daPenTi").play();
                        break;
                      case "\u56de\u7b54\u9519\u8bef":
                        this.findAudio("huiDaCuoWu").play();
                        break;
                      case "\u5b9d\u5b9d\u54ed":
                        this.findAudio("baoBaoKu").play();
                        break;
                      case "\u80dc\u5229":
                        cc.audioEngine.playMusic(this.audioClipAll[11], !0);
                        break;
                      case "\u7537hey":
                        this.findAudio("nan_hey").play();
                        break;
                      case "\u5973hey1":
                        this.findAudio("nv_hey1").play();
                        break;
                      case "\u5973hey2":
                        this.findAudio("nv_hey2").play();
                        break;
                      case "\u76f8\u673a":
                        this.findAudio("xiangji").play();
                    }
                }),
                (t.prototype.findAudio = function (e) {
                  for (var t in this.audioAll)
                    if (e == this.audioAll[t].clip.name)
                      return this.audioAll[t];
                  return null;
                }),
                (o = c([l], t))
              );
            })(cc.Component));
        (i.default = u), cc._RF.pop();
      },
      {},
    ],
    CheckPointChapter: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "14ff5NwKl1EAr9o3oyLqWxY", "CheckPointChapter");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("LevelDataManager"),
          u = cc._decorator,
          s = u.ccclass,
          d =
            (u.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.chapter = 1), t;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {}),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function (e, t) {
                  window.isMenuStart && YYGGames.showLoading(),
                    (this.chapter = e);
                  for (
                    var o = 9 * (this.chapter - 1) + 1;
                    o <= 9 * this.chapter;
                    o++
                  ) {
                    if (o > l.default.instance.MaxUnlockNum)
                      return void (
                        window.isMenuStart &&
                        setTimeout(function () {
                          YYGGames.hideLoading(), (window.isMenuStart = !1);
                        }, 6e3)
                      );
                    var n = cc.instantiate(t);
                    n.getComponent("CheckpointItem").init(o),
                      this.node.addChild(n);
                  }
                }),
                a([s], t)
              );
            })(cc.Component));
        (r.default = d), cc._RF.pop();
      },
      {},
    ],
    CheckpointItem: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "35856UhXY1PU5q0juxJhxBk", "CheckpointItem");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("LevelTextConfigManger"),
          u = i("LevelDataManager"),
          s = i("OperationData"),
          d = i("Res"),
          p = i("SceneManager"),
          f = i("TipManager"),
          h = cc._decorator,
          y = h.ccclass,
          g = h.property,
          v = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bgNode = null),
                (t.levelLabel = null),
                (t.levelItemBg = null),
                (t.lockNode = null),
                (t.levelNum = 1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function (e) {
                this.canTouch = !1;
                var t,
                  o = this;
                (o.levelNum = e),
                  (t = l.default.instance.getLevelIdData(
                    this.levelNum
                  ).levelname);
                var n = u.default.instance.levelsPromptTextAll.indexOf(t);
                d.default.instance.loadImg(
                  "Texture",
                  "levelItemBg" + n,
                  function (e) {
                    o.levelItemBg.getComponent(cc.Sprite).spriteFrame = e;
                  },
                  o
                ),
                  (o.levelLabel.getComponent(cc.Label).string = "Level~" + e),
                  u.default.instance.unlockNum == o.levelNum
                    ? (d.default.instance.loadImg(
                        "Texture",
                        "xg_btn_guanQia_dangQian",
                        function (e) {
                          o.bgNode.getComponent(cc.Sprite).spriteFrame = e;
                        },
                        o
                      ),
                      (o.lockNode.active = !1),
                      o.node.runAction(
                        cc
                          .sequence(cc.scaleBy(0.5, 1.1), cc.scaleTo(0.5, 1))
                          .repeatForever()
                      ))
                    : 1 == u.default.instance.getunlockLevel(o.levelNum)
                    ? (d.default.instance.loadImg(
                        "Texture",
                        "xg_btn_guanQia_1",
                        function (e) {
                          o.bgNode.getComponent(cc.Sprite).spriteFrame = e;
                        },
                        o
                      ),
                      (o.lockNode.active = !1))
                    : (d.default.instance.loadImg(
                        "Texture",
                        "xg_btn_guanQia_2",
                        function (e) {
                          o.bgNode.getComponent(cc.Sprite).spriteFrame = e;
                        },
                        o
                      ),
                      (o.lockNode.active = !0),
                      (o.levelItemBg.opacity = 200)),
                  o.levelNum == u.default.instance.MaxUnlockNum + 1 &&
                    d.default.instance.loadImg(
                      "Texture",
                      "img_chiXuGengXin",
                      function (e) {
                        o.lockNode.getComponent(cc.Sprite).spriteFrame = e;
                      },
                      o
                    ),
                  (this.node.opacity = 0),
                  cc.tween(this.node).to(1, { opacity: 255 }).start(),
                  (this.canTouch = !0);
              }),
              (t.prototype.touchHanler = function (e) {
                var t = this;
                if (this.canTouch)
                  if (this.levelNum > u.default.instance.MaxUnlockNum) {
                    var o = {
                      name: "\u63d0\u793a\u8bed\u53e5",
                      text:
                        this.levelNum <= u.default.instance.MaxUnlockNum
                          ? "Current level is not unlocked"
                          : "Keep updating...",
                    };
                    f.default.instace.addUITip(o);
                  } else
                    1 == u.default.instance.getunlockLevel(this.levelNum)
                      ? YYGGames.showInterstitial(function () {
                          console.error("\u63d2\u5c4f"),
                            (s.default.instance.levelNum = t.levelNum),
                            p.default.instance.jumpScene(
                              "\u6e38\u620f\u573a\u666f"
                            ),
                            e.target.removeComponent(cc.Button);
                        })
                      : ((o = {
                          name: "\u63d0\u793a\u8bed\u53e5",
                          text:
                            this.levelNum <= u.default.instance.MaxUnlockNum
                              ? "Current level is not unlocked"
                              : "Keep updating...",
                        }),
                        f.default.instace.addUITip(o));
              }),
              a(
                [g({ type: cc.Node, displayName: "\u80cc\u666f" })],
                t.prototype,
                "bgNode",
                void 0
              ),
              a(
                [
                  g({
                    type: cc.Node,
                    displayName: "\u5173\u5361\u663e\u793a\u6587\u672c",
                  }),
                ],
                t.prototype,
                "levelLabel",
                void 0
              ),
              a(
                [
                  g({
                    type: cc.Node,
                    displayName: "\u6807\u9898\u80cc\u666f\u56fe",
                  }),
                ],
                t.prototype,
                "levelItemBg",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u9501" })],
                t.prototype,
                "lockNode",
                void 0
              ),
              a([y], t)
            );
          })(cc.Component);
        (r.default = v), cc._RF.pop();
      },
      {},
    ],
    Checkpoint: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "60a9a2oArdGEoHpjNmHlBoj", "Checkpoint");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("GameDataManger"),
          s = i("Global"),
          d = i("LevelDataManager"),
          p = i("OperationData"),
          f = i("Tool"),
          h = cc._decorator,
          y = h.ccclass,
          g = h.property,
          v = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.currentNode = null),
                (t.pageViewNode = null),
                (t.contentNode = null),
                (t.capacityNode = null),
                (t.replyLabelNode = null),
                (t.num = 0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (this.num = 0),
                  s.default.getinstance().topAdapter(this.currentNode);
                var e = this.pageViewNode.parent.convertToWorldSpaceAR(
                    cc.v2(
                      this.pageViewNode.x -
                        this.pageViewNode.anchorX * this.pageViewNode.width,
                      this.pageViewNode.y -
                        this.pageViewNode.anchorY * this.pageViewNode.height
                    )
                  ),
                  t = cc.rect(
                    e.x,
                    e.y,
                    this.pageViewNode.width,
                    this.pageViewNode.height
                  );
                console.log(t), (this.svBBoxRect = t), this.init();
              }),
              (t.prototype.onEnable = function () {
                this.pageViewNode.on(
                  "scrolling",
                  this._onScrollingDrawCallOpt,
                  this
                );
              }),
              (t.prototype.onDisable = function () {
                this.pageViewNode.off(
                  "scrolling",
                  this._onScrollingDrawCallOpt,
                  this
                );
              }),
              (t.prototype.onDestroy = function () {}),
              (t.prototype._onScrollingDrawCallOpt = function () {
                var e = this;
                0 !=
                  this.pageViewNode.getComponent(cc.PageView).content
                    .childrenCount &&
                  this.pageViewNode
                    .getComponent(cc.PageView)
                    .content.children.forEach(function (t) {
                      t.getBoundingBoxToWorld().intersects(e.svBBoxRect)
                        ? 255 != t.opacity && (t.opacity = 255)
                        : 0 != t.opacity && (t.opacity = 0);
                    });
              }),
              (t.prototype.init = function () {
                for (var e = 1; e <= 6; e++) {
                  var t = cc.instantiate(
                      p.default.instance.checkPointChapterNode
                    ),
                    o = cc.instantiate(p.default.instance.checkpointItemNode);
                  t.getComponent("CheckPointChapter").init(e, o),
                    this.pageViewNode.getComponent(cc.PageView).addPage(t);
                }
                this._onScrollingDrawCallOpt();
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u8fd4\u56de":
                    YYGGames.showInterstitial(function () {
                      console.error("\u63d2\u5c4f"),
                        window.Menu.showAD(),
                        l.default.instace.playSound("\u6309\u94ae"),
                        o.node.destroy();
                    });
                    break;
                  case "\u521d\u59cb\u5316\u80fd\u91cf\u548c\u5173\u5361":
                    if ((this.num++, this.num >= 20)) {
                      d.default.instance.setunlockLevel(1, !0),
                        u.default.instance.setcapacityNum(0);
                      for (
                        var n = 2;
                        n <= d.default.instance.MaxUnlockNum + 1;
                        n++
                      )
                        d.default.instance.setunlockLevel(n, !1);
                      (d.default.instance.unlockNum = 1),
                        (d.default.instance.grade = 0),
                        d.default.instance.localChanges();
                    }
                }
              }),
              (t.prototype.update = function () {
                (this.capacityNode.getComponent(cc.Label).string =
                  u.default.instance.getcapacityNum() + ""),
                  u.default.instance.autoResponseBoo
                    ? (this.replyLabelNode.getComponent(cc.Label).string =
                        f.default.instace.gettimeText(
                          1,
                          u.default.instance.MaxtiliNum -
                            u.default.instance.tiliNum
                        ))
                    : (this.replyLabelNode.getComponent(cc.Label).string = "");
              }),
              a(
                [g({ type: cc.Node, displayName: "\u5f53\u524d\u8282\u70b9" })],
                t.prototype,
                "currentNode",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u5f53\u524d\u89c6\u56fe" })],
                t.prototype,
                "pageViewNode",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u5173\u5361iten content" })],
                t.prototype,
                "contentNode",
                void 0
              ),
              a(
                [
                  g({
                    type: cc.Node,
                    displayName: "\u80fd\u91cf\u6587\u672c\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "capacityNode",
                void 0
              ),
              a(
                [
                  g({
                    type: cc.Node,
                    displayName:
                      "\u80fd\u91cf\u56de\u590d\u5012\u8ba1\u65f6\u6587\u672c",
                  }),
                ],
                t.prototype,
                "replyLabelNode",
                void 0
              ),
              a([y], t)
            );
          })(cc.Component);
        (r.default = v), cc._RF.pop();
      },
      {},
    ],
    CuoWuTip: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "cc9965Dl4RCM5WFwlngVH/M", "CuoWuTip");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = cc._decorator,
          d = s.ccclass,
          p =
            (s.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  this.node.scale = 0;
                }),
                (t.prototype.init = function (e, t) {
                  l.default.instace.playSound("\u56de\u7b54\u9519\u8bef"),
                    (u.default.instance.finishBoo = !0);
                  var o = this;
                  cc.tween(o.node)
                    .to(0.2, { scale: 1.2 })
                    .to(0.1, { scale: 1 })
                    .delay(1.5)
                    .to(0.2, { scale: 0 })
                    .delay(0.5)
                    .call(function () {
                      e.call(t),
                        (u.default.instance.finishBoo = !1),
                        o.destroy();
                    })
                    .start();
                }),
                a([d], t)
              );
            })(cc.Component));
        (r.default = p), cc._RF.pop();
      },
      {},
    ],
    CustomListening: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e3fa9HZjD5F06h/Wr/C6nke", "CustomListening");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u = a.property,
          s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.levelNode = null), t;
            }
            return (
              r(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.customAnimationCall = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this.levelNode
                  .getComponent(this.levelNode.name)
                  .customAnimationCall(e);
              }),
              c(
                [u({ type: cc.Node, displayName: "\u5173\u5361node" })],
                t.prototype,
                "levelNode",
                void 0
              ),
              c([l], t)
            );
          })(cc.Component);
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    DemiseUI: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "09cb4cgRgNPOYsr+caz3RSe", "DemiseUI");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("SceneManager"),
          u = cc._decorator,
          s = u.ccclass,
          d =
            (u.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {}),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchHanler = function (e, t) {
                  switch (t) {
                    case "\u8fd4\u56de\u4e3b\u9875":
                      l.default.instance.jumpScene("\u83dc\u5355\u573a\u666f");
                      break;
                    case "\u91cd\u65b0\u5f00\u59cb":
                      l.default.instance.jumpScene("\u6e38\u620f\u573a\u666f");
                  }
                }),
                a([s], t)
              );
            })(cc.Component));
        (r.default = d), cc._RF.pop();
      },
      {},
    ],
    Dialogue: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "334d7HREbtKBKmd1MOaJqjS", "Dialogue");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = cc._decorator,
          s = u.ccclass,
          d = u.property,
          p = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bgNode = null),
                (t.textNode = null),
                (t.textLength = 0),
                (t.text = ""),
                (t.currentNum = 0),
                (t.typingBoo = !1),
                (t.disappearBoo = !1),
                (t.soundBoo = !0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.onLoad = function () {
                (this.textNode.getComponent(cc.Label).string = ""),
                  (this.bgNode.opacity = 0);
              }),
              (t.prototype.start = function () {}),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.initialTalk = function (e, t) {
                void 0 === t && (t = !1);
                var o = this;
                o.text != e &&
                  ((o.disappearBoo = t),
                  o.bgNode.opacity <= 0
                    ? cc
                        .tween(o.bgNode)
                        .to(0.3, { opacity: 255 })
                        .call(function () {
                          o.talk(e);
                        })
                        .start()
                    : o.talk(e));
              }),
              (t.prototype.talk = function (e) {
                (this.typingBoo = !0),
                  (this.text = e),
                  (this.textNode.getComponent(cc.Label).string = this.text);
              }),
              (t.prototype.typing = function () {
                var e = this;
                (e.textNode.getComponent(cc.Label).string =
                  e.textNode.getComponent(cc.Label).string +
                  e.text[e.currentNum]),
                  e.currentNum++,
                  e.currentNum >= this.textLength &&
                    1 == e.disappearBoo &&
                    ((e.disappearBoo = !1),
                    (e.typingBoo = !1),
                    (e.text = ""),
                    e.scheduleOnce(function () {
                      0 == e.typingBoo &&
                        ((e.bgNode.opacity = 0),
                        (e.textNode.getComponent(cc.Label).string = ""));
                    }, 1));
              }),
              (t.prototype.playSound = function (e) {
                0 == this.typingBoo && l.default.instace.playSound(e);
              }),
              (t.prototype.playSound1 = function (e, t) {
                var o = this;
                1 == this.soundBoo &&
                  ((this.soundBoo = !1),
                  l.default.instace.playSound(e),
                  this.scheduleOnce(function () {
                    o.soundBoo = !0;
                  }, t));
              }),
              a(
                [d({ type: cc.Node, displayName: "bg" })],
                t.prototype,
                "bgNode",
                void 0
              ),
              a(
                [d({ type: cc.Node, displayName: "\u6587\u672c" })],
                t.prototype,
                "textNode",
                void 0
              ),
              a([s], t)
            );
          })(cc.Component);
        (r.default = p), cc._RF.pop();
      },
      {},
    ],
    DuiTip: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a658eM7XONFq6y7q372vJ1B", "DuiTip");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = cc._decorator,
          d = s.ccclass,
          p =
            (s.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  this.node.scale = 0;
                }),
                (t.prototype.init = function (e, t) {
                  (u.default.instance.isWin = !0),
                    l.default.instace.playSound("\u5bf9"),
                    (u.default.instance.finishBoo = !0);
                  var o = this;
                  (o.node.x = u.default.instance.duiGouX),
                    (o.node.y = u.default.instance.duiGouY),
                    cc
                      .tween(o.node)
                      .to(0.2, { scale: 1.2 })
                      .to(0.1, { scale: 1 })
                      .delay(1.5)
                      .to(0.2, { scale: 0 })
                      .delay(0.5)
                      .call(function () {
                        e.call(t),
                          (u.default.instance.finishBoo = !1),
                          o.destroy();
                      })
                      .start();
                }),
                a([d], t)
              );
            })(cc.Component));
        (r.default = p), cc._RF.pop();
      },
      {},
    ],
    FenXiang: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d921eOABLFJobmMNUNDlboc", "FenXiang");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("Tool"),
          s = cc._decorator,
          d = s.ccclass,
          p = s.property,
          f = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.lightNode = null),
                (t.FenXiangnode = null),
                (t.returnNode = null),
                (t.fenXiangNode = null),
                (t.num = 0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                this.cameraShan(), this.init();
              }),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {
                cc.director.emit(
                  "homeClose",
                  "\u5206\u4eab\u89c6\u9891\u754c\u9762"
                );
              }),
              (t.prototype.cameraShan = function () {
                this.FenXiangnode.active = !1;
                var e = this;
                e.lightNode.runAction(
                  cc.sequence(
                    cc.delayTime(0.5),
                    cc.fadeIn(0.1),
                    cc.callFunc(function () {
                      l.default.instace.playSound("\u76f8\u673a"),
                        cc
                          .tween(e)
                          .delay(0.05)
                          .call(function () {
                            e.FenXiangnode.active = !0;
                          })
                          .start();
                    }),
                    cc.fadeOut(0.2)
                  )
                );
              }),
              (t.prototype.init = function () {
                var e = this;
                (this.returnNode.active = !1),
                  this.scheduleOnce(function () {
                    e.returnNode.active = !0;
                  }, window.AD.btnDelayTime);
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "\u5206\u4eab":
                    l.default.instace.playSound("\u6309\u94ae"),
                      window.AD_TouTiao.luPingShare(
                        this.videoProsperity,
                        this.videoProsperityLose,
                        this,
                        "\u5f55\u5c4f"
                      );
                    break;
                  case "\u8fd4\u56de":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      1 == window.AD.couldZJD())
                    )
                      return void window.AD_TouTiao.luPingShare(
                        this.videoProsperity,
                        this.videoProsperityLose,
                        this,
                        "\u5f55\u5c4f"
                      );
                    u.default.instace.maxAndMinAnimation(
                      this.FenXiangnode,
                      this
                    );
                    break;
                  case "\u5206\u4eab1":
                    if (window.AD.wuDianRate <= 0) break;
                    l.default.instace.playSound("\u6309\u94ae"),
                      window.AD_TouTiao.luPingShare(
                        this.videoProsperity,
                        this.videoProsperityLose,
                        this,
                        "\u5f55\u5c4f"
                      );
                }
              }),
              (t.prototype.videoProsperity = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                u.default.instace.maxAndMinAnimation(this.FenXiangnode, this);
              }),
              (t.prototype.videoProsperityLose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this.num++,
                  this.num > 3 &&
                    u.default.instace.maxAndMinAnimation(
                      this.FenXiangnode,
                      this
                    );
              }),
              a(
                [p({ type: cc.Node, displayName: "light" })],
                t.prototype,
                "lightNode",
                void 0
              ),
              a(
                [p({ type: cc.Node, displayName: "\u8282\u70b9" })],
                t.prototype,
                "FenXiangnode",
                void 0
              ),
              a(
                [p({ type: cc.Node, displayName: "\u8fd4\u56de" })],
                t.prototype,
                "returnNode",
                void 0
              ),
              a(
                [p({ type: cc.Node, displayName: "\u5206\u4eab\u6309\u94ae" })],
                t.prototype,
                "fenXiangNode",
                void 0
              ),
              a([d], t)
            );
          })(cc.Component);
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    FollowDouYinView: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e0ae4PcljFCw4CJ3S4yPqn6", "FollowDouYinView");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("GameDataManger"),
          s = i("Tool"),
          d = cc._decorator,
          p = d.ccclass,
          f = d.property,
          h = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.currentNode = null), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.onEnable = function () {
                s.default.instace.minAndMaxAnimation(this.currentNode, this);
              }),
              (t.prototype.onDisable = function () {
                cc.director.emit(
                  "homeClose",
                  "\u7b54\u6848\u63d0\u793a\u754c\u9762"
                );
              }),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.touchHanler = function (e, t) {
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "\u8fd4\u56de":
                    s.default.instace.maxAndMinAnimation(
                      this.currentNode,
                      this
                    );
                    break;
                  case "\u9886\u53d6":
                    u.default.instance.setcapacityNumVary(100),
                      (u.default.instance.isDouyin = !0),
                      u.default.instance.localChanges(),
                      s.default.instace.maxAndMinAnimation(
                        this.currentNode,
                        this
                      );
                }
              }),
              a(
                [f({ type: cc.Node, displayName: "\u5f53\u524d\u8282\u70b9" })],
                t.prototype,
                "currentNode",
                void 0
              ),
              a([p], t)
            );
          })(cc.Component);
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    GameDataManger: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ec0f1lLebRIY5ytoku/uaAL", "GameDataManger");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("Tool"),
          u = cc._decorator,
          s = u.ccclass,
          d =
            (u.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.tipNum = 1),
                  (t.isDouyin = !1),
                  (t.capacityNum = 0),
                  (t.MaxCapacityNum = 999),
                  (t.answerPromptNum = 50),
                  (t.keyNum = 1),
                  (t.tiliNum = 60),
                  (t.MaxtiliNum = 120),
                  (t.autoResponseBoo = !1),
                  t
                );
              }
              var o;
              return (
                c(t, e),
                (o = t),
                Object.defineProperty(t, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new o()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (t.prototype.getcapacityNum = function () {
                  return this.capacityNum;
                }),
                (t.prototype.setcapacityNumVary = function (e) {
                  (this.capacityNum += e),
                    this.capacityNum >= this.MaxCapacityNum &&
                      ((this.capacityNum = this.MaxCapacityNum),
                      1 == this.autoResponseBoo &&
                        ((this.autoResponseBoo = !1),
                        this.unschedule(this.autoResponseHealth))),
                    this.capacityNum <= 0 && (this.capacityNum = 0),
                    this.localChanges();
                }),
                (t.prototype.setcapacityNum = function (e) {
                  (this.capacityNum = e), this.localChanges();
                }),
                (t.prototype.setkeyNum = function (e) {
                  (this.keyNum += e), this.localChanges();
                }),
                (t.prototype.autoResponseHealth = function () {
                  this.tiliNum++,
                    this.tiliNum < this.MaxtiliNum ||
                      ((this.tiliNum = this.MaxtiliNum),
                      (this.autoResponseBoo = !1),
                      this.unschedule(this.autoResponseHealth),
                      this.capacityNum < this.MaxCapacityNum &&
                        this.setcapacityNumVary(1));
                }),
                (t.prototype.init = function () {
                  var e = cc.sys.localStorage.getItem(
                    "gameDataManager_TuiLi_haiWai1"
                  );
                  if (e) {
                    var t = JSON.parse(e);
                    console.log("######################" + JSON.stringify(t)),
                      (this.capacityNum = t.capacityNum
                        ? t.capacityNum
                        : this.capacityNum),
                      (this.timeStrNum = t.timeStrNum
                        ? t.timeStrNum
                        : this.timeStrNum),
                      t.keyNum && (this.keyNum = t.keyNum),
                      (this.tipNum = t.tipNum ? t.tipNum : this.tipNum);
                    var o = l.default.instace.getDate("millisecond"),
                      n = Math.floor((o - this.timeStrNum) / 1e3 / 60);
                    this.capacityNum < this.MaxCapacityNum &&
                      (n =
                        this.MaxCapacityNum - this.capacityNum > n
                          ? n
                          : this.MaxCapacityNum - this.capacityNum),
                      (this.isDouyin =
                        null != t.isDouyin ? t.isDouyin : this.isDouyin),
                      console.log(
                        "sssssssssssssssssssssss" + JSON.stringify(t)
                      ),
                      console.log("sssssssssssssssssssssss" + this.tipNum);
                  }
                }),
                (t.prototype.localChanges = function () {
                  var e = l.default.instace.getDate("millisecond");
                  this.timeStrNum = e;
                  var t = {
                    capacityNum: this.capacityNum,
                    timeStrNum: this.timeStrNum,
                    keyNum: this.keyNum,
                    tipNum: this.tipNum,
                    isDouyin: this.isDouyin,
                  };
                  cc.sys.localStorage.setItem(
                    "gameDataManager_TuiLi_haiWai1",
                    JSON.stringify(t)
                  );
                }),
                (t.prototype.localDeletion = function () {
                  cc.sys.localStorage.removeItem(
                    "gameDataManager_TuiLi_haiWai1"
                  );
                }),
                (t.prototype.timerCallback = function (e, t, o) {
                  this.schedule(
                    function () {
                      e.call(t);
                    },
                    o,
                    0,
                    0
                  );
                }),
                (o = a([s], t))
              );
            })(cc.Component));
        (r.default = d), cc._RF.pop();
      },
      {},
    ],
    GameUi: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8a457vK40lO9KuX1R6oj6a7", "GameUi");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("GameDataManger"),
          s = i("LevelDataManager"),
          d = i("OperationData"),
          p = i("Res"),
          f = i("Tool"),
          h = i("SceneManager"),
          y = i("TipManager"),
          g = cc._decorator,
          v = g.ccclass,
          m = g.property,
          N = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.belowNode = null),
                (t.victotyNode = null),
                (t.answerPromptNode = null),
                (t.videoTipView = null),
                (t.capacityNode = null),
                (t.replyLabelNode = null),
                (t.zheZhaoNode = null),
                (t.followDouYinViewNode = null),
                (t.finishBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (this.isCanTime = !1),
                  l.default.instace.playMusic(
                    "\u83dc\u5355\u80cc\u666f\u97f3\u4e50"
                  ),
                  cc.director.on("homeClose", this.homeClose, this),
                  cc.director.on("msgRemoveAll", this.tips, this),
                  cc.director.on("victotyNode", this.homeSwitcher, this),
                  cc.director.on("PhysicalResponse", this.homeSwitcher, this),
                  cc.director.on("AnswerPromptUI", this.homeSwitcher, this),
                  cc.director.on("homeSwitcher", this.homeSwitcher, this);
              }),
              (t.prototype.onEnable = function () {
                YYGGamesUtil.gameLogo();
              }),
              (t.prototype.tips = function () {
                cc.director.off("homeClose", this.homeClose, this),
                  cc.director.off("msgRemoveAll", this.tips, this),
                  cc.director.off("victotyNode", this.homeSwitcher, this),
                  cc.director.off("PhysicalResponse", this.homeSwitcher, this),
                  cc.director.off("AnswerPromptUI", this.homeSwitcher, this),
                  cc.director.off("homeSwitcher", this.homeSwitcher, this);
              }),
              (t.prototype.init = function () {}),
              (t.prototype.update = function () {
                this.finishBoo != d.default.instance.finishBoo &&
                  ((this.finishBoo = d.default.instance.finishBoo),
                  (this.zheZhaoNode.active = this.finishBoo)),
                  (this.capacityNode.getComponent(cc.Label).string =
                    u.default.instance.getcapacityNum() + ""),
                  u.default.instance.autoResponseBoo
                    ? (this.replyLabelNode.getComponent(cc.Label).string =
                        f.default.instace.gettimeText(
                          1,
                          u.default.instance.MaxtiliNum -
                            u.default.instance.tiliNum
                        ))
                    : (this.replyLabelNode.getComponent(cc.Label).string = "");
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u8fd4\u56de\u4e3b\u9875":
                    YYGGames.showInterstitial(function () {
                      console.error("\u63d2\u5c4f"),
                        (window.isRet = !0),
                        window.showAudio
                          ? (window.isGameRet = !1)
                          : (window.isGameRet = !0),
                        l.default.instace.playSound("\u6309\u94ae"),
                        h.default.instance.jumpScene(
                          "\u83dc\u5355\u573a\u666f"
                        ),
                        (h.default.instance.levelViewBoo = !0);
                    });
                    break;
                  case "\u770b\u89c6\u9891\u52a0\u4f53\u529b":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      u.default.instance.getcapacityNum() >=
                        u.default.instance.MaxCapacityNum)
                    ) {
                      var n = {
                        name: "\u63d0\u793a\u8bed\u53e5",
                        text: "Full lamp bulbs!",
                      };
                      y.default.instace.addUITip(n);
                    } else
                      YYGGames.showReward(function () {
                        (n = {
                          name: "\u63d0\u793a\u8bed\u53e5",
                          text: "You got 100 lamp bulbs!",
                        }),
                          y.default.instace.addUITip(n),
                          o.videoProsperity(1);
                      });
                    break;
                  case "\u67e5\u770b\u63d0\u793a":
                    l.default.instace.playSound("\u6309\u94ae"),
                      1 == d.default.instance.answerBoo
                        ? this.homeSwitcher(
                            "\u7b54\u6848\u63d0\u793a\u754c\u9762",
                            d.default.instance.answerText
                          )
                        : u.default.instance.getcapacityNum() >=
                          u.default.instance.answerPromptNum
                        ? (u.default.instance.setcapacityNumVary(
                            -u.default.instance.answerPromptNum
                          ),
                          (d.default.instance.answerBoo = !0),
                          this.homeSwitcher(
                            "\u7b54\u6848\u63d0\u793a\u754c\u9762",
                            d.default.instance.answerText
                          ))
                        : ((n = {
                            name: "\u63d0\u793a\u8bed\u53e5",
                            text: "Not enough lamp bulbs!",
                          }),
                          y.default.instace.addUITip(n),
                          cc.director.emit(
                            "PhysicalResponse",
                            "\u4f53\u529b\u56de\u590d\u754c\u9762"
                          ));
                    break;
                  case "\u8df3\u8fc7\u672c\u5173":
                    l.default.instace.playSound("\u6309\u94ae"),
                      d.default.instance.levelNum + 1 >
                      s.default.instance.MaxUnlockNum
                        ? ((n = {
                            name: "\u63d0\u793a\u8bed\u53e5",
                            text: "This is the last level!",
                          }),
                          y.default.instace.addUITip(n))
                        : YYGGames.showReward(function () {
                            o.videoProsperity(3);
                          });
                }
              }),
              (t.prototype.homeSwitcher = function () {
                for (var e = this, t = [], o = 0; o < arguments.length; o++)
                  t[o] = arguments[o];
                switch (t[0]) {
                  case "\u80dc\u5229\u754c\u9762":
                    (this.victotyNode.active = !0),
                      this.victotyNode.getComponent("VictoryUI").init();
                    break;
                  case "\u7b54\u6848\u63d0\u793a\u754c\u9762":
                    (this.answerPromptNode.active = !0),
                      this.answerPromptNode
                        .getComponent("AnswerPromptUI")
                        .init(t[1]);
                    break;
                  case "\u4f53\u529b\u56de\u590d\u754c\u9762":
                    p.default.instance.loadPrefab(
                      "Prefab",
                      "Game/PhysicalResponse",
                      function (t) {
                        e.node.addChild(t);
                      },
                      this
                    );
                }
                (d.default.instance.finishBoo = !1), window.AD.showBanner();
              }),
              (t.prototype.homeClose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                e[0];
              }),
              (t.prototype.viewShow = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.videoProsperity = function (e) {
                switch (e) {
                  case 1:
                    u.default.instance.setcapacityNumVary(100);
                    break;
                  case 2:
                    (d.default.instance.answerBoo = !0),
                      this.homeSwitcher(
                        "\u7b54\u6848\u63d0\u793a\u754c\u9762",
                        d.default.instance.answerText
                      );
                    break;
                  case 3:
                    s.default.instance.setunlockLevel(
                      d.default.instance.levelNum + 1,
                      !0
                    ),
                      d.default.instance.levelNum++,
                      s.default.instance.setunlockLevel(
                        d.default.instance.levelNum,
                        !0
                      ),
                      h.default.instance.jumpScene("\u6e38\u620f\u573a\u666f");
                }
              }),
              (t.prototype.videoProsperityLose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              a(
                [
                  m({
                    type: cc.Node,
                    displayName: "\u4e0b\u9762\u4e09\u4e2a\u6309\u94ae",
                  }),
                ],
                t.prototype,
                "belowNode",
                void 0
              ),
              a(
                [m({ type: cc.Node, displayName: "\u80dc\u5229\u754c\u9762" })],
                t.prototype,
                "victotyNode",
                void 0
              ),
              a(
                [
                  m({
                    type: cc.Node,
                    displayName: "\u7b54\u6848\u63d0\u793a\u754c\u9762",
                  }),
                ],
                t.prototype,
                "answerPromptNode",
                void 0
              ),
              a(
                [
                  m({
                    type: cc.Node,
                    displayName: "\u89c6\u9891\u63d0\u793a\u754c\u9762",
                  }),
                ],
                t.prototype,
                "videoTipView",
                void 0
              ),
              a(
                [
                  m({
                    type: cc.Node,
                    displayName: "\u80fd\u91cf\u6587\u672c\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "capacityNode",
                void 0
              ),
              a(
                [
                  m({
                    type: cc.Node,
                    displayName:
                      "\u80fd\u91cf\u56de\u590d\u5012\u8ba1\u65f6\u6587\u672c",
                  }),
                ],
                t.prototype,
                "replyLabelNode",
                void 0
              ),
              a(
                [
                  m({
                    type: cc.Node,
                    displayName: "\u906e\u7f69\u9632\u6b62\u70b9\u51fb",
                  }),
                ],
                t.prototype,
                "zheZhaoNode",
                void 0
              ),
              a([v], t)
            );
          })(cc.Component);
        (r.default = N), cc._RF.pop();
      },
      {},
    ],
    Game: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d8ec09Izm1KipIc67zy8+yh", "Game");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = cc._decorator,
          d = s.ccclass,
          p =
            (s.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  l.default.instance.init(),
                    u.default.instace.zheZhaoEffectsPlay();
                }),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                a([d], t)
              );
            })(cc.Component));
        (r.default = p), cc._RF.pop();
      },
      {},
    ],
    Global: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "97f12WKqehN8qke3nsY0bZd", "Global");
        var n = o,
          i = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function () {
              function e() {
                (this.screenWidth = 720),
                  (this.screenHeight = 1280),
                  (this.screenProportion = 1280 / 720);
              }
              var t;
              return (
                (t = e),
                (e.getinstance = function () {
                  return (
                    this._instance || (this._instance = new t()), this._instance
                  );
                }),
                (e.prototype.topAdapter = function (e) {
                  this.screenHeight > 1280 &&
                    (e.y = (this.screenHeight - 1280) / 2);
                }),
                (e.prototype.nodeTopAdapter = function (e) {
                  this.screenHeight > 1280 &&
                    (e.y += (this.screenHeight - 1280) / 2);
                }),
                (t = i([c], e))
              );
            })());
        (n.default = a), cc._RF.pop();
      },
      {},
    ],
    GoodsTuoDong: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a7b6bmnF7pGNoMGdsm+/Fdy", "GoodsTuoDong");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u = a.property,
          s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.levelNode = null),
                (t.chuMoX = 0),
                (t.chuMoY = 0),
                (t.collideBoo = !1),
                (t.otherNode = null),
                (t.dragBoo = !0),
                (t.situBoo = !0),
                (t.isCollideBoo = !1),
                t
              );
            }
            return (
              r(t, e),
              (t.prototype.start = function () {
                (this.level = this.levelNode.getComponent(this.levelNode.name)),
                  this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandler,
                    this
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_END,
                    this.touchEndHandler,
                    this
                  ),
                  this.node.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.touchEndHandler,
                    this
                  ),
                  this.init();
              }),
              (t.prototype.init = function () {
                (this.initX = this.node.x),
                  (this.initY = this.node.y),
                  (this.initScaleX = this.node.scale.x),
                  (this.initScaleY = this.node.scale.y),
                  (this.initRotation = this.node.rotation);
              }),
              (t.prototype.touchBeginHandler = function (e) {
                if (this.dragBoo && this.situBoo) {
                  (this.chuMoX = e.getLocationX()),
                    (this.chuMoY = e.getLocationY());
                  var t = e.getDelta();
                  (this.node.y += t.y + 80),
                    (this.isCollideBoo = !0),
                    this.levelNode
                      .getComponent(this.levelNode.name)
                      .touchBeginHandler(this.node),
                    this.node.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler,
                      this
                    );
                }
              }),
              (t.prototype.touchMoveHandler = function (e) {
                if (this.dragBoo && this.situBoo) {
                  e.getLocationX(),
                    this.chuMoX,
                    e.getLocationY(),
                    this.chuMoY,
                    (this.chuMoX = e.getLocationX()),
                    (this.chuMoY = e.getLocationY());
                  var t = e.getDelta();
                  (this.node.x += t.x), (this.node.y += t.y);
                }
              }),
              (t.prototype.touchEndHandler = function () {
                this.dragBoo &&
                  this.situBoo &&
                  (console.log("\u653e\u5f00"),
                  console.error(this.collideBoo),
                  1 == this.collideBoo
                    ? this.levelNode
                        .getComponent(this.levelNode.name)
                        .collisionEvent(this.goodsTag, this, this.boxTag)
                    : (this.backInSitu(),
                      this.levelNode
                        .getComponent(this.levelNode.name)
                        .touchEndHandler(this.node)),
                  (this.isCollideBoo = !1));
              }),
              (t.prototype.onCollisionStay = function (e, t) {
                this.isCollideBoo &&
                  0 == this.collideBoo &&
                  ((this.collideBoo = !0),
                  (this.goodsTag = t.tag),
                  (this.boxTag = e.tag),
                  (this.otherNode = e.node),
                  this.levelNode
                    .getComponent(this.levelNode.name)
                    .onCollisionStay(e, t, this));
              }),
              (t.prototype.onCollisionExit = function () {
                1 == this.collideBoo && (this.collideBoo = !1);
              }),
              (t.prototype.backInSitu = function () {
                this.node.off(
                  cc.Node.EventType.TOUCH_MOVE,
                  this.touchMoveHandler,
                  this
                );
                var e = this;
                (e.situBoo = !1), (e.isCollideBoo = !1);
                var t =
                  Math.sqrt(
                    Math.pow(e.node.x - e.initX, 2) +
                      Math.pow(e.node.y - e.initY, 2)
                  ) / 1200;
                (t = t > 1 ? 1 : t),
                  cc
                    .tween(e.node)
                    .to(
                      t,
                      {
                        x: e.initX,
                        y: e.initY,
                        scale: { x: this.initScaleX, y: this.initScaleY },
                        rotation: this.initRotation,
                      },
                      { easing: "quadIn" }
                    )
                    .call(function () {
                      (e.situBoo = !0), (e.isCollideBoo = !0);
                    })
                    .start();
              }),
              c(
                [u({ type: cc.Node, displayName: "\u5173\u5361node" })],
                t.prototype,
                "levelNode",
                void 0
              ),
              c([l], t)
            );
          })(cc.Component);
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    GuideConfig: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5c599QyhPFJUb47LdprVvFW", "GuideConfig");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                r(t, e),
                (t.prototype.start = function () {}),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                c([l], t)
              );
            })(cc.Component));
        (i.default = u), cc._RF.pop();
      },
      {},
    ],
    GuideManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4f2a8tzYtFIvoTE0TOqCeK8", "GuideManager");
        var n = o,
          i = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function () {
              function e() {}
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new t()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.start = function () {}),
                (e.prototype.onEnable = function () {}),
                (e.prototype.onDisable = function () {}),
                (e.prototype.onDestroy = function () {}),
                (t = i([c], e))
              );
            })());
        (n.default = a), cc._RF.pop();
      },
      {},
    ],
    IsDouYin: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "96682As7i1O0ZxYZaErsw9u", "IsDouYin");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("GameDataManger"),
          u = cc._decorator,
          s = u.ccclass,
          d =
            (u.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  this.node.active = window.AD_TouTiao.isDouYin();
                  var e = this.node.scale;
                  this.node.runAction(
                    cc
                      .sequence(cc.scaleTo(0.2, e + 0.1), cc.scaleTo(0.2, e))
                      .repeatForever()
                  );
                }),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.touchHanler = function () {
                  window.AD_TouTiao.openAwemeUserProfile(
                    function () {
                      1 != l.default.instance.isDouyin
                        ? cc.director.emit(
                            "homeSwitcher",
                            "\u5173\u6ce8\u6296\u97f3\u5956\u52b1\u754c\u9762"
                          )
                        : cc.director.emit("TipYuJu", {
                            name: "\u63d0\u793a\u8bed\u53e5",
                            text: "\u4f60\u5df2\u83b7\u5f97\u5956\u52b1\uff0c\u91cd\u590d\u5173\u6ce8\u4e0d\u53ef\u83b7\u5f97\u5956\u52b1",
                          });
                    },
                    function () {},
                    this,
                    "\u5173\u6ce8\u6709\u793c"
                  );
                }),
                a([s], t)
              );
            })(cc.Component));
        (r.default = d), cc._RF.pop();
      },
      {},
    ],
    LabelUtils2: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "d076bYHdXpHfIM6Rx3iw8GU", "LabelUtils2");
        var o = t,
          n = cc.Class({
            extends: cc.Component,
            properties: {
              _ISDEBUG: !1,
              _labelName: "",
              location: "",
              labels: null,
              _retryTime: 0,
              isSpecial: !1,
              _retryTimeLocationList: 0,
              locationList: [],
              initLabelSuccess: !1,
              initIsSpecial: !1,
            },
            getBaseUrl: function () {},
            statics: { instance: null },
            onLoad: function () {
              this.canRefresh = !1;
            },
            getLabel: function (e) {
              if (
                (console.log("getLabel:::" + e),
                !e || !this.initLabelSuccess || !this.initIsSpecial)
              )
                return !1;
              if ((console.log("getLabel2>>>>:::" + e), this.isSpecial)) {
                if (this.labels.special.length > 0) {
                  for (var t = 0, o = this.labels.special.length; t < o; t++) {
                    var n = this.labels.special[t];
                    if (n.switchname == e) {
                      var i = 1 == n.switchvalue;
                      return console.log(e + "::" + i), i;
                    }
                  }
                  return !1;
                }
                return !1;
              }
              if (this.labels.common.length > 0) {
                for (var r = 0, c = this.labels.common.length; r < c; r++) {
                  var a = this.labels.common[r];
                  if (a.switchname == e) {
                    var l = 1 == a.switchvalue;
                    return console.log(e + "::" + l), l;
                  }
                }
                return !1;
              }
              return !1;
            },
            initLabel: function (e) {
              console.log("initLabel:" + e),
                e && e.length > 0 && (this._labelName = e),
                console.log("initLabel:  start"),
                this._getMyLocation(),
                this._fetchLabel(),
                this._fetchLocationList();
            },
            refreshLabelConfig: function () {
              this.canRefresh && this._fetchLabel();
            },
            _initIsSpecial: function () {
              this.isSpecial = !1;
              var e = 0;
              if (this.location && this.initLabelSuccess && this.locationList) {
                for (var t = 0; t < this.locationList.length; t++)
                  if (this.location == this.locationList[t].name) {
                    e = this.locationList[t].id;
                    break;
                  }
                if (this.labels.blocked) {
                  var o = this.labels.blocked.split(",");
                  if (o)
                    for (var n = 0; n < o.length; n++)
                      if (e == o[n]) {
                        this.isSpecial = !0;
                        break;
                      }
                }
              }
              (this.initIsSpecial = !0),
                console.log("isSpecial:" + this.isSpecial);
            },
            _fetchLocationList: function () {},
            _fetchLabel: function () {},
            sendPostRequest: function () {},
            _getMyLocation: function () {},
            _httpGetsLocation: function () {},
            _httpGets: function () {},
            aa: function () {
              console.log("jinlaio");
            },
          });
        (n.getInstance = function () {
          return null == n.instance && (n.instance = new n()), n.instance;
        }),
          (o.exports = n),
          cc._RF.pop();
      },
      {},
    ],
    Level10: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b2705Rk7CdPI47H65mcDr+6", "Level10");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("Tool"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y =
            (f.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.positionNumAll = [-1, 0, 0, 0, 0]), t;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  u.default.instance.duiGouX = 0;
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  l.default.instace.playSound("\u6309\u94ae");
                  var o = parseInt(t);
                  this.positionNumAll[o]++,
                    this.positionNumAll[o] > 9 && (this.positionNumAll[o] = 0),
                    (e.target.getComponent(cc.Label).string =
                      "" + this.positionNumAll[o]);
                  var n = s.default.instace.getDate("hour"),
                    i = n > 9 ? n.toString() : "0" + n,
                    r = s.default.instace.getDate("minute"),
                    c = r > 9 ? r.toString() : "0" + r;
                  if (
                    "" +
                      this.positionNumAll[1] +
                      this.positionNumAll[2] +
                      this.positionNumAll[3] +
                      this.positionNumAll[4] ==
                    i + c
                  ) {
                    var a = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    d.default.instace.addUITip(a);
                  }
                }),
                a([h], t)
              );
            })(p.default));
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level11: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3f73aYEZAVBWaphLeGEs2qY", "Level11");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.answerChooseNode = null),
                (t.figureNode1 = null),
                (t.baoNode = null),
                (t.laJiDuiNode = null),
                (t.photoNode = null),
                (t.photoBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = -120),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  ));
                var e = this.figureNode1.getComponents("Dialogue");
                this.scheduleOnce(function () {
                  e[1].initialTalk("You're everything to me", !1);
                }, 1.5),
                  this.scheduleOnce(function () {
                    e[0].initialTalk("I'm true to you", !1);
                  }, 4);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u70b9\u51fb\u5305":
                    e.target.removeComponent(cc.Button);
                    var n =
                      this.figureArmatureDisplay1.armature().animation
                        .lastAnimationState.currentTime;
                    this.figureArmatureDisplay1
                      .armature()
                      .animation.gotoAndPlayByTime("idle2", n, -1),
                      (o.baoNode.active = !0),
                      cc
                        .tween(o.baoNode)
                        .to(1, {
                          x: o.laJiDuiNode.x - 15,
                          y: o.laJiDuiNode.y + 20,
                          angle: -140,
                        })
                        .call(function () {
                          (o.baoNode.active = !1),
                            (o.laJiDuiNode.active = !0),
                            (o.photoNode.active = !0);
                        })
                        .start();
                    break;
                  case "\u70b9\u51fb\u7167\u7247":
                    if (1 == o.photoBoo) break;
                    l.default.instace.playSound("\u5bf9"),
                      (o.photoBoo = !0),
                      (o.answerChooseNode.active = !1),
                      cc
                        .tween(o.photoNode)
                        .to(0.8, { x: 0, y: 0, scale: 1 })
                        .delay(2)
                        .to(0.8, { x: -50, y: -290, scale: 0.2 })
                        .call(function () {
                          (o.answerChooseNode.active = !0), (o.photoBoo = !1);
                        })
                        .start();
                    break;
                  case "A":
                    var i = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(i);
                    break;
                  case "B":
                    (i = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(i);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u5305" })],
                t.prototype,
                "baoNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u5783\u573e\u5806" })],
                t.prototype,
                "laJiDuiNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u7167\u7247" })],
                t.prototype,
                "photoNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level12: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9973aju/e1HtoPBnr8NYlJc", "Level12");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("Tool"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          g = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.answerChooseNode = null),
                (t.headNode = null),
                (t.armNode = null),
                (t.figureArmatureDisplayBoo1 = !0),
                (t.figureArmatureDisplayBoo2 = !0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 200),
                  (this.figureArmatureDisplay1 =
                    this.headNode.children[0].getComponent(
                      dragonBones.ArmatureDisplay
                    )),
                  (this.figureArmatureDisplay2 =
                    this.armNode.children[0].getComponent(
                      dragonBones.ArmatureDisplay
                    )),
                  (this.headInitLocation = this.headNode.position),
                  (this.armInitLocation = this.armNode.position);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.update = function () {
                1 != this.answerChooseNode.active &&
                  (s.default.instace.getDistance(
                    this.headNode.position,
                    this.headInitLocation
                  ) > 100 &&
                    s.default.instace.getDistance(
                      this.armNode.position,
                      this.armInitLocation
                    ) > 50 &&
                    (this.answerChooseNode.active = !0),
                  s.default.instace.getDistance(
                    this.headNode.position,
                    this.headInitLocation
                  ) > 100 &&
                    1 == this.figureArmatureDisplayBoo1 &&
                    ((this.figureArmatureDisplayBoo1 = !1),
                    (this.figureArmatureDisplay1.timeScale = 0),
                    l.default.instace.playSound("\u5bf9")),
                  s.default.instace.getDistance(
                    this.armNode.position,
                    this.armInitLocation
                  ) > 50 &&
                    1 == this.figureArmatureDisplayBoo2 &&
                    ((this.figureArmatureDisplayBoo2 = !1),
                    (this.figureArmatureDisplay2.timeScale = 0),
                    l.default.instace.playSound("\u5bf9")));
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "A":
                  case "B":
                    var o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    };
                    d.default.instace.addUITip(o);
                    break;
                  case "C":
                    (o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    }),
                      d.default.instace.addUITip(o);
                }
              }),
              a(
                [
                  y({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u5934\u5957" })],
                t.prototype,
                "headNode",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u624b\u81c2" })],
                t.prototype,
                "armNode",
                void 0
              ),
              a([h], t)
            );
          })(p.default);
        (r.default = g), cc._RF.pop();
      },
      {},
    ],
    Level13: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "92342Wxco5C+pFR9s9Gq+2m", "Level13");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("Tool"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          g = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.answerChooseNode = null),
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.wigNode = null),
                (t.kaFeiBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 200),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.wigInitLocation = this.wigNode.position),
                  this.figureArmatureDisplay1.addEventListener(
                    dragonBones.EventObject.COMPLETE,
                    this.onFrameEvent,
                    this
                  );
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.update = function () {
                1 != this.answerChooseNode.active &&
                  s.default.instace.getDistance(
                    this.wigNode.position,
                    this.wigInitLocation
                  ) > 80 &&
                  ((this.answerChooseNode.active = !0),
                  l.default.instace.playSound("\u5bf9"));
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "A":
                  case "B":
                    var o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    };
                    d.default.instace.addUITip(o);
                    break;
                  case "C":
                    (o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    }),
                      d.default.instace.addUITip(o);
                    break;
                  case "\u4e2d\u95f4\u8bf4\u8bdd":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.figureNode2
                        .getComponent("Dialogue")
                        .initialTalk(
                          "Proficient in C++, java, python, vb, etc!",
                          !0
                        );
                    break;
                  case "\u559d\u5496\u5561":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      1 == this.kaFeiBoo)
                    )
                      break;
                    (this.kaFeiBoo = !0),
                      this.figureArmatureDisplay1
                        .armature()
                        .animation.gotoAndPlayByTime("idle2", 0, 1);
                }
              }),
              (t.prototype.onFrameEvent = function (e) {
                switch (e.animationState.name) {
                  case "idle2":
                    (this.kaFeiBoo = !1),
                      this.figureNode1
                        .getComponent("Dialogue")
                        .initialTalk("I know how to fix this bug", !0),
                      this.figureArmatureDisplay1
                        .armature()
                        .animation.gotoAndPlayByTime("idle1", 0, -1);
                }
              }),
              a(
                [
                  y({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u5047\u53d1" })],
                t.prototype,
                "wigNode",
                void 0
              ),
              a([h], t)
            );
          })(p.default);
        (r.default = g), cc._RF.pop();
      },
      {},
    ],
    Level14: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d6b5eYP3tBO44Vog0Bse4Qd", "Level14");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.answerChooseNode = null),
                (t.cushionNode = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = -200),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  this.cushionNode.on(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandlerCushionNode,
                    this
                  ),
                  this.cushionNode.on(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandlerCushionNode,
                    this
                  );
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {
                this.cushionNode.off(
                  cc.Node.EventType.TOUCH_START,
                  this.touchBeginHandlerCushionNode,
                  this
                ),
                  this.cushionNode.off(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandlerCushionNode,
                    this
                  );
              }),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandlerCushionNode = function () {}),
              (t.prototype.touchMoveHandlerCushionNode = function (e) {
                var t = this,
                  o = e.getDelta();
                t.cushionNode.y + o.y > 70 ||
                  ((t.cushionNode.y += o.y),
                  t.cushionNode.y <= -10 &&
                    (l.default.instace.playSound("\u5bf9"),
                    t.cushionNode.off(
                      cc.Node.EventType.TOUCH_START,
                      t.touchBeginHandlerCushionNode,
                      t
                    ),
                    t.cushionNode.off(
                      cc.Node.EventType.TOUCH_MOVE,
                      t.touchMoveHandlerCushionNode,
                      t
                    ),
                    (t.cushionNode.opacity = 255),
                    cc
                      .tween(t.cushionNode)
                      .to(1.2, { y: -210 })
                      .call(function () {
                        t.figureArmatureDisplay1.playAnimation("idle2");
                      })
                      .delay(1)
                      .call(function () {
                        t.answerChooseNode.active = !0;
                      })
                      .start()));
              }),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u70b9\u51fb\u62b1\u6795":
                    e.target.removeComponent(cc.Button),
                      cc
                        .tween(o.cushionNode)
                        .to(1, { opacity: 255 })
                        .call(function () {
                          o.figureArmatureDisplay1.playAnimation("idle2");
                        })
                        .to(2, { y: -210 })
                        .call(function () {
                          o.answerChooseNode.active = !0;
                        })
                        .start();
                    break;
                  case "A":
                    var n = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(n);
                    break;
                  case "B":
                    (n = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(n);
                    break;
                  case "\u70b9\u51fb\u4eba\u72691":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.figureNode1
                        .getComponent("Dialogue")
                        .initialTalk(
                          "I've been eating a lot since I got pregnant",
                          !0
                        );
                    break;
                  case "\u70b9\u51fb\u4eba\u72692":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.figureNode2
                        .getComponent("Dialogue")
                        .initialTalk("The baby kicks me every day", !0);
                }
              }),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u62b1\u6795" })],
                t.prototype,
                "cushionNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level15: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "acd75ovrsJDwYX3XqYZK3w4", "Level15");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.zheZhaoNode = null),
                (t.nvZhuNode = null),
                (t.bulbBrightNodeAll = []),
                (t.timeLabeNodelAll = []),
                (t.speedAll = [0.1, -0.1, 0.1, -0.1, 0.1]),
                (t.lightenBppAll = [!1, !1, !1, !1, !1]),
                (t.timeNumAll = [0, 0, 0, 0, 0]),
                (t.finishBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = 0;
                for (var e = 0; e < 5; e++)
                  (this.bulbBrightNodeAll[e].active = this.lightenBppAll[e]),
                    (this.timeLabeNodelAll[e].active = this.lightenBppAll[e]);
                this.zheZhaoNode.active = !0;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.update = function () {
                for (var e = 0; e < 5; e++)
                  (this.bulbBrightNodeAll[e].parent.angle + this.speedAll[e] >
                    5 ||
                    this.bulbBrightNodeAll[e].parent.angle + this.speedAll[e] <
                      -5) &&
                    (this.speedAll[e] = -this.speedAll[e]),
                    (this.bulbBrightNodeAll[e].parent.angle +=
                      this.speedAll[e]),
                    (this.timeLabeNodelAll[e].getComponent(cc.Label).string =
                      "" + this.timeNumAll[e]);
              }),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this,
                  n = this;
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "0":
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                    var i = parseInt(t);
                    if (this.lightenBppAll[i]) break;
                    if (
                      ((n.lightenBppAll[i] = !0),
                      -1 == this.lightenBppAll.indexOf(!1))
                    ) {
                      (this.finishBoo = !0),
                        (this.zheZhaoNode.active = !1),
                        (n.nvZhuNode.active = !0);
                      var r = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      s.default.instace.addUITip(r);
                    }
                    (n.timeNumAll[i] = 5),
                      (n.bulbBrightNodeAll[i].active = !0),
                      (this.timeLabeNodelAll[i].active = !0),
                      n.schedule(
                        function () {
                          n.timeNumAll[i]--,
                            n.timeNumAll[i] <= 0 &&
                              ((n.timeNumAll[i] = 0),
                              (n.lightenBppAll[i] = !1),
                              (o.timeLabeNodelAll[i].active = !1),
                              (n.bulbBrightNodeAll[i].active = o.finishBoo));
                        },
                        0.5,
                        4,
                        0
                      );
                }
              }),
              a(
                [h({ type: cc.Node, displayName: "\u906e\u7f69" })],
                t.prototype,
                "zheZhaoNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u5973\u4e3b" })],
                t.prototype,
                "nvZhuNode",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u4e94\u4e2a\u4eae\u7740\u7684\u706f\u6ce1",
                  }),
                ],
                t.prototype,
                "bulbBrightNodeAll",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u4e94\u4e2a\u5012\u8ba1\u65f6\u6587\u672c",
                  }),
                ],
                t.prototype,
                "timeLabeNodelAll",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level16: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2111aJlP3tIfL7MJ1bAhWeJ", "Level16");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.answerChooseNode = null), (t.answerNumAll = []), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = -120;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "quan1":
                  case "quan2":
                    l.default.instace.playSound("\u5bf9"),
                      e.target.removeComponent(cc.Button),
                      this.answerNumAll.push(1),
                      cc.tween(e.target).to(1, { opacity: 255 }).start(),
                      this.answerNumAll.length > 1 &&
                        (this.answerChooseNode.active = !0);
                    break;
                  case "B":
                    var o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(o);
                    break;
                  case "A":
                  case "C":
                    (o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(o);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level17: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d45d1zr2vtA3Y6LkFovE2eZ", "Level17");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.answerChooseNode = null),
                (t.figureNode2 = null),
                (t.collisionBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 0),
                  (this.figureArmatureDisplay2 = this.figureNode2.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  this.figureArmatureDisplay2.addEventListener(
                    dragonBones.EventObject.COMPLETE,
                    this.onFrameEvent,
                    this
                  );
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function (e) {
                e.getComponent("GoodsTuoDong").backInSitu();
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                this.touchEndHandler(t[0].node);
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this.collisionBoo ||
                  ((this.collisionBoo = !0),
                  this.figureArmatureDisplay2.playAnimation("idle2", 1),
                  this.scheduleOnce(function () {
                    l.default.instace.playSound("\u6253\u55b7\u568f");
                  }, 0.5));
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "B":
                    var o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(o);
                    break;
                  case "A":
                  case "C":
                    (o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(o);
                }
              }),
              (t.prototype.onFrameEvent = function (e) {
                switch (e.animationState.name) {
                  case "idle2":
                    this.figureArmatureDisplay2.playAnimation("idle1", -1),
                      (this.answerChooseNode.active = !0);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level18: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "fafe78/kdNDI6l/3kdSqzuS", "Level18");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("Global"),
          s = i("OperationData"),
          d = i("Tool"),
          p = i("TipManager"),
          f = i("Level"),
          h = cc._decorator,
          y = h.ccclass,
          g = h.property,
          v = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.answerChooseNode = null),
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.minuteHandNode = null),
                (t.hourHandNode = null),
                (t.currentAngle = 0),
                (t.minuteHandAngle = 0),
                (t.finishBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (s.default.instance.duiGouX = -180),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  this.minuteHandNode.on(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandler_MinuteHand,
                    this
                  ),
                  this.minuteHandNode.on(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandler_MinuteHand,
                    this
                  ),
                  this.minuteHandNode.on(
                    cc.Node.EventType.TOUCH_END,
                    this.touchEndHandler_MinuteHand,
                    this
                  ),
                  this.minuteHandNode.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.touchEndHandler_MinuteHand,
                    this
                  ),
                  (this.hourHandNode.angle = 0),
                  (this.minuteHandNode.angle = 5130),
                  (this.currentAngle = 5130);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {
                this.minuteHandNode.off(
                  cc.Node.EventType.TOUCH_START,
                  this.touchBeginHandler_MinuteHand,
                  this
                ),
                  this.minuteHandNode.off(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandler_MinuteHand,
                    this
                  ),
                  this.minuteHandNode.off(
                    cc.Node.EventType.TOUCH_END,
                    this.touchEndHandler_MinuteHand,
                    this
                  ),
                  this.minuteHandNode.off(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.touchEndHandler_MinuteHand,
                    this
                  );
              }),
              (t.prototype.init = function () {}),
              (t.prototype.update = function () {
                this.hourHandNode.angle = (360 / 4410) * this.currentAngle;
              }),
              (t.prototype.touchBeginHandler_MinuteHand = function (e) {
                if (!this.finishBoo) {
                  var t =
                      e.getLocation().x -
                      u.default.getinstance().screenWidth / 2,
                    o =
                      e.getLocation().y -
                      u.default.getinstance().screenHeight / 2,
                    n =
                      (n = d.default.instace.getAngle(
                        new cc.Vec3(t, o),
                        this.minuteHandNode.position
                      )) + 90;
                  this.minuteHandAngle = n;
                }
              }),
              (t.prototype.touchMoveHandler_MinuteHand = function (e) {
                if (!this.finishBoo) {
                  var t =
                      e.getLocation().x -
                      u.default.getinstance().screenWidth / 2,
                    o =
                      e.getLocation().y -
                      u.default.getinstance().screenHeight / 2,
                    n =
                      (n = d.default.instace.getAngle(
                        new cc.Vec3(t, o),
                        this.minuteHandNode.position
                      )) + 90;
                  (this.minuteHandAngle = n - this.minuteHandAngle),
                    (this.minuteHandNode.angle += this.minuteHandAngle),
                    (this.currentAngle += this.minuteHandAngle),
                    Math.abs(this.minuteHandAngle) > 180 &&
                      (this.currentAngle +=
                        this.minuteHandAngle > 0 ? -360 : 360),
                    (this.minuteHandAngle = n),
                    this.hourHandNode.angle <= 360 &&
                      0 == this.answerChooseNode.active &&
                      (l.default.instace.playSound("\u5bf9"),
                      this.figureArmatureDisplay1.playAnimation("idle2"),
                      (this.answerChooseNode.active = !0));
                }
              }),
              (t.prototype.touchEndHandler_MinuteHand = function () {
                this.finishBoo;
              }),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                t[0].backInSitu();
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var o = this.figureNode2.getComponents("Dialogue");
                switch (
                  (l.default.instace.playSound("\u5973ouNo"), e[2].boxTag)
                ) {
                  case 1:
                    this.figureNode1
                      .getComponent("Dialogue")
                      .initialTalk("Please make me prettier", !0);
                    break;
                  case 2:
                    o[0].initialTalk("Can you do magic?", !0);
                    break;
                  case 3:
                    o[1].initialTalk("Get it off me!", !0);
                }
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "A":
                    var o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    p.default.instace.addUITip(o);
                    break;
                  case "B":
                  case "C":
                    (o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        s.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      p.default.instace.addUITip(o);
                }
              }),
              a(
                [
                  g({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u5206\u9488" })],
                t.prototype,
                "minuteHandNode",
                void 0
              ),
              a(
                [g({ type: cc.Node, displayName: "\u65f6\u9488" })],
                t.prototype,
                "hourHandNode",
                void 0
              ),
              a([y], t)
            );
          })(f.default);
        (r.default = v), cc._RF.pop();
      },
      {},
    ],
    Level19: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "60880QjkQ1GuaRvv4o+oh3f", "Level19");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.answerChooseNode = null),
                (t.figureNode2 = null),
                (t.kidKuNode = null),
                (t.kidXiaoNode = null),
                (t.finishBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 0),
                  (this.tuoDongfigureNode2 = this.figureNode2.parent),
                  (this.figureArmatureDisplay2 = this.figureNode2.getComponent(
                    dragonBones.ArmatureDisplay
                  ));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.update = function () {
                var e = this;
                1 != this.finishBoo &&
                  (this.tuoDongfigureNode2.x < -370 ||
                  this.tuoDongfigureNode2.x > 370 ||
                  this.tuoDongfigureNode2.y > 640 ||
                  this.tuoDongfigureNode2.y < -640
                    ? ((this.kidKuNode.active = !0),
                      (this.kidXiaoNode.active = !1),
                      (this.finishBoo = !0),
                      l.default.instace.playSound("\u5b9d\u5b9d\u54ed"),
                      (u.default.instance.finishBoo = !0),
                      this.scheduleOnce(function () {
                        var t = {
                          name: "\u5bf9",
                          method: function () {
                            cc.director.emit(
                              "victotyNode",
                              "\u80dc\u5229\u754c\u9762"
                            );
                          },
                          caller: e,
                        };
                        s.default.instace.addUITip(t);
                      }, 2))
                    : ((this.kidKuNode.active = !1),
                      (this.kidXiaoNode.active = !0)));
              }),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "B":
                    var o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(o);
                    break;
                  case "A":
                  case "C":
                    (o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(o);
                    break;
                  case "\u5de6\u8fb9\u8bf4\u8bdd":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("My baby is the cutest", !0);
                    break;
                  case "\u4e2d\u95f4\u8bf4\u8bdd":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("He's my everything", !0);
                    break;
                  case "\u53f3\u8fb9\u8bf4\u8bdd":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("Mom loves you", !0);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u5b69\u5b50\u54ed" })],
                t.prototype,
                "kidKuNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u5b69\u5b50\u7b11" })],
                t.prototype,
                "kidXiaoNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level1: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c615fX2zFFALL3dw47HTRuK", "Level1");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("AnimationManager"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y = f.property,
          g = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.figureNode3 = null),
                (t.waterGoods = null),
                (t.waterNode = null),
                (t.answerNum = 2),
                (t.victoryBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 0),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.figureArmatureDisplay2 = this.figureNode2.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.figureArmatureDisplay3 = this.figureNode3.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.waterAnimation = this.waterNode.getComponent(
                    cc.Animation
                  ));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = this, t = [], o = 0; o < arguments.length; o++)
                  t[o] = arguments[o];
                u.default.instance.finishBoo = !0;
                var n,
                  i,
                  r = this;
                (r.victoryBoo = t[2].boxTag == this.answerNum),
                  (t[2].dragBoo = !1),
                  t[0].node.x - t[1].node.x < 0
                    ? ((r.waterGoods.scaleX = -1), (n = 75))
                    : ((r.waterGoods.scaleX = 1), (n = -75)),
                  r.victoryBoo ||
                    (1 == t[2].boxTag
                      ? r.figureNode1
                          .getComponent("Dialogue")
                          .initialTalk("I just put on my makeup!", !0)
                      : 3 == t[2].boxTag &&
                        r.figureNode3
                          .getComponent("Dialogue")
                          .initialTalk("What are you doing?", !0),
                    (u.default.instance.finishBoo = !1)),
                  l.default.instace.playSound("\u6d47\u6c34"),
                  (i =
                    1 == t[2].boxTag
                      ? r.figureNode1.y + 500
                      : 2 == t[2].boxTag
                      ? r.figureNode2.y + 480
                      : r.figureNode2.y + 450),
                  cc
                    .tween(r.waterGoods)
                    .to(0.5, {
                      angle: n,
                      x:
                        r["figureNode" + t[2].boxTag].x -
                        50 * r.waterGoods.scaleX,
                      y: i,
                    })
                    .call(function () {
                      (r.waterNode.active = !0), r.waterAnimation.play();
                    })
                    .delay(0.5)
                    .call(function () {
                      r.waterNode.active = !1;
                      var o = s.default.instance.getKeelCurrentTime(
                        e["figureArmatureDisplay" + t[2].boxTag]
                      );
                      2 != t[2].boxTag
                        ? s.default.instance.KeelTimePlayCall(
                            e["figureArmatureDisplay" + t[2].boxTag],
                            "idle2",
                            o,
                            1,
                            e.onFrameEvent,
                            e,
                            t[2].boxTag
                          )
                        : e.figureArmatureDisplay2.playAnimation("idle2", -1),
                        r.victoryBoo
                          ? l.default.instace.playSound("\u7537ouNo")
                          : l.default.instace.playSound("\u5973ouNo");
                    })
                    .to(0.5, { angle: 0 })
                    .call(function () {
                      t[2].backInSitu();
                    })
                    .call(function () {
                      if ((console.log("\u80dc\u5229"), 1 == e.victoryBoo)) {
                        var t = {
                          name: "\u5bf9",
                          method: function () {
                            cc.director.emit(
                              "victotyNode",
                              "\u80dc\u5229\u754c\u9762"
                            );
                          },
                          caller: e,
                        };
                        d.default.instace.addUITip(t);
                      } else
                        r.scheduleOnce(function () {
                          (r.waterGoods.getComponent("GoodsTuoDong").dragBoo =
                            !0),
                            (u.default.instance.finishBoo = !1);
                        }, 1);
                    })
                    .start();
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function () {}),
              (t.prototype.onFrameEvent = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                switch (e[0]) {
                  case 1:
                    this.figureArmatureDisplay1.playAnimation("idle1", -1);
                    break;
                  case 3:
                    this.figureArmatureDisplay3.playAnimation("idle1", -1);
                }
              }),
              a(
                [y({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u4eba\u72693" })],
                t.prototype,
                "figureNode3",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u6c34\u7269\u54c1" })],
                t.prototype,
                "waterGoods",
                void 0
              ),
              a(
                [y({ type: cc.Node, displayName: "\u6c34" })],
                t.prototype,
                "waterNode",
                void 0
              ),
              a([h], t)
            );
          })(p.default);
        (r.default = g), cc._RF.pop();
      },
      {},
    ],
    Level20: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d69c3a39gpAe56Vt5StlGIF", "Level20");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f = d.property,
          h = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.drawingNode = null),
                (t.clickGoodsNode1 = null),
                (t.clickGoodsNode2 = null),
                (t.answerBooAll = [!0, !1, !1, !1, !1, !1, !1, !1]),
                (t.clickDigital = 0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (l.default.instance.duiGouX = 0),
                  (this.graphics = this.drawingNode.getComponent(cc.Graphics));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = parseInt(t);
                1 != this.answerBooAll[Math.abs(o)] &&
                  o != this.clickDigital &&
                  (0 == this.clickDigital
                    ? ((this.clickDigital = o),
                      (this.clickGoodsNode1 =
                        -7 == o ? e.target.parent : e.target),
                      (this.clickGoodsNode1.color = cc.color(255, 255, 255)))
                    : ((this.clickGoodsNode2 =
                        -7 == o ? e.target.parent : e.target),
                      Math.abs(this.clickDigital) == Math.abs(o)
                        ? ((this.answerBooAll[Math.abs(this.clickDigital)] =
                            !0),
                          this.attachment(!0))
                        : (this.attachment(!1), (this.clickDigital = 0))));
              }),
              (t.prototype.attachment = function (e) {
                var t = this;
                (l.default.instance.finishBoo = !0),
                  (this.graphics.strokeColor = e
                    ? cc.color(227, 235, 149)
                    : cc.color(255, 2, 37)),
                  this.graphics.moveTo(
                    this.clickGoodsNode1.x,
                    this.clickGoodsNode1.y
                  ),
                  this.graphics.lineTo(
                    this.clickGoodsNode2.x,
                    this.clickGoodsNode2.y
                  ),
                  this.graphics.stroke(),
                  (this.clickGoodsNode2.color = cc.color(255, 255, 255)),
                  cc
                    .tween(this.node)
                    .delay(0.1)
                    .call(function () {
                      (t.clickGoodsNode1.opacity = 100),
                        (t.clickGoodsNode2.opacity = 100);
                    })
                    .delay(0.1)
                    .call(function () {
                      (t.clickGoodsNode1.opacity = 255),
                        (t.clickGoodsNode2.opacity = 255);
                    })
                    .delay(0.1)
                    .call(function () {
                      (t.clickGoodsNode1.opacity = 100),
                        (t.clickGoodsNode2.opacity = 100);
                    })
                    .delay(0.1)
                    .call(function () {
                      (t.clickGoodsNode1.opacity = 255),
                        (t.clickGoodsNode2.opacity = 255);
                    })
                    .call(function () {
                      if (((l.default.instance.finishBoo = !1), e))
                        if (-1 != t.answerBooAll.indexOf(!1))
                          (l.default.instance.finishBoo = !1),
                            (t.clickDigital = 0),
                            (t.clickGoodsNode1 = null),
                            (t.clickGoodsNode2 = null);
                        else {
                          var o = {
                            name: "\u5bf9",
                            method: function () {
                              cc.director.emit(
                                "victotyNode",
                                "\u80dc\u5229\u754c\u9762"
                              );
                            },
                            caller: t,
                          };
                          u.default.instace.addUITip(o);
                        }
                      else
                        (t.clickGoodsNode1.color = cc.color(0, 0, 0)),
                          (t.clickGoodsNode2.color = cc.color(0, 0, 0)),
                          (t.clickGoodsNode1 = null),
                          (t.clickGoodsNode2 = null);
                      t.graphics.clear();
                    })
                    .start();
              }),
              a(
                [f({ type: cc.Node, displayName: "\u753b\u7b14\u8282\u70b9" })],
                t.prototype,
                "drawingNode",
                void 0
              ),
              a([p], t)
            );
          })(s.default);
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level21: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5a55e7h3IlBLoGlx+sh0Ffa", "Level21");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.hpBtnNode = null),
                (t.hpNode = null),
                (t.clickX = 0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = -100),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.figureArmatureDisplay2 = this.figureNode2.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  this.figureArmatureDisplay1.addEventListener(
                    dragonBones.EventObject.COMPLETE,
                    this.onFrameEvent,
                    this
                  ),
                  this.hpBtnNode.on(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandlerhpNode,
                    this
                  ),
                  this.hpBtnNode.on(
                    cc.Node.EventType.TOUCH_END,
                    this.touchEndHandlerhpNode,
                    this
                  ),
                  this.hpBtnNode.on(
                    cc.Node.EventType.TOUCH_CANCEL,
                    this.touchEndHandlerhpNode,
                    this
                  );
              }),
              (t.prototype.touchMoveHandlerhpNode = function (e) {
                (this.hpNode.width += e.getDelta().x),
                  this.hpNode.width < 0 && (this.hpNode.width = 0),
                  this.hpNode.width > 213 && (this.hpNode.width = 213);
              }),
              (t.prototype.touchEndHandlerhpNode = function () {
                this.hpNode.width <= 0 &&
                  ((u.default.instance.finishBoo = !0),
                  l.default.instace.playSound("\u7537ouNo"),
                  this.figureArmatureDisplay1.playAnimation("idle2", 1));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                u.default.instance.finishBoo = !0;
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function () {}),
              (t.prototype.onFrameEvent = function (e) {
                var t = this;
                switch (e.animationState.name) {
                  case "idle2":
                    t.scheduleOnce(function () {
                      var e = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: t,
                      };
                      s.default.instace.addUITip(e);
                    }, 1);
                }
              }),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u8840\u6761BtnNode" })],
                t.prototype,
                "hpBtnNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u8840\u6761Node" })],
                t.prototype,
                "hpNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level22: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d0d05Khs+dC1o2AkEu57aOc", "Level22");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.menNode1 = null),
                  (t.menNode2 = null),
                  (t.shuiDiNode1 = null),
                  (t.shuiDiNode2 = null),
                  (t.shuiDiNode3 = null),
                  (t.hongQuanBtn = null),
                  (t.jiaoMaoBoo = !1),
                  (t.yubaBoo = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.menNode1 = this.node.getChildByName("men1")),
                    (this.menNode2 = this.node.getChildByName("men2")),
                    (this.shuiDiNode1 = this.node.getChildByName("shuiDi1")),
                    (this.shuiDiNode2 = this.node.getChildByName("shuiDi2")),
                    (this.shuiDiNode3 = this.node.getChildByName("shuiDi3")),
                    (this.hongQuanBtn =
                      this.node.getChildByName("hongQuanBtn"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  u.default.instance.finishBoo = !0;
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch (t) {
                    case "\u6d74\u97381":
                      if (0 == o.shuiDiNode1.active) break;
                      (o.shuiDiNode1.active = !1),
                        l.default.instace.playSound("\u5973hey1");
                      break;
                    case "\u6d74\u97382":
                      if (0 == o.shuiDiNode2.active) break;
                      (o.shuiDiNode2.active = !1),
                        l.default.instace.playSound("\u7537hey"),
                        (u.default.instance.finishBoo = !0),
                        o.scheduleOnce(function () {
                          (o.yubaBoo = !0), o.judgeVictory();
                        }, 2);
                      break;
                    case "\u6d74\u97383":
                      if (0 == o.shuiDiNode3.active) break;
                      (o.shuiDiNode3.active = !1),
                        l.default.instace.playSound("\u5973hey2");
                      break;
                    case "\u811a\u6bdb":
                      (o.jiaoMaoBoo = !0),
                        e.target.removeComponent(cc.Button),
                        l.default.instace.playSound("\u5bf9"),
                        (o.hongQuanBtn.opacity = 255),
                        (u.default.instance.finishBoo = !0),
                        o.scheduleOnce(function () {
                          o.judgeVictory();
                        }, 1);
                  }
                }),
                (t.prototype.judgeVictory = function () {
                  var e = this;
                  (1 != e.jiaoMaoBoo && 1 != e.yubaBoo) ||
                    ((u.default.instance.finishBoo = !0),
                    (e.menNode1.active = !0),
                    cc
                      .tween(e.menNode1)
                      .to(0.5, { opacity: 0 })
                      .call(function () {
                        (e.menNode1.active = !1),
                          (e.menNode2.active = !0),
                          (e.menNode2.opacity = 0),
                          cc
                            .tween(e.menNode2)
                            .to(1, { opacity: 255 })
                            .call(function () {
                              var t = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: e,
                              };
                              s.default.instace.addUITip(t);
                            })
                            .start();
                      })
                      .start());
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level23: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "61862T4jZtCXYBomgfGSjHF", "Level23");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.zhengShuNode = null),
                  (t.zhengShu = null),
                  (t.answerChooseNode = null),
                  (t.zhengShuBoo1 = !1),
                  (t.zhengShuBoo2 = !1),
                  (t.zhengShuBoo3 = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 220),
                    (this.zhengShuNode =
                      this.node.getChildByName("zhengShuNode")),
                    (this.answerChooseNode =
                      this.node.getChildByName("answerChooseNode"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this,
                    n = this;
                  switch (t) {
                    case "\u70b9\u51fb1":
                      (n.zhengShu =
                        this.zhengShuNode.getChildByName("zhengShu1")),
                        (this.zhengShuBoo1 = !0),
                        this.zhengShuBigger();
                      break;
                    case "\u70b9\u51fb2":
                      (n.zhengShu =
                        this.zhengShuNode.getChildByName("zhengShu2")),
                        (this.zhengShuBoo2 = !0),
                        this.zhengShuBigger();
                      break;
                    case "\u70b9\u51fb3":
                      (n.zhengShu =
                        this.zhengShuNode.getChildByName("zhengShu3")),
                        (this.zhengShuBoo3 = !0),
                        this.zhengShuBigger();
                      break;
                    case "\u70b9\u51fb\u5173\u95ed":
                      cc.tween(n.zhengShu)
                        .to(0.2, { scale: 0 })
                        .call(function () {
                          (n.zhengShuNode.active = !1),
                            (n.zhengShu.active = !1),
                            o.judgeVictory();
                        })
                        .start();
                      break;
                    case "A":
                    case "B":
                      (i = {
                        name: "\u9519\u8bef",
                        method: function () {
                          l.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      }),
                        u.default.instace.addUITip(i);
                      break;
                    case "C":
                      var i = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: n,
                      };
                      u.default.instace.addUITip(i);
                  }
                }),
                (t.prototype.zhengShuBigger = function () {
                  (l.default.instance.finishBoo = !0),
                    (this.zhengShuNode.active = !0),
                    (this.zhengShu.active = !0),
                    (this.zhengShu.scale = 0),
                    cc
                      .tween(this.zhengShu)
                      .to(0.2, { scale: 1 })
                      .call(function () {
                        l.default.instance.finishBoo = !1;
                      })
                      .start();
                }),
                (t.prototype.judgeVictory = function () {
                  this.zhengShuBoo1 &&
                    this.zhengShuBoo2 &&
                    this.zhengShuBoo3 &&
                    (this.answerChooseNode.active = !0);
                }),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level24: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c73bayfxNJGNaHQ0JMJniIU", "Level24");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("AnimationManager"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.yueLiang = null),
                  (t.taiYang = null),
                  (t.level_24_yan_1 = null),
                  (t.level_24_yan_3 = null),
                  (t.tianLiangbg1 = null),
                  (t.tianLiangbg2 = null),
                  (t.figure1 = null),
                  (t.figure2 = null),
                  (t.figure3 = null),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.yueLiang = this.node.getChildByName("yueLiang")),
                    (this.taiYang = this.node.getChildByName("taiYang")),
                    (this.level_24_yan_1 =
                      this.node.getChildByName("level_24_yan_1")),
                    (this.level_24_yan_3 =
                      this.node.getChildByName("level_24_yan_3")),
                    (this.tianLiangbg1 =
                      this.node.getChildByName("tianLiangbg1")),
                    (this.tianLiangbg2 =
                      this.node.getChildByName("tianLiangbg2")),
                    (this.figure1 = this.node.getChildByName("figure1")),
                    (this.figure2 = this.node.getChildByName("figure2")),
                    (this.figure3 = this.node.getChildByName("figure3")),
                    (this.figureArmatureDisplay1 = this.figure1.getComponent(
                      dragonBones.ArmatureDisplay
                    )),
                    (this.figureArmatureDisplay3 = this.figure3.getComponent(
                      dragonBones.ArmatureDisplay
                    )),
                    (this.yanAnimation1 = this.level_24_yan_1.getComponent(
                      cc.Animation
                    )),
                    (this.yanAnimation3 = this.level_24_yan_3.getComponent(
                      cc.Animation
                    )),
                    this.yueLiang.on(
                      cc.Node.EventType.TOUCH_START,
                      this.touchBeginHandlerCushionNode,
                      this
                    ),
                    this.yueLiang.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerCushionNode,
                      this
                    );
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {
                  this.yueLiang.off(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandlerCushionNode,
                    this
                  ),
                    this.yueLiang.off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerCushionNode,
                      this
                    );
                }),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandlerCushionNode = function () {}),
                (t.prototype.touchMoveHandlerCushionNode = function (e) {
                  var t = this,
                    o = e.getDelta();
                  o.y > 0 ||
                    ((t.yueLiang.y += o.y),
                    t.yueLiang.y < -50 && (t.taiYang.y -= o.y),
                    t.yueLiang.y < -160 &&
                      (t.yueLiang.off(
                        cc.Node.EventType.TOUCH_START,
                        t.touchBeginHandlerCushionNode,
                        t
                      ),
                      t.yueLiang.off(
                        cc.Node.EventType.TOUCH_MOVE,
                        t.touchMoveHandlerCushionNode,
                        t
                      ),
                      (t.yueLiang.y = -160),
                      (l.default.instance.finishBoo = !0),
                      (t.taiYang.active = !0),
                      cc
                        .tween(t.taiYang)
                        .to(0.8, { y: 230 })
                        .delay(0.2)
                        .call(function () {
                          t.figureArmatureDisplay1.playAnimation("idle2", -1),
                            t.figureArmatureDisplay3.playAnimation("idle2", -1);
                        })
                        .delay(0.8)
                        .call(function () {
                          (t.level_24_yan_1.active = !0),
                            (t.level_24_yan_3.active = !0),
                            t.yanAnimation3.play(),
                            u.default.instance.animationTimePlayCall(
                              t.yanAnimation1,
                              "",
                              0,
                              t.onFrameEvent,
                              t
                            ),
                            t.scheduleOnce(function () {
                              (t.figure1.active = !1), (t.figure3.active = !1);
                            }, 0.2);
                        })
                        .start()));
                }),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  l.default.instance.finishBoo = !0;
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.update = function () {
                  this.taiYang.y < 230 &&
                    ((this.tianLiangbg1.opacity =
                      ((160 + this.taiYang.y) / 390) * 255),
                    (this.tianLiangbg2.opacity =
                      ((160 + this.taiYang.y) / 390) * 255));
                }),
                (t.prototype.onFrameEvent = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var o = this;
                  (o.level_24_yan_1.active = !1),
                    (o.level_24_yan_3.active = !1),
                    o.scheduleOnce(function () {
                      var e = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: o,
                      };
                      s.default.instace.addUITip(e);
                    }, 0.5);
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level25: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "757b7z2PQlKnr35wnxMgAn9", "Level25");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.hongQuanBtn = null),
                  (t.dialogueNode1 = null),
                  (t.dialogueNode2 = null),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  var e = this;
                  (u.default.instance.duiGouX = 200),
                    (e.hongQuanBtn = e.node.getChildByName("hongQuanBtn")),
                    (e.dialogueNode1 = e.node.getChildByName("dialogueNode1")),
                    (e.dialogueNode2 = e.node.getChildByName("dialogueNode2")),
                    e.dialogueNode1
                      .getComponent("Dialogue")
                      .initialTalk("It really stinks here", !1),
                    e.scheduleOnce(function () {
                      e.dialogueNode2
                        .getComponent("Dialogue")
                        .initialTalk("I'll change my ways", !1);
                    }, 1.5);
                }),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  u.default.instance.finishBoo = !0;
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch (t) {
                    case "\u7ea2\u5708":
                      l.default.instace.playSound("\u5bf9"),
                        (o.hongQuanBtn.opacity = 255),
                        (u.default.instance.finishBoo = !0),
                        o.scheduleOnce(function () {
                          var e = {
                            name: "\u5bf9",
                            method: function () {
                              cc.director.emit(
                                "victotyNode",
                                "\u80dc\u5229\u754c\u9762"
                              );
                            },
                            caller: o,
                          };
                          s.default.instace.addUITip(e);
                        }, 1);
                  }
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level26: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e9610fxwWxIq5pIVqZD2oMs", "Level26");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f = d.property,
          h = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.moneyDetectTextNode = null),
                (t.zhenNode = null),
                (t.jiaNode = null),
                (t.moneyDetectNode = null),
                (t.placeNode = null),
                (t.placeNodeAll = []),
                (t.zIndexNum = 20),
                (t.moneyUnidNum = ""),
                (t.placeUnidNum = ["", "", ""]),
                (t.placeBooAll = [!1, !1, !1]),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (l.default.instance.duiGouX = 0),
                  (this.placeNode = this.node.getChildByName("placeNode")),
                  (this.placeNodeAll = this.placeNode.children);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function (e) {
                if (
                  ((e.zIndex = this.zIndexNum),
                  this.zIndexNum++,
                  cc
                    .tween(e)
                    .to(0.1, {
                      scale: 1,
                      rotation: e.getComponent("GoodsTuoDong").initRotation,
                    })
                    .start(),
                  e.uuid == this.moneyUnidNum)
                )
                  (this.moneyUnidNum = ""),
                    (this.moneyDetectTextNode.active = !0),
                    (this.zhenNode.active = !1),
                    (this.jiaNode.active = !1);
                else if (-1 != this.placeUnidNum.indexOf(e.uuid)) {
                  var t = this.placeUnidNum.indexOf(e.uuid);
                  (this.placeUnidNum[t] = ""), (this.placeBooAll[t] = !1);
                }
              }),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                e[0].tag;
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = this, o = [], n = 1; n < arguments.length; n++)
                  o[n - 1] = arguments[n];
                switch (o[1]) {
                  case 1:
                    if ("" != this.placeUnidNum[0])
                      return void o[0].backInSitu();
                    (o[0].node.x = this.placeNodeAll[0].x),
                      (o[0].node.y = this.placeNodeAll[0].y + this.placeNode.y),
                      (o[0].node.angle = 90),
                      (this.placeUnidNum[0] = o[0].node.uuid),
                      (this.placeBooAll[0] = 1 == e),
                      this.judgeVictory();
                    break;
                  case 2:
                    if ("" != this.placeUnidNum[1])
                      return void o[0].backInSitu();
                    (o[0].node.x = this.placeNodeAll[1].x),
                      (o[0].node.y = this.placeNodeAll[1].y + this.placeNode.y),
                      (o[0].node.angle = 90),
                      (this.placeUnidNum[1] = o[0].node.uuid),
                      (this.placeBooAll[1] = 1 == e),
                      this.judgeVictory();
                    break;
                  case 3:
                    if ("" != this.placeUnidNum[2])
                      return void o[0].backInSitu();
                    (o[0].node.x = this.placeNodeAll[2].x),
                      (o[0].node.y = this.placeNodeAll[2].y + this.placeNode.y),
                      (o[0].node.angle = 90),
                      (this.placeUnidNum[2] = o[0].node.uuid),
                      (this.placeBooAll[2] = 1 == e),
                      this.judgeVictory();
                    break;
                  case 4:
                    if ("" != this.moneyUnidNum) return void o[0].backInSitu();
                    (this.moneyUnidNum = o[0].node.uuid),
                      cc
                        .tween(o[0].node)
                        .to(0.3, {
                          x: this.moneyDetectNode.x,
                          y: this.moneyDetectNode.y,
                          scale: 0.6,
                          angle: o[0].node.angle > 90 ? 180 : 0,
                        })
                        .call(function () {
                          1 == e
                            ? ((t.moneyDetectTextNode.active = !1),
                              (t.zhenNode.active = !1),
                              (t.jiaNode.active = !0))
                            : ((t.moneyDetectTextNode.active = !1),
                              (t.zhenNode.active = !0),
                              (t.jiaNode.active = !1));
                        })
                        .start();
                }
              }),
              (t.prototype.judgeVictory = function () {
                var e = this;
                if (-1 == e.placeBooAll.indexOf(!1))
                  (l.default.instance.finishBoo = !0),
                    e.scheduleOnce(function () {
                      var t = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: e,
                      };
                      u.default.instace.addUITip(t);
                    }, 1);
                else if (-1 == this.placeUnidNum.indexOf("")) {
                  var t = {
                    name: "\u9519\u8bef",
                    method: function () {
                      l.default.instance.finishBoo = !1;
                    },
                    caller: this,
                  };
                  u.default.instace.addUITip(t);
                }
              }),
              (t.prototype.touchHanler = function () {}),
              a(
                [f({ type: cc.Node, displayName: "\u9a8c\u949e\u63d0\u793a" })],
                t.prototype,
                "moneyDetectTextNode",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u771f\u949e\u7968" })],
                t.prototype,
                "zhenNode",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u5047\u949e\u7968" })],
                t.prototype,
                "jiaNode",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u9a8c\u949e\u533a\u57df" })],
                t.prototype,
                "moneyDetectNode",
                void 0
              ),
              a([p], t)
            );
          })(s.default);
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level27: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c30f8dmkRdPxprFuX8/nTZG", "Level27");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.numTextNode = null), (t.num = 0), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = 0;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "\u52a0":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.num++,
                      (this.numTextNode.getComponent(cc.Label).string =
                        "" + this.num);
                    break;
                  case "\u51cf":
                    l.default.instace.playSound("\u6309\u94ae"),
                      (this.num = this.num - 1 < 0 ? 0 : this.num - 1),
                      (this.numTextNode.getComponent(cc.Label).string =
                        "" + this.num);
                    break;
                  case "\u786e\u5b9a":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      9 == this.num)
                    ) {
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      s.default.instace.addUITip(o);
                    } else
                      (o = {
                        name: "\u9519\u8bef",
                        method: function () {
                          u.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      }),
                        s.default.instace.addUITip(o);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u6d1e\u6587\u672c\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "numTextNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level28: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d3bd9wEzL5IVKIlSwnG0REQ", "Level28");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.layoutNode = null),
                  (t.paiNodeAll = []),
                  (t.figure1 = null),
                  (t.figure2 = null),
                  (t.figure3 = null),
                  (t.answerNumAll = [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                  ]),
                  (t.flopNum = 0),
                  (t.uuidAll = []),
                  (t.clickBoo = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  var e = this;
                  (u.default.instance.duiGouX = 0),
                    (e.layoutNode = e.node.getChildByName("layoutNode")),
                    (e.paiNodeAll = e.layoutNode.children),
                    (e.figure1 = e.node.getChildByName("figure1")),
                    (e.figure2 = e.node.getChildByName("figure2")),
                    (e.figure3 = e.node.getChildByName("figure3")),
                    (e.layoutNode.active = !1);
                  for (var t = 0; ; ) {
                    var o = Math.floor(16 * Math.random());
                    if (
                      1 == e.answerNumAll[o] &&
                      ((e.answerNumAll[o] = 2), ++t > 7)
                    ) {
                      for (var n = 0; n < e.paiNodeAll.length; n++)
                        (e.paiNodeAll[n].getComponent(cc.Sprite).spriteFrame =
                          1 == e.answerNumAll[n]
                            ? e.figure1.getComponent(cc.Sprite).spriteFrame
                            : e.figure2.getComponent(cc.Sprite).spriteFrame),
                          (e.paiNodeAll[n].getComponent(cc.BoxCollider).tag =
                            1 == e.answerNumAll[n] ? 1 : 2);
                      e.layoutNode.active = !0;
                      break;
                    }
                  }
                  e.scheduleOnce(function () {
                    for (
                      var t = function (t) {
                          e.paiNodeAll[t].runAction(
                            cc.sequence(
                              cc.scaleTo(0.3, 0, 1),
                              cc.callFunc(function () {
                                e.paiNodeAll[t].getComponent(
                                  cc.Sprite
                                ).spriteFrame = e.figure3.getComponent(
                                  cc.Sprite
                                ).spriteFrame;
                              }),
                              cc.scaleTo(0.3, 1, 1)
                            )
                          );
                        },
                        o = 0;
                      o < e.paiNodeAll.length;
                      o++
                    )
                      t(o);
                    e.scheduleOnce(function () {
                      e.clickBoo = !0;
                    }, 0.6);
                  }, 2);
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch (t) {
                    case "\u7ffb\u724c":
                      if (0 == o.clickBoo) return;
                      if (-1 != this.uuidAll.indexOf(e.target.uuid)) return;
                      this.uuidAll.push(e.target.uuid),
                        l.default.instace.playSound("\u6309\u94ae");
                      var n = 1 == e.target.getComponent(cc.BoxCollider).tag;
                      n ? o.flopNum++ : (u.default.instance.finishBoo = !0);
                      var i = cc.scaleTo(0.3, 0, 1),
                        r = cc.scaleTo(0.3, 1, 1);
                      e.target.runAction(
                        cc.sequence(
                          i,
                          cc.callFunc(function () {
                            if (
                              ((e.target.getComponent(cc.Sprite).spriteFrame =
                                1 == n
                                  ? o.figure1.getComponent(cc.Sprite)
                                      .spriteFrame
                                  : o.figure2.getComponent(cc.Sprite)
                                      .spriteFrame),
                              o.flopNum > 7)
                            ) {
                              var t = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: o,
                              };
                              s.default.instace.addUITip(t);
                            }
                            if (0 == n) {
                              var i = {
                                name: "\u9519\u8bef",
                                method: function () {
                                  o.regressionInit();
                                },
                                caller: this,
                              };
                              s.default.instace.addUITip(i);
                            }
                          }),
                          r
                        )
                      );
                  }
                }),
                (t.prototype.regressionInit = function () {
                  var e = this;
                  (e.flopNum = 0), (this.uuidAll = []);
                  for (
                    var t = function (t) {
                        e.paiNodeAll[t].getComponent(cc.Sprite).spriteFrame ==
                          e.figure3.getComponent(cc.Sprite).spriteFrame &&
                          e.paiNodeAll[t].runAction(
                            cc.sequence(
                              cc.scaleTo(0.3, 0, 1),
                              cc.callFunc(function () {
                                e.paiNodeAll[t].getComponent(
                                  cc.Sprite
                                ).spriteFrame =
                                  1 == e.answerNumAll[t]
                                    ? e.figure1.getComponent(cc.Sprite)
                                        .spriteFrame
                                    : e.figure2.getComponent(cc.Sprite)
                                        .spriteFrame;
                              }),
                              cc.scaleTo(0.3, 1, 1)
                            )
                          );
                      },
                      o = 0;
                    o < e.paiNodeAll.length;
                    o++
                  )
                    t(o);
                  (e.clickBoo = !1),
                    e.scheduleOnce(function () {
                      for (
                        var t = function (t) {
                            e.paiNodeAll[t].runAction(
                              cc.sequence(
                                cc.scaleTo(0.3, 0, 1),
                                cc.callFunc(function () {
                                  e.paiNodeAll[t].getComponent(
                                    cc.Sprite
                                  ).spriteFrame = e.figure3.getComponent(
                                    cc.Sprite
                                  ).spriteFrame;
                                }),
                                cc.scaleTo(0.3, 1, 1)
                              )
                            );
                          },
                          o = 0;
                        o < e.paiNodeAll.length;
                        o++
                      )
                        t(o);
                      e.scheduleOnce(function () {
                        e.clickBoo = !0;
                      }, 0.6);
                    }, 2);
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level29: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3a74cYaysFP+pVLg/xU4aSJ", "Level29");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.layoutNode = null),
                  (t.routeNodeAll = []),
                  (t.figure = null),
                  (t.answerNumAll = [
                    [1, 1, 1, 1, 1, 1],
                    [2, 2, 2, 2, 2, 1],
                    [1, 2, 2, 2, 2, 1],
                    [1, 2, 2, 2, 2, 1],
                    [1, 2, 2, 2, 2, 1],
                    [1, 2, 2, 2, 2, 1],
                    [1, 1, 1, 1, 1, 1],
                  ]),
                  (t.routeX = 0),
                  (t.routeY = 0),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.layoutNode = this.node.getChildByName("layoutNode")),
                    (this.routeNodeAll = this.layoutNode.children),
                    (this.figure = this.node.getChildByName("figure")),
                    this.regressionInit();
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                    case "\u4e0a":
                      if ((o.routeX--, o.routeX < 0)) {
                        u.default.instance.finishBoo = !0;
                        var n = {
                          name: "\u9519\u8bef",
                          method: function () {
                            o.regressionInit();
                          },
                          caller: this,
                        };
                        s.default.instace.addUITip(n);
                      } else if (1 == o.answerNumAll[o.routeX][o.routeY]) {
                        if (
                          ((o.figure.x =
                            o.routeNodeAll[0].x +
                            91 * o.routeY +
                            o.layoutNode.x),
                          (o.figure.y =
                            o.routeNodeAll[0].y -
                            91 * o.routeX +
                            o.layoutNode.y),
                          2 == o.routeX && 0 == o.routeY)
                        ) {
                          var i = {
                            name: "\u5bf9",
                            method: function () {
                              cc.director.emit(
                                "victotyNode",
                                "\u80dc\u5229\u754c\u9762"
                              );
                            },
                            caller: o,
                          };
                          s.default.instace.addUITip(i);
                        }
                      } else
                        (u.default.instance.finishBoo = !0),
                          (n = {
                            name: "\u9519\u8bef",
                            method: function () {
                              o.regressionInit();
                            },
                            caller: this,
                          }),
                          s.default.instace.addUITip(n);
                      break;
                    case "\u4e0b":
                      o.routeX++,
                        o.routeX > 6
                          ? ((u.default.instance.finishBoo = !0),
                            (n = {
                              name: "\u9519\u8bef",
                              method: function () {
                                o.regressionInit();
                              },
                              caller: this,
                            }),
                            s.default.instace.addUITip(n))
                          : 1 == o.answerNumAll[o.routeX][o.routeY]
                          ? ((o.figure.x =
                              o.routeNodeAll[0].x +
                              91 * o.routeY +
                              o.layoutNode.x),
                            (o.figure.y =
                              o.routeNodeAll[0].y -
                              91 * o.routeX +
                              o.layoutNode.y),
                            2 == o.routeX &&
                              0 == o.routeY &&
                              ((i = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: o,
                              }),
                              s.default.instace.addUITip(i)))
                          : ((u.default.instance.finishBoo = !0),
                            (n = {
                              name: "\u9519\u8bef",
                              method: function () {
                                o.regressionInit();
                              },
                              caller: this,
                            }),
                            s.default.instace.addUITip(n));
                      break;
                    case "\u5de6":
                      o.routeY--,
                        o.routeY < 0
                          ? ((u.default.instance.finishBoo = !0),
                            (n = {
                              name: "\u9519\u8bef",
                              method: function () {
                                o.regressionInit();
                              },
                              caller: this,
                            }),
                            s.default.instace.addUITip(n))
                          : 1 == o.answerNumAll[o.routeX][o.routeY]
                          ? ((o.figure.x =
                              o.routeNodeAll[0].x +
                              91 * o.routeY +
                              o.layoutNode.x),
                            (o.figure.y =
                              o.routeNodeAll[0].y -
                              91 * o.routeX +
                              o.layoutNode.y),
                            2 == o.routeX &&
                              0 == o.routeY &&
                              ((i = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: o,
                              }),
                              s.default.instace.addUITip(i)))
                          : ((u.default.instance.finishBoo = !0),
                            (n = {
                              name: "\u9519\u8bef",
                              method: function () {
                                o.regressionInit();
                              },
                              caller: this,
                            }),
                            s.default.instace.addUITip(n));
                      break;
                    case "\u53f3":
                      o.routeY++,
                        o.routeY > 5
                          ? ((u.default.instance.finishBoo = !0),
                            (n = {
                              name: "\u9519\u8bef",
                              method: function () {
                                o.regressionInit();
                              },
                              caller: this,
                            }),
                            s.default.instace.addUITip(n))
                          : 1 == o.answerNumAll[o.routeX][o.routeY]
                          ? ((o.figure.x =
                              o.routeNodeAll[0].x +
                              91 * o.routeY +
                              o.layoutNode.x),
                            (o.figure.y =
                              o.routeNodeAll[0].y -
                              91 * o.routeX +
                              o.layoutNode.y),
                            2 == o.routeX &&
                              0 == o.routeY &&
                              ((i = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: o,
                              }),
                              s.default.instace.addUITip(i)))
                          : ((u.default.instance.finishBoo = !0),
                            (n = {
                              name: "\u9519\u8bef",
                              method: function () {
                                o.regressionInit();
                              },
                              caller: this,
                            }),
                            s.default.instace.addUITip(n));
                  }
                  255 == o.layoutNode.opacity &&
                    o.scheduleOnce(function () {
                      cc.tween(o.layoutNode).to(2, { opacity: 0 }).start();
                    }, 1);
                }),
                (t.prototype.regressionInit = function () {
                  (this.routeX = 0),
                    (this.routeY = 0),
                    (this.figure.x =
                      this.routeNodeAll[0].x + this.layoutNode.x),
                    (this.figure.y =
                      this.routeNodeAll[0].y + this.layoutNode.y),
                    this.unscheduleAllCallbacks(),
                    cc.Tween.stopAllByTarget(this.layoutNode),
                    (this.layoutNode.opacity = 255),
                    (u.default.instance.finishBoo = !1);
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level2: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c660bwiBnZAdLA2Orsh8hm1", "Level2");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f = d.property,
          h = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.figureNode3 = null),
                (t.scanningNode = null),
                (t.scanningNode1 = null),
                (t.zheZhaoFigureNode = null),
                (t.finishBoo = !1),
                (t.time = 0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                var e = this;
                (l.default.instance.duiGouX = 200),
                  this.scheduleOnce(function () {
                    e.figureNode1.children[0]
                      .getComponent("Dialogue")
                      .initialTalk("I didn't steal it", !1);
                  }, 1),
                  this.scheduleOnce(function () {
                    e.figureNode2.children[0]
                      .getComponent("Dialogue")
                      .initialTalk("I didn't take anything", !1);
                  }, 2),
                  this.scheduleOnce(function () {
                    e.figureNode3.children[0]
                      .getComponent("Dialogue")
                      .initialTalk("I'm innocent", !1);
                  }, 3);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function (e) {
                0 == this.finishBoo &&
                  e.getComponent("GoodsTuoDong").backInSitu();
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                this.touchEndHandler(this.scanningNode);
              }),
              (t.prototype.touchHanler = function () {}),
              (t.prototype.update = function () {
                if (
                  ((this.scanningNode1.x = this.scanningNode.x),
                  (this.scanningNode1.y = this.scanningNode.y),
                  (this.zheZhaoFigureNode.x = -this.scanningNode.x),
                  (this.zheZhaoFigureNode.y = -this.scanningNode.y),
                  1 != this.finishBoo)
                )
                  if (
                    this.scanningNode.y >= 20 &&
                    this.scanningNode.y <= 100 &&
                    this.scanningNode.x >= 150 &&
                    this.scanningNode.x <= 270
                  ) {
                    if ((this.time++, this.time > 50)) {
                      this.finishBoo = !0;
                      var e = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      u.default.instace.addUITip(e);
                    }
                  } else this.time = 0;
              }),
              a(
                [f({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u4eba\u72693" })],
                t.prototype,
                "figureNode3",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u626b\u63cf\u7269\u54c1" })],
                t.prototype,
                "scanningNode",
                void 0
              ),
              a(
                [
                  f({
                    type: cc.Node,
                    displayName: "\u626b\u63cf\u7269\u54c1\u5b9e\u9645",
                  }),
                ],
                t.prototype,
                "scanningNode1",
                void 0
              ),
              a(
                [f({ type: cc.Node, displayName: "\u906e\u7f69\u4eba\u7269" })],
                t.prototype,
                "zheZhaoFigureNode",
                void 0
              ),
              a([p], t)
            );
          })(s.default);
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level30: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "217f5pXl1FOja2JeDDwc+lx", "Level30");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.level_hongQuan = null),
                  (t.dialogueNode1 = null),
                  (t.dialogueNode2 = null),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  var e = this;
                  (l.default.instance.duiGouX = 200),
                    (e.level_hongQuan =
                      e.node.getChildByName("level_hongQuan")),
                    (e.dialogueNode1 = e.node.getChildByName("dialogueNode1")),
                    (e.dialogueNode2 = e.node.getChildByName("dialogueNode2")),
                    e.dialogueNode1
                      .getComponent("Dialogue")
                      .initialTalk("Somebody help me", !1),
                    e.scheduleOnce(function () {
                      e.dialogueNode2
                        .getComponent("Dialogue")
                        .initialTalk("I don't want to die yet", !1);
                    }, 1.5);
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  switch (t) {
                    case "\u4fe1\u53f7\u5f3a":
                      (this.level_hongQuan.opacity = 255),
                        (l.default.instance.finishBoo = !0);
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      u.default.instace.addUITip(o);
                  }
                }),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level31: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "05090GvG9ZDmZ8innaDvAQ5", "Level31");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("AnimationManager"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.boardNode2 = null),
                (t.pistolNode = null),
                (t.yaoHuangNode = null),
                (t.boardNode1 = null),
                (t.figure2 = null),
                (t.dialogueNode1 = null),
                (t.dialogueNode2 = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                var e = this;
                (l.default.instance.duiGouX = 0),
                  (e.yaoHuangNode = e.node.getChildByName("yaoHuangNode")),
                  (e.boardNode1 = e.yaoHuangNode.getChildByName("boardNode1")),
                  (e.figure2 = e.yaoHuangNode.getChildByName("figure2")),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (e.dialogueNode1 = e.node.getChildByName("dialogueNode1")),
                  (e.dialogueNode2 = e.node.getChildByName("dialogueNode2")),
                  e.dialogueNode1
                    .getComponent("Dialogue")
                    .initialTalk("You're going down", !1),
                  e.scheduleOnce(function () {
                    e.dialogueNode2
                      .getComponent("Dialogue")
                      .initialTalk("Stop it!", !1);
                  }, 1.5),
                  e.yaoHuangNode.runAction(
                    cc
                      .sequence(
                        cc.rotateTo(0.5, 1),
                        cc.rotateTo(0.5, 0),
                        cc.rotateTo(0.5, -1),
                        cc.rotateTo(0.5, 0),
                        cc.rotateTo(0.5, 1),
                        cc.rotateTo(0.5, 0),
                        cc.rotateTo(0.5, -1),
                        cc.rotateTo(0.5, 0)
                      )
                      .repeatForever()
                  ),
                  e.figureNode1.runAction(
                    cc
                      .sequence(
                        cc.rotateTo(0.5, 1),
                        cc.rotateTo(0.5, 0),
                        cc.rotateTo(0.5, -1),
                        cc.rotateTo(0.5, 0),
                        cc.rotateTo(0.5, 1),
                        cc.rotateTo(0.5, 0),
                        cc.rotateTo(0.5, -1),
                        cc.rotateTo(0.5, 0)
                      )
                      .repeatForever()
                  );
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this,
                  n = this;
                switch (t) {
                  case "\u624b\u67aa":
                    (l.default.instance.finishBoo = !0),
                      cc
                        .tween(n.pistolNode)
                        .to(1, { position: cc.v3(150, 0), rotation: 360 })
                        .call(function () {
                          (n.boardNode1.active = !1),
                            (n.boardNode2.active = !0),
                            (n.dialogueNode1.active = !1);
                        })
                        .delay(0.3)
                        .call(function () {
                          cc.tween(n.boardNode2).to(1, { y: -420 }).start(),
                            cc
                              .tween(n.figureNode1)
                              .to(1, { x: -200, y: -430 })
                              .call(function () {
                                var e = {
                                  name: "\u5bf9",
                                  method: function () {
                                    cc.director.emit(
                                      "victotyNode",
                                      "\u80dc\u5229\u754c\u9762"
                                    );
                                  },
                                  caller: o,
                                };
                                s.default.instace.addUITip(e);
                              })
                              .start(),
                            u.default.instance.KeelTimePlayCall(
                              o.figureArmatureDisplay1,
                              "idle2",
                              0,
                              1,
                              o.onFrameEvent,
                              o
                            );
                        })
                        .start();
                }
              }),
              (t.prototype.onFrameEvent = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u6728\u677f2" })],
                t.prototype,
                "boardNode2",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u624b\u67aa" })],
                t.prototype,
                "pistolNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level32: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c398fIo6qdAH7ODEfli93PH", "Level32");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("Tool"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.tableNode = null),
                  (t.touNode = null),
                  (t.dialogueNode1 = null),
                  (t.dialogueNode2 = null),
                  (t.dialogueNode3 = null),
                  (t.endBoo = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  var e = this;
                  (l.default.instance.duiGouX = 0),
                    (e.tableNode = e.node.getChildByName("tableNode")),
                    (e.touNode = e.node.getChildByName("touNode")),
                    (e.dialogueNode1 = e.node.getChildByName("dialogueNode1")),
                    (e.dialogueNode2 = e.node.getChildByName("dialogueNode2")),
                    (e.dialogueNode3 = e.node.getChildByName("dialogueNode3")),
                    e.dialogueNode1
                      .getComponent("Dialogue")
                      .initialTalk("This question is too easy!", !1),
                    e.scheduleOnce(function () {
                      e.dialogueNode2
                        .getComponent("Dialogue")
                        .initialTalk("Take the exam seriously", !1);
                    }, 1.5),
                    e.scheduleOnce(function () {
                      e.dialogueNode3
                        .getComponent("Dialogue")
                        .initialTalk("Which one to choose?", !1);
                    }, 3),
                    (this.tableNodetLocation = this.tableNode.position),
                    (this.touNode.active = !1),
                    this.tableNode.on(
                      cc.Node.EventType.TOUCH_START,
                      this.touchBeginHandlerTableNode,
                      this
                    ),
                    this.tableNode.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerTableNode,
                      this
                    );
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {
                  this.tableNode.off(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandlerTableNode,
                    this
                  ),
                    this.tableNode.off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerTableNode,
                      this
                    );
                }),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchBeginHandlerTableNode = function () {}),
                (t.prototype.touchMoveHandlerTableNode = function (e) {
                  var t = this;
                  if (!this.endBoo) {
                    var o = e.getDelta();
                    o.y > 0 ||
                      ((this.tableNode.y += o.y),
                      (this.tableNode.x += o.x),
                      u.default.instace.getDistance(
                        this.tableNode.position,
                        this.tableNodetLocation
                      ) > 130 &&
                        ((this.endBoo = !0),
                        (l.default.instance.finishBoo = !0),
                        (this.touNode.active = !0),
                        this.scheduleOnce(function () {
                          var e = {
                            name: "\u5bf9",
                            method: function () {
                              cc.director.emit(
                                "victotyNode",
                                "\u80dc\u5229\u754c\u9762"
                              );
                            },
                            caller: t,
                          };
                          s.default.instace.addUITip(e);
                        }, 1)));
                  }
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.onFrameEvent = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level33: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c6621B5b/VAP6hPm4BfJU11", "Level33");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.frameNode1 = null),
                  (t.frameNode2 = null),
                  (t.goodsAll = null),
                  (t.zIndexNum = 20),
                  (t.frameAll = []),
                  (t.uuidAll = []),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.frameNode1 = this.node.getChildByName("frameNode1")),
                    (this.frameNode2 = this.node.getChildByName("frameNode2")),
                    (this.goodsAll = this.node.getChildByName("goodsAll")),
                    (this.frameAll[0] = []),
                    (this.frameAll[1] = []),
                    (this.uuidAll[0] = []),
                    (this.uuidAll[1] = []);
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function (e) {
                  if (
                    ((e.zIndex = this.zIndexNum),
                    this.zIndexNum++,
                    -1 != this.uuidAll[0].indexOf(e.uuid))
                  ) {
                    var t = this.uuidAll[0].indexOf(e.uuid);
                    this.uuidAll[0].splice(t, 1), this.frameAll[0].splice(t, 1);
                  }
                  -1 != this.uuidAll[1].indexOf(e.uuid) &&
                    ((t = this.uuidAll[1].indexOf(e.uuid)),
                    this.uuidAll[1].splice(t, 1),
                    this.frameAll[1].splice(t, 1));
                }),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                  switch (t[1]) {
                    case 1:
                      this.frameAll[0].push(e),
                        this.uuidAll[0].push(t[0].node.uuid),
                        this.judgeVictory();
                      break;
                    case 2:
                      this.frameAll[1].push(e),
                        this.uuidAll[1].push(t[0].node.uuid),
                        this.judgeVictory();
                  }
                }),
                (t.prototype.judgeVictory = function () {
                  var e = this,
                    t = this;
                  if (!(t.uuidAll[0].length + t.uuidAll[1].length < 6))
                    if (
                      3 == t.frameAll[0].length &&
                      3 == t.frameAll[1].length &&
                      ((-1 != t.frameAll[0].indexOf(1) &&
                        -1 == t.frameAll[1].indexOf(1)) ||
                        (-1 != t.frameAll[1].indexOf(1) &&
                          -1 == t.frameAll[0].indexOf(1)))
                    ) {
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: t,
                      };
                      u.default.instace.addUITip(o);
                    } else {
                      var n = {
                        name: "\u9519\u8bef",
                        method: function () {
                          for (var o in t.goodsAll.children)
                            t.goodsAll.children[o]
                              .getComponent("GoodsTuoDong")
                              .backInSitu();
                          (e.frameAll[0] = []),
                            (e.frameAll[1] = []),
                            (e.uuidAll[0] = []),
                            (e.uuidAll[1] = []);
                        },
                        caller: this,
                      };
                      u.default.instace.addUITip(n);
                    }
                }),
                (t.prototype.touchHanler = function () {}),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level34: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "43d5aO+vZhC2qTqLDtuoffl", "Level34");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.passwordLabel = null),
                (t.men1 = null),
                (t.men2 = null),
                (t.passwordBoxNode = null),
                (t.photographBtn = null),
                (t.passwordNode = null),
                (t.lightNode = null),
                (t.correctPasswordStr = "2497"),
                (t.currentPasswordStr = ""),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 0),
                  (this.men1 = this.node.getChildByName("men1")),
                  (this.men2 = this.node.getChildByName("men2")),
                  (this.passwordBoxNode =
                    this.node.getChildByName("passwordBoxNode")),
                  (this.photographBtn =
                    this.node.getChildByName("photographBtn")),
                  (this.passwordNode =
                    this.node.getChildByName("passwordNode")),
                  (this.lightNode = this.node.getChildByName("lightNode"));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this,
                  n = this;
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "\u62cd\u7167":
                    (n.passwordNode.active = !0),
                      (u.default.instance.finishBoo = !0),
                      n.lightNode.runAction(
                        cc.sequence(
                          cc.fadeIn(0.1),
                          cc.callFunc(function () {
                            l.default.instace.playSound("\u76f8\u673a"),
                              cc
                                .tween(n)
                                .delay(0.05)
                                .call(function () {
                                  n.passwordNode.active = !1;
                                })
                                .start();
                          }),
                          cc.fadeOut(0.2),
                          cc.callFunc(function () {
                            u.default.instance.finishBoo = !1;
                          })
                        )
                      );
                    break;
                  case "\u6253\u5f00\u5bc6\u7801\u6846":
                    (n.passwordBoxNode.active = !0),
                      (n.photographBtn.active = !1),
                      (n.currentPasswordStr = "");
                    break;
                  case "\u5173\u95ed\u5bc6\u7801\u6846":
                    (n.passwordBoxNode.active = !1),
                      (n.photographBtn.active = !0),
                      (n.currentPasswordStr = ""),
                      n.passwordLabelUpdate();
                    break;
                  case "\u8f93\u5165\u5bc6\u7801":
                    switch (e.target.name) {
                      case "1":
                      case "2":
                      case "3":
                      case "4":
                      case "5":
                      case "6":
                      case "7":
                      case "8":
                      case "9":
                      case "0":
                        (n.currentPasswordStr += e.target.name),
                          n.passwordLabelUpdate(),
                          n.currentPasswordStr == this.correctPasswordStr &&
                            ((u.default.instance.finishBoo = !0),
                            cc
                              .tween(n.passwordBoxNode)
                              .to(0.3, { scale: 0 })
                              .delay(0.3)
                              .call(function () {
                                (n.men1.active = !1), (n.men2.active = !0);
                              })
                              .delay(0.1)
                              .call(function () {
                                var e = {
                                  name: "\u5bf9",
                                  method: function () {
                                    cc.director.emit(
                                      "victotyNode",
                                      "\u80dc\u5229\u754c\u9762"
                                    );
                                  },
                                  caller: o,
                                };
                                s.default.instace.addUITip(e);
                              })
                              .start());
                        break;
                      case "c":
                        (n.currentPasswordStr = ""), n.passwordLabelUpdate();
                        break;
                      case ">":
                        if (n.currentPasswordStr == this.correctPasswordStr)
                          (u.default.instance.finishBoo = !0),
                            cc
                              .tween(n.passwordBoxNode)
                              .to(0.3, { scale: 0 })
                              .delay(0.3)
                              .call(function () {
                                (n.men1.active = !1), (n.men2.active = !0);
                              })
                              .delay(0.1)
                              .call(function () {
                                var e = {
                                  name: "\u5bf9",
                                  method: function () {
                                    cc.director.emit(
                                      "victotyNode",
                                      "\u80dc\u5229\u754c\u9762"
                                    );
                                  },
                                  caller: o,
                                };
                                s.default.instace.addUITip(e);
                              })
                              .start();
                        else {
                          var i = {
                            name: "\u9519\u8bef",
                            method: function () {
                              u.default.instance.finishBoo = !1;
                            },
                            caller: this,
                          };
                          s.default.instace.addUITip(i);
                        }
                    }
                }
              }),
              (t.prototype.passwordLabelUpdate = function () {
                for (var e = "", t = 0; t < this.currentPasswordStr.length; t++)
                  e += this.currentPasswordStr[t];
                e.length > 9 && (e = e.substr(0, 9)),
                  (this.passwordLabel.getComponent(cc.Label).string = e);
              }),
              (t.prototype.onFrameEvent = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              a(
                [h({ type: cc.Node, displayName: "\u5bc6\u7801\u6587\u672c" })],
                t.prototype,
                "passwordLabel",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level35: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "86b59+jdkxOgLaSpDaCXfzc", "Level35");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.figure1 = null), (t.figure2 = null), t;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.figure1 = this.node.getChildByName("figure1")),
                    (this.figure2 = this.node.getChildByName("figure2"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch (t) {
                    case "\u811a":
                      (l.default.instance.finishBoo = !0),
                        (this.figure1.active = !1),
                        (this.figure2.active = !0),
                        this.scheduleOnce(function () {
                          var e = {
                            name: "\u5bf9",
                            method: function () {
                              cc.director.emit(
                                "victotyNode",
                                "\u80dc\u5229\u754c\u9762"
                              );
                            },
                            caller: o,
                          };
                          u.default.instace.addUITip(e);
                        }, 0.5);
                  }
                }),
                (t.prototype.onFrameEvent = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level36: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "295361NrWNNW625fxpDbCtk", "Level36");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.frameNode1 = null),
                  (t.frameNode2 = null),
                  (t.goodsAll = null),
                  (t.zIndexNum = 20),
                  (t.frameAll = []),
                  (t.uuidAll = []),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.frameNode1 = this.node.getChildByName("frameNode1")),
                    (this.frameNode2 = this.node.getChildByName("frameNode2")),
                    (this.goodsAll = this.node.getChildByName("goodsAll")),
                    (this.frameAll[0] = []),
                    (this.frameAll[1] = []),
                    (this.uuidAll[0] = []),
                    (this.uuidAll[1] = []);
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function (e) {
                  if (
                    ((e.zIndex = this.zIndexNum),
                    this.zIndexNum++,
                    -1 != this.uuidAll[0].indexOf(e.uuid))
                  ) {
                    var t = this.uuidAll[0].indexOf(e.uuid);
                    this.uuidAll[0].splice(t, 1), this.frameAll[0].splice(t, 1);
                  }
                  -1 != this.uuidAll[1].indexOf(e.uuid) &&
                    ((t = this.uuidAll[1].indexOf(e.uuid)),
                    this.uuidAll[1].splice(t, 1),
                    this.frameAll[1].splice(t, 1));
                }),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                  switch (t[1]) {
                    case 1:
                      this.frameAll[0].push(e),
                        this.uuidAll[0].push(t[0].node.uuid),
                        this.judgeVictory();
                      break;
                    case 2:
                      this.frameAll[1].push(e),
                        this.uuidAll[1].push(t[0].node.uuid),
                        this.judgeVictory();
                  }
                }),
                (t.prototype.judgeVictory = function () {
                  var e = this,
                    t = this;
                  if (!(t.uuidAll[0].length + t.uuidAll[1].length < 6))
                    if (
                      3 == t.frameAll[0].length &&
                      3 == t.frameAll[1].length &&
                      ((-1 != t.frameAll[0].indexOf(1) &&
                        -1 == t.frameAll[1].indexOf(1)) ||
                        (-1 != t.frameAll[1].indexOf(1) &&
                          -1 == t.frameAll[0].indexOf(1)))
                    ) {
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: t,
                      };
                      u.default.instace.addUITip(o);
                    } else {
                      var n = {
                        name: "\u9519\u8bef",
                        method: function () {
                          for (var o in t.goodsAll.children)
                            t.goodsAll.children[o]
                              .getComponent("GoodsTuoDong")
                              .backInSitu();
                          (e.frameAll[0] = []),
                            (e.frameAll[1] = []),
                            (e.uuidAll[0] = []),
                            (e.uuidAll[1] = []);
                        },
                        caller: this,
                      };
                      u.default.instace.addUITip(n);
                    }
                }),
                (t.prototype.touchHanler = function () {}),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level37: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "db392jGrUxJha4qD9svMS7C", "Level37");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.numTextNode = null),
                (t.expressionNode = null),
                (t.num = 0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 0),
                  (this.expressionNode =
                    this.node.getChildByName("expressionNode"));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "\u52a0":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.num++,
                      (this.numTextNode.getComponent(cc.Label).string =
                        "" + this.num);
                    break;
                  case "\u51cf":
                    l.default.instace.playSound("\u6309\u94ae"),
                      (this.num = this.num - 1 < 0 ? 0 : this.num - 1),
                      (this.numTextNode.getComponent(cc.Label).string =
                        "" + this.num);
                    break;
                  case "\u786e\u5b9a":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      5 == this.num)
                    ) {
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      s.default.instace.addUITip(o);
                    } else
                      (o = {
                        name: "\u9519\u8bef",
                        method: function () {
                          u.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      }),
                        s.default.instace.addUITip(o);
                    break;
                  case "\u8868\u60c5":
                    l.default.instace.playSound("\u5bf9"),
                      (e.target.opacity = 255),
                      e.target.removeComponent(cc.Button);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u6d1e\u6587\u672c\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "numTextNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level38: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1db1bdWT/xDZKv036IbGmhO", "Level38");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.cupNode1 = null),
                  (t.cupNode2 = null),
                  (t.cupNode3 = null),
                  (t.cupNode4 = null),
                  (t.touNode = null),
                  (t.shuiNodeAll = []),
                  (t.goodsNodeAll = []),
                  (t.num = 0),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.cupNode1 = this.node.getChildByName("cupNode1")),
                    (this.cupNode2 = this.node.getChildByName("cupNode2")),
                    (this.cupNode3 = this.node.getChildByName("cupNode3")),
                    (this.cupNode4 = this.node.getChildByName("cupNode4")),
                    this.shuiNodeAll.push(this.cupNode1.getChildByName("shui")),
                    this.shuiNodeAll.push(this.cupNode2.getChildByName("shui")),
                    this.shuiNodeAll.push(this.cupNode3.getChildByName("shui")),
                    this.shuiNodeAll.push(this.cupNode4.getChildByName("shui")),
                    this.goodsNodeAll.push(
                      this.cupNode1.getChildByName("goods")
                    ),
                    this.goodsNodeAll.push(
                      this.cupNode2.getChildByName("goods")
                    ),
                    this.goodsNodeAll.push(
                      this.cupNode3.getChildByName("goods")
                    ),
                    this.goodsNodeAll.push(
                      this.cupNode4.getChildByName("goods")
                    ),
                    this.goodsNodeAll[0].on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode1,
                      this
                    ),
                    this.goodsNodeAll[1].on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode2,
                      this
                    ),
                    this.goodsNodeAll[2].on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode3,
                      this
                    ),
                    this.goodsNodeAll[3].on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode4,
                      this
                    );
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {
                  this.goodsNodeAll[0].off(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandlerGoodsNode1,
                    this
                  ),
                    this.goodsNodeAll[1].off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode2,
                      this
                    ),
                    this.goodsNodeAll[2].off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode3,
                      this
                    ),
                    this.goodsNodeAll[3].off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerGoodsNode4,
                      this
                    );
                }),
                (t.prototype.init = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchBeginHandlerTableNode = function () {}),
                (t.prototype.touchMoveHandlerGoodsNode1 = function (e) {
                  var t = e.getDelta();
                  t.y < 0 ||
                    ((this.goodsNodeAll[0].y += t.y),
                    this.goodsNodeAll[0].y > 60 &&
                      (this.goodsNodeAll[0].off(
                        cc.Node.EventType.TOUCH_MOVE,
                        this.touchMoveHandlerGoodsNode1,
                        this
                      ),
                      this.judgeVictory(
                        this.goodsNodeAll[0],
                        this.shuiNodeAll[0],
                        160
                      )));
                }),
                (t.prototype.touchMoveHandlerGoodsNode2 = function (e) {
                  var t = e.getDelta();
                  t.y < 0 ||
                    ((this.goodsNodeAll[1].y += t.y),
                    this.goodsNodeAll[1].y > 60 &&
                      (this.goodsNodeAll[1].off(
                        cc.Node.EventType.TOUCH_MOVE,
                        this.touchMoveHandlerGoodsNode2,
                        this
                      ),
                      this.judgeVictory(
                        this.goodsNodeAll[1],
                        this.shuiNodeAll[1],
                        120
                      )));
                }),
                (t.prototype.touchMoveHandlerGoodsNode3 = function (e) {
                  var t = e.getDelta();
                  t.y < 0 ||
                    ((this.goodsNodeAll[2].y += t.y),
                    this.goodsNodeAll[2].y > 60 &&
                      (this.goodsNodeAll[2].off(
                        cc.Node.EventType.TOUCH_MOVE,
                        this.touchMoveHandlerGoodsNode3,
                        this
                      ),
                      this.judgeVictory(
                        this.goodsNodeAll[2],
                        this.shuiNodeAll[2],
                        100
                      )));
                }),
                (t.prototype.touchMoveHandlerGoodsNode4 = function (e) {
                  var t = e.getDelta();
                  t.y < 0 ||
                    ((this.goodsNodeAll[3].y += t.y),
                    this.goodsNodeAll[3].y > 60 &&
                      (this.goodsNodeAll[3].off(
                        cc.Node.EventType.TOUCH_MOVE,
                        this.touchMoveHandlerGoodsNode4,
                        this
                      ),
                      this.judgeVictory(
                        this.goodsNodeAll[3],
                        this.shuiNodeAll[3],
                        70
                      )));
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.onFrameEvent = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.judgeVictory = function (e, t, o) {
                  var n = this;
                  n.num++;
                  var i = n.num >= 4;
                  i && (u.default.instance.finishBoo = !0),
                    l.default.instace.playSound("\u6309\u94ae"),
                    cc
                      .tween(e)
                      .to(0.5, { opacity: 0 })
                      .call(function () {
                        cc.tween(t)
                          .to(0.3, { opacity: 150, height: o })
                          .to(0.1, { opacity: 255 })
                          .call(function () {
                            if (i) {
                              var e = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: n,
                              };
                              s.default.instace.addUITip(e);
                            }
                          })
                          .start();
                      })
                      .start();
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level39: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ab428b8rQ5NkJlTB7gYSdln", "Level39");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (l.default.instance.duiGouY = 200);
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  switch (t) {
                    case "\u5c713":
                    case "\u5c712":
                    case "\u5c714":
                      var o = {
                        name: "\u9519\u8bef",
                        method: function () {
                          l.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      };
                      u.default.instace.addUITip(o);
                      break;
                    case "\u5c711":
                      var n = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      u.default.instace.addUITip(n);
                  }
                }),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level3: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d5d0bETLRROYYtsSugCMQFJ", "Level3");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.marriedNodeView = null),
                (t.marriedNode = null),
                (t.answerChooseNode = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = -200;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u70b9\u51fb\u624b\u673a":
                    l.default.instace.playSound("\u5bf9"),
                      (this.marriedNodeView.active = !0),
                      (this.answerChooseNode.active = !1),
                      (this.marriedNode.scale = 0),
                      cc.tween(this.marriedNode).to(0.3, { scale: 1 }).start();
                    break;
                  case "\u7ed3\u5a5a\u7167\u8fd4\u56de":
                    cc.tween(this.marriedNode)
                      .to(0.3, { scale: 0 })
                      .call(function () {
                        (o.marriedNodeView.active = !1),
                          (o.answerChooseNode.active = !0);
                      })
                      .start();
                    break;
                  case "A":
                    var n = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(n);
                    break;
                  case "B":
                    (n = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(n);
                    break;
                  case "\u70b9\u51fb\u5de6\u4e00":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("We love each other for real...", !0);
                    break;
                  case "\u70b9\u51fb\u53f3\u4e00":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("He's my lover...", !0);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u7ed3\u5a5a\u8bc1\u754c\u9762",
                  }),
                ],
                t.prototype,
                "marriedNodeView",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u7ed3\u5a5a\u8bc1\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "marriedNode",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level40: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "6b515nmtQlEF7yVKFlD9dQX", "Level40");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.numTextNode = null), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = 0;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                    o.numTextNode.getComponent(cc.Label).string = t;
                    var n = {
                      name: "\u9519\u8bef",
                      method: function () {
                        (u.default.instance.finishBoo = !1),
                          (o.numTextNode.getComponent(cc.Label).string = "");
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(n);
                    break;
                  case "5":
                    o.numTextNode.getComponent(cc.Label).string = t;
                    var i = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: o,
                    };
                    s.default.instace.addUITip(i);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u6570\u91cf\u6587\u672c\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "numTextNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level41: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "60baebCWsdGIYRQ02F+cWOP", "Level41");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  u.default.instance.duiGouX = 0;
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                    case "1":
                    case "2":
                    case "3":
                      var n = {
                        name: "\u9519\u8bef",
                        method: function () {
                          u.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      };
                      s.default.instace.addUITip(n);
                      break;
                    case "4":
                      (u.default.instance.finishBoo = !0),
                        cc
                          .tween(e.target)
                          .to(0.5, { color: new cc.Color(255, 255, 255) })
                          .delay(0.2)
                          .call(function () {
                            var e = {
                              name: "\u5bf9",
                              method: function () {
                                cc.director.emit(
                                  "victotyNode",
                                  "\u80dc\u5229\u754c\u9762"
                                );
                              },
                              caller: o,
                            };
                            s.default.instace.addUITip(e);
                          })
                          .start();
                  }
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level42: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "bc83fmY3uBA84qp+BbAmSip", "Level42");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("Global"),
          u = i("OperationData"),
          s = i("Tool"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y =
            (f.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.directionNode = null),
                  (t.zIndexNum = 20),
                  (t.directionAngle = 0),
                  (t.locationX = 0),
                  (t.locationY = 0),
                  (t.distance = 0),
                  (t.clickBoo = !1),
                  (t.justBoo = !1),
                  (t.endBoo = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.directionNode =
                      this.node.getChildByName("directionNode")),
                    this.directionNode.on(
                      cc.Node.EventType.TOUCH_START,
                      this.touchBeginHandler_directionNode,
                      this
                    ),
                    this.directionNode.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler_directionNode,
                      this
                    ),
                    this.directionNode.on(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEndHandler_directionNode,
                      this
                    ),
                    this.directionNode.on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchEndHandler_directionNode,
                      this
                    );
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {
                  this.directionNode.off(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandler_directionNode,
                    this
                  ),
                    this.directionNode.off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler_directionNode,
                      this
                    ),
                    this.directionNode.off(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEndHandler_directionNode,
                      this
                    ),
                    this.directionNode.off(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchEndHandler_directionNode,
                      this
                    );
                }),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function (e) {
                  (e.zIndex = this.zIndexNum), this.zIndexNum++;
                }),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.judgeVictory = function () {}),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.touchBeginHandler_directionNode = function (e) {
                  var t =
                      e.getLocation().x -
                      l.default.getinstance().screenWidth / 2,
                    o =
                      e.getLocation().y -
                      l.default.getinstance().screenHeight / 2,
                    n = s.default.instace.getAngle(
                      new cc.Vec3(t, o),
                      this.directionNode.position
                    );
                  (this.directionAngle = n),
                    (this.locationX = e.getLocation().x),
                    (this.locationY = e.getLocation().y),
                    (this.clickBoo = !0);
                }),
                (t.prototype.touchMoveHandler_directionNode = function (e) {
                  var t =
                      e.getLocation().x -
                      l.default.getinstance().screenWidth / 2,
                    o =
                      e.getLocation().y -
                      l.default.getinstance().screenHeight / 2,
                    n = s.default.instace.getAngle(
                      new cc.Vec3(t, o),
                      this.directionNode.position
                    );
                  this.directionAngle > n
                    ? ((this.directionNode.angle -= 3), (this.justBoo = !1))
                    : ((this.directionNode.angle += 3), (this.justBoo = !0)),
                    (this.directionAngle = n),
                    (this.distance = s.default.instace.getDistance(
                      e.getLocation(),
                      cc.v2(this.locationX, this.locationY)
                    )),
                    (this.distance = this.distance > 20 ? 20 : this.distance),
                    console.log(this.distance),
                    (this.locationX = e.getLocation().x),
                    (this.locationY = e.getLocation().y);
                }),
                (t.prototype.touchEndHandler_directionNode = function () {
                  this.clickBoo = !1;
                }),
                (t.prototype.update = function () {
                  if (0 == this.clickBoo)
                    if (
                      (20 == this.distance &&
                        ((u.default.instance.finishBoo = !0),
                        (this.endBoo = !0)),
                      (this.distance -= 0.2),
                      this.distance > 0)
                    )
                      this.directionNode.angle +=
                        1 == this.justBoo ? this.distance : -this.distance;
                    else if (1 == this.endBoo) {
                      this.endBoo = !1;
                      var e = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      d.default.instace.addUITip(e);
                    }
                }),
                a([h], t)
              );
            })(p.default));
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level43: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "fc0b9QGosdJzJ/60yXiQ2Cs", "Level43");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.numTextNode = null), (t.num = 0), (t.disappearNum = 0), t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = 0;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "\u70b9\u51fb\u6d88\u5931":
                    e.target.removeComponent(cc.Button),
                      cc
                        .tween(e.target)
                        .to(0.5, { opacity: 0 })
                        .call(function () {
                          o.disappearNum++;
                        })
                        .start();
                    break;
                  case "\u52a0":
                    l.default.instace.playSound("\u6309\u94ae"),
                      o.num++,
                      (o.numTextNode.getComponent(cc.Label).string =
                        "" + o.num);
                    break;
                  case "\u51cf":
                    l.default.instace.playSound("\u6309\u94ae"),
                      (o.num = o.num - 1 < 0 ? 0 : o.num - 1),
                      (o.numTextNode.getComponent(cc.Label).string =
                        "" + o.num);
                    break;
                  case "\u786e\u5b9a":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      4 == o.num && o.disappearNum >= 2)
                    ) {
                      var n = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: o,
                      };
                      s.default.instace.addUITip(n);
                    } else
                      (n = {
                        name: "\u9519\u8bef",
                        method: function () {
                          u.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      }),
                        s.default.instace.addUITip(n);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u6570\u91cf\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "numTextNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level44: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "828feiq8cFMpI9wzeYT9CVP", "Level44");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.numTextNode = null),
                (t.lvSeSpriteFrame = null),
                (t.num = 0),
                (t.disappearNum = 0),
                (t.zIndexNum = 20),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = 0;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function (e) {
                (e.zIndex = this.zIndexNum), this.zIndexNum++;
              }),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = this, o = [], n = 1; n < arguments.length; n++)
                  o[n - 1] = arguments[n];
                var i = this;
                e != o[1]
                  ? ((o[0].dragBoo = !1),
                    cc
                      .tween(o[0].node)
                      .to(0.5, { opacity: 0 })
                      .call(function () {
                        (o[0].node.active = !1),
                          i.disappearNum++,
                          (o[0].otherNode.getComponent(cc.Sprite).spriteFrame =
                            t.lvSeSpriteFrame),
                          o[0].otherNode.removeComponent(cc.BoxCollider);
                      })
                      .start())
                  : o[0].backInSitu();
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "\u52a0":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.num++,
                      (this.numTextNode.getComponent(cc.Label).string =
                        "" + this.num);
                    break;
                  case "\u51cf":
                    l.default.instace.playSound("\u6309\u94ae"),
                      (this.num = this.num - 1 < 0 ? 0 : this.num - 1),
                      (this.numTextNode.getComponent(cc.Label).string =
                        "" + this.num);
                    break;
                  case "\u786e\u5b9a":
                    if (
                      (l.default.instace.playSound("\u6309\u94ae"),
                      4 == this.num && this.disappearNum >= 2)
                    ) {
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      s.default.instace.addUITip(o);
                    } else
                      (o = {
                        name: "\u9519\u8bef",
                        method: function () {
                          u.default.instance.finishBoo = !1;
                        },
                        caller: this,
                      }),
                        s.default.instace.addUITip(o);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u6570\u91cf\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "numTextNode",
                void 0
              ),
              a(
                [h({ type: cc.SpriteFrame, displayName: "\u7eff\u8272" })],
                t.prototype,
                "lvSeSpriteFrame",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level45: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "f8da4X6H4NOyII+lZ3WckkI", "Level45");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.yaGaoNode = null), (t.hongQuanNode = null), t;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.yaGaoNode = this.node.getChildByName("yaGaoNode")),
                    (this.hongQuanNode =
                      this.node.getChildByName("hongQuanNode"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                    case "\u7259\u818f":
                      (u.default.instance.finishBoo = !0),
                        (o.hongQuanNode.active = !0),
                        cc
                          .tween(o.yaGaoNode)
                          .delay(0.8)
                          .call(function () {
                            var e = {
                              name: "\u5bf9",
                              method: function () {
                                cc.director.emit(
                                  "victotyNode",
                                  "\u80dc\u5229\u754c\u9762"
                                );
                              },
                              caller: o,
                            };
                            s.default.instace.addUITip(e);
                          })
                          .start();
                  }
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level46: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8c258XI9AFGF4bWo7tHABpH", "Level46");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("Global"),
          u = i("OperationData"),
          s = i("Tool"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y =
            (f.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.moneyNode = null), (t.directionAngle = 0), t;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.moneyNode = this.node.getChildByName("moneyNode")),
                    this.moneyNode.on(
                      cc.Node.EventType.TOUCH_START,
                      this.touchBeginHandler_directionNode,
                      this
                    ),
                    this.moneyNode.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler_directionNode,
                      this
                    ),
                    this.moneyNode.on(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEndHandler_directionNode,
                      this
                    ),
                    this.moneyNode.on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchEndHandler_directionNode,
                      this
                    );
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {
                  this.moneyNode.off(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandler_directionNode,
                    this
                  ),
                    this.moneyNode.off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler_directionNode,
                      this
                    ),
                    this.moneyNode.off(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEndHandler_directionNode,
                      this
                    ),
                    this.moneyNode.off(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchEndHandler_directionNode,
                      this
                    );
                }),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {
                  this.moneyNode.zIndex = 5;
                }),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                  var n = this;
                  n.moneyNode.scale <= 1 &&
                    ((u.default.instance.finishBoo = !0),
                    cc
                      .tween(n.moneyNode)
                      .to(0.5, { opacity: 0 })
                      .delay(0.3)
                      .call(function () {
                        var e = {
                          name: "\u5bf9",
                          method: function () {
                            cc.director.emit(
                              "victotyNode",
                              "\u80dc\u5229\u754c\u9762"
                            );
                          },
                          caller: n,
                        };
                        d.default.instace.addUITip(e);
                      })
                      .start());
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.touchBeginHandler_directionNode = function (e) {
                  var t =
                      e.getLocation().x -
                      l.default.getinstance().screenWidth / 2,
                    o =
                      e.getLocation().y -
                      l.default.getinstance().screenHeight / 2,
                    n = s.default.instace.getAngle(
                      new cc.Vec3(t, o),
                      this.moneyNode.position
                    );
                  this.directionAngle = n;
                }),
                (t.prototype.touchMoveHandler_directionNode = function (e) {
                  var t = e.getTouches();
                  if (t.length >= 2) {
                    var o,
                      n = t[0],
                      i = t[1],
                      r = n.getDelta(),
                      c = i.getDelta(),
                      a = this.node.convertToNodeSpaceAR(n.getLocation()),
                      u = this.node.convertToNodeSpaceAR(i.getLocation()),
                      d = a.sub(u),
                      p = r.sub(c);
                    (o =
                      Math.abs(d.x) > Math.abs(d.y)
                        ? ((d.x + p.x) / d.x) * this.moneyNode.scale
                        : ((d.y + p.y) / d.y) * this.moneyNode.scale) < 1.8 &&
                      o >= 0.95 &&
                      (this.moneyNode.scale = o);
                  } else {
                    var f =
                        e.getLocation().x -
                        l.default.getinstance().screenWidth / 2,
                      h =
                        e.getLocation().y -
                        l.default.getinstance().screenHeight / 2,
                      y = s.default.instace.getAngle(
                        new cc.Vec3(f, h),
                        this.moneyNode.position
                      );
                    this.directionAngle > y
                      ? (this.moneyNode.angle -= 3)
                      : this.directionAngle < y && (this.moneyNode.angle += 3),
                      (this.directionAngle = y);
                  }
                }),
                (t.prototype.touchEndHandler_directionNode = function () {
                  console.log("\u5927\u5c0f\uff1a" + this.moneyNode.scale),
                    this.moneyNode.scale <= 1 &&
                      (this.moneyNode.off(
                        cc.Node.EventType.TOUCH_START,
                        this.touchBeginHandler_directionNode,
                        this
                      ),
                      this.moneyNode.off(
                        cc.Node.EventType.TOUCH_MOVE,
                        this.touchMoveHandler_directionNode,
                        this
                      ),
                      this.moneyNode.off(
                        cc.Node.EventType.TOUCH_END,
                        this.touchEndHandler_directionNode,
                        this
                      ),
                      this.moneyNode.off(
                        cc.Node.EventType.TOUCH_CANCEL,
                        this.touchEndHandler_directionNode,
                        this
                      ),
                      (this.moneyNode.getComponent("GoodsTuoDong").enabled =
                        !0));
                }),
                a([h], t)
              );
            })(p.default));
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level47: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "f58d3iN4t9BLrzVbHR4KHRf", "Level47");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("Tool"),
          d = i("TipManager"),
          p = i("Level"),
          f = cc._decorator,
          h = f.ccclass,
          y =
            (f.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.bg = null),
                  (t.frameNode = null),
                  (t.imgNodeAll = []),
                  (t.positionAll = []),
                  (t.answerNumAll = [0, 1, 2, 3, 4, 5, 6, 7, 8]),
                  (t.clickFrequency = 0),
                  (t.clickNum = 0),
                  (t.clickImgNode = null),
                  (t.zIndexNum = 20),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  for (var e in ((u.default.instance.duiGouX = 0),
                  (this.bg = this.node.getChildByName("bg")),
                  (this.frameNode = this.node.getChildByName("frameNode")),
                  (this.imgNodeAll = this.bg.children),
                  s.default.instace.numAllChaos(this.answerNumAll),
                  this.imgNodeAll))
                    this.positionAll.push(this.imgNodeAll[e].position);
                  for (e = 0; e < 9; e++)
                    this.imgNodeAll[this.answerNumAll[e]].position =
                      this.positionAll[e];
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  l.default.instace.playSound("\u6309\u94ae"),
                    (e.target.zIndex = o.zIndexNum),
                    o.zIndexNum++,
                    o.clickFrequency++;
                  var n = parseInt(t);
                  if (1 == o.clickFrequency)
                    (o.clickNum = n),
                      (o.clickImgNode = e.target),
                      (o.frameNode.x = e.target.x),
                      (o.frameNode.y = e.target.y),
                      (o.frameNode.active = !0);
                  else if (2 == o.clickFrequency) {
                    if (o.clickImgNode.position == e.target.position)
                      return (
                        (o.clickFrequency = 0), void (o.frameNode.active = !1)
                      );
                    var i = o.answerNumAll.indexOf(o.clickNum),
                      r = o.answerNumAll.indexOf(n);
                    (o.answerNumAll[r] = o.answerNumAll[i]),
                      (o.answerNumAll[i] = n),
                      (u.default.instance.finishBoo = !0);
                    var c = o.clickImgNode.position,
                      a =
                        s.default.instace.getDistance(
                          o.clickImgNode,
                          e.target
                        ) / 450;
                    cc
                      .tween(o.clickImgNode)
                      .to(a, { position: e.target.position })
                      .start(),
                      cc
                        .tween(e.target)
                        .to(a, { position: c })
                        .call(function () {
                          u.default.instance.finishBoo = !1;
                          for (var e = 0; e < 9 && o.answerNumAll[e] == e; e++)
                            if (8 == o.answerNumAll[e]) {
                              var t = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: o,
                              };
                              d.default.instace.addUITip(t);
                            }
                        })
                        .start(),
                      (o.clickFrequency = 0),
                      (o.frameNode.active = !1);
                  }
                }),
                a([h], t)
              );
            })(p.default));
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level48: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9683blwEwxKxZ/WBHw5xbrD", "Level48");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.orderNode = null),
                  (t.titleNode = null),
                  (t.orderNodeAll = []),
                  (t.uuidAll = []),
                  (t.clickFrequency = 0),
                  (t.errorBoo = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.orderNode = this.node.getChildByName("orderNode")),
                    (this.titleNode = this.node.getChildByName("titleNode")),
                    (this.orderNodeAll = this.orderNode.children),
                    this.init();
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {
                  for (var e in this.orderNodeAll)
                    this.orderNodeAll[e].active = !1;
                  (this.uuidAll = []),
                    (this.clickFrequency = 0),
                    (this.errorBoo = !1);
                }),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  var o = this;
                  if (
                    (l.default.instace.playSound("\u6309\u94ae"),
                    -1 == o.uuidAll.indexOf(e.target.uuid))
                  ) {
                    o.uuidAll.push(e.target.uuid), this.clickFrequency++;
                    var n = o.orderNode.getChildByName(
                      "orderNode" + this.clickFrequency
                    );
                    (n.x = e.target.x - e.target.width / 2),
                      (n.y = e.target.y + e.target.height),
                      (n.active = !0);
                    var i = parseInt(t);
                    if (
                      (o.clickFrequency != i && (o.errorBoo = !0),
                      this.clickFrequency > 6)
                    )
                      if (0 == o.errorBoo) {
                        var r = {
                          name: "\u5bf9",
                          method: function () {
                            cc.director.emit(
                              "victotyNode",
                              "\u80dc\u5229\u754c\u9762"
                            );
                          },
                          caller: o,
                        };
                        s.default.instace.addUITip(r);
                      } else
                        (r = {
                          name: "\u9519\u8bef",
                          method: function () {
                            (u.default.instance.finishBoo = !1), o.init();
                          },
                          caller: this,
                        }),
                          s.default.instace.addUITip(r);
                  }
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level49: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "59af4fH6idGHqgv6Mt6w4HL", "Level49");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.maoNode1 = null),
                  (t.maoNode2 = null),
                  (t.clickFrequency = 0),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (u.default.instance.duiGouX = 0),
                    (this.maoNode1 = this.node.getChildByName("maoNode1")),
                    (this.maoNode2 = this.node.getChildByName("maoNode2"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function () {
                  var e = this;
                  l.default.instace.playSound("\u6309\u94ae"),
                    e.clickFrequency++,
                    e.unschedule(e.clickTimeCallback),
                    e.scheduleOnce(e.clickTimeCallback, 0.2),
                    e.clickFrequency > 6 &&
                      ((u.default.instance.finishBoo = !0),
                      cc
                        .tween(e.maoNode1)
                        .to(0.5, { opacity: 0 })
                        .call(function () {
                          (e.maoNode2.opacity = 0),
                            (e.maoNode2.active = !0),
                            cc
                              .tween(e.maoNode2)
                              .to(0.3, { opacity: 255 })
                              .call(function () {
                                var t = {
                                  name: "\u5bf9",
                                  method: function () {
                                    cc.director.emit(
                                      "victotyNode",
                                      "\u80dc\u5229\u754c\u9762"
                                    );
                                  },
                                  caller: e,
                                };
                                s.default.instace.addUITip(t);
                              })
                              .start();
                        })
                        .start());
                }),
                (t.prototype.clickTimeCallback = function () {
                  this.clickFrequency = 0;
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level4: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2ed77i3OKtBmr62Xj3YHdJt", "Level4");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.jiaoYinNodeAll = []),
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.yanNode = null),
                (t.answerChooseNode = null),
                (t.answerNumAll = []),
                (t.jiaoYinBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 200),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.figureArmatureDisplay2 = this.figureNode2.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  this.figureArmatureDisplay1.addEventListener(
                    dragonBones.EventObject.COMPLETE,
                    this.onFrameEvent,
                    this
                  ),
                  this.figureArmatureDisplay2.addEventListener(
                    dragonBones.EventObject.COMPLETE,
                    this.onFrameEvent,
                    this
                  ),
                  this.init();
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {
                var e = this;
                e.scheduleOnce(function () {
                  e.figureNode1
                    .getComponent("Dialogue")
                    .initialTalk("I didn't do anything.");
                }, 1.5),
                  e.scheduleOnce(function () {
                    e.figureNode2
                      .getComponent("Dialogue")
                      .initialTalk("I didn't do it.");
                  }, 2.5);
              }),
              (t.prototype.touchBeginHandler = function (e) {
                "shuaziGoods" == e.name &&
                  ((this.yanNode.active = !0),
                  this.yanNode.getComponent(cc.ParticleSystem).resetSystem());
              }),
              (t.prototype.touchEndHandler = function (e) {
                "shuaziGoods" == e.name &&
                  this.yanNode.getComponent(cc.ParticleSystem).stopSystem(),
                  e.getComponent("GoodsTuoDong").backInSitu(),
                  this.figureArmatureDisplay1.playAnimation("idle1"),
                  this.figureArmatureDisplay2.playAnimation("idle1");
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                this.touchEndHandler(t[0].node);
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var o = this;
                switch (e[0].tag) {
                  case 5:
                  case 6:
                  case 7:
                  case 8:
                    if (1 != e[1].tag) return;
                    if (-1 != this.answerNumAll.indexOf(e[0].tag)) return;
                    this.answerNumAll.push(e[0].tag),
                      this.answerNumAll.length >= 2 &&
                        (0 == o.answerChooseNode.active &&
                          l.default.instace.playSound("\u5bf9"),
                        o.schedule(
                          function () {
                            o.answerChooseNode.active = !0;
                          },
                          1,
                          0,
                          0
                        )),
                      cc.tween(e[0].node).to(0.5, { opacity: 255 }).start();
                    break;
                  case 1:
                    this.figureNode1
                      .getComponent("Dialogue")
                      .playSound1("\u7537ouNo", 1),
                      this.figureArmatureDisplay1.playAnimation("idle2"),
                      2 == e[1].tag
                        ? this.figureNode1
                            .getComponent("Dialogue")
                            .initialTalk(
                              "\u5927\u54e5\u5927\u54e5\u9976\u547d\u554a!",
                              !0
                            )
                        : 3 == e[1].tag &&
                          this.figureNode1
                            .getComponent("Dialogue")
                            .initialTalk(
                              "\u5927\u54e5\u5200\u4e0b\u7559\u547d!",
                              !0
                            );
                    break;
                  case 2:
                    this.figureNode2
                      .getComponent("Dialogue")
                      .playSound1("\u5973ouNo", 1),
                      this.figureArmatureDisplay2.playAnimation("idle2"),
                      2 == e[1].tag
                        ? this.figureNode2
                            .getComponent("Dialogue")
                            .initialTalk(
                              "\u771f\u4e0d\u662f\u5c0f\u5973\u5b50\u5e72\u7684!",
                              !0
                            )
                        : 3 == e[1].tag &&
                          this.figureNode2
                            .getComponent("Dialogue")
                            .initialTalk(
                              "\u8fd9\u5200\u5b50\u770b\u7740\u597d\u950b\u5229!",
                              !0
                            );
                }
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "A":
                    var o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(o);
                    break;
                  case "B":
                    (o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(o);
                }
              }),
              (t.prototype.onFrameEvent = function (e) {
                e.animationState.name;
              }),
              a(
                [h({ type: cc.Node, displayName: "\u811a\u5370" })],
                t.prototype,
                "jiaoYinNodeAll",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u70df" })],
                t.prototype,
                "yanNode",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level50: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1a487rdqBBAsLniFxmodh6B", "Level50");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.playerNode = null),
                  (t.springNode = null),
                  (t.milkNode = null),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.playerNode = this.node.getChildByName("playerNode")),
                    (this.springNode = this.node.getChildByName("springNode")),
                    (this.milkNode = this.node.getChildByName("milkNode"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {
                  this.milkNode.zIndex = 10;
                }),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = this, o = [], n = 1; n < arguments.length; n++)
                    o[n - 1] = arguments[n];
                  var i = this;
                  (l.default.instance.finishBoo = !0),
                    cc.tween(i.milkNode).to(0.5, { opacity: 0 }).start(),
                    cc
                      .tween(i.playerNode)
                      .delay(0.5)
                      .to(0.6, { scale: 1.2 })
                      .to(0.3, { scale: 0.9 })
                      .to(0.2, { scale: 1.1 })
                      .delay(0.3)
                      .call(function () {
                        i.playerNode.runAction(
                          cc.sequence(
                            cc.spawn(
                              cc.rotateBy(0, 0),
                              t.create(
                                1,
                                cc.v2(-130, 200),
                                i.springNode.position,
                                100,
                                60
                              )
                            ),
                            cc.callFunc(function () {})
                          )
                        );
                      })
                      .delay(1)
                      .call(function () {
                        i.playerNode.runAction(
                          cc.sequence(
                            cc.spawn(
                              cc.rotateBy(0, 0),
                              t.create(
                                1,
                                cc.v2(80, 400),
                                cc.v2(250, 170),
                                100,
                                60
                              )
                            ),
                            cc.callFunc(function () {})
                          )
                        );
                      })
                      .delay(1.2)
                      .call(function () {
                        var e = {
                          name: "\u5bf9",
                          method: function () {
                            cc.director.emit(
                              "victotyNode",
                              "\u80dc\u5229\u754c\u9762"
                            );
                          },
                          caller: i,
                        };
                        u.default.instace.addUITip(e);
                      })
                      .start();
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.create = function (e, t, o, n, i) {
                  var r = (3.14159 * i) / 180,
                    c = t.x + (o.x - t.x) / 4,
                    a = cc.v2(c, n + t.y + Math.cos(r) * c),
                    l = t.x + (o.x - t.x) / 2,
                    u = cc.v2(l, n + t.y + Math.cos(r) * l);
                  return cc.bezierTo(e, [a, u, o]).repeat(1);
                }),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level51: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "efdc6i4kR5EoKUsrbPAUHbO", "Level51");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.zIndexNum = 20), t;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  u.default.instance.duiGouX = 0;
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function (e) {
                  (e.zIndex = this.zIndexNum), this.zIndexNum++;
                }),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function (e, t) {
                  switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                    case "\u624b\u673a":
                      var o = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: this,
                      };
                      s.default.instace.addUITip(o);
                  }
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level52: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "dc67e4pfMFGaIdVDAGBK84q", "Level52");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("TipManager"),
          s = i("Level"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.huaNode1 = null), (t.huaNode2 = null), (t.endBoo = !1), t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.huaNode1 = this.node.getChildByName("huaNode1")),
                    (this.huaNode2 = this.node.getChildByName("huaNode2"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.update = function () {
                  var e = this;
                  (e.huaNode2.x = e.huaNode1.x + 3),
                    (e.huaNode2.y = e.huaNode1.y + 19),
                    1 != e.endBoo &&
                      ((e.huaNode1.x > -190 &&
                        e.huaNode1.x < 140 &&
                        e.huaNode1.y > -290 &&
                        e.huaNode1.y < 230) ||
                        e.huaNode1.y < -290 ||
                        e.huaNode1.y > 230 ||
                        ((e.endBoo = !0),
                        cc.tween(e.huaNode1).to(1.5, { opacity: 0 }).start(),
                        cc
                          .tween(e.huaNode2)
                          .to(1.5, { opacity: 255 })
                          .delay(0.5)
                          .call(function () {
                            var t = {
                              name: "\u5bf9",
                              method: function () {
                                cc.director.emit(
                                  "victotyNode",
                                  "\u80dc\u5229\u754c\u9762"
                                );
                              },
                              caller: e,
                            };
                            u.default.instace.addUITip(t);
                          })
                          .start()));
                }),
                a([p], t)
              );
            })(s.default));
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level53: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ef1e9+AeWNN+pkzya0Om9p3", "Level53");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("Tool"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.windowNode = null),
                  (t.playerNode1 = null),
                  (t.playerNode2 = null),
                  (t.niaoNode = null),
                  (t.niaoLongNode = null),
                  (t.yanLeiNode = null),
                  (t.windowBoo = !1),
                  (t.niaoLongBoo = !1),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.windowNode = this.node.getChildByName("windowNode")),
                    (this.playerNode1 =
                      this.node.getChildByName("playerNode1")),
                    (this.playerNode2 =
                      this.node.getChildByName("playerNode2")),
                    (this.niaoNode = this.node.getChildByName("niaoNode")),
                    (this.niaoLongNode =
                      this.node.getChildByName("niaoLongNode")),
                    (this.yanLeiNode = this.node.getChildByName("yanLeiNode")),
                    (this.niaoLongNodeLocation = this.niaoLongNode.position),
                    this.windowNode.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandlerwindowNode,
                      this
                    );
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {
                  this.windowNode.off(
                    cc.Node.EventType.TOUCH_MOVE,
                    this.touchMoveHandlerwindowNode,
                    this
                  );
                }),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchBeginHandlerwindowNode = function () {}),
                (t.prototype.touchMoveHandlerwindowNode = function (e) {
                  if (1 != this.windowBoo) {
                    var t = e.getDelta();
                    t.y < 0 ||
                      ((this.windowNode.y += t.y),
                      this.windowNode.y > 180 &&
                        ((this.windowNode.y = 180),
                        (this.windowBoo = !0),
                        this.judgeVictory()));
                  }
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.onFrameEvent = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.update = function () {
                  1 != this.niaoLongBoo &&
                    u.default.instace.getDistance(
                      this.niaoLongNode.position,
                      this.niaoLongNodeLocation
                    ) > 100 &&
                    ((this.niaoLongBoo = !0),
                    cc.tween(this.niaoLongNode).to(1, { opacity: 0 }).start(),
                    this.judgeVictory());
                }),
                (t.prototype.judgeVictory = function () {
                  var e = this,
                    t = this;
                  1 == this.windowBoo &&
                    1 == this.niaoLongBoo &&
                    ((l.default.instance.finishBoo = !0),
                    cc
                      .tween(t.niaoNode)
                      .to(1, { x: -115, y: 88, scale: 0 })
                      .call(function () {
                        (t.yanLeiNode.active = !1),
                          cc
                            .tween(t.playerNode2)
                            .to(1, { opacity: 255 })
                            .delay(0.5)
                            .call(function () {
                              var t = {
                                name: "\u5bf9",
                                method: function () {
                                  cc.director.emit(
                                    "victotyNode",
                                    "\u80dc\u5229\u754c\u9762"
                                  );
                                },
                                caller: e,
                              };
                              s.default.instace.addUITip(t);
                            })
                            .start();
                      })
                      .start());
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level54: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2e7e8gz/MNExIikNHUKy809", "Level54");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("Tool"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h =
            (p.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.xiaoTouNode1 = null),
                  (t.xiaoTouNode2 = null),
                  (t.xiaoTouNode3 = null),
                  (t.xiaoTouNode4 = null),
                  (t.renQunNode1 = null),
                  (t.renQunNode2 = null),
                  (t.renQunNode3 = null),
                  (t.renQunNode4 = null),
                  (t.regressionBoo = [!1, !1, !1, !1]),
                  t
                );
              }
              return (
                c(t, e),
                (t.prototype.start = function () {
                  (l.default.instance.duiGouX = 0),
                    (this.xiaoTouNode1 =
                      this.node.getChildByName("xiaoTouNode1")),
                    (this.xiaoTouNode2 =
                      this.node.getChildByName("xiaoTouNode2")),
                    (this.xiaoTouNode3 =
                      this.node.getChildByName("xiaoTouNode3")),
                    (this.xiaoTouNode4 =
                      this.node.getChildByName("xiaoTouNode4")),
                    (this.renQunNode1 =
                      this.node.getChildByName("renQunNode1")),
                    (this.renQunNode2 =
                      this.node.getChildByName("renQunNode2")),
                    (this.renQunNode3 =
                      this.node.getChildByName("renQunNode3")),
                    (this.renQunNode4 =
                      this.node.getChildByName("renQunNode4"));
                }),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.update = function () {
                  var e = this;
                  if (
                    0 == e.regressionBoo[0] &&
                    u.default.instace.getDistance(
                      this.xiaoTouNode1.position,
                      this.renQunNode1.position
                    ) > 180
                  ) {
                    (e.xiaoTouNode1.zIndex = 15), (e.regressionBoo[0] = !0);
                    var t =
                      u.default.instace.getDistance(e.xiaoTouNode1.position, {
                        x: -154,
                        y: -190,
                      }) / 900;
                    cc.tween(e.xiaoTouNode1)
                      .to(t, { x: -154, y: -190 })
                      .call(function () {
                        e.judgeVictory();
                      })
                      .start();
                  }
                  0 == e.regressionBoo[1] &&
                    u.default.instace.getDistance(
                      this.xiaoTouNode2.position,
                      this.renQunNode2.position
                    ) > 180 &&
                    ((e.xiaoTouNode2.zIndex = 16),
                    (e.regressionBoo[1] = !0),
                    (t =
                      u.default.instace.getDistance(e.xiaoTouNode2.position, {
                        x: -54,
                        y: -190,
                      }) / 900),
                    cc
                      .tween(e.xiaoTouNode2)
                      .to(t, { x: -54, y: -190 })
                      .call(function () {
                        e.judgeVictory();
                      })
                      .start()),
                    0 == e.regressionBoo[2] &&
                      u.default.instace.getDistance(
                        this.xiaoTouNode3.position,
                        this.renQunNode3.position
                      ) > 180 &&
                      ((e.xiaoTouNode3.zIndex = 17),
                      (e.regressionBoo[2] = !0),
                      (t =
                        u.default.instace.getDistance(e.xiaoTouNode3.position, {
                          x: 45,
                          y: -190,
                        }) / 900),
                      cc
                        .tween(e.xiaoTouNode3)
                        .to(t, { x: 45, y: -190 })
                        .call(function () {
                          e.judgeVictory();
                        })
                        .start()),
                    0 == e.regressionBoo[3] &&
                      u.default.instace.getDistance(
                        this.xiaoTouNode4.position,
                        this.renQunNode4.position
                      ) > 180 &&
                      ((e.xiaoTouNode4.zIndex = 18),
                      (e.regressionBoo[3] = !0),
                      (t =
                        u.default.instace.getDistance(e.xiaoTouNode4.position, {
                          x: 145,
                          y: -190,
                        }) / 900),
                      cc
                        .tween(e.xiaoTouNode4)
                        .to(t, { x: 145, y: -190 })
                        .call(function () {
                          e.judgeVictory();
                        })
                        .start());
                }),
                (t.prototype.judgeVictory = function () {
                  var e = this;
                  -1 == this.regressionBoo.indexOf(!1) &&
                    ((l.default.instance.finishBoo = !0),
                    e.scheduleOnce(function () {
                      var t = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: e,
                      };
                      s.default.instace.addUITip(t);
                    }, 1));
                }),
                a([f], t)
              );
            })(d.default));
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Level5: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "852d6rAAGBCooyV8UH7xUvZ", "Level5");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.duiGouNodeAll = []),
                (t.answerBooAll = [!0, !1, !1, !1, !1]),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = 0;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = parseInt(t);
                if (
                  1 != this.answerBooAll[o] &&
                  ((this.answerBooAll[o] = !0),
                  l.default.instace.playSound("\u5bf9"),
                  cc
                    .tween(this.duiGouNodeAll[o - 1])
                    .to(0.5, { opacity: 255 })
                    .start(),
                  cc.tween(e.target).to(0.5, { opacity: 255 }).start(),
                  -1 == this.answerBooAll.indexOf(!1))
                ) {
                  var n = {
                    name: "\u5bf9",
                    method: function () {
                      cc.director.emit(
                        "victotyNode",
                        "\u80dc\u5229\u754c\u9762"
                      );
                    },
                    caller: this,
                  };
                  s.default.instace.addUITip(n);
                }
              }),
              a(
                [h({ type: cc.Node, displayName: "\u5173\u5361node" })],
                t.prototype,
                "duiGouNodeAll",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level6: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "f782585y1ZCj7CcrtRtHyU8", "Level6");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.figureNode2 = null),
                (t.figureNode2_1 = null),
                (t.figureNode3 = null),
                (t.daSuanGoods = null),
                (t.yaoShuiGoods = null),
                (t.heiyeNode = null),
                (t.kaiNode = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (this.kaiNode = this.node.getChildByName("kaiNode")),
                  (u.default.instance.duiGouX = 0),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.figureArmatureDisplay2 = this.figureNode2.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  (this.figureArmatureDisplay3 = this.figureNode3.getComponent(
                    dragonBones.ArmatureDisplay
                  )),
                  this.init();
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function (e) {
                e.getComponent("GoodsTuoDong").backInSitu();
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
                t[0].backInSitu();
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                switch (e[0].tag) {
                  case 1:
                    this.figureNode1
                      .getComponent("Dialogue")
                      .playSound1("\u7537ouNo", 1);
                    break;
                  case 2:
                    this.figureNode2
                      .getComponent("Dialogue")
                      .playSound1("\u7537ouNo", 1);
                    break;
                  case 3:
                    this.figureNode3
                      .getComponent("Dialogue")
                      .playSound1("\u7537ouNo", 1);
                }
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this,
                  n = this;
                switch (t) {
                  case "\u5173\u706f":
                    (this.kaiNode.active = !0),
                      (n.heiyeNode.active = !0),
                      (n.figureNode2.children[0].active = !1),
                      (u.default.instance.finishBoo = !0),
                      this.daSuanGoods.setSiblingIndex(5),
                      this.yaoShuiGoods.setSiblingIndex(5),
                      l.default.instace.playSound("\u72c2\u7b11"),
                      (n.figureNode2_1.opacity = 255),
                      cc
                        .tween(this.node)
                        .delay(0.5)
                        .call(function () {
                          n.figureArmatureDisplay1.playAnimation("idle2"),
                            n.figureArmatureDisplay3.playAnimation("idle2");
                        })
                        .delay(1)
                        .call(function () {
                          var e = {
                            name: "\u5bf9",
                            method: function () {
                              cc.director.emit(
                                "victotyNode",
                                "\u80dc\u5229\u754c\u9762"
                              );
                            },
                            caller: o,
                          };
                          s.default.instace.addUITip(e);
                        })
                        .start();
                }
              }),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692" })],
                t.prototype,
                "figureNode2",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72692_1" })],
                t.prototype,
                "figureNode2_1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72693" })],
                t.prototype,
                "figureNode3",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u5927\u849c\u7269\u54c1" })],
                t.prototype,
                "daSuanGoods",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u836f\u6c34\u7269\u54c1" })],
                t.prototype,
                "yaoShuiGoods",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u9ed1\u591c\u56fe" })],
                t.prototype,
                "heiyeNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level7: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ffed4fLqe9E16VkBVfBUVOm", "Level7");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.photoNode = null),
                (t.photoFrameNode = null),
                (t.answerChooseNode = null),
                (t.photoFrameBoo = !1),
                (t.photoBoo = !0),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = -200;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "\u6253\u5f00\u76f8\u6846":
                    this.photoBoo || l.default.instace.playSound("\u5bf9"),
                      (this.photoFrameNode.active = !0),
                      (this.answerChooseNode.active = !1);
                    break;
                  case "\u5173\u95ed\u76f8\u6846":
                    (this.photoFrameNode.active = !1),
                      (this.photoFrameBoo = !0),
                      this.photoBoo &&
                        this.photoFrameBoo &&
                        (this.answerChooseNode.active = !0);
                    break;
                  case "\u70b9\u51fb\u7167\u7247":
                    this.photoFrameBoo || l.default.instace.playSound("\u5bf9"),
                      (this.photoNode.active = !0),
                      (this.answerChooseNode.active = !1);
                    break;
                  case "\u5173\u95ed\u7167\u7247":
                    (this.photoNode.active = !1),
                      (this.photoBoo = !0),
                      this.photoBoo &&
                        this.photoFrameBoo &&
                        (this.answerChooseNode.active = !0);
                    break;
                  case "B":
                    var o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(o);
                    break;
                  case "A":
                    (o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(o);
                    break;
                  case "\u5de6\u70b9\u51fb":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("We love each other for real", !0);
                    break;
                  case "\u53f3\u70b9\u51fb":
                    l.default.instace.playSound("\u6309\u94ae"),
                      e.target
                        .getComponent("Dialogue")
                        .initialTalk("He's my lover", !0);
                }
              }),
              a(
                [h({ type: cc.Node, displayName: "\u7167\u7247" })],
                t.prototype,
                "photoNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u76f8\u6846" })],
                t.prototype,
                "photoFrameNode",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level8: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "fe43ddXqTVFo6HiSTVzavjt", "Level8");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.figureNode1 = null),
                (t.lvDengButtonNode = null),
                (t.hongDengButtonNode = null),
                (t.sanBoo = !1),
                (t.lvDengBoo = !1),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                (u.default.instance.duiGouX = 200),
                  (this.figureArmatureDisplay1 = this.figureNode1.getComponent(
                    dragonBones.ArmatureDisplay
                  ));
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                l.default.instace.playSound("\u5bf9"), e[2].node.destroy();
                var o =
                  this.figureArmatureDisplay1.armature().animation
                    .lastAnimationState.currentTime;
                this.figureArmatureDisplay1
                  .armature()
                  .animation.gotoAndPlayByTime("idle1", o, -1),
                  (this.sanBoo = !0),
                  this.lvDengBoo && this.sanBoo && this.walking();
              }),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u70b9\u51fb\u7ea2\u706f":
                    l.default.instace.playSound("\u6309\u94ae"),
                      (u.default.instance.finishBoo = !0),
                      e.target.removeComponent(cc.Button),
                      cc
                        .tween(o.hongDengButtonNode)
                        .to(0.5, { opacity: 0 })
                        .delay(0.2)
                        .to(0.5, { opacity: 255 })
                        .delay(0.2)
                        .to(0.5, { opacity: 0 })
                        .delay(0.2)
                        .to(0.5, { opacity: 255 })
                        .delay(0.2)
                        .to(0.5, { opacity: 0 })
                        .call(function () {
                          (o.hongDengButtonNode.active = !1),
                            (o.lvDengButtonNode.active = !0),
                            (u.default.instance.finishBoo = !1),
                            (o.lvDengBoo = !0),
                            o.lvDengBoo && o.sanBoo && o.walking();
                        })
                        .start();
                }
              }),
              (t.prototype.walking = function () {
                var e = this;
                (u.default.instance.finishBoo = !0),
                  (this.hongDengButtonNode.active = !1),
                  (this.lvDengButtonNode.active = !0),
                  this.figureArmatureDisplay1.playAnimation("idle2"),
                  cc
                    .tween(this.figureNode1)
                    .to(3, { x: -440 })
                    .call(function () {
                      var t = {
                        name: "\u5bf9",
                        method: function () {
                          cc.director.emit(
                            "victotyNode",
                            "\u80dc\u5229\u754c\u9762"
                          );
                        },
                        caller: e,
                      };
                      s.default.instace.addUITip(t);
                    })
                    .start();
              }),
              a(
                [h({ type: cc.Node, displayName: "\u4eba\u72691" })],
                t.prototype,
                "figureNode1",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u7eff\u706f\u6309\u94ae" })],
                t.prototype,
                "lvDengButtonNode",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u7ea2\u706f\u6309\u94ae" })],
                t.prototype,
                "hongDengButtonNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    Level9: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4f5261IwqVFE7cb95id+Rxe", "Level9");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("OperationData"),
          s = i("TipManager"),
          d = i("Level"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.answerChooseNode = null), (t.answerNumAll = []), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                u.default.instance.duiGouX = -200;
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchBeginHandler = function () {}),
              (t.prototype.touchEndHandler = function () {}),
              (t.prototype.collisionEvent = function (e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                  t[o - 1] = arguments[o];
              }),
              (t.prototype.onCollisionStay = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "quan1":
                  case "quan2":
                    l.default.instace.playSound("\u5bf9"),
                      e.target.removeComponent(cc.Button),
                      this.answerNumAll.push(1),
                      cc.tween(e.target).to(1, { opacity: 255 }).start(),
                      this.answerNumAll.length > 1 &&
                        (this.answerChooseNode.active = !0);
                    break;
                  case "A":
                    var o = {
                      name: "\u5bf9",
                      method: function () {
                        cc.director.emit(
                          "victotyNode",
                          "\u80dc\u5229\u754c\u9762"
                        );
                      },
                      caller: this,
                    };
                    s.default.instace.addUITip(o);
                    break;
                  case "B":
                  case "C":
                    (o = {
                      name: "\u9519\u8bef",
                      method: function () {
                        u.default.instance.finishBoo = !1;
                      },
                      caller: this,
                    }),
                      s.default.instace.addUITip(o);
                }
              }),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u9009\u62e9\u7b54\u6848\u8282\u70b9",
                  }),
                ],
                t.prototype,
                "answerChooseNode",
                void 0
              ),
              a([f], t)
            );
          })(d.default);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    LevelDataManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d17e7hCaFNOJq8dVZBFlApg", "LevelDataManager");
        var n = o,
          i = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function () {
              function e() {
                (this.unlockNum = 1),
                  (this.MaxUnlockNum = 50),
                  (this.grade = 0),
                  (this.maxGrade = 6),
                  (this.levelTitleAll = [
                    { grade: 1, level: 3, titleName: "Rookie\xa0Detective" },
                    { grade: 2, level: 9, titleName: "Trainee\xa0Detective" },
                    {
                      grade: 3,
                      level: 16,
                      titleName: "Assistant\xa0Detective",
                    },
                    { grade: 4, level: 24, titleName: "Private\xa0Detective" },
                    { grade: 5, level: 33, titleName: "Expert\xa0Detective" },
                    { grade: 6, level: 43, titleName: "Royal\xa0Detective" },
                  ]),
                  (this.levelsPromptTextAll = [
                    "",
                    "Who's the Man 2",
                    "Thief",
                    "Who's the wife?",
                    "Murderer",
                    "Find the clues",
                    "Who's the werewolf?",
                    "Mistress",
                    "Agent",
                    "Who will win?",
                    "What time is it?",
                    "Who's lying?",
                    "Aliens",
                    "Programmer",
                    "Pregnant",
                    "Ghost Girl",
                    "Men in danger",
                    "Fake statue?",
                    "Princess Party",
                    "Who's the mom?",
                    "Corresponds to each other",
                    "Fighting Game",
                    "Who's the man",
                    "Posing as cop",
                    "Vampire",
                    "Jailbreak",
                    "Real or Fake ",
                    "Torn clothes",
                    "Memory Game",
                    "Reach the End",
                    "Who will be rescued?",
                    "Who will die?",
                    "Who's cheating",
                    "Occupation Sorting",
                    "Where's the code?",
                    "Who's lazy",
                    "Sports Sort",
                    "Emoji",
                    "Water Glasses",
                    "Tall Montain",
                    "Five stars.",
                    "Find the rooster",
                    "Spin it up",
                    "How many balls",
                    "Green Ball",
                    "Extra items",
                    "Put in wallet",
                    "Criminal",
                    "Animal Party",
                    "Wake Up Kitten",
                    "Over the cliff",
                    "Find the phone",
                    "Rescue the Flower",
                    "Baby don't cry",
                    "Thieves",
                    "",
                  ]),
                  (this.answerPromptTextAll = [
                    [],
                    [
                      "Pour water on their faces.",
                      "In life, your girl friend is probably a hombre.",
                    ],
                    [
                      "Use the scanner to check them.",
                      "No one can escape the eyes of technology.",
                    ],
                    [
                      "There are marriage licenses in the men's hands.",
                      "This man is so happy!",
                    ],
                    [
                      "Take a brush and scrub the area around the dead.",
                      "That's why you should never piss off a woman",
                    ],
                    [
                      "Find the items in order.",
                      "Next time you can turn on the light, it's easier to find.",
                    ],
                    [
                      "Try turning the lights off",
                      "Don't turn off the lights at the party. There may be a surprise.",
                    ],
                    [
                      "The pieces on the ground are wedding photos",
                      "Fire, theft and mistress prevention.",
                    ],
                    [
                      "Put the umbrella in his hand and hit the stoplight.",
                      "It turns out blind people can be cool, too!",
                    ],
                    [
                      "Someone's shoelace is untied, and someone's leg is injured.",
                      "#5 Shoelace is untied, #6 leg is injured, #1 so will win the game.",
                    ],
                    [
                      "Please enter the real time now.",
                      "Are you on Beijing time or New York time?",
                    ],
                    [
                      "There's a secret in the woman's bag.",
                      "Why are there so many philanderers these days?",
                    ],
                    [
                      "There are two doll costumes that can be taken off.",
                      "So the muppets in the park could really be aliens working there.",
                    ],
                    [
                      "The programmer is probably wearing a wig.",
                      "Marry a programmer, rich money, talk rarely and die early.",
                    ],
                    [
                      "Try to slide their stomachs down",
                      "I think she just really likes cake",
                    ],
                    [
                      "Light up the bulbs quickly.",
                      "This is just a girl who gets up late at the night to go to the bathroom",
                    ],
                    [
                      "The man on the left is married and the man on the right is a wanted man",
                      "The man on the left has a ring on his hand. The man on the right is a wanted criminal.",
                    ],
                    [
                      "Tickle their noses with the leaf.",
                      "He's actually just doing performance art.",
                    ],
                    [
                      "Try turning the clock to 12 o'clock.",
                      "Cinderella in a maid's outfit is actually a bit more charming",
                    ],
                    [
                      "Try moving the moms out of the screen",
                      "Babies cry when they can't see their moms",
                    ],
                    [
                      "Look carefully at the characteristics of the objects.",
                      "Life is filled with numbers",
                    ],
                    [
                      "Drag the blood bar of the strong man to 0.",
                      "This is just a girl who gets up late at the night to go to the bathroom",
                    ],
                    [
                      "See whose legs have leg hair",
                      "The man on the left has a ring on his hand. The man on the right is a wanted criminal.",
                    ],
                    [
                      "Some of them are different from the Police ID",
                      "He's actually just doing performance art.",
                    ],
                    [
                      "Slide the moon down the hill.",
                      "Cinderella in a maid's outfit is actually a bit more charming",
                    ],
                    [
                      "There's a file on a woman's bed.",
                      "As expected of you, spotted it right away!",
                    ],
                    [
                      "Take the money one by one and check for authenticity.",
                      "In life, your girl friend is probably a hombre.",
                    ],
                    [
                      "There are 9 holes in the clothes.",
                      "No one can escape the eyes of technology.",
                    ],
                    ["It's time to test your memory.", "This man is so happy!"],
                    [
                      "It's time to test your memory",
                      "That's why you should never piss off a woman",
                    ],
                    [
                      "It's easier to be rescued with a flare gun",
                      "Next time you can turn on the light, it's easier to find.",
                    ],
                    [
                      "Knock the gun out of his hand",
                      "Don't turn off the lights at the party. There may be a surprise.",
                    ],
                    [
                      "Move the table away",
                      "Fire, theft and mistress prevention.",
                    ],
                    [
                      "Handcuffs, pistol, baton are for cops",
                      "It turns out blind people can be cool, too!",
                    ],
                    [
                      "What does the flash show?",
                      "#5 Shoelace is untied, #6 leg is injured, #1 so will win the game.",
                    ],
                    [
                      "The man in the center isn't using his legs.",
                      "Are you on Beijing time or New York time?",
                    ],
                    [
                      "Soccer balls, sneakers, yellow cards are a category",
                      "Why are there so many philanderers these days?",
                    ],
                    [
                      "Don't forget the one hiding in the question.",
                      "So the muppets in the park could really be aliens working there.",
                    ],
                    [
                      "Take everything out of the cup",
                      "Marry a programmer, rich money, talk rarely and die early.",
                    ],
                    [
                      "Of course, the mountain at the top is the highest.",
                      "I think she just really likes cake",
                    ],
                    [
                      "Just write 5 stars!",
                      "This is just a girl who gets up late at the night to go to the bathroom",
                    ],
                    [
                      "It's a rooster, not a hen.",
                      "Why are there so many philanderers these days?",
                    ],
                    [
                      "Just spin the center wheel",
                      "So the muppets in the park could really be aliens working there.",
                    ],
                    [
                      "Pop the bubbles and see how many are left.",
                      "Marry a programmer, rich money, talk rarely and die early.",
                    ],
                    [
                      "Blue and yellow can also be combined to make green balls.",
                      "I think she just really likes cake",
                    ],
                    [
                      "Toothpaste is redundant because there is no toothbrush",
                      "This is just a girl who gets up late at the night to go to the bathroom",
                    ],
                    [
                      "Two-finger touch to zoom out the money to be fit in.",
                      "Why are there so many philanderers these days?",
                    ],
                    [
                      "Restore the prisoner's photo.",
                      "So the muppets in the park could really be aliens working there.",
                    ],
                    [
                      "Click on the items in order, not in the wrong order.",
                      "Marry a programmer, rich money, talk rarely and die early.",
                    ],
                    [
                      "If it doesn't wake up, just keep tapping it",
                      "I think she just really likes cake",
                    ],
                    [
                      "Move the stone and give the milk to the boy.",
                      "This is just a girl who gets up late at the night to go to the bathroom",
                    ],
                    [
                      "Look under the pillows.",
                      "Why are there so many philanderers these days?",
                    ],
                    [
                      "Let the wilted flower get some sunlight...",
                      "So the muppets in the park could really be aliens working there.",
                    ],
                    [
                      "Open the window and the birdcage. The birds will fly away.",
                      "Marry a programmer, rich money, talk rarely and die early.",
                    ],
                    [
                      "Thieves hide behind crowds and houses",
                      "I think she just really likes cake",
                    ],
                    ["", ""],
                  ]),
                  (this.unlockLevelBooAll = [
                    !1,
                    !0,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                  ]);
              }
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new t()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.getGradeLevelTitle = function (e) {
                  for (var t in this.levelTitleAll)
                    if (e == this.levelTitleAll[t].grade)
                      return this.levelTitleAll[t];
                  return null;
                }),
                (e.prototype.getunlockLevel = function (e) {
                  return this.unlockLevelBooAll[e];
                }),
                (e.prototype.setunlockLevel = function (e, t) {
                  this.unlockLevelBooAll[e] = t;
                  for (var o = this.unlockLevelBooAll.length - 1; o--; o >= 0)
                    if (1 == this.unlockLevelBooAll[o]) {
                      this.unlockNum = o;
                      break;
                    }
                  e == this.MaxUnlockNum + 1 &&
                    ((this.unlockLevelBooAll[e] = !1),
                    (this.unlockNum = this.MaxUnlockNum)),
                    this.unlockTitle();
                }),
                (e.prototype.unlockTitle = function () {
                  for (var e in this.levelTitleAll)
                    this.unlockNum > this.levelTitleAll[e].level &&
                      (this.grade = this.levelTitleAll[e].grade);
                  this.localChanges();
                }),
                (e.prototype.init = function () {
                  var e = cc.sys.localStorage.getItem(
                    "LevelDataManager_TuiLi_haiWai1"
                  );
                  if (e) {
                    var t = JSON.parse(e);
                    (this.unlockLevelBooAll = t.unlockLevelBooAll
                      ? t.unlockLevelBooAll
                      : this.unlockLevelBooAll),
                      (this.unlockNum = t.unlockNum
                        ? t.unlockNum
                        : this.unlockNum),
                      (this.grade = t.grade ? t.grade : this.grade),
                      this.unlockNum > this.MaxUnlockNum &&
                        ((this.unlockNum = this.MaxUnlockNum),
                        (this.unlockLevelBooAll[this.MaxUnlockNum + 1] = !1));
                  }
                }),
                (e.prototype.localChanges = function () {
                  var e = {
                    unlockLevelBooAll: this.unlockLevelBooAll,
                    unlockNum: this.unlockNum,
                    grade: this.grade,
                  };
                  cc.sys.localStorage.setItem(
                    "LevelDataManager_TuiLi_haiWai1",
                    JSON.stringify(e)
                  );
                }),
                (e.prototype.localDeletion = function () {
                  cc.sys.localStorage.removeItem(
                    "LevelDataManager_TuiLi_haiWai1"
                  );
                }),
                (e.prototype.spaceJudgment = function () {
                  return !1;
                }),
                (t = i([c], e))
              );
            })());
        (n.default = a), cc._RF.pop();
      },
      {},
    ],
    LevelTest: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "44efdwdqq5Cv46DEpG7Sq/r", "LevelTest");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("Level"),
          u = cc._decorator,
          s = u.ccclass,
          d =
            (u.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                c(t, e),
                (t.prototype.start = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.touchBeginHandler = function () {}),
                (t.prototype.touchEndHandler = function () {}),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.touchHanler = function () {}),
                a([s], t)
              );
            })(l.default));
        (r.default = d), cc._RF.pop();
      },
      {},
    ],
    LevelTextConfigManger: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "528a4p8bK9JWb8QjJSgPFcr", "LevelTextConfigManger");
        var n = e,
          i = o,
          r = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = n("Res"),
          a = n("LevelDataManager"),
          l = n("OperationData"),
          u = n("LevelTextConfigModel"),
          s = cc._decorator,
          d = s.ccclass,
          p =
            (s.property,
            (function () {
              function e() {}
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new t()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.init = function (e) {
                  var o;
                  for (var n in ((this.levelTextConfigModelAll = []), e))
                    (o = new u.default(e[n])),
                      this.levelTextConfigModelAll.push(o);
                  var i,
                    r =
                      a.default.instance.unlockNum >
                      a.default.instance.MaxUnlockNum
                        ? a.default.instance.MaxUnlockNum
                        : a.default.instance.unlockNum;
                  i = t.instance.getLevelIdData(r).levelname;
                  var s = a.default.instance.levelsPromptTextAll.indexOf(i);
                  c.default.instance.loadPrefab(
                    "Prefab",
                    "Game/Level/Level" + s,
                    function (e) {
                      console.log("\u52a0\u8f7d\u5b8c\u6210"),
                        l.default.instance.levelNodeAll.push(e);
                    },
                    this
                  );
                }),
                (e.prototype.getLevelIdData = function (e) {
                  for (var t in this.levelTextConfigModelAll)
                    if (this.levelTextConfigModelAll[t].levelnumber == e)
                      return this.levelTextConfigModelAll[t];
                  return (
                    console.warn(
                      "\u5173\u5361 " +
                        e +
                        "\u6570\u636e\u4e0d\u5b58\u5728....."
                    ),
                    null
                  );
                }),
                (t = r([d], e))
              );
            })());
        (i.default = p), cc._RF.pop();
      },
      {},
    ],
    LevelTextConfigModel: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3b247LeOr9FjbSDn/6hPvxJ", "LevelTextConfigModel");
        var n = o,
          i = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            i([c], function (e) {
              (this.levelnumber = e.levelnumber),
                (this.levelname = e.levelname),
                (this.levelmubiao = e.levelmubiao),
                (this.leveltishi = e.leveltishi),
                (this.levelwin = e.levelwin);
            }));
        (n.default = a), cc._RF.pop();
      },
      {},
    ],
    LevelsPromptUi: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a214821FXlKIIlEVdY2Dn1B", "LevelsPromptUi");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("Tool"),
          s = cc._decorator,
          d = s.ccclass,
          p = s.property,
          f = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.levelShowNode = null), (t.LevelsPromptNode = null), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                var e = "Level " + l.default.instance.levelNum;
                (this.levelShowNode.getComponent(cc.Label).string =
                  u.default.instace.fonTest(e)),
                  (this.LevelsPromptNode.getComponent(cc.Label).string =
                    u.default.instace.fonTest(
                      l.default.instance.levelTitleText
                    )),
                  l.default.instance.levelNum % 2 == 0
                    ? (this.LevelsPromptNode.x = -650)
                    : (this.LevelsPromptNode.x = 650),
                  cc
                    .tween(this.LevelsPromptNode)
                    .delay(0.5)
                    .to(0.5, { x: 0 }, { easing: "quadOut" })
                    .start();
              }),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              a(
                [
                  p({
                    type: cc.Node,
                    displayName: "\u5f53\u524d\u5173\u5361\u663e\u793a",
                  }),
                ],
                t.prototype,
                "levelShowNode",
                void 0
              ),
              a(
                [
                  p({
                    type: cc.Node,
                    displayName: "\u5f53\u524d\u5173\u5361\u663e\u793a",
                  }),
                ],
                t.prototype,
                "LevelsPromptNode",
                void 0
              ),
              a([d], t)
            );
          })(cc.Component);
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Level: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3c5d0rR80hORYAmxSpap9L9", "Level");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                r(t, e),
                (t.prototype.start = function () {}),
                (t.prototype.init = function () {}),
                (t.prototype.update = function () {}),
                (t.prototype.touchHanler = function () {}),
                (t.prototype.collisionEvent = function (e) {
                  for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                }),
                (t.prototype.onCollisionStay = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                }),
                (t.prototype.onFrameEvent = function () {}),
                c([l], t)
              );
            })(cc.Component));
        (i.default = u), cc._RF.pop();
      },
      {},
    ],
    LoadPackages: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2db7dLQWvFAiIsO7ox0Ewhv", "LoadPackages");
        var n,
          i = {
            appID: "Find-The-Truth-Master",
            channel: 5,
            gamedistributionId: "31739f3a34ef4e3c88f1ea0f0181c26c",
            gamemonetizeId: "fj4iyty44z3ecb62rue49n3ipeq45l7g",
          },
          r = e,
          c = o,
          a =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          l = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(c, "__esModule", { value: !0 });
        var u = r("Res"),
          s = r("SceneManager"),
          d = cc._decorator,
          p = d.ccclass,
          f =
            (d.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.textureBoo = !1), (t.prefabBoo = !0), t;
              }
              return (
                a(t, e),
                (t.prototype.start = function () {
                  var e = this;
                  YYGGamesUtil.bodyStyle(720, 1280),
                    YYGGamesUtil.init(
                      i,
                      function () {
                        u.default.instance.loadBundle(
                          "Prefab",
                          function () {
                            (e.textureBoo = !0),
                              u.default.instance.loadBundle(
                                "Texture",
                                function () {
                                  e.prefabBoo = !0;
                                },
                                e
                              );
                          },
                          e
                        );
                      },
                      function () {
                        cc.game.pause();
                      },
                      function () {
                        cc.game.resume();
                      }
                    );
                }),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                (t.prototype.update = function () {
                  1 == this.textureBoo &&
                    1 == this.prefabBoo &&
                    ((this.textureBoo = !1),
                    s.default.instance.jumpScene("\u52a0\u8f7d\u573a\u666f"));
                }),
                l([p], t)
              );
            })(cc.Component));
        (c.default = f), cc._RF.pop();
      },
      {},
    ],
    Load: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1cf05X51y1NHb/8FE63rpmM", "Load");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("LevelTextConfigManger"),
          u = i("GameDataManger"),
          s = i("Global"),
          d = i("LevelDataManager"),
          p = i("OperationData"),
          f = i("Res"),
          h = i("SceneManager"),
          y = cc._decorator,
          g = y.ccclass,
          v = y.property,
          m = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.progress = null), (t.time = 0), (t.boo = !0), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                cc.assetManager.loadBundle("Prefab", function (e, t) {
                  t.loadDir("Game/Level", cc.Prefab, function () {});
                }),
                  cc.assetManager.loadBundle("Texture", function (e, t) {
                    t.loadDir("Game/Level", cc.Texture2D, function () {});
                  }),
                  cc.director.preloadScene("GameScene"),
                  (s.default.getinstance().screenWidth = cc.winSize.width),
                  (s.default.getinstance().screenHeight = cc.winSize.height),
                  (s.default.getinstance().screenProportion =
                    cc.winSize.height / cc.winSize.width),
                  (cc.director.getCollisionManager().enabled = !0),
                  u.default.instance.init(),
                  d.default.instance.init(),
                  this.init(),
                  cc.loader.loadRes("Config/levelDate.json", function (e, t) {
                    e ? console.log(e) : l.default.instance.init(t.json);
                  }),
                  f.default.instance.loadPrefab(
                    "Prefab",
                    "Menu/Checkpoint/CheckpointPrefab",
                    function (e) {
                      p.default.instance.checkpointNode = e;
                    },
                    this
                  ),
                  f.default.instance.loadPrefab(
                    "Prefab",
                    "Menu/Checkpoint/CheckPointChapterPrefab",
                    function (e) {
                      p.default.instance.checkPointChapterNode = e;
                    },
                    this
                  ),
                  f.default.instance.loadPrefab(
                    "Prefab",
                    "Menu/Checkpoint/CheckpointItemPrefab",
                    function (e) {
                      p.default.instance.checkpointItemNode = e;
                    },
                    this
                  ),
                  f.default.instance.loadPrefab(
                    "Prefab",
                    "Menu/Checkpoint/CheckpointItemPrefab",
                    function (e) {
                      p.default.instance.checkpointItemNode = e;
                    },
                    this
                  );
              }),
              (t.prototype.init = function () {}),
              (t.prototype.update = function () {
                this.boo &&
                  (this.time++,
                  this.time >= 50 &&
                    p.default.instance.levelNodeAll.length > 0 &&
                    null != p.default.instance.checkPointChapterNode &&
                    null != p.default.instance.checkpointItemNode &&
                    null != p.default.instance.checkpointNode &&
                    ((this.time = 50),
                    (this.boo = !1),
                    h.default.instance.jumpScene("\u83dc\u5355\u573a\u666f") , h5splash.hideLoading()),
                  (this.progress.width = (this.time / 30) * 414));
              }),
              (t.prototype.touchHanler = function () {}),
              a(
                [v({ type: cc.Node, displayName: "\u8fdb\u5ea6\u6761" })],
                t.prototype,
                "progress",
                void 0
              ),
              a([g], t)
            );
          })(cc.Component);
        (r.default = m), cc._RF.pop();
      },
      {},
    ],
    Menu: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b5797W1rMVC+JbbRogdchOU", "Menu");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("LevelTextConfigManger"),
          s = i("LevelDataManager"),
          d = i("OperationData"),
          p = i("Res"),
          f = i("SceneManager"),
          h = i("TipManager"),
          y = cc._decorator,
          g = y.ccclass,
          v = y.property,
          m = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.bgAll = []),
                (t.ad1 = null),
                (this.ad2 = null),
                (t.ctrlSound = null),
                (t.gameLevelView = null),
                (t.levelPrefabName = ""),
                (t.followDouYinViewNode = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.onload = function () {}),
              (t.prototype.start = function () {
                (window.Menu = this),
                  (window.isSoundMusic = !0),
                  (window.showAudio = !0),
                  window.isGameRet &&
                    ((this.ctrlSound.children[0].active = !0),
                    (this.ctrlSound.children[1].active = !1),
                    (window.isSoundMusic = !1),
                    (window.showAudio = !1),
                    cc.audioEngine.stopAll()),
                  (this.gameLevelView =
                    this.node.getChildByName("gameLevelView"));
                var e = s.default.instance.unlockNum,
                  t = s.default.instance.MaxUnlockNum,
                  o = e > t ? t : e;
                n = u.default.instance.getLevelIdData(o).levelname;
                var n =
                  "Level" + s.default.instance.levelsPromptTextAll.indexOf(n);
                (this.levelPrefabName = n),
                  l.default.instace.playMusic(
                    "\u83dc\u5355\u80cc\u666f\u97f3\u4e50"
                  ),
                  this.viewShow(),
                  h.default.instace.zheZhaoEffectsPlay(),
                  YYGGamesUtil.initAd(
                    this.ad1.getChildByName("Mask"),
                    this.ad2.getChildByName("Mask")
                  ),
                  window.isRet && (this.hideAD(), (window.isRet = !1));
              }),
              (t.prototype.onEnable = function () {
                YYGGamesUtil.gameLogo(),
                  cc.director.on("homeClose", this.homeClose, this),
                  cc.director.on("Checkpoint", this.homeSwitcher, this),
                  cc.director.on("PhysicalResponse", this.homeSwitcher, this),
                  cc.director.on("homeSwitcher", this.homeSwitcher, this);
              }),
              (t.prototype.onDisable = function () {
                cc.director.off("homeClose", this.homeClose, this),
                  cc.director.off("Checkpoint", this.homeSwitcher, this),
                  cc.director.off("PhysicalResponse", this.homeSwitcher, this),
                  cc.director.off("homeSwitcher", this.homeSwitcher, this);
              }),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.touchHanler = function () {
                var e = this;
                (window.isMenuStart = !0),
                  YYGGames.showInterstitial(function () {
                    console.error("\u63d2\u5c4f"), e.hideAD();
                    var t = cc.instantiate(d.default.instance.checkpointNode);
                    e.node.addChild(t);
                  });
              }),
              (t.prototype.onCtrlSound = function (e, t) {
                switch (t) {
                  case "open":
                    (this.ctrlSound.children[0].active = !0),
                      (this.ctrlSound.children[1].active = !1),
                      (window.isSoundMusic = !1),
                      cc.audioEngine.stopAll(),
                      (window.showAudio = !1);
                    break;
                  case "close":
                    (this.ctrlSound.children[0].active = !1),
                      (this.ctrlSound.children[1].active = !0),
                      (window.isSoundMusic = !0),
                      l.default.instace.playMusic(
                        "\u83dc\u5355\u80cc\u666f\u97f3\u4e50"
                      ),
                      (window.showAudio = !0);
                }
              }),
              (t.prototype.showAD = function () {
                (this.ad1.active = !0), (this.ad2.active = !0);
              }),
              (t.prototype.hideAD = function () {
                (this.ad1.active = !1), (this.ad2.active = !1);
              }),
              (t.prototype.homeSwitcher = function () {
                for (var e = this, t = [], o = 0; o < arguments.length; o++)
                  t[o] = arguments[o];
                switch (t[0]) {
                  case "\u5173\u5361\u754c\u9762":
                    var n = cc.instantiate(d.default.instance.checkpointNode);
                    this.node.addChild(n);
                    break;
                  case "\u4f53\u529b\u56de\u590d\u754c\u9762":
                    p.default.instance.loadPrefab(
                      "Prefab",
                      "Game/PhysicalResponse",
                      function (t) {
                        e.node.addChild(t);
                      },
                      this
                    );
                }
              }),
              (t.prototype.homeClose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                e[0];
              }),
              (t.prototype.viewShow = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                1 == f.default.instance.levelViewBoo &&
                  (this.homeSwitcher("\u5173\u5361\u754c\u9762"),
                  (f.default.instance.levelViewBoo = !1));
              }),
              (t.prototype.update = function () {
                for (var e in this.bgAll)
                  this.bgAll[e].y++,
                    this.bgAll[e].y >= 1547 && (this.bgAll[e].y = -1547);
              }),
              a(
                [v({ type: cc.Node, displayName: "bg\u7ec4" })],
                t.prototype,
                "bgAll",
                void 0
              ),
              a(
                [v({ type: cc.Node, displayName: "ctrlSound" })],
                t.prototype,
                "ctrlSound",
                void 0
              ),
              a(
                [v({ type: cc.Node, displayName: "ad1" })],
                t.prototype,
                "ad1",
                void 0
              ),
              a(
                [v({ type: cc.Node, displayName: "ad2" })],
                t.prototype,
                "ad2",
                void 0
              ),
              a([g], t)
            );
          })(cc.Component);
        (r.default = m), cc._RF.pop();
      },
      {},
    ],
    OperationData: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3e0dcxnVCpOEJ5TULDx+fWJ", "OperationData");
        var n = e,
          i = o,
          r = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = n("Res"),
          a = n("LevelTextConfigManger"),
          l = n("LevelDataManager"),
          u = cc._decorator,
          s = u.ccclass,
          d =
            (u.property,
            (function () {
              function e() {
                (this.levelNum = 3),
                  (this.answerBoo = !1),
                  (this.finishBoo = !1),
                  (this.isWin = !1),
                  (this.duiGouX = 0),
                  (this.duiGouY = 0),
                  (this.levelTitleText = ""),
                  (this.answerText = ""),
                  (this.levelSpeechcraftText = ""),
                  (this.levelNodeAll = []),
                  (this.checkpointNode = null),
                  (this.checkPointChapterNode = null),
                  (this.checkpointItemNode = null);
              }
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new t()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.init = function () {
                  var e,
                    o = this,
                    n = cc.find("Canvas/Game/Level");
                  n && (n.active = !0),
                    (this.levelTitleText = a.default.instance.getLevelIdData(
                      this.levelNum
                    ).levelmubiao),
                    (this.answerText = a.default.instance.getLevelIdData(
                      this.levelNum
                    ).leveltishi),
                    (this.levelSpeechcraftText =
                      a.default.instance.getLevelIdData(
                        this.levelNum
                      ).levelwin),
                    (e = a.default.instance.getLevelIdData(
                      this.levelNum
                    ).levelname),
                    (e =
                      "Level" +
                      l.default.instance.levelsPromptTextAll.indexOf(e));
                  var i = t.instance.levelNodeAll;
                  for (var r in i)
                    if (i[r].name == e) {
                      var u = cc.instantiate(i[r]);
                      return (u.active = !0), void n.addChild(u);
                    }
                  c.default.instance.loadPrefab(
                    "Prefab",
                    "Game/Level/" + e,
                    function (e) {
                      (e.active = !0), n.addChild(e), o.levelNodeAll.push(e);
                    },
                    this
                  );
                }),
                (e.prototype.rientrareInit = function () {}),
                (e.prototype.removeDataAll = function () {
                  (this.answerBoo = !1),
                    (this.duiGouX = 0),
                    (this.duiGouY = 0),
                    (this.isWin = !1);
                }),
                (e.prototype.loadLevelPrefab = function () {
                  var e,
                    t = this;
                  (e = a.default.instance.getLevelIdData(
                    this.levelNum
                  ).levelname),
                    (e =
                      "Level" +
                      l.default.instance.levelsPromptTextAll.indexOf(e));
                  var o = [];
                  for (var n in this.levelNodeAll)
                    o.push(this.levelNodeAll[n].name);
                  -1 == o.indexOf("Level" + e) &&
                    c.default.instance.loadPrefab(
                      "Prefab",
                      "Game/Level/" + e,
                      function (e) {
                        t.levelNodeAll.push(e);
                      },
                      this
                    );
                }),
                (t = r([s], e))
              );
            })());
        (i.default = d), cc._RF.pop();
      },
      {},
    ],
    PhysicalResponse: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "adba7kMtuFBR62KmGZ4YJ/b", "PhysicalResponse");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("GameDataManger"),
          s = i("Tool"),
          d = cc._decorator,
          p = d.ccclass,
          f = d.property,
          h = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.currentNode = null), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.onEnable = function () {
                s.default.instace.minAndMaxAnimation(this.currentNode, this);
              }),
              (t.prototype.onDisable = function () {
                cc.director.emit(
                  "homeClose",
                  "\u4f53\u529b\u56de\u590d\u754c\u9762"
                ),
                  this.node.destroy();
              }),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.touchHanler = function (e, t) {
                switch (t) {
                  case "\u8fd4\u56de":
                    l.default.instace.playSound("\u6309\u94ae"),
                      s.default.instace.maxAndMinAnimation(
                        this.currentNode,
                        this
                      );
                    break;
                  case "\u7acb\u5373\u56de\u6ee1":
                    l.default.instace.playSound("\u6309\u94ae"),
                      this.videoProsperity();
                }
              }),
              (t.prototype.videoProsperity = function () {
                var e = this;
                YYGGames.showReward(function () {
                  u.default.instance.setcapacityNumVary(100),
                    s.default.instace.maxAndMinAnimation(e.currentNode, e);
                });
              }),
              (t.prototype.videoProsperityLose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              a(
                [f({ type: cc.Node, displayName: "\u5f53\u524d\u8282\u70b9" })],
                t.prototype,
                "currentNode",
                void 0
              ),
              a([p], t)
            );
          })(cc.Component);
        (r.default = h), cc._RF.pop();
      },
      {},
    ],
    Res: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c2031ZoTU1KM77meFdv4g8u", "Res");
        var n = o,
          i = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function () {
              function e() {
                (this.bundleAll = []),
                  (this.imgPathAll = []),
                  (this.imgMapAll = []);
              }
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new t()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.loadBundle = function (e, t, o) {
                  var n = [],
                    i = this;
                  for (var r in i.bundleAll)
                    if (e == i.bundleAll[r].name)
                      return void console.warn(
                        "bundle \u91cd\u590d\u52a0\u8f7d --"
                      );
                  cc.assetManager.loadBundle(e, function (r, c) {
                    if (
                      (console.log(
                        "\u52a0\u8f7d" +
                          e +
                          "\u8d44\u6e90\u5305\u6210\u529f" +
                          c
                      ),
                      i.bundleAll.push(c),
                      c._config)
                    ) {
                      var a = c._config.assetInfos;
                      if (a)
                        for (var l in ((i.imgPathAll[e] = []),
                        (i.imgMapAll[e] = []),
                        a._map)) {
                          i.imgPathAll[e].push(a._map[l].path);
                          var u = a._map[l].path;
                          u &&
                            ((n = u.split("/")),
                            i.imgMapAll[e].push(n[n.length - 1]));
                        }
                    }
                    t.call(o);
                  });
                }),
                (e.prototype.preloadPrefab = function (e, t) {
                  var o;
                  for (var n in this.bundleAll)
                    if (e == this.bundleAll[n].name) {
                      o = this.bundleAll[n];
                      break;
                    }
                  o
                    ? o.preload(t, cc.Prefab)
                    : console.warn(
                        "bundle \u672a\u627e\u5230 --- \u9519\u8bef"
                      );
                }),
                (e.prototype.loadPrefab = function (e, t, o, n) {
                  var i;
                  for (var r in this.bundleAll)
                    if (e == this.bundleAll[r].name) {
                      i = this.bundleAll[r];
                      break;
                    }
                  i
                    ? (console.log("\u5f00\u59cb\u52a0\u8f7d"),
                      i.load(t, function (e, t) {
                        if (e) console.warn("Prefab error:" + e);
                        else if (t instanceof cc.Prefab) {
                          var i = cc.instantiate(t);
                          o.call(n, i), console.log("\u52a0\u8f7d\u6210\u529f");
                        } else console.warn("Prefab error");
                      }))
                    : console.warn(
                        "bundle \u672a\u627e\u5230 --- \u9519\u8bef"
                      );
                }),
                (e.prototype.loadImg = function (e, t, o, n) {
                  var i,
                    r,
                    c = "";
                  if (this.imgPathAll[e]) {
                    for (var a in this.bundleAll)
                      if (e == this.bundleAll[a].name) {
                        i = this.bundleAll[a];
                        break;
                      }
                    i
                      ? -1 != (r = this.imgMapAll[e].indexOf(t)) &&
                        ((c = this.imgPathAll[e][r]),
                        i.load(c, cc.SpriteFrame, function (e, t) {
                          e
                            ? console.warn("spriteFrame error:" + e)
                            : t instanceof cc.SpriteFrame
                            ? o.call(n, t)
                            : console.warn("spriteFrame error");
                        }))
                      : console.warn(
                          "bundle \u672a\u627e\u5230 --- \u9519\u8bef"
                        );
                  } else console.warn(e + " --- \u9519\u8bef");
                }),
                (e.prototype.loadAudio = function (e, t, o, n) {
                  var i;
                  for (var r in this.bundleAll)
                    if (e == this.bundleAll[r].name) {
                      i = this.bundleAll[r];
                      break;
                    }
                  i
                    ? i.load(t, cc.AudioClip, function (e, t) {
                        e
                          ? console.warn("AudioClip error:" + e)
                          : t instanceof cc.AudioClip
                          ? o.call(n, t)
                          : console.warn("AudioClip error");
                      })
                    : console.warn(
                        "bundle \u672a\u627e\u5230 --- \u9519\u8bef"
                      );
                }),
                (e.prototype.loadScene = function (e, t, o, n) {
                  var i;
                  for (var r in this.bundleAll)
                    if (e == this.bundleAll[r].name) {
                      i = this.bundleAll[r];
                      break;
                    }
                  i
                    ? i.loadScene(t, function (e, t) {
                        e
                          ? console.warn("scene error:" + e)
                          : t instanceof cc.Scene
                          ? o.call(n, t)
                          : console.warn("scene error");
                      })
                    : console.warn(
                        "bundle \u672a\u627e\u5230 --- \u9519\u8bef"
                      );
                }),
                (t = i([c], e))
              );
            })());
        (n.default = a), cc._RF.pop();
      },
      {},
    ],
    SceneManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "16e91vS0bxGaI1telWZ6qTv", "SceneManager");
        var n = e,
          i = o,
          r = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var c = n("OperationData"),
          a = n("TipManager"),
          l = cc._decorator,
          u = l.ccclass,
          s =
            (l.property,
            (function () {
              function e() {
                this.levelViewBoo = !1;
              }
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instance", {
                  get: function () {
                    return (
                      this._instance || (this._instance = new t()),
                      this._instance
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.jumpScene = function (e) {
                  switch (
                    (this.removeMesgAll(),
                    c.default.instance.removeDataAll(),
                    e)
                  ) {
                    case "\u52a0\u8f7d\u573a\u666f":
                      cc.director.loadScene("LoadScene");
                      break;
                    case "\u83dc\u5355\u573a\u666f":
                      a.default.instace.zheZhaoEffectsClose("MenuScene");
                      break;
                    case "\u9009\u5173\u573a\u666f":
                      break;
                    case "\u6e38\u620f\u573a\u666f":
                      a.default.instace.zheZhaoEffectsClose("GameScene"),
                        c.default.instance.loadLevelPrefab();
                  }
                }),
                (e.prototype.removeMesgAll = function () {
                  cc.director.emit("msgRemoveAll");
                }),
                (t = r([u], e))
              );
            })());
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    ServerSwitch: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "963427F8s1OrZ/g/1XAqRky", "ServerSwitch");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u =
            (a.property,
            (function (e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                r(t, e),
                (t.prototype.start = function () {
                  cc.game.addPersistRootNode(this.node);
                }),
                (t.prototype.onEnable = function () {}),
                (t.prototype.onDisable = function () {}),
                (t.prototype.onDestroy = function () {}),
                c([l], t)
              );
            })(cc.Component));
        (i.default = u), cc._RF.pop();
      },
      {},
    ],
    Test: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "10072oSAk1NsLLeH4RNK+ld", "Test");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("Res"),
          u = i("TipManager"),
          s = cc._decorator,
          d = s.ccclass,
          p = s.property,
          f = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.prefabNode = null), (t.imgNode = null), t;
            }
            return (
              c(t, e),
              (t.prototype.start = function () {}),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u52a0\u8f7d\u9884\u5236\u4f53":
                    u.default.instace.addUITip({
                      name: "\u63d0\u793a\u8bed\u53e5",
                      text: "\u7b49\u7ea7\u4e0d\u8db3!",
                    });
                    break;
                  case "\u9690\u85cf\u9884\u5236\u4f53":
                    o.prefabNode.removeAllChildren();
                    break;
                  case "\u6dfb\u52a0\u56fe\u7247":
                    var n = Math.floor(6 * Math.random() + 1);
                    l.default.instance.loadImg(
                      "Texture",
                      "kele" + n,
                      function (e) {
                        o.imgNode.getComponent(cc.Sprite).spriteFrame = e;
                      },
                      this
                    );
                    break;
                  case "\u5220\u9664\u56fe\u7247":
                    o.imgNode.getComponent(cc.Sprite).spriteFrame = null;
                    break;
                  case "\u66f4\u6362\u56fe\u7247":
                    (n = Math.floor(6 * Math.random() + 1)),
                      l.default.instance.loadImg(
                        "Texture",
                        "kele" + n,
                        function (e) {
                          o.imgNode.getComponent(cc.Sprite).spriteFrame = e;
                        },
                        this
                      );
                }
              }),
              a([p(cc.Node)], t.prototype, "prefabNode", void 0),
              a([p(cc.Node)], t.prototype, "imgNode", void 0),
              a([d], t)
            );
          })(cc.Component);
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    TextaddTip: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "6063dcP3PdK1qE8zA69qu09", "TextaddTip");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u = a.property,
          s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.text = null), t;
            }
            return (
              r(t, e),
              (t.prototype.start = function () {
                (this.node.scale = 0),
                  cc.tween(this.node).to(0.2, { scale: 1 }).start(),
                  cc
                    .tween(this.node)
                    .delay(0.5)
                    .to(0.7, { y: this.node.y + 200 }, { easing: "quadIn" })
                    .call(function (e) {
                      e.destroy();
                    })
                    .start();
              }),
              c([u(cc.Label)], t.prototype, "text", void 0),
              c([l], t)
            );
          })(cc.Component);
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    TiShiFei: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9ea7c5GNA9Pb7C1DW8SWi8E", "TiShiFei");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("GameDataManger"),
          s = i("OperationData"),
          d = i("Tool"),
          p = cc._decorator,
          f = p.ccclass,
          h = p.property,
          y = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.currentNode = null),
                (t.videoIconAll = []),
                (t.returnNode = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                if (u.default.instance.tipNum > 0)
                  for (var e in this.videoIconAll)
                    this.videoIconAll[e].opacity = 0;
                this.returnNode.active = !1;
              }),
              (t.prototype.onEnable = function () {
                d.default.instace.minAndMaxAnimation(this.currentNode, this);
              }),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {
                cc.director.emit(
                  "homeClose",
                  "\u89c6\u9891\u63d0\u793a\u754c\u9762"
                );
              }),
              (t.prototype.touchHanler = function (e, t) {
                switch ((l.default.instace.playSound("\u6309\u94ae"), t)) {
                  case "\u63d0\u793a":
                    if (u.default.instance.tipNum > 0)
                      return (
                        (u.default.instance.tipNum = -1),
                        u.default.instance.localChanges(),
                        void this.videoProsperity()
                      );
                    s.default.instance.answerBoo, this.videoProsperity();
                    break;
                  case "\u8fd4\u56de":
                    d.default.instace.maxAndMinAnimation(
                      this.currentNode,
                      this
                    );
                    break;
                  case "\u5e95\u6846\u70b9\u51fb":
                    if (window.AD.wuDianRate <= 0) break;
                    if (u.default.instance.tipNum > 0)
                      return (
                        (u.default.instance.tipNum = -1),
                        u.default.instance.localChanges(),
                        void this.videoProsperity()
                      );
                    s.default.instance.answerBoo, this.videoProsperity();
                }
              }),
              (t.prototype.videoProsperity = function () {
                (s.default.instance.answerBoo = !0),
                  d.default.instace.maxAndMinAnimation(this.currentNode, this),
                  cc.director.emit(
                    "AnswerPromptUI",
                    "\u7b54\u6848\u63d0\u793a\u754c\u9762",
                    s.default.instance.answerText
                  );
              }),
              (t.prototype.videoProsperityLose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              a(
                [h({ type: cc.Node, displayName: "\u5f53\u524d\u8282\u70b9" })],
                t.prototype,
                "currentNode",
                void 0
              ),
              a(
                [
                  h({
                    type: cc.Node,
                    displayName: "\u89c6\u9891icon\u56fe\u6807",
                  }),
                ],
                t.prototype,
                "videoIconAll",
                void 0
              ),
              a(
                [h({ type: cc.Node, displayName: "\u8fd4\u56de\u6309\u94ae" })],
                t.prototype,
                "returnNode",
                void 0
              ),
              a([f], t)
            );
          })(cc.Component);
        (r.default = y), cc._RF.pop();
      },
      {},
    ],
    TipManager: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "79666yRGGZF1Z3gYeZO17lW", "TipManager");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("OperationData"),
          u = i("Res"),
          s = cc._decorator,
          d = s.ccclass,
          p = s.property,
          f = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.game = null),
                (t.UI = null),
                (t.zheZhaoNode = null),
                (t.maoZhuaNode = null),
                t
              );
            }
            var o;
            return (
              c(t, e),
              (o = t),
              Object.defineProperty(t, "instace", {
                get: function () {
                  return this._instace;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.start = function () {
                (o._instace = this),
                  cc.director.on("TipYuJu", this.addUITip, this);
              }),
              (t.prototype.addUITip = function (e) {
                var t = this;
                switch (e.name) {
                  case "\u63d0\u793a\u8bed\u53e5":
                    u.default.instance.loadPrefab(
                      "Prefab",
                      "Tip/TextaddTipPrefab",
                      function (o) {
                        (o.getComponent("TextaddTip").text.string = e.text),
                          t.UI.addChild(o);
                      },
                      this
                    );
                    break;
                  case "\u5bf9":
                    u.default.instance.loadPrefab(
                      "Prefab",
                      "Tip/DuiTipPrefab",
                      function (o) {
                        o.getComponent("DuiTip").init(e.method, e.caller),
                          t.UI.addChild(o);
                      },
                      this
                    );
                    break;
                  case "\u9519\u8bef":
                    u.default.instance.loadPrefab(
                      "Prefab",
                      "Tip/CuoWuTipPrefab",
                      function (o) {
                        o.getComponent("CuoWuTip").init(e.method, e.caller),
                          t.UI.addChild(o);
                      },
                      this
                    );
                }
              }),
              (t.prototype.zheZhaoEffectsPlay = function () {
                var e = this;
                (this.zheZhaoNode.active = !0),
                  (this.maoZhuaNode.active = !0),
                  (this.maoZhuaNode.angle = 0),
                  (this.maoZhuaNode.scale = 0.9),
                  cc
                    .tween(this.zheZhaoNode)
                    .to(0.8, { width: 3e3, height: 3e3 })
                    .start(),
                  cc
                    .tween(this.maoZhuaNode)
                    .delay(0.2)
                    .to(0.3, { scale: 0 })
                    .call(function () {
                      (e.maoZhuaNode.active = !1),
                        (l.default.instance.finishBoo = !1);
                    })
                    .start();
              }),
              (t.prototype.zheZhaoEffectsClose = function (e) {
                (l.default.instance.finishBoo = !0),
                  (this.zheZhaoNode.active = !0),
                  (this.maoZhuaNode.active = !0),
                  (this.zheZhaoNode.width = 3e3),
                  (this.zheZhaoNode.height = 3e3),
                  (this.maoZhuaNode.scale = 0),
                  cc
                    .tween(this.zheZhaoNode)
                    .to(0.5, { width: 0, height: 0 })
                    .call(function () {
                      cc.director.loadScene(e);
                    })
                    .start(),
                  (this.maoZhuaNode.active = !0),
                  cc
                    .tween(this.maoZhuaNode)
                    .to(0.3, { angle: 0, scale: 0.9 })
                    .call(function () {})
                    .start();
              }),
              (t.prototype.viewZheZhaoEffectsPlay = function () {
                var e = this;
                (this.zheZhaoNode.active = !0),
                  (this.maoZhuaNode.active = !0),
                  (this.maoZhuaNode.angle = 0),
                  (this.maoZhuaNode.scale = 0.9),
                  cc
                    .tween(this.zheZhaoNode)
                    .to(0.8, { width: 3e3, height: 3e3 })
                    .start(),
                  cc
                    .tween(this.maoZhuaNode)
                    .delay(0.2)
                    .to(0.3, { angle: 360, scale: 0 })
                    .call(function () {
                      e.maoZhuaNode.active = !1;
                    })
                    .start();
              }),
              (t.prototype.viewZheZhaoEffectsClose = function () {
                (this.zheZhaoNode.active = !0),
                  (this.maoZhuaNode.active = !0),
                  (this.zheZhaoNode.width = 3e3),
                  (this.zheZhaoNode.height = 3e3),
                  (this.maoZhuaNode.scale = 0),
                  (this.maoZhuaNode.angle = 360),
                  cc
                    .tween(this.zheZhaoNode)
                    .to(0.5, { width: 0, height: 0 })
                    .call(function () {})
                    .start(),
                  (this.maoZhuaNode.active = !0),
                  cc
                    .tween(this.maoZhuaNode)
                    .to(0.3, { angle: 0, scale: 0.9 })
                    .call(function () {})
                    .start();
              }),
              a(
                [p({ type: cc.Node, displayName: "\u6e38\u620f\u573a\u666f" })],
                t.prototype,
                "game",
                void 0
              ),
              a(
                [p({ type: cc.Node, displayName: "UI\u573a\u666f" })],
                t.prototype,
                "UI",
                void 0
              ),
              a(
                [p({ type: cc.Node, displayName: "\u906e\u7f69\u6548\u679c" })],
                t.prototype,
                "zheZhaoNode",
                void 0
              ),
              a(
                [p({ type: cc.Node, displayName: "\u8fc7\u573aicon" })],
                t.prototype,
                "maoZhuaNode",
                void 0
              ),
              (o = a([d], t))
            );
          })(cc.Component);
        (r.default = f), cc._RF.pop();
      },
      {},
    ],
    Tool: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "19e7bxL8LxNCqLT2uylKl8w", "Tool");
        var n = o,
          i = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = cc._decorator,
          c = r.ccclass,
          a =
            (r.property,
            (function () {
              function e() {}
              var t;
              return (
                (t = e),
                Object.defineProperty(e, "instace", {
                  get: function () {
                    return (
                      this._instace || (this._instace = new t()), this._instace
                    );
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.minAndMaxAnimation = function (e) {
                  (e.scale = 0.4), e.runAction(cc.scaleTo(0.2, 1, 1));
                }),
                (e.prototype.maxAndMinAnimation = function (e) {
                  cc.tween(e)
                    .to(0.2, { scale: 0.4 })
                    .call(function () {
                      e.parent.active = !1;
                    })
                    .start();
                }),
                (e.prototype.random = function (e, t) {
                  return Math.floor(Math.random() * (t - e + 1)) + e;
                }),
                (e.prototype.angleToRadian = function (e) {
                  return (e * Math.PI) / 180;
                }),
                (e.prototype.radianToAngle = function (e) {
                  return (180 * e) / Math.PI;
                }),
                (e.prototype.getDistance = function (e, t) {
                  return Math.sqrt(
                    Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
                  );
                }),
                (e.prototype.getAngle = function (e, t) {
                  var o = e.x,
                    n = e.y,
                    i = t.x,
                    r = t.y,
                    c = Math.abs(o - i),
                    a = Math.abs(n - r),
                    l = a / Math.sqrt(Math.pow(c, 2) + Math.pow(a, 2)),
                    u = Math.acos(l),
                    s = Math.floor(180 / (Math.PI / u));
                  return (
                    i > o && r > n && (s = 180 - s),
                    i == o && r > n && (s = 180),
                    i > o && r == n && (s = 90),
                    i < o && r > n && (s = 180 + s),
                    i < o && r == n && (s = 270),
                    i < o && r < n && (s = 360 - s),
                    s
                  );
                }),
                (e.prototype.getRadian = function (e, t) {
                  var o = e.x,
                    n = e.y,
                    i = t.x,
                    r = t.y,
                    c = Math.abs(o - i),
                    a = Math.abs(n - r),
                    l = a / Math.sqrt(Math.pow(c, 2) + Math.pow(a, 2)),
                    u = Math.acos(l),
                    s = Math.floor(180 / (Math.PI / u));
                  return (
                    i > o && r > n && (s = 180 - s),
                    i == o && r > n && (s = 180),
                    i > o && r == n && (s = 90),
                    i < o && r > n && (s = 180 + s),
                    i < o && r == n && (s = 270),
                    i < o && r < n && (s = 360 - s),
                    this.angleToRadian(s)
                  );
                }),
                (e.prototype.getDate = function (e) {
                  var t = new Date();
                  return "year" == e
                    ? t.getFullYear()
                    : "year2" == e
                    ? t.getFullYear()
                    : "month" == e
                    ? t.getMonth()
                    : "day" == e
                    ? t.getDate()
                    : "week" == e
                    ? t.getDay()
                    : "millisecond" == e
                    ? t.getTime()
                    : "hour" == e
                    ? t.getHours()
                    : "minute" == e
                    ? t.getMinutes()
                    : "second" == e
                    ? t.getSeconds()
                    : void 0;
                }),
                (e.prototype.getIndexInArray = function (e, t) {
                  for (var o = 0; o < e.length; o++)
                    if (JSON.stringify(e[o]) === JSON.stringify(t)) return o;
                  return -1;
                }),
                (e.prototype.removeElementFromArr = function (e, o) {
                  var n = t.instace.getIndexInArray(e, o);
                  return n > -1 && e.splice(n, 1), e;
                }),
                (e.prototype.strToArr = function (e, t) {
                  return e.split("" + t);
                }),
                (e.prototype.getNewArr = function (e, t) {
                  var o = new Array();
                  for (var n in e) o.push(e[n]);
                  for (var i = new Array(), r = 0; r < t && o.length > 0; r++) {
                    var c = Math.floor(Math.random() * o.length);
                    (i[r] = o[c]), o.splice(c, 1);
                  }
                  return i;
                }),
                (e.prototype.getWindowSize = function () {
                  return cc.winSize;
                }),
                (e.prototype.gettimeText = function (e, t) {
                  var o = Math.floor(t / 3600),
                    n = Math.floor((t - 3600 * o) / 60),
                    i = Math.floor(t - 3600 * o - 60 * n),
                    r = n > 9 ? n + "" : "0" + n,
                    c = i > 9 ? i + "" : "0" + i;
                  return 1 == e
                    ? r + ":" + c
                    : 2 == e
                    ? (o > 9 ? o + "" : "0" + o) + ":" + r + ":" + c
                    : void 0;
                }),
                (e.prototype.sort = function (e) {
                  for (var t = 0; t < e.length - 1; t++)
                    for (var o = t + 1; o < e.length; o++)
                      if (e[t] > e[o]) {
                        var n = e[t];
                        (e[t] = e[o]), (e[o] = n);
                      }
                  return e;
                }),
                (e.prototype.numAllChaos = function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var o = Math.floor(Math.random() * e.length),
                      n = e[t];
                    (e[t] = e[o]), (e[o] = n);
                  }
                }),
                (e.prototype.fonTest = function (e) {
                  for (var t = "", o = 0; o < e.length; o++)
                    t += " " == e[o] ? "~" : e[o];
                  return t;
                }),
                (t = i([c], e))
              );
            })());
        (n.default = a), cc._RF.pop();
      },
      {},
    ],
    TuoDong: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "56878RCNe5A85/7yfdqS8v4", "TuoDong");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u =
            (a.property,
            (function (e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.chuMoX = 0), (t.chuMoY = 0), t;
              }
              return (
                r(t, e),
                (t.prototype.start = function () {
                  this.node.on(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandler,
                    this
                  ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEndHandler,
                      this
                    ),
                    this.node.on(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchEndHandler,
                      this
                    ),
                    this.init();
                }),
                (t.prototype.onDestroy = function () {
                  this.node.off(
                    cc.Node.EventType.TOUCH_START,
                    this.touchBeginHandler,
                    this
                  ),
                    this.node.off(
                      cc.Node.EventType.TOUCH_MOVE,
                      this.touchMoveHandler,
                      this
                    ),
                    this.node.off(
                      cc.Node.EventType.TOUCH_END,
                      this.touchEndHandler,
                      this
                    ),
                    this.node.off(
                      cc.Node.EventType.TOUCH_CANCEL,
                      this.touchEndHandler,
                      this
                    );
                }),
                (t.prototype.init = function () {
                  (this.initX = this.node.x), (this.initY = this.node.y);
                }),
                (t.prototype.touchBeginHandler = function (e) {
                  (this.chuMoX = e.getLocationX()),
                    (this.chuMoY = e.getLocationY());
                }),
                (t.prototype.touchMoveHandler = function (e) {
                  var t = e.getDelta();
                  (this.node.x += t.x), (this.node.y += t.y);
                }),
                (t.prototype.touchEndHandler = function () {}),
                c([l], t)
              );
            })(cc.Component));
        (i.default = u), cc._RF.pop();
      },
      {},
    ],
    VictoryUI: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2315d2vDctKDK5hRmNrDxZ5", "VictoryUI");
        var n,
          i = e,
          r = o,
          c =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          a = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = i("AudioManager"),
          u = i("GameDataManger"),
          s = i("LevelDataManager"),
          d = i("OperationData"),
          p = i("Res"),
          f = (i("Tool"), i("SceneManager")),
          h = i("TipManager"),
          y = cc._decorator,
          g = y.ccclass,
          v = y.property,
          m = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.levelwinTextNode = null),
                (t.clapNode = null),
                (t.parcitleNode = null),
                (t.currentTitleImg = null),
                (t.nextLeveltitleImg = null),
                (t.titleLvelText = null),
                (t.rankNode = null),
                (t.rankNode1 = null),
                (t.levelwinTextBgNode = null),
                t
              );
            }
            return (
              c(t, e),
              (t.prototype.start = function () {
                var e = this;
                (this.isFirstTouch = !0),
                  (e.rankNode = e.node
                    .getChildByName("node")
                    .getChildByName("rankNode")),
                  (e.rankNode1 = e.node
                    .getChildByName("node")
                    .getChildByName("rankNode1")),
                  (e.levelwinTextBgNode = e.node
                    .getChildByName("node")
                    .getChildByName("levelwinTextBgNode")),
                  s.default.instance.setunlockLevel(
                    d.default.instance.levelNum + 1,
                    !0
                  ),
                  l.default.instace.playSound("\u80dc\u5229"),
                  e.clapNode.getComponent(cc.Animation).play(),
                  (e.parcitleNode.active = !0),
                  (e.levelwinTextBgNode.opacity = 1),
                  (e.levelwinTextNode.getComponent(cc.Label).string =
                    d.default.instance.levelSpeechcraftText),
                  e.scheduleOnce(function () {
                    (e.levelwinTextBgNode.height = e.levelwinTextNode.height),
                      (e.levelwinTextBgNode.opacity = 255);
                  }, 0.1);
                var t = s.default.instance.getGradeLevelTitle(
                    s.default.instance.grade
                  ),
                  o = d.default.instance.levelNum;
                if (null == t || o > t.level)
                  if (s.default.instance.grade >= s.default.instance.maxGrade)
                    (e.rankNode.active = !1),
                      (e.rankNode1.active = !1),
                      p.default.instance.loadImg(
                        "Texture",
                        "chengHao_" + s.default.instance.grade,
                        function (t) {
                          e.currentTitleImg.getComponent(
                            cc.Sprite
                          ).spriteFrame = t;
                        },
                        e
                      );
                  else {
                    (e.rankNode.active = !1), (e.rankNode1.active = !0);
                    var n = s.default.instance.grade + 1;
                    (t = s.default.instance.getGradeLevelTitle(n)),
                      p.default.instance.loadImg(
                        "Texture",
                        "chengHao_" + n,
                        function (t) {
                          e.nextLeveltitleImg.getComponent(
                            cc.Sprite
                          ).spriteFrame = t;
                        },
                        e
                      ),
                      (e.titleLvelText.getComponent(cc.Label).string =
                        t.level - o + "");
                  }
                else
                  (e.rankNode.active = o == t.level),
                    (e.rankNode1.active = !1),
                    p.default.instance.loadImg(
                      "Texture",
                      "chengHao_" + s.default.instance.grade,
                      function (t) {
                        e.currentTitleImg.getComponent(cc.Sprite).spriteFrame =
                          t;
                      },
                      e
                    );
              }),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.init = function () {}),
              (t.prototype.touchHanler = function (e, t) {
                var o = this;
                switch (t) {
                  case "\u8fd4\u56de\u4e3b\u9875":
                    cc.audioEngine.stopAll(),
                      l.default.instace.playSound("\u6309\u94ae"),
                      YYGGames.showInterstitial(function () {
                        console.error("\u63d2\u5c4f"),
                          window.showAudio
                            ? (window.isGameRet = !1)
                            : (window.isGameRet = !0),
                          (window.isRet = !0),
                          f.default.instance.jumpScene(
                            "\u83dc\u5355\u573a\u666f"
                          ),
                          (f.default.instance.levelViewBoo = !0);
                      });
                    break;
                  case "\u4e0b\u4e00\u5173":
                    cc.audioEngine.stopAll(),
                      l.default.instace.playSound("\u6309\u94ae"),
                      YYGGames.showInterstitial(function () {
                        d.default.instance.levelNum + 1 >
                        s.default.instance.MaxUnlockNum
                          ? h.default.instace.addUITip({
                              name: "\u63d0\u793a\u8bed\u53e5",
                              text: "This is the last level!",
                            })
                          : o.isFirstTouch
                          ? (d.default.instance.levelNum++,
                            f.default.instance.jumpScene(
                              "\u6e38\u620f\u573a\u666f"
                            ),
                            (o.isFirstTouch = !1),
                            setTimeout(function () {
                              o.isFirstTouch = !0;
                            }, 3e3))
                          : console.error("\u70b9\u4e0d\u4e86");
                      });
                    break;
                  case "\u52a0\u80fd\u91cf":
                    cc.audioEngine.stopAll(),
                      l.default.instace.playSound("\u6309\u94ae"),
                      YYGGames.showReward(function () {
                        o.videoProsperity();
                      });
                }
              }),
              (t.prototype.videoProsperity = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                u.default.instance.setcapacityNumVary(100),
                  d.default.instance.levelNum + 1 >
                  s.default.instance.MaxUnlockNum
                    ? (f.default.instance.jumpScene("\u83dc\u5355\u573a\u666f"),
                      (f.default.instance.levelViewBoo = !0))
                    : (d.default.instance.levelNum++,
                      f.default.instance.jumpScene("\u6e38\u620f\u573a\u666f"));
              }),
              (t.prototype.videoProsperityLose = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
              }),
              a(
                [
                  v({
                    type: cc.Node,
                    displayName:
                      "\u5173\u5361\u7ed3\u675f\u8bed\u53e5\u6587\u672cnode",
                  }),
                ],
                t.prototype,
                "levelwinTextNode",
                void 0
              ),
              a(
                [v({ type: cc.Node, displayName: "\u9f13\u638c\u8282\u70b9" })],
                t.prototype,
                "clapNode",
                void 0
              ),
              a(
                [v({ type: cc.Node, displayName: "\u7c92\u5b50\u8282\u70b9" })],
                t.prototype,
                "parcitleNode",
                void 0
              ),
              a(
                [
                  v({
                    type: cc.Node,
                    displayName: "\u5f53\u524d\u79f0\u53f7img",
                  }),
                ],
                t.prototype,
                "currentTitleImg",
                void 0
              ),
              a(
                [
                  v({
                    type: cc.Node,
                    displayName: "\u4e0b\u4e00\u7ea7\u522b\u79f0\u53f7img",
                  }),
                ],
                t.prototype,
                "nextLeveltitleImg",
                void 0
              ),
              a(
                [
                  v({
                    type: cc.Node,
                    displayName:
                      "\u4e0b\u4e00\u7ea7\u7ea7\u522b\u5173\u5361\u6587\u672cNode",
                  }),
                ],
                t.prototype,
                "titleLvelText",
                void 0
              ),
              a([g], t)
            );
          })(cc.Component);
        (r.default = m), cc._RF.pop();
      },
      {},
    ],
    VideoIconSwitch: [
      function (e, t, o) {
        "use strict";
        cc._RF.push(t, "36a22iuZ4lNFJuNcFV5sCU9", "VideoIconSwitch");
        var n,
          i = o,
          r =
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
                })(e, t);
            }),
            function (e, t) {
              function o() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((o.prototype = t.prototype), new o()));
            }),
          c = function (e, t, o, n) {
            var i,
              r = arguments.length,
              c =
                r < 3
                  ? t
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(t, o))
                  : n;
            if (
              "object" ==
                ("undefined" == typeof Reflect
                  ? "undefined"
                  : typeof Reflect) &&
              "function" == typeof Reflect.decorate
            )
              c = Reflect.decorate(e, t, o, n);
            else
              for (var a = e.length - 1; a >= 0; a--)
                (i = e[a]) &&
                  (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
            return r > 3 && c && Object.defineProperty(t, o, c), c;
          };
        Object.defineProperty(i, "__esModule", { value: !0 });
        var a = cc._decorator,
          l = a.ccclass,
          u = a.property,
          s = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.id = 1), t;
            }
            return (
              r(t, e),
              (t.prototype.start = function () {
                switch (this.id) {
                  case 1:
                    this.node.active = window.AD.wuDianRate > 0;
                    break;
                  case 2:
                    this.node.active = !(window.AD.wuDianRate > 0);
                }
              }),
              (t.prototype.onEnable = function () {}),
              (t.prototype.onDisable = function () {}),
              (t.prototype.onDestroy = function () {}),
              c(
                [
                  u({
                    type: cc.Integer,
                    displayName: "type",
                    tooltip:
                      "1\u662f\u5f00\u5173\u6253\u5f00\u65f6\uff0c2\u662f\u5f00\u5173\u5173\u95ed\u65f6",
                  }),
                ],
                t.prototype,
                "id",
                void 0
              ),
              c([l], t)
            );
          })(cc.Component);
        (i.default = s), cc._RF.pop();
      },
      {},
    ],
    YYGGamesUtil: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "ab4799aAchPxIHNJsjtCl0s", "YYGGamesUtil"),
          (window.ADFlag = !1),
          (window.SOUNDFlag = !0),
          (window.BOOT = null),
          (window.YYGGamesUtil = new ((function () {
            function e() {
              return (
                (this.YYGforgames = []),
                (this.canScroll = !0),
                (this.BannerScrollid = null),
                (this.initLogFlag = !1),
                this
              );
            }
            return (
              (e.prototype.init = function (e, t, o, n) {
                var i = this;
                i.initSDK(
                  "https://h5gamessdk.yyggames.com/sdk/YYGGames.js",
                  function () {
                    var r = this;
                    YYGGames.init({
                      appName: e.appID,
                      channel: e.channel || 0,
                      config: {
                        gamedistributionId: e.gamedistributionId,
                        gamemonetizeId: e.gamemonetizeId,
                      },
                      complete: function () {
                        YYGGames.addEventListener(
                          YYGGames.events.beforeShowAd,
                          r,
                          o
                        ),
                          YYGGames.addEventListener(
                            YYGGames.events.afterShowAd,
                            r,
                            n
                          ),
                          YYGGames.addEventListener(
                            YYGGames.events.adDismissed,
                            r,
                            function () {
                              YYGGames.showTip(
                                "Pls watch the ad completely, so that you can claim your reward"
                              );
                            }
                          );
                        var e = YYGGames.forgames.slice(),
                          c =
                            e &&
                            e.map(function (e) {
                              return e.thumb;
                            });
                        cc.loader.load(c, function (o, n) {
                          o
                            ? console.log("error: ", o)
                            : (e.forEach(function (e) {
                                i.YYGforgames.push({
                                  id: e.id,
                                  url: n._map[e.thumb],
                                });
                              }),
                              t());
                        });
                      },
                    });
                  }
                );
              }),
              (e.prototype.initAd = function (e, t) {
                this.YYGforgames.length > 1 &&
                  (this.NodeHandle(e, this.YYGforgames[0], !1),
                  this.NodeHandle(t, this.YYGforgames[1], !1));
              }),
              (e.prototype.loading = function () {
                var e =
                    document.getElementById("GameDiv") ||
                    document.getElementById("Game"),
                  t = document.createElement("div");
                t.setAttribute("id", "loadDiv"),
                  t.setAttribute("class", "loadDiv"),
                  t.setAttribute(
                    "style",
                    "position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: #000000;opacity: 30% zindex: 10000;"
                  ),
                  e.appendChild(t);
              }),
              (e.prototype.initGameBanner = function (e) {
                this.removeBanner();
                for (var t = this, o = 0; o < 20; o++) {
                  var n = cc.find("view/content/item", e),
                    i = cc.find("view/content", e),
                    r = cc.instantiate(n);
                  r.x = 265 * o - 1307.493;
                  var c = cc.find("Mask", r);
                  t.NodeHandle(c, t.YYGforgames[o], !0), i.addChild(r);
                }
                this.BannerScrollid = window.setInterval(function () {
                  t.BannerScroll(i);
                }, 10);
              }),
              (e.prototype.removeBanner = function () {
                this.BannerScrollid &&
                  window.clearInterval(this.BannerScrollid);
              }),
              (e.prototype.bodyStyle = function (e, t) {
                var o = document.createElement("style");
                (o.innerText =
                  "#Game,#GameDiv {position: absolute;margin: 0;overflow: hidden;width: " +
                  e +
                  "px;height: " +
                  t +
                  "px;left: 50%;top: 50%;transform: translate(-50%, -50%);}"),
                  document.head.appendChild(o);
              }),
              (e.prototype.initSDK = function (e, t) {
                var o = document.createElement("script");
                o.setAttribute("type", "text/javascript"),
                  o.setAttribute("src", e),
                  document.getElementsByTagName("body")[0].appendChild(o),
                  t && (o.onload = t);
              }),
              (e.prototype.BannerScroll = function (e) {
                e &&
                  this.canScroll &&
                  (e.x <= 720 && e.x > -720 ? (e.x -= 1) : (e.x = 720));
              }),
              (e.prototype.gameLogo = function () {
                var e = this;
                cc.loader.loadRes("yad.png", function (t, o) {
                  if (t) console.log("err:", t);
                  else {
                    e.initLogFlag = !0;
                    var n = new cc.Node();
                    n.name = "gameLogo";
                    var i = n.addComponent(cc.Sprite);
                    cc.find("Canvas").parent.addChild(n),
                      (i.spriteFrame = new cc.SpriteFrame(o)),
                      n.setScale(1),
                      (n.x = 650),
                      (n.y = 1200),
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
              (e.prototype.logoMove = function (e, t, o) {
                console.error(o),
                  document
                    .getElementById("divImage")
                    .setAttribute(
                      "style",
                      "position:absolute; z-index:99999; width:" +
                        e +
                        "; top:" +
                        t +
                        "; right:" +
                        o +
                        ";"
                    );
              }),
              (e.prototype.NodeHandle = function (e, t, o) {
                var n = this,
                  i = new cc.Node();
                if ((e.addChild(i), o)) {
                  var r = i.addComponent(cc.Sprite);
                  (r.sizeMode = 0),
                    (r.spriteFrame = new cc.SpriteFrame(t.url)),
                    (i.scale = 1),
                    (i.width = 235),
                    (i.height = 235),
                    i.addComponent(cc.Button),
                    i.on("click", function () {
                      YYGGames.navigate("MainMenu", "MORE", t.id);
                    }),
                    i.on("mouseenter", function () {
                      (n.canScroll = !1), (e.scaleX = 1.1), (e.scaleY = 1.1);
                    }),
                    i.on("mouseleave", function () {
                      (n.canScroll = !0), (e.scaleX = 1), (e.scaleY = 1);
                    });
                } else {
                  var c = i.addComponent(cc.Sprite);
                  (c.sizeMode = 0),
                    (c.spriteFrame = new cc.SpriteFrame(t.url)),
                    (i.width = 145),
                    (i.height = 145),
                    i.addComponent(cc.Button),
                    i.on("click", function () {
                      YYGGames.navigate("MainMenu", "MORE", t.id);
                    });
                }
              }),
              e
            );
          })())()),
          (window.showMetheAuthor = function () {
            var e = document.createElement("iframe");
            (e.style.display = "none"),
              document.head.appendChild(e),
              e.contentWindow.console.log.apply(this, [
                "%c %c %c YYGGAMES %c%s %c %c ",
                "background: #fb8cb3",
                "background: #d44a52",
                "color: #ffffff; background: #871905",
                "color: #ffffff;background: #871905;",
                "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103"
                  .split(",")
                  .map(function (e) {
                    return String.fromCharCode(~~e);
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
    act_moveDownUp: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "c2ed2V+/yxC7YnWR/ZP8rA4", "act_moveDownUp"),
          cc.Class({
            extends: cc.Component,
            properties: {
              moveLength: 10,
              time: 0.3,
              fangXiang2: "\u7eb5\u5411",
              repeatB: !0,
            },
            onLoad: function () {
              this.repeatB
                ? "\u7eb5\u5411" == this.fangXiang2
                  ? this.node.runAction(
                      cc
                        .sequence(
                          cc.moveBy(this.time, cc.v2(0, this.moveLength)),
                          cc.moveBy(this.time, cc.v2(0, -this.moveLength))
                        )
                        .repeatForever()
                    )
                  : this.node.runAction(
                      cc
                        .sequence(
                          cc.moveBy(this.time, cc.v2(this.moveLength, 0)),
                          cc.moveBy(this.time, cc.v2(-this.moveLength, 0))
                        )
                        .repeatForever()
                    )
                : "\u7eb5\u5411" == this.fangXiang2
                ? this.node.runAction(
                    cc.moveBy(this.time, cc.v2(0, this.moveLength))
                  )
                : this.node.runAction(
                    cc.moveBy(this.time, cc.v2(this.moveLength, 0))
                  );
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    initAD: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "73d13KJgeBLDJkZiyQoB2Mg", "initAD"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
    tips: [
      function (e, t) {
        "use strict";
        cc._RF.push(t, "d72ddpK4NxGQZBIPqWkmpAw", "tips"),
          cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
              (this.node.scaleY = 0),
                cc.game.addPersistRootNode(this.node),
                cc.director.on("\u5f55\u5c4f\u5931\u8d25", this.reset, this);
            },
            reset: function () {
              cc.tween(this.node)
                .to(0.2, { scaleY: 1 })
                .delay(1.5)
                .to(0.2, { scaleY: 0 })
                .start();
            },
            start: function () {},
          }),
          cc._RF.pop();
      },
      {},
    ],
  },
  {},
  [
    "YYGGamesUtil",
    "AD",
    "AD_TouTiao",
    "AD_UC",
    "AnimationManager",
    "AnswerPromptUI",
    "AudioManager",
    "CheckPointChapter",
    "Checkpoint",
    "CheckpointItem",
    "CuoWuTip",
    "CustomListening",
    "DemiseUI",
    "Dialogue",
    "DuiTip",
    "FenXiang",
    "FollowDouYinView",
    "Game",
    "GameDataManger",
    "GameUi",
    "Global",
    "GoodsTuoDong",
    "GuideConfig",
    "GuideManager",
    "IsDouYin",
    "LabelUtils2",
    "Level",
    "Level1",
    "Level10",
    "Level11",
    "Level12",
    "Level13",
    "Level14",
    "Level15",
    "Level16",
    "Level17",
    "Level18",
    "Level19",
    "Level2",
    "Level20",
    "Level21",
    "Level22",
    "Level23",
    "Level24",
    "Level25",
    "Level26",
    "Level27",
    "Level28",
    "Level29",
    "Level3",
    "Level30",
    "Level31",
    "Level32",
    "Level33",
    "Level34",
    "Level35",
    "Level36",
    "Level37",
    "Level38",
    "Level39",
    "Level4",
    "Level40",
    "Level41",
    "Level42",
    "Level43",
    "Level44",
    "Level45",
    "Level46",
    "Level47",
    "Level48",
    "Level49",
    "Level5",
    "Level50",
    "Level51",
    "Level52",
    "Level53",
    "Level54",
    "Level6",
    "Level7",
    "Level8",
    "Level9",
    "LevelDataManager",
    "LevelTest",
    "LevelTextConfigManger",
    "LevelTextConfigModel",
    "LevelsPromptUi",
    "Load",
    "LoadPackages",
    "Menu",
    "OperationData",
    "PhysicalResponse",
    "Res",
    "SceneManager",
    "ServerSwitch",
    "Test",
    "TextaddTip",
    "TiShiFei",
    "TipManager",
    "Tool",
    "TuoDong",
    "VictoryUI",
    "VideoIconSwitch",
    "act_moveDownUp",
    "initAD",
    "tips",
  ]
);
