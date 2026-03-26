import LerpAnim from './LerpAnim.js';
import {lerp,rand,max} from './Utils.js';

import LinearMoveAnim from './LinearAnim.js';

export default class Animator extends ISpriteInstance{

constructor()
{
	super();
	this.updatables = [];
}

	update()
	{
		this.updatables.forEach(u=>u.update(this.runtime.dt));
	}
	
		waitUntil(predicate)
	{
		return new Promise((resolve,_)=>{
			
			let wait = null;
			const removeFromUpdatables = this.removeFromUpdatables.bind(this);
			wait = { 
			update(){
				if(predicate())
				{
					resolve();
					removeFromUpdatables(wait);
				}
			}
			};
			
			
			this.addToUpdatables(wait);
		});
	}
	
		addToUpdatables(updatable)
	{
		this.updatables.push(updatable);
	}
	
	removeFromUpdatables(updatable)
	{
		this.updatables.slice(this.updatables.indexOf(updatable),1);
	}

	linearAnim(speed,updateCallback,finished,token=null)
	{
		return new Promise((resolve,_)=>{
			
			let anim = null;
			anim = new LinearMoveAnim(speed,(n)=>{
			if(updateCallback)updateCallback(n);
			
			if(token && token.cancel)
			{
				this.removeFromUpdatables(anim);
			}
			
			},()=>{
				this.removeFromUpdatables(anim);
				if(finished)finished();
				resolve();
				
			});
			
			this.addToUpdatables(anim);
		});
	}
	
	
	lerpAnim(speed,start,end,updateCallback,finished,token)
	{
		return new Promise((resolve,_)=>{
			
			let anim = null;
			anim = new LerpAnim(speed,start,end,(n)=>{
			if(updateCallback)updateCallback(n);
			
			if(token && token.cancel)
			{
				this.removeFromUpdatables(anim);
			}
			
			},()=>{
				this.removeFromUpdatables(anim);
				if(finished)finished();
				
				resolve();
			});
			
			this.addToUpdatables(anim);
		});
	}

	delay(s)
	{
		return new Promise((resolve,_)=>{
			setTimeout(resolve,s*1000);
		});
	}
}