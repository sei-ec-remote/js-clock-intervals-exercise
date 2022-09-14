const deg = 6;
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

setInterval(() => {
    let day = new Date ();
    let hour = day.getHours() * 30;
    let minute = day.getMinutes() * deg;
    let second = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hour + minute / 12}deg)`;
    minute.style.transform = `rotateZ(${minute}deg)`;
    second.style.transform = `rotateZ(${second}deg)`;
}, 1000);

