document.addEventListener("DOMContentLoaded", clock = () => {
    const now = new Date()
    const hourHand = document.getElementById('hour')
    const minuteHand = document.getElementById('minute')
    const secondHand = document.getElementById('second')

    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    let secondDegrees = ((seconds/60) * 360)
    let minuteDegrees = ((minutes/60) * 360) + seconds/10
    let hourDegrees = (hours * 30) + (minutes/2)

    secondHand.style.transform = "rotate(" + secondDegrees +"deg)"
    minuteHand.style.transform = "rotate(" + minuteDegrees +"deg)"
    hourHand.style.transform = "rotate(" + hourDegrees +"deg)"

    setTimeout(clock, 1000)
})