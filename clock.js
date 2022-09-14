// A callback function, is a function passed to another function as
// an argument.


const clockSecondHand = document.getElementById("second")
const clockMinuteHand = document.getElementById("minute")
const clockHourHand = document.getElementById("hour")


let clockDegrees = 0;
    clockDegrees+=6
    clockSecondHand.style

const clockSecondMove = () => {
    clockDegrees += 6
// had to look up how this line applies to the DOM, and by also changing the values
    clockSecondHand.style.transform = "rotate(" + clockDegrees + "deg)"
    return clockDegrees
}

setInterval(clockSecondMove, 2000)

// check the minute move rotate with clockMinuteMove interval
const clockMinuteMove = () => {
    degrees += 30
    hourHand.style.transform = "rotate(" + clockDegrees + "deg)"
    return clockDegrees 
}
setInterval(clockMinuteMove, 50000)


// const clockHourMove = () => {
//     clockDegrees+=30
//     hourHand.style.transform = "rotate(" + clockDegrees + "deg)"
//     return clockDegrees
// }

// clockHourMove(clockHourMove, 36000)
