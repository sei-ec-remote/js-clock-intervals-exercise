const secondObj = document.getElementById('second')
secondObj.style.transform = "rotate(0deg)"

const minuteObj = document.getElementById('minute')
minuteObj.style.transform = "rotate(0deg)"

const hourObj = document.getElementById('hour')
hourObj.style.transform = "rotate(0deg)"

let clockOn = true

let secondTime = 0
let secondDegrees = 0

let minuteTime = 0
let minuteDegrees = 0

let hourTime = 0
let hourDegrees = 0


// secondhand needs to move 6 degrees every second
// minute hand needs to move 6 degrees every minute
// every minute, the HOUR hand needs to move 1/60 of 1/12 of 360 == 0.5 degrees every second


const secondTick = () => {
    secondDegrees = secondDegrees + 6
    secondObj.style.transform = `rotate(${secondDegrees}deg)`
    secondTime++
}

const minuteTick = () => {
    minuteDegrees = minuteDegrees + 6
    minuteObj.style.transform = `rotate(${minuteDegrees}deg)`
    minuteTime++
}


const hourTick = () => {
    hourDegrees = hourDegrees + .5
    hourObj.style.transform = `rotate(${hourDegrees}deg)`
    hourTime++
}



setInterval(secondTick, 1000)
setInterval(minuteTick, 60000)
setInterval(hourTick, 600000)