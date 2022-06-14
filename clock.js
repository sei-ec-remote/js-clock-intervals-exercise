function setDate() {
    const now = new Date()

const seconds = now.getSeconds()
const secondsDegrees = ((seconds / 60) * 360)
second.style.transform = `rotate(${secondsDegrees}deg)`

const mins = now.getMinutes()
const minsDegrees = ((mins / 60) * 360)
minute.style.transform = `rotate(${minsDegrees}deg)`

const hours = now.getHours()
const hourDegrees = ((hours / 12) * 360)
hour.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)

setDate()