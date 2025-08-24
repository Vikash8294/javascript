// console.log("baj");

// *****************obect *************
//  difference betwwen deep nad shallow copy study by your self

// let obj ={
//     name: "vikash",
//     age: 20,
//     greet: (name)=> {
//         console.log("good morning",name);
//     }
// };
// console.log(obj);
// obj.greet("vikash");




// *********************creation of arry

// let aar =[1,2,3,4,50];
// console.log(aar);


// *************************array constructor
// // arry constactor
// let brr = new Array('vikash',2,true);
// // *****************bulit in function**********
// brr.push('singh');
// brr.pop();
// brr.shift(); // remove left most element
// brr.unshift("ajay"); // add item at the first postion 
// brr.push(60);
// brr.push(50);
// brr.push(40);
// brr.push(30);


// console.log(brr.slice(2,4));// new part 

// ************splice***********
// brr.splice(1,2,"kunal"); // from index 1 remove 2 item and kunal it mean 

// brr.splice(1,0,"kunal"); we are not removing any item (0) but adding kunal to index 1


// console.log(brr);


//  **************map*******************

// let arr =[1,2,3,4]; 
// //  using map to find square of no
);

// })

// *********************filter*********
// let arr =[1,2,3,4];
// let aws = arr.filter((num) =>{
//     if(num%2==0){
//         // console.log(num);
// let ans =arr.map((number)=>{
//     return number*number;
//  })
//   console.log(ans);

//  using map we can print the index also

// arr.map((num,index) =>{
//     console.log("index of ",num,"is :",index
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(aws);


//************************* */ filter string value only

// let arr =[1,2,'love','kunal',null];

// let aws =arr.filter((num) =>{
//     if(typeof(num)== "string"){
//         return num;
//     }
// })
// console.log(aws);

// **************************reduce*****************/

// *************this will give the sum of array


// let arr = [10,20,30,40];
// let ans = arr.reduce(function (acc,curr){
//     return acc + curr;

// },0 );
// console.log(ans);


// *************sorting***********

// let arr = [9,1,7,4,2,8];
// let aws = arr.sort();
// console.log(aws);


//  for descendig order***********

// let arr = [9,1,7,4,2,8];
// let aws = arr.sort();
// let dec = arr.reverse()
// console.log(dec);

// ****************************index of**********
// let arr = [9,1,7,4,2,8];
// let aws = arr.indexOf(2);
// console.log(aws);

// ******************************find**********************
// let arr =[10,20,30,40,50,60];
// let aws = arr.find((num) =>{
//     return num >= 40;
    
// });
// console.log(aws);

// *************for each*********
// let arr = [10,20,30];
// arr.forEach((value, index) =>{
//     console.log("number :",value ,"index:", index);
// })
// ***************orrrrrrrrrrrrrrrr***
// arr.map((num,index) =>{
//     console.log("number",num,"index",index);
// })


// ****************************for in****************************

// let obj ={
//     name: "vikash",
//     class : "mca",
//     age: 22,
//     weight :72,
//     greet : function(v){
//         console.log("hello",v);
//     }

// };
// for (let key in obj){
//     console.log(key ," ",obj[key]);
// }



// ************************for of************

// let arr= [10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

let fullName = "vikash Kumar Singh";
for(let value of fullName){
    console.log(value);
}



// *****************orignal or tradinal way to aases arr
// for(let i =0; i<(arr.length);i++){
//     console.log(arr[i]);
// }


// *******************array with finction********

// let arr =[10,20,30,40];
// let aws =arr.reduce((acc,curr) =>{
//     return acc+curr;
// },0)
// console.log(aws);



// function getSum(arr){
//     let sum =0;
//     for(let i =0;i<(arr.length);i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

// let sum =0;
// arr.forEach((num) =>{
//     sum = sum+num;
    
    
// }
// )
// console.log(sum);

// function getSum(arr){
//     let sum = 0; 
//     arr.forEach((num) => {
//         sum = sum +num;

//     })
//     return sum ;
// }
// let aws = getSum(arr);
// console.log(aws);



// ***********
// access the array  with index ***************
// console.log(brr[2]);



const arr = [49,50,60,12,56,23,34,10,9];
// let n = arr.map(num => split(",").num.trim());
// let filt = n.filter(num => num > 10).sort(a,b)= a - b;
// console.log(n.join(","));

let a = arr.filter(num =>{
    num > 10;
})
let aws = a.sort((a , b) =>{
    a-b;
});
console.log(aws);