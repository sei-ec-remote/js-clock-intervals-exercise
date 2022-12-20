// It would be useful to define functions that convert seconds, 
// minutes and hours to how many degrees the hand should be rotated around the clock!

// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360

// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360

const now = new Date()

const second = document.getElementById("second")
const minute = document.getElementById("minute")
const hour = document.getElementById("hour")



const secondRotation = () => {

    // 360 deg / 60 seconds = 6 degrees per second

    let seconds = now.getSeconds();

    console.log('seconds', seconds)

    return 6 * seconds

}

console.log(secondRotation())

let secondDegrees = secondRotation();

const rotate = () =>{

    second.style.transform = "rotate(" + secondDegrees + "deg)"

    secondDegrees++

}

setInterval(rotate, 1000)


const minuteRotation = () => {

    // 360 deg / 60 mins = 6 degrees per minute

    let minutes = now.getMinutes();

    console.log('minutes', minutes)

    return 6 * minutes
}

console.log(minuteRotation())

let minuteDegrees = minuteRotation()

const rotateMinute = () =>{

    minute.style.transform = "rotate(" + minuteDegrees + "deg)"

    minuteDegrees++

}

rotateMinute()

setInterval(rotateMinute, 60000)

const hourRotation = () => {

    let hours = now.getHours()

    if (hours > 12) {
        
        hours = hours - 12;
    }
    
    // 360 / 12hr = 30
    return hours * 30
}

let hourDegrees = hourRotation()

console.log(hourDegrees)

const rotateHour= () => {

    hour.style.transform = "rotate(" + hourDegrees + "deg)"

    hourDegrees++

}
rotateHour()

setInterval(hourRotation, 1000 )