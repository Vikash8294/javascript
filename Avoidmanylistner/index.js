// let paras = document.querySelectorAll('p');
// // function add (event) {
// //     alert("you have clicked on: "+ event.target.textContent);
// // }

// // for(let i=0; i<paras.length; i++){
// //     let para = paras[i];
// //     para.addEventListener('click',add)}
    


let wrapper = document.getElementById('wapper');
function add (event) {
    //for only span
    if(event.target.nodeName=== 'SPAN' ){
        alert("you have clicked on: "+ event.target.textContent);

    }




        // alert("you have clicked on: "+ event.target.textContent);
    }

document.addEventListener('click',add);