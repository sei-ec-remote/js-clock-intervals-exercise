// DOM to get IDs from index.html.  We want html IDs to connect to our JS

const seconds = document.getElementById('second')

const minutes = document.getElementById('minute')

const hours = document.getElementById('hour')

// function which uses method to get current time
const startClock = () => {
    const now = new Date()
    const secondHand = now.getSeconds()
    const minuteHand = now.getMinutes()
    const hourHand = now.getHours()
    const timeInterval = 6

    console.log(secondHand)
    // rotation method to make hands rotate on clock image
    seconds.style.transform = 'rotate(' + (secondHand * timeInterval) + 'deg)'
    minutes.style.transform = 'rotate(' + (minuteHand * timeInterval + second / 10) + 'deg)'
    hours.style.transform = 'rotate(' + (hourHand * 30 + minute / 2) + 'deg)'
} 

setInterval(startClock, 100)

// let degrees = 45;

// // const el = document.getElementById("myElement")
// // el.style.transform = "rotate(" + degrees + "deg)"

// // const el = document.getElementById("second")
// // el.style.transform = "rotate(" + degrees + "0.1)"

// // // making second hand function so it rotates each second
// // const secondRotation = (param) => {
// //     document.querySelector("#second").style.transform = "rotate(eg)";
// //     // need method or equation to rotate a number of degrees
// //     param = ()
// // }

// setInterval(secondRotation, 1000)

// const hourRotation = (param) => {
//     // need method or equation to rotate a number of degrees
//     param = ()
// }

// setInterval(hourRotation, 1000)

// const minuteRotation = (param) => {
//     // need method or equation to rotate a number of degrees
//     param = ()
// }

// setInterval(hourRotation, 1000)

// const img = document.createElement('img')
// img.src = can't find link online

// let degrees = 45;

// const el = document.getElementById("minute")
// el.style.transform = "rotate(" + degrees + "deg)"

// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360

// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360