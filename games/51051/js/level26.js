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

var state26 =
{
	
create: function()
{
	// Init
	W = game.width;
	H = game.height;
	correctAnswer = 2;
	canTypeAnswer = true;
	
	bg = game.add.image(0, 0, 'background');
	paper = game.add.image(50, 50, 'paper');
	
	// brown rectangles
	xPos = 140;
	yPos = 98;
	for (var i = 0; i <= 44; i++)
	{
		rectangle = game.add.image(xPos, yPos, 'rectangle');
		xPos += 72;
		
		if (xPos > 740)
		{
			xPos = 140;
			yPos += 73;
		}
	}
	
	// Row 1
	object1 = game.add.sprite(216, 101, 'number5');
	operator = game.add.sprite(289, 101, 'number4');
	object1 = game.add.sprite(360, 101, 'number6');
	object1 = game.add.sprite(504, 101, 'number2');
	object1 = game.add.sprite(432, 101, 'number6');
	
	equal = game.add.sprite(584, 111, 'equal');
	object1 = game.add.sprite(648, 101, 'number2');
	
	// Row 2
	object1 = game.add.sprite(216, 174, 'number8');
	operator = game.add.sprite(289, 174, 'number9');
	object1 = game.add.sprite(360, 174, 'number7');
	object1 = game.add.sprite(504, 174, 'number3');
	object1 = game.add.sprite(432, 174, 'number2');
	
	equal = game.add.sprite(584, 184, 'equal');
	object1 = game.add.sprite(648, 174, 'number3');
	
	// Row 3
	object1 = game.add.sprite(216, 247, 'number1');
	operator = game.add.sprite(289, 247, 'number2');
	object1 = game.add.sprite(360, 247, 'number3');
	object1 = game.add.sprite(504, 247, 'number5');
	object1 = game.add.sprite(432, 247, 'number4');
	
	equal = game.add.sprite(584, 257, 'equal');
	object1 = game.add.sprite(648, 247, 'number0');
	
	// Row 4
	object1 = game.add.sprite(216, 320, 'number8');
	operator = game.add.sprite(289, 320, 'number0');
	object1 = game.add.sprite(360, 320, 'number0');
	object1 = game.add.sprite(504, 320, 'number0');
	object1 = game.add.sprite(432, 320, 'number0');
	
	equal = game.add.sprite(584, 330, 'equal');
	object1 = game.add.sprite(648, 320, 'number6');
	
	// Row 5
	equal = game.add.sprite(584, 257, 'equal');
	
	object1 = game.add.sprite(216, 393, 'number9');
	operator = game.add.sprite(289, 393, 'number7');
	object1 = game.add.sprite(360, 393, 'number5');
	object1 = game.add.sprite(504, 393, 'number2');
	object1 = game.add.sprite(432, 393, 'number6');
	
	equal = game.add.sprite(584, 403, 'equal');
	block = game.add.sprite(648, 393, 'purpleBlock');
	
	questionMark = game.add.bitmapText(680, 403, 'doctorSoosWhite', '?', 60); 
	questionMark.anchor.setTo(.5,0);
	tween = game.add.tween(questionMark).to( {alpha: 0}, 200, Phaser.Easing.Linear.None, true, 0, 4, true);
	
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