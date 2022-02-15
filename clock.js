//Create variables that store the elements references via ID for each hand
const minuteHand = document.getElementById("minute")
const secondHand = document.getElementById("second")
const hourHand = document.getElementById("hour")

//Would it have been better at least for say, in the add event Listener as DOM content
//loads, to have these three variables declared as functions instead so they are
//called when the DOM content is loaded? I suppose that makes sense if the objective
//is to have a clock running as soon as the browser loads, and that it looks cleaner having there
//along with other functions when the DOM content loads

//just a note to myself that I could wrap this all in a function if I wanted to

//const countMinutes = () => {
    //  setInterval(() => {
    //    let minuteDegrees  = minute/60 * 360
    //minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"
    //minute++
    
  // }, 60000)
    //}
  //  countMinutes();
  

  //I found this date function and it works to place the hands at current time
  //except for the hour, it seems to be 7 hours behind? But another thing
  //that I couldn't figure out is that when the DOM content loads, the hands
  //are at 12, and then after a second the second hand shifts to wherever
  //Date.now places it. After a minute the minutehand would be in the right
  // right place. This is a result of the conversion below stored 
  //to a variable that later equals the variable seconds or minutes .

    let currentDateSeconds = (Date.now())/1000
    console.log(currentDateSeconds)
    let currentDateMinutes = (Date.now())/60000
    console.log(currentDateMinutes)
    let currentDateHours = (Date.now())/3600000
  

    //create a variable that let's minutes equal 0 as a counter for the degrees
    //throughout the setInterval function  (later changed to try to 
    //include current time)
 let minute = currentDateMinutes
  //create a variable that will store chunk of code for setInterval to effect change in hand
  // per interval time I choose
  const countMinutes = setInterval(() => {
      //ceate a variable for changing the degrees depending on the minute the clock is
      //currently at, made possivle via the minute counter, minute++
    let minuteDegrees  = minute/60 * 360
    //set the degrees variable that was provided to equal the changing minuteDegrees
    //variable so style.transform shifts the correct degrees every interval
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)"
    minute++
    //in this case, interval time is every 60 seconds
  }, 60000)
  
//do the same for below except adjusting the hourDegrees variable for movement of degrees
//specific to an hour, 12 times, and interval every hour. 

//for seconds, the degree shifting formula stays the same, but interval changes to every second.
   let second = currentDateSeconds

   const countseconds = setInterval(() => {
    let secondDegrees  = second/60 * 360
    secondHand.style.transform = "rotate(" + secondDegrees + "deg)"
    second++
    // just playing around stopping the clock
    //if (second === 11) {
      //  clearTimeout(countseconds)
   // }
   }, 1000)

   let hour = currentDateHours

   const counthours = setInterval(() => {
    let hourDegrees  = hour/12 * 360
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)"
    hour++
   }, 3600000)





  