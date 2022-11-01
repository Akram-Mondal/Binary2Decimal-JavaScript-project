const btn = document.getElementById("btn");



 function Convert(){
    
    var binary = Number(document.getElementById("binary").value);
    var decimal = 0;
    var i = 0;

    while(binary){
        decimal = decimal + Math.pow(2,i) * (binary % 10);
        i++;
        binary = parseInt(binary/10);
    }
    
	document.getElementById("result").innerText = "Decimal Number : " + decimal;
     
 }

btn.addEventListener("click", Convert);