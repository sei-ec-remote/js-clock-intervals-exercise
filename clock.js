console.log(`Linked`);

const timeLoaded = new Date();

const setSecond = () => {
    const second = now.getSeconds(now);
    console.log(second);
    const secondHand = document.getElementById("second")
    secondHand.style.transform = "rotate(" + degrees + "deg)"
}

const setFace = (now) => {
    

    const minute = now.getMinutes(now);
    console.log(minute);

    let hour = now.getHours(now);
    if(hour >12) {
        hour = hour-12;
    }
    console.log(hour);

    const el = document.getElementById("myElement")
    el.style.transform = "rotate(" + degrees + "deg)"
    
    adjustFace(second,minute,hour);
}



setFace(setSecond(()=>{}));