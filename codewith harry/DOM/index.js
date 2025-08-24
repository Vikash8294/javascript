const boxes = document.getElementsByClassName("box");
for (let j = 0; j<boxes.length; j++){
    const r = Math.floor(Math.random()* 256);

    const b = Math.floor(Math.random()* 256);

    const g = Math.floor(Math.random()* 256);

    boxes[j].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}