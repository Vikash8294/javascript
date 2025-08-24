// const title = prompt("enter the title");
// const Cname = prompt("enter the Cname");
// const views = prompt("enter the Views");
// const montsOld = prompt("enter the montsOld");
// const duration = prompt("enter the duration");

// document.getElementById("p1").innerText = `${title}`;
// document.getElementById("p2").innerText = `${Cname}`;
// document.getElementById("p3").innerText = `${views}`;
// document.getElementById("p4").innerText = `${montsOld}`;
// document.getElementById("p5").innerText = `${duration}`;

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 988888, 7, "58", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")