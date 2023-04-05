//asyncronus
const geNoAntri = (nomor, cb) => {
    setTimeout(() => {
        setTimeout(() => {
            console.log(nomor);
            let paket = cb(nomor, "B");
            console.log(paket);
            setTimeout(() => {
                let bill = tagihan(paket);
                console.log(bill);
            }, 2000);
        }, 1000);
    }, 3000);
};


const pilihPaket = (nomor, paket) => {
    setTimeout(() => {
        try {
            if (nomor <= 0 || isNaN(nomor)) {
                throw 'silahkan antri'
            }
            if (paket === 'A') {
                console.log('KFC paket A')
                return 'KFC paket A'
            } else {
                console.log('KFC paket B')
                return 'KFC paket B'
            }
        }
        catch (err) {
            console.log(err)
            return err
        }
    }, 2000)
}

const tagihan = paket => {
    setTimeout(() => {

        if (paket === 'KFC paket A') {
            console.log('25000')
            // return 25000
        } else if (paket === 'KFC paket B') {
            console.log('24000')
            // return 24000
        } else {
            console.log('belum ada pemesanan')
            // return 'belum ada pemesanan'
        }
    }, 1000)
}

// geNoAntri('10', pilihPaket)

// let nomor = geNoAntri('10')
// console.log(nomor)
// let paket = pilihPaket('A')
// console.log(paket)
// bill = tagihan(paket)
// console.log(bill);

function getNomorAntriChaining(nomor) {
    //cara 1
    // const result = new Promise((resolve, reject) => {
    //     //membuat seolah2 asyncronous
    //     setTimeout(() => {
    //         resolve(nomor)
    //     }, 3000)
    // })
    // return resolve;

    //cara 2
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(nomor)
        }, 5000)
    })
}

function pilihPaketChaining(nomor, paket) {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nomor <= 0 || isNaN(nomor)) {
                reject(new Error("silahkan antri"))
            }
            if (paket === 'A') {
                resolve("KFC paket A")
            }
            if (paket === 'B') {
                resolve("KFC paket B")
            }
        }, 2000)
    })
    return result
}

function tagihanChaining(paket) {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paket === 'KFC paket A') {
                resolve(25000)
            } else if (paket === 'KFC paket B') {
                resolve(24000)
            } else {
                resolve('Belum ada pemesanan')
            }
        }, 1000)
    })
    return result
}

const result = getNomorAntriChaining(10)
result
    .then((nomor) => {
        console.log(nomor)
        return pilihPaketChaining(nomor, 'B')
    })
    .then((paket) => {
        console.log(paket);
        return tagihanChaining(paket)
    })
    .then((bill) => {
        console.log(bill);
    })
    .catch((err) => {
        console.log(err.name, err.message);
    })

//menggunakan asyc-wait promise
//ganti dari promise ke async
// async function orderKFC(nomor) {
//     try {
//         const no_urut = await getNomorAntriChaining(nomor)
//         console.log(no_urut);
//         const paket = await pilihPaketChaining(no_urut, 'B')
//         console.log(paket);
//         const bill = await tagihanChaining(paket)
//         console.log(bill);
//     }
//     catch (err) {
//         console.log(err.toString());
//     }
// }

// orderKFC(25)