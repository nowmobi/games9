/*:
 * @plugindesc v1.21 GameCore 小遊戲核心
 * @author 流逝的歲月
 *
 * @help
 * ============================================================================
 * 介紹
 * ============================================================================
 *
 * 這是LiuYue系列小遊戲外掛的前置外掛而使用
 *
 * 這個外掛本身提供一些可以對圖片進行操作的編輯操作
 * 可以實現圖片旋轉,移動,縮放,透明度,延時......的一些變化的外掛命令
 * 
 * 
 *
 *-------------------------------------------------------------------
 *
 *使用條例：本外掛完全免費，隨意魔改
 * 
 *-------------------------------------------------------------------
 *
 *
 *
 *
 * 鳴謝：鉛筆描繪的思念 https://rpg.blue/thread-400994-1-1.html
 * 感謝大佬分享關於漸變文字的實現方法
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 可以調整一些效果:
 * 入場 出場             :       進入退出的效果
 * 背景圖片 背景BGM      :       聲音效果
 * 操作按鍵              :       使用傳統的9鍵手柄,上 下 左 右 A1 B1 A2 B2 P
 *
 *
 * 關於視窗顏色的設定顏色字串格式 :   rgba(x,x,x,x)
 *
 * rgba中四個參數,分別對應紅色R 綠色G 藍色B 透明度A
 * RGB的取色範圍0~255 值越高顏色越純
 * A的取值範圍0~1 代表透明度
 *
 *
 * 比如寫入 rgba(0,255,0,0.8)
 * 那就是80%透明度的純綠色。
 *
 *
 *
 * 另一種設定顏色的格式 : [x,x,x] 代表r g b
 * 數字範圍也是0~255之間
 *
 *
 *
 *
 * 關於按鍵的設定,參考了八鍵遊戲手柄的按鈕+暫停,分別是 上,下,左,右,A1,B1,A2,B2,P 這幾個按鍵
 * 
 * 預設的設定為鍵盤的上下左右,Z,X,A,S,P
 * (其實我感覺這種操作按鈕很彆扭)
 * 所以我建議設定的一套:
 * 上:W     下:S     左:A     右:D     A1:J     B1:K     A2:U     B2:I     P:P(暫停鍵)
 *
 *
 *     W       UI P
 *    ASD      JK 
 *
 *
 *
 * 重要:關於按鍵的命名規則,必須是完全大寫,或者完全小寫！
 * 鍵盤的26個英文字母,正常輸入就行:A a B b C c......
 * 'tab'鍵           可以輸入 tab TAB
 * 'shift'鍵         可以輸入 shift SHIFT
 * 'ctrl'鍵          可以輸入 control CONTROL
 * 'esc'鍵           可以輸入 escape ESCAPE
 * '空格'鍵          可以輸入 space SPACE
 * 'alt'鍵           可以輸入 alt ALT
 * 'pageup'鍵        可以輸入 pageup PAGEUP
 * 'pagedown'鍵      可以輸入 pagedown PAGEDOWN
 * 'left(左箭頭)'    可以輸入 left LEFT
 * 'right(右箭頭)'   可以輸入 right RIGHT
 * 'up(上箭頭)'      可以輸入 up UP
 * 'down(下箭頭)'    可以輸入 down DOWN 
 * 
 * 鍵盤數字輸入:1 2 3 4 5 6 7 8 9 0直接輸入即可
 * 注意:不支援附鍵盤數字輸入,請不要設定小鍵盤的標識
 * 注意:特殊字元也只支援一部分,[ ] \ ,不建議使用,可能導致不可預期的問題
 *
 *
 *
 *
 *
 * 重要:因原版按鍵的存在,所以在設定按鍵的時候會導致有些按鍵會響應一個情況
 *  比如鍵盤上的'Z'鍵 它與空格鍵,回車鍵,按下的效果都是一樣的,所以在設定遊戲按鍵時,儘量避免一些衝突按鍵
 *  以下是原版按鍵的列表:
     9: 'tab',       // tab
    13: 'ok',       // enter
    16: 'shift',    // shift
    17: 'control',  // control
    18: 'control',  // alt
    27: 'escape',   // escape
    32: 'ok',       // space
    33: 'pageup',   // pageup
    34: 'pagedown', // pagedown
    37: 'left',     // left arrow
    38: 'up',       // up arrow
    39: 'right',    // right arrow
    40: 'down',     // down arrow
    45: 'escape',   // insert
    81: 'pageup',   // Q
    87: 'pagedown', // W
    88: 'escape',   // X
    90: 'ok',       // Z
    96: 'escape',   // numpad 0
    98: 'down',     // numpad 2
    100: 'left',    // numpad 4
    102: 'right',   // numpad 6
    104: 'up',      // numpad 8
    120: 'debug'    // F9
 *
 *
 *
 * 以下是Window_ZzyGCFBase型別拓展的一些可繼承的函式
 * 
 * 
 *
 *
 *	Window_ZzyGCFBase.prototype.OnKeyUp()			//遊戲手柄上鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyDown()			//遊戲手柄下鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyLeft()			//遊戲手柄左鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyRight()		//遊戲手柄右鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyA1()			//遊戲手柄A1鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyB1()			//遊戲手柄B1鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyA2()			//遊戲手柄A2鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyB2()			//遊戲手柄B2鍵被按下
 *	Window_ZzyGCFBase.prototype.OnKeyP()			//遊戲手柄P 鍵被按下
 *	Window_ZzyGCFBase.prototype.OutKeyUp()			//遊戲手柄上鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyDown()		//遊戲手柄下鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyLeft()		//遊戲手柄左鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyRight()		//遊戲手柄右鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyA1()			//遊戲手柄A1鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyB1()			//遊戲手柄B1鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyA2()			//遊戲手柄A2鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyB2()			//遊戲手柄B2鍵被抬起
 *	Window_ZzyGCFBase.prototype.OutKeyP()			//遊戲手柄P 鍵被抬起
 *	Window_ZzyGCFBase.prototype.InKeyUp()			//遊戲手柄上鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyDown()			//遊戲手柄下鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyLeft()			//遊戲手柄左鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyRight()		//遊戲手柄右鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyA1()			//遊戲手柄A1鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyB1()			//遊戲手柄B1鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyA2()			//遊戲手柄A2鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyB2()			//遊戲手柄B2鍵被持續按下
 *	Window_ZzyGCFBase.prototype.InKeyP()			//遊戲手柄P 鍵被持續按下
 *	Window_ZzyGCFBase.prototype.OnTouch()			//滑鼠或是觸控按下時
 *	Window_ZzyGCFBase.prototype.OutTouch()			//滑鼠或是觸控抬起時
 *	Window_ZzyGCFBase.prototype.InTouch()			//滑鼠火舌觸控持續按下時
 *
 *
 * 以下是Sprite_ZzyGCFBase型別拓展的一些可繼承的函式
 *
 * Sprite_ZzyGCFBase.prototype.OnSelect()      //圖片在被滑鼠點選選中時會呼叫
 * Sprite_ZzyGCFBase.prototype.OutSelect()     //圖片被選中時再次被滑鼠點選會呼叫
 * Sprite_ZzyGCFBase.prototype.OnClick()       //圖片被滑鼠或者觸控點選時會呼叫
 *
 *
 *
 *以下是一些外掛和指令碼的命令
 *
 *
 *---------------------Plugin Command--------------------
 * 外掛命令
 *
 * ZzyGCF Play x                       //填入遊戲名,這將進行小遊戲,前提是安裝了這個小遊戲外掛
 *
 * ZzyGCF IsFadeScene x(true/false)    //這將修改進入遊戲是否擁有漸入漸出效果
 * ZzyGCF FadeInFrame x                //這將修改進入遊戲場景時的漸入幀數
 * ZzyGCF FadeOutFrame x               //這將修改進入遊戲場景時的漸出幀數
 * ZzyGCF FadeColor x                  //這將修改進入時的閃屏顏色,請使用固定格式,預設 [0,0,0] 黑色
 *
 * ZzyGCF BkPic x                      * //修改背景,請填入檔名稱,圖片存放在Picture資料夾中,如果填'',則顯示快照
 *
 * ZzyGCF BkHue x                      //修改背景圖片的色相,範圍0~360
 * ZzyGCF BkIsScroll x(true/false)   //這將開啟/關閉卷動圖片的效果
 *
 * ZzyGCF BkScrollX x                  //這將設定圖片的捲動方向橫向和速度,前提是允許進行卷動,可填入小數值
 *
 * ZzyGCF BkScrollY x                  //這將設定圖片的捲動方向縱向和速度,前提是允許進行卷動,可填入小數值
 * ZzyGCF BkBGM a b c d                //這將修改背景音樂,a代表BGM檔名,b代表音量,c代表音調,d代表聲道
 *
 *
 * ZzyGCF SetKey Up Down Left Right A1 B1 A2 B2 P         //這將會設定小遊戲中的九個按鍵對應鍵盤碼
 * 例:ZzyGCF SetKey W S A D J K U I P
 * WASD控制方向 JKUI作用按鈕 P暫停
 * 
 *
 *
 * ZzyGCF Create ID FileName Hue X Y    //這將在指定位置產生一張圖片
 * -ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * -FileName:圖片的名稱,注意圖片的路徑要放在pictures資料夾中
 * -Hue:圖片的色相 範圍在0~360
 * -X:圖片產生在螢幕X的位置
 * -y:圖片產生在螢幕Y的位置
 * 例子:ZzyGCF Create 1 'ball' 0 200 100
 *
 *
 * ZzyGCF Destroy ID                  //這將會立即摧毀圖片並消失
 * -ID:圖片的ID值
 * 
 *
 * ZzyGCF MoveOfSpeed ID X Y Speed     //這將讓圖片在目前位置以指定的速度移動到指定的位置
 * -ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * -X:圖片移動到螢幕的位置X
 * -Y:圖片移動到螢幕的位置Y
 * -Speed:圖片移動的速度
 * 例子:ZzyGCF MoveOfSpeed 2 500 200 5
 *
 *
 * ZzyGCF MoveOfTime ID X Y Frame     //這將讓圖片在目前位置以一定的時間移動到指定的位置
 * -ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * -X:圖片移動到螢幕的位置X
 * -Y:圖片移動到螢幕的位置Y
 * -Frame:圖片移動到這個位置的時間,單位是幀數
 * 例子:ZzyGCF MoveOfTime 3 100 100 60
 *
 *
 *
 * ZzyGCF MoveOfPer ID X Y Per       //這將以圖片每幀移動目前的百分比移動到指定的位置,這是個順滑的過程
 * -ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * -X:圖片移動到螢幕的位置X
 * -Y:圖片移動到螢幕的位置Y
 * -Per:圖片每次移動目前到終點距離的百分比,範圍1~100
 * 例子:ZzyGCF MoveOfPer 4 500 400 10
 *
 *
 *
 * 同時,還有透明度,縮放,旋轉,也是用同樣的指令
 * ZzyGCF OpacityOfSpeed ID Opacity Speed
 * ZzyGCF ScaleOfSpeed ID ScaleX ScaleY Speed
 * ZzyGCF RotateOfSpeed ID Rotate Turns Clockwise Speed
 *
 * 注意旋轉可能有些區別,以下是旋轉參數解釋
 * ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * Rotate:旋轉到的角度,請輸入0~359的範圍
 * Turns:圈數,數量為1就會多轉一圈並以Rotate的角度作為結束
 * Clockwise:(false/true)是否順時針 如果輸入true會以順時針的方向旋轉
 * Speed:每一幀旋轉的角度
 *
 * 
 * ZzyGCF OpacityOfTime ID Opacity Time
 * ZzyGCF ScaleOfTime ID ScaleX ScaleY Time
 * ZzyGCF RotateOfTime ID Rotate Turns Clockwise Time
 *
 * ZzyGCF OpacityOfPer ID Opacity Per
 * ZzyGCF ScaleOfPer ID ScaleX ScaleY Per
 * ZzyGCF RotateOfPer ID Rotate Turns Clockwise Per
 *
 *
 * ZzyGCF MoveEndDis ID Delay         //這將會在圖片移動結束后,刪除這個圖片,如果有延遲則延遲刪除
 * ZzyGCF OpacityEndDis ID Delay      //這將會在圖片透明結束后,刪除這個圖片,如果有延遲則延遲刪除
 * ZzyGCF ScaleEndDis ID Delay        //這將會在圖片縮放結束后,刪除這個圖片,如果有延遲則延遲刪除
 * ZzyGCF RotateEndDis ID Delay       //這將會在圖片旋轉結束后,刪除這個圖片,如果有延遲則延遲刪除
 * -ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * -Delay:延遲刪除,到達指定目標后開始計時,單位為幀數
 *
 * ZzyGCF SetDelay ID Delay     //這會讓圖片進行待機,指不會進行(移動,縮放,透明,旋轉)的相關變化,等待delay幀數後會解除
 * -ID:圖片的ID值,這個要自己管理,如果重複會被覆蓋
 * -Delay:等待的時間,以幀作為單位
 *
 *
 *
 *
 *
 *
 *
 *
 *---------------------------Script--------------------------------
 * 指令碼
 *
 * Zzy.GCF.GameData();             //這將返回遊戲進行中的數據資訊,比如血量,藍量,內建道具等等
 * Zzy.GCF.GameGlobal();           //這將返回遊戲的全域性資訊,包括分數,遊戲名,遊戲經過時間等等
 * Zzy.GCF.GameHistory();          //這將返回整體的歷史資訊,包括遊戲次數,總時間,勝負次數等等
 * Zzy.GCF.Score();                //這將返回遊戲結束后獲得的總分數
 * Zzy.GCF.Time();                 //這將返回遊戲結束期間經歷的時長,注意以幀數為單位
 * Zzy.GCF.IsPausing();	           //這將返回遊戲是否處於暫停期
 *
 *
 *
 *
 *
 *
 *----------------------------------------------------------
 *
 *
 *
 * 我叫坂本: v1.21 修復了與部分按鍵拓展類外掛導致的按鍵失效問題,修復結束遊戲后公共事件重複呼叫的嚴重問題
 * 我叫坂本: v1.20 部分類介面拓展
 * 我叫坂本: v1.19 新增額外函式介面和演算法,新增截圖功能
 * 我叫坂本: v1.18 對Sprite_ZzyGCFNumber功能進行更新
 * 我叫坂本: v1.17 修復MV1.5.1無法相容的部分函式,新增額外處理演算法與功能
 * 我叫坂本: v1.16 更新Sprite_ZzyGCFBatchBase類,提供佇列化處理功能,同時更新粒子類功能
 * 我叫坂本: v1.15 更新一些操作函式
 * 我叫坂本: v1.14 修復了Sprite_ZzyGCFNumber中關於數量定位的bug
 * 我叫坂本: v1.13 新增Sprite_ZzyGCFSelectCursorBase類,提供選擇游標操作函式,更新Sprite_ZzyGCFNumber類
 * 我叫坂本: v1.12 修復重複申請的問題，新增額外工具函式
 * 我叫坂本: v1.11 拓展Sprite_ZzyGCFNumber類點陣圖文字化顯示的操作函式
 * 我叫坂本: v1.10 新增Sprite_ZzyGCFTextBase類,處理點陣圖文字化顯示
 * 我叫坂本：v1.09 更新Sprite_ZzyGCFBase碰撞功能,新增相關處理
 * 我叫坂本：v1.08 新增Sprite_ZzyGCFAnimaBase類,提供動態點陣圖的操作函式
 * 我叫坂本：v1.07 新增Sprite_ZzyGCFBase類操作的回撥函式
 * 我叫坂本：v1.06 新增Sprite_ZzyGCFTileBase類,提供捲動點陣圖的操作函式
 * 我叫坂本：v1.05 為點陣圖縮放新增了雙層緩衝，解決了圖片無法比例放大的問題
 * 我叫坂本：v1.04 新增外掛操作指令,增加螢幕產生圖片功能
 * 我叫坂本：v1.03 新增Sprite_ZzyGCFBase類的函式,修復了Speed函式出錯的問題
 * 我叫坂本：v1.02 新增Sprite_ZzyGCFBase類的函式,並針對申請點陣圖做優化處理
 * 我叫坂本：v1.01 新增Sprite_ZzyGCFBase類 並實現了一些操作的介面
 * 我叫坂本：v1.00 完成外掛功能
 *
 *
 *
 *----------------------------------------------------------
 *
 * @param ---背景設定---
 * @default
 *
 *
 * @param BkPic
 * @text 背景圖片名稱
 * @parent ---背景設定---
 * @dir img/pictures
 * @type file
 * @desc 執行小遊戲時,底部的背景,預設圖片存放在Img/Picture資料夾中,不填寫則以快照作為背景
 * @default
 *
 *
 * @param BkHue
 * @parent ---背景設定---
 * @text 背景圖片色相
 * @type number
 * @min 0
 * @max 360
 * @desc 遊戲背景圖片的色相,範圍0~360,預設0
 * @default 0
 *
 * @param BkIsScroll
 * @parent ---背景設定---
 * @text 是否是捲動的背景圖片
 * @type boolean
 * @on YES
 * @off NO
 * @desc 遊戲背景圖片是否是動態捲動的，預設是關閉的
 * YES - true     NO - false
 * @default false
 *
 * @param BkScrollX
 * @parent ---背景設定---
 * @text 背景捲動速度X
 * @desc 遊戲背景圖片X捲動,±代表方向,可以輸入小數,預設值為0
 * @default 0
 *
 * @param BkScrollY
 * @parent ---背景設定---
 * @text 背景捲動速度Y
 * @desc 遊戲背景圖片Y捲動,±代表方向,可以輸入小數,預設值為0
 * @default 0
 *
 * @param BkBGMName
 * @text 背景BGM名稱
 * @parent ---背景設定---
 * @dir audio/bgm
 * @type file
 * @desc 執行小遊戲時,會播放的背景bgm,不填寫則不會執行任何BGM,BGM應放在audio/bgm資料夾中
 * @default
 *
 *
 *
 * @param BkBGMVolume
 * @text 背景BGM音量
 * @parent ---背景設定---
 * @type Number
 * @desc 音量大小,預設100
 * @default 100
 
 * @param BkBGMPitch
 * @text 背景BGM聲調
 * @parent ---背景設定---
 * @type Number
 * @desc 聲調,預設100
 * @default 100
 
 * @param BkBGMBGSPan
 * @text 背景BGM聲道
 * @parent ---背景設定---
 * @type Number
 * @desc 聲道,預設0
 * @default 0
 *
 * @param ---場景設定---
 * @default
 *
 * @param IsFadeScene
 * @parent ---場景設定---
 * @text 是否有漸入漸出
 * @type boolean
 * @on YES
 * @off NO
 * @desc 進入小遊戲場景時,是否會進行漸入漸出的閃屏
 * YES - true     NO - false
 * @default true
 *
 *
 * @param FadeInFrame
 * @parent ---場景設定---
 * @text 漸入幀數
 * @type number
 * @desc 進入遊戲模式時閃屏的時長,預設值30幀
 * @default 30
 *
 * @param FadeOutFrame
 * @parent ---場景設定---
 * @text 漸出幀數
 * @type number
 * @desc 退出遊戲模式時閃屏的時長,預設值30幀
 * @default 30
 *
 * @param FadeColor
 * @parent ---場景設定---
 * @text 緩入緩出顏色
 * @desc 消失/出現時的閃屏顏色,格式[r,g,b],預設[0,0,0] 黑色
 * @default [0,0,0]
 *
 *
 * @param ---輸入控制---
 * @default
 *
 *
 * @param KeyUp
 * @text 上鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'上'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default up
 *
 * @param KeyDown
 * @text 下鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'下'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default down
 *
 * @param KeyLeft
 * @text 左鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'左'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default left
 *
 * @param KeyRight
 * @text 右鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'右'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default right
 *
 * @param KeyA1
 * @text A1鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'A1'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default Z
 *
 * @param KeyB1
 * @text B1鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'B1'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default X
 *
 * @param KeyA2
 * @text A2鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'A2'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default A
 *
 * @param KeyB2
 * @text B2鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'B2'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default S
 *
 * @param KeyP
 * @text P鍵
 * @parent ---輸入控制---
 * @desc 設定對應遊戲中'P'鍵的按鍵碼,請參考上方幫助文件進行設定,預設
 * @default P
 *
 *
 * @param ---事件執行---
 * @default
 *
 * @param WinCommon
 * @text 勝利事件
 * @parent ---事件執行---
 * @type Number
 * @desc 這是小遊戲結束后,如果以勝利告終,將會執行的事件ID,填0則不會執行
 * @default 0
 *
 * @param WinScript
 * @text 勝利指令碼
 * @parent ---事件執行---
 * @type note
 * @desc
 * @default ""
 *
 *
 * @param FailCommon
 * @text 失敗事件
 * @parent ---事件執行---
 * @type Number
 * @desc 這是小遊戲結束后,如果以勝利告終,將會執行的事件ID,填0則不會執行
 * @default 0
 *
 * @param FailScript
 * @text 失敗指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 
 * @default ""
 *
 *
 * @param Other1Common
 * @text 特殊情況1事件
 * @parent ---事件執行---
 * @type Number
 * @desc 除了勝利和失敗外,允許出現一些特殊形況,那種自定義的終止條件,填0則不會執行
 * @default 0
 *
 * @param Other1Script
 * @text 特殊情況1指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 
 * @default ""
 *
 *
 * @param Other2Common
 * @text 特殊情況2事件
 * @parent ---事件執行---
 * @type Number
 * @desc 除了勝利和失敗外,允許出現一些特殊形況,那種自定義的終止條件,填0則不會執行
 * @default 0
 *
 * @param Other2Script
 * @text 特殊情況2指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 
 * @default ""
 *
 * @param SaveScoreVariable
 * @text 存放分數變數
 * @parent ---事件執行---
 * @type Variable
 * @desc 這是在進行遊戲后,存放分數變數的ID值,注意每一次開始遊戲這個值都會被新的值覆蓋,填0不會執行
 * @default 0
 *
 * @param SaveTimeVariable
 * @text 存放耗時變數
 * @parent ---事件執行---
 * @type Variable
 * @desc 這是在進行遊戲后,存放事件變數的ID值,注意每一次開始遊戲這個值都會被新的值覆蓋,填0不會執行,注意以幀數為單位
 * @default 0
 *
 
 
 * @param ---結束---
 * @default 
 *
 */
 
 
 
 // * @param IsCanKey
 // * @parent ---Zzy Input---
 // * @text 鍵盤輸入開關
 // * @type boolean
 // * @on YES
 // * @off NO
 // * @desc 這將允許遊戲中是否會相應鍵盤響應訊息
 // * YES - true     NO - false
 // * @default true
 // *
 // *
 // * @param IsCanTouch
 // * @parent ---Zzy Input---
 // * @text 滑鼠/觸控輸入開關
 // * @type boolean
 // * @on YES
 // * @off NO
 // * @desc 這將允許遊戲中是否會相應滑鼠/觸控訊息
 // * YES - true     NO - false
 // * @default true 
 // *
 // *
 // * @param ---Zzy Game---
 // * @default
 // *
 // * @param IsCanPause
 // * @parent ---Zzy Game---
 // * @text 是否允許暫停
 // * @type boolean
 // * @on YES
 // * @off NO
 // * @desc 這將會讓遊戲是否允許暫停操作
 // * YES - true     NO - false
 // * @default true
 // *
 // * @param IsDynScore
 // * @parent ---Zzy Game---
 // * @text 動態增分
 // * @type boolean
 // * @on YES
 // * @off NO
 // * @desc 這會允許你遊戲中分數顯示的變化,是否直接獲取分數還是動態遞增
 // * YES - true     NO - false
 // * @default true 
 
 

var LiuYue = LiuYue || {};
LiuYue.LiuYue_GameCore = true;//外掛啟動


var Zzy = Zzy || {};
Zzy.GCF = Zzy.GCF || {};
Zzy.GCF.version = 1.21;  
Zzy.Parameters = PluginManager.parameters('LiuYue_GameCore');
Zzy.Param = Zzy.Param || {};


//------------------set-------------------
Zzy.Param.GCFHaveGame = [];//擁有遊戲名稱
Zzy.Param.GCFHaveRealGame = [];//對映真實遊戲名稱,這主要是爲了對照,獲取動態載入的名稱

//------------------scene set-------------------

Zzy.Param.GCFIsFadeScene = eval(String(Zzy.Parameters['IsFadeScene']));//是否有閃屏效果
Zzy.Param.GCFFadeInFrame = parseInt(Zzy.Parameters['FadeInFrame']);//緩入緩出時長
Zzy.Param.GCFFadeOutFrame = parseInt(Zzy.Parameters['FadeOutFrame']); 
Zzy.Param.GCFFadeColor = eval(String(Zzy.Parameters['FadeColor'])); //閃屏顏色

//------------------bk set-------------------

Zzy.Param.GCFBkPic = String(Zzy.Parameters['BkPic']);//背景圖片名稱
Zzy.Param.GCFBkHue = Number(Zzy.Parameters['BkHue']);//背景圖片色相
Zzy.Param.GCFBkIsScroll = eval(String(Zzy.Parameters['BkIsScroll']));//是否是捲動的背景圖片
Zzy.Param.GCFBkScrollX = Number(Zzy.Parameters['BkScrollX']);//背景捲動速度X
Zzy.Param.GCFBkScrollY = Number(Zzy.Parameters['BkScrollY']);//背景捲動速度Y

Zzy.Param.GCFBkBGMName = String(Zzy.Parameters['BkBGMName']);//背景BGM名稱
Zzy.Param.GCFBkBGMVolume = Number(Zzy.Parameters['BkBGMVolume']);//背景BGM音量
Zzy.Param.GCFBkBGMPitch = Number(Zzy.Parameters['BkBGMPitch']);//背景BGM聲調
Zzy.Param.GCFBkBGMPan = Number(Zzy.Parameters['BkBGMPan']);//背景BGM聲道

//------------------Input-------------------

Zzy.Param.GCFKeyUp = String(Zzy.Parameters['KeyUp']);//上鍵
Zzy.Param.GCFKeyDown = String(Zzy.Parameters['KeyDown']);//下鍵
Zzy.Param.GCFKeyLeft = String(Zzy.Parameters['KeyLeft']);//左鍵
Zzy.Param.GCFKeyRight = String(Zzy.Parameters['KeyRight']);//右鍵
Zzy.Param.GCFKeyA1 = String(Zzy.Parameters['KeyA1']);//A1鍵
Zzy.Param.GCFKeyB1 = String(Zzy.Parameters['KeyB1']);//B1鍵
Zzy.Param.GCFKeyA2 = String(Zzy.Parameters['KeyA2']);//A2鍵
Zzy.Param.GCFKeyB2 = String(Zzy.Parameters['KeyB2']);//B2鍵
Zzy.Param.GCFKeyP = String(Zzy.Parameters['KeyP']);//P鍵


//------------------game-------------------
//這個是作廢的參數
// Zzy.Param.GCFIsCanKey = eval(String(Zzy.Parameters['IsCanKey']));//鍵盤輸入開關
// Zzy.Param.GCFIsCanTouch = eval(String(Zzy.Parameters['IsCanTouch']));//滑鼠/觸控輸入開關
// Zzy.Param.GCFIsCanPause = eval(String(Zzy.Parameters['IsCanPause']));//暫停開關
// Zzy.Param.GCFIsDynScore = eval(String(Zzy.Parameters['IsDynScore']));//動態增增分

Zzy.Param.GCFIsCanPause = true;
Zzy.Param.GCFIsDynScore = true;
Zzy.Param.GCFIsCanKey = true;
Zzy.Param.GCFIsCanTouch = true;


//---------------common script------------------

Zzy.Param.GCFWinCommon = parseInt(Zzy.Parameters['WinCommon']);//勝利事件
Zzy.Param.GCFWinScript = new Function(JSON.parse(Zzy.Parameters['WinScript']) + '\nreturn true;');//勝利指令碼
Zzy.Param.GCFFailCommon = parseInt(Zzy.Parameters['FailCommon']);//失敗事件
Zzy.Param.GCFFailScript = new Function(JSON.parse(Zzy.Parameters['FailScript']) + '\nreturn true;');//失敗指令碼
Zzy.Param.GCFOther1Common = parseInt(Zzy.Parameters['Other1Common']);//特殊情況1事件
Zzy.Param.GCFOther1Script = new Function(JSON.parse(Zzy.Parameters['Other1Script']) + '\nreturn true;');//特殊情況1指令碼
Zzy.Param.GCFOther2Common = parseInt(Zzy.Parameters['Other2Common']);//特殊情況2事件
Zzy.Param.GCFOther2Script = new Function(JSON.parse(Zzy.Parameters['Other2Script']) + '\nreturn true;');//特殊情況2指令碼

Zzy.Param.GCFSaveScoreVariable = parseInt(Zzy.Parameters['SaveScoreVariable']);//變數index
Zzy.Param.GCFSaveTimeVariable = parseInt(Zzy.Parameters['SaveTimeVariable']);//變數index


//滑鼠移動的參測位置
Zzy.GCF.MoveX = 0;
Zzy.GCF.MoveY = 0;


//----------------------temp data----------------------------
Zzy.GCF.tempCommonId = 0;//即將執行的事件ID
Zzy.GCF.tempScript = undefined;//即將執行的指令碼函式
Zzy.GCF.tempReloadBk = false;//需要過載圖片
Zzy.GCF.tempReleasedMapper = [];//按下訊息,判斷按鍵是否有被按下
Zzy.GCF.tempInGame = false;//是否在小遊戲中
Zzy.GCF.tempID = 0;//分配的ID值
Zzy.GCF.tempSprCache = {};
Zzy.GCF.tempSceneMapPointer = undefined;//指針


Zzy.GCF.tempCacheBitmap = [];//快取庫,每一次開始遊戲時都會清理

Zzy.GCF.RandomAreaArr = [];//隨機區域:主要作用是分配一個區域內產生的bitmap對像保證其不重合


Zzy.GCF.tempKeyMapper = {};//儲存進入遊戲前的按鍵緩衝

//===============================================================================================
//Game_System
//===============================================================================================
Zzy.GCF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.GCF.Game_System_initialize.call(this);
	this.ZzyGCFInitData();//初始化數據
};


Game_System.prototype.ZzyGCFInitData = function()
{
	//初始化參數資訊
	this.ZzyGCFOfSetData();//初始化設定相關數據
	this.ZzyGCFOfGameData();//初始化遊戲相關互數據
	this.ZzyGCFOfMapPicture();//初始化地圖上的存放數據陣列
	
}

Game_System.prototype.ZzyGCFOfSetData = function()//初始化設定相關參數
{
	this._ZzyGCFIsFadeScene = Zzy.Param.GCFIsFadeScene;//緩入緩出開關
	this._ZzyGCFFadeInFrame = Zzy.Param.GCFFadeInFrame;//緩入緩出時長
	this._ZzyGCFFadeOutFrame = Zzy.Param.GCFFadeOutFrame;//
	this._ZzyGCFFadeColor = Zzy.Param.GCFFadeColor;//閃屏顏色
	
	this._ZzyGCFBkPic = Zzy.Param.GCFBkPic;//背景圖片名稱
	this._ZzyGCFBkHue = Zzy.Param.GCFBkHue;//背景圖片色相
	this._ZzyGCFBkIsScroll = Zzy.Param.GCFBkIsScroll;//是否是捲動的背景圖片
	this._ZzyGCFBkScrollX = Zzy.Param.GCFBkScrollX;//背景捲動速度X
	this._ZzyGCFBkScrollY = Zzy.Param.GCFBkScrollY;//背景捲動速度Y
	
	this._ZzyGCFBkBGM = {//背景BGM
		name:Zzy.Param.GCFBkBGMName,
		volume: Zzy.Param.GCFBkBGMVolume,
		pitch: Zzy.Param.GCFBkBGMPitch,
		pan: Zzy.Param.GCFBkBGMPan
	}
	
	this._ZzyGCFIsDynScore = Zzy.Param.GCFIsDynScore;//動態增分
	
	
	this._ZzyGCFIsCanKey = Zzy.Param.GCFIsCanKey;//鍵盤輸入開關
	this._ZzyGCFIsCanTouch = Zzy.Param.GCFIsCanTouch;//滑鼠/觸控輸入開關
	this._ZzyGCFIsCanPause = Zzy.Param.GCFIsCanPause;//暫停開關
	
	this.ZzyGCFOfSetKeyData();//初始化按鍵資訊
}

Game_System.prototype.GetZzyGCFIsFadeScene = function()
{
	if(this._ZzyGCFIsFadeScene === undefined)
	{this._ZzyGCFIsFadeScene = Zzy.Param.GCFIsFadeScene;}
	return this._ZzyGCFIsFadeScene;
}

Game_System.prototype.SetZzyGCFIsFadeScene = function(value)
{
	this._ZzyGCFIsFadeScene = value;
}

Game_System.prototype.GetZzyGCFFadeInFrame = function()
{
	if(this._ZzyGCFFadeInFrame === undefined)
	{this._ZzyGCFFadeInFrame = Zzy.Param.GCFFadeInFrame;}
	return this._ZzyGCFFadeInFrame;
}

Game_System.prototype.SetZzyGCFFadeInFrame = function(value)
{
	this._ZzyGCFFadeInFrame = value;
}

Game_System.prototype.GetZzyGCFFadeOutFrame = function()
{
	if(this._ZzyGCFFadeOutFrame === undefined)
	{this._ZzyGCFFadeOutFrame = Zzy.Param.GCFFadeOutFrame;}
	return this._ZzyGCFFadeOutFrame;
}

Game_System.prototype.SetZzyGCFFadeOutFrame = function(value)
{
	this._ZzyGCFFadeOutFrame = value;
}

Game_System.prototype.GetZzyGCFFadeColor = function()
{
	if(this._ZzyGCFFadeColor === undefined)
	{this._ZzyGCFFadeColor = Zzy.Param.GCFFadeColor;}
	return this._ZzyGCFFadeColor;
}

Game_System.prototype.SetZzyGCFFadeColor = function(value)
{
	this._ZzyGCFFadeColor = value;
}

Game_System.prototype.GetZzyGCFBkPic = function()
{
	if(this._ZzyGCFBkPic === undefined)
	{this._ZzyGCFBkPic = Zzy.Param.GCFBkPic;}
	return this._ZzyGCFBkPic;
}

Game_System.prototype.SetZzyGCFBkPic = function(value)
{
	this._ZzyGCFBkPic = value;
}


Game_System.prototype.GetZzyGCFBkHue = function()
{
	if(this._ZzyGCFBkHue === undefined)
	{this._ZzyGCFBkHue = Zzy.Param.GCFBkHue;}
	return this._ZzyGCFBkHue;
}

Game_System.prototype.SetZzyGCFBkHue = function(value)
{
	this._ZzyGCFBkHue = value;
}

Game_System.prototype.GetZzyGCFBkIsScroll = function()
{
	if(this._ZzyGCFBkIsScroll === undefined)
	{this._ZzyGCFBkIsScroll = Zzy.Param.GCFBkIsScroll;}
	return this._ZzyGCFBkIsScroll;
}

Game_System.prototype.SetZzyGCFBkIsScroll = function(value)
{
	this._ZzyGCFBkIsScroll = value;
}


Game_System.prototype.GetZzyGCFBkScrollX = function()
{
	if(this._ZzyGCFBkScrollX === undefined)
	{this._ZzyGCFBkScrollX = Zzy.Param.GCFBkScrollX;}
	return this._ZzyGCFBkScrollX;
}

Game_System.prototype.SetZzyGCFBkScrollX = function(value)
{
	this._ZzyGCFBkScrollX = value;
}

Game_System.prototype.GetZzyGCFBkScrollY = function()
{
	if(this._ZzyGCFBkScrollY === undefined)
	{this._ZzyGCFBkScrollY = Zzy.Param.GCFBkScrollY;}
	return this._ZzyGCFBkScrollY;
}

Game_System.prototype.SetZzyGCFBkScrollY = function(value)
{
	this._ZzyGCFBkScrollY = value;
}


Game_System.prototype.GetZzyGCFIsDynScore = function()
{
	if(this._ZzyGCFIsDynScore === undefined)
	{this._ZzyGCFIsDynScore = Zzy.Param.GCFIsDynScore;}
	return this._ZzyGCFIsDynScore;
}

Game_System.prototype.SetZzyGCFIsDynScore = function(value)
{
	this._ZzyGCFIsDynScore = value;
}


Game_System.prototype.GetZzyGCFIsCanKey = function()
{
	if(this._ZzyGCFIsCanKey === undefined)
	{this._ZzyGCFIsCanKey = Zzy.Param.GCFIsCanKey;}
	return this._ZzyGCFIsCanKey;
}

Game_System.prototype.SetZzyGCFIsCanKey = function(value)
{
	this._ZzyGCFIsCanKey = value;
}


Game_System.prototype.GetZzyGCFIsCanTouch = function()
{
	if(this._ZzyGCFIsCanTouch === undefined)
	{this._ZzyGCFIsCanTouch = Zzy.Param.GCFIsCanTouch;}
	return this._ZzyGCFIsCanTouch;
}

Game_System.prototype.SetZzyGCFIsCanTouch = function(value)
{
	this._ZzyGCFIsCanTouch = value;
}


Game_System.prototype.GetZzyGCFIsCanPause = function()
{
	if(this._ZzyGCFIsCanPause === undefined)
	{this._ZzyGCFIsCanPause = Zzy.Param.GCFIsCanPause;}
	return this._ZzyGCFIsCanPause;
}

Game_System.prototype.SetZzyGCFIsCanPause = function(value)
{
	this._ZzyGCFIsCanPause = value;
}


