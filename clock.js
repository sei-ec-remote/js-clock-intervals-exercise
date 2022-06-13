// need to create function
// that takes interval of 1000ms and rotates the 
// second hand by 6 degrees (takes (currentSecond * 6 + 'deg')
// and sets the current rotate class transform to that degree

//define hands in DOM
const secondHand = document.querySelector('#second');
const minuteHand = document.querySelector('#minute');
const hourHand = document.querySelector('#hour');

const updateTime = () => {
    let sec = new Date().getSeconds();
    secDegrees = sec*6
    secondHand.style.transform = `rotate(${secDegrees}deg)`
    let min = new Date().getMinutes();
    minuteDegrees = min*6
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    let hour = new Date().getHours();
    if (hour > 12) {
        hour = hour - 12;
    }
    hourDegrees = hour*6
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

// TURN ON WHEN WANT TO TEST CLOCK
const clock = setInterval(updateTime, 1000)




