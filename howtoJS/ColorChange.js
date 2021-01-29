const title = document.querySelector("#title")
const BASE_CORLOR = "rgb(27, 156, 252)";
const ANOTHER_COLOR = "#55E6C1";

function handlerClick(){ // 베이스색을 console.log로 찍어보고 rgb값 상수로 지정해두어야함.
    const currentColor = title.style.color;
    if(currentColor === BASE_CORLOR){
        title.style.color = ANOTHER_COLOR;
    }else{
        title.style.color = BASE_CORLOR;
    }
}

function init(){
    title.style.color = BASE_CORLOR;
    title.addEventListener("click",handlerClick);
}

function okey(){
    console.log("Are you click??!");
}
init();

window.addEventListener("click",okey);