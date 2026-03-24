/*:
 * @plugindesc v1.04 LinkLook 連連看
 * @author 流逝的歲月
 *
 * @help
 * ============================================================================
 * 介紹
 * ============================================================================
 *
 *
 * 這個外掛內建了一款《連連看》的小遊戲
 *
 *
 *《連連看》是由黃興武創作的一款PC端益智類遊戲 。
 *《連連看》只要將相同的兩張牌用三根以內的直線連在一起就可以消除，規則簡單容易上手。遊戲速度節奏快，畫面清晰可愛，適合細心的玩家。豐富的道具和公共模式的加入，增強遊戲的競爭性。多樣式的地圖，使玩家在各個遊戲水平都可以尋找到挑戰的目標，長期地保持遊戲的新鮮感。
 *
 *
 *
 *
 * 注意:執行這個外掛至少需要LiuYue_GameCore(v1.20版本)(流月小遊戲核心)作為前置外掛
 *
 *
 *---------------------------------------------------------
 *
 *使用條例：本外掛完全免費，隨意魔改
 *
 *---------------------------------------------------------
 *
 *
 * 以下是在寫入公式時可以帶入的數據資訊:
 *
 *
 *
 * variables : 這個值是全域性變數陣列
 * v : 同上
 * V : 同上
 * switchs : 這個值是全域性開關陣列
 * s : 同上
 * S : 同上
 * line : 這個值是行數,如果有,則存在
 * list : 這個值是列數,如果有,則存在
 * size : 這個值是每個星星方塊的尺寸,如果有,則存在
 * type : 這個值是關卡中存在的方塊的種類,如果有,則存在
 * level : 這個值是目前關卡等級的數值
 * score : 這個值是目前獲取的分數
 * time : 這個值是目前所消耗的時間,注意是以幀數作為單位
 * maxlevel : 這個值遊戲的最大通關等級,如果有,則存在
 *
 *
 *
 * 首先是對圖片資源的介紹,以下單位均以xp(畫素)為單位
 * '背景'圖片                                                816 * 624(預設全屏)
 * '底板'圖片                                                 48 * 48
 * '取消''退出''確認'按鈕圖片                                 91 * 50
 * '菜單背景板'圖片                                          261 * 361
 * '暫停中'圖片                                              326 * 83
 * '道具圖片組'圖片9*4                                       432 * 192
 * '時間條'圖片                                              500 * 15
 * '時間條框'圖片                                            500 * 15
 *
 *
 *
 * 以下是一些外掛用到的外掛指令
 *
 *---------------------Plugin Command--------------------
 *
 * ZzyGCF Play x                           //填入遊戲名,這將進行小遊戲,遊戲名要和參數中設定的一致,預設為LinkLook
 *
 *
 *
 * ZzyGLL StartLevel x                     //設定開始遊戲時的關卡數值,這可以是一個公式,預設值為1
 * ZzyGLL MaxLevel x                       //這會改變最大通關數,這可以是一個公式
 * ZzyGLL Time x                           //這會改變每一關的限制時間,這可以是一個公式
 * ZzyGLL Line x                           //這會改變每一關的方塊行數,這可以是一個公式
 * ZzyGLL List x                           //這會改變每一關的方塊列數,這可以是一個公式
 * ZzyGLL Size x                           //這會改變每一關方塊的尺寸,這可以是一個公式
 * ZzyGLL Type x                           //這會改變每一關擁有的方塊的型別,這可以是一個公式
 * ZzyGLL ConnectSocre x                   //這會改變連線方塊時獲取的分數,這可以是一個公式 
 * ZzyGLL SurplusSocre x                   //這會改變剩餘時間每秒獲得的獎勵分數,這可以是一個公式 
 *
 *	
 *
 *
 *
 *
 * 以下是一些外掛用到的指令碼函式
 *
 *---------------------Script Function--------------------
 * 
 *
 * Zzy.GLL.StartLevel(value)                     //設定開始遊戲時的關卡數值,這可以是一個公式,預設值為1
 * Zzy.GLL.MaxLevel(formula)               //這會改變最大通關數,這可以是一個公式
 * Zzy.GLL.Time(formula)                   //這會改變每一關的限制時間,這可以是一個公式
 * Zzy.GLL.Line(formula)                   //這會改變每一關的方塊行數,這可以是一個公式
 * Zzy.GLL.List(formula)                   //這會改變每一關的方塊列數,這可以是一個公式
 * Zzy.GLL.Size(formula)                   //這會改變每一關方塊的尺寸,這可以是一個公式
 * Zzy.GLL.Type(formula)                   //這會改變每一關擁有的方塊的型別,這可以是一個公式
 * Zzy.GLL.ConnectSocre(formula)           //這會改變連線方塊時獲取的分數,這可以是一個公式 
 * Zzy.GLL.SurplusScore(formula)           //這會改變剩餘時間每秒獲得的獎勵分數,這可以是一個公式 
 *
 *
 *
 *
 *
 *
 *
 *----------------------------------------------------------
 *
 *
 * 我叫坂本：v1.04 拓展遊戲結算后的事件執行參數,新增控制開始關卡參數
 * 我叫坂本：v1.03 拓展指令碼函式,優化方塊自適應間距
 * 我叫坂本：v1.02 可通過參數修改圖片存放路徑,額外儲存變數
 * 我叫坂本：v1.01 新增更多可控制參數,新增與舊存檔相容
 * 我叫坂本：v1.00 完成外掛功能
 *
 *----------------------------------------------------------
 *
 * @param ---主設定---
 * @default
 *
 *
 * @param GameName
 * @text 遊戲名
 * @parent ---主設定---
 * @type text
 * @desc 這是啟動遊戲的名稱,呼叫Play外掛命令后填寫的遊戲名,預設為LinkLook
 * @default LinkLook
 *
 *
 *
 * @param ---事件執行---
 * @default
 *
 *
 * @param WinCommon
 * @text 勝利事件
 * @parent ---事件執行---
 * @type Number
 * @desc 這是小遊戲結束后,如果以勝利告終,將會執行的事件ID,填0則不會執行,填寫優先順序會高於小遊戲核心
 * @default 0
 *
 * @param WinScript
 * @text 勝利指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 填寫優先順序會高於小遊戲核心
 * @default ""
 *
 *
 * @param FailCommon
 * @text 失敗事件
 * @parent ---事件執行---
 * @type Number
 * @desc 這是小遊戲結束后,如果以勝利告終,將會執行的事件ID,填0則不會執行,填寫優先順序會高於小遊戲核心
 * @default 0
 *
 * @param FailScript
 * @text 失敗指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 填寫優先順序會高於小遊戲核心
 * @default ""
 *
 *
 * @param Other1Common
 * @text 特殊情況1事件
 * @parent ---事件執行---
 * @type Number
 * @desc 除了勝利和失敗外,允許出現一些特殊形況,那種自定義的終止條件,填0則不會執行,填寫優先順序會高於小遊戲核心
 * @default 0
 *
 * @param Other1Script
 * @text 特殊情況1指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 填寫優先順序會高於小遊戲核心
 * @default ""
 *
 *
 * @param Other2Common
 * @text 特殊情況2事件
 * @parent ---事件執行---
 * @type Number
 * @desc 除了勝利和失敗外,允許出現一些特殊形況,那種自定義的終止條件,填0則不會執行,填寫優先順序會高於小遊戲核心
 * @default 0
 *
 * @param Other2Script
 * @text 特殊情況2指令碼
 * @parent ---事件執行---
 * @type note
 * @desc 填寫優先順序會高於小遊戲核心
 * @default ""
 *
 * @param SaveScoreVariable
 * @text 存放分數變數
 * @parent ---事件執行---
 * @type Variable
 * @desc 這是在進行遊戲后,存放分數變數的ID值,這個變數是額外對這款遊戲的分數進行儲存,與核心中的存放不衝突,填0則不會儲存
 * @default 0
 *
 * @param SaveTimeVariable
 * @text 存放耗時變數
 * @parent ---事件執行---
 * @type Variable
 * @desc 這是在進行遊戲后,存放事件變數的ID值,這個變數是額外對這款遊戲的耗時進行儲存,與核心中的存放不衝突,填0則不會儲存
 * @default 0
 *
 * @param ---圖片路徑---
 * @default
 *
 * @param PicPath
 * @text 圖片路徑
 * @parent ---圖片路徑---
 * @type text
 * @desc 儲存圖片的路徑,預設值是在pictures資料夾中,改成自定義資料夾請確保資料夾存在
 * @default img/pictures/LinkLook/
 *
 * @param ---圖片資源---
 * @default
 *
 *
 * @param BackGroundPic
 * @text 背景圖片
 * @parent ---圖片資源---
 * @type text
 * @desc 如果填寫了背景圖片的檔名,則會作為背景圖片,如果沒有填寫,會預設使用GameCore參數的背景圖片
 * @default LLBk
 *
 * @param PausePic
 * @text 暫停圖片
 * @parent ---圖片資源---
 * @type text
 * @desc 暫停情況下顯示的圖片,圖片放在Pictures資料夾中,如果沒有填寫,會預設使用GameCore參數中預設的背景圖片
 * @default LLPause
 *
 * @param ItemArrPic
 * @text 道具圖片組
 * @parent ---圖片資源---
 * @type text
 * @desc 道具圖片組的顯示,請輸入圖片名稱,圖片放在Pictures資料夾中,寫入正確的後綴名稱
 * @default LLItems_9x4
 *
 * @param BkBlockPic
 * @text 方塊底板
 * @parent ---圖片資源---
 * @type text
 * @desc 方塊底板的顯示,請輸入圖片名稱,圖片放在Pictures資料夾中,寫入正確的後綴名稱
 * @default LLBlock
 *
 *
 * @param MenuBkPic
 * @text 菜單底板
 * @parent ---圖片資源---
 * @type text
 * @desc 菜單底板圖片的顯示,請輸入圖片名稱,圖片放在Pictures資料夾中
 * @default LLMenuBk
 *
 * @param TimePic
 * @text 時間條圖片
 * @parent ---圖片資源---
 * @type text
 * @desc 計時器的時間條圖片,圖片放在Pictures資料夾中
 * @default LLTime
 *
 * @param TimeBkPic
 * @text 時間條背景圖片
 * @parent ---圖片資源---
 * @type text
 * @desc 計時器的時間條背景圖片,圖片放在Pictures資料夾中
 * @default LLTimeBk
 *
 * @param OkButtonPic
 * @text 確認按鈕
 * @parent ---圖片資源---
 * @type text
 * @desc 確認按鈕的圖片名稱,圖片放在Pictures資料夾中,注意按鈕有3張圖片,后兩張後綴標註'1','2'
 * @default LLOk
 *
 * @param CancelButtonPic
 * @text 取消按鈕
 * @parent ---圖片資源---
 * @type text
 * @desc 取消按鈕的圖片名稱,圖片放在Pictures資料夾中,注意按鈕有3張圖片,后兩張後綴標註'1','2'
 * @default LLCancel
 *
 * @param ExitButtonPic
 * @text 退出按鈕
 * @parent ---圖片資源---
 * @type text
 * @desc 退出按鈕的圖片名稱,圖片放在Pictures資料夾中,注意按鈕有3張圖片,后兩張後綴標註'1','2'
 * @default LLExit
 *
 *
 * @param ---額外設定---
 * @default
 *
 *
 * @param ConnectSpeed
 * @text 連線速度
 * @parent ---額外設定---
 * @type number
 * @desc 兩個方塊連線的速度,預設值為10
 * @default 10
 *
 *
 *
 *
 * @param ---數據設定---
 * @default
 *
 * @param StartLevel
 * @parent ---數據設定---
 * @text 關卡起始數值
 * @type Text
 * @desc 這是遊戲開始時的關卡值,這可以是一個公式,預設數值為1
 * @default 1
 *
 * @param MaxLevel
 * @text 最大關卡數
 * @parent ---數據設定---
 * @type text
 * @desc 這是能進行的關卡數量,關卡會從第一關開始,這可以是一個公式
 * @default 10
 *
 * @param CpTime
 * @text 關卡限制時間
 * @parent ---數據設定---
 * @type text
 * @desc 每個關卡內限制的到達的時間,單位為秒,這可以是一個公式,預設為90秒
 * @default 90
 *
 * @param CpLine
 * @text 關卡方塊行數
 * @parent ---數據設定---
 * @type text
 * @desc 每個關卡內限制的關卡方塊行數,單位為秒,這可以是一個公式,預設為8
 * @default 8
 *
 * @param CpList
 * @text 關卡方塊列數
 * @parent ---數據設定---
 * @type text
 * @desc 每個關卡內限制的關卡方塊列數,單位為秒,這可以是一個公式,預設為12
 * @default 12
 *
 * @param CpSize
 * @text 關卡方塊尺寸
 * @parent ---數據設定---
 * @type text
 * @desc 每個關卡內限制的關卡方塊大小,單位為畫素,這可以是一個公式,預設為48
 * @default 48
 *
 * @param CpType
 * @text 關卡消除型別數
 * @parent ---數據設定---
 * @type text
 * @desc 每個關卡內的連連看型別,,這可以是一個公式,預設為Math.min(Math.max(9,Math.floor(this.level/2+9)),18);
 * @default Math.min(Math.max(9,Math.floor(this.level/2+9)),18);
 *
 *
 * @param ConnectSocre
 * @text 連線得分
 * @parent ---數據設定---
 * @type text
 * @desc 方塊進行連線時,獲得的分數,這可以是一個公式,預設為10
 * @default 10
 *
 * @param SurplusTimeSocre
 * @text 剩餘時間得分
 * @parent ---數據設定---
 * @type text
 * @desc 通關后剩餘的時間每秒數獲得的額外分數,這可以是一個公式,預設為5
 * @default 5
 *
 *
 *
 *
 * @param ---特殊結束條件1---
 * @default
 *
 * @param OtherEnd1Script
 * @text 特殊情況1指令碼
 * @parent ---特殊結束條件1---
 * @type note
 * @desc 
 * @default ""
 *
 *
 * @param ---特殊結束條件2---
 * @default
 *
 * @param OtherEnd2Script
 * @text 特殊情況2指令碼
 * @parent ---特殊結束條件2---
 * @type note
 * @desc 
 * @default ""
 *
 *
 *
 *
 * @param ---畫面調整---
 * @default
 *
 * @param LevelSprT
 * @text 關卡文字
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字內容
 * @default 關卡:
 *
 * @param LevelSprX
 * @text 關卡文字X
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth/4
 *
 * @param LevelSprY
 * @text 關卡文字Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default 80
 *
 *
 * @param LevelSprTS
 * @text 關卡文字大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字大小
 * @default 36
 *
 *
 * @param LevelSprTC
 * @text 關卡文字顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字顏色,可輸入兩種樣式的顏色碼
 * @default #ddff88
 *
 * @param LevelSprBS
 * @text 關卡文字邊框大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字邊框大小
 * @default 4
 *
 *
 * @param LevelSprBC
 * @text 關卡文字邊框顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字邊框顏色,可輸入兩種樣式的顏色碼
 * @default rgba(0,0,0,0.5)
 *
 *
 *
 * @param ScoreSprT
 * @text 分數文字
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字內容
 * @default 分數:
 *
 * @param ScoreSprX
 * @text 分數文字X
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth/2+50
 *
 * @param ScoreSprY
 * @text 分數文字Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default 80
 *
 *
 * @param ScoreSprTS
 * @text 分數文字大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字大小
 * @default 36
 *
 *
 * @param ScoreSprTC
 * @text 分數文字顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字顏色,可輸入兩種樣式的顏色碼
 * @default #ddff88
 *
 * @param ScoreSprBS
 * @text 分數文字邊框大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字邊框大小
 * @default 4
 *
 *
 * @param ScoreSprBC
 * @text 分數文字邊框顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字邊框顏色,可輸入兩種樣式的顏色碼
 * @default rgba(0,0,0,0.5)
 *
 *
 *
 * @param MaxScoreSprT
 * @text 最高分文字
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字內容
 * @default 最高分:
 *
 * @param MaxScoreSprX
 * @text 最高分文字X
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth*3/4+120
 *
 * @param MaxScoreSprY
 * @text 最高分文字Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default 80
 *
 *
 * @param MaxScoreSprTS
 * @text 最高分文字大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字大小
 * @default 36
 *
 *
 * @param MaxScoreSprTC
 * @text 最高分文字顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字顏色,可輸入兩種樣式的顏色碼
 * @default #ddff88
 *
 * @param MaxScoreSprBS
 * @text 最高分文字邊框大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字邊框大小
 * @default 4
 *
 *
 * @param MaxScoreSprBC
 * @text 最高分文字邊框顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字邊框顏色,可輸入兩種樣式的顏色碼
 * @default rgba(0,0,0,0.5)
 *
 *
 *
 * @param TimeSprT
 * @text 時間文字
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字內容
 * @default 時間
 *
 * @param TimeSprX
 * @text 時間文字X
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth/5-40
 *
 * @param TimeSprY
 * @text 時間文字Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default Graphics.boxHeight/5+20
 *
 *
 * @param TimeSprTS
 * @text 時間文字大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字大小
 * @default 36
 *
 *
 * @param TimeSprTC
 * @text 時間文字顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字顏色,可輸入兩種樣式的顏色碼
 * @default #ddff88
 *
 * @param TimeSprBS
 * @text 時間文字邊框大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字邊框大小
 * @default 4
 *
 *
 * @param TimeSprBC
 * @text 時間文字邊框顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字邊框顏色,可輸入兩種樣式的顏色碼
 * @default rgba(0,0,0,0.5)
 *
 *
 *
 * @param ScoreTotalT
 * @text 總分文字
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字內容
 * @default 總分:
 *
 * @param ScoreTotalX
 * @text 總分文字X
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth/2+50
 *
 * @param ScoreTotalY
 * @text 總分文字Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default Graphics.boxHeight/2
 *
 *
 * @param ScoreTotalTS
 * @text 總分文字大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字大小
 * @default 36
 *
 *
 * @param ScoreTotalTC
 * @text 總分文字顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字顏色,可輸入兩種樣式的顏色碼
 * @default rgba(255,220,120,1)
 *
 * @param ScoreTotalBS
 * @text 總分文字邊框大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字邊框大小
 * @default 4
 *
 *
 * @param ScoreTotalBC
 * @text 總分文字邊框顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字邊框顏色,可輸入兩種樣式的顏色碼
 * @default rgba(180,120,120,1)
 *
 *
 *
 * @param TimeTotalT
 * @text 總耗時文字
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字內容
 * @default 耗時:
 *
 * @param TimeTotalX
 * @text 總耗時文字X
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth/2+50
 *
 * @param TimeTotalY
 * @text 總耗時文字Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default Graphics.boxHeight/2+60
 *
 *
 * @param TimeTotalTS
 * @text 總耗時文字大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字大小
 * @default 36
 *
 *
 * @param TimeTotalTC
 * @text 總耗時文字顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字顏色,可輸入兩種樣式的顏色碼
 * @default rgba(255,220,120,1)
 *
 * @param TimeTotalBS
 * @text 總耗時文字邊框大小
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的文字邊框大小
 * @default 4
 *
 *
 * @param TimeTotalBC
 * @text 總耗時文字邊框顏色
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字邊框顏色,可輸入兩種樣式的顏色碼
 * @default rgba(180,120,120,1)
 *
 *
 * @param TimeTileL
 * @text 時間條長度
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的時間條的長度值
 * @default 500
 *
 * @param TimeTileH
 * @text 時間條高度
 * @parent ---畫面調整---
 * @type number
 * @desc 顯示的時間條的高度
 * @default 15
 *
 *
 * @param TimeTileX
 * @text 時間條X
 * @parent ---畫面調整---
 * @type text
 * @desc 時間條位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth/5
 *
 * @param TimeTileY
 * @text 時間條Y
 * @parent ---畫面調整---
 * @type text
 * @desc 時間條位置Y,可以輸入一段程式碼
 * @default Graphics.boxHeight/5
 *
 *
 * @param ExitButtonX
 * @text 退出按鈕X
 * @parent ---畫面調整---
 * @type text
 * @desc 推出按鈕位置X,可以輸入一段程式碼
 * @default Graphics.boxWidth-64
 *
 * @param ExitButtonY
 * @text 退出按鈕Y
 * @parent ---畫面調整---
 * @type text
 * @desc 顯示的文字位置Y,可以輸入一段程式碼
 * @default Graphics.boxHeight-32
 *
 *
 *
 * @param ---音效---
 * @default
 *
 * @param BkBGMName
 * @text 背景BGM名稱
 * @parent ---音效---
 * @type file
 * @dir audio/bgm
 * @desc 執行小遊戲時,會播放的背景bgm,BGM應放在audio/bgm資料夾中,不填寫會使用GameCore外掛中預設的背景音效
 * @default
 *
 * @param BkBGMVolume
 * @text 背景BGM音量
 * @parent ---音效---
 * @type Number
 * @desc 音量大小,預設100
 * @default 100
 
 * @param BkBGMPitch
 * @text 背景BGM聲調
 * @parent ---音效---
 * @type Number
 * @desc 聲調,預設100
 * @default 100
 
 * @param BkBGMBGSPan
 * @text 背景BGM聲道
 * @parent ---音效---
 * @type Number
 * @desc 聲道,預設0
 * @default 0
 *
 *
 * @param ButtonSound
 * @text 按鈕時音效
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 按鈕時產生的聲音,請填寫audio/se資料夾中的檔名,不包含m4a.ogg的後綴名
 * @default Cancel2
 *
 * @param ButtonVolume
 * @text 按鈕時音量
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 按鈕時產生的音量,預設值100
 * @default 100
 *
 * @param ButtonPitch
 * @text 按鈕時音調
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 按鈕時產生的音調,預設值100
 * @default 100
 *
 * @param ButtonPan
 * @text 按鈕時聲道
 * @parent ---音效---
 * @type number
 * @desc 按鈕時產生的聲道,預設值0
 * @default 0
 *
 *
 * @param SelectSound
 * @text 選擇圖片時音效
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 選擇圖片時產生的聲音,請填寫audio/se資料夾中的檔名,不包含m4a.ogg的後綴名
 * @default Switch1
 *
 * @param SelectVolume
 * @text 選擇圖片時音量
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 選擇圖片時產生的音量,預設值100
 * @default 100
 *
 * @param SelectPitch
 * @text 選擇圖片時音調
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 選擇圖片時產生的音調,預設值100
 * @default 100
 *
 * @param SelectPan
 * @text 選擇圖片時聲道
 * @parent ---音效---
 * @type number
 * @desc 選擇圖片時產生的聲道,預設值0
 * @default 0
 *
 *
 *
 * @param CancelSound
 * @text 選擇失效時音效
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 選擇失效時產生的聲音,請填寫audio/se資料夾中的檔名,不包含m4a.ogg的後綴名
 * @default Crossbow
 *
 * @param CancelVolume
 * @text 選擇失效時音量
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 選擇失效時產生的音量,預設值100
 * @default 100
 *
 * @param CancelPitch
 * @text 選擇失效時音調
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 選擇失效時產生的音調,預設值100
 * @default 100
 *
 * @param CancelPan
 * @text 選擇失效時聲道
 * @parent ---音效---
 * @type number
 * @desc 選擇失效時產生的聲道,預設值0
 * @default 0
 *
 *
 * @param DestroySound
 * @text 連線消除時音效
 * @parent ---音效---
 * @type file
 * @dir audio/se
 * @desc 連線消除時產生的聲音,請填寫audio/se資料夾中的檔名,不包含m4a.ogg的後綴名
 * @default Item1
 *
 * @param DestroyVolume
 * @text 連線消除時音量
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 連線消除時產生的音量,預設值100
 * @default 100
 *
 * @param DestroyPitch
 * @text 連線消除時音調
 * @parent ---音效---
 * @type number
 * @min 0
 * @desc 連線消除時產生的音調,預設值100
 * @default 100
 *
 * @param DestroyPan
 * @text 連線消除時聲道
 * @parent ---音效---
 * @type number
 * @desc 連線消除時產生的聲道,預設值0
 * @default 0
 */
 
 
