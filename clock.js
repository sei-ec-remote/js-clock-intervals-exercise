// Second hand
secondHand = document.getElementById("second");

// Second hand's current location
secondLoc = 0;

// Minute hand's current location
minuteLoc = 0;

// Hour hand's current location
hourLoc = 0;

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


// Rotate hour hand


// Use callback function to rotate specified hand
function rotate(hand) {
    setInterval(hand, 1000);
}

// Runs the rotate functions (to run indefinitely)
rotate(second);