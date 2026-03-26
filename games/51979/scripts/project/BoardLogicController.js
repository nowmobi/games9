import {lerp} from './Utils.js';
import Vector from './Vector.js';
import ShapeRowProvider from './ShapeRowProvider.js';
import {playSound} from './GameUtils.js';
import {mergeParallel} from './AsyncUtils.js';
import BoardDropBlockCalculator from './BoardDropBlockCalculator.js';

export default class BoardLogicController{
	
	constructor(runtime,board)
	{
		this.runtime = runtime;
		this.filled = null;
		this.broke = null;
	
		this.board = board;
		this.shapeController = board.shapeController;
		this.rowProvider = new ShapeRowProvider(this.board.columns());
		this.processing = false;
		this.continuesExplodeCount = 0;
	}
	
	async start()
	{
		playSound(this.runtime,"rowNew");
		await this.addRows();
		await this.processAfterMove();
	}
	
	
	async dropHangingShapes()
	{
		const calculator = new BoardDropBlockCalculator(this.shapeController);
		await mergeParallel(calculator.getDroppingBlockAndTarget().map(shapeAndTarget=> async()=> await this.dropTheShapeTo(shapeAndTarget.shape,shapeAndTarget.position)));
	}
	
	
	async processAfterMove()
	{
		if(this.hasFilled())
		return;
		
		this.processing = true;
		
// 		console.log("process after move");
		
		do
		{
			await this.handleContinuesDropAndMerge();
// 			console.log('drop and merge complete');
			await this.addRows();
			await this.handleContinuesDropAndMerge();
		}while(!this.shapeController.shapes().length);
		
// 		const animator = this.runtime.objects.Animator.createInstance(0,0,0);
// 		animator.destroy();
		this.processing = false;
// 		console.log(this.shapeController.shapeGrid);
		
		
		this.handleFillBoard();
	}
	
	handleFillBoard()
	{
		if(this.hasFilled() && this.filled)
		{
			this.filled();
		}
// 		console.log("Has Filled:"+this.hasFilled());
	}
	
	async addRowAndContinue()
	{
		if(this.hasFilled())
		{
			return;
		}
		await this.addRows();
		await this.handleContinuesDropAndMerge();
	}
	
	hasFilled()
	{
		return [...new Array(this.shapeController.shapeGrid.length).keys()].find(x=>
		 this.shapeController.shapeGrid[x][this.shapeController.shapeGrid[x].length-1]) >=0;
	}
	
	
	async handleContinuesDropAndMerge()
	{
		await this.dropHangingShapes();
		this.continuesExplodeCount = 0;
		
		do
		{
			await this.dropHangingShapes();
			
			if(!this.getFilledRows().length)
			break;
			
			await this.handleMerge();
			
		}while(true);
		
	}
	
	async handleMerge()
	{
		const rows = this.getFilledRows();
		
		if(!rows.length)
		return;
		
		await this.mergeRows(rows);
	}
	
	async mergeRows(rows)
	{
		const shapeGrid = this.shapeController.shapeGrid;
		const rowsShapes = rows.map(y=> [...new Set([...new Array(shapeGrid.length).keys()].map(x=>shapeGrid[x][y]).filter(s=>s))]);
		
		const comboConnectedShapes = rowsShapes.map((shapes,i)=>shapes.filter(s=>s.isComboShape).map(s=> [s,...this.getConnectedShapesForCombo(s)]).flatMap(s=>s).filter(s=>s.isComboShape || s.coordinate.y != rowsShapes[i])).flatMap(s=>s);
		
		if(comboConnectedShapes.length)
		{
			await this.showComboEffect(comboConnectedShapes);
		}
		
		this.continuesExplodeCount++;
		
		this.playBreakAudioClip();
		
		await mergeParallel([...new Set([...rowsShapes.flatMap(s=>s),...comboConnectedShapes])].map( s=> async()=>await this.breakShape(s)));
	}
	
	playBreakAudioClip()
	{
		playSound(this.runtime,"block_break_"+ Math.min(this.continuesExplodeCount,6));
	}
	
	async showComboEffect(comboConnectedShapes)
	{
		playSound(this.runtime,"rainbow_blast");
		await mergeParallel(comboConnectedShapes.map(c=> async()=>await c.comboAnim()));
	}
	
