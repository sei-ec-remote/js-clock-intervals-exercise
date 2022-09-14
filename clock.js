const sec = document.getElementById('second');
const min = document.getElementById('minute');
const hr = document.getElementById('hour');

document.addEventListener('DOMContentLoaded', () => {
let second = 0
let minute = 0
let hour = 0


function seconds () {
    second++
    sec.style.transform = "translate(0%, -300%) rotate(" + (second * 6) + "deg)"
 
}

function minutes () {
    minute++
    console.log(minute)
    min.style.transform = "translate(0%, -200%) rotate(" + (minute * 6) + "deg)"
}

function hours () {
    hour++
    hr.style.transform = "translate(0%, -100%) rotate(" + (hour * 30) + "deg)"
}

setInterval(seconds, 1000)
setInterval(minutes, 60000)
setInterval(hours, 600000)
})