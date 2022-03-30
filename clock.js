// 1000 = 1 sec
// 60000 = 60 secs = 1 min
// 3600000 = 60 mins = 1 hour

// Grab the element from the document
const secondHand = document.getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

let degreesS = 1
let degreesM = 1
let degreesH = 1

// make a afunction for seconds
// for every second that goes by,
// we want the hand to move 6 degrees
seconds = setInterval(() => {
    let secRotation = (degreesS/ 60) * 360
    secondHand.style.transform = "rotate(" + secRotation + "deg)"
    degreesS += 1
}, 1000)

// make a function for mins
// for every 60 seconds that goes by,
// we want the hand to move 6 degrees
minutes = setInterval(() => {
    let minRotation = (degreesM/ 60) * 360
    minHand.style.transform = "rotate(" + minRotation + "deg)" 
    degreesM += 1
}, 60000)

// make a function for hours
// for every 60 mins that goes by,
// we want the hand to move 30 degrees
hours = setInterval(() => {
    let hourRotation = (degreesH/ 12) * 360
    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    degreesH += 1
}, 360000)