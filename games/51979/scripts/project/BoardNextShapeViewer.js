

export default class BoardNextShapeViewer extends ISpriteInstance{
	
	constructor()
	{
		super();
		this.board = null;
		this.logicController = null;
		this.tiles = [];
		this.row = null;
		this.init();
	}
	
	async init()
	{
		const animator = this.runtime.objects.Animator.createInstance(this.layer.index,0,0);
		animator.waitUntil(()=> this.runtime.objects.Board.getFirstInstance());
		animator.destroy();
		
		this.board = this.runtime.objects.Board.getFirstInstance();
		this.logicController = this.board.logicController;
		this.updateRow(this.logicController.rowProvider.waitingNextRow);
		this.logicController.rowProvider.rowGenerated = this.rowGenerated.bind(this);
	}
	
	rowGenerated(row)
	{
		this.updateRow(row);
	}
	
	updateRow(row)
	{
		this.row = row;
		this.tiles.forEach(t=>t.destroy());
		this.tiles = [];
		
		for(const {info,x} of this.row.infos.filter(info=>info.info.color>=0))
		{
		
// 			console.log(info);
// 			console.log(x+":"+this.board.getTileXY(x,0).x);
			const tile = this.runtime.objects.NextShapeViewerTile.createInstance(this.layer.index,this.board.getTileXY(x,0).x,this.y);
			tile.init(x,info.size,this.logicController.board.tileSize);
			this.tiles.push(tile);
		}
	}
	
	
}