function clock() {
let degrees = 6;
const secondsArray = document.getElementById("second")
const minutesArray = document.getElementById("minute")
const hoursArray = document.getElementById("hour")
//const el = document.getElementById("rotate")


setInterval(() => {
const now = new Date();
const secondDegree = secondRotation(now.getSeconds());
const minuteDegree = minuteRotation(now.getMinutes());
const hourDegreem = hourRotation(now.getHours(),now.getMinutes());





hoursArray.style.transform = `rotate(${hourDegree}deg)`;
minutesArray.style.transform = `rotate(${minuteDegree}deg)`;
minutesArray.style.transform = `rotate(${secondDegree}deg)`;
}, 1000)
}
clock();