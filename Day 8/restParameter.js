const fnRest = (...arr) => {
    let str = ''
    for (let x of arr) {    //berawal dari array kosong
        str += x + ''
    }
    console.log(arr.toString());
    console.log(str);
}

const fn = (y, z, ...arr) => {
    let str = ''
    for (let x of arr) {
        str += x + ''
    }
    console.log(x, y, str);
}
fn('rest', 'parameter')
fn('rest', 'parameter', 1, 2, 3, 'saya', 'belajar', 'javascript')
fnRest()
fnRest('reset', 'parameter', 1, 2, 3, 'saya', 'belajar', 'javascript')