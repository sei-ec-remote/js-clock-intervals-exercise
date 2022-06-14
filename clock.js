const secondRotation = (degree) => {
    return (degree/60)* 360
}

const hourRotation = (degree) =>{
    if(degree == 12){
        return 0;
    }
    return (degree/12)*360
}

const minRotation = (degree) =>{
    return (degree / 60) * 360
}

function time() {
const now = new Date()

const sec = document.getElementById("second")
sec.style.transform = "rotate(" + secondRotation(now.getSeconds()) + "deg)"

const min = document.getElementById("minute")
min.style.transform = "rotate(" + minRotation(now.getMinutes()) + "deg)"


const hr = document.getElementById("hour")
hr.style.transform = "rotate(" + hourRotation(now.getHours()) + "deg)"
}

setInterval(time, 1000)
