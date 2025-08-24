// **********hoisting**********

// ***********function hoisting*******
// code will run in both the case as function will automatically shift at the top the scope because of the property of hoisting (function)


// sayName("vikash"); // case 1

// function sayName(fullName){
//     console.log(fullName);
// }

// // sayName("vikash"); case 2

/*****************variable hoisting ***/
// code will give value in case 1 bout in case 2 the output in undefind beacuse in varialbe hoistion only 
// delacartion move to top but not the inisitalize value  so ,here only var age has move up (by using var)

// console.log(age); // case 2
// var age = 25; 
// // console.log(age); //case 1

// *************variable hoisting using let and const **************
//  code  will not work 


// console.log(age); 
// const age = 25;

// console.log(age); 
// let age = 25;

// ************************class hoistion*************


// here case 2 will not hence class hoisting not not be possible

// // const obj = new Human(); case 2
// class Human{

// }
// // const obj = new Human(); case 1





// why we called function as a first citizen************
// 1. aasign to variable

// let greet = function(name){
//     console.log("hello ",name);

// }
// greet("vikash");

// 2. we can pass function as an arrgument


// function greet(){
//     console.log("good morning");
// }

// function Om(greet,name){
//     console.log('hello',name);
//     greet();
    
// }
// Om(greet,'vikash');

// 3. we can aslo return a function

// function solve(num){
//    return function(num){
//     return num*num;

//    } 
// }
// let ans = solve(10);
// console.log(ans(10));

// 4. we can use function in a data structure  by making array with function

// const arr =[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     function(a,b){
//         return a-b;
//     }
// ];
// // let first = arr[0];
// // console.log(first(5,10));

// // let first = arr[1];
// // console.log(first(5,10));

// // let first = arr[2];
// // console.log(first(5,10));





// 5. inside the obeject we can declaare function as a property

// let obj = {
//     age : 25,
//     name : 'vikash',
//     course : 'mca',
//     greet : function(){
//         console.log("good morning")
//     }
// };
// console.log(obj.age);
// obj.greet();

