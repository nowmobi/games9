
import MainScene from "./MainScene.js";
import Shape from "./Shape.js";
import Board from "./Board.js";
import BoardTile from "./BoardTile.js";
import Animator from './Animator.js';
// import Piece from "./Piece.js";
import DiamondBreakParticles from "./DiamondBreakParticles.js";
import NextShapeViewerTile from './NextShapeViewerTile.js';
import BoardNextShapeViewer from './BoardNextShapeViewer.js';
import * as ae from './ArrayExtensions.js';

export let scene = null;

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.

console.log("Run on start up");
runtime.objects.Animator.setInstanceClass(Animator);
	runtime.objects.Shape.setInstanceClass(Shape);
	runtime.objects.Board.setInstanceClass(Board);
	runtime.objects.BoardTile.setInstanceClass(BoardTile);
// 	runtime.objects.Piece.setInstanceClass(Piece);
	runtime.objects.BoardNextShapeViewer.setInstanceClass(BoardNextShapeViewer);
	runtime.objects.NextShapeViewerTile.setInstanceClass(NextShapeViewerTile);
runtime.objects.ShapeBreakEffect.setInstanceClass(DiamondBreakParticles);
	runtime.getLayout("Game").addEventListener("beforelayoutstart",()=>{
		scene = new MainScene(runtime);
		console.log("Load Scene");
	});
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	if(scene)
	{
		scene.update(runtime);
	}
}
