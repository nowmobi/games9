var loadingState = 
{	
	preload: function()
	{
		// Preloader bg
		preloaderBg = game.add.sprite(0,0, 'preloaderBg');
		
		// Preloader
		preloaderBar = game.add.sprite(0, 398, 'preloaderBar');
		preloaderBar.anchor.setTo(0, 0.5);
		preloaderBar.x = game.world.centerX - preloaderBar.width / 2;
		game.load.setPreloadSprite(preloaderBar);
		
		preloaderBorder = game.add.sprite(0, 400, 'preloaderBorder');
		preloaderBorder.anchor.setTo(0, 0.5);
		preloaderBorder.x = game.world.centerX - preloaderBorder.width / 2;
		
		game.load.image('clarusgames', 'images/clarusgames.jpg');
		game.load.image('clarusGamesPlay', 'images/clarusGamesPlay.png');
		
		game.load.spritesheet('buttonSound', 'images/buttonSound.png', 70, 72);
		game.load.image('buttonHome', 'images/buttonHome.png');
		game.load.image('buttonGames', 'images/buttonGames.png');
		game.load.image('buttonPlay', 'images/buttonPlay.png');
		game.load.image('buttonSkip', 'images/buttonSkip.png');
		game.load.image('buttonNo', 'images/buttonNo.png');
		game.load.image('buttonYes', 'images/buttonYes.png');
		game.load.image('buttonMenu', 'images/buttonMenu.png');
		game.load.image('buttonNext', 'images/buttonNext.png');
		game.load.image('buttonMoreGames', 'images/buttonMoreGames.png');
		
		game.load.image('question18', 'images/question18.png');
		game.load.image('question19', 'images/question19.png');
		game.load.image('question20', 'images/question20.png');
		game.load.image('question24', 'images/question24.png');
		
		// Pop-up
		game.load.image('goToMenuScene', 'images/goToMenuScene.png');
		game.load.image('skipLevelScene', 'images/skipLevelScene.png');
		game.load.image('completedScene', 'images/completedScene.png');
		game.load.image('congratsScene', 'images/congratsScene.png');
		
		// Select level
		game.load.spritesheet("levels", "images/levels.png", game.global.thumbWidth, game.global.thumbHeight);
		
		// Bg 
		game.load.image('background', 'images/bg.jpg');
		game.load.image('bgMenu', 'images/bgMenu.jpg');
		game.load.image('bgSelect', 'images/bgSelect.jpg');
		game.load.image('paper', 'images/paper.png');
		game.load.image('rectangle', 'images/rectangle.png');
		game.load.image('bgText', 'images/bgText.png');

		// Font 1
		game.load.bitmapFont('doctorSoosWhite', 'images/doctorSoosWhite.png', 'images/doctorSoosWhite.fnt');
		game.load.bitmapFont('doctorSoosBlack', 'images/doctorSoosBlack.png', 'images/doctorSoosBlack.fnt');
		
		// Objects
		game.load.image('triangle', 'images/triangle.png');
		game.load.image('hand', 'images/hand.png');
		
		// Numbers
		game.load.spritesheet('numbers', 'images/numbers.png', 50, 53);
		game.load.spritesheet('numbersColorful', 'images/numbersColorful.png', 55, 55);
		game.load.image('correctSprite', 'images/correctSprite.png');
		game.load.image('incorrectSprite', 'images/incorrectSprite.png');
		
		// Buttons
		game.load.image('buttonDelete', 'images/buttonDelete.png');
		game.load.image('buttonOK', 'images/buttonSubmit.png');
		
		// Operators
		game.load.image('plus', 'images/operatorPlus.png');
		game.load.image('minus', 'images/operatorMinus.png');
		game.load.image('multiply', 'images/operatorMultiply.png');
		game.load.image('divide', 'images/operatorDivide.png');
		game.load.image('equal', 'images/equal.png');
		game.load.image('greenblock', 'images/greenblock.jpg');
		game.load.image('blueblock', 'images/blueblock.jpg');
		game.load.image('redblock', 'images/redblock.jpg');
		game.load.image('purpleBlock', 'images/purpleBlock.jpg');
		game.load.image('orangeBlock', 'images/orangeBlock.jpg');
		game.load.image('yellowblock', 'images/yellowblock.jpg');
		
		// Items
		game.load.image('item1', 'images/item1.jpg');
		game.load.image('item2', 'images/item2.jpg');
		game.load.image('item3', 'images/item3.jpg');
		game.load.image('item4', 'images/item4.jpg');
		game.load.image('item5', 'images/item5.jpg');
		game.load.image('item6', 'images/item6.jpg');
		game.load.image('item7', 'images/item7.jpg');
		
		game.load.image('number0', 'images/number0.png');
		game.load.image('number1', 'images/number1.png');
		game.load.image('number2', 'images/number2.png');
		game.load.image('number3', 'images/number3.png');
		game.load.image('number4', 'images/number4.png');
		game.load.image('number5', 'images/number5.png');
		game.load.image('number6', 'images/number6.png');
		game.load.image('number7', 'images/number7.png');
		game.load.image('number8', 'images/number8.png');
		game.load.image('number9', 'images/number9.png');
		
		// Audio
		game.load.audio('music', 
	    ['audio/music.mp3', 'audio/music.ogg'])
		game.load.audio('correctSound', ['audio/correctSound.mp3', 'correctSound.ogg']);
		game.load.audio('incorrectSound', ['audio/incorrectSound.mp3', 'incorrectSound.ogg']);
		game.load.audio('tapSound', ['audio/tapSound.mp3', 'tapSound.ogg']);
		game.load.audio('clickSound', ['audio/clickSound.mp3', 'clickSound.ogg']);
		game.load.audio('touchSound', ['audio/touchSound.mp3', 'touchSound.ogg']);
		game.load.audio('deleteTextSound', ['audio/deleteTextSound.mp3', 'deleteTextSound.ogg']);
		
},
  	create: function()
	{
  		// After loading, show main menu
		game.state.start("menu");
	}
}     