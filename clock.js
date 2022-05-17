//Pulling elements from the HTML into js variables.
const hoursIMG = document.getElementById("hour");
const minutesIMG = document.getElementById("minute");
const secondsIMG = document.getElementById("second")
console.log(hoursIMG);


//Adding counters that will represent the time that passes.
let countHours = 0;
let countMinutes = 0;
let countSeconds = 0;

let degrees = 6;




let secondsCounter = null;
let minutesCounter = null;

//Create a function that will execute counter for seconds. Added a conditional so that the counter resets back to 0 after a 360 rotation along with the degree rotation on HTML.
const secondsStart = () => {
    secondsCounter = setInterval(() => {
        countSeconds++;
        const secondsDegrees = ((countSeconds / 60) * 360)
        secondsIMG.style.transform = "rotate(" + secondsDegrees + "deg)"
        if (secondsDegrees === 360) {
            countSeconds = 0;
        }
        console.log(countSeconds)
    }, 1000);


    // if (countSeconds % 6 === 0) {
    //     secondsIMG.style.transform = "rotate(" + degrees + "deg)"
    // }
    // return countSeconds;
}
secondsStart();
const minutesStart = () => {
    minutesCounter = setInterval(() => {
        countMinutes++;
        const minutesDegrees = ((countMinutes / 60) * 360)
        minutesIMG.style.transform = "rotate(" + minutesDegrees + "deg)"
        if (minutesDegrees === 360) {
            countMinutes = 0;
        }
        console.log(countMinutes)
    }, 60000);
}
minutesStart();