var LiuYue = LiuYue || {};
LiuYue.LiuYue_GameLinkLook = true;//外掛啟動

var Zzy = Zzy || {};
Zzy.GLL = Zzy.GLL || {};
Zzy.GLL.version = 1.04;  
Zzy.Parameters = PluginManager.parameters('LiuYue_GameLinkLook');
Zzy.Param = Zzy.Param || {};
Zzy.Param.GLLGameName = String(Zzy.Parameters['GameName']);//啟動遊戲的名稱

Zzy.GLL.GameCorePlugin = false;
if(LiuYue.LiuYue_GameCore)//前置外掛檢測
{
	Zzy.GCF.GameCorePlugin = true;
}
else
{
	console.log("Error:(LiuYue_GameLinkLook):這個外掛需要LiuYue_GameCore作為前置外掛,請將這個外掛放在覈心外掛下!!!");
}

//註冊遊戲
Zzy.GCF.RegisterGame(Zzy.Param.GLLGameName,'LinkLook');



//--------------------------------------數據----------------------------------------



Zzy.Param.GLLStartLevel = String(Zzy.Parameters['StartLevel']);//目前關卡值
Zzy.Param.GLLMaxLevel = String(Zzy.Parameters['MaxLevel']);//最大關卡數
Zzy.Param.GLLCpTime = String(Zzy.Parameters['CpTime']);//關卡限制時間
Zzy.Param.GLLCpLine = String(Zzy.Parameters['CpLine']);//關卡方塊行數
Zzy.Param.GLLCpList = String(Zzy.Parameters['CpList']);//關卡方塊列數
Zzy.Param.GLLCpSize = String(Zzy.Parameters['CpSize']);//關卡方塊尺寸
Zzy.Param.GLLCpType = String(Zzy.Parameters['CpType']);//關卡方塊型別
Zzy.Param.GLLConnectSocre = String(Zzy.Parameters['ConnectSocre']);//連線得分
Zzy.Param.GLLSurplusTimeSocre = String(Zzy.Parameters['SurplusTimeSocre']);//剩餘時間得分


Zzy.Param.GLLConnectSpeed = Number(Zzy.Parameters['ConnectSpeed']);//連線速度


//可用文字
Zzy.GLL.TextArr = [
'',
'- Pause -',
'Exit ?',
'Success',
'Finish'
];




//---------------------------------------圖片-----------------------------------------

Zzy.Param.GLLWinCommon = parseInt(Zzy.Parameters['WinCommon']);//勝利事件
Zzy.Param.GLLWinScript = Zzy.Parameters['WinScript'] ? new Function(JSON.parse(Zzy.Parameters['WinScript']) + '\nreturn true;') : undefined;//勝利指令碼
Zzy.Param.GLLFailCommon = parseInt(Zzy.Parameters['FailCommon']);//失敗事件
Zzy.Param.GLLFailScript = Zzy.Parameters['FailScript'] ? new Function(JSON.parse(Zzy.Parameters['FailScript']) + '\nreturn true;') : undefined;//失敗指令碼
Zzy.Param.GLLOther1Common = parseInt(Zzy.Parameters['Other1Common']);//特殊情況1事件
Zzy.Param.GLLOther1Script = Zzy.Parameters['Other1Script'] ? new Function(JSON.parse(Zzy.Parameters['Other1Script']) + '\nreturn true;') : undefined;//特殊情況1指令碼
Zzy.Param.GLLOther2Common = parseInt(Zzy.Parameters['Other2Common']);//特殊情況2事件
Zzy.Param.GLLOther2Script = Zzy.Parameters['Other2Script'] ? new Function(JSON.parse(Zzy.Parameters['Other2Script']) + '\nreturn true;') : undefined;//特殊情況2指令碼
Zzy.Param.GLLSaveScoreVariable = parseInt(Zzy.Parameters['SaveScoreVariable']);//變數index
Zzy.Param.GLLSaveTimeVariable = parseInt(Zzy.Parameters['SaveTimeVariable']);//變數index


Zzy.Param.GLLPicPath = String(Zzy.Parameters['PicPath']);//圖片路徑

Zzy.Param.GLLBackGroundPic = String(Zzy.Parameters['BackGroundPic']);//背景
Zzy.Param.GLLPausePic = String(Zzy.Parameters['PausePic']);//暫停
Zzy.Param.GLLItemArrPic = String(Zzy.Parameters['ItemArrPic']);//道具
Zzy.Param.GLLBkBlockPic = String(Zzy.Parameters['BkBlockPic']);//道具底板

Zzy.Param.GLLMenuBkPic = String(Zzy.Parameters['MenuBkPic']);//菜單背景板
Zzy.Param.GLLOkButtonPic = String(Zzy.Parameters['OkButtonPic']);//OK按鈕圖片
Zzy.Param.GLLCancelButtonPic = String(Zzy.Parameters['CancelButtonPic']);//取消按鈕圖片
Zzy.Param.GLLExitButtonPic = String(Zzy.Parameters['ExitButtonPic']);//退出按鈕圖片
Zzy.Param.GLLTimePic = String(Zzy.Parameters['TimePic']);//時間條圖片
Zzy.Param.GLLTimeBkPic = String(Zzy.Parameters['TimeBkPic']);//時間條背景圖片




//------------------------------特殊情況1,2指令碼--------------------------------
Zzy.Param.GLLOtherEnd1Script = new Function(JSON.parse(Zzy.Parameters['OtherEnd1Script']));//結束情況1
Zzy.Param.GLLOtherEnd2Script = new Function(JSON.parse(Zzy.Parameters['OtherEnd2Script']));//結束情況2





//------------------------------畫面調整----------------------------------------

Zzy.Param.GLLLevelSprT = String(Zzy.Parameters['LevelSprT']);
Zzy.Param.GLLLevelSprX = String(Zzy.Parameters['LevelSprX']);
Zzy.Param.GLLLevelSprY = String(Zzy.Parameters['LevelSprY']);
Zzy.Param.GLLLevelSprTS = parseInt(Zzy.Parameters['LevelSprTS']);
Zzy.Param.GLLLevelSprTC = String(Zzy.Parameters['LevelSprTC']);
Zzy.Param.GLLLevelSprBS = parseInt(Zzy.Parameters['LevelSprBS']);
Zzy.Param.GLLLevelSprBC = String(Zzy.Parameters['LevelSprBC']);



Zzy.Param.GLLScoreSprT = String(Zzy.Parameters['ScoreSprT']);
Zzy.Param.GLLScoreSprX = String(Zzy.Parameters['ScoreSprX']);
Zzy.Param.GLLScoreSprY = String(Zzy.Parameters['ScoreSprY']);
Zzy.Param.GLLScoreSprTS = parseInt(Zzy.Parameters['ScoreSprTS']);
Zzy.Param.GLLScoreSprTC = String(Zzy.Parameters['ScoreSprTC']);
Zzy.Param.GLLScoreSprBS = parseInt(Zzy.Parameters['ScoreSprBS']);
Zzy.Param.GLLScoreSprBC = String(Zzy.Parameters['ScoreSprBC']);



Zzy.Param.GLLMaxScoreSprT = String(Zzy.Parameters['MaxScoreSprT']);
Zzy.Param.GLLMaxScoreSprX = String(Zzy.Parameters['MaxScoreSprX']);
Zzy.Param.GLLMaxScoreSprY = String(Zzy.Parameters['MaxScoreSprY']);
Zzy.Param.GLLMaxScoreSprTS = parseInt(Zzy.Parameters['MaxScoreSprTS']);
Zzy.Param.GLLMaxScoreSprTC = String(Zzy.Parameters['MaxScoreSprTC']);
Zzy.Param.GLLMaxScoreSprBS = parseInt(Zzy.Parameters['MaxScoreSprBS']);
Zzy.Param.GLLMaxScoreSprBC = String(Zzy.Parameters['MaxScoreSprBC']);



Zzy.Param.GLLTimeSprT = String(Zzy.Parameters['TimeSprT']);
Zzy.Param.GLLTimeSprX = String(Zzy.Parameters['TimeSprX']);
Zzy.Param.GLLTimeSprY = String(Zzy.Parameters['TimeSprY']);
Zzy.Param.GLLTimeSprTS = parseInt(Zzy.Parameters['TimeSprTS']);
Zzy.Param.GLLTimeSprTC = String(Zzy.Parameters['TimeSprTC']);
Zzy.Param.GLLTimeSprBS = parseInt(Zzy.Parameters['TimeSprBS']);
Zzy.Param.GLLTimeSprBC = String(Zzy.Parameters['TimeSprBC']);


Zzy.Param.GLLScoreTotalT = String(Zzy.Parameters['ScoreTotalT']);
Zzy.Param.GLLScoreTotalX = String(Zzy.Parameters['ScoreTotalX']);
Zzy.Param.GLLScoreTotalY = String(Zzy.Parameters['ScoreTotalY']);
Zzy.Param.GLLScoreTotalTS = parseInt(Zzy.Parameters['ScoreTotalTS']);
Zzy.Param.GLLScoreTotalTC = String(Zzy.Parameters['ScoreTotalTC']);
Zzy.Param.GLLScoreTotalBS = parseInt(Zzy.Parameters['ScoreTotalBS']);
Zzy.Param.GLLScoreTotalBC = String(Zzy.Parameters['ScoreTotalBC']);



Zzy.Param.GLLTimeTotalT = String(Zzy.Parameters['TimeTotalT']);
Zzy.Param.GLLTimeTotalX = String(Zzy.Parameters['TimeTotalX']);
Zzy.Param.GLLTimeTotalY = String(Zzy.Parameters['TimeTotalY']);
Zzy.Param.GLLTimeTotalTS = parseInt(Zzy.Parameters['TimeTotalTS']);
Zzy.Param.GLLTimeTotalTC = String(Zzy.Parameters['TimeTotalTC']);
Zzy.Param.GLLTimeTotalBS = parseInt(Zzy.Parameters['TimeTotalBS']);
Zzy.Param.GLLTimeTotalBC = String(Zzy.Parameters['TimeTotalBC']);


