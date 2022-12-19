// Write a function that rotates the hands every interval

// Get HTML elements & set as variables
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

// establish a count
let count = 0

const countUp = () => {
    // Increase the count each time the function is called
    count++
    return count
}

// Establish increments  of degrees for seconds
const secRot = () => {
    const degrees = 360/60
    return degrees
}

// Establish increments  of degrees for minutes
const minRot = () => {
    const degrees = (360/60)/60
    return degrees
}
// Establish increments  of degrees for hours
const hrRot = () => {
    const degrees = (360/(60*60))/60
    return degrees
}

// Rotate the clock
rotateClock = () => {
    // count up once each interval & rotate the hands by their respective degrees, for every count increase.
    countUp()
    secondHand.style.transform = 'rotate(' + secRot()*count + 'deg)'
    minuteHand.style.transform = 'rotate(' + minRot()*count + 'deg)'
    hourHand.style.transform = 'rotate(' + hrRot()*count + 'deg)'
}


setInterval(rotateClock, 1000)
