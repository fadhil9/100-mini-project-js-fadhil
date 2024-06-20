// ambil dom input dan button
const  bill = document.getElementById('inputBill');
const  persen = document.getElementById('inputPersen');
const  button = document.getElementById('enter');
const  output = document.getElementById('output');

// buat function itungan dari value inputan
function calculate() {

    const result = bill.value+(persen.value/100);
    output.innerText=result;   
}

//buat ketika button klik fungsi aktif
button.addEventListener('click', calculate)