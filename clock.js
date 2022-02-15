const sec = document.getElementById("#second")
const min = document.getElementById("#minute")
const hour = document.getElementById("#hour")


secondRotation = 6 ;
minuteRotation = 72 ;
hourRotation = 126 ;

const secondHand = () => {
    document.querySelector("#second").style.transform = `rotate(${secondRotation}deg)` ;
    secondRotation += 6
}

const minuteHand = () => {
    document.querySelector("#minute").style.transform = `rotate(${minuteRotation}deg)` ;
    minuteRotation += 6
}

const hourHand = () => {
    document.querySelector("hour").style.transform = `rotate(${hourRotation}deg)`
    hourRotation += 6
}

setInterval(secondHand, 1000)
setInterval(minuteHand, 60000)
setInterval(hourHand, 720000 )


// for each hour there are 5 ticks, each tick is 6 degrees. so 60 / 5 = 12. for every 12 minutes it should move 1 tick