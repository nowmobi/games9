function CSquare(iPos) {
    var _oThis;
    var _oSquare;
    var _oHighlight;
    var _oRedHighlight;

    var _iPos = iPos;
    var _iPlayer;
    
    var _bOccupied;

    this._init = function(){
        _bOccupied = false;
        
        // CREATE AN INVISIBLE SHAPE
        _oSquare = new createjs.Shape();
        _oSquare.graphics.beginFill("#ff0000").drawRect(0, 0, 50, 50);
        _oSquare.regX = _oSquare.regY = 25;
        _oSquare.x = BOARD_COORDS[_iPos][0];
        _oSquare.y = BOARD_COORDS[_iPos][1];
        _oSquare.alpha = 0.01;
        _oSquare.on("pressup", this.onClicked);
        s_oStage.addChild(_oSquare);

        // CREATE AN HIGHLIGHT FOR FREE SQUARES
        _oHighlight = createBitmap(s_oSpriteLibrary.getSprite('highlight'))
        _oHighlight.regX = _oHighlight.regY = 71;
        _oHighlight.x = BOARD_COORDS[_iPos][0];
        _oHighlight.y = BOARD_COORDS[_iPos][1];
        _oHighlight.scaleX = _oHighlight.scaleY = 0.3;
        _oHighlight.alpha = 1;
        s_oStage.addChild(_oHighlight);

        // CREATE A RED HIGHLIGHT
        _oRedHighlight = createBitmap(s_oSpriteLibrary.getSprite('removable'))
        _oRedHighlight.regX = _oRedHighlight.regY = 71;
        _oRedHighlight.x = BOARD_COORDS[_iPos][0];
        _oRedHighlight.y = BOARD_COORDS[_iPos][1];
        _oRedHighlight.scaleX = _oRedHighlight.scaleY = 0.5;
        s_oStage.addChild(_oRedHighlight);
        
        this.setRedHighlightVisible(false);

        new createjs.Tween.get(_oHighlight, {loop:true})
            .to({scaleX : 0.1, scaleY : 0.1, alpha : 0}, 1500, createjs.Ease.quadIn)
            .to({scaleX : 0.3, scaleY : 0.3, alpha : 1}, 1500, createjs.Ease.quadIn);
    
        if (_bOccupied === false) {
            if (!s_bMobile) {
                _oSquare.cursor = "pointer";
            };
        };
    };
    
    this.setHighlightVisible = function(bValue){
        _oHighlight.visible = bValue;        
    };
    
    this.setRedHighlightVisible = function(bValue){
        _oRedHighlight.visible = bValue;
    };
    
    this.getX = function(){
        return _oSquare.x;
    };

    this.getY = function(){
        return _oSquare.y;
    };

    this.onClicked = function(){
        s_oGame.movePieceOnSquare(_oThis);
    };
 
    this.isOccupied = function(){
        return _bOccupied;
    };
 
    this.getPlayer = function(){
        if (_iPlayer === undefined || _iPlayer === null) {
            return null;
        } else {
            return _iPlayer;
        };
    };

    this.getPosition = function(){
        return _iPos;
    };

    this.setOccupied = function(bValue, iPlayer){
        _bOccupied = bValue;
        _iPlayer = iPlayer;
    };
    
    _oThis = this;

    this._init();
}