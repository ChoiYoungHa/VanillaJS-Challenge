const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];
let plusNumber = 1;



function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDos.filter(function (todo){ // toDos는 옵젝트 애는 여러개의 아이템을 가지고있음. filter는 forEach와 같이 아이템을
        return todo.id !== parseInt(li.id); //하나하나 검사함. todo에 하나의 아이템이 올라가고 비교하는 로직을 수행 후, todo.id 와 li.id가
    }); // 아닌 것들만 list 형태로 cleanToDo에 저장이 된다. 그러면 (내가 클릭했던 것)을 제외한 나머지를 cleanToDo에 저장하고 

    toDos = cleanToDo; // toDos에 어싸인해서 변경 
    save_Todos(); // 그리고 localStorage에도 저장.

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos); // forEach 함수를 사용하기 위해서 String 형태였던 loadedToDos를 Json 형태로 형변환
        parsedTodos.forEach(function (todo){ // 하나하나 아이템을 검사하고 
            paintTodo(todo.text); // 하나하나식 todo 오브젝트의 text값을 paintToDo에 argument 전달
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
    deBtn.addEventListener("click", deleteTodo); // deBtn click 시, 삭제

    const span = document.createElement("span");
    const newId = plusNumber;
    plusNumber += 1;

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDos_Obj = { // 파라미터로 받은 text와 시퀸스처럼 자동으로 생성되는 id를 Object로 저장 후
        text : text,
        id : newId
    };
    toDos.push(toDos_Obj); // 저장된 값을 toDos에 저장
    save_Todos(); // toDos의 값이 업데이트되고, 로컬 스토리지에도 저장.
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


