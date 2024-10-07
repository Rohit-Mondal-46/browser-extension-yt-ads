chrome.webNavigation.onCompleted.addListener(() => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['contentScript.js']
    });
}, {url: [{urlMatches: 'https://www.youtube.com/*'}]});