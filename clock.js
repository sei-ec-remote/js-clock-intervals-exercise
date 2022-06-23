//Get DOM that I need to move for the clock
const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

const currentTime = () => {
    //change the starting point on tracker to corrent time.
    const now = new Date()
    const cerrentHour = now.getHours() % 12
    const cerrentMinute = now.getMinutes()
    const cerrentSecond = now.getSeconds()
    secondTracker = (360/60) * cerrentSecond
    minuteTracker = (360/60) * cerrentMinute
    hourTracker = (360/12) * cerrentHour
    hourHand.style.transform = `rotate(${hourTracker}deg)`
    minuteHand.style.transform = `rotate(${minuteTracker}deg)`
    secondHand.style.transform = `rotate(${secondTracker}deg)`
}


const justRun = () => {
    //Hand trackers
    let secondTracker = 0//(360/60) * Math.floor(Math.random()*60)
    let minuteTracker = (360/60) * Math.floor(Math.random()*60)
    let hourTracker = (360/12) * Math.floor(Math.random()*12)
    
    const secondRotation = () => { //I know I need soft code these
        secondTracker += 360/60 
        secondHand.style.transform = `rotate(${secondTracker}deg)`
    }
    const ninuteHandRotation = () => {
        minuteTracker += 360/60 
        minuteHand.style.transform = `rotate(${minuteTracker}deg)`
    }
    const hourHandRotation = () => {
        hourTracker += 360/12 
        hourHand.style.transform = `rotate(${hourTracker}deg)`
    }
    //If this app was real, I probalby should mod it by 360 because...
    //Need to sleep
    secondRotation()
    ninuteHandRotation()
    hourHandRotation()
    
    //Set my hands in motion
    const setTimer = setInterval(secondRotation, 1000)
    setInterval(ninuteHandRotation, 60000)
    setInterval(hourHandRotation, 600000*60)
}
document.addEventListener("DOMContentLoaded", justRun)
//I can't get it to run by clicking the button.
//document.getElementById('just-runs').addEventListener('click', justRun)
document.getElementById('current-time').addEventListener('click', currentTime)