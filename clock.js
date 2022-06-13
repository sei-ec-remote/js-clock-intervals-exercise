let degrees = 45
const secHand = document.getElementById('second')
const minHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')



const secondHand = () => {
    let time = 1

const secondsMover = () => {
    secHand.style.transform = "rotate(" + (time/60)*360 + "deg)"
    time++
}
const secondHandTimer = setInterval(secondsMover, 1000)
}


const minuteHand = () => {
    let time = 1

const secondsMover = () => {
minHand.style.transform = "rotate(" + (time/60) * 360 + "deg)"
time++
}
const minuteHandTimer = setInterval(secondsMover, 60000)
}


const hrsHand = () => {
    let time = 1

const hourMover = () => {
hourHand.style.transform = "rotate(" + (time/60) * 360 + "deg)"
time++
}
const hourHandTimer = setInterval(hourMover, 360000)

}




secondHand()
minuteHand()
hourHand()