

export function createTwoDimentionalArray(x,y,defaultValue)
{
	return [...new Array(x).keys()].map(_=>Array(y).fill(defaultValue));
}

export function cloneTwoDimentionalArray(array)
{
	return array.map(a=>[...a]);
}