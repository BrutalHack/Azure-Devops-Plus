// ==UserScript==
// @name         Azure DevOps UX Fixes
// @namespace    http://brutalhack.com/
// @version      1.0
// @description  Fixes "table of contents" width in Wiki; Fixes the Auto-Complete Popups in Wiki to use the full website width; Hides E-Mails when assigning work items (for screensharing with external participants)
// @author       Benjamin Justice
// @match        https://dev.azure.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Hide Mail Addresses when assigning Work Items
    GM_addStyle('.subtitle.large {display: none;}');
  
    // Width Fix for Wiki Table of Contents
    GM_addStyle('.toc-container a {max-width: 1200px !important; }') ;
    
    // Width Fix for Wiki Page References
    GM_addStyle('.mention-autocomplete-menu {width: 1200px !important;}');
})();
