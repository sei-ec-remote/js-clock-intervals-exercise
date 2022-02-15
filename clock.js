const face = document.querySelector('#face')
const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')
const rotateSec = document.querySelector('.rotateSec')
const rotateMin = document.querySelector('.rotateMin')
const rotateHour = document.querySelector('.rotateHour')


//Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties:
// let degrees = 45;
// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)"
// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360
// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360
//grab each rotate const
//need to transform the style of each rotate hand
    //use  el.style.transform = "rotate(" + degrees + "deg)" to transfer each rotate
    //need to set different degrees for each hand 
    //repeat hand rotate depending on hand 
//need to set different rotations depending on hand
    // secondRotation(0) // returns 0 - need to ++ each rotation 
    // secondRotation(59) // returns (59 / 60) * 360 
    // hourRotation(12) // returns 0
    // hourRotation(5) // returns (5 / 12) * 360

let secondsNumber = 0 
const secondCounter = setInterval(()  => {
    console.log('This shows the seconds number', secondsNumber)
    const secondRotation =  ( secondsNumber / 60) * 360
    secondsNumber++
    rotateSec.style.transform = "rotate(" + secondRotation + "deg)"
},1000)

let minuteNumber = 1
const minuteCounter  = setInterval(()  => {
    ('This shows the minutes number', minuteNumber)
const minuteRotation =  ( minuteNumber / 60) * 360
minuteNumber++
    rotateMin.style.transform = "rotate(" + minuteRotation + "deg)"
},60000)

let hourNumber = 1
const hourCounter  =  setInterval(()  => {
    console.log('This shows the hour number',hourNumber)
const hourRotation =  (hourNumber / 12) * 360
hourNumber++
    rotateHour.style.transform = "rotate(" + hourRotation + "deg)"
},3600000)


// setTimeout(() => {
//     clearInterval(secondCounter)
//   }, 1000)
  
//   setTimeout(() => {
//     clearInterval(minuteCounter)
//   }, 60000)
  
//   setTimeout(() => {
//     clearInterval(hourCounter)
//   }, 3600000)
  
