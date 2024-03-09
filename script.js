"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var backgroundImage = new Image();
  backgroundImage.src = "/media/main-background.webp";

  backgroundImage.onload = function () {
    // Background image has loaded
    document.querySelector("body").classList.remove("hidden");
  };
});
