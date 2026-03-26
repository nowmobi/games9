//构建web包时在里面添加cnf.json文件，如果没有则cnf数据为dataCnf
var dataCnf = {
    appName: "Bus Order 3D",
    appID: "Bus-Order-3d"
}
//场景宽高
const stageWidth = 720;
const stageHeight = 1280;
//平台 yad/puzzlegame/yiv/FreeGames
const WebName = "puzzlegame"
//交叉推荐的大小
const Adwidth = 150;
const Adheight = 150;




var index = 0;
var canScroll = true;
var BannerScrollid
var MaskArray = []
var btnArray = []

var _forgames;
var barArray = []
var isSpeacial = false;
var WebIndex = 0;
switch (WebName) {
    case "yad":
        WebIndex = 0;
        break
    case "yiv":
        WebIndex = 1;
        break
    case "puzzlegame":
        WebIndex = 5;
        break

}

window.YYGplatform = (() => {
    const addScript = (url, fun) => {
        if (typeof YYGGames !== 'undefined') {
            fun();
            return;
        }
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        document.getElementsByTagName('body')[0].appendChild(script);
        if (fun) script.onload = fun;
    };
    const addFreeScript = (url, fun) => {
        if (typeof FreeGames !== 'undefined') {
            fun();
            return;
        }
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        document.getElementsByTagName('body')[0].appendChild(script);
        if (fun) script.onload = fun;
    };
    const updateTitle = name => {
        document.getElementsByTagName("title")[0].innerText = name;
    };
    const addStyle = () => {
        const el = document.createElement('style')
        el.innerText =
            `body {overflow: hidden;} #Game {position: absolute;margin: 0;overflow: hidden;width: ${stageWidth} px; height: ${stageWidth}px;left: 50%;top: 50%;transform: translate(-50%, -50%);}`
            + "#AdTip {overflow: hidden;word-break: break-all;overflow-wrap: break-word;font-family: Arial;padding: 10px;min-height: 20px;color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.7);font-size: 18px;width: 90%;opacity: 1;-webkit-transform: 0.5s ease-in, opacity 0.5s ease-in;}"
            + ".divImage {position: absolute;z-index: 99999;}";
        document.head.appendChild(el);
    };
    const addicon = (id) => {
        let gameDiv = document.getElementById('GameDiv') || document.getElementById('Game')
        const div = document.createElement("div");
        div.setAttribute("id", id);
        div.setAttribute("class", "divImage");
        div.setAttribute("onclick", '(()=>{YYGGames.navigate("Loading", "LOGO");})()');
        div.setAttribute("style", "width:15%;top: 0%;right: 1%;");
        const img = document.createElement("img");
        img.setAttribute("width", "100%");
        img.setAttribute("id", id + "Image");
        switch (WebName) {
            case "yad":
                img.src = "https://h5gamessdk.yyggames.com/sdk/res/yad.png";
                break
            case "puzzlegame":
                img.src = "https://h5gamessdk.yyggames.com/sdk/res/puzzle2.png";
                break
            case "yiv":
                img.src = "https://h5gamessdk.yyggames.com/sdk/res/yiv.png";
                break
        }
        div.appendChild(img);
        gameDiv.appendChild(div);
    }
    const initGameBox = (node) => {

        const GameBox = getGameBox(node);
        console.log("node: ", node)
        if (isSpeacial) {
            GameBox.active = 0;
            return;
        }
        addAd(GameBox.getChildByName("GameBox1"), GameBox.getChildByName("GameBox2"));
    }
    const getGameBox = (node) => {
        const GameBox1 = new cc.Node();
        GameBox1.name = "GameBox1";
        GameBox1.width = Adwidth + 15;
        GameBox1.height = Adheight + 15;
        GameBox1.anchorX = GameBox1.anchorY = 0.5;
        GameBox1.x = -200;
        GameBox1.y = 0;

        const item = new cc.Node();
        item.name = "item";
        item.width = Adwidth + 15;
        item.height = Adheight + 15;
        item.anchorX = item.anchorY = 0.5;
        item.x = 0;
        item.y = 0;
        const di = item.addComponent(cc.Sprite);
        di.sizeMode = 0;
        di.spriteFrame = window.di;

        const Mask = new cc.Node();
        Mask.x = 0;
        Mask.y = 0;
        Mask.width = Adwidth;
        Mask.height = Adheight;
        Mask.name = "Mask";
        const _Mask = Mask.addComponent(cc.Mask);
        _Mask.type = cc.Mask.Type.IMAGE_STENCIL;
        _Mask.spriteFrame = window.di;
        _Mask.inverted = false;

        item.addChild(Mask);
        GameBox1.addChild(item);

        const GameBox2 = new cc.Node();
        GameBox2.name = "GameBox2";
        GameBox2.width = Adwidth + 15;
        GameBox2.height = Adheight + 15;
        GameBox2.anchorX = GameBox2.anchorY = 0.5;
        GameBox2.x = 200;
        GameBox2.y = 0;

        const item2 = new cc.Node();
        item2.name = "item2";
        item2.width = Adwidth + 15;
        item2.height = Adheight + 15;
        item2.anchorX = item2.anchorY = 0.5;
        item2.x = 0;
        item2.y = 0;
        const di2 = item2.addComponent(cc.Sprite);
        di2.sizeMode = 0;
        di2.spriteFrame = window.di;

        const Mask2 = new cc.Node();
        Mask2.x = 0;
        Mask2.y = 0;
        Mask2.width = Adwidth;
        Mask2.height = Adheight;
        Mask2.name = "Mask2";
        const _Mask2 = Mask2.addComponent(cc.Mask);
        _Mask2.type = cc.Mask.Type.IMAGE_STENCIL;
        _Mask2.spriteFrame = window.di;
        _Mask2.inverted = false;


        item2.addChild(Mask2);
        GameBox2.addChild(item2);
        const GameBox = new cc.Node();
        GameBox.addChild(GameBox1);
        GameBox.addChild(GameBox2);
        GameBox.y = -500;
        YYGplatform.GameBox = GameBox;
        node.addChild(GameBox);
        console.log("AdNode: ", [GameBox1, GameBox2])
        return GameBox;
    }
    const addAd = (AdNode1, AdNode2) => {
        let indexArray = [];
        for (let i = 0; i < 12; i++) {
            indexArray.push(i);
        }

        const index1 = indexArray[Math.floor(Math.random() * 12)];
        indexArray.splice(index1, 1);
        const Mask1 = cc.find("item/Mask", AdNode1)
        const btn1 = new cc.Node();
        Mask1.addChild(btn1);
        const yad1 = btn1.addComponent(cc.Sprite);
        yad1.sizeMode = 0;
        yad1.spriteFrame = new cc.SpriteFrame(barArray[index1]);
        btn1.width = Adwidth;
        btn1.height = Adheight;
        btn1.addComponent(cc.Button),
            btn1.on("click", function () {
                YYGGames.navigate("MainMenu", "MORE", _forgames[index1].id);
            })




        const index2 = indexArray[Math.floor(Math.random() * 11)];
        const Mask2 = cc.find("item2/Mask2", AdNode2)
        const btn2 = new cc.Node();
        Mask2.addChild(btn2);
        const yad2 = btn2.addComponent(cc.Sprite);
        yad2.sizeMode = 0;
        yad2.spriteFrame = new cc.SpriteFrame(barArray[index2]);
        btn2.width = Adwidth;
        btn2.height = Adheight;
        btn2.addComponent(cc.Button),
            btn2.on("click", function () {
                YYGGames.navigate("MainMenu", "MORE", _forgames[index2].id);
            })


    }


    const initGameBanner = (node) => {
        const Banner = getGameBanner(node);
        if (isSpeacial) {
            Banner.active = 0;
            return;
        }
        canScroll = true;
        var GameBanner = cc.find("New ScrollView", Banner)
        btnArray = []
        for (let i = 0; i < 12; i++) {
            var itemTemplate = cc.find("view/content/item", GameBanner)
            var content = cc.find("view/content", GameBanner)
            var o = cc.instantiate(itemTemplate);
            o.x = 10 + 170 * i;
            var Mask = cc.find("Mask", o)
            const btn = new cc.Node();
            const __yad = btn.addComponent(cc.Sprite);
            __yad.sizeMode = 0;
            __yad.spriteFrame = new cc.SpriteFrame(barArray[i]);
            btn.width = Adwidth;
            btn.height = Adheight;
            Mask.addChild(btn);

            btnArray.push(btn);
            MaskArray.push(Mask);


            content.addChild(o)
        }
        console.log("btnArray: ", btnArray)
        for (let i = 0; i < btnArray.length; i++) {
            btnArray[i].addComponent(cc.Button);
            btnArray[i].on("click", function () {
                console.log("btnArray[i]", i)
                YYGGames.navigate("MainMenu", "MORE", _forgames[i].id);
            })
            btnArray[i].on('mouseenter', function () {
                if (MaskArray.length != 0) {
                    canScroll = false;
                    MaskArray[i].scaleX = 1.1;
                    MaskArray[i].scaleY = 1.1;
                }
            })
            btnArray[i].on('mouseleave', function () {
                if (MaskArray.length != 0) {
                    canScroll = true;
                    MaskArray[i].scaleX = 1;
                    MaskArray[i].scaleY = 1;
                }
            })

            const canvas = document.getElementById('GameCanvas')
            if (canvas) {
                canvas.addEventListener("mouseout", function (e) {
                    if (MaskArray.length != 0) {
                        canScroll = true;
                        MaskArray[i].scaleX = 1;
                        MaskArray[i].scaleY = 1;
                    }

                })
            }
        }
        BannerScrollid = setInterval(() => { BannerScroll(content) }, 1);


    }

    const getGameBanner = (node) => {
        const GameBanner = new cc.Node();
        GameBanner.name = "GameBanner";
        GameBanner.width = 1405;
        GameBanner.height = 185;
        GameBanner.anchorX = GameBanner.anchorY = 0;
        GameBanner.x = -702.5;
        GameBanner.y = -610;

        const NewScrollView = new cc.Node();
        NewScrollView.name = "New ScrollView";
        NewScrollView.width = 1405;
        NewScrollView.height = 185;
        NewScrollView.anchorX = NewScrollView.anchorY = 0;
        NewScrollView.x = NewScrollView.y = 0;
        const di = NewScrollView.addComponent(cc.Sprite);
        di.sizeMode = 0;
        di.spriteFrame = window.di2;
        const view = new cc.Node();
        view.name = "view";
        view.width = 1405;
        view.height = 185;
        view.anchorX = view.anchorY = 0;
        view.x = view.y = 0;
        const content = new cc.Node();
        content.name = "content";
        content.width = 1405;
        content.height = 185;
        content.anchorX = content.anchorY = 0;
        content.x = content.y = 0;
        const item = new cc.Node();
        item.name = "item";
        item.anchorX = item.anchorY = 0;
        item.x = 10;
        item.y = 20;
        item.width = 145;
        item.height = 145;
        const Mask = new cc.Node();
        Mask.x = 72.5;
        Mask.y = 72.5;
        Mask.width = 145;
        Mask.height = 145;
        Mask.name = "Mask";
        node.addChild(GameBanner)
        GameBanner.addChild(NewScrollView);
        NewScrollView.addChild(view);
        view.addChild(content);
        content.addChild(item);
        item.addChild(Mask);
        const _Mask = Mask.addComponent(cc.Mask);
        _Mask.type = cc.Mask.Type.IMAGE_STENCIL;
        _Mask.spriteFrame = window.di;
        _Mask.inverted = false;
        YYGplatform.GameBanner = GameBanner;
        return GameBanner;
    }
    const BannerScroll = (content) => {
        // console.log("GameBanner",GameBanner)
        if (content && content.children) {
            if (canScroll) {
                if (content.x > -(content.width - stageWidth / 2 - 50)) {
                    content.x -= 0.5;
                }
                else {
                    content.x = 0;
                }
            }
        }
    }
    const removeBanner = () => {
        MaskArray = []
        canScroll = false;
        clearInterval(BannerScrollid)
    }
    const showInterstitial = (e) => {
        YYGGames.showInterstitial(e)
    }
    const showReward = (com) => {
        if (!YYGGames.rewardReady) {
            YYGGames.showTip("No Available Video");
            com.rewardDismissed && com.rewardDismissed()
            return;
        }
        YYGGames.showReward(
            {
                rewardComplete: () => {
                    com&&com();
    
                }
                ,
                rewardDismissed: () => {
                    YYGGames.showTip("Pls watch the ad completely, so that you can claim your reward");    
                }
            }
        );
    }




    const init = (fun) => {
        cc.loader.load("https://h5gamessdk.yyggames.com/sdk/res/di1.png", (e, t1) => {
            if (e) {
                return;
            }
            cc.loader.load("https://h5gamessdk.yyggames.com/sdk/res/di2.png", (e, t2) => {
                if (e) {
                    return;
                }
                window.di = new cc.SpriteFrame(t1);
                window.di2 = new cc.SpriteFrame(t2);
                var url = "cnf.json"
                var request = new XMLHttpRequest();
                request.open("get", url);
                request.send(null);
                request.onload = function () {
                    if (request.status == 200) {
                        var json = JSON.parse(request.responseText);
                        console.info("%c cnf: ", "background:#a8edcc", json)
                        dataCnf = json;
                    }
                    if (WebName != "FreeGames") {
                        YYGinit(fun);
                    }
                    else {
                        Freeinit(fun);
                    }
                }

            })
        })



    };

    const YYGinit = (fun) => {
        updateTitle(dataCnf.appName);
        addStyle();
        addScript("https://h5gamessdk.yyggames.com/sdk/YYGGames.js", function () {
            YYGGames.init(
                {
                    appName: dataCnf.appID,
                    channel: WebIndex,
                    config: {
                        gamedistributionId: dataCnf.gamedistributionId,
                        gamemonetizeId: dataCnf.gamemonetizeId,
                    },

                    complete: () => {
                        window["showMetheAuthor"] = function () {
                            const iframe = document.createElement("iframe");
                            iframe.style.display = 'none';
                            document.head.appendChild(iframe);
                            const logger = iframe.contentWindow["console"];
                            logger.log.apply(this, [
                                "%c %c %c YYGGAMES %c%s %c %c ",
                                "background: #fb8cb3",
                                "background: #d44a52",
                                "color: #ffffff; background: #871905",
                                "color: #ffffff;background: #871905;",
                                '116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103'
                                    .split(",").map(iter => { return String.fromCharCode(~~iter) }).join(""),
                                "background: #d44a52",
                                "background: #fb8cb3"]);
                        }

                        if (document.getElementById("AdTip")) {
                            YYGGames.showTip = function (context, duration) {
                                duration = isNaN(duration) ? 2000 : duration;
                                document.getElementById("AdTip").innerHTML = context;
                                document.getElementById("AdTip").style.display = "";
                                setTimeout(function () {
                                    document.getElementById("AdTip").style.display = "none";
                                }, duration);
                            };
                        }

                        var url = location.href;
                        if (YYGGames.moreGameEnabled && url.indexOf("gamedistribution.c") == -1 && url.indexOf("gamemonetize.c") == -1) {
                            moreGameEnable(fun);
                        }
                        else {
                            isSpeacial = true;
                            fun();
                        }
                    }
                });
        });
    }
    const Freeinit = (fun) => {
        updateTitle(dataCnf.appName);
        addStyle();
        addFreeScript("https://www.freegames.com/forgame/FreeGames.js", function () {
            FreeGames.init(
                dataCnf.appID, () => {
                    window["showMetheAuthor"] = function () {
                        const iframe = document.createElement("iframe");
                        iframe.style.display = 'none';
                        document.head.appendChild(iframe);
                        const logger = iframe.contentWindow["console"];
                        logger.log.apply(this, [
                            "%c %c %c YYGGAMES %c%s %c %c ",
                            "background: #fb8cb3",
                            "background: #d44a52",
                            "color: #ffffff; background: #871905",
                            "color: #ffffff;background: #871905;",
                            '116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103'
                                .split(",").map(iter => { return String.fromCharCode(~~iter) }).join(""),
                            "background: #d44a52",
                            "background: #fb8cb3"]);
                    }

                    if (document.getElementById("AdTip")) {
                        YYGGames.showTip = function (context, duration) {
                            duration = isNaN(duration) ? 2000 : duration;
                            document.getElementById("AdTip").innerHTML = context;
                            document.getElementById("AdTip").style.display = "";
                            setTimeout(function () {
                                document.getElementById("AdTip").style.display = "none";
                            }, duration);
                        };
                    }

                    var url = location.href;
                    if (YYGGames.moreGameEnabled) {
                        moreGameEnable(fun);
                    }
                    else {
                        isSpeacial = true;
                        fun();
                    }
                });
        });
    }
    const moreGameEnable = (fun) => {
        isSpeacial = false;
        addicon(WebName);
        const forgames = YYGGames.forgames.slice();
        console.log("forgames", forgames)
        if (forgames.length > 1) {
            forgames.sort(() => 0.5 - Math.random());
            _forgames = forgames;
            const loadArray = () => {
                cc.loader.load(forgames[index].thumb, (e, t) => {
                    if (e) {
                        return;
                    }
                    barArray.push(t);
                    index++;
                    if (index < forgames.length) {
                        loadArray();
                    }
                    else {
                        fun && fun();
                    }
                })
            }
            loadArray();
        }
    }

    return {
        init: init,
        //GameBanner
        initGameBanner: initGameBanner,
        //GameBox
        initGameBox: initGameBox,
        //移除GameBanner
        removeBanner: removeBanner,
        showInterstitial: showInterstitial,
        showReward: showReward
    }
})();