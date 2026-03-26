(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
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
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"},
		{src:"library/images/storage_atlas_22.png", id:"storage_atlas_22"},
		{src:"library/images/storage_atlas_23.png", id:"storage_atlas_23"},
		{src:"library/images/storage_atlas_24.png", id:"storage_atlas_24"},
		{src:"library/images/storage_atlas_25.png", id:"storage_atlas_25"},
		{src:"library/images/storage_atlas_26.png", id:"storage_atlas_26"},
		{src:"library/images/storage_atlas_27.png", id:"storage_atlas_27"},
		{src:"library/images/storage_atlas_28.png", id:"storage_atlas_28"},
		{src:"library/images/storage_atlas_29.png", id:"storage_atlas_29"},
		{src:"library/images/storage_atlas_30.png", id:"storage_atlas_30"},
		{src:"library/images/storage_atlas_31.png", id:"storage_atlas_31"},
		{src:"library/images/storage_atlas_32.png", id:"storage_atlas_32"},
		{src:"library/images/storage_atlas_33.png", id:"storage_atlas_33"},
		{src:"library/images/storage_atlas_34.png", id:"storage_atlas_34"},
		{src:"library/images/storage_atlas_35.png", id:"storage_atlas_35"},
		{src:"library/images/storage_atlas_36.png", id:"storage_atlas_36"},
		{src:"library/images/storage_atlas_37.png", id:"storage_atlas_37"},
		{src:"library/images/storage_atlas_38.png", id:"storage_atlas_38"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,642,600,600],[0,0,608,640],[602,642,440,586],[610,0,630,580]]},
		{name:"storage_atlas_7", frames: [[0,0,652,370],[0,574,435,548],[0,372,1200,200],[437,574,401,586]]},
		{name:"storage_atlas_8", frames: [[759,468,422,433],[384,468,373,500],[0,417,382,491],[0,0,519,415],[521,0,407,466],[0,970,640,280],[642,970,640,280]]},
		{name:"storage_atlas_9", frames: [[0,503,420,420],[359,0,360,487],[824,871,361,420],[721,0,342,490],[0,0,357,501],[422,492,440,377],[422,871,400,400]]},
		{name:"storage_atlas_10", frames: [[0,422,361,420],[363,0,361,420],[726,0,361,420],[0,0,361,420],[0,844,361,420],[363,422,361,420],[363,844,361,420],[726,844,361,420],[726,422,361,420]]},
		{name:"storage_atlas_11", frames: [[0,844,361,420],[0,0,361,420],[0,422,361,420],[726,0,361,420],[363,0,361,420],[726,422,361,420],[363,422,361,420],[363,844,361,420],[726,844,361,420]]},
		{name:"storage_atlas_12", frames: [[363,422,361,420],[726,844,361,420],[363,0,361,420],[0,0,361,420],[0,422,361,420],[363,844,361,420],[726,0,361,420],[0,844,361,420],[726,422,361,420]]},
		{name:"storage_atlas_13", frames: [[0,844,361,420],[363,0,361,420],[726,844,361,420],[363,844,361,420],[0,0,361,420],[726,422,361,420],[726,0,361,420],[0,422,361,420],[363,422,361,420]]},
		{name:"storage_atlas_14", frames: [[0,0,361,420],[0,422,361,420],[0,844,361,420],[363,0,361,420],[726,0,361,420],[363,422,361,420],[363,844,361,420],[726,422,361,420],[726,844,361,420]]},
		{name:"storage_atlas_15", frames: [[363,422,361,420],[726,844,361,420],[0,422,361,420],[363,844,361,420],[726,422,361,420],[0,0,361,420],[0,844,361,420],[363,0,361,420],[726,0,361,420]]},
		{name:"storage_atlas_16", frames: [[0,0,361,420],[363,0,361,420],[0,422,361,420],[0,844,361,420],[726,0,361,420],[363,422,361,420],[363,844,361,420],[726,422,361,420],[726,844,361,420]]},
		{name:"storage_atlas_17", frames: [[0,0,361,420],[0,844,361,420],[0,422,361,420],[363,0,361,420],[726,0,361,420],[363,422,361,420],[363,844,361,420],[726,422,361,420],[726,844,361,420]]},
		{name:"storage_atlas_18", frames: [[726,422,361,420],[363,844,361,420],[726,844,361,420],[363,0,361,420],[0,844,361,420],[726,0,361,420],[363,422,361,420],[0,0,361,420],[0,422,361,420]]},
		{name:"storage_atlas_19", frames: [[363,844,361,420],[0,844,361,420],[363,0,361,420],[363,422,361,420],[726,0,361,420],[726,422,361,420],[726,844,361,420],[0,422,361,420],[0,0,361,420]]},
		{name:"storage_atlas_20", frames: [[726,0,361,420],[363,0,361,420],[363,844,361,420],[726,422,361,420],[363,422,361,420],[726,844,361,420],[0,0,361,420],[0,422,361,420],[0,844,361,420]]},
		{name:"storage_atlas_21", frames: [[0,0,361,420],[0,422,361,420],[0,844,361,420],[363,0,361,420],[726,0,361,420],[363,844,361,420],[363,422,361,420],[726,422,361,420],[726,844,361,420]]},
		{name:"storage_atlas_22", frames: [[0,422,361,420],[0,844,361,420],[363,0,361,420],[726,0,361,420],[363,422,361,420],[363,844,361,420],[726,422,361,420],[0,0,361,420],[726,844,361,420]]},
		{name:"storage_atlas_23", frames: [[0,844,361,420],[363,0,361,420],[0,0,361,420],[0,422,361,420],[726,0,361,420],[363,844,361,420],[726,422,361,420],[363,422,361,420],[726,844,361,420]]},
		{name:"storage_atlas_24", frames: [[729,422,500,300],[729,724,500,300],[0,0,361,420],[0,422,361,420],[0,844,361,420],[363,0,361,420],[726,0,361,420],[363,422,364,415]]},
		{name:"storage_atlas_25", frames: [[0,0,500,300],[0,302,500,300],[0,604,500,300],[0,906,500,300],[502,764,380,380],[884,0,380,380],[884,764,380,380],[502,0,380,380],[884,382,380,380],[502,382,380,380]]},
		{name:"storage_atlas_26", frames: [[0,0,380,380],[0,764,380,380],[764,382,380,380],[0,382,380,380],[382,0,380,380],[382,382,380,380],[764,0,380,380],[382,764,380,380],[764,764,380,380]]},
		{name:"storage_atlas_27", frames: [[382,757,301,455],[382,382,378,373],[685,824,312,428],[0,764,380,380],[0,0,380,380],[0,382,380,380],[764,0,380,380],[382,0,380,380],[762,382,320,440]]},
		{name:"storage_atlas_28", frames: [[1031,387,212,520],[368,0,360,360],[0,789,320,320],[966,966,320,320],[0,366,320,320],[322,789,320,320],[644,966,320,320],[368,362,282,425],[0,0,366,364],[652,387,377,293],[652,682,373,282],[730,0,333,385]]},
		{name:"storage_atlas_29", frames: [[0,0,320,320],[0,966,320,320],[0,322,320,320],[0,644,320,320],[322,0,320,320],[644,0,320,320],[966,0,320,320],[322,322,320,320],[322,644,320,320],[322,966,320,320],[644,322,320,320],[966,322,320,320],[966,966,320,320],[644,644,320,320],[966,644,320,320],[644,966,320,320]]},
		{name:"storage_atlas_30", frames: [[993,959,300,300],[993,657,300,300],[387,584,385,260],[774,657,217,460],[0,846,380,260],[322,0,320,320],[0,0,320,320],[644,0,320,320],[966,0,258,393],[382,846,371,243],[0,322,385,260],[387,322,385,260],[0,584,385,260],[774,395,385,260]]},
		{name:"storage_atlas_31", frames: [[691,302,175,456],[0,302,159,523],[906,0,300,300],[302,0,300,300],[0,0,300,300],[604,0,300,300],[383,567,299,248],[383,302,306,263],[868,302,219,362],[161,302,220,366],[868,666,226,324],[1096,302,164,446],[161,817,294,247],[457,817,400,180],[859,992,400,180],[457,999,400,180],[0,1066,400,180]]},
		{name:"storage_atlas_32", frames: [[293,806,260,260],[555,877,190,336],[683,546,209,329],[894,546,195,332],[0,975,212,315],[747,880,220,281],[0,728,291,245],[1091,546,146,439],[969,987,209,293],[402,546,279,258],[804,364,400,180],[804,0,400,180],[402,364,400,180],[0,182,400,180],[402,0,400,180],[402,182,400,180],[0,0,400,180],[804,182,400,180],[0,546,400,180],[0,364,400,180]]},
		{name:"storage_atlas_33", frames: [[204,640,166,350],[0,662,202,301],[0,0,189,322],[0,324,181,336],[183,324,189,314],[191,0,386,148],[191,150,386,148],[374,300,386,148],[0,992,386,148],[0,1142,386,148],[372,640,386,148],[372,790,386,148],[374,450,386,148],[579,0,386,148],[579,150,386,148],[388,940,386,148],[760,600,386,148],[760,750,386,148],[762,300,386,148],[762,450,386,148],[776,1050,386,148],[776,900,386,148],[388,1090,386,148]]},
		{name:"storage_atlas_34", frames: [[776,300,386,148],[0,450,386,148],[388,450,386,148],[0,300,386,148],[776,450,386,148],[388,300,386,148],[374,901,174,312],[0,600,189,299],[191,600,181,311],[1008,600,178,308],[562,600,263,209],[827,600,179,307],[374,600,186,299],[0,901,164,332],[166,913,183,288],[562,811,203,270],[767,910,380,140],[388,0,386,148],[0,150,386,148],[388,150,386,148],[776,0,386,148],[776,150,386,148],[0,0,386,148]]},
		{name:"storage_atlas_35", frames: [[0,0,173,302],[1042,414,188,217],[368,473,171,266],[623,959,171,253],[471,741,207,216],[0,1068,212,224],[399,0,209,215],[1042,0,183,235],[477,959,144,304],[585,217,236,188],[214,1068,261,180],[0,871,246,195],[160,552,206,227],[796,849,230,169],[209,219,182,252],[0,552,158,317],[1042,845,227,176],[610,0,214,202],[393,219,190,239],[1042,633,191,210],[868,0,153,267],[711,414,155,268],[868,269,154,256],[796,1023,151,263],[0,304,207,246],[541,460,168,265],[1042,237,242,175],[175,0,222,217],[949,1023,259,152],[248,781,221,211],[680,727,360,120]]},
		{name:"storage_atlas_36", frames: [[301,603,190,190],[328,977,180,180],[1048,192,190,190],[493,603,180,180],[305,411,190,190],[708,611,126,226],[497,219,134,265],[845,1032,131,234],[212,0,209,182],[0,0,210,185],[986,802,136,224],[845,802,139,228],[423,62,239,155],[1124,903,118,247],[154,448,145,257],[0,949,134,280],[159,187,144,259],[510,785,196,165],[829,444,208,165],[147,707,151,243],[0,686,145,261],[699,952,144,222],[0,187,157,245],[0,434,152,250],[978,1152,194,148],[1043,384,215,159],[633,254,220,160],[664,62,190,190],[855,254,186,188],[633,416,194,178],[510,952,187,171],[510,1125,186,159],[856,62,190,190],[136,952,190,190],[305,219,190,190],[845,611,168,189],[1124,727,168,174],[328,795,180,180],[1039,545,180,180],[1055,0,190,190],[423,0,630,60]]},
		{name:"storage_atlas_37", frames: [[945,1190,128,100],[1074,320,120,120],[522,527,120,120],[952,268,120,120],[0,859,160,160],[492,415,140,110],[458,893,120,120],[580,771,120,120],[458,771,120,120],[522,649,120,120],[580,893,120,120],[112,471,95,194],[730,134,211,85],[315,441,175,93],[457,326,178,87],[777,1141,166,78],[874,399,159,80],[0,0,124,224],[318,82,118,215],[730,303,184,94],[457,230,166,94],[209,536,189,78],[214,700,195,74],[777,1221,163,79],[215,224,98,232],[625,92,103,229],[112,226,101,243],[0,226,110,234],[0,462,110,233],[887,481,165,77],[214,616,177,82],[1087,231,173,87],[1072,560,167,75],[773,960,169,78],[1196,320,70,185],[702,760,71,191],[644,561,74,187],[1101,144,197,85],[702,483,183,76],[702,399,170,82],[720,682,180,76],[775,760,160,83],[438,92,185,136],[214,776,120,120],[0,1183,280,80],[730,221,220,80],[126,0,340,80],[1101,0,150,142],[162,667,50,297],[760,0,187,132],[214,898,120,120],[949,0,150,150],[126,82,190,140],[336,776,120,120],[336,898,120,120],[315,299,140,140],[468,0,290,90],[0,697,160,160],[406,1020,120,120],[162,1020,120,120],[404,1142,120,120],[284,1020,120,120],[400,536,120,120],[282,1142,120,120],[894,845,116,113],[1064,1000,110,112],[1064,886,110,112],[838,561,112,117],[720,561,116,119],[1075,1114,112,110],[528,1139,116,110],[1177,637,115,108],[775,845,117,113],[1177,873,113,109],[528,1015,117,122],[1177,747,100,124],[952,560,118,107],[945,1073,112,115],[944,960,118,111],[647,1015,124,114],[1072,637,103,121],[952,669,110,112],[1054,442,108,116],[1075,760,100,124],[952,152,133,114],[777,1040,132,99],[647,1131,128,110],[0,1265,630,30],[0,1021,160,160]]},
		{name:"storage_atlas_38", frames: [[305,881,101,80],[362,407,121,82],[1113,363,112,91],[901,314,106,97],[0,1184,107,84],[0,298,118,98],[404,0,130,94],[692,98,116,96],[1180,582,105,87],[0,96,125,98],[810,184,108,103],[605,1226,98,72],[901,413,103,92],[109,1207,101,87],[190,377,118,91],[470,152,110,99],[109,1124,110,81],[595,617,99,79],[217,985,102,82],[500,1226,103,72],[634,1140,91,74],[212,1207,107,81],[449,1010,94,80],[0,196,120,100],[0,1002,50,180],[494,326,100,100],[111,420,70,150],[1227,363,60,85],[1207,771,28,73],[844,834,40,93],[1063,665,40,87],[1175,671,34,78],[1088,463,23,72],[267,470,41,94],[902,896,34,94],[194,883,19,79],[869,1173,46,78],[818,671,57,74],[1261,756,26,79],[1132,835,26,77],[944,1218,33,82],[1001,719,36,87],[1175,751,30,75],[190,243,41,69],[987,921,31,78],[844,747,46,85],[954,733,41,76],[810,98,31,82],[1105,665,41,76],[1174,828,29,70],[1261,671,27,83],[129,1069,90,50],[920,200,90,50],[390,198,50,50],[470,96,50,50],[52,1124,50,50],[960,1037,50,50],[1211,721,48,48],[1211,671,48,48],[604,470,82,39],[822,1001,82,39],[234,0,168,73],[536,71,154,79],[549,887,43,176],[1238,0,49,185],[640,815,40,179],[594,887,44,168],[536,0,177,69],[122,243,66,175],[844,0,165,70],[1216,456,80,124],[338,253,180,60],[1056,128,180,60],[1056,190,180,60],[520,264,180,60],[190,315,180,60],[920,252,180,60],[362,617,220,30],[727,1174,40,40],[877,671,60,60],[1238,187,60,60],[918,595,60,60],[809,1111,60,60],[886,834,60,60],[939,671,60,60],[1001,657,60,60],[980,595,60,60],[856,595,60,60],[892,733,60,60],[1066,754,25,111],[933,992,25,111],[1148,665,25,111],[1039,754,25,111],[917,1173,25,111],[1105,743,25,111],[997,808,25,111],[944,1105,25,111],[906,992,25,111],[948,811,25,111],[960,924,25,111],[1132,778,40,55],[595,698,40,43],[1093,754,10,11],[671,996,69,94],[569,1065,100,73],[871,1111,57,60],[800,409,99,100],[784,1045,23,38],[335,1107,31,31],[338,198,50,50],[696,665,40,147],[310,377,50,210],[787,1256,40,40],[829,1256,40,40],[637,698,40,40],[871,1253,40,40],[1012,200,40,40],[1042,595,40,40],[742,1045,40,40],[764,935,40,40],[1051,314,40,40],[1009,314,40,40],[1219,846,12,130],[1160,835,12,130],[1024,808,12,130],[1237,771,12,130],[1205,846,12,130],[1174,900,12,130],[1188,900,12,130],[1107,856,12,130],[1093,856,12,130],[98,572,66,150],[1056,93,33,33],[166,598,65,65],[702,300,103,103],[727,1092,80,80],[221,1141,78,64],[764,869,78,64],[738,671,78,64],[696,595,78,64],[776,595,78,64],[809,1045,78,64],[738,737,78,64],[742,979,78,64],[822,935,78,64],[764,803,78,64],[408,866,112,70],[321,1141,112,70],[351,794,112,70],[465,743,112,70],[435,938,112,70],[321,1213,112,70],[221,1069,112,70],[481,671,112,70],[367,671,112,70],[522,815,112,70],[321,963,112,70],[335,1035,112,70],[579,743,112,70],[372,315,120,90],[682,897,80,80],[705,1216,80,80],[787,1174,80,80],[682,815,80,80],[769,1174,16,16],[465,815,48,48],[362,491,240,40],[604,511,240,40],[362,533,240,40],[0,841,240,40],[362,575,240,40],[846,511,240,40],[846,553,240,40],[604,553,240,40],[248,752,200,40],[485,428,200,40],[596,326,100,100],[698,405,100,100],[948,93,106,105],[0,398,109,105],[1113,456,101,100],[242,802,107,77],[80,883,112,80],[844,72,102,110],[127,126,105,115],[0,615,95,103],[1102,252,99,107],[234,75,111,110],[166,681,80,119],[0,505,96,108],[234,187,102,116],[183,470,82,126],[52,1002,75,120],[0,720,81,119],[435,1167,63,120],[217,883,86,100],[500,1167,132,57],[1009,361,102,100],[129,965,86,100],[435,1107,132,58],[1011,0,125,91],[1138,0,90,126],[133,0,99,124],[702,196,105,102],[582,152,99,110],[242,598,118,81],[347,96,121,100],[715,0,127,96],[0,0,131,94],[248,681,117,69],[83,724,80,107],[1088,558,90,105],[0,883,78,117],[1203,252,95,109],[809,289,90,118]]}
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
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_forward_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bag1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bag1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bag1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bag1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bag1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bag1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bag2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bag2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bag2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bag2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bag2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bag2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bag3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bag3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bag3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bag3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bag3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bag3_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bag4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bag4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bag4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bag4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bag4_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bag4_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_5_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_6_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_message_7_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blue_backing_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.body1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_blush_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.check_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.check_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.check_hairstyle_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.check_lips_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.check_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.current_location_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dragon_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.earring1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.earring1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.earring1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.earring1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.earring1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.earring1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.earring2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.earring2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.earring2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.earring2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.earring2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.earring2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.earring3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.earring3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.earring3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.earring3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.earring3_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.earring3_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.earring4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.earring4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.earring4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.earring4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.earring4_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.earring4_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.forward_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_29"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_4_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hanger1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_belt12_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_belt3_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_belt45_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_belt6_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_belt1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_belt2_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_belt3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_belt45_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_belt6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyelashes_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero3_belt12_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero3_belt3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero3_belt45_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero3_belt6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_face_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero4_belt12_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero4_belt3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero4_belt45_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero4_belt6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero4_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero4_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero4_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero4_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero4_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero4_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyelashes_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_face_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.lens10_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.lens12_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.lens13_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lens14_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lens16_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lens17_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lens18_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lens19_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.lens21_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lens22_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.level_completed_1_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new26_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new27_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new31_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new39_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new41_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_9_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_26"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.makeup_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.makeup_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.makeup_body3_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.makeup_body4_img = function() {
	this.spriteSheet = ss["storage_atlas_28"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.message_en_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.message_en_2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.message_en_3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.message_en_4_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.message_en_5_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.message_en_6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.message_en_7_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_3_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_4_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_5_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.message_ja_7_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_2_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_4_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_5_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.message_ru_7_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_1_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_2_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_3_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_4_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_5_img = function() {
	this.spriteSheet = ss["storage_atlas_34"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_6_img = function() {
	this.spriteSheet = ss["storage_atlas_33"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.message_tr_7_img = function() {
	this.spriteSheet = ss["storage_atlas_30"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new13_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new15_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.pencil_new9_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.phone1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.phone2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.podstavka_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.question_mark_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.quiz_hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.quiz_hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.quiz_hint_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.quiz_hint_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.quiz_hint_5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new28_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new31_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new34_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.shadow_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new15_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new24_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new30_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new41_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new47_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new7_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new8_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.smiley_smiling_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.smiley_smiling_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.smiley_smiling_3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.smiley_smiling_4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.snow_logo_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.snowflake_flashing_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_en_1_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_en_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_en_3_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_35"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_2_img = function() {
	this.spriteSheet = ss["storage_atlas_31"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_2_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_1_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_3_img = function() {
	this.spriteSheet = ss["storage_atlas_32"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.v10_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.v11_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.v12_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.v13_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.v14_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.v15_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.v16_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.v17_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.v18_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.v19_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.v1_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.v20_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.v21_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.v22_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.v23_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.v24_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.v25_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.v26_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.v27_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.v28_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.v29_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.v2_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.v30_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.v31_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.v32_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.v33_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.v34_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.v35_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.v36_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.v37_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.v38_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.v39_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.v3_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.v40_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.v41_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.v42_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.v43_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.v44_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.v45_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.v46_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.v47_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.v48_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.v49_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.v4_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.v50_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.v51_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.v52_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.v53_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.v54_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.v55_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.v56_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.v57_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.v58_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.v59_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.v5_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.v60_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.v6_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.v7_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.v8_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.v9_img = function() {
	this.spriteSheet = ss["storage_atlas_38"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_27"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_36"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.yellow_backing_img = function() {
	this.spriteSheet = ss["storage_atlas_37"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-180,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-60,360,120);
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
	this.shape.graphics.lf(["#FFFFCC","#FFCC00"],[0,1],9.3,-48,-25.7,63.1).s().p("AlpJTQhSgOg1hAQg1hAAAhSIAArlQAAhTA2hAQA1g/BSgPQBRgOBIAqIKCF0QBJApAcBOQAcBMgcBOQgdBOhIApIqCF0Qg1Aeg6AAQgVAAgWgEg");
	this.shape.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-60,110.1,120);
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


(lib.yellow_backing_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.yellow_backing_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.wardrobe_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_3_img();
	this.instance.setTransform(-315,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-30,630,60);
p.frameBounds = [rect];


(lib.wardrobe_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_3_img();
	this.instance.setTransform(-315,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-15,630,30);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-315,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-290,630,580);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-160,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-220,320,440);
p.frameBounds = [rect];


(lib.title_filter_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_en_img();
	this.instance.setTransform(-100,-20);

	this.instance_1 = new lib.title_filter_ru_img();
	this.instance_1.setTransform(-100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-20,200,40);
p.frameBounds = [rect, rect];


(lib.title_filter_body_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_3_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_3_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect];


(lib.title_filter_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_2_en_img();

	this.instance_1 = new lib.title_filter_2_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,40);
p.frameBounds = [rect, rect];


(lib.title_filter_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_1_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_1_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, new cjs.Rectangle(0,0,240,40)];


(lib.title_filter_body_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_0_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_0_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect];


(lib.shadow_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.set_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCSiTDOAAQDOAACTCTQCTCTAADNQAADPiTCSQiTCTjOAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.quiz_hint_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quiz_hint_5_img();
	this.instance.setTransform(-51.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-51.5,103,103);
p.frameBounds = [rect];


(lib.quiz_hint_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quiz_hint_4_img();
	this.instance.setTransform(-32.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-32.5,65,65);
p.frameBounds = [rect];


(lib.quiz_hint_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quiz_hint_3_img();
	this.instance.setTransform(-16.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-16.5,33,33);
p.frameBounds = [rect];


(lib.quiz_hint_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quiz_hint_2_img();
	this.instance.setTransform(-84,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-80,168,174);
p.frameBounds = [rect];


(lib.quiz_hint_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quiz_hint_1_img();
	this.instance.setTransform(-84,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-94.5,168,189);
p.frameBounds = [rect];


(lib.question_mark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.question_mark_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.phone2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.phone2_img();
	this.instance.setTransform(-200.5,-293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.5,-293,401,586);
p.frameBounds = [rect];


(lib.phone1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.phone1_img();
	this.instance.setTransform(-220,-293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-293,440,586);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnHFClCQFBlCHHABQHIgBFBFCQFDFCgBHHQABHHlDFCQlBFDnIgBQnHABlBlDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_body4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_body4_img();
	this.instance.setTransform(-166.5,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-192.5,333,385);
p.frameBounds = [rect];


(lib.makeup_body3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_body3_img();
	this.instance.setTransform(-185.5,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-121.5,371,243);
p.frameBounds = [rect];


(lib.makeup_body2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_body2_img();
	this.instance.setTransform(-220,-188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-188.5,440,377);
p.frameBounds = [rect];


(lib.makeup_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_body1_img();
	this.instance.setTransform(-139.5,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.5,-129,279,258);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.level_completed_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.level_completed_1_img();
	this.instance.setTransform(-190,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-70,380,140);
p.frameBounds = [rect];


(lib.indicator_part_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_4_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,30);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-140,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-40,280,80);
p.frameBounds = [rect];


(lib.hint_filter_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_filter_arrow_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.hint_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_2_img();
	this.instance.setTransform(-33,-51.1,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-51.1,66,102.3);
p.frameBounds = [rect];


(lib.hint_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_1_img();
	this.instance.setTransform(-110,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-80,220,160);
p.frameBounds = [rect];


(lib.hero4_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shadows6_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_shadows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero4_shadows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero4_shadows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero4_shadows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero4_shadows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero4_shadows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_rouge5_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_rouge1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero4_rouge2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero4_rouge3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero4_rouge4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero4_rouge5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero4_rouge6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips5_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_lips1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero4_lips2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero4_lips3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero4_lips4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero4_lips5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero4_lips6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero4_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero4_hair2_img();
	this.instance.setTransform(-118,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-64,221,211);
p.frameBounds = [rect];


(lib.hero4_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_hair1_img();
	this.instance.setTransform(-176,-31);

	this.instance_1 = new lib.hero4_hair2_img();
	this.instance_1.setTransform(-118,-64);

	this.instance_2 = new lib.hero4_hair3_img();
	this.instance_2.setTransform(-187,-69);

	this.instance_3 = new lib.hero4_hair4_img();
	this.instance_3.setTransform(-102,24);

	this.instance_4 = new lib.hero4_hair5_img();
	this.instance_4.setTransform(-104,27);

	this.instance_5 = new lib.hero4_hair6_img();
	this.instance_5.setTransform(-147,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-31,357,501);
p.frameBounds = [rect, new cjs.Rectangle(-118,-64,221,211), new cjs.Rectangle(-187,-69,373,282), new cjs.Rectangle(-102,24,203,270), new cjs.Rectangle(-104,27,209,293), new cjs.Rectangle(-147,-84,294,247)];


(lib.hero4_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_fringe0_img();
	this.instance.setTransform(-182,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-207.5,364,415);
p.frameBounds = [rect];


(lib.hero4_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_fringe2_img();
	this.instance.setTransform(-109,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-77.5,222,217);
p.frameBounds = [rect];


(lib.hero4_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_fringe1_img();
	this.instance.setTransform(-121,-87.5);

	this.instance_1 = new lib.hero4_fringe2_img();
	this.instance_1.setTransform(-109,-77.5);

	this.instance_2 = new lib.hero4_fringe3_img();
	this.instance_2.setTransform(-95,-72.5);

	this.instance_3 = new lib.hero4_fringe4_img();
	this.instance_3.setTransform(-129,-70.5);

	this.instance_4 = new lib.hero4_fringe5_img();
	this.instance_4.setTransform(-105,-74.5);

	this.instance_5 = new lib.hero4_fringe6_img();
	this.instance_5.setTransform(-87,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-87.5,242,175);
p.frameBounds = [rect, new cjs.Rectangle(-109,-77.5,222,217), new cjs.Rectangle(-95,-72.5,194,148), new cjs.Rectangle(-129,-70.5,259,152), new cjs.Rectangle(-105,-74.5,215,159), new cjs.Rectangle(-87,-67.5,185,136)];


(lib.hero4_face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_face_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes3_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_eyes1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero4_eyes2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero4_eyes3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero4_eyes4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero4_eyes5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero4_eyes6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero4_eyelashes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyelashes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows1_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero4_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_eyebrows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero4_eyebrows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero4_eyebrows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero4_eyebrows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero4_eyebrows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero4_eyebrows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero4_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring4_6_img();
	this.instance.setTransform(35,-80.5,1,1,0,0,180);

	this.instance_1 = new lib.earring4_6_img();
	this.instance_1.setTransform(-35,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-80.5,70,155.6);
p.frameBounds = [rect];


(lib.hero4_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring4_5_img();
	this.instance.setTransform(38,-80.5,1,1,0,0,180);

	this.instance_1 = new lib.earring4_5_img();
	this.instance_1.setTransform(-37,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-80.5,75,155.6);
p.frameBounds = [rect];


(lib.hero4_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring4_4_img();
	this.instance.setTransform(48,-78.5,1,1,0,0,180);

	this.instance_1 = new lib.earring4_4_img();
	this.instance_1.setTransform(-47,-78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-78.5,95,153.6);
p.frameBounds = [rect];


(lib.hero4_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring4_3_img();
	this.instance.setTransform(38,-80.5,1,1,0,0,180);

	this.instance_1 = new lib.earring4_3_img();
	this.instance_1.setTransform(-37,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-80.5,75,155.6);
p.frameBounds = [rect];


(lib.hero4_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring4_2_img();
	this.instance.setTransform(48,-82.5,1,1,0,0,180);

	this.instance_1 = new lib.earring4_2_img();
	this.instance_1.setTransform(-47,-82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-82.5,95,157.6);
p.frameBounds = [rect];


(lib.hero4_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring4_1_img();
	this.instance.setTransform(50,-80.5,1,1,0,0,180);

	this.instance_1 = new lib.earring4_1_img();
	this.instance_1.setTransform(-49,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-80.5,99,155.6);
p.frameBounds = [rect];


(lib.hero4_earring_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring4_img();
	this.instance.setTransform(-87,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-38.5,180,76);
p.frameBounds = [rect];


(lib.hero4_earring_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_earring1_img();
	this.instance.setTransform(-98.5,-42.5);

	this.instance_1 = new lib.hero4_earring2_img();
	this.instance_1.setTransform(-89,-39.5);

	this.instance_2 = new lib.hero4_earring3_img();
	this.instance_2.setTransform(-83,-38.5);

	this.instance_3 = new lib.hero4_earring4_img();
	this.instance_3.setTransform(-87,-38.5);

	this.instance_4 = new lib.hero4_earring5_img();
	this.instance_4.setTransform(-80,-37.5);

	this.instance_5 = new lib.hero4_earring6_img();
	this.instance_5.setTransform(-77,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-42.5,197,85);
p.frameBounds = [rect, new cjs.Rectangle(-89,-39.5,183,76), new cjs.Rectangle(-83,-38.5,170,82), new cjs.Rectangle(-87,-38.5,180,76), new cjs.Rectangle(-80,-37.5,165,70), new cjs.Rectangle(-77,-33.5,160,83), null];


(lib.hero4_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress3_img();
	this.instance.setTransform(-72.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-112,157,245);
p.frameBounds = [rect];


(lib.hero4_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(-72,-111);

	this.instance_1 = new lib.hero4_dress2_img();
	this.instance_1.setTransform(-90,-111.5);

	this.instance_2 = new lib.hero4_dress3_img();
	this.instance_2.setTransform(-72.5,-112);

	this.instance_3 = new lib.hero4_dress4_img();
	this.instance_3.setTransform(-83,-113);

	this.instance_4 = new lib.hero4_dress5_img();
	this.instance_4.setTransform(-70.5,-79.5);

	this.instance_5 = new lib.hero4_dress6_img();
	this.instance_5.setTransform(-72.5,-99.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-111,144,222);
p.frameBounds = [rect, new cjs.Rectangle(-90,-111.5,207,246), new cjs.Rectangle(-72.5,-112,157,245), new cjs.Rectangle(-83,-113,183,288), new cjs.Rectangle(-70.5,-79.5,152,250), new cjs.Rectangle(-72.5,-99.9,168,265)];


(lib.hero4_belt_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_belt3_img();
	this.instance.setTransform(-14,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-112.5,66,175);
p.frameBounds = [rect];


(lib.hero4_belt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_belt12_img();
	this.instance.setTransform(-26,-113.5);

	this.instance_1 = new lib.hero4_belt3_img();
	this.instance_1.setTransform(-14,-112.5);

	this.instance_2 = new lib.hero4_belt45_img();
	this.instance_2.setTransform(-15.5,-112.5);

	this.instance_3 = new lib.hero4_belt6_img();
	this.instance_3.setTransform(-21,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-113.5,70,185);
p.frameBounds = [rect, rect, new cjs.Rectangle(-14,-112.5,66,175), rect=new cjs.Rectangle(-15.5,-112.5,71,191), rect, new cjs.Rectangle(-21,-113.5,74,187), null];


(lib.hero4_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bag3_img();
	this.instance.setTransform(-76,-132.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-132.9,151,243);
p.frameBounds = [rect];


(lib.hero4_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_bag1_img();
	this.instance.setTransform(-76.5,-133.5);

	this.instance_1 = new lib.hero4_bag2_img();
	this.instance_1.setTransform(-76,-132.9);

	this.instance_2 = new lib.hero4_bag3_img();
	this.instance_2.setTransform(-76,-132.9);

	this.instance_3 = new lib.hero4_bag4_img();
	this.instance_3.setTransform(-74,-132);

	this.instance_4 = new lib.hero4_bag5_img();
	this.instance_4.setTransform(-74,-131.9);

	this.instance_5 = new lib.hero4_bag6_img();
	this.instance_5.setTransform(-76,-132.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-133.5,153,267);
p.frameBounds = [rect, new cjs.Rectangle(-76,-132.9,155,268), new cjs.Rectangle(-76,-132.9,151,243), new cjs.Rectangle(-74,-132,145,261), new cjs.Rectangle(-74,-131.9,154,256), new cjs.Rectangle(-76,-132.9,151,263), null];


(lib.hero3_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_shadows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero3_shadows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero3_shadows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero3_shadows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero3_shadows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero3_shadows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shadows3_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_rouge2_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero3_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lips6_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero3_lips2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero3_lips3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero3_lips4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero3_lips5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero3_lips6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-114,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,22,226,324);
p.frameBounds = [rect];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-114,22);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-156,10);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-186,-102);

	this.instance_3 = new lib.hero3_hair4_img();
	this.instance_3.setTransform(-171,-83);

	this.instance_4 = new lib.hero3_hair5_img();
	this.instance_4.setTransform(-162,-110);

	this.instance_5 = new lib.hero3_hair6_img();
	this.instance_5.setTransform(-204,-83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,22,226,324);
p.frameBounds = [rect, new cjs.Rectangle(-156,10,312,428), new cjs.Rectangle(-186,-102,377,293), new cjs.Rectangle(-171,-83,342,490), new cjs.Rectangle(-162,-110,164,446), new cjs.Rectangle(-204,-83,407,466)];


(lib.hero3_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe0_img();
	this.instance.setTransform(-259.5,-207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-259.5,-207.5,519,415);
p.frameBounds = [rect];


(lib.hero3_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-113.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.5,-88,227,176);
p.frameBounds = [rect];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-113.5,-88);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-108,-80.5);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-94,-76.5);

	this.instance_3 = new lib.hero3_fringe4_img();
	this.instance_3.setTransform(-98,-85.5);

	this.instance_4 = new lib.hero3_fringe5_img();
	this.instance_4.setTransform(-99,-84.5);

	this.instance_5 = new lib.hero3_fringe6_img();
	this.instance_5.setTransform(-104,-81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.5,-88,227,176);
p.frameBounds = [rect, new cjs.Rectangle(-108,-80.5,214,202), new cjs.Rectangle(-94,-76.5,190,239), new cjs.Rectangle(-98,-85.5,191,210), new cjs.Rectangle(-99,-84.5,196,165), new cjs.Rectangle(-104,-81.5,208,165)];


(lib.hero3_face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_face_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero3_eyes2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero3_eyes3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero3_eyes4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero3_eyes5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero3_eyes6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_eyelashes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyelashes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyebrows4_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero3_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_eyebrows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero3_eyebrows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero3_eyebrows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero3_eyebrows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero3_eyebrows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero3_eyebrows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_6_img();
	this.instance.setTransform(9,-80.5);

	this.instance_1 = new lib.earring3_6_img();
	this.instance_1.setTransform(-39,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-80.5,79,155.6);
p.frameBounds = [rect];


(lib.hero3_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_5_img();
	this.instance.setTransform(5,-80.5);

	this.instance_1 = new lib.earring3_5_img();
	this.instance_1.setTransform(-43,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-80.5,89,155.6);
p.frameBounds = [rect];


(lib.hero3_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_4_img();
	this.instance.setTransform(8,-80.5);

	this.instance_1 = new lib.earring3_4_img();
	this.instance_1.setTransform(-37,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-80.5,75,155.6);
p.frameBounds = [rect];


(lib.hero3_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_3_img();
	this.instance.setTransform(41,-80.5,1,1,0,0,180);

	this.instance_1 = new lib.earring3_3_img();
	this.instance_1.setTransform(-42,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-80.5,83,155.6);
p.frameBounds = [rect];


(lib.hero3_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_2_img();
	this.instance.setTransform(8,-80.5);

	this.instance_1 = new lib.earring3_2_img();
	this.instance_1.setTransform(-40,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-80.5,81,155.6);
p.frameBounds = [rect];


(lib.hero3_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring3_1_img();
	this.instance.setTransform(12,-80.5);

	this.instance_1 = new lib.earring3_1_img();
	this.instance_1.setTransform(-36,-80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-80.5,74,155.6);
p.frameBounds = [rect];


(lib.hero3_earring_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring2_img();
	this.instance.setTransform(-88,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-41.5,177,82);
p.frameBounds = [rect];


(lib.hero3_earring_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_earring1_img();
	this.instance.setTransform(-82.5,-38.5);

	this.instance_1 = new lib.hero3_earring2_img();
	this.instance_1.setTransform(-88,-41.5);

	this.instance_2 = new lib.hero3_earring3_img();
	this.instance_2.setTransform(-86,-35.5);

	this.instance_3 = new lib.hero3_earring4_img();
	this.instance_3.setTransform(-83,-35.5);

	this.instance_4 = new lib.hero3_earring5_img();
	this.instance_4.setTransform(-88,-37.5);

	this.instance_5 = new lib.hero3_earring6_img();
	this.instance_5.setTransform(-85,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-38.5,165,77);
p.frameBounds = [rect, new cjs.Rectangle(-88,-41.5,177,82), new cjs.Rectangle(-86,-35.5,173,87), new cjs.Rectangle(-83,-35.5,167,75), new cjs.Rectangle(-88,-37.5,177,69), new cjs.Rectangle(-85,-39.5,169,78), null];


(lib.hero3_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-91,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-126,182,252);
p.frameBounds = [rect];


(lib.hero3_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-91,-126);

	this.instance_1 = new lib.hero3_dress2_img();
	this.instance_1.setTransform(-53,-123);

	this.instance_2 = new lib.hero3_dress3_img();
	this.instance_2.setTransform(-51,-125);

	this.instance_3 = new lib.hero3_dress4_img();
	this.instance_3.setTransform(-56,-111);

	this.instance_4 = new lib.hero3_dress5_img();
	this.instance_4.setTransform(-51.5,-123);

	this.instance_5 = new lib.hero3_dress6_img();
	this.instance_5.setTransform(-54,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-126,182,252);
p.frameBounds = [rect, new cjs.Rectangle(-53,-123,145,257), new cjs.Rectangle(-51,-125,134,280), new cjs.Rectangle(-56,-111,146,439), new cjs.Rectangle(-51.5,-123,144,259), new cjs.Rectangle(-54,-120,158,317)];


(lib.hero3_belt_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_belt12_img();
	this.instance.setTransform(-10.5,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-110,43,176);
p.frameBounds = [rect];


(lib.hero3_belt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_belt12_img();
	this.instance.setTransform(-10.5,-110);

	this.instance_1 = new lib.hero3_belt3_img();
	this.instance_1.setTransform(-10.5,-100.6);

	this.instance_2 = new lib.hero3_belt45_img();
	this.instance_2.setTransform(-10,-99.5);

	this.instance_3 = new lib.hero3_belt6_img();
	this.instance_3.setTransform(-9,-95.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-110,43,176);
p.frameBounds = [rect, rect, new cjs.Rectangle(-10.5,-100.6,49,185), rect=new cjs.Rectangle(-10,-99.5,40,179), rect, new cjs.Rectangle(-9,-95.1,44,168), null];


(lib.hero3_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bag1_img();
	this.instance.setTransform(-49,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-116,98,232);
p.frameBounds = [rect];


(lib.hero3_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_bag1_img();
	this.instance.setTransform(-49,-116);

	this.instance_1 = new lib.hero3_bag2_img();
	this.instance_1.setTransform(-51,-115);

	this.instance_2 = new lib.hero3_bag3_img();
	this.instance_2.setTransform(-49,-113);

	this.instance_3 = new lib.hero3_bag4_img();
	this.instance_3.setTransform(-60,-112);

	this.instance_4 = new lib.hero3_bag5_img();
	this.instance_4.setTransform(-53,-113);

	this.instance_5 = new lib.hero3_bag6_img();
	this.instance_5.setTransform(-59,-113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-116,98,232);
p.frameBounds = [rect, new cjs.Rectangle(-51,-115,103,229), new cjs.Rectangle(-49,-113,101,243), new cjs.Rectangle(-60,-112,118,247), new cjs.Rectangle(-53,-113,110,234), new cjs.Rectangle(-59,-113.9,110,233), null];


(lib.hero2_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows2_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge6_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips6_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair2_img();
	this.instance.setTransform(-184,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-33,373,500);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-217,-74);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-184,-33);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-134.4,-16);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-195,-78);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-184,-98);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-148,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-217,-74,435,548);
p.frameBounds = [rect, new cjs.Rectangle(-184,-33,373,500), new cjs.Rectangle(-134.4,-16,258,393), new cjs.Rectangle(-195,-78,382,491), new cjs.Rectangle(-184,-98,366,364), new cjs.Rectangle(-148,-50,291,245)];


(lib.hero2_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-189,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-186.5,378,373);
p.frameBounds = [rect];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe2_img();
	this.instance.setTransform(-132.4,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.4,-96.5,261,180);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-118,-94);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-132.4,-96.5);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-127.4,-90.5);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-109.9,-85);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-123,-88);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-117.5,-104.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118,-94,236,188);
p.frameBounds = [rect, new cjs.Rectangle(-132.4,-96.5,261,180), new cjs.Rectangle(-127.4,-90.5,246,195), new cjs.Rectangle(-109.9,-85,206,227), new cjs.Rectangle(-123,-88,239,155), new cjs.Rectangle(-117.5,-104.5,230,169)];


(lib.hero2_face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_face_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyelashes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyelashes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring2_6_img();
	this.instance.setTransform(34.9,-79.6,1,1,0,0,180);

	this.instance_1 = new lib.earring2_6_img();
	this.instance_1.setTransform(-35.1,-79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-79.6,70,154.7);
p.frameBounds = [rect];


(lib.hero2_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring2_5_img();
	this.instance.setTransform(51.9,-79.6,1,1,0,0,180);

	this.instance_1 = new lib.earring2_5_img();
	this.instance_1.setTransform(-51.1,-79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-79.6,103,154.7);
p.frameBounds = [rect];


(lib.hero2_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring2_4_img();
	this.instance.setTransform(44.9,-81.6,1,1,0,0,180);

	this.instance_1 = new lib.earring2_4_img();
	this.instance_1.setTransform(-45.1,-81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.1,-81.6,90,156.7);
p.frameBounds = [rect];


(lib.hero2_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring2_3_img();
	this.instance.setTransform(31.9,-79.6,1,1,0,0,180);

	this.instance_1 = new lib.earring2_3_img();
	this.instance_1.setTransform(-32.1,-79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-79.6,66,154.7);
p.frameBounds = [rect];


(lib.hero2_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring2_2_img();
	this.instance.setTransform(41.9,-86.6,1,1,0,0,180);

	this.instance_1 = new lib.earring2_2_img();
	this.instance_1.setTransform(-42.1,-86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.1,-86.6,84,161.7);
p.frameBounds = [rect];


(lib.hero2_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring2_1_img();
	this.instance.setTransform(44.9,-88.6,1,1,0,0,180);

	this.instance_1 = new lib.earring2_1_img();
	this.instance_1.setTransform(-45.1,-88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.1,-88.6,90,163.7);
p.frameBounds = [rect];


(lib.hero2_earring_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(-93,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-39.5,189,78);
p.frameBounds = [rect];


(lib.hero2_earring_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(-92,-47);

	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-80,-41.5);

	this.instance_2 = new lib.hero2_earring3_img();
	this.instance_2.setTransform(-75,-40.5);

	this.instance_3 = new lib.hero2_earring4_img();
	this.instance_3.setTransform(-93,-39.5);

	this.instance_4 = new lib.hero2_earring5_img();
	this.instance_4.setTransform(-95,-36.5);

	this.instance_5 = new lib.hero2_earring6_img();
	this.instance_5.setTransform(-80,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-47,184,94);
p.frameBounds = [rect, new cjs.Rectangle(-80,-41.5,166,94), new cjs.Rectangle(-75,-40.5,154,79), new cjs.Rectangle(-93,-39.5,189,78), new cjs.Rectangle(-95,-36.5,195,74), new cjs.Rectangle(-80,-39.5,163,79), null];


(lib.hero2_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-82,-166);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-89.9,-224.5,1.014,1);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-88.4,-129);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-88.4,-217.5);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-98.9,-117);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-62,-115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-166,164,332);
p.frameBounds = [rect, new cjs.Rectangle(-89.9,-224.5,222,362), new cjs.Rectangle(-88.4,-129,212,315), new cjs.Rectangle(-88.4,-217.5,220,366), new cjs.Rectangle(-98.9,-117,220,281), new cjs.Rectangle(-62,-115.9,144,304)];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-98.9,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.9,-117,220,281);
p.frameBounds = [rect];


(lib.hero2_belt_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_belt1_img();
	this.instance.setTransform(-88.5,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-146,183,235);
p.frameBounds = [rect];


(lib.hero2_belt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_belt1_img();
	this.instance.setTransform(-88.5,-146);

	this.instance_1 = new lib.hero2_belt2_img();
	this.instance_1.setTransform(-51,-143);

	this.instance_2 = new lib.hero2_belt3_img();
	this.instance_2.setTransform(-56,-107.9);

	this.instance_3 = new lib.hero2_belt45_img();
	this.instance_3.setTransform(-61.5,-149);

	this.instance_4 = new lib.hero2_belt6_img();
	this.instance_4.setTransform(-52,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{x:-61.5,y:-149}}]},1).to({state:[{t:this.instance_3,p:{x:-71.5,y:-144.5}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-146,183,235);
p.frameBounds = [rect, new cjs.Rectangle(-51,-143,136,224), new cjs.Rectangle(-56,-107.9,124,224), new cjs.Rectangle(-61.5,-149,139,228), new cjs.Rectangle(-71.5,-144.5,139,228), new cjs.Rectangle(-52,-141,118,215), null];


(lib.hero2_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(-101,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-150.5,202,301);
p.frameBounds = [rect];


(lib.hero2_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(-101,-150.5);

	this.instance_1 = new lib.hero2_bag2_img();
	this.instance_1.setTransform(-88,-150);

	this.instance_2 = new lib.hero2_bag3_img();
	this.instance_2.setTransform(-81,-150);

	this.instance_3 = new lib.hero2_bag4_img();
	this.instance_3.setTransform(-82,-150);

	this.instance_4 = new lib.hero2_bag5_img();
	this.instance_4.setTransform(-85,-151);

	this.instance_5 = new lib.hero2_bag6_img();
	this.instance_5.setTransform(-88,-150.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-150.5,202,301);
p.frameBounds = [rect, new cjs.Rectangle(-88,-150,189,322), new cjs.Rectangle(-81,-150,181,336), new cjs.Rectangle(-82,-150,179,307), new cjs.Rectangle(-85,-151,186,299), new cjs.Rectangle(-88,-150.9,189,314), null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows6_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge2_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips5_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair5_img();
	this.instance.setTransform(-211.6,-261.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-211.6,-261.1,422,433);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-141,-212.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-153.1,-268.1);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-152,-276.1);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-105.1,-250.1);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-211.6,-261.1);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-182,-193.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141,-212.5,282,425);
p.frameBounds = [rect, new cjs.Rectangle(-153.1,-268.1,301,455), new cjs.Rectangle(-152,-276.1,306,263), new cjs.Rectangle(-105.1,-250.1,209,215), new cjs.Rectangle(-211.6,-261.1,422,433), new cjs.Rectangle(-182,-193.1,360,487)];


(lib.hero1_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-326,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-326,-185,652,370);
p.frameBounds = [rect];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe5_img();
	this.instance.setTransform(-99,-97.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-97.1,210,185);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-104.5,-91);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-101.5,-96);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-125.1,-126.1);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-96.6,-89.6);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-99,-97.1);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-149.1,-99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.5,-91,209,182);
p.frameBounds = [rect, new cjs.Rectangle(-101.5,-96,207,216), new cjs.Rectangle(-125.1,-126.1,263,209), new cjs.Rectangle(-96.6,-89.6,212,224), new cjs.Rectangle(-99,-97.1,210,185), new cjs.Rectangle(-149.1,-99.6,299,248)];


(lib.hero1_face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_face_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes2_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyelashes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyelashes_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows2_img();
	this.instance.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-180.5,-210);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-180.5,-210);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-180.5,-210);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-180.5,-210);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-180.5,-210);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-180.5,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-210,361,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_6_img();
	this.instance.setTransform(38,-79.1,1,1,0,0,180);

	this.instance_1 = new lib.earring1_6_img();
	this.instance_1.setTransform(-38,-79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-79.1,76,154.2);
p.frameBounds = [rect];


(lib.hero1_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_5_img();
	this.instance.setTransform(40,-77.1,1,1,0,0,180);

	this.instance_1 = new lib.earring1_5_img();
	this.instance_1.setTransform(-40,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-77.1,80,152.2);
p.frameBounds = [rect];


(lib.hero1_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_4_img();
	this.instance.setTransform(45,-84.1,1,1,0,0,180);

	this.instance_1 = new lib.earring1_4_img();
	this.instance_1.setTransform(-44,-83.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-84.1,89,159.2);
p.frameBounds = [rect];


(lib.hero1_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_3_img();
	this.instance.setTransform(41,-79.1,1,1,0,0,180);

	this.instance_1 = new lib.earring1_3_img();
	this.instance_1.setTransform(-41,-79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-79.1,82,154.2);
p.frameBounds = [rect];


(lib.hero1_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_2_img();
	this.instance.setTransform(37,-84.1,1,1,0,0,180);

	this.instance_1 = new lib.earring1_2_img();
	this.instance_1.setTransform(-36,-84.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-84.1,73,159.2);
p.frameBounds = [rect];


(lib.hero1_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_1_img();
	this.instance.setTransform(57,-89.1,1,1,0,0,180);

	this.instance_1 = new lib.earring1_1_img();
	this.instance_1.setTransform(-58,-89.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.podstavka_img();
	this.instance_2.setTransform(-33,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-89.1,115,164.2);
p.frameBounds = [rect];


(lib.hero1_earring_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_img();
	this.instance.setTransform(-82.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-42.5,168,73);
p.frameBounds = [rect];


(lib.hero1_earring_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(-105.5,-42.5);

	this.instance_1 = new lib.hero1_earring2_img();
	this.instance_1.setTransform(-82.5,-42.5);

	this.instance_2 = new lib.hero1_earring3_img();
	this.instance_2.setTransform(-86.5,-36.5);

	this.instance_3 = new lib.hero1_earring4_img();
	this.instance_3.setTransform(-88.5,-41.5);

	this.instance_4 = new lib.hero1_earring5_img();
	this.instance_4.setTransform(-83.5,-33.5);

	this.instance_5 = new lib.hero1_earring6_img();
	this.instance_5.setTransform(-77.5,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-42.5,211,85);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-42.5,168,73), new cjs.Rectangle(-86.5,-36.5,175,93), new cjs.Rectangle(-88.5,-41.5,178,87), new cjs.Rectangle(-83.5,-33.5,166,78), new cjs.Rectangle(-77.5,-36.5,159,80), null];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-86.5,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-115,171,253);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-94,-108.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-104.5,-119);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-78.5,-122.9);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-81.5,-106);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-97.5,-110.9);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-86.5,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-108.5,188,217);
p.frameBounds = [rect, new cjs.Rectangle(-104.5,-119,209,329), new cjs.Rectangle(-78.5,-122.9,166,350), new cjs.Rectangle(-81.5,-106,171,266), new cjs.Rectangle(-97.5,-110.9,195,332), new cjs.Rectangle(-86.5,-115,171,253)];


(lib.hero1_belt_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_belt45_img();
	this.instance.setTransform(-65,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-75,95,194);
p.frameBounds = [rect];


(lib.hero1_belt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_belt12_img();
	this.instance.setTransform(-63,-113);

	this.instance_1 = new lib.hero1_belt3_img();
	this.instance_1.setTransform(-73,-125);

	this.instance_2 = new lib.hero1_belt45_img();
	this.instance_2.setTransform(-65,-75);

	this.instance_3 = new lib.hero1_belt6_img();
	this.instance_3.setTransform(-64,-113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-113,126,226);
p.frameBounds = [rect, rect, new cjs.Rectangle(-73,-125,134,265), rect=new cjs.Rectangle(-65,-75,95,194), rect, new cjs.Rectangle(-64,-113,131,234), null];


(lib.hero1_bag_front_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag4_img();
	this.instance.setTransform(-88,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-153,173,302);
p.frameBounds = [rect];


(lib.hero1_bag_front_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-88,-151);

	this.instance_1 = new lib.hero1_bag2_img();
	this.instance_1.setTransform(-103,-151);

	this.instance_2 = new lib.hero1_bag3_img();
	this.instance_2.setTransform(-94,-151);

	this.instance_3 = new lib.hero1_bag4_img();
	this.instance_3.setTransform(-88,-153);

	this.instance_4 = new lib.hero1_bag5_img();
	this.instance_4.setTransform(-93,-153);

	this.instance_5 = new lib.hero1_bag6_img();
	this.instance_5.setTransform(-101,-152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-151,174,312);
p.frameBounds = [rect, new cjs.Rectangle(-103,-151,189,299), new cjs.Rectangle(-94,-151,181,311), new cjs.Rectangle(-88,-153,173,302), new cjs.Rectangle(-93,-153,178,308), new cjs.Rectangle(-101,-152,190,336), null];


(lib.hanger2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-41,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-19.5,82,39);
p.frameBounds = [rect];


(lib.hanger1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger1_img();
	this.instance.setTransform(-41,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-19.5,82,39);
p.frameBounds = [rect];


(lib.filters_body_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_open_img();
	this.instance.setTransform(-45,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.filters_body_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_exit_img();
	this.instance.setTransform(-45,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.filters_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_bg_img();
	this.instance.setTransform(-190,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
p.frameBounds = [rect];


(lib.dragon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dragon_img();
	this.instance.setTransform(-304,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-304,-320,608,640);
p.frameBounds = [rect];


(lib.comics_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_shadows_img();
	this.instance.setTransform(-70,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.check_lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_lips_img();
	this.instance.setTransform(-35,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.check_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_hairstyle_img();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.check_eyes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_eyes_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.check_eyebrows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_eyebrows_img();
	this.instance.setTransform(-25,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-90,50,180);
p.frameBounds = [rect];


(lib.check_blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_blush_img();
	this.instance.setTransform(-60,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.body4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body4_img();
	this.instance.setTransform(-79.5,-261.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-261.5,159,523);
p.frameBounds = [rect];


(lib.body3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body3_img();
	this.instance.setTransform(-108.5,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-230,217,460);
p.frameBounds = [rect];


(lib.body2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body2_img();
	this.instance.setTransform(-106,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-260,212,520);
p.frameBounds = [rect];


(lib.body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_img();
	this.instance.setTransform(-87.5,-228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-228,175,456);
p.frameBounds = [rect];


(lib.body_title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_3_img();
	this.instance.setTransform(-200,-90);

	this.instance_1 = new lib.title_ru_3_img();
	this.instance_1.setTransform(-200,-90);

	this.instance_2 = new lib.title_tr_3_img();
	this.instance_2.setTransform(-200,-90);

	this.instance_3 = new lib.title_ja_3_img();
	this.instance_3.setTransform(-200,-90);

	this.instance_4 = new lib.title_zh_3_img();
	this.instance_4.setTransform(-200,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_2_img();
	this.instance.setTransform(-200,-90);

	this.instance_1 = new lib.title_ru_2_img();
	this.instance_1.setTransform(-200,-90);

	this.instance_2 = new lib.title_tr_2_img();
	this.instance_2.setTransform(-200,-90);

	this.instance_3 = new lib.title_ja_2_img();
	this.instance_3.setTransform(-200,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_1_img();
	this.instance.setTransform(-200,-90);

	this.instance_1 = new lib.title_ru_1_img();
	this.instance_1.setTransform(-200,-90);

	this.instance_2 = new lib.title_tr_1_img();
	this.instance_2.setTransform(-200,-90);

	this.instance_3 = new lib.title_ja_1_img();
	this.instance_3.setTransform(-200,-90);

	this.instance_4 = new lib.title_zh_1_img();
	this.instance_4.setTransform(-200,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.body_message_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_7_img();
	this.instance.setTransform(-193,-130);

	this.instance_1 = new lib.message_ru_7_img();
	this.instance_1.setTransform(-193,-130);

	this.instance_2 = new lib.message_tr_7_img();
	this.instance_2.setTransform(-193,-130);

	this.instance_3 = new lib.message_ja_7_img();
	this.instance_3.setTransform(-193,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-130,385,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_message_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_6_img();
	this.instance.setTransform(-193,-74);

	this.instance_1 = new lib.message_ru_6_img();
	this.instance_1.setTransform(-193,-74);

	this.instance_2 = new lib.message_tr_6_img();
	this.instance_2.setTransform(-193,-74);

	this.instance_3 = new lib.message_ja_6_img();
	this.instance_3.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_message_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_5_img();
	this.instance.setTransform(-193,-74);

	this.instance_1 = new lib.message_ru_5_img();
	this.instance_1.setTransform(-193,-74);

	this.instance_2 = new lib.message_tr_5_img();
	this.instance_2.setTransform(-193,-74);

	this.instance_3 = new lib.message_ja_5_img();
	this.instance_3.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_message_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_4_img();
	this.instance.setTransform(-193,-74);

	this.instance_1 = new lib.message_ru_4_img();
	this.instance_1.setTransform(-193,-74);

	this.instance_2 = new lib.message_tr_4_img();
	this.instance_2.setTransform(-193,-74);

	this.instance_3 = new lib.message_ja_4_img();
	this.instance_3.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_message_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_3_img();
	this.instance.setTransform(-193,-74);

	this.instance_1 = new lib.message_ru_3_img();
	this.instance_1.setTransform(-193,-74);

	this.instance_2 = new lib.message_tr_3_img();
	this.instance_2.setTransform(-193,-74);

	this.instance_3 = new lib.message_ja_3_img();
	this.instance_3.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_message_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_2_img();
	this.instance.setTransform(-193,-74);

	this.instance_1 = new lib.message_ru_2_img();
	this.instance_1.setTransform(-193,-74);

	this.instance_2 = new lib.message_tr_2_img();
	this.instance_2.setTransform(-193,-74);

	this.instance_3 = new lib.message_ja_2_img();
	this.instance_3.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_message_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.message_en_1_img();
	this.instance.setTransform(-193,-74);

	this.instance_1 = new lib.message_ru_1_img();
	this.instance_1.setTransform(-193,-74);

	this.instance_2 = new lib.message_tr_1_img();
	this.instance_2.setTransform(-193,-74);

	this.instance_3 = new lib.message_ja_1_img();
	this.instance_3.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.blue_backing_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blue_backing_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bg_message_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_7_img();
	this.instance.setTransform(-193,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-130,385,260);
p.frameBounds = [rect];


(lib.bg_message_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_6_img();
	this.instance.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.bg_message_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_5_img();
	this.instance.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.bg_message_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_4_img();
	this.instance.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.bg_message_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_3_img();
	this.instance.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.bg_message_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_2_img();
	this.instance.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.bg_message_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_message_1_img();
	this.instance.setTransform(-193,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessories_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag4_6_img();
	this.instance.setTransform(-47,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-40,94,80);
p.frameBounds = [rect];


(lib.accessories_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag3_6_img();
	this.instance.setTransform(-55,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmyG1IilkVIBslqIIEkHIHWCGIBpChIgOEfIi1DSIqQCLg");
	this.shape.setTransform(-0.3,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-48,120.1,93.4);
p.frameBounds = [rect];


(lib.accessories_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_6_img();
	this.instance.setTransform(-64,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApqE8IhGjAIDtpmIJKhQIHsE8IA+JFIh1DAIkAA0g");
	this.shape.setTransform(0.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.6,-57.9,138,114.4);
p.frameBounds = [rect];


(lib.accessories_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag1_6_img();
	this.instance.setTransform(-59,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao3E8IhejJIBjnyIB5hyIJVhJIHkFqIAWC2IiPIVIjMBAg");
	this.shape.setTransform(0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-58.4,132.5,114.3);
p.frameBounds = [rect];


(lib.accessories_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag4_5_img();
	this.instance.setTransform(-53.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-40.5,107,81);
p.frameBounds = [rect];


(lib.accessories_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag3_5_img();
	this.instance.setTransform(-55,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmNISIjHjxIBjmRIHRnGIHmElICPDbIAAEkIieDnIpuBig");
	this.shape.setTransform(-1.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.4,-58,119.5,113.6);
p.frameBounds = [rect];


(lib.accessories_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_5_img();
	this.instance.setTransform(-54,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnIGIIiEmgIBlkVIINkqID3A7IEwIqIgEEuIlqEcg");
	this.shape.setTransform(-1.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.1,-59.4,117.9,120.1);
p.frameBounds = [rect];


(lib.accessories_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag1_5_img();
	this.instance.setTransform(-53.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoQDqIhUigIBRn+IJ5g0IGuERIBREvIhzEWIj/B7g");
	this.shape.setTransform(0.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.8,-48.4,122.8,98);
p.frameBounds = [rect];


(lib.accessories_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag4_4_img();
	this.instance.setTransform(-45.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-37,91,74);
p.frameBounds = [rect];


(lib.accessories_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag3_4_img();
	this.instance.setTransform(-59,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqWD8ICbnFIHulbIHrEgIC5FfIhhETIvqC3g");
	this.shape.setTransform(-1.6,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-57.1,132.7,109.9);
p.frameBounds = [rect];


(lib.accessories_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_4_img();
	this.instance.setTransform(-62.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApTEwIhvk6IBkmKIDKiDIJxgRIGrEoIA7EgIh+GQIkRB5g");
	this.shape.setTransform(-1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-55.3,141.5,110.7);
p.frameBounds = [rect];


(lib.accessories_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag1_4_img();
	this.instance.setTransform(-53,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnA6IACgHIE8k/IHeB5IAzGgg");
	this.shape.setTransform(0.3,-35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-62.6,106,111.1);
p.frameBounds = [rect];


(lib.accessories_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag4_3_img();
	this.instance.setTransform(-51.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-36,103,72);
p.frameBounds = [rect];


(lib.accessories_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag3_3_img();
	this.instance.setTransform(-50.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AocEVIgJlqIAliCIHZkxIHgC2IBICFIAlGzIiCCOIr0CVg");
	this.shape.setTransform(0.9,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-55,110.2,104.2);
p.frameBounds = [rect];


(lib.accessories_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_3_img();
	this.instance.setTransform(-52.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AopDxIgJj4ICsmmIJahXIFfEWIgHILIjQDog");
	this.shape.setTransform(-0.9,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-53.8,112.7,103.5);
p.frameBounds = [rect];


(lib.accessories_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag1_3_img();
	this.instance.setTransform(-56,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqRC0IBmn3IDPiTIIFg/IHpHLIitIhIj2A/g");
	this.shape.setTransform(0.1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.7,-55.1,131.8,107);
p.frameBounds = [rect];


(lib.accessories_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag4_2_img();
	this.instance.setTransform(-51,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-41,102,82);
p.frameBounds = [rect];


(lib.accessories_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag3_2_img();
	this.instance.setTransform(-51.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApCj5IIOkaIJTC4IAkLDIwuCsg");
	this.shape.setTransform(-0.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.4,-53.4,115.9,106.5);
p.frameBounds = [rect];


(lib.accessories_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_2_img();
	this.instance.setTransform(-58,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApWD+IhKkEIDEnZILChJIG7HcIjBIPIjfBmg");
	this.shape.setTransform(0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.1,-55.7,134.8,110.7);
p.frameBounds = [rect];


(lib.accessories_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag1_2_img();
	this.instance.setTransform(-60.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap1EQIgLjXIEzo/IOODkIBAKkIh7CFg");
	this.shape.setTransform(-0.6,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.6,-58.3,128.2,103.9);
p.frameBounds = [rect];


(lib.accessories_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag4_1_img();
	this.instance.setTransform(-49.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-39.5,99,79);
p.frameBounds = [rect];


(lib.accessories_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag3_1_img();
	this.instance.setTransform(-49,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aovk+IQFh3IBIC+IASIKIwACjg");
	this.shape.setTransform(-2.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.1,-44.8,112.1,87.7);
p.frameBounds = [rect];


(lib.accessories_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag2_1_img();
	this.instance.setTransform(-65,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArmBGIDwqHITdHhIkNKig");
	this.shape.setTransform(0.4,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-60.1,148.8,115.7);
p.frameBounds = [rect];


(lib.accessories_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bag1_1_img();
	this.instance.setTransform(-50.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzD6IhDiAIBjoJII+g+IHMEhIhtI6IieBAg");
	this.shape.setTransform(1.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.7,-46.8,113.6,92.4);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB900").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
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

	this.instance_3 = new lib.copyright_title_ja_img();
	this.instance_3.setTransform(-250,-150);

	this.instance_4 = new lib.copyright_title_zh_img();
	this.instance_4.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

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


(lib.snowflake_flashing_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowflake_flashing_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_img();
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.snowfall_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgPnAu4MAAAhdvIfOAAMAAABdvg");
	this.shape.setTransform(400,300,4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.Snowflake_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_2_img();
	this.instance.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
p.frameBounds = [rect];


(lib.snowfall_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fA2sMAAAhtXMB8/AAAMAAABtXg");
	this.shape.setTransform(500,300,1.25,0.857);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,600);
p.frameBounds = [rect];


(lib.smiley_smiling_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smiley_smiling_1_img();
	this.instance.setTransform(-40,-40);

	this.instance_1 = new lib.smiley_smiling_4_img();
	this.instance_1.setTransform(-40,-40);

	this.instance_2 = new lib.smiley_smiling_3_img();
	this.instance_2.setTransform(-40,-40);

	this.instance_3 = new lib.smiley_smiling_2_img();
	this.instance_3.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.radio_button_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.radio_button_0_img();
	this.instance.setTransform(-20,-20,0.222,0.222);

	this.instance_1 = new lib.radio_button_1_img();
	this.instance_1.setTransform(-20,-20,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect];


(lib.output_numbers_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.output_numbers_0_img();
	this.instance.setTransform(-20,-20);

	this.instance_1 = new lib.output_numbers_1_img();
	this.instance_1.setTransform(-20,-20);

	this.instance_2 = new lib.output_numbers_2_img();
	this.instance_2.setTransform(-20,-20);

	this.instance_3 = new lib.output_numbers_3_img();
	this.instance_3.setTransform(-20,-20);

	this.instance_4 = new lib.output_numbers_4_img();
	this.instance_4.setTransform(-20,-20);

	this.instance_5 = new lib.output_numbers_5_img();
	this.instance_5.setTransform(-20,-20);

	this.instance_6 = new lib.output_numbers_6_img();
	this.instance_6.setTransform(-20,-20);

	this.instance_7 = new lib.output_numbers_7_img();
	this.instance_7.setTransform(-20,-20);

	this.instance_8 = new lib.output_numbers_8_img();
	this.instance_8.setTransform(-20,-20);

	this.instance_9 = new lib.output_numbers_9_img();
	this.instance_9.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


(lib.glitter_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_2_img();
	this.instance.setTransform(-25,-25);

	this.instance_1 = new lib.glitter_2_2_img();
	this.instance_1.setTransform(-25,-25);

	this.instance_2 = new lib.glitter_3_2_img();
	this.instance_2.setTransform(-25,-25);

	this.instance_3 = new lib.glitter_4_2_img();
	this.instance_3.setTransform(-9.1,-34.1,1,1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:-25,y:-25}}]}).to({state:[{t:this.instance_1,p:{rotation:0,x:-25}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:-25}}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2,p:{rotation:90,x:25}}]},2).to({state:[{t:this.instance_1,p:{rotation:90,x:25}}]},2).to({state:[{t:this.instance,p:{rotation:60,x:9.2,y:-34.1}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-34.1,-34.1,68.3,68.3), rect, rect=new cjs.Rectangle(-25,-25,50,50), rect, rect, rect, rect=new cjs.Rectangle(-34.1,-34.1,68.3,68.3), rect];


(lib.flash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_4_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.track_move_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_1_2_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


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


(lib.snow_logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snow_logo_img();
	this.instance.setTransform(-145,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-45,290,90);
p.frameBounds = [rect];


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shadow_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


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


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-95,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-70,190,140);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.logotype_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logotype_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
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


(lib.forward_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.animation_for_forward_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_forward_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:220,alpha:1},10).to({y:240},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,652), new cjs.Rectangle(-210,-210,420,634), new cjs.Rectangle(-210,-210,420,616), new cjs.Rectangle(-210,-210,420,598), new cjs.Rectangle(-210,-210,420,580), new cjs.Rectangle(-210,-210,420,562), new cjs.Rectangle(-210,-210,420,544), new cjs.Rectangle(-210,-210,420,526), rect=new cjs.Rectangle(-210,-210,420,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,526), new cjs.Rectangle(-210,-210,420,542), new cjs.Rectangle(-210,-210,420,558), new cjs.Rectangle(-210,-210,420,574), new cjs.Rectangle(-210,-210,420,590), new cjs.Rectangle(-210,-210,420,606), new cjs.Rectangle(-210,-210,420,622), new cjs.Rectangle(-210,-210,420,638), new cjs.Rectangle(-210,-210,420,654), new cjs.Rectangle(-210,-210,420,670)];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-60,110.1,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-54.9,-63,115.6,126), new cjs.Rectangle(-59.4,-66,121.1,132), new cjs.Rectangle(-63.9,-69,126.6,138), new cjs.Rectangle(-68.5,-72,132.1,144), new cjs.Rectangle(-73,-75,137.7,150), new cjs.Rectangle(-70.9,-75,137.6,150), new cjs.Rectangle(-68.9,-75,137.6,150), new cjs.Rectangle(-66.9,-75,137.6,150), new cjs.Rectangle(-64.9,-75,137.6,150), new cjs.Rectangle(-63,-75,137.6,150), new cjs.Rectangle(-61,-75,137.6,150), new cjs.Rectangle(-59,-75,137.6,150), new cjs.Rectangle(-57,-75,137.6,150), new cjs.Rectangle(-55,-75,137.6,150), new cjs.Rectangle(-53,-75,137.7,150), new cjs.Rectangle(-52.5,-72,132.1,144), new cjs.Rectangle(-52,-69,126.6,138), new cjs.Rectangle(-51.5,-66,121.1,132), new cjs.Rectangle(-50.9,-63,115.6,126), rect=new cjs.Rectangle(-50.4,-60,110.1,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.wardrobe_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_mc();
	this.instance.setTransform(230,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_1_1_mc();
	this.instance_1.setTransform(-230,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-220,780,440);
p.frameBounds = [rect];


(lib.vic10_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v60_img();
	this.instance.setTransform(-72,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic10_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v59_img();
	this.instance.setTransform(-63,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic10_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v58_img();
	this.instance.setTransform(-63,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic10_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v57_img();
	this.instance.setTransform(-62,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v56_img();
	this.instance.setTransform(64,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v55_img();
	this.instance.setTransform(-70,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v54_img();
	this.instance.setTransform(-51,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v47_img();
	this.instance.setTransform(-52,-47.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v53_img();
	this.instance.setTransform(61,-57,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v49_img();
	this.instance.setTransform(46,-60,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v46_img();
	this.instance.setTransform(51,-61,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v52_img();
	this.instance.setTransform(-61,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v48_img();
	this.instance.setTransform(-58,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v45_img();
	this.instance.setTransform(41,-60,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v51_img();
	this.instance.setTransform(-61,-36,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v50_img();
	this.instance.setTransform(-49,-50,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v49_img();
	this.instance.setTransform(45,-59,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v48_img();
	this.instance.setTransform(-58,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v47_img();
	this.instance.setTransform(-52,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v46_img();
	this.instance.setTransform(51,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v45_img();
	this.instance.setTransform(42,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v44_img();
	this.instance.setTransform(-61.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v43_img();
	this.instance.setTransform(-62,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v42_img();
	this.instance.setTransform(49,-55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v41_img();
	this.instance.setTransform(-49,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v40_img();
	this.instance.setTransform(-43,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v39_img();
	this.instance.setTransform(-63,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v38_img();
	this.instance.setTransform(-43,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v37_img();
	this.instance.setTransform(-31.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v36_img();
	this.instance.setTransform(-48.1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v35_img();
	this.instance.setTransform(-37.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v34_img();
	this.instance.setTransform(-42,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v33_img();
	this.instance.setTransform(-47,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v32_img();
	this.instance.setTransform(-46,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v31_img();
	this.instance.setTransform(-42.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v30_img();
	this.instance.setTransform(21.6,-62.9,0.847,0.847,0,-30,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v29_img();
	this.instance.setTransform(50,-51,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v28_img();
	this.instance.setTransform(60.3,-43.6,0.942,0.942,0,15,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v27_img();
	this.instance.setTransform(-46.5,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v26_img();
	this.instance.setTransform(39.8,-56,0.94,0.94,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v25_img();
	this.instance.setTransform(-69.9,40,0.945,0.945,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v24_img();
	this.instance.setTransform(-45,-48,0.909,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v23_img();
	this.instance.setTransform(-56.4,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v22_img();
	this.instance.setTransform(-58,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v21_img();
	this.instance.setTransform(-57.7,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v20_img();
	this.instance.setTransform(-56.4,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v19_img();
	this.instance.setTransform(39.5,63,0.925,0.925,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v18_img();
	this.instance.setTransform(-75.4,-0.8,0.956,0.956,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v17_img();
	this.instance.setTransform(-55,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v16_img();
	this.instance.setTransform(-54.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v15_img();
	this.instance.setTransform(-59.1,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v14_img();
	this.instance.setTransform(-54.8,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v13_img();
	this.instance.setTransform(-53,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v12_img();
	this.instance.setTransform(-54,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v11_img();
	this.instance.setTransform(-55,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v10_img();
	this.instance.setTransform(-58,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v9_img();
	this.instance.setTransform(-43,-57,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v7_img();
	this.instance.setTransform(-40.1,-56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v2_img();
	this.instance.setTransform(-57.3,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v1_img();
	this.instance.setTransform(-54,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v8_img();
	this.instance.setTransform(-43.5,-54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v3_img();
	this.instance.setTransform(-51,-49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v5_img();
	this.instance.setTransform(-39.6,-54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v4_img();
	this.instance.setTransform(-50.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v3_img();
	this.instance.setTransform(-51,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v2_img();
	this.instance.setTransform(-58.3,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v1_img();
	this.instance.setTransform(-53,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v7_img();
	this.instance.setTransform(-39.5,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v6_img();
	this.instance.setTransform(-43.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.vic1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v5_img();
	this.instance.setTransform(-42.5,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.title_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-19.5,200,40);
p.frameBounds = [rect];


(lib.title_filter_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_3_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_filter_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_2_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.5,0.5,240,40);
p.frameBounds = [rect];


(lib.title_filter_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_1_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_filter_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_0_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_3_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_1_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.quiz_hint_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v4_img();
	this.instance.setTransform(-50.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.quiz_hint_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v3_img();
	this.instance.setTransform(-51,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.quiz_hint_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v2_img();
	this.instance.setTransform(-58.3,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.quiz_hint_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v1_img();
	this.instance.setTransform(-53,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.blue_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.message_7_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_7_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-130,385,260);
p.frameBounds = [rect];


(lib.message_6_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_6_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.message_5_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_5_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.message_4_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_4_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.message_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_3_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.message_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.message_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_message_1_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_message_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.level_completed_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.smiley_smiling_1_mc();
	this.instance.setTransform(115,0,0.75,0.75);

	this.instance_1 = new lib.smiley_smiling_1_mc();
	this.instance_1.setTransform(45,0,0.75,0.75);

	this.instance_2 = new lib.smiley_smiling_1_mc();
	this.instance_2.setTransform(-25,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.level_completed_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-70,380,140);
p.frameBounds = [rect];


(lib.level_completed_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.8);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(50));

	// animation
	this.instance = new lib.level_completed_2_mc();
	this.instance.setTransform(600,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:500},9).to({y:520},4).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(410,630,380,140);
p.frameBounds = [rect, rect, new cjs.Rectangle(410,607.8,380,140), new cjs.Rectangle(410,585.6,380,140), new cjs.Rectangle(410,563.4,380,140), new cjs.Rectangle(410,541.1,380,140), new cjs.Rectangle(410,518.9,380,140), new cjs.Rectangle(410,496.7,380,140), new cjs.Rectangle(410,474.5,380,140), new cjs.Rectangle(410,452.2,380,140), new cjs.Rectangle(410,430,380,140), new cjs.Rectangle(410,435,380,140), new cjs.Rectangle(410,440,380,140), new cjs.Rectangle(410,445,380,140), rect=new cjs.Rectangle(410,450,380,140), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hint_2_mc();
	this.instance.setTransform(-59.6,-12.6,1,1,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-33.5,x:-36.6,y:-31.6},7).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:65.5,x:46.4,y:-15.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:-33.5,x:-36.6,y:-31.6},8).to({rotation:-55.9,x:-59.6,y:-12.6},7).wait(1));

	// graph
	this.instance_1 = new lib.hint_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-80,230.5,160);
p.frameBounds = [rect, new cjs.Rectangle(-116.9,-80,226.9,160), new cjs.Rectangle(-113.3,-80,223.3,160), new cjs.Rectangle(-110,-80,220,160), new cjs.Rectangle(-110,-83.2,220,163.3), new cjs.Rectangle(-110,-86.5,220,166.5), new cjs.Rectangle(-110,-89.5,220,169.6), new cjs.Rectangle(-110,-92.5,220,172.6), new cjs.Rectangle(-110,-93.5,220,173.6), new cjs.Rectangle(-110,-94.2,220,174.2), new cjs.Rectangle(-110,-94.5,220,174.6), new cjs.Rectangle(-110,-94.3,220,174.4), new cjs.Rectangle(-110,-93.9,220,173.9), new cjs.Rectangle(-110,-92.9,220,173), new cjs.Rectangle(-110,-91.7,220,171.8), new cjs.Rectangle(-110,-93.2,220,173.3), new cjs.Rectangle(-110,-94.3,220,174.4), new cjs.Rectangle(-110,-94.9,220,175), new cjs.Rectangle(-110,-95.1,220,175.1), new cjs.Rectangle(-110,-94.7,220,174.8), new cjs.Rectangle(-110,-93.8,220,173.9), new cjs.Rectangle(-110,-92.4,220,172.5), new cjs.Rectangle(-110,-90.6,220,170.7), new cjs.Rectangle(-110,-87.7,220,167.8), new cjs.Rectangle(-110,-84.8,220,164.8), new cjs.Rectangle(-110,-81.5,220,161.5), rect=new cjs.Rectangle(-110,-80,220,160), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110,-82.7,220,162.7), new cjs.Rectangle(-110,-85.4,220,165.5), new cjs.Rectangle(-110,-88.1,220,168.1), new cjs.Rectangle(-110,-90.6,220,170.7), new cjs.Rectangle(-110,-92.7,220,172.8), new cjs.Rectangle(-110,-94.2,220,174.2), new cjs.Rectangle(-110,-95,220,175), new cjs.Rectangle(-110,-95.1,220,175.1), new cjs.Rectangle(-110,-94.6,220,174.6), new cjs.Rectangle(-110,-93.4,220,173.5), new cjs.Rectangle(-110,-91.7,220,171.8), new cjs.Rectangle(-110,-92.8,220,172.8), new cjs.Rectangle(-110,-93.6,220,173.7), new cjs.Rectangle(-110,-94.3,220,174.3), rect=new cjs.Rectangle(-110,-94.4,220,174.5), rect, new cjs.Rectangle(-110,-94.1,220,174.2), new cjs.Rectangle(-110,-93.4,220,173.4), new cjs.Rectangle(-110,-92.5,220,172.6), new cjs.Rectangle(-110,-89.5,220,169.6), new cjs.Rectangle(-110,-86.5,220,166.6), new cjs.Rectangle(-110,-83.3,220,163.3), new cjs.Rectangle(-110,-80,220,160), new cjs.Rectangle(-113.3,-80,223.4,160), new cjs.Rectangle(-117,-80,227,160), new cjs.Rectangle(-120.5,-80,230.5,160)];


(lib.hero4_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero4_bag_main_mc();
	this.instance.setTransform(47.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27},41).to({y:17},43).wait(1));

	// Слой 5
	this.instance_1 = new lib.hero4_fringe_main_mc();
	this.instance_1.setTransform(-4,-254);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-244},41).to({y:-254},43).wait(1));

	// Слой 4
	this.instance_2 = new lib.hero4_earring_main_mc();
	this.instance_2.setTransform(-5,-178.5,1,1.001,0,2.7,0,0,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-3.7,y:-168.5},41).to({scaleY:1,skewX:2.7,y:-178.5},43).wait(1));

	// Слой 3
	this.instance_3 = new lib.hero4_eyebrows_main_mc();
	this.instance_3.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-205.9},41).to({y:-218.9},43).wait(1));

	// Слой 8
	this.instance_4 = new lib.hero4_eyelashes_mc();
	this.instance_4.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-208.9},41).to({y:-218.9},43).wait(1));

	// Слой 9
	this.instance_5 = new lib.hero4_shadows_main_mc();
	this.instance_5.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-208.9},41).to({y:-218.9},43).wait(1));

	// Слой 10
	this.instance_6 = new lib.hero4_eyes_main_mc();
	this.instance_6.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-6.3,y:-208.9},41).to({x:-4.3,y:-218.9},43).wait(1));

	// Слой 11
	this.instance_7 = new lib.hero4_eyes_mc();
	this.instance_7.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-208.9},41).to({y:-218.9},43).wait(1));

	// Слой 12
	this.instance_8 = new lib.hero4_lips_main_mc();
	this.instance_8.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-208.9},41).to({y:-218.9},43).wait(1));

	// Слой 13
	this.instance_9 = new lib.hero4_rouge_main_mc();
	this.instance_9.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-208.9},41).to({y:-218.9},43).wait(1));

	// Слой 14
	this.instance_10 = new lib.hero4_face_mc();
	this.instance_10.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-208.9},41).to({y:-218.9},43).wait(1));

	// Слой 15
	this.instance_11 = new lib.hero4_dress_main_mc();
	this.instance_11.setTransform(2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:2.5},41).to({y:-7.5},43).wait(1));

	// Слой 2
	this.instance_12 = new lib.body4_mc();
	this.instance_12.setTransform(11.5,55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:65.4},41).to({y:55.4},43).wait(1));

	// Слой 1
	this.instance_13 = new lib.hero4_belt_main_mc();
	this.instance_13.setTransform(47.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:27},41).to({y:17},43).wait(1));

	// Слой 7
	this.instance_14 = new lib.hero4_hair_main_mc();
	this.instance_14.setTransform(-4,-254,1,1,0,1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleY:1,skewX:-3.2,y:-244},41).to({scaleY:1,skewX:1.5,y:-254},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.7,-331.5,248.3,648.5);
p.frameBounds = [rect, new cjs.Rectangle(-125.2,-331.3,247.8,648.5), new cjs.Rectangle(-124.6,-331,247.2,648.5), new cjs.Rectangle(-124.6,-330.8,247.1,648.5), new cjs.Rectangle(-124.5,-330.5,247,648.5), new cjs.Rectangle(-123.9,-330.3,246.5,648.5), new cjs.Rectangle(-123.9,-330.1,246.5,648.5), new cjs.Rectangle(-123.3,-329.8,245.8,648.5), new cjs.Rectangle(-123.3,-329.6,245.8,648.5), new cjs.Rectangle(-122.7,-329.3,245.3,648.5), new cjs.Rectangle(-122.6,-329.1,245.2,648.5), new cjs.Rectangle(-122.1,-328.8,244.6,648.5), new cjs.Rectangle(-122,-328.6,244.5,648.5), new cjs.Rectangle(-122,-328.4,244.5,648.5), new cjs.Rectangle(-121.9,-328.1,244.5,648.5), new cjs.Rectangle(-122.2,-327.9,244.7,648.5), new cjs.Rectangle(-122.3,-327.6,244.8,648.5), new cjs.Rectangle(-122.3,-327.4,244.8,648.5), new cjs.Rectangle(-122.5,-327.1,245.1,648.5), new cjs.Rectangle(-122.5,-326.9,245.1,648.5), new cjs.Rectangle(-122.8,-326.6,245.3,648.5), new cjs.Rectangle(-122.8,-326.4,245.4,648.5), new cjs.Rectangle(-123,-326.2,245.6,648.5), new cjs.Rectangle(-123.1,-325.9,245.7,648.5), new cjs.Rectangle(-123.4,-325.7,245.9,648.5), new cjs.Rectangle(-123.3,-325.4,245.9,648.5), new cjs.Rectangle(-123.6,-325.2,246.2,648.5), new cjs.Rectangle(-123.7,-324.9,246.2,648.5), new cjs.Rectangle(-123.7,-324.7,246.2,648.5), new cjs.Rectangle(-123.9,-324.5,246.5,648.5), new cjs.Rectangle(-123.9,-324.2,246.5,648.5), new cjs.Rectangle(-124.2,-324,246.8,648.5), new cjs.Rectangle(-124.2,-323.7,246.8,648.5), new cjs.Rectangle(-124.4,-323.5,247,648.5), new cjs.Rectangle(-124.5,-323.2,247.1,648.5), new cjs.Rectangle(-124.8,-323,247.3,648.5), new cjs.Rectangle(-124.8,-322.7,247.3,648.5), new cjs.Rectangle(-125,-322.5,247.6,648.5), new cjs.Rectangle(-125,-322.3,247.6,648.5), new cjs.Rectangle(-125.3,-322,247.8,648.5), new cjs.Rectangle(-125.3,-321.8,247.9,648.5), new cjs.Rectangle(-125.6,-321.5,248.1,648.5), new cjs.Rectangle(-125.3,-321.8,247.9,648.5), new cjs.Rectangle(-125.3,-322,247.9,648.5), new cjs.Rectangle(-125.1,-322.2,247.6,648.5), new cjs.Rectangle(-125,-322.5,247.6,648.5), new cjs.Rectangle(-124.7,-322.7,247.3,648.5), new cjs.Rectangle(-124.8,-322.9,247.3,648.5), new cjs.Rectangle(-124.5,-323.2,247.1,648.5), new cjs.Rectangle(-124.4,-323.4,246.9,648.5), new cjs.Rectangle(-124.2,-323.6,246.8,648.5), new cjs.Rectangle(-124.2,-323.9,246.7,648.5), new cjs.Rectangle(-124.1,-324.1,246.6,648.5), new cjs.Rectangle(-123.9,-324.3,246.5,648.5), new cjs.Rectangle(-123.9,-324.5,246.4,648.5), new cjs.Rectangle(-123.6,-324.8,246.1,648.5), new cjs.Rectangle(-123.6,-325,246.2,648.5), new cjs.Rectangle(-123.4,-325.2,245.9,648.5), new cjs.Rectangle(-123.3,-325.5,245.8,648.5), new cjs.Rectangle(-123.3,-325.7,245.9,648.5), new cjs.Rectangle(-123.1,-325.9,245.6,648.5), new cjs.Rectangle(-123,-326.2,245.5,648.5), new cjs.Rectangle(-122.8,-326.4,245.3,648.5), new cjs.Rectangle(-122.8,-326.6,245.3,648.5), new cjs.Rectangle(-122.5,-326.9,245,648.5), new cjs.Rectangle(-122.4,-327.1,245,648.5), new cjs.Rectangle(-122.5,-327.3,245,648.5), new cjs.Rectangle(-122.2,-327.6,244.7,648.5), new cjs.Rectangle(-122.1,-327.8,244.7,648.5), new cjs.Rectangle(-121.9,-328,244.5,648.5), new cjs.Rectangle(-121.9,-328.3,244.5,648.5), new cjs.Rectangle(-121.9,-328.5,244.4,648.5), new cjs.Rectangle(-122,-328.7,244.6,648.5), new cjs.Rectangle(-122.6,-329,245.1,648.5), new cjs.Rectangle(-122.6,-329.2,245.1,648.5), new cjs.Rectangle(-122.7,-329.4,245.3,648.5), new cjs.Rectangle(-123.2,-329.7,245.8,648.5), new cjs.Rectangle(-123.3,-329.9,245.8,648.5), new cjs.Rectangle(-123.8,-330.1,246.4,648.5), new cjs.Rectangle(-123.9,-330.4,246.5,648.5), new cjs.Rectangle(-124.4,-330.6,247,648.5), new cjs.Rectangle(-124.5,-330.8,247.1,648.5), new cjs.Rectangle(-124.6,-331.1,247.2,648.5), new cjs.Rectangle(-125.1,-331.3,247.7,648.5), new cjs.Rectangle(-125.7,-331.5,248.3,648.5)];


(lib.hero4_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero4_fringe0_mc();
	this.instance.setTransform(2,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-125},10).to({y:-129},10).wait(101));

	// eyebrows
	this.eyebrows = new lib.hero4_eyebrows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(39).to({y:4},10).to({y:0},10).wait(30).to({y:-6},10).to({y:0},10).wait(30).to({y:7},10).to({y:0},10).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyelashes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// shadows
	this.shadows = new lib.hero4_shadows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// eyes
	this.eyes = new lib.hero4_eyes_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(39).to({y:4},10).to({y:0},10).wait(30).to({x:3},10).to({x:0},10).wait(30).to({x:-4,y:-1},10).to({x:0,y:0},10).wait(1));

	// body
	this.instance_2 = new lib.hero4_eyes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// lips
	this.lips = new lib.hero4_lips_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// blush
	this.blush = new lib.hero4_rouge_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// body
	this.instance_3 = new lib.hero4_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// body
	this.instance_4 = new lib.makeup_body4_mc();
	this.instance_4.setTransform(34,219.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.5,-336.5,381,749);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-180.5,-336.1,381,748.6), new cjs.Rectangle(-180.5,-335.7,381,748.2), new cjs.Rectangle(-180.5,-335.3,381,747.8), new cjs.Rectangle(-180.5,-334.9,381,747.3), new cjs.Rectangle(-180.5,-334.5,381,747), new cjs.Rectangle(-180.5,-334.1,381,746.6), new cjs.Rectangle(-180.5,-333.7,381,746.2), new cjs.Rectangle(-180.5,-333.3,381,745.8), new cjs.Rectangle(-180.5,-332.9,381,745.3), new cjs.Rectangle(-180.5,-332.5,381,745), new cjs.Rectangle(-180.5,-332.9,381,745.3), new cjs.Rectangle(-180.5,-333.3,381,745.8), new cjs.Rectangle(-180.5,-333.7,381,746.2), new cjs.Rectangle(-180.5,-334.1,381,746.6), new cjs.Rectangle(-180.5,-334.5,381,747), new cjs.Rectangle(-180.5,-334.9,381,747.3), new cjs.Rectangle(-180.5,-335.3,381,747.8), new cjs.Rectangle(-180.5,-335.7,381,748.2), new cjs.Rectangle(-180.5,-336.1,381,748.6), rect=new cjs.Rectangle(-180.5,-336.5,381,749), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-180.9,-336.5,381.4,749), new cjs.Rectangle(-181.3,-336.5,381.8,749), new cjs.Rectangle(-181.7,-336.5,382.2,749), new cjs.Rectangle(-182.1,-336.5,382.6,749), new cjs.Rectangle(-182.5,-336.5,383,749), new cjs.Rectangle(-182.9,-336.5,383.4,749), new cjs.Rectangle(-183.3,-336.5,383.8,749), new cjs.Rectangle(-183.7,-336.5,384.2,749), new cjs.Rectangle(-184.1,-336.5,384.6,749), new cjs.Rectangle(-184.5,-336.5,385,749), new cjs.Rectangle(-184.1,-336.5,384.6,749), new cjs.Rectangle(-183.7,-336.5,384.2,749), new cjs.Rectangle(-183.3,-336.5,383.8,749), new cjs.Rectangle(-182.9,-336.5,383.4,749), new cjs.Rectangle(-182.5,-336.5,383,749), new cjs.Rectangle(-182.1,-336.5,382.6,749), new cjs.Rectangle(-181.7,-336.5,382.2,749), new cjs.Rectangle(-181.3,-336.5,381.8,749), new cjs.Rectangle(-180.9,-336.5,381.4,749), new cjs.Rectangle(-180.5,-336.5,381,749)];


(lib.hero4_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress6_img();
	this.instance.setTransform(-70,-100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-116.2,168,280.5);
p.frameBounds = [rect];


(lib.hero4_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress5_img();
	this.instance.setTransform(-66,-111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-116.2,152,254.5);
p.frameBounds = [rect];


(lib.hero4_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress4_img();
	this.instance.setTransform(-81,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-116.2,183,296.5);
p.frameBounds = [rect];


(lib.hero4_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress3_img();
	this.instance.setTransform(-73,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-116.2,157,249.3);
p.frameBounds = [rect];


(lib.hero4_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress2_img();
	this.instance.setTransform(-86,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-116.2,207,252.3);
p.frameBounds = [rect];


(lib.hero4_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(-68,-106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-116.2,144,231.5);
p.frameBounds = [rect];


(lib.hero3_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 14
	this.instance = new lib.hero3_bag_main_mc();
	this.instance.setTransform(99,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-43},44).to({y:-52},45).wait(1));

	// Слой 13
	this.instance_1 = new lib.hero3_fringe_main_mc();
	this.instance_1.setTransform(0,-343);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-334},44).to({y:-343},45).wait(1));

	// Слой 4
	this.instance_2 = new lib.hero3_earring_main_mc();
	this.instance_2.setTransform(-0.8,-259.5,1,1.001,0,2.2,0,0,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-4.4,x:-0.9,y:-250.5},44).to({scaleY:1,skewX:2.2,x:-0.8,y:-259.5},45).wait(1));

	// Слой 2
	this.instance_3 = new lib.hero3_eyebrows_main_mc();
	this.instance_3.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-298.9},44).to({y:-305.9},45).wait(1));

	// Слой 6
	this.instance_4 = new lib.hero3_eyelashes_mc();
	this.instance_4.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-296.9},44).to({y:-305.9},45).wait(1));

	// Слой 7
	this.instance_5 = new lib.hero3_shadows_all_mc();
	this.instance_5.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-296.9},44).to({y:-305.9},45).wait(1));

	// Слой 8
	this.instance_6 = new lib.hero3_eyes_main_mc();
	this.instance_6.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:1,y:-296.9},44).to({x:-1,y:-305.9},45).wait(1));

	// Слой 9
	this.instance_7 = new lib.hero3_eyes_mc();
	this.instance_7.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-296.9},44).to({y:-305.9},45).wait(1));

	// Слой 10
	this.instance_8 = new lib.hero3_lips_main_mc();
	this.instance_8.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-296.9},44).to({y:-305.9},45).wait(1));

	// Слой 11
	this.instance_9 = new lib.hero3_rouge_main_mc();
	this.instance_9.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-296.9},44).to({y:-305.9},45).wait(1));

	// Слой 12
	this.instance_10 = new lib.hero3_face_mc();
	this.instance_10.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-296.9},44).to({y:-305.9},45).wait(1));

	// Слой 15
	this.instance_11 = new lib.hero3_dress_main_mc();
	this.instance_11.setTransform(-13,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-77},44).to({y:-86},45).wait(1));

	// Слой 1
	this.instance_12 = new lib.body3_mc();
	this.instance_12.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:10},44).to({y:1},45).wait(1));

	// Слой 3
	this.instance_13 = new lib.hero3_belt_main_mc();
	this.instance_13.setTransform(99,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:-43},44).to({y:-52},45).wait(1));

	// Слой 5
	this.instance_14 = new lib.hero3_hair_main_mc();
	this.instance_14.setTransform(-1,-321,1,1,0,1.6,0,-1,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({skewX:-0.7,y:-312},44).to({skewX:1.6,y:-321},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-431,271,662);
p.frameBounds = [rect, new cjs.Rectangle(-122.6,-430.8,270.6,662), new cjs.Rectangle(-121.4,-430.6,269.5,662), new cjs.Rectangle(-121.4,-430.4,269.4,662), new cjs.Rectangle(-121.2,-430.2,269.3,662), new cjs.Rectangle(-121.2,-430,269.3,662), new cjs.Rectangle(-121.1,-429.7,269.1,662), new cjs.Rectangle(-120,-429.5,268.1,662), new cjs.Rectangle(-119.9,-429.3,268,662), new cjs.Rectangle(-119.9,-429.1,267.9,662), new cjs.Rectangle(-119.7,-428.9,267.8,662), new cjs.Rectangle(-119.7,-428.7,267.8,662), new cjs.Rectangle(-118.6,-428.5,266.7,662), new cjs.Rectangle(-118.5,-428.3,266.5,662), new cjs.Rectangle(-118.4,-428.1,266.5,662), new cjs.Rectangle(-118.3,-427.9,266.4,662), new cjs.Rectangle(-118.3,-427.7,266.3,662), new cjs.Rectangle(-117.1,-427.5,265.2,662), new cjs.Rectangle(-117.1,-427.3,265.2,662), new cjs.Rectangle(-117,-427.1,265,662), new cjs.Rectangle(-116.9,-426.9,265,662), new cjs.Rectangle(-115.8,-426.7,263.8,662), new cjs.Rectangle(-115.7,-426.5,263.8,662), new cjs.Rectangle(-115.6,-426.3,263.7,662), new cjs.Rectangle(-115.6,-426.1,263.6,662), new cjs.Rectangle(-115.5,-425.9,263.5,662), new cjs.Rectangle(-114.3,-425.7,262.4,662), new cjs.Rectangle(-114.2,-425.5,262.3,662), new cjs.Rectangle(-114.2,-425.2,262.2,662), new cjs.Rectangle(-114.1,-425,262.2,662), new cjs.Rectangle(-114,-424.8,262.1,662), new cjs.Rectangle(-114,-424.6,262,662), new cjs.Rectangle(-113.9,-424.4,262,662), new cjs.Rectangle(-114,-424.2,262,662), new cjs.Rectangle(-114,-424,262,662), new cjs.Rectangle(-114,-423.8,262,662), new cjs.Rectangle(-114,-423.6,262,662), new cjs.Rectangle(-114,-423.4,262,662), new cjs.Rectangle(-113.9,-423.2,262,662), new cjs.Rectangle(-114,-423,262,662), new cjs.Rectangle(-114,-422.8,262,662), new cjs.Rectangle(-114,-422.6,262,662), new cjs.Rectangle(-114,-422.4,262,662), new cjs.Rectangle(-113.9,-422.2,262,662), new cjs.Rectangle(-114,-422,262.1,662), new cjs.Rectangle(-114,-422.2,262,662), new cjs.Rectangle(-113.9,-422.4,262,662), new cjs.Rectangle(-114,-422.6,262,662), new cjs.Rectangle(-113.9,-422.8,262,662), new cjs.Rectangle(-113.9,-423,262,662), new cjs.Rectangle(-113.9,-423.2,262,662), new cjs.Rectangle(-113.9,-423.4,262,662), new cjs.Rectangle(-113.9,-423.6,262,662), new cjs.Rectangle(-113.9,-423.8,262,662), new cjs.Rectangle(-113.9,-424,262,662), new cjs.Rectangle(-113.9,-424.2,262,662), new cjs.Rectangle(-113.9,-424.4,262,662), new cjs.Rectangle(-113.9,-424.6,262,662), new cjs.Rectangle(-114,-424.8,262,662), new cjs.Rectangle(-114.1,-425,262.1,662), new cjs.Rectangle(-114.1,-425.2,262.2,662), new cjs.Rectangle(-114.2,-425.4,262.3,662), new cjs.Rectangle(-114.3,-425.6,262.3,662), new cjs.Rectangle(-115.4,-425.8,263.4,662), new cjs.Rectangle(-115.5,-426,263.5,662), new cjs.Rectangle(-115.6,-426.2,263.6,662), new cjs.Rectangle(-115.6,-426.4,263.7,662), new cjs.Rectangle(-115.7,-426.6,263.7,662), new cjs.Rectangle(-116.8,-426.8,264.8,662), new cjs.Rectangle(-116.9,-427,265,662), new cjs.Rectangle(-117,-427.2,265,662), new cjs.Rectangle(-117.1,-427.4,265.1,662), new cjs.Rectangle(-117.1,-427.6,265.2,662), new cjs.Rectangle(-118.3,-427.8,266.3,662), new cjs.Rectangle(-118.3,-428,266.3,662), new cjs.Rectangle(-118.4,-428.2,266.5,662), new cjs.Rectangle(-118.5,-428.4,266.5,662), new cjs.Rectangle(-118.5,-428.6,266.6,662), new cjs.Rectangle(-119.7,-428.8,267.7,662), new cjs.Rectangle(-119.7,-429,267.8,662), new cjs.Rectangle(-119.8,-429.2,267.9,662), new cjs.Rectangle(-119.9,-429.4,267.9,662), new cjs.Rectangle(-120,-429.6,268.1,662), new cjs.Rectangle(-121.1,-429.8,269.1,662), new cjs.Rectangle(-121.2,-430,269.2,662), new cjs.Rectangle(-121.2,-430.2,269.2,662), new cjs.Rectangle(-121.3,-430.4,269.4,662), new cjs.Rectangle(-121.4,-430.6,269.4,662), new cjs.Rectangle(-122.5,-430.8,270.6,662), new cjs.Rectangle(-123,-431,271,662)];


(lib.hero3_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3_fringe0_mc();
	this.instance.setTransform(2,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-111},10).to({y:-115},10).wait(101));

	// eyebrows
	this.eyebrows = new lib.hero3_eyebrows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(39).to({y:4},10).to({y:0},10).wait(30).to({y:-11},10).to({y:0},10).wait(30).to({y:6},10).to({y:0},10).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyelashes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// shadows
	this.shadows = new lib.hero3_shadows_mc();

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// eyes
	this.eyes = new lib.hero3_eyes_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(39).to({y:4},10).to({y:0},10).wait(30).to({x:7},10).to({x:0},10).wait(30).to({x:-6},10).to({x:0},10).wait(1));

	// body
	this.instance_2 = new lib.hero3_eyes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// lips
	this.lips = new lib.hero3_lips_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// body
	this.instance_3 = new lib.hero3_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({y:4},10).to({y:0},10).wait(101));

	// body
	this.instance_4 = new lib.makeup_body3_mc();
	this.instance_4.setTransform(48,294.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-257.5,-322.5,519,739);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-257.5,-322.1,519,738.6), new cjs.Rectangle(-257.5,-321.7,519,738.2), new cjs.Rectangle(-257.5,-321.3,519,737.8), new cjs.Rectangle(-257.5,-320.9,519,737.3), new cjs.Rectangle(-257.5,-320.5,519,737), new cjs.Rectangle(-257.5,-320.1,519,736.6), new cjs.Rectangle(-257.5,-319.7,519,736.2), new cjs.Rectangle(-257.5,-319.3,519,735.8), new cjs.Rectangle(-257.5,-318.9,519,735.3), new cjs.Rectangle(-257.5,-318.5,519,735), new cjs.Rectangle(-257.5,-318.9,519,735.3), new cjs.Rectangle(-257.5,-319.3,519,735.8), new cjs.Rectangle(-257.5,-319.7,519,736.2), new cjs.Rectangle(-257.5,-320.1,519,736.6), new cjs.Rectangle(-257.5,-320.5,519,737), new cjs.Rectangle(-257.5,-320.9,519,737.3), new cjs.Rectangle(-257.5,-321.3,519,737.8), new cjs.Rectangle(-257.5,-321.7,519,738.2), new cjs.Rectangle(-257.5,-322.1,519,738.6), rect=new cjs.Rectangle(-257.5,-322.5,519,739), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress6_img();
	this.instance.setTransform(-73,-101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-116.2,158,331.5);
p.frameBounds = [rect];


(lib.hero3_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress5_img();
	this.instance.setTransform(-67,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-116.2,144,262.3);
p.frameBounds = [rect];


(lib.hero3_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress4_img();
	this.instance.setTransform(-74,-93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-116.2,146,461.5);
p.frameBounds = [rect];


(lib.hero3_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress3_img();
	this.instance.setTransform(-67,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-116.2,134,288.5);
p.frameBounds = [rect];


(lib.hero3_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress2_img();
	this.instance.setTransform(-70,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-116.2,145,265.5);
p.frameBounds = [rect];


(lib.hero3_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-108,-109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-116.2,182,258.5);
p.frameBounds = [rect];


(lib.hero2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 14
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(-14.5,-247.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-239.5},49).to({y:-247.5},50).wait(1));

	// Слой 5
	this.instance_1 = new lib.hero2_earring_main_mc();
	this.instance_1.setTransform(-20.9,-180.5,1,1.005,0,5.9,0,0.1,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleY:1,skewX:-3.5,x:-21,y:-172.5},49).to({regX:0.1,scaleY:1,skewX:5.9,x:-20.9,y:-180.5},50).wait(1));

	// Слой 4
	this.instance_2 = new lib.hero2_eyebrows_main_mc();
	this.instance_2.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-213},49).to({y:-219},50).wait(1));

	// Слой 6
	this.instance_3 = new lib.hero2_eyelashes_mc();
	this.instance_3.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-211},49).to({y:-219},50).wait(1));

	// Слой 7
	this.instance_4 = new lib.hero2_shadows_main_mc();
	this.instance_4.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-211},49).to({y:-219},50).wait(1));

	// Слой 8
	this.instance_5 = new lib.hero2_eyes_main_mc();
	this.instance_5.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-17,y:-211},49).to({x:-20,y:-219},50).wait(1));

	// Слой 9
	this.instance_6 = new lib.hero2_eyes_mc();
	this.instance_6.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-211},49).to({y:-219},50).wait(1));

	// Слой 10
	this.instance_7 = new lib.hero2_lips_main_mc();
	this.instance_7.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-211},49).to({y:-219},50).wait(1));

	// Слой 11
	this.instance_8 = new lib.hero2_rouge_main_mc();
	this.instance_8.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-211},49).to({y:-219},50).wait(1));

	// Слой 12
	this.instance_9 = new lib.hero2_face_mc();
	this.instance_9.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-211},49).to({y:-219},50).wait(1));

	// Слой 1
	this.instance_10 = new lib.hero2_bag_main_mc();
	this.instance_10.setTransform(-66,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:54.5},49).to({y:46.5},50).wait(1));

	// Слой 13
	this.instance_11 = new lib.hero2_dress_main_mc();
	this.instance_11.setTransform(-21.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:10},49).to({y:2},50).wait(1));

	// Слой 3
	this.instance_12 = new lib.body2_mc();
	this.instance_12.setTransform(0,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:67},49).to({y:59},50).wait(1));

	// Слой 15
	this.instance_13 = new lib.hero2_belt_main_mc();
	this.instance_13.setTransform(-66,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:54.5},49).to({y:46.5},50).wait(1));

	// Слой 2
	this.instance_14 = new lib.hero2_hair_main_mc();
	this.instance_14.setTransform(-10.5,-289.5,1,1,0,1.3,0,0,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({skewX:0.1,x:-10.6,y:-281.5},49).to({skewX:1.3,x:-10.5,y:-289.5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.4,-344,384.6,663);
p.frameBounds = [rect, new cjs.Rectangle(-205.7,-343.8,384.1,663), new cjs.Rectangle(-205.7,-343.6,384,663), new cjs.Rectangle(-205.6,-343.5,384,663), new cjs.Rectangle(-203.9,-343.3,382.3,663), new cjs.Rectangle(-203.9,-343.2,382.2,663), new cjs.Rectangle(-203.7,-343,382.1,663), new cjs.Rectangle(-203.7,-342.8,382.1,663), new cjs.Rectangle(-203.7,-342.7,382,663), new cjs.Rectangle(-203.6,-342.5,382,663), new cjs.Rectangle(-203.6,-342.3,381.9,663), new cjs.Rectangle(-203.5,-342.2,381.9,663), new cjs.Rectangle(-203.5,-342,381.8,663), new cjs.Rectangle(-203.4,-341.9,381.8,663), new cjs.Rectangle(-201.7,-341.7,380,663), new cjs.Rectangle(-201.6,-341.5,380,663), new cjs.Rectangle(-201.6,-341.4,380,663), new cjs.Rectangle(-201.5,-341.2,379.9,663), new cjs.Rectangle(-201.4,-341,379.9,663), new cjs.Rectangle(-201.4,-340.9,379.8,663), new cjs.Rectangle(-201.3,-340.7,379.7,663), new cjs.Rectangle(-201.3,-340.5,379.7,663), new cjs.Rectangle(-201.2,-340.4,379.6,663), new cjs.Rectangle(-201.2,-340.2,379.5,663), new cjs.Rectangle(-199.5,-340.1,377.9,663), new cjs.Rectangle(-199.4,-339.9,377.8,663), new cjs.Rectangle(-199.4,-339.7,377.8,663), new cjs.Rectangle(-199.3,-339.6,377.7,663), new cjs.Rectangle(-199.3,-339.4,377.7,663), new cjs.Rectangle(-199.2,-339.2,377.6,663), new cjs.Rectangle(-199.2,-339.1,377.6,663), new cjs.Rectangle(-199.1,-338.9,377.5,663), new cjs.Rectangle(-199.1,-338.8,377.5,663), new cjs.Rectangle(-197.4,-338.6,375.8,663), new cjs.Rectangle(-197.3,-338.4,375.7,663), new cjs.Rectangle(-197.2,-338.3,375.6,663), new cjs.Rectangle(-197.1,-338.1,375.6,663), new cjs.Rectangle(-197.1,-337.9,375.5,663), new cjs.Rectangle(-197,-337.8,375.5,663), new cjs.Rectangle(-197,-337.6,375.4,663), new cjs.Rectangle(-196.9,-337.4,375.4,663), new cjs.Rectangle(-196.9,-337.3,375.3,663), new cjs.Rectangle(-196.8,-337.1,375.3,663), new cjs.Rectangle(-195.1,-337,373.6,663), new cjs.Rectangle(-195.1,-336.8,373.5,663), new cjs.Rectangle(-195,-336.6,373.5,663), new cjs.Rectangle(-195,-336.5,373.4,663), new cjs.Rectangle(-194.8,-336.3,373.3,663), new cjs.Rectangle(-194.8,-336.1,373.3,663), new cjs.Rectangle(-195.4,-336,373.8,663), new cjs.Rectangle(-194.8,-336.1,373.3,663), new cjs.Rectangle(-194.8,-336.3,373.3,663), new cjs.Rectangle(-194.9,-336.5,373.4,663), new cjs.Rectangle(-195,-336.6,373.5,663), new cjs.Rectangle(-195.1,-336.8,373.5,663), new cjs.Rectangle(-195.1,-336.9,373.5,663), new cjs.Rectangle(-196.8,-337.1,375.2,663), new cjs.Rectangle(-196.8,-337.3,375.3,663), new cjs.Rectangle(-196.9,-337.4,375.4,663), new cjs.Rectangle(-197,-337.6,375.4,663), new cjs.Rectangle(-197,-337.7,375.5,663), new cjs.Rectangle(-197.1,-337.9,375.5,663), new cjs.Rectangle(-197.1,-338.1,375.6,663), new cjs.Rectangle(-197.2,-338.2,375.6,663), new cjs.Rectangle(-197.2,-338.4,375.7,663), new cjs.Rectangle(-197.3,-338.5,375.7,663), new cjs.Rectangle(-199,-338.7,377.4,663), new cjs.Rectangle(-199.1,-338.9,377.5,663), new cjs.Rectangle(-199.1,-339,377.5,663), new cjs.Rectangle(-199.2,-339.2,377.5,663), new cjs.Rectangle(-199.2,-339.3,377.6,663), new cjs.Rectangle(-199.3,-339.5,377.7,663), new cjs.Rectangle(-199.3,-339.7,377.7,663), new cjs.Rectangle(-199.4,-339.8,377.8,663), new cjs.Rectangle(-199.4,-340,377.9,663), new cjs.Rectangle(-199.5,-340.1,377.9,663), new cjs.Rectangle(-201.1,-340.3,379.6,663), new cjs.Rectangle(-201.3,-340.5,379.7,663), new cjs.Rectangle(-201.3,-340.6,379.7,663), new cjs.Rectangle(-201.4,-340.8,379.8,663), new cjs.Rectangle(-201.4,-340.9,379.8,663), new cjs.Rectangle(-201.5,-341.1,379.9,663), new cjs.Rectangle(-201.5,-341.3,379.9,663), new cjs.Rectangle(-201.6,-341.4,380,663), new cjs.Rectangle(-201.6,-341.6,380,663), new cjs.Rectangle(-201.7,-341.7,380,663), new cjs.Rectangle(-203.4,-341.9,381.8,663), new cjs.Rectangle(-203.5,-342.1,381.8,663), new cjs.Rectangle(-203.5,-342.2,381.9,663), new cjs.Rectangle(-203.6,-342.4,381.9,663), new cjs.Rectangle(-203.6,-342.5,382,663), new cjs.Rectangle(-203.7,-342.7,382,663), new cjs.Rectangle(-203.7,-342.9,382.1,663), new cjs.Rectangle(-203.7,-343,382.1,663), new cjs.Rectangle(-203.8,-343.2,382.2,663), new cjs.Rectangle(-203.9,-343.3,382.3,663), new cjs.Rectangle(-205.7,-343.5,384,663), new cjs.Rectangle(-205.7,-343.7,384,663), new cjs.Rectangle(-205.8,-343.8,384.1,663), new cjs.Rectangle(-206.4,-344,384.6,663)];


(lib.hero2_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_mc();
	this.instance.setTransform(3,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-99},10).to({y:-102},10).wait(91));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(29).to({y:3},10).to({y:0},10).wait(30).to({y:-5},7).to({y:0},7).wait(31).to({y:4},8).to({y:0},7).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyelashes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({y:3},10).to({y:0},10).wait(91));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(29).to({y:3},10).to({y:0},10).wait(91));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(29).to({y:3},10).to({y:0},10).wait(30).to({x:6},7).to({x:0},7).wait(31).to({x:-7},8).to({x:0},7).wait(1));

	// body
	this.instance_2 = new lib.hero2_eyes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:3},10).to({y:0},10).wait(91));

	// lips
	this.lips = new lib.hero2_lips_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(29).to({y:3},10).to({y:0},10).wait(91));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(29).to({y:3},10).to({y:0},10).wait(91));

	// body
	this.instance_3 = new lib.hero2_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({y:3},10).to({y:0},10).wait(91));

	// body
	this.instance_4 = new lib.makeup_body2_mc();
	this.instance_4.setTransform(38.5,224.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186,-288.5,444.5,702);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-186,-288.2,444.5,701.7), new cjs.Rectangle(-186,-287.9,444.5,701.3), new cjs.Rectangle(-186,-287.6,444.5,701.1), new cjs.Rectangle(-186,-287.3,444.5,700.8), new cjs.Rectangle(-186,-287,444.5,700.5), new cjs.Rectangle(-186,-286.7,444.5,700.2), new cjs.Rectangle(-186,-286.4,444.5,699.8), new cjs.Rectangle(-186,-286.1,444.5,699.6), new cjs.Rectangle(-186,-285.8,444.5,699.3), new cjs.Rectangle(-186,-285.5,444.5,699), new cjs.Rectangle(-186,-285.8,444.5,699.3), new cjs.Rectangle(-186,-286.1,444.5,699.6), new cjs.Rectangle(-186,-286.4,444.5,699.8), new cjs.Rectangle(-186,-286.7,444.5,700.2), new cjs.Rectangle(-186,-287,444.5,700.5), new cjs.Rectangle(-186,-287.3,444.5,700.8), new cjs.Rectangle(-186,-287.6,444.5,701.1), new cjs.Rectangle(-186,-287.9,444.5,701.3), new cjs.Rectangle(-186,-288.2,444.5,701.7), rect=new cjs.Rectangle(-186,-288.5,444.5,702), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-186.6,-288.5,445.1,702), new cjs.Rectangle(-187.5,-288.5,446,702), new cjs.Rectangle(-186.5,-288.5,445,702), rect=new cjs.Rectangle(-186,-288.5,444.5,702), rect, rect, rect, rect, rect];


(lib.hero2_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-69,-102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-116.2,144,317.4);
p.frameBounds = [rect];


(lib.hero2_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-105,-98.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-116.2,220,298.5);
p.frameBounds = [rect];


(lib.hero2_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-99,-202.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-202.8,220,366);
p.frameBounds = [rect];


(lib.hero2_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-101,-113.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-116.2,212,317.5);
p.frameBounds = [rect];


(lib.hero2_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-100,-211.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-211.8,219,362);
p.frameBounds = [rect];


(lib.hero2_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-95,-152.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-152.8,164,332);
p.frameBounds = [rect];


(lib.hero1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// челка
	this.instance = new lib.hero1_fringe_main_mc();
	this.instance.setTransform(-11.6,-241.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-233.6},39).to({y:-241.6},40).wait(1));

	// Слой 4
	this.instance_1 = new lib.hero1_earring_main_mc();
	this.instance_1.setTransform(-6,-176.5,1,1.001,0,2,0,0,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-2,y:-169.5},39).to({skewX:2,y:-176.5},40).wait(1));

	// брови
	this.instance_2 = new lib.hero1_eyebrows_main_mc();
	this.instance_2.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-207},39).to({y:-218},40).wait(1));

	// ресницы
	this.instance_3 = new lib.hero1_eyelashes_mc();
	this.instance_3.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-210},39).to({y:-218},40).wait(1));

	// тени
	this.instance_4 = new lib.hero1_shadows_main_mc();
	this.instance_4.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-210},39).to({y:-218},40).wait(1));

	// зрачки
	this.instance_5 = new lib.hero1_eyes_main_mc();
	this.instance_5.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-3,y:-210},39).to({x:-6,y:-218},40).wait(1));

	// глаза
	this.instance_6 = new lib.hero1_eyes_mc();
	this.instance_6.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-210},39).to({y:-218},40).wait(1));

	// губы
	this.instance_7 = new lib.hero1_lips_main_mc();
	this.instance_7.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-210},39).to({y:-218},40).wait(1));

	// румяна
	this.instance_8 = new lib.hero1_rouge_main_mc();
	this.instance_8.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-210},39).to({y:-218},40).wait(1));

	// лицо
	this.instance_9 = new lib.hero1_face_mc();
	this.instance_9.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-210},39).to({y:-218},40).wait(1));

	// Слой 3
	this.instance_10 = new lib.hero1_bag_front_main_mc();
	this.instance_10.setTransform(-38,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:53.9},39).to({y:46.9},40).wait(1));

	// платье
	this.instance_11 = new lib.hero1_dress_main_mc();
	this.instance_11.setTransform(0.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:6.5},39).to({y:-1.5},40).wait(1));

	// тело
	this.instance_12 = new lib.body1_mc();
	this.instance_12.setTransform(5,90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:98.4},39).to({y:90.4},40).wait(1));

	// волосы
	this.instance_13 = new lib.hero1_hair_main_mc();
	this.instance_13.setTransform(-5.9,-269.6,1,1,2,0,0,0.1,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0,rotation:-2,x:-6,y:-261.7},39).to({regX:0.1,rotation:2,x:-5.9,y:-269.6},40).wait(1));

	// Слой 2
	this.instance_14 = new lib.hero1_belt_main_mc();
	this.instance_14.setTransform(-44,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:31.5},39).to({y:24.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230.4,-341.1,436.8,659.6);
p.frameBounds = [rect, new cjs.Rectangle(-229.1,-340.1,435.3,658.7), new cjs.Rectangle(-228.9,-339.8,435.1,658.6), new cjs.Rectangle(-227.5,-338.8,433.5,657.9), new cjs.Rectangle(-227.4,-338.5,433.3,657.8), new cjs.Rectangle(-226.1,-337.7,431.8,657.2), new cjs.Rectangle(-225.9,-337.5,431.6,657.2), new cjs.Rectangle(-225.7,-337.3,431.4,657.2), new cjs.Rectangle(-224.4,-337.1,429.8,657.2), new cjs.Rectangle(-224.2,-336.9,429.6,657.2), new cjs.Rectangle(-222.8,-336.7,428.1,657.2), new cjs.Rectangle(-222.7,-336.5,427.9,657.2), new cjs.Rectangle(-222.5,-336.3,427.7,657.2), new cjs.Rectangle(-221.1,-336.1,426.1,657.2), new cjs.Rectangle(-221,-335.9,425.9,657.2), new cjs.Rectangle(-219.6,-335.7,424.3,657.2), new cjs.Rectangle(-219.5,-335.5,424.1,657.2), new cjs.Rectangle(-219.3,-335.3,423.9,657.2), new cjs.Rectangle(-217.9,-335.1,422.3,657.2), new cjs.Rectangle(-217.8,-334.9,422.1,657.2), new cjs.Rectangle(-217.6,-334.7,422.1,657.2), new cjs.Rectangle(-217.7,-334.5,422.3,657.2), new cjs.Rectangle(-217.9,-334.3,423.9,657.2), new cjs.Rectangle(-217.9,-334.1,424.1,657.2), new cjs.Rectangle(-218,-333.9,424.3,657.2), new cjs.Rectangle(-218.2,-333.6,425.9,657.2), new cjs.Rectangle(-218.3,-333.4,426.1,657.2), new cjs.Rectangle(-218.5,-333.2,427.7,657.2), new cjs.Rectangle(-218.5,-333,427.9,657.2), new cjs.Rectangle(-218.5,-332.8,428.1,657.2), new cjs.Rectangle(-218.8,-332.6,429.6,657.2), new cjs.Rectangle(-218.8,-332.4,429.8,657.2), new cjs.Rectangle(-219,-332.2,431.4,657.2), new cjs.Rectangle(-219,-332,431.6,657.2), new cjs.Rectangle(-219.1,-331.8,431.8,657.2), new cjs.Rectangle(-219.3,-332.1,433.3,657.7), new cjs.Rectangle(-219.3,-332,433.5,657.8), new cjs.Rectangle(-219.5,-332.5,435.1,658.6), new cjs.Rectangle(-219.6,-332.4,435.3,658.7), new cjs.Rectangle(-219.7,-333.1,436.8,659.6), new cjs.Rectangle(-219.6,-332.5,435.3,658.7), new cjs.Rectangle(-219.5,-332.6,435.1,658.7), new cjs.Rectangle(-219.3,-332,433.5,657.9), new cjs.Rectangle(-219.3,-332.1,433.3,657.8), new cjs.Rectangle(-219.1,-331.8,431.8,657.2), new cjs.Rectangle(-219,-332,431.6,657.2), new cjs.Rectangle(-219,-332.2,431.4,657.2), new cjs.Rectangle(-218.8,-332.4,429.9,657.2), new cjs.Rectangle(-218.7,-332.6,429.7,657.2), new cjs.Rectangle(-218.5,-332.8,428.1,657.2), new cjs.Rectangle(-218.5,-333,427.9,657.2), new cjs.Rectangle(-218.5,-333.2,427.7,657.2), new cjs.Rectangle(-218.2,-333.4,426.1,657.2), new cjs.Rectangle(-218.2,-333.6,425.9,657.2), new cjs.Rectangle(-217.9,-333.8,424.4,657.2), new cjs.Rectangle(-217.9,-334,424.2,657.2), new cjs.Rectangle(-217.9,-334.2,424,657.2), new cjs.Rectangle(-217.6,-334.4,422.4,657.2), new cjs.Rectangle(-217.6,-334.6,422.2,657.2), new cjs.Rectangle(-217.6,-334.8,422,657.2), new cjs.Rectangle(-217.8,-335,422.2,657.2), new cjs.Rectangle(-217.9,-335.2,422.4,657.2), new cjs.Rectangle(-219.3,-335.4,424,657.2), new cjs.Rectangle(-219.4,-335.6,424.2,657.2), new cjs.Rectangle(-220.8,-335.8,425.7,657.2), new cjs.Rectangle(-220.9,-336,425.9,657.2), new cjs.Rectangle(-221.1,-336.2,426.1,657.2), new cjs.Rectangle(-222.5,-336.4,427.7,657.2), new cjs.Rectangle(-222.6,-336.6,427.9,657.2), new cjs.Rectangle(-224,-336.8,429.5,657.2), new cjs.Rectangle(-224.1,-337,429.7,657.2), new cjs.Rectangle(-224.3,-337.2,429.9,657.2), new cjs.Rectangle(-225.7,-337.4,431.4,657.2), new cjs.Rectangle(-225.8,-337.6,431.6,657.2), new cjs.Rectangle(-227.1,-338.3,433.1,657.7), new cjs.Rectangle(-227.3,-338.6,433.3,657.8), new cjs.Rectangle(-227.4,-338.9,433.5,658), new cjs.Rectangle(-228.8,-339.8,435.1,658.7), new cjs.Rectangle(-229,-340.1,435.3,658.8), new cjs.Rectangle(-230.4,-341.1,436.8,659.6)];


(lib.hero1_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-86,-104.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-116.2,171,264.5);
p.frameBounds = [rect];


(lib.hero1_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-96,-101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-116.2,195,346.5);
p.frameBounds = [rect];


(lib.hero1_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-80,-96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-116.2,171,285.5);
p.frameBounds = [rect];


(lib.hero1_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-86,-111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-116.2,166,354.5);
p.frameBounds = [rect];


(lib.hero1_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-107,-110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-116.2,209,334.5);
p.frameBounds = [rect];


(lib.hero1_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-94,-100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-116.2,188,232.5);
p.frameBounds = [rect];


(lib.hero_for_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_mc();
	this.instance.setTransform(11,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-92.5},10).to({y:-95.5},10).wait(71));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(29).to({y:3},10).to({y:0},10).wait(20).to({y:-5},10).to({y:0},10).wait(12).to({y:5},9).to({y:0},9).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyelashes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({y:3},10).to({y:0},10).wait(71));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(29).to({y:3},10).to({y:0},10).wait(71));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(29).to({y:3},10).to({y:0},10).wait(20).to({x:6},10).to({x:0},10).wait(12).to({x:-4},9).to({x:0},9).wait(1));

	// body
	this.instance_2 = new lib.hero1_eyes_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:3},10).to({y:0},10).wait(71));

	// lips
	this.lips = new lib.hero1_lips_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(29).to({y:3},10).to({y:0},10).wait(71));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(29).to({y:3},10).to({y:0},10).wait(71));

	// body
	this.instance_3 = new lib.hero1_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({y:3},10).to({y:0},10).wait(71));

	// body
	this.instance_4 = new lib.makeup_body1_mc();
	this.instance_4.setTransform(-4,289.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-280.5,652,699);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-315,-280.2,652,698.7), new cjs.Rectangle(-315,-279.9,652,698.3), new cjs.Rectangle(-315,-279.6,652,698.1), new cjs.Rectangle(-315,-279.3,652,697.8), new cjs.Rectangle(-315,-279,652,697.5), new cjs.Rectangle(-315,-278.7,652,697.2), new cjs.Rectangle(-315,-278.4,652,696.8), new cjs.Rectangle(-315,-278.1,652,696.6), new cjs.Rectangle(-315,-277.8,652,696.3), new cjs.Rectangle(-315,-277.5,652,696), new cjs.Rectangle(-315,-277.8,652,696.3), new cjs.Rectangle(-315,-278.1,652,696.6), new cjs.Rectangle(-315,-278.4,652,696.8), new cjs.Rectangle(-315,-278.7,652,697.2), new cjs.Rectangle(-315,-279,652,697.5), new cjs.Rectangle(-315,-279.3,652,697.8), new cjs.Rectangle(-315,-279.6,652,698.1), new cjs.Rectangle(-315,-279.9,652,698.3), new cjs.Rectangle(-315,-280.2,652,698.7), rect=new cjs.Rectangle(-315,-280.5,652,699), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessories
	this.accessories = new lib.hero4_bag_all_mc();
	this.accessories.setTransform(47.5,17);

	this.timeline.addTween(cjs.Tween.get(this.accessories).to({y:25},41).to({y:17},43).wait(1));

	// fringe
	this.fringe = new lib.hero4_fringe_all_mc();
	this.fringe.setTransform(-4,-254);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-246},41).to({y:-254},43).wait(1));

	// earrings
	this.earrings = new lib.hero4_earring_all_mc();
	this.earrings.setTransform(-5,-178.5,1,1.001,0,2.7,0,0,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({skewX:-2.7,y:-170.5},41).to({skewX:2.7,y:-178.5},43).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero4_eyebrows_all_mc();
	this.eyebrows.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({y:-206.9},41).to({y:-218.9},43).wait(1));

	// body
	this.instance = new lib.hero4_eyelashes_mc();
	this.instance.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-210.9},41).to({y:-218.9},43).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all_mc();
	this.shadows.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({y:-210.9},41).to({y:-218.9},43).wait(1));

	// eyes
	this.eyes = new lib.hero4_eyes_all_mc();
	this.eyes.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({x:-7.3,y:-209.9},41).to({x:-4.3,y:-218.9},43).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyes_mc();
	this.instance_1.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-210.9},41).to({y:-218.9},43).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all_mc();
	this.lips.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({y:-210.9},41).to({y:-218.9},43).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all_mc();
	this.blush.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({y:-210.9},41).to({y:-218.9},43).wait(1));

	// body
	this.instance_2 = new lib.hero4_face_mc();
	this.instance_2.setTransform(-4.3,-218.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-210.9},41).to({y:-218.9},43).wait(1));

	// dress
	this.dress = new lib.hero4_dress_all_mc();
	this.dress.setTransform(2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:0.5},41).to({y:-7.5},43).wait(1));

	// body
	this.instance_3 = new lib.body4_mc();
	this.instance_3.setTransform(11.5,55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:63.4},41).to({y:55.4},43).wait(1));

	// accessoriesSecond
	this.accessoriesSecond = new lib.hero4_belt_all_mc();
	this.accessoriesSecond.setTransform(47.5,17);

	this.timeline.addTween(cjs.Tween.get(this.accessoriesSecond).to({y:25},41).to({y:17},43).wait(1));

	// hair
	this.hair = new lib.hero4_hair_all_mc();
	this.hair.setTransform(-4,-254,1,1,0,1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:-1.5,y:-246},41).to({skewX:1.5,y:-254},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192,-341.5,369.8,658.4);
p.frameBounds = [rect, new cjs.Rectangle(-190.5,-341.3,368.3,658.4), new cjs.Rectangle(-190.4,-341.1,368.1,658.4), new cjs.Rectangle(-188.7,-340.9,366.3,658.4), new cjs.Rectangle(-188.5,-340.7,366.2,658.4), new cjs.Rectangle(-188.4,-340.5,366,658.4), new cjs.Rectangle(-188.3,-340.3,365.9,658.4), new cjs.Rectangle(-186.6,-340.1,364,658.4), new cjs.Rectangle(-186.3,-339.9,363.9,658.4), new cjs.Rectangle(-186.2,-339.7,363.7,658.4), new cjs.Rectangle(-184.5,-339.5,361.9,658.4), new cjs.Rectangle(-184.4,-339.3,361.8,658.4), new cjs.Rectangle(-184.2,-339.1,361.6,658.4), new cjs.Rectangle(-184.1,-338.9,361.5,658.4), new cjs.Rectangle(-182.4,-338.7,359.7,658.4), new cjs.Rectangle(-182.3,-338.5,359.5,658.4), new cjs.Rectangle(-182.1,-338.4,359.4,658.4), new cjs.Rectangle(-180.5,-338.2,357.6,658.4), new cjs.Rectangle(-180.3,-338,357.4,658.4), new cjs.Rectangle(-180.2,-337.8,357.3,658.4), new cjs.Rectangle(-180,-337.6,357.1,658.4), new cjs.Rectangle(-180,-337.4,357.1,658.4), new cjs.Rectangle(-180,-337.2,357.3,658.4), new cjs.Rectangle(-180,-337,357.4,658.4), new cjs.Rectangle(-180,-336.8,357.6,658.4), new cjs.Rectangle(-180.1,-336.6,359.4,658.4), new cjs.Rectangle(-180.1,-336.4,359.5,658.4), new cjs.Rectangle(-180.1,-336.2,359.7,658.4), new cjs.Rectangle(-180.2,-336,361.5,658.4), new cjs.Rectangle(-180.2,-335.8,361.6,658.4), new cjs.Rectangle(-180.2,-335.6,361.8,658.4), new cjs.Rectangle(-180.3,-335.4,361.9,658.4), new cjs.Rectangle(-180.3,-335.2,363.7,658.4), new cjs.Rectangle(-180.4,-335,363.9,658.4), new cjs.Rectangle(-180.3,-334.8,364,658.4), new cjs.Rectangle(-180.5,-334.6,365.8,658.4), new cjs.Rectangle(-180.5,-334.5,366,658.4), new cjs.Rectangle(-180.5,-334.3,366.2,658.4), new cjs.Rectangle(-180.5,-334.1,366.3,658.4), new cjs.Rectangle(-180.6,-333.9,368.1,658.4), new cjs.Rectangle(-180.6,-333.7,368.3,658.4), new cjs.Rectangle(-180.8,-333.5,369.8,658.4), new cjs.Rectangle(-180.6,-333.7,368.3,658.4), new cjs.Rectangle(-180.7,-333.8,368.1,658.4), new cjs.Rectangle(-180.6,-334,368,658.4), new cjs.Rectangle(-180.6,-334.2,366.2,658.4), new cjs.Rectangle(-180.5,-334.4,366,658.4), new cjs.Rectangle(-180.5,-334.6,365.9,658.4), new cjs.Rectangle(-180.4,-334.8,364.1,658.4), new cjs.Rectangle(-180.4,-335,364,658.4), new cjs.Rectangle(-180.4,-335.1,363.8,658.4), new cjs.Rectangle(-180.4,-335.3,363.7,658.4), new cjs.Rectangle(-180.2,-335.5,361.9,658.4), new cjs.Rectangle(-180.2,-335.7,361.7,658.4), new cjs.Rectangle(-180.2,-335.9,361.6,658.4), new cjs.Rectangle(-180.2,-336.1,361.4,658.4), new cjs.Rectangle(-180.1,-336.3,359.6,658.4), new cjs.Rectangle(-180.1,-336.5,359.5,658.4), new cjs.Rectangle(-180.1,-336.6,359.3,658.4), new cjs.Rectangle(-179.9,-336.8,357.5,658.4), new cjs.Rectangle(-180,-337,357.4,658.4), new cjs.Rectangle(-179.9,-337.2,357.3,658.4), new cjs.Rectangle(-180,-337.4,357.1,658.4), new cjs.Rectangle(-180,-337.6,357.1,658.4), new cjs.Rectangle(-180.1,-337.8,357.2,658.4), new cjs.Rectangle(-180.2,-337.9,357.4,658.4), new cjs.Rectangle(-180.4,-338.1,357.5,658.4), new cjs.Rectangle(-182.1,-338.3,359.3,658.4), new cjs.Rectangle(-182.2,-338.5,359.5,658.4), new cjs.Rectangle(-182.3,-338.7,359.6,658.4), new cjs.Rectangle(-184.1,-338.9,361.4,658.4), new cjs.Rectangle(-184.2,-339.1,361.5,658.4), new cjs.Rectangle(-184.4,-339.2,361.7,658.4), new cjs.Rectangle(-184.5,-339.4,361.9,658.4), new cjs.Rectangle(-186.2,-339.6,363.7,658.4), new cjs.Rectangle(-186.2,-339.8,363.8,658.4), new cjs.Rectangle(-186.5,-340,364,658.4), new cjs.Rectangle(-186.5,-340.2,364.1,658.4), new cjs.Rectangle(-188.3,-340.4,365.9,658.4), new cjs.Rectangle(-188.3,-340.5,366,658.4), new cjs.Rectangle(-188.5,-340.7,366.2,658.4), new cjs.Rectangle(-190.2,-340.9,368,658.4), new cjs.Rectangle(-190.3,-341.1,368.1,658.4), new cjs.Rectangle(-190.5,-341.3,368.3,658.4), new cjs.Rectangle(-192,-341.5,369.8,658.4)];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessories
	this.accessories = new lib.hero3_bag_all_mc();
	this.accessories.setTransform(99,-52);

	this.timeline.addTween(cjs.Tween.get(this.accessories).to({y:-42},44).to({y:-52},45).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all_mc();
	this.fringe.setTransform(0,-343);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-333},44).to({y:-343},45).wait(1));

	// earrings
	this.earrings = new lib.hero3_earring_all_mc();
	this.earrings.setTransform(-0.8,-259.5,1,1.001,0,2.2,0,0,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({skewX:-3,y:-249.5},44).to({skewX:2.2,y:-259.5},45).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero3_eyebrows_all_mc();
	this.eyebrows.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({y:-291.9},44).to({y:-305.9},45).wait(1));

	// body
	this.instance = new lib.hero3_eyelashes_mc();
	this.instance.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-295.9},44).to({y:-305.9},45).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_mc();
	this.shadows.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({y:-295.9},44).to({y:-305.9},45).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all_mc();
	this.eyes.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({x:3,y:-295.9},44).to({x:-1,y:-305.9},45).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyes_mc();
	this.instance_1.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-295.9},44).to({y:-305.9},45).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({y:-295.9},44).to({y:-305.9},45).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all_mc();
	this.blush.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({y:-295.9},44).to({y:-305.9},45).wait(1));

	// body
	this.instance_2 = new lib.hero3_face_mc();
	this.instance_2.setTransform(-1,-305.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-295.9},44).to({y:-305.9},45).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all_mc();
	this.dress.setTransform(-13,-86);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:-76},44).to({y:-86},45).wait(1));

	// body
	this.instance_3 = new lib.body3_mc();
	this.instance_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:11},44).to({y:1},45).wait(1));

	// accessoriesSecond
	this.accessoriesSecond = new lib.hero3_belt_all_mc();
	this.accessoriesSecond.setTransform(99,-52);

	this.timeline.addTween(cjs.Tween.get(this.accessoriesSecond).to({y:-42},44).to({y:-52},45).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all_mc();
	this.hair.setTransform(-1,-321,1,1,0,1.6,0,-1,22);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({scaleY:1,skewX:-2.5,y:-311},44).to({scaleY:1,skewX:1.6,y:-321},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-431,271,662);
p.frameBounds = [rect, new cjs.Rectangle(-121.5,-430.7,269.6,662), new cjs.Rectangle(-121.3,-430.5,269.4,662), new cjs.Rectangle(-121.1,-430.3,269.2,662), new cjs.Rectangle(-120,-430.1,268.1,662), new cjs.Rectangle(-119.8,-429.8,267.9,662), new cjs.Rectangle(-119.7,-429.6,267.8,662), new cjs.Rectangle(-118.5,-429.4,266.6,662), new cjs.Rectangle(-118.4,-429.2,266.4,662), new cjs.Rectangle(-118.3,-428.9,266.3,662), new cjs.Rectangle(-117.1,-428.7,265.1,662), new cjs.Rectangle(-117,-428.5,265,662), new cjs.Rectangle(-115.8,-428.2,263.8,662), new cjs.Rectangle(-115.6,-428,263.7,662), new cjs.Rectangle(-115.6,-427.8,263.6,662), new cjs.Rectangle(-114.3,-427.6,262.3,662), new cjs.Rectangle(-114.2,-427.3,262.2,662), new cjs.Rectangle(-114,-427.1,262.1,662), new cjs.Rectangle(-113.9,-426.9,262,662), new cjs.Rectangle(-114,-426.7,262,662), new cjs.Rectangle(-114,-426.4,262,662), new cjs.Rectangle(-114,-426.2,262,662), new cjs.Rectangle(-114,-426,262,662), new cjs.Rectangle(-114,-425.7,262,662), new cjs.Rectangle(-114,-425.5,262,662), new cjs.Rectangle(-113.9,-425.3,262,662), new cjs.Rectangle(-114,-425.1,262.1,662), new cjs.Rectangle(-113.9,-424.8,262,662), new cjs.Rectangle(-114,-424.6,262,662), new cjs.Rectangle(-114,-424.4,262,662), new cjs.Rectangle(-113.9,-424.2,262,662), new cjs.Rectangle(-114,-423.9,262,662), new cjs.Rectangle(-114,-423.7,262,662), new cjs.Rectangle(-114,-423.5,262,662), new cjs.Rectangle(-114,-423.2,262,662), new cjs.Rectangle(-114,-423,262,662), new cjs.Rectangle(-114,-422.8,262.1,662), new cjs.Rectangle(-114,-422.6,262,662), new cjs.Rectangle(-114,-422.3,262.1,662), new cjs.Rectangle(-114,-422.1,262,662), new cjs.Rectangle(-114,-421.9,262,662), new cjs.Rectangle(-114,-421.7,262.1,662), new cjs.Rectangle(-114,-421.4,262,662), new cjs.Rectangle(-114,-421.2,262.1,662), new cjs.Rectangle(-114,-421,262,662), new cjs.Rectangle(-113.9,-421.2,261.9,662), new cjs.Rectangle(-113.9,-421.4,262,662), new cjs.Rectangle(-113.9,-421.6,262,662), new cjs.Rectangle(-113.9,-421.9,262,662), new cjs.Rectangle(-113.9,-422.1,262,662), new cjs.Rectangle(-113.9,-422.3,262,662), new cjs.Rectangle(-113.9,-422.5,262,662), new cjs.Rectangle(-113.9,-422.8,261.9,662), new cjs.Rectangle(-113.9,-423,262,662), new cjs.Rectangle(-113.9,-423.2,262,662), new cjs.Rectangle(-113.9,-423.4,261.9,662), new cjs.Rectangle(-113.9,-423.6,262,662), new cjs.Rectangle(-113.9,-423.9,262,662), new cjs.Rectangle(-113.9,-424.1,261.9,662), new cjs.Rectangle(-114,-424.3,262,662), new cjs.Rectangle(-113.9,-424.5,262,662), new cjs.Rectangle(-113.9,-424.8,261.9,662), new cjs.Rectangle(-113.9,-425,262,662), new cjs.Rectangle(-113.9,-425.2,262,662), new cjs.Rectangle(-113.9,-425.4,262,662), new cjs.Rectangle(-113.9,-425.6,262,662), new cjs.Rectangle(-113.9,-425.9,262,662), new cjs.Rectangle(-113.9,-426.1,261.9,662), new cjs.Rectangle(-113.9,-426.3,261.9,662), new cjs.Rectangle(-113.9,-426.5,262,662), new cjs.Rectangle(-113.9,-426.8,262,662), new cjs.Rectangle(-113.9,-427,262,662), new cjs.Rectangle(-114.1,-427.2,262.1,662), new cjs.Rectangle(-114.1,-427.4,262.2,662), new cjs.Rectangle(-114.3,-427.6,262.4,662), new cjs.Rectangle(-115.5,-427.9,263.5,662), new cjs.Rectangle(-115.6,-428.1,263.7,662), new cjs.Rectangle(-116.8,-428.3,264.8,662), new cjs.Rectangle(-116.9,-428.5,265,662), new cjs.Rectangle(-117.1,-428.8,265.1,662), new cjs.Rectangle(-118.3,-429,266.3,662), new cjs.Rectangle(-118.3,-429.2,266.4,662), new cjs.Rectangle(-118.6,-429.4,266.6,662), new cjs.Rectangle(-119.6,-429.6,267.7,662), new cjs.Rectangle(-119.8,-429.9,267.8,662), new cjs.Rectangle(-120,-430.1,268,662), new cjs.Rectangle(-121.1,-430.3,269.1,662), new cjs.Rectangle(-121.3,-430.5,269.3,662), new cjs.Rectangle(-122.4,-430.8,270.5,662), new cjs.Rectangle(-123,-431,271,662)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-14.5,-247.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-240.5},49).to({y:-247.5},50).wait(1));

	// earrings
	this.earrings = new lib.hero2_earring_all_mc();
	this.earrings.setTransform(-21,-180.5,1,1,0,1.2,0,0,-47);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:-1.8,y:-173.5},49).to({scaleY:1,skewX:1.2,y:-180.5},50).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({y:-210},49).to({y:-219},50).wait(1));

	// body
	this.instance = new lib.hero2_eyelashes_mc();
	this.instance.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-212},49).to({y:-219},50).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({y:-212},49).to({y:-219},50).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({x:-17,y:-212},49).to({x:-20,y:-219},50).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyes_mc();
	this.instance_1.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-212},49).to({y:-219},50).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({y:-212},49).to({y:-219},50).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all_mc();
	this.blush.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({y:-212},49).to({y:-219},50).wait(1));

	// body
	this.instance_2 = new lib.hero2_face_mc();
	this.instance_2.setTransform(-20,-219,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-212},49).to({y:-219},50).wait(1));

	// accessories
	this.accessories = new lib.hero2_bag_all_mc();
	this.accessories.setTransform(-66,46.5);

	this.timeline.addTween(cjs.Tween.get(this.accessories).to({y:53.5},49).to({y:46.5},50).wait(1));

	// dress
	this.dress = new lib.hero2_dress_mc();
	this.dress.setTransform(-21.5,2);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:9},49).to({y:2},50).wait(1));

	// body
	this.instance_3 = new lib.body2_mc();
	this.instance_3.setTransform(0,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:66},49).to({y:59},50).wait(1));

	// accessoriesSecond
	this.accessoriesSecond = new lib.hero2_belt_all_mc();
	this.accessoriesSecond.setTransform(-66,46.5);

	this.timeline.addTween(cjs.Tween.get(this.accessoriesSecond).to({y:53.5},49).to({y:46.5},50).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-10.5,-289.5,1,1,0,1.3,0,0,-42);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:-1.8,x:-14.5,y:-282.5},49).to({skewX:1.3,x:-10.5,y:-289.5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-239.5,-341.5,447.7,660.5);
p.frameBounds = [rect, new cjs.Rectangle(-238.9,-341.3,447,660.5), new cjs.Rectangle(-237.1,-341.2,445.1,660.5), new cjs.Rectangle(-237.1,-341,444.9,660.5), new cjs.Rectangle(-237,-340.9,444.8,660.5), new cjs.Rectangle(-237,-340.8,444.6,660.5), new cjs.Rectangle(-235.2,-340.6,442.7,660.5), new cjs.Rectangle(-235.1,-340.5,442.5,660.5), new cjs.Rectangle(-235.1,-340.3,442.4,660.5), new cjs.Rectangle(-235,-340.2,442.2,660.5), new cjs.Rectangle(-233.2,-340,440.3,660.5), new cjs.Rectangle(-233.2,-339.9,440.1,660.5), new cjs.Rectangle(-233.1,-339.8,440,660.5), new cjs.Rectangle(-233.1,-339.6,439.8,660.5), new cjs.Rectangle(-231.4,-339.5,437.9,660.5), new cjs.Rectangle(-231.2,-339.3,437.7,660.5), new cjs.Rectangle(-231.2,-339.2,437.6,660.5), new cjs.Rectangle(-231.1,-339,437.4,660.5), new cjs.Rectangle(-229.3,-338.9,435.5,660.5), new cjs.Rectangle(-229.4,-338.8,435.3,660.5), new cjs.Rectangle(-229.2,-338.6,435.2,660.5), new cjs.Rectangle(-229.2,-338.5,435,660.5), new cjs.Rectangle(-229.3,-338.3,435.2,660.5), new cjs.Rectangle(-229.3,-338.2,435.3,660.5), new cjs.Rectangle(-229.5,-338,435.5,660.5), new cjs.Rectangle(-229.6,-337.9,437.4,660.5), new cjs.Rectangle(-229.8,-337.8,437.6,660.5), new cjs.Rectangle(-229.9,-337.6,437.7,660.5), new cjs.Rectangle(-229.9,-337.5,437.9,660.5), new cjs.Rectangle(-230.1,-337.3,439.8,660.5), new cjs.Rectangle(-230.2,-337.2,440,660.5), new cjs.Rectangle(-230.3,-337,440.1,660.5), new cjs.Rectangle(-230.4,-336.9,440.3,660.5), new cjs.Rectangle(-230.6,-336.8,442.2,660.5), new cjs.Rectangle(-230.7,-336.6,442.4,660.5), new cjs.Rectangle(-230.7,-336.5,442.5,660.5), new cjs.Rectangle(-230.9,-336.3,442.7,660.5), new cjs.Rectangle(-231,-336.2,444.6,660.5), new cjs.Rectangle(-231.1,-336,444.8,660.5), new cjs.Rectangle(-231.2,-335.9,444.9,660.5), new cjs.Rectangle(-231.3,-335.8,445.1,660.5), new cjs.Rectangle(-231.5,-335.6,447,660.5), new cjs.Rectangle(-231.6,-335.5,447.2,660.5), new cjs.Rectangle(-231.7,-335.3,447.3,660.5), new cjs.Rectangle(-231.8,-335.2,447.5,660.5), new cjs.Rectangle(-232,-335,449.4,660.5), new cjs.Rectangle(-232.1,-334.9,449.6,660.5), new cjs.Rectangle(-232.1,-334.8,449.7,660.5), new cjs.Rectangle(-232.3,-334.6,449.9,660.5), new cjs.Rectangle(-232.5,-334.5,452,660.5), new cjs.Rectangle(-232.2,-334.6,449.9,660.5), new cjs.Rectangle(-232.2,-334.8,449.7,660.5), new cjs.Rectangle(-232,-334.9,449.6,660.5), new cjs.Rectangle(-232,-335,449.4,660.5), new cjs.Rectangle(-231.8,-335.2,447.5,660.5), new cjs.Rectangle(-231.7,-335.3,447.4,660.5), new cjs.Rectangle(-231.6,-335.5,447.2,660.5), new cjs.Rectangle(-231.5,-335.6,447.1,660.5), new cjs.Rectangle(-231.3,-335.7,445.1,660.5), new cjs.Rectangle(-231.2,-335.9,445,660.5), new cjs.Rectangle(-231.2,-336,444.8,660.5), new cjs.Rectangle(-231.1,-336.2,444.7,660.5), new cjs.Rectangle(-230.8,-336.3,442.7,660.5), new cjs.Rectangle(-230.8,-336.4,442.6,660.5), new cjs.Rectangle(-230.7,-336.6,442.4,660.5), new cjs.Rectangle(-230.6,-336.7,442.3,660.5), new cjs.Rectangle(-230.4,-336.9,440.3,660.5), new cjs.Rectangle(-230.3,-337,440.2,660.5), new cjs.Rectangle(-230.2,-337.1,440,660.5), new cjs.Rectangle(-230.1,-337.3,439.9,660.5), new cjs.Rectangle(-229.9,-337.4,438,660.5), new cjs.Rectangle(-229.9,-337.6,437.8,660.5), new cjs.Rectangle(-229.8,-337.7,437.7,660.5), new cjs.Rectangle(-229.7,-337.8,437.5,660.5), new cjs.Rectangle(-229.5,-338,435.6,660.5), new cjs.Rectangle(-229.5,-338.1,435.4,660.5), new cjs.Rectangle(-229.3,-338.3,435.3,660.5), new cjs.Rectangle(-229.3,-338.4,435.1,660.5), new cjs.Rectangle(-229.2,-338.5,435.1,660.5), new cjs.Rectangle(-229.3,-338.7,435.2,660.5), new cjs.Rectangle(-229.3,-338.8,435.4,660.5), new cjs.Rectangle(-229.4,-339,435.5,660.5), new cjs.Rectangle(-231.2,-339.1,437.5,660.5), new cjs.Rectangle(-231.2,-339.2,437.6,660.5), new cjs.Rectangle(-231.3,-339.4,437.8,660.5), new cjs.Rectangle(-231.3,-339.5,437.9,660.5), new cjs.Rectangle(-233.1,-339.7,439.9,660.5), new cjs.Rectangle(-233.2,-339.8,440,660.5), new cjs.Rectangle(-233.2,-339.9,440.2,660.5), new cjs.Rectangle(-233.3,-340.1,440.3,660.5), new cjs.Rectangle(-235,-340.2,442.2,660.5), new cjs.Rectangle(-235.2,-340.4,442.4,660.5), new cjs.Rectangle(-235.1,-340.5,442.6,660.5), new cjs.Rectangle(-235.2,-340.6,442.7,660.5), new cjs.Rectangle(-237,-340.8,444.6,660.5), new cjs.Rectangle(-237,-340.9,444.8,660.5), new cjs.Rectangle(-237.1,-341.1,444.9,660.5), new cjs.Rectangle(-237.1,-341.2,445.1,660.5), new cjs.Rectangle(-238.8,-341.3,447,660.5), new cjs.Rectangle(-239.5,-341.5,447.7,660.5)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-11.6,-241.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({y:-233.6},39).to({y:-241.6},40).wait(1));

	// earrings
	this.earrings = new lib.hero1_earring_all_mc();
	this.earrings.setTransform(-6,-176.5,1,1.001,0,2,0,0,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({skewX:-2,y:-169.5},39).to({skewX:2,y:-176.5},40).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({y:-207},39).to({y:-218},40).wait(1));

	// ресницы
	this.instance = new lib.hero1_eyelashes_mc();
	this.instance.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-210},39).to({y:-218},40).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({y:-210},39).to({y:-218},40).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({x:-3,y:-210},39).to({x:-6,y:-218},40).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes_mc();
	this.instance_1.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-210},39).to({y:-218},40).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({y:-210},39).to({y:-218},40).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({y:-210},39).to({y:-218},40).wait(1));

	// body
	this.instance_2 = new lib.hero1_face_mc();
	this.instance_2.setTransform(-6,-218,0.475,0.475);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-210},39).to({y:-218},40).wait(1));

	// accessories
	this.accessories = new lib.hero1_bag_front_all_mc();
	this.accessories.setTransform(-38,46.9);

	this.timeline.addTween(cjs.Tween.get(this.accessories).to({y:53.9},39).to({y:46.9},40).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(0.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:6.5},39).to({y:-1.5},40).wait(1));

	// body
	this.instance_3 = new lib.body1_mc();
	this.instance_3.setTransform(5,90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:98.4},39).to({y:90.4},40).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-5.9,-269.6,1,1,2,0,0,0.1,-197);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({regX:0,rotation:-2,x:-6,y:-261.7},39).to({regX:0.1,rotation:2,x:-5.9,y:-269.6},40).wait(1));

	// accessoriesSecond
	this.accessoriesSecond = new lib.hero1_belt_all_mc();
	this.accessoriesSecond.setTransform(-44,24.5);

	this.timeline.addTween(cjs.Tween.get(this.accessoriesSecond).to({y:31.5},39).to({y:24.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161.2,-332.6,296.6,651.1);
p.frameBounds = [rect, new cjs.Rectangle(-159.7,-332.4,295.1,651.1), new cjs.Rectangle(-159.5,-332.2,294.9,651.1), new cjs.Rectangle(-158,-332,293.4,651.1), new cjs.Rectangle(-157.9,-331.8,293.2,651.1), new cjs.Rectangle(-156.3,-331.6,291.6,651.1), new cjs.Rectangle(-156.2,-331.4,291.5,651.1), new cjs.Rectangle(-156,-331.2,291.3,651.1), new cjs.Rectangle(-154.5,-331,289.7,651.1), new cjs.Rectangle(-154.2,-330.8,289.5,651.1), new cjs.Rectangle(-152.8,-330.6,288,651.1), new cjs.Rectangle(-152.6,-330.4,287.8,651.1), new cjs.Rectangle(-152.4,-330.2,287.5,651.1), new cjs.Rectangle(-150.9,-330,286.1,651.1), new cjs.Rectangle(-150.7,-329.8,285.9,651.1), new cjs.Rectangle(-149.2,-329.5,284.3,651.1), new cjs.Rectangle(-149,-329.3,284.1,651.1), new cjs.Rectangle(-148.8,-329.1,283.9,651.1), new cjs.Rectangle(-147.3,-328.9,282.3,651.1), new cjs.Rectangle(-147.1,-328.7,282.1,651.1), new cjs.Rectangle(-147,-328.5,282.1,651.1), new cjs.Rectangle(-147,-328.3,282.3,651.1), new cjs.Rectangle(-147.1,-328.1,283.9,651.1), new cjs.Rectangle(-147.1,-327.9,284,651.1), new cjs.Rectangle(-147.1,-327.7,284.3,651.1), new cjs.Rectangle(-147.1,-327.5,285.8,651.1), new cjs.Rectangle(-147.2,-327.3,286,651.1), new cjs.Rectangle(-147.2,-327.1,287.6,651.1), new cjs.Rectangle(-147.2,-326.9,287.7,651.1), new cjs.Rectangle(-147.2,-326.7,287.9,651.1), new cjs.Rectangle(-147.3,-326.5,289.5,651.1), new cjs.Rectangle(-147.2,-326.3,289.7,651.1), new cjs.Rectangle(-147.3,-326.1,291.2,651.1), new cjs.Rectangle(-147.3,-325.9,291.4,651.1), new cjs.Rectangle(-147.4,-325.7,291.6,651.1), new cjs.Rectangle(-147.4,-325.4,293.2,651.1), new cjs.Rectangle(-147.4,-325.2,293.3,651.1), new cjs.Rectangle(-147.4,-325,294.9,651.1), new cjs.Rectangle(-147.5,-324.8,295.1,651.1), new cjs.Rectangle(-147.4,-324.6,296.6,651.1), new cjs.Rectangle(-147.4,-324.8,295.1,651.1), new cjs.Rectangle(-147.4,-325,294.9,651.1), new cjs.Rectangle(-147.3,-325.2,293.4,651.1), new cjs.Rectangle(-147.3,-325.4,293.2,651.1), new cjs.Rectangle(-147.3,-325.6,291.7,651.1), new cjs.Rectangle(-147.3,-325.8,291.5,651.1), new cjs.Rectangle(-147.3,-326,291.3,651.1), new cjs.Rectangle(-147.3,-326.2,289.8,651.1), new cjs.Rectangle(-147.2,-326.4,289.6,651.1), new cjs.Rectangle(-147.2,-326.6,288,651.1), new cjs.Rectangle(-147.2,-326.8,287.8,651.1), new cjs.Rectangle(-147.2,-327,287.6,651.1), new cjs.Rectangle(-147.1,-327.2,286,651.1), new cjs.Rectangle(-147.1,-327.4,285.9,651.1), new cjs.Rectangle(-147,-327.6,284.3,651.1), new cjs.Rectangle(-147,-327.8,284.2,651.1), new cjs.Rectangle(-147,-328,284,651.1), new cjs.Rectangle(-146.9,-328.2,282.4,651.1), new cjs.Rectangle(-146.9,-328.4,282.2,651.1), new cjs.Rectangle(-147,-328.6,282,651.1), new cjs.Rectangle(-147.2,-328.8,282.2,651.1), new cjs.Rectangle(-147.3,-329,282.4,651.1), new cjs.Rectangle(-148.8,-329.2,284,651.1), new cjs.Rectangle(-149,-329.4,284.2,651.1), new cjs.Rectangle(-150.5,-329.6,285.7,651.1), new cjs.Rectangle(-150.6,-329.8,285.9,651.1), new cjs.Rectangle(-150.9,-330,286.1,651.1), new cjs.Rectangle(-152.4,-330.2,287.6,651.1), new cjs.Rectangle(-152.6,-330.4,287.8,651.1), new cjs.Rectangle(-154.1,-330.6,289.4,651.1), new cjs.Rectangle(-154.2,-330.8,289.6,651.1), new cjs.Rectangle(-154.4,-331,289.8,651.1), new cjs.Rectangle(-155.9,-331.2,291.3,651.1), new cjs.Rectangle(-156.1,-331.4,291.5,651.1), new cjs.Rectangle(-157.6,-331.6,293,651.1), new cjs.Rectangle(-157.8,-331.8,293.2,651.1), new cjs.Rectangle(-157.9,-332,293.4,651.1), new cjs.Rectangle(-159.4,-332.2,294.9,651.1), new cjs.Rectangle(-159.6,-332.4,295.1,651.1), new cjs.Rectangle(-161.2,-332.6,296.6,651.1)];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.earrings_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMfIAA49IODAAIAAY9g");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-85,90.1,160);
p.frameBounds = [rect];


(lib.earrings_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.5,90,160);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_mc();
	this.instance.setTransform(0.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNSIAA6jIODAAIAAajg");
	this.shape.setTransform(0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.6,90,170);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolNRIAA6iIRLAAIAAaig");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-92.5,110,170);
p.frameBounds = [rect];


(lib.earrings_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMfIAA49IODAAIAAY9g");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-85,90.1,160);
p.frameBounds = [rect];


(lib.earrings_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.5,91,160);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_mc();
	this.instance.setTransform(-0.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNSIAA6jIODAAIAAajg");
	this.shape.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-84.6,103,170);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolNRIAA6iIRLAAIAAaig");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-92.5,110,170);
p.frameBounds = [rect];


(lib.earrings_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMfIAA49IODAAIAAY9g");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-85,95,160);
p.frameBounds = [rect];


(lib.earrings_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.5,90,160);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_mc();
	this.instance.setTransform(0.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNRIAA6iIODAAIAAaig");
	this.shape.setTransform(0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-85.6,90,170);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolNRIAA6iIRLAAIAAaig");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-92.5,110,170);
p.frameBounds = [rect];


(lib.earrings_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMfIAA49IODAAIAAY9g");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-85,90.1,160);
p.frameBounds = [rect];


(lib.earrings_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.5,90,160);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNSIAA6jIODAAIAAajg");
	this.shape.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-91.1,90,170);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolNRIAA6iIRLAAIAAaig");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-92.5,110,170);
p.frameBounds = [rect];


(lib.earrings_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMfIAA49IODAAIAAY9g");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-85,95,160);
p.frameBounds = [rect];


(lib.earrings_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.5,90,160);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNSIAA6jIODAAIAAajg");
	this.shape.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-91.1,90,170);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolNRIAA6iIRLAAIAAaig");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-92.5,110,170);
p.frameBounds = [rect];


(lib.earrings_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMfIAA49IODAAIAAY9g");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-85,99,160);
p.frameBounds = [rect];


(lib.earrings_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");
	this.shape.setTransform(0,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-83.5,90,160);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBNSIAA6jIODAAIAAajg");
	this.shape.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.1,-91.1,90.2,170);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolNRIAA6iIRLAAIAAaig");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-92.5,115,170);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.dress_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress6_mc();
	this.instance.setTransform(-8,116.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,0,168,280.5);
p.frameBounds = [rect];


(lib.dress_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress6_mc();
	this.instance.setTransform(7.5,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtHskIDyuSIOcAJMAIKA0iI6hBCg");
	this.shape.setTransform(18,162.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-9.8,169.9,343.9);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress6_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar+P1MgADggZIGjqBIFTADIF1GWIGYdSIqORgg");
	this.shape.setTransform(12.6,161);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-9.2,154.1,340.5);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_mc();
	this.instance.setTransform(8.5,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfT4IkVmFIB98rIIynbIHCAAIGtHqIFLe2ItEGHg");
	this.shape.setTransform(8.5,130.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-12.5,190,285.8);
p.frameBounds = [rect];


(lib.dress_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress5_mc();
	this.instance.setTransform(-8.5,116.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,0,152,254.5);
p.frameBounds = [rect];


(lib.dress_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress5_mc();
	this.instance.setTransform(7.5,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An9xPIM8AFMAEtAiWIzXAEg");
	this.shape.setTransform(12.3,102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-8.4,144,270.7);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress5_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApRDeIh4swIHzrkIEFAAIFHFnMAJ0Ai1I/TBSg");
	this.shape.setTransform(7.1,124.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-9.5,220,308);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress5_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwJydIGQqMIKtgCIK4H4MAEeArpI6UF2g");
	this.shape.setTransform(14.9,175.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-8.2,206.9,367.4);
p.frameBounds = [rect];


(lib.dress_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress4_mc();
	this.instance.setTransform(-7.5,116.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.5,0,183,296.5);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress4_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqgijIHxsDIHlAGIFrLOImKQTIq4Bmg");
	this.shape.setTransform(-5.7,84.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-9.5,153,471);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_mc();
	this.instance.setTransform(7.5,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax748ILoknIYPe7IlwbqI67Aig");
	this.shape.setTransform(18.5,94.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-94.3,229.7,378.5);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress4_mc();
	this.instance.setTransform(8.5,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuqJoIA77zIIulxIFxABIICHGMAF5AlpI5NDJg");
	this.shape.setTransform(16.7,141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.1,-12.4,187.8,306.8);
p.frameBounds = [rect];


(lib.dress_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress3_mc();
	this.instance.setTransform(-7.5,116.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,0,157,249.3);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress3_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqqQEIhI51IEsuSIMXAGMAGiAhpImbNmIneAyg");
	this.shape.setTransform(7.5,144.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-9.3,151,308.2);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aw1TTMAIRgt6IMzAAMAMnAtGIl+EsI2gDdg");
	this.shape.setTransform(7.2,161.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.6,-8.5,219.7,340.9);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlvOZMgIUgjjIJRkCIJQADIILFBIlwR9IE0GuICWUqg");
	this.shape.setTransform(4.4,152.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.6,-9.2,180,363.7);
p.frameBounds = [rect];


(lib.dress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress2_mc();
	this.instance.setTransform(-8,116.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129,0,207,252.3);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress2_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsqpkIFitVIKtgBMAJOAqMI5lDpg");
	this.shape.setTransform(15.7,136);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.3,-10.7,163.9,293.6);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_mc();
	this.instance.setTransform(8,116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsecLMgF7g1VIL8kQMAY3AgOIpBang");
	this.shape.setTransform(15.4,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.4,-101.8,235.7,376.7);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AurXGMABngqiIIHlvIHwAAIHXHVMAEiArCg");
	this.shape.setTransform(7.7,153.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-8,209,342.5);
p.frameBounds = [rect];


(lib.dress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress1_mc();
	this.instance.setTransform(-7,116.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83,0,144,231.5);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress1_mc();
	this.instance.setTransform(7.5,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvXPfMAI7glgINNAAMAInAlNIlUFDIoTBzg");
	this.shape.setTransform(-8.4,129.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.8,-11.5,196.9,282.2);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_mc();
	this.instance.setTransform(8,116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuM53IF8hIIPJI8IHUfSIjPNOI0IAjg");
	this.shape.setTransform(-4.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.4,-44.3,181.9,345.7);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_mc();
	this.instance.setTransform(8,116.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArNq8IHRkbIH1gCIGsGpICgXjI6KAng");
	this.shape.setTransform(5.5,89.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-9.2,188,241.7);
p.frameBounds = [rect];


(lib.drags_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_1 = new lib.vic10_7_mc();
	this.part_1.setTransform(640,415);

	this.part_4 = new lib.vic10_6_mc();
	this.part_4.setTransform(480,415);

	this.part_3 = new lib.vic10_5_mc();
	this.part_3.setTransform(320,415);

	this.part_2 = new lib.vic10_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_3},{t:this.part_4},{t:this.part_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic9_7_mc();
	this.part_4.setTransform(640,415);

	this.part_1 = new lib.vic9_6_mc();
	this.part_1.setTransform(480,415);

	this.part_3 = new lib.vic9_5_mc();
	this.part_3.setTransform(320,415);

	this.part_2 = new lib.vic9_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_3},{t:this.part_1},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic8_7_mc();
	this.part_4.setTransform(640,415);

	this.part_3 = new lib.vic8_6_mc();
	this.part_3.setTransform(480,415);

	this.part_1 = new lib.vic8_5_mc();
	this.part_1.setTransform(320,415);

	this.part_2 = new lib.vic8_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_1},{t:this.part_3},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic7_7_mc();
	this.part_4.setTransform(640,415);

	this.part_1 = new lib.vic7_6_mc();
	this.part_1.setTransform(480,415);

	this.part_3 = new lib.vic7_5_mc();
	this.part_3.setTransform(320,415);

	this.part_2 = new lib.vic7_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_3},{t:this.part_1},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic6_7_mc();
	this.part_4.setTransform(640,415);

	this.part_3 = new lib.vic6_6_mc();
	this.part_3.setTransform(480,415);

	this.part_2 = new lib.vic6_5_mc();
	this.part_2.setTransform(320,415);

	this.part_1 = new lib.vic6_4_mc();
	this.part_1.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.part_2},{t:this.part_3},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic5_7_mc();
	this.part_4.setTransform(640,415);

	this.part_3 = new lib.vic5_6_mc();
	this.part_3.setTransform(480,415);

	this.part_1 = new lib.vic5_5_mc();
	this.part_1.setTransform(320,415);

	this.part_2 = new lib.vic5_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_1},{t:this.part_3},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic4_7_mc();
	this.part_4.setTransform(640,415);

	this.part_3 = new lib.vic4_6_mc();
	this.part_3.setTransform(480,415);

	this.part_2 = new lib.vic4_5_mc();
	this.part_2.setTransform(320,415);

	this.part_1 = new lib.vic4_4_mc();
	this.part_1.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.part_2},{t:this.part_3},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic3_7_mc();
	this.part_4.setTransform(640,415);

	this.part_3 = new lib.vic3_6_mc();
	this.part_3.setTransform(480,415);

	this.part_1 = new lib.vic3_5_mc();
	this.part_1.setTransform(320,415);

	this.part_2 = new lib.vic3_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_1},{t:this.part_3},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_1 = new lib.vic2_7_mc();
	this.part_1.setTransform(640,415);

	this.part_3 = new lib.vic2_6_mc();
	this.part_3.setTransform(480,415);

	this.part_4 = new lib.vic2_5_mc();
	this.part_4.setTransform(320,415);

	this.part_2 = new lib.vic2_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_4},{t:this.part_3},{t:this.part_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.drags_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.part_4 = new lib.vic1_7_mc();
	this.part_4.setTransform(640,415);

	this.part_3 = new lib.vic1_6_mc();
	this.part_3.setTransform(480,415);

	this.part_1 = new lib.vic1_5_mc();
	this.part_1.setTransform(320,415);

	this.part_2 = new lib.vic1_4_mc();
	this.part_2.setTransform(160,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_2},{t:this.part_1},{t:this.part_3},{t:this.part_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,335,640,160);
p.frameBounds = [rect];


(lib.current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.corner_filters_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_filter_mc();
	this.instance.setTransform(14.9,-14.7,1,1,45,0,0,0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.corner_filters_img();
	this.instance_1.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-99.3,189.4,189.3);
p.frameBounds = [rect];


(lib.check_shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_shadows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect, rect];


(lib.check_lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_lips_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect, rect];


(lib.check_hairstyle_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_hairstyle_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect];


(lib.check_eyes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_eyes_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_eyes_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_eyes_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect];


(lib.check_eyebrows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_eyebrows_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-90,50,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_eyebrows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_eyebrows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_eyebrows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-90,50,180);
p.frameBounds = [rect, rect];


(lib.check_blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_blush_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect, rect];


(lib.body_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5});

	// graph
	this.instance = new lib.hint_filter_en_img();
	this.instance.setTransform(-90,-30);

	this.instance_1 = new lib.hint_filter_ru_img();
	this.instance_1.setTransform(-90,-30);

	this.instance_2 = new lib.hint_filter_de_img();
	this.instance_2.setTransform(-90,-30);

	this.instance_3 = new lib.hint_filter_fr_img();
	this.instance_3.setTransform(-90,-30);

	this.instance_4 = new lib.hint_filter_es_img();
	this.instance_4.setTransform(-90,-30);

	this.instance_5 = new lib.hint_filter_pt_img();
	this.instance_5.setTransform(-90,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// decor
	this.instance_6 = new lib.hint_filter_arrow_mc();
	this.instance_6.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.blush_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new31_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new28_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new16_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new16_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new16_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new34_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new34_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new34_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new4_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new4_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new20_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new4_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new3_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new16_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new4_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new3_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new1_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new1_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new2_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new1_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXH0IAAvnISvAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-50,120,100);
p.frameBounds = [rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.animation_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_2_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({y:-1.5},5).to({y:2.5},5).to({y:-1.5},5).to({y:2.5},5).to({y:-1.5},5).to({y:2.5},5).to({y:-1.5},5).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-90.8,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-91.6,400,180), new cjs.Rectangle(-200,-92,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-89.6,400,180), new cjs.Rectangle(-200,-88.8,400,180), new cjs.Rectangle(-200,-88,400,180), new cjs.Rectangle(-200,-88.8,400,180), new cjs.Rectangle(-200,-89.6,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-92,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-89.6,400,180), new cjs.Rectangle(-200,-88.8,400,180), new cjs.Rectangle(-200,-88,400,180), new cjs.Rectangle(-200,-88.8,400,180), new cjs.Rectangle(-200,-89.6,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-92,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-89.6,400,180), new cjs.Rectangle(-200,-88.8,400,180), new cjs.Rectangle(-200,-88,400,180), new cjs.Rectangle(-200,-88.8,400,180), new cjs.Rectangle(-200,-89.6,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-92,400,180), new cjs.Rectangle(-200,-91.6,400,180), new cjs.Rectangle(-200,-91.2,400,180), new cjs.Rectangle(-200,-90.8,400,180), new cjs.Rectangle(-200,-90.4,400,180), new cjs.Rectangle(-200,-90,400,180)];


(lib.animation_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_1_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:0.801},10).to({alpha:1},10).to({alpha:0.801},10).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_question_mark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.question_mark_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({rotation:-10},10).to({rotation:10},20).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-71.2,-71.2,142.4,142.4), new cjs.Rectangle(-72.3,-72.4,144.8,144.8), new cjs.Rectangle(-73.5,-73.5,147.1,147.1), new cjs.Rectangle(-74.6,-74.6,149.4,149.4), new cjs.Rectangle(-75.8,-75.8,151.6,151.6), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-77.9,-77.9,156,156), new cjs.Rectangle(-79,-79,158.1,158.1), new cjs.Rectangle(-80,-80,160.1,160.1), new cjs.Rectangle(-81.1,-81.1,162.2,162.2), new cjs.Rectangle(-80,-80,160.1,160.1), new cjs.Rectangle(-79,-79,158.1,158.1), new cjs.Rectangle(-77.9,-77.9,156,156), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-75.8,-75.8,151.6,151.6), new cjs.Rectangle(-74.6,-74.6,149.4,149.4), new cjs.Rectangle(-73.3,-73.3,146.6,146.6), new cjs.Rectangle(-72.3,-72.4,144.8,144.8), new cjs.Rectangle(-71.2,-71.2,142.4,142.4), new cjs.Rectangle(-69.9,-69.9,140,140), new cjs.Rectangle(-71.2,-71.2,142.4,142.4), new cjs.Rectangle(-72.4,-72.3,144.8,144.8), new cjs.Rectangle(-73.3,-73.3,146.6,146.6), new cjs.Rectangle(-74.6,-74.6,149.4,149.4), new cjs.Rectangle(-75.8,-75.8,151.6,151.6), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-77.9,-77.9,156,156), new cjs.Rectangle(-79,-79,158.1,158.1), new cjs.Rectangle(-80,-80,160.1,160.1), new cjs.Rectangle(-81.1,-81.1,162.2,162.2), new cjs.Rectangle(-80,-80,160.1,160.1), new cjs.Rectangle(-79,-79,158.1,158.1), new cjs.Rectangle(-77.9,-77.9,156,156), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-75.8,-75.8,151.6,151.6), new cjs.Rectangle(-74.6,-74.6,149.4,149.4), new cjs.Rectangle(-73.5,-73.5,147.1,147.1), new cjs.Rectangle(-72.4,-72.3,144.8,144.8), new cjs.Rectangle(-71.2,-71.2,142.4,142.4), new cjs.Rectangle(-70,-70,140,140)];


(lib.animation_for_pointer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_for_pointer_2_mc();
	this.instance.setTransform(0,0,0.111,0.111);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(35));

	// animation
	this.instance_1 = new lib.animation_for_pointer_2_mc();
	this.instance_1.setTransform(0,0,0.111,0.111);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.animation_for_pointer_2_mc();
	this.instance_2.setTransform(0,0,0.111,0.111);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-10,-10,20,20), new cjs.Rectangle(-11.9,-11.9,24,24), new cjs.Rectangle(-13.9,-13.9,28,28), new cjs.Rectangle(-15.9,-15.9,32,32), new cjs.Rectangle(-17.9,-17.9,36,36), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-27.9,-27.9,56,56), new cjs.Rectangle(-31.9,-31.9,64,64), new cjs.Rectangle(-35.9,-35.9,72,72), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-47.9,-47.9,96,96), new cjs.Rectangle(-51.9,-51.9,104,104), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.animation_for_pointer_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.accessories_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:42,end:79});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// logo
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600,300,0.667,0.667);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:600.1,y:300.1,alpha:0.211},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.41},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.03,scaleY:1.03,alpha:0.609},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.801},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:600,y:300,alpha:1},0).wait(30).to({alpha:0.91},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.012},0).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:-944.4},0).wait(1).to({x:-888.9},0).wait(1).to({x:-833.3},0).wait(1).to({x:-777.7},0).wait(1).to({x:-722.2},0).wait(1).to({x:-666.6},0).wait(1).to({x:-611.1},0).wait(1).to({x:-555.5},0).wait(1).to({x:-500},0).wait(1).to({x:-444.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-333.3},0).wait(1).to({x:-277.7},0).wait(1).to({x:-222.2},0).wait(1).to({x:-166.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-55.5},0).wait(1).to({x:0},0).wait(30).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1).to({x:-233.3},0).wait(1).to({x:-266.6},0).wait(1).to({x:-300},0).wait(1).to({x:-333.3},0).wait(1).to({x:-366.6},0).wait(1).to({x:-400},0).wait(1).to({x:-433.3},0).wait(1).to({x:-466.6},0).wait(1).to({x:-500},0).wait(1).to({x:-533.3},0).wait(1).to({x:-566.6},0).wait(1).to({x:-600},0).wait(1).to({x:-633.3},0).wait(1).to({x:-666.6},0).wait(1).to({x:-700},0).wait(1).to({x:-733.3},0).wait(1).to({x:-766.6},0).wait(1).to({x:-800},0).wait(1).to({x:-833.3},0).wait(1).to({x:-866.6},0).wait(1).to({x:-900},0).wait(1).to({x:-933.3},0).wait(1).to({x:-966.6},0).wait(1).to({x:-1000},0).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:944.5},0).wait(1).to({x:888.9},0).wait(1).to({x:833.4},0).wait(1).to({x:777.8},0).wait(1).to({x:722.2},0).wait(1).to({x:666.7},0).wait(1).to({x:611.1},0).wait(1).to({x:555.6},0).wait(1).to({x:500},0).wait(1).to({x:444.5},0).wait(1).to({x:388.9},0).wait(1).to({x:333.4},0).wait(1).to({x:277.8},0).wait(1).to({x:222.3},0).wait(1).to({x:166.7},0).wait(1).to({x:111.1},0).wait(1).to({x:55.6},0).wait(1).to({x:0},0).wait(30).to({x:33.4},0).wait(1).to({x:66.7},0).wait(1).to({x:100},0).wait(1).to({x:133.4},0).wait(1).to({x:166.7},0).wait(1).to({x:200},0).wait(1).to({x:233.4},0).wait(1).to({x:266.7},0).wait(1).to({x:300},0).wait(1).to({x:333.4},0).wait(1).to({x:366.7},0).wait(1).to({x:400},0).wait(1).to({x:433.4},0).wait(1).to({x:466.7},0).wait(1).to({x:500},0).wait(1).to({x:533.4},0).wait(1).to({x:566.7},0).wait(1).to({x:600},0).wait(1).to({x:633.4},0).wait(1).to({x:666.7},0).wait(1).to({x:700},0).wait(1).to({x:733.4},0).wait(1).to({x:766.7},0).wait(1).to({x:800},0).wait(1).to({x:833.4},0).wait(1).to({x:866.7},0).wait(1).to({x:900},0).wait(1).to({x:933.4},0).wait(1).to({x:966.7},0).wait(1).to({x:1000},0).wait(2));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(29).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,3200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,-10,1422.2,620), new cjs.Rectangle(-55.5,-5,1311.1,610), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


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


(lib.snowflake_flashing_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.snowflake_flashing_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},9).to({scaleX:0.63,scaleY:0.63,alpha:0.102},20).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-62.2,-62.2,124.5,124.5), new cjs.Rectangle(-64.4,-64.4,128.9,128.9), new cjs.Rectangle(-66.6,-66.6,133.4,133.4), new cjs.Rectangle(-68.8,-68.8,137.8,137.8), new cjs.Rectangle(-71.1,-71.1,142.2,142.2), new cjs.Rectangle(-73.3,-73.3,146.6,146.6), new cjs.Rectangle(-75.5,-75.5,151.1,151.1), new cjs.Rectangle(-77.7,-77.7,155.6,155.6), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-78.4,-78.4,157,157), new cjs.Rectangle(-76.9,-76.9,154,154), new cjs.Rectangle(-75.5,-75.5,151,151), new cjs.Rectangle(-74,-74,148,148), new cjs.Rectangle(-72.5,-72.5,145,145), new cjs.Rectangle(-70.9,-70.9,142,142), new cjs.Rectangle(-69.4,-69.4,139,139), new cjs.Rectangle(-68,-68,136,136), new cjs.Rectangle(-66.5,-66.5,133,133), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-63.4,-63.4,127,127), new cjs.Rectangle(-61.9,-61.9,124,124), new cjs.Rectangle(-60.5,-60.5,121,121), new cjs.Rectangle(-59,-59,118,118), new cjs.Rectangle(-57.5,-57.5,115,115), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-54.4,-54.4,109,109), new cjs.Rectangle(-53,-53,106,106), new cjs.Rectangle(-51.5,-51.5,103,103), new cjs.Rectangle(-50,-50,100,100), null];


(lib.snowfall_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var container_mc = this.container_mc;
		container_mc.gotoAndStop(0);
		var _containerBounds_rect = container_mc.getBounds();
		/*
		константы
		*/
		var _SPEED_NUM = 0.75;
		var _CURRENT_NUM = 0.25;
		var _BUBBLE_DIAMETER_NUM = 50;
		/*
		создаём n-ое количество пузырей
		*/
		_createSnowflakesFunc(8);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
		{
			/*
			получаем пузырь
			*/
			var target_mc = event.target;
			target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
			}
			if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM)
			{
				target_mc.x = 1;
			}
			if (target_mc.x <= 0)
			{
				target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// snowfall
	this.instance = new lib.Snowflake();
	this.instance.setTransform(400,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,724);
p.frameBounds = [rect];


(lib.snowfall_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var container_mc = this.container_mc;
		container_mc.gotoAndStop(0);
		var _containerBounds_rect = container_mc.getBounds();
		/*
		константы
		*/
		var _SPEED_NUM = 0.75;
		var _CURRENT_NUM = 0.25;
		var _BUBBLE_DIAMETER_NUM = 50;
		/*
		создаём n-ое количество пузырей
		*/
		_createSnowflakesFunc(12);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake_2();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
		{
			/*
			получаем пузырь
			*/
			var target_mc = event.target;
			target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
			}
			if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM)
			{
				target_mc.x = 1;
			}
			if (target_mc.x <= 0)
			{
				target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// snowfall
	this.instance = new lib.Snowflake_2();
	this.instance.setTransform(500,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1000,708);
p.frameBounds = [rect];


(lib.radio_button_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_3_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.radio_button_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_2_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40.5);
p.frameBounds = [rect];


(lib.radio_button_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_1_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.radio_button_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_0_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.output_numbers_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_2 = new lib.output_numbers_3_mc();
	this.char_2.setTransform(26,0);

	this.char_1 = new lib.output_numbers_3_mc();

	this.char_0 = new lib.output_numbers_3_mc();
	this.char_0.setTransform(-26,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_0},{t:this.char_1},{t:this.char_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20,92,40);
p.frameBounds = [rect];


(lib.output_numbers_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 3.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.chars_mc.gotoAndStop(0);
		/*
		
		*/
		var _INTERVAL = 100;
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _value_str = "0";
		var _startValue_num = 0;
		var _finalValue_num = 0;
		var _duration_num = 0;
		var _partValue_num = 0;
		var _maxChars_num = Number(this.chars_mc.numChildren);
		var _idInterval;
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		this.setAnimatedValueFunc = function(startValue_num, finalValue_num, duration_num, delay_num)
		{
			/*
			
			*/
			if(startValue_num === undefined)
			{
				startValue_num = 0;
			}
			else
			{
				startValue_num = Number(startValue_num);
			}
			/*
			
			*/
			if(finalValue_num === undefined)
			{
				finalValue_num = 0;
			}
			else
			{
				finalValue_num = Number(finalValue_num);
			}
			/*
			
			*/
			if(duration_num === undefined)
			{
				duration_num = 1;
			}
			else
			{
				duration_num = Number(duration_num);
			}
			/*
			
			*/
			if(delay_num === undefined)
			{
				delay_num = 0;
			}
			else
			{
				delay_num = Number(delay_num);
			}
			/*
			
			*/
			_value_num = startValue_num;
			_startValue_num = startValue_num;
			_finalValue_num = finalValue_num;
			_duration_num = duration_num;
			/*
			
			*/
			if(delay_num > 0)
			{
				setTimeout(_onStartIntervalFunc, delay_num * 1000);
			}
			else
			{
				_onStartIntervalFunc();
			}
		}
		/*
		
		*/
		function _onStartIntervalFunc()
		{
			var tick_num = (_duration_num * 1000) / _INTERVAL;
			_partValue_num = Math.ceil((_finalValue_num - _startValue_num) / tick_num);
			_idInterval = setInterval(_onTickIntervalFunc, _INTERVAL);
		}
		/*
		
		*/
		function _onTickIntervalFunc()
		{
			/*
			
			*/
			_value_num += _partValue_num;
			/*
			
			*/
			if(_value_num > _finalValue_num)
			{
				/*
				
				*/
				_value_num = _finalValue_num;
				/*
				
				*/
				clearInterval(_idInterval);
				/*
				
				*/
				var user_event = new createjs.Event("completed_animation");
				user_event.numberValue = _value_num;
				_that.dispatchEvent(user_event);
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
			_value_str = _value_num.toString();
			_value_str = String(_value_str).trim();
			/*
			
			*/
			if(_value_str.length > _maxChars_num)
			{
				_value_str = _value_str.substr(0, _maxChars_num);
			}
			/*
			
			*/
			var i = _maxChars_num - 1;
			var j = _value_str.length - 1;
			var char_mc;
			while(i >= 0)
			{
				/*
				
				*/
				if(_that.chars_mc["char_" + i])
				{
					/*
					
					*/
					char_mc = _that.chars_mc["char_" + i];
					char_mc.name = "char_" + i;
					/*
					
					*/
					if(j >= 0)
					{
						char_mc.visible = true;
						char_mc.gotoAndStop(parseInt(_value_str.charAt(j)));
					}
					else
					{
						char_mc.visible = false;
						char_mc.gotoAndStop(0);
					}
				}
				/*
				
				*/
				i--;
				j--;
			}
		}
		/*
		
		*/
		function _getNumberValueFunc()
		{
			/*
			
			*/
			var result_num = parseInt(_value_str);
			/*
			
			*/
			if(isNaN(result_num))
			{
				result_num = 0;
			}
			/*
			
			*/
			return result_num;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.chars_mc = new lib.output_numbers_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.chars_mc).wait(1));

	// bg
	this.instance = new lib.indicator_part_5_mc();
	this.instance.setTransform(60,0,0.899,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20,124,40);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.Glitter_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.glitter_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.TrackMove_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.track_move_1_2_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14).to({scaleX:0.9,scaleY:0.9,rotation:90},10).to({scaleX:0.8,scaleY:0.8,rotation:180},10).to({scaleX:0.6,scaleY:0.6,rotation:270},10).to({scaleX:0.4,scaleY:0.4,rotation:360},10).to({alpha:0.012},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-31.4,-31.4,62.9,62.9), new cjs.Rectangle(-32.8,-32.8,65.7,65.7), new cjs.Rectangle(-34.2,-34.2,68.6,68.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-37.1,-37.1,74.3,74.3), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-41.4,-41.4,82.9,82.9), new cjs.Rectangle(-42.8,-42.8,85.7,85.7), new cjs.Rectangle(-44.2,-44.2,88.6,88.6), new cjs.Rectangle(-45.7,-45.7,91.5,91.5), new cjs.Rectangle(-47.1,-47.1,94.3,94.3), new cjs.Rectangle(-48.5,-48.5,97.2,97.2), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-56.6,-56.6,113.3,113.3), new cjs.Rectangle(-61.6,-61.5,123.2,123.2), new cjs.Rectangle(-65.1,-65.1,130.4,130.4), new cjs.Rectangle(-66.8,-66.9,133.8,133.8), new cjs.Rectangle(-67.1,-67.1,134.3,134.3), new cjs.Rectangle(-65.5,-65.5,131.1,131.1), new cjs.Rectangle(-62.4,-62.4,124.9,124.9), new cjs.Rectangle(-57.8,-57.8,115.7,115.7), new cjs.Rectangle(-52.1,-52,104.1,104.1), new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-50.9,-50.8,101.8,101.8), new cjs.Rectangle(-55.3,-55.2,110.6,110.6), new cjs.Rectangle(-58.5,-58.4,116.9,116.9), new cjs.Rectangle(-59.9,-59.9,119.9,119.9), new cjs.Rectangle(-60.1,-60.1,120.2,120.2), new cjs.Rectangle(-58.5,-58.5,117.1,117.1), new cjs.Rectangle(-55.8,-55.8,111.6,111.6), new cjs.Rectangle(-51.6,-51.5,103.1,103.1), new cjs.Rectangle(-46.3,-46.3,92.6,92.6), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-44.6,-44.6,89.2,89.2), new cjs.Rectangle(-47.8,-47.8,95.6,95.6), new cjs.Rectangle(-49.7,-49.7,99.4,99.4), new cjs.Rectangle(-50.2,-50.2,100.4,100.4), new cjs.Rectangle(-49.5,-49.5,99,99), new cjs.Rectangle(-47.4,-47.4,94.8,94.8), new cjs.Rectangle(-44.3,-44.3,88.7,88.7), new cjs.Rectangle(-40.2,-40.2,80.5,80.5), new cjs.Rectangle(-35.4,-35.4,70.9,70.9), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-33.1,-33.2,66.3,66.3), new cjs.Rectangle(-35.1,-35.2,70.4,70.4), new cjs.Rectangle(-36.2,-36.3,72.6,72.6), new cjs.Rectangle(-36.2,-36.2,72.5,72.5), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-33.4,-33.4,67,67), new cjs.Rectangle(-30.8,-30.9,61.8,61.8), new cjs.Rectangle(-27.6,-27.6,55.3,55.3), new cjs.Rectangle(-24,-23.9,48,48), new cjs.Rectangle(-20,-20,40,40), rect=new cjs.Rectangle(-19.9,-19.9,40,40), rect, rect, rect, new cjs.Rectangle(-20,-20,40,40)];


(lib.TrackMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.track_move_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-49.1,-49.1,98.3,98.3), new cjs.Rectangle(-48.2,-48.2,96.6,96.6), new cjs.Rectangle(-47.4,-47.4,94.9,94.9), new cjs.Rectangle(-46.5,-46.5,93.1,93.1), new cjs.Rectangle(-45.6,-45.6,91.4,91.4), new cjs.Rectangle(-44.8,-44.8,89.7,89.7), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-43.1,-43.1,86.2,86.2), new cjs.Rectangle(-42.2,-42.2,84.5,84.5), new cjs.Rectangle(-41.3,-41.3,82.8,82.8), new cjs.Rectangle(-40.5,-40.5,81.1,81.1), new cjs.Rectangle(-39.6,-39.6,79.3,79.3), new cjs.Rectangle(-38.7,-38.7,77.6,77.6), new cjs.Rectangle(-37.9,-37.9,75.9,75.9), new cjs.Rectangle(-37,-37,74.2,74.2), new cjs.Rectangle(-36.2,-36.2,72.4,72.4), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-34.4,-34.4,69,69), new cjs.Rectangle(-33.6,-33.6,67.3,67.3), new cjs.Rectangle(-32.7,-32.7,65.5,65.5), new cjs.Rectangle(-31.8,-31.8,63.8,63.8), new cjs.Rectangle(-31,-31,62.1,62.1), new cjs.Rectangle(-30.1,-30.1,60.4,60.4), new cjs.Rectangle(-29.3,-29.3,58.6,58.6), new cjs.Rectangle(-28.4,-28.4,56.9,56.9), new cjs.Rectangle(-27.5,-27.5,55.2,55.2), new cjs.Rectangle(-26.7,-26.7,53.5,53.5), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-25,-25,50,50)];


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


(lib.skip_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArsHCIAAuDIXZAAIAAODg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-75,-45,150,90)];


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

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(116));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:-10},10).to({x:0},20).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAlzEIkIQEHkIF0AAQF1AAEIEIQEGEIABFzQgBF1kGEHQkIEIl1gBQl0ABkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-90,190,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-90,190,180), new cjs.Rectangle(-97,-90,190,180), new cjs.Rectangle(-98,-90,190,180), new cjs.Rectangle(-99,-90,190,180), new cjs.Rectangle(-100,-90,190,180), new cjs.Rectangle(-101,-90,191,180), new cjs.Rectangle(-102,-90,192,180), new cjs.Rectangle(-103,-90,193,180), new cjs.Rectangle(-104,-90,194,180), new cjs.Rectangle(-105,-90,195,180), new cjs.Rectangle(-104.5,-90,194.5,180), new cjs.Rectangle(-104,-90,194,180), new cjs.Rectangle(-103.5,-90,193.5,180), new cjs.Rectangle(-103,-90,193,180), new cjs.Rectangle(-102.5,-90,192.5,180), new cjs.Rectangle(-102,-90,192,180), new cjs.Rectangle(-101.5,-90,191.5,180), new cjs.Rectangle(-101,-90,191,180), new cjs.Rectangle(-100.5,-90,190.5,180), new cjs.Rectangle(-100,-90,190,180), new cjs.Rectangle(-99.5,-90,190,180), new cjs.Rectangle(-99,-90,190,180), new cjs.Rectangle(-98.5,-90,190,180), new cjs.Rectangle(-98,-90,190,180), new cjs.Rectangle(-97.5,-90,190,180), new cjs.Rectangle(-97,-90,190,180), new cjs.Rectangle(-96.5,-90,190,180), new cjs.Rectangle(-96,-90,190,180), new cjs.Rectangle(-95.5,-90,190,180), new cjs.Rectangle(-95,-90,190,180)];


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:10},10).to({x:0},20).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAlzEIkIQEHkIF0AAQF1AAEIEIQEGEIABFzQgBF1kGEHQkIEIl1gBQl0ABkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AnuHuQjMjMgBkiQABkhDMjNQDOjNEgAAQEiAADNDNQDNDNAAEhQAAEijNDMQjNDNkiABQkggBjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.snow_logo_mc();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance_1 = new lib.beam_light_0_mc();
	this.instance_1.setTransform(-220,0,1,1,30);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_2 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-74,290,114);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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


(lib.animation_for_forward_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_for_forward_2_mc();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(17));

	// animation
	this.instance_1 = new lib.animation_for_forward_2_mc();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(9));

	// animation
	this.instance_2 = new lib.animation_for_forward_2_mc();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-67.7,-67.7,135.4,135.4), new cjs.Rectangle(-70.4,-70.4,140.9,140.9), new cjs.Rectangle(-73.1,-73.1,146.3,146.3), new cjs.Rectangle(-75.8,-75.8,151.6,151.6), new cjs.Rectangle(-78.5,-78.5,157.1,157.1), new cjs.Rectangle(-81.2,-81.2,162.5,162.5), new cjs.Rectangle(-83.9,-83.9,167.9,167.9), new cjs.Rectangle(-86.6,-86.6,173.3,173.3), new cjs.Rectangle(-89.3,-89.3,178.8,178.8), new cjs.Rectangle(-92,-92,184.1,184.1), new cjs.Rectangle(-94.7,-94.7,189.6,189.6), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-100.2,-100.2,200.4,200.4), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-105.6,-105.6,211.3,211.3), new cjs.Rectangle(-108.3,-108.3,216.7,216.7), new cjs.Rectangle(-111,-111,222.1,222.1), new cjs.Rectangle(-113.7,-113.7,227.5,227.5), new cjs.Rectangle(-116.4,-116.4,232.9,232.9), new cjs.Rectangle(-119.1,-119.1,238.4,238.4), new cjs.Rectangle(-121.8,-121.8,243.8,243.8), new cjs.Rectangle(-124.5,-124.5,249.2,249.2), new cjs.Rectangle(-127.2,-127.2,254.6,254.6), new cjs.Rectangle(-129.9,-129.9,260,260), new cjs.Rectangle(-132.7,-132.7,265.4,265.4), new cjs.Rectangle(-135.4,-135.4,270.8,270.8), new cjs.Rectangle(-138.1,-138.1,276.3,276.3), rect=new cjs.Rectangle(-140.8,-140.8,281.7,281.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_forward_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.animation_for_forward_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// icon
	this.instance_1 = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

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


(lib.vic0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.animation_question_mark_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title_1
	this.instance = new lib.animation_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// title_2
	this.instance_1 = new lib.animation_title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// title_3
	this.instance_2 = new lib.title_3_mc();
	this.instance_2.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-90,400,180);
p.frameBounds = [rect];


(lib.text7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_7_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-130,385,260);
p.frameBounds = [rect];


(lib.text6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_6_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.text5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_5_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.text4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_4_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_3_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_2_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.message_1_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-74,386,148);
p.frameBounds = [rect];


(lib.targets_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic10_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic10_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic10_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic9_3_mc();
	this.instance.setTransform(160,210);

	this.instance_1 = new lib.vic9_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic9_1_mc();
	this.instance_2.setTransform(480,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic8_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic8_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic8_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic7_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic7_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic7_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic6_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic6_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic6_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic5_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic5_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic5_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic4_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic4_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic4_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic3_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic3_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic3_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic2_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic2_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic2_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.targets_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// parts
	this.instance = new lib.vic1_3_mc();
	this.instance.setTransform(480,210);

	this.instance_1 = new lib.vic1_2_mc();
	this.instance_1.setTransform(320,210);

	this.instance_2 = new lib.vic1_1_mc();
	this.instance_2.setTransform(160,210);

	this.part_1 = new lib.vic0_2_mc();
	this.part_1.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.part_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,160);
p.frameBounds = [rect];


(lib.shadows_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new30_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new47_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new7_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new20_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new15_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new2_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new15_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new15_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new24_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new8_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new8_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new8_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new6_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new2_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new41_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new5_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new8_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7H0IAAvnIV3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-55,140,110);
p.frameBounds = [rect];


(lib.quiz_hint_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.animation_question_mark_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.yellow_backing_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.quest_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.quest_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83},14).to({scaleX:1,scaleY:1},15).wait(1));

	// animation
	this.waves_mc = new lib.animation_for_pointer_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.waves_mc).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-110.6,-58.2,118.6,118.6), new cjs.Rectangle(-109.3,-57.5,117.2,117.2), new cjs.Rectangle(-107.9,-56.8,115.7,115.7), new cjs.Rectangle(-106.6,-56.1,114.3,114.3), new cjs.Rectangle(-105.3,-55.4,112.9,112.9), new cjs.Rectangle(-104,-54.7,111.5,111.5), new cjs.Rectangle(-102.6,-54,110,110), new cjs.Rectangle(-101.3,-53.3,108.6,108.6), new cjs.Rectangle(-99.9,-52.6,107.2,107.2), new cjs.Rectangle(-98.6,-51.9,105.7,105.7), new cjs.Rectangle(-97.3,-51.2,104.3,104.3), new cjs.Rectangle(-95.9,-50.5,102.9,102.9), new cjs.Rectangle(-94.6,-49.8,101.5,101.5), new cjs.Rectangle(-93.3,-49.1,100,100), new cjs.Rectangle(-94.5,-49.8,101.4,101.4), new cjs.Rectangle(-95.8,-50.4,102.7,102.7), new cjs.Rectangle(-97,-51.1,104,104), new cjs.Rectangle(-98.3,-51.7,105.4,105.4), new cjs.Rectangle(-99.5,-52.4,106.7,106.7), new cjs.Rectangle(-100.7,-53,108,108), new cjs.Rectangle(-102,-53.7,109.4,109.4), new cjs.Rectangle(-103.2,-54.4,110.7,110.7), new cjs.Rectangle(-104.5,-55,112,112), new cjs.Rectangle(-105.7,-55.7,113.4,113.4), new cjs.Rectangle(-107,-56.3,114.7,114.7), new cjs.Rectangle(-108.2,-57,116,116), new cjs.Rectangle(-109.5,-57.6,117.4,117.4), new cjs.Rectangle(-110.7,-58.3,118.7,118.7), new cjs.Rectangle(-112,-59,120,120)];


(lib.location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_9_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_9_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_8_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_8_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_7_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_7_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A8HcIMAAAg4PMA4PAAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, new cjs.Rectangle(-210,-210,420,420), new cjs.Rectangle(-190,-190,380,380)];


(lib.lips_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new6_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new26_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new26_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new39_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new41_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new41_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new39_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new4_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new6_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new4_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new6_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new6_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new37_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new31_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new4_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new27_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqK8IAA13IJVAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-75,70,150);
p.frameBounds = [rect];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuqCLQg2ABgngmQglgmgBg2QABg0AlgnQAnglA2gBIdqAAQA1ABAmAlQAnAngBA0QABA2gnAmQgmAmg1gBg");
	mask.setTransform(109,14);

	// text
	this.output_numbers_comp = new lib.output_numbers_1_mc();
	this.output_numbers_comp.setTransform(110.1,-19.4,0.6,0.6,0,0,0,0.1,1);

	this.output_numbers_comp.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_2_mc();

	this.indicator_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2,2,216,26);
p.frameBounds = [rect];


(lib.hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop("ru");
		}
		else if (lang_str == "de")
		{
			this.body_mc.gotoAndStop("de");
		}
		else if (lang_str == "fr")
		{
			this.body_mc.gotoAndStop("fr");
		}
		else if (lang_str == "es")
		{
			this.body_mc.gotoAndStop("es");
		}
		else if (lang_str == "pt")
		{
			this.body_mc.gotoAndStop("pt");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_hint_filter_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(498,455);

	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(700,370);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(318,355);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(104,355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_1},{t:this.hero_2},{t:this.hero_4},{t:this.hero_3}]}).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_4}]},1).to({state:[{t:this.hero_1},{t:this.hero_2},{t:this.hero_4},{t:this.hero_3}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_4}]},1).to({state:[{t:this.hero_1},{t:this.hero_2},{t:this.hero_4},{t:this.hero_3}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_4}]},1).to({state:[{t:this.hero_1},{t:this.hero_2},{t:this.hero_4},{t:this.hero_3}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_4}]},1).to({state:[{t:this.hero_1},{t:this.hero_2},{t:this.hero_4},{t:this.hero_3}]},1).to({state:[{t:this.hero_1}]},1).to({state:[{t:this.hero_2}]},1).to({state:[{t:this.hero_3}]},1).to({state:[{t:this.hero_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.hero_3).to({_off:true},1).wait(2).to({_off:false,x:398},0).to({_off:true},1).wait(1).to({_off:false,x:498},0).to({_off:true},1).wait(2).to({_off:false,x:398},0).to({_off:true},1).wait(1).to({_off:false,x:498},0).to({_off:true},1).wait(2).to({_off:false,x:398},0).to({_off:true},1).wait(1).to({_off:false,x:498},0).to({_off:true},1).wait(2).to({_off:false,x:398},0).to({_off:true},1).wait(1).to({_off:false,x:498},0).to({_off:true},1).wait(2).to({_off:false,x:398},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.hero_4).to({_off:true},1).wait(3).to({_off:false,x:401},0).wait(1).to({x:700},0).to({_off:true},1).wait(3).to({_off:false,x:401},0).wait(1).to({x:700},0).to({_off:true},1).wait(3).to({_off:false,x:401},0).wait(1).to({x:700},0).to({_off:true},1).wait(3).to({_off:false,x:401},0).wait(1).to({x:700},0).to({_off:true},1).wait(3).to({_off:false,x:401},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.hero_2).to({_off:true},1).wait(1).to({_off:false,x:418},0).to({_off:true},1).wait(2).to({_off:false,x:318},0).to({_off:true},1).wait(1).to({_off:false,x:418},0).to({_off:true},1).wait(2).to({_off:false,x:318},0).to({_off:true},1).wait(1).to({_off:false,x:418},0).to({_off:true},1).wait(2).to({_off:false,x:318},0).to({_off:true},1).wait(1).to({_off:false,x:418},0).to({_off:true},1).wait(2).to({_off:false,x:318},0).to({_off:true},1).wait(1).to({_off:false,x:418},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:402},0).to({_off:true},1).wait(3).to({_off:false,x:104},0).wait(1).to({x:402},0).to({_off:true},1).wait(3).to({_off:false,x:104},0).wait(1).to({x:402},0).to({_off:true},1).wait(3).to({_off:false,x:104},0).wait(1).to({x:402},0).to({_off:true},1).wait(3).to({_off:false,x:104},0).wait(1).to({x:402},0).to({_off:true},1).wait(3));

	// decor
	this.instance = new lib.dragon_mc();
	this.instance.setTransform(755,350);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,skewY:180,x:40,y:330},0).to({_off:true},1).wait(5).to({_off:false,skewY:0,x:755,y:350},0).to({_off:true},1).wait(5).to({_off:false,skewY:180,x:40,y:330},0).to({_off:true},1).wait(5));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(25));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-200,0);

	this.instance_5 = new lib.background_6_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,1200,736.9);
p.frameBounds = [rect, new cjs.Rectangle(-200,-50,1259,724), new cjs.Rectangle(-200,-50,1200,724), new cjs.Rectangle(-200,-50,1200,736), rect=new cjs.Rectangle(-200,-50,1200,736.9), rect, new cjs.Rectangle(-200,-50,1200,724), new cjs.Rectangle(-264,-50,1264,724), new cjs.Rectangle(-200,-50,1200,736), rect=new cjs.Rectangle(-200,-50,1200,736.9), rect, rect=new cjs.Rectangle(-200,-50,1200,724), rect, new cjs.Rectangle(-200,-50,1259,736), rect=new cjs.Rectangle(-200,-50,1200,736.9), rect, rect=new cjs.Rectangle(-200,-50,1200,724), rect, new cjs.Rectangle(-200,-50,1200,736), new cjs.Rectangle(-264,-50,1264,736.9), new cjs.Rectangle(-200,-50,1200,736.9), rect=new cjs.Rectangle(-200,-50,1200,724), rect, new cjs.Rectangle(-200,-50,1200,736), new cjs.Rectangle(-200,-50,1200,736.9)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_main_mc();
	this.instance.setTransform(570,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:1250},15).to({_off:true},1).wait(64).to({_off:false},0).to({x:520},16).to({x:570},4).wait(1));

	// animation
	this.instance_1 = new lib.hero1_main_mc();
	this.instance_1.setTransform(250,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({x:-450},15).to({_off:true},1).wait(64).to({_off:false},0).to({x:300},16).to({x:250},4).wait(1));

	// animation
	this.instance_2 = new lib.hero3_main_mc();
	this.instance_2.setTransform(-400,460);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({x:300},16).to({x:250},4).wait(40).to({x:-400},15).to({_off:true},1).wait(15));

	// animation
	this.instance_3 = new lib.hero4_main_mc();
	this.instance_3.setTransform(1200,375);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({x:500},16).to({x:550},4).wait(40).to({x:1200},15).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(19.6,16,728.7,663);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-27.1,16,820.7,663), new cjs.Rectangle(-73.8,16,912.7,663), new cjs.Rectangle(-120.4,16,1004.7,663), new cjs.Rectangle(-167.1,16,1096.6,663), new cjs.Rectangle(-213.8,16,1188.7,663), new cjs.Rectangle(-260.4,16,1280.7,663), new cjs.Rectangle(-307.1,16,1372.7,663), new cjs.Rectangle(-353.8,16,1464.6,663), new cjs.Rectangle(-400.4,16,1556.7,663), new cjs.Rectangle(-523,16,1845.5,675.9), new cjs.Rectangle(-493.8,16,1772.6,675.9), new cjs.Rectangle(-540.4,16,1832.7,675.9), new cjs.Rectangle(-587.1,16,1924.7,675.9), new cjs.Rectangle(-633.8,16,2016.7,675.9), new cjs.Rectangle(-680.4,16,2108.7,675.9), new cjs.Rectangle(-260.5,29,1320.5,662.9), new cjs.Rectangle(-216.7,29,1233,662.9), new cjs.Rectangle(-173,29,1145.5,662.9), new cjs.Rectangle(-129.2,29,1058,662.9), new cjs.Rectangle(-85.5,29,970.5,662.9), new cjs.Rectangle(-41.7,29,883,662.9), new cjs.Rectangle(2,29,795.6,662.9), new cjs.Rectangle(45.7,29,708.1,662.9), new cjs.Rectangle(89.5,29,620.6,662.9), new cjs.Rectangle(133.2,29,533.1,662.9), new cjs.Rectangle(177,29,445.5,662.9), new cjs.Rectangle(164.5,29,470.6,662.9), new cjs.Rectangle(152,29,495.6,662.9), new cjs.Rectangle(139.5,29,520.6,662.9), rect=new cjs.Rectangle(127,29,545.5,662.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(83.6,29,632.3,662.9), new cjs.Rectangle(40.3,29,718.9,662.9), new cjs.Rectangle(-3,29,805.6,662.9), new cjs.Rectangle(-46.3,29,892.2,662.9), new cjs.Rectangle(-89.6,29,978.8,662.9), new cjs.Rectangle(-133,29,1065.5,662.9), new cjs.Rectangle(-176.3,29,1152.2,662.9), new cjs.Rectangle(-219.6,29,1238.8,662.9), new cjs.Rectangle(-263,29,1325.5,662.9), new cjs.Rectangle(-680.4,16,2108.7,675.9), new cjs.Rectangle(-633.5,16,2016.2,675.9), new cjs.Rectangle(-586.7,16,1923.7,675.9), new cjs.Rectangle(-539.8,16,1831.2,675.9), new cjs.Rectangle(-492.9,16,1772.1,675.9), new cjs.Rectangle(-523,16,1845.5,675.9), new cjs.Rectangle(-399.2,16,1553.7,663), new cjs.Rectangle(-352.3,16,1461.2,663), new cjs.Rectangle(-305.4,16,1368.7,663), new cjs.Rectangle(-258.5,16,1276.1,663), new cjs.Rectangle(-211.7,16,1183.7,663), new cjs.Rectangle(-164.8,16,1091.1,663), new cjs.Rectangle(-117.9,16,998.7,663), new cjs.Rectangle(-71.1,16,906.2,663), new cjs.Rectangle(-24.2,16,813.7,663), new cjs.Rectangle(22.6,16,721.3,663), new cjs.Rectangle(69.6,16,628.7,663), new cjs.Rectangle(57,16,653.7,663), new cjs.Rectangle(44.5,16,678.7,663), new cjs.Rectangle(32,16,703.7,663), new cjs.Rectangle(19.6,16,728.7,663)];


(lib.hairstyle_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_4_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_4_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_4_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_4_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_4_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_4_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-140,-140,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_hairstyle_1_mc();
	this.check_mc.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5O6QmMmMAAouQAAotGMmMQGMmMItAAQIuAAGMGMQGLGMABItQgBIumLGMQmMGLouABQotgBmMmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-155,310,310);
p.frameBounds = [rect];


(lib.frame_locations_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:-500},0).wait(23).to({x:-190,y:50},16).to({x:-195,y:0},4).wait(45).to({y:550},15).wait(16));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-384.7,-690,769.7,414.4), new cjs.Rectangle(-384.3,-690,769.4,448.8), new cjs.Rectangle(-384,-690,769.1,483.1), new cjs.Rectangle(-383.7,-690,768.8,517.5), new cjs.Rectangle(-383.4,-690,768.5,551.9), new cjs.Rectangle(-383.1,-690,768.1,586.3), new cjs.Rectangle(-382.8,-690,767.8,620.6), new cjs.Rectangle(-382.5,-690,767.5,655), new cjs.Rectangle(-382.2,-690,767.2,689.4), new cjs.Rectangle(-381.8,-690,766.9,723.8), new cjs.Rectangle(-381.5,-655.6,766.6,723.7), new cjs.Rectangle(-381.2,-621.2,766.3,723.8), new cjs.Rectangle(-380.9,-586.9,766,723.8), new cjs.Rectangle(-380.6,-552.5,765.6,723.8), new cjs.Rectangle(-380.3,-518.1,765.3,723.8), new cjs.Rectangle(-380,-483.7,765,723.8), new cjs.Rectangle(-381.2,-449.4,766.3,676.9), new cjs.Rectangle(-382.5,-415,767.5,630), new cjs.Rectangle(-383.7,-380.6,768.8,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(16));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,416.7), new cjs.Rectangle(-385,-190,770,453.4), new cjs.Rectangle(-385,-190,770,490), new cjs.Rectangle(-385,-190,770,526.7), new cjs.Rectangle(-385,-190,770,563.4), new cjs.Rectangle(-385,-190,770,600), new cjs.Rectangle(-385,-190,770,636.7), new cjs.Rectangle(-385,-190,770,673.4), new cjs.Rectangle(-385,-190,770,710), new cjs.Rectangle(-385,-190,770,746.7), new cjs.Rectangle(-385,-153.3,770,746.7), new cjs.Rectangle(-385,-116.6,770,746.7), new cjs.Rectangle(-385,-80,770,746.7), new cjs.Rectangle(-385,-43.3,770,746.7), new cjs.Rectangle(-385,-6.6,770,746.7), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":119});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(23).to({y:50},16).to({y:0},4).wait(45).to({y:550},16).wait(15));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(33).to({y:50},16).to({y:0},4).wait(45).to({y:550},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-690,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-690,770,414.4), new cjs.Rectangle(-385,-690,770,448.8), new cjs.Rectangle(-385,-690,770,483.1), new cjs.Rectangle(-385,-690,770,517.5), new cjs.Rectangle(-385,-690,770,551.9), new cjs.Rectangle(-385,-690,770,586.3), new cjs.Rectangle(-385,-690,770,620.6), new cjs.Rectangle(-385,-690,770,655), new cjs.Rectangle(-385,-690,770,689.4), new cjs.Rectangle(-385,-690,770,723.8), new cjs.Rectangle(-385,-655.6,770,723.7), new cjs.Rectangle(-385,-621.2,770,723.8), new cjs.Rectangle(-385,-586.9,770,723.8), new cjs.Rectangle(-385,-552.5,770,723.8), new cjs.Rectangle(-385,-518.1,770,723.7), new cjs.Rectangle(-385,-483.7,770,723.8), new cjs.Rectangle(-385,-449.4,770,676.9), new cjs.Rectangle(-385,-415,770,630), new cjs.Rectangle(-385,-380.6,770,583.2), new cjs.Rectangle(-385,-346.2,770,536.3), new cjs.Rectangle(-385,-311.9,770,501.9), new cjs.Rectangle(-385,-277.5,770,467.5), new cjs.Rectangle(-385,-243.1,770,433.2), new cjs.Rectangle(-385,-208.7,770,398.8), new cjs.Rectangle(-385,-190,770,395.6), new cjs.Rectangle(-385,-190,770,430), new cjs.Rectangle(-385,-190,770,417.5), new cjs.Rectangle(-385,-190,770,405), new cjs.Rectangle(-385,-190,770,392.5), rect=new cjs.Rectangle(-385,-190,770,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-190,770,414.4), new cjs.Rectangle(-385,-190,770,448.8), new cjs.Rectangle(-385,-190,770,483.1), new cjs.Rectangle(-385,-190,770,517.5), new cjs.Rectangle(-385,-190,770,551.9), new cjs.Rectangle(-385,-190,770,586.3), new cjs.Rectangle(-385,-190,770,620.6), new cjs.Rectangle(-385,-190,770,655), new cjs.Rectangle(-385,-190,770,689.4), new cjs.Rectangle(-385,-190,770,723.8), new cjs.Rectangle(-385,-153.3,770,721.5), new cjs.Rectangle(-385,-116.6,770,719.2), new cjs.Rectangle(-385,-80,770,716.9), new cjs.Rectangle(-385,-43.3,770,714.6), new cjs.Rectangle(-385,-6.6,770,712.3), new cjs.Rectangle(-385,30,770,710), new cjs.Rectangle(-385,66.7,770,673.4), new cjs.Rectangle(-385,103.4,770,636.7), new cjs.Rectangle(-385,140,770,600), new cjs.Rectangle(-385,176.7,770,563.4), new cjs.Rectangle(-385,213.4,770,526.7), new cjs.Rectangle(-385,250,770,490), new cjs.Rectangle(-385,286.7,770,453.4), new cjs.Rectangle(-385,323.4,770,416.7), rect=new cjs.Rectangle(-385,360,770,380), rect, rect, rect, rect, rect];


(lib.eyes_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens16_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens18_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens21_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens10_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens17_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens22_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens14_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens22_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens22_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens21_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens17_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens10_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens21_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens10_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens17_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens17_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens12_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens12_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyes_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.eyebrows_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new16_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new16_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new4_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new16_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new5_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new13_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new13_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new5_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new13_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new4_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new9_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new13_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new4_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new15_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new3_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new4_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new2_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new2_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new2_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new2_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new1_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new1_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new1_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_new1_img();
	this.instance.setTransform(41.7,-50.2,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_eyebrows_1_mc();
	this.check_mc.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5ODIAA8GIHzAAIAAcGg");
	this.shape.setTransform(0,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.3,162.7,162.7);
p.frameBounds = [rect];


(lib.comics_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(3));

	// animation
	this.instance = new lib.text7_mc();
	this.instance.setTransform(4.4,214.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-139.6},14).to({y:-141.6},2).to({y:-139.6},2).wait(1));

	// animation
	this.instance_1 = new lib.text6_mc();
	this.instance_1.setTransform(4.4,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:6.7,y:-347.3},14).to({y:-349.3},2).to({y:-347.3},2).wait(1));

	// animation
	this.instance_2 = new lib.text5_mc();
	this.instance_2.setTransform(4,-196.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:6.4,y:-500.3,alpha:0.012},14).to({_off:true},1).wait(4));

	// animation
	this.instance_3 = new lib.text4_mc();
	this.instance_3.setTransform(3.4,-349.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:5.7,y:-653.3,alpha:0.012},14).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.6,-423.7,387,768);
p.frameBounds = [rect, new cjs.Rectangle(-189.5,-445.4,387,764.4), new cjs.Rectangle(-189.3,-467.1,387,760.9), new cjs.Rectangle(-189.1,-488.7,387,757.2), new cjs.Rectangle(-189,-510.4,387,753.6), new cjs.Rectangle(-188.8,-532.1,387,750.1), new cjs.Rectangle(-188.6,-553.8,387,746.5), new cjs.Rectangle(-188.6,-575.5,387.2,742.9), new cjs.Rectangle(-188.6,-597.2,387.4,739.3), new cjs.Rectangle(-188.6,-618.9,387.5,735.7), new cjs.Rectangle(-188.6,-640.6,387.7,732.1), new cjs.Rectangle(-188.6,-662.3,387.9,728.5), new cjs.Rectangle(-188.6,-683.9,388,724.9), new cjs.Rectangle(-188.6,-705.6,388.2,721.3), new cjs.Rectangle(-188.6,-727.3,388.4,717.7), new cjs.Rectangle(-188.6,-422.3,388.4,411.7), new cjs.Rectangle(-188.6,-423.3,388.4,411.7), new cjs.Rectangle(-188.6,-422.3,388.4,411.7), new cjs.Rectangle(-188.6,-421.3,388.4,411.7)];


(lib.comics_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(3));

	// animation
	this.instance = new lib.text6_mc();
	this.instance.setTransform(4.4,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-43.7},14).to({y:-45.7},2).to({y:-43.7},2).wait(1));

	// animation
	this.instance_1 = new lib.text5_mc();
	this.instance_1.setTransform(4,-43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-196.6},14).to({y:-198.6},2).to({y:-196.6},2).wait(1));

	// animation
	this.instance_2 = new lib.text4_mc();
	this.instance_2.setTransform(3.4,-196.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-349.7},14).to({y:-351.7},2).to({y:-349.7},2).wait(1));

	// animation
	this.instance_3 = new lib.text3_mc();
	this.instance_3.setTransform(2,-349);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-502,alpha:0.012},14).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191,-423,388.4,656.3);
p.frameBounds = [rect, new cjs.Rectangle(-191,-433.9,388.4,652.8), new cjs.Rectangle(-191,-444.8,388.4,649.2), new cjs.Rectangle(-191,-455.8,388.4,645.6), new cjs.Rectangle(-191,-466.7,388.4,642), new cjs.Rectangle(-191,-477.6,388.4,638.5), new cjs.Rectangle(-191,-488.5,388.4,634.9), new cjs.Rectangle(-191,-499.5,388.4,631.3), new cjs.Rectangle(-191,-510.4,388.4,627.8), new cjs.Rectangle(-191,-521.3,388.4,624.2), new cjs.Rectangle(-191,-532.3,388.4,620.6), new cjs.Rectangle(-191,-543.2,388.4,617), new cjs.Rectangle(-191,-554.1,388.4,613.4), new cjs.Rectangle(-191,-565,388.4,609.8), new cjs.Rectangle(-191,-576,388.4,606.3), new cjs.Rectangle(-189.6,-424.7,387,454), new cjs.Rectangle(-189.6,-425.7,387,454), new cjs.Rectangle(-189.6,-424.7,387,454), new cjs.Rectangle(-189.6,-423.7,387,454)];


(lib.comics_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(3));

	// animation
	this.instance = new lib.text5_mc();
	this.instance.setTransform(4,158.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-43.6},14).to({y:-45.6},2).to({y:-43.6},2).wait(1));

	// animation
	this.instance_1 = new lib.text3_mc();
	this.instance_1.setTransform(2,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-349},14).to({y:-351},2).to({y:-349},2).wait(1));

	// animation
	this.instance_2 = new lib.text4_mc();
	this.instance_2.setTransform(3.4,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-196.7},14).to({y:-198.7},2).to({y:-196.7},2).wait(1));

	// animation
	this.instance_3 = new lib.text2_mc();
	this.instance_3.setTransform(0,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-502.9,alpha:0.012},14).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-424,390,656.3);
p.frameBounds = [rect, new cjs.Rectangle(-193,-434.9,390,652.8), new cjs.Rectangle(-193,-445.8,390,649.3), new cjs.Rectangle(-193,-456.7,390,645.8), new cjs.Rectangle(-193,-467.7,390,642.3), new cjs.Rectangle(-193,-478.6,390,638.8), new cjs.Rectangle(-193,-489.5,390,635.3), new cjs.Rectangle(-193,-500.5,390,631.8), new cjs.Rectangle(-193,-511.4,390,628.3), new cjs.Rectangle(-193,-522.3,390,624.8), new cjs.Rectangle(-193,-533.2,390,621.3), new cjs.Rectangle(-193,-544.2,390,617.8), new cjs.Rectangle(-193,-555.1,390,614.3), new cjs.Rectangle(-193,-566,390,610.8), new cjs.Rectangle(-193,-576.9,390,607.3), new cjs.Rectangle(-191,-424,388,453.4), new cjs.Rectangle(-191,-425,388,453.4), new cjs.Rectangle(-191,-424,388,453.4), new cjs.Rectangle(-191,-423,388,453.4)];


(lib.comics_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_46 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(34).call(this.frame_46).wait(3));

	// animation
	this.instance = new lib.text3_mc();
	this.instance.setTransform(2,157.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1},10).to({y:-1},2).to({y:1},2).wait(15).to({y:-196},15).to({y:-198},2).to({y:-196},2).wait(1));

	// animation
	this.instance_1 = new lib.text4_mc();
	this.instance_1.setTransform(3.4,159.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({y:-43.7},15).to({y:-45.7},2).to({y:-43.7},2).wait(1));

	// animation
	this.instance_2 = new lib.text2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-153},10).to({y:-155},2).to({y:-153},2).wait(15).to({y:-350},15).to({y:-352},2).to({y:-350},2).wait(1));

	// animation
	this.instance_3 = new lib.text1_mc();
	this.instance_3.setTransform(0,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-307},10).to({y:-309},2).to({y:-307},2).wait(15).to({y:-504,alpha:0.012},15).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-228,388,459.9);
p.frameBounds = [rect, new cjs.Rectangle(-193,-243.3,388,459.5), new cjs.Rectangle(-193,-258.6,388,459.1), new cjs.Rectangle(-193,-273.9,388,458.7), new cjs.Rectangle(-193,-289.2,388,458.3), new cjs.Rectangle(-193,-304.5,388,458), new cjs.Rectangle(-193,-319.8,388,457.6), new cjs.Rectangle(-193,-335.1,388,457.2), new cjs.Rectangle(-193,-350.4,388,456.8), new cjs.Rectangle(-193,-365.7,388,456.4), new cjs.Rectangle(-193,-381,388,456), new cjs.Rectangle(-193,-382,388,456), new cjs.Rectangle(-193,-383,388,456), new cjs.Rectangle(-193,-382,388,456), rect=new cjs.Rectangle(-193,-381,388,456), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-193,-381,389.4,614.3), new cjs.Rectangle(-193,-394.1,389.4,613.8), new cjs.Rectangle(-193,-407.2,389.4,613.5), new cjs.Rectangle(-193,-420.4,389.4,613.1), new cjs.Rectangle(-193,-433.5,389.4,612.7), new cjs.Rectangle(-193,-446.6,389.4,612.3), new cjs.Rectangle(-193,-459.8,389.4,611.9), new cjs.Rectangle(-193,-472.9,389.4,611.5), new cjs.Rectangle(-193,-486,389.4,611.1), new cjs.Rectangle(-193,-499.2,389.4,610.7), new cjs.Rectangle(-193,-512.3,389.4,610.3), new cjs.Rectangle(-193,-525.4,389.4,609.9), new cjs.Rectangle(-193,-538.6,389.4,609.5), new cjs.Rectangle(-193,-551.7,389.4,609.1), new cjs.Rectangle(-193,-564.8,389.4,608.7), new cjs.Rectangle(-193,-578,389.4,608.3), new cjs.Rectangle(-193,-425,389.4,454.3), new cjs.Rectangle(-193,-426,389.4,454.3), new cjs.Rectangle(-193,-425,389.4,454.3), new cjs.Rectangle(-193,-424,389.4,454.3)];


(lib.comics_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_42 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.6);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(30).call(this.frame_42).wait(3));

	// animation
	this.instance = new lib.text2_mc();
	this.instance.setTransform(0,156);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:0},11).to({y:-2},2).to({y:0},2).wait(1));

	// animation
	this.instance_1 = new lib.text1_mc();
	this.instance_1.setTransform(0,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0},10).to({y:-2},2).to({y:0},2).wait(15).to({y:-154},11).to({y:-156},2).to({y:-154},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,83,386,148);
p.frameBounds = [rect, new cjs.Rectangle(-193,67.3,386,148), new cjs.Rectangle(-193,51.6,386,148), new cjs.Rectangle(-193,35.9,386,148), new cjs.Rectangle(-193,20.2,386,148), new cjs.Rectangle(-193,4.5,386,148), new cjs.Rectangle(-193,-11.2,386,148), new cjs.Rectangle(-193,-26.9,386,148), new cjs.Rectangle(-193,-42.6,386,148), new cjs.Rectangle(-193,-58.3,386,148), new cjs.Rectangle(-193,-74,386,148), new cjs.Rectangle(-193,-75,386,148), new cjs.Rectangle(-193,-76,386,148), new cjs.Rectangle(-193,-75,386,148), rect=new cjs.Rectangle(-193,-74,386,148), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-193,-74,386,304), new cjs.Rectangle(-193,-88,386,303.8), new cjs.Rectangle(-193,-102,386,303.6), new cjs.Rectangle(-193,-116,386,303.4), new cjs.Rectangle(-193,-130,386,303.3), new cjs.Rectangle(-193,-144,386,303.1), new cjs.Rectangle(-193,-158,386,302.9), new cjs.Rectangle(-193,-172,386,302.7), new cjs.Rectangle(-193,-186,386,302.6), new cjs.Rectangle(-193,-200,386,302.4), new cjs.Rectangle(-193,-214,386,302.2), new cjs.Rectangle(-193,-228,386,302), new cjs.Rectangle(-193,-229,386,302), new cjs.Rectangle(-193,-230,386,302), new cjs.Rectangle(-193,-229,386,302), new cjs.Rectangle(-193,-228,386,302)];


(lib.closet_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(-180,-120);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-180,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessories_0}]},3).to({state:[{t:this.earrings_0}]},1).wait(1));

	// options
	this.dress_3 = new lib.dress_3_4_mc();
	this.dress_3.setTransform(-80,-188);

	this.dress_2 = new lib.dress_2_4_mc();
	this.dress_2.setTransform(80,-188);

	this.dress_5 = new lib.dress_5_4_mc();
	this.dress_5.setTransform(-80,-188);

	this.dress_4 = new lib.dress_4_4_mc();
	this.dress_4.setTransform(80,-188);

	this.dress_1 = new lib.dress_1_4_mc();
	this.dress_1.setTransform(80,-188);

	this.dress_6 = new lib.dress_6_4_mc();
	this.dress_6.setTransform(-80,-188);

	this.accessories_6 = new lib.accessories_6_4_mc();
	this.accessories_6.setTransform(0,72);

	this.accessories_5 = new lib.accessories_5_4_mc();
	this.accessories_5.setTransform(-110,77);

	this.accessories_4 = new lib.accessories_4_4_mc();
	this.accessories_4.setTransform(106,75);

	this.accessories_3 = new lib.accessories_3_4_mc();
	this.accessories_3.setTransform(0,-65);

	this.accessories_2 = new lib.accessories_2_4_mc();
	this.accessories_2.setTransform(110,-65);

	this.accessories_1 = new lib.accessories_1_4_mc();
	this.accessories_1.setTransform(-110,-65);

	this.earrings_6 = new lib.earrings_6_4_mc();
	this.earrings_6.setTransform(110,25);

	this.earrings_5 = new lib.earrings_5_4_mc();
	this.earrings_5.setTransform(0,25);

	this.earrings_4 = new lib.earrings_4_4_mc();
	this.earrings_4.setTransform(-110,25);

	this.earrings_3 = new lib.earrings_3_4_mc();
	this.earrings_3.setTransform(-110,-115);

	this.earrings_2 = new lib.earrings_2_4_mc();
	this.earrings_2.setTransform(0,-115);

	this.earrings_1 = new lib.earrings_1_4_mc();
	this.earrings_1.setTransform(110,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2},{t:this.dress_3}]}).to({state:[{t:this.dress_4},{t:this.dress_5}]},1).to({state:[{t:this.dress_6},{t:this.dress_1}]},1).to({state:[{t:this.accessories_1},{t:this.accessories_2},{t:this.accessories_3},{t:this.accessories_4},{t:this.accessories_5},{t:this.accessories_6}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();
	this.instance.setTransform(0,-180);

	this.instance_1 = new lib.wardrobe_3_3_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.wardrobe_3_3_mc();
	this.instance_2.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-195,630,259.3);
p.frameBounds = [rect, new cjs.Rectangle(-315,-195,630,303.5), new cjs.Rectangle(-315,-195,630,287.5), new cjs.Rectangle(-315,-144,630,274), new cjs.Rectangle(-315,-200,630,330)];


(lib.closet_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(-180,-120);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-180,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessories_0}]},3).to({state:[{t:this.earrings_0}]},1).wait(1));

	// options
	this.dress_6 = new lib.dress_6_3_mc();
	this.dress_6.setTransform(80,-188);

	this.dress_5 = new lib.dress_5_3_mc();
	this.dress_5.setTransform(-80,-188);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(80,-188);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(-80,-188);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(80,-188);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(-80,-188);

	this.accessories_2 = new lib.accessories_2_3_mc();
	this.accessories_2.setTransform(105,-80);

	this.accessories_6 = new lib.accessories_6_3_mc();
	this.accessories_6.setTransform(105,65);

	this.accessories_5 = new lib.accessories_5_3_mc();
	this.accessories_5.setTransform(5,56);

	this.accessories_4 = new lib.accessories_4_3_mc();
	this.accessories_4.setTransform(-95,60);

	this.accessories_3 = new lib.accessories_3_3_mc();
	this.accessories_3.setTransform(0,-76);

	this.accessories_1 = new lib.accessories_1_3_mc();
	this.accessories_1.setTransform(-105,-70);

	this.earrings_6 = new lib.earrings_6_3_mc();
	this.earrings_6.setTransform(110,30);

	this.earrings_5 = new lib.earrings_5_3_mc();
	this.earrings_5.setTransform(0,30);

	this.earrings_4 = new lib.earrings_4_3_mc();
	this.earrings_4.setTransform(-110,30);

	this.earrings_3 = new lib.earrings_3_3_mc();
	this.earrings_3.setTransform(110,-115);

	this.earrings_2 = new lib.earrings_2_3_mc();
	this.earrings_2.setTransform(0,-115);

	this.earrings_1 = new lib.earrings_1_3_mc();
	this.earrings_1.setTransform(-110,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_5},{t:this.dress_6}]}).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_1},{t:this.dress_2}]},1).to({state:[{t:this.accessories_1},{t:this.accessories_3},{t:this.accessories_4},{t:this.accessories_5},{t:this.accessories_6},{t:this.accessories_2}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();
	this.instance.setTransform(0,-180);

	this.instance_1 = new lib.wardrobe_3_3_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.wardrobe_3_3_mc();
	this.instance_2.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-197.8,630,343.9);
p.frameBounds = [rect, new cjs.Rectangle(-315,-197.5,630,471), new cjs.Rectangle(-315,-199.5,630,294.4), new cjs.Rectangle(-315,-144,630,274), new cjs.Rectangle(-315,-198.5,630,328.6)];


(lib.closet_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(-180,-120);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-180,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessories_0}]},3).to({state:[{t:this.earrings_0}]},1).wait(1));

	// options
	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(80,-188);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-80,-188);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(80,-188);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-80,-188);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(80,-188);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-80,-188);

	this.accessories_4 = new lib.accessories_4_2_mc();
	this.accessories_4.setTransform(-99,60);

	this.accessories_5 = new lib.accessories_5_2_mc();
	this.accessories_5.setTransform(1,54);

	this.accessories_2 = new lib.accessories_2_2_mc();
	this.accessories_2.setTransform(-90,-70);

	this.accessories_1 = new lib.accessories_1_2_mc();
	this.accessories_1.setTransform(20,-60);

	this.accessories_6 = new lib.accessories_6_2_mc();
	this.accessories_6.setTransform(101,60);

	this.accessories_3 = new lib.accessories_3_2_mc();
	this.accessories_3.setTransform(109,-65);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(0,25);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(110,25);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(-110,25);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(-110,-115);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(0,-115);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(110,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_5},{t:this.dress_6}]}).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_1},{t:this.dress_2}]},1).to({state:[{t:this.accessories_3},{t:this.accessories_6},{t:this.accessories_1},{t:this.accessories_2},{t:this.accessories_5},{t:this.accessories_4}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();
	this.instance.setTransform(0,-180);

	this.instance_1 = new lib.wardrobe_3_3_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.wardrobe_3_3_mc();
	this.instance_2.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-197.5,630,340.8);
p.frameBounds = [rect, new cjs.Rectangle(-315,-282.3,630,426.7), new cjs.Rectangle(-315,-289.8,630,403.2), new cjs.Rectangle(-315,-144,630,274), new cjs.Rectangle(-315,-206.1,630,336.2)];


(lib.closet_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(-180,-120);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-180,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessories_0}]},3).to({state:[{t:this.earrings_0}]},1).wait(1));

	// options
	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(80,-188);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-80,-188);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(80,-188);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-80,-188);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(80,-188);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-80,-188);

	this.accessories_1 = new lib.accessories_1_1_mc();
	this.accessories_1.setTransform(-90,70);

	this.accessories_4 = new lib.accessories_4_1_mc();
	this.accessories_4.setTransform(0,55);

	this.accessories_6 = new lib.accessories_6_1_mc();
	this.accessories_6.setTransform(100,63);

	this.accessories_5 = new lib.accessories_5_1_mc();
	this.accessories_5.setTransform(-90,-65);

	this.accessories_2 = new lib.accessories_2_1_mc();
	this.accessories_2.setTransform(0,-70);

	this.accessories_3 = new lib.accessories_3_1_mc();
	this.accessories_3.setTransform(100,-67.5);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(110,25);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(-110,25);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(0,25);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(-110,-115);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(0,-115);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(110,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_5},{t:this.dress_2}]}).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_1},{t:this.dress_6}]},1).to({state:[{t:this.accessories_3},{t:this.accessories_2},{t:this.accessories_5},{t:this.accessories_6},{t:this.accessories_4},{t:this.accessories_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_3_mc();
	this.instance.setTransform(0,-180);

	this.instance_1 = new lib.wardrobe_3_3_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.wardrobe_3_3_mc();
	this.instance_2.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-196.2,630,367.4);
p.frameBounds = [rect, new cjs.Rectangle(-315,-200.4,630,366.9), new cjs.Rectangle(-315,-200.5,630,285.8), new cjs.Rectangle(-315,-144,630,274), new cjs.Rectangle(-315,-207.5,630,337.5)];


(lib.closet_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_4 = new lib.hairstyle_4_4_mc();
	this.hair_4.setTransform(0,-130);

	this.hair_2 = new lib.hairstyle_2_4_mc();
	this.hair_2.setTransform(0,130);

	this.hair_6 = new lib.hairstyle_6_4_mc();
	this.hair_6.setTransform(0,130);

	this.hair_3 = new lib.hairstyle_3_4_mc();
	this.hair_3.setTransform(0,-130);

	this.hair_1 = new lib.hairstyle_1_4_mc();
	this.hair_1.setTransform(0,130);

	this.hair_5 = new lib.hairstyle_5_4_mc();
	this.hair_5.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_4}]}).to({state:[{t:this.hair_3},{t:this.hair_6}]},1).to({state:[{t:this.hair_5},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect, rect, rect];


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(0,-130);

	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(0,130);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(0,130);

	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(0,-130);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(0,130);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_6}]},1).to({state:[{t:this.hair_5},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect, rect, rect];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-130);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,130);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,130);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-130);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,130);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_5}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_6},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect, rect, rect];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,130);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-130);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,130);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,-130);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,130);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_5}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_6},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect, rect, rect];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(360,-205);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(360,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blush_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.eyes_6 = new lib.eyes_6_4_mc();
	this.eyes_6.setTransform(250,70);

	this.eyes_5 = new lib.eyes_5_4_mc();
	this.eyes_5.setTransform(300,-15);

	this.eyes_4 = new lib.eyes_4_4_mc();
	this.eyes_4.setTransform(310,-110);

	this.eyes_3 = new lib.eyes_3_4_mc();
	this.eyes_3.setTransform(-250,70);

	this.eyes_2 = new lib.eyes_2_4_mc();
	this.eyes_2.setTransform(-300,-15);

	this.eyes_1 = new lib.eyes_1_4_mc();
	this.eyes_1.setTransform(-310,-110);

	this.blush_6 = new lib.blush_6_4_mc();
	this.blush_6.setTransform(245,65);

	this.blush_5 = new lib.blush_5_4_mc();
	this.blush_5.setTransform(300,-10);

	this.blush_4 = new lib.blush_4_4_mc();
	this.blush_4.setTransform(310,-100);

	this.blush_3 = new lib.blush_3_4_mc();
	this.blush_3.setTransform(-245,65);

	this.blush_2 = new lib.blush_2_4_mc();
	this.blush_2.setTransform(-300,-10);

	this.blush_1 = new lib.blush_1_4_mc();
	this.blush_1.setTransform(-310,-100);

	this.shadows_6 = new lib.shadows_6_4_mc();
	this.shadows_6.setTransform(255,60);

	this.shadows_5 = new lib.shadows_5_4_mc();
	this.shadows_5.setTransform(300,-30);

	this.shadows_4 = new lib.shadows_4_4_mc();
	this.shadows_4.setTransform(310,-120);

	this.shadows_3 = new lib.shadows_3_4_mc();
	this.shadows_3.setTransform(-255,60);

	this.shadows_2 = new lib.shadows_2_4_mc();
	this.shadows_2.setTransform(-300,-30);

	this.shadows_1 = new lib.shadows_1_4_mc();
	this.shadows_1.setTransform(-310,-120);

	this.lips_6 = new lib.lips_6_4_mc();
	this.lips_6.setTransform(250,50);

	this.lips_5 = new lib.lips_5_4_mc();
	this.lips_5.setTransform(325,-20);

	this.lips_4 = new lib.lips_4_4_mc();
	this.lips_4.setTransform(275,-110);

	this.lips_3 = new lib.lips_3_4_mc();
	this.lips_3.setTransform(-250,50);

	this.lips_2 = new lib.lips_2_4_mc();
	this.lips_2.setTransform(-325,-20);

	this.lips_1 = new lib.lips_1_4_mc();
	this.lips_1.setTransform(-275,-110);

	this.eyebrows_6 = new lib.eyebrows_6_4_mc();
	this.eyebrows_6.setTransform(250,70,1,1,0,0,180);

	this.eyebrows_5 = new lib.eyebrows_5_4_mc();
	this.eyebrows_5.setTransform(290,0,1,1,0,0,180);

	this.eyebrows_4 = new lib.eyebrows_4_4_mc();
	this.eyebrows_4.setTransform(310,-90,1,1,0,0,180);

	this.eyebrows_3 = new lib.eyebrows_3_4_mc();
	this.eyebrows_3.setTransform(-250,70);

	this.eyebrows_2 = new lib.eyebrows_2_4_mc();
	this.eyebrows_2.setTransform(-290,0);

	this.eyebrows_1 = new lib.eyebrows_1_4_mc();
	this.eyebrows_1.setTransform(-310,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect, new cjs.Rectangle(-370,-235,760,350), new cjs.Rectangle(-380,-235,770,350), new cjs.Rectangle(-360,-185,720,310), new cjs.Rectangle(-391.3,-171.3,782.7,322.7)];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(360,-205);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(360,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blush_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.eyes_6 = new lib.eyes_6_3_mc();
	this.eyes_6.setTransform(250,70);

	this.eyes_5 = new lib.eyes_5_3_mc();
	this.eyes_5.setTransform(300,-15);

	this.eyes_4 = new lib.eyes_4_3_mc();
	this.eyes_4.setTransform(310,-110);

	this.eyes_3 = new lib.eyes_3_3_mc();
	this.eyes_3.setTransform(-250,70);

	this.eyes_2 = new lib.eyes_2_3_mc();
	this.eyes_2.setTransform(-300,-15);

	this.eyes_1 = new lib.eyes_1_3_mc();
	this.eyes_1.setTransform(-310,-110);

	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(245,65);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(300,-10);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(310,-100);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(-245,65);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(-300,-10);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-310,-100);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(255,60);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(300,-30);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(310,-120);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(-255,60);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(-300,-30);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-310,-120);

	this.lips_6 = new lib.lips_6_3_mc();
	this.lips_6.setTransform(250,70);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(325,-10);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(275,-100);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(-250,70);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(-325,-10);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(-275,-100);

	this.eyebrows_6 = new lib.eyebrows_6_3_mc();
	this.eyebrows_6.setTransform(250,70,1,1,0,0,180);

	this.eyebrows_5 = new lib.eyebrows_5_3_mc();
	this.eyebrows_5.setTransform(290,0,1,1,0,0,180);

	this.eyebrows_4 = new lib.eyebrows_4_3_mc();
	this.eyebrows_4.setTransform(310,-90,1,1,0,0,180);

	this.eyebrows_3 = new lib.eyebrows_3_3_mc();
	this.eyebrows_3.setTransform(-250,70);

	this.eyebrows_2 = new lib.eyebrows_2_3_mc();
	this.eyebrows_2.setTransform(-290,0);

	this.eyebrows_1 = new lib.eyebrows_1_3_mc();
	this.eyebrows_1.setTransform(-310,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect, new cjs.Rectangle(-370,-235,760,350), new cjs.Rectangle(-380,-235,770,350), new cjs.Rectangle(-360,-175,720,320), new cjs.Rectangle(-391.3,-171.3,782.7,322.7)];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(360,-205);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(360,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blush_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(250,70);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(300,-15);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(310,-110);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-250,70);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-300,-15);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(-310,-110);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(245,65);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(300,-10);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(310,-100);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-245,65);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-300,-10);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-310,-100);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(255,60);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(300,-30);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(310,-120);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-255,60);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-300,-30);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-310,-120);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(250,70);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(325,-10);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(275,-100);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-250,70);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-325,-10);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-275,-100);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(250,70,1,1,0,0,180);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(290,0,1,1,0,0,180);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(310,-90,1,1,0,0,180);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(-250,70);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(-290,0);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(-310,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect, new cjs.Rectangle(-370,-235,760,350), new cjs.Rectangle(-380,-235,770,350), new cjs.Rectangle(-360,-175,720,320), new cjs.Rectangle(-391.3,-171.3,782.7,322.7)];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(360,-205);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(360,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blush_0}]},1).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(240,70);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(300,-15);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(310,-110);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-250,70);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-300,-15);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(-310,-110);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(245,65);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(300,-10);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(310,-100);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-245,65);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-300,-10);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-310,-100);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(255,60);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(300,-30);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(310,-120);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-255,60);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-300,-30);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-310,-120);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(250,70);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(325,-10);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(275,-95);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-250,70);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-325,-10);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-275,-100);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(250,70,1,1,0,0,180);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(290,0,1,1,0,0,180);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(310,-90,1,1,0,0,180);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-250,70);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-290,0);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-310,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect, new cjs.Rectangle(-370,-235,760,350), new cjs.Rectangle(-380,-235,770,350), new cjs.Rectangle(-360,-175,720,320), new cjs.Rectangle(-391.3,-171.3,782.7,322.7)];


(lib.bodyDressupPanel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_3_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-195,630,259.3);
p.frameBounds = [rect];


(lib.bodyDressupPanel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect];


(lib.bodyDressupPanel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect];


(lib.bodyDressupPanel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-197.8,630,343.9);
p.frameBounds = [rect];


(lib.bodyDressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect];


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-197.5,630,340.8);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-196.2,630,367.4);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-285,310,570);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-160,720,280);
p.frameBounds = [rect];


(lib.animation_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// animation
	this.instance = new lib.hint_filter_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},10).wait(70).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,3200,600);
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


(lib.snowflake_flashing_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.snowflake_flashing_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.radio_button_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button_0
	this.button_0_mc = new lib.radio_button_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.button_0_mc).wait(1));

	// button_1
	this.button_1_mc = new lib.radio_button_1_1_mc();
	this.button_1_mc.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.button_1_mc).wait(1));

	// button_2
	this.button_2_mc = new lib.radio_button_1_2_mc();
	this.button_2_mc.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get(this.button_2_mc).wait(1));

	// button_3
	this.button_3_mc = new lib.radio_button_1_3_mc();
	this.button_3_mc.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.button_3_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,160);
p.frameBounds = [rect];


(lib.radio_button_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		/*
		
		*/
		var container_mc = this.body_mc;
		container_mc.gotoAndStop(0);
		container_mc.mouseEnabled = true;
		container_mc.mouseChildren = true;
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _totalButtons_num = Number(container_mc.numChildren);
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			_updateValueFunc(value_num);
		}
		/*
		
		*/
		this.getValueFunc = function()
		{
			return _getValueFunc();
		}
		/*
		
		*/
		function _updateButtonsFunc()
		{
			/*
			
			*/
			var button_mc;
			var i = 0;
			/*
			
			*/
			while(i < _totalButtons_num)
			{
				/*
				
				*/
				if(container_mc["button_" + i + "_mc"])
				{
					/*
					
					*/
					button_mc = container_mc["button_" + i + "_mc"];
					button_mc.gotoAndStop(0);
					button_mc.name = "button_" + i + "_mc";
					/*
					
					*/
					if(i == _value_num)
					{
						/*
						
						*/
						button_mc.mouseEnabled = false;
						button_mc.mouseChildren = false;
						button_mc.cursor = "default";
						button_mc.removeEventListener("click", _onClickButtonMcFunc, false);
						/*
						
						*/
						if(button_mc.check_mc)
						{
							button_mc.check_mc.gotoAndStop(1);
						}
					}
					else
					{
						/*
						
						*/
						button_mc.mouseEnabled = true;
						button_mc.mouseChildren = true;
						button_mc.cursor = "pointer";
						button_mc.addEventListener("click", _onClickButtonMcFunc, false);
						/*
						
						*/
						if(button_mc.check_mc)
						{
							button_mc.check_mc.gotoAndStop(0);
						}
					}
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		function _onClickButtonMcFunc(event)
		{
			var current_mc = event.currentTarget;
			var temp_arr = current_mc.name.split("_");
			_updateValueFunc(temp_arr[1]);
		}
		/*
		 
		*/
		function _updateValueFunc(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			if(value_num < 0)
			{
				value_num = 0;
			}
			else if(value_num >= _totalButtons_num)
			{
				value_num = Number(_totalButtons_num - 1);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateButtonsFunc();
			/*
			
			*/
			var user_event = new createjs.Event("change_radio_button");
			user_event.numberValue = _value_num;
			_that.dispatchEvent(user_event);
		}
		/*
		
		*/
		function _getValueFunc()
		{
			return _value_num;
		}
		/*
		
		*/
		_updateButtonsFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.radio_button_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,160);
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


(lib.flash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.flash_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.flash_6_mc();
	this.instance_1.setTransform(80,-80,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.flash_6_mc();
	this.instance_2.setTransform(-80,80,0.167,0.167);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:80.1},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:80,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_3 = new lib.flash_6_mc();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.602},0).to({scaleX:0.87,scaleY:0.87,rotation:90},3).to({scaleX:0.33,scaleY:0.33,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_4 = new lib.flash_2_mc();
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.801},0).to({scaleX:1,scaleY:1,alpha:0.012},13).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.flash_4_mc();
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:1},0).to({alpha:0.012},13).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect];


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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_4_mc();
	this.instance.setTransform(0,0,0.842,0.842,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75.8,160,151.6);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.889,0.889,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,0,15,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-85.7,171.4,171.4);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_4_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75.8,160,151.6);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.1,-81.1,162.2,162.2);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,504.5,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.shadow_large_buttons_mc();
	this.instance.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.forward_1_mc();
	this.instance_1.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();
	this.instance_2.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// animation
	this.animation_mc = new lib.animation_for_forward_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.02)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect];


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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(135.5,655.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(660,510,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(50,650,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(50,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc},{t:this.instance}]}).wait(1));

	// title
	this.instance_1 = new lib.title_mc();
	this.instance_1.setTransform(320,510);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(-200,400);
	this.instance_2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_4_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9);
p.frameBounds = [rect];


(lib.subject_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("click_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_94 = function() {
		try
		{
			app.addSoundFunc("click_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(65).call(this.frame_94).wait(26));

	// animation
	this.instance = new lib.quiz_hint_1_mc();
	this.instance.setTransform(429,694.5,1,1,-30);
	this.instance._off = true;

	this.instance_1 = new lib.quiz_hint_2_mc();
	this.instance_1.setTransform(380,498.5,1,1,-30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:380,y:498.5},23).wait(5).to({_off:true},1).wait(64).to({_off:false,x:700,y:293.5},1).to({y:731.5},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},1).wait(11).to({x:700,y:293.5},53).to({_off:true},1).wait(25));

	// animation
	this.instance_2 = new lib.quiz_hint_5_mc();
	this.instance_2.setTransform(327.5,442.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(3).to({alpha:0.012},3).to({_off:true},1).wait(79));

	// animation
	this.instance_3 = new lib.quiz_hint_4_mc();
	this.instance_3.setTransform(327.5,443.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).wait(5).to({alpha:0.012},3).to({_off:true},1).wait(79));

	// animation
	this.instance_4 = new lib.quiz_hint_3_mc();
	this.instance_4.setTransform(327.5,443.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(7).to({alpha:0.012},3).to({_off:true},1).wait(79));

	// animation
	this.instance_5 = new lib.quiz_hint_8_mc();
	this.instance_5.setTransform(320,415);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({x:640,y:210},53).wait(26));

	// animation
	this.instance_6 = new lib.quiz_hint_6_mc();
	this.instance_6.setTransform(640,210);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).wait(53).to({alpha:0.012},6).to({_off:true},1).wait(19));

	// animation
	this.instance_7 = new lib.quiz_hint_10_mc();
	this.instance_7.setTransform(640,415);

	this.instance_8 = new lib.quiz_hint_9_mc();
	this.instance_8.setTransform(480,415);

	this.instance_9 = new lib.quiz_hint_8_mc();
	this.instance_9.setTransform(320,415);

	this.instance_10 = new lib.quiz_hint_7_mc();
	this.instance_10.setTransform(160,415);

	this.instance_11 = new lib.vic1_3_mc();
	this.instance_11.setTransform(480,210);

	this.instance_12 = new lib.vic1_2_mc();
	this.instance_12.setTransform(320,210);

	this.instance_13 = new lib.vic1_1_mc();
	this.instance_13.setTransform(160,210);

	this.instance_14 = new lib.quiz_hint_6_mc();
	this.instance_14.setTransform(640,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_8},{t:this.instance_7}]},40).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,130,640,365);
p.frameBounds = [rect, new cjs.Rectangle(80,130,640,688.3), new cjs.Rectangle(80,130,640,679.5), new cjs.Rectangle(80,130,640,671), new cjs.Rectangle(80,130,640,662.5), new cjs.Rectangle(80,130,640,653.9), new cjs.Rectangle(80,130,640,645.4), new cjs.Rectangle(80,130,640,636.9), new cjs.Rectangle(80,130,640,628.4), new cjs.Rectangle(80,130,640,619.9), new cjs.Rectangle(80,130,640,611.3), new cjs.Rectangle(80,130,640,602.8), new cjs.Rectangle(80,130,640,594.3), new cjs.Rectangle(80,130,640,585.8), new cjs.Rectangle(80,130,640,577.3), new cjs.Rectangle(80,130,640,568.8), new cjs.Rectangle(80,130,640,560.2), new cjs.Rectangle(80,130,640,551.7), new cjs.Rectangle(80,130,640,543.2), new cjs.Rectangle(80,130,640,534.7), new cjs.Rectangle(80,130,640,526.2), new cjs.Rectangle(80,130,640,517.6), new cjs.Rectangle(80,130,640,509.1), new cjs.Rectangle(80,130,640,500.6), new cjs.Rectangle(80,130,640,492.4), rect=new cjs.Rectangle(80,130,640,492.1), rect, rect, rect, new cjs.Rectangle(80,130,640,492.4), new cjs.Rectangle(80,130,640,491.9), rect=new cjs.Rectangle(80,130,640,491.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(80,130,640,491.9), new cjs.Rectangle(80,130,640,487.8), new cjs.Rectangle(80,130,640,483.9), new cjs.Rectangle(80,130,640,480.1), new cjs.Rectangle(80,130,640,476.2), new cjs.Rectangle(80,130,640,472.3), new cjs.Rectangle(80,130,640,468.5), new cjs.Rectangle(80,130,640,464.6), new cjs.Rectangle(80,130,640,460.7), new cjs.Rectangle(80,130,640,456.9), new cjs.Rectangle(80,130,640,453), new cjs.Rectangle(80,130,640,449.1), new cjs.Rectangle(80,130,640,445.3), new cjs.Rectangle(80,130,640,441.4), new cjs.Rectangle(80,130,640,437.5), new cjs.Rectangle(80,130,640,433.7), new cjs.Rectangle(80,130,640,429.8), new cjs.Rectangle(80,130,640,425.9), new cjs.Rectangle(80,130,640,422.1), new cjs.Rectangle(80,130,640,418.2), new cjs.Rectangle(80,130,640,414.3), new cjs.Rectangle(80,130,640,410.5), new cjs.Rectangle(80,130,640,406.5), new cjs.Rectangle(80,130,640,402.7), new cjs.Rectangle(80,130,640,398.8), new cjs.Rectangle(80,130,640,395), new cjs.Rectangle(80,130,640,391.1), new cjs.Rectangle(80,130,640,387.2), new cjs.Rectangle(80,130,640,383.4), new cjs.Rectangle(80,130,640,379.5), new cjs.Rectangle(80,130,640,375.6), new cjs.Rectangle(80,130,640,371.8), new cjs.Rectangle(80,130,640,367.9), rect=new cjs.Rectangle(80,130,640,365), rect, rect, rect, new cjs.Rectangle(80,130,642.8,365), new cjs.Rectangle(80,130,648.9,365), new cjs.Rectangle(80,130,654.9,365), new cjs.Rectangle(80,130,660.9,365), new cjs.Rectangle(80,130,667,365), new cjs.Rectangle(80,130,673,365), new cjs.Rectangle(80,130,679,365), new cjs.Rectangle(80,130,685.1,365), new cjs.Rectangle(80,130,691.1,365), new cjs.Rectangle(80,130,697.2,365), new cjs.Rectangle(80,130,703.2,365), new cjs.Rectangle(80,130,709.2,365), new cjs.Rectangle(80,130,715.3,365), new cjs.Rectangle(80,130,721.3,365), new cjs.Rectangle(80,130,727.3,365), new cjs.Rectangle(80,130,733.4,365), new cjs.Rectangle(80,130,739.8,365), new cjs.Rectangle(80,130,740,365), rect=new cjs.Rectangle(80,130,739.7,365), rect, rect, rect, new cjs.Rectangle(80,130,739.7,378.3), new cjs.Rectangle(80,130,739.7,396.5), new cjs.Rectangle(80,130,739.7,414.8), new cjs.Rectangle(80,130,739.7,433.1), new cjs.Rectangle(80,130,739.7,451.3), new cjs.Rectangle(80,130,739.7,469.6), new cjs.Rectangle(80,130,739.7,487.8), new cjs.Rectangle(80,130,739.7,506), new cjs.Rectangle(80,130,739.7,524.3), new cjs.Rectangle(80,130,739.7,542.5), new cjs.Rectangle(80,130,739.7,560.8), new cjs.Rectangle(80,130,739.7,579), new cjs.Rectangle(80,130,739.7,597.3), new cjs.Rectangle(80,130,739.7,615.5), new cjs.Rectangle(80,130,739.7,633.8), new cjs.Rectangle(80,130,739.7,652), new cjs.Rectangle(80,130,739.7,670.3), new cjs.Rectangle(80,130,739.7,688.5), new cjs.Rectangle(80,130,739.7,706.8), new cjs.Rectangle(80,130,740,725.3)];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();
	this.heroes_mc.setTransform(400,343.4,1,1,0,0,0,400,343.4);

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,1200,736.9);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7,location_9:8});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.frame_7_mc = new lib.frame_locations_7_mc();

	this.frame_8_mc = new lib.frame_locations_8_mc();

	this.frame_9_mc = new lib.frame_locations_9_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-190,770,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-110,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-47,280,87);
p.frameBounds = [rect];


(lib.filters_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hint
	this.instance = new lib.animation_hint_filter_mc();
	this.instance.setTransform(-105,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// animation
	this.instance_1 = new lib.filters_body_open_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.801},19).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.5,-164.5,239.5,189.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_container_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.exit_mc = new lib.filters_exit_mc();
	this.exit_mc.setTransform(0,-145);

	this.open_mc = new lib.filters_open_mc();
	this.open_mc.setTransform(0,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.open_mc},{t:this.exit_mc}]}).wait(1));

	// title
	this.instance = new lib.corner_filters_mc();
	this.instance.setTransform(118,-58,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// filters
	this.filters_mc = new lib.radio_button_1_mc();
	this.filters_mc.setTransform(-120,-65);

	this.timeline.addTween(cjs.Tween.get(this.filters_mc).wait(1));

	// bg
	this.instance_1 = new lib.filters_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.5,-319.5,395.3,449.5);
p.frameBounds = [rect];


(lib.filters_animation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0,exit:9});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// animation
	this.filters_container_mc = new lib.filters_container_mc();
	this.filters_container_mc.setTransform(400,730);

	this.timeline.addTween(cjs.Tween.get(this.filters_container_mc).to({y:450},9).to({y:730},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(205.5,410.5,395.3,449.5);
p.frameBounds = [rect, new cjs.Rectangle(205.5,379.4,395.3,449.5), new cjs.Rectangle(205.5,348.3,395.3,449.5), new cjs.Rectangle(205.5,317.2,395.3,449.5), new cjs.Rectangle(205.5,286.1,395.3,449.5), new cjs.Rectangle(205.5,255,395.3,449.5), new cjs.Rectangle(205.5,223.9,395.3,449.5), new cjs.Rectangle(205.5,192.7,395.3,449.5), new cjs.Rectangle(205.5,161.6,395.3,449.5), new cjs.Rectangle(205.5,130.5,395.3,449.5), new cjs.Rectangle(205.5,158.5,395.3,449.5), new cjs.Rectangle(205.5,186.5,395.3,449.5), new cjs.Rectangle(205.5,214.5,395.3,449.5), new cjs.Rectangle(205.5,242.5,395.3,449.5), new cjs.Rectangle(205.5,270.5,395.3,449.5), new cjs.Rectangle(205.5,298.5,395.3,449.5), new cjs.Rectangle(205.5,326.5,395.3,449.5), new cjs.Rectangle(205.5,354.5,395.3,449.5), new cjs.Rectangle(205.5,382.5,395.3,449.5), new cjs.Rectangle(205.5,410.5,395.3,449.5)];


(lib.dressupPanel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(100,180,0.813,0.813);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-90,180,0.813,0.813);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-290,630,740);
p.frameBounds = [rect];


(lib.dressupPanel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,0,0.857,0.857);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-285,417.1,735);
p.frameBounds = [rect];


(lib.dressupPanel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(160,132,0.857,0.857);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-160,132,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-220,780,670);
p.frameBounds = [rect];


(lib.dressupPanel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(100,180,0.813,0.813);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-90,180,0.813,0.813);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-290,630,740);
p.frameBounds = [rect];


(lib.dressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,0,0.857,0.857);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-285,417.1,735);
p.frameBounds = [rect];


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(160,132,0.857,0.857);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-160,132,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-220,780,670);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(100,180,0.813,0.813);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-90,180,0.813,0.813);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-290,630,740);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,0,0.857,0.857);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-285,417.1,735);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(160,132,0.857,0.857);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-160,132,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-220,780,670);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(100,180,0.813,0.813);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-90,180,0.813,0.813);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315,-290,630,740);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140,0,0.857,0.857);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140,0,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208.5,-285,417.1,735);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,400);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(160,132,0.857,0.857);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-160,132,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-220,780,670);
p.frameBounds = [rect];


(lib.comics_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.phone2_mc();
	this.instance.setTransform(0.5,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgfKAsDMAAAhTZQABh8BXhYQBZhYB8AAITxAAQCvAvBBCKQC3C1DMiwQBZinC5gXITFAAQB9AABXBYQBZBYAAB8MAAABTZg");
	mask.setTransform(1,12);

	// body
	this.frame_1_mc = new lib.comics_0_mc();
	this.frame_1_mc.setTransform(0,400);

	this.frame_2_mc = new lib.comics_1_mc();
	this.frame_2_mc.setTransform(0,213);

	this.frame_3_mc = new lib.comics_2_mc();
	this.frame_3_mc.setTransform(0,213);

	this.frame_4_mc = new lib.comics_3_mc();
	this.frame_4_mc.setTransform(0,213);

	this.frame_5_mc = new lib.comics_4_mc();
	this.frame_5_mc.setTransform(0,213);

	this.frame_6_mc = new lib.comics_5_mc();
	this.frame_6_mc.setTransform(0,213);

	this.frame_1_mc.mask = this.frame_2_mc.mask = this.frame_3_mc.mask = this.frame_4_mc.mask = this.frame_5_mc.mask = this.frame_6_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

	// bg
	this.instance_1 = new lib.phone1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-296,440,589.1);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-220,-296,440,590.1), rect, rect, rect];


(lib.CartoonScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.forward_mc();
	this.next_mc.setTransform(710,510);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.comics_mc();
	this.body_mc.setTransform(400,307);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.FlashAnimation = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.flash_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


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

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_2_mc();
	this.snowfall_comp.setTransform(-100,-40);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(460,540,0.857,0.857);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(340,540,0.857,0.857);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

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

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(225,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:530},5).wait(15).to({y:700},10).wait(111));

	// hero
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(620,370);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1).to({x:1400},0).wait(23).to({x:570},21).to({x:620},4).wait(40).to({x:401},20).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_12_mc();
	this.dressupPanel_mc.setTransform(220,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-600},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(620.1,340.1,0.667,0.667,15,0,0,0.1,0.1);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(180,280,0.667,0.667,-15);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(740.1,280.1,0.833,0.833,-45,0,0,0,0.1);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(60,340,0.833,0.833,15);

	this.instance_4 = new lib.snowflake_flashing_mc();
	this.instance_4.setTransform(120,440,0.833,0.833,-90);

	this.instance_5 = new lib.snowflake_flashing_mc();
	this.instance_5.setTransform(680,180,0.833,0.833);

	this.instance_6 = new lib.snowflake_flashing_mc();
	this.instance_6.setTransform(680,440,1,1,-90);

	this.instance_7 = new lib.snowflake_flashing_mc();
	this.instance_7.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_8 = new lib.shadow_dressup_mc();
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,28.5,892.8,771.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-915,28.5,2492.8,771.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-873.5,28.5,2411.8,771.5), new cjs.Rectangle(-832.1,28.5,2330.9,771.5), new cjs.Rectangle(-790.7,28.5,2249.9,771.5), new cjs.Rectangle(-749.3,28.5,2169,771.5), new cjs.Rectangle(-707.8,28.5,2088,771.5), new cjs.Rectangle(-666.4,28.5,2007.1,771.5), new cjs.Rectangle(-625,28.5,1926.1,771.5), new cjs.Rectangle(-583.5,28.5,1845.1,771.5), new cjs.Rectangle(-542.1,28.5,1764.2,771.5), new cjs.Rectangle(-500.7,28.5,1683.2,771.5), new cjs.Rectangle(-459.3,28.5,1602.3,771.5), new cjs.Rectangle(-417.8,28.5,1521.3,771.5), new cjs.Rectangle(-376.4,28.5,1440.4,771.5), new cjs.Rectangle(-335,28.5,1359.4,771.5), new cjs.Rectangle(-293.6,28.5,1278.5,771.5), new cjs.Rectangle(-252.1,28.5,1197.5,771.5), new cjs.Rectangle(-210.7,28.5,1116.6,771.5), new cjs.Rectangle(-169.3,28.5,1035.6,771.5), new cjs.Rectangle(-127.8,28.5,954.7,771.5), new cjs.Rectangle(-86.4,28.5,873.8,771.5), new cjs.Rectangle(-45,28.5,792.8,771.5), new cjs.Rectangle(-57.5,28.5,817.8,771.5), new cjs.Rectangle(-70,28.5,842.8,771.5), new cjs.Rectangle(-82.5,28.5,867.8,771.5), rect=new cjs.Rectangle(-95,28.5,892.8,771.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-95,28.5,905.7,771.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-136,28.5,946.7,771.5), new cjs.Rectangle(-177,28.5,987.7,771.5), new cjs.Rectangle(-218,28.5,1028.7,771.5), new cjs.Rectangle(-259,28.5,1069.7,771.5), new cjs.Rectangle(-300,28.5,1110.7,771.5), new cjs.Rectangle(-341,28.5,1151.7,771.5), new cjs.Rectangle(-382,28.5,1192.7,771.5), new cjs.Rectangle(-423,28.5,1233.7,771.5), new cjs.Rectangle(-464,28.5,1274.7,771.5), new cjs.Rectangle(-505,-10,1515,810), new cjs.Rectangle(-546,-10,1556,810), new cjs.Rectangle(-587,-10,1597,810), new cjs.Rectangle(-628,-10,1638,810), new cjs.Rectangle(-669,-10,1679,810), new cjs.Rectangle(-710,-10,1720,810), new cjs.Rectangle(-751,-10,1761,810), new cjs.Rectangle(-792,-10,1802,810), new cjs.Rectangle(-833,-10,1843,810), new cjs.Rectangle(-874,-10,1884,810), rect=new cjs.Rectangle(-915,-10,1925,810), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(225,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:530},5).wait(15).to({y:700},10).wait(111));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(640,455);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1400},0).wait(23).to({x:590},21).to({x:640},4).wait(40).to({x:397},20).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_9_mc();
	this.dressupPanel_mc.setTransform(220,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-600},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(620.1,340.1,0.667,0.667,15,0,0,0.1,0.1);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(180,280,0.667,0.667,-15);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(740.1,280.1,0.833,0.833,-45,0,0,0,0.1);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(60,340,0.833,0.833,15);

	this.instance_4 = new lib.snowflake_flashing_mc();
	this.instance_4.setTransform(120,440,0.833,0.833,-90);

	this.instance_5 = new lib.snowflake_flashing_mc();
	this.instance_5.setTransform(680,180,0.833,0.833);

	this.instance_6 = new lib.snowflake_flashing_mc();
	this.instance_6.setTransform(680,440,1,1,-90);

	this.instance_7 = new lib.snowflake_flashing_mc();
	this.instance_7.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_8 = new lib.shadow_dressup_mc();
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,24,883,776);
p.frameBounds = [rect, rect=new cjs.Rectangle(-915,24,2463,776), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-873.5,24,2383,776), new cjs.Rectangle(-832.1,24,2303,776), new cjs.Rectangle(-790.7,24,2223,776), new cjs.Rectangle(-749.3,24,2143,776), new cjs.Rectangle(-707.8,24,2063,776), new cjs.Rectangle(-666.4,24,1983,776), new cjs.Rectangle(-625,24,1903,776), new cjs.Rectangle(-583.5,24,1823,776), new cjs.Rectangle(-542.1,24,1743,776), new cjs.Rectangle(-500.7,24,1663,776), new cjs.Rectangle(-459.3,24,1583,776), new cjs.Rectangle(-417.8,24,1503,776), new cjs.Rectangle(-376.4,24,1423,776), new cjs.Rectangle(-335,24,1343,776), new cjs.Rectangle(-293.6,24,1263.1,776), new cjs.Rectangle(-252.1,24,1183,776), new cjs.Rectangle(-210.7,24,1103,776), new cjs.Rectangle(-169.3,24,1023,776), new cjs.Rectangle(-127.8,24,943,776), new cjs.Rectangle(-86.4,24,863,776), new cjs.Rectangle(-45,24,783,776), new cjs.Rectangle(-57.5,24,808,776), new cjs.Rectangle(-70,24,833,776), new cjs.Rectangle(-82.5,24,858,776), rect=new cjs.Rectangle(-95,24,883,776), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-95,24,905.7,776), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-136,24,946.7,776), new cjs.Rectangle(-177,24,987.7,776), new cjs.Rectangle(-218,24,1028.7,776), new cjs.Rectangle(-259,24,1069.7,776), new cjs.Rectangle(-300,24,1110.7,776), new cjs.Rectangle(-341,24,1151.7,776), new cjs.Rectangle(-382,24,1192.7,776), new cjs.Rectangle(-423,24,1233.7,776), new cjs.Rectangle(-464,24,1274.7,776), new cjs.Rectangle(-505,-10,1515,810), new cjs.Rectangle(-546,-10,1556,810), new cjs.Rectangle(-587,-10,1597,810), new cjs.Rectangle(-628,-10,1638,810), new cjs.Rectangle(-669,-10,1679,810), new cjs.Rectangle(-710,-10,1720,810), new cjs.Rectangle(-751,-10,1761,810), new cjs.Rectangle(-792,-10,1802,810), new cjs.Rectangle(-833,-10,1843,810), new cjs.Rectangle(-874,-10,1884,810), rect=new cjs.Rectangle(-915,-10,1925,810), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(225,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:530},5).wait(15).to({y:700},10).wait(111));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,355);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1400},0).wait(23).to({x:570},21).to({x:620},4).wait(40).to({x:418},20).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(220,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-600},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(620.1,340.1,0.667,0.667,15,0,0,0.1,0.1);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(180,280,0.667,0.667,-15);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(740.1,280.1,0.833,0.833,-45,0,0,0,0.1);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(60,340,0.833,0.833,15);

	this.instance_4 = new lib.snowflake_flashing_mc();
	this.instance_4.setTransform(120,440,0.833,0.833,-90);

	this.instance_5 = new lib.snowflake_flashing_mc();
	this.instance_5.setTransform(680,180,0.833,0.833);

	this.instance_6 = new lib.snowflake_flashing_mc();
	this.instance_6.setTransform(680,440,1,1,-90);

	this.instance_7 = new lib.snowflake_flashing_mc();
	this.instance_7.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_8 = new lib.shadow_dressup_mc();
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,13.5,923.2,786.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-915,13.5,2523.2,786.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-873.5,13.5,2442.1,786.5), new cjs.Rectangle(-832.1,13.5,2361.3,786.5), new cjs.Rectangle(-790.7,13.5,2280.3,786.5), new cjs.Rectangle(-749.3,13.5,2199.4,786.5), new cjs.Rectangle(-707.8,13.5,2118.4,786.5), new cjs.Rectangle(-666.4,13.5,2037.5,786.5), new cjs.Rectangle(-625,13.5,1956.5,786.5), new cjs.Rectangle(-583.5,13.5,1875.5,786.5), new cjs.Rectangle(-542.1,13.5,1794.6,786.5), new cjs.Rectangle(-500.7,13.5,1713.6,786.5), new cjs.Rectangle(-459.3,13.5,1632.7,786.5), new cjs.Rectangle(-417.8,13.5,1551.7,786.5), new cjs.Rectangle(-376.4,13.5,1470.8,786.5), new cjs.Rectangle(-335,13.5,1389.8,786.5), new cjs.Rectangle(-293.6,13.5,1308.9,786.5), new cjs.Rectangle(-252.1,13.5,1227.9,786.5), new cjs.Rectangle(-210.7,13.5,1147,786.5), new cjs.Rectangle(-169.3,13.5,1066,786.5), new cjs.Rectangle(-127.8,13.5,985.1,786.5), new cjs.Rectangle(-86.4,13.5,904.2,786.5), new cjs.Rectangle(-45,13.5,823.2,786.5), new cjs.Rectangle(-57.5,13.5,848.2,786.5), new cjs.Rectangle(-70,13.5,873.2,786.5), new cjs.Rectangle(-82.5,13.5,898.2,786.5), rect=new cjs.Rectangle(-95,13.5,923.2,786.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-136,13.5,964.2,786.5), new cjs.Rectangle(-177,13.5,1005.2,786.5), new cjs.Rectangle(-218,13.5,1046.2,786.5), new cjs.Rectangle(-259,13.5,1087.2,786.5), new cjs.Rectangle(-300,13.5,1128.2,786.5), new cjs.Rectangle(-341,13.5,1169.2,786.5), new cjs.Rectangle(-382,13.5,1210.2,786.5), new cjs.Rectangle(-423,13.5,1251.2,786.5), new cjs.Rectangle(-464,13.5,1292.2,786.5), new cjs.Rectangle(-505,-10,1515,810), new cjs.Rectangle(-546,-10,1556,810), new cjs.Rectangle(-587,-10,1597,810), new cjs.Rectangle(-628,-10,1638,810), new cjs.Rectangle(-669,-10,1679,810), new cjs.Rectangle(-710,-10,1720,810), new cjs.Rectangle(-751,-10,1761,810), new cjs.Rectangle(-792,-10,1802,810), new cjs.Rectangle(-833,-10,1843,810), new cjs.Rectangle(-874,-10,1884,810), rect=new cjs.Rectangle(-915,-10,1925,810), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(225,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:500},10).to({scaleX:0.74,scaleY:0.74,y:530},5).wait(15).to({y:700},10).wait(111));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(600,355);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1400},0).wait(23).to({x:550},21).to({x:600},4).wait(40).to({x:403},20).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(220,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-600},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(620.1,340.1,0.667,0.667,15,0,0,0.1,0.1);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(180,280,0.667,0.667,-15);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(740.1,280.1,0.833,0.833,-45,0,0,0,0.1);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(60,340,0.833,0.833,15);

	this.instance_4 = new lib.snowflake_flashing_mc();
	this.instance_4.setTransform(120,440,0.833,0.833,-90);

	this.instance_5 = new lib.snowflake_flashing_mc();
	this.instance_5.setTransform(680,180,0.833,0.833);

	this.instance_6 = new lib.snowflake_flashing_mc();
	this.instance_6.setTransform(680,440,1,1,-90);

	this.instance_7 = new lib.snowflake_flashing_mc();
	this.instance_7.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_8 = new lib.shadow_dressup_mc();
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,22.4,830.4,777.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-915,22.4,2450.4,777.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-873.5,22.4,2368.5,777.7), new cjs.Rectangle(-832.1,22.4,2286.6,777.7), new cjs.Rectangle(-790.7,22.4,2204.7,777.7), new cjs.Rectangle(-749.3,22.4,2122.8,777.7), new cjs.Rectangle(-707.8,22.4,2040.9,777.7), new cjs.Rectangle(-666.4,22.4,1959,777.7), new cjs.Rectangle(-625,22.4,1877.1,777.7), new cjs.Rectangle(-583.5,22.4,1795.2,777.7), new cjs.Rectangle(-542.1,22.4,1713.3,777.7), new cjs.Rectangle(-500.7,22.4,1631.4,777.7), new cjs.Rectangle(-459.3,22.4,1549.5,777.7), new cjs.Rectangle(-417.8,22.4,1467.6,777.7), new cjs.Rectangle(-376.4,22.4,1385.7,777.7), new cjs.Rectangle(-335,22.4,1303.8,777.7), new cjs.Rectangle(-293.6,22.4,1221.9,777.7), new cjs.Rectangle(-252.1,22.4,1140,777.7), new cjs.Rectangle(-210.7,22.4,1058,777.7), new cjs.Rectangle(-169.3,22.4,976.1,777.7), new cjs.Rectangle(-127.8,22.4,894.2,777.7), new cjs.Rectangle(-86.4,22.4,812.4,777.7), new cjs.Rectangle(-45,22.4,730.4,777.7), new cjs.Rectangle(-57.5,22.4,755.4,777.7), new cjs.Rectangle(-70,22.4,780.4,777.7), new cjs.Rectangle(-82.5,22.4,805.4,777.7), rect=new cjs.Rectangle(-95,22.4,830.4,777.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-95,22.4,905.7,777.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-136,22.4,946.7,777.7), new cjs.Rectangle(-177,22.4,987.7,777.7), new cjs.Rectangle(-218,22.4,1028.7,777.7), new cjs.Rectangle(-259,22.4,1069.7,777.7), new cjs.Rectangle(-300,22.4,1110.7,777.7), new cjs.Rectangle(-341,22.4,1151.7,777.7), new cjs.Rectangle(-382,22.4,1192.7,777.7), new cjs.Rectangle(-423,22.4,1233.7,777.7), new cjs.Rectangle(-464,22.4,1274.7,777.7), new cjs.Rectangle(-505,-10,1515,810), new cjs.Rectangle(-546,-10,1556,810), new cjs.Rectangle(-587,-10,1597,810), new cjs.Rectangle(-628,-10,1638,810), new cjs.Rectangle(-669,-10,1679,810), new cjs.Rectangle(-710,-10,1720,810), new cjs.Rectangle(-751,-10,1761,810), new cjs.Rectangle(-792,-10,1802,810), new cjs.Rectangle(-833,-10,1843,810), new cjs.Rectangle(-874,-10,1884,810), rect=new cjs.Rectangle(-915,-10,1925,810), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(290,380,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:45,x:290,y:380}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// subjects
	this.subject_2 = new lib.level_completed_0_mc();
	this.subject_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.subject_2).wait(1).to({_off:false},0).wait(10));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(320,415);

	this.frame_2_mc = new lib.quest_2_1_mc();

	this.frame_3_mc = new lib.quest_3_1_mc();

	this.frame_4_mc = new lib.quest_4_1_mc();

	this.frame_5_mc = new lib.quest_5_1_mc();

	this.frame_6_mc = new lib.quest_6_1_mc();

	this.frame_7_mc = new lib.quest_7_1_mc();

	this.frame_8_mc = new lib.quest_8_1_mc();

	this.frame_9_mc = new lib.quest_9_1_mc();

	this.frame_10_mc = new lib.quest_10_1_mc();

	this.frame_11_mc = new lib.quest_11_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.frame_11_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.subject_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.subject_1).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,-329.4,640,854.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(80,-329.4,710,1099.4), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:520},10).to({scaleX:0.74,scaleY:0.74},5).wait(15).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_11_mc();
	this.dressupPanel_mc.setTransform(220,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-500},20).wait(101));

	// hero
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(580,370);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1).to({x:1300},0).wait(23).to({x:530},21).to({x:580},4).wait(30).to({x:401},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(120,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(680,180,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(680,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,28.5,778.6,741.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-708.5,28.5,2186.4,741.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-671.9,28.5,2113,741.5), new cjs.Rectangle(-635.2,28.5,2039.6,741.5), new cjs.Rectangle(-598.5,28.5,1966.3,741.5), new cjs.Rectangle(-561.9,28.5,1893,741.5), new cjs.Rectangle(-525.2,28.5,1819.6,741.5), new cjs.Rectangle(-488.5,28.5,1746.3,741.5), new cjs.Rectangle(-451.9,28.5,1673,741.5), new cjs.Rectangle(-415.2,28.5,1599.6,741.5), new cjs.Rectangle(-378.5,28.5,1526.3,741.5), new cjs.Rectangle(-341.9,28.5,1453,741.5), new cjs.Rectangle(-305.2,28.5,1379.6,741.5), new cjs.Rectangle(-268.5,28.5,1306.3,741.5), new cjs.Rectangle(-231.9,28.5,1233,741.5), new cjs.Rectangle(-195.2,28.5,1159.6,741.5), new cjs.Rectangle(-158.5,28.5,1086.3,741.5), new cjs.Rectangle(-121.9,28.5,1013,741.5), new cjs.Rectangle(-85.2,28.5,939.6,741.5), new cjs.Rectangle(-48.5,28.5,866.3,741.5), new cjs.Rectangle(-11.9,28.5,801.9,741.5), new cjs.Rectangle(24.8,28.5,765.2,741.5), new cjs.Rectangle(61.5,28.5,728.6,741.5), new cjs.Rectangle(49,28.5,741.1,741.5), new cjs.Rectangle(36.5,28.5,753.6,741.5), new cjs.Rectangle(24,28.5,766.1,741.5), new cjs.Rectangle(11.5,28.5,778.6,741.5), new cjs.Rectangle(11.5,28.5,779.6,741.5), new cjs.Rectangle(11.5,28.5,780.6,741.5), new cjs.Rectangle(11.5,28.5,781.6,741.5), new cjs.Rectangle(11.5,28.5,782.5,741.5), new cjs.Rectangle(11.5,28.5,783.4,741.5), new cjs.Rectangle(11.5,28.5,784.5,741.5), new cjs.Rectangle(11.5,28.5,785.5,741.5), new cjs.Rectangle(11.5,28.5,786.5,741.5), new cjs.Rectangle(11.5,28.5,787.5,741.5), new cjs.Rectangle(11.5,28.5,788.6,741.5), new cjs.Rectangle(11.5,28.5,786.5,741.5), new cjs.Rectangle(11.5,28.5,784.5,741.5), new cjs.Rectangle(11.5,28.5,782.6,741.5), new cjs.Rectangle(11.5,28.5,780.6,741.5), rect=new cjs.Rectangle(11.5,28.5,778.6,741.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-24.5,28.5,814.6,741.5), new cjs.Rectangle(-60.5,28.5,850.6,741.5), new cjs.Rectangle(-96.5,28.5,886.6,741.5), new cjs.Rectangle(-132.5,28.5,922.6,741.5), new cjs.Rectangle(-168.5,28.5,958.6,741.5), new cjs.Rectangle(-204.5,28.5,994.6,741.5), new cjs.Rectangle(-240.5,28.5,1030.6,741.5), new cjs.Rectangle(-276.5,28.5,1066.6,741.5), new cjs.Rectangle(-312.5,28.5,1102.6,741.5), new cjs.Rectangle(-348.5,-10,1358.6,780), new cjs.Rectangle(-384.5,-10,1394.6,780), new cjs.Rectangle(-420.5,-10,1430.6,780), new cjs.Rectangle(-456.5,-10,1466.6,780), new cjs.Rectangle(-492.5,-10,1502.6,780), new cjs.Rectangle(-528.5,-10,1538.6,780), new cjs.Rectangle(-564.5,-10,1574.6,780), new cjs.Rectangle(-600.5,-10,1610.6,780), new cjs.Rectangle(-636.5,-10,1646.6,780), new cjs.Rectangle(-672.5,-10,1682.6,780), rect=new cjs.Rectangle(-708.5,-10,1718.6,780), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:800},0).wait(58).to({regX:0.2,regY:0.1,scaleX:0.84,scaleY:0.84,x:400.2,y:480.1},11).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:400,y:530},4).wait(15).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:400.1,y:800},15).wait(96));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(100,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(710,260,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(660,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(20,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},80).wait(120));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_10_mc();
	this.dressupPanel_mc.setTransform(400,370);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(38).to({y:320},16).to({y:370},4).wait(40).to({y:1000},20).wait(81));

	// hero
	this.hero_4 = new lib.hero4_for_makeup_mc();
	this.hero_4.setTransform(395,250);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1).to({x:-600},0).wait(18).to({x:450},16).to({x:395},4).wait(161));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-86.5,780,906.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-780.5,-86.5,1570.5,1536.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-714.8,-86.5,1504.9,1536.6), new cjs.Rectangle(-649.2,-86.5,1439.3,1536.6), new cjs.Rectangle(-583.6,-86.5,1373.7,1536.6), new cjs.Rectangle(-518,-86.5,1308,1536.6), new cjs.Rectangle(-452.3,-86.5,1242.4,1536.6), new cjs.Rectangle(-386.7,-86.5,1176.8,1536.6), new cjs.Rectangle(-321.1,-86.5,1111.2,1536.6), new cjs.Rectangle(-255.5,-86.5,1045.5,1536.6), new cjs.Rectangle(-189.8,-86.5,979.9,1536.6), new cjs.Rectangle(-124.2,-86.5,914.3,1536.6), new cjs.Rectangle(-58.6,-86.5,848.6,1536.6), new cjs.Rectangle(7,-86.5,783,1536.6), rect=new cjs.Rectangle(10,-86.5,780,1536.6), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-86.5,780,1494.1), new cjs.Rectangle(10,-86.5,780,1451.6), new cjs.Rectangle(10,-86.5,780,1409.1), new cjs.Rectangle(10,-86.5,780,1366.6), new cjs.Rectangle(10,-86.5,780,1324.1), new cjs.Rectangle(10,-86.5,780,1281.6), new cjs.Rectangle(10,-86.5,780,1239.1), new cjs.Rectangle(10,-86.5,780,1196.6), new cjs.Rectangle(10,-86.5,780,1154.1), new cjs.Rectangle(10,-86.5,780,1111.6), new cjs.Rectangle(10,-86.5,780,1069.1), new cjs.Rectangle(10,-86.5,780,1026.6), new cjs.Rectangle(10,-86.5,780,984.1), rect=new cjs.Rectangle(10,-86.5,780,956.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-86.5,780,928.3), rect=new cjs.Rectangle(10,-86.5,780,906.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-40,-86.5,830,906.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-86.5,1220,906.6), new cjs.Rectangle(-210,-86.5,1220,938.1), new cjs.Rectangle(-210,-86.5,1220,969.6), new cjs.Rectangle(-210,-86.5,1220,1001.1), new cjs.Rectangle(-210,-86.5,1220,1032.6), new cjs.Rectangle(-210,-86.5,1220,1064.1), new cjs.Rectangle(-210,-86.5,1220,1095.6), new cjs.Rectangle(-210,-86.5,1220,1127.1), new cjs.Rectangle(-210,-86.5,1220,1158.6), new cjs.Rectangle(-210,-86.5,1220,1190.1), new cjs.Rectangle(-210,-86.5,1220,1221.6), new cjs.Rectangle(-210,-86.5,1220,1253.1), new cjs.Rectangle(-210,-86.5,1220,1284.6), new cjs.Rectangle(-210,-86.5,1220,1316.1), new cjs.Rectangle(-210,-86.5,1220,1347.6), new cjs.Rectangle(-210,-86.5,1220,1379.1), new cjs.Rectangle(-210,-86.5,1220,1410.6), new cjs.Rectangle(-210,-86.5,1220,1442.1), new cjs.Rectangle(-210,-86.5,1220,1473.6), new cjs.Rectangle(-210,-86.5,1220,1505.1), rect=new cjs.Rectangle(-210,-86.5,1220,1536.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:520},10).to({scaleX:0.74,scaleY:0.74},5).wait(15).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_8_mc();
	this.dressupPanel_mc.setTransform(220,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-500},20).wait(101));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(560,460);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1300},0).wait(23).to({x:510},21).to({x:560},4).wait(30).to({x:398},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(120,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(680,180,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(680,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,29,778.6,741);
p.frameBounds = [rect, rect=new cjs.Rectangle(-708.5,29,2156.6,741), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-671.9,29,2082.3,741), new cjs.Rectangle(-635.2,29,2008,741), new cjs.Rectangle(-598.5,29,1933.7,741), new cjs.Rectangle(-561.9,29,1859.4,741), new cjs.Rectangle(-525.2,29,1785.1,741), new cjs.Rectangle(-488.5,29,1710.9,741), new cjs.Rectangle(-451.9,29,1636.6,741), new cjs.Rectangle(-415.2,29,1562.3,741), new cjs.Rectangle(-378.5,29,1488,741), new cjs.Rectangle(-341.9,29,1413.7,741), new cjs.Rectangle(-305.2,29,1339.4,741), new cjs.Rectangle(-268.5,29,1265.1,741), new cjs.Rectangle(-231.9,29,1190.9,741), new cjs.Rectangle(-195.2,29,1116.6,741), new cjs.Rectangle(-158.5,29,1042.3,741), new cjs.Rectangle(-121.9,29,968,741), new cjs.Rectangle(-85.2,29,893.7,741), new cjs.Rectangle(-48.5,29,838.6,741), new cjs.Rectangle(-11.9,29,801.9,741), new cjs.Rectangle(24.8,29,765.2,741), new cjs.Rectangle(61.5,29,728.6,741), new cjs.Rectangle(49,29,741.1,741), new cjs.Rectangle(36.5,29,753.6,741), new cjs.Rectangle(24,29,766.1,741), new cjs.Rectangle(11.5,29,778.6,741), new cjs.Rectangle(11.5,29,779.6,741), new cjs.Rectangle(11.5,29,780.6,741), new cjs.Rectangle(11.5,29,781.6,741), new cjs.Rectangle(11.5,29,782.5,741), new cjs.Rectangle(11.5,29,783.4,741), new cjs.Rectangle(11.5,29,784.5,741), new cjs.Rectangle(11.5,29,785.5,741), new cjs.Rectangle(11.5,29,786.5,741), new cjs.Rectangle(11.5,29,787.5,741), new cjs.Rectangle(11.5,29,788.6,741), new cjs.Rectangle(11.5,29,786.5,741), new cjs.Rectangle(11.5,29,784.5,741), new cjs.Rectangle(11.5,29,782.6,741), new cjs.Rectangle(11.5,29,780.6,741), rect=new cjs.Rectangle(11.5,29,778.6,741), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-24.5,29,814.6,741), new cjs.Rectangle(-60.5,29,850.6,741), new cjs.Rectangle(-96.5,29,886.6,741), new cjs.Rectangle(-132.5,29,922.6,741), new cjs.Rectangle(-168.5,29,958.6,741), new cjs.Rectangle(-204.5,29,994.6,741), new cjs.Rectangle(-240.5,29,1030.6,741), new cjs.Rectangle(-276.5,29,1066.6,741), new cjs.Rectangle(-312.5,29,1102.6,741), new cjs.Rectangle(-348.5,-10,1358.6,780), new cjs.Rectangle(-384.5,-10,1394.6,780), new cjs.Rectangle(-420.5,-10,1430.6,780), new cjs.Rectangle(-456.5,-10,1466.6,780), new cjs.Rectangle(-492.5,-10,1502.6,780), new cjs.Rectangle(-528.5,-10,1538.6,780), new cjs.Rectangle(-564.5,-10,1574.6,780), new cjs.Rectangle(-600.5,-10,1610.6,780), new cjs.Rectangle(-636.5,-10,1646.6,780), new cjs.Rectangle(-672.5,-10,1682.6,780), rect=new cjs.Rectangle(-708.5,-10,1718.6,780), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:800},0).wait(58).to({regX:0.2,regY:0.1,scaleX:0.84,scaleY:0.84,x:400.2,y:480.1},11).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:400,y:530},4).wait(15).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:400.1,y:800},15).wait(96));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(100,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(710,260,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(660,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(20,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},80).wait(120));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_mc.setTransform(400,370);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(38).to({y:320},16).to({y:370},4).wait(40).to({y:1000},20).wait(81));

	// hero
	this.hero_3 = new lib.hero3_for_makeup_mc();
	this.hero_3.setTransform(393,250);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:-600},0).wait(18).to({x:440},16).to({x:393},4).wait(161));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-72.5,780,892.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-857.5,-72.5,1647.5,1522.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-792.5,-72.5,1582.5,1522.6), new cjs.Rectangle(-727.5,-72.5,1517.5,1522.6), new cjs.Rectangle(-662.5,-72.5,1452.5,1522.6), new cjs.Rectangle(-597.5,-72.5,1387.5,1522.6), new cjs.Rectangle(-532.5,-72.5,1322.5,1522.6), new cjs.Rectangle(-467.5,-72.5,1257.5,1522.6), new cjs.Rectangle(-402.5,-72.5,1192.5,1522.6), new cjs.Rectangle(-337.5,-72.5,1127.5,1522.6), new cjs.Rectangle(-272.5,-72.5,1062.5,1522.6), new cjs.Rectangle(-207.5,-72.5,997.5,1522.6), new cjs.Rectangle(-142.5,-72.5,932.5,1522.6), new cjs.Rectangle(-77.5,-72.5,867.5,1522.6), new cjs.Rectangle(-12.5,-72.5,802.5,1522.6), rect=new cjs.Rectangle(10,-72.5,780,1522.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-72.5,780,1480.1), new cjs.Rectangle(10,-72.5,780,1437.6), new cjs.Rectangle(10,-72.5,780,1395.1), new cjs.Rectangle(10,-72.5,780,1352.6), new cjs.Rectangle(10,-72.5,780,1310.1), new cjs.Rectangle(10,-72.5,780,1267.6), new cjs.Rectangle(10,-72.5,780,1225.1), new cjs.Rectangle(10,-72.5,780,1182.6), new cjs.Rectangle(10,-72.5,780,1140.1), new cjs.Rectangle(10,-72.5,780,1097.6), new cjs.Rectangle(10,-72.5,780,1055.1), new cjs.Rectangle(10,-72.5,780,1012.6), new cjs.Rectangle(10,-72.5,780,970.1), rect=new cjs.Rectangle(10,-72.5,780,942.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-72.5,780,914.3), rect=new cjs.Rectangle(10,-72.5,780,892.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-40,-72.5,830,892.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-72.5,1220,892.6), new cjs.Rectangle(-210,-72.5,1220,924.1), new cjs.Rectangle(-210,-72.5,1220,955.6), new cjs.Rectangle(-210,-72.5,1220,987.1), new cjs.Rectangle(-210,-72.5,1220,1018.6), new cjs.Rectangle(-210,-72.5,1220,1050.1), new cjs.Rectangle(-210,-72.5,1220,1081.6), new cjs.Rectangle(-210,-72.5,1220,1113.1), new cjs.Rectangle(-210,-72.5,1220,1144.6), new cjs.Rectangle(-210,-72.5,1220,1176.1), new cjs.Rectangle(-210,-72.5,1220,1207.6), new cjs.Rectangle(-210,-72.5,1220,1239.1), new cjs.Rectangle(-210,-72.5,1220,1270.6), new cjs.Rectangle(-210,-72.5,1220,1302.1), new cjs.Rectangle(-210,-72.5,1220,1333.6), new cjs.Rectangle(-210,-72.5,1220,1365.1), new cjs.Rectangle(-210,-72.5,1220,1396.6), new cjs.Rectangle(-210,-72.5,1220,1428.1), new cjs.Rectangle(-210,-72.5,1220,1459.6), new cjs.Rectangle(-210,-72.5,1220,1491.1), rect=new cjs.Rectangle(-210,-72.5,1220,1522.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:520},10).to({scaleX:0.74,scaleY:0.74},5).wait(15).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(220,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-500},20).wait(101));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(580,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1400},0).wait(23).to({x:530},21).to({x:580},4).wait(30).to({x:418},20).wait(101));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(120,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(680,180,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(680,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,18.5,778.6,751.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-708.5,18.5,2316.7,751.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-671.9,18.5,2238.6,751.5), new cjs.Rectangle(-635.2,18.5,2160.5,751.5), new cjs.Rectangle(-598.5,18.5,2082.4,751.5), new cjs.Rectangle(-561.9,18.5,2004.4,751.5), new cjs.Rectangle(-525.2,18.5,1926.2,751.5), new cjs.Rectangle(-488.5,18.5,1848.2,751.5), new cjs.Rectangle(-451.9,18.5,1770.1,751.5), new cjs.Rectangle(-415.2,18.5,1691.9,751.5), new cjs.Rectangle(-378.5,18.5,1613.9,751.5), new cjs.Rectangle(-341.9,18.5,1535.8,751.5), new cjs.Rectangle(-305.2,18.5,1457.7,751.5), new cjs.Rectangle(-268.5,18.5,1379.6,751.5), new cjs.Rectangle(-231.9,18.5,1301.5,751.5), new cjs.Rectangle(-195.2,18.5,1223.4,751.5), new cjs.Rectangle(-158.5,18.5,1145.3,751.5), new cjs.Rectangle(-121.9,18.5,1067.2,751.5), new cjs.Rectangle(-85.2,18.5,989.1,751.5), new cjs.Rectangle(-48.5,18.5,911,751.5), new cjs.Rectangle(-11.9,18.5,832.9,751.5), new cjs.Rectangle(24.8,18.5,765.2,751.5), new cjs.Rectangle(61.5,18.5,728.6,751.5), new cjs.Rectangle(49,18.5,741.1,751.5), new cjs.Rectangle(36.5,18.5,753.6,751.5), new cjs.Rectangle(24,18.5,766.1,751.5), new cjs.Rectangle(11.5,18.5,778.6,751.5), new cjs.Rectangle(11.5,18.5,779.6,751.5), new cjs.Rectangle(11.5,18.5,780.6,751.5), new cjs.Rectangle(11.5,18.5,781.6,751.5), new cjs.Rectangle(11.5,18.5,782.5,751.5), new cjs.Rectangle(11.5,18.5,783.4,751.5), new cjs.Rectangle(11.5,18.5,784.5,751.5), new cjs.Rectangle(11.5,18.5,785.5,751.5), new cjs.Rectangle(11.5,18.5,786.5,751.5), new cjs.Rectangle(11.5,18.5,787.5,751.5), new cjs.Rectangle(11.5,18.5,788.6,751.5), new cjs.Rectangle(11.5,18.5,786.5,751.5), new cjs.Rectangle(11.5,18.5,784.5,751.5), new cjs.Rectangle(11.5,18.5,782.6,751.5), new cjs.Rectangle(11.5,18.5,780.6,751.5), rect=new cjs.Rectangle(11.5,18.5,778.6,751.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-24.5,18.5,814.6,751.5), new cjs.Rectangle(-60.5,18.5,850.6,751.5), new cjs.Rectangle(-96.5,18.5,886.6,751.5), new cjs.Rectangle(-132.5,18.5,922.6,751.5), new cjs.Rectangle(-168.5,18.5,958.6,751.5), new cjs.Rectangle(-204.5,18.5,994.6,751.5), new cjs.Rectangle(-240.5,18.5,1030.6,751.5), new cjs.Rectangle(-276.5,18.5,1066.6,751.5), new cjs.Rectangle(-312.5,18.5,1102.6,751.5), new cjs.Rectangle(-348.5,-10,1358.6,780), new cjs.Rectangle(-384.5,-10,1394.6,780), new cjs.Rectangle(-420.5,-10,1430.6,780), new cjs.Rectangle(-456.5,-10,1466.6,780), new cjs.Rectangle(-492.5,-10,1502.6,780), new cjs.Rectangle(-528.5,-10,1538.6,780), new cjs.Rectangle(-564.5,-10,1574.6,780), new cjs.Rectangle(-600.5,-10,1610.6,780), new cjs.Rectangle(-636.5,-10,1646.6,780), new cjs.Rectangle(-672.5,-10,1682.6,780), rect=new cjs.Rectangle(-708.5,-10,1718.6,780), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:800},0).wait(58).to({regX:0.2,regY:0.1,scaleX:0.84,scaleY:0.84,x:400.2,y:480.1},11).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:400,y:530},4).wait(15).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:400.1,y:800},15).wait(96));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(100,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(710,260,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(660,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(20,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},80).wait(120));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(400,370);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(38).to({y:320},16).to({y:370},4).wait(50).to({y:1000},20).wait(71));

	// hero
	this.hero_2 = new lib.hero2_for_makeup_mc();
	this.hero_2.setTransform(397,250);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-600},0).wait(18).to({x:450},16).to({x:397},4).wait(161));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-38.5,780,858.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-786,-38.5,1576,1488.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-720.3,-38.5,1510.4,1488.6), new cjs.Rectangle(-654.7,-38.5,1444.8,1488.6), new cjs.Rectangle(-589.1,-38.5,1379.2,1488.6), new cjs.Rectangle(-523.5,-38.5,1313.5,1488.6), new cjs.Rectangle(-457.8,-38.5,1247.9,1488.6), new cjs.Rectangle(-392.2,-38.5,1182.3,1488.6), new cjs.Rectangle(-326.6,-38.5,1116.7,1488.6), new cjs.Rectangle(-261,-38.5,1051,1488.6), new cjs.Rectangle(-195.3,-38.5,985.4,1488.6), new cjs.Rectangle(-129.7,-38.5,919.8,1488.6), new cjs.Rectangle(-64.1,-38.5,854.1,1488.6), new cjs.Rectangle(1.5,-38.5,788.5,1488.6), rect=new cjs.Rectangle(10,-38.5,780,1488.6), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-38.5,780,1446.1), new cjs.Rectangle(10,-38.5,780,1403.6), new cjs.Rectangle(10,-38.5,780,1361.1), new cjs.Rectangle(10,-38.5,780,1318.6), new cjs.Rectangle(10,-38.5,780,1276.1), new cjs.Rectangle(10,-38.5,780,1233.6), new cjs.Rectangle(10,-38.5,780,1191.1), new cjs.Rectangle(10,-38.5,780,1148.6), new cjs.Rectangle(10,-38.5,780,1106.1), new cjs.Rectangle(10,-38.5,780,1063.6), new cjs.Rectangle(10,-38.5,780,1021.1), new cjs.Rectangle(10,-38.5,780,978.6), new cjs.Rectangle(10,-38.5,780,936.1), rect=new cjs.Rectangle(10,-38.5,780,908.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-38.5,780,880.3), rect=new cjs.Rectangle(10,-38.5,780,858.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-40,-38.5,830,858.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-210,-38.5,1220,858.6), rect, rect, rect, new cjs.Rectangle(-210,-38.5,1220,871.9), rect=new cjs.Rectangle(-210,-38.5,1220,888.6), rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-38.5,1220,890.1), new cjs.Rectangle(-210,-38.5,1220,921.6), new cjs.Rectangle(-210,-38.5,1220,953.1), new cjs.Rectangle(-210,-38.5,1220,984.6), new cjs.Rectangle(-210,-38.5,1220,1016.1), new cjs.Rectangle(-210,-38.5,1220,1047.6), new cjs.Rectangle(-210,-38.5,1220,1079.1), new cjs.Rectangle(-210,-38.5,1220,1110.6), new cjs.Rectangle(-210,-38.5,1220,1142.1), new cjs.Rectangle(-210,-38.5,1220,1173.6), new cjs.Rectangle(-210,-38.5,1220,1205.1), new cjs.Rectangle(-210,-38.5,1220,1236.6), new cjs.Rectangle(-210,-38.5,1220,1268.1), new cjs.Rectangle(-210,-38.5,1220,1299.6), new cjs.Rectangle(-210,-38.5,1220,1331.1), new cjs.Rectangle(-210,-38.5,1220,1362.6), new cjs.Rectangle(-210,-38.5,1220,1394.1), new cjs.Rectangle(-210,-38.5,1220,1425.6), new cjs.Rectangle(-210,-38.5,1220,1457.1), rect=new cjs.Rectangle(-210,-38.5,1220,1488.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,520,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(48).to({scaleX:0.84,scaleY:0.84,y:520},10).to({scaleX:0.74,scaleY:0.74},5).wait(15).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(220,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:270},21).to({x:220},4).wait(30).to({x:-500},20).wait(101));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(580,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1300},0).wait(23).to({x:530},21).to({x:580},4).wait(40).to({x:403},20).wait(91));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(120,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(680,180,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(680,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(120,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},70).wait(130));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,27.4,778.6,742.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-708.5,27.4,2143.9,742.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-671.9,27.4,2070.7,742.7), new cjs.Rectangle(-635.2,27.4,1997.3,742.7), new cjs.Rectangle(-598.5,27.4,1924,742.7), new cjs.Rectangle(-561.9,27.4,1850.7,742.7), new cjs.Rectangle(-525.2,27.4,1777.3,742.7), new cjs.Rectangle(-488.5,27.4,1704,742.7), new cjs.Rectangle(-451.9,27.4,1630.7,742.7), new cjs.Rectangle(-415.2,27.4,1557.3,742.7), new cjs.Rectangle(-378.5,27.4,1484,742.7), new cjs.Rectangle(-341.9,27.4,1410.7,742.7), new cjs.Rectangle(-305.2,27.4,1337.3,742.7), new cjs.Rectangle(-268.5,27.4,1264,742.7), new cjs.Rectangle(-231.9,27.4,1190.7,742.7), new cjs.Rectangle(-195.2,27.4,1117.3,742.7), new cjs.Rectangle(-158.5,27.4,1044,742.7), new cjs.Rectangle(-121.9,27.4,970.7,742.7), new cjs.Rectangle(-85.2,27.4,897.3,742.7), new cjs.Rectangle(-48.5,27.4,838.6,742.7), new cjs.Rectangle(-11.9,27.4,801.9,742.7), new cjs.Rectangle(24.8,27.4,765.2,742.7), new cjs.Rectangle(61.5,27.4,728.6,742.7), new cjs.Rectangle(49,27.4,741.1,742.7), new cjs.Rectangle(36.5,27.4,753.6,742.7), new cjs.Rectangle(24,27.4,766.1,742.7), new cjs.Rectangle(11.5,27.4,778.6,742.7), new cjs.Rectangle(11.5,27.4,779.6,742.7), new cjs.Rectangle(11.5,27.4,780.6,742.7), new cjs.Rectangle(11.5,27.4,781.6,742.7), new cjs.Rectangle(11.5,27.4,782.5,742.7), new cjs.Rectangle(11.5,27.4,783.4,742.7), new cjs.Rectangle(11.5,27.4,784.5,742.7), new cjs.Rectangle(11.5,27.4,785.5,742.7), new cjs.Rectangle(11.5,27.4,786.5,742.7), new cjs.Rectangle(11.5,27.4,787.5,742.7), new cjs.Rectangle(11.5,27.4,788.6,742.7), new cjs.Rectangle(11.5,27.4,786.5,742.7), new cjs.Rectangle(11.5,27.4,784.5,742.7), new cjs.Rectangle(11.5,27.4,782.6,742.7), new cjs.Rectangle(11.5,27.4,780.6,742.7), rect=new cjs.Rectangle(11.5,27.4,778.6,742.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-24.5,27.4,814.6,742.7), new cjs.Rectangle(-60.5,27.4,850.6,742.7), new cjs.Rectangle(-96.5,27.4,886.6,742.7), new cjs.Rectangle(-132.5,27.4,922.6,742.7), new cjs.Rectangle(-168.5,27.4,958.6,742.7), new cjs.Rectangle(-204.5,27.4,994.6,742.7), new cjs.Rectangle(-240.5,27.4,1030.6,742.7), new cjs.Rectangle(-276.5,27.4,1066.6,742.7), new cjs.Rectangle(-312.5,27.4,1102.6,742.7), new cjs.Rectangle(-348.5,-10,1358.6,780), new cjs.Rectangle(-384.5,-10,1394.6,780), new cjs.Rectangle(-420.5,-10,1430.6,780), new cjs.Rectangle(-456.5,-10,1466.6,780), new cjs.Rectangle(-492.5,-10,1502.6,780), new cjs.Rectangle(-528.5,-10,1538.6,780), new cjs.Rectangle(-564.5,-10,1574.6,780), new cjs.Rectangle(-600.5,-10,1610.6,780), new cjs.Rectangle(-636.5,-10,1646.6,780), new cjs.Rectangle(-672.5,-10,1682.6,780), rect=new cjs.Rectangle(-708.5,-10,1718.6,780), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,530,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:800},0).wait(58).to({regX:0.2,regY:0.1,scaleX:0.84,scaleY:0.84,x:400.2,y:480.1},11).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:400,y:530},4).wait(15).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:400.1,y:800},15).wait(96));

	// decor
	this.instance = new lib.snowflake_flashing_mc();
	this.instance.setTransform(100,440,0.833,0.833,-90);

	this.instance_1 = new lib.snowflake_flashing_mc();
	this.instance_1.setTransform(710,260,0.833,0.833);

	this.instance_2 = new lib.snowflake_flashing_mc();
	this.instance_2.setTransform(660,440,1,1,-90);

	this.instance_3 = new lib.snowflake_flashing_mc();
	this.instance_3.setTransform(20,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},80).wait(120));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(400,370);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(38).to({y:320},16).to({y:370},4).wait(40).to({y:1000},20).wait(81));

	// hero
	this.hero_1 = new lib.hero_for_makeup_mc();
	this.hero_1.setTransform(395,250);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-600},0).wait(18).to({x:440},16).to({x:395},4).wait(161));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},20).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-30.5,780,850.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-915,-30.5,1705,1480.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-850,-30.5,1640,1480.6), new cjs.Rectangle(-785,-30.5,1575,1480.6), new cjs.Rectangle(-720,-30.5,1510,1480.6), new cjs.Rectangle(-655,-30.5,1445,1480.6), new cjs.Rectangle(-590,-30.5,1380,1480.6), new cjs.Rectangle(-525,-30.5,1315,1480.6), new cjs.Rectangle(-460,-30.5,1250,1480.6), new cjs.Rectangle(-395,-30.5,1185,1480.6), new cjs.Rectangle(-330,-30.5,1120,1480.6), new cjs.Rectangle(-265,-30.5,1055,1480.6), new cjs.Rectangle(-200,-30.5,990,1480.6), new cjs.Rectangle(-135,-30.5,925,1480.6), new cjs.Rectangle(-70,-30.5,860,1480.6), new cjs.Rectangle(-5,-30.5,795,1480.6), rect=new cjs.Rectangle(10,-30.5,780,1480.6), rect, rect, rect, rect, rect, new cjs.Rectangle(10,-30.5,780,1438.1), new cjs.Rectangle(10,-30.5,780,1395.6), new cjs.Rectangle(10,-30.5,780,1353.1), new cjs.Rectangle(10,-30.5,780,1310.6), new cjs.Rectangle(10,-30.5,780,1268.1), new cjs.Rectangle(10,-30.5,780,1225.6), new cjs.Rectangle(10,-30.5,780,1183.1), new cjs.Rectangle(10,-30.5,780,1140.6), new cjs.Rectangle(10,-30.5,780,1098.1), new cjs.Rectangle(10,-30.5,780,1055.6), new cjs.Rectangle(10,-30.5,780,1013.1), new cjs.Rectangle(10,-30.5,780,970.6), new cjs.Rectangle(10,-30.5,780,928.1), rect=new cjs.Rectangle(10,-30.5,780,900.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-30.5,780,872.3), rect=new cjs.Rectangle(10,-30.5,780,850.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-40,-30.5,830,850.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-30.5,1220,850.6), new cjs.Rectangle(-210,-30.5,1220,882.1), new cjs.Rectangle(-210,-30.5,1220,913.6), new cjs.Rectangle(-210,-30.5,1220,945.1), new cjs.Rectangle(-210,-30.5,1220,976.6), new cjs.Rectangle(-210,-30.5,1220,1008.1), new cjs.Rectangle(-210,-30.5,1220,1039.6), new cjs.Rectangle(-210,-30.5,1220,1071.1), new cjs.Rectangle(-210,-30.5,1220,1102.6), new cjs.Rectangle(-210,-30.5,1220,1134.1), new cjs.Rectangle(-210,-30.5,1220,1165.6), new cjs.Rectangle(-210,-30.5,1220,1197.1), new cjs.Rectangle(-210,-30.5,1220,1228.6), new cjs.Rectangle(-210,-30.5,1220,1260.1), new cjs.Rectangle(-210,-30.5,1220,1291.6), new cjs.Rectangle(-210,-30.5,1220,1323.1), new cjs.Rectangle(-210,-30.5,1220,1354.6), new cjs.Rectangle(-210,-30.5,1220,1386.1), new cjs.Rectangle(-210,-30.5,1220,1417.6), new cjs.Rectangle(-210,-30.5,1220,1449.1), rect=new cjs.Rectangle(-210,-30.5,1220,1480.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(160,550);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_mc();
	this.snowfall_comp.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.quest_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_9_mc();

	this.frame_2_mc = new lib.quest_2_9_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,-329.4,778.6,1099.4);
p.frameBounds = [rect, new cjs.Rectangle(-95,-329.4,892.8,1129.4)];


(lib.quest_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,780,1149.4);
p.frameBounds = [rect];


(lib.quest_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_7_mc();

	this.frame_2_mc = new lib.quest_2_7_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,-329.4,778.6,1099.4);
p.frameBounds = [rect, new cjs.Rectangle(-95,-329.4,883,1129.4)];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,780,1149.4);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.frame_2_mc = new lib.quest_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,-329.4,778.6,1099.4);
p.frameBounds = [rect, new cjs.Rectangle(-95,-329.4,923.2,1129.4)];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,780,1149.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.frame_2_mc = new lib.quest_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.5,-329.4,778.6,1099.4);
p.frameBounds = [rect, new cjs.Rectangle(-95,-329.4,830.4,1129.4)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-329.4,780,1149.4);
p.frameBounds = [rect];


(lib.LocationScreen_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	// body
	this.body_mc = new lib.quest_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
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

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.CartoonScreen();

	this.instance_4 = new lib.SelectionScreen();

	this.instance_5 = new lib.LocationScreen_1();

	this.instance_6 = new lib.LocationScreen_2();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_3();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_4();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_5();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_6();

	this.instance_11 = new lib.LocationScreen_7();
	this.instance_11.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_12 = new lib.LocationScreen_8();

	this.instance_13 = new lib.LocationScreen_9();
	this.instance_13.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_14 = new lib.RedirectScreen();

	this.instance_15 = new lib.ResultScreen();

	this.instance_16 = new lib.InstructionScreen();

	this.instance_17 = new lib.Glitter_2();
	this.instance_17.setTransform(500,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_18 = new lib.FlashAnimation();
	this.instance_18.setTransform(150,280);

	this.instance_19 = new lib.TrackMove_2();
	this.instance_19.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_20 = new lib.TrackMove();
	this.instance_20.setTransform(270,50);

	this.instance_21 = new lib.Cursor();
	this.instance_21.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_22 = new lib.OrientationLockScreen();

	this.instance_23 = new lib.CurtainScreen();

	this.instance_24 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_21},{t:this.instance_20},{t:this.gravity_explosion_comp},{t:this.instance_19},{t:this.instance_18},{t:this.next_btn},{t:this.instance_17}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[]},1).to({state:[{t:this.instance_24}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1281.9), rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect, rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,760), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-15,815,445), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,256.5,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;