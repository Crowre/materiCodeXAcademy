// Membuat array 2 dimensi dengan ukuran 5x5
let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = new Array(5);
}

// Mengisi nilai array dengan angka 1-25
let num = 1;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        arr[i][j] = num++;
    }
}

// Mencetak nilai array dengan format diagonal kanan atas kiri bawah
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i + j === 4) {
            arr[i] = '';
            arr[j] = ''
        } else if (i + j < 4) {
            arr[i] = '*'
            arr[j] = '*'
        }
    }
}
