
// Variables to allow javascript to access html

secondHand = document.getElementById('second')
minuteHand = document.getElementById('minute')
hourHand = document.getElementById('hour')

// clock 360 / 12 = 30 clock is 360 degrees
// 1 hour equals 30 degrees
// 1 second = 6 degrees
// 1 minute = 6 degrees
setInterval(() => {
    let time = new Date()
    let oneHour = time.getHours() * 30
    let oneSecond = time.getSeconds() * 6
    let oneMinute = time.getMinutes() * 6
    // access styling for second hand and inputs degrees to rotate
    secondHand.style.transform = `rotate(${oneSecond}deg)`

    // access styling for minute hand and inputs degrees to rotate
    minuteHand.style.transform = `rotate(${oneMinute}deg)`

    //  access styling for hour hand and inputs degrees to rotate
    hourHand.style.transform = `rotate(${oneHour}deg)`
})
// I used MDN to help me understand how to better access the time rather than setting individual setIntervals in 1,000 60,000 and 3,600,000