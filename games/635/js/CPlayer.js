function CPlayer(iColour) {
    var _iColour = iColour;
    var _iPieceOffsetX = 9;
    var _aOffsetX = [6, -7];
    var _iChipBoxStartX = PLAYERS_CHIPS_POSITION[_iColour] + _aOffsetX[_iColour];
    var _iChipBoxStartY = CANVAS_HEIGHT_HALF + 33;
    var _iMill;
    
    var _oChipBox;
    
    var _aPieces;
    var _aPiecesInBox;
    
    var _bMill;
    
    this._init = function () {
        // ADD A CHIP BOX FOR THE PLAYER'S PIECES
        var oSprite = s_oSpriteLibrary.getSprite('chipbox');
        _oChipBox = createBitmap(oSprite);
        _oChipBox.regX = oSprite.width/2;
        _oChipBox.regY = oSprite.height/2;
        _oChipBox.x = PLAYERS_CHIPS_POSITION[_iColour];
        _oChipBox.y = CANVAS_HEIGHT_HALF;
        s_oStage.addChild(_oChipBox);

        if (iColour === BLACK_PLAYER) {
            _oChipBox.scaleX = -1;
        };

        this.resetPlayer();        
    };
    
    this.initChips = function(){
        for (var i = 0; i < START_PIECES; i++) {
            var iX = _iChipBoxStartX;
            var iY = _iChipBoxStartY - (i * _iPieceOffsetX);
            var oPiece = new CPiece(_iColour, iX, iY);
            _aPiecesInBox.push(oPiece);
            _aPieces.push(oPiece);
        };
    };
    
    this.unload = function(){
        for (var i = 0; i < _aPieces.length; i++){
            _aPieces[i].unload();
        };
        
        for (var i = 0; i < _aPiecesInBox.length; i++){
            _aPiecesInBox[i].unload();
        };
    };
    
    this.resetPlayer = function(){
        _aPieces = [];
        _aPiecesInBox = [];
        _bMill = false;
        _iMill = 0;
        
        this.initChips();
    };
    
    this.setMill = function(bValue, iMill){
        _bMill = bValue;
        
        if (bValue === true) {
        // LIGHT UP THE FORMED MILL
            s_oGame.lightUpMills(iMill, bValue);
            _iMill = iMill;
        } else {
            s_oGame.lightUpMills(_iMill, bValue);
        };
    };
    
    this.isMill = function(){
        return _bMill;
    };
    
    this.removePieceFromBox = function(iPiece) {
        _aPiecesInBox.splice(iPiece, 1);
    };
    
    this.getPiecesBoxNumber = function(){
        return _aPiecesInBox.length;
    };

    this.getPiecesNumber = function(){
        return _aPieces.length;
    };

    this.removePiece = function(oPiece) {        
        var iPiece = _aPieces.indexOf(oPiece);
        _aPieces.splice(iPiece, 1);
        oPiece.removeFromBoard();
        
        for (var i = 0; i < _aPieces.length; i++) {
            _aPieces[i].setRemovableVisible(false);
        };
    };
    
    this.getPieces = function(){
        return _aPieces;
    };
    
    this.getBoxPieces = function(){
        return _aPiecesInBox;
    };
    
    this.movePiece = function(iPiece, oSquare, iSquarePos) {
        var iSquareX = oSquare.getX();
        var iSquareY = oSquare.getY();
        
        _aPieces[iPiece].setSquare(iSquarePos);
        var oPieceSprite = _aPieces[iPiece].getImage();
        var oPieceHighlight = _aPieces[iPiece].getHighlight();
        var oPieceRemovable = _aPieces[iPiece].getRemovableHighlight();
        _aPieces[iPiece].setAnimationTop();
        
        // SET THE TILE INDEX ON TOP OF THE OTHERS
        s_oStage.setChildIndex( oPieceSprite, s_oStage.getNumChildren()-1);
        
        new createjs.Tween.get(oPieceSprite)
            .to({x: iSquareX, y: iSquareY}, PIECE_MOVEMENT_SPEED, createjs.Ease.cubicOut);
        new createjs.Tween.get(oPieceRemovable)
            .to({x: iSquareX, y: iSquareY}, PIECE_MOVEMENT_SPEED, createjs.Ease.cubicOut);
        new createjs.Tween.get(oPieceHighlight)
            .to({x: iSquareX, y: iSquareY}, PIECE_MOVEMENT_SPEED, createjs.Ease.cubicOut)
            .call(function(){
                playSound("piece",1,0);
                s_oGame.piecePlaced(oSquare);
                s_oGame.setPlayerSelection(false);
            });
    };
    
    this.movePieceToAnotherSquare = function(oPiece, oSquare, iSquarePos) {
        var iSquareX = oSquare.getX();
        var iSquareY = oSquare.getY();
        
        oPiece.setSquare(iSquarePos);
        var oPieceSprite = oPiece.getImage();
        var oPieceHighlight = oPiece.getHighlight();
        var oPieceRemovable = oPiece.getRemovableHighlight();
        
        new createjs.Tween.get(oPieceSprite)
            .to({x: iSquareX, y: iSquareY}, 500, createjs.Ease.cubicOut);
        new createjs.Tween.get(oPieceRemovable)
            .to({x: iSquareX, y: iSquareY}, 500, createjs.Ease.cubicOut);
        new createjs.Tween.get(oPieceHighlight)
            .to({x: iSquareX, y: iSquareY}, 500, createjs.Ease.cubicOut)
            .call(function(){
                playSound("piece",1,0);
            });
    };

    s_oPlayer = this;
    
    this._init();
}

var s_oPlayer;