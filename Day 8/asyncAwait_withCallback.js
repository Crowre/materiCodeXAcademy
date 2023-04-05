//asyncronus
const geNoAntri = (nomor, cb) => {
    setTimeout(() => {
        setTimeout(() => {
            console.log(nomor);
            let paket = cb(nomor, 'B')
            console.log(paket)
            setTimeout(() => {
                let bill = tagihan(paket)
                console.log(bill);
            }, 2000)
        }, 1000)
    }, 3000)
}

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
            return 25000
        } else if (paket === 'KFC paket B') {
            console.log('24000')
            return 24000
        } else {
            console.log('belum ada pemesanan')
            return 'belum ada pemesanan'
        }
    }, 1000)
}

let nomor = geNoAntri('10')
console.log(nomor)
let paket = pilihPaket('A')
console.log(paket)
bill = tagihan(paket)
console.log(bill);