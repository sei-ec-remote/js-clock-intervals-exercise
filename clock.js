const second = document.getElementById('second')
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')

let degreesSecond = 0
let degreesMinute = 0
let degreesHour = 0

secondTimer = () => {
    degreesSecond = degreesSecond + 6
    second.style.transform = `rotate(${degreesSecond}deg)`
    // console.log(degreesSecond)
    if (degreesSecond === 360) {
        degreesSecond = 0
    }
}

setInterval(secondTimer, 1000)

// console.log(degreesSecond)

minuteTimer = () => {
    degreesMinute = degreesMinute + 6
    minute.style.transform = `rotate(${degreesMinute}deg)`
    // console.log(degreesMinute)
    if (degreesMinute === 360) {
        degreesMinute = 0
    }
    
}

setInterval(minuteTimer, 60000)

// console.log(degreesMinute)

hourTimer = () => {
    degreesHour = degreesHour + 30
    hour.style.transform = `rotate(${degreesHour}deg)`
    // console.log(degreesHour)
    if (degreesHour === 360) {
        degreesHour = 0
    }
}

setInterval(hourTimer, 3600000)