var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var d = 0;
    return function() {
        return d < a.length ? {
            done: !1,
            value: a[d++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.makeIterator = function(a) {
    var d = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return d ? d.call(a) : $jscomp.arrayIterator(a)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, d, g) {
    a != Array.prototype && a != Object.prototype && (a[d] = g.value)
};
$jscomp.polyfill = function(a, d, g, e) {
    if (d) {
        g = $jscomp.global;
        a = a.split(".");
        for (e = 0; e < a.length - 1; e++) {
            var b = a[e];
            b in g || (g[b] = {});
            g = g[b]
        }
        a = a[a.length - 1];
        e = g[a];
        d = d(e);
        d != e && null != d && $jscomp.defineProperty(g, a, {
            configurable: !0,
            writable: !0,
            value: d
        })
    }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(a) {
    function d() {
        this.batch_ = null
    }
    function g(a) {
        return a instanceof b ? a : new b(function(c, k) {
            c(a)
        })
    }
    if (a && !$jscomp.FORCE_POLYFILL_PROMISE) return a;
    d.prototype.asyncExecute = function(a) {
        if (null == this.batch_) {
            this.batch_ = [];
            var c = this;
            this.asyncExecuteFunction(function() {
                c.executeBatch_()
            })
        }
        this.batch_.push(a)
    };
    var e = $jscomp.global.setTimeout;
    d.prototype.asyncExecuteFunction = function(a) {
        e(a, 0)
    };
    d.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var a = this.batch_;
            this.batch_ = [];
            for (var c = 0; c < a.length; ++c) {
                var b = a[c];
                a[c] = null;
                try {
                    b()
                } catch (l) {
                    this.asyncThrow_(l)
                }
            }
        }
        this.batch_ = null
    };
    d.prototype.asyncThrow_ = function(a) {
        this.asyncExecuteFunction(function() {
            throw a;
        })
    };
    var b = function(a) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var c = this.createResolveAndReject_();
        try {
            a(c.resolve, c.reject)
        } catch (h) {
            c.reject(h)
        }
    };
    b.prototype.createResolveAndReject_ = function() {
        function a(a) {
            return function(d) {
                b || (b = !0, a.call(c, d))
            }
        }
        var c = this,
            b = !1;
        return {
            resolve: a(this.resolveTo_),
            reject: a(this.reject_)
        }
    };
    b.prototype.resolveTo_ = function(a) {
        if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (a instanceof b) this.settleSameAsPromise_(a);
        else {
            a: switch (typeof a) {
                case "object":
                    var c = null != a;
                    break a;
                case "function":
                    c = !0;
                    break a;
                default:
                    c = !1
            }
            c ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a)
        }
    };
    b.prototype.resolveToNonPromiseObj_ = function(a) {
        var c = void 0;
        try {
            c = a.then
        } catch (h) {
            this.reject_(h);
            return
        }
        "function" == typeof c ? this.settleSameAsThenable_(c, a) : this.fulfill_(a)
    };
    b.prototype.reject_ = function(a) {
        this.settle_(2, a)
    };
    b.prototype.fulfill_ = function(a) {
        this.settle_(1, a)
    };
    b.prototype.settle_ = function(a, c) {
        if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + c + "): Promise already settled in state" + this.state_);
        this.state_ = a;
        this.result_ = c;
        this.executeOnSettledCallbacks_()
    };
    b.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var a = 0; a < this.onSettledCallbacks_.length; ++a) f.asyncExecute(this.onSettledCallbacks_[a]);
            this.onSettledCallbacks_ = null
        }
    };
    var f = new d;
    b.prototype.settleSameAsPromise_ = function(a) {
        var c = this.createResolveAndReject_();
        a.callWhenSettled_(c.resolve, c.reject)
    };
    b.prototype.settleSameAsThenable_ = function(a, c) {
        var b = this.createResolveAndReject_();
        try {
            a.call(c, b.resolve, b.reject)
        } catch (l) {
            b.reject(l)
        }
    };
    b.prototype.then = function(a, c) {
        function d(a, c) {
            return "function" == typeof a ? function(c) {
                try {
                    e(a(c))
                } catch (n) {
                    g(n)
                }
            } : c
        }
        var e, g, f = new b(function(a, c) {
            e = a;
            g = c
        });
        this.callWhenSettled_(d(a, e), d(c, g));
        return f
    };
    b.prototype.catch = function(a) {
        return this.then(void 0, a)
    };
    b.prototype.callWhenSettled_ = function(a, c) {
        function b() {
            switch (d.state_) {
                case 1:
                    a(d.result_);
                    break;
                case 2:
                    c(d.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + d.state_);
            }
        }
        var d = this;
        null == this.onSettledCallbacks_ ? f.asyncExecute(b) : this.onSettledCallbacks_.push(b)
    };
    b.resolve = g;
    b.reject = function(a) {
        return new b(function(c, b) {
            b(a)
        })
    };
    b.race = function(a) {
        return new b(function(c, b) {
            for (var d = $jscomp.makeIterator(a), e = d.next(); !e.done; e = d.next()) g(e.value).callWhenSettled_(c, b)
        })
    };
    b.all = function(a) {
        var c = $jscomp.makeIterator(a),
            d = c.next();
        return d.done ? g([]) : new b(function(a, b) {
            function e(c) {
                return function(b) {
                    f[c] = b;
                    h--;
                    0 == h && a(f)
                }
            }
            var f = [],
                h = 0;
            do f.push(void 0), h++, g(d.value).callWhenSettled_(e(f.length - 1), b), d = c.next(); while (!d.done)
        })
    };
    return b
}, "es6", "es3");
var matching_count = 0,
    unlinked_count = 0,
    Bubble = function(a) {
        this.scope = a;
        this.bubble_stand = a.physics.add.group();
        this.bubble_move;
        this.bubble_next;
        this.array_bubble = [];
        this.array_level = [];
        this.y_index = this.level_size = this.max_index = 0;
        this.top_line
    };
