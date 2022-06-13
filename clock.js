const hourHand = document.getElementById('hour')
const minuteHand = document.getElementById('minute')
const secondHand = document.getElementById('second')

setInterval(() => {
    const deg = 6 // 6 degree per second -the base ticking :)

    let clock = new Date() // fetch live time from the server

    hourHand.style.transform = `rotate(${clock.getHours() * 30}deg)` // get the hour hand element and move it 30 degree each hour
    minuteHand.style.transform = `rotate(${clock.getMinutes() * deg}deg)` // get the minute hand and move it 6 degree per minute
    secondHand.style.transform = `rotate(${clock.getSeconds() * deg}deg)` // get the seconds hand and move it 6 degree per second
    })
