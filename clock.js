//initialize
let secDegrees = 0;
let minDegrees = 0;
let hourDegrees = 0;

///grab hour, minute second element
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const rotationEl = document.querySelectorAll(".rotate");

//reset degrees - not working and no need to reset?
// if ((secDegrees = 60)) secDegrees = 0;
// if ((minDegrees = 60)) minDegrees = 0;
// if ((hourDegrees = 12)) hourDegrees = 0;

//create time intervals
const secondInterval = setInterval(() => {
  rotationEl[2].style.transform = `rotate(${secondRotation(secDegrees)}deg)`;
  secDegrees++;
}, 1000);
const minuteInterval = setInterval(() => {
  minDegrees++;
  rotationEl[1].style.transform = `rotate(${minuteRotation(minDegrees)}deg)`;
}, 60000);
const hourInterval = setInterval(() => {
  hourDegrees++;
  rotationEl[0].style.transform = `rotate(${hourRotation(hourDegrees)}deg)`;
}, 60000 * 60);

//functions convert seconds, minutes, hours
//to show how many degrees the hand should be roated
const secondRotation = (ele) => {
  return (ele / 60) * 360;
};

const minuteRotation = (ele) => {
  return (ele / 60) * 360;
};

const hourRotation = (ele) => {
  return (ele / 12) * 360;
};
