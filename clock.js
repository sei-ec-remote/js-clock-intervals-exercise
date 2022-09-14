const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

// functions to convert time into degrees
const getSecRotation = sec => {
    return sec/60 * 360
}

const getMinRotation = min => {
    return min/60 * 360
}

const getHourRotation = hour => {
    if (hour <= 12) {  // accounts for 24 hour formatting 
        return hour/12 * 360  
    }
    return (hour-12)/12 * 360
}


// get current live time
let currentTime = new Date()
let currentSec = currentTime.getSeconds()
let currentMin = currentTime.getMinutes()
let currentHour = currentTime.getHours() 

// pass current time into functions to convert into starting degrees
let startSecDeg = getSecRotation(currentSec)
let startMinDeg = getMinRotation(currentMin)
let startHourDeg = getHourRotation(currentHour)

// positions the hands at corresponding degrees on the clock based on current time
const startClock = () => {
    second.style.transform = `rotate(${startSecDeg}deg)`
    minute.style.transform = `rotate(${startMinDeg}deg)`
    hour.style.transform = `rotate(${startHourDeg}deg)`
}

// functions that determine the rate of movement (degrees/sec) around the clock, accounting for the 1000 ms delay by setInterval() at start or refresh of page
const secondRotation = () => {
    startSecDeg += 360/60
    second.style.transform = `rotate(${startSecDeg}deg)`
}

const minuteRotation = () => {
    startMinDeg += 360/60/60
    minute.style.transform = `rotate(${startMinDeg}deg)`
}

const hourRotation = () => {
    startHourDeg += 360/60/60/12
    hour.style.transform = `rotate(${startHourDeg}deg)`
}


startClock()
setInterval(secondRotation, 1000)
setInterval(minuteRotation, 1000)
setInterval(hourRotation, 1000)