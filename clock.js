// // // // // // //Create intervals in the JavaScript file to make the clocks tick.
// // // // // // //.rotate {
// // // // // //    // transform: rotate(45deg)


const hourHand = document.getElementById("hour")
const minuteHand = document.getElementById("minute")   
const secondHand = document.getElementById("second")

let timerInterval;

const initClock = () => {
    const date = new Date();
    
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    
    
    const secondsDegrees =  6 * seconds;
    const minutesDegrees = 6 * minutes;
    const hoursDegrees = 30 * hours + minutes/2;
    
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
       
    
    
}
setInterval(initClock, 1000);
   
console.log(initClock())//clearInterval(timerInterval);