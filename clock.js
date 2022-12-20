const second = document.getElementById('#second')
const minute = document.getElementById('#minute')
const hour = document.getElementById('#hour')

let degreesSec = 0
let degreesMin = 0
let degreesHr = 0

secondTimer = () => {
    degreesSec = degreesSec + 6
    second.style.transform = `rotate(${degreesSec}deg)`
    if (degreesSec === 360){
        degreesSec = 0
    }
}

setInterval(secondTimer, 1000)

minuteTimer = () => {
    degreesMin = degreesMin + 6
    minute.style.transform = `rotate(${degreesMin}deg)` 
    if (degreesMin === 360){
        degreesMin = 0
    }
}

setInterval(minuteTimer, 60000)

hourTimer = () => {
    degreesHr = degreesHr + 30
    hour.style.transform = `rotate(${degreesHr}deg)`
    if (degreesHr === 360){
        degreesHr = 0
    }
}

setInterval(hourTimer, 360000)

