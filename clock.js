console.log(`Linked`);

const secondRotation = (now) => {
    const thisSecond = now.getSeconds();
    const secondHand = document.getElementById(`second`);
    secondHand.style.transform = `rotate(`+(thisSecond/60)*360+`deg)`;
}

const minuteRotation = (now) => {
    thisMinute = now.getMinutes();
    const minuteHand = document.getElementById(`minute`);
    minuteHand.style.transform = `rotate(`+(thisMinute/60)*360+`deg)`;
}

const hourRotation = (now) => {
    thisHour = now.getHours();
    if(thisHour > 12) {thisHour = thisHour - 12}
    const hourHand = document.getElementById(`hour`);
    hourHand.style.transform = `rotate(`+(thisHour/12)*360+`deg)`;
}

const setFace = () => {
    const now = new Date();
    secondRotation(now);
    minuteRotation(now);
    hourRotation(now);
} 

setInterval(setFace,1000);