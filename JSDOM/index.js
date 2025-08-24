// const input = prompt("enter you name");
// document.getElementById('r').innerText = `welcome ${input}`;
// name in loop
// let y = '';
// for(let i =1 ;i<11;i++){

//   y += 'welcome'+ input + '\n';

    
// }

// document.getElementById('r').innerText += '\n'+ y;

// ;

// table
const n = prompt ("enter the table number");
let table = '';
for(let i =1;i<=10;i++){
    table += `${n} X ${i} = ${n*i} \n`;
}
document.getElementById('r').innerText += '\n'+ table;




// js DOM manipulation
// *****************windoww*******************

// window object ek global object hota hai aur ye hierachy me sbase upppar hota hai 
// ** created by browser by using with we can colse and open new window


// global variable (peroties of windows objet)
// globle method(behaviour of  window object)  it mean windows bobect is at top of all hierachy

// for ex :
// console.log("vikas");

// window.console.log("viaksh kumar");  it will also  run console its mean all funtion inculding console comes in window object



//  ***************************DOM **************
//  dom stands for (document object modedl)

// if you have any html code and coverted it into a js obeject then this js obejct is called  document  togeather form a document obeject model

//  html code is converted in js object in tree like structure ( chaterter -> tags -> token (by tonkeniser)) -> node) then its form a DOM



//***************BOM************** */ 
// all interaction betweeen the browser leaving the html contetnt all thesee interaction are undeer BOM



// <!-- update the document at specific location -->
// let mydiv =  document.querySelector('#mydiv');
// let mydiv =  document.querySelector('#mydiv');
// let newE = document.createElement('span');
// newE.textContent = "vikash Kumar"

// // mydiv.insertAdjacentElement('afterend',newE); 
// mydiv.insertAdjacentElement('afterbegin',newE); 
// // mydiv.insertAdjacentElement('beforerend',newE); 
// // mydiv.insertAdjacentElement('beforebegin',newE); 




// remove
// let mydiv =  document.querySelector('#mydiv');

// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fpara');
// parent.removeChild(child);






