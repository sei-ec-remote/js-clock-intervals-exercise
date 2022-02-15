// This assignment will display the hands of a clock in the correct order
//  and position using html and css.
//  It will actually show the Actual Time. It will also work like a clock 
//  where the seconds hand is counting in intervals.  Each tick on the
//  clock is 6 degrees of angle. It will modify the CSS for the hands
//  and transform the rotation showing the hands as they rotate to new
//  degree angles on the clock.


//  Initialize the hour, minute and second hands and store.
//  Using the degree of 6 means we can fine tune the hands of the clock
//    to a better interval rather than using 45.  Each second on the clock
//    is 6 degrees and 5 minutes is 30 degrees.  
const degree = 6;
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// This function calculate the second hand degree position.
//   15 seconds is 90 degrees, 30 seconds is 180 degrees. 
const secondsRotation = (seconds) => {

    // return the degree for the seconds hand
    return (seconds * degree);
}

// This function calculates the minute hand degree position.
//   15 minutes is 90 degrees, 30 minutes is 180 degrees.
const minuteRotation = (minutes) => {

     // Return the degree for the minute hand.
    return (minutes * degree);

}

// This function calculate the hour hand degrees.  It does not take into
//   account the extra degree positions from the minute hand.
//   Hours goes by a 24 hour clock 8pm is 600 degrees.
const hourRotation = (hour) => {

    // Return the hours hand in degrees. Remember for hours it is a 24 hour
    //  clock so the hour of 8pm is 20 hours so the return 
    return (hour * 30);
}

// This function is the main function that will get the current date and time
//   and from the current hour, minutes and seconds - will transform 
//   these values into degrees of the hands on a clock and then
//   set the css styling to transform the hands so the clock will appear
//   as if it is moving.
const setClockHands = () => {

    // Retrieve the actual Date which contains the hour, minute and seconds
    //  time.
    const now = new Date();
    const minutes = now.getMinutes();

    // Given the values for Hours, Minutes and Seconds
    //  call the functions to calculate the degrees.
    const secondsDegrees = secondsRotation(now.getSeconds());
    const minuteDegrees = minuteRotation(minutes);
    let hourDegrees = hourRotation(now.getHours());

    // Adjust the hour hand positioning to take into consideration the
    //   minute hand placement and how the hour hand must move a few degrees
    hourDegrees = hourDegrees + (minutes/12);

    // Change the styling on the images for hour, minute and second.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;    
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setClockHands, 1000);
  setClockHands();