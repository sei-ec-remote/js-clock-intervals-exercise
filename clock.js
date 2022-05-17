let degreesHours = 0;
let degreesMinutes = 0;
let degreesSeconds = 0;
let count = 0;

const hourEl = document.getElementById("hour");
hourEl.style.transform = "rotate(" + degreesHours + "deg)";

const minuteEl = document.getElementById("minute");
minuteEl.style.transform = "rotate(" + degreesMinutes + "deg)";

const secondEl = document.getElementById("second");
secondEl.style.transform = "rotate(" + degreesSeconds + "deg)";

const hourRotation = (hours) => {
    if(hours > 12){
        hours -= 12;
        Math.abs(hours); 
    }
    return (hours/12) * 360;
};
const minuteRotation = (minutes) => {
    return (minutes/60) * 360;
};
const secondRotation = (seconds) => {
    return (seconds/60) * 360;
};

const date = new Date();

const allTime = () => {
    degreesHours = date.getHours();
    degreesMinutes = date.getMinutes();
    degreesSeconds = date.getSeconds();
    hourRotation(degreesHours);
    minuteRotation(degreesMinutes);
    secondRotation(degreesSeconds);
}

setInterval(() => {
    allTime();
    count++;
    console.log(count);
}, 1000);