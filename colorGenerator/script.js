
let main = document.querySelector(".main");
let text = document.querySelector(".text")
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    main.style.backgroundColor = color;
    text.innerHTML= color
})