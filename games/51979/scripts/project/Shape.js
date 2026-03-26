import Vector from './Vector.js';
import {lerp} from './Utils.js';
import {comboColor,toColorRGB} from './Settings.js';

export default class Shape extends ISpriteInstance{
	
	constructor()
	{
		super();
		this.coordinate = new Vector(0,0);
		this.color = 0;
		this.size = 1;
		this.tileSize = 0;
		this.isComboShape = false;
		this.comboRenderers = [];
	}
	
	init(data)
	{
		this.isComboShape = data.shapeInfo.color === comboColor;
		this.color = data.shapeInfo.color;
		this.size = data.shapeInfo.size;
		this.setAnimation(this.color+"_"+this.size);
		this.setTileSize(data.tileSize);
	}
	
	setTileSize(tileSize)
	{
		const aspect = this.height/this.width;
		this.height = tileSize;
		this.width = this.height/aspect;
		this.tileSize = tileSize;
	}
	
	break(effect)
	{
		effect = effect || "ShapeBreakEffect";
		console.log(effect);
		if(effect)
		{
			[...Array(this.size).keys(0)].forEach(i=>{
				const breakEffect = this.runtime.objects[effect].createInstance(this.layer.index,this.x+i*this.tileSize,this.y);
				
				breakEffect.color = this.color;
				breakEffect.simulate();
			});
		}
		
		this.comboRenderers.forEach(r=>r.destroy());
		this.destroy();
	}
	
	async comboAnim()
	{
		if(this.isComboShape)
			await this.comboShapeComboAnim();
		else
			await this.normalShapeComboAnim();
	}
	
	async normalShapeComboAnim()
	{
		await this.comboAnimNormalized(n=>{
			this.opacity = lerp(1,0.6,n);``
		});
	}
	
	async comboAnimNormalized(onFrame,count=3,time=0.1,delay=0.1)
	{
		const animator = this.runtime.objects.Animator.createInstance(this.layer.index,0,0);
		
		for(let j=0;j<count;j++)
		{
			for(let i=0;i<2;i++)
			{
				await animator.linearAnim(1/time,onFrame);
			}
		}
		await animator.delay(delay);
		animator.destroy();
		
	}
	
	async comboShapeComboAnim()
	{
		this.addComboRendererIfNeeded();
		await this.comboAnimNormalized(n=>{
			this.comboRenderers.forEach(r=>r.opacity = lerp(0.6,1,n));
		});
	}
	
	addComboRendererIfNeeded()
	{
		if(this.comboRenderers.length || !this.isComboShape)
		return;
		
		this.comboRenderers.push(...[...Array(this.size).keys()].map(i=>{
			const combo = this.runtime.objects.ComboEffect.createInstance(this.layer.index,this.x,this.y);
			combo.width = this.tileSize*1.25;
			combo.height = this.tileSize*1.25;
			combo.x = this.x + this.tileSize*i;
			combo.zElevation = this.zElevation + 0.001;
			
			return combo;
			
		}));
		
		this.zElevation += 0.002;
	}
	

}