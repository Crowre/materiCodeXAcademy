//kumpulan propertis(key:value)

//cara akses data pada object type
//menggunakan dot nation (.)
//menggunakan kurung siku (membaca index)

let person = {
    firstName: 'Raihan',
    lastName: 'Rizqullah'
}

// console.log(person.firstName);

let contact = {
    'first Name': 'Wildan',
    'last Name': 'Hafidz',
    email: 'wildanhafidz01@gmail.com',
    phone: '082344556677',
    address: {
        building: '421',
        street: 'simpang gia',
        city: 'Padang',
        Province: 'West Sumatera',
        State: 'Indonesia'
    }
}
// console.log(contact['first Name']);
// console.log(contact.address.street);

//stack dan heap memory
//value pada object disimpan di dalam heap memory dan nama object dijadikan referensi pada penyimpanan data
let name = 'John Doe'
let newname = name
// console.log(name);

let personal = {
    'name': 'jon',
    'age': 23
}
let newPersonal = personal
personal.age = 20;
newPersonal.age = 26
console.log(personal);
console.log(newPersonal);

