//regex

//sumber : regex101.com

let inputTxt = 'javascript'
let num = "089488776655aaaAAA"
let number = /[^0-9]+$/;
let TextData = /[a-zA-Z]+$]/
if (num.match(number)) {
    console.log(num);
    true
} else {
    console.log('hanya boleh angka');
    false;
}

if (inputTxt.match(TextData)) {
    console.log(inputTxt);
    true;
} else {
    console.log('masukkan character');
    false;
}

let password = 'kenapaAS123%^&'
//validasi password
var MatchComplete = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,17}+$/
if (password.match(MatchComplete)) {
    console.log('anda bisa login');
    return true
} else {
    console.log('anda tidak bisa login');
    return false
}