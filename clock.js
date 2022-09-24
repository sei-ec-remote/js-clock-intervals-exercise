const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')
const secondHand = document.querySelector('#second')

let secondDegrees = 6
let minuteDegrees = 6
let hourDegrees = 6

const secondLoop = () => {
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)'
    secondDegrees = secondDegrees + 6
}

const minuteLoop = () => {
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)'
    minuteDegrees = minuteDegrees + 6
}

const hourLoop = () => {
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)'
    hourDegrees = hourDegrees + 6
}

setInterval(secondLoop, 1000)
setInterval(minuteLoop, 60000)
setInterval(hourLoop, 3600000)