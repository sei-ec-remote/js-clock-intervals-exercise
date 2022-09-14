





let secondsDegrees = 0
let minutesDegrees = 0
let hoursDegrees = 0

const secondRotation = () => {
    const el = document.getElementById("second")
    el.style.transform = "rotate(" + secondsDegrees + "deg)"
    secondsDegrees += 6
}
setInterval(secondRotation,1000)

const minutesRotation = () => {

    const el = document.getElementById("minute")
    el.style.transform = "rotate(" + minutesDegrees + "deg)"
    minutesDegrees += 1
}
setInterval(minutesRotation,10000)

const hoursRotation = () => {

    const el = document.getElementById("hour")
    el.style.transform = "rotate(" + hoursDegrees + "deg)"
    hoursDegrees +=1
}
setInterval(hoursRotation,240000)


