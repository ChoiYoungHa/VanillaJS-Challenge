/*자바스크립트는 html과 css를 바꾸는 기능을 하지만 이벤트에 반응하기 위해 만들어졌다.

이벤트란? 웹사이트에서 발생하는 것들을 말한다.
click,resize,submit,input, change, load, before, closing, printing 같은 것들

addEventListener구문
target.addEventListener(type, listener);

예제)
function handleResize(){
console.log("I have been resized")}

resize
window.addEventListener("resize", handleResize);

handleResize 를 할 때 , 뒤에 ()를 붙이지 않는다. ()를 붙이면 함수가 바로 호출되기 때문*/

const title = document.querySelector('#title');

function move(){ // window "resize"
    console.log('Moving!');
}

function res(){ //title "click"
    title.style.color = "blue";
}

function evn(event){ //window "resize"
    console.log(event);
}

window.addEventListener("resize",evn);