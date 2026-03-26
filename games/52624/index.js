/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */

// window.screenOrientation = "sensor_landscape";
// var platform = "oppo"; // "wx,oppo,vivo,qq,byte,h5";
// var channel = null; // "tapon";

// //-----libs-begin-----
// loadLib("libs/min/laya.core.min.js")
// loadLib("libs/min/laya.ui.min.js")
// loadLib("libs/min/laya.d3.min.js")
// loadLib("libs/min/laya.physics3D.min.js")
// //-----libs-end-------

// loadLib("fc-framework/fc.define.js");
// loadLib("fc-framework/fc.framework.js");
// loadLib("fc-framework/fc.plugin.js");
// loadLib("fc-framework/fc.utils.js");
// loadLib("fc-framework/platform/fc.view.js");
// loadLib(`fc-framework/adapter/fc.${platform}.js`);

// var scriptUrl = platform;
// if (scriptUrl == "native" && typeof fcn !== "undefined" && fcn.getScriptUrl != null) {
//     scriptUrl = fcn.getScriptUrl();
// }
// if (scriptUrl != null && scriptUrl != "" && scriptUrl != platform) {
//     loadLib(`${scriptUrl}`);
// }
// else {
//     loadLib(`fc-framework/platform/fc.${platform}.js`);
// }

// loadLib("js/bundle.js");


window.screenOrientation = "sensor_landscape";
var platform = "oppo"; // "wx,oppo,vivo,qq,byte,h5";
var channel = null; // "tapon";

//-----libs-begin-----
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.core.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.ui.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.d3.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.12.0/laya.physics3D.js")
//-----libs-end-------

loadLib("libs/fc.define.js");
loadLib("libs/fc.framework.js");
loadLib("libs/fc.plugin.js");
loadLib("libs/fc.utils.js");
loadLib("libs/fc.view.js");
// loadLib(`libs/fc.${platform}.js`);
loadLib("libs/fc.oppo.js");
loadLib("libs/fc.oppoa.js");
loadLib("js/main.js");
// var scriptUrl = platform;
// if (scriptUrl == "native" && typeof fcn !== "undefined" && fcn.getScriptUrl != null) {
//     scriptUrl = fcn.getScriptUrl();
// }
// if (scriptUrl != null && scriptUrl != "" && scriptUrl != platform) {
//     loadLib(`${scriptUrl}`);
// }
// else {
// }

