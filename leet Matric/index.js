document.addEventListener('DOMContentLoaded',function(){
const searchButton = document.getElementById("search-btn");
const usernameInput = document.getElementById("user-input");
const statsContainer = document.querySelector(".stats-container");
const easyProgressCircle = document.querySelector(".easy-progress");
const mediumProgressCircle = document.querySelector(".medium-progress");
const hardProgressCircle = document.querySelector(".hard-progress");
const easyLabel = document.getElementById("easy-label");
const mediumLabel = document.getElementById("medium-label");
const hardLabel = document.getElementById("hard-label");
const cardStatsContainer = document.querySelector(".stats-cards");

 function validation(username){ 
    if(username.trim() ===""){
        alert("username name should naot be empty");
        return false;
    }
    const regex = /^(?![-_])[a-zA-Z0-9_-]{4,20}(?<![-_])$/;
    const isMatching = regex.test(username);
    if(!isMatching){
        alert("inavlid username")
    }
    return isMatching;
   

 }

async function fetchUserDetails(username){
    try{
        searchButton.textContent="searching........";
        searchButton.disabled = true;
    // const respone = await fetch(url);
    const proxyUrl ='https://cors-anywhere.herokuapp.com/'
    const targeturl = `https://leetcode.com/graphql/`;
    const myHearders =new Headers();
    myHearders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: `
            query userSessionProgress($username: String!) {
                allQuestionsCount {
                    difficulty
                    count
                }
                matchedUser(username: $username) {
                    submitStats {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                        totalSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }
        `,
        variables: {
            "username": ""
        }
    }
    );
    
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
    };
    
   

    if(!respone.ok){
        throw new Error("unable to fetch the user detalis");
    }
    const data = await response.json();
    console.log("logging data",data);
}
catch(error){
    statsContainer.innerHTML=`<p> no dtat found</p>`

}
finally{
    searchButton.textContent="Search";
        searchButton.disabled = false;



}


}

searchButton.addEventListener('click',function(){
    const username = usernameInput.value;
    console.log("logging username:",username);
    if(validation(username)){
        fetchUserDetails(username);
    }
})



})