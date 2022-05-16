// The setInterval() method calls a function at specified intervals (in milliseconds).

setInterval(() => {
    date = new Date(); // new Date() creates a new date object with the current date and time:
    hr = date.getHours();
    min = date.getMinutes(); //getMinutes() returns the minutes (0 to 59) of a date. simlar to gethour() and getSeconds()
    sec = date.getSeconds();
    hourRotation = 30 * hr + min / 2; //im setting this variable to === 30 multiplied by the current hour. // same with min and seconds with respective numbers. 
    minuteRotation = 6 * min;
    secondRotation = 6 * sec;
//   just add some css sause with some pro-level iteration and you've got a pro working clock
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
});