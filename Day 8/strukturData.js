let buah = ['anggur', 'mangga', 'anggur']
let buahNew = buah.slice(1, 2)
console.log(buahNew);
console.log(toString());
console.log(buah.join(' '));
buah.push('durian')//menambahkan data ke array paling belakang
// console.log(buah);

buah.pop()//menghapus index paling akhir
// console.log(buah);

buah.unshift('durian')//menambahkan index paling depan
// console.log(buah);

buah.shift()//menghapus index paling depan
// console.log(buah);

let person = [
    { nama: 'alex', alamat: 'bandung' },
    { nama: 'wil', alamat: 'bandung' },
    { nama: 'dane', alamat: 'bandung' },
    { nama: 'lynn', alamat: 'bandung' },
    { nama: 'hafidz', alamat: 'bandung' },
    { nama: 'nordhan', alamat: 'bandung' },
    { nama: 'fero', alamat: 'bandung' }
]
// person.push({ nama: 'jeje', alamat: 'bogor' })
// console.log(person);
// person.pop()
// console.log(person);

// let buah1 = ['anggur', 'mangga', 'salak']
// buah1[1] = 'pisang'
// console.log(buah1);

// pembahasan
// foreach
// map
// slice
// Filter
// join

person.forEach((value, index) => {
    console.log(index + 1, ".", value.nama)
})

const personNew = person.map((value, index) => {
    return `${index + 1}.${value.name}`
})

// person.forEach((value, index) => {
//     return `${index + 1}.${value.nama}`
// })

// console.log(personNew);

const personFilter = person.filter(values => {
    return values.nama != 'fero'
})
console.log(personFilter);

const personFind = person.find(value => {
    return value.nama == 'alex'
})
console.log(personFind);

console.log(person.map(u => u.nama).join(','));