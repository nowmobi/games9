import {scene} from "./Main.js";
import {storeUrl} from "./Settings.js";
import {lerp} from './Utils.js';

function getScene(){
	return scene;
}



const scriptsInEvents = {

	async Egame_Event1_Act11(runtime, localVars)
	{
		runtime.globalVars.StoreUrl = storeUrl;
	},

	async Egame_Event7_Act1(runtime, localVars)
	{
		console.log("First Time Get");
	},

	async Egame_Event8_Act4(runtime, localVars)
	{
		scene.board.inputController.active = false;
	},

	async Egame_Event15_Act1(runtime, localVars)
	{
		scene.playSound('click');
	},

	async Egame_Event16_Act1(runtime, localVars)
	{
		scene.playSound('click');
	},

	async Egame_Event19_Act1(runtime, localVars)
	{
		scene.playSound('click');
	},

	async Egame_Event20_Act2(runtime, localVars)
	{
		scene.playSound('click');
	},

	async Egame_Event26_Act2(runtime, localVars)
	{
		scene.playSound('click');
	},

	async Egame_Event29_Act6(runtime, localVars)
	{
		scene.board.inputController.active = true;
	},

	async Egame_Event31_Act1(runtime, localVars)
	{
		[...runtime.objects.ShapeBreakEffect.instances()].forEach(a=>a.update(runtime.dt));
	},

	async Global_Event2_Act1(runtime, localVars)
	{
		
		const content = runtime.getInstanceByUid(localVars.ObjectId);
		
		const start = localVars.Start;
		const end = localVars.End;
		const intermidateN = localVars.IntermidateN;
		const speed = localVars.Speed;
		const property = localVars.Property;
		
		
		const intermidate = (end - start)*(1+localVars.IntermidateOffset) + start;
		
		
		const animator = runtime.objects.Animator.createInstance(0,0,0);
		await animator.lerpAnim(speed,0,localVars.NormalizedEnd,n=>{
		
			content[property] =  n< intermidateN ? lerp(start,intermidate,n/intermidateN):lerp(intermidate,end,(n-intermidateN)/(1-intermidateN));
			
		// 	console.log("animate :"+ content[localVars.Property])
		});
		animator.destroy();
		
	},

	async Global_Event3_Act1(runtime, localVars)
	{
		
		const content = runtime.getInstanceByUid(localVars.ObjectId);
		const isX = localVars.X;
		const defaultSide = localVars.DefaultSide;
		
		const start = isX? (defaultSide? content.x - runtime.layout.width : content.x + runtime.layout.width):
		(defaultSide? content.y - runtime.layout.height : content.y + runtime.layout.height);
		const end =  isX? content.x : content.y;
		
		const intermidateOffset = localVars.IntermidateOffset ? +localVars.IntermidateOffset : 0.05;
		
		const intermidateN = localVars.IntermidateN ? +localVars.IntermidateN : 0.9;
		
		const speed = localVars.Speed ? +localVars.Speed : 6;
		
		const normalizedEnd = localVars.NormalizedEnd ? +localVars.NormalizedEnd : 1.2;
		
		await runtime.callFunction("AnimateFloat",content.uid,isX? "x":"y",start,end,intermidateOffset,intermidateN,speed,normalizedEnd);
		
	},

	async Global_Event4_Act1(runtime, localVars)
	{
		
		const content = runtime.getInstanceByUid(localVars.ObjectId);
		const scaleUp = localVars.ScaleUp;
		const minScale = localVars.MinScale ? +localVars.MinScale : 0.6;
		
		const start = scaleUp ? minScale : 1;
		const end =  scaleUp? 1 : minScale;
		
		const intermidateOffset = localVars.IntermidateOffset ? +localVars.IntermidateOffset : 0.05;
		
		const intermidateN = localVars.IntermidateN ? +localVars.IntermidateN : 0.9;
		
		const speed = localVars.Speed ? +localVars.Speed : 6;
		
		const normalizedEnd = localVars.NormalizedEnd ? +localVars.NormalizedEnd : 1.2;
		
		 runtime.callFunction("AnimateFloat",content.uid,"width",start*content.width,end*content.width,intermidateOffset,scaleUp? intermidateN : 1 - intermidateN,speed,normalizedEnd);
		
		await runtime.callFunction("AnimateFloat",content.uid,"height",start*content.height,end*content.height,intermidateOffset,scaleUp? intermidateN : 1 - intermidateN,speed,normalizedEnd);
		
	},

	async Global_Event5_Act1(runtime, localVars)
	{
		const tile = runtime.getInstanceByUid(localVars.ObjectId);
		
		const animator = runtime.objects.Animator.createInstance(0,0,0);
		
		const normalWidth = tile.width;
		const normalHeight = tile.height;
		
		const normalizedEnd = localVars.NormalizedEnd ? +localVars.NormalizedEnd : 1.2;
		const intermidateN = localVars.IntermidateN ? +localVars.IntermidateN : 0.3;
		const intermidateScale = localVars.MaxScale ? +localVars.MaxScale : 1.1;
		
		const speed = localVars.Speed ? +localVars.Speed : 10;
		
		await animator.lerpAnim(speed,0,normalizedEnd,n=>{
			const scale =  intermidateN>=n ? lerp(1,intermidateScale,n/intermidateN) : lerp(intermidateScale,1,(n-intermidateN)/(1-intermidateN));
			tile.width = normalWidth*scale;
			tile.height = normalHeight*scale;
		});
		animator.destroy();
	},

	async Global_Event6_Act1(runtime, localVars)
	{
		[...runtime.objects.Animator.instances()].forEach(a=>a.update());
	},

	async Global_Event7(runtime, localVars)
	{
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

