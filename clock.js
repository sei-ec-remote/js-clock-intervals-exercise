// Getting the image element of seconds by id and storing it the variable seconds.
const seconds = document.getElementById('second');
// Getting the image element of minutes by id and storing it the variable minutes.
const minutes = document.getElementById('minute');
// Getting the image element of hour by id and storing it the variable hours.
const hours = document.getElementById('hour');

// Hours calculator to convert current hour to exact degrees position of the hours hand.
const hourRotation = currentHour => (currentHour / 12) * 360;

// Minutes calculator to convert current minute to exact degrees position of the minutes hand.
const minutesRotation = num => (num / 60) * 360;

// Seconds calculator to convert current seconds to exact degrees position of the seconds hand.
const secondsRotation = num => (num / 60) * 360;

// A function to run the clock.
const startClock = () => {
    // instantiates a date object everytime the function startClock gets invoked
    let now = new Date();
    // A function to set the position of the clock hand for hour, minute and seconds.
    const setTime = () => {
      // transforms the hour hand image/element to the correct degree position based on the current hour fetched using now.getHours() and converted it into a degree value using hourRotation function.
      hours.style.transform = `rotate(${hourRotation(now.getHours())}deg)`;
      // transforms the minute hand image/element to the correct degree position based on the current minute fetched using now.getMinutes() and converted it into a degree value using minuesRotation function.
      minutes.style.transform = `rotate(${minutesRotation(now.getMinutes())}deg)`;
      // transforms the seconds hand image/element to the correct degree position based on the current seconds fetched using now.getSeconds() and converted it into a degree value using secondsRotation function.
      seconds.style.transform = `rotate(${secondsRotation(now.getSeconds())}deg)`;
    };
    setTime();
  };
  