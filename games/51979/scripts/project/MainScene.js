import Piece from "./Piece.js";
import ShapeGroup from "./ShapeGroup.js";
import ShapeProvider from "./ShapeProvider.js";
import Vector from './Vector.js';
import {lerp,randFloat,rand,clamp} from './Utils.js';
import LerpAnim from './LerpAnim.js';


export default class MainScene{


	constructor(runtime)
	{
		this.runtime = runtime;
		this.runtime.globalVars.GameState = "playing";
		
		this.updatables = [];
		
		this.board = runtime.objects.Board.getFirstInstance();
		this.board.logicController.broke = this.boardLogicControllerBroke.bind(this);
		this.board.gameController.filled = this.boardGameControllerFilled.bind(this);
		
	}
	
	
	boardLogicControllerBroke(shape)
	{
		this.runtime.globalVars.Score += shape.size*2;
		
	}

	boardGameControllerFilled()
	{
	console.log("board filled");
		this.overTheGame();
	}
			//Play sound effect
	playSound(name)
	{
	if(this.runtime.globalVars.SoundDisable)
	return;
		const ist = this.runtime.objects.SoundEffect.createInstance(0,0,0);
		ist.instVars.Name = name;
		ist.destroy();
	}
	
	update(dt)
	{
		
	}
	

	async overTheGame()
	{
		this.playSound("over");
		this.board.inputController.active = false;
		this.runtime.globalVars.GameState = "over";
		this.sendEvent("over");
	}

	
	sendEvent(name)
	{
		const event = this.runtime.objects.SimpleEvent.createInstance(0,0,0);
		event.instVars.Name = name;
		event.destroy();
	}
	


}


