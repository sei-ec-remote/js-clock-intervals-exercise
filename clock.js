let seconds = 0
let minutes = 0
let hours = 0

const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const secondRotation = (seconds) => {
    return seconds / 60 * 360
}

const hourRotation = (hours) => {
    return hours / 12 * 360
}

const minuteRotation = (minutes) => {
    return minutes / 60 * 360
}

const rotateSecondHand = () => {
    seconds += 1
    let degrees = secondRotation(seconds)
    secondHand.style.transform = `rotate(${degrees}deg)`
}

const rotateMinuteHand = () => {
    minutes += 1
    let degrees = minuteRotation(minutes)
    minuteHand.style.transform = `rotate(${degrees}deg)`
}

const rotateHourHand = () => {
    hours = minutes / 60
    let degrees = hourRotation(hours)
    hourHand.style.transform = `rotate(${degrees}deg)`
}

document.addEventListener('DOMContentLoaded', () => {
setInterval(rotateSecondHand, 1000)
//set hour and minute rotations to rotate every minute (hours will rotate a portion of the way to the next # every minute)
setInterval(rotateMinuteHand, 1000*60)
setInterval(rotateHourHand, 1000*60)
})