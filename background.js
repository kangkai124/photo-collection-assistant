chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        request.photoUrls.forEach((url, i) => {
            chrome.downloads.download({
                url,
                filename: 'hah' + i
            })
        })
    });