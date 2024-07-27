const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const ulEl = document.querySelector('.list');

const dummyDataTodolist = [
    {name:"belajar", checked:true},
    {name:"jogging", checked:false}
]
//buat localstorage data array object nama tipe string dan checked tipe bolean untuk todolistnya
localStorage.setItem("list",JSON.stringify(dummyDataTodolist)); //wajib di stringify untuk simpan kelocalstorage


//buat if statement, kalo ada data list dilocalstorage tampilin lewat function todolist
let list = JSON.parse(localStorage.getItem("list")) //WAJIB DIPARSE biar bisa dibaca 
if(list){
    list.forEach(todo => {   //karna data array object maka diforeach
        tampilinTodo(todo)        
    });
}
// ketika form disubmit juga memanggil function todo untuk menyimpan dan menampilkan todo
formEl.addEventListener('submit',(event)=>{
    event.preventDefault()
    tampilinTodo();
})

// buat function buat tampilin todo list yaitu membuat document li,dan classnya di js dan juga panggil function
//untuk update data  dilocal storage
function tampilinTodo(todo){
    let newTodo;
    // kalo todo itu ada, maka itu dari array object localstorage makanya todo.name simpen dinewtodo
    //kalo ga ada berarti itu dari input makanya inputEl.value
    if(todo){
        newTodo = todo.name
    }else{
        newTodo = inputEl.value
    }

    const li = document.createElement("li");
    li.innerText = newTodo; //nah newtodo nya masukin ke text nya element li yang baru dibuat
    ulEl.appendChild(li)
    inputEl.value = '' //disini value inputel kosongin lagi biar siap dipake lagi

    if(todo && todo.checked){ //kalo parameter todo ada aliasa dr localstorage dan todo.checked itu true maka element li kasih class checked
        li.classList.add('checked')
    }

    const checkBtnEl = document.createElement('div');
    checkBtnEl.innerHTML = `<i class="fa-solid fa-check"></i>`
    li.appendChild(checkBtnEl);

    checkBtnEl.addEventListener('click',()=>{
        li.classList.toggle('checked')
        updateLocalStorage()
    })
    
    const trashBtnEl = document.createElement('div');
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    li.appendChild(trashBtnEl);
    
    trashBtnEl.addEventListener('click',()=>{
        li.remove('checked')
        updateLocalStorage()
    })
}

function updateLocalStorage(){
    let semuaLi = document.querySelectorAll("li");
    list = [] //cara updatenya list lama kosongin lagi
    // dan push list dari data element li pake object
    
    semuaLi.forEach((liel)=>{
        list.push({
            name : liel.innerText,
            checked : liel.classList.contains('checked')
        })
    })
    //abis itu simpen ke localstorage list array objectnya jangan lupa harus json.stringify
    localStorage.setItem("list",JSON.stringify(list))
}

