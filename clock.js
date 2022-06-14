function clockWork(){

    //getting the current time function
        const now = new Date()
    
    // getting each hour, minute, and seconds. Had to convert hours from military time to normal time by subtracting 12
        const hour = now.getHours()-12
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
    
    //getting the hands from the clock
        const getHour= document.getElementById('hour')
        const getMinutes = document.getElementById('minute')
        const getSeconds= document.getElementById('second')
    
    //get the current 
        const hours = hour * 30 + minutes * (360/720)
        const minute = minutes * 6 + seconds * (360/3600)
        const second = seconds * 6
    
    //create the tick to each hand on the clock
        getHour.style.transform ="rotate(" + hours + "deg)"
        getMinutes.style.transform ="rotate(" + minute  + "deg)"
        getSeconds.style.transform ="rotate(" + second + "deg)"
    
    }
    
    clockWork()
    
    window.onLoad = function(){
        clockWork()
    }
    setInterval(clockWork, 1000)
    