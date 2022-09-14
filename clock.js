// Defining some variables

const angle = {
    second: 360 / 60,
    minute: 360 / (60 * 60),
    hour: 360 / ((60 * 60) * 12),
}

let timeInDegrees = {
    second: 0,
    minute: 0,
    hour: 0,
}

const angleToRotate = (timeLabel) => {
    timeInDegrees[timeLabel] += angle[timeLabel] 
    // the below conditional is just so the timeInDegrees object doesn't get out of hand
    if (timeInDegrees[timeLabel] >= 360) {
        timeInDegrees[timeLabel] -= 360
    }
        return timeInDegrees[timeLabel]
}

const rotate = (timeLabel) => {
    const hand = document.getElementById(timeLabel)
    hand.style.transform = "rotate("+angleToRotate(timeLabel)+"deg)"
}

const run = () => {
    rotate('second')
    rotate('minute')
    rotate('hour')   
}

const getCurrentTime = () => {
    let currentDate = new Date()
    timeInDegrees.hour =  (currentDate.getHours() * 30) + (currentDate.getMinutes() * .5) + (currentDate.getSeconds() * angle.hour)
    timeInDegrees.minute =  (currentDate.getMinutes() * 6) + (currentDate.getSeconds() * .1)
    timeInDegrees.second =  currentDate.getSeconds() * 6
    run()
}

setInterval(run, 1000)

document.addEventListener('DOMContentLoaded', getCurrentTime)
// alternativly, I could have just used the `getCurrentTime` function in luie of angleToRotate, but this provides more future functionality