Game_System.prototype.ZzyGCFOfSetKeyData = function()//初始化按鍵資訊
{
	this._ZzyGCFKey = {
		Up:Zzy.Param.GCFKeyUp,//上鍵
		Down:Zzy.Param.GCFKeyDown,//下鍵
		Left:Zzy.Param.GCFKeyLeft,//左鍵
		Right:Zzy.Param.GCFKeyRight,//右鍵
		A1:Zzy.Param.GCFKeyA1,//A1鍵
		B1:Zzy.Param.GCFKeyB1,//B1鍵
		A2:Zzy.Param.GCFKeyA2,//A2鍵
		B2:Zzy.Param.GCFKeyB2,//B2鍵
		P:Zzy.Param.GCFKeyP//P鍵
	};
	
	this._ZzyGCFCustomKey = [];//記錄下自定義的Key,方便修改
	
	Zzy.GCF.KeyCorrectAndBinding(this._ZzyGCFKey,this._ZzyGCFCustomKey);//因為輸入的數據會與遊戲原按鍵衝突,所以會自我矯正
}

Game_System.prototype.GetZzyGCFKey = function()
{
	if(this._ZzyGCFKey === undefined)
	{this.ZzyGCFOfSetKeyData();}
	return this._ZzyGCFKey;
}

Game_System.prototype.GetZzyGCFCustomKey = function()
{
	if(this._ZzyGCFCustomKey === undefined)
	{this.ZzyGCFOfSetKeyData();}
	return this._ZzyGCFCustomKey;
}








Game_System.prototype.ZzyGCFOfGameData = function()//初始化遊戲相關數據
{
	this._ZzyGCFGameData = [];//這是一次遊戲的臨時數據
	this._ZzyGCFGameGlobal = {};//這是一次遊戲的全域性數據
	this._ZzyGCFGameHistory = {};//這是遊戲的總記錄數據資訊
	this.clearZzyGCFGameGlobal();
	this.clearZzyGCFGameHistory();	
}

Game_System.prototype.SettlementGame = function()//結算遊戲,返回結果,要在有些結束時就進行結算
{
	//Result代表結果 win勝利 fail失敗 other1其他情況1 other2其他情況2
	var globalInfo = this.getZzyGCFGameGlobal();
	var historyInfo = this.getZzyGCFGameHistory();
	
	historyInfo.totalTime += globalInfo.time;//遊戲總時長
	historyInfo.totalScore += globalInfo.score;//遊戲總分數
	historyInfo.totalPlayCount++;//遊戲次數總數
	
	//設定全域性變數的結果
	if(Zzy.Param.GCFSaveScoreVariable)
	{$gameVariables.setValue(Zzy.Param.GCFSaveScoreVariable,globalInfo.score);}
	if(Zzy.Param.GCFSaveTimeVariable)
	{$gameVariables.setValue(Zzy.Param.GCFSaveTimeVariable,globalInfo.time);}
	
	
	switch(globalInfo.result)
	{
		case 'win'://勝利時
		Zzy.GCF.tempCommonId = Zzy.Param.GCFWinCommon;
		Zzy.GCF.tempScript = Zzy.Param.GCFWinScript;
		
		
		historyInfo.totalWinCount++;//增加勝利次數
		break;
		
		case 'fail'://失敗時
		Zzy.GCF.tempCommonId = Zzy.Param.GCFFailCommon;
		Zzy.GCF.tempScript = Zzy.Param.GCFFailScript;		
		
		historyInfo.totalFailCount++;//增加失敗次數
		break;
		
		case 'other1'://特殊情況1
		Zzy.GCF.tempCommonId = Zzy.Param.GCFOther1Common;
		Zzy.GCF.tempScript = Zzy.Param.GCFOther1Script;	

		historyInfo.totalOther1Count++;//增加特殊1次數		
		break;
		
		case 'other2'://特殊情況2
		Zzy.GCF.tempCommonId = Zzy.Param.GCFOther2Common;
		Zzy.GCF.tempScript = Zzy.Param.GCFOther2Script;		
		
		historyInfo.totalOther2Count++;//增加特殊2次數	
		break;
	}
}


Game_System.prototype.ZzyGCFOfMapPicture = function()
{
	this._ZzyGCFPictureArr = [];	
}

Game_System.prototype.GetZzyGCFPictureArr = function()
{
	if(this._ZzyGCFPictureArr === undefined)
	{this._ZzyGCFPictureArr = [];}
	return this._ZzyGCFPictureArr;
}

Game_System.prototype.ClearZzyGCFPictureArr = function()
{
	this._ZzyGCFPictureArr = [];
}

Game_System.prototype.ZzyGCFSavePicture = function(spr,ID,fileName,hue)
{
	var pArr = this.GetZzyGCFPictureArr();
	
	pArr[ID] = {};
	pArr[ID].fileName = fileName;	//儲存圖片名稱,用於再次申請
	pArr[ID].hue = hue;//儲存圖片色相,用於再次申請
	pArrr[ID].anchor = {};
	pArr[ID].scale = {};
	
	Zzy.GCF.TransmitPicDate(spr,pArr[ID]);
}


Game_System.prototype.ZzyGCFLoadAllPicture = function()
{
	return this.GetZzyGCFPictureArr();
}



Game_System.prototype.GetZzyGCFBkBGM = function()
{
	if(this._ZzyGCFBkBGM === undefined)
	{
		this._ZzyGCFBkBGM = {//背景BGM
			name:Zzy.Param.GCFBkBGMName,
			volume: Zzy.Param.GCFBkBGMVolume,
			pitch: Zzy.Param.GCFBkBGMPitch,
			pan: Zzy.Param.GCFBkBGMPan
		}
	}
	return this._ZzyGCFBkBGM;
}

Game_System.prototype.setZzyGCFBkBGM = function(name,volume,pitch,pan)
{
	var bgm = this.GetZzyGCFBkBGM();
	
	bgm.name = name;
	bgm.volume = volume;
	bgm.pitch = pitch;
	bgm.pan = pan;
}

Game_System.prototype.getZzyGCFGameData = function()//獲取遊戲數據
{
	if(this._ZzyGCFGameData === undefined)
	{this._ZzyGCFGameData = [];}
	return this._ZzyGCFGameData;
}

Game_System.prototype.clearZzyGCFGameData = function()//清理遊戲數據
{this._ZzyGCFGameData = [];}

Game_System.prototype.getZzyGCFGameGlobal = function()//獲取全域性數據
{
	if(this._ZzyGCFGameGlobal === undefined)
	{this._ZzyGCFGameGlobal = {};this.clearZzyGCFGameGlobal();}	
	return this._ZzyGCFGameGlobal;
}

Game_System.prototype.clearZzyGCFGameGlobal = function()//清理全域性數據
{
	//全域性數據
	this._ZzyGCFGameGlobal = 
	{
		name:'',//遊戲名稱
		score:0,//總分數
		time:0,//時間
		isRunning:false,//是否執行中
		isPausing:false,//是否暫停中
		result:''//遊戲結果
	};	
}

Game_System.prototype.getZzyGCFGameHistory = function()//獲取統計數據
{
	if(this._ZzyGCFGameHistory === undefined)
	{this._ZzyGCFGameHistory = {};this.clearZzyGCFGameHistory();}	
	return this._ZzyGCFGameHistory;
}

Game_System.prototype.clearZzyGCFGameHistory = function()//清理統計數據
{
	this._ZzyGCFGameHistory =
	{
		totalTime:0,			//遊玩遊戲的總時長
		totalScore:0,			//遊玩遊戲的總分數
		totalPlayCount:0,		//進入遊戲的總次數
		totalWinCount:0,		//遊戲成功的總次數
		totalFailCount:0,		//遊戲失敗的總次數
		totalOther1Count:0,		//遊戲其他情況的總次數
		totalOther2Count:0		//遊戲其他情況的總次數
	}
	
}

Game_System.prototype.ZzyGCFStartGameData = function(gameName)//開始遊戲時數據的處理
{
	this.clearZzyGCFGameData();
	this.clearZzyGCFGameGlobal();	
	this.getZzyGCFGameGlobal().name = gameName;//獲得遊戲名稱
}


Game_System.prototype.getZzyGCFIsCanKey = function()//鍵盤輸入開關
{return this._ZzyGCFIsCanKey;}

Game_System.prototype.setZzyGCFIsCanKey = function(isEnable)//鍵盤輸入開關
{this._ZzyGCFIsCanKey = isEnable;}

Game_System.prototype.changeZzyGCFIsCanKey = function()//鍵盤輸入開關
{this._ZzyGCFIsCanKey = !this._ZzyGCFIsCanKey;}

Game_System.prototype.getZzyGCFIsCanTouch = function()//滑鼠/觸控輸入開關
{return this._ZzyGCFIsCanTouch;}

Game_System.prototype.setZzyGCFIsCanTouch = function(isEnable)//滑鼠/觸控輸入開關
{this._ZzyGCFIsCanTouch = isEnable;}

Game_System.prototype.changeZzyGCFIsCanTouch = function(isEnable)//滑鼠/觸控輸入開關
{this._ZzyGCFIsCanTouch = !this._ZzyGCFIsCanTouch;}

Game_System.prototype.getZzyGCFIsCanPause = function()//暫停開關
{return this._ZzyGCFIsCanPause;}

Game_System.prototype.setZzyGCFIsCanPause = function(isEnable)//暫停開關
{this._ZzyGCFIsCanPause = isEnable;}

Game_System.prototype.changeZzyGCFIsCanPause = function(isEnable)//暫停開關
{this._ZzyGCFIsCanPause = !this._ZzyGCFIsCanPause;}

Game_System.prototype.getZzyGCFKey = function()
{return this.GetZzyGCFKey();}





//=================================================================
//Game_Interpreter
//=================================================================

Zzy.GCF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)
{
	Zzy.GCF.Game_Interpreter_pluginCommand.call(this,command,args);

	if(command === 'ZzyGCF')
	{
		this.ZzyGCFCommand(args);
	}

}

Game_Interpreter.prototype.ZzyGCFCommand = function(args)
{
	var command = String(args[0]);
	
	switch(command)
	{
		case 'Play'://這將會執行遊戲資訊
		    var gameName = String(args[1]);
		    Zzy.GCF.startGame(gameName);//開始遊戲
		break;
		
		case 'IsFadeScene':
			var isEnable = eval(String(args[1]));
			$gameSystem.SetZzyGCFIsFadeScene(isEnable);
		break;
		
		case 'FadeInFrame':
			var Val = parseInt(args[1]);
			$gameSystem.SetZzyGCFFadeInFrame(Val);
		break;
		
		case 'FadeOutFrame':
			var Val = parseInt(args[1]);
			$gameSystem.SetZzyGCFFadeOutFrame(Val);
		break;
		
		case 'FadeColor':
			var color = String(args[1]);
			$gameSystem.SetZzyGCFFadeColor(color);
		break;
		
		case 'BkPic':
			var fileName = String(args[1]);
			if(fileName === '\'\''){fileName = undefined;}
			$gameSystem.SetZzyGCFBkPic(fileName);
			Zzy.GCF.tempReloadBk = true;
		break;
		
		case 'BkHue':
			var hue = Number(args[1]);
			$gameSystem.SetZzyGCFBkHue(hue);
			Zzy.GCF.tempReloadBk = true;
		break;		
		
		case 'BkIsScroll':
			var isEnable = eval(String(args[1]));
			$gameSystem.SetZzyGCFBkIsScroll(isEnable);
		break;	
		
		case 'BkScrollX':
			var SX = Number(args[1]);
			$gameSystem.SetZzyGCFBkScrollX(SX);
		break;			
		
		case 'BkScrollX':
			var SY = Number(args[1]);
			$gameSystem.SetZzyGCFBkScrollY(SY);
		break;	
		
		case 'BkBGM'://設定背景音樂
			var name = String(args[1]);
			var volume = Number(args[2]);
			var pitch = Number(args[3]);
			var pan = Number(args[4]);
			$gameSystem.setZzyGCFBkBGM(name,volume,pitch,pan);//更新BGM數據
		break;		
		
		// case 'IsDynScore':
			// var isEnable = eval(String(args[1]));
			// $gameSystem.SetZzyGCFIsDynScore(isEnable);
		// break;
		
		// case 'IsCanKey':
			// var isEnable = eval(String(args[1]));
			// $gameSystem._ZzyGCFIsCanKey = isEnable;		
		// break;
		
		// case 'IsCanTouch':
			// var isEnable = eval(String(args[1]));
			// $gameSystem._ZzyGCFIsCanTouch = isEnable;		
		// break;
		
		// case 'IsCanPause':
			// var isEnable = eval(String(args[1]));
			// $gameSystem._ZzyGCFIsCanPause = isEnable;		
		// break;
		
		case 'SetKey':
			this.ZzyGCFSetKeyCommand(args);
		break;
   
		case 'Create':
			var ID = parseInt(args[1]);
			var fileName = String(args[2]);
			var Hue = parseInt(args[3]);
			var x = parseInt(args[4]);
			var y = parseInt(args[5]);
			
			Zzy.GCF.CreatePicture(ID,fileName,Hue,x,y);
		break;
		
		case 'Destroy':
			var ID = parseInt(args[1]);
			Zzy.GCF.DestroyPicture(ID);
		break;
		
		case 'MoveOfSpeed':
			var ID = parseInt(args[1]);
			var x = parseInt(args[2]);
			var y = parseInt(args[3]);
			var speed = Number(args[4]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.MoveToOfSpeed(x,y,speed);}
			
		break;
		
		case 'MoveOfTime':
			var ID = parseInt(args[1]);
			var x = parseInt(args[2]);
			var y = parseInt(args[3]);
			var time = Number(args[4]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.MoveToOfTime(x,y,time);}
		break;
		
		case 'MoveOfPer':
			var ID = parseInt(args[1]);
			var x = parseInt(args[2]);
			var y = parseInt(args[3]);
			var per = Number(args[4]);	
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.MoveToOfPer(x,y,per);}			
		break;
		
		case 'OpacityOfSpeed':
			var ID = parseInt(args[1]);
			var op = Number(args[2]);
			var speed = Number(args[3]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.OpacityToOfSpeed(op,speed);}
		break;
		
		case 'OpacityOfTime':
			var ID = parseInt(args[1]);
			var op = Number(args[2]);
			var time = Number(args[3]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.OpacityToOfTime(op,time);}
		break;
		
		case 'OpacityOfPer':
			var ID = parseInt(args[1]);
			var op = Number(args[2]);
			var per = Number(args[3]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.OpacityToOfPer(op,per);}
		break;

		case 'ScaleOfSpeed':
			var ID = parseInt(args[1]);
			var scaleX = Number(args[2]);
			var scaleY = Number(args[3]);
			var speed = Number(args[4]);

			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.ScaleToOfSpeed(scaleX,scaleY,speed);}			
		break;
		
		case 'ScaleOfTime':
			var ID = parseInt(args[1]);
			var scaleX = Number(args[2]);
			var scaleY = Number(args[3]);
			var time = Number(args[4]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.ScaleToOfTime(scaleX,scaleY,time);}
		break;
				
		case 'ScaleOfPer':
			var ID = parseInt(args[1]);
			var scaleX = Number(args[2]);
			var scaleY = Number(args[3]);
			var per = Number(args[4]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.ScaleToOfPer(scaleX,scaleY,per);}
		break;
	
		case 'RotateOfSpeed':
			var ID = parseInt(args[1]);
			var rotate = Number(args[2]);
			var turns = parseInt(args[3]);
			var isClockwise = eval(String(args[4]));
			var speed = Number(args[5]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.RotateToOfSpeed(rotate,turns,isClockwise,speed);}
		break;
		
		case 'RotateOfTime':
			var ID = parseInt(args[1]);
			var rotate = Number(args[2]);
			var turns = parseInt(args[3]);
			var isClockwise = eval(String(args[4]));
			var time = Number(args[5]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.RotateToOfTime(rotate,turns,isClockwise,time);}
		break;
				
		case 'RotateOfPer':
			var ID = parseInt(args[1]);
			var rotate = Number(args[2]);
			var turns = parseInt(args[3]);
			var isClockwise = eval(String(args[4]));
			var per = Number(args[5]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.RotateToOfPer(rotate,turns,isClockwise,per);}
		break;

		case 'MoveEndDis':
			var ID = parseInt(args[1]);
			var delay = parseInt(args[2]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.setMoveEndDisvisible();}
		break;
		
		case 'OpacityEndDis':
			var ID = parseInt(args[1]);
			var delay = parseInt(args[2]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.setOpacityEndDisvisible();}
		break;
		
		case 'ScaleEndDis':
			var ID = parseInt(args[1]);
			var delay = parseInt(args[2]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.setScaleEndDisvisible();}
		break;
				
		case 'RotateEndDis':
			var ID = parseInt(args[1]);
			var delay = parseInt(args[2]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.setRotateEndDisvisible();}
		break;
		
		case 'SetDelay':
			var ID = parseInt(args[1]);
			var delay = parseInt(args[2]);
			
			var spr = Zzy.GCF.GetPicture(ID);
			if(spr){spr.setDelay(delay);}
		break;
	}
}

 

Game_Interpreter.prototype.ZzyGCFSetKeyCommand = function(args)
{
	var Keys = $gameSystem.getZzyGCFKey();
	
	var keysLen = 9;//9個按鍵
	
	
	Keys.Up = String(args[1]);
	Keys.Down = String(args[2]);
	Keys.Left = String(args[3]);
	Keys.Right = String(args[4]);
	Keys.A1 = String(args[5]);
	Keys.B1 = String(args[6]);
	Keys.A2 = String(args[7]);
	Keys.B2 = String(args[8]);
	Keys.P = String(args[9]);

	Zzy.GCF.ClearCustomKey();
	$gameSystem._ZzyGCFCustomKey = [];//清除之前設定的按鍵訊息
	Zzy.GCF.KeyCorrectAndBinding(Keys,$gameSystem._ZzyGCFCustomKey);
}





//===============================================================================================
//Scene_Map
//===============================================================================================

Zzy.GCF.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() 
{
	Zzy.GCF.Scene_Map_start.call(this);
	//執行遊戲結束后的指令碼和事件
	if(Zzy.GCF.tempCommonId)//執行事件
	{$gameTemp.reserveCommonEvent(Zzy.GCF.tempCommonId);}
	if(Zzy.GCF.tempScript)//執行指令碼
	{Zzy.GCF.tempScript();}
	
	Zzy.GCF.tempCommonId = 0;
	Zzy.GCF.tempScript = undefined;
	
	Zzy.GCF.tempSceneMapPointer = this;
	this._ZzyGCFPic = [];
	this._ZzyGCFPicName = [];//記錄名稱,爲了更佳方便
	this._ZzyGCFPicHue = [];//記錄色相,爲了更佳方便
	
	
	//讀取之前儲存的點陣圖
	this._ZzyGCFPictureArr = $gameSystem.ZzyGCFLoadAllPicture();
	this.ZzyGCFReloadPic();//通過點陣圖再次申請
};

Scene_Map.prototype.ZzyGCFReloadPic = function()
{
	var len = this._ZzyGCFPictureArr.length;
	for(var i=0;i<len;i++)
	{
		if(this._ZzyGCFPictureArr[i])
		{
			//重新載入
			var tempData = this._ZzyGCFPictureArr[i];
			this.ZzyGCFCreatePicture(i,tempData.fileName,tempData.hue,tempData.x,tempData.y);
			this.ZzyGCFReloadData(i,tempData);//重新載入數據
		}
	}
}


Scene_Map.prototype.ZzyGCFReloadData = function(ID,tempData)//重新載入之前的內容資訊
{
	
	this._ZzyGCFPicName[ID] = tempData.fileName;
	this._ZzyGCFPicHue[ID] = tempData.hue;
	Zzy.GCF.TransmitPicDate(tempData,this._ZzyGCFPic[ID]);

}




Zzy.GCF.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() 
{
	Zzy.GCF.Scene_Map_terminate.call(this);
    //this.removeChild(this._spriteset);
	
	this.SaveAllPictureData();//記錄所有圖片的數據資訊
	this.ZzyGCFRemoveAllPicture();//移除所有的圖片
	Zzy.GCF.tempSceneMapPointer = undefined;
	
};

Scene_Map.prototype.SaveAllPictureData = function()
{
	$gameSystem.ClearZzyGCFPictureArr();//清空
	
	var len = this._ZzyGCFPic.length;
	for(var i=0;i<len;i++)
	{
		var tempSpr = this._ZzyGCFPic[i];
		if(tempSpr)
		{
			var fileName = this._ZzyGCFPicName[i];
			var hue = this._ZzyGCFPicHue[i];
			$gameSystem.ZzyGCFSavePicture(tempSpr,i,fileName,hue);//儲存圖片的資訊
		}			
	}
}


Scene_Map.prototype.ZzyGCFRemoveAllPicture = function()
{
	var len = this._ZzyGCFPic.length;
	for(var i=0;i<len;i++)
	{
		var tempSpr = this._ZzyGCFPic[i];
		if(tempSpr)
		{
			this.removeChild(tempSpr);
			this._ZzyGCFPic[i] = undefined;
		}
	}
}



Scene_Map.prototype.ZzyGCFCreatePicture = function(ID,filename,hue,x,y)
{
	//首先判斷這個ID是否在圖片群中
	
	var tempSpr = this._ZzyGCFPic[ID];
	if(tempSpr)//刪除這個點陣圖
	{this.ZzyGCFDestoryPicture(ID);}
	
	var newSpr = new Sprite_ZzyGCFBase(x,y,filename,hue);//申請新的點陣圖資訊
	this._ZzyGCFPicName[ID] = filename;
	this._ZzyGCFPicHue[ID] = hue;
	
	this._ZzyGCFPic[ID] = newSpr;
	this.addChild(newSpr);//新增新的點陣圖
}

Scene_Map.prototype.ZzyGCFDestoryPicture = function(ID)
{
	var tempSpr = this._ZzyGCFPic[ID];
	if(!tempSpr)return;
	this.removeChild(tempSpr);
	this._ZzyGCFPic[ID] = undefined;
}

Scene_Map.prototype.ZzyGCFGetPicture = function(ID)
{
	var tempSpr = this._ZzyGCFPic[ID];
	return tempSpr;
}







//===============================================================================================
//Scene_ZzyGCFGame
//===============================================================================================


function Scene_ZzyGCFGame() 
{
    this.initialize.apply(this, arguments);
}

Scene_ZzyGCFGame.prototype = Object.create(Scene_Base.prototype);
Scene_ZzyGCFGame.prototype.constructor = Scene_ZzyGCFGame;

Scene_ZzyGCFGame.prototype.initialize = function() 
{
    Scene_Base.prototype.initialize.call(this);
	
	this.InitData();//初始化數據
};

Scene_ZzyGCFGame.prototype.InitData = function()
{
	//獲取到遊戲數據
	this.gameData = $gameSystem.getZzyGCFGameData();
	this.gameGlobal = $gameSystem.getZzyGCFGameGlobal();
	this.isError = false;//是否出現錯誤,這將會決定是否強制退出這個視窗
	this._gameWindow = undefined;//建立視窗
	this._gameWindowUI = undefined;//建立UI視窗
	
	
	
	this.OnTouchX = 0;//滑鼠按下的X
	this.OnTouchY = 0;//滑鼠按下的Y
	this.OutTouchX = 0;//滑鼠抬起的X
	this.OutTouchY = 0;//滑鼠抬起的Y	
	this.InTouchX = 0;//按住時滑鼠X
	this.InTouchY = 0;//按住時滑鼠Y
	
	this.isTouchMoving = false;//是否處於按下移動中
	
	//按鍵資訊
	this.keyUp = 0;
	this.keyDown = 0;	
	this.keyLeft = 0;
	this.keyRight = 0;
	this.keyA1 = 0;
	this.keyB1 = 0;
	this.keyA2 = 0;
	this.keyB2 = 0;
	this.keyP = 0;
}


Scene_ZzyGCFGame.prototype.create = function() 
{
    Scene_Base.prototype.create.call(this);
    //this.playGameoverMusic();
    this.createBackground();//建立背景
	this.createGameWindow();//創造遊戲Window
};

Scene_ZzyGCFGame.prototype.start = function() 
{
    Scene_Base.prototype.start.call(this);
	this.fadeInAll();//載入全部
};

Scene_ZzyGCFGame.prototype.update = function() //作為子類的擴充
{
    Scene_Base.prototype.update.call(this);
	
	
	this.CheckErrorExit();//檢測錯誤退出
	this.CheckReloadBk();//檢測過載圖片
	this.ScrollBk();//捲動背景
	this.updateInputKey();//重新整理輸入鍵盤
	this.updateInputTouch();//重新整理輸入觸控
	
};

Scene_ZzyGCFGame.prototype.updateInputKey = function()
{
	//if(!$gameSystem._ZzyGCFIsCanKey)return;//鍵盤響應控制,遺棄
	if(!this._gameWindow)return;
	
	this.updateKeyTriggered();//檢測鍵盤按下
	this.updateKeyReleased();//檢測鍵盤按住
	this.updateKeyPressed();//檢測

}


Scene_ZzyGCFGame.prototype.updateKeyTriggered = function()//檢測鍵盤按下時
{
	var Keys = Zzy.GCF.Keys();
	
	if(Input.isTriggered(Keys.Up))
	{
		this._gameWindow.OnKeyUp();
	}
	else if(Input.isTriggered(Keys.Down))
	{
		this._gameWindow.OnKeyDown();
	}
	else if(Input.isTriggered(Keys.Left))
	{
		this._gameWindow.OnKeyLeft();
	}
	else if(Input.isTriggered(Keys.Right))
	{
		this._gameWindow.OnKeyRight();
	}
	else if(Input.isTriggered(Keys.A1))
	{
		this._gameWindow.OnKeyA1();
	}
	else if(Input.isTriggered(Keys.B1))
	{
		this._gameWindow.OnKeyB1();
	}
	else if(Input.isTriggered(Keys.A2))
	{
		this._gameWindow.OnKeyA2();
	}
	else if(Input.isTriggered(Keys.B2))
	{
		this._gameWindow.OnKeyB2();
	}
	else if(Input.isTriggered(Keys.P))
	{
		this._gameWindow.OnKeyP();
	}	
}

Scene_ZzyGCFGame.prototype.updateKeyReleased = function()//檢測鍵盤松開時
{
	var Keys = Zzy.GCF.Keys();
	
	if(Input.ZzyGCFisReleased(Keys.Up))
	{
		this._gameWindow.OutKeyUp();
	}
	else if(Input.ZzyGCFisReleased(Keys.Down))
	{
		this._gameWindow.OutKeyDown();
	}
	else if(Input.ZzyGCFisReleased(Keys.Left))
	{
		this._gameWindow.OutKeyLeft();
	}
	else if(Input.ZzyGCFisReleased(Keys.Right))
	{
		this._gameWindow.OutKeyRight();
	}
	else if(Input.ZzyGCFisReleased(Keys.A1))
	{
		this._gameWindow.OutKeyA1();
	}
	else if(Input.ZzyGCFisReleased(Keys.B1))
	{
		this._gameWindow.OutKeyB1();
	}
	else if(Input.ZzyGCFisReleased(Keys.A2))
	{
		this._gameWindow.OutKeyA2();
	}
	else if(Input.ZzyGCFisReleased(Keys.B2))
	{
		this._gameWindow.OutKeyB2();
	}
	else if(Input.ZzyGCFisReleased(Keys.P))
	{
		this._gameWindow.OutKeyP();
	}		
}

Scene_ZzyGCFGame.prototype.updateKeyPressed = function()//檢測按住時
{
	var Keys = Zzy.GCF.Keys();
	
	if(Input.isPressed(Keys.Up))
	{
		this._gameWindow.InKeyUp();
	}
	else if(Input.isPressed(Keys.Down))
	{
		this._gameWindow.InKeyDown();
	}
	else if(Input.isPressed(Keys.Left))
	{
		this._gameWindow.InKeyLeft();
	}
	else if(Input.isPressed(Keys.Right))
	{
		this._gameWindow.InKeyRight();
	}
	else if(Input.isPressed(Keys.A1))
	{
		this._gameWindow.InKeyA1();
	}
	else if(Input.isPressed(Keys.B1))
	{
		this._gameWindow.InKeyB1();
	}
	else if(Input.isPressed(Keys.A2))
	{
		this._gameWindow.InKeyA2();
	}
	else if(Input.isPressed(Keys.B2))
	{
		this._gameWindow.InKeyB2();
	}
	else if(Input.isPressed(Keys.P))
	{
		this._gameWindow.InKeyP();
	}		

}


Scene_ZzyGCFGame.prototype.updateInputTouch = function()
{
	//if(!$gameSystem._ZzyGCFIsCanTouch)return;//點選響應控制,遺棄
	if(!this._gameWindow)return;
	
	if(TouchInput.isTriggered())//按下
	{this._gameWindow.OnTouch();}
	
	if(TouchInput.isReleased())//抬起
	{this._gameWindow.OutTouch();}
	
	if(this.isTouchMoving)//處於移動中
	{this._gameWindow.InTouch();}
}

Scene_ZzyGCFGame.prototype.CheckReloadBk = function()
{
	if(Zzy.GCF.tempReloadBk)
	{
		this.requestBkBitmap();//重新整理點陣圖
		Zzy.GCF.tempReloadBk = false;
	}
}

Scene_ZzyGCFGame.prototype.ScrollBk = function()
{
	if($gameSystem.GetZzyGCFBkIsScroll())
	{
		this._backgroundSprite.origin.x -= $gameSystem.GetZzyGCFBkScrollX();
		this._backgroundSprite.origin.y -= $gameSystem.GetZzyGCFBkScrollY();
	}

}


Scene_ZzyGCFGame.prototype.CheckErrorExit = function()
{
	if (this.isBusy())return;
	
	if(this.isError)
	{
		this.isError = false;
		Zzy.GCF.errorExitGame();//退出遊戲
	}	
}



Scene_ZzyGCFGame.prototype.stop = function() 
{
    Scene_Base.prototype.stop.call(this);
    this.fadeOutAll();//執行緩出
};

Scene_ZzyGCFGame.prototype.terminate = function() 
{
    Scene_Base.prototype.terminate.call(this);
    AudioManager.stopAll();
};


Scene_ZzyGCFGame.prototype.fadeOutAll = function() //全部緩出
{
    var time = this.slowFadeOutSpeed() / 60;
    AudioManager.fadeOutBgm(time);
    AudioManager.fadeOutBgs(time);
    AudioManager.fadeOutMe(time);
	
	if($gameSystem.GetZzyGCFIsFadeScene())
	{this.startFadeOut(this.slowFadeOutSpeed());}
};

Scene_ZzyGCFGame.prototype.fadeInAll = function()//全部緩入
{
	this.PlayBkBGM();//播放背景音樂
	var time = this.slowFadeInSpeed() / 60;
	AudioManager.fadeInBgm(time);
	AudioManager.fadeOutBgs(time);//BGS和ME退出
    AudioManager.fadeOutMe(time);
	
	if($gameSystem.GetZzyGCFIsFadeScene())
	{ this.startFadeIn(this.slowFadeInSpeed(), false);}//執行緩入
}

Scene_ZzyGCFGame.prototype.PlayBkBGM = function()
{
	//是否播放背景曲調
	var bgm = $gameSystem.GetZzyGCFBkBGM();
	
	if(bgm.name)//存在音樂
	{AudioManager.replayBgm(bgm);}//播放音樂	
}



Scene_ZzyGCFGame.prototype.requestBkBitmap = function()
{
	if($gameSystem.GetZzyGCFBkPic())
	{
		var picName = $gameSystem.GetZzyGCFBkPic();
		var hue = $gameSystem.GetZzyGCFBkHue();
		this._backgroundSprite.bitmap = ImageManager.loadPicture(picName,hue); 
	}
	else
	{
		this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
	}
	this._backgroundSprite.move(0,0,Graphics.boxWidth,Graphics.boxHeight);	
}

Scene_ZzyGCFGame.prototype.createBackground = function() //創造背景圖片
{
	
    this._backgroundSprite = new TilingSprite();
	
	this.requestBkBitmap();//申請點陣圖
    this.addChild(this._backgroundSprite);
};


Scene_ZzyGCFGame.prototype.slowFadeInSpeed = function() 
{return $gameSystem.GetZzyGCFFadeInFrame();};

Scene_ZzyGCFGame.prototype.slowFadeOutSpeed = function() 
{return $gameSystem.GetZzyGCFFadeOutFrame();};


Scene_ZzyGCFGame.prototype.createFadeSprite = function(white)//申請遮罩
{
	
    if (!this._fadeSprite) 
	{
        this._fadeSprite = new ScreenSprite();
        this.addChild(this._fadeSprite);
    }
	
	var color = $gameSystem.GetZzyGCFFadeColor();
	
	var r = color[0];
	var g = color[1]; 
	var b = color[2]; 
	this._fadeSprite.setColor(r,g,b);
};


Scene_ZzyGCFGame.prototype.createGameWindow = function()
{
	//判斷這個遊戲名稱是否註冊過
	var gameName = this.gameGlobal.name;
	var Len = Zzy.Param.GCFHaveGame.length;
	var index = -1;
	var isHave = false;
		
	for(var i=0;i<Len;i++)
	{
		if(gameName === Zzy.Param.GCFHaveGame[i])
		{
			isHave = true;
			index = i;
			break;
		}
	}
	if(!isHave)//出現錯誤
	{
		Zzy.GCF.errorGame(1);
		this.isError = true;
		return;
	}

	//通過動態編譯的方式,來獲取遊戲視窗

	gameName = Zzy.Param.GCFHaveRealGame[index];//轉換成視窗名稱

	this._gameWindow = eval(String('new Window_ZzyGCF' + gameName));
	this._gameWindowUI = eval(String('new Window_ZzyGCF' + gameName + 'UI'));
	
	this._gameWindow.setUI(this._gameWindowUI);
	
	this.addChild(this._gameWindow);//遊戲層
	//新增額外的資訊視窗,用來做分層
	this.AddLayer1();
	this.AddLayer2();
	this.AddLayer3();
	this.AddLayer4();
	this.AddLayer5();
	this.AddLayer6();
	this.AddLayer7();
	this.AddLayer8();
	this.AddLayer9();
	this.AddLayer10();
	this.addChild(this._gameWindowUI);//UI層
}


Scene_ZzyGCFGame.prototype.AddLayer1 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer2 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer3 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer4 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer5 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer6 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer7 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer8 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer9 = function()
{}//繼承寫入視窗
Scene_ZzyGCFGame.prototype.AddLayer10 = function()
{}//繼承寫入視窗




Scene_ZzyGCFGame.prototype.isTriggered = function()//觸發鍵盤確認按鍵或是滑鼠點選按鍵
{
    return Input.isTriggered('ok') || TouchInput.isTriggered();
};


Scene_ZzyGCFGame.prototype.terminate = function()//退出時 
{
    this.removeChild(this._gameWindow);
	$gameSystem.SettlementGame();//結算遊戲
	Scene_Base.prototype.terminate.call(this);
	
	if(this._gameWindow)//刪除遊戲視窗
	{this.removeChild(this._gameWindow);}
	
};


//層類
//=========================================================================================
//Window_ZzyGCFLayerBase
//=========================================================================================

function Window_ZzyGCFLayerBase() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyGCFLayerBase.prototype = Object.create(Window_Base.prototype);
Window_ZzyGCFLayerBase.prototype.constructor = Window_ZzyGCFLayerBase;

Window_ZzyGCFLayerBase.prototype.initialize = function()
{
	
    Window_Base.prototype.initialize.call(this,0,0,Graphics.boxWidth,Graphics.boxHeight);
	this.opacity = 0;//透明
	
};

Window_ZzyGCFLayerBase.prototype.standardPadding = function() 
{
	return 0;
}


//===============================================================================================
//Window_ZzyGCFBase
//===============================================================================================

function Window_ZzyGCFBase() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyGCFBase.prototype = Object.create(Window_Base.prototype);
Window_ZzyGCFBase.prototype.constructor = Window_ZzyGCFBase;

Window_ZzyGCFBase.prototype.initialize = function() 
{
	//初始化
    var width = this.Width();
    var height = this.Height();
	
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
	this.opacity = 0;
	
	//獲得遊戲數據
	this.gameData = $gameSystem.getZzyGCFGameData();
	this.gameGlobal = $gameSystem.getZzyGCFGameGlobal();
	this.scene = SceneManager._scene;//獲取全部的數值
	this.UI = undefined;//UI視窗
	
	// this._textWindow = undefined;
	// this.createTextWindow();
};

// Window_ZzyGCFBase.prototype.createTextWindow = function()//建立文字視窗
// {
	// //因為渲染順序的原因,圖片會在drawText之後處理,這導致了遊戲中的無法顯示在點陣圖的上方
	// //通過雙層子視窗的方式,讓文字顯示在點陣圖的上方
	// this._textWindow = new Window_ZzyGCFText();
	// this._textWindow.opacity = 0;
	// this.addChild(this._textWindow);
// }


Window_ZzyGCFBase.prototype.update = function() //作為子類的擴充
{
	Window_Base.prototype.update.call(this);
	
}

Window_ZzyGCFBase.prototype.standardPadding = function() //寬度邊距消除
{
    return 0;
};

Window_ZzyGCFBase.prototype.Width = function()
{
	return Graphics.boxWidth;
}

Window_ZzyGCFBase.prototype.Height = function()
{
	return Graphics.boxHeight;
}


Window_ZzyGCFBase.prototype.clear = function() //清理
{
    this.contents.clear();
};

Window_ZzyGCFBase.prototype.refresh = function() //重新整理
{
    this.contents.clear();
};

Window_ZzyGCFBase.prototype.setUI = function(UIWindow)
{
	this.UI = UIWindow;//UI視窗
}

// Window_ZzyGCFBase.prototype.drawText = function(text,x,y,pos)
// {
	// this._textWindow.drawText(text,x,y,pos);
// }

// function Window_ZzyGCFText() 
// {
    // this.initialize.apply(this, arguments);
// }

// Window_ZzyGCFText.prototype = Object.create(Window_Base.prototype);
// Window_ZzyGCFText.prototype.constructor = Window_ZzyGCFText;

// Window_ZzyGCFText.prototype.initialize = function() 
// {
    // var width = Graphics.boxWidth;
    // var height = Graphics.boxHeight;
    // Window_Base.prototype.initialize.call(this, 0, 0, width, height);
// };



// Window_ZzyGCFText.prototype.standardPadding = function() //寬度邊距消除
// {
    // return 0;
