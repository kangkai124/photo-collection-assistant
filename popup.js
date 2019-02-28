var downloader = document.getElementById("downloader")

downloader.addEventListener('click', () => {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            message: 'hello content'
        })
    })
})