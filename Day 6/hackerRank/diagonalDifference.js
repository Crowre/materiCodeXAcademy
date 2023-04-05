const printDiagonalSum = (mat, n) => {
    //inisialisasi variable diagonal miring kanan
    //dan miring kiri

    //cara 1

    let principal = 0, secondary = 0;
    for (let i = 0; i < n; i++) {
        principal += mat[i][i]
        secondary += mat[i][n - i - 1]
    }
    console.log(`principal diagonal = ${principal}`);
    console.log(`secondary diagonal = ${secondary}`);
    sum = secondary - principal
    console.log(sum);
}

let a =
    [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]
printDiagonalSum(a, 3)

//cara 2

let matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
];

const sumUpDiagonal = (matrix) => {
    //membuat sebuah object bernama sumDiagonal
    let sumDiagonal = { primary: 0, secondary: 0 }

    //membuat variable untuk mendapatkan panjang dari matrix
    let matrixLength = matrix.length;

    for (var i = 0; i < matrix.length; i++) {
        sumDiagonal.primary += matrix[i][i]
        sumDiagonal.secondary += matrix[i][matrixLength - i - 1]
    }
    sum = Math.abs(sumDiagonal.secondary - sumDiagonal.primary)
    //return the object
    return sum
}
console.log(sumUpDiagonal(matrix));

let arr =
    [
        [1, 2, 3],
        [4, 6, 4],
        [8, 3, 1]
    ]
//dari hackerRank
const diagonalDifference = (arr) => {
    //membuat variable untuk mendapatkan panjang dari matrix
    let a = 0, b = 0
    let n = arr.length
    for (var i = 0; i < n; i++) {
        a += arr[i][i]
        b += arr[i][n - i - 1]
    }
    let sum = Math.abs(b - a)
    //return the object
    return sum
}
console.log(diagonalDifference(arr));