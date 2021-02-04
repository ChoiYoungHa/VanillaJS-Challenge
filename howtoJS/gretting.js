const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    grettings = document.querySelector(".js-grettings")

    const USER_LS = "currentUser"
    const SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const inputValue = input.value;
    paintGreeting(inputValue);
    saveName(inputValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    grettings.classList.add(SHOWING_CN);
    grettings.innerText = `Hello! ${text}`;
}


function loadName(){
    const userCurrent = localStorage.getItem(USER_LS);
    if(userCurrent == null){
        askForName();
    }else{
        paintGreeting(userCurrent);
    }
}

function init(){
    loadName();
}
init();