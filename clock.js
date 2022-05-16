//referance the hands on the clock
//taking seconds hand
const secondHand = document.getElementById('second');
//taking minute hand
const minuteHand = document.getElementById('minute');
// taking hour hand
const hourHand = document.getElementById('hour');

//setting then current time



//runs the clock
const runClock = () => {
    console.log();
let currentTime = new Date();
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
secondHand.style.transform = "rotate(" + ((seconds/ 60) * 360) + "deg)";

minuteHand.style.transform = "rotate(" + ((minutes/ 60) * 360) + "deg)";

hourHand.style.transform = "rotate(" + ((hours / 12) * 360) + "deg)";


}
setInterval(runClock, 1000)