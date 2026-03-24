var _classCallCheck2 = babel_require("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = babel_require("../../@babel/runtime/helpers/createClass");

window.zs = window.zs || {}, function(e) {
    "use strict";
    var t = /* */ function() {
        function t() {
            _classCallCheck2(this, t);
        }
        _createClass2(t, null, [ {
            key: "init",
            value: function init() {
                this.markGameNum(), this.markAwardNum(), this.markReadyNum();
            }
        }, {
            key: "markGameNum",
            value: function markGameNum(e) {
                var m = zs.utils.getItem(t.key_game_num_time_stamp);
                null != m && "" != m && 0 != zs.utils.isToday(Number(m)) || (zs.utils.setItem(t.key_game_num_time_stamp, Date.now().toString()), 
                zs.utils.setItem(t.key_game_num, "1")), t.day_game_num = zs.utils.getItem(t.key_game_num) || 1, 
                t.day_game_num = e ? Number(t.day_game_num) + 1 : Number(t.day_game_num), zs.utils.setItem(t.key_game_num, t.day_game_num.toString());
            }
        }, {
            key: "markAwardNum",
            value: function markAwardNum(e) {
                var m = zs.utils.getItem(t.key_award_num_time_stamp);
                null != m && "" != m && 0 != zs.utils.isToday(Number(m)) || (zs.utils.setItem(t.key_award_num_time_stamp, Date.now().toString()), 
                zs.utils.setItem(t.key_award_num, "1")), t.open_award_num = zs.utils.getItem(t.key_award_num) || 1, 
                t.open_award_num = e ? Number(t.open_award_num) + 1 : Number(t.open_award_num), 
                zs.utils.setItem(t.key_award_num, t.open_award_num.toString());
            }
        }, {
            key: "markReadyNum",
            value: function markReadyNum(e) {
                var m = zs.utils.getItem(t.key_ready_num_time_stamp);
                null != m && "" != m && 0 != zs.utils.isToday(Number(m)) || (zs.utils.setItem(t.key_ready_num_time_stamp, Date.now().toString()), 
                zs.utils.setItem(t.key_ready_num, "1")), t.open_ready_num = zs.utils.getItem(t.key_ready_num) || 1, 
                t.open_ready_num = e ? Number(t.open_ready_num) + 1 : Number(t.open_ready_num), 
                zs.utils.setItem(t.key_ready_num, t.open_ready_num.toString());
            }
        }, {
            key: "checkEggOpen",
            value: function checkEggOpen(e) {
                if (!t.switch) return !1;
                var m = zs.product.get("zs_click_award_since");
                if (m && m > 0 && (!t.day_game_num || Number(t.day_game_num) < m)) return !1;
                var _ = e ? zs.product.get("zs_ready_click_num") : zs.product.get("zs_click_award_num");
                if (!_ || "" == _.trim()) return !1;
                if (_ = JSON.parse(_), !zs.product.get("zs_switch")) return !1;
                if (Array.isArray(_)) {
                    if (_.length <= 0) return !1;
                    if (0 == _.length && _[0] < 0) return !0;
                    if (_.indexOf(t.day_game_num) >= 0) return !0;
                } else {
                    if (_ = parseInt(_), isNaN(_)) return !1;
                    if (_ < 0) return !0;
                    if (_ > (e ? t.open_ready_num : t.open_award_num)) return !0;
                }
                return !1;
            }
        } ]);
        return t;
    }();
    t.switch = !0, t.key_game_num = "day_game_num", t.key_award_num = "open_award_num", 
    t.key_ready_num = "open_ready_num", t.key_award_num_time_stamp = "open_award_num_time_stamp", 
    t.key_ready_num_time_stamp = "open_ready_num_time_stamp", t.key_game_num_time_stamp = "game_num_time_stamp", 
    t.open_award_num = 0, t.open_ready_num = 0, t.day_game_num = 0, e.EggKnock = t;
}(window.zs = window.zs || {});