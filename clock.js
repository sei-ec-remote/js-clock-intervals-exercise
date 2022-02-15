const second = document.querySelector("#second")
const minute = document.querySelector("#minute")
const hour = document.querySelector("#hour")




let time = 1


const secondRotation = (numS) => {
    return ((numS/60)*360)
}

const minuteRotation = (numM) => {
    return (((numM/60)*360)/60)
}

const hourRotation = (numH) => {
    return ((((numH/60)*360)/60)/60)*5
}

const rotateClock = (func1, func2, func3) => {
    second.style.transform = `rotate(${func1(time)}deg)`
    minute.style.transform = `rotate(${func2(time)}deg)`
    hour.style.transform = `rotate(${func3(time)}deg)`

    time++

}

setInterval(rotateClock, 1000, secondRotation, minuteRotation, hourRotation)