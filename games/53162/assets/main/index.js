window.__require = (function t(e, n, o) {
	function i(r, s) {
		if (!n[r]) {
			if (!e[r]) {
				var c = r.split('/');
				if (((c = c[c.length - 1]), !e[c])) {
					var d = 'function' == typeof __require && __require;
					if (!s && d) return d(c, !0);
					if (a) return a(c, !0);
					throw new Error("Cannot find module '" + r + "'");
				}
				r = c;
			}
			var l = (n[r] = { exports: {} });
			e[r][0].call(
				l.exports,
				function (t) {
					return i(e[r][1][t] || t);
				},
				l,
				l.exports,
				t,
				e,
				n,
				o
			);
		}
		return n[r].exports;
	}
	for (
		var a = 'function' == typeof __require && __require, r = 0;
		r < o.length;
		r++
	)
		i(o[r]);
	return i;
})(
	{
		AD: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, 'e6db00k1AlFP6rh5AYpOw7Z', 'AD');
				var n = a(t('./GxGame')),
					o = a(t('./GxConstant')),
					i = t('./GxEnum');
				function a(t) {
					return t && t.__esModule ? t : { default: t };
				}
				a(t('./ResUtil')),
					(window.AD = {
						isbaibao: !1,
						showVideo: function (t) {
							YYGGames.rewardReady
								? YYGGames.showReward(function () {
										t && t();
								  })
								: YYGGames.showTip('No Available Video');
						},
						showChaPing: function () {},
						showBanner: function () {},
						hideBanner: function () {},
						ChooseLv: function () {
							AD.isbaibao ||
								n.default.gameEvent(i.EventName.modeLvChoice);
						},
						gameOver: function (t) {
							void 0 === t && (t = !1),
								AD.isbaibao ||
									n.default.gameEventLevelEnd('', t);
						},
						gameEventLevelStart: function () {
							(o.default.IS_VIVO_GAME ||
								o.default.IS_OPPO_GAME) &&
								AD.showChaPing();
						},
						showIcon: function () {},
						hideIcon: function () {},
						canvideogetlev: function () {
							return (
								(!o.default.IS_OPPO_GAME &&
									!o.default.IS_ANDROID_NATIVE) ||
								!!n.default.getLabel('switch')
							);
						},
						canshowlotvideo: function () {
							return (
								!o.default.IS_VIVO_GAME ||
								(n.default.getLabel('switch')
									? (console.log(
											'\u53ef\u4ee5\u591a\u6b21\u6fc0\u52b1'
									  ),
									  !0)
									: (console.log(
											'\u4e0d\u53ef\u4ee5\u591a\u6b21\u6fc0\u52b1'
									  ),
									  !1))
							);
						},
						setyinsiBtn: function (t) {
							n.default.showPrivacyBtnWithParent(t);
						},
						setmoreBtn: function (t) {
							n.default.showMoreGameBtnWithParent(t);
						},
						setdeskBtn: function (t) {
							n.default.showAddDesktopBtnWithParent(t);
						},
						setGameAgeBtn: function (t) {
							n.default.showGameAgeWithParent(t);
						},
						luPingBegin: function () {},
						luPingOver: function () {},
						share: function () {},
						haveShareBtn: function () {
							return !1;
						}
					}),
					cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		AdManager: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '133d1lc9D5JEap1/C8fy9dt', 'AdManager');
				var n = cc.Class({
					extends: cc.Component,
					statics: {
						self: null,
						getInstance: function () {
							return null == n.self && (n.self = new n()), n.self;
						}
					},
					properties: {},
					ctor: function () {
						n.self = this;
					},
					init: function () {
						console.log('AdManager init');
					},
					showVideo: function (t) {
						cc.log('showVideo'), t && t();
					}
				});
				cc._RF.pop();
			},
			{}
		],
		AndroidAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'c9354yrbMRPL5/jW1t7VHaS', 'AndroidAdapter');
				var i,
					a =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r,
					s = t('./GxAudioUtil'),
					c = t('./GxGame'),
					d = t('./GxTimer'),
					l = t('./GxUtils'),
					u = t('./BaseAdapter'),
					h = t('./GxEnum');
				((r = i || (i = {}))[(r.ERROR = -1)] = 'ERROR'),
					(r[(r.SUCC = 1)] = 'SUCC'),
					(r[(r.SHOW = 2)] = 'SHOW'),
					(r[(r.CLOSE = 3)] = 'CLOSE');
				var p = (function (t) {
					function e() {
						var e =
							(null !== t && t.apply(this, arguments)) || this;
						return (
							(e.closeInterTime = 0),
							(e.closeNativeTime = 0),
							(e.closeNormalBannerTime = 0),
							(e.showLimmitTime = 0),
							(e.showVideoTime = 0),
							e
						);
					}
					return (
						a(e, t),
						(e.getInstance = function () {
							return (
								null == this.instance &&
									(this.instance = new e()),
								this.instance
							);
						}),
						(e.prototype.initAd = function () {
							this.isInitAd ||
								((this.isInitAd = !0),
								(this.isGameCd =
									c.default.adConfig.adCdTime > 0),
								t.prototype.initAd.call(this),
								this._gameCd(),
								this.initBanner(),
								this.initNativeAd());
						}),
						(e.prototype._gameCd = function () {
							var t = this;
							new d.default().once(function () {
								(t.isGameCd = !1),
									t.isNeedShowBanner && t.showBanner();
							}, 1e3 * c.default.adConfig.adCdTime);
						}),
						(e.prototype.getNativePlatform = function () {
							return l.default.callMethod('getNativePlatform');
						}),
						(e.prototype.showNormalBanner = function () {
							var t = this;
							l.default.callMethod(
								'showBanner',
								null,
								function (e) {
									e == i.SHOW
										? t.bannerTimer && t.bannerTimer.stop()
										: (t.closeNormalBannerTime =
												t.get_time());
								}
							);
						}),
						(e.prototype.hideNormalBanner = function () {
							l.default.callMethod('hideBanner');
						}),
						(e.prototype.destroyNormalBanner = function () {
							this.hideNormalBanner();
						}),
						(e.prototype.initBanner = function () {
							t.prototype.initBanner.call(this);
						}),
						(e.prototype.showBanner = function () {
							this.showNormalBanner();
						}),
						(e.prototype.hideBanner = function () {
							t.prototype.hideBanner.call(this),
								(this.isNeedShowBanner = !1),
								this.hideNormalBanner();
						}),
						(e.prototype.showVideo = function (t, e) {
							var n = this;
							void 0 === e && (e = ''),
								this.get_time() - this.showVideoTime < 500 ||
									((this.showVideoTime = this.get_time()),
									e &&
										e.length > 0 &&
										c.default.gameEvent('reward_' + e),
									l.default.callMethod(
										'showVideo',
										null,
										function (o) {
											o == i.ERROR &&
												n.createToast(
													'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
												),
												e &&
													e.length > 0 &&
													(o == i.SUCC
														? c.default.gameEvent(
																'reward_complete_' +
																	e
														  )
														: o == i.ERROR
														? c.default.gameEvent(
																'reward_error_' +
																	e
														  )
														: c.default.gameEvent(
																'reward_close_' +
																	e
														  )),
												setTimeout(function () {
													t && t(o == i.SUCC);
												}, 500);
										}
									));
						}),
						(e.prototype.destroyVideo = function () {
							l.default.callMethod('destroyVideo');
						}),
						(e.prototype.showInterstitial = function (t, e) {
							var n = this;
							l.default.callMethod(
								'showInter',
								null,
								function (o) {
									console.log(
										'[gx_game] showInter ret = ',
										o
									),
										o == i.SHOW
											? (n.hideBanner(), t && t())
											: (o == i.CLOSE &&
													(n.closeInterTime =
														n.get_time()),
											  (n.isNeedShowBanner = !0),
											  e && e());
								}
							);
						}),
						(e.prototype.showOtherInterstitial = function (t, e) {
							var n = this;
							l.default.callMethod(
								'showOtherInter',
								null,
								function (o) {
									console.log(
										'[gx_game] showInter ret = ',
										o
									),
										o == i.SHOW
											? (n.hideBanner(), t && t())
											: (o == i.CLOSE &&
													(n.closeInterTime =
														n.get_time()),
											  (n.isNeedShowBanner = !0),
											  e && e());
								}
							);
						}),
						(e.prototype.destroyNormalInter = function () {
							l.default.callMethod('destroyInter');
						}),
						(e.prototype.showInterVideo = function (t, e) {
							var n = this;
							console.log(
								'[gx_game]showInterVideo \u4e0d\u80fd\u7528'
							),
								l.default.callMethod(
									'showFullScreen',
									null,
									function (o) {
										console.log(
											'[gx_game] 233 showFullScreen ret = ',
											o
										),
											o == i.SHOW
												? (n.hideBanner(), t && t())
												: (o == i.CLOSE &&
														(n.closeInterTime =
															n.get_time()),
												  (n.isNeedShowBanner = !0),
												  e && e());
									}
								);
						}),
						(e.prototype.showOtherInterVideo = function (t, e) {
							var n = this;
							console.log(
								'[gx_game]showInterVideo \u4e0d\u80fd\u7528'
							),
								l.default.callMethod(
									'showOtherFullScreen',
									null,
									function (o) {
										console.log(
											'[gx_game] 233 showFullScreen ret = ',
											o
										),
											o == i.SHOW
												? (n.hideBanner(), t && t())
												: (o == i.CLOSE &&
														(n.closeInterTime =
															n.get_time()),
												  (n.isNeedShowBanner = !0),
												  e && e());
									}
								);
						}),
						(e.prototype.destroyInterVideo = function () {
							l.default.callMethod('destroyInterVideo');
						}),
						(e.prototype.create_ad = function (t) {
							var e = this;
							return new Promise(function (n) {
								l.default.callMethod(
									'createNativeAd',
									t.toString(),
									function (t) {
										if (
											(console.log(
												'[gx_game]native data load succ:' +
													JSON.stringify(t)
											),
											t == i.ERROR)
										);
										else
											try {
												e.add_native_data(t);
											} catch (n) {
												console.error(n);
											}
									}
								),
									setTimeout(n, 100);
							});
						}),
						(e.prototype.initNativeAd = function () {}),
						(e.prototype.showInterstitialNative = function (
							t,
							e,
							n,
							o
						) {
							console.log(
								'[gx_game]showInterstitialNative \u4e0d\u80fd\u7528'
							),
								o && o();
						}),
						(e.prototype.hideInterstitialNative = function () {
							t.prototype.hideInterstitialNative.call(this);
						}),
						(e.prototype.showNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 1),
								l.default.getNativePlatform() == h.PLATFORM.G233
									? this.showInterVideo(t, e)
									: this.showInterstitial(t, e);
						}),
						(e.prototype.showOtherNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 1),
								l.default.getNativePlatform() == h.PLATFORM.G233
									? this.showOtherInterVideo(t, e)
									: this.showOtherInterstitial(t, e);
						}),
						(e.prototype.hideNativeInterstitial = function () {
							t.prototype.hideNativeInterstitial.call(this);
						}),
						(e.prototype.showNativeIcon = function () {
							if (this.isGameCd)
								return console.log(
									'[gx_game]showNativeIcon \u5e7f\u544aCD\u4e2d'
								);
						}),
						(e.prototype.hideNativeIcon = function () {
							t.prototype.hideNativeIcon.call(this),
								this.platformVersion() == h.PLATFORM.VIVO &&
									l.default.callMethod('hideNativeIcon');
						}),
						(e.prototype.loop_get_native_data = function () {
							var t =
								this._native_data_cache.length < 5
									? 1e3 * l.default.randomInt(15, 20)
									: 3e4;
							setTimeout(this.initNativeAd.bind(this), t);
						}),
						(e.prototype.reportAdClick = function (t) {
							t &&
								void 0 !== t &&
								(l.default.callMethod('reportAdClick', t.adId),
								this.remove_native_data(t));
						}),
						(e.prototype.showFeedAd = function (t, e) {
							if (this.isGameCd)
								return console.log(
									'[gx_game]showFeedAd \u5e7f\u544aCD\u4e2d'
								);
							l.default.callMethod(
								'showFeedAd',
								null,
								function (n) {
									n == i.SHOW
										? (t && t(),
										  s.default.setMusicVolume(0),
										  s.default.setSoundVolume(0))
										: (e && e(),
										  s.default.setMusicVolume(1),
										  s.default.setSoundVolume(1));
								}
							);
						}),
						(e.prototype.destroyFeedAd = function () {
							l.default.callMethod('destroyFeedAd');
						}),
						(e.prototype.showGamePortal = function () {
							l.default.callMethod('jumpLeisureSubject');
						}),
						(e.prototype.openUrl = function (t) {
							l.default.callMethod('openUrl', t);
						}),
						(e.prototype.showPrivacy = function (t) {
							void 0 === t && (t = 'privacy'),
								l.default.callMethod('showPrivacy', t);
						}),
						(e.prototype.showVivoIcon = function () {
							l.default.callMethod('showVivoIcon');
						}),
						(e.prototype.hideVivoIcon = function () {
							l.default.callMethod('hideVivoIcon');
						}),
						(e.prototype.supportGameBox = function () {
							return (
								this.getNativePlatform() == h.PLATFORM.OPPO ||
								this.getNativePlatform() == h.PLATFORM.VIVO
							);
						}),
						e
					);
				})(u.default);
				(n.default = p), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./GxAudioUtil': 'GxAudioUtil',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils'
			}
		],
		AndroidH5Adapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'aca74oKqrlKK5Hc4/0DpWzf', 'AndroidH5Adapter');
				var i,
					a =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r,
					s = t('./GxAudioUtil'),
					c = t('./GxGame'),
					d = t('./GxTimer'),
					l = t('./GxUtils'),
					u = t('./BaseAdapter'),
					h = t('./GxEnum');
				((r = i || (i = {}))[(r.ERROR = -1)] = 'ERROR'),
					(r[(r.SUCC = 1)] = 'SUCC'),
					(r[(r.SHOW = 2)] = 'SHOW'),
					(r[(r.CLOSE = 3)] = 'CLOSE');
				var p = (function (t) {
					function e() {
						var e =
							(null !== t && t.apply(this, arguments)) || this;
						return (
							(e.closeInterTime = 0),
							(e.closeNativeTime = 0),
							(e.closeNormalBannerTime = 0),
							(e.showLimmitTime = 0),
							(e.showVideoTime = 0),
							e
						);
					}
					return (
						a(e, t),
						(e.getInstance = function () {
							return (
								null == this.instance &&
									(this.instance = new e()),
								this.instance
							);
						}),
						(e.prototype.initAd = function () {
							this.isInitAd ||
								((this.isInitAd = !0),
								(this.isGameCd =
									c.default.adConfig.adCdTime > 0),
								t.prototype.initAd.call(this),
								this._gameCd(),
								this.initBanner(),
								this.initNativeAd());
						}),
						(e.prototype._gameCd = function () {
							var t = this;
							new d.default().once(function () {
								(t.isGameCd = !1),
									t.isNeedShowBanner && t.showBanner();
							}, 1e3 * c.default.adConfig.adCdTime);
						}),
						(e.prototype.getNativePlatform = function () {
							return this.callMethod('getNativePlatform');
						}),
						(e.prototype.showNormalBanner = function () {
							var t = this;
							this.callMethod('showBanner', null, function (e) {
								e == i.SHOW
									? t.bannerTimer && t.bannerTimer.stop()
									: (t.closeNormalBannerTime = t.get_time());
							});
						}),
						(e.prototype.hideNormalBanner = function () {
							this.callMethod('hideBanner');
						}),
						(e.prototype.destroyNormalBanner = function () {
							this.hideNormalBanner();
						}),
						(e.prototype.initBanner = function () {
							t.prototype.initBanner.call(this);
						}),
						(e.prototype.showBanner = function () {
							this.showNormalBanner();
						}),
						(e.prototype.hideBanner = function () {
							t.prototype.hideBanner.call(this),
								(this.isNeedShowBanner = !1),
								this.hideNormalBanner();
						}),
						(e.prototype.showVideo = function (t, e) {
							var n = this;
							void 0 === e && (e = ''),
								this.get_time() - this.showVideoTime < 500 ||
									((this.showVideoTime = this.get_time()),
									e &&
										e.length > 0 &&
										c.default.gameEvent('reward_' + e),
									this.callMethod(
										'showVideo',
										null,
										function (o) {
											o == i.ERROR &&
												n.createToast(
													'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
												),
												e &&
													e.length > 0 &&
													(o == i.SUCC
														? c.default.gameEvent(
																'reward_complete_' +
																	e
														  )
														: o == i.ERROR
														? c.default.gameEvent(
																'reward_error_' +
																	e
														  )
														: c.default.gameEvent(
																'reward_close_' +
																	e
														  )),
												t && t(o == i.SUCC);
										}
									));
						}),
						(e.prototype.destroyVideo = function () {
							this.callMethod('destroyVideo');
						}),
						(e.prototype.showInterstitial = function (t, e) {
							var n = this;
							this.callMethod('showInter', null, function (o) {
								console.log('[gx_game] showInter ret = ', o),
									o == i.SHOW
										? (n.hideBanner(), t && t())
										: (o == i.CLOSE &&
												(n.closeInterTime =
													n.get_time()),
										  (n.isNeedShowBanner = !0),
										  e && e());
							});
						}),
						(e.prototype.showOtherInterstitial = function (t, e) {
							var n = this;
							this.callMethod(
								'showOtherInter',
								null,
								function (o) {
									console.log(
										'[gx_game] showInter ret = ',
										o
									),
										o == i.SHOW
											? (n.hideBanner(), t && t())
											: (o == i.CLOSE &&
													(n.closeInterTime =
														n.get_time()),
											  (n.isNeedShowBanner = !0),
											  e && e());
								}
							);
						}),
						(e.prototype.destroyNormalInter = function () {
							this.callMethod('destroyInter');
						}),
						(e.prototype.showInterVideo = function (t, e) {
							var n = this;
							console.log(
								'[gx_game]showInterVideo \u4e0d\u80fd\u7528'
							),
								this.callMethod(
									'showFullScreen',
									null,
									function (o) {
										console.log(
											'[gx_game] 233 showFullScreen ret = ',
											o
										),
											o == i.SHOW
												? (n.hideBanner(), t && t())
												: (o == i.CLOSE &&
														(n.closeInterTime =
															n.get_time()),
												  (n.isNeedShowBanner = !0),
												  e && e());
									}
								);
						}),
						(e.prototype.showOtherInterVideo = function (t, e) {
							var n = this;
							console.log(
								'[gx_game]showInterVideo \u4e0d\u80fd\u7528'
							),
								this.callMethod(
									'showOtherFullScreen',
									null,
									function (o) {
										console.log(
											'[gx_game] 233 showFullScreen ret = ',
											o
										),
											o == i.SHOW
												? (n.hideBanner(), t && t())
												: (o == i.CLOSE &&
														(n.closeInterTime =
															n.get_time()),
												  (n.isNeedShowBanner = !0),
												  e && e());
									}
								);
						}),
						(e.prototype.destroyInterVideo = function () {
							this.callMethod('destroyInterVideo');
						}),
						(e.prototype.create_ad = function (t) {
							var e = this;
							return new Promise(function (n) {
								e.callMethod(
									'createNativeAd',
									t.toString(),
									function (t) {
										if (
											(console.log(
												'[gx_game]native data load succ:' +
													JSON.stringify(t)
											),
											t == i.ERROR)
										);
										else
											try {
												e.add_native_data(t);
											} catch (n) {
												console.error(n);
											}
									}
								),
									setTimeout(n, 100);
							});
						}),
						(e.prototype.initNativeAd = function () {}),
						(e.prototype.showInterstitialNative = function (
							t,
							e,
							n,
							o
						) {
							console.log(
								'[gx_game]showInterstitialNative \u4e0d\u80fd\u7528'
							),
								o && o();
						}),
						(e.prototype.hideInterstitialNative = function () {
							t.prototype.hideInterstitialNative.call(this);
						}),
						(e.prototype.showNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 1),
								this.getNativePlatform() == h.PLATFORM.G233
									? this.showInterVideo(t, e)
									: this.showInterstitial(t, e);
						}),
						(e.prototype.showOtherNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 1),
								this.getNativePlatform() == h.PLATFORM.G233
									? this.showOtherInterVideo(t, e)
									: this.showOtherInterstitial(t, e);
						}),
						(e.prototype.hideNativeInterstitial = function () {
							t.prototype.hideNativeInterstitial.call(this);
						}),
						(e.prototype.showNativeIcon = function () {
							if (this.isGameCd)
								return console.log(
									'[gx_game]showNativeIcon \u5e7f\u544aCD\u4e2d'
								);
						}),
						(e.prototype.hideNativeIcon = function () {
							t.prototype.hideNativeIcon.call(this),
								this.platformVersion() == h.PLATFORM.VIVO &&
									this.callMethod('hideNativeIcon');
						}),
						(e.prototype.loop_get_native_data = function () {
							var t =
								this._native_data_cache.length < 5
									? 1e3 * l.default.randomInt(15, 20)
									: 3e4;
							setTimeout(this.initNativeAd.bind(this), t);
						}),
						(e.prototype.reportAdClick = function (t) {
							t &&
								void 0 !== t &&
								(this.callMethod('reportAdClick', t.adId),
								this.remove_native_data(t));
						}),
						(e.prototype.showFeedAd = function (t, e) {
							if (this.isGameCd)
								return console.log(
									'[gx_game]showFeedAd \u5e7f\u544aCD\u4e2d'
								);
							this.callMethod('showFeedAd', null, function (n) {
								n == i.SHOW
									? (t && t(),
									  s.default.setMusicVolume(0),
									  s.default.setSoundVolume(0))
									: (e && e(),
									  s.default.setMusicVolume(1),
									  s.default.setSoundVolume(1));
							});
						}),
						(e.prototype.destroyFeedAd = function () {
							this.callMethod('destroyFeedAd');
						}),
						(e.prototype.showGamePortal = function () {
							this.callMethod('jumpLeisureSubject');
						}),
						(e.prototype.openUrl = function (t) {
							this.callMethod('openUrl', t);
						}),
						(e.prototype.showPrivacy = function (t) {
							void 0 === t && (t = 'privacy'),
								this.callMethod('showPrivacy', t);
						}),
						(e.prototype.showVivoIcon = function () {
							this.callMethod('showVivoIcon');
						}),
						(e.prototype.hideVivoIcon = function () {
							this.callMethod('hideVivoIcon');
						}),
						(e.prototype.callMethod = function (t, e, n) {
							void 0 === e && (e = null);
							var o =
								t.substring(0, 1).toUpperCase() +
								t.substring(1);
							return (
								n && void 0 !== n && (window['onGx' + o] = n),
								null == e
									? window.H5Bridge[t]()
									: window.H5Bridge[t](e)
							);
						}),
						(e.prototype.supportGameBox = function () {
							return (
								this.getNativePlatform() == h.PLATFORM.OPPO ||
								this.getNativePlatform() == h.PLATFORM.VIVO
							);
						}),
						(e.prototype.backGameHall = function () {
							this.callMethod('backGameHall');
						}),
						(e.prototype.getGameAge = function () {
							return this.callMethod('getGameAge');
						}),
						(e.prototype.getConfigUrl = function () {
							return this.callMethod('getConfigUrl');
						}),
						(e.prototype.jumpGame = function (t) {
							return this.callMethod('jumpGame', t);
						}),
						e
					);
				})(u.default);
				(n.default = p), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./GxAudioUtil': 'GxAudioUtil',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils'
			}
		],
		BaseAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'f35bek+Sg1CGKRD8Ad8vB5/', 'BaseAdapter'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.RECORDER_STATE = void 0);
				var i,
					a = t('./ResUtil'),
					r = t('./GxTimer'),
					s = t('./GxEnum'),
					c = t('./GxConstant'),
					d = t('./GxUtils'),
					l = t('./GxGame'),
					u = t('./GxLog'),
					h = t('./TDSDK');
				((i = o = n.RECORDER_STATE || (n.RECORDER_STATE = {}))[
					(i.NO = 0)
				] = 'NO'),
					(i[(i.START = 1)] = 'START'),
					(i[(i.STOP = 2)] = 'STOP'),
					(i[(i.PAUSE = 3)] = 'PAUSE'),
					(i[(i.RESUME = 4)] = 'RESUME');
				var p = (function () {
					function t() {
						(this.authorizeView = null),
							(this.privacyView = null),
							(this.isInitAd = !1),
							(this.bannerAd = null),
							(this.videoAd = null),
							(this.interAd = null),
							(this.bannerNode = null),
							(this.innerInter = null),
							(this.nativeInter = null),
							(this.nativeIcon = null),
							(this.portalAd = null),
							(this.blockAd = null),
							(this.appBox = null),
							(this._native_data_cache = []),
							(this._native_custom_inter_cache = []),
							(this._native_custom_banner_cache = []),
							(this.isNeedShowBanner = !1),
							(this.isGameCd = !1),
							(this.addIconNode = null),
							(this.interShowTime = 0),
							(this.bannerShowTime = 0),
							(this.gameRecorder = null),
							(this.videoPath = null),
							(this.gameRecorderState = o.NO),
							(this.bannerTimer = null),
							(this.nativeInterTimer = null),
							(this.bannerDelayTimer = null),
							(this.interIdx = 1),
							(this.cur_show_ad_index = 0),
							(this.companyView = null),
							(this.icNum = -1),
							(this.gameBoxNumListener = null),
							(this.ismailiang = !1),
							(this.waitSubIds = []),
							(this.manifestInfo = null);
					}
					return (
						(t.getInstance = function () {
							return (
								null == this.instance &&
									(this.instance = new t()),
								this.instance
							);
						}),
						(t.prototype.initAd = function () {
							console.log(
								'[gx_game]\u5e7f\u544a\u521d\u59cb\u5316'
							);
						}),
						(t.prototype.setManifestInfo = function (t) {
							(this.manifestInfo = t),
								h.default
									.getInstance()
									.initApp(
										t.package,
										t.name,
										t.versionName,
										t.versionCode
									);
						}),
						(t.prototype.showAuthorize = function (t, e) {
							var n = this;
							a.default.loadPrefab(
								'gx/prefab/authorize',
								function (o, i) {
									if (o) e();
									else if (
										null == n.authorizeView ||
										!cc.isValid(n.authorizeView.node, !0)
									) {
										var a = cc.instantiate(i);
										l.default.uiGroup &&
											(a.group = l.default.uiGroup),
											(n.authorizeView =
												a.getComponent('Gx_authorize')),
											n.authorizeView.show(t, e);
									}
								}
							);
						}),
						(t.prototype.showPrivacy = function (t) {
							var e = this;
							void 0 === t && (t = 'privacy'),
								a.default.loadPrefab(
									'gx/prefab/privacy',
									function (n, o) {
										if (
											null == e.privacyView ||
											!cc.isValid(e.privacyView.node, !0)
										) {
											var i = cc.instantiate(o);
											l.default.uiGroup &&
												(i.group = l.default.uiGroup),
												(e.privacyView =
													i.getComponent(
														'Gx_privacy'
													)),
												e.privacyView.show(t);
										}
									}
								);
						}),
						(t.prototype.showGameOverAD = function () {
							var t = this;
							(c.default.IS_OPPO_GAME ||
								c.default.IS_VIVO_GAME) &&
								a.default.loadPrefab(
									'gx/prefab/GameOverAD',
									function (e, n) {
										if (
											null == t.privacyView ||
											!cc.isValid(t.privacyView.node, !0)
										) {
											var o = cc.instantiate(n);
											l.default.uiGroup &&
												(o.group = l.default.uiGroup),
												(t.privacyView =
													o.getComponent(
														'Gx_GameOverAD'
													)),
												t.privacyView.show();
										}
									}
								);
						}),
						(t.prototype.canIn = function () {
							if (c.default.IS_OPPO_GAME) {
								var t = l.default.getValue('ysgl', 0);
								if (100 * Math.random() < t) return !0;
							}
							return !1;
						}),
						(t.prototype.showBanner = function () {}),
						(t.prototype.hideBanner = function () {
							this.bannerTimer && this.bannerTimer.clear(),
								this.bannerDelayTimer &&
									this.bannerDelayTimer.clear(),
								this.bannerNode &&
									void 0 !== this.bannerNode &&
									cc.isValid(this.bannerNode.node, !0) &&
									this.bannerNode.node.destroy(),
								(this.bannerNode = null);
						}),
						(t.prototype.showVideo = function (t, e) {
							void 0 === e && (e = ''), t && t(!0);
						}),
						(t.prototype.reportAdShow = function (t) {
							if (t && void 0 !== t)
								for (var e in (t.ad &&
									t.ad.reportAdShow({ adId: t.adId }),
								this._native_data_cache))
									if (
										this._native_data_cache[e].adId ==
										t.adId
									) {
										this._native_data_cache[e].state =
											s.ad_native_state.show;
										break;
									}
						}),
						(t.prototype.reportAdClick = function (t) {
							t &&
								void 0 !== t &&
								(t.ad && t.ad.reportAdClick({ adId: t.adId }),
								this.remove_native_data(t));
						}),
						(t.prototype.getLocalNativeData = function (t) {
							if (l.default.adConfig.useNative) {
								if (l.default.adConfig.switchPool) {
									for (
										var e = [],
											n = 0,
											o = this._native_data_cache;
										n < o.length;
										n++
									) {
										var i = o[n];
										i.type == t && e.push(i);
									}
									return this.check_native_data_list_is_reprot(
										e
									)
										? e.length > 0
											? e[
													d.default.randomInt(
														0,
														e.length - 1
													)
											  ]
											: null
										: this.get_latest_native_data(e);
								}
								return (
									this.cur_show_ad_index >=
										this._native_data_cache.length &&
										(this.cur_show_ad_index = 0),
									this._native_data_cache[
										this.cur_show_ad_index++
									]
								);
							}
							return t == s.ad_native_type.banner
								? this._native_custom_banner_cache &&
								  this._native_custom_banner_cache.length > 0
									? this._native_custom_banner_cache.shift()
									: null
								: this._native_custom_inter_cache &&
								  this._native_custom_inter_cache.length > 0
								? this._native_custom_inter_cache.shift()
								: null;
						}),
						(t.prototype.showInterstitialNative = function () {}),
						(t.prototype.showInterstitial = function () {}),
						(t.prototype.hideInterstitialNative = function () {
							this.innerInter &&
								void 0 !== this.innerInter &&
								cc.isValid(this.innerInter.node, !0) &&
								this.innerInter.node.destroy(),
								(this.innerInter = null);
						}),
						(t.prototype.showNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 0);
						}),
						(t.prototype.showOtherNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 0);
						}),
						(t.prototype.hideNativeInterstitial = function () {
							this.nativeInter &&
								void 0 !== this.nativeInter &&
								cc.isValid(this.nativeInter.node, !0) &&
								this.nativeInter.node.destroy(),
								(this.nativeInter = null),
								this.nativeInterTimer &&
									this.nativeInterTimer.clear(),
								(this.nativeInterTimer = null);
						}),
						(t.prototype.showVivoIcon = function () {}),
						(t.prototype.hideVivoIcon = function () {}),
						(t.prototype.showNativeIcon = function () {}),
						(t.prototype.hideNativeIcon = function () {
							this.nativeIcon &&
								void 0 !== this.nativeIcon &&
								cc.isValid(this.nativeIcon.node, !0) &&
								this.nativeIcon.node.destroy(),
								(this.nativeIcon = null);
						}),
						(t.prototype.platformVersion = function () {
							return c.default.IS_OPPO_GAME
								? window.qg.getSystemInfoSync().platformVersion
								: c.default.IS_VIVO_GAME
								? window.qg.getSystemInfoSync()
										.platformVersionCode
								: 0;
						}),
						(t.prototype.showAddDesktop = function () {}),
						(t.prototype.hasAddDesktop = function () {}),
						(t.prototype.addDesktop = function (t, e, n) {
							void 0 === n && (n = !0);
						}),
						(t.prototype.createToast = function (t) {
							if (
								null == this.toastView ||
								!cc.isValid(this.toastView.node, !0)
							) {
								var e = cc.instantiate(
									d.default.getRes(
										'gx/prefab/toast',
										cc.Prefab
									)
								);
								l.default.uiGroup &&
									(e.group = l.default.uiGroup),
									(this.toastView =
										e.getComponent('Gx_toast'));
							}
							this.toastView &&
								this.toastView.show &&
								this.toastView.show(t);
						}),
						(t.prototype.supportGameBox = function () {
							return (
								!!c.default.IS_OPPO_GAME &&
								this.platformVersion() >= 1076
							);
						}),
						(t.prototype.showGamePortal = function (t, e, n, o, i) {
							void 0 === n && (n = !0),
								void 0 === o && (o = ''),
								void 0 === i && (i = 300);
						}),
						(t.prototype.hideGamePortal = function () {}),
						(t.prototype.setClickInnerInterstitialBtn = function (
							t,
							e
						) {
							this._setClickNative(s.ad_native_type.inter2, t, e);
						}),
						(t.prototype.setClickNativeBanner = function (t, e) {
							this._setClickNative(s.ad_native_type.banner, t, e);
						}),
						(t.prototype.clickNativeInnerInterstitial =
							function () {
								if (this.isGameCd)
									return console.log(
										'[gx_game]\u5e7f\u544aCD\u4e2d'
									);
								this.innerInter &&
									cc.isValid(this.innerInter.node, !0) &&
									this.innerInter.report_click();
							}),
						(t.prototype.clickNative = function () {
							if (this.isGameCd || l.default.inBlockArea)
								return console.log(
									'[gx_game]\u5e7f\u544aCD\u4e2d'
								);
							var t = this.getLocalNativeData(
								s.ad_native_type.inter1
							);
							null == t &&
								(t = this.getLocalNativeData(
									s.ad_native_type.banner
								)),
								null == t &&
									(t = this.getLocalNativeData(
										s.ad_native_type.inter2
									)),
								null == t &&
									(t = this.getLocalNativeData(
										s.ad_native_type.native_icon
									)),
								t &&
									(this.reportAdShow(t),
									this.reportAdClick(t));
						}),
						(t.prototype.recorderStart = function () {}),
						(t.prototype.recorderStop = function (t) {
							t && t(!1);
						}),
						(t.prototype.hasRecorderPath = function () {
							return null != this.videoPath;
						}),
						(t.prototype.shareRecorder = function (t, e) {
							e && e();
						}),
						(t.prototype.showRecorderLayer = function () {}),
						(t.prototype.login = function (t) {
							t && t(!0);
						}),
						(t.prototype.showQQAppBox = function () {}),
						(t.prototype.hideQQAppBox = function () {}),
						(t.prototype.showQQBlockAd = function () {}),
						(t.prototype.hideQQBlockAd = function () {}),
						(t.prototype.showCustomLeft = function () {}),
						(t.prototype.showCustomRight = function () {}),
						(t.prototype.hideCustomLeft = function () {}),
						(t.prototype.hideCustomRight = function () {}),
						(t.prototype.showCrazyPoint = function (t, e, n, o) {
							if (
								(void 0 === o && (o = !1),
								l.default.getLabel('crazy'))
							) {
								var i = cc.instantiate(
										d.default.getRes(
											'gx/prefab/crazypoint',
											cc.Prefab
										)
									),
									a = i.getComponent('Gx_crazypoint');
								(i.parent = cc.director.getScene()),
									(i.zIndex = cc.macro.MAX_ZINDEX - 1),
									a.show(t, e, n, o);
							} else e && e();
						}),
						(t.prototype.showGameBox = function (t, e, n) {
							var o = this;
							if (l.default.getLabel('switch')) {
								var i = d.default.getRes(
										'gx/prefab/gameBox',
										cc.Prefab
									),
									a = cc.instantiate(i),
									r = a.getComponent('Gx_gameBox');
								(a.parent = cc.director.getScene()),
									(a.zIndex = cc.macro.MAX_ZINDEX - 1),
									r.show(t, e, function (t) {
										n
											? n(t)
											: o.gameBoxNumListener
											? o.gameBoxNumListener(t)
											: (o.gameBoxNumListener ||
													u.default.e(
														'\u6ca1\u6709\u8bbe\u7f6e\u91d1\u5e01\u56de\u8c03 gameBoxNumListener'
													),
											  n && n(t));
									});
							} else e && e();
						}),
						(t.prototype.setGameBoxNumCallback = function (t) {
							this.gameBoxNumListener = t;
						}),
						(t.prototype.showInterVideo = function (t, e) {
							e && e();
						}),
						(t.prototype.destroyInterVideo = function () {}),
						(t.prototype.showFeedAd = function (t, e) {
							e && e();
						}),
						(t.prototype.destroyFeedAd = function () {}),
						(t.prototype.getGameAge = function () {
							return '12';
						}),
						(t.prototype.openUrl = function () {}),
						(t.prototype.getDeviceId = function () {}),
						(t.prototype.backGameHall = function () {}),
						(t.prototype.getConfigUrl = function () {
							return 'http://127.0.0.1:8080/config.json';
						}),
						(t.prototype.jumpGame = function (t) {
							window.location.href = t;
						}),
						(t.prototype.initBanner = function () {
							this.bannerTimer = new r.default();
						}),
						(t.prototype.initNativeAd = function () {}),
						(t.prototype.get_time = function () {
							return window.cc
								? window.cc.sys.now()
								: window.Laya
								? window.Laya.timer.currTimer
								: new Date().getTime();
						}),
						(t.prototype.check_native_data_list_is_reprot =
							function (t) {
								if (t.length > 0)
									for (var e in t)
										if (
											t[e].state ==
											s.ad_native_state.need_show
										)
											return !1;
								return !0;
							}),
						(t.prototype.get_latest_native_data = function (t) {
							var e = [];
							for (var n in t)
								if (t[n].state == s.ad_native_state.need_show)
									return t[n];
							return e.length > 0
								? e[d.default.randomInt(0, e.length - 1)]
								: t.length > 0
								? t[d.default.randomInt(0, t.length - 1)]
								: null;
						}),
						(t.prototype.add_native_data = function (t) {
							for (var e in this._native_data_cache)
								if (this._native_data_cache[e].adId == t.adId)
									return;
							(t.state = s.ad_native_state.need_show),
								this._native_data_cache.push(t);
						}),
						(t.prototype.remove_native_data = function (t) {
							for (var e in this._native_data_cache)
								if (this._native_data_cache[e].adId == t.adId)
									return (
										console.log('remove native_data:', t),
										void this._native_data_cache.splice(
											parseInt(e),
											1
										)
									);
						}),
						(t.prototype.is_limit_native_length = function (t) {
							var e = 0;
							for (var n in this._native_data_cache)
								this._native_data_cache[n].type == t &&
									this._native_data_cache[n].state !=
										s.ad_native_state.click &&
									++e;
							return e >= l.default.adConfig.nativeAdLimitCount;
						}),
						(t.prototype._setClickNative = function (t, e, n) {
							void 0 === n && (n = null);
						}),
						(t.prototype.LOG = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							u.default.i.apply(u.default, t);
						}),
						(t.prototype.LOGE = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							u.default.e.apply(u.default, t);
						}),
						(t.prototype.LOGW = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							u.default.w.apply(u.default, t);
						}),
						(t.prototype.shareMessageToFriend = function (t) {
							t && t(!0);
						}),
						(t.prototype.setOpenDataShareCallback = function () {}),
						(t.prototype.getSubIds = function () {
							return [];
						}),
						(t.prototype.submsg = function (t, e) {
							e && e(!1);
						}),
						(t.prototype.initSubmsg = function () {}),
						(t.prototype.rewardAdEnd = function () {}),
						(t.prototype.ttReport = function () {}),
						(t.instance = null),
						t
					);
				})();
				(n.default = p), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxLog': 'GxLog',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils',
				'./ResUtil': 'ResUtil',
				'./TDSDK': 'TDSDK'
			}
		],
		BaseGxConstant: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '17cd7QrcfhNnLxrexmbH4Jr', 'BaseGxConstant'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = (function () {
					function t() {}
					return (
						(t.IS_VIVO_GAME = !1),
						(t.IS_OPPO_GAME = !1),
						(t.IS_MI_GAME = !1),
						(t.IS_IOS_NATIVE = !1),
						(t.IS_IOS_H5 = !1),
						(t.IS_ANDROID_NATIVE = !1),
						(t.IS_ANDROID_H5 = !1),
						(t.IS_WECHAT_GAME = !1),
						(t.IS_QQ_GAME = !1),
						(t.IS_TT_GAME = !1),
						(t.IS_BAIDU_GAME = !1),
						(t.IS_HUAWEI_GAME = !1),
						(t.IS_UC_GAME = !1),
						(t.IS_KS_GAME = !1),
						(t.IS_4399_H5_GAME = !1),
						(t.IS_4399_BOX_GAME = !1),
						(t.IS_MEIZU_GAME = !1),
						(t.KEY_PRIVACY_AGREE = '_GxPrivacyAgree_'),
						t
					);
				})();
				(n.default = o), cc._RF.pop();
			},
			{}
		],
		BaseGxGame: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, 'f0cc66uN2RCAbUEokimQTJu', 'BaseGxGame'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = t('./GxConstant'),
					i = t('./OppoAdapter'),
					a = t('./BaseAdapter'),
					r = t('./GxLabelUtil'),
					s = t('./GxAdParams'),
					c = t('./GxLog'),
					d = t('./ResUtil'),
					l = t('./GxGame'),
					u = t('./VivoAdapter'),
					h = t('./AndroidAdapter'),
					p = t('./AndroidH5Adapter'),
					f = t('./GxUtils'),
					m = t('./H54399Adapter'),
					g = t('./QQAdapter'),
					v = t('./GxEnum'),
					_ = t('./HwAdapter'),
					y = t('./MiAdapter'),
					A = t('./WxAdapter'),
					w = t('./GxLog'),
					b = t('./TTAdapter'),
					S = (function () {
						function t() {}
						return (
							(t.initPlatform = function (t) {
								if (this.initPlatformEnd)
									return (
										c.default.w(
											'\u5df2\u7ecf\u521d\u59cb\u5316\u8fc7\u6e20\u9053'
										),
										void (t && t())
									);
								this.initPlatformEnd = !0;
								var e = !0,
									n = function () {
										e
											? r.default
													.getInstance()
													.initLabel(
														s.AdParams.labelName
													)
											: c.default.w(
													'\u4e0d\u521d\u59cb\u5316\u6807\u7b7e'
											  ),
											t && t();
									};
								if (void 0 !== window.qg) {
									if (void 0 !== window.qg.getBattle) {
										console.log('\u8fdb\u5165oppo'),
											(o.default.IS_OPPO_GAME = !0);
										var i = qg.getFileSystemManager();
										try {
											(s.AdParams.labelName =
												s.AdParams.oppo.labelName),
												(s.AdParams.age =
													s.AdParams.oppo.age),
												(s.AdParams.company =
													s.AdParams.oppo.company),
												(s.AdParams.softCode =
													s.AdParams.oppo.softCode),
												(s.AdParams.ysCompanyName =
													s.AdParams.oppo.ysCompanyName),
												(s.AdParams.ysMail =
													s.AdParams.oppo.ysMail),
												(s.AdParams.ysAddress =
													s.AdParams.oppo.ysAddress),
												i.readdir({
													dirPath: 'src',
													success: function (t) {
														console.log(
															JSON.stringify(t)
														);
														for (
															var e = '',
																o = '',
																a = 0;
															a < t.files.length;
															a++
														) {
															var r = t.files[a];
															-1 !=
																r.indexOf(
																	'gamecenter'
																) &&
																(r.endsWith(
																	'.png'
																) ||
																r.endsWith(
																	'.jpg'
																)
																	? (e = r)
																	: r.endsWith(
																			'.json'
																	  ) &&
																	  (o = r));
														}
														if (e) {
															var d = new Image(),
																u = !1;
															(d.onload =
																function () {
																	u = !0;
																	var t =
																		new cc.Texture2D();
																	t.initWithElement(
																		d
																	),
																		t.handleLoadedTexture(),
																		(l.default.LogoSp =
																			new cc.SpriteFrame(
																				t
																			));
																}),
																(d.onerror =
																	function (
																		t
																	) {
																		u ||
																			(console.warn(
																				t
																			),
																			c.default.w(
																				'oppo img err'
																			),
																			c.default.w(
																				t
																			));
																	}),
																(d.src =
																	'src/' + e);
														} else
															c.default.w(
																'oppo \u6ca1\u83b7\u53d6\u5230\u56fe\u7247'
															);
														if (o)
															try {
																i.readFile({
																	filePath:
																		'src/' +
																		o,
																	encoding:
																		'utf8',
																	success:
																		function (
																			t
																		) {
																			console.log(
																				'text: ' +
																					t.data
																			);
																			var e =
																				JSON.parse(
																					t.data
																				);
																			(s.AdParams.oppo =
																				JSON.parse(
																					JSON.stringify(
																						e.oppo
																					)
																				)),
																				(s.AdParams.labelName =
																					s.AdParams.oppo.labelName),
																				(s.AdParams.age =
																					s.AdParams.oppo.age),
																				(s.AdParams.company =
																					s.AdParams.oppo.company),
																				(s.AdParams.softCode =
																					s.AdParams.oppo.softCode),
																				(s.AdParams.ysCompanyName =
																					s.AdParams.oppo.ysCompanyName),
																				(s.AdParams.ysMail =
																					s.AdParams.oppo.ysMail),
																				(s.AdParams.ysAddress =
																					s.AdParams.oppo.ysAddress),
																				n &&
																					n();
																		},
																	fail: function (
																		t,
																		e
																	) {
																		console.log(
																			' oppo  handling fail, code = ' +
																				e
																		),
																			n &&
																				n();
																	}
																});
															} catch (h) {
																c.default.w(
																	'oppo \u6ca1\u83b7\u53d6\u5230\u914d\u7f6e err'
																),
																	c.default.w(
																		h
																	),
																	n && n();
															}
														else
															c.default.w(
																'oppo \u6ca1\u83b7\u53d6\u5230\u914d\u7f6e'
															),
																n && n();
													},
													fail: function (t) {
														console.log(
															'handling fail, code = ' +
																t
														),
															n && n();
													},
													complete: function () {}
												});
										} catch (B) {
											c.default.w(B),
												c.default.w(
													'oppo \u8bfb\u53d6\u76ee\u5f55\u5931\u8d25'
												),
												n && n();
										}
										return;
									}
									if (
										void 0 !== window.qg.gameLoginWithReal
									) {
										console.log('\u8fdb\u5165\u534e\u4e3a'),
											(o.default.IS_HUAWEI_GAME = !0);
										var a = qg.getFileSystemManager(),
											d = '';
										try {
											var u = a.readFileSync(
												'manifest.json',
												'utf8'
											);
											console.log(
												'result = ' + JSON.stringify(u)
											);
											var h = JSON.parse(u);
											console.log(h.package + '.json');
											try {
												a.accessSync(
													h.package + '.json'
												),
													(d = h.package + '.json');
											} catch (O) {
												(d = ''),
													console.log(
														'error 1= ' + O
													);
											}
										} catch (O) {
											(d = ''),
												console.log('error 2= ' + O);
										}
										if (d.length <= 0)
											try {
												(u = a.readdirSync('src')),
													console.log(
														'result = ' +
															JSON.stringify(u)
													);
												for (
													var p = 0;
													p < u.length;
													p++
												)
													u[p].endsWith('.json') &&
														-1 !=
															u[p].indexOf(
																'huawei'
															) &&
														(d = 'src/' + u[p]);
											} catch (O) {
												(d = ''),
													console.log(
														'error 3= ' + O
													);
											}
										if (
											((s.AdParams.labelName =
												s.AdParams.hw.labelName),
											(s.AdParams.age =
												s.AdParams.hw.age),
											(s.AdParams.company =
												s.AdParams.hw.company),
											(s.AdParams.softCode =
												s.AdParams.hw.softCode),
											(s.AdParams.ysCompanyName =
												s.AdParams.hw.ysCompanyName),
											(s.AdParams.ysMail =
												s.AdParams.hw.ysMail),
											(s.AdParams.ysAddress =
												s.AdParams.hw.ysAddress),
											d && d.length > 0)
										)
											try {
												a.accessSync(d);
												var f = a.readFileSync(
														d,
														'utf8'
													),
													m = JSON.parse(f);
												console.log(JSON.stringify(m)),
													(s.AdParams.hw = JSON.parse(
														JSON.stringify(m.hw)
													)),
													(s.AdParams.labelName =
														s.AdParams.hw.labelName),
													(s.AdParams.age =
														s.AdParams.hw.age),
													(s.AdParams.company =
														s.AdParams.hw.company),
													(s.AdParams.softCode =
														s.AdParams.hw.softCode),
													(s.AdParams.ysCompanyName =
														s.AdParams.hw.ysCompanyName),
													(s.AdParams.ysMail =
														s.AdParams.hw.ysMail),
													(s.AdParams.ysAddress =
														s.AdParams.hw.ysAddress),
													console.log(
														JSON.stringify(
															s.AdParams,
															null,
															2
														)
													),
													console.log(
														'hw:' +
															JSON.stringify(
																s.AdParams.hw,
																null,
																2
															)
													),
													n && n();
											} catch (O) {
												console.log('error 4= ' + O),
													c.default.e(
														'hw \u8bfb\u53d6\u914d\u7f6eerror'
													),
													c.default.e(
														'hw \u8bfb\u53d6\u914d\u7f6eerror'
													),
													c.default.e(
														'hw \u8bfb\u53d6\u914d\u7f6eerror'
													),
													n && n();
											}
										else
											c.default.e(
												'hw \u8bfb\u53d6\u914d\u7f6e\u5931\u8d25'
											),
												c.default.e(
													'hw \u8bfb\u53d6\u914d\u7f6e\u5931\u8d25'
												),
												c.default.e(
													'hw \u8bfb\u53d6\u914d\u7f6e\u5931\u8d25'
												),
												c.default.e(
													'hw \u8bfb\u53d6\u914d\u7f6e\u5931\u8d25'
												),
												n && n();
										return void (
											'debug' ==
												s.AdParams.hw.buildType &&
											((s.AdParams.hw.inter =
												s.AdParams.hw.debug_inter ||
												'testb4znbuh3n2'),
											(s.AdParams.hw.banner =
												s.AdParams.hw.debug_banner ||
												'testw6vs28auh3'),
											(s.AdParams.hw.video =
												s.AdParams.hw.debug_video ||
												'testx9dtjwj8hp'),
											(s.AdParams.hw.native1 =
												s.AdParams.hw.debug_native1 ||
												'testu7m3hc4gvm'),
											c.default.e(
												'\u4f7f\u7528\u6d4b\u8bd5\u53c2\u6570'
											))
										);
									}
									if (void 0 !== window.qg.onUserInfoChange) {
										console.log('\u8fdb\u5165\u5c0f\u7c73'),
											(o.default.IS_MI_GAME = !0);
										var g = qg.getSystemInfoSync().miniGame;
										console.log(
											JSON.stringify(
												qg.getSystemInfoSync()
											)
										);
										var v = qg.getFileSystemManager();
										try {
											v.readFile({
												filePath: 'manifest.json',
												encoding: 'utf-8',
												success: function (t) {
													console.log(t.data),
														console.log(
															'\u6210\u529f\u4e86'
														),
														l.default
															.Ad()
															.setManifestInfo(
																JSON.parse(
																	t.data
																)
															);
												},
												fail: function (t) {
													console.log(
														'\u5931\u8d25\u4e86'
													),
														console.log(t);
												}
											});
										} catch (B) {
											console.log(
												'\u8bfb\u53d6manifest.json\u5305\u540d\u5931\u8d25'
											);
										}
										(s.AdParams.labelName =
											s.AdParams.mi.labelName),
											(s.AdParams.age =
												s.AdParams.mi.age),
											(s.AdParams.company =
												s.AdParams.mi.company),
											(s.AdParams.softCode =
												s.AdParams.mi.softCode),
											(s.AdParams.ysCompanyName =
												s.AdParams.mi.ysCompanyName),
											(s.AdParams.ysMail =
												s.AdParams.mi.ysMail),
											(s.AdParams.ysAddress =
												s.AdParams.mi.ysAddress);
										try {
											v.readdir({
												dirPath: 'src',
												success: function (t) {
													console.log(
														JSON.stringify(t)
													);
													for (
														var e = '',
															o = '',
															i = 0;
														i < t.files.length;
														i++
													) {
														var a = t.files[i];
														-1 !=
															a.indexOf('mini') &&
															(a.endsWith(
																'.png'
															) ||
															a.endsWith('.jpg')
																? (e = a)
																: a.endsWith(
																		'.json'
																  ) && (o = a));
													}
													if (e) {
														var r = new Image(),
															d = !1;
														(r.onload =
															function () {
																d = !0;
																var t =
																	new cc.Texture2D();
																t.initWithElement(
																	r
																),
																	t.handleLoadedTexture(),
																	(l.default.LogoSp =
																		new cc.SpriteFrame(
																			t
																		));
															}),
															(r.onerror =
																function (t) {
																	d ||
																		(console.warn(
																			t
																		),
																		c.default.w(
																			'mi img err'
																		),
																		c.default.w(
																			t
																		));
																}),
															(r.src =
																'src/' + e);
													} else
														c.default.w(
															'mi \u6ca1\u83b7\u53d6\u5230\u56fe\u7247'
														);
													if (
														(c.default.w(
															'mi configName:' + o
														),
														o)
													)
														try {
															v.readFile({
																filePath: o,
																encoding:
																	'utf8',
																success:
																	function (
																		t
																	) {
																		console.log(
																			'text: ' +
																				t.data
																		);
																		var e =
																			JSON.parse(
																				t.data
																			);
																		(s.AdParams.mi =
																			JSON.parse(
																				JSON.stringify(
																					e.mi
																				)
																			)),
																			(s.AdParams.labelName =
																				s.AdParams.mi.labelName),
																			(s.AdParams.age =
																				s.AdParams.mi.age),
																			(s.AdParams.company =
																				s.AdParams.mi.company),
																			(s.AdParams.softCode =
																				s.AdParams.mi.softCode),
																			(s.AdParams.ysCompanyName =
																				s.AdParams.mi.ysCompanyName),
																			(s.AdParams.ysMail =
																				s.AdParams.mi.ysMail),
																			(s.AdParams.ysAddress =
																				s.AdParams.mi.ysAddress),
																			n &&
																				n();
																	},
																fail: function (
																	t,
																	e
																) {
																	c.default.w(
																		' mi  handling fail, code = ' +
																			e
																	),
																		c.default.w(
																			' mi  handling fail, data = ' +
																				JSON.stringify(
																					t
																				)
																		),
																		n &&
																			n();
																}
															});
														} catch (B) {
															c.default.w(
																'mi \u6ca1\u83b7\u53d6\u5230\u914d\u7f6e err'
															),
																c.default.w(B),
																n && n();
														}
													else
														c.default.w(
															'mi \u6ca1\u83b7\u53d6\u5230\u914d\u7f6e'
														),
															n && n();
												},
												fail: function (t) {
													console.log(
														'handling fail, code = ' +
															t
													),
														n && n();
												},
												complete: function () {}
											});
										} catch (B) {
											c.default.w(B),
												c.default.w(
													'mi \u8bfb\u53d6\u76ee\u5f55\u5931\u8d25'
												),
												n && n();
										}
										return;
									}
									console.log('\u8fdb\u5165vivo'),
										(g = qg.getSystemInfoSync().miniGame),
										console.log(g.package);
									var _ = '',
										y = '/' + g.package + '.png',
										A = qg.isFile({ uri: y });
									if ('true' == A) _ = y;
									else {
										var w = '/' + g.package + '.jpg';
										'true' == (A = qg.isFile({ uri: w })) &&
											(_ = w);
									}
									if (_) {
										var b = new Image(),
											S = !1;
										(b.onload = function () {
											c.default.i(
												'vivo\u8bfb\u53d6\u5230logo'
											),
												(S = !0);
											var t = new cc.Texture2D();
											t.initWithElement(b),
												t.handleLoadedTexture(),
												(l.default.LogoSp =
													new cc.SpriteFrame(t));
										}),
											(b.onerror = function (t) {
												S ||
													(c.default.w(
														'vivo\u8bfb\u53d6logo\u5931\u8d25'
													),
													c.default.w(t));
											}),
											(b.src = _);
									} else
										c.default.w(
											'vivo\u6ca1\u6709\u8bfb\u53d6\u5230logo\u56fe\u7247 '
										);
									(s.AdParams.labelName =
										s.AdParams.vivo.labelName),
										(s.AdParams.age = s.AdParams.vivo.age),
										(s.AdParams.company =
											s.AdParams.vivo.company),
										(s.AdParams.softCode =
											s.AdParams.vivo.softCode),
										(s.AdParams.ysCompanyName =
											s.AdParams.vivo.ysCompanyName),
										(s.AdParams.ysMail =
											s.AdParams.vivo.ysMail),
										(s.AdParams.ysAddress =
											s.AdParams.vivo.ysAddress);
									try {
										var I = qg.readFileSync({
											uri: '/' + g.package + '.json',
											encoding: 'utf8'
										});
										if ('string' == typeof I)
											c.default.w(
												'vivo  \u8bfb\u53d6\u914d\u7f6e\u5931\u8d25 = ' +
													I
											);
										else {
											console.log(
												'vivo handling success, text: ' +
													I.text
											);
											var C = JSON.parse(I.text);
											(s.AdParams.vivo = JSON.parse(
												JSON.stringify(C.vivo)
											)),
												(s.AdParams.labelName =
													s.AdParams.vivo.labelName),
												(s.AdParams.age =
													s.AdParams.vivo.age),
												(s.AdParams.company =
													s.AdParams.vivo.company),
												(s.AdParams.softCode =
													s.AdParams.vivo.softCode),
												(s.AdParams.ysCompanyName =
													s.AdParams.vivo.ysCompanyName),
												(s.AdParams.ysMail =
													s.AdParams.vivo.ysMail),
												(s.AdParams.ysAddress =
													s.AdParams.vivo.ysAddress);
										}
									} catch (B) {
										c.default.w(B),
											c.default.w(
												'vivo\u6ca1\u6709\u8bfb\u53d6\u5230\u914d\u7f6e\u6587\u4ef6 '
											);
									}
									o.default.IS_VIVO_GAME = !0;
								} else if (void 0 !== window.tt)
									o.default.IS_TT_GAME = !0;
								else if (void 0 !== window.qq) {
									o.default.IS_QQ_GAME = !0;
									var G = qq.getFileSystemManager();
									(s.AdParams.labelName =
										s.AdParams.qq.labelName),
										(s.AdParams.age = s.AdParams.qq.age),
										(s.AdParams.company =
											s.AdParams.qq.company),
										(s.AdParams.softCode =
											s.AdParams.qq.softCode),
										(s.AdParams.ysCompanyName =
											s.AdParams.qq.ysCompanyName),
										(s.AdParams.ysMail =
											s.AdParams.qq.ysMail),
										(s.AdParams.ysAddress =
											s.AdParams.qq.ysAddress);
									try {
										G.accessSync('params.json');
										var x = G.readFileSync(
												'params.json',
												'utf-8'
											),
											N = JSON.parse(x);
										console.log(x),
											(s.AdParams.qq = JSON.parse(
												JSON.stringify(N.qq)
											)),
											(s.AdParams.labelName =
												s.AdParams.qq.labelName),
											(s.AdParams.age =
												s.AdParams.qq.age),
											(s.AdParams.company =
												s.AdParams.qq.company),
											(s.AdParams.softCode =
												s.AdParams.qq.softCode),
											(s.AdParams.ysCompanyName =
												s.AdParams.qq.ysCompanyName),
											(s.AdParams.ysMail =
												s.AdParams.qq.ysMail),
											(s.AdParams.ysAddress =
												s.AdParams.qq.ysAddress);
									} catch (B) {
										console.warn(B),
											console.warn(
												'qq \u83b7\u53d6\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u5931\u8d25 params.json \u4f7f\u7528\u4ee3\u7801\u4e2d\u7684\u914d\u7f6e'
											);
									}
								} else if (void 0 !== window.h5api)
									(o.default.IS_4399_H5_GAME = !0), (e = !1);
								else if (void 0 !== window.gamebox)
									(o.default.IS_4399_BOX_GAME = !0), (e = !1);
								else if (void 0 !== window.ks)
									o.default.IS_KS_GAME = !0;
								else if (void 0 !== window.wx) {
									o.default.IS_WECHAT_GAME = !0;
									var P = wx.getFileSystemManager();
									(s.AdParams.labelName =
										s.AdParams.wx.labelName),
										(s.AdParams.age = s.AdParams.wx.age),
										(s.AdParams.company =
											s.AdParams.wx.company),
										(s.AdParams.softCode =
											s.AdParams.wx.softCode),
										(s.AdParams.ysCompanyName =
											s.AdParams.wx.ysCompanyName),
										(s.AdParams.ysMail =
											s.AdParams.wx.ysMail),
										(s.AdParams.ysAddress =
											s.AdParams.wx.ysAddress);
									try {
										P.accessSync('params.json'),
											(x = P.readFileSync(
												'params.json',
												'utf-8'
											));
										var T = JSON.parse(x);
										console.log(x),
											(s.AdParams.wx = JSON.parse(
												JSON.stringify(T.wx)
											)),
											(s.AdParams.labelName =
												s.AdParams.wx.labelName),
											(s.AdParams.age =
												s.AdParams.wx.age),
											(s.AdParams.company =
												s.AdParams.wx.company),
											(s.AdParams.softCode =
												s.AdParams.wx.softCode),
											(s.AdParams.ysCompanyName =
												s.AdParams.wx.ysCompanyName),
											(s.AdParams.ysMail =
												s.AdParams.wx.ysMail),
											(s.AdParams.ysAddress =
												s.AdParams.wx.ysAddress);
									} catch (B) {
										console.warn(B),
											console.warn(
												'wx \u83b7\u53d6\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u5931\u8d25 params.json \u4f7f\u7528\u4ee3\u7801\u4e2d\u7684\u914d\u7f6e'
											);
									}
								} else
									void 0 !== window.swan
										? (o.default.IS_BAIDU_GAME = !0)
										: void 0 !== window.uc
										? (o.default.IS_UC_GAME = !0)
										: (cc.sys.os,
										  cc.sys.OS_ANDROID,
										  void 0 !== window.H5Bridge
												? 'ios' ==
												  window.H5Bridge.getPlatform()
													? (console.log('iosh5'),
													  (o.default.IS_IOS_H5 =
															!0),
													  (e = !1))
													: (console.log(
															'\u5b89\u5353h5'
													  ),
													  (o.default.IS_ANDROID_H5 =
															!0),
													  (e = !1))
												: (cc.sys.os,
												  cc.sys.OS_IOS,
												  (e = !1)));
								n && n();
							}),
							(t.initGame = function (t) {
								var e = this;
								this.initPlatform(function () {
									var n = null;
									if (
										(o.default.IS_WECHAT_GAME
											? (wx.showShareMenu({
													withShareTicket: !0,
													menus: [
														'shareAppMessage',
														'shareTimeline'
													]
											  }),
											  wx.onShareAppMessage(function () {
													return {
														title: e.shareWord[0],
														imageUrl: e.sharePath
													};
											  }),
											  (n = wx.getSystemInfoSync()))
											: o.default.IS_TT_GAME
											? ((n = tt.getSystemInfoSync()),
											  tt.showShareMenu({
													success: function () {
														console.log(
															'\u5df2\u6210\u529f\u663e\u793a\u8f6c\u53d1\u6309\u94ae'
														);
													},
													fail: function (t) {
														console.log(
															'showShareMenu \u8c03\u7528\u5931\u8d25',
															t.errMsg
														);
													},
													complete: function () {
														console.log(
															'showShareMenu \u8c03\u7528\u5b8c\u6210'
														);
													}
											  }),
											  tt.onShareAppMessage(function (
													t
											  ) {
													return (
														console.log(t.channel),
														{
															title: e
																.shareWord[1],
															imageUrl:
																e.sharePath,
															success:
																function () {
																	console.log(
																		'\u5206\u4eab\u6210\u529f'
																	);
																},
															fail: function (t) {
																console.log(
																	'\u5206\u4eab\u5931\u8d25',
																	t
																);
															}
														}
													);
											  }))
											: o.default.IS_BAIDU_GAME
											? (n = swan.getSystemInfoSync())
											: o.default.IS_QQ_GAME
											? ((l.default.canShowUser = !0),
											  qq.showShareMenu({
													showShareItems: [
														'qq',
														'qzone',
														'wechatFriends',
														'wechatMoment'
													]
											  }),
											  qq.onShareAppMessage(function () {
													return {
														title: e.shareWord[0],
														imageUrl:
															s.AdParams.qq
																.shareImgUrl
													};
											  }),
											  (n = qq.getSystemInfoSync()))
											: o.default.IS_OPPO_GAME
											? (n = qg.getSystemInfoSync())
											: o.default.IS_MI_GAME
											? (n = qg.getSystemInfoSync())
											: o.default.IS_VIVO_GAME
											? (n = qg.getSystemInfoSync())
											: o.default.IS_UC_GAME
											? (n = uc.getSystemInfoSync())
											: o.default.IS_KS_GAME &&
											  (n = ks.getSystemInfoSync()),
										n)
									)
										if (
											((e.screenWidth = n.screenWidth),
											(e.screenHeight = n.screenHeight),
											window.cc)
										) {
											var i = cc.director
												.getScene()
												.getChildByName('Canvas');
											i.width <= i.height
												? (e.scale =
														e.screenWidth / i.width)
												: (e.scale =
														e.screenHeight /
														i.height);
										} else window.Laya;
									e.gameEvent('initGame'),
										d.default
											.loadResDir('gx/prefab', cc.Prefab)
											.then(function () {
												console.log(
													'\u52a0\u8f7dprefab\u6210\u529f'
												);
											})
											.catch(function () {
												console.log(
													'\u52a0\u8f7dprefab\u5931\u8d25'
												);
											}),
										setTimeout(function () {}, 4e3),
										t && t();
								}),
									d.default.loadJsonAsset(
										'gx/cfg/privacy',
										function () {}
									);
							}),
							(t.setUIGroup = function (t) {
								this.uiGroup = t;
							}),
							(t.initH5Hall = function () {
								this.isH5Hall = !0;
							}),
							(t.showPrivacyBtnWithParent = function (t) {
								if (
									(console.log('\u663e\u793a\u4e86111'),
									!o.default.IS_ANDROID_H5 || this.isH5Hall)
								)
									if (l.default.needShowAuthorizeBtn()) {
										if (null == t)
											return (
												c.default.e(
													'showPrivacyBtnWithParent parent is null '
												),
												void this.showPrivacyBtn()
											);
										var e = this,
											n = function () {
												if (l.default.btnPrivacySp) {
													var n = new cc.Node();
													(n.addComponent(
														cc.Sprite
													).spriteFrame =
														l.default.btnPrivacySp),
														(n.parent = t),
														n.setContentSize(
															100,
															100
														),
														(n.position = cc.v3(
															0,
															0,
															0
														)),
														console.log(
															'\u663e\u793a\u4e86'
														),
														n.on(
															cc.Node.EventType
																.TOUCH_END,
															function () {
																console.log(
																	'\u70b9\u51fb\u4e86'
																),
																	e.onClickPrivacyBtn();
															}
														),
														c.default.i(
															'showPrivacyBtnWithParent \u6210\u529f'
														);
												} else
													c.default.e(
														'\u9690\u79c1\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
													);
											};
										l.default.btnPrivacySp
											? n()
											: d.default.loadSprite(
													'gx/texture/btn_yinsixieyi',
													function (t, e) {
														t &&
															c.default.e(
																'\u9690\u79c1\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																	t
															),
															(l.default.btnPrivacySp =
																e),
															n();
													}
											  );
									} else
										console.log(
											'\u4e0d\u9700\u8981\u663e\u793a\u9690\u79c1\u653f\u7b56\u6309\u94ae'
										);
								else this.showH5GameHallBtnWithParent(t);
							}),
							(t.showUserPrivacyBtnWithParent = function (t) {
								if (o.default.IS_QQ_GAME)
									if (l.default.needShowAuthorizeBtn()) {
										if (null == t)
											return (
												c.default.e(
													'showUserPrivacyBtnWithParent parent is null '
												),
												void this.showUserPrivacyBtn()
											);
										var e = this,
											n = function () {
												if (l.default.btnUserSp) {
													var n = new cc.Node();
													(n.addComponent(
														cc.Sprite
													).spriteFrame =
														l.default.btnUserSp),
														(n.parent = t),
														n.setContentSize(
															100,
															100
														),
														(n.position = cc.v3(
															0,
															0,
															0
														)),
														n.on(
															cc.Node.EventType
																.TOUCH_END,
															function () {
																e.onClickUserPrivacyBtn();
															}
														),
														c.default.i(
															'showUserPrivacyBtnWithParent \u6210\u529f'
														);
												} else
													c.default.e(
														'\u7528\u6237\u534f\u8bae\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
													);
											};
										l.default.btnUserSp
											? n()
											: d.default.loadSprite(
													'gx/texture/btn_fuwuxieyi',
													function (t, e) {
														t &&
															c.default.e(
																'\u7528\u6237\u534f\u8bae\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																	t
															),
															(l.default.btnUserSp =
																e),
															n();
													}
											  );
									} else
										c.default.e(
											'\u4e0d\u9700\u8981\u7528\u6237\u534f\u8bae\u6309\u94ae'
										);
								else
									c.default.e(
										'\u9664qq\u5916 \u5176\u4ed6\u6e20\u9053\u4e0d\u663e\u793a '
									);
							}),
							(t.showH5GameHallBtnWithParent = function (t) {
								if (null == t)
									return (
										c.default.e(
											'show showH5GameHallBtnWithParent parent is null '
										),
										void this.showH5GameHallBtn()
									);
								var e = this,
									n = function () {
										if (l.default.btnH5HallSp) {
											var n = new cc.Node();
											(n.addComponent(
												cc.Sprite
											).spriteFrame =
												l.default.btnH5HallSp),
												(n.parent = t),
												n.setContentSize(100, 100),
												(n.position = cc.v3(0, 0, 0)),
												n.on(
													cc.Node.EventType.TOUCH_END,
													function () {
														e.onClickBackH5HallBtn();
													}
												),
												c.default.i(
													'showH5GameHallBtnWithParent \u6210\u529f'
												);
										} else
											c.default.e(
												'showH5GameHallBtnWithParent\u5931\u8d25 sp null'
											);
									};
								l.default.btnH5HallSp
									? n()
									: d.default.loadSprite(
											'gx/texture/btn_backhall',
											function (t, e) {
												t &&
													c.default.e(
														'showH5GameHallBtnWithParent \u663e\u793a\u5931\u8d25' +
															t
													),
													(l.default.btnH5HallSp = e),
													n();
											}
									  );
							}),
							(t.showH5GameHallBtn = function (t) {
								void 0 === t && (t = null);
								var e = this,
									n = function () {
										if (l.default.btnH5HallSp) {
											var n = new cc.Node();
											(n.addComponent(
												cc.Sprite
											).spriteFrame =
												l.default.btnH5HallSp),
												(n.parent = cc.find('Canvas'));
											var o = cc.winSize;
											(n.position =
												t ||
												cc.v3(
													-(o.width / 2 - 100),
													-110,
													0
												)),
												n.setContentSize(100, 100),
												n.on(
													cc.Node.EventType.TOUCH_END,
													function () {
														e.onClickBackH5HallBtn();
													}
												);
										} else
											c.default.e(
												'showH5GameHallBtn \u5931\u8d251 sp null'
											);
									};
								l.default.btnH5HallSp
									? n()
									: d.default.loadSprite(
											'gx/texture/btn_backhall',
											function (t, e) {
												t &&
													c.default.e(
														'showH5GameHallBtn \u5931\u8d251' +
															t
													),
													(l.default.btnH5HallSp = e),
													n();
											}
									  );
							}),
							(t.onClickBackH5HallBtn = function () {
								o.default.IS_ANDROID_H5
									? this.Ad().backGameHall()
									: c.default.e(
											'\u548b\u4f1a\u8c03\u7528\u8fd9\u513f\uff01\uff01\uff01'
									  );
							}),
							(t.showAddDesktopBtnWithParent = function (t) {
								if (l.default.needAddDesktopBtn()) {
									if (!this.hasDesktop()) {
										var e = this,
											n = function () {
												if (l.default.btnAddDesktopSp) {
													var n = new cc.Node();
													(n.addComponent(
														cc.Sprite
													).spriteFrame =
														l.default.btnAddDesktopSp),
														(n.parent = t),
														n.setContentSize(
															100,
															100
														),
														(n.position = cc.v3(
															0,
															0,
															0
														)),
														console.log(
															'\u663e\u793a\u4e86'
														),
														n.on(
															cc.Node.EventType
																.TOUCH_END,
															function () {
																console.log(
																	'\u70b9\u51fb\u4e86'
																),
																	e.onClickAddDesktopBtn(
																		n
																	);
															}
														),
														c.default.i(
															'\u6dfb\u52a0\u684c\u9762\u6309\u94ae \u6210\u529f'
														);
												} else
													c.default.e(
														'\u6dfb\u52a0\u684c\u9762\u6309\u94ae \u5931\u8d25 sp null'
													);
											};
										l.default.btnAddDesktopSp
											? n()
											: d.default.loadSprite(
													'gx/texture/btn_zhuomian',
													function (t, e) {
														t &&
															c.default.e(
																'\u6dfb\u52a0\u684c\u9762\u663e\u793a\u5931\u8d25' +
																	t
															),
															(l.default.btnAddDesktopSp =
																e),
															n();
													}
											  );
									}
								} else
									console.log(
										'\u4e0d\u9700\u8981\u663e\u793a\u6dfb\u52a0\u684c\u9762\u6309\u94ae'
									);
							}),
							(t.showMoreGameBtnWithParent = function (t) {
								if (
									f.default.getNativePlatform() ==
									v.PLATFORM.OPPO
								) {
									if (null == t)
										return (
											c.default.e(
												'showMoreGameBtnWithParent parent is null '
											),
											void this.showMoreGameBtn()
										);
									var e = this,
										n = function () {
											if (l.default.btnMoreGameSp) {
												var n = new cc.Node();
												(n.addComponent(
													cc.Sprite
												).spriteFrame =
													l.default.btnMoreGameSp),
													(n.parent = t),
													n.setContentSize(100, 100),
													(n.position = cc.v3(
														0,
														0,
														0
													)),
													n.on(
														cc.Node.EventType
															.TOUCH_END,
														function () {
															e.onClickMoreGameBtn();
														}
													),
													c.default.i(
														'showMoreGameBtnWithParent \u6210\u529f'
													);
											} else
												c.default.e(
													'\u66f4\u591a\u6e38\u620f\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
												);
										};
									l.default.btnMoreGameSp
										? n()
										: d.default.loadSprite(
												'gx/texture/gengduo',
												function (t, e) {
													t &&
														c.default.e(
															'\u66f4\u591a\u6e38\u620f\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.btnMoreGameSp =
															e),
														n();
												}
										  );
								} else
									c.default.e(
										'\u4e0d\u662f\u5b89\u5353oppo  apk\u6216\u8005qq\u4e0d\u663e\u793a\u66f4\u591a\u6e38\u620f'
									);
							}),
							(t.showQQShareBtnWithParent = function (t) {
								if (o.default.IS_QQ_GAME) {
									if (null == t)
										return void c.default.e(
											'showQQShareBtnWithParent parent is null '
										);
									var e = function () {
										if (l.default.btnQQShareSp) {
											var e = new cc.Node();
											(e.addComponent(
												cc.Sprite
											).spriteFrame =
												l.default.btnQQShareSp),
												(e.parent = t),
												e.setContentSize(100, 100),
												(e.position = cc.v3(0, 0, 0)),
												e.on(
													cc.Node.EventType.TOUCH_END,
													function () {
														l.default.showShareFriend(
															function (t) {
																console.log(
																	'\u5206\u4eab\u7684\u56de\u8c03\u7ed3\u679c\uff1a' +
																		t
																);
															}
														);
													}
												),
												c.default.i(
													'showMoreGameBtnWithParent \u6210\u529f'
												);
										} else
											c.default.e(
												'qq\u5206\u4eab\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
											);
									};
									l.default.btnQQShareSp
										? e()
										: d.default.loadSprite(
												'gx/texture/btn_QQShare',
												function (t, n) {
													t &&
														c.default.e(
															'qq\u5206\u4eab\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.btnQQShareSp =
															n),
														e();
												}
										  );
								} else
									c.default.e(
										'\u975eqq\u4e0d\u663e\u793a\u5206\u4eab\u6309\u94ae'
									);
							}),
							(t.showGameAgeWithParent = function (t) {
								if (null == t)
									return (
										c.default.e(
											'showGameAgeWithParent parent is null '
										),
										void this.showGameAge()
									);
								var e = l.default.getGameAge();
								if (e > 0) {
									var n = function () {
										if (l.default.ageSp) {
											var e = new cc.Node();
											(e.addComponent(
												cc.Sprite
											).spriteFrame = l.default.ageSp),
												(e.parent = t),
												(e.position = cc.v3(0, 0, 0)),
												c.default.i(
													'ageSp\u663e\u793a\u6210\u529f'
												);
										} else
											c.default.e(
												'ageSp \u7a7a \u663e\u793a\u9002\u9f84\u5931\u8d25'
											);
									};
									l.default.ageSp
										? n()
										: d.default.loadSprite(
												'gx/texture/icon' + e,
												function (t, e) {
													t &&
														c.default.e(
															'\u9002\u9f84\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.ageSp = e),
														n();
												}
										  );
								}
							}),
							(t.showGameAge = function () {
								var t = l.default.getGameAge();
								if (t > 0) {
									var e = function () {
										if (l.default.ageSp) {
											var t = new cc.Node();
											(t.addComponent(
												cc.Sprite
											).spriteFrame = l.default.ageSp),
												(t.parent = cc.find('Canvas'));
											var e = cc.winSize;
											t.position = cc.v3(
												-(e.width / 2 - 100),
												100,
												0
											);
										} else
											c.default.e(
												'ageSp \u7a7a \u663e\u793a\u9002\u9f84\u5931\u8d25   '
											);
									};
									l.default.ageSp
										? e()
										: d.default.loadSprite(
												'gx/texture/icon' + t,
												function (t, n) {
													t && c.default.e(t),
														(l.default.ageSp = n),
														e();
												}
										  );
								}
							}),
							(t.onClickPrivacyBtn = function () {
								o.default.IS_QQ_GAME
									? l.default.Ad().showAuthorize(
											function () {},
											function () {}
									  )
									: l.default.Ad().showPrivacy('privacy');
							}),
							(t.onClickMoreGameBtn = function () {
								l.default.Ad().showGamePortal();
							}),
							(t.onClickAddDesktopBtn = function (t) {
								(o.default.IS_VIVO_GAME ||
									o.default.IS_OPPO_GAME ||
									o.default.IS_QQ_GAME) &&
									l.default.Ad().addDesktop(function () {
										t.destroy();
									});
							}),
							(t.hasDesktop = function () {
								if (
									!o.default.IS_VIVO_GAME &&
									!o.default.IS_OPPO_GAME
								)
									return !o.default.IS_QQ_GAME;
								qg.hasShortcutInstalled({
									success: function (t) {
										return !!t;
									}
								});
							}),
							(t.showPrivacyBtn = function (t) {
								if (
									(void 0 === t && (t = null),
									l.default.needShowAuthorizeBtn())
								) {
									var e = this,
										n = function () {
											if (l.default.btnPrivacySp) {
												var n = new cc.Node();
												(n.addComponent(
													cc.Sprite
												).spriteFrame =
													l.default.btnPrivacySp),
													(n.parent =
														cc.find('Canvas'));
												var o = cc.winSize;
												(n.position =
													t ||
													cc.v3(
														-(o.width / 2 - 100),
														-110,
														0
													)),
													n.setContentSize(100, 100),
													n.on(
														cc.Node.EventType
															.TOUCH_END,
														function () {
															e.onClickPrivacyBtn();
														}
													);
											} else
												c.default.e(
													'\u9690\u79c1\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
												);
										};
									l.default.btnPrivacySp
										? n()
										: d.default.loadSprite(
												'gx/texture/btn_yinsixieyi',
												function (t, e) {
													t &&
														c.default.e(
															'\u9690\u79c1\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.btnPrivacySp =
															e),
														n();
												}
										  );
								} else
									console.log(
										'\u4e0d\u9700\u8981\u663e\u793a\u9690\u79c1\u653f\u7b56\u6309\u94ae'
									);
							}),
							(t.showUserPrivacyBtn = function (t) {
								if (
									(void 0 === t && (t = null),
									o.default.IS_QQ_GAME)
								)
									if (l.default.needShowAuthorizeBtn()) {
										var e = this,
											n = function () {
												if (l.default.btnPrivacySp) {
													var n = new cc.Node();
													(n.addComponent(
														cc.Sprite
													).spriteFrame =
														l.default.btnPrivacySp),
														(n.parent =
															cc.find('Canvas'));
													var o = cc.winSize;
													(n.position =
														t ||
														cc.v3(
															-(
																o.width / 2 -
																100
															),
															-110,
															0
														)),
														n.setContentSize(
															100,
															100
														),
														n.on(
															cc.Node.EventType
																.TOUCH_END,
															function () {
																e.onClickUserPrivacyBtn();
															}
														);
												} else
													c.default.e(
														'\u670d\u52a1\u534f\u8bae\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
													);
											};
										l.default.btnPrivacySp
											? n()
											: d.default.loadSprite(
													'gx/texture/btn_fuwuxieyi',
													function (t, e) {
														t &&
															c.default.e(
																'\u670d\u52a1\u534f\u8bae\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																	t
															),
															(l.default.btnPrivacySp =
																e),
															n();
													}
											  );
									} else
										console.log(
											'\u4e0d\u9700\u8981\u663e\u793a\u670d\u52a1\u534f\u8bae\u6309\u94ae'
										);
								else
									c.default.e(
										'\u9664qq\u5916 \u5176\u4ed6\u6e20\u9053\u4e0d\u663e\u793a '
									);
							}),
							(t.onClickUserPrivacyBtn = function () {
								l.default.Ad().showPrivacy('user');
							}),
							(t.showMoreGameBtn = function (t) {
								if (
									(void 0 === t && (t = null),
									f.default.getNativePlatform() ==
										v.PLATFORM.OPPO || o.default.IS_QQ_GAME)
								) {
									var e = this,
										n = function () {
											if (l.default.btnMoreGameSp) {
												var n = new cc.Node();
												(n.addComponent(
													cc.Sprite
												).spriteFrame =
													l.default.btnMoreGameSp),
													(n.parent =
														cc.find('Canvas'));
												var o = cc.winSize;
												(n.position =
													t ||
													cc.v3(
														-(o.width / 2 - 100),
														210,
														0
													)),
													n.setContentSize(100, 100),
													n.on(
														cc.Node.EventType
															.TOUCH_END,
														function () {
															e.onClickMoreGameBtn();
														}
													);
											} else
												c.default.e(
													'\u9690\u79c1\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
												);
										};
									l.default.btnMoreGameSp
										? n()
										: d.default.loadSprite(
												'gx/texture/gengduo',
												function (t, e) {
													t &&
														c.default.e(
															'\u9690\u79c1\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.btnMoreGameSp =
															e),
														n();
												}
										  );
								} else
									c.default.e(
										'\u4e0d\u662f\u5b89\u5353oppo  apk\u6216\u8005qq\u4e0d\u663e\u793a\u66f4\u591a\u6e38\u620f'
									);
							}),
							(t.getLabel = function (t) {
								if (o.default.IS_QQ_GAME)
									s.AdParams.qq.labelVersion &&
										(s.AdParams.qq.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.qq.labelVersion);
								else if (o.default.IS_WECHAT_GAME)
									s.AdParams.wx.labelVersion &&
										(s.AdParams.wx.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.wx.labelVersion);
								else if (o.default.IS_TT_GAME)
									s.AdParams.tt.labelVersion &&
										(s.AdParams.tt.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.tt.labelVersion);
								else if (o.default.IS_OPPO_GAME)
									s.AdParams.oppo.labelVersion &&
										(s.AdParams.oppo.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.oppo.labelVersion);
								else if (o.default.IS_MI_GAME)
									s.AdParams.mi.labelVersion &&
										(s.AdParams.mi.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.mi.labelVersion);
								else if (o.default.IS_VIVO_GAME)
									s.AdParams.vivo.labelVersion &&
										(s.AdParams.vivo.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.vivo.labelVersion);
								else if (o.default.IS_HUAWEI_GAME)
									s.AdParams.hw.labelVersion &&
										(s.AdParams.hw.labelVersion + '')
											.length > 0 &&
										(t += s.AdParams.hw.labelVersion);
								else if (
									o.default.IS_ANDROID_NATIVE ||
									o.default.IS_ANDROID_H5
								)
									return f.default.callMethodLabel(t);
								return r.default.getInstance().getLabel(t);
							}),
							(t.getValue = function (t, e) {
								return (
									void 0 === e && (e = 0),
									o.default.IS_ANDROID_NATIVE ||
									o.default.IS_ANDROID_H5
										? f.default.callMethodLabelValue(t, e)
										: o.default.IS_OPPO_GAME
										? (s.AdParams.oppo.labelVersion &&
												(
													s.AdParams.oppo
														.labelVersion + ''
												).length > 0 &&
												(t +=
													s.AdParams.oppo
														.labelVersion),
										  r.default
												.getInstance()
												.getValue(t, e))
										: o.default.IS_MI_GAME
										? (s.AdParams.mi.labelVersion &&
												(
													s.AdParams.mi.labelVersion +
													''
												).length > 0 &&
												(t +=
													s.AdParams.mi.labelVersion),
										  r.default
												.getInstance()
												.getValue(t, e))
										: o.default.IS_VIVO_GAME
										? (s.AdParams.vivo.labelVersion &&
												(
													s.AdParams.vivo
														.labelVersion + ''
												).length > 0 &&
												(t +=
													s.AdParams.vivo
														.labelVersion),
										  r.default
												.getInstance()
												.getValue(t, e))
										: o.default.IS_QQ_GAME
										? (s.AdParams.qq.labelVersion &&
												(
													s.AdParams.qq.labelVersion +
													''
												).length > 0 &&
												(t +=
													s.AdParams.qq.labelVersion),
										  r.default
												.getInstance()
												.getValue(t, e))
										: r.default.getInstance().getValue(t, e)
								);
							}),
							(t.Ad = function () {
								return o.default.IS_WECHAT_GAME
									? A.default.getInstance()
									: o.default.IS_QQ_GAME
									? g.default.getInstance()
									: o.default.IS_OPPO_GAME
									? i.default.getInstance()
									: o.default.IS_MI_GAME
									? y.default.getInstance()
									: o.default.IS_VIVO_GAME
									? u.default.getInstance()
									: o.default.IS_ANDROID_NATIVE
									? h.default.getInstance()
									: o.default.IS_ANDROID_H5
									? p.default.getInstance()
									: o.default.IS_4399_H5_GAME
									? m.default.getInstance()
									: o.default.IS_HUAWEI_GAME
									? _.default.getInstance()
									: o.default.IS_TT_GAME
									? b.default.getInstance()
									: a.default.getInstance();
							}),
							(t.shareGame = function (t) {
								var e = this;
								if (o.default.IS_WECHAT_GAME) {
									wx.shareAppMessage({
										title: this.shareWord[0],
										imageUrl: this.sharePath
									});
									var n = new Date().getTime();
									wx.onShow(function o() {
										new Date().getTime() - n >= 3e3
											? t && t(!0)
											: wx.showModal({
													title: '\u63d0\u793a',
													content:
														'\u8be5\u7fa4\u5df2\u5206\u4eab\u8fc7,\u8bf7\u6362\u4e2a\u7fa4',
													showCancel: !0,
													cancelText: '\u53d6\u6d88',
													cancelColor: '#000',
													confirmText:
														'\u53bb\u5206\u4eab',
													confirmColor: '#08f',
													success: function (n) {
														n.confirm
															? e.shareGame(t)
															: n.cancel &&
															  t &&
															  t(!1);
													}
											  }),
											wx.offShow(o);
									});
								} else
									o.default.IS_QQ_GAME
										? qq.shareAppMessage({
												title: this.shareWord[0],
												imageUrl:
													s.AdParams.qq.shareImgUrl,
												query: '',
												success: function () {
													t && t(!0);
												},
												fail: function () {
													t && t(!1);
												}
										  })
										: o.default.IS_UC_GAME
										? uc.shareAppMessage()
										: o.default.IS_TT_GAME &&
										  tt.shareAppMessage({
												title: this.shareWord[0],
												desc: this.shareWord[1],
												imageUrl: this.sharePath,
												query: '',
												success: function () {
													console.log(
														'\u5206\u4eab\u6210\u529f'
													),
														t && t(!0);
												},
												fail: function () {
													console.log(
														'\u5206\u4eab\u5931\u8d25'
													),
														t && t(!1);
												}
										  });
							}),
							(t.canShowShare = function () {
								return !!o.default.IS_KS_GAME;
							}),
							(t.startgamebtn = function () {}),
							(t.gameEvent = function (t, e) {
								var n = this;
								if (
									(void 0 === e && (e = null),
									console.log('[gx_game] gameEvent:' + t),
									(o.default.IS_ANDROID_NATIVE ||
										o.default.IS_IOS_NATIVE ||
										o.default.IS_ANDROID_H5) &&
										f.default.callMethod('gameEvent', t),
									t == v.EventName.modeLvChoice &&
										(o.default.IS_VIVO_GAME ||
											o.default.IS_OPPO_GAME))
								)
									if (l.default.getLabel('vc')) {
										var i = l.default.getValue('vc', 0);
										i > 0
											? (-1 == this.vcNum &&
													((this.vcNum = i),
													setInterval(function () {
														console.log(
															'\u91cd\u7f6evcNum'
														),
															(n.vcNum = i);
													}, 9e4)),
											  this.vcNum > 0
													? (this.vcNum--,
													  l.default
															.Ad()
															.showVideo(
																function () {},
																'vc'
															))
													: console.log('vcNum <0'))
											: console.log('vc <0');
									} else console.log('vc false');
							}),
							(t.gameEventLevelStart = function (t, e) {
								void 0 === e && (e = null),
									(t = t ? t.toString() : ''),
									console.log(
										'[gx_game] gameEventLevelStart:' + t
									),
									o.default.IS_ANDROID_NATIVE ||
									o.default.IS_IOS_NATIVE ||
									o.default.IS_ANDROID_H5
										? f.default.callMethod(
												'gameEventLevelStart',
												t
										  )
										: o.default.IS_OPPO_GAME ||
										  o.default.IS_VIVO_GAME;
							}),
							(t.gameEventLevelEnd = function (t, e) {
								void 0 === e && (e = !1),
									(t = t ? t.toString() : ''),
									console.log(
										'[gx_game] \u5173\u5361\u7ed3\u675f:' +
											t +
											' isVictory:' +
											(e
												? '\u80dc\u5229'
												: '\u5931\u8d25')
									),
									(o.default.IS_ANDROID_NATIVE ||
										o.default.IS_IOS_NATIVE ||
										o.default.IS_ANDROID_H5) &&
										f.default.callMethod(
											'gameEventLevelEnd',
											t + '_' + e
										),
									o.default.IS_QQ_GAME
										? l.default.getLabel('switch') &&
										  (this.Ad().showGameOverAD(),
										  s.AdParams.qq.gameEndShowCrazyPoint
												? l.default.Ad().showCrazyPoint(
														function () {},
														function () {
															s.AdParams.qq
																.gameEndShowGameBox
																? l.default
																		.Ad()
																		.showGameBox(
																			function () {},
																			function () {},
																			null
																		)
																: c.default.i(
																		'\u4e0d\u7528\u663e\u793a\u4e5d\u5bab\u683c2'
																  );
														},
														function () {},
														!1
												  )
												: (c.default.i(
														'\u4e0d\u7528\u663e\u793a\u7838\u5b9d\u7bb1'
												  ),
												  s.AdParams.qq
														.gameEndShowGameBox
														? l.default
																.Ad()
																.showGameBox(
																	function () {},
																	function () {},
																	null
																)
														: c.default.i(
																'\u4e0d\u7528\u663e\u793a\u4e5d\u5bab\u683c1'
														  )))
										: o.default.IS_OPPO_GAME
										? this.ovDesktop()
										: o.default.IS_VIVO_GAME &&
										  this.ovDesktop();
							}),
							(t.ovDesktop = function () {
								var t = this;
								if (l.default.getLabel('addDesk')) {
									var e = new Date().valueOf();
									if (!(e - this.ovDesktopLastTime > 6e4))
										return;
									this.ovDesktopCount++,
										2 == this.ovDesktopCount &&
											((this.ovDesktopCount = 0),
											l.default.Ad().hasAddDesktop(
												function () {
													console.log(
														'\u53ef\u4ee5\u6dfb\u52a0'
													),
														o.default
															.IS_VIVO_GAME &&
															(t.ovDesktopLastTime =
																e),
														l.default
															.Ad()
															.addDesktop(
																function () {},
																function () {},
																!1
															);
												},
												function () {
													console.log(
														'\u5df2\u7ecf\u6dfb\u52a0 \u4e0d\u7528\u518d\u6dfb\u52a0 \u4e86'
													);
												},
												function () {
													console.log(
														'\u68c0\u67e5\u662f\u5426\u6dfb\u52a0\u5931\u8d25\u4e86'
													);
												}
											));
								}
							}),
							(t.closebox = function () {}),
							(t.uploadOcpx = function () {
								console.warn('\u7981\u7528upload ocpx');
							}),
							(t.countdown = function (e, n) {
								if (o.default.IS_QQ_GAME) {
									var i = s.AdParams.qq.countdowntime;
									e.string = i + '\u79d2\u540e\u81ea\u52a8';
									var a = setInterval(function () {
										if (t.needjump)
											return (
												(e.string = ''),
												clearInterval(a),
												void (t.needjump = !1)
											);
										i--,
											(e.string =
												i + '\u79d2\u540e\u81ea\u52a8'),
											i <= 0 &&
												(n && n(),
												(e.string = ''),
												clearInterval(a));
									}, 1e3);
								}
							}),
							(t.quitcount = function () {
								o.default.IS_QQ_GAME && (t.needjump = !0);
							}),
							(t.showSubmsgBtnWithParent = function (t) {
								if (
									o.default.IS_QQ_GAME ||
									o.default.IS_WECHAT_GAME
								) {
									if (null == t)
										return void c.default.e(
											'showSubmsgBtnWithParent parent is null '
										);
									if (
										o.default.IS_QQ_GAME &&
										(!s.AdParams.qq.subIds ||
											s.AdParams.qq.subIds.length <= 0)
									)
										return void c.default.e(
											'\u8ba2\u9605\u6d88\u606f\u6309\u94ae\u663e\u793a\u5931\u8d25  \u6ca1\u6709\u6a21\u677fid '
										);
									if (
										o.default.IS_WECHAT_GAME &&
										(!s.AdParams.wx.subIds ||
											s.AdParams.wx.subIds.length <= 0)
									)
										return void c.default.e(
											'\u8ba2\u9605\u6d88\u606f\u6309\u94ae\u663e\u793a\u5931\u8d25  \u6ca1\u6709\u6a21\u677fid '
										);
									var e = function () {
										if (l.default.btnAddSubmsgSp) {
											var e = new cc.Node();
											(e.addComponent(
												cc.Sprite
											).spriteFrame =
												l.default.btnAddSubmsgSp),
												(e.parent = t),
												e.setContentSize(100, 100),
												(e.position = cc.v3(0, 0, 0)),
												e.on(
													cc.Node.EventType.TOUCH_END,
													function () {
														if (
															o.default.IS_QQ_GAME
														) {
															var t =
																s.AdParams.qq
																	.subIds;
															qq.subscribeAppMsg({
																tmplIds: t,
																subscribe: !0,
																success:
																	function (
																		e
																	) {
																		w.default.i(
																			'\u8c03\u7528\u8ba2\u9605\u8fd4\u56de\u7ed3\u679c'
																		),
																			w.default.i(
																				e
																			);
																		for (
																			var n = 0;
																			n <
																			t.length;
																			n++
																		) {
																			var o =
																				t[
																					n
																				];
																			'accept' ==
																			e[o]
																				? (l.default
																						.Ad()
																						.submsg(
																							o,
																							function () {}
																						),
																				  l.default
																						.Ad()
																						.createToast(
																							'\u8ba2\u9605\u6210\u529f'
																						))
																				: (w.default.i(
																						o +
																							'\u8ba2\u9605\u5931\u8d25\uff1a' +
																							e[
																								o
																							]
																				  ),
																				  l.default
																						.Ad()
																						.createToast(
																							'\u8ba2\u9605\u5931\u8d25'
																						));
																		}
																		setTimeout(
																			function () {
																				l.default
																					.Ad()
																					.initSubmsg();
																			},
																			1e3
																		);
																	},
																fail: function (
																	t
																) {
																	console.log(
																		'----subscribeAppMsg----fail',
																		t
																	),
																		w.default.e(
																			'\u8ba2\u9605\u5931\u8d25'
																		),
																		w.default.e(
																			t
																		),
																		l.default
																			.Ad()
																			.createToast(
																				'\u8ba2\u9605\u5931\u8d25'
																			);
																}
															});
														} else if (
															o.default
																.IS_WECHAT_GAME
														) {
															var e =
																s.AdParams.wx
																	.subIds;
															wx.requestSubscribeMessage(
																{
																	tmplIds: e,
																	success:
																		function (
																			t
																		) {
																			w.default.i(
																				'\u8c03\u7528\u8ba2\u9605\u8fd4\u56de\u7ed3\u679c'
																			),
																				w.default.i(
																					t
																				);
																			for (
																				var n = 0;
																				n <
																				e.length;
																				n++
																			) {
																				var o =
																					e[
																						n
																					];
																				'accept' ==
																				t[
																					o
																				]
																					? (l.default
																							.Ad()
																							.submsg(
																								o,
																								function () {}
																							),
																					  l.default
																							.Ad()
																							.createToast(
																								'\u8ba2\u9605\u6210\u529f'
																							))
																					: (w.default.i(
																							o +
																								'\u8ba2\u9605\u5931\u8d25\uff1a' +
																								t[
																									o
																								]
																					  ),
																					  l.default
																							.Ad()
																							.createToast(
																								'\u8ba2\u9605\u5931\u8d25'
																							));
																			}
																			setTimeout(
																				function () {
																					l.default
																						.Ad()
																						.initSubmsg();
																				},
																				1e3
																			);
																		},
																	fail: function (
																		t
																	) {
																		console.log(
																			'----subscribeAppMsg----fail',
																			t
																		),
																			w.default.e(
																				'\u8ba2\u9605\u5931\u8d25'
																			),
																			w.default.e(
																				t
																			),
																			l.default
																				.Ad()
																				.createToast(
																					'\u8ba2\u9605\u5931\u8d25'
																				);
																	}
																}
															);
														}
													}
												),
												c.default.i(
													'showSubmsgBtnWithParent \u6210\u529f'
												);
										} else
											c.default.e(
												'\u8ba2\u9605\u6d88\u606f\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
											);
									};
									l.default.btnAddSubmsgSp
										? e()
										: d.default.loadSprite(
												'gx/texture/btn_addsub',
												function (t, n) {
													t &&
														c.default.e(
															'\u8ba2\u9605\u6d88\u606f\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.btnAddSubmsgSp =
															n),
														e();
												}
										  );
								} else
									c.default.e(
										'\u4e0d\u662f\u5fae\u4fe1\u6216\u8005qq\u4e0d\u663e\u793a\u8ba2\u9605\u6d88\u606f\u6309\u94ae'
									);
							}),
							(t.showCancelAccountWithParent = function (t) {
								if (
									o.default.IS_HUAWEI_GAME ||
									((o.default.IS_ANDROID_H5 ||
										o.default.IS_ANDROID_NATIVE) &&
										f.default.getNativePlatform() ==
											v.PLATFORM.HUAWEI)
								) {
									if (null == t)
										return void c.default.e(
											'showCancelAccount parent is null '
										);
									var e = function () {
										if (l.default.btnCancelAccountSp) {
											var e = new cc.Node();
											(e.addComponent(
												cc.Sprite
											).spriteFrame =
												l.default.btnCancelAccountSp),
												(e.parent = t),
												e.setContentSize(100, 100),
												(e.position = cc.v3(0, 0, 0)),
												e.on(
													cc.Node.EventType.TOUCH_END,
													function () {
														o.default.IS_HUAWEI_GAME
															? qg.showModal({
																	title: '\u6ce8\u9500\u8d26\u53f7\u63d0\u793a',
																	content:
																		'\u786e\u5b9a\u6ce8\u9500\u8d26\u53f7\u5417\uff1f\u6ce8\u9500\u540e\u5c06\u65e0\u6cd5\u6062\u590d\uff01',
																	confirmText:
																		'\u786e\u5b9a\u6ce8\u9500',
																	success:
																		function (
																			t
																		) {
																			t.confirm
																				? (console.log(
																						'\u7528\u6237\u70b9\u51fb\u786e\u5b9a'
																				  ),
																				  cc.sys.localStorage.clear(),
																				  qg.exitApplication(
																						{
																							success:
																								function () {
																									console.log(
																										'exitApplication success'
																									);
																								},
																							fail: function () {
																								console.log(
																									'exitApplication fail'
																								);
																							},
																							complete:
																								function () {
																									console.log(
																										'exitApplication complete'
																									);
																								}
																						}
																				  ))
																				: t.cancel &&
																				  console.log(
																						'\u7528\u6237\u70b9\u51fb\u53d6\u6d88'
																				  );
																		}
															  })
															: f.default.callMethod(
																	'cancelAccount',
																	null,
																	function () {
																		console.log(
																			'\u786e\u5b9a\u6ce8\u9500\u8d26\u53f7\u4e86'
																		),
																			cc.sys.localStorage.clear();
																	}
															  );
													}
												),
												c.default.i(
													'showCancelAccountWithParent \u6210\u529f'
												);
										} else
											c.default.e(
												'\u6ce8\u9500\u8d26\u53f7\u6309\u94ae\u663e\u793a\u5931\u8d25 sp null'
											);
									};
									l.default.btnCancelAccountSp
										? e()
										: d.default.loadSprite(
												'gx/texture/btn_zhuxiao',
												function (t, n) {
													t &&
														c.default.e(
															'\u6ce8\u9500\u8d26\u53f7\u6309\u94ae\u663e\u793a\u5931\u8d25' +
																t
														),
														(l.default.btnCancelAccountSp =
															n),
														e();
												}
										  );
								} else
									c.default.e(
										'\u4e0d\u662f\u534e\u4e3aapk\u6216\u8005rpk\u4e0d\u663e\u793a\u6ce8\u9500\u8d26\u53f7\u6309\u94ae'
									);
							}),
							(t.canPlayWithRefuse = !1),
							(t.scale = 1),
							(t.ageSp = null),
							(t.btnPrivacySp = null),
							(t.btnUserSp = null),
							(t.btnH5HallSp = null),
							(t.btnMoreGameSp = null),
							(t.btnQQShareSp = null),
							(t.btnAddSubmsgSp = null),
							(t.btnAddDesktopSp = null),
							(t.btnCancelAccountSp = null),
							(t.screenWidth = 0),
							(t.initPlatformEnd = !1),
							(t.screenHeight = 0),
							(t.userInfo = {
								uid: '',
								openid: '',
								avatarUrl: '',
								nickName: ''
							}),
							(t.isShenHe = !1),
							(t.isH5Hall = !1),
							(t.shareWord = ['', '']),
							(t.sharePath = ''),
							(t.inBlockArea = !1),
							(t.recommedList = []),
							(t.uiGroup = ''),
							(t.enterMainCount = 0),
							(t.adConfig = {
								canRefresh: !1,
								useNative: !1,
								bannerUpdateTime: -1,
								customUpdateTime: 30,
								adCdTime: 60,
								interTick: 0,
								bannerTick: 0,
								switchPool: !0,
								nativeAdLimitCount: 5,
								showBanner: 0
							}),
							(t.vcNum = -1),
							(t.ovDesktopCount = 0),
							(t.ovDesktopLastTime = 0),
							(t.gameInfo = {
								package: '',
								name: '',
								versionName: '',
								versionCode: ''
							}),
							(t.canReportOcpx = !1),
							(t.needjump = !1),
							t
						);
					})();
				(n.default = S), cc._RF.pop();
			},
			{
				'./AndroidAdapter': 'AndroidAdapter',
				'./AndroidH5Adapter': 'AndroidH5Adapter',
				'./BaseAdapter': 'BaseAdapter',
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxLabelUtil': 'GxLabelUtil',
				'./GxLog': 'GxLog',
				'./GxUtils': 'GxUtils',
				'./H54399Adapter': 'H54399Adapter',
				'./HwAdapter': 'HwAdapter',
				'./MiAdapter': 'MiAdapter',
				'./OppoAdapter': 'OppoAdapter',
				'./QQAdapter': 'QQAdapter',
				'./ResUtil': 'ResUtil',
				'./TTAdapter': 'TTAdapter',
				'./VivoAdapter': 'VivoAdapter',
				'./WxAdapter': 'WxAdapter'
			}
		],
		DataManager: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '11e59ePFU5MU5L6M6URXSmi', 'DataManager');
				var n = cc.Class({
					extends: cc.Component,
					statics: {
						self: null,
						getInstance: function () {
							return null == n.self && (n.self = new n()), n.self;
						}
					},
					properties: {
						firstBox: !0,
						lv: 0,
						level: [],
						tips: 0,
						skin: [],
						gameBgm: !0
					},
					ctor: function () {
						n.self = this;
					},
					init: function () {
						var t = cc.sys.localStorage.getItem('gxwl.siwa.v2');
						if (null != t && '' != t) {
							var e = JSON.parse(t);
							(this.firstBox = e.firstBox),
								(this.lv = e.lv),
								(this.level = JSON.parse(e.level)),
								(this.level[0] = 1),
								(this.tips = e.tips),
								(this.skin = JSON.parse(e.skin)),
								(this.gameBgm = e.gameBgm);
						} else
							cc.log('\u6ca1\u6709\u6570\u636e'),
								(this.firstBox = !0),
								(this.lv = 0),
								(this.level = new Array(15).fill(0)),
								(this.level[0] = 1),
								(this.skin = new Array(15).fill(0)),
								(this.tips = 0),
								(this.gameBgm = !0),
								this.save();
						cc.log('\u6570\u636e = ' + t);
					},
					save: function () {
						var t = {};
						(t.firstBox = this.firstBox),
							(t.lv = this.lv),
							(t.level = JSON.stringify(this.level)),
							(t.tips = this.tips),
							(t.skin = JSON.stringify(this.skin)),
							(t.gameBgm = this.gameBgm),
							cc.sys.localStorage.setItem(
								'gxwl.siwa.v2',
								JSON.stringify(t)
							);
					}
				});
				cc._RF.pop();
			},
			{}
		],
		DataStorage: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, 'eedd1OpwjNFF4WTnWvre+pX', 'DataStorage'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = (function () {
					function t() {}
					return (
						(t.getItem = function (t, e) {
							if ((void 0 === e && (e = null), t)) {
								var n = cc.sys.localStorage.getItem(t);
								return (
									(null != n &&
										'null' != n &&
										'' !== n &&
										void 0 !== n) ||
										(n = e),
									n
								);
							}
							return null;
						}),
						(t.setItem = function (t, e) {
							cc.sys.localStorage.setItem(t, e);
						}),
						Object.defineProperty(t, 'musicPlay', {
							get: function () {
								return this.getItem('MUSIC', !0);
							},
							set: function (t) {
								this.setItem('MUSIC', t);
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(t, 'soundPlay', {
							get: function () {
								return this.getItem('SOUND', !0);
							},
							set: function (t) {
								this.setItem('SOUND', t);
							},
							enumerable: !1,
							configurable: !0
						}),
						Object.defineProperty(t, 'deviceid', {
							get: function () {
								return this.getItem('DEVICEID', '');
							},
							set: function (t) {
								this.setItem('DEVICEID', t);
							},
							enumerable: !1,
							configurable: !0
						}),
						t
					);
				})();
				(n.default = o), cc._RF.pop();
			},
			{}
		],
		EventManager: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '2171427geBLQYYDIsx/1YiD', 'EventManager');
				var n = {};
				(e.exports = function () {
					(this.on = function (t, e, o) {
						'string' == typeof t &&
						'function' == typeof e &&
						void 0 !== o
							? (void 0 === n[t] && (n[t] = []),
							  n[t].push({ callback: e, target: o }))
							: cc.error(
									"EventManager.js: GlobalEvent method 'on' param error!"
							  );
					}),
						(this.once = function (t, e, o) {
							'string' == typeof t &&
							'function' == typeof e &&
							void 0 !== o
								? (void 0 === n[t] && (n[t] = []),
								  n[t].push({
										callback: e,
										target: o,
										once: !0
								  }))
								: cc.error(
										"EventManager.js: GlobalEvent method 'once' param error!"
								  );
						}),
						(this.emit = function (t, e) {
							if ('string' == typeof t) {
								var o,
									i = n[t];
								if (void 0 !== i)
									for (var a = 0; a < i.length; a++) {
										var r = i[a];
										r &&
											((o = r.callback.call(r.target, e)),
											r.once &&
												off(t, r.callback, r.target));
									}
								return o;
							}
							cc.error(
								"EventManager.js: GlobalEvent method 'emit' param error!"
							);
						}),
						(this.off = function (t, e, o) {
							if (
								'string' == typeof t &&
								'function' == typeof e &&
								void 0 !== o
							) {
								var i = n[t];
								if (void 0 !== i)
									for (var a = 0; a < i.length; a++) {
										var r = i[a];
										if (
											r &&
											r.callback === e &&
											r.target === o
										) {
											i.splice(a, 1);
											break;
										}
									}
							} else
								cc.error(
									"EventManager.js: GlobalEvent method 'off' param error!"
								);
						}),
						(this.offByType = function (t) {
							if ('string' == typeof t) {
								for (; n[t].length > 1; ) n[t].shift();
								n[t] = void 0;
							} else
								cc.error(
									"EventManager.js: GlobalEvent method 'offByType' param error!"
								);
						}),
						(this.offByTarget = function (t) {
							if (void 0 !== t) {
								for (var e in n)
									for (var o = 0; o < n[e].length; o++)
										if (n[e][o].target === t) {
											n[e].splice(o, 1),
												cc.log('off ' + e);
											break;
										}
							} else
								cc.error(
									"EventManager.js: GlobalEvent method 'offByTarget' param error!"
								);
						});
				}),
					cc._RF.pop();
			},
			{}
		],
		GameManager: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, 'f2757quhX5LNb/kb/8GpTrL', 'GameManager');
				var n = cc.Class({
					extends: cc.Component,
					statics: {
						self: null,
						getInstance: function () {
							return null == n.self && (n.self = new n()), n.self;
						}
					},
					properties: {},
					ctor: function () {
						n.self = this;
					},
					init: function (t) {
						console.log('GameManager init'),
							this.updateResolution(t),
							(this.data = [
								[
									[1, 1, 1],
									[1, 1, 1, 1, 1, 1, 1]
								],
								[
									[2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
									[],
									[1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
								],
								[
									[2, 2, 2, 2, 3, 3, 2, 3, 3, 3],
									[],
									[3, 3, 3, 3, 2, 2, 3, 2, 2, 2]
								],
								[
									[3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
									[],
									[4, 3, 4, 3, 4, 3, 4, 3, 4, 3]
								],
								[
									[5, 5, 4, 4, 5, 4, 4, 5, 5, 4],
									[],
									[4, 4, 5, 5, 4, 5, 5, 4, 4, 5]
								],
								[
									[4, 4, 4, 4, 4, 5, 5, 5, 5, 5],
									[],
									[5, 5, 5, 5, 5, 6, 6, 6, 6, 6],
									[6, 6, 6, 6, 6, 4, 4, 4, 4, 4]
								],
								[
									[5, 5, 7, 7, 6, 6, 5, 5, 7, 7],
									[],
									[5, 5, 6, 6, 7, 7, 5, 5, 7, 7],
									[6, 6, 5, 5, 6, 6, 7, 7, 6, 6]
								],
								[
									[8, 6, 7, 7, 8, 8, 6, 6, 8, 8],
									[7, 7, 8, 8, 6, 6, 7, 7, 8, 8],
									[6, 7, 6, 6, 7, 7, 8, 6, 6, 7],
									[]
								],
								[
									[],
									[7, 9, 8, 7, 7, 8, 9, 8, 9, 9],
									[8, 8, 7, 7, 8, 7, 9, 9, 7, 9],
									[7, 7, 8, 9, 8, 8, 7, 9, 8, 9]
								],
								[
									[8, 10, 9, 9, 8, 10, 9, 9, 8, 10],
									[9, 8, 10, 10, 9, 8, 10, 10, 9, 8],
									[],
									[10, 9, 8, 8, 10, 9, 8, 8, 10, 9]
								],
								[
									[],
									[10, 11, 10, 9, 10, 11, 9, 10, 10, 9],
									[11, 10, 9, 11, 9, 9, 10, 11, 10, 9],
									[11, 9, 11, 10, 11, 10, 11, 9, 11, 9]
								],
								[
									[10, 12, 10, 11, 12, 12, 11, 10, 12, 10],
									[],
									[11, 10, 12, 12, 10, 11, 12, 12, 10, 11],
									[12, 11, 11, 10, 11, 10, 10, 11, 11, 12]
								],
								[
									[11, 13, 13, 12, 13, 11, 12, 11, 13, 11],
									[12, 12, 11, 11, 12, 13, 13, 12, 12, 13],
									[13, 11, 12, 13, 11, 12, 11, 13, 11, 12],
									[]
								],
								[
									[],
									[12, 12, 13, 14, 13, 14, 13, 12, 12, 12],
									[13, 14, 12, 13, 14, 12, 12, 13, 14, 13],
									[14, 13, 14, 12, 12, 13, 14, 14, 13, 14]
								],
								[
									[13, 15, 14, 13, 15, 14, 13, 15, 14, 13],
									[14, 13, 15, 14, 13, 15, 14, 13, 15, 14],
									[15, 14, 13, 15, 14, 13, 15, 14, 13, 15],
									[]
								]
							]),
							(this.taskNum = [
								1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
							]),
							(this.newSkin = 0);
					},
					initJson: function (t) {
						this.storyJson = t.json;
						for (var e = 0; e < this.storyJson.length; e++)
							for (var n = 0; n < this.storyJson[e].length; n++) {
								var o = this.storyJson[e][n];
								(o.spine_name = o.spine_name.split('+')),
									(o.option = o.option.split(',')),
									(this.storyJson[e][n] = o);
							}
					},
					getData: function () {
						mgr.Data.lv >= 15 && (mgr.Data.lv = 0);
						var t = JSON.stringify(this.data[mgr.Data.lv]);
						return JSON.parse(t);
					},
					updateResolution: function (t) {
						var e =
								t.designResolution.width /
								t.designResolution.height,
							n = cc.winSize.width / cc.winSize.height;
						(t.fitHeight = e <= n), (t.fitWidth = e > n);
					},
					showToast: function (t) {
						mgr.Res.loadRes('prefab/ui_toast', cc.Prefab).then(
							function (e) {
								var n = cc.instantiate(e);
								(n.parent = cc.director.getScene()),
									n.setPosition(
										cc.v2(
											cc.winSize.width / 2,
											cc.winSize.height / 2,
											200
										)
									),
									(n
										.getChildByName('txt')
										.getComponent(cc.Label).string = t);
								var o = cc.callFunc(function (t) {
										t.destroy();
									}, n),
									i = cc.sequence(
										cc
											.moveTo(
												0.5,
												cc.winSize.width / 2,
												cc.winSize.height / 2 + 30
											)
											.easing(cc.easeIn(0.5)),
										cc.delayTime(1),
										cc
											.moveTo(
												1,
												cc.winSize.width / 2,
												cc.winSize.height / 2 - 50
											)
											.easing(cc.easeOut(1)),
										o
									);
								n.runAction(i);
								var a = cc.sequence(
									cc.delayTime(1.5),
									cc.fadeOut(1)
								);
								n.runAction(a);
							}
						);
					}
				});
				cc._RF.pop();
			},
			{}
		],
		GameScene: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '5d05826CdNGloAnICy3pJ6w', 'GameScene'),
					cc.Class({
						extends: cc.Component,
						onLoad: function () {
							mgr.Game.updateResolution(
								this.node.getComponent(cc.Canvas)
							);
						},
						start: function () {
							mgr.Res.loadRes('prefab/ui/ui_home').then(function (
								t
							) {
								cc.instantiate(t).parent = cc.find('Canvas');
							});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		GxAdParams: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '568321FLY1I3LCM7B+euNpE', 'GxAdParams'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.AdParams = void 0),
					(n.AdParams = {
						labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
						age: 12,
						company: '',
						softCode: '',
						ysCompanyName:
							'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
						ysMail: '2361198052@qq.com',
						ysAddress:
							'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
						gameName: '',
						oppo: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							banner: '',
							native1: '',
							native2: '',
							native_banner: '',
							native_icon: '',
							video: '',
							native_custom1: '',
							native_custom2: '',
							native_custom_banner: '',
							gameBanner: '',
							gamePortal: '',
							gameDraw: '',
							bannerOnTop: !1,
							labelVersion: '',
							havebox: !1
						},
						mi: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							inter: 'b672387b924750e1052b55925495f80d',
							banner: 'f0684d0e4b45a22aa3d14da2d5e25e9f',
							native1: 'f7ce1b63755d33d1477551be3a24bd91',
							native2: '',
							native_banner: '',
							native_icon: '',
							video: 'c930fe3dacd17ce9617a4aa7d687f92e',
							native_custom1: '',
							native_custom2: '',
							native_custom_banner: '',
							gameBanner: '',
							gamePortal: '',
							gameDraw: '',
							bannerOnTop: !1,
							labelVersion: '',
							havebox: !1
						},
						vivo: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							inter: '',
							banner: '',
							custom1: '',
							custom2: '',
							custom_banner: '',
							native1: '',
							native2: '',
							video: '',
							native_icon: '',
							boxBanner: '',
							boxPortal: '',
							bannerOnTop: !0,
							labelVersion: '',
							havebox: !1
						},
						wx: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							appId: 'wxe2ca0cc427b7e86b',
							video: 'adunit-',
							banner: 'adunit-',
							inter: 'adunit-',
							inter_custom: 'adunit-',
							custom_left: 'adunit-',
							custom_right: 'adunit-',
							labelVersion: '',
							subIds: []
						},
						qq: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							appId: '1112204543',
							video: 'e757e4aafb16730b8b7c290757c12645',
							box: 'ebb2bb84f05dee2c51272897eefb38e6',
							inter: '0f7f1035be90a7f6c93580987da065e7',
							block: 'a6bc0b050d01b740e4cd93ba95aefbcc',
							banner: '47f3f7988e5d5f10ec7e1a557749c385',
							bannerOnTop: !1,
							gameEndShowCrazyPoint: !0,
							gameEndShowGameBox: !0,
							shareImgUrl: '',
							labelVersion: '2',
							countdowntime: 5,
							sceneidtest: !1,
							subIds: []
						},
						ks: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							inter: '',
							banner: '',
							video: '',
							labelVersion: ''
						},
						tt: {
							gameName: '',
							appId: '',
							ecpmConfigName: 'tt7c3e0a83e3026c4a02_hcr',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							inter: '',
							banner: '',
							video: '',
							labelVersion: ''
						},
						hw: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							appId: '108209745',
							inter: 'a1en1p9sb7',
							banner: 'v5j7fxt80k',
							custom_banner: '',
							video: 'k2x30ircfl',
							native_icon: '',
							native_banner: '',
							native1: 'e32q21trec',
							native2: '',
							bannerOnTop: !1,
							buildType: 'debug',
							debug_inter: 'testb4znbuh3n2',
							debug_banner: 'testw6vs28auh3',
							debug_custom_banner: '',
							debug_video: 'testx9dtjwj8hp',
							debug_native_icon: '',
							debug_native_banner: '',
							debug_native1: 'testu7m3hc4gvm',
							debug_native2: '',
							labelVersion: ''
						},
						uc: {
							gameName: '',
							labelName: 'srxsmg_srxsmgqq_100_qq_xyx_20221111',
							age: 12,
							company: '',
							softCode: '',
							ysCompanyName:
								'\u77f3\u5bb6\u5e84\u5e02\u9ad8\u5174\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8',
							ysMail: '2361198052@qq.com',
							ysAddress:
								'\u6cb3\u5317\u7701\u77f3\u5bb6\u5e84\u5e02\u9ad8\u65b0\u533a\u5929\u5c71\u4e16\u754c\u4e4b\u95e8\u5927\u53a6H-1009',
							inter: '',
							banner: '',
							video: '',
							labelVersion: ''
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		GxAudioUtil: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '3a696YVprVMZrwvLMQMSJT/', 'GxAudioUtil'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = t('./DataStorage'),
					i = (function () {
						function t() {}
						return (
							(t.playSound = function (t, e) {
								if (
									(void 0 === e && (e = !1),
									o.default.soundPlay)
								)
									return void 0 === t || null == t
										? null
										: (null !=
										  cc.loader.getRes(t, cc.AudioClip)
												? (t = cc.loader.getRes(
														t,
														cc.AudioClip
												  ))
												: 'string' == typeof t &&
												  (t = cc.url.raw(
														'resources/' + t
												  )),
										  cc.audioEngine.playEffect(t, e));
							}),
							(t.stopSound = function (t) {
								NaN !== Number(t) &&
									cc.audioEngine.stopEffect(t);
							}),
							(t.stopAllSounds = function () {
								cc.audioEngine.stopAllEffects();
							}),
							(t.playMusic = function (t, e) {
								if (
									(void 0 === e && (e = !0),
									o.default.musicPlay)
								) {
									if (void 0 === t || null == t) return null;
									null != cc.loader.getRes(t, cc.AudioClip)
										? (t = cc.loader.getRes(
												t,
												cc.AudioClip
										  ))
										: 'string' == typeof t &&
										  (t = cc.url.raw('resources/' + t)),
										this.stopMusic(),
										(this.musicHandle =
											cc.audioEngine.playMusic(t, e));
								}
							}),
							(t.stopMusic = function () {
								(this.musicHandle = null),
									cc.audioEngine.stopMusic();
							}),
							(t.pauseAll = function () {
								cc.audioEngine.pauseAll();
							}),
							(t.resumeAll = function () {
								cc.audioEngine.resumeAll();
							}),
							(t.isMusicPlaying = function () {
								return cc.audioEngine.isMusicPlaying();
							}),
							(t.pauseMusic = function () {
								this.musicHandle && cc.audioEngine.pauseMusic();
							}),
							(t.resumeMusic = function () {
								this.musicHandle &&
									cc.audioEngine.resumeMusic();
							}),
							(t.stopAll = function () {
								cc.audioEngine.stopAll();
							}),
							(t.setSoundVolume = function (t) {
								cc.audioEngine.setEffectsVolume(t);
							}),
							(t.setMusicVolume = function (t) {
								cc.audioEngine.setMusicVolume(t);
							}),
							(t.musicHandle = null),
							(t.effectHandle = []),
							t
						);
					})();
				(n.default = i), cc._RF.pop();
			},
			{ './DataStorage': 'DataStorage' }
		],
		GxConstant: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'e5744h7qEFABaHwvMoclGld', 'GxConstant');
				var i =
					((o = function (t, e) {
						return (o =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (t, e) {
									t.__proto__ = e;
								}) ||
							function (t, e) {
								for (var n in e)
									Object.prototype.hasOwnProperty.call(
										e,
										n
									) && (t[n] = e[n]);
							})(t, e);
					}),
					function (t, e) {
						function n() {
							this.constructor = t;
						}
						o(t, e),
							(t.prototype =
								null === e
									? Object.create(e)
									: ((n.prototype = e.prototype), new n()));
					});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var a = (function (t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						i(e, t),
						(e.Code2SessionUrl = ''),
						(e.SubmsgBaseUrl = ''),
						e
					);
				})(t('./BaseGxConstant').default);
				(n.default = a), cc._RF.pop();
			},
			{ './BaseGxConstant': 'BaseGxConstant' }
		],
		GxEnum: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '8f717rWTEJI5YhGBdFOsr7g', 'GxEnum'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.EventName =
						n.privacy_type =
						n.PLATFORM =
						n.ad_native_state =
						n.ad_native_type =
							void 0),
					((o = n.ad_native_type || (n.ad_native_type = {}))[
						(o.banner = 0)
					] = 'banner'),
					(o[(o.inter1 = 1)] = 'inter1'),
					(o[(o.inter2 = 2)] = 'inter2'),
					(o[(o.native_icon = 3)] = 'native_icon'),
					(function (t) {
						(t[(t.none = 0)] = 'none'),
							(t[(t.need_show = 1)] = 'need_show'),
							(t[(t.show = 2)] = 'show'),
							(t[(t.click = 3)] = 'click');
					})(n.ad_native_state || (n.ad_native_state = {})),
					(function (t) {
						(t.MI = 'mi'),
							(t.OPPO = 'oppo'),
							(t.VIVO = 'vivo'),
							(t.G233 = '233'),
							(t.MMY = 'mmy'),
							(t.HUAWEI = 'huawei'),
							(t.G4399 = '4399');
					})(n.PLATFORM || (n.PLATFORM = {})),
					(function (t) {
						(t.user = 'user'), (t.privacy = 'privacy');
					})(n.privacy_type || (n.privacy_type = {})),
					(function (t) {
						(t.main = 'main'),
							(t.lvStart = 'lvStart'),
							(t.lvEnd = 'lvEnd'),
							(t.modeLvChoice = 'modeLvChoice');
					})(n.EventName || (n.EventName = {})),
					cc._RF.pop();
			},
			{}
		],
		GxFirstScene: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '9038amqo/FPtYJukM49Tmxd', 'GxFirstScene');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./ResUtil'),
					c = t('./GxAdParams'),
					d = t('./GxConstant'),
					l = cc._decorator,
					u = l.ccclass,
					h = l.property,
					p = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.jkTitle = null),
								(e.jkContent = null),
								(e.jkCompany = null),
								(e.jkSoftCode = null),
								(e.ageSp = null),
								(e.gameSceneName = 'GameScene'),
								(e.canJumpToNext = !1),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.onLoad = function () {
								var t = this,
									e = cc.winSize;
								e.width > e.height
									? ((this.node.getComponent(
											cc.Canvas
									  ).designResolution = cc.size(1280, 720)),
									  (this.node.getComponent(
											cc.Canvas
									  ).fitHeight = !0),
									  (this.node.getComponent(
											cc.Canvas
									  ).fitHeight = !0))
									: ((this.node.getComponent(
											cc.Canvas
									  ).designResolution = cc.size(720, 1280)),
									  (this.node.getComponent(
											cc.Canvas
									  ).fitWidth = !0),
									  (this.node.getComponent(
											cc.Canvas
									  ).fitHeight = !1)),
									(this.canJumpToNext = !0),
									(this.jkTitle.node.active = !1),
									(this.jkContent.node.active = !1),
									r.default.initPlatform(function () {
										r.default.initGame(function () {
											var e = r.default.getJkShowTime();
											if (e >= 1) {
												var n = r.default.getGameAge();
												n > 0 &&
													(s.default.loadSprite(
														'gx/texture/icon' + n,
														function (e, n) {
															e ||
																(t.ageSp &&
																	cc.isValid(
																		t.ageSp
																	) &&
																	(t.ageSp.spriteFrame =
																		n),
																(r.default.ageSp =
																	n));
														}
													),
													s.default.loadSprite(
														'gx/texture/btn_yinsixieyi',
														function (t, e) {
															t ||
																(r.default.btnPrivacySp =
																	e);
														}
													),
													s.default.loadSprite(
														'gx/texture/btn_zhuomian',
														function (t, e) {
															t ||
																(r.default.btnAddDesktopSp =
																	e);
														}
													),
													s.default.loadSprite(
														'gx/texture/btn_QQShare',
														function (t, e) {
															t ||
																(r.default.btnQQShareSp =
																	e);
														}
													)),
													d.default.IS_QQ_GAME
														? (t.jkCompany.string =
																'')
														: c.AdParams.company &&
														  c.AdParams.company
																.length > 0
														? (t.jkCompany.string =
																'\u8457\u4f5c\u6743\u4eba\uff1a' +
																c.AdParams
																	.company)
														: d.default
																.IS_OPPO_GAME &&
														  ((t.canJumpToNext =
																!1),
														  (t.jkCompany.string =
																'\u9700\u8981\u8457\u4f5c\u6743\u4eba\uff1a')),
													d.default.IS_QQ_GAME &&
														(t.jkCompany.string =
															''),
													c.AdParams.softCode &&
													c.AdParams.softCode.length >
														0
														? (t.jkSoftCode.string =
																'\u8f6f\u8457\u767b\u8bb0\u53f7\uff1a' +
																c.AdParams
																	.softCode)
														: d.default
																.IS_OPPO_GAME &&
														  ((t.canJumpToNext =
																!1),
														  (t.jkCompany.string =
																'\u8f6f\u8457\u767b\u8bb0\u53f7\uff1a')),
													(t.jkTitle.node.active =
														!0),
													(t.jkContent.node.active =
														!0);
											}
											t.scheduleOnce(function () {
												r.default.needShowAuthorize()
													? r.default
															.Ad()
															.showAuthorize(
																function () {
																	t.enterGame();
																},
																function () {}
															)
													: t.enterGame();
											}, e);
										});
									});
							}),
							(e.prototype.start = function () {}),
							(e.prototype.enterGame = function () {
								var t = this;
								setTimeout(function () {
									r.default.Ad().initAd();
								}, 1e3),
									r.default.Ad().getDeviceId &&
										r.default.Ad().getDeviceId(),
									this.canJumpToNext
										? d.default.IS_HUAWEI_GAME ||
										  d.default.IS_MI_GAME
											? r.default.Ad().login(
													function () {
														t.jumpScene();
													},
													function () {}
											  )
											: this.jumpScene()
										: d.default.IS_OPPO_GAME &&
										  (console.log(
												'\u662f\u4e0d\u662f\u6ca1\u6dfb\u52a0\u8f6f\u8457 \u4fe1\u606f'
										  ),
										  console.log(
												'\u662f\u4e0d\u662f\u6ca1\u6dfb\u52a0\u8f6f\u8457 \u4fe1\u606f'
										  ),
										  console.log(
												'\u662f\u4e0d\u662f\u6ca1\u6dfb\u52a0\u8f6f\u8457 \u4fe1\u606f'
										  ),
										  console.log(
												'\u662f\u4e0d\u662f\u6ca1\u6dfb\u52a0\u8f6f\u8457 \u4fe1\u606f'
										  ),
										  console.log(
												'\u662f\u4e0d\u662f\u6ca1\u6dfb\u52a0\u8f6f\u8457 \u4fe1\u606f'
										  ));
							}),
							(e.prototype.jumpScene = function () {
								cc.director.loadScene(this.gameSceneName);
							}),
							a([h(cc.Label)], e.prototype, 'jkTitle', void 0),
							a([h(cc.Label)], e.prototype, 'jkContent', void 0),
							a([h(cc.Label)], e.prototype, 'jkCompany', void 0),
							a([h(cc.Label)], e.prototype, 'jkSoftCode', void 0),
							a([h(cc.Sprite)], e.prototype, 'ageSp', void 0),
							a([h], e.prototype, 'gameSceneName', void 0),
							a([u], e)
						);
					})(cc.Component);
				(n.default = p), cc._RF.pop();
			},
			{
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		GxGame: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '94a9cCjAGdF24s7md0c6p3U', 'GxGame');
				var i =
					((o = function (t, e) {
						return (o =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (t, e) {
									t.__proto__ = e;
								}) ||
							function (t, e) {
								for (var n in e)
									Object.prototype.hasOwnProperty.call(
										e,
										n
									) && (t[n] = e[n]);
							})(t, e);
					}),
					function (t, e) {
						function n() {
							this.constructor = t;
						}
						o(t, e),
							(t.prototype =
								null === e
									? Object.create(e)
									: ((n.prototype = e.prototype), new n()));
					});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var a = t('./BaseGxGame'),
					r = t('./GxConstant'),
					s = t('./DataStorage'),
					c = t('./GxAdParams'),
					d = t('./GxUtils'),
					l = t('./GxLog'),
					u = t('./ResUtil'),
					h = (function (t) {
						function e() {
							return (
								(null !== t && t.apply(this, arguments)) || this
							);
						}
						return (
							i(e, t),
							(e.needShowAuthorize = function () {
								return (
									!!(
										r.default.IS_OPPO_GAME ||
										r.default.IS_VIVO_GAME ||
										r.default.IS_HUAWEI_GAME ||
										r.default.IS_QQ_GAME ||
										r.default.IS_MI_GAME
									) &&
									!s.default.getItem(
										r.default.KEY_PRIVACY_AGREE
									)
								);
							}),
							(e.needShowAuthorizeBtn = function () {
								return !!(
									r.default.IS_OPPO_GAME ||
									r.default.IS_VIVO_GAME ||
									r.default.IS_HUAWEI_GAME ||
									r.default.IS_QQ_GAME ||
									r.default.IS_ANDROID_NATIVE ||
									r.default.IS_ANDROID_H5 ||
									r.default.IS_MI_GAME
								);
							}),
							(e.needAddDesktopBtn = function () {
								return !!(
									r.default.IS_OPPO_GAME ||
									r.default.IS_VIVO_GAME ||
									r.default.IS_QQ_GAME
								);
							}),
							(e.getJkShowTime = function () {
								return r.default.IS_OPPO_GAME ||
									r.default.IS_VIVO_GAME ||
									r.default.IS_HUAWEI_GAME ||
									r.default.IS_QQ_GAME ||
									r.default.IS_MI_GAME
									? 3
									: 0.001;
							}),
							(e.getGameAge = function () {
								return r.default.IS_4399_H5_GAME ||
									r.default.IS_WECHAT_GAME
									? -1
									: r.default.IS_ANDROID_NATIVE
									? parseInt(
											d.default.callMethod('getGameAge')
									  )
									: r.default.IS_ANDROID_H5
									? parseInt(this.Ad().getGameAge())
									: c.AdParams.age;
							}),
							(e.showSubMsg = function () {
								if (
									r.default.IS_WECHAT_GAME ||
									r.default.IS_QQ_GAME
								) {
									var t = e.Ad().getSubIds();
									t && t.length > 0
										? e.Ad().waitSubIds.length > 0
											? u.default.loadPrefab(
													'gx/prefab/submsg',
													function (t, n) {
														if (t)
															l.default.e(
																'\u52a0\u8f7d\u8ba2\u9605\u9884\u5236\u4f53\u5931\u8d25 \u65e0\u6cd5\u663e\u793a\u8ba2\u9605'
															);
														else {
															var o =
																cc.instantiate(
																	n
																);
															e.uiGroup &&
																(o.group =
																	e.uiGroup),
																o
																	.getComponent(
																		'Gx_submsg'
																	)
																	.show();
														}
													}
											  )
											: l.default.w(
													'\u672a\u8ba2\u9605id\u4e3a\u7a7a \u5df2\u7ecf\u5168\u90e8\u8ba2\u9605 \u4e0d\u663e\u793a\u8ba2\u9605'
											  )
										: l.default.w(
												'\u8ba2\u9605id\u4e3a\u7a7a\u6216\u8005\u6ca1\u6709\u914d\u7f6e \u4e0d\u663e\u793a\u8ba2\u9605'
										  );
								} else
									l.default.w(
										'\u975eqq \u5fae\u4fe1\u4e0d\u663e\u793a\u8ba2\u9605'
									);
							}),
							(e.showShareFriend = function (t) {
								r.default.IS_WECHAT_GAME || r.default.IS_QQ_GAME
									? u.default.loadPrefab(
											'gx/prefab/shareFriend',
											function (n, o) {
												if (n)
													l.default.e(
														'\u52a0\u8f7d\u5206\u4eab\u9884\u5236\u4f53\u5931\u8d25 \u65e0\u6cd5\u663e\u793a\u5206\u4eab'
													);
												else {
													var i = cc.instantiate(o);
													e.uiGroup &&
														(i.group = e.uiGroup);
													var a =
														i.getComponent(
															'Gx_shareFriend'
														);
													a.show(),
														a.setShareCallback(t);
												}
											}
									  )
									: l.default.w(
											'\u975eqq \u5fae\u4fe1\u4e0d\u663e\u793a\u5206\u4eab'
									  );
							}),
							(e.canShowUser = !1),
							(e.LogoSp = null),
							e
						);
					})(a.default);
				(n.default = h), cc._RF.pop();
			},
			{
				'./BaseGxGame': 'BaseGxGame',
				'./DataStorage': 'DataStorage',
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxLog': 'GxLog',
				'./GxUtils': 'GxUtils',
				'./ResUtil': 'ResUtil'
			}
		],
		GxLabelUtil: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '5892bowHLlKdbadhX47Zp5+', 'GxLabelUtil');
				var i =
					((o = function (t, e) {
						return (o =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (t, e) {
									t.__proto__ = e;
								}) ||
							function (t, e) {
								for (var n in e)
									Object.prototype.hasOwnProperty.call(
										e,
										n
									) && (t[n] = e[n]);
							})(t, e);
					}),
					function (t, e) {
						function n() {
							this.constructor = t;
						}
						o(t, e),
							(t.prototype =
								null === e
									? Object.create(e)
									: ((n.prototype = e.prototype), new n()));
					});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var a = t('./GxLog'),
					r = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e._labelName = ''),
								(e._retryTime = 0),
								(e.location = ''),
								(e.labels = null),
								(e.isSpecial = !1),
								(e._retryTimeLocationList = 0),
								(e.locationList = []),
								(e.initLabelSuccess = !1),
								(e.initIsSpecial = !1),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.getBaseUrl = function () {
								return '';
							}),
							(e.prototype.initLabel = function (t) {
								(this._labelName = t + ''),
									a.default.i('initLabel:' + t),
									this._labelName &&
									this._labelName.length > 0
										? (this._commonLogin(),
										  this._fetchLabel(),
										  this._fetchLocationList())
										: a.default.e(
												'init label error is null'
										  );
							}),
							(e.prototype.getLabel = function (t) {
								if (
									(console.log('getLabel:::' + t),
									!t ||
										!this.initLabelSuccess ||
										!this.initIsSpecial)
								)
									return !1;
								if (
									(console.log('getLabel2>>>>:::' + t),
									this.isSpecial)
								) {
									var e = this.labels.special.length;
									if (e > 0) {
										for (var n = 0, o = e; n < o; n++)
											if (
												(r = this.labels.special[n])
													.switchname == t
											) {
												var i = 1 == r.switchvalue;
												return (
													console.log(t + '::' + i), i
												);
											}
										return !1;
									}
									return !1;
								}
								var a = this.labels.common.length;
								if (a > 0) {
									for (n = 0, o = a; n < o; n++) {
										var r;
										if (
											(r = this.labels.common[n])
												.switchname == t
										)
											return (
												(i = 1 == r.switchvalue),
												console.log(t + '::' + i),
												i
											);
									}
									return !1;
								}
								return !1;
							}),
							(e.prototype.getValue = function (t, e) {
								if (
									this.labels &&
									this.labels.hasOwnProperty('selfswitch')
								) {
									for (
										var n = 0;
										n < this.labels.selfswitch.length;
										n++
									) {
										var o = this.labels.selfswitch[n];
										if (o.switchname == t) {
											if (
												/(-?\d+)(\.\d+)?/.test(
													o.switchvalue
												)
											) {
												console.log(
													'\u662f\u4e2a\u6d6e\u70b9'
												);
												var i = parseFloat(
													o.switchvalue
												);
												return isNaN(i)
													? o.switchvalue
													: i;
											}
											if (/-?\d+/.test(o.switchvalue)) {
												console.log(
													'\u662f\u4e2a\u6574\u6570'
												);
												var a = parseInt(o.switchvalue);
												return isNaN(a)
													? o.switchvalue
													: a;
											}
											return o.switchvalue;
										}
									}
									return e;
								}
								return e;
							}),
							(e.prototype._commonLogin = function () {
								console.log('label:getLocation'),
									this._commonLogin2();
							}),
							(e.prototype._commonLogin2 = function () {
								console.log('init login ======label:'),
									console.log('label:getLocation  End');
							}),
							(e.prototype._initIsSpecial = function () {
								this.isSpecial = !1;
								var t = 0;
								if (
									this.location &&
									this.initLabelSuccess &&
									this.locationList
								) {
									for (
										var e = 0;
										e < this.locationList.length;
										e++
									)
										if (
											-1 !=
											this.locationList[e].name.indexOf(
												this.location
											)
										) {
											t = this.locationList[e].id;
											break;
										}
									if (this.labels.blocked) {
										var n = this.labels.blocked.split(',');
										if (n)
											for (e = 0; e < n.length; e++)
												if (t == n[e]) {
													this.isSpecial = !0;
													break;
												}
									}
								}
								(this.initIsSpecial = !0),
									console.log('isSpecial:' + this.isSpecial);
							}),
							(e.prototype._fetchLabel = function () {
								console.log('start   _fetchLabel');
								var t = this;
								t._retryTime++,
									t._httpGets(
										this.getBaseUrl() +
											'/' +
											this._labelName +
											'.json?tt=' +
											new Date().getTime(),
										!1,
										function (e) {
											if (-2 == e)
												console.log(
													'\u62c9\u53d6\u6807\u7b7e\u5931\u8d25\u4e86'
												),
													console.log(
														'\u62c9\u53d6\u6807\u7b7e\u5931\u8d25\u4e86'
													),
													console.log(
														'\u62c9\u53d6\u6807\u7b7e\u5931\u8d25\u4e86'
													);
											else if (-1 != e) {
												var n = JSON.parse(e);
												n && 1e3 == n.code
													? ((t.labels = n.data),
													  (t.initLabelSuccess = !0),
													  console.log(
															'initLabel Success'
													  ),
													  t._initIsSpecial())
													: t.scheduleOnce(
															function () {
																t._fetchLabel();
															},
															t._retryTime
													  );
											} else
												t.scheduleOnce(function () {
													t._fetchLabel();
												}, 1);
										}
									);
							}),
							(e.prototype._fetchLocationList = function () {
								console.log('get Province List');
								var t = this,
									e =
										cc.sys.localStorage.getItem(
											'labelConfig2'
										);
								null != e && null != e && '' != e
									? ((t.locationList = JSON.parse(e)),
									  console.log(
											'_fetchLocationList Success from local'
									  ),
									  t._initIsSpecial())
									: t._httpGets(
											this.getBaseUrl() + '/config2.json',
											!1,
											function (e) {
												if (
													(t._retryTimeLocationList++,
													e)
												) {
													var n = JSON.parse(e);
													1e3 == n.code
														? ((t.locationList =
																n.data),
														  console.log(
																'_fetchLocationList Success'
														  ),
														  cc.sys.localStorage.setItem(
																'labelConfig2',
																JSON.stringify(
																	t.locationList
																)
														  ),
														  t._initIsSpecial())
														: t.scheduleOnce(
																function () {
																	t._fetchLocationList();
																},
																t._retryTimeLocationList
														  );
												} else
													t.scheduleOnce(function () {
														t._fetchLocationList();
													}, t._retryTimeLocationList);
											}
									  );
							}),
							(e.prototype.httpGetsLogin = function (t, e) {
								console.log('label:httpGetsLogin 1111 ');
								var n = new XMLHttpRequest();
								(n.onreadystatechange = function () {
									if (4 === n.readyState)
										if (
											(console.log(n.status + '.......'),
											n.status >= 200 && n.status <= 304)
										) {
											var t = n.responseText;
											e(t);
										} else e(-2);
								}),
									n.open('GET', t, !0),
									cc.sys.isNative &&
										n.setRequestHeader(
											'Accept-Encoding',
											'gzip,deflate'
										),
									-1 != t.indexOf('sohu') &&
										(n.setRequestHeader(
											'Content-Type',
											'application/x-www-form-urlencoded'
										),
										n.setRequestHeader(
											'Host',
											'pv.sohu.com'
										),
										n.setRequestHeader(
											'User-Agent',
											'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
										),
										n.setRequestHeader('Accept', '*/*'),
										n.setRequestHeader(
											'Connection',
											'keep-alive'
										)),
									n.setRequestHeader(
										'X-Requested-With',
										'XMLHttpRequest'
									),
									(n.timeout = 4e3);
								var o = !1;
								(n.ontimeout = function () {
									console.log(
										'xmlhttprequest location timeout'
									),
										o || ((o = !0), e(-1));
								}),
									(n.onerror = function (t) {
										console.log(
											t +
												'xmlhttprequest location onerror'
										),
											o || ((o = !0), e(-1));
									}),
									n.send();
							}),
							(e.prototype._httpGets = function (t, e, n) {
								if (
									(console.log('label:HttpGets  '), window.ks)
								) {
									var o = !1;
									window.ks.request({
										url: t,
										timeout: 3e3,
										dataType: '\u5176\u4ed6',
										success: function (t) {
											if (
												(console.log(
													'\u5feb\u624b\u8bbf\u95ee\u8fd4\u56de\u7684\u72b6\u6001\u7801\uff1a' +
														t.statusCode
												),
												console.log(
													'\u5feb\u624b\u8bbf\u95ee\u8fd4\u56de\u7684\u6570\u636e\uff1a' +
														JSON.parse(t.data)
												),
												t.statusCode >= 200 &&
													t.statusCode <= 304)
											) {
												var e = t.data;
												n(e);
											} else n(-1);
										},
										fail: function () {
											o || ((o = !0), n(-1));
										}
									});
								} else {
									var i = new XMLHttpRequest();
									(i.onreadystatechange = function () {
										if (
											(cc.log(
												' label location XML_HTTP_REQUEST onreadystatechange '
											),
											4 === i.readyState)
										)
											if (
												(console.log(
													'httpGetsCode:' + i.status
												),
												i.status >= 200 &&
													i.status <= 304)
											) {
												var t = i.responseText;
												n(t);
											} else n(-2);
									}),
										i.open('GET', t, !0),
										cc.sys.isNative &&
											i.setRequestHeader(
												'Accept-Encoding',
												'gzip,deflate'
											),
										i.setRequestHeader(
											'User-Agent',
											'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
										),
										i.setRequestHeader('Accept', '*/*'),
										i.setRequestHeader(
											'Connection',
											'keep-alive'
										),
										(i.timeout = 3e3);
									var a = !1;
									(i.ontimeout = function () {
										console.log('xmlhttprequest timeout'),
											a || ((a = !0), n(-1));
									}),
										(i.onerror = function (t) {
											console.log(
												t + 'xmlhttprequest onerror'
											),
												a || ((a = !0), n(-1));
										}),
										i.send();
								}
							}),
							(e.instance = null),
							e
						);
					})(cc.Component);
				(n.default = r), cc._RF.pop();
			},
			{ './GxLog': 'GxLog' }
		],
		GxLogo: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'ce38bCJV05LDbyvbadEDN3X', 'GxLogo');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = cc._decorator,
					c = s.ccclass;
				s.property;
				var d = (function (t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						i(e, t),
						(e.prototype.onLoad = function () {
							if (window.useSelfLogo)
								console.warn(
									'\u63a7\u5236\u4e0d\u8ba9sdk\u663e\u793alogo'
								);
							else {
								console.log('\u8bbe\u7f6e\u4e86logo');
								var t = this.node.getComponent(cc.Sprite);
								t && (t.spriteFrame = r.default.LogoSp);
							}
						}),
						(e.prototype.start = function () {}),
						a([c], e)
					);
				})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './GxGame': 'GxGame' }
		],
		GxLog: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '1d06b/XQ/JJbJWgf984BeBf', 'GxLog');
				var o = function () {
					for (var t = 0, e = 0, n = arguments.length; e < n; e++)
						t += arguments[e].length;
					var o = Array(t),
						i = 0;
					for (e = 0; e < n; e++)
						for (
							var a = arguments[e], r = 0, s = a.length;
							r < s;
							r++, i++
						)
							o[i] = a[r];
					return o;
				};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var i = (function () {
					function t() {}
					return (
						(t.setTag = function (t) {
							this.tag = t || 'gx_game';
						}),
						(t.setDebug = function (t) {
							this.debug = t || !0;
						}),
						(t.i = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							this.debug &&
								console.info.apply(
									console,
									o(['[' + this.tag + ']'], t)
								);
						}),
						(t.e = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							this.debug &&
								console.error.apply(
									console,
									o(['[' + this.tag + ']'], t)
								);
						}),
						(t.l = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							this.debug &&
								console.log.apply(
									console,
									o(['[' + this.tag + ']'], t)
								);
						}),
						(t.d = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							this.debug &&
								console.debug.apply(
									console,
									o(['[' + this.tag + ']'], t)
								);
						}),
						(t.w = function () {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							this.debug &&
								console.warn.apply(
									console,
									o(['[' + this.tag + ']'], t)
								);
						}),
						(t.tag = 'gx_game'),
						(t.debug = !0),
						t
					);
				})();
				(n.default = i), cc._RF.pop();
			},
			{}
		],
		GxTimer: [
			function (t, e, n) {
				'use strict';
				var o, i;
				cc._RF.push(e, 'e7476zaAqNC1biFhKJG68DP', 'GxTimer'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					((i = o || (o = {}))[(i.NO = 0)] = 'NO'),
					(i[(i.START = 1)] = 'START'),
					(i[(i.PAUSE = 2)] = 'PAUSE'),
					(i[(i.RESUME = 3)] = 'RESUME'),
					(i[(i.STOP = 4)] = 'STOP');
				var a = (function () {
					function t() {
						(this._state = o.NO),
							(this.timeoutHandler = null),
							(this.remainTime = 0),
							(this.intervalTime = 0),
							(this.repeatCount = 0),
							(this.remainCount = 0),
							(this.callback = null),
							(this.taskStartTime = 0);
					}
					return (
						(t.loop = function (e, n, o) {
							void 0 === n && (n = 0), void 0 === o && (o = 0);
							var i = new t();
							return i.run(e, n, o), i;
						}),
						(t.once = function (e, n) {
							void 0 === n && (n = 0);
							var o = new t();
							return o.run(e, n, 1), o;
						}),
						(t.prototype.loop = function (t, e, n) {
							void 0 === e && (e = 0),
								void 0 === n && (n = 0),
								this.run(t, e, n);
						}),
						(t.prototype.once = function (t, e) {
							void 0 === e && (e = 0), this.run(t, e, 1);
						}),
						(t.prototype.run = function (t, e, n) {
							void 0 === e && (e = 0),
								void 0 === n && (n = 0),
								e < 0 && (e = 0),
								n < 0 && (n = 0),
								(this.intervalTime = e),
								(this.remainTime = e),
								(this.repeatCount = n),
								(this.remainCount = n),
								(this.callback = t),
								this.setTimeout();
						}),
						(t.prototype.setTimeout = function (t, e) {
							var n = this;
							void 0 === t && (t = null),
								void 0 === e && (e = null),
								null == t && (t = this.callback),
								null == e && (e = this.intervalTime),
								this.timeoutHandler &&
									clearTimeout(this.timeoutHandler),
								(this.timeoutHandler = null),
								(this._state = o.START),
								(this.taskStartTime = new Date().getTime()),
								(this.timeoutHandler = setTimeout(function () {
									t && t(),
										(0 == n.repeatCount ||
											--n.remainCount > 0) &&
											n.setTimeout();
								}, e));
						}),
						(t.prototype.pause = function () {
							if (this._state != o.START)
								return console.warn('Timer Not Start');
							(this._state = o.PAUSE),
								(this.remainTime = Math.max(
									this.intervalTime -
										new Date().getTime() -
										this.taskStartTime,
									0
								)),
								this.timeoutHandler &&
									clearTimeout(this.timeoutHandler),
								(this.timeoutHandler = null);
						}),
						(t.prototype.resume = function () {
							if (this._state != o.PAUSE)
								return console.warn('Timer Not Pause');
							this.setTimeout(this.callback, this.remainTime);
						}),
						(t.prototype.stop = function () {
							return this._state == o.NO
								? console.warn('Timer Not Start')
								: this._state == o.STOP
								? console.warn('Timer Has Stop')
								: ((this._state = o.STOP),
								  this.timeoutHandler &&
										clearTimeout(this.timeoutHandler),
								  (this.timeoutHandler = null),
								  (this.remainTime = 0),
								  (this.intervalTime = 0),
								  (this.repeatCount = 0),
								  (this.remainCount = 0),
								  (this.callback = null),
								  void (this.taskStartTime = 0));
						}),
						(t.prototype.clear = function () {
							(this._state = o.NO),
								this.timeoutHandler &&
									clearTimeout(this.timeoutHandler),
								(this.timeoutHandler = null),
								(this.remainTime = 0),
								(this.intervalTime = 0),
								(this.repeatCount = 0),
								(this.remainCount = 0),
								(this.callback = null),
								(this.taskStartTime = 0);
						}),
						Object.defineProperty(t.prototype, 'state', {
							get: function () {
								return this._state;
							},
							enumerable: !1,
							configurable: !0
						}),
						t
					);
				})();
				(n.default = a), cc._RF.pop();
			},
			{}
		],
		GxUtils: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, 'aaad4wumnlDEohBMBvmpmSA', 'GxUtils'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = t('./GxConstant'),
					i = (function () {
						function t() {}
						return (
							(t.randomInt = function (t, e) {
								return Math.floor(this.random(t, e));
							}),
							(t.random = function (t, e) {
								return (
									(t = Number(t)),
									(e = Number(e)),
									NaN == t || NaN == e
										? null
										: (t > e && (t = (e ^= t ^= e) ^ t),
										  Math.random() * (e - t + 1) + t)
								);
							}),
							(t.loadRemoteRes = function (t) {
								return new Promise(function (e, n) {
									cc.loader.load(t, function (t, o) {
										if (t) return n(t);
										e(o);
									});
								});
							}),
							(t.loadRes = function (t, e) {
								return new Promise(function (n, o) {
									cc.js.isChildClassOf(e, cc.Asset)
										? cc.loader.loadRes(
												t,
												e,
												function (t, e) {
													if (t) return o(t);
													n(e);
												}
										  )
										: cc.loader.loadRes(t, function (t, e) {
												if (t) return o(t);
												n(e);
										  });
								});
							}),
							(t.loadResDir = function (t, e) {
								return new Promise(function (n, o) {
									cc.loader.loadResDir(t, e, function (e, i) {
										if (e)
											return (
												console.error(
													'\u52a0\u8f7d\u5931\u8d25\uff1a' +
														t
												),
												o(e)
											);
										n(i);
									});
								});
							}),
							(t.getRes = function (t, e) {
								return cc.resources
									? cc.resources.get(t, e)
									: cc.loader.getRes(t, e);
							}),
							(t.formatTime = function (t) {
								var e = t % 60;
								return (
									('0' + Math.floor(t / 60)).slice(-2) +
									':' +
									('0' + e).slice(-2)
								);
							}),
							(t.getNetworkTime = function () {
								return new Promise(function (t) {
									var e = new XMLHttpRequest();
									e.open('get', '/'),
										e.send(null),
										(e.onreadystatechange = function () {
											if (2 === e.readyState) {
												var n =
													e.getResponseHeader('Date');
												t(n), e.abort();
											}
										});
								});
							}),
							(t.getDay = function (t) {
								var e = new Date(t),
									n = e.getFullYear(),
									o = e.getMonth() + 1,
									i = e.getDate();
								return Number(
									n +
										('0' + o).slice(-2) +
										('0' + i).slice(-2)
								);
							}),
							(t.degreesToVectors = function (t) {
								var e = cc.misc.degreesToRadians(t);
								return cc.v2(0, 1).rotate(-e);
							}),
							(t.vectorsToDegress = function (t) {
								if (t.equals(cc.Vec2.ZERO)) return 0;
								var e = cc.v2(0, 1),
									n = t.signAngle(e);
								return cc.misc.radiansToDegrees(n);
							}),
							(t.clone = function (e) {
								var n = null;
								if (e instanceof Array) n = e.concat();
								else if (e instanceof Function) n = e;
								else
									for (var o in ((n = new Object()), e)) {
										var i = e[o];
										n[o] =
											'object' == typeof i
												? t.clone(i)
												: i;
									}
								return n;
							}),
							(t.emit = function (t) {
								for (
									var e = [], n = 1;
									n < arguments.length;
									n++
								)
									e[n - 1] = arguments[n];
								cc.director.getScene() &&
									cc.director
										.getScene()
										.emit(t, e[0], e[1], e[2], e[3], e[4]);
							}),
							(t.once = function (t, e, n) {
								cc.director.getScene() &&
									cc.director.getScene().once(t, e, n);
							}),
							(t.on = function (t, e, n) {
								cc.director.getScene() &&
									cc.director.getScene().on(t, e, n);
							}),
							(t.off = function (t, e, n) {
								cc.director.getScene() &&
									cc.director.getScene().off(t, e, n);
							}),
							(t.targetOff = function (t) {
								cc.director.getScene() &&
									cc.director.getScene().targetOff(t);
							}),
							(t.newPrefab = function (t, e, n) {
								var o = this;
								t = 'prefab/' + t;
								var i = function () {
									var i = cc.instantiate(
										o.getRes(t, cc.Prefab)
									);
									cc.isValid(e, !0) && (i.parent = e),
										n && n(i);
								};
								this.getRes(t, cc.Prefab)
									? i()
									: this.loadRes(t, cc.Prefab).then(
											function () {
												i();
											}
									  );
							}),
							(t.isNumber = function (t) {
								return (
									'number' == typeof t ||
									('string' == typeof t &&
										'' != (t = t.replace(/\s+/g, '')) &&
										!isNaN(t) &&
										/^\d+(\.\d+)?$/.test(t))
								);
							}),
							(t.findNode = function (t, e) {
								if (!t || void 0 === t || 'string' != typeof t)
									return e &&
										void 0 !== e &&
										e instanceof cc.Node
										? e
										: null;
								(e && void 0 !== e && e instanceof cc.Node) ||
									(e = cc.director.getScene());
								for (
									var n = null, o = 0, i = t.split('/');
									o < i.length;
									o++
								) {
									var a = i[o];
									if (!(n = e.getChildByName(a))) return null;
									e = n;
								}
								return n;
							}),
							(t.callMethod = function (t, e, n) {
								void 0 === e && (e = null);
								var i = null,
									a =
										t.substring(0, 1).toUpperCase() +
										t.substring(1);
								if (
									(n &&
										void 0 !== n &&
										(window['onGx' + a] = n),
									o.default.IS_ANDROID_NATIVE)
								) {
									var r =
										'(' +
										(null == e
											? ''
											: 'Ljava/lang/String;') +
										')Ljava/lang/String;';
									null != e &&
										'string' != typeof e &&
										(e = JSON.stringify(e)),
										console.log(
											'[gx_game]callMethod method = ' +
												t +
												' signature = ' +
												r +
												' params = ' +
												e
										),
										(i =
											null == e || void 0 === e
												? jsb.reflection.callStaticMethod(
														'com/gxgame/helper/GxBridge',
														t,
														'()Ljava/lang/String;'
												  )
												: jsb.reflection.callStaticMethod(
														'com/gxgame/helper/GxBridge',
														t,
														'(Ljava/lang/String;)Ljava/lang/String;',
														e
												  ));
								} else
									o.default.IS_ANDROID_H5 &&
										(i = window.H5Bridge[t]());
								return i;
							}),
							(t.callMethodLabel = function (t, e) {
								var n = null,
									i =
										'getLabel'
											.substring(0, 1)
											.toUpperCase() +
										'getLabel'.substring(1);
								return (
									o.default.IS_ANDROID_NATIVE
										? (e &&
												void 0 !== e &&
												(window['onGx' + i] = e),
										  (n = jsb.reflection.callStaticMethod(
												'com/gxgame/helper/GxBridge',
												'getLabel',
												'(Ljava/lang/String;)Z',
												t
										  )))
										: o.default.IS_ANDROID_H5 &&
										  (n = window.H5Bridge.getLabel(t)),
									n
								);
							}),
							(t.callMethodLabelValue = function (t, e, n) {
								void 0 === e && (e = -1);
								var i = null,
									a =
										'getValue'
											.substring(0, 1)
											.toUpperCase() +
										'getValue'.substring(1);
								return (
									o.default.IS_ANDROID_NATIVE
										? (n &&
												void 0 !== n &&
												(window['onGx' + a] = n),
										  (i = jsb.reflection.callStaticMethod(
												'com/gxgame/helper/GxBridge',
												'getValue',
												'(Ljava/lang/String;I)I',
												t,
												e
										  )))
										: o.default.IS_ANDROID_H5 &&
										  (i = window.H5Bridge.getValue(t, e)),
									i
								);
							}),
							(t.getNativePlatform = function () {
								return this.callMethod('getNativePlatform');
							}),
							(t.executePreFrame = function (t, e, n) {
								return (
									void 0 === n && (n = 1),
									new Promise(function (o) {
										var i = e;
										(function e() {
											for (
												var a = cc.sys.now(),
													r = i.next();
												;
												r = i.next()
											) {
												if (null == r || r.done)
													return void o(null);
												if (cc.sys.now() - a > n)
													return void t.scheduleOnce(
														function () {
															e();
														}
													);
											}
										})();
									})
								);
							}),
							t
						);
					})();
				(n.default = i), cc._RF.pop();
			},
			{ './GxConstant': 'GxConstant' }
		],
		Gx_GameOverAD: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '4a3d9N/nilFCqO54Z7CYFB4', 'Gx_GameOverAD');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = cc._decorator,
					c = s.ccclass;
				s.property;
				var d = (function (t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						i(e, t),
						(e.prototype.onLoad = function () {}),
						(e.prototype.start = function () {}),
						(e.prototype.show = function (t, e, n) {
							(this.onShow = t),
								(this.onClose = e),
								(this.onGet = n),
								this.onShow && this.onShow(),
								cc.director.getScene().addChild(this.node);
						}),
						(e.prototype.onDestroy = function () {
							this.onClose && this.onClose();
						}),
						(e.prototype.onCallBack = function (t, e) {
							switch (e) {
								case '\u70b9\u51fb':
									r.default.Ad().showVideo(function () {}),
										this.node.destroy();
							}
						}),
						a([c], e)
					);
				})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{ './GxGame': 'GxGame' }
		],
		Gx_add_icon: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '482f4Hi9DZLTq88VhC5AsuA', 'Gx_add_icon');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = cc._decorator,
					c = s.ccclass,
					d = s.property,
					l = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.btnAddIcon = null),
								(e.btnWatchAd = null),
								(e.innerNative = null),
								(e.onSucc = null),
								(e.onHide = null),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.onLoad = function () {}),
							(e.prototype.start = function () {
								this.node.zIndex = 1e4;
							}),
							(e.prototype.show = function (t, e) {
								null == this.node.parent &&
									cc.director.getScene().addChild(this.node),
									(this.onSucc = e),
									(this.onHide = t);
							}),
							(e.prototype.tapAddIcon = function () {
								var t = this;
								r.default.Ad().addDesktop(function () {
									t.btnAddIcon && (t.btnAddIcon.active = !1),
										t.onSucc && t.onSucc();
								});
							}),
							(e.prototype.tapClose = function () {
								this.node.destroy();
							}),
							(e.prototype.onDestroy = function () {
								this.onHide && this.onHide();
							}),
							(e.prototype.onEnable = function () {
								var t = this;
								(this.btnWatchAd.active = !1),
									r.default.Ad().showInterstitialNative(
										this.innerNative,
										function () {},
										function () {
											t.btnWatchAd.active = !0;
										},
										function () {
											(t.btnWatchAd.active = !1),
												r.default.Ad().showBanner(
													function () {},
													function () {}
												);
										}
									);
							}),
							(e.prototype.tapWatchAd = function () {
								r.default.Ad().clickNativeInnerInterstitial();
							}),
							a([d(cc.Node)], e.prototype, 'btnAddIcon', void 0),
							a([d(cc.Node)], e.prototype, 'btnWatchAd', void 0),
							a([d(cc.Node)], e.prototype, 'innerNative', void 0),
							a([c], e)
						);
					})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{ './GxGame': 'GxGame' }
		],
		Gx_authorize: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '9c6464yOK1J8IGdSRRKnDq3', 'Gx_authorize');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./DataStorage'),
					s = t('./GxConstant'),
					c = t('./GxGame'),
					d = cc._decorator,
					l = d.ccclass,
					u = d.property,
					h = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.onAgree = null),
								(e.onRefuse = null),
								(e.userNode = null),
								(e.andTextNode = null),
								(e.privacyNode = null),
								(e.erCiNode = null),
								(e.refuseBtn = null),
								(e.agreeBtn = null),
								(e.closeBtn = null),
								(e.tipsLabel = null),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.show = function (t, e) {
								this.node.parent ||
									((this.onAgree = t),
									(this.onRefuse = e),
									cc.director.getScene().addChild(this.node),
									this.on_show());
							}),
							(e.prototype.start = function () {
								c.default.canShowUser ||
									((this.andTextNode.active = !1),
									(this.userNode.active = !1),
									(this.privacyNode.x = this.userNode.x)),
									r.default.getItem(
										s.default.KEY_PRIVACY_AGREE
									)
										? ((this.closeBtn.active = !0),
										  (this.refuseBtn.active = !1),
										  (this.agreeBtn.active = !1),
										  (this.tipsLabel.string =
												'\u60a8\u5df2\u540c\u610f\u4e0a\u8ff0\u534f\u8bae\u548c\u653f\u7b56\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\u3002'))
										: ((this.closeBtn.active = !1),
										  (this.refuseBtn.active = !0),
										  (this.agreeBtn.active = !0)),
									(this.node.zIndex = cc.macro.MAX_ZINDEX);
							}),
							(e.prototype.on_show = function () {}),
							(e.prototype.show_privacy = function (t, e) {
								c.default.Ad().showPrivacy(e);
							}),
							(e.prototype.on_agree = function () {
								r.default.setItem(
									s.default.KEY_PRIVACY_AGREE,
									'true'
								),
									this.onAgree && this.onAgree(),
									this.node.destroy();
							}),
							(e.prototype.on_refuse = function (t, e) {
								1 != (e = parseInt(e))
									? (c.default.canPlayWithRefuse
											? this.onAgree && this.onAgree()
											: (this.onRefuse && this.onRefuse(),
											  null != window.qg
													? window.qg.exitApplication(
															{}
													  )
													: null != window.qq
													? window.qq.exitMiniProgram(
															{}
													  )
													: console.warn(
															'\u4e0d\u9000\u51fa'
													  )),
									  this.node.destroy())
									: (this.erCiNode.active = !0);
							}),
							a([u(cc.Node)], e.prototype, 'userNode', void 0),
							a([u(cc.Node)], e.prototype, 'andTextNode', void 0),
							a([u(cc.Node)], e.prototype, 'privacyNode', void 0),
							a([u(cc.Node)], e.prototype, 'erCiNode', void 0),
							a([u(cc.Node)], e.prototype, 'refuseBtn', void 0),
							a([u(cc.Node)], e.prototype, 'agreeBtn', void 0),
							a([u(cc.Node)], e.prototype, 'closeBtn', void 0),
							a([u(cc.Label)], e.prototype, 'tipsLabel', void 0),
							a([l], e)
						);
					})(cc.Component);
				(n.default = h), cc._RF.pop();
			},
			{
				'./DataStorage': 'DataStorage',
				'./GxConstant': 'GxConstant',
				'./GxGame': 'GxGame'
			}
		],
		Gx_crazypoint: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '91aa7v0RZBCYpXBmVi9Ezz7', 'Gx_crazypoint');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = cc._decorator,
					c = s.ccclass,
					d = s.property,
					l = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.progressNode = null),
								(e.img_xiangPiCa = null),
								(e.btnNode = null),
								(e.boxNode = null),
								(e.time = 0),
								(e.boo = !1),
								(e.videoShowed = !1),
								(e.isBanner = !1),
								(e.listening = !1),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.onLoad = function () {
								var t = cc.winSize;
								t.width > t.height &&
									(this.btnNode.setPosition(
										cc.v2(403.429, -189)
									),
									this.boxNode.setPosition(
										cc.v2(-310.119, -52)
									)),
									(this.btnNode.opacity = 255),
									(this.boxNode.opacity = 255),
									(this.boo = !1),
									(this.time = 0);
							}),
							(e.prototype.start = function () {
								var t = this;
								r.default.Ad().hideBanner(),
									this.schedule(function () {
										t.boo ||
											((t.time -= 5),
											t.time,
											t.time <= 0 && (t.time = 0));
									}, 0.4);
							}),
							(e.prototype.show = function (t, e, n, o) {
								void 0 === o && (o = !1),
									(this.onShow = t),
									(this.onClose = e),
									(this.onGet = n),
									(this.isBanner = o),
									this.onShow && this.onShow(),
									r.default.Ad().hideBanner();
							}),
							(e.prototype.gameHide = function () {
								cc.log('\u6e38\u620f\u8fdb\u5165\u540e\u53f0');
							}),
							(e.prototype.gameShow = function () {
								cc.log('\u91cd\u65b0\u8fd4\u56de\u6e38\u620f'),
									cc.director.emit('dest');
							}),
							(e.prototype.onDest = function () {
								this.node.destroy();
							}),
							(e.prototype.onDestroy = function () {
								cc.director.off('dest', this.onDest, this),
									cc.game.off(
										cc.game.EVENT_HIDE,
										this.gameHide,
										this
									),
									cc.game.off(
										cc.game.EVENT_SHOW,
										this.gameShow,
										this
									),
									this.onClose && this.onClose(),
									r.default.Ad().hideBanner();
							}),
							(e.prototype.update = function () {
								(this.progressNode.progress = this.time / 100),
									(this.img_xiangPiCa.scale =
										0.6 + (this.time / 100) * 0.6);
							}),
							(e.prototype.touchHandler = function () {
								var t = this;
								this.boo ||
									((this.time += 5),
									this.time >= 100
										? (console.log(
												'time\u4e00\u767e\u4e0b'
										  ),
										  (this.boo = !0),
										  (this.time = 100),
										  console.log(
												'\u5173\u95ed\u72c2\u70b9'
										  ),
										  this.node.destroy())
										: this.time >= 25 &&
										  !this.videoShowed &&
										  ((this.videoShowed = !0),
										  this.listening ||
												((this.listening = !0),
												cc.director.on(
													'dest',
													this.onDest,
													this
												),
												cc.game.on(
													cc.game.EVENT_HIDE,
													this.gameHide,
													this
												),
												cc.game.on(
													cc.game.EVENT_SHOW,
													this.gameShow,
													this
												)),
										  this.isBanner
												? (r.default.Ad().showBanner(
														function () {
															console.log(
																'wudian banner\u663e\u793a\u6210\u529f'
															);
														},
														function () {
															console.log(
																'wudian banner\u663e\u793a\u5931\u8d25'
															);
														}
												  ),
												  setTimeout(function () {
														r.default
															.Ad()
															.hideBanner(),
															(t.videoShowed =
																!1);
												  }, 3e3))
												: r.default
														.Ad()
														.showVideo(function (
															e
														) {
															t.onGet &&
																t.onGet(e);
														},
														'crazyPoint')));
							}),
							a(
								[d(cc.ProgressBar)],
								e.prototype,
								'progressNode',
								void 0
							),
							a(
								[d(cc.Node)],
								e.prototype,
								'img_xiangPiCa',
								void 0
							),
							a([d(cc.Node)], e.prototype, 'btnNode', void 0),
							a([d(cc.Node)], e.prototype, 'boxNode', void 0),
							a([c], e)
						);
					})(cc.Component);
				(n.default = l), cc._RF.pop();
			},
			{ './GxGame': 'GxGame' }
		],
		Gx_gameBox: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'd02a7aveOtNRawomIfkOdYj', 'Gx_gameBox');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxConstant'),
					c = t('./GxUtils'),
					d = t('./GxEnum'),
					l = cc._decorator,
					u = l.ccclass,
					h = l.property,
					p = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.boxNode = null),
								(e.zaiLaiSanGe = null),
								(e.key = 3),
								(e.openBoxNum = 0),
								(e.openBoxArr = []),
								(e.canClick = !1),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.onLoad = function () {
								Math.random() < 0.5 && (this.key = 2);
								var t = cc.winSize;
								t.width > t.height &&
									(console.log('\u6a2a\u5c4f'),
									(this.node.scale = 0.8));
							}),
							(e.prototype.start = function () {
								this.initBox();
							}),
							(e.prototype.show = function (t, e, n) {
								var o = this;
								(this.onShow = t),
									(this.onClose = e),
									(this.onGet = n),
									this.onShow && this.onShow(),
									this.scheduleOnce(function () {
										o.canClick = !0;
									}, 1.5);
							}),
							(e.prototype.initBox = function () {
								for (
									var t =
											this.boxNode.getChildByName(
												'content'
											),
										e = 0;
									e < t.children.length;
									e++
								)
									(t.children[e].children[0].active = !1),
										(t.children[e].children[1].active = !1);
							}),
							(e.prototype.onDestroy = function () {
								if (
									(this.onClose && this.onClose(),
									(s.default.IS_OPPO_GAME ||
										s.default.IS_VIVO_GAME) &&
										r.default.getLabel('switch'))
								) {
									var t = r.default.getValue('gailv');
									Math.round(99 * Math.random() + 1) < t &&
										r.default
											.Ad()
											.showVideo(function () {});
								}
							}),
							(e.prototype.onCallBack = function (t, e) {
								var n = this;
								if (this.canClick)
									switch (e) {
										case '\u5b9d\u7bb1':
											this.openBox(t);
											break;
										case '\u7ee7\u7eed\u6e38\u620f':
											this.node.destroy();
											break;
										case '\u518d\u5f00\u4e09\u4e2a':
											r.default
												.Ad()
												.showVideo(function (t) {
													if (t) {
														n.key += 3;
														for (
															var e =
																	n.boxNode.getChildByName(
																		'content'
																	),
																o = 0;
															o <
															e.children.length;
															o++
														)
															e.children[
																o
															].children[1].active =
																!1;
														n.openBoxNum >= 7 &&
															(n.zaiLaiSanGe.active =
																!1);
													}
												}, 'gameBoxOpen3');
									}
							}),
							(e.prototype.openBox = function (t) {
								var e = this,
									n = function () {
										e.openBoxNum++,
											1 == e.openBoxNum &&
												(s.default.IS_QQ_GAME ||
													(s.default
														.IS_ANDROID_NATIVE &&
														c.default.getNativePlatform() ==
															d.PLATFORM.G233 &&
														r.default
															.Ad()
															.showInterstitial(
																function () {},
																function () {}
															)));
										var n = Math.floor(
											50 * Math.random() + 70
										);
										(t.target.children[0]
											.getChildByName('coin')
											.getComponent(cc.Label).string =
											'' + n),
											e.onGet && e.onGet(n),
											(t.target.children[0].active = !0),
											e.openBoxArr.push(
												t.target._localZOrder - 1
											),
											e.key <= 0 && e.showVideoIcon(),
											e.openBoxNum >= 7 &&
												(e.zaiLaiSanGe.active = !1);
									};
								this.key > 0
									? (this.key--, n())
									: (console.log(
											'\u8bf7\u770b\u89c6\u9891\u8865\u5145\u94a5\u5319'
									  ),
									  r.default.Ad().showVideo(function (t) {
											t && n();
									  }, 'gameBoxKey'));
							}),
							(e.prototype.showVideoIcon = function () {
								for (
									var t =
											this.boxNode.getChildByName(
												'content'
											),
										e = 0;
									e < t.children.length;
									e++
								) {
									for (
										var n = !1, o = 0;
										o < this.openBoxArr.length;
										o++
									) {
										if (e == this.openBoxArr[o]) {
											n = !1;
											break;
										}
										n = !0;
									}
									t.children[e].children[1].active = !!n;
								}
							}),
							a([h(cc.Node)], e.prototype, 'boxNode', void 0),
							a([h(cc.Node)], e.prototype, 'zaiLaiSanGe', void 0),
							a([u], e)
						);
					})(cc.Component);
				(n.default = p), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxUtils': 'GxUtils'
			}
		],
		Gx_privacy: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'b68ddJ2WkFEw6lammFeqI6/', 'Gx_privacy');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxEnum'),
					s = t('./ResUtil'),
					c = t('./GxGame'),
					d = t('./GxAdParams'),
					l = t('./GxConstant'),
					u = cc._decorator,
					h = u.ccclass,
					p = u.property,
					f = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.bg = null),
								(e.textArea = null),
								(e.toggleContainer = null),
								(e.userGroup = null),
								(e.privacyGroup = null),
								(e.loading = null),
								(e.titleSp = null),
								(e.titleSpUser = null),
								(e.titleSpPrivacy = null),
								(e.tabType = null),
								(e.privacyCon = null),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.show = function (t) {
								void 0 === t && (t = r.privacy_type.user),
									this.node.parent ||
										((this.tabType = t),
										c.default.canShowUser
											? (this.toggleContainer.active = !0)
											: (this.toggleContainer.active =
													!1),
										cc.director
											.getScene()
											.addChild(this.node),
										this.on_show());
							}),
							(e.prototype.hide = function () {
								this.node.destroy();
							}),
							(e.prototype.start = function () {
								var t = this;
								(this.node.zIndex = cc.macro.MAX_ZINDEX),
									(this.loading.active = !0),
									cc
										.tween(this.loading)
										.repeatForever(
											cc
												.tween()
												.to(1.5, { angle: -360 })
												.to(0.001, { angle: 0 })
										)
										.start(),
									s.default.loadJsonAsset(
										'gx/cfg/privacy',
										function (e, n) {
											(t.loading.active = !1),
												e ||
													((t.privacyCon = n.json),
													t.change_tab(t.tabType));
										}
									);
							}),
							(e.prototype.on_show = function () {
								this.set_frame_roi(),
									this.change_tab(this.tabType);
							}),
							(e.prototype.set_frame_roi = function () {
								cc.winSize.width <= cc.winSize.height
									? ((this.bg.width = 521),
									  (this.bg.height = 717))
									: ((this.bg.width = 717),
									  (this.bg.height = 521));
							}),
							(e.prototype.on_change_tab = function (t, e) {
								this.change_tab(e);
							}),
							(e.prototype.change_tab = function (t) {
								if (
									((this.tabType = t),
									c.default.canShowUser || (t = 'privacy'),
									'user' == t
										? ((this.userGroup.getChildByName(
												'checkmark'
										  ).active = !0),
										  (this.privacyGroup.getChildByName(
												'checkmark'
										  ).active = !1),
										  (this.titleSp.spriteFrame =
												this.titleSpUser))
										: 'privacy' == t &&
										  ((this.userGroup.getChildByName(
												'checkmark'
										  ).active = !1),
										  (this.privacyGroup.getChildByName(
												'checkmark'
										  ).active = !0),
										  (this.titleSp.spriteFrame =
												this.titleSpPrivacy)),
									this.privacyCon)
								) {
									var e,
										n = this.textArea.content.getComponent(
											cc.Label
										);
									this.privacyCon.hasOwnProperty(this.tabType)
										? ((e =
												l.default.IS_MI_GAME &&
												'privacy' == this.tabType
													? this.privacyCon[
															this.tabType + '2'
													  ]
															.replace(
																/companyName/g,
																d.AdParams
																	.ysCompanyName
															)
															.replace(
																/mail/g,
																d.AdParams
																	.ysMail
															)
															.replace(
																/gameName/g,
																d.AdParams.mi
																	.gameName
															)
															.replace(
																/address/g,
																d.AdParams
																	.ysAddress
																	.length > 0
																	? '' +
																			d
																				.AdParams
																				.ysAddress
																	: ''
															)
													: this.privacyCon[
															this.tabType
													  ]
															.replace(
																/companyName/g,
																d.AdParams
																	.ysCompanyName
															)
															.replace(
																/mail/g,
																d.AdParams
																	.ysMail
															)
															.replace(
																/gameName/g,
																d.AdParams
																	.ysMail
															)
															.replace(
																/address/g,
																d.AdParams
																	.ysAddress
																	.length > 0
																	? '' +
																			d
																				.AdParams
																				.ysAddress
																	: ''
															)),
										  (n.string = e))
										: (n.string = ''),
										this.textArea.scrollTo(cc.v2(0, 1), 0);
								}
							}),
							(e.prototype.onDisable = function () {}),
							a([p(cc.Node)], e.prototype, 'bg', void 0),
							a(
								[p(cc.ScrollView)],
								e.prototype,
								'textArea',
								void 0
							),
							a(
								[p(cc.Node)],
								e.prototype,
								'toggleContainer',
								void 0
							),
							a([p(cc.Node)], e.prototype, 'userGroup', void 0),
							a(
								[p(cc.Node)],
								e.prototype,
								'privacyGroup',
								void 0
							),
							a([p(cc.Node)], e.prototype, 'loading', void 0),
							a([p(cc.Sprite)], e.prototype, 'titleSp', void 0),
							a(
								[p(cc.SpriteFrame)],
								e.prototype,
								'titleSpUser',
								void 0
							),
							a(
								[p(cc.SpriteFrame)],
								e.prototype,
								'titleSpPrivacy',
								void 0
							),
							a([h], e)
						);
					})(cc.Component);
				(n.default = f), cc._RF.pop();
			},
			{
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		Gx_shareFriend: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '34b80UHcQhAYrhAn3BHJ47E', 'Gx_shareFriend');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxConstant'),
					c = t('./OpenDataUtil'),
					d = cc._decorator,
					l = d.ccclass,
					u = d.property,
					h = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.texture = new cc.Texture2D()),
								(e.shareCallback = null),
								(e.shareSuccess = !1),
								(e.sprite = null),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.onLoad = function () {}),
							(e.prototype.start = function () {
								var t = this;
								if (
									s.default.IS_QQ_GAME ||
									s.default.IS_WECHAT_GAME
								) {
									var e = this.getShareCanvas();
									(e.width = this.sprite.node.width),
										(e.height = this.sprite.node.height);
									var n = {};
									(n.width =
										this.sprite.node.getContentSize().width),
										(n.height =
											this.sprite.node.getContentSize().height);
									var o = wx.getSystemInfoSync();
									console.log('phoneInfo:', o);
									var i = cc.winSize,
										a = o.screenWidth / i.width,
										d = o.screenHeight / i.height,
										l = {
											x:
												(i.width / 2 -
													(this.sprite.node.width /
														2 -
														this.sprite.node.x)) *
												a,
											y:
												(i.height / 2 -
													this.sprite.node.height /
														2 -
													this.sprite.node.y) *
												d
										};
									c.default._postMessage('InitContext', {
										bound: n,
										spacingY: 5,
										scaleX: a,
										scaleY: d,
										startPos: l
									}),
										c.default.showShareFriend(),
										r.default
											.Ad()
											.setOpenDataShareCallback(function (
												e
											) {
												t.shareSuccess
													? console.log(
															'\u5df2\u7ecf\u5206\u4eab\u6210\u529f\u8fc7\u4e86'
													  )
													: (t.shareSuccess = e),
													e && t.clickOnClose();
											});
								} else this.clickOnClose();
							}),
							(e.prototype.show = function () {
								cc.director.getScene().addChild(this.node),
									this.on_show();
							}),
							(e.prototype.on_show = function () {}),
							(e.prototype.setShareCallback = function (t) {
								this.shareCallback = t;
							}),
							(e.prototype.clickOnRefresh = function () {
								c.default.refreshShareFriend();
							}),
							(e.prototype.clickOnClose = function () {
								c.default.closeShareFriend(),
									this.node.destroy();
							}),
							(e.prototype.onDestroy = function () {
								console.log(
									'\u9500\u6bc1 \u5206\u4eab\u7ed3\u679c\uff1a' +
										this.shareSuccess
								),
									this.shareCallback &&
										this.shareCallback(this.shareSuccess);
							}),
							(e.prototype.clickOnShare = function () {}),
							(e.prototype.update = function () {
								this.render();
							}),
							(e.prototype.render = function () {
								var t = this.getShareCanvas();
								this.texture.initWithElement(t),
									this.texture.handleLoadedTexture(),
									(this.sprite.spriteFrame =
										new cc.SpriteFrame(this.texture));
							}),
							(e.prototype.getShareCanvas = function () {
								var t = wx.getOpenDataContext();
								if (t) return t.canvas;
							}),
							a([u(cc.Sprite)], e.prototype, 'sprite', void 0),
							a([l], e)
						);
					})(cc.Component);
				(n.default = h), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxGame': 'GxGame',
				'./OpenDataUtil': 'OpenDataUtil'
			}
		],
		Gx_submsg: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '6f4bbR7JI1GJoPX7ChRriIm', 'Gx_submsg');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxLog'),
					c = t('./GxConstant'),
					d = cc._decorator,
					l = d.ccclass;
				d.property;
				var u = (function (t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						i(e, t),
						(e.prototype.onLoad = function () {}),
						(e.prototype.start = function () {
							(this.canClose = !0),
								c.default.IS_QQ_GAME ||
									c.default.IS_WECHAT_GAME ||
									this.clickOnClose();
						}),
						(e.prototype.show = function () {
							cc.director.getScene().addChild(this.node),
								this.on_show();
						}),
						(e.prototype.on_show = function () {}),
						(e.prototype.clickOnClose = function () {
							this.node.destroy();
						}),
						(e.prototype.clickOnSub = function () {
							var t = this,
								e = r.default.Ad().waitSubIds;
							c.default.IS_QQ_GAME
								? qq.subscribeAppMsg({
										tmplIds: e,
										subscribe: !0,
										success: function (n) {
											s.default.i(
												'\u8c03\u7528\u8ba2\u9605\u8fd4\u56de\u7ed3\u679c'
											),
												s.default.i(n);
											for (var o = 0; o < e.length; o++) {
												var i = e[o];
												'accept' == n[i]
													? (r.default
															.Ad()
															.submsg(
																i,
																function () {}
															),
													  r.default
															.Ad()
															.createToast(
																'\u8ba2\u9605\u6210\u529f'
															),
													  t.canClose &&
															((t.canClose = !1),
															t.clickOnClose()))
													: (s.default.i(
															i +
																'\u8ba2\u9605\u5931\u8d25\uff1a' +
																n[i]
													  ),
													  r.default
															.Ad()
															.createToast(
																'\u8ba2\u9605\u5931\u8d25'
															));
											}
											setTimeout(function () {
												r.default.Ad().initSubmsg();
											}, 1e3);
										},
										fail: function (t) {
											console.log(
												'----subscribeAppMsg----fail',
												t
											),
												s.default.e(
													'\u8ba2\u9605\u5931\u8d25'
												),
												s.default.e(t),
												r.default
													.Ad()
													.createToast(
														'\u8ba2\u9605\u5931\u8d25'
													);
										}
								  })
								: c.default.IS_WECHAT_GAME
								? wx.requestSubscribeMessage({
										tmplIds: e,
										success: function (n) {
											s.default.i(
												'\u8c03\u7528\u8ba2\u9605\u8fd4\u56de\u7ed3\u679c'
											),
												s.default.i(n);
											for (var o = 0; o < e.length; o++) {
												var i = e[o];
												'accept' == n[i]
													? (r.default
															.Ad()
															.submsg(
																i,
																function () {}
															),
													  r.default
															.Ad()
															.createToast(
																'\u8ba2\u9605\u6210\u529f'
															),
													  t.canClose &&
															((t.canClose = !1),
															t.clickOnClose()))
													: (s.default.i(
															i +
																'\u8ba2\u9605\u5931\u8d25\uff1a' +
																n[i]
													  ),
													  r.default
															.Ad()
															.createToast(
																'\u8ba2\u9605\u5931\u8d25'
															));
											}
											setTimeout(function () {
												r.default.Ad().initSubmsg();
											}, 1e3);
										},
										fail: function (t) {
											console.log(
												'----subscribeAppMsg----fail',
												t
											),
												s.default.e(
													'\u8ba2\u9605\u5931\u8d25'
												),
												s.default.e(t),
												r.default
													.Ad()
													.createToast(
														'\u8ba2\u9605\u5931\u8d25'
													);
										}
								  })
								: this.clickOnClose();
						}),
						a([l], e)
					);
				})(cc.Component);
				(n.default = u), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxGame': 'GxGame',
				'./GxLog': 'GxLog'
			}
		],
		Gx_toast: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'b0d69wj/C9KP6AKylCwuRGM', 'Gx_toast');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = cc._decorator,
					s = r.ccclass,
					c = r.property,
					d = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (e.label = null), (e.tips_box = null), e;
						}
						return (
							i(e, t),
							(e.prototype.show = function (t) {
								if (this.node && !this.node.parent) {
									var e = cc.macro.MAX_ZINDEX;
									(this.node.parent = cc.director.getScene()),
										(this.node.zIndex = e),
										this.on_show(t);
								}
							}),
							(e.prototype.on_hide = function () {}),
							(e.prototype.on_show = function (t) {
								this.show_tips(t);
							}),
							(e.prototype.show_tips = function (t) {
								var e = this;
								(this.label.string = t),
									(this.tips_tween = null),
									(this.tips_tween = cc
										.moveBy(1.5, cc.v2(0, 150))
										.easing(cc.easeSineIn()));
								var n = cc.callFunc(function () {
									cc.isValid(e) && e.hide();
								});
								this.tips_box.runAction(
									cc.sequence(this.tips_tween, n)
								);
							}),
							(e.prototype.set_default_pos = function () {}),
							(e.prototype.set_style_pos = function () {}),
							(e.prototype.hide = function () {
								this.node &&
									this.node.parent &&
									((this.tips_box.y = 0),
									this.node.parent.removeChild(this.node),
									this.on_hide());
							}),
							a([c(cc.Label)], e.prototype, 'label', void 0),
							a([c(cc.Node)], e.prototype, 'tips_box', void 0),
							a([s], e)
						);
					})(cc.Component);
				(n.default = d), cc._RF.pop();
			},
			{}
		],
		H54399Adapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '526eeIczitOepWAC6G0Ku1z', 'H54399Adapter');
				var i,
					a =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r,
					s = t('./GxGame'),
					c = t('./GxUtils'),
					d = t('./BaseAdapter');
				((r = i || (i = {}))[(r.ERROR = -1)] = 'ERROR'),
					(r[(r.SUCC = 1)] = 'SUCC'),
					(r[(r.SHOW = 2)] = 'SHOW'),
					(r[(r.CLOSE = 3)] = 'CLOSE');
				var l = (function (t) {
					function e() {
						var e =
							(null !== t && t.apply(this, arguments)) || this;
						return (
							(e.closeInterTime = 0),
							(e.closeNativeTime = 0),
							(e.closeNormalBannerTime = 0),
							(e.showLimmitTime = 0),
							(e.showVideoTime = 0),
							e
						);
					}
					return (
						a(e, t),
						(e.getInstance = function () {
							return (
								null == this.instance &&
									(this.instance = new e()),
								this.instance
							);
						}),
						(e.prototype.initAd = function () {
							this.isInitAd ||
								((this.isInitAd = !0),
								(this.isGameCd =
									s.default.adConfig.adCdTime > 0),
								t.prototype.initAd.call(this),
								this.initBanner(),
								this.initNativeAd());
						}),
						(e.prototype.getNativePlatform = function () {
							return '';
						}),
						(e.prototype.showNormalBanner = function () {}),
						(e.prototype.hideNormalBanner = function () {}),
						(e.prototype.destroyNormalBanner = function () {
							this.hideNormalBanner();
						}),
						(e.prototype.initBanner = function () {
							t.prototype.initBanner.call(this);
						}),
						(e.prototype.showBanner = function () {
							this.showNormalBanner();
						}),
						(e.prototype.hideBanner = function () {
							t.prototype.hideBanner.call(this),
								(this.isNeedShowBanner = !1);
						}),
						(e.prototype.showVideo = function (t, e) {
							if (
								(void 0 === e && (e = ''),
								!(this.get_time() - this.showVideoTime < 500))
							) {
								this.showVideoTime = this.get_time();
								var n = this;
								window.h5api.playAd(function (e) {
									console.log('\u4ee3\u7801:' + e.code),
										1e4 === e.code
											? (cc.audioEngine.setEffectsVolume(
													0
											  ),
											  cc.audioEngine.setMusicVolume(0),
											  cc.director.pause(),
											  console.log(
													'\u5f00\u59cb\u64ad\u653e'
											  ))
											: 10001 === e.code
											? (console.log(
													'\u64ad\u653e\u7ed3\u675f'
											  ),
											  cc.director.resume(),
											  cc.audioEngine.setEffectsVolume(
													1
											  ),
											  cc.audioEngine.setMusicVolume(1),
											  t && t(!0))
											: (cc.director.resume(),
											  cc.audioEngine.setEffectsVolume(
													1
											  ),
											  cc.audioEngine.setMusicVolume(1),
											  console.log(
													'\u5e7f\u544a\u5f02\u5e38'
											  ),
											  window.h5api.canPlayAd(function (
													t
											  ) {
													t.remain <= 0 ||
														n.createToast(
															'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
														);
											  }),
											  t && t(!1));
								});
							}
						}),
						(e.prototype.destroyVideo = function () {}),
						(e.prototype.showInterstitial = function () {}),
						(e.prototype.destroyNormalInter = function () {}),
						(e.prototype.showInterVideo = function () {
							console.log(
								'[gx_game]showInterVideo \u4e0d\u80fd\u7528'
							);
						}),
						(e.prototype.destroyInterVideo = function () {}),
						(e.prototype.create_ad = function (t) {
							var e = this;
							return new Promise(function (n) {
								c.default.callMethod(
									'createNativeAd',
									t.toString(),
									function (t) {
										if (
											(console.log(
												'[gx_game]native data load succ:' +
													JSON.stringify(t)
											),
											t == i.ERROR)
										);
										else
											try {
												e.add_native_data(t);
											} catch (n) {
												console.error(n);
											}
									}
								),
									setTimeout(n, 100);
							});
						}),
						(e.prototype.initNativeAd = function () {}),
						(e.prototype.showInterstitialNative = function (
							t,
							e,
							n,
							o
						) {
							console.log(
								'[gx_game]showInterstitialNative \u4e0d\u80fd\u7528'
							),
								o && o();
						}),
						(e.prototype.hideInterstitialNative = function () {
							t.prototype.hideInterstitialNative.call(this);
						}),
						(e.prototype.showNativeInterstitial = function (
							t,
							e,
							n
						) {
							void 0 === n && (n = 1),
								this.showInterstitial(t, e);
						}),
						(e.prototype.supportGameBox = function () {
							return !1;
						}),
						e
					);
				})(d.default);
				(n.default = l), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./GxGame': 'GxGame',
				'./GxUtils': 'GxUtils'
			}
		],
		HwAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '58e3ddPO6tNfImD+U/IT1pD', 'HwAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxAudioUtil'),
					s = t('./GxGame'),
					c = t('./GxTimer'),
					d = t('./GxUtils'),
					l = t('./BaseAdapter'),
					u = t('./GxEnum'),
					h = t('./GxAdParams'),
					p = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.customBanner = null),
								(e.customInter = null),
								(e.portalAdTimer = null),
								(e.videoShowing = !1),
								(e.canShowBanner = !0),
								(e.firstShowInter = !0),
								(e.interCount = 0),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								this.isInitAd ||
									((this.isInitAd = !0),
									(s.default.adConfig.useNative = !0),
									t.prototype.initAd.call(this),
									cc.game.on(
										cc.game.EVENT_HIDE,
										function () {
											console.log(
												'\u6e38\u620f\u8fdb\u5165\u540e\u53f0'
											),
												cc.director.emit(
													'\u6e05\u9664\u539f\u751f'
												);
										},
										this
									),
									cc.game.on(
										cc.game.EVENT_SHOW,
										function () {
											console.log(
												'\u91cd\u65b0\u8fd4\u56de\u6e38\u620f'
											),
												cc.director.emit(
													'\u6e05\u9664\u539f\u751f'
												);
										},
										this
									));
							}),
							(e.prototype.initNormalBanner = function () {
								var t = this;
								if (
									(console.log('banner1'),
									!(h.AdParams.hw.banner.length <= 0))
								) {
									var e = qg.getSystemInfoSync();
									e.screenWidth;
									var n = e.screenHeight;
									console.log('banner2'),
										this.destroyNormalBanner(),
										console.log('banner3'),
										(this.bannerAd = qg.createBannerAd({
											adUnitId: h.AdParams.hw.banner,
											adIntervals: 60,
											style: {
												top: n - 57,
												left: 0,
												height: 57,
												width: 360
											}
										})),
										console.log('banner4'),
										this.bannerAd.onError(function (e) {
											console.error(
												'[gx_game]normal banner error: ',
												JSON.stringify(e)
											),
												t.destroyNormalBanner();
										});
								}
							}),
							(e.prototype.showNormalBanner = function () {
								var t = this;
								this.logi('normal banner'),
									null == this.bannerAd &&
										this.initNormalBanner(),
									null != this.bannerAd
										? (this.logi('banner show'),
										  this.bannerAd
												.show()
												.then(function () {
													t.logi(
														' normal banner show success'
													);
												})
												.catch(function (e) {
													t.logi(
														' normal banner show error',
														e
													);
												}))
										: this.logi(
												'banner null \u663e\u793a\u5931\u8d25'
										  );
							}),
							(e.prototype.hideNormalBanner = function () {
								this.bannerAd &&
									(this.bannerAd.hide(),
									this.bannerAd.destroy()),
									(this.bannerAd = null);
							}),
							(e.prototype.destroyNormalBanner = function () {
								this.bannerAd && this.bannerAd.destroy();
							}),
							(e.prototype.initBanner = function () {
								t.prototype.initBanner.call(this);
							}),
							(e.prototype.showBanner = function () {
								var t = this;
								this.canShowBanner
									? ((this.canShowBanner = !1),
									  setTimeout(function () {
											t.canShowBanner = !0;
									  }, 3e4),
									  this.hideBanner(),
									  (this.bannerDelayTimer = c.default.once(
											function () {
												t.logi('banner show');
												var e = t.getLocalNativeData(
													u.ad_native_type.banner
												);
												if (
													(s.default.adConfig
														.bannerUpdateTime > 0 &&
														(t.logi(
															'banner refresh'
														),
														null == t.bannerTimer &&
															(t.bannerTimer =
																new c.default()),
														t.bannerTimer &&
															t.bannerTimer.once(
																function () {
																	t.showBanner();
																},
																1e3 *
																	s.default
																		.adConfig
																		.bannerUpdateTime
															)),
													null == e || void 0 === e)
												)
													t.showNormalBanner();
												else {
													var n = cc.instantiate(
														d.default.getRes(
															'gx/prefab/ad/native_banner',
															cc.Prefab
														)
													);
													(t.bannerNode =
														n.getComponent(
															'gx_native_banner'
														)),
														t.bannerNode.show(
															e,
															function () {},
															function () {
																t.bannerTimer &&
																	t.bannerTimer.clear();
															}
														);
												}
											},
											1e3
									  )))
									: this.logi("banner can't show");
							}),
							(e.prototype.hideBanner = function () {
								this.logi('hide banner'),
									t.prototype.hideBanner.call(this),
									this.hideNormalBanner(),
									this.destroyCustomBanner();
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								null == h.AdParams.hw.video ||
									h.AdParams.hw.video.length <= 0 ||
									(this.destroyVideo(),
									(this.videoAd = qg.createRewardedVideoAd({
										adUnitId: h.AdParams.hw.video
									})),
									this.videoAd.onLoad(function () {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f'
										),
											t.videoAd
												.show()
												.then(function () {
													r.default.setMusicVolume(0),
														r.default.setSoundVolume(
															0
														);
												})
												.catch(function () {
													t.createToast(
														'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
													),
														(t.videoShowing = !1),
														t.videocallback &&
															t.videocallback(!1);
												});
									}),
									this.videoAd.onError(function () {
										t.destroyVideo(),
											(t.videoShowing = !1),
											t.videocallback &&
												t.videocallback(!1);
									}),
									this.videoAd.onClose(function (e) {
										r.default.setMusicVolume(1),
											r.default.setSoundVolume(1),
											e && e.isEnded
												? (console.log(
														'\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
												  ),
												  t.videocallback &&
														t.videocallback(!0))
												: t.videocallback &&
												  t.videocallback(!1),
											(t.videoShowing = !1),
											t.destroyVideo();
									}),
									this.videoAd.load());
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								void 0 === e && (e = ''),
									this.videoShowing
										? this.logi('video showing')
										: ((this.videoShowing = !0),
										  setTimeout(function () {
												n.videoShowing = !1;
										  }, 500),
										  (this.videocallback = t),
										  this.initVideo());
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd &&
									(this.videoAd.offLoad(),
									this.videoAd.offError(),
									this.videoAd.offClose()),
									(this.videoAd = null);
							}),
							(e.prototype.showInterstitial = function (t, e) {
								var n = this;
								if (
									null == h.AdParams.hw.inter ||
									h.AdParams.hw.inter.length <= 0
								)
									return e && e();
								this.destroyNormalInter(),
									this.logi('showInterstitial'),
									(this.interAd = qg.createInterstitialAd({
										adUnitId: h.AdParams.hw.inter
									})),
									this.interAd.onLoad(function () {
										n.logi(
											'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d'
										),
											n.hideBanner(),
											(n.interShowTime = n.get_time()),
											n.interAd.show(),
											t && t();
									}),
									this.interAd.onError(function () {
										n.logi(
											'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25'
										),
											e && e();
									}),
									this.interAd.onClose(function () {
										e && e();
									}),
									this.interAd
										.load()
										.then(function () {
											n.logi('showInterstitial show');
										})
										.catch(function (t) {
											console.log(
												'\u666e\u901a\u63d2\u5c4f\u5c55\u793a\u5931\u8d25' +
													JSON.stringify(t)
											),
												e && e();
										});
							}),
							(e.prototype.destroyNormalInter = function () {
								this.interAd &&
									(this.interAd.offLoad(),
									this.interAd.offError()),
									(this.interAd = null);
							}),
							(e.prototype.create_ad = function (t) {
								var e = this;
								return new Promise(function (n) {
									var o = '';
									if (
										(t == u.ad_native_type.banner
											? (o = h.AdParams.hw.native_banner)
											: t == u.ad_native_type.inter1
											? (o = h.AdParams.hw.native1)
											: t == u.ad_native_type.inter2 &&
											  (o = h.AdParams.hw.native2),
										e.logi(t, 'posId = ', o),
										'' == o ||
											void 0 === o ||
											null == o ||
											e.is_limit_native_length(t))
									)
										return e.logi('native null'), n(null);
									var i = qg.createNativeAd({ adUnitId: o });
									i.onLoad(function n(o) {
										if (
											(console.log(
												'[gx_game]native data load:'
											),
											o && o.adList)
										) {
											var a = o.adList.pop();
											(a.ad = i),
												(a.type = t),
												e.add_native_data(a),
												console.log(
													'[gx_game]native data load succ:' +
														JSON.stringify(a)
												),
												i.offLoad(n);
										}
									}),
										i.onError(function t(e) {
											console.log(
												'[gx_game]native data error: ' +
													JSON.stringify(e),
												'color: red'
											),
												i.offError(t);
										}),
										i.load(),
										setTimeout(n, 1500);
								});
							}),
							(e.prototype.initNativeAd = function () {
								var t = this;
								this.create_ad(u.ad_native_type.banner)
									.then(function () {
										return t.create_ad(
											u.ad_native_type.native_icon
										);
									})
									.then(function () {
										return t.create_ad(
											u.ad_native_type.inter1
										);
									})
									.then(function () {
										return t.create_ad(
											u.ad_native_type.inter2
										);
									})
									.then(function () {
										t.loop_get_native_data();
									});
							}),
							(e.prototype.showInterstitialNative = function (
								t,
								e,
								n,
								o
							) {
								var i = this;
								this.hideInterstitialNative();
								var a = this.getLocalNativeData(
									u.ad_native_type.inter1
								);
								if (null == a || void 0 === a) o && o();
								else {
									var r = cc.instantiate(
										d.default.getRes(
											'gx/prefab/ad/native_inner_interstitial',
											cc.Prefab
										)
									);
									(this.innerInter = r.getComponent(
										'gx_native_inner_interstitial'
									)),
										this.innerInter &&
											this.innerInter.show(
												t,
												a,
												e,
												function () {
													i.hideBanner(), n && n();
												},
												o
											);
								}
								this.hideInterstitialNative();
							}),
							(e.prototype.hideInterstitialNative = function () {
								t.prototype.hideInterstitialNative.call(this);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								void 0 === n && (n = 1),
									this.firstShowInter,
									(this.firstShowInter = !1),
									setTimeout(
										function () {
											if (
												(o.logi(
													'showNativeInterstitial:' +
														o.interCount
												),
												o.hideNativeInterstitial(),
												o.interCount % 2 == 0)
											)
												o.interCount++,
													o.showInterstitial(t, e);
											else {
												o.interCount++;
												var n = qg.createNativeAd({
													adUnitId:
														h.AdParams.hw.native1
												});
												n.onLoad(function i(a) {
													if (
														(console.log(
															'[gx_game]native data load:'
														),
														a && a.adList)
													) {
														var r = a.adList.pop();
														(r.ad = n),
															(r.type =
																u.ad_native_type.inter1),
															o.add_native_data(
																r
															),
															console.log(
																'[gx_game]native data load succ:' +
																	JSON.stringify(
																		r
																	)
															),
															n.offLoad(i);
														var s =
															o.getLocalNativeData(
																u.ad_native_type
																	.inter1
															);
														if (
															null == s ||
															void 0 === s
														)
															o.logi(
																'native data null showInter'
															),
																o.showInterstitial(
																	t,
																	e
																);
														else {
															var c =
																cc.instantiate(
																	d.default.getRes(
																		'gx/prefab/ad/native_interstitial',
																		cc.Prefab
																	)
																);
															(o.nativeInter =
																c.getComponent(
																	'gx_native_interstitial'
																)),
																o.nativeInter &&
																	o.nativeInter.show(
																		s,
																		function () {
																			(o.interShowTime =
																				o.get_time()),
																				o.logi(
																					'showNativeInterstitial show'
																				),
																				o.hideBanner(),
																				t &&
																					t();
																		},
																		e
																	);
														}
													} else o.logi('native data null showInter'), o.showInterstitial(t, e);
												}),
													n.onError(function i(a) {
														console.log(
															'[gx_game]native data error: ' +
																JSON.stringify(
																	a
																),
															'color: red'
														),
															n.offError(i),
															o.showInterstitial(
																t,
																e
															);
													}),
													n.load();
											}
										},
										s.default.isShenHe ||
											s.default.inBlockArea
											? 0
											: 1e3 * n
									);
							}),
							(e.prototype.showOtherNativeInterstitial =
								function (t, e, n) {
									void 0 === n && (n = 0),
										s.default.getLabel('switch')
											? this.showNativeInterstitial(
													t,
													e,
													n
											  )
											: (this.logi(
													'\u6807\u7b7e\u6ca1\u5f00'
											  ),
											  e && e());
								}),
							(e.prototype.hideNativeInterstitial = function () {
								t.prototype.hideNativeInterstitial.call(this),
									this.destroyCustomInter();
							}),
							(e.prototype.showNativeIcon = function (t) {
								this.hideNativeIcon();
								var e = u.ad_native_type.native_icon,
									n = h.AdParams.hw.native_icon;
								n == h.AdParams.hw.native1
									? (e = u.ad_native_type.inter1)
									: n == h.AdParams.hw.native2 &&
									  (e = u.ad_native_type.inter2);
								var o = this.getLocalNativeData(e);
								if (null == o || void 0 === o)
									return console.log(
										'[gx_game]showNativeIcon \u6682\u65e0\u5e7f\u544a\u6570\u636e'
									);
								var i = cc.instantiate(
									d.default.getRes(
										'gx/prefab/ad/native_icon',
										cc.Prefab
									)
								);
								(this.nativeIcon =
									i.getComponent('gx_native_icon')),
									this.nativeIcon &&
										this.nativeIcon.show(t, o);
							}),
							(e.prototype.hideNativeIcon = function () {
								t.prototype.hideNativeIcon.call(this);
							}),
							(e.prototype.loop_get_native_data = function () {
								var t =
									this._native_data_cache.length < 5
										? 1e3 * d.default.randomInt(15, 20)
										: 3e4;
								setTimeout(this.initNativeAd.bind(this), t);
							}),
							(e.prototype.initGamePortal = function (
								t,
								e,
								n,
								o,
								i
							) {
								void 0 === n && (n = !0),
									void 0 === o && (o = ''),
									void 0 === i && (i = 300);
							}),
							(e.prototype.showGamePortal = function (
								t,
								e,
								n,
								o,
								i
							) {
								void 0 === n && (n = !0),
									void 0 === o && (o = ''),
									void 0 === i && (i = 300),
									console.log(
										'\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API'
									);
							}),
							(e.prototype.hideGamePortal = function () {
								this.portalAd && this.portalAd.hide(),
									this.portalAdTimer &&
										this.portalAdTimer.clear(),
									(this.portalAdTimer = null);
							}),
							(e.prototype.destroyGamePortal = function () {
								this.portalAd &&
									(this.portalAdTimer &&
										this.portalAdTimer.clear(),
									(this.portalAdTimer = null),
									this.portalAd.destroy(),
									(this.portalAd = null));
							}),
							(e.prototype.showAddDesktop = function (t, e) {
								if (
									!this.addIconNode ||
									void 0 === this.addIconNode ||
									!cc.isValid(this.addIconNode.node, !0)
								) {
									var n = cc.instantiate(
										d.default.getRes(
											'gx/prefab/add_icon',
											cc.Prefab
										)
									);
									(this.addIconNode =
										n.getComponent('Gx_add_icon')),
										this.addIconNode &&
											this.addIconNode.show(e);
								}
							}),
							(e.prototype.hasAddDesktop = function (t, e, n) {
								console.log(
									'\u4e0d\u652f\u6301\u6dfb\u52a0\u684c\u9762'
								),
									n && n();
							}),
							(e.prototype.addDesktop = function (t, e) {
								e && e();
							}),
							(e.prototype.login = function (t, e) {
								if (
									h.AdParams.hw.appId &&
									h.AdParams.hw.appId.length > 0
								) {
									var n = this;
									qg.gameLoginWithReal({
										forceLogin: 1,
										appid: h.AdParams.hw.appId,
										success: function (e) {
											console.log(
												' game login with real success:' +
													JSON.stringify(e)
											),
												t && t(e);
										},
										fail: function (o, i) {
											console.log(
												'game login with real fail:' +
													o +
													', code:' +
													i
											),
												(7004 != i && 2012 != i) ||
													console.log(
														'\u73a9\u5bb6\u53d6\u6d88\u767b\u5f55\uff0c\u8fd4\u56de\u6e38\u620f\u754c\u9762\u8ba9\u73a9\u5bb6\u91cd\u65b0\u767b\u5f55\u3002'
													),
												7021 == i &&
													(console.log(
														'The player has canceled identity verification. Forbid the player from entering the game.'
													),
													this.createToast(
														'\u767b\u5f55\u5931\u8d25\uff1a' +
															i
													));
											var a = new cc.Node();
											(a.addComponent(cc.Label).string =
												'\u91cd\u65b0\u767b\u5f55'),
												a.on(
													cc.Node.EventType
														.TOUCH_START,
													function () {
														a.removeFromParent(!0),
															console.log(
																'\u70b9\u51fb\u767b\u5f55\u4e86'
															),
															n.login(t, e);
													},
													this
												),
												(a.parent = cc.find('Canvas')),
												(a.zIndex =
													cc.macro.MAX_ZINDEX),
												(a.y = -240),
												e && e(i),
												qg.showModal({
													title: '\u63d0\u793a',
													content:
														'\u8bf7\u767b\u5f55\u540e\u4f7f\u7528',
													confirmText: '\u767b\u5f55',
													cancelText:
														'\u9000\u51fa\u6e38\u620f',
													success: function (o) {
														o.confirm
															? (console.log(
																	'\u7528\u6237\u70b9\u51fb\u786e\u5b9a'
															  ),
															  a.removeFromParent(
																	!0
															  ),
															  n.login(t, e))
															: o.cancel &&
															  (console.log(
																	'\u7528\u6237\u70b9\u51fb\u53d6\u6d88'
															  ),
															  qg.exitApplication(
																	{
																		success:
																			function () {
																				console.log(
																					'exitApplication success'
																				);
																			},
																		fail: function () {
																			console.log(
																				'exitApplication fail'
																			);
																		},
																		complete:
																			function () {
																				console.log(
																					'exitApplication complete'
																				);
																			}
																	}
															  ));
													}
												});
										}
									});
								} else
									this.logi('appId \u7a7a'),
										e && e('appId \u7a7a');
							}),
							(e.prototype.showCustomBanner = function () {
								var t = this,
									e = h.AdParams.hw.custom_banner;
								if (
									null == e ||
									void 0 === e ||
									!qg.createCustomAd
								)
									return this.showNormalBanner();
								this.destroyCustomBanner(),
									(this.customBanner = qg.createCustomAd({
										adUnitId: e,
										style: {}
									})),
									this.customBanner
										.show()
										.then(function () {})
										.catch(function (e) {
											console.error(
												'[gx_game] custom banner show error: ' +
													JSON.stringify(e)
											),
												t.destroyCustomBanner(),
												t.showNormalBanner();
										}),
									this.customBanner.onClose(function e() {
										t.customBanner.offClose(e),
											t.destroyCustomBanner();
									});
							}),
							(e.prototype.destroyCustomBanner = function () {
								this.customBanner &&
									this.customBanner.destroy(),
									(this.customBanner = null);
							}),
							(e.prototype.showCustomInter = function (t, e) {
								var n = this;
								if (qg.createCustomAd) {
									var o = h.AdParams.hw.native1;
									if (null == o || void 0 === o)
										return (
											this.showInterstitial(t, e),
											e && e()
										);
									this.destroyCustomInter(),
										(this.customInter = qg.createCustomAd({
											adUnitId: o,
											style: {
												top:
													(s.default.screenHeight -
														630) /
													2,
												left: 0
											}
										})),
										this.customInter
											.show()
											.then(function () {
												n.logi('customInter show'),
													n.hideBanner(),
													t && t();
											}),
										this.customInter.onClose(function t() {
											e && e(),
												n.customInter.offClose(t),
												n.destroyCustomInter();
										}),
										this.customInter.onError(function o(i) {
											console.error(
												'[gx_game] custom inter error: ' +
													JSON.stringify(i)
											),
												n.customInter.offError(o),
												n.destroyCustomInter(),
												n.showInterstitial(t, e);
										});
								} else e && e();
							}),
							(e.prototype.destroyCustomInter = function () {
								this.customInter && this.customInter.destroy(),
									(this.customInter = null);
							}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[HwAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[HwAdapter]'], e)
								);
							}),
							e
						);
					})(l.default);
				(n.default = p), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./GxAdParams': 'GxAdParams',
				'./GxAudioUtil': 'GxAudioUtil',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils'
			}
		],
		KsAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'd38b11Vts1I47+t5MaRKPAZ', 'KsAdapter');
				var i =
					((o = function (t, e) {
						return (o =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (t, e) {
									t.__proto__ = e;
								}) ||
							function (t, e) {
								for (var n in e)
									Object.prototype.hasOwnProperty.call(
										e,
										n
									) && (t[n] = e[n]);
							})(t, e);
					}),
					function (t, e) {
						function n() {
							this.constructor = t;
						}
						o(t, e),
							(t.prototype =
								null === e
									? Object.create(e)
									: ((n.prototype = e.prototype), new n()));
					});
				Object.defineProperty(n, '__esModule', { value: !0 });
				var a = t('./BaseAdapter'),
					r = t('./GxAdParams'),
					s = (function (t) {
						function e() {
							return (
								(null !== t && t.apply(this, arguments)) || this
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								this.initVideo(), this.initRecorder();
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								null == r.AdParams.ks.video ||
									r.AdParams.ks.video.length <= 0 ||
									(this.destroyVideo(),
									(this.videoAd = ks.createRewardedVideoAd({
										adUnitId: r.AdParams.ks.video
									})),
									console.log(this.videoAd),
									this.videoAd.onError &&
										this.videoAd.onError(function (t) {
											console.log(
												'[gx_game]video error: ' +
													JSON.stringify(t),
												'color: red'
											);
										}),
									this.videoAd.onClose(function (e) {
										console.log(e),
											t.recorderResume(),
											((e && e.isEnded) ||
												void 0 === e) &&
												t.videocallback &&
												t.videocallback(!0);
									}));
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(),
									null != this.videoAd
										? ((this.videocallback = t),
										  this.videoAd
												.show()
												.then(function () {
													n.recorderPause(),
														console.log(
															'\u89c6\u9891\u5c55\u793a\u6210\u529f'
														);
												})
												.catch(function () {
													n.createToast(
														'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
													);
												}))
										: t && t(!0);
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd && this.videoAd.destroy(),
									(this.videoAd = null);
							}),
							(e.prototype.initRecorder = function () {
								var t = this;
								(this.gameRecorder = ks.getGameRecorder()),
									this.gameRecorder.on('start', function () {
										console.log('\u5f55\u5236\u5f00\u59cb'),
											(t.gameRecorderState =
												a.RECORDER_STATE.START);
									}),
									this.gameRecorder.on('error', function (e) {
										console.log(
											'\u5f55\u5236\u51fa\u9519',
											JSON.stringify(e)
										),
											(t.gameRecorderState =
												a.RECORDER_STATE.NO);
									}),
									this.gameRecorder.on('stop', function (e) {
										(t.gameRecorderState =
											a.RECORDER_STATE.STOP),
											(t.videoPath = null),
											e && e.videoID
												? ((t.videoPath = e.videoID),
												  console.log(
														'\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u6210\u529f\u3002videoID is ' +
															e.videoID
												  ))
												: console.log(
														'\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u5931\u8d25'
												  ),
											t.onRecoderStop &&
												t.onRecoderStop(
													null != t.videoPath
												);
									}),
									this.gameRecorder.on('pause', function () {
										console.log('\u6682\u505c\u5f55\u5236'),
											(t.gameRecorderState =
												a.RECORDER_STATE.PAUSE);
									}),
									this.gameRecorder.on('resume', function () {
										console.log('\u7ee7\u7eed\u5f55\u5236'),
											(t.gameRecorderState =
												a.RECORDER_STATE.RESUME);
									}),
									this.gameRecorder.on('abort', function () {
										console.log(
											'\u5e9f\u5f03\u5df2\u5f55\u5236\u89c6\u9891'
										);
									});
							}),
							(e.prototype.recorderPause = function () {
								this.gameRecorder &&
									this.gameRecorderState !=
										a.RECORDER_STATE.NO &&
									this.gameRecorder.pause();
							}),
							(e.prototype.recorderResume = function () {
								this.gameRecorder &&
									this.gameRecorderState !=
										a.RECORDER_STATE.NO &&
									this.gameRecorder.resume();
							}),
							(e.prototype.recorderStart = function () {
								this.gameRecorder && this.gameRecorder.start();
							}),
							(e.prototype.recorderStop = function (t) {
								(this.onRecoderStop = t),
									this.gameRecorder &&
										this.gameRecorder.stop();
							}),
							(e.prototype.shareRecorder = function (t, e) {
								null != this.gameRecorder &&
									null != this.videoPath &&
									this.gameRecorder.publishVideo({
										video: this.videoPath,
										callback: function (n) {
											if (null != n && null != n)
												return (
													console.log(
														'\u5206\u4eab\u5f55\u5c4f\u5931\u8d25: ' +
															JSON.stringify(n)
													),
													void (e && e())
												);
											console.log(
												'\u5206\u4eab\u5f55\u5c4f\u6210\u529f'
											),
												t && t();
										}
									});
							}),
							(e.prototype.hasAddDesktop = function (t, e, n) {
								ks.getAPKShortcutInstallStatus(function (o) {
									console.log(
										'hasAddDesktop',
										JSON.stringify(o)
									),
										1 === o.code
											? o.installed
												? e && e()
												: t && t()
											: n && n();
								});
							}),
							(e.prototype.addDesktop = function (t, e) {
								ks.saveAPKShortcut(function (n) {
									console.log(
										'addDesktop',
										JSON.stringify(n)
									),
										1 === n.code ? t && t() : e && e();
								});
							}),
							e
						);
					})(a.default);
				(n.default = s), cc._RF.pop();
			},
			{ './BaseAdapter': 'BaseAdapter', './GxAdParams': 'GxAdParams' }
		],
		LoadingScene: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '6994bPn7OxPbJj6zEUF2tXh', 'LoadingScene'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							if (
								((this.percentLbl = cc
									.find('Canvas/lbl/percent')
									.getComponent(cc.Label)),
								(this.loadingLbl = cc
									.find('Canvas/lbl/loading')
									.getComponent(cc.Label)),
								(this.loadingBar = cc
									.find('Canvas/ProgressBar')
									.getComponent(cc.ProgressBar)),
								(this.canvas = this.node.getComponent(
									cc.Canvas
								)),
								(this.canStart = !1),
								!window.mgr)
							) {
								window.mgr = {};
								var e = t('./EventManager');
								(mgr.Event = new e()),
									(mgr.Res = t('./ResManager').getInstance()),
									mgr.Res.init(),
									(mgr.Sound =
										t('./SoundManager').getInstance()),
									mgr.Sound.init(),
									(mgr.Data =
										t('./DataManager').getInstance()),
									mgr.Data.init(),
									(mgr.Game =
										t('./GameManager').getInstance()),
									mgr.Game.init(this.canvas),
									(mgr.Ad = t('./AdManager').getInstance()),
									mgr.Ad.init();
							}
						},
						start: function () {
							this.loadStep = 3;
						},
						loadRes: function (t) {
							var e = this;
							switch (
								((mgr.Res.onProgress = function (t, n) {
									var o = parseInt((t / n) * 100);
									(e.loadingBar.progress = o / 100),
										(e.percentLbl.string = o + '%');
								}),
								(this.loadingBar.progress = 0),
								(this.percentLbl.string = '0%'),
								t)
							) {
								case 3:
									(this.loadingLbl.string =
										'\u52a0\u8f7d\u58f0\u97f3\u8d44\u6e90\u4e2d...'),
										mgr.Res.loadSound(function () {
											cc.log(
												'\u58f0\u97f3\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6bd5'
											),
												e.loadRes(--e.loadStep);
										});
									break;
								case 2:
									(this.loadingLbl.string =
										'\u52a0\u8f7d\u754c\u9762\u4e2d...'),
										mgr.Res.loadTextures(function () {
											cc.log(
												'\u56fe\u7247\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6bd5'
											),
												e.loadRes(--e.loadStep);
										});
									break;
								case 1:
									mgr.Res.loadPrefabs(function () {
										cc.log(
											'ui\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6bd5'
										),
											e.loadRes(--e.loadStep);
									});
									break;
								default:
									(this.loadingLbl.string =
										'\u52a0\u8f7d\u5b8c\u6210'),
										(this.percentLbl.string = '100%'),
										(this.loadingBar.progress = 1),
										cc.director.loadScene('GameScene');
							}
						},
						update: function () {
							this.canStart ||
								((this.canStart =
									mgr.Sound &&
									mgr.Data &&
									mgr.Game &&
									mgr.Ad),
								this.canStart &&
									(this.loadRes(this.loadStep),
									(this.loadingBar.node.active = !0)));
						}
					}),
					cc._RF.pop();
			},
			{
				'./AdManager': 'AdManager',
				'./DataManager': 'DataManager',
				'./EventManager': 'EventManager',
				'./GameManager': 'GameManager',
				'./ResManager': 'ResManager',
				'./SoundManager': 'SoundManager'
			}
		],
		MiAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'bd976e9C6ZAQa3cUEk2+ewY', 'MiAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxTimer'),
					c = t('./DataStorage'),
					d = t('./GxUtils'),
					l = t('./BaseAdapter'),
					u = t('./GxEnum'),
					h = t('./GxAdParams'),
					p = t('./TDSDK'),
					f = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (e.bannerIdx = 1), (e.firstBanner = !0), e;
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								if (!this.isInitAd) {
									(this.isInitAd = !0),
										(r.default.adConfig.bannerUpdateTime = 5),
										(r.default.adConfig.useNative = !0),
										this.getGameInfo(),
										(r.default.adConfig.interTick = 30),
										(r.default.adConfig.bannerTick = 30),
										(r.default.adConfig.adCdTime =
											r.default.getValue('delay', 30)),
										r.default.getLabel('switch') &&
											(r.default.adConfig.adCdTime = 0),
										(this.isGameCd =
											r.default.adConfig.adCdTime > 0),
										this.logi(
											'\u5e7f\u544a\u51b7\u5374\uff1a' +
												this.isGameCd
										),
										t.prototype.initAd.call(this);
									var e = 'miDefault';
									null != this.manifestInfo &&
										(e = this.manifestInfo.package.replace(
											/\./g,
											'_'
										)),
										p.default
											.getInstance()
											.init(
												'6D92901997C943FE9A91798414E30C6C',
												e
											),
										this._gameCd(),
										this.initBanner(),
										this.initNormalBanner(),
										this.initVideo(),
										this.initNativeAd(),
										this.initGamePortal(),
										s.default.loop(function () {
											r.default.uploadOcpx('gtime');
										}, 6e4);
								}
							}),
							(e.prototype.getDeviceId = function () {
								var t = this;
								window.qg.getDeviceId &&
									window.qg.getDeviceId({
										success: function (e) {
											t.logi(
												'deviceId get success: ' + e
											),
												e &&
													e.deviceId &&
													c.default.deviceid !=
														e.deviceId &&
													(c.default.deviceid =
														e.deviceId),
												t.logi(c.default.deviceid);
										},
										fail: function (e, n) {
											t.loge(
												'deviceId  get fail, code = ' +
													n
											);
										}
									});
							}),
							(e.prototype.getGameInfo = function () {
								var t = this;
								window.qg.getManifestInfo &&
									window.qg.getManifestInfo({
										success: function (e) {
											var n = JSON.parse(e.manifest);
											(r.default.gameInfo = {
												package: n.package,
												name: n.name,
												versionName: n.versionName,
												versionCode: n.versionCode
											}),
												t.logi(
													JSON.stringify(
														r.default.gameInfo
													)
												);
										}
									});
							}),
							(e.prototype._gameCd = function () {
								var t = this;
								new s.default().once(function () {
									(t.isGameCd = !1),
										t.isNeedShowBanner &&
											t.showBanner(null, null);
								}, 1e3 * r.default.adConfig.adCdTime);
							}),
							(e.prototype.initNormalBanner = function () {
								var t = this;
								if (
									!qg.createBannerAd ||
									h.AdParams.mi.banner.length <= 0
								)
									this.logi(
										'\u73af\u5883\u4e0d\u652f\u6301banner  \u6216\u8005banner\u5e7f\u544a\u53c2\u6570\u7a7a'
									);
								else {
									this.destroyNormalBanner();
									var e = r.default.screenWidth,
										n = r.default.screenHeight;
									console.log('scree:' + e),
										console.log('screenHeight:' + n);
									var o = h.AdParams.mi.bannerOnTop,
										i = {
											left: (e - 0.4 * e) / 2,
											top: n - 0.4 * e * (88 / 208) + 80,
											width: 1e3
										};
									o && (i.top = 0),
										(this.bannerAd =
											window.qg.createBannerAd({
												adUnitId: h.AdParams.mi.banner,
												style: i
											}));
									var a = !1;
									this.bannerAd.onError(function (e) {
										t.loge(
											'normal banner error: ',
											JSON.stringify(e)
										);
									}),
										this.bannerAd.onClose(function () {
											t.loge('normal banner close: '),
												(t.bannerShowTime =
													t.get_time());
										}),
										this.bannerAd.onResize(function (o) {
											t.loge(
												'normal banner onResize: ',
												JSON.stringify(o)
											),
												a ||
													(t.bannerAd &&
														(t.loge(
															'normal banner \u6539\u53d8: '
														),
														e > n &&
															(t.bannerAd.style.top =
																n -
																0.4 *
																	e *
																	(88 / 208) +
																80))),
												(a = !1);
										});
								}
							}),
							(e.prototype.showNormalBanner = function (t, e) {
								var n = this;
								return this.get_time() - this.bannerShowTime <=
									1e3 * r.default.adConfig.bannerTick ||
									r.default.isShenHe ||
									r.default.inBlockArea
									? (this.logi('\u9650\u5236\u4e862banner'),
									  e && e())
									: (null == this.bannerAd &&
											this.initNormalBanner(),
									  null == this.bannerAd
											? (this.logi('banner\u7a7a'),
											  void (e && e()))
											: void this.bannerAd
													.show()
													.then(function () {
														t && t(),
															n.logi(
																'normal banner show success'
															),
															r.default.adConfig
																.bannerUpdateTime <=
																0 &&
																n.bannerTimer &&
																n.bannerTimer.stop(),
															n.bannerAd &&
																r.default
																	.screenWidth >
																	r.default
																		.screenHeight &&
																((n.bannerAd.style.top =
																	r.default
																		.screenHeight -
																	0.4 *
																		r
																			.default
																			.screenWidth *
																		(88 /
																			208) +
																	80),
																(n.bannerAd.style.height =
																	n.bannerAd.style.realHeight),
																(n.bannerAd.style.top =
																	r.default
																		.screenHeight -
																	65));
													})
													.catch(function (t) {
														e && e(),
															n.loge(
																'banner error',
																t
															);
													}));
							}),
							(e.prototype.hideNormalBanner = function () {
								this.bannerAd &&
									(this.bannerAd.hide(),
									this.bannerAd.destroy()),
									(this.bannerAd = null),
									console.log('\u9500\u6bc1banner');
							}),
							(e.prototype.destroyNormalBanner = function () {
								this.bannerAd && this.bannerAd.destroy();
							}),
							(e.prototype.initBanner = function () {
								t.prototype.initBanner.call(this);
							}),
							(e.prototype.showBanner = function (t, e) {
								if (
									this.get_time() - this.bannerShowTime <=
										1e3 * r.default.adConfig.bannerTick ||
									r.default.isShenHe ||
									r.default.inBlockArea
								)
									return (
										this.logi('\u9650\u5236\u4e862banner'),
										e && e()
									);
								this.firstBanner || this.hideBanner(),
									(this.firstBanner = !1),
									this.showNormalBanner(t, e);
							}),
							(e.prototype.hideBanner = function () {
								t.prototype.hideBanner.call(this),
									(this.isNeedShowBanner = !1),
									console.log('\u8fdb\u5165hideBanner'),
									this.customBanner &&
										(this.customBanner.hide(),
										this.customBanner.destroy(),
										(this.customBanner = null)),
									this.hideNormalBanner();
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								h.AdParams.mi.video
									? (this.destroyVideo(),
									  (this.videoAd =
											window.qg.createRewardedVideoAd({
												adUnitId: h.AdParams.mi.video
											})),
									  this.videoAd.onLoad(function () {
											t.logi('video load succ');
									  }),
									  this.videoAd.onError(function (e) {
											t.logi(
												'video error: ' +
													JSON.stringify(e),
												'color: red'
											);
									  }),
									  this.videoAd.onClose(function (e) {
											e && e.isEnded
												? t.videocallback &&
												  t.videocallback(!0)
												: t.videocallback &&
												  t.videocallback(!1),
												t.videoAd.load();
									  }),
									  this.videoAd.load())
									: this.logi(
											'video\u5e7f\u544a\u4f4d\u53c2\u6570\u7a7a'
									  );
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								if (
									(void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(),
									null == this.videoAd)
								)
									return (
										this.createToast(
											'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
										),
										void (t && t(!1))
									);
								(this.videocallback = t),
									this.videoAd
										.show()
										.then(function () {})
										.catch(function () {
											n.createToast(
												'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
											),
												t && t(!1);
										});
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd &&
									(this.videoAd.offLoad(),
									this.videoAd.offError(),
									this.videoAd.offClose()),
									(this.videoAd = null);
							}),
							(e.prototype.create_ad = function (t) {
								var e = this;
								return new Promise(function (n) {
									var o = '';
									if (
										(t == u.ad_native_type.banner
											? (o = h.AdParams.mi.native_banner)
											: t == u.ad_native_type.inter1
											? (o = h.AdParams.mi.native1)
											: t == u.ad_native_type.inter2 &&
											  (o = h.AdParams.mi.native2),
										e.logi(t, 'posId = ', o),
										'' == o ||
											void 0 === o ||
											null == o ||
											e.is_limit_native_length(t) ||
											!qg.createNativeAd)
									)
										return n(null);
									var i = window.qg.createNativeAd({
										adUnitId: o
									});
									i.onLoad(function n(o) {
										if (
											(e.logi('native data load:'),
											o && o.adList)
										) {
											var a = o.adList.pop();
											(a.ad = i),
												(a.type = t),
												e.add_native_data(a),
												e.logi(
													'native data load succ:' +
														JSON.stringify(a)
												),
												i.offLoad(n);
										}
									}),
										i.onError(function t(n) {
											e.logi(
												'native data error: ' +
													JSON.stringify(n),
												'color: red'
											),
												i.offError(t);
										}),
										i.load(),
										setTimeout(n, 500);
								});
							}),
							(e.prototype.create_custom_ad = function (t) {
								var e = '',
									n = {};
								if (
									(t == u.ad_native_type.banner
										? ((e =
												h.AdParams.mi.native_banner ||
												h.AdParams.mi
													.native_custom_banner),
										  r.default.adConfig.useNative ||
												(e =
													h.AdParams.mi
														.native_custom_banner))
										: t == u.ad_native_type.inter1
										? ((e =
												h.AdParams.mi.native1 ||
												h.AdParams.mi.native_custom1),
										  r.default.adConfig.useNative ||
												(e =
													h.AdParams.mi
														.native_custom1))
										: t == u.ad_native_type.inter2 &&
										  ((e =
												h.AdParams.mi.native2 ||
												h.AdParams.mi.native_custom2),
										  r.default.adConfig.useNative ||
												(e =
													h.AdParams.mi
														.native_custom2)),
									t == u.ad_native_type.banner)
								)
									h.AdParams.mi.bannerOnTop && (n.top = 0);
								else {
									var o =
											0.85 *
											Math.min(
												r.default.screenWidth,
												r.default.screenHeight
											),
										i = (o / 16) * 15.125,
										a = (r.default.screenWidth - o) / 2,
										s = (r.default.screenHeight - i) / 2;
									(n.width = o), (n.left = a), (n.top = s);
								}
								return (
									this.logi(t, 'posId = ', e),
									'' != e &&
									void 0 !== e &&
									null != e &&
									window.qg.createCustomAd
										? window.qg.createCustomAd({
												adUnitId: e,
												style: n
										  })
										: null
								);
							}),
							(e.prototype.initNativeAd = function () {
								var t = this;
								r.default.adConfig.useNative
									? (this.logi(
											'\u4f7f\u7528\u539f\u751f\u81ea\u6e32\u67d3\u5e7f\u544a'
									  ),
									  this.create_ad(u.ad_native_type.banner)
											.then(function () {
												return t.create_ad(
													u.ad_native_type.inter1
												);
											})
											.then(function () {
												return t.create_ad(
													u.ad_native_type.inter2
												);
											})
											.then(function () {
												t.loop_get_native_data();
											}))
									: this.logi(
											'\u4f7f\u7528\u539f\u751f\u6a21\u677f\u5e7f\u544a'
									  );
							}),
							(e.prototype.showInterstitialNative = function (
								t,
								e,
								n,
								o
							) {
								o && o(),
									this.logi(
										'\u4e0d\u4f7f\u7528\u8fd9\u4e2a\u5e7f\u544a'
									);
							}),
							(e.prototype.showInterstitial = function (t, e) {
								var n = this;
								if (
									(this.logi('\u666e\u901a \u63d2\u5c4f'),
									!qg.createInterstitialAd ||
										null == h.AdParams.mi.inter ||
										0 == h.AdParams.mi.inter.length)
								)
									return e && e();
								this.destroyNormalInter(),
									(this.interAd = qg.createInterstitialAd({
										adUnitId: h.AdParams.mi.inter
									}));
								var o = this;
								this.interAd.onLoad(function () {
									o.logi(
										'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d'
									),
										n.interAd.show(),
										t && t();
								}),
									this.interAd.onError(function (t) {
										n.logi(
											'\u666e\u901a\u63d2\u5c4f\u5c55\u793a\u5931\u8d25' +
												JSON.stringify(t)
										),
											e && e();
									}),
									this.interAd.onClose(function () {
										o.logi(
											'\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed'
										),
											(n.interShowTime = n.get_time()),
											e && e();
									});
							}),
							(e.prototype.destroyNormalInter = function () {
								this.interAd &&
									(this.interAd.offLoad(),
									this.interAd.offError()),
									(this.interAd = null);
							}),
							(e.prototype.hideInterstitialNative = function () {
								t.prototype.hideInterstitialNative.call(this);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								return (
									void 0 === n && (n = 0),
									this.isGameCd
										? (e && e(),
										  void this.logi(
												'showNativeInterstitial \u5e7f\u544aCD\u4e2d'
										  ))
										: this.get_time() -
												this.interShowTime <=
												1e3 *
													r.default.adConfig
														.interTick ||
										  r.default.isShenHe ||
										  r.default.inBlockArea
										? (this.logi('\u9650\u5236\u4e862'),
										  e && e())
										: void s.default.once(
												function () {
													o.hideNativeInterstitial();
													var n = null,
														i = 0;
													if (
														r.default.adConfig
															.useNative
													) {
														if (o.interIdx % 2 != 1)
															return (
																o.logi(
																	' useNative inter222Idx:' +
																		o.interIdx
																),
																o.logi(
																	'\u8c03\u7528\u666e\u901a\u63d2\u5c4f'
																),
																o.interIdx++,
																void o.showInterstitial(
																	t,
																	e
																)
															);
														o.logi(
															' useNative interIdx:' +
																o.interIdx
														),
															(n =
																o.getLocalNativeData(
																	u
																		.ad_native_type
																		.inter1
																)),
															(i =
																u.ad_native_type
																	.inter1),
															(null != n &&
																void 0 !== n) ||
																((n =
																	o.getLocalNativeData(
																		u
																			.ad_native_type
																			.inter2
																	)),
																(i =
																	u
																		.ad_native_type
																		.inter2));
													} else
														o.interIdx % 2 == 1
															? ((n =
																	o.create_custom_ad(
																		u
																			.ad_native_type
																			.inter1
																	)),
															  (i =
																	u
																		.ad_native_type
																		.inter1))
															: ((n =
																	o.create_custom_ad(
																		u
																			.ad_native_type
																			.inter2
																	)),
															  (i =
																	u
																		.ad_native_type
																		.inter2));
													if (
														(o.interIdx++,
														o.logi(
															'interIdx:' +
																o.interIdx
														),
														o.logi(
															'\u663e\u793a:' + i
														),
														null == n ||
															void 0 === n)
													)
														o.logi(
															'native_data null'
														),
															e && e();
													else if (
														r.default.adConfig
															.useNative
													) {
														o.logi('native inter ');
														var a = cc.instantiate(
															d.default.getRes(
																'gx/prefab/ad/native_interstitial',
																cc.Prefab
															)
														);
														(o.nativeInter =
															a.getComponent(
																'gx_native_interstitial'
															)),
															o.nativeInter &&
																o.nativeInter.show(
																	n,
																	function () {
																		t &&
																			t();
																	},
																	function () {
																		(o.interShowTime =
																			o.get_time()),
																			e &&
																				e();
																	}
																);
													} else
														o.customInter &&
															(o.customInter.destroy(),
															(o.customInter =
																null)),
															o.logi(
																'custom inter '
															),
															n.onHide(
																function () {
																	if (
																		((o.interShowTime =
																			o.get_time()),
																		window.cc)
																	) {
																		var t =
																			cc.director
																				.getScene()
																				.getChildByName(
																					'BLOCK'
																				);
																		t &&
																			t.destroy();
																	}
																	n &&
																		n.offHide(),
																		e &&
																			e();
																}
															),
															n
																.show()
																.then(
																	function () {
																		if (
																			window.cc &&
																			!cc.director
																				.getScene()
																				.getChildByName(
																					'BLOCK'
																				)
																		) {
																			var e =
																				new cc.Node();
																			(e.width = 2e3),
																				(e.height = 2e3),
																				(e.name =
																					'BLOCK'),
																				cc.director
																					.getScene()
																					.addChild(
																						e
																					),
																				(e.zIndex =
																					cc.macro.MAX_ZINDEX),
																				e.addComponent(
																					cc.BlockInputEvents
																				);
																			var i =
																				cc.winSize;
																			(e.x =
																				i.width /
																				2),
																				(e.y =
																					i.height /
																					2);
																		}
																		(o.customInter =
																			n),
																			o.logi(
																				'show custom inter  success'
																			),
																			t &&
																				t();
																	}
																)
																.catch(
																	function (
																		t
																	) {
																		o.logi(
																			'show custom inter fail with:' +
																				t.errCode +
																				',' +
																				t.errMsg
																		),
																			e &&
																				e();
																	}
																);
												},
												r.default.isShenHe ||
													r.default.inBlockArea
													? 0
													: 1e3 * n
										  )
								);
							}),
							(e.prototype.showOtherNativeInterstitial =
								function (t, e, n) {
									void 0 === n && (n = 0),
										this.showNativeInterstitial(t, e, n);
								}),
							(e.prototype.showNativeIcon = function (t) {
								if (this.isGameCd)
									return this.logi(
										'showNativeIcon \u5e7f\u544aCD\u4e2d'
									);
								if (!r.default.adConfig.useNative)
									return this.logi(
										'native\u65e0\u6cd5\u663e\u793a \u73b0\u5728\u662fcustom '
									);
								var e = u.ad_native_type.native_icon,
									n = h.AdParams.mi.native_icon;
								n == h.AdParams.mi.native1
									? (e = u.ad_native_type.inter1)
									: n == h.AdParams.mi.native_banner &&
									  (e = u.ad_native_type.banner);
								var o = this.getLocalNativeData(e);
								if (null == o || void 0 === o)
									return this.logi(
										'showNativeIcon \u6682\u65e0\u5e7f\u544a\u6570\u636e'
									);
								var i = cc.instantiate(
									d.default.getRes(
										'gx/prefab/ad/native_icon',
										cc.Prefab
									)
								);
								(this.nativeIcon =
									i.getComponent('gx_native_icon')),
									this.nativeIcon &&
										this.nativeIcon.show(t, o);
							}),
							(e.prototype.hideNativeIcon = function () {
								t.prototype.hideNativeIcon.call(this);
							}),
							(e.prototype.loop_get_native_data = function () {
								var t =
									this._native_data_cache.length < 5
										? 1e3 * d.default.randomInt(15, 20)
										: 3e4;
								setTimeout(this.initNativeAd.bind(this), t);
							}),
							(e.prototype.loop_get_custom_data = function () {
								var t =
									this._native_custom_inter_cache.length <
										5 ||
									this._native_custom_banner_cache.length < 5
										? 1e3 * d.default.randomInt(15, 20)
										: 3e4;
								setTimeout(this.initNativeAd.bind(this), t);
							}),
							(e.prototype.initGamePortal = function () {
								var t = this,
									e = this;
								this.supportGameBox() &&
									h.AdParams.mi.gamePortal &&
									window.qg.createGamePortalAd &&
									(this.destroyGamePortal(),
									(this.portalAd =
										window.qg.createGamePortalAd({
											adUnitId: h.AdParams.mi.gamePortal
										})),
									this.portalAd.onLoad(function () {
										e.logi('game portal ad load succ');
									}),
									this.portalAd.onClose(function () {
										e._game_portal_hide &&
											t._game_portal_hide();
									}),
									this.portalAd.onError(function (t) {
										e.logi(
											'game portal ad error: ' +
												JSON.stringify(t),
											'color: red'
										);
									}));
							}),
							(e.prototype.showGamePortal = function (t, e, n) {
								var o = this;
								return (
									void 0 === n && (n = !0),
									this.supportGameBox()
										? (this.portalAd ||
												this.initGamePortal(),
										  this.portalAd
												? ((this._game_portal_hide = e),
												  void this.portalAd
														.load()
														.then(function () {
															o.portalAd
																.show()
																.then(
																	function () {
																		o.logi(
																			'show success'
																		),
																			o.hideBanner(),
																			t &&
																				t();
																	}
																)
																.catch(
																	function (
																		t
																	) {
																		o.loge(
																			'showGamePortal show error:',
																			t
																		),
																			e &&
																				e(),
																			n &&
																				o.createToast(
																					'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
																				);
																	}
																);
														})
														.catch(function (t) {
															o.loge(
																'showGamePortal load error:',
																t
															),
																e && e(),
																n &&
																	o.createToast(
																		'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
																	);
														}))
												: (e && e(),
												  void (
														n &&
														this.createToast(
															'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
														)
												  )))
										: e && e()
								);
							}),
							(e.prototype.destroyGamePortal = function () {
								this.portalAd &&
									(this.portalAd.destroy(),
									(this.portalAd = null));
							}),
							(e.prototype.initGameBanner = function () {
								var t = this;
								!window.qg.createGameBannerAd &&
									h.AdParams.mi.gameBanner &&
									window.qg.createGameBannerAd &&
									(this.destroyGameBanner(),
									(this.gameBannerAd =
										window.qg.createGameBannerAd({
											adUnitId: h.AdParams.mi.gameBanner
										})),
									this.gameBannerAd.onLoad(function () {
										t.logi(
											'\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
									}),
									this.gameBannerAd.onError(function (e) {
										t.logi(e);
									}));
							}),
							(e.prototype.showGameBanner = function () {
								var t = this;
								this.gameBannerAd || this.initGameBanner(),
									this.gameBannerAd &&
										this.gameBannerAd
											.show()
											.then(function () {
												t.logi('show success');
											})
											.catch(function (e) {
												t.logi(
													'show fail with:' +
														e.errCode +
														',' +
														e.errMsg
												);
											});
							}),
							(e.prototype.hideGameBanner = function () {
								this.gameBannerAd && this.gameBannerAd.hide();
							}),
							(e.prototype.destroyGameBanner = function () {
								this.gameBannerAd &&
									(this.gameBannerAd.destroy(),
									(this.gameBannerAd = null));
							}),
							(e.prototype.showAddDesktop = function (t, e) {
								if (
									!this.addIconNode ||
									void 0 === this.addIconNode ||
									!cc.isValid(this.addIconNode.node)
								) {
									var n = cc.instantiate(
										d.default.getRes(
											'gx/prefab/add_icon',
											cc.Prefab
										)
									);
									(this.addIconNode =
										n.getComponent('Gx_add_icon')),
										this.addIconNode &&
											this.addIconNode.show(t, e);
								}
							}),
							(e.prototype.hasAddDesktop = function (t, e, n) {
								var o = this;
								window.qg.hasShortcutInstalled &&
								window.qg.hasShortcutInstalled
									? window.qg.hasShortcutInstalled({
											success: function (n) {
												o.logi(
													' hasShortcutInstalled ' +
														(n
															? 'has add'
															: 'can add')
												),
													0 == n
														? t && t()
														: e && e();
											},
											fail: function (t) {
												o.loge(
													' hasShortcutInstalled error: ' +
														JSON.stringify(t)
												),
													n && n();
											},
											complete: function () {}
									  })
									: n && n();
							}),
							(e.prototype.addDesktop = function (t, e) {
								var n = this;
								window.qg.installShortcut &&
								window.qg.installShortcut
									? window.qg.installShortcut({
											success: function () {
												setTimeout(function () {
													n.hasAddDesktop(
														function () {
															e && e();
														},
														function () {
															t && t();
														}
													);
												}, 1e3);
											},
											fail: function (t) {
												n.loge(
													' installShortcut error: ' +
														JSON.stringify(t)
												),
													e && e(),
													window.qg.showToast({
														title: '\u8bf7\u7a0d\u540e\u518d\u8bd5',
														icon: 'none'
													});
											}
									  })
									: e && e();
							}),
							(e.prototype.login = function (t, e) {
								window.qg.login
									? window.qg.login({
											success: function (e) {
												t && t(e);
											},
											fail: function (t) {
												e && e(t);
											}
									  })
									: e && e('no login');
							}),
							(e.prototype.reportAdClick = function (e) {
								t.prototype.reportAdClick.call(this, e),
									r.default.uploadOcpx('gads');
							}),
							(e.prototype.openGameAd = function () {
								var t = this;
								!r.default.isShenHe &&
									!r.default.inBlockArea &&
									r.default.adConfig.showBanner > 0 &&
									s.default.once(function () {
										t.clickNative();
									}, 1e3 * r.default.adConfig.showBanner);
							}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[MiAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[MiAdapter]'], e)
								);
							}),
							e
						);
					})(l.default);
				(n.default = f), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./DataStorage': 'DataStorage',
				'./GxAdParams': 'GxAdParams',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils',
				'./TDSDK': 'TDSDK'
			}
		],
		OpenDataUtil: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '013830PBYVFGpH3UU/US5Ak', 'OpenDataUtil'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = t('./GxLog'),
					i = (function () {
						function t() {}
						return (
							(t.checkHasOpenData = function () {
								try {
									return this._postMessage('Check');
								} catch (t) {
									return (
										console.warn(t),
										o.default.w(
											'\u6ca1\u6709\u5f00\u653e\u57df \u8bf7\u653e\u5165subopen\u6587\u4ef6\u5939 \u5e76\u5728 game.json\u4e2d\u6ca1\u6709\u914d\u7f6eopenDataContext\u4e3asubopen '
										),
										!1
									);
								}
							}),
							(t.shareMessageToFriend = function () {
								wx.setMessageToFriendQuery({
									shareMessageToFriendScene: 1
								}),
									this._postMessage('ShareToFriend');
							}),
							(t.initChannel = function (t) {
								this._postMessage('InitChannel', {
									channel: t
								});
							}),
							(t._postMessage = function (t, e, n) {
								void 0 === e && (e = null),
									void 0 === n && (n = null);
								try {
									if (!window.wx) return;
									return (
										window.wx
											.getOpenDataContext()
											.postMessage({
												action: t,
												data: e,
												dataEx: n
											}),
										!0
									);
								} catch (o) {}
								return !1;
							}),
							(t.showShareFriend = function () {
								this._postMessage('ShowShareFriend', {});
							}),
							(t.closeShareFriend = function () {
								this._postMessage('CloseShareFriend', {});
							}),
							(t.refreshShareFriend = function () {
								this._postMessage('RefreshShareFriend', {});
							}),
							t
						);
					})();
				(n.default = i), cc._RF.pop();
			},
			{ './GxLog': 'GxLog' }
		],
		OppoAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '0886fhKSB9HzK5UZK+6IFPO', 'OppoAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxTimer'),
					c = t('./DataStorage'),
					d = t('./GxUtils'),
					l = t('./BaseAdapter'),
					u = t('./GxEnum'),
					h = t('./GxAdParams'),
					p = t('./GxLabelUtil'),
					f = t('./DataStorage'),
					m = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.bannerIdx = 1),
								(e.ecpmObj = {
									targetEcpm: 0,
									gameTime: 10,
									targetVideo: 3
								}),
								(e.checkInterval = 6),
								(e.gameTime = 0),
								(e.videoReward = 0),
								(e.reported = !1),
								(e.canUpload = !0),
								(e.pkgName = ''),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								this.isInitAd ||
									((this.isInitAd = !0),
									(r.default.adConfig.bannerUpdateTime = 5),
									this.getGameInfo(),
									(r.default.adConfig.adCdTime =
										r.default.getValue('delay', 60)),
									r.default.getLabel('switch') &&
										(r.default.adConfig.adCdTime = 0),
									(this.isGameCd =
										r.default.adConfig.adCdTime > 0),
									this.logi(
										'\u5e7f\u544a\u51b7\u5374\uff1a' +
											this.isGameCd
									),
									t.prototype.initAd.call(this),
									this._gameCd(),
									this.initBanner(),
									this.initNormalBanner(),
									this.initVideo(),
									this.initNativeAd(),
									this.initGamePortal(),
									s.default.loop(function () {
										r.default.uploadOcpx('gtime');
									}, 6e4),
									this.initLLCC(),
									this.initAdMonitor());
							}),
							(e.prototype.initAdMonitor = function () {
								var t = this;
								this.getAdConfig(),
									setInterval(function () {
										t.canUpload
											? t.checkAdTarget()
											: console.log(
													'\u4e0d\u7528\u4e0a\u62a5 \u53ef\u80fd\u6ca1\u6709\u914d\u7f6e'
											  );
									}, 1e3 * this.checkInterval);
							}),
							(e.prototype.checkAdTarget = function () {
								if (
									((this.gameTime += this.checkInterval),
									(this.gameTime >=
										60 * this.ecpmObj.gameTime &&
										this.videoReward >=
											this.ecpmObj.targetVideo) ||
										window.rywDEBUG)
								) {
									if (
										'true' ==
										f.default.getItem('__oppoTaq__')
									)
										return void console.log(
											'\u672c\u5730\u5df2\u7ecf\u6709\u4e0a\u62a5\u8bb0\u5f55\u4e86'
										);
									if (this.reported)
										return void console.log(
											'\u5df2\u7ecf\u4e0a\u62a5\u8fc7\u4e86'
										);
									this.reported = !0;
									var t = new Date();
									[
										t.getFullYear() + '\u5e74',
										t.getMonth() + 1 + '\u6708',
										t.getDate() + '\u65e5'
									].join('-');
									var e = this;
									e.getDeviceId(function (t) {
										t
											? e.uploadAction(
													'rpkAction',
													function (t) {
														t &&
															f.default.setItem(
																'__oppoTaq__',
																'true'
															);
													}
											  )
											: ((e.reported = !1),
											  console.log(
													'deviceId\u4e3a\u7a7a'
											  ));
									});
								}
							}),
							(e.prototype.uploadAction = function (t, e) {
								this.canUpload ||
									(console.log(
										'\u6ca1\u6709\u914d\u7f6e \u4e0d\u7528\u4e0a\u62a5'
									),
									e && e(!1)),
									this.getDeviceId(function () {
										console.log(
											'deviceId\u7a7a \u4e0d\u80fd\u4e0a\u4f20 '
										),
											e && e(!1);
									});
							}),
							(e.prototype.getAdConfig = function () {}),
							(e.prototype.md5Str = function (t) {
								if ((t + '').length <= 0) return '';
								function e(t, e) {
									return (t << e) | (t >>> (32 - e));
								}
								function n(t, e) {
									var n, o, i, a, r;
									return (
										(i = 2147483648 & t),
										(a = 2147483648 & e),
										(r =
											(1073741823 & t) +
											(1073741823 & e)),
										(n = 1073741824 & t) &
										(o = 1073741824 & e)
											? 2147483648 ^ r ^ i ^ a
											: n | o
											? 1073741824 & r
												? 3221225472 ^ r ^ i ^ a
												: 1073741824 ^ r ^ i ^ a
											: r ^ i ^ a
									);
								}
								function o(t, e, n) {
									return (t & e) | (~t & n);
								}
								function i(t, e, n) {
									return (t & n) | (e & ~n);
								}
								function a(t, e, n) {
									return t ^ e ^ n;
								}
								function r(t, e, n) {
									return e ^ (t | ~n);
								}
								function s(t, i, a, r, s, c, d) {
									return (
										(t = n(t, n(n(o(i, a, r), s), d))),
										n(e(t, c), i)
									);
								}
								function c(t, o, a, r, s, c, d) {
									return (
										(t = n(t, n(n(i(o, a, r), s), d))),
										n(e(t, c), o)
									);
								}
								function d(t, o, i, r, s, c, d) {
									return (
										(t = n(t, n(n(a(o, i, r), s), d))),
										n(e(t, c), o)
									);
								}
								function l(t, o, i, a, s, c, d) {
									return (
										(t = n(t, n(n(r(o, i, a), s), d))),
										n(e(t, c), o)
									);
								}
								function u(t) {
									var e,
										n = '',
										o = '';
									for (e = 0; e <= 3; e++)
										n += (o =
											'0' +
											((t >>> (8 * e)) & 255).toString(
												16
											)).substr(o.length - 2, 2);
									return n;
								}
								var h,
									p,
									f,
									m,
									g,
									v,
									_,
									y,
									A,
									w = Array();
								for (
									w = (function (t) {
										for (
											var e,
												n = t.length,
												o = n + 8,
												i =
													16 *
													((o - (o % 64)) / 64 + 1),
												a = Array(i - 1),
												r = 0,
												s = 0;
											s < n;

										)
											(r = (s % 4) * 8),
												(a[(e = (s - (s % 4)) / 4)] =
													a[e] |
													(t.charCodeAt(s) << r)),
												s++;
										return (
											(r = (s % 4) * 8),
											(a[(e = (s - (s % 4)) / 4)] =
												a[e] | (128 << r)),
											(a[i - 2] = n << 3),
											(a[i - 1] = n >>> 29),
											a
										);
									})(
										(t = (function (t) {
											t = t
												.toString()
												.replace(/\r\n/g, '\n');
											for (
												var e = '', n = 0;
												n < t.length;
												n++
											) {
												var o = t.charCodeAt(n);
												o < 128
													? (e +=
															String.fromCharCode(
																o
															))
													: o > 127 && o < 2048
													? ((e +=
															String.fromCharCode(
																(o >> 6) | 192
															)),
													  (e += String.fromCharCode(
															(63 & o) | 128
													  )))
													: ((e +=
															String.fromCharCode(
																(o >> 12) | 224
															)),
													  (e += String.fromCharCode(
															((o >> 6) & 63) |
																128
													  )),
													  (e += String.fromCharCode(
															(63 & o) | 128
													  )));
											}
											return e;
										})(t))
									),
										v = 1732584193,
										_ = 4023233417,
										y = 2562383102,
										A = 271733878,
										h = 0;
									h < w.length;
									h += 16
								)
									(p = v),
										(f = _),
										(m = y),
										(g = A),
										(v = s(
											v,
											_,
											y,
											A,
											w[h + 0],
											7,
											3614090360
										)),
										(A = s(
											A,
											v,
											_,
											y,
											w[h + 1],
											12,
											3905402710
										)),
										(y = s(
											y,
											A,
											v,
											_,
											w[h + 2],
											17,
											606105819
										)),
										(_ = s(
											_,
											y,
											A,
											v,
											w[h + 3],
											22,
											3250441966
										)),
										(v = s(
											v,
											_,
											y,
											A,
											w[h + 4],
											7,
											4118548399
										)),
										(A = s(
											A,
											v,
											_,
											y,
											w[h + 5],
											12,
											1200080426
										)),
										(y = s(
											y,
											A,
											v,
											_,
											w[h + 6],
											17,
											2821735955
										)),
										(_ = s(
											_,
											y,
											A,
											v,
											w[h + 7],
											22,
											4249261313
										)),
										(v = s(
											v,
											_,
											y,
											A,
											w[h + 8],
											7,
											1770035416
										)),
										(A = s(
											A,
											v,
											_,
											y,
											w[h + 9],
											12,
											2336552879
										)),
										(y = s(
											y,
											A,
											v,
											_,
											w[h + 10],
											17,
											4294925233
										)),
										(_ = s(
											_,
											y,
											A,
											v,
											w[h + 11],
											22,
											2304563134
										)),
										(v = s(
											v,
											_,
											y,
											A,
											w[h + 12],
											7,
											1804603682
										)),
										(A = s(
											A,
											v,
											_,
											y,
											w[h + 13],
											12,
											4254626195
										)),
										(y = s(
											y,
											A,
											v,
											_,
											w[h + 14],
											17,
											2792965006
										)),
										(v = c(
											v,
											(_ = s(
												_,
												y,
												A,
												v,
												w[h + 15],
												22,
												1236535329
											)),
											y,
											A,
											w[h + 1],
											5,
											4129170786
										)),
										(A = c(
											A,
											v,
											_,
											y,
											w[h + 6],
											9,
											3225465664
										)),
										(y = c(
											y,
											A,
											v,
											_,
											w[h + 11],
											14,
											643717713
										)),
										(_ = c(
											_,
											y,
											A,
											v,
											w[h + 0],
											20,
											3921069994
										)),
										(v = c(
											v,
											_,
											y,
											A,
											w[h + 5],
											5,
											3593408605
										)),
										(A = c(
											A,
											v,
											_,
											y,
											w[h + 10],
											9,
											38016083
										)),
										(y = c(
											y,
											A,
											v,
											_,
											w[h + 15],
											14,
											3634488961
										)),
										(_ = c(
											_,
											y,
											A,
											v,
											w[h + 4],
											20,
											3889429448
										)),
										(v = c(
											v,
											_,
											y,
											A,
											w[h + 9],
											5,
											568446438
										)),
										(A = c(
											A,
											v,
											_,
											y,
											w[h + 14],
											9,
											3275163606
										)),
										(y = c(
											y,
											A,
											v,
											_,
											w[h + 3],
											14,
											4107603335
										)),
										(_ = c(
											_,
											y,
											A,
											v,
											w[h + 8],
											20,
											1163531501
										)),
										(v = c(
											v,
											_,
											y,
											A,
											w[h + 13],
											5,
											2850285829
										)),
										(A = c(
											A,
											v,
											_,
											y,
											w[h + 2],
											9,
											4243563512
										)),
										(y = c(
											y,
											A,
											v,
											_,
											w[h + 7],
											14,
											1735328473
										)),
										(v = d(
											v,
											(_ = c(
												_,
												y,
												A,
												v,
												w[h + 12],
												20,
												2368359562
											)),
											y,
											A,
											w[h + 5],
											4,
											4294588738
										)),
										(A = d(
											A,
											v,
											_,
											y,
											w[h + 8],
											11,
											2272392833
										)),
										(y = d(
											y,
											A,
											v,
											_,
											w[h + 11],
											16,
											1839030562
										)),
										(_ = d(
											_,
											y,
											A,
											v,
											w[h + 14],
											23,
											4259657740
										)),
										(v = d(
											v,
											_,
											y,
											A,
											w[h + 1],
											4,
											2763975236
										)),
										(A = d(
											A,
											v,
											_,
											y,
											w[h + 4],
											11,
											1272893353
										)),
										(y = d(
											y,
											A,
											v,
											_,
											w[h + 7],
											16,
											4139469664
										)),
										(_ = d(
											_,
											y,
											A,
											v,
											w[h + 10],
											23,
											3200236656
										)),
										(v = d(
											v,
											_,
											y,
											A,
											w[h + 13],
											4,
											681279174
										)),
										(A = d(
											A,
											v,
											_,
											y,
											w[h + 0],
											11,
											3936430074
										)),
										(y = d(
											y,
											A,
											v,
											_,
											w[h + 3],
											16,
											3572445317
										)),
										(_ = d(
											_,
											y,
											A,
											v,
											w[h + 6],
											23,
											76029189
										)),
										(v = d(
											v,
											_,
											y,
											A,
											w[h + 9],
											4,
											3654602809
										)),
										(A = d(
											A,
											v,
											_,
											y,
											w[h + 12],
											11,
											3873151461
										)),
										(y = d(
											y,
											A,
											v,
											_,
											w[h + 15],
											16,
											530742520
										)),
										(v = l(
											v,
											(_ = d(
												_,
												y,
												A,
												v,
												w[h + 2],
												23,
												3299628645
											)),
											y,
											A,
											w[h + 0],
											6,
											4096336452
										)),
										(A = l(
											A,
											v,
											_,
											y,
											w[h + 7],
											10,
											1126891415
										)),
										(y = l(
											y,
											A,
											v,
											_,
											w[h + 14],
											15,
											2878612391
										)),
										(_ = l(
											_,
											y,
											A,
											v,
											w[h + 5],
											21,
											4237533241
										)),
										(v = l(
											v,
											_,
											y,
											A,
											w[h + 12],
											6,
											1700485571
										)),
										(A = l(
											A,
											v,
											_,
											y,
											w[h + 3],
											10,
											2399980690
										)),
										(y = l(
											y,
											A,
											v,
											_,
											w[h + 10],
											15,
											4293915773
										)),
										(_ = l(
											_,
											y,
											A,
											v,
											w[h + 1],
											21,
											2240044497
										)),
										(v = l(
											v,
											_,
											y,
											A,
											w[h + 8],
											6,
											1873313359
										)),
										(A = l(
											A,
											v,
											_,
											y,
											w[h + 15],
											10,
											4264355552
										)),
										(y = l(
											y,
											A,
											v,
											_,
											w[h + 6],
											15,
											2734768916
										)),
										(_ = l(
											_,
											y,
											A,
											v,
											w[h + 13],
											21,
											1309151649
										)),
										(v = l(
											v,
											_,
											y,
											A,
											w[h + 4],
											6,
											4149444226
										)),
										(A = l(
											A,
											v,
											_,
											y,
											w[h + 11],
											10,
											3174756917
										)),
										(y = l(
											y,
											A,
											v,
											_,
											w[h + 2],
											15,
											718787259
										)),
										(_ = l(
											_,
											y,
											A,
											v,
											w[h + 9],
											21,
											3951481745
										)),
										(v = n(v, p)),
										(_ = n(_, f)),
										(y = n(y, m)),
										(A = n(A, g));
								return (
									u(v) +
									u(_) +
									u(y) +
									u(A)
								).toLowerCase();
							}),
							(e.prototype.initLLCC = function () {
								var t = this,
									e = p.default
										.getInstance()
										.getValue('lc', 30);
								setTimeout(function () {
									p.default.getInstance().getLabel('lc') &&
										t.privateShowInter(
											function () {},
											function () {
												t.initLLCC();
											}
										);
								}, 1e3 * e);
							}),
							(e.prototype.getDeviceId = function (t) {
								var e = this;
								window.qg.getDeviceId
									? window.qg.getDeviceId({
											success: function (n) {
												e.logi(
													'deviceId get success: ' +
														JSON.stringify(n)
												),
													n &&
														n.deviceId &&
														c.default.deviceid !=
															n.deviceId &&
														(c.default.deviceid =
															n.deviceId),
													t && t(n.deviceId),
													e.logi(c.default.deviceid);
											},
											fail: function (n, o) {
												e.loge(
													'deviceId  get fail, code = ' +
														o
												),
													t && t(null);
											}
									  })
									: (console.log(
											'\u4e0d\u652f\u6301\u83b7\u53d6'
									  ),
									  t && t(null));
							}),
							(e.prototype.getGameInfo = function () {
								var t = this;
								window.qg.getManifestInfo &&
									window.qg.getManifestInfo({
										success: function (e) {
											var n = JSON.parse(e.manifest);
											(r.default.gameInfo = {
												package: n.package,
												name: n.name,
												versionName: n.versionName,
												versionCode: n.versionCode
											}),
												t.logi(
													JSON.stringify(
														r.default.gameInfo
													)
												);
										}
									});
							}),
							(e.prototype._gameCd = function () {
								var t = this;
								new s.default().once(function () {
									(t.isGameCd = !1),
										t.isNeedShowBanner &&
											t.showBanner(null, null);
								}, 1e3 * r.default.adConfig.adCdTime);
							}),
							(e.prototype.initNormalBanner = function () {
								var t = this;
								if (
									this.platformVersion() < 1051 ||
									h.AdParams.oppo.banner.length <= 0
								)
									this.logi(
										'\u73af\u5883\u4e0d\u652f\u6301banner  \u6216\u8005banner\u5e7f\u544a\u53c2\u6570\u7a7a'
									);
								else {
									this.destroyNormalBanner(),
										r.default.screenWidth,
										r.default.screenHeight;
									var e = {};
									h.AdParams.oppo.bannerOnTop && (e.top = 0),
										(this.bannerAd =
											window.qg.createBannerAd({
												adUnitId:
													h.AdParams.oppo.banner,
												style: e
											})),
										this.bannerAd.onError(function (e) {
											t.loge(
												'normal banner error: ',
												JSON.stringify(e)
											);
										});
								}
							}),
							(e.prototype.showNormalBanner = function (t, e) {
								var n = this;
								if (
									(null == this.bannerAd &&
										this.initNormalBanner(),
									null == this.bannerAd)
								)
									return (
										this.logi('banner\u7a7a'),
										void (e && e())
									);
								this.bannerAd
									.show()
									.then(function () {
										t && t(),
											n.logi(
												'normal banner show success'
											),
											r.default.adConfig
												.bannerUpdateTime <= 0 &&
												n.bannerTimer &&
												n.bannerTimer.stop();
									})
									.catch(function (t) {
										e && e(), n.loge('banner error', t);
									});
							}),
							(e.prototype.hideNormalBanner = function () {
								this.bannerAd && this.bannerAd.hide();
							}),
							(e.prototype.destroyNormalBanner = function () {
								this.bannerAd && this.bannerAd.destroy();
							}),
							(e.prototype.initBanner = function () {
								t.prototype.initBanner.call(this);
							}),
							(e.prototype.showBanner = function (t, e) {
								if (this.isGameCd)
									return (
										(this.isNeedShowBanner = !0),
										e && e(),
										void this.logi(
											'showBanner \u5e7f\u544aCD\u4e2d'
										)
									);
								this.hideBanner(), this.showNormalBanner(t, e);
							}),
							(e.prototype.hideBanner = function () {
								t.prototype.hideBanner.call(this),
									(this.isNeedShowBanner = !1),
									this.customBanner &&
										(this.customBanner.hide(),
										this.customBanner.destroy(),
										(this.customBanner = null)),
									this.hideNormalBanner();
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								h.AdParams.oppo.video
									? (this.destroyVideo(),
									  (this.videoAd =
											window.qg.createRewardedVideoAd({
												adUnitId: h.AdParams.oppo.video
											})),
									  this.videoAd.onLoad(function () {
											t.logi('video load succ');
									  }),
									  this.videoAd.onError(function (e) {
											t.logi(
												'video error: ' +
													JSON.stringify(e),
												'color: red'
											);
									  }),
									  this.videoAd.onClose(function (e) {
											e && e.isEnded
												? (t.videoReward++,
												  t.checkAdTarget(),
												  t.videocallback &&
														t.videocallback(!0))
												: t.videocallback &&
												  t.videocallback(!1),
												t.videoAd.load();
									  }),
									  this.videoAd.load())
									: this.logi(
											'video\u5e7f\u544a\u4f4d\u53c2\u6570\u7a7a'
									  );
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								if (
									(void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(),
									null == this.videoAd)
								)
									return (
										this.createToast(
											'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
										),
										void (t && t(!1))
									);
								(this.videocallback = t),
									this.videoAd
										.show()
										.then(function () {})
										.catch(function () {
											n.createToast(
												'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
											),
												t && t(!1);
										});
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd &&
									(this.videoAd.offLoad(),
									this.videoAd.offError(),
									this.videoAd.offClose()),
									(this.videoAd = null);
							}),
							(e.prototype.create_ad = function (t) {
								var e = this;
								return new Promise(function (n) {
									var o = '';
									if (
										(t == u.ad_native_type.banner
											? (o =
													h.AdParams.oppo
														.native_banner)
											: t == u.ad_native_type.inter1
											? (o = h.AdParams.oppo.native1)
											: t == u.ad_native_type.inter2 &&
											  (o = h.AdParams.oppo.native2),
										e.logi(t, 'posId = ', o),
										'' == o ||
											void 0 === o ||
											null == o ||
											e.is_limit_native_length(t) ||
											e.platformVersion() < 1051)
									)
										return n(null);
									var i = window.qg.createNativeAd({
										adUnitId: o
									});
									i.onLoad(function n(o) {
										if (
											(e.logi('native data load:'),
											o && o.adList)
										) {
											var a = o.adList.pop();
											(a.ad = i),
												(a.type = t),
												e.add_native_data(a),
												e.logi(
													'native data load succ:' +
														JSON.stringify(a)
												),
												i.offLoad(n);
										}
									}),
										i.onError(function t(n) {
											e.logi(
												'native data error: ' +
													JSON.stringify(n),
												'color: red'
											),
												i.offError(t);
										}),
										i.load(),
										setTimeout(n, 500);
								});
							}),
							(e.prototype.create_custom_ad = function (t) {
								var e = '',
									n = {};
								if (
									(t == u.ad_native_type.banner
										? ((e =
												h.AdParams.oppo.native_banner ||
												h.AdParams.oppo
													.native_custom_banner),
										  r.default.adConfig.useNative ||
												(e =
													h.AdParams.oppo
														.native_custom_banner))
										: t == u.ad_native_type.inter1
										? ((e =
												h.AdParams.oppo.native1 ||
												h.AdParams.oppo.native_custom1),
										  r.default.adConfig.useNative ||
												(e =
													h.AdParams.oppo
														.native_custom1))
										: t == u.ad_native_type.inter2 &&
										  ((e =
												h.AdParams.oppo.native2 ||
												h.AdParams.oppo.native_custom2),
										  r.default.adConfig.useNative ||
												(e =
													h.AdParams.oppo
														.native_custom2)),
									t == u.ad_native_type.banner)
								)
									h.AdParams.oppo.bannerOnTop && (n.top = 0);
								else {
									var o =
											0.85 *
											Math.min(
												r.default.screenWidth,
												r.default.screenHeight
											),
										i = (o / 16) * 15.125,
										a = (r.default.screenWidth - o) / 2,
										s =
											(r.default.screenHeight - i) / 2 +
											150;
									(n.width = o), (n.left = a), (n.top = s);
								}
								return (
									this.logi(t, 'posId = ', e),
									'' == e ||
									void 0 === e ||
									null == e ||
									this.platformVersion() < 1094
										? null
										: window.qg.createCustomAd({
												adUnitId: e,
												style: n
										  })
								);
							}),
							(e.prototype.initNativeAd = function () {
								var t = this;
								r.default.adConfig.useNative
									? (this.logi(
											'\u4f7f\u7528\u539f\u751f\u81ea\u6e32\u67d3\u5e7f\u544a'
									  ),
									  this.create_ad(u.ad_native_type.banner)
											.then(function () {
												return t.create_ad(
													u.ad_native_type.inter1
												);
											})
											.then(function () {
												return t.create_ad(
													u.ad_native_type.inter2
												);
											})
											.then(function () {
												t.loop_get_native_data();
											}))
									: this.logi(
											'\u4f7f\u7528\u539f\u751f\u6a21\u677f\u5e7f\u544a'
									  );
							}),
							(e.prototype.showInterstitialNative = function (
								t,
								e,
								n,
								o
							) {
								o && o(),
									this.logi(
										'\u4e0d\u4f7f\u7528\u8fd9\u4e2a\u5e7f\u544a'
									);
							}),
							(e.prototype.hideInterstitialNative = function () {
								t.prototype.hideInterstitialNative.call(this);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								if (
									(void 0 === n && (n = 0),
									!r.default.getLabel('switch'))
								)
									return (
										this.logi('\u9650\u5236\u4e861'),
										void (e && e())
									);
								if (this.isGameCd)
									return (
										e && e(),
										void this.logi(
											'showNativeInterstitial \u5e7f\u544aCD\u4e2d'
										)
									);
								var i = !1,
									a = r.default.getValue('ic', 0);
								return (
									a > 0
										? (-1 == this.icNum &&
												((this.icNum = a),
												setInterval(function () {
													console.log(
														'\u91cd\u7f6eicNum'
													),
														(o.icNum = a);
												}, 9e4)),
										  this.icNum > 0
												? (this.icNum--, (i = !0))
												: console.log('icNum <0'))
										: console.log('ic <0'),
									i
										? this.get_time() -
												this.interShowTime <=
												1e3 *
													r.default.adConfig
														.interTick ||
										  r.default.isShenHe ||
										  r.default.inBlockArea
											? (this.logi('\u9650\u5236\u4e862'),
											  e && e())
											: void s.default.once(
													function () {
														o.privateShowInter(
															t,
															e
														);
													},
													r.default.isShenHe ||
														r.default.inBlockArea
														? 0
														: 1e3 * n
											  )
										: (e && e(),
										  void this.logi('canShow ==false'))
								);
							}),
							(e.prototype.privateShowInter = function (t, e) {
								var n = this;
								this.hideNativeInterstitial();
								var o = null,
									i = 0;
								if (
									(r.default.adConfig.useNative
										? this.interIdx % 2 == 1
											? ((o = this.getLocalNativeData(
													u.ad_native_type.inter1
											  )),
											  (i = u.ad_native_type.inter1),
											  (null != o && void 0 !== o) ||
													((o =
														this.getLocalNativeData(
															u.ad_native_type
																.inter2
														)),
													(i =
														u.ad_native_type
															.inter2)))
											: ((o = this.getLocalNativeData(
													u.ad_native_type.inter2
											  )),
											  (i = u.ad_native_type.inter2),
											  (null != o && void 0 !== o) ||
													((o =
														this.getLocalNativeData(
															u.ad_native_type
																.inter1
														)),
													(i =
														u.ad_native_type
															.inter1)))
										: this.interIdx % 2 == 1
										? ((o = this.create_custom_ad(
												u.ad_native_type.inter1
										  )),
										  (i = u.ad_native_type.inter1))
										: ((o = this.create_custom_ad(
												u.ad_native_type.inter2
										  )),
										  (i = u.ad_native_type.inter2)),
									this.interIdx++,
									this.logi('\u663e\u793a:' + i),
									null == o || void 0 === o)
								)
									this.logi('native_data null'), e && e();
								else if (r.default.adConfig.useNative) {
									this.logi('native inter ');
									var a = cc.instantiate(
										d.default.getRes(
											'gx/prefab/ad/native_interstitial',
											cc.Prefab
										)
									);
									(this.nativeInter = a.getComponent(
										'gx_native_interstitial'
									)),
										this.nativeInter &&
											this.nativeInter.show(
												o,
												function () {
													(n.interShowTime =
														n.get_time()),
														t && t();
												},
												e
											);
								} else
									this.customInter &&
										(this.customInter.destroy(),
										(this.customInter = null)),
										this.logi('custom inter '),
										o.onHide(function () {
											if (window.cc) {
												var t = cc.director
													.getScene()
													.getChildByName('BLOCK');
												t && t.destroy();
											}
											o && o.offHide(), e && e();
										}),
										o
											.show()
											.then(function () {
												if (
													window.cc &&
													!cc.director
														.getScene()
														.getChildByName('BLOCK')
												) {
													var e = new cc.Node();
													(e.width = 2e3),
														(e.height = 2e3),
														(e.name = 'BLOCK'),
														cc.director
															.getScene()
															.addChild(e),
														(e.zIndex =
															cc.macro.MAX_ZINDEX),
														e.addComponent(
															cc.BlockInputEvents
														);
													var i = cc.winSize;
													(e.x = i.width / 2),
														(e.y = i.height / 2);
												}
												(n.customInter = o),
													n.logi(
														'show custom inter  success'
													),
													t && t();
											})
											.catch(function (t) {
												n.logi(
													'show custom inter fail with:' +
														t.errCode +
														',' +
														t.errMsg
												),
													e && e();
											});
							}),
							(e.prototype.showOtherNativeInterstitial =
								function (t, e, n) {
									void 0 === n && (n = 0),
										this.showNativeInterstitial(t, e, n);
								}),
							(e.prototype.showNativeIcon = function (t) {
								if (this.isGameCd)
									return this.logi(
										'showNativeIcon \u5e7f\u544aCD\u4e2d'
									);
								if (!r.default.adConfig.useNative)
									return this.logi(
										'native\u65e0\u6cd5\u663e\u793a \u73b0\u5728\u662fcustom '
									);
								var e = u.ad_native_type.native_icon,
									n = h.AdParams.oppo.native_icon;
								n == h.AdParams.oppo.native1
									? (e = u.ad_native_type.inter1)
									: n == h.AdParams.oppo.native_banner &&
									  (e = u.ad_native_type.banner);
								var o = this.getLocalNativeData(e);
								if (null == o || void 0 === o)
									return this.logi(
										'showNativeIcon \u6682\u65e0\u5e7f\u544a\u6570\u636e'
									);
								var i = cc.instantiate(
									d.default.getRes(
										'gx/prefab/ad/native_icon',
										cc.Prefab
									)
								);
								(this.nativeIcon =
									i.getComponent('gx_native_icon')),
									this.nativeIcon &&
										this.nativeIcon.show(t, o);
							}),
							(e.prototype.hideNativeIcon = function () {
								t.prototype.hideNativeIcon.call(this);
							}),
							(e.prototype.loop_get_native_data = function () {
								var t =
									this._native_data_cache.length < 5
										? 1e3 * d.default.randomInt(15, 20)
										: 3e4;
								setTimeout(this.initNativeAd.bind(this), t);
							}),
							(e.prototype.loop_get_custom_data = function () {
								var t =
									this._native_custom_inter_cache.length <
										5 ||
									this._native_custom_banner_cache.length < 5
										? 1e3 * d.default.randomInt(15, 20)
										: 3e4;
								setTimeout(this.initNativeAd.bind(this), t);
							}),
							(e.prototype.initGamePortal = function () {
								var t = this,
									e = this;
								this.supportGameBox() &&
									h.AdParams.oppo.gamePortal &&
									window.qg.createGamePortalAd &&
									(this.destroyGamePortal(),
									(this.portalAd =
										window.qg.createGamePortalAd({
											adUnitId: h.AdParams.oppo.gamePortal
										})),
									this.portalAd.onLoad(function () {
										e.logi('game portal ad load succ');
									}),
									this.portalAd.onClose(function () {
										e._game_portal_hide &&
											t._game_portal_hide();
									}),
									this.portalAd.onError(function (t) {
										e.logi(
											'game portal ad error: ' +
												JSON.stringify(t),
											'color: red'
										);
									}));
							}),
							(e.prototype.showGamePortal = function (t, e, n) {
								var o = this;
								return (
									void 0 === n && (n = !0),
									this.supportGameBox()
										? (this.portalAd ||
												this.initGamePortal(),
										  this.portalAd
												? ((this._game_portal_hide = e),
												  void this.portalAd
														.load()
														.then(function () {
															o.portalAd
																.show()
																.then(
																	function () {
																		o.logi(
																			'show success'
																		),
																			o.hideBanner(),
																			t &&
																				t();
																	}
																)
																.catch(
																	function (
																		t
																	) {
																		o.loge(
																			'showGamePortal show error:',
																			t
																		),
																			e &&
																				e(),
																			n &&
																				o.createToast(
																					'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
																				);
																	}
																);
														})
														.catch(function (t) {
															o.loge(
																'showGamePortal load error:',
																t
															),
																e && e(),
																n &&
																	o.createToast(
																		'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
																	);
														}))
												: (e && e(),
												  void (
														n &&
														this.createToast(
															'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
														)
												  )))
										: e && e()
								);
							}),
							(e.prototype.destroyGamePortal = function () {
								this.portalAd &&
									(this.portalAd.destroy(),
									(this.portalAd = null));
							}),
							(e.prototype.initGameBanner = function () {
								var t = this;
								window.qg.getSystemInfoSync().platformVersion >=
									1076 &&
									h.AdParams.oppo.gameBanner &&
									window.qg.createGameBannerAd &&
									(this.destroyGameBanner(),
									(this.gameBannerAd =
										window.qg.createGameBannerAd({
											adUnitId: h.AdParams.oppo.gameBanner
										})),
									this.gameBannerAd.onLoad(function () {
										t.logi(
											'\u76d2\u5b50\u6a2a\u5e45\u5e7f\u544a\u52a0\u8f7d\u6210\u529f'
										);
									}),
									this.gameBannerAd.onError(function (e) {
										t.logi(e);
									}));
							}),
							(e.prototype.showGameBanner = function () {
								var t = this;
								this.gameBannerAd || this.initGameBanner(),
									this.gameBannerAd &&
										this.gameBannerAd
											.show()
											.then(function () {
												t.logi('show success');
											})
											.catch(function (e) {
												t.logi(
													'show fail with:' +
														e.errCode +
														',' +
														e.errMsg
												);
											});
							}),
							(e.prototype.hideGameBanner = function () {
								this.gameBannerAd && this.gameBannerAd.hide();
							}),
							(e.prototype.destroyGameBanner = function () {
								this.gameBannerAd &&
									(this.gameBannerAd.destroy(),
									(this.gameBannerAd = null));
							}),
							(e.prototype.showAddDesktop = function (t, e) {
								if (
									!this.addIconNode ||
									void 0 === this.addIconNode ||
									!cc.isValid(this.addIconNode.node)
								) {
									var n = cc.instantiate(
										d.default.getRes(
											'gx/prefab/add_icon',
											cc.Prefab
										)
									);
									(this.addIconNode =
										n.getComponent('Gx_add_icon')),
										this.addIconNode &&
											this.addIconNode.show(t, e);
								}
							}),
							(e.prototype.hasAddDesktop = function (t, e, n) {
								var o = this;
								this.platformVersion() >= 1044 &&
								window.qg.hasShortcutInstalled
									? window.qg.hasShortcutInstalled({
											success: function (n) {
												o.logi(
													' hasShortcutInstalled ' +
														(n
															? 'has add'
															: 'can add')
												),
													0 == n
														? t && t()
														: e && e();
											},
											fail: function (t) {
												o.loge(
													' hasShortcutInstalled error: ' +
														JSON.stringify(t)
												),
													n && n();
											},
											complete: function () {}
									  })
									: n && n();
							}),
							(e.prototype.addDesktop = function (t, e, n) {
								var o = this;
								void 0 === n && (n = !0),
									this.platformVersion() >= 1040 &&
									window.qg.installShortcut
										? window.qg.installShortcut({
												success: function () {
													setTimeout(function () {
														o.hasAddDesktop(
															function () {
																e && e();
															},
															function () {
																t && t();
															}
														);
													}, 1e3);
												},
												fail: function (t) {
													o.loge(
														' installShortcut error: ' +
															JSON.stringify(t)
													),
														e && e(),
														n &&
															window.qg.showToast(
																{
																	title: '\u8bf7\u7a0d\u540e\u518d\u8bd5',
																	icon: 'none'
																}
															);
												}
										  })
										: e && e();
							}),
							(e.prototype.login = function (t, e) {
								this.platformVersion() >= 1040 &&
									window.qg.login &&
									window.qg.login({
										success: function (e) {
											t && t(e);
										},
										fail: function (t) {
											e && e(t);
										}
									});
							}),
							(e.prototype.reportAdClick = function (e) {
								t.prototype.reportAdClick.call(this, e),
									r.default.uploadOcpx('gads');
							}),
							(e.prototype.openGameAd = function () {
								var t = this;
								!r.default.isShenHe &&
									!r.default.inBlockArea &&
									r.default.adConfig.showBanner > 0 &&
									s.default.once(function () {
										t.clickNative();
									}, 1e3 * r.default.adConfig.showBanner);
							}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[OppoAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[OppoAdapter]'], e)
								);
							}),
							(e.prototype.logw = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGW.apply(
									this,
									a(['[OppoAdapter]'], e)
								);
							}),
							e
						);
					})(l.default);
				(n.default = m), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./DataStorage': 'DataStorage',
				'./GxAdParams': 'GxAdParams',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxLabelUtil': 'GxLabelUtil',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils'
			}
		],
		QQAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'd1748kdfvlEsq2gBEzIKbt2', 'QQAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxAudioUtil'),
					s = t('./GxGame'),
					c = t('./GxTimer'),
					d = t('./GxUtils'),
					l = t('./BaseAdapter'),
					u = t('./GxAdParams'),
					h = t('./DataStorage'),
					p = t('./OpenDataUtil'),
					f = t('./GxConstant'),
					m = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.customBanner = null),
								(e.customInter = null),
								(e.blockAdTimer = null),
								(e.interShowCount = 0),
								(e.canshowovervideo = !1),
								(e.canshowovervideo2 = !1),
								(e.isShowingVideo = !1),
								(e.ismailiang = !1),
								(e.appId = ''),
								(e.openId = ''),
								(e._shareToFriendCallback = null),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								var e = this;
								if (!this.isInitAd) {
									this.isInitAd = !0;
									try {
										p.default.initChannel(
											f.default.IS_WECHAT_GAME
												? 'wx'
												: 'qq'
										);
									} catch (o) {}
									if (
										(this.initOpenId(),
										t.prototype.initAd.call(this),
										this.initBanner(),
										this.initVideo(),
										s.default.getLabel('switch'))
									) {
										var n = s.default.getValue('time', 60);
										setTimeout(function () {
											e.canshowovervideo = !0;
										}, 1e3 * n);
									}
									s.default.getLabel('control') &&
										((n = s.default.getValue(
											'contime',
											60
										)),
										setTimeout(function () {
											(e.canshowovervideo2 = !0),
												e.showVideo(function () {},
												'qqGameEnd');
										}, 1e3 * n));
								}
							}),
							(e.prototype.initOpenId = function () {
								var t = this;
								qq.onShareMessageToFriend(function (e) {
									t.logi(
										'\u5b9a\u5411\u5206\u4eab\u7ed3\u679c\uff1a' +
											e.success
									),
										e && e.success
											? t.logi(
													'\u5b9a\u5411\u5206\u4eab\u6210\u529f'
											  )
											: t.logi(
													'\u5b9a\u5411\u5206\u4eab\u5931\u8d25'
											  ),
										t._shareToFriendCallback
											? console.log(
													'\u53ef\u4ee5\u56de\u8c03'
											  )
											: console.log(
													'\u4e0d\u53ef\u4ee5\u56de\u8c03\u4e86'
											  ),
										t._shareToFriendCallback &&
											t._shareToFriendCallback(
												e && e.success
											);
								});
								var e = h.default.getItem('__gx_openId__', '');
								if (e)
									return (
										(this.openId = e),
										this.logi(
											'\u83b7\u53d6\u5230\u7f13\u5b58\u7684openId:' +
												this.openId
										),
										void this.initSubmsg()
									);
								try {
									window.qq
										? (this.appId = u.AdParams.qq.appId)
										: (this.appId = u.AdParams.wx.appId);
									var n = this;
									this.appId
										? (this.logi(
												'\u83b7\u53d6\u5230appid:' +
													this.appId
										  ),
										  qq.login({
												success: function (t) {
													t.code
														? (n.logi(
																'\u83b7\u53d6code\u6210\u529f\uff1a' +
																	t.code
														  ),
														  n.requestGet(
																f.default
																	.Code2SessionUrl +
																	'?appId=' +
																	n.appId +
																	'&code=' +
																	t.code,
																function (t) {
																	n.logi(
																		t.data
																	),
																		1 ==
																		t.data
																			.code
																			? ((n.openId =
																					t.data.data.openid),
																			  n.logi(
																					'\u83b7\u53d6openid\u6210\u529f\uff1a' +
																						n.openId
																			  ),
																			  h.default.setItem(
																					'__gx_openId__',
																					n.openId
																			  ),
																			  n.initSubmsg())
																			: n.logw(
																					'\u767b\u5f55\u5931\u8d25\uff01' +
																						t
																							.data
																							.msg
																			  );
																},
																function (t) {
																	n.logw(
																		'\u767b\u5f55\u5931\u8d25\uff01' +
																			t.errMsg
																	),
																		n.logw(
																			t
																		);
																}
														  ))
														: n.logw(
																'\u83b7\u53d6\u767b\u5f55code\u5931\u8d25\uff01' +
																	t.errMsg
														  );
												},
												fail: function (t) {
													n.logw(
														'qq login\u5931\u8d25\uff01' +
															t.errMsg
													);
												}
										  }))
										: n.logw(
												'\u83b7\u53d6wx appid\u5931\u8d25\u6216\u8005 GxAdParams\u4e2d\u6ca1\u6709\u914d\u7f6ewx\u6216\u8005 qq\u7684appid'
										  );
								} catch (o) {
									this.logw(o),
										this.logw(
											'\u8bfb\u53d6project.config.json\u5931\u8d25'
										);
								}
							}),
							(e.prototype.initsceneid = function () {
								var t = qq.getLaunchOptionsSync().scene;
								if (u.AdParams.qq.sceneidtest)
									var e = ['2054', '1011'];
								else e = ['2054'];
								for (var n = 0; n <= e.length - 1; n++)
									t == e[n]
										? (console.log(
												'\u662f\u4e70\u91cf\u7528\u6237'
										  ),
										  (this.ismailiang = !0))
										: (console.log(
												'\u662f\u666e\u901a\u7528\u6237'
										  ),
										  (this.ismailiang = !1));
							}),
							(e.prototype.showGameOverAD = function () {
								var t = this;
								if (
									s.default.getLabel('switch') &&
									1 == this.canshowovervideo
								) {
									this.showVideo(function () {}, 'qqGameEnd'),
										(this.canshowovervideo = !1);
									var e = s.default.getValue('time', 60);
									setTimeout(function () {
										t.canshowovervideo = !0;
									}, 1e3 * e);
								}
							}),
							(e.prototype.initNormalBanner = function (t) {
								var e = this;
								if (
									(void 0 === t && (t = !1),
									!(u.AdParams.qq.banner.length <= 0))
								) {
									this.destroyNormalBanner();
									var n = { width: 300 },
										o = qq.getSystemInfoSync(),
										i = o.screenHeight,
										a = o.screenWidth;
									u.AdParams.qq.bannerOnTop
										? ((n.top = 0),
										  a > i && (n.left = a / 4))
										: ((n.top = i - 92),
										  (n.left = (a - 0.92 * a) / 2),
										  (n.width = 0.92 * a)),
										(this.bannerAd = qq.createBannerAd({
											adUnitId: u.AdParams.qq.banner,
											style: n,
											adIntervals: Math.max(
												s.default.adConfig
													.bannerUpdateTime,
												30
											)
										})),
										t &&
											this.bannerAd.onLoad(function () {
												e.bannerAd
													.show()
													.then(function () {
														e.logi(
															'init end banner success'
														);
													})
													.catch(function () {
														e.logi(
															'init end banner error'
														);
													});
											}),
										this.bannerAd.onError(function (t) {
											e.loge(
												'normal banner error: ',
												JSON.stringify(t)
											),
												e.loge(
													'banner \u53c2\u6570\uff1a' +
														u.AdParams.qq.banner
												),
												!t ||
													(30002 != t.errCode &&
														1001 != t.errCode) ||
													(e.logi(
														'\u9500\u6bc1banner'
													),
													e.destroyNormalBanner());
										});
									var r = this;
									this.bannerAd.onResize(function (t) {
										console.log(
											'banner onResize:' + t.width,
											t.height
										),
											console.log(
												'banner onResize:' +
													(a - 0.4 * a) / 2
											),
											r.bannerAd.style.left <
												(a - t.width) / 2 &&
												(r.bannerAd.style.left =
													(a - t.width) / 2),
											u.AdParams.qq.bannerOnTop ||
												(r.bannerAd.style.top =
													i - t.height);
									});
								}
							}),
							(e.prototype.showNormalBanner = function () {
								this.initNormalBanner(!0);
							}),
							(e.prototype.hideNormalBanner = function () {
								this.bannerAd && this.bannerAd.hide();
							}),
							(e.prototype.destroyNormalBanner = function () {
								this.bannerAd &&
									(this.bannerAd.destroy(),
									(this.bannerAd = null));
							}),
							(e.prototype.initBanner = function () {
								t.prototype.initBanner.call(this);
							}),
							(e.prototype.showBanner = function () {
								var t = this;
								this.hideBanner(),
									(this.bannerDelayTimer = c.default.once(
										function () {
											s.default.adConfig
												.bannerUpdateTime > 0 &&
												(null == t.bannerTimer &&
													(t.bannerTimer =
														new c.default()),
												t.bannerTimer &&
													t.bannerTimer.once(
														function () {
															t.showBanner();
														},
														1e3 *
															s.default.adConfig
																.bannerUpdateTime
													)),
												t.showNormalBanner();
										},
										10
									));
							}),
							(e.prototype.hideBanner = function () {
								t.prototype.hideBanner.call(this),
									this.hideNormalBanner(),
									this.destroyCustomBanner();
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								if (
									null != u.AdParams.qq.video &&
									'' != u.AdParams.qq.video
								) {
									this.destroyVideo(),
										this.logi(
											'\u6fc0\u52b1\u53c2\u6570\uff1a' +
												u.AdParams.qq.video
										),
										(this.videoAd =
											qq.createRewardedVideoAd({
												adUnitId: u.AdParams.qq.video
											}));
									var e = this;
									this.videoAd.onLoad(function () {
										e.logi(
											'\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f'
										);
									}),
										this.videoAd.onError(function () {}),
										this.videoAd.onClose(function (n) {
											if (
												(r.default.setMusicVolume(1),
												r.default.setSoundVolume(1),
												n && n.isEnded
													? (e.logi(
															'\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
													  ),
													  t.videocallback &&
															t.videocallback(!0))
													: t.videocallback &&
													  t.videocallback(!1),
												(t.isShowingVideo = !1),
												t.canshowovervideo2 &&
													((t.canshowovervideo2 = !1),
													s.default.getLabel(
														'control'
													)))
											) {
												var o = s.default.getValue(
													'contime',
													60
												);
												setTimeout(function () {
													(t.canshowovervideo2 = !0),
														t.showVideo(
															function () {},
															'qqGameEnd'
														);
												}, 1e3 * o);
											}
											t.videoAd.load();
										}),
										this.videoAd.load();
								}
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(),
									null != this.videoAd
										? this.isShowingVideo ||
										  ((this.videocallback = t),
										  this.videoAd
												.show()
												.then(function () {
													r.default.setMusicVolume(0),
														r.default.setSoundVolume(
															0
														),
														(n.isShowingVideo = !0);
												})
												.catch(function () {
													n.createToast(
														'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
													),
														n.initVideo();
												}))
										: t && t(!0);
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd &&
									(this.videoAd.offLoad(),
									this.videoAd.offError(),
									this.videoAd.offClose()),
									(this.videoAd = null);
							}),
							(e.prototype.showInterstitial = function (t, e) {
								var n = this;
								if (
									null == u.AdParams.qq.inter ||
									0 == u.AdParams.qq.inter.length
								)
									return e && e();
								this.destroyNormalInter(),
									(this.interAd = qq.createInterstitialAd({
										adUnitId: u.AdParams.qq.inter
									}));
								var o = this,
									i = function t() {
										o.logi(
											'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d'
										),
											n.interAd.offLoad(t);
									};
								this.interAd.onLoad(i),
									this.interAd
										.load()
										.then(function () {
											n.logi(
												'\u666e\u901a\u63d2\u5c4f\u52a0\u8f7d\u6210\u529f'
											),
												(n.interShowTime =
													n.get_time()),
												n.interAd
													.show()
													.then(function () {
														n.interAd.onClose(
															function t() {
																o.logi(
																	'\u5173\u95ed\u63d2\u5c4f'
																),
																	o.interAd.offClose(
																		t
																	),
																	e && e();
															}
														),
															t && t();
													})
													.catch(function (t) {
														n.logi(t),
															n.logi(
																'\u666e\u901a\u63d2\u5c4f\u5c55\u793a\u5931\u8d25'
															),
															e && e();
													});
										})
										.catch(function (t) {
											n.interAd.offLoad(i),
												n.logi(
													'\u666e\u901a\u63d2\u5c4f\u52a0\u8f7d\u5931\u8d25' +
														JSON.stringify(t)
												),
												e && e();
										});
							}),
							(e.prototype.destroyNormalInter = function () {
								this.interAd &&
									(this.interAd.offLoad(),
									this.interAd.offError()),
									(this.interAd = null);
							}),
							(e.prototype.showInterstitialNative = function (
								t,
								e,
								n,
								o
							) {
								this.loge(
									'showInterstitialNative \u6ca1\u7528'
								),
									o && o();
							}),
							(e.prototype.hideInterstitialNative = function () {
								t.prototype.hideInterstitialNative.call(this);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								if (
									(void 0 === n && (n = 0),
									this.get_time() - this.interShowTime <=
										1e3 * s.default.adConfig.interTick)
								)
									return e && e();
								setTimeout(
									function () {
										o.hideNativeInterstitial(),
											o.showInterstitial(t, e);
									},
									s.default.isShenHe || s.default.inBlockArea
										? 0
										: 1e3 * n
								);
							}),
							(e.prototype.showOtherNativeInterstitial =
								function (t, e, n) {
									void 0 === n && (n = 0),
										s.default.getLabel('switch')
											? this.showNativeInterstitial(
													t,
													e,
													n
											  )
											: (this.logi(
													'\u6807\u7b7e\u6ca1\u5230\u65f6\u95f4'
											  ),
											  e && e());
								}),
							(e.prototype.hideNativeInterstitial = function () {
								t.prototype.hideNativeInterstitial.call(this),
									this.destroyCustomInter();
							}),
							(e.prototype.showNativeIcon = function () {
								this.logi('showNativeIcon\u65e0');
							}),
							(e.prototype.hideNativeIcon = function () {
								t.prototype.hideNativeIcon.call(this);
							}),
							(e.prototype.initQQBlockAd = function (
								t,
								e,
								n,
								o,
								i
							) {
								var a = this;
								if (
									(void 0 === n && (n = !0),
									void 0 === o && (o = ''),
									void 0 === i && (i = 300),
									u.AdParams.qq.block)
								) {
									var r = qq.getSystemInfoSync(),
										s = r.screenHeight,
										d = r.screenWidth;
									(this.blockAd = qq.createBlockAd({
										adUnitId: u.AdParams.qq.block,
										size: 5,
										orientation: 'landscape',
										style: { top: s / 6, left: 10 }
									})),
										null == this.blockAdTimer &&
											(this.blockAdTimer =
												new c.default()),
										this.blockAd.onLoad(function () {
											a.blockAd.show(),
												a.logi(
													'QQ\u6e38\u620f\u79ef\u6728\u5e7f\u544a\u83b7\u53d6\u6210\u529f'
												),
												t && t();
										}),
										this.blockAd.onError(function (t) {
											a.logi(
												'QQ\u6e38\u620f\u79ef\u6728\u5e7f\u544a\u83b7\u53d6\u5931\u8d25'
											),
												a.loge(t),
												a.logi(
													'QQ\u6e38\u620f\u79ef\u6728\u5e7f\u544a\u83b7\u53d6\u5931\u8d25'
												),
												e && e();
										}),
										this.blockAd.onResize(function (t) {
											a.logi('\u6539\u53d8size'),
												(a.blockAd.style.left =
													d - t.width - 10);
										});
								} else e && e();
							}),
							(e.prototype.showQQBlockAd = function (
								t,
								e,
								n,
								o,
								i
							) {
								void 0 === n && (n = !1),
									void 0 === o && (o = ''),
									void 0 === i && (i = 300),
									qq.createBlockAd && u.AdParams.qq.block
										? this.initQQBlockAd(t, e, n, o, i)
										: (e && e(),
										  this.logi(
												'\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API'
										  ));
							}),
							(e.prototype.hideQQBlockAd = function () {
								this.blockAd && this.blockAd.hide(),
									this.blockAdTimer &&
										this.blockAdTimer.clear(),
									(this.blockAdTimer = null);
							}),
							(e.prototype.destroyQQBlockAd = function () {
								this.blockAd &&
									(this.blockAdTimer &&
										this.blockAdTimer.clear(),
									(this.blockAdTimer = null),
									this.blockAd.destroy(),
									(this.blockAd = null));
							}),
							(e.prototype.initQQAppBox = function (t, e, n) {
								void 0 === n && (n = !1);
							}),
							(e.prototype.showQQAppBox = function (t, e) {
								var n = this;
								qq.createAppBox && u.AdParams.qq.box
									? (null == this.appBox &&
											(this.appBox = qq.createAppBox({
												adUnitId: u.AdParams.qq.box
											})),
									  this.appBox
											.load()
											.then(function () {
												n.appBox
													.show()
													.then(function () {
														n.logi(
															'appBox button show success'
														),
															n.appBox.onClose(
																function t() {
																	n.logi(
																		'appbox close'
																	),
																		n.appBox.offClose(
																			t
																		),
																		e &&
																			e();
																}
															);
													})
													.catch(function (t) {
														n.logi(
															'appBox \u5e7f\u544a\u663e\u793a\u5931\u8d25',
															t
														),
															e && e();
													});
											})
											.catch(function (t) {
												(n.appBox = null),
													n.logi(t),
													n.logi(
														'appbox\u52a0\u8f7d\u5931\u8d25'
													),
													e && e();
											}))
									: (e && e(),
									  this.logi(
											'\u6682\u4e0d\u652f\u6301appBox\u76f8\u5173 API'
									  ));
							}),
							(e.prototype.hideQQAppBox = function () {
								this.destroyAppBox();
							}),
							(e.prototype.showGamePortal = function () {
								this.showQQAppBox(
									function () {},
									function () {}
								);
							}),
							(e.prototype.destroyAppBox = function () {
								null != this.appBox &&
									(this.appBox.offClose(),
									this.appBox.destroy()),
									(this.appBox = null);
							}),
							(e.prototype.showAddDesktop = function (t, e) {
								if (
									!this.addIconNode ||
									void 0 === this.addIconNode ||
									!cc.isValid(this.addIconNode.node, !0)
								) {
									var n = cc.instantiate(
										d.default.getRes(
											'gx/prefab/add_icon',
											cc.Prefab
										)
									);
									(this.addIconNode =
										n.getComponent('Gx_add_icon')),
										this.addIconNode &&
											this.addIconNode.show(e);
								}
							}),
							(e.prototype.hasAddDesktop = function (t, e, n) {
								this.platformVersion() >= 1041
									? qq.hasShortcutInstalled({
											success: function (n) {
												n ? e && e() : t && t();
											},
											fail: function () {
												n && n();
											}
									  })
									: (this.logi(
											'\u4e0d\u652f\u6301\u6dfb\u52a0\u684c\u9762'
									  ),
									  n && n());
							}),
							(e.prototype.addDesktop = function (t, e) {
								qq.saveAppToDesktop
									? qq.saveAppToDesktop({
											success: function () {
												t();
											},
											fail: function () {
												e && e();
											}
									  })
									: e && e();
							}),
							(e.prototype.login = function (t, e) {
								this.platformVersion() >= 1040 &&
									qq.login({
										success: function (e) {
											t && t(e);
										},
										fail: function (t) {
											e && e(t);
										}
									});
							}),
							(e.prototype.destroyCustomBanner = function () {
								this.customBanner &&
									this.customBanner.destroy(),
									(this.customBanner = null);
							}),
							(e.prototype.destroyCustomInter = function () {
								this.customInter && this.customInter.destroy(),
									(this.customInter = null);
							}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[QQAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[QQAdapter]'], e)
								);
							}),
							(e.prototype.logw = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGW.apply(
									this,
									a(['[QQAdapter]'], e)
								);
							}),
							(e.prototype.shareMessageToFriend = function (t) {
								console.log('qq\u8bbe\u7f6e\u56de\u8c03'),
									p.default.checkHasOpenData()
										? ((this._shareToFriendCallback = t),
										  t
												? console.log(
														'\u8bbe\u7f6e\u4e86\u56de\u8c03'
												  )
												: console.log(
														'\u6ca1\u6709\u8bbe\u7f6e\u56de\u8c03'
												  ),
										  p.default.shareMessageToFriend())
										: t && t(!1);
							}),
							(e.prototype.requestGet = function (t, e, n) {
								qq.request({
									url: t,
									success: function (t) {
										e && e(t);
									},
									fail: function (t) {
										n && n(t);
									}
								});
							}),
							(e.prototype.getSubIds = function () {
								return u.AdParams.qq.subIds &&
									u.AdParams.qq.subIds.length > 0
									? u.AdParams.qq.subIds
									: [];
							}),
							(e.prototype.initSubmsg = function () {
								for (
									var t = this,
										e = this.getSubIds(),
										n = this,
										o = function (o) {
											var a = e[o];
											i.requestGet(
												f.default.SubmsgBaseUrl +
													'/' +
													(f.default.IS_QQ_GAME
														? 'qq'
														: 'wx') +
													'/checkSub?appId=' +
													u.AdParams.qq.appId +
													'&openId=' +
													i.openId +
													'&tmplId=' +
													a,
												function (e) {
													n.logi(e.data),
														1 == e.data.code
															? e.data.data
																	.subnum > 0
																? t.logi(
																		'\u5df2\u8ba2\u9605\uff1a' +
																			a
																  )
																: (t.logi(
																		'\u672a\u8ba2\u9605\uff1a' +
																			a
																  ),
																  t.waitSubIds.push(
																		a
																  ))
															: (n.logw(
																	'\u83b7\u53d6\u5931\u8d25\uff01' +
																		e.data
																			.msg
															  ),
															  t.waitSubIds.push(
																	a
															  ));
												},
												function (e) {
													n.logw(
														'\u83b7\u53d6\u5931\u8d252\uff01' +
															e.errMsg
													),
														n.logw(e),
														t.waitSubIds.push(a);
												}
											);
										},
										i = this,
										a = 0;
									a < e.length;
									a++
								)
									o(a);
							}),
							(e.prototype.submsg = function (t, e) {
								var n = this;
								this.requestGet(
									f.default.SubmsgBaseUrl +
										'/' +
										(f.default.IS_QQ_GAME ? 'qq' : 'wx') +
										'/subMsg?appId=' +
										u.AdParams.qq.appId +
										'&openId=' +
										this.openId +
										'&tmplId=' +
										t,
									function (t) {
										n.logi(t.data),
											1 == t.data.code
												? (n.logi(
														'\u8ba2\u9605\u6210\u529f'
												  ),
												  e && e(!0))
												: (n.logw(
														'\u8ba2\u9605\u5931\u8d25\uff01' +
															t.data.msg
												  ),
												  e && e(!1));
									},
									function (t) {
										n.logw(
											'\u8ba2\u9605\u5931\u8d252\uff01' +
												t.errMsg
										),
											n.logw(t),
											e && e(!1);
									}
								);
							}),
							(e.prototype.setOpenDataShareCallback = function (
								t
							) {
								this._shareToFriendCallback = t;
							}),
							e
						);
					})(l.default);
				(n.default = m), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./DataStorage': 'DataStorage',
				'./GxAdParams': 'GxAdParams',
				'./GxAudioUtil': 'GxAudioUtil',
				'./GxConstant': 'GxConstant',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils',
				'./OpenDataUtil': 'OpenDataUtil'
			}
		],
		ResManager: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '3f2f94dpJ5PHLlBo0c+Eql1', 'ResManager');
				var n = cc.Class({
					statics: {
						self: null,
						getInstance: function () {
							return null == n.self && (n.self = new n()), n.self;
						}
					},
					properties: { onProgress: function () {} },
					ctor: function () {
						n.self = this;
					},
					init: function () {},
					loadSound: function (t) {
						this.loadAssetsDir('sound', cc.AudioClip).then(
							function (e) {
								t && t(e);
							}
						);
					},
					loadPrefabs: function (t) {
						this.loadAssetsDir('prefab', cc.Prefab).then(function (
							e
						) {
							t && t(e);
						});
					},
					loadTextures: function (t) {
						this.loadAssetsDir('images', cc.SpriteFrame).then(
							function (e) {
								t && t(e);
							}
						);
					},
					loadAssetsDir: function (t, e) {
						var n = this;
						return new Promise(function (o, i) {
							cc.resources.loadDir(
								t,
								e,
								n.onProgress,
								function (t, e) {
									t ? i(t) : o(e);
								}
							);
						});
					},
					loadRes: function (t, e) {
						return new Promise(function (n, o) {
							cc.resources.load(t, e, function (t, e) {
								t ? o(t) : n(e);
							});
						});
					}
				});
				cc._RF.pop();
			},
			{}
		],
		ResUtil: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '96e6eE0CRlOloFdAq9PbKCb', 'ResUtil'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = t('./GxLog'),
					i = (function () {
						function t() {}
						return (
							(t.loadPrefab = function (t, e) {
								cc.resources
									? cc.resources.load(
											t,
											cc.Prefab,
											function (n, o) {
												n &&
													console.error(
														'[gx_game] ' +
															t +
															' loadPrefab Failed' +
															n
													),
													e && e(n, o);
											}
									  )
									: cc.loader
									? cc.loader.loadRes(
											t,
											cc.Prefab,
											function (n, o) {
												n &&
													console.error(
														'[gx_game] ' +
															t +
															' loadPrefab Failed' +
															n
													),
													e && e(n, o);
											}
									  )
									: e && e('no loader', null);
							}),
							(t.loadJsonAsset = function (t, e) {
								cc.resources
									? cc.resources.load(
											t,
											cc.JsonAsset,
											function (n, o) {
												n &&
													console.error(
														'[gx_game] ' +
															t +
															' loadJsonAsset Failed' +
															n
													),
													e && e(n, o);
											}
									  )
									: cc.loader
									? cc.loader.loadRes(
											t,
											cc.JsonAsset,
											function (n, o) {
												n &&
													console.error(
														'[gx_game] ' +
															t +
															' loadJsonAsset Failed' +
															n
													),
													e && e(n, o);
											}
									  )
									: e && e('no loader', null);
							}),
							(t.loadSprite = function (t, e) {
								if (cc.resources)
									cc.resources.load(
										t,
										cc.SpriteFrame,
										function (n, o) {
											n &&
												console.error(
													'[gx_game] ' +
														t +
														' loadSprite Failed' +
														n
												),
												e && e(n, o);
										}
									);
								else if (cc.loader)
									cc.loader.loadRes(
										t,
										cc.SpriteFrame,
										function (n, o) {
											n &&
												console.error(
													'[gx_game] ' +
														t +
														' loadSprite Failed' +
														n
												),
												e && e(n, o);
										}
									);
								else if (window.Laya) {
									var n = window.Laya;
									n.loader.load(
										'gameass/background.png',
										n.Handler.create(this, function (t) {
											console.log('ok'), e && e('', t);
										})
									);
								} else e && e('no loader', null);
							}),
							(t.loadResDir = function (t, e) {
								return new Promise(function (n, i) {
									cc.resources
										? cc.resources.loadDir(
												t,
												e,
												function (e, a) {
													if (e)
														return (
															o.default.e(
																'\u52a0\u8f7d\u5931\u8d25',
																t
															),
															i(e)
														);
													n(a);
												}
										  )
										: cc.loader.loadResDir(
												t,
												e,
												function (e, a) {
													if (e)
														return (
															o.default.e(
																'\u52a0\u8f7d\u5931\u8d25',
																t
															),
															i(e)
														);
													n(a);
												}
										  );
								});
							}),
							(t.loadRemoteSpiteFrame = function (t, e) {
								if (!t.startsWith('http'))
									return (
										o.default.w(
											'\u52a0\u8f7d\u56fe\u7247\u5730\u5740\u4e0d\u5bf9\uff1a' +
												t
										),
										void e(
											'\u52a0\u8f7d\u56fe\u7247\u5730\u5740\u4e0d\u5bf9',
											null
										)
									);
								var n = t.toLowerCase();
								n.endsWith('.jpg') ||
								n.endsWith('.png') ||
								n.endsWith('.gif')
									? cc.assetManager
										? cc.assetManager.loadRemote(
												t,
												function (t, n) {
													e(
														t,
														n
															? new cc.SpriteFrame(
																	n
															  )
															: null
													);
												}
										  )
										: cc.loader.load(t, function (t, n) {
												t && console.log(t),
													e &&
														e(
															t,
															n
																? new cc.SpriteFrame(
																		n
																  )
																: null
														);
										  })
									: cc.assetManager
									? cc.assetManager.loadRemote(
											t,
											{ ext: '.png' },
											function (t, n) {
												e(
													t,
													n
														? new cc.SpriteFrame(n)
														: null
												);
											}
									  )
									: cc.loader.load(
											{ url: t, type: 'png' },
											function (t, n) {
												t && console.log(t),
													e &&
														e(
															t,
															n
																? new cc.SpriteFrame(
																		n
																  )
																: null
														);
											}
									  );
							}),
							t
						);
					})();
				(n.default = i), cc._RF.pop();
			},
			{ './GxLog': 'GxLog' }
		],
		SoundManager: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '0ecf3+/BilKgZEPjQLbTYpC', 'SoundManager');
				var n = cc.Class({
					statics: {
						self: null,
						getInstance: function () {
							return null == n.self && (n.self = new n()), n.self;
						}
					},
					properties: { bgmName: '', bgmId: null, effectId: null },
					ctor: function () {
						n.self = this;
					},
					init: function () {
						console.log('SoundManager init'), (this.bgmName = '');
					},
					playClick: function () {
						this.playEffect('click');
					},
					playEffect: function (t) {
						mgr.Res.loadRes('sound/' + t, cc.AudioClip).then(
							function (t) {
								YYGGames.audioEngine.playSound(t.nativeUrl);
							}
						);
					},
					playBgm: function (t) {
						mgr.Res.loadRes('sound/' + t, cc.AudioClip).then(
							function (t) {
								YYGGames.audioEngine.stopMusic(),
									YYGGames.audioEngine.playMusic(t.nativeUrl);
							}
						);
					},
					stopBgm: function () {
						this.bgmId &&
							(YYGGames.audioEngine.stopMusic(),
							(this.bgmId = null),
							(this.bgmName = ''));
					},
					setBgmVolume: function () {}
				});
				cc._RF.pop();
			},
			{}
		],
		TDSDK: [
			function (t, e, n) {
				'use strict';
				cc._RF.push(e, '9021fHZaMND5bSvMnngFXEd', 'TDSDK'),
					Object.defineProperty(n, '__esModule', { value: !0 });
				var o = (function () {
					function t() {
						(this.logList = []),
							(this.refreshMockDataStatus = 1),
							(this.readLastSessionStatus = 1),
							(this.refreshSessionStatus = 1),
							(this.lastMockData = null),
							(this.pageLeaveTimer = null),
							(this.heartBeat_timer = null),
							(this.fetchList = []),
							(this.initTime = new Date().getTime()),
							(this.pageEnterTime = new Date().getTime()),
							(this.lastPage = null),
							(this.from = null),
							(this.debug = !0),
							(this.inited = !1),
							(this.needInitEvent = !1),
							(this.logPath = ''),
							(this.uploadUrl = ''),
							(this.defaultPageName = 'game'),
							(this.mock_data = {
								action: {},
								device: {
									type: 'mobile',
									deviceId: { tid: '' },
									hardwareConfig: {
										brightness: 100,
										cpu: { coreNum: 4, name: 'cpuName' },
										totalDiskSpace: 1e5,
										manufacture: 'manufacture',
										brand: 'brand',
										model: 'model',
										pixel: '720*1280*1'
									},
									softwareConfig: {
										os: 'osType',
										osVersionName: 'osVersionName',
										osVersionCode: 'osVersionCode',
										language: 'zh',
										locale: 'CN',
										platformVersionName:
											'platformVersionName',
										platformVersionCode:
											'platformVersionCode'
									},
									runtimeConfig: {
										freeDiskSpace: 1e4,
										batteryLevel: 1,
										batteryState: !1
									}
								},
								networks: [
									{
										type: 'wifi',
										available: !1,
										connected: !1
									},
									{
										type: 'cellular',
										available: !1,
										connected: !1,
										current: []
									}
								],
								locations: [{ lat: 100, lng: 30 }],
								appContext: {
									sessionStartTime: 0,
									sessionId: '',
									account: { accountId: '', type: 0 }
								},
								app: {
									appKey: '',
									channel: 'quickapp',
									globalId: 'com.package.name',
									displayName: '',
									versionName: '',
									versionCode: '',
									installTime: ''
								},
								sdk: {
									from: 1,
									version: 1,
									minorVersion: 0,
									build: 9,
									platform: 'quickapp',
									framework: 'quickapp'
								},
								ts: 'xxxxx'
							});
					}
					return (
						(t.getInstance = function () {
							return (
								(null !== this.instance &&
									null != this.instance) ||
									(this.instance = new t()),
								this.instance
							);
						}),
						(t.prototype.initApp = function (t, e, n, o) {
							(this.mock_data.app.globalId = t),
								(this.mock_data.app.displayName = e),
								(this.mock_data.app.versionName = n),
								(this.mock_data.app.versionCode = o);
						}),
						(t.prototype.init = function (t, e, n) {
							var o = this;
							if ((void 0 === n && (n = null), t))
								if (e)
									if (
										(n ||
											console.warn(
												'td openId\u4e3a\u7a7a\u5c06\u9ed8\u8ba4\u751f\u6210'
											),
										this.inited)
									)
										this.log('init end');
									else {
										(this.mock_data.app.appKey = t),
											(this.mock_data.app.channel = e),
											this._setInstallTime(),
											n ||
												(n = this.getItem(
													'deviceId',
													''
												)) ||
												(n = this.uuid(32)),
											this.setItem('deviceId', n),
											(this.defaultPageName = e),
											(this.mock_data.device.deviceId.tid =
												n),
											this.log('this.quickInit called ');
										try {
											if (
												((this.inited = !0),
												(this.needInitEvent = !0),
												this.readLastSession(),
												this._refreshMockData(),
												this.lastMockData &&
													this.lastMockData
														.appContext &&
													this.lastMockData.appContext
														.sessionId &&
													this.lastMockData.appContext
														.sessionStartTime > 0)
											) {
												var i = this.getItem(
													'lastPage',
													''
												);
												if (
													(i &&
														(this.setItem(
															'lastPage',
															''
														),
														(i =
															this._jsonParse(i)),
														(this.lastPage = i)),
													this.lastPage &&
														this.lastPage
															.leaveTime > 0)
												) {
													var a = JSON.parse(
															JSON.stringify(
																this
																	.lastMockData
															)
														),
														r = parseInt(
															(this.lastPage
																.leaveTime -
																this
																	.lastMockData
																	.appContext
																	.sessionStartTime) /
																1e3 +
																''
														);
													console.log(
														'\u4e0a\u62a5 \u4e0a\u6b21\u4f1a\u8bdd\u65f6\u957f\uff1a' +
															r +
															'\u79d2'
													),
														(a.action = {
															domain: 'session',
															name: 'end',
															data: {
																start: this
																	.lastMockData
																	.appContext
																	.sessionStartTime,
																duration: r
															}
														}),
														(a.ts =
															new Date().getTime());
													var s = [];
													s.push(a),
														this.save4Fetch(s);
												} else
													console.log(
														'\u4e0a\u6b21lastPage\u7a7a \u6216\u8005leaveTime\u5c0f\u4e8e\u7b49\u4e8e0'
													);
											} else
												console.log(
													'\u6ca1\u6709\u4e0a\u6b21\u4fdd\u5b58\u7684sessionId\u6216\u8005 session\u5f00\u59cb\u65f6\u95f4'
												);
											this.startNewSession(!0),
												setTimeout(function () {
													o._migrate();
												}, 5e3);
										} catch (i) {
											console.log(
												'\u521d\u59cb\u5316\u5185\u5bb9\u9519\u8bef~~',
												i
											);
										}
										this.updateBasedataInStorage(
											this.mock_data
										),
											this.pageEnter(
												this.defaultPageName
											),
											setInterval(function () {
												o.pageLeave(o.defaultPageName),
													setTimeout(function () {
														o.pageEnter(
															o.defaultPageName
														);
													}, 10);
											}, 5e3),
											setInterval(function () {
												o.reportSession();
											}, 1e4);
									}
								else
									console.error(
										'td tdChannel\u4e3a\u7a7a \u521d\u59cb\u5316td\u5931\u8d25'
									);
							else
								console.error(
									'td appkey\u4e3a\u7a7a   \u521d\u59cb\u5316td\u5931\u8d25'
								);
						}),
						(t.prototype.reportSession = function () {
							if (
								this.mock_data.appContext.sessionStartTime > 0
							) {
								var t = new Date().getTime(),
									e = JSON.parse(
										JSON.stringify(this.mock_data)
									),
									n = parseInt(
										(t -
											this.mock_data.appContext
												.sessionStartTime) /
											1e3 +
											''
									);
								console.log(
									'\u672c\u6b21\u4f1a\u8bdd\u65f6\u957f\uff1a' +
										n +
										'\u79d2'
								),
									(e.action = {
										domain: 'session',
										name: 'end',
										data: {
											start: this.mock_data.appContext
												.sessionStartTime,
											duration: n
										}
									}),
									(e.ts = t);
								var o = [];
								o.push(e),
									this.save4Fetch(o),
									this.startNewSession(!1);
							}
						}),
						(t.prototype.random = function () {
							for (
								var t =
										'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
									e = t.length,
									n = '',
									o = 0;
								o < 12;
								o++
							)
								n += t.charAt(Math.floor(Math.random() * e));
							return n;
						}),
						(t.prototype.uuid = function (t) {
							for (
								var e =
										'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
											''
										),
									n = [],
									o = e.length,
									i = 0;
								i < t;
								i++
							)
								n[i] = e[0 | (Math.random() * o)];
							return n.join('');
						}),
						(t.prototype.setItem = function (t, e) {
							(t = 'td_' + t),
								window.cc
									? cc.sys.localStorage.setItem(t, e)
									: window.Laya
									? Laya.LocalStorage.setItem(t, e)
									: console.warn(
											'td\u4fdd\u5b58\u5931\u8d25'
									  );
						}),
						(t.prototype.getItem = function (t, e) {
							void 0 === e && (e = ''), (t = 'td_' + t);
							var n = '';
							return (
								window.cc
									? (n = cc.sys.localStorage.getItem(t))
									: window.Laya
									? (n = Laya.LocalStorage.getItem(t))
									: console.warn(
											'td\u83b7\u53d6\u5931\u8d25'
									  ),
								n || e
							);
						}),
						(t.prototype.save4Fetch = function (t) {
							console.log('saveFile\u4e86', t),
								t &&
									'object' == typeof t &&
									(Array.isArray(t) || (t = [t]),
									(t = JSON.stringify(t)),
									this.logList.push({
										uri:
											this.logPath +
											'event_' +
											new Date().getTime() +
											Math.random(),
										text: t
									}));
						}),
						(t.prototype.fetch = function () {
							this.log('tdsdk-fetching');
							for (var t = this.logList.length; t > 0; ) {
								var e = this.logList.shift();
								t--;
								var n = new XMLHttpRequest();
								n.open('POST', this.uploadUrl, !0),
									n.setRequestHeader(
										'content-type',
										'application/json'
									),
									(n.onreadystatechange = function () {
										4 == n.readyState &&
											('application/json' ===
											n.getResponseHeader('content-type')
												? JSON.parse(n.responseText)
												: console.log(n.responseText));
									}),
									n.send(e.text);
							}
						}),
						(t.prototype.heartBeat = function () {
							var t = this;
							console.log('\u5f00\u59cb\u5fc3\u8df3'),
								clearInterval(this.heartBeat_timer),
								this.fetch(),
								(this.heartBeat_timer = setInterval(
									function () {
										t.fetch();
									},
									3e3
								));
						}),
						(t.prototype._jsonParse = function (t) {
							var e = null;
							try {
								t && (e = JSON.parse(t));
							} catch (t) {
								console.log(t);
							}
							return e;
						}),
						(t.prototype.readLastSession = function () {
							this.readLastSessionStatus = 2;
							var t = this.getItem('model_base_data', '');
							if (t) {
								if ((t = this._jsonParse(t))) {
									this.lastMockData = t;
									var e = JSON.parse(
										JSON.stringify(t.appContext)
									);
									if (
										e.account &&
										'string' == typeof e.account.type
									)
										try {
											for (var n in this.ProfileType)
												if (
													this.ProfileType[n] ==
													e.account.type
												) {
													e.account.type = n;
													break;
												}
										} catch (t) {}
									this.mock_data.appContext = e;
								} else this.log('no last session data');
								this.readLastSessionStatus = 3;
							} else
								(this.lastMockData = null),
									(this.readLastSessionStatus = 3);
						}),
						(t.prototype._migrate = function () {
							this.log('migrate'), this.log('migrate:no data');
						}),
						(t.prototype.quickDestory = function () {
							clearInterval(this.heartBeat_timer);
						}),
						(t.prototype.log = function (t) {
							this.debug && console.log('tdsdk', t);
						}),
						(t.prototype._setInstallTime = function () {
							var t = new Date().getTime(),
								e = this.getItem('TDSDK_installTime', '');
							e
								? (e = Number(e))
								: this.setItem('TDSDK_installTime', t),
								(this.mock_data.app.installTime = e);
						}),
						(t.prototype._refreshMockData = function () {
							this.refreshMockDataStatus = 3;
						}),
						(t.prototype.handleAppInit = function () {
							var t = JSON.parse(JSON.stringify(this.mock_data));
							(t.action = {
								domain: 'app',
								name: 'init',
								data: { first: null == this.lastMockData }
							}),
								(t.ts = new Date().getTime()),
								this.save4Fetch(t);
						}),
						(t.prototype.handleNeWSession = function () {
							var t = JSON.parse(JSON.stringify(this.mock_data));
							(t.action = {
								domain: 'session',
								name: 'begin',
								data: {
									interval: this.lastPage
										? parseInt(
												(new Date().getTime() -
													this.lastPage.leaveTime) /
													1e3 +
													''
										  )
										: 0
								}
							}),
								(t.ts = new Date().getTime()),
								this.save4Fetch(t);
						}),
						(t.prototype.pageLeave = function (t) {
							try {
								var e;
								clearInterval(this.heartBeat_timer),
									this.inited
										? (this.log('call pageLeave'),
										  (e = {
												name: t,
												leaveTime: new Date().getTime(),
												startTime: this.pageEnterTime
										  }),
										  (this.lastPage = e),
										  this.setItem(
												'lastPage',
												JSON.stringify(e)
										  ),
										  clearTimeout(this.pageLeaveTimer),
										  (this.pageLeaveTimer = setTimeout(
												function () {
													this.refreshSessionStatus = 2;
												},
												100
										  )))
										: console.log(
												'\u6ca1\u6709\u8c03\u7528init\u4e8b\u4ef6'
										  );
							} catch (t) {
								console.log('pageLeave-error:', t);
							}
						}),
						(t.prototype.selfEvent = function (t, e, n, o) {
							var i = this;
							void 0 === e && (e = ''),
								void 0 === n && (n = {}),
								void 0 === o && (o = -100);
							var a = { eventId: t };
							e && (a.label = e),
								n &&
									'object' == typeof n &&
									Object.keys(n).length > 0 &&
									(a.params = n),
								-100 != o && (a.value = o);
							try {
								var r, s;
								this.inited
									? a &&
									  (a.eventId || /0/.test(a.eventId)) &&
									  ((r = {
											ts: new Date().getTime(),
											param: a
									  }),
									  3 === this.refreshMockDataStatus &&
									  3 === this.refreshSessionStatus
											? this._doSelfEvent(r)
											: (s = setInterval(function () {
													3 ==
														i.refreshMockDataStatus &&
														3 ===
															i.refreshSessionStatus &&
														(clearInterval(s),
														i._doSelfEvent(r));
											  }, 50)))
									: console.log(
											'\u6ca1\u6709\u8c03\u7528init\u4e8b\u4ef6'
									  );
							} catch (a) {
								console.log(a);
							}
						}),
						(t.prototype._doSelfEvent = function (t) {
							var e,
								n = t.param,
								o = JSON.parse(JSON.stringify(this.mock_data));
							if (
								((o.action = {
									domain: 'appEvent',
									name: n.eventId || ''
								}),
								(n.label || /0/.test(n.label)) &&
									((o.action.data = o.action.data || {}),
									(o.action.data.eventLabel = n.label)),
								void 0 !== n.value)
							) {
								if (
									'number' != typeof n.value ||
									isNaN(n.value)
								)
									return void console.error(
										'param \u4e2dvalue\u53ea\u80fd\u4e3anumber'
									);
								(o.action.data = o.action.data || {}),
									(o.action.data.value = n.value),
									delete n.value;
							}
							if (n.params) {
								var i;
								(o.action.data = o.action.data || {}),
									(o.action.data.eventParam = {});
								var a = 0;
								for (i in n.params)
									'' !== n.params[i] &&
										((o.action.data.eventParam[i] =
											n.params[i]),
										a++);
								0 == a && delete o.action.data.eventParam;
							}
							var r = 0;
							for (e in o.action.data) r++;
							0 == r && delete o.action.data,
								(o.ts = t.ts),
								this.save4Fetch(o);
						}),
						(t.prototype.pageEnter = function (t) {
							var e = this;
							try {
								var n;
								this.inited
									? (clearTimeout(this.pageLeaveTimer),
									  this.log('call pageEnter'),
									  (this.pageEnterTime =
											new Date().getTime()),
									  3 === this.refreshMockDataStatus &&
									  3 == this.readLastSessionStatus
											? this.sendLastPageLeave(t)
											: (n = setInterval(function () {
													3 ==
														e.refreshMockDataStatus &&
														3 ==
															e.readLastSessionStatus &&
														(clearInterval(n),
														e.sendLastPageLeave(t));
											  }, 50)),
									  this.heartBeat())
									: console.log(
											'\u6ca1\u6709\u8c03\u7528init\u4e8b\u4ef6'
									  );
							} catch (t) {
								console.log('pageEnter_error:', t);
							}
						}),
						(t.prototype.handlePageEnter = function (t) {
							this.log('call handlePageEnter'),
								(this.refreshSessionStatus = 3),
								(this.pageEnterTime = new Date().getTime());
							var e = JSON.parse(JSON.stringify(this.mock_data));
							(e.action = {
								domain: 'page',
								name: 'enter',
								data: {
									name: t,
									startTime: this.pageEnterTime,
									from: ''
								}
							}),
								(e.ts = new Date().getTime()),
								this.from && (e.action.data.from = this.from),
								(this.from = 'fromStateName'),
								this.save4Fetch(e);
						}),
						(t.prototype.sendLastPageLeave = function (t) {
							if (this.lastPage) this.calculateLastPage(t);
							else {
								var e = this.getItem('lastPage', '');
								e
									? (this.setItem('lastPage', ''),
									  (e = this._jsonParse(e)),
									  (this.lastPage = e),
									  this.calculateLastPage(t))
									: (this.startNewSession(!0),
									  this.handlePageEnter(t),
									  (this.lastMockData = this.mock_data));
							}
						}),
						(t.prototype.calculateLastPage = function (t) {
							var e,
								n,
								o = this.lastPage,
								i = new Date().getTime() - o.leaveTime;
							this.log('gap:' + i);
							var a =
								i > 3e4 ? this.lastMockData : this.mock_data;
							null != a &&
								(((n = JSON.parse(JSON.stringify(a))).action = {
									domain: 'page',
									name: 'leave',
									data: {
										name: o.name,
										duration: parseInt(
											(o.leaveTime - o.startTime) / 1e3 +
												''
										),
										startTime: o.startTime,
										from: ''
									}
								}),
								(n.ts = new Date().getTime()),
								(e = []).push(n),
								this.save4Fetch(e)),
								i > 3e4
									? this.startNewSession(!0)
									: (this.needInitEvent &&
											((this.needInitEvent = !1),
											this.handleAppInit()),
									  this.setItem(
											'model_base_data',
											JSON.stringify(this.mock_data)
									  )),
								(this.lastMockData = this.mock_data),
								this.handlePageEnter(t);
						}),
						(t.prototype.startNewSession = function (t) {
							var e = new Date().getTime();
							(this.mock_data.appContext = this.mock_data
								.appContext || {
								sessionStartTime: 0,
								sessionId: '',
								account: { accountId: '', type: 0 }
							}),
								(this.mock_data.appContext.sessionStartTime =
									e),
								(this.mock_data.appContext.sessionId =
									'quickapp-'
										.concat(e + '', '-')
										.concat(this.random())),
								t &&
									((this.needInitEvent = !1),
									this.handleAppInit()),
								this.handleNeWSession(),
								this.setItem(
									'model_base_data',
									JSON.stringify(this.mock_data)
								);
						}),
						(t.prototype.setTDProfile = function (t, e) {
							if (t && 'object' == typeof t)
								if (
									'update' === e ||
									t.accountId ||
									/0{1}/.test(t.accountId)
								)
									if (
										'update' !== e &&
										'number' != typeof t.accountType
									)
										console.warn(
											'accountType\u4e3a\u5fc5\u586b!'
										);
									else {
										var n,
											o = { accountId: '', type: 0 };
										!this.mock_data.appContext.account ||
											('update' != e &&
												t.accountId !=
													this.mock_data.appContext
														.account.accountId) ||
											(o = JSON.parse(
												JSON.stringify(
													this.mock_data.appContext
														.account
												)
											));
										var i = {
												_setProfileId: function (t, e) {
													if (!e && !/0{1}/.test(e))
														return 'accountId\u4e3a\u5fc5\u586b\u5b57\u6bb5\uff01';
													t.accountId = e;
												},
												_setProfileType: function (
													t,
													e
												) {
													if (
														'number' != typeof e ||
														e != e ||
														e < -1 ||
														(e > 6 && e < 11) ||
														e > 20
													)
														return '\u8bf7\u4e0a\u4f20\u6b63\u786e\u7684accountType';
													t.type = e;
												},
												_setName: function (t, e) {
													if ('string' != typeof e)
														return 'account name \u7c7b\u578b\u9519\u8bef';
													t.name = e;
												},
												_setAge: function (t, e) {
													if (
														'number' != typeof e ||
														e != e
													)
														return 'profile age \u7c7b\u578b\u9519\u8bef';
													t.age = e;
												},
												_setGender: function (t, e) {
													if (
														0 !== e &&
														1 !== e &&
														2 !== e
													)
														return 'profile gender \u7c7b\u578b\u9519\u8bef';
													t.gender = e;
												},
												_setProperty: function (
													t,
													e,
													n
												) {
													if (
														('number' == typeof n &&
															n != n) ||
														('string' != typeof n &&
															'number' !=
																typeof n)
													)
														return 'profile property \u7c7b\u578b\u9519\u8bef';
													t[e] = n;
												}
											},
											a = {
												accountId: '_setProfileId',
												accountType: '_setProfileType',
												name: '_setName',
												gender: '_setGender',
												age: '_setAge'
											},
											r = new RegExp('^property[1-9]$');
										for (n in t) {
											var s = t[n],
												c = a[n];
											if (
												!c ||
												('update' === e &&
													'accountId' === n)
											) {
												if (
													r.test(n) ||
													'property10' === n
												) {
													var d = i._setProperty(
														o,
														n,
														s
													);
													if (d)
														return void console.log(
															d
														);
												}
											} else if ((d = i[c](o, s)))
												return void console.log(d);
										}
										(this.mock_data.appContext.account = o),
											('login' != e &&
												'register' != e &&
												'update' != e) ||
												this._genProfileEvent(t, e),
											this.updateBasedataInStorage(
												this.mock_data
											);
									}
								else
									console.warn(
										'accountId \u4e3a\u5fc5\u586b!'
									);
							else
								console.warn(
									'account\u4fe1\u606f\u4e3a\u5fc5\u586b\uff01'
								);
						}),
						(t.prototype.login = function (t) {
							var e,
								n = this;
							3 == this.readLastSessionStatus &&
							3 == this.refreshMockDataStatus
								? this.setTDProfile(t, 'login')
								: (e = setInterval(function () {
										3 == n.readLastSessionStatus &&
											3 == n.refreshMockDataStatus &&
											(clearInterval(e),
											n.setTDProfile(t, 'login'));
								  }, 50));
						}),
						(t.prototype.register = function (t) {
							var e,
								n = this;
							3 == this.readLastSessionStatus &&
							3 == this.refreshMockDataStatus
								? this.setTDProfile(t, 'register')
								: (e = setInterval(function () {
										3 == n.readLastSessionStatus &&
											3 == n.refreshMockDataStatus &&
											(clearInterval(e),
											n.setTDProfile(t, 'register'));
								  }, 50));
						}),
						(t.prototype.updateProfile = function (t) {
							var e,
								n = this;
							3 == this.readLastSessionStatus &&
							3 == this.refreshMockDataStatus
								? this.setTDProfile(t, 'update')
								: (e = setInterval(function () {
										3 == n.readLastSessionStatus &&
											3 == n.refreshMockDataStatus &&
											(clearInterval(e),
											n.setTDProfile(t, 'update'));
								  }, 50));
						}),
						(t.prototype._genProfileEvent = function (t, e) {
							var n = JSON.parse(JSON.stringify(this.mock_data));
							(n.action = {
								domain: 'account',
								name: e,
								data: t
							}),
								(n.ts = new Date().getTime()),
								this.save4Fetch(n);
						}),
						(t.prototype.updateBasedataInStorage = function (t) {
							var e = this.getItem('model_base_data', '');
							e &&
								((e = this._jsonParse(e)),
								(t.device = e.device),
								this.setItem(
									'model_base_data',
									JSON.stringify(t)
								));
						}),
						(t.prototype._isObject = function (t) {
							return t && 'object' == typeof t;
						}),
						(t.prototype._isStrNotEmpty = function (t) {
							return t || /0{1}/.test(t);
						}),
						(t.prototype._isNumber = function (t) {
							return 'number' == typeof t && t == t;
						}),
						(t.prototype._isCurrencyTypeAvailabal = function (t) {
							return t && 'string' == typeof t && 3 === t.length;
						}),
						(t.prototype._checkIapParam = function (t) {
							return this._isObject(t)
								? this._isStrNotEmpty(t.orderId)
									? this._isNumber(t.amount)
										? !!this._isCurrencyTypeAvailabal(
												t.currencyType
										  ) ||
										  (console.warn(
												'\u8bf7\u8f93\u5165\u6b63\u786e\u7684currencyType!'
										  ),
										  !1)
										: (console.warn(
												'\u8bf7\u8f93\u5165\u6b63\u786e\u7684amount!'
										  ),
										  !1)
									: (console.warn(
											'\u8bf7\u8f93\u5165\u6b63\u786e\u7684orderId!'
									  ),
									  !1)
								: (console.warn(
										'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u53c2\u6570!'
								  ),
								  !1);
						}),
						(t.prototype.onPlaceOrder = function (t) {
							var e,
								n = this;
							this.inited
								? this._checkIapParam(t) &&
								  (3 === this.refreshMockDataStatus &&
								  3 === this.refreshSessionStatus
										? this._genIapEvent(t, 'placeOrder')
										: (e = setInterval(function () {
												3 == n.refreshMockDataStatus &&
													3 ===
														n.refreshSessionStatus &&
													(clearInterval(e),
													n._genIapEvent(
														t,
														'placeOrder'
													));
										  }, 50)))
								: console.log(
										'\u6ca1\u6709\u8c03\u7528init\u4e8b\u4ef6'
								  );
						}),
						(t.prototype.onOrderPaySucc = function (t) {
							var e,
								n,
								o = this;
							this.inited
								? this._checkIapParam(t) &&
								  ((e = JSON.parse(JSON.stringify(t)))
										.paymentType &&
										this._isStrNotEmpty(e.paymentType) &&
										(e.payType = e.paymentType),
								  delete e.paymentType,
								  3 === this.refreshMockDataStatus &&
								  3 === this.refreshSessionStatus
										? this._genIapEvent(t, 'pay')
										: (n = setInterval(function () {
												3 == o.refreshMockDataStatus &&
													3 ===
														o.refreshSessionStatus &&
													(clearInterval(n),
													o._genIapEvent(t, 'pay'));
										  }, 50)))
								: console.log(
										'\u6ca1\u6709\u8c03\u7528init\u4e8b\u4ef6'
								  );
						}),
						(t.prototype.onCancelOrder = function (t) {
							var e,
								n = this;
							this.inited
								? this._checkIapParam(t) &&
								  (3 === this.refreshMockDataStatus &&
								  3 === this.refreshSessionStatus
										? this._genIapEvent(t, 'cancelOrder')
										: (e = setInterval(function () {
												3 == n.refreshMockDataStatus &&
													3 ===
														n.refreshSessionStatus &&
													(clearInterval(e),
													n._genIapEvent(
														t,
														'cancelOrder'
													));
										  }, 50)))
								: console.log(
										'\u6ca1\u6709\u8c03\u7528init\u4e8b\u4ef6'
								  );
						}),
						(t.prototype._genIapEvent = function (t, e) {
							var n = JSON.parse(JSON.stringify(this.mock_data));
							(n.action = { domain: 'iap', name: e, data: t }),
								(n.ts = new Date().getTime()),
								this.save4Fetch(n);
						}),
						t
					);
				})();
				(n.default = o), cc._RF.pop();
			},
			{}
		],
		TTAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '1050dBcHW1A5bSvQk9iblOB', 'TTAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxTimer'),
					c = t('./GxUtils'),
					d = t('./BaseAdapter'),
					l = t('./GxEnum'),
					u = t('./GxAdParams'),
					h = t('./GxConstant'),
					p = t('./DataStorage'),
					f = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.shareRcorderLayer = null),
								(e.recorderTime = 0),
								(e.gameTime = 0),
								(e.videoReward = 0),
								(e.reported = !1),
								(e.checkInterval = 30),
								(e.openId = ''),
								(e.ecpmObj = {
									targetEcpm: 300,
									gameTime: 10,
									targetVideo: 2
								}),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								this.isInitAd ||
									((this.isInitAd = !0),
									t.prototype.initAd.call(this),
									this.initBanner(),
									this.initVideo(),
									this.initRecorder(),
									this.initAdMonitor());
							}),
							(e.prototype.initAdMonitor = function () {
								var t = this;
								console.log(
									'\u83b7\u53d6\u5230\u7684clickId:' +
										this.getClickId()
								),
									this.getOpenId(function () {
										t.getAdConfig();
									}),
									tt.getEnvInfoSync &&
										(u.AdParams.tt.appId =
											tt.getEnvInfoSync().microapp.appId),
									console.log(
										'\u5f53\u524dappid:' +
											u.AdParams.tt.appId
									),
									setInterval(function () {
										t.checkAdTarget();
									}, 1e3 * this.checkInterval);
							}),
							(e.prototype.getClickId = function () {
								var t = tt.getLaunchOptionsSync().query.clickid;
								return (
									t || (t = p.default.getItem('__clickid__')),
									t
								);
							}),
							(e.prototype.rewardAdEnd = function () {
								this.videoReward++, this.checkAdTarget();
							}),
							(e.prototype.getAdConfig = function () {}),
							(e.prototype.checkAdTarget = function () {}),
							(e.prototype.getOpenId = function (t) {
								var e = this,
									n = p.default.getItem(
										'__gx_openId__',
										null
									);
								if (null != n)
									return (
										console.log(
											'\u83b7\u53d6\u5230\u7f13\u5b58\u7684openid\uff1a' +
												n
										),
										(e.openId = n),
										void (t && t(n))
									);
								window.tt.login({
									force: !0,
									success: function (n) {
										console.log(
											'login \u8c03\u7528\u6210\u529f' +
												n.code +
												' ' +
												n.anonymousCode
										),
											n.code
												? e.requestGet(
														h.default
															.Code2SessionUrl +
															'?appId=' +
															u.AdParams.tt
																.appId +
															'&code=' +
															n.code,
														function (n) {
															e.logi(n.data),
																1 == n.data.code
																	? ((e.openId =
																			n.data.data.openid),
																	  e.logi(
																			'\u83b7\u53d6openid\u6210\u529f\uff1a' +
																				e.openId
																	  ),
																	  p.default.setItem(
																			'__gx_openId__',
																			e.openId
																	  ),
																	  t &&
																			t(
																				e.openId
																			))
																	: (e.logw(
																			'\u767b\u5f55\u5931\u8d25\uff01' +
																				n
																					.data
																					.msg
																	  ),
																	  (e.reported =
																			!1));
														},
														function (t) {
															e.logw(
																'\u767b\u5f55\u5931\u8d25\uff01' +
																	t.errMsg
															),
																e.logw(t),
																(e.reported =
																	!1);
														}
												  )
												: (console.log(
														'\u767b\u5f55\u6ca1code'
												  ),
												  (e.reported = !1));
									},
									fail: function () {
										console.log(
											'login \u8c03\u7528\u5931\u8d25'
										),
											(e.reported = !1);
									}
								});
							}),
							(e.prototype.initBanner = function () {
								var t = this;
								0 != u.AdParams.tt.banner.length &&
									(this.bannerAd && this.destroyBanner(),
									(this.bannerAd = tt.createBannerAd({
										adUnitId: u.AdParams.tt.banner,
										adIntervals: Math.max(
											30,
											r.default.adConfig.bannerUpdateTime
										),
										style: {
											left: 0,
											top: r.default.screenHeight,
											width: r.default.screenWidth / 2
										}
									})),
									this.bannerAd.onLoad(function () {
										console.log(
											' banner \u52a0\u8f7d\u5b8c\u6210'
										);
									}),
									this.bannerAd.onError(function (t) {
										console.log(
											' banner \u5e7f\u544a\u9519\u8bef' +
												JSON.stringify(t)
										);
									}),
									this.bannerAd.onResize(function (e) {
										(t.bannerAd.style.top =
											r.default.screenHeight - e.height),
											(t.bannerAd.style.left =
												(r.default.screenWidth -
													e.width) /
												2);
									}));
							}),
							(e.prototype.showBanner = function () {
								var t = this;
								null == this.bannerAd && this.initBanner(),
									null != this.bannerAd &&
										this.bannerAd
											.show()
											.then(function () {})
											.catch(function () {
												t.initBanner(),
													t.bannerAd.show();
											});
							}),
							(e.prototype.hideBanner = function () {
								this.bannerAd && this.bannerAd.hide();
							}),
							(e.prototype.destroyBanner = function () {
								this.bannerAd && this.bannerAd.destroy(),
									(this.bannerAd = null);
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								null == u.AdParams.tt.video ||
									u.AdParams.tt.video.length <= 0 ||
									(this.destroyVideo(),
									(this.videoAd = tt.createRewardedVideoAd({
										adUnitId: u.AdParams.tt.video
									})),
									this.videoAd.load(),
									this.videoAd.onLoad(function (t) {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d',
											t
										);
									}),
									this.videoAd.onError(function (t) {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891-\u5931\u8d25',
											t
										);
									}),
									this.videoAd.onClose(function (e) {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891\u5173\u95ed'
										),
											t.recorderResume(),
											e && e.isEnded
												? (t.videoReward++,
												  t.checkAdTarget(),
												  console.log(
														'\u6fc0\u52b1\u89c6\u9891\u5b8c\u6210'
												  ),
												  t.videocallback &&
														t.videocallback(!0))
												: t.videocallback &&
												  t.videocallback(!1),
											t.videoAd.load();
									}));
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(),
									null != this.videoAd &&
										((this.videocallback = t),
										this.videoAd
											.show()
											.then(function () {
												n.recorderPause();
											})
											.catch(function () {
												n.videoAd
													.load()
													.then(function () {
														return n.videoAd.show();
													})
													.then(function () {
														n.recorderPause();
													})
													.catch(function () {
														n.videoAd.load(),
															tt.showModal({
																title: '\u6682\u65e0\u5e7f\u544a',
																content:
																	'\u5206\u4eab\u6e38\u620f\u83b7\u53d6\u5956\u52b1\uff1f',
																confirmText:
																	'\u5206\u4eab',
																success:
																	function (
																		t
																	) {
																		t.confirm &&
																			r.default.shareGame(
																				function (
																					t
																				) {
																					n.videocallback &&
																						n.videocallback(
																							t
																						);
																				}
																			);
																	},
																fail: function () {
																	tt.showToast(
																		{
																			title: '\u6682\u65e0\u5e7f\u544a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5',
																			icon: 'none'
																		}
																	),
																		n.videocallback &&
																			n.videocallback(
																				!1
																			);
																}
															});
													});
											}));
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd && this.videoAd.destroy(),
									(this.videoAd = null);
							}),
							(e.prototype.showInterstitial = function (t, e) {
								var n = this;
								if (
									!tt.createInterstitialAd ||
									null == u.AdParams.tt.inter ||
									u.AdParams.tt.inter.length <= 0
								)
									return e && e();
								this.destroyNormalInter(),
									(this.interAd = tt.createInterstitialAd({
										adUnitId: u.AdParams.tt.inter
									})),
									this.interAd &&
										this.interAd.onLoad(function () {
											console.log(
												'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d'
											),
												t && t();
										}),
									this.interAd &&
										this.interAd.onError(function (t) {
											console.log(
												'show inter err' +
													JSON.stringify(t)
											),
												n.destroyNormalInter();
										}),
									this.interAd &&
										this.interAd.onClose(function () {
											n.recorderResume(),
												e && e(),
												n.destroyNormalInter();
										}),
									this.interAd &&
										this.interAd.load().then(function () {
											n.interAd.show().then(function () {
												n.recorderPause(),
													n.hideBanner(),
													(n.interShowTime =
														n.get_time());
											});
										});
							}),
							(e.prototype.destroyNormalInter = function () {
								this.interAd && this.interAd.destroy(),
									(this.interAd = null);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								void 0 === n && (n = 0),
									this.get_time() - this.interShowTime <=
										1e3 * r.default.adConfig.interTick ||
										(this.hideNativeInterstitial(),
										null == this.nativeInterTimer &&
											(this.nativeInterTimer =
												new s.default()),
										this.nativeInterTimer.once(
											function () {
												var n = o.getLocalNativeData(
													l.ad_native_type.inter1
												);
												if (null == n || void 0 === n)
													o.showInterstitial(t, e);
												else {
													var i = cc.instantiate(
														c.default.getRes(
															'gx/prefab/ad/native_interstitial',
															cc.Prefab
														)
													);
													(o.nativeInter =
														i.getComponent(
															'gx_native_interstitial'
														)),
														o.nativeInter &&
															o.nativeInter.show(
																n,
																function () {
																	(o.interShowTime =
																		o.get_time()),
																		o.hideBanner(),
																		t &&
																			t();
																},
																e
															);
												}
											},
											r.default.isShenHe ||
												r.default.inBlockArea
												? 0
												: 1e3 * n
										));
							}),
							(e.prototype.hideNativeInterstitial = function () {
								t.prototype.hideNativeInterstitial.call(this),
									this.destroyNormalInter();
							}),
							(e.prototype.initRecorder = function () {
								var t = this;
								tt.getGameRecorderManager &&
									((this.gameRecorder =
										tt.getGameRecorderManager()),
									this.gameRecorder.onStart(function (e) {
										console.log(
											'\u5f55\u5236\u5f00\u59cb',
											JSON.stringify(e)
										),
											(t.gameRecorderState =
												d.RECORDER_STATE.START),
											(t.recorderTime = t.get_time()),
											(t.videoPath = null);
									}),
									this.gameRecorder.onError(function (e) {
										console.log(
											'\u5f55\u5236\u51fa\u9519',
											JSON.stringify(e)
										),
											(t.gameRecorderState =
												d.RECORDER_STATE.NO);
									}),
									this.gameRecorder.onStop(function (e) {
										(t.gameRecorderState =
											d.RECORDER_STATE.NO),
											(t.videoPath = null),
											e && e.videoPath
												? t.get_time() -
														t.recorderTime >=
												  3e3
													? ((t.videoPath =
															e.videoPath),
													  console.log(
															'\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u6210\u529f\u3002videoID is ' +
																e.videoPath
													  ))
													: console.log(
															'\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u5931\u8d25\u3002\u5f55\u5c4f\u65f6\u95f4<3s'
													  )
												: console.log(
														'\u5f55\u5c4f\u505c\u6b62\uff0c\u5f55\u5236\u5931\u8d25'
												  ),
											t.onRecoderStop &&
												t.onRecoderStop(
													null != t.videoPath
												);
									}),
									this.gameRecorder.onPause(function () {
										console.log('\u6682\u505c\u5f55\u5236'),
											(t.gameRecorderState =
												d.RECORDER_STATE.PAUSE);
									}),
									this.gameRecorder.onResume(function () {
										console.log('\u7ee7\u7eed\u5f55\u5236'),
											(t.gameRecorderState =
												d.RECORDER_STATE.RESUME);
									}));
							}),
							(e.prototype.recorderPause = function () {
								this.gameRecorder &&
									this.gameRecorderState ==
										d.RECORDER_STATE.START &&
									this.gameRecorder.pause();
							}),
							(e.prototype.recorderResume = function () {
								this.gameRecorder &&
									this.gameRecorderState ==
										d.RECORDER_STATE.PAUSE &&
									this.gameRecorder.resume();
							}),
							(e.prototype.recorderStart = function () {
								this.gameRecorder &&
									this.gameRecorderState ==
										d.RECORDER_STATE.NO &&
									this.gameRecorder &&
									this.gameRecorder.start({ duration: 300 });
							}),
							(e.prototype.recorderStop = function (t) {
								this.gameRecorder &&
									this.gameRecorderState !=
										d.RECORDER_STATE.NO &&
									((this.onRecoderStop = t),
									this.gameRecorder &&
										this.gameRecorder.stop());
							}),
							(e.prototype.shareRecorder = function (t, e) {
								var n = this;
								if (
									null == this.gameRecorder ||
									null == this.videoPath
								)
									return (
										this.createToast(
											'\u5206\u4eab\u5931\u8d25'
										),
										e && e()
									);
								tt.shareAppMessage({
									channel: 'video',
									query: '',
									title: u.AdParams.tt.gameName,
									desc: u.AdParams.tt.gameName,
									extra: {
										videoPath: this.videoPath,
										videoTopics: [u.AdParams.tt.gameName],
										hashtag_list: [u.AdParams.tt.gameName]
									},
									success: function () {
										console.log(
											'\u5206\u4eab\u89c6\u9891\u6210\u529f'
										),
											t && t(),
											(n.onRecoderStop = null),
											(n.videoPath = null);
									},
									fail: function (t) {
										console.log(
											'\u5206\u4eab\u89c6\u9891\u5931\u8d25',
											t
										),
											e && e(),
											t.errMsg.search(/short/gi) > -1
												? n.createToast(
														'\u5206\u4eab\u5931\u8d25'
												  )
												: t.errMsg.search(/cancel/gi) >
												  -1
												? n.createToast(
														'\u53d6\u6d88\u5206\u4eab'
												  )
												: n.createToast(
														'\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01'
												  );
									}
								});
							}),
							(e.prototype.showGamePortal = function () {
								if ('ios' !== tt.getSystemInfoSync().platform) {
									for (
										var t = [],
											e = 0,
											n = r.default.recommedList;
										e < n.length;
										e++
									) {
										var o = n[e];
										t.push({
											appId: o,
											query: '',
											extraData: {}
										});
									}
									t.length > 0
										? tt.showMoreGamesModal({
												appLaunchOptions: t,
												success: function (t) {
													console.log(
														'success',
														t.errMsg
													);
												},
												fail: function (t) {
													console.log(
														'fail',
														t.errMsg
													);
												}
										  })
										: this.createToast(
												'\u6682\u65e0\u5e7f\u544a\uff01'
										  );
								}
							}),
							(e.prototype.showRecorderLayer = function () {
								console.warn('//TODO   show recorderLayer'),
									null != this.shareRcorderLayer &&
										void 0 !== this.shareRcorderLayer &&
										cc.isValid(
											this.shareRcorderLayer.node,
											!0
										);
							}),
							(e.prototype.requestGet = function (t, e, n) {
								tt.request({
									url: t,
									success: function (t) {
										e && e(t);
									},
									fail: function (t) {
										n && n(t);
									}
								});
							}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[TTAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[TTAdapter]'], e)
								);
							}),
							(e.prototype.logw = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGW.apply(
									this,
									a(['[TTAdapter]'], e)
								);
							}),
							(e.prototype.ttReport = function () {
								var t = this;
								p.default.getItem('tt_event_active'),
									this.sendToTAQ('active', function (e) {
										e
											? (console.log(
													'\u4e0a\u62a5\u6fc0\u6d3b\u6210\u529f'
											  ),
											  p.default.setItem(
													'__clickid__',
													t.getClickId()
											  ),
											  p.default.setItem(
													'tt_event_active',
													'success'
											  ),
											  p.default.getItem(
													'tt_install_time'
											  ) ||
													p.default.setItem(
														'tt_install_time',
														new Date().valueOf() +
															''
													))
											: console.log(
													'\u4e0a\u62a5\u6fc0\u6d3b\u5931\u8d25'
											  );
									});
								var e = p.default.getItem('tt_install_time');
								e = e ? parseInt(e) : new Date().valueOf();
								var n = new Date(
										new Date(e).toLocaleDateString()
									).valueOf(),
									o = new Date().valueOf() - n,
									i = Math.floor(o / 24 / 60 / 60 / 1e3);
								if (i >= 1 && i <= 6) {
									var a = [
										'next_day_open',
										'retention_3d',
										'retention_4d',
										'retention_5d',
										'retention_6d',
										'retention_7d'
									][i - 1];
									p.default.getItem('tt_event_' + a),
										console.log(
											'\u4e0a\u62a5\u4e8b\u4ef6\uff1a' + a
										),
										this.sendToTAQ(a, function (t) {
											t
												? (console.log(
														'\u4e0a\u62a5\u4e8b\u4ef6\uff1a' +
															a +
															':\u6210\u529f'
												  ),
												  p.default.setItem(
														'tt_event_' + a,
														'success'
												  ))
												: console.log(
														'\u4e0a\u62a5\u4e8b\u4ef6\uff1a' +
															a +
															':\u5931\u8d25'
												  );
										});
								} else
									console.log(
										'\u4f20\u7684number\u4e0d\u80fd\u7528\uff1a' +
											i
									);
							}),
							(e.prototype.sendToTAQ = function () {}),
							(e.prototype.addDesktop = function (t) {
								tt.addShortcut({
									success: function () {
										t && t();
									},
									fail: function (t) {
										console.log(
											'\u6dfb\u52a0\u684c\u9762\u5931\u8d25',
											t.errMsg
										);
									}
								});
							}),
							(e.prototype.hasAddDesktop = function (t, e) {
								tt.checkShortcut({
									success: function (t) {
										console.log(
											'\u68c0\u67e5\u5feb\u6377\u65b9\u5f0f',
											t.status
										),
											t.status.exist &&
												(console.log(
													'\u9690\u85cf\u684c\u9762'
												),
												e && e());
									},
									fail: function (t) {
										console.log(
											'\u68c0\u67e5\u5feb\u6377\u65b9\u5f0f\u5931\u8d25',
											t.errMsg
										);
									}
								});
							}),
							e
						);
					})(d.default);
				(n.default = f), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./DataStorage': 'DataStorage',
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils'
			}
		],
		Utils: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '7ca9fGXvtZMYrO0B/rGy7u1', 'Utils'),
					(window.Utils = {
						createArray: function (t, e) {
							for (var n = [], o = 0; o < t; o++) n[o] = e;
							return n;
						},
						shuffle: function (t) {
							var e, n, o;
							for (o = t.length; o; o--)
								(e = Math.floor(Math.random() * o)),
									(n = t[o - 1]),
									(t[o - 1] = t[e]),
									(t[e] = n);
							return t;
						},
						RandomInt: function (t, e) {
							return (
								(t = Math.ceil(t)),
								(e = Math.floor(e)),
								Math.floor(Math.random() * (e - t + 1)) + t
							);
						},
						RandomDouble: function (t, e) {
							return Math.random() * (e - t + 1) + t;
						},
						RandomBCFInt: function (t, e, n) {
							for (
								var o = new Array(), i = new Array(), a = t;
								a <= e;
								a++
							)
								o[a] = a;
							for (var r = 0; r < n; r++) {
								var s = Utils.RandomInt(0, o.length - 1);
								i.push(o[s]), o.splice(s, 1);
							}
							return i;
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		VivoAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'cf181GJSAFGM6/cu3LXQk34', 'VivoAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxAudioUtil'),
					s = t('./GxGame'),
					c = t('./GxTimer'),
					d = t('./GxUtils'),
					l = t('./BaseAdapter'),
					u = t('./GxEnum'),
					h = t('./GxAdParams'),
					p = t('./GxLabelUtil'),
					f = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.customBanner = null),
								(e.customInter = null),
								(e.portalAdTimer = null),
								(e.interShowCount = 0),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								this.isInitAd ||
									((this.isInitAd = !0),
									t.prototype.initAd.call(this),
									this.initBanner(),
									this.initNormalBanner(),
									this.initVideo(),
									this.initNativeAd(),
									this.initGamePortal(),
									this.initLLCC());
							}),
							(e.prototype.initLLCC = function () {
								var t = this,
									e = p.default
										.getInstance()
										.getValue('lc', 30);
								setTimeout(function () {
									p.default.getInstance().getLabel('lc') &&
										t.privateShowInter(
											function () {},
											function () {
												t.initLLCC();
											}
										);
								}, 1e3 * e);
							}),
							(e.prototype.initNormalBanner = function () {
								var t = this;
								if (
									!(
										this.platformVersion() < 1031 ||
										h.AdParams.vivo.banner.length <= 0
									)
								) {
									this.destroyNormalBanner();
									var e = {};
									if (h.AdParams.vivo.bannerOnTop) {
										e = { top: 0 };
										var n = qg.getSystemInfoSync(),
											o = n.screenHeight,
											i = n.screenWidth;
										i > o && (e.left = i / 4);
									} else e = {};
									(this.bannerAd = qg.createBannerAd({
										posId: h.AdParams.vivo.banner,
										style: e,
										adIntervals: Math.max(
											s.default.adConfig.bannerUpdateTime,
											30
										)
									})),
										this.bannerAd.onError(function (e) {
											t.loge(
												'normal banner error: ',
												JSON.stringify(e)
											),
												e &&
													30002 == e.errCode &&
													(t.logi(
														'\u9500\u6bc1banner'
													),
													t.destroyNormalBanner());
										});
								}
							}),
							(e.prototype.showNormalBanner = function () {
								var t = this;
								null == this.bannerAd &&
									this.initNormalBanner(),
									null != this.bannerAd &&
										this.bannerAd.show().then(function () {
											t.logi(
												'normal banner show success'
											);
										});
							}),
							(e.prototype.hideNormalBanner = function () {
								this.bannerAd && this.bannerAd.hide(),
									this.destroyNormalBanner();
							}),
							(e.prototype.destroyNormalBanner = function () {
								this.bannerAd &&
									(this.bannerAd.destroy(),
									(this.bannerAd = null));
							}),
							(e.prototype.initBanner = function () {
								t.prototype.initBanner.call(this);
							}),
							(e.prototype.showBanner = function () {
								var t = this;
								this.hideBanner(),
									console.error(
										'\u8fd9\u91cc\u4e0d\u8d70\u5565\u539f\u56e0'
									);
								var e = this.getLocalNativeData(
									u.ad_native_type.banner
								);
								if (
									(s.default.adConfig.bannerUpdateTime > 0 &&
										(null == this.bannerTimer &&
											(this.bannerTimer =
												new c.default()),
										this.bannerTimer &&
											this.bannerTimer.once(function () {
												t.showBanner();
											}, 1e3 *
												s.default.adConfig
													.bannerUpdateTime)),
									null == e || void 0 === e)
								)
									this.showCustomBanner();
								else {
									var n = cc.instantiate(
										d.default.getRes(
											'gx/prefab/ad/native_banner',
											cc.Prefab
										)
									);
									(this.bannerNode =
										n.getComponent('gx_native_banner')),
										this.bannerNode.show(
											e,
											function () {},
											function () {
												t.bannerTimer &&
													t.bannerTimer.clear();
											}
										);
								}
							}),
							(e.prototype.hideBanner = function () {
								t.prototype.hideBanner.call(this),
									this.hideNormalBanner(),
									this.destroyCustomBanner();
							}),
							(e.prototype.initVideo = function (t) {
								var e = this;
								if (
									(void 0 === t && (t = !1),
									!(
										this.platformVersion() < 1041 ||
										null == h.AdParams.vivo.video ||
										'' == h.AdParams.vivo.video
									))
								) {
									this.destroyVideo(),
										(this.videoAd =
											qg.createRewardedVideoAd({
												posId: h.AdParams.vivo.video
											}));
									var n = this;
									this.videoAd.onLoad(function () {
										n.logi(
											'\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f'
										);
									}),
										this.videoAd.onError(function (e) {
											n.logi(
												'\u6fc0\u52b1\u89c6\u9891onerror'
											),
												n.logi(e),
												t &&
													n.createToast(
														'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
													);
										}),
										this.videoAd.onClose(function (t) {
											r.default.setMusicVolume(1),
												r.default.setSoundVolume(1),
												t && t.isEnded
													? (n.logi(
															'\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1'
													  ),
													  e.videocallback &&
															e.videocallback(!0))
													: e.videocallback &&
													  e.videocallback(!1),
												e.videoAd.load();
										}),
										this.videoAd.load();
								}
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								if (
									(void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(!0),
									null == this.videoAd)
								)
									return (
										this.createToast(
											'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
										),
										void (t && t(!1))
									);
								(this.videocallback = t),
									this.videoAd
										.show()
										.then(function () {
											r.default.setMusicVolume(0),
												r.default.setSoundVolume(0);
										})
										.catch(function () {
											n.logi(
												'\u6fc0\u52b1\u89c6\u9891onerror2'
											),
												n.createToast(
													'\u6682\u65e0\u89c6\u9891\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5'
												),
												n.videoAd.load();
										});
							}),
							(e.prototype.createToast = function (t) {
								console.log('toast:' + t),
									qg.showToast({ message: t });
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd &&
									(this.videoAd.offLoad(),
									this.videoAd.offError(),
									this.videoAd.offClose()),
									(this.videoAd = null);
							}),
							(e.prototype.showInterstitial = function (t, e) {
								var n = this;
								if (
									(console.log('\u666e\u901a \u63d2\u5c4f'),
									this.platformVersion() < 1031 ||
										null == h.AdParams.vivo.inter ||
										0 == h.AdParams.vivo.inter.length)
								)
									return e && e();
								this.destroyNormalInter(),
									(this.interAd = qg.createInterstitialAd({
										posId: h.AdParams.vivo.inter
									}));
								var o = this;
								this.interAd.onLoad(function () {
									o.logi(
										'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d'
									),
										t && t();
								}),
									this.interAd.onClose(function () {
										e && e();
									}),
									this.interAd
										.load()
										.then(function () {
											return n.interAd.show();
										})
										.then(function () {
											n.interShowTime = n.get_time();
										})
										.catch(function (t) {
											n.logi(
												'\u666e\u901a\u63d2\u5c4f\u5c55\u793a\u5931\u8d25' +
													JSON.stringify(t)
											),
												e && e();
										});
							}),
							(e.prototype.destroyNormalInter = function () {
								this.interAd &&
									(this.interAd.offLoad(),
									this.interAd.offError()),
									(this.interAd = null);
							}),
							(e.prototype.create_ad = function (t) {
								var e = this;
								return new Promise(function (n) {
									var o = '';
									if (
										(t == u.ad_native_type.native_icon
											? (o = h.AdParams.vivo.native_icon)
											: t == u.ad_native_type.inter1
											? (o = h.AdParams.vivo.native1)
											: t == u.ad_native_type.inter2 &&
											  (o = h.AdParams.vivo.native2),
										e.logi(t, 'posId = ', o),
										'' == o ||
											void 0 === o ||
											null == o ||
											e.is_limit_native_length(t) ||
											e.platformVersion() < 1053)
									)
										return n(null);
									var i = qg.createNativeAd({ posId: o });
									i.onLoad(function n(o) {
										if (
											(e.logi(
												'[gx_game]native data load:'
											),
											o && o.adList)
										) {
											var a = o.adList.pop();
											(a.ad = i),
												(a.type = t),
												e.add_native_data(a),
												e.logi(
													'[gx_game]native data load succ:' +
														JSON.stringify(a)
												),
												i.offLoad(n);
										}
									}),
										i.onError(function t(n) {
											e.logi(
												'[gx_game]native data error: ' +
													JSON.stringify(n),
												'color: red'
											),
												i.offError(t);
										}),
										i.load(),
										setTimeout(n, 1500);
								});
							}),
							(e.prototype.initNativeAd = function () {
								var t = this;
								this.create_ad(u.ad_native_type.banner)
									.then(function () {
										return t.create_ad(
											u.ad_native_type.native_icon
										);
									})
									.then(function () {
										return t.create_ad(
											u.ad_native_type.inter1
										);
									})
									.then(function () {
										return t.create_ad(
											u.ad_native_type.inter2
										);
									})
									.then(function () {
										t.loop_get_native_data();
									});
							}),
							(e.prototype.showInterstitialNative = function (
								t,
								e,
								n,
								o
							) {
								this.hideInterstitialNative();
								var i = this.getLocalNativeData(
									u.ad_native_type.inter1
								);
								if (null == i || void 0 === i) o && o();
								else {
									var a = cc.instantiate(
										d.default.getRes(
											'gx/prefab/ad/native_inner_interstitial',
											cc.Prefab
										)
									);
									(this.innerInter = a.getComponent(
										'gx_native_inner_interstitial'
									)),
										this.innerInter &&
											this.innerInter.show(
												t,
												i,
												e,
												function () {
													n && n();
												},
												o
											);
								}
								this.hideInterstitialNative();
							}),
							(e.prototype.hideInterstitialNative = function () {
								t.prototype.hideInterstitialNative.call(this);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								if (
									(void 0 === n && (n = 0),
									!s.default.getLabel('switch'))
								)
									return (
										this.logi('\u9650\u5236\u4e861'),
										void (e && e())
									);
								if (
									this.get_time() - this.interShowTime <=
									1e3 * s.default.adConfig.interTick
								)
									return e && e();
								var i = !1,
									a = s.default.getValue('ic', 0);
								a > 0
									? (-1 == this.icNum &&
											((this.icNum = a),
											setInterval(function () {
												console.log(
													'\u91cd\u7f6eicNum'
												),
													(o.icNum = a);
											}, 9e4)),
									  this.icNum > 0
											? (this.icNum--, (i = !0))
											: console.log('icNum <0'))
									: console.log('ic <0'),
									i &&
										setTimeout(
											function () {
												o.privateShowInter(t, e);
											},
											s.default.isShenHe ||
												s.default.inBlockArea
												? 0
												: 1e3 * n
										);
							}),
							(e.prototype.privateShowInter = function (t, e) {
								var n = this;
								this.hideNativeInterstitial();
								var o = this.getLocalNativeData(
									u.ad_native_type.inter2
								);
								if (null == o || void 0 === o)
									this.showCustomInter(t, e);
								else {
									var i = cc.instantiate(
										d.default.getRes(
											'gx/prefab/ad/native_interstitial',
											cc.Prefab
										)
									);
									(this.nativeInter = i.getComponent(
										'gx_native_interstitial'
									)),
										this.nativeInter &&
											this.nativeInter.show(
												o,
												function () {
													(n.interShowTime =
														n.get_time()),
														t && t();
												},
												e
											);
								}
							}),
							(e.prototype.showOtherNativeInterstitial =
								function (t, e, n) {
									void 0 === n && (n = 0),
										this.showNativeInterstitial(t, e, n);
								}),
							(e.prototype.hideNativeInterstitial = function () {
								t.prototype.hideNativeInterstitial.call(this),
									this.destroyCustomInter();
							}),
							(e.prototype.showNativeIcon = function (t) {
								this.hideNativeIcon();
								var e = u.ad_native_type.native_icon,
									n = h.AdParams.vivo.native_icon;
								n == h.AdParams.vivo.native1
									? (e = u.ad_native_type.inter1)
									: n == h.AdParams.vivo.native2 &&
									  (e = u.ad_native_type.inter2);
								var o = this.getLocalNativeData(e);
								if (null != o && void 0 !== o) {
									var i = cc.instantiate(
										d.default.getRes(
											'gx/prefab/ad/native_icon',
											cc.Prefab
										)
									);
									(this.nativeIcon =
										i.getComponent('gx_native_icon')),
										this.nativeIcon &&
											this.nativeIcon.show(t, o);
								} else
									this.logi(
										'showNativeIcon \u6682\u65e0\u5e7f\u544a\u6570\u636e'
									);
							}),
							(e.prototype.hideNativeIcon = function () {
								t.prototype.hideNativeIcon.call(this);
							}),
							(e.prototype.loop_get_native_data = function () {
								var t =
									this._native_data_cache.length < 5
										? 1e3 * d.default.randomInt(15, 20)
										: 3e4;
								setTimeout(this.initNativeAd.bind(this), t);
							}),
							(e.prototype.initGamePortal = function (
								t,
								e,
								n,
								o,
								i
							) {
								var a = this;
								void 0 === n && (n = !0),
									void 0 === o && (o = ''),
									void 0 === i && (i = 300),
									h.AdParams.vivo.boxPortal
										? ((this.portalAd =
												qg.createBoxPortalAd({
													posId: h.AdParams.vivo
														.boxPortal,
													image: o,
													marginTop: i
												})),
										  null == this.portalAdTimer &&
												(this.portalAdTimer =
													new c.default()),
										  this.portalAd.onShow(function (e) {
												a.logi(
													'\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u5c55\u793a',
													e
												),
													t && t(),
													a.hideBanner();
										  }),
										  this.portalAd.onClose(function () {
												e && e(),
													a.portalAd.isDestroyed ||
														a.portalAd.show();
										  }))
										: e && e();
							}),
							(e.prototype.showGamePortal = function (
								t,
								e,
								n,
								o,
								i
							) {
								var a = this;
								void 0 === n && (n = !0),
									void 0 === o && (o = ''),
									void 0 === i && (i = 300),
									qg.createBoxPortalAd &&
									s.default.adConfig.adunit_portal
										? (null == this.portalAd &&
												this.initGamePortal(
													t,
													e,
													n,
													o,
													i
												),
										  null != this.portalAd
												? this.portalAd
														.show()
														.then(function () {
															a.logi(
																'portalAd button show success'
															),
																a.portalAdTimer &&
																	a.portalAdTimer.clear(),
																(a.portalAdTimer =
																	null);
														})
														.catch(function (r) {
															a.logi(
																'\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25',
																r
															),
																!r ||
																(30002 !=
																	r.code &&
																	40218 !=
																		r.code)
																	? (e && e(),
																	  n &&
																			a.createToast(
																				'\u52aa\u529b\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5~'
																			))
																	: a.portalAdTimer.once(
																			function () {
																				a.destroyGamePortal(),
																					a.showGamePortal(
																						t,
																						e,
																						!1,
																						o,
																						i
																					);
																			},
																			1e4
																	  );
														})
												: this.logi('portalAd is null'))
										: (e && e(),
										  this.logi(
												'\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API'
										  ));
							}),
							(e.prototype.hideGamePortal = function () {
								this.portalAd && this.portalAd.hide(),
									this.portalAdTimer &&
										this.portalAdTimer.clear(),
									(this.portalAdTimer = null);
							}),
							(e.prototype.destroyGamePortal = function () {
								this.portalAd &&
									(this.portalAdTimer &&
										this.portalAdTimer.clear(),
									(this.portalAdTimer = null),
									this.portalAd.destroy(),
									(this.portalAd = null));
							}),
							(e.prototype.showAddDesktop = function (t, e) {
								if (
									!this.addIconNode ||
									void 0 === this.addIconNode ||
									!cc.isValid(this.addIconNode.node, !0)
								) {
									var n = cc.instantiate(
										d.default.getRes(
											'gx/prefab/add_icon',
											cc.Prefab
										)
									);
									(this.addIconNode =
										n.getComponent('Gx_add_icon')),
										this.addIconNode &&
											this.addIconNode.show(e);
								}
							}),
							(e.prototype.hasAddDesktop = function (t, e, n) {
								this.platformVersion() >= 1041
									? qg.hasShortcutInstalled({
											success: function (n) {
												n ? e && e() : t && t();
											},
											fail: function () {
												n && n();
											}
									  })
									: (this.logi(
											'\u4e0d\u652f\u6301\u6dfb\u52a0\u684c\u9762'
									  ),
									  n && n());
							}),
							(e.prototype.addDesktop = function (t, e) {
								var n = this;
								qg.installShortcut
									? qg.installShortcut({
											success: function () {
												setTimeout(function () {
													n.hasAddDesktop(
														function () {
															e && e();
														},
														function () {
															t && t();
														}
													);
												}, 1e3);
											},
											fail: function () {
												e && e();
											}
									  })
									: e && e();
							}),
							(e.prototype.login = function (t, e) {
								this.platformVersion() >= 1040 &&
									qg.login({
										success: function (e) {
											t && t(e);
										},
										fail: function (t) {
											e && e(t);
										}
									});
							}),
							(e.prototype.showCustomBanner = function () {
								var t = this,
									e = h.AdParams.vivo.custom_banner;
								if (
									null == e ||
									void 0 === e ||
									e.length <= 0 ||
									!qg.createCustomAd
								)
									return this.showNormalBanner();
								this.destroyCustomBanner(),
									(this.customBanner = qg.createCustomAd({
										posId: e,
										style: {}
									})),
									this.customBanner
										.show()
										.then(function () {})
										.catch(function (e) {
											t.loge(
												'custom banner show error: ' +
													JSON.stringify(e)
											),
												t.destroyCustomBanner(),
												t.showNormalBanner();
										}),
									this.customBanner.onClose(function e() {
										t.customBanner.offClose(e),
											t.destroyCustomBanner();
									});
							}),
							(e.prototype.destroyCustomBanner = function () {
								this.customBanner &&
									this.customBanner.destroy(),
									(this.customBanner = null);
							}),
							(e.prototype.showCustomInter = function (t, e) {
								var n = this,
									o = h.AdParams.vivo.custom1;
								if (
									(this.interShowCount % 2 == 0
										? ((o = h.AdParams.vivo.custom1) &&
												0 != o.length) ||
										  (o = h.AdParams.vivo.custom2)
										: ((o = h.AdParams.vivo.custom2) &&
												0 != o.length) ||
										  (o = h.AdParams.vivo.custom1),
									this.logi('custom :' + o),
									this.interShowCount++,
									null == o || void 0 === o)
								)
									return (
										this.showInterstitial(t, e), e && e()
									);
								this.destroyCustomInter(),
									(this.customInter = qg.createCustomAd({
										posId: o,
										style: this._getNativeInterStyle()
									})),
									this.customInter
										.show()
										.then(function () {
											if (
												window.cc &&
												!cc.director
													.getScene()
													.getChildByName('BLOCK')
											) {
												var e = new cc.Node();
												(e.width = 2e3),
													(e.height = 2e3),
													(e.name = 'BLOCK'),
													cc.director
														.getScene()
														.addChild(e),
													(e.zIndex =
														cc.macro.MAX_ZINDEX),
													e.addComponent(
														cc.BlockInputEvents
													);
												var n = cc.winSize;
												(e.x = n.width / 2),
													(e.y = n.height / 2);
											}
											t && t();
										})
										.catch(function () {
											if (window.cc) {
												var t = cc.director
													.getScene()
													.getChildByName('BLOCK');
												t && t.destroy();
											}
										}),
									this.customInter.onClose(function t() {
										if (window.cc) {
											var o = cc.director
												.getScene()
												.getChildByName('BLOCK');
											o && o.destroy();
										}
										e && e(),
											n.customInter.offClose(t),
											n.destroyCustomInter();
									}),
									this.customInter.onError(function o(i) {
										n.loge(
											' custom inter error: ' +
												JSON.stringify(i)
										),
											n.customInter.offError(o),
											n.destroyCustomInter(),
											n.showInterstitial(t, e);
									});
							}),
							(e.prototype._getNativeInterStyle = function () {
								var t = qg.getSystemInfoSync(),
									e = t.screenHeight,
									n = t.screenWidth,
									o = {};
								if (n > e) {
									(a = (n / 1080) * 720) > 1280 && (a = 1280),
										(r = (a / 720) * 525) > 720 &&
											(r = 720);
									var i = (e - r) / 2;
									i <= 15 && (i = 50),
										(o = {
											left: (n - a) / 2,
											top: (i = 50)
										});
								} else {
									var a, r;
									(a = (n / 1080) * 720) < 720 && (a = 720),
										a > 1280 && (a = 1280),
										(r = (a / 720) * 525) < 525 &&
											(r = 525),
										r > 720 && (r = 720),
										(o = {
											left: 0,
											top: (e - r) / 2 + 150
										});
								}
								return o;
							}),
							(e.prototype.destroyCustomInter = function () {
								if (window.cc) {
									var t = cc.director
										.getScene()
										.getChildByName('BLOCK');
									t && t.destroy();
								}
								this.customInter && this.customInter.destroy(),
									(this.customInter = null);
							}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[VivoAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[VivoAdapter]'], e)
								);
							}),
							e
						);
					})(l.default);
				(n.default = f), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./GxAdParams': 'GxAdParams',
				'./GxAudioUtil': 'GxAudioUtil',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./GxLabelUtil': 'GxLabelUtil',
				'./GxTimer': 'GxTimer',
				'./GxUtils': 'GxUtils'
			}
		],
		WxAdapter: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'd37295KLTlNKp/nGh/vt/73', 'WxAdapter');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function () {
						for (var t = 0, e = 0, n = arguments.length; e < n; e++)
							t += arguments[e].length;
						var o = Array(t),
							i = 0;
						for (e = 0; e < n; e++)
							for (
								var a = arguments[e], r = 0, s = a.length;
								r < s;
								r++, i++
							)
								o[i] = a[r];
						return o;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxGame'),
					s = t('./GxTimer'),
					c = t('./BaseAdapter'),
					d = t('./GxAdParams'),
					l = t('./WxCustomAd'),
					u = t('./DataStorage'),
					h = t('./OpenDataUtil'),
					p = t('./GxConstant'),
					f = (function (t) {
						function e() {
							var e =
								(null !== t && t.apply(this, arguments)) ||
								this;
							return (
								(e.shareRcorderLayer = null),
								(e.recorderTime = 0),
								(e.customInterAd = null),
								(e.customLeftAd = null),
								(e.customRightAd = null),
								(e._showedCustomInter = !0),
								(e._loadEndCustomInter = !0),
								(e.interCount = 0),
								(e.appId = ''),
								(e.openId = ''),
								(e._shareToFriendCallback = null),
								(e.normalInterShowed = !0),
								e
							);
						}
						return (
							i(e, t),
							(e.getInstance = function () {
								return (
									null == this.instance &&
										(this.instance = new e()),
									this.instance
								);
							}),
							(e.prototype.initAd = function () {
								this.isInitAd ||
									((this.isInitAd = !0),
									h.default.initChannel(
										p.default.IS_WECHAT_GAME ? 'wx' : 'qq'
									),
									this.initOpenId(),
									t.prototype.initAd.call(this),
									(r.default.adConfig.interTick = 0),
									this.initBanner(),
									this.initVideo(),
									this.initCustomInter(),
									this.initCustomLeft(),
									this.initCustomRight(),
									this.initInter(),
									this.initRecorder());
							}),
							(e.prototype.initOpenId = function () {
								var t = this;
								wx.onShareMessageToFriend(function (e) {
									t.logi(
										'\u5b9a\u5411\u5206\u4eab\u7ed3\u679c\uff1a' +
											e.success
									),
										e && e.success
											? t.logi(
													'\u5b9a\u5411\u5206\u4eab\u6210\u529f'
											  )
											: t.logi(
													'\u5b9a\u5411\u5206\u4eab\u5931\u8d25'
											  ),
										t._shareToFriendCallback &&
											t._shareToFriendCallback(
												e && e.success
											),
										(t._shareToFriendCallback = null);
								});
								var e = u.default.getItem('__gx_openId__', '');
								if (e)
									return (
										(this.openId = e),
										this.logi(
											'\u83b7\u53d6\u5230\u7f13\u5b58\u7684openId:' +
												this.openId
										),
										void this.initSubmsg()
									);
								try {
									window.qq
										? (this.appId = d.AdParams.qq.appId)
										: (this.appId = d.AdParams.wx.appId);
									var n = this;
									this.appId
										? (this.logi(
												'\u83b7\u53d6\u5230appid:' +
													this.appId
										  ),
										  wx.login({
												success: function (t) {
													t.code
														? (n.logi(
																'\u83b7\u53d6code\u6210\u529f\uff1a' +
																	t.code
														  ),
														  n.requestGet(
																p.default
																	.Code2SessionUrl +
																	'?appId=' +
																	n.appId +
																	'&code=' +
																	t.code,
																function (t) {
																	n.logi(
																		t.data
																	),
																		1 ==
																		t.data
																			.code
																			? ((n.openId =
																					t.data.data.openid),
																			  n.logi(
																					'\u83b7\u53d6openid\u6210\u529f\uff1a' +
																						n.openId
																			  ),
																			  u.default.setItem(
																					'__gx_openId__',
																					n.openId
																			  ),
																			  n.initSubmsg())
																			: n.logw(
																					'\u767b\u5f55\u5931\u8d25\uff01' +
																						t
																							.data
																							.msg
																			  );
																},
																function (t) {
																	n.logw(
																		'\u767b\u5f55\u5931\u8d25\uff01' +
																			t.errMsg
																	),
																		n.logw(
																			t
																		);
																}
														  ))
														: n.logw(
																'\u83b7\u53d6\u767b\u5f55code\u5931\u8d25\uff01' +
																	t.errMsg
														  );
												},
												fail: function (t) {
													n.logw(
														'wx login\u5931\u8d25\uff01' +
															t.errMsg
													);
												}
										  }))
										: n.logw(
												'\u83b7\u53d6wx appid\u5931\u8d25\u6216\u8005 GxAdParams\u4e2d\u6ca1\u6709\u914d\u7f6ewx\u6216\u8005 qq\u7684appid'
										  );
								} catch (o) {
									this.logw(o),
										this.logw(
											'\u8bfb\u53d6project.config.json\u5931\u8d25'
										);
								}
							}),
							(e.prototype.initBanner = function () {
								var t;
								0 != d.AdParams.wx.banner.length &&
									(this.bannerAd && this.destroyBanner(),
									(t =
										r.default.screenHeight <
										r.default.screenWidth
											? {
													top:
														r.default.screenHeight -
														100,
													left:
														(r.default.screenWidth -
															0.3 *
																r.default
																	.screenWidth) /
														2,
													width:
														0.3 *
														r.default.screenWidth
											  }
											: {
													top:
														r.default.screenHeight -
														125,
													left:
														(r.default.screenWidth -
															0.9 *
																r.default
																	.screenWidth) /
														2,
													width:
														0.9 *
														r.default.screenWidth
											  }),
									(this.bannerAd = wx.createBannerAd({
										adUnitId: d.AdParams.wx.banner,
										adIntervals: Math.max(
											30,
											r.default.adConfig.bannerUpdateTime
										),
										style: t
									})),
									this.bannerAd.onLoad(function () {
										console.log(
											' banner \u52a0\u8f7d\u5b8c\u6210'
										);
									}),
									this.bannerAd.onError(function (t) {
										console.log(
											' banner \u5e7f\u544a\u9519\u8bef' +
												JSON.stringify(t)
										);
									}),
									this.bannerAd.onResize(function () {}));
							}),
							(e.prototype.showBanner = function () {
								var t = this;
								null == this.bannerAd && this.initBanner(),
									null != this.bannerAd &&
										this.bannerAd
											.show()
											.then(function () {})
											.catch(function () {
												t.initBanner(),
													t.bannerAd.show();
											});
							}),
							(e.prototype.hideBanner = function () {
								this.bannerAd && this.bannerAd.hide();
							}),
							(e.prototype.destroyBanner = function () {
								this.bannerAd && this.bannerAd.destroy(),
									(this.bannerAd = null);
							}),
							(e.prototype.initVideo = function () {
								var t = this;
								null == d.AdParams.wx.video ||
									d.AdParams.wx.video.length <= 0 ||
									(this.destroyVideo(),
									(this.videoAd = wx.createRewardedVideoAd({
										adUnitId: d.AdParams.wx.video
									})),
									this.videoAd.load(),
									this.videoAd.onLoad(function (t) {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d',
											t
										);
									}),
									this.videoAd.onError(function (t) {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891-\u5931\u8d25',
											t
										);
									}),
									this.videoAd.onClose(function (e) {
										console.log(
											'\u6fc0\u52b1\u89c6\u9891\u5173\u95ed'
										),
											t.recorderResume(),
											e && e.isEnded
												? (console.log(
														'\u6fc0\u52b1\u89c6\u9891\u5b8c\u6210'
												  ),
												  t.videocallback &&
														t.videocallback(!0))
												: t.videocallback &&
												  t.videocallback(!1),
											t.videoAd.load();
									}));
							}),
							(e.prototype.showVideo = function (t, e) {
								var n = this;
								void 0 === e && (e = ''),
									null == this.videoAd && this.initVideo(),
									null != this.videoAd
										? ((this.videocallback = t),
										  this.videoAd
												.show()
												.then(function () {
													n.recorderPause();
												})
												.catch(function () {
													n.videoAd
														.load()
														.then(function () {
															return n.videoAd.show();
														})
														.then(function () {
															n.recorderPause();
														})
														.catch(function () {
															n.initVideo(),
																wx.showToast({
																	title: '\u6682\u65e0\u5e7f\u544a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5',
																	icon: 'none'
																}),
																n.videocallback &&
																	n.videocallback(
																		!1
																	);
														});
												}))
										: t && t(!1);
							}),
							(e.prototype.destroyVideo = function () {
								this.videoAd && this.videoAd.destroy(),
									(this.videoAd = null);
							}),
							(e.prototype.initInter = function () {
								var t = this;
								this.destroyNormalInter(),
									(this.interAd = wx.createInterstitialAd({
										adUnitId: d.AdParams.wx.inter
									})),
									this.interAd &&
										this.interAd.onLoad(function () {
											t.logi(
												'\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d'
											);
										}),
									this.interAd &&
										this.interAd.onError(function (e) {
											t.logi(
												'show inter err' +
													JSON.stringify(e)
											),
												t.destroyNormalInter();
										}),
									this.interAd && this.interAd.load();
							}),
							(e.prototype.showInterstitial = function (t, e) {
								var n = this;
								if (
									!wx.createInterstitialAd ||
									null == d.AdParams.wx.inter ||
									d.AdParams.wx.inter.length <= 0
								)
									return e && e();
								console.log(this.interAd),
									null == this.interAd
										? (this.logi(
												'\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u63d2\u5c4f'
										  ),
										  this.initInter())
										: this.logi(
												'\u4e0d\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u63d2\u5c4f'
										  ),
									this.interAd
										? (this.logi(
												'\u63d2\u5c4f\u4e0d\u7a7a  \u76f4\u63a5 \u663e\u793a'
										  ),
										  this.interAd &&
												this.interAd.onClose(
													function () {
														n.recorderResume(),
															e && e(),
															n.destroyNormalInter(),
															n.initInter();
													}
												),
										  this.interAd
												.show()
												.then(function () {
													n.recorderPause(),
														t && t(),
														n.hideBanner(),
														(n.interShowTime =
															n.get_time());
												})
												.catch(function () {
													e && e(),
														n.destroyNormalInter(),
														n.initInter();
												}))
										: (this.logi(
												'\u63d2\u5c4f\u7a7a \u4e0d\u80fd\u5c55\u793a\u4e86'
										  ),
										  e && e());
							}),
							(e.prototype.destroyNormalInter = function () {
								this.logi('\u9500\u6bc1\u63d2\u5c4f'),
									this.interAd && this.interAd.destroy(),
									(this.interAd = null);
							}),
							(e.prototype.showNativeInterstitial = function (
								t,
								e,
								n
							) {
								var o = this;
								void 0 === n && (n = 0),
									this.get_time() - this.interShowTime <=
										1e3 * r.default.adConfig.interTick ||
										(this.hideNativeInterstitial(),
										null == this.nativeInterTimer &&
											(this.nativeInterTimer =
												new s.default()),
										this.nativeInterTimer.once(
											function () {
												o.interCount++,
													o.interCount % 2 == 1
														? o.showInterstitial(
																t,
																e
														  )
														: o.showCustomInter(
																t,
																e
														  );
											},
											r.default.isShenHe ||
												r.default.inBlockArea
												? 0
												: 1e3 * n
										));
							}),
							(e.prototype.initCustomInter = function () {
								(this.customInterAd = new l.default()),
									this.customInterAd.init(
										d.AdParams.wx.inter_custom,
										l.CustomAdType.Type5x3,
										30
									);
							}),
							(e.prototype.initCustomLeft = function () {
								(this.customLeftAd = new l.default()),
									this.customLeftAd.init(
										d.AdParams.wx.custom_left,
										l.CustomAdType.TypeLeftOne,
										30
									);
							}),
							(e.prototype.initCustomRight = function () {
								(this.customRightAd = new l.default()),
									this.customRightAd.init(
										d.AdParams.wx.custom_right,
										l.CustomAdType.TypeRightOne,
										30
									);
							}),
							(e.prototype.showCustomInter = function (t, e) {
								this.customInterAd &&
									this.customInterAd.show(t, e);
							}),
							(e.prototype.showCustomLeft = function (t, e) {
								this.customLeftAd &&
									this.customLeftAd.show(t, e);
							}),
							(e.prototype.showCustomRight = function (t, e) {
								this.customRightAd &&
									this.customRightAd.show(t, e);
							}),
							(e.prototype.hideCustomInter = function () {
								this.customInterAd && this.customInterAd.hide();
							}),
							(e.prototype.hideCustomLeft = function () {
								this.customLeftAd && this.customLeftAd.hide();
							}),
							(e.prototype.hideCustomRight = function () {
								this.customRightAd && this.customRightAd.hide();
							}),
							(e.prototype.hideNativeInterstitial = function () {
								t.prototype.hideNativeInterstitial.call(this);
							}),
							(e.prototype.initRecorder = function () {}),
							(e.prototype.recorderPause = function () {}),
							(e.prototype.recorderResume = function () {}),
							(e.prototype.recorderStart = function () {}),
							(e.prototype.recorderStop = function () {}),
							(e.prototype.shareRecorder = function (t, e) {
								var n = this;
								if (
									null == this.gameRecorder ||
									null == this.videoPath
								)
									return (
										this.createToast(
											'\u5206\u4eab\u5931\u8d25'
										),
										e && e()
									);
								wx.shareAppMessage({
									channel: 'video',
									query: '',
									title: r.default.shareWord[0] || '',
									desc:
										r.default.shareWord[2] ||
										r.default.shareWord[1] ||
										'',
									extra: {
										videoPath: this.videoPath,
										videoTopics: [r.default.shareWord[2]],
										hashtag_list: [r.default.shareWord[2]]
									},
									success: function () {
										console.log(
											'\u5206\u4eab\u89c6\u9891\u6210\u529f'
										),
											t && t(),
											(n.onRecoderStop = null),
											(n.videoPath = null);
									},
									fail: function (t) {
										console.log(
											'\u5206\u4eab\u89c6\u9891\u5931\u8d25',
											t
										),
											e && e(),
											t.errMsg.search(/short/gi) > -1
												? n.createToast(
														'\u5206\u4eab\u5931\u8d25'
												  )
												: t.errMsg.search(/cancel/gi) >
												  -1
												? n.createToast(
														'\u53d6\u6d88\u5206\u4eab'
												  )
												: n.createToast(
														'\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01'
												  );
									}
								});
							}),
							(e.prototype.showGamePortal = function () {}),
							(e.prototype.showRecorderLayer = function () {}),
							(e.prototype.logi = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOG.apply(
									this,
									a(['[WxAdapter]'], e)
								);
							}),
							(e.prototype.loge = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGE.apply(
									this,
									a(['[WxAdapter]'], e)
								);
							}),
							(e.prototype.logw = function () {
								for (
									var e = [], n = 0;
									n < arguments.length;
									n++
								)
									e[n] = arguments[n];
								t.prototype.LOGW.apply(
									this,
									a(['[WxAdapter]'], e)
								);
							}),
							(e.prototype.shareMessageToFriend = function (t) {
								console.log(
									'\u5fae\u4fe1\u8bbe\u7f6e\u56de\u8c03'
								),
									h.default.checkHasOpenData()
										? ((this._shareToFriendCallback = t),
										  h.default.shareMessageToFriend())
										: t && t(!1);
							}),
							(e.prototype.getSubIds = function () {
								return d.AdParams.wx.subIds &&
									d.AdParams.wx.subIds.length > 0
									? d.AdParams.wx.subIds
									: [];
							}),
							(e.prototype.requestGet = function (t, e, n) {
								wx.request({
									url: t,
									success: function (t) {
										e && e(t);
									},
									fail: function (t) {
										n && n(t);
									}
								});
							}),
							(e.prototype.initSubmsg = function () {
								for (
									var t = this,
										e = this.getSubIds(),
										n = this,
										o = function (o) {
											var a = e[o];
											i.requestGet(
												p.default.SubmsgBaseUrl +
													'/' +
													(p.default.IS_QQ_GAME
														? 'qq'
														: 'wx') +
													'/checkSub?appId=' +
													d.AdParams.wx.appId +
													'&openId=' +
													i.openId +
													'&tmplId=' +
													a,
												function (e) {
													n.logi(e.data),
														1 == e.data.code
															? e.data.data
																	.subnum > 0
																? t.logi(
																		'\u5df2\u8ba2\u9605\uff1a' +
																			a
																  )
																: (t.logi(
																		'\u672a\u8ba2\u9605\uff1a' +
																			a
																  ),
																  t.waitSubIds.push(
																		a
																  ))
															: (n.logw(
																	'\u83b7\u53d6\u5931\u8d25\uff01' +
																		e.data
																			.msg
															  ),
															  t.waitSubIds.push(
																	a
															  ));
												},
												function (e) {
													n.logw(
														'\u83b7\u53d6\u5931\u8d252\uff01' +
															e.errMsg
													),
														n.logw(e),
														t.waitSubIds.push(a);
												}
											);
										},
										i = this,
										a = 0;
									a < e.length;
									a++
								)
									o(a);
							}),
							(e.prototype.submsg = function (t, e) {
								var n = this;
								this.requestGet(
									p.default.SubmsgBaseUrl +
										'/' +
										(p.default.IS_QQ_GAME ? 'qq' : 'wx') +
										'/subMsg?appId=' +
										d.AdParams.wx.appId +
										'&openId=' +
										this.openId +
										'&tmplId=' +
										t,
									function (t) {
										n.logi(t.data),
											1 == t.data.code
												? (n.logi(
														'\u8ba2\u9605\u6210\u529f'
												  ),
												  e && e(!0))
												: (n.logw(
														'\u8ba2\u9605\u5931\u8d25\uff01' +
															t.data.msg
												  ),
												  e && e(!1));
									},
									function (t) {
										n.logw(
											'\u8ba2\u9605\u5931\u8d252\uff01' +
												t.errMsg
										),
											n.logw(t),
											e && e(!1);
									}
								);
							}),
							(e.prototype.setOpenDataShareCallback = function (
								t
							) {
								this._shareToFriendCallback = t;
							}),
							e
						);
					})(c.default);
				(n.default = f), cc._RF.pop();
			},
			{
				'./BaseAdapter': 'BaseAdapter',
				'./DataStorage': 'DataStorage',
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxGame': 'GxGame',
				'./GxTimer': 'GxTimer',
				'./OpenDataUtil': 'OpenDataUtil',
				'./WxCustomAd': 'WxCustomAd'
			}
		],
		WxCustomAd: [
			function (t, e, n) {
				'use strict';
				var o, i;
				cc._RF.push(e, 'f9ec7YstblOuLFag0fMkklh', 'WxCustomAd'),
					cc._RF.push(e, 'f9ec7YstblOuLFag0fMkklh', 'WxCustomAd'),
					Object.defineProperty(n, '__esModule', { value: !0 }),
					(n.CustomAdType = void 0),
					((i = o =
						n.CustomAdType || (n.CustomAdType = {})).TypeLeftOne =
						'TypeLeftOne'),
					(i.TypeRightOne = 'TypeRightOne'),
					(i.Type5x3 = 'Type5x3'),
					(i.Type5x2 = 'Type5x2'),
					(i.TypeMoreBanner = 'TypeMoreBanner');
				var a = (function () {
					function t() {
						(this._isLandscape = !1),
							(this._userClosed = !0),
							(this._adType = ''),
							(this._adUnitId = ''),
							(this._adInstance = null),
							(this._showing = !1),
							(this._style = null),
							(this._refreshTime = 0),
							(this._timer = null),
							(this._closeCallback = null),
							(this._firstLoad = !0),
							(this._showed = !0),
							(this._screenInfo = null),
							(this._loadEnd = !1);
					}
					return (
						(t.prototype.init = function (t, e, n) {
							if (
								(void 0 === n && (n = 60),
								window.wx &&
									(this._screenInfo = wx.getSystemInfoSync()),
								this._screenInfo.screenHeight <
								this._screenInfo.screenWidth
									? (this._isLandscape = !0)
									: (this._isLandscape = !1),
								(this._adType = e),
								(this._adUnitId = t),
								(this._refreshTime = n),
								this._screenInfo &&
									'devtoolsD' != this._screenInfo.platform)
							) {
								var i = {};
								switch (e) {
									case o.TypeLeftOne:
										i = { left: 0, top: 50, width: 375 };
										break;
									case o.TypeRightOne:
										i = {
											left:
												this._screenInfo.screenWidth -
												70,
											top: 50,
											width: 375
										};
										break;
									case o.Type5x3:
										i = this._isLandscape
											? {
													left:
														this._screenInfo
															.screenWidth /
															2 -
														180,
													top: 10,
													width:
														this._screenInfo
															.screenWidth / 5,
													fixed: !1
											  }
											: {
													left: 0,
													top:
														this._screenInfo
															.screenHeight /
															2 -
														230,
													fixed: !1
											  };
										break;
									case o.Type5x2:
										i = {
											left:
												(this._screenInfo.screenWidth -
													360) /
												2,
											top:
												(this._screenInfo.screenHeight -
													188) /
													2 -
												60,
											width: 360
										};
										break;
									case o.TypeMoreBanner:
										i = {
											left:
												(this._screenInfo.screenWidth -
													360) /
												2,
											top:
												this._screenInfo.screenHeight -
												106,
											width: 360
										};
										break;
									default:
										console.error(
											'\u8fd9\u662f\u54ea\u4e2a'
										),
											console.error(
												'\u8fd9\u662f\u54ea\u4e2a'
											),
											console.error(
												'\u8fd9\u662f\u54ea\u4e2a'
											),
											console.error(
												'\u8fd9\u662f\u54ea\u4e2a'
											);
								}
								(this._style = i),
									t && t.length > 0 && this.loadAd();
							} else
								console.log(
									'\u7248\u672c\u4f4e\u4e0d\u521d\u59cb\u5316'
								);
						}),
						(t.prototype.setRefreshTime = function (t) {
							this._refreshTime = t;
						}),
						(t.prototype._onLoadCallback = function () {
							console.log(this._adType + 'loadEnd');
						}),
						(t.prototype._onErrorCallback = function () {
							console.log(this._adType + 'loadError');
						}),
						(t.prototype._onHideCallback = function () {
							this._userClosed &&
								this.setShowStatus(!1, '_onHideCallback'),
								this._adType == o.Type5x3 &&
									(console.log('hide 5x3\u4e86'),
									this._closeCallback &&
										console.log(
											'hide  \u53ef\u4ee5 \u56de\u8c03\u5173\u95ed'
										),
									this._closeCallback &&
										this._closeCallback(!0),
									(this._closeCallback = null),
									this._userClosed && this._reloadAd());
						}),
						(t.prototype._reloadAd = function () {
							this._adInstance &&
								(this._adInstance.offLoad(this._onLoadCallback),
								this._adInstance.offError(
									this._onErrorCallback
								),
								this._adInstance.offClose(
									this._onCloseCallback
								),
								this._adInstance.offHide(this._onHideCallback),
								this._adInstance.destroy(),
								(this._adInstance = null)),
								(this._showed = !0),
								this.loadAd();
						}),
						(t.prototype._onCloseCallback = function () {
							this.setShowStatus(!1, '_onCloseCallback'),
								this._closeCallback &&
									console.log(
										'close \u53ef\u4ee5 \u56de\u8c03\u5173\u95ed'
									),
								console.log(this._adType + ':close'),
								this._closeCallback && this._closeCallback(!0),
								(this._closeCallback = null),
								this._reloadAd();
						}),
						(t.prototype.loadAd = function () {
							var t = this;
							if (
								(null != this._timer &&
									clearTimeout(this._timer),
								this._showed)
							) {
								var e = wx.createCustomAd({
										adUnitId: this._adUnitId,
										style: this._style
									}),
									n = this,
									o = function t() {
										if (e) {
											(n._showed = !1), (n._loadEnd = !0);
											var o = n._showing;
											e.offLoad(t),
												e.offError(i),
												n._adInstance &&
													(n._adInstance.offLoad(
														n._onLoadCallback
													),
													n._adInstance.offError(
														n._onErrorCallback
													),
													n._adInstance.destroy(),
													(n._adInstance = null)),
												(n._adInstance = e),
												n._adInstance.onLoad(
													n._onLoadCallback.bind(n)
												),
												n._adInstance.onError(
													n._onErrorCallback.bind(n)
												),
												n._adInstance.onClose(
													n._onCloseCallback.bind(n)
												),
												n._adInstance.onHide(
													n._onHideCallback.bind(n)
												),
												o && n.show();
										}
										n._refreshTime > 0 &&
											((n._timer = setTimeout(
												function () {
													n.loadAd();
												},
												n._firstLoad
													? 1e3 * n._refreshTime +
															1e3 *
																Math.floor(
																	16 *
																		Math.random() +
																		5
																)
													: 1e3 * n._refreshTime
											)),
											(n._firstLoad = !1));
									},
									i = function i(a) {
										console.log(
											n._adType +
												t._adUnitId +
												'loadAdError:::' +
												JSON.stringify(a)
										),
											e &&
												(e.offLoad(o),
												e.offError(i),
												e.destroy(),
												(e = null)),
											n._refreshTime > 0 &&
												(n._timer = setTimeout(
													function () {
														n.loadAd();
													},
													1e3 *
														(n._refreshTime / 3 +
															Math.floor(
																16 *
																	Math.random() +
																	5
															))
												));
									};
								e.onLoad(o), e.onError(i);
							} else
								this._timer = setTimeout(function () {
									t.loadAd();
								}, 15e3);
						}),
						(t.prototype.show = function (t, e) {
							var n = this;
							void 0 === t && (t = null),
								void 0 === e && (e = null),
								(this._closeCallback = e),
								(this._userClosed = !0),
								(this._showed = !0),
								this._adInstance
									? this._adInstance
											.show()
											.then(function () {
												n.setShowStatus(!0, 'show 1'),
													t && t(!0);
											})
											.catch(function (e) {
												console.log(
													n._adType +
														'\u663e\u793a\u5931\u8d25'
												),
													'the advertisement has shown' ==
													!e.errMsg
														? (console.log(
																JSON.stringify(
																	e
																)
														  ),
														  n.setShowStatus(
																!1,
																'show 2'
														  ))
														: (n._closeCallback &&
																n._closeCallback(
																	!1
																),
														  (n._closeCallback =
																null)),
													t && t(!1);
											})
									: (console.log(
											this._adType +
												'\u5e7f\u544a\u5b9e\u4f8b\u7a7a \u663e\u793a\u5931\u8d25'
									  ),
									  this.setShowStatus(!1, 'show 3'),
									  t && t(!1),
									  this._closeCallback &&
											this._closeCallback(!1),
									  (this._closeCallback = null));
						}),
						(t.prototype.showAndCallback = function (t) {
							var e = this;
							(this._showed = !0),
								this._adInstance
									? (this._adType == o.TypeMoreBanner &&
											(this._adInstance._style =
												this._style),
									  this._adInstance
											.show()
											.then(function () {
												t && t(!0),
													e.setShowStatus(
														!0,
														'showAndCallback 1'
													);
											})
											.catch(function (n) {
												'the advertisement has shown' ==
												!n.errMsg
													? (console.log(
															e._adType +
																'\u663e\u793a\u5931\u8d25'
													  ),
													  console.log(
															JSON.stringify(n)
													  ),
													  e.setShowStatus(
															!1,
															'showAndCallback 2'
													  ),
													  t && t(!1))
													: t && t(!0);
											}))
									: (this.setShowStatus(
											!1,
											'showAndCallback 3'
									  ),
									  t && t(!1));
						}),
						(t.prototype.showDownAndCallback = function (t) {
							var e = this;
							(this._showed = !0),
								this._adInstance
									? (this._adType == o.TypeMoreBanner &&
											(this._adInstance._style = {
												left:
													(this._screenInfo
														.screenWidth -
														0.4 *
															this._screenInfo
																.screenWidth) /
													2,
												top:
													this._screenInfo
														.screenHeight -
													0.2 *
														this._screenInfo
															.screenWidth
											}),
									  this._adInstance
											.show()
											.then(function () {
												e.setShowStatus(
													!0,
													'showDownAndCallback 1'
												),
													t && t(!0);
											})
											.catch(function (n) {
												'the advertisement has shown' ==
												!n.errMsg
													? (console.log(
															e._adType +
																'\u663e\u793a\u5931\u8d25'
													  ),
													  console.log(
															JSON.stringify(n)
													  ),
													  e.setShowStatus(
															!1,
															'showDownAndCallback 2'
													  ),
													  t && t(!1))
													: t && t(!0);
											}))
									: (this.setShowStatus(
											!1,
											'showDownAndCallback 3'
									  ),
									  t && t(!1));
						}),
						(t.prototype.setShowStatus = function (t) {
							(this._showing = t), this._adType, o.TypeMoreBanner;
						}),
						(t.prototype.isShowing = function () {
							return !(
								!this._adInstance || !this._adInstance.isShow()
							);
						}),
						(t.prototype.hide = function () {
							this.setShowStatus(!1, 'hide'),
								(this._userClosed = !1),
								console.log('\u9690\u85cf\u5e7f\u544a'),
								this._adInstance && this._adInstance.hide();
						}),
						(t.prototype.isReady = function () {
							return this._adInstance && this._loadEnd
								? (console.log('\u51c6\u5907\u597d\u4e86'), !0)
								: (console.log('\u6ca1\u51c6\u5907\u597d '),
								  !1);
						}),
						t
					);
				})();
				(n.default = a), cc._RF.pop();
			},
			{}
		],
		YYGplatform: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '8e0d3VKIkZJKaV16mKRcb/j', 'YYGplatform'),
					(window.SOUNDFlag = !0);
				var n,
					o,
					i,
					a,
					r,
					s,
					c,
					d,
					l,
					u,
					h,
					p,
					f = {
						appName: 'Stockings Dilemma',
						appID: 'Stockings-Dilemma'
					},
					m = 0,
					g = !0,
					v = [],
					_ = [],
					y = [],
					A = !1;
				(window.YYGplatform =
					((i = function (t, e) {
						if ('undefined' == typeof YYGGames) {
							var n = document.createElement('script');
							n.setAttribute('type', 'text/javascript'),
								n.setAttribute('src', t),
								document
									.getElementsByTagName('body')[0]
									.appendChild(n),
								e && (n.onload = e);
						} else e();
					}),
					(a = function (t) {
						document.getElementsByTagName('title')[0].innerText = t;
					}),
					(r = function () {
						var t = document.createElement('style');
						(t.innerText =
							'body {overflow: hidden;} #Game {position: absolute;margin: 0;overflow: hidden;width: 720 px; height: 720px;left: 50%;top: 50%;transform: translate(-50%, -50%);}#AdTip {overflow: hidden;word-break: break-all;overflow-wrap: break-word;font-family: Arial;padding: 10px;min-height: 20px;color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0, 0.7);font-size: 18px;width: 90%;opacity: 1;-webkit-transform: 0.5s ease-in, opacity 0.5s ease-in;}.divImage {position: absolute;z-index: 99999;}'),
							document.head.appendChild(t);
					}),
					(s = function (t) {
						var e =
								document.getElementById('GameDiv') ||
								document.getElementById('Game'),
							n = document.createElement('div');
						n.setAttribute('id', t),
							n.setAttribute('class', 'divImage'),
							n.setAttribute(
								'onclick',
								'(()=>{YYGGames.navigate("Loading", "LOGO");})()'
							),
							n.setAttribute(
								'style',
								'width:14%;top: 0.5%;right: 0.5%;'
							);
						var o = document.createElement('img');
						o.setAttribute('width', '100%'),
							o.setAttribute('id', t + 'Image'),
							(o.src =
								'https://h5gamessdk.yyggames.com/sdk/res/puzzle2.png'),
							n.appendChild(o),
							e.appendChild(n);
					}),
					(c = function (t) {
						var e = new cc.Node();
						(e.name = 'GameBox1'),
							(e.width = 165),
							(e.height = 165),
							(e.anchorX = e.anchorY = 0.5),
							(e.x = -100),
							(e.y = 0);
						var n = new cc.Node();
						(n.name = 'item'),
							(n.width = 165),
							(n.height = 165),
							(n.anchorX = n.anchorY = 0.5),
							(n.x = 0),
							(n.y = 0);
						var o = n.addComponent(cc.Sprite);
						(o.sizeMode = 0), (o.spriteFrame = window.di);
						var i = new cc.Node();
						(i.x = 0),
							(i.y = 0),
							(i.width = 150),
							(i.height = 150),
							(i.name = 'Mask');
						var a = i.addComponent(cc.Mask);
						(a.type = cc.Mask.Type.IMAGE_STENCIL),
							(a.spriteFrame = window.di),
							(a.inverted = !1),
							n.addChild(i),
							e.addChild(n);
						var r = new cc.Node();
						(r.name = 'GameBox2'),
							(r.width = 165),
							(r.height = 165),
							(r.anchorX = r.anchorY = 0.5),
							(r.x = 100),
							(r.y = 0);
						var s = new cc.Node();
						(s.name = 'item2'),
							(s.width = 165),
							(s.height = 165),
							(s.anchorX = s.anchorY = 0.5),
							(s.x = 0),
							(s.y = 0);
						var c = s.addComponent(cc.Sprite);
						(c.sizeMode = 0), (c.spriteFrame = window.di);
						var d = new cc.Node();
						(d.x = 0),
							(d.y = 0),
							(d.width = 150),
							(d.height = 150),
							(d.name = 'Mask2');
						var l = d.addComponent(cc.Mask);
						(l.type = cc.Mask.Type.IMAGE_STENCIL),
							(l.spriteFrame = window.di),
							(l.inverted = !1),
							s.addChild(d),
							r.addChild(s);
						var u = new cc.Node();
						return (
							u.addChild(e),
							u.addChild(r),
							(YYGplatform.GameBox = u),
							t.addChild(u),
							console.log('AdNode: ', [e, r]),
							u
						);
					}),
					(d = function (t, e) {
						for (var n = [], i = 0; i < 12; i++) n.push(i);
						var a = n[Math.floor(12 * Math.random())];
						n.splice(a, 1);
						var r = cc.find('item/Mask', t),
							s = new cc.Node();
						r.addChild(s);
						var c = s.addComponent(cc.Sprite);
						(c.sizeMode = 0),
							(c.spriteFrame = new cc.SpriteFrame(y[a])),
							(s.width = 150),
							(s.height = 150),
							s.addComponent(cc.Button),
							s.on('click', function () {
								YYGGames.navigate('MainMenu', 'MORE', o[a].id);
							});
						var d = n[Math.floor(11 * Math.random())],
							l = cc.find('item2/Mask2', e),
							u = new cc.Node();
						l.addChild(u);
						var h = u.addComponent(cc.Sprite);
						(h.sizeMode = 0),
							(h.spriteFrame = new cc.SpriteFrame(y[d])),
							(u.width = 150),
							(u.height = 150),
							u.addComponent(cc.Button),
							u.on('click', function () {
								YYGGames.navigate('MainMenu', 'MORE', o[d].id);
							});
					}),
					(l = function (t) {
						var e = new cc.Node();
						(e.name = 'GameBanner'),
							(e.width = 1405),
							(e.height = 185),
							(e.anchorX = e.anchorY = 0),
							(e.x = -702.5),
							(e.y = -630);
						var n = new cc.Node();
						(n.name = 'New ScrollView'),
							(n.width = 1405),
							(n.height = 185),
							(n.anchorX = n.anchorY = 0),
							(n.x = n.y = 0);
						var o = n.addComponent(cc.Sprite);
						(o.sizeMode = 0), (o.spriteFrame = window.di2);
						var i = new cc.Node();
						(i.name = 'view'),
							(i.width = 1405),
							(i.height = 185),
							(i.anchorX = i.anchorY = 0),
							(i.x = i.y = 0);
						var a = i.addComponent(cc.Mask);
						(a.type = cc.Mask.Type.IMAGE_STENCIL),
							(a.spriteFrame = window.di),
							(a.inverted = !1);
						var r = new cc.Node();
						(r.name = 'content'),
							(r.width = 1405),
							(r.height = 185),
							(r.anchorX = r.anchorY = 0),
							(r.x = r.y = 0);
						var s = new cc.Node();
						(s.name = 'item'),
							(s.anchorX = s.anchorY = 0),
							(s.x = 10),
							(s.y = 20),
							(s.width = 145),
							(s.height = 145);
						var c = new cc.Node();
						(c.x = 72.5),
							(c.y = 72.5),
							(c.width = 145),
							(c.height = 145),
							(c.name = 'Mask'),
							t.addChild(e),
							e.addChild(n),
							n.addChild(i),
							i.addChild(r),
							r.addChild(s),
							s.addChild(c);
						var d = c.addComponent(cc.Mask);
						return (
							(d.type = cc.Mask.Type.IMAGE_STENCIL),
							(d.spriteFrame = window.di),
							(d.inverted = !1),
							(YYGplatform.GameBanner = e),
							e
						);
					}),
					(u = function (t) {
						t &&
							g &&
							(t.x > -(t.width - 360 - 50)
								? (t.x -= 0.5)
								: (t.x = 0));
					}),
					(h = function (t) {
						a(f.appName),
							r(),
							i(
								'https://h5gamessdk.yyggames.com/sdk/YYGGames.js',
								function () {
									var e = this;
									YYGGames.init({
										appName: f.appID,
										channel: 5,
										config: {
											gamedistributionId:
												f.gamedistributionId,
											gamemonetizeId: f.gamemonetizeId
										},
										complete: function () {
											(window.showMetheAuthor =
												function () {
													var t =
														document.createElement(
															'iframe'
														);
													(t.style.display = 'none'),
														document.head.appendChild(
															t
														),
														t.contentWindow.console.log.apply(
															this,
															[
																'%c %c %c YYGGAMES %c%s %c %c ',
																'background: #fb8cb3',
																'background: #d44a52',
																'color: #ffffff; background: #871905',
																'color: #ffffff;background: #871905;',
																'116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103'
																	.split(',')
																	.map(
																		function (
																			t
																		) {
																			return String.fromCharCode(
																				~~t
																			);
																		}
																	)
																	.join(''),
																'background: #d44a52',
																'background: #fb8cb3'
															]
														);
												}),
												document.getElementById(
													'AdTip'
												) &&
													(YYGGames.showTip =
														function (t, e) {
															(e = isNaN(e)
																? 2e3
																: e),
																(document.getElementById(
																	'AdTip'
																).innerHTML =
																	t),
																(document.getElementById(
																	'AdTip'
																).style.display =
																	''),
																setTimeout(
																	function () {
																		document.getElementById(
																			'AdTip'
																		).style.display =
																			'none';
																	},
																	e
																);
														});
											var n = location.href;
											YYGGames.moreGameEnabled &&
											-1 ==
												n.indexOf(
													'gamedistribution.c'
												) &&
											-1 == n.indexOf('gamemonetize.c')
												? p(t)
												: ((A = !0), t()),
												YYGGames.addEventListener(
													YYGGames.events.adDismissed,
													e,
													function () {
														YYGGames.showTip(
															'Pls watch the ad completely, so that you can claim your reward'
														);
													}
												);
										}
									});
								}
							);
					}),
					(p = function (t) {
						(A = !1), s('puzzlegame');
						var e = YYGGames.forgames.slice();
						console.log('forgames', e),
							e.length > 1 &&
								(e.sort(function () {
									return 0.5 - Math.random();
								}),
								(o = e),
								(function n() {
									cc.loader.load(e[m].thumb, function (o, i) {
										o ||
											(y.push(i),
											++m < e.length ? n() : t && t());
									});
								})());
					}),
					{
						init: function (t) {
							cc.loader.load(
								'https://h5gamessdk.yyggames.com/sdk/res/di1.png',
								function (e, n) {
									e ||
										cc.loader.load(
											'https://h5gamessdk.yyggames.com/sdk/res/di2.png',
											function (e, o) {
												if (!e) {
													(window.di =
														new cc.SpriteFrame(n)),
														(window.di2 =
															new cc.SpriteFrame(
																o
															));
													var i =
														new XMLHttpRequest();
													i.open('get', 'cnf.json'),
														i.send(null),
														(i.onload =
															function () {
																if (
																	200 ==
																	i.status
																) {
																	var e =
																		JSON.parse(
																			i.responseText
																		);
																	console.info(
																		'%c cnf: ',
																		'background:#a8edcc',
																		e
																	),
																		(f = e);
																}
																h(t);
															});
												}
											}
										);
								}
							);
						},
						initGameBanner: function (t) {
							var e = l(t);
							if (A) e.active = 0;
							else {
								var i = cc.find('New ScrollView', e);
								_ = [];
								for (var a = 0; a < 12; a++) {
									var r = cc.find('view/content/item', i),
										s = cc.find('view/content', i),
										c = cc.instantiate(r);
									c.x = 10 + 170 * a;
									var d = cc.find('Mask', c),
										h = new cc.Node(),
										p = h.addComponent(cc.Sprite);
									(p.sizeMode = 0),
										(p.spriteFrame = new cc.SpriteFrame(
											y[a]
										)),
										(h.width = 150),
										(h.height = 150),
										d.addChild(h),
										_.push(h),
										v.push(d),
										s.addChild(c);
								}
								console.log('btnArray: ', _);
								for (
									var f = function (t) {
											_[t].addComponent(cc.Button),
												_[t].on('click', function () {
													console.log(
														'btnArray[i]',
														t
													),
														YYGGames.navigate(
															'MainMenu',
															'MORE',
															o[t].id
														);
												}),
												_[t].on(
													'mouseenter',
													function () {
														0 != v.length &&
															((g = !1),
															(v[t].scaleX = 1.1),
															(v[
																t
															].scaleY = 1.1));
													}
												),
												_[t].on(
													'mouseleave',
													function () {
														0 != v.length &&
															((g = !0),
															(v[t].scaleX = 1),
															(v[t].scaleY = 1));
													}
												);
											var e =
												document.getElementById(
													'GameCanvas'
												);
											e &&
												e.addEventListener(
													'mouseout',
													function () {
														0 != v.length &&
															((g = !0),
															(v[t].scaleX = 1),
															(v[t].scaleY = 1));
													}
												);
										},
										m = 0;
									m < _.length;
									m++
								)
									f(m);
								n = setInterval(function () {
									u(s);
								}, 1);
							}
						},
						initGameBox: function (t) {
							var e = c(t);
							A
								? (e.active = 0)
								: d(
										e.getChildByName('GameBox1'),
										e.getChildByName('GameBox2')
								  );
						},
						removeBanner: function () {
							(v = []), clearInterval(n);
						},
						showInterstitial: function (t) {
							YYGGames.showInterstitial(t);
						},
						showReward: function (t) {
							if (!YYGGames.rewardReady)
								return (
									YYGGames.showTip('No Available Video'),
									void (
										t.rewardDismissed && t.rewardDismissed()
									)
								);
							YYGGames.showReward(t);
						},
						hideIcon: function () {
							document
								.getElementById('puzzlegame')
								.setAttribute('style', 'display: none');
						},
						showIcon: function () {
							document
								.getElementById('puzzlegame')
								.setAttribute(
									'style',
									'width:15%;top: 1%;right: 1%;'
								);
						}
					})),
					cc._RF.pop();
			},
			{}
		],
		gx_native_banner: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, '8bca6xGYB9PFKmCb5Rqel2l', 'gx_native_banner');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxEnum'),
					s = t('./GxGame'),
					c = t('./ResUtil'),
					d = t('./GxAdParams'),
					l = t('./GxConstant'),
					u = cc._decorator,
					h = u.ccclass,
					p = u.property,
					f = (function (t) {
						function e() {
							var e = t.call(this) || this;
							return (
								(e.icon_close = null),
								(e.lb_title = null),
								(e.lb_desc = null),
								(e.ad_logo = null),
								(e.img_icon = null),
								(e.is_reprot_click = !1),
								(e.onShow = null),
								(e.onHide = null),
								(e.has_click_warp = !1),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.click_adv_warp = function () {
								this.report_click(), (this.has_click_warp = !0);
							}),
							(e.prototype.show = function (t, e, n) {
								if (
									((this.onShow = e),
									(this.onHide = n),
									this.node &&
										cc.isValid(this.node) &&
										((this.node.parent =
											cc.director.getScene()),
										cc.game.addPersistRootNode(this.node),
										(this.node.zIndex =
											cc.macro.MAX_ZINDEX),
										(this.node.active = !1)),
									cc.isValid(this.node) && !this.node.active)
								) {
									if (
										(cc.winSize.width <= cc.winSize.height
											? (this.node.scale =
													cc.winSize.width /
													this.node.width)
											: (this.node.scale = 0.7),
										d.AdParams.oppo.bannerOnTop)
									) {
										var o = this.node.getComponent(
											cc.Widget
										);
										o
											? ((o.isAlignBottom = !1),
											  (o.isAlignTop = !0),
											  (o.top = 0))
											: ((o.isAlignTop = !1),
											  (o.isAlignBottom = !0),
											  (o.bottom = 0));
									}
									this.set_default_pos(), this.on_show(t);
								}
							}),
							(e.prototype.start = function () {
								var t = this.node.getChildByName('native_node');
								if (t) {
									var e = t.getChildByName('adflag'),
										n = t.getChildByName('adflagmi');
									e &&
										(l.default.IS_MI_GAME
											? (e.active = !1)
											: (e.active = !0)),
										n &&
											(l.default.IS_MI_GAME
												? (n.active = !0)
												: (n.active = !1));
								}
								this.node.on(
									cc.Node.EventType.TOUCH_END,
									this.on_click_adv,
									this
								);
							}),
							(e.prototype.update_view = function () {
								if (
									cc.isValid(this.node) &&
									this.node.activeInHierarchy
								)
									if (s.default.adConfig.canRefresh) {
										var t = s.default
											.Ad()
											.getLocalNativeData(
												r.ad_native_type.banner
											);
										t
											? ((this.native_data = t),
											  this.refresh())
											: this.hide();
									} else this.hide();
								else this.hide();
							}),
							(e.prototype.on_show = function (t) {
								(this.native_data =
									t ||
									s.default
										.Ad()
										.getLocalNativeData(
											r.ad_native_type.banner
										)),
									this.native_data
										? ((this.node.active = !0),
										  (this.is_reprot_click = !1),
										  this.refresh())
										: this.hide();
							}),
							(e.prototype.refresh = function () {
								var t = this;
								(this.lb_desc.string =
									this.native_data.desc || ''),
									(this.lb_title.string =
										this.native_data.title || ''),
									(this.ad_logo.string =
										this.native_data.logoTxt ||
										'\u5e7f\u544a'),
									l.default.IS_HUAWEI_GAME &&
										(this.ad_logo.string = '\u5e7f\u544a');
								var e = this.native_data.imgUrlList;
								if (
									(e.length <= 0 &&
										(e = this.native_data.iconUrlList),
									e.length > 0)
								) {
									var n = e[0];
									n.lastIndexOf('.'),
										c.default.loadRemoteSpiteFrame(
											n,
											function (e, n) {
												if (cc.isValid(t.node, !0))
													return e
														? (t.img_icon.getComponent(
																cc.Sprite
														  ).spriteFrame = null)
														: void (t.img_icon.getComponent(
																cc.Sprite
														  ).spriteFrame = n);
											}
										);
								}
								this.report_show(),
									this.onShow && this.onShow();
							}),
							(e.prototype.on_click_adv2 = function () {
								this.on_click_adv();
							}),
							(e.prototype.on_click_adv = function () {
								this.is_reprot_click ||
									((this.is_reprot_click = !0),
									this.report_click());
							}),
							(e.prototype.on_click_close = function () {
								this.hide();
							}),
							(e.prototype.report_click = function () {
								this.native_data &&
									(s.default
										.Ad()
										.reportAdClick(this.native_data),
									this.update_view());
							}),
							(e.prototype.report_show = function () {
								this.native_data &&
									s.default
										.Ad()
										.reportAdShow(this.native_data);
							}),
							(e.prototype.hide = function () {
								this.node &&
									this.node.active &&
									(this.node.active = !1),
									this.on_hide();
							}),
							(e.prototype.on_hide = function () {
								this.onHide && this.onHide();
							}),
							(e.prototype.set_default_pos = function () {
								(this.node.x = 0),
									(this.node.y = -cc.winSize.height / 2);
							}),
							(e.prototype.onDisable = function () {
								this.unschedule(this.update_view);
							}),
							(e.prototype.onDestroy = function () {
								this.unschedule(this.update_view);
							}),
							a([p(cc.Node)], e.prototype, 'icon_close', void 0),
							a([p(cc.Label)], e.prototype, 'lb_title', void 0),
							a([p(cc.Label)], e.prototype, 'lb_desc', void 0),
							a([p(cc.Label)], e.prototype, 'ad_logo', void 0),
							a([p(cc.Sprite)], e.prototype, 'img_icon', void 0),
							a([h], e)
						);
					})(cc.Component);
				(n.default = f), cc._RF.pop();
			},
			{
				'./GxAdParams': 'GxAdParams',
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		gx_native_icon: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(e, 'e8f48VSH7tMVrhCY6vxPMXz', 'gx_native_icon');
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxEnum'),
					s = t('./GxGame'),
					c = t('./ResUtil'),
					d = t('./GxConstant'),
					l = cc._decorator,
					u = l.ccclass,
					h = l.property,
					p = (function (t) {
						function e() {
							var e = t.call(this) || this;
							return (
								(e.icon_close = null),
								(e.native_node = null),
								(e.img_icon = null),
								(e.ad_logo = null),
								e.set_background_on_show(),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.on_click_adv = function () {
								this.report_click();
							}),
							(e.prototype.on_click_close = function () {
								this.hide();
							}),
							(e.prototype.report_click = function () {
								this.native_data &&
									(s.default
										.Ad()
										.reportAdClick(this.native_data),
									this.update_view());
							}),
							(e.prototype.start = function () {
								var t = this.node.getChildByName('native_node');
								if (t) {
									var e = t.getChildByName('adflag'),
										n = t.getChildByName('adflagmi');
									e &&
										(d.default.IS_MI_GAME
											? (e.active = !1)
											: (e.active = !0)),
										n &&
											(d.default.IS_MI_GAME
												? (n.active = !0)
												: (n.active = !1));
								}
							}),
							(e.prototype.report_show = function () {
								this.native_data &&
									s.default
										.Ad()
										.reportAdShow(this.native_data);
							}),
							(e.prototype.show = function (t, e) {
								this.node &&
									!this.node.parent &&
									t &&
									e &&
									((this.native_data = e),
									(this.node.parent = t),
									this.on_show());
							}),
							(e.prototype.update_view = function () {
								if (s.default.adConfig.canRefresh) this.hide();
								else if (
									cc.isValid(this.node) &&
									this.node.activeInHierarchy
								) {
									var t = s.default
										.Ad()
										.getLocalNativeData(
											r.ad_native_type.native_icon
										);
									t &&
										((this.native_data = t),
										this.refresh());
								}
							}),
							(e.prototype.report_click_update_view = function (
								t
							) {
								this.node &&
									this.node.parent &&
									((this.native_data = t), this.refresh());
							}),
							(e.prototype.on_show = function () {
								this.icon_close.on(
									cc.Node.EventType.TOUCH_END,
									this.on_click_close,
									this
								),
									this.img_icon.node.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.refresh();
							}),
							(e.prototype.refresh = function () {
								var t = this;
								(this.ad_logo.string =
									this.native_data.logoTxt || '\u5e7f\u544a'),
									d.default.IS_HUAWEI_GAME &&
										(this.ad_logo.string = '\u5e7f\u544a');
								var e = this.native_data.imgUrlList;
								if (
									(e.length <= 0 &&
										(e = this.native_data.iconUrlList),
									e.length > 0)
								) {
									var n = e[0],
										o = n.lastIndexOf('.');
									n.substring(o + 1),
										c.default.loadRemoteSpiteFrame(
											n,
											function (e, n) {
												if (cc.isValid(t.node, !0))
													return e
														? (t.img_icon.getComponent(
																cc.Sprite
														  ).spriteFrame = null)
														: void (t.img_icon.getComponent(
																cc.Sprite
														  ).spriteFrame = n);
											}
										);
								}
								this.report_show();
							}),
							(e.prototype.hide = function () {
								this.node &&
									this.node.parent &&
									(this.node.parent.removeChild(this.node),
									this.on_hide());
							}),
							(e.prototype.on_hide = function () {
								this.icon_close.off(
									cc.Node.EventType.TOUCH_END,
									this.on_click_close,
									this
								),
									this.img_icon.node.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									);
							}),
							(e.prototype.set_default = function () {}),
							(e.prototype.set_background_on_show =
								function () {}),
							a([h(cc.Node)], e.prototype, 'icon_close', void 0),
							a([h(cc.Node)], e.prototype, 'native_node', void 0),
							a([h(cc.Sprite)], e.prototype, 'img_icon', void 0),
							a([h(cc.Label)], e.prototype, 'ad_logo', void 0),
							a([u], e)
						);
					})(cc.Component);
				(n.default = p), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		gx_native_inner_interstitial: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(
					e,
					'7bd1dmem7VKNKT2vBv/lUQ2',
					'gx_native_inner_interstitial'
				);
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxEnum'),
					s = t('./GxGame'),
					c = t('./ResUtil'),
					d = t('./GxConstant'),
					l = cc._decorator,
					u = l.ccclass,
					h = l.property,
					p = (function (t) {
						function e() {
							var e = t.call(this) || this;
							return (
								(e.icon_close = null),
								(e.lb_title = null),
								(e.lb_desc = null),
								(e.ad_logo = null),
								(e.img_icon = null),
								(e.click_back = void 0),
								(e.has_click_warp = !1),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.on_click_adv = function () {
								this.report_click();
							}),
							(e.prototype.click_adv_warp = function () {
								this.report_click(), (this.has_click_warp = !0);
							}),
							(e.prototype.on_click_close = function () {
								this.hide();
							}),
							(e.prototype.report_click = function () {
								this.native_data
									? (this.click_back && this.click_back(),
									  s.default
											.Ad()
											.reportAdClick(this.native_data),
									  this.update_view())
									: this.hide();
							}),
							(e.prototype.report_show = function () {
								this.native_data &&
									s.default
										.Ad()
										.reportAdShow(this.native_data);
							}),
							(e.prototype.show = function (t, e, n, o, i) {
								this.node &&
									!this.node.parent &&
									((this.native_data = e),
									(this.show_back = o || void 0),
									(this.hide_back = i || void 0),
									(this.click_back = n || void 0),
									(this.node.parent = t),
									this.set_default_pos(),
									this.on_show());
							}),
							(e.prototype.update_view = function () {
								if (s.default.adConfig.canRefresh) {
									var t = s.default
										.Ad()
										.getLocalNativeData(
											r.ad_native_type.inter1
										);
									t &&
										cc.isValid(this.node, !0) &&
										this.node.activeInHierarchy &&
										((this.native_data = t),
										this.refresh());
								} else this.hide();
							}),
							(e.prototype.report_click_update_view = function (
								t
							) {
								this.node &&
									this.node.parent &&
									((this.native_data = t), this.refresh());
							}),
							(e.prototype.start = function () {
								var t = this.node.getChildByName('native_node');
								if (t) {
									var e = t.getChildByName('adflag'),
										n = t.getChildByName('adflagmi');
									e &&
										(d.default.IS_MI_GAME
											? (e.active = !1)
											: (e.active = !0)),
										n &&
											(d.default.IS_MI_GAME
												? (n.active = !0)
												: (n.active = !1));
								}
							}),
							(e.prototype.on_show = function () {
								this.icon_close.on(
									cc.Node.EventType.TOUCH_END,
									this.on_click_close,
									this
								),
									this.img_icon.node.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.refresh(),
									this.show_back && this.show_back();
							}),
							(e.prototype.refresh = function () {
								var t = this;
								(this.lb_title.string =
									this.native_data.title || ''),
									(this.lb_desc.string =
										this.native_data.desc || ''),
									(this.ad_logo.string =
										this.native_data.logoTxt ||
										'\u5e7f\u544a'),
									d.default.IS_HUAWEI_GAME &&
										(this.ad_logo.string = '\u5e7f\u544a');
								var e = this.native_data.imgUrlList;
								if (
									(e.length <= 0 &&
										(e = this.native_data.iconUrlList),
									e.length > 0)
								) {
									var n = e[0],
										o = n.lastIndexOf('.');
									n.substring(o + 1),
										c.default.loadRemoteSpiteFrame(
											n,
											function (e, n) {
												if (cc.isValid(t.node, !0))
													return e
														? (t.img_icon.getComponent(
																cc.Sprite
														  ).spriteFrame = null)
														: void (t.img_icon.getComponent(
																cc.Sprite
														  ).spriteFrame = n);
											}
										);
								}
								this.report_show();
							}),
							(e.prototype.hide = function () {
								this.node &&
									this.node.parent &&
									(this.node.parent.removeChild(this.node),
									this.on_hide());
							}),
							(e.prototype.on_hide = function () {
								this.icon_close.off(
									cc.Node.EventType.TOUCH_END,
									this.on_click_close,
									this
								),
									this.img_icon.node.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.hide_back && this.hide_back();
							}),
							(e.prototype.set_default_pos = function () {
								var t = this.node.parent,
									e = t.width * (0.5 - t.anchorX),
									n = t.height * (0.5 - t.anchorY);
								this.node.position = cc.v3(e, n, 0);
							}),
							(e.prototype.set_style_pos = function () {}),
							(e.prototype.onDisable = function () {
								this.hide_back && this.hide_back(),
									(this.hide_back = null),
									this.unschedule(this.update_view);
							}),
							(e.prototype.onDestroy = function () {
								this.hide_back && this.hide_back(),
									(this.hide_back = null),
									this.unschedule(this.update_view);
							}),
							a([h(cc.Node)], e.prototype, 'icon_close', void 0),
							a([h(cc.Label)], e.prototype, 'lb_title', void 0),
							a([h(cc.Label)], e.prototype, 'lb_desc', void 0),
							a([h(cc.Label)], e.prototype, 'ad_logo', void 0),
							a([h(cc.Sprite)], e.prototype, 'img_icon', void 0),
							a([u], e)
						);
					})(cc.Component);
				(n.default = p), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		gx_native_interstitial: [
			function (t, e, n) {
				'use strict';
				var o;
				cc._RF.push(
					e,
					'9e0b4Nq7EdHo6HlzQQG5r61',
					'gx_native_interstitial'
				);
				var i =
						((o = function (t, e) {
							return (o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e)
										Object.prototype.hasOwnProperty.call(
											e,
											n
										) && (t[n] = e[n]);
								})(t, e);
						}),
						function (t, e) {
							function n() {
								this.constructor = t;
							}
							o(t, e),
								(t.prototype =
									null === e
										? Object.create(e)
										: ((n.prototype = e.prototype),
										  new n()));
						}),
					a = function (t, e, n, o) {
						var i,
							a = arguments.length,
							r =
								a < 3
									? e
									: null === o
									? (o = Object.getOwnPropertyDescriptor(
											e,
											n
									  ))
									: o;
						if (
							'object' == typeof Reflect &&
							'function' == typeof Reflect.decorate
						)
							r = Reflect.decorate(t, e, n, o);
						else
							for (var s = t.length - 1; s >= 0; s--)
								(i = t[s]) &&
									(r =
										(a < 3
											? i(r)
											: a > 3
											? i(e, n, r)
											: i(e, n)) || r);
						return a > 3 && r && Object.defineProperty(e, n, r), r;
					};
				Object.defineProperty(n, '__esModule', { value: !0 });
				var r = t('./GxEnum'),
					s = t('./GxGame'),
					c = t('./ResUtil'),
					d = t('./GxConstant'),
					l = cc._decorator,
					u = l.ccclass,
					h = l.property,
					p = (function (t) {
						function e() {
							var e = t.call(this) || this;
							return (
								(e.icon_close = null),
								(e.lb_title = null),
								(e.lb_desc = null),
								(e.ad_logo = null),
								(e.img_icon = null),
								(e.img_bg = null),
								(e.btn_check = null),
								(e.easy_click = null),
								(e.native_node = null),
								(e.lageBg = null),
								e
							);
						}
						return (
							i(e, t),
							(e.prototype.start = function () {
								var t = this.node.getChildByName('native_node');
								if (t) {
									var e = t.getChildByName('adflag'),
										n = t.getChildByName('adflagmi');
									e &&
										(d.default.IS_MI_GAME
											? (e.active = !1)
											: (e.active = !0)),
										n &&
											(d.default.IS_MI_GAME
												? (n.active = !0)
												: (n.active = !1));
								}
								(this.node.zIndex = 10001),
									cc.director.once(
										'\u6e05\u9664\u539f\u751f',
										this.hide.bind(this)
									);
							}),
							(e.prototype.on_click_adv2 = function () {
								(this.easy_click.active = !1),
									(this.has_easy_click = !0),
									this.report_click();
							}),
							(e.prototype.on_click_adv = function () {
								this.report_click();
							}),
							(e.prototype.on_click_close = function () {
								this.hide();
							}),
							(e.prototype.report_click = function () {
								if (this.native_data)
									if (
										(s.default
											.Ad()
											.reportAdClick(this.native_data),
										s.default.adConfig.canRefresh)
									) {
										var t = s.default
											.Ad()
											.getLocalNativeData(
												r.ad_native_type.inter2
											);
										t && cc.isValid(this.node, !0)
											? ((this.native_data = t),
											  this.refresh())
											: this.hide();
									} else this.hide();
								else this.hide();
							}),
							(e.prototype.report_show = function () {
								this.native_data &&
									s.default
										.Ad()
										.reportAdShow(this.native_data);
							}),
							(e.prototype.show = function (t, e, n) {
								this.node &&
									!this.node.parent &&
									((this.native_data = t),
									(this.node.parent = cc.director.getScene()),
									(this.node.zIndex = 1e5),
									(this.show_back = e || void 0),
									(this.hide_back = n || void 0),
									this.on_show());
							}),
							(e.prototype.on_show = function () {
								s.default.Ad().canIn() && this.lageBg
									? ((this.lageBg.active = !0),
									  this.lageBg.on(
											cc.Node.EventType.TOUCH_END,
											this.on_click_adv,
											this
									  ))
									: (this.lageBg.active = !1),
									this.native_node.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.icon_close.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_close,
										this
									),
									this.img_bg.node.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.btn_check.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.easy_click.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv2,
										this
									),
									this.refresh(),
									this.show_back && this.show_back();
							}),
							(e.prototype.refresh = function () {
								var t = this;
								(this.lb_title.string =
									this.native_data.title || ''),
									(this.lb_desc.string =
										this.native_data.desc || ''),
									(this.ad_logo.string =
										this.native_data.logoTxt ||
										this.native_data.source ||
										'\u5e7f\u544a'),
									d.default.IS_HUAWEI_GAME &&
										(this.ad_logo.string = '\u5e7f\u544a');
								var e = this.native_data.imgUrlList;
								if (
									(e.length <= 0 &&
										(e = this.native_data.iconUrlList),
									e.length > 0)
								) {
									var n = e[0],
										o = n.lastIndexOf('.');
									n.substring(o + 1),
										console.log('1111finalUrl:' + n),
										c.default.loadRemoteSpiteFrame(
											n,
											function (e, n) {
												if (cc.isValid(t.node, !0))
													return e
														? (t.img_bg.getComponent(
																cc.Sprite
														  ).spriteFrame = null)
														: void (t.img_bg.getComponent(
																cc.Sprite
														  ).spriteFrame = n);
											}
										);
									var i = '';
									this.native_data.iconUrlList &&
									this.native_data.iconUrlList.length > 0
										? (i = this.native_data.iconUrlList[0])
										: this.native_data.icon &&
										  (i = this.native_data.icon),
										i &&
											((this.img_icon.sizeMode =
												cc.Sprite.SizeMode.CUSTOM),
											(this.img_icon.node.width = 150),
											(this.img_icon.node.width = 150),
											c.default.loadRemoteSpiteFrame(
												i,
												function (e, n) {
													if (cc.isValid(t.node, !0))
														return e
															? (t.img_icon.spriteFrame =
																	null)
															: void (t.img_icon.spriteFrame =
																	n);
												}
											));
								}
								this.report_show(), (this.has_easy_click = !1);
							}),
							(e.prototype.hide = function () {
								this.node &&
									this.node.parent &&
									(this.node.destroy(), this.on_hide());
							}),
							(e.prototype.on_hide = function () {
								this.lageBg &&
									this.lageBg.active &&
									this.lageBg.on(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									(this.lageBg.active = !1),
									this.native_node.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.icon_close.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_close,
										this
									),
									this.img_bg.node.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.btn_check.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv,
										this
									),
									this.easy_click.off(
										cc.Node.EventType.TOUCH_END,
										this.on_click_adv2,
										this
									),
									this.hide_back && this.hide_back();
							}),
							(e.prototype.onDisable = function () {
								this.hide_back && this.hide_back(),
									(this.hide_back = null);
							}),
							(e.prototype.onDestroy = function () {
								cc.director.off(
									'\u6e05\u9664\u539f\u751f',
									this.hide.bind(this)
								),
									(this.hide_back = null);
							}),
							a([h(cc.Node)], e.prototype, 'icon_close', void 0),
							a([h(cc.Label)], e.prototype, 'lb_title', void 0),
							a([h(cc.Label)], e.prototype, 'lb_desc', void 0),
							a([h(cc.Label)], e.prototype, 'ad_logo', void 0),
							a([h(cc.Sprite)], e.prototype, 'img_icon', void 0),
							a([h(cc.Sprite)], e.prototype, 'img_bg', void 0),
							a([h(cc.Node)], e.prototype, 'btn_check', void 0),
							a([h(cc.Node)], e.prototype, 'easy_click', void 0),
							a([h(cc.Node)], e.prototype, 'native_node', void 0),
							a([h(cc.Node)], e.prototype, 'lageBg', void 0),
							a([u], e)
						);
					})(cc.Component);
				(n.default = p), cc._RF.pop();
			},
			{
				'./GxConstant': 'GxConstant',
				'./GxEnum': 'GxEnum',
				'./GxGame': 'GxGame',
				'./ResUtil': 'ResUtil'
			}
		],
		loadBundle: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '81d61Hu+ndD04WiNRthgoqk', 'loadBundle'),
					(window.GameSoundFlag = 0),
					(window.showAdFlag = !1),
					cc.Class({
						extends: cc.Component,
						properties: {
							bundleAstNameArr: {
								default: [],
								type: [cc.String]
							},
							nextScene: cc.String
						},
						start: function () {},
						onLoad: function () {
							var t = this;
							(this.bundleIndex = 0),
								YYGplatform.init(function () {
									t.loadAst(),
										YYGGames.addEventListener(
											YYGGames.events.beforeShowAd,
											t,
											function () {
												(YYGGames.audioEngine.pause =
													!0),
													(window.showAdFlag = !0);
											}
										),
										YYGGames.addEventListener(
											YYGGames.events.afterShowAd,
											t,
											function () {
												(window.showAdFlag = !1),
													(YYGGames.audioEngine.pause =
														1 ==
														window.GameSoundFlag);
											}
										),
										window.addEventListener(
											'focus',
											function () {
												YYGGames.audioEngine.pause =
													1 == window.GameSoundFlag ||
													window.showAdFlag;
											}
										),
										window.addEventListener(
											'blur',
											function () {
												YYGGames.audioEngine.pause = !0;
											}
										);
								});
						},
						loadAst: function () {
							var t = this;
							cc.assetManager.loadBundle(
								this.bundleAstNameArr[this.bundleIndex],
								function () {
									cc.director.loadScene(t.nextScene);
								}
							);
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_box: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '43ff5AdsbdJl4TuF+rB9rK+', 'ui_box'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							(this.btnVideoAll = cc.find('bx_dkqb', this.node)),
								(this.btnNo = cc.find('bx_crjj', this.node)),
								(this.btnClose = cc.find('ts_xx', this.node)),
								(this.content = cc.find('content', this.node));
						},
						start: function () {
							var t = this;
							(this.btnVideoAll.active = !1),
								(this.btnNo.active = !1),
								(this.btnClose.active = !1),
								(this.clickBox = 0),
								(this.firstBox = 1),
								(this.tipsNum = 0),
								mgr.Data.firstBox
									? ((mgr.Data.firstBox = !1),
									  mgr.Data.save(),
									  (this.freeBox = 3))
									: (this.freeBox =
											Math.random() > 0.5 ? 1 : 2),
								mgr.Res.loadRes(
									'prefab/node/box',
									cc.Prefab
								).then(function (e) {
									for (
										var n = function (n) {
												var o = cc.instantiate(e);
												(o.parent = t.content),
													(o.name = '' + n);
												var i = o.getChildByName('box');
												(i.active = !0),
													(i.getChildByName(
														'video'
													).active = !1),
													(o.getChildByName(
														'r1'
													).active = !1),
													(o.getChildByName(
														'r2'
													).active = !1),
													(o.getChildByName(
														'r3'
													).active = !1),
													(o.getChildByName(
														'r0'
													).active = !1),
													i.on(
														'click',
														function () {
															mgr.Sound.playClick(),
																t.clickBox++,
																t.clickBox >
																	8 &&
																	t.updateButton(),
																t.freeBox >=
																t.clickBox
																	? (t.freeBox ===
																			t.clickBox &&
																			t.showBoxVideoIcon(),
																	  t.openBoxSingle(
																			o
																	  ))
																	: AD.showVideo(
																			function () {
																				t.openBoxSingle(
																					o
																				);
																			}
																	  );
														},
														t
													);
											},
											o = 0;
										o < 9;
										o++
									)
										n(o);
								});
						},
						openBoxSingle: function (t) {
							if (
								((t.getChildByName('box').active = !1),
								this.clickBox <= this.freeBox)
							) {
								var e = Math.random() <= 0.1;
								if (((t.getChildByName('r0').active = !e), e)) {
									var n = Math.random() <= 0.5 ? 1 : 2;
									(mgr.Data.tips += n),
										(this.tipsNum += n),
										mgr.Event.emit('updateTips'),
										(t.getChildByName('r1').active =
											1 === n),
										(t.getChildByName('r2').active =
											2 === n),
										(t.getChildByName('r3').active = !1),
										mgr.Game.showToast(
											'Got Undo +' + n + ' '
										);
								} else
									(t.getChildByName('r1').active = e),
										(t.getChildByName('r2').active = e),
										(t.getChildByName('r3').active = e);
							} else
								(mgr.Data.tips += 1),
									(this.tipsNum += 1),
									(t.getChildByName('r1').active = !0),
									mgr.Event.emit('updateTips'),
									mgr.Game.showToast('Got Undo +1 ');
							mgr.Data.save();
						},
						openBoxAll: function () {
							var t = Utils.RandomInt(1, 5);
							(this.tipsNum += t),
								(mgr.Data.tips += t),
								mgr.Data.save(),
								mgr.Event.emit('updateTips'),
								mgr.Game.showToast('Got Undo +' + t + ' ');
							for (
								var e = [
										[[1]],
										[[1, 1], [2]],
										[[1, 1, 1], [1, 2], [3]],
										[
											[1, 1, 1, 1],
											[1, 1, 2],
											[1, 3],
											[2, 2]
										],
										[
											[1, 1, 1, 1, 1],
											[1, 1, 1, 2],
											[1, 2, 2],
											[1, 1, 3],
											[2, 3]
										]
									][t - 1],
									n = e[Utils.RandomInt(1, e.length) - 1],
									o = [].concat(n),
									i = 9 - this.clickBox,
									a = n.length;
								a < i;
								a++
							)
								o.push(0);
							for (
								var r = Utils.shuffle(o), s = 0, c = 0;
								c < 9;
								c++
							) {
								var d = this.content.getChildByName('' + c),
									l = d.getChildByName('box');
								l.active &&
									((l.active = !1),
									(d.getChildByName('r1').active =
										1 === r[s]),
									(d.getChildByName('r2').active =
										2 === r[s]),
									(d.getChildByName('r3').active =
										3 === r[s]),
									(d.getChildByName('r0').active =
										0 === r[s]),
									s++);
							}
						},
						showBoxVideoIcon: function () {
							(this.btnVideoAll.active = !0),
								(this.btnNo.active = !0);
							for (var t = 0; t < 9; t++)
								cc.find(
									'box/video',
									this.content.getChildByName('' + t)
								).active = !0;
						},
						updateButton: function () {
							(this.btnVideoAll.active = !1),
								(this.btnNo.active = !1),
								(this.btnClose.active = !0);
						},
						clickBtnVideoAll: function () {
							var t = this;
							mgr.Sound.playClick(),
								AD.showVideo(function () {
									t.openBoxAll(), t.updateButton();
								});
						},
						clickBtnDone: function () {
							var t = this;
							mgr.Sound.playClick(),
								mgr.Res.loadRes(
									'prefab/ui/ui_' +
										(mgr.Game.newSkin > 0
											? 'unlock'
											: 'victory')
								).then(function (e) {
									var n = cc.instantiate(e);
									(n.parent = cc.find('Canvas')),
										n
											.getComponent('ui_victory')
											.init(t.tipsNum),
										t.node.destroy();
								});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_defeat: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '05f02G7C1ZDaZx5J+8Q33GD', 'ui_defeat'),
					cc.Class({
						extends: cc.Component,
						properties: { gameBanner: cc.Node },
						onLoad: function () {
							mgr.Sound.playBgm('defeat', !1),
								YYGplatform.initGameBanner(this.gameBanner),
								(YYGplatform.GameBanner.y = -520);
						},
						start: function () {
							AD.showChaPing(),
								AD.showBanner(),
								AD.showIcon(),
								AD.gameOver(),
								mgr.Data.tips++,
								mgr.Data.save(),
								mgr.Event.emit('updateTips');
						},
						clickBtnRetry: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									mgr.Res.loadRes(
										'prefab/ui/ui_game',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy(),
											cc.find('Canvas/ui_game').destroy();
									});
							});
						},
						clickBtnRelive: function () {
							var t = this;
							mgr.Sound.playClick(),
								AD.showVideo(function () {
									mgr.Event.emit('addTime'),
										mgr.Data.gameBgm
											? mgr.Sound.playBgm(
													'game' +
														Utils.RandomInt(1, 3)
											  )
											: mgr.Sound.stopBgm(),
										t.node.destroy();
								});
						},
						onDisable: function () {
							YYGplatform.removeBanner();
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_game: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '041cdNgPaxLDqDdGHfCYR/K', 'ui_game'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							mgr.Event.on('gamePause', this.gamePause, this),
								mgr.Event.on(
									'gameResume',
									this.gameResume,
									this
								),
								mgr.Event.on('gameOver', this.gameOver, this),
								mgr.Event.on('addTime', this.addTime, this),
								mgr.Event.on(
									'updateTips',
									this.updateTips,
									this
								),
								(this.timeLbl = cc
									.find('time', this.node)
									.getComponent(cc.Label)),
								(this.content = cc.find('content', this.node)),
								(this.gameOverFlag = !1);
						},
						onDestroy: function () {
							mgr.Event.off('gamePause', this.gamePause, this),
								mgr.Event.off(
									'gameResume',
									this.gameResume,
									this
								),
								mgr.Event.off('addTime', this.addTime, this),
								mgr.Event.off(
									'updateTips',
									this.updateTips,
									this
								),
								mgr.Event.off('gameOver', this.gameOver, this);
						},
						start: function () {
							AD.gameEventLevelStart(),
								(mgr.Game.newSkin = 0),
								(this.gameStop = !1),
								(this.timer = 120),
								(this.data = mgr.Game.getData()),
								(this.pressLeg = -1),
								(this.moveHuan = 0),
								(this.moveNum = 0),
								(this.legSp = !1),
								(this.totalNum = mgr.Game.taskNum[mgr.Data.lv]),
								cc.log(
									'\u603b\u5171\u9700\u8981\u5b8c\u6210\u817f\u7684\u6570\u91cf\uff1a' +
										this.totalNum
								),
								(this.history = []),
								(this.upLeg = []),
								(this.downLeg = []),
								(this.completeLeg = []),
								(this.legAnimNum = 0),
								(this.showAddTime = !1),
								(this.timeLbl.string = this.timer),
								(cc
									.find('level', this.node)
									.getComponent(cc.Label).string =
									'Level ' + (mgr.Data.lv + 1) + ' '),
								this.createLeg(),
								this.updateTips(),
								this.updateBtnBgm();
						},
						createLeg: function () {
							var t = this;
							mgr.Res.loadRes('prefab/node/leg', cc.Prefab).then(
								function (e) {
									t.content.width =
										71 * t.data.length +
										60 * (t.data.length - 1);
									for (
										var n = function (n) {
												var o = cc.instantiate(e);
												(o.parent = t.content),
													(o.name = '' + n);
												for (
													var i =
															o.getChildByName(
																'root'
															),
														a = function (e) {
															var o = new cc.Node(
																	'' + e
																),
																a =
																	o.addComponent(
																		cc.Sprite
																	);
															mgr.Res.loadRes(
																'images/huan/' +
																	t.data[n][
																		e
																	],
																cc.SpriteFrame
															).then(function (
																t
															) {
																a.spriteFrame =
																	t;
															}),
																i.addChild(o),
																(o.y =
																	69 * e -
																	310.5);
														},
														r = 0;
													r < t.data[n].length;
													r++
												)
													a(r);
												o.on(
													'click',
													function () {
														t.clickLeg(n);
													},
													t
												);
											},
											o = 0;
										o < t.data.length;
										o++
									)
										n(o);
									if (mgr.Data.lv > 0) {
										t.content.width += 131;
										var i = cc.instantiate(e);
										(i.parent = t.content),
											(i.name = '' + t.data.length),
											mgr.Res.loadRes(
												'images/legSp',
												cc.SpriteFrame
											).then(function (t) {
												i.getComponent(
													cc.Sprite
												).spriteFrame = t;
											}),
											mgr.Res.loadRes(
												'prefab/node/legSp',
												cc.Prefab
											).then(function (t) {
												cc.instantiate(t).parent = i;
											}),
											i.on(
												'click',
												function () {
													mgr.Sound.playClick(),
														t.legSp
															? t.clickLeg(
																	t.data
																		.length -
																		1
															  )
															: ((t.legSp = !0),
															  AD.showVideo(
																	function () {
																		mgr.Game.showToast(
																			'Got a new leg!'
																		),
																			i
																				.getChildByName(
																					'legSp'
																				)
																				.destroy(),
																			mgr.Res.loadRes(
																				'images/legNormal',
																				cc.SpriteFrame
																			).then(
																				function (
																					t
																				) {
																					i.getComponent(
																						cc.Sprite
																					).spriteFrame =
																						t;
																				}
																			),
																			t.data.push(
																				new Array()
																			);
																	}
															  ));
												},
												t
											);
									}
								}
							);
						},
						update: function (t) {
							if (!this.gameStop) {
								if (
									((this.timer -= t),
									(this.timeLbl.string = Math.ceil(
										this.timer
									)),
									this.timer <= 0 &&
										((this.gameStop = !0),
										mgr.Res.loadRes(
											'prefab/ui/ui_tips',
											cc.Prefab
										).then(function (t) {
											cc.instantiate(t).parent =
												cc.find('Canvas');
										})),
									this.legAnimNum > 0)
								)
									for (
										var e = this.completeLeg.length, n = 0;
										n < e;
										n++
									) {
										var o = this.completeLeg[n],
											i = cc.find('' + o, this.content);
										if (i) {
											var a = i.getComponent(
												cc.ProgressBar
											);
											(a.progress += t),
												a.progress >= 1 &&
													(this.legAnimNum--,
													(cc.find(
														'bar/shou',
														i
													).active = !1),
													cc.log(
														'\u5b8c\u6210\u817f' +
															o +
															'\u52a8\u753b',
														n,
														e
													),
													this.completeLeg.splice(
														0,
														1
													));
										}
									}
								this.totalNum <= 0 &&
									0 === this.legAnimNum &&
									0 === this.completeLeg.length &&
									((this.gameOverFlag = !0),
									(this.gameStop = !0),
									setTimeout(function () {
										mgr.Res.loadRes(
											'prefab/ui/ui_box',
											cc.Prefab
										).then(function (t) {
											cc.instantiate(t).parent =
												cc.find('Canvas');
										});
									}, 1e3));
							}
						},
						updateTips: function () {
							(cc
								.find('yxz_cx/tu/num', this.node)
								.getComponent(cc.Label).string = mgr.Data.tips),
								(cc.find('yxz_cx/tu/spb', this.node).active =
									0 === mgr.Data.tips);
						},
						updateBtnBgm: function () {
							var t = cc
								.find('yxz_sy', this.node)
								.getComponent(cc.Button);
							if (mgr.Data.gameBgm)
								mgr.Sound.playBgm(
									'game' + Utils.RandomInt(1, 3)
								);
							else {
								mgr.Sound.stopBgm();
								var e = t.normalSprite;
								(t.normalSprite = t.pressedSprite),
									(t.pressedSprite = e),
									(t.hoverSprite = t.pressedSprite);
							}
						},
						addTime: function () {
							(this.gameStop = !1),
								(this.timer += 120),
								(this.timeLbl.string = this.timer);
						},
						gamePause: function () {
							(this.gameStop = !0),
								(window.GameSoundFlag = YYGGames.audioEngine
									.pause
									? 1
									: 0),
								(YYGGames.audioEngine.pause = !0);
						},
						gameResume: function () {
							(this.gameStop = !1),
								(YYGGames.audioEngine.pause =
									0 != window.GameSoundFlag);
						},
						gameOver: function () {
							(YYGGames.audioEngine.pause =
								0 != window.GameSoundFlag),
								mgr.Res.loadRes(
									'prefab/ui/ui_defeat',
									cc.Prefab
								).then(function (t) {
									cc.instantiate(t).parent =
										cc.find('Canvas');
								});
						},
						showErrorTips: function (t) {
							mgr.Sound.playEffect('wrong');
							var e = cc.find('yxz_ts' + t, this.node);
							cc.tween(e)
								.to(0.5, { opacity: 255 })
								.delay(1)
								.to(0.5, { opacity: 0 })
								.start();
						},
						clickLeg: function (t) {
							if (this.completeLeg.indexOf(t) > -1)
								mgr.Game.showToast('Loading, please wait');
							else if (
								this.inAnim ||
								this.upLeg.indexOf(t) > -1 ||
								this.downLeg.indexOf(t) > -1
							)
								mgr.Game.showToast('Moving');
							else if (-1 === this.pressLeg) {
								if (0 === this.data[t].length) return;
								mgr.Sound.playEffect('put'),
									(this.pressLeg = t);
								var e = this.data[t].length - 1;
								(this.moveHuan = this.data[t][e]),
									(this.moveNum = 1);
								for (
									var n = e - 1;
									n >= 0 && this.data[t][n] === this.moveHuan;
									n--
								)
									this.moveNum++;
								cc.log('clickLeg', this.moveHuan, this.moveNum),
									this.ringVertical(t, !0);
							} else if (t === this.pressLeg)
								mgr.Sound.playEffect('put'),
									this.ringVertical(this.pressLeg, !1),
									(this.pressLeg = -1);
							else {
								var o = this.data[t].length;
								if (o >= 10 || o + this.moveNum > 10)
									this.ringVertical(this.pressLeg, !1),
										this.showErrorTips(2),
										(this.pressLeg = -1);
								else if (
									o > 0 &&
									this.data[t][o - 1] != this.moveHuan
								)
									this.ringVertical(this.pressLeg, !1),
										this.showErrorTips(1),
										(this.pressLeg = -1);
								else {
									var i = this.pressLeg,
										a = t;
									(this.pressLeg = -1),
										cc.log(
											'\u8bb0\u5f55\uff1a\u817f' +
												i +
												'\u5411\u817f' +
												a +
												'\u79fb\u52a8\u4e86' +
												this.moveNum +
												'\u4e2a' +
												this.moveHuan +
												'\u73af'
										),
										this.history.push([
											i,
											a,
											this.moveHuan,
											this.moveNum
										]),
										this.ringMove(i, a);
								}
							}
						},
						ringVertical: function (t, e) {
							var n = this;
							this.inAnim = !0;
							for (
								var o = this.content.getChildByName('' + t),
									i = this.data[t].length,
									a = 0;
								a < this.moveNum;
								a++
							) {
								var r = cc.find('root/' + (i - 1 - a), o);
								cc.tween(r)
									.by(0.25, {
										position: cc.v2(0, e ? 51 : -51)
									})
									.start();
							}
							setTimeout(function () {
								n.inAnim = !1;
							}, 250);
						},
						ringMove: function (t, e) {
							var n = this,
								o = this.data[t].length,
								i = e - t,
								a = this.data[e].length;
							this.upLeg.push(t),
								this.data[t].splice(-this.moveNum);
							for (var r = 0; r < this.moveNum; r++)
								this.data[e].push(this.moveHuan);
							var s = this.content.getChildByName('' + t);
							cc.log(t + '\u4e0a\u79fb');
							for (
								var c = function (t) {
										var r = 10 - o + t + 1,
											c = 10 - a - t,
											d = o - 1 - t,
											l = cc.find('root/' + d, s);
										cc.tween(l)
											.by(0.08 * r, {
												position: cc.v2(0, 69 * r)
											})
											.by(0.2, {
												position: cc.v2(131 * i, 0)
											})
											.call(function () {
												mgr.Sound.playEffect('put'),
													(l.parent = cc.find(
														e + '/root',
														n.content
													)),
													(l.x = 0),
													(l.name = '' + (a + t));
											})
											.by(0.08 * c, {
												position: cc.v2(0, 69 * -c - 51)
											})
											.start();
									},
									d = 0;
								d < this.moveNum;
								d++
							)
								c(d);
							setTimeout(function () {
								cc.log(
									t +
										'\u4e0a\u79fb\u5b8c\u6210\uff0c' +
										e +
										'\u8fdb\u884c\u4e0b\u843d'
								),
									n.upLeg.splice(0, 1),
									n.downLeg.push(e);
							}, 0.08 * (10 - o + 1) + 200);
							var l = !0;
							if (10 === this.data[e].length) {
								for (
									var u = this.data[e][0], h = 1;
									h < this.data[e].length;
									h++
								)
									if (u != this.data[e][h]) {
										l = !1;
										break;
									}
							} else l = !1;
							setTimeout(function () {
								if (
									(cc.log(e + '\u4e0b\u843d\u5b8c\u6210'),
									n.downLeg &&
										(n.downLeg.splice(0, 1), !0 === l))
								) {
									n.completeLeg.push(e),
										n.legAnimNum++,
										n.totalNum--;
									var t = n.data[e][0];
									cc.log('\u5b8c\u6210\u817f' + t),
										1 != mgr.Data.skin[t - 1] &&
											(cc.log(
												'\u89e3\u9501\u65b0\u4e1d\u889c',
												t
											),
											(mgr.Data.skin[t - 1] = 1),
											mgr.Data.save(),
											(mgr.Game.newSkin = t));
									var o = cc.find('' + e, n.content),
										i = o.getChildByName('bar');
									(i.active = !0),
										mgr.Res.loadRes(
											'images/siwa/' + t,
											cc.SpriteFrame
										).then(function (t) {
											(o.getChildByName('root').active =
												!1),
												11 === n.data[e][0]
													? ((i.getComponent(
															cc.Sprite
													  ).sizeMode =
															cc.Sprite.SizeMode.TRIMMED),
													  (i.getComponent(
															cc.Sprite
													  ).spriteFrame = t),
													  (o.getComponent(
															cc.ProgressBar
													  ).totalLength = i.height),
													  (i.x -= 5),
													  (i.y -= 20))
													: ((i.getComponent(
															cc.Sprite
													  ).sizeMode =
															cc.Sprite.SizeMode.CUSTOM),
													  (i.width = 71),
													  (i.height = 751),
													  (i.getComponent(
															cc.Sprite
													  ).spriteFrame = t),
													  (o.getComponent(
															cc.ProgressBar
													  ).totalLength = 751),
													  (i.x = 0),
													  (i.y = -375.5)),
												mgr.Sound.playEffect(
													'transition'
												);
										});
								}
							}, 80 * (10 - o + this.moveNum + 10 - a) + 201);
						},
						clickBtnPause: function () {
							this.gameOverFlag ||
								(mgr.Sound.playClick(),
								mgr.Res.loadRes(
									'prefab/ui/ui_pause',
									cc.Prefab
								).then(function (t) {
									cc.instantiate(t).parent =
										cc.find('Canvas');
								}));
						},
						clickBtnPass: function () {
							var t = this;
							mgr.Sound.playClick(),
								AD.showVideo(function () {
									if (!t.gameStop) {
										var e = mgr.Data.lv + 1;
										e >= mgr.Game.data.length && (e = 0),
											1 != mgr.Data.level[e] &&
												(mgr.Data.level[e] = 1),
											(mgr.Data.lv = e),
											mgr.Data.save(),
											mgr.Res.loadRes(
												'prefab/ui/ui_game',
												cc.Prefab
											).then(function (e) {
												(cc.instantiate(e).parent =
													cc.find('Canvas')),
													t.node.destroy();
											});
									}
								});
						},
						clickBtnRetry: function () {
							var t = this;
							mgr.Sound.playClick(),
								mgr.Res.loadRes(
									'prefab/ui/ui_game',
									cc.Prefab
								).then(function (e) {
									(cc.instantiate(e).parent =
										cc.find('Canvas')),
										t.node.destroy();
								});
						},
						clickBtnSound: function () {
							mgr.Sound.playClick();
							var t = cc
								.find('yxz_sy', this.node)
								.getComponent(cc.Button);
							(mgr.Data.gameBgm = !mgr.Data.gameBgm),
								mgr.Data.save(),
								mgr.Data.gameBgm
									? mgr.Sound.playBgm(
											'game' + Utils.RandomInt(1, 3)
									  )
									: mgr.Sound.stopBgm();
							var e = t.normalSprite;
							(t.normalSprite = t.pressedSprite),
								(t.pressedSprite = e),
								(t.hoverSprite = t.pressedSprite);
						},
						clickBtnCtrlZ: function () {
							var t = this;
							if (!this.gameStop)
								if (
									(mgr.Sound.playClick(),
									this.inAnim ||
										this.upLeg.length > 0 ||
										this.downLeg.length > 0 ||
										this.completeLeg.length > 0)
								)
									mgr.Game.showToast('Pls wait a moment~');
								else {
									var e = function () {
										var e = cc.find('mask', t.node);
										(e.active = !0),
											cc
												.tween(e)
												.to(0.25, { opacity: 255 })
												.call(function () {
													if (
														(mgr.Sound.playEffect(
															'transition'
														),
														-1 != t.pressLeg)
													) {
														for (
															var e =
																	t.content.getChildByName(
																		'' +
																			t.pressLeg
																	),
																n = 0;
															n < t.moveNum;
															n++
														) {
															var o = cc.find(
																'root/' +
																	(t.data[
																		t
																			.pressLeg
																	].length -
																		1 -
																		n),
																e
															);
															o.position = cc.v2(
																0,
																o.y - 51
															);
														}
														t.pressLeg = -1;
													}
													if (
														0 !== t.history.length
													) {
														var i = t.history.pop();
														cc.log(
															'\u672c\u6b65\u64a4\u9500\u5386\u53f2\u8bb0\u5f55\uff1a',
															i
														);
														var a =
																t.data[i[1]]
																	.length,
															r =
																t.data[i[0]]
																	.length;
														t.data[i[1]].splice(
															-i[3]
														);
														for (
															var s = 0;
															s < i[3];
															s++
														)
															t.data[i[0]].push(
																i[2]
															);
														var c =
																t.content.getChildByName(
																	'' + i[1]
																),
															d =
																c.getChildByName(
																	'root'
																);
														if (!1 === d.active) {
															t.totalNum++,
																(d.active = !0);
															var l =
																c.getChildByName(
																	'bar'
																);
															(l.getComponent(
																cc.Sprite
															).spriteFrame =
																null),
																(l.active = !1),
																(c.getComponent(
																	cc.ProgressBar
																).progress = 0);
														}
														for (
															var u = 0;
															u < i[3];
															u++
														) {
															var h = cc.find(
																'root/' +
																	(a - 1 - u),
																c
															);
															(h.parent = cc.find(
																i[0] + '/root',
																t.content
															)),
																(h.position =
																	cc.v2(
																		0,
																		69 *
																			(r +
																				u) -
																			310.5
																	)),
																(h.name =
																	'' +
																	(r + u));
														}
													}
												})
												.to(0.25, { opacity: 0 })
												.call(function () {
													e.active = !1;
												})
												.start();
									};
									mgr.Data.tips > 0
										? (mgr.Data.tips--,
										  mgr.Data.save(),
										  this.updateTips(),
										  e())
										: AD.showVideo(function () {
												e();
										  });
								}
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_home: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, 'ba216nLwm1PbqG1CAQ162mM', 'ui_home'),
					cc.Class({
						extends: cc.Component,
						properties: {
							yinsiBtn: cc.Node,
							moreBtn: cc.Node,
							deskBtn: cc.Node,
							shiling: cc.Node,
							gameBox: cc.Node,
							soundNode: cc.Node,
							onNode: cc.Node,
							offNode: cc.Node
						},
						onLoad: function () {
							var t = this;
							AD.setyinsiBtn(this.yinsiBtn),
								AD.setmoreBtn(this.moreBtn),
								AD.setdeskBtn(this.deskBtn),
								AD.setGameAgeBtn(this.shiling),
								AD.showBanner(),
								AD.showChaPing();
							var e = this.node.getComponent(cc.Animation);
							e.play('home_into'),
								e.on(
									'finished',
									function () {
										e.play('home_idle'),
											t.node
												.getChildByName('zjm_ks')
												.getComponent(cc.Animation)
												.play(),
											e.off('finished');
									},
									this
								),
								this.soundInit(),
								YYGplatform.initGameBox(this.gameBox),
								(YYGplatform.GameBox.children[0].scale = 1.2),
								(YYGplatform.GameBox.children[1].scale = 1.2),
								(YYGplatform.GameBox.children[0].x = -240),
								(YYGplatform.GameBox.children[1].x = 240),
								(YYGplatform.GameBox.children[0].y = -530),
								(YYGplatform.GameBox.children[1].y = -530),
								setTimeout(function () {
									if (document.createEvent) {
										var t =
											document.createEvent('HTMLEvents');
										t.initEvent('resize', !0, !0),
											window.dispatchEvent(t);
									} else document.createEventObject && window.fireEvent('onresize');
									h5splash.hideLoading();
								}, 1e3);
                                YYGGames.onLoadingFinished();
						},
						soundInit: function () {
							(GameSoundFlag = ~~cc.sys.localStorage.getItem(
								'Moto-Bike-Offroad-Racing-musicMute'
							)),
								0 == GameSoundFlag
									? ((this.onNode.active = !0),
									  (this.offNode.active = !1),
									  (YYGGames.audioEngine.pause = !1),
									  mgr.Sound.playBgm('ui'))
									: ((this.onNode.active = !1),
									  (this.offNode.active = !0),
									  (YYGGames.audioEngine.pause = !0));
						},
						soundHandler: function () {
							(GameSoundFlag = 0 == GameSoundFlag ? 1 : 0),
								GameSoundFlag
									? ((this.onNode.active = !1),
									  (this.offNode.active = !0),
									  (YYGGames.audioEngine.pause = !0))
									: ((this.onNode.active = !0),
									  (this.offNode.active = !1),
									  (YYGGames.audioEngine.pause = !1),
									  mgr.Sound.playBgm('ui')),
								cc.sys.localStorage.setItem(
									'Moto-Bike-Offroad-Racing-musicMute',
									GameSoundFlag
								);
						},
						start: function () {},
						clickBtnStart: function () {
							var t = this;
							mgr.Sound.playClick(),
								mgr.Res.loadRes(
									'prefab/ui/ui_game',
									cc.Prefab
								).then(function (e) {
									(cc.instantiate(e).parent =
										cc.find('Canvas')),
										t.node.destroy();
								});
						},
						clickBtnLevel: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									mgr.Res.loadRes(
										'prefab/ui/ui_level',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy();
									});
							});
						},
						clickBtnSkin: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									mgr.Res.loadRes(
										'prefab/ui/ui_skin',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy();
									});
							});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_level: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '4989f/1n7RJfajUGvznZp0a', 'ui_level'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							var t = !1,
								e = this;
							AD.showBanner(),
								AD.showChaPing(),
								AD.showIcon(),
								AD.ChooseLv(),
								mgr.Res.loadRes(
									'prefab/node/level',
									cc.Prefab
								).then(function (n) {
									for (
										var o = function (o) {
												var i = cc.instantiate(n);
												i.parent = cc.find(
													'content',
													e.node
												);
												var a =
													i.getChildByName('lock');
												AD.canvideogetlev()
													? (a.active =
															0 ===
															mgr.Data.level[o])
													: (a.active = !1);
												var r = i.getChildByName('num');
												r.active = !a.active;
												var s = o + 1;
												(s = s < 10 ? '0' + s : '' + s),
													(r.getComponent(
														cc.Label
													).string = s),
													i.on(
														'click',
														function () {
															t ||
																((t = !0),
																e.scheduleOnce(
																	function () {
																		return (t =
																			!1);
																	},
																	2
																),
																mgr.Sound.playClick(),
																a.active
																	? AD.showVideo(
																			function () {
																				(mgr.Data.level[
																					o
																				] = 1),
																					e.showGame(
																						o
																					);
																			}
																	  )
																	: e.showGame(
																			o
																	  ));
														},
														e
													);
											},
											i = 0;
										i < mgr.Game.data.length;
										i++
									)
										o(i);
								});
						},
						showGame: function (t) {
							var e = this;
							(mgr.Data.lv = t),
								mgr.Data.save(),
								mgr.Res.loadRes(
									'prefab/ui/ui_game',
									cc.Prefab
								).then(function (t) {
									(cc.instantiate(t).parent =
										cc.find('Canvas')),
										e.node.destroy();
								});
						},
						clickBtnBack: function () {
							var t = this;
							mgr.Sound.playClick(),
								mgr.Res.loadRes(
									'prefab/ui/ui_home',
									cc.Prefab
								).then(function (e) {
									(cc.instantiate(e).parent =
										cc.find('Canvas')),
										t.node.destroy();
								});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_pause: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '941d4oxd8lI0qWRvdoi9jlQ', 'ui_pause'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						start: function () {
							AD.showBanner(),
								AD.showChaPing(),
								AD.showIcon(),
								mgr.Event.emit('gamePause');
						},
						clickBtnResume: function () {
							var t = this;
							AD.hideBanner(),
								AD.hideIcon(),
								YYGGames.showInterstitial(function () {
									mgr.Sound.playClick(),
										mgr.Event.emit('gameResume'),
										t.node.destroy();
								});
						},
						clickBtnHome: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									mgr.Res.loadRes(
										'prefab/ui/ui_home',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy(),
											cc.find('Canvas/ui_game').destroy();
									});
							});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_skin: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, 'e823aDMysxPDrl2X4RYlWEF', 'ui_skin'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {
							this.skin = [];
							for (var t = 0; t < 3; t++)
								this.skin[t] = cc.find(
									'skin' + (t + 1),
									this.node
								);
						},
						start: function () {
							var t = this;
							(this.queue = [1, 2, 3]),
								(this.skinX = [0, 266, -283]),
								(this.curIdx = 1);
							for (
								var e = this.curIdx,
									n =
										15 === this.curIdx
											? 1
											: this.curIdx + 1,
									o =
										1 === this.curIdx
											? 15
											: this.curIdx - 1,
									i = function (i) {
										var a = t.curIdx;
										a =
											1 === t.queue[i]
												? e
												: 2 === t.queue[i]
												? n
												: o;
										var r = t.skin[t.queue[i] - 1],
											s = r.getComponent(cc.Sprite),
											c = 0 === mgr.Data.skin[a - 1];
										r.getChildByName('spb').active = c;
										var d = c
											? 'images/legSp'
											: 'images/siwa/' + a;
										mgr.Res.loadRes(d, cc.SpriteFrame).then(
											function (t) {
												s.spriteFrame = t;
											}
										),
											r.on(
												'click',
												function () {
													t.clickSkin(r, a);
												},
												t
											);
									},
									a = 0;
								a < this.skin.length;
								a++
							)
								i(a);
						},
						updateSkinView: function () {
							var t = this;
							(this.inAnim = !0),
								setTimeout(function () {
									t.inAnim = !1;
								}, 500);
							for (
								var e = [
										this.curIdx,
										15 === this.curIdx
											? 1
											: this.curIdx + 1,
										1 === this.curIdx ? 15 : this.curIdx - 1
									],
									n = function (n) {
										var o = e[n],
											i = t.skin[t.queue[n] - 1],
											a = i.getComponent(cc.Sprite),
											r = 0 === mgr.Data.skin[o - 1],
											s = r
												? 'images/legSp'
												: 'images/siwa/' + o,
											c = i.x,
											d = t.skinX[n],
											l = 0 === d ? 1 : 0.7;
										if (c + d === -17) {
											var u =
												c > 0
													? cc.winSize.width / 2 + 35
													: -cc.winSize.width / 2 -
													  35;
											cc.tween(i)
												.to(0.2, {
													position: cc.v2(u, 0)
												})
												.call(function () {
													(i.x = -i.x),
														mgr.Res.loadRes(
															s,
															cc.SpriteFrame
														).then(function (t) {
															(a.spriteFrame = t),
																(i.getChildByName(
																	'spb'
																).active = r);
														});
												})
												.to(0.2, {
													position: cc.v2(
														t.skinX[n],
														0
													)
												})
												.start();
										} else
											cc.tween(i)
												.to(0.4, {
													scale: l,
													position: cc.v2(
														t.skinX[n],
														0
													)
												})
												.call(function () {
													mgr.Res.loadRes(
														s,
														cc.SpriteFrame
													).then(function (t) {
														(a.spriteFrame = t),
															(i.getChildByName(
																'spb'
															).active = r);
													});
												})
												.start();
										i.off('click'),
											i.on(
												'click',
												function () {
													t.clickSkin(i, o);
												},
												t
											);
									},
									o = 0;
								o < this.skin.length;
								o++
							)
								n(o);
						},
						clickSkin: function (t, e) {
							this.inAnim ||
								(mgr.Sound.playClick(),
								1 != mgr.Data.skin[e - 1] &&
									e == this.curIdx &&
									AD.showVideo(function () {
										(mgr.Data.skin[e - 1] = 1),
											mgr.Data.save(),
											(t.getChildByName('spb').active =
												!1),
											mgr.Res.loadRes(
												'images/siwa/' + e,
												cc.SpriteFrame
											).then(function (e) {
												t.getComponent(
													cc.Sprite
												).spriteFrame = e;
											});
									}));
						},
						clickBtnLeftArrow: function () {
							if (!this.inAnim) {
								mgr.Sound.playClick();
								var t = this.queue.pop();
								this.queue.splice(0, 0, t),
									this.curIdx--,
									this.curIdx < 1 && (this.curIdx = 15),
									this.updateSkinView();
							}
						},
						clickBtnRightArrow: function () {
							if (!this.inAnim) {
								mgr.Sound.playClick();
								var t = this.queue[0];
								this.queue.splice(0, 1),
									this.queue.push(t),
									this.curIdx++,
									this.curIdx > 15 && (this.curIdx = 1),
									this.updateSkinView();
							}
						},
						clickBtnBack: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									mgr.Res.loadRes(
										'prefab/ui/ui_home',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy();
									});
							});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_tips: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, 'a3c81AahE9HwLC6+b8MpveW', 'ui_tips'),
					cc.Class({
						extends: cc.Component,
						properties: {},
						onLoad: function () {},
						start: function () {
							AD.showBanner(),
								AD.showChaPing(),
								AD.showIcon(),
								mgr.Event.emit('gamePause');
						},
						clickBtnClose: function () {
							mgr.Sound.playClick(),
								this.node.destroy(),
								mgr.Event.emit('gameOver');
						},
						clickBtnAddTime: function () {
							var t = this;
							mgr.Sound.playClick(),
								AD.showVideo(function () {
									AD.hideBanner(),
										AD.hideIcon(),
										mgr.Event.emit('addTime'),
										mgr.Event.emit('gameResume'),
										t.node.destroy();
								});
						}
					}),
					cc._RF.pop();
			},
			{}
		],
		ui_victory: [
			function (t, e) {
				'use strict';
				cc._RF.push(e, '6e214GmhXNGGIlTgguCZQ/u', 'ui_victory'),
					cc.Class({
						extends: cc.Component,
						properties: { gameBanner: cc.Node },
						onLoad: function () {
							mgr.Sound.playBgm('victory', !1),
								YYGplatform.initGameBanner(this.gameBanner),
								(YYGplatform.GameBanner.y = -520);
						},
						start: function () {
							AD.showBanner(),
								AD.showChaPing(),
								AD.showIcon(),
								AD.gameOver();
						},
						init: function (t) {
							(this.num = t),
								(cc
									.find('label', this.node)
									.getComponent(cc.Label).string = 'x' + t);
							var e = mgr.Data.lv + 1;
							e >= mgr.Game.data.length && (e = 1),
								1 != mgr.Data.level[e] &&
									(mgr.Data.level[e] = 1),
								mgr.Data.save(),
								(cc.find('sl_xyg', this.node).active =
									e < mgr.Game.data.length),
								(cc.find('zt_fh', this.node).active =
									e >= mgr.Game.data.length);
							var n = cc.find('skin', this.node);
							n &&
								mgr.Res.loadRes(
									'images/siwa/' + mgr.Game.newSkin,
									cc.SpriteFrame
								).then(function (t) {
									n.getComponent(cc.Sprite).spriteFrame = t;
								});
						},
						onDisable: function () {
							YYGplatform.removeBanner();
						},
						clickBtnNext: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									(mgr.Data.lv += 1),
									mgr.Data.save(),
									mgr.Res.loadRes(
										'prefab/ui/ui_game',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy(),
											cc.find('Canvas/ui_game').destroy();
									});
							});
						},
						clickBtnHome: function () {
							var t = this;
							YYGGames.showInterstitial(function () {
								mgr.Sound.playClick(),
									mgr.Res.loadRes(
										'prefab/ui/ui_home',
										cc.Prefab
									).then(function (e) {
										(cc.instantiate(e).parent =
											cc.find('Canvas')),
											t.node.destroy(),
											cc.find('Canvas/ui_game').destroy();
									});
							});
						},
						clickBtnDouble: function () {
							var t = this;
							mgr.Sound.playClick(),
								AD.showVideo(function () {
									(mgr.Data.tips += t.num),
										mgr.Data.save(),
										(cc.find('sl_sb', t.node).active = !1),
										(cc
											.find('label', t.node)
											.getComponent(cc.Label).string =
											'x' + 2 * t.num),
										mgr.Event.emit('updateTips');
								});
						}
					}),
					cc._RF.pop();
			},
			{}
		]
	},
	{},
	[
		'YYGplatform',
		'AD',
		'AdManager',
		'AndroidAdapter',
		'AndroidH5Adapter',
		'BaseAdapter',
		'BaseGxConstant',
		'BaseGxGame',
		'DataManager',
		'DataStorage',
		'EventManager',
		'GameManager',
		'GameScene',
		'GxAdParams',
		'GxAudioUtil',
		'GxConstant',
		'GxEnum',
		'GxFirstScene',
		'GxGame',
		'GxLabelUtil',
		'GxLog',
		'GxLogo',
		'GxTimer',
		'GxUtils',
		'Gx_GameOverAD',
		'Gx_add_icon',
		'Gx_authorize',
		'Gx_crazypoint',
		'Gx_gameBox',
		'Gx_privacy',
		'Gx_shareFriend',
		'Gx_submsg',
		'Gx_toast',
		'H54399Adapter',
		'HwAdapter',
		'KsAdapter',
		'LoadingScene',
		'MiAdapter',
		'OpenDataUtil',
		'OppoAdapter',
		'QQAdapter',
		'ResManager',
		'ResUtil',
		'SoundManager',
		'TDSDK',
		'TTAdapter',
		'Utils',
		'VivoAdapter',
		'WxAdapter',
		'WxCustomAd',
		'gx_native_banner',
		'gx_native_icon',
		'gx_native_inner_interstitial',
		'gx_native_interstitial',
		'loadBundle',
		'ui_box',
		'ui_defeat',
		'ui_game',
		'ui_home',
		'ui_level',
		'ui_pause',
		'ui_skin',
		'ui_tips',
		'ui_victory'
	]
);
