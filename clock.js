//just forked Repo and cloned to Machine starting @6:15pm
//console.log("Getting Started, Tiras P. Jordan can do this Coding thing, he's very good at it")
//console.log("hey Colette")

//Starting back up at 4:35am

//1. Create intervals in the JavaScript file to make the clocks tick.
// found resource from an existing codepen: https://codepen.io/sean_cotton/pen/rvpbQz

setInterval(() => {
    let minute = document.getElementById("minute") //Setting the minute hand ID up w/ JS 
    let hour = document.getElementById("hour") //Setting the hour hand ID up w/ JS
    let second = document.getElementById("second") //Setting the Second hand ID up w/ JS

    let M = new Date().getMinutes() * 6 - 90; //Using newDate to grab seconds/minutes/hours for rotating w/ transform
    let H = new Date().getHours() * 6 - 90;
    let S = new Date().getSeconds() * 30 - 90;
    //console.log(M) **working**

    minute.style.transform = 'rotate(' + M + 'deg)';
    hour.style.transform = 'rotate(' + H + 'deg)';
    second.style.transform = 'rotate(' + S + 'deg)';
    //Transform working 
});