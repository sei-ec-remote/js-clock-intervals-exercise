//okay lets write out what I want to code
//we need to make the clock have an hour, minute and red second hand

//setting the current time
currentTime = new Date();
console.log(currentTime);



//want to make the minutes go from 0 to 60. 




// Create intervals in the JavaScript file to make the clocks tick.

let degrees = 45;


//pulling the hour info
//set the degree that it should start at
const hourElement = document.getElementById("hour")
hourElement.style.transform = "rotate(" + degrees + "deg)"

// Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties:

// It would be useful to define functions that convert seconds, minutes and hours to how many degrees the hand should be rotated around the clock!

// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360
// const seconds () => {

// }


// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360





// setInterval('clockRun');