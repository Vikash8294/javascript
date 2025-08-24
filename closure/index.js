// const age = prompt("enter your age");
// document.getElementById('pi').innerText = `welcome ${age}`;


// closure 

function Outer(){
    let name  = "vikash";
    function inner(){
        console.log(name);
    }
    return inner();

}
let i = Outer();


