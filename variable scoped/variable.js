//*************
// var********************* */ -*****************************GLOBAL SCOPED**********************************************************

// global scoped (which can be acces any where in the code within any block , function, loop,if )
// var age = 15;

// console.log(age);
// within blocked

// {
//     console.log(age); 
// }

// within if
// if(true){
//     console.log(age);
// }

// within loop
// for(let i=0;i<2;i++){
//     console.log(age);
// }

// within function
// let say =()=>{
//     console.log(age);

// }
// say();

// ***************************************FUNCTION SCOPED**************************

// function say(){
//     var fullname = "Earth";
//     console.log("hello world",fullname) 
// }
// // console.log(fullname);
// say();

// *******var is not blocked scoped as it can be assed outside the block also but let and cost is blocked scoped

// ***************var***********
// {
//     var age =15;
// }
// console.log(age);

// ************let and cosnt is blocked scoped both cannot be assed from outside the block

// {
//     // let age =15; or
//     const age = 16;
// }
// console.log(age);













// ********************Temporal Dead Zone****************


// console.log(age); variable hoisting can not be possible using cost and let

// console.log(age);
// console.log("vikash");
// console.log("kumar");  here we can say there is temporal dead zone from line 73 to 76 ecause we cannot asses the value of abge(variable) beacuse variable hoisting using let and const can not be possible

// let age = 15;
// console.log(age);
 

