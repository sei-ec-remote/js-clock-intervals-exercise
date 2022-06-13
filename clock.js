const secHand = document.getElementById("second")
const minHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")


const secondsGo = () => {
    let degrees = 0

    const moveSecs = () => {
        secHand.style.transform = "rotate(" + degrees + "deg)"
        degrees+= 6
    }
    setInterval(moveSecs, 1000)

}


const minutesGo = () => {
    let degrees = 0

    const moveMins = () => {
        minHand.style.transform = "rotate(" + degrees + "deg)"
        degrees+= 0.1
    }
    setInterval(moveMins, 1000)

    
}

const hourGo = () => {
    let degrees = 0

    const moveHours = () => {
        hourHand.style.transform = "rotate(" + degrees + "deg)"
        degrees+= (1/120)
    }
    setInterval(moveHours, 1000)

    
}


secondsGo()
minutesGo()
hourGo()