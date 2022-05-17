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

//Create a function that will execute counter for seconds.
const secondsStart = () => {
    secondsCounter = setInterval(() => {
        countSeconds++;
        console.log(countSeconds);
    }, 1000);
    if (countSeconds % 6 === 0) {
        secondsIMG.style.transform = "rotate(" + degrees + "deg)"
    }
    return countSeconds;
}
secondsStart();


hoursIMG.style.transform = "rotate(" + degrees + "deg)"
minutesIMG.style.transform = "rotate(" + degrees + "deg)"
secondsIMG.style.transform = "rotate(" + degrees + "deg)"
