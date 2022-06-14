console.log('linked.')

const clockIn = () => {
    let degrees = 1
    let date = new Date()
    const time = [
        date.getHours() * 30,
        date.getMinutes() * degrees, 
        date.getSeconds() * degrees
    ]
    const timeDivs = [
        document.getElementById('hour'),
        document.getElementById('minute'), 
        document.getElementById('second')
    ]
    
    let hour = time[1]/2+time[0]*30

    timeDivs[0].style.transform='rotate('+ hour +'deg)'
    timeDivs[1].style.transform='rotate('+ time[1]*6 +'deg)'
    timeDivs[2].style.transform='rotate('+ time[2]*6 +'deg)';
} 

setInterval(clockIn, 1000)