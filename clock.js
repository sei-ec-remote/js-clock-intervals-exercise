/*
I had to cancel # clock img{ transform: translate(-50%, -50%);} in my CSS file since if I run my javascript function clockStarting(), all the rotating hands go back to where it were before { transform: translate(-50%, -50%);}.

I wonder how I can locate all the images centered.....
*/

/*
Below didn't work.....

const allImg = document.getElementsByTagName('img')
allImg.tranform = "translate(-50%,-50%)";
console.log(allImg);

*/

//set variables
const secHand = document.getElementById("second");
const minHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

/*------TicTak function-----*/

/*
let second = 0;
let minute =0;
let hour = 0;
let mySecond = null;
const clockStarting = () => {
    mySecond = setInterval(() => {
    
    second += 6;
    minute += 0.1;
    hour += 1/600;
    
    // if (second%60 === 0 && second > 60){
    //  minute +=1;
    // }else if(minute%60 === 0 && minute > 60 ){
    //     hour += 1;
    // }
   
    secHand.style.transform =  "rotate(" + second + "deg)";
    minHand.style.transform =  "rotate(" + minute + "deg)";
    hourHand.style.transform =  "rotate(" + hour + "deg)";

    },1000)
    };
    clockStarting();
*/

//-------------Bonus----------//

// time to degree functions
const secRotation = (second) => {
    return (second / 60) * 360;
};

const minRotation = (minute) => {
    return (minute / 60) * 360;
};

const hourRotation = (hour) => {
    return (hour / 12) * 360;
};
//functions
function getTime() {

    const now = new Date()
    let hour = now.getHours();
    let mins = now.getMinutes();
    let seconds = now.getSeconds();

    secHand.style.transform = "rotate(" + secRotation(seconds) + "deg)";
    minHand.style.transform = "rotate(" + minRotation(mins) + "deg)";
    hourHand.style.transform = "rotate(" + hourRotation(hour) + "deg)";

};

setInterval(getTime,1000);


/*-----------------BINS---------------------*/

// secHand.style.transform = "rotate(" + degrees + "deg)"


