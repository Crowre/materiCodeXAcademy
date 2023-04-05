let angka = 'aaa';

try {
    if (typeof angka != 'number') {
        throw new Error('selain angka error')
    }
} catch (e) {
    console.log(e.name, ':', e.message);
}

switch (true) {
    case angka >= 90 && angka <= 100:
        console.log('A');
        break;
    case angka >= 80 && angka <= 89:
        console.log('B+');
        break;
    case angka >= 75 && angka <= 79:
        console.log('B');
        break;
    case angka >= 70 && angka <= 74:
        console.log('C+');
        break;
    case angka >= 60 && angka <= 69:
        console.log('C');
        break;
    case angka >= 50 && angka <= 59:
        console.log('D');
        break;
    default:
        console.log('E');
}