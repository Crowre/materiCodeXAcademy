//deklarasi var maka scopenya global dan local
//jika deklarasi di luar fungsi maka scopenya adalah global
//jika deklarasi di dalam fungsi maka scopenya adalah local

let greeting = 'hi'
let greeting1 = ''
function say() {
    greeting1 = 'hello'
    console.log(greeting1);
}

say()
console.log(greeting);
console.log(greeting1);

let x = 10
if (x == 10) {
    let x = 20
    console.log(x);
}
console.log(x);

var y = 20

let bar = () => {
    let y = 20
    console.log(y);
}
bar()
console.log(y);

var greeter = 'hey hi'
var times = 4
if (times > 3) {
    var greeter = 'say hello instead'
}
console.log(greeter);

let tomeet = 'say hi'
if (true) {
    let tomeet = 'say my name instead'
    console.log(tomeet);
}
console.log(tomeet);