//okay lets write out what I want to code
//we need to make the clock have an hour, minute and red second hand

//this is a global varible 
secondElement = document.getElementById("second");
// //pulling the hour info
hoursElement = document.getElementById("hour")
//pulling the minute info
minuteElement = document.getElementById("minute")


const runClock = () => {
    //setting the current time
const currentTime = new Date();
//how we access the seconds, minutes and hours
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
  console.log(currentTime);
  //needed to add seconds over 60 since that tells the computer where to put the second hand
  secondElement.style.transform = "rotate(" + ((seconds/60) * 360) + "deg)";
//minute hand 
  minuteElement.style.transform = "rotate(" + (minutes/60) * 360 + "deg)";
//hour hand rotating
  hoursElement.style.transform = "rotate(" + (hours/12) * 360 + "deg)";

};


setInterval(runClock, 1000);

