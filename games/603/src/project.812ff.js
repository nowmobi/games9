window.__require = function t(o, e, n) {
    function i(s, r) {
        if (!e[s]) {
            if (!o[s]) {
                var a = s.split("/");
                if (a = a[a.length - 1], !o[a]) {
                    var h = "function" == typeof __require && __require;
                    if (!r && h) return h(a, !0);
                    if (c) return c(a, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
            }
            var p = e[s] = {
                exports: {}
            };
            o[s][0].call(p.exports, function(t) {
                return i(o[s][1][t] || t)
            }, p, p.exports, t, o, e, n)
        }
        return e[s].exports
    }
    for (var c = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
    return i
}({
    AutoClose: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "ae2a03PEkBAkbWADGULlzKc", "AutoClose"), cc.Class({
            extends: cc.Component,
            properties: {
                animatinName: ""
            },
            start: function() {
                var t = this;
                this.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function(o) {
                    var e = o.animationState.animationData;
                    e && e.name == t.animatinName && (t.node.active = !1)
                })
            }
        }), cc._RF.pop()
    }, {}],
    BlockPool: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "2a711sawttKdJJzs3Y8eb5K", "BlockPool"), cc.Class({
            extends: cc.Component,
            properties: {
                blockPool: cc.NodePool,
                scorePool: t("ScorePool"),
                poppingPool: t("PoppingPool"),
                combieTips: t("CombieTips"),
                colorChanger: t("ColorChanger"),
                soundPlayer: t("SoundManager"),
                LastBlockTips: cc.Label,
                blockPrefab: cc.Prefab,
                colorSprite: {
                    default: [],
                    type: cc.SpriteFrame
                },
                propButton: {
                    default: [],
                    type: cc.Node
                },
                currentProp: 0,
                passRoundAnimation: dragonBones.ArmatureDisplay,
                isPlay: !1,
                targetScoreLabel: cc.Label,
                scoreLabel: cc.Label,
                levelLabel: cc.Label,
                propCount: {
                    default: [],
                    type: t("Number")
                },
                loseUI: cc.Node
            },
            creatBlock: function(t, o) {
                var e = void 0,
                    n = Math.floor(Math.random() * this.colorSprite.length);
                return (e = this.blockPool.size() > 0 ? this.blockPool.get() : cc.instantiate(this.blockPrefab)).getComponent("Block").init(n, this.colorSprite[n], t, o), e.parent = this.node, e.stopAllActions(), e.runAction(cc.moveTo(.5, cc.v2(64 * o - 288, 64 * t - 400))), e
            },
            recycleBlock: function(t) {
                this.blockPool.put(t)
            },
            start: function() {
                window.level = 0, window.score = 0, this.blockPool = new cc.NodePool("Block");
                for (var t = 0; t < 100; t++) {
                    var o = cc.instantiate(this.blockPrefab);
                    this.recycleBlock(o)
                }
                this.newRound(), this.node.on("BlockBeenTouch", function(t) {
                    this.currentProp ? (this.useProp(t.detail.row, t.detail.col), this.starsFalling(), this.starsMoveLeft()) : this.checkNearByHaveSameType(t.detail.type, t.detail.row, t.detail.col) && (this.popCount = 0, this.checkNearByToPop(t.detail.type, t.detail.row, t.detail.col), this.soundPlayer.playSound("Disappear"), this.popCount > 4 && this.combieTips.play(), this.starsFalling(), this.starsMoveLeft()), this.checkSelfIsOver()
                }, this), this.propCount[0].exchange(window.propCount.refresh), this.propCount[1].exchange(window.propCount.bomb), this.propCount[2].exchange(window.propCount.exchange)
                console.log("poposssspopo")
            },
            newRound: function() {
                this.pink, this.soundPlayer.playSound("NewRound"), window.level++, this.isPlay = !1, this.levelLabel.string = "Level:" + window.level, 1 == window.level ? window.targetScore = 1e3 : 2 == window.level ? window.targetScore = 2500 : window.targetScore += 2e3 + 20 * (window.level - 3), this.targetScoreLabel.string = window.targetScore, this.blockList = new Array(10);
                for (var t = 0; t < 10; t++) this.blockList[t] = new Array(10);
                for (var o = 0; o < 10; o++)
                    for (var e = 0; e < 10; e++) this.blockList[o][e] = this.creatBlock(e, o)
                console.log("dddddddddddd")
                if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                    sdk.showBanner();
                }
            },
            checkNearByHaveSameType: function(t, o, e) {
                return !!(e < this.blockList.length - 1 && o < this.blockList[e + 1].length && this.blockList[e + 1][o].getComponent("Block").isSameType(t)) || (!!(e > 0 && o < this.blockList[e - 1].length && this.blockList[e - 1][o].getComponent("Block").isSameType(t)) || (!!(o < this.blockList[e].length - 1 && this.blockList[e][o + 1].getComponent("Block").isSameType(t)) || !!(o > 0 && o < this.blockList[e].length && this.blockList[e][o - 1].getComponent("Block").isSameType(t))))
            },
            changeProp1: function() {
                window.propCount.refresh > 0 && (this.currentProp = 1)
				console.log("opppppppppppppppp")
            },
            changeProp2: function() {
                window.propCount.bomb > 0 && (this.currentProp = 2)
				console.log("ereds")
            },
            changeProp3: function() {
                window.propCount.exchange > 0 && (this.currentProp = 3)
				console.log("ereddds")
            },
            useProp: function(t, o) {
                if (1 == this.currentProp) {
                    if (window.propCount.refresh > 0) {
                        for (var e = 0; e < this.blockList.length; e++)
                            for (var n = 0; n < this.blockList[e].length; n++) {
                                var i = Math.floor(5 * Math.random());
                                this.blockList[e][n].getComponent("Block").refresh(i, this.colorSprite[i])
                            }
                        this.currentProp = 0, this.propCount[0].exchange(--window.propCount.refresh)
                    }
                } else 2 == this.currentProp ? window.propCount.bomb > 0 && (this.recycleBlock(this.blockList[o][t]), this.poppingPool.createPoppingEffect(this.blockList[o][t].position), o < this.blockList.length - 1 && t < this.blockList[o + 1].length && (this.recycleBlock(this.blockList[o + 1][t]), this.poppingPool.createPoppingEffect(this.blockList[o + 1][t].position)), o > 0 && t < this.blockList[o - 1].length && (this.recycleBlock(this.blockList[o - 1][t]), this.poppingPool.createPoppingEffect(this.blockList[o - 1][t].position)), t < this.blockList[o].length - 1 && (this.recycleBlock(this.blockList[o][t + 1]), this.poppingPool.createPoppingEffect(this.blockList[o][t + 1].position)), t > 0 && t < this.blockList[o].length && (this.recycleBlock(this.blockList[o][t - 1]), this.poppingPool.createPoppingEffect(this.blockList[o][t - 1].position)), o < this.blockList.length - 1 && t < this.blockList[o + 1].length - 1 && (this.recycleBlock(this.blockList[o + 1][t + 1]), this.poppingPool.createPoppingEffect(this.blockList[o + 1][t + 1].position)), o < this.blockList.length - 1 && t < this.blockList[o + 1].length + 1 && t > 0 && (this.recycleBlock(this.blockList[o + 1][t - 1]), this.poppingPool.createPoppingEffect(this.blockList[o + 1][t - 1].position)), o > 0 && t + 1 < this.blockList[o - 1].length && (this.recycleBlock(this.blockList[o - 1][t + 1]), this.poppingPool.createPoppingEffect(this.blockList[o - 1][t + 1].position)), o > 0 && t < this.blockList[o - 1].length && t > 0 && (this.recycleBlock(this.blockList[o - 1][t - 1]), this.poppingPool.createPoppingEffect(this.blockList[o - 1][t - 1].position)), this.currentProp = 0, this.propCount[1].exchange(--window.propCount.bomb)) : window.propCount.exchange > 0 && (this.currentProp = 0, this.colorChanger.awake(this.blockList[o][t].getComponent("Block"), this.colorSprite), this.propCount[2].exchange(--window.propCount.exchange))
            },
            checkNearByToPop: function(t, o, e) {
                this.scorePool.createScoreEffect(cc.v2(this.blockList[e][o].x, this.blockList[e][o].y), 10 * this.popCount + 5), this.poppingPool.createPoppingEffect(cc.v2(this.blockList[e][o].x, this.blockList[e][o].y)), this.blockList[e][o].getComponent("Block").pop(this.popCount++), !this.isPlay && window.score > window.targetScore && (this.passRoundAnimation.node.active = !0, this.passRoundAnimation.playAnimation("GuoGuanTeXiao", 1), this.isPlay = !0), this.scoreLabel.string = window.score, this.recycleBlock(this.blockList[e][o]), e < this.blockList.length - 1 && o < this.blockList[e + 1].length && this.blockList[e + 1][o].getComponent("Block").isSameType(t) && (this.blockList[e + 1][o].getComponent("Block").getIsGone() || this.checkNearByToPop(t, o, e + 1)), e > 0 && o < this.blockList[e - 1].length && this.blockList[e - 1][o].getComponent("Block").isSameType(t) && (this.blockList[e - 1][o].getComponent("Block").getIsGone() || this.checkNearByToPop(t, o, e - 1)), o < this.blockList[e].length - 1 && this.blockList[e][o + 1].getComponent("Block").isSameType(t) && (this.blockList[e][o + 1].getComponent("Block").getIsGone() || this.checkNearByToPop(t, o + 1, e)), o < this.blockList[e].length && o > 0 && this.blockList[e][o - 1].getComponent("Block").isSameType(t) && (this.blockList[e][o - 1].getComponent("Block").getIsGone() || this.checkNearByToPop(t, o - 1, e))
            },
            starsFalling: function() {
                for (var t = 0; t < this.blockList.length; t++)
                    for (var o = 0, e = 0; e < this.blockList[t].length; e++) this.blockList[t][e].getComponent("Block").getIsGone() ? (this.blockList[t].splice(e, 1), e--, o++) : o > 0 && this.blockList[t][e].getComponent("Block").fall(o)
            },
            starsMoveLeft: function() {
                for (var t = !1, o = 0, e = 0; e < this.blockList.length; e++) 0 == this.blockList[e].length && (this.blockList.splice(e, 1), t || (t = !0, o = e), e--, 0);
                if (t)
                    for (var n = o; n < this.blockList.length; n++)
                        for (var i = 0; i < this.blockList[n].length; i++) this.blockList[n][i].getComponent("Block").moveLeft(n)
            },
            checkSelfIsOver: function() {
                for (var t = 0; t < this.blockList.length; t++)
                    for (var o = 0; o < this.blockList[t].length; o++) {
                        var e = this.blockList[t][o].getComponent("Block").getBlockInfo();
                        if (this.checkNearByHaveSameType(e.type, o, t)) return void console.log("it`s Not Over")
                    }
                var n;
                n = this.node.children.length, console.log("RoundOver" + n);
                var i = 0;
                n < 10 ? (i = 2e3 - n * n * 20, console.log("Rewords:" + i), window.score += i, this.scoreLabel.string = window.score) : i = 0, this.LastBlockTips.string = "\u5269\u4f59:" + n + "\n\n\u5956\u52b1:" + i, this.LastBlockTips.node.active = !0, this.scheduleOnce(function() {
                    this.LastBlockTips.node.active = !1
                }, 2);
                for (var c = 0; c < this.node.children.length; c++) this.recycleBlock(this.node.children[c]), c--;
                this.scheduleOnce(function() {
                    window.score >= window.targetScore ? (this.newRound(), window.level) : this.loseUI.active = !0
                }, 2)
            }
        }), cc._RF.pop()
    }, {
        ColorChanger: "ColorChanger",
        CombieTips: "CombieTips",
        Number: "Number",
        PoppingPool: "PoppingPool",
        ScorePool: "ScorePool",
        SoundManager: "SoundManager"
    }],
    Block: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "9abdcApbehFjK6oXU/8tbd2", "Block"), cc.Class({
            extends: cc.Component,
            properties: {
                type: 0,
                row: 0,
                col: 0,
                plist: cc.ParticleSystem,
                isGone: !1
            },
            init: function(t, o, e, n) {
                this.node.off("touchend"), this.type = t, this.row = e, this.col = n, this.isGone = !1, this.getComponent(cc.Sprite).spriteFrame = o, this.node.on("touchend", function() {
                    var t = new cc.Event.EventCustom("BlockBeenTouch", !0),
                        o = {
                            row: this.row,
                            col: this.col,
                            type: this.type
                        };
                    t.detail = o, this.node.dispatchEvent(t)
                }, this)
            },
            pop: function(t) {
                window.score += 10 * t + 5
            },
            unuse: function() {
                this.isGone = !0
            },
            fall: function(t) {
                0 != t && (this.row -= t, this.node.runAction(cc.moveBy(.1, cc.v2(0, -64 * t))))
            },
            isSameType: function(t) {
                return t == this.type
            },
            getIsGone: function() {
                return this.isGone
            },
            getType: function() {
                return this.type
            },
            getBlockInfo: function() {
                return {
                    row: this.row,
                    col: this.col,
                    type: this.type
                }
				
            },
            moveLeft: function(t) {
                t != this.col && (this.col = t, this.node.runAction(cc.moveTo(.1, cc.v2(64 * t - 288, this.node.y))))
            },
            refresh: function(t, o) {
                this.type = t, this.getComponent(cc.Sprite).spriteFrame = o
				console.log("eressssss")
            }
        }), cc._RF.pop()
    }, {}],
    BuyButton: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "bcd16wvu1VOhYZtFQx91P0B", "BuyButton"), cc.Class({
            extends: cc.Component,
            properties: {
                ID: 0
            },
            start: function() {
                this.node.on("touchend", function() {
                    var t = new cc.Event.EventCustom("GoodsBeenTouch", !0);
                    t.detail = this.ID, this.node.dispatchEvent(t)
                }, this)
            }
        }), cc._RF.pop()
    }, {}],
    ChangeScene: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "ce716qTzEFGvJfSE8oo+Z01", "ChangeScene"), cc.Class({
            extends: cc.Component,
            properties: {
                sceneStr: ""
            },
            start: function() {
                this.node.on("touchend", function() {
                    cc.director.loadScene(this.sceneStr)
                }, this)
            }
        }), cc._RF.pop()
		console.log("azeeeeeeeeeeeeeeeeeeeeee")
    }, {}],
    CloseButton: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "1295bNLRyhJ+Ijk3HNiK9LE", "CloseButton"), cc.Class({
            extends: cc.Component,
            properties: {
                target: cc.Node
            },
            start: function() {
                this.node.on("touchend", function() {
                    this.target.active = !1
                }, this)
				console.log("azzzzzzzzzzzzzzzzz")
            }
        }), cc._RF.pop()
		console.log("jhjhjhj")
    }, {}],
    ColorChanger: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "9170blhR55AXrlqWexAupIb", "ColorChanger"), cc.Class({
            extends: cc.Component,
            properties: {
                target: null,
                colorList: null,
                redBlock: cc.Node,
                yellowBlock: cc.Node,
                blueBlock: cc.Node,
                greenBlock: cc.Node,
                purpleBlock: cc.Node
            },
            start: function() {
                this.redBlock.on("touchstart", function() {
                    this.target.refresh(0, this.colorList[0]), this.node.active = !1
                }, this), this.yellowBlock.on("touchstart", function() {
                    this.target.refresh(1, this.colorList[1]), this.node.active = !1
                }, this), this.blueBlock.on("touchstart", function() {
                    this.target.refresh(2, this.colorList[2]), this.node.active = !1
                }, this), this.greenBlock.on("touchstart", function() {
                    this.target.refresh(3, this.colorList[3]), this.node.active = !1
                }, this), this.purpleBlock.on("touchstart", function() {
                    this.target.refresh(4, this.colorList[4]), this.node.active = !1
                }, this)
            },
            awake: function(t, o) {
                this.target = t, this.colorList = o, this.node.active = !0
            }
        }), cc._RF.pop()
    }, {}],
    CombieTips: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "29778APMs5NRarJQjVzh2Ww", "CombieTips"), cc.Class({
            extends: cc.Component,
            properties: {
                soundPlayer: t("SoundManager")
            },
            start: function() {
                var t = this;
                this.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function(o) {
                    var e = o.animationState.animationData;
                    e && "Ku" == e.name && (t.node.active = !1), e && "WanMei" == e.name && (t.node.active = !1), e && "PiaoLiang" == e.name && (t.node.active = !1)
                })
            },
            play: function() {
                var t = Math.floor(3 * Math.random());
                switch (this.node.active = !0, t) {
                    case 0:
                        this.getComponent(dragonBones.ArmatureDisplay).playAnimation("Ku", 1), this.soundPlayer.playSound("Cool");
                        break;
                    case 1:
                        this.getComponent(dragonBones.ArmatureDisplay).playAnimation("WanMei", 1), this.soundPlayer.playSound("Excellent");
                        break;
                    case 2:
                        this.getComponent(dragonBones.ArmatureDisplay).playAnimation("PiaoLiang", 1), this.soundPlayer.playSound("Good")
                }
            }
        }), cc._RF.pop()
    }, {
        SoundManager: "SoundManager"
    }],
    Common: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "201d48NtyFNhIJ9z1KsOLdU", "Common"), window.score = 0, window.targetScore = 0, window.level = 0, window.propCount = {
            bomb: 10,
            refresh: 10,
            exchange: 10
        }, window.shareCondition = [!1, !1, !1, !1], window.shareCount = 10, window.soundOn = !0, window.diamond = 1e3, cc._RF.pop()
    }, {}],
    DiamondSpawn: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "54fe2xEjJ5AK790H+cipzDm", "DiamondSpawn"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.spawn()
            },
            spawn: function() {
                this.getComponent(cc.Label).string = window.diamond
            }
        }), cc._RF.pop()
    }, {}],
    LoseUI: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "37b614g4OVD2Zxw0uKDNedG", "LoseUI"), cc.Class({
            extends: cc.Component,
            properties: {
                scoreLabel: cc.Label,
                targetLabelNode: cc.Node,
                hideBG: cc.Node,
                hideScore: cc.Node
            },
            start: function() {},
            onEnable: function() {
                this.scoreLabel.string = window.score, this.targetLabelNode.y = 14, this.hideBG.active = !1, this.hideScore.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    Number: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "e781cwBevJAIY3/n2ou0zQz", "Number"), cc.Class({
            extends: cc.Component,
            properties: {
                numList: {
                    default: [],
                    type: cc.SpriteFrame
                },
                hundreds: cc.Sprite,
                decade: cc.Sprite,
                unit: cc.Sprite
            },
            exchange: function(t) {
                var o = parseInt(t / 100),
                    e = parseInt(t % 100 / 10),
                    n = parseInt(t % 10);
                0 == o ? (this.hundreds.node.active = !1, this.decade.node.active = 0 != e) : this.hundreds.node.active = !0, this.hundreds.spriteFrame = this.numList[o], this.decade.spriteFrame = this.numList[e], this.unit.spriteFrame = this.numList[n]
            }
        }), cc._RF.pop()
    }, {}],
    OpenButton: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "bb799qLNFpB5KaOY5eIsT4l", "OpenButton"), cc.Class({
            extends: cc.Component,
            properties: {
                target: cc.Node
            },
            start: function() {
                this.node.on("touchend", function() {
                    this.target.active = !0
                }, this)
				console.log("eeeeeeeeeeeeeeeeeeeeeeeeeee")
            }
        }), cc._RF.pop()
		console.log("zebbbbbbbbbb")
    }, {}],
    PoppingPool: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "12ed20yP5RKW7O1M2dhG754", "PoppingPool"), cc.Class({
            extends: cc.Component,
            properties: {
                poppingPool: cc.NodePool,
                poppingPrefab: cc.Prefab
            },
            createPoppingEffect: function(t) {
                var o = void 0;
                (o = this.poppingPool.size() > 0 ? this.poppingPool.get() : cc.instantiate(this.poppingPrefab)).parent = this.node, o.position = t
            },
            recycleEffict: function(t) {
                this.poppingPool.put(t)
            },
            start: function() {
                this.poppingPool = new cc.NodePool;
                for (var t = 0; t < 30; t++) {
                    var o = cc.instantiate(this.poppingPrefab);
                    this.recycleEffict(o)
                }
            }
        }), cc._RF.pop()
    }, {}],
    ScoreEffect: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "14b731mmQ9HwbSonD+i04hE", "ScoreEffect"), cc.Class({
            extends: cc.Component,
            play: function(t, o) {
                this.getComponent(cc.Label).string = "+" + o;
                var e = cc.moveTo(1, t);
                e.easing(cc.easeIn(3));
                var n = cc.callFunc(function() {
                        var t = new cc.Event.EventCustom("ScoreEffectPlayOver", !0);
                        t.detail = this.node, this.node.dispatchEvent(t)
                    }, this),
                    i = cc.sequence(e, n);
                this.node.runAction(i)
            }
        }), cc._RF.pop()
    }, {}],
    ScorePool: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "cc4f1aMeQNLd6c3++Gnv6d5", "ScorePool"), cc.Class({
            extends: cc.Component,
            properties: {
                scorePool: cc.NodePool,
                scorePrefab: cc.Prefab,
                targetNode: cc.Node
            },
            createScoreEffect: function(t, o) {
                var e = void 0;
                (e = this.scorePool.size() > 0 ? this.scorePool.get() : cc.instantiate(this.scorePrefab)).parent = this.node, e.position = t, e.getComponent("ScoreEffect").play(this.targetNode.position, o)
            },
            recycleEffict: function(t) {
                this.scorePool.put(t)
            },
            start: function() {
                this.scorePool = new cc.NodePool("ScoreEffect");
                for (var t = 0; t < 30; t++) {
                    var o = cc.instantiate(this.scorePrefab);
                    this.recycleEffict(o)
                }
                this.node.on("ScoreEffectPlayOver", function(t) {
                    this.recycleEffict(t.detail), console.log("reserve massage \u201cScoreEffectPlayOver\u201d")
                }, this)
            }
        }), cc._RF.pop()
    }, {}],
    ShareFriendItem: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "ea9ecNu7BxIH7Gs2ItjKZuj", "ShareFriendItem"), cc.Class({
            extends: cc.Component,
            properties: {
                maxCount: 0,
                buttonList: {
                    default: [],
                    type: cc.SpriteFrame
                },
                rewordsCount: 0,
                countLabel: cc.Label,
                buttonNode: cc.Sprite,
                index: 0
            },
            init: function(t) {
                this.buttonList = t
            },
            onEnable: function() {
                this.buttonNode.node.off("touchend"), window.shareCount < this.maxCount ? (this.countLabel.string = window.shareCount + "/" + this.maxCount, this.buttonNode.spriteFrame = this.buttonList[0]) : (this.countLabel.string = this.maxCount + "/" + this.maxCount, window.shareCondition[this.index] ? this.buttonNode.spriteFrame = this.buttonList[2] : (this.buttonNode.spriteFrame = this.buttonList[1], this.buttonNode.node.on("touchend", function() {
                    var t = new cc.Event.EventCustom("AcceptShareRewords", !0);
                    t.detail = this.rewordsCount, this.node.dispatchEvent(t), this.buttonNode.spriteFrame = this.buttonList[2], this.buttonNode.node.off("touchend"), window.shareCondition[this.index] = !0
                }, this)))
            }
        }), cc._RF.pop()
    }, {}],
    ShareFriend: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "d1065HiOjFJXrOn4axMy18x", "ShareFriend"), cc.Class({
            extends: cc.Component,
            properties: {
                imageList: {
                    default: [],
                    type: cc.SpriteFrame
                },
                item: {
                    default: [],
                    type: t("ShareFriendItem")
                },
                diamondCount: t("DiamondSpawn")
            },
            onLoad: function() {
                var t = this;
                this.item.forEach(function(o) {
                    o.init(t.imageList)
                }), this.diamondCount.spawn()
                console.log("popopopo")
            },
            start: function() {
                this.node.on("AcceptShareRewords", function(t) {
                    window.diamond += t.detail, this.diamondCount.spawn()
                }, this)
                console.log("rerere")
            }
        }), cc._RF.pop()
    }, {
        DiamondSpawn: "DiamondSpawn",
        ShareFriendItem: "ShareFriendItem"
    }],
    ShopUI: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "3a199dG5KhBVagP2+8NO26C", "ShopUI"), cc.Class({
            extends: cc.Component,
            properties: {
                number: {
                    default: [],
                    type: t("Number")
                },
                diamondCound: t("DiamondSpawn")
            },
            start: function() {
                this.number[0].exchange(window.propCount.refresh), this.number[1].exchange(window.propCount.bomb), this.number[2].exchange(window.propCount.exchange), this.node.on("GoodsBeenTouch", function(t) {
                    var o = t.detail;
                    switch (o) {
                        case 0:
                            window.diamond >= 10 && (window.diamond -= 10, this.number[o].exchange(++window.propCount.refresh));
                            break;
                        case 1:
                            window.diamond >= 10 && (window.diamond -= 10, this.number[o].exchange(++window.propCount.bomb));
                            break;
                        case 2:
                            window.diamond >= 10 && (window.diamond -= 10, this.number[o].exchange(++window.propCount.exchange))
                    }
                    this.diamondCound.spawn()
                }, this)
            }
        }), cc._RF.pop()
    }, {
        DiamondSpawn: "DiamondSpawn",
        Number: "Number"
    }],
    SoundConsole: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "e3550B5cmJKL4y8RArfXZQe", "SoundConsole"), cc.Class({
            extends: cc.Component,
            properties: {
                soundOnImg: cc.SpriteFrame,
                soundOffImg: cc.SpriteFrame,
                BGmusic: cc.AudioClip
            },
            start: function() {
                window.initSound || (window.initSound = !0, cc.audioEngine.play(this.BGmusic, !0, .5)), window.soundOn ? this.getComponent(cc.Sprite).spriteFrame = this.soundOnImg : this.getComponent(cc.Sprite).spriteFrame = this.soundOffImg, this.node.on("touchstart", function() {
                    window.soundOn = !window.soundOn, window.soundOn ? (this.getComponent(cc.Sprite).spriteFrame = this.soundOnImg, cc.audioEngine.setVolume(0, .5)) : (this.getComponent(cc.Sprite).spriteFrame = this.soundOffImg, cc.audioEngine.setVolume(0, 0))
                }, this)
                console.log("init")

                window.SDK_OPTIONS = {
                    gameId: "uzhi9v6u89iucii6zm1ri8w8hf0ois0e",
                    onEvent: function(a) {
                        switch (a.name) {
                            case "SDK_GAME_PAUSE":
                                // pause game logic / mute audio
                                break;
                            case "SDK_GAME_START":
                                // advertisement done, resume game logic and unmute audio
                                break;
                            case "SDK_READY":
                                // when sdk is ready
                                break;
                        }
                    }
                };
                (function(a, b, c) {
                    var d = a.getElementsByTagName(b)[0];
                    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
                })(document, "script", "gamemonetize-sdk");

            }
        }), cc._RF.pop()
    }, {}],
    SoundManager: [function(t, o, e) {
        "use strict";
        cc._RF.push(o, "91c1aArjD5N3oG3LoLAE3Q9", "SoundManager"), cc.Class({
            extends: cc.Component,
            properties: {
                soundList: {
                    default: [],
                    type: cc.AudioSource
                }
            },
            start: function() {
                this.soundList.forEach(function(t) {
                    t.mute = !window.soundOn
					console.log("jhjhjhj")
                })
                console.log("loaddd")
                if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                    sdk.showBanner();
                }
            },
            playSound: function(t) {
                var o = 0;
                switch (t) {
                    case "NewRound":
                        o = 0;
                        break;
                    case "CreateBlock":
                        o = 1;
                        break;
                    case "Disappear":
                        o = 2;
                        break;
                    case "Cool":
                        o = 3;
                        break;
                    case "Good":
                        o = 4;
                        break;
                    case "Excellent":
                        o = 5
                }
                this.soundList[o].play()
				
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["AutoClose", "Block", "BlockPool", "BuyButton", "ChangeScene", "CloseButton", "ColorChanger", "CombieTips", "Common", "DiamondSpawn", "LoseUI", "Number", "OpenButton", "PoppingPool", "ScoreEffect", "ScorePool", "ShareFriend", "ShareFriendItem", "ShopUI", "SoundConsole", "SoundManager"]);