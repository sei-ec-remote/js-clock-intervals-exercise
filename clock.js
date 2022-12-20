// give the hands a CLASS of rotate
//rotate them clockwise. css till do 45 degrees. do seconds every second. minute every 60 seconds. hour every 3600 seconds.



//write a function that rotates them at intervals

// each hand moves a certain % of 360
const oneMove = (360 / 60)

let secDegrees = 0
const rotateSecond = () => {
    const secondHand = document.getElementById('second')
    secondHand.style.transform = "rotate(" + secDegrees + "deg)"
    secDegrees = secDegrees + oneMove
}
setInterval(rotateSecond,1000)

let minDegrees = 0
const rotateMinute= () => {
    const minuteHand = document.getElementById('minute')
    minuteHand.style.transform = "rotate(" + minDegrees + "deg)"
    minDegrees = minDegrees + oneMove
}
setInterval(rotateMinute,60000)

let hourDegrees = 0
const rotateHour= () => {
    const hourHand = document.getElementById('hour')
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)"
    hourDegrees = hourDegrees + oneMove
}
setInterval(rotateHour, 3600000)








