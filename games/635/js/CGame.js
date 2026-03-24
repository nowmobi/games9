function CGame(oData, iMode) {
    var _bStartGame;
    var _bGameReady;
    var _bDisableEvents;
    var _bWin;
    var _bAIremove;
    var _bAIcheck;
    var _bPlayerSelection;
    
    var _iMode;
    var _iTurn;
    var _iScore;
    var _iWinnerPlayer;
    var _iGameState;
    var _iTimerAI;
    
    var _oInterface;
    var _oBg;
    var _oBoard;
    var _oEndPanelContainer;
    var _oEndPanel;
    var _oHelpPanel;  
    var _oPlayerWhite;
    var _oPlayerBlack;
    var _oSelectedPiece;

    var _aSquares;
    var _aPlayers;
    var _aMillToForm;
    var _aSquaresToCheck;
    var _aMillLights;
     
    this._init = function(){        
        _aSquares = [];
        _aPlayers = [];
        _aMillLights = [];
        _iMode = iMode;
        
        this.resetVariables();
        
        // CREATE THE BACKGROUND
        var oSpriteBg = s_oSpriteLibrary.getSprite('bg_game');
        _oBg = createBitmap(oSpriteBg);
        _oBg.regX = oSpriteBg.width/2;
        _oBg.regY = oSpriteBg.height/2;
        _oBg.x = CANVAS_WIDTH_HALF;
        _oBg.y = CANVAS_HEIGHT_HALF;
        s_oStage.addChild(_oBg);
        
        var oSpriteBoard = s_oSpriteLibrary.getSprite('board');
        _oBoard = createBitmap(oSpriteBoard);
        _oBoard.regX = oSpriteBoard.width/2;
        _oBoard.regY = oSpriteBoard.height/2;
        _oBoard.x = CANVAS_WIDTH_HALF;
        _oBoard.y = CANVAS_HEIGHT_HALF;
        s_oStage.addChild(_oBoard);
        
        // CREATE MILLS LIGHTS
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            var oSpriteMill = s_oSpriteLibrary.getSprite('mill' + MILLS_LIGHT_INDEX[i]);
            var oMill = createBitmap(oSpriteMill);
            oMill.regX = oSpriteMill.width/2;
            oMill.regY = oSpriteMill.height/2;
            oMill.x = MILLS_LIGHT_X[i];
            oMill.y = MILLS_LIGHT_Y[i];
            oMill.rotation = MILLS_LIGHT_ROTATION[i];
            oMill.visible = false;
            _aMillLights.push(oMill);
            s_oStage.addChild(oMill);
            
            new createjs.Tween.get(oMill, {loop:true})
                .to({alpha: 0.5}, 1500, createjs.Ease.quadIn)
                .to({alpha: 1}, 1500, createjs.Ease.quadIn);
        };
        
        // CREATE THE LOGIC SQUARES
        for (var i = 0; i < BOARD_COORDS.length; i++) {
            var oSquare = new CSquare(i);
            _aSquares.push(oSquare);
        };

        // CREATE THE PLAYERS
        _oPlayerWhite = new CPlayer(WHITE_PLAYER);
        _oPlayerBlack = new CPlayer(BLACK_PLAYER);
        _aPlayers = [_oPlayerWhite, _oPlayerBlack];

        _oInterface = new CInterface();

        // CREATE THE GAME OVER SCREEN FOR LATER USE
        _oEndPanelContainer = new createjs.Container();
        s_oStage.addChild(_oEndPanelContainer);
        _oEndPanel = new CEndPanel(_oEndPanelContainer);

        // CREATE THE HELP SCREEN (IF IT'S THE FIRST TIME PLAYING), OR GO TO GAME
        if (FIRST_GAME === true) {
            _oHelpPanel = new CHelpPanel();
        } else {
            this._onExitHelp();
        };        
    };
    
    this.resetVariables = function(){
        _aMillToForm = [];
        _aSquaresToCheck = [];

        _iTurn = WHITE_PLAYER;
        _iWinnerPlayer = WHITE_PLAYER;
        _iScore = 0;
        _iTimerAI = 0;

        _oSelectedPiece = null;
        _oHelpPanel = null;

        _bStartGame = false;
        _bGameReady = false;
        _bDisableEvents = false;
        _bWin = false;
        _bAIremove = false;
        _bAIcheck = false;
        _bPlayerSelection = false;
        
        for (var i = 0; i < _aMillLights.length; i++) {
            var oMill = _aMillLights[i];
            oMill.visible = false;
        };
    };
    
    this.checkAI = function(){
        switch(_iGameState) {
            // IN DISPOSITION STATE, PLAYERS PUT THE PIECES IN PLACE
            case GAME_STATE_DISPOSITION:
                s_oGame.placePieceAI();
                break;
            // IN REMOVING STATE, PLAYER CAN REMOVE A PIECE FROM THE OPPONENT
            case GAME_STATE_REMOVING:
                s_oGame.removePieceAI();
                break;
            // IN MOVEMENT STATE, PLAYERS MOVE THE PIECES TO FORM MILLS
            case GAME_STATE_MOVEMENT:
                _aSquaresToCheck = [];  // THIS ARRAY WILL BE USED TO CHECK ONLY THE USABLE SQUARES
                s_oGame.selectSquareToReachAI();
                break;
        };
    };

    this.generateRandomSquareToOccupy = function(iStartIndex){
        var iIndex = iStartIndex;
        if (iIndex === undefined) {
            iIndex = 0;
        };

        // FROM A SQUARES ARRAY, ORDERED BY PRIORITY, FIND THE FIRST AVAILABLE SQUARE
        var aSquaresPriority = [19,13,10,4,3,18,5,20,21,0,23,2,9,14,1,22,12,7,11,16,8,15,6,17];
        var i = aSquaresPriority[iIndex];
        
        while (_aSquares[i].isOccupied() === true){
            iIndex++;

            if (iIndex > aSquaresPriority.length) {
                this.checkForGameOver();
                break;
            };
            
            i = aSquaresPriority[iIndex];
        };
        
        return _aSquares[i];
    };
    
    this.getWhitePlayerSquare = function(){
        var aWhiteSquares = new Array;
        
        for (var i = 0; i < _aSquares.length; i++) {
            if (_aSquares[i].getPlayer() === WHITE_PLAYER) {
                var iSquarePosition = _aSquares[i].getPosition();
                aWhiteSquares.push(iSquarePosition);
            };
        };
        
        return aWhiteSquares;
    };

    this.checkNearPosition = function(aSquares){
        var aNearPositions = new Array;
        
        for (var i = 0; i < aSquares.length; i++) {
            var iWhitePosition = aSquares[i];

            // CHECK ALL THE POSSIBLE COMBINATIONS WHERE THIS SQUARE IS, TO FIND THE NEAR SQUARES
            for (var j = 0; j < SQUARES_COMBINATIONS.length; j++) {
                var aComb = SQUARES_COMBINATIONS[j];

                if (aComb.indexOf(iWhitePosition) > -1) {                        
                    for (var k = 0; k < aComb.length; k++){

                        var iNearSquare = aComb[k];

                        // AVOID THE SAME SQUARE
                        if (iNearSquare !== iWhitePosition){
                            // CHECK IF IT'S FREE
                            if (_aSquares[iNearSquare].isOccupied() === false){
                                // ADD TO THE ARRAY
                                if (this.checkIfArrayContainsObject(aNearPositions, iNearSquare) === false) {
                                    aNearPositions.push(iNearSquare);
                                };
                            };
                        };
                    };
                };
            };                
        };
            
        return aNearPositions;
    };
    
    this.findPossibleMills = function(aNearPositions){
        var aPossibleMills = new Array;
        
        // FOR EACH NEAR FREE SQUARE, CHECK TO FIND POSSIBLE FUTURE MILLS
        for (var i = 0; i < aNearPositions.length; i++) {
            var iNearSquare = aNearPositions[i];

            // ADD TO THE FUTURE MILLS ARRAY EVERY POSSIBLE MILL 
            // COMBINATION WHERE THAT SQUARE POSITION IS CONTAINED
            for (var j = 0; j < SQUARES_COMBINATIONS.length; j++) {
                var aComb = SQUARES_COMBINATIONS[j];
                var iIndex = aComb.indexOf(iNearSquare);

                if (iIndex > -1){
                    if (this.checkIfArrayContainsObject(aPossibleMills, aComb) === false) {
                        aPossibleMills.push(aComb);
                    };
                };
            };
        };
        
        return aPossibleMills;
    };

    this.lightUpMills = function(iIndex, bValue){
        var oMill = _aMillLights[iIndex];
        oMill.visible = bValue;
    };

    this.findFutureMills = function(aPossibleMills, aWhiteSquares){
        var aFutureMills = new Array;
                
        // CHECK WHAT POSSIBLE MILLS CAN BE CREATED WITH THE SAME SQUARE
        for (var i = 0; i < aPossibleMills.length; i++) {
            var aMill = aPossibleMills[i];

            for (var j = 0; j < aWhiteSquares.length; j++) {
                if (this.checkIfArrayContainsObject(aMill, aWhiteSquares[j]) === true) {
                    if (this.checkIfArrayContainsObject(aFutureMills, aMill) === false) {
                        aFutureMills.push(aMill);
                    };
                };
            };
        };
        
        return aFutureMills;
    };

    this.findCommonPosition = function(aFutureMills){
        var oSquare = null;
        
        for (var i = 0; i < aFutureMills.length -1; i++) {
            // CHECK FOR A COMMON POSITION IN THE FUTURE MILLS ARRAY
            var aArray1 = aFutureMills[i];
            var aArray2 = aFutureMills[i+1];
            var iCommonPosition = this.findSameValueInTwoArrays(aArray1, aArray2);

            if (iCommonPosition === undefined || iCommonPosition === null) {
                oSquare = null;
            } else {
                oSquare = _aSquares[iCommonPosition];

                // CHECK IF IT'S OCCUPIED
                if (oSquare === undefined || oSquare.isOccupied() === true) {
                    oSquare = null;
                };
            };
            
            if (oSquare !== null) {
                return oSquare;
            };
        };
    };

    this.searchForMillsForming = function(){
        var oSquare = null;
        var aNearPositions = new Array;
        var aPossibleMills = new Array;
        var aFutureMills = new Array;
        var aWhiteSquares = new Array;
        
        // FIND ALL THE WHITE SQUARES' POSITIONS
        aWhiteSquares = this.getWhitePlayerSquare();
        
        if (aWhiteSquares.length > 0) {
            // FOR EACH WHITE PIECE FOUND, CHECK THE NEAR SQUARES IF THEY'RE FREE
            aNearPositions = this.checkNearPosition(aWhiteSquares);

            // IF NO USABLE POSITION IS FOUND, RETURN NULL
            if (aNearPositions.length === 0) {
                oSquare = null;
            } else {
                aPossibleMills = this.findPossibleMills(aNearPositions);
                aFutureMills = this.findFutureMills(aPossibleMills, aWhiteSquares);                
                oSquare = this.findCommonPosition(aFutureMills);
            };
        } else {
            // IF NO WHITE PIECES IS FOUND, RETURN NULL
            oSquare = null;
        };
        
        if (oSquare === undefined) {
            oSquare = null;
        };
        
        return oSquare;        
    };
    
    this.checkIfArrayContainsObject = function(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        };
        
        return false;
    };

    this.findSameValueInTwoArrays = function(a, b) {
        var ai = 0, bi = 0;
        var result = [];

        while( ai < a.length && bi < b.length ) {
            if (a[ai] < b[bi]) {
                ai++;
            } else if (a[ai] > b[bi]) {
                bi++;
            // THEY'RE EQUAL
            } else {
                result.push(a[ai]);
                ai++;
                bi++;
            };
        };

        return result;
    };

    this.checkCombinationsOfMills = function(){
        var aPossibleMills = new Array;
        
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            var aComb = SQUARES_COMBINATIONS[i];
            var iCounter = 0;
            
            // CHECK IF THE COMBINATION IS A MILL IN CONSTRUCTION
            for (var j = 0; j < aComb.length; j++) {
                if (_aSquares[aComb[j]].getPlayer() === BLACK_PLAYER){
                    iCounter--;
                } else if (_aSquares[aComb[j]].getPlayer() === WHITE_PLAYER){
                    iCounter++;
                };
                
            };
            
            // IF IT IS, ADD TO THE ARRAY OF POSSIBLE MILLS TO BLOCK
            if (iCounter === 2){
                aPossibleMills.push(aComb);
                break;
            };
        };
        
        return aPossibleMills;
    };

    this.foundTwoMillsToBlock = function(aPossibleMills){
        var oSquare = null;
        
        // CHECK FOR POSSIBLE COMBINATIONS OF THE MILLS, TO BLOCK TWO MILLS AT ONCE
        var iDuplicate = null;
        var aComb1 = aPossibleMills[0];
        var aComb2 = aPossibleMills[1];

        for (var i = 0; i < aComb1.length; i++){
            var iIndex = aComb2.indexOf(aComb1[i]);
            if (iIndex > -1){
                iDuplicate = aComb2[i];
            };
        };

        // NO POSSIBLE COMBINATION
        if (iDuplicate === null){
            var aComb = aComb1;
        // IF A COMBINATION IS POSSIBLE, BLOCK BOTH THIS MILLS
        } else {
            var aComb = aComb2;
        };

        for (var i = 0; i < aComb.length; i++) {
            // FIND THE SQUARE TO BLOCK
            if (_aSquares[aComb[i]].isOccupied() === false) {
                oSquare = _aSquares[aComb[i]];
            };
        };
        
        return oSquare;
    };

    this.searchForMillsToBlock = function(){
        var oSquare = null;
        var aPossibleMills = new Array;
        
        aPossibleMills = this.checkCombinationsOfMills();
        
        // FOUND A MILL IN CONSTRUCTION
        if (aPossibleMills.length === 1) {
            var aComb = aPossibleMills[0];

            for (var i = 0; i < aComb.length; i++) {
                // FIND THE SQUARE TO BLOCK
                if (_aSquares[aComb[i]].isOccupied() === false) {
                    oSquare = _aSquares[aComb[i]];
                };
            };
        // FOUND NO MILL IN CONSTRUCTION
        } else if (aPossibleMills.length === 0) {
            oSquare = null;
        // FOUND MORE THAN ONE MILLS IN CONSTRUCTION
        } else {
            oSquare = this.foundTwoMillsToBlock(aPossibleMills);            
        };

        return oSquare;
    };
    
    this.checkPossibleCombinationsOfMills = function(){
        var aPossibleMills = new Array;
        
        // CREATE AN ARRAY OF THE POSSIBLE SQUARES TO CHECK, THAT LATER WILL BE REMOVED IF NOT USABLE
        if (_aSquaresToCheck.length === 0) {
            for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
                _aSquaresToCheck.push(SQUARES_COMBINATIONS[i]);
            };
        };
        
        for (var i = 0; i < _aSquaresToCheck.length; i++) {
            var aComb = _aSquaresToCheck[i];
            var iCounter = 0;
            
            // CHECK IF THE COMBINATION IS A MILL IN CONSTRUCTION
            for (var j = 0; j < aComb.length; j++) {
                switch (_aSquares[aComb[j]].getPlayer()){
                    case WHITE_PLAYER: 
                        iCounter--;
                        break;
                    default:
                        iCounter++;
                        break;
                };
                
                // IF IT IS, ADD TO THE ARRAY OF POSSIBLE MILLS TO FORM
                if (iCounter === 2){
                    aPossibleMills.push(aComb);
                    break;
                };
            };
        };
        
        return aPossibleMills;
    };
    
    this.searchForMillsToForm = function(){
        var oSquare = null;
        var aPossibleMills = new Array;
        
        aPossibleMills = this.checkPossibleCombinationsOfMills();

        // FOUND A MILL IN CONSTRUCTION
        if (aPossibleMills.length > 0){
            var aComb = aPossibleMills[0];
            _aMillToForm = aComb;
            
            for (var i = 0; i < aComb.length; i++) {
                // FIND THE SQUARE TO BLOCK
                if (_aSquares[aComb[i]].isOccupied() === false) {
                    oSquare = _aSquares[aComb[i]];
                };
            };
        // FOUND NO MILL IN CONSTRUCTION    
        } else if (aPossibleMills.length === 0){
            _aMillToForm = [];
            oSquare = null;
        };
        
        return oSquare;
    };

    this.placePieceAI = function(){
        var oSquare = null;
        
        // FIND A RANDOM, FREE SQUARE TO PLACE THE FIRST PIECE
        if (_aPlayers[WHITE_PLAYER].getPiecesBoxNumber() > 7) {
            oSquare = this.generateRandomSquareToOccupy();
        // ELSE, USE A STRATEGY
        } else {
            // CHECK FOR ANY POSSIBLE MILL TO BLOCK
            oSquare = this.searchForMillsToBlock();            
            
            // CHECK FOR ANY POSSIBLE FUTURE MILL (COMBINATIONS IN PROGRESS) TO BLOCK
            if (oSquare === null){
                oSquare = this.searchForMillsForming();

                // ELSE, TRY TO FORM A MILL, IF POSSIBLE
                if (oSquare === null){
                    oSquare = this.searchForMillsToForm();

                    // THIS WILL PREVENT THE SQUARE TO BE UNDEFINED
                    if (oSquare === null){
                        oSquare = this.generateRandomSquareToOccupy();
                    };
                };
            };
        };
        
        this.placePiece(oSquare);
    };
    
    this.checkPiecesToRemove = function(){
        var aOpponentPieces = [];        
        if (_iTurn === WHITE_PLAYER){
            aOpponentPieces = _aPlayers[BLACK_PLAYER].getPieces();
        } else {
            aOpponentPieces = _aPlayers[WHITE_PLAYER].getPieces();
        };

        for (var i = 0; i < aOpponentPieces.length; i++) {
            var bIsMill;
            var iCounter = 0;
            
            if (aOpponentPieces[i].isMill(_aSquares)) {
                // CHECK IF THERE ARE ONLY PIECES ON A MILL
                bIsMill = true;
                for (var j = 0; j < aOpponentPieces.length; j++) {
                    if (aOpponentPieces[j].isMill(_aSquares) === true){
                        iCounter++;
                    };
                    
                    if (iCounter === aOpponentPieces.length){
                        bIsMill = false;
                    };
                };

                // THEN SET THE HIGHTLIGHT VISIBLE OR NOT
                if (bIsMill === true) {
                    aOpponentPieces[i].setRemovableVisible(false);
                } else {
                    aOpponentPieces[i].setRemovableVisible(true);
                }
            } else {
                if (aOpponentPieces[i].getSquare() !== null) {
                    aOpponentPieces[i].setRemovableVisible(true);
                };                
            };
        };
    };

    this.findMillToBlock = function(){
        var aOpponentPieces = _aPlayers[WHITE_PLAYER].getPieces();
        var oPiece = null;
        
        // FIND IF THERE'S A MILL TO BLOCK, AND WHAT'S THE PIECE TO REMOVE TO FREE THE SQUARE
        for (var i = 0; i < aOpponentPieces.length; i++) {
            var iPosition = aOpponentPieces[i].getSquare;
            
            for (var j = 0; j < SQUARES_COMBINATIONS.length; j++) {
                var aComb = SQUARES_COMBINATIONS[j];
                var iIndex = aComb.indexOf(iPosition);
                
                switch(iIndex) {
                    case -1:
                        break;
                    case 0:
                        if (_aSquares[aComb[1]].getPlayer() === WHITE_PLAYER ||
                            _aSquares[aComb[2]].getPlayer() === WHITE_PLAYER ){
                            if (oPiece.getSquare() !== undefined){
                                oPiece = _aSquares[aComb[0]];
                            };
                        };
                        break;
                    case 1:
                        if (_aSquares[aComb[0]].getPlayer() === WHITE_PLAYER ||
                            _aSquares[aComb[2]].getPlayer() === WHITE_PLAYER ){
                            if (oPiece.getSquare() !== undefined){
                                oPiece = _aSquares[aComb[1]];
                            };
                        };
                        break;
                    case 2:
                        if (_aSquares[aComb[0]].getPlayer() === WHITE_PLAYER ||
                            _aSquares[aComb[1]].getPlayer() === WHITE_PLAYER ){
                            if (oPiece.getSquare() !== undefined){
                                oPiece = _aSquares[aComb[2]];
                            };
                        };
                        break;                    
                };
            };
        };
        
        return oPiece;
    };

    this.removePieceAI = function(){
        var aOpponentPieces = _aPlayers[WHITE_PLAYER].getPieces();
        var oPiece = null;
        oPiece = this.findMillToBlock();
        
        // SET A RANDOM PIECE TO REMOVE IF NO STRATEGY APPLIES
        if (oPiece === null){            
            oPiece = aOpponentPieces[Math.floor(Math.random()*aOpponentPieces.length)];
            
            // IF IT'S A PIECE FROM THE BOX, CAN'T BE USED
            while (oPiece.getSquare() === null){
                oPiece = aOpponentPieces[Math.floor(Math.random()*aOpponentPieces.length)];
            };
        };
        
        _aPlayers[WHITE_PLAYER].removePiece(oPiece);
        
        // IF THE PIECE MOVED WAS IN A MILL, RESET THE MILL CHECK
        if (oPiece.isMill(_aSquares) === true) {
            _aPlayers[WHITE_PLAYER].setMill(false);
        };
        
        var oSquare = this.foundPieceToRemove(oPiece);
    };
    
    this.foundPieceToRemove = function(oPiece){
        var oSquare;
        
        for (var i = 0; i < _aSquares.length; i++) {
            if (_aSquares[i].getPosition() === oPiece.getSquare()) {
                oSquare = _aSquares[i];                
            };
        };

        oSquare.setOccupied(false, null);

        if ( this.checkForMills() === true ) {
            this.changeState(GAME_STATE_REMOVING);
            if (_iMode === MODE_COMPUTER && _iTurn === BLACK_PLAYER) {
                _bAIremove = true;
            };
        } else {
            this.checkForGameOver();

            // IF THE DISPOSITION STATE IS OVER, PASS TO MOVEMENT STATE
            if (_aPlayers[BLACK_PLAYER].getPiecesBoxNumber() === 0) {
                this.changeState(GAME_STATE_MOVEMENT);
            } else {
                this.changeState(GAME_STATE_DISPOSITION);
                oSquare.setHighlightVisible(true);
            };
            this.changeTurn();
        };
        
        return oSquare;
    };
    
    this.findPieceToReachSquare = function(oSquare){
        var oPiece = null;
        
        if (oSquare === null || oSquare === undefined) {
            return null;
        };
        
        // DUPLICATE THE SQUARES_COMBINATIONS ARRAY TO MODIFY THE PRIORITY IN CHECKING
        var aCombinations = [];
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            aCombinations.push(SQUARES_COMBINATIONS[i]);
        };
        
        // IF IT'S A MILL TO FORM, REMOVE THE COMBINATION WE ARE WORKING ON
        if (_aMillToForm.length > 1) {
            var iIndex = aCombinations.indexOf(_aMillToForm);
            aCombinations.splice(iIndex, 1);
        };
        
        oPiece = this.findPieceToReachThisSquare(oSquare, aCombinations);

        // RETURN NULL IF THERE'S NO PIECE THAT CAN BE USED
        return oPiece;
    };
    
    this.findPieceToReachThisSquare = function(oSquare, aCombinations){
        var oPiece;
        var aPieces = _aPlayers[BLACK_PLAYER].getPieces();
        var iSquarePosition = oSquare.getPosition();
        
        // RANDOMIZE THE ARRAY TO CHANGE PRIORITY EACH TIME
        shuffle(aCombinations);
        
        for (var i = 0; i < aPieces.length; i++){
            var iPiecePosition = aPieces[i].getSquare();

            // CHECK IF EACH PIECE CAN REACH THE SQUARE WE NEED TO REACH
            for (var j = 0; j < aCombinations.length; j++) {
                var aComb = aCombinations[j];
                var iPieceIndex = aComb.indexOf(iPiecePosition);
                var iSquareIndex = aComb.indexOf(iSquarePosition);
                
                if (iPieceIndex > -1 && iSquareIndex > -1) {
                    if (iPieceIndex === 0 && iSquareIndex === 2) {
                        // CHECK IF THE MIDDLE SQUARE IS OCCUPIED
                        if (_aSquares[aComb[1]].isOccupied() === false) {
                            oPiece = aPieces[i];
                            _aMillToForm = [];
                            return oPiece;
                        };                    
                    } else if (iPieceIndex === 2 && iSquareIndex === 0) {
                        // CHECK IF THE MIDDLE SQUARE IS OCCUPIED
                        if (_aSquares[aComb[1]].isOccupied() === false) {
                            oPiece = aPieces[i];
                            _aMillToForm = [];
                            return oPiece;
                        };
                    } else {
                        oPiece = aPieces[i];
                        _aMillToForm = [];
                        return oPiece;
                    };
                } else {
                    oPiece = null;
                };
            };
        };
        
        return oPiece;
    };
    
    this.findCombinationsToReachOtherPieces = function(){
        var aCombinations = [];
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            aCombinations.push(SQUARES_COMBINATIONS[i]);
        };
        var aPossibleCombinations = [];
        
        for (var i = 0; i < aCombinations.length; i++) {
            var aComb = aCombinations[i];
            var iCounter = 0;
            
            // CHECK IF IN THAT COMBINATION THERE'S A PIECE OF THE SAME PLAYER
            for (var j = 0; j < aComb.length; j++) {
                if (_aSquares[aComb[j]].getPlayer() === BLACK_PLAYER){
                    iCounter++;
                } else if (_aSquares[aComb[j]].getPlayer() === WHITE_PLAYER){
                    iCounter--;
                };
                
                // IF IT IS, ADD TO THE ARRAY OF POSSIBLE MILLS TO BLOCK
                if (iCounter === 1){
                    aPossibleCombinations.push(aComb);
                    break;
                };
            };
        };
        
        return aPossibleCombinations;
    };
    
    this.reachOtherPieces = function(){
        var oSquare = null;
        var aPossibleCombinations = [];
        aPossibleCombinations = this.findCombinationsToReachOtherPieces();
        
        // FOUND SOME POSSIBLE SQUARES TO REACH
        if (aPossibleCombinations.length > 0){
            // RANDOMIZE THE ARRAY TO CHANGE PRIORITY EVERYTIME
            shuffle(aPossibleCombinations);
            var aComb = aPossibleCombinations[0];
            
            for (var i = 0; i < aComb.length; i++) {
                // FIND THE SQUARE TO REACH
                if (_aSquares[aComb[i]].isOccupied() === false) {
                    oSquare = _aSquares[aComb[i]];
                };
            };
        // FOUND NO POSSIBLE SQUARES TO REACH
        } else if (aPossibleCombinations.length === 0){
            oSquare = null;            
        };

        // RETURN NULL IF NO SQUARE IS POSSIBLE
        return oSquare;
    };
    
    this.checkRandomSquareToReach = function(){
        var oSquare = null;
        var aPossibleSquares = [];
        
        for (var i = 0; i < _aSquares.length; i++){
            if (_aSquares[i].isOccupied() === false){
                aPossibleSquares.push(_aSquares[i]);
            };
        };
        
        shuffle(aPossibleSquares);
        oSquare = aPossibleSquares[0];
        
        return oSquare;
    };
    
    this.selectSquareToReachAI = function(){
        var oSquare = null;
        var oPiece = null;

        // CHECK FOR MILLS TO FORM AND A PIECE TO REACH IT
        oSquare = this.searchForMillsToForm();
        oPiece = this.findPieceToReachSquare(oSquare);

        // ELSE, CHECK FOR OPPONENT MILLS TO BLOCK
        if (oSquare === null || oPiece === null){
            oSquare = this.searchForMillsToBlock();
            oPiece = this.findPieceToReachSquare(oSquare);
            
            // ELSE, CHECK FOR OTHER PIECES TO REACH (TO FORM MILLS LATER)
            if (oSquare === null || oPiece === null){
                oSquare = this.reachOtherPieces();
                oPiece = this.findPieceToReachSquare(oSquare);

                // IF NO PARTICULAR SQUARE IS FOUND, FIND A RANDOM SQUARE TO REACH
                if (oSquare === null || oPiece === null){
                    oSquare = this.checkRandomSquareToReach();
                    oPiece = this.findPieceToReachSquare(oSquare);
                };
            };
        };
        
        // IF THERE ARE NO MORE POSSIBILITIES (OR SO), CHECK FOR A "NO MOVEMENT LEFT" STATE
        if (_aSquaresToCheck.length === 0) {
            this.checkForNoMovement();
            return;
        };

        // IF THERE'S NO PIECE FOUND, RETRY AGAIN (WITH A DIFFERENT SQUARE)
        if (oPiece === null) {
            // REMOVE THE SQUARE FROM THE ARRAY, SO WE'LL NOT CHECK IT AGAIN
            var iIndex = _aSquaresToCheck.indexOf(oSquare.getPosition());
            _aSquaresToCheck.splice(iIndex, 1);
            
            this.checkForNoMovement();
            this.selectSquareToReachAI();
            return;
        } else {
            // FINALLY, MOVE THE SELECTED PIECE TO THE SELECTED SQUARE
            _oSelectedPiece = oPiece;
            var iStartingSquare = _oSelectedPiece.getSquare();
            this.realMovement(iStartingSquare, oSquare);
        };
    };

    this.movePieceOnSquare = function (oSquare){
        if (_bStartGame === false) {
            return;
        };
        
        // IF IN HUMAN VS CPU MODE AND IF THIS IS THE CPU TURN, RETURN
        if (_iMode === MODE_COMPUTER && _iTurn === BLACK_PLAYER) {
            return;
        };

        switch(_iGameState) {
            // IN DISPOSITION STATE, PLAYERS PUT THE PIECES IN PLACE
            case GAME_STATE_DISPOSITION:
                if (_bPlayerSelection === true) {
                    return;
                };
                _bPlayerSelection = true;
                this.placePiece(oSquare);
                break;
            // IN REMOVING STATE, PLAYER CAN REMOVE A PIECE FROM THE OPPONENT
            case GAME_STATE_REMOVING:
                this.removePiece(oSquare);
                break;
            // IN MOVEMENT STATE, PLAYERS MOVE THE PIECES TO FORM MILLS
            case GAME_STATE_MOVEMENT:        
                if (_oSelectedPiece === undefined || _oSelectedPiece === null) {
                    this.selectPiece(oSquare);
                } else {
                    this.movePieceToAnotherSquare(oSquare);
                };
                break;
        };
    };
    
    this.checkForNoPieces = function(){
        // IF A PLAYER HAS ONLY 2 PIECES, IT'S GAME OVER
        if (_aPlayers[WHITE_PLAYER].getPiecesNumber() === 2) {
            _iWinnerPlayer = BLACK_PLAYER;
            this._gameOver(TEXT_NOPIECE);
        };
            
        if (_aPlayers[BLACK_PLAYER].getPiecesNumber() === 2) {
            _iWinnerPlayer = WHITE_PLAYER;
            this._gameOver(TEXT_NOPIECE);
        };
    };

    this.checkForNoMovement = function(){
        // CHECK IF THERE'S NO MORE MOVEMENT POSSIBLE (GAME OVER)
        var iPossibilities = 0;
        var aPieces = _aPlayers[_iTurn].getPieces();
        
        for (var k = 0; k < aPieces.length; k++) {
            var iStartingSquare = aPieces[k].getSquare();
            for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
                var aComb = SQUARES_COMBINATIONS[i];
                var iIndex = aComb.indexOf(iStartingSquare);

                if (iIndex > -1) {
                    for (var j = 0; j < aComb.length; j++){
                        if (aComb[j] !== iStartingSquare){
                            if (_aSquares[aComb[j]].isOccupied() === false) {                            
                                iPossibilities++;

                                // ADD A CONTROL FOR SQUARES THAT MUST BE JUMPED
                                if (iIndex === 0 || iIndex === 2){
                                    if (aComb.indexOf(aComb[j]) === 0 || 
                                        aComb.indexOf(aComb[j]) === 2) {
                                        if (_aSquares[aComb[1]].isOccupied() === true) {
                                            iPossibilities--;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        
        if (iPossibilities <= 0){
            if (_iTurn === WHITE_PLAYER) {
                _iWinnerPlayer = BLACK_PLAYER;
            } else {
                _iWinnerPlayer = WHITE_PLAYER;
            };
            
            this._gameOver(TEXT_NOMOVEMENT);
        };
    };

    this.changeState = function(iState){
        _iGameState = iState;
        _oInterface.changeStateDisplay(iState);
        
        if (iState === GAME_STATE_MOVEMENT) {
            this.checkForNoMovement();
        };

        if (_iMode === MODE_HUMAN) {
            if (iState === GAME_STATE_REMOVING) {
                this.checkPiecesToRemove();
            };
        } else {
            if (iState === GAME_STATE_REMOVING && _iTurn === WHITE_PLAYER) {
                this.checkPiecesToRemove();
            };
        };

    };
    
    this.selectPiece = function(oSquare){
        if (oSquare.getPlayer() !== _iTurn || 
            oSquare.getPlayer() === null) {
            return;
        };
        
        var aPieces = _aPlayers[_iTurn].getPieces();
        for (var i = 0; i < aPieces.length; i++) {
            if (aPieces[i].getSquare() === oSquare.getPosition()) {
                this.setPieceSelected(aPieces[i]);
            };
        };
    };
    
    this.highlightPossibleSquares = function(){
        var iStartingSquare = _oSelectedPiece.getSquare();
        var iCounter = 0;
        
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            var aComb = SQUARES_COMBINATIONS[i];
            var iIndex = aComb.indexOf(iStartingSquare);

            // HIGHLIGHT THE POSSIBLE SQUARES TO MOVE TO
            if (iIndex > -1) {
                for (var j = 0; j < aComb.length; j++){
                    var iSquare = aComb[j];
                    
                    if (aComb[j] !== iStartingSquare){
                        if (_aSquares[iSquare].isOccupied() === false) {
                            _aSquares[iSquare].setHighlightVisible(true);
                            iCounter++;
                            
                            // ADD A CONTROL FOR SQUARES THAT MUST BE JUMPED
                            if (iIndex === 0 || iIndex === 2){
                                if (aComb.indexOf(iSquare) === 0 || 
                                    aComb.indexOf(iSquare) === 2) {
                                    if (_aSquares[aComb[1]].isOccupied() === true) {
                                        _aSquares[iSquare].setHighlightVisible(false);
                                        iCounter--;
                                    };
                                };
                            };
                        };
                    };                                        
                };
            };                       
        };
            
        this.setAllSquaresRedHighlightOff();
        
        if (iCounter > 0) {
            _aSquares[iStartingSquare].setHighlightVisible(true);
        } else {
            this.setAllPiecesHighlight(false);
            _aSquares[iStartingSquare].setRedHighlightVisible(true);                    
        };
    };
    
    this.setAllSquaresRedHighlightOff = function(){
        for (var i = 0; i < _aSquares.length; i++) {
            var oSquare = _aSquares[i];
            oSquare.setRedHighlightVisible(false);
        };
    };

    this.setAllPiecesHighlight = function(bValue){
        for (var i = 0; i < _aPlayers.length; i++) {
            var aPieces = _aPlayers[i].getPieces();
            
            for (var j = 0; j < aPieces.length; j++){
                aPieces[j].setHighlightVisible(bValue);
            };
        };
    };
    
    this.setPieceSelected = function(oPiece) {        
        _oSelectedPiece = null;
        this.setAllPiecesHighlight(false);
        this.setAllSquareHighlights(false);

        if (oPiece !== null) {
            oPiece.setHighlightVisible(true);
            _oSelectedPiece = oPiece;
            this.highlightPossibleSquares();
        };
    };
    
    this.placePiece = function(oSquare){        
        if (oSquare.isOccupied() === true) {
            _bPlayerSelection = false;        
            return;
        };

        var iPieceN = _aPlayers[_iTurn].getPiecesBoxNumber()-1;
        var iSquarePos = oSquare.getPosition();            
        oSquare.setOccupied(true, _iTurn);
        _aPlayers[_iTurn].movePiece(iPieceN, oSquare, iSquarePos);
        
    };
    
    this.setPlayerSelection = function(bValue){
        _bPlayerSelection = bValue;
    };
    
    this.piecePlaced = function(oSquare){
        var iPieceN = _aPlayers[_iTurn].getPiecesBoxNumber()-1;        
        oSquare.setHighlightVisible(false);
        _aPlayers[_iTurn].removePieceFromBox(iPieceN);
        
        // CHECK FOR ANY POSSIBLE GAME OVER SITUATION
        if (_iGameState !== GAME_STATE_DISPOSITION) {            
            this.checkForGameOver();
        };

        if ( this.checkForMills() === true ) {
            this.changeState(GAME_STATE_REMOVING);
            if (_iMode === MODE_COMPUTER && _iTurn === BLACK_PLAYER) {
                _bAIremove = true;
            };
        } else {
            this.changeTurn();
        };

        // IF THE DISPOSITION STATE IS OVER, PASS TO MOVEMENT
        if (_aPlayers[BLACK_PLAYER].getPiecesBoxNumber() === 0) {
            this.changeState(GAME_STATE_MOVEMENT);
            this.setAllSquareHighlights(false);
        };
    };
    
    this.movePieceToAnotherSquare = function(oSquare){
        var iSquarePlayer = oSquare.getPlayer();
        var iSquarePosition = oSquare.getPosition();
        
        // IF A PLAYER CLICK ON ANOTHER OF HIS PIECES, CHANGE THE SELECTED PIECE
        if (oSquare.isOccupied() === true) {
            if (iSquarePlayer === _iTurn) {
                var aPieces = _aPlayers[_iTurn].getPieces();
                for (var i = 0; i < aPieces.length; i++) {
                    if (aPieces[i].getSquare() === iSquarePosition) {
                        this.setPieceSelected(aPieces[i]);
                    };
                };
            } else {
                return;
            };
        };

        var iStartingSquare = _oSelectedPiece.getSquare();
        
        // PLAYER CAN'T MOVE ON THE SAME SQUARE
        if (iStartingSquare === iSquarePosition) {
            return;
        };
        
        for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
            var aComb = SQUARES_COMBINATIONS[i];            
            // CHECK IF THE MOVEMENT IS POSSIBLE
            if (aComb.indexOf(iStartingSquare) > -1 && aComb.indexOf(iSquarePosition) > -1) {                
                // IF THERE'S ANOTHER PIECE IN THE WAY, CAN'T MOVE
                if (aComb.indexOf(iStartingSquare) === 0 || 
                    aComb.indexOf(iStartingSquare) === 2) {
                    if (aComb.indexOf(iSquarePosition) === 0 || 
                        aComb.indexOf(iSquarePosition) === 2) {
                        if (_aSquares[aComb[1]].isOccupied() === true) {
                            return;
                        };
                    };
                };
                
                this.realMovement(iStartingSquare, oSquare);
            };
        };
        
        this.checkForGameOver();
    };
    
    this.realMovement = function(iStartingSquare, oSquare){        
        var iSquarePos = oSquare.getPosition();
        
        // IF THE PIECE MOVED WAS IN A MILL, RESET THE MILL CHECK
        if (_oSelectedPiece.isMill(_aSquares) === true) {
            _aPlayers[_iTurn].setMill(false);
        };
        
        // IF MOVEMENT IS POSSIBLE
        _aSquares[iStartingSquare].setOccupied(false, null);
        _aPlayers[_iTurn].movePieceToAnotherSquare(_oSelectedPiece, oSquare, iSquarePos);
        oSquare.setOccupied(true, _iTurn);
        this.setAllSquareHighlights(false);
        
        this.setPieceSelected(null);    // RESET THE PIECE
        this.checkForGameOver();

        if ( this.checkForMills() === true ) {
            this.changeState(GAME_STATE_REMOVING);
            if (_iMode === MODE_COMPUTER && _iTurn === BLACK_PLAYER) {
                _bAIremove = true;
            };
        } else {
            this.changeTurn();
        };
    };
    
    this.checkForGameOver = function(){
        this.checkForNoPieces();
        this.checkForNoMovement();
    };
    
    this.selectPieceToRemove = function(iOpponent, iSquarePosition){
        var oPiece;        
        var aPieces = _aPlayers[iOpponent].getPieces();
        for (var i = 0; i < aPieces.length; i++) {
            if (aPieces[i].getSquare() === iSquarePosition) {
                oPiece = aPieces[i];
            };
        };
        
        // IF THE PIECE IS IN A MILL, CAN'T BE REMOVED UNTIL THERE ARE OTHER PIECES OUT OF MILLS 
        var bIsMill;
        if (oPiece.isMill(_aSquares) === true) {
            bIsMill = true;
            
            // CHECK IF THERE ARE ONLY PIECES ON A MILL
            var iCounter = 0;
            for (var i = 0; i < aPieces.length; i++) {
                if (aPieces[i].isMill(_aSquares) === true){
                    iCounter++;
                };
            };
            if (iCounter === aPieces.length){
                bIsMill = false;
            // ELSE, CHECK NORMALLY IF IT'S IN A MILL
            } else {            
                if (_iGameState === GAME_STATE_MOVEMENT) {
                    for (var i = 0; i < aPieces.length; i++) {
                        if (aPieces[i].getSquare() === iSquarePosition) {
                            if (aPieces[i].isMill(_aSquares) === false){
                                bIsMill = false;
                            };
                        };
                    };
                };
            };
            if (bIsMill === true && aPieces.length > 2){
                playSound("locked",1,0);
                var oMsgBox = new CMessagePopup(TEXT_PIECEINMILL,s_oStage);
                return;
            };
        };
        
        return oPiece;
    };
    
    this.removePiece = function(oSquare){
        var iSquarePlayer = oSquare.getPlayer();
        var iSquarePosition = oSquare.getPosition();
        
        if (iSquarePlayer === _iTurn || iSquarePlayer === null) {            
            return;
        };
        
        var iOpponent;
        if (_iTurn === WHITE_PLAYER) {
            iOpponent = BLACK_PLAYER;
        } else {
            iOpponent = WHITE_PLAYER;
        };
        
        var oPiece = this.selectPieceToRemove(iOpponent, iSquarePosition);        
        oSquare.setOccupied(false, null);
        
        if (oPiece === undefined || oPiece === null){
            return;
        };

        _aPlayers[iOpponent].removePiece(oPiece);

        if ( this.checkForMills() === true ) {
            this.changeState(GAME_STATE_REMOVING);
            if (_iMode === MODE_COMPUTER && _iTurn === BLACK_PLAYER) {
                _bAIremove = true;
            };
        } else {
            this.checkForGameOver();
            // IF THE DISPOSITION STATE IS OVER, PASS TO MOVEMENT STATE
            if (_aPlayers[BLACK_PLAYER].getPiecesBoxNumber() === 0) {
                this.changeState(GAME_STATE_MOVEMENT);            
            } else {
                this.changeState(GAME_STATE_DISPOSITION);
                oSquare.setHighlightVisible(true);
            };
            this.changeTurn();
        };
    };

    this.setAllSquareHighlights = function(bValue){
        for (var i = 0; i < _aSquares.length; i++){
            _aSquares[i].setHighlightVisible(bValue);
        };        
    };

    this.checkForMills = function(){
        // IF THERE'S ALREADY A MILL, YOU CAN'T USE IT AGAIN
        if (_aPlayers[_iTurn].isMill() === true){
            return false;
        } else {
            // FIND ANY MILL
            for (var i = 0; i < SQUARES_COMBINATIONS.length; i++) {
                var aComb = SQUARES_COMBINATIONS[i];

                if (_aSquares[aComb[0]].getPlayer() === _iTurn &&
                    _aSquares[aComb[1]].getPlayer() === _iTurn &&
                    _aSquares[aComb[2]].getPlayer() === _iTurn) {
                    _aPlayers[_iTurn].setMill(true, i);
                    playSound("bonus",1,0);
                    return true;
                };
            };
        };
    };
    
    this.unload = function(){
        _oInterface.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oGame = null;
    };

    this.onExit = function(){
        s_oGame.unload();
        s_oMain.gotoMenu();

        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
    };

    this.restart = function(){
        $(s_oMain).trigger("restart_level",1);

        this.resetVariables();
        
        for (var i = 0; i < _aPlayers.length; i++){
            _aPlayers[i].unload();
            _aPlayers[i].resetPlayer();
        };
        
        for (var i = 0; i < _aSquares.length; i++){
            _aSquares[i].setOccupied(false, null);
            _aSquares[i].setHighlightVisible(true);
        };
        
        _oInterface.changeTurn(_iTurn);
        
        this._onExitHelp();
    };

    this._onExitHelp = function(){
        _bStartGame = true;
        FIRST_GAME = false;
        this.changeState(GAME_STATE_DISPOSITION);
    };

    this._gameOver = function(szMessage){
        _bStartGame = false;
        
        // CALCULATE SCORE BASED ON HOW MANY PIECES ARE LEFT
        _iScore = _aPlayers[_iWinnerPlayer].getPiecesNumber() * PIECES_POINTS;

        if (_iWinnerPlayer === WHITE_PLAYER) {
            playSound("game_win",1,0);
        } else {
            playSound("game_over",1,0);
        };

        // IF THERE'S A NEW HIGH SCORE
        if (_iScore > s_aBestScore) {
            s_aBestScore = _iScore;
            saveItem("ninemensmorris_best_score", _iScore);
        };

        this.showEndPanel(szMessage);
    }; 
    
    this.showEndPanel = function(szMessage) {
        _bDisableEvents = true;

        s_oStage.setChildIndex(_oEndPanelContainer, s_oStage.getNumChildren()-1);
        _oEndPanel.show(szMessage, _iMode, _iWinnerPlayer, _iScore);

        $(s_oMain).trigger("share_event", _iScore);
        $(s_oMain).trigger("save_score", _iScore);
    };

    this.changeTurn = function() {
        _iTurn++;

        if (_iTurn > 1) {
            _iTurn = WHITE_PLAYER; };        
        
        _oInterface.changeTurn(_iTurn);
        
        if (_iGameState === GAME_STATE_MOVEMENT) {
            this.checkForNoMovement();
        };

        // IN HUMAN VS CPU MODE, HERE WE HAVE THE A.I. FUNCTIONS
        if (_iMode === MODE_COMPUTER) {
            if (_iTurn === BLACK_PLAYER) {
                _bAIcheck = true;
            };
        };
    };

    this.update = function() {
        if (!_bStartGame || _iMode !== MODE_COMPUTER) {
            return;
        };
            
        // TIMER FOR ARTIFICIAL INTELLIGENCE CHECK
        if (_bAIcheck){
            _iTimerAI += s_iTimeElaps;
            if(_iTimerAI >= TIMER_AI){
                _iTimerAI = 0;
                this.checkAI();
                _bAIcheck = false;
            };
        };

        // TIMER FOR REMOVAL OF PIECES FOR ARTIFICIAL INTELLIGENCE
        if (_bAIremove){
            _iTimerAI += s_iTimeElaps;
            if(_iTimerAI >= TIMER_AI){
                _iTimerAI = 0;
                this.removePieceAI();
                _bAIremove = false;
            };
        };
    };

    s_oGame = this;

    this._init();
}

var s_oGame;