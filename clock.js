const secondEl =  document.getElementById("second");
const hourEl =  document.getElementById("hour");
const minuteEl =  document.getElementById("minute");

let degrees = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const secondRotation = () => {
    const secondsHand = setInterval(() => {
        degrees = (seconds / 60) * 360;
        secondEl.style.transform = "rotate(" + degrees + "deg)"
        seconds++;
    }, 1000);
}


const minutesRotation = () => {
    const minutesHand = setInterval(() => {
        degrees = (minutes / 60) * 360;
        minuteEl.style.transform = "rotate(" + degrees + "deg)"
        minutes++;
    }, 60000);
}

const hourRotation = () => {
    const hoursHand = setInterval(() => {
        degrees = (hours / 12) * 360;
        hourEl.style.transform = "rotate(" + degrees + "deg)"
        hours++;
    }, 3600000);
}

secondRotation();
minutesRotation();
hourRotation();

