(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"library/images/clouds_img.png", id:"clouds_img"},
		{src:"library/images/storage_atlas_.png", id:"storage_atlas_"},
		{src:"library/images/storage_atlas_2.png", id:"storage_atlas_2"},
		{src:"library/images/storage_atlas_3.png", id:"storage_atlas_3"},
		{src:"library/images/storage_atlas_4.png", id:"storage_atlas_4"},
		{src:"library/images/storage_atlas_5.png", id:"storage_atlas_5"},
		{src:"library/images/storage_atlas_6.png", id:"storage_atlas_6"},
		{src:"library/images/storage_atlas_7.png", id:"storage_atlas_7"},
		{src:"library/images/storage_atlas_8.png", id:"storage_atlas_8"},
		{src:"library/images/storage_atlas_9.png", id:"storage_atlas_9"},
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"},
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"},
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"},
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"},
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"},
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_7", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_8", frames: [[0,602,997,532],[0,0,1200,600]]},
		{name:"storage_atlas_9", frames: [[0,0,762,600],[0,602,727,600]]},
		{name:"storage_atlas_10", frames: [[680,553,602,581],[0,553,678,551],[0,0,742,551]]},
		{name:"storage_atlas_11", frames: [[537,0,580,420],[0,0,535,600],[507,602,465,600],[0,602,505,584]]},
		{name:"storage_atlas_12", frames: [[0,844,1200,200],[582,0,580,420],[0,0,580,420],[0,422,580,420]]},
		{name:"storage_atlas_13", frames: [[788,402,500,300],[642,704,500,300],[365,0,421,486],[0,0,363,600],[788,0,400,400],[0,602,640,280],[0,884,640,280]]},
		{name:"storage_atlas_14", frames: [[502,0,500,300],[0,0,500,300],[884,719,360,350],[884,302,324,415],[0,302,380,380],[0,684,380,380],[382,866,500,280],[382,302,500,280],[382,584,500,280]]},
		{name:"storage_atlas_15", frames: [[664,998,300,300],[362,998,300,300],[0,985,360,280],[0,0,333,378],[0,666,327,317],[857,0,327,317],[362,726,341,270],[335,222,520,220],[335,0,520,220],[884,601,360,280],[522,444,360,280],[884,319,360,280],[0,444,520,220]]},
		{name:"storage_atlas_16", frames: [[0,364,360,220],[331,1010,270,250],[964,0,330,260],[573,760,270,230],[823,492,236,261],[817,262,341,228],[0,1058,329,208],[930,941,284,196],[583,492,238,266],[300,754,271,254],[362,432,219,320],[482,182,333,248],[603,992,325,184],[930,755,325,184],[0,822,298,234],[0,586,298,234],[482,0,480,180],[0,0,480,180],[0,182,480,180]]},
		{name:"storage_atlas_17", frames: [[271,0,250,210],[622,720,395,102],[666,282,200,226],[0,457,200,226],[630,824,200,200],[420,1065,200,200],[622,1065,200,200],[824,1026,200,200],[832,824,200,200],[1034,552,200,200],[1034,754,200,200],[1034,956,200,200],[443,218,221,215],[758,0,172,280],[0,0,269,203],[0,205,206,250],[868,392,284,158],[208,430,220,208],[523,0,233,216],[208,212,233,216],[932,0,233,194],[932,196,233,194],[412,645,208,208],[0,850,208,208],[0,1060,208,208],[210,855,208,208],[210,1065,208,208],[420,855,208,208],[640,510,208,208],[430,435,208,208],[202,640,208,208]]},
		{name:"storage_atlas_18", frames: [[419,593,190,190],[404,0,200,200],[0,606,200,200],[979,1073,110,200],[419,785,190,190],[919,694,168,167],[202,404,200,197],[404,202,200,197],[870,1073,107,206],[0,0,200,200],[0,202,200,200],[202,0,200,200],[606,139,200,196],[0,808,200,196],[0,404,200,200],[202,202,200,200],[708,997,160,200],[893,991,290,80],[404,401,190,190],[1098,819,170,137],[521,997,185,175],[606,0,288,137],[0,1006,163,227],[1088,0,181,194],[611,527,210,166],[1179,196,112,209],[1094,526,170,141],[997,196,180,161],[332,977,187,177],[165,1006,165,203],[1094,669,161,148],[919,526,173,166],[997,359,155,165],[202,603,215,176],[202,781,215,176],[606,337,186,188],[1091,1073,150,142],[611,695,194,178],[808,192,187,171],[332,1156,187,132],[794,365,186,159],[896,0,190,190],[611,875,280,120],[893,863,203,126],[823,526,94,314]]},
		{name:"storage_atlas_19", frames: [[182,540,89,143],[366,298,120,120],[812,271,120,120],[244,296,120,120],[914,462,50,50],[662,597,57,41],[62,887,57,41],[868,898,57,41],[488,364,120,120],[0,0,108,197],[934,299,84,161],[0,587,69,161],[182,505,41,31],[446,762,80,80],[0,261,120,120],[690,271,120,120],[568,242,120,120],[122,261,120,120],[469,145,97,151],[71,691,78,112],[253,747,91,75],[273,540,91,137],[732,475,36,36],[59,199,48,48],[662,644,160,60],[728,82,210,82],[366,542,117,98],[269,0,165,123],[913,727,92,87],[110,0,157,132],[110,134,121,125],[856,166,87,100],[732,515,113,127],[366,642,78,126],[485,608,116,90],[847,515,126,108],[436,0,136,143],[574,0,152,127],[714,166,140,103],[365,145,102,145],[269,125,94,169],[488,298,59,56],[614,850,59,56],[574,129,138,111],[948,625,70,100],[824,727,87,97],[71,587,103,102],[927,898,74,30],[610,364,29,27],[610,809,31,28],[0,505,180,80],[728,0,220,80],[488,486,120,120],[528,762,80,80],[975,816,40,55],[868,826,40,43],[1002,0,10,11],[0,750,69,94],[151,747,100,73],[0,199,57,60],[847,625,99,100],[244,231,23,38],[233,134,31,31],[727,850,50,50],[975,462,40,147],[610,597,50,210],[950,0,50,297],[71,805,60,80],[133,822,60,80],[257,824,60,80],[913,816,60,80],[195,824,60,80],[806,826,60,80],[744,768,60,80],[428,844,60,80],[490,844,60,80],[552,844,60,80],[662,768,80,80],[319,852,50,50],[346,770,80,80],[0,846,60,80],[446,642,30,30],[0,383,120,120],[244,418,120,120],[366,420,120,120],[122,383,120,120],[792,393,120,120],[610,475,120,120],[610,393,180,80],[233,199,30,30],[233,167,30,30],[446,700,160,60],[662,706,160,60],[176,685,160,60],[675,850,50,50]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anemo1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anemo1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.anemo1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.anemo1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_help_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_start_level_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blesk_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.butterfly1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.butterfly2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.butterfly3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.clouds_img = function() {
	this.initialize(img.clouds_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1551,200);


(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_location_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_location_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_location_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_location_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dendro1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dendro1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dendro1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dendro1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.electro1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.electro1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.electro1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.electro1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.electro1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash_first_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash_second_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash_second_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash_second_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.found_list_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.geo1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.geo1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.geo1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.geo1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.geo1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gidro1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gidro1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.gidro1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.gidro1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hints_button_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hints_substrate_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.item1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.item1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.item1_31_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.item1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.item1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.item1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.item1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.item2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.item2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.item2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.item2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.item2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.item2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.item2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.item3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.item3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.item3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.item3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.item3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.item3_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.item3_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.item4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.item4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.item4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.item4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.item4_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.item4_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.item4_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.item4_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.item5_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.item5_10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.item5_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.item5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.item5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.item5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.item5_41_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.item5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.item5_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.item5_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.item5_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.item5_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.item5_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.item6_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.item6_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.item6_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.item6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.item6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.item6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.item6_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.item6_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.item6_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.item6_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.item6_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.item6_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.leaf_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lepestok1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lepestok2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.list_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.luch_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mini_play_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.minimap0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.minimap_icon6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.minus_timer_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.number_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.number_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.number_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.number_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.number_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.number_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.number_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.number_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.number_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.number_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.plus_timer_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.rainbow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ray2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.red_sparkle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.simple_counter_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.simple_timer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.snow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.snow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.snow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.snow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.snow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.snow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.snow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.snow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.snow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.stpirs_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.timer_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.tip_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.tip_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_help_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_help_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_help_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_hint_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.title_hint_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.title_hint_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_win_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_win_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_win_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.waterfall_cloud_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.waterfall_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.white_sparkle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_0_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-20,60,40);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],5.8,10.1,-7.6,-13.1).s().p("AhHCHQhAgCgYgqQgXgoAdg2QAeg5BEgmQBAgmA/ACQBAACAYApQAXApgeA2QgdA4hCAnQg+Akg9AAIgGAAg");
	this.shape.setTransform(-54,-91.1,1.97,1.97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.2,5.9,3,-7.9).s().p("AgUA7QglgHgUgVQgUgVAKgXQAJgZAggMQAhgOAjAHQAlAFAUAVQATAWgJAWQgKAZggAMQgXAKgYAAQgKAAgKgBg");
	this.shape_1.setTransform(0.2,-117.4,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-0.8,-102.7,-0.7,33.2).s().p("AmUFDQioiGABi9QgBi9CoiGQCoiGDsAAQDtAACoCGQCnCGAAC9QAAC9inCGQioCGjtABQjsgBioiGg");
	this.shape_2.setTransform(0.5,-47.8,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.5,4.5,0.5,38.5).s().p("Am5B1QivitgIjzQALC0CsB/QC3CKECAAQEDAAC4iKQCph/ANiyQgJDyitCsQi4C3kDAAQkCAAi3i3g");
	this.shape_3.setTransform(0,64.1,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],17,-23,0,17,-23,112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_4.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,63,0,-69).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_5.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCCFF"],[0,1],0,-59.9,0,60).s().p("AmoJIQgZgRgPgbQgOgeAAggIAAu7QAAggAOgeQAPgbAZgRQAZgQAdAAQAdAAAaAQILkHfQAZARAPAcQAOAcAAAfQAAAggOAcQgPAcgZARIrkHfQgaAQgdAAQgdAAgZgQg");
	this.shape.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
	this.shape.setTransform(150,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,70);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
	this.shape.setTransform(130,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,21.5);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-25,0,25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,50);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#6699FF","#66CCFF"],[0,0.494,1],20,15,20,-15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,30);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-23,60,46.1);
p.frameBounds = [rect];


(lib.preloader_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-88.5,180,177.1);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-6,70,12);
p.frameBounds = [rect];


(lib.orientation_lock_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.orientation_lock_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-175,270,350);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.instruction_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("text", "100px 'Arial'");
	this.text.lineHeight = 114;
	this.text.lineWidth = 317;
	this.text.setTransform(-158.4,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.4,-57.8,321,115.8);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.waterfall11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.waterfall_img();
	this.instance.setTransform(-47,65);

	this.instance_1 = new lib.waterfall_img();
	this.instance_1.setTransform(-47,-157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-157,94,536);
p.frameBounds = [rect];


(lib.waterfall_cloud1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.waterfall_cloud_img();
	this.instance.setTransform(-101.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.5,-63,203,126);
p.frameBounds = [rect];


(lib.tip_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tip_1_img();
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.tip_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tip_0_img();
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.timer_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.timer_bg_img();
	this.instance.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.stpirs1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stpirs_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.snow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow_1_img();

	this.instance_1 = new lib.snow_2_img();

	this.instance_2 = new lib.snow_3_img();

	this.instance_3 = new lib.snow_4_img();

	this.instance_4 = new lib.snow_5_img();

	this.instance_5 = new lib.snow_6_img();

	this.instance_6 = new lib.snow_7_img();

	this.instance_7 = new lib.snow_8_img();

	this.instance_8 = new lib.snow_9_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[]},2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,208,208);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.r3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rainbow_img();
	this.instance.setTransform(-170.5,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.5,-135,341,270);
p.frameBounds = [rect];


(lib.r2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ray2_img();
	this.instance.setTransform(-181.5,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.5,-300,363,600);
p.frameBounds = [rect];


(lib.plus_timer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.plus_timer_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.minus_timer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minus_timer_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.minimap0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap0_img();
	this.instance.setTransform(-371,-276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-371,-276,742,551);
p.frameBounds = [rect];


(lib.luch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.luch_img();
	this.instance.setTransform(-498.5,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-498.5,-266,997,532);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon5_1_img();
	this.instance.setTransform(-116.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-97,233,194);
p.frameBounds = [rect];


(lib.location_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon6_1_img();
	this.instance.setTransform(-107.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-88,215,176);
p.frameBounds = [rect];


(lib.location_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon4_1_img();
	this.instance.setTransform(-149,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-117,298,234);
p.frameBounds = [rect];


(lib.location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon3_1_img();
	this.instance.setTransform(-117,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-108,233,216);
p.frameBounds = [rect];


(lib.location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon2_1_img();
	this.instance.setTransform(-163.5,-158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-158.5,327,317);
p.frameBounds = [rect];


(lib.location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon1_1_img();
	this.instance.setTransform(-162.5,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-92,325,184);
p.frameBounds = [rect];


(lib.location_0_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon5_2_img();
	this.instance.setTransform(-116.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-97,233,194);
p.frameBounds = [rect];


(lib.location_0_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon6_2_img();
	this.instance.setTransform(-107.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-88,215,176);
p.frameBounds = [rect];


(lib.location_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon4_2_img();
	this.instance.setTransform(-149,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-117,298,234);
p.frameBounds = [rect];


(lib.location_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon3_2_img();
	this.instance.setTransform(-117,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-108,233,216);
p.frameBounds = [rect];


(lib.location_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon2_2_img();
	this.instance.setTransform(-163.5,-158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-158.5,327,317);
p.frameBounds = [rect];


(lib.location_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.minimap_icon1_2_img();
	this.instance.setTransform(-162.5,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-92,325,184);
p.frameBounds = [rect];


(lib.list_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.list_bg_img();
	this.instance.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.lepestok2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok2_img();
	this.instance.setTransform(-15.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,-14,31,28);
p.frameBounds = [rect];


(lib.lepestok1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok1_img();
	this.instance.setTransform(-14.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-13.5,29,27);
p.frameBounds = [rect];


(lib.l1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leaf_img();
	this.instance.setTransform(-37,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-15,74,30);
p.frameBounds = [rect];


(lib.item6_122_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item6_12_img();
	this.instance.setTransform(-110,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhqQhIgRgUIlFwqInRCPIjZj8IgPr+IFCgrIBZIQIFDh/IhDm/ILJhfIBAAnICVEkIhZC4IEuDsIgEgIIEnkzICCBPIBAGrIhiDCIvOM/IAYCZIhAA5g");
	this.shape.setTransform(0.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.8,-109,229.4,217.8);
p.frameBounds = [rect];


(lib.item6_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_11_img();
	this.instance.setTransform(-166.5,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoeSwIrnk7InmmQIFSi8ISClIIPTEFIhgqpICznoIKrl8IBFCnIhMEbIELC0IAuByIrmgQIFdQOIhZHNIo8Gcg");
	this.shape.setTransform(-2.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.8,-131,354.6,264.2);
p.frameBounds = [rect, null];


(lib.item6_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_8_img();
	this.instance.setTransform(-77.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AixKIIi8A4IhWhnIC/juIksASIAQh+IjDAAIhahsIAIgdIL4qEIoQi4IARg/IG5hEILbAfIARBEIoFDLIK/I6IAbBwIg/BQIjWgMIBRCoIl4gNIDMDxIhUBrIhegGIiTCDIkGADg");
	this.shape.setTransform(0.9,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.1,-84.8,166.1,168.6);
p.frameBounds = [rect, null];


(lib.item6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_2_img();
	this.instance.setTransform(-29.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlyBNICdl7IHagjIBuFDIk1Fgg");
	this.shape.setTransform(-1.8,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.9,-32.9,74.4,67.8);
p.frameBounds = [rect, null];


(lib.item5_411_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item5_41_img();
	this.instance.setTransform(-162,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162,-207.5,324,415);
p.frameBounds = [rect];


(lib.item5_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_11_img();
	this.instance.setTransform(-103,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuYhWIEHlWIY0r2IAtFgIv+JPIHBEHIgISII1aAHg");
	this.shape.setTransform(12.1,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-136.4,212.8,261.5);
p.frameBounds = [rect, null];


(lib.item5_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_9_img();
	this.instance.setTransform(-47,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmHLFIAz4DIIYgQIDEY9IhOBIIoCAYg");
	this.shape.setTransform(2.2,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-89.4,94,173.9);
p.frameBounds = [rect, null];


(lib.item5_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item5_5_img();
	this.instance.setTransform(-142,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmSL1IjOjxIjlASIgmioImNgxIj1h8IQEwNIPhBIIP2VlIrYBiIlNiuIj9D+ImvA6g");
	this.shape.setTransform(0.6,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.2,-83.6,303.7,169.2);
p.frameBounds = [rect];


(lib.item5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_3_img();
	this.instance.setTransform(-68,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ABGL1IiAioIgzlnIjhAGIhChWIhzmgIjFhZIgThrIMPk3IIOErICaGBIgfI3Ih3Eog");
	this.shape.setTransform(-2.8,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.1,-79.7,146.5,155);
p.frameBounds = [rect, null];


(lib.item4_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_7_img();
	this.instance.setTransform(-58,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfCiIDInxIGjjPIH4DiIDbJdIo5DtIo7ARg");
	this.shape.setTransform(-0.5,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-56.7,134.4,108.7);
p.frameBounds = [rect, null];


(lib.item3_72_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_7_img();
	this.instance.setTransform(-135.5,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-127,271,254);
p.frameBounds = [rect];


(lib.item3_62_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_6_img();
	this.instance.setTransform(-119,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-125,238,266);
p.frameBounds = [rect];


(lib.item3_52_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_5_img();
	this.instance.setTransform(-81.5,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-113.5,163,227);
p.frameBounds = [rect];


(lib.item3_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_4_img();
	this.instance.setTransform(-166.5,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-189,333,378);
p.frameBounds = [rect];


(lib.item3_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_3_img();
	this.instance.setTransform(-43.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-50,87,100);
p.frameBounds = [rect];


(lib.item3_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_2_img();
	this.instance.setTransform(-60.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-62.5,121,125);
p.frameBounds = [rect];


(lib.item3_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item3_1_img();
	this.instance.setTransform(-86,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-140,172,280);
p.frameBounds = [rect];


(lib.item2_72_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_7_img();
	this.instance.setTransform(-142,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A26EoIgSh7IbEycIClBMIQwYaIhCCBI4tD4g");
	this.shape.setTransform(0.2,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.3,-105.6,297.1,203.6);
p.frameBounds = [rect];


(lib.item2_62_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_6_img();
	this.instance.setTransform(-164.5,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-104,329,208);
p.frameBounds = [rect];


(lib.item2_52_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_5_img();
	this.instance.setTransform(-78.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-66,157,132);
p.frameBounds = [rect];


(lib.item2_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_4_img();
	this.instance.setTransform(-46,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-43.5,92,87);
p.frameBounds = [rect];


(lib.item2_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_3_img();
	this.instance.setTransform(-144,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144,-68.5,288,137);
p.frameBounds = [rect];


(lib.item2_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_2_img();
	this.instance.setTransform(-170.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.5,-114,341,228);
p.frameBounds = [rect];


(lib.item2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item2_1_img();
	this.instance.setTransform(-82.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-61.5,165,123);
p.frameBounds = [rect];


(lib.i161_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_6_img();
	this.instance.setTransform(-58.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-49,117,98);
p.frameBounds = [rect];


(lib.i151_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_5_img();
	this.instance.setTransform(-105,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-41,210,82);
p.frameBounds = [rect];


(lib.i141_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_4_img();
	this.instance.setTransform(-92.5,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-87.5,185,175);
p.frameBounds = [rect];


(lib.i131_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_31_img();
	this.instance.setTransform(-85,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-68.5,170,137);
p.frameBounds = [rect];


(lib.i111_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item1_1_img();
	this.instance.setTransform(-110.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.5,-107.5,221,215);
p.frameBounds = [rect];


(lib.hints_substrate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hints_substrate_img();
	this.instance.setTransform(-145,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-40,290,80);
p.frameBounds = [rect];


(lib.hero6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero6_img();
	this.instance.setTransform(-364,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-364,-300,727,600);
p.frameBounds = [rect];


(lib.hero5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero5_img();
	this.instance.setTransform(-339,-276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-339,-276,678,551);
p.frameBounds = [rect];


(lib.hero4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_img();
	this.instance.setTransform(-233,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233,-300,465,600);
p.frameBounds = [rect];


(lib.hero3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_img();
	this.instance.setTransform(-301,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-301,-291,602,581);
p.frameBounds = [rect];


(lib.hero2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_img();
	this.instance.setTransform(-381,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-381,-300,762,600);
p.frameBounds = [rect];


(lib.hero1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_img();
	this.instance.setTransform(-268,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268,-300,535,600);
p.frameBounds = [rect];


(lib.gidro1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gidro1_4_img();
	this.instance.setTransform(-45.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-68.5,91,137);
p.frameBounds = [rect];


(lib.gidro1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gidro1_3_img();
	this.instance.setTransform(-80,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.gidro1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gidro1_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.geo1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.geo1_5_img();
	this.instance.setTransform(-45.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-37.5,91,75);
p.frameBounds = [rect];


(lib.geo1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.geo1_4_img();
	this.instance.setTransform(-39,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-56,78,112);
p.frameBounds = [rect];


(lib.geo1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.geo1_3_img();
	this.instance.setTransform(-48.5,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-75.5,97,151);
p.frameBounds = [rect];


(lib.geo1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.geo1_2_img();
	this.instance.setTransform(-100,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-98,200,196);
p.frameBounds = [rect];


(lib.found_list_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.found_list_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.electro1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.electro1_5_img();
	this.instance.setTransform(-20.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-15.5,41,31);
p.frameBounds = [rect];


(lib.electro1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.electro1_4_img();
	this.instance.setTransform(-53.5,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-103,107,206);
p.frameBounds = [rect];


(lib.electro1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.electro1_3_img();
	this.instance.setTransform(-34.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-80.5,69,161);
p.frameBounds = [rect];


(lib.electro1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.electro1_2_img();
	this.instance.setTransform(-100,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-113,200,226);
p.frameBounds = [rect];


(lib.dendro1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dendro1_4_img();
	this.instance.setTransform(-42,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-80.5,84,161);
p.frameBounds = [rect];


(lib.dendro1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dendro1_3_img();
	this.instance.setTransform(-54,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-98.5,108,197);
p.frameBounds = [rect];


(lib.dendro1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dendro1_2_img();
	this.instance.setTransform(-100,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-98.5,200,197);
p.frameBounds = [rect];


(lib.clouds2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.clouds_img();
	this.instance.setTransform(-775.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-775.5,-100,1551,200);
p.frameBounds = [rect];


(lib.butt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butterfly1_img();

	this.instance_1 = new lib.butterfly2_img();

	this.instance_2 = new lib.butterfly3_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,57,41);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_win_en_img();
	this.instance.setTransform(-240,-90);

	this.instance_1 = new lib.title_win_ru_img();
	this.instance_1.setTransform(-240,-90);

	this.instance_2 = new lib.title_win_tr_img();
	this.instance_2.setTransform(-240,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-90,480,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_start_level_en_img();
	this.instance.setTransform(-180,-140);

	this.instance_1 = new lib.title_start_level_ru_img();
	this.instance_1.setTransform(-180,-140);

	this.instance_2 = new lib.title_start_level_tr_img();
	this.instance_2.setTransform(-180,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-140,360,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-260,-110);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-260,-110);

	this.instance_2 = new lib.title_tr_img();
	this.instance_2.setTransform(-260,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-110,520,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_loss_en_img();
	this.instance.setTransform(-250,-140);

	this.instance_1 = new lib.title_loss_ru_img();
	this.instance_1.setTransform(-250,-140);

	this.instance_2 = new lib.title_loss_tr_img();
	this.instance_2.setTransform(-250,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_hint_en_img();
	this.instance.setTransform(-80,-30);

	this.instance_1 = new lib.title_hint_ru_img();
	this.instance_1.setTransform(-80,-30);

	this.instance_2 = new lib.title_hint_tr_img();
	this.instance_2.setTransform(-80,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_help_en_img();
	this.instance.setTransform(-290,-210);

	this.instance_1 = new lib.title_help_ru_img();
	this.instance_1.setTransform(-290,-210);

	this.instance_2 = new lib.title_help_tr_img();
	this.instance_2.setTransform(-290,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-210,580,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_current_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_6_img();
	this.instance.setTransform(-125,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-105,250,210);
p.frameBounds = [rect];


(lib.body_current_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_5_img();
	this.instance.setTransform(-135,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-115,270,230);
p.frameBounds = [rect];


(lib.body_current_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_4_img();
	this.instance.setTransform(-165,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-130,330,260);
p.frameBounds = [rect];


(lib.body_current_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_3_img();
	this.instance.setTransform(-135,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-125,270,250);
p.frameBounds = [rect];


(lib.body_current_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_2_img();
	this.instance.setTransform(-180,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-175,360,350);
p.frameBounds = [rect];


(lib.body_current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-180,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-110,360,220);
p.frameBounds = [rect];


(lib.big_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EurCAwbMAAAhg2MdWGAAAMAAABg2g");
	this.shape.setTransform(399.9,300,0.101,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1219.9,620);
p.frameBounds = [rect];


(lib.bg_title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_start_level_img();
	this.instance.setTransform(-180,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-140,360,280);
p.frameBounds = [rect];


(lib.bg_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_help_img();
	this.instance.setTransform(-290,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-210,580,420);
p.frameBounds = [rect];


(lib.anti_clicker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.animation_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.anemo1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.anemo1_4_img();
	this.instance.setTransform(-55,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-100,110,200);
p.frameBounds = [rect];


(lib.anemo1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.anemo1_3_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.anemo1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.anemo1_1_img();
	this.instance.setTransform(-44.5,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-71.5,89,143);
p.frameBounds = [rect];


(lib.curtain_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.copyright_body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// text
	this.instance = new lib.copyright_title_en_img();
	this.instance.setTransform(-250,-150);

	this.instance_1 = new lib.copyright_title_ru_img();
	this.instance_1.setTransform(-250,-150);

	this.instance_2 = new lib.copyright_title_tr_img();
	this.instance_2.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.copyright_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_1_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.white_sparkle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.white_sparkle_1_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.simple_timer_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.simple_timer_1_img();
	this.instance.setTransform(-10,-10,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect];


(lib.simple_timer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.number_0_img();
	this.instance.setTransform(-30,-40);

	this.instance_1 = new lib.number_1_img();
	this.instance_1.setTransform(-30,-40);

	this.instance_2 = new lib.number_2_img();
	this.instance_2.setTransform(-30,-40);

	this.instance_3 = new lib.number_3_img();
	this.instance_3.setTransform(-30,-40);

	this.instance_4 = new lib.number_4_img();
	this.instance_4.setTransform(-30,-40);

	this.instance_5 = new lib.number_5_img();
	this.instance_5.setTransform(-30,-40);

	this.instance_6 = new lib.number_6_img();
	this.instance_6.setTransform(-30,-40);

	this.instance_7 = new lib.number_7_img();
	this.instance_7.setTransform(-30,-40);

	this.instance_8 = new lib.number_8_img();
	this.instance_8.setTransform(-30,-40);

	this.instance_9 = new lib.number_9_img();
	this.instance_9.setTransform(-30,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.simple_counter_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.simple_counter_1_img();
	this.instance.setTransform(-30,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.simple_counter_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.number_0_img();
	this.instance.setTransform(-30,-40);

	this.instance_1 = new lib.number_1_img();
	this.instance_1.setTransform(-30,-40);

	this.instance_2 = new lib.number_2_img();
	this.instance_2.setTransform(-30,-40);

	this.instance_3 = new lib.number_3_img();
	this.instance_3.setTransform(-30,-40);

	this.instance_4 = new lib.number_4_img();
	this.instance_4.setTransform(-30,-40);

	this.instance_5 = new lib.number_5_img();
	this.instance_5.setTransform(-30,-40);

	this.instance_6 = new lib.number_6_img();
	this.instance_6.setTransform(-30,-40);

	this.instance_7 = new lib.number_7_img();
	this.instance_7.setTransform(-30,-40);

	this.instance_8 = new lib.number_8_img();
	this.instance_8.setTransform(-30,-40);

	this.instance_9 = new lib.number_9_img();
	this.instance_9.setTransform(-30,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.red_sparkle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.red_sparkle_1_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


(lib.flash_second_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.flash_second_1_img();
	this.instance.setTransform(-100,-100);

	this.instance_1 = new lib.flash_second_2_img();
	this.instance_1.setTransform(-100,-100);

	this.instance_2 = new lib.flash_second_3_img();
	this.instance_2.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.flash_first_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// animation
	this.instance = new lib.flash_first_1_img();
	this.instance.setTransform(-100,-100);

	this.instance_1 = new lib.flash_first_2_img();
	this.instance_1.setTransform(-100,-100);

	this.instance_2 = new lib.flash_first_3_img();
	this.instance_2.setTransform(-100,-100);

	this.instance_3 = new lib.flash_first_4_img();
	this.instance_3.setTransform(-100,-100);

	this.instance_4 = new lib.flash_first_5_img();
	this.instance_4.setTransform(-100,-100);

	this.instance_5 = new lib.flash_first_6_img();
	this.instance_5.setTransform(-100,-100);

	this.instance_6 = new lib.flash_first_7_img();
	this.instance_6.setTransform(-100,-100);

	this.instance_7 = new lib.flash_first_8_img();
	this.instance_7.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.social_network_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vk:0,fb:1,youtube:2,twitter:3});

	// graph
	this.instance = new lib.social_network_1_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.social_network_2_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.social_network_3_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.social_network_4_img();
	this.instance_3.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// bg
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, null];


(lib.play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.more_games_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_19_img();
	this.instance.setTransform(-0.4,-0.2,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.4,-0.2,8.1,8);
p.frameBounds = [rect];


(lib.more_games_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_18_img();
	this.instance.setTransform(0,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,16.6,27.4);
p.frameBounds = [rect];


(lib.more_games_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_17_img();
	this.instance.setTransform(-0.1,-0.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-0.1,23.8,24);
p.frameBounds = [rect];


(lib.more_games_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,50);
p.frameBounds = [rect];


(lib.more_games_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_16_img();
	this.instance.setTransform(2.7,-7.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.7,-7.5,41.1,43.2);
p.frameBounds = [rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_img();
	this.instance.setTransform(-69.8,-64.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-64.1,139.7,128.2);
p.frameBounds = [rect];


(lib.more_games_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_15_img();
	this.instance.setTransform(0,0,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.2,60);
p.frameBounds = [rect];


(lib.more_games_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_14_img();
	this.instance.setTransform(0.3,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.3,0.1,49.7,67.7);
p.frameBounds = [rect];


(lib.more_games_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_13_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,7.2,7.9);
p.frameBounds = [rect];


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_10_img();
	this.instance.setTransform(0,1.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,1.5,133.9,135.4);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_9_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,133.9,114.5);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_8_img();
	this.instance.setTransform(-0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,134.7,95.1);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_img();
	this.instance.setTransform(-0.3,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,0,134.7,123.1);
p.frameBounds = [rect];


(lib.mini_play_icon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_play_icon_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect];


(lib.instruction_1_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.full_screen_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_small_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.beam_light_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.024,0.494,0.984],-75.1,0,74.9,0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.banner_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_antiblocking_ads_en_img();
	this.instance.setTransform(-320,-140);

	this.instance_1 = new lib.title_antiblocking_ads_ru_img();
	this.instance_1.setTransform(-320,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.antiblocking_ads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:200,alpha:1},10).to({y:230},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance_1 = new lib.redirect_4_mc();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_2 = new lib.redirect_5_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_3 = new lib.redirect_4_mc();
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_4 = new lib.redirect_3_mc();
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,670);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,650), new cjs.Rectangle(-210,-210,420,630), new cjs.Rectangle(-210,-210,420,610), new cjs.Rectangle(-210,-210,420,590), new cjs.Rectangle(-210,-210,420,570), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,530), rect=new cjs.Rectangle(-210,-210,420,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,534), new cjs.Rectangle(-210,-210,420,551), new cjs.Rectangle(-210,-210,420,568), new cjs.Rectangle(-210,-210,420,585), new cjs.Rectangle(-210,-210,420,602), new cjs.Rectangle(-210,-210,420,619), new cjs.Rectangle(-210,-210,420,636), new cjs.Rectangle(-210,-210,420,653), new cjs.Rectangle(-210,-210,420,670)];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.3,-63,100.8,126), new cjs.Rectangle(-54.5,-66,105.6,132), new cjs.Rectangle(-58.8,-69,110.4,138), new cjs.Rectangle(-63.2,-72,115.2,144), new cjs.Rectangle(-67.5,-75,120,150), new cjs.Rectangle(-65.4,-75,120,150), new cjs.Rectangle(-63.4,-75,120,150), new cjs.Rectangle(-61.4,-75,120,150), new cjs.Rectangle(-59.5,-75,120,150), new cjs.Rectangle(-57.5,-75,120,150), new cjs.Rectangle(-55.5,-75,120,150), new cjs.Rectangle(-53.5,-75,120,150), new cjs.Rectangle(-51.5,-75,120,150), new cjs.Rectangle(-49.5,-75,120,150), new cjs.Rectangle(-47.5,-75,120,150), new cjs.Rectangle(-47.2,-72,115.2,144), new cjs.Rectangle(-47,-69,110.4,138), new cjs.Rectangle(-46.7,-66,105.6,132), new cjs.Rectangle(-46.4,-63,100.8,126), rect=new cjs.Rectangle(-46,-60,96,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_16_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_14_mc();
	this.instance.setTransform(0,0.1,0.462,0.462,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(130,32,0.4,0.4);

	this.instance_1 = new lib.preloader_18_mc();
	this.instance_1.setTransform(130,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
	mask.setTransform(130,15);

	// shadow
	this.instance_2 = new lib.preloader_10_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.preloader_7_mc();
	this.instance_3.setTransform(0,0,0.003,1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1},99).wait(1));

	// bg
	this.instance_4 = new lib.preloader_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// shadow
	this.instance_5 = new lib.preloader_11_mc();
	this.instance_5.setTransform(-20,-20);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-525,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-455,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-385,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-315,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-245,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-105.5,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-175,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(525,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(455,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(385,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(315,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(245,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(175,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(105,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(35,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-555,-23,1110,46.1);
p.frameBounds = [rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-560,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-490,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-420,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-350,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-280,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-210,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-140,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(-70,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(560,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(490,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(420,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(350,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(280,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(210,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(140,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(70,0);

	this.instance_16 = new lib.preloader_2_mc();
	this.instance_16.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-590,-23,1180,46.1);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_4_mc();
	this.instance.setTransform(400,50);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_4_mc();
	this.instance_1.setTransform(400,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_3_mc();
	this.instance_2.setTransform(400,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_3_mc();
	this.instance_3.setTransform(400,100);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_4_mc();
	this.instance_4.setTransform(400,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_4_mc();
	this.instance_5.setTransform(400,150);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_3_mc();
	this.instance_6.setTransform(400,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_3_mc();
	this.instance_7.setTransform(400,200);
	this.instance_7.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_8 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(60,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-12,107,24);
p.frameBounds = [rect];


(lib.waterfall_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AneTdUAA+gldADhABmQAnhPBgAbIAAABQAmhFBrAGQBHgyAyAPQBGhIA3AxQA5goA8AgMAAbAmrg");
	mask.setTransform(-1.1,1.4);

	// Слой 1
	this.instance = new lib.waterfall11_mc();
	this.instance.setTransform(0,-230);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-123.1,93.9,249.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.waterfall_cloud_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.waterfall_cloud1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.5,-63,203,126);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_win_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-90,480,180);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-110,520,220);
p.frameBounds = [rect];


(lib.title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_loss_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect];


(lib.title_hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_hint_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-29.5,160,60);
p.frameBounds = [rect];


(lib.title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_help_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_help_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-210,580,420);
p.frameBounds = [rect];


(lib.tip_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.tip_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.41,scaleY:1.41},4).to({scaleX:1,scaleY:1,alpha:0.012},5).wait(1));

	// animation
	this.instance_1 = new lib.tip_0_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.41,scaleY:1.41,alpha:1},0).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect, new cjs.Rectangle(-16.5,-16.5,33.1,33.1), new cjs.Rectangle(-18,-18,36.1,36.1), new cjs.Rectangle(-19.5,-19.5,39.2,39.2), new cjs.Rectangle(-21.1,-21.1,42.2,42.2), new cjs.Rectangle(-19.8,-19.8,39.8,39.8), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-17.4,-17.4,34.8,34.8), new cjs.Rectangle(-16.2,-16.2,32.5,32.5), new cjs.Rectangle(-15,-15,30,30)];


(lib.stpirs_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.stpirs1_mc();
	this.instance.setTransform(0,-109);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},113).to({alpha:0.012},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-409,1200,600);
p.frameBounds = [rect, new cjs.Rectangle(-600,-408,1200,600), new cjs.Rectangle(-600,-407,1200,600), new cjs.Rectangle(-600,-406.1,1200,600), new cjs.Rectangle(-600,-405.1,1200,600), new cjs.Rectangle(-600,-404.2,1200,600), new cjs.Rectangle(-600,-403.2,1200,600), new cjs.Rectangle(-600,-402.2,1200,600), new cjs.Rectangle(-600,-401.3,1200,600), new cjs.Rectangle(-600,-400.3,1200,600), new cjs.Rectangle(-600,-399.3,1200,600), new cjs.Rectangle(-600,-398.4,1200,600), new cjs.Rectangle(-600,-397.4,1200,600), new cjs.Rectangle(-600,-396.4,1200,600), new cjs.Rectangle(-600,-395.5,1200,600), new cjs.Rectangle(-600,-394.5,1200,600), new cjs.Rectangle(-600,-393.5,1200,600), new cjs.Rectangle(-600,-392.6,1200,600), new cjs.Rectangle(-600,-391.6,1200,600), new cjs.Rectangle(-600,-390.6,1200,600), new cjs.Rectangle(-600,-389.7,1200,600), new cjs.Rectangle(-600,-388.7,1200,600), new cjs.Rectangle(-600,-387.8,1200,600), new cjs.Rectangle(-600,-386.8,1200,600), new cjs.Rectangle(-600,-385.8,1200,600), new cjs.Rectangle(-600,-384.9,1200,600), new cjs.Rectangle(-600,-383.9,1200,600), new cjs.Rectangle(-600,-382.9,1200,600), new cjs.Rectangle(-600,-382,1200,600), new cjs.Rectangle(-600,-381,1200,600), new cjs.Rectangle(-600,-380,1200,600), new cjs.Rectangle(-600,-379.1,1200,600), new cjs.Rectangle(-600,-378.1,1200,600), new cjs.Rectangle(-600,-377.1,1200,600), new cjs.Rectangle(-600,-376.2,1200,600), new cjs.Rectangle(-600,-375.2,1200,600), new cjs.Rectangle(-600,-374.2,1200,600), new cjs.Rectangle(-600,-373.3,1200,600), new cjs.Rectangle(-600,-372.3,1200,600), new cjs.Rectangle(-600,-371.4,1200,600), new cjs.Rectangle(-600,-370.4,1200,600), new cjs.Rectangle(-600,-369.4,1200,600), new cjs.Rectangle(-600,-368.5,1200,600), new cjs.Rectangle(-600,-367.5,1200,600), new cjs.Rectangle(-600,-366.5,1200,600), new cjs.Rectangle(-600,-365.6,1200,600), new cjs.Rectangle(-600,-364.6,1200,600), new cjs.Rectangle(-600,-363.6,1200,600), new cjs.Rectangle(-600,-362.7,1200,600), new cjs.Rectangle(-600,-361.7,1200,600), new cjs.Rectangle(-600,-360.7,1200,600), new cjs.Rectangle(-600,-359.8,1200,600), new cjs.Rectangle(-600,-358.8,1200,600), new cjs.Rectangle(-600,-357.9,1200,600), new cjs.Rectangle(-600,-356.9,1200,600), new cjs.Rectangle(-600,-355.9,1200,600), new cjs.Rectangle(-600,-355,1200,600), new cjs.Rectangle(-600,-354,1200,600), new cjs.Rectangle(-600,-353,1200,600), new cjs.Rectangle(-600,-352.1,1200,600), new cjs.Rectangle(-600,-351.1,1200,600), new cjs.Rectangle(-600,-350.1,1200,600), new cjs.Rectangle(-600,-349.2,1200,600), new cjs.Rectangle(-600,-348.2,1200,600), new cjs.Rectangle(-600,-347.2,1200,600), new cjs.Rectangle(-600,-346.3,1200,600), new cjs.Rectangle(-600,-345.3,1200,600), new cjs.Rectangle(-600,-344.3,1200,600), new cjs.Rectangle(-600,-343.4,1200,600), new cjs.Rectangle(-600,-342.4,1200,600), new cjs.Rectangle(-600,-341.5,1200,600), new cjs.Rectangle(-600,-340.5,1200,600), new cjs.Rectangle(-600,-339.5,1200,600), new cjs.Rectangle(-600,-338.6,1200,600), new cjs.Rectangle(-600,-337.6,1200,600), new cjs.Rectangle(-600,-336.6,1200,600), new cjs.Rectangle(-600,-335.7,1200,600), new cjs.Rectangle(-600,-334.7,1200,600), new cjs.Rectangle(-600,-333.7,1200,600), new cjs.Rectangle(-600,-332.8,1200,600), new cjs.Rectangle(-600,-331.8,1200,600), new cjs.Rectangle(-600,-330.8,1200,600), new cjs.Rectangle(-600,-329.9,1200,600), new cjs.Rectangle(-600,-328.9,1200,600), new cjs.Rectangle(-600,-327.9,1200,600), new cjs.Rectangle(-600,-327,1200,600), new cjs.Rectangle(-600,-326,1200,600), new cjs.Rectangle(-600,-325.1,1200,600), new cjs.Rectangle(-600,-324.1,1200,600), new cjs.Rectangle(-600,-323.1,1200,600), new cjs.Rectangle(-600,-322.2,1200,600), new cjs.Rectangle(-600,-321.2,1200,600), new cjs.Rectangle(-600,-320.2,1200,600), new cjs.Rectangle(-600,-319.3,1200,600), new cjs.Rectangle(-600,-318.3,1200,600), new cjs.Rectangle(-600,-317.3,1200,600), new cjs.Rectangle(-600,-316.4,1200,600), new cjs.Rectangle(-600,-315.4,1200,600), new cjs.Rectangle(-600,-314.4,1200,600), new cjs.Rectangle(-600,-313.5,1200,600), new cjs.Rectangle(-600,-312.5,1200,600), new cjs.Rectangle(-600,-311.6,1200,600), new cjs.Rectangle(-600,-310.6,1200,600), new cjs.Rectangle(-600,-309.6,1200,600), new cjs.Rectangle(-600,-308.7,1200,600), new cjs.Rectangle(-600,-307.7,1200,600), new cjs.Rectangle(-600,-306.7,1200,600), new cjs.Rectangle(-600,-305.8,1200,600), new cjs.Rectangle(-600,-304.8,1200,600), new cjs.Rectangle(-600,-303.8,1200,600), new cjs.Rectangle(-600,-302.9,1200,600), new cjs.Rectangle(-600,-301.9,1200,600), new cjs.Rectangle(-600,-300.9,1200,600), rect=new cjs.Rectangle(-600,-300,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ray2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.r2_mc();
	this.instance.setTransform(-4.8,-300.2,1,1,0,0,0,-4.8,-300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:43.2,x:-4.7,alpha:0.012},149).to({rotation:-5.9,x:-4.8},1).to({rotation:0,alpha:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.5,-300,363,600);
p.frameBounds = [rect, new cjs.Rectangle(-184.2,-300.8,365.7,601.7), new cjs.Rectangle(-186.9,-301.6,368.4,603.3), new cjs.Rectangle(-189.6,-302.4,371.1,604.8), new cjs.Rectangle(-192.3,-303.2,373.8,606.5), new cjs.Rectangle(-195,-304,376.5,608.1), new cjs.Rectangle(-197.7,-304.8,379.2,609.7), new cjs.Rectangle(-202.3,-306.2,383.8,612.3), new cjs.Rectangle(-205,-307,386.4,613.8), new cjs.Rectangle(-207.7,-307.8,389,615.3), new cjs.Rectangle(-210.4,-308.6,391.7,616.9), new cjs.Rectangle(-213.1,-309.4,394.3,618.3), new cjs.Rectangle(-215.7,-310.2,396.9,619.8), new cjs.Rectangle(-220.3,-311.5,401.5,622.4), new cjs.Rectangle(-223,-312.4,404.1,623.8), new cjs.Rectangle(-225.6,-313.2,406.6,625.3), new cjs.Rectangle(-228.3,-313.9,409.2,626.7), new cjs.Rectangle(-230.9,-314.7,411.8,628.1), new cjs.Rectangle(-233.6,-315.5,414.4,629.5), new cjs.Rectangle(-238.1,-316.9,418.8,631.8), new cjs.Rectangle(-240.8,-317.7,421.3,633.2), new cjs.Rectangle(-243.4,-318.5,423.8,634.6), new cjs.Rectangle(-246,-319.3,426.4,635.9), new cjs.Rectangle(-248.6,-320.1,428.9,637.2), new cjs.Rectangle(-251.2,-320.9,431.4,638.6), new cjs.Rectangle(-253.8,-321.7,433.9,639.9), new cjs.Rectangle(-258.3,-323.1,438.2,642.1), new cjs.Rectangle(-260.8,-323.8,440.6,643.3), new cjs.Rectangle(-263.4,-324.7,443.1,644.6), new cjs.Rectangle(-266,-325.4,445.6,645.8), new cjs.Rectangle(-268.6,-326.2,448,647), new cjs.Rectangle(-271.2,-327.1,450.5,648.2), new cjs.Rectangle(-275.6,-328.4,454.6,650.3), new cjs.Rectangle(-278.1,-329.2,457,651.4), new cjs.Rectangle(-280.7,-330,459.4,652.6), new cjs.Rectangle(-283.2,-330.8,461.8,653.7), new cjs.Rectangle(-285.7,-331.6,464.2,654.9), new cjs.Rectangle(-288.3,-332.3,466.6,656), new cjs.Rectangle(-292.6,-333.7,470.7,657.9), new cjs.Rectangle(-295.1,-334.5,473,659), new cjs.Rectangle(-297.7,-335.3,475.4,660.1), new cjs.Rectangle(-300.2,-336.1,477.7,661.1), new cjs.Rectangle(-302.6,-336.9,480,662.2), new cjs.Rectangle(-305.1,-337.6,482.3,663.2), new cjs.Rectangle(-309.4,-339,486.3,664.9), new cjs.Rectangle(-311.9,-339.8,488.5,665.9), new cjs.Rectangle(-314.3,-340.5,490.8,666.9), new cjs.Rectangle(-316.8,-341.3,493.1,667.9), new cjs.Rectangle(-319.3,-342.1,495.3,668.8), new cjs.Rectangle(-321.7,-342.9,497.6,669.7), new cjs.Rectangle(-324.2,-343.7,499.8,670.7), new cjs.Rectangle(-328.3,-345,503.6,672.2), new cjs.Rectangle(-330.8,-345.8,505.8,673.1), new cjs.Rectangle(-333.2,-346.6,508,673.9), new cjs.Rectangle(-335.6,-347.3,510.2,674.8), new cjs.Rectangle(-338,-348.1,512.3,675.7), new cjs.Rectangle(-340.4,-348.9,514.5,676.5), new cjs.Rectangle(-344.5,-350.2,518.2,677.8), new cjs.Rectangle(-346.9,-351,520.3,678.6), new cjs.Rectangle(-349.3,-351.7,522.5,679.4), new cjs.Rectangle(-351.6,-352.5,524.6,680.2), new cjs.Rectangle(-354,-353.3,526.7,681), new cjs.Rectangle(-356.3,-354,528.8,681.7), new cjs.Rectangle(-360.4,-355.3,532.3,682.9), new cjs.Rectangle(-362.7,-356.1,534.4,683.6), new cjs.Rectangle(-365,-356.8,536.4,684.3), new cjs.Rectangle(-367.3,-357.6,538.5,685), new cjs.Rectangle(-369.6,-358.3,540.5,685.6), new cjs.Rectangle(-371.9,-359.1,542.5,686.3), new cjs.Rectangle(-375.9,-360.4,546,687.3), new cjs.Rectangle(-378.1,-361.2,547.9,687.9), new cjs.Rectangle(-380.4,-361.9,549.9,688.5), new cjs.Rectangle(-382.7,-362.7,551.9,689.1), new cjs.Rectangle(-384.9,-363.4,553.8,689.7), new cjs.Rectangle(-387.1,-364.2,555.7,690.2), new cjs.Rectangle(-389.4,-365,557.7,690.7), new cjs.Rectangle(-393.3,-366.3,561,691.6), new cjs.Rectangle(-395.4,-367,562.8,692.1), new cjs.Rectangle(-397.7,-367.8,564.8,692.6), new cjs.Rectangle(-399.9,-368.5,566.6,693), new cjs.Rectangle(-402.1,-369.2,568.5,693.4), new cjs.Rectangle(-404.2,-370,570.3,693.9), new cjs.Rectangle(-408,-371.2,573.5,694.6), new cjs.Rectangle(-410.2,-372,575.3,695), new cjs.Rectangle(-412.4,-372.7,577.1,695.3), new cjs.Rectangle(-414.5,-373.4,578.9,695.8), new cjs.Rectangle(-416.6,-374.1,580.7,696.1), new cjs.Rectangle(-418.8,-374.9,582.5,696.5), new cjs.Rectangle(-422.4,-376.1,585.5,697), new cjs.Rectangle(-424.5,-376.8,587.2,697.3), new cjs.Rectangle(-426.6,-377.6,588.9,697.6), new cjs.Rectangle(-428.7,-378.3,590.7,697.9), new cjs.Rectangle(-430.8,-379,592.4,698.1), new cjs.Rectangle(-432.8,-379.7,594,698.4), new cjs.Rectangle(-436.4,-381,596.9,698.7), new cjs.Rectangle(-438.4,-381.7,598.6,699), new cjs.Rectangle(-440.4,-382.4,600.2,699.1), new cjs.Rectangle(-442.5,-383.1,601.8,699.3), new cjs.Rectangle(-444.5,-383.8,603.4,699.5), new cjs.Rectangle(-446.5,-384.5,605.1,699.6), new cjs.Rectangle(-448.5,-385.2,606.7,699.7), new cjs.Rectangle(-451.9,-386.4,609.4,699.8), new cjs.Rectangle(-453.9,-387.1,610.9,700), new cjs.Rectangle(-455.9,-387.8,612.5,700.1), new cjs.Rectangle(-457.8,-388.5,614,700.1), new cjs.Rectangle(-459.8,-389.2,615.5,700.2), new cjs.Rectangle(-461.7,-389.9,617,700.2), new cjs.Rectangle(-465.1,-391.1,619.6,700.3), new cjs.Rectangle(-467,-391.8,621.1,700.3), new cjs.Rectangle(-468.9,-392.5,622.6,700.2), new cjs.Rectangle(-470.8,-393.1,624,700.2), new cjs.Rectangle(-472.6,-393.8,625.4,700.1), new cjs.Rectangle(-474.5,-394.5,626.8,700.1), new cjs.Rectangle(-477.7,-395.7,629.3,699.9), new cjs.Rectangle(-479.6,-396.4,630.7,699.8), new cjs.Rectangle(-481.4,-397,632,699.7), new cjs.Rectangle(-483.2,-397.7,633.4,699.6), new cjs.Rectangle(-485,-398.4,634.7,699.4), new cjs.Rectangle(-486.9,-399,636.1,699.3), new cjs.Rectangle(-490,-400.2,638.3,699), new cjs.Rectangle(-491.8,-400.8,639.7,698.8), new cjs.Rectangle(-493.5,-401.5,641,698.5), new cjs.Rectangle(-495.3,-402.1,642.2,698.3), new cjs.Rectangle(-497,-402.8,643.4,698.1), new cjs.Rectangle(-498.8,-403.5,644.7,697.8), new cjs.Rectangle(-500.5,-404.1,646,697.6), new cjs.Rectangle(-503.4,-405.2,648,697), new cjs.Rectangle(-505.2,-405.9,649.2,696.8), new cjs.Rectangle(-506.9,-406.5,650.4,696.4), new cjs.Rectangle(-508.5,-407.1,651.6,696.1), new cjs.Rectangle(-510.2,-407.8,652.7,695.8), new cjs.Rectangle(-511.9,-408.4,653.8,695.3), new cjs.Rectangle(-514.7,-409.5,655.8,694.7), new cjs.Rectangle(-516.4,-410.1,656.9,694.3), new cjs.Rectangle(-518,-410.7,658,693.9), new cjs.Rectangle(-519.6,-411.4,659.1,693.4), new cjs.Rectangle(-521.2,-412,660.2,693), new cjs.Rectangle(-522.8,-412.6,661.2,692.5), new cjs.Rectangle(-525.5,-413.7,663,691.7), new cjs.Rectangle(-527.1,-414.3,664,691.2), new cjs.Rectangle(-528.6,-414.9,665,690.7), new cjs.Rectangle(-530.1,-415.5,666,690.1), new cjs.Rectangle(-531.7,-416.1,667,689.6), new cjs.Rectangle(-533.2,-416.7,668,689), new cjs.Rectangle(-535.8,-417.8,669.6,688), new cjs.Rectangle(-537.3,-418.4,670.4,687.5), new cjs.Rectangle(-538.8,-419,671.4,686.8), new cjs.Rectangle(-540.2,-419.5,672.3,686.2), new cjs.Rectangle(-541.7,-420.1,673.2,685.6), new cjs.Rectangle(-544.5,-421,675.4,685.8), new cjs.Rectangle(-180.5,-319.3,423.2,634.4), new cjs.Rectangle(-180.6,-317.9,419.3,632.1), new cjs.Rectangle(-180.6,-317.8,418.8,631.9), new cjs.Rectangle(-180.7,-317,416.5,630.6), new cjs.Rectangle(-180.8,-316.3,414.1,629.4), new cjs.Rectangle(-180.8,-315.5,411.8,628.1), new cjs.Rectangle(-180.9,-314.7,409.4,626.8), new cjs.Rectangle(-180.9,-314.5,408.9,626.5), new cjs.Rectangle(-181,-313.7,406.5,625.2), new cjs.Rectangle(-181,-313,404.1,623.9), new cjs.Rectangle(-181.1,-312.2,401.7,622.5), new cjs.Rectangle(-181.1,-311.4,399.4,621.2), new cjs.Rectangle(-181.1,-310.7,397,619.8), new cjs.Rectangle(-181.2,-310.5,396.5,619.6), new cjs.Rectangle(-181.2,-309.7,394,618.2), new cjs.Rectangle(-181.2,-308.9,391.6,616.8), new cjs.Rectangle(-181.3,-308.2,389.2,615.4), new cjs.Rectangle(-181.3,-307.4,386.8,614), new cjs.Rectangle(-181.3,-307.2,386.2,613.7), new cjs.Rectangle(-181.3,-306.4,383.8,612.3), new cjs.Rectangle(-181.4,-305.7,381.4,610.9), new cjs.Rectangle(-181.4,-304.9,379,609.5), new cjs.Rectangle(-181.4,-304.1,376.5,608), new cjs.Rectangle(-181.4,-303.3,374,606.6), new cjs.Rectangle(-181.4,-303.2,373.5,606.3), new cjs.Rectangle(-181.4,-302.4,371,604.8), new cjs.Rectangle(-181.5,-301.6,368.5,603.3), new cjs.Rectangle(-181.5,-300.9,366.1,601.8), new cjs.Rectangle(-181.5,-300.1,363.6,600.3), new cjs.Rectangle(-181.5,-300,363,600)];


(lib.rainbow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.r3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},149).to({alpha:0.012},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.5,-135,341,270);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.luch2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.luch_mc();
	this.instance.setTransform(0,-266,1,1,-10.7,0,0,0,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-265.9,rotation:8.7,y:-265.9,alpha:0.012},299).to({regY:-266,rotation:-10.7,y:-266,alpha:1},300).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-489.8,-358.6,1078.4,707.9);
p.frameBounds = [rect, new cjs.Rectangle(-489.8,-357.2,1076.9,705), new cjs.Rectangle(-489.8,-356.9,1076.8,704.7), new cjs.Rectangle(-489.8,-356.9,1076.6,704.5), new cjs.Rectangle(-490.1,-355.1,1075.4,701.3), new cjs.Rectangle(-490.1,-354.9,1075.4,701.1), new cjs.Rectangle(-490.2,-354.8,1075.2,700.9), new cjs.Rectangle(-490.2,-354.7,1075.2,700.6), new cjs.Rectangle(-490.5,-352.9,1073.9,697.5), new cjs.Rectangle(-490.5,-352.8,1073.9,697.2), new cjs.Rectangle(-490.6,-352.7,1073.7,697), new cjs.Rectangle(-490.9,-350.9,1072.5,693.8), new cjs.Rectangle(-490.9,-350.8,1072.4,693.6), new cjs.Rectangle(-490.9,-350.7,1072.3,693.3), new cjs.Rectangle(-490.9,-350.5,1072.2,693.1), new cjs.Rectangle(-491.2,-348.8,1071,689.9), new cjs.Rectangle(-491.3,-348.6,1070.9,689.6), new cjs.Rectangle(-491.3,-348.5,1070.8,689.4), new cjs.Rectangle(-491.3,-348.3,1070.7,689.1), new cjs.Rectangle(-491.6,-346.5,1069.4,685.9), new cjs.Rectangle(-491.6,-346.4,1069.2,685.7), new cjs.Rectangle(-491.7,-346.3,1069.2,685.4), new cjs.Rectangle(-491.7,-346.2,1069.1,685.2), new cjs.Rectangle(-492,-344.4,1067.8,682), new cjs.Rectangle(-492,-344.3,1067.7,681.7), new cjs.Rectangle(-492,-344.1,1067.6,681.5), new cjs.Rectangle(-492.1,-344,1067.4,681.2), new cjs.Rectangle(-492.3,-342.3,1066.2,678), new cjs.Rectangle(-492.3,-342.1,1066.1,677.8), new cjs.Rectangle(-492.4,-342,1065.9,677.5), new cjs.Rectangle(-492.4,-341.9,1065.9,677.3), new cjs.Rectangle(-492.6,-340,1064.4,674), new cjs.Rectangle(-492.7,-339.9,1064.4,673.8), new cjs.Rectangle(-492.7,-339.8,1064.3,673.5), new cjs.Rectangle(-493,-338,1063,670.3), new cjs.Rectangle(-493,-337.9,1062.8,670), new cjs.Rectangle(-493,-337.8,1062.7,669.8), new cjs.Rectangle(-493.1,-337.6,1062.6,669.5), new cjs.Rectangle(-493.3,-335.9,1061.3,666.3), new cjs.Rectangle(-493.3,-335.8,1061.2,666), new cjs.Rectangle(-493.4,-335.6,1061.1,665.8), new cjs.Rectangle(-493.4,-335.5,1060.9,665.5), new cjs.Rectangle(-493.6,-333.7,1059.6,662.2), new cjs.Rectangle(-493.6,-333.6,1059.5,662), new cjs.Rectangle(-493.6,-333.4,1059.3,661.7), new cjs.Rectangle(-493.6,-333.3,1059.2,661.5), new cjs.Rectangle(-493.9,-331.5,1057.9,658.2), new cjs.Rectangle(-493.9,-331.3,1057.8,657.9), new cjs.Rectangle(-493.9,-331.2,1057.6,657.7), new cjs.Rectangle(-493.9,-331.1,1057.5,657.4), new cjs.Rectangle(-494.2,-329.4,1056.1,654.2), new cjs.Rectangle(-494.2,-329.2,1056,653.8), new cjs.Rectangle(-494.2,-329.1,1055.9,653.7), new cjs.Rectangle(-494.2,-328.9,1055.8,653.3), new cjs.Rectangle(-494.5,-327.2,1054.3,650.1), new cjs.Rectangle(-494.5,-327,1054.2,649.8), new cjs.Rectangle(-494.5,-326.9,1054.1,649.6), new cjs.Rectangle(-494.7,-325.1,1052.7,646.3), new cjs.Rectangle(-494.8,-325,1052.6,646.1), new cjs.Rectangle(-494.8,-324.8,1052.4,645.8), new cjs.Rectangle(-494.8,-324.7,1052.3,645.5), new cjs.Rectangle(-495,-323,1050.8,642.2), new cjs.Rectangle(-495,-322.8,1050.7,641.9), new cjs.Rectangle(-495,-322.6,1050.6,641.7), new cjs.Rectangle(-495.1,-322.5,1050.5,641.4), new cjs.Rectangle(-495.2,-320.7,1049,638.1), new cjs.Rectangle(-495.3,-320.6,1049,637.8), new cjs.Rectangle(-495.3,-320.5,1048.8,637.6), new cjs.Rectangle(-495.3,-320.4,1048.7,637.3), new cjs.Rectangle(-495.5,-318.5,1047.2,634), new cjs.Rectangle(-495.5,-318.4,1047.1,633.8), new cjs.Rectangle(-495.5,-318.3,1046.9,633.4), new cjs.Rectangle(-495.6,-318.1,1046.8,633.2), new cjs.Rectangle(-495.8,-316.4,1045.4,629.9), new cjs.Rectangle(-495.7,-316.2,1045.2,629.6), new cjs.Rectangle(-495.7,-316,1045.1,629.3), new cjs.Rectangle(-495.8,-316,1045,629.1), new cjs.Rectangle(-495.9,-314.2,1043.5,625.7), new cjs.Rectangle(-496,-314.1,1043.4,625.5), new cjs.Rectangle(-495.9,-313.9,1043.2,625.2), new cjs.Rectangle(-496,-313.8,1043.1,624.9), new cjs.Rectangle(-496.1,-312,1041.5,621.6), new cjs.Rectangle(-496.1,-311.9,1041.4,621.3), new cjs.Rectangle(-496.1,-311.8,1041.3,621.1), new cjs.Rectangle(-496.3,-310,1039.8,617.7), new cjs.Rectangle(-496.4,-309.8,1039.6,617.5), new cjs.Rectangle(-496.3,-309.7,1039.5,617.2), new cjs.Rectangle(-496.4,-309.6,1039.4,616.9), new cjs.Rectangle(-496.5,-307.8,1037.8,613.5), new cjs.Rectangle(-496.5,-307.7,1037.7,613.3), new cjs.Rectangle(-496.6,-307.5,1037.6,613), new cjs.Rectangle(-496.6,-307.3,1037.4,612.7), new cjs.Rectangle(-496.7,-305.5,1035.8,609.3), new cjs.Rectangle(-496.7,-305.4,1035.7,609.1), new cjs.Rectangle(-496.8,-305.3,1035.6,608.8), new cjs.Rectangle(-496.8,-305.1,1035.5,608.6), new cjs.Rectangle(-496.9,-303.4,1033.8,605.2), new cjs.Rectangle(-497,-303.2,1033.7,604.9), new cjs.Rectangle(-496.9,-303.1,1033.6,604.7), new cjs.Rectangle(-497,-303,1033.5,604.4), new cjs.Rectangle(-497.1,-301.2,1031.9,601), new cjs.Rectangle(-497.1,-301.1,1031.7,600.7), new cjs.Rectangle(-497.1,-300.9,1031.6,600.4), new cjs.Rectangle(-497.1,-300.8,1031.4,600.1), new cjs.Rectangle(-497.3,-299,1029.9,596.7), new cjs.Rectangle(-497.2,-298.9,1029.7,596.5), new cjs.Rectangle(-497.3,-298.7,1029.6,596.2), new cjs.Rectangle(-497.4,-297,1027.9,592.8), new cjs.Rectangle(-497.4,-296.8,1027.8,592.5), new cjs.Rectangle(-497.4,-296.6,1027.6,592.2), new cjs.Rectangle(-497.4,-296.5,1027.5,592), new cjs.Rectangle(-497.5,-294.8,1025.8,588.6), new cjs.Rectangle(-497.5,-294.6,1025.7,588.3), new cjs.Rectangle(-497.5,-294.5,1025.6,588), new cjs.Rectangle(-497.5,-294.4,1025.4,587.8), new cjs.Rectangle(-497.6,-292.5,1023.7,584.3), new cjs.Rectangle(-497.7,-292.4,1023.6,584), new cjs.Rectangle(-497.6,-292.3,1023.5,583.8), new cjs.Rectangle(-497.7,-292.1,1023.4,583.5), new cjs.Rectangle(-497.8,-290.4,1021.6,580), new cjs.Rectangle(-497.8,-290.2,1021.5,579.8), new cjs.Rectangle(-497.8,-290.1,1021.4,579.5), new cjs.Rectangle(-497.8,-289.9,1021.2,579.2), new cjs.Rectangle(-497.9,-288.2,1019.6,575.8), new cjs.Rectangle(-497.8,-288,1019.4,575.5), new cjs.Rectangle(-497.9,-287.9,1019.3,575.2), new cjs.Rectangle(-497.8,-287.7,1019.1,574.9), new cjs.Rectangle(-498,-286,1017.4,571.5), new cjs.Rectangle(-498,-285.9,1017.2,571.2), new cjs.Rectangle(-498,-285.6,1017.1,570.9), new cjs.Rectangle(-498.1,-283.9,1015.4,567.4), new cjs.Rectangle(-498.1,-283.8,1015.2,567.2), new cjs.Rectangle(-498.1,-283.6,1015.1,566.9), new cjs.Rectangle(-498.1,-283.5,1015,566.6), new cjs.Rectangle(-498.1,-281.7,1013.2,563.2), new cjs.Rectangle(-498.1,-281.6,1013.1,562.9), new cjs.Rectangle(-498.1,-281.4,1012.9,562.6), new cjs.Rectangle(-498.1,-281.3,1012.8,562.3), new cjs.Rectangle(-498.2,-279.5,1011,558.9), new cjs.Rectangle(-498.2,-279.4,1010.8,558.6), new cjs.Rectangle(-498.2,-279.3,1010.7,558.3), new cjs.Rectangle(-498.2,-279.1,1010.6,558), new cjs.Rectangle(-498.3,-277.4,1008.8,554.5), new cjs.Rectangle(-498.3,-277.2,1008.6,554.2), new cjs.Rectangle(-498.3,-277,1008.5,554), new cjs.Rectangle(-498.3,-276.9,1008.3,553.7), new cjs.Rectangle(-498.3,-275.1,1006.5,550.2), new cjs.Rectangle(-498.3,-275,1006.4,549.9), new cjs.Rectangle(-498.3,-274.9,1006.2,549.6), new cjs.Rectangle(-498.3,-274.7,1006.1,549.4), new cjs.Rectangle(-498.3,-273,1004.2,545.8), new cjs.Rectangle(-498.4,-272.8,1004.1,545.5), new cjs.Rectangle(-498.3,-272.7,1004,545.3), new cjs.Rectangle(-498.4,-272.5,1003.8,545), new cjs.Rectangle(-498.4,-270.7,1002,541.5), new cjs.Rectangle(-498.4,-270.7,1001.9,541.2), new cjs.Rectangle(-498.4,-270.5,1001.7,540.9), new cjs.Rectangle(-498.4,-268.7,999.9,537.3), new cjs.Rectangle(-498.4,-268.5,999.7,537.1), new cjs.Rectangle(-498.4,-268.4,999.6,536.8), new cjs.Rectangle(-498.4,-268.3,999.4,536.5), new cjs.Rectangle(-498.4,-266.5,997.5,533), new cjs.Rectangle(-498.4,-266.3,997.4,532.7), new cjs.Rectangle(-498.4,-266.2,997.2,532.5), new cjs.Rectangle(-498.4,-266,997.1,532.2), new cjs.Rectangle(-498.5,-266,997.1,532.1), new cjs.Rectangle(-498.6,-266.2,997.2,532.4), new cjs.Rectangle(-498.7,-266.3,997.3,532.7), new cjs.Rectangle(-498.9,-266.5,997.5,533), new cjs.Rectangle(-500.8,-268.2,999.4,536.5), new cjs.Rectangle(-500.9,-268.4,999.5,536.8), new cjs.Rectangle(-501.1,-268.5,999.7,537), new cjs.Rectangle(-501.2,-268.7,999.8,537.3), new cjs.Rectangle(-503.1,-270.5,1001.7,540.9), new cjs.Rectangle(-503.2,-270.6,1001.8,541.2), new cjs.Rectangle(-503.4,-270.7,1002,541.4), new cjs.Rectangle(-503.5,-270.9,1002.1,541.7), new cjs.Rectangle(-505.4,-272.6,1004,545.2), new cjs.Rectangle(-505.6,-272.8,1004.1,545.5), new cjs.Rectangle(-505.7,-272.9,1004.2,545.8), new cjs.Rectangle(-507.6,-274.7,1006.1,549.3), new cjs.Rectangle(-507.7,-274.8,1006.2,549.6), new cjs.Rectangle(-507.9,-275,1006.4,549.8), new cjs.Rectangle(-508,-275.1,1006.5,550.1), new cjs.Rectangle(-509.9,-276.9,1008.3,553.6), new cjs.Rectangle(-510,-277,1008.5,553.9), new cjs.Rectangle(-510.2,-277.1,1008.6,554.2), new cjs.Rectangle(-510.3,-277.3,1008.8,554.5), new cjs.Rectangle(-512.1,-279.1,1010.6,558), new cjs.Rectangle(-512.3,-279.2,1010.7,558.3), new cjs.Rectangle(-512.4,-279.3,1010.8,558.5), new cjs.Rectangle(-512.6,-279.5,1011,558.8), new cjs.Rectangle(-514.4,-281.3,1012.7,562.3), new cjs.Rectangle(-514.6,-281.4,1012.9,562.6), new cjs.Rectangle(-514.7,-281.6,1013,562.9), new cjs.Rectangle(-514.9,-281.7,1013.2,563.1), new cjs.Rectangle(-516.6,-283.5,1014.9,566.6), new cjs.Rectangle(-516.8,-283.6,1015.1,566.9), new cjs.Rectangle(-517,-283.8,1015.2,567.2), new cjs.Rectangle(-517.1,-283.9,1015.3,567.5), new cjs.Rectangle(-518.9,-285.6,1017.1,570.8), new cjs.Rectangle(-519.1,-285.8,1017.2,571.2), new cjs.Rectangle(-519.2,-286,1017.4,571.5), new cjs.Rectangle(-521,-287.7,1019.1,574.9), new cjs.Rectangle(-521.2,-287.9,1019.2,575.2), new cjs.Rectangle(-521.3,-288,1019.4,575.5), new cjs.Rectangle(-521.5,-288.1,1019.5,575.7), new cjs.Rectangle(-523.3,-289.9,1021.2,579.2), new cjs.Rectangle(-523.4,-290.1,1021.4,579.5), new cjs.Rectangle(-523.5,-290.2,1021.5,579.7), new cjs.Rectangle(-523.7,-290.3,1021.7,580), new cjs.Rectangle(-525.5,-292.1,1023.4,583.4), new cjs.Rectangle(-525.7,-292.2,1023.5,583.7), new cjs.Rectangle(-525.8,-292.4,1023.6,584), new cjs.Rectangle(-525.9,-292.6,1023.8,584.3), new cjs.Rectangle(-527.7,-294.3,1025.4,587.7), new cjs.Rectangle(-527.9,-294.4,1025.6,588), new cjs.Rectangle(-528.1,-294.6,1025.7,588.2), new cjs.Rectangle(-528.2,-294.7,1025.8,588.5), new cjs.Rectangle(-529.9,-296.5,1027.5,591.9), new cjs.Rectangle(-530,-296.6,1027.6,592.2), new cjs.Rectangle(-530.2,-296.8,1027.7,592.5), new cjs.Rectangle(-530.3,-296.9,1027.9,592.8), new cjs.Rectangle(-532.1,-298.7,1029.5,596.1), new cjs.Rectangle(-532.3,-298.8,1029.7,596.4), new cjs.Rectangle(-532.4,-299,1029.8,596.7), new cjs.Rectangle(-532.5,-299.1,1029.9,597), new cjs.Rectangle(-534.3,-300.9,1031.6,600.3), new cjs.Rectangle(-534.4,-301,1031.7,600.7), new cjs.Rectangle(-534.6,-301.2,1031.8,601), new cjs.Rectangle(-536.3,-302.9,1033.4,604.3), new cjs.Rectangle(-536.5,-303.1,1033.6,604.6), new cjs.Rectangle(-536.6,-303.2,1033.7,604.8), new cjs.Rectangle(-536.7,-303.4,1033.9,605.1), new cjs.Rectangle(-538.5,-305.1,1035.4,608.5), new cjs.Rectangle(-538.6,-305.3,1035.6,608.8), new cjs.Rectangle(-538.8,-305.4,1035.7,609), new cjs.Rectangle(-538.9,-305.6,1035.9,609.3), new cjs.Rectangle(-540.6,-307.3,1037.4,612.7), new cjs.Rectangle(-540.8,-307.4,1037.5,613), new cjs.Rectangle(-540.9,-307.6,1037.6,613.3), new cjs.Rectangle(-541.1,-307.7,1037.8,613.5), new cjs.Rectangle(-542.8,-309.5,1039.4,616.9), new cjs.Rectangle(-542.9,-309.7,1039.5,617.2), new cjs.Rectangle(-543.1,-309.8,1039.6,617.5), new cjs.Rectangle(-543.2,-310,1039.7,617.7), new cjs.Rectangle(-544.9,-311.7,1041.3,621.1), new cjs.Rectangle(-545.1,-311.8,1041.4,621.3), new cjs.Rectangle(-545.2,-312,1041.5,621.6), new cjs.Rectangle(-545.4,-312.1,1041.7,621.8), new cjs.Rectangle(-547,-313.9,1043.2,625.2), new cjs.Rectangle(-547.1,-314.1,1043.3,625.5), new cjs.Rectangle(-547.3,-314.1,1043.4,625.7), new cjs.Rectangle(-549,-316,1044.9,629.1), new cjs.Rectangle(-549.1,-316.1,1045.1,629.3), new cjs.Rectangle(-549.3,-316.2,1045.2,629.6), new cjs.Rectangle(-549.4,-316.4,1045.3,629.8), new cjs.Rectangle(-551.1,-318.1,1046.8,633.2), new cjs.Rectangle(-551.3,-318.3,1046.9,633.4), new cjs.Rectangle(-551.4,-318.4,1047.1,633.7), new cjs.Rectangle(-551.5,-318.6,1047.2,634), new cjs.Rectangle(-553.2,-320.3,1048.7,637.3), new cjs.Rectangle(-553.4,-320.5,1048.8,637.6), new cjs.Rectangle(-553.5,-320.6,1048.9,637.8), new cjs.Rectangle(-553.6,-320.7,1049,638.1), new cjs.Rectangle(-555.3,-322.5,1050.4,641.4), new cjs.Rectangle(-555.5,-322.7,1050.6,641.7), new cjs.Rectangle(-555.6,-322.7,1050.7,641.9), new cjs.Rectangle(-555.7,-322.9,1050.9,642.2), new cjs.Rectangle(-557.4,-324.7,1052.3,645.5), new cjs.Rectangle(-557.5,-324.8,1052.4,645.7), new cjs.Rectangle(-557.7,-324.9,1052.6,646), new cjs.Rectangle(-557.8,-325.1,1052.7,646.3), new cjs.Rectangle(-559.4,-326.8,1054.1,649.6), new cjs.Rectangle(-559.5,-327,1054.2,649.8), new cjs.Rectangle(-559.7,-327.1,1054.3,650.1), new cjs.Rectangle(-561.3,-328.9,1055.8,653.3), new cjs.Rectangle(-561.4,-329,1055.9,653.6), new cjs.Rectangle(-561.6,-329.2,1056,653.8), new cjs.Rectangle(-561.7,-329.3,1056.1,654.1), new cjs.Rectangle(-563.3,-331.1,1057.5,657.4), new cjs.Rectangle(-563.5,-331.2,1057.6,657.7), new cjs.Rectangle(-563.6,-331.4,1057.7,657.9), new cjs.Rectangle(-563.7,-331.5,1057.8,658.2), new cjs.Rectangle(-565.4,-333.3,1059.2,661.5), new cjs.Rectangle(-565.5,-333.4,1059.3,661.7), new cjs.Rectangle(-565.6,-333.5,1059.5,662), new cjs.Rectangle(-565.8,-333.6,1059.6,662.2), new cjs.Rectangle(-567.4,-335.4,1060.9,665.5), new cjs.Rectangle(-567.5,-335.5,1061,665.7), new cjs.Rectangle(-567.6,-335.7,1061.1,666), new cjs.Rectangle(-567.8,-335.9,1061.3,666.2), new cjs.Rectangle(-569.4,-337.6,1062.6,669.5), new cjs.Rectangle(-569.5,-337.8,1062.7,669.7), new cjs.Rectangle(-569.7,-337.9,1062.9,670), new cjs.Rectangle(-569.8,-338.1,1062.9,670.2), new cjs.Rectangle(-571.4,-339.8,1064.3,673.5), new cjs.Rectangle(-571.5,-339.9,1064.4,673.7), new cjs.Rectangle(-571.7,-340.1,1064.5,674), new cjs.Rectangle(-573.6,-341.8,1066.3,677.4), new cjs.Rectangle(-571.7,-340.1,1064.5,674), new cjs.Rectangle(-571.6,-339.9,1064.4,673.7), new cjs.Rectangle(-571.4,-339.8,1064.3,673.5), new cjs.Rectangle(-569.9,-338,1063,670.3), new cjs.Rectangle(-569.8,-337.9,1062.8,670), new cjs.Rectangle(-569.6,-337.8,1062.7,669.8), new cjs.Rectangle(-569.5,-337.6,1062.6,669.5), new cjs.Rectangle(-567.9,-335.9,1061.2,666.3), new cjs.Rectangle(-567.7,-335.7,1061.1,666), new cjs.Rectangle(-567.6,-335.6,1061,665.8), new cjs.Rectangle(-567.4,-335.5,1060.9,665.5), new cjs.Rectangle(-565.8,-333.7,1059.6,662.2), new cjs.Rectangle(-565.7,-333.6,1059.4,662), new cjs.Rectangle(-565.6,-333.4,1059.3,661.7), new cjs.Rectangle(-565.4,-333.3,1059.2,661.5), new cjs.Rectangle(-563.8,-331.5,1057.9,658.2), new cjs.Rectangle(-563.6,-331.4,1057.7,657.9), new cjs.Rectangle(-563.6,-331.2,1057.6,657.7), new cjs.Rectangle(-563.4,-331.1,1057.5,657.4), new cjs.Rectangle(-561.8,-329.4,1056.1,654.2), new cjs.Rectangle(-561.7,-329.2,1056,653.9), new cjs.Rectangle(-561.6,-329.1,1055.9,653.7), new cjs.Rectangle(-561.4,-328.9,1055.7,653.3), new cjs.Rectangle(-559.7,-327.1,1054.3,650.1), new cjs.Rectangle(-559.7,-327,1054.2,649.8), new cjs.Rectangle(-559.5,-326.9,1054.1,649.6), new cjs.Rectangle(-557.8,-325.1,1052.7,646.3), new cjs.Rectangle(-557.7,-325,1052.6,646.1), new cjs.Rectangle(-557.6,-324.9,1052.4,645.8), new cjs.Rectangle(-557.4,-324.7,1052.3,645.5), new cjs.Rectangle(-555.8,-323,1050.8,642.2), new cjs.Rectangle(-555.6,-322.8,1050.7,641.9), new cjs.Rectangle(-555.5,-322.7,1050.6,641.7), new cjs.Rectangle(-555.3,-322.6,1050.5,641.4), new cjs.Rectangle(-553.7,-320.7,1049,638.1), new cjs.Rectangle(-553.6,-320.6,1048.9,637.8), new cjs.Rectangle(-553.4,-320.5,1048.8,637.6), new cjs.Rectangle(-553.3,-320.4,1048.7,637.3), new cjs.Rectangle(-551.6,-318.5,1047.2,634), new cjs.Rectangle(-551.4,-318.4,1047.1,633.8), new cjs.Rectangle(-551.3,-318.3,1046.9,633.5), new cjs.Rectangle(-551.1,-318.2,1046.8,633.2), new cjs.Rectangle(-549.5,-316.4,1045.3,629.8), new cjs.Rectangle(-549.4,-316.3,1045.2,629.6), new cjs.Rectangle(-549.2,-316.1,1045.1,629.3), new cjs.Rectangle(-549.1,-316,1045,629.1), new cjs.Rectangle(-547.4,-314.2,1043.5,625.7), new cjs.Rectangle(-547.2,-314.1,1043.3,625.5), new cjs.Rectangle(-547.1,-314,1043.2,625.2), new cjs.Rectangle(-547,-313.8,1043.1,624.9), new cjs.Rectangle(-545.3,-312.1,1041.5,621.6), new cjs.Rectangle(-545.1,-311.9,1041.4,621.3), new cjs.Rectangle(-545,-311.7,1041.3,621.1), new cjs.Rectangle(-543.3,-310,1039.8,617.7), new cjs.Rectangle(-543.2,-309.8,1039.6,617.5), new cjs.Rectangle(-543,-309.7,1039.4,617.2), new cjs.Rectangle(-542.9,-309.6,1039.4,616.9), new cjs.Rectangle(-541.1,-307.8,1037.8,613.5), new cjs.Rectangle(-541,-307.7,1037.7,613.3), new cjs.Rectangle(-540.9,-307.5,1037.6,613.1), new cjs.Rectangle(-540.8,-307.4,1037.4,612.8), new cjs.Rectangle(-539,-305.6,1035.8,609.4), new cjs.Rectangle(-538.8,-305.4,1035.7,609.1), new cjs.Rectangle(-538.7,-305.3,1035.6,608.9), new cjs.Rectangle(-538.6,-305.2,1035.4,608.6), new cjs.Rectangle(-536.9,-303.4,1033.9,605.2), new cjs.Rectangle(-536.7,-303.3,1033.8,604.9), new cjs.Rectangle(-536.6,-303.1,1033.6,604.6), new cjs.Rectangle(-536.4,-303,1033.5,604.4), new cjs.Rectangle(-534.7,-301.2,1031.9,601), new cjs.Rectangle(-534.6,-301.1,1031.7,600.8), new cjs.Rectangle(-534.4,-301,1031.6,600.5), new cjs.Rectangle(-534.3,-300.8,1031.4,600.2), new cjs.Rectangle(-532.5,-299,1029.8,596.8), new cjs.Rectangle(-532.3,-298.9,1029.7,596.5), new cjs.Rectangle(-532.2,-298.8,1029.6,596.2), new cjs.Rectangle(-532.1,-298.6,1029.4,596), new cjs.Rectangle(-530.3,-296.9,1027.8,592.5), new cjs.Rectangle(-530.2,-296.7,1027.6,592.3), new cjs.Rectangle(-530,-296.5,1027.5,592), new cjs.Rectangle(-528.3,-294.8,1025.9,588.6), new cjs.Rectangle(-528.1,-294.7,1025.8,588.3), new cjs.Rectangle(-528,-294.5,1025.6,588), new cjs.Rectangle(-527.8,-294.4,1025.5,587.8), new cjs.Rectangle(-526,-292.6,1023.8,584.3), new cjs.Rectangle(-525.9,-292.5,1023.7,584.1), new cjs.Rectangle(-525.8,-292.3,1023.5,583.8), new cjs.Rectangle(-525.6,-292.2,1023.4,583.5), new cjs.Rectangle(-523.8,-290.4,1021.7,580.1), new cjs.Rectangle(-523.7,-290.3,1021.5,579.8), new cjs.Rectangle(-523.5,-290.1,1021.4,579.5), new cjs.Rectangle(-523.4,-290,1021.3,579.3), new cjs.Rectangle(-521.6,-288.2,1019.6,575.8), new cjs.Rectangle(-521.4,-288.1,1019.4,575.6), new cjs.Rectangle(-521.3,-287.9,1019.3,575.3), new cjs.Rectangle(-521.1,-287.8,1019.1,575), new cjs.Rectangle(-519.3,-286,1017.4,571.6), new cjs.Rectangle(-519.2,-285.9,1017.3,571.3), new cjs.Rectangle(-519,-285.7,1017.1,571), new cjs.Rectangle(-518.9,-285.7,1017,570.7), new cjs.Rectangle(-517.1,-283.9,1015.3,567.3), new cjs.Rectangle(-516.9,-283.7,1015.1,567), new cjs.Rectangle(-516.8,-283.5,1015,566.7), new cjs.Rectangle(-516.6,-283.4,1014.8,566.4), new cjs.Rectangle(-514.8,-281.6,1013.1,562.9), new cjs.Rectangle(-514.7,-281.5,1013,562.7), new cjs.Rectangle(-514.6,-281.4,1012.8,562.4), new cjs.Rectangle(-512.7,-279.6,1011,558.9), new cjs.Rectangle(-512.6,-279.5,1010.9,558.6), new cjs.Rectangle(-512.4,-279.3,1010.8,558.4), new cjs.Rectangle(-512.3,-279.1,1010.6,558.1), new cjs.Rectangle(-510.4,-277.4,1008.8,554.6), new cjs.Rectangle(-510.3,-277.2,1008.7,554.3), new cjs.Rectangle(-510.1,-277.1,1008.5,554), new cjs.Rectangle(-510,-277,1008.4,553.7), new cjs.Rectangle(-508.2,-275.2,1006.6,550.3), new cjs.Rectangle(-508,-275,1006.4,550), new cjs.Rectangle(-507.9,-274.9,1006.3,549.7), new cjs.Rectangle(-507.7,-274.8,1006.1,549.4), new cjs.Rectangle(-505.8,-273,1004.3,545.9), new cjs.Rectangle(-505.7,-272.9,1004.1,545.6), new cjs.Rectangle(-505.5,-272.7,1004,545.4), new cjs.Rectangle(-505.4,-272.6,1003.9,545.1), new cjs.Rectangle(-503.5,-270.8,1002,541.6), new cjs.Rectangle(-503.4,-270.6,1001.9,541.3), new cjs.Rectangle(-503.2,-270.5,1001.7,541), new cjs.Rectangle(-503.1,-270.4,1001.6,540.7), new cjs.Rectangle(-501.2,-268.6,999.8,537.2), new cjs.Rectangle(-501.1,-268.5,999.6,536.9), new cjs.Rectangle(-500.9,-268.3,999.5,536.6), new cjs.Rectangle(-500.8,-268.2,999.3,536.3), new cjs.Rectangle(-498.9,-266.4,997.4,532.8), new cjs.Rectangle(-498.7,-266.3,997.3,532.6), new cjs.Rectangle(-498.6,-266.1,997.1,532.3), new cjs.Rectangle(-498.4,-266,997,532), new cjs.Rectangle(-498.5,-266.1,997.1,532.3), new cjs.Rectangle(-498.5,-266.3,997.3,532.6), new cjs.Rectangle(-498.5,-266.4,997.4,532.8), new cjs.Rectangle(-498.4,-268.2,999.3,536.3), new cjs.Rectangle(-498.5,-268.3,999.5,536.7), new cjs.Rectangle(-498.4,-268.5,999.6,536.9), new cjs.Rectangle(-498.5,-268.6,999.8,537.2), new cjs.Rectangle(-498.4,-270.4,1001.6,540.8), new cjs.Rectangle(-498.5,-270.5,1001.8,541.1), new cjs.Rectangle(-498.4,-270.7,1001.9,541.3), new cjs.Rectangle(-498.5,-270.8,1002.1,541.6), new cjs.Rectangle(-498.4,-272.6,1003.9,545.1), new cjs.Rectangle(-498.5,-272.7,1004.1,545.4), new cjs.Rectangle(-498.4,-272.9,1004.2,545.7), new cjs.Rectangle(-498.5,-273,1004.3,546), new cjs.Rectangle(-498.4,-274.7,1006.2,549.4), new cjs.Rectangle(-498.3,-274.9,1006.3,549.8), new cjs.Rectangle(-498.4,-275.1,1006.5,550), new cjs.Rectangle(-498.3,-275.2,1006.6,550.3), new cjs.Rectangle(-498.3,-277,1008.4,553.8), new cjs.Rectangle(-498.3,-277.1,1008.5,554.1), new cjs.Rectangle(-498.3,-277.3,1008.7,554.4), new cjs.Rectangle(-498.3,-277.4,1008.9,554.6), new cjs.Rectangle(-498.3,-279.1,1010.6,558.1), new cjs.Rectangle(-498.3,-279.3,1010.7,558.4), new cjs.Rectangle(-498.3,-279.5,1010.9,558.7), new cjs.Rectangle(-498.2,-281.2,1012.7,562.2), new cjs.Rectangle(-498.2,-281.4,1012.8,562.5), new cjs.Rectangle(-498.2,-281.6,1013,562.7), new cjs.Rectangle(-498.2,-281.6,1013.1,563), new cjs.Rectangle(-498.1,-283.4,1014.9,566.5), new cjs.Rectangle(-498.1,-283.6,1015,566.8), new cjs.Rectangle(-498.1,-283.7,1015.1,567), new cjs.Rectangle(-498.1,-283.8,1015.3,567.3), new cjs.Rectangle(-498,-285.6,1017,570.8), new cjs.Rectangle(-498.1,-285.7,1017.2,571), new cjs.Rectangle(-498,-285.9,1017.3,571.3), new cjs.Rectangle(-498,-286,1017.5,571.6), new cjs.Rectangle(-497.9,-287.8,1019.2,575.1), new cjs.Rectangle(-497.9,-287.9,1019.3,575.3), new cjs.Rectangle(-497.9,-288.1,1019.5,575.6), new cjs.Rectangle(-497.9,-288.3,1019.6,575.8), new cjs.Rectangle(-497.8,-290,1021.3,579.4), new cjs.Rectangle(-497.8,-290.2,1021.4,579.6), new cjs.Rectangle(-497.8,-290.3,1021.5,579.9), new cjs.Rectangle(-497.8,-290.4,1021.7,580.1), new cjs.Rectangle(-497.7,-292.2,1023.4,583.6), new cjs.Rectangle(-497.7,-292.4,1023.5,583.8), new cjs.Rectangle(-497.7,-292.5,1023.7,584.1), new cjs.Rectangle(-497.7,-292.6,1023.8,584.4), new cjs.Rectangle(-497.6,-294.4,1025.5,587.8), new cjs.Rectangle(-497.6,-294.5,1025.6,588.1), new cjs.Rectangle(-497.6,-294.7,1025.8,588.3), new cjs.Rectangle(-497.4,-296.4,1027.4,591.8), new cjs.Rectangle(-497.5,-296.6,1027.6,592), new cjs.Rectangle(-497.4,-296.7,1027.7,592.3), new cjs.Rectangle(-497.4,-296.9,1027.8,592.6), new cjs.Rectangle(-497.3,-298.6,1029.4,596), new cjs.Rectangle(-497.3,-298.8,1029.6,596.3), new cjs.Rectangle(-497.3,-298.9,1029.7,596.6), new cjs.Rectangle(-497.3,-299,1029.9,596.8), new cjs.Rectangle(-497.1,-300.8,1031.4,600.2), new cjs.Rectangle(-497.1,-301,1031.6,600.5), new cjs.Rectangle(-497.1,-301.1,1031.7,600.8), new cjs.Rectangle(-497.1,-301.3,1031.9,601), new cjs.Rectangle(-497,-303,1033.5,604.5), new cjs.Rectangle(-497,-303.2,1033.6,604.7), new cjs.Rectangle(-497,-303.3,1033.8,605), new cjs.Rectangle(-497,-303.4,1033.9,605.3), new cjs.Rectangle(-496.8,-305.2,1035.5,608.6), new cjs.Rectangle(-496.8,-305.3,1035.6,608.9), new cjs.Rectangle(-496.8,-305.5,1035.8,609.1), new cjs.Rectangle(-496.8,-305.7,1035.9,609.4), new cjs.Rectangle(-496.7,-307.4,1037.5,612.8), new cjs.Rectangle(-496.6,-307.6,1037.6,613.1), new cjs.Rectangle(-496.6,-307.7,1037.7,613.3), new cjs.Rectangle(-496.6,-307.8,1037.8,613.6), new cjs.Rectangle(-496.4,-309.6,1039.4,617), new cjs.Rectangle(-496.4,-309.7,1039.5,617.3), new cjs.Rectangle(-496.4,-309.9,1039.6,617.5), new cjs.Rectangle(-496.2,-311.6,1041.2,620.8), new cjs.Rectangle(-496.2,-311.8,1041.3,621.1), new cjs.Rectangle(-496.2,-311.9,1041.4,621.3), new cjs.Rectangle(-496.2,-312,1041.6,621.7), new cjs.Rectangle(-496,-313.8,1043.1,625), new cjs.Rectangle(-496,-313.9,1043.2,625.3), new cjs.Rectangle(-496,-314.1,1043.4,625.6), new cjs.Rectangle(-496,-314.2,1043.4,625.8), new cjs.Rectangle(-495.8,-316,1045,629.1), new cjs.Rectangle(-495.8,-316.1,1045.1,629.3), new cjs.Rectangle(-495.8,-316.3,1045.2,629.7), new cjs.Rectangle(-495.8,-316.4,1045.3,630), new cjs.Rectangle(-495.6,-318.2,1046.9,633.2), new cjs.Rectangle(-495.6,-318.3,1047,633.5), new cjs.Rectangle(-495.5,-318.5,1047.1,633.8), new cjs.Rectangle(-495.5,-318.6,1047.2,634.1), new cjs.Rectangle(-495.3,-320.4,1048.7,637.3), new cjs.Rectangle(-495.3,-320.5,1048.8,637.6), new cjs.Rectangle(-495.3,-320.6,1048.9,637.9), new cjs.Rectangle(-495.3,-320.8,1049,638.1), new cjs.Rectangle(-495.1,-322.5,1050.5,641.5), new cjs.Rectangle(-495.1,-322.7,1050.6,641.7), new cjs.Rectangle(-495.1,-322.8,1050.8,642), new cjs.Rectangle(-494.8,-324.6,1052.2,645.3), new cjs.Rectangle(-494.9,-324.7,1052.4,645.5), new cjs.Rectangle(-494.8,-324.9,1052.4,645.8), new cjs.Rectangle(-494.8,-325,1052.5,646.1), new cjs.Rectangle(-494.6,-326.8,1054,649.4), new cjs.Rectangle(-494.5,-326.9,1054.1,649.6), new cjs.Rectangle(-494.6,-327,1054.2,649.9), new cjs.Rectangle(-494.5,-327.2,1054.4,650.1), new cjs.Rectangle(-494.3,-329,1055.7,653.4), new cjs.Rectangle(-494.3,-329.1,1055.9,653.7), new cjs.Rectangle(-494.2,-329.3,1056,653.9), new cjs.Rectangle(-494.2,-329.3,1056.1,654.2), new cjs.Rectangle(-494,-331.2,1057.5,657.5), new cjs.Rectangle(-493.9,-331.3,1057.6,657.7), new cjs.Rectangle(-494,-331.4,1057.7,658), new cjs.Rectangle(-493.9,-331.6,1057.8,658.3), new cjs.Rectangle(-493.7,-333.3,1059.2,661.5), new cjs.Rectangle(-493.7,-333.5,1059.3,661.8), new cjs.Rectangle(-493.7,-333.6,1059.4,662), new cjs.Rectangle(-493.7,-333.7,1059.6,662.3), new cjs.Rectangle(-493.4,-335.5,1061,665.5), new cjs.Rectangle(-493.4,-335.6,1061.1,665.8), new cjs.Rectangle(-493.4,-335.7,1061.2,666), new cjs.Rectangle(-493.4,-335.9,1061.3,666.3), new cjs.Rectangle(-493.1,-337.7,1062.6,669.5), new cjs.Rectangle(-493,-337.8,1062.7,669.8), new cjs.Rectangle(-493.1,-338,1062.8,670), new cjs.Rectangle(-492.8,-339.7,1064.2,673.3), new cjs.Rectangle(-492.7,-339.9,1064.3,673.5), new cjs.Rectangle(-492.7,-339.9,1064.4,673.8), new cjs.Rectangle(-492.7,-340.1,1064.5,674), new cjs.Rectangle(-492.5,-341.8,1065.8,677.2), new cjs.Rectangle(-492.5,-342,1065.9,677.5), new cjs.Rectangle(-492.3,-342.1,1066,677.7), new cjs.Rectangle(-492.4,-342.3,1066.1,678), new cjs.Rectangle(-492.1,-344.1,1067.4,681.2), new cjs.Rectangle(-492.1,-344.2,1067.5,681.4), new cjs.Rectangle(-492.1,-344.3,1067.6,681.7), new cjs.Rectangle(-492.1,-344.4,1067.7,682), new cjs.Rectangle(-491.8,-346.2,1069.1,685.2), new cjs.Rectangle(-491.7,-346.3,1069.1,685.4), new cjs.Rectangle(-491.7,-346.4,1069.2,685.6), new cjs.Rectangle(-491.7,-346.6,1069.3,685.9), new cjs.Rectangle(-491.4,-348.3,1070.6,689.1), new cjs.Rectangle(-491.4,-348.5,1070.7,689.4), new cjs.Rectangle(-491.4,-348.6,1070.8,689.6), new cjs.Rectangle(-491.3,-348.8,1071,689.9), new cjs.Rectangle(-491,-350.5,1072.2,693.1), new cjs.Rectangle(-491,-350.6,1072.3,693.3), new cjs.Rectangle(-490.9,-350.8,1072.4,693.6), new cjs.Rectangle(-490.9,-350.9,1072.5,693.8), new cjs.Rectangle(-490.6,-352.7,1073.7,696.9), new cjs.Rectangle(-490.6,-352.9,1073.8,697.2), new cjs.Rectangle(-490.6,-353,1073.9,697.4), new cjs.Rectangle(-490.2,-354.7,1075.1,700.6), new cjs.Rectangle(-490.2,-354.9,1075.2,700.8), new cjs.Rectangle(-490.2,-354.9,1075.3,701.1), new cjs.Rectangle(-490.2,-355.1,1075.4,701.3), new cjs.Rectangle(-489.9,-356.8,1076.6,704.5), new cjs.Rectangle(-489.8,-357,1076.7,704.7), new cjs.Rectangle(-489.8,-357.2,1076.8,705), new cjs.Rectangle(-489.8,-358.6,1078.4,707.9)];


(lib.location_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_0_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(1));

	// graph
	this.instance_1 = new lib.location_1_6_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-97,233,194);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.location_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_0_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(1));

	// graph
	this.instance_1 = new lib.location_1_5_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-88,215,176);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.location_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(1));

	// graph
	this.instance_1 = new lib.location_1_4_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-117,298,234);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.location_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(1));

	// graph
	this.instance_1 = new lib.location_1_3_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-108,233,216);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.location_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(1));

	// graph
	this.instance_1 = new lib.location_1_2_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-158.5,327,317);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.location_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.location_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},13).to({_off:true},1).wait(1));

	// graph
	this.instance_1 = new lib.location_1_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-92,325,184);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lepestok2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok2_mc();
	this.instance._off = true;

	this.instance_1 = new lib.lepestok1_mc();
	this.instance_1.setTransform(-83.9,599,1,1,-90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).to({rotation:45,x:139,y:227},39).to({rotation:0,x:-56,y:358},40).to({rotation:45,x:164,y:471},40).to({_off:true,rotation:-90,x:-83.9,y:599},40).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({_off:false},40).to({x:406.1,y:816.3},51).to({rotation:-120,x:13.5,y:1044.3},50).to({x:311.8,y:1287.2,alpha:0.012},50).to({_off:true},1).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-15.5,-14,31,28), new cjs.Rectangle(-12.1,-8.4,31.5,28.6), new cjs.Rectangle(-8.8,-2.9,32.1,29.2), new cjs.Rectangle(-5.5,2.6,32.6,29.7), new cjs.Rectangle(-2.2,8.1,33.1,30.4), new cjs.Rectangle(1,13.6,33.7,30.9), new cjs.Rectangle(4.4,19.2,34.1,31.5), new cjs.Rectangle(7.7,24.7,34.6,32), new cjs.Rectangle(11,30.3,35,32.6), new cjs.Rectangle(14.4,35.9,35.5,33.1), new cjs.Rectangle(17.7,41.4,36,33.6), new cjs.Rectangle(21,47,36.4,34.1), new cjs.Rectangle(24.4,52.6,36.8,34.6), new cjs.Rectangle(27.8,58.2,37.1,35), new cjs.Rectangle(31.1,63.8,37.5,35.5), new cjs.Rectangle(34.5,69.3,37.8,35.9), new cjs.Rectangle(37.9,75,38.2,36.3), new cjs.Rectangle(41.3,80.6,38.6,36.7), new cjs.Rectangle(44.7,86.2,38.8,37.1), new cjs.Rectangle(48.1,91.9,39.2,37.5), new cjs.Rectangle(51.6,97.5,39.5,37.9), new cjs.Rectangle(55,103.2,39.7,38.2), new cjs.Rectangle(58.4,108.8,39.9,38.6), new cjs.Rectangle(61.9,114.4,40.2,38.8), new cjs.Rectangle(65.4,120.1,40.4,39.2), new cjs.Rectangle(68.8,125.8,40.6,39.4), new cjs.Rectangle(72.3,131.5,40.8,39.7), new cjs.Rectangle(75.8,137.2,41,39.9), new cjs.Rectangle(79.2,142.9,41.1,40.2), new cjs.Rectangle(82.8,148.6,41.2,40.3), new cjs.Rectangle(86.2,154.3,41.3,40.5), new cjs.Rectangle(89.8,160.1,41.4,40.8), new cjs.Rectangle(93.3,165.8,41.5,40.9), new cjs.Rectangle(96.8,171.6,41.6,41.1), new cjs.Rectangle(100.4,177.3,41.7,41.3), new cjs.Rectangle(103.9,183,41.7,41.3), new cjs.Rectangle(107.5,188.8,41.7,41.4), new cjs.Rectangle(111,194.6,41.7,41.5), new cjs.Rectangle(114.6,200.4,41.7,41.6), new cjs.Rectangle(118.2,206.2,41.7,41.7), new cjs.Rectangle(113.3,209.5,41.7,41.6), new cjs.Rectangle(108.3,212.8,41.7,41.5), new cjs.Rectangle(103.6,216.2,41.7,41.5), new cjs.Rectangle(98.7,219.5,41.7,41.4), new cjs.Rectangle(93.8,222.8,41.7,41.3), new cjs.Rectangle(89,226.2,41.6,41.1), new cjs.Rectangle(84.1,229.6,41.6,40.9), new cjs.Rectangle(79.3,232.9,41.5,40.8), new cjs.Rectangle(74.4,236.3,41.3,40.6), new cjs.Rectangle(69.6,239.6,41.3,40.5), new cjs.Rectangle(64.8,243,41.2,40.2), new cjs.Rectangle(60,246.4,41,40), new cjs.Rectangle(55.3,249.8,40.8,39.8), new cjs.Rectangle(50.4,253.2,40.7,39.5), new cjs.Rectangle(45.7,256.6,40.4,39.2), new cjs.Rectangle(40.9,260,40.2,38.9), new cjs.Rectangle(36.1,263.4,40.1,38.7), new cjs.Rectangle(31.4,266.9,39.8,38.3), new cjs.Rectangle(26.6,270.3,39.6,38.1), new cjs.Rectangle(21.8,273.7,39.3,37.6), new cjs.Rectangle(17.2,277.1,39,37.3), new cjs.Rectangle(12.4,280.7,38.7,36.9), new cjs.Rectangle(7.7,284.1,38.4,36.5), new cjs.Rectangle(3,287.6,38.1,36.1), new cjs.Rectangle(-1.7,291.1,37.8,35.8), new cjs.Rectangle(-6.4,294.6,37.4,35.3), new cjs.Rectangle(-11,298.1,37,34.9), new cjs.Rectangle(-15.8,301.6,36.7,34.4), new cjs.Rectangle(-20.4,305.1,36.2,33.9), new cjs.Rectangle(-25,308.6,35.8,33.4), new cjs.Rectangle(-29.7,312.1,35.4,32.9), new cjs.Rectangle(-34.3,315.7,34.9,32.4), new cjs.Rectangle(-39,319.2,34.5,32), new cjs.Rectangle(-43.6,322.8,34,31.4), new cjs.Rectangle(-48.2,326.3,33.6,30.8), new cjs.Rectangle(-52.9,329.8,33.1,30.3), new cjs.Rectangle(-57.5,333.4,32.6,29.7), new cjs.Rectangle(-62.1,336.9,32.1,29.2), new cjs.Rectangle(-66.7,340.6,31.5,28.6), new cjs.Rectangle(-71.5,344,31,28), new cjs.Rectangle(-66.2,346.6,31.5,28.6), new cjs.Rectangle(-61,349.1,32.1,29.1), new cjs.Rectangle(-55.8,351.6,32.6,29.7), new cjs.Rectangle(-50.6,354.2,33.1,30.4), new cjs.Rectangle(-45.3,356.7,33.6,30.9), new cjs.Rectangle(-40,359.3,34,31.3), new cjs.Rectangle(-34.8,361.8,34.5,31.9), new cjs.Rectangle(-29.5,364.4,34.9,32.4), new cjs.Rectangle(-24.2,367,35.4,32.9), new cjs.Rectangle(-18.9,369.6,35.8,33.4), new cjs.Rectangle(-13.7,372.1,36.2,33.9), new cjs.Rectangle(-8.4,374.7,36.7,34.5), new cjs.Rectangle(-3.1,377.3,37,34.9), new cjs.Rectangle(2.2,379.9,37.4,35.3), new cjs.Rectangle(7.5,382.5,37.8,35.8), new cjs.Rectangle(12.9,385.1,38.1,36.1), new cjs.Rectangle(18.2,387.7,38.4,36.6), new cjs.Rectangle(23.6,390.4,38.7,36.9), new cjs.Rectangle(28.9,393,39,37.3), new cjs.Rectangle(34.2,395.7,39.3,37.6), new cjs.Rectangle(39.6,398.3,39.6,38.1), new cjs.Rectangle(45,400.9,39.8,38.4), new cjs.Rectangle(50.4,403.6,40.1,38.6), new cjs.Rectangle(55.8,406.3,40.3,38.9), new cjs.Rectangle(61.2,409,40.4,39.2), new cjs.Rectangle(66.5,411.7,40.7,39.5), new cjs.Rectangle(72,414.4,40.8,39.8), new cjs.Rectangle(77.4,417.1,41,39.9), new cjs.Rectangle(82.8,419.8,41.2,40.2), new cjs.Rectangle(88.3,422.5,41.3,40.4), new cjs.Rectangle(93.7,425.2,41.4,40.7), new cjs.Rectangle(99.2,428,41.5,40.8), new cjs.Rectangle(104.6,430.8,41.6,40.9), new cjs.Rectangle(110.1,433.5,41.6,41.1), new cjs.Rectangle(115.5,436.2,41.7,41.3), new cjs.Rectangle(121.1,439,41.6,41.4), new cjs.Rectangle(126.5,441.8,41.7,41.4), new cjs.Rectangle(132,444.5,41.7,41.5), new cjs.Rectangle(137.5,447.4,41.7,41.6), new cjs.Rectangle(143.2,450.1,41.7,41.7), new cjs.Rectangle(137,453.5,41.7,41.4), new cjs.Rectangle(130.9,456.9,41.6,41.1), new cjs.Rectangle(124.7,460.3,41.4,40.6), new cjs.Rectangle(118.7,463.8,41,39.9), new cjs.Rectangle(112.8,467.4,40.4,39.2), new cjs.Rectangle(106.9,471,39.8,38.4), new cjs.Rectangle(101.2,474.7,39,37.3), new cjs.Rectangle(95.4,478.5,38,36.1), new cjs.Rectangle(89.8,482.4,37,34.9), new cjs.Rectangle(84.2,486.3,35.8,33.4), new cjs.Rectangle(78.6,490.2,34.5,31.9), new cjs.Rectangle(73.2,494.3,33,30.3), new cjs.Rectangle(67.7,498.3,31.5,28.6), new cjs.Rectangle(61.2,501.2,32.1,29.2), new cjs.Rectangle(54.3,503.5,33.6,30.9), new cjs.Rectangle(47.4,506,35,32.5), new cjs.Rectangle(40.5,508.4,36.2,34), new cjs.Rectangle(33.8,510.9,37.4,35.3), new cjs.Rectangle(27.1,513.5,38.4,36.5), new cjs.Rectangle(20.4,516.1,39.3,37.7), new cjs.Rectangle(13.9,518.8,40.1,38.7), new cjs.Rectangle(7.4,521.5,40.7,39.5), new cjs.Rectangle(0.9,524.4,41.2,40.2), new cjs.Rectangle(-5.4,527.3,41.4,40.8), new cjs.Rectangle(-11.7,530.3,41.7,41.3), new cjs.Rectangle(-17.8,533.3,41.7,41.5), new cjs.Rectangle(-24,536.5,41.6,41.6), new cjs.Rectangle(-30.1,539.7,41.4,41.6), new cjs.Rectangle(-36.1,542.9,41,41.6), new cjs.Rectangle(-42,546.3,40.5,41.3), new cjs.Rectangle(-47.8,549.6,39.8,40.8), new cjs.Rectangle(-53.7,553.1,39,40.3), new cjs.Rectangle(-59.4,556.7,38.1,39.6), new cjs.Rectangle(-65.1,560.3,36.9,38.7), new cjs.Rectangle(-70.7,564,35.8,37.8), new cjs.Rectangle(-76.2,567.7,34.4,36.6), new cjs.Rectangle(-81.7,571.6,33,35.4), new cjs.Rectangle(-87.1,575.4,31.4,34), new cjs.Rectangle(-92.5,579.4,29.7,32.5), new cjs.Rectangle(-97.4,584.5,27,29), new cjs.Rectangle(-87.9,588.7,27,29), new cjs.Rectangle(-78.3,592.9,27,29), new cjs.Rectangle(-68.6,597.2,27,29), new cjs.Rectangle(-59,601.5,27,29), new cjs.Rectangle(-49.4,605.7,27,29), new cjs.Rectangle(-39.8,610,27,29), new cjs.Rectangle(-30.2,614.3,27,29), new cjs.Rectangle(-20.6,618.5,27,29), new cjs.Rectangle(-11,622.8,27,29), new cjs.Rectangle(-1.4,627,27,29), new cjs.Rectangle(8.2,631.3,27,29), new cjs.Rectangle(17.8,635.6,27,29), new cjs.Rectangle(27.4,639.8,27,29), new cjs.Rectangle(37,644.1,27,29), new cjs.Rectangle(46.6,648.3,27,29), new cjs.Rectangle(56.2,652.6,27,29), new cjs.Rectangle(65.8,656.9,27,29), new cjs.Rectangle(75.4,661.1,27,29), new cjs.Rectangle(85,665.4,27,29), new cjs.Rectangle(94.7,669.6,27,29), new cjs.Rectangle(104.3,673.9,27,29), new cjs.Rectangle(113.9,678.2,27,29), new cjs.Rectangle(123.5,682.4,27,29), new cjs.Rectangle(133.1,686.7,27,29), new cjs.Rectangle(142.7,690.9,27,29), new cjs.Rectangle(152.3,695.2,27,29), new cjs.Rectangle(161.9,699.5,27,29), new cjs.Rectangle(171.5,703.7,27,29), new cjs.Rectangle(181.1,708,27,29), new cjs.Rectangle(190.7,712.2,27,29), new cjs.Rectangle(200.4,716.5,27,29), new cjs.Rectangle(210,720.8,27,29), new cjs.Rectangle(219.6,725,27,29), new cjs.Rectangle(229.2,729.3,27,29), new cjs.Rectangle(238.8,733.6,27,29), new cjs.Rectangle(248.4,737.8,27,29), new cjs.Rectangle(258,742.1,27,29), new cjs.Rectangle(267.6,746.3,27,29), new cjs.Rectangle(277.2,750.6,27,29), new cjs.Rectangle(286.8,754.9,27,29), new cjs.Rectangle(296.4,759.1,27,29), new cjs.Rectangle(306,763.4,27,29), new cjs.Rectangle(315.7,767.6,27,29), new cjs.Rectangle(325.3,771.9,27,29), new cjs.Rectangle(334.9,776.2,27,29), new cjs.Rectangle(344.5,780.4,27,29), new cjs.Rectangle(354.1,784.7,27,29), new cjs.Rectangle(363.7,788.9,27,29), new cjs.Rectangle(373.3,793.2,27,29), new cjs.Rectangle(382.9,797.5,27,29), new cjs.Rectangle(392.6,801.8,27,29), new cjs.Rectangle(384.6,806.2,27.3,29.3), new cjs.Rectangle(376.7,810.6,27.6,29.5), new cjs.Rectangle(368.7,815,27.9,29.9), new cjs.Rectangle(360.6,819.5,28.1,30), new cjs.Rectangle(352.7,823.9,28.5,30.4), new cjs.Rectangle(344.7,828.3,28.8,30.6), new cjs.Rectangle(336.7,832.8,29,30.8), new cjs.Rectangle(328.7,837.2,29.3,31.1), new cjs.Rectangle(320.7,841.6,29.6,31.4), new cjs.Rectangle(312.6,846,29.9,31.6), new cjs.Rectangle(304.7,850.5,30.1,31.8), new cjs.Rectangle(296.7,854.9,30.4,32.1), new cjs.Rectangle(288.8,859.4,30.6,32.4), new cjs.Rectangle(280.7,863.7,30.9,32.6), new cjs.Rectangle(272.7,868.2,31.2,32.8), new cjs.Rectangle(264.7,872.7,31.4,33.1), new cjs.Rectangle(256.8,877.1,31.6,33.3), new cjs.Rectangle(248.9,881.6,31.9,33.5), new cjs.Rectangle(240.8,886.1,32.1,33.7), new cjs.Rectangle(232.8,890.5,32.4,33.9), new cjs.Rectangle(224.9,894.9,32.7,34.1), new cjs.Rectangle(217,899.4,32.9,34.4), new cjs.Rectangle(208.9,903.9,33.1,34.5), new cjs.Rectangle(201,908.3,33.3,34.8), new cjs.Rectangle(193.1,912.7,33.5,35), new cjs.Rectangle(185.1,917.2,33.8,35.1), new cjs.Rectangle(177.2,921.7,33.9,35.3), new cjs.Rectangle(169.2,926.2,34.2,35.6), new cjs.Rectangle(161.3,930.7,34.3,35.6), new cjs.Rectangle(153.3,935.1,34.6,35.9), new cjs.Rectangle(145.4,939.6,34.8,36.1), new cjs.Rectangle(137.4,944,34.9,36.2), new cjs.Rectangle(129.5,948.5,35.2,36.4), new cjs.Rectangle(121.5,953.1,35.3,36.5), new cjs.Rectangle(113.5,957.5,35.6,36.8), new cjs.Rectangle(105.6,962,35.8,36.8), new cjs.Rectangle(97.6,966.4,35.9,37), new cjs.Rectangle(89.8,971,36.1,37.1), new cjs.Rectangle(81.8,975.5,36.2,37.3), new cjs.Rectangle(73.8,979.9,36.5,37.5), new cjs.Rectangle(65.9,984.4,36.6,37.6), new cjs.Rectangle(57.9,988.8,36.7,37.7), new cjs.Rectangle(50.1,993.4,36.9,37.8), new cjs.Rectangle(42.1,998,37,37.9), new cjs.Rectangle(34.2,1002.4,37.2,38.1), new cjs.Rectangle(26.3,1006.9,37.3,38.1), new cjs.Rectangle(18.3,1011.4,37.5,38.3), new cjs.Rectangle(10.5,1015.9,37.6,38.4), new cjs.Rectangle(2.5,1020.4,37.7,38.4), new cjs.Rectangle(-5.4,1025,37.9,38.6), new cjs.Rectangle(0.5,1029.8,37.8,38.5), new cjs.Rectangle(6.5,1034.7,37.8,38.5), new cjs.Rectangle(12.4,1039.5,37.9,38.5), new cjs.Rectangle(18.4,1044.4,37.9,38.5), new cjs.Rectangle(24.4,1049.3,37.9,38.5), new cjs.Rectangle(30.3,1054.1,37.9,38.6), new cjs.Rectangle(36.3,1059,37.8,38.5), new cjs.Rectangle(42.2,1063.8,37.8,38.5), new cjs.Rectangle(48.2,1068.7,37.8,38.5), new cjs.Rectangle(54.2,1073.6,37.9,38.5), new cjs.Rectangle(60.1,1078.4,37.9,38.5), new cjs.Rectangle(66.1,1083.3,37.9,38.5), new cjs.Rectangle(72.1,1088.1,37.9,38.6), new cjs.Rectangle(78,1093,37.8,38.5), new cjs.Rectangle(84,1097.8,37.8,38.5), new cjs.Rectangle(90,1102.7,37.8,38.5), new cjs.Rectangle(95.9,1107.6,37.8,38.5), new cjs.Rectangle(101.9,1112.4,37.8,38.5), new cjs.Rectangle(107.9,1117.3,37.8,38.5), new cjs.Rectangle(113.8,1122.1,37.9,38.6), new cjs.Rectangle(119.8,1127,37.8,38.5), new cjs.Rectangle(125.8,1131.9,37.8,38.6), new cjs.Rectangle(131.7,1136.7,37.9,38.5), new cjs.Rectangle(137.7,1141.6,37.8,38.5), new cjs.Rectangle(143.7,1146.4,37.8,38.5), new cjs.Rectangle(149.6,1151.3,37.8,38.5), new cjs.Rectangle(155.6,1156.1,37.8,38.6), new cjs.Rectangle(161.5,1161,37.8,38.5), new cjs.Rectangle(167.5,1165.9,37.8,38.6), new cjs.Rectangle(173.5,1170.7,37.9,38.5), new cjs.Rectangle(179.4,1175.6,37.8,38.5), new cjs.Rectangle(185.4,1180.4,37.8,38.5), new cjs.Rectangle(191.4,1185.3,37.8,38.5), new cjs.Rectangle(197.3,1190.1,37.8,38.6), new cjs.Rectangle(203.3,1195,37.8,38.5), new cjs.Rectangle(209.3,1199.9,37.8,38.6), new cjs.Rectangle(215.2,1204.7,37.9,38.5), new cjs.Rectangle(221.2,1209.6,37.8,38.5), new cjs.Rectangle(227.2,1214.4,37.8,38.5), new cjs.Rectangle(233.1,1219.3,37.8,38.5), new cjs.Rectangle(239.1,1224.2,37.8,38.5), new cjs.Rectangle(245.1,1229,37.8,38.5), new cjs.Rectangle(251,1233.9,37.9,38.6), new cjs.Rectangle(257,1238.7,37.9,38.5), new cjs.Rectangle(262.9,1243.6,37.9,38.5), new cjs.Rectangle(268.9,1248.4,37.9,38.5), new cjs.Rectangle(274.9,1253.3,37.8,38.5), new cjs.Rectangle(280.8,1258.2,37.8,38.5), new cjs.Rectangle(286.8,1263,37.8,38.5), new cjs.Rectangle(292.8,1267.9,37.9,38.6), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lepestok2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45,x:139,y:227},39).to({rotation:0,x:-56,y:358},40).to({rotation:45,x:164,y:471},40).to({rotation:0,x:-37,y:638},40).to({x:-518.5,y:914.9},59).to({x:-13.5,y:1236.6,alpha:0.012},40).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,-14,31,28);
p.frameBounds = [rect, new cjs.Rectangle(-12.1,-8.4,31.5,28.6), new cjs.Rectangle(-8.8,-2.9,32.1,29.2), new cjs.Rectangle(-5.5,2.6,32.6,29.7), new cjs.Rectangle(-2.2,8.1,33.1,30.4), new cjs.Rectangle(1,13.6,33.7,30.9), new cjs.Rectangle(4.4,19.2,34.1,31.5), new cjs.Rectangle(7.7,24.7,34.6,32), new cjs.Rectangle(11,30.3,35,32.6), new cjs.Rectangle(14.4,35.9,35.5,33.1), new cjs.Rectangle(17.7,41.4,36,33.6), new cjs.Rectangle(21,47,36.4,34.1), new cjs.Rectangle(24.4,52.6,36.8,34.6), new cjs.Rectangle(27.8,58.2,37.1,35), new cjs.Rectangle(31.1,63.8,37.5,35.5), new cjs.Rectangle(34.5,69.3,37.8,35.9), new cjs.Rectangle(37.9,75,38.2,36.3), new cjs.Rectangle(41.3,80.6,38.6,36.7), new cjs.Rectangle(44.7,86.2,38.8,37.1), new cjs.Rectangle(48.1,91.9,39.2,37.5), new cjs.Rectangle(51.6,97.5,39.5,37.9), new cjs.Rectangle(55,103.2,39.7,38.2), new cjs.Rectangle(58.4,108.8,39.9,38.6), new cjs.Rectangle(61.9,114.4,40.2,38.8), new cjs.Rectangle(65.4,120.1,40.4,39.2), new cjs.Rectangle(68.8,125.8,40.6,39.4), new cjs.Rectangle(72.3,131.5,40.8,39.7), new cjs.Rectangle(75.8,137.2,41,39.9), new cjs.Rectangle(79.2,142.9,41.1,40.2), new cjs.Rectangle(82.8,148.6,41.2,40.3), new cjs.Rectangle(86.2,154.3,41.3,40.5), new cjs.Rectangle(89.8,160.1,41.4,40.8), new cjs.Rectangle(93.3,165.8,41.5,40.9), new cjs.Rectangle(96.8,171.6,41.6,41.1), new cjs.Rectangle(100.4,177.3,41.7,41.3), new cjs.Rectangle(103.9,183,41.7,41.3), new cjs.Rectangle(107.5,188.8,41.7,41.4), new cjs.Rectangle(111,194.6,41.7,41.5), new cjs.Rectangle(114.6,200.4,41.7,41.6), new cjs.Rectangle(118.2,206.2,41.7,41.7), new cjs.Rectangle(113.3,209.5,41.7,41.6), new cjs.Rectangle(108.3,212.8,41.7,41.5), new cjs.Rectangle(103.6,216.2,41.7,41.5), new cjs.Rectangle(98.7,219.5,41.7,41.4), new cjs.Rectangle(93.8,222.8,41.7,41.3), new cjs.Rectangle(89,226.2,41.6,41.1), new cjs.Rectangle(84.1,229.6,41.6,40.9), new cjs.Rectangle(79.3,232.9,41.5,40.8), new cjs.Rectangle(74.4,236.3,41.3,40.6), new cjs.Rectangle(69.6,239.6,41.3,40.5), new cjs.Rectangle(64.8,243,41.2,40.2), new cjs.Rectangle(60,246.4,41,40), new cjs.Rectangle(55.3,249.8,40.8,39.8), new cjs.Rectangle(50.4,253.2,40.7,39.5), new cjs.Rectangle(45.7,256.6,40.4,39.2), new cjs.Rectangle(40.9,260,40.2,38.9), new cjs.Rectangle(36.1,263.4,40.1,38.7), new cjs.Rectangle(31.4,266.9,39.8,38.3), new cjs.Rectangle(26.6,270.3,39.6,38.1), new cjs.Rectangle(21.8,273.7,39.3,37.6), new cjs.Rectangle(17.2,277.1,39,37.3), new cjs.Rectangle(12.4,280.7,38.7,36.9), new cjs.Rectangle(7.7,284.1,38.4,36.5), new cjs.Rectangle(3,287.6,38.1,36.1), new cjs.Rectangle(-1.7,291.1,37.8,35.8), new cjs.Rectangle(-6.4,294.6,37.4,35.3), new cjs.Rectangle(-11,298.1,37,34.9), new cjs.Rectangle(-15.8,301.6,36.7,34.4), new cjs.Rectangle(-20.4,305.1,36.2,33.9), new cjs.Rectangle(-25,308.6,35.8,33.4), new cjs.Rectangle(-29.7,312.1,35.4,32.9), new cjs.Rectangle(-34.3,315.7,34.9,32.4), new cjs.Rectangle(-39,319.2,34.5,32), new cjs.Rectangle(-43.6,322.8,34,31.4), new cjs.Rectangle(-48.2,326.3,33.6,30.8), new cjs.Rectangle(-52.9,329.8,33.1,30.3), new cjs.Rectangle(-57.5,333.4,32.6,29.7), new cjs.Rectangle(-62.1,336.9,32.1,29.2), new cjs.Rectangle(-66.7,340.6,31.5,28.6), new cjs.Rectangle(-71.5,344,31,28), new cjs.Rectangle(-66.2,346.6,31.5,28.6), new cjs.Rectangle(-61,349.1,32.1,29.1), new cjs.Rectangle(-55.8,351.6,32.6,29.7), new cjs.Rectangle(-50.6,354.2,33.1,30.4), new cjs.Rectangle(-45.3,356.7,33.6,30.9), new cjs.Rectangle(-40,359.3,34,31.3), new cjs.Rectangle(-34.8,361.8,34.5,31.9), new cjs.Rectangle(-29.5,364.4,34.9,32.4), new cjs.Rectangle(-24.2,367,35.4,32.9), new cjs.Rectangle(-18.9,369.6,35.8,33.4), new cjs.Rectangle(-13.7,372.1,36.2,33.9), new cjs.Rectangle(-8.4,374.7,36.7,34.5), new cjs.Rectangle(-3.1,377.3,37,34.9), new cjs.Rectangle(2.2,379.9,37.4,35.3), new cjs.Rectangle(7.5,382.5,37.8,35.8), new cjs.Rectangle(12.9,385.1,38.1,36.1), new cjs.Rectangle(18.2,387.7,38.4,36.6), new cjs.Rectangle(23.6,390.4,38.7,36.9), new cjs.Rectangle(28.9,393,39,37.3), new cjs.Rectangle(34.2,395.7,39.3,37.6), new cjs.Rectangle(39.6,398.3,39.6,38.1), new cjs.Rectangle(45,400.9,39.8,38.4), new cjs.Rectangle(50.4,403.6,40.1,38.6), new cjs.Rectangle(55.8,406.3,40.3,38.9), new cjs.Rectangle(61.2,409,40.4,39.2), new cjs.Rectangle(66.5,411.7,40.7,39.5), new cjs.Rectangle(72,414.4,40.8,39.8), new cjs.Rectangle(77.4,417.1,41,39.9), new cjs.Rectangle(82.8,419.8,41.2,40.2), new cjs.Rectangle(88.3,422.5,41.3,40.4), new cjs.Rectangle(93.7,425.2,41.4,40.7), new cjs.Rectangle(99.2,428,41.5,40.8), new cjs.Rectangle(104.6,430.8,41.6,40.9), new cjs.Rectangle(110.1,433.5,41.6,41.1), new cjs.Rectangle(115.5,436.2,41.7,41.3), new cjs.Rectangle(121.1,439,41.6,41.4), new cjs.Rectangle(126.5,441.8,41.7,41.4), new cjs.Rectangle(132,444.5,41.7,41.5), new cjs.Rectangle(137.5,447.4,41.7,41.6), new cjs.Rectangle(143.2,450.1,41.7,41.7), new cjs.Rectangle(138.2,454.4,41.7,41.6), new cjs.Rectangle(133.1,458.6,41.7,41.5), new cjs.Rectangle(128.1,462.8,41.7,41.4), new cjs.Rectangle(123.1,467,41.6,41.4), new cjs.Rectangle(118.1,471.2,41.7,41.3), new cjs.Rectangle(113.1,475.5,41.6,41.1), new cjs.Rectangle(108,479.8,41.6,41), new cjs.Rectangle(103.1,484,41.5,40.8), new cjs.Rectangle(98.1,488.3,41.4,40.7), new cjs.Rectangle(93.1,492.6,41.3,40.4), new cjs.Rectangle(88.2,496.8,41.1,40.2), new cjs.Rectangle(83.2,501.1,41,39.9), new cjs.Rectangle(78.3,505.4,40.8,39.8), new cjs.Rectangle(73.3,509.8,40.7,39.5), new cjs.Rectangle(68.4,514,40.5,39.2), new cjs.Rectangle(63.5,518.3,40.3,39), new cjs.Rectangle(58.6,522.7,40.1,38.6), new cjs.Rectangle(53.6,527,39.8,38.3), new cjs.Rectangle(48.7,531.4,39.6,38), new cjs.Rectangle(43.9,535.7,39.3,37.6), new cjs.Rectangle(39,540,39,37.3), new cjs.Rectangle(34.1,544.4,38.7,36.9), new cjs.Rectangle(29.2,548.7,38.4,36.5), new cjs.Rectangle(24.4,553.1,38.1,36.1), new cjs.Rectangle(19.5,557.5,37.8,35.8), new cjs.Rectangle(14.7,561.9,37.4,35.3), new cjs.Rectangle(9.9,566.3,37,34.9), new cjs.Rectangle(5,570.7,36.7,34.5), new cjs.Rectangle(0.1,575.1,36.2,33.9), new cjs.Rectangle(-4.6,579.5,35.8,33.4), new cjs.Rectangle(-9.4,583.9,35.4,33), new cjs.Rectangle(-14.2,588.4,34.9,32.4), new cjs.Rectangle(-18.9,592.8,34.5,32), new cjs.Rectangle(-23.7,597.2,34,31.3), new cjs.Rectangle(-28.6,601.7,33.6,30.9), new cjs.Rectangle(-33.3,606.1,33.1,30.4), new cjs.Rectangle(-38.1,610.6,32.6,29.7), new cjs.Rectangle(-42.8,615.1,32.1,29.2), new cjs.Rectangle(-47.6,619.6,31.5,28.6), new cjs.Rectangle(-52.5,624,31,28), new cjs.Rectangle(-60.6,628.7,31,28), new cjs.Rectangle(-68.8,633.4,31,28), new cjs.Rectangle(-77,638.1,31,28), new cjs.Rectangle(-85.1,642.8,31,28), new cjs.Rectangle(-93.3,647.4,31,28), new cjs.Rectangle(-101.4,652.1,31,28), new cjs.Rectangle(-109.6,656.8,31,28), new cjs.Rectangle(-117.8,661.5,31,28), new cjs.Rectangle(-125.9,666.2,31,28), new cjs.Rectangle(-134.1,670.9,31,28), new cjs.Rectangle(-142.3,675.6,31,28), new cjs.Rectangle(-150.4,680.3,31,28), new cjs.Rectangle(-158.6,685,31,28), new cjs.Rectangle(-166.7,689.7,31,28), new cjs.Rectangle(-174.9,694.4,31,28), new cjs.Rectangle(-183,699.1,31,28), new cjs.Rectangle(-191.2,703.8,31,28), new cjs.Rectangle(-199.4,708.5,31,28), new cjs.Rectangle(-207.5,713.2,31,28), new cjs.Rectangle(-215.7,717.9,31,28), new cjs.Rectangle(-223.9,722.5,31,28), new cjs.Rectangle(-232,727.2,31,28), new cjs.Rectangle(-240.2,731.9,31,28), new cjs.Rectangle(-248.3,736.6,31,28), new cjs.Rectangle(-256.5,741.3,31,28), new cjs.Rectangle(-264.7,746,31,28), new cjs.Rectangle(-272.8,750.7,31,28), new cjs.Rectangle(-281,755.4,31,28), new cjs.Rectangle(-289.1,760.1,31,28), new cjs.Rectangle(-297.3,764.8,31,28), new cjs.Rectangle(-305.5,769.5,31,28), new cjs.Rectangle(-313.6,774.2,31,28), new cjs.Rectangle(-321.8,778.9,31,28), new cjs.Rectangle(-330,783.6,31,28), new cjs.Rectangle(-338.1,788.3,31,28), new cjs.Rectangle(-346.3,793,31,28), new cjs.Rectangle(-354.4,797.7,31,28), new cjs.Rectangle(-362.6,802.4,31,28), new cjs.Rectangle(-370.8,807,31,28), new cjs.Rectangle(-378.9,811.7,31,28), new cjs.Rectangle(-387.1,816.4,31,28), new cjs.Rectangle(-395.2,821.1,31,28), new cjs.Rectangle(-403.4,825.8,31,28), new cjs.Rectangle(-411.6,830.5,31,28), new cjs.Rectangle(-419.7,835.2,31,28), new cjs.Rectangle(-427.9,839.9,31,28), new cjs.Rectangle(-436,844.6,31,28), new cjs.Rectangle(-444.2,849.3,31,28), new cjs.Rectangle(-452.4,854,31,28), new cjs.Rectangle(-460.5,858.7,31,28), new cjs.Rectangle(-468.7,863.4,31,28), new cjs.Rectangle(-476.9,868.1,31,28), new cjs.Rectangle(-485,872.8,31,28), new cjs.Rectangle(-493.2,877.5,31,28), new cjs.Rectangle(-501.3,882.1,31,28), new cjs.Rectangle(-509.5,886.8,31,28), new cjs.Rectangle(-517.6,891.5,31,28), new cjs.Rectangle(-525.8,896.2,31,28), new cjs.Rectangle(-534,900.9,31,28), new cjs.Rectangle(-521.4,909,31,28), new cjs.Rectangle(-508.7,917,31,28), new cjs.Rectangle(-496.1,925.1,31,28), new cjs.Rectangle(-483.5,933.1,31,28), new cjs.Rectangle(-470.9,941.1,31,28), new cjs.Rectangle(-458.2,949.2,31,28), new cjs.Rectangle(-445.6,957.2,31,28), new cjs.Rectangle(-433,965.3,31,28), new cjs.Rectangle(-420.4,973.3,31,28), new cjs.Rectangle(-407.7,981.3,31,28), new cjs.Rectangle(-395.1,989.4,31,28), new cjs.Rectangle(-382.5,997.4,31,28), new cjs.Rectangle(-369.9,1005.5,31,28), new cjs.Rectangle(-357.2,1013.5,31,28), new cjs.Rectangle(-344.6,1021.6,31,28), new cjs.Rectangle(-332,1029.6,31,28), new cjs.Rectangle(-319.4,1037.6,31,28), new cjs.Rectangle(-306.7,1045.7,31,28), new cjs.Rectangle(-294.1,1053.7,31,28), new cjs.Rectangle(-281.5,1061.8,31,28), new cjs.Rectangle(-268.9,1069.8,31,28), new cjs.Rectangle(-256.3,1077.9,31,28), new cjs.Rectangle(-243.6,1085.9,31,28), new cjs.Rectangle(-231,1093.9,31,28), new cjs.Rectangle(-218.4,1102,31,28), new cjs.Rectangle(-205.8,1110,31,28), new cjs.Rectangle(-193.1,1118.1,31,28), new cjs.Rectangle(-180.5,1126.1,31,28), new cjs.Rectangle(-167.9,1134.2,31,28), new cjs.Rectangle(-155.3,1142.2,31,28), new cjs.Rectangle(-142.6,1150.2,31,28), new cjs.Rectangle(-130,1158.3,31,28), new cjs.Rectangle(-117.4,1166.3,31,28), new cjs.Rectangle(-104.8,1174.4,31,28), new cjs.Rectangle(-92.1,1182.4,31,28), new cjs.Rectangle(-79.5,1190.5,31,28), new cjs.Rectangle(-66.9,1198.5,31,28), new cjs.Rectangle(-54.3,1206.5,31,28), new cjs.Rectangle(-41.6,1214.6,31,28), new cjs.Rectangle(-29,1222.6,31,28), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lepestok1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).to({rotation:75,x:156,y:210},49).to({rotation:180,x:-46.9,y:350},50).to({rotation:240,x:185,y:474},50).to({rotation:270,x:-83.9,y:599},50).to({x:406.1,y:816.3},50).to({rotation:240,x:13.5,y:1044.3},50).to({x:311.8,y:1287.2,alpha:0.012},50).to({_off:true},1).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-14.5,-13.5,29,27), new cjs.Rectangle(-11.6,-9.5,29.7,27.8), new cjs.Rectangle(-8.8,-5.6,30.4,28.5), new cjs.Rectangle(-5.9,-1.7,31.1,29.2), new cjs.Rectangle(-3,2.2,31.7,29.9), new cjs.Rectangle(-0.2,6.2,32.3,30.6), new cjs.Rectangle(2.7,10.1,32.9,31.2), new cjs.Rectangle(5.6,14.1,33.5,31.9), new cjs.Rectangle(8.5,18.1,34,32.5), new cjs.Rectangle(11.4,22,34.6,33.1), new cjs.Rectangle(14.3,26,35.1,33.7), new cjs.Rectangle(17.2,30.1,35.6,34.2), new cjs.Rectangle(20.2,34.1,36,34.7), new cjs.Rectangle(23.2,38.1,36.4,35.2), new cjs.Rectangle(26.2,42.2,36.8,35.7), new cjs.Rectangle(29.2,46.3,37.2,36.1), new cjs.Rectangle(32.2,50.3,37.5,36.5), new cjs.Rectangle(35.2,54.4,37.9,36.9), new cjs.Rectangle(38.2,58.5,38.1,37.3), new cjs.Rectangle(41.3,62.6,38.4,37.6), new cjs.Rectangle(44.3,66.7,38.7,38), new cjs.Rectangle(47.4,70.9,38.9,38.3), new cjs.Rectangle(50.6,75.1,39,38.5), new cjs.Rectangle(53.6,79.2,39.2,38.7), new cjs.Rectangle(56.7,83.4,39.3,38.9), new cjs.Rectangle(59.9,87.6,39.4,39.1), new cjs.Rectangle(63,91.8,39.5,39.3), new cjs.Rectangle(66.2,96,39.6,39.4), new cjs.Rectangle(69.4,100.3,39.6,39.4), new cjs.Rectangle(72.6,104.5,39.6,39.5), new cjs.Rectangle(75.8,108.8,39.5,39.6), new cjs.Rectangle(79,113.1,39.5,39.6), new cjs.Rectangle(82.2,117.4,39.3,39.5), new cjs.Rectangle(85.4,121.7,39.2,39.5), new cjs.Rectangle(88.7,126,39.1,39.4), new cjs.Rectangle(92,130.4,38.8,39.3), new cjs.Rectangle(95.3,134.7,38.7,39.2), new cjs.Rectangle(98.6,139,38.4,39), new cjs.Rectangle(101.9,143.4,38.2,38.8), new cjs.Rectangle(105.2,147.8,37.9,38.6), new cjs.Rectangle(108.5,152.3,37.6,38.4), new cjs.Rectangle(112,156.7,37.2,38.1), new cjs.Rectangle(115.3,161.1,36.8,37.8), new cjs.Rectangle(118.7,165.6,36.4,37.4), new cjs.Rectangle(122.1,170,36,37.1), new cjs.Rectangle(125.5,174.5,35.6,36.8), new cjs.Rectangle(128.9,179,35.1,36.3), new cjs.Rectangle(132.3,183.5,34.6,35.9), new cjs.Rectangle(135.8,188,34.1,35.5), new cjs.Rectangle(139.2,192.5,33.6,35), new cjs.Rectangle(135.6,195.7,32.7,34.3), new cjs.Rectangle(131.9,198.8,31.9,33.5), new cjs.Rectangle(128.3,202.1,31,32.6), new cjs.Rectangle(124.8,205.3,30.1,31.8), new cjs.Rectangle(121.2,208.5,29.1,30.9), new cjs.Rectangle(117.7,211.8,28.1,30.1), new cjs.Rectangle(114,215,27.2,29.1), new cjs.Rectangle(109.6,217.5,27.9,29.9), new cjs.Rectangle(105,219.8,28.8,30.8), new cjs.Rectangle(100.5,222.2,29.8,31.6), new cjs.Rectangle(96,224.6,30.8,32.5), new cjs.Rectangle(91.6,227,31.6,33.3), new cjs.Rectangle(87.1,229.4,32.5,34), new cjs.Rectangle(82.5,231.9,33.3,34.8), new cjs.Rectangle(78.1,234.3,34.1,35.4), new cjs.Rectangle(73.7,236.8,34.8,36.1), new cjs.Rectangle(69.3,239.3,35.5,36.6), new cjs.Rectangle(64.9,241.8,36.1,37.1), new cjs.Rectangle(60.6,244.5,36.6,37.6), new cjs.Rectangle(56.2,247,37.2,38.1), new cjs.Rectangle(51.9,249.6,37.6,38.4), new cjs.Rectangle(47.6,252.3,38.1,38.7), new cjs.Rectangle(43.4,255,38.4,39), new cjs.Rectangle(39.2,257.6,38.8,39.2), new cjs.Rectangle(35,260.3,39,39.3), new cjs.Rectangle(30.8,263,39.2,39.5), new cjs.Rectangle(26.6,265.9,39.4,39.5), new cjs.Rectangle(22.5,268.7,39.5,39.6), new cjs.Rectangle(18.5,271.5,39.6,39.5), new cjs.Rectangle(14.4,274.3,39.6,39.4), new cjs.Rectangle(10.3,277.2,39.5,39.3), new cjs.Rectangle(6.4,280.1,39.4,39.1), new cjs.Rectangle(2.4,283,39.3,38.8), new cjs.Rectangle(-1.5,286,39,38.4), new cjs.Rectangle(-5.5,289,38.8,38.1), new cjs.Rectangle(-9.4,292,38.5,37.7), new cjs.Rectangle(-13.3,295,38.1,37.3), new cjs.Rectangle(-17.2,298.1,37.7,36.7), new cjs.Rectangle(-20.9,301.2,37.2,36.2), new cjs.Rectangle(-24.7,304.3,36.7,35.5), new cjs.Rectangle(-28.4,307.4,36.1,34.9), new cjs.Rectangle(-32.3,310.5,35.6,34.2), new cjs.Rectangle(-35.9,313.8,34.9,33.4), new cjs.Rectangle(-39.6,316.9,34.2,32.7), new cjs.Rectangle(-43.3,320.1,33.4,31.8), new cjs.Rectangle(-47,323.4,32.6,30.9), new cjs.Rectangle(-50.6,326.6,31.8,30), new cjs.Rectangle(-54.2,329.9,30.8,29), new cjs.Rectangle(-57.8,333.2,30,28), new cjs.Rectangle(-61.4,336.5,29,27), new cjs.Rectangle(-57.1,338.8,29.5,27.6), new cjs.Rectangle(-52.7,341,30.1,28.1), new cjs.Rectangle(-48.4,343.1,30.6,28.8), new cjs.Rectangle(-44,345.3,31.2,29.3), new cjs.Rectangle(-39.6,347.5,31.7,29.9), new cjs.Rectangle(-35.1,349.7,32.1,30.4), new cjs.Rectangle(-30.8,351.9,32.6,30.9), new cjs.Rectangle(-26.4,354.2,33.1,31.4), new cjs.Rectangle(-22,356.4,33.5,31.9), new cjs.Rectangle(-17.5,358.6,33.9,32.3), new cjs.Rectangle(-13.2,360.9,34.3,32.8), new cjs.Rectangle(-8.8,363.1,34.8,33.3), new cjs.Rectangle(-4.3,365.4,35.2,33.8), new cjs.Rectangle(0.1,367.6,35.6,34.2), new cjs.Rectangle(4.6,370,35.9,34.6), new cjs.Rectangle(9,372.2,36.2,34.9), new cjs.Rectangle(13.6,374.5,36.5,35.4), new cjs.Rectangle(18,376.7,36.9,35.8), new cjs.Rectangle(22.5,379.1,37.2,36.1), new cjs.Rectangle(27,381.4,37.4,36.4), new cjs.Rectangle(31.4,383.8,37.7,36.7), new cjs.Rectangle(36.1,386.1,37.9,37), new cjs.Rectangle(40.5,388.4,38.2,37.3), new cjs.Rectangle(45.1,390.7,38.4,37.6), new cjs.Rectangle(49.6,393.1,38.5,37.8), new cjs.Rectangle(54.1,395.4,38.7,38.1), new cjs.Rectangle(58.7,397.8,38.8,38.3), new cjs.Rectangle(63.3,400.2,39,38.4), new cjs.Rectangle(67.9,402.6,39.1,38.7), new cjs.Rectangle(72.5,405,39.3,38.8), new cjs.Rectangle(77,407.4,39.3,38.9), new cjs.Rectangle(81.6,409.8,39.5,39.1), new cjs.Rectangle(86.3,412.2,39.5,39.2), new cjs.Rectangle(90.9,414.6,39.6,39.3), new cjs.Rectangle(95.5,417,39.6,39.4), new cjs.Rectangle(100.1,419.5,39.6,39.4), new cjs.Rectangle(104.8,422,39.6,39.5), new cjs.Rectangle(109.5,424.4,39.5,39.6), new cjs.Rectangle(114.1,426.9,39.5,39.6), new cjs.Rectangle(118.8,429.4,39.4,39.5), new cjs.Rectangle(123.5,431.9,39.4,39.5), new cjs.Rectangle(128.1,434.3,39.2,39.5), new cjs.Rectangle(132.9,436.9,39.1,39.4), new cjs.Rectangle(137.6,439.4,38.9,39.3), new cjs.Rectangle(142.3,441.9,38.8,39.3), new cjs.Rectangle(147,444.5,38.7,39.2), new cjs.Rectangle(151.8,447,38.4,39), new cjs.Rectangle(156.5,449.5,38.3,38.9), new cjs.Rectangle(161.2,452,38.1,38.8), new cjs.Rectangle(166.1,454.7,37.9,38.6), new cjs.Rectangle(160.7,457.2,37.7,38.4), new cjs.Rectangle(155.5,459.8,37.6,38.3), new cjs.Rectangle(150.1,462.4,37.5,38.3), new cjs.Rectangle(144.9,464.9,37.3,38.2), new cjs.Rectangle(139.5,467.5,37.2,38.1), new cjs.Rectangle(134.2,470,37,37.9), new cjs.Rectangle(128.9,472.6,36.9,37.8), new cjs.Rectangle(123.6,475.1,36.7,37.7), new cjs.Rectangle(118.3,477.7,36.6,37.6), new cjs.Rectangle(113,480.3,36.5,37.5), new cjs.Rectangle(107.8,482.9,36.2,37.3), new cjs.Rectangle(102.4,485.4,36,37.1), new cjs.Rectangle(97.1,487.9,35.9,37), new cjs.Rectangle(91.8,490.6,35.8,36.8), new cjs.Rectangle(86.5,493.1,35.6,36.7), new cjs.Rectangle(81.3,495.8,35.3,36.5), new cjs.Rectangle(76,498.3,35.2,36.4), new cjs.Rectangle(70.7,500.8,35,36.2), new cjs.Rectangle(65.4,503.4,34.8,36.1), new cjs.Rectangle(60.1,506,34.6,35.9), new cjs.Rectangle(54.9,508.7,34.4,35.6), new cjs.Rectangle(49.6,511.2,34.2,35.6), new cjs.Rectangle(44.3,513.8,33.9,35.3), new cjs.Rectangle(39,516.4,33.8,35.1), new cjs.Rectangle(33.7,519,33.6,35), new cjs.Rectangle(28.5,521.6,33.3,34.8), new cjs.Rectangle(23.1,524.2,33.1,34.5), new cjs.Rectangle(17.9,526.8,32.9,34.4), new cjs.Rectangle(12.7,529.4,32.7,34.1), new cjs.Rectangle(7.4,532,32.5,34), new cjs.Rectangle(2.2,534.7,32.2,33.7), new cjs.Rectangle(-3.1,537.3,31.9,33.5), new cjs.Rectangle(-8.3,539.9,31.6,33.3), new cjs.Rectangle(-13.6,542.5,31.4,33), new cjs.Rectangle(-18.8,545,31.2,32.9), new cjs.Rectangle(-24.1,547.7,30.9,32.6), new cjs.Rectangle(-29.3,550.3,30.7,32.4), new cjs.Rectangle(-34.5,553,30.4,32), new cjs.Rectangle(-39.8,555.6,30.1,31.9), new cjs.Rectangle(-45.1,558.2,29.9,31.6), new cjs.Rectangle(-50.3,560.8,29.6,31.4), new cjs.Rectangle(-55.5,563.4,29.3,31.1), new cjs.Rectangle(-60.7,566.1,29,30.8), new cjs.Rectangle(-66,568.6,28.8,30.6), new cjs.Rectangle(-71.2,571.3,28.5,30.4), new cjs.Rectangle(-76.5,574,28.1,30), new cjs.Rectangle(-81.7,576.6,27.9,29.9), new cjs.Rectangle(-86.9,579.2,27.6,29.5), new cjs.Rectangle(-92.2,581.9,27.3,29.3), new cjs.Rectangle(-97.4,584.5,27,29), new cjs.Rectangle(-87.7,588.8,27,29), new cjs.Rectangle(-77.9,593.1,27,29), new cjs.Rectangle(-68.1,597.5,27,29), new cjs.Rectangle(-58.3,601.8,27,29), new cjs.Rectangle(-48.5,606.2,27,29), new cjs.Rectangle(-38.7,610.5,27,29), new cjs.Rectangle(-28.9,614.8,27,29), new cjs.Rectangle(-19.1,619.2,27,29), new cjs.Rectangle(-9.3,623.5,27,29), new cjs.Rectangle(0.5,627.9,27,29), new cjs.Rectangle(10.3,632.2,27,29), new cjs.Rectangle(20.1,636.6,27,29), new cjs.Rectangle(29.9,640.9,27,29), new cjs.Rectangle(39.7,645.3,27,29), new cjs.Rectangle(49.5,649.6,27,29), new cjs.Rectangle(59.3,654,27,29), new cjs.Rectangle(69.1,658.3,27,29), new cjs.Rectangle(78.9,662.7,27,29), new cjs.Rectangle(88.7,667,27,29), new cjs.Rectangle(98.5,671.3,27,29), new cjs.Rectangle(108.3,675.7,27,29), new cjs.Rectangle(118.1,680,27,29), new cjs.Rectangle(127.9,684.4,27,29), new cjs.Rectangle(137.7,688.7,27,29), new cjs.Rectangle(147.5,693.1,27,29), new cjs.Rectangle(157.3,697.4,27,29), new cjs.Rectangle(167.1,701.8,27,29), new cjs.Rectangle(176.9,706.1,27,29), new cjs.Rectangle(186.7,710.5,27,29), new cjs.Rectangle(196.5,714.8,27,29), new cjs.Rectangle(206.3,719.2,27,29), new cjs.Rectangle(216.1,723.5,27,29), new cjs.Rectangle(225.9,727.8,27,29), new cjs.Rectangle(235.7,732.2,27,29), new cjs.Rectangle(245.5,736.5,27,29), new cjs.Rectangle(255.3,740.9,27,29), new cjs.Rectangle(265.1,745.2,27,29), new cjs.Rectangle(274.9,749.6,27,29), new cjs.Rectangle(284.7,753.9,27,29), new cjs.Rectangle(294.5,758.3,27,29), new cjs.Rectangle(304.3,762.6,27,29), new cjs.Rectangle(314.1,767,27,29), new cjs.Rectangle(323.9,771.3,27,29), new cjs.Rectangle(333.7,775.7,27,29), new cjs.Rectangle(343.5,780,27,29), new cjs.Rectangle(353.3,784.3,27,29), new cjs.Rectangle(363.1,788.7,27,29), new cjs.Rectangle(372.9,793,27,29), new cjs.Rectangle(382.7,797.4,27,29), new cjs.Rectangle(392.6,801.8,27,29), new cjs.Rectangle(384.6,806.2,27.3,29.3), new cjs.Rectangle(376.7,810.6,27.6,29.5), new cjs.Rectangle(368.7,815,27.9,29.9), new cjs.Rectangle(360.6,819.5,28.1,30), new cjs.Rectangle(352.7,823.9,28.5,30.4), new cjs.Rectangle(344.7,828.3,28.8,30.6), new cjs.Rectangle(336.7,832.8,29,30.8), new cjs.Rectangle(328.7,837.2,29.3,31.1), new cjs.Rectangle(320.7,841.6,29.6,31.4), new cjs.Rectangle(312.6,846,29.9,31.6), new cjs.Rectangle(304.7,850.5,30.1,31.8), new cjs.Rectangle(296.7,854.9,30.4,32.1), new cjs.Rectangle(288.8,859.4,30.6,32.4), new cjs.Rectangle(280.7,863.7,30.9,32.6), new cjs.Rectangle(272.7,868.2,31.2,32.8), new cjs.Rectangle(264.7,872.7,31.4,33.1), new cjs.Rectangle(256.8,877.1,31.6,33.3), new cjs.Rectangle(248.9,881.6,31.9,33.5), new cjs.Rectangle(240.8,886.1,32.1,33.7), new cjs.Rectangle(232.8,890.5,32.4,33.9), new cjs.Rectangle(224.9,894.9,32.7,34.1), new cjs.Rectangle(217,899.4,32.9,34.4), new cjs.Rectangle(208.9,903.9,33.1,34.5), new cjs.Rectangle(201,908.3,33.3,34.8), new cjs.Rectangle(193.1,912.7,33.5,35), new cjs.Rectangle(185.1,917.2,33.8,35.1), new cjs.Rectangle(177.2,921.7,33.9,35.3), new cjs.Rectangle(169.2,926.2,34.2,35.6), new cjs.Rectangle(161.3,930.7,34.3,35.6), new cjs.Rectangle(153.3,935.1,34.6,35.9), new cjs.Rectangle(145.4,939.6,34.8,36.1), new cjs.Rectangle(137.4,944,34.9,36.2), new cjs.Rectangle(129.5,948.5,35.2,36.4), new cjs.Rectangle(121.5,953.1,35.3,36.5), new cjs.Rectangle(113.5,957.5,35.6,36.8), new cjs.Rectangle(105.6,962,35.8,36.8), new cjs.Rectangle(97.6,966.4,35.9,37), new cjs.Rectangle(89.8,971,36.1,37.1), new cjs.Rectangle(81.8,975.5,36.2,37.3), new cjs.Rectangle(73.8,979.9,36.5,37.5), new cjs.Rectangle(65.9,984.4,36.6,37.6), new cjs.Rectangle(57.9,988.8,36.7,37.7), new cjs.Rectangle(50.1,993.4,36.9,37.8), new cjs.Rectangle(42.1,998,37,37.9), new cjs.Rectangle(34.2,1002.4,37.2,38.1), new cjs.Rectangle(26.3,1006.9,37.3,38.1), new cjs.Rectangle(18.3,1011.4,37.5,38.3), new cjs.Rectangle(10.5,1015.9,37.6,38.4), new cjs.Rectangle(2.5,1020.4,37.7,38.4), new cjs.Rectangle(-5.4,1025,37.9,38.6), new cjs.Rectangle(0.5,1029.8,37.8,38.5), new cjs.Rectangle(6.5,1034.7,37.8,38.5), new cjs.Rectangle(12.4,1039.5,37.9,38.5), new cjs.Rectangle(18.4,1044.4,37.9,38.5), new cjs.Rectangle(24.4,1049.3,37.9,38.5), new cjs.Rectangle(30.3,1054.1,37.9,38.6), new cjs.Rectangle(36.3,1059,37.8,38.5), new cjs.Rectangle(42.2,1063.8,37.8,38.5), new cjs.Rectangle(48.2,1068.7,37.8,38.5), new cjs.Rectangle(54.2,1073.6,37.9,38.5), new cjs.Rectangle(60.1,1078.4,37.9,38.5), new cjs.Rectangle(66.1,1083.3,37.9,38.5), new cjs.Rectangle(72.1,1088.1,37.9,38.6), new cjs.Rectangle(78,1093,37.8,38.5), new cjs.Rectangle(84,1097.8,37.8,38.5), new cjs.Rectangle(90,1102.7,37.8,38.5), new cjs.Rectangle(95.9,1107.6,37.8,38.5), new cjs.Rectangle(101.9,1112.4,37.8,38.5), new cjs.Rectangle(107.9,1117.3,37.8,38.5), new cjs.Rectangle(113.8,1122.1,37.9,38.6), new cjs.Rectangle(119.8,1127,37.8,38.5), new cjs.Rectangle(125.8,1131.9,37.8,38.6), new cjs.Rectangle(131.7,1136.7,37.9,38.5), new cjs.Rectangle(137.7,1141.6,37.8,38.5), new cjs.Rectangle(143.7,1146.4,37.8,38.5), new cjs.Rectangle(149.6,1151.3,37.8,38.5), new cjs.Rectangle(155.6,1156.1,37.8,38.6), new cjs.Rectangle(161.5,1161,37.8,38.5), new cjs.Rectangle(167.5,1165.9,37.8,38.6), new cjs.Rectangle(173.5,1170.7,37.9,38.5), new cjs.Rectangle(179.4,1175.6,37.8,38.5), new cjs.Rectangle(185.4,1180.4,37.8,38.5), new cjs.Rectangle(191.4,1185.3,37.8,38.5), new cjs.Rectangle(197.3,1190.1,37.8,38.6), new cjs.Rectangle(203.3,1195,37.8,38.5), new cjs.Rectangle(209.3,1199.9,37.8,38.6), new cjs.Rectangle(215.2,1204.7,37.9,38.5), new cjs.Rectangle(221.2,1209.6,37.8,38.5), new cjs.Rectangle(227.2,1214.4,37.8,38.5), new cjs.Rectangle(233.1,1219.3,37.8,38.5), new cjs.Rectangle(239.1,1224.2,37.8,38.5), new cjs.Rectangle(245.1,1229,37.8,38.5), new cjs.Rectangle(251,1233.9,37.9,38.6), new cjs.Rectangle(257,1238.7,37.9,38.5), new cjs.Rectangle(262.9,1243.6,37.9,38.5), new cjs.Rectangle(268.9,1248.4,37.9,38.5), new cjs.Rectangle(274.9,1253.3,37.8,38.5), new cjs.Rectangle(280.8,1258.2,37.8,38.5), new cjs.Rectangle(286.8,1263,37.8,38.5), new cjs.Rectangle(292.8,1267.9,37.9,38.6), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lepestok1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({rotation:75,x:156,y:210},49).to({rotation:180,x:-46.9,y:350},50).to({rotation:240,x:185,y:474},50).to({rotation:270,x:-83.9,y:599,alpha:0.012},50).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-14.5,-13.5,29,27), new cjs.Rectangle(-11.6,-9.5,29.7,27.8), new cjs.Rectangle(-8.8,-5.6,30.4,28.5), new cjs.Rectangle(-5.9,-1.7,31.1,29.2), new cjs.Rectangle(-3,2.2,31.7,29.9), new cjs.Rectangle(-0.2,6.2,32.3,30.6), new cjs.Rectangle(2.7,10.1,32.9,31.2), new cjs.Rectangle(5.6,14.1,33.5,31.9), new cjs.Rectangle(8.5,18.1,34,32.5), new cjs.Rectangle(11.4,22,34.6,33.1), new cjs.Rectangle(14.3,26,35.1,33.7), new cjs.Rectangle(17.2,30.1,35.6,34.2), new cjs.Rectangle(20.2,34.1,36,34.7), new cjs.Rectangle(23.2,38.1,36.4,35.2), new cjs.Rectangle(26.2,42.2,36.8,35.7), new cjs.Rectangle(29.2,46.3,37.2,36.1), new cjs.Rectangle(32.2,50.3,37.5,36.5), new cjs.Rectangle(35.2,54.4,37.9,36.9), new cjs.Rectangle(38.2,58.5,38.1,37.3), new cjs.Rectangle(41.3,62.6,38.4,37.6), new cjs.Rectangle(44.3,66.7,38.7,38), new cjs.Rectangle(47.4,70.9,38.9,38.3), new cjs.Rectangle(50.6,75.1,39,38.5), new cjs.Rectangle(53.6,79.2,39.2,38.7), new cjs.Rectangle(56.7,83.4,39.3,38.9), new cjs.Rectangle(59.9,87.6,39.4,39.1), new cjs.Rectangle(63,91.8,39.5,39.3), new cjs.Rectangle(66.2,96,39.6,39.4), new cjs.Rectangle(69.4,100.3,39.6,39.4), new cjs.Rectangle(72.6,104.5,39.6,39.5), new cjs.Rectangle(75.8,108.8,39.5,39.6), new cjs.Rectangle(79,113.1,39.5,39.6), new cjs.Rectangle(82.2,117.4,39.3,39.5), new cjs.Rectangle(85.4,121.7,39.2,39.5), new cjs.Rectangle(88.7,126,39.1,39.4), new cjs.Rectangle(92,130.4,38.8,39.3), new cjs.Rectangle(95.3,134.7,38.7,39.2), new cjs.Rectangle(98.6,139,38.4,39), new cjs.Rectangle(101.9,143.4,38.2,38.8), new cjs.Rectangle(105.2,147.8,37.9,38.6), new cjs.Rectangle(108.5,152.3,37.6,38.4), new cjs.Rectangle(112,156.7,37.2,38.1), new cjs.Rectangle(115.3,161.1,36.8,37.8), new cjs.Rectangle(118.7,165.6,36.4,37.4), new cjs.Rectangle(122.1,170,36,37.1), new cjs.Rectangle(125.5,174.5,35.6,36.8), new cjs.Rectangle(128.9,179,35.1,36.3), new cjs.Rectangle(132.3,183.5,34.6,35.9), new cjs.Rectangle(135.8,188,34.1,35.5), new cjs.Rectangle(139.2,192.5,33.6,35), new cjs.Rectangle(135.6,195.7,32.7,34.3), new cjs.Rectangle(131.9,198.8,31.9,33.5), new cjs.Rectangle(128.3,202.1,31,32.6), new cjs.Rectangle(124.8,205.3,30.1,31.8), new cjs.Rectangle(121.2,208.5,29.1,30.9), new cjs.Rectangle(117.7,211.8,28.1,30.1), new cjs.Rectangle(114,215,27.2,29.1), new cjs.Rectangle(109.6,217.5,27.9,29.9), new cjs.Rectangle(105,219.8,28.8,30.8), new cjs.Rectangle(100.5,222.2,29.8,31.6), new cjs.Rectangle(96,224.6,30.8,32.5), new cjs.Rectangle(91.6,227,31.6,33.3), new cjs.Rectangle(87.1,229.4,32.5,34), new cjs.Rectangle(82.5,231.9,33.3,34.8), new cjs.Rectangle(78.1,234.3,34.1,35.4), new cjs.Rectangle(73.7,236.8,34.8,36.1), new cjs.Rectangle(69.3,239.3,35.5,36.6), new cjs.Rectangle(64.9,241.8,36.1,37.1), new cjs.Rectangle(60.6,244.5,36.6,37.6), new cjs.Rectangle(56.2,247,37.2,38.1), new cjs.Rectangle(51.9,249.6,37.6,38.4), new cjs.Rectangle(47.6,252.3,38.1,38.7), new cjs.Rectangle(43.4,255,38.4,39), new cjs.Rectangle(39.2,257.6,38.8,39.2), new cjs.Rectangle(35,260.3,39,39.3), new cjs.Rectangle(30.8,263,39.2,39.5), new cjs.Rectangle(26.6,265.9,39.4,39.5), new cjs.Rectangle(22.5,268.7,39.5,39.6), new cjs.Rectangle(18.5,271.5,39.6,39.5), new cjs.Rectangle(14.4,274.3,39.6,39.4), new cjs.Rectangle(10.3,277.2,39.5,39.3), new cjs.Rectangle(6.4,280.1,39.4,39.1), new cjs.Rectangle(2.4,283,39.3,38.8), new cjs.Rectangle(-1.5,286,39,38.4), new cjs.Rectangle(-5.5,289,38.8,38.1), new cjs.Rectangle(-9.4,292,38.5,37.7), new cjs.Rectangle(-13.3,295,38.1,37.3), new cjs.Rectangle(-17.2,298.1,37.7,36.7), new cjs.Rectangle(-20.9,301.2,37.2,36.2), new cjs.Rectangle(-24.7,304.3,36.7,35.5), new cjs.Rectangle(-28.4,307.4,36.1,34.9), new cjs.Rectangle(-32.3,310.5,35.6,34.2), new cjs.Rectangle(-35.9,313.8,34.9,33.4), new cjs.Rectangle(-39.6,316.9,34.2,32.7), new cjs.Rectangle(-43.3,320.1,33.4,31.8), new cjs.Rectangle(-47,323.4,32.6,30.9), new cjs.Rectangle(-50.6,326.6,31.8,30), new cjs.Rectangle(-54.2,329.9,30.8,29), new cjs.Rectangle(-57.8,333.2,30,28), new cjs.Rectangle(-61.4,336.5,29,27), new cjs.Rectangle(-57.1,338.8,29.5,27.6), new cjs.Rectangle(-52.7,341,30.1,28.1), new cjs.Rectangle(-48.4,343.1,30.6,28.8), new cjs.Rectangle(-44,345.3,31.2,29.3), new cjs.Rectangle(-39.6,347.5,31.7,29.9), new cjs.Rectangle(-35.1,349.7,32.1,30.4), new cjs.Rectangle(-30.8,351.9,32.6,30.9), new cjs.Rectangle(-26.4,354.2,33.1,31.4), new cjs.Rectangle(-22,356.4,33.5,31.9), new cjs.Rectangle(-17.5,358.6,33.9,32.3), new cjs.Rectangle(-13.2,360.9,34.3,32.8), new cjs.Rectangle(-8.8,363.1,34.8,33.3), new cjs.Rectangle(-4.3,365.4,35.2,33.8), new cjs.Rectangle(0.1,367.6,35.6,34.2), new cjs.Rectangle(4.6,370,35.9,34.6), new cjs.Rectangle(9,372.2,36.2,34.9), new cjs.Rectangle(13.6,374.5,36.5,35.4), new cjs.Rectangle(18,376.7,36.9,35.8), new cjs.Rectangle(22.5,379.1,37.2,36.1), new cjs.Rectangle(27,381.4,37.4,36.4), new cjs.Rectangle(31.4,383.8,37.7,36.7), new cjs.Rectangle(36.1,386.1,37.9,37), new cjs.Rectangle(40.5,388.4,38.2,37.3), new cjs.Rectangle(45.1,390.7,38.4,37.6), new cjs.Rectangle(49.6,393.1,38.5,37.8), new cjs.Rectangle(54.1,395.4,38.7,38.1), new cjs.Rectangle(58.7,397.8,38.8,38.3), new cjs.Rectangle(63.3,400.2,39,38.4), new cjs.Rectangle(67.9,402.6,39.1,38.7), new cjs.Rectangle(72.5,405,39.3,38.8), new cjs.Rectangle(77,407.4,39.3,38.9), new cjs.Rectangle(81.6,409.8,39.5,39.1), new cjs.Rectangle(86.3,412.2,39.5,39.2), new cjs.Rectangle(90.9,414.6,39.6,39.3), new cjs.Rectangle(95.5,417,39.6,39.4), new cjs.Rectangle(100.1,419.5,39.6,39.4), new cjs.Rectangle(104.8,422,39.6,39.5), new cjs.Rectangle(109.5,424.4,39.5,39.6), new cjs.Rectangle(114.1,426.9,39.5,39.6), new cjs.Rectangle(118.8,429.4,39.4,39.5), new cjs.Rectangle(123.5,431.9,39.4,39.5), new cjs.Rectangle(128.1,434.3,39.2,39.5), new cjs.Rectangle(132.9,436.9,39.1,39.4), new cjs.Rectangle(137.6,439.4,38.9,39.3), new cjs.Rectangle(142.3,441.9,38.8,39.3), new cjs.Rectangle(147,444.5,38.7,39.2), new cjs.Rectangle(151.8,447,38.4,39), new cjs.Rectangle(156.5,449.5,38.3,38.9), new cjs.Rectangle(161.2,452,38.1,38.8), new cjs.Rectangle(166.1,454.7,37.9,38.6), new cjs.Rectangle(160.7,457.2,37.7,38.4), new cjs.Rectangle(155.5,459.8,37.6,38.3), new cjs.Rectangle(150.1,462.4,37.5,38.3), new cjs.Rectangle(144.9,464.9,37.3,38.2), new cjs.Rectangle(139.5,467.5,37.2,38.1), new cjs.Rectangle(134.2,470,37,37.9), new cjs.Rectangle(128.9,472.6,36.9,37.8), new cjs.Rectangle(123.6,475.1,36.7,37.7), new cjs.Rectangle(118.3,477.7,36.6,37.6), new cjs.Rectangle(113,480.3,36.5,37.5), new cjs.Rectangle(107.8,482.9,36.2,37.3), new cjs.Rectangle(102.4,485.4,36,37.1), new cjs.Rectangle(97.1,487.9,35.9,37), new cjs.Rectangle(91.8,490.6,35.8,36.8), new cjs.Rectangle(86.5,493.1,35.6,36.7), new cjs.Rectangle(81.3,495.8,35.3,36.5), new cjs.Rectangle(76,498.3,35.2,36.4), new cjs.Rectangle(70.7,500.8,35,36.2), new cjs.Rectangle(65.4,503.4,34.8,36.1), new cjs.Rectangle(60.1,506,34.6,35.9), new cjs.Rectangle(54.9,508.7,34.4,35.6), new cjs.Rectangle(49.6,511.2,34.2,35.6), new cjs.Rectangle(44.3,513.8,33.9,35.3), new cjs.Rectangle(39,516.4,33.8,35.1), new cjs.Rectangle(33.7,519,33.6,35), new cjs.Rectangle(28.5,521.6,33.3,34.8), new cjs.Rectangle(23.1,524.2,33.1,34.5), new cjs.Rectangle(17.9,526.8,32.9,34.4), new cjs.Rectangle(12.7,529.4,32.7,34.1), new cjs.Rectangle(7.4,532,32.5,34), new cjs.Rectangle(2.2,534.7,32.2,33.7), new cjs.Rectangle(-3.1,537.3,31.9,33.5), new cjs.Rectangle(-8.3,539.9,31.6,33.3), new cjs.Rectangle(-13.6,542.5,31.4,33), new cjs.Rectangle(-18.8,545,31.2,32.9), new cjs.Rectangle(-24.1,547.7,30.9,32.6), new cjs.Rectangle(-29.3,550.3,30.7,32.4), new cjs.Rectangle(-34.5,553,30.4,32), new cjs.Rectangle(-39.8,555.6,30.1,31.9), new cjs.Rectangle(-45.1,558.2,29.9,31.6), new cjs.Rectangle(-50.3,560.8,29.6,31.4), new cjs.Rectangle(-55.5,563.4,29.3,31.1), new cjs.Rectangle(-60.7,566.1,29,30.8), new cjs.Rectangle(-66,568.6,28.8,30.6), new cjs.Rectangle(-71.2,571.3,28.5,30.4), new cjs.Rectangle(-76.5,574,28.1,30), new cjs.Rectangle(-81.7,576.6,27.9,29.9), new cjs.Rectangle(-86.9,579.2,27.6,29.5), new cjs.Rectangle(-92.2,581.9,27.3,29.3), new cjs.Rectangle(-97.4,584.5,27,29), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lepestok1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lepestok1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:75,x:156,y:210},49).to({rotation:180,x:-46.9,y:350},50).to({rotation:240,x:185,y:474},50).to({rotation:270,x:-83.9,y:599},50).to({x:406.1,y:816.3},50).to({rotation:240,x:13.5,y:1044.3},50).to({x:311.8,y:1287.2,alpha:0.012},50).to({_off:true},1).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-13.5,29,27);
p.frameBounds = [rect, new cjs.Rectangle(-11.6,-9.5,29.7,27.8), new cjs.Rectangle(-8.8,-5.6,30.4,28.5), new cjs.Rectangle(-5.9,-1.7,31.1,29.2), new cjs.Rectangle(-3,2.2,31.7,29.9), new cjs.Rectangle(-0.2,6.2,32.3,30.6), new cjs.Rectangle(2.7,10.1,32.9,31.2), new cjs.Rectangle(5.6,14.1,33.5,31.9), new cjs.Rectangle(8.5,18.1,34,32.5), new cjs.Rectangle(11.4,22,34.6,33.1), new cjs.Rectangle(14.3,26,35.1,33.7), new cjs.Rectangle(17.2,30.1,35.6,34.2), new cjs.Rectangle(20.2,34.1,36,34.7), new cjs.Rectangle(23.2,38.1,36.4,35.2), new cjs.Rectangle(26.2,42.2,36.8,35.7), new cjs.Rectangle(29.2,46.3,37.2,36.1), new cjs.Rectangle(32.2,50.3,37.5,36.5), new cjs.Rectangle(35.2,54.4,37.9,36.9), new cjs.Rectangle(38.2,58.5,38.1,37.3), new cjs.Rectangle(41.3,62.6,38.4,37.6), new cjs.Rectangle(44.3,66.7,38.7,38), new cjs.Rectangle(47.4,70.9,38.9,38.3), new cjs.Rectangle(50.6,75.1,39,38.5), new cjs.Rectangle(53.6,79.2,39.2,38.7), new cjs.Rectangle(56.7,83.4,39.3,38.9), new cjs.Rectangle(59.9,87.6,39.4,39.1), new cjs.Rectangle(63,91.8,39.5,39.3), new cjs.Rectangle(66.2,96,39.6,39.4), new cjs.Rectangle(69.4,100.3,39.6,39.4), new cjs.Rectangle(72.6,104.5,39.6,39.5), new cjs.Rectangle(75.8,108.8,39.5,39.6), new cjs.Rectangle(79,113.1,39.5,39.6), new cjs.Rectangle(82.2,117.4,39.3,39.5), new cjs.Rectangle(85.4,121.7,39.2,39.5), new cjs.Rectangle(88.7,126,39.1,39.4), new cjs.Rectangle(92,130.4,38.8,39.3), new cjs.Rectangle(95.3,134.7,38.7,39.2), new cjs.Rectangle(98.6,139,38.4,39), new cjs.Rectangle(101.9,143.4,38.2,38.8), new cjs.Rectangle(105.2,147.8,37.9,38.6), new cjs.Rectangle(108.5,152.3,37.6,38.4), new cjs.Rectangle(112,156.7,37.2,38.1), new cjs.Rectangle(115.3,161.1,36.8,37.8), new cjs.Rectangle(118.7,165.6,36.4,37.4), new cjs.Rectangle(122.1,170,36,37.1), new cjs.Rectangle(125.5,174.5,35.6,36.8), new cjs.Rectangle(128.9,179,35.1,36.3), new cjs.Rectangle(132.3,183.5,34.6,35.9), new cjs.Rectangle(135.8,188,34.1,35.5), new cjs.Rectangle(139.2,192.5,33.6,35), new cjs.Rectangle(135.6,195.7,32.7,34.3), new cjs.Rectangle(131.9,198.8,31.9,33.5), new cjs.Rectangle(128.3,202.1,31,32.6), new cjs.Rectangle(124.8,205.3,30.1,31.8), new cjs.Rectangle(121.2,208.5,29.1,30.9), new cjs.Rectangle(117.7,211.8,28.1,30.1), new cjs.Rectangle(114,215,27.2,29.1), new cjs.Rectangle(109.6,217.5,27.9,29.9), new cjs.Rectangle(105,219.8,28.8,30.8), new cjs.Rectangle(100.5,222.2,29.8,31.6), new cjs.Rectangle(96,224.6,30.8,32.5), new cjs.Rectangle(91.6,227,31.6,33.3), new cjs.Rectangle(87.1,229.4,32.5,34), new cjs.Rectangle(82.5,231.9,33.3,34.8), new cjs.Rectangle(78.1,234.3,34.1,35.4), new cjs.Rectangle(73.7,236.8,34.8,36.1), new cjs.Rectangle(69.3,239.3,35.5,36.6), new cjs.Rectangle(64.9,241.8,36.1,37.1), new cjs.Rectangle(60.6,244.5,36.6,37.6), new cjs.Rectangle(56.2,247,37.2,38.1), new cjs.Rectangle(51.9,249.6,37.6,38.4), new cjs.Rectangle(47.6,252.3,38.1,38.7), new cjs.Rectangle(43.4,255,38.4,39), new cjs.Rectangle(39.2,257.6,38.8,39.2), new cjs.Rectangle(35,260.3,39,39.3), new cjs.Rectangle(30.8,263,39.2,39.5), new cjs.Rectangle(26.6,265.9,39.4,39.5), new cjs.Rectangle(22.5,268.7,39.5,39.6), new cjs.Rectangle(18.5,271.5,39.6,39.5), new cjs.Rectangle(14.4,274.3,39.6,39.4), new cjs.Rectangle(10.3,277.2,39.5,39.3), new cjs.Rectangle(6.4,280.1,39.4,39.1), new cjs.Rectangle(2.4,283,39.3,38.8), new cjs.Rectangle(-1.5,286,39,38.4), new cjs.Rectangle(-5.5,289,38.8,38.1), new cjs.Rectangle(-9.4,292,38.5,37.7), new cjs.Rectangle(-13.3,295,38.1,37.3), new cjs.Rectangle(-17.2,298.1,37.7,36.7), new cjs.Rectangle(-20.9,301.2,37.2,36.2), new cjs.Rectangle(-24.7,304.3,36.7,35.5), new cjs.Rectangle(-28.4,307.4,36.1,34.9), new cjs.Rectangle(-32.3,310.5,35.6,34.2), new cjs.Rectangle(-35.9,313.8,34.9,33.4), new cjs.Rectangle(-39.6,316.9,34.2,32.7), new cjs.Rectangle(-43.3,320.1,33.4,31.8), new cjs.Rectangle(-47,323.4,32.6,30.9), new cjs.Rectangle(-50.6,326.6,31.8,30), new cjs.Rectangle(-54.2,329.9,30.8,29), new cjs.Rectangle(-57.8,333.2,30,28), new cjs.Rectangle(-61.4,336.5,29,27), new cjs.Rectangle(-57.1,338.8,29.5,27.6), new cjs.Rectangle(-52.7,341,30.1,28.1), new cjs.Rectangle(-48.4,343.1,30.6,28.8), new cjs.Rectangle(-44,345.3,31.2,29.3), new cjs.Rectangle(-39.6,347.5,31.7,29.9), new cjs.Rectangle(-35.1,349.7,32.1,30.4), new cjs.Rectangle(-30.8,351.9,32.6,30.9), new cjs.Rectangle(-26.4,354.2,33.1,31.4), new cjs.Rectangle(-22,356.4,33.5,31.9), new cjs.Rectangle(-17.5,358.6,33.9,32.3), new cjs.Rectangle(-13.2,360.9,34.3,32.8), new cjs.Rectangle(-8.8,363.1,34.8,33.3), new cjs.Rectangle(-4.3,365.4,35.2,33.8), new cjs.Rectangle(0.1,367.6,35.6,34.2), new cjs.Rectangle(4.6,370,35.9,34.6), new cjs.Rectangle(9,372.2,36.2,34.9), new cjs.Rectangle(13.6,374.5,36.5,35.4), new cjs.Rectangle(18,376.7,36.9,35.8), new cjs.Rectangle(22.5,379.1,37.2,36.1), new cjs.Rectangle(27,381.4,37.4,36.4), new cjs.Rectangle(31.4,383.8,37.7,36.7), new cjs.Rectangle(36.1,386.1,37.9,37), new cjs.Rectangle(40.5,388.4,38.2,37.3), new cjs.Rectangle(45.1,390.7,38.4,37.6), new cjs.Rectangle(49.6,393.1,38.5,37.8), new cjs.Rectangle(54.1,395.4,38.7,38.1), new cjs.Rectangle(58.7,397.8,38.8,38.3), new cjs.Rectangle(63.3,400.2,39,38.4), new cjs.Rectangle(67.9,402.6,39.1,38.7), new cjs.Rectangle(72.5,405,39.3,38.8), new cjs.Rectangle(77,407.4,39.3,38.9), new cjs.Rectangle(81.6,409.8,39.5,39.1), new cjs.Rectangle(86.3,412.2,39.5,39.2), new cjs.Rectangle(90.9,414.6,39.6,39.3), new cjs.Rectangle(95.5,417,39.6,39.4), new cjs.Rectangle(100.1,419.5,39.6,39.4), new cjs.Rectangle(104.8,422,39.6,39.5), new cjs.Rectangle(109.5,424.4,39.5,39.6), new cjs.Rectangle(114.1,426.9,39.5,39.6), new cjs.Rectangle(118.8,429.4,39.4,39.5), new cjs.Rectangle(123.5,431.9,39.4,39.5), new cjs.Rectangle(128.1,434.3,39.2,39.5), new cjs.Rectangle(132.9,436.9,39.1,39.4), new cjs.Rectangle(137.6,439.4,38.9,39.3), new cjs.Rectangle(142.3,441.9,38.8,39.3), new cjs.Rectangle(147,444.5,38.7,39.2), new cjs.Rectangle(151.8,447,38.4,39), new cjs.Rectangle(156.5,449.5,38.3,38.9), new cjs.Rectangle(161.2,452,38.1,38.8), new cjs.Rectangle(166.1,454.7,37.9,38.6), new cjs.Rectangle(160.7,457.2,37.7,38.4), new cjs.Rectangle(155.5,459.8,37.6,38.3), new cjs.Rectangle(150.1,462.4,37.5,38.3), new cjs.Rectangle(144.9,464.9,37.3,38.2), new cjs.Rectangle(139.5,467.5,37.2,38.1), new cjs.Rectangle(134.2,470,37,37.9), new cjs.Rectangle(128.9,472.6,36.9,37.8), new cjs.Rectangle(123.6,475.1,36.7,37.7), new cjs.Rectangle(118.3,477.7,36.6,37.6), new cjs.Rectangle(113,480.3,36.5,37.5), new cjs.Rectangle(107.8,482.9,36.2,37.3), new cjs.Rectangle(102.4,485.4,36,37.1), new cjs.Rectangle(97.1,487.9,35.9,37), new cjs.Rectangle(91.8,490.6,35.8,36.8), new cjs.Rectangle(86.5,493.1,35.6,36.7), new cjs.Rectangle(81.3,495.8,35.3,36.5), new cjs.Rectangle(76,498.3,35.2,36.4), new cjs.Rectangle(70.7,500.8,35,36.2), new cjs.Rectangle(65.4,503.4,34.8,36.1), new cjs.Rectangle(60.1,506,34.6,35.9), new cjs.Rectangle(54.9,508.7,34.4,35.6), new cjs.Rectangle(49.6,511.2,34.2,35.6), new cjs.Rectangle(44.3,513.8,33.9,35.3), new cjs.Rectangle(39,516.4,33.8,35.1), new cjs.Rectangle(33.7,519,33.6,35), new cjs.Rectangle(28.5,521.6,33.3,34.8), new cjs.Rectangle(23.1,524.2,33.1,34.5), new cjs.Rectangle(17.9,526.8,32.9,34.4), new cjs.Rectangle(12.7,529.4,32.7,34.1), new cjs.Rectangle(7.4,532,32.5,34), new cjs.Rectangle(2.2,534.7,32.2,33.7), new cjs.Rectangle(-3.1,537.3,31.9,33.5), new cjs.Rectangle(-8.3,539.9,31.6,33.3), new cjs.Rectangle(-13.6,542.5,31.4,33), new cjs.Rectangle(-18.8,545,31.2,32.9), new cjs.Rectangle(-24.1,547.7,30.9,32.6), new cjs.Rectangle(-29.3,550.3,30.7,32.4), new cjs.Rectangle(-34.5,553,30.4,32), new cjs.Rectangle(-39.8,555.6,30.1,31.9), new cjs.Rectangle(-45.1,558.2,29.9,31.6), new cjs.Rectangle(-50.3,560.8,29.6,31.4), new cjs.Rectangle(-55.5,563.4,29.3,31.1), new cjs.Rectangle(-60.7,566.1,29,30.8), new cjs.Rectangle(-66,568.6,28.8,30.6), new cjs.Rectangle(-71.2,571.3,28.5,30.4), new cjs.Rectangle(-76.5,574,28.1,30), new cjs.Rectangle(-81.7,576.6,27.9,29.9), new cjs.Rectangle(-86.9,579.2,27.6,29.5), new cjs.Rectangle(-92.2,581.9,27.3,29.3), new cjs.Rectangle(-97.4,584.5,27,29), new cjs.Rectangle(-87.7,588.8,27,29), new cjs.Rectangle(-77.9,593.1,27,29), new cjs.Rectangle(-68.1,597.5,27,29), new cjs.Rectangle(-58.3,601.8,27,29), new cjs.Rectangle(-48.5,606.2,27,29), new cjs.Rectangle(-38.7,610.5,27,29), new cjs.Rectangle(-28.9,614.8,27,29), new cjs.Rectangle(-19.1,619.2,27,29), new cjs.Rectangle(-9.3,623.5,27,29), new cjs.Rectangle(0.5,627.9,27,29), new cjs.Rectangle(10.3,632.2,27,29), new cjs.Rectangle(20.1,636.6,27,29), new cjs.Rectangle(29.9,640.9,27,29), new cjs.Rectangle(39.7,645.3,27,29), new cjs.Rectangle(49.5,649.6,27,29), new cjs.Rectangle(59.3,654,27,29), new cjs.Rectangle(69.1,658.3,27,29), new cjs.Rectangle(78.9,662.7,27,29), new cjs.Rectangle(88.7,667,27,29), new cjs.Rectangle(98.5,671.3,27,29), new cjs.Rectangle(108.3,675.7,27,29), new cjs.Rectangle(118.1,680,27,29), new cjs.Rectangle(127.9,684.4,27,29), new cjs.Rectangle(137.7,688.7,27,29), new cjs.Rectangle(147.5,693.1,27,29), new cjs.Rectangle(157.3,697.4,27,29), new cjs.Rectangle(167.1,701.8,27,29), new cjs.Rectangle(176.9,706.1,27,29), new cjs.Rectangle(186.7,710.5,27,29), new cjs.Rectangle(196.5,714.8,27,29), new cjs.Rectangle(206.3,719.2,27,29), new cjs.Rectangle(216.1,723.5,27,29), new cjs.Rectangle(225.9,727.8,27,29), new cjs.Rectangle(235.7,732.2,27,29), new cjs.Rectangle(245.5,736.5,27,29), new cjs.Rectangle(255.3,740.9,27,29), new cjs.Rectangle(265.1,745.2,27,29), new cjs.Rectangle(274.9,749.6,27,29), new cjs.Rectangle(284.7,753.9,27,29), new cjs.Rectangle(294.5,758.3,27,29), new cjs.Rectangle(304.3,762.6,27,29), new cjs.Rectangle(314.1,767,27,29), new cjs.Rectangle(323.9,771.3,27,29), new cjs.Rectangle(333.7,775.7,27,29), new cjs.Rectangle(343.5,780,27,29), new cjs.Rectangle(353.3,784.3,27,29), new cjs.Rectangle(363.1,788.7,27,29), new cjs.Rectangle(372.9,793,27,29), new cjs.Rectangle(382.7,797.4,27,29), new cjs.Rectangle(392.6,801.8,27,29), new cjs.Rectangle(384.6,806.2,27.3,29.3), new cjs.Rectangle(376.7,810.6,27.6,29.5), new cjs.Rectangle(368.7,815,27.9,29.9), new cjs.Rectangle(360.6,819.5,28.1,30), new cjs.Rectangle(352.7,823.9,28.5,30.4), new cjs.Rectangle(344.7,828.3,28.8,30.6), new cjs.Rectangle(336.7,832.8,29,30.8), new cjs.Rectangle(328.7,837.2,29.3,31.1), new cjs.Rectangle(320.7,841.6,29.6,31.4), new cjs.Rectangle(312.6,846,29.9,31.6), new cjs.Rectangle(304.7,850.5,30.1,31.8), new cjs.Rectangle(296.7,854.9,30.4,32.1), new cjs.Rectangle(288.8,859.4,30.6,32.4), new cjs.Rectangle(280.7,863.7,30.9,32.6), new cjs.Rectangle(272.7,868.2,31.2,32.8), new cjs.Rectangle(264.7,872.7,31.4,33.1), new cjs.Rectangle(256.8,877.1,31.6,33.3), new cjs.Rectangle(248.9,881.6,31.9,33.5), new cjs.Rectangle(240.8,886.1,32.1,33.7), new cjs.Rectangle(232.8,890.5,32.4,33.9), new cjs.Rectangle(224.9,894.9,32.7,34.1), new cjs.Rectangle(217,899.4,32.9,34.4), new cjs.Rectangle(208.9,903.9,33.1,34.5), new cjs.Rectangle(201,908.3,33.3,34.8), new cjs.Rectangle(193.1,912.7,33.5,35), new cjs.Rectangle(185.1,917.2,33.8,35.1), new cjs.Rectangle(177.2,921.7,33.9,35.3), new cjs.Rectangle(169.2,926.2,34.2,35.6), new cjs.Rectangle(161.3,930.7,34.3,35.6), new cjs.Rectangle(153.3,935.1,34.6,35.9), new cjs.Rectangle(145.4,939.6,34.8,36.1), new cjs.Rectangle(137.4,944,34.9,36.2), new cjs.Rectangle(129.5,948.5,35.2,36.4), new cjs.Rectangle(121.5,953.1,35.3,36.5), new cjs.Rectangle(113.5,957.5,35.6,36.8), new cjs.Rectangle(105.6,962,35.8,36.8), new cjs.Rectangle(97.6,966.4,35.9,37), new cjs.Rectangle(89.8,971,36.1,37.1), new cjs.Rectangle(81.8,975.5,36.2,37.3), new cjs.Rectangle(73.8,979.9,36.5,37.5), new cjs.Rectangle(65.9,984.4,36.6,37.6), new cjs.Rectangle(57.9,988.8,36.7,37.7), new cjs.Rectangle(50.1,993.4,36.9,37.8), new cjs.Rectangle(42.1,998,37,37.9), new cjs.Rectangle(34.2,1002.4,37.2,38.1), new cjs.Rectangle(26.3,1006.9,37.3,38.1), new cjs.Rectangle(18.3,1011.4,37.5,38.3), new cjs.Rectangle(10.5,1015.9,37.6,38.4), new cjs.Rectangle(2.5,1020.4,37.7,38.4), new cjs.Rectangle(-5.4,1025,37.9,38.6), new cjs.Rectangle(0.5,1029.8,37.8,38.5), new cjs.Rectangle(6.5,1034.7,37.8,38.5), new cjs.Rectangle(12.4,1039.5,37.9,38.5), new cjs.Rectangle(18.4,1044.4,37.9,38.5), new cjs.Rectangle(24.4,1049.3,37.9,38.5), new cjs.Rectangle(30.3,1054.1,37.9,38.6), new cjs.Rectangle(36.3,1059,37.8,38.5), new cjs.Rectangle(42.2,1063.8,37.8,38.5), new cjs.Rectangle(48.2,1068.7,37.8,38.5), new cjs.Rectangle(54.2,1073.6,37.9,38.5), new cjs.Rectangle(60.1,1078.4,37.9,38.5), new cjs.Rectangle(66.1,1083.3,37.9,38.5), new cjs.Rectangle(72.1,1088.1,37.9,38.6), new cjs.Rectangle(78,1093,37.8,38.5), new cjs.Rectangle(84,1097.8,37.8,38.5), new cjs.Rectangle(90,1102.7,37.8,38.5), new cjs.Rectangle(95.9,1107.6,37.8,38.5), new cjs.Rectangle(101.9,1112.4,37.8,38.5), new cjs.Rectangle(107.9,1117.3,37.8,38.5), new cjs.Rectangle(113.8,1122.1,37.9,38.6), new cjs.Rectangle(119.8,1127,37.8,38.5), new cjs.Rectangle(125.8,1131.9,37.8,38.6), new cjs.Rectangle(131.7,1136.7,37.9,38.5), new cjs.Rectangle(137.7,1141.6,37.8,38.5), new cjs.Rectangle(143.7,1146.4,37.8,38.5), new cjs.Rectangle(149.6,1151.3,37.8,38.5), new cjs.Rectangle(155.6,1156.1,37.8,38.6), new cjs.Rectangle(161.5,1161,37.8,38.5), new cjs.Rectangle(167.5,1165.9,37.8,38.6), new cjs.Rectangle(173.5,1170.7,37.9,38.5), new cjs.Rectangle(179.4,1175.6,37.8,38.5), new cjs.Rectangle(185.4,1180.4,37.8,38.5), new cjs.Rectangle(191.4,1185.3,37.8,38.5), new cjs.Rectangle(197.3,1190.1,37.8,38.6), new cjs.Rectangle(203.3,1195,37.8,38.5), new cjs.Rectangle(209.3,1199.9,37.8,38.6), new cjs.Rectangle(215.2,1204.7,37.9,38.5), new cjs.Rectangle(221.2,1209.6,37.8,38.5), new cjs.Rectangle(227.2,1214.4,37.8,38.5), new cjs.Rectangle(233.1,1219.3,37.8,38.5), new cjs.Rectangle(239.1,1224.2,37.8,38.5), new cjs.Rectangle(245.1,1229,37.8,38.5), new cjs.Rectangle(251,1233.9,37.9,38.6), new cjs.Rectangle(257,1238.7,37.9,38.5), new cjs.Rectangle(262.9,1243.6,37.9,38.5), new cjs.Rectangle(268.9,1248.4,37.9,38.5), new cjs.Rectangle(274.9,1253.3,37.8,38.5), new cjs.Rectangle(280.8,1258.2,37.8,38.5), new cjs.Rectangle(286.8,1263,37.8,38.5), new cjs.Rectangle(292.8,1267.9,37.9,38.6), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leaf4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l1_mc();
	this.instance.setTransform(0,0,1,1,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({rotation:15,x:249.3,y:239.8},30).to({rotation:-15,x:224.9,y:280.4},12).to({rotation:0,x:-5.4,y:425.4},33).to({rotation:15,x:43.4,y:464.7},11).to({rotation:0,x:264.2,y:657},32).to({rotation:-15,x:126,y:728.8,alpha:0.012},11).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-39.5,-31.5,79.1,63), new cjs.Rectangle(-31.2,-23.1,79.1,62.4), new cjs.Rectangle(-22.9,-14.9,79.2,61.9), new cjs.Rectangle(-14.7,-6.7,79.3,61.5), new cjs.Rectangle(-6.4,1.4,79.4,61.1), new cjs.Rectangle(1.9,9.7,79.4,60.6), new cjs.Rectangle(10.1,17.9,79.5,60.2), new cjs.Rectangle(18.4,26.1,79.5,59.7), new cjs.Rectangle(26.7,34.4,79.6,59.2), new cjs.Rectangle(35,42.6,79.6,58.8), new cjs.Rectangle(43.3,50.8,79.7,58.3), new cjs.Rectangle(51.6,59,79.7,57.8), new cjs.Rectangle(59.9,67.3,79.7,57.3), new cjs.Rectangle(68.2,75.5,79.7,56.8), new cjs.Rectangle(76.4,83.7,79.8,56.3), new cjs.Rectangle(84.8,91.9,79.8,55.8), new cjs.Rectangle(93.1,100.2,79.8,55.3), new cjs.Rectangle(101.4,108.4,79.8,54.8), new cjs.Rectangle(109.7,116.7,79.8,54.3), new cjs.Rectangle(118,124.9,79.7,54), new cjs.Rectangle(126.3,133.1,79.7,53.5), new cjs.Rectangle(134.7,141.3,79.7,52.9), new cjs.Rectangle(143,149.6,79.7,52.4), new cjs.Rectangle(151.3,157.9,79.6,51.9), new cjs.Rectangle(159.6,166.1,79.6,51.4), new cjs.Rectangle(168,174.4,79.5,50.8), new cjs.Rectangle(176.3,182.7,79.4,50.3), new cjs.Rectangle(184.6,190.9,79.4,49.8), new cjs.Rectangle(193,199.1,79.3,49.2), new cjs.Rectangle(201.3,207.4,79.3,48.7), new cjs.Rectangle(209.6,215.7,79.3,48.2), new cjs.Rectangle(207.9,220.5,78.7,45.3), new cjs.Rectangle(206.2,225.4,78.1,42.4), new cjs.Rectangle(204.6,230.2,77.3,39.4), new cjs.Rectangle(203,235.1,76.3,36.3), new cjs.Rectangle(201.5,240.1,75.2,33.2), new cjs.Rectangle(200.1,245.1,74,30), new cjs.Rectangle(197.4,247,75.2,32.9), new cjs.Rectangle(194.9,248.8,76.2,36.1), new cjs.Rectangle(192.4,250.7,77.2,39.2), new cjs.Rectangle(190,252.5,77.9,42.1), new cjs.Rectangle(187.6,254.4,78.7,45.1), new cjs.Rectangle(185.2,256.3,79.3,48.2), new cjs.Rectangle(178.3,261,79.1,47.6), new cjs.Rectangle(171.4,265.7,79,47.1), new cjs.Rectangle(164.5,270.4,78.9,46.4), new cjs.Rectangle(157.6,275,78.8,45.9), new cjs.Rectangle(150.7,279.7,78.7,45.4), new cjs.Rectangle(143.7,284.3,78.6,45), new cjs.Rectangle(136.7,288.9,78.5,44.5), new cjs.Rectangle(129.9,293.6,78.4,43.8), new cjs.Rectangle(123,298.3,78.2,43.3), new cjs.Rectangle(116,303,78.1,42.8), new cjs.Rectangle(109.2,307.6,77.9,42.1), new cjs.Rectangle(102.2,312.2,77.9,41.8), new cjs.Rectangle(95.3,316.9,77.8,41.2), new cjs.Rectangle(88.4,321.6,77.6,40.6), new cjs.Rectangle(81.5,326.3,77.5,40.1), new cjs.Rectangle(74.6,331,77.3,39.4), new cjs.Rectangle(67.7,335.5,77.1,39.1), new cjs.Rectangle(60.8,340.3,77,38.5), new cjs.Rectangle(53.9,344.9,76.8,37.9), new cjs.Rectangle(47,349.6,76.6,37.3), new cjs.Rectangle(40.2,354.3,76.4,36.7), new cjs.Rectangle(33.2,359,76.2,36.1), new cjs.Rectangle(26.3,363.6,76.1,35.7), new cjs.Rectangle(19.5,368.2,75.9,35.1), new cjs.Rectangle(12.6,373,75.7,34.5), new cjs.Rectangle(5.7,377.7,75.5,33.9), new cjs.Rectangle(-1.1,382.4,75.3,33.3), new cjs.Rectangle(-8,387,75.1,32.9), new cjs.Rectangle(-14.9,391.7,74.9,32.3), new cjs.Rectangle(-21.7,396.3,74.6,31.6), new cjs.Rectangle(-28.6,401.1,74.4,31), new cjs.Rectangle(-35.4,405.8,74.2,30.4), new cjs.Rectangle(-42.4,410.4,74,30), new cjs.Rectangle(-38.3,413.1,74.6,31.6), new cjs.Rectangle(-34.2,415.9,75.3,33.3), new cjs.Rectangle(-30.1,418.5,75.9,35.1), new cjs.Rectangle(-25.9,421.3,76.4,36.7), new cjs.Rectangle(-21.8,424,77,38.5), new cjs.Rectangle(-17.6,426.8,77.5,40.1), new cjs.Rectangle(-13.4,429.5,77.9,41.8), new cjs.Rectangle(-9.1,432.3,78.3,43.3), new cjs.Rectangle(-4.9,435,78.6,45), new cjs.Rectangle(-0.6,437.9,78.9,46.4), new cjs.Rectangle(3.7,440.6,79.3,48.2), new cjs.Rectangle(10.8,446.9,79.1,47.5), new cjs.Rectangle(17.7,453.1,79,47), new cjs.Rectangle(24.7,459.5,78.9,46.4), new cjs.Rectangle(31.7,465.8,78.8,45.9), new cjs.Rectangle(38.6,472,78.7,45.3), new cjs.Rectangle(45.6,478.3,78.6,44.7), new cjs.Rectangle(52.5,484.7,78.5,44.1), new cjs.Rectangle(59.4,490.9,78.4,43.6), new cjs.Rectangle(66.4,497.1,78.3,43.3), new cjs.Rectangle(73.3,503.4,78.1,42.7), new cjs.Rectangle(80.3,509.7,78,42.1), new cjs.Rectangle(87.3,516,77.9,41.5), new cjs.Rectangle(94.3,522.4,77.7,40.9), new cjs.Rectangle(101.3,528.7,77.6,40.4), new cjs.Rectangle(108.3,534.9,77.4,39.8), new cjs.Rectangle(115.2,541.3,77.1,39.1), new cjs.Rectangle(122.2,547.5,77.1,38.8), new cjs.Rectangle(129.2,553.8,76.9,38.2), new cjs.Rectangle(136.1,560.1,76.7,37.6), new cjs.Rectangle(143.1,566.4,76.6,37), new cjs.Rectangle(150.2,572.7,76.4,36.3), new cjs.Rectangle(157.1,579.1,76.2,35.8), new cjs.Rectangle(164.2,585.3,75.9,35.2), new cjs.Rectangle(171.2,591.6,75.7,34.5), new cjs.Rectangle(178.2,597.8,75.5,34.2), new cjs.Rectangle(185.1,604.2,75.4,33.5), new cjs.Rectangle(192.2,610.5,75.2,32.9), new cjs.Rectangle(199.1,616.8,74.9,32.3), new cjs.Rectangle(206.2,623.1,74.6,31.6), new cjs.Rectangle(213.3,629.5,74.4,31), new cjs.Rectangle(220.2,635.8,74.2,30.4), new cjs.Rectangle(227.2,642,74,30), new cjs.Rectangle(214.3,647.8,74.6,31.6), new cjs.Rectangle(201.5,653.5,75.3,33.3), new cjs.Rectangle(188.5,659,75.9,35.1), new cjs.Rectangle(175.7,664.8,76.4,36.7), new cjs.Rectangle(162.9,670.5,77,38.5), new cjs.Rectangle(150.1,676.2,77.5,40.1), new cjs.Rectangle(137.4,681.8,77.9,41.8), new cjs.Rectangle(124.6,687.6,78.3,43.3), new cjs.Rectangle(111.9,693.3,78.6,45), new cjs.Rectangle(99.1,699.1,78.9,46.5), new cjs.Rectangle(86.4,704.7,79.3,48.2), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leaf3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l1_mc();
	this.instance.setTransform(0,0,1,1,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({rotation:15,x:249.3,y:239.8},30).to({rotation:-15,x:224.9,y:280.4},12).to({rotation:0,x:-5.4,y:425.4},33).to({rotation:15,x:43.4,y:464.7},11).to({rotation:0,x:264.2,y:657},32).to({rotation:-15,x:126,y:728.8,alpha:0.012},11).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-39.5,-31.5,79.1,63), new cjs.Rectangle(-31.2,-23.1,79.1,62.4), new cjs.Rectangle(-22.9,-14.9,79.2,61.9), new cjs.Rectangle(-14.7,-6.7,79.3,61.5), new cjs.Rectangle(-6.4,1.4,79.4,61.1), new cjs.Rectangle(1.9,9.7,79.4,60.6), new cjs.Rectangle(10.1,17.9,79.5,60.2), new cjs.Rectangle(18.4,26.1,79.5,59.7), new cjs.Rectangle(26.7,34.4,79.6,59.2), new cjs.Rectangle(35,42.6,79.6,58.8), new cjs.Rectangle(43.3,50.8,79.7,58.3), new cjs.Rectangle(51.6,59,79.7,57.8), new cjs.Rectangle(59.9,67.3,79.7,57.3), new cjs.Rectangle(68.2,75.5,79.7,56.8), new cjs.Rectangle(76.4,83.7,79.8,56.3), new cjs.Rectangle(84.8,91.9,79.8,55.8), new cjs.Rectangle(93.1,100.2,79.8,55.3), new cjs.Rectangle(101.4,108.4,79.8,54.8), new cjs.Rectangle(109.7,116.7,79.8,54.3), new cjs.Rectangle(118,124.9,79.7,54), new cjs.Rectangle(126.3,133.1,79.7,53.5), new cjs.Rectangle(134.7,141.3,79.7,52.9), new cjs.Rectangle(143,149.6,79.7,52.4), new cjs.Rectangle(151.3,157.9,79.6,51.9), new cjs.Rectangle(159.6,166.1,79.6,51.4), new cjs.Rectangle(168,174.4,79.5,50.8), new cjs.Rectangle(176.3,182.7,79.4,50.3), new cjs.Rectangle(184.6,190.9,79.4,49.8), new cjs.Rectangle(193,199.1,79.3,49.2), new cjs.Rectangle(201.3,207.4,79.3,48.7), new cjs.Rectangle(209.6,215.7,79.3,48.2), new cjs.Rectangle(207.9,220.5,78.7,45.3), new cjs.Rectangle(206.2,225.4,78.1,42.4), new cjs.Rectangle(204.6,230.2,77.3,39.4), new cjs.Rectangle(203,235.1,76.3,36.3), new cjs.Rectangle(201.5,240.1,75.2,33.2), new cjs.Rectangle(200.1,245.1,74,30), new cjs.Rectangle(197.4,247,75.2,32.9), new cjs.Rectangle(194.9,248.8,76.2,36.1), new cjs.Rectangle(192.4,250.7,77.2,39.2), new cjs.Rectangle(190,252.5,77.9,42.1), new cjs.Rectangle(187.6,254.4,78.7,45.1), new cjs.Rectangle(185.2,256.3,79.3,48.2), new cjs.Rectangle(178.3,261,79.1,47.6), new cjs.Rectangle(171.4,265.7,79,47.1), new cjs.Rectangle(164.5,270.4,78.9,46.4), new cjs.Rectangle(157.6,275,78.8,45.9), new cjs.Rectangle(150.7,279.7,78.7,45.4), new cjs.Rectangle(143.7,284.3,78.6,45), new cjs.Rectangle(136.7,288.9,78.5,44.5), new cjs.Rectangle(129.9,293.6,78.4,43.8), new cjs.Rectangle(123,298.3,78.2,43.3), new cjs.Rectangle(116,303,78.1,42.8), new cjs.Rectangle(109.2,307.6,77.9,42.1), new cjs.Rectangle(102.2,312.2,77.9,41.8), new cjs.Rectangle(95.3,316.9,77.8,41.2), new cjs.Rectangle(88.4,321.6,77.6,40.6), new cjs.Rectangle(81.5,326.3,77.5,40.1), new cjs.Rectangle(74.6,331,77.3,39.4), new cjs.Rectangle(67.7,335.5,77.1,39.1), new cjs.Rectangle(60.8,340.3,77,38.5), new cjs.Rectangle(53.9,344.9,76.8,37.9), new cjs.Rectangle(47,349.6,76.6,37.3), new cjs.Rectangle(40.2,354.3,76.4,36.7), new cjs.Rectangle(33.2,359,76.2,36.1), new cjs.Rectangle(26.3,363.6,76.1,35.7), new cjs.Rectangle(19.5,368.2,75.9,35.1), new cjs.Rectangle(12.6,373,75.7,34.5), new cjs.Rectangle(5.7,377.7,75.5,33.9), new cjs.Rectangle(-1.1,382.4,75.3,33.3), new cjs.Rectangle(-8,387,75.1,32.9), new cjs.Rectangle(-14.9,391.7,74.9,32.3), new cjs.Rectangle(-21.7,396.3,74.6,31.6), new cjs.Rectangle(-28.6,401.1,74.4,31), new cjs.Rectangle(-35.4,405.8,74.2,30.4), new cjs.Rectangle(-42.4,410.4,74,30), new cjs.Rectangle(-38.3,413.1,74.6,31.6), new cjs.Rectangle(-34.2,415.9,75.3,33.3), new cjs.Rectangle(-30.1,418.5,75.9,35.1), new cjs.Rectangle(-25.9,421.3,76.4,36.7), new cjs.Rectangle(-21.8,424,77,38.5), new cjs.Rectangle(-17.6,426.8,77.5,40.1), new cjs.Rectangle(-13.4,429.5,77.9,41.8), new cjs.Rectangle(-9.1,432.3,78.3,43.3), new cjs.Rectangle(-4.9,435,78.6,45), new cjs.Rectangle(-0.6,437.9,78.9,46.4), new cjs.Rectangle(3.7,440.6,79.3,48.2), new cjs.Rectangle(10.8,446.9,79.1,47.5), new cjs.Rectangle(17.7,453.1,79,47), new cjs.Rectangle(24.7,459.5,78.9,46.4), new cjs.Rectangle(31.7,465.8,78.8,45.9), new cjs.Rectangle(38.6,472,78.7,45.3), new cjs.Rectangle(45.6,478.3,78.6,44.7), new cjs.Rectangle(52.5,484.7,78.5,44.1), new cjs.Rectangle(59.4,490.9,78.4,43.6), new cjs.Rectangle(66.4,497.1,78.3,43.3), new cjs.Rectangle(73.3,503.4,78.1,42.7), new cjs.Rectangle(80.3,509.7,78,42.1), new cjs.Rectangle(87.3,516,77.9,41.5), new cjs.Rectangle(94.3,522.4,77.7,40.9), new cjs.Rectangle(101.3,528.7,77.6,40.4), new cjs.Rectangle(108.3,534.9,77.4,39.8), new cjs.Rectangle(115.2,541.3,77.1,39.1), new cjs.Rectangle(122.2,547.5,77.1,38.8), new cjs.Rectangle(129.2,553.8,76.9,38.2), new cjs.Rectangle(136.1,560.1,76.7,37.6), new cjs.Rectangle(143.1,566.4,76.6,37), new cjs.Rectangle(150.2,572.7,76.4,36.3), new cjs.Rectangle(157.1,579.1,76.2,35.8), new cjs.Rectangle(164.2,585.3,75.9,35.2), new cjs.Rectangle(171.2,591.6,75.7,34.5), new cjs.Rectangle(178.2,597.8,75.5,34.2), new cjs.Rectangle(185.1,604.2,75.4,33.5), new cjs.Rectangle(192.2,610.5,75.2,32.9), new cjs.Rectangle(199.1,616.8,74.9,32.3), new cjs.Rectangle(206.2,623.1,74.6,31.6), new cjs.Rectangle(213.3,629.5,74.4,31), new cjs.Rectangle(220.2,635.8,74.2,30.4), new cjs.Rectangle(227.2,642,74,30), new cjs.Rectangle(214.3,647.8,74.6,31.6), new cjs.Rectangle(201.5,653.5,75.3,33.3), new cjs.Rectangle(188.5,659,75.9,35.1), new cjs.Rectangle(175.7,664.8,76.4,36.7), new cjs.Rectangle(162.9,670.5,77,38.5), new cjs.Rectangle(150.1,676.2,77.5,40.1), new cjs.Rectangle(137.4,681.8,77.9,41.8), new cjs.Rectangle(124.6,687.6,78.3,43.3), new cjs.Rectangle(111.9,693.3,78.6,45), new cjs.Rectangle(99.1,699.1,78.9,46.5), new cjs.Rectangle(86.4,704.7,79.3,48.2), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leaf2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l1_mc();
	this.instance.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:249.3,y:239.8},30).to({rotation:-15,x:224.9,y:280.4},12).to({rotation:0,x:-5.4,y:425.4},33).to({rotation:15,x:43.4,y:464.7},11).to({rotation:0,x:264.2,y:657},32).to({rotation:-15,x:126,y:728.8,alpha:0.012},11).to({_off:true},1).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-31.5,79.1,63);
p.frameBounds = [rect, new cjs.Rectangle(-31.2,-23.1,79.1,62.4), new cjs.Rectangle(-22.9,-14.9,79.2,61.9), new cjs.Rectangle(-14.7,-6.7,79.3,61.5), new cjs.Rectangle(-6.4,1.4,79.4,61.1), new cjs.Rectangle(1.9,9.7,79.4,60.6), new cjs.Rectangle(10.1,17.9,79.5,60.2), new cjs.Rectangle(18.4,26.1,79.5,59.7), new cjs.Rectangle(26.7,34.4,79.6,59.2), new cjs.Rectangle(35,42.6,79.6,58.8), new cjs.Rectangle(43.3,50.8,79.7,58.3), new cjs.Rectangle(51.6,59,79.7,57.8), new cjs.Rectangle(59.9,67.3,79.7,57.3), new cjs.Rectangle(68.2,75.5,79.7,56.8), new cjs.Rectangle(76.4,83.7,79.8,56.3), new cjs.Rectangle(84.8,91.9,79.8,55.8), new cjs.Rectangle(93.1,100.2,79.8,55.3), new cjs.Rectangle(101.4,108.4,79.8,54.8), new cjs.Rectangle(109.7,116.7,79.8,54.3), new cjs.Rectangle(118,124.9,79.7,54), new cjs.Rectangle(126.3,133.1,79.7,53.5), new cjs.Rectangle(134.7,141.3,79.7,52.9), new cjs.Rectangle(143,149.6,79.7,52.4), new cjs.Rectangle(151.3,157.9,79.6,51.9), new cjs.Rectangle(159.6,166.1,79.6,51.4), new cjs.Rectangle(168,174.4,79.5,50.8), new cjs.Rectangle(176.3,182.7,79.4,50.3), new cjs.Rectangle(184.6,190.9,79.4,49.8), new cjs.Rectangle(193,199.1,79.3,49.2), new cjs.Rectangle(201.3,207.4,79.3,48.7), new cjs.Rectangle(209.6,215.7,79.3,48.2), new cjs.Rectangle(207.9,220.5,78.7,45.3), new cjs.Rectangle(206.2,225.4,78.1,42.4), new cjs.Rectangle(204.6,230.2,77.3,39.4), new cjs.Rectangle(203,235.1,76.3,36.3), new cjs.Rectangle(201.5,240.1,75.2,33.2), new cjs.Rectangle(200.1,245.1,74,30), new cjs.Rectangle(197.4,247,75.2,32.9), new cjs.Rectangle(194.9,248.8,76.2,36.1), new cjs.Rectangle(192.4,250.7,77.2,39.2), new cjs.Rectangle(190,252.5,77.9,42.1), new cjs.Rectangle(187.6,254.4,78.7,45.1), new cjs.Rectangle(185.2,256.3,79.3,48.2), new cjs.Rectangle(178.3,261,79.1,47.6), new cjs.Rectangle(171.4,265.7,79,47.1), new cjs.Rectangle(164.5,270.4,78.9,46.4), new cjs.Rectangle(157.6,275,78.8,45.9), new cjs.Rectangle(150.7,279.7,78.7,45.4), new cjs.Rectangle(143.7,284.3,78.6,45), new cjs.Rectangle(136.7,288.9,78.5,44.5), new cjs.Rectangle(129.9,293.6,78.4,43.8), new cjs.Rectangle(123,298.3,78.2,43.3), new cjs.Rectangle(116,303,78.1,42.8), new cjs.Rectangle(109.2,307.6,77.9,42.1), new cjs.Rectangle(102.2,312.2,77.9,41.8), new cjs.Rectangle(95.3,316.9,77.8,41.2), new cjs.Rectangle(88.4,321.6,77.6,40.6), new cjs.Rectangle(81.5,326.3,77.5,40.1), new cjs.Rectangle(74.6,331,77.3,39.4), new cjs.Rectangle(67.7,335.5,77.1,39.1), new cjs.Rectangle(60.8,340.3,77,38.5), new cjs.Rectangle(53.9,344.9,76.8,37.9), new cjs.Rectangle(47,349.6,76.6,37.3), new cjs.Rectangle(40.2,354.3,76.4,36.7), new cjs.Rectangle(33.2,359,76.2,36.1), new cjs.Rectangle(26.3,363.6,76.1,35.7), new cjs.Rectangle(19.5,368.2,75.9,35.1), new cjs.Rectangle(12.6,373,75.7,34.5), new cjs.Rectangle(5.7,377.7,75.5,33.9), new cjs.Rectangle(-1.1,382.4,75.3,33.3), new cjs.Rectangle(-8,387,75.1,32.9), new cjs.Rectangle(-14.9,391.7,74.9,32.3), new cjs.Rectangle(-21.7,396.3,74.6,31.6), new cjs.Rectangle(-28.6,401.1,74.4,31), new cjs.Rectangle(-35.4,405.8,74.2,30.4), new cjs.Rectangle(-42.4,410.4,74,30), new cjs.Rectangle(-38.3,413.1,74.6,31.6), new cjs.Rectangle(-34.2,415.9,75.3,33.3), new cjs.Rectangle(-30.1,418.5,75.9,35.1), new cjs.Rectangle(-25.9,421.3,76.4,36.7), new cjs.Rectangle(-21.8,424,77,38.5), new cjs.Rectangle(-17.6,426.8,77.5,40.1), new cjs.Rectangle(-13.4,429.5,77.9,41.8), new cjs.Rectangle(-9.1,432.3,78.3,43.3), new cjs.Rectangle(-4.9,435,78.6,45), new cjs.Rectangle(-0.6,437.9,78.9,46.4), new cjs.Rectangle(3.7,440.6,79.3,48.2), new cjs.Rectangle(10.8,446.9,79.1,47.5), new cjs.Rectangle(17.7,453.1,79,47), new cjs.Rectangle(24.7,459.5,78.9,46.4), new cjs.Rectangle(31.7,465.8,78.8,45.9), new cjs.Rectangle(38.6,472,78.7,45.3), new cjs.Rectangle(45.6,478.3,78.6,44.7), new cjs.Rectangle(52.5,484.7,78.5,44.1), new cjs.Rectangle(59.4,490.9,78.4,43.6), new cjs.Rectangle(66.4,497.1,78.3,43.3), new cjs.Rectangle(73.3,503.4,78.1,42.7), new cjs.Rectangle(80.3,509.7,78,42.1), new cjs.Rectangle(87.3,516,77.9,41.5), new cjs.Rectangle(94.3,522.4,77.7,40.9), new cjs.Rectangle(101.3,528.7,77.6,40.4), new cjs.Rectangle(108.3,534.9,77.4,39.8), new cjs.Rectangle(115.2,541.3,77.1,39.1), new cjs.Rectangle(122.2,547.5,77.1,38.8), new cjs.Rectangle(129.2,553.8,76.9,38.2), new cjs.Rectangle(136.1,560.1,76.7,37.6), new cjs.Rectangle(143.1,566.4,76.6,37), new cjs.Rectangle(150.2,572.7,76.4,36.3), new cjs.Rectangle(157.1,579.1,76.2,35.8), new cjs.Rectangle(164.2,585.3,75.9,35.2), new cjs.Rectangle(171.2,591.6,75.7,34.5), new cjs.Rectangle(178.2,597.8,75.5,34.2), new cjs.Rectangle(185.1,604.2,75.4,33.5), new cjs.Rectangle(192.2,610.5,75.2,32.9), new cjs.Rectangle(199.1,616.8,74.9,32.3), new cjs.Rectangle(206.2,623.1,74.6,31.6), new cjs.Rectangle(213.3,629.5,74.4,31), new cjs.Rectangle(220.2,635.8,74.2,30.4), new cjs.Rectangle(227.2,642,74,30), new cjs.Rectangle(214.3,647.8,74.6,31.6), new cjs.Rectangle(201.5,653.5,75.3,33.3), new cjs.Rectangle(188.5,659,75.9,35.1), new cjs.Rectangle(175.7,664.8,76.4,36.7), new cjs.Rectangle(162.9,670.5,77,38.5), new cjs.Rectangle(150.1,676.2,77.5,40.1), new cjs.Rectangle(137.4,681.8,77.9,41.8), new cjs.Rectangle(124.6,687.6,78.3,43.3), new cjs.Rectangle(111.9,693.3,78.6,45), new cjs.Rectangle(99.1,699.1,78.9,46.5), new cjs.Rectangle(86.4,704.7,79.3,48.2), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leaf1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.7,y:3.7},30).to({x:0,y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-15,74,30);
p.frameBounds = [rect, new cjs.Rectangle(-37.1,-14.9,74,30), new cjs.Rectangle(-37.2,-14.7,74,30), new cjs.Rectangle(-37.3,-14.6,74,30), new cjs.Rectangle(-37.5,-14.5,74,30), new cjs.Rectangle(-37.6,-14.4,74,30), new cjs.Rectangle(-37.7,-14.2,74,30), new cjs.Rectangle(-37.8,-14.1,74,30), new cjs.Rectangle(-38,-14,74,30), new cjs.Rectangle(-38.1,-13.9,74,30), new cjs.Rectangle(-38.2,-13.7,74,30), new cjs.Rectangle(-38.3,-13.6,74,30), new cjs.Rectangle(-38.5,-13.5,74,30), new cjs.Rectangle(-38.6,-13.4,74,30), new cjs.Rectangle(-38.7,-13.2,74,30), new cjs.Rectangle(-38.8,-13.1,74,30), new cjs.Rectangle(-38.9,-13,74,30), new cjs.Rectangle(-39.1,-12.9,74,30), new cjs.Rectangle(-39.2,-12.8,74,30), new cjs.Rectangle(-39.3,-12.6,74,30), new cjs.Rectangle(-39.4,-12.5,74,30), new cjs.Rectangle(-39.6,-12.4,74,30), new cjs.Rectangle(-39.7,-12.3,74,30), new cjs.Rectangle(-39.8,-12.1,74,30), new cjs.Rectangle(-39.9,-12,74,30), new cjs.Rectangle(-40.1,-11.9,74,30), new cjs.Rectangle(-40.2,-11.8,74,30), new cjs.Rectangle(-40.3,-11.6,74,30), new cjs.Rectangle(-40.4,-11.5,74,30), new cjs.Rectangle(-40.6,-11.4,74,30), new cjs.Rectangle(-40.7,-11.3,74,30), new cjs.Rectangle(-40.6,-11.4,74,30), new cjs.Rectangle(-40.4,-11.5,74,30), new cjs.Rectangle(-40.3,-11.6,74,30), new cjs.Rectangle(-40.2,-11.8,74,30), new cjs.Rectangle(-40.1,-11.9,74,30), new cjs.Rectangle(-39.9,-12,74,30), new cjs.Rectangle(-39.8,-12.1,74,30), new cjs.Rectangle(-39.7,-12.3,74,30), new cjs.Rectangle(-39.6,-12.4,74,30), new cjs.Rectangle(-39.4,-12.5,74,30), new cjs.Rectangle(-39.3,-12.6,74,30), new cjs.Rectangle(-39.2,-12.8,74,30), new cjs.Rectangle(-39.1,-12.9,74,30), new cjs.Rectangle(-38.9,-13,74,30), new cjs.Rectangle(-38.8,-13.1,74,30), new cjs.Rectangle(-38.7,-13.2,74,30), new cjs.Rectangle(-38.6,-13.4,74,30), new cjs.Rectangle(-38.5,-13.5,74,30), new cjs.Rectangle(-38.3,-13.6,74,30), new cjs.Rectangle(-38.2,-13.7,74,30), new cjs.Rectangle(-38.1,-13.9,74,30), new cjs.Rectangle(-38,-14,74,30), new cjs.Rectangle(-37.8,-14.1,74,30), new cjs.Rectangle(-37.7,-14.2,74,30), new cjs.Rectangle(-37.6,-14.4,74,30), new cjs.Rectangle(-37.5,-14.5,74,30), new cjs.Rectangle(-37.3,-14.6,74,30), new cjs.Rectangle(-37.2,-14.7,74,30), new cjs.Rectangle(-37.1,-14.9,74,30), new cjs.Rectangle(-37,-15,74,30)];


(lib.item6_121_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item6_122_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.8,-109,229.4,217.8);
p.frameBounds = [rect, new cjs.Rectangle(-113.8,-109.1,229.4,217.8), new cjs.Rectangle(-113.8,-109.3,229.4,217.8), new cjs.Rectangle(-113.8,-109.5,229.4,217.8), new cjs.Rectangle(-113.8,-109.7,229.4,217.8), new cjs.Rectangle(-113.8,-109.8,229.4,217.8), new cjs.Rectangle(-113.8,-110,229.4,217.8), new cjs.Rectangle(-113.8,-110.2,229.4,217.8), new cjs.Rectangle(-113.8,-110.4,229.4,217.8), new cjs.Rectangle(-113.8,-110.5,229.4,217.8), new cjs.Rectangle(-113.8,-110.7,229.4,217.8), new cjs.Rectangle(-113.8,-110.9,229.4,217.8), new cjs.Rectangle(-113.8,-111,229.4,217.8), new cjs.Rectangle(-113.8,-111.2,229.4,217.8), new cjs.Rectangle(-113.8,-111.4,229.4,217.8), new cjs.Rectangle(-113.8,-111.6,229.4,217.8), new cjs.Rectangle(-113.8,-111.7,229.4,217.8), new cjs.Rectangle(-113.8,-111.9,229.4,217.8), new cjs.Rectangle(-113.8,-112.1,229.4,217.8), new cjs.Rectangle(-113.8,-112.3,229.4,217.8), new cjs.Rectangle(-113.8,-112.4,229.4,217.8), new cjs.Rectangle(-113.8,-112.6,229.4,217.8), new cjs.Rectangle(-113.8,-112.8,229.4,217.8), new cjs.Rectangle(-113.8,-112.9,229.4,217.8), new cjs.Rectangle(-113.8,-113.1,229.4,217.8), new cjs.Rectangle(-113.8,-113.3,229.4,217.8), new cjs.Rectangle(-113.8,-113.5,229.4,217.8), new cjs.Rectangle(-113.8,-113.6,229.4,217.8), new cjs.Rectangle(-113.8,-113.8,229.4,217.8), new cjs.Rectangle(-113.8,-114,229.4,217.8), new cjs.Rectangle(-113.8,-113.8,229.4,217.8), new cjs.Rectangle(-113.8,-113.6,229.4,217.8), new cjs.Rectangle(-113.8,-113.5,229.4,217.8), new cjs.Rectangle(-113.8,-113.3,229.4,217.8), new cjs.Rectangle(-113.8,-113.1,229.4,217.8), new cjs.Rectangle(-113.8,-113,229.4,217.8), new cjs.Rectangle(-113.8,-112.8,229.4,217.8), new cjs.Rectangle(-113.8,-112.6,229.4,217.8), new cjs.Rectangle(-113.8,-112.5,229.4,217.8), new cjs.Rectangle(-113.8,-112.3,229.4,217.8), new cjs.Rectangle(-113.8,-112.1,229.4,217.8), new cjs.Rectangle(-113.8,-112,229.4,217.8), new cjs.Rectangle(-113.8,-111.8,229.4,217.8), new cjs.Rectangle(-113.8,-111.6,229.4,217.8), new cjs.Rectangle(-113.8,-111.5,229.4,217.8), new cjs.Rectangle(-113.8,-111.3,229.4,217.8), new cjs.Rectangle(-113.8,-111.1,229.4,217.8), new cjs.Rectangle(-113.8,-111,229.4,217.8), new cjs.Rectangle(-113.8,-110.8,229.4,217.8), new cjs.Rectangle(-113.8,-110.6,229.4,217.8), new cjs.Rectangle(-113.8,-110.5,229.4,217.8), new cjs.Rectangle(-113.8,-110.3,229.4,217.8), new cjs.Rectangle(-113.8,-110.1,229.4,217.8), new cjs.Rectangle(-113.8,-110,229.4,217.8), new cjs.Rectangle(-113.8,-109.8,229.4,217.8), new cjs.Rectangle(-113.8,-109.6,229.4,217.8), new cjs.Rectangle(-113.8,-109.5,229.4,217.8), new cjs.Rectangle(-113.8,-109.3,229.4,217.8), new cjs.Rectangle(-113.8,-109.1,229.4,217.8), new cjs.Rectangle(-113.8,-109,229.4,217.8)];


(lib.item5_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_5_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.2,-83.6,303.7,169.2);
p.frameBounds = [rect, new cjs.Rectangle(-151.2,-83.8,303.7,169.1), new cjs.Rectangle(-151.2,-83.9,303.7,169.2), new cjs.Rectangle(-151.2,-84,303.7,169.1), new cjs.Rectangle(-151.2,-84.2,303.7,169.2), new cjs.Rectangle(-151.2,-84.3,303.7,169.1), new cjs.Rectangle(-151.2,-84.5,303.7,169.2), new cjs.Rectangle(-151.2,-84.6,303.7,169.1), new cjs.Rectangle(-151.2,-84.7,303.7,169.2), new cjs.Rectangle(-151.2,-84.9,303.7,169.2), new cjs.Rectangle(-151.2,-85,303.7,169.1), new cjs.Rectangle(-151.2,-85.1,303.7,169.2), new cjs.Rectangle(-151.2,-85.3,303.7,169.1), new cjs.Rectangle(-151.2,-85.4,303.7,169.2), new cjs.Rectangle(-151.2,-85.6,303.7,169.1), new cjs.Rectangle(-151.2,-85.7,303.7,169.2), new cjs.Rectangle(-151.2,-85.8,303.7,169.1), new cjs.Rectangle(-151.2,-86,303.7,169.2), new cjs.Rectangle(-151.2,-86.1,303.7,169.2), new cjs.Rectangle(-151.2,-86.2,303.7,169.2), new cjs.Rectangle(-151.2,-86.4,303.7,169.2), new cjs.Rectangle(-151.2,-86.5,303.7,169.1), new cjs.Rectangle(-151.2,-86.7,303.7,169.2), new cjs.Rectangle(-151.2,-86.8,303.7,169.1), new cjs.Rectangle(-151.2,-86.9,303.7,169.2), new cjs.Rectangle(-151.2,-87.1,303.7,169.1), new cjs.Rectangle(-151.2,-87.2,303.7,169.2), new cjs.Rectangle(-151.2,-87.3,303.7,169.1), new cjs.Rectangle(-151.2,-87.5,303.7,169.2), new cjs.Rectangle(-151.2,-87.6,303.7,169.2), new cjs.Rectangle(-151.2,-87.5,303.7,169.2), new cjs.Rectangle(-151.2,-87.4,303.7,169.2), new cjs.Rectangle(-151.2,-87.2,303.7,169.2), new cjs.Rectangle(-151.2,-87.1,303.7,169.1), new cjs.Rectangle(-151.2,-87,303.7,169.2), new cjs.Rectangle(-151.2,-86.8,303.7,169.1), new cjs.Rectangle(-151.2,-86.7,303.7,169.2), new cjs.Rectangle(-151.2,-86.6,303.7,169.1), new cjs.Rectangle(-151.2,-86.4,303.7,169.2), new cjs.Rectangle(-151.2,-86.3,303.7,169.1), new cjs.Rectangle(-151.2,-86.2,303.7,169.2), new cjs.Rectangle(-151.2,-86,303.7,169.1), new cjs.Rectangle(-151.2,-85.9,303.7,169.2), new cjs.Rectangle(-151.2,-85.8,303.7,169.1), new cjs.Rectangle(-151.2,-85.6,303.7,169.2), new cjs.Rectangle(-151.2,-85.5,303.7,169.2), new cjs.Rectangle(-151.2,-85.4,303.7,169.2), new cjs.Rectangle(-151.2,-85.2,303.7,169.2), new cjs.Rectangle(-151.2,-85.1,303.7,169.1), new cjs.Rectangle(-151.2,-85,303.7,169.2), new cjs.Rectangle(-151.2,-84.8,303.7,169.1), new cjs.Rectangle(-151.2,-84.7,303.7,169.2), new cjs.Rectangle(-151.2,-84.6,303.7,169.1), new cjs.Rectangle(-151.2,-84.4,303.7,169.2), new cjs.Rectangle(-151.2,-84.3,303.7,169.1), new cjs.Rectangle(-151.2,-84.2,303.7,169.2), new cjs.Rectangle(-151.2,-84,303.7,169.1), new cjs.Rectangle(-151.2,-83.9,303.7,169.2), new cjs.Rectangle(-151.2,-83.8,303.7,169.1), new cjs.Rectangle(-151.2,-83.6,303.7,169.2)];


(lib.item5_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item5_411_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({alpha:1},3).to({alpha:0.012},3).to({_off:true},1).wait(20).to({_off:false},0).to({alpha:1},3).to({alpha:0.012},3).to({_off:true},1).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-162,-207.5,324,415), rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-162,-207.5,324,415), rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.item3_71_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item3_72_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-127,271,254);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item3_61_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item3_62_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-125,238,266);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item3_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item3_52_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-113.5,163,227);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item3_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item3_42_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-189,333,378);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item3_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.item3_32_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-267.9,alpha:0.012},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-50,87,100);
p.frameBounds = [rect, new cjs.Rectangle(-43.5,-70.6,87,100), new cjs.Rectangle(-43.5,-91.2,87,100), new cjs.Rectangle(-43.5,-111.8,87,100), new cjs.Rectangle(-43.5,-132.4,87,100), new cjs.Rectangle(-43.5,-153,87,100), new cjs.Rectangle(-43.5,-173.6,87,100), new cjs.Rectangle(-43.5,-194.3,87,100), new cjs.Rectangle(-43.5,-214.9,87,100), new cjs.Rectangle(-43.5,-235.5,87,100), new cjs.Rectangle(-43.5,-256.1,87,100), new cjs.Rectangle(-43.5,-276.7,87,100), new cjs.Rectangle(-43.5,-297.3,87,100), new cjs.Rectangle(-43.5,-317.9,87,100), null];


(lib.item3_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item3_22_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.5,-62.5,121,125);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item3_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item3_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-140,172,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_7_img();
	this.instance.setTransform(-135.5,-127);

	this.instance_1 = new lib.item3_71_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqBRgIsT6hIS8rxIKWBaII6G3IGdPoInmOiIuLDKg");
	this.shape.setTransform(0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-142.5,-133.4,285.9,266.4);
p.frameBounds = [rect, new cjs.Rectangle(-135.5,-127,271,254)];


(lib.item3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_2_img();
	this.instance.setTransform(-60.5,-62.5);

	this.instance_1 = new lib.item3_21_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai6KHInelcIBurFIHXkIIGhBIIFLHaIhLDzImkIwg");
	this.shape.setTransform(1.4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-68.1,133.2,135.1);
p.frameBounds = [rect, new cjs.Rectangle(-60.5,-62.5,121,125)];


(lib.item2_73_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// animation
	this.instance = new lib.item2_72_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-286,alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.3,-105.6,297.1,203.6);
p.frameBounds = [rect, new cjs.Rectangle(-148.3,-120.6,297.1,203.6), new cjs.Rectangle(-148.3,-135.7,297.1,203.6), new cjs.Rectangle(-148.3,-150.7,297.1,203.6), new cjs.Rectangle(-148.3,-165.8,297.1,203.6), new cjs.Rectangle(-148.3,-180.8,297.1,203.6), new cjs.Rectangle(-148.3,-195.9,297.1,203.6), new cjs.Rectangle(-148.3,-210.9,297.1,203.6), new cjs.Rectangle(-148.3,-226,297.1,203.6), new cjs.Rectangle(-148.3,-241,297.1,203.6), new cjs.Rectangle(-148.3,-256.1,297.1,203.6), new cjs.Rectangle(-148.3,-271.2,297.1,203.6), new cjs.Rectangle(-148.3,-286.2,297.1,203.6), new cjs.Rectangle(-148.3,-301.3,297.1,203.6), new cjs.Rectangle(-148.3,-316.3,297.1,203.6), new cjs.Rectangle(-148.3,-331.4,297.1,203.6), new cjs.Rectangle(-148.3,-346.4,297.1,203.6), new cjs.Rectangle(-148.3,-361.5,297.1,203.6), new cjs.Rectangle(-148.3,-376.5,297.1,203.6), new cjs.Rectangle(-148.3,-391.6,297.1,203.6), null];


(lib.item2_71_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.item2_72_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2},24).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.3,-105.6,297.1,203.6);
p.frameBounds = [rect, new cjs.Rectangle(-148.3,-105.5,297.1,203.6), new cjs.Rectangle(-148.3,-105.4,297.1,203.6), new cjs.Rectangle(-148.3,-105.3,297.1,203.6), rect=new cjs.Rectangle(-148.3,-105.2,297.1,203.6), rect, new cjs.Rectangle(-148.3,-105.1,297.1,203.6), new cjs.Rectangle(-148.3,-105,297.1,203.6), new cjs.Rectangle(-148.3,-104.9,297.1,203.6), new cjs.Rectangle(-148.3,-104.8,297.1,203.6), rect=new cjs.Rectangle(-148.3,-104.7,297.1,203.6), rect, new cjs.Rectangle(-148.3,-104.6,297.1,203.6), new cjs.Rectangle(-148.3,-104.5,297.1,203.6), new cjs.Rectangle(-148.3,-104.4,297.1,203.6), new cjs.Rectangle(-148.3,-104.3,297.1,203.6), rect=new cjs.Rectangle(-148.3,-104.2,297.1,203.6), rect, new cjs.Rectangle(-148.3,-104.1,297.1,203.6), new cjs.Rectangle(-148.3,-104,297.1,203.6), new cjs.Rectangle(-148.3,-103.9,297.1,203.6), new cjs.Rectangle(-148.3,-103.8,297.1,203.6), rect=new cjs.Rectangle(-148.3,-103.7,297.1,203.6), rect, new cjs.Rectangle(-148.3,-103.6,297.1,203.6), rect=new cjs.Rectangle(-148.3,-103.7,297.1,203.6), rect, new cjs.Rectangle(-148.3,-103.8,297.1,203.6), new cjs.Rectangle(-148.3,-103.9,297.1,203.6), new cjs.Rectangle(-148.3,-104,297.1,203.6), rect=new cjs.Rectangle(-148.3,-104.1,297.1,203.6), rect, new cjs.Rectangle(-148.3,-104.2,297.1,203.6), new cjs.Rectangle(-148.3,-104.3,297.1,203.6), new cjs.Rectangle(-148.3,-104.4,297.1,203.6), rect=new cjs.Rectangle(-148.3,-104.5,297.1,203.6), rect, new cjs.Rectangle(-148.3,-104.6,297.1,203.6), new cjs.Rectangle(-148.3,-104.7,297.1,203.6), new cjs.Rectangle(-148.3,-104.8,297.1,203.6), rect=new cjs.Rectangle(-148.3,-104.9,297.1,203.6), rect, new cjs.Rectangle(-148.3,-105,297.1,203.6), new cjs.Rectangle(-148.3,-105.1,297.1,203.6), new cjs.Rectangle(-148.3,-105.2,297.1,203.6), rect=new cjs.Rectangle(-148.3,-105.3,297.1,203.6), rect, new cjs.Rectangle(-148.3,-105.4,297.1,203.6), new cjs.Rectangle(-148.3,-105.5,297.1,203.6), new cjs.Rectangle(-148.3,-105.6,297.1,203.6)];


(lib.item2_61_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// graph
	this.instance = new lib.item2_62_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164.5,-104,329,208);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item2_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item2_52_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-66,157,132);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item2_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item2_42_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-43.5,92,87);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item2_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item2_32_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:358,alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144,-68.5,288,137);
p.frameBounds = [rect, new cjs.Rectangle(-99.2,-68.5,288,137), new cjs.Rectangle(-54.5,-68.5,288,137), new cjs.Rectangle(-9.7,-68.5,288,137), new cjs.Rectangle(35,-68.5,288,137), new cjs.Rectangle(79.8,-68.5,288,137), new cjs.Rectangle(124.5,-68.5,288,137), new cjs.Rectangle(169.3,-68.5,288,137), new cjs.Rectangle(214,-68.5,288,137), null];


(lib.item2_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item2_22_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170.5,-114,341,228);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.item2_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-61.5,165,123);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.item2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_6_img();
	this.instance.setTransform(-164.5,-104);

	this.instance_1 = new lib.item2_61_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A13PlIjblMIAci1IFylgIAAjBIjskzIAjjgIJ0m6INTBfIAACoIotBcIAHIlIJBElIHToCIHeAXIBcEgIkoGdIMZAcIi5DqIvxGQg");
	this.shape.setTransform(-9.8,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.7,-110.1,336.3,214.2);
p.frameBounds = [rect, new cjs.Rectangle(-164.5,-104,329,208)];


(lib.item2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_4_img();
	this.instance.setTransform(-46,-43.5);

	this.instance_1 = new lib.item2_41_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao8EcIHWr9IEWAAIGNK4Ii8D4IsyAUg");
	this.shape.setTransform(2.7,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.7,-44.4,114.8,96.6);
p.frameBounds = [rect, new cjs.Rectangle(-46,-43.5,92,87)];


(lib.item2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_1_img();
	this.instance.setTransform(-82.5,-61.5);

	this.instance_1 = new lib.item2_11_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlqKSIoqo4IHJpEII+inIHdChIFFHGIhQEBIoFG7g");
	this.shape.setTransform(-0.6,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.3,-67,183.6,131.6);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-61.5,165,123)];


(lib.i16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.i161_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-49,117,98);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.i15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.i151_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-41,210,82);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.i14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.i141_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.5,-87.5,185,175);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.i13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// graph
	this.instance = new lib.i131_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-68.5,170,137);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.i11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.i111_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.5,-107.5,221,215);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hints_button_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_hint_mc();
	this.instance.setTransform(0.5,0.5,0.944,0.944,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.hints_button_img();
	this.instance_1.setTransform(-80,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect];


(lib.hints_button_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hints_button_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({alpha:0.801},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect, rect, rect, rect];


(lib.gidro1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.gidro1_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.gidro1_1_img();
	this.instance_1.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.gidro_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gidro1_4_mc();
	this.instance.setTransform(-23,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},39).to({y:6},40).wait(1));

	// animation
	this.instance_1 = new lib.gidro1_1_mc();
	this.instance_1.setTransform(31,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-3},39).to({y:0},40).wait(1));

	// animation
	this.instance_2 = new lib.gidro1_3_mc();
	this.instance_2.setTransform(51,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:6},39).to({y:0},40).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq1K/Imhq/IAAkOIH6pSIO2jsIH+EQID/IpIhsILIrIMiIjjAzg");
	this.shape.setTransform(39.2,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.9,-113,222.2,220.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.geo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.geo1_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).to({alpha:0.012},25).wait(1));

	// Слой 1
	this.instance_1 = new lib.geo1_1_img();
	this.instance_1.setTransform(-100,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-98,200,196.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.geo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.geo1_mc();
	this.instance.setTransform(31,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// animation
	this.instance_1 = new lib.geo1_5_mc();
	this.instance_1.setTransform(86,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:88,y:65},34).to({x:86,y:60},35).wait(1));

	// animation
	this.instance_2 = new lib.geo1_4_mc();
	this.instance_2.setTransform(81,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:84,y:-44},34).to({x:81,y:-42},35).wait(1));

	// animation
	this.instance_3 = new lib.geo1_3_mc();
	this.instance_3.setTransform(-20,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-27},34).to({x:-20},35).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlCQ1Is5rcIAAm6IIJp3IK1mCINbDcIDeWCIrSJXg");
	this.shape.setTransform(32.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.7,-112,229.8,223.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.electro1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.electro1_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.electro1_1_img();
	this.instance_1.setTransform(-100,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-113,200,226.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.electro_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.electro1_5_mc();
	this.instance.setTransform(46,97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:101.9},39).to({y:97.9},40).wait(1));

	// animation
	this.instance_1 = new lib.electro1_3_mc();
	this.instance_1.setTransform(-35,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:17},39).to({y:14},40).wait(1));

	// animation
	this.instance_2 = new lib.electro1_1_mc();
	this.instance_2.setTransform(31,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-3},39).to({y:0},40).wait(1));

	// animation
	this.instance_3 = new lib.electro1_4_mc();
	this.instance_3.setTransform(78,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-6},39).to({y:-10},40).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArpPaIm+s2IEJsaIQ2p0IKeELIFyPVIilL0IheCHIriF3IkrADg");
	this.shape.setTransform(33.9,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.3,-124.1,238.5,251.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dendro1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dendro1_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.dendro1_1_img();
	this.instance_1.setTransform(-100,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-98.5,200,197.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dendro_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.dendro1_3_mc();
	this.instance.setTransform(-15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.8,x:-19},39).to({rotation:0,x:-15},40).wait(1));

	// animation
	this.instance_1 = new lib.dendro1_1_mc();
	this.instance_1.setTransform(31,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// animation
	this.instance_2 = new lib.dendro1_4_mc();
	this.instance_2.setTransform(89,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.1,x:94},39).to({rotation:0,x:89},40).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ax6K2Ig/15IQ+mwIU1PpInASAIxxB+g");
	this.shape.setTransform(40.1,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.9,-118.2,242.1,228.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_6_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-105,250,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_5_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-115,270,230);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_4_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-130,330,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_3_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-125,270,250);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-175,360,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:0.898},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-110,360,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.clouds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.clouds2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:267.1,alpha:1},199).to({x:480.1,alpha:0.012},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-775.5,-100,1551,200);
p.frameBounds = [rect, new cjs.Rectangle(-774.1,-100,1551,200), new cjs.Rectangle(-772.8,-100,1551,200), new cjs.Rectangle(-771.4,-100,1551,200), new cjs.Rectangle(-770.1,-100,1551,200), new cjs.Rectangle(-768.8,-100,1551,200), new cjs.Rectangle(-767.4,-100,1551,200), new cjs.Rectangle(-766.1,-100,1551,200), new cjs.Rectangle(-764.7,-100,1551,200), new cjs.Rectangle(-763.4,-100,1551,200), new cjs.Rectangle(-762.1,-100,1551,200), new cjs.Rectangle(-760.7,-100,1551,200), new cjs.Rectangle(-759.4,-100,1551,200), new cjs.Rectangle(-758,-100,1551,200), new cjs.Rectangle(-756.7,-100,1551,200), new cjs.Rectangle(-755.3,-100,1551,200), new cjs.Rectangle(-754,-100,1551,200), new cjs.Rectangle(-752.7,-100,1551,200), new cjs.Rectangle(-751.3,-100,1551,200), new cjs.Rectangle(-750,-100,1551,200), new cjs.Rectangle(-748.6,-100,1551,200), new cjs.Rectangle(-747.3,-100,1551,200), new cjs.Rectangle(-746,-100,1551,200), new cjs.Rectangle(-744.6,-100,1551,200), new cjs.Rectangle(-743.3,-100,1551,200), new cjs.Rectangle(-741.9,-100,1551,200), new cjs.Rectangle(-740.6,-100,1551,200), new cjs.Rectangle(-739.2,-100,1551,200), new cjs.Rectangle(-737.9,-100,1551,200), new cjs.Rectangle(-736.6,-100,1551,200), new cjs.Rectangle(-735.2,-100,1551,200), new cjs.Rectangle(-733.9,-100,1551,200), new cjs.Rectangle(-732.5,-100,1551,200), new cjs.Rectangle(-731.2,-100,1551,200), new cjs.Rectangle(-729.8,-100,1551,200), new cjs.Rectangle(-728.5,-100,1551,200), new cjs.Rectangle(-727.2,-100,1551,200), new cjs.Rectangle(-725.8,-100,1551,200), new cjs.Rectangle(-724.5,-100,1551,200), new cjs.Rectangle(-723.1,-100,1551,200), new cjs.Rectangle(-721.8,-100,1551,200), new cjs.Rectangle(-720.5,-100,1551,200), new cjs.Rectangle(-719.1,-100,1551,200), new cjs.Rectangle(-717.8,-100,1551,200), new cjs.Rectangle(-716.4,-100,1551,200), new cjs.Rectangle(-715.1,-100,1551,200), new cjs.Rectangle(-713.7,-100,1551,200), new cjs.Rectangle(-712.4,-100,1551,200), new cjs.Rectangle(-711.1,-100,1551,200), new cjs.Rectangle(-709.7,-100,1551,200), new cjs.Rectangle(-708.4,-100,1551,200), new cjs.Rectangle(-707,-100,1551,200), new cjs.Rectangle(-705.7,-100,1551,200), new cjs.Rectangle(-704.4,-100,1551,200), new cjs.Rectangle(-703,-100,1551,200), new cjs.Rectangle(-701.7,-100,1551,200), new cjs.Rectangle(-700.3,-100,1551,200), new cjs.Rectangle(-699,-100,1551,200), new cjs.Rectangle(-697.6,-100,1551,200), new cjs.Rectangle(-696.3,-100,1551,200), new cjs.Rectangle(-695,-100,1551,200), new cjs.Rectangle(-693.6,-100,1551,200), new cjs.Rectangle(-692.3,-100,1551,200), new cjs.Rectangle(-690.9,-100,1551,200), new cjs.Rectangle(-689.6,-100,1551,200), new cjs.Rectangle(-688.2,-100,1551,200), new cjs.Rectangle(-686.9,-100,1551,200), new cjs.Rectangle(-685.6,-100,1551,200), new cjs.Rectangle(-684.2,-100,1551,200), new cjs.Rectangle(-682.9,-100,1551,200), new cjs.Rectangle(-681.5,-100,1551,200), new cjs.Rectangle(-680.2,-100,1551,200), new cjs.Rectangle(-678.9,-100,1551,200), new cjs.Rectangle(-677.5,-100,1551,200), new cjs.Rectangle(-676.2,-100,1551,200), new cjs.Rectangle(-674.8,-100,1551,200), new cjs.Rectangle(-673.5,-100,1551,200), new cjs.Rectangle(-672.1,-100,1551,200), new cjs.Rectangle(-670.8,-100,1551,200), new cjs.Rectangle(-669.5,-100,1551,200), new cjs.Rectangle(-668.1,-100,1551,200), new cjs.Rectangle(-666.8,-100,1551,200), new cjs.Rectangle(-665.4,-100,1551,200), new cjs.Rectangle(-664.1,-100,1551,200), new cjs.Rectangle(-662.8,-100,1551,200), new cjs.Rectangle(-661.4,-100,1551,200), new cjs.Rectangle(-660.1,-100,1551,200), new cjs.Rectangle(-658.7,-100,1551,200), new cjs.Rectangle(-657.4,-100,1551,200), new cjs.Rectangle(-656,-100,1551,200), new cjs.Rectangle(-654.7,-100,1551,200), new cjs.Rectangle(-653.4,-100,1551,200), new cjs.Rectangle(-652,-100,1551,200), new cjs.Rectangle(-650.7,-100,1551,200), new cjs.Rectangle(-649.3,-100,1551,200), new cjs.Rectangle(-648,-100,1551,200), new cjs.Rectangle(-646.6,-100,1551,200), new cjs.Rectangle(-645.3,-100,1551,200), new cjs.Rectangle(-644,-100,1551,200), new cjs.Rectangle(-642.6,-100,1551,200), new cjs.Rectangle(-641.3,-100,1551,200), new cjs.Rectangle(-639.9,-100,1551,200), new cjs.Rectangle(-638.6,-100,1551,200), new cjs.Rectangle(-637.3,-100,1551,200), new cjs.Rectangle(-635.9,-100,1551,200), new cjs.Rectangle(-634.6,-100,1551,200), new cjs.Rectangle(-633.2,-100,1551,200), new cjs.Rectangle(-631.9,-100,1551,200), new cjs.Rectangle(-630.5,-100,1551,200), new cjs.Rectangle(-629.2,-100,1551,200), new cjs.Rectangle(-627.9,-100,1551,200), new cjs.Rectangle(-626.5,-100,1551,200), new cjs.Rectangle(-625.2,-100,1551,200), new cjs.Rectangle(-623.8,-100,1551,200), new cjs.Rectangle(-622.5,-100,1551,200), new cjs.Rectangle(-621.1,-100,1551,200), new cjs.Rectangle(-619.8,-100,1551,200), new cjs.Rectangle(-618.5,-100,1551,200), new cjs.Rectangle(-617.1,-100,1551,200), new cjs.Rectangle(-615.8,-100,1551,200), new cjs.Rectangle(-614.4,-100,1551,200), new cjs.Rectangle(-613.1,-100,1551,200), new cjs.Rectangle(-611.8,-100,1551,200), new cjs.Rectangle(-610.4,-100,1551,200), new cjs.Rectangle(-609.1,-100,1551,200), new cjs.Rectangle(-607.7,-100,1551,200), new cjs.Rectangle(-606.4,-100,1551,200), new cjs.Rectangle(-605,-100,1551,200), new cjs.Rectangle(-603.7,-100,1551,200), new cjs.Rectangle(-602.4,-100,1551,200), new cjs.Rectangle(-601,-100,1551,200), new cjs.Rectangle(-599.7,-100,1551,200), new cjs.Rectangle(-598.3,-100,1551,200), new cjs.Rectangle(-597,-100,1551,200), new cjs.Rectangle(-595.7,-100,1551,200), new cjs.Rectangle(-594.3,-100,1551,200), new cjs.Rectangle(-593,-100,1551,200), new cjs.Rectangle(-591.6,-100,1551,200), new cjs.Rectangle(-590.3,-100,1551,200), new cjs.Rectangle(-588.9,-100,1551,200), new cjs.Rectangle(-587.6,-100,1551,200), new cjs.Rectangle(-586.3,-100,1551,200), new cjs.Rectangle(-584.9,-100,1551,200), new cjs.Rectangle(-583.6,-100,1551,200), new cjs.Rectangle(-582.2,-100,1551,200), new cjs.Rectangle(-580.9,-100,1551,200), new cjs.Rectangle(-579.5,-100,1551,200), new cjs.Rectangle(-578.2,-100,1551,200), new cjs.Rectangle(-576.9,-100,1551,200), new cjs.Rectangle(-575.5,-100,1551,200), new cjs.Rectangle(-574.2,-100,1551,200), new cjs.Rectangle(-572.8,-100,1551,200), new cjs.Rectangle(-571.5,-100,1551,200), new cjs.Rectangle(-570.2,-100,1551,200), new cjs.Rectangle(-568.8,-100,1551,200), new cjs.Rectangle(-567.5,-100,1551,200), new cjs.Rectangle(-566.1,-100,1551,200), new cjs.Rectangle(-564.8,-100,1551,200), new cjs.Rectangle(-563.4,-100,1551,200), new cjs.Rectangle(-562.1,-100,1551,200), new cjs.Rectangle(-560.8,-100,1551,200), new cjs.Rectangle(-559.4,-100,1551,200), new cjs.Rectangle(-558.1,-100,1551,200), new cjs.Rectangle(-556.7,-100,1551,200), new cjs.Rectangle(-555.4,-100,1551,200), new cjs.Rectangle(-554.1,-100,1551,200), new cjs.Rectangle(-552.7,-100,1551,200), new cjs.Rectangle(-551.4,-100,1551,200), new cjs.Rectangle(-550,-100,1551,200), new cjs.Rectangle(-548.7,-100,1551,200), new cjs.Rectangle(-547.3,-100,1551,200), new cjs.Rectangle(-546,-100,1551,200), new cjs.Rectangle(-544.7,-100,1551,200), new cjs.Rectangle(-543.3,-100,1551,200), new cjs.Rectangle(-542,-100,1551,200), new cjs.Rectangle(-540.6,-100,1551,200), new cjs.Rectangle(-539.3,-100,1551,200), new cjs.Rectangle(-537.9,-100,1551,200), new cjs.Rectangle(-536.6,-100,1551,200), new cjs.Rectangle(-535.3,-100,1551,200), new cjs.Rectangle(-533.9,-100,1551,200), new cjs.Rectangle(-532.6,-100,1551,200), new cjs.Rectangle(-531.2,-100,1551,200), new cjs.Rectangle(-529.9,-100,1551,200), new cjs.Rectangle(-528.6,-100,1551,200), new cjs.Rectangle(-527.2,-100,1551,200), new cjs.Rectangle(-525.9,-100,1551,200), new cjs.Rectangle(-524.5,-100,1551,200), new cjs.Rectangle(-523.2,-100,1551,200), new cjs.Rectangle(-521.8,-100,1551,200), new cjs.Rectangle(-520.5,-100,1551,200), new cjs.Rectangle(-519.2,-100,1551,200), new cjs.Rectangle(-517.8,-100,1551,200), new cjs.Rectangle(-516.5,-100,1551,200), new cjs.Rectangle(-515.1,-100,1551,200), new cjs.Rectangle(-513.8,-100,1551,200), new cjs.Rectangle(-512.5,-100,1551,200), new cjs.Rectangle(-511.1,-100,1551,200), new cjs.Rectangle(-509.8,-100,1551,200), new cjs.Rectangle(-508.4,-100,1551,200), new cjs.Rectangle(-505.8,-100,1551,200), new cjs.Rectangle(-503.1,-100,1551,200), new cjs.Rectangle(-500.4,-100,1551,200), new cjs.Rectangle(-497.8,-100,1551,200), new cjs.Rectangle(-495.1,-100,1551,200), new cjs.Rectangle(-492.5,-100,1551,200), new cjs.Rectangle(-489.8,-100,1551,200), new cjs.Rectangle(-487.1,-100,1551,200), new cjs.Rectangle(-484.5,-100,1551,200), new cjs.Rectangle(-481.8,-100,1551,200), new cjs.Rectangle(-479.1,-100,1551,200), new cjs.Rectangle(-476.5,-100,1551,200), new cjs.Rectangle(-473.8,-100,1551,200), new cjs.Rectangle(-471.1,-100,1551,200), new cjs.Rectangle(-468.5,-100,1551,200), new cjs.Rectangle(-465.8,-100,1551,200), new cjs.Rectangle(-463.2,-100,1551,200), new cjs.Rectangle(-460.5,-100,1551,200), new cjs.Rectangle(-457.8,-100,1551,200), new cjs.Rectangle(-455.2,-100,1551,200), new cjs.Rectangle(-452.5,-100,1551,200), new cjs.Rectangle(-449.9,-100,1551,200), new cjs.Rectangle(-447.2,-100,1551,200), new cjs.Rectangle(-444.5,-100,1551,200), new cjs.Rectangle(-441.9,-100,1551,200), new cjs.Rectangle(-439.2,-100,1551,200), new cjs.Rectangle(-436.5,-100,1551,200), new cjs.Rectangle(-433.9,-100,1551,200), new cjs.Rectangle(-431.2,-100,1551,200), new cjs.Rectangle(-428.5,-100,1551,200), new cjs.Rectangle(-425.9,-100,1551,200), new cjs.Rectangle(-423.2,-100,1551,200), new cjs.Rectangle(-420.6,-100,1551,200), new cjs.Rectangle(-417.9,-100,1551,200), new cjs.Rectangle(-415.2,-100,1551,200), new cjs.Rectangle(-412.6,-100,1551,200), new cjs.Rectangle(-409.9,-100,1551,200), new cjs.Rectangle(-407.2,-100,1551,200), new cjs.Rectangle(-404.6,-100,1551,200), new cjs.Rectangle(-401.9,-100,1551,200), new cjs.Rectangle(-399.3,-100,1551,200), new cjs.Rectangle(-396.6,-100,1551,200), new cjs.Rectangle(-393.9,-100,1551,200), new cjs.Rectangle(-391.3,-100,1551,200), new cjs.Rectangle(-388.6,-100,1551,200), new cjs.Rectangle(-386,-100,1551,200), new cjs.Rectangle(-383.3,-100,1551,200), new cjs.Rectangle(-380.6,-100,1551,200), new cjs.Rectangle(-378,-100,1551,200), new cjs.Rectangle(-375.3,-100,1551,200), new cjs.Rectangle(-372.6,-100,1551,200), new cjs.Rectangle(-370,-100,1551,200), new cjs.Rectangle(-367.3,-100,1551,200), new cjs.Rectangle(-364.6,-100,1551,200), new cjs.Rectangle(-362,-100,1551,200), new cjs.Rectangle(-359.3,-100,1551,200), new cjs.Rectangle(-356.7,-100,1551,200), new cjs.Rectangle(-354,-100,1551,200), new cjs.Rectangle(-351.3,-100,1551,200), new cjs.Rectangle(-348.7,-100,1551,200), new cjs.Rectangle(-346,-100,1551,200), new cjs.Rectangle(-343.4,-100,1551,200), new cjs.Rectangle(-340.7,-100,1551,200), new cjs.Rectangle(-338,-100,1551,200), new cjs.Rectangle(-335.4,-100,1551,200), new cjs.Rectangle(-332.7,-100,1551,200), new cjs.Rectangle(-330,-100,1551,200), new cjs.Rectangle(-327.4,-100,1551,200), new cjs.Rectangle(-324.7,-100,1551,200), new cjs.Rectangle(-322,-100,1551,200), new cjs.Rectangle(-319.4,-100,1551,200), new cjs.Rectangle(-316.7,-100,1551,200), new cjs.Rectangle(-314.1,-100,1551,200), new cjs.Rectangle(-311.4,-100,1551,200), new cjs.Rectangle(-308.7,-100,1551,200), new cjs.Rectangle(-306.1,-100,1551,200), new cjs.Rectangle(-303.4,-100,1551,200), new cjs.Rectangle(-300.7,-100,1551,200), new cjs.Rectangle(-298.1,-100,1551,200), new cjs.Rectangle(-295.4,-100,1551,200)];


(lib.butt1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butt_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,28.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-37.5,y:-208.6},34).to({rotation:75,x:205.1,y:-182.4},33).to({regX:28.6,regY:20.4,rotation:210,x:204.9},1).to({x:47.2,y:50.3},31).to({rotation:300,y:50.2},1).to({regX:28.5,regY:20.5,rotation:360,x:0,y:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-20.5,57,41);
p.frameBounds = [rect, new cjs.Rectangle(-29.6,-26.6,57,41), new cjs.Rectangle(-30.7,-32.7,57,41), new cjs.Rectangle(-31.8,-38.9,57,41), new cjs.Rectangle(-32.9,-45,57,41), new cjs.Rectangle(-34,-51.2,57,41), new cjs.Rectangle(-35.1,-57.3,57,41), new cjs.Rectangle(-36.2,-63.4,57,41), new cjs.Rectangle(-37.3,-69.6,57,41), new cjs.Rectangle(-38.4,-75.7,57,41), new cjs.Rectangle(-39.5,-81.8,57,41), new cjs.Rectangle(-40.6,-88,57,41), new cjs.Rectangle(-41.7,-94.1,57,41), new cjs.Rectangle(-42.8,-100.2,57,41), new cjs.Rectangle(-43.9,-106.4,57,41), new cjs.Rectangle(-45,-112.5,57,41), new cjs.Rectangle(-46.1,-118.6,57,41), new cjs.Rectangle(-47.2,-124.8,57,41), new cjs.Rectangle(-48.3,-130.9,57,41), new cjs.Rectangle(-49.4,-137,57,41), new cjs.Rectangle(-50.5,-143.2,57,41), new cjs.Rectangle(-51.6,-149.3,57,41), new cjs.Rectangle(-52.7,-155.5,57,41), new cjs.Rectangle(-53.8,-161.6,57,41), new cjs.Rectangle(-54.9,-167.7,57,41), new cjs.Rectangle(-56,-173.9,57,41), new cjs.Rectangle(-57.2,-180,57,41), new cjs.Rectangle(-58.3,-186.1,57,41), new cjs.Rectangle(-59.4,-192.3,57,41), new cjs.Rectangle(-60.5,-198.4,57,41), new cjs.Rectangle(-61.6,-204.5,57,41), new cjs.Rectangle(-62.7,-210.7,57,41), new cjs.Rectangle(-63.8,-216.8,57,41), new cjs.Rectangle(-64.9,-222.9,57,41), new cjs.Rectangle(-66,-229.1,57,41), new cjs.Rectangle(-59.4,-229.4,58.6,43.2), new cjs.Rectangle(-52.8,-229.7,60.1,45.3), new cjs.Rectangle(-46.2,-229.9,61.5,47.4), new cjs.Rectangle(-39.4,-230.1,62.7,49.4), new cjs.Rectangle(-32.6,-230.3,63.9,51.4), new cjs.Rectangle(-25.8,-230.4,65,53.2), new cjs.Rectangle(-19,-230.5,66,54.9), new cjs.Rectangle(-12.1,-230.5,66.9,56.6), new cjs.Rectangle(-5.1,-230.5,67.7,58.2), new cjs.Rectangle(1.9,-230.5,68.3,59.7), new cjs.Rectangle(8.9,-230.4,68.9,61), new cjs.Rectangle(16,-230.3,69.4,62.5), new cjs.Rectangle(23.2,-230.1,69.7,63.7), new cjs.Rectangle(30.4,-229.9,69.9,64.8), new cjs.Rectangle(37.7,-229.6,70.1,65.8), new cjs.Rectangle(45.1,-229.2,70.1,66.7), new cjs.Rectangle(52.4,-229,70,67.5), new cjs.Rectangle(59.9,-228.5,69.9,68.2), new cjs.Rectangle(67.4,-228,69.6,68.8), new cjs.Rectangle(75,-227.4,69.1,69.3), new cjs.Rectangle(82.6,-226.8,68.6,69.6), new cjs.Rectangle(90.3,-226.1,67.9,69.9), new cjs.Rectangle(98,-225.4,67.2,70), new cjs.Rectangle(105.7,-224.7,66.4,70.1), new cjs.Rectangle(113.6,-223.9,65.4,70.1), new cjs.Rectangle(121.5,-223,64.4,69.9), new cjs.Rectangle(129.4,-222,63.2,69.6), new cjs.Rectangle(137.4,-221,62,69.2), new cjs.Rectangle(145.4,-220,60.6,68.7), new cjs.Rectangle(153.5,-218.9,59.2,68), new cjs.Rectangle(161.6,-217.8,57.6,67.4), new cjs.Rectangle(169.8,-216.6,56,66.5), new cjs.Rectangle(177.9,-215.3,54.4,65.7), new cjs.Rectangle(170.1,-214.5,69.9,64), new cjs.Rectangle(165.1,-206.9,69.8,63.9), new cjs.Rectangle(160.1,-199.4,69.8,63.9), new cjs.Rectangle(155,-191.9,69.8,63.9), new cjs.Rectangle(149.9,-184.4,69.8,63.9), new cjs.Rectangle(144.8,-176.9,69.8,63.9), new cjs.Rectangle(139.7,-169.4,69.8,63.9), new cjs.Rectangle(134.6,-161.9,69.8,63.9), new cjs.Rectangle(129.5,-154.4,69.8,63.9), new cjs.Rectangle(124.4,-146.9,69.8,63.9), new cjs.Rectangle(119.4,-139.4,69.8,63.9), new cjs.Rectangle(114.3,-131.9,69.8,63.9), new cjs.Rectangle(109.2,-124.3,69.8,63.9), new cjs.Rectangle(104.1,-116.8,69.8,63.9), new cjs.Rectangle(99,-109.3,69.8,63.9), new cjs.Rectangle(93.9,-101.8,69.8,63.9), new cjs.Rectangle(88.8,-94.3,69.8,63.9), new cjs.Rectangle(83.7,-86.8,69.7,63.9), new cjs.Rectangle(78.7,-79.3,69.8,63.9), new cjs.Rectangle(73.6,-71.8,69.8,63.9), new cjs.Rectangle(68.5,-64.3,69.7,63.9), new cjs.Rectangle(63.4,-56.8,69.8,63.9), new cjs.Rectangle(58.3,-49.3,69.8,63.9), new cjs.Rectangle(53.2,-41.8,69.8,63.9), new cjs.Rectangle(48.1,-34.3,69.8,63.9), new cjs.Rectangle(43,-26.8,69.8,63.9), new cjs.Rectangle(38,-19.3,69.8,63.9), new cjs.Rectangle(32.9,-11.8,69.8,63.9), new cjs.Rectangle(27.8,-4.3,69.8,63.9), new cjs.Rectangle(22.7,3.2,69.8,63.9), new cjs.Rectangle(17.6,10.7,69.8,63.9), new cjs.Rectangle(12.4,18.2,69.9,64), new cjs.Rectangle(15.3,15.4,64,69.9), new cjs.Rectangle(12.5,13.1,65.2,70), new cjs.Rectangle(9.8,10.8,66.4,70.1), new cjs.Rectangle(7.1,8.6,67.4,70), new cjs.Rectangle(4.6,6.4,68.2,69.9), new cjs.Rectangle(2,4.3,68.9,69.5), new cjs.Rectangle(-0.4,2.3,69.5,68.9), new cjs.Rectangle(-2.7,0.3,69.9,68.2), new cjs.Rectangle(-5,-1.5,70,67.4), new cjs.Rectangle(-7.2,-3.3,70.1,66.4), new cjs.Rectangle(-9.3,-5,70,65.2), new cjs.Rectangle(-11.2,-6.6,69.8,64), new cjs.Rectangle(-13.2,-8.2,69.4,62.5), new cjs.Rectangle(-15.1,-9.7,68.8,60.9), new cjs.Rectangle(-16.9,-11.2,68.1,59.2), new cjs.Rectangle(-18.6,-12.5,67.2,57.3), new cjs.Rectangle(-20.3,-13.8,66.2,55.3), new cjs.Rectangle(-21.8,-15,65,53.2), new cjs.Rectangle(-23.3,-16.1,63.6,50.9), new cjs.Rectangle(-24.7,-17.3,62.2,48.6), new cjs.Rectangle(-26,-18.4,60.6,46.1), new cjs.Rectangle(-27.3,-19.4,58.8,43.5), new cjs.Rectangle(-28.5,-20.5,57,41)];


(lib.blesk_anim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_7_mc("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.luch2_mc();
	this.instance.setTransform(-53,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.butt1_mc();
	this.instance_1.setTransform(-22.6,93.3,0.323,0.323,-45);

	this.instance_2 = new lib.butt1_mc();
	this.instance_2.setTransform(-247.5,-125.2,0.323,0.323,-90);

	this.instance_3 = new lib.butt1_mc();
	this.instance_3.setTransform(224,-83.2,0.323,0.323,45);

	this.instance_4 = new lib.butt1_mc();
	this.instance_4.setTransform(288.8,133.9,0.502,0.502,-45);

	this.instance_5 = new lib.butt1_mc();
	this.instance_5.setTransform(25.3,-137.3,0.502,0.502,-90);

	this.instance_6 = new lib.butt1_mc();
	this.instance_6.setTransform(-319.7,121.9,0.502,0.502,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.instance_7 = new lib.rainbow_mc();
	this.instance_7.setTransform(5.4,88.2);

	this.instance_8 = new lib.waterfall_cloud1_mc();
	this.instance_8.setTransform(-33.9,172,0.813,0.813);

	this.instance_9 = new lib.waterfall_cloud_mc();
	this.instance_9.setTransform(8.4,149);

	this.instance_10 = new lib.waterfall_mc();
	this.instance_10.setTransform(11.3,-81.5,0.812,1,0,0,180,-1.1,-119);

	this.instance_11 = new lib.waterfall_mc();
	this.instance_11.setTransform(-0.7,-79.4,0.812,1,0,0,0,-1.1,-119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Слой 1
	this.instance_12 = new lib.background_6_img();
	this.instance_12.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-483.6,1200,783.6);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lepestok1_3_mc();
	this.instance.setTransform(393,-316.4,0.469,0.469);

	this.instance_1 = new lib.lepestok2_1_mc();
	this.instance_1.setTransform(381.5,-329.4,0.469,0.469);

	this.instance_2 = new lib.lepestok1_1_mc();
	this.instance_2.setTransform(358.5,-339.5,0.469,0.469);

	this.instance_3 = new lib.lepestok2_3_mc();
	this.instance_3.setTransform(339.7,-332.2,0.469,0.469);

	this.instance_4 = new lib.lepestok1_1_mc();
	this.instance_4.setTransform(314.4,-322.1,0.469,0.469,0,0,180);

	this.instance_5 = new lib.lepestok2_1_mc();
	this.instance_5.setTransform(288.7,-359.8,0.469,0.469);

	this.instance_6 = new lib.lepestok1_3_mc();
	this.instance_6.setTransform(258.7,-336.6,0.469,0.469,0,0,180);

	this.instance_7 = new lib.lepestok2_1_mc();
	this.instance_7.setTransform(243.6,-325.1,0.469,0.469,0,0,180);

	this.instance_8 = new lib.lepestok1_1_mc();
	this.instance_8.setTransform(224.4,-315,0.469,0.469);

	this.instance_9 = new lib.lepestok2_3_mc();
	this.instance_9.setTransform(212.9,-327.9,0.469,0.469);

	this.instance_10 = new lib.lepestok1_1_mc();
	this.instance_10.setTransform(189.9,-338,0.469,0.469);

	this.instance_11 = new lib.lepestok2_1_mc();
	this.instance_11.setTransform(171.1,-300.8,0.469,0.469);

	this.instance_12 = new lib.lepestok1_3_mc();
	this.instance_12.setTransform(145.8,-320.7,0.469,0.469);

	this.instance_13 = new lib.lepestok1_3_mc();
	this.instance_13.setTransform(127.6,-315.7,0.469,0.469);

	this.instance_14 = new lib.lepestok2_1_mc();
	this.instance_14.setTransform(101.9,-324.4,0.469,0.469);

	this.instance_15 = new lib.lepestok1_1_mc();
	this.instance_15.setTransform(71.9,-330.3,0.469,0.469);

	this.instance_16 = new lib.lepestok2_3_mc();
	this.instance_16.setTransform(56.9,-318.8,0.469,0.469);

	this.instance_17 = new lib.lepestok1_1_mc();
	this.instance_17.setTransform(37.6,-308.7,0.469,0.469);

	this.instance_18 = new lib.lepestok2_1_mc();
	this.instance_18.setTransform(26.1,-356.6,0.469,0.469,0,0,180);

	this.instance_19 = new lib.lepestok1_3_mc();
	this.instance_19.setTransform(3.1,-331.7,0.469,0.469);

	this.instance_20 = new lib.lepestok2_1_mc();
	this.instance_20.setTransform(-15.7,-324.4,0.469,0.469);

	this.instance_21 = new lib.lepestok1_4_mc();
	this.instance_21.setTransform(-41,-314.3,0.469,0.469);

	this.instance_22 = new lib.lepestok2_3_mc();
	this.instance_22.setTransform(-63.4,-324.4,0.469,0.469,0,0,180);

	this.instance_23 = new lib.lepestok1_3_mc();
	this.instance_23.setTransform(-93.4,-330.3,0.469,0.469);

	this.instance_24 = new lib.lepestok2_1_mc();
	this.instance_24.setTransform(-108.4,-318.8,0.469,0.469);

	this.instance_25 = new lib.lepestok1_3_mc();
	this.instance_25.setTransform(-127.7,-308.7,0.469,0.469);

	this.instance_26 = new lib.lepestok2_1_mc();
	this.instance_26.setTransform(-139.2,-291.6,0.469,0.469,0,0,180);

	this.instance_27 = new lib.lepestok1_1_mc();
	this.instance_27.setTransform(-162.2,-331.7,0.469,0.469);

	this.instance_28 = new lib.lepestok2_3_mc();
	this.instance_28.setTransform(-181,-324.4,0.469,0.469);

	this.instance_29 = new lib.lepestok1_1_mc();
	this.instance_29.setTransform(-206.3,-314.3,0.469,0.469);

	this.instance_30 = new lib.lepestok2_1_mc();
	this.instance_30.setTransform(-232,-337,0.469,0.469,0,0,180);

	this.instance_31 = new lib.lepestok1_3_mc();
	this.instance_31.setTransform(-262,-328.9,0.469,0.469);

	this.instance_32 = new lib.lepestok1_4_mc();
	this.instance_32.setTransform(-277.1,-317.4,0.469,0.469);

	this.instance_33 = new lib.lepestok1_1_mc();
	this.instance_33.setTransform(-296.3,-307.3,0.469,0.469);

	this.instance_34 = new lib.lepestok2_3_mc();
	this.instance_34.setTransform(-307.8,-320.2,0.469,0.469,0,0,180);

	this.instance_35 = new lib.lepestok1_4_mc();
	this.instance_35.setTransform(-330.8,-330.3,0.469,0.469);

	this.instance_36 = new lib.lepestok2_1_mc();
	this.instance_36.setTransform(-349.6,-323,0.469,0.469);

	this.instance_37 = new lib.lepestok1_3_mc();
	this.instance_37.setTransform(-374.9,-312.9,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_38 = new lib.item5_41_mc();
	this.instance_38.setTransform(301,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1));

	// graph
	this.instance_39 = new lib.ray2_mc();
	this.instance_39.setTransform(246.4,55.2,0.721,1,153.5,0,0,-0.1,-277.9);
	this.instance_39.alpha = 0.371;

	this.instance_40 = new lib.ray2_mc();
	this.instance_40.setTransform(234.6,68.6,0.482,1,114.1,0,0,-0.2,-278.1);
	this.instance_40.alpha = 0.371;

	this.instance_41 = new lib.ray2_mc();
	this.instance_41.setTransform(269.1,56.3,0.768,1,0,-159.1,-159.5,0.1,-278.1);
	this.instance_41.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39}]}).wait(1));

	// graph
	this.instance_42 = new lib.background_5_img();
	this.instance_42.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-532.3,1206.3,832.4);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.ray2_mc();
	this.instance.setTransform(175,-403.6,0.721,1,-15,0,0,-0.1,-278);

	this.instance_1 = new lib.ray2_mc();
	this.instance_1.setTransform(16,-495.6,0.482,1,-9.2,0,0,0.1,-278.1);

	this.instance_2 = new lib.ray2_mc();
	this.instance_2.setTransform(3,-355,0.482,1,15,0,0,0,-278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_3 = new lib.rainbow_mc();
	this.instance_3.setTransform(150,-12,0.566,0.566,0,0,180);

	this.instance_4 = new lib.rainbow_mc();
	this.instance_4.setTransform(-178,-172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 7
	this.instance_5 = new lib.leaf4_mc();
	this.instance_5.setTransform(224,-336,0.738,0.738);

	this.instance_6 = new lib.leaf3_mc();
	this.instance_6.setTransform(-28.8,-354,0.485,0.485,0,0,180);

	this.instance_7 = new lib.leaf2_mc();
	this.instance_7.setTransform(-173,-329.1,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 6
	this.instance_8 = new lib.leaf1_mc();
	this.instance_8.setTransform(223.1,170.9,0.413,0.413,0,0,180);

	this.instance_9 = new lib.leaf1_mc();
	this.instance_9.setTransform(-113,196.3,0.522,0.522);

	this.instance_10 = new lib.leaf1_mc();
	this.instance_10.setTransform(6,204.9,0.738,0.738);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_11 = new lib.waterfall_cloud_mc();
	this.instance_11.setTransform(134,-130,0.37,0.468,0,0,180);

	this.instance_12 = new lib.waterfall_cloud_mc();
	this.instance_12.setTransform(113,31,0.468,0.468,0,0,180);

	this.instance_13 = new lib.waterfall_cloud_mc();
	this.instance_13.setTransform(-339.9,113.9);

	this.instance_14 = new lib.waterfall_cloud_mc();
	this.instance_14.setTransform(-339.9,113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// Слой 2
	this.instance_15 = new lib.waterfall_mc();
	this.instance_15.setTransform(134.8,-181.2,0.383,0.383);

	this.instance_16 = new lib.waterfall_mc();
	this.instance_16.setTransform(118,2.3,0.468,0.373,0,0,180);

	this.instance_17 = new lib.waterfall_mc();
	this.instance_17.setTransform(-328.9,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// Слой 1
	this.instance_18 = new lib.background_4_img();
	this.instance_18.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-531.2,1200,831.3);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.butt1_mc();
	this.instance.setTransform(-22.6,93.3,0.323,0.323,-45);

	this.instance_1 = new lib.butt1_mc();
	this.instance_1.setTransform(-247.5,-125.2,0.323,0.323,-90);

	this.instance_2 = new lib.butt1_mc();
	this.instance_2.setTransform(224,-83.2,0.323,0.323,45);

	this.instance_3 = new lib.butt1_mc();
	this.instance_3.setTransform(288.8,133.9,0.502,0.502,-45);

	this.instance_4 = new lib.butt1_mc();
	this.instance_4.setTransform(25.3,-137.3,0.502,0.502,-90);

	this.instance_5 = new lib.butt1_mc();
	this.instance_5.setTransform(-319.7,121.9,0.502,0.502,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_6 = new lib.snow_mc();
	this.instance_6.setTransform(-329.7,-126.3,0.306,0.306,0,0,0,103.9,103.9);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.snow_mc();
	this.instance_7.setTransform(119.3,21.8,0.285,0.285,0,0,0,104.1,104.1);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.snow_mc();
	this.instance_8.setTransform(167.2,-152.7,0.286,0.286,0,0,0,104,104);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.snow_mc();
	this.instance_9.setTransform(-165.3,-172.1,0.276,0.276,0,0,0,104.1,104.1);
	this.instance_9.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 1
	this.instance_10 = new lib.background_3_img();
	this.instance_10.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.decor2_img();
	this.instance.setTransform(-491.4,132.4);

	this.instance_1 = new lib.decor1_img();
	this.instance_1.setTransform(162.5,198.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.luch2_mc();
	this.instance_2.setTransform(-53,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-337.9,77,1,1,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(176.1,-81.9,0.729,0.729,0,0,0,0.6,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(108,28,0.818,0.818,0,0,0,0.5,0.5);

	this.instance_6 = new lib.blesk_anim_mc();
	this.instance_6.setTransform(-165,-271,0.545,0.545,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 1
	this.instance_7 = new lib.background_2_img();
	this.instance_7.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-483.6,1200,784);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.luch2_mc();
	this.instance.setTransform(-53,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.item1_3_img();
	this.instance_1.setTransform(-407.5,-299);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.clouds_mc();
	this.instance_2.setTransform(-316,-257);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1091.5,-483.6,1691.6,783.6);
p.frameBounds = [rect];


(lib.animation_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.title_win_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({scaleX:0.5,scaleY:0.5,x:0.3,y:0.3},0).to({scaleX:1.2,scaleY:1.2,x:0.6,y:0.6,alpha:1},10).to({scaleX:1,scaleY:1,x:0.5,y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-90,480,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-120,-45,240,90), new cjs.Rectangle(-136.7,-51.2,273.6,102.6), new cjs.Rectangle(-153.5,-57.5,307.2,115.2), new cjs.Rectangle(-170.4,-63.8,340.8,127.8), new cjs.Rectangle(-187.1,-70.1,374.4,140.4), new cjs.Rectangle(-203.9,-76.4,408,153), new cjs.Rectangle(-220.7,-82.7,441.6,165.6), new cjs.Rectangle(-237.5,-89,475.2,178.2), new cjs.Rectangle(-254.3,-95.3,508.8,190.8), new cjs.Rectangle(-271.1,-101.6,542.4,203.4), new cjs.Rectangle(-288,-108,576,216), new cjs.Rectangle(-278.3,-104.3,556.8,208.8), new cjs.Rectangle(-268.7,-100.7,537.6,201.6), new cjs.Rectangle(-259.1,-97.1,518.4,194.4), new cjs.Rectangle(-249.5,-93.5,499.2,187.2), new cjs.Rectangle(-240,-90,480,180)];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,-399.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:50.5},11).to({y:0.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-510,520,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,-469.1,520,220), new cjs.Rectangle(-260,-428.2,520,220), new cjs.Rectangle(-260,-387.2,520,220), new cjs.Rectangle(-260,-346.3,520,220), new cjs.Rectangle(-260,-305.4,520,220), new cjs.Rectangle(-260,-264.5,520,220), new cjs.Rectangle(-260,-223.6,520,220), new cjs.Rectangle(-260,-182.7,520,220), new cjs.Rectangle(-260,-141.8,520,220), new cjs.Rectangle(-260,-100.9,520,220), new cjs.Rectangle(-260,-60,520,220), new cjs.Rectangle(-260,-72.5,520,220), new cjs.Rectangle(-260,-85,520,220), new cjs.Rectangle(-260,-97.5,520,220), new cjs.Rectangle(-260,-110,520,220)];


(lib.animation_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.title_loss_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:0.5,scaleY:0.5,x:0.3,y:0.3},0).to({scaleX:1.17,scaleY:1.17,x:0.6,y:0.6,alpha:1},10).to({scaleX:1,scaleY:1,x:0.5,y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-140,500,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125,-70,250,140), new cjs.Rectangle(-141.6,-79.2,283.4,158.7), new cjs.Rectangle(-158.3,-88.6,316.7,177.3), new cjs.Rectangle(-174.9,-97.9,350,196), new cjs.Rectangle(-191.6,-107.2,383.4,214.7), new cjs.Rectangle(-208.2,-116.6,416.7,233.3), new cjs.Rectangle(-225,-125.9,450,252), new cjs.Rectangle(-241.6,-135.2,483.4,270.7), new cjs.Rectangle(-258.2,-144.5,516.7,289.3), new cjs.Rectangle(-275,-153.9,550,308), new cjs.Rectangle(-291.6,-163.3,583.3,326.6), new cjs.Rectangle(-283.2,-158.5,566.7,317.3), new cjs.Rectangle(-274.9,-153.9,550,308), new cjs.Rectangle(-266.6,-149.2,533.3,298.7), new cjs.Rectangle(-258.3,-144.6,516.7,289.3), new cjs.Rectangle(-250,-140,500,280)];


(lib.animation_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.title_help_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.64,scaleY:0.64,x:0.3,y:0.3},0).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-210,580,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-184.5,-133.6,369.1,267.2), new cjs.Rectangle(-195,-141.2,390.2,282.5), new cjs.Rectangle(-205.5,-148.8,411.3,297.8), new cjs.Rectangle(-216.1,-156.4,432.4,313), new cjs.Rectangle(-226.6,-164.1,453.5,328.3), new cjs.Rectangle(-237.2,-171.7,474.6,343.6), new cjs.Rectangle(-247.7,-179.3,495.7,358.9), new cjs.Rectangle(-258.3,-187,516.7,374.2), new cjs.Rectangle(-268.8,-194.6,537.8,389.5), new cjs.Rectangle(-279.3,-202.2,558.9,404.7), new cjs.Rectangle(-290,-210,580,420)];


(lib.animation_plus_timer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// animation
	this.instance = new lib.plus_timer_mc();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-60,alpha:0.102},0).to({scaleX:0.75,scaleY:0.75,y:-70,alpha:1},13).to({scaleX:0.5,scaleY:0.5,y:-150,alpha:0.012},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-20,-80,40,40), new cjs.Rectangle(-20.7,-81.5,41.6,41.6), new cjs.Rectangle(-21.5,-83,43.1,43.1), new cjs.Rectangle(-22.3,-84.6,44.6,44.6), new cjs.Rectangle(-23,-86.1,46.2,46.2), new cjs.Rectangle(-23.8,-87.6,47.7,47.7), new cjs.Rectangle(-24.6,-89.2,49.3,49.3), new cjs.Rectangle(-25.3,-90.7,50.8,50.8), new cjs.Rectangle(-26.1,-92.3,52.3,52.3), new cjs.Rectangle(-26.9,-93.8,53.9,53.9), new cjs.Rectangle(-27.6,-95.3,55.4,55.4), new cjs.Rectangle(-28.4,-96.9,56.9,56.9), new cjs.Rectangle(-29.2,-98.4,58.5,58.5), new cjs.Rectangle(-30,-100,60,60), new cjs.Rectangle(-29.3,-104.6,58.7,58.6), new cjs.Rectangle(-28.6,-109.2,57.4,57.4), new cjs.Rectangle(-27.9,-113.9,56,56), new cjs.Rectangle(-27.3,-118.6,54.7,54.7), new cjs.Rectangle(-26.6,-123.3,53.4,53.4), new cjs.Rectangle(-25.9,-127.9,52,52), new cjs.Rectangle(-25.3,-132.6,50.7,50.7), new cjs.Rectangle(-24.6,-137.3,49.3,49.4), new cjs.Rectangle(-23.9,-141.9,48,48), new cjs.Rectangle(-23.3,-146.6,46.7,46.6), new cjs.Rectangle(-22.6,-151.3,45.3,45.4), new cjs.Rectangle(-21.9,-155.9,44,44), new cjs.Rectangle(-21.3,-160.6,42.7,42.7), new cjs.Rectangle(-20.6,-165.3,41.3,41.4), new cjs.Rectangle(-20,-170,40,40)];


(lib.animation_minus_timer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// animation
	this.instance = new lib.minus_timer_mc();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-60,alpha:0.102},0).to({scaleX:0.75,scaleY:0.75,y:-70,alpha:1},13).to({scaleX:0.63,scaleY:0.63,y:-150,alpha:0.012},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-20,-80,40,40), new cjs.Rectangle(-20.7,-81.5,41.6,41.6), new cjs.Rectangle(-21.5,-83,43.1,43.1), new cjs.Rectangle(-22.3,-84.6,44.6,44.6), new cjs.Rectangle(-23,-86.1,46.2,46.2), new cjs.Rectangle(-23.8,-87.6,47.7,47.7), new cjs.Rectangle(-24.6,-89.2,49.3,49.3), new cjs.Rectangle(-25.3,-90.7,50.8,50.8), new cjs.Rectangle(-26.1,-92.3,52.3,52.3), new cjs.Rectangle(-26.9,-93.8,53.9,53.9), new cjs.Rectangle(-27.6,-95.3,55.4,55.4), new cjs.Rectangle(-28.4,-96.9,56.9,56.9), new cjs.Rectangle(-29.2,-98.4,58.5,58.5), new cjs.Rectangle(-30,-100,60,60), new cjs.Rectangle(-29.6,-105,59.4,59.4), new cjs.Rectangle(-29.3,-109.9,58.7,58.7), new cjs.Rectangle(-28.9,-114.9,58,58), new cjs.Rectangle(-28.6,-119.9,57.4,57.4), new cjs.Rectangle(-28.3,-124.9,56.7,56.7), new cjs.Rectangle(-27.9,-129.9,56,56), new cjs.Rectangle(-27.6,-135,55.4,55.4), new cjs.Rectangle(-27.3,-139.9,54.7,54.6), new cjs.Rectangle(-26.9,-144.9,54,54), new cjs.Rectangle(-26.6,-150,53.4,53.4), new cjs.Rectangle(-26.3,-154.9,52.7,52.7), new cjs.Rectangle(-25.9,-159.9,52,52), new cjs.Rectangle(-25.6,-165,51.4,51.4), new cjs.Rectangle(-25.3,-169.9,50.7,50.6), new cjs.Rectangle(-25,-175,50,50)];


(lib.animation_found_list_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// animation
	this.instance = new lib.found_list_mc();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-60,alpha:0.102},0).to({scaleX:0.75,scaleY:0.75,y:-70,alpha:1},13).to({scaleX:0.5,scaleY:0.5,y:-200,alpha:0.199},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-20,-80,40,40), new cjs.Rectangle(-20.7,-81.5,41.6,41.6), new cjs.Rectangle(-21.5,-83,43.1,43.1), new cjs.Rectangle(-22.3,-84.6,44.6,44.6), new cjs.Rectangle(-23,-86.1,46.2,46.2), new cjs.Rectangle(-23.8,-87.6,47.7,47.7), new cjs.Rectangle(-24.6,-89.2,49.3,49.3), new cjs.Rectangle(-25.3,-90.7,50.8,50.8), new cjs.Rectangle(-26.1,-92.3,52.3,52.3), new cjs.Rectangle(-26.9,-93.8,53.9,53.9), new cjs.Rectangle(-27.6,-95.3,55.4,55.4), new cjs.Rectangle(-28.4,-96.9,56.9,56.9), new cjs.Rectangle(-29.2,-98.4,58.5,58.5), new cjs.Rectangle(-30,-100,60,60), new cjs.Rectangle(-29.5,-104.7,59.2,59.2), new cjs.Rectangle(-29.1,-109.5,58.4,58.4), new cjs.Rectangle(-28.7,-114.3,57.6,57.6), new cjs.Rectangle(-28.3,-119.1,56.8,56.8), new cjs.Rectangle(-27.9,-123.9,56,56), new cjs.Rectangle(-27.5,-128.7,55.2,55.2), new cjs.Rectangle(-27.1,-133.5,54.4,54.4), new cjs.Rectangle(-26.7,-138.3,53.6,53.6), new cjs.Rectangle(-26.3,-143.1,52.8,52.8), new cjs.Rectangle(-25.9,-147.9,52,52), new cjs.Rectangle(-25.5,-152.7,51.2,51.2), new cjs.Rectangle(-25.1,-157.5,50.4,50.4), new cjs.Rectangle(-24.7,-162.3,49.6,49.6), new cjs.Rectangle(-24.3,-167.1,48.8,48.8), new cjs.Rectangle(-23.9,-171.9,48,48), new cjs.Rectangle(-23.5,-176.7,47.2,47.2), new cjs.Rectangle(-23.1,-181.5,46.4,46.4), new cjs.Rectangle(-22.7,-186.3,45.6,45.6), new cjs.Rectangle(-22.3,-191.1,44.8,44.8), new cjs.Rectangle(-21.9,-195.9,44,44), new cjs.Rectangle(-21.5,-200.7,43.2,43.2), new cjs.Rectangle(-21.1,-205.5,42.4,42.4), new cjs.Rectangle(-20.7,-210.3,41.6,41.6), new cjs.Rectangle(-20.3,-215.1,40.8,40.8), new cjs.Rectangle(-20,-220,40,40)];


(lib.anemo1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.anemo1_3_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},20).to({alpha:0.012},20).to({_off:true},1).wait(10));

	// Слой 1
	this.instance_1 = new lib.anemo1_2_img();
	this.instance_1.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,10.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-100,520,220);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:59,end:99});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.curtain_7_mc();
	this.instance.setTransform(-400,400);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:0,y:0},15).wait(54).to({x:-400,y:400},10).to({_off:true},1).wait(1));

	// decor
	this.instance_1 = new lib.curtain_6_mc();
	this.instance_1.setTransform(400,400);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:0,y:0},15).wait(54).to({x:400,y:400},10).to({_off:true},1).wait(1));

	// decor
	this.instance_2 = new lib.curtain_5_mc();
	this.instance_2.setTransform(400,-400);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:0,y:0},15).wait(54).to({x:400,y:-400},10).to({_off:true},1).wait(1));

	// decor
	this.instance_3 = new lib.curtain_4_mc();
	this.instance_3.setTransform(-400,-400);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({x:0,y:0},15).wait(54).to({x:-400,y:-400},10).to({_off:true},1).wait(1));

	// title
	this.instance_4 = new lib.curtain_3_mc();
	this.instance_4.setTransform(400,300,0.833,0.833);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:400.1,y:300.1,alpha:0.801},16).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:300,alpha:1},4).wait(20).to({alpha:0.012},10).to({_off:true},1).wait(20));

	// curtain
	this.instance_5 = new lib.curtain_1_mc();
	this.instance_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-400,2000,1400), new cjs.Rectangle(-573.3,-373.3,1946.7,1346.7), new cjs.Rectangle(-546.6,-346.6,1893.3,1293.3), new cjs.Rectangle(-520,-320,1840,1240), new cjs.Rectangle(-493.3,-293.3,1786.7,1186.7), new cjs.Rectangle(-466.6,-266.6,1733.3,1133.3), new cjs.Rectangle(-440,-240,1680,1080), new cjs.Rectangle(-413.3,-213.3,1626.7,1026.7), new cjs.Rectangle(-386.6,-186.6,1573.3,973.3), new cjs.Rectangle(-360,-160,1520,920), new cjs.Rectangle(-333.3,-133.3,1466.7,866.7), new cjs.Rectangle(-306.6,-106.6,1413.3,813.3), new cjs.Rectangle(-280,-80,1360,760), new cjs.Rectangle(-253.3,-53.3,1306.7,706.7), new cjs.Rectangle(-226.6,-26.6,1253.3,653.3), rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-240,-40,1280,680), new cjs.Rectangle(-280,-80,1360,760), new cjs.Rectangle(-320,-120,1440,840), new cjs.Rectangle(-360,-160,1520,920), new cjs.Rectangle(-400,-200,1600,1000), new cjs.Rectangle(-440,-240,1680,1080), new cjs.Rectangle(-480,-280,1760,1160), new cjs.Rectangle(-520,-320,1840,1240), new cjs.Rectangle(-560,-360,1920,1320), new cjs.Rectangle(-600,-400,2000,1400), null];


(lib.copyright_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.copyright_body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.copyright_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.copyright_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_3_mc();
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.white_sparkle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.white_sparkle_2_mc();
	this.instance.setTransform(0,0,0.419,0.419,-75);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0,alpha:1},14).to({scaleX:0.16,scaleY:0.16,rotation:90},15).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.8,-12.8,25.6,25.6);
p.frameBounds = [rect, new cjs.Rectangle(-14.7,-14.8,29.6,29.6), new cjs.Rectangle(-16.7,-16.7,33.4,33.4), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-20.4,-20.4,40.8,40.8), new cjs.Rectangle(-22,-22.1,44.2,44.2), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-24.8,-24.8,49.7,49.7), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.5,-26.5,53.2,53.2), new cjs.Rectangle(-26.9,-26.9,54,54), new cjs.Rectangle(-27,-27,54.2,54.2), new cjs.Rectangle(-26.7,-26.7,53.5,53.5), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-25,-25,50,50), new cjs.Rectangle(-25.8,-25.8,51.8,51.8), new cjs.Rectangle(-26.2,-26.2,52.6,52.6), new cjs.Rectangle(-26.1,-26.1,52.3,52.3), new cjs.Rectangle(-25.5,-25.5,51.1,51.1), new cjs.Rectangle(-24.5,-24.5,49.1,49.1), new cjs.Rectangle(-23.1,-23.1,46.3,46.3), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-19.4,-19.4,38.9,38.9), new cjs.Rectangle(-17.3,-17.2,34.6,34.6), new cjs.Rectangle(-15,-14.9,30,30), new cjs.Rectangle(-12.7,-12.6,25.3,25.3), new cjs.Rectangle(-10.3,-10.3,20.6,20.6), new cjs.Rectangle(-8,-8,16.1,16.1), new cjs.Rectangle(-5.9,-5.9,11.9,11.9), new cjs.Rectangle(-4,-4,8,8), null];


(lib.simple_timer_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.simple_timer_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},14).to({alpha:1},25).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.simple_timer_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_0 = new lib.simple_timer_2_mc();
	this.char_0.setTransform(22,0);

	this.char_1 = new lib.simple_timer_2_mc();
	this.char_1.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_1},{t:this.char_0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-40,104,80);
p.frameBounds = [rect];


(lib.simple_timer_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_0 = new lib.simple_timer_2_mc();
	this.char_0.setTransform(22,0);

	this.char_1 = new lib.simple_timer_2_mc();
	this.char_1.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_1},{t:this.char_0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-40,104,80);
p.frameBounds = [rect];


(lib.simple_counter_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_mc = new lib.simple_counter_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.char_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.simple_counter_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_mc = new lib.simple_counter_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.char_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.simple_counter_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2023 edapskov v 1.0
		*/
		this.stop();
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _that = this;
		_that.current_uint = 0;
		_that.total_uint = 0;
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		_that.setValueFunc = function(current_num, total_num)
		{
			/*
			
			*/
			if(current_num !== undefined)
			{
				_that.current_uint = Math.floor(Number(current_num));
			}
			/*
			
			*/
			if(total_num !== undefined)
			{
				_that.total_uint = Math.floor(Number(total_num));
			}
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			_updateCharsFunc(_that.current_mc, _that.current_uint);
			_updateCharsFunc(_that.total_mc, _that.total_uint);
		}
		/*
		
		*/
		function _updateCharsFunc(target_mc, value_num)
		{
			target_mc.gotoAndStop(0);
			target_mc.char_mc.gotoAndStop(value_num);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.simple_counter_5_mc();

	this.total_mc = new lib.simple_counter_4_mc();
	this.total_mc.setTransform(56,0);

	this.current_mc = new lib.simple_counter_3_mc();
	this.current_mc.setTransform(-56,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.current_mc},{t:this.total_mc},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-40,172,80);
p.frameBounds = [rect];


(lib.red_sparkle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.red_sparkle_2_mc();
	this.instance.setTransform(0,0,0.419,0.419,-75);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0,alpha:1},14).to({scaleX:0.16,scaleY:0.16,rotation:90},15).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.8,-12.8,25.6,25.6);
p.frameBounds = [rect, new cjs.Rectangle(-14.7,-14.8,29.6,29.6), new cjs.Rectangle(-16.7,-16.7,33.4,33.4), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-20.4,-20.4,40.8,40.8), new cjs.Rectangle(-22,-22.1,44.2,44.2), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-24.8,-24.8,49.7,49.7), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.5,-26.5,53.2,53.2), new cjs.Rectangle(-26.9,-26.9,54,54), new cjs.Rectangle(-27,-27,54.2,54.2), new cjs.Rectangle(-26.7,-26.7,53.5,53.5), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-25,-25,50,50), new cjs.Rectangle(-25.8,-25.8,51.8,51.8), new cjs.Rectangle(-26.2,-26.2,52.6,52.6), new cjs.Rectangle(-26.1,-26.1,52.3,52.3), new cjs.Rectangle(-25.5,-25.5,51.1,51.1), new cjs.Rectangle(-24.5,-24.5,49.1,49.1), new cjs.Rectangle(-23.1,-23.1,46.3,46.3), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-19.4,-19.4,38.9,38.9), new cjs.Rectangle(-17.3,-17.2,34.6,34.6), new cjs.Rectangle(-15,-14.9,30,30), new cjs.Rectangle(-12.7,-12.6,25.3,25.3), new cjs.Rectangle(-10.3,-10.3,20.6,20.6), new cjs.Rectangle(-8,-8,16.1,16.1), new cjs.Rectangle(-5.9,-5.9,11.9,11.9), new cjs.Rectangle(-4,-4,8,8), null];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.FlashSecondAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.flash_second_1_mc();
	this.body_mc.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.FlashFirstAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.flash_first_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.sound_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.social_network_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickSocialNetworkMcFunc, false);
		/*
		
		*/
		var enSocialNetwork_arr = ["fb", "youtube", "twitter"];
		var ruSocialNetwork_arr = ["vk", "vk", "youtube"];
		var social_network_str = enSocialNetwork_arr[Math.floor(Math.random() * enSocialNetwork_arr.length)];
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			social_network_str = ruSocialNetwork_arr[Math.floor(Math.random() * ruSocialNetwork_arr.length)];
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		this.body_mc.gotoAndStop(social_network_str);
		/*
		
		*/
		function _onClickSocialNetworkMcFunc(event)
		{
			if(social_network_str == "fb")
			{
				window.open("https://facebook.com/dlgirlsgames", '_blank');
			}
			if(social_network_str == "vk")
			{
				window.open("https://vk.com/dlgirls", '_blank');
			}
			if(social_network_str == "youtube")
			{
				window.open("https://youtube.com/channel/UC7WA6wxCaCbCoLrQu-SbA8g", '_blank');
			}
			if(social_network_str == "twitter")
			{
				window.open("https://twitter.com/DLstudio_2012", '_blank');
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.social_network_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDjAAChChQCiChgBDiQABDjiiChQihChjjAAQjiAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_7_mc();
	this.instance.setTransform(97.9,45,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_1 = new lib.more_games_7_mc();
	this.instance_1.setTransform(127.2,56.6,1.553,1.553,0,0,0,3.5,3.9);

	this.instance_2 = new lib.more_games_7_mc();
	this.instance_2.setTransform(117.9,50.5,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_3 = new lib.more_games_7_mc();
	this.instance_3.setTransform(26.9,80,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_4 = new lib.more_games_7_mc();
	this.instance_4.setTransform(56.4,108.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_5 = new lib.more_games_7_mc();
	this.instance_5.setTransform(71.4,113.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_6 = new lib.more_games_11_mc();
	this.instance_6.setTransform(94.6,90.6,0.964,0.964,-15,0,0,22.1,10);

	this.instance_7 = new lib.more_games_13_mc();
	this.instance_7.setTransform(16,64.1,0.987,0.987,60,0,0,11.8,12);

	this.instance_8 = new lib.more_games_13_mc();
	this.instance_8.setTransform(64,100.6,1.051,1.051,0,0,0,11.9,11.9);

	this.instance_9 = new lib.more_games_12_img();
	this.instance_9.setTransform(10.7,37.7);

	this.instance_10 = new lib.more_games_14_mc();
	this.instance_10.setTransform(82,109.1,0.929,0.929,180,0,0,8.3,13.3);

	this.instance_11 = new lib.more_games_9_mc();
	this.instance_11.setTransform(79.8,80.3,1,1,0,0,0,41.1,30);

	this.instance_12 = new lib.more_games_15_mc();
	this.instance_12.setTransform(81.5,45.2,2.743,2.743,0,0,0,3.8,3.8);

	this.instance_13 = new lib.more_games_14_mc();
	this.instance_13.setTransform(53.4,48.6,1.196,1.196,150,0,0,8.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.more_games_11_img();
	this.instance_14.setTransform(95,33.3,0.897,0.897,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.more_games_4_img();
	this.instance_15.setTransform(26.4,5.4,0.339,0.339,-15);

	this.instance_16 = new lib.more_games_5_img();
	this.instance_16.setTransform(98.4,5.1,0.239,0.239,30);

	this.instance_17 = new lib.more_games_2_img();
	this.instance_17.setTransform(107,0,0.529,0.529,15);

	this.instance_18 = new lib.more_games_3_img();
	this.instance_18.setTransform(44.2,4.7,0.316,0.316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150.7,122.4);
p.frameBounds = [rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_12_mc();
	this.instance.setTransform(-4.8,-46.8,0.322,0.322,0,0,0,25,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.more_games_12_mc();
	this.instance_1.setTransform(-4.8,25.2,0.322,0.322,0,0,0,25,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(37));

	// animation
	this.instance_2 = new lib.more_games_12_mc();
	this.instance_2.setTransform(-45.1,-28.6,0.418,0.418,0,0,0,25,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.more_games_12_mc();
	this.instance_3.setTransform(17.9,11.3,0.418,0.418,0,0,0,25,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(48));

	// animation
	this.instance_4 = new lib.more_games_8_mc();
	this.instance_4.setTransform(38.3,-2.7,1,1,-105,0,0,24.9,33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({rotation:0,x:62.7,y:23.2},11,cjs.Ease.get(1)).wait(54).to({scaleX:0.69,scaleY:0.69,rotation:-105,x:34.8,y:7.2},12,cjs.Ease.get(-1)).to({_off:true},2).wait(8));

	// animation
	this.instance_5 = new lib.more_games_5_mc();
	this.instance_5.setTransform(0.2,-6.5,1.074,0.924,0,0,0,67.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({regX:67.2,scaleX:0.96,scaleY:0.83,y:-5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.57,y:-25.8},2).to({regX:67.1,scaleX:1.07,scaleY:0.07,y:-58.5},4).to({_off:true},1).wait(72).to({_off:false},0).to({scaleY:0.92,y:-6.5},7).to({y:-4.5},2).to({y:-6.5},2).wait(3));

	// animation
	this.instance_6 = new lib.more_games_3_mc();
	this.instance_6.setTransform(0.3,21.9,1.074,1.074,0,0,0,67.2,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2,y:20.3},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3,y:21.9},4,cjs.Ease.get(1)).wait(82).to({y:23.9},2).to({y:21.9},2).wait(3));

	// animation
	this.instance_7 = new lib.more_games_4_mc();
	this.instance_7.setTransform(3,2.2,0.815,0.685,0,0,0,75.3,61.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({scaleX:1,scaleY:0.84,x:3.5,y:-3.3},6).to({scaleY:1.09,y:-18.8},6,cjs.Ease.get(1)).to({scaleY:1,y:-13.3},2).wait(58).to({scaleY:0.88,y:-5.7},6).to({regX:75.4,scaleX:0.91,scaleY:0.79,y:1.4},7).to({_off:true},1).wait(7));

	// animation
	this.instance_8 = new lib.more_games_2_mc();
	this.instance_8.setTransform(0.3,6.9,1.074,1.074,0,0,0,67.2,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3},4,cjs.Ease.get(1)).wait(82).to({y:8.9},2).to({y:6.9},2).wait(3));

	// animation
	this.instance_9 = new lib.more_games_6_mc();
	this.instance_9.setTransform(0.2,-61.5,1.074,0.039,0,180,0,67.1,57.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({regY:57.1,scaleY:0.29,y:-72.8},5).wait(60).to({regY:57.5,scaleY:0.04,y:-61.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// graph
	this.instance_10 = new lib.more_games_10_mc();
	this.instance_10.setTransform(2.2,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-59.4,145,139.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-72.2,-59.3,144.9,139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-71.8,-58.9,144,139.1), new cjs.Rectangle(-70.3,-57.6,142.4,137.8), new cjs.Rectangle(-68,-55.4,140.1,135.6), new cjs.Rectangle(-67.6,-52.3,139.7,132.6), new cjs.Rectangle(-68,-55.5,140.1,135.7), new cjs.Rectangle(-70.4,-58.6,142.5,138.9), new cjs.Rectangle(-71.8,-59.5,144,139.7), new cjs.Rectangle(-72.3,-60.3,146.5,140.6), new cjs.Rectangle(-72.2,-61.3,148.7,141.6), new cjs.Rectangle(-72.2,-62.2,151.1,142.5), new cjs.Rectangle(-72.2,-64.6,151.1,144.8), new cjs.Rectangle(-72.2,-71.8,158.9,152), new cjs.Rectangle(-72.2,-77.7,164.1,158), new cjs.Rectangle(-72.2,-83.3,166.4,163.6), new cjs.Rectangle(-72.2,-89.6,166.5,169.9), new cjs.Rectangle(-72.2,-96,165.6,176.2), new cjs.Rectangle(-72.2,-95.9,164.1,176.2), new cjs.Rectangle(-72.2,-95.9,162.5,176.2), new cjs.Rectangle(-72.2,-95.9,161.1,176.2), new cjs.Rectangle(-72.2,-95.9,160.2,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-96,160.1,176.2), new cjs.Rectangle(-72.2,-95.1,160.6,175.4), new cjs.Rectangle(-72.2,-92.5,161.4,172.7), new cjs.Rectangle(-72.2,-88.1,162.1,168.3), new cjs.Rectangle(-72.2,-82,162.5,162.3), new cjs.Rectangle(-72.2,-74.2,162.4,154.4), new cjs.Rectangle(-72.2,-64.6,161.3,144.8), new cjs.Rectangle(-72.2,-62.2,158.6,142.5), new cjs.Rectangle(-72.2,-61.8,153.8,142), new cjs.Rectangle(-72.2,-61.4,148,141.6), new cjs.Rectangle(-72.2,-61,147.1,141.2), new cjs.Rectangle(-72.2,-60.6,146,140.8), new cjs.Rectangle(-72.2,-60.2,145,140.4), new cjs.Rectangle(-72.2,-59.8,144.9,140), new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.5), new cjs.Rectangle(-72.3,-57.4,145,137.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.6), rect=new cjs.Rectangle(-72.3,-59.4,145,139.6), rect, rect];


(lib.mini_play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.mini_play_icon_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-220,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.full_screen_1_mc();

	this.instance_1 = new lib.full_screen_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.free_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.free_games_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-5},5).to({y:0},5).to({y:-5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.free_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.free_games_3_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.free_games_1_mc();
	this.instance_1.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.credits_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.credits_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_play_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.83,scaleY:0.83,x:-5},10).to({x:5},10).to({scaleX:1,scaleY:1,x:0},10).wait(21));

	// bg
	this.instance_1 = new lib.banner_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(-50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_antiblocking_ads_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.antiblocking_ads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.title_antiblocking_ads_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(585,115);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// banner
	this.banner_mc = new lib.redirect_2_mc();
	this.banner_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,760);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(-130,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
p.frameBounds = [rect];


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-18.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-12,107,24);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(440,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(210,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(510,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(85,71.7,633.3,483.3);
p.frameBounds = [rect];


(lib.orientation_lock_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.InstructionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.instruction_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.instruction_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.wind_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gidro_mc();
	this.instance.setTransform(136,293,0.72,0.72,0,0,0,31,-0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},10).wait(141));

	// animation
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(189,429.9,0.82,0.82,0,0,0,31,-0.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},10).wait(131));

	// animation
	this.instance_2 = new lib.gidro_mc();
	this.instance_2.setTransform(577,407.9,0.82,0.82,0,0,0,31,-0.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({alpha:1},10).wait(111));

	// animation
	this.instance_3 = new lib.gidro_mc();
	this.instance_3.setTransform(386.3,493.3,1,1,0,0,0,31,-0.1);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({alpha:1},10).wait(121));

	// animation
	this.instance_4 = new lib.hero6_mc();
	this.instance_4.setTransform(-600,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:390},20).wait(161));

	// animation
	this.instance_5 = new lib.gidro_mc();
	this.instance_5.setTransform(421.1,75,0.52,0.52,0,0,0,31,-0.1);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({alpha:1},10).wait(81));

	// animation
	this.instance_6 = new lib.gidro_mc();
	this.instance_6.setTransform(306.1,75,0.52,0.52,0,0,0,31,-0.1);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({alpha:1},10).wait(71));

	// animation
	this.instance_7 = new lib.gidro_mc();
	this.instance_7.setTransform(514.8,160,0.64,0.64,0,0,0,30.9,-0.1);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({alpha:1},10).wait(91));

	// animation
	this.instance_8 = new lib.gidro_mc();
	this.instance_8.setTransform(209.8,170,0.64,0.64,0,0,0,30.9,-0.1);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({alpha:1},10).wait(151));

	// animation
	this.instance_9 = new lib.gidro_mc();
	this.instance_9.setTransform(622.3,260,0.72,0.72,0,0,0,31,-0.1);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({alpha:1},10).wait(101));

	// animation
	this.instance_10 = new lib.big_shadow_mc();
	this.instance_10.setTransform(-0.1,-1,1,1,0,0,0,-0.1,-1);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39).to({_off:false},0).to({alpha:0.398},10).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-964,0,727,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-914.5,0,727,600), new cjs.Rectangle(-865,0,727,600), new cjs.Rectangle(-815.5,0,727,600), new cjs.Rectangle(-766,0,727,600), new cjs.Rectangle(-716.5,0,727,600), new cjs.Rectangle(-667,0,727,600), new cjs.Rectangle(-617.5,0,727,600), new cjs.Rectangle(-568,0,727,600), new cjs.Rectangle(-518.5,0,727,600), new cjs.Rectangle(-469,0,727,600), new cjs.Rectangle(-419.5,0,727,600), new cjs.Rectangle(-370,0,727,600), new cjs.Rectangle(-320.5,0,727,600), new cjs.Rectangle(-271,0,727,600), new cjs.Rectangle(-221.5,0,727,600), new cjs.Rectangle(-172,0,727,600), new cjs.Rectangle(-122.5,0,727,600), new cjs.Rectangle(-73,0,727,600), new cjs.Rectangle(-23.5,0,727,600), rect=new cjs.Rectangle(-210,-10,1219.9,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wind_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.electro_mc();
	this.instance.setTransform(514.8,490.2,0.798,0.798,0,0,0,31,0.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},10).wait(111));

	// animation
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(324.8,495.2,0.798,0.798,0,0,0,31,0.2);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},10).wait(121));

	// animation
	this.instance_2 = new lib.electro_mc();
	this.instance_2.setTransform(663.8,370.1,0.768,0.768,0,0,0,30.9,0.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({alpha:1},10).wait(101));

	// animation
	this.instance_3 = new lib.electro_mc();
	this.instance_3.setTransform(182.7,410.2,0.728,0.728,0,0,0,31.1,0.2);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},10).wait(131));

	// animation
	this.instance_4 = new lib.hero5_mc();
	this.instance_4.setTransform(1350,327);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:380},20).wait(141));

	// animation
	this.instance_5 = new lib.electro_mc();
	this.instance_5.setTransform(526.4,140.1,0.529,0.529,0,0,0,31,0.2);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({alpha:1},10).wait(81));

	// animation
	this.instance_6 = new lib.electro_mc();
	this.instance_6.setTransform(351.4,170.1,0.529,0.529,0,0,0,31,0.2);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).to({alpha:1},10).wait(71));

	// animation
	this.instance_7 = new lib.electro_mc();
	this.instance_7.setTransform(663.5,220.1,0.599,0.599,0,0,0,30.9,0.1);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).to({alpha:1},10).wait(91));

	// animation
	this.instance_8 = new lib.electro_mc();
	this.instance_8.setTransform(239.9,284,0.599,0.599,0,0,0,30.9,0.1);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({_off:false},0).to({alpha:1},10).wait(61));

	// animation
	this.instance_9 = new lib.big_shadow_mc();
	this.instance_9.setTransform(-0.1,-1,1,1,0,0,0,-0.1,-1);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({alpha:0.398},10).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1011,51,678,551);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(962.5,51,678,551), new cjs.Rectangle(914,51,678,551), new cjs.Rectangle(865.5,51,678,551), new cjs.Rectangle(817,51,678,551), new cjs.Rectangle(768.5,51,678,551), new cjs.Rectangle(720,51,678,551), new cjs.Rectangle(671.5,51,678,551), new cjs.Rectangle(623,51,678,551), new cjs.Rectangle(574.5,51,678,551), new cjs.Rectangle(526,51,678,551), new cjs.Rectangle(477.5,51,678,551), new cjs.Rectangle(429,51,678,551), new cjs.Rectangle(380.5,51,678,551), new cjs.Rectangle(332,51,678,551), new cjs.Rectangle(283.5,51,678,551), new cjs.Rectangle(235,51,678,551), new cjs.Rectangle(186.5,51,678,551), new cjs.Rectangle(138,51,678,551), new cjs.Rectangle(89.5,51,678,551), rect=new cjs.Rectangle(-210,-10,1219.9,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wind_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.dendro_mc();
	this.instance.setTransform(227.6,399.9,0.89,0.89,0,0,0,31,-0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},10).wait(101));

	// animation
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(607.6,394.9,0.89,0.89,0,0,0,31,-0.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:1},10).wait(81));

	// animation
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(426,484.9,1,1,0,0,0,31,-0.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},10).wait(91));

	// animation
	this.instance_3 = new lib.hero4_mc();
	this.instance_3.setTransform(1250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({x:400},20).wait(121));

	// animation
	this.instance_4 = new lib.dendro_mc();
	this.instance_4.setTransform(538.3,170,0.59,0.59,0,0,0,31,-0.1);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:1},10).wait(61));

	// animation
	this.instance_5 = new lib.dendro_mc();
	this.instance_5.setTransform(288.3,160,0.59,0.59,0,0,0,31,-0.1);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({alpha:1},10).wait(51));

	// animation
	this.instance_6 = new lib.dendro_mc();
	this.instance_6.setTransform(153.7,249.9,0.76,0.76,0,0,0,31.1,-0.1);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({alpha:1},10).wait(111));

	// animation
	this.instance_7 = new lib.dendro_mc();
	this.instance_7.setTransform(673.7,254.9,0.76,0.76,0,0,0,31.1,-0.1);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).to({alpha:1},10).wait(71));

	// animation
	this.instance_8 = new lib.big_shadow_mc();
	this.instance_8.setTransform(-0.1,-1,1,1,0,0,0,-0.1,-1);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({alpha:0.398},10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1017,0,465,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(974.5,0,465,600), new cjs.Rectangle(932,0,465,600), new cjs.Rectangle(889.5,0,465,600), new cjs.Rectangle(847,0,465,600), new cjs.Rectangle(804.5,0,465,600), new cjs.Rectangle(762,0,465,600), new cjs.Rectangle(719.5,0,465,600), new cjs.Rectangle(677,0,465,600), new cjs.Rectangle(634.5,0,465,600), new cjs.Rectangle(592,0,465,600), new cjs.Rectangle(549.5,0,465,600), new cjs.Rectangle(507,0,465,600), new cjs.Rectangle(464.5,0,465,600), new cjs.Rectangle(422,0,465,600), new cjs.Rectangle(379.5,0,465,600), new cjs.Rectangle(337,0,465,600), new cjs.Rectangle(294.5,0,465,600), new cjs.Rectangle(252,0,465,600), new cjs.Rectangle(209.5,0,465,600), rect=new cjs.Rectangle(-210,-10,1219.9,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wind_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.dendro_mc();
	this.instance.setTransform(150.7,270,0.67,0.67,0,0,0,30.9,-0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},10).wait(91));

	// animation
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(635.7,290,0.67,0.67,0,0,0,30.9,-0.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:1},10).wait(61));

	// animation
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(493.9,409.9,0.93,0.93,0,0,0,31,-0.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},10).wait(71));

	// animation
	this.instance_3 = new lib.dendro_mc();
	this.instance_3.setTransform(241,439.9,1,1,0,0,0,31,-0.1);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({alpha:1},10).wait(81));

	// animation
	this.instance_4 = new lib.hero3_mc();
	this.instance_4.setTransform(1300,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:460},20).wait(101));

	// animation
	this.instance_5 = new lib.dendro_mc();
	this.instance_5.setTransform(536.1,170,0.52,0.52,0,0,0,30.9,-0.1);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({alpha:1},10).wait(51));

	// animation
	this.instance_6 = new lib.dendro_mc();
	this.instance_6.setTransform(271.1,160,0.52,0.52,0,0,0,30.9,-0.1);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({alpha:1},10).wait(41));

	// animation
	this.instance_7 = new lib.big_shadow_mc();
	this.instance_7.setTransform(-0.1,-1,1,1,0,0,0,-0.1,-1);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({alpha:0.398},10).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(999,24,602,581);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(957,24,602,581), new cjs.Rectangle(915,24,602,581), new cjs.Rectangle(873,24,602,581), new cjs.Rectangle(831,24,602,581), new cjs.Rectangle(789,24,602,581), new cjs.Rectangle(747,24,602,581), new cjs.Rectangle(705,24,602,581), new cjs.Rectangle(663,24,602,581), new cjs.Rectangle(621,24,602,581), new cjs.Rectangle(579,24,602,581), new cjs.Rectangle(537,24,602,581), new cjs.Rectangle(495,24,602,581), new cjs.Rectangle(453,24,602,581), new cjs.Rectangle(411,24,602,581), new cjs.Rectangle(369,24,602,581), new cjs.Rectangle(327,24,602,581), new cjs.Rectangle(285,24,602,581), new cjs.Rectangle(243,24,602,581), new cjs.Rectangle(201,24,602,581), rect=new cjs.Rectangle(-210,-10,1219.9,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wind_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.geo_mc();
	this.instance.setTransform(250,350,0.878,0.878);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},10).wait(61));

	// animation
	this.instance_1 = new lib.geo_mc();
	this.instance_1.setTransform(550,400,0.878,0.878);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},10).wait(51));

	// animation
	this.instance_2 = new lib.geo_mc();
	this.instance_2.setTransform(150,170,0.773,0.773);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({alpha:1},10).wait(71));

	// animation
	this.instance_3 = new lib.geo_mc();
	this.instance_3.setTransform(660,200,0.755,0.755);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({alpha:1},10).wait(41));

	// animation
	this.instance_4 = new lib.hero2_mc();
	this.instance_4.setTransform(-600,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:280},20).wait(81));

	// animation
	this.instance_5 = new lib.big_shadow_mc();
	this.instance_5.setTransform(-0.1,-1,1,1,0,0,0,-0.1,-1);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({alpha:0.398},10).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-981,0,762,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-937,0,762,600), new cjs.Rectangle(-893,0,762,600), new cjs.Rectangle(-849,0,762,600), new cjs.Rectangle(-805,0,762,600), new cjs.Rectangle(-761,0,762,600), new cjs.Rectangle(-717,0,762,600), new cjs.Rectangle(-673,0,762,600), new cjs.Rectangle(-629,0,762,600), new cjs.Rectangle(-585,0,762,600), new cjs.Rectangle(-541,0,762,600), new cjs.Rectangle(-497,0,762,600), new cjs.Rectangle(-453,0,762,600), new cjs.Rectangle(-409,0,762,600), new cjs.Rectangle(-365,0,762,600), new cjs.Rectangle(-321,0,762,600), new cjs.Rectangle(-277,0,762,600), new cjs.Rectangle(-233,0,762,600), new cjs.Rectangle(-189,0,762,600), new cjs.Rectangle(-145,0,762,600), rect=new cjs.Rectangle(-210,-10,1219.9,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// decor
	this.instance = new lib.mini_play_mc();
	this.instance.setTransform(0,120,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_title_start_level_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_start_level_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-140,360.5,305);
p.frameBounds = [rect];


(lib.tip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.tip_2_mc();

	this.instance_1 = new lib.tip_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_mc();

	this.instance_1 = new lib.location_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_6_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsbQuIpluSIgGkTIDloGISEpKIDkAQIPDGpID9HtIlgRBIxnGog");
	this.shape.setTransform(0.2,0.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-88,215,176);
p.frameBounds = [rect, new cjs.Rectangle(-141.3,-121.8,283,244.9), new cjs.Rectangle(-107.5,-88,215,176)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_mc();

	this.instance_1 = new lib.location_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_5_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A39M4MAgIghYIPyBrIivTQMgloAUHg");
	this.shape.setTransform(2.1,7.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-97,233,194);
p.frameBounds = [rect, new cjs.Rectangle(-151.3,-123.9,306.8,262.8), new cjs.Rectangle(-116.5,-97,233,194)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_mc();

	this.instance_1 = new lib.location_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_4_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5JPsIixpUIB6s+MAmUgQyIDEAhIJ0IZICvHbIhyQSMggEAOKg");
	this.shape.setTransform(0.4,-2.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-117,298,234);
p.frameBounds = [rect, new cjs.Rectangle(-178.3,-152.5,357.5,299.5), new cjs.Rectangle(-149,-117,298,234)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_mc();

	this.instance_1 = new lib.location_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_3_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0pQ6IiBy+IfJz/ICZAQIJ5ISIB6RnIolLeI0uGgg");
	this.shape.setTransform(-2.2,-0.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117,-108,233,216);
p.frameBounds = [rect, new cjs.Rectangle(-147.3,-141.6,290.3,282.6), new cjs.Rectangle(-117,-108,233,216)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_mc();

	this.instance_1 = new lib.location_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_2_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A89JgIg9nQMAgdgfSID5gRIUEKpIDbT0Is9UNIs/H9g");
	this.shape.setTransform(0,-2.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-158.5,327,317);
p.frameBounds = [rect, new cjs.Rectangle(-191.5,-190.5,383.2,375.3), new cjs.Rectangle(-163.5,-158.5,327,317)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_mc();

	this.instance_1 = new lib.location_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A9FJjIg+rsIPltVIZ0jMILyGBIG8TII90MMg");
	this.shape.setTransform(2.4,3.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-92,325,184);
p.frameBounds = [rect, new cjs.Rectangle(-190,-116.2,385,239.1), new cjs.Rectangle(-162.5,-92,325,184)];


(lib.list_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.simple_counter_comp = new lib.simple_counter_1_mc();
	this.simple_counter_comp.setTransform(0.2,0.2,0.625,0.625,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.simple_counter_comp).wait(1));

	// bg
	this.instance = new lib.list_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.animation_mc = new lib.animation_found_list_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.item6_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_121_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-1.6,-15.5,0.47,0.47,0,0,0,31.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.8,-109,229.4,217.8);
p.frameBounds = [rect, new cjs.Rectangle(-50,-68.7,104.5,103.6), null];


(lib.item6_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_10_img();
	this.instance.setTransform(-82.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-0.6,-35.5,0.66,0.66,0,0,0,31.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnoOgIEZj/IodjrIh5jlIFCiZIDDAsIiRjWIh6guIgsh1ICCk0IkDghIgghTIEKjEIESg2ICdBKIDliXIDBgnIC5BoIBOC4IEYARIAgASIgbB0IhqBTIAXEJIgMA0IiGAHIjaFGIGKAeIBIA8IhAHHIk1B5IEIDJIgMBVIyDAKg");
	this.shape.setTransform(0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.6,-110,174.1,217.5);
p.frameBounds = [rect, new cjs.Rectangle(-68.6,-110,146.6,145.4), null];


(lib.item6_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_9_img();
	this.instance.setTransform(-51.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-2.7,0.4,0.47,0.47,0,0,0,30.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDGEQiiihABjjQgBjiCiiiQChihDiAAQDjAAChChQChCiAADiQAADjihChQihCijjAAQjiAAihiig");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-51,-52.7,104.5,103.5), null];


(lib.item6_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_7_img();
	this.instance.setTransform(-86.5,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-8.5,3.4,0.62,0.62,0,0,0,30.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj/NRIiAjDIkbBNIgzgPIjNkvIDgpFIJEpLIB4gOIBTCAIE/isIGdguIBqFsIgcCBIimBhIhQESICICRIh+JRIkcAmIkAiPIhIC6IkIAkg");
	this.shape.setTransform(-1.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.8,-85.7,184.7,172.1);
p.frameBounds = [rect, new cjs.Rectangle(-72.3,-66.7,137.8,136.6), null];


(lib.item6_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_6_img();
	this.instance.setTransform(-43.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(0.4,6.4,0.38,0.38,0,0,0,31.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiYH7Ik9kTIgGn5ICUjyIKVDQICODIIhPF9IilDyg");
	this.shape.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.8,-51.4,95.3,103.3);
p.frameBounds = [rect, new cjs.Rectangle(-38.7,-36.5,84.4,83.7), null];


(lib.item6_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_5_img();
	this.instance.setTransform(-35,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-1.7,3.3,0.467,0.467,0,0,0,30.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmBFbIghkAID+p8IGxBrICWDQIhbFqIjwGKIlIAUg");
	this.shape.setTransform(0.3,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.6,-55.3,83.9,109.4);
p.frameBounds = [rect, new cjs.Rectangle(-49.6,-49.4,103.7,102.8), null];


(lib.item6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_4_img();
	this.instance.setTransform(-69,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-7.9,15.5,0.52,0.52,0,0,0,31.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoCJHIjflhIAJkPIFwjnIloAEIACgqICSkRIBhgTIDyCBIAEC8IBmgVIAMDnIFCgfIHTB1IBAAiIjKIug");
	this.shape.setTransform(1.5,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-62,147.8,120.8);
p.frameBounds = [rect, new cjs.Rectangle(-61.5,-43.2,115.6,114.6), null];


(lib.item6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_3_img();
	this.instance.setTransform(-29.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-4.6,-7.6,0.42,0.42,0,0,0,30.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmIB8ICZnpII8BRIA8HPImHC7g");
	this.shape.setTransform(-1.3,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.7,-38.7,78.8,73.4);
p.frameBounds = [rect, new cjs.Rectangle(-47.8,-55.1,93.4,92.6), null];


(lib.item6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item6_1_img();
	this.instance.setTransform(-80.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.gidro_mc();
	this.instance_1.setTransform(-5.7,6.4,0.52,0.52,0,0,0,30.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar3LUIhXhXIAZpZIDdo4IHFkGIBmAAIAXGIIDZj9IDUD3IBlmBIBIABIELJgIhsKeIlzCoIqLCNg");
	this.shape.setTransform(1.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.6,-80.4,169.5,159.2);
p.frameBounds = [rect, new cjs.Rectangle(-59.1,-52.4,115.6,114.6), null];


(lib.item5_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_10_2_img();
	this.instance.setTransform(-85,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-1.9,-19,0.562,0.562,0,0,0,31.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As9H8Igji3IDLp2ILooBIGAB9IFBF4IBNJhIq1GkIpEBrg");
	this.shape.setTransform(-2.7,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-88.8,174.2,164.3);
p.frameBounds = [rect, new cjs.Rectangle(-67.4,-88.8,134.1,141.6), null];


(lib.item5_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_8_img();
	this.instance.setTransform(-51,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-5.5,-11,0.473,0.473,0,0,0,31,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnlIVIAbs3IG5nOIHfAAIAYJDIiSOQImvAOg");
	this.shape.setTransform(5.8,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-80.3,105.5,152.9);
p.frameBounds = [rect, new cjs.Rectangle(-60.5,-69.7,112.8,119), null];


(lib.item5_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_7_img();
	this.instance.setTransform(-93.5,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-5,-15,0.572,0.572,0,0,0,31,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-88.5,187,177);
p.frameBounds = [rect, new cjs.Rectangle(-71.6,-86.1,136.5,144.1), null];


(lib.item5_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_6_img();
	this.instance.setTransform(-70,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-2,-8,0.423,0.423,0,0,0,31,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqRDoIEsrwIFBhOIK1EyIgHGfIsvHcg");
	this.shape.setTransform(0.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-58.8,140,119.9);
p.frameBounds = [rect, new cjs.Rectangle(-51.2,-60.5,100.9,106.5), null];


(lib.item5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_51_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-6,-4,0.592,0.592,0,0,0,31,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.2,-83.6,303.7,169.2);
p.frameBounds = [rect, new cjs.Rectangle(-74.9,-77.6,141.3,149.1), null];


(lib.item5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_4_img();
	this.instance.setTransform(-76,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-7.9,-5.4,0.512,0.512,0,0,0,31.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApAJIIjBolIDglLIINluIE7CFIHbKPIjmIZg");
	this.shape.setTransform(2,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-69.7,155.1,133.3);
p.frameBounds = [rect, new cjs.Rectangle(-67.6,-69.1,122.3,129.1), null];


(lib.item5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_2_img();
	this.instance.setTransform(-90,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-3,3,0.522,0.522,0,0,0,31,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AinLZIjuiCImzpIIgBh2ILep4IEIAgIKtJCIgFCnIm9JSIjcBkg");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-80.5,180,161);
p.frameBounds = [rect, new cjs.Rectangle(-63.8,-61.9,124.6,131.6), null];


(lib.item5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item5_1_img();
	this.instance.setTransform(-63,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(-3,-0.8,0.443,0.443,0,0,0,31.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApmDfIhSq8IHoiDIM3EOIBSHbInbGvIkWApg");
	this.shape.setTransform(0.3,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.4,-62.1,139.5,121.9);
p.frameBounds = [rect, new cjs.Rectangle(-54.5,-55.8,105.6,111.5), null];


(lib.item4_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_8_img();
	this.instance.setTransform(-56,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(-6.6,-44.6,0.61,0.61,0,0,0,31,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkXRuMgGSggnIJYi7IL7EpIqwfAg");
	this.shape.setTransform(3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.2,-113,136.5,228.3);
p.frameBounds = [rect, new cjs.Rectangle(-74.9,-116.7,147.7,139.1), null];


(lib.item4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_6_img();
	this.instance.setTransform(-39,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(-3.7,1.4,0.62,0.62,0,0,0,30.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmkKuIgvr6IICp0IDbBCIDKQfIjpEgg");
	this.shape.setTransform(-0.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-69.2,93.7,141.2);
p.frameBounds = [rect, new cjs.Rectangle(-73,-71.9,150.1,141.4), null];


(lib.item4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_5_img();
	this.instance.setTransform(-105,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(1.4,-12.6,0.63,0.63,0,0,0,31.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqBVIGspqIOElgIFZFUID1MrIFXC7Ij2CJIwVEog");
	this.shape.setTransform(0.4,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.8,-89.8,226.3,177.4);
p.frameBounds = [rect, new cjs.Rectangle(-69.1,-87,152.5,143.7), null];


(lib.item4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_4_img();
	this.instance.setTransform(-134.5,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(-14.6,-2.6,0.65,0.65,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxfPXIjloxIDQoYIEUhdIgGgPIhLk2ICphvID/BYICblnIDticICbB0ICpFdIEZgPICYBxIA3GEIFOhiIBYBBIDzKjIiHHEIoFBgg");
	this.shape.setTransform(0.2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.7,-114.7,269.8,216.2);
p.frameBounds = [rect, new cjs.Rectangle(-87.4,-79.4,157.4,148.3), null];


(lib.item4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_3_img();
	this.instance.setTransform(-90.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(-1.6,-9.6,0.53,0.53,0,0,0,31.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvLI4IAJg9IFwmvIAOnCIDti6ImNkmIAQhlIF1AGIE1DmIGJjcIHIAGIARCUIp6D7IF7FIIGTLfIugGrg");
	this.shape.setTransform(-0.3,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-99.9,194.6,197);
p.frameBounds = [rect, new cjs.Rectangle(-61,-72.2,128.3,120.9), null];


(lib.item4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_2_img();
	this.instance.setTransform(-56.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(4.4,6.4,0.503,0.503,0,0,0,31.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiSKWInQjTIJ9wLIE1hYIELCqIAISXg");
	this.shape.setTransform(-2.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.4,-68.7,122.4,134.7);
p.frameBounds = [rect, new cjs.Rectangle(-51.9,-53,121.7,114.7), null];


(lib.item4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item4_1_img();
	this.instance.setTransform(-109.5,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// body
	this.instance_1 = new lib.dendro_mc();
	this.instance_1.setTransform(17.4,-47.6,0.9,0.9,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AgqZuIg8hmIgbw+ItdmrIiXj/IgsnlIAuhWIFYg3IA0g6IiilDIAzheID4heIFlC/ICog0IgWlKIAcgLICqgMICyHAIFKnjID1gSIA7CmIkPM0IHNkVIBZD9IiyOVIhxDbIpNGMIAvKNIh1Dhg");
	this.shape.setTransform(2.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.1,-170.1,250.7,337.4);
p.frameBounds = [rect, new cjs.Rectangle(-83.3,-153.9,217.9,205.3), null];


(lib.item3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dendro_mc();
	this.instance.setTransform(0,0,0.61,0.61,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.2,-72,147.7,139.1);
p.frameBounds = [rect, null];


(lib.item3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_6_img();
	this.instance.setTransform(-119,-125);

	this.instance_1 = new lib.item3_61_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(-1.6,-5.6,0.64,0.64,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArQOsIDXlWIqIj0IhfiAICrnkIMspEIn2kxIAtiBIZVgmIAYBmIrTF6IPTLJIBGEmIjmFSIo0geIFBGGIkiGsIulAIg");
	this.shape.setTransform(-2.2,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.1,-125,249.8,266);
p.frameBounds = [rect, new cjs.Rectangle(-119,-125,238,266), null];


(lib.item3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_5_img();
	this.instance.setTransform(-81.5,-113.5);

	this.instance_1 = new lib.item3_51_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(-18.6,-30.6,0.54,0.54,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmQR2Incv8IGW0vICWgSISeTAIAPKrIuwIkg");
	this.shape.setTransform(-0.7,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.4,-123.2,175.5,244.9);
p.frameBounds = [rect, new cjs.Rectangle(-81.5,-113.5,163,227), null];


(lib.item3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_4_img();
	this.instance.setTransform(-166.5,-189);

	this.instance_1 = new lib.item3_41_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(-50.7,-113.6,0.67,0.67,0,0,0,30.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Az0brMgH7g1AINRlKIZRF8IPkQrIBZJTIukdGg");
	this.shape.setTransform(2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.6,-193.9,355.2,390.6);
p.frameBounds = [rect, new cjs.Rectangle(-166.5,-192.8,333,381.8), null];


(lib.item3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_3_img();
	this.instance.setTransform(-43.5,-50);

	this.instance_1 = new lib.item3_31_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(0.4,8.4,0.31,0.31,0,0,0,30.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AhlIfIl6jEIAmuGIOZAbIgQOuImzCOg");
	this.shape.setTransform(1.8,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-56.1,96.2,111.4);
p.frameBounds = [rect, new cjs.Rectangle(-43.5,-50,87,100), null];


(lib.item3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item3_1_img();
	this.instance.setTransform(-86,-140);

	this.instance_1 = new lib.item3_11_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(5.4,-46.6,0.63,0.63,0,0,0,31.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtGScIgWjVIDwmXIk7kxIgKhfIESvjIHep5IFaAEIMZSiIjoICIoRBAIipFHIE5HPIibFaIrSAhg");
	this.shape.setTransform(-0.2,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.8,-148.1,189.3,294);
p.frameBounds = [rect, new cjs.Rectangle(-86,-140,173.4,280), null];


(lib.item2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_71_mc();

	this.instance_1 = new lib.item2_73_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.geo_mc();
	this.instance_2.setTransform(-29.6,-4.6,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.3,-105.6,297.1,203.6);
p.frameBounds = [rect, rect, null];


(lib.item2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_5_img();
	this.instance.setTransform(-78.5,-66);

	this.instance_1 = new lib.item2_51_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.geo_mc();
	this.instance_2.setTransform(-0.6,-9.6,0.41,0.41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AraGsIAGtYIOYkiIGBB2ICWEHIgLKZIq8GHg");
	this.shape.setTransform(1.4,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-77.5,157,143.9);
p.frameBounds = [rect, new cjs.Rectangle(-78.5,-66,157,132), null];


(lib.item2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_3_img();
	this.instance.setTransform(-144,-68.5);

	this.instance_1 = new lib.item2_31_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.geo_mc();
	this.instance_2.setTransform(-19.6,2.4,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1RFSIAMsZIPbj8IYzJlICJDuIgYEpImlEFI8PAGg");
	this.shape.setTransform(6.4,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144,-75,288,143.6);
p.frameBounds = [rect, new cjs.Rectangle(-144,-68.5,288,137), null];


(lib.item2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item2_2_img();
	this.instance.setTransform(-170.5,-114);

	this.instance_1 = new lib.item2_21_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.geo_mc();
	this.instance_2.setTransform(11.4,6.4,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As1R0IulvfIBch3ILhDKIBkz+IBMhiIWALAICcJpIOsHFIgEBxIwQFTI38BAg");
	this.shape.setTransform(-2.5,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-178,-120.9,351.1,234.9);
p.frameBounds = [rect, new cjs.Rectangle(-170.5,-114,341,228), null];


(lib.item1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item1_5_img();
	this.instance.setTransform(-105,-41);

	this.instance_1 = new lib.i15_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-41,210,82);
p.frameBounds = [rect, rect];


(lib.item1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item1_4_img();
	this.instance.setTransform(-92.5,-87.5);

	this.instance_1 = new lib.i14_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKOFIo7pIIAnmXISnteILfEEIBeJ1IjWG2InNIPImGAzg");
	this.shape.setTransform(0.9,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.1,-99.8,206.1,190.6);
p.frameBounds = [rect, new cjs.Rectangle(-92.5,-87.5,185,175)];


(lib.item1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item1_1_img();
	this.instance.setTransform(-110.5,-107.5);

	this.instance_1 = new lib.i11_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnvPpInRqfIiDomIEBlDIR+nPILpSaIAeGbIwrGog");
	this.shape.setTransform(3.2,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.5,-108.5,222.9,216.1);
p.frameBounds = [rect, new cjs.Rectangle(-110.5,-107.5,221,215)];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.animation_title_help_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.animation_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// animation
	this.instance = new lib.title_start_level_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.55,scaleY:0.55,x:0.3,y:0.3},0).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-140.5,360.5,305);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-98.2,-76.3,196.7,166.4), new cjs.Rectangle(-103.6,-80.6,207.5,175.5), new cjs.Rectangle(-109,-84.7,218.5,184.8), new cjs.Rectangle(-114.4,-89,229.4,194), new cjs.Rectangle(-119.9,-93.3,240.3,203.3), new cjs.Rectangle(-125.4,-97.5,251.2,212.5), new cjs.Rectangle(-130.8,-101.7,262.2,221.8), new cjs.Rectangle(-136.3,-106,273.1,231.1), new cjs.Rectangle(-141.7,-110.2,284,240.2), new cjs.Rectangle(-147.2,-114.4,295,249.5), new cjs.Rectangle(-152.6,-118.7,305.9,258.7), new cjs.Rectangle(-158,-122.9,316.8,268), new cjs.Rectangle(-163.5,-127.2,327.7,277.2), new cjs.Rectangle(-169,-131.4,338.7,286.5), new cjs.Rectangle(-174.4,-135.6,349.6,295.7), new cjs.Rectangle(-180,-140,360.5,305)];


(lib.anemo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.anemo1_4_mc();
	this.instance.setTransform(-45,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2},19).to({y:0},20).wait(1));

	// animation
	this.instance_1 = new lib.anemo1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-3},19).to({y:0},20).wait(1));

	// animation
	this.instance_2 = new lib.anemo1_1_mc();
	this.instance_2.setTransform(55,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:25},19).to({y:23},20).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0DIPIga1MILemxIbnNFIB2N7IvwMaInoADg");
	this.shape.setTransform(5.7,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.3,-133.2,262.2,252.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(1000,600,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.white_sparkle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.loop = false;
		_body_mc.visible = false;
		/*
		
		*/
		var _timeOut_id;
		/*
		
		*/
		function _initAnimationBarbieStarFunc()
		{
			if(_timeOut_id != null)
			{
				clearTimeout(_timeOut_id);
			}
			timeOut_id = setTimeout(_startAnimationBarbieStarFunc, 1000 + (Math.random() * 2000));
		}
		/*
		
		*/
		function _startAnimationBarbieStarFunc()
		{
			try
			{
				/*
				
				*/
				_body_mc.gotoAndPlay(0);
				_body_mc.visible = true;
				/*
				
				*/
				_initAnimationBarbieStarFunc();
			}
			catch(event)
			{
				
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		_initAnimationBarbieStarFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.white_sparkle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.8,-12.8,25.6,25.6);
p.frameBounds = [rect];


(lib.simple_timer_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.simple_timer_6_mc();
	this.instance.setTransform(0,15);

	this.instance_1 = new lib.simple_timer_6_mc();
	this.instance_1.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-25,20,50);
p.frameBounds = [rect];


(lib.simple_timer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.stop();
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _that = this;
		_that.value_num = 0;
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		_that.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num !== undefined)
			{
				_that.value_num = Number(value_num);
			}
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			/*
			
			*/
			var minute_num = Math.floor(_that.value_num / 60);
			var second_num = _that.value_num % 60;
			/*
			
			*/
			_updateCharsFunc(_that.minute_mc, minute_num);
			_updateCharsFunc(_that.second_mc, second_num);
		}
		/*
		
		*/
		function _updateCharsFunc(target_mc, value_num)
		{
			target_mc.gotoAndStop(0);
			target_mc.char_0.gotoAndStop(value_num % 10);
			target_mc.char_1.gotoAndStop(Math.floor(value_num / 10));
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.simple_timer_7_mc();

	this.second_mc = new lib.simple_timer_4_mc();
	this.second_mc.setTransform(56,0);

	this.minute_mc = new lib.simple_timer_3_mc();
	this.minute_mc.setTransform(-56,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.minute_mc},{t:this.second_mc},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-40,216,80);
p.frameBounds = [rect];


(lib.red_sparkle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.loop = false;
		_body_mc.visible = false;
		/*
		
		*/
		var _timeOut_id;
		/*
		
		*/
		function _initAnimationBarbieStarFunc()
		{
			if(_timeOut_id != null)
			{
				clearTimeout(_timeOut_id);
			}
			timeOut_id = setTimeout(_startAnimationBarbieStarFunc, 1000 + (Math.random() * 2000));
		}
		/*
		
		*/
		function _startAnimationBarbieStarFunc()
		{
			try
			{
				/*
				
				*/
				_body_mc.gotoAndPlay(0);
				_body_mc.visible = true;
				/*
				
				*/
				_initAnimationBarbieStarFunc();
			}
			catch(event)
			{
				
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		_initAnimationBarbieStarFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.red_sparkle_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.8,-12.8,25.6,25.6);
p.frameBounds = [rect];


(lib.GravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		var example_mc = body_mc.example_mc;
		example_mc.gotoAndStop(0);
		example_mc.visible = false;
		/*
		переменные
		*/
		var _that = this;
		var _particleMaxSpeed_num = 4;
		var _particleFadeSpeed_num = 0.01;
		var _particleTotal_num = 25;
		var _particleRange_num = 100;
		var _gravity_num = 0.4;
		/*
		функция добавления частиц
		*/
		function _createExplosionFunc()
		{
			/*
			
			*/
			var particle_mc;
			var i = 0;
			/*
			
			*/
			while (i < _particleTotal_num)
			{
				/*
				
				*/
				var particle_mc = new lib.ParticleGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
				/*
				
				*/
				particle_mc.boundyLeft_num = - _particleRange_num;
				particle_mc.boundyTop_num = - _particleRange_num;
				particle_mc.boundyRight_num = _particleRange_num;
				particle_mc.boundyBottom_num = _particleRange_num;
				/*
				
				*/
				particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
				particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
				particle_mc.speedX_num *= _particleMaxSpeed_num;
				particle_mc.speedY_num *= _particleMaxSpeed_num;
				/*
				
				*/
				particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
				/*
				
				*/
				particle_mc.addEventListener("tick", _onTickParticleFunc, false);
				/*
				
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickParticleFunc(event)
		{
			/*
			получаем частицу
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			
			*/
			target_mc.alpha -= target_mc.fadeSpeed_num;
			target_mc.x += target_mc.speedX_num;
			target_mc.y += target_mc.speedY_num;
			/*
			
			*/
			if(target_mc.speedY_num < _particleMaxSpeed_num)
			{
				target_mc.speedY_num += _gravity_num;
			}
			/*
			
			*/
			if (target_mc.alpha <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
			{
				/*
				
				*/
				target_mc.parent.removeChild(target_mc);
				/*
				
				*/
				_particleTotal_num--;
				if(_particleTotal_num <= 0)
				{
					_that.parent.removeChild(_that);
				}
			}
		}
		/*
		запускаем
		*/
		_createExplosionFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.gravity_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.sound_1_mc();

	this.instance_1 = new lib.sound_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
	this.shape.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,scaleY:0.909,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,472.7,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.AntiBlockingAdsScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.antiblocking_ads_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.antiblocking_ads_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,760);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
	this.indicator_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.WinScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(680.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(590,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(180,520);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.freeGames_mc},{t:this.social_network_mc},{t:this.moreGames_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// title
	this.instance_1 = new lib.animation_title_win_mc();
	this.instance_1.setTransform(400,220,0.941,0.941);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.gidro_mc();
	this.instance_2.setTransform(686,199.9,1,1,0,0,0,31,-0.1);

	this.instance_3 = new lib.electro_mc();
	this.instance_3.setTransform(616,395.1,1,1,0,0,0,31,0.1);

	this.instance_4 = new lib.dendro_mc();
	this.instance_4.setTransform(401,479.9,1,1,0,0,0,31,-0.1);

	this.instance_5 = new lib.geo_mc();
	this.instance_5.setTransform(181.3,374.9,1,1,0,0,0,31.3,-0.1);

	this.instance_6 = new lib.anemo2_mc();
	this.instance_6.setTransform(110,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// decor
	this.instance_7 = new lib.luch2_mc();
	this.instance_7.setTransform(390,174);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// bg
	this.instance_8 = new lib.background_8_img();
	this.instance_8.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1201);
p.frameBounds = [rect];


(lib.wind_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.anemo2_mc();
	this.instance.setTransform(430,400);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},10).wait(61));

	// animation
	this.instance_1 = new lib.anemo2_mc();
	this.instance_1.setTransform(165,240,0.88,0.88);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({alpha:1},10).wait(71));

	// animation
	this.instance_2 = new lib.anemo2_mc();
	this.instance_2.setTransform(660,210,0.86,0.86);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},10).wait(51));

	// animation
	this.instance_3 = new lib.hero1_mc();
	this.instance_3.setTransform(-500,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({x:400},20).wait(81));

	// animation
	this.instance_4 = new lib.big_shadow_mc();
	this.instance_4.setTransform(-0.1,-1,1,1,0,0,0,-0.1,-1);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({alpha:0.398},10).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-768,0,535,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-723,0,535,600), new cjs.Rectangle(-678,0,535,600), new cjs.Rectangle(-633,0,535,600), new cjs.Rectangle(-588,0,535,600), new cjs.Rectangle(-543,0,535,600), new cjs.Rectangle(-498,0,535,600), new cjs.Rectangle(-453,0,535,600), new cjs.Rectangle(-408,0,535,600), new cjs.Rectangle(-363,0,535,600), new cjs.Rectangle(-318,0,535,600), new cjs.Rectangle(-273,0,535,600), new cjs.Rectangle(-228,0,535,600), new cjs.Rectangle(-183,0,535,600), new cjs.Rectangle(-138,0,535,600), new cjs.Rectangle(-93,0,535,600), new cjs.Rectangle(-48,0,535,600), new cjs.Rectangle(-3,0,535,600), new cjs.Rectangle(42,0,535,600), new cjs.Rectangle(87,0,535,600), rect=new cjs.Rectangle(-210,-10,1219.9,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tips_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tips
	this.tip_1 = new lib.tip_mc();
	this.tip_1.setTransform(-32,0);

	this.tip_3 = new lib.tip_mc();
	this.tip_3.setTransform(32,0);

	this.tip_2 = new lib.tip_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tip_2},{t:this.tip_3},{t:this.tip_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-15,94,30);
p.frameBounds = [rect];


(lib.timer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.simple_timer_comp = new lib.simple_timer_1_mc();
	this.simple_timer_comp.setTransform(0.2,0.2,0.625,0.625,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.simple_timer_comp).wait(1));

	// bg
	this.instance = new lib.timer_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// minus
	this.minus_mc = new lib.animation_minus_timer_mc();

	this.timeline.addTween(cjs.Tween.get(this.minus_mc).wait(1));

	// plus
	this.plus_mc = new lib.animation_plus_timer_mc();

	this.timeline.addTween(cjs.Tween.get(this.plus_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_start_level_mc();
	this.instance.setTransform(400,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.LossScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,510);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.freeGames_mc},{t:this.social_network_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_loss_mc();
	this.instance.setTransform(400.5,280.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.red_sparkle_mc();
	this.instance_2.setTransform(30,95);

	this.instance_3 = new lib.red_sparkle_mc();
	this.instance_3.setTransform(47,318);

	this.instance_4 = new lib.red_sparkle_mc();
	this.instance_4.setTransform(100,211);

	this.instance_5 = new lib.red_sparkle_mc();
	this.instance_5.setTransform(327,491);

	this.instance_6 = new lib.red_sparkle_mc();
	this.instance_6.setTransform(520,515);

	this.instance_7 = new lib.red_sparkle_mc();
	this.instance_7.setTransform(152,415);

	this.instance_8 = new lib.red_sparkle_mc();
	this.instance_8.setTransform(751,151);

	this.instance_9 = new lib.red_sparkle_mc();
	this.instance_9.setTransform(751,254);

	this.instance_10 = new lib.red_sparkle_mc();
	this.instance_10.setTransform(678,312);

	this.instance_11 = new lib.red_sparkle_mc();
	this.instance_11.setTransform(556,126);

	this.instance_12 = new lib.red_sparkle_mc();
	this.instance_12.setTransform(560,202);

	this.instance_13 = new lib.red_sparkle_mc();
	this.instance_13.setTransform(436,292);

	this.instance_14 = new lib.red_sparkle_mc();
	this.instance_14.setTransform(400,222);

	this.instance_15 = new lib.red_sparkle_mc();
	this.instance_15.setTransform(450,80);

	this.instance_16 = new lib.red_sparkle_mc();
	this.instance_16.setTransform(320,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// decor
	this.instance_17 = new lib.stpirs_mc();
	this.instance_17.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// bg
	this.instance_18 = new lib.background_7_img();
	this.instance_18.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.item1_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item1_31_img();
	this.instance.setTransform(-85,-68.5);

	this.instance_1 = new lib.i13_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.anemo2_mc();
	this.instance_2.setTransform(-17.6,-26.6,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AprMRImNrMIBipLILJl0IQLFFIC7LFIuFLrg");
	this.shape.setTransform(-2.2,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.9,-95.8,203.5,178.3);
p.frameBounds = [rect, new cjs.Rectangle(-85,-91.9,170,160.4), null];


(lib.item1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item1_6_img();
	this.instance.setTransform(-58.5,-49);

	this.instance_1 = new lib.i16_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.anemo2_mc();
	this.instance_2.setTransform(3.4,-3.6,0.33,0.33);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmH9Ii/lhIEknhIHvjEIGqGPIAOFBIhzFDg");
	this.shape.setTransform(-0.4,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.8,-61.7,122.9,110.8);
p.frameBounds = [rect, new cjs.Rectangle(-58.5,-49,117,98), null];


(lib.item1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.item1_2_img();
	this.instance.setTransform(-118,-130.5);

	this.instance_1 = new lib.anemo2_mc();
	this.instance_1.setTransform(11.4,-40.6,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// body
	this.instance_2 = new lib.anemo2_mc();
	this.instance_2.setTransform(11.4,-40.6,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AufrOIHKo4IDUgEIMtNkIF0MoIr8NaIprAvg");
	this.shape.setTransform(15.6,-7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-136.7,236,267.2);
p.frameBounds = [rect, new cjs.Rectangle(-43.8,-99.2,115.4,111.3), null];


(lib.hints_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.hints_btn = new lib.hints_button_btn();
	this.hints_btn.setTransform(-50,0);
	new cjs.ButtonHelper(this.hints_btn, 0, 1, 2, false, new lib.hints_button_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hints_btn).wait(1));

	// tips
	this.tips_mc = new lib.tips_mc();
	this.tips_mc.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.tips_mc).wait(1));

	// bg
	this.instance = new lib.hints_substrate_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-40,290,80);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gidro
	this.instance = new lib.gidro_mc();
	this.instance.setTransform(700,207.9,1,1,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// electro
	this.instance_1 = new lib.electro_mc();
	this.instance_1.setTransform(595,410.1,1,1,0,0,0,31,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dendro
	this.instance_2 = new lib.dendro_mc();
	this.instance_2.setTransform(379.5,440.9,1,1,0,0,0,31,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// geo
	this.instance_3 = new lib.geo_mc();
	this.instance_3.setTransform(155.3,394.9,1,1,0,0,0,31.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// anemo
	this.instance_4 = new lib.anemo2_mc();
	this.instance_4.setTransform(85,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.luch2_mc();
	this.instance_5.setTransform(390,174);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.8,-184.6,1078.4,735.5);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-130,94);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(90,158);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-239,-108);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(185,-94);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(55,-160);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// decor
	this.instance = new lib.white_sparkle_mc();
	this.instance.setTransform(-96,-286);

	this.instance_1 = new lib.white_sparkle_mc();
	this.instance_1.setTransform(163,245);

	this.instance_2 = new lib.white_sparkle_mc();
	this.instance_2.setTransform(-163,222);

	this.instance_3 = new lib.white_sparkle_mc();
	this.instance_3.setTransform(-311,111);

	this.instance_4 = new lib.white_sparkle_mc();
	this.instance_4.setTransform(-375,-123);

	this.instance_5 = new lib.white_sparkle_mc();
	this.instance_5.setTransform(297,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_6 = new lib.minimap0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-130,94);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(90,158);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-239,-108);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(185,-94);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(55,-160);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// decor
	this.instance = new lib.white_sparkle_mc();
	this.instance.setTransform(-96,-286);

	this.instance_1 = new lib.white_sparkle_mc();
	this.instance_1.setTransform(163,245);

	this.instance_2 = new lib.white_sparkle_mc();
	this.instance_2.setTransform(-163,222);

	this.instance_3 = new lib.white_sparkle_mc();
	this.instance_3.setTransform(-311,111);

	this.instance_4 = new lib.white_sparkle_mc();
	this.instance_4.setTransform(-375,-123);

	this.instance_5 = new lib.white_sparkle_mc();
	this.instance_5.setTransform(297,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_6 = new lib.minimap0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-130,94);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(90,158);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-239,-108);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(185,-94);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(55,-160);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// decor
	this.instance = new lib.white_sparkle_mc();
	this.instance.setTransform(-96,-286);

	this.instance_1 = new lib.white_sparkle_mc();
	this.instance_1.setTransform(163,245);

	this.instance_2 = new lib.white_sparkle_mc();
	this.instance_2.setTransform(-163,222);

	this.instance_3 = new lib.white_sparkle_mc();
	this.instance_3.setTransform(-311,111);

	this.instance_4 = new lib.white_sparkle_mc();
	this.instance_4.setTransform(-375,-123);

	this.instance_5 = new lib.white_sparkle_mc();
	this.instance_5.setTransform(297,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_6 = new lib.minimap0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-239,-108);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-130,94);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(90,158);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(185,-94);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(55,-160);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// decor
	this.instance = new lib.white_sparkle_mc();
	this.instance.setTransform(-96,-286);

	this.instance_1 = new lib.white_sparkle_mc();
	this.instance_1.setTransform(163,245);

	this.instance_2 = new lib.white_sparkle_mc();
	this.instance_2.setTransform(-163,222);

	this.instance_3 = new lib.white_sparkle_mc();
	this.instance_3.setTransform(-311,111);

	this.instance_4 = new lib.white_sparkle_mc();
	this.instance_4.setTransform(-375,-123);

	this.instance_5 = new lib.white_sparkle_mc();
	this.instance_5.setTransform(297,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_6 = new lib.minimap0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-130,94);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(90,158);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-239,-108);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(185,-94);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(55,-160);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// decor
	this.instance = new lib.white_sparkle_mc();
	this.instance.setTransform(-96,-286);

	this.instance_1 = new lib.white_sparkle_mc();
	this.instance_1.setTransform(163,245);

	this.instance_2 = new lib.white_sparkle_mc();
	this.instance_2.setTransform(-163,222);

	this.instance_3 = new lib.white_sparkle_mc();
	this.instance_3.setTransform(-311,111);

	this.instance_4 = new lib.white_sparkle_mc();
	this.instance_4.setTransform(-375,-123);

	this.instance_5 = new lib.white_sparkle_mc();
	this.instance_5.setTransform(297,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_6 = new lib.minimap0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(55,-160);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-130,94);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(90,158);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-239,-108);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(185,-94);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1));

	// decor
	this.instance = new lib.white_sparkle_mc();
	this.instance.setTransform(-96,-286);

	this.instance_1 = new lib.white_sparkle_mc();
	this.instance_1.setTransform(163,245);

	this.instance_2 = new lib.white_sparkle_mc();
	this.instance_2.setTransform(-163,222);

	this.instance_3 = new lib.white_sparkle_mc();
	this.instance_3.setTransform(-311,111);

	this.instance_4 = new lib.white_sparkle_mc();
	this.instance_4.setTransform(-375,-123);

	this.instance_5 = new lib.white_sparkle_mc();
	this.instance_5.setTransform(297,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_6 = new lib.minimap0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(740.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(400,500);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(130,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(100,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-260,1262.7,1261);
p.frameBounds = [rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hints
	this.hints_mc = new lib.hints_mc();
	this.hints_mc.setTransform(400,40);

	this.timeline.addTween(cjs.Tween.get(this.hints_mc).wait(1));

	// list
	this.list_mc = new lib.list_1_mc();
	this.list_mc.setTransform(300,550);

	this.timeline.addTween(cjs.Tween.get(this.list_mc).wait(1));

	// timer
	this.timer_mc = new lib.timer_mc();
	this.timer_mc.setTransform(500,550);

	this.timeline.addTween(cjs.Tween.get(this.timer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(210,0,380,590);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// animation
	this.animation_mc = new lib.wind_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// options
	this.option_2 = new lib.item6_12_mc();
	this.option_2.setTransform(362.5,232);

	this.trap_1 = new lib.item6_11_mc();
	this.trap_1.setTransform(163,476);

	this.option_8 = new lib.item6_10_mc();
	this.option_8.setTransform(712,498.9);

	this.option_7 = new lib.item6_9_mc();
	this.option_7.setTransform(396,425.9);

	this.trap_2 = new lib.item6_8_mc();
	this.trap_2.setTransform(549,422.4);

	this.option_6 = new lib.item6_7_mc();
	this.option_6.setTransform(92.5,401);

	this.option_3 = new lib.item6_6_mc();
	this.option_3.setTransform(567,225.5);

	this.option_1 = new lib.item6_5_mc();
	this.option_1.setTransform(204,146);

	this.option_5 = new lib.item6_4_mc();
	this.option_5.setTransform(735.5,196.5);

	this.option_0 = new lib.item6_3_mc();
	this.option_0.setTransform(363,68);

	this.trap_0 = new lib.item6_2_mc();
	this.trap_0.setTransform(261,315);

	this.option_4 = new lib.item6_1_mc();
	this.option_4.setTransform(647,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_4},{t:this.trap_0},{t:this.option_0},{t:this.option_5},{t:this.option_1},{t:this.option_3},{t:this.option_6},{t:this.trap_2},{t:this.option_7},{t:this.option_8},{t:this.trap_1},{t:this.option_2}]}).wait(1));

	// antiClicker
	this.antiClicker_mc = new lib.anti_clicker_mc();

	this.timeline.addTween(cjs.Tween.get(this.antiClicker_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-964,-280.8,1964,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// animation
	this.animation_mc = new lib.wind_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// options
	this.trap_2 = new lib.item5_9_mc();
	this.trap_2.setTransform(352.5,463.4);

	this.trap_1 = new lib.item5_11_mc();
	this.trap_1.setTransform(245.5,452.9);

	this.option_5 = new lib.item5_10_mc();
	this.option_5.setTransform(592,281);

	this.option_4 = new lib.item5_8_mc();
	this.option_4.setTransform(557.5,460.4);

	this.option_3 = new lib.item5_7_mc();
	this.option_3.setTransform(439,423.4);

	this.option_7 = new lib.item5_6_mc();
	this.option_7.setTransform(695.5,536.4);

	this.option_1 = new lib.item5_5_mc();
	this.option_1.setTransform(432.5,154);

	this.option_6 = new lib.item5_4_mc();
	this.option_6.setTransform(695.5,421.4);

	this.trap_0 = new lib.item5_3_mc();
	this.trap_0.setTransform(53.5,174.5);

	this.option_0 = new lib.item5_2_mc();
	this.option_0.setTransform(229.5,207.5);

	this.option_2 = new lib.item5_1_mc();
	this.option_2.setTransform(59.5,379.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_2},{t:this.option_0},{t:this.trap_0},{t:this.option_6},{t:this.option_1},{t:this.option_7},{t:this.option_3},{t:this.option_4},{t:this.option_5},{t:this.trap_1},{t:this.trap_2}]}).wait(1));

	// options
	this.instance = new lib.item5_10_1_img();
	this.instance.setTransform(657.4,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// antiClicker
	this.antiClicker_mc = new lib.anti_clicker_mc();

	this.timeline.addTween(cjs.Tween.get(this.antiClicker_mc).wait(1));

	// bg
	this.instance_1 = new lib.background_5_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1951.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// animation
	this.animation_mc = new lib.wind_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// options
	this.option_6 = new lib.item4_8_mc();
	this.option_6.setTransform(682.5,495.9);

	this.trap_0 = new lib.item4_7_mc();
	this.trap_0.setTransform(549.5,472.4);

	this.option_5 = new lib.item4_6_mc();
	this.option_5.setTransform(302.5,407.4);

	this.option_1 = new lib.item4_5_mc();
	this.option_1.setTransform(128.5,231.5);

	this.option_4 = new lib.item4_4_mc();
	this.option_4.setTransform(112,457.9);

	this.option_2 = new lib.item4_3_mc();
	this.option_2.setTransform(408,321.5);

	this.option_0 = new lib.item4_2_mc();
	this.option_0.setTransform(390,78);

	this.option_3 = new lib.item4_1_mc();
	this.option_3.setTransform(580,261.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_3},{t:this.option_0},{t:this.option_2},{t:this.option_4},{t:this.option_1},{t:this.option_5},{t:this.trap_0},{t:this.option_6}]}).wait(1));

	// antiClicker
	this.antiClicker_mc = new lib.anti_clicker_mc();

	this.timeline.addTween(cjs.Tween.get(this.antiClicker_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1744.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// animation
	this.animation_mc = new lib.wind_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// options
	this.option_1 = new lib.item3_8_mc();
	this.option_1.setTransform(329.3,113.4);

	this.trap_1 = new lib.item3_7_mc();
	this.trap_1.setTransform(107.5,472.9);

	this.option_4 = new lib.item3_6_mc();
	this.option_4.setTransform(331,370.9);

	this.option_5 = new lib.item3_5_mc();
	this.option_5.setTransform(713,486.9);

	this.option_2 = new lib.item3_4_mc();
	this.option_2.setTransform(688,229.5);

	this.option_3 = new lib.item3_3_mc();
	this.option_3.setTransform(496,238);

	this.trap_0 = new lib.item3_2_mc();
	this.trap_0.setTransform(498,346);

	this.option_0 = new lib.item3_1_mc();
	this.option_0.setTransform(123,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_0},{t:this.trap_0},{t:this.option_3},{t:this.option_2},{t:this.option_5},{t:this.option_4},{t:this.trap_1},{t:this.option_1}]}).wait(1));

	// antiClicker
	this.antiClicker_mc = new lib.anti_clicker_mc();

	this.timeline.addTween(cjs.Tween.get(this.antiClicker_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1863.7,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// animation
	this.animation_mc = new lib.wind_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// options
	this.option_1 = new lib.item2_7_mc();
	this.option_1.setTransform(326.5,187);

	this.option_3 = new lib.item2_5_mc();
	this.option_3.setTransform(169,518.9);

	this.trap_1 = new lib.item2_4_mc();
	this.trap_1.setTransform(321.5,438.4);

	this.trap_2 = new lib.item2_6_mc();
	this.trap_2.setTransform(640,371);

	this.option_2 = new lib.item2_2_mc();
	this.option_2.setTransform(248.5,343);

	this.option_0 = new lib.item2_3_mc();
	this.option_0.setTransform(534.5,113.5);

	this.trap_0 = new lib.item2_1_mc();
	this.trap_0.setTransform(676,238.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.trap_0},{t:this.option_0},{t:this.option_2},{t:this.trap_2},{t:this.trap_1},{t:this.option_3},{t:this.option_1}]}).wait(1));

	// antiClicker
	this.antiClicker_mc = new lib.anti_clicker_mc();

	this.timeline.addTween(cjs.Tween.get(this.antiClicker_mc).wait(1));

	// bg
	this.instance = new lib.background_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-981,-280.8,1981,1261.9);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// panel
	this.panel_mc = new lib.panel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.panel_mc).wait(1));

	// animation
	this.animation_mc = new lib.wind_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// options
	this.trap_2 = new lib.item1_1_mc();
	this.trap_2.setTransform(629,463.9);

	this.option_2 = new lib.item1_2_mc();
	this.option_2.setTransform(707,417.9);

	this.option_0 = new lib.item1_31_mc();
	this.option_0.setTransform(110,218.9);

	this.trap_0 = new lib.item1_4_mc();
	this.trap_0.setTransform(334,382.9);

	this.trap_1 = new lib.item1_5_mc();
	this.trap_1.setTransform(602,331);

	this.option_1 = new lib.item1_6_mc();
	this.option_1.setTransform(613,222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.option_1},{t:this.trap_1},{t:this.trap_0},{t:this.option_0},{t:this.option_2},{t:this.trap_2}]}).wait(1));

	// antiClicker
	this.antiClicker_mc = new lib.anti_clicker_mc();

	this.timeline.addTween(cjs.Tween.get(this.antiClicker_mc).wait(1));

	// bg
	this.instance = new lib.background_1_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-768,-280.8,1768,1261.9);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.8,-298.8,758.8,573.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// help_mc
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,310);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_9_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.lineHeight = 74;
	this.text.lineWidth = 250;
	this.text.setTransform(2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.LossScreen();

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.WinScreen();

	this.instance_13 = new lib.InstructionScreen();

	this.instance_14 = new lib.FlashSecondAnimation();
	this.instance_14.setTransform(-100,100);

	this.instance_15 = new lib.FlashFirstAnimation();
	this.instance_15.setTransform(150,250);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(300,50);

	this.instance_16 = new lib.Cursor();
	this.instance_16.setTransform(200,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_17 = new lib.OrientationLockScreen();

	this.instance_18 = new lib.CurtainScreen();

	this.instance_19 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[{t:this.instance_19}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,254,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-260,1262.7,1261), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-768,-280.8,1768,1261.9), new cjs.Rectangle(-981,-280.8,1981,1261.9), new cjs.Rectangle(-262.6,-280.8,1863.7,1261.9), new cjs.Rectangle(-262.6,-280.8,1744.7,1261.9), new cjs.Rectangle(-262.6,-280.8,1951.7,1261.9), new cjs.Rectangle(-964,-280.8,1964,1261.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-200,0,1200,760), new cjs.Rectangle(-262.6,-319.9,1262.7,1201), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,0,518,350), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,600,1200,600), rect=null, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,254,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;