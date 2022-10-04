setInterval(setClock, 1000)

//first get element to be able to do stuff with it
const hourRotation = document.getElementById("hour")
const minuteRotation = document.getElementById("minute")
const secondRotation = document.getElementById("second")

function setClock () {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() /60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12
    
    setRotation(secondRotation, seconds)
    setRotation(minuteRotation, minutes)
    setRotation(hourRotation, hours)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()



