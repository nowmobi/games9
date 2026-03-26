var dataCnf = {
    appName: "Mahjong Solitaire Game",
    appID: "Mahjong-Solitaire-Game"
};
const stageWidth = 720
    , stageHeight = 1280
    , WebName = "puzzlegame";
var widthNUM, heightNUM;
const Adwidth = widthNUM = 150
    , Adheight = heightNUM = 150;
var BannerScrollid, _forgames, index = 0, canScroll = !0, MaskArray = [], btnArray = [], barArray = [], isSpeacial = !1, WebIndex = 0;
WebIndex = 5,
    window.YYGplatform = (() => {
        const e = (e, t) => {
            if (typeof YYGGames !== 'undefined') {
                t();
                return;
            }
            var a = document.createElement("script");
            a.setAttribute("type", "text/javascript"),
                a.setAttribute("src", e),
                document.getElementsByTagName("body")[0].appendChild(a),
                t && (a.onload = t)

        }
            , t = e => {
                document.getElementsByTagName("title")[0].innerText = e
            }
            , a = () => {
                const e = document.createElement("style");
                e.innerText = "body {overflow: hidden;} #Game {position: absolute;margin: 0;overflow: hidden;width: 720 px; height: 720px;left: 50%;top: 50%;transform: translate(-50%, -50%);}#AdTip {overflow: hidden;word-break: break-all;overflow-wrap: break-word;font-family: Arial;padding: 10px;min-height: 20px;color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.7);font-size: 18px;width: 90%;opacity: 1;-webkit-transform: 0.5s ease-in, opacity 0.5s ease-in;}.divImage {position: absolute;z-index: 99999;}",
                    document.head.appendChild(e)
            }
            , n = e => {
                let t = document.getElementById("GameDiv") || document.getElementById("Game");
                const a = document.createElement("div");
                a.setAttribute("id", e),
                    a.setAttribute("class", "divImage"),
                    a.setAttribute("onclick", '(()=>{YYGGames.navigate("Loading", "LOGO");})()'),
                    a.setAttribute("style", "width:15%; top: 1%;right: 1%;");
                const n = document.createElement("img");
                n.setAttribute("style", "width:100%;height: 100%;"),
                    n.setAttribute("id", e + "Image"),
                    n.src = "https://h5gamessdk.yyggames.com/sdk/res/puzzle2.png",
                    a.appendChild(n),
                    t.appendChild(a)
            }
            , d = e => {
                const t = new cc.Node;
                t.name = "GameBox1",
                    t.width = Adwidth + 15,
                    t.height = Adheight + 15,
                    t.anchorX = t.anchorY = .5,
                    t.x = 300,
                    t.y = -800,
                    t.scale = 1.5,
                    window.GameBox1 = t;
                const a = new cc.Node;
                a.name = "item",
                    a.width = Adwidth + 15,
                    a.height = Adheight + 15,
                    a.anchorX = a.anchorY = .5,
                    a.x = 0,
                    a.y = 0;
                const n = a.addComponent(cc.Sprite);
                n.sizeMode = 0,
                    n.spriteFrame = window.di;
                const d = new cc.Node;
                d.x = 0,
                    d.y = 0,
                    d.width = Adwidth,
                    d.height = Adheight,
                    d.name = "Mask";
                const i = d.addComponent(cc.Mask);
                i.type = cc.Mask.Type.IMAGE_STENCIL,
                    i.spriteFrame = window.di,
                    i.inverted = !1,
                    a.addChild(d),
                    t.addChild(a);
                const o = new cc.Node;
                o.name = "GameBox2",
                    o.width = Adwidth + 15,
                    o.height = Adheight + 15,
                    o.anchorX = o.anchorY = .5,
                    o.x = -300,
                    o.y = -800,
                    o.scale = 1.5;
                const c = new cc.Node;
                c.name = "item2",
                    c.width = Adwidth + 15,
                    c.height = Adheight + 15,
                    c.anchorX = c.anchorY = .5,
                    c.x = 0,
                    c.y = 0;
                const r = c.addComponent(cc.Sprite);
                r.sizeMode = 0,
                    r.spriteFrame = window.di;
                const s = new cc.Node;
                s.x = 0,
                    s.y = 0,
                    s.width = Adwidth,
                    s.height = Adheight,
                    s.name = "Mask2";
                const h = s.addComponent(cc.Mask);
                h.type = cc.Mask.Type.IMAGE_STENCIL,
                    h.spriteFrame = window.di,
                    h.inverted = !1,
                    c.addChild(s),
                    o.addChild(c);
                const m = new cc.Node;
                return m.addChild(t),
                    m.addChild(o),
                    YYGplatform.GameBox = m,
                    e.addChild(m),
                    console.log("AdNode: ", [t, o]),
                    m
            }
            , i = (e, t) => {
                let a = [];
                for (let e = 0; e < 12; e++)
                    a.push(e);
                const n = a[Math.floor(12 * Math.random())];
                a.splice(n, 1);
                const d = cc.find("item/Mask", e)
                    , i = new cc.Node;
                d.addChild(i);
                const o = i.addComponent(cc.Sprite);
                o.sizeMode = 0,
                    o.spriteFrame = new cc.SpriteFrame(barArray[n]),
                    i.width = Adwidth,
                    i.height = Adheight,
                    i.addComponent(cc.Button),
                    i.on("click", function () {
                        YYGGames.navigate("MainMenu", "MORE", _forgames[n].id)
                    });
                const c = a[Math.floor(11 * Math.random())]
                    , r = cc.find("item2/Mask2", t)
                    , s = new cc.Node;
                r.addChild(s);
                const h = s.addComponent(cc.Sprite);
                h.sizeMode = 0,
                    h.spriteFrame = new cc.SpriteFrame(barArray[c]),
                    s.width = Adwidth,
                    s.height = Adheight,
                    s.addComponent(cc.Button),
                    s.on("click", function () {
                        YYGGames.navigate("MainMenu", "MORE", _forgames[c].id)
                    })
            }
            , o = e => {
                const t = new cc.Node;
                t.name = "GameBanner",
                    t.width = 1405,
                    t.height = 185,
                    t.anchorX = t.anchorY = 0,
                    t.x = -702.5,
                    t.y = -630;
                const a = new cc.Node;
                a.name = "New ScrollView",
                    a.width = 1405,
                    a.height = 185,
                    a.anchorX = a.anchorY = 0,
                    a.x = a.y = 0;
                const n = a.addComponent(cc.Sprite);
                n.sizeMode = 0,
                    n.spriteFrame = window.di2;
                const d = new cc.Node;
                d.name = "view",
                    d.width = 1405,
                    d.height = 185,
                    d.anchorX = d.anchorY = 0,
                    d.x = d.y = 0;
                const i = new cc.Node;
                i.name = "content",
                    i.width = 1405,
                    i.height = 185,
                    i.anchorX = i.anchorY = 0,
                    i.x = i.y = 0;
                const o = new cc.Node;
                o.name = "item",
                    o.anchorX = o.anchorY = 0,
                    o.x = 10,
                    o.y = 20,
                    o.width = Adwidth,
                    o.height = Adheight;
                const c = new cc.Node;
                c.x = 72.5,
                    c.y = 72.5,
                    c.width = Adwidth,
                    c.height = Adheight,
                    c.name = "Mask",
                    e.addChild(t),
                    t.addChild(a),
                    a.addChild(d),
                    d.addChild(i),
                    i.addChild(o),
                    o.addChild(c);
                const r = c.addComponent(cc.Mask);
                return r.type = cc.Mask.Type.IMAGE_STENCIL,
                    r.spriteFrame = window.di,
                    r.inverted = !1,
                    YYGplatform.GameBanner = t,
                    t
            }
            , c = e => {
                e && canScroll && (e.x > -(e.width - 360 - 50) ? e.x -= .5 : e.x = 0)
            }
            , r = n => {
                t(dataCnf.appName),
                    a(),
                    e("https://h5gamessdk.yyggames.com/sdk/YYGGames.js", function () {
                        YYGGames.init({
                            appName: dataCnf.appID,
                            channel: WebIndex,
                            config: {
                                gamedistributionId: dataCnf.gamedistributionId,
                                gamemonetizeId: dataCnf.gamemonetizeId
                            },
                            complete: () => {
                                window.showMetheAuthor = function () {
                                    const e = document.createElement("iframe");
                                    e.style.display = "none",
                                        document.head.appendChild(e),
                                        e.contentWindow.console.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", "116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103".split(",").map(e => String.fromCharCode(~~e)).join(""), "background: #d44a52", "background: #fb8cb3"])
                                }
                                    ,
                                    document.getElementById("AdTip") && (YYGGames.showTip = function (e, t) {
                                        t = isNaN(t) ? 2e3 : t,
                                            document.getElementById("AdTip").innerHTML = e,
                                            document.getElementById("AdTip").style.display = "",
                                            setTimeout(function () {
                                                document.getElementById("AdTip").style.display = "none"
                                            }, t)
                                    }
                                    );
                                var e = location.href;
                                YYGGames.moreGameEnabled && -1 == e.indexOf("gamedistribution.c") && -1 == e.indexOf("gamemonetize.c") ? s(n) : (isSpeacial = !0,
                                    n())
                            }
                        })
                    })
            }
            , s = e => {
                isSpeacial = !1,
                    n(WebName);
                const t = YYGGames.forgames.slice();
                if (console.log("forgames", t),
                    t.length > 1) {
                    t.sort(() => .5 - Math.random()),
                        _forgames = t;
                    const a = () => {
                        cc.loader.load(t[index].thumb, (n, d) => {
                            n || (barArray.push(d),
                                ++index < t.length ? a() : e && e())
                        }
                        )
                    }
                        ;
                    a()
                }
            }
            ;
        return {
            init: e => {
                cc.loader.load("https://h5gamessdk.yyggames.com/sdk/res/di1.png", (t, a) => {
                    t || cc.loader.load("https://h5gamessdk.yyggames.com/sdk/res/di2.png", (t, n) => {
                        if (!t) {
                            window.di = new cc.SpriteFrame(a),
                                window.di2 = new cc.SpriteFrame(n);
                            var d = new XMLHttpRequest;
                            d.open("get", "cnf.json"),
                                d.send(null),
                                d.onload = function () {
                                    if (200 == d.status) {
                                        var t = JSON.parse(d.responseText);
                                        console.info("%c cnf: ", "background:#a8edcc", t),
                                            dataCnf = t
                                    }
                                    r(e)
                                }
                        }
                    }
                    )
                }
                )
            }
            ,
            initGameBanner: e => {
                const t = o(e);
                if (window.Banner = t,
                    t.scale = 1.5,
                    t.y = -960,
                    isSpeacial)
                    t.active = 0;
                else {
                    var a = cc.find("New ScrollView", t);
                    window.GameBanner = a,
                        btnArray = [];
                    for (let e = 0; e < 12; e++) {
                        var n = cc.find("view/content/item", a)
                            , d = cc.find("view/content", a)
                            , i = cc.instantiate(n);
                        i.x = 10 + 170 * e;
                        var r = cc.find("Mask", i);
                        const t = new cc.Node
                            , o = t.addComponent(cc.Sprite);
                        o.sizeMode = 0,
                            o.spriteFrame = new cc.SpriteFrame(barArray[e]),
                            t.width = Adwidth,
                            t.height = Adheight,
                            r.addChild(t),
                            btnArray.push(t),
                            MaskArray.push(r),
                            d.addChild(i)
                    }
                    console.log("btnArray: ", btnArray);
                    for (let e = 0; e < btnArray.length; e++) {
                        btnArray[e].addComponent(cc.Button),
                            btnArray[e].on("click", function () {
                                console.log("btnArray[i]", e),
                                    YYGGames.navigate("MainMenu", "MORE", _forgames[e].id)
                            }),
                            btnArray[e].on("mouseenter", function () {
                                0 != MaskArray.length && (canScroll = !1,
                                    MaskArray[e].scaleX = 1.1,
                                    MaskArray[e].scaleY = 1.1)
                            }),
                            btnArray[e].on("mouseleave", function () {
                                0 != MaskArray.length && (canScroll = !0,
                                    MaskArray[e].scaleX = 1,
                                    MaskArray[e].scaleY = 1)
                            });
                        const t = document.getElementById("GameCanvas");
                        t && t.addEventListener("mouseout", function (t) {
                            0 != MaskArray.length && (canScroll = !0,
                                MaskArray[e].scaleX = 1,
                                MaskArray[e].scaleY = 1)
                        })
                    }
                    BannerScrollid = setInterval(() => {
                        c(d)
                    }
                        , 1)
                }
            }
            ,
            initGameBox: e => {
                const t = d(e);
                console.log("node: ", e),
                    isSpeacial ? t.active = 0 : i(t.getChildByName("GameBox1"), t.getChildByName("GameBox2"))
            }
            ,
            removeBanner: () => {
                MaskArray = [],
                    clearInterval(BannerScrollid)
            }
            ,
            showInterstitial: e => {
                YYGGames.showInterstitial(e)
            }
            ,
            showReward: e => {
                if (!YYGGames.rewardReady)
                    return YYGGames.showTip("No Available Video"),
                        void (e.rewardDismissed && e.rewardDismissed());
                YYGGames.showReward(e)
            }
        }
    }
    )();
