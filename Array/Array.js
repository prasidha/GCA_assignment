function array (){
   
 
    let places =["Biratnagar","Lalitpur","Patan","Kathmandu","Pokhara","Palpa"];
    places.splice(3,1,"Lumbini","Gorkha");
    console.log(places)
    document.getElementById("array").innerText=` Array of places : ${places}`
    document.getElementById("length").innerText = ` length of an array is : ${places.length}`
   }

   array()
