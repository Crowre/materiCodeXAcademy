//jika slah satu penjumlah bertipe beda maka data akan ditambah adalah penggabungan 2 tipe tersebut seusai dengan tipe penjumlah

//assignment operator
let a = 10, b = 20, c = 30
console.log(a = b = c);//30

//unary operators
//+x dan -y digunakan untuk merubah nilai ke positif atau negatif
let x = -10
console.log(x);
let y = +x
console.log(y);

let s = '10'
console.log(s);//string 10
console.log(+s);//int 10

let f = false, t = true
console.log(+f);//0
console.log(+t);//1

let age = 25
age = age + 1
age += 1;
console.log(age);

//increment operator(prefix)
let weight = 90
weight = ++weight + 5
console.log(weight);

//increment operator(postfix)
let height = 100
height = height++ + 5
console.log(height);


let counter = '100';
if (counter === 100) {
    console.log('sama');
} else {
    console.log('beda');
}