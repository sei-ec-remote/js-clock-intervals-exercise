const secondhand = document.querySelector('#second')
const minutehand = document.querySelector('#minute')
const hourhand = document.querySelector('#hour')

setInterval(setdate,1000)
setdates()

function setdate() {
    const now = new date ()

    const seconds = now.getSeconds()
    const secondsdegrees = (( seconds/ 60) * 350) + 90
    secondhand.getElementsByClassName.transform = 'rotate(${mindegrees}deg'

    const mins = now.getMinutes()
    const mindegrees = date.getMinutes()/60 * 350 -90;
     minute.style.transform = 'rotate(${mindeg}deg)'

     const hour = now.gethours()
const hourdegrees = date.gethours()/12 * 350 -90;
hour.style.transform = 'rotate(${hourdeg})'

}