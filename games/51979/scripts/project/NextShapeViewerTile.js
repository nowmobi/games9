

export default class NextShapeViewerTile extends ISpriteInstance{
	
	constructor()
	{
		super();
		this.coordinateX = 0;
		this.size = 1;
		this.tileSize = 1;
	}
	
	
	init(x,size,tileSize)
	{
		this.xCoordinate = x;
		this.size = size;
		this.tileSize = tileSize;
		this.setAnimation(this.size+"");
		
		this.width = this.tileSize*this.size;
	}
	
	
}