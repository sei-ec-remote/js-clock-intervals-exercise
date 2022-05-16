// Getting the image element of seconds by id and storing it the variable seconds.
const seconds = document.getElementById('second');
// Getting the image element of minutes by id and storing it the variable minutes.
const minutes = document.getElementById('minute');
// Getting the image element of hour by id and storing it the variable hours.
const hours = document.getElementById('hour');

// Hours calculator to convert current hour to exact degrees position of the hours hand.
const hourRotation = currentHour => (currentHour / 12) * 360;