const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const secondRotation = (now) => {
    let currentSecond = now.getSeconds()
    secondHand.style.transform = 'rotate(' + (currentSecond * 6) + 'deg)'
}

const minuteRotation = (now) => {
    let currentMinute = now.getMinutes()
    minuteHand.style.transform = 'rotate(' + (currentMinute * 6) + 'deg)'
}

const hourRotation = (now) => {
    let currentHour = now.getHours()
    hourHand.style.transform = 'rotate(' + (currentHour * 30) + 'deg)'
}

const setClock = () => {
    let now = new Date()
    secondRotation(now)
    minuteRotation(now)
    hourRotation(now)
}

setInterval(setClock, 1000)

document.addEventListener('DOMContentLoaded', setClock)