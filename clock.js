// Interval for seconds
let secondsHand = 0;
let minutesHand = 0;
let hoursHand = 0;
const secondEl = document.getElementById("second");
const minuteEl = document.getElementById("minute");
const hoursEl = document.getElementById("hour");

// Functions for hands
const secondsFunction = setInterval(() => {
  secondsHand = secondsHand + 1;
  secondDegrees = (secondsHand / 60) * 360;
  secondEl.style.transform = "rotate(" + secondDegrees + "deg)";
  console.log(secondsHand);
}, 1000);

const minutesFunction = setInterval(() => {
  minutesHand = minutesHand + 1;
  minutesDegrees = (minutesHand / 3600) * 360;
  minuteEl.style.transform = "rotate(" + minutesDegrees + "deg)";
  console.log(minutesHand);
}, 1000);

const hoursFunction = setInterval(() => {
  hoursHand = hoursHand + 1;
  hoursDegrees = (hoursHand / 216000) * 360;
  hoursEl.style.transform = "rotate(" + hoursDegrees + "deg)";
  console.log(minutesHand);
}, 1000);
