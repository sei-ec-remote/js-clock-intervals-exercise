// create variables for the elements to be manipulated in CSS using JS
const secondHand = document.getElementById('second')
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')

// define functions that convert
// seconds, minutes and hours to how many degrees the
// hand should be rotated around the clock
// ```js
// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360
// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360
// ```
let seconds = 0;
let secondRotation = (seconds) => {
    return seconds * 6
}


let minuteRotation = (minutes) => {
    // secMin = 0
    // let degrees = (secMin / 60) * 360
    // secMin++
    return minutes * 6
}

let hourRotation = (hours) => {
    // hour = 0
    // let degrees = (hour / 60) * 360
    // hour++
    return hours * 30
}


// Change CSS values in JavaScript by getting reference
// to them through the DOM and setting a new value to
// their CSS properties:
// ```js
// let degrees = 45;
// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)"
// ```

// write code to make hands tick using intervals
// this code will will run code to tell CSS to rotate hands

// variable to keep track of time

let secondTick = (seconds) => {
    secondHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)"
    
}

let minuteTick = (minutes) => {
    minuteHand.style.transform = "rotate(" + minuteRotation(minutes) + "deg)"
}

let hourTick = (hours) => {
    hourHand.style.transform = "rotate(" + hourRotation(hours) + "deg)"
}

// code to set intervals and run code at specified times
// setInterval(secondTick, 1000)
// setInterval(minuteTick, 60000)
// setInterval(hourTick, 3600000)

setInterval(() => {
    seconds++
    // want variable to increment when the hands tick
    secondTick(seconds)
    minuteTick(seconds / 60)
    hourTick(seconds / 3600)
}, 1000)