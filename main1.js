var i = 0;
var txt = 'Hello Earthlings! Welcome to Health Hero!'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

//This function is attributed to W3 Schools!//

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}