window.addEventListener('DOMContentLoaded', () => {
    const secondPencil = document.getElementById('second')
    const minutePencil = document.getElementById('minute')
    const hourPencil = document.getElementById('hour')

    //make second hand rotate 

    let second = 0
    secondRotation = () => {
        console.log(second++)
        degreeSecond = (second * 6)
    secondPencil.style.transform = "rotate(" + degreeSecond + "deg)"
      
        }
setInterval (secondRotation, 1000)

 //make minute hand rotate

 let minute = 0
 minuteRotation = () => {
     console.log(minute++)
     degreeMinute = (minute * 6)
     minutePencil.style.transform = "rotate(" + degreeMinute + "deg)"
 
    }
setInterval (minuteRotation, 60000)

//make hour hand rotate

let hour = 0
 hourRotation = () => {
     console.log(hour++)
     degreeHour = (hour * 30)
     hourPencil.style.transform = "rotate(" + degreeHour + "deg)"
 
    }
setInterval (hourRotation, 600000000)

})



