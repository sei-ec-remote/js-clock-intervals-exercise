
let degrees = 0

const el = document.getElementById("clock")
el.style.transform = "rotate(" + degrees + "deg)"

const hourHand = document.getElementById("hour")
const minuteHand = document.getElementById("minute")
const secondHand = document.getElementById("second")

let seconds = 0
let minutes = 0
let hours = 0

const rotation = (increment, time) => {
    return (increment/time) * 360
}
rotation()

const startClock = () => {
    seconds++
    secondMovement = rotation(seconds, 60)
    secondHand.style.transform = "rotate(" + secondMovement + "deg)"
    if((seconds % 60) === 0){
        minutes++
        minMovement = rotation(minutes, 60)
        minuteHand.style.transform = "rotate(" + minMovement + "deg)"
        console.log(minMovement)
    }
    if((seconds % 3600) === 0){
        hours++
        hourMovement = rotation(hours, 60)
        hourHand.style.transform = "rotate(" + hourMovement + "deg)"
        console.log(hourMovement)
    }
}

setInterval(startClock, 1000);

clearInterval(startClock);

// Would the below set the clock to the actual time?
// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
//   }
  
//   function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }