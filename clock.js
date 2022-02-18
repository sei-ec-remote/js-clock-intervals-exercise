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
const secondDegrees = i => (i/60) * 360

// minute hand --> full rotation has 60 moves
// minute hand --> there are 360 degrees in a circle
const secondDegrees = i => (i/60) * 360

// hour hand --> full rotation is 12 moves
// hour hand --> there are 360 degrees in a circle
const hourDegrees = i => (i/12) * 360



