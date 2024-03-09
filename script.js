"use strict";

// Prevents the website content loading before the background image
document.addEventListener("DOMContentLoaded", function () {
  var backgroundImage = new Image();
  backgroundImage.src = "/media/main-background.webp";

  backgroundImage.onload = function () {
    // Background image has loaded
    document.querySelector("body").classList.remove("hidden");
  };
});
