			//Play sound effect
	export function playSound(runtime,name)
	{
		if(runtime.globalVars.SoundDisable)
		return;
		const ist = runtime.objects.SoundEffect.createInstance(0,0,0);
		ist.instVars.Name = name;
		ist.destroy();
	}
	