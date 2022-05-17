// set up varaibales
// select element with id second
const second = document.getElementById("second");
// select element with id minute
const minute = document.getElementById("minute");
// select element with id hour
const hour = document.getElementById("hour");
// select button
const stopBtn = document.getElementById("btn1");
// select h1
const h1 = document.getElementById("currentTime");

// declare small functions to apply css style on elements
// calculates degrees & apply style for seconds
function secondRotation() {
  let seconds = new Date().getSeconds();
  console.log(seconds);
  let degrees = (seconds / 60) * 360;
  second.style.transform = "rotate(" + degrees + "deg)";
}
// calculates degrees & apply style for minutes
function minuteRotation() {
  let minutes = new Date().getMinutes();
  console.log(minutes);
  let degrees = (minutes / 60) * 360;
  minute.style.transform = "rotate(" + degrees + "deg)";
}
// calculates degrees & apply style for hours
function housrRotation() {
  let hours = new Date().getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  let degrees = (hours / 12) * 360;
  hour.style.transform = "rotate(" + degrees + "deg)";
}

// setInterval(callback, timeinterval);
const secondTick = setInterval(secondRotation, 1000);
const minuteTick = setInterval(minuteRotation, 1000);
const hourTick = setInterval(housrRotation, 1000);

// click button to stop ticking
stopBtn.addEventListener("click", () => {
  clearInterval(secondTick);
  clearInterval(minuteTick);
  clearInterval(hourTick);
});
