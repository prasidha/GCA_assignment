function digitalClock () {
 
    let dg_clock =new Date();
    let hour =dg_clock.getHours()
    let min =dg_clock.getMinutes()
    let sec=dg_clock.getSeconds()
   
  
      let cl  
          if (hour <= 12){
              cl="AM" 
          }else {
            cl="PM"
            hour=hour-12;
          }

      hour=  hour < 10 ? "0" +hour :hour;
       min= min < 10 ? "0" +min : min;
       sec= sec < 10 ? "0"+sec : sec;

       let clock_html ='';
         clock_html =clock_html +
        `
          <h1> ${hour} : ${min} : ${sec}  ${cl} </h1>
        `
    console.log("time",clock_html);
    document.getElementById("dg_clock").innerHTML=clock_html
    setInterval(digitalClock,1000)
}

digitalClock()