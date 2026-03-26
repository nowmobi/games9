import {mergeParallel} from './AsyncUtils.js';
import {disableColor} from './Settings.js';

export default class BoardFillAnimator{
	constructor(runtime,board)
	{
		this.runtime = runtime;
		this.board = board;
		this.disableItems = [];
		this.shapeController = board.shapeController;
	}
	
	async run()
	{
		const shapes = this.shapeController.shapes();
		const animator = this.runtime.objects.Animator.createInstance(0,0,0);
		const anims = shapes.map(shape=>{
			return async()=>{ 
			const disableShape = this.runtime.objects.Shape.createInstance(shape.layer.index,shape.x,shape.y);
			disableShape.init({shapeInfo:{color:disableColor,size:shape.size},tileSize:shape.tileSize});
			this.disableItems.push(disableShape);
			disableShape.zElevation = shape.zElevation+0.0001;
			await animator.linearAnim(0.5,n=>{
				disableShape.opacity = n;
				shape.opacity = 1-n;
			});
			};
		});
		
		await animator.delay(0.2);
		await mergeParallel(anims);
		
	}
	
	clear()
	{
		this.disableItems.forEach(d=>d.destroy());
		this.disableItems = [];
		this.shapeController.shapes().forEach(s=>s.opacity = 1);
	}
}