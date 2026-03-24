function CPiece(iColour, iX, iY) {
    var _oPiece;
    var _oPieceSprite;
    var _oPieceHighlight;
    var _oRemovableHighlight;
    var _iColour = iColour;
    var _iSquare;
    
    var _iPieceSize = 100;

    this._init = function(){
        _iSquare = null;
        
        // INIT IN "VERTICAL" POSITION
        var data = {
            images: [s_oSpriteLibrary.getSprite('piece'+_iColour)],
            frames: {width: _iPieceSize, height: _iPieceSize},
            animations: { idle: [0,0, false],
                          flip: [0,4, 'flip'],
                          turn: [0,4, false] },
            framerate: 24
        };
        var oSpriteSheet = new createjs.SpriteSheet(data);
        _oPieceSprite = createSprite(oSpriteSheet, 'idle', 0, 0, _iPieceSize, _iPieceSize);
        _oPieceSprite.rotation = 90;
        _oPieceSprite.regX = _oPieceSprite.regY = _iPieceSize/2;
        _oPieceSprite.x = iX;
        _oPieceSprite.y = iY;
        _oPieceSprite.scaleX = _oPieceSprite.scaleY = 0.5;
        _oPieceSprite.gotoAndStop(0);
        
        var oSprite = s_oSpriteLibrary.getSprite('highlight');
        _oPieceHighlight = createBitmap(oSprite);
        _oPieceHighlight.regX = oSprite.width/2;
        _oPieceHighlight.regY = oSprite.height/2;
        _oPieceHighlight.x = iX;
        _oPieceHighlight.y = iY;
        _oPieceHighlight.scaleX = _oPieceHighlight.scaleY = 0.5;
        _oPieceHighlight.visible = false;
        
        var oSprite = s_oSpriteLibrary.getSprite('highlight');
        _oRemovableHighlight = createBitmap(oSprite);
        _oRemovableHighlight.regX = oSprite.width/2;
        _oRemovableHighlight.regY = oSprite.height/2;
        _oRemovableHighlight.x = iX;
        _oRemovableHighlight.y = iY;
        _oRemovableHighlight.scaleX = _oRemovableHighlight.scaleY = 0.5;
        _oRemovableHighlight.visible = false;
        s_oStage.addChild(_oPieceSprite, _oPieceHighlight, _oRemovableHighlight);
    };
    
    this.getImage = function(){
        return _oPieceSprite;
    };

    this.getHighlight = function(){
        return _oPieceHighlight;
    };
    
    this.getRemovableHighlight = function(){
        return _oRemovableHighlight;
    };

    this.setHighlightVisible = function(bValue){
        _oPieceHighlight.visible = bValue;
    };

    this.setRemovableVisible = function(bValue){
        _oRemovableHighlight.visible = bValue;
    };

    this.setAnimationTop = function(){
        if (_oPieceSprite.currentAnimation === 'turn') {
            return;
        };
        
        _oPieceSprite.gotoAndPlay('turn');
    };
    
    this.unload = function(){                
        s_oStage.removeChild(_oPieceSprite, _oPieceHighlight, _oRemovableHighlight);
        _oPiece = null;
    };
    
    this.isMill = function(aSquares){
        var bMill = false;
        
        // IF THE PIECE IS NOT IN A MILL, RETURN FALSE
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            var aComb = SQUARES_COMBINATIONS[i];
            
            for (var j = 0; j < aComb.length; j++) {
                // FIND THE SQUARE COMBINATION WHERE THE PIECE IS
                if (aComb[j] === _iSquare) {
                    if (aSquares[aComb[0]].getPlayer() === _iColour &&
                        aSquares[aComb[1]].getPlayer() === _iColour &&
                        aSquares[aComb[2]].getPlayer() === _iColour) {
                        // IF THE PIECE IS IN A MILL, RETURN TRUE
                        bMill = true;
                        return true;
                    };
                };
            };
        };
        
        return bMill;
    };

    this.setSquare = function(value){
        _iSquare = value;
    };
    
    this.getSquare = function(){
        return _iSquare;
    };

    this.getX = function(){
        return _oPieceSprite.x;
    };

    this.getY = function(){
        return _oPieceSprite.y;
    };

    this.removeFromBoard = function(){
        // SET THE TILE INDEX ON TOP OF THE OTHERS
        s_oStage.setChildIndex(_oPieceSprite, s_oStage.getNumChildren()-1);
        
        _oPieceSprite.gotoAndPlay('flip');
        
        playSound("removepiece",1,0);
        new createjs.Tween.get(_oPieceSprite)
            .to({y: 0}, 1000, createjs.Ease.quadIn)
        new createjs.Tween.get(_oRemovableHighlight)
            .to({alpha: 0}, 200, createjs.Ease.quadIn)
        new createjs.Tween.get(_oPieceSprite)
            .to({alpha: 0}, 2000, createjs.Ease.quadIn)
            .call(function(){
                _oPiece.unload();
            });
    };
    
    _oPiece = this;

    this._init();
}