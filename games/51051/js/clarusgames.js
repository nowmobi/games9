var clarusState =
{
	create: function() 
	{ 
		var clarusgames = game.add.image(0,0, 'clarusgames');

		var clarusGamesPlay = game.add.button(game.width / 2, 450, 'clarusGamesPlay', startGame);
		clarusGamesPlay.anchor.setTo(.5,0);
		
		var graphics = game.add.graphics(0, 0);
		graphics.beginFill(0xFF0000);
		graphics.drawRect(260, 180, 450, 120);
		graphics.alpha = 0;
		
		graphics.inputEnabled = true;
		graphics.input.useHandCursor = true;
		graphics.events.onInputUp.add(onClick, this);
		
		game.input.onDown.addOnce(() => {
		game.sound.context.resume();
		});
	},
}

function startGame() {
	game.state.start("levelSelect");
}

function onClick(target, pointer) {
	window.open('https://world-geography-games.com/', '_blank');
	console.log("new tabbbbbbb")
}