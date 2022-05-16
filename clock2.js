const myClock = () => {
    let clockObj = { hour: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds() }
    setInterval(() => {clockObj.second = (clockObj.second + 1) % 60
        if (clockObj.second % 60 === 0) {
            clockObj.minute = (clockObj.minute + 1) % 60
            if (clockObj.minute % 60 === 0) {
                clockObj.hour = (clockObj.hour + 1) % 24}}
        document.getElementById('second').style.transform = `translate(-50%, -50%) rotate(${clockObj.second * 6}deg)`
        document.getElementById('minute').style.transform = `translate(-50%, -50%) rotate(${clockObj.minute * 6}deg)`
        document.getElementById('hour').style.transform = `translate(-50%, -50%) rotate(${(clockObj.hour * 30) + (clockObj.minute * 0.5)}deg)`}, 1000)}
myClock()