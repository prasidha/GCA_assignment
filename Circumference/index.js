function calcCircumference(r){
    
    const PI="3.14"
    console.log("radius",r)
    let circum = 2*PI*r;
    circum=circum.toFixed(2);
    console.log("circumference",circum)
  
    document.getElementById("main__div").innerHTML = `the circumference  is : ${circum}`
     
}
calcCircumference(15)
    

    






