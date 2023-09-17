const toDoForm = document.querySelector("#todo-input form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";



function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}




function deleteToDo(event) {
    console.log("deleteToDo activated");
    const li = event.target.parentElement;
    console.log(li.id);
    toDos = toDos.filter((element) => String(element.id) !== li.id);
    saveToDos();
    li.remove();
}




function paintTodo(newTodoObj) {
    console.log("paintTodo activated");
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text+" ";
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}




function handleToDoSubmit(event) {
    event.preventDefault();
    console.log("handleToDoSubmit activated");
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => { paintTodo(element); } );
}