// const startEngine = (gear, cb) => {
//     setTimeout(() => {
//         console.log("start engine")
//         setTimeout(() => {
//             cb(gear)
//             // changeGear(3)
//             setTimeout(() => {
//                 goCar()
//                 setTimeout(() => {
//                     stopAcar()
//                     setTimeout(() => {
//                         shutDownEngine()
//                     }, 1000)
//                 }, 2000)
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }

// const changeGear = (gear) => {
//     console.log(`masukkan gigi ${gear} to move a car`);
// }

// const goCar = () => {
//     console.log('mobil berjalan');
// }

// const stopAcar = () => {
//     console.log('mobil berhenti');
// }

// const shutDownEngine = () => {
//     console.log('mesin mobil dimatikan');
// }

// let start = startEngine()
// console.log(start);
// let change = changeGear()
// console.log(change);
// let go = goCar ();
// console.log(go);
// let stop = stopAcar()
// console.log(stop);
// let shutdown = shutDownEngine()
// console.log(shutdown);

// startEngine(3, changeGear)

const startEngine = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mesin dinyalakan')
        }, 5000)
    })
    return result
}

const changeGear = (gear) => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(gear)
        }, 2000)
    })
    return result;
}

const goCar = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('jalankan mobil')
        }, 2500)
    })
    return result;
}

const stopAcar = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mobil berhenti')
        }, 3000)
    })
    return result;
}

const shutDownCar = () => {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('matikan mobil')
        }, 4000)
    })
    return result
}

// const result = startEngine(3)
// result
//     .then((gear) => {
//         console.log(`masukkan gear ${gear}`);
//         return changeGear(gear)
//     })
//     .then(() => {
//         return goCar
//     })
//     .then(() => {
//         return stopAcar
//     })
//     .then(() => {
//         return shutDownCar
//     })

async function jalankanMobil(gear) {
    try {
        const nyala = await startEngine()
        console.log(nyala);
        const gigi = await changeGear(gear)
        console.log(gigi);
        const maju = await goCar()
        console.log(maju);
        const berhenti = await stopAcar()
        console.log(berhenti);
        const mati = await shutDownCar()
        console.log(mati);
    } catch (err) {
        console.log(err.toString());
    }
}

jalankanMobil(4)