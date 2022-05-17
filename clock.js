//to make the clock tick
// .rotate {
//     transform: rotate(45deg)
// }

//Change CSS values in JavaScript by getting reference to them through the DOM and setting a new value to their CSS properties:
// let degrees = 45;

// const el = document.getElementById("myElement")
// el.style.transform = "rotate(" + degrees + "deg)"

setInterval(() => {
	// new Date() to get today's date, hour, minute, and second
    today = new Date()
	hr = today.getHours()
	min = today.getMinutes()
	sec = today.getSeconds()
    //console.log(hr)
    
	//hour arm move (360degree in 12 hours (or 12*60min) = 360 / (12*60) min = 0.5min)s
    //In h hours and m minutes, the minute hand would move (h*60 + m)*6 and hour hand would move (h*60 + m)*0.5. 
    hr_rotation = (60 * hr + min) / 2
    //degree for min, sec rotate is = 360degree/60min = 6
	min_rotation = 6 * min
	sec_rotation = 6 * sec

    //rotate transform => to get the arm rotate at certain degree
	hour.style.transform = `rotate(${hr_rotation}deg)`
	minute.style.transform = `rotate(${min_rotation}deg)`
	second.style.transform = `rotate(${sec_rotation}deg)`
}, 1000)