Bubble.prototype.get = function(a) {
    if ("bubble_stand" === a) return this.bubble_stand;
    if ("bubble_move" === a) {
        if (this.bubble_move) return this.bubble_move
    } else if ("bubble_next" === a && this.bubble_next) return this.bubble_next
};
Bubble.prototype.generate = function(a) {
    for (var d = this.scope, g = this.array_level, e = 0; e < _data.max_col; e++) {
        for (var b = [], f = 0; f < _data.row; f++) {
            var k = 0;
            1 === e % 2 && (k = _data.width / 2);
            if (e <= _data.col)
                if ("level" === a) {
                    var c = this.level_size - _data.col + this.y_index;
                    0 <= c && 1 === g[c][f][0] ? (c = g[c][f][1], this.add_bubble_stand(f, e, c), b.push({
                        filled: !0,
                        color: c
                    })) : b.push({
                        filled: !1,
                        color: 0
                    })
                } else c = Math.floor(Math.random() * _data.color), this.add_bubble_stand(f, e, c), b.push({
                    filled: !0,
                    color: c
                });
            else b.push({
                filled: !1,
                color: 0
            });
            _data.show_dots && d.add.rectangle(_data.start_x + _data.width * f + k, _data.start_y + _data.height * e, 5, 5, 4095)
        }
        this.array_bubble.push(b);
        e <= _data.col && this.y_index++
    }
};
Bubble.prototype.add_bubble_stand = function(a, d, g) {
    var e = this.scope; - 1 === g && (g = Math.floor(Math.random() * _data.color));
    var b = 0;
    1 === d % 2 && (b = _data.width / 2);
    e = e.physics.add.sprite(_data.start_x + _data.width * a + b, _data.start_y + _data.height * d, "bubble");
    e.setFrame(g);
    e.pos_x = a;
    e.pos_y = d;
    this.bubble_stand.add(e);
    e.setImmovable();
    e.setCircle(20);
    e.body.offset.y = 7;
    e.body.offset.x = 7
};
Bubble.prototype.add_bubble_shoot = function() {
    this.bubble_move = this.scope.physics.add.sprite(_data.shoot_pos.x, _data.shoot_pos.y, "bubble");
    this.bubble_move.setFrame(this.get_available_color());
    this.bubble_move.setOrigin(.5);
    this.bubble_move.setCollideWorldBounds(!0);
    this.bubble_move.setBounce(1, 1);
    this.bubble_move.setCircle(20);
    this.bubble_move.body.onWorldBounds = !0;
    this.bubble_move.body.offset.y = 7;
    this.bubble_move.body.offset.x = 7
};
Bubble.prototype.add_bubble_next = function(a) {
    this.bubble_next = this.scope.add.sprite(_data.b_next_pos.x, _data.b_next_pos.y, "bubble");
    this.bubble_next.setOrigin(.5);
    this.bubble_next.setFrame(a)
};
Bubble.prototype.check_nearest = function(a, d) {
    var g = d.pos_x;
    d = d.pos_y;
    var e = 999;
    if (d != _data.max_col - 1)
        for (var b = d - 1; b < d + 2; b++)
            for (var f = g - 2; f < g + 3; f++)
                if (0 <= f && 0 <= b && f < _data.row && b < _data.max_col && !this.array_bubble[b][f].filled) {
                    var k = 0;
                    1 === b % 2 && (k = _data.width / 2);
                    k = _data.start_x + _data.width * f + k;
                    var c = _data.start_y + _data.height * b,
                        h = Phaser.Math.Distance.Between(a.x, a.y, k, c);
                    if (h < e) {
                        e = h;
                        var l = {
                            x: f,
                            y: b,
                            tx: k,
                            ty: c,
                            color: a.color
                        }
                    }
                } l && (this.array_bubble[l.y][l.x].filled = !0, this.array_bubble[l.y][l.x].color = a.color, this.add_bubble_stand(l.x, l.y, a.color));
    return l
};
Bubble.prototype.matching = function(a, d, g) {
    this.max_index = 0;
    this.check_match(a, d, g, 1);
    this.array_bubble[d][a].checked = !0;
    this.array_bubble[d][a].match = !0;
    this.array_bubble[d][a].index = 0;
    matching_count++;
    if (2 < matching_count)
        for (a = this.bubble_stand.getLength(), d = this.bubble_stand.getChildren(), g = 0; g < a; g++) {
            var e = d[g];
            this.array_bubble[e.pos_y][e.pos_x].match && (this.array_bubble[e.pos_y][e.pos_x].filled = !1, this.array_bubble[e.pos_y][e.pos_x].match = !1, this.array_bubble[e.pos_y][e.pos_x].checked = !1, e.match = !0)
        }
    a = matching_count;
    matching_count = 0;
    return a
};
Bubble.prototype.check_match = function(a, d, g, e) {
    function b(c) {
        var b = a + c.x;
        c = d + c.y;
        0 <= c && c < _data.max_col && "undefined" !== typeof f.array_bubble[c][b] && f.array_bubble[c][b].filled && !f.array_bubble[c][b].checked && f.array_bubble[c][b].color === g && (f.array_bubble[c][b].checked = !0, f.array_bubble[c][b].match = !0, f.array_bubble[c][b].index = e, matching_count++, f.check_match(b, c, g, e + 1))
    }
    e > this.max_index && (this.max_index = e);
    this.array_bubble[d][a].checked = !0;
    var f = this;
    0 < a && b({
        x: -1,
        y: 0
    });
    a < _data.row - 1 && b({
        x: 1,
        y: 0
    });
    0 < d && b({
        x: 0,
        y: -1
    });
    d < _data.max_col - 1 && b({
        x: 0,
        y: 1
    });
    if (1 === d % 2) {
        var k = {
            x: 1,
            y: -1
        };
        b(k);
        k = {
            x: 1,
            y: 1
        };
        b(k)
    } else k = {
        x: -1,
        y: -1
    }, b(k), k = {
        x: -1,
        y: 1
    }, b(k)
};
Bubble.prototype.remove_match = function() {
    var a = this;
    return new Promise(function(d, g) {
        var e = [];
        g = a.bubble_stand.getLength();
        for (var b = a.bubble_stand.getChildren(), f = 0; f < g; f++) {
            var k = b[f];
            k.match && (a.array_bubble[k.pos_y][k.pos_x].filled = !1, e.push({
                index: a.array_bubble[k.pos_y][k.pos_x].index,
                obj: k
            }))
        }
        var c = !1,
            h = 0,
            l = e.length,
            m = setInterval(function() {
                for (var b = {}, f = 0; f < l; b = {
                        $jscomp$loop$prop$p$10$20: b.$jscomp$loop$prop$p$10$20
                    }, f++) e[f].index === h && (b.$jscomp$loop$prop$p$10$20 = e[f].obj, play_sound("pop", this.scope), this.scope.tweens.add({
                    targets: b.$jscomp$loop$prop$p$10$20,
                    scaleX: 0,
                    scaleY: 0,
                    duration: 100,
                    ease: "Sine.easeIn",
                    onComplete: function(b) {
                        return function() {
                            b.$jscomp$loop$prop$p$10$20.destroy();
                            h >= a.max_index && !c && (c = !0, a.clear_array("matching"), d(!0))
                        }
                    }(b)
                }));
                h++;
                h >= this.max_index && clearInterval(m)
            }.bind(a), _data.remove_delay)
    })
};
Bubble.prototype.check_unlinked = function() {
    function a(a, b) {
        g.array_bubble[b][a].linked = !0;
        d(a + -1, b + 0);
        d(a + 1, b + 0);
        d(a + 0, b + 1);
        d(a + 0, b + -1);
        if (0 === b % 2) {
            d(a + -1, b + 1);
            var c = -1
        } else d(a + 1, b + 1), c = 1;
        d(a + c, b + -1)
    }
    function d(b, c) {
        0 <= b && 0 <= c && b < _data.row && c < _data.max_col && g.array_bubble[c][b].filled && !g.array_bubble[c][b].linked && a(b, c)
    }
    var g = this,
        e = this.level_size - this.y_index;
    e = 0 < e ? 0 : -1 * e;
    for (var b = 0; b < _data.row; b++) this.array_bubble[e][b].filled && a(b, e);
    for (b = e = 0; b < _data.max_col; b++)
        for (var f = 0; f < _data.row; f++) this.array_bubble[b][f].filled && !this.array_bubble[b][f].linked && e++;
    return e
};
Bubble.prototype.clear_array = function(a, d) {
    if ("linked" === a)
        for (a = 0; a < _data.max_col; a++)
            for (d = 0; d < _data.row; d++) this.array_bubble[a][d].linked && (this.array_bubble[a][d].linked = !1);
    else if ("matching" === a)
        for (a = 0; a < _data.max_col; a++)
            for (d = 0; d < _data.row; d++) this.array_bubble[a][d].filled && this.array_bubble[a][d].checked && (this.array_bubble[a][d].checked = !1, this.array_bubble[a][d].match = !1)
};
Bubble.prototype.remove_unlinked = function() {
    var a = this;
    return new Promise(function(d) {
        for (var g = 0, e = a.bubble_stand.getLength(), b = a.bubble_stand.getChildren(), f = 0; f < e; f++) {
            var k = b[f];
            a.array_bubble[k.pos_y][k.pos_x].linked || (k.linked = !0, g++)
        }
        setTimeout(function() {
            e = this.bubble_stand.getLength();
            b = this.bubble_stand.getChildren();
            for (var a = 0; a < e; a++) {
                var f = b[a];
                f.linked && (this.array_bubble[f.pos_y][f.pos_x].filled = !1, spawn_explosion(f.x, f.y, this.scope), f.destroy(!0, !0), e--, a--, g--, 1 === g && d())
            }
        }.bind(a), 200)
    })
};
Bubble.prototype.collision_effect = function(a, d) {
    function g(a, b) {
        return a.pos_x === b.x && a.pos_y === b.y ? !1 : !0
    }
    function e(c, e, f) {
        f = f ? d : Phaser.Math.Angle.Between(a.tx, a.ty, c.x, c.y);
        b.tweens.add({
            targets: c,
            x: c.x + _data.width / e * Math.cos(f),
            y: c.y + _data.width / e * Math.sin(f),
            ease: "Sine.easeOut",
            duration: _data.effect_duration / 2,
            yoyo: !0
        })
    }
    for (var b = this.scope, f = this.bubble_stand.getLength(), k = this.bubble_stand.getChildren(), c = 0; c < f; c++) {
        var h = k[c];
        g(h, a) && h.pos_x >= a.x - 1 && h.pos_x <= a.x + 1 && h.pos_y <= a.y + 1 && h.pos_y >= a.y - 1 ? e(h, 1.5) : g(h, a) && h.pos_x >= a.x - 2 && h.pos_x <= a.x + 2 && h.pos_y <= a.y + 2 && h.pos_y >= a.y - 3 ? e(h, 5) : g(h, a) && h.pos_x >= a.x - 1 && h.pos_x <= a.x + 1 && h.pos_y <= a.y + 3 && h.pos_y >= a.y - 5 && e(h, 12);
        g(h, a) || e(h, 1, !0)
    }
};
Bubble.prototype.push = function(a, d) {
    return new Promise(function(d) {
        for (var e = !1, b = 0; b < _data.row; b++) this.array_bubble[_data.max_col - 1][b].filled && (e = !0, d(!1));
        if (!e) {
            e = this.scope;
            if ("random" === a)
                for (b = 0; b < _data.row; b++) this.add_bubble_stand(b, -1, -1);
            else {
                this.y_index++;
                b = this.level_size - this.y_index;
                0 > b && (this.top_line || (this.top_line = e.add.sprite(360, -15, "top_line")), e.tweens.add({
                    targets: this.top_line,
                    y: this.top_line.y + _data.height,
                    duration: _data.push_duration,
                    ease: "Linear"
                }, this));
                for (var f = 0; f < _data.row; f++) 0 <= b && 1 === this.array_level[b][f][0] && this.add_bubble_stand(f, -1, this.array_level[b][f][1])
            }
            for (b = 0; b < _data.max_col; b++)
                for (f = 0; f < _data.row; f++) this.array_bubble[b][f].filled = !1;
            var g = this.bubble_stand.getLength();
            b = this.bubble_stand.getChildren();
            for (f = {
                    $jscomp$loop$prop$i$22: 0
                }; f.$jscomp$loop$prop$i$22 < g; f = {
                    $jscomp$loop$prop$i$22: f.$jscomp$loop$prop$i$22
                }, f.$jscomp$loop$prop$i$22++) {
                var c = b[f.$jscomp$loop$prop$i$22],
                    h = 0; - 1 != c.pos_y && (h = 1 === c.pos_y % 2 ? -_data.width / 2 : _data.width / 2);
                c.pos_y++;
                c.pos_y < _data.max_col && (this.array_bubble[c.pos_y][c.pos_x].filled = !0, this.array_bubble[c.pos_y][c.pos_x].color = c.frame.name);
                e.tweens.add({
                    targets: c,
                    x: c.x + h,
                    y: c.y + _data.height,
                    duration: _data.push_duration,
                    ease: "Linear",
                    onComplete: function(a) {
                        return function() {
                            a.$jscomp$loop$prop$i$22 === g - 1 && d(!0)
                        }
                    }(f)
                })
            }
        }
    }.bind(this))
};
Bubble.prototype.get_available_color = function() {
    var a = this.bubble_stand.getLength();
    return this.bubble_stand.getChildren()[Math.floor(Math.random() * a)].frame.name
};
Bubble.prototype.get_level = function(a) {
    var d = this;
    return new Promise(function(g) {
        var e = d.scope.cache.json.get("level-" + a);
        "redfoc_bs" === e[0][0][2] ? (d.level_size = e.length - 1, d.array_level.length = 0, d.array_level = e, g("success")) : g("else")
    })
};
Bubble.prototype.get_fromURL = function(a) {
    var d = this;
    return new Promise(function(g) {
        d.level_size = a.length - 1;
        d.array_level.length = 0;
        d.array_level = a;
        g("success")
    })
};
Bubble.prototype.is_empty = function() {
    for (var a = 0, d = 0; d < _data.max_col; d++)
        for (var g = 0; g < _data.row; g++) this.array_bubble[d][g].filled && a++;
    return a ? !1 : !0
};