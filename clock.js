window.addEventListener('DOMContentLoaded', () => {

const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute") 
const hourHand = document.getElementById("hour")

// const rotateSecond = () => {
//     secondHand.style.transform = 'rotate(180deg)'
// }



let second = 0 
secondRotation = () => {
 
 second++
 degSecond = (second * 6)


const rotateSecond = () => {
    secondHand.style.transform = 'rotate(' + degSecond + 'deg)'}
    rotateSecond()
}
const seconds = setInterval(secondRotation, 1000)

let minute = 0
minuteRotation = () => {
    minute++
    degMinute = (minute * .1)
    const rotateMinute = () => {
        minuteHand.style.transform = 'rotate(' + degMinute + 'deg)'}
        rotateMinute() 
}
const minutes = setInterval(minuteRotation, 1000)

let hour = 0
hourRotation = () => {
    hour++
    degHour = (hour * .5)
    const rotateHour = () => { 
        hourHand.style.transform = 'rotate(' + degHour + 'deg)'
    }
    rotateHour()
}
const hours = setInterval(hourRotation, 60000)




 


})