const clock = document.querySelector("clock")
const clockFace = document.querySelector("#face")
const clockSecond = document.querySelector("#second")
const clockHour = document.querySelector("#hour")
const clockMinute = document.querySelector("minute")

// let degrees = 0; 

// const timeRotationSeconds = setInterval(() => {
//   console.log("the time is:")
//   degrees += 10
//   if (degrees === 360) {
//     degrees = 10
//   }
//   second.style.transform = "rotate(" + degrees + "deg)"
// }, 1000)

// a function to make second, minute and hour hand tick 
// make a callback function to accept seconds, minutes and hours

let secondDegrees = 45; 

const timeRotationSeconds = setInterval(() => {
  secondDegrees += 10
  if (secondDegrees === 360) {
    secondDegrees = 10
  }
  second.style.transform = "rotate(" + secondDegrees + "deg)"
}, 1000)

let hourDegrees = 45; 

const timeRotationHours = setInterval(() => {
  hourDegrees += 10
  if (hourDegrees === 360) {
    hourDegrees = 10
  }
  hour.style.transform = "rotate(" + hourDegrees + "deg)"
}, 1000 * 60)

let minuteDegrees = 45; 

const timeRotationMinutes = setInterval(() => {
  minuteDegrees += 10
  if (minuteDegrees === 360) {
    minuteDegrees = 10
  }
  minute.style.transform = "rotate(" + minuteDegrees + "deg)"
}, 1000 * 60 * 60)

document.addEventListener("DOMContentLoaded", () => {
})