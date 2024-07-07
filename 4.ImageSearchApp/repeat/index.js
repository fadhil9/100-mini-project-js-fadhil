const acceskey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formElement = document.querySelector('form');
const inputUser = document.getElementById('search-input');
const results = document.querySelector('.results');
const showMore = document.getElementById('show-more');

//
let inputData = '';
let page = 1;

//function fetch data dan nunjukin datanya
async function searchImage() {
    inputData = inputUser.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acceskey}`
    const response = await fetch(url);
    const data = await response.json();
    const hasilHasil = data.results;

    if(page === 1){
        results.innerHTML = '';
    }
    
    hasilHasil.map((hasil)=>{
        const div = document.createElement('div');
        div.classList.add('result');

        const img = document.createElement('img');
        img.src = hasil.urls.small;

        const a = document.createElement('a');
        a.textContent = hasil.alt_description;
        a.href = hasil.links.html;
        a.target = "_blank";

        div.appendChild(img);
        div.appendChild(a);
        results.appendChild(div);

    })

    page++;

    if(page > 1){
        showMore.style.display = 'block'
    }
}

//tombol submit ngarahin kedata
formElement.addEventListener('submit',(event)=>{
    event.preventDefault();

    page = 1;

    searchImage();
})
//tombol show more
showMore.addEventListener('click',()=>{

    searchImage()
})