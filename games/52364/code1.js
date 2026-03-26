gdjs.juegoCode = {};
gdjs.juegoCode.GDobjPopObjects1= [];
gdjs.juegoCode.GDobjPopObjects2= [];
gdjs.juegoCode.GDobjPopObjects3= [];
gdjs.juegoCode.GDNewSpriteObjects1= [];
gdjs.juegoCode.GDNewSpriteObjects2= [];
gdjs.juegoCode.GDNewSpriteObjects3= [];
gdjs.juegoCode.GDobjPuntosObjects1= [];
gdjs.juegoCode.GDobjPuntosObjects2= [];
gdjs.juegoCode.GDobjPuntosObjects3= [];
gdjs.juegoCode.GDobjCasaObjects1= [];
gdjs.juegoCode.GDobjCasaObjects2= [];
gdjs.juegoCode.GDobjCasaObjects3= [];
gdjs.juegoCode.GDobjNextObjects1= [];
gdjs.juegoCode.GDobjNextObjects2= [];
gdjs.juegoCode.GDobjNextObjects3= [];
gdjs.juegoCode.GDpartClicObjects1= [];
gdjs.juegoCode.GDpartClicObjects2= [];
gdjs.juegoCode.GDpartClicObjects3= [];


gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects = Hashtable.newFrom({"objPop": gdjs.juegoCode.GDobjPopObjects1});
gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDpartClicObjects1Objects = Hashtable.newFrom({"partClic": gdjs.juegoCode.GDpartClicObjects1});
gdjs.juegoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, gdjs.randomFloatInRange(0.4, 0.6));
}}

}


};gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects = Hashtable.newFrom({"objPop": gdjs.juegoCode.GDobjPopObjects1});
gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects = Hashtable.newFrom({"objPop": gdjs.juegoCode.GDobjPopObjects1});
gdjs.juegoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 25);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 25);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.juegoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
if (isConditionTrue_0) {
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("objNext"), gdjs.juegoCode.GDobjNextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "great.wav", false, 70, 1);
}{for(var i = 0, len = gdjs.juegoCode.GDobjNextObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDobjNextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("finletra", 0, "easeOutCubic", 0.5, false);
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("abcpop", "fase", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.juegoCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjCasaObjects1Objects = Hashtable.newFrom({"objCasa": gdjs.juegoCode.GDobjCasaObjects1});
gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjNextObjects1Objects = Hashtable.newFrom({"objNext": gdjs.juegoCode.GDobjNextObjects1});
gdjs.juegoCode.userFunc0x816230 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
};
gdjs.juegoCode.eventsList3 = function(runtimeScene) {

{


gdjs.juegoCode.userFunc0x816230(runtimeScene);

}


};gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects = Hashtable.newFrom({"objPop": gdjs.juegoCode.GDobjPopObjects1});
gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects = Hashtable.newFrom({"objPop": gdjs.juegoCode.GDobjPopObjects1});
gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects = Hashtable.newFrom({"objPop": gdjs.juegoCode.GDobjPopObjects1});
gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDpartClicObjects1Objects = Hashtable.newFrom({"partClic": gdjs.juegoCode.GDpartClicObjects1});
gdjs.juegoCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("objPop"), gdjs.juegoCode.GDobjPopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juegoCode.GDobjPopObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDobjPopObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.juegoCode.GDobjPopObjects1[k] = gdjs.juegoCode.GDobjPopObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDobjPopObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects) >= gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects) - 4;
}
if (isConditionTrue_0) {
/* Reuse gdjs.juegoCode.GDobjPopObjects1 */
gdjs.juegoCode.GDpartClicObjects1.length = 0;

{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects);
}{for(var i = 0, len = gdjs.juegoCode.GDobjPopObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDobjPopObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, 0.3);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDpartClicObjects1Objects, (( gdjs.juegoCode.GDobjPopObjects1.length === 0 ) ? 0 :gdjs.juegoCode.GDobjPopObjects1[0].getCenterXInScene()), (( gdjs.juegoCode.GDobjPopObjects1.length === 0 ) ? 0 :gdjs.juegoCode.GDobjPopObjects1[0].getCenterYInScene()), "");
}}

}


};gdjs.juegoCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("objPop"), gdjs.juegoCode.GDobjPopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juegoCode.GDobjPopObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDobjPopObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.juegoCode.GDobjPopObjects1[k] = gdjs.juegoCode.GDobjPopObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDobjPopObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.juegoCode.GDobjPopObjects1 */
gdjs.juegoCode.GDpartClicObjects1.length = 0;

