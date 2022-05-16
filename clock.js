//This is my grandfather clock

//function to rotate images by a set amount when called.
const rotateImg = (imgID) => {

    //rotational degree values
    let normalRot = 6
    let hourRot = 360 / (12 * 60)
    let myImg = document.getElementById(imgID)

    //stuff for second hand
    if (myImg.id === 'second') {
        secPos += normalRot
        if (second % 2 === 1) {
            console.log('Tick...')
        } else {
            console.log('Tock...')
        }
        if (secPos === 360) {
            secPos = 0
            second = 0
        }
        myImg.style.transform = `translate(-50%, -50%) rotate(${secPos}deg)`

        //stuff for minute hand
    } else if (myImg.id === 'minute') {
        minPos += normalRot
        if (minPos === 360) {
            minPos = 0
        }
        console.log('Bing!')
        myImg.style.transform = `translate(-50%, -50%) rotate(${minPos}deg)`

        //stuff for the hour hand
    } else {
        hourPos += hourRot
        if (hourPos === 720) {
            hourPos = 0
        }
        //I've decided this is a grandfather clock.
        if (hourPos % 30 === 0) {
            let theHour = hourPos / 30
            for (let i = 0; i < theHour; i++) {
                setTimeout(console.log("BOOOOOOONG.........."), 1500)
            }
        }
        myImg.style.transform = `translate(-50%, -50%) rotate(${hourPos}deg)`
    }
}

const myClock = () => {
    //function to be called that counts up and calls the rotate image function for clock adjustment
    const countUp = () => {
        second++
        rotateImg('second', secPos)
        if (second % 60 === 0) {
            rotateImg('minute', minPos)
            rotateImg('hour', hourPos)
        }
    }

    //If having fun, reduce the second parameter in the method below accordingly. (ie, when working on clock coding projects, set to 5)
    setInterval(countUp, 1000)
}

//function to fetch initial date/time and set the clock
const setInitialTime = () => {
    let rightNow = new Date()
    console.log( rightNow.getHours(),rightNow.getMinutes(),rightNow.getSeconds())

    //I subtract 1 from each value being constructed when calculating hand positions because the rotate image function adds an increment.

    //construct minutes
    let currMin = rightNow.getMinutes()
    minPos = (currMin-1)*6
    rotateImg('minute')

    //construct hours
    let currHour = rightNow.getHours()%12
    hourPos = (currHour*30)+((currMin-1)*0.5)
    rotateImg('hour')

    //construct seconds
    second = rightNow.getSeconds()
    secPos = (second-1)*6
    rotateImg('second')
}

//rotational positions of the hands
let secPos = 0
let minPos = 0
let hourPos = 0

//Set seconds to 0
let second = 0

//call the function to start it running
//myClock()
setInitialTime()
myClock()