

// give the hands a CLASS of rotate
//rotate them clockwise. css till do 45 degrees. do seconds every second. minute every 60 seconds. hour every 3600 seconds.

//write a function that rotates them at intervals

// each hand moves a certain % of 360
const oneQuarterMove = ((360 / 60) / 4)
const oneMove = (360/ 60)

let hourDegrees = 1.5
const rotateHour= () => {
    const hourHand = document.getElementById('hour')
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)"
    hourDegrees = hourDegrees + oneQuarterMove
}
//shoudl be 360000
setInterval(rotateHour, 90000)

let minDegrees = 1.5
const rotateMinute= () => {
    const minuteHand = document.getElementById('minute')
    minuteHand.style.transform = "rotate(" + minDegrees + "deg)"
    minDegrees = minDegrees + oneQuarterMove
}
// shoudl be 60000
setInterval(rotateMinute,15000)

let secDegrees = 6
const rotateSecond = () => {
    const secondHand = document.getElementById('second')
    secondHand.style.transform = "rotate(" + secDegrees + "deg)"
    secDegrees = secDegrees + oneMove
}
setInterval(rotateSecond,1000)

//const now = new Date()

const date = new Date()
date.setHours(12,0,0,0)

const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

const newTime = document.createElement('div')
newTime.setAttribute('id','digitalClock')

const runningClock = document.querySelector('#clockTime')
runningClock.appendChild(newTime)

const addTimeToClock = () => {
    newTime.textContent= currentTime
}

runningClock.addEventListener("load", addTimeToClock())











