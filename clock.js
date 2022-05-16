const faceClock = document.getElementById("face");
const hourHand =document.getElementById("hour");
const minHand =document.getElementById("minute");
const secHand = document.getElementById("second");
//const deg = 6

//console.log(hour)



setInterval(() => {

let date = new Date();
let hour = date.getHours ();
let min = date.getMinutes ();
let sec = date.getSeconds ();

hourRotate = 30 * hour + min /2;
minRotate = 6 * min;
secRotate = 6 * sec;

hourHand.style.transform = "rotate(" +hourRotate +"deg)";
minHand.style.transform = "rotate(" +minRotate + "deg)";
secHand.style.transform = "rotate(" +secRotate + "deg)";
}, 1000);
