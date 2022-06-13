// grabbing the tags so that we can change the minutes, hours, and seconds.
const hrHand = document.querySelector("#hour")
const minHand = document.querySelector("#minute")
const secHand = document.querySelector("#second")

// tells the second hand what to do when called
const secondHand = (todayDate) => {
    const secsNow = todayDate.getSeconds()
    secHand.style.transform = `rotate(${6 * secsNow}deg)`
}
// tells the minute hand what to do when called
const minuteHand = (todayDate) => {
    const minNow = todayDate.getMinutes() + todayDate.getSeconds() / 60
    minHand.style.transform = `rotate(${6 * minNow}deg)`
}
// tells the hour hand what to do when called
const hourHand = (todayDate) => {
    const hrNow = todayDate.getHours() + todayDate.getMinutes() / 60 + todayDate.getSeconds() / 3600
    hrHand.style.transform = `rotate(${30 * hrNow}deg)`
}
// creatating a call back function
const draw = (whichHand, todayDate) => {
    whichHand(todayDate)
}
// telling the clock to work pretty much. 
setInterval((todayDate = new Date()) => {
    draw(secondHand, todayDate)
    draw(minuteHand, todayDate)
    draw(hourHand, todayDate)
}, 1000)

// MDN is really helpful accually
// notes are for me to look back on if I need help in the future.