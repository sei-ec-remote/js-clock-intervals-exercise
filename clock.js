
const hourHand = document.getElementById("hour")
const minuteHand = document.getElementById("minute")
const secondHand = document.getElementById("second")

let degree = 0
function rotateSeconds(){
    degree += 6
    secondHand.style.transform = "rotate(" + degree + "deg)"
}

let degree1 = 0
function rotateMinutes(){
    degree1 += 6
    minuteHand.style.transform = "rotate(" + degree1 + "deg)"
}


let degree2 = 0
function rotateHours(){
    degree2 += 30
    hourHand.style.transform = "rotate(" + degree2 + "deg)"
}
setInterval(rotateSeconds, 1000)
setInterval(rotateMinutes, 60000)
setInterval(rotateHours, 1000 * 60 * 60)