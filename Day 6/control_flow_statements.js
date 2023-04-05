// penggunaan if untuk mengerjakan statements yang berada dalam block ketika kondisi true
// kondisi dapat berupa nilai atau ekspresi
// rekomendasi tetap pakai kurung kurawal untuk kemudahan maintain kode program

// if (condition) statement;
// if (codition) {
//statement to execute
// };

// let age = 19
// if (age > 18) {
//     console.log('kamu dapat maksud');
// }

// nested if ketika if di dalam if
// sebisa mungkin menghindari penggunaan nested if
// let age = 16
// let state = 'CA'

//cara nested
// if (state == 'CA') {
//     if (age == 16) {
//         console.log('you can drive');
//     }
// }

// hindari nested
// if (state == 'CA' && age == 16) {
//     console.log('you can drive');
// }

//ternary operator
// let age1 = 16
// let state1 = 'CA'
// if (state1 == 'CA') {
//     if (age1 == 16) {
//         message = ('you can drive');
//     }
// }
// console.log(message);

//let variable = condition ? expressionIfTrue : expressionIfFalse
// age >= 16 ? (message = 'you can drive') : (message = 'you cannot drive')

// let speed = 150
// let message = speed >= 140 ? 'too fast' : speed >= 80 ? 'Fast' : 'Ok'
// console.log(message);

//penggunaan switch case untuk mengerjakan kode program dalam block
//switch mengevaluasi ekspresi dan hasilnya dibandingkan dengan nilai pada case
//alternatif if else if else

// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     case value3:
//         statement3;
//         break;
//     default:
//         statement;
// }

let year = 2016;
let month = 2;
let dayCount;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    default:
        dayCount = 29;
}
