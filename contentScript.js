(() => {
    // Function to simulate a mouse click
    function simulateEnterKey(element) {
        if (element) {
            const keyboardEvent = new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
            });
            element.dispatchEvent(keyboardEvent);
            console.log('Dispatch event being called');
        }
    }

    function muteYoutubeAdsAndSkip() {
        const video = document.querySelector('video');
        const cnt = document.querySelector('#movie_player');
        const muteButton = document.querySelector('.ytp-mute-button');
        const isAdPlaying = cnt.classList.contains('ad-showing');
        let skipAdBtn = document.querySelector(".ytp-skip-ad-button");
        let previewAdBtn = document.querySelector(".ytp-preview-ad");
        if (!video) return;
        // Mute logic
        if (isAdPlaying && !video.muted) {
            //automaticvally clicks mute button 
            muteButton.click();
        } else if (!isAdPlaying && video.muted) {
            //automaticvally clicks mute button 
            muteButton.click();
        }

        //skipping logic
        if (isAdPlaying) {
            //skip button appears immediately
            skipAdBtn.style = '';
            previewAdBtn.style.display = 'none'
            // simulateEnterKey(skipAdBtn); //not working
            skipAdBtn.focus();
            console.log('Ad skipped logic');
        }
    }
    setInterval(muteYoutubeAdsAndSkip, 100);
    
})();



