// define reference variables to each of the hands
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

// create a funcion that will rotate the clock hands
// given degrees and hands as parameters
const rotateDegrees = (hand,degrees) => {
    hand.style.transform = `rotate(${degrees}deg)`
}

// starting point to add degrees
let defaultSecondDeg = 0
let defaultMinuteDeg = 0
let defaultHourDeg = 0
// create constant variables for degrees rotation every second
// second hand --> full rotation has 60 moves
// second hand --> there are 360 degrees in a circle
const secondDegrees = () => {
    if(defaultSecondDeg === 60){
        defaultSecondDeg = 0
    }
    defaultSecondDeg += 1
        return (defaultSecondDeg/60) * 360
}

// minute hand --> full rotation has 60 moves
// minute hand --> there are 360 degrees in a circle
const minuteDegrees = () => {
    if(defaultMinuteDeg === 60){
        defaultSecondDeg = 0
    }
    defaultMinuteDeg += 1
    return (defaultMinuteDeg/60) * 360  
}

// hour hand --> full rotation is 12 moves
// hour hand --> there are 360 degrees in a circle
const hourDegrees = () => {
    if(defaultHourDeg === 60){
        defaultHourDeg = 0
    }
    defaultHourDeg += 1
    return (defaultHourDeg/12) * 360  
}


// next we need to implement timing functions
// linnk to class docs on timing functions:
// https://git.generalassemb.ly/sei-ec-remote/callbacks-timing-higher-order-functions/blob/main/timingFunctions.md

document.addEventListener('DOMContentLoaded', function () {

const tick = () => console.log('tick')

setInterval(tick, 1000)

const moveSecondHand = () => rotateDegrees(secondHand,secondDegrees())
setInterval(moveSecondHand,1000)
console.log('move second hand to, ', secondDegrees())


const moveMinuteHand = () => rotateDegrees(minuteHand, minuteDegrees())
setTimeout(moveMinuteHand, 60000)
console.log('move minute hand', minuteDegrees())


const moveHourHand = () => rotateDegrees(hourHand, hourDegrees())
setTimeout(moveHourHand, 60*60000)
console.log('move hour hand', hourDegrees())

})