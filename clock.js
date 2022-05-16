// Second hand
let secondHand = document.querySelector('#second');
secondHand = document.getElementById('second');
console.log(secondHand);

// Rotate second hand
function second() {
    console.log(`Ran function second`);
}

// Rotate minute hand


// Rotate hour hand


// Use callback function to rotate specified hand
function rotate(hand) {
    setTimeout(hand, 1000);
    setTimeout(hand, 2000);
    setTimeout(hand, 3000);
    setTimeout(hand, 4000);
}

// 
rotate(second);