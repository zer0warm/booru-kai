// ==UserScript==
// @name         BlurDanbooruImages
// @namespace    booru
// @version      0.1
// @description  Blur images in search result if it's appeared on local drive
// @author       zer0warm
// @match        https://danbooru.donmai.us/posts*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let configs = {
        "downloaded-brightness": "0.3",
        "downloaded-md5s": ""
    }

    function makeBlur(downloaded) {
        let posts = Array.from(document.querySelectorAll('#posts-container article'));
        posts.forEach((post) => {
            if (downloaded.find(img_md5 => post.dataset.md5 === img_md5)) {
                post.style.opacity = configs['downloaded-brightness'];
            }
        });
    }

    makeBlur(configs['downloaded-md5s'].split(' '));
})();
