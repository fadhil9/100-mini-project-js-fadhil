// 1.buat dom form,ul dan input
// 2.buat dummy data array object isinya name string: dan checked :boolean
// 3.masukin kelocal storage  nama list diubah JSON.stringify
// 4.buat variable let list fetc data dari localStorage di parse
// 5.jika ada data dilist maka di foreach terus masukin function tampilinTodo(isilist)
// 6.dom form jika disubmit panggil tampilinTodo() tanpa parameter
// 7.buat function tampilinTodo(todo), buat let newTask
// 8.jika todo ada true alias ada isinya berarti itu dari fetch maka newtask = todo.name
// jika bukan berarti itu dari submit form maka newtask = dominput.value
// 8.1 kosongin lagi inputEl.value ='' biar bisa digunain lagi
// 9.buat element list, jika todo ada dan todo.checked ada maka list tambahin class checked
// 10.buat element div isi innerhtml font awesome checked
// 11.masukin div ke list masukin list ke dom ul
// 12.jika div diclick element list toggle class checked dan panggil updatelocalstorage()
// 13.buat element list , buat elemend div isi div innerhtml font awesome yang trash
// 14.masukin div ke list masukin list ke dom ul
// 15.jika div diclick element list.remove() dan panggil updatelocalstorage()
// 16.buat func updateLocalStorage(), inisialiasasi ulang variable list jadi array kosong
// buat variable semuaLi isinya queryselectorAll('li'), foreach semuaLi push ke list
// dan var list masukin ke localStorage

const formEl = document.querySelector('.form');
const uEl = document.querySelector('.list');
const inputEl = document.querySelector('.input');

let dummydata = [{name:"makan",checked:true},{name:"minum",checked:false}];
localStorage.setItem("list",JSON.stringify(dummydata));

let list = JSON.parse(localStorage.getItem("list"))
if(list){
    list.forEach(todo => {
        tampilinTodo(todo)
    });
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    tampilinTodo()
})

function tampilinTodo(todo){
    let newTask;

    if(todo){
        newTask = todo.name;
    }else{
        newTask = inputEl.value;
    }
    inputEl.value= '';

    let liEl = document.createElement('li');
    liEl.innerText = newTask;
    let checkedBtn = document.createElement('div');
    checkedBtn.innerHTML =`<i class="fa-solid fa-check"></i>`
    if(todo && todo.checked){
        liEl.classList.add("checked")
    }

    liEl.appendChild(checkedBtn);
    uEl.appendChild(liEl)

    checkedBtn.addEventListener('click',()=>{
        liEl.classList.toggle('checked');
        updateLocalStorage()
    })

    const trashBtn = document.createElement('div');
    trashBtn.innerHTML =`<i class="fa-solid fa-trash"></i>`
    
    liEl.appendChild(trashBtn);
    uEl.appendChild(liEl)
    
    trashBtn.addEventListener('click',()=>{
        liEl.remove();
        updateLocalStorage();
    })
}

function updateLocalStorage(){
    let semuaLi = document.querySelectorAll('li');
    list = []

    semuaLi.forEach((todo)=>{
        list.push({
            name:todo.innerText,
            checked:todo.classList.contains('checked')
        })
    })

    localStorage.setItem("list",JSON.stringify(list))
}