const sec = document.getElementById("second")
const min = document.getElementById("minute")
const hr = document.getElementById("hour")
const updatehrClock = () => {
    let hrs = new Date().getHours()
    // console.log(secs)
    let hrsDegrees = (hrs * 30)
    hr.style.transform = "rotate(" + hrsDegrees + "deg)"
}
const updateminClock = () => {
    let mins = new Date().getMinutes()
    // console.log(secs)
    let minsDegrees = (mins * 6)
    min.style.transform = "rotate(" + minsDegrees + "deg)"
}
const updatesecClock = () => {
    let secs = new Date().getSeconds()
    // console.log(secs)
    let secDegrees = (secs * 6)
    sec.style.transform = "rotate(" + secDegrees + "deg)"
}
updatesecClock()
updateminClock()
updatehrClock()

const secMove = setInterval(updatesecClock, 1000)
const minMove = setInterval(updateminClock, (1000*60))
const hrMove = setInterval(updatehrClock, (1000*60*12))

/////////////////////////
///////OLD CODE///////
////////////////////////

// const secondRotation = (unit) =>{
//     return (unit/60) * 360
// }
// const rotatesecHand = () => {
//     setInterval(() => {
//         sec.style.transform = "rotate(" + clockMove + "deg)"
//     }, 1000);
// }

// const minuteRotation = (unit) =>{
//     return (unit/60) * 360
// }
// const rotateminHand = () => {
//     setInterval(() => {
//         min.style.transform = "rotate(" + minuteRotation(0++) + "deg)"
//     }, 60000);
// }

// const hourRotation = (unit) =>{
//     return (unit/12) * 360
// }
// const rotatehrHand = () => {
//     setInterval(() => {
//         hr.style.transform = "rotate(" + hourRotation(0++) + "deg)"
//     }, 3600000);
// }

// rotatesecHand()
// rotateminHand()
// rotatehrHand()


