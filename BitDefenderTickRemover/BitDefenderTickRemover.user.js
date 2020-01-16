// ==UserScript==
// @name         BitDefenderTickRemover
// @namespace    https://github.com/johnnyawesome
// @version      1.0
// @description  Removes the green ticks BitDefender puts next to search results
// @author       JohnnyAwesome
// @match        https://www.google.com/search*
// @grant        none
// @icon         https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull32.ico
// @icon64	 https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull64.ico
// @updateURL    https://raw.githubusercontent.com/johnnyawesome/BitDefenderTickRemover/master/BitDefenderTickRemover/BitDefenderTickRemover.js
// @downloadURL  https://raw.githubusercontent.com/johnnyawesome/BitDefenderTickRemover/master/BitDefenderTickRemover/BitDefenderTickRemover.js
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => document.querySelectorAll("img[class^='bd_nd_'][class$='_icon_green']").forEach((tick) => tick.remove()), 1500);
})();