const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')
const secondHand = document.querySelector('#second')
const clock = document.querySelector('#clock')
let second = 0;
let minute = 0;
let hour =0;

const secondCounter = setInterval(() => {
    let secondDegrees = second/60 * 360
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)'
    second++
}, 1000)

const minuteCounter = setInterval(() => {
    let minuteDegrees = minute/60 * 360
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)'
    minute++
}, 60000)

const hourCounter = setInterval(() => {
    let hourDegrees = hour/12 * 360
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)'
    hour++
}, 3600000)

//i need to make a function to count to 60 seconds then repeat

// const time = () => {
//     console.log('seconds work')
    
// }
// const rotateSeconds = () => {
//     secondHand.style.transform = 'rotate(' + degrees + 'deg)'

// }
// rotateSeconds()