{for(var i = 0, len = gdjs.juegoCode.GDobjPopObjects1.length ;i < len;++i) {
    gdjs.juegoCode.GDobjPopObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDpartClicObjects1Objects, (( gdjs.juegoCode.GDobjPopObjects1.length === 0 ) ? 0 :gdjs.juegoCode.GDobjPopObjects1[0].getCenterXInScene()), (( gdjs.juegoCode.GDobjPopObjects1.length === 0 ) ? 0 :gdjs.juegoCode.GDobjPopObjects1[0].getCenterYInScene()), "");
}
{ //Subevents
gdjs.juegoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "fase" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))), 0, 0, -(1000));
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "pompa.wav");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "poptop");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("objPop"), gdjs.juegoCode.GDobjPopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juegoCode.GDobjPopObjects1.length;i<l;++i) {
    if ( gdjs.juegoCode.GDobjPopObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.juegoCode.GDobjPopObjects1[k] = gdjs.juegoCode.GDobjPopObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDobjPopObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects) == gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjPopObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12453740);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.juegoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("objCasa"), gdjs.juegoCode.GDobjCasaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjCasaObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inicio", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("objNext"), gdjs.juegoCode.GDobjNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.juegoCode.mapOfGDgdjs_9546juegoCode_9546GDobjNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.juegoCode.GDobjNextObjects1.length;i<l;++i) {
    if ( !(gdjs.juegoCode.GDobjNextObjects1[i].getBehavior("Tween").isPlaying("finletra")) ) {
        isConditionTrue_0 = true;
        gdjs.juegoCode.GDobjNextObjects1[k] = gdjs.juegoCode.GDobjNextObjects1[i];
        ++k;
    }
}
gdjs.juegoCode.GDobjNextObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", false);
}
{ //Subevents
gdjs.juegoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "poptop") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "poptop");
}
{ //Subevents
gdjs.juegoCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.juegoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.juegoCode.GDobjPopObjects1.length = 0;
gdjs.juegoCode.GDobjPopObjects2.length = 0;
gdjs.juegoCode.GDobjPopObjects3.length = 0;
gdjs.juegoCode.GDNewSpriteObjects1.length = 0;
gdjs.juegoCode.GDNewSpriteObjects2.length = 0;
gdjs.juegoCode.GDNewSpriteObjects3.length = 0;
gdjs.juegoCode.GDobjPuntosObjects1.length = 0;
gdjs.juegoCode.GDobjPuntosObjects2.length = 0;
gdjs.juegoCode.GDobjPuntosObjects3.length = 0;
gdjs.juegoCode.GDobjCasaObjects1.length = 0;
gdjs.juegoCode.GDobjCasaObjects2.length = 0;
gdjs.juegoCode.GDobjCasaObjects3.length = 0;
gdjs.juegoCode.GDobjNextObjects1.length = 0;
gdjs.juegoCode.GDobjNextObjects2.length = 0;
gdjs.juegoCode.GDobjNextObjects3.length = 0;
gdjs.juegoCode.GDpartClicObjects1.length = 0;
gdjs.juegoCode.GDpartClicObjects2.length = 0;
gdjs.juegoCode.GDpartClicObjects3.length = 0;

gdjs.juegoCode.eventsList5(runtimeScene);

return;

}

gdjs['juegoCode'] = gdjs.juegoCode;
