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

// function to count from 0 to 60
let countUpToSixty = () => {
    let count = 0
    count++
    if (count === 60){
        return
    }
    return count
}

// function to count from 0 to 12
let countUpToTwelve = () => {
    let count = 0
    count = count++
    if (count === 12){
        return
    }
    return count
}
let secMinRotation = (secMin) => {
    return (secMin() / 60) * 360
}

let hourRotation = (hours) => {
    return (hours() / 12) * 360
}

let secMinDegrees = secMinRotation(countUpToSixty)

let hourDegrees = hourRotation(countUpToTwelve)

setInterval(secMinRotation, 1000)
setInterval(secMinRotation, 60000)
setInterval(hourRotation, 3600000)

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

const secondTick = () => {
    secondHand.style.transform = "rotate(" + secMinDegrees + "deg)"
}

const minuteTick = () => {
    minuteHand.style.transform = "rotate(" + secMinDegrees + "deg)"
}

const hourTick = () => {
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)"
}

// code to set intervals and run code at specified times

secondTick()
minuteTick()
hourTick()