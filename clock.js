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





hoursArray.style.transform = `rotateZ(${hours + (minutes /12)}degrees)`
minutesArray.style.transform = `rotateZ(${minutes}degrees)`
minutesArray.style.transform = `rotateZ(${seconds}degrees)`

}, 0)


}
clock();