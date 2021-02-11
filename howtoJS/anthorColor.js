
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// 배운 함수
// element.classList.remove, add , contains 해당 클래스를 추가, 삭제한다. 라는뜻
// const hasclass = title.classList.contains(CLICKED_CLASS); // 해당함수를 포함하고있으면 true 아니면 flase

// if(hasclass){
//     title.classList.remove(CLICKED_CLASS);
// }else{
//     title.classList.add(CLICKED_CLASS);
//}


//toggle은 위의 함수를 축약해둔 상당히 편린한 함수.
//toggle 원리는 위의 함수인 것임. 해당하는 클래스가 없으면 추가 있으면 제거 계속 반복하는 원리
function handlerClick(){
    const CLICKED_CLASS = "clicked"; 
    title.classList.toggle(CLICKED_CLASS); // 위의 코드5줄을 한줄로 바꾸는 마법
}

function init(){
    title.addEventListener("click",handlerClick);
}
init();

