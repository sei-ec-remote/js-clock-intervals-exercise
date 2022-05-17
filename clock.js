let degreesHours = 0;
let degreesMinutes = 0;
let degreesSeconds = 0;
let count = 0;

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const hourRotation = (hours) => {
    if(hours > 12){
        hours = hours - 12;
    }
    return (hours/12) * 360;
};
const minuteRotation = (minutes) => {
    return (minutes/60) * 360;
};
const secondRotation = (seconds) => {
    return (seconds/60) * 360;
};

const allTime = () => {
    let date = new Date();
    degreesHours = hourRotation(date.getHours());
    degreesMinutes = minuteRotation(date.getMinutes());
    degreesSeconds = secondRotation(date.getSeconds());
}

setInterval(() => {
    allTime();
    hourEl.style.transform = "rotate(" + degreesHours + "deg)";
    minuteEl.style.transform = "rotate(" + degreesMinutes + "deg)";
    secondEl.style.transform = "rotate(" + degreesSeconds + "deg)";
    count++;
}, 1000);