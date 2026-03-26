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

var state28 =
{
	
create: function()
{
	// Init
	W = game.width;
	H = game.height;
	correctAnswer = 18;
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
	
	// hint text
	var hintText = game.add.bitmapText(W/2 - 10, 63, 'doctorSoosBlack', 'Hint: use parentheses and math operators!', 30); 
	hintText.anchor.setTo(.5,0);
	
	var hintTimer = game.time.create();
	hintTimer.start();
	hintTimer.loop(8000, function(){
		tween = game.add.tween(hintText).to( {alpha: 0}, 800, Phaser.Easing.Linear.None, true);
		hintTimer.stop();
		hintTimer.destroy();
		console.log("hint timer")
	}, this);
	
	// Row 1
	object4 = game.add.sprite(288, 101, 'number4');
	operator = game.add.sprite(368, 111, 'plus');
	object4 = game.add.sprite(432, 101, 'number1');
	equal = game.add.sprite(512, 111, 'equal');
	object4 = game.add.sprite(576, 101, 'number1');
	object4 = game.add.sprite(648, 101, 'number2');
	
	// Row 2
	object4 = game.add.sprite(288, 174, 'number7');
	operator = game.add.sprite(368, 184, 'plus');
	object4 = game.add.sprite(432, 174, 'number4');
	equal = game.add.sprite(512, 184, 'equal');
	object4 = game.add.sprite(576, 174, 'number2');
	object4 = game.add.sprite(648, 174, 'number1');
	
	// Row 3
	object4 = game.add.sprite(288, 247, 'number3');
	operator = game.add.sprite(368, 257, 'plus');
	object4 = game.add.sprite(432, 247, 'number2');
	equal = game.add.sprite(512, 257, 'equal');
	object4 = game.add.sprite(576, 247, 'number3');
	
	// Row 4
	object4 = game.add.sprite(288, 393, 'number6');
	operator = game.add.sprite(368, 403, 'plus');
	object4 = game.add.sprite(432, 393, 'number3');
	equal = game.add.sprite(512, 403, 'equal');
	
	block = game.add.sprite(576, 393, 'redblock');
	questionMark = game.add.bitmapText(607, 403, 'doctorSoosWhite', '?', 60); 
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
	buttonOK = game.add.button(840, 350, 'buttonOK', checkAnswerLast);
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

function touchNumber(number)
{
	if (usersText.text.length < 5)
	{
		if (canTypeAnswer)	// no need to wait 10 seconds after wrong answer
		{
			usersText.text = usersText.text + number.name;
			tapSound.play();
			
			// hide text and sprite (if visible)
			if (cannotBeEmptyText.visible)
			{
				cannotBeEmptyText.visible = false;
			}
			if (incorrectSprite.visible)
			{
				incorrectSprite.visible = false;
			} 
		}
	}
	else
	{
		// console.log("too big number")
		if (tooBigNumberText.visible == false)
		{
			tooBigNumberText.visible = true;
			console.log("craete text")
		}
	}
}

// Empty text field, hide delete and submit buttons
function deleteAnswer()
{
	if (usersText.text.length > 0)
	{
		deleteTextSound.play();
		usersText.text = "";
		if (buttonOK.alpha > 0)
		{
			buttonOK.useHandCursor = true;	buttonDelete.useHandCursor = true;
		}
	}
	
	tooBigNumberText.visible = false;
}

// check user's answer
function checkAnswerLast()
{
	// hide "number is too big" text (if visible)
	tooBigNumberText.visible = false;
	
	// if input field is not empty
	if (usersText.text.length > 0)
	{
		// Yay, correct!
		if (usersText.text == correctAnswer)
		{
			// show correct sprite
			 correctSprite.visible = true;
			tween = game.add.tween(correctSprite).to( {y: "5"}, 80, Phaser.Easing.Linear.None, true, 0, 1, true);
			
			 correctSound.play();
			 correctSound.onStop.addOnce(function(){
				 
				var succes = 3;
				 
				// did we improved our stars in current level?
				if (game.global.starsArray[game.global.level - 1] < succes) {
					game.global.starsArray[game.global.level - 1] = succes;
				}
				 
				// if  next level is locked and exists, then unlock it
				if(game.global.starsArray[game.global.level] == 4 && game.global.level < game.global.starsArray.length)
				{
					game.global.starsArray[game.global.level] = 0;	
				}
				 
				// save it
				localStorage.setItem("math2018Levels", JSON.stringify(game.global.starsArray));

				var retrievedData = localStorage.getItem("math2018Levels");
				game.global.starsArray = JSON.parse(retrievedData);
				 
				completedScene = game.add.sprite(W/2, 0, 'congratsScene');
				completedScene.anchor.setTo(.5,0);
				completedScene.alpha = 0;
				completedScene.inputEnabled = true;
				
				tween = game.add.tween(completedScene).to( {alpha: 1}, 800, "Linear", true);
				tween.onComplete.add(function(){
					
					// buttons, next and menu
					buttonNext = game.add.button(W/2 + 25, 365, 'buttonMoreGames', playMoreGames);
					buttonMenu = game.add.button(W/2 + 25, 480, 'buttonMenu', goToMenu);
					buttonNext.anchor.setTo(.5,.5);		buttonMenu.anchor.setTo(.5,.5);
					buttonNext.scale.x = .1;	buttonNext.scale.y = .1;
					buttonMenu.scale.x = .1;	buttonMenu.scale.y = .1;
					tween = game.add.tween(buttonNext.scale).to( {x: 1, y: 1}, 700, Phaser.Easing.Elastic.Out, true);
					tween = game.add.tween(buttonMenu.scale).to( {x: 1, y: 1}, 700, Phaser.Easing.Elastic.Out, true);
				},this);
				 
			 },this);
		}
		else	// wrong answer
		{
			// show red x and play sound
			incorrectSprite.visible = true;
			incorrectSound.play();
			tween = game.add.tween(incorrectSprite).to( {x: "-5"}, 80, Phaser.Easing.Linear.None, true, 0, 1, true);

			// clear text input
			usersText.text = "";

			if (buttonOK.alpha > 0)
			{
				buttonOK.useHandCursor = false;	buttonDelete.useHandCursor = false;
			}
			
			// wait 10 seconds to try again
			canTypeAnswer = false;
			
			timeToWait = game.global.timeToSubmit;
			timer = game.time.create();
			timer.start();
			timer.loop(1000, timerFunction, this);
			
			tenSecondsText = game.add.bitmapText(W/2 - 40, 479, 'doctorSoosBlack', '00:10', 36); 
			tenSecondsText.alpha = .5;
		}
	}
	else if (canTypeAnswer) // input field is empty or cannot type for 10s
	{
		cannotBeEmptyText.visible = true;
	}
}

function timerFunction()
{
	if (timeToWait > 1){
		timeToWait -= 1;
		tenSecondsText.text = "00:0"+timeToWait;
	}
	else{
		timer.stop();
		canTypeAnswer = true;
		tenSecondsText.text = "";
	}
}

function showSkipLevelScene()
{
	// bring to top
	game.world.bringToTop(sls);
	game.world.bringToTop(skipLeft);
	
	touchSound.play();
	sls.visible = true;		sls.x = 0;
	
	skipLeft.visible = true;
	skipLeft.x = W/2 + 20;
	
	// Skip level?
	buttonYes = game.add.button(W/2 + 10, 340, 'buttonYes', skipLevel);
	buttonNo = game.add.button(W/2 + 10, 440, 'buttonNo', hidePopup);
	buttonYes.anchor.setTo(.5,.5);	buttonNo.anchor.setTo(.5,.5);
}

function skipLevel()
{
	touchSound.play();
	game.global.levelsSkipped++;
	
	// success 2 means level is skipped
	var success = 2;
	
	// show purple thumb without a star, it means skipped level
	if (game.global.starsArray[game.global.level - 1] < success) {
		game.global.starsArray[game.global.level - 1] = success;
	}
	
	// show select level screen
	showSelectLevel();
}

function showGoToMenu()
{
	// bring to top
	game.world.bringToTop(gtms);
	
	touchSound.play();
	gtms.visible = true;	gtms.x = 0;
	
	// Go to menu?
	buttonYes = game.add.button(W/2 + 10, 320, 'buttonYes', goToMenu);
	buttonNo = game.add.button(W/2 + 10, 420, 'buttonNo', hidePopup);
	buttonYes.anchor.setTo(.5,.5);	buttonNo.anchor.setTo(.5,.5);
}

function goToMenu()
{
	touchSound.play();
	game.state.start("menu");
}

function nextLevel()
{
	touchSound.play();
	
	game.global.level += 1;
	var newLevel = game.global.level;
	
	game.state.start("level"+newLevel);
	//gdsdk.showBanner();
}

function hidePopup()
{
	gtms.visible = false;
	sls.visible = false;
	skipLeft.visible = false;
	
	gtms.x = 2000;	sls.x = 2000;	skipLeft.x = 2000;
	buttonYes.destroy();	buttonNo.destroy();
	touchSound.play();
}

function playMoreGames() {
	touchSound.play();
	window.open('https://world-geography-games.com/', '_blank');
}

function showSelectLevel()
{
	// if  next level is locked and exists, then unlock it
	if(game.global.starsArray[game.global.level] == 4 && game.global.level < game.global.starsArray.length)
	{
		game.global.starsArray[game.global.level] = 0;	
	}

	// save it
	localStorage.setItem("math2018Levels", JSON.stringify(game.global.starsArray));

	var retrievedData = localStorage.getItem("math2018Levels");
	game.global.starsArray = JSON.parse(retrievedData);

	// back to level selection
	game.state.start("levelSelect");
}