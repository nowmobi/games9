DistLib.PartnerAPI.Poki = function( cfg, game){

	DistLib.PartnerAPI.call(this, cfg);

	this.game = game;
	this._id = cfg.PC.id;

	this.useBrandingLogo = true;

	this.hasOwnSplashScreen = true;
	this.isLogoClickable = false;
	this.defaulAdsEnabled = false;

	this.brandingLogoData = null;
	this.brandingLogoAction = null;


	this.loaded = true;

};

DistLib.PartnerAPI.Poki.prototype = Object.create(DistLib.PartnerAPI.prototype);
DistLib.PartnerAPI.Poki.prototype.constructor = DistLib.PartnerAPI.Poki;

// Generic PartnerJS usage:
DistLib.PartnerAPI.PartnerJS = DistLib.PartnerAPI.Poki;