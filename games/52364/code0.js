gdjs.inicioCode = {};
gdjs.inicioCode.GDtxtLetraObjects1= [];
gdjs.inicioCode.GDtxtLetraObjects2= [];
gdjs.inicioCode.GDtxtLetraObjects3= [];
gdjs.inicioCode.GDbtnMasObjects1= [];
gdjs.inicioCode.GDbtnMasObjects2= [];
gdjs.inicioCode.GDbtnMasObjects3= [];
gdjs.inicioCode.GDbtnMenosObjects1= [];
gdjs.inicioCode.GDbtnMenosObjects2= [];
gdjs.inicioCode.GDbtnMenosObjects3= [];
gdjs.inicioCode.GDlogotipoObjects1= [];
gdjs.inicioCode.GDlogotipoObjects2= [];
gdjs.inicioCode.GDlogotipoObjects3= [];
gdjs.inicioCode.GDbtnPlayObjects1= [];
gdjs.inicioCode.GDbtnPlayObjects2= [];
gdjs.inicioCode.GDbtnPlayObjects3= [];
gdjs.inicioCode.GDobjCandadoObjects1= [];
gdjs.inicioCode.GDobjCandadoObjects2= [];
gdjs.inicioCode.GDobjCandadoObjects3= [];
gdjs.inicioCode.GDNewTextObjects1= [];
gdjs.inicioCode.GDNewTextObjects2= [];
gdjs.inicioCode.GDNewTextObjects3= [];


gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMasObjects1Objects = Hashtable.newFrom({"btnMas": gdjs.inicioCode.GDbtnMasObjects1});
gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, 1);
}}

}


};gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMenosObjects1Objects = Hashtable.newFrom({"btnMenos": gdjs.inicioCode.GDbtnMenosObjects1});
gdjs.inicioCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, 1);
}}

}


};gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnPlayObjects1Objects = Hashtable.newFrom({"btnPlay": gdjs.inicioCode.GDbtnPlayObjects1});
gdjs.inicioCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "pompa.wav", false, 75, 1);
}}

}


};gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMasObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnMenosObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnPlayObjects1Objects = Hashtable.newFrom({"btnMas": gdjs.inicioCode.GDbtnMasObjects1, "btnMenos": gdjs.inicioCode.GDbtnMenosObjects1, "btnPlay": gdjs.inicioCode.GDbtnPlayObjects1});
gdjs.inicioCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.inicioCode.GDbtnMasObjects1, gdjs.inicioCode.GDbtnMasObjects2);

gdjs.copyArray(gdjs.inicioCode.GDbtnMenosObjects1, gdjs.inicioCode.GDbtnMenosObjects2);

gdjs.copyArray(gdjs.inicioCode.GDbtnPlayObjects1, gdjs.inicioCode.GDbtnPlayObjects2);

