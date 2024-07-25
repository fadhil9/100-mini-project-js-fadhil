const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const ulEl = document.querySelector('.list');

const dummyDataTodolist = [
    {name:"belajar", checked:true},
    {name:"jogging", checked:false}
]
//buat localstorage data array object nama tipe string dan checked tipe bolean untuk todolistnya
localStorage.setItem("list",JSON.stringify(dummyDataTodolist));
//buat if statement, kalo ada tampilin lewat function todolist
