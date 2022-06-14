const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

const timeCount = () => {
    //counting up 1 at a time
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = (now.getHours() - 12)
    // function for second hand rotation
    const secondRotation = seconds => {
        return((seconds / 60) * 360)
    }   
    // how much minutes hand should move
    const minuteRotation = minutes => {
        return((minutes / 60) * 360)
    }
    //how much hours hand should move
    const hoursRotation = hours => {
        return((hours / 12) * 360)
    }
    

    secondHand.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)'
    minuteHand.style.transform = 'rotate(' + minuteRotation(minutes) + 'deg)'
    hourHand.style.transform = 'rotate(' + hoursRotation(hours) + 'deg)'
    
}

setInterval(timeCount, 1000)

document.addEventListener('DOMContentLoaded', timeCount)
