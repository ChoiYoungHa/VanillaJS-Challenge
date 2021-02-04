const clockContainer = document.querySelector(".js-clock"), 
      clockTitle = clockContainer.querySelector("h1");



function getDate(){
    const date = new Date();
    const getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const getSecond = date.getSeconds();
    clockTitle.innerText = `${getHours < 10 ? `0${getHours}`: getHours}:${getMinutes < 10 ? `0${getMinutes}`: getMinutes}:${getSecond < 10 ? `0${getSecond}`: getSecond}`;
   
}

function init(){
    getDate();
    setInterval(getDate, 1000);
}
init();
