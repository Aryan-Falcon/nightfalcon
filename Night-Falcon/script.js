// script.js
function ShowHide(x) {
  var menu = document.getElementById("Menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function typewriter() {
  var i = 0;
  var txt = "Night Falcon";
  var speed = 250; // Adjust this for typing speed
  var element = document.getElementById("typed"); // Target the span element

  function type() {
    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Do nothing after the first cycle
    }
  }

  type(); // Start the animation
}

// Call the typewriter function when the page loads
window.onload = function() {
  typewriter();
};