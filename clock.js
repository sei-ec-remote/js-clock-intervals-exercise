let secondHand = document.getElementById("second")
let minuteHand = document.getElementById("minute")
let hourHand = document.getElementById("hour")
let degrees = 6
setInterval (()=>{
    let date = new Date()
    let currentHour = date.getHours() * 30
    let currentMin = date.getMinutes() * degrees 
    let currentSec = date.getSeconds() * degrees 

    secondHand.style.transform = `rotate(${currentSec}deg)`
    minuteHand.style.transform = `rotate(${currentMin}deg)`
    hourHand.style.transform = `rotate(${(currentHour)+ (currentMin/12)}deg)`
})



console.log(current(Time))