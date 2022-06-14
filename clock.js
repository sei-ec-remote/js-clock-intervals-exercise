const ss = document.getElementById('second')
const mm = document.getElementById('minute')
const hh = document.getElementById('hour')

let degrees = 45;


const secHand = () => {
    let time = 1;
        const secMover = () => {
         ss.style.transform ='rotate(' + (time/60)*360 + 'deg)' 
        time++                 
    }
            const secTimer = setInterval(secMover, 1000)

}

const minHand = () => {
    let time = 1;
        const minMover = () => {
        mm.style.transform = 'rotate(' + (time/60)*360 + 'deg)'
        time++
    }
            const minTimer = setInterval(minMover, 60000)

}

const hourHand = () => {
    let time = 1;
        const hourMover = () => {
        hh.style.transform = 'rotate(' + (time/12) * 360 + 'deg)'
        time++
    }
            const hourTimer = setInterval(hourMover, 3600000)

}

secHand()
minHand()
hourHand()



























































