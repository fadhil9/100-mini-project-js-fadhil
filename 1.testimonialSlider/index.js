const dataTestimoni = [
    {
        name:'muhamad fadhil',
        photoUrl:'https://media.licdn.com/dms/image/D5603AQGedceHUylF3A/profile-displayphoto-shrink_800_800/0/1703323898473?e=2147483647&v=beta&t=Pfc090VhF9fsmk9df0UMKzeUq0nn3sRijvb8ZAwt2tM',
        Text :'mantap banget dah pokoknya'
    },
    {
        name:'Rick and Morty',
        photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGK3ohKhXK7nUbPx4aH-XRDlBkSfukMkeew&s',
        Text:'luba luba dub dubbb!!!!!!!!!!!!!!!'
    },
    {
        name:'Algorithm',
        photoUrl:'https://awsimages.detik.net.id/community/media/visual/2021/04/14/jakarta_169.jpeg?w=1200',
        Text:'Sungguh menakjubkan melihat bagaimana konsep dasar yang saya kembangkan dalam aljabar dan algoritma telah berevolusi menjadi teknologi yang begitu canggih. Teknologi komputer ini adalah bukti dari potensi tak terbatas dari matematika'
    },
    {
        name:'Elon musk',
        photoUrl:'https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg',
        Text:'ini adalah contoh luar biasa dari inovasi yang memajukan peradaban manusia. Di masa yang penuh tantangan global seperti ancaman Perang Dunia Ketiga, teknologi dan kecerdasan buatan menjadi kunci untuk masa depan yang lebih aman.dari eksplorasi Mars hingga pengembangan AI',
    }
]

const image = document.querySelector('img');
const text = document.querySelector('.text');
const userName = document.querySelector('.username');

let dataKe = 0;

updateTesti();

function updateTesti(){
const {name,photoUrl,Text} = dataTestimoni[dataKe];

image.src = photoUrl;
text.innerHTML =Text;
userName.innerHTML =name;

dataKe++;

if(dataKe === dataTestimoni.length){
    dataKe = 0;
}

setTimeout(()=>{
    updateTesti();
},7000)

}
