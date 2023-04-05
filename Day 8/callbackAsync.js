// const startEngine = (gear, cb) => {
//     setTimeout(() => {
//         console.log("start engine")
//         setTimeout(() => {
//             changeGear(3)
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

// startEngine()

// const startEngine = () => {
//     setTimeout(() => {
//         console.log('Engine Start..');
//     }, 5000)
//     // console.log('engine start..........');
// }

// const changeGear = (gear) => {
//     setTimeout(() => {
//         console.log(`masukkan gigi ${gear} untuk menjalankan mobil`)
//     }, 2000)
//     // console.log('change engine.........');
// }

// const goCar = () => {
//     setTimeout(() => {
//         console.log('the car has gone........');
//     }, 3000)
// }

// const stopCar = () => {
//     setTimeout(() => {
//         console.log('the car has stopped');
//     }, 7000)
// }

// const shutDownCar = () => {
//     setTimeout(() => {
//         console.log('the car has been turned off');
//     }, 1000)
// }


// //callback function
// const DriveCar = (cbFunction) => {
//     cbFunction()
//     changeGear(1)
//     goCar()
//     startEngine()
//     stopCar()
//     shutDownCar()
// }

// DriveCar(startEngine)

// setTimeout(() => { console.log('Engine Start..'); }, 1000)
// setTimeout(() => { console.log(`masukkan gigi ${gear} untuk menjalankan mobil`); }, 2000)
// setTimeout(() => { console.log('mobil berjalan'); }, 3000)
// setTimeout(() => { console.log('mobil berhenti'); }, 4000)
// setTimeout(() => { console.log('mesin mobil mati'); }, 5000)

const startEngine = (gear, cb) => {
    setTimeout(() => {
        console.log("start engine")
        setTimeout(() => {
            cb(gear)
            // changeGear(3)
            setTimeout(() => {
                goCar()
                setTimeout(() => {
                    stopAcar()
                    setTimeout(() => {
                        shutDownEngine()
                    }, 1000)
                }, 2000)
            }, 3000)
        }, 4000)
    }, 5000)
}

const changeGear = (gear) => {
    console.log(`masukkan gigi ${gear} to move a car`);
}

const goCar = () => {
    console.log('mobil berjalan');
}

const stopAcar = () => {
    console.log('mobil berhenti');
}

const shutDownEngine = () => {
    console.log('mesin mobil dimatikan');
}

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

startEngine(3, changeGear)