// };





//以下這些方法會用於做遊戲的過載,On開頭代表按下,Out開頭代表鬆開,In開頭代表持續按下時長
Window_ZzyGCFBase.prototype.OnKeyUp = function()
{
	this.scene.keyUp = 1;
}
Window_ZzyGCFBase.prototype.OnKeyDown = function()
{
	this.scene.keyDown = 1;
}
Window_ZzyGCFBase.prototype.OnKeyLeft = function()
{
	this.scene.keyLeft = 1;
}
Window_ZzyGCFBase.prototype.OnKeyRight = function()
{
	this.scene.keyRight = 1;
}
Window_ZzyGCFBase.prototype.OnKeyA1 = function()
{
	this.scene.keyA1 = 1;
}
Window_ZzyGCFBase.prototype.OnKeyB1 = function()
{
	this.scene.keyB1 = 1;
}
Window_ZzyGCFBase.prototype.OnKeyA2 = function()
{
	this.scene.keyA2 = 1;
}
Window_ZzyGCFBase.prototype.OnKeyB2 = function()
{
	this.scene.keyB2 = 1;
}
Window_ZzyGCFBase.prototype.OnKeyP = function()
{
	this.scene.keyP = 1;
	
	//暫停遊戲/繼續遊戲切換
	this.gameGlobal.isPausing = !this.gameGlobal.isPausing;
	this.gameGlobal.isRunning = !this.gameGlobal.isRunning;
	
	return this.gameGlobal.isPausing;
}

Window_ZzyGCFBase.prototype.OutKeyUp = function()
{
	this.scene.keyUp = 0;
}
Window_ZzyGCFBase.prototype.OutKeyDown = function()
{
	this.scene.keyDown = 0;
}
Window_ZzyGCFBase.prototype.OutKeyLeft = function()
{
	this.scene.keyLeft = 0;
}
Window_ZzyGCFBase.prototype.OutKeyRight = function()
{
	this.scene.keyRight = 0;
}
Window_ZzyGCFBase.prototype.OutKeyA1 = function()
{
	this.scene.keyA1 = 0;
}
Window_ZzyGCFBase.prototype.OutKeyB1 = function()
{
	this.scene.keyB1 = 0;
}
Window_ZzyGCFBase.prototype.OutKeyA2 = function()
{
	this.scene.keyA2 = 0;
}
Window_ZzyGCFBase.prototype.OutKeyB2 = function()
{
	this.scene.keyB2 = 0;
}
Window_ZzyGCFBase.prototype.OutKeyP = function()
{
	this.scene.keyP = 0;
}

Window_ZzyGCFBase.prototype.InKeyUp = function()
{
	this.scene.keyUp++;
}
Window_ZzyGCFBase.prototype.InKeyDown = function()
{
	this.scene.keyDown++;
}
Window_ZzyGCFBase.prototype.InKeyLeft = function()
{
	this.scene.keyLeft++;
}
Window_ZzyGCFBase.prototype.InKeyRight = function()
{
	this.scene.keyRight++;
}
Window_ZzyGCFBase.prototype.InKeyA1 = function()
{
	this.scene.keyA1++;
}
Window_ZzyGCFBase.prototype.InKeyB1 = function()
{
	this.scene.keyB1++;
}

Window_ZzyGCFBase.prototype.InKeyA2 = function()
{
	this.scene.keyA2++;
}
Window_ZzyGCFBase.prototype.InKeyB2 = function()
{
	this.scene.keyB2++;
}
Window_ZzyGCFBase.prototype.InKeyP = function()
{
	this.scene.keyP++;
}



Window_ZzyGCFBase.prototype.OnTouch = function()//滑鼠按下
{
	this.scene.OnTouchX = TouchInput.x;
	this.scene.OnTouchY = TouchInput.y;
	this.scene.InTouchX = TouchInput.x;
	this.scene.InTouchY = TouchInput.y;	
	this.scene.isTouchMoving = true;

}
Window_ZzyGCFBase.prototype.OutTouch = function()//滑鼠抬起
{
	this.scene.OutTouchX = TouchInput.x;
	this.scene.OutTouchY = TouchInput.y;
	this.scene.isTouchMoving = false;
}

Window_ZzyGCFBase.prototype.InTouch = function()//移動中
{
	this.scene.InTouchX = TouchInput.x;
	this.scene.InTouchY = TouchInput.y;
}

//===============================================================================================
//Window_ZzyGCFBaseUI
//===============================================================================================

function Window_ZzyGCFBaseUI() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyGCFBaseUI.prototype = Object.create(Window_ZzyGCFBase.prototype);
Window_ZzyGCFBaseUI.prototype.constructor = Window_ZzyGCFBaseUI;

Window_ZzyGCFBaseUI.prototype.initialize = function() 
{
	//初始化
    var width = this.Width();
    var height = this.Height();
	
    Window_ZzyGCFBase.prototype.initialize.call(this, 0, 0, width, height);
	this.opacity = 0;
	
	//獲得遊戲數據
	this.gameData = $gameSystem.getZzyGCFGameData();
	this.gameGlobal = $gameSystem.getZzyGCFGameGlobal();
	this.scene = SceneManager._scene;//獲取全部的數值
	
	
};




//==========================================================================
//Sprite_ZzyGCFBase
//==========================================================================


function Sprite_ZzyGCFBase() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGCFBase.prototype = Object.create(Sprite.prototype);
Sprite_ZzyGCFBase.prototype.constructor = Sprite_ZzyGCFBase;

Sprite_ZzyGCFBase.prototype.initialize = function(x,y,fileName,hue) 
{
    Sprite.prototype.initialize.call(this);
	//設定位置
	this.x = x;
	this.y = y;
	this.bitmap = undefined;
	this.loadBitmap(fileName,hue);

	this.initOrigin();//初始化原
	this.autoSetOrigin();//自動設定原
	
    this.initMembers();//初始化數據
	this.initPower();//申請許可權
	
	this.autoSetParam();//自動設定參數資訊
};

Sprite_ZzyGCFBase.prototype.loadBitmap = function(fileName,hue)//載入圖片
{
	this.bitmap = Zzy.GCF.LoadPicture(fileName,hue);
}


Sprite_ZzyGCFBase.prototype.ResetInfo = function(paramArr)//可以被重寫
{}



Sprite_ZzyGCFBase.prototype.initOrigin = function()
{
	this.originalX = this.x;//產生的原位置
	this.originalY = this.y;//產生的原位置
	this.originOp = this.opacity;//原透明度
	this.originScaleX = this.scale.x;//原縮放
	this.originScaleY = this.scale.y;	
	this.originBitmap = this.bitmap;//原影象
}

Sprite_ZzyGCFBase.prototype.autoSetOrigin = function()
{}//用於子類的重寫

Sprite_ZzyGCFBase.prototype.autoSetParam = function()
{}//用於子類的重寫

Sprite_ZzyGCFBase.prototype.initPower = function()
{
	this.isCanMoving = true;//允許移動
	this.isCanOpaciting = true;//允許透明度
	this.isCanScaling = true;//允許縮放
	this.isCanRotating = true;//允許旋轉
	
	this.isCanSelect = false;//允許被選擇
	this.isCanCollision = false;//允許發生碰撞
	this.isCanButton = false;//允許按鈕效果
	this.ignorePause = false;//忽略暫停 這個內容不會暫停	
}

Sprite_ZzyGCFBase.prototype.initMembers = function() 
{
	//位置資訊
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;


	this.ID = 0;//對象的ID值
	Zzy.GCF.AssignmentID(this);//分配ID值
	
	//判定資訊
	this.moving = false;//是否處於移動中
	this.scaling = false;//是否處於縮放中
	this.opaciting = false;//是否處於透明度變化中 
	this.rotating = false;//是否處於旋轉中
	
	this.selecting = false;//是否被選中
	this.collising = false;//是否觸碰對像
	this.buttoning = false;//是否被點選
	
	this.collisObj = [];//碰撞到的對象
	
	//用於移動的數據資訊
	this.moveSpeed = 0;//移動速度
	this.moveDegree = 0;//角度
	this.moveTime = 0;//移動的時長
	this.moveCTime = 0;//計數
	this.movePer = 0;//移動百分比
	
	this.moveMode = 0;//移動模式
	
	this.startX = 0;
	this.startY = 0;
	this.endX = 0;
	this.endY = 0;
	
	//用於透明的數據資訊
	this.opSpeed = 0;//透明速度
	this.opTime = 0;//透明度時長
	this.opCTime = 0;//計數
	this.opPer = 0;//透明百分比
	this.opMode = 0;//透明模式
	
	this.startOp = 0;
	this.endOp = 0;
	
	//用於縮放的數據資訊
	this.scaleZoomX = 1;
	this.scaleZoomY = 1;
	this.tempScaleX = 1;
	this.tempScaleY = 1;
	this.scaleSpeed = 0;//縮放速度
	this.scaleDegree = 0;//角度
	this.scaleTime = 0;//縮放的時長
	this.scaleCTime = 0;//計數
	this.scalePer = 0;//縮放百分比
	this.scaleMode = 0;//縮放模式
	
	this.startScaleX = 0;
	this.startScaleY = 0;
	this.endScaleX = 0;
	this.endScaleY = 0;
	
	
	//用於旋轉的數據資訊
	this.rotateSpeed = 0;//旋轉速度以度數為單位
	this.rotateTime = 0;//旋轉時長
	this.rotateCTime = 0;//旋轉計數
	this.rotatePer = 0;//旋轉百分比
	this.rotateMode = 0;//旋轉模式
	
	this.startRotate = 0;//開始時的度數
	this.endRotate = 0;//結束時的度數
	this.isClockwise = false;//是否是順時針
	this.rotateTurns = 0;//圈數
	this.realEndRotate = 0;//真實結束角度
	
	
	//碰撞檢測框,左上右下,也是按鈕的檢測框
	this.frameWidth = 0;//選擇框寬度
	this.frameHeight = 0;//選擇框高度
	this.frameL = 0;
	this.frameU = 0;
	this.frameR = 0;
	this.frameD = 0;

	this.blackBitmap = new Bitmap(48,48);//未填充時的黑色點陣圖
	this.blackBitmap.fillAll('rgba(0,0,0,1)');
	
	this.isInButton = false;//滑鼠是否在按鈕中
	this.isPressButton = false;//滑鼠一直按著按鈕
	this.selectBitmap = this.blackBitmap;//被選中的貼圖
	this.buttonInScopeBitmap = this.blackBitmap;//滑鼠在範圍中的按鈕貼圖
	this.buttonDownBitmap = this.blackBitmap;//被按下按住的按鈕貼圖
	
	this.touchOffX = 0;//被點選距離中心的偏移X
	this.touchOffY = 0;//被點選距離中心的偏移Y
	
	this.delayTime = 0;//延遲時間
	this.isDelay = false;//延遲中
	
	this.pausing = false;//暫停中
	this.ignorePause = false;//忽略暫停 這個內容不會暫停
	

	//基礎操作后先關的數據
	this.moveEndDisvisibleDelay = 0;
	this.moveEndDisvisible = false;
	this.scaleEndDisvisibleDelay = 0;
	this.scaleEndDisvisible = false;
	this.opacityEndDisvisibleDelay = 0;
	this.opacityEndDisvisible = false;
	this.rotateEndDisvisibleDelay = 0;
	this.rotateEndDisvisible = false;

	//基礎造作結束后,會回撥方法
	
	this.moveEndCallFunction = undefined;
	this.moveEndCallFunctionDelay = 0;
	this.moveEndCallFunctionParam = undefined
	
	this.scaleEndCallFunction = undefined;
	this.scaleEndCallFunctionDelay = 0;
	this.scaleEndCallFunctionParam = 0;
	
	this.opacityEndCallFunction = undefined;
	this.opacityEndCallFunctionDelay = 0;
	this.opacityEndCallFunctionParam = 0;
	
	this.rotateEndCallFunction = undefined;
	this.rotateEndCallFunctionDelay = 0;
	this.rotateEndCallFunctionParam = 0;
	
	//注意新增碰撞對象是可以直接通過OnCollision,InCollision,OutCollision來進行判斷的
	//而新增對像組,只能識別InCollision
	
	//碰撞相關對像
	this.collisionObjArr = [];//碰撞對像檢測組
	this.collisionObjsArr = [];//對像組合組
};



//新增 -- 碰撞對像檢測組
Sprite_ZzyGCFBase.prototype.AddCollisionObj = function(obj)//新增檢測:單個對象
{
	for(var i=0;i<this.collisionObjArr.length;i++)
	{
		if(!this.collisionObjArr[i])
		{
			this.collisionObjArr[i] = {};
			this.collisionObjArr[i].onCo = true;//首次碰撞
			this.collisionObjArr[i].inCo = false;
			this.collisionObjArr[i].outCo = false;
			this.collisionObjArr[i].obj = obj;
			return false;
		}
	}
	
	var tempObj = {
		onCo:true,
		inCo:false,
		outCo:false,
		obj:obj
	};
	
	this.collisionObjArr.push(tempObj);
	return true;
}

Sprite_ZzyGCFBase.prototype.AddCollisionObjs = function(objs)//新增對像組
{
	for(var i=0;i<this.collisionObjsArr.length;i++)
	{
		if(!this.collisionObjsArr[i])
		{
			this.collisionObjsArr[i] = objs;
			return false;
		}		
	}
	this.collisionObjsArr.push(objs);
	return true;
}

Sprite_ZzyGCFBase.prototype.RemoveCollisionObj = function(obj)//移除單個檢測對像,如果不存在則返回false
{
	for(var i=0;i<this.collisionObjArr.length;i++)
	{
		if(this.collisionObjArr[i])
		{
			if(this.collisionObjArr[i].obj === obj)
			{
				this.collisionObjArr[i] = undefined;
				return true;				
			}
		}
	}
	return false;
}

Sprite_ZzyGCFBase.prototype.RemoveCollisionObjs = function(objs)
{
	for(var i=0;i<this.collisionObjsArr.length;i++)
	{
		if(this.collisionObjsArr[i] === objs)
		{
			this.collisionObjsArr[i] = undefined;
			return true;
		}
	}
	return false;	
}

Sprite_ZzyGCFBase.prototype.ClearCollisionObj = function()//清空
{
	this.collisionObjArr = [];
}

Sprite_ZzyGCFBase.prototype.ClearCollisionObjs = function()//清空
{
	this.collisionObjsArr = [];
}



//設定 -- 這將會開始運動
Sprite_ZzyGCFBase.prototype.MoveToOfSpeed = function(x,y,speed)//以一定的速度移動到指定的位置
{
	this.moving = true;
	this.startX = this.x;
	this.startY = this.y;
	this.endX = x;
	this.endY = y;
	this.moveSpeed = speed;
	this.moveMode = 1;
	this.moveDegree = Zzy.GCF.ATANARC(this.endX-this.startX,this.endY-this.startY);
	
}

Sprite_ZzyGCFBase.prototype.MoveToOfTime = function(x,y,time)//以一定的事件移動到指定位置
{
	this.moving = true;
	this.startX = this.x;
	this.startY = this.y;
	this.endX = x;
	this.endY = y;
	this.moveTime = time;
	this.moveCTime = 0;
	this.moveMode = 2;
	
}

Sprite_ZzyGCFBase.prototype.MoveToOfPer = function(x,y,per)//以百分比的方式移動,這是一個順滑的過程
{
	
	this.moving = true;
	this.startX = this.x;
	this.startY = this.y;
	this.endX = x;
	this.endY = y;
	this.movePer = per;
	this.moveMode = 3;
}

Sprite_ZzyGCFBase.prototype.OpacityToOfSpeed = function(op,speed)
{
	this.opaciting = true;
	this.startOp = this.opacity;
	this.endOp = op;
	this.opSpeed = speed;
	this.opMode = 1;
}

Sprite_ZzyGCFBase.prototype.OpacityToOfTime = function(op,time)
{
	this.opaciting = true;
	this.startOp = this.opacity;
	this.endOp = op;
	this.opTime = time;
	this.opCTime = 0;
	this.opMode = 2;
	
}

Sprite_ZzyGCFBase.prototype.OpacityToOfPer = function(op,per)
{
	this.opaciting = true;
	this.startOp = this.opacity;
	this.endOp = op;
	this.opPer = per;
	this.opMode = 3;
}

Sprite_ZzyGCFBase.prototype.ScaleToOfSpeed = function(sx,sy,speed)
{
	this.scaling = true;
	this.startScaleX = this.scale.x / this.scaleZoomX;
	this.startScaleY = this.scale.y / this.scaleZoomY;
	this.tempScaleX = this.scale.x / this.scaleZoomX;
	this.tempScaleY = this.scale.y / this.scaleZoomY;
	this.endScaleX = sx;
	this.endScaleY = sy;
	this.scaleSpeed = speed;
	this.scaleDegree = Zzy.GCF.ATANARC(sx-this.scale.x,sy-this.scale.y);	
	this.scaleMode = 1;
}

Sprite_ZzyGCFBase.prototype.ScaleToOfTime = function(sx,sy,time)
{
	this.scaling = true;
	this.startScaleX = this.scale.x / this.scaleZoomX;
	this.startScaleY = this.scale.y / this.scaleZoomY;
	this.tempScaleX = this.startScaleX;
	this.tempScaleY = this.startScaleY;	
	this.endScaleX = sx;
	this.endScaleY = sy;
	this.scaleDegree = Zzy.GCF.ATANARC(sx-this.scale.x,sy-this.scale.y) - Math.PI / 2;
	this.scaleTime = time;
	this.scaleCTime = 0;
	this.scaleMode = 2;
}

Sprite_ZzyGCFBase.prototype.ScaleToOfPer = function(sx,sy,per)
{
	this.scaling = true;
	this.startScaleX = this.scale.x / this.scaleZoomX;
	this.startScaleY = this.scale.y / this.scaleZoomY;
	this.tempScaleX = this.startScaleX;
	this.tempScaleY = this.startScaleY;
	this.endScaleX = sx;
	this.endScaleY = sy;
	this.scalePer = per;
	this.scaleMode = 3;
}

Sprite_ZzyGCFBase.prototype.RotateToOfSpeed = function(rotate,turns,isClockwise,speed)
{

	this.rotating = true;
	this.rotateSpeed = speed * Math.PI / 180;//轉換弧度
	this.startRotate = this.rotation;
	
	
	this.endRotate = rotate * Math.PI / 180;//計算弧度
	
	this.rotateTurns = turns;
	this.isClockwise = isClockwise;	
	
	var tempEnd = this.endRotate < 0 ? this.endRotate + Math.PI * 2 : this.endRotate;
	
	if(tempEnd > this.startRotate)//終點在起點前面
	{
		if(this.isClockwise)//順時針
		{
			this.endRotate = tempEnd;
		}
		else//逆時針
		{
			this.endRotate = tempEnd - Math.PI * 2;
		}
	}
	else if(tempEnd < this.startRotate)//終點在起點後面
	{
		if(this.isClockwise)//順時針
		{
			this.endRotate += Math.PI*2;
		}
		else//逆時針
		{
			this.endRotate = tempEnd - Math.PI * 2;
		}		
	}
	else
	{
		if(this.isClockwise)
		{
			if(this.endRotate<0)this.endRotate+=Math.PI*2;
		}
		else
		{
			if(this.endRotate>0)this.endRotate-=Math.PI*2;
		}
	}

	if(this.isClockwise)
	{
		this.realEndRotate = this.endRotate + turns * Math.PI * 2;
	}
	else
	{
		this.realEndRotate = this.endRotate - turns * Math.PI * 2;
	}

	this.rotateMode = 1;
}

Sprite_ZzyGCFBase.prototype.RotateToOfTime = function(rotate,turns,isClockwise,time)
{
	this.rotating = true;
	this.rotateTime = time;
	this.rotateCTime = 0;
	this.startRotate = this.rotation;
	this.endRotate = rotate * Math.PI / 180;//計算弧度
	this.rotateTurns = turns;
	this.isClockwise = isClockwise;
	if(this.isClockwise)
	{
		this.realEndRotate = this.endRotate + turns * Math.PI * 2;
	}
	else
	{
		this.realEndRotate = this.endRotate - turns * Math.PI * 2;
	}
	
	this.rotateMode = 2;	
}

Sprite_ZzyGCFBase.prototype.RotateToOfPer = function(rotate,turns,isClockwise,per)
{
	this.rotating = true;
	this.rotatePer = per;
	this.startRotate = this.rotation;
	this.endRotate = rotate * Math.PI / 180;//計算弧度
	this.rotateTurns = turns;
	this.isClockwise = isClockwise;
	if(this.isClockwise)
	{
		this.realEndRotate = this.endRotate + turns * Math.PI * 2;
	}
	else
	{
		this.realEndRotate = this.endRotate - turns * Math.PI * 2;
	}
	
	this.rotateMode = 3;
}

Sprite_ZzyGCFBase.prototype.setMoveEndDisvisible = function(delay)//在執行命令移動結束後會隱藏
{
	this.moveEndDisvisibleDelay = delay ? delay : 0;
	this.moveEndDisvisible = true;
}

Sprite_ZzyGCFBase.prototype.setScaleEndDisvisible = function(delay)//在執行命令縮放結束後會隱藏
{
	this.scaleEndDisvisibleDelay = delay ? delay : 0;
	this.scaleEndDisvisible = true;
}

Sprite_ZzyGCFBase.prototype.setOpacityEndDisvisible = function(delay)//在執行命令透明度結束後會隱藏
{
	this.opacityEndDisvisibleDelay = delay ? delay : 0;
	this.opacityEndDisvisible = true;
}

Sprite_ZzyGCFBase.prototype.setRotateEndDisvisible = function(delay)//在執行命令旋轉結束後會隱藏
{
	this.rotateEndDisvisibleDelay = delay ? delay : 0;
	this.rotateEndDisvisible = true;
}

Sprite_ZzyGCFBase.prototype.setMoveEndCallFunction = function(fun,param,delay)
{

	this.moveEndCallFunctionDelay = delay ? delay : 0;
	this.moveEndCallFunctionParam = param;
	this.moveEndCallFunction = fun;	
}

Sprite_ZzyGCFBase.prototype.setScaleEndCallFunction = function(fun,param,delay)
{
	this.scaleEndCallFunctionDelay = delay ? delay : 0;
	this.scaleEndCallFunctionParam = param;
	this.scaleEndCallFunction = fun;
}

Sprite_ZzyGCFBase.prototype.setOpacityEndCallFunction = function(fun,param,delay)
{
	this.opacityEndCallFunctionDelay = delay ? delay : 0;
	this.opacityEndCallFunctionParam = param;
	this.opacityEndCallFunction = fun;
}

Sprite_ZzyGCFBase.prototype.setRotateEndCallFunction = function(fun,param,delay)
{
	this.rotateEndCallFunctionDelay = delay ? delay : 0;
	this.rotateEndCallFunctionParam = param;
	this.rotateEndCallFunction = fun;
}




//設定 -- 這將會停止運動
Sprite_ZzyGCFBase.prototype.stopMoving = function()
{
	this.moving = false;
}

Sprite_ZzyGCFBase.prototype.stopOpaciting = function()
{
	this.opaciting = false;
}

Sprite_ZzyGCFBase.prototype.stopScaling = function()
{
	this.scaling = false;
}

Sprite_ZzyGCFBase.prototype.stopRotating = function()
{
	this.rotating = false;
}

Sprite_ZzyGCFBase.prototype.stopAlling = function()
{
	this.moving = false;
	this.opaciting = false;
	this.scaling = false;
	this.rotating = false;
}


//設定 -- 這將會停止運動 同時不會呼叫函式指針,消失
Sprite_ZzyGCFBase.prototype.stopMovingClearAfter = function()
{
	this.stopMoving();
	this.moveEndCallFunctionDelay = 0;
	this.moveEndCallFunctionParam = undefined;
	this.moveEndCallFunction = undefined;
	this.moveEndDisvisibleDelay = 0;
	this.moveEndDisvisible = false;
}

Sprite_ZzyGCFBase.prototype.stopOpacitingClearAfter = function()
{
	this.stopOpaciting();
	this.opacityEndCallFunctionDelay = 0;
	this.opacityEndCallFunctionParam = undefined;
	this.opacityEndCallFunction = undefined;
	this.opacityEndDisvisibleDelay = 0;
	this.opacityEndDisvisible = false;
}

Sprite_ZzyGCFBase.prototype.stopScalingClearAfter = function()
{
	this.stopScaling();
	this.scaleEndCallFunctionDelay = 0;
	this.scaleEndCallFunctionParam = undefined;
	this.scaleEndCallFunction = undefined;
	this.scaleEndDisvisibleDelay = 0;
	this.scaleEndDisvisible = false;
}

Sprite_ZzyGCFBase.prototype.stopRotatingClearAfter = function()
{
	this.stopRotating();
	this.rotateEndCallFunctionDelay = 0;
	this.rotateEndCallFunctionParam = undefined;
	this.rotateEndCallFunction = undefined;
	this.rotateEndDisvisibleDelay = 0;
	this.rotateEndDisvisible = false;
}

//清理全部移動,同時不會呼叫函式指針,消失
Sprite_ZzyGCFBase.prototype.stopAllingClearAfter = function()
{
	this.stopMovingClearAfter();
	this.stopOpacitingClearAfter();
	this.stopScalingClearAfter();
	this.stopRotatingClearAfter();
}


Sprite_ZzyGCFBase.prototype.update = function() 
{
    Sprite.prototype.update.call(this);
   
    //暫停重新整理 如果這個類不會被暫停,則不會進行暫停 ,或者自身被暫停
	if(Zzy.GCF.IsPausing() && !this.ignorePause || this.pausing)return false;
   
    //設定延遲延遲時間后,基礎效果不會再執行
	this.updateData();//更新數據資訊
	
    if(!this.isInDelaying())
	{
		if(this.isCanMoving) this.updateMoving();//更新移動
		if(this.isCanScaling) this.updateScaling();//更新縮放
		if(this.isCanOpaciting) this.updateOpaciting();//更新透明度
		if(this.isCanRotating) this.updateRotating();//更新旋轉		
	}
	
	if(this.isNeedUpdateFrame()) this.updateFrame();//更新選擇框
	if(this.isCanSelect) this.updateSelect();//更新被選擇
	if(this.isCanCollision) this.updateCollision();//更新發生碰撞
	if(this.isCanButton) this.updateButton();//更新按鈕效果
	
	return true;
};

Sprite_ZzyGCFBase.prototype.updateData = function()
{
	if(this.isInDelaying())
	{
		this.delayTime--;
		if(this.delayTime <= 0)
		{
			this.isDelaying = false;//關閉延遲
			this.delayTime = 0;
		}
	}
	
}



Sprite_ZzyGCFBase.prototype.updateMoveEndDisvisible = function()
{
	
	if(this.moveEndDisvisible)
	{
		
		if(this.moveEndDisvisibleDelay > 0)
		{this.moveEndDisvisibleDelay--;}
		else
		{
			this.moveEndDisvisibleDelay = 0;
			this.moveEndDisvisible = false;
			this.visible = false;
		}
	}	
}

Sprite_ZzyGCFBase.prototype.updateOpacityEndDisvisible = function()
{
	if(this.opacityEndDisvisible)
	{
		
		if(this.opacityEndDisvisibleDelay > 0)
		{this.opacityEndDisvisibleDelay--;}
		else
		{
			this.opacityEndDisvisibleDelay = 0;
			this.opacityEndDisvisible = false;
			this.visible = false;
		}
	}		
}


Sprite_ZzyGCFBase.prototype.updateRotateEndDisvisible = function()
{
	if(this.rotateEndDisvisible)
	{
		if(this.rotateEndDisvisibleDelay > 0)
		{this.rotateEndDisvisibleDelay--;}
		else
		{
			this.rotateEndDisvisibleDelay = 0;
			this.rotateEndDisvisible = false;
			this.visible = false;
		}
	}		
}

Sprite_ZzyGCFBase.prototype.updateScaleEndDisvisible = function()
{
	if(this.scaleEndDisvisible)
	{
		if(this.scaleEndDisvisibleDelay > 0)
		{this.scaleEndDisvisibleDelay--;}
		else
		{
			this.scaleEndDisvisibleDelay = 0;
			this.scaleEndDisvisible = false;
			this.visible = false;
		}
	}		
}

Sprite_ZzyGCFBase.prototype.updateMoveEndCallFunction = function()
{

	if(!!this.moveEndCallFunction)
	{		
		if(this.moveEndCallFunctionDelay > 0)
		{this.moveEndCallFunctionDelay--;}
		else
		{
			this.moveEndCallFunctionDelay = 0;
			this.moveEndCallFunction(this.moveEndCallFunctionParam);//呼叫回撥語法
			this.moveEndCallFunction = undefined;
			this.moveEndCallFunctionParam = undefined;

		}
	}
}

Sprite_ZzyGCFBase.prototype.updateScaleEndCallFunction = function()
{
	if(!!this.scaleEndCallFunction)
	{
		if(this.scaleEndCallFunctionDelay > 0)
		{this.scaleEndCallFunctionDelay--;}
		else
		{
			this.scaleEndCallFunctionDelay = 0;
			this.scaleEndCallFunction(this.scaleEndCallFunctionParam);//呼叫回撥語法
			this.scaleEndCallFunction = undefined;
			this.scaleEndCallFunctionParam = undefined;
		}
	}
}

Sprite_ZzyGCFBase.prototype.updateOpacityEndCallFunction = function()
{
	if(!!this.opacityEndCallFunction)
	{
		if(this.opacityEndCallFunctionDelay > 0)
		{this.opacityEndCallFunctionDelay--;}
		else
		{
			this.opacityEndCallFunctionDelay = 0;
			this.opacityEndCallFunction(this.opacityEndCallFunctionParam);//呼叫回撥語法
			this.opacityEndCallFunction = undefined;
			this.opacityEndCallFunctionParam = undefined;
		}
	}
}

Sprite_ZzyGCFBase.prototype.updateRotateEndCallFunction = function()
{
	if(!!this.rotateEndCallFunction)
	{
		if(this.rotateEndCallFunctionDelay > 0)
		{this.rotateEndCallFunctionDelay--;}
		else
		{
			this.rotateEndCallFunctionDelay = 0;
			this.rotateEndCallFunction(this.rotateEndCallFunctionParam);//呼叫回撥語法
			this.rotateEndCallFunction = undefined;
			this.rotateEndCallFunctionParam = undefined;
		}
	}
}



Sprite_ZzyGCFBase.prototype.updateMoving = function()
{
	if(!this.moving)
	{
		this.updateMoveEndCallFunction();
		this.updateMoveEndDisvisible();
		return;
	}
	
	switch(this.moveMode)
	{
		case 1://速度
	    this.x += this.moveSpeed * Math.cos(this.moveDegree);
        this.y += this.moveSpeed * Math.sin(this.moveDegree);
		if(this.x >= this.endX - (this.moveSpeed) && this.x <= this.endX + (this.moveSpeed) && this.y >= this.endY - (this.moveSpeed) && this.y <= this.endY + (this.moveSpeed))
		{
			this.x = this.endX;
			this.y = this.endY;
			this.moving = false;
		}
		
		break;
		
		case 2://時間
		this.moveCTime++;
		this.x = Math.floor(this.startToEndOfTime(this.startX,this.endX,this.moveTime,this.moveCTime));
		this.y = Math.floor(this.startToEndOfTime(this.startY,this.endY,this.moveTime,this.moveCTime));
		if(this.IsMoveDestination()){this.moving = false;}//到達
		break;
		
		case 3://百分比
		this.x = this.startToEndOfPer(this.x,this.endX,this.movePer,1);
		this.y = this.startToEndOfPer(this.y,this.endY,this.movePer,1); 
		if(this.IsMoveDestination()){this.moving = false;}//到達
		break;
	}
}


Sprite_ZzyGCFBase.prototype.updateScaling = function()
{
	if(!this.scaling)
	{
		this.updateScaleEndDisvisible();
		this.updateScaleEndCallFunction();
		return;
	}

	switch(this.scaleMode)
	{
		case 1://速度
	    this.tempScaleX += this.scaleSpeed * Math.cos(this.scaleDegree);
        this.tempScaleY += this.scaleSpeed * Math.sin(this.scaleDegree);
		if(this.tempScaleX >= this.endScaleX - this.scaleSpeed && 
		this.tempScaleX <= this.endScaleX + this.scaleSpeed && 
		this.tempScaleY >= this.endScaleY - this.scaleSpeed &&
		this.tempScaleY <= this.endScaleY + this.scaleSpeed)
		{
			this.scale.x = this.endScaleX * this.scaleZoomX;
			this.scale.y = this.endScaleY * this.scaleZoomY;
			this.scaling = false;
		}
		else
		{
			this.scale.x = this.tempScaleX * this.scaleZoomX;
			this.scale.y = this.tempScaleY * this.scaleZoomY;			
		}

		break;
		
		case 2://時間
		this.scaleCTime++;
		this.tempScaleX = this.startToEndOfTime(this.startScaleX,this.endScaleX,this.scaleTime,this.scaleCTime);
		this.tempScaleY = this.startToEndOfTime(this.startScaleY,this.endScaleY,this.scaleTime,this.scaleCTime);
		if(this.IsScaleDestination())
		{
			this.scaling = false;
			this.scale.x = this.endScaleX * this.scaleZoomX;
			this.scale.y = this.endScaleY * this.scaleZoomY;				
		}
		else
		{
			this.scale.x = this.tempScaleX * this.scaleZoomX;
			this.scale.y = this.tempScaleY * this.scaleZoomY;				
		}
	
		break;
		
		case 3://百分比
		this.tempScaleX = this.startToEndOfPer(this.tempScaleX,this.endScaleX,this.scalePer,0.01);
		this.tempScaleY = this.startToEndOfPer(this.tempScaleY,this.endScaleY,this.scalePer,0.01);
		if(this.IsScaleDestination())
		{
			this.scaling = false;
			this.scale.x = this.endScaleX * this.scaleZoomX;
			this.scale.y = this.endScaleY * this.scaleZoomY;			
		}
		else
		{
			this.scale.x = this.tempScaleX * this.scaleZoomX;
			this.scale.y = this.tempScaleY * this.scaleZoomY;			
		}
		break;
	}
}

Sprite_ZzyGCFBase.prototype.updateOpaciting = function()
{
	if(!this.opaciting)
	{
		this.updateOpacityEndCallFunction();
		this.updateOpacityEndDisvisible();
		return;
	}
	
	
	switch(this.opMode)
	{
		case 1://速度
		this.opacity = this.startToEndOfSpeed(this.opacity,this.endOp,this.opSpeed);
		if(this.IsOpacityDestination()){this.opaciting = false;}
		break;
		
		case 2://時間
		this.opCTime++;
		this.opacity = this.startToEndOfTime(this.startOp,this.endOp,this.opTime,this.opCTime);
		if(this.IsOpacityDestination()){this.opaciting = false;}
		break;
		
		case 3://百分比
		this.opacity = this.startToEndOfPer(this.opacity,this.endOp,this.opPer,0.1);
		if(this.IsOpacityDestination()){this.opaciting = false;}
		break;
	}	
	
}

Sprite_ZzyGCFBase.prototype.updateRotating = function()
{
	if(!this.rotating)
	{
		this.updateRotateEndCallFunction();
		this.updateRotateEndDisvisible();
		return;
	}
	
	switch(this.rotateMode)
	{
		case 1://速度
		this.rotation = this.startToEndOfSpeed(this.rotation,this.realEndRotate,this.rotateSpeed);
		if(this.IsRotateDestination())//到達
		{
			this.rotation = Zzy.GCF.LimitRotateRange(this.rotation);
			this.rotating = false;
		}
		break;
		
		case 2://時間
		this.rotateCTime++;
		this.rotation = this.startToEndOfTime(this.startRotate,this.realEndRotate,this.rotateTime,this.rotateCTime);
		if(this.IsRotateDestination())
		{
			this.rotation = Zzy.GCF.LimitRotateRange(this.rotation);
			this.rotating = false;
		}
		break;
		
		case 3://百分比
		this.rotation = this.startToEndOfPer(this.rotation,this.realEndRotate,this.rotatePer,0.01);
		if(this.IsRotateDestination())
		{
			this.rotation = Zzy.GCF.LimitRotateRange(this.rotation);
			this.rotating = false;			
		}
		break;
	}
}


Sprite_ZzyGCFBase.prototype.startToEndOfPer = function(start,end,per,min)//開始到結束的比例
{
	if(start === end)return end;
	if((Math.abs(end - start)) < min)return end;
	
	var distance = (end-start)*per*0.01;
	return distance + start;
}

Sprite_ZzyGCFBase.prototype.startToEndOfSpeed = function(start,end,speed)
{
	if(start === end)return end;
	if(start < end)
	{
		var distance = start + speed;
		return (distance > end ? end : distance);
	}
	else
	{
		var distance = start - speed;
		return (distance < end ? end : distance);
	}
}

Sprite_ZzyGCFBase.prototype.startToEndOfTime = function(start,end,time,ctime)
{
	if(start === end)return end;
	
	var distance = (end - start) * ctime / time;
	return start + distance;
}

//這個方法會設定操作比例,他會改變圖片應該有的比例大小,在更新縮放是也會應用
Sprite_ZzyGCFBase.prototype.setScaleZoom = function(scaleX,scaleY)
{
	this.scaleZoomX = scaleX;
	this.scaleZoomY = scaleY;
	
	this.scale.x *= this.scaleZoomX;
	this.scale.y *= this.scaleZoomY;
}

Sprite_ZzyGCFBase.prototype.setScale = function(scaleX,scaleY)
{
	this.scale.x = scaleX;
	this.scale.y = scaleY;
	this.scale.x *= this.scaleZoomX;
	this.scale.y *= this.scaleZoomY;
}




Sprite_ZzyGCFBase.prototype.updateFrame = function()
{
	if(!this.bitmap)return;
	this.frameWidth = this.bitmap.width * this.scale.x;
	this.frameHeight = this.bitmap.height * this.scale.y;
	
	this.frameL = Math.round(this.x - this.frameWidth / 2);
	this.frameR = this.frameL + this.frameWidth;
	this.frameU = Math.round(this.y - this.frameHeight / 2);
	this.frameD = this.frameU + this.frameHeight;
}


