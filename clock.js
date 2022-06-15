 let degrees = 45;

 const el = document.getElementById(`second`, 'minute', `hour`)
 el.style.transform = "rotate(" + degrees + "deg)"

const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');

function makeClock() {
    let date = new Date();
    let hour = date.getHours() % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourHandTurns = (hour * 30) * (0.5 * minute);
    let minuteHandTurns = (minute * 6) * (0.1 * second);
    let secondHandTurns =  second * 6
    
    
    hourHand.style.transform = 'rotate(' + hourHandTurns + 'deg)';
    minuteHand.style.transform = 'rotate(' + hourHandTurns + 'deg)';
    secondHand.style.transform = 'rotate(' + hourHandTurns + 'deg)';

    };

    makeClock()
 


