import Vector from './Vector.js';
import {clamp,lerp} from './Utils.js';
import {playSound} from './GameUtils.js';


export default class BoardInputController{
	constructor(runtime,board)
	{
		this.shapeMoved = null;
	
		this.runtime = runtime;
		this.board = board;
		this.shapeController = board.shapeController;
		this.minAndMaxDragX = new Vector();
		this.lastPositionX = 0;
		this.matchX = 0;
		this.draggingShape = null;
		this.active = true;
		this.interactable = true;
		this.matchEffect = this.runtime.objects.MatchEffect.getFirstInstance();
		
		this.pointerDownHandler = this.onPointerDown.bind(this);
		this.runtime.addEventListener("pointerdown",this.pointerDownHandler);
		
		this.pointerMoveHandler = this.onPointerMove.bind(this);
		this.runtime.addEventListener("pointermove",this.pointerMoveHandler);
		
		this.pointerUpHandler = this.onPointerUp.bind(this);
		this.runtime.addEventListener("pointerup",this.pointerUpHandler);
		
		this.beforeLayoutEndHandler = this.onBeforeLayoutEnd.bind(this);
		this.runtime.layout.addEventListener("beforelayoutend",this.beforeLayoutEndHandler);
		
// 		this.runtime.removeEventListener('pointerdown',e);
	}
	
	onPointerDown(e)
	{
		if(!this.active ||!this.interactable) return;
	
		const {x,y} = this.getPosition(e);
		const shapes = [...this.runtime.objects.Shape.instances()].filter(s=> s.containsPoint(x,y));
		
		if(!shapes.length)
		return;
		//console.log("onPointerDown");
		
		this.draggingShape = shapes[0];
		this.lastPositionX = x;
		this.matchX = this.draggingShape.coordinate.x;
		
		this.minAndMaxDragX = this.getMinAndMaxPositionForShape(this.draggingShape);
// 	console.log("on start move shape");
		
		this.onStartMoveShape();
		
	}
	
	onPointerMove(e)
	{
		if(!this.active||!this.interactable) return;
	
		if(!this.draggingShape)return;
		
		const {x} = this.getPosition(e);
		
// 		console.log("x:"+x+" last x:"+this.lastPositionX);
		
		const deltaX = x - this.lastPositionX;
		this.onDragShape(deltaX);
		this.lastPositionX = x;
		
		this.updateMatch();
		
	}
	
	onPointerUp(_)
	{
		if(!this.active||!this.interactable) return;
	
	if(!this.draggingShape)return;
	
		playSound(this.runtime,"blockplace");
	
		this.onReleaseShape();
		this.draggingShape = null;
	}
	
// 	onStartMoveShape()
// 	{
// 	console.log("on start move shape");
// 		this.matchEffect.width = this.draggingShape.width;
// 		this.matchEffect.isVisible = true;
// 		this.updateMatch();
// 		const shape = this.draggingShape;
// 		this.shapeEffect = this.runtime.objects.ShapeEffect.createInstance(shape.layer.index,shape.x,shape.y);
// 		this.shapeEffect.opacity = 0.2;
// 	}
	
	
	getMinAndMaxPositionForShape(shape)
	{
		let minX = shape.coordinate.x;
// 		console.log(this.shapeController.shapeGrid);
// 		console.log(this.shapeController.shapeGrid[shape.coordinate.x-1][shape.coordinate.y]);
		if(shape.coordinate.x > 0 && !this.shapeController.shapeGrid[shape.coordinate.x-1][shape.coordinate.y])
		{
			minX = this.getMinFreeCoordinateFrom(shape.coordinate.clone().sub(new Vector(1,0))).x;
		}
		
		const nexToDrag = shape.coordinate.x + shape.size;
		
		let maxX = shape.coordinate.x;
		
		if(nexToDrag <= this.board.columns()-1 && !this.shapeController.shapeGrid[nexToDrag][shape.coordinate.y])
		{
			maxX = this.getMaxFreeCoordinateFrom(new Vector(nexToDrag,shape.coordinate.y)).x - shape.size+1;
			
		}
		
		return new Vector(this.board.getTileXY(minX,0).x,this.board.getTileXY(maxX,0).x)
	}
	
