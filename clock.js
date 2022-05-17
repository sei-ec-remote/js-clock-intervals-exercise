let degreesHours = 0;
let degreesMinutes = 0;
let degreesSeconds = 0;
let count = 0;

//Initiates the elements in the html to be linked
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

//Finds out degrees rotated depending on hour
const hourRotation = (hours) => {
    //Always keeps clock on 12 hr time
    if(hours > 12){
        hours = hours - 12;
    }
    return (hours/12) * 360;
};
//Calculates degrees rotated for minutes
const minuteRotation = (minutes) => {
    return (minutes/60) * 360;
};
//Calculates degrees rotated seconds 
const secondRotation = (seconds) => {
    return (seconds/60) * 360;
};

//Constantly gets new time, turns it into degrees for the clock hands
const allTime = () => {
    //Find date, and time
    let date = new Date();
    //Finds degrees, sets vars to that degree
    degreesHours = hourRotation(date.getHours());
    degreesMinutes = minuteRotation(date.getMinutes());
    degreesSeconds = secondRotation(date.getSeconds());
}

/*Checks every second for change, 
changes ids on html
Makes clock "Tik"*/
setInterval(() => {
    allTime();
    hourEl.style.transform = "rotate(" + degreesHours + "deg)";
    minuteEl.style.transform = "rotate(" + degreesMinutes + "deg)";
    secondEl.style.transform = "rotate(" + degreesSeconds + "deg)";
    count++;
}, 1000);