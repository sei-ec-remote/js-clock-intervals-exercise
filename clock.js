function setTime() {
    const now = new Date();
    const hours = now.getHours() % 12
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    hoursHand.style.transform = `rotate(${30 * hours}deg)`
    minutesHand.style.transform = `rotate(${6 * minutes}deg)`
    secondsHand.style.transform = `rotate(${6 * seconds}deg)`
}

setInterval(setTime, 1000)

const hoursHand = document.getElementById('hour')
const minutesHand = document.getElementById('minute')
const secondsHand = document.getElementById('second')
