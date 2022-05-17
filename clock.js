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
const amOrPm = document.getElementById('amOrPm')

const goDigital = () => {
    const digitalTime = new Date()
    let hours = digitalTime.getHours()
    amOrPm.innerText = `${hours > 11 ? 'PM' : 'AM'}`
        if (hours > 12) hours = hours-12
        if (hours < 10) hours = '0' + hours
    digitalHours.innerText = hours
    let minutes = digitalTime.getMinutes()
        if (minutes < 10) minutes = '0' + minutes
    digitalMinutes.innerText = minutes
    let seconds = digitalTime.getSeconds()
        if (seconds < 10) seconds = '0' + seconds
    digitalSeconds.innerText = seconds
}

setInterval(goDigital, 1000)