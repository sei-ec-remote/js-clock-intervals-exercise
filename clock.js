// let degrees = 45;

// const secHand = document.getElementById("second")
// const minHand = document.getElementById("minute")
// const hrHand = document.getElementById("hour")

// const secondHand = () => {
//     let time = 1;

//     const sHandMover = () => {
//         secHand.style.transform = "rotate(" + (time/60)*360 + "deg)"
//         time++
//     }
//     const secondHandTimer = setInterval(sHandMover, 1000)
// }
// const minuteHand = () => {
//     let time = 1;

//     const mHandMover = () => {
//         minHand.style.transform = "rotate(" + (time/60)*360 + "deg)"
//         time++
//     }
//     const minuteHandTimer = setInterval(mHandMover, 60000)
// }
// const hourHand = () => {
//     let time = 1;

//     const hrHandMover = () => {
//         hrHand.style.transform = "rotate(" + (time/60)*360 + "deg)"
//         time++
//     }
//     const hourHandTimer = setInterval(hrHandMover, 3600000)
// }



// secondHand()
// minuteHand()
// hourHand()
// // secHand.style.transform = "rotate(" + degrees + "deg)"


// ALLOW THE HANDS TO BE MORE ANIMATED AND INCREMENT PROPERLY
let degrees = 45;

const secHand = document.getElementById("second")
const minHand = document.getElementById("minute")
const hrHand = document.getElementById("hour")

const secondHand = () => {
    let time = 1;

    const sHandMover = () => {
        secHand.style.transform = "rotate(" + time + "deg)"
        time++
    }
    const secondHandTimer = setInterval(sHandMover, 1000/6)
}
const minuteHand = () => {
    let time = 1;

    const mHandMover = () => {
        minHand.style.transform = "rotate(" + time + "deg)"
        time++
    }
    const minuteHandTimer = setInterval(mHandMover, 60000/6)
}
const hourHand = () => {
    let time = 1;

    const hrHandMover = () => {
        hrHand.style.transform = "rotate(" + time + "deg)"
        time++
    }
    const hourHandTimer = setInterval(hrHandMover, 1200000/12)
}



secondHand()
minuteHand()
hourHand()
// secHand.style.transform = "rotate(" + degrees + "deg)"