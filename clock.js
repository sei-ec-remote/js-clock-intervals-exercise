// need to create function
// that takes interval of 1000ms and rotates the 
// second hand by 6 degrees (takes (currentSecond * 6 + 'deg')
// and sets the current rotate class transform to that degree

//define hands in DOM
const secondHand = document.querySelector('#second');
console.log(secondHand);
const minuteHand = document.querySelector('#minute');
console.log(minuteHand);
const hourHand = document.querySelector('#hour');
console.log(hourHand);

const updateTime = () => {
    console.log('tic')
    let sec = new Date().getSeconds();
    // set rotation amount for second hand
    // and apply to css
    let min = new Date().getMinutes();
    // set rotation amount for second hand
    // and apply to css
    let hour = new Date().getHours();
    // will need to, if hour exceeds 12, subtract 12 (24h time)
    // set rotation amount for hour hand
    // and apply to css
    console.log(new Date())
    console.log(sec);
    console.log(min);
    console.log(hour);
}

// TURN ON WHEN WANT TO TEST CLOCK
// const clock = setInterval(updateTime, 1000)




