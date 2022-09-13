// I added the realtime functionality because I found it more involved to do that then setup arbitrary timing loops
secondRotation = (seconds) => {
    let angle = (seconds / 60) * 360
    document.getElementById("second").style.transform = 'rotate(' + angle + 'deg)'
}

minuteRotation = (minutes, seconds) => {
    let angle = (minutes / 60) * 360 + (seconds / 60) / 60 * 360
    document.getElementById("minute").style.transform = 'rotate(' + angle + 'deg)'
}

hourRotation = (hour, minutes) => {
    let angle = (hour / 12) * 360 + (minutes / 60 ) / 12 * 360 
    document.getElementById("hour").style.transform = 'rotate(' + angle + 'deg)'
}

setInterval(() => {  
    let d = new Date();
    secondRotation(d.getSeconds())
    minuteRotation(d.getMinutes(), d.getSeconds())
    hourRotation(d.getHours(), d.getMinutes())
}, 500)