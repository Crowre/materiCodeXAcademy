//string type

// let message = 'I\'m also a valid string';
// console.log(message);
// let msg = "I'm also a valid string";
// console.log(msg);
// let mg = `${msg} + ${message}`
// console.log(mg);

// let js = 'javascript'
//cara lama
// console.log(js.charAt(1));

//cara baru untuk mencari index ke 0
// console.log(js[0]);

//menghitung panjang variable
// console.log(js.length);

//membaca index terakhir
// console.log(js[js.length - 1]);

//method string type substring
// let jkl = 'java script'
// let oldJkl = jkl.substr(0, 4)
// let newJkl = jkl.substring(0, 4)
// console.log(newJkl);

//trim()
// let space = ' hi '
// let no_space = space.trim()
// console.log(no_space); //hi

//toLowerCase dan toUpperCase
// let greeting = 'Hello'
// console.log(greeting.toLowerCase()); //hello
// console.log(greeting.toUpperCase()); //HELLO

//mencari string dengan method search()
// let src = "that is a jerapah"
// let pos = src.search(/is/)
// console.log(pos);

//mengganti string dengan method replace()
let rep = "the boy is cooking in the kitchen"
let newRep = rep.replace(/the/, "a")//merubah string "the" yang pertama
let newRep1 = rep.replace(/the/g, "a")//merubah string "the" secara global
console.log(newRep);
console.log(newRep1);