const body = document.querySelector("body");

const IMG_NUMBER = 6;



function painting_img(imgNum){
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`
    body.appendChild(image);
    image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    painting_img(randomNumber);

}

init();