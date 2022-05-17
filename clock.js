let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');

// initial position
let secondDg = 0;
let minuteDg = 0;
let hourDg = 0;

tick(); 
const inter = setInterval(tick,1000);

function tick(){
    
    secondDg = secondDg + 6;
    rotate(second,secondDg);

    minuteDg = minuteDg + 0.1;
    rotate(minute,minuteDg);
    
    hourDg = hourDg + 0.0083;
    rotate(hour,hourDg);
    
}

function rotate(el, degrees){
    el.style.transform = "rotate(" + degrees + "deg)";
}