let second = 0;
let minute = 0;
let hour = 0;


let seconds = document.getElementById('second')
let minutes = document.getElementById('minute')
let hours = document.getElementById('hour')

// time function

const runTime = () => {
    second++ 
    seconds.style.transform = `rotate(${second}deg)`
    console.log(second)
    if (second % 60 === 0){
        second++
        minute++
        minutes.style.transform = `rotate(${minute}deg)`
    }
    if (hour % 60 === 0){
        hour++
        hours.style.transform = `rotate(${hour}deg)`
    }
   console.log(second, minute, hour)
}




const intervalTimer = setInterval(runTime, 1000)
// 1000 = 1 second, 60,000 = minute, 3,600,000 = hour

// every 

runTime()

