const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


// 3항 연산자를 이용해서 만약  `${getHours < 10 ? `0${getHours}` : getHours}` 
// 만약 getHours가 10보다 작다면 앞에 0을 붙히고 아니면 그대로 출력하라는 뜻
function getDate() {
    const date = new Date();
    const getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const getSecond = date.getSeconds();
    clockTitle.innerText = `${getHours < 10 ? `0${getHours}` : getHours}:${getMinutes < 10 ? `0${getMinutes}` : getMinutes}:${getSecond < 10 ? `0${getSecond}` : getSecond}`;

}

function init() {
    getDate();
    setInterval(getDate, 1000);
}
init();
