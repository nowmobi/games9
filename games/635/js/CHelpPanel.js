function CHelpPanel(){
    var _oTextTitle;
    var _oText1;
    var _oText2;
    var _oText3;
    var _oText4;
    var _oHelpBg;
    var _oGroup;
    var _oFade;
    var _oButExit;
    var _oAudioToggle;
    var _oButFullscreen;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
   
    var _pStartPosAudio;
    var _pStartPosExit;
    var _pStartPosFullscreen;
    
    this._init = function(){
        _oGroup = new createjs.Container();
        s_oStage.addChild(_oGroup);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;}); 
        
        var _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_end_panel'));
        _oGroup.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        _oHelpBg = createBitmap(oSprite);
        _oHelpBg.regX = oSprite.width/2;
        _oHelpBg.regY = oSprite.height/2;
        _oHelpBg.x = CANVAS_WIDTH_HALF;
        _oHelpBg.y = CANVAS_HEIGHT_HALF;
        
        var pTextPos = {x: CANVAS_WIDTH_HALF, y: CANVAS_HEIGHT_HALF};
        
        _oTextTitle = new createjs.Text(TEXT_HELP_TITLE," 40px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oTextTitle.textAlign = "center";
        _oTextTitle.lineWidth = 530;
        _oTextTitle.textBaseline = "middle";
        _oTextTitle.x = pTextPos.x;
        _oTextTitle.y = pTextPos.y - 200;

        _oText1 = new createjs.Text(TEXT_HELP1," 24px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oText1.textAlign = "center";
        _oText1.lineWidth = 530;
        _oText1.textBaseline = "middle";
        _oText1.x = pTextPos.x ;
        _oText1.y = pTextPos.y - 110;

        _oText2 = new createjs.Text(TEXT_HELP2," 24px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oText2.textAlign = "center";
        _oText2.lineWidth = 530;
        _oText2.textBaseline = "middle";
        _oText2.x = pTextPos.x;
        _oText2.y = pTextPos.y - 15;

        _oText3 = new createjs.Text(TEXT_HELP3," 24px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oText3.textAlign = "center";
        _oText3.lineWidth = 530;
        _oText3.textBaseline = "middle";
        _oText3.x = pTextPos.x;
        _oText3.y = pTextPos.y + 75;

        _oText4 = new createjs.Text(TEXT_HELP4," 24px "+PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        _oText4.textAlign = "center";
        _oText4.lineWidth = 530;
        _oText4.textBaseline = "middle";
        _oText4.x = pTextPos.x;
        _oText4.y = pTextPos.y + 170;

        _oGroup.addChild(_oHelpBg,_oTextTitle,_oText1,_oText2,_oText3,_oText4 );

        var oParent = this;
        _oGroup.on("pressup",function(){oParent._onExitHelp()});
        s_oGame._bDisableEvents = true;
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y:(oSprite.height / 2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite,s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        var oExitX = _pStartPosExit.x - oSprite.width/2 - oSprite.width/2;
        _pStartPosAudio = {x: oExitX, y:(oSprite.height / 2) + 10};
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive,s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
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
            _pStartPosFullscreen = {x:20 + oSprite.width/4,y:(oSprite.height / 2) + 10};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        
        if (!s_bMobile) {
            _oGroup.cursor = "pointer";
        };
    };

    this.unload = function(){
        s_oStage.removeChild(_oGroup);
        _oButExit.unload();
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.unload();
        }

        s_oGame._bDisableEvents = false;
        var oParent = this;
        _oGroup.off("pressup",function(){oParent._onExitHelp()});
        
        s_oHelpPanel = null;
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y + iNewY);
        }
        if (_fRequestFullScreen && inIframe() === false){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX,_pStartPosFullscreen.y + iNewY);
        }
    };
    
    this._onExit = function(){
        this.unload();
        s_oMain.gotoMenu();
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

    this._onExitHelp = function(){
        this.unload();
        s_oGame._onExitHelp();
    };

    s_oHelpPanel = this;
    
    this._init();
}

var s_oHelpPanel = null;