Sprite_ZzyGCFBase.prototype.updateSelect = function()//基礎選擇為點選切換,點中會被選取,再次點選會反向
{
	if(TouchInput.isTriggered())//按下選擇
	{
		var pt = {x:TouchInput.x,y:TouchInput.y};
		var rect = {left:this.frameL,right:this.frameR,up:this.frameU,down:this.frameD};
		if(Zzy.GCF.PtInRect(pt,rect))
		{
			this.ExecuteSelect();//執行選擇
		}
	}
}


Sprite_ZzyGCFBase.prototype.updateCollision = function()//碰撞
{
	//檢測碰撞
	//this.collisionObjArr = [];//碰撞對像檢測組
	if(!this.visible)return;//隱身則不碰撞
	for(var i=0;i<this.collisionObjArr.length;i++)
	{
		
		if(!this.collisionObjArr[i])continue;//不存在對像
		if(!this.collisionObjArr[i].obj.visible)continue;//對像未顯示
		if(!this.collisionObjArr[i].obj.isCanCollision)continue;//對像不可以碰撞
		// var r1 = {left:this.frameL,right:this.frameR,up:this.frameU,down:this.frameD};
		// var r2 = {left:this.collisionObjArr[i].obj.frameL,
			      // right:this.collisionObjArr[i].obj.frameR,
				  // up:this.collisionObjArr[i].obj.frameU,
				  // down:this.collisionObjArr[i].obj.frameD};
		// if(Zzy.GCF.CheckRectCollision(r1,r2))
		// {
			// //碰撞檢測效果
			// 
		// }
		//OBB碰撞檢測
		if(this.JudgOBBCollision(this.collisionObjArr[i].obj))
		{
			//觸碰到,檢測是否為第一次觸碰
			if(this.collisionObjArr[i].onCo)
			{
				this.collisionObjArr[i].onCo = false;//首次碰撞
				this.collisionObjArr[i].inCo = true;//連續碰撞開啟
				this.OnCollision(this.collisionObjArr[i].obj);//碰撞到了對像
			}
			else if(this.collisionObjArr[i].inCo)//持續碰撞
			{
				this.InCollision(this.collisionObjArr[i].obj);//碰撞到了對像
			}
		}
		else
		{
			if(this.collisionObjArr[i].inCo)//離開碰撞判斷
			{
				this.collisionObjArr[i].onCo = true;
				this.collisionObjArr[i].inCo = false;
				this.collisionObjArr[i].outCo = true;
				
				if(this.collisionObjArr[i].outCo)
				{
					this.collisionObjArr[i].outCo = false;
					this.OutCollision(this.collisionObjArr[i].obj);//碰撞到了對像
				}
			}
		}
	}
	
	
	//this.collisionObjsArr = [];//對像組合組
	for(var i=0;i<this.collisionObjsArr.length;i++)
	{
		if(!this.collisionObjsArr[i])continue;
		for(var j=0;j<this.collisionObjsArr[i].length;j++)
		{
			//對像組對像
			if(!this.collisionObjsArr[i][j])continue;//不存在對像
			if(!this.collisionObjsArr[i][j].visible)continue;//對像未顯示
			if(!this.collisionObjsArr[i][j].isCanCollision)continue;//對像不可以碰撞	
			if(this.JudgOBBCollision(this.collisionObjsArr[i][j]))
			{
				this.InCollision(this.collisionObjArr[i][j]);//碰撞到了對像
			}
		}
	}
}




Sprite_ZzyGCFBase.prototype.OnCollision = function(obj)//首次碰撞介面
{
	
}

Sprite_ZzyGCFBase.prototype.InCollision = function(obj)//持續碰撞介面
{
	
}

Sprite_ZzyGCFBase.prototype.OutCollision = function(obj)//離開碰撞介面
{
	
}





Sprite_ZzyGCFBase.prototype.Dot = function(axisA,axisB)//向量在這個單位向量上的投影長度
{ 
     //注意axisA和axisB是向量,存放數據是座標系 [x,y] 是axisA向量在，單位向量axisB上投影的長度。
     return Math.abs(axisA[0] * axisB[0] + axisA[1] * axisB[1]); 
}


//根據垂直公式:向量1 · 向量2 = 0
//獲取一個矩形的兩條檢測軸的單位向量

Sprite_ZzyGCFBase.prototype.GetAxisX = function(rotation)//獲取x檢測軸的單位向量
{
	var GetAxisX = [];
	GetAxisX[0] = Math.cos(rotation);
	GetAxisX[1] = Math.sin(rotation);
	return GetAxisX;
}

Sprite_ZzyGCFBase.prototype.GetAxisY = function(rotation)//獲取y檢測軸的單位向量
{
	var GetAxisY = [];
	GetAxisY[0] = -Math.sin(rotation);
	GetAxisY[1] = Math.cos(rotation);
	
	return GetAxisY;
}


Sprite_ZzyGCFBase.prototype.GetProjectionRadius = function(axis) 
{  
	//獲取兩條檢測軸的單位向量
    var axisX = this.GetAxisX(this.rotation);
	var axisY = this.GetAxisY(this.rotation);
   
    //獲取軸半徑
    var halfWidth = this.bitmap.width/2;
    var halfHeight = this.bitmap.height/2;
   
    //根據投影獲取比例長度
    var projectionAxisX = this.Dot(axis, axisX);  
    var projectionAxisY = this.Dot(axis, axisY);  

   
    //返回實際軸半徑長度
	
    return halfWidth * projectionAxisX + halfHeight * projectionAxisY;  

}


//檢測四個軸的碰撞情況
Sprite_ZzyGCFBase.prototype.JudgOBBCollision = function(obbObj) 
{  
	//中心點距離向量
    var centerDistanceVertor = [];//{x,y};
	centerDistanceVertor[0] = this.GetBitmapCenterX() - obbObj.GetBitmapCenterX();
	centerDistanceVertor[1] = this.GetBitmapCenterY() - obbObj.GetBitmapCenterY();
	
    var axes = [];//四個軸的軸心
    axes[0] = this.GetAxisX(this.rotation);
	axes[1] = this.GetAxisY(this.rotation);
	axes[2] = obbObj.GetAxisX(obbObj.rotation);
	axes[3] = obbObj.GetAxisY(obbObj.rotation);
	
	
	
   
    //判斷四個軸向的碰撞情況
    for(var i = 0; i < axes.length; i++) 
	{  

        if(this.GetProjectionRadius(axes[i]) + obbObj.GetProjectionRadius(axes[i])   
                <= this.Dot(centerDistanceVertor, axes[i]))
		{
		    
            return false;  
        }  
    }  
   //如果投影長度小於等於半徑投影,代表相撞了
    return true;  
}  




//因為anchor的值不同,使得需要對位置進行轉換
Sprite_ZzyGCFBase.prototype.GetBitmapCenterX = function()//獲取中心點
{
	return this.x + (this.bitmap.width * (0.5 - this.anchor.x) * Math.sin(this.rotation));
}

Sprite_ZzyGCFBase.prototype.GetBitmapCenterY = function()
{
	return this.y + (this.bitmap.height * (0.5 - this.anchor.y) * Math.cos(this.rotation));
}



Sprite_ZzyGCFBase.prototype.updateButton = function()//按鈕按下的訊息效果
{
	//檢測滑鼠是否在Button中
	var pt = {x:Zzy.GCF.MoveX,y:Zzy.GCF.MoveY};
	
	var rect = {left:this.frameL,right:this.frameR,up:this.frameU,down:this.frameD};	
	
	var pressOk = false;//是否點鐘了按鈕
	if(Zzy.GCF.PtInRect(pt,rect))
	{
		if(TouchInput.isTriggered())
		{
			this.ExecuteButton(1);//滑鼠按下
		}
		if(TouchInput.isReleased())//在範圍內點中了按鈕
		{
			pressOk = true;
			this.ExecuteButton(4);
		}		
		else
		{
			this.ExecuteButton(2);
		}
	}
	else
	{
		this.ExecuteButton(3);
	}
	
	if(!pressOk && TouchInput.isReleased())
	{
		this.ExecuteButton(5);
	}
	
	
		
}

Sprite_ZzyGCFBase.prototype.ExecuteButton = function(code)
{
	switch(code)
	{
		case 1://代表在範圍內按下了滑鼠
			if(!this.isPressButton)
			{
				this.isPressButton = true;
				this.bitmap = this.buttonDownBitmap;
			}
		break;
		case 2://代表在矩形範圍內,但沒有點選
			if(!this.isInButton)
			{
				this.isInButton = true;
				this.bitmap = this.buttonInScopeBitmap;
			}
		break;
		case 3:
			if(this.isInButton && !this.isPressButton)
			{
				this.isInButton = false;
				this.bitmap = this.originBitmap;
			}		
		break;
		case 4://這裡是點中了按鈕
			this.isInButton = false;
			this.isPressButton = false;		
			this.OnClick();
			this.bitmap = this.buttonInScopeBitmap;
		break;
		case 5://這裡是沒有點中按鈕
			this.isInButton = false;
			this.isPressButton = false;
			this.bitmap = this.originBitmap;			
		break;
	}
	
}

Sprite_ZzyGCFBase.prototype.ExecuteSelect = function()//執行選擇
{
	if(this.selecting)//切換圖片,相應事件
	{
		this.selecting = false;
		this.bitmap = this.originBitmap;
		this.OutSelect();
	}
	else
	{
		this.selecting = true;
		this.bitmap = this.selectBitmap;		
		this.OnSelect();
	}
}

Sprite_ZzyGCFBase.prototype.isInDelaying = function()
{
	return this.isDelaying;
}

Sprite_ZzyGCFBase.prototype.setDelay = function(delay)
{
	this.delayTime = delay;//延遲時間
	this.isDelaying = true;
}

Sprite_ZzyGCFBase.prototype.addDelay = function(delay)
{
	this.delayTime += delay;//延遲時間
	this.isDelaying = true;
}
Sprite_ZzyGCFBase.prototype.subDelay = function(delay)
{
	this.delayTime -= delay;//延遲時間
	if(this.delayTime < 0)this.delayTime = 0;
}


Sprite_ZzyGCFBase.prototype.setBitmap = function(bitmap)
{
	this.bitmap = bitmap;
	this.originBitmap = bitmap;
}




Sprite_ZzyGCFBase.prototype.OnSelect = function()//被選中,用於子類的呼叫
{
	
}

Sprite_ZzyGCFBase.prototype.OutSelect = function()//被取消選擇,用於子類的呼叫
{
	
}

Sprite_ZzyGCFBase.prototype.OnClick = function()//按鈕被點,用於子類的呼叫
{
	
}


Sprite_ZzyGCFBase.prototype.IsMoveDestination = function()//移動是否到達目的地
{
	return (this.x === this.endX && this.y === this.endY);
}

Sprite_ZzyGCFBase.prototype.IsOpacityDestination = function()//透明倒達目的地
{
	return (this.opacity === this.endOp);
}

Sprite_ZzyGCFBase.prototype.IsScaleDestination = function()
{
	return (this.tempScaleX === this.endScaleX && this.tempScaleY === this.endScaleY);
}

Sprite_ZzyGCFBase.prototype.IsRotateDestination = function()//完成
{
	return (this.rotation === this.realEndRotate);
}



//是否處於繁忙中
Sprite_ZzyGCFBase.prototype.isBusy = function()
{
	if(this.moving || this.scaling || this.opaciting || this.rotating){return true;}
	return false;
}

//是否需要更新選擇框
Sprite_ZzyGCFBase.prototype.isNeedUpdateFrame = function()
{
	if(this.isCanSelect || this.isCanCollision || this.isCanButton)return true;
	return false;
}


Sprite_ZzyGCFBase.prototype.setAngle = function(angle)//設定旋轉的角度
{
	angle = angle ? angle : 0;
	this.rotation = angle * Math.PI / 180;
}

Sprite_ZzyGCFBase.prototype.setPosition = function(x,y)
{
	this.x = x;
	this.y = y;
}









//==========================================================================
//Particle_ZzyGCFBase
//==========================================================================
//粒子對像


function Particle_ZzyGCFBase() {
    this.initialize.apply(this, arguments);
}

Particle_ZzyGCFBase.prototype = Object.create(PIXI.Container.prototype);
Particle_ZzyGCFBase.prototype.constructor = Particle_ZzyGCFBase;

Particle_ZzyGCFBase.prototype.initialize = function(windowPointer,fileName)//指針,粒子圖片名稱
{
    PIXI.Container.call(this);

	this.windowPointer = windowPointer;//獲得視窗指針
	
	this.spriteArr = [];//存放粒子的陣列



	
	//-------------------創造器資訊---------------------
	this.CID = 0;//產生粒子對像時的ID標記,這算是數量記錄
	this.UID = 0;//產生粒子對象的唯一ID標記
	this.createrType = this.defaultCreaterType();//創造器型別
	this.createrRange = this.defaultCreaterRange();//創造器範圍,預設是一個點	
	this.createrFrame = this.defaultCreaterFrame();//創造器每次產生所需幀數
	this.createrCount = this.defaultCreaterCount();//創造器每次產生的數量
	this.createrFrameRandPer = this.defaultCreaterFrameRandPer();//產生幀數擾亂
	this.createrCountRandPer = this.defaultCreaterCountRandPer();//數量擾亂
	this.createrOffsetX = this.defaultCreaterOffsetX();//預設偏移位置,錨點
	this.createrOffsetY = this.defaultCreaterOffsetY();//預設偏移位置
	this.createrIsDynHue = this.defaultCreaterIsDynHue();//預設動態偏色
	this.createrDynHueSpeed = this.defaultCreaterDynHueSpeed();//預設動態變色
	
	this.isPause = false;//是否暫停
	this.tFrame = 0;//臨時值
	this.tCount = 0;//臨時確認數量
	
	
	
	//----------------粒子基本資訊---------------
	//速度
	this.partSpeed = 0;//移動速度
	this.partSpeedRandPer = 0;//移動速度擾亂
	//角度:移動
	this.partRotateDir = 0;//角度方向
	this.partRotateArea = 0;//角度區間
	//角度:圖片精靈
	this.partSprRotateDir = 0;
	this.partSprRotateArea = 0;//角度區間
	this.partIsfollowDir = false;//是否跟隨移動角度
	//縮放
	this.partScaleX = 0;
	this.partScaleY = 0;
	this.partScalePer = 0;
	this.partIsEqualScale = false;//是否等比縮放
	//透明
	this.partOpacity = 0;
	this.partOpacityRandPer = 0;//透明值擾亂
	//-----------------------------------------
	

	
	this.bitmapFileName = fileName;
	this.partBitmap = undefined;
	this.CreateBitmap();//粒子圖片
	
	
	this.StartUp();//啟動
}


Particle_ZzyGCFBase.prototype.setPartSpriteInfo = function()//設定資訊,這個函式可以用來重寫
{
	this.partSpeed = 5;//移動速度
	this.partSpeedRandPer = 20;//移動速度擾亂
	//角度:移動
	this.partRotateDir = 0;//角度方向
	this.partRotateArea = 360;//角度區間
	//角度:圖片精靈
	this.partSprRotateDir = 0;
	this.partSprRotateArea = 360;//角度區間
	this.partIsfollowDir = true;//是否跟隨移動角度
	//縮放
	this.partScaleX = 1;
	this.partScaleY = 1;
	this.partScaleRandPer = 20;
	this.partIsEqualScale = true;//是否等比縮放
	//透明
	this.partOpacity = 255;
	this.partOpacityRandPer = 0;//透明值擾亂
	//時長-幀數
	this.partTime = 60;
	this.partTimeRandPer = 0;//時長擾亂
}




Particle_ZzyGCFBase.prototype.CreateBitmap = function()
{
	this.partBitmap = ImageManager.loadPicture(this.bitmapFileName);
}



Particle_ZzyGCFBase.prototype.StartUp = function()//啟動
{
	//計算t資訊
	this.setPartSpriteInfo();//設定粒子的參數資訊
	this.CreaterNextWait();
}


Particle_ZzyGCFBase.prototype.calculationTFrame = function()//計算出幀數擾亂
{
	this.tFrame = Zzy.GCF.RandomIntTheValueOfPer(this.createrFrame,this.createrFrameRandPer);
	this.tFrame = Math.max(1,this.tFrame);
}


Particle_ZzyGCFBase.prototype.calculationTCount = function()//計算數量資訊
{
	this.tCount = Zzy.GCF.RandomIntTheValueOfPer(this.createrCount,this.createrCountRandPer);
}


Particle_ZzyGCFBase.prototype.setPause = function(pause)
{
	this.isPause = pause;
}

Particle_ZzyGCFBase.prototype.setStop = function()
{
	this.isPause = true;
}

Particle_ZzyGCFBase.prototype.setContinue = function()
{
	this.isPause = false;
}


Particle_ZzyGCFBase.prototype.update = function() 
{
    if(this.NotUpdate())return;
	
	this.updateCreaterDynHue();//更新動態色相
	this.updateCreaterSpawn();//更新創造器
};





Particle_ZzyGCFBase.prototype.updateCreaterDynHue = function()
{
	if(!this.createrIsDynHue)return;
	this.partBitmap.rotateHue(this.createrDynHueSpeed);
	
}


Particle_ZzyGCFBase.prototype.updateCreaterSpawn = function()
{
	if(this.tFrame > 0)//滿足產生對像條件
	{this.tFrame--;}
	else
	{
		this.tFrame = 0;
		//通過數量遍歷產生對像
		for(var i=0;i<this.tCount;i++)
		{
			var pSpr = this.RequestSprite();//獲得一個精靈對像
			pSpr.bitmap = this.partBitmap;//設定點陣圖
			this.MakeRandomInfo(pSpr);//產生隨機性
			this.MakeSpecialInfo(pSpr);//設定特殊數據資訊
			pSpr.StartUp();//啟動
		}
		
		this.CreaterNextWait();//計算下一次所需要的資訊
	}
}

Particle_ZzyGCFBase.prototype.CreaterNextWait = function()
{
	this.calculationTFrame();
	this.calculationTCount();	
}




Particle_ZzyGCFBase.prototype.MakeRandomInfo = function(Spr)
{
	
	this.MakeRandomPos(Spr);//首先修改位置
	this.MakeRandomSpeed(Spr);//修改速度
	this.MakeRandomRotate(Spr);//角度
	this.MakeRandomSprRotate(Spr);//影象角度
	this.MakeRandomScale(Spr);//修改縮放
	this.MakeRandomOpacity(Spr);//修改透明度
	this.MakeRandomTime(Spr);//隨機時長
}

Particle_ZzyGCFBase.prototype.MakeSpecialInfo = function(pSpr)
{

}





Particle_ZzyGCFBase.prototype.MakeRandomRotate = function(Spr)//角度
{

	var angle = Zzy.GCF.RandomTheValueOfRange(this.partRotateDir,this.partRotateArea);
	Spr.startRotate = Zzy.GCF.AngleToRadian(angle);

}

Particle_ZzyGCFBase.prototype.MakeRandomSprRotate = function(Spr)//影象角度
{
	var angle = Zzy.GCF.RandomTheValueOfRange(this.partSprRotateDir,this.partSprRotateArea);
	Spr.startSprRotate = Zzy.GCF.AngleToRadian(angle);
	Spr.partIsfollowDir = this.partIsfollowDir;
}

Particle_ZzyGCFBase.prototype.MakeRandomOpacity = function(Spr)//修改隨機縮放
{
	Spr.startOpactiy = Zzy.GCF.RandomTheValueOfPer(this.partOpacity,this.partOpacityRandPer);
}

Particle_ZzyGCFBase.prototype.MakeRandomTime = function(Spr)//隨機時長
{
	Spr.startTime = Zzy.GCF.RandomTheValueOfPer(this.partTime,this.partTimeRandPer);
}




Particle_ZzyGCFBase.prototype.MakeRandomScale = function(Spr)//修改隨機縮放
{	
	Spr.startScaleX	= Zzy.GCF.RandomTheValueOfPer(this.partScaleX,this.partScaleRandPer);
	if(this.partIsEqualScale)
	{
		Spr.startScaleY = Spr.startScaleX * (this.partScaleY / this.partScaleX);
	}
	else
	{
		Spr.startScaleY = Zzy.GCF.RandomTheValueOfPer(this.partScaleX,this.partScaleRandPer);
	}
}

Particle_ZzyGCFBase.prototype.MakeRandomSpeed = function(Spr)//修改隨機速度
{
	Spr.startSpeed = Zzy.GCF.RandomTheValueOfPer(this.partSpeed,this.partSpeedRandPer);
}





Particle_ZzyGCFBase.prototype.MakeRandomPos = function(Spr)//製作隨機位置
{

	switch(this.createrType)
	{
		case 1://代表矩形範圍
			Spr.x = Zzy.GCF.RandomIntArea(this.createrRange.left,this.createrRange.right)+this.createrOffsetX;
			Spr.y = Zzy.GCF.RandomIntArea(this.createrRange.up,this.createrRange.down)+this.createrOffsetY;
		break;
		
		case 2://代表橢圓形範圍
			var rateY = (this.createrRange.down-this.createrRange.up)/(this.createrRange.right-this.createrRange.left);
			
			//獲取半徑
			var radius = (this.createrRange.right-this.createrRange.left)/2;
			var randomR = Math.random()*radius;
			//獲取角度
			var angle = Math.random() * Math.PI * 2;
			
			Spr.x = Math.round(Math.sin(angle)*randomR)+this.createrOffsetX;
			Spr.y = Math.round(Math.cos(angle)*randomR*rateY)+this.createrOffsetY;
		break;
	}
}




Particle_ZzyGCFBase.prototype.NotUpdate = function()
{
	if(this.isPause)return true;//是否被暫停
	
	return false;
}


Particle_ZzyGCFBase.prototype.RequestSprite = function()//申請精靈對像
{
	//遍歷
	for(var i=0;i<this.spriteArr.length;i++)
	{
		if(this.spriteArr[i] && !this.spriteArr[i].visible)
		{
			this.spriteArr[i].visible = true;
			this.spriteArr[i].ResetInfo();//重置資訊
			
			this.spriteArr[i].CID = this.CID++;
			return this.spriteArr[i];
		}
	}
	//否則需要申請對像
	
	var spr = this.CreateAParticleSpr();
	this.spriteArr.push(spr);
	this.windowPointer.addChild(spr);//新增到視窗中
		
	spr.UID = this.UID++;
	spr.CID = this.CID++;
	return spr;
}


Particle_ZzyGCFBase.prototype.CreateAParticleSpr = function()//這個方法可以用重寫創造其他粒子類的效果
{
	return new PSprite_ZzyGCFBase(this);
}


Particle_ZzyGCFBase.prototype.RandomSprInfo = function(spr)//隨機粒子的資訊
{
	
	
}


Particle_ZzyGCFBase.prototype.createASprite = function()//創造一個精靈
{
	var spr = this.RequestSprite();//獲取一個精靈對像
	this.RandomSprInfo(spr);//隨機spr的資訊
}


Particle_ZzyGCFBase.prototype.defaultCreaterFrame = function()
{
	return 6;//6幀會響應粒子產生情況
}

Particle_ZzyGCFBase.prototype.defaultCreaterCount = function()
{
	return 2;//每次產生粒子的數量
}

Particle_ZzyGCFBase.prototype.defaultCreaterFrameRandPer = function()//產生幀數擾亂
{//請輸入範圍0~100,代表擾亂的百分比情況
	return 0;
}

Particle_ZzyGCFBase.prototype.defaultCreaterCountRandPer = function()//數量擾亂
{
	return 0;
}

Particle_ZzyGCFBase.prototype.defaultCreaterOffsetX = function()//預設偏移位置,錨點
{
	return Math.round(Graphics.boxWidth/2);
}

Particle_ZzyGCFBase.prototype.defaultCreaterOffsetY = function()//預設偏移位置
{
	return Math.round(Graphics.boxHeight/2);
}


Particle_ZzyGCFBase.prototype.defaultCreaterType = function()
{
	//型別1:矩形 型別2:圓形
	return 1;
}

Particle_ZzyGCFBase.prototype.defaultCreaterRange = function()
{
	var bw = 0;
	var bh = 0;
	var tRect = 
	{
		left:bw,right:bw,up:bh,down:bh
	};
	return tRect;
}

Particle_ZzyGCFBase.prototype.defaultCreaterIsDynHue = function()//預設動態偏色
{
	return true;
}

Particle_ZzyGCFBase.prototype.defaultCreaterDynHueSpeed = function()//預設動態變色
{
	return 3;
}



Particle_ZzyGCFBase.prototype.setCreaterIsDynHue = function(isEnable)//動態偏色
{
	this.createrIsDynHue = isEnable;
}

Particle_ZzyGCFBase.prototype.setCreaterDynHueSpeed = function(speed)//動態變色,每幀色相變化速度
{
	this.createrDynHueSpeed = speed;
}


Particle_ZzyGCFBase.prototype.setCreaterFrame = function(frame)
{
	this.createrFrame = frame;
}

Particle_ZzyGCFBase.prototype.setCreaterCount = function(count)
{
	this.createrCount = count;
}

Particle_ZzyGCFBase.prototype.setCreaterFrameRandPer = function(per)//產生幀數擾亂
{//請輸入範圍0~100,代表擾亂的百分比情況
	this.createrFrameRandPer = per;
}

Particle_ZzyGCFBase.prototype.setCreaterCountRandPer = function(per)//數量擾亂
{
	this.createrCountRandPer = per;
}




Particle_ZzyGCFBase.prototype.setCreaterOffsetPos = function(x,y)
{
	this.createrOffsetX = x;
	this.createrOffsetY = y;
}

Particle_ZzyGCFBase.prototype.setCreaterX = function(x)
{
	this.createrOffsetX = x;
}

Particle_ZzyGCFBase.prototype.setCreaterY = function(y)
{
	this.createrOffsetY = y;
}
Particle_ZzyGCFBase.prototype.setCreaterPos = function(x,y)
{
	this.createrOffsetX = x;
	this.createrOffsetY = y;
}




Particle_ZzyGCFBase.prototype.setCreaterType = function(type)
{
	switch(type)
	{	
		case 1:case 'Rect':
		this.createrType = 1;
		break;
		
		case 2:case 'Circle':
		this.createrType = 2;
		break;		
	}

}


Particle_ZzyGCFBase.prototype.setCreaterRange = function(left,right,up,down)
{
	this.createrRange.left = left;
	this.createrRange.right = right;
	this.createrRange.up = up;
	this.createrRange.down = down;
}



//===========================================================================
//粒子對像PSprite_ZzyGCFBase

function PSprite_ZzyGCFBase() 
{
    this.initialize.apply(this, arguments);
}


PSprite_ZzyGCFBase.prototype = Object.create(Sprite.prototype);
PSprite_ZzyGCFBase.prototype.constructor = PSprite_ZzyGCFBase;

PSprite_ZzyGCFBase.prototype.initialize = function(creater) 
{
	Sprite.prototype.initialize.call(this);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	
	this.CID = 0;//產生的編號
	this.UID = 0;//唯一性編號
	this.creater = creater;//獲取創造器

	this.startSpeed = 0;
	this.startOpactiy = 0;
	this.startRotate = 0;
	this.startSprRotate = 0;
	this.startScaleX = 0;
	this.startScaleY = 0;
	this.startTime = 0;//消失時長
	this.partIsfollowDir = false;//圖片方向是否跟隨角度
	this.executing = false;//是否執行中
	
	this.destroyTime = 0;//消失時間
	this.CdestroyTime = 0;//計數
	this.temp1 = 0;//臨時數據
	this.temp2 = 0;
	this.temp3 = 0;
	this.temp4 = 0;
	this.temp5 = 0;
}

PSprite_ZzyGCFBase.prototype.ResetInfo = function()//重置
{
	
	this.destroyTime = 0;//消失時間
	this.CdestroyTime = 0;//計數
	
	
	this.temp1 = 0;//臨時數據
	this.temp2 = 0;
	this.temp3 = 0;
	this.temp4 = 0;
	this.temp5 = 0;
}


PSprite_ZzyGCFBase.prototype.defaultDestroyTime = function()
{
	return Math.round(this.startTime * (1-(this.startSpeed)/(5+this.startSpeed)));
}



PSprite_ZzyGCFBase.prototype.StartUp = function()//啟動
{
	this.executing = true;
	this.rotation = this.startSprRotate;
	this.opacity = this.startOpactiy;
	this.scale.x = this.startScaleX;
	this.scale.y = this.startScaleY;
	
	this.destroyTime = this.defaultDestroyTime();
	this.CdestroyTime = this.destroyTime;
	this.MakeTempInfo();//製作臨時數據
	
}


PSprite_ZzyGCFBase.prototype.MakeTempInfo = function()
{
	//temp1代表透明度開始的幀數
	this.temp1 = Math.floor(this.destroyTime * 0.5);
}


PSprite_ZzyGCFBase.prototype.update = function()
{
	if(!this.executing || !this.visible)return false;

	this.updateMove();//更新移動
	this.updateOpacity();//更新透明度
	this.updateSprRotate();//更新角度
	this.updateScale();//更新大小變化
	this.updateCustom();//更新設計效果
	
	this.updateDestroy();//更新消失規則
	return true;
}

PSprite_ZzyGCFBase.prototype.updateCustom = function()
{

}

PSprite_ZzyGCFBase.prototype.updateScale = function()
{
	
}


PSprite_ZzyGCFBase.prototype.updateSprRotate = function()
{
	if(this.partIsfollowDir)
	{
		this.rotation = this.startRotate;//跟隨角度
	}
	
	
}


PSprite_ZzyGCFBase.prototype.updateMove = function()
{
	//按照方向移動
	this.x += Math.sin(this.startRotate) * this.startSpeed;
	this.y += Math.cos(this.startRotate) * this.startSpeed;
	
}

PSprite_ZzyGCFBase.prototype.updateOpacity = function()
{
	//透明度小於50%時開始進入漸變
	if(this.CdestroyTime > this.temp1)return;
	this.opacity = this.startOpactiy * this.CdestroyTime / this.temp1;
}




PSprite_ZzyGCFBase.prototype.updateDestroy = function()
{
	//這裡會執行消失條件
	if(this.CdestroyTime > 0)
	{this.CdestroyTime--;}
	else
	{
		this.CdestroyTime = 0;
		this.executing = false;
		this.visible = false;
	}

}




//==========================================================================
//Sprite_ZzyGCFTextBase
//==========================================================================
//顯示文字操作

function Sprite_ZzyGCFTextBase() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGCFTextBase.prototype = Object.create(Sprite_ZzyGCFBase.prototype);
Sprite_ZzyGCFTextBase.prototype.constructor = Sprite_ZzyGCFTextBase;

Sprite_ZzyGCFTextBase.prototype.initialize = function(prefix,fontSize,borderWidth) 
{
	this.bitmapW = this.defaultBitmapWidth();
	this.bitmapH = this.defaultBitmapHeight();
	this.text = [];//文字
	
	this.fontSize = fontSize ? fontSize : this.defaultFontSize();
	this.borderWidth = borderWidth ? borderWidth : this.defaultBorderWidth();
	
	this.textColor = this.defaultTextColor();
	this.borderColor = this.defaultBorderColor();
	this.textPos = this.defaultTextPos();

	this.setPrefixToTextArr(prefix);//轉換儲存
	this.AutoSetBitmapWH();//自動設定長寬資訊
	
    Sprite_ZzyGCFBase.prototype.initialize.call(this,0,0,'',0);
	this.CreateBitmap();//建立點陣圖
	this.isRefresh = true;//是否需要重新整理
	
	this.x = Graphics.width/2;
	this.y = Graphics.height/2;		
	
	this.special = [];//每行的特殊設定
	//[0]:字型大小
	//[1]:邊框大小
	//[2]:字型顏色
	//[3]:邊框顏色
	//[4]:字串位置
	
	this.isDynShow = this.defaultDynShow();//動態顯示文字資訊
	
	this.dynText = [];//動態展示儲存資訊
	
	this.showFrame = this.defaultShowFrame();//預設多少幀一個1
	this.CshowFrame = 0;//計數
	
	this.dynLine = 0;//動態顯示行
	this.dynIndex = 0;//目前動態顯示的下標
	this.dynMaxIndex = 0;//行數最大下標值
	this.dynShowing = false;//是否動態顯示中
	this.dynPause = false;//是否暫停
	
	this.isGradualText = false;//是否為漸變文字
	this.isTextureText = false;//是否為紋理文字
	this.isGradualBorder = false;//是否為漸變邊框
	this.isTextureBorder = false;//是否為紋理邊框
	
	this.gradStyleText = undefined;//漸變顏色表
	this.gradStyleBorder = undefined;//漸變邊框表
	this.tureStyleText = undefined;//紋理顏色表
	this.tureStyleBorder = undefined;//紋理邊框表
	
	//紋理圖片
	this.textImg = undefined;
	this.borderImg = undefined;
	
	this.waitTextImg = false;
	this.CwaitTextImg = 0;
	this.waitBorderImg = false;
	this.CwaitBorderImg = 0;
	
	this.fontType = '';//字型
	this.isBorderBottom = false;//賦值繪製的先後順序
};


Sprite_ZzyGCFTextBase.prototype.CreateBitmap = function()
{
	this.bitmap = new Bitmap(this.bitmapW,this.bitmapH);//長寬
	this.saveFontType();
}

Sprite_ZzyGCFTextBase.prototype.saveFontType = function()//儲存字型型別
{
	var fArr = this.bitmap._context.font.split(' ');
	this.fontType = fArr[fArr.length-1];
}


Sprite_ZzyGCFTextBase.prototype.loadBitmap = function(fileName,hue)
{
	
}

Sprite_ZzyGCFTextBase.prototype.update = function()
{
	Sprite_ZzyGCFBase.prototype.update.call(this);
	
	this.updateDynShow();
	this.updateTextImg();
	this.updateBorderImg();

	if(!this.isRefresh)return;
	this.updateRefresh();//重新整理
	this.isRefresh = false;		
}

Sprite_ZzyGCFTextBase.prototype.updateTextImg = function()//等待載入
{
	if(!this.waitTextImg)return;
	
	if(this.CwaitTextImg > 0)
	{this.CwaitTextImg--;}
	else
	{
		this.CwaitTextImg = 0;
		this.waitTextImg = false;
		
		var context = this.bitmap._context;
		this.tureStyleText = context.createPattern(this.textImg,"repeat");
		context.fillStyle = this.tureStyleText;
		this.isRefresh = true;
	}

}

Sprite_ZzyGCFTextBase.prototype.updateBorderImg = function()//等待載入
{
	if(!this.waitBorderImg)return;
	
	if(this.CwaitBorderImg > 0)
	{this.CwaitBorderImg--;}
	else
	{
		this.CwaitBorderImg = 0;
		this.waitBorderImg = false;
		
		var context = this.bitmap._context;
		this.tureStyleBorder = context.createPattern(this.borderImg,"repeat");
		context.strokeStyle = this.tureStyleBorder;	
		this.isRefresh = true;		
	}
}



Sprite_ZzyGCFTextBase.prototype.updateDynShow = function()
{
	if(!this.isCanDynShow())return;
	
	//重新整理幀數
	
	if(this.CshowFrame < this.showFrame)
	{
		this.CshowFrame++;
	}
	else
	{
		this.dynText[this.dynLine][this.dynIndex] = this.text[this.dynLine][this.dynIndex];
		this.CshowFrame = 0;//清零
		this.dynIndex++;
		
		if(this.dynIndex >= this.dynMaxIndex)
		{
			while(true)
			{
				this.dynLine++;
				if(this.dynLine >= this.text.length)
				{
					this.dynShowing = false;//顯示結束
					break;
				}
				else if(this.calNextLineStr(this.dynLine))//獲取到正確的行數
				{
					break;
				}
			}
		}
		this.isRefresh = true;
		
	}
	
}


Sprite_ZzyGCFTextBase.prototype.calNextLineStr = function(nextLine)//計算本行資訊
{
	nextLine = nextLine ? nextLine : 0;
	
	if(!this.text[nextLine])
	{this.dynMaxIndex = 0;}
	else
	{this.dynMaxIndex = this.text[nextLine].length;}
	this.dynIndex = 0;

	if(this.dynMaxIndex)
	{
		this.dynText[nextLine] = [];
		return true;
	}
	return false;
}

Sprite_ZzyGCFTextBase.prototype.isCanDynShow = function()
{
	if(this.dynPause || !this.isDynShow || !this.dynShowing)return false;
	return true;
}


