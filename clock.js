
let degrees = 1

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')



const hourRotation = () => {

    hour.style.transform = 'rotate(' + degrees + 'deg)'
    console.log('hour')
    degrees++
}
setInterval(hourRotation, 120000)



const minuteRotation = () => {
    minute.style.transform = 'rotate(' + degrees + 'deg)'
    console.log('min')
    degrees++
    
}
setInterval(minuteRotation, 10000)




const secondRotation = () => {
    second.style.transform = 'rotate(' + degrees +'deg)'
    console.log('sec')
    degrees++
}  
setInterval(secondRotation, 166.667)


