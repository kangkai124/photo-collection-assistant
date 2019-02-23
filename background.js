chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        request.photoUrls.forEach((url, i) => {
            chrome.downloads.download({
                url,
                filename: `${request.name}-${i + 1}.jpg`
            })
        })
    });