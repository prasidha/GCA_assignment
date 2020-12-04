function addBillAndTips (){
   
        let bill_amount =Number( document.getElementById("bill").value)
        // console.log('bill',typeof(bill_amount))
        let tip_percentage = document.getElementById("tip_perc").value

        // console.log("Amount & tips",bill_amount,tip_percentage)

        let tip_amount =(tip_percentage*bill_amount)/100;
        // console.log("Amount & tips",tip_amount)
        // console.log('TIP',typeof(tip_amount)) 
       
        let total = bill_amount + tip_amount;

        tip_amount =tip_amount.toFixed(2) 
        total=total.toFixed(2)
        
        // console.log(total)

        // Showing Result 

        document.getElementById("tip").innerText=` tips : Rs ${tip_amount}`
        document.getElementById("totals").innerText=` total : Rs ${total}`

} 
addBillAndTips();