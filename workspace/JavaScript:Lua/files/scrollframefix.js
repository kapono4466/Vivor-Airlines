// ==UserScript==
// @name         ScrollFix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fix the scrollbars
// @author       You
// @match        https://teach.ucode.com/*
// @grant        none
// ==/UserScript==

window.onload = (function() {
  'use strict';
//double checking the domain, not necessary
  if(document.domain == "teach.ucode.com")
  {
//these two sections always have the same ID's so find by ID
      var sl = document.getElementById("step_list");
      var c = document.getElementById("content");
// make sure they exist before attempting to edit them
      if(sl && c)
      {
//javascript in modern browsers(chrome) allows us to use window.innerHeight to get the correct height of the current window
// the - 80 is for the little header in each section
// appending a "px" at the end to set the css style to pixels, otherwise it doesn't know what to do with the number
          sl.style.height = window.innerHeight - 80 + "px";
          c.style.height = window.innerHeight - 80 + "px";
      }
  }
});

