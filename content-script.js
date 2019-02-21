chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        run()
    });



function run() {
    var urls = Array.from(document.getElementsByClassName('thumb-photo')).map((t) => {
        var url = t.style.backgroundImage.slice(5).split('!')[0]
        return url
    })
    chrome.runtime.sendMessage({
        photoUrls: urls
    })
}