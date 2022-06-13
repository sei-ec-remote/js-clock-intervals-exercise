const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

let time = 1

const readTheTime = () => {
    secondHand.style.transform = "rotate(" + time / 60 * 360 + "deg)"
    minuteHand.style.transform = "rotate(" + time / 3600 * 360 + "deg)"
    hourHand.style.transform = "rotate(" + time / 43200 * 360 + "deg)"
    time++
}

setInterval(readTheTime, 1000)

// Bonus
// const setTheTime = () => {
//     const now = new Date
//     secondHand.style.transform = "rotate(" + now.getSeconds() / 60 * 360 + "deg)"
//     minuteHand.style.transform = "rotate(" + now.getMinutes() / 60 * 360 + "deg)"
//     hourHand.style.transform = "rotate(" + now.getHours() / 12 * 360 + "deg)"
// }

// const run = setInterval(setTheTime, 1)

