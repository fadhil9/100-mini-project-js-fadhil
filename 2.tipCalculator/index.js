// ambil dom input dan tombol
const biaya = document.getElementById('biaya');
const tip = document.getElementById('tip');
const enter = document.getElementById('hitung');
const output = document.getElementById('total');

//buat function hitunganya
function jumlahkan() {
   const inputBiaya = biaya.value; 
   const inputTip = tip.value;
   
   const total = inputBiaya *(1+inputTip/100);
   output.innerText = total;
}

//ketika tombol enter diklik function aktif
enter.addEventListener('click',jumlahkan);