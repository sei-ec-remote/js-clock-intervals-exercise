let degrees = 6
let hr = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('second')

// let secondsDegrees = 6
// let minutesDegrees = 3
// let hourDegrees = 1.5

// const rotateSeconds = () => {
//     sec.style.transform = `rotate(${secondsDegrees}deg)`
//     secondsDegrees = secondsDegrees + degrees
// }

// const rotateMinutes = () => {
//     min.style.transform = `rotate(${minutesDegrees}deg)`
//     minutesDegrees = minutesDegrees + degrees / 2
// }

// const rotateHours = () => {
//     hr.style.transform = `rotate(${hourDegrees}deg)`
//     hourDegrees = hourDegrees + degrees / 4
// }

// setInterval(rotateSeconds, 1000)
// setInterval(rotateMinutes, 30000)
// setInterval(rotateHours, 900000)


///// BONUS /////

setInterval(() => {
    let day = new Date()
    let hour = day.getHours() * 30
    let minute = day.getMinutes() * degrees
    let second = day.getSeconds() * degrees

    hr.style.transform = `rotate(${(hour)+(minute/12)}deg)`
    min.style.transform = `rotate(${minute}deg)`
    sec.style.transform = `rotate(${second}deg)`
})