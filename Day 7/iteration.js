//perulangan / iterasi / iteration / looping

// let ranks = ['A', 'B', 'C']

//cara regular
// for (let i = 0; i < ranks.length; i++) {
//     console.log(ranks[i]);
// }

//membaca isi dari satu object
// for (let i in ranks) {
//     console.log(ranks[i]);
// }

//langsung menampilkan isi array
// for (let i of ranks) {
//     console.log(i);
// }

//forEach iteration
// ranks.forEach(value => {
//     console.log(value);
// })

//map iteration
// ranks.map(value => {
//     console.log(value);
// })

let person = [{
    firstName: 'wildan',
    lastName: 'hafidz',
    ssn: '339-223-3412'
},
{
    firstName: 'hafiz',
    lastName: 'umar',
    ssn: '631-235-3562'
}]
let personObj = {
    firstName: 'jaja',
    lastName: 'kela',
    ssn: '993-004-4353'
}
//berlaku untuk menampilkan 1 object saja
//jika objek lebih dari satu dalam satu array maka akan error
for (let i in personObj) {
    console.log(i + ':' + personObj[i]);
}

// for (let prop of personObj) {
//     console.log(prop);
// }

person.forEach(values => {
    console.log(values);
})

person.map(values => {
    console.log(values);
})

let count = 1
while (count < 10) {
    console.log(count);
    if (count === 5)
        break;
    count += 2
}

//anonymous function menjalankan function tanpa memanggil function
//contohnya perulangan map dan foreach di atas