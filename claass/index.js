class Human{
    // properties
    // age = 18; // by default public

    age ; // using constructor
    #wt = 64; // by using '#' we can define any variable as private  
    heigth = 165;

    constructor(newAge,newHeight,newWeight){
        this.age = newAge;
        this.heigth = newHeight;
        this.#wt = newWeight ;
    }

    // behaviour
    walking(){
        console.log("i am walking" , "weight:",this.#wt); // it can we asse into a class but not ousite a class
        //                                 *************important*********
        // by using getter and setter we can asses the private maember outise the class

    }
    get fetchHi(){
        console.log(this.heigth);
    }
    get fetchWeight (){
        return this.#wt;  // (getter)to fetch the value
    }
    set modifyWeigth(num){
        this.#wt = num; // (setter)
        // to modify the vlaue
    }
    runnig(){
        console.log("i am running");
    }
    
}
let obj = new Human(50,220,110);

// console.log(obj.fetchWeight);

// // asses the getter and setter
obj.modifyWeigth = 50;
console.log(obj.fetchWeight);
console.log(obj.fetchHi);




//  default parameter

// 1.we can also make multiple defalut parameter like (firstname ="vikash",lastname+"singh")

// function sayName(myName ="prince"){
//     console.log(myName);
// }
// // sayName("vikash"); //vikash
// sayName(); // uses the default value


// // 2. dependent parameter

// function sayName(firstname ="prince",lname=firstname.toLocaleUpperCase()){
//     console.log("my name is :",firstname,"", lname);
// }
// // sayName("vikash"); //vikash
// sayName(); // uses the default value



// defalut parameter can be object

// function solve(value = {name:'vaiksh',age : 50}){
//     console.log(value);
// }
// solve(); 

// defalut parameter can be  array and parameter as null and undefined


// function solve(value = ['love'
// , 'rahul']){console.log(value);
// }
// solve(null); // return null
// // solve(undefined); // take the defalut value


// defalut parameter can be  function

// function getAge(){
//     return 120;
// }
// function utility(name = "prince ", age = getAge()){
//     console.log(name,age);

// }
// utility();

