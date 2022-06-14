const deg = 10;
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById('second');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hourHand.style.transform = `rotate(${(hourHand)*(mm/12)}deg)`;
    minuteHand.style.transform = `rotate(${mm}deg)`;
    secondHand.style.transform = `rotate(${ss}deg)`
})