Zzy.Param.GLLTimeTileL = parseInt(Zzy.Parameters['TimeTileL']);
Zzy.Param.GLLTimeTileH = parseInt(Zzy.Parameters['TimeTileH']);
Zzy.Param.GLLTimeTileX = String(Zzy.Parameters['TimeTileX']);
Zzy.Param.GLLTimeTileY = String(Zzy.Parameters['TimeTileY']);


Zzy.Param.GLLExitButtonX = String(Zzy.Parameters['ExitButtonX']);
Zzy.Param.GLLExitButtonY = String(Zzy.Parameters['ExitButtonY']);




//------------------------------音效-------------------------------

Zzy.GLL.MakeSE = function(seName,seVolume,sePitch,sePan)
{
	if(!seName)return undefined;
	var se = {
		name:seName,
		volume:(seVolume ? seVolume : 100),
		pitch:(sePitch ? sePitch : 100),
		pan:(sePan ? sePan : 0)
	};
	return se;
}


Zzy.Param.GLLBkBGMName = String(Zzy.Parameters['BkBGMName']);//背景BGM名稱
Zzy.Param.GLLBkBGMVolume = parseInt(Zzy.Parameters['BkBGMVolume']);//背景BGM音量
Zzy.Param.GLLBkBGMPitch = parseInt(Zzy.Parameters['BkBGMPitch']);//背景BGM聲調
Zzy.Param.GLLBkBGMBGSPan = parseInt(Zzy.Parameters['BkBGMPan']);//背景BGM聲道
Zzy.Param.GLLBkBGM = Zzy.GLL.MakeSE(Zzy.Param.GLLBkBGMName,Zzy.Param.GLLBkBGMVolume,Zzy.Param.GLLBkBGMPitch,Zzy.Param.GLLBkBGMBGSPan);


Zzy.Param.GLLButtonSound = String(Zzy.Parameters['ButtonSound']);//按鈕時音效
Zzy.Param.GLLButtonVolume = parseInt(Zzy.Parameters['ButtonVolume']);//按鈕時音量
Zzy.Param.GLLButtonPitch = parseInt(Zzy.Parameters['ButtonPitch']);//按鈕時音調
Zzy.Param.GLLButtonPan = parseInt(Zzy.Parameters['ButtonPan']);//按鈕時聲道
Zzy.Param.GLLButtonSE = Zzy.GLL.MakeSE(Zzy.Param.GLLButtonSound,Zzy.Param.GLLButtonVolume,Zzy.Param.GLLButtonPitch,Zzy.Param.GLLButtonPan);

Zzy.Param.GLLSelectSound = String(Zzy.Parameters['SelectSound']);//選擇圖片音效
Zzy.Param.GLLSelectVolume = parseInt(Zzy.Parameters['SelectVolume']);//選擇圖片音量
Zzy.Param.GLLSelectPitch = parseInt(Zzy.Parameters['SelectPitch']);//選擇圖片音調
Zzy.Param.GLLSelectPan = parseInt(Zzy.Parameters['SelectPan']);//選擇圖片聲道
Zzy.Param.GLLSelectSE = Zzy.GLL.MakeSE(Zzy.Param.GLLSelectSound,Zzy.Param.GLLSelectVolume,Zzy.Param.GLLSelectPitch,Zzy.Param.GLLSelectPan);
 
Zzy.Param.GLLCancelSound = String(Zzy.Parameters['CancelSound']);//選擇失效音效
Zzy.Param.GLLCancelVolume = parseInt(Zzy.Parameters['CancelVolume']);//選擇失效音量
Zzy.Param.GLLCancelPitch = parseInt(Zzy.Parameters['CancelPitch']);//選擇失效音調
Zzy.Param.GLLCancelPan = parseInt(Zzy.Parameters['CancelPan']);//選擇失效聲道
Zzy.Param.GLLCancelSE = Zzy.GLL.MakeSE(Zzy.Param.GLLCancelSound,Zzy.Param.GLLCancelVolume,Zzy.Param.GLLCancelPitch,Zzy.Param.GLLCancelPan);

Zzy.Param.GLLDestroySound = String(Zzy.Parameters['DestroySound']);//連線消除音效
Zzy.Param.GLLDestroyVolume = parseInt(Zzy.Parameters['DestroyVolume']);//連線消除音量
Zzy.Param.GLLDestroyPitch = parseInt(Zzy.Parameters['DestroyPitch']);//連線消除音調
Zzy.Param.GLLDestroyPan = parseInt(Zzy.Parameters['DestroyPan']);//連線消除聲道
Zzy.Param.GLLDestroySE = Zzy.GLL.MakeSE(Zzy.Param.GLLDestroySound,Zzy.Param.GLLDestroyVolume,Zzy.Param.GLLDestroyPitch,Zzy.Param.GLLDestroyPan);



Zzy.Param.GLLAllSE = [];
Zzy.Param.GLLAllSE = [undefined,
		Zzy.Param.GLLButtonSE,
		Zzy.Param.GLLSelectSE,
		Zzy.Param.GLLCancelSE,
		Zzy.Param.GLLDestroySE
]

//聲音ID
//0 - undefined
//1 - 按鈕音效
//2 - 
//3 - 
//4 - 
//5 - 
//6 - 




//----------------------------臨時變數-----------------------------

Zzy.GLL.WindowPointer = undefined;//最底層
Zzy.GLL.Window1Pointer = undefined;//層1,背景方塊板子
Zzy.GLL.Window2Pointer = undefined;//層2,
Zzy.GLL.Window3Pointer = undefined;//層3,



Zzy.GLL.DefaultSize = 48;//預設尺寸
Zzy.GLL.PosManager = undefined;//位置管理



//==================================================================
//Game_System
//==================================================================

Zzy.GLL.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.GLL.Game_System_initialize.call(this);
	this.ZzyGLLInitData();//初始化數據
};

Game_System.prototype.ZzyGLLInitData = function()
{
	
	
	this._ZzyGLLStartLevel = Zzy.Param.GCSStartLevel;//開始值
	this._ZzyGLLMaxLevelFormula = Zzy.Param.GLLMaxLevel;//最大關卡數
	this._ZzyGLLCpTimeFormula = Zzy.Param.GLLCpTime;//關卡限制時間
	this._ZzyGLLCpLineFormula = Zzy.Param.GLLCpLine;//關卡方塊行數
	this._ZzyGLLCpListFormula = Zzy.Param.GLLCpList;//關卡方塊列數
	this._ZzyGLLCpSizeFormula = Zzy.Param.GLLCpSize;//關卡方塊尺寸
	this._ZzyGLLCpTypeFormula = Zzy.Param.GLLCpType;//關卡方塊型別
	this._ZzyGLLConnectSocreFormula = Zzy.Param.GLLConnectSocre;//連線得分
	this._ZzyGLLSurplusTimeSocreFormula = Zzy.Param.GLLSurplusTimeSocre;//剩餘時間得分
	
	this._ZzyGLLHistroyScore = 0;//歷史分
	this._ZzyGLLHistroyLevel = 0;//歷史等級
}


Game_System.prototype.GetZzyGLLStartLevel = function()
{
	if(this._ZzyGLLStartLevel === undefined)
	{this._ZzyGLLStartLevel = Zzy.Param.GLLStartLevel;}
	return this._ZzyGLLStartLevel;
}


Game_System.prototype.SetZzyGLLStartLevel = function(level)
{
	this._ZzyGCSStartLevel = level;
}




Game_System.prototype.GetZzyGLLMaxLevelFormula = function()
{
	if(this._ZzyGLLMaxLevelFormula === undefined)
	{this._ZzyGLLMaxLevelFormula = Zzy.Param.GLLMaxLevel;}
	return this._ZzyGLLMaxLevelFormula;
}

Game_System.prototype.SetZzyGLLMaxLevelFormula = function(formula)
{
	this._ZzyGLLMaxLevelFormula = formula;
}

Game_System.prototype.GetZzyGLLCpTimeFormula = function()
{
	if(this._ZzyGLLCpTimeFormula === undefined)
	{this._ZzyGLLCpTimeFormula = Zzy.Param.GLLCpTime;}
	return this._ZzyGLLCpTimeFormula;
}

Game_System.prototype.SetZzyGLLCpTimeFormula = function(formula)
{
	this._ZzyGLLCpTimeFormula = formula;
}

Game_System.prototype.GetZzyGLLCpLineFormula = function()
{
	if(this._ZzyGLLCpLineFormula === undefined)
	{this._ZzyGLLCpLineFormula = Zzy.Param.GLLCpLine;}
	return this._ZzyGLLCpLineFormula;
}

Game_System.prototype.SetZzyGLLCpLineFormula = function(formula)
{
	this._ZzyGLLCpLineFormula = formula;
}

Game_System.prototype.GetZzyGLLCpListFormula = function()
{
	if(this._ZzyGLLCpListFormula === undefined)
	{this._ZzyGLLCpListFormula = Zzy.Param.GLLCpList;}
	return this._ZzyGLLCpListFormula;
}

Game_System.prototype.SetZzyGLLCpListFormula = function(formula)
{
	this._ZzyGLLCpListFormula = formula;
}



Game_System.prototype.GetZzyGLLCpSizeFormula = function()
{
	if(this._ZzyGLLCpSizeFormula === undefined)
	{this._ZzyGLLCpSizeFormula = Zzy.Param.GLLCpSize;}
	return this._ZzyGLLCpSizeFormula;
}

Game_System.prototype.SetZzyGLLCpSizeFormula = function(formula)
{
	this._ZzyGLLCpSizeFormula = formula;
}


Game_System.prototype.GetZzyGLLCpTypeFormula = function()
{
	if(this._ZzyGLLCpTypeFormula === undefined)
	{this._ZzyGLLCpTypeFormula = Zzy.Param.GLLCpType;}
	return this._ZzyGLLCpTypeFormula;
}

Game_System.prototype.SetZzyGLLCpTypeFormula = function(formula)
{
	this._ZzyGLLCpTypeFormula = formula;
}


Game_System.prototype.GetZzyGLLConnectSocreFormula = function()
{
	if(this._ZzyGLLConnectSocreFormula === undefined)
	{this._ZzyGLLConnectSocreFormula = Zzy.Param.GLLConnectSocre;}
	return this._ZzyGLLConnectSocreFormula;
}

Game_System.prototype.SetZzyGLLConnectSocreFormula = function(formula)
{
	this._ZzyGLLConnectSocreFormula = formula;
}



Game_System.prototype.GetZzyGLLSurplusTimeSocreFormula = function()
{
	if(this._ZzyGLLSurplusTimeSocreFormula === undefined)
	{this._ZzyGLLSurplusTimeSocreFormula = Zzy.Param.GLLSurplusTimeSocre;}
	return this._ZzyGLLSurplusTimeSocreFormula;
}

Game_System.prototype.SetZzyGLLSurplusTimeSocreFormula = function(formula)
{
	this._ZzyGLLSurplusTimeSocreFormula = formula;
}

Game_System.prototype.GetZzyGLLHistroyScore = function()
{
	if(this._ZzyGLLHistroyScore === undefined)
	{this._ZzyGLLHistroyScore = 0;}
	return this._ZzyGLLHistroyScore;
}

Game_System.prototype.SetZzyGLLHistroyScore = function(value)
{
	this._ZzyGLLHistroyScore = value;
}

Game_System.prototype.GetZzyGLLHistroyLevel = function()
{
	if(this._ZzyGLLHistroyLevel === undefined)
	{this._ZzyGLLHistroyLevel = 0;}
	return this._ZzyGLLHistroyLevel;
}

Game_System.prototype.SetZzyGLLHistroyLevel = function(value)
{
	this._ZzyGLLHistroyLevel = value;
}


//==================================================================
//Game_Interpreter
//==================================================================

Zzy.GLL.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)//外掛命令
{
	Zzy.GLL.Game_Interpreter_pluginCommand.call(this,command,args);

	if(command === 'ZzyGLL')
	{
		this.ZzyGLLCommand(args);
	}
	

}

Game_Interpreter.prototype.ZzyGLLCommand = function(args)
{
	var command = String(args[0]);
	
	switch(command)
	{
		case 'StartLevel':
		var cLevel = String(args[1]);
			Zzy.GLL.StartLevel(cLevel);
		break;		
		
		
		case 'MaxLevel':
			var formula = String(args[1]);
			Zzy.GLL.MaxLevel(formula);
			
			//$gameSystem.SetZzyGLLMaxLevelFormula(formula);
		break;
		
		case 'Time':
			var formula = String(args[1]);
			Zzy.GLL.Time(formula);
			
			//$gameSystem.SetZzyGLLCpTimeFormula(formula);
		break;
		
		case 'Line':
			var formula = String(args[1]);
			Zzy.GLL.Line(formula);
			
			//$gameSystem.SetZzyGLLCpLineFormula(formula);
		break;
		
		case 'List':
			var formula = String(args[1]);
			Zzy.GLL.List(formula);
			
			//$gameSystem.SetZzyGLLCpListFormula(formula);
		break;
		
		case 'Size':
			var formula = String(args[1]);
			Zzy.GLL.Size(formula);
			
			//$gameSystem.SetZzyGLLCpSizeFormula(formula);
		break;
		
		case 'Type':
			var formula = String(args[1]);
			Zzy.GLL.Type(formula);
			
			//$gameSystem.SetZzyGLLCpTypeFormula(formula);
		break;
		
		case 'ConnectSocre':
			var formula = String(args[1]);
			Zzy.GLL.ConnectSocre(formula);
			
			//$gameSystem.SetZzyGLLConnectSocreFormula(formula);
		break;
		
		case 'SurplusScore':
			var formula = String(args[1]);
			Zzy.GLL.SurplusScore(formula);
			
			//$gameSystem.SetZzyGLLSurplusTimeSocreFormula(formula);
		break;
		
	}
}



//=========================================================================================
//Scene_ZzyGCFLinkLook
//=========================================================================================
function Scene_ZzyGCFLinkLook() 
{
    this.initialize.apply(this, arguments);
}

Scene_ZzyGCFLinkLook.prototype = Object.create(Scene_ZzyGCFGame.prototype);
Scene_ZzyGCFLinkLook.prototype.constructor = Scene_ZzyGCFLinkLook;

Scene_ZzyGCFLinkLook.prototype.initialize = function() 
{
    Scene_ZzyGCFGame.prototype.initialize.call(this);

};

Scene_ZzyGCFLinkLook.prototype.terminate = function()//退出時 
{
	Scene_ZzyGCFGame.prototype.terminate.call(this);
	
	this.GLLClearData();//清理數據
	
	//儲存分數和時間到額外變數
	this.SettlementExGame();
};

Scene_ZzyGCFLinkLook.prototype.SettlementExGame = function()
{
	var globalInfo = $gameSystem.getZzyGCFGameGlobal()
	var tempCommonId = 0;
	var tempScript = undefined;
	switch(globalInfo.result)
	{
		case 'win'://勝利時
		tempCommonId = Zzy.Param.GLLWinCommon;
		tempScript = Zzy.Param.GLLWinScript;
		break;
		case 'fail'://失敗時
		tempCommonId = Zzy.Param.GLLFailCommon;
		tempScript = Zzy.Param.GLLFailScript;
		break;
		case 'other1'://特殊情況1
		tempCommonId = Zzy.Param.GLLOther1Common;
		tempScript = Zzy.Param.GLLOther1Script;
		break;
		case 'other2'://特殊情況2
		tempCommonId = Zzy.Param.GLLOther2Common;
		tempScript = Zzy.Param.GLLOther2Script;
		break;
	}
	//修改結算資訊
	Zzy.GCF.tempCommonId = tempCommonId === 0 ? Zzy.GCF.tempCommonId : tempCommonId;
	Zzy.GCF.tempScript = tempScript === undefined ? Zzy.GCF.tempScript : tempScript;
	if(Zzy.Param.GLLSaveScoreVariable){$gameVariables.setValue(Zzy.Param.GLLSaveScoreVariable,globalInfo.score);}
	if(Zzy.Param.GLLSaveTimeVariable){$gameVariables.setValue(Zzy.Param.GLLSaveTimeVariable,globalInfo.time);}
}



Scene_ZzyGCFLinkLook.prototype.GLLClearData = function()
{
	Zzy.GLL.WindowPointer = undefined;//視窗指針
	Zzy.GLL.Window1Pointer = undefined;
	Zzy.GLL.Window2Pointer = undefined;
	Zzy.GLL.Window3Pointer = undefined;
	
	//清理快取池
}

Scene_ZzyGCFLinkLook.prototype.AddLayer1 = function()//層1,
{
	Scene_ZzyGCFGame.prototype.AddLayer1.call(this);
	this._Window1 = new Window_ZzyGLLLayerWindow();
	this.addChild(this._Window1);
	Zzy.GLL.Window1Pointer = this._Window1;
}


Scene_ZzyGCFLinkLook.prototype.AddLayer2 = function()//層2顯示
{
	Scene_ZzyGCFGame.prototype.AddLayer2.call(this);
	this._Window2 = new Window_ZzyGLLLayerWindow();
	this.addChild(this._Window2);
	Zzy.GLL.Window2Pointer = this._Window2;
}


