const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

const timeCount = () => {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = (time.getHours() - 12)

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
    hourHand.style.transform = "rotate(" + hourDegree(hours) + "deg)"
}
setInterval(timeCount, 1000)

document.addEventListener('DOMContentLoaded', timeCount)
