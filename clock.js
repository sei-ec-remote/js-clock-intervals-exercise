const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")

let degrees = 0;



const secondMove = () => {
    degrees+=6
    secondHand.style.transform = "rotate(" + degrees + "deg)"
    return degrees
}
const minuteMove = () => {
    degrees+=6
    minuteHand.style.transform = "rotate(" + degrees + "deg)"
    return degrees
}
const hourMove = () => {
    degrees+=6
    hourHand.style.transform = "rotate(" + degrees + "deg)"
    return degrees
}

const countSecond = setInterval(secondMove, 1000)
const countMinute = setInterval(minuteMove, 60000)
const countHour = setInterval(hourMove, 720000)
//720000 was used so that the hourHand will gradually move instead of jumping to each hour

