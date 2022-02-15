
const clockHands = document.getElementsByClassName("clock")
const secondsHand = document.getElementById("second")
const hoursHand = document.getElementById("hour")
const minutesHand = document.getElementById("minute")

let seconds = 0
const secondsRotation = () => {
  console.log (seconds++)
  secondsHand.style.transform = "rotate(" + seconds + "deg)" 
}

setInterval(secondsRotation, 1000)

let minutes = 60
const minutesRotation = () => {
  console.log (minutes = (seconds++) * 6 / 360)
  minutesHand.style.transform = "rotate(" + minutes + "deg)" 
}

setInterval(minutesRotation, 1000)

let hours = 60*60
const hoursRotation = () => {
  console.log (hours = (minutes++) * 60 / 360)
  hoursHand.style.transform = "rotate(" + hours + "deg)" 
}

setInterval(minutesRotation, 1000)