// Assign variables by pulling through HTML
const hour12 = document.getElementById("hour");
const minSixty = document.getElementById("minute");
const secSixty = document.getElementById("second");
// Never needed handRotate variable
// const handRotate = document.getElementsByClassName("rotate");

// Rotation formula variables --- need these to update clock face every second. Otherwise hour hand wont move for an hour.
// let minSecRotate = 6;
// let hourRotate = 360 / (12 * 60)
// 
function tickTock() {
    // Use date method to pull local time and dates
    const now = new Date();
    console.log(now);
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    secSixty.style.transform = "rotate(" + (360 *(second/60)) + "deg)";
    minSixty.style.transform = "rotate(" + (360 *(minute/60)) + "deg)";
    hour12.style.transform = "rotate(" + (360 *(hour/12)) + "deg)";
}
//Built in setInterval function, calling our function with  1s delay.
setInterval(tickTock, 1000);