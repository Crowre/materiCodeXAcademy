(function (str) {
    console.log('hi javascript anonymous function' + str);
})('selamat')

setTimeout(() => { console.log('Engine Start..'); }, 1000)
setTimeout(() => { console.log(`masukkan gigi 2 untuk menjalankan mobil`); }, 2000)
setTimeout(() => { console.log('mobil berjalan'); }, 3000)
setTimeout(() => { console.log('mobil berhenti'); }, 4000)
setTimeout(() => { console.log('mesin mobil mati'); }, 5000)
