// set up varaibales
// select element with id second
const second = document.getElementById("second");
// select element with id minute
const minute = document.getElementById("minute");
// select element with id hour
const hour = document.getElementById("hour");
// select button
const button = document.getElementById("btn");
// get current hours minutes and seconds
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

// declare small functions to apply css style on elements
// calculates degrees & apply style for seconds
function secondRotation() {
  let seconds = new Date().getSeconds();
  console.log(seconds);
  let degrees = (seconds / 60) * 360;
  second.style.transform = "rotate(" + degrees + "deg)";
}
// calculates degrees & apply style for minutes
function minuteRotation(min) {
  let degrees = (min / 60) * 360;
  minute.style.transform = "rotate(" + degrees + "deg)";
}
// calculates degrees & apply style for hours
function housrRotation(hr) {
  if (hr > 12) {
    hr = hr - 12;
  }
  let degrees = (hr / 12) * 360;
  hour.style.transform = "rotate(" + degrees + "deg)";
}

// setInterval(callback, timeinterval);
const secondTick = setInterval(secondRotation, 1000);
const hourdTick = setInterval(housrRotation(hours), 1000 * 60 * 60);

function stop() {
  clearInterval(secondTick);
}

button.addEventListener("click", stop);
