let counter = 1024
let nama = 'wildan'
let umur = 23

//mengecek tipe data
counter = false
console.log(typeof (counter));

console.log(`namaku ${nama} umurku ${umur}`);

//memanggil variable yang belum dideklarasi
let jaja;
console.log(jaja);
//mengeluarkan output undefined

//null type
let obj = null
console.log(typeof obj); //object
console.log(null == undefined);//true