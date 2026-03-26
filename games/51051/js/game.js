var game = new Phaser.Game(960, 640, Phaser.AUTO, null);

game.global = 
{
	// Global variables
	levelsSkipped : 0,
	
	// After wrong answer, wait 10 seconds
	timeToSubmit : 10,
	
	// Music playing
	musicPlaying : false,
	
	// Lock orientation, play only in portrait or landscape mode
	orientated : false,
	
	/** Select level screen **/
	
	// number of thumbnail rows
	thumbRows : 4,
	// number of thumbnail cololumns
	thumbCols : 7,
	// width of a thumbnail, in pixels
	thumbWidth : 90,
	// height of a thumbnail, in pixels
	thumbHeight : 95,
	// space among thumbnails, in pixels
	thumbSpacing : 25,
	
	// array with levels, 28 numbers for 28 levels
	// 0 = playable yet unfinished level
	// 2 = skipped level
	// 3 = level completed
	// 4 = locked level
	starsArray : [0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	
	// level currently playing
	level : 0,
}

// Game states
game.state.add('boot', bootState);
game.state.add("loading", loadingState);
game.state.add("clarusgames", clarusState);
game.state.add('menu', menuState);
game.state.add('levelSelect', selectState);
game.state.add('level1', state1);
game.state.add('level2', state2);
game.state.add('level3', state3);
game.state.add('level4', state4);
game.state.add('level5', state5);
game.state.add('level6', state6);
game.state.add('level7', state7);
game.state.add('level8', state8);
game.state.add('level9', state9);
game.state.add('level10', state10);
game.state.add('level11', state11);
game.state.add('level12', state12);
game.state.add('level13', state13);
game.state.add('level14', state14);
game.state.add('level15', state15);
game.state.add('level16', state16);
game.state.add('level17', state17);
game.state.add('level18', state18);
game.state.add('level19', state19);
game.state.add('level20', state20);
game.state.add('level21', state21);
game.state.add('level22', state22);
game.state.add('level23', state23);
game.state.add('level24', state24);
game.state.add('level25', state25);
game.state.add('level26', state26);
game.state.add('level27', state27);
game.state.add('level28', state28);

// Start boot state
game.state.start("boot");