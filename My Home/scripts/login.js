const submit = document.querySelector(".form");
const id = submit.querySelector("input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

const Username_KEY = "username";
const Username_Value = localStorage.getItem(Username_KEY);

function detectLogin(event) {
    event.preventDefault(true);
    const username = id.value;
    submit.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(Username_KEY, username);
    sayHello(username);
}

function sayHello (username) {
    submit.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector(".todo").classList.remove(HIDDEN_CLASSNAME);
}

if (Username_Value === null) {
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    submit.addEventListener("submit", detectLogin);
} else {
    sayHello (Username_Value);
}
