// initialize second variable to 0
let second = 0;
// initialize minute variable to 0
let minute = 0;
// initialize hour variable to 0
let hour = 0;
// initialize date variable to get the current time
let date = new Date();

// 
setInterval(() => {
    // date variable pulls in the real-time time
    date = new Date();
    // use .getSeconds built in function to pull in the real-time seconds and multiply by 6 (360/60) to change to degrees of the circle
    second = date.getSeconds() * (360/60);
    // use .getMinutes built in function to pull in the real-time minutes and multiply by 6 (360/60) to change to degrees of the circle
    minute = date.getMinutes() * (360/60);
    // use .getHours built in function to pull in the real-time hours and multiply by 30 (360/12) to change to degrees of the circle
    hour = date.getHours() * (360/12);
    // use document.getElementById to link to the second hand Id and transform to rotate the hand at the interval of the second variable
    document.getElementById("second").style.transform = "rotate(" + second + "deg)";
    // use document.getElementById to link to the minute hand Id and transform to rotate the hand at the interval of the minute variable
    document.getElementById("minute").style.transform = "rotate(" + minute + "deg)";
    // use document.getElementById to link to the hour hand Id and transform to rotate the hand at the interval of the hour variable
    document.getElementById("hour").style.transform = "rotate(" + hour + "deg)";
}, 1000)