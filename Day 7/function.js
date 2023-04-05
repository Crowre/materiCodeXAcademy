//function ada 4 macam
// 1.regular function
// 2.callback function
// 3.anonymous function
// 4.arrow function

// 1.regular function

//function void
function greetings() {
    let msg = 'halo wildan'
    console.log(msg);
}
greetings()

//return function
function greetings1() {
    let msg = 'halo javascript'
    return msg
}
let result = greetings1()
console.log(result);
console.log(greetings1());

//membuat regular function
function penambahan(x, y) {
    return x + y
}
console.log(penambahan(20, 30));

//membuat arrow function
const penambahan1 = (x, y) => {
    return x - y
}
console.log(penambahan1(40, 50));