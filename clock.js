const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
//this function willcause the hour hand to rotate 6 deg
let secDeg=0;
let minuteDeg=0;
let hourDeg=0;

const rotaHour =() => {
    // const hourHandMov = document.getElementById("hour");
    hourHand.style.transform = `rotate(${hourDeg+1}deg)`;
    hourDeg=hourDeg+1
}

const rotaMinute =() => {
    // const minuteHandMov = document.getElementById("minute");
    minuteHand.style.transform = `rotate(${minuteDeg+6}deg)`;
    minuteDeg=minuteDeg+6;
}

const rotaSecond =() => {
    // const secondHandMov = document.getElementById("second");
        secondHand.style.transform = `rotate(${secDeg+6}deg)`;
        secDeg=secDeg+6;
}


const timeFlows = () => {
     setInterval(rotaHour, 600000);
     setInterval(rotaMinute, 60000);
     setInterval(rotaSecond, 1000);
}

timeFlows()
