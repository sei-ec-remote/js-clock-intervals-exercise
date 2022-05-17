const clock_second = document.getElementById("second");
const clock_minute = document.getElementById("minute");
const clock_hour = document.getElementById("hour");


const clock = () => {
    const currentTime = new Date();
    
    let secondCount = currentTime.getSeconds();
    let minuteCount = currentTime.getMinutes();
    let hourCount = currentTime.getHours();
    clock_second.style.transform ="rotate(" + ((secondCount / 60) * 360) + "deg)";
    clock_minute.style.transform ="rotate(" + ((minuteCount / 60) * 360) + "deg)";
    clock_hour.style.transform ="rotate(" + ((hourCount / 12) * 360) + "deg)";
}

// const intervalFunction = () => {
//     myCounter = setInterval(() => {
//         secondCount++;
//         // update seconds hand
//         clock_second.style.transform = "rotate(" + secondRotation(secondCount) + "deg)";
//         if (secondCount % 60 === 0) {
//             minuteCount++;
//             console.log(minuteCount);
//             console.log("Move minute hand");
//             clock_minute.style.transform = "rotate(" + minuteRotation(minuteCount) + "deg)";
//         }
//         if (minuteCount % 60 === 0 && minuteCount != 0 && secondCount % 60 === 0) {
//             hourCount++;
//             console.log(hourCount);
//             console.log("Move hour hand");
//             clock_hour.style.transform = "rotate(" + hourRotation(hourCount) + "deg)";
//         } 
//         console.log(secondCount)
//     }, 1000)
// }

// const secondRotation = (seconds) => {
//     return (seconds / 60) * 360
// }
// const minuteRotation = (minute) => {
//     return (minute / 60) * 360
// }
// const hourRotation = (hour) => {
//     return (hour / 12) * 360
// }

// intervalFunction();
setInterval(clock, 1000);