const hrHand = document.getElementById("hour");
const minHand = document.getElementById("minute");
const secHand = document.getElementById("second");


const tikTok = () => {
    const currentTime = new Date();
    
    hr = currentTime.getHours();
    mins = currentTime.getMinutes();
    sec = currentTime.getSeconds();

    const secondsDegrees = ((sec / 60) * 360) + 250;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minsDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 275;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hourDegrees = ((hr / 12) * 360) + ((mins/60)*30) + 250;
    hrHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(tikTok, 1000);

  tikTok();


//adjusted the angle of degree per hand to match the accurate time for EST (i.e + 275 for the mins hand)