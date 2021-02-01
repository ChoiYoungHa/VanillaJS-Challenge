const clockContainer = document.querySelector(".js-clock"), 
      clockTitle = clockContainer.querySelector("h1");


function getDate(){
    const date = new Date();
    const getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const getSecond = date.getSeconds();
    clockTitle.innerText = `${getHours}:${getMinutes}:${getSecond}`;
    
}

function init(){

}
init();
getDate();
