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
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[717,0,481,692],[0,0,715,623],[0,625,600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,483,686],[602,528,407,767],[0,688,600,526],[602,0,600,526]]},
		{name:"storage_atlas_6", frames: [[0,0,423,729],[0,731,1200,200],[425,0,440,570]]},
		{name:"storage_atlas_7", frames: [[0,0,467,504],[856,0,301,623],[469,0,385,493],[0,506,640,280],[642,625,640,280],[0,788,350,500]]},
		{name:"storage_atlas_8", frames: [[908,302,343,430],[502,704,373,395],[0,0,325,538],[0,947,500,300],[406,402,500,300],[729,0,500,300],[0,540,404,405],[327,0,400,400],[877,734,380,380]]},
		{name:"storage_atlas_9", frames: [[0,909,366,360],[0,382,251,525],[382,0,311,377],[368,785,290,379],[253,382,293,401],[957,319,233,420],[548,422,380,260],[695,0,260,420],[660,684,240,400],[902,741,240,400],[957,0,317,317],[0,0,380,380]]},
		{name:"storage_atlas_10", frames: [[962,804,229,394],[968,402,240,400],[968,0,240,400],[0,402,240,400],[0,0,240,400],[242,402,240,400],[484,402,240,400],[726,402,240,400],[242,0,240,400],[726,0,240,400],[484,0,240,400],[0,804,236,400],[600,804,360,260],[238,804,360,260]]},
		{name:"storage_atlas_11", frames: [[0,0,300,300],[0,302,300,300],[604,302,191,464],[985,622,263,281],[964,905,248,293],[906,0,296,296],[797,302,186,437],[985,298,237,322],[302,0,300,300],[0,604,300,300],[302,302,300,300],[604,0,300,300],[302,604,300,300],[0,906,300,300],[302,906,660,130],[302,1170,660,130],[302,1038,660,130]]},
		{name:"storage_atlas_12", frames: [[756,0,232,209],[868,211,286,153],[990,0,286,151],[903,366,286,149],[363,1128,308,165],[0,1010,531,116],[1061,517,172,237],[169,637,186,326],[529,559,181,271],[712,507,189,245],[691,225,175,280],[1061,756,174,233],[282,373,229,259],[0,0,172,393],[895,754,164,261],[513,274,176,283],[534,0,220,223],[343,0,189,272],[357,634,170,327],[0,395,280,240],[174,0,167,371],[0,637,167,371],[969,1017,181,236],[529,832,364,131],[533,965,320,140],[673,1107,294,150],[0,1128,361,141]]},
		{name:"storage_atlas_13", frames: [[503,192,190,190],[0,893,180,180],[190,362,256,146],[669,0,190,190],[190,510,342,108],[467,0,200,190],[1083,169,170,190],[0,534,186,195],[182,893,180,180],[202,232,299,128],[593,942,151,199],[726,384,163,214],[364,950,143,207],[296,0,169,230],[188,1075,126,225],[954,938,146,193],[891,372,151,221],[0,137,200,193],[1110,554,161,179],[0,731,220,160],[782,777,170,180],[534,384,190,190],[746,1133,214,128],[316,1159,340,80],[222,620,186,188],[887,192,194,178],[593,769,187,171],[0,1075,186,159],[534,576,190,190],[861,0,190,190],[695,192,190,190],[1044,372,180,180],[928,595,180,180],[746,959,171,157],[1102,938,171,157],[962,1133,171,157],[410,768,181,180],[954,777,184,159],[726,600,200,167],[1053,0,200,167],[0,332,188,200],[0,0,294,135]]},
		{name:"storage_atlas_14", frames: [[823,745,120,120],[701,745,120,120],[272,1198,296,64],[462,1060,296,55],[367,1003,300,55],[272,1081,188,115],[362,246,273,83],[346,62,280,90],[362,154,273,90],[224,416,273,83],[224,331,273,83],[224,501,273,83],[1080,582,120,120],[570,1173,120,120],[416,780,140,120],[122,586,200,112],[0,995,200,120],[102,318,120,190],[626,693,297,50],[692,1173,120,120],[0,582,120,217],[499,331,129,175],[0,318,100,262],[945,665,100,135],[324,586,200,110],[701,867,120,120],[823,867,120,120],[882,989,120,120],[760,989,120,120],[1080,366,138,106],[1080,474,138,106],[814,1111,120,120],[122,700,280,80],[558,780,141,118],[788,0,378,64],[462,1117,287,54],[404,698,220,80],[0,801,133,192],[630,338,150,142],[1028,366,50,297],[173,159,187,132],[526,508,140,140],[782,338,140,140],[853,498,120,120],[668,482,183,103],[839,229,196,106],[1037,229,151,135],[202,945,163,134],[1058,1070,167,81],[936,1111,120,120],[173,0,171,157],[0,0,171,157],[0,159,171,157],[1054,66,137,161],[776,66,137,161],[637,62,137,161],[277,782,137,161],[915,66,137,161],[133,1117,137,161],[346,0,440,60],[416,902,168,99],[668,587,171,104],[1058,1153,171,79],[0,1117,131,180],[135,782,140,159],[637,229,200,107],[1126,948,120,120],[1058,704,120,120],[1004,948,120,120],[1180,704,120,120],[945,826,120,120],[1067,826,120,120],[1193,0,60,257],[924,337,102,159]]},
		{name:"storage_atlas_15", frames: [[1055,353,84,118],[888,354,79,94],[1160,229,79,136],[968,479,84,111],[519,557,74,103],[198,510,109,75],[1000,719,69,67],[798,563,101,70],[356,748,73,55],[603,754,55,47],[1268,124,13,59],[1283,124,8,66],[634,704,118,48],[987,668,118,49],[867,657,118,49],[514,662,118,49],[1107,668,118,49],[288,693,118,49],[93,793,80,30],[892,761,50,50],[309,510,90,90],[401,557,116,66],[288,744,66,66],[978,194,43,29],[1233,632,51,117],[1256,515,40,85],[791,199,53,87],[175,652,69,86],[0,711,39,120],[726,498,70,122],[41,741,90,50],[133,741,90,50],[1048,811,75,25],[736,810,75,27],[1175,805,76,27],[1226,441,74,28],[356,805,79,29],[609,163,75,33],[996,788,50,50],[540,770,50,50],[944,761,50,50],[488,770,50,50],[225,801,48,48],[175,793,48,48],[901,592,108,63],[198,587,108,63],[411,692,100,54],[165,324,146,72],[831,0,153,87],[0,263,105,58],[798,498,133,63],[595,593,105,64],[973,353,80,124],[978,229,180,60],[117,262,180,60],[299,262,180,60],[609,267,180,60],[978,291,180,60],[791,292,180,60],[1011,636,220,30],[519,389,40,40],[515,163,92,122],[1152,121,114,106],[1036,121,114,106],[698,754,36,71],[660,754,36,71],[415,389,102,26],[349,230,102,26],[513,713,88,55],[84,684,88,55],[754,716,121,40],[877,719,121,40],[233,157,114,103],[117,157,114,103],[1244,751,50,52],[1192,751,50,52],[113,482,83,104],[1141,367,83,104],[0,636,82,73],[784,635,81,79],[1071,719,119,38],[0,0,87,155],[89,0,87,155],[178,0,87,155],[267,0,87,155],[356,0,87,155],[445,0,87,155],[431,748,55,55],[986,67,20,20],[592,803,40,55],[634,659,40,43],[1027,67,10,11],[104,588,69,94],[1153,557,100,73],[415,324,57,60],[787,354,99,100],[1273,84,23,38],[933,498,31,31],[41,793,50,50],[246,652,40,147],[1241,229,50,210],[583,329,100,100],[685,329,100,100],[700,0,129,104],[479,822,40,40],[275,812,40,40],[1011,592,40,40],[1125,811,40,40],[437,805,40,40],[1253,805,40,40],[855,813,40,40],[939,813,40,40],[897,813,40,40],[813,813,40,40],[1008,67,17,16],[453,230,42,25],[861,121,173,71],[702,622,80,80],[840,761,50,50],[788,758,50,50],[1071,759,50,50],[1123,759,50,50],[736,758,50,50],[861,194,115,96],[308,625,101,66],[609,199,164,66],[1188,0,105,82],[534,0,164,82],[1054,557,97,77],[534,84,161,77],[603,515,103,76],[697,121,162,76],[411,625,101,65],[0,324,163,65],[0,563,102,71],[349,157,164,71],[0,157,115,104],[0,482,111,79],[986,0,200,65],[831,89,440,30],[726,456,240,40],[242,468,240,40],[484,473,240,40],[1055,473,240,40],[484,431,240,40],[0,440,240,40],[242,426,240,40],[0,398,240,40],[401,515,200,40],[1054,515,200,40],[313,324,100,100],[481,287,100,100]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arr1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.arr2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_body_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_head_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.barbie_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.barbie_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.barbie_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.barbie_star_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.blesk_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.body_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body_makeup_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.broken_egg1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.broken_egg2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.butter1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.butter2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.butter3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_blush_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_lips_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.check_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.clock_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cook3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cream1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cream2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cream3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cream4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.dress14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress17_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.dress18_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress18b_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.dress19_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress19b_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress1b_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress20_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress3b_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress5b_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.egg_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eggs_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flour1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.flour_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.front_room_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.glazur1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glazur2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.glow_location_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hand_cursor_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hand_kursor_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hat7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hint_quest_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hint_quest_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hint_quest_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hint_quest_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hint_quest_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.item10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.item11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.item12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.item13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.item13shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.item14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.item14shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.item15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.item15shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.item16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.item16shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.item18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.item18shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.item1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.item1shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.item2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.item2shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.item3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.item3shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.item5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.item5shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.item7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.item8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.item9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.line1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.line2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.lipstik1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lipstik2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lipstik3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lipstik4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lipstik5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lipstik6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.m1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.m2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.maneken1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.maneken2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.mini_room_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.plate_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.plita1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.plita4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.posipka1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.posipka2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.posuda2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.protiven1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.protiven2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.rum1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.rum2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.rum3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.rum4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.rum5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.rum6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.sh1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.sh2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.sh3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.sh4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.sh5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.sh6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.shoes10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.shoes10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.shoes11_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.shoes11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.shoes5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.shoes7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.shoes7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.shoes8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.shoes8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.shoes9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.shoes9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.shugar1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.shugar2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.sovok1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.sovok2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.spoon_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.spoon_inv_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tort_got_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.tort_sir_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-160,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-70,320,140);
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


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_img();
	this.instance.setTransform(-220,-285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-285,440,570);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-175,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-250,350,500);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-181,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181,-71,361,141);
p.frameBounds = [rect];


