function CInterface() {
    var _pStartPosAudio;
    var _pStartPosExit;
    var _pStartPosRestart;
    var _pStartPosFullscreen;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _oAudioToggle;
    var _oButFullscreen;
    var _oButExit;
    var _oButRestart;
    var _oAreYouSurePanel;
    var _oPlayerTurnPanel;
    var _oPieceTurn;
    var _oTurnText;
    var _oStateText;

    this._init = function () {
        var oSpriteExit = s_oSpriteLibrary.getSprite('but_exit');
        
        _pStartPosExit = {x: CANVAS_WIDTH - oSpriteExit.width/2 - 20, y: (oSpriteExit.height / 2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSpriteExit,s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        this.initTurnDisplay();
        this.initStateDisplay();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            
            _pStartPosAudio = {x: _pStartPosExit.x - oSpriteExit.width/2 - oSprite.width/4, y: _pStartPosExit.y};
            
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive,s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            _pStartPosFullscreen = {x:20 + oSprite.width/4,y:(oSprite.height / 2) + 10};
            _pStartPosRestart = {x: _pStartPosAudio.x - oSprite.width/2, y:_pStartPosAudio.y};
        }else{
            _pStartPosFullscreen = {x: _pStartPosExit.x - oSpriteExit.width - 10, y: _pStartPosExit.y};
            _pStartPosRestart = {x: _pStartPosFullscreen.x, y: _pStartPosFullscreen.y};
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && inIframe() === false){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        _oButRestart = new CGfxButton(_pStartPosRestart.x, _pStartPosRestart.y, s_oSpriteLibrary.getSprite("but_restart_small"),s_oStage);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };
    
    this.initStateDisplay = function(){
        _oStateText = new createjs.Text(TEXT_STATE0," 36px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oStateText.x = CANVAS_WIDTH_HALF;
        _oStateText.y = CANVAS_HEIGHT_HALF - 280;
        _oStateText.textAlign = "center";
        _oStateText.textBaseline = "alphabetic";
        s_oStage.addChild(_oStateText);
    };
    
    this.changeStateDisplay = function(iValue){
        switch (iValue) {
            case 0:
                _oStateText.text = TEXT_STATE0;
                break;
            case 1:    
                _oStateText.text = TEXT_STATE1;
                break;
            case 2:
                _oStateText.text = TEXT_STATE2;
                break;
        };
    };
    
    this.initTurnDisplay = function(){
        var oSprite = s_oSpriteLibrary.getSprite('player_turn_panel');
        _oPlayerTurnPanel = createBitmap(oSprite);
        _oPlayerTurnPanel.regX = oSprite.width/2;
        _oPlayerTurnPanel.regY = oSprite.height/2;
        _oPlayerTurnPanel.x = CANVAS_WIDTH_HALF;
        _oPlayerTurnPanel.y = 1050;
        s_oStage.addChild(_oPlayerTurnPanel);
        
        var iOffset = 150;
        var iScale = 0.7;
        
        var data = {
            images: [s_oSpriteLibrary.getSprite('piece0'),
                     s_oSpriteLibrary.getSprite('piece1'),],
            frames: {width: 100, height: 100},
            animations: { white: [0,4, 'white'],
                          black: [5,9, 'black'] },
            framerate: 6
        };        
        var oSpriteSheet = new createjs.SpriteSheet(data);
        _oPieceTurn = createSprite(oSpriteSheet, 'white', 0, 0, 100, 100);
        _oPieceTurn.regX = _oPieceTurn.regY = 50;
        _oPieceTurn.x = CANVAS_WIDTH_HALF + iOffset;
        _oPieceTurn.y = _oPlayerTurnPanel.y;
        _oPieceTurn.scaleX = _oPieceTurn.scaleY = iScale;
        s_oStage.addChild(_oPieceTurn);
        
        _oTurnText = new createjs.Text(TEXT_TURN," 36px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oTurnText.x = CANVAS_WIDTH_HALF - 170;
        _oTurnText.y = _oPieceTurn.y + 10;
        _oTurnText.textAlign = "left";
        _oTurnText.textBaseline = "alphabetic";
        s_oStage.addChild(_oTurnText);
    };

    this.changeTurn = function(iTurn){
        var aAnimations = ["white","black"];
        _oPieceTurn.gotoAndPlay(aAnimations[iTurn]);
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y + iNewY);
        }
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX,_pStartPosFullscreen.y + iNewY);
        }
        _oButExit.setPosition(_pStartPosExit.x - iNewX, _pStartPosExit.y + iNewY);
        _oButRestart.setPosition(_pStartPosRestart.x - iNewX, _pStartPosRestart.y + iNewY);
    };

    this.unload = function () {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.unload();
        }
        
        _oButRestart.unload();
        _oButExit.unload();
        s_oInterface = null;
        s_oGame._bDisableEvents = false;
    };
    
    this.gameOver = function(iScore){
        new CEndPanel(iScore);
    };
    
    this.showWin = function(iPlayers, iWinnerPlayer){
        new CWinPanel(iPlayers, iWinnerPlayer);
    };
    
    this._onExit = function () {
        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);
        s_oGame._bDisableEvents = true;
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };


    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
            _fCancelFullScreen.call(window.document);
	}else{
            _fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    
    this.resetFullscreenBut = function(){
	_oButFullscreen.setActive(s_bFullscreen);
    };

    this._onRestart = function(){
        s_oGame.restart();
    };
    
    s_oInterface = this;

    this._init();

    return this;
}

var s_oInterface = null;