function CMessagePopup(szText,oParentContainer){
    var _oMsg;
    var _oButOk;
    var _oThis = this;
    var _oContainer;
    var _oParentContainer;

    this._init = function (szText) {
        _oParentContainer = oParentContainer;
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);

        var oFade;

        oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        oFade.alpha = 0.5;

        oFade.on("click", function () {});

        _oContainer.addChild(oFade);

        var oSpriteBg = s_oSpriteLibrary.getSprite('msg_box2');
        var oBg = createBitmap(oSpriteBg);

        oBg.x = CANVAS_WIDTH_HALF;
        oBg.y = CANVAS_HEIGHT_HALF;
        oBg.regX = oSpriteBg.width * 0.5;
        oBg.regY = oSpriteBg.height * 0.5;
        _oContainer.addChild(oBg);

        _oMsg = new createjs.Text(szText, "26px " + PRIMARY_FONT, "#fff");
        _oMsg.x = CANVAS_WIDTH_HALF;
        _oMsg.y = CANVAS_HEIGHT_HALF - 50;
        _oMsg.textAlign = "center";
        _oMsg.textBaseline = "middle";
        _oMsg.lineWidth = 450;
        _oContainer.addChild(_oMsg);

        _oButOk = new CGfxButton(CANVAS_WIDTH_HALF, 810, s_oSpriteLibrary.getSprite('but_yes'), _oContainer);
        _oButOk.addEventListener(ON_MOUSE_UP, this._onButOk, this);
        
        _oContainer.y = 2000;
        
        new createjs.Tween.get(_oContainer)
            .to({y: 0}, 250, createjs.Ease.cubicOut);
    };

    this._onButOk = function () {
        _oThis.unload();
    };

    this.unload = function () {
        _oButOk.unload();
        _oParentContainer.removeChild(_oContainer);
    };
    
    this._init(szText);
}