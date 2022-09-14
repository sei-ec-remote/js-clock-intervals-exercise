const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const timeCount = () => {
    const time = new Date()
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = (time.getHours() - 12)
    
    const secondDegree = second => {
        return((second/60) * 360)
    }
    const minuteDegree = minute => {
        return((minute/60) * 360)
    }
    const hourDegree = hour => {
        return((hour/12) * 360)
    }


secondHand.style.transform = "rotate(" + secondDegree(seconds) + "deg)"
minuteHand.style.transform = "rotate(" + minuteDegree(minutes) + "deg)"
hourHand.style.transform = "rotate(" + hourDegree(hour) + "deg)"
}
setInterval(timeCount, 1000)

document.addEventListener('DOMContentLoaded', timeCount)
