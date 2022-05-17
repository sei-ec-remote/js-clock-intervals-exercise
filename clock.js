// Interval for seconds
let secondsHand = 0;
const secondEl = document.getElementById("second");

// const secondDegrees = (num) => {
//   return (num / 60) * 360;
// };
// console.log(secondDegrees(59));

const intervalFunction = setInterval(() => {
  secondsHand = secondsHand + 1;
  secondDegrees = (secondsHand / 60) * 360;
  secondEl.style.transform = "rotate(" + secondDegrees + "deg)";
  console.log(secondsHand);
}, 1000);
