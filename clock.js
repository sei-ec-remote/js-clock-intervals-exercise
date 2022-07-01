const secondsHand = document.getElementById('second')
const minutesHand = document.getElementById('minute')
const hoursHand = document.getElementById('hour')

const clockCount = () => {
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = (now.getHours() - 12)
    const secondsRotate = seconds => {
        return ((seconds / 60) * 360)
    }
        const minutesRotate = minutes => {
        return ((minutes / 60) * 360)
    }
    const hoursRotate = hours => {
        return ((hours / 12) * 360)
    }
    secondsHand.style.transform = 'rotate(' + secondsRotate(seconds) + 'deg)'
    minutesHand.style.transform = 'rotate(' + minutesRotate(minutes) + 'deg)'
    hoursHand.style.transform = 'rotate(' + hoursRotate(hours) + 'deg)'
}
setInterval(clockCount, 1000)

clockCount()