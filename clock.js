let degrees = 0;
let count = 0;

const hourEl = document.getElementById("hour");
hourEl.style.transform = "rotate(" + degrees + "deg)";

const minuteEl = document.getElementById("minute");
minuteEl.style.transform = "rotate(" + degrees + "deg)";

const secondEl = document.getElementById("second");
secondEl.style.transform = "rotate(" + degrees + "deg)";

const hourRotation = (hours) => {
    return (hours/12) * 360;
};
const minuteRotation = (minutes) => {
    return (minutes/60) * 360;
};
const secondRotation = (seconds) => {
    return (seconds/60) * 360;
};

const allTime = (amountRotation, getTime) => {
    return amountRotation(getTime);
}

allTime(hourRotation, Date.prototype.getHours());
allTime(minuteRotation, Date.prototype.getHours());
allTime(secondRotation, Date.prototype.getHours());


const date = new Date();

setInterval(() => {
    count++;
    console.log(date);
    console.log(count);
}, 1000);