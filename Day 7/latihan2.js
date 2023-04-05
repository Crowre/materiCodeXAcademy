const startEngine = () => {
    setTimeout(() => {
        console.log('Engine Start..');
    }, 5000)
    // console.log('engine start..........');
}

const changeGear = (gear) => {
    setTimeout(() => {
        console.log(`masukkan gigi ${gear} untuk menjalankan mobil`)
    }, 2000)
    // console.log('change engine.........');
}

const goCar = () => {
    setTimeout(() => {
        console.log('the car has gone........');
    }, 3000)
}

const stopCar = () => {
    setTimeout(() => {
        console.log('the car has stopped');
    }, 7000)
}

const shutDownCar = () => {
    setTimeout(() => {
        console.log('the car has been turned off');
    }, 1000)
}


//callback function
const DriveCar = (cbFunction) => {
    cbFunction()
    changeGear(1)
    goCar()
    startEngine()
    stopCar()
    shutDownCar()
}

DriveCar(startEngine)

// setTimeout(() => { console.log('Engine Start..'); }, 1000)
// setTimeout(() => { console.log(`masukkan gigi ${gear} untuk menjalankan mobil`); }, 2000)
// setTimeout(() => { console.log('mobil berjalan'); }, 3000)
// setTimeout(() => { console.log('mobil berhenti'); }, 4000)
// setTimeout(() => { console.log('mesin mobil mati'); }, 5000)