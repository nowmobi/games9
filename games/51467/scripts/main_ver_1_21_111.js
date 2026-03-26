function ads(c, scene) {
    "undefined" == typeof sdk || "undefined" === sdk.showBanner || sdk.showBanner();
    c.scene.start(scene); 
    
    if (scene == 'r')   
        _data.cur_level < _data.total_level ? (_data.cur_level++, c.scene.start("game")) : c.scene.start("level")
}

var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var e = function() {};
    e.prototype = a;
    return new e
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
        a: !0
    },
    e = {};
    try {
        return e.__proto__ = a, e.a
    } catch (d) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, e) {
    a.__proto__ = e;
    if (a.__proto__ !== e) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, e) {
    a.prototype = $jscomp.objectCreate(e.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var d = $jscomp.setPrototypeOf;
        d(a, e)
    } else
        for (d in e)
            if ("prototype" != d)
                if (Object.defineProperties) {
                    var b = Object.getOwnPropertyDescriptor(e, d);
                    b && Object.defineProperty(a, d, b)
            } else a[d] = e[d];
    a.superClass_ = e.prototype
};


var Boot = function() {
    return Phaser.Scene.call(this, "boot") || this
};
$jscomp.inherits(Boot, Phaser.Scene);
Boot.prototype.preload = function() {
    this.load.image("game_title", "img/game_title.png");
    this.load.image("bg_menu", "img/bg_menu.png");
    this.load.image("btn_start", "img/btn_start.png")
};
Boot.prototype.create = function() {
    var a = localStorage.getItem("rf_bubble_shooter_unlocked");
    null != a && (_data.unlocked_level = JSON.parse(a));
    this.scale.stopListeners();
    this.scene.start("loader")
};
var Load = function() {
    return Phaser.Scene.call(this, "loader") || this
};
$jscomp.inherits(Load, Phaser.Scene);
Load.prototype.preload = function() {
    var a = this;
    this.add.sprite(360, 540, "bg_menu");
    this.add.sprite(360, 340, "game_title");
    var e = this.add.rectangle(config.width / 2, 600, 450, 20);
    e.setStrokeStyle(2, 16777215);
    e.alpha = .7;
    var d = this.add.rectangle(config.width / 2, 600, 440, 10, 16777215);
    d.alpha = .8;
    this.load.on("progress", function(a) {
        d.width = 440 * a
    });
    this.load.on("complete", function() {
        e.destroy();
        d.destroy();
        var b = draw_button(config.width / 2, 700, "start", a);
        a.tweens.add({
            targets: b,
            alpha: .5,
            yoyo: !0,
            duration: 500,
            loop: -1
        })
        }, this);
    this.input.on("gameobjectdown", function() {
        a.scene.start("menu") 
        }, this);
    this.load.spritesheet("bubble", "img/bubbles.png", {
        frameWidth: 55,
        frameHeight: 55
    });
    this.load.spritesheet("page", "img/page.png", {
        frameWidth: 62,
        frameHeight: 62
    });
    this.load.spritesheet("explosion", "img/explosion.png", {
        frameWidth: 101,
        frameHeight: 96
    });
    this.load.image("top_line", "img/top_line.png");
    this.load.image("bg_game", "img/bg_game.png");
    this.load.image("shooter", "img/shooter.png");
    this.load.image("canon", "img/canon.png");
    this.load.image("loading", "img/loading.png");
    this.load.image("preshooter", "img/preshooter.png");
    this.load.image("about", "img/about.png");
    this.load.image("btn_pause", "img/btn_pause.png");
    this.load.image("btn_swap", "img/btn_swap.png");
    this.load.image("btn_home", "img/btn_home.png");
    this.load.image("btn_close", "img/btn_close.png");
    this.load.image("btn_level", "img/btn_level.png");
    this.load.image("btn_play", "img/btn_play.png");
    this.load.image("btn_sound", "img/btn_sound.png");
    this.load.image("btn_sound_on", "img/btn_sound_on.png");
    this.load.image("btn_sound_off", "img/btn_sound_off.png");
    //this.load.image("btn_about", "img/btn_about.png");
    this.load.image("btn_level_cur", "img/btn_level_cur.png");
    this.load.image("btn_level_lock", "img/btn_level_lock.png");
    this.load.image("btn_restart", "img/btn_restart.png");
    this.load.image("btn_close", "img/btn_close.png");
    this.load.image("btn_home_square", "img/btn_home_square.png");
    this.load.image("btn_restart_square", "img/btn_restart_square.png");
    this.load.image("btn_next_square", "img/btn_next_square.png");
    this.load.image("dots", "img/dots.png");
    this.load.image("win_level", "img/win_level.png");
    this.load.image("win_about", "img/win_about.png");
    this.load.image("win_pause", "img/win_pause.png");
    this.load.image("win_win", "img/win_win.png");
    this.load.image("win_lose", "img/win_lose.png");
    this.load.image("score_board", "img/score_board.png");
    this.load.audio("completed", "audio/completed.mp3");
    this.load.audio("gameover", "audio/gameover.mp3");
    this.load.audio("click", "audio/click.mp3");
    this.load.audio("blop", "audio/blop.mp3");
    this.load.audio("swap", "audio/swap.mp3");
    for (var b = 1; 11 >= b; b++) this.load.audio("pop" + b, "audio/pop" + b + ".mp3");
    for (b = 1; 80 >= b; b++) this.load.json("level-" + b, "level/level-" + b + ".json")
};
var Menu = function() {
    return Phaser.Scene.call(this, "menu") || this
};
$jscomp.inherits(Menu, Phaser.Scene);
Menu.prototype.create = function() {
    var a, e = "menu",
    d = this;
    this.add.image(360, 540, "bg_menu");
    var b = this.add.sprite(360, 300, "game_title");
    this.tweens.add({
        targets: b,
        y: b.y + 20,
        duration: 1E3,
        ease: "Sine.easeInOut",
        yoyo: !0,
        repeat: -1
        }, this);
    draw_button(360, 580, "play", this);
    b = draw_button(360, 700, "sound_on", this);
    b.name = "sound";
    //draw_button(630, 1E3, "about", this);
    check_audio(b);
    this.input.on("gameobjectdown", function(b, m) {
        play_sound("click", this);
        this.tweens.add({
            targets: m,
            scaleX: .95,
            scaleY: .95,
            duration: 100,
            ease: "Linear",
            yoyo: !0,
            onComplete: function() {
                if ("menu" === e)
                    if ("play" === m.name){ 

                        ads(d,"level");
                        
                        //d.scene.start("level")
                                                
                    }
                    else if ("sound" === m.name) switch_audio(m);
                        else {
                            if ("about" === m.name) {
                                e = "about";
                                a = d.add.group();
                                var b = d.add.rectangle(360, 540, 720, 1080, 0);
                                b.alpha = .5;
                                a.create(config.width / 2, config.height / 2, "win_about");
                                var f = d.add.sprite(600, 220, "btn_close").setInteractive();
                                f.name = "close";
                                var t = d.add.sprite(360, 600, "about");
                                a.addMultiple([b, f, t])
                            }
                        } else "close" === m.name && (a.destroy(!0, !0), e = "menu")
            }
            }, this)
        }, this)
};
var Level = function() {
    return Phaser.Scene.call(this, "level") || this
};
$jscomp.inherits(Level, Phaser.Scene);
Level.prototype.create = function() {
    function a(a) {
        if (m) {
            var c = !1,
            d = 0;
            if ("right" === a) {
                if (n + 1 < t) {
                    n++;
                    var f = -720;
                    c = !0
                }
            } else "left" === a && 0 <= n - 1 && (n--, f = 720, c = !0);
            if (c) {
                e();
                m = !1;
                var h = b.getLength();
                a = b.getChildren();
                for (c = 0; c < h; c++) {
                    var l = a[c];
                    this.tweens.add({
                        targets: l,
                        x: l.x + f,
                        ease: "Linear",
                        duration: 300,
                        onComplete: function() {
                            d++;
                            d === h - 1 && (m = !0)
                        }
                    })
                }
            }
        }
    }
    function e() {
        for (var a = y.getLength(), c = y.getChildren(), b = 0; b < a; b++) {
            var e = c[b];
            b === n ? e.setFrame(0) : e.setFrame(1)
        }
    }
    this.add.sprite(360, 540, "bg_game");
    this.add.sprite(config.width / 2, config.height / 2, "win_level");
    var d = this.add.sprite(610, 185, "btn_close").setInteractive();
    d.name = "close";
    d.button = !0;
    var b = this.add.group(),
    y = this.add.group(),
    m = !0,
    r = 180,
    f = 0,
    t = Math.ceil(_data.total_level / 16);
    d = Math.ceil(_data.unlocked_level / 16);
    for (var n = 0, u = 0; u < t; u++) {
        0 < u && (r += 720);
        for (var c = 0; 4 > c; c++)
            for (var l = 0; 4 > l; l++)
                if (f < _data.total_level) {
                    f++;
                    var h = void 0;
                    f < _data.unlocked_level ? h = "btn_level" : f === _data.unlocked_level && (h = "btn_level_cur");
                    f > _data.unlocked_level && (h = "btn_level_lock");
                    h = this.add.sprite(r +
                        120 * l, 360 + 120 * c, h).setInteractive();
                    h.button = !0;
                    h.id = f;
                    if (f <= _data.unlocked_level) {
                        var C = this.add.text(h.x, h.y, String(f), {
                            fontFamily: "poetsen",
                            fontSize: 40,
                            align: "center",
                            color: "#FFFFFF"
                        }).setOrigin(.5);
                        b.add(C)
                    }
                    b.add(h)
        }
    }
    r = 360 - 70 * (t - 1) / 2;
    for (f = 0; f < t; f++) u = 0, f != n && (u = 1), c = this.add.sprite(r + 70 * f, 840, "page").setInteractive(), c.setFrame(u), c.id = f, c.page = !0, y.add(c);
    if (1 < d)
        for (n = d - 1, e(), d = b.getLength(), r = b.getChildren(), f = 0; f < d; f++) r[f].x -= 720 * n;
    this.input.keyboard.on("keydown", function(c) {
        "ArrowRight" === c.key ? a.bind(this)("right") : "ArrowLeft" === c.key && a.bind(this)("left")
        }, this);
    this.input.on("gameobjectdown", function(c, b) {
        b.page ? b.id != n && (b.id > n ? a.bind(this)("right") : a.bind(this)("left")) : b.button && (play_sound("click", this), b.id <= _data.unlocked_level ? this.tweens.add({
            targets: b,
            scaleX: .95,
            scaleY: .95,
            yoyo: !0,
            ease: "Linear",
            duration: 100,
            onComplete: function() {
                _data.cur_level = b.id;
                this.scene.start("game")
            }.bind(this)
            }, this) : "close" === b.name && this.tweens.add({
                targets: b,
                scaleX: .95,
                scaleY: .95,
                yoyo: !0,
                ease: "Linear",
                duration: 100,
                onComplete: function() {
                    this.scene.start("menu")
                }.bind(this)
                }, this))
        }, this)
};
var Game = function() {
    return Phaser.Scene.call(this, "game") || this
};
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function() {
    function a(a, d) {
        play_sound("blop", c);
        var H = k.body.angle;
        (a = g.check_nearest({
            x: a.x,
            y: a.y,
            color: a.frame.name
            }, d)) ? (d = g.matching(a.x, a.y, a.color), g.clear_array("matching"), g.collision_effect(a, H), 2 < d ? (D += 10 * d, setTimeout(function() {
            g.remove_match().then(function() {
                var a = g.check_unlinked();
                0 < a && (D += 20 * a, g.remove_unlinked().then(function() {
                    g.is_empty() && setTimeout(n, 500)
                }));
                g.clear_array("linked");
                g.is_empty() ? setTimeout(n, 500) : setTimeout(e, _data.effect_duration + 200)
            })
            }, 500)) : setTimeout(e, _data.effect_duration + 200)) : t();
        b()
    }
    function e() {
        E < _data.push_at ? (E++, x = !0) : (E = 0, d())
    }
    function d() {
        g.push("level").then(function(a) {
            a ? (0 < g.check_unlinked() && g.remove_unlinked(), g.clear_array("linked"), x = !0) : t()
        })
    }
    function b() {
        k.x = _data.shoot_pos.x;
        k.y = _data.shoot_pos.y;
        k.disableBody(!0);
        k.setFrame(w);
        B || (m(), B = !0)
    }
    function y(a, c, d, e, f) {
        c && (b(), x = !0)
    }
    function m() {
        w = g.get_available_color();
        p.x = _data.b_next_pos.x;
        p.y = _data.b_next_pos.y;
        p.setFrame(w);
        p.setScale(0);
        c.tweens.add({
            targets: p,
            scaleX: 1,
            scaleY: 1,
            duration: 200,
            ease: "Sine.easeOut"
        })
    }
    function r() {
        B = !1;
        var a = this.tweens.add({
            targets: p,
            x: _data.shoot_pos.x,
            duration: 200,
            ease: "Sine.easeIn",
            onComplete: function() {
                B && (a.stop(), m())
            }
        });
        this.tweens.add({
            targets: p,
            y: _data.shoot_pos.y,
            duration: 200,
            ease: "Sine.easeOut"
        })
    }
    function f() {
        var a = w;
        c.tweens.add({
            targets: p,
            x: _data.shoot_pos.x,
            duration: 200,
            ease: "Sine.easeOut",
            onComplete: function() {
                w = k.frame.name;
                p.setFrame(w);
                p.x = _data.b_next_pos.x
            }
        });
        c.tweens.add({
            targets: p,
            y: _data.shoot_pos.y,
            duration: 200,
            ease: "Sine.easeIn",
            onComplete: function() {
                p.y = _data.b_next_pos.y
            }
        });
        c.tweens.add({
            targets: k,
            x: _data.b_next_pos.x,
            duration: 200,
            ease: "Sine.easeOut",
            onComplete: function() {
                k.setFrame(a);
                k.x = _data.shoot_pos.x
            }
        });
        c.tweens.add({
            targets: k,
            y: _data.b_next_pos.y,
            duration: 200,
            ease: "Sine.easeIn",
            onComplete: function() {
                k.y = _data.shoot_pos.y
            }
        })
    }
    function t() {
        play_sound("gameover", c);
        v = "gameover";
        q = c.add.group();
        var a = c.add.rectangle(360, 540, 720, 1080, 0).setInteractive();
        a.alpha = .5;
        q.create(config.width / 2, config.height / 2, "win_lose");
        var b = c.add.text(360, 440, "GAME OVER!", {
            fontFamily: "poetsen",
            fontSize: 50,
            align: "center",
            color: "#916846"
        });
        b.setOrigin(.5);
        q.create(360, 572, "score_board");
        var d = c.add.text(360, 572, "SCORE: " + D, {
            fontFamily: "poetsen",
            fontSize: 35,
            color: "#FFFFFF"
        });
        d.setOrigin(.5);
        var e = draw_button(272, 712, "home_square", c),
        f = draw_button(448, 712, "restart_square", c);
        q.addMultiple([a, b, e, f, d])
    }
    function n() {
        _data.cur_level === _data.unlocked_level && _data.cur_level < _data.total_level && (_data.unlocked_level++, localStorage.setItem("rf_bubble_shooter_unlocked", _data.unlocked_level));
        play_sound("completed", c);
        v = "completed";
        q = c.add.group();
        var a = c.add.rectangle(360, 540, 720, 1080, 0).setInteractive();
        a.alpha = .5;
        q.create(config.width / 2, config.height / 2, "win_win");
        var b = c.add.text(360, 440, "LEVEL " + _data.cur_level + "\nCOMPLETED!", {
            fontFamily: "poetsen",
            fontSize: 50,
            align: "center",
            color: "#916846"
        });
        b.setOrigin(.5);
        q.create(360, 572, "score_board");
        var d = c.add.text(360, 572, "SCORE: " + D, {
            fontFamily: "poetsen",
            fontSize: 35,
            color: "#FFFFFF"
        });
        d.setOrigin(.5);
        var e = draw_button(220, 712, "home_square", c),
        f = draw_button(360, 712, "restart_square", c),
        g = draw_button(500, 712, "next_square", c);
        q.addMultiple([a, b, e, g, f, d])
    }
    var u = this,
    c = this;
    this.add.sprite(360, 540, "bg_game");
    var l = this.add.tileSprite(_data.shoot_pos.x, _data.shoot_pos.y, 225, 14, "dots").setOrigin(0, .5);
    l.rotation = -1.5708;
    l.setVisible(!1);
    this.add.sprite(360, 1016, "shooter");
    this.add.sprite(116, 948, "preshooter");
    var h = this.add.sprite(360, 942, "canon");
    h.setOrigin(.5, .643);
    var C = this.physics.velocityFromRotation,
    A = new Phaser.Math.Vector2,
    F = Phaser.Math.Angle.BetweenPoints,
    x = !1,
    E = 0,
    w = 1,
    B = !0,
    z = this.add.sprite(70, 1010, "btn_swap").setInteractive();
    z.name = "swap";
    z.button = !0;
    z = this.add.sprite(650, 1010, "btn_pause").setInteractive();
    z.name = "pause";
    z.button = !0;
    var q, v = "load",
    D = 0,
    k, p, g = new Bubble(this),
    G = this.add.sprite(360, 540, "loading");
    this.tweens.add({
        targets: G,
        rotation: 6.28319,
        duration: 2E3,
        ease: "Linear",
        loop: -1
    });
    g.get_level(_data.cur_level).then(function(b) {
        G.destroy(!0, !0);
        g.generate("level");
        g.add_bubble_shoot();
        w = g.get_available_color();
        g.add_bubble_next(w);
        k = g.get("bubble_move");
        p = g.get("bubble_next");
        u.physics.add.collider(g.get("bubble_stand"), k, a);
        u.physics.world.on("worldbounds", y);
        x = !0;
        v = "play";
        l.setVisible(!0)
    });
    this.anims.create({
        key: "exp",
        frames: this.anims.generateFrameNumbers("explosion"),
        frameRate: 10
    });
    this.input.on("pointermove", function(a) {
        a.y < _data.shoot_pos.y + _data.min_aim && "play" === v && (a = F(l, a), l.setRotation(a), h.setRotation(a + 1.5708), C(a, _data.shoot_speed, A))
        }, this);
    this.input.on("pointerup", function(a) {
        x && a.y < _data.shoot_pos.y +
        _data.min_aim && "play" === v && (a = F(l, a), l.setRotation(a), h.setRotation(a + 1.5708), C(a, _data.shoot_speed, A), x = !1, k.enableBody(!0, k.x, k.y, !0, !0).setVelocity(A.x, A.y), r.bind(this)())
        }, this);
    this.input.on("gameobjectdown", function(a, b) {
        b.button && ("swap" === b.name ? play_sound("swap", c) : play_sound("click", c), this.tweens.add({
            targets: b,
            scaleX: .95,
            scaleY: .95,
            duration: 100,
            ease: "Linear",
            yoyo: !0,
            onComplete: function() {
                if ("play" === v)
                    if ("swap" === b.name) f();
                    else {
                        if ("pause" === b.name) {
                            v = "paused";
                            q = c.add.group();
                            var a = c.add.rectangle(360, 540, 720, 1080, 0).setInteractive();
                            a.alpha = .5;
                            q.create(config.width / 2, config.height / 2, "win_pause");
                            var d = draw_button(config.width / 2, 450, "home", c),
                            e = draw_button(config.width / 2, 570, "restart", c),
                            g = draw_button(config.width / 2, 690, "sound_on", c);
                            g.name = "sound";
                            var h = draw_button(600, 260, "close", c);
                            check_audio(g);
                            q.addMultiple([a, d, e, g, h])
                        }
                    }
                else 
                {
                    "restart" === b.name || "restart_square" === b.name 
                    ? ads(c,"game")

                    : "home" === b.name || "home_square" === b.name 
                    ? ads(c, "menu") 
                    : "close" === b.name 
                    ? (q.destroy(!0, !0), v = "play") 
                    : "next_square" === b.name 
                    ? ads(c, "r")

                    : "sound" === b.name && switch_audio(b)
                }
            }
        }))
        }, this);
    this.input.keyboard.on("keydown", function(a) {
        " " === a.key && "play" === v && (play_sound("swap", c), f())
    })
};
function play_sound(a, e) {
    _data.sound && ("pop" === a ? e.sound.play(a + (Math.round(10 * Math.random()) + 1)) : e.sound.play(a))
}
function spawn_explosion(a, e, d) {
    var b = d.add.sprite(a, e, "explosion");
    b.play("exp");
    b.on("animationcomplete", function() {
        b.destroy(!0, !0)
    })
}
function draw_button(a, e, d, b) {
    a = b.add.sprite(a, e, "btn_" + d).setInteractive();
    a.button = !0;
    a.name = d;
    return a
}
function switch_audio(a) {
    _data.sound ? (_data.sound = !1, a.setTexture("btn_" + a.name + "_off")) : (_data.sound = !0, a.setTexture("btn_" + a.name + "_on"))
}
function check_audio(a) {
    _data.sound ? a.setTexture("btn_" + a.name + "_on") : a.setTexture("btn_" + a.name + "_off")
}
var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1080,
    physics: {
        default: "arcade",
        arcade: {
        debug: !1
    }
},
scale: {
    mode: Phaser.Scale.FIT,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH
},
scene: [Boot, Menu, Load, Level, Game]
};

var a = function() {
    return a = Object.assign || function(e) {
        for (var t, i = 1, n = arguments.length; i < n; i++)
            for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    }, a.apply(this, arguments)
};

game = new Phaser.Game(config);



