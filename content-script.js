chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        run()
    });



function run() {
    var urls = []
    var origin = window.location.origin
    var name = ''
    if (origin.includes('tuchong')) {
        urls = tuchong()
        name = (document.querySelector('.aside-post-title') && document.querySelector('.aside-post-title').textContent) ||
            document.querySelector('.aside-post-head').querySelector('.site-link').innerText ||
            "tuchong-image"
    } else if (origin.includes('mepai')) {
        urls = mepai()
        name = "mepai-image"
    }
    chrome.runtime.sendMessage({
        photoUrls: urls,
        name
    })
}

function mepai() {
    var urls = Array.from(document.getElementsByClassName('thumb-photo')).map((t) => {
        var url = t.style.backgroundImage.slice(5).split('!')[0]
        return url
    })
    return urls
}

function tuchong() {
    var urls = Array.from(document.getElementsByClassName('scene-item')).map(t => {
        return t.querySelector('img').src
    })
    return urls
}