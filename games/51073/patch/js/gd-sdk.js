/**
{
  "name": "SDK_GDPR_TRACKING",
  "message": "Not set",
  "status": "warning"
}

{
    "name": "SDK_GDPR_TARGETING",
    "message": "Not set",
    "status": "warning"
}

{
    "name": "SDK_GDPR_THIRD_PARTY",
    "message": "Not set",
    "status": "warning"
}

{
    "name": "SDK_READY",
    "message": "Everything is ready.",
    "status": "success"
}

{
    "name": "SDK_ERROR",
    "message": "Blocked:1: patch/js/null.js?https://www.google-analytics.com/analytics.js",
    "status": "error"
}

*/

window.SDK_OPTIONS = {
  gameId: "amutu5kn2xpc5njpr6q02zqprjtksdxh",
  onEvent: function (a) {
      switch (a.name) {
          case "SDK_GAME_PAUSE":
              // pause game logic / mute audio
              break;
          case "SDK_GAME_START":
              // advertisement done, resume game logic and unmute audio
              break;
          case "SDK_READY":
              // when sdk is ready
              break;
      }
  }
};
(function (a, b, c) {
  var d = a.getElementsByTagName(b)[0];
  a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
})(document, "script", "gamemonetize-sdk");

(function (a, b, c) {
  var d = a.getElementsByTagName(b)[0];
  a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk_preload.js?v=" + Date.now(), d.parentNode.insertBefore(a, d))
})(document, "script", "gamemonetize-preload-api");

gdsdk= function() {
  // ***** UTILS *****
  function loadJS(FILE_URL, callback) {
    let scriptEle = document.createElement("script");
  
    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", true);
  
    document.body.appendChild(scriptEle);
    
    // Success
    scriptEle.addEventListener("load", () => {
      console.log("--fx--gdsdk--loadJS Done--");
      callback(true);
    });
    
     // Error
    scriptEle.addEventListener("error", () => {
      console.log("--fx--gdsdk--loadJS Error--");
      callback(false);
    });
  }

  // ***** INIT *****
  this.getSession= function() {
    return new Promise((resolve, reject)=> {
      resolve(true);
    });
  };
  
  // ***** ADS *****
  this.AdType= {
    "Rewarded": "rewarded",
    "Interstitial": "interstitial",
    "Preroll": "interstitial",
    "Midroll": "interstitial",
    "Display": "display"
  };

   this.Interstitial= function() {
    console.log("--gdsdk--Interstitial--", arguments);
  };

  this.preloadAd= function() {
    console.log("--gdsdk--preloadAd--");
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
      sdk.showBanner();
    }
    window.GD_OPTIONS.onEvent({
      "name": "SDK_READY",
      "message": "Everything is ready.",
      "status": "success"
    });
    return new Promise((resolve, reject)=> {
      resolve(true);
    });
  }
  
  this.cancelAd= function() {
    return new Promise((resolve, reject)=> {
      resolve(true);
    });
  };
  
  this.showAd= function (adType) {
    console.log("--gdsdk--showAd--", adType, arguments);
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
      sdk.showBanner();
    }

    if (adType== "rewarded") {
    
      return new Promise((resolve, reject)=> {
        loadJS("./patch/js/rewarded.js", (success)=> {
        if (success) {
          if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
          }
            console.log("--fx--showAd--Done--");
            window.GD_OPTIONS.onEvent({
              name: "SDK_REWARDED_WATCH_COMPLETE",
              message: "Rewarded",
              status: "success",
            });
            window.GD_OPTIONS.onEvent({
              name: "SDK_GAME_START",
              message: "No Message",
            });
            resolve(true);
          } else {
            console.log("--fx--showAd--Rejected--");
            window.GD_OPTIONS.onEvent({
              name: "SDK_GAME_START",
              message: "Reward Skip!",
              status: "success",
            });
            reject(false);
          }
        });
      });
    } else {
      return new Promise((resolve, reject)=> {
        loadJS("./patch/js/commercial.js", (success)=> {
          window.GD_OPTIONS.onEvent({
            name: "SDK_GAME_START",
            message: "No Message",
          });
          resolve(true);
        });
      });
    }
  };

  this.showBanner= function() {
    console.log("--gdsdk--showBanner--", arguments);
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
      sdk.showBanner();
    }
    return new Promise((resolve, reject)=> {
      loadJS("./patch/js/commercial.js", (success)=> {
        window.GD_OPTIONS.onEvent({
          name: "SDK_GAME_START",
          message: "Reward Skip!",
        });
        if (success) {
            console.log("--fx--showBanner--Done--");            
            resolve(true);
          } else {
            console.log("--fx--showBanner--Rejected--");            
            reject(false);
          }
      });
    });
  };

  // ***** EVENTS & LOGS *****
  this.sendEvent= function() {
    console.log("--gdsdk--sendEvent--", arguments);
  }
  
  this.openConsole= function() {
    console.log("--gdsdk--openConsole--", arguments);
  };

  this.leaderboard= {
    "addScore": function() {

    },
    "show": function() {
    }
  };

  try {
    window.GD_OPTIONS.onEvent({
      "name": "SDK_READY",
      "message": "Everything is ready.",
      "status": "success"
    });  
  } catch (e) {}  
};

gdsdk= new gdsdk();

xlocation= new Proxy(location, {
  get: function(target, property, receiver) {
    console.log("--fx--xlocation--get--property--", property);
    let targetObj = target[property];
    if (typeof targetObj == "function") {
      return (...args) => target[property].apply(target, args);
    } else {
      if (property== "host" || property=="hostname") {
        return "localhost";
      }
      if (property== "href") {
        return "https://localhost/";
      }
      if (property== "origin") {
        return "https://localhost/";
      }
      return targetObj;
    }
  },
  set: function(target, property, receiver) {
    console.log("--fx--xlocation--set--property--", property, receiver);
    return true;
  }
});

xwindow = new Proxy(window, {
  get: function(target, property, receiver) {
    // console.log("--fx--xWindow--property--", property, receiver);    
    if (typeof target[property] == "function") {
      return (...args) => target[property].apply(target,args);
    } else {
      if (property== "location") {
        return target["xlocation"];        
      }
      // console.log("--fx--xwindow--targetObj--", targetObj);
      return target[property];
    }
  }
});

// op3n= function() {
//   console.trace("--fx--op3n--", arguments);
//   window.open("https://ads.games235.com/");
//   // alert("--fx--xopen--");
// }