	getMinFreeCoordinateFrom(coordinate)
	{
		if(this.shapeController.shapeGrid[coordinate.x][coordinate.y])
			throw Error();
			
		if(coordinate.x<=0)
			return coordinate.clone();
		
		if(!this.shapeController.shapeGrid[coordinate.x-1][coordinate.y])
			return this.getMinFreeCoordinateFrom(coordinate.clone().sub(new Vector(1,0)));
			
		return coordinate;
	}
	
	getMaxFreeCoordinateFrom(coordinate)
	{
		if(this.shapeController.shapeGrid[coordinate.x][coordinate.y])
			throw Error();
			
		if(coordinate.x>= this.board.columns()-1)
			return coordinate.clone();
		
		if(!this.shapeController.shapeGrid[coordinate.x+1][coordinate.y])
			return this.getMaxFreeCoordinateFrom(coordinate.clone().add(new Vector(1,0)));
			
		return coordinate;
	}
	
	onDragShape(deltaX)
	{
		//console.log(this.minAndMaxDragX);
		this.draggingShape.x = clamp(this.draggingShape.x+deltaX,this.minAndMaxDragX.x,this.minAndMaxDragX.y);
	}
	
	
	updateMatch()
	{
		this.matchX = this.board.getNearestCoordinate(this.draggingShape.x,this.draggingShape.y).x;
		this.updateMatchEffect();
	}
	
	updateMatchEffect()
	{
// 	console.log("x:"+this.board.getTileXY(this.matchX,0).x + (this.draggingShape.size-1)*this.board.tileSize/2);
		this.matchEffect.x = this.board.getTileXY(this.matchX,0).x + (this.draggingShape.size-1)*this.board.tileSize/2;
	}
	
	async onReleaseShape()
	{
		this.matchEffect.isVisible = false;
		if(this.shapeEffect)
		this.shapeEffect.destroy(0);
		this.shapeEffect = null;
		
		await this.handleDropShape();
	}
	
	async handleDropShape()
	{
		const draggingShape = this.draggingShape;
		if(this.matchX === draggingShape.coordinate.x)
		{
			await this.moveToX(draggingShape,this.board.getTileXY(draggingShape.coordinate.x,0).x);
		}
		else
		{
			await this.moveToX(draggingShape,this.board.getTileXY(this.matchX,0).x);
			this.shapeController.moveShapeToCoordinate(draggingShape,new Vector(this.matchX,draggingShape.coordinate.y));
			if(this.shapeMoved) this.shapeMoved(draggingShape);
		}
	}
	
	async moveToX(obj,target)
	{
		const startX = obj.x;
		const animator = this.runtime.objects.Animator.createInstance(this.board.layer.index,0,0);
		await animator.linearAnim(10,n=> obj.x = lerp(startX,target,n));
		animator.destroy();
	}
	
	
	onStartMoveShape()
	{
		this.matchEffect.width = this.draggingShape.size*this.board.tileSize;
		this.matchEffect.isVisible = true;
		this.updateMatch();
		
		this.shapeEffect = this.runtime.objects.Shape.createInstance(this.draggingShape.layer.index,this.draggingShape.x,this.draggingShape.y);
		this.shapeEffect.zElevation = this.draggingShape.zElevation + 0.0001;
		this.shapeEffect.init({shapeInfo:{color:this.draggingShape.color,size:this.draggingShape.size},tileSize:this.draggingShape.tileSize});
		this.shapeEffect.opacity = 0.2;
		this.shapeEffect.isCollisionEnabled = false;
	}
	
	
	getPosition(e)
	{
		const result = this.runtime.layout.getLayer(0).cssPxToLayer(e.clientX,e.clientY);
		return new Vector(result[0],result[1]);
	}
	
	onBeforeLayoutEnd()
	{
		this.dispose();
	}
	
	dispose()
	{
		this.runtime.removeEventListener("pointerdown",this.pointerDownHandler);
		this.runtime.removeEventListener("pointermove",this.pointerMoveHandler);
		this.runtime.removeEventListener("pointerup",this.pointerUpHandler);
		this.runtime.layout.removeEventListener("beforelayoutend",this.beforeLayoutEndHandler);
		
		console.log('dispose input controller');
		
	}
}