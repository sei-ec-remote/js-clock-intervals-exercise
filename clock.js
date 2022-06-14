let degrees = 45;

const el = document.getElementById(`second`, 'minute', `hour`)
el.style.transform = "rotate(" + degrees + "deg)"

const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');

secondHand.style.transform = "rotate(0.25turn)"; // turn is 360 degrees, we are doing 1/4

function setRotationInTurns(domNode, turns) {
    const transform = `rotate(${turns}turn)`;
    const style = domNode.style;
    style.webkitTransform = transform;
    style.mozTransform = transform;
    style.msTransform = transform;
    style.oTransform = transform;
    style.transform = transform;
}

function computeClockHandRotationsInTurns() {
    const date = new Date();
    return {
        secondHandTurns : date.getSeconds() / 60,
        minuteHandTurns : date.getMinutes() / 60,
        hourHandTurns : (date.getHours() + date.getMinutes()/60) / 12,
    };
}

function updateClockHandRotations(){
    const {
        secondHandTurns,
        minuteHandTurns,
        hourHandTurns
} = computeClockHandRotationsInTurns();

setRotationInTurns(secondHand, secondHandTurns);
setRotationInTurns(minuteHand, minuteHandTurns);
setRotationInTurns(hourHand, hourHandTurns);

}

function disableTransition() {
    setTimeout(() => {
        secondHand.style.transitionProperty = "none";
        minuteHand.style.transitionProperty = "none";
    }, 1500);
}

disableTransition();


