var menuState = 
{

create: function() 
{ 
	// Bg
	game.add.image(0, 0, 'bgMenu');
	W = game.width;
	
	touchSound = game.add.audio('touchSound');
	tapSound = game.add.audio('tapSound');
	
	// Play music
	if (game.global.musicPlaying == false)
	{
		game.global.music = game.add.audio('music');
		//game.global.music.loopFull();
		game.global.musicPlaying = true;
	}
	
	// Start button
	this.buttonStart = game.add.button(W/2 + 10, 370, 'buttonPlay', this.startGame, this);
	this.buttonStart.anchor.setTo(.5,0);
	
	// More games button
	this.buttonSound = game.add.button(830, 15, 'buttonSound', this.toggleSound, this);
},
	
startGame: function()
{
	touchSound.play();
	game.state.start('levelSelect');
	
	//gdsdk.showBanner();
},
	
toggleSound: function()
{
	// Sound on/off
	game.sound.mute = ! game.sound.mute;
	this.buttonSound.frame = game.sound.mute ? 1 : 0;	
},

};