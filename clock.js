
// Variables to allow javascript to access html

secondHand = document.getElementById('second')
minuteHand = document.getElementById('minute')
hourHand = document.getElementById('hour')

// clock 360 / 12 = 30 clock is 360 degrees
// 1 hour equals 30 degrees
// 1 second = 6 degrees
// 1 minute = 6 degrees

let seconds = setInterval(() => {
    console.log('second')
},1000)

let minutes = setInterval(() => {
    console.log('minute')
},60000)

let hour = setInterval(() => {
    console.log('hour')
},3600000)
console.log(seconds)