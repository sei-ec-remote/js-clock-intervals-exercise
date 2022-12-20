// Using DOM for second hand
const secondHand = document.querySelector('#second')
// Using DOM for minute hand
const minuteHand = document.querySelector('#minute')
// Using DOM for hour hand
const hourHand = document.querySelector('#hour')


//Creating function to current date/time
const getTime = () => {
    // used console.log to verify current date/time
    const currentDateTime = new Date();
    //console.log(`${now}`)
    const seconds = currentDateTime.getSeconds()
    //console.log(`${seconds}`)
    const minutes = currentDateTime.getMinutes()
    //console.log(`${minutes}`)
    const hours = currentDateTime.getHours()
    //console.log(`${hours}`)
    
    // using DOM to access CSS to rotate hands
    // 360 (degrees) / 60 (mins/hr & seconds/min) = 6
    // seconds * 6 to get the correct degree for current seconds
    secondHand.style.transform = 'rotate(' + (seconds * 6) + 'deg)'
    // minutes * 6 to get the correct degree for current minutes of time
    minuteHand.style.transform = 'rotate(' + (minutes * 6) + 'deg)'
    // 360 (degrees) / 12 (hours in an analog clock) = 30
    //hours * 30 to get the correct degrees for current hour of the time
    hourHand.style.transform = 'rotate(' + (hours * 30) + 'deg)'

}

// set interval to change every 1 second
setInterval(getTime, 1000)