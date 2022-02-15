//Change CSS values in JavaScript by getting reference to them 
//through the DOM and setting a new value to their CSS 
//properties:

const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")


//Create intervals in the JavaScript file to make the clocks 
//tick.

let secondsTick = 0
const secondHandTick = setInterval(() => {
    let secondsDeg = secondsTick/60 * 360
    second.style.transform = "rotate(" + secondsDeg + "deg)"
    //console.log(secondsTick)
    secondsTick++
}, 1000)
 

let minutesTick = 0
const minuteHandTick = setInterval(() => {
    let minutesDeg = minutesTick/60 * 360
    minute.style.transform = "rotate(" + minutesDeg + "deg)"
    //console.log(minutesTick)
    minutesTick++
}, 60000)

let hourTick = 0
const hourHandTick = setInterval(() => {
    let hourDeg = hourTick/12 * 360
    hour.style.transform = "rotate(" + hourDeg + "deg)"
    //console.log(hourTick)
    hourTick++
}, 3600000)


//It would be useful to define functions that convert seconds, 
//minutes and hours to how many degrees the hand should be 
//rotated around the clock!

secondHandRotation = () => {
    let secondsDeg = secondsTick/60 * 360
}

minuteHandRotation = () => {
    let minutesDeg = minutesTick/60 * 360
}

hourHandRotation = () => {
    let hourDeg = hoursTick/12 * 360
}