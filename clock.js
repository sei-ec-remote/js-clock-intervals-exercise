const sec = document.createElement('#second')
const min = document.createElement('#minute')
const hour = document.createElement('#hour')

let rotation = 0

const rotateImg = () => {
    if (rotaion === 0) {
        rotaton += 90
    }
    document.querySelector('#second').style.transform = 'rotate(90deg)'
}