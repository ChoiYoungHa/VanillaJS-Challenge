
//getElementById 이건 아이디만 검색 querySelector 이건 id, class 최상위 dom에서부터 검색
const title = document.querySelector("#title");
title.innerHTML="Hello Js!";

//console.dir을 통해서 객체의 요소들을 검색해볼 수 있음.
//객체에 .으로 접근해서 요소를 사용하면되는 간단한 원리
console.dir(document);
title.style.backgroundColor = "red";
document.title = "one a margine forever margine";