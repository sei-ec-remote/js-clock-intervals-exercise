const secondEl =  document.getElementById("second");
const hourEl =  document.getElementById("hour");
const minuteEl =  document.getElementById("minute");

let degrees = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
// let counter = 0;
 

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

secondRotation();
minutesRotation();


// const hourRotation = () => {
    
// }

// const secInterval = setInterval(() => {
//     secondRotation();
// }, 1000);

// setInterval(() => {
// }, 60000);

// let interval = setInterval(secondRotation(), 1000);
// interval++;

