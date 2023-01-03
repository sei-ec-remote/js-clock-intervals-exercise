let secondHand =
document.getElementByld("second")
let minuteHand =
document.getElementByld("minute")
let hourHand =
document.getElementByld("hour")
let degrees = 6
setInterval (() =>{
let date = new Date()
let currentHour = date.getHours() * 30
let currentMin = date.getMinutes() * degrees
let currentSec = date.getSeconds() * degrees

secondHand.style.transform =`rotate(${currentSec}deg)`
minuteHand.style.transform =
`rotate(${currentMin}deg)`
hourHand.style.transform =
`rotate(${(currentHour)+ (currentMin/22)}deg)`})

