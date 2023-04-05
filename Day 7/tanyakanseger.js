//dari latihan 2 day 6
const gradeNilai = (angka) => {
    try {
        if (angka = '') {
            throw new Error('masukkan input angka')
        }
        if (typeof angka != 'number') {
            throw new Error('masukkan angka saja')
        }

        if (angka >= 90 && angka <= 100) {
            console.log('Grade A');
        } else if (angka >= 80 && angka <= 89) {
            console.log('Grade B+');
        } else if (angka >= 75 && angka <= 79) {
            console.log('Grade B');
        } else if (angka >= 70 && angka <= 74) {
            console.log('Grade C+');
        } else if (angka >= 60 && angka <= 69) {
            console.log('Grade C');
        } else if (angka >= 50 && angka <= 59) {
            console.log('Grade D');
        } else {
            console.log('Grade E');
        }

        // console.log(`kamu mendapatkan grade ${grade}`);

    } catch (e) {
        console.log(e.name + ':' + e.message);
    }
}
gradeNilai(60)