// ==UserScript==
// @name         Netflix Remove Titles Below Rating
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Mike Boss
// @match        https://*.netflix.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let mutationObserver = new MutationObserver(mutation => {
        let sliderContent = document.getElementsByClassName('sliderContent');


        Array.from(sliderContent).forEach(slider => {
            let firstNumberedReached = false;

            Array.from(slider.children).forEach(sliderItem => {
                if (!firstNumberedReached && !sliderItem.classList.contains('slider-item-')) {
                    firstNumberedReached = true;
                }

                if (!firstNumberedReached || (sliderItem.style.opacity == 1 && !sliderItem.classList.contains('slider-item-'))) {
                    sliderItem.style.width = '16.6%';
                } else {
                    sliderItem.style.width = '0%';
                }
            })
        });
    });

    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
})();