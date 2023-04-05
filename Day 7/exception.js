//digunkan untuk mencoba dan mengatasi error pada kode

// let result = add(10, 20)
// console.log(result);
// console.log('bye');


// try{
//     //code may cause error
// }catch(error){
//     //code to handler error
// }

// try {
//     let result = add(10, 20)
//     console.log(result);
// } catch (e) {
//     console.log({ name: e.name, message: e.name });
// }

//jika tidak dilakukan try-catch maka code akan terputus

// console.log('bye');

//membuat function untuk menangani error
const customeHandlingError = (name, message) => {
    return { name: name, message: message }
}

let angka = 'aada'
try {
    if (angka == '')
        throw customeHandlingError('validasiError', 'angka tidak boleh kosong')
    //throw new Error('buat terlebih dulu datanya')
    if (typeof angka != 'number')
        throw customeHandlingError('validasiError', 'hanya boleh angka dan tidak ada yang lainnya')
    //throw new Error('hanya boleh angka')

    console.log(`umur anda ${angka}`);

} catch (e) {
    console.log(e.name, ':', e.message);
}

// try {
//     let hasil = penambahan(10, 20)
//     console.log(hasil);
//     throw new ReferenceError('silahkan dbuat fungsi terlebih dahulu')
// } catch (e) {
//     console.log(e.name, ":", e.message);
// }
// console.log('perbaiki error jika error');

// finally digunakan untuk mengeksekusi kode terlepas dari hasil kodingannya