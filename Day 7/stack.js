// const diagonal = panjang => {
// let hasil = []
let hasil = ''
panjang = 10;
for (let i = 1; i <= panjang; i++) {
    for (let j = 1; i <= panjang; j++) {
        if (i == j) {
            hasil += '*'
        } else {
            hasil += ''
        }
    }
    hasil += '\n'
}
// }
// console.log(diagonal(5));