Sprite_ZzyGCFTextBase.prototype.updateRefresh = function()//重新整理
{
	this.bitmap.clear();

	for(var i=0;i<this.text.length;i++)
	{
		this.bitmap.fontSize = this.fontSize;
		this.bitmap.outlineWidth = this.borderWidth;
		this.bitmap.textColor = this.textColor;
		this.bitmap.outlineColor = this.borderColor;		
		
		var tempTextPos = this.textPos;
		
      	//[0]:字型大小   //[1]:邊框大小   //[2]:字型顏色   //[3]:邊框顏色   //[4]:字串位置		
		if(!this.text[i])continue;
		
		//判斷是否有特殊輸入
		if(this.special[i])
		{
			this.bitmap.fontSize = this.special[i][0] ? this.special[i][0] : this.bitmap.fontSize;
			this.bitmap.outlineWidth = this.special[i][1] ? this.special[i][1] : this.bitmap.outlineWidth;
			this.bitmap.textColor = this.special[i][2] ? this.special[i][2] : this.bitmap.textColor;
			this.bitmap.outlineColor = this.special[i][3] ? this.special[i][3] : this.bitmap.borderColor;
			tempTextPos = this.special[i][4] ? this.special[i][4] : tempTextPos;
		}

		if(this.isDynShow)
		{	
			if(!this.dynText[i])continue;
			
			var isSenior = false;//是否擁有高級效果	
			
			if(this.isGradualText || this.isGradualBorder || 
			this.isTextureText || this.isTextureBorder)//包含漸變文字時
			{
				isSenior = true;
			}			
			
			if(isSenior)
			{	
				this.bitmap._context.font = this.bitmap._makeFontNameText();
				this.bitmap._context.lineWidth = this.bitmap.outlineWidth;
		
				this.drawSeniorText(this.dynText[i].join(""),this.borderWidth,
				this.getYOfLine(i)+this.fontSize-this.borderWidth,this.bitmapW,tempTextPos);
				
			}
			else
			{
				this.bitmap.drawText(this.dynText[i].join(""),this.borderWidth,this.getYOfLine(i),this.bitmapW,
				this.fontSize + this.borderWidth*2,tempTextPos);			
			}
			
		}
		else
		{
	
			var isSenior = false;//是否擁有高級效果
			if(this.isGradualText || this.isGradualBorder || 
			this.isTextureText || this.isTextureBorder)//包含漸變文字時
			{
				isSenior = true;
			}

			if(isSenior)
			{
				this.bitmap._context.font = this.bitmap._makeFontNameText();
				this.bitmap._context.lineWidth = this.bitmap.outlineWidth;
		
				this.drawSeniorText(this.text[i],
				this.borderWidth,
				this.getYOfLine(i)+this.fontSize-this.borderWidth,
				this.bitmapW,
				tempTextPos);
				
			}
			else
			{
				this.bitmap.drawText(this.text[i],this.borderWidth,this.getYOfLine(i),this.bitmapW,
				this.fontSize + this.borderWidth*2,tempTextPos);				
			}
		}

	}
}


Sprite_ZzyGCFTextBase.prototype.drawSeniorText = function(text,x,y,width,align)
{
	var tx = x;
	if(align === 'center')
	{
		tx += width / 2;
	}
	else if(align === 'right')
	{
		tx += width;
	}
	this.bitmap._context.textAlign = align;
	
	if(this.isBorderBottom)//繪製邊框和文字的先後順序
	{
		if(this.isGradualBorder || this.isTextureBorder)
		{this.bitmap._context.strokeText(text,tx,
		y,width);}	
		
		if(this.isGradualText || this.isTextureText)
		{this.bitmap._context.fillText(text,tx,
		y,width);}		
	}
	else
	{
		if(this.isGradualText || this.isTextureText)
		{this.bitmap._context.fillText(text,tx,
		y,width);}	

		if(this.isGradualBorder || this.isTextureBorder)
		{this.bitmap._context.strokeText(text,tx,
		y,width);}			
	}
	
	

}

Sprite_ZzyGCFTextBase.prototype.ForceRefresh = function()//這會強制重新整理
{
	this.updateRefresh();
}


Sprite_ZzyGCFTextBase.prototype.getYOfLine = function(line)
{
	return line * (this.fontSize + this.borderWidth*2)+this.borderWidth;
}

Sprite_ZzyGCFTextBase.prototype.defaultBitmapWidth = function()
{
	return 256;
}

Sprite_ZzyGCFTextBase.prototype.defaultBitmapHeight = function()
{
	return 64;
}

Sprite_ZzyGCFTextBase.prototype.defaultFontSize = function()
{
	return 30;
}

Sprite_ZzyGCFTextBase.prototype.defaultBorderWidth = function()
{
	return 2;
}

Sprite_ZzyGCFTextBase.prototype.defaultTextColor = function()
{
	return '#ffffff';
}

Sprite_ZzyGCFTextBase.prototype.defaultBorderColor = function()
{
	return 'rgba(0,0,0,1)';
}

Sprite_ZzyGCFTextBase.prototype.defaultTextPos = function()
{
	return 'center';
}

Sprite_ZzyGCFTextBase.prototype.defaultDynShow = function()
{
	return false;
}

Sprite_ZzyGCFTextBase.prototype.defaultShowFrame = function()//多少幀顯示一個字元
{
	return 6;
}

