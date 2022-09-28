
let degrees = 45

//first get element to be able to do stuff with it
const degrees = document.getElementById("hour")
const degrees = document.getElementById("minute")
const degrees = document.getElementById("second")

degrees.style.transform = "rotate(" + degrees + "deg)"


//allows function to execute on a timer in milliseconds

setInterval(minuteRotation, 60000)
setInterval(hourRotation, 3600000)
setInterval(secondRotation, 1000)

function secondRotation(59)
function hourRotation(5)
function minuteRotation(30)

minuteRotation()
hourRotation()
secondRotation()

//setClock function will execute every 1000 milliseconds
function setClock() {

   
}

const now = new Date()





