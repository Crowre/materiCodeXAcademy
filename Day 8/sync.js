//syncronous

const geNoAntri = nomor => {
    return nomor
}

const pilihPaket = (nomor, paket) => {
    try {

        if (nomor <= 0 || isNaN(nomor)) {
            throw 'silahkan antri'
        }
        if (paket === 'A') {
            return 'KFC paket A'
        } else {
            return 'KFC paket B'
        }
    }
    catch (err) {
        return err
    }
}

const tagihan = paket => {
    if (paket === 'KFC paket A') {
        return 25000
    } else if (paket === 'KFC paket B') {
        return 24000
    } else {
        return 'belum ada pemesanan'
    }
}

let nomor = geNoAntri('10')
console.log(nomor)
let paket = pilihPaket('A')
console.log(paket)
bill = tagihan(paket)
console.log(bill);