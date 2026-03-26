(function(){
    console.log('Responsive WebGL Template by SIMMER.io v2019.02.08');
    console.log('Available at: https://assetstore.unity.com/packages/tools/gui/responsive-webgl-template-117308 for free!');
    console.log('Host your WebGL Game at SIMMER.io for free!');

    const q = (selector) => document.querySelector(selector);

    const gameContainer = q('#gameContainer');

    const fixedWidth = 720; // Set fixed width
    const fixedHeight = 1280; // Set fixed height

    let gCanvasElement = null;

    const getCanvasFromMutationsList = (mutationsList) => {
        for (let mutationItem of mutationsList){
            for (let addedNode of mutationItem.addedNodes){
                if (addedNode.id === ''){
                    return addedNode;
                }
            }
        }
        return null;
    }

    const setDimensions = () => {
        const winW = window.innerWidth;
        const winH = window.innerHeight;

        let scale = 1;
        if (winW / winH < fixedWidth / fixedHeight) {
            scale = winW / fixedWidth;
        } else {
            scale = winH / fixedHeight;
        }

        gameContainer.style.width = fixedWidth * scale + 'px';
        gameContainer.style.height = fixedHeight * scale + 'px';

        // Centering the container
        gameContainer.style.left = (winW - parseInt(gameContainer.style.width)) / 2 + 'px';
        gameContainer.style.top = (winH - parseInt(gameContainer.style.height)) / 2 + 'px';
    }

    window.setDimensions = setDimensions;

    const registerCanvasWatcher = () => {
        let debounceTimeout = null;
        const debouncedSetDimensions = () => {
            if (debounceTimeout !== null) {
                clearTimeout(debounceTimeout);
            }
            debounceTimeout = setTimeout(setDimensions, 200);
        }
        window.addEventListener('resize', debouncedSetDimensions, false);
        setDimensions();
    }

    window.UnityLoader.Error.handler = function () { }

    const i = 0;
    new MutationObserver(function (mutationsList) {
        const canvas = getCanvasFromMutationsList(mutationsList)
        if (canvas){
            gCanvasElement = canvas;
            registerCanvasWatcher();

            new MutationObserver(function (attributesMutation) {
                this.disconnect();
                setTimeout(setDimensions, 1)
                q('.simmer').classList.add('hide');
            }).observe(canvas, {attributes:true});

            this.disconnect();
        }
    }).observe(gameContainer, {childList:true});

})();
