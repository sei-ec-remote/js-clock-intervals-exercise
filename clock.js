let secondHand = document.getElementById("second")
let minuteHand = document.getElementById('minute')
let hourHand = document.getElementById('hour')

let degrees = 180;

//functions that convert time to degrees

//seconds
const convertSeconds = (second) => {
    return (second / 60) * 360
}
const convertMinutes = (minute) => {
    return ((minute / 60) * 360)
}
const convertHours = (hour) => {
    return ((hour / 12) * 360)
}

//rotate the images
// second.style.transform = "rotate(" + degrees + "deg)"

// need function that will count up degrees to 360

let countSeconds = 0
const secondRotate = setInterval(() => {
    //count up second 
    if (countSeconds < 60){
        countSeconds++
        secondHand.style.transform = "rotate(" + convertSeconds(countSeconds) + "deg)"
    }else { countSeconds = 0
        countSeconds++
        secondHand.style.transform = "rotate(" + convertSeconds(countSeconds) + "deg)"
    }
    // console.log(countSeconds)
    //need to plug seconds into the conversion

}, 1000)

let countMinutes = 0
const minuteRotate = setInterval(() => {
    //count up minutes
    //need function to reset countMinutes as 1 rotation completes
    if (countMinutes < 60){
        countMinutes++
        minuteHand.style.transform = "rotate(" + convertMinutes(countMinutes) + "deg)"
    } else {
        countMinutes = 0;
        countMinutes++
        minuteHand.style.transform = "rotate(" + convertMinutes(countMinutes) + "deg)"
    }
    
    //need to plug seconds into the conversion

    // console.log(countMinutes)
}, 60000)

let countHours = 0
const hourRotate = setInterval(() => {
    //count up second 
    if (countHours < 12){
        countHours++
        hourHand.style.transform = "rotate(" + convertHours(countHours) + "deg)"
    } else {
        countHours = 0
        countHours++
        hourHand.style.transform = "rotate(" + convertHours(countHours) + "deg)"
    }
    //need to plug seconds into the conversion
    // console.log(countHours)
}, 3600000)
