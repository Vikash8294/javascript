
// *************************Math************
// console.log("vikash");
// console.log(Math.PI);
// console.log(Math.max(60,30,40,72,46,89));
// console.log(Math.min(60,30,40,72,46,89));
// console.log(Math.round(1.4));
// console.log(Math.floor(1.9));// just lowest integer
// console.log(Math.ceil(1.1));// just highest integer
// console.log(Math.abs(-5)); // convert negative to postive
// console.log(Math.random()); // return number betwwen 0(inclusive) and 1(exclusive)
// console.log(Math.sqrt(9));// square root of a number 4 square root is 2
// console.log(Math.pow(2,10));


// ********************Date**************

// let curr = new Date();
// console.log(curr);

// let date = new Date('29 Dec 2000 05:15');
// console.log(date);
// imporatnt
//index of month is 0 indexing for dec we have to write 11

let date = new Date(2002,11,29,7);
console.log(date);

//  to get day of date

console.log(date.getDay()); // here day start from 0 means sunday and 1 means monday and so on


// to get year
console.log(date.getFullYear());