const secHand = document.querySelector("#second");
const minHand = document.querySelector("#minute");
const hourHand = document.querySelector("#hour");

function setDate() {
  const d = new Date();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  secHand.classList.toggle("hand-transition", sec != 0);

  const sethourdeg = (360 * hour) / 12 + (360 * min) / (12 * 60) + 90; 
  hourHand.style.transform = `rotate(${sethourdeg}deg)`;

  const setmindeg = (360 * min) / 60 + (360 * sec) / (60 * 60) + 90;
  minHand.style.transform = `rotate(${setmindeg}deg)`;

  const setsdeg = (360 / 60) * sec + 90; 
  secHand.style.transform = `rotate(${setsdeg}deg)`;
}

setInterval(setDate, 1000);