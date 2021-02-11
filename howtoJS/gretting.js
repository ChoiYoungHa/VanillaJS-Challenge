const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    grettings = document.querySelector(".js-grettings")

    const USER_LS = "currentUser" //브라우저 local Storage에 currentUser name값이 있는지 확인하기 위해 선언
    const SHOWING_CN = "showing" // css 클래스 showing을 적용해주기 위한 선언

function saveName(text){
    localStorage.setItem(USER_LS, text); // 핸들러함수에서 받은 agrument를 스토리지에 저장
}

function handleSubmit(event){
    event.preventDefault(); // 제출값이 document위까지 올라가는것을 방지하기 위해 사용
    const inputValue = input.value; // 값을 올라가지 않도록 잡고 그 값을 저장
    paintGreeting(inputValue); // 해당 값을 보여주는 함수실행
    saveName(inputValue); // 해당값을 저장하는 함수 실행
}


function askForName() {
    form.classList.add(SHOWING_CN); // form을 보여줌.
    form.addEventListener("submit",handleSubmit); // 제출을 대기하고 제출 시, 해당함수가 실행됨.
}

function paintGreeting(text){ // value값을 받아서 
    form.classList.remove(SHOWING_CN); // form을 감춰주고
    grettings.classList.add(SHOWING_CN); // h4를 보여주고
    grettings.innerText = `Hello! ${text}`; // h4에 agrument를 받아서 보여줌.
}


function loadName(){
    const userCurrent = localStorage.getItem(USER_LS); // 브라우저에 저장된 userCurrent의 vlaue값을 받아옴.
    if(userCurrent == null){ // 벨류값이 있고 없고에 따라 다음 로직 실행
        askForName(); // 이름을 물어보고 동시에 이름을 보여주고, 저장하는 기능까지 전부 갖춘 함수 실행
    }else{
        paintGreeting(userCurrent);
    }
}

function init(){
    loadName();
}
init();