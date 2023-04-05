const diagonal = size => {
    // Tentukan ukuran matriks

    // Inisialisasi matriks dengan string kosong
    let matrix = [];

    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(size).fill('');
    }

    // Isi matriks dengan bilangan ganjil
    let counter = 1;
    let i = 0

    while (i < size) {
        // let i = 0
        let j = size - 1
        i++
        while (j >= 0) {
            if ((i + j) === (size - 1)) {
                matrix[i][j] = counter;
                counter += 2;
            }
            // if ((i + j) == (size - 1)) {
            //     console.log(counter);
            //     matrix[i][j] = counter;
            //     counter += 2;
            // }
            j--
        }
    }
    // for (let i = 0; i < size; i++) {
    //     for (let j = size - 1; j >= 0; j--) {
    //         if ((i + j) === (size - 1)) {
    //             matrix[i][j] = counter;
    //             counter += 2;
    //         }
    //     }
    // }

    // Tampilkan matriks
    let x = 0;
    while (x < size) {
        // console.log(matrix[0][7]);

        console.log(matrix[x].join('\t'));
        x++
    }
    // for (let i = 0; i < size; i++) {
    //     console.log(matrix[i].join("\t"));
    // }
}
diagonal(7)

// 1.menentukan ukuran matrix
// 2.inisialisasi matrix dengan memberi string '' menggunakan perulangan for
// 3.setelah matrix terinisialisasi ,isi nilai-nilai ganjil pada
// diagonal kanan atas kek kiri bawah menggunakan perulangan for
// 4.check apakah index i dan j pada matrix berada pada diagonal kanan atas ke kiri baawh
// dengan syarat i + j = size-1
// 5.isi nilai matrix dengan nilai variable counter dan tambahkan dengan 2 agar
// nilai selanjutnya ganjil
// 6.setelah matrix terisi nilai2nya tampilkan matrix ke layar menggunakan perulangan for 