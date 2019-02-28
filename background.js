chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        request.photoUrls.forEach((url, i) => {
            chrome.downloads.download({
                url,
                filename: `${request.name}-${i + 1}.jpg`
            })
        })
    });

chrome.commands.onCommand.addListener(function (command) {
    if (command === 'autoDownload') {
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                message: 'hello content'
            })
        })
    }
});