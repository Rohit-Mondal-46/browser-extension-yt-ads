(() => {
    function muteYoutubeAds() {
        const video = document.querySelector('video');
        const cnt = document.querySelector('#movie_player');
        const muteButton = document.querySelector('.ytp-mute-button');
        const isAdPlaying = cnt.classList.contains('ad-showing');
        // let skipAdBtn = document.querySelector(".ytp-skip-ad-button");
        if (!video) return;
        // Mute logic
        if (isAdPlaying && !video.muted) {
            //automaticvally clicks mute button 
            muteButton.click();
        } else if(!isAdPlaying && video.muted) {
            //automaticvally clicks mute button 
            muteButton.click();
        }
    }
    setInterval(muteYoutubeAds,500);
})();



