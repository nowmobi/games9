import {createTwoDimentionalArray,cloneTwoDimentionalArray} from './ArrayUtils.js';

export default class BoardShapeController{
		constructor(runtime,board)
		{
		this.runtime = runtime;
			this.board = board;
			this.shapeGrid = createTwoDimentionalArray(board.columns(),board.rows(),null);
// 			console.log(this.shapeGrid);
		}
		
		shapes()
		{
			return [...new Set(this.shapeGrid.flat().filter(s=>s))];
		}
		
		getShapeGrid()
		{
			return cloneTwoDimentionalArray(this.shapeGrid);
		}
		
		
		addShape(shape,coordinate)
		{
			shape.coordinate = coordinate.clone();
			for(let i=0;i<shape.size;i++)
			{
				this.shapeGrid[coordinate.x+i][coordinate.y] = shape;
			}
		}
		
		removeShape(shape)
		{
			for(let i=0;i<shape.size;i++)
			{
				if(this.shapeGrid[shape.coordinate.x+i][shape.coordinate.y]!==shape)
				continue;
				
				this.shapeGrid[shape.coordinate.x+i][shape.coordinate.y] = null;
			}
		}
		
		moveShapeToCoordinate(shape,coordinate)
		{
			this.removeShape(shape);
			this.addShape(shape,coordinate);
			const tile = this.board.getTile(coordinate);
			shape.x = tile.x;
			shape.y = tile.y;
		}
}