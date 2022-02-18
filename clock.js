// define reference variables to each of the hands
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

// create a funcion that will rotate the clock hands
// given degrees and hands as parameters
const rotateDegrees = (hand,degrees) => {
    hand.style.transform = `rotate(${degrees}deg)`
}

// create constant variables for degrees rotation every second
// second hand --> full rotation has 60 moves
// second hand --> there are 360 degrees in a circle
const secondDegrees = i => {
    return (i/60) * 360
}

// minute hand --> full rotation has 60 moves
// minute hand --> there are 360 degrees in a circle
const minuteDegrees = i => {
    return (i/60) * 360
}

// hour hand --> full rotation is 12 moves
// hour hand --> there are 360 degrees in a circle
const hourDegrees = i => {
    return (i/12) * 360
}


// next we need to implement timing functions
// linnk to class docs on timing functions:
// https://git.generalassemb.ly/sei-ec-remote/callbacks-timing-higher-order-functions/blob/main/timingFunctions.md

document.addEventListener('DOMContentLoaded', function () {

const tick = () => console.log('tick')

setInterval(tick, 1000)

for (let i = 0; i < 60; i++){
    let moveSecondHand = rotateDegrees(secondHand,secondDegrees(i))
    setInterval(moveSecondHand,1000)
    console.log('move second hand to, ', secondDegrees(i))
}

for (let i = 0; i < 60; i++){
    let moveMinuteHand = rotateDegrees(minuteHand, minuteDegrees(i))
    setTimeout(moveMinuteHand, 60000)
    console.log('move minute hand', minuteDegrees(i))
}

for (let i = 0; i<12; i++){
    let moveHourHand = rotateDegrees(hourHand, hourDegrees(i))
    setTimeout(moveHourHand, 60*60000)
    console.log('move hour hand', hourDegrees(i))
}
})