// async function getdata(){
//     setTimeout(function(){
//         console.log("inside the Settimeout");
//     },5000 );
// }
// getdata();


// Fecth Api

// async function getData(){
//     let respone = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await respone.json();
//     console.log(data);

// }
// getData();

//senorio:
//preapare url /api endpoint -> sync
//(awit) fetch data -> network call ->async
//process dat -> sync

//we will mark asyn as awit besuse if the url is not fetch and we proceess will gwt error to make sure first fecth exicute and then process we use awit

// post 
const myHearders = new Headers();
myHearders.append("Content-Type", "application/json");
const url = "https://jsonplaceholder.typicode.com/posts";
 
const option = {
    method  : "POST",   
    body: JSON.stringify({ username : "vikash" }),
    Headers: myHearders,

};

async function getData() {

    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("My data", data);
}


async function postData() {
    const response = await fetch(url, option);
    let data = await response.json();
    console.log("post data ", data);
}
async function process() {
   await postData();
   await getData();
    

}
process();



