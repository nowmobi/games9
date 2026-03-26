// how many pages are needed to show all levels (1)
var pages;

// current page
var currentPage;

// group where to place all level thumbnails
var levelThumbsGroup;

var levelNumber;
var levelToPlay;


var selectState = 
{
  	create: function()
	{
		W = game.width;
		game.add.sprite(0, 0, 'bgSelect');
		
		touchSound = game.add.audio('touchSound');
		tapSound = game.add.audio('tapSound');
		
		levelSelectText = game.add.bitmapText(W/2, 30, "doctorSoosWhite", 
		"SELECT PUZZLE", 42); 
		levelSelectText.anchor.setTo(.5,0);
		// Button home
		this.buttonHome = game.add.button(90, 15, 'buttonHome',
										  this.goToMenu, this);
		// Button games
		this.buttonGames = game.add.button(180, 15, 'buttonGames',
									   this.visitMobGames);
		
		// Mute button
		this.muteButton = game.add.button(1275,15, 'buttonSound', this.toggleSound, this);
		if (game.sound.mute) 
		{
			this.muteButton.frame = 1;
		}
		
		if (!localStorage.getItem('math2018Levels')) 
		{
			game.global.starsArray = [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
		}
		
		else 
		{
			var retrievedData = localStorage.getItem("math2018Levels");
			game.global.starsArray = JSON.parse(retrievedData);
		}
		
  		// How many pages are needed to show all levels?
		// EACH PAGE SHOULD HAVE THE SAME AMOUNT OF LEVELS
		// THE NUMBER OF LEVELS *MUST* BE DIVISIBLE BY THUMBCOLS*THUMBROWS
  		pages = game.global.starsArray.length/(game.global.thumbRows*game.global.thumbCols);
		
  		// Current page according to last played level, if any
		currentPage = Math.floor(game.global.level/(game.global.thumbRows*game.global.thumbCols));
		if(currentPage>pages-1){
			currentPage = pages-1;
		}
		
		// creation of the thumbails group
		levelThumbsGroup = game.add.group();
		
		// determining level thumbnails width and height for each page
		var levelLength = game.global.thumbWidth*game.global.thumbCols+game.global.thumbSpacing*(game.global.thumbCols-1);
		
		var levelHeight = game.global.thumbWidth*game.global.thumbRows+game.global.thumbSpacing*(game.global.thumbRows-1);
		
		
		// looping through each page
		for(var l = 0; l < pages; l++)
		{
			// horizontal offset to have level thumbnails horizontally centered in the page (move them 20 pixels to right for this game)
			var offsetX = (game.width-levelLength)/2 + game.width * l + 20;
			
			// Vertically offset
			var offsetY = 100;
			
			// looping through each level thumbnails
		     for(var i = 0; i < game.global.thumbRows; i ++)
			 {
		     	for(var j = 0; j < game.global.thumbCols; j ++)
				{  
		     		// which level does the thumbnail refer?
					levelNumber = i*game.global.thumbCols+j+l*(game.global.thumbRows*game.global.thumbCols);
					
					// adding the thumbnail, as a button which will call thumbClicked function if clicked   		
					var levelThumb = game.add.button(offsetX+j*(game.global.thumbWidth+game.global.thumbSpacing), offsetY+i*(game.global.thumbHeight+game.global.thumbSpacing), "levels", this.thumbClicked, this);	
					
					// shwoing proper frame
				  levelThumb.frame= game.global.starsArray[levelNumber];
					
					// custom attribute 
					levelThumb.levelNumber = levelNumber+1;
					
					// adding the level thumb to the group
					levelThumbsGroup.add(levelThumb);
					
					// (if the level is playable) write level number
					//if(game.global.starsArray[levelNumber] < 4)
					//{
						var levelText = game.add.bitmapText(levelThumb.x + 50, levelThumb.y + 27, "doctorSoosWhite", levelNumber+1, 50); 
						levelText.anchor.setTo(.5,0);
						
						
						if (levelNumber < 9)
						{
							//levelText.x = levelThumb.x + 37;
						}

						levelThumbsGroup.add(levelText);
					//}
				}
			}
		}
		
		// scrolling thumbnails group according to level position
		//levelThumbsGroup.x = currentPage * game.width * -1
	},
	arrowClicked:function(button)
	{
		
	},
	
	// Go to main menu
	goToMenu:function()
	{
		touchSound.play();
		game.state.start('menu');
	},
	
		// Sound on off
		toggleSound: function() 
		{
			//buttonTouch.play();

			// Sound on/off
			game.sound.mute = ! game.sound.mute;
			this.muteButton.frame = game.sound.mute ? 1 : 0;		
		},
	
	// Visit website
	visitMobGames: function() 
	{
		touchSound.play();
		window.open('https://world-geography-games.com/', '_blank');
	},
	
	// Level thumbnail clicked
	thumbClicked:function(button)
	{
		tapSound.play();
		
		// the level is playable, then play the level!!
		if(button.frame < 4)
		{
			game.global.level = button.levelNumber;
			levelToPlay = game.global.level;

			if (levelToPlay === 1 || levelToPlay === 4 || levelToPlay === 7 || levelToPlay === 11 || levelToPlay === 15 || levelToPlay === 19 || levelToPlay === 23 || levelToPlay === 28) {
				// show ad
				if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
					sdk.showBanner();
				}
			}
			
			game.state.start("level"+levelToPlay);
			
			
		}
		// else, let's shake the locked levels
		else
		{
			var buttonTween = game.add.tween(button)
			buttonTween.to({
				alpha: 0.5
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.to({
				alpha: 1
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.to({
				alpha: 0.5
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.to({
				alpha: 1
			}, 20, Phaser.Easing.Cubic.None);
			buttonTween.start();
		}
	}
}
