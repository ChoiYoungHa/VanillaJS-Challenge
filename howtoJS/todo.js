const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.forEach(function (todo){
            paintTodo(todo.text);
        });
    }
}

function save_Todos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // 스토리지에 저장하기 위해서 stringify 사용
}

function paintTodo(text){
    const li = document.createElement("li");
    const deBtn = document.createElement("button");
    deBtn.innerText = "❌";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDos_Obj = {
        text : text,
        id : newId
    };
    toDos.push(toDos_Obj);
    save_Todos();
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",submitHandler);
}
init();


