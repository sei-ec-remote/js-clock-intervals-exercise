

// It would be useful to define functions that convert seconds, 
// minutes and hours to how many degrees the hand should be rotated around the clock!

// secondRotation(0) // returns 0
// secondRotation(59) // returns (59 / 60) * 360

// hourRotation(12) // returns 0
// hourRotation(5) // returns (5 / 12) * 360

const now = new Date()



const findTime = () => {

    let hours = now.getHours()

    if (hours > 12) {
        
        hours = hours - 12;
    }
    
    console.log('hours', hours);
    

    let minutes = now.getMinutes();

    console.log('minutes', minutes)

    let seconds = now.getSeconds();

    console.log('seconds', seconds)
    
}

findTime();


const secondRotation = () => {

    // 360 / 60 = 6 degrees per second

    let seconds = now.getSeconds();

    console.log('seconds', seconds)

    return 6 * seconds
}

console.log(secondRotation())

let degrees = secondRotation();

const second = document.getElementById("second")

const rotate = () =>{

    second.style.transform = "rotate(" + degrees + "deg)"

    degrees++

}


setInterval(rotate, 1000)