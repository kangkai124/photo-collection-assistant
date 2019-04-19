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
    } else if (origin.includes('cnu')) {
        urls = cnu()
        let workTitle = document.querySelector('.work-title').innerText || 'Untitled'
        let author = document.querySelector('strong').innerText
        name = workTitle + '-' + author + '-cnu'
        // 'cnu-image'
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
    var container = document.querySelector('.scene-container-next')
    var urls = Array.from(container.getElementsByClassName('scene-item')).map(t => {
        return t.querySelector('img').src
    })
    var total = parseInt(document.querySelector('.theater-indicator').textContent.split('/')[1])
    return urls.slice(0, total)
}

function cnu() {
    var urls = Array.from(document.getElementsByClassName('bodyImg')).map((t) => {
        return t.src
    })
    return urls
}