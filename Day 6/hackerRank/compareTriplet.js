let alice = [1, 2, 3, 5]
let bob = [3, 7, 1, 8]
let dataAlice = 0
let dataBob = 0

for (let i = 0; i < alice.length; i++) {
    switch (true) {
        case alice[i] > bob[i]:
            dataAlice = dataAlice + 1;
            break;
        case alice[i] < bob[i]:
            dataBob = dataBob + 1;
            break;
        default:
            dataBob = 0
            dataAlice = 0
    }
}

console.log(dataAlice);
console.log(dataBob);