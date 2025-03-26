// Perintah 1

console.log("Perintah 1")
let nama = "Zakky Aulia Aldrin";
let age = 20;
let mahasiswa = true;
console.log(nama + "\n" + age + "\n" + mahasiswa);

console.log("---------------------------------------");

//Perintah 2

console.log("Perintah 2")
function hitungSKS(ipk) {
    let sks;
    if (ipk >= 3.25) {
        pesan = "Anda visioner, gas ambil";
        sks = 24;
    } else if (ipk >= 2.75) {
        pesan = "Notbad lah ya, tapi cuma bisa ambil";
        sks = 21;
    } else if (ipk >= 2.5) {
        pesan = "Standar deh, semangat masih bisa ambil";
        sks = 18;
    } else if (ipk >= 2.0) {
        pesan = "Yuk ditingkatkan lagi semangat belajarnya, semester ini cukup";
        sks = 15;
    } else {
        pesan = "Ingat orang tua dirumah, semangat pejuang";
        sks = 12;
    }
    console.log(`IPK: ${ipk}, ${pesan} ${sks} SKS`);
}
let ipk = [3.75, 2.95, 2.60, 2.25, 1.7];

ipk.forEach(hitungSKS);
console.log("---------------------------------------");

//Perintah 3

console.log("Perintah 3")
console.log("berikut adalah bilangan genap dari 2 hingga 20")
for (i = 2; i <= 20; i+=2){
    console.log(i);
}
console.log("---------------------------------------");

//Perintah 4

console.log("Perintah 4")
function volumekubus(sisi){
    return sisi**3;
}

let sisi = [8, 12, 24, 4, 10];
sisi.forEach(i => console.log(`Volume dari kubus yang memiliki sisi ${i} cm adalah ${volumekubus(i)} cm³`));

console.log("---------------------------------------");

//Perintah 5

console.log("Perintah 5")
let angka = [20, 17, 12, 19, 7];
let total = angka.reduce((acc, curr) => acc + curr, 0);
console.log(angka);
console.log("Total jumlah angka dalam array:", total);

console.log("---------------------------------------");

