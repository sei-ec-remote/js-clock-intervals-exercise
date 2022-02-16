// console.log('this is a line')
// 
// id seleced for hour, minutes, and second
const hourHand = document.querySelector('#hour')
const minuteHand = document.querySelector('#minute')
const secondHand = document.querySelector('#second')

// create rockClock function
function runClock() {
    // new Date(get )
    const now = new Date()
        // getSeconds to return the seconds 
    const seconds = now.getSeconds()
    console.log('local time seconds:', seconds)
    const secondsDegrees = ((seconds / 60) * 360) + 90
    console.log('this is the degrees in 6 degree interval', secondsDegrees)
        // position of the hands by using degrees

    // needed to look this up and still do not understand how this works?
    secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)'
    console.log('imputing degrees as css properties', secondHand)

    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)'

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)'
}
// set interval for what time the function should intiate /1s
setInterval(runClock, 1000)

// invoke runaClock for function to run
runClock()


// make function for clock to tick