// // // // // //Create intervals in the JavaScript file to make the clocks tick.
// // // // // //.rotate {
// // // // //    // transform: rotate(45deg)
// // // // // //}




 let Second = document.getElementById("second");
 //let timeInSeconds = 0
//let timeInMinutes = 0
    const setClock = () => {
        // console.log(timeInSeconds)
        //timeInSeconds++
         const day = new Date();
        const ss = day.getSeconds();
        
         const seconddeg = (ss + 6);
        
        second.style.transform = `rotate(${secondDeg}deg)`;
    }
    setClock();
     const intervalTimer = setInterval(setClock, 1000)


    


    
