//a function that moves hands 
// name dom elements for css

let sec = document.getElementById('second');
let min = document.getElementById('minute');
let hr = document.getElementById('hour');
// learn how to use the time methods 
// const time = Date.prototype.getTime()
// const minutes = Date.prototype.getMinutes()
// const seconds = Date.prototype.getSeconds()
// const hours = Date.prototype.getHours()

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// found this w3
let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()
let milsec = today.getMilliseconds()

console.log(seconds)
//I found this formula for the degree of each time via google
let hrAngle = hours * 30 + (minutes * 6 / 12);
let minAngle = minutes * 6 + (seconds * 6 / 60);
let secAngle = seconds * 6 + (milsec * 0.36 / 1000);

console.log(minAngle)
//this simple function moves the hand
function angleHand(timeType, angle) {
timeType.style.transform = "rotate("+ angle +"deg)";

}

angleHand(hr, hrAngle);
angleHand(min, minAngle);
angleHand(sec, secAngle);


// found the below function @ https://www.codegrepper.com/code-examples/javascript/refresh+page+every+second+javascript
let refreshSec = 1 // Repeat every 1 second.
setInterval(function() {
	window.location.reload(1)
},refreshSec/1000)