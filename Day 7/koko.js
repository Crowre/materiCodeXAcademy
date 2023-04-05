function segitiga2(panjang) {
    let hasil = '';

    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
// console.log(segitiga2(10));

// const segitiga3 = jum => {
//     let string = ''
//     for (let i = 1; i >= jum; i++) {
//         for (let j = 0; j < jum - i; j++) {
//             string += ''
//         }
//         for (let k = 0; k < i; k++) {
//             if (j == k) {
//                 string += '*'
//             } else {
//                 string += ''
//             }
//         }
//         string += '\n'
//     }
// }
// console.log(segitiga3(5));

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = 0; j < n - i; j++) {
//         string += " ";
//     }
//     // printing star
//     for (let k = 0; k < i; k++) {
//         if (i === n) {
//             string += "*";
//         } else {
//             if (j == 0 || j == i - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     string += "\n";
// }

// console.log(string);

// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//     // printing star
//     for (let j = 0; j < i; j++) {
//         if (i === n) {
//             string += "*";
//         }
//         else {
//             if (j == 0 || j == i - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     string += "\n";
// }
// console.log(string);

// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//     // printing star
//     for (let j = 0; j < i; j++) {
//         if (i === n) {
//             string += "*";
//         }
//         else {
//             if (j == 0 || j == i - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     string += "\n";
// }
// console.log(string);

// for (var i = 0; i < 5; i++) {
//     var row = '';
//     for (var j = 0; j < i; j++) {
//         row += ' ';
//     }
//     row += '*';
//     console.log(row);
// }


for (var i = 4; i > 0; i--) {
    var row = '';
    for (var j = 0; j < i - 1; j++) {
        row += ' ';
    }
    row += '*';
    console.log(row);
}
