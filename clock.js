// Second hand
secondHand = document.getElementById("second");

// Minute hand
minuteHand = document.getElementById("minute");

// Hour hand
hourHand = document.getElementById("hour");

// Second hand's current location
let secondLoc = 0;

// Minute hand's current location
let minuteLoc = 0;

// Hour hand's current location
let hourLoc = 0;

// Rotate second hand
function second() {
    console.log(`Ran function second`);
    secondHand.style.transform = `rotate(${secondLoc}deg)`;
    secondLoc += 6;
    if (secondLoc === 360) {
        secondLoc -= 360;
    }
}

// Rotate minute hand
function minute() {
    console.log(`Ran function minute`);
    minuteHand.style.transform = `rotate(${minuteLoc}deg)`;
    minuteLoc += .1;
    if (minuteLoc === 360) {
        minuteLoc -= 360;
    }
}

// Rotate hour hand
function hour() {
    console.log(`Ran function hour`);
    hourHand.style.transform = `rotate(${hourLoc}deg)`;
    // hourLoc += (.1/60.0);
    hourLoc += (0.1/12.0);
    if (hourLoc === 360) {
        hourLoc -= 360;
    }
}

// Use callback function to rotate specified hand
function rotate(hand) {
    setInterval(hand, 1000);
}

// Runs the rotate functions (to run indefinitely)
rotate(second);
rotate(minute);
rotate(hour);