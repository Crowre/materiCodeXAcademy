const sayHello = (message = 'hello') => {
    console.log(message);
}
sayHello()
sayHello('hallo javascript')

const sayHello2 = message => {
    message = message != undefined ? message : 'hi javascript'
    console.log(message);
}
sayHello2('hi')

let price = 100
const applyDisount = (price, discount = 0.05) => {
    return price * (1 - discount)
}
console.log(applyDisount(price));