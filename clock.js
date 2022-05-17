
const hourHand = document.getElementById("hour")
const minuteHand = document.getElementById("minute")
const secondHand = document.getElementById("second")

let degree = 0
function rotateSeconds(){
    secondHand.style.transform = "rotate(" + degree + "deg)"
    degree += 6
}

let degree1 = 0
function rotateMinutes(){
    minuteHand.style.transform = "rotate(" + degree1 + "deg)"
    degree1 += 6
}


let degree2 = 0
function rotateHours(){
    hourHand.style.transform = "rotate(" + degree2 + "deg)"
    degree2 += 30
}
setInterval(rotateSeconds, 1000)
setInterval(rotateMinutes, 60000)
setInterval(rotateHours, 1000 * 60 * 60)