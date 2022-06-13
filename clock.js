const secondHand = (thisDate) => {
    const secondHand = document.querySelector("#second");
    const secondsNow = thisDate.getSeconds();

    // second hand rotates 360 / 60 = 6 degrees per second
    secondHand.style.transform = `rotate(${6 * secondsNow}deg)`
}

const minuteHand = (thisDate) => {
    const minuteHand = document.querySelector("#minute");
    const minutesNow = thisDate.getMinutes() + thisDate.getSeconds() / 60;

    // minute hand rotates 360 / 60 = 6 degrees per minute
    minuteHand.style.transform = `rotate(${6 * minutesNow}deg)`;
}

const hourHand = (thisDate) => {
    const hourHand = document.querySelector("#hour");
    const hoursNow = thisDate.getHours() + thisDate.getMinutes() / 60 + thisDate.getSeconds() / 3600;

    // hour hand rotates 360 / 12 = 30 degrees per hour
    hourHand.style.transform = `rotate(${30 * hoursNow}deg)`;
}

const draw = (drawHand, thisDate) => {
    drawHand(thisDate);
}

document.addEventListener("DOMContentLoaded", () => { 
    setInterval((thisDate = new Date()) => {
        draw(secondHand, thisDate);
        draw(minuteHand, thisDate);
        draw(hourHand, thisDate);
    }, 1000);
})    