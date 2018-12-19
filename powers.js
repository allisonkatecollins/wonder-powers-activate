//The learning objective of this exercise is writing event listeners to handle button clicks, 
//and modifying the classList of DOM elements when those events are broadcast by the browser.

//Add the correct string as the first argument to addEventListener()
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

//Write a function named flightHandlerFunction that will:
//remove the disabled class on the corresponding <section id="flight"> (section, not button) 
//and replace it with a class of enabled.
//I replaced the HTML class with "powerDisabled" as the original value had a space and was throwing an error
function flightHandlerFunction() {
document.getElementById("flight").classList.replace("powerDisabled", "powerEnabled");
}

//write 2 more JS functions
function psychicHandlerFunction() {
  document.getElementById("mindreading").classList.replace("powerDisabled", "powerEnabled");
  }

function xrayHandlerFunction() {
  document.getElementById("xray").classList.replace("powerDisabled", "powerEnabled");
  }

//write 2 more querySelector().addEventListener() statements for handling the click event on the other 2 buttons
//those event handlers should also replace disabled with enabled on the corresponding <section> elements
document.querySelector("#activate-mindreading").addEventListener("click", psychicHandlerFunction);
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

//add 2 more buttons: Enable All Powers, Disable All Powers
//--> just changed the existing button text in index.html

//Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. 
//You will need to use the document.querySelectorAll() method for these.
document.querySelector("#activate-all").addEventListener("click", enableAllPowers);
document.querySelector("#deactivate-all").addEventListener("click", disableAllPowers);

function enableAllPowers() {
  var enable = document.querySelectorAll(".powerDisabled")
    for (var i = 0; i < enable.length; i++) {
      enable[i].classList.replace("powerDisabled", "powerEnabled")
    }
}

function disableAllPowers() {
  var disable = document.querySelectorAll(".powerEnabled")
    for (var i = 0; i < disable.length; i++) {
      disable[i].classList.replace("powerEnabled", "powerDisabled")
    }
}

