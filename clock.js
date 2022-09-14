const second = () => {
    setInterval(tick, 1000)
}

let secondHand = document.getElementById('second')
let minuteHand = document.getElementById('minute')
let hourHand = document.getElementById('hour')

let secondHandAngle = 0
let minuteHandAngle = 0
let hourHandAngle = 0

const secondTick = () => {
    secondHandAngle += 6
    if (secondHandAngle === 360) {
        secondHandAngle = 0
    }
    rotateArg = "rotate(" + secondHandAngle + "deg)"
    secondHand.style.transform = rotateArg
}

const minuteTick = () => {
    minuteHandAngle += 1
    if (minuteHandAngle === 360) {
        minuteHandAngle = 0
    }
    rotateArg = "rotate(" + minuteHandAngle + "deg)"
    minuteHand.style.transform = rotateArg
}

const hourTick = () => {
    hourHandAngle += .1
    if (hourHandAngle === 360) {
        hourHandAngle = 0
    }
    rotateArg = "rotate(" + hourHandAngle + "deg)"
    hourHand.style.transform = rotateArg
}

setInterval(secondTick, 1000)
setInterval(minuteTick, 10000)
setInterval(hourTick, 60000)