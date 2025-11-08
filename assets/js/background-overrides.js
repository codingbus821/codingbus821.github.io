// Muted background overrides (loaded after background.js)
(function(){
    try {
        particleCount = 30;
        flareCount = 0;
        motion = .02;
        tilt = .02;
        color = "#999999";
        colorPalette = ["#e6e6e6", "#cfcfcf", "#b8b8b8", "#9f9f9f", "#808080"];
        renderParticleGlare = false;
        renderFlares = false;
        renderLinks = false;
        flicker = false;
        linkChance = 0;
    } catch (e) {
        console.warn('Background overrides failed', e);
    }
})();
