const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");


let list = JSON.parse(localStorage.getItem('list'));

if(list){
    list.forEach(task => {
        toDoList(task);
    });
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList();
})

function toDoList(task) {
    let newTask = inputEl.value;

    if(task) {
        newTask = task.name;
    }

    const liel = document.createElement("li");
    if(task && task.checked) {
        liel.classList.add("checked");
    }
}