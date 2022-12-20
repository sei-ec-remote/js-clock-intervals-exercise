const time = new Date()

const currentSecond = time.getSeconds()
console.log(`initial second: ${currentSecond}`)
const currentMinute = time.getMinutes()
console.log(`initial minute: ${currentMinute}`)
const currentHour = time.getHours()
console.log(`initial hour: ${currentHour}`)

let seconds = currentSecond
let minutes = currentMinute
let hours = currentHour

const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

secondHand.style.rotate = `calc((${currentSecond} / 60) * 360deg)`
minuteHand.style.rotate = `calc((${currentMinute} / 60) * 360deg)`
hourHand.style.rotate = `calc((${currentHour} / 12) * 360deg)`

const secondsRotationInterval = 1000
const minutesRotationInterval = secondsRotationInterval*60
const hoursRotationInterval = minutesRotationInterval*60

const secondHandRotation = () => {
    if (seconds === 59) {
        seconds = 0
    }  else {
        seconds++
    }   
    secondHand.style.rotate = `calc((${seconds} / 60) * 360deg)`
    console.log('Tick...')
    console.log(seconds)
}

const minuteHandRotation = () => {
    if (minutes === 59) {
        minutes = 0
    }  else {
        minutes++
    }   
    minuteHand.style.rotate = `calc((${minutes} / 60) * 360deg)`
    console.log(`MINUTE: ${minutes}`)
}

const hourHandRotation = () => {
    if (hours === 59) {
        hours = 0
    }  else {
        hours++
    }   
    hourHand.style.rotate = `calc((${hours} / 12) * 360deg)`
    console.log(hours)
}


const secondHandGo = setInterval(secondHandRotation, secondsRotationInterval)
const minuteHandGo = setInterval(minuteHandRotation, minutesRotationInterval)
const hourHandGo = setInterval(hourHandRotation, hoursRotationInterval)