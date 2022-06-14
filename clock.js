let degrees = 45; 
const face = document.getElementById("face")
const secHand = document.getElementById("second")
const minHand = document.getElementById("minute")
const hrHand = document.getElementById("hour")

const secondHand = () => {
    let time = 1;
    const sHandMover = () => {
        secHand.style.transform = "rotate(" + (time/60) * 360 +
         "deg)"
        time++
    }
    const secondHandTimer = setInterval(sHandMover, 1000)
}

secondHand()

const minuteHand = () => {
    let time = 1;
    const mHandMover = () => {
        minHand.style.transform = "rotate(" + (time/60) * 360 +
        "deg)"
       time++
    }
    const minuteHandTimer = setInterval(mHandMover, 60000)
}

minuteHand()

const hourHand = () => {
    let time = 1;
    const hHandMover = () => {
        hrHand.style.transform = "rotate(" + (time/60) *360 +
         "deg)"
        time++
    }
    const secondHandTimer = setInterval(hHandMover, 360000)
}

hourHand()

