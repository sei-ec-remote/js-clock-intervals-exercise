function clock() {
let degrees = 6;
const secondsArray = document.getElementById("second")
const minutesArray = document.getElementById("minute")
const hoursArray = document.getElementById("hour")
//const el = document.getElementById("rotate")


setInterval(() => {
const day = new Date();
const hours = day.getMinutes() * 30;
const minutes = day.getMinutes() * degrees;
const seconds = day.getSeconds() * degrees;

"
hoursArray.style.transform = `rotateZ(${hours + (minutes /12)}degrees)`
minutesArray.style.transform = `rotateZ(${minutes}degrees)`
minutesArray.style.transform = `rotateZ(${seconds}degrees)`

}, 0)


}
clock();