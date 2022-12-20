const second = document.getElementById('second')
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')

let now = new Date ()
let counter = (now.getSeconds()+(now.getMinutes()*60)+(now.getHours()*3600))

//previous method for EST using Date.now()
//let counter = ((Date.now()/1000)-18000)

const secondRotation = (num) => {
    return (((num%60)/60)*360)
}

const minuteRotation = (num) => {
    return (((num%60)/60)*360)
}

const hourRotation = (num) => {
    return (((num%12)/12)*360)
}

const rotate = () => {
    counter += 1
    const degrees = secondRotation(counter)
    second.style.transform = "rotate(" + degrees + "deg)"
    const degreesMin = minuteRotation(counter/60)
    minute.style.transform = "rotate(" + degreesMin + "deg)"
    const degreesHr = hourRotation(counter/3600)
    hour.style.transform = "rotate(" + degreesHr + "deg)"
}
//console.log(Date.now())
const tick = setInterval(rotate,1000)