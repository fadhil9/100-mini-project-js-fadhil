const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

const dummyData = [
    { name: "Belajar JavaScript", checked: true },
    { name: "Kerjakan PR", checked: false },
    { name: "Baca Buku", checked: false }
];
localStorage.setItem("list",JSON.stringify(dummyData));


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
    liel.innerText = newTask;
    ulEl.appendChild(liel);
    inputEl.value="";

    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
    liel.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
    liel.appendChild(trashBtnEl);
    
    checkBtnEl.addEventListener("click", ()=>{
        liel.classList.toggle("checked");
        updateLocalStorage();
    });

    trashBtnEl.addEventListener("click",()=>{
        liel.remove();
        updateLocalStorage();
    });
}

function updateLocalStorage() {
    const liels = document.querySelectorAll("li");
    list = [];
    liels.forEach((liel)=>{
        list.push({
            name:liel.innerText,
            checked:liel.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list));
}