Sprite_ZzyGCFTextBase.prototype.setBorderColor = function(colorStr)//設定邊框顏色
{
	this.borderColor = colorStr;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.borderRedColor = function()//紅
{this.borderColor = 'rgba(240,40,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderOrangeColor = function()//橙
{this.borderColor = 'rgba(240,120,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderYellowColor = function()//黃
{this.borderColor = 'rgba(240,240,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderEmeraldColor = function()//翠綠
{this.borderColor = 'rgba(120,240,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderGreenColor = function()//綠
{this.borderColor = 'rgba(40,240,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderTurquoiseColor = function()//青綠
{this.borderColor = 'rgba(40,240,120,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderCyanColor = function()//青
{this.borderColor = 'rgba(40,240,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderSeablueColor = function()//海藍
{this.borderColor = 'rgba(40,120,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderBlueColor = function()//藍
{this.borderColor = 'rgba(40,40,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderPurpleColor = function()//紫
{this.borderColor = 'rgba(120,40,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderPinkColor = function()//粉
{this.borderColor = 'rgba(240,40,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.borderPinkredColor = function()//粉紅
{this.borderColor = 'rgba(240,40,120,1)';this.isRefresh = true;}

Sprite_ZzyGCFTextBase.prototype.setTextColor = function(colorStr)
{
	this.textColor = colorStr;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.textRedColor = function()//紅
{this.textColor = '#ff2222';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textOrangeColor = function()//橙
{this.textColor = '#ff7f22';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textYellowColor = function()//黃
{this.textColor = '#ffff22';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textEmeraldColor = function()//翠綠
{this.textColor = '#7fff22';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textGreenColor = function()//綠
{this.textColor = '#22ff22';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textTurquoiseColor = function()//青綠
{this.textColor = '#22ff7f';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textCyanColor = function()//青
{this.textColor = '#22ffff';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textSeablueColor = function()//海藍
{this.textColor = '#227fff';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textBlueColor = function()//藍
{this.textColor = '#2222ff';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textPurpleColor = function()//紫
{this.textColor = '#7f22ff';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textPinkColor = function()//粉
{this.textColor = '#ff22ff';this.isRefresh = true;}
Sprite_ZzyGCFTextBase.prototype.textPinkredColor = function()//粉紅
{this.textColor = '#ff227f';this.isRefresh = true;}



Sprite_ZzyGCFTextBase.prototype.Random12TextColor = function()//一個隨機12色文字
{
	var textColorFun = [this.textRedColor,this.textOrangeColor,this.textYellowColor,this.textEmeraldColor,this.textGreenColor,this.textTurquoiseColor,this.textCyanColor,this.textSeablueColor,this.textBlueColor,this.textPurpleColor,this.textPinkColor,this.textPinkredColor];
	
	var rcID = Zzy.GCF.RandomIntArea(0,12);
	textColorFun[rcID].call(this);
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.Random12BorderColor = function()//一個隨機12色邊框
{
	var borderColorFun = [this.borderRedColor,this.borderOrangeColor,this.borderYellowColor,this.borderEmeraldColor,this.borderGreenColor,this.borderTurquoiseColor,this.borderCyanColor,this.borderSeablueColor,this.borderBlueColor,this.borderPurpleColor,this.borderPinkColor,this.borderPinkredColor];	
	var rcID = Zzy.GCF.RandomIntArea(0,12);
	borderColorFun[rcID].call(this);
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.Random12Color = function()//一個隨機12色文字和邊框
{
	this.Random12TextColor();
	this.Random12BorderColor();
	this.isRefresh = true;
}

//對指定的行數進行特殊文字顏色設定
Sprite_ZzyGCFTextBase.prototype.setFontSizeOfLine = function(line,fontSize)
{
	if(!this.special[line]){this.special[line] = [];}
	this.special[line][0] = fontSize ? fontSize : this.defaultFontSize();
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setFontSize = function(fontSize)
{
	this.fontSize = fontSize;
	this.ReCreateBitmap();
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.clearFontSizeOfLine = function(line)
{
	if(!this.special[line])return;
	this.special[line][0] = undefined;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setBorderWidthOfLine = function(line,borderWidth)
{
	if(!this.special[line]){this.special[line] = [];}
	this.special[line][1] = borderWidth ? borderWidth : this.defaultBorderWidth();
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setBorderWidth = function(borderWidth)
{
	this.borderWidth = borderWidth;
	this.ReCreateBitmap();	
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.clearBorderWidthOfLine = function(line)
{
	if(!this.special[line])return;
	this.special[line][1] = undefined;
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.setTextColorOfLine = function(line,textColor)
{
	if(!this.special[line]){this.special[line] = [];}
	this.special[line][2] = textColor ? textColor : this.defaultTextColor();
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setTextColor = function(textColor)
{
	this.textColor = textColor;
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.clearTextColorOfLine = function(line)
{
	if(!this.special[line])return;
	this.special[line][2] = undefined;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setBorderColorOfLine = function(line,borderColor)
{
	if(!this.special[line]){this.special[line] = [];}
	this.special[line][3] = borderColor ? borderColor : this.defaultBorderColor();
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setBorderColor = function(borderColor)
{
	this.borderColor = borderColor;
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.clearBorderColorOfLine = function(line)
{
	if(!this.special[line])return;
	this.special[line][3] = undefined;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setTextPosOfLine = function(line,textPos)
{
	if(!this.special[line]){this.special[line] = [];}
	this.special[line][4] = textPos ? textPos : this.defaultTextPos();
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.setTextPos = function(textPos)
{
	this.textPos = textPos;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.clearTextPosOfLine = function(line)
{
	if(!this.special[line])return;
	this.special[line][4] = undefined;
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.hideBorder = function()//隱藏邊框
{
	//隱藏
	this.bitmap.outlineWidth = 0;
	this.setGradualColorOfBorder(['rgba(0,0,0,0)']);
	this.isRefresh = true;
}







//這會設定一行中擁有特殊效果
Sprite_ZzyGCFTextBase.prototype.setSpecialOfLine = function(line,infoArr)
{
	//[0]:字型大小   //[1]:邊框大小   //[2]:字型顏色   //[3]:邊框顏色   //[4]:字串位置	
	if(!this.special[line]){this.special[line] = [];}
	this.setFontSizeOfLine(line,infoArr[0]);
	this.setBorderWidthOfLine(line,infoArr[1]);
	this.setTextColorOfLine(line,infoArr[2]);
	this.setBorderColorOfLine(line,infoArr[3]);
	this.setTextPosOfLine(line,infoArr[4]);
}

Sprite_ZzyGCFTextBase.prototype.clearSpecialOfLine = function(line)//清理特殊行數標記
{
	this.special[line] = undefined;
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.setBorderBottom = function(isEnable)//修改繪製流程
{
	isEnable = isEnable ? isEnable : false;
	this.isBorderBottom = isEnable;
	this.isRefresh = true;
}





Sprite_ZzyGCFTextBase.prototype.AutoSetBitmapWH = function()//自動匹配長寬參數
{
	//選出最大長度的字串
	var maxLen = 0;
	for(var i=0;i<this.text.length;i++)
	{
		maxLen = Math.max(maxLen,this.text[i].length);
	}
	
	//比較寬度
	var tempS = this.fontSize + this.borderWidth * 2;
	var tempW = maxLen * this.fontSize + this.borderWidth * 2;
	var tempH = this.text.length * tempS;
	
	this.bitmapW = Math.max(this.bitmapW,tempW);
	this.bitmapH = Math.max(this.bitmapH,tempH);
}


Sprite_ZzyGCFTextBase.prototype.setPrefixToTextArr = function(prefix)
{
	//將'\n'進行拆分
	this.text = prefix.split('\n');//切割成多段陣列
}


Sprite_ZzyGCFTextBase.prototype.setText = function(text)//重新設定文字組
{
	this.setPrefixToTextArr(text);
	this.ReCreateBitmap();
	this.isRefresh = true;//重新整理
}

Sprite_ZzyGCFTextBase.prototype.ReCreateBitmap = function()
{
	var oldW = this.bitmapW;
	var oldH = this.bitmapH;
	this.AutoSetBitmapWH();//重新設定長寬資訊
	if(oldW !== this.bitmapW || oldH !== this.bitmapH)
	{
		this.CreateBitmap();//重新申請點陣圖
		return true;
	}	
	return false;
}


Sprite_ZzyGCFTextBase.prototype.setTextOfLine = function(line,ltext)
{
	this.text[line] = ltext;
	this.ReCreateBitmap();
	this.isRefresh = true;//重新整理
}

Sprite_ZzyGCFTextBase.prototype.addTextOfLine = function(line,ltext)
{
	this.text[line] += ltext;
	this.ReCreateBitmap();
	this.isRefresh = true;//重新整理
}

Sprite_ZzyGCFTextBase.prototype.setDynShow = function(isEnable)
{
	this.isDynShow = isEnable;
}

//速度值代表每幀顯示的字元數量,這可以是一個小數
Sprite_ZzyGCFTextBase.prototype.setShowFrame = function(frame)
{
	this.showFrame = frame;
}

//開始動態顯示文字
Sprite_ZzyGCFTextBase.prototype.startDynShow = function(line)
{
	this.setDynShow(true);
	
	this.dynLine = line ? line : 0;//預設從第0行開始
	this.dynShowing = true;
	this.dynText = [];//動態展示儲存資訊
	this.dynIndex = 0;
	
	//通過行數設定初始化的dynText資訊
	for(var i=0;i<line;i++)
	{
		this.dynText[i] = [];
		for(var j=0;j<this.text[i].length;j++)
		{
			this.dynText[i][j] = this.text[i][j];
		}
	}
	this.calNextLineStr(line);
}


//設定文字平均漸變顏色
Sprite_ZzyGCFTextBase.prototype.setGradualColorOfText = function(colorArr,isH,isV)
{
	this.isGradualText = true;
	this.isTextureText = false;//關閉紋理
	var context = this.bitmap._context;//獲取畫布

	this.gradStyleText = undefined;//漸變顏色表
	
	if(!isH && !isV)
	{
		this.gradStyleText = context.createLinearGradient(0,0,this.bitmapW,0);//設定漸變範圍
	}
	else
	{
		var tw = isH ? this.bitmapW : 0;
		var th = isV ? this.bitmapH : 0;
		this.gradStyleText = context.createLinearGradient(0,0,tw,th);//設定漸變範圍
	}

	var len = colorArr.length;//通過長度平均分配
	var rate = 0;
	if(len <= 1){rate = 0;}
	else{rate = 1 / (len-1);}//獲取百分比
	for(var i=0;i<=len-1;i++)
	{
		this.gradStyleText.addColorStop(rate*i,colorArr[i]);//製作漸變資訊
	}
	context.fillStyle = this.gradStyleText;//設定風格模式
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.addGradualColorOfText = function(ratePos,colorStr)//新增變色效果
{
	if(!this.gradStyleText){Zzy.GCF.Bug(1);return;}
	this.gradStyleText.addColorStop(ratePos,colorStr);
	this.bitmap._context.fillStyle = this.gradStyleText;
	this.isRefresh = true;
}

//設定邊框平均漸變顏色
Sprite_ZzyGCFTextBase.prototype.setGradualColorOfBorder = function(colorArr,isH,isV)
{
	this.isGradualBorder = true;
	this.isTextureBorder = false;//關閉紋理
	var context = this.bitmap._context;//獲取畫布
	
	this.gradStyleBorder = undefined;//漸變顏色表
	
	if(!isH && !isV)
	{
		this.gradStyleBorder = context.createLinearGradient(0,0,this.bitmapW,0);//設定漸變範圍
	}
	else
	{
		var tw = isH ? this.bitmapW : 0;
		var th = isV ? this.bitmapH : 0;
		this.gradStyleBorder = context.createLinearGradient(0,0,tw,th);//設定漸變範圍
	}	
	
	
	var len = colorArr.length;//通過長度平均分配
	var rate = 0;
	if(len <= 1){rate = 0;}
	else{rate = 1 / (len-1);}//獲取百分比
	for(var i=0;i<=len-1;i++)
	{
		this.gradStyleBorder.addColorStop(rate*i,colorArr[i]);//製作漸變資訊
	}
	context.strokeStyle = this.gradStyleBorder;//設定風格模式
	this.isRefresh = true;	
}

Sprite_ZzyGCFTextBase.prototype.addGradualColorOfBorder = function(ratePos,colorStr)//新增變色效果
{
	if(!this.gradStyleBorder){Zzy.GCF.Bug(2);return;}
	this.gradStyleBorder.addColorStop(ratePos,colorStr);
	this.bitmap._context.strokeStyle = this.gradStyleBorder;
	this.isRefresh = true;
}


Sprite_ZzyGCFTextBase.prototype.setTextureOfText = function(fileName)//紋理名稱
{
	this.isTextureText = true;//開啟紋理
	this.isGradualText = false;//關閉漸變
	var context = this.bitmap._context;//獲取畫布
	
	fileName = '../img/pictures/' + fileName + '.png';
	this.textImg = new Image();
	this.textImg.src = fileName;
	
	this.waitTextImg = true;
	this.CwaitTextImg = 5;

	this.tureStyleText = undefined;//點陣圖	
	this.isRefresh = true;
	
}

Sprite_ZzyGCFTextBase.prototype.setTextureOfBorder = function(fileName)//紋理名稱
{
	this.isTextureBorder = true;//開啟紋理	
	this.isGradualBorder = false;//關閉漸變

	var context = this.bitmap._context;//獲取畫布
	
	fileName = '../img/pictures/' + fileName + '.png';
	this.borderImg = new Image();
	this.borderImg.src = fileName;
	
	this.waitBorderImg = true;
	this.CwaitBorderImg = 5;
	this.tureStyleBorder = undefined;//點陣圖	
	this.isRefresh = true;
	
}



Sprite_ZzyGCFTextBase.prototype.closeGradualColorOfText = function()//關閉漸變顏色
{
	this.isGradualText = false;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.closeGradualColorOfBorder = function()//關閉漸變邊框
{
	this.isGradualBorder = false;
	this.isRefresh = true;
	
}

Sprite_ZzyGCFTextBase.prototype.closeTextureOfText = function()//關閉紋理名稱
{
	this.isTextureText = false;
	this.isRefresh = true;
}

Sprite_ZzyGCFTextBase.prototype.closeTextureOfBorder = function()//關閉紋理邊框
{
	this.isTextureBorder = false;
	this.isRefresh = true;
}


//動態遞減文字，參數為是否使用所目前擁有動態字串數量,為false時會變為所有字串
Sprite_ZzyGCFTextBase.prototype.startRemoveDynShow = function(isCurrent)
{
	this.setDynShow(true);
	
	if(!isCurrent)
	{
		this.dynText = [];
		
		
	}
}


Sprite_ZzyGCFTextBase.prototype.setDynPause = function(isPause)//是否暫停動態顯示效果
{
	this.dynPause = isPause;
}



//==========================================================================
//Sprite_ZzyGCFNumber
//==========================================================================


function Sprite_ZzyGCFNumber() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGCFNumber.prototype = Object.create(Sprite_ZzyGCFBase.prototype);
Sprite_ZzyGCFNumber.prototype.constructor = Sprite_ZzyGCFNumber;

Sprite_ZzyGCFNumber.prototype.initialize = function(w,h,num) 
{
    Sprite_ZzyGCFBase.prototype.initialize.call(this,0,0,'',0);
	
	//數字點陣圖
	this.realNumber = num ? num : 0;//真實數字
	this.showNumber = num ? num : 0;//顯示分數


	this.bWidth = w;
	this.bHeight = h;
	this.CreateBitmap();
	
	this.isDynNumber = this.DefaultDynNumber();//是否動態增分
	this.dyning = false//增加中
	this.drawPos = this.DefaultDrawPos();
	
	this.numberDelay = 0;//延遲
	this.isNumberDelay = false;//延遲判斷
	this.setFontSize();
	this.isRefresh = false;//需要重新整理
	
	this.bindNumberFun = undefined;//繫結返回數字函式
	
	this.x = Graphics.boxWidth / 2;
	this.y = Graphics.boxHeight / 2;
	
	

	this.isGradualNumber = false;//是否為漸變數字
	this.isTextureNumber = false;//是否為紋理數字
	this.isGradualBorder = false;//是否為漸變邊框
	this.isTextureBorder = false;//是否為紋理邊框
	
	this.gradStyleNumber = undefined;//漸變顏色表
	this.gradStyleBorder = undefined;//漸變邊框表
	this.tureStyleNumber = undefined;//紋理顏色表
	this.tureStyleBorder = undefined;//紋理邊框表
	
	//紋理圖片
	this.numberImg = undefined;
	this.borderImg = undefined;
	
	this.waitNumberImg = false;
	this.CwaitNumberImg = 0;
	this.waitBorderImg = false;
	this.CwaitBorderImg = 0;
	
	this.fontType = '';//字型
	this.isBorderBottom = false;//描邊是否在底層
	
	
	this.isUseBitmapCollection = this.DefaultUseBitmapCollection();//使用點陣圖合集
	this.collection = [];
	
	this.isFillDigit = this.DefaultFillDigit();//是否補充位數
	this.digitCount = this.DefaultDigitCount();//位數
	
	
	this.refresh();//強制重新整理
};


Sprite_ZzyGCFNumber.prototype.DefaultDynNumber = function()//是否動態增分
{
	return true;
}

Sprite_ZzyGCFNumber.prototype.DefaultFillDigit = function()//預設是否擁有佔位
{
	return false;
}

Sprite_ZzyGCFNumber.prototype.DefaultDigitCount = function()//預設佔位長度
{
	return 0;
}

Sprite_ZzyGCFNumber.prototype.DefaultDrawPos = function()//預設位置
{
	return 'center';
}

Sprite_ZzyGCFNumber.prototype.DefaultUseBitmapCollection = function()
{
	return false;
}

Sprite_ZzyGCFNumber.prototype.DefaultTextColor = function()
{
	return '#000000';
}

Sprite_ZzyGCFNumber.prototype.DefaultBorderColor = function()
{
	return 'rgba(0,0,0,0.5)';
}

Sprite_ZzyGCFNumber.prototype.DefaultBorderWidth = function()
{
	return 2;
}


Sprite_ZzyGCFNumber.prototype.setFillDigit = function(isEnable)//返回是否新增0補充
{
	this.isFillDigit = isEnable;
}

Sprite_ZzyGCFNumber.prototype.setDigitCount = function(digitCount)
{
	this.digitCount = digitCount;
}


Sprite_ZzyGCFNumber.prototype.setBitmapCollection = function(collection)
{
	this.collection = collection;
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.setUseBitmapCollection = function(isEnable)
{
	this.isUseBitmapCollection = isEnable;//是否使用圖集顯示數字
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.CreateBitmap = function()
{	
	this.bitmap = new Bitmap(this.bWidth,this.bHeight);//長寬
	
	this.bitmap.textColor = this.DefaultTextColor();
	this.bitmap.outlineColor = this.DefaultBorderColor();
	this.bitmap.outlineWidth = this.DefaultBorderWidth();

	this.saveFontType();
}


Sprite_ZzyGCFNumber.prototype.saveFontType = function()//儲存字型型別
{
	var fArr = this.bitmap._context.font.split(' ');
	this.fontType = fArr[fArr.length-1];
}


//設定數字平均漸變顏色,isH,isV代表是否水平或者垂直進行漸變情況
Sprite_ZzyGCFNumber.prototype.setGradualColorOfNumber = function(colorArr,isH,isV)
{
	this.isGradualNumber = true;
	this.isTextureNumber = false;//關閉紋理
	var context = this.bitmap._context;//獲取畫布

	this.gradStyleNumber = undefined;//漸變顏色表
	
	
	if(!isH && !isV)
	{
		this.gradStyleNumber = context.createLinearGradient(0,0,this.bWidth,0);//設定漸變範圍
	}
	else
	{
		var tw = isH ? this.bWidth : 0;
		var th = isV ? this.bHeight : 0;
		this.gradStyleNumber = context.createLinearGradient(0,0,tw,th);//設定漸變範圍
	}
	
	var len = colorArr.length;//通過長度平均分配
	var rate = 0;
	if(len <= 1){rate = 0;}
	else{rate = 1 / (len-1);}//獲取百分比
	for(var i=0;i<=len-1;i++)
	{
		this.gradStyleNumber.addColorStop(rate*i,colorArr[i]);//製作漸變資訊
	}
	context.fillStyle = this.gradStyleNumber;//設定風格模式
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.addGradualColorOfNumber = function(ratePos,colorStr)//新增變色效果
{
	if(!this.gradStyleNumber){Zzy.GCF.Bug(3);return;}
	this.gradStyleNumber.addColorStop(ratePos,colorStr);
	this.bitmap._context.fillStyle = this.gradStyleNumber;
	this.isRefresh = true;
}

//設定邊框平均漸變顏色
Sprite_ZzyGCFNumber.prototype.setGradualColorOfBorder = function(colorArr,isH,isV)
{
	this.isGradualBorder = true;
	this.isTextureBorder = false;//關閉紋理
	var context = this.bitmap._context;//獲取畫布
	
	this.gradStyleBorder = undefined;//漸變顏色表
	
	
	if(!isH && !isV)
	{
		this.gradStyleBorder = context.createLinearGradient(0,0,this.bWidth,0);//設定漸變範圍
	}
	else
	{
		var tw = isH ? this.bWidth : 0;
		var th = isV ? this.bHeight : 0;
		this.gradStyleBorder = context.createLinearGradient(0,0,tw,th);//設定漸變範圍
	}
	
	
	
	var len = colorArr.length;//通過長度平均分配
	var rate = 0;
	if(len <= 1){rate = 0;}
	else{rate = 1 / (len-1);}//獲取百分比
	for(var i=0;i<=len-1;i++)
	{
		this.gradStyleBorder.addColorStop(rate*i,colorArr[i]);//製作漸變資訊
	}
	context.strokeStyle = this.gradStyleBorder;//設定風格模式
	this.isRefresh = true;	
}

Sprite_ZzyGCFNumber.prototype.addGradualColorOfBorder = function(ratePos,colorStr)//新增變色效果
{
	if(!this.gradStyleBorder){Zzy.GCF.Bug(4);return;}
	this.gradStyleBorder.addColorStop(ratePos,colorStr);
	this.bitmap._context.strokeStyle = this.gradStyleBorder;
	this.isRefresh = true;
}


Sprite_ZzyGCFNumber.prototype.setTextureOfNumber = function(fileName)//紋理名稱
{
	this.isTextureNumber = true;//開啟紋理
	this.isGradualNumber = false;//關閉漸變
	var context = this.bitmap._context;//獲取畫布
	
	fileName = '../img/pictures/' + fileName + '.png';
	this.numberImg = new Image();
	this.numberImg.src = fileName;
	
	this.waitNumberImg = true;
	this.CwaitNumberImg = 5;

	this.tureStyleNumber = undefined;//點陣圖	
	this.isRefresh = true;
	
}

Sprite_ZzyGCFNumber.prototype.setTextureOfBorder = function(fileName)//紋理名稱
{
	this.isTextureBorder = true;//開啟紋理	
	this.isGradualBorder = false;//關閉漸變

	var context = this.bitmap._context;//獲取畫布
	
	fileName = '../img/pictures/' + fileName + '.png';
	this.borderImg = new Image();
	this.borderImg.src = fileName;
	
	this.waitBorderImg = true;
	this.CwaitBorderImg = 5;
	this.tureStyleBorder = undefined;//點陣圖	
	this.isRefresh = true;
	
}


Sprite_ZzyGCFNumber.prototype.closeGradualColorOfText = function()//關閉漸變顏色
{
	this.isGradualNumber = false;
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.closeGradualColorOfBorder = function()//關閉漸變邊框
{
	this.isGradualBorder = false;
	this.isRefresh = true;
	
}

Sprite_ZzyGCFNumber.prototype.closeTextureOfNumber = function()//關閉紋理名稱
{
	this.isTextureNumber = false;
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.closeTextureOfBorder = function()//關閉紋理邊框
{
	this.isTextureBorder = false;
	this.isRefresh = true;
}

//設定繪製順序
Sprite_ZzyGCFNumber.prototype.setBorderBottom = function(isEnable)
{
	isEnable = isEnable ? isEnable : false;
	this.isBorderBottom = isEnable;
	this.isRefresh;
}


Sprite_ZzyGCFNumber.prototype.update = function()
{
	Sprite_ZzyGCFBase.prototype.update.call(this);
	
	this.updateBindNumFun();//更新有繫結函式
	
	this.updateNumberImg();//等待載入
	this.updateBorderImg();//等待載入
	
	if(this.isRefresh)//重新整理一次點陣圖
	{
		this.refresh();
		this.isRefresh = false;
	}
	
	if(!this.isNotUpdate())return;//數據沒有變化不需要重新整理
	
	this.updateNumberDelay();//更新延遲
	
	if(this.isNumberDelay)return;//延遲不重新整理
	this.refresh();//重新整理
}


Sprite_ZzyGCFNumber.prototype.updateNumberImg = function()//等待載入
{
	if(!this.waitNumberImg)return;
	
	if(this.CwaitNumberImg > 0)
	{this.CwaitNumberImg--;}
	else
	{
		this.CwaitNumberImg = 0;
		this.waitNumberImg = false;
		var context = this.bitmap._context;

		this.tureStyleNumber = context.createPattern(this.numberImg,"repeat");
		context.fillStyle = this.tureStyleNumber;
		this.isRefresh = true;
	}
}


Sprite_ZzyGCFNumber.prototype.updateBorderImg = function()//等待載入
{
	if(!this.waitBorderImg)return;
	
	if(this.CwaitBorderImg > 0)
	{this.CwaitBorderImg--;}
	else
	{
		this.CwaitBorderImg = 0;
		this.waitBorderImg = false;
		var context = this.bitmap._context;
		this.tureStyleBorder = context.createPattern(this.borderImg,"repeat");
		context.strokeStyle = this.tureStyleBorder;	
		this.isRefresh = true;		
	}
}




Sprite_ZzyGCFNumber.prototype.updateNumberDelay = function()
{
	if(!this.isNumberDelay)return;
		
	if(this.numberDelay > 0)
	{this.numberDelay--;}
	else
	{
		this.numberDelay = 0;
		this.isNumberDelay = false;
	}
}


Sprite_ZzyGCFNumber.prototype.updateBindNumFun = function()
{
	if(!this.bindNumberFun)return;
	
	this.realNumber = this.bindNumberFun();//獲取數值
	
}



Sprite_ZzyGCFNumber.prototype.setBindNumberFunction = function(fun)
{this.bindNumberFun = fun;}

Sprite_ZzyGCFNumber.prototype.clearBindNumberFunction = function()
{this.bindNumberFun = undefined;}


Sprite_ZzyGCFNumber.prototype.loadBitmap = function(fileName,hue)
{

}


Sprite_ZzyGCFNumber.prototype.setFontSize = function(fontSize)//設定字型大小
{
	if(!fontSize){this.bitmap.fontSize = this.defaultFontSize();return;}
	
	this.bitmap.fontSize = fontSize;
}

Sprite_ZzyGCFNumber.prototype.setMaxFontSize = function()//設定為最大顯示字型
{
	//取寬高比最大
	var minS = Math.min(this.bWidth,this.bHeight);
	minS = minS - this.bitmap.outlineWidth*2;
	this.bitmap.fontSize = minS;
	this.isRefresh = true;
}


Sprite_ZzyGCFNumber.prototype.defaultFontSize = function()
{return 32;}


Sprite_ZzyGCFNumber.prototype.getNumber = function()
{return this.realNumber;}

Sprite_ZzyGCFNumber.prototype.getShowNumber = function()
{return this.showNumber;}

Sprite_ZzyGCFNumber.prototype.setDelayOfNumber = function(delay)
{
	this.numberDelay = delay;
	this.isNumberDelay = true;
}


Sprite_ZzyGCFNumber.prototype.addDelayOfNumber = function(delay)
{
	this.numberDelay += delay;
	this.isNumberDelay = true;
}

Sprite_ZzyGCFNumber.prototype.subDelayOfNumber = function(delay)
{
	this.numberDelay -= delay;
	this.isNumberDelay = true;
}






Sprite_ZzyGCFNumber.prototype.refresh = function()//這將會主動的去重新整理
{
	this.bitmap.clear();
	this.ExecuteDynNumber();//執行動態增粉

	if(this.isUseBitmapCollection)//用點陣圖的方式來顯示
	{
		this.refreshHaveCollection();
	}
	else
	{
		this.refreshNoCollection();
	}	
}


Sprite_ZzyGCFNumber.prototype.refreshHaveCollection = function()
{
	//通過點陣圖集來進行顯示
	
	//點陣圖範圍0~9
	var bCount = 0;//位數

	this.tNumber = this.showNumber;
	this.tArrIndex = [];
	//獲取位數

	if(this.tNumber === 0)
	{
		this.tArrIndex.push(0);
		bCount++;
	}
	else
	{
		while(this.tNumber !== 0)
		{

			this.tArrIndex.push(this.tNumber%10);
			this.tNumber = Math.floor(this.tNumber/10);
			bCount++;
			
		}		
	}

	var totalWidth = 0;//總長度
	var startPosX = 0;//開始X位置
	for(var i=0;i<this.tArrIndex.length;i++)
	{
		var tBitmap = this.collection[this.tArrIndex[i]];
		if(!tBitmap)continue;
		totalWidth += tBitmap.width;
	}
	

	switch(this.drawPos)
	{
		case 'left':
			startPosX = 0;
		break;
		
		case 'center':
			startPosX = this.bWidth/2 - totalWidth/2;
		break;
		
		case 'right':
			startPosX = this.bWidth - totalWidth;
		break;
	}
	
	var currentX = 0;
	
	
	this.tArrIndex.reverse();//調個順序
	
	if(this.isFillDigit)//存在填充佔位
	{
		if(bCount < this.digitCount)
		{
			var tCount = this.digitCount - bCount;//添位
			var ZeroArr = [];
			for(var i=0;i<tCount;i++)
			{
				ZeroArr[i] = 0;
			}
			
			this.tArrIndex = Zzy.GCF.InsertToOtherArr(this.tArrIndex,0,ZeroArr);
			
		}
	}		
		
	for(var i=0;i<this.tArrIndex.length;i++)
	{
		var tBitmap = this.collection[this.tArrIndex[i]];
		if(!tBitmap)continue;
		this.bitmap.blt(tBitmap,0,0,tBitmap.width,tBitmap.height,
		startPosX+currentX,0,tBitmap.width,tBitmap.height);//傳遞
		currentX += tBitmap.width;		
	}	


}


Sprite_ZzyGCFNumber.prototype.refreshNoCollection = function()
{
	var isSenior = false;//是否擁有高級效果
	if(this.isGradualNumber || this.isGradualBorder || 
	this.isTextureNumber || this.isTextureBorder)//包含漸變文字時
	{isSenior = true;}


	var number = this.showNumber;
	if(this.isFillDigit)
	{number = this.getFillDigitText(number);}		

	if(isSenior)
	{
		this.bitmap._context.font = this.bitmap._makeFontNameText();
		this.bitmap._context.lineWidth = this.bitmap.outlineWidth;
		
		this.drawSeniorText(number,
		0,
		this.bitmap.fontSize,
		this.bWidth,this.drawPos);
	}
	else
	{

		this.bitmap.drawText(number,0,0,this.bWidth,this.bHeight,this.drawPos);
	}	
}


Sprite_ZzyGCFNumber.prototype.getFillDigitText = function(number)//獲取補位內容
{
	//陣列轉換成字串
	var nStr = number.toString();//轉換成字串
	if(nStr.length < this.digitCount)
	{
		var count = this.digitCount - nStr.length;
		
		//新增字串
		var strBuffer = [];
		for(var i=0;i<count;i++)
		{
			strBuffer.push('0');//壓入0
		}
		strBuffer.push(nStr);
	}
	
	
	nStr = strBuffer.join("");
	return nStr;
}


Sprite_ZzyGCFNumber.prototype.drawSeniorText = function(text,x,y,width,align)
{
	var tx = x;
	if(align === 'center')
	{
		tx += width / 2;
	}
	else if(align === 'right')
	{
		tx += width;
	}
	this.bitmap._context.textAlign = align;
	
	if(this.isBorderBottom)
	{
		if(this.isGradualBorder || this.isTextureBorder)
		{this.bitmap._context.strokeText(text,tx,
		y,width);}
		
		if(this.isGradualNumber || this.isTextureNumber)
		{this.bitmap._context.fillText(text,tx,
		y,width);}			
	}
	else
	{
		if(this.isGradualNumber || this.isTextureNumber)
		{this.bitmap._context.fillText(text,tx,
		y,width);}	

		if(this.isGradualBorder || this.isTextureBorder)
		{this.bitmap._context.strokeText(text,tx,
		y,width);}			
	}
	

}



Sprite_ZzyGCFNumber.prototype.setDrawPos = function(pos)//設定顯示位置
{this.drawPos = pos;}
Sprite_ZzyGCFNumber.prototype.setTextPos = function(pos)
{this.drawPos = pos;}
Sprite_ZzyGCFNumber.prototype.setNumberPos = function(pos)
{this.drawPos = pos;}


Sprite_ZzyGCFNumber.prototype.setIsDynNumber = function(isEnable)//設定動態增分
{this.isDynNumber = isEnable;}

Sprite_ZzyGCFNumber.prototype.ExecuteDynNumber = function()//這個方法的公式可以用來重寫
{
	//不存在動態增分時
	if(!this.isDynNumber){this.showNumber = this.realNumber;return;}

	var disPar = this.realNumber - this.showNumber;
	this.dyning = true;
	
	if(disPar > 100000)
	{
		this.showNumber += 100000;
	}
	else if(disPar > 10000)
	{
		this.showNumber += 10000;
	}
	else if(disPar > 1000)
	{
		this.showNumber += 1000;
	}	
	else if(disPar > 100)
	{
		this.showNumber += 100;
	}
	else if(disPar > 10)
	{
		this.showNumber += 10;
	}
	else if(disPar > 1)
	{
		this.showNumber += 1;
	}
	else if(disPar < -100000)
	{
		this.showNumber -= 100000;
	}
	else if(disPar < -10000)
	{
		this.showNumber -= 10000;
	}
	else if(disPar < -1000)
	{
		this.showNumber -= 1000;
	}
	else if(disPar < -100)
	{
		this.showNumber -= 100;
	}
	else if(disPar < -10)
	{
		this.showNumber -= 10;
	}
	else if(disPar < -1)
	{
		this.showNumber -= 1;
	}
	else
	{
		this.showNumber = this.realNumber;
		//這是因為可能存在小數	
		this.dyning = false;
	}
}

Sprite_ZzyGCFNumber.prototype.isDyning = function()
{
	return this.dyning;
}


Sprite_ZzyGCFNumber.prototype.isNotUpdate = function()//不滿足更新的情況
{
	if(this.realNumber === this.showNumber)return false;//相同則不需要更新
	
	return true;
}

Sprite_ZzyGCFNumber.prototype.ForceSetNumber = function(number)
{
	this.realNumber = number;
	this.showNumber = number;
	this.refresh();
}

Sprite_ZzyGCFNumber.prototype.setShowNumber = function(number)//設定顯示值
{
	this.showNumber = number;
}

Sprite_ZzyGCFNumber.prototype.setNumber = function(number)
{
	this.realNumber = number;
}
Sprite_ZzyGCFNumber.prototype.setValue = function(value)
{
	this.realNumber = value;
}

Sprite_ZzyGCFNumber.prototype.addNumber = function(number)
{
	this.realNumber += number;
}

Sprite_ZzyGCFNumber.prototype.addValue = function(value)
{
	this.realNumber += value;
}

Sprite_ZzyGCFNumber.prototype.subNumber = function(number)
{
	this.realNumber -= number;
}

Sprite_ZzyGCFNumber.prototype.subValue = function(value)
{
	this.realNumber -= value;
}



Sprite_ZzyGCFNumber.prototype.borderWidth = function(width)//設定邊框寬度
{this.bitmap.outlineWidth = width;this.isRefresh = true;}

Sprite_ZzyGCFNumber.prototype.setBorderWidth = function(width)
{
	this.bitmap.outlineWidth = width;
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.hideBorder = function()
{
	//隱藏
	this.bitmap.outlineWidth = 0;
	this.setGradualColorOfBorder(['rgba(0,0,0,0)']);
	this.isRefresh = true;
}







Sprite_ZzyGCFNumber.prototype.addBorderWidth = function(width)
{
	this.bitmap.outlineWidth += width;
	this.isRefresh = true;
}


Sprite_ZzyGCFNumber.prototype.subBorderWidth = function(width)
{
	this.bitmap.outlineWidth -= width;
	this.isRefresh = true;
}


Sprite_ZzyGCFNumber.prototype.borderColor = function(colorStr)//設定邊框顏色
{this.bitmap.outlineColor = colorStr;this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.setBorderColor = function(colorStr)//設定邊框顏色
{this.bitmap.outlineColor = colorStr;this.isRefresh = true;}

Sprite_ZzyGCFNumber.prototype.borderRedColor = function()//紅
{this.bitmap.outlineColor = 'rgba(240,40,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderOrangeColor = function()//橙
{this.bitmap.outlineColor = 'rgba(240,120,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderYellowColor = function()//黃
{this.bitmap.outlineColor = 'rgba(240,240,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderEmeraldColor = function()//翠綠
{this.bitmap.outlineColor = 'rgba(120,240,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderGreenColor = function()//綠
{this.bitmap.outlineColor = 'rgba(40,240,40,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderTurquoiseColor = function()//青綠
{this.bitmap.outlineColor = 'rgba(40,240,120,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderCyanColor = function()//青
{this.bitmap.outlineColor = 'rgba(40,240,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderSeablueColor = function()//海藍
{this.bitmap.outlineColor = 'rgba(40,120,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderBlueColor = function()//藍
{this.bitmap.outlineColor = 'rgba(40,40,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderPurpleColor = function()//紫
{this.bitmap.outlineColor = 'rgba(120,40,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderPinkColor = function()//粉
{this.bitmap.outlineColor = 'rgba(240,40,240,1)';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.borderPinkredColor = function()//粉紅
{this.bitmap.outlineColor = 'rgba(240,40,120,1)';this.isRefresh = true;}


Sprite_ZzyGCFNumber.prototype.numberColor = function(colorStr)
{this.bitmap.textColor = colorStr;this.isRefresh = true;}

Sprite_ZzyGCFNumber.prototype.setNumberColor = function(colorStr)
{
	this.bitmap.textColor = colorStr;
	this.isRefresh = true;
}


Sprite_ZzyGCFNumber.prototype.numberRedColor = function()//紅
{this.bitmap.textColor = '#ff2222';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberOrangeColor = function()//橙
{this.bitmap.textColor = '#ff7f22';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberYellowColor = function()//黃
{this.bitmap.textColor = '#ffff22';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberEmeraldColor = function()//翠綠
{this.bitmap.textColor = '#7fff22';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberGreenColor = function()//綠
{this.bitmap.textColor = '#22ff22';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberTurquoiseColor = function()//青綠
{this.bitmap.textColor = '#22ff7f';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberCyanColor = function()//青
{this.bitmap.textColor = '#22ffff';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberSeablueColor = function()//海藍
{this.bitmap.textColor = '#227fff';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberBlueColor = function()//藍
{this.bitmap.textColor = '#2222ff';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberPurpleColor = function()//紫
{this.bitmap.textColor = '#7f22ff';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberPinkColor = function()//粉
{this.bitmap.textColor = '#ff22ff';this.isRefresh = true;}
Sprite_ZzyGCFNumber.prototype.numberPinkredColor = function()//粉紅
{this.bitmap.textColor = '#ff227f';this.isRefresh = true;}


Sprite_ZzyGCFNumber.prototype.Random12TextColor = function()//一個隨機12色文字
{
	var textColorFun = [this.numberRedColor,this.numberOrangeColor,this.numberYellowColor,this.numberEmeraldColor,this.numberGreenColor,this.numberTurquoiseColor,this.numberCyanColor,this.numberSeablueColor,this.numberBlueColor,this.numberPurpleColor,this.numberPinkColor,this.numberPinkredColor];
	
	var rcID = Zzy.GCF.RandomIntArea(0,12);
	textColorFun[rcID].call(this);
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.Random12BorderColor = function()//一個隨機12色邊框
{
	var borderColorFun = [this.borderRedColor,this.borderOrangeColor,this.borderYellowColor,this.borderEmeraldColor,this.borderGreenColor,this.borderTurquoiseColor,this.borderCyanColor,this.borderSeablueColor,this.borderBlueColor,this.borderPurpleColor,this.borderPinkColor,this.borderPinkredColor];	
	var rcID = Zzy.GCF.RandomIntArea(0,12);
	borderColorFun[rcID].call(this);
	this.isRefresh = true;
}

Sprite_ZzyGCFNumber.prototype.Random12Color = function()//一個隨機12色文字和邊框
{
	this.Random12TextColor();
	this.Random12BorderColor();
	this.isRefresh = true;
}




//==========================================================================
//Sprite_ZzyGCFAnimaBase
//==========================================================================

function Sprite_ZzyGCFAnimaBase() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGCFAnimaBase.prototype = Object.create(Sprite_ZzyGCFBase.prototype);
Sprite_ZzyGCFAnimaBase.prototype.constructor = Sprite_ZzyGCFAnimaBase;

Sprite_ZzyGCFAnimaBase.prototype.initialize = function(x,y,fileName,hue) 
{
	Sprite_ZzyGCFBase.prototype.initialize.call(this,x,y,fileName,hue);
	
	this.collection = this.bitmap;
	this.fileName = fileName;
	this.visible = this.DefaultAnimaVisible();//不顯示
	this.animaArr1 = [];//存放點陣圖的一維陣列
	this.animaArr2 = [];//存放點陣圖的二維陣列
	this.isWaitSplit = true;//等待拆分
	
	this.animaFrame = this.DefaultAnimationFrame();//預設動畫6幀播放一格
	this.animaSpeed = this.DefaultAnimationSpeed();//動畫播放速度,這會影響動畫速率,這個值預設為1
	this.animaMode = this.DefaultAnimationMode();//播放模式,一般分為單次,循環,乒乓
	this.animaCFrame = 0;//等待的計數
	
	this.animaIndex = this.DefaultAnimationIndex();//動畫下標
	this.isAnimaPause = this.DefaultAnimationPause();//動畫暫停
	this.isAnimaMirror = this.DefaultAnimaMirror();//是否映象播放動畫
	
	
	
	this.delayAnima = 0;//延遲播放
	this.isDelayAnima = false;//延遲判斷
	
	
	//模式2的參數
	this.isPingpangDir = false;//是否為乒乓反向中
	
	//模式3的參數
	this.animaLoopCount = 0;//循環圈數
}

Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimationPause = function()
{
	return false;
}

Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimaMirror = function()
{
	return false;
}

Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimaVisible = function()
{
	return false;
}



Sprite_ZzyGCFAnimaBase.prototype.update = function()
{
	Sprite_ZzyGCFBase.prototype.update.call(this);
	this.updateAnimaPicLoad();//更新載入
	
	if(this.updateAnimaDelay())return;//更新延遲
	this.updateAnimation();//更新動畫

}



Sprite_ZzyGCFAnimaBase.prototype.updateAnimaDelay = function()
{
	if(this.isDelayAnima)
	{
		if(this.delayAnima > 0)
		{
			this.delayAnima--;
			return false;
		}
		else
		{
			this.delayAnima = 0;
			this.isDelayAnima = false;
			return true;
		}
	}
	return false;
}



Sprite_ZzyGCFAnimaBase.prototype.updateAnimation = function()//更新動畫
{
	if(this.isAnimaPause)return;
	
	if(this.animaCFrame < this.animaFrame)
	{
		this.animaCFrame += this.animaSpeed;//新增幀數
	}
	else
	{
		this.animaCFrame -= this.animaFrame;
		//觸發一次變動
		this.AutoChangeAnimation();//自動切換動畫
	}
}


Sprite_ZzyGCFAnimaBase.prototype.AutoChangeAnimation = function()//自動執行動畫效果
{
	
	switch(this.animaMode)
	{
		case 1:
			this.ExecuteAnimaMode1();
		break;
		case 2:
			this.ExecuteAnimaMode2();
		break;
		case 3:
			this.ExecuteAnimaMode3();
		break;
	}
	
}



Sprite_ZzyGCFAnimaBase.prototype.ExecuteAnimaMode1 = function()//模式1循環,執行
{
	if(this.isAnimaMirror)//映象
	{this.PrevAnimaBitmap();}
	else
	{this.NextAnimaBitmap();}	
}


Sprite_ZzyGCFAnimaBase.prototype.ExecuteAnimaMode2 = function()//模式2乒乓,執行
{
	if(this.isAnimaMirror)//映象
	{
		if(this.isPingpangDir)
		{
			if(this.ReturnNextAnimaIndexButLimit() < 0)
			{
				this.ReturnPrevAnimaIndexButLimit();
				this.isPingpangDir = true;
			}			
		}
		else
		{
			if(this.ReturnPrevAnimaIndexButLimit() < 0)
			{
				this.ReturnNextAnimaIndexButLimit();
				this.isPingpangDir = false;
			}			
		}
	}
	else
	{
		if(this.isPingpangDir)
		{
			if(this.ReturnPrevAnimaIndexButLimit() < 0)
			{
				this.ReturnNextAnimaIndexButLimit();
				this.isPingpangDir = false;
			}
		}
		else
		{
			if(this.ReturnNextAnimaIndexButLimit() < 0)
			{
				this.ReturnPrevAnimaIndexButLimit();
				this.isPingpangDir = true;
			}
		}
	}
	this.setAnimaBitmap(this.animaIndex);
}


Sprite_ZzyGCFAnimaBase.prototype.ExecuteAnimaMode3 = function()//模式3循環一定次數,執行
{
	if(this.isAnimaMirror)//映象
	{
		if(this.ReturnPrevAnimaIndexButLimit() < 0)
		{
			this.animaLoopCount--;
			if(this.animaLoopCount<=0)
			{
				this.animaLoopCount = 0;
				this.animaMode = 0;
			}
		}
	}
	else
	{
		if(this.ReturnNextAnimaIndexButLimit() < 0)
		{
			this.animaLoopCount--;
			if(this.animaLoopCount<=0)
			{
				this.animaIndex = 0;
				this.animaLoopCount = 0;
				this.animaMode = 0;
			}			
		}
		
	}
	this.setAnimaBitmap(this.animaIndex);
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimaMode = function(mode,count)//設定模式
{
	switch(mode)
	{
		case 0:this.animaMode = 0;break;
		case 1:case 'loop':this.animaMode = 1;break;
		case 2:case 'pingpang':this.animaMode = 2;break;
		case 3:
			this.animaMode = 3;
			this.animaLoopCount = count > 0 ? count : 1;
			break;
		default:
		this.animaMode = 0;
	}
}

Sprite_ZzyGCFAnimaBase.prototype.updateAnimaPicLoad = function()
{
	if(!this.isWaitSplit)return false;
		if(this.collection.width && this.collection.height)//載入完成
		{
			//拆分
			this.animaArr1 = Zzy.GCF.SplitPictureToArr1(this.fileName,this.collection);
			this.animaArr2 = Zzy.GCF.SplitPictureToArr2(this.fileName,this.collection);
			this.startAnimaShow();//顯示
			this.isWaitSplit = false;
		}
	return true;
}



Sprite_ZzyGCFAnimaBase.prototype.setAnimaIndex = function(index)
{
	//設定範圍
	var ti = index ? index : 0;
	//防止越界 
	ti = Math.min(ti,this.animaArr1.length-1);
	this.animaIndex = ti;
}

Sprite_ZzyGCFAnimaBase.prototype.getAnimaIndex = function()
{
	return this.animaIndex;
}

Sprite_ZzyGCFAnimaBase.prototype.getAnimaBitmapIndex = function()//獲取目前下標
{
	return this.animaIndex;
} 



Sprite_ZzyGCFAnimaBase.prototype.startAnimaShow = function()//開始播放動畫
{
	this.bitmap = this.animaArr1[this.animaIndex];
	this.visible = true;
}

Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimationFrame = function()
{
	//預設動畫幀，這代表經過多少幀數會播放一格動畫
	return 6;
}

Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimationSpeed = function()
{
	return 1;
}

Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimationMode = function()//播放模式
{
	//0代表無型別//1代表循環//2代表乒乓//3代表單次
	return 1;
}


Sprite_ZzyGCFAnimaBase.prototype.DefaultAnimationIndex = function()//預設開始下標
{
	return 0;//預設開始時的下標
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimationFrame = function(animaFrame)//設定每幀動畫執行時長
{
	this.animaFrame = animaFrame;
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimationSpeed = function(animaSpeed)//設定每幀的執行速度
{
	this.animaSpeed = animaSpeed;
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimationMode = function(animaMode)//設定動畫模式
{
	this.animaMode = animaMode;
}




Sprite_ZzyGCFAnimaBase.prototype.setAnimaMirror = function(isEnable)
{
	this.isAnimaMirror = isEnable;
}

Sprite_ZzyGCFAnimaBase.prototype.changeAnimaMirror = function()//切換播放
{
	this.isAnimaMirror = !this.isAnimaMirror;
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimaDelay = function(delay)//設定延遲
{
	this.delayAnima = delay;
	this.isDelayAnima = true;	
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimaPause = function(isEnable)
{
	this.isAnimaPause = isEnable;
}


Sprite_ZzyGCFAnimaBase.prototype.changeAnimaPause = function()
{
	this.isAnimaPause = !this.isAnimaPause;
}




Sprite_ZzyGCFAnimaBase.prototype.PrevAnimaBitmap = function()//切換到前一張圖片
{
	this.animaIndex--;
	if(this.animaIndex<0){this.animaIndex = this.animaArr1.length-1;}
	this.bitmap = this.animaArr1[this.animaIndex];
}

Sprite_ZzyGCFAnimaBase.prototype.NextAnimaBitmap = function()//切換到下一張圖片
{
	this.animaIndex = (this.animaIndex+1)%this.animaArr1.length;
	this.bitmap = this.animaArr1[this.animaIndex];
}

Sprite_ZzyGCFAnimaBase.prototype.setAnimaBitmap = function(animaIndex)
{
	this.bitmap = this.animaArr1[animaIndex];
}

Sprite_ZzyGCFAnimaBase.prototype.ReturnPrevAnimaIndexButLimit = function()//返回前一個座標但是有邊界
{
	this.animaIndex--;
	if(this.animaIndex < 0)
	{
		this.animaIndex = 0;
		return -1;
	}
	return this.animaIndex;
}

Sprite_ZzyGCFAnimaBase.prototype.ReturnNextAnimaIndexButLimit = function()//返回下一個座標但是有邊界
{
	this.animaIndex++;
	if(this.animaIndex >= this.animaArr1.length)
	{
		this.animaIndex = this.animaArr1.length-1;
		return -1;
	}
	return this.animaIndex;
}


//==========================================================================
//Sprite_ZzyGCFSelectCursorBase
//==========================================================================
//游標可以調整位置資訊,注意游標要為動畫型別


function Sprite_ZzyGCFSelectCursorBase() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGCFSelectCursorBase.prototype = Object.create(Sprite_ZzyGCFAnimaBase.prototype);
Sprite_ZzyGCFSelectCursorBase.prototype.constructor = Sprite_ZzyGCFSelectCursorBase;

Sprite_ZzyGCFSelectCursorBase.prototype.initialize = function(fileName,hue,isAnima) 
{
	var x = Graphics.boxWidth/2;
	var y = Graphics.boxHeight/2;
	
	this.isAnima = isAnima ? true : false;
	Sprite_ZzyGCFAnimaBase.prototype.initialize.call(this,x,y,fileName,hue);

	this.selectList = [];
	this.selectIndex = this.defaultSelectIndex();//選擇下標
	this.isCanUpLoop = this.defaultUpLoop();//允許下標上循環
	this.isCanDownLoop = this.defaultDownLoop();//允許下標下循環
	this.offSetList = [];//偏移列表
	this.functionList = [];//函式列表
	
	this.isResponseMouse = this.defaultResponseMouse();//是否響應滑鼠
	this.isResponseKey = this.defaultResponseKey();//是否響應鍵盤
	
	this.isDelaySelectCommand = false;//延遲選擇命令
	this.delaySelectCommand = 0;
	this.CdelaySelectCommand = 0;
	this.executeFunction = null;
	
}


Sprite_ZzyGCFSelectCursorBase.prototype.updateAnimaPicLoad = function()
{
	if(this.isAnima)
	{
		Sprite_ZzyGCFAnimaBase.prototype.updateAnimaPicLoad.call(this);
	}
	else
	{
		this.isWaitSplit = false;
		this.startAnimaShow();//顯示
		this.animaArr1 = [this.bitmap];
	}
	
}



Sprite_ZzyGCFSelectCursorBase.prototype.update = function()
{
	Sprite_ZzyGCFAnimaBase.prototype.update.call(this);
	
	this.updateResponseMouse();
	this.updateSelectCommand();//執行選擇指令
}

Sprite_ZzyGCFSelectCursorBase.prototype.updateResponseMouse = function()
{
	if(!this.isResponseMouse)return;
	var len = this.selectList.length;
	
	for(var i=0;i<len;i++)
	{
		var fw = this.selectList[i].bitmap.width/2;
		var fh = this.selectList[i].bitmap.height/2;
		
		var rect = {left:this.selectList[i].x-fw,right:this.selectList[i].x+fw,up:this.selectList[i].y-fh,down:this.selectList[i].y+fh};
		var pt = {x:Zzy.GCF.MoveX,y:Zzy.GCF.MoveY}; 

		if(Zzy.GCF.PtInRect(pt,rect))//在範圍中
		{
			this.setSelectIndex(i);//設定下標
			return;
		}
		
	}
}

Sprite_ZzyGCFSelectCursorBase.prototype.updateSelectCommand = function()
{
	if(!this.isDelaySelectCommand)return;
	
	if(this.CdelaySelectCommand < this.delaySelectCommand)
	{
		this.CdelaySelectCommand++;
	}
	else
	{
		this.CdelaySelectCommand = 0;
		this.delaySelectCommand = 0;
		this.isDelaySelectCommand = false;
		this.executeFunction();//執行
	}
	
}

	
	

Sprite_ZzyGCFSelectCursorBase.prototype.defaultResponseKey = function()
{
	return true;
}

Sprite_ZzyGCFSelectCursorBase.prototype.defaultResponseMouse = function()
{
	return true;
}

Sprite_ZzyGCFSelectCursorBase.prototype.defaultDownLoop = function()//允許下標下循環
{
	return true;
}

Sprite_ZzyGCFSelectCursorBase.prototype.defaultUpLoop = function()//允許下標上循環
{
	return true;
}

Sprite_ZzyGCFSelectCursorBase.prototype.defaultSelectIndex = function()
{
	return 0;
}

Sprite_ZzyGCFSelectCursorBase.prototype.clearSelectList = function()//新增精靈對像
{
	this.selectList = [];
	this.offSetList = [];
}

Sprite_ZzyGCFSelectCursorBase.prototype.pushSelectSpr = function(spr,offsetX,offsetY)//新增精靈對像,參數2,3代表偏移
{
	offsetX = offsetX ? offsetX : 0;
	offsetY = offsetY ? offsetY : 0;
	
	var index = this.selectList.length;
	this.selectList.push(spr);
	this.offSetList[index] = {ofx:offsetX,ofy:offsetY};
}


Sprite_ZzyGCFSelectCursorBase.prototype.pushSelectSprArr = function(sprArr,offsetX,offsetY)////新增精靈對像組,參數2,3代表偏移
{
	var len = sprArr.length;
	for(var i=0;i<len;i++)
	{
		var tSpr = sprArr[i];
		if(!tSpr)continue;
		this.pushSelectSpr(tSpr,offsetX,offsetY);
	}
}


Sprite_ZzyGCFSelectCursorBase.prototype.popSelectSpr = function()
{
	if(this.selectList.length)
	{
		this.offSetList[this.selectList.length-1] = null;
		return this.selectList.pop();
	}
	return null;
}

Sprite_ZzyGCFSelectCursorBase.prototype.insertSelectSpr = function(index,spr,offsetX,offsetY)
{
	offsetX = offsetX ? offsetX : 0;
	offsetY = offsetY ? offsetY : 0;	
	
	//判斷是否超過了最大長度
	var len = this.selectList.length;
	index = index < len ? index : len; 
	//向後騰出位置
	for(var i=len-1;i>=index;i++)
	{
		this.selectList[i+1] = this.selectList[i];
		this.offSetList[i+1] = this.offSetList[i];
	}
	this.selectList[index] = spr;
	this.offSetList[index] = {ofx:offsetX,ofy:offsetY};
}

Sprite_ZzyGCFSelectCursorBase.prototype.insertSelectSprArr = function(index,sprArr,offsetX,offsetY)
{
	var len = sprArr.length;
	for(var i=0;i<len;i++)
	{
		var tSpr = sprArr[i];
		if(!tSpr)continue;
		this.insertSelectSpr(index+i,tSpr,offsetX,offsetY);
	}
}


Sprite_ZzyGCFSelectCursorBase.prototype.removeSelectSpr = function(index,spr)
{
	var len = this.selectList.length;
	if(index >= len)return null;
	var reSpr = this.selectList[index];
	
	for(var i=index;i<len-1;i++)
	{
		this.selectList[i] = this.selectList[i+1];
	}
	this.offSetList[this.selectList.length-1] = null;
	this.selectList.pop();
	return reSpr;
}

Sprite_ZzyGCFSelectCursorBase.prototype.getSelectIndex = function()
{
	return this.selectIndex;
}


Sprite_ZzyGCFSelectCursorBase.prototype.setSelectOffset = function(index,offsetX,offsetY)
{
	if(index >= this.selectList.length)return false;
	this.offSetList[index] = this.offSetList[index] || {};
	this.offSetList[index].ofx = offsetX;
	this.offSetList[index].ofy = offsetY;
	return true;
}

Sprite_ZzyGCFSelectCursorBase.prototype.addSelectOffset = function(index,offsetX,offsetY)
{
	if(index >= this.selectList.length)return false;
	this.offSetList[index] = this.offSetList[index] || {};
	this.offSetList[index].ofx += offsetX;
	this.offSetList[index].ofy += offsetY;
	return true;	
}


Sprite_ZzyGCFSelectCursorBase.prototype.subSelectOffset = function(index,offsetX,offsetY)
{
	if(index >= this.selectList.length)return false;
	this.offSetList[index] = this.offSetList[index] || {};
	this.offSetList[index].ofx -= offsetX;
	this.offSetList[index].ofy -= offsetY;
	return true;	
}


Sprite_ZzyGCFSelectCursorBase.prototype.setAllSelectOffset = function(offsetX,offsetY)//設定所有的偏移為指定值
{
	offsetX = offsetX ? offsetX : 0;
	offsetY = offsetY ? offsetY : 0;		
	var len = this.selectList.length;
	for(var i=0;i<len;i++)
	{
		this.offSetList[i] = {ofx:offsetX,ofy:offsetY};
	}
}

Sprite_ZzyGCFSelectCursorBase.prototype.addAllSelectOffset = function(addOfx,addOfy)
{
	var len = this.selectList.length;
	for(var i=0;i<len;i++)
	{
		this.offSetList[i].ofx += addOfx;
		this.offSetList[i].ofy += addOfy;
	}	
}

Sprite_ZzyGCFSelectCursorBase.prototype.subAllSelectOffset = function(subOfx,subOfy)
{
	var len = this.selectList.length;
	for(var i=0;i<len;i++)
	{
		this.offSetList[i].ofx -= subOfx;
		this.offSetList[i].ofy -= subOfy;
	}	
}

Sprite_ZzyGCFSelectCursorBase.prototype.setSelectIndex = function(index)//設定下標值
{
	var tIndex = Math.min(this.selectList.length-1,Math.max(0,index));
	this.selectIndex = tIndex;
	this.CursorMove();
}

Sprite_ZzyGCFSelectCursorBase.prototype.NextSelect = function(count)//切換到下面的選擇
{
	count = count ? count : 1;
	this.selectIndex += count;
	
	if(this.selectIndex >= this.selectList.length)
	{
		if(this.isCanDownLoop)
		{
			this.selectIndex = this.selectIndex % this.selectList.length;
		}
		else
		{
			this.selectIndex = this.selectList.length-1;
		}
	}
	this.CursorMove();
}

Sprite_ZzyGCFSelectCursorBase.prototype.PrevSelect = function(count)//切換到前面的選擇
{
	count = count ? count : 1;
	this.selectIndex -= count;
	
	if(this.selectIndex < 0)
	{
		if(this.isCanUpLoop)
		{
			this.selectIndex = this.selectIndex % this.selectList.length;
			if(this.selectIndex < 0)
			{
				this.selectIndex += this.selectList.length;//變為正數
			}
		}
		else
		{
			this.selectIndex = 0;
		}
	}
	this.CursorMove();
}

Sprite_ZzyGCFSelectCursorBase.prototype.CursorMove = function()//游標移動方式
{
	this.x = this.selectList[this.selectIndex].x + this.offSetList[this.selectIndex].ofx;
	this.y = this.selectList[this.selectIndex].y + this.offSetList[this.selectIndex].ofy;
}

Sprite_ZzyGCFSelectCursorBase.prototype.BindSelectFunction = function(index,Fun)
{
	this.functionList[index] = Fun;//繫結函式
	
}

Sprite_ZzyGCFSelectCursorBase.prototype.BindSelectCommand = function(index,Fun)
{
	this.functionList[index] = Fun;//繫結函式
	
}

Sprite_ZzyGCFSelectCursorBase.prototype.ExecuteCommand = function(delay)//執行命令,滿足延遲
{	
	this.isDelaySelectCommand = true;//延遲選擇命令
	this.delaySelectCommand = delay ? delay : 0;
	this.CdelaySelectCommand = 0;
	this.executeFunction = this.functionList[this.selectIndex];
}




//==========================================================================
//Sprite_ZzyGCFTileBase
//==========================================================================

function Sprite_ZzyGCFTileBase() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGCFTileBase.prototype = Object.create(TilingSprite.prototype);
Sprite_ZzyGCFTileBase.prototype.constructor = Sprite_ZzyGCFTileBase;

Sprite_ZzyGCFTileBase.prototype.initialize = function(width,height,value,fileName,hue) 
{
	TilingSprite.prototype.initialize.call(this);
	this.originzWidth = width ? width : 0;
	this.originzHeigth = height ? height : 0;
	this.originValue = value ? value : 0;

	this.loadBitmap(fileName,hue);
	
	this.posX = 0;
	this.posY = 0;
	
	this.zWidth = width;	
	this.zHeight = height;
	
	this.value = value;//這個值會決定width或者height的變化
	this.isHorizontalRate = true;//水平比率確認寬度
	this.isVerticalRate = false;//垂直比率確認寬度
	
	
	this.rate = this.value / this.originValue;
	
	//最大,最小比率
	this.isRateLimit = true;//是否有rate限制
	this.minRate = 0;
	this.maxRate = 1;
	
	
	this.offsetX = 0;//偏移X
	this.offsetY = 0;//偏移Y
	this.offsetStartX = 0;
	this.offsetStartY = 0;
	this.offsetRealX = 0;//真實偏移
	this.offsetRealY = 0;//真實偏移
	this.isOffsetTimingX = false;
	this.offsetTimeX = 0;//這是漸入,漸出偏移的時長
	this.offsetCTimeX = 0;
	this.isOffsetTimingY = false;
	this.offsetTimeY = 0;//這是漸入,漸出偏移的時長
	this.offsetCTimeY = 0;
	
	this.isRefresh = true;//是否需要重新整理數據
	
	this.panSprite = undefined;//繫結到對像上,跟隨移動
	this.panOffsetX = 0;//偏移
	this.panOffsetY = 0;
	this.panScaleOrgX = 0;
	this.panScaleOrgY = 0;

	this.panScaleRateX = 1;
	this.panScaleRateY = 1;

	this.isPanOpacity = false;
	this.isPanScale = false;
	
	this.delayTime = 0;//延遲時間
	this.isDelaying = false;//延遲中	
	
	
	//動態數據的相關操作
	this.valuing = false;//操作中
	this.startValue = 0;
	this.endValue = 0;
	this.valueSpeed = 0;
	this.valueTime = 0;
	this.valueCTime = 0;
	this.valuePer = 0;
	this.valueMode = 0;//動態模式
	
	this.move(this.posX,this.posY,this.zWidth,this.zHeight);
}


Sprite_ZzyGCFTileBase.prototype.loadBitmap = function(fileName,hue)//點陣圖
{
	this.bitmap = Zzy.GCF.LoadPicture(fileName,hue);//點陣圖
}


Sprite_ZzyGCFTileBase.prototype.Pan = function(sprite)//這將繫結到精靈上
{
	this.panOffsetX = sprite.x - this.x;
	this.panOffsetY = sprite.y - this.y;
	
	this.panSprite = sprite;
}

Sprite_ZzyGCFTileBase.prototype.PanOpacity = function()//同步Opacity
{
	this.isPanOpacity = true;
	
}

Sprite_ZzyGCFTileBase.prototype.PanScale = function()//同步Scale
{
	this.isPanScale = true;
	this.panScaleOrgX = this.panSprite.tempScaleX;
	this.panScaleOrgY = this.panSprite.tempScaleY;
	this.panScaleRateX = 1;
	this.panScaleRateY = 1;
}


Sprite_ZzyGCFTileBase.prototype.PanCenter = function(sprite,offX,offY)//繫結到精靈的中心,同時新增偏移
{
	var offX2 = offX ? offX : 0;
	var offY2 = offY ? offY : 0;
	
	var x = sprite.x - this.zWidth / 2 + offX2;
	var y = sprite.y - this.zHeight / 2 + offY2;
	
	this.setPostion(x,y);
	this.Pan(sprite);
}

Sprite_ZzyGCFTileBase.prototype.PanPointer = function(sprite,pointer,offX,offY)//通過不同的點進行繫結
{
	var offX2 = 0;
	var offY2 = 0;
	switch(pointer)//圖片的九個點的位置
	{
		case 'leftup':case 1:
		offX2 = -sprite.bitmap.width / 2;
		offY2 = -sprite.bitmap.height / 2;
		break;
		case 'up':case 2:
		offY2 = -sprite.bitmap.height / 2;
		break;
		case 'rightup':case 3:
		offX2 = sprite.bitmap.width / 2;
		offY2 = -sprite.bitmap.height / 2;
		break;
		case 'left':case 4:
		offX2 = -sprite.bitmap.width / 2;
		break;
		case 'center':case 5:break;
		case 'right':case 6:
		offX2 = sprite.bitmap.width / 2;
		break;
		case 'leftdown':case 7:
		offX2 = -sprite.bitmap.width / 2;
		offY2 = sprite.bitmap.height / 2;
		break;
		case 'down':case 8:
		offY2 = sprite.bitmap.height / 2;
		break;
		case 'rightdown':case 9:
		offX2 = sprite.bitmap.width / 2;
		offY2 = sprite.bitmap.height / 2;
		break;
	}
	
	this.PanCenter(sprite,offX + offX2,offY + offY2);
	
}



Sprite_ZzyGCFTileBase.prototype.unPan = function()//這將取消對精靈的繫結
{
	this.panSprite = undefined;
	this.panOffsetX = 0;
	this.panOffsetY = 0;
	this.isPanOpacity = false;
	this.isPanScale = false;
}


Sprite_ZzyGCFTileBase.prototype.isInDelaying = function()
{
	return this.isDelay;
}

Sprite_ZzyGCFTileBase.prototype.setDelay = function(delay)
{
	this.delayTime = delay;//延遲時間
	this.isDelaying = true;
}

Sprite_ZzyGCFTileBase.prototype.addDelay = function(delay)
{
	this.delayTime += delay;//延遲時間
	this.isDelaying = true;
}
Sprite_ZzyGCFTileBase.prototype.subDelay = function(delay)
{
	this.delayTime -= delay;//延遲時間
	if(this.delayTime < 0)this.delayTime = 0;
}



Sprite_ZzyGCFTileBase.prototype.getMaxValue = function()
{
	return this.originValue;
}

Sprite_ZzyGCFTileBase.prototype.setMaxValue = function(maxValue)
{
	this.originValue = maxValue;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.addMaxValue = function(maxValue)
{
	this.originValue += maxValue;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.subMaxValue = function(maxValue)
{
	this.originValue -= maxValue;
	this.isRefresh = true;
}


Sprite_ZzyGCFTileBase.prototype.setOffsetX = function(offsetX,time)//設定捲動的方向和速度
{
	this.offsetX = offsetX;
	if(!time)
	{
		this.isOffsetTimingX = false;
		this.offsetRealX = offsetX;
	}
	else
	{
		this.isOffsetTimingX = true;
		this.offsetStartX = this.offsetRealX;
		this.offsetTimeX = time;
		this.offsetCTimeX = 0;
	}
}

Sprite_ZzyGCFTileBase.prototype.setOffsetY = function(offsetY,time)//設定捲動的方向和速度
{
	this.offsetY = offsetY;
	if(!time)
	{
		this.isOffsetTimingY = false;
		this.offsetRealY = offsetY;
	}
	else
	{
		this.isOffsetTimingY = true;
		this.offsetStartY = this.offsetRealY;
		this.offsetTimeY = time;
		this.offsetCTimeY = 0;
	}
}

Sprite_ZzyGCFTileBase.prototype.setOffsetXY = function(offsetX,offsetY,time)
{
	this.setOffsetX(offsetX,time);
	this.setOffsetY(offsetY,time);
}


Sprite_ZzyGCFTileBase.prototype.setPostion = function(x,y)
{
	this.posX = x;
	this.posY = y;
	
	this.move(this.posX,this.posY,this.zWidth,this.zHeight);
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.setPosition = function(x,y)
{
	this.setPostion(x,y);
}



Sprite_ZzyGCFTileBase.prototype.setValue = function(value)//設定數值
{
	this.value = value;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.addValue = function(value)//新增數值
{
	this.value += value;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.subValue = function(value)//減少數值
{
	this.value -= value;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.setPer = function(per)//設定百分比
{
	this.value = this.originValue * per * 0.01;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.addPer = function(per)//新增百分比
{
	this.value += this.originValue * per * 0.01;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.subPer = function(per)//減少百分比
{
	this.value -= this.originValue * per * 0.01;
	this.isRefresh = true;
}



Sprite_ZzyGCFTileBase.prototype.setValueOfSpeed = function(value,speed)
{
	this.valuing = true;//操作中
	this.startValue = this.value;
	this.endValue = value;
	this.valueSpeed = speed;
	this.valueMode = 1;
}

Sprite_ZzyGCFTileBase.prototype.setValueOfTime = function(value,time)
{
	this.valuing = true;//操作中
	this.startValue = this.value;
	this.endValue = value;
	this.valueTime = time;
	this.valueCTime = 0;
	this.valueMode = 2;
}

Sprite_ZzyGCFTileBase.prototype.setValueOfPer = function(value,per)
{
	this.valuing = true;//操作中
	this.startValue = this.value;
	this.endValue = value;
	this.valuePer = per;	
	this.valueMode = 3;
}

Sprite_ZzyGCFTileBase.prototype.addValueOfSpeed = function(value,speed)
{
	var value2 = value + this.value;
	this.setValueOfSpeed(value2,speed);
}

Sprite_ZzyGCFTileBase.prototype.addValueOfTime = function(value,time)
{
	var value2 = value + this.value;
	this.setValueOfTime(value2,time);	
}

Sprite_ZzyGCFTileBase.prototype.addValueOfPer = function(value,per)
{
	var value2 = value + this.value;
	this.setValueOfPer(value2,per);	
}

Sprite_ZzyGCFTileBase.prototype.subValueOfSpeed = function(value,speed)
{
	var value2 = this.value - value;
	this.setValueOfSpeed(value2,speed);
}

Sprite_ZzyGCFTileBase.prototype.subValueOfTime = function(value,time)
{
	var value2 = this.value - value;
	this.setValueOfTime(value2,time);	
}

Sprite_ZzyGCFTileBase.prototype.subValueOfPer = function(value,per)
{
	var value2 = this.value - value;
	this.setValueOfPer(value2,per);	
}


Sprite_ZzyGCFTileBase.prototype.setPerOfSpeed = function(per,speed)//設定百分比
{
	//計算出value的相對值
	var tempValue = this.originValue * per * 0.01;
	this.setValueOfSpeed(tempValue,speed);
}

Sprite_ZzyGCFTileBase.prototype.addPerOfSpeed = function(per,speed)//設定百分比
{
	//計算出value的相對值
	var tempValue = this.originValue * per * 0.01;
	this.addValueOfSpeed(tempValue,speed);
}

Sprite_ZzyGCFTileBase.prototype.subPerOfSpeed = function(per,speed)//設定百分比
{
	//計算出value的相對值
	var tempValue = this.originValue * per * 0.01;
	this.subValueOfSpeed(tempValue,speed);
}


Sprite_ZzyGCFTileBase.prototype.setPerOfTime = function(per,time)//設定百分比
{
	var tempValue = this.originValue * per * 0.01;
	this.setValueOfTime(tempValue,time);
}

Sprite_ZzyGCFTileBase.prototype.addPerOfTime = function(per,time)//設定百分比
{
	var tempValue = this.originValue * per * 0.01;
	this.addValueOfTime(tempValue,time);
}

Sprite_ZzyGCFTileBase.prototype.subPerOfTime = function(per,time)//設定百分比
{
	var tempValue = this.originValue * per * 0.01;
	this.subValueOfTime(tempValue,time);
}

Sprite_ZzyGCFTileBase.prototype.setPerOfPer = function(per1,per2)//設定百分比
{
	var tempValue = this.originValue * per1 * 0.01;
	this.setValueOfPer(tempValue,per2);
}

Sprite_ZzyGCFTileBase.prototype.addPerOfPer = function(per1,per2)//設定百分比
{
	var tempValue = this.originValue * per1 * 0.01;
	this.addValueOfPer(tempValue,per2);
}

Sprite_ZzyGCFTileBase.prototype.subPerOfPer = function(per1,per2)//設定百分比
{
	var tempValue = this.originValue * per1 * 0.01;
	this.subValueOfPer(tempValue,per2);
}


Sprite_ZzyGCFTileBase.prototype.getValue = function()//獲取數值
{
	return this.value;
}


Sprite_ZzyGCFTileBase.prototype.closeIsRateLimit = function()//關閉限制
{
	this.isRateLimit = false;
}

Sprite_ZzyGCFTileBase.prototype.startIsRateLimit = function(min,max)//啟用限制
{
	this.isRateLimit = true;
	
	if(min){this.minRate = min;}
	if(max){this.maxRate = max;}
	
	this.isRefresh = true;
}


Sprite_ZzyGCFTileBase.prototype.closeHorizontalRate = function()
{
	this.isHorizontalRate = false;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.startHorizontalRate = function()
{
	this.isHorizontalRate = true;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.closeVerticalRate = function()
{
	this.isVerticalRate = false;
	this.isRefresh = true;
}

Sprite_ZzyGCFTileBase.prototype.startVerticalRate = function()
{
	this.isVerticalRate = true;
	this.isRefresh = true;
}


Sprite_ZzyGCFTileBase.prototype.setIsRateLimit = function(min,max)//設定限制
{
	var min = min ? min : 0;
	var max = max ? max : 0;
	this.minRate = min;
	this.maxRate = max;
}



Sprite_ZzyGCFTileBase.prototype.Refresh = function()
{
	
	this.rate = this.value / this.originValue;
	
	if(this.isRateLimit)//如果有限制範圍,則進行限制
	{this.rate = Math.max(Math.min(this.rate,this.maxRate),this.minRate);}

	
	
	//重新整理位置對比
	var tempWidth = this.originzWidth;
	var tempHeight = this.originzHeigth;
	

	
	if(this.isHorizontalRate){tempWidth *= this.rate;}
	if(this.isVerticalRate){tempHeight *= this.rate;}
	
	
	this.zWidth = tempWidth;
	this.zHeight = tempHeight;
	this.move(this.posX,this.posY,this.zWidth,this.zHeight);//重新設定位置資訊
	

}




Sprite_ZzyGCFTileBase.prototype.update = function()
{
	TilingSprite.prototype.update.call(this);
	
	if(this.isRefresh)//是否需要重新整理
	{
		this.Refresh();//重新整理
		this.isRefresh = false;
	}
	
	this.updateTime();//更新計時
	this.updateDate();//更新數據
	this.updateScroll();//更新捲動
}





Sprite_ZzyGCFTileBase.prototype.updateTime = function()
{
	if(this.isDelaying)//延遲不會執行以下的time
	{
		this.delayTime--;
		if(this.delayTime <= 0)
		{
			this.delayTime = 0;
			this.isDelaying = false;
		}
		return;
	}	
	
	
	
	
	if(this.isOffsetTimingX)
	{
		if(this.offsetCTimeX < this.offsetTimeX)
		{
			this.offsetCTimeX++;
		}
		else
		{
			this.offsetCTimeX = this.offsetTimeX;
			this.isOffsetTimingX = false;
			this.offsetRealX = this.offsetX;
		}
	}
	
	if(this.isOffsetTimingY)
	{
		if(this.offsetCTimeY < this.offsetTimeY)
		{
			this.offsetCTimeY++;
		}
		else
		{
			this.offsetCTimeY = this.offsetTimeY;
			this.isOffsetTimingY = false;
			this.offsetRealY = this.offsetY;
		}		
	}
	
	
	
}



Sprite_ZzyGCFTileBase.prototype.updateDate = function()
{
	//更新位置資訊
	if(this.panSprite)
	{
		if(this.isPanOpacity)
		{
			this.opacity = this.panSprite.opacity;
		}
		if(this.isPanScale)
		{
			this.scale.x = this.panSprite.tempScaleX;
			this.scale.y = this.panSprite.tempScaleY;
			
			if(this.panScaleOrgX !== this.panSprite.tempScaleX)
			{
				this.panScaleRateX = this.panSprite.tempScaleX / this.panScaleOrgX;
			}
			if(this.panScaleOrgY !== this.panSprite.tempScaleY)
			{
				this.panScaleRateY = this.panSprite.tempScaleY / this.panScaleOrgY;
			}
			
		}
		
		this.move((this.panSprite.x - this.panOffsetX  * this.panScaleRateX),
		(this.panSprite.y - this.panOffsetY * this.panScaleRateY),
		this.zWidth,this.zHeight);//重新設定位置資訊
	}

	if(this.isOffsetTimingX)
	{this.offsetRealX = (this.offsetX - this.offsetStartX) * this.offsetCTimeX / this.offsetTimeX;}

	if(this.isOffsetTimingY)
	{this.offsetRealY = (this.offsetY - this.offsetStartY) * this.offsetCTimeY / this.offsetTimeY;}


	//更新value的數據變化
	
	this.updateValue();


}
Sprite_ZzyGCFTileBase.prototype.updateValue = function()
{
	if(!this.valuing)return;
	
	this.isRefresh = true;
	
	switch(this.valueMode)
	{
		case 1:
		this.value = Zzy.GCF.startToEndOfSpeed(this.value,this.endValue,this.valueSpeed);
		if(this.value === this.endValue)
		{this.valuing = false;}
		
		break;
		
		case 2:
		this.valueCTime++;
		this.value = Zzy.GCF.startToEndOfTime(this.startValue,this.endValue,this.valueTime,this.valueCTime);
		if(this.value === this.endValue)
		{
			this.valueCTime = 0;
			this.valueTime = 0;
			this.valuing = false;
		}
		break;
		
		case 3:
		this.value = Zzy.GCF.startToEndOfPer(this.value,this.endValue,this.valuePer,0.1);
		if(this.value === this.endValue)
		{
			this.valuing = false;
		}
		break;
	}
	
	
}



Sprite_ZzyGCFTileBase.prototype.updateScroll = function()
{
	if(this.offsetRealX)
	{
		this.origin.x -= this.offsetRealX;
	}
	
	if(this.offsetRealY)
	{
		this.origin.y -= this.offsetRealY;
	}
	
}



//==========================================================================
//Sprite_ZzyGCFBatchBase
//==========================================================================

function Sprite_ZzyGCFBatchBase() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGCFBatchBase.prototype = Object.create(Sprite_ZzyGCFAnimaBase.prototype);
Sprite_ZzyGCFBatchBase.prototype.constructor = Sprite_ZzyGCFBatchBase;
Sprite_ZzyGCFBatchBase.prototype.initialize = function(addWindowPointer) //需要新增參數 精靈源 視窗指針
{
	Sprite_ZzyGCFBase.prototype.initialize.call(this,0,0,'',0);
	this.bitmap = this.DefaultBitmap();
	this.addWindowPointer = addWindowPointer ? addWindowPointer : undefined;

	this.line = this.DefaultLine();
	this.list = this.DefaultList();
	this.anchorX = this.DefaultAnchorX();
	this.anchorY = this.DefaultAnchorY();
	this.sizeX = this.DefaultSizeX(); 
	this.sizeY = this.DefaultSizeY();
	this.exSpaceX = this.DefaultExSpaceX();
	this.exSpaceY = this.DefaultExSpaceY();
	this.offSprX = this.DefaultOffSprX();
	this.offSprY = this.DefaultOffSprY();
	
	this.offX = 0;
	this.offY = 0;
	
	this.isRefresh = true;//是否重新整理
	
	this.sprArr = [];//對像池
	this.sprArr2 = [];//存放數據內容的陣列
	
	this.DefaultPosition();//設定xy位置	
	this.ResetInfo(this.line,this.list);//初始化
	
	if(this.addWindowPointer){this.addWindowPointer.addChild(this);}//新增到視窗中
}


Sprite_ZzyGCFBatchBase.prototype.DefaultOffSprX = function()
{
	return 0;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultOffSprY = function()
{
	return 0;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultSizeX = function()
{
	return 32;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultSizeY = function()
{
	return 32;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultExSpaceX = function()//額外間距x
{
	return 0;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultExSpaceY = function()//額外間距y
{
	return 0;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultAnchorX = function()
{
	return 0.5;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultAnchorY = function()
{
	return 0.5;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultBitmap = function()
{
	return undefined;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultLine = function()
{
	return 5;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultList = function()
{
	return 5;
}

Sprite_ZzyGCFBatchBase.prototype.DefaultPosition = function()//預設位置
{
	this.x = Graphics.boxWidth/2;
	this.y = Graphics.boxHeight/2;
}


Sprite_ZzyGCFBatchBase.prototype.GetSpr = function(xIndex,yIndex)//返回精靈
{
	return this.sprArr2[yIndex][xIndex];
}

Sprite_ZzyGCFBatchBase.prototype.update = function()
{
	Sprite_ZzyGCFBase.prototype.update.call(this);
	this.updateRefresh();//重新整理
}


Sprite_ZzyGCFBatchBase.prototype.updateRefresh = function()//重新整理
{
	//重新整理精靈的位置資訊
	if(!this.isRefresh)return;
	
	this.RefreshSprPosition();//重新整理位置
	this.RefreshCustom();//重新整理自定義
	
	this.isRefresh = false;
}


Sprite_ZzyGCFBatchBase.prototype.RefreshSprPosition = function()//重新整理位置
{
	//計算寬度
	var tWidth = this.sizeX * this.list;
	if(this.exSpaceX)
	{tWidth += (((this.list-1) > 0 ? (this.list-1) : 0) * this.exSpaceX);}
	
	
	var tHeight = this.sizeY * this.line;
	if(this.exSpaceY)
	{tHeight += (((this.line-1) > 0 ? (this.line-1) : 0) * this.exSpaceY);}
	

	this.offX = tWidth * this.anchorX;
	this.offY = tHeight * this.anchorY;

	var spX = this.sizeX+this.exSpaceX;
	var spY = this.sizeY+this.exSpaceY;

	for(var i=0;i<this.line;i++)
	{
		for(var j=0;j<this.list;j++)
		{
			var tx = spX*j - this.offX;
			var ty = spY*i - this.offY;			
			this.sprArr2[i][j].x = tx + this.x;
			this.sprArr2[i][j].y = ty + this.y;
			this.CorrectSprSelfPos(this.sprArr2[i][j]);//修正位置
		}
	}
}


Sprite_ZzyGCFBatchBase.prototype.CorrectSprSelfPos = function(spr)
{
	spr.x += this.offSprX;
	spr.y += this.offSprY;
}


Sprite_ZzyGCFBatchBase.prototype.ExecuteSprArrFunction1 = function()//執行方法中的函式
{
	for(var i=0;i<this.line;i++)
	{
		for(var j=0;j<this.list;j++)
		{
			this.ExecuteFunction1(this.sprArr2[i][j]);//執行函式
		}
	}
}


Sprite_ZzyGCFBatchBase.prototype.ExecuteSprArrFunction2 = function()//執行方法中的函式
{
	for(var i=0;i<this.line;i++)
	{
		for(var j=0;j<this.list;j++)
		{
			this.ExecuteFunction2(this.sprArr2[i][j]);//執行函式
		}
	}
}


Sprite_ZzyGCFBatchBase.prototype.ExecuteSprArrFunction3 = function()//執行方法中的函式
{
	for(var i=0;i<this.line;i++)
	{
		for(var j=0;j<this.list;j++)
		{
			this.ExecuteFunction3(this.sprArr2[i][j]);//執行函式
		}
	}
}

Sprite_ZzyGCFBatchBase.prototype.ResetInfo = function(line,list)
{
	if(line !== undefined)this.line = line;
	if(list !== undefined)this.list = list;
	
	this.DisVisibleAllSpr();//隱藏所有圖片
	this.sprArr2 = [];//存放數據內容的陣列
	for(var i=0;i<this.line;i++)
	{
		this.sprArr2[i] = [];
		for(var j=0;j<this.list;j++)
		{
			var spr = this.RequestNewSpr();//生產
			spr.ResetInfo();//重置資訊
			this.sprArr2[i][j] = spr;
		}
	}
	this.RefreshSprPosition();
	this.isRefresh = true;
}

Sprite_ZzyGCFBatchBase.prototype.DisVisibleAllSpr = function()
{
	var len = this.sprArr.length;
	for(var i=0;i<len;i++)
	{
		if(this.sprArr[i])
		{
			this.sprArr[i].visible = false;
			this.DisVisibleSprAfter(this.sprArr[i]);//隱藏之後
		}
	}

}


Sprite_ZzyGCFBatchBase.prototype.SetExSpace = function(spaceX,spaceY)
{
	spaceY = spaceY ? spaceY : spaceX;
	this.exSpaceX = spaceX;
	this.exSpaceY = spaceY;
}

Sprite_ZzyGCFBatchBase.prototype.SetIntervalSize = function(sizeX,sizeY)//設定間距
{
	sizeY = sizeY ? sizeY : sizeX;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
}

Sprite_ZzyGCFBatchBase.prototype.SetAnchor = function(anchorX,anchorY)//設定錨點
{
	anchorY = anchorY ? anchorY : anchorX;
	this.anchorX = anchorX;
	this.anchorY = anchorY;
}


Sprite_ZzyGCFBatchBase.prototype.SetLineList = function(line,list)
{
	list = list ? list : line;
	this.line = line;
	this.list = list;
}

Sprite_ZzyGCFBatchBase.prototype.SetLine = function(line)
{
	return line; 
}

Sprite_ZzyGCFBatchBase.prototype.SetList = function(list)
{
	return list; 
}

Sprite_ZzyGCFBatchBase.prototype.RequestNewSpr = function()
{
	if(!this.addWindowPointer)return;
	var len = this.sprArr.length;
	for(var i=0;i<len;i++)
	{
		if(this.sprArr[i] && !this.sprArr[i].visible)
		{
			this.sprArr[i].visible = true;
			return this.sprArr[i];
		}
	}
	
	//申請對像
	var newSpr = this.CreateSpr();
	//深拷貝
	this.sprArr.push(newSpr);
	this.addWindowPointer.addChild(newSpr);//壓入
	return newSpr;
}

Sprite_ZzyGCFBatchBase.prototype.RemoveAllSpr = function()//移除
{
	var len = this.sprArr.length;
	for(var i=0;i<len;i++)
	{
		if(this.sprArr[i])
		{this.addWindowPointer.removeChild(this.sprArr[i]);}
	}
	this.sprArr = [];
}


Sprite_ZzyGCFBatchBase.prototype.CreateSpr = function()//需要過載
{
	return new Sprite_ZzyGCFBase(0,0,'',0);
}


Sprite_ZzyGCFBatchBase.prototype.RefreshCustom = function()//需要過載
{
	
}

Sprite_ZzyGCFBatchBase.prototype.DisVisibleSprAfter = function(spr)//被隱藏之後,可以過載
{
	
}

Sprite_ZzyGCFBatchBase.prototype.ExecuteFunction1 = function(spr)//執行函式,可以過載
{
	
}

Sprite_ZzyGCFBatchBase.prototype.ExecuteFunction2 = function(spr)//執行函式,可以過載
{
	
}

Sprite_ZzyGCFBatchBase.prototype.ExecuteFunction3 = function(spr)//執行函式,可以過載
{
	
}




//-------------------------------Zzy.GCF.Function----------------------------

Zzy.GCF.LoadPicture = function(str,hue)//優化申請點陣圖
{
	if(!str)
	{
		var bitm = new Bitmap(48,48);
		bitm.fillAll("rgba(0,0,0,1)");
		return bitm;
	};
	if(hue)
	{
		return ImageManager.loadPicture(str,hue);
	}
	else
	{
		//判斷快取庫
		if(!Zzy.GCF.tempCacheBitmap[str])
		{
			Zzy.GCF.tempCacheBitmap[str] = ImageManager.loadPicture(str);
			return Zzy.GCF.tempCacheBitmap[str];
		}
		else
		{return Zzy.GCF.tempCacheBitmap[str];}
	}
}



//獲取數據
Zzy.GCF.GameData = function()
{return $gameSystem.getZzyGCFGameData();}

Zzy.GCF.GameGlobal = function()
{return $gameSystem.getZzyGCFGameGlobal();}

Zzy.GCF.GameHistory = function()
{return $gameSystem.getGCFGameHistory();}

Zzy.GCF.Score = function()//這將返回遊戲結束后獲得的總分數
{return $gameSystem.getZzyGCFGameGlobal().score;}

Zzy.GCF.Time = function()//這將返回遊戲結束期間經歷的時長,注意以幀數為單位
{return $gameSystem.getZzyGCFGameGlobal().time;}

Zzy.GCF.Result = function()//這將返回遊戲結果
{return $gameSystem.getZzyGCFGameGlobal().result;}

Zzy.GCF.Name = function()//這將返回所玩的遊戲名字
{return $gameSystem.getZzyGCFGameGlobal().name;}

Zzy.GCF.IsCanKey = function()//這將返回是否可以使用鍵盤輸入
{return $gameSystem.getZzyGCFIsCanKey();}

Zzy.GCF.IsCanTouch = function()//這將返回是否可以使用點選
{return $gameSystem.getZzyGCFIsCanTouch();}

Zzy.GCF.IsCanPause = function()//這將返回是否可以暫停
{return $gameSystem.getZzyGCFIsCanPause();}

Zzy.GCF.Keys = function()//返回按鍵配置
{return $gameSystem.getZzyGCFKey();}

Zzy.GCF.IsPausing = function()//返回遊戲是否暫停
{return $gameSystem.getZzyGCFGameGlobal().isPausing;}
	


Zzy.GCF.startGame = function(gameName)//開始遊戲
{
	//清理數據
	$gameSystem.ZzyGCFStartGameData(gameName);//開始遊戲數據清理
	//SceneManager.push(Scene_ZzyGCFGame);//壓入場景
	
	//配置替換鍵盤資訊
	Zzy.GCF.BackKeyMapper();
	
	Zzy.GCF.SceneManagerPush();//壓入場景
	Zzy.GCF.startGameData();
}


Zzy.GCF.BackKeyMapper = function()//配置替換鍵盤資訊,在進入和退出遊戲時,臨時替換按鍵效果
{
	Zzy.GCF.tempKeyMapper = {};

	for(key in Input.keyMapper)
	{
		Zzy.GCF.tempKeyMapper[key] = Input.keyMapper[key];
	}
	
	//進行鍵盤設定
	var keys = $gameSystem.getZzyGCFKey();
	
	for(var key in keys)
	{
		var cc = String(key);
		if(cc.length <= 1)
		{
			CC = cc.toUpperCase();
			ASCII = CC.charCodeAt();
			Input.keyMapper[ASCII] = key;//存放字母
		}
	}
}



Zzy.GCF.ReLoadKeyMapper = function()//讀取之前的配置資訊
{
	Input.keyMapper = Zzy.GCF.tempKeyMapper;
}



Zzy.GCF.SceneManagerPush = function()//場景壓入
{
	var tempG = Zzy.GCF.GameGlobal();
	var gameName = tempG.name;
	var Len = Zzy.Param.GCFHaveGame.length;
	var index = -1;
	var isHave = false;	
	
	for(var i=0;i<Len;i++)
	{
		if(gameName === Zzy.Param.GCFHaveGame[i])
		{
			isHave = true;
			index = i;
			break;
		}
	}	
	if(!isHave)//出現錯誤
	{
		Zzy.GCF.errorGame(1);
		this.isError = true;
		return;
	}
	//通過動態編譯的方式,來獲取遊戲視窗
	gameName = Zzy.Param.GCFHaveRealGame[index];//轉換成視窗名稱
	var managerStr = 'SceneManager.push(Scene_ZzyGCF' + gameName + ')';
	eval(managerStr);//通過eval壓入場景
}



Zzy.GCF.startGameData = function()
{
	$gameSystem.getZzyGCFGameGlobal().isRunning = true;//設定執行遊戲
	Zzy.GCF.tempCacheBitmap = [];//清理點陣圖快取庫
	Zzy.GCF.tempInGame = true;//在遊戲中
	Zzy.GCF.tempID = 1;	
}


Zzy.GCF.exitGame = function(result)//退出遊戲
{
	$gameSystem.SettlementGame(result);//結算遊戲
	
	Zzy.GCF.exitGameData();//清算標記
	if(!SceneManager._stack.length)
	{SceneManager.goto(Scene_Map);}
	else
	{SceneManager.pop();}


	Zzy.GCF.ReLoadKeyMapper();//回覆進入前的鍵盤配置

}

Zzy.GCF.exitGameData = function()
{
	Zzy.GCF.tempReleasedMapper = [];//清理按下記錄
	Zzy.GCF.tempID = 0;
	Zzy.GCF.tempInGame = false;//退出遊戲	
}


Zzy.GCF.errorGame = function(errorCode)//錯誤退出遊戲
{
	Zzy.GCF.tempReleasedMapper = [];//清理按下記錄
	switch(errorCode)
	{
		case 1:console.log("Error:(來自LiuYue_GameCore)執行的遊戲:" + $gameSystem.getZzyGCFGameGlobal.name + "沒有註冊!!!");break;
	}
}

Zzy.GCF.Bug = function(errorCode)//顯示錯誤提示
{
	switch(errorCode)
	{
		case 1:console.log("Error:1 (來自LiuYue_GameCore)呼叫錯誤:請先呼叫setGradualColorOfText函式,再呼叫addGradualColorOfText");
		break;
		case 2:console.log("Error:2 (來自LiuYue_GameCore)呼叫錯誤:請先呼叫setGradualColorOfBorder函式,再呼叫addGradualColorOfBorder");
		break;
		case 3:console.log("Error:3 (來自LiuYue_GameCore)呼叫錯誤:請先呼叫setGradualColorOfNumber函式,再呼叫addGradualColorOfNumber");
		break;
		case 4:console.log("Error:4 (來自LiuYue_GameCore)呼叫錯誤:請先呼叫setGradualColorOfBorder函式,再呼叫addGradualColorOfBorder");
		break;	
		
	}
}







Zzy.GCF.errorExitGame = function()//錯誤退出遊戲
{
	if(!SceneManager._stack.length)
	{SceneManager.goto(Scene_Map);}
	else
	{SceneManager.pop();}
	Zzy.GCF.exitGameData();
}


Zzy.GCF.KeyCorrectAndBinding = function(keys,customs)//按鍵矯正和繫結
{
	//對九按進行分別設定
	var tempKeyArr = [keys.Up,keys.Down,keys.Left,keys.Right,keys.A1,keys.B1,keys.A2,keys.B2,keys.P];
	
	
	 var tempKeyArrLen = tempKeyArr.length;
	 for(var i=0;i<tempKeyArrLen;i++)
	 {
		 var tempKey = tempKeyArr[i];
		 var ASCII = 0;
		 switch(tempKey)//字元按鍵轉換
		 {
			 //上
			 case 'up': case 'UP': case 'num8': case 'NUM8':
			 tempKeyArr[i] = 'up';
			 break;
			 //下
			 case 'down': case 'DOWN': case 'num2': case 'NUM2':
			 tempKeyArr[i] = 'down';
			 break;
			 //左
			 case 'left': case 'LEFT': case 'num4': case 'NUM4':
			 tempKeyArr[i] = 'left';
			 break;
			 //右
			 case 'right': case 'RIGHT': case 'num6': case 'NUM6':
			 tempKeyArr[i] = 'right';
			 break;
			 //z鍵
			 case 'Z':case 'z':case 'space':case 'enter':case 'SPACE':case 'ENTER':
			 tempKeyArr[i] = 'ok';
			 break;
			 //x鍵
			 case 'X':case 'x':case 'escape':case 'num0':case 'NUM0':case 'insert':case 'ESCAPE':case 'INSERT':
			 tempKeyArr[i] = 'escape';
			 break;
			 
			 case 'W':case 'w':case 'pagedown':case 'PAGEDOWN':
			 tempKeyArr[i] = 'pagedown';
			 break;	

			 case 'Q':case 'q':case 'pageup':case 'PAGEUP':
			 tempKeyArr[i] = 'pageup';
			 break;	

			 case 'tab':case 'TAB':
			 tempKeyArr[i] = 'tab';
			 break;
			 
			 case 'shift':case 'SHIFT':
			 tempKeyArr[i] = 'shift';
			 break;
			 
			 case 'control':case 'alt':case 'CONTROL':case 'ALT':
			 tempKeyArr[i] = 'control';
			 break;
			 
			 default:
			 
				if(tempKeyArr[i].length <= 1)//字母
				{
					tempKeyArr[i] = tempKeyArr[i].toUpperCase();//切換為大寫字母
					// var CC = tempKeyArr[i];
					// ASCII = CC.charCodeAt();
					
					// if(ASCII > 0 && ASCII < 256)
					// {
						// Input.keyMapper[ASCII] = tempKeyArr[i];//存放字母
						
						// customs.push(ASCII);//壓入自定義的資訊
					// }
				}
		 }
		
	 }
	
	//按鍵恢復
	keys.Up = tempKeyArr[0];
	keys.Down = tempKeyArr[1];
	keys.Left = tempKeyArr[2];
	keys.Right = tempKeyArr[3];
	keys.A1 = tempKeyArr[4];
	keys.B1 = tempKeyArr[5];
	keys.A2 = tempKeyArr[6];
	keys.B2 = tempKeyArr[7];
	keys.P = tempKeyArr[8];
	
}

Zzy.GCF.ClearCustomKey = function()//清理自定義按鍵
{
	var cusKey = $gameSystem.GetZzyGCFCustomKey();
	var Len = cusKey.length;
	
	for(var i=0;i<Len;i++)
	{
		var ASCII = cusKey[i];
		Input.keyMapper[ASCII] = undefined;//清理
	}
}

Zzy.GCF.RegisterGame = function(gameName,realGameName)//註冊遊戲
{
	//判斷是否重複
	var gameLen = Zzy.Param.GCFHaveGame.length;
	for(var i=0;i<gameLen;i++)
	{
		if(Zzy.Param.GCFHaveGame[i] === gameName)return false;
	}
	
	Zzy.Param.GCFHaveGame.push(gameName);
	Zzy.Param.GCFHaveRealGame.push(realGameName);
	
	
	return true;
}

Zzy.GCF.keyNameTokeyCode = function(keyName)//按鍵轉換
{
	//轉換
	switch(keyName)
	{
		case 'ok':
		return [13,32,90];
		case 'up':
		return [38,104];
		case 'down':
		return [40,98];
		case 'left':
		return [37,100];
		case 'right':
		return [39,102];
		case 'tab':
		return [9];
		case 'shift':
		return [16];
		case 'control':
		return [17,18];
		case 'escape':
		return [27,45,88,96];
		case 'pageup':
		return [33,81];
		case 'pagedown':
		return [34,87];
		case 'debug':
		return [120];
		default:
		//轉換成ASCII碼
		return [keyName.charCodeAt()];
	}
}


//=============================================================
//Input
//==============================================================


//針對MV沒有直接可呼叫滑鼠移動檢測
Zzy.GCF.TouchInput_setupEventHandlers = TouchInput._setupEventHandlers;
TouchInput._setupEventHandlers = function() 
{
	Zzy.GCF.TouchInput_setupEventHandlers.call(this);
	
    document.addEventListener('mousemove', this._onZzyGCFMove.bind(this));
};

TouchInput._onZzyGCFMove = function(event)
{
	if(Zzy.GCF.tempInGame)
	{
		Zzy.GCF.MoveX = Graphics.pageToCanvasX(event.pageX);
		Zzy.GCF.MoveY = Graphics.pageToCanvasY(event.pageY);		
	}
}



//針對MV沒有直接可呼叫鍵盤抬起的偵測
Zzy.GCF.OnKeyUp = Input._onKeyUp;
Input._onKeyUp = function(event) 
{
	Zzy.GCF.OnKeyUp.call(this,event);
    Zzy.GCF.tempReleasedMapper[event.keyCode] = true;
}

Input.ZzyGCFisReleased = function(keyName)//檢測是否有按鍵被抬起
{
	var CodeArr = Zzy.GCF.keyNameTokeyCode(keyName);
	var CodeArrLen = CodeArr.length;
	
	var isTrue = false;
	for(var i=0;i<CodeArrLen;i++)
	{
		if(Zzy.GCF.tempReleasedMapper[CodeArr[i]])
		{
			Zzy.GCF.tempReleasedMapper[CodeArr[i]] = false;
			isTrue = true;
		}
	}
	
	return isTrue;
}


//=============================================================
//Zzy.GCF.Funtcion
//==============================================================

Zzy.GCF.LimitRotateRange = function(rotation)//限制圓的角度區間
{
	//0 ~ 2*Math.PI
	if(rotation >= 0 && rotation < Math.PI * 2)return rotation;
	var turns = Math.floor(rotation / (Math.PI * 2));//獲取圈數
	rotation -= (turns * 2 * Math.PI);
	if(rotation < 0){rotation = 2 / Math.PI - rotation;}
	return rotation;
}



Zzy.GCF.AssignmentID = function(obj)
{
	obj.ID = Zzy.GCF.tempID;
	Zzy.GCF.tempSprCache[obj.ID] = obj;
	Zzy.GCF.tempID++;
}

//創造空點陣圖
Zzy.GCF.CreateEmptyTextSpr = function(w,h)//創造文字顯示
{
	var tempSpr = new Sprite();
	tempSpr.bitmap = new Bitmap(w,h);
	tempSpr.anchor.x = 0.5;
	tempSpr.anchor.y = 0.5;
	tempSpr.blendMode = Graphics.BLEND_ADD;
	return tempSpr;	
}

//創造空點陣圖
Zzy.GCF.CreateEmptyTextZzySpr = function(w,h)//創造文字顯示
{
	var tempSpr = new Sprite_ZzyGCFBase();
	tempSpr.bitmap = new Bitmap(w,h);
	tempSpr.anchor.x = 0.5;
	tempSpr.anchor.y = 0.5;
	tempSpr.blendMode = Graphics.BLEND_ADD;
	return tempSpr;	
}

//建立數字點陣圖
Zzy.GCF.CreateNumberTextSpr = function(w,h,num)
{
	var tempSpr = new Sprite_ZzyGCFNumber(w,h,num);
	var s = Math.min(w,h);
	tempSpr.setFontSize(s);
	tempSpr.refresh();
	return tempSpr;	
}



//獲取照片的相關操作
Zzy.GCF.GetPicture = function(ID)
{
	if(SceneManager._scene instanceof Scene_Map)
	{
		return Zzy.GCF.tempSceneMapPointer.ZzyGCFGetPicture(ID);
	}
	return undefined;
}

Zzy.GCF.CreatePicture = function(ID,filename,hue,x,y)
{
	if(SceneManager._scene instanceof Scene_Map)
	{
		Zzy.GCF.tempSceneMapPointer.ZzyGCFCreatePicture(ID,filename,hue,x,y);
	}
}

Zzy.GCF.DestroyPicture = function(ID)//刪除點陣圖
{
	if(SceneManager._scene instanceof Scene_Map)
	{
		Zzy.GCF.tempSceneMapPointer.ZzyGCFDestoryPicture(ID);
	}
}



Zzy.GCF.startToEndOfPer = function(start,end,per,min)//開始到結束的比例
{
	if(start === end)return end;
	if((Math.abs(end - start)) < min)return end;
	
	var distance = (end-start)*per*0.01;
	return distance + start;
}

Zzy.GCF.startToEndOfSpeed = function(start,end,speed)
{
	if(start === end)return end;
	if(start < end)
	{
		var distance = start + speed;
		return (distance > end ? end : distance);
	}
	else
	{
		var distance = start - speed;
		return (distance < end ? end : distance);
	}
}

Zzy.GCF.startToEndOfTime = function(start,end,time,ctime)
{
	if(start === end)return end;
	
	var distance = (end - start) * ctime / time;
	return start + distance;
}



Zzy.GCF.TransmitPicDate = function(spr,spr2)//傳遞數據
{
	spr2.visible = spr.visible;
	spr2.x = spr.x;
	spr2.y = spr.y;
	spr2.opacity = spr.opacity;
	spr2.rotate = spr.rotate;
	spr2.blendMode = spr.blendMode;
	spr2.scale.x = spr.scale.x;
	spr2.scale.y = spr.scale.y;
	spr2.anchor.x = spr.anchor.x;
	spr2.anchor.y = spr.anchor.y;
	spr2.ID = spr.ID;
	spr2.moving = spr.moving;
	spr2.scaling = spr.scaling;
	spr2.opaciting = spr.opaciting;
	spr2.rotating = spr.rotating;
	spr2.selecting = spr.selecting;
	spr2.collising = spr.collising;
	spr2.buttoning = spr.buttoning;
	spr2.moveSpeed = spr.moveSpeed;
	spr2.moveDegree = spr.moveDegree;
	spr2.moveTime = spr.moveTime;
	spr2.moveCTime = spr.moveCTime;
	spr2.movePer = spr.movePer;
	spr2.moveMode = spr.moveMode;
	spr2.startX = spr.startX;
	spr2.startY = spr.startY;
	spr2.endX = spr.endX;
	spr2.endY = spr.endY;
	spr2.opSpeed = spr.opSpeed;
	spr2.opTime = spr.opTime;
	spr2.opCTime = spr.opCTime;
	spr2.opPer = spr.opPer;
	spr2.opMode = spr.opMode;
	spr2.startOp = spr.startOp;
	spr2.endOp = spr.endOp;
	spr2.scaleSpeed = spr.scaleSpeed;
	spr2.scaleDegree = spr.scaleDegree;
	spr2.scaleTime = spr.scaleTime;
	spr2.scaleCTime = spr.scaleCTime;
	spr2.scalePer = spr.scalePer;
	spr2.scaleMode = spr.scaleMode;
	spr2.startScaleX = spr.startScaleX;
	spr2.startScaleY = spr.startScaleY;
	spr2.endScaleX = spr.endScaleX;
	spr2.endScaleY = spr.endScaleY;
	spr2.rotateSpeed = spr.rotateSpeed;
	spr2.rotateTime = spr.rotateTime;
	spr2.rotateCTime = spr.rotateCTime;
	spr2.rotatePer = spr.rotatePer;
	spr2.rotateMode = spr.rotateMode;
	spr2.startRotate = spr.startRotate;
	spr2.endRotate = spr.endRotate;
	spr2.isClockwise = spr.isClockwise;
	spr2.rotateTurns = spr.rotateTurns;
	spr2.realEndRotate = spr.realEndRotate;
	spr2.frameWidth = spr.frameWidth;
	spr2.frameHeight = spr.frameHeight;
	spr2.frameL = spr.frameL;
	spr2.frameU = spr.frameU;
	spr2.frameR = spr.frameR;
	spr2.frameD = spr.frameD;
	spr2.isInButton = spr.isInButton;
	spr2.isPressButton = spr.isPressButton;
	spr2.touchOffX = spr.touchOffX;
	spr2.touchOffY = spr.touchOffY;
	spr2.delayTime = spr.delayTime;
	spr2.isDelay = spr.isDelay;
	spr2.pausing = spr.pausing;
	spr2.ignorePause = spr.ignorePause;
	spr2.moveEndDisvisibleDelay = spr.moveEndDisvisibleDelay;
	spr2.moveEndDisvisible = spr.moveEndDisvisible;
	spr2.scaleEndDisvisibleDelay = spr.scaleEndDisvisibleDelay;
	spr2.scaleEndDisvisible = spr.scaleEndDisvisible;
	spr2.opacityEndDisvisibleDelay = spr.opacityEndDisvisibleDelay;
	spr2.opacityEndDisvisible = spr.opacityEndDisvisible;
	spr2.rotateEndDisvisibleDelay = spr.rotateEndDisvisibleDelay;
	spr2.rotateEndDisvisible = spr.rotateEndDisvisible;
	spr2.originalX = spr.originalX;
	spr2.originalY = spr.originalY;
	spr2.originOp = spr.originOp;
	spr2.originScaleX	= spr.originScaleX;
	spr2.originScaleY	= spr.originScaleY;
	spr2.isCanMoving = spr.isCanMoving;
	spr2.isCanOpaciting = spr.isCanOpaciting;
	spr2.isCanScaling = spr.isCanScaling;
	spr2.isCanRotating = spr.isCanRotating;
	spr2.isCanSelect = spr.isCanSelect;
	spr2.isCanCollision = spr.isCanCollision;
	spr2.isCanButton = spr.isCanButton;
	spr2.ignorePause = spr.ignorePause;
	spr2.scaleZoomX = spr.scaleZoomX;
	spr2.scaleZoomY = spr.scaleZoomY;
	spr2.tempScaleX = spr.tempScaleX;
	spr2.tempScaleY = spr.tempScaleY;	
	
	
	return spr2;
}


//------------------------------------ToolFunction--------------------------------



Zzy.GCF.ATANARC = function(x,y)//換算轉換為弧度
{
	if(x===0)
	{
		if(y > 0)
		{return Math.PI/2;}
		else
		{return Math.PI*3/2;}
	}	
	
	var arc = Math.atan( y / x );

	if(x < 0)
	{
		arc += Math.PI;
	}

	return arc;
}

Zzy.GCF.ATANARC2 = function(x1,y1,x2,y2)//填寫兩個點的下標,返回x1到x2所差距的角度
{
	var x = x2-x1;
	var y = y2-y1;
	return Zzy.GCF.ATANARC(x,y);
}

Zzy.GCF.P1P2Rotation = function(x1,y1,x2,y2)//計算p1延伸到p2的弧度
{
	var x = Math.abs(x1-x2);
	var y = Math.abs(y1-y2);
	var z = Math.sqrt(x*x+y*y);
	var r = Math.acos(y / z);
	
	
	if(y1 >= y2)
	{
		if(x1 <= x2){}
		else{r = -r;}
	}
	else
	{
		if(x1 <= x2)
		{r = Math.PI-r;}
		else
		{r=Math.PI+r;}
	}
	
	
	return r;
}

Zzy.GCF.P1P2Angle = function(x1,y1,x2,y2)//計算p1延伸到p2的角度
{
	var src = Zzy.GCF.P1P2Rotation(x1,y1,x2,y2);
	
	return src * 180 / Math.PI;
}




Zzy.GCF.PtInRect = function(pt,rect)//判斷點是否在矩形內
{
	if(pt.x >= rect.left && pt.x <= rect.right && pt.y >= rect.up && pt.y <= rect.down){return true;}
	return false;
}

Zzy.GCF.PtInRect2 = function(pt,rect)
{
	if(pt.x > rect.left && pt.x < rect.right && pt.y > rect.up && pt.y < rect.down){return true;}
	return false;
}



Zzy.GCF.PtInRectEllipse = function()//判斷一個點是否在橢圓形內
{
	//
}


Zzy.GCF.Distance = function(x1,y1,x2,y2)//兩個點之間的距離
{
	var tx = x2 - x1;
	var ty = y2 - y1;	
	return Math.sqrt(tx*tx+ty*ty);
}

Zzy.GCF.DistanceOfP = function(p1,p2)
{
	return Zzy.GCF.Distance(p1.x,p1.y,p2.x,p2.y);
}



Zzy.GCF.RandomIntArea = function(start,end,weightArr)//返回一個區域隨機的整數,並根據權重控制範圍
{
	if(start === end)return start;
	
	var range = end - start;
	if(!weightArr)
	{return Math.floor(Math.random() * range) + start;}

	var len = weightArr.length;
	var comArr = [];
	var totalWig = 0;
	for(var i=0;i<len;i++)
	{
		totalWig += weightArr[i]
		comArr[i] = totalWig;
	}
	
	var wigRand = Math.floor(Math.random() * comArr[comArr.length-1]);

	//比較權重範圍
	var index = 0;
	for(var i=0;i<len;i++)
	{
		if(wigRand < comArr[i])//範圍中
		{index = i;break;}//確認使用範圍資訊
	}

	 var wRange = range / len;//確認整數區間
	 var exRand = Math.random() * wRange;

	 var tempS = index * wRange + exRand;
	 var exValue = tempS + start;
	return Math.floor(exValue);
}

Zzy.GCF.RandomTheValueOfPer = function(value,per)//根據數值百分比返回擾亂值
{
	if(!per)return value;
	
	var valR = value * per * 0.01;
	var Rval = Math.random() * valR;//獲取隨機值
	
	var isZ = Math.floor(Math.random() * 2);
	if(!isZ){Rval = -Rval;}
	return value + Rval;
}


Zzy.GCF.RandomIntTheValueOfPer = function(value,per)//根據數值百分比返回擾亂值,這回返回一個整數
{
	if(!per)return value;
	var valR = value * per * 0.01;
	var Rval = Math.random() * valR;//獲取隨機值
	
	var isZ = Math.floor(Math.random() * 2);
	if(!isZ){Rval = -Rval;}
	
	
	return Math.round(value + Rval);	
}


Zzy.GCF.RandomTheValueOfRange = function(value,Range)//根據一個數值和限定範圍,返回一個隨機值
{
	if(!Range)return value;
	var Rha = Math.random() * (Range / 2);

	var isZ = Math.floor(Math.random() * 2);
	if(!isZ){Rha = -Rha;}	
	
	return value + Rha;
}

Zzy.GCF.RandomIntTheValueOfRange = function(value,Range)//根據一個整數數值和限定範圍,返回一個隨機整數值
{
	if(!Range)return value;
	var Rha = Math.random() * (Range / 2);

	var isZ = Math.floor(Math.random() * 2);
	if(!isZ){Rha = -Rha;}	
	
	return Math.round(value + Rha);
}


Zzy.GCF.FileNameFindXTo2Arr = function(fileName)//轉換
{
	//開始拆分
	var tempArr = fileName.split('_');
	var strArr = tempArr[tempArr.length-1].split('x');
	var intArr = [];
	for(var i=0;i<strArr.length;i++)
	{
		intArr[i] = parseInt(strArr[i]);
	}
	
	return intArr;
}

Zzy.GCF.SplitPictureToArr1 = function(fileName,collBitmap)//通過_?x?的格式,將圖片拆分成一個一維陣列
{
	var lenArr = Zzy.GCF.FileNameFindXTo2Arr(fileName);
	var bitmapArr = [];
	
	var listSize = collBitmap.width / lenArr[0];	
	var lineSize = collBitmap.height / lenArr[1];

	for(var i=0;i<lenArr[1];i++)
	{
		for(var j=0;j<lenArr[0];j++)
		{
			var bitBitmap = new Bitmap(listSize,lineSize);
			bitBitmap.blt(collBitmap,j*listSize,i*lineSize,listSize,lineSize,0,0);
			bitmapArr[i*lenArr[0]+j] = bitBitmap;
		}
	}
	return bitmapArr;	
}

Zzy.GCF.SplitPictureToArr2 = function(fileName,collBitmap)//通過_?x?的格式,將圖片拆分成一個二維陣列
{
	var lenArr = Zzy.GCF.FileNameFindXTo2Arr(fileName);
	var bitmapArr = [];
	
	var listSize = collBitmap.width / lenArr[0];	
	var lineSize = collBitmap.height / lenArr[1];

	for(var i=0;i<lenArr[1];i++)
	{
		bitmapArr[i] = [];
		for(var j=0;j<lenArr[0];j++)
		{
			var bitBitmap = new Bitmap(listSize,lineSize);
			bitBitmap.blt(collBitmap,j*listSize,i*lineSize,listSize,lineSize,0,0);
			bitmapArr[i][j] = bitBitmap;
		}
	}
	return bitmapArr;		
}


Zzy.GCF.CheckRectCollision = function(Rect1,Rect2)//檢測兩個矩形之間是否發生了互動,矩形不可以存在角度
{
	//效率太低
	// if(Zzy.GCF.PtInRect({x:Rect1.left,y:Rect1.up},Rect2))return true;
	// if(Zzy.GCF.PtInRect({x:Rect1.left,y:Rect1.down},Rect2))return true;
	// if(Zzy.GCF.PtInRect({x:Rect1.right,y:Rect1.up},Rect2))return true;
	// if(Zzy.GCF.PtInRect({x:Rect1.right,y:Rect1.down},Rect2))return true;
	
	//兩個矩形進行了接觸
	if(Rect1.right >= Rect2.left && Rect1.left <= Rect2.right &&
	Rect1.down >= Rect2.up && Rect1.up <= Rect2.down)
	{
		return true;
	}
	return false;
}

Zzy.GCF.AngleToRadian = function(angle)//角度轉換弧度
{
	return angle * Math.PI / 180;
	
}

Zzy.GCF.GetIntRandomArr1 = function(list,min,max)//返回一個隨機整數值的一維陣列
{
	var Arr1 = [];
	var range = max-min;
	
	for(var i=0;i<list;i++)
	{
		Arr1[i] = Math.floor((Math.random() * range) + min);
	}
	return Arr1;
}

Zzy.GCF.GetIntRandomArr2 = function(line,list,min,max)//返回一個隨機整數值的二維陣列
{
	var Arr2 = [];
	for(var i=0;i<line;i++)
	{
		Arr2[i] = [];
		for(var j=0;j<list;j++)
		{
			Arr2[i][j] = Math.floor((Math.random() * range) + min);
		}
	}
	return Arr2;
}


Zzy.GCF.GetIndexRandomArr1 = function(list,startIndex)//返回一個從startIndex開始計數隨機排列的一維陣列,startIndex可以為null
{
	var start = startIndex ? startIndex : 0;
	var Arr1 = [];
	
	for(var i=0;i<list;i++)
	{
		Arr1[i] = start+i;
	}
	
	var index1 = 0;
	var index2 = 0;
	var temp = 0;
	
	var count = list*4;
	for(var i=0;i<count;i++)
	{
		index1 = Math.floor(Math.random() * list);
		index2 = Math.floor(Math.random() * list);
		
		temp = Arr1[index1];
		Arr1[index1] = Arr1[index2];
		Arr1[index2] = temp;		
	}
	return Arr1;
}

Zzy.GCF.GetIndexRandomArr2 = function(line,list,startIndex)//返回一個從startIndex開始計數隨機排列的二維陣列,startIndex可以為null
{
	var start = startIndex ? startIndex : 0;
	
	
	var Arr2 = [];
	for(var i=0;i<line;i++)
	{
		Arr2[i] = [];
		for(var j=0;j<list;j++)
		{
			Arr2[i][j] = j+i*list+start;
		}
	}
	var maxValue = line * list;
	//進行隨機操作
	var indexX1 = 0;
	var indexY1 = 0;
	var indexX2 = 0;
	var indexY2 = 0;
	var temp = 0;
	
	var count = line*list*4;//隨機調換指定的對應次數
	for(var i=0;i<count;i++)
	{
		//通過隨機交換兩個數的方法,來實現隨機陣列的方式
		indexX1 = Math.floor(Math.random() * list);
		indexY1 = Math.floor(Math.random() * line);
		indexX2 = Math.floor(Math.random() * list);
		indexY2 = Math.floor(Math.random() * line);	

		//對數據進行交換
		temp = Arr2[indexY1][indexX1];
		Arr2[indexY1][indexX1] = Arr2[indexY2][indexX2];
		Arr2[indexY2][indexX2] = temp;
	}
	return Arr2;
}

Zzy.GCF.RandomArr1Element = function(Arr1,count)//一維陣列打亂
{
	var c = count ? count : Arr1.length*4;
	var index1 = 0;
	var index2 = 0;	
	var temp = 0;
	for(var i=0;i<c;i++)
	{
		index1 = Math.floor(Math.random() * Arr1.length);
		index2 = Math.floor(Math.random() * Arr1.length);
		//交換
		temp = Arr1[index1];
		Arr1[index1] = Arr1[index2];
		Arr1[index2] = temp;
	}
	return Arr1;
}

Zzy.GCF.RandomArr2Element = function(Arr2,count)//二維陣列打亂
{
	var len1 = Arr2.length;
	if(!Arr2[0])
	{
		return Zzy.GCF.RandomArr1Element(Arr2,len1*4);
	}
	var len2 = Arr2[0].length;
	var c = count ? count : len1 * len2 * 4;
	var x1 = 0;
	var x2 = 0;
	var y1 = 0;
	var y2 = 0;
	
	for(var i=0;i<len1;i++)//交換
	{
		for(var j=0;j<len2;j++)
		{
			x1 = Math.floor(Math.random() * len2);
			y1 = Math.floor(Math.random() * len1);
			x2 = Math.floor(Math.random() * len2);
			y2 = Math.floor(Math.random() * len1);			
			
			temp = Arr2[y1][x1];
			Arr2[y1][x1] = Arr[y2][x2];
			Arr[y2][x2] = temp;
			
		}
	}
	return Arr2;
}

Zzy.GCF.GetArrOfBeing = function(Arr)//剔除所有空的內容
{
	var tempArr = [];
	for(var i=0;i<Arr.length;i++)
	{
		if(Arr[i] === undefined || Arr[i] === null)continue;
		tempArr.push(Arr[i]);
	}
	return tempArr;
}

Zzy.GCF.InsertToOtherArr = function(Arr1,Index,Arr2)//將Arr2插入到Arr1陣列中,注意這將會修改Arr1陣列中的內容
{
	var len = Arr2.length;
	
	//位移
	for(var i=Arr1.length-1;i>=Index;i--)
	{
		Arr1[i+len] = Arr1[i];
	}
	//新增
	for(var i=0;i<len;i++)
	{
		Arr1[i+Index] = Arr2[i];
	}
	return Arr1;
}

Zzy.GCF.SplitStringToIntArr = function(str,spell)//拆減一個字串並轉換為整數陣列
{
	spell = spell ? spell : ',';
	var tempArr = str.split(',');
	for(var i=0;i<tempArr.length;i++)
	{
		tempArr[i] = parseInt(tempArr[i]);
	}
	return tempArr;
}

Zzy.GCF.SplitStringToNumberArr = function(str,spell)//拆減一個字串並轉換為數字陣列
{
	spell = spell ? spell : ',';
	var tempArr = str.split(',');
	for(var i=0;i<tempArr.length;i++)
	{
		tempArr[i] = Number(tempArr[i]);
	}	
	return tempArr;
}

Zzy.GCF.SpawnWhiteBitmap = function(width,height)//產生一個空的白色畫布
{
	width = width ? width : Graphics.boxWidth;
	height = height ? height : Graphics.boxHeight;
	var bitmap = new Bitmap(width,height);
	bitmap.fillAll('#ffffff');
}

Zzy.GCF.SpawnBlackBitmap = function(width,height)//產生一個空的黑色畫布
{
	width = width ? width : Graphics.boxWidth;
	height = height ? height : Graphics.boxHeight;
	var bitmap = new Bitmap(width,height);
	bitmap.fillAll('#000000');
}

Zzy.GCF.SpawnBlackBitmap = function(color,width,height)//產生一個指定顏色的畫布
{
	width = width ? width : Graphics.boxWidth;
	height = height ? height : Graphics.boxHeight;
	var bitmap = new Bitmap(width,height);
	bitmap.fillAll(color);
}

// Zzy.GCF.DeepCopyObject = function(obj, cache = new Set())
// {
	// if((typeof obj !== 'object' && obj !== null) || cache.has(obj))
	// {
		// return obj;
	// }
  // if (Array.isArray(obj)) 
  // {
    // return obj.map(t => {
      // cache.add(t)
      // return t
    // })
  // } 
  // else 
  // {
// // 注意symbol key
    // return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].reduce((res, key) => {
      // cache.add(obj[key])
      // res[key] = Zzy.GCF.DeepCopyObject(obj[key], cache)
      // return res
    // }, obj.constructor !== Object ? Object.create(obj.constructor.prototype) : {}) // 繼承
  // }
// }

Zzy.GCF.CopyObject = function(obj)//淺拷貝一個對象的內容資訊
{
	var newObj = {};
	var key = 0;
	for(obj in key)
	{
		newObj[key] = obj[key];
	}
	
	return newObj;
}


Zzy.GCF.SpawnRandomPos = function(rect,count)//在一定的範圍內產生隨機的座標點
{
	var rangeX = rect.right - rect.left;
	var rangeY = rect.down - rect.up;
	var posArr = [];
	var x = 0;
	var y = 0;
	var pos = {};
	for(var i=0;i<count;i++)
	{
		x = Math.random() * rangeX + rect.left;
		y = Math.random() * rangeY + rect.up;
		pos.x = x;
		pos.y = y;
		posArr.push(pos);
	}
	return Zzy.GCF.AddOffsetPosArr(posArr,rect.left,rect.up);
}

//type可以輸入型別為rect(矩形)或是circle(圓形),不填寫預設為rect
//rect代表產生點的範圍,count代表產生的數量,rangeX,rangeY代表限制範圍的寬度和高度,type代表型別
Zzy.GCF.SpawnRandomSinglePos = function(rect,count,rangeX,rangeY,type)//在一定的範圍內產生隨機的座標點,並保證座標點在一定範圍內不會重複
{
	if(type === undefined)
	{type = 'rect'}
	rangeY = rangeY ? rangeY : rangeX;

	//隨機的點
	var disRangeX = rect.right - rect.left;
	var disRangeY = rect.down - rect.up;
	var posArr = [];
	var pRect = {};
	var isPass = true;
	var notCount = 0;//匹配失敗次數
	if(type === 'rect')
	{
		for(var i=0;i<count;i++)
		{
			var pos = {};
			pos.x = Math.random() * disRangeX;
			pos.y = Math.random() * disRangeY;

			//遍歷之前
			for(var j=0;j<posArr.length;j++)
			{
				pRect.left = posArr[j].x - rangeX;
				pRect.right = posArr[j].x + rangeX;
				pRect.up = posArr[j].y - rangeY;
				pRect.down = posArr[j].y + rangeY;
				if(Zzy.GCF.PtInRect(pos,pRect))//在點的範圍內
				{
					isPass = false;
					break;
				}
			}	
			if(!isPass)//返回重來
			{
				notCount++;
				if(notCount >= 10000)//匹配超過10000次,防止卡死
				{
					return Zzy.GCF.AddOffsetPosArr(posArr,rect.left,rect.up);
				}
				
				isPass = true;i--;continue;
			}	
			posArr.push(pos);
			notCount = 0;
		}			
	}
	else if(type === 'circle')
	{
		for(var i=0;i<count;i++)
		{
			var pos = {};
			pos.x = Math.random() * disRangeX;
			pos.y = Math.random() * disRangeY;
			
			//遍歷之前
			for(var j=0;j<posArr.length;j++)
			{
				var sPos = posArr[j];
				var fx = pos.x - sPos.x;
				var fy = pos.y - sPos.y;
				
				if(rangeX > rangeY)
				{
					if((fx * fx / rangeX / rangeX + fy * fy / rangeY / rangeY) < 1)
					{isPass = false;break;}
				}
				else
				{
					if((fy * fy / rangeX / rangeX + fx * fx / rangeY / rangeY) < 1)
					{isPass = false;break;}
				}
			}	
			if(!isPass)//返回重來
			{
				notCount++;
				if(notCount >= 10000)//匹配超過10000次,防止卡死
				{
					return Zzy.GCF.AddOffsetPosArr(posArr,rect.left,rect.up);
				}
				
				isPass = true;i--;continue;
			}	
			posArr.push(pos);
			notCount = 0;
		}			
	}
	return Zzy.GCF.AddOffsetPosArr(posArr,rect.left,rect.up);
}

Zzy.GCF.AddOffsetPosArr = function(posArr,ofx,ofy)//對一個精靈陣列中所有的精靈對像進行位置偏移
{
	ofx = ofx ? ofx : 0;
	ofy = ofy ? ofy : 0;
	
	var len = posArr.length;
	for(var i=0;i<len;i++)
	{
		if(posArr[i])
		{
			posArr[i].x += ofx;
			posArr[i].y += ofy;
		}
	}
	return posArr;
}


Zzy.GCF.AddScaleArr = function(arr,ofScaleX,ofScaleY)//對一個精靈陣列中所有的大小尺寸進行數值偏移
{
	var ofsx = ofScaleX ? ofScaleX : 0;
	var ofsy = ofScaleY ? ofScaleY : ofScaleX;
	
	var len = posArr.length;
	for(var i=0;i<len;i++)
	{
		if(posArr[i])
		{
			posArr[i].scale.x += ofsx;
			posArr[i].scale.y += ofsy;
		}		
	}
	return posArr;
}

Zzy.GCF.AddAngleArr = function(arr,angle)//對一個精靈陣列中所有的角度進行數值偏移,角度的範圍為,angle為角度而不是弧度
{
	var angle = angle ? angle : 0;
	
	var a = angle * Math.PI / 180;
	
	var len = posArr.length;
	for(var i=0;i<len;i++)
	{
		if(posArr[i])
		{
			posArr[i].rotation += a;
		}		
	}
	return posArr;	
	
}

Zzy.GCF.AddOpacityArr = function(arr,op)//對一個精靈陣列所有的透明度進行數值偏移
{
	var len = arr.length;
	for(var i=0;i<len;i++)
	{
		if(arr[i])
		{
			arr[i].opacity += op;
			arr[i].opacity = Math.min(Math.max(arr[i].opacity,0),255);
		}
	}
	return arr;
}

Zzy.GCF.SetVisibleArr = function(arr,enable)//對一個精靈陣列所有的顯示開關進行設定,並返回被修改過開關的新的精靈陣列
{
	var newArr = [];
	
	var len = arr.length;
	for(var i=0;i<len;i++)
	{
		if(arr[i])
		{
			if(arr[i].visible !== enable)
			{
				newArr.push(arr[i]);
				arr[i].visible = enable;
			}
		}
	}
	return newArr;
}

Zzy.GCF.ValueInLoopRange = function(value,min,max)//限制一個數值位於一個範圍循環內的,並返回循環后的數值和循環的次數
{
	var m = (max - min);
	
	var r = Math.floor(value / m);//倍率
	
	var e = value - r * m;//額外數值
	
	var f = min + e;
	
	var info = {
		loop:r,
		value:f
	};
	
	return info;
}

Zzy.GCF.BubbleSort = function(numberArr,isGreat)//氣泡排序,numberArr是存放數據的陣列,isGreat是否是從大到小的排序
{
	isGreat = isGreat ? isGreat : false;
	//進行氣泡排序
	if(isGreat)//從大到小
	{
		var Temp = 0;
		for(var i=0;i<numberArr.length;i++)
		{
			for(var j=0;j<numberArr.length-i-1;j++)
			{
				if(numberArr[j] < numberArr[j+1])
				{
					Temp = numberArr[j];
					numberArr[j] = numberArr[j+1];
					numberArr[j+1] = Temp;
				}
			}
		}
	}
	else//從小到大
	{
		var Temp = 0;
		for(var i=0;i<numberArr.length;i++)
		{
			for(var j=0;j<numberArr.length-i-1;j++)
			{
				if(numberArr[j] > numberArr[j+1])
				{
					Temp = numberArr[j];
					numberArr[j] = numberArr[j+1];
					numberArr[j+1] = Temp;
				}
			}
		}
	}
	return numberArr;
}

Zzy.GCF.SelectSort = function(numberArr,isGreat)//選擇排序,numberArr是存放數據的陣列,isGreat是否是從大到小的排序
{
	isGreat = isGreat ? isGreat : false;
	//進行選擇排序
	if(isGreat)
	{
		var Index = 0;
		var Temp = 0;

		for(var i=0;i<numberArr.length;i++)
		{
			Index = i;
			for(var j=i;j<numberArr.length;j++)
			{
				if(numberArr[Index] < numberArr[j])
				{Index = j;}
			}

			Temp = numberArr[i];
			numberArr[i] = numberArr[Index];
			numberArr[Index] = Temp;
		}
	}
	else
	{
		var Index = 0;
		var Temp = 0;

		for(var i=0;i<numberArr.length;i++)
		{
			Index = i;
			for(var j=i;j<numberArr.length;j++)
			{
				if(numberArr[Index] > numberArr[j])
				{Index = j;}
			}

			Temp = numberArr[i];
			numberArr[i] = numberArr[Index];
			numberArr[Index] = Temp;
		}
	}
}


Zzy.GCF.InsertSort = function(numberArr,isGreat)//插入排序
{
	isGreat = isGreat ? isGreat : false;
	//進行插入排序
	if(isGreat)
	{
		var j = 0;
		var temp = 0;
		for(var i=0;i<numberArr.length;i++)
		{
			temp = numberArr[i];
			j=i;
			while(j>0)
			{
				if(temp > numberArr[j-1])
				{numberArr[j] = numberArr[j-1];}
				else
				{break;}
				j--;
			}
			numberArr[j] = temp;
		}
	}
	else
	{
		var j = 0;
		var temp = 0;
		for(var i=0;i<numberArr.length;i++)
		{
			temp = numberArr[i];
			j=i;
			while(j>0)
			{
				if(temp < numberArr[j-1])
				{numberArr[j] = numberArr[j-1];}
				else
				{break;}
				j--;
			}
			numberArr[j] = temp;
		}
	}
}

Zzy.GCF.XierSort = function(numberArr,isGreat)//希爾排序
{
	isGreat = isGreat ? isGreat : false;
	//進行希爾排序
	var len = numberArr.length;
	var temp = 0;
	
	if(isGreat)
	{
		var d = 0;
		for(d = len / 2;d >= 1;d=Math.floor(d / 2))
		{
			for(var i=d;i < len;i++)
			{
				temp = numberArr[i];
				for(var j = i - d;j >= 0 && temp > numberArr[j];j = j - d)
				{
					numberArr[j + d] = numberArr[j];
				}
				numberArr[j + d] = temp;
			}
		}
	}
	else
	{
		var d = 0;
		for(d = len / 2;d >= 1;d=Math.floor(d / 2))
		{
			for(var i=d;i < len;i++)
			{
				temp = numberArr[i];
				for(var j = i - d;j >= 0 && temp < numberArr[j];j = j - d)
				{
					numberArr[j + d] = numberArr[j];
				}
				numberArr[j + d] = temp;
			}
		}	
	}
	
}

Zzy.GCF.WeightArrRandomIndex = function(weightArr)//權重陣列返回下標值
{
	var total = 0;
	for(var i=0;i<weightArr.length;i++)
	{
		total += weightArr[i];
	}
	
	var randomValue = Math.random()*total;
	
	for(var i=0;i<weightArr.length;i++)
	{
		randomValue -= weightArr[i];
		if(randomValue <= 0)
		{
			return i;//返回正確下標
		}
	}
	
	return weightArr.length-1;//最後一個下標
}


Zzy.GCF.RequestNewRandomArea = function(rect)//申請一個空白的區域,用於隨機填充顯示一個範圍內bitmap對象的下標值
{
	var ID = 0;
	var isTr = false;
	for(var i=0;i<Zzy.GCF.RandomAreaArr.length;i++)
	{
		if(Zzy.GCF.RandomAreaArr[i] === undefined)
		{ID = i;isTr = true;}
	}
	if(!isTr)
	{ID = Zzy.GCF.RandomAreaArr.length;}

	Zzy.GCF.RandomAreaArr[ID] = {};
	Zzy.GCF.RandomAreaArr[ID].rect = rect;
	Zzy.GCF.RandomAreaArr[ID].sprRectArr = [];
	
	return ID;
}

Zzy.GCF.ReturnSprRandomAreaPos = function(ID,spr)
{
	var rect = {};
	var w = spr.bitmap.width;
	var h = spr.bitmap.height;
	//計算範圍值
	var tempSRect = Zzy.GCF.RandomAreaArr[ID].rect;
	var rangRect = {};
	rangRect.left = tempSRect.left;
	rangRect.up = tempSRect.up;
	rangRect.right = tempSRect.right-w;
	rangRect.down = tempSRect.down-h;
	
	var rangW = rangRect.right - rangRect.left;
	var rangH = rangRect.down - rangRect.up;

	
	if(w > rangW || h > rangH)//大小越界
	{return {x:NaN,y:NaN};}
	
	
	var randX = 0;
	var randY = 0;
	var tRect = {};
	
	for(var i=0;i<200;i++)//重複200此,滿足不覆蓋,防止卡死
	{
		randX = Math.round(Math.random()*rangW)+rangRect.left;
		randY = Math.round(Math.random()*rangH)+rangRect.up;
		
		tRect.left = randX;
		tRect.up = randY;
		tRect.right = randX+w;
		tRect.down = randY+h;
		
		
		var isLapped = false;
		
		for(var j=0;j<Zzy.GCF.RandomAreaArr[ID].sprRectArr.length;j++)
		{
			var tRect2 = Zzy.GCF.RandomAreaArr[ID].sprRectArr[j];
			
			if(Zzy.GCF.CheckRectCollision(tRect,tRect2))//重疊
			{
				isLapped = true;
				break;
			}
			
		}
		if(!isLapped)//沒有重疊
		{break;}
	}
	
	//壓入內容
	Zzy.GCF.RandomAreaArr[ID].sprRectArr.push(tRect);
	
	//返回點位
	var ofx = spr.anchor.x*w;
	var ofy = spr.anchor.y*h;
	
	
	return {x:tRect.left+ofx,y:tRect.up+ofy};
}


Zzy.GCF.DeleteRandomArea = function(ID)//刪除這個區域
{
	Zzy.GCF.RandomAreaArr[ID] = undefined;
}

Zzy.GCF.Dot = function(P1,P2)//點乘
{
	return P1.x * P2.x + P1.y * P2.y;
}

Zzy.GCF.Cross = function(P1,P2)//叉乘
{
	return P1.x * P2.y - P2.x * P1.y;
}

Zzy.GCF.VectorAdd = function(P1,P2)//向量相加
{
	var tP = {};
	tP.x = P1.x+P2.x;
	tP.y = P1.y+P2.y;
	return tP;
}



Zzy.GCF.VectorSub = function(P1,P2)//向量相減
{
	var tP = {};
	tP.x = P1.x-P2.x;
	tP.y = P1.y-P2.y;
	return tP;
}


Zzy.GCF.JudgPointInPolygon = function(Point,polygonArr)//判斷一個點是否在多邊形中
{
	if(polygonArr.length <= 2)//不滿足至少三條邊緣,不成立
	{return NaN;}
	
	var flag = false;
	var P1 = undefined;
	var P2 = undefined;
	var Po = Point;
	
	for(var i=0;i<polygonArr.length;i++)
	{
		P1 = polygonArr[i];
		P2 = polygonArr[(i+1)%polygonArr.length];
		
		if(Zzy.GCF.OnSegment(Po,P1,P2))return true;//點在多邊形的一條邊上
		//與右側水平射線相交判斷
		if((Zzy.GCF.Dcmp(P1.y-Po.y) > 0 !== Zzy.GCF.Dcmp(P2.y-Po.y) > 0) && Zzy.GCF.Dcmp(Po.x - (Po.y - P1.y)*(P1.x-P2.x) / (P1.y-P2.y)-P1.x) < 0)
		{
			flag = !flag;
		}
	}
	return flag;
}


Zzy.GCF.Dcmp = function(v)
{
	var tv = v;
	if(tv<0)tv*=-1;
	if(tv<0.000001)return 0;
	else
		return v<0?-1:1;
}

Zzy.GCF.OnSegment = function( Po, P1, P2)//判斷一個點是否線上段上
{
	var tp1 = Zzy.GCF.VectorSub(P1,Po);
	var tp2 = Zzy.GCF.VectorSub(P2,Po);
	return Zzy.GCF.Dcmp(Zzy.GCF.Cross(tp1,tp2)) === 0 && Zzy.GCF.Dcmp(Zzy.GCF.Dot(tp1,tp2)) <= 0;
}

Zzy.GCF.ScaleToPolygon = function(spr,pointArr,size,isInt)//確定一個點,使這個多邊形按照點的比例進行縮放
{
	isInt = isInt === undefined ? true : isInt;
	//if(size === 1){return pointArr;}
	
	var tempPointArr = [];
	var CenterX = spr.bitmap.width * spr.anchor.x;
	var CenterY = spr.bitmap.height * spr.anchor.y;	
	
	for(var i=0;i<pointArr.length;i++)
	{
		tempPointArr[i] = {};
		
		if(pointArr[i].x<CenterX)
		{tempPointArr[i].x = CenterX - (CenterX-pointArr[i].x)*size;}
		else if(pointArr[i].x>CenterX)
		{tempPointArr[i].x = CenterX + (pointArr[i].x-CenterX)*size;}
		else
		{tempPointArr[i].x = CenterX;}
		
		if(pointArr[i].y<CenterY)
		{tempPointArr[i].y = CenterY - (CenterY-pointArr[i].y)*size;}
		else if(pointArr[i].y>CenterY)
		{tempPointArr[i].y = CenterY + (pointArr[i].y-CenterY)*size;}
		else
		{tempPointArr[i].y = CenterY;}	
	
		if(isInt)
		{
			tempPointArr[i].x = Math.round(tempPointArr[i].x);
			tempPointArr[i].y = Math.round(tempPointArr[i].y);
		}	
	
	}
	return tempPointArr;	
}

Zzy.GCF.OfRotaionToPolygon = function(spr,pointArr,rotation,isInt)//確定一個點,使這個多邊形按照點的較短進行旋轉任意弧度,範圍-Math.PI~Math.PI,同時也用於重新整理
{
	isInt = isInt === undefined ? true : isInt;
	
	rotation = rotation ? rotation : 0;
	var tempPointArr = [];
	var CenterX = spr.bitmap.width * spr.anchor.x;
	var CenterY = spr.bitmap.height * spr.anchor.y;		
	var fRot = 0//臨時角度
	var dis = 0;
	
	
	
	for(var i=0;i<pointArr.length;i++)
	{
		tempPointArr[i] = {};
		
		fRot = spr.rotation + Zzy.GCF.P1P2Rotation(CenterX,CenterY,pointArr[i].x,pointArr[i].y) + rotation;//計算角度
		dis = Zzy.GCF.Distance(CenterX,CenterY,pointArr[i].x,pointArr[i].y);//計算距離
		tempPointArr[i].x = Math.sin(fRot) * dis + CenterX;
		tempPointArr[i].y = CenterY - Math.cos(fRot) * dis;

		if(isInt)
		{
			tempPointArr[i].x = Math.round(tempPointArr[i].x);
			tempPointArr[i].y = Math.round(tempPointArr[i].y);
		};
	}
	return tempPointArr;
}

Zzy.GCF.OfPosToPolygon = function(spr,pointArr,pos,isInt)
{
	isInt = isInt === undefined ? true : isInt;
	
	for(var i=0;i<pointArr.length;i++)
	{
		tempPointArr[i] = {};
		tempPointArr[i].x = pointArr[i].x+pos.x;
		tempPointArr[i].y = pointArr[i].y+pos.y;
	}
	return tempPointArr;	
}


Zzy.GCF.SnapToLocal = function(path,fileName)//截圖到本地 path需要輸入路徑  fileName需要輸入檔名
{
	path = path ? path : '';
	fileName = fileName ? fileName : '';
	var snapBitmap = SceneManager.snap();//螢幕截圖
	
	if(!snapBitmap)
	{
		console.log("Error:(來自LiuYue_GameCore)未知錯誤:執行SceneManager.snap()失敗");return false;
	}
	
	var url = snapBitmap._canvas.toDataURL('image/png');//轉換為URL
	var base64Data = url.replace(/^data:image\/\w+;base64,/,"");//正規表示式
	var dataBuffer = new Buffer(base64Data,'base64');//轉換成緩衝
	
	var path = './'+path+'/'+fileName+'.png';
	const fs = require('fs');
	
	var pointer = fs.writeFile(path,dataBuffer,function(err){
		if(err)
		{console.log(err);}
	});
	return true;
}

Zzy.GCF.SnapToLocalOfPictures = function(fileName)//截圖到pcitures資料夾中
{
	return Zzy.GCF.SnapToLocal('img/pictures',fileName);
}

Zzy.GCF.SnapToLocalOfSystem = function(fileName)//截圖到system資料夾中
{
	return Zzy.GCF.SnapToLocal('img/system',fileName);
}

Zzy.GCF.BezierP3 = function(p0,p1,p2,count)//返回一個完整點的貝塞爾曲線(3點)  p0型別:{x: ,y:  }
{
	count = count ? count : 100;
	var t = 0;
	var st = 0;
	var x = 0;
	var y = 0;
	var pArr = [];
	for(var i=0;i<=count;i++)
	{
		t = i / count;
		st = 1 - t;
		x = st * st * p0.x + 2 * t * st * p1.x + t * t * p2.x;
		y = st * st * p0.y + 2 * t * st * p1.y + t * t * p2.y;
		pArr[i] = {x:x,y:y};
	}
	return pArr;
}

Zzy.GCF.BezierP3Point = function(p0,p1,p2,tPer)//tPer輸入位於路徑上的百分比,範圍0~100之間,返回值為座標點
{
	var t = tPer * 0.01;
	var st = 1 - t;
	var x = st * st * p0.x + 2 * t * st * p1.x + t * t * p2.x;
	var y = st * st * p0.y + 2 * t * st * p1.y + t * t * p2.y;
	return {x:x,y:y};
}


Zzy.GCF.BezierP4 = function(p0,p1,p2,p3,count)//返回一個完整點的貝塞爾曲線(4點)
{
	count = count ? count : 100;
	var t = 0;
	var st = 0;
	var x = 0;
	var y = 0;
	var pArr = [];
	for(var i=0;i<=count;i++)
	{
		t = i / count;
		st = 1 - t;
		x = p0.x * st * st * st + 3 * p1.x * t * st * st + 3 * p2.x * t * t * st + p3.x * t * t * t;
		y = p0.y * st * st * st + 3 * p1.y * t * st * st + 3 * p2.y * t * t * st + p3.y * t * t * t;
		pArr[i] = {x:x,y:y};
	}
	return pArr;
}

Zzy.GCF.BezierP4Point = function(p0,p1,p2,p3,tPer)//tPer輸入位於路徑上的百分比,範圍0~100之間,返回值為座標點
{
	var t = tPer * 0.01;
	var st = 1 - t;
	var x = p0.x * st * st * st + 3 * p1.x * t * st * st + 3 * p2.x * t * t * st + p3.x * t * t * t;
	var y = p0.y * st * st * st + 3 * p1.y * t * st * st + 3 * p2.y * t * t * st + p3.y * t * t * t;
	return {x:x,y:y};	
}
