import Vector from './Vector.js';

export default class BoardDropBlockCalculator{
	
	constructor(shapeController)
	{
		this.shapeController = shapeController;
	}
	
	getDroppingBlockAndTarget()
	{
		this.shapeGrid = this.shapeController.shapeGrid.map(g=> [...g]);
// 		console.log(this.shapeGrid);
		const shapes = [...new Set([...Array(this.shapeGrid[0].length).keys()].map(y=>[...Array(this.shapeGrid.length).keys()].map(x=> this.shapeGrid[x][y]).filter(s=>s)).flatMap(s=>s))
	];
	
		const shapeAndPositions = [];
		for(const shape of shapes)
		{
			const position = this.getImmediateTargetPosition(shape);
			if(position.equal(shape.coordinate)) continue;
			
			shapeAndPositions.push({shape,position});
			this.moveShapeToCoordinate(shape,position);
		}
		
		return shapeAndPositions;
	}

	getImmediateTargetPosition(shape)
	{
		const dropRows = this.getImmediateDroppableRows(shape);
		return shape.coordinate.clone().add(new Vector(0,-1).mul(dropRows));
	}
	
	getImmediateDroppableRows(shape)
	{
		let dropRows = 0;
		
		for(let i = shape.coordinate.y-1; i>=0;i--)
		{
			for(let j = shape.coordinate.x;j<shape.coordinate.x + shape.size;j++)
			{
				if(this.shapeGrid[j][i])
					return dropRows;
			}
			
			dropRows++;
		}
		
		return dropRows;
	}
	
	moveShapeToCoordinate(shape,coordinate)
	{
		this.removeShape(shape);
		this.addShape(shape,coordinate);
	}
	
	addShape(shape,coordinate)
	{
		for(let i=0; i<shape.size;i++)
		{
			this.shapeGrid[coordinate.x+i][coordinate.y] = shape;
		}
	}
	
	removeShape(shape)
	{
		for(let i =0;i<shape.size;i++)
		{
			if(this.shapeGrid[shape.coordinate.x+i][shape.coordinate.y] === shape)
			{
				this.shapeGrid[shape.coordinate.x+i][shape.coordinate.y] = null;
			}
		}
	}
}