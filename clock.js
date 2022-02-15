// Instructions: Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties.
// Create variables
const secHand = document.querySelector("#second")
const minHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")
// Change css values to get hand to rotate
// secHand.style.transform = "rotate(90deg)"

// Instructions: It would be useful to define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!
// Create function for time conversions
// (secs / 60) * 360 --> seconds
// (min / 60) * 360 --> minutes
// (hr / 12) * 360 --> hours
let sec = 0
convertSecs = setInterval(() => {
    let secDeg = sec / 60 * 360
    secHand.style.transform = "rotate(" + secDeg + "deg)" 
    sec++
    // 1000 <--- 1sec       
}, 1000)

let min = 0
convertMins = setInterval(() => {
    let minDeg = min / 60 *  360
    minHand.style.transform = "rotate(" + minDeg + "deg)"
    min++
    // 60000 <--- 1 min
}, 60000)

let hr = 0
convertHours = setInterval(() => {
    let hrDeg = hr / 12 * 360
    hourHand.style.transform = "rotate(" + hrDeg + "deg)"
    hr++
    // 3600000 <--- 1 hr
}, 3600000)
    

