// let degrees = 45;

// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)"

const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

function workingClock() {
    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()
    const hoursDegrees = minute/second+hour*30

    hoursRotation(hoursDegrees)
    minutesRotation(minute*6)
    secondsRotation(second*6)
}

function secondsRotation(degrees) {
    secondHand.style.transform = "rotate(" + degrees + "deg)"
}

function minutesRotation(degrees) {
    minuteHand.style.transform = "rotate(" + degrees + "deg)"
}

function hoursRotation(degrees) {
    hourHand.style.transform = "rotate(" + degrees + "deg)"
}

setInterval(workingClock, 1000)

workingClock()
