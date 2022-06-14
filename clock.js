let timeSeconds = 0
let timeMinutes = 0
let timeHours = 0
//grab elements of clock
secondsHand = document.querySelector('#second')
minutesHand = document.querySelector('#minute')
hoursHand = document.querySelector('#hour')

// function to count up seconds
const secondsCount = () => {
    timeSeconds++
    //rotate minute hand
    let degrees = ((timeSeconds / 60) * 360)
    secondsHand.style.transform = "rotate(" + degrees + "deg)"
}
//count up minutes
const minutesCount = () => {
    timeMinutes++
    //rotate minute hand
    let degrees = ((timeMinutes / 60) * 360)
    minutesHand.style.transform = "rotate(" + degrees + "deg)"
}
//count up hours
const hoursCount = () => {
    timeHours++
    //rotate hours hand
    let degrees = ((timeHours / 720) * 360)
    hoursHand.style.transform = "rotate(" + degrees + "deg)"
}
const intervalSeconds = setInterval(secondsCount, 1000)

const intervalMinutes = setInterval(minutesCount, 60000)

const intervalHours = setInterval(hoursCount, 60000)

intervalSeconds
intervalMinutes
intervalMinutes

//move hour hand (count / 12) * 360
//move minute hand (count / 60) * 360
//move second hand (count / 60) * 360