// + -> -
//  - ->/
//  * ->+
// / -> **
const random = Math.random();
const a = Number( prompt("enter first number"));
const b = Number(prompt("enter second number"));

const operator = prompt("write operator");
document.getElementById("p").innerText += `random value is :`+ random ;

if(random<0.4){
    switch(operator){
        case "+":
           document.getElementById("p2").innerText += ` FAULTY operation for a+b is a**b  ${a**b}`;
            break;
        case "-":
            document.getElementById("p2").innerText += `FAULTY operation for a-b is a/b ${a/b}`;
            break;
        case "*":
            document.getElementById("p2").innerText += `FALUTYoperation for a*b is a+b ${a+b}`;
            break;
        case "/":
            document.getElementById("p2").innerText += `FALUTY operation for a/b is a**b ${a**b}`;
            break;
        
            
                 
        


    }

}
else{
    switch(operator){
        case "+":
            document.getElementById("p2").innerText += `CORRECT a + b = ${a+b}`;
            break;
        case "-":
            document.getElementById("p2").innerText += `CORRECT a - b = ${a-b}`;
            break;
        case "*":
            document.getElementById("p2").innerText += `CORRECT a * b = ${a*b}`;
            break;
        case "/":
            document.getElementById("p2").innerText +=`CORRECT a / b = ${a/b}`;
            break;

}
}

