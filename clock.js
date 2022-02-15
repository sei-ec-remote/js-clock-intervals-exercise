// make a afunction for seconds
// for every second that goes by,
// we want the hand to move 6 degrees
// 1000 = 1 sec
// 60000 = 60 secs = 1 min
// 3600000 = 60 mins = 1 hour
// const second = () => {

// }

// make a function for mins
// for every 60 seconds that goes by,
// we want the hand to move 6 degrees
// const min = () => {

// }

// make a function for hours
// for every 60 mins that goes by,
// we want the hand to move 30 degrees
// const hour = () => {

// }
let degrees = 0

//increase the degree of the interval by 6 degrees by 1 second
const countInt = setInterval(() => {
    console.log(degrees)
    degrees += 6
    return degrees
}, 1000)
console.log(degrees)
setTimeout(() => {
    clearInterval(countInt)
}, 60100)
degrees += 6

// const countMin = setInterval(() => {
//     console.log
// }
// )

// const sec = () => {
//     const el = document.getElementById("second")
//     el.style.transform = "rotate(" + countInt + "deg)"
//     console.log(`rotate(" + ${countInt} + "deg)`)
// }
// const sixRotation = setTimeout(sec, 1000)

//rotates the second hand by 6 degrees every second from const countInt
function secondRotation(degrees) {
    const ap = document.getElementById('second')
    ap.style.transform = "rotate(" + degrees + "deg)"
}

secondRotation(countInt)

// gets the id='second' and changes the angle at which 
// the second hand is at

const secondHand = document .getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

let x = secounds/60*360
