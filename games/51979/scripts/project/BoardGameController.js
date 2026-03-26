import {playSound} from './GameUtils.js';
import BoardFillAnimator from './BoardFillAnimator.js';


export default class BoardGameController {
	constructor(runtime,board)
	{
		this.runtime = runtime;
		this.board = board;
		this.filled = null;
		this.fillAnimator = new BoardFillAnimator(runtime,board);
		
		this.logicController = board.logicController;
		this.shapeController = board.shapeController;
		this.inputController = board.inputController;
		
		this.inputController.shapeMoved = this.inputControllerOnShapeMoved.bind(this);
		this.logicController.filled = this.logicControllerOnFilled.bind(this);
	}
	
	logicControllerOnFilled()
	{
		console.log("logicControllerOnFilled");
		this.isFilled = true;
		if(this.filled)this.filled();
		playSound(this.runtime,'fill_clip');
		if(this.fillAnimator)this.fillAnimator.run();
	}
	
	async inputControllerOnShapeMoved(_)
	{
		await this.processLogicController();
	}
	
	async processLogicController()
	{
		this.inputController.interactable = false;
		await this.logicController.processAfterMove();
		this.inputController.interactable = true;
	}
}