Scene_ZzyGCFLinkLook.prototype.AddLayer3 = function()//層3顯示,
{
	Scene_ZzyGCFGame.prototype.AddLayer3.call(this);
	this._Window3 = new Window_ZzyGLLLayerWindow();
	this.addChild(this._Window3);
	Zzy.GLL.Window3Pointer = this._Window3;
}


Scene_ZzyGCFLinkLook.prototype.requestBkBitmap = function()//申請背景圖
{
	//滿足條件存在圖片名稱同時遊戲關卡名稱正確
	if(!!Zzy.Param.GLLBackGroundPic)
	{
		var picName = Zzy.Param.GLLBackGroundPic;
		var hue = $gameSystem._ZzyGCFBkHue;
		//this._backgroundSprite.bitmap = ImageManager.loadPicture(picName,hue); 
		this._backgroundSprite.bitmap = ImageManager.loadBitmap(Zzy.Param.GLLPicPath,picName,hue,true);	
		this._backgroundSprite.move(0,0,Graphics.boxWidth,Graphics.boxHeight);		
	}
	else
	{
		Scene_ZzyGCFGame.prototype.requestBkBitmap.call(this);
	}
	
}


Scene_ZzyGCFLinkLook.prototype.PlayBkBGM = function()//播放音樂
{
	//修改播放聲音
	if(Zzy.Param.GLLBkBGMName)
	{AudioManager.replayBgm(Zzy.Param.GLLBkBGM);}	
	else
	{Scene_ZzyGCFGame.prototype.PlayBkBGM.call(this);}
}


//=======================================================================
//Sprite_ZzyGLLBase
//=======================================================================
function Sprite_ZzyGLLBase() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLBase.prototype = Object.create(Sprite_ZzyGCFBase.prototype);
Sprite_ZzyGLLBase.prototype.constructor = Sprite_ZzyGLLBase;

Sprite_ZzyGLLBase.prototype.initialize = function(x,y,fileName,hue) 
{
	Sprite_ZzyGCFBase.prototype.initialize.call(this,x,y,fileName,hue);
	
}

Sprite_ZzyGLLBase.prototype.loadBitmap = function(fileName,hue)//載入圖片
{
	this.bitmap = ImageManager.loadBitmap(Zzy.Param.GLLPicPath, fileName, hue, true);
}


//=========================================================================================
//Sprite_ZzyGLLTileBase
//=========================================================================================
function Sprite_ZzyGLLTileBase() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGLLTileBase.prototype = Object.create(Sprite_ZzyGCFTileBase.prototype);
Sprite_ZzyGLLTileBase.prototype.constructor = Sprite_ZzyGLLTileBase;

Sprite_ZzyGLLTileBase.prototype.initialize = function(width,height,value,fileName,hue) 
{
	Sprite_ZzyGCFTileBase.prototype.initialize.call(this,width,height,value,fileName,hue);

}

Sprite_ZzyGLLTileBase.prototype.loadBitmap = function(fileName,hue)//點陣圖
{
	this.bitmap = ImageManager.loadBitmap(Zzy.Param.GLLPicPath,fileName,hue,true);
}


//=========================================================================================
//Sprite_ZzyGLLMenuBk
//=========================================================================================


function Sprite_ZzyGLLMenuBk() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLMenuBk.prototype = Object.create(Sprite_ZzyGLLBase.prototype);
Sprite_ZzyGLLMenuBk.prototype.constructor = Sprite_ZzyGLLMenuBk;

Sprite_ZzyGLLMenuBk.prototype.initialize = function() 
{
	var x = Graphics.boxWidth/2;
	var y = Graphics.boxHeight/2;
	Sprite_ZzyGLLBase.prototype.initialize.call(this,x,y,Zzy.Param.GLLMenuBkPic,0);

	this.okSpr = undefined;
	this.cancelSpr = undefined;
	
	this.appearX = 0;
	this.appearY = 0;
	this.disAppearX = 0;
	this.disAppearY = 0;
	this.appFrame = this.DefaultMoveFrame();
	this.InitData();
}

Sprite_ZzyGLLMenuBk.prototype.InitData = function()
{
	this.appearX = Graphics.boxWidth/2;
	this.appearY = Graphics.boxHeight/2;
	this.disAppearX = Graphics.boxWidth/2;
	this.disAppearY = -Graphics.boxHeight/2;	

	this.visible = false;
	this.isOpen = false;
	this.x = this.disAppearX;
	this.y = this.disAppearY;
	
	this.result = undefined;
	this.stage = 1;//狀態
}

Sprite_ZzyGLLMenuBk.prototype.DefaultMoveFrame = function()
{
	return 40;
}



Sprite_ZzyGLLMenuBk.prototype.setBindingOk = function(pointer)
{
	this.okSpr = pointer;
}

Sprite_ZzyGLLMenuBk.prototype.setBindingCancel = function(pointer)
{
	this.cancelSpr = pointer;
}

Sprite_ZzyGLLMenuBk.prototype.update = function()
{
	Sprite_ZzyGLLBase.prototype.update.call(this);
	//更新固定位置
	if(this.okSpr)
	{
		this.okSpr.y = this.y+this.bitmap.height/2-50;
		
		if(this.stage === 2)
		{this.okSpr.x = this.x;}
		else
		{this.okSpr.x = this.x-60;}
		this.okSpr.visible = true;
	}
	if(this.cancelSpr)
	{
		this.cancelSpr.y = this.y+this.bitmap.height/2-50;
		this.cancelSpr.x = this.x+60;
		if(this.stage === 2)
		{this.cancelSpr.visible = false;}
		else
		{this.cancelSpr.visible = true;}
	}	
	
	this.updateCallResult();
}

Sprite_ZzyGLLMenuBk.prototype.updateCallResult = function()
{
	if(!this.result)return;
	
	switch(this.result)
	{
		case 'win':
				this.setMoveEndCallFunction(Zzy.GLL.WindowPointer.UI.CallShowWinText);
			break;
		case 'fail':
				this.setMoveEndCallFunction(Zzy.GLL.WindowPointer.UI.CallShowFailText);
			break;
	}
	
	this.result = undefined;
}




Sprite_ZzyGLLMenuBk.prototype.Appear = function()//出現
{
	this.isOpen = true;
	this.visible = true;
	this.x = this.disAppearX;
	this.y = this.disAppearY;
	this.MoveToOfTime(this.appearX,this.appearY,this.appFrame);
	this.setMoveEndCallFunction(Zzy.GLL.WindowPointer.UI.CallShowTipsExitText);
}


Sprite_ZzyGLLMenuBk.prototype.DisAppear = function()//消失
{
	Zzy.GLL.WindowPointer.UI.CallHideTipsExitText();//隱藏文字
	this.isOpen = false;
	this.visible = true;
	this.x = this.appearX;
	this.y = this.appearY;	
	this.MoveToOfTime(this.disAppearX,this.disAppearY,this.appFrame);
	this.setMoveEndCallFunction(this.ChangeGameStage);//結束函式
	this.setMoveEndDisvisible();
}

Sprite_ZzyGLLMenuBk.prototype.ChangeGameStage = function()
{
	Zzy.GLL.WindowPointer.gameStage = 2;
}


Sprite_ZzyGLLMenuBk.prototype.GameOverAppear = function(result)//遊戲結束出現
{
	this.visible = true;
	this.x = this.disAppearX;
	this.y = this.disAppearY;
	
	if(this.isOpen)
	{
	
		Zzy.GLL.WindowPointer.UI.CallHideTipsExitText();//隱藏文字
		this.isOpen = false;
		this.visible = true;
		this.x = this.appearX;
		this.y = this.appearY;
		this.MoveToOfTime(this.disAppearX,this.disAppearY,this.appFrame);//先消失
		var param = {pointer:this,p1:result};
		this.setMoveEndCallFunction(this.GameOverRAppear,param);//再出現
	}
	else
	{
		this.stage = 2;
		this.isOpen = true;
		this.visible = true;
		this.x = this.disAppearX;
		this.y = this.disAppearY;		
		this.MoveToOfTime(this.appearX,this.appearY,this.appFrame);
	
		//因為處理機制,需要延遲一幀繫結
		this.result = result;
	}

}


Sprite_ZzyGLLMenuBk.prototype.GameOverRAppear = function(param)
{
	
	param.pointer.GameOverAppear(param.p1);
}








//=========================================================================================
//Sprite_ZzyGLLButton
//=========================================================================================


function Sprite_ZzyGLLButton() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLButton.prototype = Object.create(Sprite_ZzyGLLBase.prototype);
Sprite_ZzyGLLButton.prototype.constructor = Sprite_ZzyGLLButton;

Sprite_ZzyGLLButton.prototype.initialize = function(x,y,fileName,hue,commandId) 
{
    Sprite_ZzyGLLBase.prototype.initialize.call(this,x,y,fileName,hue);
	//啟用Button
	this.isCanButton = true;//啟用按鈕
	//this.buttonInScopeBitmap = Zzy.GCF.LoadPicture(fileName + '1');
	//this.buttonDownBitmap = Zzy.GCF.LoadPicture(fileName + '2');
	this.buttonInScopeBitmap = ImageManager.loadBitmap(Zzy.Param.GLLPicPath,fileName + '1',undefined,true);
	this.buttonDownBitmap = ImageManager.loadBitmap(Zzy.Param.GLLPicPath,fileName + '2',undefined,true);
	
	this.commandId = commandId;
	//ID 1確認

};

Sprite_ZzyGLLButton.prototype.OnClick = function()//按下按鈕
{
	if(!this.visible)return;//按鈕隱形不做任何響應
	if(this.isBusy())return;//繁忙時不可操作


	if(Zzy.GLL.WindowPointer.gameStage === 1)
	{
		switch(this.commandId)
		{
			case 1://1代表退出
				
			break;
			
		}
	}
	else if(Zzy.GLL.WindowPointer.gameStage === 2)
	{
		switch(this.commandId)
		{
			case 1://1代表退出
			Zzy.GLL.WindowPointer.UI.OnExitButton();//按下退出
			Zzy.GLL.WindowPointer.gameStage = 4;//切換到4模式
			break;
		}
	}
	else if(Zzy.GLL.WindowPointer.gameStage === 3)
	{
		switch(this.commandId)
		{
			case 2:
			Zzy.GLL.WindowPointer.ExitGame();
			break;
		}
	}
	else if(Zzy.GLL.WindowPointer.gameStage === 4)
	{	
		switch(this.commandId)
		{
			case 2://確認
			Zzy.GLL.WindowPointer.UI.OnOkButton();//按下退出
			break;

			case 3://取消
			Zzy.GLL.WindowPointer.UI.OnCancelButton();//按下退出
			break;

		}
	}
	Zzy.GLL.PlaySE(1);//退出音效
}


//======================================================================
//Sprite_ZzyGLLPause
//======================================================================

function Sprite_ZzyGLLPause() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLPause.prototype = Object.create(Sprite_ZzyGLLBase.prototype);
Sprite_ZzyGLLPause.prototype.constructor = Sprite_ZzyGLLPause;

Sprite_ZzyGLLPause.prototype.initialize = function(x,y,fileName,hue) 
{
    Sprite_ZzyGLLBase.prototype.initialize.call(this,x,y,fileName,hue);
	
	if(!fileName)
	{
		this.bitmap = new Bitmap(Graphics.boxWidth,Graphics.boxHeight);
		this.bitmap.fillAll('rgba(0,0,0,0.4)');
	}
	
	this.ignorePause = true;//啟用按鈕
	this.visible = false;
	
	this.isPause = Zzy.GCF.GameGlobal().isPausing;
	this.executPausing = false;//執行暫停中
};


Sprite_ZzyGLLPause.prototype.update = function()
{
	Sprite_ZzyGLLBase.prototype.update.call(this);


}

Sprite_ZzyGLLPause.prototype.startPause = function(isPause)
{
	if(isPause)
	{
		this.opacity = 0;
		this.visible = true;
		this.OpacityToOfTime(255,30);	
		this.executPausing = true;
	}
	else
	{
		this.opacity = 255;
		this.visible = true;
		this.OpacityToOfTime(0,30);
		this.setOpacityEndDisvisible();//移動結束后隱藏
		this.executPausing = true;
	}
}


Sprite_ZzyGLLPause.prototype.isExecutPausing = function()
{
	return this.executPausing;
}



//==========================================================================
//Sprite_ZzyGLLBatch
//==========================================================================

function Sprite_ZzyGLLBatch() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGLLBatch.prototype = Object.create(Sprite_ZzyGCFBatchBase.prototype);
Sprite_ZzyGLLBatch.prototype.constructor = Sprite_ZzyGLLBatch;

Sprite_ZzyGLLBatch.prototype.initialize = function() //需要新增參數 精靈源 視窗指針
{
	Sprite_ZzyGCFBatchBase.prototype.initialize.call(this,Zzy.GLL.Window1Pointer);

}


Sprite_ZzyGLLBatch.prototype.CreateSpr = function()//創造內容
{
	return new Sprite_ZzyGLLBlockBk();
}


Sprite_ZzyGLLBatch.prototype.RefreshCustom = function()//創造內容
{
	
}

Sprite_ZzyGLLBatch.prototype.DefaultSizeX = function()
{
	var formula = $gameSystem.GetZzyGLLCpSizeFormula();
	return Zzy.GLL.WindowPointer.EvalTranslate(formula);
	//return 48;
}

Sprite_ZzyGLLBatch.prototype.DefaultSizeY = function()
{
	var formula = $gameSystem.GetZzyGLLCpSizeFormula();
	return Zzy.GLL.WindowPointer.EvalTranslate(formula);
	//return 48;
}

Sprite_ZzyGLLBatch.prototype.DefaultExSpaceX = function()//額外間距x
{
	return 0;
}

Sprite_ZzyGLLBatch.prototype.DefaultExSpaceY = function()//額外間距y
{
	return 0;
}

Sprite_ZzyGLLBatch.prototype.DefaultAnchorX = function()
{
	return 0.5;
}

Sprite_ZzyGLLBatch.prototype.DefaultAnchorY = function()
{
	return 0.5;
}

Sprite_ZzyGLLBatch.prototype.DefaultBitmap = function()
{
	return undefined;
}

Sprite_ZzyGLLBatch.prototype.DefaultLine = function()
{
	return 5;
}

Sprite_ZzyGLLBatch.prototype.DefaultList = function()
{
	return 5;
}

Sprite_ZzyGLLBatch.prototype.DefaultPosition = function()//預設位置
{
	this.x = Graphics.boxWidth/2;
	this.y = Graphics.boxHeight/2 + Graphics.boxHeight/10;
}

Sprite_ZzyGLLBatch.prototype.DefaultOffSprX = function()
{
	return 24;
}

Sprite_ZzyGLLBatch.prototype.DefaultOffSprY = function()
{
	return 24;
}

Sprite_ZzyGCFBatchBase.prototype.ExecuteFunction1 = function(spr)//執行函式,可以過載
{
	spr.Appear();//出現
}



//=========================================================================================
//Sprite_ZzyGLLBlockBk
//=========================================================================================
function Sprite_ZzyGLLBlockBk() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLBlockBk.prototype = Object.create(Sprite_ZzyGLLBase.prototype);
Sprite_ZzyGLLBlockBk.prototype.constructor = Sprite_ZzyGLLBlockBk;

Sprite_ZzyGLLBlockBk.prototype.initialize = function() 
{
	Sprite_ZzyGLLBase.prototype.initialize.call(this,0,0,Zzy.Param.GLLBkBlockPic,0);
	
}

Sprite_ZzyGLLBlockBk.prototype.ResetInfo = function()
{
	this.visible = true;
}

Sprite_ZzyGLLBlockBk.prototype.Appear = function()
{
	var tScale = Zzy.GLL.WindowPointer.sizeScale;
	this.setScale(0,0);
	this.ScaleToOfTime(tScale,tScale,20);
}

Sprite_ZzyGLLBlockBk.prototype.DisAppear = function()
{
	var tScale = Zzy.GLL.WindowPointer.sizeScale;
	this.setScale(tScale,tScale);
	this.ScaleToOfTime(0,0,20);	
	this.setScaleEndDisvisible(0);//隱藏
}



//==================================================================================
//Particle_ZzyGLLEffect
//==================================================================================
//粒子播放器
function Particle_ZzyGLLEffect() {
    this.initialize.apply(this, arguments);
}

Particle_ZzyGLLEffect.prototype = Object.create(Particle_ZzyGCFBase.prototype);
Particle_ZzyGLLEffect.prototype.constructor = Particle_ZzyGLLEffect;

Particle_ZzyGLLEffect.prototype.initialize = function(windowPointer,fileName)//指針,粒子圖片名稱
{
	Particle_ZzyGCFBase.prototype.initialize.call(this,Zzy.GLL.Window2Pointer,'');
	
	this.beingFrame = 0;
	this.isBeingFrame = false;
}


