var bootState = 
{

	preload: function () 
	{
		// Preloading
		game.load.image('preloaderBar', 'images/preloaderBar.png');
		game.load.image('preloaderBorder', 'images/preloaderBorder.png');
		game.load.image('preloaderBg', 'images/preloaderBg.jpg');
		game.load.image('lock', 'images/lock.png');
	},

	create: function() 
	{ 
		game.stage.backgroundColor = '#000000';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		document.body.style.backgroundColor = '#000000';

		// Center the game
		game.scale.minWidth = 320;
		game.scale.minHeight = 215;
		game.scale.maxWidth = 1920;
		game.scale.maxHeight = 1080;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		
		// If you play on desktop
		if (game.device.desktop) 
		{
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}
			
		// If playing on mobile
		else if (!game.device.desktop) 
		{
			game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;	
			
			// Only landscape mode
            this.scale.forceOrientation(true, false);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
		} 
		
		game.scale.refresh();
		game.state.start('loading');
	},
	

// Manage device rotation, play only in landscape mode
enterIncorrectOrientation: function () 
{
	if(!game.device.desktop){
		game.orientated = false;
		document.getElementById('orientation').style.display = 'block';
	}
},

leaveIncorrectOrientation: function () 
{
	if(!game.device.desktop){
		game.orientated = true;
		document.getElementById('orientation').style.display = 'none';
	}
}
	
};