//defining each element

let secondHand = document.getElementById('second')
let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')



const currentTime = () => {
    let date = new Date()
    let currentHour = date.getHours()
    let currentMin = date.getMinutes()
    let currentSec = date.getSeconds()
    //console.log(currentHour)
    let time = (`Hour${currentHour}:Minute${currentMin}:Seconds${currentSec} `) 
    secondHand.style.transform = 'rotate('+ (currentSec * 6) + 'deg)'
    minuteHand.style.transform = 'rotate('+ (currentMin * 6) + 'deg)'
    hourHand.style.transform = 'rotate('+ (currentHour * 30) + 'deg)'
    
    
    console.log(`The current time is ${time}`)


}

setInterval(currentTime, 1000)








// we want each hand to move after a certain amount of time passes
// const move = () => {
//     console.log('test')


// }

// move()