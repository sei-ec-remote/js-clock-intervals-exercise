const now = new Date()
let stopper = 1

const updater = () =>{
    const now = new Date()
    let milli = now.getMilliseconds()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()

    let sHand = document.getElementById('second')
    let mHand = document.getElementById('minute')
    let hHand = document.getElementById('hour')


    sHand.style.transform = "rotate(" + ((seconds + (milli / 1000)) / 60 * 360) + "deg)"
    mHand.style.transform = "rotate(" + ((minutes + (seconds / 60)) / 60 * 360) + "deg)"
    hHand.style.transform = "rotate(" + ((hours + (minutes / 60)) / 12 * 360) + "deg)"

}

const reppeatupdate = setInterval(updater,10)

const stopTime = () => {
    if (stopper==1){
        return 0
    }
    clearInterval(reppeatupdate)
}
const stopUpdate = setTimeout(stopTime, 10000);


updater()