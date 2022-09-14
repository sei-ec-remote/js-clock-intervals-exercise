const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')
let seconds = 0
let minutes = 0
let hours = 0

const rotation = (increment, time) => {
    return (increment/time) * 360
}

// const moveSecondHand = () => {

//     console.log('sec hand')  
//     console.log(degrees)
// }

// const moveMinuteHand = () => {
//     degrees += 6
    
//     console.log('min hand')
//     console.log(degrees)
//     return degrees
// }

// const moveHourHand = () => {
//     degrees += .5
//     minuteHand.style.transform = "rotate(" + degrees + "deg)"
//     console.log('hour hand')
//     console.log(degrees)
//     return degrees
// }

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

setInterval(startClock, 1000)





    



