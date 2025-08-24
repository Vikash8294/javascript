// **************************WHY object is called Dynamic**********

// let obj = {
//     age : 12,
//     wt : 64,
//     ht : 165,
// };
// console.log(obj);
// // boject are call dyanimc becuse its properties can be changed at runtime

// obj.color = 'white';
// console.log(obj);



// ********************Object Cloning***********

//1. spread operator

let src = {
    age : 12
};

let dec ={...src};
src.wt = 80;
console.log("dec:",dec);
console.log("src:",src);


// 2. assign operators


// let src = {
//     age : 12,
//     ht : 150,
//     name: 'vikash'

// };
// //for cloning two object
// let src2={
//     add : 'vidyanagar',
//     value :101,
    
// };

// let dec = Object.assign({},src,src2);
// src.wt = 80;
// console.log("dec:",dec);
// console.log("src:",src);



// **************iteration*********
// let src = {
//     age : 12,
//     ht : 150,
//     name: 'vikash'

// };
// let dest = {};
// for(key in src){
//     let newKey = key;
//     let newValue = src[key];
//     dest [newKey] = newValue;
// };
// src .age = 11;
// console.log("dest:",dest);
// console.log("src:",src);