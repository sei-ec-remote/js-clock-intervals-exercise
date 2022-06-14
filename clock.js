// TO DO : high order functions, 
// set the real time
// have it resync when its opened?


const now = new Date()

const actualHour = now.getHours()
const actualMinutes = now.getMinutes()
const actualSeconds = now.getSeconds()


const secondObj = document.getElementById('second')
secondObj.style.transform = "rotate(0deg)"

const minuteObj = document.getElementById('minute')
minuteObj.style.transform = "rotate(0deg)"

const hourObj = document.getElementById('hour')
hourObj.style.transform = "rotate(0deg)"

let secondTime = 0
let secondDegrees = 0

let minuteTime = 0
let minuteDegrees = 0

let hourTime = 0
let hourDegrees = 0


// 11:35 = 60*



// secondhand needs to move 6 degrees every second
// minute hand needs to move 6 degrees every minute
// every minute, the HOUR hand needs to move 1/60 of 
// In 1 hour it has to go 360/12 = 30deg. 30/60m = .5deg per minute

// 3600s in 1h, 60s in 1m, 

// just top of the hour is as 30 seconds behind, 

// seconds to second degree is seconds*6
// let secondTime = 3540
// let secondDegrees = 21240deg

// minutes to minute degrees is minutes * 6
// let minuteTime = 59
// let minuteDegrees = 354

// hour to hour degrees is min * .5 
// let hourTime(m)= 59
// let hourDegrees = 29.5



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




setInterval(secondTick, 1000) // in 1s per turnover
setInterval(minuteTick, 60000) // in 60s per turnover
setInterval(hourTick, 60000) // in 1 m per turnover is .5deg