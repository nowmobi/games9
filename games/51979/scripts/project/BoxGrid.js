import Vector from './Vector.js';

export default class BoxGrid{


	constructor(tileSize,spacing)
	{
		this.tileSize = tileSize;
		this.spacing = spacing;
	}
	
	getRelativePositionForCoordinate(coordinate)
	{
	 	return new Vector(coordinate.x*(this.tileSize+this.spacing),coordinate.y*(this.tileSize+this.spacing));
	}
	
	getNearestCoordinateForRelativePosition(pos)
	{
		return new Vector(Math.round(pos.x/(this.tileSize+this.spacing)),Math.round(pos.y/(this.tileSize+this.spacing)));
	}
	
	getAdjacentCoordinates(vec)
	{
		return [vec.add(new Vector(0,1)),vec.add(new Vector(1,0)),vec.add(new Vector(0,-1)),vec.add(new Vector(-1,0))];
	}
	
}