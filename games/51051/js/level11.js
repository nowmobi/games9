var W;
var H;
var object1;
var object2;
var object3;
var object4;
var result;
var operator;
var questionMark;
var correctAnswer;
var correctSprite;
var incorrectSprite;
var tooBigNumberText;
var cannotBeEmptyText;
var canTypeAnswer;

var triangle;

var state11 =
{
	
create: function()
{
	// Init
	W = game.width;
	H = game.height;
	correctAnswer = 54;
	canTypeAnswer = true;
	
	bg = game.add.image(0, 0, 'background');
	paper = game.add.image(50, 50, 'paper');
	
	// Triangles
	triangle = game.add.sprite(150, 180, 'triangle');
	var triText = game.add.bitmapText(210, 130, 'doctorSoosBlack', '4', 60); 
	triText = game.add.bitmapText(145, 330, 'doctorSoosBlack', '2', 60); 
	triText = game.add.bitmapText(275, 330, 'doctorSoosBlack', '7', 60); 
	var triResult = game.add.bitmapText(198, 250, 'doctorSoosWhite', '36', 60); 
	
	triangle = game.add.sprite(390, 180, 'triangle');
	triText = game.add.bitmapText(450, 130, 'doctorSoosBlack', '5', 60); 
	triText = game.add.bitmapText(385, 330, 'doctorSoosBlack', '1', 60); 
	triText = game.add.bitmapText(515, 330, 'doctorSoosBlack', '8', 60); 
	triResult = game.add.bitmapText(435, 250, 'doctorSoosWhite', '45', 60); 
	
	triangle = game.add.sprite(630, 180, 'triangle');
	triText = game.add.bitmapText(690, 130, 'doctorSoosBlack', '6', 60); 
	triText = game.add.bitmapText(625, 330, 'doctorSoosBlack', '5', 60); 
	triText = game.add.bitmapText(755, 330, 'doctorSoosBlack', '4', 60); 
	triResult = game.add.bitmapText(678, 250, 'doctorSoosWhite', '??', 60); 
	
	tween = game.add.tween(triResult).to( {alpha: 0}, 200, Phaser.Easing.Linear.None, true, 0, 4, true);
	
	// Numbers (bottom)
	numbers = game.add.group();
	xPos = 107;
	
	for (var i = 0; i <= 9; i++)
	{
		number = game.add.button(xPos, 553, 'numbers');
		number.frame = i;
		number.name = i;
		xPos += 74;
		number.inputEnabled = true;
		number.events.onInputDown.add(touchNumber, this);
		numbers.add(number);
	}
	
	// Correct and incorrect 
	correctSprite = game.add.sprite(600, 460, 'correctSprite');
	incorrectSprite = game.add.sprite(600, 460, 'incorrectSprite');
	correctSprite.visible = false;	incorrectSprite.visible = false;
	
	// Button
	buttonOK = game.add.button(840, 350, 'buttonOK', checkAnswer);
	buttonDelete = game.add.button(840, 455, 'buttonDelete', deleteAnswer);
	
	// If the player did not already skip 3 levels, show skip button
	if (game.global.levelsSkipped < 3)
	{
		buttonSkip = game.add.button(30, 365, 'buttonSkip', showSkipLevelScene);
	}
	
	// Menu button and more games
	var buttonGames = game.add.button(30, 270, 'buttonGames', playMoreGames)
	var buttonMenu = game.add.button(30, 175, 'buttonHome', showGoToMenu);
	
	
	// Text (level number)
	puzzleText = game.add.bitmapText(W/2, 12, 'doctorSoosWhite', 'PUZZLE  ' + game.global.level, 40); 
	puzzleText.anchor.setTo(.5,0);
	
	// small field below user's input
	bgText = game.add.sprite(W/2, 470, 'bgText');
	bgText.anchor.setTo(.5,0);
	
	// Text (input)
    usersText = game.add.bitmapText(W/2, 479, 'doctorSoosBlack', '', 38);
	usersText.anchor.setTo(.5,0);
	
	// Show this if user's number is too big
	tooBigNumberText = game.add.bitmapText(W/2 - 325, 480, "doctorSoosBlack", "Number is too big!", 32); 
	tooBigNumberText.visible = false;
	
	// Show this if user tap submit button but input field is empty
	cannotBeEmptyText = game.add.bitmapText(W/2 - 320, 480, "doctorSoosBlack", "Type your answer!", 32); 
	cannotBeEmptyText.visible = false;
	
	// Pop up scenese (go to menu and skip this level)
	gtms = game.add.sprite(2000,0, 'goToMenuScene');
	gtms.inputEnabled = true;	gtms.visible = false;
	
	sls = game.add.sprite(2000,0, 'skipLevelScene');
	sls.inputEnabled = true;	sls.visible = false;
	
	// you can skip puzzles text
	skipLeft = game.add.bitmapText(W/2 + 20, 235, "doctorSoosBlack", 
	"You can skip " + (3-game.global.levelsSkipped) + " level(s)", 32); 
	skipLeft.anchor.setTo(.5,0);
	skipLeft.x = 2000;	skipLeft.visible = false;
	
	// Sounds
	touchSound = game.add.audio('touchSound');
	tapSound = game.add.audio('tapSound');
	clickSound = game.add.audio('clickSound');
	correctSound = game.add.audio('correctSound');
	incorrectSound = game.add.audio('incorrectSound');
	deleteTextSound = game.add.audio('deleteTextSound');
},
	
};