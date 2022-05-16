//okay lets write out what I want to code
//we need to make the clock have an hour, minute and red second hand

//setting the current time
currentTime = new Date();
//how we access the seconds, minutes and hours
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();

console.log(currentTime);
//this is a global varible 
secondElement = document.getElementById("second");
// //pulling the hour info
hoursElement = document.getElementById("hour")
//pulling the minute info
minuteElement = document.getElementById("minute")



let degrees = 45;

const runClock = () => {
  console.log(seconds);
//   secondElement.style.transform = "rotate(" + (i / 60) * 360 + "deg)";
//   hoursElement.style.transform = "rotate(" + degrees + "deg)";
//   minuteElement.style.transform = "rotate(" + degrees + "deg)";


//   secondRotation(0) // returns 0
//   secondRotation(59) // returns (59 / 60) * 360


};

//take function to run and how often to run
//
setInterval(runClock, 1000);


// name = "Katy";
// console.log("Hello " + name + "!")


// const everySecond (currentTime) => {




console.log()

// }



//want to make the minutes go from 0 to 60.

// Create intervals in the JavaScript file to make the clocks tick.

// Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties:

// It would be useful to define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!


// const seconds () => {

// }


// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360





// setInterval('clockRun');