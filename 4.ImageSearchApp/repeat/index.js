const acceskey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formElement = document.querySelector('form');
const inputUser = document.getElementById('search-input');
const results = document.querySelector('.result');
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
    const hasil = data.results;

    if(page === 1){
        results.innerHTML = '';
    }

    hasil.map((result)=>{
        
    })

    page++

    if(page > 1){
        showMore.style.display ='block'
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