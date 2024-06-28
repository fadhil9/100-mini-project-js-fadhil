const acceskey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formElement = document.querySelector('form');
const searchInputElement = document.getElementById("search-input");
const searchResultElement = document.querySelector(".search-results");
const showMoreButtonElement = document.getElementById('show-more-button');

let inputData = '';
let page = 1;

async function searchImages() {
    inputData = searchInputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acceskey}`

    const response = await fetch(url);
    const data = response.json();

    if(page === 1){
        searchResultElement.innerHTML = "";
    }

    const results = data.results
}

page++;

if(page > 1){
    showMoreButtonElement.style.display = 'block';
}
