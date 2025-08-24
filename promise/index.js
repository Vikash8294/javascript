// let fpromis = new Promise((resolve, reject) => {
//     console.log("vikash");
//     // resolve(1001);
//     reject(new Error("server issues"));
// })

// let spromis = new Promise((resolve , reject) =>{
//     let sucess = true;
//     if(sucess=== true){
//         resolve("promisse Fulfulied");
//     }
//     else{
//         reject("promise rejecct");
//     }

// })


 // for one then and cathch
// spromis.then((message) =>{
//     console.log("then ka msg is" + message);

// }).catch((error)=>{
//     console.log("error is"+ error);
// })

// more than then and finally

// spromis.then((message) =>{
//     console.log("then ka msg is" + message);
//     return "second msg";

// }).then((message) =>{
//     console.log("then ka msg is"+ message);
//     return "third msg";
// }).then((message) =>{
//     console.log("then ka msg is"+ message);
// }).finally((message)=>{
//     console.log("mai to chalunga hi"+ message);
// })


//  multiple promise

let promise1 = new Promise((resolve,reject) =>{
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject) =>{
    setTimeout(resolve,2000,"Second");
})

let promise3 = new Promise((resolve,reject) =>{
    setTimeout(resolve,3000,"Third");
})
promise.all([promise1,promise2,promise3]).then((value) =>{
    console.log(value);
})

