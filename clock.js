const sec = document.getElementById("second")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")

setInterval(()=>{
const date = new Date;
console.log(date)

const secDeg = date.getSeconds()/60 * 360 -90;
const minDeg = date.getMinutes()/60 * 360 -90; 
const hourDeg = date.getHours()/12 * 360 -90;

sec.style.transform = `rotate(${secDeg}deg)`
minute.style.transform = `rotate(${minDeg}deg)`
hour.style.transform = `rotate(${hourDeg}deg)`

},1000)

