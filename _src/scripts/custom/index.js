function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    (function (abbrTouch) {
        'use strict';

        var tooltipTimeout;

        abbrTouch(document.querySelector('article'), function (target, title, touchX, touchY) {
            var tooltip = getTooltipElement();
            // Ensure the tooltip is ready so that the initial transition works
            setTimeout(function () {
                updateTooltip(tooltip, target.innerHTML, title);
            }, 0);
        });
        performance.mark("abbrTouchExecuted");

        function getTooltipElement() {
            var tooltip = document.querySelector('#abbr-tooltip');
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.id = 'abbr-tooltip';
                // Technically this is duplicate content, just exposing it on mobile
                tooltip.setAttribute('aria-hidden', 'true');
                document.body.appendChild(tooltip);
            }
            return tooltip;
        }

        function updateTooltip(tooltip, term, expandedTerm) {
            var text = term + ': ' + expandedTerm;
            tooltip.innerHTML = text;
            tooltip.classList.add('visible');

            if (tooltipTimeout) {
                clearTimeout(tooltipTimeout);
            }

            var timeoutLength = text.length * 120;
            tooltipTimeout = setTimeout(function () {
                tooltip.classList.remove('visible');
            }, timeoutLength);
        }
    })(abbrTouch);

    /***********************************************
     ***********************************************/

    (function videoPlayPause() {
        var videos = document.querySelectorAll('.videoWrapper.gif');

        videos.forEach(function (item) {
            var insideVid = item.querySelector('video');
            // In order to prevent a disgracious "flash" when load()

            item.style.height = insideVid.clientHeight + 'px';
            item.style.width = insideVid.clientWidth + 'px';
            insideVid.style.height = insideVid.clientHeight + 'px';

            item.addEventListener('mouseover', playVideo, false);
            item.addEventListener('click', toggleVideo, false);
            item.addEventListener('mouseout', pauseVideo, false);
        });
        performance.mark("videoPlayPause");

        function playVideo(e, v) {
            var video = v || this.querySelector('video');
            if (!video.classList.contains('loading-started')) {
                video.classList.add('loading-started');
                video.addEventListener("canplay", function () {
                    console.log('Play video.');
                    this.play();
                });
            }
            video.load();
        }

        function pauseVideo(e, v) {
            var video = v || this.querySelector('video');
            video.pause();
        }

        function toggleVideo(e, v) {
            var video = v || this.querySelector('video');
            if (video.paused) {
                playVideo(e, video);
            } else {
                pauseVideo(e, video);
            }
        }
    })()

    /***********************************************
     ***********************************************/

    var rc = document.querySelector('.g-recaptcha');
    if (window.grecaptcha) {
        window.grecaptcha.render(rc);
    } else {
        window.captchaCallback = function () {
            window.grecaptcha.render(rc);
        }
    }
    performance.mark("recaptchaInit");
});