{for(var i = 0, len = gdjs.inicioCode.GDbtnMasObjects2.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMasObjects2[i].getBehavior("Opacity").setOpacity(256);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnMenosObjects2.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMenosObjects2[i].getBehavior("Opacity").setOpacity(256);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnPlayObjects2.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnPlayObjects2[i].getBehavior("Opacity").setOpacity(256);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDbtnMasObjects1 */
/* Reuse gdjs.inicioCode.GDbtnMenosObjects1 */
/* Reuse gdjs.inicioCode.GDbtnPlayObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDbtnMasObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMasObjects1[i].getBehavior("Opacity").setOpacity(150);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnMenosObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMenosObjects1[i].getBehavior("Opacity").setOpacity(150);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnPlayObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnPlayObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


};gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMasObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnMenosObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnPlayObjects1Objects = Hashtable.newFrom({"btnMas": gdjs.inicioCode.GDbtnMasObjects1, "btnMenos": gdjs.inicioCode.GDbtnMenosObjects1, "btnPlay": gdjs.inicioCode.GDbtnPlayObjects1});
gdjs.inicioCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnMas"), gdjs.inicioCode.GDbtnMasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 25;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.inicioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnMenos"), gdjs.inicioCode.GDbtnMenosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMenosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.inicioCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnPlay"), gdjs.inicioCode.GDbtnPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.inicioCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("txtLetra"), gdjs.inicioCode.GDtxtLetraObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDtxtLetraObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDtxtLetraObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnMas"), gdjs.inicioCode.GDbtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnMenos"), gdjs.inicioCode.GDbtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnPlay"), gdjs.inicioCode.GDbtnPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMasObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnMenosObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDbtnMasObjects1 */
/* Reuse gdjs.inicioCode.GDbtnMenosObjects1 */
/* Reuse gdjs.inicioCode.GDbtnPlayObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDbtnMasObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMasObjects1[i].getBehavior("Opacity").setOpacity(200);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnMenosObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMenosObjects1[i].getBehavior("Opacity").setOpacity(200);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnPlayObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnPlayObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}
{ //Subevents
gdjs.inicioCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnMas"), gdjs.inicioCode.GDbtnMasObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnMenos"), gdjs.inicioCode.GDbtnMenosObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnPlay"), gdjs.inicioCode.GDbtnPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.inicioCode.mapOfGDgdjs_9546inicioCode_9546GDbtnMasObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnMenosObjects1ObjectsGDgdjs_9546inicioCode_9546GDbtnPlayObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.inicioCode.GDbtnMasObjects1 */
/* Reuse gdjs.inicioCode.GDbtnMenosObjects1 */
/* Reuse gdjs.inicioCode.GDbtnPlayObjects1 */
{for(var i = 0, len = gdjs.inicioCode.GDbtnMasObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMasObjects1[i].getBehavior("Opacity").setOpacity(256);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnMenosObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnMenosObjects1[i].getBehavior("Opacity").setOpacity(256);
}
for(var i = 0, len = gdjs.inicioCode.GDbtnPlayObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnPlayObjects1[i].getBehavior("Opacity").setOpacity(256);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btnPlay"), gdjs.inicioCode.GDbtnPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("objCandado"), gdjs.inicioCode.GDobjCandadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtLetra"), gdjs.inicioCode.GDtxtLetraObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDtxtLetraObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDtxtLetraObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}{for(var i = 0, len = gdjs.inicioCode.GDbtnPlayObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDbtnPlayObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}{for(var i = 0, len = gdjs.inicioCode.GDobjCandadoObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDobjCandadoObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("objCandado"), gdjs.inicioCode.GDobjCandadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtLetra"), gdjs.inicioCode.GDtxtLetraObjects1);
{for(var i = 0, len = gdjs.inicioCode.GDtxtLetraObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDtxtLetraObjects1[i].getBehavior("Opacity").setOpacity(256);
}
}{for(var i = 0, len = gdjs.inicioCode.GDobjCandadoObjects1.length ;i < len;++i) {
    gdjs.inicioCode.GDobjCandadoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.storage.readNumberFromJSONFile("abcpop", "fase", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "pompa.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "great.wav");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDtxtLetraObjects1.length = 0;
gdjs.inicioCode.GDtxtLetraObjects2.length = 0;
gdjs.inicioCode.GDtxtLetraObjects3.length = 0;
gdjs.inicioCode.GDbtnMasObjects1.length = 0;
gdjs.inicioCode.GDbtnMasObjects2.length = 0;
gdjs.inicioCode.GDbtnMasObjects3.length = 0;
gdjs.inicioCode.GDbtnMenosObjects1.length = 0;
gdjs.inicioCode.GDbtnMenosObjects2.length = 0;
gdjs.inicioCode.GDbtnMenosObjects3.length = 0;
gdjs.inicioCode.GDlogotipoObjects1.length = 0;
gdjs.inicioCode.GDlogotipoObjects2.length = 0;
gdjs.inicioCode.GDlogotipoObjects3.length = 0;
gdjs.inicioCode.GDbtnPlayObjects1.length = 0;
gdjs.inicioCode.GDbtnPlayObjects2.length = 0;
gdjs.inicioCode.GDbtnPlayObjects3.length = 0;
gdjs.inicioCode.GDobjCandadoObjects1.length = 0;
gdjs.inicioCode.GDobjCandadoObjects2.length = 0;
gdjs.inicioCode.GDobjCandadoObjects3.length = 0;
gdjs.inicioCode.GDNewTextObjects1.length = 0;
gdjs.inicioCode.GDNewTextObjects2.length = 0;
gdjs.inicioCode.GDNewTextObjects3.length = 0;

gdjs.inicioCode.eventsList4(runtimeScene);

return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
