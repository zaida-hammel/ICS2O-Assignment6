// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment6-JS/sw.js", {
    scope: "/ICS2O-Assignment6-JS/",
  });
}

function myButtonClicked() {
  // this function displays "Hello, World!"
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>";
}
