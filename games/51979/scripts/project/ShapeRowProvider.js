import {rand,randFloat,aggregateFirst} from './Utils.js';
import {shapeInfos,disableColor,comboColor,enableRainbow} from './Settings.js';

export default class ShapeRowProvider{
	
	constructor(columns)
	{
		this.columns = columns;
		this.rowGenerated = null;
// 		console.log(JSON.stringify(shapeInfos));
	}
	
	
	
	
	getRandomShapeInfo(maxSize)
	{
		const availableInfos = [...this.activeShapeInfos().filter(info=>info.color !== comboColor || enableRainbow),...this.emptyShapeInfos()].filter(info=>info.size<=maxSize);
		const totalProbablity = availableInfos.reduce((total,item)=>total+item.probablity,0);
		const rand = randFloat(0,totalProbablity);
		
		const selected = aggregateFirst(availableInfos,(total,item)=>total+item.probablity,total=>total>=rand,0);
// 		console.log(availableInfos);
// 		console.log(selected);
// 		console.log(rand);
		const shapeInfo = availableInfos[selected];
		
		return {
		color:shapeInfo.color,
		size:shapeInfo.size
		};
		
	}
	
	next()
	{
		if(!this.waitingNextRow)
			this.generateNextRow();
			
		const row = this.waitingNextRow;
		
		this.generateNextRow();
		
		return row;
	}
	
	generateNextRow()
	{
		const row = new Row(this.randomRow());
		row.randomize();
		
		this.waitingNextRow = row;
		
		if(this.rowGenerated) this.rowGenerated(row);
	}
	
	randomRow()
	{
		let leftSize = this.columns;
		
		const emptyShapeInfos = this.emptyShapeInfos().map(info=>{return {size:info.size,color:info.color};});
		
		const randomEmptyShape = emptyShapeInfos[rand(0,emptyShapeInfos.length)];
		const rowShapeInfos = [{x:0,info:randomEmptyShape}];
		leftSize -= randomEmptyShape.size;
		
		while(leftSize>0)
		{
			const info = this.getRandomShapeInfo(leftSize);
			if(info.color>=0)
			{
// 				console.log({x:this.columns-leftSize,info:info});
				rowShapeInfos.push({x:this.columns-leftSize,info:info});
			}	
			
			leftSize -= info.size;
		}
		
		return rowShapeInfos;
	}

	
	
	activeShapeInfos()
	{
		return shapeInfos.filter(info=>info.color !== disableColor);
	}
	
	
	emptyShapeInfos()
	{
		return [...new Set(shapeInfos.map(item=>item.size))].map(size=>{return {size:size,color:-1,probablity:1}});
	}

}

class Row{


	constructor(infos)
	{
		this.infos = infos;
	}
	
	randomize()
	{
		const availableInfos = [...this.infos];
		const infoList = [];
		
		while(availableInfos.length)
		{
			const index = rand(0,availableInfos.length);
			const item = availableInfos[index];
			availableInfos.splice(index,1);
			item.x = infoList.reduce((total,item)=>total+item.info.size,0);
			infoList.push(item);
		}
		
		this.infos = infoList;
	}
	
}