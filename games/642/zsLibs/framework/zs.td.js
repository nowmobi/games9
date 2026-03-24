var _classCallCheck2 = babel_require("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = babel_require("../../@babel/runtime/helpers/createClass");

window.zs = window.zs || {}, function(t) {
    "use strict";
    var a = /* */ function() {
        function a() {
            _classCallCheck2(this, a);
        }
        _createClass2(a, null, [ {
            key: "init",
            value: function init() {
                window.TDCORE && window.TDCORE();
            }
        }, {
            key: "justTrack",
            value: function justTrack(t, _a, n) {
                window.TDAPP && (zs.log.debug("TD数据统计 " + t + " : " + _a, "Talking Data", n), TDAPP.onEvent(t, _a, n || null));
            }
        }, {
            key: "track",
            value: function track(t, _a2) {
                if (!window.TDAPP) return;
                var n = t.split("_", 2), e = zs.configs.gameCfg.tdConfig, s = null, i = t;
                n.length > 1 ? (s = e[n[0] + "_"]) && (i = s + n[1]) : (s = e[t]) && (i = s), zs.log.debug("TD数据统计 " + t + " : " + i, "Talking Data", _a2), 
                TDAPP.onEvent(i, i, _a2 || null);
            }
        } ]);
        return a;
    }();
    a.defaultKey = "17842E258BB240F798B4DC3ADECF1A38", a.appName = null, a.appKey = null, 
    a.versionName = "", a.channel = "", a.startupKey = "startup", a.startupDesc = "1-启动游戏", 
    a.gameStartKey = "gameStart", a.gameStartDesc = "2-开始游戏", a.descMap = {
        PRODUCT_START: "3-产品启动",
        PRODUCT_BEGIN: "4-产品开始",
        GAME_HOME: "5-游戏首页",
        PRODUCT_HOME_PLAY: "6-首页游玩",
        GAME_PLAY: "7-游戏游玩",
        PRODUCT_PLAY_END: "8-游玩结束",
        GAME_END: "9-游戏结束",
        PRODUCT_FINISH: "10-产品结束"
    }, t.td = a;
}(window.zs = window.zs || {});