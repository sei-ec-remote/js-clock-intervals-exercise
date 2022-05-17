const clock = document.getElementById('clock')
const clockFace = document.getElementById('face')
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

const getTime = () => {
    const currentTime = new Date()
    //divide seconds by 60 for secs and mins because that's how many there are. Likewise 12 for hours
    //will multiply by 360 in function down below further
    const currentSecondsRotation = currentTime.getSeconds() / 60
    const currentMinutesRotation = (currentSecondsRotation + currentTime.getMinutes()) / 60
    const currentHoursRotation = (currentMinutesRotation + currentTime.getHours()) / 12

    rotateClockHands(secondHand, currentSecondsRotation)
    rotateClockHands(minuteHand, currentMinutesRotation)
    rotateClockHands(hourHand, currentHoursRotation)
}

const rotateClockHands = (clockHand, rotation) => {
    clockHand.style.transform = `rotate(${rotation * 360}deg)`
}

setInterval(getTime, 1000)

const digitalHours = document.getElementById('hoursDigital')
const digitalMinutes = document.getElementById('minutesDigital')
const digitalSeconds = document.getElementById('secondsDigital')

const goDigital = () => {
    const digitalTime = new Date()
    let hours = digitalTime.getHours()
    //I recently discovered ternary conditions so I use them pretty much any chance I can get 
    digitalHours.innerText = `${hours > 12 ? hours - 12 : hours}`
    digitalMinutes.innerText = digitalTime.getMinutes()
    digitalSeconds.innerText = digitalTime.getSeconds()
}

setInterval(goDigital, 1000)