(lib.tort_got_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tort_got_img();
	this.instance.setTransform(-116.3,-59.3,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.3,-59.3,232.6,118.7);
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


(lib.target_part_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item5shadow_img();
	this.instance.setTransform(-41.5,-52);

	this.instance_1 = new lib.item5_img();
	this.instance_1.setTransform(-42,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHuQjMjMgBkiQABkgDMjOQDOjMEgAAQEhAADODMQDMDOABEgQgBEijMDMQjODOkhgBQkgABjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.target_part_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2shadow_img();
	this.instance.setTransform(-57,-51.5);

	this.instance_1 = new lib.item2_img();
	this.instance_1.setTransform(-57,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Am4G5Qi4i2ABkDQgBkBC4i4QC2i2ECAAQEDAAC2C2QC4C4gBEBQABEDi4C2Qi2C4kDgBQkCABi2i4g");
	this.shape.setTransform(-3,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-63.5,125,125);
p.frameBounds = [rect, rect];


(lib.target_part_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1shadow_img();
	this.instance.setTransform(-83.5,-185.5);

	this.instance_1 = new lib.item1_img();
	this.instance_1.setTransform(-84,-186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvRbAMAUdg6MIKGB3MgEJA8ig");
	this.shape.setTransform(0.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-197.5,195.8,399.5);
p.frameBounds = [rect, rect];


(lib.target_part_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item13shadow_img();
	this.instance.setTransform(-57,-53);

	this.instance_1 = new lib.item13_img();
	this.instance_1.setTransform(-57,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnKHLQi+i+AAkNQAAkLC+i/QC+i/EMABQENgBC+C/QC/C/gBELQABENi/C+Qi+C/kNgBQkMABi+i/g");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-65,130,130);
p.frameBounds = [rect, rect];


(lib.target_part_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item14shadow_img();
	this.instance.setTransform(-18,-35.5);

	this.instance_1 = new lib.item14_img();
	this.instance_1.setTransform(-18,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFiQiTiUAAjOQAAjOCTiSQCTiTDNAAQDOAACTCTQCTCSAADOQAADOiTCUQiTCSjOgBQjNABiTiSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect];


(lib.target_part_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item15shadow_img();
	this.instance.setTransform(-51,-13);

	this.instance_1 = new lib.item15_img();
	this.instance_1.setTransform(-51,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXGPIAAsdISvAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect, rect];


(lib.target_part_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item18shadow_img();
	this.instance.setTransform(-60.5,-20);

	this.instance_1 = new lib.item18_img();
	this.instance_1.setTransform(-60.5,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnKHLQi/i/ABkMQgBkLC/i/QC/i/ELABQEMgBC/C/QC/C/gBELQABEMi/C/Qi/C/kMgBQkLABi/i/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, rect];


(lib.target_part_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item3shadow_img();
	this.instance.setTransform(-25,-26);

	this.instance_1 = new lib.item3_img();
	this.instance_1.setTransform(-25,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ak8E9QiFiDAAi6QAAi5CFiEQCDiEC5AAQC6AACDCEQCECEABC5QgBC6iECDQiDCEi6ABQi5gBiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect];


(lib.target_part_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item16shadow_img();
	this.instance.setTransform(-44,-27.5);

	this.instance_1 = new lib.item16_img();
	this.instance_1.setTransform(-44,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_img();
	this.instance.setTransform(-94,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-100,188,200);
p.frameBounds = [rect];


(lib.stick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_img();
	this.instance.setTransform(-220,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-15,440,30);
p.frameBounds = [rect];


(lib.spoon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spoon_img();
	this.instance.setTransform(-40,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-171,60,257);
p.frameBounds = [rect];


(lib.spoon_inv_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spoon_inv_img();
	this.instance.setTransform(-51,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-79.5,102,159);
p.frameBounds = [rect];


(lib.sovok2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sovok2_img();
	this.instance.setTransform(-100,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-83.5,200,167);
p.frameBounds = [rect];


(lib.sovok1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sovok1_img();
	this.instance.setTransform(-100,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-83.5,200,167);
p.frameBounds = [rect];


(lib.shugar2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shugar2_img();
	this.instance.setTransform(-100,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-32.5,200,65);
p.frameBounds = [rect];


(lib.shugar1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shugar1_img();
	this.instance.setTransform(-74.8,-40,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-40,149.8,80.1);
p.frameBounds = [rect];


(lib.shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shoes1_img();
	this.instance.setTransform(-82,-41);

	this.instance_1 = new lib.shoes2_img();
	this.instance_1.setTransform(-79.9,-34);

	this.instance_2 = new lib.shoes3_img();
	this.instance_2.setTransform(-81,-33);

	this.instance_3 = new lib.shoes4_img();
	this.instance_3.setTransform(-83.5,-24);

	this.instance_4 = new lib.shoes5_img();
	this.instance_4.setTransform(-84,-33.5);

	this.instance_5 = new lib.shoes6_img();
	this.instance_5.setTransform(-80.5,-66.5);

	this.instance_6 = new lib.shoes7_img();
	this.instance_6.setTransform(-84,-38.5);

	this.instance_7 = new lib.shoes8_img();
	this.instance_7.setTransform(-83.5,-132);

	this.instance_8 = new lib.shoes9_img();
	this.instance_8.setTransform(-84.5,-117);

	this.instance_9 = new lib.shoes10_img();
	this.instance_9.setTransform(-85,-43.5);

	this.instance_10 = new lib.shoes11_img();
	this.instance_10.setTransform(-80,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-41,164,82);
p.frameBounds = [rect, new cjs.Rectangle(-79.9,-34,161,77), new cjs.Rectangle(-81,-33,162,76), new cjs.Rectangle(-83.5,-24,163,65), new cjs.Rectangle(-84,-33.5,164,71), new cjs.Rectangle(-80.5,-66.5,171,104), new cjs.Rectangle(-84,-38.5,171,79), new cjs.Rectangle(-83.5,-132,181,180), new cjs.Rectangle(-84.5,-117,184,159), new cjs.Rectangle(-85,-43.5,168,99), new cjs.Rectangle(-80,-27,164,66), null];


(lib.shoes_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes11_2_img();
	this.instance.setTransform(-51,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shoes_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes10_2_img();
	this.instance.setTransform(57,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqdG3IBqvXILjgSIHuN4IhWCfIxtBOg");
	this.shape.setTransform(0.6,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-59,134.1,112.8);
p.frameBounds = [rect];


(lib.shoes_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes9_2_img();
	this.instance.setTransform(70,-80,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoLMhIkE2AIBWioIM8hvID5DlIGUV4IhWBvIw3Ahg");
	this.shape.setTransform(-0.5,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-90.8,157,177.6);
p.frameBounds = [rect];


(lib.shoes_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes8_2_img();
	this.instance.setTransform(65,-90,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AojORIjA7lIPJiQIH+bdIgrDsg");
	this.shape.setTransform(-0.4,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.4,-102.6,148,199.5);
p.frameBounds = [rect];


(lib.shoes_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes7_2_img();
	this.instance.setTransform(-56,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shoes_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes6_2_img();
	this.instance.setTransform(57,-52,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqOn9IPBhdIFcPwIhMC3IymAOg");
	this.shape.setTransform(2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-60.5,131.1,120.8);
p.frameBounds = [rect];


(lib.shoes_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes5_2_img();
	this.instance.setTransform(-51,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shoes_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes4_2_img();
	this.instance.setTransform(50,-33,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApOCeID9pdIHcgDIHEJ4IhDDfIviAtg");
	this.shape.setTransform(-1.2,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.4,-49.8,118.4,90.2);
p.frameBounds = [rect];


(lib.shoes_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes3_2_img();
	this.instance.setTransform(-52,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shoes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes2_2_img();
	this.instance.setTransform(-49,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shoes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes1_2_img();
	this.instance.setTransform(-53,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXHCIAAuCISvAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-220,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-30,440,60);
p.frameBounds = [rect];


(lib.shadow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-194,240,400);
p.frameBounds = [rect];


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


(lib.protiven1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.protiven1_img();
	this.instance.setTransform(-206,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206,-125.5,317,317);
p.frameBounds = [rect];


(lib.posipka2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.posipka2_img();
	this.instance.setTransform(-21,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-12.5,42,25);
p.frameBounds = [rect];


(lib.posipka1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.posipka1_img();
	this.instance.setTransform(-8.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-8,17,16);
p.frameBounds = [rect];


(lib.pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_cursor_1_2_img();
	this.instance.setTransform(-95,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-136,189,272);
p.frameBounds = [rect];


(lib.plita4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plita4_img();
	this.instance.setTransform(-226,-198.2,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-198.2,452.1,396.4);
p.frameBounds = [rect];


(lib.plita1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plita1_img();
	this.instance.setTransform(-226,-198.2,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-198.2,452.1,396.4);
p.frameBounds = [rect];


(lib.plate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plate_img();
	this.instance.setTransform(-202,-202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202,-202.5,404,405);
p.frameBounds = [rect];


(lib.p3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tort_got_img();
	this.instance.setTransform(-146,-98.6);

	this.instance_1 = new lib.protiven2_img();
	this.instance_1.setTransform(-182,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-98.6,364,181.6);
p.frameBounds = [rect];


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tort_sir_img();
	this.instance.setTransform(-146,-83);

	this.instance_1 = new lib.protiven2_img();
	this.instance_1.setTransform(-182,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-83,364,166);
p.frameBounds = [rect];


(lib.object_23_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A7DbEQrNrOAAv2QAAv1LNrOQLOrNP1AAQP2AALOLNQLNLOAAP1QAAP2rNLOQrOLNv2AAQv1AArOrNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.object_21_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtPNPQlfleAAnxQAAnwFflfQFflfHwAAQHxAAFfFfQFfFfAAHwQAAHxlfFeQlfFgnxAAQnwAAlflgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_19_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArwLxQk3k4AAm5QAAm4E3k4QE4k3G4AAQG5AAE4E3QE3E4AAG4QAAG5k3E4Qk4E3m5AAQm4AAk4k3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-106.5,213,213);
p.frameBounds = [rect];


(lib.object_17_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArlLlQk0kyAAmzQAAmxE0k0QE0k0GxAAQGzAAEyE0QE1E0AAGxQAAGzk1EyQkyE1mzAAQmxAAk0k1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-105,210,210);
p.frameBounds = [rect];


(lib.object_13_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AssMsQlQlRAAnbQAAnbFQlRQFRlRHbAAQHbAAFRFRQFRFRAAHbQAAHblRFRQlRFSnbAAQnbAAlRlSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.9,-115,230,230);
p.frameBounds = [rect];


(lib.object_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A6gagQq/q+AAviQAAvhK/q/QK/q/PhAAQPiAAK/K/QK/K/AAPhQAAPiq/K+Qq/LAviAAQvhAAq/rAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-240,480,480);
p.frameBounds = [rect];


(lib.object_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A7mbnQrdrcAAwLQAAwKLdrdQLcrbQKAAQQMAALbLbQLcLdABQKQgBQLrcLcQrbLcwMAAQwKAArcrcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-250,500,500);
p.frameBounds = [rect];


(lib.object_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgglAgmQtgtgAAzGQAAzFNgtgQNgtgTFAAQTGAANgNgQNgNgAATFQAATGtgNgQtgNgzGAAQzFAAtgtgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-295,590,590);
p.frameBounds = [rect];


(lib.object_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgjaANKQk0k0AAmzQAAmwE0kzQE0k0GyAAQGzAAE0E0QE0EzAAGwQAAGzk0E0Qk0E0mzAAQmyAAk0k0gAMOKCQk0k0AAmxQAAmyE0kzQE0k1GzAAQGyAAE0E1QE0EzAAGyQAAGxk0E0Qk0E0myAAQmzAAk0k0g");
	this.shape.setTransform(-152.5,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-105,515,230);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtPNPQlfleAAnxQAAnwFflfQFflfHwAAQHxAAFeFfQFgFfAAHwQAAHxlgFeQleFgnxAAQnwAAlflgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArULUQksksAAmoQAAmnEsktQEtksGnAAQGoAAEsEsQEsEtABGnQgBGoksEsQksEsmoABQmngBktksg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-102.5,205,205);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.necklace1_img();
	this.instance.setTransform(-91.5,-51.5);

	this.instance_1 = new lib.necklace2_img();
	this.instance_1.setTransform(-101,-49);

	this.instance_2 = new lib.necklace3_img();
	this.instance_2.setTransform(-61,-60);

	this.instance_3 = new lib.necklace4_img();
	this.instance_3.setTransform(-72,-58);

	this.instance_4 = new lib.necklace5_img();
	this.instance_4.setTransform(-79,-62);

	this.instance_5 = new lib.necklace6_img();
	this.instance_5.setTransform(-86,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-51.5,183,103);
p.frameBounds = [rect, new cjs.Rectangle(-101,-49,196,106), new cjs.Rectangle(-61,-60,129,104), new cjs.Rectangle(-72,-58,151,135), new cjs.Rectangle(-79,-62,163,134), new cjs.Rectangle(-86,-56,167,81), null];


(lib.n6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace6_img();
	this.instance.setTransform(-85.6,-100.5);

	this.instance_1 = new lib.maneken2_img();
	this.instance_1.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.n5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace5_img();
	this.instance.setTransform(-79.6,-104.6);

	this.instance_1 = new lib.maneken2_img();
	this.instance_1.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.n4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace4_img();
	this.instance.setTransform(-73.6,-101.5);

	this.instance_1 = new lib.maneken2_img();
	this.instance_1.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.n3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace3_img();
	this.instance.setTransform(-64,-97.6);

	this.instance_1 = new lib.maneken2_img();
	this.instance_1.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.n2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace2_img();
	this.instance.setTransform(-98,-90.6);

	this.instance_1 = new lib.maneken2_img();
	this.instance_1.setTransform(-87.3,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-118,196,236);
p.frameBounds = [rect];


(lib.n1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.necklace1_img();
	this.instance.setTransform(-91.5,-96.1);

	this.instance_1 = new lib.maneken2_img();
	this.instance_1.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-118,183,236);
p.frameBounds = [rect];


(lib.m2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m2_img();
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect];


(lib.m1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m1_img();
	this.instance.setTransform(-27.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-27.5,55,55);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.location_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_5_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_4_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_3_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_2_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_1_1_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_0_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.location_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.line2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.line2_img();
	this.instance.setTransform(-143.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.5,-27,287,54);
p.frameBounds = [rect];


(lib.line1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlwFUIAApNIAKAAIAAhaIBaAAIAAKng");
	var mask_graphics_1 = new cjs.Graphics().p("AlwFUIAApNIARAAIAAhaICaAAIAAKng");
	var mask_graphics_2 = new cjs.Graphics().p("AlwFUIAApNIAZAAIAAhaIDZAAIAAKng");
	var mask_graphics_3 = new cjs.Graphics().p("AlwFUIAApNIAgAAIAAhaIEZAAIAAKng");
	var mask_graphics_4 = new cjs.Graphics().p("AlwFUIAApNIAnAAIAAhaIFXAAIAAKng");
	var mask_graphics_5 = new cjs.Graphics().p("AlwFUIAApNIAvAAIAAhaIGWAAIAAKng");
	var mask_graphics_6 = new cjs.Graphics().p("AlwFUIAApNIA2AAIAAhaIHWAAIAAKng");
	var mask_graphics_7 = new cjs.Graphics().p("AlwFUIAApNIA+AAIAAhaIIVAAIAAKng");
	var mask_graphics_8 = new cjs.Graphics().p("AlwFUIAApNIBFAAIAAhaIJVAAIAAKng");
	var mask_graphics_9 = new cjs.Graphics().p("AlwFUIAApNIBMAAIAAhaIKVAAIAAKng");
	var mask_graphics_10 = new cjs.Graphics().p("AmUFUIAApNIBUAAIAAhaILVAAIAAKng");
	var mask_graphics_11 = new cjs.Graphics().p("Am3FUIAApNIBbAAIAAhaIMUAAIAAKng");
	var mask_graphics_12 = new cjs.Graphics().p("AnbFUIAApNIBjAAIAAhaINUAAIAAKng");
	var mask_graphics_13 = new cjs.Graphics().p("An+FUIAApNIBqAAIAAhaIOTAAIAAKng");
	var mask_graphics_14 = new cjs.Graphics().p("AoiFUIAApNIByAAIAAhaIPTAAIAAKng");
	var mask_graphics_15 = new cjs.Graphics().p("ApFFUIAApNIB4AAIAAhaIQTAAIAAKng");
	var mask_graphics_16 = new cjs.Graphics().p("AppFUIAApNICAAAIAAhaIRTAAIAAKng");
	var mask_graphics_17 = new cjs.Graphics().p("AqMFUIAApNICHAAIAAhaISSAAIAAKng");
	var mask_graphics_18 = new cjs.Graphics().p("AqwFUIAApNICPAAIAAhaITSAAIAAKng");
	var mask_graphics_19 = new cjs.Graphics().p("ArTFUIAApNICWAAIAAhaIURAAIAAKng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-37,y:1}).wait(1).to({graphics:mask_graphics_1,x:-37,y:1}).wait(1).to({graphics:mask_graphics_2,x:-37,y:1}).wait(1).to({graphics:mask_graphics_3,x:-37,y:1}).wait(1).to({graphics:mask_graphics_4,x:-37,y:1}).wait(1).to({graphics:mask_graphics_5,x:-37,y:1}).wait(1).to({graphics:mask_graphics_6,x:-37,y:1}).wait(1).to({graphics:mask_graphics_7,x:-37,y:1}).wait(1).to({graphics:mask_graphics_8,x:-37,y:1}).wait(1).to({graphics:mask_graphics_9,x:-37,y:1}).wait(1).to({graphics:mask_graphics_10,x:-33.4,y:1}).wait(1).to({graphics:mask_graphics_11,x:-29.9,y:1}).wait(1).to({graphics:mask_graphics_12,x:-26.3,y:1}).wait(1).to({graphics:mask_graphics_13,x:-22.8,y:1}).wait(1).to({graphics:mask_graphics_14,x:-19.2,y:1}).wait(1).to({graphics:mask_graphics_15,x:-15.7,y:1}).wait(1).to({graphics:mask_graphics_16,x:-12.1,y:1}).wait(1).to({graphics:mask_graphics_17,x:-8.6,y:1}).wait(1).to({graphics:mask_graphics_18,x:-5,y:1}).wait(1).to({graphics:mask_graphics_19,x:-1.5,y:1}).wait(1));

	// Слой 1
	this.instance = new lib.line1_img();
	this.instance.setTransform(-67.5,-18.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-18.5,3.5,38);
p.frameBounds = [rect, new cjs.Rectangle(-67.5,-18.5,10.6,38), new cjs.Rectangle(-67.5,-18.5,17.8,38), new cjs.Rectangle(-67.5,-18.5,24.9,38), new cjs.Rectangle(-67.5,-18.5,31.9,38), new cjs.Rectangle(-67.5,-18.5,39.1,38), new cjs.Rectangle(-67.5,-18.5,46.2,38), new cjs.Rectangle(-67.5,-18.5,53.3,38), new cjs.Rectangle(-67.5,-18.5,60.4,38), new cjs.Rectangle(-67.5,-18.5,67.5,38), new cjs.Rectangle(-67.5,-18.5,74.6,38), new cjs.Rectangle(-67.5,-18.5,81.7,38), new cjs.Rectangle(-67.5,-18.5,88.8,38), new cjs.Rectangle(-67.5,-18.5,95.9,38), new cjs.Rectangle(-67.5,-18.5,103,38), new cjs.Rectangle(-67.5,-18.5,110.1,38), new cjs.Rectangle(-67.5,-18.5,117.2,38), rect=new cjs.Rectangle(-67.5,-18.5,119,38), rect, rect];


(lib.item12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item12_img();
	this.instance.setTransform(-107,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-64,214,128);
p.frameBounds = [rect];


(lib.item11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item11_img();
	this.instance.setTransform(-46,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-61,92,122);
p.frameBounds = [rect];


(lib.item10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item10_img();
	this.instance.setTransform(-70.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-59,141,118);
p.frameBounds = [rect];


(lib.item9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item9_img();
	this.instance.setTransform(-40.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-39.5,81,79);
p.frameBounds = [rect];


(lib.item8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item8_img();
	this.instance.setTransform(-41,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-36.5,82,73);
p.frameBounds = [rect];


(lib.item7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item7_img();
	this.instance.setTransform(-189,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189,-32,378,64);
p.frameBounds = [rect];


(lib.item2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item2_img();
	this.instance.setTransform(-41.7,-64.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0,x:-57,y:-51.5},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Am4G5Qi4i2ABkDQgBkBC4i4QC2i2ECAAQEDAAC2C2QC4C4gBEBQABEDi4C2Qi2C4kDgBQkCABi2i4g");
	this.shape.setTransform(-3,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.3,-64.4,136.8,129);
p.frameBounds = [rect, new cjs.Rectangle(-65.5,-63.5,125,125), null];


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


(lib.hk1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_kursor_img();
	this.instance.setTransform(-85,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-163.5,170,327);
p.frameBounds = [rect];


(lib.hint_quest_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.hint_quest_2_2_img();
	this.instance.setTransform(-330,-65);

	this.instance_1 = new lib.hint_quest_3_2_img();
	this.instance_1.setTransform(-330,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-65,660,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hint_quest_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_quest_1_2_img();
	this.instance.setTransform(-330,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-65,660,130);
p.frameBounds = [rect];


(lib.hint_quest_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_quest_2_1_img();
	this.instance.setTransform(-85,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-90,170,180);
p.frameBounds = [rect];


(lib.hint_quest_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_quest_1_1_img();
	this.instance.setTransform(-140,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-120,280,240);
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


(lib.headdress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat7_2_img();
	this.instance.setTransform(-69,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArFA9IAAhKIFZmaIG2iQIFFCWIE3G1IgRE5IltDrg");
	this.shape.setTransform(2.3,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-61,142.4,114.1);
p.frameBounds = [rect];


(lib.headdress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat6_img();
	this.instance.setTransform(-52.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXGPIAAsdISvAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.headdress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat5_img();
	this.instance.setTransform(-66.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.headdress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat4_img();
	this.instance.setTransform(-52.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXGPIAAsdISvAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.headdress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat3_img();
	this.instance.setTransform(-76.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtNDPIF+qMINqhUIGzIRIg1EhIjOCHIzNBqg");
	this.shape.setTransform(-1.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.3,-52.8,169.3,106.1);
p.frameBounds = [rect];


(lib.headdress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat2_img();
	this.instance.setTransform(-73,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ar/GiIgimXIIzm1IHVAAII7HmIiAFwg");
	this.shape.setTransform(3,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-44,160.5,85.6);
p.frameBounds = [rect];


(lib.headdress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-50,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXGPIAAsdISvAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.hat_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hat7_img();
	this.instance.setTransform(-69,-53);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-69,-53,138,106), null];


(lib.hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-50,-27);

	this.instance_1 = new lib.hat2_img();
	this.instance_1.setTransform(-67.5,-38.2);

	this.instance_2 = new lib.hat3_img();
	this.instance_2.setTransform(-68,-29.2);

	this.instance_3 = new lib.hat4_img();
	this.instance_3.setTransform(-44.4,-18.2);

	this.instance_4 = new lib.hat5_img();
	this.instance_4.setTransform(-58.5,-19.7);

	this.instance_5 = new lib.hat6_img();
	this.instance_5.setTransform(-46.4,-27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-27,100,54);
p.frameBounds = [rect, new cjs.Rectangle(-67.5,-38.2,146,72), new cjs.Rectangle(-68,-29.2,153,87), new cjs.Rectangle(-44.4,-18.2,105,58), new cjs.Rectangle(-58.5,-19.7,133,63), new cjs.Rectangle(-46.4,-27.2,105,64), rect=null, rect];


(lib.hanger2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-54,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-31.5,108,63);
p.frameBounds = [rect];


(lib.hanger1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-54,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-31.5,108,63);
p.frameBounds = [rect];


(lib.hand_cursor_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hand_cursor_1_2_img();
	this.instance.setTransform(-38,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-3,189,272);
p.frameBounds = [rect];


(lib.hairstyle8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe8_img();
	this.instance.setTransform(-55.2,-119,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyONLQnimCAAoiQgBmmGPq6MAlNgATQIGLNAAGmQAAIinjGCQnjGCqrAAQqqAAnkmCg");
	mask.setTransform(0,-41.4);

	// Слой 3
	this.instance_2 = new lib.barbie_hair8_img();
	this.instance_2.setTransform(-102.2,-155,0.4,0.4);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.2,-155,192.4,251);
p.frameBounds = [rect];


(lib.hairstyle7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe7_img();
	this.instance.setTransform(-67.2,-129,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyONLQnimCAAoiQgBmmGPq6MAlNgATQIGLNAAGmQAAIinjGCQnjGCqrAAQqqAAnkmCg");
	mask.setTransform(0,-41.4);

	// Слой 3
	this.instance_2 = new lib.barbie_hair7_img();
	this.instance_2.setTransform(-90.2,-123,0.4,0.4);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-129,169.2,249.2);
p.frameBounds = [rect];


(lib.hairstyle6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe6_img();
	this.instance.setTransform(-54.2,-117,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyONLQnimCAAoiQgBmmGPq6MAlNgATQIGLNAAGmQAAIinjGCQnjGCqrAAQqqAAnkmCg");
	mask.setTransform(0,-41.4);

	// Слой 3
	this.instance_2 = new lib.barbie_hair6_img();
	this.instance_2.setTransform(-89.2,-146,0.4,0.4);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-146,162.8,242);
p.frameBounds = [rect];


(lib.hairstyle5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe5_img();
	this.instance.setTransform(-76.2,-122,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-122,142.7,218);
p.frameBounds = [rect];


(lib.hairstyle4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe4_img();
	this.instance.setTransform(-58.2,-116,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-116,133,212);
p.frameBounds = [rect];


(lib.hairstyle3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe3_img();
	this.instance.setTransform(-109.2,-113,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.barbie_hair3_img();
	this.instance_2.setTransform(-66.2,-68,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.2,-113,186.8,209);
p.frameBounds = [rect];


(lib.hairstyle2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe2_img();
	this.instance.setTransform(-103.2,-111,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyOKIQnimCAAoiQAAmmEglIMAqgAAAQEiFIgBGmQAAIinjGCQnjGCqrAAQqqAAnkmCg");
	mask.setTransform(0,-21.9);

	// Слой 3
	this.instance_2 = new lib.barbie_hair2_img();
	this.instance_2.setTransform(-73.2,-56,0.4,0.4);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.2,-111,193.2,274.4);
p.frameBounds = [rect];


(lib.hairstyle1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe1_img();
	this.instance.setTransform(-81.2,-117,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.maneken1_img();
	this.instance_1.setTransform(-66.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.barbie_hair1_img();
	this.instance_2.setTransform(-56.2,-93,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.2,-117,147.7,213);
p.frameBounds = [rect];


(lib.glow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glow_location_img();
	this.instance.setTransform(-130,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect];


(lib.glazur2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glazur2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.glazur1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glazur1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glasses1_img();
	this.instance.setTransform(-37.5,-12.5);

	this.instance_1 = new lib.glasses2_img();
	this.instance_1.setTransform(-37.9,-12.2);

	this.instance_2 = new lib.glasses3_img();
	this.instance_2.setTransform(-38,-15.2);

	this.instance_3 = new lib.glasses4_img();
	this.instance_3.setTransform(-37.5,-11.2);

	this.instance_4 = new lib.glasses5_img();
	this.instance_4.setTransform(-39.4,-13.7);

	this.instance_5 = new lib.glasses6_img();
	this.instance_5.setTransform(-37,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-12.5,75,25);
p.frameBounds = [rect, new cjs.Rectangle(-37.9,-12.2,75,27), new cjs.Rectangle(-38,-15.2,76,27), new cjs.Rectangle(-37.5,-11.2,74,28), new cjs.Rectangle(-39.4,-13.7,79,29), new cjs.Rectangle(-37,-16.7,75,33), null];


(lib.glasses_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses6_img();
	this.instance.setTransform(-37.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzEsIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.glasses_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses5_img();
	this.instance.setTransform(-39.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzEsIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.glasses_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses4_img();
	this.instance.setTransform(-37,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzEsIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.glasses_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses3_img();
	this.instance.setTransform(-38,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzEsIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.glasses_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses2_img();
	this.instance.setTransform(-37.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzEsIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.glasses_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses1_img();
	this.instance.setTransform(-37.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzEsIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.front_room_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.front_room_img();
	this.instance.setTransform(-110,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-111.5,220,223);
p.frameBounds = [rect];


(lib.flour1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flour1_img();
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-55,200,110);
p.frameBounds = [rect];


(lib.flour_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flour_img();
	this.instance.setTransform(-63.7,-70.8,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-70.8,127.5,141.8);
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


(lib.eggs_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eggs_img();
	this.instance.setTransform(-66.9,-64.5,0.669,0.669);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-64.5,133.9,129.1);
p.frameBounds = [rect];


(lib.egg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg_img();
	this.instance.setTransform(-50,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-67.5,100,135);
p.frameBounds = [rect];


(lib.earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring6_img();
	this.instance.setTransform(137.5,-61,1,1,0,0,180);

	this.instance_1 = new lib.earring6_img();
	this.instance_1.setTransform(-137.5,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.5,-61,275,122);
p.frameBounds = [rect];


(lib.earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring5_img();
	this.instance.setTransform(121.5,-60,1,1,0,0,180);

	this.instance_1 = new lib.earring5_img();
	this.instance_1.setTransform(-121.5,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-60,243,120);
p.frameBounds = [rect];


(lib.earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring4_img();
	this.instance.setTransform(136.5,-43,1,1,0,0,180);

	this.instance_1 = new lib.earring4_img();
	this.instance_1.setTransform(-136.5,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-43,273,86);
p.frameBounds = [rect];


(lib.earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring3_img();
	this.instance.setTransform(136.5,-43.5,1,1,0,0,180);

	this.instance_1 = new lib.earring3_img();
	this.instance_1.setTransform(-136.5,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-43.5,273,87);
p.frameBounds = [rect];


(lib.earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2_img();
	this.instance.setTransform(79.5,-42.5);

	this.instance_1 = new lib.earring2_img();
	this.instance_1.setTransform(-119.5,-42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-42.5,239,85);
p.frameBounds = [rect];


(lib.earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring1_img();
	this.instance.setTransform(126,-58.5,1,1,0,0,180);

	this.instance_1 = new lib.earring1_img();
	this.instance_1.setTransform(-126,-58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-58.5,252,117);
p.frameBounds = [rect];


(lib.e6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring6_img();
	this.instance.setTransform(60.9,-89.6,1,1,0,0,180);

	this.instance_1 = new lib.earring6_img();
	this.instance_1.setTransform(-61.1,-89.6);

	this.instance_2 = new lib.maneken2_img();
	this.instance_2.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.e5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring5_img();
	this.instance.setTransform(1,-89);

	this.instance_1 = new lib.earring5_img();
	this.instance_1.setTransform(-44,-89);

	this.instance_2 = new lib.maneken2_img();
	this.instance_2.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.e4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring4_img();
	this.instance.setTransform(63,-87.6,1,1,0,0,180);

	this.instance_1 = new lib.earring4_img();
	this.instance_1.setTransform(-64,-87.6);

	this.instance_2 = new lib.maneken2_img();
	this.instance_2.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.e3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring3_img();
	this.instance.setTransform(54.4,-81.5,1,1,0,0,180);

	this.instance_1 = new lib.earring3_img();
	this.instance_1.setTransform(-53.6,-81.5);

	this.instance_2 = new lib.maneken2_img();
	this.instance_2.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.e2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2_img();
	this.instance.setTransform(8,-80.5);

	this.instance_1 = new lib.earring2_img();
	this.instance_1.setTransform(-49,-80.5);

	this.instance_2 = new lib.maneken2_img();
	this.instance_2.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.e1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring1_img();
	this.instance.setTransform(2,-92.5);

	this.instance_1 = new lib.earring1_img();
	this.instance_1.setTransform(-53,-92.5);

	this.instance_2 = new lib.maneken2_img();
	this.instance_2.setTransform(-90.5,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-118,181,236);
p.frameBounds = [rect];


(lib.dress1b_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress1b_img();
	this.instance.setTransform(-63,-112.5);

	this.instance_1 = new lib.dress3b_img();
	this.instance_1.setTransform(-72,-226.7);

	this.instance_2 = new lib.dress5b_img();
	this.instance_2.setTransform(-121,-265.7);

	this.instance_3 = new lib.dress18b_img();
	this.instance_3.setTransform(-108,-122.7);

	this.instance_4 = new lib.dress19b_img();
	this.instance_4.setTransform(-78,-90.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-112.5,126,225);
p.frameBounds = [rect, null, new cjs.Rectangle(-72,-226.7,146,193), null, new cjs.Rectangle(-121,-265.7,229,259), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-108,-122.7,100,262), new cjs.Rectangle(-78,-90.7,169,230), null];


(lib.dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-114.5,-197);

	this.instance_1 = new lib.dress2_img();
	this.instance_1.setTransform(-107,-235);

	this.instance_2 = new lib.dress3_img();
	this.instance_2.setTransform(-91,-237.5);

	this.instance_3 = new lib.dress4_img();
	this.instance_3.setTransform(-90.5,-230);

	this.instance_4 = new lib.dress5_img();
	this.instance_4.setTransform(-130.9,-225);

	this.instance_5 = new lib.dress6_img();
	this.instance_5.setTransform(-96.5,-223);

	this.instance_6 = new lib.dress7_img();
	this.instance_6.setTransform(-87,-238);

	this.instance_7 = new lib.dress8_img();
	this.instance_7.setTransform(-99,-224.5);

	this.instance_8 = new lib.dress9_img();
	this.instance_8.setTransform(-77.5,-224);

	this.instance_9 = new lib.dress10_img();
	this.instance_9.setTransform(-80.5,-221);

	this.instance_10 = new lib.dress11_img();
	this.instance_10.setTransform(-87.5,-227);

	this.instance_11 = new lib.dress12_img();
	this.instance_11.setTransform(-89,-233);

	this.instance_12 = new lib.dress13_img();
	this.instance_12.setTransform(-54.5,-220);

	this.instance_13 = new lib.dress14_img();
	this.instance_13.setTransform(-97,-222.5);

	this.instance_14 = new lib.dress15_img();
	this.instance_14.setTransform(-65.4,-192);

	this.instance_15 = new lib.dress16_img();
	this.instance_15.setTransform(-83.5,-223.5);

	this.instance_16 = new lib.dress17_img();
	this.instance_16.setTransform(-63,-223);

	this.instance_17 = new lib.dress18_img();
	this.instance_17.setTransform(-195.9,-197);

	this.instance_18 = new lib.dress19_img();
	this.instance_18.setTransform(-142.4,-226.5);

	this.instance_19 = new lib.dress20_img();
	this.instance_19.setTransform(-119,-221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-197,229,394);
p.frameBounds = [rect, new cjs.Rectangle(-107,-235,189,245), new cjs.Rectangle(-91,-237.5,175,280), new cjs.Rectangle(-90.5,-230,174,233), new cjs.Rectangle(-130.9,-225,237,322), new cjs.Rectangle(-96.5,-223,172,393), new cjs.Rectangle(-87,-238,164,261), new cjs.Rectangle(-99,-224.5,176,283), new cjs.Rectangle(-77.5,-224,151,221), new cjs.Rectangle(-80.5,-221,151,199), new cjs.Rectangle(-87.5,-227,172,237), new cjs.Rectangle(-89,-233,163,214), new cjs.Rectangle(-54.5,-220,120,217), new cjs.Rectangle(-97,-222.5,186,326), new cjs.Rectangle(-65.4,-192,143,207), new cjs.Rectangle(-83.5,-223.5,181,271), new cjs.Rectangle(-63,-223,129,175), new cjs.Rectangle(-195.9,-197,293,401), new cjs.Rectangle(-142.4,-226.5,233,420), new cjs.Rectangle(-119,-221,186,437)];


(lib.drag_part_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item5_img();
	this.instance.setTransform(-52,28,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15,x:-45,y:-48.4},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect, null];


(lib.drag_part_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item1_img();
	this.instance.setTransform(200.1,-136.9,1,1,79.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:26.5,x:8.5,y:-243.3},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A9ELZIiI08IDlizMA60ALQIgaH5I9jFkg");
	this.shape.setTransform(35.2,-11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("A6iN1MAsygq8IITFAMgc/A1Pg");
	this.shape_1.setTransform(3,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165.2,-136.9,400.2,229.2);
p.frameBounds = [rect, new cjs.Rectangle(-166.9,-243.3,339.9,416.8), null];


(lib.drag_part_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item13_img();
	this.instance.setTransform(-57,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15,x:-71.7,y:-36.4},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnLHLQi9i+AAkNQAAkLC9i/QC/i/EMABQENgBC+C/QC+C/AAELQAAENi+C+Qi+C/kNgBQkMABi/i/g");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-71.7,-65.9,137.8,131.9), null];


(lib.drag_part_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item14_img();
	this.instance.setTransform(-18,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15,x:-26.4,y:-29.5},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, null];


(lib.drag_part_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item15_img();
	this.instance.setTransform(-51,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-30,x:-49.6,y:12.2},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmjGEQiuigAAjkQAAjjCuihQCuihD1ABQD2gBCuChQCuChAADjQAADkiuCgQiuCij2gBQj1ABiuiig");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.4,-55,119,110);
p.frameBounds = [rect, rect, null];


(lib.drag_part_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item18_img();
	this.instance.setTransform(-60.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:15,x:-54.7,y:-39},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnKHLQi/i/ABkMQgBkLC/i/QC/i/ELABQEMgBC/C/QC/C/gBELQABEMi/C/Qi/C/kMgBQkLABi/i/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-65.1,-65,130.1,130), null];


(lib.drag_part_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item3_img();
	this.instance.setTransform(-25,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-30,x:-34.6,y:-10},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ak8E9QiFiDAAi6QAAi5CFiEQCDiEC5AAQC6AACDCEQCECEABC5QgBC6iECDQiDCEi6ABQi5gBiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, null];


(lib.drag_part_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item16_img();
	this.instance.setTransform(-44,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:30,x:-24.3,y:-45.8},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, null];


(lib.cream4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream4_img();
	this.instance.setTransform(-21.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-14.5,43,29);
p.frameBounds = [rect];


(lib.cream3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream3_img();
	this.instance.setTransform(-33,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-33,66,66);
p.frameBounds = [rect];


(lib.cream2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream2_img();
	this.instance.setTransform(-148.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.5,-25,297,50);
p.frameBounds = [rect];


(lib.cream1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream1_img();
	this.instance.setTransform(-149.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.5,-64,299,128);
p.frameBounds = [rect];


(lib.cook3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook3_img();
	this.instance.setTransform(-148,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-148,296,296);
p.frameBounds = [rect];


(lib.clock_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.clock_img();
	this.instance.setTransform(-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-0.4,186,195);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgHzAnEMAAAhOHIPnAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-250,100,500);
p.frameBounds = [rect];


(lib.check_shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_shadows_img();
	this.instance.setTransform(-85,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-95,170,190);
p.frameBounds = [rect];


(lib.check_lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_lips_img();
	this.instance.setTransform(-60,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect];


(lib.check_blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_blush_img();
	this.instance.setTransform(-100,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.cake_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cream1_img();
	this.instance.setTransform(-89.7,-173.1,0.6,0.6);

	this.instance_1 = new lib.tort_got_img();
	this.instance_1.setTransform(-86.1,-162.9,0.591,0.591);

	this.instance_2 = new lib.cream1_img();
	this.instance_2.setTransform(-118.6,-108.7,0.8,0.8);

	this.instance_3 = new lib.tort_got_img();
	this.instance_3.setTransform(-115.5,-95.9,0.791,0.791);

	this.instance_4 = new lib.cream2_img();
	this.instance_4.setTransform(-147.5,68.5);

	this.instance_5 = new lib.cream1_img();
	this.instance_5.setTransform(-149,-25.5);

	this.instance_6 = new lib.tort_got_img();
	this.instance_6.setTransform(-146,-8.5);

	this.instance_7 = new lib.protiven2_img();
	this.instance_7.setTransform(-182,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-173.1,364,346.2);
p.frameBounds = [rect];


(lib.butter3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butter3_img();
	this.instance.setTransform(-112.5,-24.5,0.424,0.424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-24.5,225.1,49.2);
p.frameBounds = [rect];


(lib.butter2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butter2_img();
	this.instance.setTransform(-58,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-33,116,66);
p.frameBounds = [rect];


(lib.butter1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butter1_img();
	this.instance.setTransform(-101.4,-32,0.593,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.4,-32,202.8,64.1);
p.frameBounds = [rect];


(lib.broken_egg2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.broken_egg2_img();
	this.instance.setTransform(-100,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-60,200,120);
p.frameBounds = [rect];


(lib.broken_egg1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.broken_egg1_img();
	this.instance.setTransform(-100,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-56,200,112);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.body_location_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.location_title_en_img();
	this.instance.setTransform(-120,-200);

	this.instance_1 = new lib.location_title_ru_img();
	this.instance_1.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.barbie_shadow1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shadow1_img();
	this.instance.setTransform(-37.5,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-9.1,273,83);
p.frameBounds = [rect];


(lib.barbie_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_rouge1_img();
	this.instance.setTransform(0,-20.1);

	this.instance_1 = new lib.barbie_rouge2_img();
	this.instance_1.setTransform(0.4,-22.2);

	this.instance_2 = new lib.barbie_rouge3_img();
	this.instance_2.setTransform(0.4,-18.2);

	this.instance_3 = new lib.barbie_rouge4_img();
	this.instance_3.setTransform(15.4,-19.7);

	this.instance_4 = new lib.barbie_rouge5_img();
	this.instance_4.setTransform(49.4,-10.2);

	this.instance_5 = new lib.barbie_rouge6_img();
	this.instance_5.setTransform(-13.6,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-20.1,286,153);
p.frameBounds = [rect, new cjs.Rectangle(0.4,-22.2,286,151), new cjs.Rectangle(0.4,-18.2,286,149), new cjs.Rectangle(15.4,-19.7,256,146), new cjs.Rectangle(49.4,-10.2,188,115), new cjs.Rectangle(-13.6,7.5,308,165), null];


(lib.barbie_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_lips1_img();
	this.instance.setTransform(-59,-24);

	this.instance_1 = new lib.barbie_lips2_img();
	this.instance_1.setTransform(-59,-24);

	this.instance_2 = new lib.barbie_lips3_img();
	this.instance_2.setTransform(-59,-24);

	this.instance_3 = new lib.barbie_lips4_img();
	this.instance_3.setTransform(-59,-24);

	this.instance_4 = new lib.barbie_lips5_img();
	this.instance_4.setTransform(-59,-24);

	this.instance_5 = new lib.barbie_lips6_img();
	this.instance_5.setTransform(-59,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-24,118,48);
p.frameBounds = [rect, rect=new cjs.Rectangle(-59,-24,118,49), rect, rect, rect, rect];


(lib.barbie_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_hair1_img();
	this.instance.setTransform(-119,-108);

	this.instance_1 = new lib.barbie_hair2_img();
	this.instance_1.setTransform(-157,-23);

	this.instance_2 = new lib.barbie_hair3_img();
	this.instance_2.setTransform(-143,-92.9);

	this.instance_3 = new lib.barbie_hair6_img();
	this.instance_3.setTransform(-199.5,-262);

	this.instance_4 = new lib.barbie_hair7_img();
	this.instance_4.setTransform(-203.5,-177);

	this.instance_5 = new lib.barbie_hair8_img();
	this.instance_5.setTransform(-228.5,-268.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-108,248,293);
p.frameBounds = [rect, new cjs.Rectangle(-157,-23,325,538), new cjs.Rectangle(-143,-92.9,311,377), rect=null, rect, new cjs.Rectangle(-199.5,-262,407,767), new cjs.Rectangle(-203.5,-177,423,729), new cjs.Rectangle(-228.5,-268.5,481,692)];


(lib.barbie_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_fringe1_img();
	this.instance.setTransform(-183,-180);

	this.instance_1 = new lib.barbie_fringe2_img();
	this.instance_1.setTransform(-238,-174.9);

	this.instance_2 = new lib.barbie_fringe3_img();
	this.instance_2.setTransform(-242,-174);

	this.instance_3 = new lib.barbie_fringe4_img();
	this.instance_3.setTransform(-125,-182.9);

	this.instance_4 = new lib.barbie_fringe5_img();
	this.instance_4.setTransform(-166,-211.9);

	this.instance_5 = new lib.barbie_fringe6_img();
	this.instance_5.setTransform(-112,-184.9);

	this.instance_6 = new lib.barbie_fringe7_img();
	this.instance_6.setTransform(-146,-191.9);

	this.instance_7 = new lib.barbie_fringe8_img();
	this.instance_7.setTransform(-114,-179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183,-180,366,360);
p.frameBounds = [rect, new cjs.Rectangle(-238,-174.9,483,686), new cjs.Rectangle(-242,-174,467,504), new cjs.Rectangle(-125,-182.9,263,281), new cjs.Rectangle(-166,-211.9,343,430), new cjs.Rectangle(-112,-184.9,232,209), new cjs.Rectangle(-146,-191.9,301,623), new cjs.Rectangle(-114,-179,251,525)];


(lib.barbie_eye_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.barbie_eye1_img();
	this.instance.setTransform(-148,-32);

	this.instance_1 = new lib.barbie_eye2_img();
	this.instance_1.setTransform(-147,-20);

	this.instance_2 = new lib.barbie_eye3_img();
	this.instance_2.setTransform(-149,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-32,296,64);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-147,-20,296,55), rect, rect=new cjs.Rectangle(-149,-11,300,55), rect, rect=new cjs.Rectangle(-147,-20,296,55), rect, rect=new cjs.Rectangle(-148,-32,296,64), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bag_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory10_img();
	this.instance.setTransform(-42,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnpG/IF9xUIE0gGIDqHNIA4NQImDAag");
	this.shape.setTransform(-3.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.4,-67,98.2,133.6);
p.frameBounds = [rect];


(lib.bag_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory9_img();
	this.instance.setTransform(-27.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AldFdIAAq6IK7AAIAAK6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.bag_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory8_img();
	this.instance.setTransform(-36.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBGQIAAsfIODAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-40,90,80);
p.frameBounds = [rect];


(lib.bag_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory7_img();
	this.instance.setTransform(-50.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AokGPIAAsdIRJAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.bag_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory6_img();
	this.instance.setTransform(-34.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmOGQIAAseIMdAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.bag_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory5_img();
	this.instance.setTransform(-54.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmqExIjCkHIG8n3IIMCQIERJwImZCbg");
	this.shape.setTransform(1.6,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-48.6,124.4,92.6);
p.frameBounds = [rect];


(lib.bag_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory4_img();
	this.instance.setTransform(-37,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmcFcIBboJIEGmOIErAHICtHpIg0JKIjaA9g");
	this.shape.setTransform(-0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-56.6,82.8,114.6);
p.frameBounds = [rect];


(lib.bag_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory3_img();
	this.instance.setTransform(-42,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnCJgIgPoXIGdqxIBeAAIGoLJIgCIIg");
	this.shape.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.3,-61.5,93.3,123.5);
p.frameBounds = [rect];


(lib.bag_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory2_img();
	this.instance.setTransform(-39.5,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnQH8IEKzGIE+ABICJCdIDQRcIhQB2IkFAmg");
	this.shape.setTransform(-1.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-70.9,93.2,143.2);
p.frameBounds = [rect];


(lib.bag_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-39.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlaGVIhukGIE8qmIHgAtIB1LqIiuEYg");
	this.shape.setTransform(0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.6,-52.8,91.6,107.4);
p.frameBounds = [rect];


(lib.back_room_clean_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.item18_img();
	this.instance.setTransform(367,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.item16_img();
	this.instance_1.setTransform(15,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.item15_img();
	this.instance_2.setTransform(603,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.item14_img();
	this.instance_3.setTransform(668,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.item13_img();
	this.instance_4.setTransform(577,215);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.item5_img();
	this.instance_5.setTransform(31,402);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.item3_img();
	this.instance_6.setTransform(308,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.item2_img();
	this.instance_7.setTransform(681,352);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.front_room_img();
	this.instance_8.setTransform(656,310);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.item1_img();
	this.instance_9.setTransform(606,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// bg
	this.instance_10 = new lib.background_5_img();
	this.instance_10.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.arr2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr2_img();
	this.instance.setTransform(-1,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-2.2,8,66);
p.frameBounds = [rect];


(lib.arr1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,13,59);
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


(lib.animation_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.accessory_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory1_img();
	this.instance.setTransform(-39.5,-47);

	this.instance_1 = new lib.accessory2_img();
	this.instance_1.setTransform(-21.5,-44);

	this.instance_2 = new lib.accessory3_img();
	this.instance_2.setTransform(-26,-46);

	this.instance_3 = new lib.accessory4_img();
	this.instance_3.setTransform(-26.5,-45);

	this.instance_4 = new lib.accessory5_img();
	this.instance_4.setTransform(-46,-46);

	this.instance_5 = new lib.accessory6_img();
	this.instance_5.setTransform(-27.5,-75.5);

	this.instance_6 = new lib.accessory7_img();
	this.instance_6.setTransform(-46,-76.5);

	this.instance_7 = new lib.accessory8_img();
	this.instance_7.setTransform(-23.5,-67);

	this.instance_8 = new lib.accessory9_img();
	this.instance_8.setTransform(-20.5,-62);

	this.instance_9 = new lib.accessory10_img();
	this.instance_9.setTransform(-33.5,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-47,79,94);
p.frameBounds = [rect, new cjs.Rectangle(-21.5,-44,79,136), new cjs.Rectangle(-26,-46,84,111), new cjs.Rectangle(-26.5,-45,74,103), new cjs.Rectangle(-46,-46,109,75), new cjs.Rectangle(-27.5,-75.5,69,67), new cjs.Rectangle(-46,-76.5,101,70), new cjs.Rectangle(-23.5,-67,73,55), new cjs.Rectangle(-20.5,-62,55,47), new cjs.Rectangle(-33.5,-45.5,84,118), null];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

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


(lib.shine_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_7_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_6_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_5_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_2_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_1_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


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


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(400,300,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.bubble_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(400,300,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-70,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.barbie_star_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_star_2_img();
	this.instance.setTransform(-40,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-15,80,30);
p.frameBounds = [rect];


(lib.barbie_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_star_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:140,alpha:1},10).to({y:165},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,680);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,654), new cjs.Rectangle(-210,-210,420,628), new cjs.Rectangle(-210,-210,420,602), new cjs.Rectangle(-210,-210,420,576), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,524), rect=new cjs.Rectangle(-210,-210,420,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,539), new cjs.Rectangle(-210,-210,420,562.5), new cjs.Rectangle(-210,-210,420,586), new cjs.Rectangle(-210,-210,420,609.5), new cjs.Rectangle(-210,-210,420,633), new cjs.Rectangle(-210,-210,420,656.5), new cjs.Rectangle(-210,-210,420,680)];


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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_mc();
	this.instance.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_1_2_mc();
	this.instance_1.setTransform(-250,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-431,-71,861,141);
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


(lib.targets_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part_3
	this.part_3 = new lib.target_part_3_mc();
	this.part_3.setTransform(435,244);

	this.timeline.addTween(cjs.Tween.get(this.part_3).wait(1));

	// part_1
	this.part_1 = new lib.target_part_1_mc();
	this.part_1.setTransform(58,95);

	this.timeline.addTween(cjs.Tween.get(this.part_1).wait(1));

	// part_4
	this.part_4 = new lib.target_part_4_mc();
	this.part_4.setTransform(652,72);

	this.timeline.addTween(cjs.Tween.get(this.part_4).wait(1));

	// part_5
	this.part_5 = new lib.target_part_5_mc();
	this.part_5.setTransform(685,153);

	this.timeline.addTween(cjs.Tween.get(this.part_5).wait(1));

	// part_6
	this.part_6 = new lib.target_part_6_mc();
	this.part_6.setTransform(635,267);

	this.timeline.addTween(cjs.Tween.get(this.part_6).wait(1));

	// part_9
	this.part_9 = new lib.target_part_9_mc();
	this.part_9.setTransform(60,475);

	this.timeline.addTween(cjs.Tween.get(this.part_9).wait(1));

	// part_2
	this.part_2 = new lib.target_part_2_mc();
	this.part_2.setTransform(337,230);

	this.timeline.addTween(cjs.Tween.get(this.part_2).wait(1));

	// part_8
	this.part_8 = new lib.target_part_8_mc();
	this.part_8.setTransform(739,403.9);

	this.timeline.addTween(cjs.Tween.get(this.part_8).wait(1));

	// decor
	this.instance = new lib.front_room_mc();
	this.instance.setTransform(765,421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// part_7
	this.part_7 = new lib.target_part_7_mc();
	this.part_7.setTransform(688,292);

	this.timeline.addTween(cjs.Tween.get(this.part_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,32,885,513);
p.frameBounds = [rect];


(lib.spoon4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shugar2_mc();
	this.instance.setTransform(-18,-128.9,0.391,0.823,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.spoon_img();
	this.instance_1.setTransform(-40,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-171,64.8,257);
p.frameBounds = [rect];


(lib.spoon3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cook3_mc();
	this.instance.setTransform(-9.1,-126.7,0.161,0.222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.spoon_img();
	this.instance_1.setTransform(-40,-171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-171,60,257);
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


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.pos2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.posipka2_mc();
	this.instance.setTransform(39,14);

	this.instance_1 = new lib.posipka2_mc();
	this.instance_1.setTransform(-8,20);

	this.instance_2 = new lib.posipka2_mc();
	this.instance_2.setTransform(-34,2);

	this.instance_3 = new lib.posipka2_mc();
	this.instance_3.setTransform(-62,-11);

	this.instance_4 = new lib.posipka2_mc();
	this.instance_4.setTransform(8,0);

	this.instance_5 = new lib.posipka2_mc();
	this.instance_5.setTransform(58,-7);

	this.instance_6 = new lib.posipka2_mc();
	this.instance_6.setTransform(22,-20);

	this.instance_7 = new lib.posipka2_mc();
	this.instance_7.setTransform(-20,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_8 = new lib.posuda2_img();
	this.instance_8.setTransform(-86.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-35.5,173,71);
p.frameBounds = [rect];


(lib.pos1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.posipka1_mc();
	this.instance.setTransform(-31,7);

	this.instance_1 = new lib.posipka1_mc();
	this.instance_1.setTransform(-47,5);

	this.instance_2 = new lib.posipka1_mc();
	this.instance_2.setTransform(26,-18);

	this.instance_3 = new lib.posipka1_mc();
	this.instance_3.setTransform(22,-4);

	this.instance_4 = new lib.posipka1_mc();
	this.instance_4.setTransform(3,-11);

	this.instance_5 = new lib.posipka1_mc();
	this.instance_5.setTransform(-30,-4);

	this.instance_6 = new lib.posipka1_mc();
	this.instance_6.setTransform(9,14);

	this.instance_7 = new lib.posipka1_mc();
	this.instance_7.setTransform(-14,12);

	this.instance_8 = new lib.posipka1_mc();
	this.instance_8.setTransform(47,-6);

	this.instance_9 = new lib.posipka1_mc();
	this.instance_9.setTransform(20,3);

	this.instance_10 = new lib.posipka1_mc();
	this.instance_10.setTransform(36,5);

	this.instance_11 = new lib.posipka1_mc();
	this.instance_11.setTransform(3,3);

	this.instance_12 = new lib.posipka1_mc();
	this.instance_12.setTransform(-14,-4);

	this.instance_13 = new lib.posipka1_mc();
	this.instance_13.setTransform(-37,-6);

	this.instance_14 = new lib.posipka1_mc();
	this.instance_14.setTransform(30,-6);

	this.instance_15 = new lib.posipka1_mc();
	this.instance_15.setTransform(-3,-15);

	this.instance_16 = new lib.posipka1_mc();
	this.instance_16.setTransform(13,-13);

	this.instance_17 = new lib.posipka1_mc();
	this.instance_17.setTransform(-20,-15);

	this.instance_18 = new lib.posuda2_img();
	this.instance_18.setTransform(-86.5,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-35.5,173,71);
p.frameBounds = [rect];


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cook3_mc();
	this.instance.setTransform(-0.6,0.4,0.727,0.727,33.7);

	this.instance_1 = new lib.protiven1_mc();
	this.instance_1.setTransform(47.5,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-158.5,317,317);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:0.898},10).to({alpha:0.602},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({alpha:0.898},10).to({alpha:0.602},20).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.059)").s().p("Ap7J8QkHkHgBl1QABl0EHkHQEIkIFzAAQF0AAEIEIQEHEHAAF0QAAF1kHEHQkIEIl0AAQlzAAkIkIg");
	this.shape.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mayak1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m1_mc();
	this.instance.setTransform(0,0,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.012},9).wait(1));

	// Слой 2
	this.instance_1 = new lib.m2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect, new cjs.Rectangle(-11.9,-11.9,23.9,23.9), new cjs.Rectangle(-13.8,-13.8,27.8,27.8), new cjs.Rectangle(-15.8,-15.8,31.7,31.7), new cjs.Rectangle(-17.7,-17.7,35.6,35.6), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-23.6,-23.6,47.2,47.2), new cjs.Rectangle(-25.5,-25.5,51.1,51.1), new cjs.Rectangle(-27.5,-27.5,55,55)];


(lib.location_title_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_location_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


(lib.ingr_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shugar2_mc();
	this.instance.setTransform(24.9,29.8,0.65,0.79);

	this.instance_1 = new lib.shugar2_mc();
	this.instance_1.setTransform(-7.3,-6.6,0.65,0.79);

	this.instance_2 = new lib.butter2_mc();
	this.instance_2.setTransform(-15.1,22.5,0.736,0.736);

	this.instance_3 = new lib.butter2_mc();
	this.instance_3.setTransform(-59.2,15.8,0.736,0.736);

	this.instance_4 = new lib.broken_egg2_mc();
	this.instance_4.setTransform(3.2,7.5);

	this.instance_5 = new lib.flour1_mc();
	this.instance_5.setTransform(21.2,38.5);

	this.instance_6 = new lib.flour1_mc();
	this.instance_6.setTransform(-21.2,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.2,-93.5,242.4,187);
p.frameBounds = [rect];


(lib.hint_quest_4_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.hint_quest_5_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.hint_quest_3_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-65,660,130);
p.frameBounds = [rect];


(lib.hint_quest_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		
		*/
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.instance = new lib.hint_quest_4_2_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,-65,660,130);
p.frameBounds = [rect];


(lib.hint_quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// animation
	this.instance = new lib.hint_quest_2_2_mc();
	this.instance.setTransform(0,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:-50},11).to({y:0},4).wait(70).to({y:160},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-330,95,660,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330,75.9,660,130), new cjs.Rectangle(-330,56.8,660,130), new cjs.Rectangle(-330,37.8,660,130), new cjs.Rectangle(-330,18.7,660,130), new cjs.Rectangle(-330,-0.4,660,130), new cjs.Rectangle(-330,-19.5,660,130), new cjs.Rectangle(-330,-38.6,660,130), new cjs.Rectangle(-330,-57.7,660,130), new cjs.Rectangle(-330,-76.8,660,130), new cjs.Rectangle(-330,-95.9,660,130), new cjs.Rectangle(-330,-115,660,130), new cjs.Rectangle(-330,-102.5,660,130), new cjs.Rectangle(-330,-90,660,130), new cjs.Rectangle(-330,-77.5,660,130), rect=new cjs.Rectangle(-330,-65,660,130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-330,-49,660,130), new cjs.Rectangle(-330,-33,660,130), new cjs.Rectangle(-330,-17,660,130), new cjs.Rectangle(-330,-1,660,130), new cjs.Rectangle(-330,15,660,130), new cjs.Rectangle(-330,31,660,130), new cjs.Rectangle(-330,47,660,130), new cjs.Rectangle(-330,63,660,130), new cjs.Rectangle(-330,79,660,130), new cjs.Rectangle(-330,95,660,130)];


(lib.hint_quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_quest_3_1_mc();
	this.instance.setTransform(15,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.hint_quest_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-133,280,253);
p.frameBounds = [rect];


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


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.hand_kursor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hk1_mc();
	this.instance.setTransform(-91,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,y:0},14).to({x:79,y:29},15).to({x:0,y:0},15).to({x:-91,y:29},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-134.5,170,327);
p.frameBounds = [rect, new cjs.Rectangle(-169.5,-136.5,170,327), new cjs.Rectangle(-163,-138.6,170,327), new cjs.Rectangle(-156.5,-140.7,170,327), new cjs.Rectangle(-150,-142.8,170,327), new cjs.Rectangle(-143.5,-144.8,170,327), new cjs.Rectangle(-137,-146.9,170,327), new cjs.Rectangle(-130.5,-149,170,327), new cjs.Rectangle(-124,-151,170,327), new cjs.Rectangle(-117.5,-153.1,170,327), new cjs.Rectangle(-111,-155.2,170,327), new cjs.Rectangle(-104.5,-157.3,170,327), new cjs.Rectangle(-98,-159.3,170,327), new cjs.Rectangle(-91.5,-161.4,170,327), new cjs.Rectangle(-85,-163.5,170,327), new cjs.Rectangle(-79.7,-161.5,170,327), new cjs.Rectangle(-74.4,-159.6,170,327), new cjs.Rectangle(-69.2,-157.7,170,327), new cjs.Rectangle(-63.9,-155.7,170,327), new cjs.Rectangle(-58.6,-153.8,170,327), new cjs.Rectangle(-53.4,-151.9,170,327), new cjs.Rectangle(-48.1,-149.9,170,327), new cjs.Rectangle(-42.8,-148,170,327), new cjs.Rectangle(-37.6,-146.1,170,327), new cjs.Rectangle(-32.3,-144.1,170,327), new cjs.Rectangle(-27,-142.2,170,327), new cjs.Rectangle(-21.8,-140.3,170,327), new cjs.Rectangle(-16.5,-138.3,170,327), new cjs.Rectangle(-11.2,-136.4,170,327), new cjs.Rectangle(-6,-134.5,170,327), new cjs.Rectangle(-11.2,-136.4,170,327), new cjs.Rectangle(-16.5,-138.3,170,327), new cjs.Rectangle(-21.8,-140.3,170,327), new cjs.Rectangle(-27,-142.2,170,327), new cjs.Rectangle(-32.3,-144.1,170,327), new cjs.Rectangle(-37.6,-146.1,170,327), new cjs.Rectangle(-42.8,-148,170,327), new cjs.Rectangle(-48.1,-149.9,170,327), new cjs.Rectangle(-53.4,-151.9,170,327), new cjs.Rectangle(-58.6,-153.8,170,327), new cjs.Rectangle(-63.9,-155.7,170,327), new cjs.Rectangle(-69.2,-157.7,170,327), new cjs.Rectangle(-74.4,-159.6,170,327), new cjs.Rectangle(-79.7,-161.5,170,327), new cjs.Rectangle(-85,-163.5,170,327), new cjs.Rectangle(-91,-161.5,170,327), new cjs.Rectangle(-97.1,-159.6,170,327), new cjs.Rectangle(-103.2,-157.7,170,327), new cjs.Rectangle(-109.2,-155.7,170,327), new cjs.Rectangle(-115.3,-153.8,170,327), new cjs.Rectangle(-121.4,-151.9,170,327), new cjs.Rectangle(-127.4,-149.9,170,327), new cjs.Rectangle(-133.5,-148,170,327), new cjs.Rectangle(-139.6,-146.1,170,327), new cjs.Rectangle(-145.6,-144.1,170,327), new cjs.Rectangle(-151.7,-142.2,170,327), new cjs.Rectangle(-157.8,-140.3,170,327), new cjs.Rectangle(-163.8,-138.3,170,327), new cjs.Rectangle(-169.9,-136.4,170,327), new cjs.Rectangle(-176,-134.5,170,327)];


(lib.hand_cursor_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},14).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-3,189,272);
p.frameBounds = [rect, new cjs.Rectangle(-38,-1.5,189,272), new cjs.Rectangle(-38,-0.1,189,272), new cjs.Rectangle(-38,1.3,189,272), new cjs.Rectangle(-38,2.7,189,272), new cjs.Rectangle(-38,4.2,189,272), new cjs.Rectangle(-38,5.6,189,272), new cjs.Rectangle(-38,7,189,272), new cjs.Rectangle(-38,8.5,189,272), new cjs.Rectangle(-38,9.9,189,272), new cjs.Rectangle(-38,11.3,189,272), new cjs.Rectangle(-38,12.7,189,272), new cjs.Rectangle(-38,14.2,189,272), new cjs.Rectangle(-38,15.6,189,272), new cjs.Rectangle(-38,17,189,272), new cjs.Rectangle(-38,16.2,189,272), new cjs.Rectangle(-38,15.4,189,272), new cjs.Rectangle(-38,14.6,189,272), new cjs.Rectangle(-38,13.8,189,272), new cjs.Rectangle(-38,13,189,272), new cjs.Rectangle(-38,12.2,189,272), new cjs.Rectangle(-38,11.4,189,272), new cjs.Rectangle(-38,10.6,189,272), new cjs.Rectangle(-38,9.8,189,272), new cjs.Rectangle(-38,9,189,272), new cjs.Rectangle(-38,8.2,189,272), new cjs.Rectangle(-38,7.4,189,272), new cjs.Rectangle(-38,6.6,189,272), new cjs.Rectangle(-38,5.8,189,272), new cjs.Rectangle(-38,5,189,272), new cjs.Rectangle(-38,4.2,189,272), new cjs.Rectangle(-38,3.4,189,272), new cjs.Rectangle(-38,2.6,189,272), new cjs.Rectangle(-38,1.8,189,272), new cjs.Rectangle(-38,1,189,272), new cjs.Rectangle(-38,0.2,189,272), new cjs.Rectangle(-38,-0.6,189,272), new cjs.Rectangle(-38,-1.4,189,272), new cjs.Rectangle(-38,-2.2,189,272), new cjs.Rectangle(-38,-3,189,272)];


(lib.hair_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle8_mc();
	this.instance.setTransform(6.5,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AlQVuIqNntIhc0hII0vPIQ1AEIIKQsIjKV7IoQE0g");
	this.shape.setTransform(1.3,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-151.7,330,286.3);
p.frameBounds = [rect];


(lib.hair_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle7_mc();
	this.instance.setTransform(6.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApITUIk0ojIFz+oIRagSMAEsAghIk8Hyg");
	this.shape.setTransform(0.1,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-152.2,330,333);
p.frameBounds = [rect];


(lib.hair_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle6_mc();
	this.instance.setTransform(6.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Av7OYMAHNgj7ISggHMAGKAlUIu5GBg");
	this.shape.setTransform(-2.2,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.7,-152.2,330,325.3);
p.frameBounds = [rect];


(lib.hair_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle5_mc();
	this.instance.setTransform(6.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq+TaMgCjghoIGFlPIPZgMIFlHdIhQf2g");
	this.shape.setTransform(0.2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.4,-127.7,173.3,251.6);
p.frameBounds = [rect];


(lib.hair_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle4_mc();
	this.instance.setTransform(6.3,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnWTdInTstIFa6XIR4AEIGBcbIllKvg");
	this.shape.setTransform(3.3,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-119.8,187.6,251.2);
p.frameBounds = [rect];


(lib.hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle3_mc();
	this.instance.setTransform(6.6,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuwNMIhZqeIJk1aINQgNIJfYSIg5I5IumEog");
	this.shape.setTransform(-6.7,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.2,-111.8,206.9,242.1);
p.frameBounds = [rect];


(lib.hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle2_mc();
	this.instance.setTransform(6.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwkGJII084IPKgHIJLffIifOBI8PAOg");
	this.shape.setTransform(0.7,34.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.6,-113.1,330,294);
p.frameBounds = [rect];


(lib.hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle1_mc();
	this.instance.setTransform(6.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnMTTInI1qIIixDIOmARIFhNrIiTY5g");
	this.shape.setTransform(-4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.7,-123.7,183.5,248.8);
p.frameBounds = [rect];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring1_mc();

	this.instance_1 = new lib.earring2_mc();
	this.instance_1.setTransform(-1.5,-13);

	this.instance_2 = new lib.earring3_mc();
	this.instance_2.setTransform(-0.5,-12);

	this.instance_3 = new lib.earring4_mc();
	this.instance_3.setTransform(-0.5,-10.5);

	this.instance_4 = new lib.earring5_mc();
	this.instance_4.setTransform(-0.5,-1.5);

	this.instance_5 = new lib.earring6_mc();
	this.instance_5.setTransform(0.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126,-58.5,252,117);
p.frameBounds = [rect, new cjs.Rectangle(-121,-55.5,239,85), new cjs.Rectangle(-137,-55.5,273,87), new cjs.Rectangle(-137,-53.5,273,86), new cjs.Rectangle(-122,-61.5,243,120), new cjs.Rectangle(-137,-55.5,275,122), null];


(lib.earrings_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.earrings_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.earrings_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.earrings_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.earrings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
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


(lib.dress20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress20_img();
	this.instance.setTransform(-113.5,-171.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.5,-208.7,186,474.4);
p.frameBounds = [rect];


(lib.dress19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress19_img();
	this.instance.setTransform(-135.5,-176.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.dress19b_img();
	this.instance_2.setTransform(-54.5,-8.3,1,1.007,0,6.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.5,-208.7,250,452.4);
p.frameBounds = [rect];


(lib.dress18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress18_img();
	this.instance.setTransform(-200.5,-184.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.dress18b_img();
	this.instance_2.setTransform(-118.5,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.5,-208.7,293,425.4);
p.frameBounds = [rect];


(lib.dress17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress17_img();
	this.instance.setTransform(-53.5,-179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,-208.7,136.9,204.4);
p.frameBounds = [rect];


(lib.dress16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress16_img();
	this.instance.setTransform(-76.5,-175.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-208.7,181,304.4);
p.frameBounds = [rect];


(lib.dress15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress15_img();
	this.instance.setTransform(-70.5,-178.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-208.7,143,237.4);
p.frameBounds = [rect];


(lib.dress14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress14_img();
	this.instance.setTransform(-89.5,-175.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-208.7,186,359.4);
p.frameBounds = [rect];


(lib.dress13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress13_img();
	this.instance.setTransform(-49.5,-171.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,-208.7,131.9,254.4);
p.frameBounds = [rect];


(lib.dress12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress12_img();
	this.instance.setTransform(-78.5,-183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-208.7,163,239.4);
p.frameBounds = [rect];


(lib.dress11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress11_img();
	this.instance.setTransform(-77.5,-179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-208.7,172,266.4);
p.frameBounds = [rect];


(lib.dress10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress10_img();
	this.instance.setTransform(-73.5,-175.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-208.7,151,232.4);
p.frameBounds = [rect];


(lib.dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress9_img();
	this.instance.setTransform(-72.5,-174.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-208.7,151,255.4);
p.frameBounds = [rect];


(lib.dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress8_img();
	this.instance.setTransform(-89.5,-177.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-208.7,176,314.4);
p.frameBounds = [rect];


(lib.dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress7_img();
	this.instance.setTransform(-77.5,-185.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-208.7,164,284.4);
p.frameBounds = [rect];


(lib.dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress6_img();
	this.instance.setTransform(-86.5,-179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-208.7,172,422.4);
p.frameBounds = [rect];


(lib.dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress5_img();
	this.instance.setTransform(-124.5,-177.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger1_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.dress5b_img();
	this.instance_2.setTransform(-119.5,-168.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.5,-208.7,237,353.4);
p.frameBounds = [rect];


(lib.dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress4_img();
	this.instance.setTransform(-79.5,-178.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-208.7,174,263.4);
p.frameBounds = [rect];


(lib.dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress3_img();
	this.instance.setTransform(-80.5,-186.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-208.7,175,302.4);
p.frameBounds = [rect];


(lib.dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress2_img();
	this.instance.setTransform(-100.5,-182.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-208.7,189,271.4);
p.frameBounds = [rect];


(lib.dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-114.5,-185.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2_mc();
	this.instance_1.setTransform(-7.3,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-208.7,229,417.4);
p.frameBounds = [rect];


(lib.dress_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress20_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap5knIHgpQIEmAEIHtKWIjjQBIoxBUg");
	this.shape.setTransform(2.6,82.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-6.6,186,481);
p.frameBounds = [rect];


(lib.dress_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress19_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApgmPIHxo0IEJABIHHJYIiDRCIpHDsg");
	this.shape.setTransform(-0.4,90.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127,-5.9,250,458.3);
p.frameBounds = [rect];


(lib.dress_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress18_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnuimIFnpBIEfgBIFXJeIjfNoIn3ALg");
	this.shape.setTransform(1.1,67.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192,-7.2,293,432.7);
p.frameBounds = [rect];


(lib.dress_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress17_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoKObIjj3CIG+ofIGCgBIGcJkID/VQIpWDbg");
	this.shape.setTransform(15.5,102.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-6.7,150.1,219.4);
p.frameBounds = [rect];


(lib.dress_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress16_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsIV1IizzaICZywIG3o6IFVABILOPcIEEa2IuOILg");
	this.shape.setTransform(22.5,153.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-8.4,191.4,323.2);
p.frameBounds = [rect];


(lib.dress_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress15_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsTSxMADTggGIEPmVIFuAAID3FHIHgY2IhcGwIjyCog");
	this.shape.setTransform(10.2,119.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.6,-6.5,157.8,251.9);
p.frameBounds = [rect];


(lib.dress_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress14_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdX3MAD6gr7IG/ppIF2AAIKuPOMADeAncIvhExg");
	this.shape.setTransform(13.4,181.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.6,-9,198.1,380.5);
p.frameBounds = [rect];


(lib.dress_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress13_mc();
	this.instance.setTransform(8.4,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjxOsIlw0KIGypLIFKgCIHHJ4IgYTfg");
	this.shape.setTransform(2.7,86.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-7.1,137.2,261.6);
p.frameBounds = [rect];


(lib.dress_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress12_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtRLZICs1zIG/pWIFBAAIL3PBIgHYeI2+ADg");
	this.shape.setTransform(11.4,119.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.6,-7.2,170.1,253.2);
p.frameBounds = [rect];


(lib.dress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress11_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AthHbICL0uIGzoDIElABILNOpICTZzI3eCQg");
	this.shape.setTransform(16.3,130.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.3,-5.9,173.4,273.5);
p.frameBounds = [rect];


(lib.dress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress10_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AolQVIj7wnIAbpwIIhpMIFkgCIIBJIICgZ/IpADag");
	this.shape.setTransform(10.4,115.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-8,160.3,246.8);
p.frameBounds = [rect];


(lib.dress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress9_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApLShIjW22ICkqSIFOmqIFbAAIJFNKICxZ+IriDbg");
	this.shape.setTransform(13.3,129.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-6.5,160.6,272.6);
p.frameBounds = [rect];


(lib.dress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress8_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApxYxIkX2EIDk0aIHRnqIFegBIL+PEMgBeAjtg");
	this.shape.setTransform(7.2,156.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-6.2,181.1,325.1);
p.frameBounds = [rect];


(lib.dress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress7_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApbWtIjyu8IDF2AIGcpUIDrAAIM5PLIAWf8g");
	this.shape.setTransform(12.3,143.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-7.4,169.3,301.8);
p.frameBounds = [rect];


(lib.dress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress6_mc();
	this.instance.setTransform(8,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtAcbMAC+gyoIGdnVIDsAAIM6OHMgEwAs+g");
	this.shape.setTransform(10.1,182.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.5,-6.5,172,429);
p.frameBounds = [rect];


(lib.dress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress5_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq2gbIIFojIDugCIKtQfI3TBig");
	this.shape.setTransform(7.1,48.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116,-8.9,237,362.3);
p.frameBounds = [rect];


(lib.dress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress4_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AtblsIGfp4IFMAAIPLSuIl1LxIz+Aqg");
	this.shape.setTransform(26.8,94.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-5,183.9,268.5);
p.frameBounds = [rect];


(lib.dress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress3_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsSWCIgy1xIB+wTIGjodIEbAAILiPqIBrZDIjnHyIvpAgg");
	this.shape.setTransform(21.7,150.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-6.5,177.4,313.8);
p.frameBounds = [rect];


(lib.dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress2_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap0RXIlRo5QEivXDDvZILUAAILSTZIg6VaIpmDyg");
	this.shape.setTransform(3.1,136.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-6,193.4,285.5);
p.frameBounds = [rect];


(lib.dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress1_mc();
	this.instance.setTransform(8.5,208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqiWcMACxglsIDynLIE9AAIE0FkMAExAnTg");
	this.shape.setTransform(10.6,136.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-7.4,229,424.8);
p.frameBounds = [rect];


(lib.drags_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part_3
	this.part_3 = new lib.drag_part_3_mc();
	this.part_3.setTransform(461,539);

	this.timeline.addTween(cjs.Tween.get(this.part_3).wait(1));

	// part_1
	this.part_1 = new lib.drag_part_1_mc();
	this.part_1.setTransform(309,365.3);

	this.timeline.addTween(cjs.Tween.get(this.part_1).wait(1));

	// part_4
	this.part_4 = new lib.drag_part_4_mc();
	this.part_4.setTransform(706,443.3);

	this.timeline.addTween(cjs.Tween.get(this.part_4).wait(1));

	// part_5
	this.part_5 = new lib.drag_part_5_mc();
	this.part_5.setTransform(535,460);

	this.timeline.addTween(cjs.Tween.get(this.part_5).wait(1));

	// part_6
	this.part_6 = new lib.drag_part_6_mc();
	this.part_6.setTransform(83,340);

	this.timeline.addTween(cjs.Tween.get(this.part_6).wait(1));

	// part_9
	this.part_9 = new lib.drag_part_9_mc();
	this.part_9.setTransform(735,525);

	this.timeline.addTween(cjs.Tween.get(this.part_9).wait(1));

	// part_2
	this.part_2 = new lib.drag_part_2_mc();
	this.part_2.setTransform(604.5,517.3);

	this.timeline.addTween(cjs.Tween.get(this.part_2).wait(1));

	// part_8
	this.part_8 = new lib.item2_mc();
	this.part_8.setTransform(200,348);

	this.timeline.addTween(cjs.Tween.get(this.part_8).wait(1));

	// part_7
	this.part_7 = new lib.drag_part_7_mc();
	this.part_7.setTransform(260.3,499.9,1,1,-15,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.part_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(19,275,786,356.9);
p.frameBounds = [rect];


(lib.decor_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,246,406);
p.frameBounds = [rect];


(lib.decor_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,246,406);
p.frameBounds = [rect];


(lib.decor_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,246,406);
p.frameBounds = [rect];


(lib.decor_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,246,406);
p.frameBounds = [rect];


(lib.decor_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect];


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
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-95,170,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_shadows_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_shadows_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-95,170,190);
p.frameBounds = [rect, rect];


(lib.check_lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_lips_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_lips_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect, rect];


(lib.check_blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_blush_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_blush_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect, rect];


(lib.cake_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.posipka1_mc();
	this.instance.setTransform(127.4,-0.1);

	this.instance_1 = new lib.posipka1_mc();
	this.instance_1.setTransform(100.4,11.9);

	this.instance_2 = new lib.posipka1_mc();
	this.instance_2.setTransform(70.4,16.9);

	this.instance_3 = new lib.posipka1_mc();
	this.instance_3.setTransform(41.4,19.9);

	this.instance_4 = new lib.posipka1_mc();
	this.instance_4.setTransform(10.4,20.9);

	this.instance_5 = new lib.posipka1_mc();
	this.instance_5.setTransform(-19.6,20.9);

	this.instance_6 = new lib.posipka1_mc();
	this.instance_6.setTransform(-50.6,19.9);

	this.instance_7 = new lib.posipka1_mc();
	this.instance_7.setTransform(-77.6,16.9);

	this.instance_8 = new lib.posipka1_mc();
	this.instance_8.setTransform(-104.6,10.9);

	this.instance_9 = new lib.posipka1_mc();
	this.instance_9.setTransform(-126.6,-3.1);

	this.instance_10 = new lib.cake_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-173.1,364,346.2);
p.frameBounds = [rect];


(lib.cake_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cream4_mc();
	this.instance.setTransform(47.5,-42.9,1,1,0,0,0,0,16);

	this.instance_1 = new lib.cream4_mc();
	this.instance_1.setTransform(7.5,-39.9,1,1,0,0,0,0,16);

	this.instance_2 = new lib.cream4_mc();
	this.instance_2.setTransform(-29,-40.9,1,1,0,0,0,0,16);

	this.instance_3 = new lib.cream4_mc();
	this.instance_3.setTransform(-62,-45.9,1,1,0,0,0,0,16);

	this.instance_4 = new lib.cream4_mc();
	this.instance_4.setTransform(-91,-53.9,1,1,0,0,0,0,16);

	this.instance_5 = new lib.cream4_mc();
	this.instance_5.setTransform(81.5,-49.9,1,1,0,0,0,0,16);

	this.instance_6 = new lib.cream4_mc();
	this.instance_6.setTransform(97.5,-59.9,1,1,0,0,0,0,16);

	this.instance_7 = new lib.posipka2_mc();
	this.instance_7.setTransform(30.4,-129.1);

	this.instance_8 = new lib.posipka2_mc();
	this.instance_8.setTransform(-12.6,-129.1);

	this.instance_9 = new lib.posipka2_mc();
	this.instance_9.setTransform(62.4,-139.1);

	this.instance_10 = new lib.posipka2_mc();
	this.instance_10.setTransform(-57.6,-135.1);

	this.instance_11 = new lib.cream3_mc();
	this.instance_11.setTransform(1,-125.6,1,1,0,0,0,-1,32);

	this.instance_12 = new lib.posipka2_mc();
	this.instance_12.setTransform(19.4,-150.9);

	this.instance_13 = new lib.posipka2_mc();
	this.instance_13.setTransform(-28.6,-148.1);

	this.instance_14 = new lib.cake_2_mc();
	this.instance_14.setTransform(0,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-190.6,364,381.2);
p.frameBounds = [rect];


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


(lib.blush_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rum6_img();
	this.instance.setTransform(-85.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.blush_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rum5_img();
	this.instance.setTransform(-85.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.blush_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rum4_img();
	this.instance.setTransform(-85.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.blush_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rum3_img();
	this.instance.setTransform(-85.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.blush_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rum2_img();
	this.instance.setTransform(-85.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.blush_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rum1_img();
	this.instance.setTransform(-85.5,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_blush_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
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


(lib.blesk_anim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_7_mc("synched",0);
	this.instance.setTransform(0.5,0.5,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-10.6,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14,29.1,29.1), new cjs.Rectangle(-17.4,-17.5,36.1,36.1), new cjs.Rectangle(-20.9,-20.9,42.8,42.8), new cjs.Rectangle(-23.7,-23.7,48.5,48.5), new cjs.Rectangle(-25.9,-25.9,52.9,52.9), new cjs.Rectangle(-27.3,-27.2,55.5,55.5), new cjs.Rectangle(-27.6,-27.5,56.1,56.1), new cjs.Rectangle(-26.7,-26.6,54.3,54.3), new cjs.Rectangle(-24.5,-24.5,50,50), new cjs.Rectangle(-27,-27,55.1,55.1), new cjs.Rectangle(-27.2,-27.2,55.6,55.6), new cjs.Rectangle(-25.6,-25.6,52.2,52.2), new cjs.Rectangle(-22.4,-22.3,45.7,45.7), new cjs.Rectangle(-18.1,-18.1,37.2,37.2), new cjs.Rectangle(-13.3,-13.2,27.6,27.6), new cjs.Rectangle(-10.2,-10.1,21.3,21.3), new cjs.Rectangle(-9.4,-9.3,19.6,19.6), new cjs.Rectangle(-7.3,-7.2,15.5,15.5), new cjs.Rectangle(-4.4,-4.4,9.8,9.8)];


(lib.beads_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.n6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.beads_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.n5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.beads_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.n4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.beads_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.n3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.beads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.n2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-130,196,260);
p.frameBounds = [rect];


(lib.beads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.n1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1UTMAAAgomIdrAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-130,190,260);
p.frameBounds = [rect];


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.barbie_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_shadow1_mc();
	this.instance.setTransform(4.8,-1.5,1,1,0,0,0,103.8,30.9);

	this.instance_1 = new lib.barbie_shadow2_img();
	this.instance_1.setTransform(-139.6,-46);

	this.instance_2 = new lib.barbie_shadow3_img();
	this.instance_2.setTransform(-136.5,-46);

	this.instance_3 = new lib.barbie_shadow4_img();
	this.instance_3.setTransform(-136.5,-41.1);

	this.instance_4 = new lib.barbie_shadow5_img();
	this.instance_4.setTransform(-136.5,-41.1);

	this.instance_5 = new lib.barbie_shadow6_img();
	this.instance_5.setTransform(-136.5,-40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-41.5,273,83);
p.frameBounds = [rect, new cjs.Rectangle(-139.6,-46,280,90), new cjs.Rectangle(-136.5,-46,273,90), rect=new cjs.Rectangle(-136.5,-41.1,273,83), rect, new cjs.Rectangle(-136.5,-40.1,273,83), null];


(lib.barbie_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glasses
	this.glasses = new lib.glasses_all_mc();
	this.glasses.setTransform(4.5,-212.9);

	this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

	// headdress
	this.headdress = new lib.hat_all_mc();
	this.headdress.setTransform(-3,-267.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// bag
	this.bag = new lib.accessory_all1_mc();
	this.bag.setTransform(-49.1,97.4);

	this.timeline.addTween(cjs.Tween.get(this.bag).wait(1));

	// earrings
	this.earrings = new lib.earrings_all_mc();
	this.earrings.setTransform(5.1,-188.5,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// fringe
	this.fringe = new lib.barbie_fringe_all_mc();
	this.fringe.setTransform(2.6,-222.1,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// beads
	this.beads = new lib.necklace_all_mc();
	this.beads.setTransform(12.8,-138,0.351,0.388,0,-22,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// body
	this.instance = new lib.barbie_eye_all_mc();
	this.instance.setTransform(5.1,-217.9,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.barbie_shadow_all_mc();
	this.shadows.setTransform(5,-219.2,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.barbie_lips_all_mc();
	this.lips.setTransform(5.1,-184.8,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.barbie_rouge_all_mc();
	this.blush.setTransform(5.3,-204.3,0.233,0.233,0,0,0,142.5,60.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.barbie_head_img();
	this.instance_1.setTransform(-38.5,-280.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dress
	this.dress = new lib.dress_all_mc();
	this.dress.setTransform(26.9,65.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.shoes_all_mc();
	this.shoes.setTransform(-17,243.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_2 = new lib.barbie_body_img();
	this.instance_2.setTransform(-95,-183.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dressSecond
	this.dressSecond = new lib.dress1b_all_mc();
	this.dressSecond.setTransform(22.6,116.3);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

	// hair
	this.hair = new lib.barbie_hair_all_mc();
	this.hair.setTransform(2.6,-222.1,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.hat_all2_mc();
	this.headdressSecond.setTransform(2,-254.7);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99,-294.5,240.4,579);
p.frameBounds = [rect];


(lib.barbie_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.barbie_eye_all_mc();
	this.instance.setTransform(32.1,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.instance_1 = new lib.barbie_hair0_img();
	this.instance_1.setTransform(-149.5,-344);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.barbie_shadow_all_mc();
	this.shadows.setTransform(31.3,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.barbie_lips_all_mc();
	this.lips.setTransform(32,177.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.barbie_rouge_all_mc();
	this.blush.setTransform(32.7,93.5,1,1,0,0,0,142.6,60);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.body_makeup_img();
	this.instance_2.setTransform(-315.5,-221.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-315.5,-344,715,745.2);
p.frameBounds = [rect];


(lib.barbie_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glasses
	this.instance = new lib.glasses1_img();
	this.instance.setTransform(-33,-225.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.instance_1 = new lib.barbie_fringe8_img();
	this.instance_1.setTransform(-38.6,-286.7,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.barbie_eye_all_mc();
	this.instance_2.setTransform(5.1,-217.9,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// shadows
	this.instance_3 = new lib.barbie_shadow1_mc();
	this.instance_3.setTransform(6.1,-219.6,0.233,0.233,0,0,0,103.6,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// lips
	this.instance_4 = new lib.barbie_lips1_img();
	this.instance_4.setTransform(-8.6,-190.3,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.barbie_head_img();
	this.instance_5.setTransform(-38.5,-280.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// dress
	this.instance_6 = new lib.dress15_img();
	this.instance_6.setTransform(-38.5,-126.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// shoes
	this.instance_7 = new lib.shoes2_img();
	this.instance_7.setTransform(-96.9,209.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// body
	this.instance_8 = new lib.barbie_body_img();
	this.instance_8.setTransform(-95,-183.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// hair
	this.instance_9 = new lib.barbie_hair8_img();
	this.instance_9.setTransform(-79.9,-319.1,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.9,-319.1,201.4,605.5);
p.frameBounds = [rect];


(lib.barbie_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_fringe7_img();
	this.instance.setTransform(-50.1,-291.4,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.necklace2_img();
	this.instance_1.setTransform(-29.7,-152.7,0.351,0.388,0,-22,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.barbie_eye_all_mc();
	this.instance_2.setTransform(5.1,-217.9,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.barbie_shadow2_img();
	this.instance_3.setTransform(-27.8,-230.9,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.barbie_lips3_img();
	this.instance_4.setTransform(-8.6,-190.4,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.barbie_rouge4_img();
	this.instance_5.setTransform(-27.9,-223,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.barbie_head_img();
	this.instance_6.setTransform(-38.5,-280.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.dress1_img();
	this.instance_7.setTransform(-87.6,-131.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.shoes4_img();
	this.instance_8.setTransform(-100.5,219.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.barbie_body_img();
	this.instance_9.setTransform(-95,-183.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.dress1b_img();
	this.instance_10.setTransform(-40.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.barbie_hair7_img();
	this.instance_11.setTransform(-70.9,-286,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hat7_img();
	this.instance_12.setTransform(-67,-307.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-307.7,241.9,592.2);
p.frameBounds = [rect];


(lib.barbie_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// earrings
	this.earrings = new lib.earrings_all_mc();
	this.earrings.setTransform(3,6.8);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// fringe
	this.fringe = new lib.barbie_fringe_all_mc();
	this.fringe.setTransform(-4,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// beads
	this.beads = new lib.necklace_all_mc();
	this.beads.setTransform(0.1,160.5);

	this.timeline.addTween(cjs.Tween.get(this.beads).wait(1));

	// body
	this.instance = new lib.barbie_eye_all_mc();
	this.instance.setTransform(3.1,-74.9,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadows
	this.shadows = new lib.barbie_shadow_all_mc();
	this.shadows.setTransform(2.6,-78.5,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.barbie_lips_all_mc();
	this.lips.setTransform(3.1,17,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.barbie_rouge_all_mc();
	this.blush.setTransform(3.5,-37.1,0.645,0.645,0,0,0,142.6,60);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.body_hair_img();
	this.instance_1.setTransform(-192.5,-246.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hair
	this.hair = new lib.barbie_hair_all_mc();
	this.hair.setTransform(-4,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-192.5,-266.5,385,513);
p.frameBounds = [rect];


(lib.bag_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.arrow_checks_3_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(62.2,9.7,1,1,10);

	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(122.7,19.5,1,1,-31.9);

	this.instance_2 = new lib.mayak1_mc();
	this.instance_2.setTransform(0.4,-0.8,1,1,-31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.7,-35.6,153.1,73.5);
p.frameBounds = [rect];


(lib.arrow_checks_3_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(67,-0.9);

	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(-0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-33.9,129,68);
p.frameBounds = [rect];


(lib.arrow_checks_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(314,-0.9);

	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(246.5,-0.4);

	this.instance_2 = new lib.line1_mc();
	this.instance_2.setTransform(189,-0.9);

	this.instance_3 = new lib.mayak1_mc();
	this.instance_3.setTransform(121.5,-0.4);

	this.instance_4 = new lib.line1_mc();
	this.instance_4.setTransform(67,-0.9);

	this.instance_5 = new lib.mayak1_mc();
	this.instance_5.setTransform(-0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-33.9,376,68);
p.frameBounds = [rect];


(lib.arrow_checks_3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(314,-0.9);

	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(246.5,-0.4);

	this.instance_2 = new lib.line1_mc();
	this.instance_2.setTransform(189,-0.9);

	this.instance_3 = new lib.mayak1_mc();
	this.instance_3.setTransform(121.5,-0.4);

	this.instance_4 = new lib.line1_mc();
	this.instance_4.setTransform(67,-0.9);

	this.instance_5 = new lib.mayak1_mc();
	this.instance_5.setTransform(-0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-33.9,376,68);
p.frameBounds = [rect];


(lib.arrow_checks_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(189.1,-1);

	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(121.6,-0.5);

	this.instance_2 = new lib.line1_mc();
	this.instance_2.setTransform(67.1,-1);

	this.instance_3 = new lib.mayak1_mc();
	this.instance_3.setTransform(-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-34,251,68);
p.frameBounds = [rect];


(lib.arrow_checks_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(67,-0.9);

	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(-0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-33.9,129,68);
p.frameBounds = [rect];


(lib.arrow_checks_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(-46.1,-41.3,1,1,42);

	this.instance_1 = new lib.line1_mc();
	this.instance_1.setTransform(-153.5,-83.4);

	this.instance_2 = new lib.mayak1_mc();
	this.instance_2.setTransform(0,-0.9);

	this.instance_3 = new lib.mayak1_mc();
	this.instance_3.setTransform(-93,-82.9);

	this.instance_4 = new lib.mayak1_mc();
	this.instance_4.setTransform(-221,-82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231,-116.4,241,125.5);
p.frameBounds = [rect];


(lib.arrow_checks_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(46.1,-41.3,1,1,0,-42,138);

	this.instance_1 = new lib.line1_mc();
	this.instance_1.setTransform(153.5,-83.5,1,1,0,0,180);

	this.instance_2 = new lib.mayak1_mc();
	this.instance_2.setTransform(0,-1,1,1,0,0,180);

	this.instance_3 = new lib.mayak1_mc();
	this.instance_3.setTransform(93,-83,1,1,0,0,180);

	this.instance_4 = new lib.mayak1_mc();
	this.instance_4.setTransform(221,-83,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-116.5,241,125.5);
p.frameBounds = [rect];


(lib.arrow_checks_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mayak1_mc();
	this.instance.setTransform(-0.8,-0.7);

	this.instance_1 = new lib.line1_mc();
	this.instance_1.setTransform(52.5,30.2,1,1,-150.8);

	this.instance_2 = new lib.mayak1_mc();
	this.instance_2.setTransform(121.2,61.3);

	this.instance_3 = new lib.line1_mc();
	this.instance_3.setTransform(178.2,43.6,1,1,159);

	this.instance_4 = new lib.mayak1_mc();
	this.instance_4.setTransform(247.7,9.8);

	this.instance_5 = new lib.line1_mc();
	this.instance_5.setTransform(262.2,-50.7,1,1,101.8);

	this.instance_6 = new lib.line1_mc();
	this.instance_6.setTransform(236.6,-173.5,1,1,49.5);

	this.instance_7 = new lib.line1_mc();
	this.instance_7.setTransform(131.2,-225.7);

	this.instance_8 = new lib.mayak1_mc();
	this.instance_8.setTransform(274.7,-126.2);

	this.instance_9 = new lib.mayak1_mc();
	this.instance_9.setTransform(191.7,-225.2);

	this.instance_10 = new lib.mayak1_mc();
	this.instance_10.setTransform(63.7,-225.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.8,-258.7,320.4,353.8);
p.frameBounds = [rect];


(lib.arrow_checks_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.line1_mc();
	this.instance.setTransform(-47,-40.8,1,1,42);

	this.instance_1 = new lib.line1_mc();
	this.instance_1.setTransform(-154.4,-83);

	this.instance_2 = new lib.mayak1_mc();
	this.instance_2.setTransform(-0.9,-0.5);

	this.instance_3 = new lib.mayak1_mc();
	this.instance_3.setTransform(-93.9,-82.5);

	this.instance_4 = new lib.mayak1_mc();
	this.instance_4.setTransform(-221.9,-82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231.9,-116,241,125.5);
p.frameBounds = [rect];


(lib.arrow_checks_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pointing_finger_mc();
	this.instance.setTransform(-220,500,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:100},15).to({rotation:30,x:100},30).to({y:500},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.9,344.3,253,311.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-346.5,318.1,252.1,311), new cjs.Rectangle(-346.5,291.4,252.1,311), new cjs.Rectangle(-346.5,264.7,252.1,311), new cjs.Rectangle(-346.5,238.1,252.1,311), new cjs.Rectangle(-346.5,211.4,252.1,311), new cjs.Rectangle(-346.5,184.7,252.1,311), new cjs.Rectangle(-346.5,158.1,252.1,311), new cjs.Rectangle(-346.5,131.4,252.1,311), new cjs.Rectangle(-346.5,104.7,252.1,311), new cjs.Rectangle(-346.5,78.1,252.1,311), new cjs.Rectangle(-346.5,51.4,252.1,311), new cjs.Rectangle(-346.5,24.7,252.1,311), new cjs.Rectangle(-346.5,-1.9,252.1,311), new cjs.Rectangle(-346.5,-28.6,252.1,311), new cjs.Rectangle(-346.9,-55.7,253,311.7), new cjs.Rectangle(-333,-53.7,246.4,308), new cjs.Rectangle(-319.4,-52.2,240.6,304.8), new cjs.Rectangle(-305.7,-50.5,234.6,301.3), new cjs.Rectangle(-292,-48.6,228.3,297.6), new cjs.Rectangle(-278.1,-46.7,222,293.7), new cjs.Rectangle(-264.3,-44.7,215.5,289.7), new cjs.Rectangle(-250.3,-42.5,208.9,285.4), new cjs.Rectangle(-236.6,-40.6,203,281.5), new cjs.Rectangle(-222,-38,195.2,276.3), new cjs.Rectangle(-208.3,-35.9,189,272), new cjs.Rectangle(-201.1,-38.3,196,276.8), new cjs.Rectangle(-193.5,-40.3,202.1,280.9), new cjs.Rectangle(-186.7,-42.9,209.7,285.8), new cjs.Rectangle(-178.9,-44.7,215.5,289.7), new cjs.Rectangle(-171.9,-47.1,222.8,294.2), new cjs.Rectangle(-164.4,-49,229.1,298.1), new cjs.Rectangle(-156.8,-50.9,235.4,301.9), new cjs.Rectangle(-149.1,-52.6,241.3,305.2), new cjs.Rectangle(-141,-54.1,246.4,308), new cjs.Rectangle(-133.5,-55.8,252.8,311.4), new cjs.Rectangle(-125.3,-57,257.6,313.9), new cjs.Rectangle(-117.7,-58.5,263.6,316.8), new cjs.Rectangle(-109.2,-59.6,268.1,318.9), new cjs.Rectangle(-101.3,-60.7,273.7,321.3), new cjs.Rectangle(-92.8,-61.7,277.9,323.1), new cjs.Rectangle(-84.7,-62.6,283,325), new cjs.Rectangle(-76,-63.3,286.9,326.3), new cjs.Rectangle(-67.5,-63.9,291.1,327.6), new cjs.Rectangle(-58.7,-64.5,295.1,328.7), new cjs.Rectangle(-50.2,-65.3,299.7,330.1), new cjs.Rectangle(-49.8,-38.2,298.9,329.5), new cjs.Rectangle(-49.8,-11.5,298.9,329.5), new cjs.Rectangle(-49.8,15.1,298.9,329.5), new cjs.Rectangle(-49.8,41.8,298.9,329.5), new cjs.Rectangle(-49.8,68.5,298.9,329.5), new cjs.Rectangle(-49.8,95.1,298.9,329.5), new cjs.Rectangle(-49.8,121.8,298.9,329.5), new cjs.Rectangle(-49.8,148.5,298.9,329.5), new cjs.Rectangle(-49.8,175.1,298.9,329.5), new cjs.Rectangle(-49.8,201.8,298.9,329.5), new cjs.Rectangle(-49.8,228.5,298.9,329.5), new cjs.Rectangle(-49.8,255.1,298.9,329.5), new cjs.Rectangle(-49.8,281.8,298.9,329.5), new cjs.Rectangle(-49.8,308.5,298.9,329.5), new cjs.Rectangle(-50.2,334.7,299.7,330.1)];


(lib.arrow_checks_2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(15,0,1,1,6.2);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(120,15,1,1,6.2);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-253.9,258.5,522.8);
p.frameBounds = [rect];


(lib.arrow_checks_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(10,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(120,0);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(66,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(176,0);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(16,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(66,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(176,0);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(16,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(60,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(170,0);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(10,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(120,0);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(3.1,-1,1,1,-169.8,0,0,-0.1,-0.1);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-208.9,-80,1,1,9.5);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-93.6,-83,1,1,-171.2);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-299.4,-337.7,395.9,591.5);
p.frameBounds = [rect];


(lib.arrow_checks_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-1,0,1,1,162.9,0,0,0,-0.1);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(213.2,-78,1,1,-16.9,0,0,0.1,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(93.5,-82.9,1,1,162.8,0,0,-0.1,-0.1);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.1,-336.5,455.8,590.1);
p.frameBounds = [rect];


(lib.arrow_checks_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(120.1,61.9,1,1,-179.3,0,0,0,-0.1);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(193,-224.9,1,1,18.9);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(262.4,-58.8,1,1,102.8,0,0,-0.1,-0.1);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(7.4,-477.6,509.8,790);
p.frameBounds = [rect];


(lib.arrow_checks_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-1,-0.1,1,1,12.9);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-205.9,-77.9,1,1,12.9);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-94,-82,1,1,12.9);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310.7,-336.8,414.4,591.6);
p.frameBounds = [rect];


(lib.arrow_checks_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-240,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-120,0);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-250,340,500);
p.frameBounds = [rect];


(lib.arrow_checks_1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-253.9,258.5,522.8);
p.frameBounds = [rect];


(lib.arrow_checks_1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-250,376,500);
p.frameBounds = [rect];


(lib.arrow_checks_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-250,376,500);
p.frameBounds = [rect];


(lib.arrow_checks_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-250,251,500);
p.frameBounds = [rect];


(lib.arrow_checks_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-299.4,-337.7,395.9,591.5);
p.frameBounds = [rect];


(lib.arrow_checks_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.1,-336.5,455.8,590.1);
p.frameBounds = [rect];


(lib.arrow_checks_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.8,-477.6,528.1,790);
p.frameBounds = [rect];


(lib.arrow_checks_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310.7,-336.8,414.4,591.6);
p.frameBounds = [rect];


(lib.arrow_checks_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arrow_checks_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.9,-250,397,906);
p.frameBounds = [rect];


(lib.arrow_checks_0_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.7,-253.9,258.5,522.8);
p.frameBounds = [rect];


(lib.arrow_checks_0_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_0_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-250,376,500);
p.frameBounds = [rect];


(lib.arrow_checks_0_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-250,376,500);
p.frameBounds = [rect];


(lib.arrow_checks_0_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.4,-250,251,500);
p.frameBounds = [rect];


(lib.arrow_checks_0_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-250,210,500);
p.frameBounds = [rect];


(lib.arrow_checks_0_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-299.4,-337.7,395.9,591.5);
p.frameBounds = [rect];


(lib.arrow_checks_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.1,-336.5,455.8,590.1);
p.frameBounds = [rect];


(lib.arrow_checks_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.8,-477.6,528.1,790);
p.frameBounds = [rect];


(lib.arrow_checks_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-310.7,-336.8,414.4,591.6);
p.frameBounds = [rect];


(lib.arrow_checks_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.9,-250,397,906);
p.frameBounds = [rect];


(lib.animation2_39_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glazur2_mc();
	this.instance.setTransform(82.4,-321.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45.5,x:6.4,y:-336.7},5).to({scaleX:0.41,scaleY:0.47,rotation:0,skewX:-37.8,skewY:-52.7,x:4.4,y:-359.7},9).to({scaleX:0.5,scaleY:0.5,skewX:0,skewY:0,x:-11.6,y:-232.5},6).to({scaleY:0.42,skewX:0.1,skewY:-6.2},4).to({scaleY:0.5,skewX:0,skewY:0,x:17.4,y:-229.5},3).to({scaleY:0.42,skewX:0.1,skewY:-6.2,x:18.4,y:-226.5},2).to({scaleY:0.5,skewX:0,skewY:0,x:52.4,y:-229.5},3).to({scaleY:0.42,skewX:0.1,skewY:-6.2,x:50,y:-221},4).to({scaleY:0.5,skewX:0,skewY:0,x:88.4,y:-227.2},1).to({scaleY:0.42,skewX:0.1,skewY:-6.2,x:85,y:-220},4).to({scaleY:0.5,skewX:0,skewY:0,x:128.4,y:-230.2},1).to({scaleY:0.42,skewX:0.1,skewY:-6.2,x:126,y:-223},4).to({scaleY:0.5,skewX:0,skewY:0,x:161.4,y:-238.2},2).to({scaleY:0.42,skewX:0.1,skewY:-6.2,x:162,y:-229},4).to({scaleY:0.5,skewX:0,skewY:0,x:178.4,y:-246.2},2).to({scaleY:0.42,skewX:0.1,skewY:-6.2,x:178,y:-240},5).to({scaleY:0.5,skewX:0,skewY:0,x:178.4,y:-246.2},5).to({rotation:83.4,x:567.3,y:20.7,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.cream4_mc();
	this.instance_1.setTransform(56.5,-140,0.394,0.737,0,0,0,0,16);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({scaleX:1,scaleY:1,y:-126},4).wait(29));

	// animation
	this.instance_2 = new lib.cream4_mc();
	this.instance_2.setTransform(16.5,-136.9,0.425,0.63,0,0,0,0,16.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({regY:16,scaleX:1,scaleY:1,y:-123},4).wait(34));

	// animation
	this.instance_3 = new lib.cream4_mc();
	this.instance_3.setTransform(-20,-138,0.535,0.721,0,0,0,0,16);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1,y:-124},4).wait(39));

	// animation
	this.instance_4 = new lib.cream4_mc();
	this.instance_4.setTransform(-53,-135.9,0.574,0.77,0,0,0,0,16.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({regY:16,scaleX:1,scaleY:1,y:-129},4).wait(44));

	// animation
	this.instance_5 = new lib.cream4_mc();
	this.instance_5.setTransform(-82,-145,0.575,0.474,0,0,0,0,16.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({regY:16,scaleX:1,scaleY:1,y:-137},4).wait(51));

	// animation
	this.instance_6 = new lib.cream4_mc();
	this.instance_6.setTransform(90.5,-151,0.348,0.628,0,0,0,0,16);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,y:-133},4).wait(23));

	// animation
	this.instance_7 = new lib.cream4_mc();
	this.instance_7.setTransform(106.5,-158.9,0.396,0.621,0,0,0,0,16.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({regY:16,scaleX:1,scaleY:1,y:-143},5).wait(16));

	// animation
	this.instance_8 = new lib.posipka2_mc();
	this.instance_8.setTransform(39.4,-212.1);

	this.instance_9 = new lib.posipka2_mc();
	this.instance_9.setTransform(-3.6,-212.1);

	this.instance_10 = new lib.posipka2_mc();
	this.instance_10.setTransform(71.4,-222.1);

	this.instance_11 = new lib.posipka2_mc();
	this.instance_11.setTransform(-48.6,-218.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(75));

	// animation
	this.instance_12 = new lib.cream3_mc();
	this.instance_12.setTransform(7,-208.6,0.382,0.382,0,0,0,-1.1,32);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({regX:-1,scaleX:1,scaleY:1,x:10},9).wait(61));

	// animation
	this.instance_13 = new lib.posipka2_mc();
	this.instance_13.setTransform(28.4,-234);

	this.instance_14 = new lib.posipka2_mc();
	this.instance_14.setTransform(-19.6,-231.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(75));

	// animation
	this.instance_15 = new lib.cake_2_mc();
	this.instance_15.setTransform(9,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-396.5,364,504);
p.frameBounds = [rect, new cjs.Rectangle(-173,-410.3,364,517.8), new cjs.Rectangle(-173,-422,364,529.5), new cjs.Rectangle(-173,-431.5,364,539.1), new cjs.Rectangle(-173,-438.3,364,545.9), new cjs.Rectangle(-173,-442.8,364,550.4), new cjs.Rectangle(-173,-445.3,364,552.8), new cjs.Rectangle(-173,-447.7,364,555.3), new cjs.Rectangle(-173,-450.2,364,557.7), new cjs.Rectangle(-173,-452.6,364,560.1), new cjs.Rectangle(-173,-455.2,364,562.7), new cjs.Rectangle(-173,-457.3,364,564.9), new cjs.Rectangle(-173,-459.4,364,567), new cjs.Rectangle(-173,-461.6,364,569.2), new cjs.Rectangle(-173,-463.9,364,571.5), new cjs.Rectangle(-173,-443,364,550.5), new cjs.Rectangle(-173,-420.1,364,527.7), new cjs.Rectangle(-173,-395,364,502.5), new cjs.Rectangle(-173,-367.8,364,475.3), new cjs.Rectangle(-173,-338.5,364,446), new cjs.Rectangle(-173,-307.5,364,415), new cjs.Rectangle(-173,-306.6,364,414.1), new cjs.Rectangle(-173,-305.6,364,413.2), new cjs.Rectangle(-173,-304.7,364,412.3), new cjs.Rectangle(-173,-304,364,411.6), new cjs.Rectangle(-173,-304,364,411.5), new cjs.Rectangle(-173,-304.3,364,411.8), new cjs.Rectangle(-173,-304.5,364,412), new cjs.Rectangle(-173,-301.1,364,408.6), new cjs.Rectangle(-173,-298,364,405.6), new cjs.Rectangle(-173,-300,364,407.6), new cjs.Rectangle(-173,-302.3,364,409.8), new cjs.Rectangle(-173,-304.5,364,412), new cjs.Rectangle(-173,-301.4,364,409), new cjs.Rectangle(-173,-298.3,364,405.9), new cjs.Rectangle(-173,-295.4,364,402.9), new cjs.Rectangle(-173,-292.6,364,400.1), new cjs.Rectangle(-173,-302.2,364,409.8), new cjs.Rectangle(-173,-299.5,364,407.1), new cjs.Rectangle(-173,-296.8,364,404.3), new cjs.Rectangle(-173,-294.1,364,401.6), new cjs.Rectangle(-173,-291.6,364,399.1), new cjs.Rectangle(-173,-305.2,376.4,412.8), new cjs.Rectangle(-173,-302.5,375.7,410.1), new cjs.Rectangle(-173,-299.7,375,407.3), new cjs.Rectangle(-173,-297.1,374.3,404.6), new cjs.Rectangle(-173,-294.6,373.6,402.1), new cjs.Rectangle(-173,-303.8,391.5,411.3), new cjs.Rectangle(-173,-313.2,409.4,420.8), new cjs.Rectangle(-173,-310,409.5,417.5), new cjs.Rectangle(-173,-306.8,409.5,414.3), new cjs.Rectangle(-173,-303.5,409.6,411.1), new cjs.Rectangle(-173,-300.6,409.6,408.1), new cjs.Rectangle(-173,-310.8,418,418.3), new cjs.Rectangle(-173,-321.2,426.4,428.8), new cjs.Rectangle(-173,-319,426.2,426.6), new cjs.Rectangle(-173,-317.1,426.1,424.7), new cjs.Rectangle(-173,-315.2,426,422.7), new cjs.Rectangle(-173,-313.3,425.8,420.8), new cjs.Rectangle(-173,-311.6,425.6,419.1), new cjs.Rectangle(-173,-313.2,425.8,420.8), new cjs.Rectangle(-173,-315.2,425.9,422.7), new cjs.Rectangle(-173,-317.1,426.1,424.6), new cjs.Rectangle(-173,-319,426.2,426.6), new cjs.Rectangle(-173,-321.2,426.4,428.8), new cjs.Rectangle(-173,-302.6,480.6,410.1), new cjs.Rectangle(-173,-281.8,532.7,389.3), new cjs.Rectangle(-173,-273.6,582.2,381.2), new cjs.Rectangle(-173,-273.6,629.1,381.2), new cjs.Rectangle(-173,-273.6,673.3,381.2), new cjs.Rectangle(-173,-273.6,714.7,381.2), new cjs.Rectangle(-173,-273.6,753.4,381.2), new cjs.Rectangle(-173,-273.6,789.6,381.2), new cjs.Rectangle(-173,-273.6,823.4,381.2), new cjs.Rectangle(-173,-273.6,364,381.2)];


(lib.animation2_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(-75,220,1,1,-70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:100,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.glazur2_mc();
	this.instance_1.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:82.4,y:-321.5},14).wait(1));

	// animation
	this.instance_2 = new lib.posipka2_mc();
	this.instance_2.setTransform(39.4,-212.1);

	this.instance_3 = new lib.posipka2_mc();
	this.instance_3.setTransform(-3.6,-212.1);

	this.instance_4 = new lib.posipka2_mc();
	this.instance_4.setTransform(71.4,-222.1);

	this.instance_5 = new lib.posipka2_mc();
	this.instance_5.setTransform(-48.6,-218.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_6 = new lib.posipka2_mc();
	this.instance_6.setTransform(28.4,-234);

	this.instance_7 = new lib.posipka2_mc();
	this.instance_7.setTransform(-19.6,-231.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(15));

	// animation
	this.instance_8 = new lib.cake_2_mc();
	this.instance_8.setTransform(9,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-246.5,433.8,591.2);
p.frameBounds = [rect, new cjs.Rectangle(-189.8,-246.5,418.6,591.2), new cjs.Rectangle(-174.6,-246.5,425,591.1), new cjs.Rectangle(-173,-246.5,445.2,591.1), new cjs.Rectangle(-173,-246.5,467.1,591.1), new cjs.Rectangle(-173,-246.5,488.9,591.1), new cjs.Rectangle(-173,-246.5,510.7,591.1), new cjs.Rectangle(-173,-246.5,532.6,591.1), new cjs.Rectangle(-173,-246.5,554.5,591.1), new cjs.Rectangle(-173,-246.5,576.8,591.2), new cjs.Rectangle(-173,-246.5,364,354), new cjs.Rectangle(-173,-279.8,364,387.4), new cjs.Rectangle(-173,-318.7,364,426.2), new cjs.Rectangle(-173,-357.6,364,465.1), new cjs.Rectangle(-173,-396.5,364,504)];


(lib.animation2_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glazur2_mc();
	this.instance.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// animation
	this.instance_1 = new lib.posipka2_mc();
	this.instance_1.setTransform(93.4,-251.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:39.4,y:-212.1},5).wait(31));

	// animation
	this.instance_2 = new lib.posipka2_mc();
	this.instance_2.setTransform(89.4,-249.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:-3.6,y:-212.1},4).wait(36));

	// animation
	this.instance_3 = new lib.posipka2_mc();
	this.instance_3.setTransform(96.4,-254.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).to({x:71.4,y:-222.1},4).wait(40));

	// animation
	this.instance_4 = new lib.posipka2_mc();
	this.instance_4.setTransform(74.4,-260);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:28.4,y:-234},4).wait(44));

	// animation
	this.instance_5 = new lib.posipka2_mc();
	this.instance_5.setTransform(39.4,-236.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({x:-48.6,y:-218.1},4).wait(48));

	// animation
	this.instance_6 = new lib.posipka2_mc();
	this.instance_6.setTransform(46.4,-258.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({x:-19.6,y:-231.1},4).wait(53));

	// animation
	this.instance_7 = new lib.pos2_mc();
	this.instance_7.setTransform(123,-256.5,1,1,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:99.2,y:-250.5},3).to({x:123,y:-256.5},3).to({x:99.2,y:-250.5},3).to({x:136,y:-275.5},3).to({x:122,y:-269.5},3).to({x:136,y:-275.5},3).to({x:122,y:-269.5},3).to({x:136,y:-275.5},3).to({x:122,y:-269.5},3).to({x:134.2,y:-268.5},3).to({rotation:-0.5,x:153,y:-260.5},10).to({x:636,y:-187.5,alpha:0.012},18).to({_off:true},1).wait(1));

	// animation
	this.instance_8 = new lib.cake_2_mc();
	this.instance_8.setTransform(9,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-308.6,419.8,606.6);
p.frameBounds = [rect, new cjs.Rectangle(-205,-306.4,411.7,604.3), new cjs.Rectangle(-205,-304.4,403.8,602.3), new cjs.Rectangle(-205,-302.6,396,600.6), new cjs.Rectangle(-205,-304.3,403.9,602.3), new cjs.Rectangle(-205,-306.3,411.8,604.3), new cjs.Rectangle(-205,-308.6,419.8,606.6), new cjs.Rectangle(-205,-306.4,411.7,604.3), new cjs.Rectangle(-205,-304.4,403.8,602.3), new cjs.Rectangle(-205,-302.6,396,600.6), new cjs.Rectangle(-205,-310.6,408.2,608.6), new cjs.Rectangle(-205,-318.9,420.5,616.9), new cjs.Rectangle(-205,-327.6,432.8,625.6), new cjs.Rectangle(-205,-325.3,428,623.3), new cjs.Rectangle(-205,-323.3,423.3,621.3), new cjs.Rectangle(-205,-321.6,418.8,619.6), new cjs.Rectangle(-205,-323.3,423.4,621.3), new cjs.Rectangle(-205,-325.3,428.1,623.3), new cjs.Rectangle(-205,-327.6,432.8,625.6), new cjs.Rectangle(-205,-325.3,428,623.3), new cjs.Rectangle(-205,-323.3,423.3,621.3), new cjs.Rectangle(-205,-321.6,418.8,619.6), new cjs.Rectangle(-205,-323.3,423.4,621.3), new cjs.Rectangle(-205,-325.3,428.1,623.3), new cjs.Rectangle(-205,-327.6,432.8,625.6), new cjs.Rectangle(-205,-325.3,428,623.3), new cjs.Rectangle(-205,-323.3,423.3,621.3), new cjs.Rectangle(-205,-321.6,418.8,619.6), new cjs.Rectangle(-205,-321,422.8,619), new cjs.Rectangle(-205,-320.7,426.9,618.7), new cjs.Rectangle(-205,-320.6,431,618.6), new cjs.Rectangle(-205,-318.2,432.5,616.2), new cjs.Rectangle(-205,-315.9,434,613.9), new cjs.Rectangle(-205,-313.4,435.4,611.3), new cjs.Rectangle(-205,-311.1,436.9,609.1), new cjs.Rectangle(-205,-308.9,438.2,606.9), new cjs.Rectangle(-205,-306.3,439.7,604.3), new cjs.Rectangle(-205,-304,441,602), new cjs.Rectangle(-205,-301.5,442.2,599.5), new cjs.Rectangle(-205,-299.1,443.5,597.1), new cjs.Rectangle(-205,-296.8,444.8,594.8), new cjs.Rectangle(-205,-292.7,471.6,590.7), new cjs.Rectangle(-205,-288.7,498.4,586.7), new cjs.Rectangle(-205,-284.6,525.2,582.6), new cjs.Rectangle(-205,-280.6,552.1,578.6), new cjs.Rectangle(-205,-276.5,578.9,574.5), new cjs.Rectangle(-205,-272.4,605.7,570.4), new cjs.Rectangle(-205,-268.4,632.5,566.3), new cjs.Rectangle(-205,-264.3,659.4,562.3), new cjs.Rectangle(-205,-260.3,686.2,558.3), new cjs.Rectangle(-205,-256.2,713,554.2), new cjs.Rectangle(-205,-252.2,739.9,550.2), new cjs.Rectangle(-205,-248.1,766.7,546.1), new cjs.Rectangle(-205,-246.5,793.5,544.5), new cjs.Rectangle(-205,-246.5,820.4,544.5), new cjs.Rectangle(-205,-246.5,847.2,544.5), new cjs.Rectangle(-205,-246.5,874,544.5), new cjs.Rectangle(-205,-246.5,900.8,544.5), new cjs.Rectangle(-205,-246.5,927.8,544.5), new cjs.Rectangle(-205,-246.5,396,544.5)];


(lib.animation2_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(270.1,185.1,1,1,-149.4,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:350.1,y:0.1,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.glazur2_mc();
	this.instance_1.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.pos2_mc();
	this.instance_2.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-11.5,x:123,y:-256.5},14).wait(1));

	// animation
	this.instance_3 = new lib.cake_2_mc();
	this.instance_3.setTransform(9,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-238.6,644.5,536.6);
p.frameBounds = [rect, rect, new cjs.Rectangle(-205,-238.6,654.2,536.6), new cjs.Rectangle(-205,-238.6,664.2,536.6), new cjs.Rectangle(-205,-238.6,674.2,536.6), new cjs.Rectangle(-205,-238.6,684.2,536.6), new cjs.Rectangle(-205,-238.6,694.2,536.6), new cjs.Rectangle(-205,-261.6,704.2,559.6), new cjs.Rectangle(-205,-284.7,714.2,582.7), new cjs.Rectangle(-205,-308.4,724.5,606.3), new cjs.Rectangle(-205,-238.6,460.1,536.6), new cjs.Rectangle(-205,-238.6,450,536.6), new cjs.Rectangle(-205,-238.6,440,536.6), new cjs.Rectangle(-205,-272,429.9,570), new cjs.Rectangle(-205,-308.6,419.8,606.6)];


(lib.animation2_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pos2_mc();
	this.instance.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// animation
	this.instance_1 = new lib.posipka1_mc();
	this.instance_1.setTransform(151.4,-85.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({x:136.4,y:-65.6},5).wait(22));

	// animation
	this.instance_2 = new lib.posipka1_mc();
	this.instance_2.setTransform(154.4,-88.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).to({x:109.4,y:-53.6},4).wait(25));

	// animation
	this.instance_3 = new lib.posipka1_mc();
	this.instance_3.setTransform(81.4,-63.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({x:79.4,y:-48.6},3).wait(38));

	// animation
	this.instance_4 = new lib.posipka1_mc();
	this.instance_4.setTransform(68.4,-71.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({x:50.4,y:-45.6},5).wait(38));

	// animation
	this.instance_5 = new lib.posipka1_mc();
	this.instance_5.setTransform(32.4,-68.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).to({x:19.4,y:-44.6},5).wait(53));

	// animation
	this.instance_6 = new lib.posipka1_mc();
	this.instance_6.setTransform(15.4,-77.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({x:-10.6,y:-44.6},4).wait(56));

	// animation
	this.instance_7 = new lib.posipka1_mc();
	this.instance_7.setTransform(-38.6,-62.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({x:-41.6,y:-45.6},4).wait(68));

	// animation
	this.instance_8 = new lib.posipka1_mc();
	this.instance_8.setTransform(-50.6,-81.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({x:-68.6,y:-48.6},4).wait(70));

	// animation
	this.instance_9 = new lib.posipka1_mc();
	this.instance_9.setTransform(-77.6,-93.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({x:-95.6,y:-54.6},3).wait(79));

	// animation
	this.instance_10 = new lib.posipka1_mc();
	this.instance_10.setTransform(-87.6,-78.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({x:-117.6,y:-68.6},4).wait(80));

	// animation
	this.instance_11 = new lib.pos1_mc();
	this.instance_11.setTransform(-22,-87.5,1,1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-43.2,x:-38,y:-115.5},4).to({x:-47,y:-109.5},2).to({x:-38,y:-115.5},2).to({x:-6,y:-111.5},8).to({x:-13,y:-105.5},2).to({x:-6,y:-111.5},2).to({x:55,y:-105.5},10).to({x:49,y:-99.5},3).to({x:55,y:-105.5},3).to({x:113,y:-106.5},11).to({x:102,y:-100.5},2).to({x:113,y:-106.5},3).to({x:190,y:-119.5},9).to({x:182,y:-112.5},2).to({x:190,y:-119.5},3).to({rotation:0.6,x:232},7).to({rotation:0.6,x:611,y:104.5,alpha:0.012},15).to({_off:true},1).wait(1));

	// animation
	this.instance_12 = new lib.glazur2_mc();
	this.instance_12.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90));

	// animation
	this.instance_13 = new lib.cake_1_mc();
	this.instance_13.setTransform(9,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-238.6,559.5,536.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-205,-238.6,574.4,536.6), new cjs.Rectangle(-205,-238.6,599.6,536.6), new cjs.Rectangle(-205,-238.6,624.9,536.6), new cjs.Rectangle(-205,-238.6,650.1,536.6), new cjs.Rectangle(-205,-238.6,675.4,536.6), new cjs.Rectangle(-205,-238.6,700.7,536.6), new cjs.Rectangle(-205,-238.6,725.9,536.6), new cjs.Rectangle(-205,-238.6,751.2,536.6), new cjs.Rectangle(-205,-238.6,776.5,536.6), new cjs.Rectangle(-205,-238.6,801.7,536.6), new cjs.Rectangle(-205,-238.6,827,536.6), new cjs.Rectangle(-205,-238.6,852.2,536.6), new cjs.Rectangle(-205,-238.6,877.5,536.6), new cjs.Rectangle(-205,-238.6,902.8,536.6), new cjs.Rectangle(-205,-238.6,559.5,536.6)];


(lib.animation2_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(100,190,1,1,-115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:200,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.pos2_mc();
	this.instance_1.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.pos1_mc();
	this.instance_2.setTransform(67,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-13.5,x:-22,y:-87.5},14).wait(1));

	// animation
	this.instance_3 = new lib.glazur2_mc();
	this.instance_3.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.cake_1_mc();
	this.instance_4.setTransform(9,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-238.6,563.8,536.6);
p.frameBounds = [rect, rect, new cjs.Rectangle(-205,-238.6,576.2,536.6), new cjs.Rectangle(-205,-238.6,588.7,536.6), new cjs.Rectangle(-205,-238.6,601.2,536.6), new cjs.Rectangle(-205,-238.6,613.7,536.6), new cjs.Rectangle(-205,-238.6,626.2,536.6), new cjs.Rectangle(-205,-238.6,638.7,536.6), new cjs.Rectangle(-205,-238.6,651.2,536.6), new cjs.Rectangle(-205,-238.6,663.8,536.6), rect=new cjs.Rectangle(-205,-238.6,559.5,536.6), rect, rect, rect, rect];


(lib.animation2_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pos2_mc();
	this.instance.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// animation
	this.instance_1 = new lib.pos1_mc();
	this.instance_1.setTransform(67,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.glazur1_mc();
	this.instance_3.setTransform(-23,-166,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.59,skewX:11,skewY:-4,x:117,y:-128},15).to({scaleX:0.54,skewY:-9.6,x:251,y:-163},15).to({scaleX:0.7,skewX:0,skewY:0,x:-38,y:-94},5).to({x:26.9,y:-62},5).to({x:116,y:-53},7).to({x:201.7,y:-64},6).to({x:253,y:-88},6).to({rotation:85.7,x:658,y:128.9,alpha:0.012},19).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.cream1_mc();
	this.instance_4.setTransform(9,-200.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.tort_got_mc();
	this.instance_5.setTransform(9.8,-184.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.cream1_mc();
	this.instance_6.setTransform(10,-123.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// animation
	this.instance_7 = new lib.tort_got_mc();
	this.instance_7.setTransform(9.8,-102.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.cream2_mc();
	this.instance_8.setTransform(10,28);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).to({alpha:1},24).wait(21));

	// animation
	this.instance_9 = new lib.cream1_mc();
	this.instance_9.setTransform(9.5,-27.1);
	this.instance_9.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},30).wait(50));

	// animation
	this.instance_10 = new lib.p3_mc();
	this.instance_10.setTransform(9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-271,559.5,569);
p.frameBounds = [rect, new cjs.Rectangle(-205,-268.9,559.5,566.9), new cjs.Rectangle(-205,-266.8,559.5,564.8), new cjs.Rectangle(-205,-264.7,559.5,562.7), new cjs.Rectangle(-205,-262.5,559.5,560.5), new cjs.Rectangle(-205,-260.4,559.5,558.3), new cjs.Rectangle(-205,-258.2,559.5,556.2), new cjs.Rectangle(-205,-255.9,559.5,553.9), new cjs.Rectangle(-205,-253.7,559.5,551.7), new cjs.Rectangle(-205,-251.3,559.5,549.3), new cjs.Rectangle(-205,-249,559.5,547), new cjs.Rectangle(-205,-246.7,559.5,544.7), new cjs.Rectangle(-205,-244.3,559.5,542.3), new cjs.Rectangle(-205,-241.8,559.5,539.8), new cjs.Rectangle(-205,-239.5,559.5,537.5), new cjs.Rectangle(-205,-238.6,559.5,536.6), new cjs.Rectangle(-205,-240.1,559.5,538.1), new cjs.Rectangle(-205,-243,559.5,541), new cjs.Rectangle(-205,-245.8,559.5,543.8), new cjs.Rectangle(-205,-248.8,559.5,546.8), new cjs.Rectangle(-205,-251.5,559.5,549.5), new cjs.Rectangle(-205,-254.5,559.5,552.5), new cjs.Rectangle(-205,-257.2,559.5,555.2), new cjs.Rectangle(-205,-260.1,559.5,558.1), new cjs.Rectangle(-205,-262.8,559.5,560.8), new cjs.Rectangle(-205,-265.7,559.5,563.7), new cjs.Rectangle(-205,-268.4,559.5,566.3), new cjs.Rectangle(-205,-271.4,559.5,569.3), new cjs.Rectangle(-205,-274,559.5,572), new cjs.Rectangle(-205,-276.9,559.5,574.9), new cjs.Rectangle(-205,-279.6,559.5,577.6), new cjs.Rectangle(-205,-264.2,559.5,562.2), new cjs.Rectangle(-205,-248.8,559.5,546.8), rect=new cjs.Rectangle(-205,-238.6,559.5,536.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-205,-238.6,563,536.6), new cjs.Rectangle(-205,-238.6,592.2,536.6), new cjs.Rectangle(-205,-238.6,620.7,536.6), new cjs.Rectangle(-205,-238.6,648.5,536.6), new cjs.Rectangle(-205,-238.6,675.5,536.6), new cjs.Rectangle(-205,-238.6,701.6,536.6), new cjs.Rectangle(-205,-238.6,727,536.6), new cjs.Rectangle(-205,-238.6,751.4,536.6), new cjs.Rectangle(-205,-238.6,775,536.6), new cjs.Rectangle(-205,-238.6,797.6,536.6), new cjs.Rectangle(-205,-238.6,819.4,536.6), new cjs.Rectangle(-205,-238.6,840.2,536.6), new cjs.Rectangle(-205,-238.6,860.1,536.6), new cjs.Rectangle(-205,-238.6,879.1,536.6), new cjs.Rectangle(-205,-238.6,897.3,536.6), new cjs.Rectangle(-205,-238.6,914.5,536.6), new cjs.Rectangle(-205,-238.6,930.9,536.6), new cjs.Rectangle(-205,-238.6,946.5,536.6), new cjs.Rectangle(-205,-238.6,961.3,536.6), new cjs.Rectangle(-205,-238.6,975.5,536.6), new cjs.Rectangle(-205,-238.6,559.5,536.6)];


(lib.animation2_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pos2_mc();
	this.instance.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// animation
	this.instance_1 = new lib.pos1_mc();
	this.instance_1.setTransform(67,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28));

	// animation
	this.instance_3 = new lib.glazur1_mc();
	this.instance_3.setTransform(4,-250,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.61,skewX:7,skewY:-1.9,x:216},20).to({scaleX:0.7,skewX:0,skewY:0,x:-23,y:-166},7).wait(1));

	// animation
	this.instance_4 = new lib.cream1_mc();
	this.instance_4.setTransform(9,-200.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28));

	// animation
	this.instance_5 = new lib.tort_got_mc();
	this.instance_5.setTransform(9.8,-184.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28));

	// animation
	this.instance_6 = new lib.cream1_mc();
	this.instance_6.setTransform(10,-123.1,0.8,0.8);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},20).wait(8));

	// animation
	this.instance_7 = new lib.tort_got_mc();
	this.instance_7.setTransform(9.8,-102.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28));

	// animation
	this.instance_8 = new lib.p3_mc();
	this.instance_8.setTransform(9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-355,559.5,653);
p.frameBounds = [rect, rect=new cjs.Rectangle(-205,-355.1,559.5,653.1), rect, rect=new cjs.Rectangle(-205,-355.5,559.5,653.5), rect, new cjs.Rectangle(-205,-355.6,559.5,653.6), new cjs.Rectangle(-205,-355.9,559.5,653.8), new cjs.Rectangle(-205,-355.9,559.5,653.9), rect=new cjs.Rectangle(-205,-356.2,559.5,654.2), rect, rect, rect=new cjs.Rectangle(-205,-356.5,559.5,654.5), rect, rect, rect=new cjs.Rectangle(-205,-356.7,559.5,654.7), rect, new cjs.Rectangle(-205,-357,559.5,655), new cjs.Rectangle(-205,-356.9,559.5,654.9), new cjs.Rectangle(-205,-356.9,559.5,654.8), new cjs.Rectangle(-205,-357.2,559.5,655.2), new cjs.Rectangle(-205,-357.3,559.5,655.3), new cjs.Rectangle(-205,-344.9,559.5,642.9), new cjs.Rectangle(-205,-332.7,559.5,630.7), new cjs.Rectangle(-205,-320.5,559.5,618.5), new cjs.Rectangle(-205,-308.2,559.5,606.2), new cjs.Rectangle(-205,-295.9,559.5,593.8), new cjs.Rectangle(-205,-283.4,559.5,581.4), new cjs.Rectangle(-205,-271,559.5,569)];


(lib.animation2_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pos2_mc();
	this.instance.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// animation
	this.instance_1 = new lib.pos1_mc();
	this.instance_1.setTransform(67,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	// animation
	this.instance_2 = new lib.glazur2_mc();
	this.instance_2.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// animation
	this.instance_3 = new lib.glazur1_mc();
	this.instance_3.setTransform(33,-330,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.63,skewY:-8.5,x:181},20).to({scaleX:0.7,skewY:0,x:4,y:-250},4).wait(1));

	// animation
	this.instance_4 = new lib.cream1_mc();
	this.instance_4.setTransform(9,-200.2,0.6,0.6);
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},20).wait(5));

	// animation
	this.instance_5 = new lib.tort_got_mc();
	this.instance_5.setTransform(9.8,-184.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.tort_got_mc();
	this.instance_6.setTransform(9.8,-102.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.p3_mc();
	this.instance_7.setTransform(9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-435,559.5,733);
p.frameBounds = [rect, new cjs.Rectangle(-205,-435.6,559.5,733.6), new cjs.Rectangle(-205,-436.4,559.5,734.4), new cjs.Rectangle(-205,-437.3,559.5,735.3), new cjs.Rectangle(-205,-437.8,559.5,735.8), new cjs.Rectangle(-205,-438.7,559.5,736.7), new cjs.Rectangle(-205,-439.5,559.5,737.5), new cjs.Rectangle(-205,-440,559.5,738), new cjs.Rectangle(-205,-440.9,559.5,738.8), new cjs.Rectangle(-205,-441.6,559.5,739.6), new cjs.Rectangle(-205,-442.1,559.5,740.1), new cjs.Rectangle(-205,-442.9,559.5,740.9), new cjs.Rectangle(-205,-443.7,559.5,741.7), new cjs.Rectangle(-205,-444.5,559.5,742.5), new cjs.Rectangle(-205,-445,559.5,743), new cjs.Rectangle(-205,-445.6,559.5,743.6), new cjs.Rectangle(-205,-446.5,559.5,744.5), new cjs.Rectangle(-205,-446.9,559.5,744.9), new cjs.Rectangle(-205,-447.6,559.5,745.6), new cjs.Rectangle(-205,-448.3,559.5,746.3), new cjs.Rectangle(-205,-449,559.5,747), new cjs.Rectangle(-205,-425.7,559.5,723.7), new cjs.Rectangle(-205,-402.1,559.5,700.1), new cjs.Rectangle(-205,-378.7,559.5,676.7), new cjs.Rectangle(-205,-355,559.5,653)];


(lib.animation2_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(-230,160,1,1,-115.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-100,y:300,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.pos2_mc();
	this.instance_1.setTransform(268,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.pos1_mc();
	this.instance_2.setTransform(67,235.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.glazur2_mc();
	this.instance_3.setTransform(-130,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.glazur1_mc();
	this.instance_4.setTransform(-287,215.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.7,scaleY:0.7,x:33,y:-330},14).wait(1));

	// animation
	this.instance_5 = new lib.tort_got_mc();
	this.instance_5.setTransform(9.8,-184.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.tort_got_mc();
	this.instance_6.setTransform(9.8,-102.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.p3_mc();
	this.instance_7.setTransform(9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-362,-228.5,716.5,526.5);
p.frameBounds = [rect, new cjs.Rectangle(-341.2,-228.5,695.8,526.5), new cjs.Rectangle(-320.5,-228.5,675.1,526.5), new cjs.Rectangle(-299.8,-228.5,654.4,526.5), new cjs.Rectangle(-279.1,-228.5,633.6,526.5), new cjs.Rectangle(-258.4,-228.5,612.9,526.5), new cjs.Rectangle(-237.7,-228.5,592.2,526.5), new cjs.Rectangle(-217,-228.5,571.5,529.1), new cjs.Rectangle(-205,-228.5,559.5,546.6), new cjs.Rectangle(-205,-229.2,559.5,564.8), new cjs.Rectangle(-205,-270.4,559.5,568.3), new cjs.Rectangle(-205,-311.5,559.5,609.5), new cjs.Rectangle(-205,-352.7,559.5,650.7), new cjs.Rectangle(-205,-393.8,559.5,691.8), new cjs.Rectangle(-205,-435,559.5,733)];


(lib.animation2_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(80,30,1,1,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:200,y:200,alpha:0.012},8).to({_off:true},1).wait(150));

	// animation
	this.instance_1 = new lib.pos2_mc();
	this.instance_1.setTransform(268,350.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155).to({_off:false},0).to({y:235.4},4).wait(1));

	// animation
	this.instance_2 = new lib.pos1_mc();
	this.instance_2.setTransform(67,350.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({y:235.4},9).wait(1));

	// animation
	this.instance_3 = new lib.glazur2_mc();
	this.instance_3.setTransform(-130,338,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({y:223},14).wait(1));

	// animation
	this.instance_4 = new lib.glazur1_mc();
	this.instance_4.setTransform(-287,330.9,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(139).to({_off:false},0).to({y:215.9},20).wait(1));

	// animation
	this.instance_5 = new lib.arr2_mc();
	this.instance_5.setTransform(7.6,430.9,1,1,90,0,0,3,59.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({y:30},12).to({y:43},2).to({_off:true},1).wait(27).to({_off:false},0).to({y:430.9},8).to({_off:true},1).wait(62));

	// animation
	this.instance_6 = new lib.arr2_mc();
	this.instance_6.setTransform(7.6,430.9,1,1,90,0,0,3,59.1);
	this.instance_6.alpha = 0.441;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).to({y:30},12).to({y:43},2).to({_off:true},1).wait(27).to({_off:false},0).to({y:430.9},8).to({_off:true},1).wait(62));

	// animation
	this.instance_7 = new lib.arr2_mc();
	this.instance_7.setTransform(7.6,43,1,1,90,0,0,3,59.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61).to({_off:false},0).wait(1).to({regY:30.8,rotation:165.8,x:14.5,y:70.4},0).wait(1).to({rotation:238.8,x:-16.5,y:57.6},0).wait(1).to({rotation:309,x:-14.2,y:25.1},0).wait(1).to({rotation:376.5,x:15.7,y:15.9},0).wait(1).to({rotation:441.3,x:35.5,y:38.6},0).wait(1).to({rotation:503.3,x:24.5,y:65.6},0).wait(1).to({rotation:562.5,x:-3.2,y:69},0).wait(1).to({rotation:619,x:-20,y:48.2},0).wait(1).to({rotation:672.7,x:-13,y:23.7},0).wait(1).to({rotation:723.7,x:9.5,y:14.7},0).wait(1).to({rotation:771.9,x:29.8,y:25.4},0).wait(1).to({rotation:817.3,x:35.6,y:46.5},0).wait(1).to({rotation:860.1,x:25.7,y:64.6},0).wait(1).to({rotation:900,x:7.6,y:71.1},0).wait(1).to({rotation:937.2,x:-9.5,y:65.3},0).wait(1).to({rotation:971.6,x:-19.2,y:51.7},0).wait(1).to({rotation:1003.3,x:-19.8,y:36.3},0).wait(1).to({rotation:1032.2,x:-13.2,y:23.8},0).wait(1).to({rotation:1058.4,x:-2.7,y:16.6},0).wait(1).to({rotation:1081.8,x:8.5,y:14.6},0).wait(1).to({rotation:1102.5,x:18.4,y:16.8},0).wait(1).to({rotation:1120.4,x:26,y:21.4},0).wait(1).to({rotation:1135.6,x:30.9,y:26.8},0).wait(1).to({rotation:1148,x:33.8,y:32.3},0).wait(1).to({rotation:1157.6,x:35.2,y:36.8},0).wait(1).to({rotation:1164.5,x:35.7,y:40.1},0).wait(1).to({rotation:1168.6,x:35.8,y:42.2},0).wait(1).to({regY:59.1,rotation:1170,x:7.6,y:42.9},0).to({_off:true},1).wait(70));

	// animation
	this.instance_8 = new lib.arr2_mc();
	this.instance_8.setTransform(7.6,43,1,1,90,0,0,3,59.1);
	this.instance_8.alpha = 0.441;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({_off:false},0).wait(1).to({regY:30.8,rotation:162,x:16.3,y:69.8},0).wait(1).to({rotation:231.6,x:-14.5,y:60.4},0).wait(1).to({rotation:298.7,x:-17.1,y:29.3},0).wait(1).to({rotation:363.3,x:9.3,y:14.7},0).wait(1).to({rotation:425.4,x:33.3,y:31.2},0).wait(1).to({rotation:485.1,x:30.7,y:59.2},0).wait(1).to({rotation:542.3,x:6.4,y:71.1},0).wait(1).to({rotation:596.9,x:-16.1,y:58.3},0).wait(1).to({rotation:649.1,x:-19,y:33.5},0).wait(1).to({rotation:698.9,x:-2.5,y:16.5},0).wait(1).to({rotation:746.1,x:20.1,y:17.5},0).wait(1).to({rotation:790.9,x:34.3,y:33.7},0).wait(1).to({rotation:833.2,x:33.5,y:54},0).wait(1).to({rotation:873,x:20.4,y:68},0).wait(1).to({rotation:910.3,x:2.5,y:70.6},0).wait(1).to({rotation:945.2,x:-12.4,y:62.7},0).wait(1).to({rotation:977.6,x:-19.9,y:48.8},0).wait(1).to({rotation:1007.4,x:-19.3,y:34.3},0).wait(1).to({rotation:1034.9,x:-12.3,y:22.9},0).wait(1).to({rotation:1059.8,x:-2.1,y:16.3},0).wait(1).to({rotation:1082.3,x:8.8,y:14.6},0).wait(1).to({rotation:1102.2,x:18.4,y:16.7},0).wait(1).to({rotation:1119.7,x:25.7,y:21.2},0).wait(1).to({rotation:1134.7,x:30.7,y:26.6},0).wait(1).to({rotation:1147.3,x:33.7,y:31.9},0).wait(1).to({rotation:1157.3,x:35.2,y:36.7},0).wait(1).to({rotation:1164.9,x:35.7,y:40.4},0).wait(1).to({regY:59.1,rotation:1170,x:7.6,y:42.9},0).to({_off:true},1).wait(70));

	// animation
	this.instance_9 = new lib.arr1_mc();
	this.instance_9.setTransform(7.7,434.2,1,1,0,0,0,6.3,59.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).to({y:34.3},12).to({y:46.3},2).wait(28).to({y:434.2},8).to({_off:true},1).wait(62));

	// animation
	this.instance_10 = new lib.clock_mc();
	this.instance_10.setTransform(7.9,418.5,1,1,0,0,0,93.1,97.3);
	this.instance_10._off = true;

	this.instance_11 = new lib.tort_got_mc();
	this.instance_11.setTransform(9.8,-184.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},47).to({state:[{t:this.instance_10}]},12).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_10}]},28).to({state:[{t:this.instance_10}]},8).to({state:[]},1).to({state:[{t:this.instance_11}]},37).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).to({y:18.7},12).to({y:30.7},2).wait(28).to({y:418.5},8).to({_off:true},1).wait(62));

	// animation
	this.instance_12 = new lib.plita4_mc();
	this.instance_12.setTransform(5.9,-120.8);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.instance_13 = new lib.tort_got_mc();
	this.instance_13.setTransform(9.8,-102.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},39).to({state:[{t:this.instance_12}]},8).to({state:[{t:this.instance_12}]},50).to({state:[{t:this.instance_12}]},9).to({state:[]},1).to({state:[{t:this.instance_13}]},21).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(39).to({_off:false},0).to({alpha:1},8).wait(50).to({alpha:0.012},9).to({_off:true},1).wait(53));

	// animation
	this.instance_14 = new lib.p3_mc();
	this.instance_14.setTransform(7,-47.5,0.879,0.879);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(62).to({_off:false},0).to({alpha:1},27).wait(17).to({scaleX:1,scaleY:1,x:9,y:24.5},14).wait(40));

	// animation
	this.instance_15 = new lib.p2_mc();
	this.instance_15.setTransform(27,21.5);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({alpha:1},9).wait(6).to({scaleX:0.88,scaleY:0.88,x:7,y:-47.5},15).to({alpha:0.012},49).to({_off:true},1).wait(71));

	// animation
	this.instance_16 = new lib.p1_mc();
	this.instance_16.setTransform(30.9,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleY:0.7,x:18.9,y:34.4,alpha:0.012},16).to({_off:true},1).wait(143));

	// animation
	this.instance_17 = new lib.plita1_mc();
	this.instance_17.setTransform(5.9,-506.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:-120.8},18).wait(88).to({y:-506.8,alpha:0.012},14).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220.1,-705,528.4,1002.3);
p.frameBounds = [rect, new cjs.Rectangle(-220.1,-683.6,528.4,980.8), new cjs.Rectangle(-220.1,-662.1,542.9,980.4), new cjs.Rectangle(-220.1,-640.7,557.9,980.2), new cjs.Rectangle(-220.1,-619.2,572.9,980), new cjs.Rectangle(-220.1,-597.8,587.9,979.9), new cjs.Rectangle(-220.1,-576.4,602.9,979.7), new cjs.Rectangle(-220.1,-554.9,617.9,979.5), new cjs.Rectangle(-220.1,-533.5,632.9,979.3), new cjs.Rectangle(-220.1,-512,648.4,979.3), new cjs.Rectangle(-220.1,-490.6,452.1,627.5), new cjs.Rectangle(-220.1,-469.1,452.1,607.5), new cjs.Rectangle(-220.1,-447.7,452.1,587.6), new cjs.Rectangle(-220.1,-426.2,452.1,567.7), new cjs.Rectangle(-220.1,-404.8,452.1,547.7), new cjs.Rectangle(-220.1,-383.4,452.1,527.7), new cjs.Rectangle(-220.1,-361.9,452.1,507.8), new cjs.Rectangle(-220.1,-340.5,452.1,445), rect=new cjs.Rectangle(-220.1,-319,452.1,423.5), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220.1,-319,452.1,418.3), new cjs.Rectangle(-220.1,-319,452.1,413), new cjs.Rectangle(-220.1,-319,452.1,407.8), new cjs.Rectangle(-220.1,-319,452.1,402.5), new cjs.Rectangle(-220.1,-319,452.1,397.2), rect=new cjs.Rectangle(-220.1,-319,452.1,396.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220.1,-319,452.1,834.8), new cjs.Rectangle(-220.1,-319,452.1,801.5), new cjs.Rectangle(-220.1,-319,452.1,768.2), new cjs.Rectangle(-220.1,-319,452.1,734.9), new cjs.Rectangle(-220.1,-319,452.1,701.5), new cjs.Rectangle(-220.1,-319,452.1,668.2), new cjs.Rectangle(-220.1,-319,452.1,634.9), new cjs.Rectangle(-220.1,-319,452.1,601.6), new cjs.Rectangle(-220.1,-319,452.1,568.3), new cjs.Rectangle(-220.1,-319,452.1,534.9), new cjs.Rectangle(-220.1,-319,452.1,501.6), new cjs.Rectangle(-220.1,-319,452.1,468.3), new cjs.Rectangle(-220.1,-319,452.1,435), new cjs.Rectangle(-220.1,-319,452.1,441), rect=new cjs.Rectangle(-220.1,-319,452.1,447), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220.1,-319,452.1,495.5), new cjs.Rectangle(-220.1,-319,452.1,543.9), new cjs.Rectangle(-220.1,-319,452.1,592.4), new cjs.Rectangle(-220.1,-319,452.1,640.9), new cjs.Rectangle(-220.1,-319,452.1,689.4), new cjs.Rectangle(-220.1,-319,452.1,737.9), new cjs.Rectangle(-220.1,-319,452.1,786.3), new cjs.Rectangle(-220.1,-319,452.1,834.8), rect=new cjs.Rectangle(-220.1,-319,452.1,396.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-220.1,-346.6,452.1,396.4), new cjs.Rectangle(-220.1,-374.2,452.1,411.5), new cjs.Rectangle(-220.1,-401.7,452.1,444.9), new cjs.Rectangle(-220.1,-429.3,452.1,478.3), new cjs.Rectangle(-220.1,-456.9,452.1,511.7), new cjs.Rectangle(-220.1,-484.5,452.1,545.2), new cjs.Rectangle(-220.1,-512,452.1,578.6), new cjs.Rectangle(-220.1,-539.6,452.1,612), new cjs.Rectangle(-220.1,-567.2,452.1,645.5), new cjs.Rectangle(-220.1,-594.7,452.1,678.8), new cjs.Rectangle(-220.1,-622.3,452.1,712.2), new cjs.Rectangle(-220.1,-649.9,452.1,745.7), new cjs.Rectangle(-220.1,-677.5,452.1,779.1), new cjs.Rectangle(-220.1,-705,452.1,812.6), rect=new cjs.Rectangle(-173,-74.1,364,181.6), rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-173,-161.5,364,269), rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-173,-228.5,364,336), rect, rect, rect, new cjs.Rectangle(-362,-228.5,553,634.4), new cjs.Rectangle(-362,-228.5,553,628.7), new cjs.Rectangle(-362,-228.5,553,622.9), new cjs.Rectangle(-362,-228.5,553,617.2), new cjs.Rectangle(-362,-228.5,553,611.4), new cjs.Rectangle(-362,-228.5,553,605.7), new cjs.Rectangle(-362,-228.5,553,641.5), new cjs.Rectangle(-362,-228.5,553,633.3), new cjs.Rectangle(-362,-228.5,553,625), new cjs.Rectangle(-362,-228.5,553,616.8), new cjs.Rectangle(-362,-228.5,553,608.6), new cjs.Rectangle(-362,-228.5,553,614.4), new cjs.Rectangle(-362,-228.5,553,601.6), new cjs.Rectangle(-362,-228.5,553,588.9), new cjs.Rectangle(-362,-228.5,553,576.1), new cjs.Rectangle(-362,-228.5,553,567.5), new cjs.Rectangle(-362,-228.5,716.5,614.4), new cjs.Rectangle(-362,-228.5,716.5,585.7), new cjs.Rectangle(-362,-228.5,716.5,556.9), new cjs.Rectangle(-362,-228.5,716.5,534.7), new cjs.Rectangle(-362,-228.5,716.5,526.5)];


(lib.animation2_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.spoon_mc();
	this.instance.setTransform(-368.5,-138.5,0.878,0.878,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(89));

	// animation
	this.instance_1 = new lib.spoon3_mc();
	this.instance_1.setTransform(-368.5,-138.5,0.878,0.878,121.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.spoon_mc();
	this.instance_2.setTransform(-83.5,-94.5,0.878,0.797,123.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:123.6,x:-92.5,y:-102.5},8).to({_off:true,scaleY:0.8,x:-83.5,y:-94.5},2).to({_off:false,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},8).to({rotation:123.6,x:-92.5,y:-102.5},10).to({_off:true,scaleY:0.8,x:-83.5,y:-94.5},2).to({_off:false,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},8).to({rotation:123.6,x:-92.5,y:-102.5},9).to({_off:true,scaleY:0.8,x:-83.5,y:-94.5},2).to({_off:false,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},8).to({rotation:123.6,x:-92.5,y:-102.5},11).to({_off:true,scaleY:0.8,x:-83.5,y:-94.5},2).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},2).to({_off:true,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},8).wait(10).to({_off:false,scaleY:0.8,rotation:123.6,x:-83.5,y:-94.5},2).to({_off:true,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},8).wait(9).to({_off:false,scaleY:0.8,rotation:123.6,x:-83.5,y:-94.5},2).to({_off:true,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},8).wait(11).to({_off:false,scaleY:0.8,rotation:123.6,x:-83.5,y:-94.5},2).to({scaleY:0.88,rotation:32.7,x:-673.4,y:128.5,alpha:0.012},17).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.cook3_mc();
	this.instance_3.setTransform(26.2,-36.3,0.299,0.299,33.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(18).to({scaleX:0.4,scaleY:0.4},2).wait(17).to({scaleX:0.49,scaleY:0.49},2).wait(19).to({scaleX:0.73,scaleY:0.73,x:30.2},2).wait(19));

	// animation
	this.instance_4 = new lib.cook3_mc();
	this.instance_4.setTransform(-270.8,-67.3,0.61,0.61,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({scaleX:0.47,scaleY:0.47},1).wait(19).to({scaleX:0.36,scaleY:0.36},1).wait(19).to({_off:true},1).wait(31));

	// animation
	this.instance_5 = new lib.plate_mc();
	this.instance_5.setTransform(-267,-58.7,0.608,0.608);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({x:-686,alpha:0.012},17).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.protiven1_mc();
	this.instance_6.setTransform(78.4,-69.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-442.2,-207.6,631.6,329.5);
p.frameBounds = [rect, rect, new cjs.Rectangle(-407.4,-203.1,596.8,325), new cjs.Rectangle(-395.7,-198.9,585.1,320.8), rect=new cjs.Rectangle(-395.7,-195.1,585.1,317), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-395.7,-196.1,585.1,318), new cjs.Rectangle(-405.6,-201.7,595,323.6), new cjs.Rectangle(-442.2,-207.6,631.6,329.5), new cjs.Rectangle(-414.3,-203.9,603.7,325.8), new cjs.Rectangle(-389.9,-200.5,579.3,322.4), new cjs.Rectangle(-389.9,-197.2,579.3,319.1), rect=new cjs.Rectangle(-389.9,-195.1,579.3,317), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-389.9,-196.1,579.3,318), new cjs.Rectangle(-405.6,-201.7,595,323.6), new cjs.Rectangle(-442.2,-207.6,631.6,329.5), new cjs.Rectangle(-411.3,-203.6,600.7,325.5), new cjs.Rectangle(-389.9,-199.8,579.3,321.7), new cjs.Rectangle(-389.9,-196,579.3,317.9), rect=new cjs.Rectangle(-389.9,-195.1,579.3,317), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-389.9,-196.1,579.3,318), new cjs.Rectangle(-405.6,-201.7,595,323.6), new cjs.Rectangle(-442.2,-207.6,631.6,329.5), new cjs.Rectangle(-416.9,-204.3,606.3,326.2), new cjs.Rectangle(-391.7,-201.2,581.1,323.1), new cjs.Rectangle(-389.9,-198.2,579.3,320.1), rect=new cjs.Rectangle(-389.9,-195.1,579.3,317), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.5,-195.1,603.9,317), new cjs.Rectangle(-439.2,-195.1,628.6,317), new cjs.Rectangle(-463.8,-195.1,653.2,317), new cjs.Rectangle(-488.4,-195.1,677.8,317), new cjs.Rectangle(-513.1,-195.1,702.5,317), new cjs.Rectangle(-537.7,-195.1,727.1,317), new cjs.Rectangle(-562.4,-195.1,751.8,317), new cjs.Rectangle(-587,-195.1,776.4,317), new cjs.Rectangle(-611.7,-195.1,801.1,317), new cjs.Rectangle(-636.3,-195.1,825.7,317), new cjs.Rectangle(-661,-195.1,850.4,317), new cjs.Rectangle(-685.6,-195.1,875,317), new cjs.Rectangle(-710.2,-195.1,899.6,328.7), new cjs.Rectangle(-734.9,-195.1,924.3,346.3), new cjs.Rectangle(-759.5,-195.1,948.9,363.7), new cjs.Rectangle(-784.2,-195.1,973.6,380.5), new cjs.Rectangle(-808.9,-195.1,998.3,396.7), new cjs.Rectangle(-127.6,-195.1,317,317)];


(lib.animation2_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(99.9,40,1,1,-14.7,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:199.9,y:200,alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.spoon_mc();
	this.instance_1.setTransform(-417.5,-86.5,1.003,1.003,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:121.2,x:-368.5,y:-138.5},18).wait(1));

	// animation
	this.instance_2 = new lib.cook3_mc();
	this.instance_2.setTransform(3.4,-87.6,0.903,0.903,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.73,scaleY:0.73,x:-32.4,y:-49.9},0).to({scaleX:0.61,scaleY:0.61,x:-270.8,y:-67.3},18).wait(1));

	// animation
	this.instance_3 = new lib.plate_mc();
	this.instance_3.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.73,scaleY:0.73,x:-27.9,y:-39.7},0).to({scaleX:0.61,scaleY:0.61,x:-267,y:-58.7},18).wait(1));

	// animation
	this.instance_4 = new lib.protiven1_mc();
	this.instance_4.setTransform(635.3,-69.6);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:78.4,alpha:1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-512.2,-272.9,826.4,582.7);
p.frameBounds = [rect, new cjs.Rectangle(-512.2,-199.4,1258.6,509.3), new cjs.Rectangle(-508.2,-198.8,1223.6,528.5), new cjs.Rectangle(-504.1,-198.4,1188.6,548.1), new cjs.Rectangle(-499.8,-198,1153.3,567.7), new cjs.Rectangle(-495.2,-197.6,1117.8,587.3), new cjs.Rectangle(-490.6,-197.2,1082.2,606.9), new cjs.Rectangle(-485.6,-196.9,1046.3,626.6), new cjs.Rectangle(-480.5,-196.5,1010.3,646.2), new cjs.Rectangle(-477.9,-196.1,976.7,665.9), new cjs.Rectangle(-475.2,-195.7,943.1,317.5), new cjs.Rectangle(-472.3,-195.3,909.3,317.2), new cjs.Rectangle(-469.2,-195.1,875.2,317), new cjs.Rectangle(-465.9,-195.1,840.9,317), new cjs.Rectangle(-462.4,-195.1,806.5,317), new cjs.Rectangle(-458.7,-195.1,771.8,317), new cjs.Rectangle(-454.8,-195.1,737,317), new cjs.Rectangle(-450.8,-197.7,702.1,319.5), new cjs.Rectangle(-446.5,-202.8,666.8,324.7), new cjs.Rectangle(-442.2,-207.6,631.6,329.5)];


(lib.animation2_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_kursor_mc();
	this.instance.setTransform(-15.5,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.mayak1_mc();
	this.instance_1.setTransform(144.5,79.9,1,1,0,0,180);

	this.instance_2 = new lib.mayak1_mc();
	this.instance_2.setTransform(-137.5,79.9,1,1,0,0,180);

	this.instance_3 = new lib.line2_mc();
	this.instance_3.setTransform(1.5,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},119).wait(1));

	// animation
	this.instance_4 = new lib.spoon_mc();
	this.instance_4.setTransform(-164.1,-137.5,1.003,1.003,104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:134.2,x:-42.5,y:-247.5},9).to({x:-17.5,y:-117.5},12).to({rotation:119.2,x:-120.5,y:-48.5},12).to({x:-219.5,y:-149.5},14).to({rotation:139.9,x:-108.5,y:-275.5},14).to({x:-7.5,y:-221.5},13).to({rotation:109.9,x:-87.5,y:-57.5},16).to({x:-227.5,y:-139.5},16).to({rotation:69.9,x:-417.5,y:-86.5},13).wait(1));

	// animation
	this.instance_5 = new lib.cook3_mc();
	this.instance_5.setTransform(3.4,-87.6,0.903,0.903,37.2);
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:123.4,alpha:0.199},21).to({rotation:219,alpha:0.602},30).to({rotation:313,alpha:0.801},26).to({rotation:393.7,alpha:1},29).wait(14));

	// animation
	this.instance_6 = new lib.ingr_mc();
	this.instance_6.setTransform(-5.3,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({alpha:0.012},55).to({_off:true},1).wait(13));

	// animation
	this.instance_7 = new lib.plate_mc();
	this.instance_7.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-252.6,-274.8,443.6,599.3);
p.frameBounds = [rect, new cjs.Rectangle(-238.8,-275.8,430.5,600.3), new cjs.Rectangle(-224.7,-276.2,416.7,600.7), new cjs.Rectangle(-210.3,-275.6,401.7,600.1), new cjs.Rectangle(-195.7,-274.1,386.6,598.6), new cjs.Rectangle(-191.5,-277.1,382.4,601.6), new cjs.Rectangle(-191.5,-292.3,382.4,616.8), new cjs.Rectangle(-191.5,-307.2,382.4,631.7), new cjs.Rectangle(-191.5,-321.9,382.4,646.4), new cjs.Rectangle(-191.5,-336.3,382.4,660.8), new cjs.Rectangle(-191.5,-325.3,382.4,649.8), new cjs.Rectangle(-191.5,-314.5,382.4,639), new cjs.Rectangle(-191.5,-303.6,382.4,628.1), new cjs.Rectangle(-191.5,-292.8,382.4,617.3), new cjs.Rectangle(-191.5,-282,382.4,606.5), new cjs.Rectangle(-191.5,-271.1,382.4,595.6), new cjs.Rectangle(-191.5,-260.3,382.4,584.8), new cjs.Rectangle(-191.5,-257.4,382.4,581.8), new cjs.Rectangle(-191.5,-260.1,382.4,584.6), new cjs.Rectangle(-191.5,-265,382.4,589.5), new cjs.Rectangle(-191.5,-269.3,382.4,593.8), new cjs.Rectangle(-191.5,-272.7,382.4,597.2), new cjs.Rectangle(-191.5,-274.2,382.4,598.7), new cjs.Rectangle(-191.5,-275.5,382.7,600), new cjs.Rectangle(-191.5,-276.2,383.3,600.7), new cjs.Rectangle(-191.5,-276.2,383.4,600.7), new cjs.Rectangle(-191.5,-275.7,382.9,600.2), new cjs.Rectangle(-191.5,-274.6,382.4,599.1), new cjs.Rectangle(-191.5,-273,382.4,597.5), new cjs.Rectangle(-191.5,-270.8,382.4,595.3), new cjs.Rectangle(-191.5,-267.8,382.4,592.3), new cjs.Rectangle(-191.5,-264.5,382.4,589), new cjs.Rectangle(-196.3,-260.7,387.3,585.2), new cjs.Rectangle(-205.5,-257.4,396.5,581.8), new cjs.Rectangle(-212.5,-257.4,403.5,581.8), new cjs.Rectangle(-219.6,-257.4,410.6,581.8), new cjs.Rectangle(-226.7,-257.4,417.6,581.8), new cjs.Rectangle(-233.8,-257.4,424.7,581.8), new cjs.Rectangle(-240.8,-257.4,431.8,581.8), new cjs.Rectangle(-247.9,-257.4,438.9,581.8), new cjs.Rectangle(-254.9,-257.4,445.9,581.8), new cjs.Rectangle(-262,-257.4,452.9,581.8), new cjs.Rectangle(-269.1,-257.4,460,581.8), new cjs.Rectangle(-276.1,-257.4,467.1,581.8), new cjs.Rectangle(-283.2,-257.4,474.2,581.8), new cjs.Rectangle(-290.3,-258.5,481.2,583), new cjs.Rectangle(-297.4,-262.7,488.3,587.2), new cjs.Rectangle(-304.5,-266.2,495.5,590.7), new cjs.Rectangle(-295.8,-269.4,486.7,593.8), new cjs.Rectangle(-287.1,-271.9,478.1,596.3), new cjs.Rectangle(-278.5,-273.9,469.4,598.3), new cjs.Rectangle(-269.7,-275.5,461,600), new cjs.Rectangle(-260.9,-277.9,452.7,602.4), new cjs.Rectangle(-252,-288,444,612.5), new cjs.Rectangle(-243,-298.1,434.3,622.6), new cjs.Rectangle(-234,-308.2,424.9,632.7), new cjs.Rectangle(-225.1,-318.2,416,642.7), new cjs.Rectangle(-216.1,-327.9,407.1,652.4), new cjs.Rectangle(-207,-337.8,397.9,662.3), new cjs.Rectangle(-197.8,-347.6,388.7,672.1), new cjs.Rectangle(-191.5,-357.3,382.4,681.8), new cjs.Rectangle(-191.5,-367.2,382.4,691.7), new cjs.Rectangle(-191.5,-362.9,382.4,687.4), new cjs.Rectangle(-191.5,-358.8,382.4,683.3), new cjs.Rectangle(-191.5,-354.6,382.4,679.1), new cjs.Rectangle(-191.5,-350.5,382.4,675), new cjs.Rectangle(-191.5,-346.3,382.4,670.8), new cjs.Rectangle(-191.5,-342.2,382.4,666.7), new cjs.Rectangle(-191.5,-338,382.4,662.5), new cjs.Rectangle(-191.5,-333.8,382.4,658.3), new cjs.Rectangle(-191.5,-329.7,382.4,654.2), new cjs.Rectangle(-191.5,-325.5,382.4,650), new cjs.Rectangle(-191.5,-321.4,382.4,645.8), new cjs.Rectangle(-191.5,-317.2,382.4,641.7), new cjs.Rectangle(-191.5,-313.2,382.4,637.7), new cjs.Rectangle(-191.5,-302.1,382.4,626.6), new cjs.Rectangle(-191.5,-290.8,382.6,615.3), new cjs.Rectangle(-191.5,-279.5,383.7,604), new cjs.Rectangle(-191.5,-276.3,383.5,600.8), new cjs.Rectangle(-191.5,-275.9,383.2,600.4), new cjs.Rectangle(-191.5,-275.1,382.4,599.6), new cjs.Rectangle(-191.5,-273.9,382.4,598.3), new cjs.Rectangle(-191.5,-272.2,382.4,596.7), new cjs.Rectangle(-191.5,-270.1,382.4,594.6), new cjs.Rectangle(-191.5,-267.6,382.4,592.1), new cjs.Rectangle(-191.5,-264.5,382.4,589), new cjs.Rectangle(-191.5,-261.2,382.4,585.7), rect=new cjs.Rectangle(-191.5,-257.4,382.4,581.8), rect, rect, rect, rect, new cjs.Rectangle(-192.8,-257.4,383.8,581.8), new cjs.Rectangle(-201.6,-257.4,392.5,581.8), new cjs.Rectangle(-210.3,-257.4,401.3,581.8), new cjs.Rectangle(-219.1,-257.4,410,581.8), new cjs.Rectangle(-227.8,-257.4,418.8,581.8), new cjs.Rectangle(-236.6,-257.4,427.5,581.8), new cjs.Rectangle(-245.3,-257.4,436.3,581.8), new cjs.Rectangle(-254.1,-257.4,445,581.8), new cjs.Rectangle(-262.8,-257.4,453.7,581.8), new cjs.Rectangle(-271.5,-258.3,462.5,582.8), new cjs.Rectangle(-280.3,-262,471.2,586.5), new cjs.Rectangle(-289,-265.3,480,589.8), new cjs.Rectangle(-297.8,-268.1,488.7,592.6), new cjs.Rectangle(-306.5,-270.5,497.5,595), new cjs.Rectangle(-315.4,-272.9,506.3,597.3), new cjs.Rectangle(-330.3,-272.9,521.3,597.3), new cjs.Rectangle(-345.1,-272.9,536.1,597.3), new cjs.Rectangle(-359.6,-272.9,550.6,597.3), new cjs.Rectangle(-374,-272.9,564.9,597.3), new cjs.Rectangle(-388.1,-272.9,579,597.3), new cjs.Rectangle(-401.8,-272.9,592.7,597.3), new cjs.Rectangle(-417,-272.9,607.9,597.3), new cjs.Rectangle(-433.4,-272.9,624.4,597.3), new cjs.Rectangle(-449.8,-272.9,640.7,597.3), new cjs.Rectangle(-465.7,-272.9,656.7,597.3), new cjs.Rectangle(-481.5,-272.9,672.4,597.3), new cjs.Rectangle(-497,-272.9,687.9,597.3), new cjs.Rectangle(-512.2,-272.9,703.2,597.3)];


(lib.animation2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.spoon_mc();
	this.instance.setTransform(-53.1,-78.5,1.003,1.003,97.2);

	this.instance_1 = new lib.spoon4_mc();
	this.instance_1.setTransform(60.9,-69.5,1.003,1.003,112.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:112.2,x:60.9,y:-69.5},8).to({_off:true},1).wait(12).to({_off:false,rotation:104.2,x:-164.1,y:-137.5},3).to({rotation:97.2,x:-53.1,y:-78.5},11).to({rotation:112.2,x:60.9,y:-69.5},8).to({_off:true},1).wait(12).to({_off:false,rotation:104.2,x:-164.1,y:-137.5},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},1).to({rotation:97.2,x:-164.1,y:-127.5},12).to({_off:true,rotation:104.2,y:-137.5},3).wait(19).to({_off:false,rotation:112.2,x:60.9,y:-69.5},1).to({rotation:97.2,x:-164.1,y:-127.5},12).to({_off:true,rotation:104.2,y:-137.5},3).wait(13));

	// animation
	this.instance_2 = new lib.shugar2_mc();
	this.instance_2.setTransform(19.6,-69.3,0.65,0.79);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(13));

	// animation
	this.instance_3 = new lib.shugar2_mc();
	this.instance_3.setTransform(-12.6,-105.6,0.65,0.79);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(48));

	// animation
	this.instance_4 = new lib.shugar1_mc();
	this.instance_4.setTransform(181,4.7,1.254,1.254);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({x:498,y:90.7,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.butter2_mc();
	this.instance_5.setTransform(-20.4,-76.6,0.736,0.736);

	this.instance_6 = new lib.butter2_mc();
	this.instance_6.setTransform(-64.5,-83.3,0.736,0.736);

	this.instance_7 = new lib.broken_egg2_mc();
	this.instance_7.setTransform(-2.1,-91.5);

	this.instance_8 = new lib.flour1_mc();
	this.instance_8.setTransform(15.9,-60.5);

	this.instance_9 = new lib.flour1_mc();
	this.instance_9.setTransform(-26.5,-137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(72));

	// animation
	this.instance_10 = new lib.plate_mc();
	this.instance_10.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-257.4,447.9,364.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-173,-257.4,447.8,364.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-177.5,-257.4,452.4,364.8), new cjs.Rectangle(-196.2,-257.4,471.1,364.8), new cjs.Rectangle(-214.9,-257.4,489.7,364.8), new cjs.Rectangle(-233.5,-257.4,508.3,364.8), new cjs.Rectangle(-252.2,-257.4,527.1,364.8), new cjs.Rectangle(-252.5,-257.4,527.3,364.8), rect=new cjs.Rectangle(-252.6,-257.4,527.5,364.8), rect, new cjs.Rectangle(-242.5,-257.4,517.3,364.8), new cjs.Rectangle(-232.4,-257.4,507.2,364.8), new cjs.Rectangle(-222.4,-257.4,497.2,364.8), new cjs.Rectangle(-212.2,-257.4,487.1,364.8), new cjs.Rectangle(-202.1,-257.4,477,364.8), new cjs.Rectangle(-192,-257.4,466.8,364.8), new cjs.Rectangle(-181.8,-257.4,456.7,364.8), rect=new cjs.Rectangle(-173,-257.4,447.8,364.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-177.5,-257.4,452.4,364.8), new cjs.Rectangle(-196.2,-257.4,471.1,364.8), new cjs.Rectangle(-214.9,-257.4,489.7,364.8), new cjs.Rectangle(-233.5,-257.4,508.3,364.8), new cjs.Rectangle(-252.2,-257.4,527.1,364.8), new cjs.Rectangle(-252.5,-257.4,527.3,364.8), new cjs.Rectangle(-252.6,-257.4,527.5,364.8), new cjs.Rectangle(-252.6,-257.4,527.6,364.8), new cjs.Rectangle(-252.6,-257.4,556.2,364.8), new cjs.Rectangle(-252.6,-257.4,585.1,364.8), new cjs.Rectangle(-252.6,-257.4,613.9,364.8), new cjs.Rectangle(-252.6,-257.4,642.7,364.8), new cjs.Rectangle(-252.6,-257.4,671.5,364.8), new cjs.Rectangle(-252.6,-257.4,700.3,364.8), new cjs.Rectangle(-252.6,-257.4,729.2,367), new cjs.Rectangle(-252.6,-257.4,758,374.8), new cjs.Rectangle(-252.6,-257.4,786.8,382.5), new cjs.Rectangle(-252.6,-257.4,815.6,390.4), new cjs.Rectangle(-252.6,-257.4,844.5,398.3), new cjs.Rectangle(-252.6,-257.4,443.6,364.8)];


(lib.animation2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(280.2,160.2,1,1,-157.4,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:350.2,y:0.2,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.spoon_mc();
	this.instance_1.setTransform(-8.7,240.1,0.649,0.649,-30,0,0,-0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:97.2,x:-53.6,y:-77.9},13).wait(1));

	// animation
	this.instance_2 = new lib.shugar1_mc();
	this.instance_2.setTransform(283.1,212.3,1,1,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:1.25,scaleY:1.25,x:181,y:4.7},13).wait(1));

	// animation
	this.instance_3 = new lib.shugar1_mc();
	this.instance_3.setTransform(282,212.2);

	this.instance_4 = new lib.spoon_inv_mc();
	this.instance_4.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(14));

	// animation
	this.instance_5 = new lib.butter2_mc();
	this.instance_5.setTransform(-20.4,-76.6,0.736,0.736);

	this.instance_6 = new lib.butter2_mc();
	this.instance_6.setTransform(-64.5,-83.3,0.736,0.736);

	this.instance_7 = new lib.broken_egg2_mc();
	this.instance_7.setTransform(-2.1,-91.5);

	this.instance_8 = new lib.flour1_mc();
	this.instance_8.setTransform(15.9,-60.5);

	this.instance_9 = new lib.flour1_mc();
	this.instance_9.setTransform(-26.5,-137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(15));

	// animation
	this.instance_10 = new lib.plate_mc();
	this.instance_10.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-257.4,591.5,562.8);
p.frameBounds = [rect, new cjs.Rectangle(-173,-257.4,591.5,558.6), new cjs.Rectangle(-173,-257.4,599.8,536.7), new cjs.Rectangle(-173,-257.4,608.6,512.8), new cjs.Rectangle(-173,-257.4,617.3,487), new cjs.Rectangle(-173,-257.4,626.1,466.1), new cjs.Rectangle(-173,-257.4,634.8,443.9), new cjs.Rectangle(-173,-265.9,643.6,428.1), new cjs.Rectangle(-173,-285.9,652.3,431.9), new cjs.Rectangle(-173,-306.3,661.5,437.1), new cjs.Rectangle(-173,-257.4,473.3,372.9), new cjs.Rectangle(-173,-257.4,466.9,364.8), new cjs.Rectangle(-173,-257.4,460.5,364.8), new cjs.Rectangle(-173,-257.4,454.2,364.8), new cjs.Rectangle(-173,-257.4,447.9,364.8)];


(lib.animation2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.butter2_mc();
	this.instance.setTransform(69.5,-186.5,0.362,0.362,-30);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({scaleX:0.55,scaleY:0.55,x:83.5,y:-170.5,alpha:1},5).to({x:81.1,y:-177.5},11).to({scaleX:0.74,scaleY:0.74,rotation:0,x:-20.4,y:-76.6},7).wait(17));

	// animation
	this.instance_1 = new lib.butter2_mc();
	this.instance_1.setTransform(90.5,-182.5,0.362,0.362,-30);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.55,scaleY:0.55,x:84.5,y:-171.5,alpha:1},5).to({x:-63.5,y:-102.5},11).to({scaleX:0.74,scaleY:0.74,rotation:0,x:-64.5,y:-83.3},7).wait(49));

	// animation
	this.instance_2 = new lib.butter3_mc();
	this.instance_2.setTransform(168.8,-221.4,1,1,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-212.4},5).to({x:20.8,y:-144.4},11).wait(7).to({x:168.8,y:-221.4},9).to({y:-212.4},5).to({y:-221.4},11).to({x:77.6,y:-118.4},7).to({rotation:-7.7,x:215.8,y:-215.4},7).to({rotation:-7.7,x:484.8,y:-226.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.butter1_mc();
	this.instance_3.setTransform(106.5,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({x:350.5,y:-225.4,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.broken_egg2_mc();
	this.instance_4.setTransform(-2.1,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72));

	// animation
	this.instance_5 = new lib.flour1_mc();
	this.instance_5.setTransform(15.9,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72));

	// animation
	this.instance_6 = new lib.flour1_mc();
	this.instance_6.setTransform(-26.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72));

	// animation
	this.instance_7 = new lib.plate_mc();
	this.instance_7.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

	// animation
	this.instance_8 = new lib.shugar1_mc();
	this.instance_8.setTransform(282,212.2);

	this.instance_9 = new lib.spoon_inv_mc();
	this.instance_9.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-287.5,529.9,593);
p.frameBounds = [rect, new cjs.Rectangle(-173,-285.4,529.9,590.8), new cjs.Rectangle(-173,-283.6,529.9,589.1), new cjs.Rectangle(-173,-281.8,529.9,587.3), new cjs.Rectangle(-173,-280,529.9,585.5), new cjs.Rectangle(-173,-278.5,529.9,584), new cjs.Rectangle(-173,-272,529.9,577.5), new cjs.Rectangle(-173,-265.9,529.9,571.3), new cjs.Rectangle(-173,-259.7,529.9,565.1), rect=new cjs.Rectangle(-173,-257.4,529.9,562.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-173,-261.6,529.9,567), new cjs.Rectangle(-173,-270.1,529.9,575.6), new cjs.Rectangle(-173,-278.7,529.9,584.1), new cjs.Rectangle(-173,-287.5,529.9,593), new cjs.Rectangle(-173,-285.4,529.9,590.8), new cjs.Rectangle(-173,-283.6,529.9,589.1), new cjs.Rectangle(-173,-281.8,529.9,587.3), new cjs.Rectangle(-173,-280,529.9,585.5), new cjs.Rectangle(-173,-278.5,529.9,584), new cjs.Rectangle(-173,-279,529.9,584.5), new cjs.Rectangle(-173,-279.9,529.9,585.3), new cjs.Rectangle(-173,-280.7,529.9,586.1), new cjs.Rectangle(-173,-281.5,529.9,586.9), new cjs.Rectangle(-173,-282.3,529.9,587.8), new cjs.Rectangle(-173,-283.1,529.9,588.6), new cjs.Rectangle(-173,-284,529.9,589.4), new cjs.Rectangle(-173,-284.8,529.9,590.2), new cjs.Rectangle(-173,-285.6,529.9,591), new cjs.Rectangle(-173,-286.4,529.9,591.8), new cjs.Rectangle(-173,-287.5,529.9,593), new cjs.Rectangle(-173,-272.5,529.9,578), new cjs.Rectangle(-173,-257.8,529.9,563.2), rect=new cjs.Rectangle(-173,-257.4,529.9,562.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-173,-257.4,537.2,562.8), new cjs.Rectangle(-173,-257.4,570.8,562.8), new cjs.Rectangle(-173,-258.6,604.4,564), new cjs.Rectangle(-173,-260,638,565.4), new cjs.Rectangle(-173,-261.3,671.6,566.8), new cjs.Rectangle(-173,-262.7,705.3,568.2), new cjs.Rectangle(-173,-264.1,738.9,569.5), new cjs.Rectangle(-173,-265.9,772.6,571.3), new cjs.Rectangle(-173,-257.4,529.9,562.8)];


(lib.animation2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(45.2,160.1,1,1,152.1,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-199.8,y:100.1,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.butter3_mc();
	this.instance_1.setTransform(148.5,181.6,0.999,0.999,24.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-22.7,x:168.8,y:-221.4},13).wait(1));

	// animation
	this.instance_2 = new lib.butter1_mc();
	this.instance_2.setTransform(88.2,202.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:106.5,y:-179.5},13).wait(1));

	// animation
	this.instance_3 = new lib.broken_egg2_mc();
	this.instance_3.setTransform(-2.1,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.flour1_mc();
	this.instance_4.setTransform(15.9,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.flour1_mc();
	this.instance_5.setTransform(-26.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.plate_mc();
	this.instance_6.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.butter3_mc();
	this.instance_7.setTransform(148.5,232.4,1,1,30);

	this.instance_8 = new lib.butter1_mc();
	this.instance_8.setTransform(88.2,203.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[]},1).wait(14));

	// animation
	this.instance_9 = new lib.shugar1_mc();
	this.instance_9.setTransform(282,212.2);

	this.instance_10 = new lib.spoon_inv_mc();
	this.instance_10.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.2,-257.4,571.1,567.3);
p.frameBounds = [rect, new cjs.Rectangle(-214.2,-257.4,571.1,562.8), new cjs.Rectangle(-244.3,-257.4,601.2,562.8), new cjs.Rectangle(-274.9,-257.4,631.8,562.8), new cjs.Rectangle(-305.5,-257.4,662.4,562.8), new cjs.Rectangle(-336.1,-257.4,693,562.8), new cjs.Rectangle(-366.7,-257.4,723.6,562.8), new cjs.Rectangle(-397.3,-257.4,754.3,562.8), new cjs.Rectangle(-427.9,-257.4,784.8,562.8), new cjs.Rectangle(-459.2,-257.4,816.1,562.8), rect=new cjs.Rectangle(-173,-257.4,529.9,562.8), rect, rect, rect, new cjs.Rectangle(-173,-287.5,529.9,593)];


(lib.animation2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.broken_egg2_mc();
	this.instance.setTransform(0.7,-189.5,0.34,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,x:-2.1,y:-91.5},6).wait(12));

	// animation
	this.instance_1 = new lib.broken_egg1_mc();
	this.instance_1.setTransform(2.5,-222.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(6).to({x:-6.1,y:-340.5,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.egg_mc();
	this.instance_2.setTransform(3.5,-225.5,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-260.5},5).to({y:-246.5},3).to({y:-260.5},3).to({y:-246.5},2).to({_off:true},1).wait(18));

	// animation
	this.instance_3 = new lib.flour1_mc();
	this.instance_3.setTransform(15.9,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32));

	// animation
	this.instance_4 = new lib.flour1_mc();
	this.instance_4.setTransform(-26.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32));

	// animation
	this.instance_5 = new lib.plate_mc();
	this.instance_5.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32));

	// animation
	this.instance_6 = new lib.butter3_mc();
	this.instance_6.setTransform(148.5,232.4,1,1,30);

	this.instance_7 = new lib.shugar1_mc();
	this.instance_7.setTransform(282,212.2);

	this.instance_8 = new lib.butter1_mc();
	this.instance_8.setTransform(88.2,203.3);

	this.instance_9 = new lib.spoon_inv_mc();
	this.instance_9.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-275.5,529.9,585.5);
p.frameBounds = [rect, new cjs.Rectangle(-173,-282.5,529.9,592.5), new cjs.Rectangle(-173,-289.5,529.9,599.5), new cjs.Rectangle(-173,-296.5,529.9,606.5), new cjs.Rectangle(-173,-303.5,529.9,613.5), new cjs.Rectangle(-173,-310.5,529.9,620.5), new cjs.Rectangle(-173,-305.9,529.9,615.8), new cjs.Rectangle(-173,-301.2,529.9,611.2), new cjs.Rectangle(-173,-296.5,529.9,606.5), new cjs.Rectangle(-173,-301.2,529.9,611.2), new cjs.Rectangle(-173,-305.9,529.9,615.8), new cjs.Rectangle(-173,-310.5,529.9,620.5), new cjs.Rectangle(-173,-303.5,529.9,613.5), new cjs.Rectangle(-173,-296.5,529.9,606.5), rect=new cjs.Rectangle(-173,-278.5,529.9,588.5), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-173,-290.3,529.9,600.3), new cjs.Rectangle(-173,-302.1,529.9,612.1), new cjs.Rectangle(-173,-313.9,529.9,623.9), new cjs.Rectangle(-173,-325.7,529.9,635.7), new cjs.Rectangle(-173,-337.5,529.9,647.5), new cjs.Rectangle(-173,-349.3,529.9,659.3), new cjs.Rectangle(-173,-361.1,529.9,671.1), new cjs.Rectangle(-173,-372.9,529.9,682.9), new cjs.Rectangle(-173,-384.7,529.9,694.7), new cjs.Rectangle(-173,-396.5,529.9,706.5), new cjs.Rectangle(-173,-257.4,529.9,567.3)];


(lib.animation2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(-145,155,1,1,174.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-350,y:0,alpha:0.012},8).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.egg_mc();
	this.instance_1.setTransform(-143,205,0.573,0.573,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:90,x:3.5,y:-225.5},13).wait(1));

	// animation
	this.instance_2 = new lib.flour1_mc();
	this.instance_2.setTransform(15.9,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.flour1_mc();
	this.instance_3.setTransform(-26.5,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.plate_mc();
	this.instance_4.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.eggs_mc();
	this.instance_5.setTransform(-146.3,215.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(14));

	// animation
	this.instance_6 = new lib.butter3_mc();
	this.instance_6.setTransform(148.5,232.4,1,1,30);

	this.instance_7 = new lib.shugar1_mc();
	this.instance_7.setTransform(282,212.2);

	this.instance_8 = new lib.butter1_mc();
	this.instance_8.setTransform(88.2,203.3);

	this.instance_9 = new lib.spoon_inv_mc();
	this.instance_9.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-322.2,-257.4,679.1,567.3);
p.frameBounds = [rect, rect, new cjs.Rectangle(-347.7,-257.4,704.7,567.3), new cjs.Rectangle(-373.4,-257.4,730.3,567.3), new cjs.Rectangle(-399,-257.4,755.9,567.3), new cjs.Rectangle(-424.6,-257.4,781.6,567.3), new cjs.Rectangle(-450.2,-257.4,807.2,567.3), new cjs.Rectangle(-475.9,-257.4,832.8,567.3), new cjs.Rectangle(-501.5,-257.4,858.4,567.3), new cjs.Rectangle(-527.2,-271.4,884.1,581.3), rect=new cjs.Rectangle(-173,-257.4,529.9,567.3), rect, rect, rect, new cjs.Rectangle(-173,-275.5,529.9,585.5)];


(lib.animation2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(-260,150,1,1,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0,y:300,alpha:0.012},8).to({_off:true},1).wait(70));

	// animation
	this.instance_1 = new lib.sovok1_mc();
	this.instance_1.setTransform(-220,110.1,0.6,0.6,1.8,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.sovok2_mc();
	this.instance_2.setTransform(-261,147.1,0.6,0.6,15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,regX:0,regY:0,rotation:15,x:-261,y:147.1},7).wait(18).to({_off:false,scaleX:0.96,scaleY:0.96,rotation:-15,x:57.4,y:-219.9},7).to({scaleX:0.6,scaleY:0.6,rotation:0,x:-221,y:112},8).to({_off:true,rotation:15,x:-261,y:147.1},8).wait(18).to({_off:false,scaleX:0.96,scaleY:0.96,rotation:-15,x:88.4,y:-149.9},7).to({rotation:30,x:304.4,y:-168.9,alpha:0.012},4).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},7).to({scaleX:0.96,scaleY:0.96,x:52.4,y:-184.9},18).to({_off:true,rotation:-15,x:57.4,y:-219.9},7).wait(8).to({_off:false,scaleX:0.6,scaleY:0.6,rotation:15,x:-261,y:147.1},8).to({scaleX:0.96,scaleY:0.96,x:76.1,y:-116.9},18).to({_off:true,rotation:-15,x:88.4,y:-149.9},7).wait(6));

	// animation
	this.instance_3 = new lib.flour1_mc();
	this.instance_3.setTransform(15.9,-60.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).wait(6));

	// animation
	this.instance_4 = new lib.flour1_mc();
	this.instance_4.setTransform(-26.5,-137.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).wait(47));

	// animation
	this.instance_5 = new lib.plate_mc();
	this.instance_5.setTransform(9,-75,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.flour_mc();
	this.instance_6.setTransform(-295.8,209.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({y:346.4,alpha:0.012},4).to({_off:true},1).wait(1));

	// animation
	this.instance_7 = new lib.butter3_mc();
	this.instance_7.setTransform(148.5,232.4,1,1,30);

	this.instance_8 = new lib.shugar1_mc();
	this.instance_8.setTransform(282,212.2);

	this.instance_9 = new lib.butter1_mc();
	this.instance_9.setTransform(88.2,203.3);

	this.instance_10 = new lib.eggs_mc();
	this.instance_10.setTransform(-146.3,215.7);

	this.instance_11 = new lib.spoon_inv_mc();
	this.instance_11.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-359.6,-257.4,716.5,567.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-359.6,-257.4,716.5,576.2), new cjs.Rectangle(-359.6,-257.4,716.5,594.9), rect=new cjs.Rectangle(-359.6,-257.4,716.5,567.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-359.6,-266.3,716.5,576.3), new cjs.Rectangle(-359.6,-287.3,716.5,597.3), new cjs.Rectangle(-359.6,-286.4,716.5,596.3), new cjs.Rectangle(-359.6,-285.2,716.5,595.2), new cjs.Rectangle(-359.6,-283.5,716.5,593.5), new cjs.Rectangle(-359.6,-288.5,716.5,598.5), new cjs.Rectangle(-359.6,-300.2,716.5,610.2), new cjs.Rectangle(-359.6,-311.4,716.5,621.3), new cjs.Rectangle(-359.6,-322.3,716.5,632.3), new cjs.Rectangle(-359.6,-273.5,716.5,583.5), rect=new cjs.Rectangle(-359.6,-257.4,716.5,567.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-359.6,-257.4,716.5,571.9), new cjs.Rectangle(-359.6,-257.4,716.5,606.2), new cjs.Rectangle(-359.6,-270.7,726.6,653.8), new cjs.Rectangle(-359.6,-286.5,787.3,703.8), new cjs.Rectangle(-213.2,-257.4,570.2,567.3)];


(lib.animation2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.plate_mc();
	this.instance.setTransform(-575,-75,0.901,0.901);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9,alpha:1},14).wait(1));

	// animation
	this.instance_1 = new lib.butter3_mc();
	this.instance_1.setTransform(148.5,232.4,1,1,30);

	this.instance_2 = new lib.shugar1_mc();
	this.instance_2.setTransform(282,212.2);

	this.instance_3 = new lib.butter1_mc();
	this.instance_3.setTransform(88.2,203.3);

	this.instance_4 = new lib.eggs_mc();
	this.instance_4.setTransform(-146.3,215.7);

	this.instance_5 = new lib.flour_mc();
	this.instance_5.setTransform(-295.8,209.4);

	this.instance_6 = new lib.spoon_inv_mc();
	this.instance_6.setTransform(-26.1,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-756.9,-257.4,1113.9,567.3);
p.frameBounds = [rect, new cjs.Rectangle(-715.2,-257.3,1072.1,567.3), new cjs.Rectangle(-673.5,-257.3,1030.4,567.3), new cjs.Rectangle(-631.7,-257.3,988.7,567.3), new cjs.Rectangle(-590,-257.3,947,567.3), new cjs.Rectangle(-548.3,-257.3,905.3,567.3), new cjs.Rectangle(-506.6,-257.3,863.6,567.3), new cjs.Rectangle(-464.9,-257.3,821.8,567.3), new cjs.Rectangle(-423.2,-257.3,780.1,567.3), new cjs.Rectangle(-381.5,-257.3,738.4,567.3), rect=new cjs.Rectangle(-359.6,-257.3,716.5,567.3), rect, rect, rect, new cjs.Rectangle(-359.6,-257.4,716.5,567.3)];


(lib.animation_location_0_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.location_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_location_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.location_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_location_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_location_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_glow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glow_location_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.801},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.animaion_location_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animaion
	this.instance = new lib.location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.shine_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_7_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-12.7,-13.2,26.5,26.5), new cjs.Rectangle(-15,-15.4,31.1,31.1), new cjs.Rectangle(-17.2,-17.6,35.7,35.7), new cjs.Rectangle(-19.4,-19.7,40,40), new cjs.Rectangle(-21.4,-21.7,44,44), new cjs.Rectangle(-23.3,-23.4,47.7,47.7), new cjs.Rectangle(-24.9,-24.9,50.8,50.8), new cjs.Rectangle(-26.1,-26,53.3,53.3), new cjs.Rectangle(-27.1,-26.8,55.1,55.1), new cjs.Rectangle(-27.6,-27.1,56,56), new cjs.Rectangle(-27.7,-27.1,56,56), new cjs.Rectangle(-27.2,-26.5,55,55), new cjs.Rectangle(-26.3,-25.5,53,53), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-26.6,-25.6,53.1,53.1), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.2,-27,55.8,55.8), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.6,-26.5,54.4,54.4), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-25.2,-24.1,49.3,49.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-21.3,-20.5,41.6,41.6), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-16.7,-16,32.4,32.4), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.9,-11.4,22.9,22.9), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.7,-10.4,20.8,20.8), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-9.1,-8.9,17.8,17.8), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-6.5,-6.4,12.8,12.8), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_6_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-26.6,-25.6,53.1,53.1), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.2,-27,55.8,55.8), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.6,-26.5,54.4,54.4), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-25.2,-24.1,49.3,49.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-21.3,-20.5,41.6,41.6), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-16.7,-16,32.4,32.4), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.9,-11.4,22.9,22.9), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.7,-10.4,20.8,20.8), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-9.1,-8.9,17.8,17.8), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-6.5,-6.4,12.8,12.8), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_5_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27,-25.9,53.8,53.8), new cjs.Rectangle(-28,-26.9,55.7,55.7), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.3,-26.2,53.7,53.7), new cjs.Rectangle(-25.6,-24.6,50.3,50.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-20.6,-19.8,40.2,40.2), new cjs.Rectangle(-17.5,-16.8,34,34), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.1,-10.6,21.3,21.3), new cjs.Rectangle(-10.9,-10.6,21.1,21.1), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-8.8,-8.6,17.1,17), new cjs.Rectangle(-7,-6.9,13.7,13.7), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_2_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-12.7,-13.2,26.5,26.5), new cjs.Rectangle(-15,-15.4,31.1,31.1), new cjs.Rectangle(-17.2,-17.6,35.7,35.7), new cjs.Rectangle(-19.4,-19.7,40,40), new cjs.Rectangle(-21.4,-21.7,44,44), new cjs.Rectangle(-23.3,-23.4,47.7,47.7), new cjs.Rectangle(-24.9,-24.9,50.8,50.8), new cjs.Rectangle(-26.1,-26,53.3,53.3), new cjs.Rectangle(-27.1,-26.8,55.1,55.1), new cjs.Rectangle(-27.6,-27.1,56,56), new cjs.Rectangle(-27.7,-27.1,56,56), new cjs.Rectangle(-27.2,-26.5,55,55), new cjs.Rectangle(-26.3,-25.5,53,53), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27,-25.9,53.8,53.8), new cjs.Rectangle(-28,-26.9,55.7,55.7), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.3,-26.2,53.7,53.7), new cjs.Rectangle(-25.6,-24.6,50.3,50.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-20.6,-19.8,40.2,40.2), new cjs.Rectangle(-17.5,-16.8,34,34), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.1,-10.6,21.3,21.3), new cjs.Rectangle(-10.9,-10.6,21.1,21.1), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-8.8,-8.6,17.1,17), new cjs.Rectangle(-7,-6.9,13.7,13.7), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_1_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_7_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_6_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_5_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_2_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_1_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
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


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.62,alpha:0.012},29).wait(20).to({scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect, new cjs.Rectangle(-69,-59.2,138.2,118.5), new cjs.Rectangle(-68.1,-58.4,136.4,116.9), new cjs.Rectangle(-67.2,-57.6,134.6,115.4), new cjs.Rectangle(-66.3,-56.8,132.8,113.8), new cjs.Rectangle(-65.4,-56.1,131,112.3), new cjs.Rectangle(-64.5,-55.3,129.1,110.7), new cjs.Rectangle(-63.6,-54.5,127.4,109.1), new cjs.Rectangle(-62.7,-53.7,125.5,107.6), new cjs.Rectangle(-61.8,-53,123.7,106), new cjs.Rectangle(-60.9,-52.2,121.9,104.5), new cjs.Rectangle(-60,-51.4,120.1,102.9), new cjs.Rectangle(-59.1,-50.6,118.3,101.4), new cjs.Rectangle(-58.2,-49.8,116.5,99.8), new cjs.Rectangle(-57.3,-49.1,114.7,98.3), new cjs.Rectangle(-56.4,-48.3,112.9,96.7), new cjs.Rectangle(-55.5,-47.6,111.1,95.1), new cjs.Rectangle(-54.6,-46.8,109.2,93.6), new cjs.Rectangle(-53.7,-46,107.4,92), new cjs.Rectangle(-52.8,-45.2,105.6,90.5), new cjs.Rectangle(-51.8,-44.4,103.8,88.9), new cjs.Rectangle(-50.9,-43.7,102,87.4), new cjs.Rectangle(-50,-42.9,100.2,85.8), new cjs.Rectangle(-49.1,-42.1,98.4,84.3), new cjs.Rectangle(-48.2,-41.3,96.6,82.7), new cjs.Rectangle(-47.3,-40.6,94.8,81.1), new cjs.Rectangle(-46.4,-39.8,93,79.6), new cjs.Rectangle(-45.5,-39,91.1,78), new cjs.Rectangle(-44.6,-38.2,89.3,76.5), rect=new cjs.Rectangle(-43.7,-37.5,87.5,74.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-43.7,-37.5,87.5,75), new cjs.Rectangle(-44.4,-38,88.8,76.1), new cjs.Rectangle(-45,-38.6,90.1,77.3), new cjs.Rectangle(-45.7,-39.1,91.5,78.4), new cjs.Rectangle(-46.3,-39.7,92.8,79.5), new cjs.Rectangle(-47,-40.3,94.1,80.6), new cjs.Rectangle(-47.6,-40.8,95.4,81.8), new cjs.Rectangle(-48.3,-41.4,96.7,82.9), new cjs.Rectangle(-48.9,-41.9,98,84), new cjs.Rectangle(-49.6,-42.5,99.3,85.1), new cjs.Rectangle(-50.3,-43.1,100.6,86.3), new cjs.Rectangle(-50.9,-43.6,102,87.4), new cjs.Rectangle(-51.6,-44.2,103.3,88.5), new cjs.Rectangle(-52.2,-44.8,104.6,89.6), new cjs.Rectangle(-52.9,-45.3,105.9,90.8), new cjs.Rectangle(-53.5,-45.9,107.2,91.9), new cjs.Rectangle(-54.2,-46.4,108.5,93), new cjs.Rectangle(-54.9,-47,109.8,94.1), new cjs.Rectangle(-55.5,-47.6,111.1,95.3), new cjs.Rectangle(-56.2,-48.1,112.5,96.4), new cjs.Rectangle(-56.8,-48.7,113.8,97.5), new cjs.Rectangle(-57.5,-49.3,115.1,98.6), new cjs.Rectangle(-58.1,-49.8,116.4,99.8), new cjs.Rectangle(-58.8,-50.4,117.7,100.9), new cjs.Rectangle(-59.4,-50.9,119,102), new cjs.Rectangle(-60.1,-51.5,120.3,103.1), new cjs.Rectangle(-60.8,-52.1,121.6,104.3), new cjs.Rectangle(-61.4,-52.6,123,105.4), new cjs.Rectangle(-62.1,-53.2,124.3,106.5), new cjs.Rectangle(-62.7,-53.8,125.6,107.6), new cjs.Rectangle(-63.4,-54.3,126.9,108.8), new cjs.Rectangle(-64,-54.9,128.2,109.9), new cjs.Rectangle(-64.7,-55.4,129.5,111), new cjs.Rectangle(-65.4,-56,130.8,112.1), new cjs.Rectangle(-66,-56.6,132.1,113.3), new cjs.Rectangle(-66.7,-57.1,133.5,114.4), new cjs.Rectangle(-67.3,-57.7,134.8,115.5), new cjs.Rectangle(-68,-58.3,136.1,116.6), new cjs.Rectangle(-68.6,-58.8,137.4,117.8), new cjs.Rectangle(-69.3,-59.4,138.7,118.9), new cjs.Rectangle(-70,-60,140,120)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.62,alpha:0.012},29).wait(20).to({scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.4,-44.4,88.9,88.9), new cjs.Rectangle(-43.8,-43.8,87.7,87.7), new cjs.Rectangle(-43.2,-43.2,86.5,86.5), new cjs.Rectangle(-42.6,-42.6,85.4,85.4), new cjs.Rectangle(-42,-42,84.2,84.2), new cjs.Rectangle(-41.5,-41.5,83,83), new cjs.Rectangle(-40.9,-40.9,81.9,81.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-39.7,-39.7,79.6,79.5), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38,-38,76.1,76), new cjs.Rectangle(-37.4,-37.4,74.9,74.9), new cjs.Rectangle(-36.8,-36.8,73.7,73.7), new cjs.Rectangle(-36.2,-36.3,72.6,72.5), new cjs.Rectangle(-35.6,-35.7,71.4,71.4), new cjs.Rectangle(-35.1,-35.1,70.2,70.2), new cjs.Rectangle(-34.5,-34.5,69.1,69), new cjs.Rectangle(-33.9,-33.9,67.9,67.9), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-32.7,-32.8,65.6,65.5), new cjs.Rectangle(-32.1,-32.2,64.4,64.4), new cjs.Rectangle(-31.6,-31.6,63.3,63.2), new cjs.Rectangle(-31,-31,62.1,62), new cjs.Rectangle(-30.4,-30.4,60.9,60.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.7), new cjs.Rectangle(-29.2,-29.3,58.6,58.5), new cjs.Rectangle(-28.7,-28.7,57.4,57.4), rect=new cjs.Rectangle(-28.1,-28.1,56.3,56.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-29.3,-29.3,58.8,58.8), new cjs.Rectangle(-29.8,-29.8,59.6,59.6), new cjs.Rectangle(-30.2,-30.2,60.5,60.5), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.9,-31.9,63.9,63.9), new cjs.Rectangle(-32.3,-32.3,64.7,64.7), new cjs.Rectangle(-32.7,-32.7,65.6,65.5), new cjs.Rectangle(-33.1,-33.1,66.4,66.4), new cjs.Rectangle(-33.6,-33.6,67.2,67.2), new cjs.Rectangle(-34,-34,68.1,68.1), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-34.8,-34.8,69.8,69.8), new cjs.Rectangle(-35.2,-35.2,70.6,70.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-36.1,-36.1,72.3,72.3), new cjs.Rectangle(-36.5,-36.5,73.1,73.1), new cjs.Rectangle(-36.9,-36.9,74,74), new cjs.Rectangle(-37.4,-37.4,74.8,74.8), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.2,-38.2,76.5,76.5), new cjs.Rectangle(-38.6,-38.6,77.4,77.4), new cjs.Rectangle(-39,-39,78.2,78.2), new cjs.Rectangle(-39.5,-39.5,79.1,79.1), new cjs.Rectangle(-39.9,-39.9,79.9,79.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.2,-41.2,82.4,82.4), new cjs.Rectangle(-41.6,-41.6,83.3,83.3), new cjs.Rectangle(-42,-42,84.1,84.1), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-42.8,-42.8,85.8,85.8), new cjs.Rectangle(-43.3,-43.3,86.6,86.6), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-44.1,-44.1,88.3,88.3), new cjs.Rectangle(-44.5,-44.5,89.2,89.2), new cjs.Rectangle(-45,-45,90,90)];


(lib.barbie_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.barbie_star_3_mc();
	this.instance.setTransform(-24,24,0.599,0.599,-44.9);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-45,x:-36,y:36,alpha:0.801},5).to({regY:-0.1,scaleX:0.6,scaleY:0.6,rotation:-44.9,x:-50,y:50,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.barbie_star_3_mc();
	this.instance_1.setTransform(-24,-24,0.599,0.599,-134.9,0,0,0.1,0);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-135,x:-36,y:-36,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-134.9,x:-50,y:-50,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.barbie_star_3_mc();
	this.instance_2.setTransform(24.1,24.1,0.599,0.599,45.1,0,0,0.1,0);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:45,x:36,y:36,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:45.1,x:50.1,y:50.1,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.barbie_star_3_mc();
	this.instance_3.setTransform(24.1,-24,0.599,0.599,-44.9,0,0,0.1,0);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-45,x:36,y:-36,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-44.9,x:50.1,y:-50,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.barbie_star_2_mc();
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.801},4).to({rotation:45},5).to({rotation:90},5).wait(5).to({scaleX:0.8,scaleY:0.8,alpha:0.102},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-68.4,-68.4,136.9,136.9), new cjs.Rectangle(-75.4,-75.4,150.9,150.9), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-83.6,-83.6,167.3,167.3), new cjs.Rectangle(-84.9,-84.9,169.8,169.8), new cjs.Rectangle(-83.7,-83.6,167.4,167.4), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-75.5,-75.5,151.1,151.1), new cjs.Rectangle(-68.6,-68.6,137.2,137.2), new cjs.Rectangle(-60,-60,120,120), rect=new cjs.Rectangle(-60,-59.9,120,120), rect, new cjs.Rectangle(-63.7,-63.7,127.5,127.5), new cjs.Rectangle(-69.2,-69.3,138.6,138.6), new cjs.Rectangle(-74.9,-74.9,149.8,149.8), new cjs.Rectangle(-74.7,-74.7,149.4,149.4), new cjs.Rectangle(-74.5,-74.5,149.1,149.1), new cjs.Rectangle(-74.4,-74.3,148.8,148.7), new cjs.Rectangle(-74.2,-74.2,148.5,148.4), new cjs.Rectangle(-74.1,-74,148.2,148.1), new cjs.Rectangle(-73.9,-73.9,147.9,147.8), new cjs.Rectangle(-73.8,-73.8,147.6,147.6), new cjs.Rectangle(-73.6,-73.6,147.3,147.3), new cjs.Rectangle(-73.5,-73.4,147,146.9), new cjs.Rectangle(-73.3,-73.3,146.6,146.6), null];


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({scaleX:0.95},20).to({scaleX:1,scaleY:0.95},20).to({scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},20).to({alpha:0.012},20).wait(1));

	// graph
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwivQCwixD3AAQD4AACwCxQCvCvAAD3QAAD4ivCvQiwCxj4AAQj3AAiwixg");
	this.shape.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,770);
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


(lib.shadows_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sh6_img();
	this.instance.setTransform(-68.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O1IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sh5_img();
	this.instance.setTransform(-68.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O1IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sh4_img();
	this.instance.setTransform(-68.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O1IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sh3_img();
	this.instance.setTransform(-68.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O1IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sh2_img();
	this.instance.setTransform(-68.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O1IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sh1_img();
	this.instance.setTransform(-68.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_shadows_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O1IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drags
	this.drags_mc = new lib.drags_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.drags_mc).wait(1));

	// targets
	this.targets_mc = new lib.targets_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.targets_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,32,885,599.9);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-90,180,180);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-60,120,120);
p.frameBounds = [rect];


(lib.portrait_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAbcIIgbgcIgaAcIwwAAMAAAg4PMAiVAAAMAAAA4Pg");
	mask.setTransform(0,-13.4);

	// hero
	this.hero_1 = new lib.barbie_hair_mc();
	this.hero_1.setTransform(0,5,0.688,0.688);

	this.hero_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.instance_1 = new lib.mini_room_img();
	this.instance_1.setTransform(-118,-206);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,240,400);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-90,180,180);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-60,120,120);
p.frameBounds = [rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// graph
	this.instance_1 = new lib.location_0_5_mc();

	this.instance_2 = new lib.location_1_5_mc();

	this.instance_3 = new lib.animation_location_0_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// glow
	this.instance_4 = new lib.animation_glow_location_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_5 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUSAgzMAAAhBlMAolAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// graph
	this.instance_1 = new lib.location_0_4_mc();

	this.instance_2 = new lib.location_1_4_mc();

	this.instance_3 = new lib.animation_location_0_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// glow
	this.instance_4 = new lib.animation_glow_location_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_5 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUSAgzMAAAhBlMAolAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// graph
	this.instance_1 = new lib.location_0_3_mc();

	this.instance_2 = new lib.location_1_3_mc();

	this.instance_3 = new lib.animation_location_0_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// glow
	this.instance_4 = new lib.animation_glow_location_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_5 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUSAgzMAAAhBlMAolAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// graph
	this.instance_1 = new lib.location_0_2_mc();

	this.instance_2 = new lib.location_1_2_mc();

	this.instance_3 = new lib.animaion_location_0_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// glow
	this.instance_4 = new lib.animation_glow_location_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_5 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUSAgzMAAAhBlMAolAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.location_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// graph
	this.instance_1 = new lib.location_0_1_mc();

	this.instance_2 = new lib.location_1_1_mc();

	this.instance_3 = new lib.animation_location_0_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// glow
	this.instance_4 = new lib.animation_glow_location_mc();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// shadow
	this.instance_5 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUSAgzMAAAhBlMAolAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-210,260,420);
p.frameBounds = [rect, rect, rect];


(lib.lips_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik6_img();
	this.instance.setTransform(-43.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXO2IAA9qISvAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect];


(lib.lips_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik5_img();
	this.instance.setTransform(-43.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXO2IAA9qISvAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect];


(lib.lips_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik4_img();
	this.instance.setTransform(-43.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXO2IAA9qISvAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect];


(lib.lips_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik3_img();
	this.instance.setTransform(-43.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXO2IAA9qISvAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect];


(lib.lips_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik2_img();
	this.instance.setTransform(-43.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXO2IAA9qISvAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstik1_img();
	this.instance.setTransform(-43.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_lips_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApXO2IAA9qISvAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
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


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.barbie_main_1_mc();
	this.instance.setTransform(1200,315);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({x:480},20).to({x:540},5).wait(1));

	// animation
	this.instance_1 = new lib.barbie_main_2_mc();
	this.instance_1.setTransform(1200,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({x:480},20).to({x:540},5).wait(50).to({x:1200},20).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.barbie_main_1_mc();
	this.instance_2.setTransform(540,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({x:1200},20).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(439.5,-4.1,865,605.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(472.5,-4.1,796,605.5), new cjs.Rectangle(505.5,-4.1,727,605.5), new cjs.Rectangle(538.5,-4.1,658,605.5), new cjs.Rectangle(571.5,-4.1,589,605.5), new cjs.Rectangle(604.5,-4.1,520,605.5), new cjs.Rectangle(637.5,-4.1,451,605.5), new cjs.Rectangle(670.5,-4.1,382,605.5), new cjs.Rectangle(703.5,-4.1,313,605.5), new cjs.Rectangle(736.5,-4.1,244,605.5), new cjs.Rectangle(743.1,-4.1,268.4,605.5), new cjs.Rectangle(707.1,-4.1,337.4,605.5), new cjs.Rectangle(671.1,-4.1,406.4,605.5), new cjs.Rectangle(635.1,-4.1,475.4,605.5), new cjs.Rectangle(599.1,-4.1,544.4,605.5), new cjs.Rectangle(563.1,-4.1,613.4,605.5), new cjs.Rectangle(527.1,-4.1,682.4,605.5), new cjs.Rectangle(491.1,-4.1,751.4,605.5), new cjs.Rectangle(455.1,-4.1,820.4,605.5), new cjs.Rectangle(419.1,-4.1,889.4,605.5), new cjs.Rectangle(383.1,-4.1,958.4,605.5), new cjs.Rectangle(395.1,-4.1,201.4,605.5), new cjs.Rectangle(407.1,-4.1,201.4,605.5), new cjs.Rectangle(419.1,-4.1,201.4,605.5), new cjs.Rectangle(431.1,-4.1,201.4,605.5), rect=new cjs.Rectangle(443.1,-4.1,201.4,605.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(443.1,-4.1,898.4,605.5), new cjs.Rectangle(476.1,-4.1,829.4,605.5), new cjs.Rectangle(509.1,-4.1,760.4,605.5), new cjs.Rectangle(542.1,-4.1,691.4,605.5), new cjs.Rectangle(575.1,-4.1,622.4,605.5), new cjs.Rectangle(608.1,-4.1,553.4,605.5), new cjs.Rectangle(641.1,-4.1,484.4,605.5), new cjs.Rectangle(674.1,-4.1,415.4,605.5), new cjs.Rectangle(707.1,-4.1,346.4,605.5), new cjs.Rectangle(740.1,-4.1,277.4,605.5), new cjs.Rectangle(739.5,-4.1,241.9,605.5), new cjs.Rectangle(703.5,-4.1,304,605.5), new cjs.Rectangle(667.5,-4.1,373,605.5), new cjs.Rectangle(631.5,-4.1,442,605.5), new cjs.Rectangle(595.5,-4.1,511,605.5), new cjs.Rectangle(559.5,-4.1,580,605.5), new cjs.Rectangle(523.5,-4.1,649,605.5), new cjs.Rectangle(487.5,-4.1,718,605.5), new cjs.Rectangle(451.5,-4.1,787,605.5), new cjs.Rectangle(415.5,-4.1,856,605.5), new cjs.Rectangle(379.5,-4.1,925,605.5), new cjs.Rectangle(391.5,7.3,241.9,592.2), new cjs.Rectangle(403.5,7.3,241.9,592.2), new cjs.Rectangle(415.5,7.3,241.9,592.2), new cjs.Rectangle(427.5,7.3,241.9,592.2), new cjs.Rectangle(439.5,7.3,241.9,592.2)];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:79,end:159});

	// decor
	this.instance = new lib.decor_location_3_mc();
	this.instance.setTransform(-260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:800},0).wait(23).to({x:-310},16).to({x:-260},4).wait(55).to({x:-800},20).wait(41));

	// decor
	this.instance_1 = new lib.decor_location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:800},0).wait(33).to({x:-50},16).to({x:0},4).wait(55).to({x:-800},20).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:800},0).wait(43).to({x:210},16).to({x:260},4).wait(55).to({x:-800},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,770,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(670,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(610.7,-210,319.4,420), new cjs.Rectangle(541.3,-210,388.8,420), new cjs.Rectangle(471.9,-210,458.1,420), new cjs.Rectangle(402.5,-210,527.5,420), new cjs.Rectangle(333.1,-210,596.9,420), new cjs.Rectangle(263.8,-210,666.3,420), new cjs.Rectangle(194.4,-210,735.6,420), new cjs.Rectangle(125,-210,805,420), new cjs.Rectangle(55.6,-210,874.4,420), new cjs.Rectangle(-13.7,-210,943.8,420), new cjs.Rectangle(-83.1,-210,1013.2,420), new cjs.Rectangle(-152.5,-210,1082.5,420), new cjs.Rectangle(-221.8,-210,1151.9,420), new cjs.Rectangle(-291.2,-210,1221.3,420), new cjs.Rectangle(-360.6,-210,1290.6,420), new cjs.Rectangle(-430,-210,1360,420), new cjs.Rectangle(-417.5,-210,1347.5,420), new cjs.Rectangle(-405,-210,1335,420), new cjs.Rectangle(-392.5,-210,1322.5,420), new cjs.Rectangle(-380,-210,1310,420), new cjs.Rectangle(-380,-210,1273.2,420), new cjs.Rectangle(-380,-210,1236.3,420), new cjs.Rectangle(-380,-210,1199.4,420), new cjs.Rectangle(-380,-210,1162.5,420), new cjs.Rectangle(-380,-210,1125.6,420), new cjs.Rectangle(-380,-210,1088.8,420), new cjs.Rectangle(-380,-210,1051.9,420), new cjs.Rectangle(-380,-210,1015,420), new cjs.Rectangle(-380,-210,978.1,420), new cjs.Rectangle(-380,-210,941.3,420), new cjs.Rectangle(-380,-210,904.4,420), new cjs.Rectangle(-380,-210,867.5,420), new cjs.Rectangle(-380,-210,830.7,420), new cjs.Rectangle(-380,-210,793.8,420), new cjs.Rectangle(-380,-210,756.9,420), new cjs.Rectangle(-380,-210,720,420), new cjs.Rectangle(-380,-210,732.5,420), new cjs.Rectangle(-380,-210,745,420), new cjs.Rectangle(-380,-210,757.5,420), rect=new cjs.Rectangle(-380,-210,770,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-407,-210,797,420), new cjs.Rectangle(-434,-210,824,420), new cjs.Rectangle(-461,-210,851,420), new cjs.Rectangle(-488,-210,878,420), new cjs.Rectangle(-515,-210,905,420), new cjs.Rectangle(-542,-210,932,420), new cjs.Rectangle(-569,-210,959,420), new cjs.Rectangle(-596,-210,986,420), new cjs.Rectangle(-623,-210,1013,420), new cjs.Rectangle(-650,-210,1040,420), new cjs.Rectangle(-677,-210,1067,420), new cjs.Rectangle(-704,-210,1094,420), new cjs.Rectangle(-731,-210,1121,420), new cjs.Rectangle(-758,-210,1148,420), new cjs.Rectangle(-785,-210,1175,420), new cjs.Rectangle(-812,-210,1202,420), new cjs.Rectangle(-839,-210,1229,420), new cjs.Rectangle(-866,-210,1256,420), new cjs.Rectangle(-893,-210,1283,420), new cjs.Rectangle(-920,-210,1310,420), new cjs.Rectangle(-920,-210,1257,420), new cjs.Rectangle(-920,-210,1204,420), new cjs.Rectangle(-920,-210,1151,420), new cjs.Rectangle(-920,-210,1098,420), new cjs.Rectangle(-920,-210,1045,420), new cjs.Rectangle(-920,-210,992,420), new cjs.Rectangle(-920,-210,939,420), new cjs.Rectangle(-920,-210,886,420), new cjs.Rectangle(-920,-210,833,420), new cjs.Rectangle(-920,-210,780,420), new cjs.Rectangle(-920,-210,727,420), new cjs.Rectangle(-920,-210,674,420), new cjs.Rectangle(-920,-210,621,420), new cjs.Rectangle(-920,-210,568,420), new cjs.Rectangle(-920,-210,515,420), new cjs.Rectangle(-920,-210,462,420), new cjs.Rectangle(-920,-210,409,420), new cjs.Rectangle(-920,-210,356,420), new cjs.Rectangle(-920,-210,303,420), rect=new cjs.Rectangle(-930,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// decor
	this.instance = new lib.decor_location_3_mc();
	this.instance.setTransform(-260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:800},0).wait(23).to({x:-310},16).to({x:-260},4).wait(55).to({x:-800},20).wait(41));

	// location_4
	this.location_4 = new lib.location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:800},0).wait(33).to({x:-50},16).to({x:0},4).wait(55).to({x:-800},20).wait(31));

	// decor
	this.instance_1 = new lib.decor_location_5_mc();
	this.instance_1.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:800},0).wait(43).to({x:210},16).to({x:260},4).wait(55).to({x:-800},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,766,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(670,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(610.7,-210,319.4,420), new cjs.Rectangle(541.3,-210,388.8,420), new cjs.Rectangle(471.9,-210,458.1,420), new cjs.Rectangle(402.5,-210,527.5,420), new cjs.Rectangle(333.1,-210,596.9,420), new cjs.Rectangle(263.8,-210,666.3,420), new cjs.Rectangle(194.4,-210,735.6,420), new cjs.Rectangle(125,-210,805,420), new cjs.Rectangle(55.6,-210,874.4,420), new cjs.Rectangle(-13.7,-210,943.8,420), new cjs.Rectangle(-83.1,-210,1009.2,420), new cjs.Rectangle(-152.5,-210,1078.5,420), new cjs.Rectangle(-221.8,-210,1147.9,420), new cjs.Rectangle(-291.2,-210,1217.3,420), new cjs.Rectangle(-360.6,-210,1286.6,420), new cjs.Rectangle(-430,-210,1356,420), new cjs.Rectangle(-417.5,-210,1343.5,420), new cjs.Rectangle(-405,-210,1331,420), new cjs.Rectangle(-392.5,-210,1318.5,420), new cjs.Rectangle(-380,-210,1306,420), new cjs.Rectangle(-380,-210,1269.2,420), new cjs.Rectangle(-380,-210,1232.3,420), new cjs.Rectangle(-380,-210,1195.4,420), new cjs.Rectangle(-380,-210,1158.5,420), new cjs.Rectangle(-380,-210,1121.6,420), new cjs.Rectangle(-380,-210,1084.8,420), new cjs.Rectangle(-380,-210,1047.9,420), new cjs.Rectangle(-380,-210,1011,420), new cjs.Rectangle(-380,-210,974.1,420), new cjs.Rectangle(-380,-210,937.3,420), new cjs.Rectangle(-380,-210,900.4,420), new cjs.Rectangle(-380,-210,863.5,420), new cjs.Rectangle(-380,-210,826.7,420), new cjs.Rectangle(-380,-210,789.8,420), new cjs.Rectangle(-380,-210,752.9,420), new cjs.Rectangle(-380,-210,716,420), new cjs.Rectangle(-380,-210,728.5,420), new cjs.Rectangle(-380,-210,741,420), new cjs.Rectangle(-380,-210,753.5,420), rect=new cjs.Rectangle(-380,-210,766,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-407,-210,793,420), new cjs.Rectangle(-434,-210,820,420), new cjs.Rectangle(-461,-210,847,420), new cjs.Rectangle(-488,-210,874,420), new cjs.Rectangle(-515,-210,901,420), new cjs.Rectangle(-542,-210,928,420), new cjs.Rectangle(-569,-210,955,420), new cjs.Rectangle(-596,-210,982,420), new cjs.Rectangle(-623,-210,1009,420), new cjs.Rectangle(-650,-210,1036,420), new cjs.Rectangle(-677,-210,1063,420), new cjs.Rectangle(-704,-210,1090,420), new cjs.Rectangle(-731,-210,1117,420), new cjs.Rectangle(-758,-210,1144,420), new cjs.Rectangle(-785,-210,1171,420), new cjs.Rectangle(-812,-210,1198,420), new cjs.Rectangle(-839,-210,1225,420), new cjs.Rectangle(-866,-210,1252,420), new cjs.Rectangle(-893,-210,1279,420), new cjs.Rectangle(-920,-210,1306,420), new cjs.Rectangle(-920,-210,1253,420), new cjs.Rectangle(-920,-210,1200,420), new cjs.Rectangle(-920,-210,1147,420), new cjs.Rectangle(-920,-210,1094,420), new cjs.Rectangle(-920,-210,1041,420), new cjs.Rectangle(-920,-210,988,420), new cjs.Rectangle(-920,-210,935,420), new cjs.Rectangle(-920,-210,882,420), new cjs.Rectangle(-920,-210,829,420), new cjs.Rectangle(-930,-210,786,420), new cjs.Rectangle(-930,-210,733,420), new cjs.Rectangle(-930,-210,680,420), new cjs.Rectangle(-930,-210,627,420), new cjs.Rectangle(-930,-210,574,420), new cjs.Rectangle(-930,-210,521,420), new cjs.Rectangle(-930,-210,468,420), new cjs.Rectangle(-930,-210,415,420), new cjs.Rectangle(-930,-210,362,420), new cjs.Rectangle(-930,-210,309,420), rect=new cjs.Rectangle(-930,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// decor
	this.instance = new lib.decor_location_2_mc();
	this.instance.setTransform(-257,3,1,1,0,0,0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:803},0).wait(23).to({x:-307},16).to({x:-257},4).wait(55).to({x:-797},20).wait(41));

	// location_3
	this.location_3 = new lib.location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:800},0).wait(33).to({x:-50},16).to({x:0},4).wait(55).to({x:-800},20).wait(31));

	// decor
	this.instance_1 = new lib.decor_location_4_mc();
	this.instance_1.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:800},0).wait(43).to({x:210},16).to({x:260},4).wait(55).to({x:-800},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,766,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(670,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(610.7,-210,319.4,420), new cjs.Rectangle(541.3,-210,388.8,420), new cjs.Rectangle(471.9,-210,458.1,420), new cjs.Rectangle(402.5,-210,527.5,420), new cjs.Rectangle(333.1,-210,596.9,420), new cjs.Rectangle(263.8,-210,666.3,420), new cjs.Rectangle(194.4,-210,735.6,420), new cjs.Rectangle(125,-210,805,420), new cjs.Rectangle(55.6,-210,874.4,420), new cjs.Rectangle(-13.7,-210,943.8,420), new cjs.Rectangle(-83.1,-210,1009.2,420), new cjs.Rectangle(-152.5,-210,1078.5,420), new cjs.Rectangle(-221.8,-210,1147.9,420), new cjs.Rectangle(-291.2,-210,1217.3,420), new cjs.Rectangle(-360.6,-210,1286.6,420), new cjs.Rectangle(-430,-210,1356,420), new cjs.Rectangle(-417.5,-210,1343.5,420), new cjs.Rectangle(-405,-210,1331,420), new cjs.Rectangle(-392.5,-210,1318.5,420), new cjs.Rectangle(-380,-210,1306,420), new cjs.Rectangle(-380,-210,1269.2,420), new cjs.Rectangle(-380,-210,1232.3,420), new cjs.Rectangle(-380,-210,1195.4,420), new cjs.Rectangle(-380,-210,1158.5,420), new cjs.Rectangle(-380,-210,1121.6,420), new cjs.Rectangle(-380,-210,1084.8,420), new cjs.Rectangle(-380,-210,1047.9,420), new cjs.Rectangle(-380,-210,1011,420), new cjs.Rectangle(-380,-210,974.1,420), new cjs.Rectangle(-380,-210,937.3,420), new cjs.Rectangle(-380,-210,900.4,420), new cjs.Rectangle(-380,-210,863.5,420), new cjs.Rectangle(-380,-210,826.7,420), new cjs.Rectangle(-380,-210,789.8,420), new cjs.Rectangle(-380,-210,752.9,420), new cjs.Rectangle(-380,-210,716,420), new cjs.Rectangle(-380,-210,728.5,420), new cjs.Rectangle(-380,-210,741,420), new cjs.Rectangle(-380,-210,753.5,420), rect=new cjs.Rectangle(-380,-210,766,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-407,-210,793,420), new cjs.Rectangle(-434,-210,820,420), new cjs.Rectangle(-461,-210,847,420), new cjs.Rectangle(-488,-210,874,420), new cjs.Rectangle(-515,-210,901,420), new cjs.Rectangle(-542,-210,928,420), new cjs.Rectangle(-569,-210,955,420), new cjs.Rectangle(-596,-210,982,420), new cjs.Rectangle(-623,-210,1009,420), new cjs.Rectangle(-650,-210,1036,420), new cjs.Rectangle(-677,-210,1063,420), new cjs.Rectangle(-704,-210,1090,420), new cjs.Rectangle(-731,-210,1117,420), new cjs.Rectangle(-758,-210,1144,420), new cjs.Rectangle(-785,-210,1171,420), new cjs.Rectangle(-812,-210,1198,420), new cjs.Rectangle(-839,-210,1225,420), new cjs.Rectangle(-866,-210,1252,420), new cjs.Rectangle(-893,-210,1279,420), new cjs.Rectangle(-920,-210,1306,420), new cjs.Rectangle(-920,-210,1253,420), new cjs.Rectangle(-920,-210,1200,420), new cjs.Rectangle(-920,-210,1147,420), new cjs.Rectangle(-920,-210,1094,420), new cjs.Rectangle(-920,-210,1041,420), new cjs.Rectangle(-920,-210,988,420), new cjs.Rectangle(-920,-210,935,420), new cjs.Rectangle(-920,-210,882,420), new cjs.Rectangle(-920,-210,829,420), new cjs.Rectangle(-930,-210,786,420), new cjs.Rectangle(-930,-210,733,420), new cjs.Rectangle(-930,-210,680,420), new cjs.Rectangle(-930,-210,627,420), new cjs.Rectangle(-930,-210,574,420), new cjs.Rectangle(-930,-210,521,420), new cjs.Rectangle(-930,-210,468,420), new cjs.Rectangle(-930,-210,415,420), new cjs.Rectangle(-930,-210,362,420), new cjs.Rectangle(-930,-210,309,420), rect=new cjs.Rectangle(-930,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// decor
	this.instance = new lib.decor_location_1_mc();
	this.instance.setTransform(-260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:800},0).wait(23).to({x:-310},16).to({x:-260},4).wait(55).to({x:-800},20).wait(41));

	// location_2
	this.location_2 = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:800},0).wait(33).to({x:-50},16).to({x:0},4).wait(55).to({x:-800},20).wait(31));

	// decor
	this.instance_1 = new lib.decor_location_3_mc();
	this.instance_1.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:800},0).wait(43).to({x:210},16).to({x:260},4).wait(55).to({x:-800},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-210,766,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(670,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(610.7,-210,319.4,420), new cjs.Rectangle(541.3,-210,388.8,420), new cjs.Rectangle(471.9,-210,458.1,420), new cjs.Rectangle(402.5,-210,527.5,420), new cjs.Rectangle(333.1,-210,596.9,420), new cjs.Rectangle(263.8,-210,666.3,420), new cjs.Rectangle(194.4,-210,735.6,420), new cjs.Rectangle(125,-210,805,420), new cjs.Rectangle(55.6,-210,874.4,420), new cjs.Rectangle(-13.7,-210,943.8,420), new cjs.Rectangle(-83.1,-210,1009.2,420), new cjs.Rectangle(-152.5,-210,1078.5,420), new cjs.Rectangle(-221.8,-210,1147.9,420), new cjs.Rectangle(-291.2,-210,1217.3,420), new cjs.Rectangle(-360.6,-210,1286.6,420), new cjs.Rectangle(-430,-210,1356,420), new cjs.Rectangle(-417.5,-210,1343.5,420), new cjs.Rectangle(-405,-210,1331,420), new cjs.Rectangle(-392.5,-210,1318.5,420), new cjs.Rectangle(-380,-210,1306,420), new cjs.Rectangle(-380,-210,1269.2,420), new cjs.Rectangle(-380,-210,1232.3,420), new cjs.Rectangle(-380,-210,1195.4,420), new cjs.Rectangle(-380,-210,1158.5,420), new cjs.Rectangle(-380,-210,1121.6,420), new cjs.Rectangle(-380,-210,1084.8,420), new cjs.Rectangle(-380,-210,1047.9,420), new cjs.Rectangle(-380,-210,1011,420), new cjs.Rectangle(-380,-210,974.1,420), new cjs.Rectangle(-380,-210,937.3,420), new cjs.Rectangle(-380,-210,900.4,420), new cjs.Rectangle(-380,-210,863.5,420), new cjs.Rectangle(-380,-210,826.7,420), new cjs.Rectangle(-380,-210,789.8,420), new cjs.Rectangle(-380,-210,752.9,420), new cjs.Rectangle(-380,-210,716,420), new cjs.Rectangle(-380,-210,728.5,420), new cjs.Rectangle(-380,-210,741,420), new cjs.Rectangle(-380,-210,753.5,420), rect=new cjs.Rectangle(-380,-210,766,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-407,-210,793,420), new cjs.Rectangle(-434,-210,820,420), new cjs.Rectangle(-461,-210,847,420), new cjs.Rectangle(-488,-210,874,420), new cjs.Rectangle(-515,-210,901,420), new cjs.Rectangle(-542,-210,928,420), new cjs.Rectangle(-569,-210,955,420), new cjs.Rectangle(-596,-210,982,420), new cjs.Rectangle(-623,-210,1009,420), new cjs.Rectangle(-650,-210,1036,420), new cjs.Rectangle(-677,-210,1063,420), new cjs.Rectangle(-704,-210,1090,420), new cjs.Rectangle(-731,-210,1117,420), new cjs.Rectangle(-758,-210,1144,420), new cjs.Rectangle(-785,-210,1171,420), new cjs.Rectangle(-812,-210,1198,420), new cjs.Rectangle(-839,-210,1225,420), new cjs.Rectangle(-866,-210,1252,420), new cjs.Rectangle(-893,-210,1279,420), new cjs.Rectangle(-920,-210,1306,420), new cjs.Rectangle(-920,-210,1253,420), new cjs.Rectangle(-920,-210,1200,420), new cjs.Rectangle(-920,-210,1147,420), new cjs.Rectangle(-920,-210,1094,420), new cjs.Rectangle(-920,-210,1041,420), new cjs.Rectangle(-920,-210,988,420), new cjs.Rectangle(-920,-210,935,420), new cjs.Rectangle(-920,-210,882,420), new cjs.Rectangle(-920,-210,829,420), new cjs.Rectangle(-930,-210,786,420), new cjs.Rectangle(-930,-210,733,420), new cjs.Rectangle(-930,-210,680,420), new cjs.Rectangle(-930,-210,627,420), new cjs.Rectangle(-930,-210,574,420), new cjs.Rectangle(-930,-210,521,420), new cjs.Rectangle(-930,-210,468,420), new cjs.Rectangle(-930,-210,415,420), new cjs.Rectangle(-930,-210,362,420), new cjs.Rectangle(-930,-210,309,420), rect=new cjs.Rectangle(-930,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-260,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:800},0).wait(23).to({x:-310},16).to({x:-260},4).wait(55).to({x:-800},20).wait(41));

	// decor
	this.instance = new lib.decor_location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:800},0).wait(33).to({x:-50},16).to({x:0},4).wait(55).to({x:-800},20).wait(31));

	// decor
	this.instance_1 = new lib.decor_location_3_mc();
	this.instance_1.setTransform(260,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:800},0).wait(43).to({x:210},16).to({x:260},4).wait(55).to({x:-800},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-210,776,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(670,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(600.7,-210,325.4,420), new cjs.Rectangle(531.3,-210,394.8,420), new cjs.Rectangle(461.9,-210,464.1,420), new cjs.Rectangle(392.5,-210,533.5,420), new cjs.Rectangle(323.1,-210,602.9,420), new cjs.Rectangle(253.8,-210,672.3,420), new cjs.Rectangle(184.4,-210,741.6,420), new cjs.Rectangle(115,-210,811,420), new cjs.Rectangle(45.6,-210,880.4,420), new cjs.Rectangle(-23.7,-210,949.8,420), new cjs.Rectangle(-93.1,-210,1019.2,420), new cjs.Rectangle(-162.5,-210,1088.5,420), new cjs.Rectangle(-231.8,-210,1157.9,420), new cjs.Rectangle(-301.2,-210,1227.3,420), new cjs.Rectangle(-370.6,-210,1296.6,420), new cjs.Rectangle(-440,-210,1366,420), new cjs.Rectangle(-427.5,-210,1353.5,420), new cjs.Rectangle(-415,-210,1341,420), new cjs.Rectangle(-402.5,-210,1328.5,420), new cjs.Rectangle(-390,-210,1316,420), new cjs.Rectangle(-390,-210,1279.2,420), new cjs.Rectangle(-390,-210,1242.3,420), new cjs.Rectangle(-390,-210,1205.4,420), new cjs.Rectangle(-390,-210,1168.5,420), new cjs.Rectangle(-390,-210,1131.6,420), new cjs.Rectangle(-390,-210,1094.8,420), new cjs.Rectangle(-390,-210,1057.9,420), new cjs.Rectangle(-390,-210,1021,420), new cjs.Rectangle(-390,-210,984.1,420), new cjs.Rectangle(-390,-210,947.3,420), new cjs.Rectangle(-390,-210,910.4,420), new cjs.Rectangle(-390,-210,873.5,420), new cjs.Rectangle(-390,-210,836.7,420), new cjs.Rectangle(-390,-210,799.8,420), new cjs.Rectangle(-390,-210,762.9,420), new cjs.Rectangle(-390,-210,726,420), new cjs.Rectangle(-390,-210,738.5,420), new cjs.Rectangle(-390,-210,751,420), new cjs.Rectangle(-390,-210,763.5,420), rect=new cjs.Rectangle(-390,-210,776,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-417,-210,803,420), new cjs.Rectangle(-444,-210,830,420), new cjs.Rectangle(-471,-210,857,420), new cjs.Rectangle(-498,-210,884,420), new cjs.Rectangle(-525,-210,911,420), new cjs.Rectangle(-552,-210,938,420), new cjs.Rectangle(-579,-210,965,420), new cjs.Rectangle(-606,-210,992,420), new cjs.Rectangle(-633,-210,1019,420), new cjs.Rectangle(-660,-210,1046,420), new cjs.Rectangle(-687,-210,1073,420), new cjs.Rectangle(-714,-210,1100,420), new cjs.Rectangle(-741,-210,1127,420), new cjs.Rectangle(-768,-210,1154,420), new cjs.Rectangle(-795,-210,1181,420), new cjs.Rectangle(-822,-210,1208,420), new cjs.Rectangle(-849,-210,1235,420), new cjs.Rectangle(-876,-210,1262,420), new cjs.Rectangle(-903,-210,1289,420), new cjs.Rectangle(-930,-210,1316,420), new cjs.Rectangle(-930,-210,1263,420), new cjs.Rectangle(-930,-210,1210,420), new cjs.Rectangle(-930,-210,1157,420), new cjs.Rectangle(-930,-210,1104,420), new cjs.Rectangle(-930,-210,1051,420), new cjs.Rectangle(-930,-210,998,420), new cjs.Rectangle(-930,-210,945,420), new cjs.Rectangle(-930,-210,892,420), new cjs.Rectangle(-930,-210,839,420), new cjs.Rectangle(-930,-210,786,420), new cjs.Rectangle(-930,-210,733,420), new cjs.Rectangle(-930,-210,680,420), new cjs.Rectangle(-930,-210,627,420), new cjs.Rectangle(-930,-210,574,420), new cjs.Rectangle(-930,-210,521,420), new cjs.Rectangle(-930,-210,468,420), new cjs.Rectangle(-930,-210,415,420), new cjs.Rectangle(-930,-210,362,420), new cjs.Rectangle(-930,-210,309,420), rect=new cjs.Rectangle(-930,-210,260,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(157,-140);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(157,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).wait(3));

	// options
	this.blush_2 = new lib.blush_2_mc();
	this.blush_2.setTransform(0,100);

	this.blush_1 = new lib.blush_1_mc();
	this.blush_1.setTransform(0,-80);

	this.blush_4 = new lib.blush_4_mc();
	this.blush_4.setTransform(0,100);

	this.blush_3 = new lib.blush_3_mc();
	this.blush_3.setTransform(0,-80);

	this.blush_6 = new lib.blush_6_mc();
	this.blush_6.setTransform(0,100);

	this.blush_5 = new lib.blush_5_mc();
	this.blush_5.setTransform(0,-80);

	this.shadows_2 = new lib.shadows_2_mc();
	this.shadows_2.setTransform(0,90);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(0,-90);

	this.shadows_4 = new lib.shadows_4_mc();
	this.shadows_4.setTransform(0,90);

	this.shadows_3 = new lib.shadows_3_mc();
	this.shadows_3.setTransform(0,-90);

	this.shadows_6 = new lib.shadows_6_mc();
	this.shadows_6.setTransform(0,90);

	this.shadows_5 = new lib.shadows_5_mc();
	this.shadows_5.setTransform(0,-90);

	this.lips_2 = new lib.lips_2_mc();
	this.lips_2.setTransform(50,80);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(-50,-70);

	this.lips_4 = new lib.lips_4_mc();
	this.lips_4.setTransform(50,80);

	this.lips_3 = new lib.lips_3_mc();
	this.lips_3.setTransform(-50,-70);

	this.lips_6 = new lib.lips_6_mc();
	this.lips_6.setTransform(50,80);

	this.lips_5 = new lib.lips_5_mc();
	this.lips_5.setTransform(-50,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2}]}).to({state:[{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-175,287,370);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-95,-185,282,370), rect, rect, rect=new cjs.Rectangle(-110,-165,220,340), rect, rect];


(lib.closet_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(360,-280);

	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(360,-280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.earrings_0}]},4).to({state:[{t:this.beads_0}]},3).wait(3));

	// options
	this.hair_7 = new lib.hair_7_mc();
	this.hair_7.setTransform(-279.4,-143.5,1,1,0,0,0,5.6,6.5);

	this.hair_2 = new lib.hair_2_mc();
	this.hair_2.setTransform(291.6,-157.3,1,1,0,0,0,6.6,-7.3);

	this.hair_4 = new lib.hair_4_mc();
	this.hair_4.setTransform(285,-150);

	this.hair_3 = new lib.hair_3_mc();
	this.hair_3.setTransform(-285,-150);

	this.hair_6 = new lib.hair_6_mc();
	this.hair_6.setTransform(292.8,-126.8,1,1,0,0,0,7.8,23.2);

	this.hair_5 = new lib.hair_5_mc();
	this.hair_5.setTransform(-285,-150);

	this.hair_1 = new lib.hair_1_mc();
	this.hair_1.setTransform(285,-150);

	this.hair_8 = new lib.hair_8_mc();
	this.hair_8.setTransform(-279,-141.8,1,1,0,0,0,6,8.2);

	this.earrings_2 = new lib.earrings_2_mc();
	this.earrings_2.setTransform(285,-155);

	this.earrings_1 = new lib.earrings_1_mc();
	this.earrings_1.setTransform(-285,-155);

	this.earrings_4 = new lib.earrings_4_mc();
	this.earrings_4.setTransform(285,-155);

	this.earrings_3 = new lib.earrings_3_mc();
	this.earrings_3.setTransform(-285,-155);

	this.earrings_6 = new lib.earrings_6_mc();
	this.earrings_6.setTransform(285,-155);

	this.earrings_5 = new lib.earrings_5_mc();
	this.earrings_5.setTransform(-285,-155);

	this.beads_2 = new lib.beads_2_mc();
	this.beads_2.setTransform(285,-155);

	this.beads_1 = new lib.beads_1_mc();
	this.beads_1.setTransform(-285,-155);

	this.beads_4 = new lib.beads_4_mc();
	this.beads_4.setTransform(285,-155);

	this.beads_3 = new lib.beads_3_mc();
	this.beads_3.setTransform(-285,-155);

	this.beads_6 = new lib.beads_6_mc();
	this.beads_6.setTransform(285,-155);

	this.beads_5 = new lib.beads_5_mc();
	this.beads_5.setTransform(-285,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_7}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_8},{t:this.hair_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2}]},1).to({state:[{t:this.earrings_3},{t:this.earrings_4}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.beads_1},{t:this.beads_2}]},1).to({state:[{t:this.beads_3},{t:this.beads_4}]},1).to({state:[{t:this.beads_5},{t:this.beads_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-443.5,-302.2,899.9,333.1);
p.frameBounds = [rect, new cjs.Rectangle(-395.2,-269.8,777.3,251.2), new cjs.Rectangle(-371.4,-302.2,827.8,325.3), new cjs.Rectangle(-443.5,-301.7,816.3,286.3), rect=new cjs.Rectangle(-380,-304,764,279), rect, rect, rect, rect, rect];


(lib.closet_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(200,-170);

	this.bag_0 = new lib.bag_0_mc();
	this.bag_0.setTransform(200,-60);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(200,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.headdress_0}]},8).to({state:[{t:this.bag_0}]},1).to({state:[{t:this.glasses_0}]},1).wait(1));

	// options
	this.dress_20 = new lib.dress_20_mc();
	this.dress_20.setTransform(115,-250);

	this.dress_19 = new lib.dress_19_mc();
	this.dress_19.setTransform(-115,-250);

	this.dress_18 = new lib.dress_18_mc();
	this.dress_18.setTransform(0,-250);

	this.shoes_4 = new lib.shoes_4_mc();
	this.shoes_4.setTransform(0,80);

	this.dress_3 = new lib.dress_3_mc();
	this.dress_3.setTransform(115,-250);

	this.dress_5 = new lib.dress_5_mc();
	this.dress_5.setTransform(0,-250);

	this.dress_4 = new lib.dress_4_mc();
	this.dress_4.setTransform(-115,-250);

	this.dress_7 = new lib.dress_7_mc();
	this.dress_7.setTransform(115,-250);

	this.dress_6 = new lib.dress_6_mc();
	this.dress_6.setTransform(0,-250);

	this.dress_8 = new lib.dress_8_mc();
	this.dress_8.setTransform(-115,-250);

	this.shoes_9 = new lib.shoes_9_mc();
	this.shoes_9.setTransform(80,105);

	this.shoes_8 = new lib.shoes_8_mc();
	this.shoes_8.setTransform(-70,95);

	this.dress_9 = new lib.dress_9_mc();
	this.dress_9.setTransform(115,-250);

	this.dress_2 = new lib.dress_2_mc();
	this.dress_2.setTransform(0,-250);

	this.dress_11 = new lib.dress_11_mc();
	this.dress_11.setTransform(-115,-250);

	this.dress_12 = new lib.dress_12_mc();
	this.dress_12.setTransform(115,-250);

	this.dress_14 = new lib.dress_14_mc();
	this.dress_14.setTransform(0,-250);

	this.dress_16 = new lib.dress_16_mc();
	this.dress_16.setTransform(-115,-250);

	this.dress_13 = new lib.dress_13_mc();
	this.dress_13.setTransform(115,-250);

	this.dress_1 = new lib.dress_1_mc();
	this.dress_1.setTransform(0,-250);

	this.dress_15 = new lib.dress_15_mc();
	this.dress_15.setTransform(-115,-250);

	this.shoes_10 = new lib.shoes_10_mc();
	this.shoes_10.setTransform(80,65);

	this.shoes_6 = new lib.shoes_6_mc();
	this.shoes_6.setTransform(-70,58);

	this.dress_10 = new lib.dress_10_mc();
	this.dress_10.setTransform(-70,-250);

	this.dress_17 = new lib.dress_17_mc();
	this.dress_17.setTransform(70,-247.9,1,1,0,0,0,0,2.1);

	this.shoes_11 = new lib.shoes_11_mc();
	this.shoes_11.setTransform(80,-17);

	this.shoes_7 = new lib.shoes_7_mc();
	this.shoes_7.setTransform(-70,-20);

	this.shoes_5 = new lib.shoes_5_mc();
	this.shoes_5.setTransform(80,-113);

	this.shoes_3 = new lib.shoes_3_mc();
	this.shoes_3.setTransform(-70,-122);

	this.shoes_2 = new lib.shoes_2_mc();
	this.shoes_2.setTransform(80,80);

	this.shoes_1 = new lib.shoes_1_mc();
	this.shoes_1.setTransform(-70,75);

	this.headdress_7 = new lib.headdress_7_mc();
	this.headdress_7.setTransform(174,-273);

	this.headdress_6 = new lib.headdress_6_mc();
	this.headdress_6.setTransform(80,75);

	this.headdress_5 = new lib.headdress_5_mc();
	this.headdress_5.setTransform(80,-25);

	this.headdress_4 = new lib.headdress_4_mc();
	this.headdress_4.setTransform(-80,75);

	this.headdress_3 = new lib.headdress_3_mc();
	this.headdress_3.setTransform(-80,-135);

	this.headdress_2 = new lib.headdress_2_mc();
	this.headdress_2.setTransform(80,-130);

	this.headdress_1 = new lib.headdress_1_mc();
	this.headdress_1.setTransform(-80,-15);

	this.bag_10 = new lib.bag_10_mc();
	this.bag_10.setTransform(-120,-50);

	this.bag_2 = new lib.bag_2_mc();
	this.bag_2.setTransform(-35,-57);

	this.bag_4 = new lib.bag_4_mc();
	this.bag_4.setTransform(48,-45);

	this.bag_9 = new lib.bag_9_mc();
	this.bag_9.setTransform(-115,80);

	this.bag_8 = new lib.bag_8_mc();
	this.bag_8.setTransform(115,75);

	this.bag_7 = new lib.bag_7_mc();
	this.bag_7.setTransform(-5,85);

	this.bag_6 = new lib.bag_6_mc();
	this.bag_6.setTransform(-5,-168);

	this.bag_5 = new lib.bag_5_mc();
	this.bag_5.setTransform(100,-170);

	this.bag_3 = new lib.bag_3_mc();
	this.bag_3.setTransform(130,-50);

	this.bag_1 = new lib.bag_1_mc();
	this.bag_1.setTransform(-100,-180);

	this.glasses_6 = new lib.glasses_6_mc();
	this.glasses_6.setTransform(70,-18);

	this.glasses_5 = new lib.glasses_5_mc();
	this.glasses_5.setTransform(-70,-15);

	this.glasses_4 = new lib.glasses_4_mc();
	this.glasses_4.setTransform(70,85);

	this.glasses_3 = new lib.glasses_3_mc();
	this.glasses_3.setTransform(70,-115);

	this.glasses_2 = new lib.glasses_2_mc();
	this.glasses_2.setTransform(-70,85);

	this.glasses_1 = new lib.glasses_1_mc();
	this.glasses_1.setTransform(-70,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_18},{t:this.dress_19},{t:this.dress_20}]}).to({state:[{t:this.dress_4},{t:this.dress_5},{t:this.dress_3},{t:this.shoes_4}]},1).to({state:[{t:this.dress_8},{t:this.dress_6},{t:this.dress_7}]},1).to({state:[{t:this.dress_11},{t:this.dress_2},{t:this.dress_9},{t:this.shoes_8},{t:this.shoes_9}]},1).to({state:[{t:this.dress_16},{t:this.dress_14},{t:this.dress_12}]},1).to({state:[{t:this.dress_15},{t:this.dress_1},{t:this.dress_13}]},1).to({state:[{t:this.dress_17},{t:this.dress_10},{t:this.shoes_6},{t:this.shoes_10}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_5},{t:this.shoes_7},{t:this.shoes_11}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_6},{t:this.headdress_7}]},1).to({state:[{t:this.bag_1},{t:this.bag_3},{t:this.bag_5},{t:this.bag_6},{t:this.bag_7},{t:this.bag_8},{t:this.bag_9},{t:this.bag_4},{t:this.bag_2},{t:this.bag_10}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2},{t:this.glasses_3},{t:this.glasses_4},{t:this.glasses_5},{t:this.glasses_6}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,-240);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.shelf_mc();

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{y:100}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{y:100}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-100}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-100}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-140}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-100}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242,-257.2,462,481.7);
p.frameBounds = [rect, new cjs.Rectangle(-220,-258.9,440.4,389), new cjs.Rectangle(-220,-257.4,440,429.8), new cjs.Rectangle(-220,-256.5,440,448.5), new cjs.Rectangle(-220,-259,440,380.5), new cjs.Rectangle(-220,-257.4,440,424.8), new cjs.Rectangle(-220,-258,440,388.1), new cjs.Rectangle(-220,-167,440,297), new cjs.Rectangle(-220,-334,467.4,464.1), new cjs.Rectangle(-220,-232.8,440,362.9), new cjs.Rectangle(-220,-188,440,318)];


(lib.cake_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blesk_anim_mc();
	this.instance.setTransform(75,122,1,1,0,0,0,0.5,0.5);

	this.instance_1 = new lib.blesk_anim_mc();
	this.instance_1.setTransform(-55,33.1,1,1,0,0,0,0.5,0.5);

	this.instance_2 = new lib.blesk_anim_mc();
	this.instance_2.setTransform(102,25.1,1,1,0,0,0,0.5,0.5);

	this.instance_3 = new lib.blesk_anim_mc();
	this.instance_3.setTransform(-72,-67.9,1,1,0,0,0,0.5,0.5);

	this.instance_4 = new lib.blesk_anim_mc();
	this.instance_4.setTransform(55,-105.9,1,1,0,0,0,0.5,0.5);

	this.instance_5 = new lib.blesk_anim_mc();
	this.instance_5.setTransform(-50,-145.9,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_6 = new lib.cream4_mc();
	this.instance_6.setTransform(47.5,-42.9,1,1,0,0,0,0,16);

	this.instance_7 = new lib.cream4_mc();
	this.instance_7.setTransform(7.5,-39.9,1,1,0,0,0,0,16);

	this.instance_8 = new lib.cream4_mc();
	this.instance_8.setTransform(-29,-40.9,1,1,0,0,0,0,16);

	this.instance_9 = new lib.cream4_mc();
	this.instance_9.setTransform(-62,-45.9,1,1,0,0,0,0,16);

	this.instance_10 = new lib.cream4_mc();
	this.instance_10.setTransform(-91,-53.9,1,1,0,0,0,0,16);

	this.instance_11 = new lib.cream4_mc();
	this.instance_11.setTransform(81.5,-49.9,1,1,0,0,0,0,16);

	this.instance_12 = new lib.cream4_mc();
	this.instance_12.setTransform(97.5,-59.9,1,1,0,0,0,0,16);

	this.instance_13 = new lib.posipka2_mc();
	this.instance_13.setTransform(30.4,-129.1);

	this.instance_14 = new lib.posipka2_mc();
	this.instance_14.setTransform(-12.6,-129.1);

	this.instance_15 = new lib.posipka2_mc();
	this.instance_15.setTransform(62.4,-139.1);

	this.instance_16 = new lib.posipka2_mc();
	this.instance_16.setTransform(-57.6,-135.1);

	this.instance_17 = new lib.cream3_mc();
	this.instance_17.setTransform(1,-125.6,1,1,0,0,0,-1,32);

	this.instance_18 = new lib.posipka2_mc();
	this.instance_18.setTransform(19.4,-150.9);

	this.instance_19 = new lib.posipka2_mc();
	this.instance_19.setTransform(-28.6,-148.1);

	this.instance_20 = new lib.cake_2_mc();
	this.instance_20.setTransform(0,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-190.6,364,381.2);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242,-257.2,462,481.7);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-443.5,-302.2,899.9,333.1);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-175,287,370);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.shine_mc = new lib.shine_1_6_mc();
	this.shine_mc.setTransform(148,-10);
	this.shine_mc.alpha = 0.801;

	this.shine_mc_1 = new lib.shine_1_5_mc();
	this.shine_mc_1.setTransform(-115,35);
	this.shine_mc_1.alpha = 0.801;

	this.shine_mc_2 = new lib.shine_1_2_mc();
	this.shine_mc_2.setTransform(76,-102);
	this.shine_mc_2.alpha = 0.801;

	this.shine_mc_3 = new lib.shine_1_1_mc();
	this.shine_mc_3.setTransform(-135,-97);
	this.shine_mc_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]}).to({state:[{t:this.shine_mc_3,p:{x:-150,y:-75}},{t:this.shine_mc_2,p:{x:53,y:-70}},{t:this.shine_mc_1,p:{x:-135,y:98}},{t:this.shine_mc,p:{x:145}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).to({state:[{t:this.shine_mc_3,p:{x:-135,y:-97}},{t:this.shine_mc_2,p:{x:76,y:-102}},{t:this.shine_mc_1,p:{x:-115,y:35}},{t:this.shine_mc,p:{x:148}}]},1).wait(1));

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-180,-130);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-180,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-130,360,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hand_cursor_1_2_mc();
	this.instance.setTransform(60,20,1,1,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:220,y:80,alpha:0.012},8).to({_off:true},1).wait(40));

	// animation
	this.instance_1 = new lib.cake_0_3_mc();
	this.instance_1.setTransform(9,-83);

	this.instance_2 = new lib.cake_3_mc();
	this.instance_2.setTransform(9,-83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-273.6,492.6,549);
p.frameBounds = [rect, rect, new cjs.Rectangle(-173,-273.6,511.9,556.3), new cjs.Rectangle(-173,-273.6,531.9,563.8), new cjs.Rectangle(-173,-273.6,551.9,571.3), new cjs.Rectangle(-173,-273.6,571.9,578.8), new cjs.Rectangle(-173,-273.6,591.9,586.3), new cjs.Rectangle(-173,-273.6,611.9,593.8), new cjs.Rectangle(-173,-273.6,631.9,601.3), new cjs.Rectangle(-173,-273.6,652.6,609), rect=new cjs.Rectangle(-173,-273.6,364,381.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.blinking_light_3_mc = function(mode,startPosition,loop) {
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
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.visible = false;
		/*
		
		*/
		var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);
		function _startAnimationBlinkingLightFunc()
		{
			/*
			
			*/
			clearTimeout(timeOut_id);
			/*
			
			*/
			_body_mc.play();
			_body_mc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.blinking_light_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,140,120);
p.frameBounds = [rect];


(lib.blinking_light_3_2_mc = function(mode,startPosition,loop) {
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
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.visible = false;
		/*
		
		*/
		var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);
		function _startAnimationBlinkingLightFunc()
		{
			/*
			
			*/
			clearTimeout(timeOut_id);
			/*
			
			*/
			_body_mc.play();
			_body_mc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.blinking_light_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.barbie_star_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.barbie_star_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,770);
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
p.nominalBounds = rect = new cjs.Rectangle(-180,-130,360,260);
p.frameBounds = [rect];


(lib.subjects_quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(150,530,0.75,0.75);

	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(610,480,0.75,0.75);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(500,50,0.75,0.75);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(470,410,0.75,0.75);

	this.instance_4 = new lib.barbie_star_mc();
	this.instance_4.setTransform(140,320,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(139));

	// animation
	this.shine_mc = new lib.shine_1_5_mc();
	this.shine_mc.setTransform(431,345);
	this.shine_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(99).to({_off:false},0).wait(41));

	// animation
	this.shine_mc_1 = new lib.shine_1_2_mc();
	this.shine_mc_1.setTransform(130,162);
	this.shine_mc_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_1).wait(89).to({_off:false},0).wait(51));

	// animation
	this.shine_mc_2 = new lib.shine_1_1_mc();
	this.shine_mc_2.setTransform(330,209);
	this.shine_mc_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_2).wait(79).to({_off:false},0).wait(61));

	// animation
	this.shine_mc_3 = new lib.shine_1_7_mc();
	this.shine_mc_3.setTransform(728,330);
	this.shine_mc_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_3).wait(69).to({_off:false},0).wait(71));

	// animation
	this.shine_mc_4 = new lib.shine_1_6_mc();
	this.shine_mc_4.setTransform(726,128);
	this.shine_mc_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_4).wait(59).to({_off:false},0).wait(81));

	// animation
	this.shine_mc_5 = new lib.shine_1_5_mc();
	this.shine_mc_5.setTransform(437,171);
	this.shine_mc_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_5).wait(49).to({_off:false},0).wait(91));

	// animation
	this.shine_mc_6 = new lib.shine_1_2_mc();
	this.shine_mc_6.setTransform(340,78);
	this.shine_mc_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_6).wait(39).to({_off:false},0).wait(101));

	// animation
	this.shine_mc_7 = new lib.shine_1_1_mc();
	this.shine_mc_7.setTransform(82,205);
	this.shine_mc_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shine_mc_7).wait(29).to({_off:false},0).wait(111));

	// animation
	this.instance_5 = new lib.item12_mc();
	this.instance_5.setTransform(284.5,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.012},18).to({_off:true},1).wait(120));

	// animation
	this.instance_6 = new lib.item11_mc();
	this.instance_6.setTransform(59.3,328.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({alpha:0.012},20).to({_off:true},1).wait(110));

	// animation
	this.instance_7 = new lib.item10_mc();
	this.instance_7.setTransform(187,205.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({alpha:0.012},20).to({_off:true},1).wait(100));

	// animation
	this.instance_8 = new lib.item9_mc();
	this.instance_8.setTransform(351,320.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({alpha:0.012},20).to({_off:true},1).wait(90));

	// animation
	this.instance_9 = new lib.item8_mc();
	this.instance_9.setTransform(358.3,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({alpha:0.012},20).to({_off:true},1).wait(80));

	// animation
	this.instance_10 = new lib.item7_mc();
	this.instance_10.setTransform(421,528.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({alpha:0.012},20).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(13.3,4.4,596.7,555.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(13.3,4.4,641.7,570.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(13.3,5,641.7,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(70.8,5,584.2,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(70.8,5,667,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(70.8,5,669,570), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-390,-210,776,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-380,-210,766,420), rect, rect, new cjs.Rectangle(-380,-210,770,420)];


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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.barbie_mc();
	this.hero_1.setTransform(395,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(2).to({x:460},0).wait(1));

	// container_1
	this.container_1_mc = new lib.portrait_mc();
	this.container_1_mc.setTransform(160,300);

	this.timeline.addTween(cjs.Tween.get(this.container_1_mc).to({_off:true},2).wait(1));

	// decor
	this.instance = new lib.cake_3_mc();
	this.instance.setTransform(640,355,0.516,0.516,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:235},0).wait(1));

	// decor
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(640,510);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:235},0).wait(1));

	// bg
	this.instance_2 = new lib.back_room_clean_mc();

	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,610);
p.frameBounds = [rect, rect, rect];


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


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,400);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(120,220);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-120,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_3}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242,-285,462,735);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,400);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(160,120);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-160,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_2}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();
	this.body_mc.setTransform(0,-4.2,1,1,0,0,0,0,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-443.5,-302.2,899.9,752.2);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(0,235);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(0,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-295,362,845);
p.frameBounds = [rect];


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
	this.instance.setTransform(0.5,-499.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:80.5},10).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-630,360,260);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-180,-572,360,260), new cjs.Rectangle(-180,-514,360,260), new cjs.Rectangle(-180,-456,360,260), new cjs.Rectangle(-180,-398,360,260), new cjs.Rectangle(-180,-340,360,260), new cjs.Rectangle(-180,-282,360,260), new cjs.Rectangle(-180,-224,360,260), new cjs.Rectangle(-180,-166,360,260), new cjs.Rectangle(-180,-108,360,260), new cjs.Rectangle(-180,-50,360,260), new cjs.Rectangle(-180,-66,360,260), new cjs.Rectangle(-180,-82,360,260), new cjs.Rectangle(-180,-98,360,260), new cjs.Rectangle(-180,-114,360,260), new cjs.Rectangle(-180,-130,360,260)];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_mc();
	this.instance.setTransform(10.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-130,360,260);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":99});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// title
	this.instance = new lib.curtain_3_mc();
	this.instance.setTransform(400,300,0.833,0.833);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:400.1,y:300.1,alpha:0.801},16).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:300,alpha:1},4).wait(20).to({alpha:0.012},10).to({_off:true},1).wait(20));

	// decor
	this.instance_1 = new lib.curtain_2_mc();
	this.instance_1.setTransform(400,300,0.833,0.833);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.08,scaleY:1.08,x:400.1,alpha:0.789},15).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,alpha:1},4).wait(35).to({alpha:0.012},10).to({_off:true},1).wait(15));

	// curtain
	this.instance_2 = new lib.curtain_1_mc();
	this.instance_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600.1), new cjs.Rectangle(-200,-5,1200,610), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,-15,1200,630), new cjs.Rectangle(-200,-20,1200,640), new cjs.Rectangle(-200,-25.1,1200,650), new cjs.Rectangle(-200,-18.8,1200,637.5), new cjs.Rectangle(-200,-12.5,1200,625), new cjs.Rectangle(-200,-6.3,1200,612.5), rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.bubble_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.2
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
		_createBubblesFunc(20);
		/*
		функция, создающая пузыри
		*/
		function _createBubblesFunc(bubbles_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < bubbles_num) 
			{
				/*
				создаём пузырь
				*/
				var bubble_mc = new lib.Bubble_2();
				container_mc.addChild(bubble_mc);
				bubble_mc.gotoAndStop(0);
				bubble_mc.gotoAndStop(Math.floor(Math.random() * bubble_mc.totalFrames));
				bubble_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				bubble_mc.scaleX = randomScale_num;
				bubble_mc.scaleY = randomScale_num;
				bubble_mc.alpha = randomScale_num;
				bubble_mc.x = Math.random() * _containerBounds_rect.width;
				bubble_mc.y = Math.random() * _containerBounds_rect.height;
				bubble_mc.addEventListener("tick", _onTickBubbleFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickBubbleFunc(event)
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
			target_mc.y -= _SPEED_NUM;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y <= 0)
			{
				target_mc.y = _containerBounds_rect.height - _BUBBLE_DIAMETER_NUM;
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

	// bubble
	this.instance = new lib.Bubble_2();
	this.instance.setTransform(400,800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,830);
p.frameBounds = [rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-40,93.3,80);
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
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
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

	// decor
	this.instance_1 = new lib.hint_quest_1_2_mc();
	this.instance_1.setTransform(400,520);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

	// subjects
	this.subject_1 = new lib.subjects_quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.subject_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-329.4,885,1074.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:40}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.arrow_checks_0_1_mc();
	this.frame_1_mc.setTransform(400,300);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(105,490);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(250,510);

	this.frame_4_mc = new lib.arrow_checks_0_2_mc();
	this.frame_4_mc.setTransform(360,320);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(490,500);

	this.frame_6_mc = new lib.arrow_checks_0_3_mc();
	this.frame_6_mc.setTransform(275,302);

	this.object_7 = new lib.object_7_2_mc();
	this.object_7.setTransform(680,495);

	this.frame_8_mc = new lib.arrow_checks_0_4_mc();
	this.frame_8_mc.setTransform(480,220);

	this.object_9 = new lib.object_9_2_mc();
	this.object_9.setTransform(400,300);

	this.object_10 = new lib.object_10_2_mc();
	this.object_10.setTransform(400,270);

	this.frame_11_mc = new lib.arrow_checks_0_5_mc();
	this.frame_11_mc.setTransform(355,295);

	this.object_12 = new lib.object_12_2_mc();
	this.object_12.setTransform(430,270);

	this.object_13 = new lib.object_13_2_mc();
	this.object_13.setTransform(110,515);

	this.frame_14_mc = new lib.arrow_checks_0_6_mc();
	this.frame_14_mc.setTransform(350,115);

	this.frame_15_mc = new lib.arrow_checks_0_7_mc();
	this.frame_15_mc.setTransform(295,190);

	this.frame_16_mc = new lib.arrow_checks_0_8_mc();
	this.frame_16_mc.setTransform(230,280);

	this.object_17 = new lib.object_17_2_mc();
	this.object_17.setTransform(468,520);

	this.frame_18_mc = new lib.arrow_checks_0_9_mc();
	this.frame_18_mc.setTransform(230,280);

	this.object_19 = new lib.object_19_2_mc();
	this.object_19.setTransform(670,520);

	this.frame_20_mc = new lib.arrow_checks_0_10_mc();
	this.frame_20_mc.setTransform(350,115);

	this.object_21 = new lib.object_21_2_mc();
	this.object_21.setTransform(265,520);

	this.frame_22_mc = new lib.arrow_checks_0_11_mc();
	this.frame_22_mc.setTransform(276,110);

	this.object_23 = new lib.object_23_2_mc();
	this.object_23.setTransform(405,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.frame_11_mc}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.frame_16_mc}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.frame_18_mc}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.frame_20_mc}]},1).to({state:[{t:this.object_21}]},1).to({state:[{t:this.frame_22_mc}]},1).to({state:[{t:this.object_23}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation2_1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation2_2_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation2_4_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation2_6_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation2_8_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation2_10_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation2_12_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation2_14_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation2_15_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation2_17_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation2_19_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation2_21_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation2_23_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation2_25_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation2_27_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation2_29_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.animation2_31_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.animation2_32_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.animation2_34_mc();
	this.subject_19.setTransform(400,300);

	this.subject_20 = new lib.animation2_36_mc();
	this.subject_20.setTransform(400,300);

	this.subject_21 = new lib.animation2_38_mc();
	this.subject_21.setTransform(400,300);

	this.subject_22 = new lib.animation2_39_mc();
	this.subject_22.setTransform(400,300);

	this.subject_23 = new lib.animation2_40_mc();
	this.subject_23.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-356.9,-329.4,1113.9,1285.4);
p.frameBounds = [rect, new cjs.Rectangle(5,-329.4,751.9,939.4), new cjs.Rectangle(77.8,-329.4,679.1,941.9), new cjs.Rectangle(49.3,-329.4,707.6,939.4), new cjs.Rectangle(185.8,-329.4,571.1,949.4), new cjs.Rectangle(227,-329.4,565.2,943.8), new cjs.Rectangle(227,-329.4,591.5,949.4), new cjs.Rectangle(227,-329.4,586.7,803), new cjs.Rectangle(105,-329.4,590,953.9), new cjs.Rectangle(-112.2,-329.4,826.4,939.2), new cjs.Rectangle(-42.2,-329.4,631.6,878.2), new cjs.Rectangle(179.9,-405,528.4,1002.3), new cjs.Rectangle(-4.9,-329.4,759.5,959.4), rect=new cjs.Rectangle(195,-329.4,559.5,927.4), rect, rect, new cjs.Rectangle(195,-329.4,563.8,954.4), new cjs.Rectangle(195,-329.4,559.5,927.4), new cjs.Rectangle(195,-329.4,644.5,955.9), new cjs.Rectangle(195,-329.4,419.8,927.4), new cjs.Rectangle(145,-329.4,483.8,974.1), new cjs.Rectangle(214.3,-329.4,376.8,736.9), new cjs.Rectangle(160,-329.4,559.6,904.8)];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250,520,0.875,0.875);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(43).to({y:470},10).to({y:520},5).wait(30).to({y:700},10).wait(101));

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(610.1,450.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(200.1,180.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(620,180,0.75,0.75);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(180,430,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},89).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(250,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-500},0).wait(23).to({x:300},16).to({x:250},4).wait(55).to({x:-500},20).wait(81));

	// hero
	this.hero_1 = new lib.barbie_mc();
	this.hero_1.setTransform(590,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1200},0).wait(23).to({x:540},16).to({x:590},4).wait(65).to({x:396},20).wait(71));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({alpha:1},20).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(8,20.5,723.4,739.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-742,20.5,2083.4,758.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-692,20.5,1992.2,758.3), new cjs.Rectangle(-642,20.5,1900.9,758.3), new cjs.Rectangle(-592,20.5,1809.7,758.3), new cjs.Rectangle(-542,20.5,1718.4,758.3), new cjs.Rectangle(-492,20.5,1627.2,758.3), new cjs.Rectangle(-442,20.5,1535.9,758.3), new cjs.Rectangle(-392,20.5,1444.7,758.3), new cjs.Rectangle(-342,20.5,1353.4,758.3), new cjs.Rectangle(-292,20.5,1262.2,758.3), new cjs.Rectangle(-242,20.5,1170.9,758.3), new cjs.Rectangle(-192,20.5,1079.7,758.3), new cjs.Rectangle(-142,20.5,988.4,758.3), new cjs.Rectangle(-92,20.5,897.2,758.3), new cjs.Rectangle(-42,20.5,805.9,758.3), new cjs.Rectangle(8,20.5,714.7,758.3), new cjs.Rectangle(58,20.5,623.4,758.3), new cjs.Rectangle(45.5,20.5,648.4,758.3), new cjs.Rectangle(33,20.5,673.4,758.3), new cjs.Rectangle(20.5,20.5,698.4,758.3), new cjs.Rectangle(8,20.5,723.4,758.3), rect=new cjs.Rectangle(8,20.5,723.4,739.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(8,20.5,723.4,740.3), new cjs.Rectangle(8,20.5,723.4,758.3), new cjs.Rectangle(-29.5,20.5,760.9,758.3), new cjs.Rectangle(-67,20.5,798.4,758.3), new cjs.Rectangle(-104.5,20.5,835.9,758.3), new cjs.Rectangle(-142,20.5,873.4,758.3), new cjs.Rectangle(-179.5,20.5,910.9,758.3), new cjs.Rectangle(-217,20.5,948.4,758.3), new cjs.Rectangle(-254.5,20.5,985.9,758.3), new cjs.Rectangle(-292,20.5,1023.4,758.3), new cjs.Rectangle(-329.5,20.5,1060.9,758.3), new cjs.Rectangle(-367,-10,1377,788.7), new cjs.Rectangle(-404.5,-10,1414.5,788.8), new cjs.Rectangle(-442,-10,1452,788.7), new cjs.Rectangle(-479.5,-10,1489.5,788.8), new cjs.Rectangle(-517,-10,1527,788.7), new cjs.Rectangle(-554.5,-10,1564.5,788.8), new cjs.Rectangle(-592,-10,1602,788.7), new cjs.Rectangle(-629.5,-10,1639.5,788.8), new cjs.Rectangle(-667,-10,1677,788.7), new cjs.Rectangle(-704.5,-10,1714.5,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7), new cjs.Rectangle(-742,-10,1752,788.8), new cjs.Rectangle(-742,-10,1752,788.7)];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(59).to({y:700},0).to({y:460},10).to({y:510},5).wait(25).to({y:700},10).wait(91));

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(660.1,145.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(120.1,380.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(680,440,0.75,0.75);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(140,140,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},89).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(400,395.8,1,1,0,0,0,0,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:995.8},0).wait(43).to({y:395.8},15).wait(50).to({y:995.8},15).wait(76));

	// hero
	this.hero_1 = new lib.barbie_hair_mc();
	this.hero_1.setTransform(398,355);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-500},0).wait(23).to({x:450},16).to({x:398},4).wait(156));

	// decor
	this.instance_4 = new lib.wardrobe_2_mc();
	this.instance_4.setTransform(400,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:1000},0).wait(43).to({y:400},15).wait(50).to({y:1000},15).wait(76));

	// shadow
	this.instance_5 = new lib.shadow_dressup_mc();
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({alpha:1},19).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,88.5,899.9,761.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-692.5,88.5,1548.9,1361.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-633.1,88.5,1489.5,1361.5), new cjs.Rectangle(-573.7,88.5,1430.1,1361.5), new cjs.Rectangle(-514.4,88.5,1370.8,1361.5), new cjs.Rectangle(-455,88.5,1311.4,1361.5), new cjs.Rectangle(-395.6,88.5,1252,1361.5), new cjs.Rectangle(-336.2,88.5,1192.6,1361.5), new cjs.Rectangle(-276.9,88.5,1133.3,1361.5), new cjs.Rectangle(-217.5,88.5,1073.9,1361.5), new cjs.Rectangle(-158.1,88.5,1014.5,1361.5), new cjs.Rectangle(-98.7,88.5,955.1,1361.5), rect=new cjs.Rectangle(-43.5,88.5,899.9,1361.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-31,88.5,861,1321.5), new cjs.Rectangle(-31,88.5,861,1281.5), new cjs.Rectangle(-31,88.5,861,1241.5), new cjs.Rectangle(-31,88.5,861,1201.5), new cjs.Rectangle(-31,88.5,861,1161.5), new cjs.Rectangle(-31,88.5,861,1121.5), new cjs.Rectangle(-31,88.5,861,1081.5), new cjs.Rectangle(-31,88.5,861,1041.5), new cjs.Rectangle(-31,88.5,861,1001.5), new cjs.Rectangle(-31,88.5,861,961.5), new cjs.Rectangle(-31,88.5,861,921.5), new cjs.Rectangle(-31,88.5,861,881.5), new cjs.Rectangle(-31,88.5,861,841.5), new cjs.Rectangle(-31,88.5,861,801.5), rect=new cjs.Rectangle(-43.5,88.5,899.9,761.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,860), new cjs.Rectangle(-210,-10,1220,900), new cjs.Rectangle(-210,-10,1220,940), new cjs.Rectangle(-210,-10,1220,980), new cjs.Rectangle(-210,-10,1220,1020), new cjs.Rectangle(-210,-10,1220,1060), new cjs.Rectangle(-210,-10,1220,1100), new cjs.Rectangle(-210,-10,1220,1140), new cjs.Rectangle(-210,-10,1220,1180), new cjs.Rectangle(-210,-10,1220,1220), new cjs.Rectangle(-210,-10,1220,1260), new cjs.Rectangle(-210,-10,1220,1300), new cjs.Rectangle(-210,-10,1220,1340), new cjs.Rectangle(-210,-10,1220,1380), new cjs.Rectangle(-210,-10,1220,1420), rect=new cjs.Rectangle(-210,-10,1220,1460), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":199});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(410,510);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(43).to({y:460},10).to({y:510},5).wait(30).to({y:700},10).wait(101));

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(640.1,80.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(100.1,180.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(630,460,0.75,0.75);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(180,480,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},89).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1200},0).wait(23).to({x:550},16).to({x:600},4).wait(55).to({x:1200},20).wait(81));

	// decor
	this.instance_4 = new lib.hint_quest_1_1_mc();
	this.instance_4.setTransform(644,263);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({alpha:1},15).wait(56));

	// hero
	this.hero_1 = new lib.barbie_makeup_mc();
	this.hero_1.setTransform(250,434.8,1,1,0,0,0,65,174.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-535},0).wait(23).to({x:295},16).to({x:250},4).wait(65).to({x:435},20).wait(71));

	// shadow
	this.instance_5 = new lib.shadow_dressup_mc();
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({alpha:1},20).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-84,917.6,934.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-915.5,-84,2302.6,934.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-863.6,-84,2210.1,934.1), new cjs.Rectangle(-811.8,-84,2117.6,934.1), new cjs.Rectangle(-759.9,-84,2025.1,934.1), new cjs.Rectangle(-708,-84,1932.6,934.1), new cjs.Rectangle(-656.1,-84,1840,934.1), new cjs.Rectangle(-604.3,-84,1747.6,934.1), new cjs.Rectangle(-552.4,-84,1655.1,934.1), new cjs.Rectangle(-500.5,-84,1562.6,934.1), new cjs.Rectangle(-448.6,-84,1470,934.1), new cjs.Rectangle(-396.8,-84,1377.6,934.1), new cjs.Rectangle(-344.9,-84,1285,934.1), new cjs.Rectangle(-293,-84,1192.6,934.1), new cjs.Rectangle(-241.2,-84,1100.1,934.1), new cjs.Rectangle(-189.3,-84,1007.6,934.1), new cjs.Rectangle(-137.4,-84,915.1,934.1), new cjs.Rectangle(-85.5,-84,822.6,934.1), new cjs.Rectangle(-96.8,-84,846.3,934.1), new cjs.Rectangle(-108,-84,870.1,934.1), new cjs.Rectangle(-119.3,-84,893.8,934.1), rect=new cjs.Rectangle(-130.5,-84,917.6,934.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-130.5,-84,947.6,934.1), new cjs.Rectangle(-130.5,-84,977.6,934.1), new cjs.Rectangle(-130.5,-84,1007.6,934.1), new cjs.Rectangle(-130.5,-84,1037.6,934.1), new cjs.Rectangle(-130.5,-84,1067.6,934.1), new cjs.Rectangle(-130.5,-84,1097.6,934.1), new cjs.Rectangle(-130.5,-84,1127.6,934.1), new cjs.Rectangle(-130.5,-84,1157.6,934.1), new cjs.Rectangle(-130.5,-84,1187.6,934.1), new cjs.Rectangle(-210,-84,1297,934.1), new cjs.Rectangle(-210,-84,1327,934.1), new cjs.Rectangle(-210,-84,1357,934.1), new cjs.Rectangle(-210,-84,1387,934.1), new cjs.Rectangle(-210,-84,1417,934.1), new cjs.Rectangle(-210,-84,1447,934.1), new cjs.Rectangle(-210,-84,1477,934.1), new cjs.Rectangle(-210,-84,1507,934.1), new cjs.Rectangle(-210,-84,1537,934.1), new cjs.Rectangle(-210,-84,1567,934.1), rect=new cjs.Rectangle(-210,-84,1597,934.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,610);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
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
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-356.9,-329.4,1357,1310.4);
p.frameBounds = [rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,600,1200,600);
p.frameBounds = [rect];


(lib.bubble_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.2
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
		_createBubblesFunc(12);
		/*
		функция, создающая пузыри
		*/
		function _createBubblesFunc(bubbles_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < bubbles_num) 
			{
				/*
				создаём пузырь
				*/
				var bubble_mc = new lib.Bubble();
				container_mc.addChild(bubble_mc);
				bubble_mc.gotoAndStop(0);
				bubble_mc.gotoAndStop(Math.floor(Math.random() * bubble_mc.totalFrames));
				bubble_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				bubble_mc.scaleX = randomScale_num;
				bubble_mc.scaleY = randomScale_num;
				bubble_mc.alpha = randomScale_num;
				bubble_mc.x = Math.random() * _containerBounds_rect.width;
				bubble_mc.y = Math.random() * _containerBounds_rect.height;
				bubble_mc.addEventListener("tick", _onTickBubbleFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickBubbleFunc(event)
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
			target_mc.y -= _SPEED_NUM;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y <= 0)
			{
				target_mc.y = _containerBounds_rect.height - _BUBBLE_DIAMETER_NUM;
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

	// bubble
	this.instance = new lib.Bubble();
	this.instance.setTransform(400,800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,840);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,820.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(680,500);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1030,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(50,550,0.727,0.727);
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
	this.instance.setTransform(200,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(-20,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,200,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-330,1547.1,1403.6);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,510);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,510);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(745,300,0.833,0.833);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(80,900);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(8,-329.4,723.4,1089.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-329.4,899.9,1179.4);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-329.4,917.6,1179.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
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
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.storage_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.RedirectScreen();

	this.instance_10 = new lib.ResultScreen();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.InstructionScreen();

	this.instance_12 = new lib.Glitter_2();
	this.instance_12.setTransform(500,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_13 = new lib.FlashAnimation();
	this.instance_13.setTransform(150,280);

	this.instance_14 = new lib.TrackMove_2();
	this.instance_14.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_15 = new lib.TrackMove();
	this.instance_15.setTransform(270,50);

	this.instance_16 = new lib.Cursor();
	this.instance_16.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_17 = new lib.OrientationLockScreen();

	this.instance_18 = new lib.CurtainScreen();

	this.instance_19 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_16},{t:this.instance_15},{t:this.gravity_explosion_comp},{t:this.instance_14},{t:this.instance_13},{t:this.next_btn},{t:this.instance_12}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[{t:this.instance_19}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-330,1547.1,1400), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4), new cjs.Rectangle(-356.9,-329.4,1357,1310.4), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4), rect, rect, new cjs.Rectangle(-200,0,1200,770), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-10,810,440), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-200,600,1200,600), rect=null, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,256.5,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;