	async breakShape(shape)
	{
		this.shapeController.removeShape(shape);
		if(this.broke) this.broke(shape);
		shape.break("ShapeBreakEffect");
	}
	
	getFilledRows()
	{
		return [...new Array(this.board.rows()).keys()].filter(y=>[...new Array(this.board.columns()).keys()].every(x=>this.shapeController.shapeGrid[x][y]));
	}
	
	getConnectedShapesForCombo(shape,visited)
	{
		visited = visited || new Set();
		
		if(!shape.isComboShape || visited.has(shape))
			return [];
			
		visited.add(shape);
		
		const shapes = [...new Set([...this.getAdjacentCoordinates(shape)]
		.map(v=> this.shapeController.shapeGrid[v.x][v.y])
		.filter(s=>s))].filter(s=>!visited.has(s));
		
		return shapes.map(s=> [s,...this.getConnectedShapesForCombo(s,visited)]).flatMap(s=>s);
	}
	
	*getAdjacentCoordinates(shape)
	{
		if(shape.coordinate.y < this.board.rows(0-1))
		{
			for(let i=0;i<shape.size;i++)
			{
				yield shape.coordinate.clone().add(new Vector(1,0).mul(i)).add(new Vector(0,1));
			}
		}
		
		if(shape.coordinate.x + shape.size - 1 < this.board.columns() - 1)
		yield shape.coordinate.clone().add(new Vector(1,0).mul(shape.size));
		
		
		if(shape.coordinate.y >0)
		{
			for(let i=0;i<shape.size;i++)
			{
				yield shape.coordinate.clone().add(new Vector(1,0).mul(i)).add(new Vector(0,-1));
			}
		}
		if(shape.coordinate.x > 0)
		yield shape.coordinate.clone().add(new Vector(-1,0));
	}
	
	async addRows(count=1)
	{
		const existingShapes = [...this.shapeController.shapes()];
		const rows = [...this.createRows(count)];
		console.log(rows);
		const moveSteps = rows.length;
		
		await mergeParallel([...existingShapes,
		...new Set(rows.map(r=>r.map(s=>s.shape))
		.flatMap(s=>s))].map(s=>{
		return async()=>{
			await this.moveUpAnim(s,new Vector(s.x,s.y - this.board.tileSize*moveSteps));
		};
		}));
		
		existingShapes.orderBy(s=>s.coordinate.y,true).forEach(s=>this.shapeController.moveShapeToCoordinate(s,s.coordinate.clone().add(new Vector(0,1*moveSteps))));
		
		for(let i=0;i<rows.length;i++)
		{
			const row = rows[i];
			const current = i;
			row.forEach(s=> this.shapeController.addShape(s.shape,new Vector(s.x,moveSteps - current - 1)));
		}
		
	}
	
	async moveUpAnim(shape,target)
	{
		const startY = shape.y;
		const animator = this.runtime.objects.Animator.createInstance(0,0,0);
		await animator.linearAnim(1/0.15,n=>{
			shape.y = lerp(startY,target.y,n);
		});
		animator.destroy();
	}
	
	*createRows(count)
	{
		let y = this.board.getTileXY(0,0).y;
		for(let i=0;i<count;i++)
		{
			y += this.board.tileSize;
			const row = this.rowProvider.next();
// 			console.log(row);
			yield row.infos.filter(info=> info.info.color>=0).map(s=>{
// 			console.log(s);
				const shape = this.runtime.objects.Shape.createInstance(this.board.layer.index,this.board.getTileXY(s.x,0).x,y);
				shape.zElevation = this.board.zElevation+0.002;
				shape.init({shapeInfo:s.info,tileSize:this.board.tileSize});
				
				return {
				shape,
				x:s.x
				};
			});
		}
	}
	
	async dropTheShapeTo(shape,to)
	{
		const startX = shape.x;
		const startY = shape.y;
		
		const targetX = this.board.getTile(to).x;
		const targetY = this.board.getTile(to).y;
		
		const animator = this.runtime.objects.Animator.createInstance(0,0,0);
		await animator.linearAnim(1/0.15,n=>{
			shape.x = lerp(startX,targetX,n);
			shape.y = lerp(startY,targetY,n);
		});
		animator.destroy();
		this.shapeController.moveShapeToCoordinate(shape,to.clone());
	}
}