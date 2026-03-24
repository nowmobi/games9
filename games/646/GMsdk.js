window.SDK_OPTIONS = {
  gameId: "ailpua7yjr5rm45tqhcfszouo2tjt9j6",
  onEvent: function (a) {
    switch (a.name) {
      case "SDK_GAME_PAUSE":
      Howler.mute(true);
        break;
      case "SDK_GAME_START":
      if (!this.muted) {
      Howler.mute(false);
    }
        break;
      case "SDK_READY":
        console.log("SDK is ready");
        break;
    }
  },
};
(function (a, b, c) {
  var d = a.getElementsByTagName(b)[0];
  a.getElementById(c) ||
    ((a = a.createElement(b)),
    (a.id = c),
    (a.src = "https://api.gamemonetize.com/sdk.js"),
    d.parentNode.insertBefore(a, d));
})(document, "script", "gamemonetize-sdk");

