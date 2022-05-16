setInterval(displayTime, 1000)

// Main function to display time
function displayTime(){
    let date = new Date()
    let hourRotation = date.getHours()
    let minRotation = date.getMinutes()
    let secRotation = date.getSeconds()


    // Configuring second rotation
    placeHand("second", secRotation*6)

    // Configuring minute rotation
    placeHand("minute", minRotation*6)

    // Configuring hour rotation
    placeHand("hour", (hourRotation%12)*30)
}

// Draws the hands! 
function placeHand(hand, pos){
    document.getElementById(hand).style.transform = "rotate(" + pos +"deg)"
}