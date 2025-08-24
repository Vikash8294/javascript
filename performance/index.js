// // code 1
// const t1 = performance.now();
// for(let i =0; i<100; i++){
//     let para = document.createElement('p');
//     para.textContent ="This is Para" +i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
//  console.log(t2-t1);
 



// //  code 2
// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for(let i=1;i<100;i++){
//     let para = document.createElement('p');
//     para.textContent ="This is Para" +i;
//     mydiv.appendChild(para);

// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// // console.log("code2",(t4-t3));




// document fragmentaion (best code)
// let fragment = document.createDocumentFragment();


// for(let i=0; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContect ="This is para" +  i + "abc";
//     //no reflow no repaint
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);


let fragment = document.createDocumentFragment();
for (let i =0;i<100;i++){
    let para = document.createElement('p');
    para.textContent = " this is para"+ i + "abs";
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
