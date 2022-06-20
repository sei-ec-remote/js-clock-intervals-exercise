const degrees = 5;
const secondHand = document.getElementById('second') 
const minuteHand = document.getElementById('minute') 
const hourHand = document.getElementById('hour') 

setInterval(() => {
    let day = new Date();
    let mm = day.getMinutes() * degrees;
    let ss = day.getSeconds() * degrees
    hourHand.style.transform = `rotate(${(hourHand)*(mm/12)}deg)`;
    minuteHand.style.transform = `rotate(${mm}deg)`;
    secondHand.style.transform = `rotate(${ss}deg)`
})