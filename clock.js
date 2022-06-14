const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const updateTime = () => {
    //we need a setInterval function that rotates
    //every second
    let sec = new Date().getSeconds() //getSeconds returns the seconds in a specific date
    let min = new Date().getMinutes()
    let hour = new Date().getHours()

    const degreesSec = sec * 6
    secondHand.style.transform = `rotate(${degreesSec}deg)`

    const degreesMinute = min * 6
    minuteHand.style.transform = `rotate(${degreesMinute}deg)`
    
    if (hour > 12) {
        hour = hour - 12
    }
    const degreesHour = hour * 6
    hourHand.style.transform = `rotate(${degreesHour}deg)`

    console.log(hour)
}
setInterval(updateTime, 1000)