// Write a function that rotates the hands every interval
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')


let count = 0

const countUp = () => {
    count++
    return count
}

const secRot = (milliseconds) => {
    const degrees = 360/60
    return degrees
}

const minRot = (milliseconds) => {
    const degrees = (360/60)/60
    return degrees
}

const hrRot = (milliseconds) => {
    const degrees = (360/(60*60))/60
    return degrees
}

// can you pass a function that requires a parameter to setTimeout and setInterval


// need to increment the rotation.
rotateClock = (milliseconds) => {
    countUp()
    secondHand.style.transform = 'rotate(' + secRot(milliseconds)*count + 'deg)'
    minuteHand.style.transform = 'rotate(' + minRot(milliseconds)*count + 'deg)'
    hourHand.style.transform = 'rotate(' + hrRot(milliseconds)*count + 'deg)'
}


setInterval(rotateClock, 1000, 1000)
