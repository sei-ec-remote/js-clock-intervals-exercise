
// DOM variables
const hrHand = document.getElementById("hour")
const minHand = document.getElementById("minute")
const secHand = document.getElementById("second")


// convers min & hours to seconds
function convertMin (t) {
    return t*=60;
}

function convertHour (t) {
    if (t>12) {
        t-=12
    }
    return t*=3600;
}

//Gets the current hour,min,sec from the Date object
function updateClock () {

    // Defines the current datetime and hours/min/sec
    let now = new Date();
    let seconds =now.getSeconds();
    let hours = convertHour(now.getHours());
    let minutes = convertMin(now.getMinutes());

// Position of the hands based on the current time
    let hrPos = hours/120;
    let minPos = minutes/10;
    let secPos = seconds*6;
    console.log(hours,minutes,seconds)
    
//Transforms the clock hands to the current time
    hrHand.style.transform=`rotate(${hrPos}deg)`
    minHand.style.transform=`rotate(${minPos}deg)`
    secHand.style.transform=`rotate(${secPos}deg)`
}

//Shows correct time right when HTML loads and changes clock hands at 1 sec intervals
updateClock();
setInterval(updateClock,1000)