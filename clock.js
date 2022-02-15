const hourImg = document.querySelector('#hour')
const minuteImg = document.querySelector('#minute')
const secondImg = document.querySelector('#second')

const secondRotation = (seconds) => {
    return (seconds / 60) * 360
}

const hourRotation = (hours) => {
    return (hours / 12) * 360
}

const setClock = () => {
    const time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours() - 12

    let secDeg = secondRotation(seconds)
    let minDeg = secondRotation(minutes)
    let hourDeg = hourRotation(hours)

    console.log(`Hour: ${hours} Minutes: ${minutes} Seconds: ${seconds}`)

    secondImg.style.transform = "rotate(" + secDeg + "deg)"
    minuteImg.style.transform = "rotate(" + minDeg + "deg)"
    hourImg.style.transform = "rotate(" + hourDeg + "deg)"

    setTimeout(setClock, 1000)
}

setClock()
