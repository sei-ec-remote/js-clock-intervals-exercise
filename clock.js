//Define degrees for clock movement
//Or 360?
// let degrees = 360;


// const faceClock = document.getElementById("face")
// faceClock.style.transform = "rotate(" + degrees + "degree)"

// const hourHand = document.getElementById("hour")
// hourHand.style.transform = "rotate(" + degrees + "degree)"

// const minuteHand = document.getElementById("minute")
// minuteHand.style.transform = "rotate(" + degrees + "degree)"

// const secondHand = document.getElementById("second")
// secondHand.style.transform = "rotate(" + degrees + "degree)"


// Write code for the hour hand
//Define the hour
//12 hours is a full rotation
//360/12 = 30

// Write code for the minute hand
//Define the minute
//Minute === 60
//Minute should be 0 since that 12


// Write code for the second hand
//Define the second

//Define hands in the DOM
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const deg = 6;

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minute = day.getMinutes() * deg;
    let second = day.getSeconds()* deg;
    hourHand.style.transform = `rotate(${(hour)+(minute/12)}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    secondHand.style.transform = `rotate(${second}deg)`;
    console.log()
})

//  TEST THE CLOCK
    

