// ==UserScript==
// @name          Get DLC Info from SteamDB
// @namespace     sak32009-get-dlc-info-from-steamdb
// @description   Get DLC Info from SteamDB
// @author        Sak32009
// @contributor   cs.rin.ru
// @version       3.7.8
// @license       MIT
// @homepageURL   https://github.com/Sak32009/GetDLCInfoFromSteamDB/
// @supportURL    http://cs.rin.ru/forum/viewtopic.php?f=10&t=71837
// @updateURL     https://github.com/Sak32009/GetDLCInfoFromSteamDB/raw/master/sak32009-get-dlc-info-from-steamdb.meta.js
// @downloadURL   https://github.com/Sak32009/GetDLCInfoFromSteamDB/raw/master/sak32009-get-dlc-info-from-steamdb.user.js
// @icon          https://raw.githubusercontent.com/Sak32009/GetDLCInfoFromSteamDB/master/sak32009-get-dlc-info-from-steamdb-icon.png
// @match         *://steamdb.info/app/*
// @run-at        document-end

// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.2/jquery.modal.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/tabby/12.0.1/js/tabby.min.js
// @require       https://raw.githubusercontent.com/Sak32009/GetDLCInfoFromSteamDB/master/sak32009-get-dlc-info-from-steamdb.compatibility.js

// @resource      tabby     https://cdnjs.cloudflare.com/ajax/libs/tabby/12.0.1/css/tabby-ui.css
// @resource      jModal    https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.2/jquery.modal.min.css
// @resource      mainStyle https://raw.githubusercontent.com/Sak32009/GetDLCInfoFromSteamDB/master/sak32009-get-dlc-info-from-steamdb.css
// @resource      icon      https://raw.githubusercontent.com/Sak32009/GetDLCInfoFromSteamDB/master/sak32009-get-dlc-info-from-steamdb-icon.png

// TamperMonkey & ViolentMonkey
// @grant         GM_xmlhttpRequest
// @grant         GM_getResourceURL
// @grant         GM_getResourceText
// @grant         GM_addStyle

// GreaseMonkey
// @grant         GM.xmlHttpRequest
// @grant         GM.getResourceUrl

// Violentmonkey
// @inject-into   content
// ==/UserScript==
