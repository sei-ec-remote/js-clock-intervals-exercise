// let degrees = 45;

// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)"

const secondEl =  document.getElementById("second");
const hourEl =  document.getElementById("hour");
const minuteEl =  document.getElementById("minute");

// let degrees = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
// let counter = 0;
 

// const secondRotation = () => {
//     const secondsHand = setInterval(() => {
//     let degrees = (seconds / 60) * 360;
//     secondEl.style.transform = "rotate(" + degrees + "deg)"
//     seconds++;
//     }, 1000);
// }

// const minutesRotation = () => {
//     minutes = setInterval(() => {
//      degrees = (minutes / 60) * 360;
//     minuteEl.style.transform = "rotate(" + degrees + "deg)"
//     }, 60000);
// }
// const hourRotation = () => {
    
// }

// const secInterval = setInterval(() => {
//     secondRotation();
// }, 1000);

// setInterval(() => {
// }, 60000);

// let interval = setInterval(secondRotation(), 1000);
// interval++;

const secondsRotation = setInterval(() => {
    let degrees = (seconds / 60) * 360;
    secondEl.style.transform = "rotate(" + degrees + "deg)"
    seconds++;
}, 1000);
