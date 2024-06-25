//ambil domnya 
const date = document.getElementById('date');
const button = document.getElementById('button');
const output = document.getElementById('output');


// function kalo udh input tanggal jalanin function umur
function calculate(){
    const tglLahir = date.value;
    if(tglLahir === ""){
        alert("Masukan Tanggal lahir anda terlebih dahulu");
    }else{
        const umur = dapetUmur(tglLahir);
        output.innerText = `Umur anda ${umur} tahun`
    }
}

//function dapetin umur
function dapetUmur(params){
    const tglLahir = new Date(params);
    const tglSkrg = new Date();

    let umurUser = tglSkrg.getFullYear() - tglLahir.getFullYear();
    const bulan = tglSkrg.getMonth() - tglLahir.getMonth();

    if(bulan < 0 ||(bulan === 0 && tglSkrg.getDate() <tglLahir.getDate())){
        umurUser--
    }else if(bulan === 0 && tglSkrg.getDate() == tglLahir.getDate()){
        alert("Selamat ulang tahun!")
    }
    return umurUser;
}

//addeven listener kalo klik jalan funcntion 
button.addEventListener('click',calculate);