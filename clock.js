const hourImg = document.querySelector('#hour')
const minuteImg = document.querySelector('#minute')
const secondImg = document.querySelector('#second')

let hourDegrees = 30
let minuteDegrees = 6
let secondDegrees = 6

setInterval( () => {
    secondImg.style.transform = "rotate(" + secondDegrees + "deg)"
    secondDegrees += 6
}, 1000)

setInterval( () => {
    minuteImg.style.transform = "rotate(" + minuteDegrees + "deg)"
    minuteDegrees += 6
}, 60010)

setInterval( () => {
    hourImg.style.transform = "rotate(" + hourDegrees + "deg)"
    hourDegrees += 30
}, 3600010)
