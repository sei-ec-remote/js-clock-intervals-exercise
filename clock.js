
// Grab ID's for manipulation
let secondHand = document.getElementById('second');
let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('minute');


const runClock = () => {
    const currentTime = new Date();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let hours = currentTime.getHours();
    secondHand.style.transform = "rotate(" + ((seconds / 60) * 360) + "deg)";
    hourHand.style.transform = "rotate(" + ((hours / 12) * 360) + "deg)";
    minuteHand.style.transform = "rotate(" + ((minutes / 60) * 360) + "deg)";
};

setInterval(runClock, 1000);
