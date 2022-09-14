const sec = document.getElementById("second")
const min = document.getElementById("minute")
const hour = document.getElementById("hour")





let degreesSec = 0;
const secMove = () => {
    degreesSec+=6
    sec.style.transform = "rotate(" + degreesSec + "deg)"
    console.log("sec rotate")
    return degreesSec
}

let degreesMin = 0
const minMove = () => {
    degreesMin+=6
    min.style.transform = "rotate(" + degreesMin + "deg)"
    console.log("min rotate")
    return degreesMin
}

let degreesHour = 0
const hourMove = () => {
    degreesHour+=30
    hour.style.transform = "rotate(" + degreesHour + "deg)"
    console.log("min rotate")
    return degreesHour
}



const countSec = setInterval(secMove, 1000)
const countMin = setInterval(minMove, 60000)
const countHour = setInterval(hourMove, 3600000)

secondRotation(0) // returns 0
secondRotation(59) // returns (59 / 60) * 360

hourRotation(12) // returns 0
hourRotation(5) // returns (5 / 12) * 360


secondRotation = (funcParam, variableParam) => {
    funcParam((variableParam / 60) * 360)
    
}

secondRotation()
