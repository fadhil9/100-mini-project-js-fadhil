// dom nya
const button = document.getElementById('button');
const tgl = document.getElementById('date');
const output = document.getElementById('output');


// function menghitung
function calculateAge() {
    const tglLahir =tgl.value;
    if(tglLahir === ""){
        alert("Tolong isi terlebih dahulu tanggal lahir anda")
    }else{
        const Hasilumur = getAge(tglLahir);
        output.innerText = Hasilumur;
    }

    
}

// //function  input tanggal
function getAge(params) {

    tglSkrg = new Date();
    tglLahir = new Date(params);

    let umur =  tglSkrg.getFullYear() - tglLahir.getFullYear();
    const month = tglSkrg.getMonth() - tglLahir.getMonth();
    
    if(month < 0 || (month === 0 && tglSkrg.getDate() < tglLahir.getDate())){
        umur--;
    }else if(month === 0 & tglSkrg.getDate() === tglLahir.getDate()){
       alert("happy birthadayy !!") 
    }
    return umur;
}
//btn addeven click aktifin function menghitung
button.addEventListener('click',calculateAge);