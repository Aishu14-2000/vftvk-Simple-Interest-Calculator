function compute()
{
   var p = document.getElementById("principal").value;
   
   var  r=  document.getElementById("rate").value;
   var  y=  document.getElementById("years").value;
   if(p==""){
       alert("Please enter amount");
       p.focus();
       return false;
   }
   if(r==""){
    alert("Please enter rate");
    r.focus();
    return false;
   }
   if(y==""){
    alert("Please enter amount");
    y.focus();
    return false;
    }
   var si= (p*y*r)/100;
   var year = new Date().getFullYear()+parseInt(y);
   document.getElementById("result").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspIf you deposit "+p+",\<br\>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspat an interest rate of "+r+"%\<br\>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYou will receive an amount of "+si+",\<br\>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspin the year "+year+"\<br\>"
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}