const secondHand = document.getElementById("second")
const minuteHand = document.getElementById("minute")
const hourHand = document.getElementById("hour")
let secDegrees = 0;
let minDegrees = 0;
let hourDegrees = 0;

// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)";

const secondHandTick =  () => {
    secDegrees += 6
    second.style.transform = `rotate(${secDegrees}deg)`;
    console.log("second hand")
    console.log(secDegrees) 
}

setInterval(secondHandTick, 1000)

const minuteHandTick =  () => {
    minDegrees += 5
    minute.style.transform = `rotate(${minDegrees}deg)`;
    console.log("minute hand")
    console.log(minDegrees)

}

setInterval(minuteHandTick, 60000)

const hourHandTick =  () => {
    hourDegrees += 5
    hour.style.transform = `rotate(${hourDegrees}deg)`;
    console.log("hour hand")
    console.log(hourDegrees)
}

setInterval(hourHandTick, 3600000)












//     // hr_rotation = 30 * hr + min / 2; //converting current time
//     // min_rotation = 6 * min;
//     // sec_rotation = 6 * sec;

//     // hour.style.transform = `rotate(${hr_rotation}deg)`;
//     // minute.style.transform = `rotate(${min_rotation}deg)`;
//     // second.style.transform = `rotate(${sec_rotation}deg)`;
// }

// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360

// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360
