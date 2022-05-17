//initialize
let secDegrees = 0;
let minDegrees = 0;
let hourDegrees = 0;

///grab hour, minute second element
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const rotationEl = document.querySelectorAll(".rotate");

//grab actual time at the moment
const now = new Date();
let second = now.getSeconds();
let minute = now.getMinutes();
let hour = now.getHours() % 12;

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

//need to show up immediately
rotationEl[2].style.transform = `rotate(${secondRotation(second)}deg)`;
rotationEl[1].style.transform = `rotate(${minuteRotation(minute)}deg)`;
rotationEl[0].style.transform = `rotate(${hourRotation(hour)}deg)`;

//create time intervals
const secondInterval = setInterval(() => {
  rotationEl[2].style.transform = `rotate(${secondRotation(second)}deg)`;
  //if more than 60 then reset it to 1
  second >= 60 ? (second = 1) : second++;
  console.log(second);
}, 1000);

const minuteInterval = setInterval(() => {
  rotationEl[1].style.transform = `rotate(${minuteRotation(minute)}deg)`;
  minute >= 60 ? (minute = 1) : minute++; //if more than 60 then reset it to 1
}, 60000);
const hourInterval = setInterval(() => {
  rotationEl[0].style.transform = `rotate(${hourRotation(hour)}deg)`;
  hour >= 12 ? (hour = 1) : hour++; //if more than 12 then reset it to 1
}, 60000 * 60);
