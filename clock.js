const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const toggle = document.getElementById("toggle")
let hours
let minutes
let seconds
let hr = 0
let min = 0
let sec = 0
let toggleClock
//hand rotation
function hourRotation (degrees){
    hr+=degrees
    hour.style.transform = "rotate(" + hr + "deg)"
}
function minuteRotation (degrees){
    min+=degrees
    minute.style.transform = "rotate(" + min + "deg)"

}
function secondRotation (degrees){
    sec+=degrees
    second.style.transform = "rotate(" + sec + "deg)"
}
//start time interval
function startTime (){
    if(toggleClock === true){
        hours = setInterval(hourRotation,21600000, 30)
        minutes = setInterval(minuteRotation,60000,6)
        seconds = setInterval(secondRotation,1000,6)
    }
}
//end time interval
function stopTime (){
    clearInterval(hours)
    clearInterval(minutes)
    clearInterval(seconds)
    hours = null
    minutes = null
    seconds = null
}
//toggle time start/stop
toggle.addEventListener("click", function (){
    if(toggleClock===true){
        stopTime()
        toggleClock = false
    }else{
        toggleClock = true
        startTime()
    }
})