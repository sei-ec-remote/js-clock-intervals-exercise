



const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")


let seconds = 0;
const tickSec = () => {
    setInterval(() => {
    degSec = seconds / 60 * 360
    second.style.transform = "rotate(" + degSec + "deg)"
    seconds++
}, 1000) }

tickSec()


let minutes = 0;
const tickMin = () => {
    setInterval(() => {
    degMin = minutes / 60 * 360
    minute.style.transform = "rotate(" + degMin + "deg)"
    minutes++
}, 6000) }

tickMin()


let hours = 0;
const tickHour = () => {
    setInterval(() => {
    degHour = hours / 12 * 360
    hour.style.transform = "rotate(" + degHour + "deg)"
    hours++
}, 36000000) }

tickHour()
















