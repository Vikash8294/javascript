// **********************complie time error**************

// // 1.*******syntax error********
// console.log (1;


// ******************** runtime error********

/*1. *****reference error **************************************/
// console.log(x);


// *********************error handling :-****************************
//  by using try catch block

// try{
//     console.log("try block start here");
//     // error -> reference error
//     console.log(x);
//     onsole.log('try block ends here');
// }
// catch(e){
//     // definr krte h , error k sath kyakrna h 
//     // retry logic 
//     // fallback mechanism 
//     // logging
//     // custom error
//     console.log('i am inside catch block')
//     console.log(e);

// }

// // finally block :- this will run everytime weather the error will occur or not
// finally{
//     console.log('i will run everytime as i am finally block ');
// }



// ******************************errror description by own ************************

// throw is use to give the custom error(self describe error)


// let's create a custom error 
// try {
//     console.log(x);
//     // erro -> reference error
// }
// catch(err){
//     throw new Error ("bhai phele declare kro, fer print karna");
// }

// let errorcode =100;
// if(errorcode ==100){
//     throw new Error ("invalid json");
// }










