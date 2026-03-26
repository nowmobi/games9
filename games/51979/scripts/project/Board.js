import Vector from './Vector.js';
import BoxGrid from './BoxGrid.js';
import BoardLogicController from './BoardLogicController.js';
import BoardShapeController from './BoardShapeController.js';
import BoardInputController from './BoardInputController.js';
import BoardGameController from './BoardGameController.js';
import {boardSize} from './Settings.js';


export default class Board extends ISpriteInstance{

	constructor()
	{
	super();
		this.sizeInWorld = new Vector(825,1050);
		this.size = new Vector(boardSize.x,boardSize.y);

		this.spacing = 0;
		this.tileSize = 0;
		this.boxGrid = null;
		this.tiles = [];
		
		this.init();
	}
	
	
	init()
	{
		this.updateBoard();
		this.shapeController = new BoardShapeController(this.runtime,this);
		this.logicController = new BoardLogicController(this.runtime,this);
		this.inputController = new BoardInputController(this.runtime,this);
		this.gameController = new BoardGameController(this.runtime,this);
		this.logicController.start();
	}
	
	
	getTile(coordinate)
	{

		return this.tiles.find(t=>t.coordinate.equal(coordinate));
	}
	
	getTileXY(x,y)
	{
		return this.getTile(new Vector(x,y));
	}
	
	rows()
	{
		return this.size.y;
	}
	
	columns()
	{
		return this.size.x;
	}
	
	getNearestCoordinate(x,y)
	{
		const position = new Vector(x,y);
		return this.boxGrid.getNearestCoordinateForRelativePosition(position.sub(new Vector(this.x,this.y).sub(new Vector(1,-1).mul(this.sizeInWorld.x/2)).add(new Vector(1,-1).mul(this.tileSize/2))));
	}
	
	updateBoard()
	{
		const width = this.sizeInWorld.x;
		const height = this.sizeInWorld.y;
		
		this.tileSize = Math.min((width - (this.size.x-1)*this.spacing)/this.size.x,(height - (this.size.y-1)*this.spacing)/this.size.y);
		this.boxGrid = new BoxGrid(this.tileSize,this.spacing);
		this.generateBoardTiles();
		
	}
	
	generateBoardTiles()
	{
		for(let i=0;i<this.size.x;i++)
		{
			for(let j=0;j<this.size.y;j++)
			{
				this.addBoardTile(i,j);
			}
		}
	}

	addBoardTile(x,y)
	{
	const relativePosition = this.boxGrid.getRelativePositionForCoordinate(new Vector(x,y));
// 	console.log("x:"+x+" y:"+y+" tile:"+this.tileSize+" relative:"+JSON.stringify(relativePosition));
		const position = new Vector(this.x,this.y).add(new Vector(-(this.tileSize*this.size.x+this.spacing*(this.size.x-1))/2,(this.tileSize*this.size.y+this.spacing*(this.size.y-1))/2)).add(new Vector(this.tileSize/2,-this.tileSize/2)).add(new Vector(relativePosition.x,-relativePosition.y));
		
		const tile = this.runtime.objects.BoardTile.createInstance(this.layer.index,position.x,position.y);
		tile.zElevation = this.zElevation+0.0001;
		tile.board = this;
		tile.setSize(this.tileSize);
		tile.setCoordinate(new Vector(x,y));
		this.tiles.push(tile);
	}
	

}