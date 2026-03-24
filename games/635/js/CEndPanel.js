function CEndPanel(oParent){
    var _oParent;
    var _oMainContainer;
    var _oContainer;
    var _oFade;
    var _oMsgBox;
    var _oMsgText;
    var _oMsgText2;
    var _oScoreText;
    var _oButRestart;
    var _oButHome;
    var _oListenerDown;

    this._init = function(){
        _oParent = oParent;
        
        _oMainContainer = new createjs.Container();    
        _oMainContainer.visible = false;
        _oParent.addChild(_oMainContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("rgba(0,0,0,1)").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oListenerDown = _oFade.on("click",function(){});
        _oMainContainer.addChild(_oFade);
        
        _oContainer = new createjs.Container();
        _oMainContainer.addChild(_oContainer);
        
        var oSpriteMsgBox = s_oSpriteLibrary.getSprite('msg_box');
        _oMsgBox = createBitmap(oSpriteMsgBox);
        _oMsgBox.regX = oSpriteMsgBox.width * 0.5;
        _oMsgBox.regY = oSpriteMsgBox.height * 0.5;
        _oMsgBox.x = CANVAS_WIDTH_HALF;
        _oMsgBox.y = CANVAS_HEIGHT_HALF;
        _oContainer.addChild(_oMsgBox);

        _oMsgText = new createjs.Text(" "," 36px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oMsgText.x = CANVAS_WIDTH_HALF;
        _oMsgText.y = CANVAS_HEIGHT_HALF - 150;
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 600;      
        _oContainer.addChild(_oMsgText);
        
        _oMsgText2 = new createjs.Text(" "," 36px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oMsgText2.x = CANVAS_WIDTH_HALF;
        _oMsgText2.y = CANVAS_HEIGHT_HALF - 50;
        _oMsgText2.textAlign = "center";
        _oMsgText2.textBaseline = "alphabetic";
        _oMsgText2.lineWidth = 600;
        _oContainer.addChild(_oMsgText2);

        _oScoreText = new createjs.Text(TEXT_SCORE + ": " + " "," 36px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oScoreText.x = CANVAS_WIDTH_HALF;
        _oScoreText.y = CANVAS_HEIGHT_HALF + 50;
        _oScoreText.textAlign = "center";
        _oScoreText.textBaseline = "alphabetic";
        _oScoreText.lineWidth = 600;
        _oContainer.addChild(_oScoreText);

        var iButtonY = CANVAS_HEIGHT_HALF+150;
        var iOffsetX = 150;

        var oSpriteRestart = s_oSpriteLibrary.getSprite('but_restart');
        _oButRestart = CGfxButton(CANVAS_WIDTH_HALF + iOffsetX, iButtonY, oSpriteRestart,_oContainer);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);

        var oSpriteHome = s_oSpriteLibrary.getSprite('but_home');
        _oButHome = CGfxButton(CANVAS_WIDTH_HALF - iOffsetX, iButtonY, oSpriteHome,_oContainer);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onExit, this);
    };
    
    this.show = function(szMessage, _iMode, _iWinnerPlayer, _iScore){
        _oFade.alpha = 0;
        _oMsgText.text = szMessage;
        
        if (_iMode === MODE_HUMAN) {
            if (_iWinnerPlayer === WHITE_PLAYER) {
                _oMsgText2.text = TEXT_PLAYERWHITEWINS;
            } else {
                _oMsgText2.text = TEXT_PLAYERBLACKWINS;
            };
        } else {
            if (_iWinnerPlayer === WHITE_PLAYER) {
                _oMsgText2.text = TEXT_YOUWIN;
            } else {
                _oMsgText2.text = TEXT_YOULOSE;
            };
        };

        _oScoreText.text = TEXT_SCORE + ": " + _iScore;
        _oMainContainer.visible = true;
        _oContainer.visible = true;
        _oContainer.alpha = 0;
        
        createjs.Tween.get(_oFade)
            .to({alpha:0.5}, 500, createjs.Ease.quadIn);
        createjs.Tween.get(_oContainer)
            .to({alpha:1}, 1000, createjs.Ease.quadIn);
    };
    
    this.unload = function(){
        _oFade.off("click",_oListenerDown);
        _oMainContainer.visible = false;
    };
    
    this._onExit = function(){
        s_oEndPanel.unload();
        s_oMain.gotoMenu();
    };
    
    this._onRestart = function(){
        s_oEndPanel.unload();
        s_oGame.restart();
    };
    
    this._init();
    
    s_oEndPanel = this;
}

var s_oEndPanel;