// get second hand id
const secondHand = document.getElementById('second')
// get minute hand id
const minuteHand = document.getElementById('minute')
// get hour hand id
const hourHand = document.getElementById('hour')

// seconds conversion, secondRotation(x) // returns (x / 60) * 360
const degreeSeconds = (second) => {
    return (second / 60) * 360
}
// minutes conversion, secondRotation(x) // returns (x / 60) * 360
const degreeMinutes = (minute) => {
    return (minute / 60 ) * 360    
}
// hours conversion, hourRotation(x) // returns (x / 12) * 360
const degreeHours = (hour) => {
    return (hour / 12) * 360
}

let count = 1
// count starting at 1
const rotateSecond = setInterval(() => {
    //counting up and converting it with degreeSeconds function to a degree
    count ++ 
    secondHand.style.transform = 'rotate(' + degreeSeconds(count) + 'deg)'
    // console.log(count)
    // 1 sec = 10000
}, 1000)


const rotateMinute = setInterval(() => {
    //counting up and converting it with degreeMinutes function to a degree
    count ++ 
    minuteHand.style.transform = 'rotate(' + degreeMinutes(count) + 'deg)'
    // console.log(count)
    // 1min = 60000 
}, 60000)

// hours rotate
const rotateHour = setInterval(() => {
    //counting up and converting it with degreeMinutes function to a degree
    count ++ 
    hourHand.style.transform = 'rotate(' + degreeHours(count) + 'deg)'
    // console.log(count)
    // 1hr = 3600000
}, 3600000)

// not sure if I need this?
document.addEventListener('DOMContentLoaded', () =>{
})