Particle_ZzyGLLEffect.prototype.CreateBitmap = function()
{
	this.partBitmap = new Bitmap(5,5);
	this.partBitmap.drawCircle(4,4,4,'#ffffff');
}

Particle_ZzyGLLEffect.prototype.setPartSpriteInfo = function()//設定資訊,這個函式可以用來重寫
{
	this.partSpeed = 3;//移動速度
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


Particle_ZzyGLLEffect.prototype.CreateAParticleSpr = function()
{
	return new PSprite_ZzyGLLEffect(this);
}


Particle_ZzyGLLEffect.prototype.ResetInfo = function(blockSpr)
{
	this.visible = true;
	this.setCreaterPos(blockSpr.x,blockSpr.y);
	
	this.beingFrame = 10;
	this.isBeingFrame = true;
	this.setContinue();
}

Particle_ZzyGLLEffect.prototype.updateDestroy = function()
{
	if(!this.isBeingFrame)return;
	
	if(this.beingFrame > 0)
	{this.beingFrame--;}
	else
	{
		this.isBeingFrame = false;
		this.beingFrame = 0;
		
		this.setStop();
		this.visible = false;
	}
	
}
	

Particle_ZzyGLLEffect.prototype.update = function()
{
	Particle_ZzyGCFBase.prototype.update.call(this);
	this.updateDestroy();
}




Particle_ZzyGLLEffect.prototype.defaultCreaterOffsetX = function()//預設偏移位置,錨點
{
	return Math.round(Graphics.boxWidth/2);
}

Particle_ZzyGLLEffect.prototype.defaultCreaterOffsetY = function()//預設偏移位置
{
	return Math.round(Graphics.boxHeight/2);
}

Particle_ZzyGLLEffect.prototype.defaultCreaterFrame = function()
{
	return 1;
}

Particle_ZzyGLLEffect.prototype.defaultCreaterCount = function()
{
	return 3;
}



//==========================================================================
//Sprite_ZzyGLLTimer
//==========================================================================

function Sprite_ZzyGLLTimer() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGLLTimer.prototype = Object.create(Sprite_ZzyGLLTileBase.prototype);
Sprite_ZzyGLLTimer.prototype.constructor = Sprite_ZzyGLLTimer;

Sprite_ZzyGLLTimer.prototype.initialize = function(width,height,value,fileName,hue) 
{
	Sprite_ZzyGLLTileBase.prototype.initialize.call(this,width,height,value,Zzy.Param.GLLTimePic,0);
}


Sprite_ZzyGLLTimer.prototype.update = function()
{
	Sprite_ZzyGLLTileBase.prototype.update.call(this);
	
	var time = Zzy.GLL.WindowPointer.getCPTime();
	
	this.setValue(time);
}



//==========================================================================
//Sprite_ZzyGLLTimerBk
//==========================================================================

function Sprite_ZzyGLLTimerBk() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLTimerBk.prototype = Object.create(Sprite_ZzyGLLBase.prototype);
Sprite_ZzyGLLTimerBk.prototype.constructor = Sprite_ZzyGLLTimerBk;

Sprite_ZzyGLLTimerBk.prototype.initialize = function(x,y) 
{
	Sprite_ZzyGLLBase.prototype.initialize.call(this,x,y,Zzy.Param.GLLTimeBkPic,0);
	this.anchor.x = 0;
	this.anchor.y = 0;
}




//=========================================================================================
//Sprite_ZzyGLLNumber
//=========================================================================================

function Sprite_ZzyGLLNumber() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLNumber.prototype = Object.create(Sprite_ZzyGCFNumber.prototype);
Sprite_ZzyGLLNumber.prototype.constructor = Sprite_ZzyGLLNumber;

Sprite_ZzyGLLNumber.prototype.initialize = function(prefix,color,w,h) 
{
	var tw = w ? w : 256;
	var th = h ? h : 64;

    Sprite_ZzyGCFNumber.prototype.initialize.call(this,tw,th,0);

	this.GLLPrefixText = prefix ? prefix : '';//字首

	this.borderWidth(4);
	this.setNumberColor(color);
};


Sprite_ZzyGLLNumber.prototype.defaultFontSize = function()
{
	return 36;
}

Sprite_ZzyGLLNumber.prototype.DefaultBorderColor = function()
{
	return 'rgba(0,0,0,0.5)';
}





Sprite_ZzyGLLNumber.prototype.refresh = function()//這將會主動的去重新整理
{
	this.bitmap.clear();
	this.ExecuteDynNumber();//執行動態增粉

	if(this.GLLPrefixText != '')
	{
		this.bitmap.drawText(this.GLLPrefixText,10,0,this.bWidth,this.bHeight,'left');
		this.bitmap.drawText(this.showNumber,0,0,this.bWidth,this.bHeight,'center');
	}
	else
	{
		this.bitmap.drawText(this.showNumber,0,0,this.bWidth,this.bHeight,this.drawPos);
	}

	
}

Sprite_ZzyGLLNumber.prototype.Appear = function(delay,x,y)
{
	delay = delay ? delay : 0;
	if(x){this.x = x;}
	if(y){this.y = y;}
	this.visible = true;
	this.setScale(0,0);
	this.setDelay(delay);//延遲
	this.ScaleToOfTime(1,1,20);

}

Sprite_ZzyGLLNumber.prototype.DeAppear = function(delay)
{
	delay = delay ? delay : 0;
	this.visible = true;
	this.setScale(1,1);
	this.setDelay(delay);//延遲
	this.ScaleToOfTime(0,0,20);
	this.setScaleEndDisvisible();//隱身
}



Sprite_ZzyGLLNumber.prototype.ExecuteDynNumber = function()
{
	if(this.isBusy())return;
	Sprite_ZzyGCFNumber.prototype.ExecuteDynNumber.call(this);
}








//=========================================================================================
//PSprite_ZzyGLLEffect
//=========================================================================================


function PSprite_ZzyGLLEffect() 
{
    this.initialize.apply(this, arguments);
}


PSprite_ZzyGLLEffect.prototype = Object.create(PSprite_ZzyGCFBase.prototype);
PSprite_ZzyGLLEffect.prototype.constructor = PSprite_ZzyGLLEffect;

PSprite_ZzyGLLEffect.prototype.initialize = function(creater) 
{
	PSprite_ZzyGCFBase.prototype.initialize.call(this,creater);
	
	
}

PSprite_ZzyGLLEffect.prototype.updateOpacity = function()
{
	//透明度小於50%時開始進入漸變
	this.opacity = this.startOpactiy * this.CdestroyTime / this.temp1 * Math.random();

}



//=========================================================================================
//Sprite_ZzyGLLGameBlock
//=========================================================================================
function Sprite_ZzyGLLGameBlock() 
{
    this.initialize.apply(this, arguments);
}

Sprite_ZzyGLLGameBlock.prototype = Object.create(Sprite_ZzyGLLBase.prototype);
Sprite_ZzyGLLGameBlock.prototype.constructor = Sprite_ZzyGLLGameBlock;

Sprite_ZzyGLLGameBlock.prototype.initialize = function() 
{
	Sprite_ZzyGLLBase.prototype.initialize.call(this,0,0,'',0);
	this.colorId = 0;
	this.gID = 0;
	this.isFlash = false;
	this.CFlash = 0;
	this.isFlashOnce = false;
	this.CFlashOnce = 0;
	
	this.routeArr = [];//路線	
	this.routeIndex = 0;
	this.isRouting = false;
	this.connectTarget = undefined;//連線目標
}




Sprite_ZzyGLLGameBlock.prototype.ChangeColorId = function(colorId)
{
	this.colorId = colorId;
	this.bitmap = Zzy.GLL.WindowPointer.ItemsBitmapArr[colorId];
}

Sprite_ZzyGLLGameBlock.prototype.ResetInfo = function(gID,colorId,xIndex,yIndex)
{
	this.isFlash = false;
	this.CFlash = 0;
	this.visible = true;
	this.ChangeColorId(colorId);
	this.gID = gID;
	
	//確認位置
	this.x = Zzy.GLL.PosManager.sprArr2[yIndex][xIndex].x;
	this.y = Zzy.GLL.PosManager.sprArr2[yIndex][xIndex].y;
	
	this.routeArr = [];//路線	
	this.routeIndex = 0;
	this.isRouting = false;
	this.connectTarget = undefined;//連線目標
	this.opacity = 255;
	var tScale = Zzy.GLL.WindowPointer.sizeScale;
	this.setScale(tScale,tScale);	

}

Sprite_ZzyGLLGameBlock.prototype.update = function()//執行閃爍
{
	Sprite_ZzyGLLBase.prototype.update.call(this);
	this.updateBlockFlash();
	this.updateRouteMoving();//移動
	this.updateBlockFlashOnce();
}


Sprite_ZzyGLLGameBlock.prototype.updateRouteMoving = function()
{
	if(!this.isRouting)return;
	if(!this.isBusy())
	{
		if(this.routeIndex >= this.routeArr.length)
		{
			//移動結束
			this.MoveEndAfter();//移動結束

			this.isRouting = false;
			return ;
		}
		
		
		this.MoveToOfSpeed(this.routeArr[this.routeIndex].x,this.routeArr[this.routeIndex].y,Zzy.Param.GLLConnectSpeed);
		this.routeIndex++;
	}
}

Sprite_ZzyGLLGameBlock.prototype.MoveEndAfter = function()
{
	//同時播放消失內容動畫
	this.DeAppear();
	this.connectTarget.DeAppear();
	
	var spr = Zzy.GLL.WindowPointer.RequestEffectSprArr();
	spr.ResetInfo(this);//初始化資訊
	
	
	//增加分數
	Zzy.GLL.WindowPointer.AddConnectScore();//加分
	this.setOpacityEndCallFunction(Zzy.GLL.WindowPointer.CheckIsPassCP,Zzy.GLL.WindowPointer,15);//回撥檢測
}

Sprite_ZzyGLLGameBlock.prototype.DeAppear = function()
{
	this.visible = true;
	var tScale = Zzy.GLL.WindowPointer.sizeScale;
	this.setScale(tScale,tScale);
	this.ScaleToOfTime(tScale*1.2,tScale*1.2,10);
	this.opacity = 255;
	this.OpacityToOfTime(0,15);
	this.setOpacityEndDisvisible();
	
	Zzy.GLL.PlaySE(4);
}

Sprite_ZzyGLLGameBlock.prototype.Appear = function()
{
	this.visible = true;
	this.setScale(0,0);
	var tScale = Zzy.GLL.WindowPointer.sizeScale;
	this.ScaleToOfTime(tScale,tScale,10);
	this.setDelay(this.gID+20);
}

Sprite_ZzyGLLGameBlock.prototype.StartFlash = function()
{
	this.isFlash = true;
}


Sprite_ZzyGLLGameBlock.prototype.StartOnce = function()
{
	this.isFlashOnce = true;
}


Sprite_ZzyGLLGameBlock.prototype.StopFlash = function()
{
	this.isFlash = false;
	this.setColorTone([0,0,0,0]);
}



Sprite_ZzyGLLGameBlock.prototype.updateBlockFlashOnce = function()
{
	if(!this.isFlashOnce)return;
	if(this.CFlashOnce < 20)
	{
		this.CFlashOnce++;
		var tempV = 0;
		if(this.CFlashOnce >= 10)
		{
			tempV = 255 * (10-(this.CFlashOnce-10))/10;
		}
		else if(this.CFlashOnce >= 10)
		{
			tempV = 255 * (this.CFlashOnce-10) / 10;
		}
		
		this.setColorTone([tempV*0.6,tempV*0.6,tempV*0.6,0.5]);
	}
	else
	{
		this.CFlashOnce = 0;
		this.isFlashOnce = false;
	}

	
	
}

Sprite_ZzyGLLGameBlock.prototype.updateBlockFlash = function()
{
	
	if(!this.isFlash)return;
	if(this.CFlash < 30)
	{
		this.CFlash++;
		var tempV = 0;
		if(this.CFlash >= 20)
		{
			tempV = 255 * (10-(this.CFlash-20))/10;
		}
		else if(this.CFlash >= 10)
		{
			tempV = 255 * (this.CFlash-10) / 10;
		}
		
		this.setColorTone([tempV*0.6,tempV*0.6,tempV*0.6,0.5]);
	}
	else
	{this.CFlash = 0;}

}


Sprite_ZzyGLLGameBlock.prototype.MoveToOfRoute = function(posArr)//跟隨路線移動
{
	//自身跟隨路線移動
	this.isRouting = true;
	this.routeArr = posArr;
	this.routeIndex = 0;
}


Sprite_ZzyGLLGameBlock.prototype.setConnectTarget = function(target)
{
	this.connectTarget = target;
}


//==========================================================================
//Sprite_ZzyGLLText
//==========================================================================
//顯示文字操作

function Sprite_ZzyGLLText() 
{
    this.initialize.apply(this, arguments);
}


Sprite_ZzyGLLText.prototype = Object.create(Sprite_ZzyGCFTextBase.prototype);
Sprite_ZzyGLLText.prototype.constructor = Sprite_ZzyGLLText;

Sprite_ZzyGLLText.prototype.initialize = function(prefix) 
{
    Sprite_ZzyGCFTextBase.prototype.initialize.call(this,prefix,30,2);
	this.setTextColor('#ddff88');
}









//=========================================================================================
//Window_ZzyGLLLayerWindow
//=========================================================================================

function Window_ZzyGLLLayerWindow() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyGLLLayerWindow.prototype = Object.create(Window_ZzyGCFLayerBase.prototype);
Window_ZzyGLLLayerWindow.prototype.constructor = Window_ZzyGLLLayerWindow;

Window_ZzyGLLLayerWindow.prototype.initialize = function()
{
    Window_ZzyGCFLayerBase.prototype.initialize.call(this);
	
};


//=========================================================================================
//Window_ZzyGCFLinkLook
//=========================================================================================

function Window_ZzyGCFLinkLook() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyGCFLinkLook.prototype = Object.create(Window_ZzyGCFBase.prototype);
Window_ZzyGCFLinkLook.prototype.constructor = Window_ZzyGCFLinkLook;


Window_ZzyGCFLinkLook.prototype.initialize = function() 
{
	//初始化
    Window_ZzyGCFBase.prototype.initialize.call(this);

	//獲得遊戲數據
	// this.gameData = $gameSystem.getZzyGCFGameData();
	// this.gameGlobal = $gameSystem.getZzyGCFGameGlobal();
	// this.scene = SceneManager._scene;//獲取全部的數值
	// this.UI							//UI視窗

	//Zzy.GLL.ReloadGLLBitmapArr();//載入點陣圖快取
	Zzy.GLL.WindowPointer = this;//賦予視窗指針

	this.gameStage = 0;//遊戲階段
	this.installSpr = true;//這個值是在確保所有點陣圖全部載入成功后,在所有視窗也確認載入時,在進行點陣圖安裝
	this.centerX = Graphics.boxWidth / 2;
	this.centerY = Graphics.boxHeight / 2;

	this.InitialAllData();//初始化數據
	this.CreateAllSprite();//載入點陣圖
	
	this.startUpGame();//啟動遊戲
	
	this.isNeedLoadNextCP = false;
};



Window_ZzyGCFLinkLook.prototype.startUpGame = function()
{
	this.level = parseInt(this.EvalTranslate($gameSystem.GetZzyGLLStartLevel()))-1;
	this.gameStage = 1;
}

Window_ZzyGCFLinkLook.prototype.InitialAllData = function()
{
	this.score = 0;//分數對像
	this.time = 0;//時間
	
	this.maxLevel = 0;//最大關卡數
	
	this.cpTime = 0;//關卡限定時間
	this.CcpTime = 0;//計數
	this.maxCPTime = 0;//關卡最大時間
	this.level = 0;//關卡等級
	this.list = 0;//列數
	this.line = 0;//函式
	this.size = 0;//尺寸
	this.type = 0;//型別數量
	this.sizeScale = 0;//尺寸比例
	this.maxCount = 0;//數量
	this.connectScore = 0;
	this.surplusSocre = 0;
	this.surplusCount = 0;
	

	
	this.bkBlockManager = undefined;
	this.gameBlockSpr = [];//遊戲方塊對像池
	this.cpBlockSpr = [];//關卡尺
	this.cpBlockPosRect = [];//位置
	
	this.effectSprArr = [];//粒子管理器
	
	this.gameState = 'init';//遊戲狀態
	
	this.selectInfo = {};
	this.connectType = 0;//連線型別
	
	this.isCPPass = false;//是否通關
	this.CPPassTime = 50;
	this.CCPPassTime = 0;
}

Window_ZzyGCFLinkLook.prototype.CreateAllSprite = function()
{
	//this.ItemsBitmapGroup = ImageManager.loadPicture(Zzy.Param.GLLItemArrPic);//圖集
	this.ItemsBitmapGroup = ImageManager.loadBitmap(Zzy.Param.GLLPicPath,Zzy.Param.GLLItemArrPic,undefined,true);
	this.ItemsBitmapArr = [];//儲存點陣圖資訊

}


Window_ZzyGCFLinkLook.prototype.RequestGameBlockSpr = function()
{
	var len = this.gameBlockSpr.length;
	
	for(var i=0;i<len;i++)
	{
		if(this.gameBlockSpr[i] && !this.gameBlockSpr[i].visible)
		{
			this.gameBlockSpr[i].visible = true;
			return this.gameBlockSpr[i];
		}
	}
	
	var spr = new Sprite_ZzyGLLGameBlock();
	Zzy.GLL.Window2Pointer.addChild(spr);
	this.gameBlockSpr.push(spr);
	return spr;
}




Window_ZzyGCFLinkLook.prototype.NextCheckPointer = function()//進行下一關
{
	if(this.level >= this.maxLevel)
	{return false;}
	
	this.level++;
	if(this.level > $gameSystem.GetZzyGLLHistroyLevel())
	{$gameSystem.SetZzyGLLHistroyLevel(this.level)}
	
	
	
	
	this.InitCPData();
	this.InitBkBlock();
	this.InitGameBlock();
	
	this.gameState = 'wait';
	return true;
}

Window_ZzyGCFLinkLook.prototype.InitGameBlock = function()
{
	this.cpBlockSpr = [];
	this.cpBlockPosRect = [];//位置
	for(var i=0;i<this.line;i++)
	{
		this.cpBlockSpr[i] = [];
		this.cpBlockPosRect[i] = [];
	}
	
	
	//通過長寬獲取存在數量
	var tMaxCount = this.line * this.list;
	this.maxCount = Math.floor(tMaxCount/2)*2;//保持偶數
	var xIndex = 0;
	var yIndex = 0;
	var colorIdArr = [];
	var colorGIDArr = [];
	
	for(var i=0;i<this.maxCount;i++)
	{
		var colorId = this.GetBlockColorId(i);//獲取ID值
		colorGIDArr[i] = i;
		colorIdArr[i] = colorId;
	}
	
	colorIdArr = Zzy.GCF.RandomArr1Element(colorIdArr);//打亂位置
	colorGIDArr = Zzy.GCF.RandomArr1Element(colorGIDArr);//打亂位置
	var haSize = this.size/2;
	
	for(var i=0;i<this.maxCount;i++)
	{
		var spr = this.RequestGameBlockSpr();
		
		xIndex = i % this.list;
		yIndex = Math.floor(i/this.list);
		spr.ResetInfo(colorGIDArr[i],colorIdArr[i],xIndex,yIndex);//初始化
		this.cpBlockSpr[yIndex][xIndex] = spr;//確認位置
		this.cpBlockPosRect[yIndex][xIndex] = {};
		this.cpBlockPosRect[yIndex][xIndex].x = spr.x;
		this.cpBlockPosRect[yIndex][xIndex].y = spr.y;
		this.cpBlockPosRect[yIndex][xIndex].rect = {};
		this.cpBlockPosRect[yIndex][xIndex].rect.left = spr.x-haSize;
		this.cpBlockPosRect[yIndex][xIndex].rect.right = spr.x+haSize;
		this.cpBlockPosRect[yIndex][xIndex].rect.up = spr.y-haSize;
		this.cpBlockPosRect[yIndex][xIndex].rect.down = spr.y+haSize;	
		spr.Appear();//啟動
	}
	
	

}

Window_ZzyGCFLinkLook.prototype.GetBlockColorId = function(ID)
{
	//通過ID偶數化來循環遍歷申請
	var colorId = Math.floor(ID/2);
	colorId = colorId % this.type;
	return colorId;
}

Window_ZzyGCFLinkLook.prototype.InitBkBlock = function()
{
	if(!this.bkBlockManager)
	{this.bkBlockManager = this.CreateBkBlockManager();}
	this.bkBlockManager.ResetInfo(this.line,this.list);
	this.bkBlockManager.ExecuteSprArrFunction1();//重新整理Appear出現	
	
	Zzy.GLL.PosManager = this.bkBlockManager;
}

Window_ZzyGCFLinkLook.prototype.InitCPData = function()
{
	
	//計算list和line
	this.maxLevel = this.EvalTranslate($gameSystem.GetZzyGLLMaxLevelFormula());
	this.line = this.EvalTranslate($gameSystem.GetZzyGLLCpLineFormula());
	this.list = this.EvalTranslate($gameSystem.GetZzyGLLCpListFormula());
	this.cpTime = this.EvalTranslate($gameSystem.GetZzyGLLCpTimeFormula());
	this.size = this.EvalTranslate($gameSystem.GetZzyGLLCpSizeFormula());
	this.type = this.EvalTranslate($gameSystem.GetZzyGLLCpTypeFormula());
	this.sizeScale = this.size / Zzy.GLL.DefaultSize;//尺寸比例	 
	this.connectScore = this.EvalTranslate($gameSystem.GetZzyGLLConnectSocreFormula());
	this.surplusSocre = this.EvalTranslate($gameSystem.GetZzyGLLSurplusTimeSocreFormula());
	this.connectInfo = {};//連線資訊
		
	this.maxCPTime = this.cpTime;
	//設定UI時間線的長度
	this.UI.timeTileSpr.setMaxValue(this.cpTime);
	this.UI.timeTileSpr.setValue(0);
	this.UI.timeTileSpr.setPerOfSpeed(100,1);
	
}

Window_ZzyGCFLinkLook.prototype.RequestEffectSprArr = function()
{
	var len = this.effectSprArr.length;
	for(var i=0;i<len;i++)
	{
		if(this.effectSprArr[i] && !this.effectSprArr[i].visible)
		{
			this.effectSprArr[i].visible = true;
			return this.effectSprArr[i];
		}
	}
	var spr = new Particle_ZzyGLLEffect();
	this.addChild(spr);
	this.effectSprArr.push(spr);
	return spr;
}




Window_ZzyGCFLinkLook.prototype.CreateBkBlockManager = function()
{
	return new Sprite_ZzyGLLBatch();
}



Window_ZzyGCFLinkLook.prototype.EvalTranslate = function(formula)//轉換
{
	var variables = $gameVariables._data;//全域性變數
	var v = $gameVariables._data;
	var V = v;
	var switchs = $gameSwitches._data;//全域性開關
	var s = $gameSwitches._data;
	var S = s;
	var score = this.score;
	var time = this.time;
	var level = this.level;
	var list = this.list;
	var line = this.line;
	var size = this.size;
	var type = this.type;
	var maxlevel = this.maxLevel;
	

	return eval(formula);
}

Window_ZzyGCFLinkLook.prototype.update = function()
{
	Window_ZzyGCFBase.prototype.update.call(this);
	if(this.isPauseDown)return;//暫停不會更新

	this.updateData();//更新數據
	this.drawData();//繪製數據

}


Window_ZzyGCFLinkLook.prototype.updateData = function()
{
	switch(this.gameStage)//不同階段重新整理情況
	{
		case 1:this.Stage1();break;//遊戲開始時
		case 2:this.Stage2();break;//遊戲執行中
		case 3:this.Stage3();break;
		case 4:this.Stage4();break;//暫停時
	}
}

Window_ZzyGCFLinkLook.prototype.drawData = function()
{
	
	
	
}


Window_ZzyGCFLinkLook.prototype.IsReadyWindowPointer = function()
{
	if(Zzy.GLL.WindowPointer && 
	Zzy.GLL.WindowPointer.UI &&
	Zzy.GLL.Window1Pointer &&
	Zzy.GLL.Window2Pointer &&
	Zzy.GLL.Window3Pointer)
	{return true;}
	return false;
	
}


Window_ZzyGCFLinkLook.prototype.IsReadyLoadPicture = function()//圖片合集
{
	
	if(this.ItemsBitmapGroup && this.ItemsBitmapGroup.width && this.ItemsBitmapGroup.height)
	{
		return true;
	}
	
	return false;	
}


Window_ZzyGCFLinkLook.prototype.Stage1 = function()
{
	if(this.installSpr)//載入圖片檢測
	{
		if(this.IsReadyWindowPointer() && this.IsReadyLoadPicture())
		{
			this.installSpr = false;
			this.Stage1ToStage2();//進入第二階段
		}
		
	}
	
}


Window_ZzyGCFLinkLook.prototype.Stage1ToStage2 = function()
{
	this.gameStage = 2;
	this.ItemsBitmapArr = Zzy.GCF.SplitPictureToArr1(Zzy.Param.GLLItemArrPic,this.ItemsBitmapGroup);//切分圖片
	this.InitGameDate();
}



Window_ZzyGCFLinkLook.prototype.Stage2 = function()
{
	this.updateGameStage();//遊戲狀態	
	this.updateNextCP();//更新進入下一關
	this.updateCPPass();//更新通關


	this.updateGameTime();//更新遊戲時間
	if(this.isSpecial1())//特殊情況結束
	{
		this.gameGlobal.result = 'other1';
		this.Stage2ToStage3();//跳到遊戲結束界面
		this.UI.CallGameOverInterface('win');
	}
	else if(this.isSpecial2())
	{
		this.gameGlobal.result = 'other2';
		this.Stage2ToStage3();//跳到遊戲結束界面
		this.UI.CallGameOverInterface('win');
	}	
	
}


Window_ZzyGCFLinkLook.prototype.InitGameDate = function()
{
	this.isNeedLoadNextCP = true;//載入下一關標記
	this.maxLevel = this.EvalTranslate($gameSystem.GetZzyGLLMaxLevelFormula());	
}


Window_ZzyGCFLinkLook.prototype.updateCPPass = function()
{
	if(!this.isCPPass)return;
	
	//進入下一關
	if(this.CCPPassTime < this.CPPassTime)
	{
		this.CCPPassTime++;
	}
	else//進入下一關
	{
		this.CCPPassTime = 0;
		this.isCPPass = false;
		var result = this.NextCheckPointer();
		
		if(!result)//到達最大關卡,代表遊戲勝利
		{
			//遊戲通關
			this.gameState = 'win';
			this.UI.CallGameOverInterface('win');
			this.Stage2ToStage3();
		}
	}
}


Window_ZzyGCFLinkLook.prototype.SettlementGameDate = function()
{
	this.gameGlobal.score = this.score;
	this.gameGlobal.time = this.time;
	
}


Window_ZzyGCFLinkLook.prototype.updateGameStage = function()
{
	if(!this.TheReturnGameState())return;
	
	if(this.isCPPass){this.gameState = 'pass';}
	
	for(var i=0;i<this.line;i++)
	{
		for(var j=0;j<this.list;j++)
		{
			if(!this.cpBlockSpr[i][j])continue;
			if(!this.cpBlockSpr[i][j].visible)continue;
			
			if(this.cpBlockSpr[i][j].isBusy())
			{
				this.gameState = 'wait';
				return;
			}
			
		}
	}
	
	
	this.gameState = 'play';
	return;
	
}

Window_ZzyGCFLinkLook.prototype.TheReturnGameState = function()
{
	switch(this.gameState)
	{
		case 'init':case 'win':case 'lose':return false;
	}
	return true;
}






Window_ZzyGCFLinkLook.prototype.updateNextCP = function()
{
	if(!this.isNeedLoadNextCP)return;
	this.NextCheckPointer();//進入下一關
	this.isNeedLoadNextCP = false;
}



Window_ZzyGCFLinkLook.prototype.Stage2ToStage3 = function()
{
	this.gameStage = 3;
	this.SettlementGameDate();//結算遊戲資訊
}



Window_ZzyGCFLinkLook.prototype.Stage3 = function()
{

	
}



Window_ZzyGCFLinkLook.prototype.Stage4 = function()//暫停時
{
	
	
}



Window_ZzyGCFLinkLook.prototype.isSpecial1 = function()
{
	return Zzy.Param.GLLOtherEnd1Script();
}

Window_ZzyGCFLinkLook.prototype.isSpecial2 = function()
{
	return Zzy.Param.GLLOtherEnd2Script();
}


Window_ZzyGCFLinkLook.prototype.updateGameTime = function()//重新整理遊戲時間
{

	this.time++;
	if(this.gameState === 'play')
	{
		if(this.CcpTime < 60)
		{this.CcpTime++;}
		else
		{
			this.CcpTime = 0;
			this.cpTime--;//減少時間
			
			
			if(this.cpTime <= 0)//遊戲失敗
			{
				this.gameState = 'lose';
				//呼叫遊戲結束界面
				this.UI.CallGameOverInterface('fail');
				this.Stage2ToStage3();
			}			
		}			
	}
	
}




Window_ZzyGCFLinkLook.prototype.IsOperation = function()//可以操作
{
	//不處於等待操控和按下暫停時
	if(this.isPauseDown)return false;
	
	
	return true;
}


Window_ZzyGCFLinkLook.prototype.OnKeyP = function()
{
	var isPause = Window_ZzyGCFBase.prototype.OnKeyP.call(this);
	this.isPauseDown = isPause;
	this.UI.setPause(isPause);//執行暫停圖片
}




Window_ZzyGCFLinkLook.prototype.ExecutePase = function()//暫停
{
	this.gameStage = 4;
}

Window_ZzyGCFLinkLook.prototype.ExitGame = function()
{
	
	Zzy.GCF.exitGame(this.gameGlobal.result);
}


//一般用於繫結數字點陣圖的顯示
Window_ZzyGCFLinkLook.prototype.getScore = function()//返回目前分數
{
	return Zzy.GLL.WindowPointer.score;
}

Window_ZzyGCFLinkLook.prototype.getTime = function()//返回目前時間
{
	return Zzy.GLL.WindowPointer.time;
}

Window_ZzyGCFLinkLook.prototype.getGlobalScore = function()//返回目前分數
{
	return Zzy.GLL.WindowPointer.gameGlobal.score;
}

Window_ZzyGCFLinkLook.prototype.getGlobalTime = function()//返回目前分數
{
	return Math.floor(Zzy.GLL.WindowPointer.gameGlobal.time / 60);
}


Window_ZzyGCFLinkLook.prototype.getCPTime = function()
{
	return Zzy.GLL.WindowPointer.cpTime;
}

Window_ZzyGCFLinkLook.prototype.getLevel = function()//返回目前時間
{
	return Zzy.GLL.WindowPointer.level;
}

Window_ZzyGCFLinkLook.prototype.getHistroyScore = function()//返回目前時間
{
	return $gameSystem.GetZzyGLLHistroyScore();//獲取歷史分數
}

Window_ZzyGCFLinkLook.prototype.getHistroyLevel = function()
{
	return $gameSystem.GetZzyGLLHistroyLevel();//歷史等級
}


Window_ZzyGCFLinkLook.prototype.ClearGameGlobal = function()
{
	this.gameGlobal.score = 0;
	this.gameGlobal.time = 0;
	this.gameGlobal.result = '';
}

Window_ZzyGCFLinkLook.prototype.OnTouch = function()//移動中
{
	Window_ZzyGCFBase.prototype.OnTouch.call(this)
	
	if(!this.IsCanPlayTouch())return;
	
	
	var info = this.ReturnClickIndex();
	if(info.x === -1 || info.y === -1 || info.spr === undefined)return;//忽略
	if(info.spr.visible === false)return;
	
	//選中了

	if(this.selectInfo.spr === undefined)//不存在時視為第一次選擇
	{
		this.selectInfo.x = info.x;
		this.selectInfo.y = info.y;
		this.selectInfo.spr = info.spr;
		//被選中目標進行閃爍
		this.selectInfo.spr.StartFlash();//開始閃爍
		
		Zzy.GLL.PlaySE(2);
	}
	else if(this.selectInfo.x === info.x && this.selectInfo.y === info.y)//第二次選擇相同內容時
	{
		//同時選中一個目標
		this.selectInfo.spr.StopFlash();
		this.ClearSelectInfo();
		Zzy.GLL.PlaySE(2);
	}
	else
	{
		this.selectInfo.spr.StartOnce();
		info.spr.StartOnce();
		this.selectInfo.spr.StopFlash();

		
		//判斷兩個的碰撞情況
		if(this.JudgIsConnect(this.selectInfo,info))
		{
			//連線成功
			var routeArr = this.MapTheRouteArr(this.connectInfo.pos);
			this.connectInfo.src.MoveToOfRoute(routeArr);//點選源開始移動
			this.connectInfo.src.setConnectTarget(this.connectInfo.tar);//繫結
			
			Zzy.GLL.PlaySE(2);
		}
		else
		{
			Zzy.GLL.PlaySE(3);
		}
		
		this.ClearSelectInfo();		
	}
	
	
}


Window_ZzyGCFLinkLook.prototype.MapTheRouteArr = function(routeArr)
{
	//對映
	var posArr = this.cpBlockPosRect;
	var newRouteArr = [];
	var x = 0;
	var y = 0;
	var resX = 0;
	var resY = 0;

	for(var i=0;i<routeArr.length;i++)
	{
		x = routeArr[i].x;
		y = routeArr[i].y;
		
		if(x >= 0 && x <= this.list-1 && y >= 0 && y <= this.line-1)
		{
			resX = posArr[y][x].x;
			resY = posArr[y][x].y;		
		}		
		else
		{
			var correctX = x;
			correctX = Math.max(0,Math.min(correctX,this.list-1));
			
			var correctY = y;
			correctY = Math.max(0,Math.min(correctY,this.line-1));
			
			
			if(x === -1)
			{
				resX = posArr[correctY][correctX].x - this.size;
			}
			else if(x === this.list)
			{
				resX = posArr[correctY][correctX].x + this.size;
			}
			else
			{
				resX = posArr[correctY][correctX].x;
			}
		
			if(y === -1)
			{
				resY = posArr[correctY][correctX].y - this.size;
			}
			else if(y === this.line)
			{
				resY = posArr[correctY][correctX].y + this.size;
			}
			else
			{
				resY = posArr[correctY][correctX].y;
			}
		}
		var point = {x:resX,y:resY};
		newRouteArr.push(point);
	}
	return newRouteArr;
}



Window_ZzyGCFLinkLook.prototype.ClearSelectInfo = function()
{
	this.selectInfo.x = -1;
	this.selectInfo.y = -1;
	this.selectInfo.spr = undefined;	
	
}

Window_ZzyGCFLinkLook.prototype.AddConnectScore = function(value)
{
	value = value ? value : this.connectScore;
	this.score += value;
	
	if(this.score > $gameSystem.GetZzyGLLHistroyScore())
	{
		$gameSystem.SetZzyGLLHistroyScore(this.score);//修改歷史最高分
	}
	
}

Window_ZzyGCFLinkLook.prototype.AddCPTimeScore = function()
{
	this.AddConnectScore(this.cpTime * this.surplusSocre);
}



Window_ZzyGCFLinkLook.prototype.CheckIsPassCP = function(pointer)//檢測是否通過本關
{
	for(var i=0;i<pointer.line;i++)
	{
		for(var j=0;j<pointer.list;j++)
		{
			if(pointer.cpBlockSpr[i][j].visible)
			{
				return;
			}
		}
	}
	
	//全部消滅
	pointer.isCPPass = true;//通關
	pointer.AddCPTimeScore();
}





Window_ZzyGCFLinkLook.prototype.JudgIsConnect = function(srcInfo,tarInfo)//判斷是否連線
{
	if(srcInfo.spr.colorId !== tarInfo.spr.colorId)return false;//顏色不同

	this.connectInfo.src = srcInfo.spr;
	this.connectInfo.tar = tarInfo.spr;
	this.connectInfo.pos = [];


	
	this.connectType = 0;//連線型別	
	if(this.IsConnect1(srcInfo,tarInfo))//方法一相連線
	{
		this.connectType = 1;
		return true;
	}
	if(this.IsConnect2(srcInfo,tarInfo))//方法二相連線:直線
	{
		this.connectType = 2;
		return true;
	}
	if(this.IsConnect3(srcInfo,tarInfo))//方法三相連線:存在一個轉角
	{
		this.connectType = 3;
		return true;		
	}
	if(this.IsConnect4(srcInfo,tarInfo))//方法四相連線:存在兩個轉角
	{
		this.connectType = 4;
		return true;		
	}
	
	return false;
}	


Window_ZzyGCFLinkLook.prototype.PushPos = function(tx,ty)
{
	var pos = {x:tx,y:ty};
	this.connectInfo.pos.push(pos);
}


	
Window_ZzyGCFLinkLook.prototype.IsConnect1 = function(srcInfo,tarInfo)//第一種情況,相鄰
{
	//判斷是否為臨近
	
	var disX = Math.abs(srcInfo.x - tarInfo.x);
	var disY = Math.abs(srcInfo.y - tarInfo.y);
	
	if(srcInfo.x === tarInfo.x)
	{
		if(disY === 1)
		{
			this.PushPos(tarInfo.x,tarInfo.y);	
			return true;
		}
	}
	if(srcInfo.y === tarInfo.y)
	{
		if(disX === 1)
		{
			this.PushPos(tarInfo.x,tarInfo.y);
			return true;
		}
	}
	
	return false;
}
	
Window_ZzyGCFLinkLook.prototype.IsConnect2 = function(srcInfo,tarInfo)//第二種情況,處於一條直線內,中間不存在阻攔
{
	var isConnect = false;
	var pos1 = {};
	var pos2 = {};
	pos1.x = srcInfo.x;
	pos1.y = srcInfo.y;
	pos2.x = tarInfo.x;
	pos2.y = tarInfo.y;
	

	if(this.JudgRouteIsPass(pos1,pos2))
	{
		this.PushPos(tarInfo.x,tarInfo.y);	
		return true;
	}
	
	return false;
}


Window_ZzyGCFLinkLook.prototype.IsConnect3 = function(srcInfo,tarInfo)//第三種情況,存在一個轉角
{
	//計算存在一個角的情況
	//從x到y  和  從y到x
	var dir = 0;
	dir = this.JudgValueDir(srcInfo.x,tarInfo.x);


	//x->y
	var pos1 = {};
	var pos2 = {};
	
	pos1.x = srcInfo.x;
	pos1.y = srcInfo.y;
	pos2.x = srcInfo.x;
	pos2.y = tarInfo.y;
	
	if(this.JudgRouteIsPass(pos1,pos2))
	{
		if(!this.cpBlockSpr[tarInfo.y][srcInfo.x].visible)
		{
			pos1.x = srcInfo.x;
			pos1.y = tarInfo.y;
			pos2.x = tarInfo.x;
			pos2.y = tarInfo.y;			
			if(this.JudgRouteIsPass(pos1,pos2))
			{
				this.PushPos(srcInfo.x,tarInfo.y);
				this.PushPos(tarInfo.x,tarInfo.y);
				return true;
			}
		}	
	}
	
	pos1.x = srcInfo.x;
	pos1.y = srcInfo.y;
	pos2.x = tarInfo.x;
	pos2.y = srcInfo.y;	
	
	//y->x
	if(this.JudgRouteIsPass(pos1,pos2))
	{
		if(!this.cpBlockSpr[srcInfo.y][tarInfo.x].visible)
		{
			pos1.x = tarInfo.x;
			pos1.y = srcInfo.y;
			pos2.x = tarInfo.x;
			pos2.y = tarInfo.y;			
			if(this.JudgRouteIsPass(pos1,pos2))
			{
				this.PushPos(tarInfo.x,srcInfo.y);
				this.PushPos(tarInfo.x,tarInfo.y);
				return true;
			}			
		}
		
	}
	
	return false;
	
}

	
Window_ZzyGCFLinkLook.prototype.IsConnect4 = function(srcInfo,tarInfo)//第四種情況,存在兩個轉角
{
	//兩個轉角存在的情況是比價橫向和縱向的連線情況
	if(this.JudgLineConnect4(srcInfo,tarInfo))
	{
		return true;
	}
	if(this.JudgListConnect4(srcInfo,tarInfo))
	{
		return true;
	}
	return false;
}



Window_ZzyGCFLinkLook.prototype.JudgLineConnect4 = function(srcInfo,tarInfo)
{
	var centerY = Math.floor((srcInfo.y+tarInfo.y)/2);
	var up = centerY;
	var down = centerY+1;
	var upEnd = false;
	var downEnd = false;
	var pos1 = {};
	var pos2 = {};		
	
	while(true)//3層路線判斷
	{
		//左遍歷
		pos1.x = srcInfo.x;
		pos1.y = srcInfo.y;
		pos2.x = srcInfo.x;
		pos2.y = up;
			
		if(!upEnd && this.JudgRouteIsPass(pos1,pos2))//正確路線
		{
			if(up === -1)
			{
				pos1.x = tarInfo.x;
				pos1.y = up;
				pos2.x = tarInfo.x;
			    pos2.y = tarInfo.y;	
				if(this.JudgRouteIsPass(pos1,pos2))
				{
					this.PushPos(srcInfo.x,up);
					this.PushPos(tarInfo.x,up);
					this.PushPos(tarInfo.x,tarInfo.y);							
					return true;					
				}
			}
			else if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
			{
				pos1.x = pos2.x;
				pos1.y = pos2.y;
				pos2.x = tarInfo.x;
			    pos2.y = up;
				if(this.JudgRouteIsPass(pos1,pos2))//正確路線
				{
					if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
					{
						pos1.x = pos2.x;
						pos1.y = pos2.y;
						pos2.x = tarInfo.x;
						pos2.y = tarInfo.y;
						if(this.JudgRouteIsPass(pos1,pos2))//正確路線
						{
							this.PushPos(srcInfo.x,up);
							this.PushPos(tarInfo.x,up);
							this.PushPos(tarInfo.x,tarInfo.y);							
							return true;
						}
					}
				}	
			}	
		}
		

		pos1.x = srcInfo.x;
		pos1.y = srcInfo.y;
		pos2.x = srcInfo.x;
		pos2.y = down;
			
		if(!downEnd && this.JudgRouteIsPass(pos1,pos2))//正確路線
		{
			if(down === this.line)
			{
				pos1.x = tarInfo.x;
				pos1.y = down;
				pos2.x = tarInfo.x;
			    pos2.y = tarInfo.y;	
				if(this.JudgRouteIsPass(pos1,pos2))
				{
					this.PushPos(srcInfo.x,down);
					this.PushPos(tarInfo.x,down);
					this.PushPos(tarInfo.x,tarInfo.y);							
					return true;					
				}
			}
			else if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
			{
				pos1.x = pos2.x;
				pos1.y = pos2.y;
				pos2.x = tarInfo.x;
			    pos2.y = down;
				if(this.JudgRouteIsPass(pos1,pos2))//正確路線
				{
					if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
					{
						pos1.x = pos2.x;
						pos1.y = pos2.y;
						pos2.x = tarInfo.x;
						pos2.y = tarInfo.y;
						if(this.JudgRouteIsPass(pos1,pos2))//正確路線
						{
							this.PushPos(srcInfo.x,down);
							this.PushPos(tarInfo.x,down);
							this.PushPos(tarInfo.x,tarInfo.y);							
							return true;
						}
					}
				}	
			}	
		}

		if(up <= -1)
		{upEnd = true;}
		else
		{up--;}
	
		if(down >= this.line)
		{downEnd = true;}
		else
		{down++;}	
	
		if(upEnd && downEnd)
		{return false;}
	}
	return false;
}




Window_ZzyGCFLinkLook.prototype.JudgListConnect4 = function(srcInfo,tarInfo)
{
	var centerX = Math.floor((srcInfo.x+tarInfo.x)/2);
	var left = centerX;
	var right = centerX+1;
	var leftEnd = false;
	var rightEnd = false;
	var pos1 = {};
	var pos2 = {};		
	
	while(true)//3層路線判斷
	{
		//左遍歷
		pos1.x = srcInfo.x;
		pos1.y = srcInfo.y;
		pos2.x = left;
		pos2.y = srcInfo.y;
			
		if(!leftEnd && this.JudgRouteIsPass(pos1,pos2))//正確路線
		{
			if(left === -1)
			{
				pos1.x = left;
				pos1.y = tarInfo.y;
				pos2.x = tarInfo.x;
			    pos2.y = tarInfo.y;	
				if(this.JudgRouteIsPass(pos1,pos2))
				{
					this.PushPos(left,srcInfo.y);
					this.PushPos(left,tarInfo.y);
					this.PushPos(tarInfo.x,tarInfo.y);							
					return true;					
				}
			}
			else if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
			{
				pos1.x = pos2.x;
				pos1.y = pos2.y;
				pos2.x = left;
			    pos2.y = tarInfo.y;
				if(this.JudgRouteIsPass(pos1,pos2))//正確路線
				{
					if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
					{
						pos1.x = pos2.x;
						pos1.y = pos2.y;
						pos2.x = tarInfo.x;
						pos2.y = tarInfo.y;
						if(this.JudgRouteIsPass(pos1,pos2))//正確路線
						{
							this.PushPos(left,srcInfo.y);
							this.PushPos(left,tarInfo.y);
							this.PushPos(tarInfo.x,tarInfo.y);							
							return true;
						}
					}
				}	
			}	
		}
		
		pos1.x = srcInfo.x;
		pos1.y = srcInfo.y;
		pos2.x = right;
		pos2.y = srcInfo.y;		
		
		if(!rightEnd && this.JudgRouteIsPass(pos1,pos2))//正確路線
		{
			if(right === this.list)
			{
				pos1.x = right;
				pos1.y = tarInfo.y;
				pos2.x = tarInfo.x;
			    pos2.y = tarInfo.y;	
				if(this.JudgRouteIsPass(pos1,pos2))
				{
					this.PushPos(right,srcInfo.y);
					this.PushPos(right,tarInfo.y);
					this.PushPos(tarInfo.x,tarInfo.y);							
					return true;					
				}
			}
			else if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
			{
				pos1.x = pos2.x;
				pos1.y = pos2.y;
				pos2.x = right;
			    pos2.y = tarInfo.y;
				if(this.JudgRouteIsPass(pos1,pos2))//正確路線
				{
					if(!this.cpBlockSpr[pos2.y][pos2.x].visible)
					{
						pos1.x = pos2.x;
						pos1.y = pos2.y;
						pos2.x = tarInfo.x;
						pos2.y = tarInfo.y;
						if(this.JudgRouteIsPass(pos1,pos2))//正確路線
						{
							this.PushPos(right,srcInfo.y);
							this.PushPos(right,tarInfo.y);
							this.PushPos(tarInfo.x,tarInfo.y);							
							return true;
						}
					}
				}	
			}	
		}		

		if(left <= -1)
		{leftEnd = true;}
		else
		{left--;}
	
		if(right >= this.list)
		{rightEnd = true;}
		else
		{right++;}	
	
		if(leftEnd && rightEnd)
		{return false;}
	}
	return false;
}



Window_ZzyGCFLinkLook.prototype.JudgRouteIsPass = function(route1,route2)
{
	if(route1.x === route2.x && route1.y === route2.y)return true;
	

	if(route1.x === route2.x)//橫向相同
	{
		var dir = this.JudgValueDir(route1.y,route2.y);
		for(var i=route1.y+dir;i !== route2.y;i += dir)
		{
			if(this.cpBlockSpr[i][route1.x].visible)//不通過
			{return false;}
		}
		return true;
	}
	if(route1.y === route2.y)//縱向相同
	{
		var dir = this.JudgValueDir(route1.x,route2.x);
		for(var j=route1.x+dir;j !== route2.x;j += dir)
		{
			if(this.cpBlockSpr[route1.y][j].visible)//不通過
			{return false;}
		}
		return true;
	}
	
	return false;
}

Window_ZzyGCFLinkLook.prototype.IsSameRoute = function(route1,route2)
{
	if(route1.x === route2.x && route1.y === route2.y)
	{return true;}
return false;
}




Window_ZzyGCFLinkLook.prototype.JudgRouteIsPassArr = function(routeArr)//斷點線路測試
{
	var len = routeArr.length;
	var startPos = undefined;
	var endPos = undefined;
	var index = 0;
	var dir = 0;
	
	while(index < len-1)
	{
		startPos = routeArr[index];
		endPos = routeArr[index+1];
		
		if(startPos.x === -1 || startPos.y === -1 || endPos.x === -1 || endPos.y === -1){continue;}//滿足螢幕外部的情況
		
		if(startPos.x === endPos.x)//x相同比較y
		{
			dir = this.JudgValueDir(startPos.y,endPos.y);
			
			for(var i=startPos.y+dir;i !== endPos.y;i += dir)
			{
				if(this.cpBlockSpr[i][startPos.x].visible)
				{return false;}
			}
			
			if(index < len-2)//並非最後一個點
			{
				if(this.cpBlockSpr[endPos.y][endPos.x].visible){return false;}
			}
			
			
		}
		else//y相同比較x
		{
			dir = this.JudgValueDir(startPos.x,endPos.x);
			for(var j=startPos.x+dir;j !== endPos.x;j += dir)
			{
				if(this.cpBlockSpr[startPos.y][j].visible)
				{return false;}				
			}
			
			if(index < len-2)//並非最後一個點
			{
				if(this.cpBlockSpr[endPos.y][endPos.x].visible){return false;}
			}
		}
		index++;
	}
	return true;
}





Window_ZzyGCFLinkLook.prototype.JudgValueDir = function(v1,v2)
{
	if(v1 < v2)
	{return 1;}
	else if(v1 > v2)
	{return -1;}
	else
	{return 0;}
}






Window_ZzyGCFLinkLook.prototype.IsCanPlayTouch = function()//是否可以點選
{
	if(this.gameStage !== 2)return false;
	if(this.gameState !== 'play')return false;
	
	
	return true;
}


Window_ZzyGCFLinkLook.prototype.ReturnClickIndex = function()
{
	//判斷點中了哪個位置
	var pt = {x:this.scene.OnTouchX,y:this.scene.OnTouchY};
	
	
	for(var i=0;i<this.line;i++)
	{
		for(var j=0;j<this.list;j++)
		{
			if(Zzy.GCF.PtInRect2(pt,this.cpBlockPosRect[i][j].rect))
			{
				var info = {};
				info.x = j;
				info.y = i;
				info.spr = this.cpBlockSpr[i][j];
				return info;
			}
		}
	}
	var info = {};
	info.x = -1;
	info.y = -1;
	info.spr = undefined;
	return info;
}



Window_ZzyGCFLinkLook.prototype.OutTouch = function()//移動中
{
	Window_ZzyGCFBase.prototype.OutTouch.call(this);

}






//=======================================================================
//Window_ZzyGCFLinkLookUI
//=======================================================================

function Window_ZzyGCFLinkLookUI() 
{
    this.initialize.apply(this, arguments);
}

Window_ZzyGCFLinkLookUI.prototype = Object.create(Window_ZzyGCFBaseUI.prototype);
Window_ZzyGCFLinkLookUI.prototype.constructor = Window_ZzyGCFLinkLookUI;

Window_ZzyGCFLinkLookUI.prototype.initialize = function() 
{
	//初始化
    var width = this.Width();
    var height = this.Height();
	
    Window_ZzyGCFBaseUI.prototype.initialize.call(this, 0, 0, width, height);

	this.centerX = Graphics.boxWidth / 2;
	this.centerY = Graphics.boxHeight / 2;
	
	this.CreateAllSprite();
	this.InitAllSprite();//初始化
	

};	


Window_ZzyGCFLinkLookUI.prototype.InitAllSprite = function()
{
	//繫結位置
	this.MenuBkSpr.setBindingOk(this.OkButtonSpr);
	this.MenuBkSpr.setBindingCancel(this.CancelButtonSpr);
}




Window_ZzyGCFLinkLookUI.prototype.OnExitButton = function()
{
	switch(Zzy.GLL.WindowPointer.gameStage)
	{
		case 2:
			//召喚退出視窗
			this.MenuBkSpr.Appear();
		break;
		
		case 4:

		break;
	}
}




Window_ZzyGCFLinkLookUI.prototype.CallGameOverInterface = function(result)
{
	Zzy.GLL.WindowPointer.gameGlobal.result = result;
	this.MenuBkSpr.GameOverAppear(result);	
	
}

Window_ZzyGCFLinkLookUI.prototype.CallRGameOverInterface = function(result)
{
	Zzy.GLL.WindowPointer.gameGlobal.result = result;
	this.MenuBkSpr.GameOverAppear(result);		

}


Window_ZzyGCFLinkLookUI.prototype.OnCancelButton = function()//取消
{
	this.MenuBkSpr.DisAppear();	
}

Window_ZzyGCFLinkLookUI.prototype.OnOkButton = function()
{
	Zzy.GLL.WindowPointer.Stage2ToStage3();
	this.CallRGameOverInterface('fail');
}




Window_ZzyGCFLinkLookUI.prototype.BackGameRunning = function()//返回遊戲界面
{
	Zzy.GLL.WindowPointer.gameStage = 2;//回到遊戲執行狀態
}


Window_ZzyGCFLinkLookUI.prototype.CreateAllSprite = function()
{
	this.CreateInfoAndText();//創造文字和數字
	this.CreateAllButton();//創造按鈕
	this.CreatePauseSpr();//暫停
}


Window_ZzyGCFLinkLookUI.prototype.CreateInfoAndText = function()
{
	


	
	this.levelSpr = new Sprite_ZzyGLLNumber(Zzy.Param.GLLLevelSprT,Zzy.Param.GLLLevelSprTC);
	this.levelSpr.x = eval(Zzy.Param.GLLLevelSprX);
	this.levelSpr.y = eval(Zzy.Param.GLLLevelSprY);
	this.levelSpr.setFontSize(Zzy.Param.GLLLevelSprTS);
	this.levelSpr.setBorderColor(Zzy.Param.GLLLevelSprBC);
	this.levelSpr.setBorderWidth(Zzy.Param.GLLLevelSprBS);
	

	this.scoreSpr = new Sprite_ZzyGLLNumber(Zzy.Param.GLLScoreSprT,Zzy.Param.GLLScoreSprTC,320);
	this.scoreSpr.x = eval(Zzy.Param.GLLScoreSprX);
	this.scoreSpr.y = eval(Zzy.Param.GLLScoreSprY);
	this.scoreSpr.setFontSize(Zzy.Param.GLLScoreSprTS);
	this.scoreSpr.setBorderColor(Zzy.Param.GLLScoreSprBC);
	this.scoreSpr.setBorderWidth(Zzy.Param.GLLScoreSprBS);	
	
	
	this.maxScoreSpr = new Sprite_ZzyGLLNumber(Zzy.Param.GLLMaxScoreSprT,Zzy.Param.GLLMaxScoreSprTC,400);
	this.maxScoreSpr.x = eval(Zzy.Param.GLLMaxScoreSprX);
	this.maxScoreSpr.y = eval(Zzy.Param.GLLMaxScoreSprY);
	this.maxScoreSpr.setFontSize(Zzy.Param.GLLMaxScoreSprTS);
	this.maxScoreSpr.setBorderColor(Zzy.Param.GLLMaxScoreSprBC);
	this.maxScoreSpr.setBorderWidth(Zzy.Param.GLLMaxScoreSprBS);		
	
	
	this.timeSpr = new Sprite_ZzyGLLText(Zzy.Param.GLLTimeSprT);
	this.timeSpr.x = eval(Zzy.Param.GLLTimeSprX);
	this.timeSpr.y = eval(Zzy.Param.GLLTimeSprY);
	this.timeSpr.setTextColor(Zzy.Param.GLLTimeSprTC);
	this.timeSpr.setFontSize(Zzy.Param.GLLTimeSprTS);
	this.timeSpr.setBorderColor(Zzy.Param.GLLTimeSprBC);
	this.timeSpr.setBorderWidth(Zzy.Param.GLLTimeSprBS);		
	

	this.scoreTotalSpr = new Sprite_ZzyGLLNumber(Zzy.Param.GLLScoreTotalT,Zzy.Param.GLLScoreTotalTC,320);
	this.scoreTotalSpr.setBorderColor('rgba(255,255,255,1)');
	this.scoreTotalSpr.x = eval(Zzy.Param.GLLScoreTotalX);
	this.scoreTotalSpr.y = eval(Zzy.Param.GLLScoreTotalY);
	this.scoreTotalSpr.setFontSize(Zzy.Param.GLLScoreTotalTS);
	this.scoreTotalSpr.setBorderColor(Zzy.Param.GLLScoreTotalBC);
	this.scoreTotalSpr.setBorderWidth(Zzy.Param.GLLScoreTotalBS);	



	this.timeTotalSpr = new Sprite_ZzyGLLNumber(Zzy.Param.GLLTimeTotalT,Zzy.Param.GLLTimeTotalTC,320);
	this.timeTotalSpr.setBorderColor('rgba(255,255,255,1)');
	this.timeTotalSpr.x = eval(Zzy.Param.GLLTimeTotalX);
	this.timeTotalSpr.y = eval(Zzy.Param.GLLTimeTotalY);
	this.timeTotalSpr.setFontSize(Zzy.Param.GLLTimeTotalTS);
	this.timeTotalSpr.setBorderColor(Zzy.Param.GLLTimeTotalBC);
	this.timeTotalSpr.setBorderWidth(Zzy.Param.GLLTimeTotalBS);	
	

	this.addChild(this.levelSpr);
	this.addChild(this.scoreSpr);
	this.addChild(this.maxScoreSpr);
	this.addChild(this.timeSpr);

	
	//建立時間條
	this.timeTileSpr = new Sprite_ZzyGLLTimer(Zzy.Param.GLLTimeTileL,Zzy.Param.GLLTimeTileH,100);
	this.timeTileSpr.setPostion(eval(Zzy.Param.GLLTimeTileX),eval(Zzy.Param.GLLTimeTileY));
	this.addChild(this.timeTileSpr);



	//建立時間條背景
	this.timeTileSprBk = new Sprite_ZzyGLLTimerBk(this.timeTileSpr.x,this.timeTileSpr.y+1);
	
	this.MenuBkSpr = new Sprite_ZzyGLLMenuBk();
		
		
	this.addChild(this.timeTileSprBk);
	this.addChild(this.MenuBkSpr);	
	this.addChild(this.scoreTotalSpr);
	this.addChild(this.timeTotalSpr);	
		

	//進行繫結
	this.levelSpr.setBindNumberFunction(Zzy.GLL.WindowPointer.getLevel);
	this.scoreSpr.setBindNumberFunction(Zzy.GLL.WindowPointer.getScore);
	this.maxScoreSpr.setBindNumberFunction(Zzy.GLL.WindowPointer.getHistroyScore);
	this.scoreTotalSpr.setBindNumberFunction(Zzy.GLL.WindowPointer.getGlobalScore);
	this.timeTotalSpr.setBindNumberFunction(Zzy.GLL.WindowPointer.getGlobalTime);
	
	
	
	
	//建立文字
	this.tipsSpr = new Sprite_ZzyGLLText(Zzy.GLL.TextArr[0]);
	this.tipsSpr.x = Graphics.boxWidth/2;
	this.tipsSpr.y = Graphics.boxHeight/2-90;
	this.tipsSpr.setFontSize(46);
	this.tipsSpr.setTextColor('rgba(255,255,255,1)');
	this.tipsSpr.setBorderColor('rgba(0,0,0,1)');
	this.addChild(this.tipsSpr);
	//建立文字
	this.gameOverTSpr = new Sprite_ZzyGLLText(Zzy.GLL.TextArr[1]);
	this.gameOverTSpr.x = Graphics.boxWidth/2;
	this.gameOverTSpr.y = Graphics.boxHeight/2-15;
	this.gameOverTSpr.setFontSize(46);
	this.gameOverTSpr.setTextColor('rgba(255,255,255,1)');
	this.gameOverTSpr.setBorderColor('rgba(0,0,0,1)');
	this.addChild(this.gameOverTSpr);	
	//建立文字
	this.mokSpr = new Sprite_ZzyGLLText(Zzy.GLL.TextArr[2]);
	this.mokSpr.x = Graphics.boxWidth/2;
	this.mokSpr.y = Graphics.boxHeight/2+60;
	this.mokSpr.setFontSize(46);
	this.mokSpr.setTextColor('rgba(255,255,255,1)');
	this.mokSpr.setBorderColor('rgba(0,0,0,1)');
	this.addChild(this.mokSpr);
	
	this.winTextSpr = new Sprite_ZzyGLLText(Zzy.GLL.TextArr[3]);
	this.winTextSpr.x = Graphics.boxWidth/2;
	this.winTextSpr.y = Graphics.boxHeight/2-90;
	this.winTextSpr.setFontSize(46);
	this.winTextSpr.setTextColor('rgba(255,255,255,1)');
	this.winTextSpr.setBorderColor('rgba(0,0,0,1)');
	this.winTextSpr.setBorderWidth(4);
	this.addChild(this.winTextSpr);
	
	
	this.failTextSpr = new Sprite_ZzyGLLText(Zzy.GLL.TextArr[4]);
	this.failTextSpr.x = Graphics.boxWidth/2;
	this.failTextSpr.y = Graphics.boxHeight/2-90;
	this.failTextSpr.setFontSize(46);
	this.failTextSpr.setTextColor('rgba(255,255,255,1)');
	this.failTextSpr.setBorderColor('rgba(0,0,0,1)');
	this.failTextSpr.setBorderWidth(4);
	this.addChild(this.failTextSpr);	
	
	
	
	this.HideGameOverText();
	this.HideTipsExitText();
}


Window_ZzyGCFLinkLookUI.prototype.HideGameOverText = function()
{
	this.scoreTotalSpr.visible = false;
	this.timeTotalSpr.visible = false;
	this.winTextSpr.visible = false;
	this.failTextSpr.visible = false;
}



Window_ZzyGCFLinkLookUI.prototype.CallShowWinText = function()
{
	Zzy.GLL.WindowPointer.UI.scoreTotalSpr.visible = true;
	Zzy.GLL.WindowPointer.UI.timeTotalSpr.visible = true;
	Zzy.GLL.WindowPointer.UI.winTextSpr.visible = true;	
}

Window_ZzyGCFLinkLookUI.prototype.CallShowFailText = function()
{
	Zzy.GLL.WindowPointer.UI.scoreTotalSpr.visible = true;
	Zzy.GLL.WindowPointer.UI.timeTotalSpr.visible = true;
	Zzy.GLL.WindowPointer.UI.failTextSpr.visible = true;
}


Window_ZzyGCFLinkLookUI.prototype.ShowTipsExitText = function()
{
	this.tipsSpr.visible = true;
	this.gameOverTSpr.visible = true;
	this.mokSpr.visible = true;	
}

Window_ZzyGCFLinkLookUI.prototype.HideTipsExitText = function()
{
	this.tipsSpr.visible = false;
	this.gameOverTSpr.visible = false;
	this.mokSpr.visible = false;	
}


Window_ZzyGCFLinkLookUI.prototype.CallHideTipsExitText = function()
{
	Zzy.GLL.WindowPointer.UI.tipsSpr.visible = false;
	Zzy.GLL.WindowPointer.UI.gameOverTSpr.visible = false;
	Zzy.GLL.WindowPointer.UI.mokSpr.visible = false;	
}


Window_ZzyGCFLinkLookUI.prototype.CallShowTipsExitText = function()
{
	Zzy.GLL.WindowPointer.UI.tipsSpr.visible = true;
	Zzy.GLL.WindowPointer.UI.gameOverTSpr.visible = true;
	Zzy.GLL.WindowPointer.UI.mokSpr.visible = true;	
}




Window_ZzyGCFLinkLookUI.prototype.CreateAllButton = function()//創造按鈕
{
	var ex = eval(Zzy.Param.GLLExitButtonX);
	var ey = eval(Zzy.Param.GLLExitButtonY);

	this.ExitButtonSpr = new Sprite_ZzyGLLButton(ex,ey,Zzy.Param.GLLExitButtonPic,0,1);//1代表退出
	this.OkButtonSpr = new Sprite_ZzyGLLButton(this.centerX-60,this.centerY,Zzy.Param.GLLOkButtonPic,0,2);//2代表確認
	this.CancelButtonSpr = new Sprite_ZzyGLLButton(this.centerX+60,this.centerY,Zzy.Param.GLLCancelButtonPic,0,3);//3代表取消
	
	
	this.addChild(this.ExitButtonSpr);
	this.addChild(this.OkButtonSpr);
	this.addChild(this.CancelButtonSpr);
}




Window_ZzyGCFLinkLookUI.prototype.CreatePauseSpr = function()//建立暫停
{
	if(!Zzy.Param.GLLPausePic)
	{
		this.PauseSpr = new Sprite_ZzyGLLPause(this.centerX,this.centerY);//創造預設暫停
	}
	else
	{
		this.PauseSpr = new Sprite_ZzyGLLPause(this.centerX,this.centerY,Zzy.Param.GLLPausePic);		
	}

	
	this.addChild(this.PauseSpr);
}






Window_ZzyGCFLinkLookUI.prototype.OpenResultInterface = function()//召喚結算界面
{
	switch(this.gameGlobal.result)
	{
		case 'win':

			this.OpenWinInterface();//遊戲勝利
		break;
			
		case 'fail':

			this.OpenFailInterface();//遊戲失敗
		break;
		default:

			this.OpenWinInterface();//遊戲勝利
	}

	
}



Window_ZzyGCFLinkLookUI.prototype.OpenWinInterface = function()//勝利界面
{

}



Window_ZzyGCFLinkLookUI.prototype.OpenFailInterface = function()//失敗界面
{

}


Window_ZzyGCFLinkLookUI.prototype.setPause = function(isPause)//執行暫停
{
	if(isPause)
	{
		this.PauseSpr.visible = true;
	}
	else
	{
		this.PauseSpr.visible = false;
	}
	
}



//----------------------------------Zzy.GLL.Function--------------------------------

Zzy.GLL.PlaySE = function(soundID)//播放聲音
{
	var se = Zzy.Param.GLLAllSE[soundID];
	
	if(se && se.name)
	{
		AudioManager.playSe(se);
	}
	
}


//----------------------------------Zzy.GLL.Function--------------------------------


Zzy.GLL.MaxLevel = function(formula)
{
	$gameSystem.SetZzyGLLMaxLevelFormula(formula);
}

Zzy.GLL.Time = function(formula)
{
	$gameSystem.SetZzyGLLCpTimeFormula(formula);
}

Zzy.GLL.Line = function(formula)
{
	$gameSystem.SetZzyGLLCpLineFormula(formula);
}

Zzy.GLL.List = function(formula)
{
	$gameSystem.SetZzyGLLCpListFormula(formula);
}

Zzy.GLL.Size = function(formula)
{
	$gameSystem.SetZzyGLLCpSizeFormula(formula);
}

Zzy.GLL.Type = function(formula)
{
	$gameSystem.SetZzyGLLCpTypeFormula(formula);
}

Zzy.GLL.ConnectSocre = function(formula)
{
	$gameSystem.SetZzyGLLConnectSocreFormula(formula);
}

Zzy.GLL.SurplusScore = function(formula)
{
	$gameSystem.SetZzyGLLSurplusTimeSocreFormula(formula);
}

Zzy.GLL.StartLevel = function(value)
{
	$gameSystem.SetZzyGLLStartLevel(value);
}

