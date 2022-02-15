const hourHand = document.getElementById('hour')
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
// const currentTime = new Date()

const secondRotation = (second) => {
    return (second / 60) * 360
}

const minuteRotation = (minute) => {
    return (minute / 60 ) * 360    
}

const hourRotation = (hour) => {
    return ((hour / 12) * 360) 
}

let count = 0

const rotateSecond = setInterval(() => {
    //counting up and converting it with degreeSeconds function to a degree
    count ++ 
    secondHand.style.transform = `rotate(${secondRotation(count)}deg)`
   
}, 1000)

//minute rotate
const rotateMinute = setInterval(() => {
    //counting up and converting it with degreeMinutes function to a degree
    count ++ 
    minuteHand.style.transform = `rotate(${minuteRotation(count)}deg)`
    
}, 60000)

// hours rotate
const rotateHour = setInterval(() => {
    //counting up and converting it with degreeMinutes function to a degree
    count ++ 
    hourHand.style.transform = `rotate(${hourRotation(count)}deg)`
    
}, 3600000)

