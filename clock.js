//let degrees = 0;

const face = document.getElementById("face")

const hour = document.getElementById("hour")
//hour.style.transform = "rotate(" + degrees + "deg)"

const minute = document.getElementById("minute")
//minute.style.transform = "rotate(" + degrees + "deg)"

const second = document.getElementById("second")
//second.style.transform = "rotate(" + degrees + "deg)"

// It would be useful to define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!
// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360
// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360

const countSeconds = () => {

let timeInSeconds = 1
let degreesInMinutes = 0
let timeInHours = 0



    const printSeconds = () => {
        console.log(timeInSeconds + " degrees in a second")
        second.style.transform = "rotate(" + timeInSeconds + "deg)"
        timeInSeconds = timeInSeconds + 6
    }

    const printMinutes = () => {
        console.log(degreesInMinutes + " degrees in a minutes")
        //we have to move 30 degrees every five minutes
        //or 6 degrees every minutes
        minute.style.transform = "rotate(" + degreesInMinutes  + "deg)"
        degreesInMinutes = degreesInMinutes + 6
    }

    const printHours = () => {
        console.log(timeInHours + " degrees in a hours")
        hour.style.transform = "rotate(" + timeInHours  + "deg)"
        timeInHours = timeInHours + 30
    }
    
    setInterval(printSeconds, 1000)
    setInterval(printMinutes, 60000)
    setInterval(printHours, 3600000)

}


countSeconds()

