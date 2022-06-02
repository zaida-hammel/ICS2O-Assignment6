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

/**
 * Get API info.
 */
const getPicture = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress);
    const jsonData = await result.json();
    console.log(jsonData[0]);
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData[0] + '" alt="API image" class="center" ' + ">";
  } catch (err) {
    console.log(err);
  }
};

getPicture("https://shibe.online/api/shibes?count=[1-100]");
