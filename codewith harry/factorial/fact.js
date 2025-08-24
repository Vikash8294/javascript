// **************************own ****************

// const n = prompt("ENTER THE NUMBER");
// let fact = 1;
// document.getElementById("p").innerText = `number is ` + n;

// for(i = n ; i>=1 ; i--){
//     document.getElementById("p2").innerText = `${i} * `;

//     fact = fact * i ;
    

    

// }
// // document.getElementById("p1").innerText = `random value is :`+ fact ;
// document.getElementById("p1").innerText = ` factorial is   ${fact}`;
// // console.log( "= ",fact);


let a = 3;
function fact (num){
    let arr = Array.from(Array(num+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) =>{
        return a*b})+
    console.log(c);
}
fact(a);