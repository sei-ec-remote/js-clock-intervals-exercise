const sec = document.getElementById('second');
const min = document.getElementById('minute');
const hour = document.getElementById('hour');
// min.style.transform = "rotate(" + minuteRotations + "deg)"
// sec.style.transform = "rotate(" + secondRotations + "deg)"
// sec.style.transform = "rotate(" + hourRotations + "deg)"



const countSec = setInterval(() => {
  
    const todaysTime = new Date()
    console.log(`This is todays time:`, todaysTime);

    const hours = todaysTime.getHours()
    console.log(hours)
    const hourRotations = todaysTime.getHours()/24 * (360 -90);

    const secs = todaysTime.getSeconds()

    console.log(secs)
    const secondRotations = todaysTime.getSeconds()/60 * 360 - 90;

    const mins = todaysTime.getMinutes()

    console.log(`It is this time in minutes`,mins)
    const minuteRotations = todaysTime.getMinutes()/60 * 360;

    min.style.transform = "rotate(" + minuteRotations + "deg)"
   console.log(`These are the minutes`,minuteRotations)
    sec.style.transform = "rotate(" + secondRotations + "deg)"
    console.log(secondRotations)
    hour.style.transform = "rotate(" + hourRotations + "deg)"
    console.log(hourRotations)

}, 1000)





