//menggunakan .repeat method

let start = 1
let spac = ' '
let per = 5;

// if()
// for (i = 1; i <= per; i++) {
//     for (j = per - 1; j > 0; j--) {
//         console.log(spac.repeat(j) + start.repeat(j));
//     }
// }

let i = 0
while (i < per) {
    let j = per - 1
    i++
    while (j >= 0) {
        if (i + j == per - 1) {
            // console.log(start.repeat(i)) + console.log(spac.repeat(j));
            start += 2
        }
        j--
    }
    // start += 2
}

//tanpa perulangan

// console.log(spac.repeat(5) + start.repeat(1));
// console.log(spac.repeat(4) + start.repeat(2));
// console.log(spac.repeat(3) + start.repeat(3));
// console.log(spac.repeat(2) + start.repeat(4));
// console.log(spac.repeat(1) + start.repeat(5));