// let degrees = 45;

// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)"

// setInterval(setClock, 1000)

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

// }
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

function workingClock() {
    const date = new Date()
    const second = date.getSeconds()
    const minute = date.getMinutes()
    const hour = date.getHours()
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
