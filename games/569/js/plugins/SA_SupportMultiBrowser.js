//=============================================================================
// SA_SupportMultiBrowser.js
// ----------------------------------------------------------------------------
// Created by seea
// License: MIT License  https://opensource.org/licenses/mit-license.php
//
// Plugin author:
//  Contact: https://nekono.org
//=============================================================================
// History
// 18.0 2018/11/10 Initial release.
//=============================================================================
// 更新履歴
// 18.0 2018/11/10 初版

/*:
 * ==============================================================================
 * @plugindesc v18.0 SA Support Multi Browser
 * @author seea
 * @require rpg_core.js v1.6.1
 *
 * @help
 * SA Support Multi Browser -- マルチブラウザ対応プラグイン
 *
 * 必須 - rpg_core.js v1.6.1
 *
 *
 * @param Min delta
 * @desc スクロール操作時のdelta値の最小値を設定します
 * @default 20
 * @type number
 *
 * @param Logging level
 * @desc ログ出力量を指定します  0:No Log 1:Fatal 2:+Error 3:+Warning 4:+Info 5:+Debug(重いので注意)
 * @default 4
 * @type number
 */

var Imported = Imported || {};
Imported.SA_SupportMultiBrowser = true;

//-----------------------------------------------------------------------------
(function() {
'use strict';

	// Get parameters
	var params = PluginManager.parameters('SA_SupportMultiBrowser');
	const paramMinDelta = Number(params['Min delta'] || 20);
	const paramLoggingLevel = Number(params['Logging level'] || 4);
	const LDEBUG = paramLoggingLevel >= 5 ? true : false;
	const LINFO  = paramLoggingLevel >= 4 ? true : false;
	const LWARN  = paramLoggingLevel >= 3 ? true : false;
	const LERROR = paramLoggingLevel >= 2 ? true : false;
	const LFATAL = paramLoggingLevel >= 1 ? true : false;

	// Log parameters
	if (LDEBUG) {
		console.log('== SA_SupportMultiBrowser ==');
		console.log('paramMinDelta = ' + paramMinDelta);
		console.log('paramLoggingLevel = ' + paramLoggingLevel);
	}

	const VERSION = "18.0";

	//-----------------------------------------------------------------------------
	// Utils
	//

	/**
	 * Checks whether the browser is Firefox.
	 *
	 * @static
	 * @method isFirefox
	 * @return {Boolean} True if the browser is Firefox
	 */
	Utils.isFirefox = function() {
		const agent = navigator.userAgent;
		return !!(agent.match(/firefox/i));
	};

	/**
	 * Checks whether the browser is Edge.
	 *
	 * @static
	 * @method isEdge
	 * @return {Boolean} True if the browser is Edge
	 */
	Utils.isEdge = function() {
		const agent = navigator.userAgent;
		return !!(agent.match(/Edge/i));
	};

	//-----------------------------------------------------------------------------
	// TouchInput
	//

	/**
	 * @static
	 * @method _onWheel
	 * @param {WheelEvent} event
	 * @private
	 * @override 完全に上書きします。注意!
	 */
	TouchInput._onWheel = function(event) {
		var dx, dy;
		if (Utils.isFirefox()) {
			dx = event.deltaX * 33.33;
			dy = event.deltaY * 33.33;
			if (LDEBUG) {
				console.log('This is Firefox. wheel: ' + dx + ', ' + dy);
			}
		} else if (Utils.isEdge()) {
			dx = event.deltaX * 0.744;
			dy = event.deltaY * 0.744;
			if (LDEBUG) {
				console.log('This is Edge. wheel: ' + dx + ', ' + dy);
			}
		} else {
			dx = event.deltaX;
			dy = event.deltaY;
			if (LDEBUG) {
				console.log('This is standard browser. wheel: ' + dx + ', ' + dy);
			}
		}

		// Compatible with Mac OS X Safari
		if (dx > 0 && dx < paramMinDelta) {
			dx = paramMinDelta;
		} else if (dx < 0 && dx > -paramMinDelta) {
			dx = -paramMinDelta;
		}
		if (dy > 0 && dy < paramMinDelta) {
			dy = paramMinDelta;
		} else if (dy < 0 && dy > -paramMinDelta) {
			dy = -paramMinDelta;
		}

		this._events.wheelX += dx;
		this._events.wheelY += dy;
		event.preventDefault();
	};

})();
