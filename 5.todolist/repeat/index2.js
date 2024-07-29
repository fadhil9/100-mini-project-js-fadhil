//1. buat dom formEl,input,dan ul
//2.buat dummydata array object terus ubah json.stringify masukin localstorage
//3.buat variable list untuk nampung data yg diambil dari localstorage
// jgn lupa buat diparse
//4.jika list ada isinya maka foreach dan masukin ke function tampilintodo(list) ada parameter dan argumen
// 5.form dom jika disubmit maka memanggil tampilintodo() tanpa argumen dan parameter
// 6.buat variable newtodo,, jika func tampilintodo ada argumen maka itu artinya
// dari localstorage maka ambil dari argumen.name kalo ga ada argumen maka artinya itu dari form submit maka newtodo ambil dari dom input
// 7. buat li masukin ke ul,buat element div masukin ke dom li, masukin innerhtml icon check ke divs
// 8.cek jika ada parameter.checked true maka taro class checked ke elemen li
// 9.jika div yg isi icon check diclick maka ditogle class checked dan manggil updatelocalstorage()
// 10.buat point 7 bedanya isi icon trash
// 11.jika div yg isi icon trash diclick maka li.remove() manggil updatelocalstorage()
// 12.buat func updatelocalstorage(),, variable list inisialisasi ulang array kosong
// buat variable untuk mengambil dom queryselectorall li,,
// 13.variable dom li di foreach  dan dipush object ke list

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const uEl = document.querySelector('.list');

let dummydata = [{name:"makan",checked:true},{name:"makan",checked:false}]
localStorage.setItem("list",JSON.stringify(dummydata))

let list = JSON.parse(localStorage.getItem("list"))

if(list){
    list.forEach(todo => {
        tampilinTodo(todo);
    });
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    tampilinTodo();
})

function tampilinTodo(todo) {
    let newTask;
    
    if(todo){
        newTask = todo.name;
    }else{
        newTask = inputEl.value
    }
    
    let liEl = document.createElement('li');
    if(todo && todo.checked){
        liEl.classList.add('checked')
    }
    liEl.innerText = newTask
    uEl.appendChild(liEl);

    inputEl.value='';

    const checkedBtn = document.createElement("div");
    checkedBtn.innerHTML =`<i class="fa-solid fa-check"></i>`
    liEl.appendChild(checkedBtn);
    checkedBtn.addEventListener('click',()=>{
        liEl.classList.toggle('checked')
        updateLocalStorage();
    })
    
    const trashBtn = document.createElement("div");
    trashBtn.innerHTML =`<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtn);
    trashBtn.addEventListener('click',()=>{
        liEl.remove('checked')
        updateLocalStorage();
    })
}

function updateLocalStorage(){
    const semuaLi = document.querySelectorAll('li');
    list = [];

    semuaLi.forEach((li)=>{
        list.push({
            name:li.innerText,
            checked:li.classList.contains('checked')
        })
    })

    localStorage.setItem("list",JSON.stringify(list))
}