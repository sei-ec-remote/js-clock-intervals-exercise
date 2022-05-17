// const secHand = document.getElementById("second");
// const minHand = document.getElementById("minute");
let date = new Date();
console.log(date);
// let hour = date.getHours ();
// let min = date.getMinutes ();
// let sec = date.getSeconds ();


const secHand = document.getElementById("second");
let sec = date.getSeconds ();
let degS =sec * 6;
setInterval(function(){
    secHand.style.transform="rotate(" +degS + "deg)";
    degS=(degS+1)
},166.6666666666666666666666666666);

const minHand = document.getElementById("minute");
let min = date.getMinutes ();
let degM=min*6+sec/12;
setInterval(function(){
    minHand.style.transform="rotate(" + degM + "deg)";
    degM=(degM+.1)
},1000);

const hrHand = document.getElementById("hour");
let hour = date.getHours ();
let degH=hour*10+min/12+30;

setInterval(function(){

    hrHand.style.transform="rotate(" +degH + "deg)";
    degH=(degH+.01)

},1200);


