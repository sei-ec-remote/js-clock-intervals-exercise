//Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties

//document.body.style.backgroundColor='red'
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

//Create intervals in the JavaScript file to make the clocks tick.


let second = 0
const secondRotate = setInterval(() => {
    console.log(second++)
    const degree_s = (second * 6)
    secondHand.style.transform = "rotate(" + degree_s + "deg)"
    
}, 1000);

// setTimeout(() =>{ 
   // clearInterval(secondRotate )
// }, 60 )





//make minute hand moves
let minute = 0
const minuteRotate = setInterval(() => {
    console.log(minute++)
    const degree_m = (minute * 6) 
    minuteHand.style.transform = "rotate(" + degree_m + "deg)"

}, 60000)

//make hour moves
let hour = 0
const hourRotate = setInterval(() => {
    console.log(hour++)
    const degree_h =(hour * 30) 
    hourHand.style.transform = "rotate(" + degree_h + "deg)"
}, 3600000)



