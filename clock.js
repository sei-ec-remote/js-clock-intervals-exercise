const sec = document.getElementById('second');
const min = document.getElementById('minute');
const hr = document.getElementById('hour');


// Define and get all hands of the clock | DONE!

// create 3 timer intervals, one for sec, min and hour
// 1000ms, 60000ms, 600000ms respectively
// each time that the timer interval completes,
// it should add 1 to the variable cooresponding
// to that hand.

// create 3 functions that hold a variable

// Variable must be declared outside of the function or else variable value will be reset

// write in js, something that modifies the css of each hand individually
// the amount to increment the degree of each hand by one tick is 6deg
// for example, the css property would be: transform : rotate(6deg); for 1 tick.

// wait until DOM Content is loaded
document.addEventListener('DOMContentLoaded', () => {
let second = 0
let minute = 0
let hour = 0


function seconds () {
    second++
    sec.style.transform = "translate(0%, -300%) rotate(" + (second * 6) + "deg)"
    console.log(second)
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