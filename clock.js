  
let degrees = 45
let minuteDegrees = 45
let minuteCounter = 0
let hourCounter = 0

const clockDiv = document.getElementById("clock")
const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")


const secondRotation = (num) => {
  seconds = 360 - (num / 60 * 360)
  return seconds
}
// const minuteRotation = (minutesCalc) => {
//   minutes = 360 - (minutesCalc / 12 * 360)
//   return minutes
// }
setInterval(second = () => {
    degrees += seconds;
    secondHand.style.transform = "rotate(" + degrees + "deg)"
  }, 1000);
  
  setInterval(minute = () => {
    minuteCounter += 0.5
    minuteHand.style.transform = "rotate(" + minuteCounter + "deg)"
}, 1000)

  setInterval(hour = () => {
    hourCounter += 0.5
    hourHand.style.transform = "rotate(" + hourCounter + "deg)"
  }, 60000)

secondRotation(59)
