function clock() {
let degrees = 6;
const secondsArray = document.getElementById("second")
const minutesArray = document.getElementById("minute")
const hoursArray = document.getElementById("hour")
//const el = document.getElementById("rotate

setInterval(() => {
const now = new Date();
const secondDegree = secondRotation(now.getSeconds());
const minuteDegree = minuteRotation(now.getMinutes());
const hourDegree = hourRotation(now.getHours(), now.getMinutes());

hoursArray.style.transform = `rotate(${hourDegree}deg)`;
minutesArray.style.transform = `rotate(${minuteDegree}deg)`;
secondsArray.style.transform = `rotate(${secondDegree}deg)`;
}, 1000)
}

clock();
function secondRotation(second) {
    return second *6;
}
function minuteRotation(minute) {
    return minute * 6;
}
function hourRotation(hour, minute) {
    return (hour % 12 + minute/60) * 30;
}