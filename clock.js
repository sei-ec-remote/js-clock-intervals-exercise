
const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');

function makeClock() {
    let date = new Date();
    let hour = date.getHours() % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourHandTurns = hour * 30;
    let minuteHandTurns = minute * 6;
    let secondHandTurns =  second * 6;
    
    
    hourHand.style.transform = 'rotate(' + hourHandTurns + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteHandTurns + 'deg)';
    secondHand.style.transform = 'rotate(' + secondHandTurns + 'deg)';

    setTimeout(makeClock, 1000);

    };

    makeClock()
 


