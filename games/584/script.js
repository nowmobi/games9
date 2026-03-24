async function loadGame(onFinish, onProgress, onError) {
    try {
        window.unityInstance = await createUnityInstance(canvas, config, (progress) => { onProgress(100 * progress); });
        onFinish();
        window.addEventListener("focus", () => FocusHandler(true));
        window.addEventListener("blur", () => FocusHandler(false));
        document.addEventListener("visibilitychange", () => FocusHandler(!document.hidden));
        window.focus();
    }
    catch(err){        
        console.error(err);
        onError();
    }
}

function FocusHandler(focus) {
    let focusInt = focus ? 1 : 0;
    window.unityInstance.SendMessage('JsBridge', 'SetFocusGame', focusInt);
}

function DeviceOrientationListener(targetOrientation) {
    CheckOrientation(targetOrientation);
    window.addEventListener("orientationchange", () => {
        CheckOrientation(targetOrientation);
    }, false);
}

function CheckOrientation(targetOrientation) {
    let isLandscape = window.orientation == 90 || window.orientation == -90;
    let currentOrientation = isLandscape ? "Landscape" : "Portrait";
    let visible = targetOrientation == currentOrientation ? "none" : "block";
    let image = targetOrientation == "Portrait" ? "TemplateData/VerticalOnly.png" : "TemplateData/HorisontalOnly.png";
    orientationImage.src = image;
    orientationBlocker.style.display = visible;
    window.unityInstance.SendMessage('JsBridge', 'OrientationChangeHandler', currentOrientation);
}
