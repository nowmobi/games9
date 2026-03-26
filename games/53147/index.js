System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;

  function topLevelImport(url) {
    return System["import"](url);
  }
  
  function onGameLoaded () {
	document.getElementById("overlay").remove();
	document.getElementById("overlay2").remove();
  }

  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
		let currentLang = 'en';
		var url = new URL(window.location.href);
    var lang = url.searchParams.get("lang");
    
    const updateTitleLogo = () => {
      if (bridge.platform.language == 'ru'){
        const titleElem = document.getElementById("title");
        if (titleElem) {
          titleElem.src = "./logo_ru.png"
        } else {
          console.log('>>> no title element on screen');
        }
      }
    }
    
    if (!bridge.isInitialized) {
      bridge.initialize({
        // forciblySetPlatformId: bridge.PLATFORM_ID.GAMEPIX,
        orientation: 'landscape',
        platforms: { 
          // для тестов
          // 'game_distribution': { 
          //   gameId: '89b674adbc344c52b3e92fa0e435aacc' 
          // },
          // 'game_monetize': { 
          //   gameId: 'ht5jswx4nx9irkf09i235oy9qcxb99qr' 
          // },
          // релизные
          'game_distribution': { 
            gameId: '9f6cc0ffc63942fc8cc373f3285a8c2f' 
          },
          'game_monetize': { 
            gameId: '0fxxs3isdw44cja3is79f6mhql3ert6p' 
          }
        }
      })
        .then(() => {
            // Инициализация прошла успешно, можно использовать SDK
            console.log('>>> js bridge init success', bridge.platform.id, bridge.isInitialized);
            updateTitleLogo();
        })
        .catch(error => {
            // Ошибка, что-то пошло не так
            console.log('>>> js bridge init error', error);
        });
    } else {
      console.log('>>> js bridge is already initialized');
      updateTitleLogo();
    }
        
		if(lang != null && lang == 'ru')
        {
			document.getElementById("title").src = "./logo_ru.png"
        }
        else
        {
			document.getElementById("title").src = "./logo.png"
        }
		canvas = document.getElementById('GameCanvas');
        $p = canvas.parentElement;
        bcr = $p.getBoundingClientRect();
        canvas.width = bcr.width;
        canvas.height = bcr.height;
        application = new Application();
        topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start(onGameLoaded).then(function () {
          document.getElementById("GameCanvas").style.visibility = 'visible';
		  document.getElementById("overlay2").style.visibility = 'visible';
		  });
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});