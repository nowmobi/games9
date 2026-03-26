import Vector from './Vector.js';
import {oddColor,evenColor} from './Settings.js';


export default class BoardTile extends ISpriteInstance{

	constructor()
	{
	super();
		this.coordinate = null;
		this.size = this.width;
		this.board = null;
	}
	
	setCoordinate(coordinate)
	{
		this.coordinate = coordinate;
		this.updateColor();
	}
	
	updateColor()
	{
		this.colorRgb = (this.coordinate.y%2 + this.coordinate.x)%2 == 1 ? oddColor : evenColor;
	}
	
	setSize(size)
	{
		this.size = size;
		this.width = size;
		this.height = size;
		
	}

}