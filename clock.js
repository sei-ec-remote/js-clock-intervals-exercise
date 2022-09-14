const secondHand = document.querySelector("#second")
const minuteHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")
const clockFace = document.querySelector("#face")
const digitalHour = document.querySelector("#dhour")

const digitalMinute = document.querySelector("#dminute")

const setDate = ()=> {
const now = new Date()
//second hand rotation
const seconds = now.getSeconds()
const secondsDegrees = ((seconds/60) * 360)
//console.log(seconds)
secondHand.style.transform =`rotate(${secondsDegrees}deg)`
//minute hand rotation
const minutes = now.getMinutes()
const minuteDegrees = ((minutes/60) * 360)
//console.log(minutes)
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
// hour hand rotation
const hours = now.getHours()
const hourDegrees = ((hours/12) * 360)
hourHand.style.transform = `rotate(${hourDegrees}deg)`
//console.log(hourDegrees)




}
setInterval(setDate,1000)

const makeDigitalClock = () => {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes()
    let digitalClock = document.createElement("h1")

if (hours <= 12){
    digitalClock.textContent = `${hours} : ${minutes} AM`}
    else{
        hours = hours - 12
        digitalClock.textContent = `${hours} : ${minutes} PM`}

const dClock = document.getElementById('digital')
dClock.appendChild(digitalClock)

digitalClock.style.fontSize = "72px"

digitalClock.style.textAlign = "center"
}
makeDigitalClock()
